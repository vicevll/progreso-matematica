-- Studappy · límite del generador con IA: mazos por período.
-- Ejecutar en Supabase -> SQL Editor -> New query -> Run.
--
-- Cada vez que alguien abre el generador y usa la IA con la key de Studappy,
-- eso cuenta como 1 mazo. Dentro de ese mismo mazo puede leer archivos,
-- generar y regenerar hasta 'llamadas_por_mazo' veces sin gastar otro.
-- Quien guarda su propia API key de Gemini no pasa por este límite (la
-- Edge Function no llama a ia_consumir en ese caso).
--
-- Para cambiar los límites, edita ia_config y vuelve a ejecutar este archivo.

-- Versión anterior (límite por llamadas): se reemplaza.
drop function if exists public.ia_consumir(uuid);
drop function if exists public.ia_devolver(uuid);
drop table if exists public.ia_uso;

create table if not exists public.ia_sesiones (
  user_id uuid not null references auth.users(id) on delete cascade,
  sesion text not null check (char_length(sesion) between 8 and 64),
  creada timestamptz not null default now(),
  llamadas integer not null default 0 check (llamadas >= 0),
  primary key (user_id, sesion)
);

create index if not exists ia_sesiones_user_creada_idx on public.ia_sesiones(user_id, creada);

alter table public.ia_sesiones enable row level security;

-- Cada usuario puede ver sus propios mazos con IA (no puede modificarlos).
drop policy if exists ia_sesiones_read_own on public.ia_sesiones;
create policy ia_sesiones_read_own on public.ia_sesiones
  for select to authenticated using (auth.uid() = user_id);

grant select on public.ia_sesiones to authenticated;

-- Límites del generador (un solo lugar).
create or replace function public.ia_config()
returns jsonb
language sql
immutable
as $$
  select jsonb_build_object(
    'limite_mazos', 2,        -- mazos con IA por período, con la key de Studappy
    'llamadas_por_mazo', 8,   -- leer archivos + generar + regenerar dentro de un mazo
    'periodo', 'dia'          -- 'dia' | 'semana' | 'mes' | 'total'
  );
$$;

-- Inicio del período actual, en hora de Chile.
create or replace function public.ia_inicio_periodo(p_periodo text)
returns timestamptz
language sql
stable
as $$
  select case p_periodo
    when 'dia' then date_trunc('day', now() at time zone 'America/Santiago') at time zone 'America/Santiago'
    when 'semana' then date_trunc('week', now() at time zone 'America/Santiago') at time zone 'America/Santiago'
    when 'mes' then date_trunc('month', now() at time zone 'America/Santiago') at time zone 'America/Santiago'
    else '-infinity'::timestamptz
  end;
$$;

-- Cuántos mazos con IA le quedan al usuario en el período (sin gastar nada).
create or replace function public.ia_estado(p_user uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_cfg jsonb := public.ia_config();
  v_limite integer := (v_cfg->>'limite_mazos')::integer;
  v_periodo text := v_cfg->>'periodo';
  v_mazos integer;
begin
  select count(*) into v_mazos
  from public.ia_sesiones
  where user_id = p_user and creada >= public.ia_inicio_periodo(v_periodo) and llamadas > 0;

  return jsonb_build_object('restantes', greatest(v_limite - v_mazos, 0), 'limite', v_limite, 'periodo', v_periodo);
end;
$$;

-- Descuenta una llamada a la IA dentro de un mazo (sesión del generador).
-- Si la sesión es nueva, cuenta un mazo más del período.
-- Devuelve { restantes, limite, periodo }.
create or replace function public.ia_consumir(p_user uuid, p_sesion text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_cfg jsonb := public.ia_config();
  v_limite_mazos integer := (v_cfg->>'limite_mazos')::integer;
  v_llamadas_por_mazo integer := (v_cfg->>'llamadas_por_mazo')::integer;
  v_periodo text := v_cfg->>'periodo';
  v_inicio timestamptz := public.ia_inicio_periodo(v_cfg->>'periodo');
  v_llamadas integer;
  v_mazos integer;
  v_cuando text;
begin
  if p_user is null or coalesce(p_sesion, '') = '' then
    raise exception 'Faltan el usuario o la sesión.';
  end if;

  v_cuando := case v_periodo
    when 'dia' then 'de hoy'
    when 'semana' then 'de esta semana'
    when 'mes' then 'de este mes'
    else 'disponibles'
  end;

  -- Evita que dos pedidos simultáneos del mismo usuario se salten el límite.
  perform pg_advisory_xact_lock(hashtext(p_user::text));

  select llamadas into v_llamadas
  from public.ia_sesiones
  where user_id = p_user and sesion = p_sesion;

  if found then
    if v_llamadas >= v_llamadas_por_mazo then
      raise exception 'Este mazo ya usó sus % llamadas a la IA. Crea el mazo con lo que tienes o empieza uno nuevo.', v_llamadas_por_mazo
        using hint = 'cuota_mazo';
    end if;
    update public.ia_sesiones set llamadas = llamadas + 1
    where user_id = p_user and sesion = p_sesion;
  else
    select count(*) into v_mazos
    from public.ia_sesiones
    where user_id = p_user and creada >= v_inicio and llamadas > 0;
    if v_mazos >= v_limite_mazos then
      raise exception 'Ya usaste tus % mazos con IA %.', v_limite_mazos, v_cuando
        using hint = 'cuota_agotada';
    end if;
    insert into public.ia_sesiones (user_id, sesion, llamadas) values (p_user, p_sesion, 1);
  end if;

  select count(*) into v_mazos
  from public.ia_sesiones
  where user_id = p_user and creada >= v_inicio and llamadas > 0;

  return jsonb_build_object('restantes', greatest(v_limite_mazos - v_mazos, 0), 'limite', v_limite_mazos, 'periodo', v_periodo);
end;
$$;

-- Devuelve una llamada cuando Gemini falló sin generar nada. Si era la
-- primera llamada del mazo, el mazo deja de contar.
create or replace function public.ia_devolver(p_user uuid, p_sesion text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.ia_sesiones set llamadas = greatest(llamadas - 1, 0)
  where user_id = p_user and sesion = p_sesion;
  delete from public.ia_sesiones
  where user_id = p_user and sesion = p_sesion and llamadas = 0;
end;
$$;

-- Solo la Edge Function (con la service role key) puede llamarlas.
revoke all on function public.ia_config() from public, anon, authenticated;
revoke all on function public.ia_inicio_periodo(text) from public, anon, authenticated;
revoke all on function public.ia_estado(uuid) from public, anon, authenticated;
revoke all on function public.ia_consumir(uuid, text) from public, anon, authenticated;
revoke all on function public.ia_devolver(uuid, text) from public, anon, authenticated;
grant execute on function public.ia_config() to service_role;
grant execute on function public.ia_inicio_periodo(text) to service_role;
grant execute on function public.ia_estado(uuid) to service_role;
grant execute on function public.ia_consumir(uuid, text) to service_role;
grant execute on function public.ia_devolver(uuid, text) to service_role;

notify pgrst, 'reload schema';
