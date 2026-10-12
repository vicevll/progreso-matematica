// Tour de bienvenida.
//
// Se abre una sola vez para cada cuenta (nuevas y antiguas), la primera vez
// que entra a Mis mazos, y agrega el Mazo del mago a la cuenta. Se puede
// saltar en cualquier momento. Para verlo de nuevo: abrir la dirección #/tour.
//
// Que ya se vio queda guardado en este navegador y en la cuenta de Supabase
// (user_metadata.tour_mago), para no repetirlo en otro dispositivo.
//
// En localhost (pruebas) se abre cada vez que se carga la página y no marca
// nada en la cuenta, así probarlo no gasta la "primera vez" del sitio real.
// Para apagarlo en localhost (por ejemplo, en pruebas automáticas):
// localStorage.setItem("studappy-tour-off", "1").
(function () {
  var LOCAL = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname);
  var MAZO = "paes-ciencias-mago";
  var CLAVE = "studappy-tour-mago:";
  var PASOS = 5;

  var overlay = null;
  var paso = 0;
  var estadoMazo = "pendiente"; // "pendiente" | "agregando" | "listo" | "error"
  var errorMazo = "";
  var revisado = {}; // cuentas ya revisadas en esta carga de la página

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function ic(name, size) {
    return window.icon ? window.icon(name, { size: size || 18 }) : "";
  }

  function user() {
    return window.Auth && window.Auth.user ? window.Auth.user() : null;
  }

  function isDemo() {
    return !!(window.Auth && window.Auth.isDemo && window.Auth.isDemo());
  }

  function yaVisto(u) {
    try {
      if (localStorage.getItem(CLAVE + u.id) === "1") return true;
    } catch (e) { /* sin almacenamiento */ }
    return !!(u.user_metadata && u.user_metadata.tour_mago === "visto");
  }

  function marcarVisto() {
    var u = user();
    if (!u) return;
    if (LOCAL) return;
    try { localStorage.setItem(CLAVE + u.id, "1"); } catch (e) { /* ignorar */ }
    if (isDemo() || !window.SB || !window.SB.client || !window.SB.client.auth) return;
    if (u.user_metadata && u.user_metadata.tour_mago === "visto") return;
    try {
      window.SB.client.auth.updateUser({ data: { tour_mago: "visto" } })
        .catch(function () { /* queda guardado en este navegador */ });
    } catch (e) { /* ignorar */ }
  }

  function mazoDelMago() {
    if (!window.DeckStore) return null;
    return window.DeckStore.all().filter(function (deck) { return deck.catalogId === MAZO; })[0] || null;
  }

  function entradaCatalogo() {
    return (window.STORE_CATALOG || []).filter(function (item) { return item.id === MAZO; })[0] || null;
  }

  // Agrega el Mazo del mago apenas empieza el tour (así queda aunque se salte).
  function agregarMazo() {
    if (mazoDelMago()) {
      estadoMazo = "listo";
      render();
      return;
    }
    if (!window.CloudDecks) {
      estadoMazo = "error";
      errorMazo = "La tienda no está disponible en este momento.";
      render();
      return;
    }
    estadoMazo = "agregando";
    render();
    window.CloudDecks.acquire(MAZO)
      .then(function () {
        estadoMazo = "listo";
      })
      .catch(function (error) {
        estadoMazo = "error";
        errorMazo = error && error.message ? error.message : "No se pudo agregar el mazo.";
      })
      .then(render);
  }

  /* ---------- Contenido de cada paso ---------- */

  function arteMago(clase) {
    var arte = window.MagoArte;
    if (!arte) return "";
    return '<div class="tour-arte ' + (clase || "") + '" aria-hidden="true">' + arte.escenaHtml() + arte.imagenHtml() + "</div>";
  }

  function estadoHtml() {
    if (estadoMazo === "listo") {
      return '<p class="tour-estado ok" role="status">' + ic("check", 16) + "Listo: ya está en Mis mazos.</p>";
    }
    if (estadoMazo === "error") {
      return '<p class="tour-estado error" role="status">' + esc(errorMazo) + "</p>" +
        '<button class="btn ghost tour-reintentar" type="button" data-tour="reintentar">' + ic("refresh", 16) + "<span>Reintentar</span></button>";
    }
    return '<p class="tour-estado" role="status"><span class="tour-girando" aria-hidden="true"></span>Agregando el mazo a tu cuenta…</p>';
  }

  function contenido() {
    var entry = entradaCatalogo() || {};
    var total = entry.cards ? entry.cards.length : 54;
    var arte = window.MagoArte;
    switch (paso) {
      case 0:
        return {
          arte: arteMago(),
          kicker: "Bienvenida",
          titulo: "¡Hola! Soy el mago de Studappy",
          texto: "Te muestro en un minuto cómo estudiar aquí. Si prefieres explorar por tu cuenta, puedes saltar el tour cuando quieras."
        };
      case 1:
        return {
          arte:
            '<div class="tour-arte tour-demo" aria-hidden="true">' +
              '<div class="tour-carta"><span class="tour-carta-kicker">Pregunta</span><p>¿Qué partícula del átomo tiene carga negativa?</p></div>' +
              '<div class="tour-notas">' +
                '<span class="btn-grade sabe">' + ic("check", 15) + "Lo sé</span>" +
                '<span class="btn-grade no">' + ic("x", 15) + "No lo sé</span>" +
                '<span class="btn-grade pendiente">' + ic("target", 15) + "Pendiente</span>" +
              "</div>" +
            "</div>",
          kicker: "Cómo se estudia",
          titulo: "Así se juega una carta",
          texto: "Lee la pregunta, piensa tu respuesta y muestra la carta. Luego marca <strong>Lo sé</strong>, <strong>No lo sé</strong> o <strong>Guardar como pendiente</strong>: las que no sabías vuelven al final de la ronda."
        };
      case 2:
        var iconos = (entry.sections || []).map(function (sec) {
          return '<span class="tour-icono" title="' + esc(sec.title) + '">' + (arte ? arte.icono(sec.icon, 32) : "") + "</span>";
        }).join("");
        return {
          arte: arteMago("tour-arte-bajo"),
          kicker: "Tu primer mazo",
          titulo: "Te regalo el Mazo del mago",
          texto: "Son " + total + " tarjetas de <strong>PAES Ciencias</strong> sobre estructura atómica, en 6 submazos que puedes jugar por separado.",
          extra: '<div class="tour-iconos" aria-hidden="true">' + iconos + "</div>" + estadoHtml()
        };
      case 3:
        return {
          arte:
            '<div class="tour-arte tour-demo" aria-hidden="true">' +
              '<div class="tour-botones">' +
                '<span class="btn btn-ia">' + ic("sparkle", 17) + "Generar con IA</span>" +
                '<span class="btn primary">' + ic("plus", 17) + "Nuevo mazo</span>" +
                '<span class="btn ghost">' + ic("layers", 17) + "Tienda</span>" +
              "</div>" +
            "</div>",
          kicker: "Tus mazos",
          titulo: "Crea los tuyos cuando quieras",
          texto: "Escribe tarjetas a mano con <strong>Nuevo mazo</strong>, conviértelas desde un PDF o una foto con <strong>Generar con IA</strong>, o busca más mazos en la <strong>Tienda</strong>."
        };
      default:
        return {
          arte: arteMago(),
          kicker: "Listo",
          titulo: "¡Todo listo para empezar!",
          texto: "Tu avance se guarda en tu cuenta, así que puedes seguir desde cualquier dispositivo. Elige un submazo y que empiece la magia."
        };
    }
  }

  function render() {
    if (!overlay) return;
    var c = contenido();
    var ultimo = paso === PASOS - 1;
    var deck = mazoDelMago();
    var puntos = "";
    for (var i = 0; i < PASOS; i++) {
      puntos += '<span class="tour-punto' + (i === paso ? " activo" : i < paso ? " hecho" : "") + '"></span>';
    }
    var acciones;
    if (ultimo) {
      acciones =
        '<button class="btn ghost" type="button" data-tour="ver-mazos">' + ic("cards", 17) + "<span>Ver Mis mazos</span></button>" +
        (deck
          ? '<button class="btn primary" type="button" data-tour="ir-mago" data-tour-foco>' + ic("play", 17) + "<span>Abrir el mazo</span></button>"
          : '<button class="btn primary" type="button" data-tour="ver-mazos" data-tour-foco>' + ic("check", 17) + "<span>Terminar</span></button>");
    } else {
      acciones =
        (paso > 0
          ? '<button class="btn ghost" type="button" data-tour="atras">Atrás</button>'
          : '<button class="btn ghost" type="button" data-tour="saltar">Saltar tour</button>') +
        '<button class="btn primary" type="button" data-tour="siguiente" data-tour-foco>' +
          "<span>" + (paso === 0 ? "Empezar" : "Siguiente") + "</span>" + ic("chevronRight", 17) +
        "</button>";
    }
    overlay.querySelector(".tour").innerHTML =
      '<header class="tour-cabeza">' +
        '<div class="tour-puntos" aria-label="Paso ' + (paso + 1) + " de " + PASOS + '">' + puntos + "</div>" +
        (ultimo ? "" : '<button class="link-btn tour-saltar" type="button" data-tour="saltar">Saltar</button>') +
      "</header>" +
      '<div class="tour-paso" data-paso="' + paso + '">' +
        c.arte +
        '<div class="tour-texto">' +
          '<span class="eyebrow">' + esc(c.kicker.toUpperCase()) + " · " + (paso + 1) + " DE " + PASOS + "</span>" +
          '<h2 id="tour-titulo">' + esc(c.titulo) + "</h2>" +
          "<p>" + c.texto + "</p>" +
          (c.extra || "") +
        "</div>" +
      "</div>" +
      '<footer class="tour-pie">' + acciones + "</footer>";
    var foco = overlay.querySelector("[data-tour-foco]");
    if (foco) foco.focus({ preventScroll: true });
  }

  /* ---------- Abrir y cerrar ---------- */

  function abrir() {
    if (overlay || !user()) return;
    paso = 0;
    errorMazo = "";
    estadoMazo = "pendiente";
    overlay = document.createElement("div");
    overlay.className = "tour-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "tour-titulo");
    overlay.innerHTML = '<div class="tour"></div>';
    document.body.appendChild(overlay);
    document.body.classList.add("tour-abierto");
    render();
    agregarMazo();
  }

  function cerrar(destino) {
    if (!overlay) return;
    marcarVisto();
    overlay.parentNode.removeChild(overlay);
    overlay = null;
    document.body.classList.remove("tour-abierto");
    if (destino && location.hash !== destino) location.hash = destino;
  }

  document.addEventListener("click", function (e) {
    if (!overlay) return;
    var b = e.target.closest("[data-tour]");
    if (!b || !overlay.contains(b)) return;
    var accion = b.getAttribute("data-tour");
    if (accion === "saltar") cerrar();
    else if (accion === "siguiente") { paso = Math.min(PASOS - 1, paso + 1); render(); }
    else if (accion === "atras") { paso = Math.max(0, paso - 1); render(); }
    else if (accion === "reintentar") agregarMazo();
    else if (accion === "ver-mazos") cerrar("#/");
    else if (accion === "ir-mago") {
      var deck = mazoDelMago();
      cerrar(deck ? "#/mazo/" + deck.id : "#/");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (!overlay) return;
    if (e.key === "Escape") {
      e.preventDefault();
      cerrar();
      return;
    }
    // El foco no sale del tour mientras está abierto.
    if (e.key === "Tab") {
      var focos = overlay.querySelectorAll("button:not([disabled]), a[href]");
      if (!focos.length) return;
      var primero = focos[0];
      var final = focos[focos.length - 1];
      if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); final.focus(); }
      else if (!e.shiftKey && document.activeElement === final) { e.preventDefault(); primero.focus(); }
      else if (!overlay.contains(document.activeElement)) { e.preventDefault(); primero.focus(); }
    }
  });

  /* ---------- Cuándo se abre ---------- */

  function apagadoEnLocal() {
    if (!LOCAL) return false;
    try { return localStorage.getItem("studappy-tour-off") === "1"; } catch (e) { return false; }
  }

  function rutaActual() {
    return location.hash.replace(/^#\/?/, "");
  }

  function revisar() {
    var u = user();
    if (!u || overlay) return;
    // A pedido: #/tour lo abre aunque la cuenta no sea nueva.
    if (rutaActual() === "tour") {
      if (window.history && window.history.replaceState) window.history.replaceState(null, "", "#/");
      abrir();
      return;
    }
    if (isDemo() || revisado[u.id] || apagadoEnLocal()) return;
    // Se abre sobre Mis mazos: si la página empezó en otra sección, espera a
    // que la persona vuelva al inicio.
    if (rutaActual() !== "") return;
    revisado[u.id] = true;
    if (!LOCAL && yaVisto(u)) return;
    setTimeout(function () {
      if (!overlay && user() && user().id === u.id && rutaActual() === "") abrir();
    }, 700);
  }

  if (window.Auth && window.Auth.onChange) {
    window.Auth.onChange(function () {
      if (!user() && overlay) cerrar();
      revisar();
    });
    if (window.Auth.ready) revisar();
  }
  window.addEventListener("hashchange", revisar);

  window.StudappyTour = { abrir: abrir };
})();
