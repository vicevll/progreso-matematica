// Studappy · panel de administración (studappy.vercel.app/admin).
//
// Los datos salen de las funciones admin_* de supabase/admin.sql, que solo
// responden a las cuentas de la tabla admins: este archivo solo arma la
// vista. Los textos que vienen de los usuarios (nombres, correos, mazos) se
// escapan siempre antes de pintarlos. La vista «Misiones y puntos» está en
// js/admin-economia.js.
(function () {
  "use strict";

  var TZ = "America/Santiago";
  var raiz = document.getElementById("adm");
  var cuentaEl = document.getElementById("adm-cuenta");
  var tip = document.getElementById("adm-tooltip");

  var SECCIONES = [
    { id: "mazos", label: "Mis mazos" },
    { id: "estudio", label: "Estudiando" },
    { id: "tienda", label: "Tienda" },
    { id: "generador", label: "Generador con IA" },
    { id: "otro", label: "Otras pantallas" }
  ];
  var DISPOSITIVOS = { movil: "Celular", escritorio: "Computador", tablet: "Tablet" };
  var ORIGEN = { propio: "Propio", ia: "Con IA", tienda: "Tienda" };
  var DIAS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  var MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"];
  var METRICAS = {
    activos: { label: "Usuarios activos", valor: function (d) { return d.activos; }, fmt: function (v) { return num(v); } },
    minutos: { label: "Minutos de uso", valor: function (d) { return d.segundos / 60; }, fmt: function (v) { return num(Math.round(v)) + " min"; } },
    respuestas: { label: "Respuestas", valor: function (d) { return d.respuestas; }, fmt: function (v) { return num(v); } },
    nuevos: { label: "Usuarios nuevos", valor: function (d) { return d.nuevos; }, fmt: function (v) { return num(v); } }
  };

  var estado = {
    uid: undefined,
    sesion: null,
    rango: guardado("adm-rango", "30"),
    incluirme: guardado("adm-incluirme", "0") === "1",
    metrica: guardado("adm-metrica", "activos"),
    orden: { col: "ultimo", dir: -1 },
    busqueda: "",
    limite: 50,
    resumen: null,
    usuarios: null,
    pedido: 0,
    fichaPedido: 0,
    fichaUid: null,
    // Vista del panel: "uso" (cómo usan la app) o "economia" (misiones y puntos).
    vista: /^#economia/.test(location.hash) ? "economia" : guardado("adm-vista", "uso") === "economia" ? "economia" : "uso"
  };
  if (!METRICAS[estado.metrica]) estado.metrica = "activos";
  if (["7", "30", "90", "todo"].indexOf(estado.rango) === -1) estado.rango = "30";

  // ---------- utilidades ----------

  function guardado(clave, porDefecto) {
    try { return localStorage.getItem(clave) || porDefecto; } catch (e) { return porDefecto; }
  }
  function guardar(clave, valor) {
    try { localStorage.setItem(clave, valor); } catch (e) { /* sin almacenamiento */ }
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function ic(nombre, size) {
    return window.icon ? window.icon(nombre, { size: size || 16 }) : "";
  }

  var fmtNum = new Intl.NumberFormat("es-CL");
  function num(n) {
    return fmtNum.format(Math.round(Number(n) || 0));
  }

  function dur(seg) {
    seg = Math.max(0, Math.round(Number(seg) || 0));
    if (seg < 60) return seg + " s";
    var min = Math.round(seg / 60);
    if (min < 60) return min + " min";
    var h = Math.floor(min / 60);
    var resto = min % 60;
    return h + " h" + (resto ? " " + (resto < 10 ? "0" : "") + resto + " min" : "");
  }

  function pct(parte, total) {
    total = Number(total) || 0;
    if (!total) return "–";
    return Math.round(((Number(parte) || 0) / total) * 100) + " %";
  }

  function hoyChile() {
    return new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  }

  function sumarDias(iso, n) {
    var d = new Date(iso + "T12:00:00Z");
    d.setUTCDate(d.getUTCDate() + n);
    return d.toISOString().slice(0, 10);
  }

  function fechaCorta(iso) {
    if (!iso) return "";
    var p = String(iso).slice(0, 10).split("-");
    return parseInt(p[2], 10) + " " + MESES[parseInt(p[1], 10) - 1];
  }

  function diaSemana(iso) {
    var d = new Date(String(iso).slice(0, 10) + "T12:00:00Z");
    return DIAS[(d.getUTCDay() + 6) % 7];
  }

  function fechaHora(iso) {
    if (!iso) return "";
    var d = new Date(iso);
    var dia = new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
    var hora = new Intl.DateTimeFormat("es-CL", { timeZone: TZ, hour: "2-digit", minute: "2-digit", hour12: false }).format(d);
    return fechaCorta(dia) + ", " + hora;
  }

  function hace(iso) {
    if (!iso) return "nunca";
    var seg = (Date.now() - new Date(iso).getTime()) / 1000;
    if (seg < 120) return "ahora";
    if (seg < 3600) return "hace " + Math.round(seg / 60) + " min";
    if (seg < 86400) return "hace " + Math.round(seg / 3600) + " h";
    var dias = Math.round(seg / 86400);
    if (dias === 1) return "ayer";
    if (dias < 30) return "hace " + dias + " días";
    return fechaCorta(new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(new Date(iso)));
  }

  function rangoFechas() {
    var hasta = hoyChile();
    if (estado.rango === "todo") return { desde: null, hasta: hasta };
    var n = parseInt(estado.rango, 10) || 30;
    return { desde: sumarDias(hasta, -(n - 1)), hasta: hasta };
  }

  function nombreCatalogo(id) {
    var cat = window.STORE_CATALOG || [];
    for (var i = 0; i < cat.length; i++) if (cat[i].id === id) return cat[i];
    return null;
  }

  function nombreSeccion(catalogo, seccion) {
    var c = nombreCatalogo(catalogo);
    var secs = (c && c.sections) || [];
    for (var i = 0; i < secs.length; i++) if (secs[i].id === seccion) return secs[i].title || seccion;
    return seccion;
  }

  function avatarHtml(u, clase) {
    var url = String(u.avatar || "");
    if (/^https:\/\/[a-z0-9.-]+\.googleusercontent\.com\//i.test(url)) {
      return '<img class="adm-avatar ' + (clase || "") + '" src="' + esc(url) + '" alt="" referrerpolicy="no-referrer" loading="lazy" />';
    }
    var ini = String(u.nombre || u.email || "?").trim().charAt(0).toUpperCase() || "?";
    return '<span class="adm-avatar adm-avatar-ini ' + (clase || "") + '" aria-hidden="true">' + esc(ini) + "</span>";
  }

  // Escala con números redondos para el eje.
  function escalaBonita(max) {
    if (!(max > 0)) return { max: 4, paso: 1 };
    var bruto = max / 4;
    var mag = Math.pow(10, Math.floor(Math.log(bruto) / Math.LN10));
    var paso = mag;
    [1, 2, 5, 10].some(function (f) { paso = f * mag; return paso >= bruto; });
    if (paso < 1) paso = max <= 4 ? 1 : paso;
    return { max: Math.ceil(max / paso) * paso, paso: paso };
  }

  // ---------- Supabase ----------

  function rpc(nombre, args) {
    return window.SB.client.rpc(nombre, args || {}).then(function (res) {
      if (res.error) throw errorDe(res.error);
      return res.data;
    });
  }

  function errorDe(e) {
    var code = (e && e.code) || "";
    var msg = (e && e.message) || "Error desconocido.";
    if (code === "PGRST202" || code === "42883" || /Could not find the function/i.test(msg)) {
      return new Error("Falta ejecutar supabase/admin.sql en Supabase (SQL Editor → New query → Run).");
    }
    if (code === "42501" || /No autorizado/i.test(msg)) {
      var err = new Error("Tu cuenta no tiene acceso a este panel.");
      err.sinPermiso = true;
      return err;
    }
    if (/Failed to fetch|NetworkError|network/i.test(msg)) return new Error("No se pudo conectar. Revisa tu conexión.");
    return new Error(msg);
  }

  // ---------- pantallas ----------

  function pintarCuenta() {
    var s = estado.sesion;
    if (!s || !s.user) {
      cuentaEl.innerHTML = "";
      return;
    }
    var meta = s.user.user_metadata || {};
    cuentaEl.innerHTML =
      avatarHtml({ avatar: meta.avatar_url || meta.picture, nombre: meta.full_name || s.user.email }, "sm") +
      '<span class="adm-cuenta-email">' + esc(s.user.email || "") + "</span>" +
      '<button class="btn ghost sm" id="adm-salir" type="button">Salir</button>';
  }

  function pantalla(html) {
    cerrarFicha();
    raiz.setAttribute("aria-busy", "false");
    raiz.innerHTML = html;
  }

  function pantallaLogin() {
    pantalla(
      '<section class="adm-puerta">' +
        '<img src="img/logo.png?v=1" alt="" width="56" height="56" />' +
        "<h1>Panel de administración</h1>" +
        "<p>Entra con la cuenta de Google autorizada para ver cómo usan Studappy.</p>" +
        '<button class="btn primary lg" id="adm-entrar" type="button">' + (window.GOOGLE_ICON || "") + "<span>Entrar con Google</span></button>" +
      "</section>"
    );
  }

  function pantallaSinPermiso() {
    var email = (estado.sesion && estado.sesion.user && estado.sesion.user.email) || "";
    pantalla(
      '<section class="adm-puerta">' +
        '<span class="adm-puerta-icono">' + ic("key", 26) + "</span>" +
        "<h1>Sin acceso</h1>" +
        "<p>La cuenta <strong>" + esc(email) + "</strong> no tiene acceso a este panel.</p>" +
        '<div class="adm-puerta-acciones"><button class="btn ghost" id="adm-salir2" type="button">Usar otra cuenta</button>' +
        '<a class="btn" href="/">Ir a Studappy</a></div>' +
      "</section>"
    );
  }

  function pantallaError(msg) {
    pantalla(
      '<section class="adm-puerta">' +
        '<span class="adm-puerta-icono">' + ic("settings", 26) + "</span>" +
        "<h1>No se pudo abrir el panel</h1>" +
        '<p class="adm-error-txt"></p>' +
        '<button class="btn" id="adm-reintentar" type="button">' + ic("refresh") + "<span>Reintentar</span></button>" +
      "</section>"
    );
    raiz.querySelector(".adm-error-txt").textContent = msg;
  }

  function segmentado(id, opciones, actual, etiqueta) {
    return '<div class="adm-seg" id="' + id + '" role="radiogroup" aria-label="' + esc(etiqueta) + '">' +
      opciones.map(function (o) {
        var sel = o.id === actual;
        return '<button type="button" role="radio" aria-checked="' + sel + '" data-valor="' + esc(o.id) + '"' + (sel ? ' class="sel"' : "") + ">" + esc(o.label) + "</button>";
      }).join("") + "</div>";
  }

  function tarjeta(id, titulo, subtitulo, extraCabecera, cuerpo) {
    return '<section class="adm-card" id="' + id + '">' +
      '<header class="adm-card-head"><div><h2>' + titulo + "</h2>" + (subtitulo ? '<p class="adm-card-sub">' + subtitulo + "</p>" : "") + "</div>" + (extraCabecera || "") + "</header>" +
      cuerpo + "</section>";
  }

  function pestanas() {
    var vistas = [
      { id: "uso", label: "Uso de la app", icono: '<span aria-hidden="true">' + ic("target", 15) + "</span>" },
      { id: "economia", label: "Misiones y puntos", icono: '<img class="px-ico" src="img/juego/moneda.svg?v=1" width="16" height="16" alt="" />' }
    ];
    return '<nav class="adm-vistas" role="tablist" aria-label="Vistas del panel">' + vistas.map(function (v) {
      var sel = v.id === estado.vista;
      return '<button type="button" role="tab" id="adm-tab-' + v.id + '" aria-selected="' + sel + '" aria-controls="adm-vista" data-vista="' + v.id + '"' + (sel ? ' class="sel"' : ' tabindex="-1"') + ">" + v.icono + "<span>" + v.label + "</span></button>";
    }).join("") + "</nav>";
  }

  function pantallaEconomia() {
    pantalla(
      '<section class="adm-head">' +
        '<div><span class="adm-kicker">Panel de administración</span><h1>Misiones y puntos</h1>' +
        '<p class="adm-sub">Comprueba que todo funcione: diagnóstico automático y herramientas para tu cuenta.</p></div>' +
      "</section>" +
      pestanas() +
      '<div id="adm-vista" role="tabpanel" aria-labelledby="adm-tab-economia"></div>'
    );
    var cont = document.getElementById("adm-vista");
    if (!window.AdminEconomia) {
      cont.innerHTML = '<div class="adm-aviso error" role="alert">No se pudo cargar js/admin-economia.js.</div>';
      return;
    }
    var u = estado.sesion && estado.sesion.user;
    window.AdminEconomia.montar(cont, { client: window.SB.client, esc: esc, num: num, ic: ic, fechaHora: fechaHora, email: u ? u.email : "" });
    // Regalar puntos por etiqueta (js/admin-regalos.js), arriba de todo.
    if (window.AdminRegalos) window.AdminRegalos.montar(cont, { client: window.SB.client, esc: esc, num: num, ic: ic, fechaHora: fechaHora });
  }

  function cambiarVista(vista) {
    if (vista === estado.vista) return;
    estado.vista = vista;
    guardar("adm-vista", vista);
    try { history.replaceState(null, "", location.pathname + location.search + (vista === "economia" ? "#economia" : "")); } catch (e) { /* sin historial */ }
    abrirVista();
    var tab = document.getElementById("adm-tab-" + vista);
    if (tab) tab.focus();
  }

  function abrirVista() {
    guardar("adm-vista", estado.vista);
    if (estado.vista === "economia") {
      pantallaEconomia();
      return;
    }
    pantallaPanel();
    if (estado.resumen) pintarTodo();
    else cargar();
  }

  function pantallaPanel() {
    pantalla(
      '<section class="adm-head">' +
        '<div><span class="adm-kicker">Panel de administración</span><h1>Cómo usan Studappy</h1>' +
        '<p class="adm-sub" id="adm-sub">&nbsp;</p></div>' +
      "</section>" +
      pestanas() +
      '<div class="adm-filtros">' +
        segmentado("adm-rango", [{ id: "7", label: "7 días" }, { id: "30", label: "30 días" }, { id: "90", label: "90 días" }, { id: "todo", label: "Todo" }], estado.rango, "Período") +
        '<label class="adm-check"><input type="checkbox" id="adm-incluirme"' + (estado.incluirme ? " checked" : "") + " /><span>Incluir cuentas admin</span></label>" +
        '<button class="btn ghost sm" id="adm-actualizar" type="button">' + ic("refresh", 15) + "<span>Actualizar</span></button>" +
      "</div>" +
      '<div class="adm-aviso" id="adm-aviso" role="status" hidden></div>' +
      '<div class="adm-pulso" id="adm-pulso"></div>' +
      '<div class="adm-kpis" id="adm-kpis"></div>' +
      tarjeta("card-actividad", "Actividad diaria", "Hora de Chile", segmentado("adm-metrica", Object.keys(METRICAS).map(function (k) { return { id: k, label: METRICAS[k].label }; }), estado.metrica, "Métrica"),
        '<div class="adm-grafico" id="adm-linea"></div><details class="adm-datos"><summary>Ver datos</summary><div id="adm-linea-tabla"></div></details>') +
      '<div class="adm-grid2">' +
        tarjeta("card-secciones", "¿Dónde pasan el tiempo?", "Tiempo activo por sección", "", '<div id="adm-secciones"></div><h3 class="adm-sub-titulo">Desde qué dispositivo</h3><div id="adm-dispositivos"></div>') +
        tarjeta("card-horario", "¿Cuándo entran?", "Minutos de uso según día y hora de inicio de la visita", "", '<div id="adm-horario"></div>') +
      "</div>" +
      '<div class="adm-grid2">' +
        tarjeta("card-embudo", "Usuarios nuevos: qué tan lejos llegan", "Personas que crearon su cuenta en el período", "", '<div id="adm-embudo"></div>') +
        tarjeta("card-mazos-nuevos", "Mazos nuevos", "Creados o agregados en el período", "", '<div id="adm-mazos-nuevos"></div>') +
      "</div>" +
      tarjeta("card-prueba", "Modo de prueba", "Cuentas de «Probar gratis» (sin registro) abiertas en el período", "", '<div id="adm-prueba"></div>') +
      tarjeta("card-top", "Mazos más estudiados", "Ordenados por respuestas en el período", "", '<div class="adm-tabla-wrap" id="adm-top"></div>') +
      tarjeta("card-usuarios", "Usuarios", "Haz clic en una persona para ver su ficha",
        '<label class="adm-buscar">' + ic("search", 15) + '<input id="adm-buscar" type="search" placeholder="Buscar por nombre, correo o etiqueta" autocomplete="off" /></label>',
        '<div class="adm-tabla-wrap" id="adm-usuarios"></div>')
    );
    var b = document.getElementById("adm-buscar");
    if (b) b.value = estado.busqueda;
  }

  // ---------- carga ----------

  function cargar() {
    var token = ++estado.pedido;
    var r = rangoFechas();
    var args = { p_desde: r.desde, p_hasta: r.hasta, p_incluir_admins: estado.incluirme };
    raiz.classList.add("adm-cargando");
    raiz.setAttribute("aria-busy", "true");
    var btn = document.getElementById("adm-actualizar");
    if (btn) btn.disabled = true;
    return Promise.all([rpc("admin_resumen", args), rpc("admin_usuarios", args)]).then(function (d) {
      if (token !== estado.pedido) return;
      estado.resumen = d[0] || null;
      estado.usuarios = Array.isArray(d[1]) ? d[1] : [];
      aviso("");
      pintarTodo();
    }, function (e) {
      if (token !== estado.pedido) return;
      if (e.sinPermiso) return pantallaSinPermiso();
      if (!estado.resumen) return pantallaError(e.message);
      aviso(e.message, true);
    }).then(function () {
      if (token !== estado.pedido) return;
      raiz.classList.remove("adm-cargando");
      raiz.setAttribute("aria-busy", "false");
      var b2 = document.getElementById("adm-actualizar");
      if (b2) b2.disabled = false;
    });
  }

  function aviso(msg, error) {
    var el = document.getElementById("adm-aviso");
    if (!el) return;
    el.textContent = msg || "";
    el.hidden = !msg;
    el.classList.toggle("error", !!error);
  }

  function pintarTodo() {
    var R = estado.resumen;
    if (!R) return;
    pintarSub(R);
    pintarPulso(R);
    pintarKpis(R);
    pintarActividad(R);
    pintarSecciones(R);
    pintarHorario(R);
    pintarEmbudo(R);
    pintarPrueba(R);
    pintarMazosNuevos(R);
    pintarTop(R);
    pintarUsuarios();
  }

  function pintarSub(R) {
    var el = document.getElementById("adm-sub");
    if (!el) return;
    var txt = fechaCorta(R.desde) + " – " + fechaCorta(R.hasta) + " · actualizado " + fechaHora(R.generado).split(", ")[1];
    el.textContent = txt;
    if (!R.desde_registro) {
      aviso("El tiempo de uso y las sesiones de estudio se empiezan a registrar desde que publiques esta versión. Mazos, avance y usuarios ya se ven completos.");
    } else if (String(R.desde_registro).slice(0, 10) > String(R.desde)) {
      aviso("El tiempo de uso y las sesiones de estudio se registran desde el " + fechaCorta(new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(new Date(R.desde_registro))) + ". Antes de esa fecha solo hay mazos, avance y registros de usuarios.");
    }
  }

  function pintarPulso(R) {
    var p = R.pulso || {};
    var el = document.getElementById("adm-pulso");
    if (!el) return;
    el.innerHTML =
      '<span class="adm-pulso-item adm-pulso-ahora"><span class="adm-punto" aria-hidden="true"></span><strong>' + num(p.ahora) + "</strong> en línea ahora</span>" +
      '<span class="adm-pulso-item"><strong>' + num(p.hoy) + "</strong> hoy</span>" +
      '<span class="adm-pulso-item"><strong>' + num(p.d7) + "</strong> en 7 días</span>" +
      '<span class="adm-pulso-item"><strong>' + num(p.d30) + "</strong> en 30 días</span>";
  }

  function pintarKpis(R) {
    var u = R.usuarios || {}, t = R.tiempo || {}, e = R.estudio || {}, m = R.mazos || {};
    var tiles = [
      { label: "Usuarios activos", valor: num(u.activos), detalle: "de " + num(u.total) + " registrados · " + num(u.nuevos) + " nuevos", hero: true },
      { label: "Tiempo por usuario activo", valor: dur(u.activos ? t.segundos / u.activos : 0), detalle: "Total " + dur(t.segundos) + " · visita típica " + dur(t.mediana_visita) },
      { label: "Sesiones de estudio", valor: num(e.sesiones), detalle: num(e.completadas) + " terminadas · " + num(e.usuarios) + (e.usuarios === 1 ? " persona" : " personas") },
      { label: "Respuestas", valor: num(e.respuestas), detalle: pct(e.sabe, e.respuestas) + " «Lo sé» · " + dur(e.segundos) + " estudiando" },
      { label: "Mazos nuevos", valor: num((m.propios || 0) + (m.ia || 0) + (m.tienda || 0)), detalle: num(m.propios) + " a mano · " + num(m.ia) + " con IA · " + num(m.tienda) + " de la tienda" },
      { label: "Usos del generador", valor: num(m.generador), detalle: "Con tu API key (las keys propias no se cuentan)" }
    ];
    document.getElementById("adm-kpis").innerHTML = tiles.map(function (t2) {
      return '<div class="adm-kpi' + (t2.hero ? " hero" : "") + '"><span class="adm-kpi-label">' + esc(t2.label) + '</span><strong class="adm-kpi-valor">' + esc(t2.valor) + '</strong><span class="adm-kpi-detalle">' + esc(t2.detalle) + "</span></div>";
    }).join("");
  }

  // ---------- gráfico de línea ----------

  function graficoLinea(cont, serie, opt) {
    var ancho = Math.max(cont.clientWidth || 0, 260);
    var alto = opt.alto || 240;
    var m = { t: 18, r: 20, b: 28, l: 46 };
    var w = ancho - m.l - m.r;
    var h = alto - m.t - m.b;
    var n = serie.length;
    var valores = serie.map(opt.valor);
    var max = Math.max.apply(null, valores.concat([0]));
    var e = escalaBonita(max);
    var X = function (i) { return m.l + (n <= 1 ? w / 2 : (i * w) / (n - 1)); };
    var Y = function (v) { return m.t + h - (v / e.max) * h; };
    var partes = [];

    for (var v = 0; v <= e.max + 1e-9; v += e.paso) {
      var y = Y(v);
      partes.push('<line class="adm-eje-linea" x1="' + m.l + '" x2="' + (ancho - m.r) + '" y1="' + y.toFixed(1) + '" y2="' + y.toFixed(1) + '"/>');
      partes.push('<text class="adm-eje-txt" x="' + (m.l - 8) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="end">' + esc(opt.eje(v)) + "</text>");
    }
    var etiquetas = Math.max(2, Math.min(6, Math.floor(w / 90)));
    var vistos = {};
    for (var k = 0; k < etiquetas; k++) {
      var i = n <= 1 ? 0 : Math.round((k * (n - 1)) / (etiquetas - 1));
      if (vistos[i]) continue;
      vistos[i] = 1;
      var ancla = i === 0 ? "start" : i === n - 1 ? "end" : "middle";
      partes.push('<text class="adm-eje-txt" x="' + X(i).toFixed(1) + '" y="' + (alto - 8) + '" text-anchor="' + ancla + '">' + esc(fechaCorta(serie[i].dia)) + "</text>");
    }
    if (n) {
      var d = valores.map(function (val, j) { return (j ? "L" : "M") + X(j).toFixed(1) + " " + Y(val).toFixed(1); }).join(" ");
      var base = (m.t + h).toFixed(1);
      partes.push('<path class="adm-area" d="' + d + " L" + X(n - 1).toFixed(1) + " " + base + " L" + X(0).toFixed(1) + " " + base + ' Z"/>');
      partes.push('<path class="adm-linea" d="' + d + '"/>');
      var ult = valores[n - 1];
      partes.push('<circle class="adm-punto-fin" cx="' + X(n - 1).toFixed(1) + '" cy="' + Y(ult).toFixed(1) + '" r="4"/>');
    }
    partes.push('<g class="adm-cruz" visibility="hidden"><line class="adm-cruz-linea" y1="' + m.t + '" y2="' + (m.t + h) + '"/><circle class="adm-cruz-punto" r="4.5"/></g>');
    partes.push('<rect class="adm-capa" x="' + m.l + '" y="' + m.t + '" width="' + Math.max(w, 1) + '" height="' + h + '" fill="transparent"/>');

    cont.innerHTML =
      '<svg class="adm-svg" width="' + ancho + '" height="' + alto + '" viewBox="0 0 ' + ancho + " " + alto + '" role="img" tabindex="0" aria-label="' +
      esc(opt.nombre + ": " + (n ? opt.fmt(valores[n - 1]) + " el último día" : "sin datos")) + '">' + partes.join("") + "</svg>" +
      (max <= 0 ? '<p class="adm-vacio-sobre">Sin actividad en este período</p>' : "");

    var svg = cont.querySelector("svg");
    var cruz = svg.querySelector(".adm-cruz");
    var linea = svg.querySelector(".adm-cruz-linea");
    var punto = svg.querySelector(".adm-cruz-punto");
    var actual = n - 1;

    function mostrar(i, ev) {
      if (!n) return;
      actual = Math.max(0, Math.min(n - 1, i));
      var x = X(actual);
      linea.setAttribute("x1", x);
      linea.setAttribute("x2", x);
      punto.setAttribute("cx", x);
      punto.setAttribute("cy", Y(valores[actual]));
      cruz.setAttribute("visibility", "visible");
      var filas = [{ valor: opt.fmt(valores[actual]), label: opt.nombre, color: true }].concat(opt.extra ? opt.extra(serie[actual]) : []);
      var r = svg.getBoundingClientRect();
      mostrarTip(diaSemana(serie[actual].dia) + " " + fechaCorta(serie[actual].dia), filas, ev ? ev.clientX : r.left + x, ev ? ev.clientY : r.top + Y(valores[actual]));
    }
    function ocultar() {
      cruz.setAttribute("visibility", "hidden");
      ocultarTip();
    }
    svg.addEventListener("pointermove", function (ev) {
      var r = svg.getBoundingClientRect();
      var px = ((ev.clientX - r.left) * ancho) / r.width;
      if (px < m.l - 10 || px > ancho - m.r + 10) return ocultar();
      mostrar(n <= 1 ? 0 : Math.round(((px - m.l) / w) * (n - 1)), ev);
    });
    svg.addEventListener("pointerleave", ocultar);
    svg.addEventListener("focus", function () { mostrar(actual); });
    svg.addEventListener("blur", ocultar);
    svg.addEventListener("keydown", function (ev) {
      if (ev.key === "ArrowLeft" || ev.key === "ArrowRight") {
        ev.preventDefault();
        mostrar(actual + (ev.key === "ArrowLeft" ? -1 : 1));
      } else if (ev.key === "Home" || ev.key === "End") {
        ev.preventDefault();
        mostrar(ev.key === "Home" ? 0 : n - 1);
      }
    });
  }

  // ---------- tooltip ----------

  function mostrarTip(titulo, filas, x, y) {
    tip.textContent = "";
    var t = document.createElement("div");
    t.className = "adm-tip-titulo";
    t.textContent = titulo;
    tip.appendChild(t);
    filas.forEach(function (f) {
      var fila = document.createElement("div");
      fila.className = "adm-tip-fila";
      if (f.color) {
        var clave = document.createElement("span");
        clave.className = "adm-tip-clave";
        if (typeof f.color === "string") clave.style.background = f.color;
        fila.appendChild(clave);
      }
      var val = document.createElement("strong");
      val.textContent = f.valor;
      var lab = document.createElement("span");
      lab.textContent = f.label;
      fila.appendChild(val);
      fila.appendChild(lab);
      tip.appendChild(fila);
    });
    tip.hidden = false;
    var ancho = tip.offsetWidth;
    var alto = tip.offsetHeight;
    var left = x + 14;
    var top = y + 14;
    if (left + ancho > window.innerWidth - 8) left = x - ancho - 14;
    if (top + alto > window.innerHeight - 8) top = y - alto - 14;
    tip.style.left = Math.max(8, left) + "px";
    tip.style.top = Math.max(8, top) + "px";
  }

  function ocultarTip() {
    tip.hidden = true;
  }

  // Marcas con data-tip-t (título) y data-tip-v / data-tip-l (valor y etiqueta,
  // separados por "|" si hay varias filas).
  function tipDeElemento(el, ev) {
    var vals = String(el.getAttribute("data-tip-v") || "").split("|");
    var labs = String(el.getAttribute("data-tip-l") || "").split("|");
    var filas = vals.map(function (v, i) { return { valor: v, label: labs[i] || "" }; });
    var r = el.getBoundingClientRect();
    mostrarTip(el.getAttribute("data-tip-t") || "", filas, ev && ev.clientX ? ev.clientX : r.left + r.width / 2, ev && ev.clientY ? ev.clientY : r.top);
  }

  document.addEventListener("pointermove", function (ev) {
    var el = ev.target.closest && ev.target.closest("[data-tip-v]");
    if (el) tipDeElemento(el, ev);
    else if (!ev.target.closest || !ev.target.closest(".adm-svg")) ocultarTip();
  });
  document.addEventListener("focusin", function (ev) {
    var el = ev.target.closest && ev.target.closest("[data-tip-v]");
    if (el) tipDeElemento(el);
  });
  document.addEventListener("focusout", function (ev) {
    if (ev.target.closest && ev.target.closest("[data-tip-v]")) ocultarTip();
  });
  window.addEventListener("scroll", ocultarTip, { passive: true });

  // ---------- secciones ----------

  function pintarActividad(R) {
    var met = METRICAS[estado.metrica];
    var serie = R.serie || [];
    var cont = document.getElementById("adm-linea");
    graficoLinea(cont, serie, {
      nombre: met.label,
      valor: met.valor,
      fmt: met.fmt,
      eje: function (v) { return estado.metrica === "minutos" ? num(v) : num(v); },
      extra: function (d) {
        return Object.keys(METRICAS).filter(function (k) { return k !== estado.metrica; }).map(function (k) {
          return { valor: METRICAS[k].fmt(METRICAS[k].valor(d)), label: METRICAS[k].label };
        });
      }
    });
    var filas = serie.slice().reverse().map(function (d) {
      return "<tr><td>" + esc(diaSemana(d.dia) + " " + fechaCorta(d.dia)) + "</td><td>" + num(d.activos) + "</td><td>" + num(d.segundos / 60) + "</td><td>" + num(d.respuestas) + "</td><td>" + num(d.sesiones) + "</td><td>" + num(d.nuevos) + "</td></tr>";
    }).join("");
    document.getElementById("adm-linea-tabla").innerHTML =
      '<div class="adm-tabla-wrap"><table class="adm-tabla compacta"><thead><tr><th>Día</th><th>Activos</th><th>Minutos</th><th>Respuestas</th><th>Sesiones</th><th>Nuevos</th></tr></thead><tbody>' + filas + "</tbody></table></div>";
  }

  function barrasH(items, opciones) {
    var max = Math.max.apply(null, items.map(function (it) { return it.valor; }).concat([0]));
    return '<div class="adm-barras">' + items.map(function (it) {
      var ancho = max > 0 ? Math.max((it.valor / max) * 100, it.valor > 0 ? 1.5 : 0) : 0;
      return '<div class="adm-barra" tabindex="0" data-tip-t="' + esc(it.label) + '" data-tip-v="' + esc(it.tipV) + '" data-tip-l="' + esc(it.tipL) + '">' +
        '<span class="adm-barra-label">' + esc(it.label) + "</span>" +
        '<span class="adm-barra-pista"><span class="adm-barra-fill" style="width:' + ancho.toFixed(2) + '%"></span></span>' +
        '<span class="adm-barra-valor">' + esc(it.texto) + (it.sub ? ' <small>' + esc(it.sub) + "</small>" : "") + "</span>" +
      "</div>";
    }).join("") + "</div>" + (opciones && opciones.vacio && max <= 0 ? '<p class="adm-vacio">' + esc(opciones.vacio) + "</p>" : "");
  }

  function pintarSecciones(R) {
    var secc = R.secciones || {};
    var total = SECCIONES.reduce(function (s, x) { return s + (Number(secc[x.id]) || 0); }, 0);
    var items = SECCIONES.map(function (s) {
      var v = Number(secc[s.id]) || 0;
      return { label: s.label, valor: v, texto: dur(v), sub: pct(v, total), tipV: dur(v) + "|" + pct(v, total), tipL: "de tiempo activo|del total" };
    }).sort(function (a, b) { return b.valor - a.valor; });
    document.getElementById("adm-secciones").innerHTML = barrasH(items, { vacio: "Todavía no hay tiempo registrado en este período." });

    var disp = R.dispositivos || [];
    var totalSeg = disp.reduce(function (s, d) { return s + (Number(d.segundos) || 0); }, 0);
    var orden = ["movil", "escritorio", "tablet"];
    var colores = { movil: "var(--viz-1)", escritorio: "var(--viz-2)", tablet: "var(--viz-3)" };
    var porId = {};
    disp.forEach(function (d) { porId[d.dispositivo] = d; });
    var segmentos = orden.filter(function (k) { return porId[k] && porId[k].segundos > 0; }).map(function (k) {
      var d = porId[k];
      var p = totalSeg ? (d.segundos / totalSeg) * 100 : 0;
      return '<span class="adm-seg-barra" tabindex="0" style="width:' + p.toFixed(2) + "%;background:" + colores[k] + '" data-tip-t="' + esc(DISPOSITIVOS[k]) + '" data-tip-v="' + esc(Math.round(p) + " %|" + dur(d.segundos) + "|" + num(d.usuarios)) + '" data-tip-l="del tiempo|de uso|' + (d.usuarios === 1 ? "persona" : "personas") + '"></span>';
    }).join("");
    var leyenda = orden.filter(function (k) { return porId[k]; }).map(function (k) {
      var d = porId[k];
      return '<li><span class="adm-ley-clave" style="background:' + colores[k] + '"></span><span>' + esc(DISPOSITIVOS[k]) + "</span><strong>" + pct(d.segundos, totalSeg) + "</strong><small>" + num(d.usuarios) + (d.usuarios === 1 ? " persona" : " personas") + "</small></li>";
    }).join("");
    document.getElementById("adm-dispositivos").innerHTML = totalSeg
      ? '<div class="adm-apilada">' + segmentos + '</div><ul class="adm-leyenda">' + leyenda + "</ul>"
      : '<p class="adm-vacio">Sin datos de dispositivos todavía.</p>';
  }

  var RAMPA = ["#104281", "#1c5cab", "#2a78d6", "#5598e7", "#86b6ef", "#b7d3f6"];

  function pintarHorario(R) {
    var mapa = {};
    var max = 0;
    (R.horas || []).forEach(function (h) {
      mapa[h.dow + "-" + h.hora] = h;
      max = Math.max(max, Number(h.segundos) || 0);
    });
    var html = '<div class="adm-calor" role="table" aria-label="Minutos de uso por día y hora">';
    html += '<div class="adm-calor-fila adm-calor-horas" role="row"><span role="columnheader"></span>';
    for (var hh = 0; hh < 24; hh++) html += '<span role="columnheader">' + (hh % 6 === 0 ? hh + "h" : "") + "</span>";
    html += "</div>";
    for (var dow = 1; dow <= 7; dow++) {
      html += '<div class="adm-calor-fila" role="row"><span class="adm-calor-dia" role="rowheader">' + DIAS[dow - 1] + "</span>";
      for (var h2 = 0; h2 < 24; h2++) {
        var c = mapa[dow + "-" + h2];
        var seg = c ? Number(c.segundos) || 0 : 0;
        var paso = seg > 0 && max > 0 ? Math.min(RAMPA.length - 1, Math.floor((seg / max) * RAMPA.length - 1e-9)) : -1;
        var etiqueta = DIAS[dow - 1] + " " + h2 + ":00 – " + (h2 + 1) + ":00";
        html += '<span class="adm-celda" role="cell" tabindex="-1"' + (paso >= 0 ? ' style="background:' + RAMPA[Math.max(0, paso)] + '"' : "") +
          ' data-tip-t="' + esc(etiqueta) + '" data-tip-v="' + esc(dur(seg) + "|" + num(c ? c.visitas : 0)) + '" data-tip-l="de uso|' + ((c && c.visitas === 1) ? "visita" : "visitas") + '"></span>';
      }
      html += "</div>";
    }
    html += "</div>";
    html += '<div class="adm-calor-escala" aria-hidden="true"><span>Menos</span>' + RAMPA.map(function (c2) { return '<i style="background:' + c2 + '"></i>'; }).join("") + "<span>Más</span></div>";
    if (!max) html += '<p class="adm-vacio">Todavía no hay visitas registradas en este período.</p>';
    document.getElementById("adm-horario").innerHTML = html;
  }

  function pintarEmbudo(R) {
    var e = R.embudo || {};
    var base = Number(e.registrados) || 0;
    var pasos = [
      { label: "Crearon su cuenta", valor: base },
      { label: "Tienen al menos un mazo", valor: Number(e.con_mazo) || 0 },
      { label: "Estudiaron al menos una vez", valor: Number(e.estudiaron) || 0 },
      { label: "Volvieron otro día", valor: Number(e.volvieron) || 0 }
    ];
    var items = pasos.map(function (p, i) {
      var previo = i ? pasos[i - 1].valor : 0;
      return {
        label: p.label,
        valor: p.valor,
        texto: num(p.valor),
        sub: i ? pct(p.valor, base) : "",
        tipV: num(p.valor) + "|" + pct(p.valor, base) + (i ? "|" + pct(p.valor, previo) : ""),
        tipL: "personas|del total" + (i ? "|del paso anterior" : "")
      };
    });
    document.getElementById("adm-embudo").innerHTML = base
      ? barrasH(items) + '<p class="adm-nota">«Volvieron» cuenta días distintos con tiempo o estudio registrado.</p>'
      : '<p class="adm-vacio">Nadie creó su cuenta en este período.</p>';
  }

  // Modo de prueba: cuántos lo abren, qué hacen y cuántos crean su cuenta.
  function pintarPrueba(R) {
    var el = document.getElementById("adm-prueba");
    if (!el) return;
    var p = R.prueba;
    if (!p) {
      el.innerHTML = '<p class="adm-vacio">Ejecuta la versión nueva de <code>supabase/admin.sql</code> para ver el modo de prueba.</p>';
      return;
    }
    var base = Number(p.cuentas) || 0;
    if (!base) {
      el.innerHTML = '<p class="adm-vacio">Nadie abrió el modo de prueba en este período.</p>';
      return;
    }
    var pasos = [
      { label: "Abrieron la prueba", valor: base },
      { label: "Crearon un mazo", valor: Number(p.con_mazo) || 0 },
      { label: "Usaron la IA", valor: Number(p.con_ia) || 0 },
      { label: "Estudiaron", valor: Number(p.estudiaron) || 0 },
      { label: "Crearon su cuenta", valor: Number(p.se_registraron) || 0 }
    ];
    var items = pasos.map(function (paso, i) {
      return {
        label: paso.label,
        valor: paso.valor,
        texto: num(paso.valor),
        sub: i ? pct(paso.valor, base) : "",
        tipV: num(paso.valor) + "|" + pct(paso.valor, base),
        tipL: "personas|de las pruebas"
      };
    });
    el.innerHTML = barrasH(items) +
      '<p class="adm-nota">' + num(p.importaron) + (Number(p.importaron) === 1 ? " trajo sus mazos" : " trajeron sus mazos") +
      " a su cuenta · " + dur(p.segundos) + " de uso en total. Las cuentas de prueba no cuentan en los usuarios de arriba.</p>";
  }

  function pintarMazosNuevos(R) {
    var m = R.mazos || {};
    var items = [
      { label: "Creados a mano", valor: m.propios || 0, total: m.total_propios || 0 },
      { label: "Generados con IA", valor: m.ia || 0, total: m.total_ia || 0 },
      { label: "Agregados de la tienda", valor: m.tienda || 0, total: m.total_tienda || 0 }
    ].map(function (it) {
      return { label: it.label, valor: it.valor, texto: num(it.valor), sub: "de " + num(it.total) + " en total", tipV: num(it.valor) + "|" + num(it.total), tipL: "en el período|en total" };
    });
    var tienda = (R.tienda || []).map(function (t) {
      var cat = nombreCatalogo(t.catalog_id);
      return "<li><span>" + esc((cat && cat.title) || t.titulo || t.catalog_id) + "</span><strong>" + num(t.adquisiciones) + "</strong></li>";
    }).join("");
    document.getElementById("adm-mazos-nuevos").innerHTML = barrasH(items) +
      (tienda ? '<h3 class="adm-sub-titulo">Más agregados de la tienda</h3><ul class="adm-lista-simple">' + tienda + "</ul>" : "");
  }

  function chipOrigen(origen) {
    return '<span class="adm-chip adm-chip-' + esc(origen) + '">' + esc(ORIGEN[origen] || origen) + "</span>";
  }

  function pintarTop(R) {
    var top = R.top_mazos || [];
    var max = Math.max.apply(null, top.map(function (t) { return Number(t.respuestas) || 0; }).concat([0]));
    var el = document.getElementById("adm-top");
    if (!top.length) {
      el.innerHTML = '<p class="adm-vacio">Todavía no hay sesiones de estudio registradas en este período.</p>';
      return;
    }
    el.innerHTML = '<table class="adm-tabla adm-tabla-top"><thead><tr><th scope="col">Mazo</th><th scope="col" class="num">Personas</th><th scope="col" class="num">Sesiones</th><th scope="col">Respuestas</th><th scope="col" class="num">«Lo sé»</th><th scope="col" class="num">Tiempo</th></tr></thead><tbody>' +
      top.map(function (t) {
        var cat = t.catalogo ? nombreCatalogo(t.catalogo) : null;
        var nombre = (cat && cat.title) || t.nombre || "Mazo sin nombre";
        var ancho = max ? (t.respuestas / max) * 100 : 0;
        return '<tr><td class="adm-td-mazo"><span class="adm-mazo-nombre">' + esc(nombre) + "</span> " + chipOrigen(t.origen) + (t.autor ? '<small class="adm-bajo">de ' + esc(t.autor) + "</small>" : "") + "</td>" +
          '<td class="num" data-l="Personas">' + num(t.usuarios) + '</td><td class="num" data-l="Sesiones">' + num(t.sesiones) + "</td>" +
          '<td data-l="Respuestas"><span class="adm-celda-barra"><span class="adm-mini-barra"><span style="width:' + ancho.toFixed(1) + '%"></span></span><span class="num">' + num(t.respuestas) + "</span></span></td>" +
          '<td class="num" data-l="«Lo sé»">' + pct(t.sabe, t.respuestas) + '</td><td class="num" data-l="Tiempo">' + dur(t.segundos) + "</td></tr>";
      }).join("") + "</tbody></table>";
  }

  // ---------- usuarios ----------

  var COLUMNAS = [
    { id: "nombre", label: "Usuario", valor: function (u) { return String(u.nombre || u.email || "").toLowerCase(); } },
    { id: "ultimo", label: "Último acceso", valor: function (u) { return u.ultimo ? new Date(u.ultimo).getTime() : 0; } },
    { id: "dias", label: "Días activos", num: true, valor: function (u) { return u.dias; } },
    { id: "segundos", label: "Tiempo", num: true, valor: function (u) { return u.segundos; } },
    { id: "mazos", label: "Mazos", num: true, valor: function (u) { return u.propios + u.ia + u.tienda; } },
    { id: "dominadas", label: "Dominadas", valor: function (u) { return u.tarjetas ? u.dominadas / u.tarjetas : 0; } },
    { id: "respuestas", label: "Respuestas", num: true, valor: function (u) { return u.respuestas; } },
    { id: "sabe", label: "«Lo sé»", num: true, valor: function (u) { return u.respuestas ? u.sabe / u.respuestas : -1; } }
  ];

  function pintarUsuarios() {
    var el = document.getElementById("adm-usuarios");
    if (!el) return;
    var lista = (estado.usuarios || []).slice();
    var q = estado.busqueda.trim().toLowerCase();
    if (q) lista = lista.filter(function (u) { return (String(u.nombre || "") + " " + String(u.email || "") + " " + String(u.etiqueta || "")).toLowerCase().indexOf(q) !== -1; });
    var col = COLUMNAS.filter(function (c) { return c.id === estado.orden.col; })[0] || COLUMNAS[1];
    lista.sort(function (a, b) {
      var va = col.valor(a), vb = col.valor(b);
      if (va < vb) return -1 * estado.orden.dir;
      if (va > vb) return 1 * estado.orden.dir;
      return 0;
    });
    if (!lista.length) {
      el.innerHTML = '<p class="adm-vacio">' + (q ? "Nadie coincide con la búsqueda." : "Todavía no hay usuarios.") + "</p>";
      return;
    }
    var visibles = lista.slice(0, estado.limite);
    el.innerHTML = '<table class="adm-tabla adm-tabla-usuarios"><thead><tr>' +
      COLUMNAS.map(function (c) {
        var activa = c.id === estado.orden.col;
        return '<th scope="col"' + (c.num ? ' class="num"' : "") + ' aria-sort="' + (activa ? (estado.orden.dir > 0 ? "ascending" : "descending") : "none") + '">' +
          '<button type="button" class="adm-orden" data-col="' + c.id + '">' + esc(c.label) + (activa ? '<span aria-hidden="true">' + (estado.orden.dir > 0 ? " ↑" : " ↓") + "</span>" : "") + "</button></th>";
      }).join("") + "</tr></thead><tbody>" +
      visibles.map(function (u) {
        var mazos = u.propios + u.ia + u.tienda;
        var dom = u.tarjetas ? u.dominadas / u.tarjetas : 0;
        return '<tr class="adm-fila" tabindex="0" data-uid="' + esc(u.id) + '" aria-label="Ver ficha de ' + esc(u.nombre) + '">' +
          '<td><span class="adm-usuario">' + avatarHtml(u) + '<span class="adm-usuario-txt"><strong>' + esc(u.nombre) + (u.admin ? ' <span class="adm-chip">admin</span>' : "") + (u.de_prueba ? ' <span class="adm-chip adm-chip-prueba" title="Creó su cuenta después de usar «Probar gratis»">vino de prueba</span>' : "") + "</strong><small>" + esc(u.email) + "</small>" + (u.etiqueta ? '<small class="adm-etq">' + esc(u.etiqueta) + "</small>" : "") + "</span></span></td>" +
          '<td class="adm-td-ultimo">' + esc(hace(u.ultimo)) + '<small class="adm-bajo">desde ' + esc(fechaCorta(new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(new Date(u.creado)))) + "</small></td>" +
          '<td class="num" data-l="Días activos">' + num(u.dias) + '</td><td class="num" data-l="Tiempo">' + dur(u.segundos) + "</td>" +
          '<td class="num" data-l="Mazos">' + num(mazos) + "</td>" +
          '<td data-l="Dominadas"><span class="adm-celda-barra"><span class="adm-mini-barra"><span style="width:' + (dom * 100).toFixed(1) + '%"></span></span><span class="num">' + num(u.dominadas) + " / " + num(u.tarjetas) + "</span></span></td>" +
          '<td class="num" data-l="Respuestas">' + num(u.respuestas) + '</td><td class="num" data-l="«Lo sé»">' + pct(u.sabe, u.respuestas) + "</td></tr>";
      }).join("") + "</tbody></table>" +
      (lista.length > visibles.length ? '<div class="adm-mas"><button class="btn ghost sm" id="adm-mas" type="button">Mostrar ' + Math.min(50, lista.length - visibles.length) + " más (" + num(lista.length - visibles.length) + " restantes)</button></div>" : "") +
      '<p class="adm-nota">' + num(lista.length) + (lista.length === 1 ? " persona" : " personas") + ". Tiempo, días y respuestas son del período; mazos y avance son actuales.</p>";
  }

  // ---------- ficha de usuario ----------

  function abrirFicha(uid) {
    var u = (estado.usuarios || []).filter(function (x) { return x.id === uid; })[0];
    cerrarFicha(true);
    estado.fichaUid = uid;
    var fondo = document.createElement("div");
    fondo.className = "adm-ficha-fondo";
    fondo.id = "adm-ficha";
    fondo.innerHTML =
      '<aside class="adm-ficha" role="dialog" aria-modal="true" aria-labelledby="adm-ficha-titulo">' +
        '<header class="adm-ficha-head">' +
          (u ? avatarHtml(u, "lg") : "") +
          '<div class="adm-ficha-nombre"><h2 id="adm-ficha-titulo">' + esc(u ? u.nombre : "Usuario") + "</h2><p>" + esc(u ? u.email : "") + "</p></div>" +
          '<button class="icon-btn adm-cerrar" id="adm-ficha-cerrar" type="button" aria-label="Cerrar">' + ic("x", 18) + "</button>" +
        "</header>" +
        '<div class="adm-ficha-cuerpo" id="adm-ficha-cuerpo"><p class="adm-espera">Cargando ficha…</p></div>' +
      "</aside>";
    document.body.appendChild(fondo);
    document.body.classList.add("adm-sin-scroll");
    requestAnimationFrame(function () { fondo.classList.add("abierta"); });
    var cerrar = document.getElementById("adm-ficha-cerrar");
    if (cerrar) cerrar.focus();
    var token = ++estado.fichaPedido;
    var r = rangoFechas();
    rpc("admin_usuario", { p_user: uid, p_desde: r.desde, p_hasta: r.hasta }).then(function (f) {
      if (token !== estado.fichaPedido || !document.getElementById("adm-ficha")) return;
      pintarFicha(f);
    }, function (e) {
      if (token !== estado.fichaPedido) return;
      var cuerpo = document.getElementById("adm-ficha-cuerpo");
      if (cuerpo) {
        cuerpo.innerHTML = '<p class="adm-aviso error"></p>';
        cuerpo.firstChild.textContent = e.message;
      }
    });
  }

  function cerrarFicha(sinFoco) {
    var f = document.getElementById("adm-ficha");
    var uid = estado.fichaUid;
    estado.fichaUid = null;
    estado.fichaPedido++;
    if (!f) return;
    f.parentNode.removeChild(f);
    document.body.classList.remove("adm-sin-scroll");
    ocultarTip();
    if (!sinFoco && uid) {
      var fila = document.querySelector('.adm-fila[data-uid="' + uid.replace(/"/g, "") + '"]');
      if (fila) fila.focus();
    }
  }

  function miniKpi(label, valor, detalle) {
    return '<div class="adm-kpi mini"><span class="adm-kpi-label">' + esc(label) + '</span><strong class="adm-kpi-valor">' + esc(valor) + "</strong>" + (detalle ? '<span class="adm-kpi-detalle">' + esc(detalle) + "</span>" : "") + "</div>";
  }

  function pintarFicha(f) {
    var cuerpo = document.getElementById("adm-ficha-cuerpo");
    if (!cuerpo || !f) return;
    var p = f.perfil || {};
    var per = f.periodo || {};
    var tot = f.total || {};
    var secc = f.secciones || {};
    var disp = (f.dispositivos || []).map(function (d) { return DISPOSITIVOS[d.dispositivo] + " " + dur(d.segundos); }).join(" · ");
    var seccTxt = SECCIONES.filter(function (s) { return secc[s.id] > 0; }).sort(function (a, b) { return secc[b.id] - secc[a.id]; })
      .map(function (s) { return s.label + " " + dur(secc[s.id]); }).join(" · ");

    var mazos = (f.mazos || []).map(function (m) {
      var origen = m.tipo === "tienda" ? "tienda" : m.ia ? "ia" : "propio";
      var cat = m.catalogo ? nombreCatalogo(m.catalogo) : null;
      var total = Number(m.tarjetas) || 0;
      var seg = function (v, color, txt) {
        var w = total ? (v / total) * 100 : 0;
        return w > 0 ? '<span style="width:' + w.toFixed(2) + "%;background:" + color + '" title="' + esc(txt) + '"></span>' : "";
      };
      return '<li class="adm-mazo">' +
        '<div class="adm-mazo-top"><span class="adm-mazo-color" style="background:' + esc(/^#[0-9a-f]{3,8}$/i.test(m.color || "") ? m.color : "#3987e5") + '"></span>' +
          '<strong class="adm-mazo-nombre">' + esc((cat && cat.title) || m.nombre || "Mazo sin nombre") + "</strong>" + chipOrigen(origen) +
          '<span class="adm-mazo-tarjetas">' + num(total) + (total === 1 ? " tarjeta" : " tarjetas") + "</span></div>" +
        '<div class="adm-avance" role="img" aria-label="' + esc(num(m.dominadas) + " dominadas, " + num(m.no_sabe) + " no sabe, " + num(m.pendientes) + " pendientes de " + num(total)) + '">' +
          seg(m.dominadas, "var(--viz-1)", num(m.dominadas) + " «Lo sé»") + seg(m.no_sabe, "var(--viz-2)", num(m.no_sabe) + " «No lo sé»") + seg(m.pendientes, "var(--viz-3)", num(m.pendientes) + " pendientes") +
        "</div>" +
        '<p class="adm-mazo-meta">' + esc(num(m.dominadas) + " de " + num(total) + " dominadas · " + num(m.sesiones) + (m.sesiones === 1 ? " sesión" : " sesiones") + " · " + num(m.respuestas) + " respuestas · " +
          (m.ultimo_estudio ? "estudiado " + hace(m.ultimo_estudio) : (m.tipo === "tienda" ? "agregado " : "creado ") + hace(m.creado))) + "</p>" +
      "</li>";
    }).join("");

    var sesiones = (f.estudio || []).map(function (s) {
      var cat = s.catalogo ? nombreCatalogo(s.catalogo) : null;
      var nombre = (cat && cat.title) || s.mazo_nombre || "Mazo";
      var sub = s.seccion ? nombreSeccion(s.catalogo, s.seccion) : "";
      return "<tr><td>" + esc(fechaHora(s.inicio)) + "</td><td>" + esc(nombre) + (sub ? '<small class="adm-bajo">' + esc(sub) + "</small>" : "") + (s.filtro === "pendientes" ? '<small class="adm-bajo">solo pendientes</small>' : "") + "</td>" +
        '<td class="num">' + dur(s.segundos) + '</td><td class="num">' + num(s.respondidas) + '</td><td class="num">' + num(s.sabe) + " / " + num(s.no_sabe) + " / " + num(s.pendiente) + "</td>" +
        "<td>" + (s.completada ? '<span class="adm-ok">' + ic("check", 14) + "Sí</span>" : '<span class="adm-bajo-txt">No</span>') + "</td></tr>";
    }).join("");

    cuerpo.innerHTML =
      '<p class="adm-ficha-meta">' + esc("Se registró el " + fechaCorta(new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(new Date(p.creado))) + " · último acceso " + hace(p.ultimo)) + (p.admin ? ' <span class="adm-chip">admin</span>' : "") + "</p>" +
      '<div class="adm-kpis ficha">' +
        miniKpi("Tiempo en el período", dur(per.segundos), num(per.visitas) + " visitas · " + num(per.dias) + " días") +
        miniKpi("Estudio", num(per.sesiones) + (per.sesiones === 1 ? " sesión" : " sesiones"), dur(per.segundos_estudio) + " estudiando") +
        miniKpi("Respuestas", num(per.respuestas), pct(per.sabe, per.respuestas) + " «Lo sé»") +
        miniKpi("Histórico", dur(tot.segundos), num(tot.respuestas) + " respuestas · " + num(tot.generador) + " usos del generador") +
      "</div>" +
      '<h3 class="adm-sub-titulo">Minutos de uso por día</h3><div class="adm-grafico" id="adm-ficha-linea"></div>' +
      (seccTxt || disp ? '<p class="adm-nota">' + esc(seccTxt) + (seccTxt && disp ? "<br />" : "") + esc(disp) + "</p>" : "") +
      '<h3 class="adm-sub-titulo">Mazos y avance</h3>' +
      (mazos
        ? '<ul class="adm-leyenda adm-leyenda-avance"><li><span class="adm-ley-clave" style="background:var(--viz-1)"></span><span>«Lo sé»</span></li><li><span class="adm-ley-clave" style="background:var(--viz-2)"></span><span>«No lo sé»</span></li><li><span class="adm-ley-clave" style="background:var(--viz-3)"></span><span>Pendiente</span></li></ul><ul class="adm-mazos">' + mazos + "</ul>"
        : '<p class="adm-vacio">No tiene mazos.</p>') +
      '<h3 class="adm-sub-titulo">Sesiones de estudio recientes</h3>' +
      (sesiones
        ? '<div class="adm-tabla-wrap"><table class="adm-tabla compacta"><thead><tr><th>Cuándo</th><th>Mazo</th><th class="num">Duración</th><th class="num">Resp.</th><th class="num">Sé / No / Pend.</th><th>Terminó</th></tr></thead><tbody>' + sesiones + "</tbody></table></div>"
        : '<p class="adm-vacio">Sin sesiones registradas en este período.</p>');

    var cont = document.getElementById("adm-ficha-linea");
    graficoLinea(cont, f.serie || [], {
      alto: 170,
      nombre: "Minutos de uso",
      valor: function (d) { return d.segundos / 60; },
      fmt: function (v) { return num(Math.round(v)) + " min"; },
      eje: function (v) { return num(v); },
      extra: function (d) { return [{ valor: num(d.respuestas), label: "Respuestas" }]; }
    });
  }

  // ---------- eventos ----------

  document.addEventListener("click", function (e) {
    var t = e.target;
    if (t.closest("#adm-entrar")) {
      window.SB.signInWithGoogle().catch(function (err) {
        if (window.Novedades) window.Novedades.notifyError("No se pudo iniciar sesión: " + (err && err.message ? err.message : "error"));
      });
      return;
    }
    if (t.closest("#adm-salir") || t.closest("#adm-salir2")) {
      window.SB.signOut();
      return;
    }
    if (t.closest("#adm-reintentar")) {
      estado.uid = undefined;
      window.SB.getSession().then(conSesion);
      return;
    }
    var opcion = t.closest(".adm-seg button");
    if (opcion) {
      var grupo = opcion.parentNode.id;
      var valor = opcion.getAttribute("data-valor");
      Array.prototype.forEach.call(opcion.parentNode.children, function (b) {
        var sel = b === opcion;
        b.classList.toggle("sel", sel);
        b.setAttribute("aria-checked", sel);
      });
      if (grupo === "adm-rango" && valor !== estado.rango) {
        estado.rango = valor;
        guardar("adm-rango", valor);
        cargar();
      } else if (grupo === "adm-metrica" && valor !== estado.metrica) {
        estado.metrica = valor;
        guardar("adm-metrica", valor);
        if (estado.resumen) pintarActividad(estado.resumen);
      }
      return;
    }
    var pestana = t.closest(".adm-vistas [data-vista]");
    if (pestana) { cambiarVista(pestana.getAttribute("data-vista")); return; }
    if (t.closest("#adm-actualizar")) { cargar(); return; }
    if (t.closest("#adm-mas")) { estado.limite += 50; pintarUsuarios(); return; }
    var orden = t.closest(".adm-orden");
    if (orden) {
      var col = orden.getAttribute("data-col");
      if (estado.orden.col === col) estado.orden.dir *= -1;
      else estado.orden = { col: col, dir: col === "nombre" ? 1 : -1 };
      pintarUsuarios();
      var b2 = document.querySelector('.adm-orden[data-col="' + col + '"]');
      if (b2) b2.focus();
      return;
    }
    var fila = t.closest(".adm-fila");
    if (fila) { abrirFicha(fila.getAttribute("data-uid")); return; }
    if (t.closest("#adm-ficha-cerrar") || t.classList.contains("adm-ficha-fondo")) { cerrarFicha(); return; }
  });

  document.addEventListener("keydown", function (e) {
    var ficha = document.getElementById("adm-ficha");
    // Flechas entre pestañas.
    if ((e.key === "ArrowRight" || e.key === "ArrowLeft") && e.target.closest && e.target.closest(".adm-vistas")) {
      e.preventDefault();
      cambiarVista(estado.vista === "uso" ? "economia" : "uso");
      return;
    }
    if (e.key === "Escape" && ficha) { cerrarFicha(); return; }
    if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("adm-fila")) {
      e.preventDefault();
      abrirFicha(e.target.getAttribute("data-uid"));
      return;
    }
    if (e.key === "Tab" && ficha) {
      // Mantiene el foco dentro de la ficha.
      var focos = ficha.querySelectorAll('button, [href], input, [tabindex="0"], summary');
      if (!focos.length) return;
      var primero = focos[0], ultimo = focos[focos.length - 1];
      if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
    }
  });

  document.addEventListener("input", function (e) {
    if (e.target.id === "adm-buscar") {
      estado.busqueda = e.target.value;
      estado.limite = 50;
      pintarUsuarios();
    }
  });

  document.addEventListener("change", function (e) {
    if (e.target.id === "adm-incluirme") {
      estado.incluirme = !!e.target.checked;
      guardar("adm-incluirme", estado.incluirme ? "1" : "0");
      cargar();
    }
  });

  var redimension = null;
  var anchoPrevio = window.innerWidth;
  window.addEventListener("resize", function () {
    if (window.innerWidth === anchoPrevio) return;
    anchoPrevio = window.innerWidth;
    clearTimeout(redimension);
    redimension = setTimeout(function () {
      if (estado.resumen && document.getElementById("adm-linea")) pintarActividad(estado.resumen);
    }, 150);
  });

  // Se actualiza solo cada 5 minutos mientras la pestaña está visible.
  setInterval(function () {
    if (document.visibilityState === "visible" && estado.resumen && !document.getElementById("adm-ficha") && document.getElementById("adm-kpis")) cargar();
  }, 5 * 60 * 1000);

  // ---------- inicio ----------

  function conSesion(s) {
    var uid = s && s.user ? s.user.id : null;
    if (uid === estado.uid) return;
    estado.uid = uid;
    estado.sesion = s;
    estado.resumen = null;
    estado.usuarios = null;
    pintarCuenta();
    if (!s) return pantallaLogin();
    raiz.innerHTML = '<p class="adm-espera">Comprobando acceso…</p>';
    rpc("es_admin").then(function (ok) {
      if (estado.uid !== uid) return;
      if (ok === true) {
        abrirVista();
      } else {
        pantallaSinPermiso();
      }
    }, function (e) {
      if (estado.uid !== uid) return;
      if (e.sinPermiso) pantallaSinPermiso();
      else pantallaError(e.message);
    });
  }

  window.addEventListener("hashchange", function () {
    var v = /^#economia/.test(location.hash) ? "economia" : "uso";
    if (v !== estado.vista && document.querySelector(".adm-vistas")) cambiarVista(v);
  });

  if (!window.SB || !window.SB.client) {
    pantallaError("No se pudo conectar con Supabase (revisa js/config.js).");
    return;
  }
  window.SB.onChange(conSesion);
  window.SB.getSession().then(conSesion);
})();
