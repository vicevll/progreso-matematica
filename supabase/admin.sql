-- Studappy · analítica de uso y panel de administración (studappy.vercel.app/admin)
-- Ejecutar en Supabase -> SQL Editor -> New query -> Run. Se puede volver a
-- ejecutar sin perder datos. Requiere haber ejecutado antes mazos.sql,
-- tienda.sql e ia.sql.
--
-- Qué se registra (solo usuarios con sesión iniciada, nunca visitantes anónimos):
--   visitas            tiempo activo en la web por visita (pestaña visible y en
--                      uso), repartido por sección, pantallas vistas y dispositivo.
--   estudio_sesiones   cada ronda de estudio: mazo, duración y respuestas
--                      («Lo sé», «No lo sé», «Pendiente»), y si la terminó.
-- Los mazos, el avance y el uso del generador ya estaban en otras tablas: el
-- panel los lee desde ahí.
--
-- Nadie puede leer estas tablas desde el navegador. Cada usuario solo puede
-- sumar sus propios datos (registrar_visita, registrar_estudio) y el panel lo
-- lee todo con las funciones admin_*, que solo responden a las cuentas de la
-- tabla admins.

-- ---------------------------------------------------------------------------
-- Quién es admin
-- ---------------------------------------------------------------------------

create table if not exists public.admins (
  email text primary key check (email = lower(email)),
  agregado timestamptz not null default now()
);

alter table public.admins enable row level security;
-- Sin políticas: no se lee ni se cambia desde el navegador.

-- Cuenta de Google con acceso al panel. Para agregar otra, copia la línea
-- con su correo (en minúsculas) y vuelve a ejecutar.
insert into public.admins (email) values ('boledax@gmail.com') on conflict do nothing;

create or replace function public.es_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from auth.users u
    join public.admins a on a.email = lower(u.email)
    where u.id = auth.uid() and u.email_confirmed_at is not null
  );
$$;

create or replace function public.admin_ids()
returns setof uuid
language sql
stable
security definer
set search_path = public
as $$
  select u.id from auth.users u join public.admins a on a.email = lower(u.email);
$$;

create or replace function public.admin_exigir()
returns void
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  if not public.es_admin() then
    raise exception 'No autorizado.' using errcode = '42501';
  end if;
end;
$$;

-- Rango de fechas en hora de Chile, ambos días incluidos. Sin "desde" = desde
-- el primer usuario. Máximo dos años.
create or replace function public.admin_rango(
  p_desde date, p_hasta date,
  out desde date, out hasta date, out ini timestamptz, out fin timestamptz
)
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_hoy date := (now() at time zone 'America/Santiago')::date;
begin
  hasta := least(coalesce(p_hasta, v_hoy), v_hoy);
  desde := coalesce(p_desde, (select min((created_at at time zone 'America/Santiago')::date) from auth.users), v_hoy);
  if desde > hasta then desde := hasta; end if;
  if hasta - desde > 730 then desde := hasta - 730; end if;
  ini := desde::timestamp at time zone 'America/Santiago';
  fin := (hasta + 1)::timestamp at time zone 'America/Santiago';
end;
$$;

-- ---------------------------------------------------------------------------
-- Tiempo de estancia
-- ---------------------------------------------------------------------------

create table if not exists public.visitas (
  user_id uuid not null references auth.users(id) on delete cascade,
  sesion text not null check (sesion ~ '^[A-Za-z0-9_-]{8,64}$'),
  inicio timestamptz not null default now(),
  ultimo timestamptz not null default now(),
  segundos integer not null default 0 check (segundos >= 0),
  -- segundos por sección: { "mazos": 120, "estudio": 300, "tienda": 20, ... }
  secciones jsonb not null default '{}'::jsonb
    check (jsonb_typeof(secciones) = 'object' and octet_length(secciones::text) <= 2000),
  vistas integer not null default 0 check (vistas >= 0),
  dispositivo text not null default 'escritorio' check (dispositivo in ('movil', 'tablet', 'escritorio')),
  primary key (user_id, sesion)
);

