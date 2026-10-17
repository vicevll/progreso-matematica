-- Studappy · misiones y puntos.
-- Ejecutar en Supabase -> SQL Editor -> New query -> Run, DESPUÉS de mazos.sql,
-- tienda.sql, ia.sql y admin.sql. Se puede volver a ejecutar sin perder datos.
--
-- Cómo funciona:
--   - Cada día salen 3 misiones diarias y cada semana 3 semanales, elegidas
--     del catálogo de abajo. Son las mismas para todos y cambian a las 00:00
--     (hora de Chile); las semanales, los lunes.
--   - El progreso se calcula aquí, con lo que la web ya registra: sesiones de
--     estudio (admin.sql), mazos de la tienda, mazos propios y el generador.
--   - Al reclamar una misión se suman puntos. Los puntos se canjean en la
--     tienda por temas visuales, IA plus y (próximamente) mazos.
--   - Nadie puede escribir puntos desde el navegador: el saldo solo cambia con
--     reclamar_mision y canjear.
--
-- Para cambiar misiones, puntos o precios, edita los insert de este archivo y
-- vuelve a ejecutarlo. Para probar todo desde el panel /admin, ejecuta después
-- supabase/admin-economia.sql. Para regalar puntos a alguien:
--   insert into public.puntos_movimientos (user_id, cantidad, motivo, ref)
--   select id, 100, 'ajuste', 'regalo' from auth.users where email = 'correo@ejemplo.com';

-- ---------------------------------------------------------------------------
-- Catálogo de misiones
-- ---------------------------------------------------------------------------

create table if not exists public.misiones_catalogo (
  id text primary key check (id ~ '^[a-z0-9-]{3,40}$'),
  tipo text not null check (tipo in ('diaria', 'semanal')),
  titulo text not null,
  descripcion text not null,
  icono text not null default 'estrella',
  regla text not null,
  meta integer not null check (meta > 0),
  -- Puntos al completarla. Si por_unidad, puntos por cada unidad (hasta meta).
  puntos integer not null check (puntos > 0),
  por_unidad boolean not null default false,
  parametros jsonb not null default '{}'::jsonb,
  activa boolean not null default true
);

alter table public.misiones_catalogo enable row level security;

insert into public.misiones_catalogo (id, tipo, titulo, descripcion, icono, regla, meta, puntos, por_unidad, parametros) values
  -- Diarias
  ('d-mazo-tienda', 'diaria', 'Coleccionista', 'Agrega a tu biblioteca un mazo de la tienda que nunca hayas tenido.', 'cofre', 'mazo_tienda', 1, 20, false, '{}'),
  ('d-lo-se', 'diaria', 'Mente brillante', 'Gana 10 pts por cada tarjeta que marques «Lo sé», hasta 20 tarjetas.', 'estrella', 'saber', 20, 10, true, '{}'),
  ('d-responder', 'diaria', 'Calentamiento', 'Responde 30 tarjetas de cualquier mazo.', 'pergamino', 'responder', 30, 25, false, '{}'),
  ('d-minutos', 'diaria', 'Concentración total', 'Estudia durante 10 minutos.', 'reloj', 'minutos_estudio', 10, 30, false, '{}'),
  ('d-ronda', 'diaria', 'Ronda completa', 'Termina una ronda de estudio de al menos 5 tarjetas.', 'bandera', 'completar_rondas', 1, 20, false, '{"min_total": 5}'),
  ('d-pendientes', 'diaria', 'Sin cuentas pendientes', 'Termina un repaso de tus tarjetas pendientes.', 'carta', 'completar_rondas', 1, 25, false, '{"filtro": "pendientes", "min_total": 1}'),
  ('d-mago', 'diaria', 'Aprendiz del mago', 'Responde 10 tarjetas del Mazo del mago.', 'matraz', 'responder', 10, 20, false, '{"catalogo": "paes-ciencias-mago"}'),
  -- Semanales
  ('s-submazos-mago', 'semanal', 'Discípulo del mago', 'Completa 2 submazos del Mazo del mago.', 'matraz', 'completar_submazos', 2, 100, false, '{"catalogo": "paes-ciencias-mago"}'),
  ('s-mazo-ia', 'semanal', 'Hechicero digital', 'Crea un mazo con el generador de IA.', 'chispa', 'crear_mazo_ia', 1, 200, false, '{}'),
  ('s-dos-mazos', 'semanal', 'Doble victoria', 'Completa 2 mazos distintos, los que quieras.', 'trofeo', 'completar_mazos', 2, 80, false, '{"min_total": 5}'),
  ('s-racha', 'semanal', 'Racha de fuego', 'Estudia 4 días distintos esta semana.', 'llama', 'dias_estudio', 4, 120, false, '{"min_respuestas": 5}'),
  ('s-sabio', 'semanal', 'Gran sabio', 'Marca «Lo sé» en 100 tarjetas.', 'corona', 'saber', 100, 150, false, '{}'),
  ('s-artesano', 'semanal', 'Artesano', 'Crea un mazo a mano con al menos 8 tarjetas.', 'lapiz', 'crear_mazo_manual', 1, 80, false, '{"min_tarjetas": 8}')
