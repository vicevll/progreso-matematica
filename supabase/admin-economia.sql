-- Studappy · pruebas de misiones y puntos para el panel /admin (pestaña Economía).
-- Ejecutar en Supabase -> SQL Editor -> New query -> Run, DESPUÉS de admin.sql y
-- misiones.sql. Se puede volver a ejecutar.
--
--   admin_economia_diagnostico(): revisa la instalación, el catálogo, los datos
--     de todos los usuarios y simula el recorrido completo (estudiar, reclamar,
--     canjear, temas, IA plus) con la cuenta del administrador. La simulación
--     se deshace al terminar: no queda nada guardado.
--   admin_economia_puntos(n), admin_economia_completar(mision) y
--   admin_economia_reiniciar(que): herramientas para probar a mano. Solo
--     cambian la cuenta del administrador que las usa.
--
-- Si agregas un tema, una regla o un ícono nuevo, agrégalo también en las
-- listas de abajo (y en css/temas.css, js/temas.js o img/juego).

-- Resultado de una revisión.
create or replace function public.admin_eco_item(p_grupo text, p_nombre text, p_ok boolean, p_detalle text)
returns jsonb
language sql
immutable
as $$
  select jsonb_build_object('grupo', p_grupo, 'nombre', p_nombre, 'ok', coalesce(p_ok, false), 'detalle', coalesce(p_detalle, ''));
$$;

-- Ejecuta una consulta que devuelve jsonb y atrapa el error (con su hint), para
-- probar tanto lo que debe funcionar como lo que debe fallar.
create or replace function public.admin_eco_probar(p_sql text)
returns jsonb
language plpgsql
as $$
declare
  v jsonb;
  v_hint text;
  v_msg text;
begin
  execute p_sql into v;
  return jsonb_build_object('ok', true, 'valor', v);
exception when others then
  get stacked diagnostics v_hint = pg_exception_hint, v_msg = message_text;
  return jsonb_build_object('ok', false, 'error', v_msg, 'hint', coalesce(v_hint, ''));
end;
$$;

