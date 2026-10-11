-- Studappy · cuota diaria del generador con IA.
-- Ejecutar una vez en Supabase -> SQL Editor -> New query -> Run.
--
-- La Edge Function "generar-tarjetas" descuenta un uso por cada llamada a
-- Gemini (leer un archivo o generar tarjetas). Para cambiar el límite diario,
-- edita v_limite en ia_consumir y vuelve a ejecutar este archivo.

create table if not exists public.ia_uso (
  user_id uuid not null references auth.users(id) on delete cascade,
  dia date not null,
  usos integer not null default 0 check (usos >= 0),
  primary key (user_id, dia)
);

alter table public.ia_uso enable row level security;

-- Cada usuario puede ver su propio uso (no puede modificarlo).
drop policy if exists ia_uso_read_own on public.ia_uso;
create policy ia_uso_read_own on public.ia_uso
  for select to authenticated using (auth.uid() = user_id);

grant select on public.ia_uso to authenticated;

-- Descuenta un uso del día (hora de Chile) y devuelve cuántos quedan.
-- Si se supera el límite lanza un error con hint 'cuota_agotada'.
create or replace function public.ia_consumir(p_user uuid)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_limite constant integer := 30;
  v_dia date := (now() at time zone 'America/Santiago')::date;
  v_usos integer;
begin
  if p_user is null then
    raise exception 'Falta el usuario.';
  end if;

  insert into public.ia_uso (user_id, dia, usos)
  values (p_user, v_dia, 1)
  on conflict (user_id, dia) do update set usos = public.ia_uso.usos + 1
  returning usos into v_usos;

  if v_usos > v_limite then
    raise exception 'Llegaste al límite de % usos del generador por hoy. Vuelve mañana.', v_limite
      using hint = 'cuota_agotada';
  end if;

  return v_limite - v_usos;
end;
$$;

-- Devuelve un uso cuando la llamada a Gemini falló sin generar nada.
create or replace function public.ia_devolver(p_user uuid)
returns void
language sql
security definer
set search_path = public
as $$
  update public.ia_uso
  set usos = greatest(usos - 1, 0)
  where user_id = p_user
    and dia = (now() at time zone 'America/Santiago')::date;
$$;

-- Solo la Edge Function (con la service role key) puede llamarlas.
-- Así un usuario no puede devolverse usos llamando a la API directamente.
revoke all on function public.ia_consumir(uuid) from public, anon, authenticated;
revoke all on function public.ia_devolver(uuid) from public, anon, authenticated;
grant execute on function public.ia_consumir(uuid) to service_role;
grant execute on function public.ia_devolver(uuid) to service_role;

notify pgrst, 'reload schema';