on conflict (id) do update set
  tipo = excluded.tipo, titulo = excluded.titulo, descripcion = excluded.descripcion, icono = excluded.icono,
  regla = excluded.regla, meta = excluded.meta, puntos = excluded.puntos, por_unidad = excluded.por_unidad,
  parametros = excluded.parametros;

-- Cuántas misiones salen por período.
create or replace function public.economia_config()
returns jsonb
language sql
immutable
as $$
  select jsonb_build_object('diarias', 3, 'semanales', 3);
$$;

-- ---------------------------------------------------------------------------
-- Ítems que se canjean con puntos
-- ---------------------------------------------------------------------------

create table if not exists public.tienda_items (
  id text primary key check (id ~ '^[a-z0-9:-]{3,80}$'),
  tipo text not null check (tipo in ('tema', 'ia_plus', 'mazo')),
  titulo text not null,
  descripcion text not null default '',
  precio integer not null check (precio >= 0),
  estado text not null default 'disponible' check (estado in ('disponible', 'proximamente', 'oculto')),
  repetible boolean not null default false,   -- se puede canjear varias veces (IA plus)
  datos jsonb not null default '{}'::jsonb,
  orden integer not null default 0
);

alter table public.tienda_items enable row level security;

insert into public.tienda_items (id, tipo, titulo, descripcion, precio, estado, repetible, datos, orden) values
  ('tema:noche', 'tema', 'Noche', 'El tema clásico de Studappy.', 0, 'disponible', false, '{}', 10),
  ('tema:aurora', 'tema', 'Aurora', 'Verdes y turquesas de aurora austral.', 500, 'disponible', false, '{}', 11),
  ('tema:atardecer', 'tema', 'Atardecer', 'Naranjos y rosados de fin de día.', 500, 'disponible', false, '{}', 12),
  ('tema:bosque', 'tema', 'Bosque', 'Verdes de bosque nativo.', 500, 'disponible', false, '{}', 13),
  ('tema:arcade', 'tema', 'Arcade', 'Neón retro de sala de juegos.', 800, 'disponible', false, '{}', 14),
  -- IA plus: el día que se canjea, el generador deja crear 3 mazos con IA en
  -- vez de 2 (mismo modelo y mismas tarjetas). Vale hasta las 00:00 de Chile.
  ('ia-plus', 'ia_plus', 'IA plus', 'Crea 3 mazos con IA hoy en vez de 2. Vale hasta las 00:00.', 400, 'disponible', true, '{"extra": 1}', 20),
  -- Mazos por puntos: 'mazo:<id del catálogo>' con datos {"catalog_id", "nivel"}.
  -- Cada uno necesita su fila en store_catalog (tienda.sql, is_free = false) y su
  -- entrada en data/catalogo-tienda.js.
  ('mazo:paes-quimica-estequiometria', 'mazo', 'Estequiometría', 'Mol, masa molar, balanceo y reactivo limitante, con 15 ejercicios.', 200, 'disponible', false, '{"catalog_id": "paes-quimica-estequiometria", "nivel": "pequeno"}', 30),
  ('mazo:medicina-estequiometria', 'mazo', 'Estequiometría nivel medicina', 'Leyes ponderales, fórmulas, peso equivalente y rendimiento, con 10 ejercicios.', 500, 'disponible', false, '{"catalog_id": "medicina-estequiometria", "nivel": "grande"}', 31),
  -- Ejemplos de antes: quedan ocultos (el premium se muestra como «Próximamente»).
  ('mazo:proximo-pequeno', 'mazo', 'Mazo pequeño', 'Hasta 20 tarjetas sobre un tema puntual.', 250, 'oculto', false, '{"nivel": "pequeno"}', 40),
  ('mazo:proximo-grande', 'mazo', 'Mazo grande', '40 tarjetas o más para repasar una unidad completa.', 600, 'oculto', false, '{"nivel": "grande"}', 41),
  ('mazo:proximo-premium', 'mazo', 'Mazo premium', 'Diseño especial y submazos, como el Mazo del mago.', 1000, 'proximamente', false, '{"nivel": "premium"}', 42)
