-- Studappy · etiquetas de usuario, mazos compartidos y regalos de puntos.
-- Ejecutar en Supabase -> SQL Editor -> New query -> Run, DESPUÉS de mazos.sql,
-- admin.sql y misiones.sql. Se puede volver a ejecutar sin perder datos.
--
--   Etiqueta: cada cuenta tiene una única, al azar, como «CometaAzul#4821».
--     No se escribe a mano (así nadie se pone un apodo ofensivo): se puede
--     sortear otra unas pocas veces. En los enlaces va como CometaAzul-4821:
--     https://studappy.xyz/#/u/CometaAzul-4821
--   Mazos compartidos: cada persona elige qué mazos propios se ven en su
--     perfil público. Quien lo abre puede ver las tarjetas y guardar una copia
--     en sus mazos. Nunca se muestran el nombre real ni el correo.
--   Regalos: el administrador busca una etiqueta y le transfiere puntos.
--
-- Las cuentas de prueba («Probar gratis») no tienen etiqueta ni comparten.

-- Misma función que en tienda.sql, ia.sql, misiones.sql y admin.sql.
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
-- Tablas (ninguna se lee directo desde el navegador: todo va por funciones)
-- ---------------------------------------------------------------------------

create table if not exists public.perfiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  nombre text not null check (nombre ~ '^[A-Za-z]{3,24}$'),
  numero text not null check (numero ~ '^[0-9]{4}$'),
  sorteos integer not null default 0 check (sorteos >= 0),
  creado timestamptz not null default now(),
  actualizado timestamptz not null default now()
);
create unique index if not exists perfiles_etiqueta_idx on public.perfiles (lower(nombre), numero);

create table if not exists public.mazos_compartidos (
  user_id uuid not null,
  mazo_id text not null,
  compartido timestamptz not null default now(),
  primary key (user_id, mazo_id),
  foreign key (user_id, mazo_id) references public.mazos_propios(user_id, id) on delete cascade
);

-- Quién guardó una copia de qué mazo (cuenta una vez por persona).
create table if not exists public.mazos_copias (
  user_id uuid not null references auth.users(id) on delete cascade,
  dueno uuid not null references auth.users(id) on delete cascade,
  mazo_id text not null,
  creada timestamptz not null default now(),
  primary key (user_id, dueno, mazo_id)
);
create index if not exists mazos_copias_dueno_idx on public.mazos_copias(dueno, mazo_id);

-- Puntos que el administrador regaló (o quitó), para tener el registro.
create table if not exists public.regalos_puntos (
  id bigint generated always as identity primary key,
  admin_id uuid references auth.users(id) on delete set null,
  user_id uuid not null references auth.users(id) on delete cascade,
  cantidad integer not null check (cantidad <> 0),
  mensaje text not null default '',
  creado timestamptz not null default now()
);

alter table public.perfiles enable row level security;
alter table public.mazos_compartidos enable row level security;
alter table public.mazos_copias enable row level security;
alter table public.regalos_puntos enable row level security;
-- Sin políticas: el navegador no las lee ni las escribe directamente.

-- ---------------------------------------------------------------------------
-- Etiquetas
-- ---------------------------------------------------------------------------

create or replace function public.etiquetas_config()
returns jsonb
language sql
immutable
as $$
  select jsonb_build_object(
    'sorteos_max', 5,          -- veces que se puede sortear otra etiqueta
    'regalo_max', 100000       -- puntos máximos por regalo del administrador
  );
$$;

-- Nombre y número al azar (sin revisar si ya existen).
create or replace function public.etiqueta_al_azar(out nombre text, out numero text)
language plpgsql
volatile
as $$
declare
  cosas text[] := array['Cometa', 'Zorro', 'Panda', 'Puma', 'Condor', 'Lobo', 'Halcon', 'Pulpo', 'Tigre',
    'Delfin', 'Koala', 'Buho', 'Llama', 'Pinguino', 'Colibri', 'Orca', 'Gecko', 'Lince', 'Nutria', 'Robot',
    'Dragon', 'Cohete', 'Rayo', 'Atomo', 'Pixel', 'Meteoro', 'Volcan', 'Trueno', 'Faro', 'Planeta',
    'Nebulosa', 'Quasar', 'Fenix', 'Kraken', 'Yeti', 'Grifo', 'Mamut', 'Jaguar', 'Castor', 'Ciervo'];
  rasgos text[] := array['Azul', 'Verde', 'Veloz', 'Feliz', 'Audaz', 'Sagaz', 'Tenaz', 'Genial', 'Lunar',
    'Solar', 'Estelar', 'Polar', 'Brillante', 'Valiente', 'Gigante', 'Turquesa', 'Violeta', 'Celeste',
    'Naranja', 'Elegante', 'Fugaz', 'Cosmico', 'Magico', 'Rapido', 'Curioso'];
