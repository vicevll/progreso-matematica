-- Studappy · límite del generador con IA: mazos por período.
-- Ejecutar en Supabase -> SQL Editor -> New query -> Run.
--
-- Cada vez que alguien abre el generador y usa la IA, eso cuenta como 1 mazo.
-- Dentro de ese mismo mazo puede leer archivos, generar y regenerar hasta
-- v_llamadas_por_mazo veces sin gastar otro. Para cambiar los límites, edita
-- las constantes de ia_consumir y vuelve a ejecutar este archivo.

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

-- Descuenta una llamada a la IA dentro de un mazo (sesión del generador).
-- Si la sesión es nueva, cuenta un mazo más del período.
-- Devuelve { restantes: mazos que quedan en el período, periodo }.
create or replace function public.ia_consumir(p_user uuid, p_sesion text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_limite_mazos constant integer := 8;        -- mazos con IA por período
  v_llamadas_por_mazo constant integer := 8;   -- leer archivos + generar + regenerar
  v_periodo constant text := 'dia';            -- 'dia' | 'semana' | 'mes' | 'total'
  v_local timestamp := now() at time zone 'America/Santiago';
  v_inicio timestamptz;
  v_llamadas integer;
  v_mazos integer;
  v_cuando text;
begin
  if p_user is null or coalesce(p_sesion, '') = '' then
    raise exception 'Faltan el usuario o la sesión.';
  end if;

  v_inicio := case v_periodo
    when 'dia' then date_trunc('day', v_local) at time zone 'America/Santiago'
    when 'semana' then date_trunc('week', v_local) at time zone 'America/Santiago'
    when 'mes' then date_trunc('month', v_local) at time zone 'America/Santiago'
    else '-infinity'::timestamptz
  end;
  v_cuando := case v_periodo
    when 'dia' then 'por hoy'
    when 'semana' then 'esta semana'
    when 'mes' then 'este mes'
    else 'en total'
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
      raise exception 'Llegaste al límite de % mazos con IA %. Vuelve a intentarlo más adelante.', v_limite_mazos, v_cuando
        using hint = 'cuota_agotada';
    end if;
    insert into public.ia_sesiones (user_id, sesion, llamadas) values (p_user, p_sesion, 1);
  end if;

  select count(*) into v_mazos
  from public.ia_sesiones
  where user_id = p_user and creada >= v_inicio and llamadas > 0;

  return jsonb_build_object('restantes', greatest(v_limite_mazos - v_mazos, 0), 'periodo', v_periodo);
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
revoke all on function public.ia_consumir(uuid, text) from public, anon, authenticated;
revoke all on function public.ia_devolver(uuid, text) from public, anon, authenticated;
grant execute on function public.ia_consumir(uuid, text) to service_role;
grant execute on function public.ia_devolver(uuid, text) to service_role;

notify pgrst, 'reload schema';