on conflict (id) do update set
  tipo = excluded.tipo, titulo = excluded.titulo, descripcion = excluded.descripcion, precio = excluded.precio,
  estado = excluded.estado, repetible = excluded.repetible, datos = excluded.datos, orden = excluded.orden;

-- ---------------------------------------------------------------------------
-- Tablas de cada usuario (solo se leen y escriben con las funciones de abajo)
-- ---------------------------------------------------------------------------

create table if not exists public.puntos_movimientos (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  cantidad integer not null check (cantidad <> 0),
  motivo text not null check (motivo in ('mision', 'canje', 'ajuste')),
  ref text not null default '',
  creado timestamptz not null default now()
);
create index if not exists puntos_movimientos_user_idx on public.puntos_movimientos(user_id, creado);

create table if not exists public.misiones_reclamadas (
  user_id uuid not null references auth.users(id) on delete cascade,
  mision text not null references public.misiones_catalogo(id) on delete cascade,
  periodo text not null,
  unidades integer not null default 1,   -- unidades ya pagadas (misiones por unidad)
  puntos integer not null default 0,
  reclamada timestamptz not null default now(),
  primary key (user_id, mision, periodo)
);

create table if not exists public.canjes (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  item text not null references public.tienda_items(id),
  puntos integer not null,
  creado timestamptz not null default now(),
  vence timestamptz,          -- IA plus: hasta cuándo sube el límite (fin del día)
  usado timestamptz,          -- (versión anterior de IA plus, sin uso)
  sesion text,                -- (versión anterior de IA plus, sin uso)
  llamadas integer not null default 0
);
create index if not exists canjes_user_idx on public.canjes(user_id, item);

create table if not exists public.juego_perfil (
  user_id uuid primary key references auth.users(id) on delete cascade,
  tema text not null default 'tema:noche' references public.tienda_items(id),
  actualizado timestamptz not null default now()
);

-- Primera vez que cada usuario agregó cada mazo de la tienda (quitarlo y
-- volver a agregarlo no cuenta como nuevo).
create table if not exists public.mazos_adquiridos_log (
  user_id uuid not null references auth.users(id) on delete cascade,
  catalog_id text not null,
  primera timestamptz not null default now(),
  primary key (user_id, catalog_id)
);

-- Generaciones con IA que terminaron bien (lo escribe la Edge Function).
create table if not exists public.ia_generaciones (
  user_id uuid not null references auth.users(id) on delete cascade,
  sesion text not null,
  creada timestamptz not null default now(),
  propia boolean not null default false,
  plus boolean not null default false,
  primary key (user_id, sesion)
);

-- Progreso extra que el administrador se da a sí mismo para probar misiones
-- (panel /admin -> Economía, supabase/admin-economia.sql).
create table if not exists public.misiones_extra (
  user_id uuid not null references auth.users(id) on delete cascade,
  mision text not null references public.misiones_catalogo(id) on delete cascade,
  periodo text not null,
  unidades integer not null check (unidades > 0),
  creado timestamptz not null default now(),
  primary key (user_id, mision, periodo)
);

alter table public.puntos_movimientos enable row level security;
alter table public.misiones_reclamadas enable row level security;
alter table public.canjes enable row level security;
alter table public.juego_perfil enable row level security;
alter table public.mazos_adquiridos_log enable row level security;
alter table public.ia_generaciones enable row level security;
alter table public.misiones_extra enable row level security;
-- Sin políticas: el navegador no las lee ni las escribe directamente.

