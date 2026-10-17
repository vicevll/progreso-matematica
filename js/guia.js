// Studappy · tutorial guiado.
//
// La primera vez que alguien entra (con su cuenta o en el modo de prueba),
// un recorrido corto señala con un recuadro cada parte de la web —crear un
// mazo, generar con IA, la tienda, las misiones y el perfil— y explica qué
// hacer ahí. En la tienda ofrece el Mazo del mago: con cuenta se agrega en un
// clic; en la prueba, invita a crear la cuenta para llevárselo.
// Se ve una sola vez por cuenta (también se marca en la cuenta de Supabase:
// user_metadata.guia). Se puede repetir desde «Mi perfil».
(function () {
  "use strict";

  var LOCAL = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname);
  var CLAVE = "studappy-guia:";
  var QUIERE_MAGO = "studappy-quiere-mago";   // lo usa js/regalo-mago.js al crear la cuenta
  var MAGO = "paes-ciencias-mago";

  var activa = null;    // { pasos, i, uid, prueba }
  var capa = null, foco = null, caja = null;
  var objetivo = null;  // elemento resaltado
  var token = 0;
  var esperando = false; // revisar() ya está esperando el momento de empezar

  // ---------- utilidades ----------

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function ic(nombre, size) {
    return window.icon ? window.icon(nombre, { size: size || 16 }) : "";
  }

  function px(nombre, size) {
    return '<img class="px-ico" src="img/juego/' + encodeURIComponent(nombre) + '.svg?v=1" width="' + size + '" height="' + size + '" alt="" />';
  }

  function user() {
    return window.Auth && window.Auth.user ? window.Auth.user() : null;
  }

  function esPrueba() {
    return !!(window.Auth && window.Auth.isTrial && window.Auth.isTrial());
  }

  function esDemo() {
    return !!(window.Auth && window.Auth.isDemo && window.Auth.isDemo());
  }

  function sinMovimiento() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  // Ya lo vio en esta cuenta. Quien vio el tour anterior o recibió el Mazo
  // del mago de regalo (studappy-tour-mago, tour_mago) ya conoce la app.
  // «studappy-tour-off» lo apaga en este navegador (para pruebas).
  function visto(u) {
    try {
      if (localStorage.getItem(CLAVE + u.id) === "1") return true;
      if (localStorage.getItem("studappy-tour-mago:" + u.id) === "1") return true;
      if (localStorage.getItem("studappy-tour-off") === "1") return true;
    } catch (e) { /* sin almacenamiento */ }
    var m = u.user_metadata || {};
    return m.guia === "vista" || m.tour_mago === "visto";
  }

  function marcarVisto(u) {
    try { localStorage.setItem(CLAVE + u.id, "1"); } catch (e) { /* sin almacenamiento */ }
    if (LOCAL || esPrueba() || !window.SB || !window.SB.client || !window.SB.client.auth) return;
    if (u.user_metadata && u.user_metadata.guia === "vista") return;
    try {
      window.SB.client.auth.updateUser({ data: { guia: "vista" } }).catch(function () { /* queda en este navegador */ });
    } catch (e) { /* ignorar */ }
  }

  function tieneMago() {
    return !!(window.CloudDecks && window.CloudDecks.isOwned && window.CloudDecks.isOwned(MAGO));
  }

  function etiqueta() {
    var p = window.Perfil && window.Perfil.estado && window.Perfil.estado();
    return p && p.etiqueta ? p.etiqueta : "";
  }

  // ---------- pasos ----------

  function pasosCuenta() {
    return [
      {
        icono: "bandera",
        titulo: "¡Bienvenido a Studappy!",
        texto: "Te muestro en un minuto dónde está todo: crear mazos, conseguir mazos listos y ganar puntos."
      },
      {
        sel: "#new-deck", icono: "lapiz",
        titulo: "Crea tu propio mazo",
        texto: "Aquí escribes tus preguntas y respuestas, una tarjeta a la vez. También acepta fórmulas como <b>$x^2$</b>."
      },
      {
        sel: "#open-generador", icono: "chispa",
        titulo: "O deja que la IA lo arme",
        texto: "Sube un <b>PDF</b> o una <b>foto</b> de tus apuntes, o pega un texto, y la IA crea las tarjetas por ti. Tienes 2 mazos con IA cada día."
      },
      {
        ruta: "#/tienda", sel: ".store-card.store-mago", icono: "cofre",
        titulo: "El Mazo del mago, gratis",
        texto: function () {
          return tieneMago()
            ? "Ya lo tienes en Mis mazos: 60 tarjetas de química en 6 submazos para jugar por partes."
            : "60 tarjetas de química (estructura atómica) para la PAES, en 6 submazos que puedes jugar por partes. ¿Te lo llevas?";
        },
        acciones: function () {
          return tieneMago() ? null : [
            { id: "mago", texto: "Agregar gratis", clase: "primary", icono: "plus" },
            { id: "siguiente", texto: "Ahora no", clase: "ghost" }
          ];
        }
      },
      {
        sel: '#main-nav a[href="#/misiones"]', icono: "moneda",
        titulo: "Misiones y puntos",
        texto: "Estudia, cumple misiones diarias y semanales y gana <b>puntos</b>. Los canjeas en la tienda por temas, IA plus y mazos."
      },
      {
        sel: '#main-nav a[href="#/perfil"]', icono: "estrella",
        titulo: "Tu etiqueta",
        texto: function () {
          var e = etiqueta();
          return (e ? "Eres <b>" + esc(e) + "</b>. " : "Aquí está tu etiqueta única. ") +
            "En tu perfil puedes compartir tus mazos con un enlace para que tus compañeros los jueguen.";
        }
      },
      {
        ruta: "#/", icono: "trofeo",
        titulo: "¡Listo para estudiar!",
        texto: "Crea tu primer mazo o juega uno de Mis mazos. Puedes ver este recorrido otra vez desde <b>Mi perfil</b>.",
        final: true
      }
    ];
  }

  function pasosPrueba() {
    return [
      {
        icono: "bandera",
        titulo: "¡Bienvenido a tu prueba!",
        texto: "Te muestro qué puedes hacer en Studappy sin registrarte. Son unos pocos pasos."
      },
      {
        sel: ".prueba-cupos", icono: "pergamino",
        titulo: "Lo que incluye tu prueba",
        texto: "Puedes crear <b>1 mazo a mano</b> y <b>1 mazo con IA</b>, y mirar toda la tienda. Aquí ves cuánto te queda."
      },
      {
        sel: "#open-generador", icono: "chispa",
        titulo: "Tu mazo con IA",
        texto: "Sube un <b>PDF</b> o una <b>foto</b> de tus apuntes, o pega un texto, y la IA crea las tarjetas por ti."
      },
      {
        sel: "#new-deck", icono: "lapiz",
        titulo: "Tu mazo a mano",
        texto: "O escribe tú mismo las preguntas y respuestas de tu mazo."
      },
      {
        ruta: "#/tienda", sel: ".store-card.store-mago", icono: "cofre",
        titulo: "El Mazo del mago es gratis",
        texto: "60 tarjetas de química para la PAES, en 6 submazos. Es gratis con tu cuenta: créala y te lo llevas al tiro.",
        acciones: function () {
          return [
            { id: "mago-cuenta", texto: "Crear cuenta y llevármelo", clase: "prueba-cta", google: true },
            { id: "siguiente", texto: "Ahora no", clase: "ghost" }
          ];
        }
      },
      {
        sel: "#account [data-crear-cuenta]", icono: "estrella",
        titulo: "Cuando quieras, crea tu cuenta",
        texto: "Es gratis y con Google. Te llevas tus mazos de prueba y tu avance, y tienes misiones, puntos y tu propia etiqueta."
      },
      {
        ruta: "#/", icono: "trofeo",
        titulo: "¡A estudiar!",
        texto: "Empieza creando tu mazo con IA o a mano.",
        final: true
      }
    ];
  }

  // ---------- capa y recuadro ----------

  function crearCapa() {
    capa = document.createElement("div");
    capa.className = "guia-capa";
    capa.setAttribute("aria-hidden", "true");
    foco = document.createElement("div");
    foco.className = "guia-foco centro";
    foco.setAttribute("aria-hidden", "true");
    caja = document.createElement("div");
    caja.className = "guia-caja";
    caja.setAttribute("role", "dialog");
    caja.setAttribute("aria-modal", "true");
    caja.setAttribute("aria-labelledby", "guia-titulo");
    document.body.appendChild(capa);
    document.body.appendChild(foco);
    document.body.appendChild(caja);
    // La animación de entrada mueve la caja unos píxeles: se recalcula al terminar.
    caja.addEventListener("animationend", function () { posicionar(); });
    document.documentElement.classList.add("guia-activa");
  }

  function quitarCapa() {
    [capa, foco, caja].forEach(function (n) { if (n && n.parentNode) n.parentNode.removeChild(n); });
    capa = foco = caja = objetivo = null;
    document.documentElement.classList.remove("guia-activa");
  }

  function visible(el) {
    if (!el) return false;
    var r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== "hidden";
  }

  // Espera a que el elemento aparezca (las páginas se dibujan después de navegar).
  function esperar(sel, ms) {
    return new Promise(function (resolve) {
      if (!sel) return resolve(null);
      var fin = Date.now() + (ms || 3000);
      (function mirar() {
        var el = document.querySelector(sel);
        if (visible(el)) return resolve(el);
        if (Date.now() > fin) return resolve(null);
        setTimeout(mirar, 100);
      })();
    });
  }

  function valor(v) {
    return typeof v === "function" ? v() : v;
  }

  function pintarCaja(paso, error) {
    var total = activa.pasos.length;
    var i = activa.i;
    var acciones = valor(paso.acciones);
    function boton(a) {
      return '<button class="btn ' + (a.clase || "ghost") + '" type="button" data-guia="' + a.id + '">' +
        (a.google ? (window.GOOGLE_ICON || "") : a.icono ? ic(a.icono, 16) : "") + "<span>" + esc(a.texto) + "</span></button>";
    }
    // Con una oferta (el Mazo del mago), el botón principal va solo y a lo ancho.
    var oferta = acciones ? '<div class="guia-oferta">' + boton(acciones[0]) + "</div>" : "";
    var botones = acciones
      ? acciones.slice(1).map(boton).join("")
      : '<button class="btn primary" type="button" data-guia="siguiente"><span>' + (paso.final ? "Terminar" : i === 0 ? "Empezar" : "Siguiente") + "</span>" + (paso.final ? ic("check", 16) : ic("chevronRight", 16)) + "</button>";
    caja.innerHTML =
      '<div class="guia-cabeza">' +
        '<span class="guia-kicker">Paso ' + (i + 1) + " de " + total + "</span>" +
        '<span class="guia-puntos" aria-hidden="true">' + activa.pasos.map(function (_, j) { return "<i" + (j < i ? ' class="hecho"' : j === i ? ' class="ahora"' : "") + "></i>"; }).join("") + "</span>" +
        (paso.final ? "" : '<button class="guia-saltar" type="button" data-guia="saltar">Saltar</button>') +
      "</div>" +
      '<div class="guia-cuerpo">' +
        '<span class="guia-ico">' + px(paso.icono || "estrella", 36) + "</span>" +
        '<div><h3 id="guia-titulo">' + esc(paso.titulo) + "</h3><p>" + valor(paso.texto) + "</p>" +
          (error ? '<p class="guia-error">' + esc(error) + "</p>" : "") + "</div>" +
      "</div>" +
      oferta +
      '<div class="guia-botones">' +
        (i > 0 && !paso.final ? '<button class="btn ghost guia-atras" type="button" data-guia="atras">' + ic("arrowLeft", 16) + "<span>Atrás</span></button>" : "<span></span>") +
        '<div class="guia-botones-der">' + botones + "</div>" +
      "</div>";
    if (window.StudappyApp && window.StudappyApp.renderMath) window.StudappyApp.renderMath(caja);
    var principal = caja.querySelector(".guia-oferta .btn, .guia-botones-der .btn");
    if (principal) principal.focus({ preventScroll: true });
  }

  function posicionar() {
    if (!activa || !caja) return;
    var chico = window.innerWidth <= 720;
    var cajaR = caja.getBoundingClientRect();
    if (!objetivo || !document.body.contains(objetivo)) {
      foco.classList.add("centro");
      foco.style.cssText = "";
      caja.className = "guia-caja centro";
      caja.style.left = caja.style.top = "";
      return;
    }
    var r = objetivo.getBoundingClientRect();
    var pad = 8;
    foco.classList.remove("centro");
    // Pegado al borde de arriba, el cartel «Aquí» va debajo del recuadro.
    foco.classList.toggle("aqui-abajo", r.top - pad < 18);
    foco.style.top = r.top - pad + "px";
    foco.style.left = r.left - pad + "px";
    foco.style.width = r.width + pad * 2 + "px";
    foco.style.height = r.height + pad * 2 + "px";
    if (chico) {
      // En el celular la caja va abajo (o arriba si el recuadro está abajo)
      // y el recuadro se recorta para que la caja no lo tape.
      var hojaAbajo = r.top + r.height / 2 <= window.innerHeight * 0.55;
      caja.className = "guia-caja hoja " + (hojaAbajo ? "abajo" : "arriba");
      caja.style.left = caja.style.top = "";
      var hoja = caja.getBoundingClientRect();
      if (hojaAbajo && r.bottom + pad > hoja.top - 10) {
        foco.style.height = Math.max(36, hoja.top - 10 - (r.top - pad)) + "px";
      } else if (!hojaAbajo && r.top - pad < hoja.bottom + 10) {
        foco.style.top = hoja.bottom + 10 + "px";
        foco.style.height = Math.max(36, r.bottom + pad - (hoja.bottom + 10)) + "px";
      }
      return;
    }
    var w = cajaR.width || 380;
    var h = cajaR.height || 220;
    var W = window.innerWidth, H = window.innerHeight;
    var top, left, lado;
    if (r.bottom + pad + 18 + h <= H - 12) {
      lado = "flecha-arriba";               // debajo del recuadro
      top = r.bottom + pad + 16;
    } else if (r.top - pad - 18 - h >= 12) {
      lado = "flecha-abajo";                // encima
      top = r.top - pad - 16 - h;
    } else if (W - (r.right + pad + 16) >= w + 16) {
      lado = "flecha-izq";                  // a la derecha (recuadros altos)
      left = r.right + pad + 16;
    } else if (r.left - pad - 16 >= w + 16) {
      lado = "flecha-der";                  // a la izquierda
      left = r.left - pad - 16 - w;
    } else {
      lado = "flecha-no";                   // no cabe: abajo de la pantalla
      top = H - h - 12;
    }
    if (lado === "flecha-izq" || lado === "flecha-der") {
      top = Math.min(Math.max(12, r.top + Math.min(r.height / 2, 90) - 40), H - h - 12);
      caja.style.setProperty("--flecha", Math.min(Math.max(22, r.top + Math.min(r.height / 2, 90) - top), h - 22) + "px");
    } else {
      left = Math.min(Math.max(16, r.left + r.width / 2 - w / 2), W - w - 16);
      caja.style.setProperty("--flecha", Math.min(Math.max(22, r.left + r.width / 2 - left), w - 22) + "px");
    }
    caja.className = "guia-caja " + lado;
    caja.style.top = top + "px";
    caja.style.left = left + "px";
  }

  // Lleva el elemento a la vista. En el celular lo deja arriba, bajo la barra,
  // para que quepa entero sobre la caja del tutorial.
  function desplazar(el) {
    var modo = sinMovimiento() ? "auto" : "smooth";
    var barra = document.querySelector(".topbar");
    if (barra && barra.contains(el)) return; // la barra siempre está a la vista
    if (window.innerWidth > 720) {
      el.scrollIntoView({ block: "center", behavior: modo });
      return;
    }
    var r = el.getBoundingClientRect();
    var arriba = barra ? Math.max(0, barra.getBoundingClientRect().bottom) : 0;
    var hoja = caja ? caja.getBoundingClientRect().height : 220;
    var libre = window.innerHeight - hoja - 24 - arriba - 18;
    var margen = r.height < libre ? Math.min(40, (libre - r.height) / 2) : 0;
    window.scrollTo({ top: Math.max(0, window.pageYOffset + r.top - arriba - 18 - margen), behavior: modo });
  }

  function mostrar(i) {
    if (!activa) return;
    if (i < 0) i = 0;
    if (i >= activa.pasos.length) { terminar(); return; }
    activa.i = i;
    var paso = activa.pasos[i];
    var mio = ++token;
    if (paso.ruta && location.hash !== paso.ruta && !(paso.ruta === "#/" && (location.hash === "" || location.hash === "#"))) {
      location.hash = paso.ruta;
    }
    esperar(paso.sel, 3500).then(function (el) {
      if (mio !== token || !activa) return;
      objetivo = el;
      pintarCaja(paso);
      posicionar();
      if (el) {
        desplazar(el);
        setTimeout(function () { if (mio === token) posicionar(); }, sinMovimiento() ? 30 : 420);
      }
    });
  }

  function iniciar(forzar) {
    var u = user();
    if (!u || esDemo() || activa) return false;
    if (!forzar && visto(u)) return false;
    if (window.Generador && window.Generador.isOpen && window.Generador.isOpen()) return false;
    activa = { pasos: esPrueba() ? pasosPrueba() : pasosCuenta(), i: 0, uid: u.id, prueba: esPrueba() };
    crearCapa();
    if (location.hash && location.hash !== "#/" && location.hash !== "#") location.hash = "#/";
    mostrar(0);
    return true;
  }

  function terminar() {
    if (!activa) return;
    var u = user();
    if (u && u.id === activa.uid) marcarVisto(u);
    activa = null;
    token++;
    quitarCapa();
  }

  function accion(id, boton) {
    if (!activa) return;
    var i = activa.i;
    if (id === "siguiente") return mostrar(i + 1);
    if (id === "atras") return mostrar(i - 1);
    if (id === "saltar") return terminar();
    if (id === "mago") {
      if (!window.CloudDecks) return mostrar(i + 1);
      boton.disabled = true;
      var span = boton.querySelector("span");
      if (span) span.textContent = "Agregando…";
      window.CloudDecks.acquire(MAGO).then(function () {
        if (window.Novedades && window.Novedades.notify) window.Novedades.notify("¡El Mazo del mago ya está en Mis mazos!");
        if (activa && activa.i === i) mostrar(i + 1);
      }, function (e) {
        if (activa && activa.i === i) pintarCaja(activa.pasos[i], (e && e.message) || "No se pudo agregar. Puedes hacerlo después desde la tienda.");
        posicionar();
      });
      return;
    }
    if (id === "mago-cuenta") {
      // Se recuerda por un día: al volver de Google, js/regalo-mago.js lo agrega.
      try { localStorage.setItem(QUIERE_MAGO, String(Date.now())); } catch (e) { /* sin almacenamiento */ }
      terminar();
      // Vuelve a Mis mazos, donde empieza el recorrido de la cuenta nueva.
      location.hash = "#/";
      if (window.Auth && window.Auth.crearCuenta) window.Auth.crearCuenta();
    }
  }

  // ---------- inicio automático ----------

  function enInicio() {
    var h = location.hash.replace(/^#\/?/, "");
    return h === "";
  }

  function hayVentanas() {
    return !!document.querySelector(".confirm-overlay, .generador-overlay, #editor, .perfil-overlay");
  }

  // La primera vez que una cuenta llega a Mis mazos (y no hay otra ventana
  // abierta, como la de traer los mazos de prueba), empieza el recorrido.
  // Si se va a otra pantalla, se deja de esperar y se vuelve a revisar al
  // regresar a Mis mazos.
  function revisar(intento) {
    var u = user();
    intento = intento || 0;
    if (!u || esDemo() || activa || visto(u) || intento > 40) { esperando = false; return; }
    if (esperando && !intento) return;
    esperando = true;
    var listo = enInicio() && document.querySelector("#new-deck") && !hayVentanas() &&
      !(window.SyncMazos && window.SyncMazos.cargando && window.SyncMazos.cargando());
    if (!listo) {
      if (!enInicio() && intento > 4) { esperando = false; return; }
      setTimeout(function () { revisar(intento + 1); }, 700);
      return;
    }
    esperando = false;
    iniciar(false);
  }

  window.addEventListener("hashchange", function () {
    if (!activa && enInicio()) setTimeout(function () { revisar(0); }, 500);
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest) return;
    var b = e.target.closest("[data-guia]");
    if (b && caja && caja.contains(b)) {
      e.preventDefault();
      accion(b.getAttribute("data-guia"), b);
      return;
    }
    if (e.target.closest("[data-guia-iniciar]")) {
      e.preventDefault();
      iniciar(true);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (!activa) return;
    if (e.key === "Escape") { e.preventDefault(); terminar(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); accion("siguiente"); }
    else if (e.key === "ArrowLeft" && activa.i > 0) { e.preventDefault(); accion("atras"); }
  });

  var pendiente = false;
  function reubicar() {
    if (!activa || pendiente) return;
    pendiente = true;
    requestAnimationFrame(function () { pendiente = false; posicionar(); });
  }
  window.addEventListener("resize", reubicar);
  window.addEventListener("scroll", reubicar, true);

  if (window.Auth && window.Auth.onChange) {
    window.Auth.onChange(function () {
      if (activa && (!user() || user().id !== activa.uid)) terminar();
      setTimeout(function () { revisar(0); }, 900);
    });
    if (window.Auth.ready) setTimeout(function () { revisar(0); }, 900);
  }

  window.Guia = {
    iniciar: function () { return iniciar(true); },
    terminar: terminar,
    activa: function () { return !!activa; },
    paso: function () { return activa ? activa.i : -1; }
  };
})();
