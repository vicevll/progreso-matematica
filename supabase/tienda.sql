-- Studappy: biblioteca personal de mazos adquiridos desde la tienda.
-- Ejecutar una vez en Supabase -> SQL Editor -> New query.

create table if not exists public.store_catalog (
  catalog_id text primary key,
  title text not null,
  description text not null default '',
  color text not null default '#2878e8',
  is_free boolean not null default true,
  active boolean not null default true
);

insert into public.store_catalog (catalog_id, title, description, color, is_free, active)
values (
  'paes-m1-numeros',
  'PAES M1: Números',
  '15 tarjetas breves de conceptos, fórmulas y ejercicios de Números para PAES M1.',
  '#2878e8',
  true,
  true
)
on conflict (catalog_id) do update set
  title = excluded.title,
  description = excluded.description,
  color = excluded.color,
  is_free = excluded.is_free,
  active = excluded.active;

-- Mazo del mago: PAES Ciencias, estructura atómica (6 submazos).
insert into public.store_catalog (catalog_id, title, description, color, is_free, active)
values (
  'paes-ciencias-mago',
  'Mazo del mago',
  '60 tarjetas de conocimiento sobre estructura atómica, en 6 submazos que puedes jugar por separado.',
  '#7b5cff',
  true,
  true
)
on conflict (catalog_id) do update set
  title = excluded.title,
  description = excluded.description,
  color = excluded.color,
  is_free = excluded.is_free,
  active = excluded.active;

create table if not exists public.user_decks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  catalog_id text not null references public.store_catalog(catalog_id),
  title text not null,
  description text not null default '',
  color text not null default '#2878e8',
  acquired_at timestamptz not null default now(),
  unique (user_id, catalog_id)
);

create table if not exists public.user_deck_cards (
  id bigint generated always as identity primary key,
  deck_id uuid not null references public.user_decks(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  card_key text not null,
  position integer not null,
  question text not null,
  answer text not null,
  unique (deck_id, card_key),
  unique (deck_id, position)
);

create index if not exists user_decks_user_idx on public.user_decks(user_id);
create index if not exists user_deck_cards_user_deck_idx on public.user_deck_cards(user_id, deck_id);

alter table public.store_catalog enable row level security;
alter table public.user_decks enable row level security;
alter table public.user_deck_cards enable row level security;

drop policy if exists store_catalog_read on public.store_catalog;
create policy store_catalog_read on public.store_catalog
  for select to anon, authenticated using (active = true);

drop policy if exists user_decks_read_own on public.user_decks;
create policy user_decks_read_own on public.user_decks
  for select to authenticated using (auth.uid() = user_id);

drop policy if exists user_decks_delete_own on public.user_decks;
create policy user_decks_delete_own on public.user_decks
  for delete to authenticated using (auth.uid() = user_id);

drop policy if exists user_decks_add_free on public.user_decks;
create policy user_decks_add_free on public.user_decks
  for insert to authenticated
  with check (
    auth.uid() = user_id
    and exists (
      select 1 from public.store_catalog c
      where c.catalog_id = user_decks.catalog_id and c.active = true and c.is_free = true
    )
  );

drop policy if exists user_deck_cards_read_own on public.user_deck_cards;
create policy user_deck_cards_read_own on public.user_deck_cards
  for select to authenticated using (auth.uid() = user_id);

drop policy if exists user_deck_cards_add_own on public.user_deck_cards;
create policy user_deck_cards_add_own on public.user_deck_cards
  for insert to authenticated
  with check (
    auth.uid() = user_id
    and exists (
      select 1 from public.user_decks d
      where d.id = user_deck_cards.deck_id and d.user_id = auth.uid()
    )
  );

grant select on public.store_catalog to anon, authenticated;
grant select, insert on public.user_decks, public.user_deck_cards to authenticated;
grant delete on public.user_decks to authenticated;

create or replace function public.adquirir_mazo(p_catalog_id text, p_cards jsonb)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_catalog public.store_catalog%rowtype;
  v_deck_id uuid;
begin
  if v_user_id is null then
    raise exception 'Debes iniciar sesión para adquirir un mazo.';
  end if;

  select * into v_catalog
  from public.store_catalog
  where catalog_id = p_catalog_id and active = true;

  if not found then
    raise exception 'El mazo no está disponible para adquisición gratuita.';
  end if;

  -- Mazos que se canjean con puntos (supabase/misiones.sql): hace falta el canje.
  if not v_catalog.is_free then
    if to_regclass('public.canjes') is null then
      raise exception 'El mazo no está disponible para adquisición gratuita.';
    end if;
    if not exists (select 1 from public.canjes where user_id = v_user_id and item = 'mazo:' || p_catalog_id) then
      raise exception 'Este mazo se canjea con puntos en la tienda.';
    end if;
  end if;

  if p_cards is null or coalesce(jsonb_typeof(p_cards), '') <> 'array' then
    raise exception 'El contenido del mazo debe ser una lista de tarjetas.';
  end if;

  if jsonb_array_length(p_cards) < 1 or jsonb_array_length(p_cards) > 100 then
    raise exception 'El mazo debe contener entre 1 y 100 tarjetas.';
  end if;

  if exists (
    select 1 from jsonb_array_elements(p_cards) as cards(card)
    where coalesce(card->>'id', '') = ''
       or coalesce(card->>'q', '') = ''
       or coalesce(card->>'a', '') = ''
  ) then
    raise exception 'Cada tarjeta debe tener id, pregunta y respuesta.';
  end if;

  insert into public.user_decks (user_id, catalog_id, title, description, color)
  values (v_user_id, v_catalog.catalog_id, v_catalog.title, v_catalog.description, v_catalog.color)
  on conflict (user_id, catalog_id) do nothing;

  select id into v_deck_id
  from public.user_decks
  where user_id = v_user_id and catalog_id = p_catalog_id;

  delete from public.user_deck_cards
  where deck_id = v_deck_id
    and card_key not in (select card->>'id' from jsonb_array_elements(p_cards) as cards(card));

  insert into public.user_deck_cards (deck_id, user_id, card_key, position, question, answer)
  select
    v_deck_id,
    v_user_id,
    card->>'id',
    ordinal::integer,
    card->>'q',
    card->>'a'
  from jsonb_array_elements(p_cards) with ordinality as cards(card, ordinal)
  where coalesce(card->>'id', '') <> ''
    and coalesce(card->>'q', '') <> ''
    and coalesce(card->>'a', '') <> ''
  on conflict (deck_id, card_key) do update set
    position = excluded.position,
    question = excluded.question,
    answer = excluded.answer;

  return v_deck_id;
end;
$$;

revoke all on function public.adquirir_mazo(text, jsonb) from public, anon;
grant execute on function public.adquirir_mazo(text, jsonb) to authenticated;

-- Publica en PostgREST el RPC si el SQL Editor no refresca el esquema automáticamente.
notify pgrst, 'reload schema';