create or replace function public.registrar_adquisicion()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.mazos_adquiridos_log (user_id, catalog_id, primera)
  values (new.user_id, new.catalog_id, coalesce(new.acquired_at, now()))
  on conflict (user_id, catalog_id) do nothing;
  return new;
end;
$$;

drop trigger if exists user_decks_registrar_adquisicion on public.user_decks;
create trigger user_decks_registrar_adquisicion after insert on public.user_decks
  for each row execute function public.registrar_adquisicion();

-- Los mazos que ya tenía cada uno cuentan como adquiridos (no dan misión hoy).
insert into public.mazos_adquiridos_log (user_id, catalog_id, primera)
select user_id, catalog_id, acquired_at from public.user_decks
on conflict (user_id, catalog_id) do nothing;

-- Cuentas de prueba: usuarios anónimos de Supabase (sin correo) que se crean
-- con «Probar gratis» en la portada (js/account.js). Ven la tienda, pero no
-- reclaman misiones ni canjean. La misma función está en tienda.sql, ia.sql,
-- misiones.sql y admin.sql.
create or replace function public.cuenta_prueba(p_user uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select u.is_anonymous from auth.users u where u.id = p_user), false);
$$;
revoke all on function public.cuenta_prueba(uuid) from public, anon;
grant execute on function public.cuenta_prueba(uuid) to authenticated, service_role;

-- ---------------------------------------------------------------------------
-- Períodos, rotación y progreso
-- ---------------------------------------------------------------------------

-- Período actual de un tipo de misión, en hora de Chile.
create or replace function public.economia_periodo(
  p_tipo text,
  out clave text, out ini timestamptz, out fin timestamptz
)
language plpgsql
stable
as $$
declare
  v_hoy date := (now() at time zone 'America/Santiago')::date;
  v_lunes date := date_trunc('week', now() at time zone 'America/Santiago')::date;
begin
  if p_tipo = 'semanal' then
    clave := 'S' || to_char(v_lunes, 'YYYY-MM-DD');
    ini := v_lunes::timestamp at time zone 'America/Santiago';
    fin := (v_lunes + 7)::timestamp at time zone 'America/Santiago';
  else
    clave := 'D' || to_char(v_hoy, 'YYYY-MM-DD');
    ini := v_hoy::timestamp at time zone 'America/Santiago';
    fin := (v_hoy + 1)::timestamp at time zone 'America/Santiago';
  end if;
end;
$$;

-- Misiones de un período: las mismas para todos, en un orden que cambia con
-- el período.
create or replace function public.misiones_del_periodo(p_tipo text, p_clave text)
returns setof public.misiones_catalogo
language sql
stable
security definer
set search_path = public
as $$
  select m.*
  from public.misiones_catalogo m
  where m.tipo = p_tipo and m.activa
  order by md5(m.id || ':' || p_clave)
  limit (public.economia_config() ->> case when p_tipo = 'semanal' then 'semanales' else 'diarias' end)::integer;
$$;

-- Progreso de una misión. Solo cuentan sesiones de estudio creíbles: al menos
-- 1 segundo por respuesta (las respuestas de más no suman).
create or replace function public.mision_progreso(
  p_user uuid, p_regla text, p_param jsonb, p_ini timestamptz, p_fin timestamptz
)
returns integer
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v integer := 0;
  v_cat text := nullif(p_param ->> 'catalogo', '');
  v_min integer := coalesce((p_param ->> 'min_total')::integer, 5);