begin
  nombre := cosas[1 + floor(random() * array_length(cosas, 1))::int] || rasgos[1 + floor(random() * array_length(rasgos, 1))::int];
  numero := lpad(floor(random() * 10000)::int::text, 4, '0');
end;
$$;

-- Id de la cuenta de una etiqueta. Acepta «CometaAzul#4821», «CometaAzul-4821»,
-- «cometaazul 4821» o con @ adelante.
create or replace function public.perfil_por_etiqueta(p_etiqueta text)
returns uuid
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  m text[] := regexp_match(trim(coalesce(p_etiqueta, '')), '^@?([A-Za-z]{3,24})[#\- ]?([0-9]{4})$');
begin
  if m is null then
    return null;
  end if;
  return (select p.user_id from public.perfiles p where lower(p.nombre) = lower(m[1]) and p.numero = m[2]);
end;
$$;

-- Crea la etiqueta de la cuenta si todavía no tiene (las de prueba no tienen).
create or replace function public.asegurar_perfil(p_user uuid)
returns void
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  r record;
  i integer := 0;
begin
  if p_user is null or public.cuenta_prueba(p_user) then
    return;
  end if;
  while not exists (select 1 from public.perfiles where user_id = p_user) loop
    i := i + 1;
    if i > 60 then
      raise exception 'No se pudo crear la etiqueta. Intenta de nuevo.';
    end if;
    select * into r from public.etiqueta_al_azar();
    begin
      insert into public.perfiles (user_id, nombre, numero) values (p_user, r.nombre, r.numero);
    exception when unique_violation then
      null;   -- etiqueta ocupada (o la cuenta se creó en paralelo): otra vuelta
    end;
  end loop;
end;
$$;

-- Lo que ve la persona en «Mi perfil».
create or replace function public.perfil_de(p_user uuid)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'prueba', false,
    'etiqueta', p.nombre || '#' || p.numero,
    'enlace', p.nombre || '-' || p.numero,
    'nombre', p.nombre,
    'numero', p.numero,
    'sorteos_restantes', greatest((public.etiquetas_config() ->> 'sorteos_max')::integer - p.sorteos, 0),
    'compartidos', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'id', c.mazo_id,
        'copias', (select count(*) from public.mazos_copias k where k.dueno = p_user and k.mazo_id = c.mazo_id)
      ) order by c.compartido), '[]'::jsonb)
      from public.mazos_compartidos c where c.user_id = p_user
    ),
    'copias', (select count(*) from public.mazos_copias k where k.dueno = p_user)
  )
  from public.perfiles p
  where p.user_id = p_user;
$$;

create or replace function public.mi_perfil()
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
begin
  if v_user is null then
    raise exception 'Inicia sesión para ver tu perfil.' using errcode = '42501';
  end if;
  if public.cuenta_prueba(v_user) then
    return jsonb_build_object('prueba', true);
  end if;
  perform public.asegurar_perfil(v_user);
  return public.perfil_de(v_user);
end;
$$;

-- Sortea otra etiqueta (los enlaces anteriores dejan de funcionar).
create or replace function public.sortear_etiqueta()
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  r record;
  i integer := 0;
  v_hecho boolean := false;