create index if not exists visitas_inicio_idx on public.visitas(inicio);
create index if not exists visitas_user_inicio_idx on public.visitas(user_id, inicio);

alter table public.visitas enable row level security;
-- Sin políticas: solo se escribe con registrar_visita y se lee con admin_*.

-- La web llama a esta función cada ~30 s mientras el usuario la está usando.
-- Los totales solo pueden crecer y nunca más que el tiempo real transcurrido.
create or replace function public.registrar_visita(
  p_sesion text,
  p_segundos integer,
  p_secciones jsonb,
  p_vistas integer,
  p_dispositivo text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_secc jsonb;
  v_seg integer := least(greatest(coalesce(p_segundos, 0), 0), 86400);
  v_vistas integer := least(greatest(coalesce(p_vistas, 0), 0), 10000);
  v_disp text := case when p_dispositivo in ('movil', 'tablet', 'escritorio') then p_dispositivo else 'escritorio' end;
begin
  if v_user is null then
    return; -- sin sesión no se registra nada
  end if;
  if p_sesion is null or p_sesion !~ '^[A-Za-z0-9_-]{8,64}$' then
    raise exception 'Visita inválida.';
  end if;

  select coalesce(jsonb_object_agg(key, least(greatest(round((value #>> '{}')::numeric), 0), 86400)), '{}'::jsonb)
  into v_secc
  from jsonb_each(case when jsonb_typeof(p_secciones) = 'object' then p_secciones else '{}'::jsonb end)
  where key in ('mazos', 'estudio', 'tienda', 'generador', 'otro') and jsonb_typeof(value) = 'number';

  if not exists (select 1 from public.visitas where user_id = v_user and sesion = p_sesion) then
    -- Freno contra abusos: como mucho 300 visitas nuevas por usuario al día.
    if (select count(*) from public.visitas where user_id = v_user and inicio > now() - interval '1 day') >= 300 then
      return;
    end if;
  end if;

  insert into public.visitas as v (user_id, sesion, segundos, secciones, vistas, dispositivo)
  values (v_user, p_sesion, least(v_seg, 120), v_secc, v_vistas, v_disp)
  on conflict (user_id, sesion) do update set
    ultimo = now(),
    segundos = greatest(v.segundos, least(v_seg, extract(epoch from now() - v.inicio)::integer + 120)),
    secciones = v_secc,
    vistas = greatest(v.vistas, v_vistas);
end;
$$;

-- ---------------------------------------------------------------------------
-- Sesiones de estudio
-- ---------------------------------------------------------------------------

create table if not exists public.estudio_sesiones (
  user_id uuid not null references auth.users(id) on delete cascade,
  id text not null check (id ~ '^[A-Za-z0-9_-]{8,64}$'),
  mazo_id text not null check (char_length(mazo_id) between 1 and 80),
  mazo_nombre text not null default '' check (char_length(mazo_nombre) <= 120),
  origen text not null default 'propio' check (origen in ('propio', 'ia', 'tienda')),
  catalogo text check (char_length(catalogo) <= 80),   -- id del catálogo si es de la tienda
  seccion text check (char_length(seccion) <= 40),     -- submazo, si estudió solo uno
  filtro text not null default 'todas' check (filtro in ('todas', 'pendientes')),
  inicio timestamptz not null default now(),
  fin timestamptz not null default now(),
  segundos integer not null default 0 check (segundos >= 0),
  total integer not null default 0 check (total >= 0),
  respondidas integer not null default 0 check (respondidas >= 0),
  sabe integer not null default 0 check (sabe >= 0),
  no_sabe integer not null default 0 check (no_sabe >= 0),
  pendiente integer not null default 0 check (pendiente >= 0),
  completada boolean not null default false,
  primary key (user_id, id)
);

create index if not exists estudio_sesiones_inicio_idx on public.estudio_sesiones(inicio);
create index if not exists estudio_sesiones_user_inicio_idx on public.estudio_sesiones(user_id, inicio);

alter table public.estudio_sesiones enable row level security;
-- Sin políticas: solo se escribe con registrar_estudio y se lee con admin_*.

create or replace function public.registrar_estudio(
  p_id text,
  p_mazo_id text,
  p_mazo_nombre text,
  p_origen text,
  p_catalogo text,
  p_seccion text,
  p_filtro text,
  p_segundos integer,
  p_total integer,
  p_respondidas integer,
  p_sabe integer,
  p_no_sabe integer,
  p_pendiente integer,
  p_completada boolean
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_seg integer := least(greatest(coalesce(p_segundos, 0), 0), 86400);
  v_origen text := case when p_origen in ('propio', 'ia', 'tienda') then p_origen else 'propio' end;
  v_filtro text := case when p_filtro = 'pendientes' then 'pendientes' else 'todas' end;
begin
  if v_user is null then
    return;
  end if;
  if p_id is null or p_id !~ '^[A-Za-z0-9_-]{8,64}$' or coalesce(p_mazo_id, '') = '' then
    raise exception 'Sesión de estudio inválida.';
  end if;

  if not exists (select 1 from public.estudio_sesiones where user_id = v_user and id = p_id) then
    if (select count(*) from public.estudio_sesiones where user_id = v_user and inicio > now() - interval '1 day') >= 1000 then
      return;
    end if;
  end if;

  insert into public.estudio_sesiones as e (
    user_id, id, mazo_id, mazo_nombre, origen, catalogo, seccion, filtro,
    segundos, total, respondidas, sabe, no_sabe, pendiente, completada
  )
  values (
    v_user, p_id, left(p_mazo_id, 80), left(coalesce(p_mazo_nombre, ''), 120), v_origen,
    nullif(left(coalesce(p_catalogo, ''), 80), ''), nullif(left(coalesce(p_seccion, ''), 40), ''), v_filtro,
    least(v_seg, 900),
    least(greatest(coalesce(p_total, 0), 0), 5000),
    least(greatest(coalesce(p_respondidas, 0), 0), 5000),
    least(greatest(coalesce(p_sabe, 0), 0), 5000),
    least(greatest(coalesce(p_no_sabe, 0), 0), 5000),
    least(greatest(coalesce(p_pendiente, 0), 0), 5000),
    coalesce(p_completada, false)
  )
  on conflict (user_id, id) do update set
    fin = now(),
    mazo_nombre = excluded.mazo_nombre,
    segundos = greatest(e.segundos, least(v_seg, extract(epoch from now() - e.inicio)::integer + 900)),
    total = greatest(e.total, excluded.total),
    respondidas = greatest(e.respondidas, excluded.respondidas),
    sabe = greatest(e.sabe, excluded.sabe),
    no_sabe = greatest(e.no_sabe, excluded.no_sabe),
    pendiente = greatest(e.pendiente, excluded.pendiente),
    completada = e.completada or excluded.completada;
end;
$$;

-- ---------------------------------------------------------------------------
-- Lecturas del panel (solo admins)
-- ---------------------------------------------------------------------------

-- Resumen general del período.
create or replace function public.admin_resumen(
  p_desde date default null,
  p_hasta date default null,
  p_incluir_admins boolean default false
)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  tz constant text := 'America/Santiago';
  r record;
  v_hoy date := (now() at time zone 'America/Santiago')::date;
begin
  perform public.admin_exigir();
  select * into r from public.admin_rango(p_desde, p_hasta);

  return (
    with
    u as (
      select id, created_at from auth.users
      where p_incluir_admins or id not in (select public.admin_ids())
    ),
    vis_todo as (select v.* from public.visitas v join u on u.id = v.user_id),
    vis as (select * from vis_todo where inicio >= r.ini and inicio < r.fin),
    est_todo as (select e.* from public.estudio_sesiones e join u on u.id = e.user_id),
    est as (select * from est_todo where inicio >= r.ini and inicio < r.fin),
    mp as (
      select m.user_id, m.creado_en, coalesce((m.cards -> 0 ->> 'id') ~ '^g[0-9]+-', false) as ia
      from public.mazos_propios m join u on u.id = m.user_id
    ),
    ud as (select d.* from public.user_decks d join u on u.id = d.user_id),
    gen as (select s.* from public.ia_sesiones s join u on u.id = s.user_id where s.llamadas > 0),
    activos as (
      select user_id, (inicio at time zone tz)::date as dia from vis
      union
      select user_id, (inicio at time zone tz)::date from est
    ),
    dias as (select generate_series(r.desde, r.hasta, interval '1 day')::date as dia),
    serie as (
      select d.dia,
        coalesce(a.n, 0) as activos,
        coalesce(vs.s, 0) as segundos,
        coalesce(nu.n, 0) as nuevos,
        coalesce(es.r, 0) as respuestas,
        coalesce(es.n, 0) as sesiones
      from dias d
      left join (select dia, count(distinct user_id) as n from activos group by dia) a on a.dia = d.dia
      left join (select (inicio at time zone tz)::date as dia, sum(segundos) as s from vis group by 1) vs on vs.dia = d.dia
      left join (select (created_at at time zone tz)::date as dia, count(*) as n from u group by 1) nu on nu.dia = d.dia
      left join (select (inicio at time zone tz)::date as dia, sum(respondidas) as r, count(*) as n from est group by 1) es on es.dia = d.dia
    ),
    secc as (
      select s.key, sum((s.value #>> '{}')::numeric) as seg
      from vis cross join lateral jsonb_each(vis.secciones) s
      where jsonb_typeof(s.value) = 'number'
      group by s.key
    ),
    disp as (
      select dispositivo, count(*) as visitas, count(distinct user_id) as usuarios, sum(segundos) as segundos
      from vis group by dispositivo
    ),
    horas as (
      select extract(isodow from (inicio at time zone tz))::int as dow,
             extract(hour from (inicio at time zone tz))::int as hora,
             sum(segundos) as segundos, count(*) as visitas
      from vis group by 1, 2
    ),
    top as (
      select origen,
             coalesce(catalogo, user_id::text || ':' || mazo_id) as clave,
             max(catalogo) as catalogo,
             max(mazo_nombre) as nombre,
             count(distinct user_id) as usuarios,
             count(*) as sesiones,
             sum(respondidas) as respuestas,
             sum(sabe) as sabe,
             sum(no_sabe) as no_sabe,
             sum(segundos) as segundos
      from est
      group by 1, 2
      order by sum(respondidas) desc, count(*) desc
      limit 12
    ),
    top_con_autor as (
      -- Los mazos propios son de una sola persona: se muestra de quién.
      select t.*,
        (select coalesce(nullif(a.raw_user_meta_data ->> 'full_name', ''), nullif(a.raw_user_meta_data ->> 'name', ''), split_part(a.email, '@', 1))
         from auth.users a
         where t.catalogo is null and a.id::text = split_part(t.clave, ':', 1)) as autor
      from top t
    ),
    tienda as (
      select catalog_id, max(title) as titulo, count(*) as adquisiciones
      from ud where acquired_at >= r.ini and acquired_at < r.fin
      group by catalog_id order by count(*) desc limit 8
    ),
    cohorte as (select id from u where created_at >= r.ini and created_at < r.fin),
    dias_usuario as (
      select user_id, count(distinct (inicio at time zone tz)::date) as dias
      from (select user_id, inicio from vis_todo union all select user_id, inicio from est_todo) x
      group by user_id
    ),
    embudo as (
      select
        count(*) as registrados,
        count(*) filter (where exists (select 1 from mp where mp.user_id = c.id)
                            or exists (select 1 from ud where ud.user_id = c.id)) as con_mazo,
        count(*) filter (where exists (select 1 from est_todo e where e.user_id = c.id)
                            or exists (select 1 from public.progreso_usuario p
                                       cross join lateral jsonb_each(p.datos) m
                                       where p.user_id = c.id and jsonb_typeof(m.value) = 'object' and m.value <> '{}'::jsonb)) as estudiaron,
        count(*) filter (where coalesce((select du.dias from dias_usuario du where du.user_id = c.id), 0) >= 2) as volvieron
      from cohorte c
    ),
    prog as (
      select
        count(*) filter (where c.value = '1'::jsonb) as dominadas,
        count(*) filter (where c.value = '"n"'::jsonb) as no_sabe,
        count(*) filter (where c.value = '"p"'::jsonb) as pendientes
      from public.progreso_usuario p
      join u on u.id = p.user_id
      cross join lateral jsonb_each(p.datos) m
      cross join lateral jsonb_each(case when jsonb_typeof(m.value) = 'object' then m.value else '{}'::jsonb end) c
    ),
    pulso as (
      select
        count(distinct user_id) filter (where ultimo >= now() - interval '2 minutes') as ahora,
        count(distinct user_id) filter (where ultimo >= v_hoy::timestamp at time zone tz) as hoy,
        count(distinct user_id) filter (where ultimo >= now() - interval '7 days') as d7,
        count(distinct user_id) filter (where ultimo >= now() - interval '30 days') as d30
      from vis_todo
    )
    select jsonb_build_object(
      'desde', r.desde,
      'hasta', r.hasta,
      'generado', now(),
      'desde_registro', (select min(inicio) from public.visitas),
      'usuarios', jsonb_build_object(
        'total', (select count(*) from u where created_at < r.fin),
        'nuevos', (select count(*) from cohorte),
        'activos', (select count(distinct user_id) from activos)
      ),
      'pulso', (select to_jsonb(pulso) from pulso),
      'tiempo', jsonb_build_object(
        'segundos', (select coalesce(sum(segundos), 0) from vis),
        'visitas', (select count(*) from vis),
        'mediana_visita', (select coalesce(round(percentile_cont(0.5) within group (order by segundos)), 0) from vis where segundos >= 10)
      ),
      'estudio', (
        select jsonb_build_object(
          'sesiones', count(*),
          'completadas', count(*) filter (where completada),
          'usuarios', count(distinct user_id),
          'respuestas', coalesce(sum(respondidas), 0),
          'sabe', coalesce(sum(sabe), 0),
          'no_sabe', coalesce(sum(no_sabe), 0),
          'pendiente', coalesce(sum(pendiente), 0),
          'segundos', coalesce(sum(segundos), 0)
        ) from est
      ),
      'mazos', jsonb_build_object(
        'propios', (select count(*) from mp where not ia and creado_en >= r.ini and creado_en < r.fin),
        'ia', (select count(*) from mp where ia and creado_en >= r.ini and creado_en < r.fin),
        'tienda', (select count(*) from ud where acquired_at >= r.ini and acquired_at < r.fin),
        'generador', (select count(*) from gen where creada >= r.ini and creada < r.fin),
        'total_propios', (select count(*) from mp where not ia),
        'total_ia', (select count(*) from mp where ia),
        'total_tienda', (select count(*) from ud)
      ),
      'progreso', (select to_jsonb(prog) from prog),
      'serie', (select coalesce(jsonb_agg(to_jsonb(serie) order by dia), '[]'::jsonb) from serie),
      'secciones', (select coalesce(jsonb_object_agg(key, round(seg)), '{}'::jsonb) from secc),
      'dispositivos', (select coalesce(jsonb_agg(to_jsonb(disp) order by segundos desc), '[]'::jsonb) from disp),
      'horas', (select coalesce(jsonb_agg(to_jsonb(horas)), '[]'::jsonb) from horas),
      'top_mazos', (select coalesce(jsonb_agg(to_jsonb(top_con_autor) order by respuestas desc, sesiones desc), '[]'::jsonb) from top_con_autor),
      'tienda', (select coalesce(jsonb_agg(to_jsonb(tienda) order by adquisiciones desc), '[]'::jsonb) from tienda),
      'embudo', (select to_jsonb(embudo) from embudo)
    )
  );
end;
$$;

-- Una fila por usuario con su actividad del período y su estado actual.
create or replace function public.admin_usuarios(
  p_desde date default null,
  p_hasta date default null,
  p_incluir_admins boolean default false
)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  tz constant text := 'America/Santiago';
  r record;
begin
  perform public.admin_exigir();
  select * into r from public.admin_rango(p_desde, p_hasta);

  return (
    with
    u as (
      select id, email, created_at, last_sign_in_at, raw_user_meta_data as meta
      from auth.users
      where p_incluir_admins or id not in (select public.admin_ids())
    ),
    vis as (
      select user_id, sum(segundos) as segundos, count(*) as visitas,
             count(distinct (inicio at time zone tz)::date) as dias
      from public.visitas where inicio >= r.ini and inicio < r.fin
      group by user_id
    ),
    vis_ult as (select user_id, max(ultimo) as ultimo from public.visitas group by user_id),
    est as (
      select user_id, count(*) as sesiones, sum(respondidas) as respuestas, sum(sabe) as sabe,
             sum(no_sabe) as no_sabe, sum(segundos) as segundos
      from public.estudio_sesiones where inicio >= r.ini and inicio < r.fin
      group by user_id
    ),
    mp as (
      select user_id,
             count(*) filter (where not ia) as propios,
             count(*) filter (where ia) as ia,
             sum(jsonb_array_length(cards)) as tarjetas
      from (
        select user_id, cards, coalesce((cards -> 0 ->> 'id') ~ '^g[0-9]+-', false) as ia
        from public.mazos_propios
      ) x
      group by user_id
    ),
    ud as (
      select d.user_id, count(distinct d.id) as tienda, count(c.id) as tarjetas
      from public.user_decks d left join public.user_deck_cards c on c.deck_id = d.id
      group by d.user_id
    ),
    -- El avance solo cuenta en mazos que todavía existen.
    mazo_ids as (
      select user_id, id from public.mazos_propios
      union all
      select user_id, id::text from public.user_decks
    ),
    prog as (
      select p.user_id,
             count(*) filter (where c.value = '1'::jsonb) as dominadas,
             count(*) filter (where c.value = '"n"'::jsonb) as no_sabe,
             count(*) filter (where c.value = '"p"'::jsonb) as pendientes
      from public.progreso_usuario p
      cross join lateral jsonb_each(p.datos) m
      join mazo_ids mi on mi.user_id = p.user_id and mi.id = m.key
      cross join lateral jsonb_each(case when jsonb_typeof(m.value) = 'object' then m.value else '{}'::jsonb end) c
      group by p.user_id
    ),
    gen as (select user_id, count(*) as n from public.ia_sesiones where llamadas > 0 group by user_id)
    select coalesce(jsonb_agg(jsonb_build_object(
      'id', u.id,
      'email', u.email,
      'nombre', coalesce(nullif(u.meta ->> 'full_name', ''), nullif(u.meta ->> 'name', ''), split_part(u.email, '@', 1)),
      'avatar', coalesce(u.meta ->> 'avatar_url', u.meta ->> 'picture'),
      'creado', u.created_at,
      'ultimo', greatest(vu.ultimo, u.last_sign_in_at),
      'segundos', coalesce(vis.segundos, 0),
      'visitas', coalesce(vis.visitas, 0),
      'dias', coalesce(vis.dias, 0),
      'propios', coalesce(mp.propios, 0),
      'ia', coalesce(mp.ia, 0),
      'tienda', coalesce(ud.tienda, 0),
      'tarjetas', coalesce(mp.tarjetas, 0) + coalesce(ud.tarjetas, 0),
      'dominadas', coalesce(prog.dominadas, 0),
      'no_sabe', coalesce(prog.no_sabe, 0),
      'pendientes', coalesce(prog.pendientes, 0),
      'sesiones', coalesce(est.sesiones, 0),
      'respuestas', coalesce(est.respuestas, 0),
      'sabe', coalesce(est.sabe, 0),
      'segundos_estudio', coalesce(est.segundos, 0),
      'generador', coalesce(gen.n, 0),
      'admin', u.id in (select public.admin_ids())
    ) order by greatest(vu.ultimo, u.last_sign_in_at) desc nulls last, u.created_at desc), '[]'::jsonb)
    from u
    left join vis on vis.user_id = u.id
    left join vis_ult vu on vu.user_id = u.id
    left join est on est.user_id = u.id
    left join mp on mp.user_id = u.id
    left join ud on ud.user_id = u.id
    left join prog on prog.user_id = u.id
    left join gen on gen.user_id = u.id
  );
end;
$$;

-- Ficha de un usuario: actividad diaria, sus mazos con avance y sus sesiones.
create or replace function public.admin_usuario(
  p_user uuid,
  p_desde date default null,
  p_hasta date default null
)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  tz constant text := 'America/Santiago';
  r record;
begin
  perform public.admin_exigir();
  if not exists (select 1 from auth.users where id = p_user) then
    raise exception 'Usuario no encontrado.';
  end if;
  select * into r from public.admin_rango(p_desde, p_hasta);

  return (
    with
    yo as (select id, email, created_at, last_sign_in_at, raw_user_meta_data as meta from auth.users where id = p_user),
    vis_todo as (select * from public.visitas where user_id = p_user),
    vis as (select * from vis_todo where inicio >= r.ini and inicio < r.fin),
    est_todo as (select * from public.estudio_sesiones where user_id = p_user),
    est as (select * from est_todo where inicio >= r.ini and inicio < r.fin),
    datos as (select coalesce((select datos from public.progreso_usuario where user_id = p_user), '{}'::jsonb) as d),
    mazos as (
      select 'propio' as tipo, m.id, m.nombre, m.color, null::text as catalogo,
             coalesce((m.cards -> 0 ->> 'id') ~ '^g[0-9]+-', false) as ia,
             jsonb_array_length(m.cards) as tarjetas, m.creado_en as creado
      from public.mazos_propios m where m.user_id = p_user
      union all
      select 'tienda', d.id::text, d.title, d.color, d.catalog_id, false,
             (select count(*) from public.user_deck_cards c where c.deck_id = d.id)::int, d.acquired_at
      from public.user_decks d where d.user_id = p_user
    ),
    mazos_det as (
      select m.*,
        (select count(*) from jsonb_each(case when jsonb_typeof(datos.d -> m.id) = 'object' then datos.d -> m.id else '{}'::jsonb end) c where c.value = '1'::jsonb) as dominadas,
        (select count(*) from jsonb_each(case when jsonb_typeof(datos.d -> m.id) = 'object' then datos.d -> m.id else '{}'::jsonb end) c where c.value = '"n"'::jsonb) as no_sabe,
        (select count(*) from jsonb_each(case when jsonb_typeof(datos.d -> m.id) = 'object' then datos.d -> m.id else '{}'::jsonb end) c where c.value = '"p"'::jsonb) as pendientes,
        (select count(*) from est_todo e where e.mazo_id = m.id) as sesiones,
        (select coalesce(sum(e.respondidas), 0) from est_todo e where e.mazo_id = m.id) as respuestas,
        (select max(e.fin) from est_todo e where e.mazo_id = m.id) as ultimo_estudio
      from mazos m cross join datos
    ),
    dias as (select generate_series(r.desde, r.hasta, interval '1 day')::date as dia),
    serie as (
      select d.dia, coalesce(vs.s, 0) as segundos, coalesce(es.r, 0) as respuestas
      from dias d
      left join (select (inicio at time zone tz)::date as dia, sum(segundos) as s from vis group by 1) vs on vs.dia = d.dia
      left join (select (inicio at time zone tz)::date as dia, sum(respondidas) as r from est group by 1) es on es.dia = d.dia
    ),
    secc as (
      select s.key, sum((s.value #>> '{}')::numeric) as seg
      from vis cross join lateral jsonb_each(vis.secciones) s
      where jsonb_typeof(s.value) = 'number'
      group by s.key
    ),
    disp as (select dispositivo, count(*) as visitas, sum(segundos) as segundos from vis group by dispositivo),
    recientes as (
      select inicio, fin, mazo_id, mazo_nombre, origen, catalogo, seccion, filtro, segundos, total,
             respondidas, sabe, no_sabe, pendiente, completada
      from est order by inicio desc limit 40
    )
    select jsonb_build_object(
      'desde', r.desde,
      'hasta', r.hasta,
      'perfil', (
        select jsonb_build_object(
          'id', yo.id,
          'email', yo.email,
          'nombre', coalesce(nullif(yo.meta ->> 'full_name', ''), nullif(yo.meta ->> 'name', ''), split_part(yo.email, '@', 1)),
          'avatar', coalesce(yo.meta ->> 'avatar_url', yo.meta ->> 'picture'),
          'creado', yo.created_at,
          'ultimo', greatest((select max(ultimo) from vis_todo), yo.last_sign_in_at),
          'admin', yo.id in (select public.admin_ids())
        ) from yo
      ),
      'periodo', jsonb_build_object(
        'segundos', (select coalesce(sum(segundos), 0) from vis),
        'visitas', (select count(*) from vis),
        'dias', (select count(distinct (inicio at time zone tz)::date) from vis),
        'sesiones', (select count(*) from est),
        'respuestas', (select coalesce(sum(respondidas), 0) from est),
        'sabe', (select coalesce(sum(sabe), 0) from est),
        'no_sabe', (select coalesce(sum(no_sabe), 0) from est),
        'segundos_estudio', (select coalesce(sum(segundos), 0) from est)
      ),
      'total', jsonb_build_object(
        'segundos', (select coalesce(sum(segundos), 0) from vis_todo),
        'visitas', (select count(*) from vis_todo),
        'sesiones', (select count(*) from est_todo),
        'respuestas', (select coalesce(sum(respondidas), 0) from est_todo),
        'generador', (select count(*) from public.ia_sesiones where user_id = p_user and llamadas > 0),
        'ultimo_generador', (select max(creada) from public.ia_sesiones where user_id = p_user and llamadas > 0)
      ),
      'serie', (select coalesce(jsonb_agg(to_jsonb(serie) order by dia), '[]'::jsonb) from serie),
      'secciones', (select coalesce(jsonb_object_agg(key, round(seg)), '{}'::jsonb) from secc),
      'dispositivos', (select coalesce(jsonb_agg(to_jsonb(disp) order by segundos desc), '[]'::jsonb) from disp),
      'mazos', (select coalesce(jsonb_agg(to_jsonb(mazos_det) order by ultimo_estudio desc nulls last, creado desc), '[]'::jsonb) from mazos_det),
      'estudio', (select coalesce(jsonb_agg(to_jsonb(recientes) order by inicio desc), '[]'::jsonb) from recientes)
    )
  );
end;
$$;

-- ---------------------------------------------------------------------------
-- Permisos
-- ---------------------------------------------------------------------------

revoke all on function public.es_admin() from public, anon;
revoke all on function public.admin_ids() from public, anon, authenticated;
revoke all on function public.admin_exigir() from public, anon, authenticated;
revoke all on function public.admin_rango(date, date) from public, anon, authenticated;
revoke all on function public.registrar_visita(text, integer, jsonb, integer, text) from public, anon;
revoke all on function public.registrar_estudio(text, text, text, text, text, text, text, integer, integer, integer, integer, integer, integer, boolean) from public, anon;
revoke all on function public.admin_resumen(date, date, boolean) from public, anon;
revoke all on function public.admin_usuarios(date, date, boolean) from public, anon;
revoke all on function public.admin_usuario(uuid, date, date) from public, anon;

grant execute on function public.es_admin() to authenticated;
grant execute on function public.registrar_visita(text, integer, jsonb, integer, text) to authenticated;
grant execute on function public.registrar_estudio(text, text, text, text, text, text, text, integer, integer, integer, integer, integer, integer, boolean) to authenticated;
grant execute on function public.admin_resumen(date, date, boolean) to authenticated;
grant execute on function public.admin_usuarios(date, date, boolean) to authenticated;
grant execute on function public.admin_usuario(uuid, date, date) to authenticated;

notify pgrst, 'reload schema';
