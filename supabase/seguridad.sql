-- ============================================================
-- SEGURIDAD: control de acceso server-side a contenido.
-- Ejecutar en Supabase -> SQL Editor -> New query -> Run.
-- La web usa esta función para decidir si un usuario puede
-- entrar a una sección. Nadie puede desbloquearlo desde el
-- navegador: la decisión la toma Supabase.
-- ============================================================

-- 1) Tabla para desbloqueos puntuales (p. ej. Álgebra superior
--    solo para ciertas cuentas).
create table if not exists public.accesos_extra (
  user_id uuid not null references auth.users (id) on delete cascade,
  area_id text not null,
  granted_at timestamptz not null default now(),
  primary key (user_id, area_id)
);

alter table public.accesos_extra enable row level security;

drop policy if exists "accesos_extra_select_own" on public.accesos_extra;
create policy "accesos_extra_select_own" on public.accesos_extra
  for select using (auth.uid() = user_id);

drop policy if exists "accesos_extra_insert_own" on public.accesos_extra;
create policy "accesos_extra_insert_own" on public.accesos_extra
  for insert with check (auth.uid() = user_id);

drop policy if exists "accesos_extra_delete_own" on public.accesos_extra;
create policy "accesos_extra_delete_own" on public.accesos_extra
  for delete using (auth.uid() = user_id);

-- 2) Función de acceso (RPC). La página la llama con el RPC:
--    supabase.rpc('tiene_acceso', { p_area: '...', p_tema: '...' })
create or replace function public.tiene_acceso(p_area text, p_tema text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select
    case
      -- Álgebra superior: SOLO con desbloqueo explícito (fila en accesos_extra)
      when p_area = 'algebra-superior' then
        exists (
          select 1 from public.accesos_extra
          where user_id = auth.uid() and area_id = 'algebra-superior'
        )
      -- Cálculo y temas premium: requieren sesión iniciada
      when p_area = 'calculo' then
        auth.uid() is not null
      when p_tema in ('trigonometria','numeros-reales-complejos','demostracion','polinomios') then
        auth.uid() is not null
      -- Todo lo demás es público
      else true
    end
$$;

grant execute on function public.tiene_acceso(text, text) to anon, authenticated;

-- 3) Ejemplo: desbloquear Álgebra superior para un usuario concreto.
--    Reemplaza EL_UUID con el id del usuario (Authentication -> Users).
--    insert into public.accesos_extra (user_id, area_id) values ('EL_UUID', 'algebra-superior');