begin
  if v_user is null then
    raise exception 'Inicia sesión para cambiar tu etiqueta.' using errcode = '42501';
  end if;
  if public.cuenta_prueba(v_user) then
    raise exception 'Crea tu cuenta gratis para tener tu etiqueta.' using hint = 'prueba';
  end if;
  perform public.asegurar_perfil(v_user);
  perform pg_advisory_xact_lock(hashtext('perfil:' || v_user::text));
  if (select sorteos from public.perfiles where user_id = v_user) >= (public.etiquetas_config() ->> 'sorteos_max')::integer then
    raise exception 'Ya usaste todos tus sorteos: esta es tu etiqueta definitiva.' using hint = 'sin_sorteos';
  end if;
  while not v_hecho loop
    i := i + 1;
    if i > 60 then
      raise exception 'No se pudo sortear otra etiqueta. Intenta de nuevo.';
    end if;
    select * into r from public.etiqueta_al_azar();
    begin
      update public.perfiles
      set nombre = r.nombre, numero = r.numero, sorteos = sorteos + 1, actualizado = now()
      where user_id = v_user and not (lower(nombre) = lower(r.nombre) and numero = r.numero);
      v_hecho := found;
    exception when unique_violation then
      null;
    end;
  end loop;
  return public.perfil_de(v_user);
end;
$$;

-- ---------------------------------------------------------------------------
-- Mazos compartidos
-- ---------------------------------------------------------------------------

create or replace function public.compartir_mazo(p_mazo text, p_compartir boolean)
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
begin
  if v_user is null then
    raise exception 'Inicia sesión para compartir mazos.' using errcode = '42501';
  end if;
  if public.cuenta_prueba(v_user) then
    raise exception 'Crea tu cuenta gratis para compartir tus mazos.' using hint = 'prueba';
  end if;
  perform public.asegurar_perfil(v_user);
  if coalesce(p_compartir, false) then
    if not exists (select 1 from public.mazos_propios where user_id = v_user and id = p_mazo) then
      raise exception 'Ese mazo todavía no está guardado en tu cuenta. Intenta de nuevo en unos segundos.' using hint = 'no_existe';
    end if;
    insert into public.mazos_compartidos (user_id, mazo_id) values (v_user, p_mazo)
    on conflict (user_id, mazo_id) do nothing;
  else
    delete from public.mazos_compartidos where user_id = v_user and mazo_id = p_mazo;
  end if;
  return public.perfil_de(v_user);
end;
$$;

-- Perfil público: solo la etiqueta y los mazos que la persona eligió compartir.
-- Responde también sin sesión (para abrir enlaces). Si la etiqueta no existe, null.
create or replace function public.perfil_publico(p_etiqueta text)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_user uuid := public.perfil_por_etiqueta(p_etiqueta);
begin
  if v_user is null then
    return null;
  end if;
  return (
    select jsonb_build_object(
      'etiqueta', p.nombre || '#' || p.numero,
      'enlace', p.nombre || '-' || p.numero,
      'tuyo', coalesce(v_user = auth.uid(), false),
      'mazos', (
        select coalesce(jsonb_agg(jsonb_build_object(
          'id', m.id,
          'nombre', m.nombre,
          'descripcion', m.descripcion,
          'color', m.color,
          'tarjetas', jsonb_array_length(m.cards),
          'copias', (select count(*) from public.mazos_copias k where k.dueno = v_user and k.mazo_id = m.id)
        ) order by c.compartido desc), '[]'::jsonb)
        from public.mazos_compartidos c
        join public.mazos_propios m on m.user_id = c.user_id and m.id = c.mazo_id
        where c.user_id = v_user
      )
    )
    from public.perfiles p where p.user_id = v_user
  );
end;
$$;

-- Un mazo compartido con sus tarjetas (null si no existe o ya no se comparte).
create or replace function public.mazo_publico(p_etiqueta text, p_mazo text)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_user uuid := public.perfil_por_etiqueta(p_etiqueta);
begin
  if v_user is null then
    return null;
  end if;
  return (
    select jsonb_build_object(
      'etiqueta', p.nombre || '#' || p.numero,
      'enlace', p.nombre || '-' || p.numero,
      'tuyo', coalesce(v_user = auth.uid(), false),
      'id', m.id,
      'nombre', m.nombre,
      'descripcion', m.descripcion,
      'color', m.color,
      'cards', (
        select coalesce(jsonb_agg(jsonb_build_object('q', coalesce(x.c ->> 'q', ''), 'a', coalesce(x.c ->> 'a', '')) order by x.n), '[]'::jsonb)
        from jsonb_array_elements(m.cards) with ordinality as x(c, n)
        where length(trim(coalesce(x.c ->> 'q', ''))) > 0 or length(trim(coalesce(x.c ->> 'a', ''))) > 0
      ),
      'copias', (select count(*) from public.mazos_copias k where k.dueno = v_user and k.mazo_id = m.id)
    )
    from public.mazos_compartidos c
    join public.mazos_propios m on m.user_id = c.user_id and m.id = c.mazo_id
    join public.perfiles p on p.user_id = c.user_id
    where c.user_id = v_user and c.mazo_id = p_mazo
  );