begin
  if p_regla = 'saber' then
    select coalesce(sum(least(e.sabe, e.segundos)), 0) into v
    from public.estudio_sesiones e
    where e.user_id = p_user and e.inicio >= p_ini and e.inicio < p_fin
      and (v_cat is null or e.catalogo = v_cat);

  elsif p_regla = 'responder' then
    select coalesce(sum(least(e.respondidas, e.segundos)), 0) into v
    from public.estudio_sesiones e
    where e.user_id = p_user and e.inicio >= p_ini and e.inicio < p_fin
      and (v_cat is null or e.catalogo = v_cat);

  elsif p_regla = 'minutos_estudio' then
    select coalesce(sum(e.segundos), 0) / 60 into v
    from public.estudio_sesiones e
    where e.user_id = p_user and e.inicio >= p_ini and e.inicio < p_fin and e.respondidas > 0;

  elsif p_regla in ('completar_rondas', 'completar_mazos', 'completar_submazos') then
    with rondas as (
      select e.mazo_id, e.seccion, e.filtro
      from public.estudio_sesiones e
      where e.user_id = p_user and e.inicio >= p_ini and e.inicio < p_fin
        and e.completada and e.respondidas >= e.total and e.total >= v_min
        and e.segundos >= e.respondidas
        and (v_cat is null or e.catalogo = v_cat)
        and (p_param ->> 'filtro' is null or e.filtro = p_param ->> 'filtro')
    )
    select case p_regla
      when 'completar_rondas' then (select count(*) from rondas)
      when 'completar_mazos' then (select count(distinct mazo_id || ':' || coalesce(seccion, '')) from rondas)
      -- Terminar el mazo completo de una vez cuenta como todos sus submazos.
      else (select count(distinct seccion) from rondas where seccion is not null)
           + (select case when exists (select 1 from rondas where seccion is null) then 1000 else 0 end)
    end into v;

  elsif p_regla = 'dias_estudio' then
    select count(*) into v from (
      select (e.inicio at time zone 'America/Santiago')::date
      from public.estudio_sesiones e
      where e.user_id = p_user and e.inicio >= p_ini and e.inicio < p_fin
      group by 1
      having sum(least(e.respondidas, e.segundos)) >= coalesce((p_param ->> 'min_respuestas')::integer, 5)
    ) dias;

  elsif p_regla = 'mazo_tienda' then
    select count(*) into v
    from public.mazos_adquiridos_log l
    where l.user_id = p_user and l.primera >= p_ini and l.primera < p_fin;

  elsif p_regla = 'crear_mazo_ia' then
    -- Un mazo con tarjetas generadas y una generación real en el servidor.
    select least(
      (select count(*) from public.mazos_propios m
       where m.user_id = p_user and m.creado_en >= p_ini and m.creado_en < p_fin
         and coalesce((m.cards -> 0 ->> 'id') ~ '^g[0-9]+-', false)),
      (select count(*) from public.ia_generaciones g
       where g.user_id = p_user and g.creada >= p_ini and g.creada < p_fin)
    ) into v;

  elsif p_regla = 'crear_mazo_manual' then
    select count(*) into v
    from public.mazos_propios m
    where m.user_id = p_user and m.creado_en >= p_ini and m.creado_en < p_fin
      and not coalesce((m.cards -> 0 ->> 'id') ~ '^g[0-9]+-', false)
      and (select count(*) from jsonb_array_elements(m.cards) c
           where length(trim(coalesce(c ->> 'q', ''))) > 0 and length(trim(coalesce(c ->> 'a', ''))) > 0)
          >= coalesce((p_param ->> 'min_tarjetas')::integer, 8);
  end if;

  return greatest(coalesce(v, 0), 0);
end;
$$;

-- Progreso de una misión en su período: lo calculado más el extra de pruebas.
create or replace function public.mision_avance(p_user uuid, p_m public.misiones_catalogo, p_per_clave text, p_ini timestamptz, p_fin timestamptz)
returns integer
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  return public.mision_progreso(p_user, p_m.regla, p_m.parametros, p_ini, p_fin)
    + coalesce((select x.unidades from public.misiones_extra x
                where x.user_id = p_user and x.mision = p_m.id and x.periodo = p_per_clave), 0);
end;
$$;

create or replace function public.economia_saldo(p_user uuid)
returns integer
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(sum(cantidad), 0)::integer from public.puntos_movimientos where user_id = p_user;
$$;

-- Estado de una misión para un usuario: progreso, lo reclamado y lo que puede reclamar.
drop function if exists public.mision_estado(uuid, public.misiones_catalogo);
create or replace function public.mision_estado(p_user uuid, p_mision text)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  p_m public.misiones_catalogo%rowtype;
  per record;
  v_prog integer;
  v_pagadas integer;
  v_reclamable integer;
  v_completa boolean;
