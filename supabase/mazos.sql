-- Studappy · mazos propios y avance de estudio en la cuenta.
-- Ejecutar una vez en Supabase -> SQL Editor -> New query -> Run.
--
-- Los mazos que cada usuario crea (a mano o con IA) y su avance se guardan
-- aquí. El navegador mantiene una copia local por cuenta para funcionar sin
-- conexión y sincroniza los cambios cuando puede.

create table if not exists public.mazos_propios (
  user_id uuid not null references auth.users(id) on delete cascade,
  id text not null check (char_length(id) between 1 and 64),
  nombre text not null default '' check (char_length(nombre) <= 120),
  descripcion text not null default '' check (char_length(descripcion) <= 300),
  color text not null default '#2f80ed' check (char_length(color) <= 32),
  cards jsonb not null default '[]'::jsonb
    check (jsonb_typeof(cards) = 'array' and jsonb_array_length(cards) <= 1000 and octet_length(cards::text) <= 1000000),
  -- Momento del último cambio según el dispositivo (ms). Gana el más reciente.
  actualizado bigint not null default 0,
  creado_en timestamptz not null default now(),
  modificado_en timestamptz not null default now(),
  primary key (user_id, id)
);

create table if not exists public.progreso_usuario (
  user_id uuid primary key references auth.users(id) on delete cascade,
  -- { "<id del mazo>": { "<id de la tarjeta>": 1, ... }, ... }
  datos jsonb not null default '{}'::jsonb
    check (jsonb_typeof(datos) = 'object' and octet_length(datos::text) <= 1000000),
  actualizado bigint not null default 0,
  modificado_en timestamptz not null default now()
);

create or replace function public.tocar_modificado_en()
returns trigger
language plpgsql
as $$
begin
  new.modificado_en := now();
  return new;
end;
$$;

drop trigger if exists mazos_propios_modificado on public.mazos_propios;
create trigger mazos_propios_modificado before update on public.mazos_propios
  for each row execute function public.tocar_modificado_en();

drop trigger if exists progreso_usuario_modificado on public.progreso_usuario;
create trigger progreso_usuario_modificado before update on public.progreso_usuario
  for each row execute function public.tocar_modificado_en();

alter table public.mazos_propios enable row level security;
alter table public.progreso_usuario enable row level security;

-- Cada usuario solo ve y modifica sus propias filas.
drop policy if exists mazos_propios_select on public.mazos_propios;
create policy mazos_propios_select on public.mazos_propios
  for select to authenticated using (auth.uid() = user_id);
drop policy if exists mazos_propios_insert on public.mazos_propios;
create policy mazos_propios_insert on public.mazos_propios
  for insert to authenticated with check (auth.uid() = user_id);
drop policy if exists mazos_propios_update on public.mazos_propios;
create policy mazos_propios_update on public.mazos_propios
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
drop policy if exists mazos_propios_delete on public.mazos_propios;
create policy mazos_propios_delete on public.mazos_propios
  for delete to authenticated using (auth.uid() = user_id);

drop policy if exists progreso_usuario_select on public.progreso_usuario;
create policy progreso_usuario_select on public.progreso_usuario
  for select to authenticated using (auth.uid() = user_id);
drop policy if exists progreso_usuario_insert on public.progreso_usuario;
create policy progreso_usuario_insert on public.progreso_usuario
  for insert to authenticated with check (auth.uid() = user_id);
drop policy if exists progreso_usuario_update on public.progreso_usuario;
create policy progreso_usuario_update on public.progreso_usuario
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

grant select, insert, update, delete on public.mazos_propios to authenticated;
grant select, insert, update on public.progreso_usuario to authenticated;

notify pgrst, 'reload schema';