end;
$$;

-- La web la llama al guardar una copia (para mostrarle al dueño cuántos la guardaron).
create or replace function public.registrar_copia(p_etiqueta text, p_mazo text)
returns void
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_dueno uuid := public.perfil_por_etiqueta(p_etiqueta);
begin
  if v_user is null or v_dueno is null or v_dueno = v_user then
    return;
  end if;
  if not exists (select 1 from public.mazos_compartidos where user_id = v_dueno and mazo_id = p_mazo) then
    return;
  end if;
  insert into public.mazos_copias (user_id, dueno, mazo_id) values (v_user, v_dueno, p_mazo)
  on conflict do nothing;
end;
$$;

-- ---------------------------------------------------------------------------
-- Regalos de puntos (solo administradores, ver admin.sql)
-- ---------------------------------------------------------------------------

-- Busca cuentas por etiqueta, nombre o correo.
create or replace function public.admin_buscar_etiquetas(p_q text)
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_q text := lower(trim(coalesce(p_q, '')));
begin
  perform public.admin_exigir();
  if char_length(v_q) < 2 then
    return '[]'::jsonb;
  end if;
  -- Las cuentas que todavía no abrieron la web después de este cambio
  -- reciben su etiqueta ahora, así se las puede encontrar.
  perform public.asegurar_perfil(u.id)
  from auth.users u
  where not coalesce(u.is_anonymous, false)
    and not exists (select 1 from public.perfiles p where p.user_id = u.id)
    and (lower(coalesce(u.email, '')) like '%' || v_q || '%'
      or lower(coalesce(u.raw_user_meta_data ->> 'full_name', u.raw_user_meta_data ->> 'name', '')) like '%' || v_q || '%');
  return (
    select coalesce(jsonb_agg(s.x order by s.etiqueta), '[]'::jsonb)
    from (
      select jsonb_build_object(
        'etiqueta', p.nombre || '#' || p.numero,
        'nombre', coalesce(nullif(u.raw_user_meta_data ->> 'full_name', ''), nullif(u.raw_user_meta_data ->> 'name', ''), split_part(u.email, '@', 1)),
        'email', u.email,
        'saldo', public.economia_saldo(u.id)
      ) as x, p.nombre || '#' || p.numero as etiqueta
      from public.perfiles p
      join auth.users u on u.id = p.user_id
      where lower(p.nombre || '#' || p.numero) like '%' || replace(v_q, '-', '#') || '%'
         or lower(coalesce(u.email, '')) like '%' || v_q || '%'
         or lower(coalesce(u.raw_user_meta_data ->> 'full_name', u.raw_user_meta_data ->> 'name', '')) like '%' || v_q || '%'
      order by p.nombre, p.numero
      limit 12
    ) s
  );
end;
$$;

-- Regala (o quita, con cantidad negativa) puntos a una cuenta por su etiqueta.
-- Aparece en sus movimientos como «Regalo de Studappy» con el mensaje.
create or replace function public.admin_transferir_puntos(p_etiqueta text, p_cantidad integer, p_mensaje text default '')
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_user uuid;
  v_saldo integer;
  v_max integer := (public.etiquetas_config() ->> 'regalo_max')::integer;
  v_msg text := left(trim(coalesce(p_mensaje, '')), 80);