begin
  select * into p_m from public.misiones_catalogo where id = p_mision;
  select * into per from public.economia_periodo(p_m.tipo);
  v_prog := public.mision_avance(p_user, p_m, per.clave, per.ini, per.fin);
  select r.unidades into v_pagadas from public.misiones_reclamadas r
  where r.user_id = p_user and r.mision = p_m.id and r.periodo = per.clave;

  if p_m.por_unidad then
    v_pagadas := coalesce(v_pagadas, 0);
    v_reclamable := greatest(least(v_prog, p_m.meta) - v_pagadas, 0) * p_m.puntos;
    v_completa := v_pagadas >= p_m.meta;
  else
    v_reclamable := case when v_pagadas is null and v_prog >= p_m.meta then p_m.puntos else 0 end;
    v_completa := v_pagadas is not null;
  end if;

  return jsonb_build_object(
    'id', p_m.id, 'tipo', p_m.tipo, 'titulo', p_m.titulo, 'descripcion', p_m.descripcion,
    'icono', p_m.icono, 'meta', p_m.meta, 'puntos', p_m.puntos, 'por_unidad', p_m.por_unidad,
    'total', case when p_m.por_unidad then p_m.puntos * p_m.meta else p_m.puntos end,
    'progreso', least(v_prog, p_m.meta),
    'pagadas', coalesce(v_pagadas, 0),
    'reclamable', v_reclamable,
    'completa', v_completa,
    'periodo', per.clave,
    'termina', per.fin
  );
end;
$$;

-- ---------------------------------------------------------------------------
-- Funciones que usa la web
-- ---------------------------------------------------------------------------

-- Todo lo que muestra la web: saldo, misiones de hoy y de la semana, ítems de
-- la tienda con lo que ya tiene, tema elegido y últimos movimientos.
create or replace function public.economia_estado()
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  dia record;
  sem record;
begin
  if v_user is null then
    raise exception 'Inicia sesión para ver tus misiones.' using errcode = '42501';
  end if;
  select * into dia from public.economia_periodo('diaria');
  select * into sem from public.economia_periodo('semanal');

  return jsonb_build_object(
    'saldo', public.economia_saldo(v_user),
    'prueba', public.cuenta_prueba(v_user),
    'ahora', now(),
    'dia', jsonb_build_object('clave', dia.clave, 'termina', dia.fin),
    'semana', jsonb_build_object('clave', sem.clave, 'termina', sem.fin),
    'tema', coalesce((select tema from public.juego_perfil where user_id = v_user), 'tema:noche'),
    'misiones', (
      select coalesce(jsonb_agg(public.mision_estado(v_user, m.id) order by m.tipo, m.ord), '[]'::jsonb)
      from (
        select d.id, d.tipo, row_number() over () as ord from public.misiones_del_periodo('diaria', dia.clave) d
        union all
        select s.id, s.tipo, row_number() over () as ord from public.misiones_del_periodo('semanal', sem.clave) s
      ) m
    ),
    'items', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'id', i.id, 'tipo', i.tipo, 'titulo', i.titulo, 'descripcion', i.descripcion,
        'precio', i.precio, 'estado', i.estado, 'repetible', i.repetible, 'datos', i.datos,
        'tengo', i.precio = 0 or exists (select 1 from public.canjes c where c.user_id = v_user and c.item = i.id)
      ) order by i.orden, i.id), '[]'::jsonb)
      from public.tienda_items i where i.estado <> 'oculto'
    ),
    'plus', jsonb_build_object(
      'activo', exists (select 1 from public.canjes c where c.user_id = v_user and c.item = 'ia-plus' and c.vence > now()),
      'vence', (select max(c.vence) from public.canjes c where c.user_id = v_user and c.item = 'ia-plus' and c.vence > now())
    ),
    'movimientos', (
      select coalesce(jsonb_agg(jsonb_build_object('cantidad', x.cantidad, 'motivo', x.motivo, 'ref', x.ref, 'creado', x.creado) order by x.creado desc, x.id desc), '[]'::jsonb)
      from (select * from public.puntos_movimientos where user_id = v_user order by creado desc, id desc limit 8) x
    )
  );
end;
$$;

