-- Progreso por sección y estado de usuario.
-- Ejecutar en Supabase -> SQL Editor -> New query -> Run.

create table if not exists public.section_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  area_id text not null,
  tema_id text not null,
  section_index integer not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, area_id, tema_id, section_index)
);

alter table public.section_progress enable row level security;

drop policy if exists "progress_select_own" on public.section_progress;
create policy "progress_select_own" on public.section_progress
  for select using (auth.uid() = user_id);

drop policy if exists "progress_insert_own" on public.section_progress;
create policy "progress_insert_own" on public.section_progress
  for insert with check (auth.uid() = user_id);

drop policy if exists "progress_update_own" on public.section_progress;
create policy "progress_update_own" on public.section_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "progress_delete_own" on public.section_progress;
create policy "progress_delete_own" on public.section_progress
  for delete using (auth.uid() = user_id);

create index if not exists section_progress_user_idx
  on public.section_progress (user_id);

create table if not exists public.user_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  last_area text,
  last_tema text,
  updated_at timestamptz not null default now()
);

alter table public.user_state enable row level security;

drop policy if exists "state_select_own" on public.user_state;
create policy "state_select_own" on public.user_state
  for select using (auth.uid() = user_id);

drop policy if exists "state_insert_own" on public.user_state;
create policy "state_insert_own" on public.user_state
  for insert with check (auth.uid() = user_id);

drop policy if exists "state_update_own" on public.user_state;
create policy "state_update_own" on public.user_state
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