begin
  perform public.admin_exigir();
  v_user := public.perfil_por_etiqueta(p_etiqueta);
  if v_user is null then
    raise exception 'No existe la etiqueta %.', coalesce(p_etiqueta, '') using hint = 'etiqueta';
  end if;
  if public.cuenta_prueba(v_user) then
    raise exception 'Es una cuenta de prueba: no tiene puntos.' using hint = 'prueba';
  end if;
  if p_cantidad is null or p_cantidad = 0 or abs(p_cantidad) > v_max then
    raise exception 'La cantidad debe ser distinta de 0 y de máximo % puntos.', v_max using hint = 'cantidad';
  end if;
  perform pg_advisory_xact_lock(hashtext('economia:' || v_user::text));
  v_saldo := public.economia_saldo(v_user);
  if v_saldo + p_cantidad < 0 then
    raise exception 'No se puede: le quedarían % puntos (tiene %).', v_saldo + p_cantidad, v_saldo using hint = 'saldo';
  end if;
  insert into public.puntos_movimientos (user_id, cantidad, motivo, ref)
  values (v_user, p_cantidad, 'ajuste', 'regalo:' || v_msg);
  insert into public.regalos_puntos (admin_id, user_id, cantidad, mensaje)
  values (auth.uid(), v_user, p_cantidad, v_msg);
  return jsonb_build_object(
    'etiqueta', public.etiqueta_texto(v_user),
    'cantidad', p_cantidad,
    'saldo', public.economia_saldo(v_user)
  );
end;
$$;

create or replace function public.etiqueta_texto(p_user uuid)
returns text
language sql
stable
security definer
set search_path = public
as $$
  select p.nombre || '#' || p.numero from public.perfiles p where p.user_id = p_user;
$$;

-- Últimos regalos (para el panel).
create or replace function public.admin_regalos_recientes()
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  perform public.admin_exigir();
  return (
    select coalesce(jsonb_agg(jsonb_build_object(
      'etiqueta', public.etiqueta_texto(r.user_id),
      'cantidad', r.cantidad,
      'mensaje', r.mensaje,
      'creado', r.creado
    ) order by r.creado desc, r.id desc), '[]'::jsonb)
    from (select * from public.regalos_puntos order by creado desc, id desc limit 15) r
  );
end;
$$;

-- ---------------------------------------------------------------------------
-- Etiqueta para las cuentas que ya existen (las nuevas la reciben al entrar)
-- ---------------------------------------------------------------------------

do $$
declare
  r record;
begin
  for r in
    select u.id from auth.users u
    where not coalesce(u.is_anonymous, false)
      and not exists (select 1 from public.perfiles p where p.user_id = u.id)
  loop
    perform public.asegurar_perfil(r.id);
  end loop;
end;
$$;

-- ---------------------------------------------------------------------------
-- Permisos
-- ---------------------------------------------------------------------------

revoke all on function public.etiquetas_config() from public, anon, authenticated;
revoke all on function public.etiqueta_al_azar() from public, anon, authenticated;
revoke all on function public.perfil_por_etiqueta(text) from public, anon, authenticated;
revoke all on function public.asegurar_perfil(uuid) from public, anon, authenticated;
revoke all on function public.perfil_de(uuid) from public, anon, authenticated;
revoke all on function public.etiqueta_texto(uuid) from public, anon, authenticated;
revoke all on function public.mi_perfil() from public, anon;
revoke all on function public.sortear_etiqueta() from public, anon;
revoke all on function public.compartir_mazo(text, boolean) from public, anon;
revoke all on function public.registrar_copia(text, text) from public, anon;
revoke all on function public.perfil_publico(text) from public;
revoke all on function public.mazo_publico(text, text) from public;
revoke all on function public.admin_buscar_etiquetas(text) from public, anon;
revoke all on function public.admin_transferir_puntos(text, integer, text) from public, anon;
revoke all on function public.admin_regalos_recientes() from public, anon;

grant execute on function public.mi_perfil() to authenticated;
grant execute on function public.sortear_etiqueta() to authenticated;
grant execute on function public.compartir_mazo(text, boolean) to authenticated;
grant execute on function public.registrar_copia(text, text) to authenticated;
grant execute on function public.perfil_publico(text) to anon, authenticated;
grant execute on function public.mazo_publico(text, text) to anon, authenticated;
grant execute on function public.admin_buscar_etiquetas(text) to authenticated;
grant execute on function public.admin_transferir_puntos(text, integer, text) to authenticated;
grant execute on function public.admin_regalos_recientes() to authenticated;

notify pgrst, 'reload schema';