-- Cuántas filas tiene un usuario en cada tabla de la economía.
create or replace function public.admin_eco_filas(p_user uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  return jsonb_build_object(
    'movimientos', (select count(*) from public.puntos_movimientos where user_id = p_user),
    'reclamadas', (select count(*) from public.misiones_reclamadas where user_id = p_user),
    'extra', (select count(*) from public.misiones_extra where user_id = p_user),
    'canjes', (select count(*) from public.canjes where user_id = p_user),
    'perfil', (select count(*) from public.juego_perfil where user_id = p_user),
    'estudios', (select count(*) from public.estudio_sesiones where user_id = p_user),
    'mazos', (select count(*) from public.mazos_propios where user_id = p_user),
    'tienda', (select count(*) from public.user_decks where user_id = p_user),
    'log', (select count(*) from public.mazos_adquiridos_log where user_id = p_user),
    'generaciones', (select count(*) from public.ia_generaciones where user_id = p_user)
  );
end;
$$;

-- ---------------------------------------------------------------------------
-- Diagnóstico
-- ---------------------------------------------------------------------------

create or replace function public.admin_economia_diagnostico()
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  t0 timestamptz := clock_timestamp();
  c jsonb := '[]'::jsonb;
  g text;
  cfg jsonb;
  dia record;
  sem record;
  r record;
  x jsonb;
  y jsonb;
  n integer;
  m integer;
  k integer;
  v_total integer;
  v_pagado integer;
  v_ok boolean;
  v_txt text;
  v_lista text[];
  v_saldo0 integer;
  v_filas0 jsonb;
  v_tema text;
  v_tema2 text;
  v_precio integer;
  v_cat text;
  v_mago text := 'paes-ciencias-mago';
  v_reglas text[] := array['saber', 'responder', 'minutos_estudio', 'completar_rondas', 'completar_mazos',
                           'completar_submazos', 'dias_estudio', 'mazo_tienda', 'crear_mazo_ia', 'crear_mazo_manual'];
  v_iconos text[] := array['bandera', 'candado', 'carta', 'chispa', 'cofre', 'corona', 'estrella', 'lapiz', 'llama',
                           'moneda', 'paleta', 'pergamino', 'regalo', 'reloj', 'trofeo', 'matraz'];
  v_temas text[] := array['tema:noche', 'tema:aurora', 'tema:atardecer', 'tema:bosque', 'tema:arcade'];
  v_tablas text[] := array['misiones_catalogo', 'tienda_items', 'puntos_movimientos', 'misiones_reclamadas', 'canjes',
                           'juego_perfil', 'mazos_adquiridos_log', 'ia_generaciones', 'misiones_extra'];
begin
  perform public.admin_exigir();

  -- ---------- Instalación ----------
  g := 'Instalación';
  select array_agg(t) into v_lista
  from unnest(v_tablas || array['estudio_sesiones', 'mazos_propios', 'user_decks', 'store_catalog']) t
  where to_regclass('public.' || t) is null;
  c := c || public.admin_eco_item(g, 'Tablas de misiones y puntos', v_lista is null,
    coalesce('Faltan: ' || array_to_string(v_lista, ', ') || '. Ejecuta mazos.sql, tienda.sql, admin.sql y misiones.sql.', '13 tablas listas'));
  if v_lista is not null then
    return jsonb_build_object('ok', false, 'total', 1, 'fallas', 1, 'ms', 0, 'checks', c, 'ahora', now());
  end if;

  select array_agg(f) into v_lista
  from unnest(array['economia_estado', 'reclamar_mision', 'canjear', 'elegir_tema', 'ia_plus_usar', 'ia_plus_devolver',
                    'ia_registrar_generacion', 'registrar_estudio', 'adquirir_mazo', 'mision_progreso', 'mision_avance',
                    'mision_estado', 'misiones_del_periodo', 'economia_periodo', 'economia_saldo']) f
  where not exists (select 1 from pg_proc p where p.proname = f and p.pronamespace = 'public'::regnamespace);
  c := c || public.admin_eco_item(g, 'Funciones del servidor', v_lista is null,
    coalesce('Faltan: ' || array_to_string(v_lista, ', ') || '. Vuelve a ejecutar misiones.sql.', '15 funciones listas'));

  begin
    v_ok := has_function_privilege('authenticated', 'public.economia_estado()', 'execute')
      and has_function_privilege('authenticated', 'public.reclamar_mision(text)', 'execute')
      and has_function_privilege('authenticated', 'public.canjear(text)', 'execute')
      and has_function_privilege('authenticated', 'public.elegir_tema(text)', 'execute')
      and has_function_privilege('service_role', 'public.ia_plus_usar(uuid, text)', 'execute');
    c := c || public.admin_eco_item(g, 'La web y el generador pueden usar misiones y canjes', v_ok,
      case when v_ok then 'Permisos correctos' else 'Faltan permisos: vuelve a ejecutar misiones.sql' end);

    v_ok := not has_function_privilege('anon', 'public.economia_estado()', 'execute')
      and not has_function_privilege('anon', 'public.canjear(text)', 'execute')
      and not has_function_privilege('authenticated', 'public.economia_saldo(uuid)', 'execute')
      and not has_function_privilege('authenticated', 'public.mision_progreso(uuid, text, jsonb, timestamptz, timestamptz)', 'execute')
      and not has_function_privilege('authenticated', 'public.ia_plus_usar(uuid, text)', 'execute')
      and not has_function_privilege('authenticated', 'public.ia_registrar_generacion(uuid, text, boolean, boolean)', 'execute')
      and not has_function_privilege('authenticated', 'public.admin_eco_probar(text)', 'execute');
    c := c || public.admin_eco_item(g, 'Nadie puede darse puntos desde el navegador', v_ok,
      case when v_ok then 'Las funciones internas están cerradas' else 'Hay funciones internas abiertas: vuelve a ejecutar misiones.sql y admin-economia.sql' end);
  exception when others then
    c := c || public.admin_eco_item(g, 'Permisos', false, sqlerrm);
  end;

  select array_agg(t) into v_lista from unnest(v_tablas) t
  where not coalesce((select relrowsecurity from pg_class where oid = to_regclass('public.' || t)), false)
     or exists (select 1 from pg_policies p where p.schemaname = 'public' and p.tablename = t);
  c := c || public.admin_eco_item(g, 'Tablas privadas protegidas', v_lista is null,
    coalesce('Revisar RLS en: ' || array_to_string(v_lista, ', '), 'RLS activo y sin acceso directo desde el navegador'));

  v_ok := exists (select 1 from pg_trigger t where t.tgname = 'user_decks_registrar_adquisicion'
                  and t.tgrelid = 'public.user_decks'::regclass and t.tgenabled <> 'D');
  c := c || public.admin_eco_item(g, 'Registro de mazos agregados desde la tienda', v_ok,
    case when v_ok then 'Trigger activo' else 'Falta el trigger: vuelve a ejecutar misiones.sql' end);

  v_ok := coalesce((select bool_or(p.prosrc ilike '%canjes%') from pg_proc p
                    where p.proname = 'adquirir_mazo' and p.pronamespace = 'public'::regnamespace), false);
  c := c || public.admin_eco_item(g, 'tienda.sql al día', v_ok,
    case when v_ok then 'Los mazos de pago piden su canje' else 'Vuelve a ejecutar tienda.sql' end);

  -- ---------- Misiones ----------
  g := 'Misiones';
  begin
    cfg := public.economia_config();
    select count(*) filter (where tipo = 'diaria'), count(*) filter (where tipo = 'semanal') into n, m
    from public.misiones_catalogo where activa;
    c := c || public.admin_eco_item(g, 'Hay suficientes misiones activas',
      n >= (cfg ->> 'diarias')::integer and m >= (cfg ->> 'semanales')::integer,
      format('%s diarias activas (salen %s) y %s semanales (salen %s)', n, cfg ->> 'diarias', m, cfg ->> 'semanales'));

    select array_agg(id || ' (' || regla || ')') into v_lista from public.misiones_catalogo where activa and not (regla = any (v_reglas));
    c := c || public.admin_eco_item(g, 'Todas las reglas existen', v_lista is null,
      coalesce('Regla desconocida en: ' || array_to_string(v_lista, ', '), 'Reglas válidas'));

    select array_agg(id || ' (' || icono || ')') into v_lista from public.misiones_catalogo where activa and not (icono = any (v_iconos));
    c := c || public.admin_eco_item(g, 'Íconos pixel art', v_lista is null,
      coalesce('Sin ícono en img/juego: ' || array_to_string(v_lista, ', '), 'Todas tienen ícono'));

    select array_agg(id) into v_lista from public.misiones_catalogo
    where activa and (meta <= 0 or puntos <= 0 or (regla in ('completar_submazos') and parametros ->> 'catalogo' is null));
    c := c || public.admin_eco_item(g, 'Metas y puntos válidos', v_lista is null,
      coalesce('Revisar: ' || array_to_string(v_lista, ', '), 'Todas tienen meta y premio'));

    select * into dia from public.economia_periodo('diaria');
    select * into sem from public.economia_periodo('semanal');
    v_ok := dia.ini <= now() and now() < dia.fin
      and dia.fin - dia.ini between interval '23 hours' and interval '25 hours'
      and dia.clave = 'D' || to_char((now() at time zone 'America/Santiago')::date, 'YYYY-MM-DD');
    c := c || public.admin_eco_item(g, 'Período diario (hora de Chile)', v_ok,
      format('Hoy es %s · se renuevan %s', dia.clave, to_char(dia.fin at time zone 'America/Santiago', 'DD-MM-YYYY HH24:MI')));
    v_ok := sem.ini <= now() and now() < sem.fin
      and sem.fin - sem.ini between interval '167 hours' and interval '169 hours'
      and extract(isodow from (sem.ini at time zone 'America/Santiago')) = 1;
    c := c || public.admin_eco_item(g, 'Período semanal (de lunes a domingo)', v_ok,
      format('Semana %s · se renuevan %s', sem.clave, to_char(sem.fin at time zone 'America/Santiago', 'DD-MM-YYYY HH24:MI')));

    select count(*), count(distinct id), string_agg(titulo, ', ') into n, m, v_txt from public.misiones_del_periodo('diaria', dia.clave);
    c := c || public.admin_eco_item(g, 'Misiones de hoy', n = (cfg ->> 'diarias')::integer and m = n, v_txt);
    select count(*), count(distinct id), string_agg(titulo, ', ') into n, m, v_txt from public.misiones_del_periodo('semanal', sem.clave);
    c := c || public.admin_eco_item(g, 'Misiones de la semana', n = (cfg ->> 'semanales')::integer and m = n, v_txt);

    v_lista := null;
    for r in select id, meta from public.misiones_catalogo where activa loop
      x := public.admin_eco_probar(format('select public.mision_estado(%L::uuid, %L)', v_user, r.id));
      if not (x ->> 'ok')::boolean then
        v_lista := v_lista || (r.id || ': ' || (x ->> 'error'));
      elsif ((x -> 'valor' ->> 'progreso')::integer not between 0 and r.meta) or (x -> 'valor' ->> 'reclamable')::integer < 0 then
        v_lista := v_lista || (r.id || ': progreso fuera de rango');
      end if;
    end loop;
    c := c || public.admin_eco_item(g, 'El progreso se calcula sin errores', v_lista is null,
      coalesce(array_to_string(v_lista, ' · '), (select count(*) from public.misiones_catalogo where activa) || ' misiones revisadas con tu cuenta'));
  exception when others then
    c := c || public.admin_eco_item(g, 'Error inesperado', false, sqlerrm);
  end;

  -- ---------- Tienda ----------
  g := 'Tienda';
  begin
    select array_agg(id) into v_lista from public.tienda_items where tipo = 'tema' and estado <> 'oculto' and not (id = any (v_temas));
    v_ok := v_lista is null and exists (select 1 from public.tienda_items where id = 'tema:noche' and precio = 0 and estado = 'disponible');
    c := c || public.admin_eco_item(g, 'Temas visuales', v_ok,
      case when v_lista is not null then 'Sin colores en css/temas.css: ' || array_to_string(v_lista, ', ')
           when not v_ok then 'Falta el tema Noche gratis'
           else (select string_agg(titulo || ' ' || precio, ' · ' order by orden) from public.tienda_items where tipo = 'tema' and estado <> 'oculto') end);

    select * into r from public.tienda_items where id = 'ia-plus';
    v_ok := found and r.estado = 'disponible' and r.repetible and r.precio > 0
      and coalesce((r.datos ->> 'dias')::integer, 0) > 0;
    c := c || public.admin_eco_item(g, 'IA plus a la venta', v_ok,
      case when v_ok then format('%s pts · %s días · %s tarjetas', r.precio, r.datos ->> 'dias', coalesce(r.datos ->> 'tarjetas', '40')) else 'Revisa la fila ia-plus en tienda_items' end);

    select array_agg(i.id) into v_lista from public.tienda_items i
    where i.tipo = 'mazo' and i.estado = 'disponible'
      and not exists (select 1 from public.store_catalog s where s.catalog_id = i.datos ->> 'catalog_id' and s.active and not s.is_free);
    select count(*) filter (where estado = 'disponible'), count(*) filter (where estado = 'proximamente') into n, m
    from public.tienda_items where tipo = 'mazo';
    c := c || public.admin_eco_item(g, 'Mazos por puntos', v_lista is null,
      coalesce('Sin mazo de pago en store_catalog: ' || array_to_string(v_lista, ', '), format('%s a la venta · %s en «Próximamente»', n, m)));

    select array_agg(id) into v_lista from public.tienda_items where precio < 0 or (tipo <> 'tema' and precio = 0) or (tipo = 'tema' and id <> 'tema:noche' and precio = 0);
    c := c || public.admin_eco_item(g, 'Precios válidos', v_lista is null, coalesce('Revisar: ' || array_to_string(v_lista, ', '), 'Todo tiene precio'));
  exception when others then
    c := c || public.admin_eco_item(g, 'Error inesperado', false, sqlerrm);
  end;

  -- ---------- Datos de todos los usuarios ----------
  g := 'Datos guardados';
  begin
    select count(*) into n from (
      select user_id from public.puntos_movimientos group by user_id having sum(cantidad) < 0
    ) z;
    c := c || public.admin_eco_item(g, 'Ningún saldo negativo', n = 0,
      case when n = 0 then format('%s usuarios con puntos · %s entregados · %s canjeados',
        (select count(distinct user_id) from public.puntos_movimientos),
        (select coalesce(sum(cantidad), 0) from public.puntos_movimientos where cantidad > 0),
        (select coalesce(-sum(cantidad), 0) from public.puntos_movimientos where motivo = 'canje'))
      else n || ' usuarios con saldo negativo' end);

    select count(*) into n from public.misiones_reclamadas mr
    where mr.puntos <> coalesce((select sum(pm.cantidad) from public.puntos_movimientos pm
                                 where pm.user_id = mr.user_id and pm.motivo = 'mision' and pm.ref = mr.mision || '@' || mr.periodo), 0);
    c := c || public.admin_eco_item(g, 'Cada misión reclamada tiene sus puntos', n = 0,
      case when n = 0 then (select count(*) from public.misiones_reclamadas) || ' reclamos revisados' else n || ' reclamos no cuadran' end);

    select count(*) into n from (
      select cj.user_id, cj.item, count(*) as cant from public.canjes cj group by 1, 2
    ) ca full join (
      select pm.user_id, pm.ref as item, count(*) as cant from public.puntos_movimientos pm where pm.motivo = 'canje' group by 1, 2
    ) mv using (user_id, item)
    where coalesce(ca.cant, 0) <> coalesce(mv.cant, 0);
    c := c || public.admin_eco_item(g, 'Cada canje descontó sus puntos', n = 0,
      case when n = 0 then (select count(*) from public.canjes) || ' canjes revisados' else n || ' canjes no cuadran' end);

    select count(*) into n from public.canjes
    where item = 'ia-plus' and (llamadas > 8 or (usado is null) <> (sesion is null) or vence is null);
    c := c || public.admin_eco_item(g, 'IA plus en buen estado', n = 0,
      case when n = 0 then format('%s sin usar · %s usados',
        (select count(*) from public.canjes where item = 'ia-plus' and usado is null and vence > now()),
        (select count(*) from public.canjes where item = 'ia-plus' and usado is not null))
      else n || ' canjes de IA plus con datos raros' end);

    select count(*) into n from public.juego_perfil j join public.tienda_items i on i.id = j.tema
    where i.precio > 0 and not exists (select 1 from public.canjes c2 where c2.user_id = j.user_id and c2.item = j.tema);
    c := c || public.admin_eco_item(g, 'Nadie usa un tema que no canjeó', n = 0,
      case when n = 0 then (select count(*) from public.juego_perfil) || ' perfiles revisados' else n || ' perfiles con tema sin canjear' end);
  exception when others then
    c := c || public.admin_eco_item(g, 'Error inesperado', false, sqlerrm);
  end;

  -- ---------- Simulación con tu cuenta (se deshace al final) ----------
  g := 'Simulación';
  v_saldo0 := public.economia_saldo(v_user);
  v_filas0 := public.admin_eco_filas(v_user);
  begin
    -- Cuenta en cero, solo dentro de la simulación.
    delete from public.misiones_reclamadas where user_id = v_user;
    delete from public.misiones_extra where user_id = v_user;
    delete from public.puntos_movimientos where user_id = v_user;
    delete from public.canjes where user_id = v_user;
    delete from public.juego_perfil where user_id = v_user;
    delete from public.estudio_sesiones where user_id = v_user and inicio >= sem.ini;
    delete from public.mazos_propios where user_id = v_user and creado_en >= sem.ini;
    delete from public.ia_generaciones where user_id = v_user and creada >= sem.ini;
    delete from public.mazos_adquiridos_log where user_id = v_user and primera >= sem.ini;

    x := public.admin_eco_probar('select public.economia_estado()');
    v_ok := (x ->> 'ok')::boolean
      and (x -> 'valor' ->> 'saldo')::integer = 0
      and jsonb_array_length(x -> 'valor' -> 'misiones') = (cfg ->> 'diarias')::integer + (cfg ->> 'semanales')::integer
      and jsonb_array_length(x -> 'valor' -> 'items') = (select count(*) from public.tienda_items where estado <> 'oculto')
      and x -> 'valor' ->> 'tema' = 'tema:noche';
    c := c || public.admin_eco_item(g, 'Cuenta nueva: 0 puntos, misiones y tienda', v_ok,
      coalesce(x ->> 'error', format('%s misiones · %s ítems', jsonb_array_length(x -> 'valor' -> 'misiones'), jsonb_array_length(x -> 'valor' -> 'items'))));

    select id into v_txt from public.misiones_del_periodo('diaria', dia.clave) limit 1;
    x := public.admin_eco_probar(format('select public.reclamar_mision(%L)', v_txt));
    c := c || public.admin_eco_item(g, 'No deja reclamar una misión sin completarla', x ->> 'hint' = 'incompleta', coalesce(x ->> 'error', 'La reclamó igual'));

    -- Estudio: 10 «Lo sé» en 60 s y una ronda tramposa (10 en 3 s).
    x := public.admin_eco_probar(format($q$select to_jsonb((public.registrar_estudio(%L, 'diag-mazo', 'Diagnóstico', 'propio', null, null, 'todas', 60, 10, 10, 10, 0, 0, true))::text)$q$, 'diag' || md5(random()::text)));
    n := public.mision_progreso(v_user, 'saber', '{}', dia.ini, dia.fin);
    c := c || public.admin_eco_item(g, '«Lo sé» suma cada tarjeta', (x ->> 'ok')::boolean and n = 10,
      coalesce(x ->> 'error', format('10 «Lo sé» → progreso %s', n)));

    -- Misiones por tarjeta: con 10 de 20 se cobra la mitad (el resto, más abajo).
    v_txt := null;
    for r in
      select d.* from public.misiones_del_periodo('diaria', dia.clave) d where d.por_unidad
      union all
      select s.* from public.misiones_del_periodo('semanal', sem.clave) s where s.por_unidad
    loop
      n := (public.mision_estado(v_user, r.id) ->> 'progreso')::integer;
      if n > 0 and n < r.meta then
        y := public.admin_eco_probar(format('select public.reclamar_mision(%L)', r.id));
        v_ok := (y ->> 'ok')::boolean and (y -> 'valor' ->> 'ganados')::integer = n * r.puntos;
        c := c || public.admin_eco_item(g, 'Misiones por tarjeta se pagan por partes', v_ok,
          coalesce(y ->> 'error', format('%s: %s de %s tarjetas → +%s ahora', r.titulo, n, r.meta, y -> 'valor' ->> 'ganados')));
        v_txt := r.id;
        exit;
      end if;
    end loop;
    if v_txt is null then
      c := c || public.admin_eco_item(g, 'Misiones por tarjeta se pagan por partes', true, 'Hoy no salió ninguna misión por tarjeta (se omitió)');
    end if;
    x := public.admin_eco_probar(format($q$select to_jsonb((public.registrar_estudio(%L, 'diag-rapido', 'Diagnóstico', 'propio', null, null, 'todas', 3, 10, 10, 10, 0, 0, true))::text)$q$, 'diag' || md5(random()::text)));
    n := public.mision_progreso(v_user, 'saber', '{}', dia.ini, dia.fin);
    m := public.mision_progreso(v_user, 'completar_rondas', '{"min_total": 5}', dia.ini, dia.fin);
    c := c || public.admin_eco_item(g, 'Respuestas demasiado rápidas no suman', n = 13 and m = 1,
      format('10 tarjetas en 3 s → +%s (no +10) · rondas válidas: %s', n - 10, m));
    n := public.mision_progreso(v_user, 'responder', '{}', dia.ini, dia.fin);
    m := public.mision_progreso(v_user, 'minutos_estudio', '{}', dia.ini, dia.fin);
    c := c || public.admin_eco_item(g, 'Tarjetas respondidas y minutos de estudio', n = 13 and m = 1,
      format('%s respondidas · %s min', n, m));

    n := public.mision_progreso(v_user, 'completar_mazos', '{"min_total": 5}', sem.ini, sem.fin);
    m := public.mision_progreso(v_user, 'completar_rondas', '{"filtro": "pendientes", "min_total": 1}', dia.ini, dia.fin);
    x := public.admin_eco_probar(format($q$select to_jsonb((public.registrar_estudio(%L, 'diag-mazo', 'Diagnóstico', 'propio', null, null, 'pendientes', 10, 3, 3, 3, 0, 0, true))::text)$q$, 'diag' || md5(random()::text)));
    k := public.mision_progreso(v_user, 'completar_rondas', '{"filtro": "pendientes", "min_total": 1}', dia.ini, dia.fin);
    c := c || public.admin_eco_item(g, 'Rondas, repasos de pendientes y mazos completos', n = 1 and m = 0 and k = 1,
      format('mazos completos: %s · pendientes: %s → %s', n, m, k));

    x := public.admin_eco_probar(format($q$select to_jsonb((public.registrar_estudio(%L, 'diag-mago', 'Mago', 'tienda', %L, 's1', 'todas', 30, 10, 10, 8, 2, 0, true))::text)$q$, 'diag' || md5(random()::text), v_mago));
    y := public.admin_eco_probar(format($q$select to_jsonb((public.registrar_estudio(%L, 'diag-mago', 'Mago', 'tienda', %L, 's2', 'todas', 30, 10, 10, 8, 2, 0, true))::text)$q$, 'diag' || md5(random()::text), v_mago));
    n := public.mision_progreso(v_user, 'completar_submazos', jsonb_build_object('catalogo', v_mago), sem.ini, sem.fin);
    m := public.mision_progreso(v_user, 'responder', jsonb_build_object('catalogo', v_mago), dia.ini, dia.fin);
    c := c || public.admin_eco_item(g, 'Submazos y tarjetas del Mazo del mago', (x ->> 'ok')::boolean and (y ->> 'ok')::boolean and n = 2 and m = 20,
      coalesce(x ->> 'error', y ->> 'error', format('submazos: %s · tarjetas del mago: %s', n, m)));

    n := public.mision_progreso(v_user, 'dias_estudio', '{"min_respuestas": 5}', sem.ini, sem.fin);
    c := c || public.admin_eco_item(g, 'Días de estudio (racha)', n = 1, format('%s día', n));

    select catalog_id into v_cat from public.store_catalog where active order by is_free desc, catalog_id limit 1;
    if v_cat is null then
      c := c || public.admin_eco_item(g, 'Mazo nuevo de la tienda', true, 'No hay mazos en store_catalog (se omitió)');
    else
      delete from public.user_decks where user_id = v_user and catalog_id = v_cat;
      delete from public.mazos_adquiridos_log where user_id = v_user and catalog_id = v_cat;
      insert into public.user_decks (user_id, catalog_id, title) values (v_user, v_cat, 'Diagnóstico');
      n := public.mision_progreso(v_user, 'mazo_tienda', '{}', dia.ini, dia.fin);
      delete from public.user_decks where user_id = v_user and catalog_id = v_cat;
      insert into public.user_decks (user_id, catalog_id, title) values (v_user, v_cat, 'Diagnóstico');
      m := public.mision_progreso(v_user, 'mazo_tienda', '{}', dia.ini, dia.fin);
      c := c || public.admin_eco_item(g, 'Mazo nuevo de la tienda (quitarlo y agregarlo no cuenta doble)', n = 1 and m = 1,
        format('%s: %s → %s', v_cat, n, m));
    end if;

    insert into public.mazos_propios (user_id, id, nombre, cards)
    values (v_user, 'diag-ia', 'Diagnóstico IA', '[{"id": "g1-a", "q": "Pregunta", "a": "Respuesta"}]');
    n := public.mision_progreso(v_user, 'crear_mazo_ia', '{}', sem.ini, sem.fin);
    x := public.admin_eco_probar(format($q$select to_jsonb((public.ia_registrar_generacion(%L::uuid, 'diag-gen', false, false))::text)$q$, v_user));
    m := public.mision_progreso(v_user, 'crear_mazo_ia', '{}', sem.ini, sem.fin);
    c := c || public.admin_eco_item(g, 'Mazo con IA (pide una generación real)', (x ->> 'ok')::boolean and n = 0 and m = 1,
      coalesce(x ->> 'error', format('sin generación: %s · con generación: %s', n, m)));

    insert into public.mazos_propios (user_id, id, nombre, cards)
    values (v_user, 'diag-corto', 'Diagnóstico corto', (select jsonb_agg(jsonb_build_object('id', 'c' || i, 'q', 'P' || i, 'a', 'R' || i)) from generate_series(1, 3) i));
    n := public.mision_progreso(v_user, 'crear_mazo_manual', '{"min_tarjetas": 8}', sem.ini, sem.fin);
    insert into public.mazos_propios (user_id, id, nombre, cards)
    values (v_user, 'diag-manual', 'Diagnóstico a mano', (select jsonb_agg(jsonb_build_object('id', 'c' || i, 'q', 'P' || i, 'a', 'R' || i)) from generate_series(1, 8) i));
    m := public.mision_progreso(v_user, 'crear_mazo_manual', '{"min_tarjetas": 8}', sem.ini, sem.fin);
    c := c || public.admin_eco_item(g, 'Mazo hecho a mano (mínimo 8 tarjetas)', n = 0 and m = 1, format('3 tarjetas: %s · 8 tarjetas: %s', n, m));

    -- Completar (como la herramienta del panel) y reclamar las misiones del período.
    v_total := public.economia_saldo(v_user);
    v_lista := null;
    for r in
      select d.*, dia.clave as per from public.misiones_del_periodo('diaria', dia.clave) d
      union all
      select s.*, sem.clave from public.misiones_del_periodo('semanal', sem.clave) s
    loop
      x := public.mision_estado(v_user, r.id);
      n := (x ->> 'progreso')::integer;
      v_pagado := (x ->> 'pagadas')::integer;
      if n < r.meta then
        insert into public.misiones_extra (user_id, mision, periodo, unidades) values (v_user, r.id, r.per, r.meta - n);
      end if;
      k := case when r.por_unidad then (r.meta - v_pagado) * r.puntos else r.puntos end;
      y := public.admin_eco_probar(format('select public.reclamar_mision(%L)', r.id));
      if not (y ->> 'ok')::boolean or (y -> 'valor' ->> 'ganados')::integer <> k then
        v_lista := v_lista || (r.titulo || ': ' || coalesce(y ->> 'error', 'ganó ' || (y -> 'valor' ->> 'ganados') || ' en vez de ' || k));
      else
        v_total := v_total + k;
      end if;
    end loop;
    n := public.economia_saldo(v_user);
    c := c || public.admin_eco_item(g, 'Completar y reclamar las misiones de hoy y de la semana', v_lista is null and n = v_total,
      coalesce(array_to_string(v_lista, ' · '), format('%s de %s reclamadas · saldo %s', (cfg ->> 'diarias')::integer + (cfg ->> 'semanales')::integer, (cfg ->> 'diarias')::integer + (cfg ->> 'semanales')::integer, n)));

    select id into v_txt from public.misiones_del_periodo('diaria', dia.clave) limit 1;
    x := public.admin_eco_probar(format('select public.reclamar_mision(%L)', v_txt));
    c := c || public.admin_eco_item(g, 'No deja reclamar dos veces', x ->> 'hint' = 'reclamada', coalesce(x ->> 'error', 'La pagó otra vez'));

    select m2.id into v_txt from public.misiones_catalogo m2
    where m2.activa and m2.tipo = 'diaria' and m2.id not in (select id from public.misiones_del_periodo('diaria', dia.clave)) limit 1;
    if v_txt is not null then
      x := public.admin_eco_probar(format('select public.reclamar_mision(%L)', v_txt));
      c := c || public.admin_eco_item(g, 'Solo se reclaman las misiones de hoy', x ->> 'hint' = 'mision', coalesce(x ->> 'error', 'Pagó una misión que no tocaba'));
    end if;

    -- Canjes y temas.
    insert into public.puntos_movimientos (user_id, cantidad, motivo, ref) values (v_user, 5000, 'ajuste', 'diagnostico');
    n := public.economia_saldo(v_user);
    c := c || public.admin_eco_item(g, 'Regalo de puntos', n = v_total + 5000, format('+5.000 → saldo %s', n));

    x := public.admin_eco_probar($q$select public.canjear('tema:noche')$q$);
    c := c || public.admin_eco_item(g, 'El tema gratis no se canjea', x ->> 'hint' = 'tengo', coalesce(x ->> 'error', 'Lo canjeó'));

    select id, precio into v_tema, v_precio from public.tienda_items
    where tipo = 'tema' and estado = 'disponible' and precio > 0 order by precio, orden limit 1;
    select id into v_tema2 from public.tienda_items
    where tipo = 'tema' and estado = 'disponible' and precio > 0 and id <> v_tema order by orden limit 1;
    if v_tema is null then
      c := c || public.admin_eco_item(g, 'Canjear un tema', false, 'No hay temas de pago a la venta');
    else
      m := public.economia_saldo(v_user);
      x := public.admin_eco_probar(format('select public.canjear(%L)', v_tema));
      v_ok := (x ->> 'ok')::boolean and (x -> 'valor' ->> 'saldo')::integer = m - v_precio
        and (select tema from public.juego_perfil where user_id = v_user) = v_tema;
      c := c || public.admin_eco_item(g, 'Canjear un tema descuenta sus puntos y lo deja puesto', v_ok,
        coalesce(x ->> 'error', format('%s: -%s → saldo %s', (select titulo from public.tienda_items where id = v_tema), v_precio, x -> 'valor' ->> 'saldo')));

      x := public.admin_eco_probar(format('select public.canjear(%L)', v_tema));
      c := c || public.admin_eco_item(g, 'Un tema no se canjea dos veces', x ->> 'hint' = 'tengo', coalesce(x ->> 'error', 'Lo cobró otra vez'));

      x := public.admin_eco_probar($q$select public.elegir_tema('tema:noche')$q$);
      v_ok := (x ->> 'ok')::boolean and (select tema from public.juego_perfil where user_id = v_user) = 'tema:noche';
      y := public.admin_eco_probar(format('select public.elegir_tema(%L)', coalesce(v_tema2, 'tema:noche')));
      v_ok := v_ok and (v_tema2 is null or y ->> 'hint' = 'no_tengo');
      x := public.admin_eco_probar(format('select public.elegir_tema(%L)', v_tema));
      v_ok := v_ok and (x ->> 'ok')::boolean and (select tema from public.juego_perfil where user_id = v_user) = v_tema;
      c := c || public.admin_eco_item(g, 'Solo se usan los temas que tienes', v_ok,
        coalesce(x ->> 'error', 'Cambió entre Noche y ' || (select titulo from public.tienda_items where id = v_tema)
          || coalesce(' · ' || (select titulo from public.tienda_items where id = v_tema2) || ' bloqueado', '')));
    end if;

    select id into v_txt from public.tienda_items where estado = 'proximamente' order by orden limit 1;
    if v_txt is not null then
      x := public.admin_eco_probar(format('select public.canjear(%L)', v_txt));
      c := c || public.admin_eco_item(g, 'Lo «Próximamente» no se canjea', x ->> 'hint' = 'proximamente', coalesce(x ->> 'error', 'Lo canjeó'));
    end if;

    n := public.economia_saldo(v_user);
    if n <> 1 then
      insert into public.puntos_movimientos (user_id, cantidad, motivo, ref) values (v_user, 1 - n, 'ajuste', 'diagnostico');
    end if;
    x := public.admin_eco_probar($q$select public.canjear('ia-plus')$q$);
    m := public.economia_saldo(v_user);
    c := c || public.admin_eco_item(g, 'Sin puntos suficientes no deja canjear', x ->> 'hint' = 'saldo' and m = 1,
      coalesce(x ->> 'error', 'Canjeó con 1 punto'));
    insert into public.puntos_movimientos (user_id, cantidad, motivo, ref) values (v_user, 5000, 'ajuste', 'diagnostico');

    -- IA plus.
    x := public.admin_eco_probar($q$select public.canjear('ia-plus')$q$);
    y := public.economia_estado();
    v_ok := (x ->> 'ok')::boolean and (y -> 'plus' ->> 'disponibles')::integer = 1
      and (x -> 'valor' ->> 'vence')::timestamptz between now() + interval '6 days 23 hours' and now() + interval '7 days 1 hour';
    c := c || public.admin_eco_item(g, 'Canjear IA plus da 1 mazo por 7 días', v_ok,
      coalesce(x ->> 'error', 'Vence ' || to_char((x -> 'valor' ->> 'vence')::timestamptz at time zone 'America/Santiago', 'DD-MM HH24:MI')));

    x := public.admin_eco_probar(format($q$select public.ia_plus_usar(%L::uuid, 'diag-plus-1')$q$, v_user));
    y := public.admin_eco_probar(format($q$select public.ia_plus_usar(%L::uuid, 'diag-plus-1')$q$, v_user));
    v_ok := (x ->> 'ok')::boolean and (x -> 'valor' ->> 'tarjetas')::integer = 40 and (y ->> 'ok')::boolean
      and (public.economia_estado() -> 'plus' ->> 'disponibles')::integer = 0;
    c := c || public.admin_eco_item(g, 'El generador lo usa (40 tarjetas; leer y regenerar usan el mismo)', v_ok,
      coalesce(x ->> 'error', y ->> 'error', '2 llamadas al mismo IA plus'));

    x := public.admin_eco_probar(format($q$select public.ia_plus_usar(%L::uuid, 'diag-plus-2')$q$, v_user));
    c := c || public.admin_eco_item(g, 'Un IA plus sirve para un solo mazo', x ->> 'hint' = 'sin_plus', coalesce(x ->> 'error', 'Otro mazo lo usó también'));

    x := public.admin_eco_probar(format($q$select to_jsonb((public.ia_plus_devolver(%L::uuid, 'diag-plus-1'))::text)$q$, v_user));
    y := public.admin_eco_probar(format($q$select to_jsonb((public.ia_plus_devolver(%L::uuid, 'diag-plus-1'))::text)$q$, v_user));
    n := (public.economia_estado() -> 'plus' ->> 'disponibles')::integer;
    c := c || public.admin_eco_item(g, 'Si la IA falla, el IA plus se devuelve', (x ->> 'ok')::boolean and n = 1,
      coalesce(x ->> 'error', format('disponibles otra vez: %s', n)));

    for k in 1..8 loop
      x := public.admin_eco_probar(format($q$select public.ia_plus_usar(%L::uuid, 'diag-plus-3')$q$, v_user));
    end loop;
    y := public.admin_eco_probar(format($q$select public.ia_plus_usar(%L::uuid, 'diag-plus-3')$q$, v_user));
    c := c || public.admin_eco_item(g, 'Máximo 8 llamadas a la IA por mazo plus', (x ->> 'ok')::boolean and y ->> 'hint' = 'plus_agotado',
      coalesce(x ->> 'error', y ->> 'error', 'La 9ª llamada pasó'));

    x := public.admin_eco_probar($q$select public.canjear('ia-plus')$q$);
    update public.canjes set vence = now() - interval '1 second' where user_id = v_user and item = 'ia-plus' and usado is null;
    y := public.admin_eco_probar(format($q$select public.ia_plus_usar(%L::uuid, 'diag-plus-4')$q$, v_user));
    c := c || public.admin_eco_item(g, 'Se puede canjear de nuevo, y uno vencido no sirve', (x ->> 'ok')::boolean and y ->> 'hint' = 'sin_plus',
      coalesce(x ->> 'error', y ->> 'error', 'Usó un IA plus vencido'));

    -- Mazos de pago.
    select s.catalog_id into v_cat from public.store_catalog s where s.active and not s.is_free order by s.catalog_id limit 1;
    if v_cat is null then
      c := c || public.admin_eco_item(g, 'Mazos de pago piden su canje', true, 'Todavía no hay mazos de pago (se omitió)');
    else
      delete from public.user_decks where user_id = v_user and catalog_id = v_cat;
      x := public.admin_eco_probar(format($q$select to_jsonb(public.adquirir_mazo(%L, '[{"id": "c1", "q": "P", "a": "R"}]'))$q$, v_cat));
      c := c || public.admin_eco_item(g, 'Mazos de pago piden su canje', not (x ->> 'ok')::boolean and x ->> 'error' ilike '%puntos%',
        coalesce(x ->> 'error', 'Se agregó sin canjear'));
    end if;

    y := public.economia_estado();
    v_ok := (y ->> 'saldo')::integer = public.economia_saldo(v_user)
      and jsonb_array_length(y -> 'movimientos') between 1 and 8
      and not exists (select 1 from jsonb_array_elements(y -> 'misiones') e where (e ->> 'reclamable')::integer > 0 or not (e ->> 'completa')::boolean);
    c := c || public.admin_eco_item(g, 'Lo que ve la web cuadra', v_ok, format('saldo %s · %s movimientos recientes', y ->> 'saldo', jsonb_array_length(y -> 'movimientos')));

    raise exception '__fin_diagnostico__';
  exception when others then
    if sqlerrm <> '__fin_diagnostico__' then
      c := c || public.admin_eco_item(g, 'La simulación se detuvo', false, sqlerrm);
    end if;
  end;

  v_ok := public.economia_saldo(v_user) = v_saldo0 and public.admin_eco_filas(v_user) = v_filas0;
  c := c || public.admin_eco_item(g, 'Nada quedó guardado: tu cuenta sigue igual', v_ok,
    format('Saldo real: %s puntos', public.economia_saldo(v_user)));

  return jsonb_build_object(
    'ok', not exists (select 1 from jsonb_array_elements(c) e where not (e ->> 'ok')::boolean),
    'total', jsonb_array_length(c),
    'fallas', (select count(*) from jsonb_array_elements(c) e where not (e ->> 'ok')::boolean),
    'ms', round(extract(epoch from clock_timestamp() - t0) * 1000),
    'checks', c,
    'ahora', now()
  );
end;
$$;

-- ---------------------------------------------------------------------------
-- Herramientas para probar a mano (solo en la cuenta del administrador)
-- ---------------------------------------------------------------------------

-- Suma o resta puntos (el saldo no baja de 0).
create or replace function public.admin_economia_puntos(p_cantidad integer)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_saldo integer;
  v_cant integer;
begin
  perform public.admin_exigir();
  if p_cantidad is null or p_cantidad = 0 or abs(p_cantidad) > 100000 then
    raise exception 'Elige una cantidad entre -100.000 y 100.000.' using hint = 'cantidad';
  end if;
  perform pg_advisory_xact_lock(hashtext('economia:' || v_user::text));
  v_saldo := public.economia_saldo(v_user);
  v_cant := greatest(p_cantidad, -v_saldo);
  if v_cant = 0 then
    raise exception 'Tu saldo ya está en 0.' using hint = 'cero';
  end if;
  insert into public.puntos_movimientos (user_id, cantidad, motivo, ref) values (v_user, v_cant, 'ajuste', 'admin-prueba');
  return jsonb_build_object('saldo', public.economia_saldo(v_user), 'cambio', v_cant);
end;
$$;

-- Deja lista para reclamar una misión de hoy o de esta semana.
create or replace function public.admin_economia_completar(p_mision text)
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
begin
  perform public.admin_exigir();
  select * into m from public.misiones_catalogo where id = p_mision;
  if not found then
    raise exception 'Esa misión no existe.' using hint = 'mision';
  end if;
  select * into per from public.economia_periodo(m.tipo);
  if not exists (select 1 from public.misiones_del_periodo(m.tipo, per.clave) x where x.id = m.id) then
    raise exception 'Esa misión no salió en este período.' using hint = 'mision';
  end if;
  v_prog := public.mision_avance(v_user, m, per.clave, per.ini, per.fin);
  if v_prog >= m.meta then
    raise exception 'Ya está completa: solo falta reclamarla.' using hint = 'completa';
  end if;
  insert into public.misiones_extra as x (user_id, mision, periodo, unidades)
  values (v_user, m.id, per.clave, m.meta - v_prog)
  on conflict (user_id, mision, periodo) do update set unidades = x.unidades + excluded.unidades, creado = now();
  return public.mision_estado(v_user, m.id);
end;
$$;

-- Vuelve a cero partes de la cuenta del administrador:
--   'misiones' -> reclamos, progreso extra y sus puntos (se pueden reclamar de nuevo)
--   'canjes'   -> canjes (devuelve los puntos) y vuelve al tema Noche
--   'puntos'   -> deja el saldo en 0
--   'todo'     -> todo lo anterior, sin historial
create or replace function public.admin_economia_reiniciar(p_que text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_saldo integer;
begin
  perform public.admin_exigir();
  if p_que is null or p_que not in ('misiones', 'canjes', 'puntos', 'todo') then
    raise exception 'Opción desconocida.' using hint = 'opcion';
  end if;
  perform pg_advisory_xact_lock(hashtext('economia:' || v_user::text));

  if p_que in ('misiones', 'todo') then
    delete from public.misiones_reclamadas where user_id = v_user;
    delete from public.misiones_extra where user_id = v_user;
    delete from public.puntos_movimientos where user_id = v_user and motivo = 'mision';
    -- Los mazos de la tienda que ya no tienes vuelven a contar como nuevos.
    delete from public.mazos_adquiridos_log l where l.user_id = v_user
      and not exists (select 1 from public.user_decks d where d.user_id = v_user and d.catalog_id = l.catalog_id);
  end if;
  if p_que in ('canjes', 'todo') then
    delete from public.canjes where user_id = v_user;
    delete from public.puntos_movimientos where user_id = v_user and motivo = 'canje';
    delete from public.juego_perfil where user_id = v_user;
  end if;
  if p_que = 'todo' then
    delete from public.puntos_movimientos where user_id = v_user;
  end if;

  v_saldo := public.economia_saldo(v_user);
  if p_que = 'puntos' and v_saldo > 0 then
    insert into public.puntos_movimientos (user_id, cantidad, motivo, ref) values (v_user, -v_saldo, 'ajuste', 'admin-reinicio');
  elsif v_saldo < 0 then
    -- Pasa si antes se dejó en 0 y luego se borraron misiones: vuelve a 0.
    insert into public.puntos_movimientos (user_id, cantidad, motivo, ref) values (v_user, -v_saldo, 'ajuste', 'admin-reinicio');
  end if;
  return jsonb_build_object('saldo', public.economia_saldo(v_user), 'reiniciado', p_que);
end;
$$;

-- ---------------------------------------------------------------------------
-- Permisos
-- ---------------------------------------------------------------------------

revoke all on function public.admin_eco_item(text, text, boolean, text) from public, anon, authenticated;
revoke all on function public.admin_eco_probar(text) from public, anon, authenticated;
revoke all on function public.admin_eco_filas(uuid) from public, anon, authenticated;
revoke all on function public.admin_economia_diagnostico() from public, anon;
revoke all on function public.admin_economia_puntos(integer) from public, anon;
revoke all on function public.admin_economia_completar(text) from public, anon;
revoke all on function public.admin_economia_reiniciar(text) from public, anon;

grant execute on function public.admin_economia_diagnostico() to authenticated;
grant execute on function public.admin_economia_puntos(integer) to authenticated;
grant execute on function public.admin_economia_completar(text) to authenticated;
grant execute on function public.admin_economia_reiniciar(text) to authenticated;

notify pgrst, 'reload schema';
