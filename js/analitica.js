// Studappy · registro de uso para el panel de administración (/admin).
//
// Solo con sesión iniciada (nunca visitantes anónimos ni el modo prueba):
//   - Tiempo de estancia: segundos con la pestaña visible y en uso (se deja
//     de contar tras 5 minutos sin tocar nada), repartidos por sección.
//   - Sesiones de estudio: cada ronda, con sus respuestas. app.js avisa con
//     el evento "studappy:estudio" ({ fase: "inicio" | "respuesta" | "fin" }).
// Los datos se guardan con supabase/admin.sql (registrar_visita y
// registrar_estudio). En localhost no se registra nada, salvo que se active
// con localStorage "studappy-analitica" = "1".
(function () {
  var LOCAL = /^(localhost|127\.0\.0\.1|\[::1\]|0\.0\.0\.0)$/.test(location.hostname) || /\.localhost$/.test(location.hostname);
  var forzado = false;
  try { forzado = localStorage.getItem("studappy-analitica") === "1"; } catch (e) { /* sin almacenamiento */ }
  if (LOCAL && !forzado) {
    window.Analitica = { activa: false };
    return;
  }

  var TICK = 5000;                 // cada cuánto se mide
  var ENVIO = 30000;               // cada cuánto se guarda
  var INACTIVO = 5 * 60 * 1000;    // sin tocar nada: deja de contar
  var NUEVA_VISITA = 30 * 60 * 1000; // pausa larga: cuenta como otra visita
  var SECCIONES = { mazos: 1, estudio: 1, tienda: 1, generador: 1, otro: 1 };

  var usuario = null;   // id del usuario con sesión
  var visita = null;    // { sesion, segundos, secciones, vistas, enviado }
  var estudio = null;   // ronda de estudio en curso
  var apagado = false;  // el servidor no tiene las funciones (falta admin.sql)
  var ultimaActividad = Date.now();
  var ultimoTick = Date.now();

  function idAleatorio(prefijo) {
    var bytes = new Uint8Array(12);
    if (window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(bytes);
    else for (var i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
    return prefijo + Array.prototype.map.call(bytes, function (b) { return ("0" + b.toString(16)).slice(-2); }).join("");
  }

  function dispositivo() {
    var ancho = Math.min(window.innerWidth || 0, (window.screen && window.screen.width) || Infinity);
    var tactil = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    if (tactil && ancho < 768) return "movil";
    if (tactil && ancho < 1200) return "tablet";
    return ancho && ancho < 600 ? "movil" : "escritorio";
  }

  function usuarioActual() {
    var A = window.Auth;
    if (!A || !A.user || (A.isDemo && A.isDemo())) return null;
    var u = A.user();
    return u && u.id ? String(u.id) : null;
  }

  function seccionActual() {
    if (window.Generador && window.Generador.isOpen && window.Generador.isOpen()) return "generador";
    var ruta = String(location.hash || "").replace(/^#\/?/, "");
    if (!ruta) return "mazos";
    if (/^mazo\//.test(ruta)) return "estudio";
    if (/^tienda/.test(ruta)) return "tienda";
    return "otro";
  }

  function enUso() {
    return document.visibilityState === "visible" && Date.now() - ultimaActividad < INACTIVO;
  }

  // ---------- envío ----------

  function tokenGuardado() {
    try {
      var s = JSON.parse(localStorage.getItem("mate-auth") || "null");
      return (s && s.access_token) || "";
    } catch (e) {
      return "";
    }
  }

  function siFalta(error) {
    // Falta ejecutar supabase/admin.sql: no se insiste en esta visita.
    var code = error && (error.code || "");
    if (code === "PGRST202" || code === "42883" || (error && error.status === 404)) apagado = true;
  }

  // final = la página se está ocultando o cerrando: fetch con keepalive para
  // que el envío sobreviva al cierre de la pestaña.
  function rpc(nombre, args, final) {
    if (apagado) return;
    if (final) {
      var cfg = window.APP_CONFIG || {};
      var token = tokenGuardado();
      if (!token || !cfg.SUPABASE_URL || typeof fetch !== "function") return;
      try {
        fetch(String(cfg.SUPABASE_URL).replace(/\/$/, "") + "/rest/v1/rpc/" + nombre, {
          method: "POST",
          keepalive: true,
          headers: { "Content-Type": "application/json", apikey: cfg.SUPABASE_ANON_KEY || "", Authorization: "Bearer " + token },
          body: JSON.stringify(args)
        }).catch(function () { /* sin conexión */ });
      } catch (e) { /* navegador sin keepalive */ }
      return;
    }
    if (!window.SB || !window.SB.client) return;
    window.SB.client.rpc(nombre, args).then(function (res) {
      if (res && res.error) siFalta(res.error);
    }, function () { /* sin conexión: se reintenta en el próximo envío */ });
  }

  function enviarVisita(final) {
    if (!visita || !usuario) return;
    var seg = Math.round(visita.segundos);
    if (seg < 1) return;
    if (seg === visita.enviado.segundos && visita.vistas === visita.enviado.vistas) return;
    var secciones = {};
    Object.keys(visita.secciones).forEach(function (k) { secciones[k] = Math.round(visita.secciones[k]); });
    visita.enviado = { segundos: seg, vistas: visita.vistas };
    rpc("registrar_visita", {
      p_sesion: visita.sesion,
      p_segundos: seg,
      p_secciones: secciones,
      p_vistas: visita.vistas,
      p_dispositivo: visita.dispositivo
    }, final);
  }

  function enviarEstudio(final) {
    if (!estudio || !usuario || estudio.respondidas < 1) return;
    var seg = Math.round(estudio.segundos);
    var firma = [seg, estudio.respondidas, estudio.completada].join("|");
    if (firma === estudio.enviado) return;
    estudio.enviado = firma;
    rpc("registrar_estudio", {
      p_id: estudio.id,
      p_mazo_id: estudio.mazoId,
      p_mazo_nombre: estudio.nombre,
      p_origen: estudio.origen,
      p_catalogo: estudio.catalogo,
      p_seccion: estudio.seccion,
      p_filtro: estudio.filtro,
      p_segundos: seg,
      p_total: estudio.total,
      p_respondidas: estudio.respondidas,
      p_sabe: estudio.sabe,
      p_no_sabe: estudio.no,
      p_pendiente: estudio.pendiente,
      p_completada: estudio.completada
    }, final);
  }

  function enviarTodo(final) {
    enviarVisita(final);
    enviarEstudio(final);
  }

  // ---------- visita ----------

  function nuevaVisita() {
    visita = {
      sesion: idAleatorio("v"),
      segundos: 0,
      secciones: {},
      vistas: 1,
      dispositivo: dispositivo(),
      enviado: { segundos: 0, vistas: 0 }
    };
  }

  function revisarUsuario() {
    var actual = usuarioActual();
    if (actual === usuario) return;
    if (usuario) enviarTodo(false);
    usuario = actual;
    estudio = null;
    visita = null;
    if (usuario) nuevaVisita();
  }

  function tick() {
    var ahora = Date.now();
    var dt = Math.min(ahora - ultimoTick, TICK * 2) / 1000;
    ultimoTick = ahora;
    revisarUsuario();
    if (!visita || !enUso() || dt <= 0) return;
    visita.segundos += dt;
    var sec = seccionActual();
    visita.secciones[sec] = (visita.secciones[sec] || 0) + dt;
    if (estudio && sec === "estudio") estudio.segundos += dt;
  }

  function actividad() {
    var ahora = Date.now();
    if (visita && ahora - ultimaActividad > NUEVA_VISITA) {
      // Volvió después de una pausa larga: se cierra la visita anterior.
      enviarTodo(false);
      estudio = null;
      nuevaVisita();
    }
    ultimaActividad = ahora;
  }

  // ---------- estudio ----------

  function esIA(deck) {
    var primera = deck && deck.cards && deck.cards[0];
    return !!(primera && /^g\d+-/.test(String(primera.id || "")));
  }

  function nuevoEstudio(d) {
    var deck = window.DeckStore && window.DeckStore.get ? window.DeckStore.get(d.deckId) : null;
    var tienda = !!(deck && deck.origen === "tienda");
    return {
      id: idAleatorio("e"),
      mazoId: String(d.deckId || "").slice(0, 80),
      nombre: String((deck && deck.nombre) || "").slice(0, 120),
      origen: tienda ? "tienda" : esIA(deck) ? "ia" : "propio",
      catalogo: tienda ? String(deck.catalogId || "") : "",
      seccion: d.seccion ? String(d.seccion) : "",
      filtro: d.filtro === "pendientes" ? "pendientes" : "todas",
      total: Math.max(0, Number(d.total) || 0),
      respondidas: 0, sabe: 0, no: 0, pendiente: 0,
      segundos: 0,
      completada: false,
      enviado: ""
    };
  }

  function cerrarEstudio() {
    enviarEstudio(false);
    estudio = null;
  }

  window.addEventListener("studappy:estudio", function (e) {
    var d = (e && e.detail) || {};
    revisarUsuario();
    if (!usuario || !d.deckId) return;
    actividad();
    if (d.fase === "inicio") {
      cerrarEstudio();
      estudio = nuevoEstudio(d);
      return;
    }
    if (d.fase === "respuesta") {
      if (!estudio || estudio.mazoId !== String(d.deckId) || estudio.seccion !== (d.seccion ? String(d.seccion) : "")) {
        cerrarEstudio();
        estudio = nuevoEstudio(d);
      }
      estudio.respondidas++;
      if (d.tipo === "sabe") estudio.sabe++;
      else if (d.tipo === "no") estudio.no++;
      else if (d.tipo === "pendiente") estudio.pendiente++;
      if (estudio.respondidas === 1 || estudio.respondidas % 5 === 0) enviarEstudio(false);
      return;
    }
    if (d.fase === "fin" && estudio && estudio.mazoId === String(d.deckId)) {
      estudio.completada = true;
      enviarEstudio(false);
    }
  });

  // ---------- eventos del navegador ----------

  ["pointerdown", "keydown", "touchstart", "wheel", "scroll"].forEach(function (tipo) {
    window.addEventListener(tipo, actividad, { passive: true, capture: true });
  });
  var ultimoMovimiento = 0;
  window.addEventListener("pointermove", function () {
    var ahora = Date.now();
    if (ahora - ultimoMovimiento > 2000) { ultimoMovimiento = ahora; actividad(); }
  }, { passive: true });

  window.addEventListener("hashchange", function () {
    tick();
    if (visita) visita.vistas++;
    if (estudio && seccionActual() !== "estudio") cerrarEstudio();
  });

  document.addEventListener("visibilitychange", function () {
    tick();
    if (document.visibilityState === "hidden") {
      enviarTodo(true);
    } else {
      ultimoTick = Date.now();
      actividad();
    }
  });

  window.addEventListener("pagehide", function () {
    tick();
    enviarTodo(true);
  });

  if (window.Auth && window.Auth.onChange) {
    window.Auth.onChange(function () { tick(); });
  }

  setInterval(tick, TICK);
  setInterval(function () { tick(); enviarTodo(false); }, ENVIO);
  revisarUsuario();

  window.Analitica = {
    activa: true,
    // Para pruebas: fuerza un envío inmediato.
    enviar: function () { tick(); enviarTodo(false); },
    estado: function () {
      return {
        usuario: usuario,
        visita: visita && { sesion: visita.sesion, segundos: visita.segundos, secciones: visita.secciones, vistas: visita.vistas },
        estudio: estudio && { id: estudio.id, respondidas: estudio.respondidas, segundos: estudio.segundos }
      };
    }
  };
})();