-- Reclama los puntos de una misión de hoy o de esta semana.
create or replace function public.reclamar_mision(p_mision text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  m public.misiones_catalogo%rowtype;
  per record;
  v_prog integer;
  v_pagadas integer;
  v_unidades integer;
  v_puntos integer;
begin
  if v_user is null then
    raise exception 'Inicia sesión para reclamar misiones.' using errcode = '42501';
  end if;
  if public.cuenta_prueba(v_user) then
    raise exception 'En el modo de prueba puedes mirar la tienda. Crea tu cuenta gratis para reclamar misiones.' using hint = 'prueba';
  end if;
  -- Un reclamo a la vez por usuario (evita cobrar dos veces).
  perform pg_advisory_xact_lock(hashtext('economia:' || v_user::text));

  select * into m from public.misiones_catalogo where id = p_mision;
  if not found then
    raise exception 'Esa misión no existe.' using hint = 'mision';
  end if;
  select * into per from public.economia_periodo(m.tipo);
  if not exists (select 1 from public.misiones_del_periodo(m.tipo, per.clave) x where x.id = m.id) then
    raise exception 'Esa misión ya no está activa.' using hint = 'mision';
  end if;

  v_prog := least(public.mision_avance(v_user, m, per.clave, per.ini, per.fin), m.meta);
  select r.unidades into v_pagadas from public.misiones_reclamadas r
  where r.user_id = v_user and r.mision = m.id and r.periodo = per.clave;

  if m.por_unidad then
    v_unidades := v_prog - coalesce(v_pagadas, 0);
    v_puntos := v_unidades * m.puntos;
  else
    v_unidades := 1;
    v_puntos := case when v_pagadas is null and v_prog >= m.meta then m.puntos else 0 end;
  end if;

  if v_puntos <= 0 then
    if v_pagadas is not null and (not m.por_unidad or v_pagadas >= m.meta) then
      raise exception 'Ya reclamaste esta misión.' using hint = 'reclamada';
    end if;
    raise exception 'Todavía no completas esta misión.' using hint = 'incompleta';
  end if;

  insert into public.misiones_reclamadas as r (user_id, mision, periodo, unidades, puntos)
  values (v_user, m.id, per.clave, case when m.por_unidad then v_prog else 1 end, v_puntos)
  on conflict (user_id, mision, periodo) do update set
    unidades = excluded.unidades,
    puntos = r.puntos + excluded.puntos,
    reclamada = now();

  insert into public.puntos_movimientos (user_id, cantidad, motivo, ref)
  values (v_user, v_puntos, 'mision', m.id || '@' || per.clave);

  return jsonb_build_object('ganados', v_puntos, 'saldo', public.economia_saldo(v_user));
end;
$$;

-- Canjea un ítem de la tienda con puntos.
create or replace function public.canjear(p_item text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  i public.tienda_items%rowtype;
  v_saldo integer;
  v_vence timestamptz;
begin
  if v_user is null then
    raise exception 'Inicia sesión para canjear.' using errcode = '42501';
  end if;
  if public.cuenta_prueba(v_user) then
    raise exception 'En el modo de prueba puedes mirar la tienda. Crea tu cuenta gratis para canjear.' using hint = 'prueba';
  end if;
  perform pg_advisory_xact_lock(hashtext('economia:' || v_user::text));

  select * into i from public.tienda_items where id = p_item;
  if not found or i.estado = 'oculto' then
    raise exception 'Ese ítem no existe.' using hint = 'item';
  end if;
  if i.estado <> 'disponible' then
    raise exception 'Este ítem estará disponible pronto.' using hint = 'proximamente';
  end if;
  if i.precio = 0 then
    raise exception 'Este ítem es gratis: ya lo tienes.' using hint = 'tengo';
  end if;
  if not i.repetible and exists (select 1 from public.canjes where user_id = v_user and item = i.id) then
    raise exception 'Ya canjeaste este ítem.' using hint = 'tengo';
  end if;
  if i.tipo = 'ia_plus' and exists (select 1 from public.canjes where user_id = v_user and item = i.id and vence > now()) then
    raise exception 'Ya tienes IA plus hoy: vuelve a canjearlo mañana.' using hint = 'tengo';
  end if;

  v_saldo := public.economia_saldo(v_user);
  if v_saldo < i.precio then
    raise exception 'Te faltan % puntos.', i.precio - v_saldo using hint = 'saldo';
  end if;

  if i.tipo = 'ia_plus' then
    v_vence := (public.economia_periodo('diaria')).fin;   -- hasta las 00:00 de Chile
  end if;

  insert into public.canjes (user_id, item, puntos, vence) values (v_user, i.id, i.precio, v_vence);
  insert into public.puntos_movimientos (user_id, cantidad, motivo, ref) values (v_user, -i.precio, 'canje', i.id);

  -- Un tema canjeado queda puesto.
  if i.tipo = 'tema' then
    insert into public.juego_perfil (user_id, tema) values (v_user, i.id)
    on conflict (user_id) do update set tema = excluded.tema, actualizado = now();
  end if;

  return jsonb_build_object('saldo', public.economia_saldo(v_user), 'item', i.id, 'vence', v_vence);
end;
$$;

-- Elige el tema visual (gratis o canjeado).
create or replace function public.elegir_tema(p_tema text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  i public.tienda_items%rowtype;
begin
  if v_user is null then
    raise exception 'Inicia sesión para cambiar el tema.' using errcode = '42501';
  end if;
  if public.cuenta_prueba(v_user) then
    raise exception 'En el modo de prueba puedes mirar la tienda. Crea tu cuenta gratis para cambiar el tema.' using hint = 'prueba';
  end if;
  select * into i from public.tienda_items where id = p_tema and tipo = 'tema';
  if not found then
    raise exception 'Ese tema no existe.' using hint = 'item';
  end if;
  if i.precio > 0 and not exists (select 1 from public.canjes where user_id = v_user and item = i.id) then
    raise exception 'Primero canjea este tema en la tienda.' using hint = 'no_tengo';
  end if;
  insert into public.juego_perfil (user_id, tema) values (v_user, i.id)
  on conflict (user_id) do update set tema = excluded.tema, actualizado = now();
  return jsonb_build_object('tema', i.id);
end;
$$;

-- ---------------------------------------------------------------------------
-- Registro de generaciones (solo la Edge Function)
-- ---------------------------------------------------------------------------

-- Versión anterior de IA plus (un mazo con otro modelo): ya no se usa.
drop function if exists public.ia_plus_usar(uuid, text);
drop function if exists public.ia_plus_devolver(uuid, text);

create or replace function public.ia_registrar_generacion(p_user uuid, p_sesion text, p_propia boolean, p_plus boolean)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.ia_generaciones as g (user_id, sesion, propia, plus)
  values (p_user, p_sesion, coalesce(p_propia, false), coalesce(p_plus, false))
  on conflict (user_id, sesion) do update set plus = g.plus or excluded.plus;
end;
$$;

-- ---------------------------------------------------------------------------
-- Permisos
-- ---------------------------------------------------------------------------

revoke all on function public.economia_config() from public, anon, authenticated;
revoke all on function public.economia_periodo(text) from public, anon, authenticated;
revoke all on function public.misiones_del_periodo(text, text) from public, anon, authenticated;
revoke all on function public.mision_progreso(uuid, text, jsonb, timestamptz, timestamptz) from public, anon, authenticated;
revoke all on function public.mision_avance(uuid, public.misiones_catalogo, text, timestamptz, timestamptz) from public, anon, authenticated;
revoke all on function public.economia_saldo(uuid) from public, anon, authenticated;
revoke all on function public.mision_estado(uuid, text) from public, anon, authenticated;
revoke all on function public.registrar_adquisicion() from public, anon, authenticated;
revoke all on function public.economia_estado() from public, anon;
revoke all on function public.reclamar_mision(text) from public, anon;
revoke all on function public.canjear(text) from public, anon;
revoke all on function public.elegir_tema(text) from public, anon;
revoke all on function public.ia_registrar_generacion(uuid, text, boolean, boolean) from public, anon, authenticated;

grant execute on function public.economia_estado() to authenticated;
grant execute on function public.reclamar_mision(text) to authenticated;
grant execute on function public.canjear(text) to authenticated;
grant execute on function public.elegir_tema(text) to authenticated;
grant execute on function public.ia_registrar_generacion(uuid, text, boolean, boolean) to service_role;

notify pgrst, 'reload schema';
