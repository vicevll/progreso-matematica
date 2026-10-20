(function () {
  var app = document.getElementById("app");
  var reduceMotion = false;
  var MATH_OPTIONS = {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false }
    ],
    throwOnError: false
  };

  var session = null;
  var draft = null;
  var editingId = null;
  var editorStep = 1;
  var authReady = !!(window.Auth && window.Auth.ready);

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  // El avance vive en DeckStore: hay una copia por cuenta y se sincroniza.
  // "sabe" | "no" | "pendiente" | null
  function statusOf(deckId, cardId) {
    return window.DeckStore.getStatus(deckId, cardId);
  }

  // cards (opcional): solo esas tarjetas del mazo (por ejemplo, un submazo).
  function deckStats(deck, cards) {
    cards = cards || deck.cards;
    var done = 0;
    var pend = 0;
    cards.forEach(function (card) {
      var st = statusOf(deck.id, card.id);
      if (st === "sabe") done++;
      else if (st === "pendiente") pend++;
    });
    return { done: done, pend: pend, total: cards.length };
  }

  /* ---------- Mazos con submazos (por ahora, el Mazo del mago) ---------- */

  // Entrada del catálogo de la tienda de la que viene el mazo, si existe.
  function catalogoDe(deck) {
    if (!deck || deck.origen !== "tienda" || !deck.catalogId) return null;
    return (window.STORE_CATALOG || []).filter(function (item) { return item.id === deck.catalogId; })[0] || null;
  }

  // Submazos del mazo, o null si no tiene. Cada tarjeta pertenece al submazo
  // cuyo id es el comienzo del suyo ("m1-04" → m1).
  function submazosDe(deck) {
    var entry = catalogoDe(deck);
    if (!entry || !entry.sections || !entry.sections.length) return null;
    return entry.sections.map(function (sec, i) {
      return {
        id: sec.id,
        num: i + 1,
        title: sec.title,
        description: sec.description || "",
        icon: sec.icon || "atomo",
        cards: deck.cards.filter(function (card) { return String(card.id).split("-")[0] === sec.id; })
      };
    });
  }

  function submazo(deck, secId) {
    var subs = submazosDe(deck) || [];
    for (var i = 0; i < subs.length; i++) {
      if (subs[i].id === secId) return subs[i];
    }
    return null;
  }

  function temaDe(deck) {
    var entry = catalogoDe(deck);
    return (entry && entry.theme) || null;
  }

  function esMago(deck) {
    return temaDe(deck) === "mago";
  }

  // Mazos de estequiometría (se canjean con puntos): tema Aurora química.
  function esAurora(deck) {
    return temaDe(deck) === "aurora-quimica";
  }

  // Mazos por puntos con diseño propio (Aurora química, Gran Guerra). Usan la
  // misma tarjeta (clases aq-*) y cambian escena, ilustración e íconos.
  function temaMazo(deck) {
    var t = temaDe(deck);
    if (t === "aurora-quimica") return { clase: "aq", escena: escenaAuroraHtml, img: AQ_IMG, icono: iconoQuimica };
    if (t === "gran-guerra") return { clase: "gg", escena: escenaGuerraHtml, img: GG_IMG, icono: iconoGuerra };
    if (t === "raices-potencias") return { clase: "rp", escena: escenaPotenciasHtml, img: RP_IMG, icono: iconoPotencias };
    return null;
  }

  // Ícono de un submazo según el tema del mazo.
  function iconoSubmazo(deck, nombre, size) {
    var tm = temaMazo(deck);
    return (tm ? tm.icono : iconoQuimica)(nombre, size);
  }

  function iconoQuimica(nombre, size) {
    return '<img class="px-icono" src="img/quimica/' + esc(nombre) + '.svg" alt="" width="' + (size || 32) + '" height="' + (size || 32) + '" />';
  }

  var MAGO_IMG = '<img class="mago-img" src="img/mago-quimica-600.webp?v=1" srcset="img/mago-quimica-600.webp?v=1 600w, img/mago-quimica-1100.webp?v=1 1100w" sizes="(max-width: 720px) 80vw, 460px" alt="El mago de Studappy con un átomo y una poción" width="600" height="600" decoding="async" />';

  // Escena del mago: cielo nocturno, anillo mágico, química en pixel art y brillos.
  // [ícono, x %, y %, tamaño px, giro, duración s, desfase s]
  var QUIMICA_FLOTANTE = [
    ["atomo", 8, 14, 48, -8, 14, -2], ["matraz", 86, 10, 48, 10, 17, -6], ["tubo", 6, 70, 32, -18, 15, -9],
    ["molecula", 90, 64, 32, 12, 19, -4], ["tabla", 18, 40, 32, -6, 21, -12], ["bohr", 80, 38, 32, 0, 16, -7]
  ];
  var CHISPAS_MAGO = [[14, 26, 2, "c", 4.6, -1], [27, 12, 2, "v", 5.4, -3], [72, 20, 3, "c", 4.2, -2], [94, 34, 2, "v", 6, -4], [66, 78, 2, "c", 5.2, -1.5], [34, 84, 2, "v", 4.8, -2.6]];

  function escenaMagoHtml() {
    var flotan = QUIMICA_FLOTANTE.map(function (f) {
      return '<span class="mago-flota" style="--x:' + f[1] + "%;--y:" + f[2] + "%;--s:" + f[3] + "px;--r:" + f[4] + "deg;--t:" + f[5] + "s;--d:" + f[6] + 's">' + iconoQuimica(f[0], f[3]) + "</span>";
    }).join("");
    var chispas = CHISPAS_MAGO.map(function (c) {
      return '<span class="hf-chispa' + (c[3] === "v" ? " lila" : "") + '" style="--x:' + c[0] + "%;--y:" + c[1] + "%;--s:" + c[2] + "px;--t:" + c[4] + "s;--d:" + c[5] + 's"></span>';
    }).join("");
    return (
      '<div class="mago-escena" aria-hidden="true">' +
        '<span class="mago-aura"></span>' +
        '<svg class="mago-anillo" viewBox="0 0 400 400" focusable="false">' +
          '<circle cx="200" cy="200" r="196" fill="none" stroke="#7fd8ff" stroke-width="2" stroke-dasharray="2 8"/>' +
          '<circle cx="200" cy="200" r="168" fill="none" stroke="#9a80ff" stroke-width="1.2" stroke-dasharray="12 7 2 7"/>' +
        "</svg>" +
        flotan + chispas +
      "</div>"
    );
  }

  // La tienda (js/tienda.js) usa el mismo arte en su tarjeta compacta.
  window.MagoArte = {
    escenaHtml: escenaMagoHtml,
    imagenHtml: function () { return MAGO_IMG; },
    icono: iconoQuimica
  };

  /* ---------- Tema Aurora química ---------- */

  // Matraz en pixel art con líquido de aurora (img/aurora-quimica.svg).
  var AQ_IMG = '<img class="aq-img" src="img/aurora-quimica.svg?v=1" alt="Matraz con líquido de aurora, burbujas y un átomo" width="48" height="48" decoding="async" />';
  // [ícono, x %, y %, tamaño px, giro, duración s, desfase s]
  var AQ_FLOTA = [
    ["atomo", 6, 10, 34, -8, 15, -2], ["molecula", 86, 12, 30, 10, 18, -6], ["tubo", 8, 64, 28, -16, 16, -9],
    ["vaso", 88, 58, 28, 8, 20, -4], ["balanza", 74, 32, 24, 0, 17, -7], ["capsula", 20, 36, 22, -10, 21, -12]
  ];
  // Partículas que suben como burbujas: [x %, duración s, tamaño px, desfase s]
  var AQ_PARTICULAS = [
    [6, 9, 3, 0], [14, 12, 2, -4], [24, 10, 2, -7], [33, 14, 3, -2], [44, 11, 2, -9], [55, 13, 2, -5],
    [63, 9, 3, -1], [72, 12, 2, -6], [81, 15, 2, -3], [90, 10, 3, -8], [38, 16, 2, -11], [96, 13, 2, -12]
  ];

  // Cielo polar con cintas de aurora, partículas y química en pixel art.
  function escenaAuroraHtml() {
    var flotan = AQ_FLOTA.map(function (f) {
      return '<span class="aq-flota" style="--x:' + f[1] + "%;--y:" + f[2] + "%;--s:" + f[3] + "px;--r:" + f[4] + "deg;--t:" + f[5] + "s;--d:" + f[6] + 's">' + iconoQuimica(f[0], f[3]) + "</span>";
    }).join("");
    var particulas = AQ_PARTICULAS.map(function (q) {
      return '<span class="aq-part" style="--x:' + q[0] + "%;--t:" + q[1] + "s;--s:" + q[2] + "px;--d:" + q[3] + 's"></span>';
    }).join("");
    return (
      '<div class="aq-escena" aria-hidden="true">' +
        '<span class="aq-cinta c1"></span><span class="aq-cinta c2"></span><span class="aq-cinta c3"></span>' +
        '<span class="aq-brillo"></span>' +
        particulas + flotan +
      "</div>"
    );
  }

  function nivelAurora(entry) {
    return ({ pequeno: "Mazo pequeño", grande: "Mazo grande", premium: "Mazo premium" })[(entry && entry.nivel) || ""] || "";
  }

  window.AuroraQuimicaArte = {
    escenaHtml: escenaAuroraHtml,
    imagenHtml: function () { return AQ_IMG; },
    icono: iconoQuimica,
    nivel: nivelAurora
  };

  /* ---------- Tema Gran Guerra ---------- */

  function iconoGuerra(nombre, size) {
    return '<img class="px-icono" src="img/guerra/' + esc(nombre) + '.svg?v=1" alt="" width="' + (size || 32) + '" height="' + (size || 32) + '" />';
  }

  // Tanque Mark I en pixel art, sobre el barro y con amapolas (img/gran-guerra.svg).
  var GG_IMG = '<img class="aq-img gg-img" src="img/gran-guerra.svg?v=1" alt="Tanque de la Primera Guerra Mundial en pixel art, con amapolas" width="48" height="32" decoding="async" />';
  // [ícono, x %, y %, tamaño px, giro, duración s, desfase s]
  var GG_FLOTA = [
    ["zepelin", 78, 6, 34, 3, 22, -8], ["medalla", 88, 54, 26, 8, 19, -2], ["amapola", 6, 60, 26, -10, 15, -5],
    ["telegrama", 70, 30, 22, -6, 18, -10], ["casco", 20, 34, 22, 10, 20, -12]
  ];
  // Brasas que suben: [x %, duración s, tamaño px, desfase s]
  var GG_BRASAS = [
    [8, 8, 3, 0], [17, 11, 2, -3], [29, 9, 2, -6], [41, 12, 3, -2], [52, 10, 2, -8], [61, 13, 2, -4],
    [69, 9, 3, -1], [78, 11, 2, -7], [87, 14, 2, -5], [94, 10, 3, -9]
  ];

  // Cielo de batalla al anochecer: reflectores, una bengala que cae, brasas,
  // un biplano que cruza y el parapeto de sacos con alambre de púas.
  function escenaGuerraHtml() {
    var flotan = GG_FLOTA.map(function (f) {
      return '<span class="aq-flota gg-flota" style="--x:' + f[1] + "%;--y:" + f[2] + "%;--s:" + f[3] + "px;--r:" + f[4] + "deg;--t:" + f[5] + "s;--d:" + f[6] + 's">' + iconoGuerra(f[0], f[3]) + "</span>";
    }).join("");
    var brasas = GG_BRASAS.map(function (q) {
      return '<span class="gg-brasa" style="--x:' + q[0] + "%;--t:" + q[1] + "s;--s:" + q[2] + "px;--d:" + q[3] + 's"></span>';
    }).join("");
    return (
      '<div class="aq-escena gg-escena" aria-hidden="true">' +
        '<span class="gg-foco f1"></span><span class="gg-foco f2"></span>' +
        '<span class="gg-resplandor"></span>' +
        '<span class="gg-bengala"></span>' +
        '<span class="gg-avion">' + iconoGuerra("biplano", 34) + "</span>" +
        brasas + flotan +
        '<span class="gg-parapeto"></span><span class="gg-alambre"></span>' +
      "</div>"
    );
  }

  window.GranGuerraArte = {
    escenaHtml: escenaGuerraHtml,
    imagenHtml: function () { return GG_IMG; },
    icono: iconoGuerra,
    nivel: nivelAurora
  };

  /* ---------- Tema Raíces y potencias ---------- */

  function iconoPotencias(nombre, size) {
    return '<img class="px-icono" src="img/potencias/' + esc(nombre) + '.svg?v=1" alt="" width="' + (size || 32) + '" height="' + (size || 32) + '" />';
  }

  // Cubo de 2x2x2 cubitos bajo una raíz cúbica dorada (∛8 = 2), en pixel art.
  var RP_IMG = '<img class="aq-img rp-img" src="img/raices-potencias.svg?v=1" alt="Cubo de ocho cubitos bajo una raíz cúbica, en pixel art" width="58" height="44" decoding="async" />';
  // [ícono, x %, y %, tamaño px, giro, duración s, desfase s]
  var RP_FLOTA = [
    ["potencia", 6, 10, 30, -8, 15, -2], ["raiz", 84, 8, 30, 8, 18, -6], ["cubo", 7, 60, 26, -10, 16, -9],
    ["cuadrado", 88, 58, 24, 6, 20, -4], ["curva", 74, 32, 22, 0, 17, -7], ["pizarra", 19, 34, 22, -6, 21, -12]
  ];
  // Cuadraditos que suben, de 2, 4 y 8 px (potencias de 2): [x %, duración s, tamaño px, desfase s]
  var RP_CUADROS = [
    [5, 11, 2, 0], [13, 14, 4, -5], [24, 12, 2, -8], [35, 16, 8, -2], [46, 13, 2, -10], [57, 15, 4, -6],
    [66, 11, 2, -1], [76, 17, 8, -9], [85, 12, 4, -3], [94, 14, 2, -12]
  ];

  // Curvas de la escena, en un lienzo de 400 x 200: la exponencial y = 2^x
  // (crece cada vez más rápido) y la raíz y = √x (crece cada vez más lento).
  var RP_CURVAS = (function () {
    var exp = [], raiz = [];
    for (var i = 0; i <= 40; i++) {
      var x = i * 10;
      exp.push((i ? "L" : "M") + x + " " + (192 - Math.pow(2, -4 + 8 * x / 400) / 16 * 176).toFixed(1));
      raiz.push((i ? "L" : "M") + x + " " + (192 - Math.sqrt(16 * x / 400) / 4 * 118).toFixed(1));
    }
    return { exp: exp.join(""), raiz: raiz.join("") };
  })();

  // Papel milimetrado de noche: cuadrícula que se desliza, las dos curvas que
  // se dibujan solas (con un destello que las recorre), cuadraditos que suben
  // y símbolos de potencias y raíces flotando.
  function escenaPotenciasHtml() {
    var flotan = RP_FLOTA.map(function (f) {
      return '<span class="aq-flota rp-flota" style="--x:' + f[1] + "%;--y:" + f[2] + "%;--s:" + f[3] + "px;--r:" + f[4] + "deg;--t:" + f[5] + "s;--d:" + f[6] + 's">' + iconoPotencias(f[0], f[3]) + "</span>";
    }).join("");
    var cuadros = RP_CUADROS.map(function (q) {
      return '<span class="rp-cuadro" style="--x:' + q[0] + "%;--t:" + q[1] + "s;--s:" + q[2] + "px;--d:" + q[3] + 's"></span>';
    }).join("");
    return (
      '<div class="aq-escena rp-escena" aria-hidden="true">' +
        '<span class="rp-cuadricula"></span>' +
        '<span class="rp-brillo"></span>' +
        '<svg class="rp-curvas" viewBox="0 0 400 200" preserveAspectRatio="none" focusable="false">' +
          '<path class="rp-curva rp-halo rp-exp" d="' + RP_CURVAS.exp + '" pathLength="100" vector-effect="non-scaling-stroke"/>' +
          '<path class="rp-curva rp-halo rp-raiz" d="' + RP_CURVAS.raiz + '" pathLength="100" vector-effect="non-scaling-stroke"/>' +
          '<path class="rp-curva rp-exp" d="' + RP_CURVAS.exp + '" pathLength="100" vector-effect="non-scaling-stroke"/>' +
          '<path class="rp-curva rp-raiz" d="' + RP_CURVAS.raiz + '" pathLength="100" vector-effect="non-scaling-stroke"/>' +
          '<path class="rp-destello rp-exp" d="' + RP_CURVAS.exp + '" pathLength="100" vector-effect="non-scaling-stroke"/>' +
          '<path class="rp-destello rp-raiz" d="' + RP_CURVAS.raiz + '" pathLength="100" vector-effect="non-scaling-stroke"/>' +
        "</svg>" +
        cuadros + flotan +
      "</div>"
    );
  }

  window.RaicesPotenciasArte = {
    escenaHtml: escenaPotenciasHtml,
    imagenHtml: function () { return RP_IMG; },
    icono: iconoPotencias,
    nivel: nivelAurora
  };

  // Tarjeta de un mazo Aurora química en Mis mazos: franja con la aurora y el
  // matraz arriba, y un acceso por submazo.
  function auroraCardHtml(deck, index) {
    var tm = temaMazo(deck);
    var stats = deckStats(deck);
    var pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
    var entry = catalogoDe(deck) || {};
    var subs = submazosDe(deck) || [];
    // Submazos compactos, lado a lado (el nombre completo va en el título).
    var chips = subs.map(function (sub) {
      var st = deckStats(deck, sub.cards);
      var lleno = st.total && st.done === st.total;
      return '<a class="aq-sub' + (lleno ? " completo" : "") + '" href="#/mazo/' + deck.id + "/" + esc(sub.id) + '" title="Jugar ' + esc(sub.title) + '">' +
        tm.icono(sub.icon, 26) +
        '<span class="aq-sub-txt"><span class="aq-sub-num">Submazo ' + sub.num + "</span><strong>" + st.done + "/" + st.total + "</strong></span>" +
      "</a>";
    }).join("");
    var nivel = nivelAurora(entry);
    return (
      '<div class="deck-card owned deck-aq' + (tm.clase !== "aq" ? " deck-" + tm.clase : "") + ' reveal" style="--deck-color:' + esc(deck.color) + ";transition-delay:" + (index % 8) * 35 + 'ms">' +
        '<div class="aq-arte">' +
          tm.escena() + tm.img +
          (nivel ? '<span class="aq-nivel">' + esc(nivel) + "</span>" : "") +
          '<div class="deck-menu aq-menu">' +
            '<span class="deck-owned-badge aq-adquirido" title="Adquirido">' + ic("check", { size: 14 }) + '<span class="aq-oculto">Adquirido</span></span>' +
            '<button class="icon-btn danger" type="button" data-remove-store="' + deck.id + '" title="Eliminar de mi biblioteca" aria-label="Eliminar de mi biblioteca">' + ic("trash") + "</button>" +
          "</div>" +
        "</div>" +
        '<div class="aq-cuerpo">' +
          '<span class="eyebrow">' + esc((entry.subtitle || "").toUpperCase()) + "</span>" +
          '<a class="deck-link" href="#/mazo/' + deck.id + '" title="' + esc(deck.descripcion) + '">' +
            "<h3>" + esc(deck.nombre) + "</h3>" +
          "</a>" +
          '<div class="aq-chips">' + chips + "</div>" +
          '<div class="deck-foot">' +
            '<span class="deck-count">' + ic("cards", { size: 16 }) + stats.total + "</span>" +
            '<div class="mini-bar"><span style="width:' + pct + '%"></span></div>' +
            '<span class="deck-pct" title="Tarjetas que ya sabes">' + stats.done + "/" + stats.total + "</span>" +
          "</div>" +
          pendHtml(stats.pend, "deck-pend") +
        "</div>" +
      "</div>"
    );
  }

  // Tarjeta destacada del Mazo del mago en Mis mazos.
  function magoCardHtml(deck, index) {
    var stats = deckStats(deck);
    var pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
    var entry = catalogoDe(deck) || {};
    var subs = submazosDe(deck) || [];
    var chips = subs.map(function (sub) {
      var st = deckStats(deck, sub.cards);
      var lleno = st.total && st.done === st.total;
      return '<a class="mago-chip' + (lleno ? " completo" : "") + '" href="#/mazo/' + deck.id + "/" + esc(sub.id) + '" title="Jugar ' + esc(sub.title) + '">' +
        iconoQuimica(sub.icon, 32) +
        '<span class="mago-chip-txt"><span class="mago-chip-num">Submazo ' + sub.num + "</span><strong>" + esc(sub.title) + "</strong></span>" +
        '<span class="mago-chip-pct">' + st.done + "/" + st.total + "</span>" +
      "</a>";
    }).join("");
    return (
      '<div class="deck-card owned deck-mago reveal" style="--deck-color:' + esc(deck.color) + ";transition-delay:" + (index % 8) * 35 + 'ms">' +
        '<div class="mago-lado">' +
          escenaMagoHtml() +
          MAGO_IMG +
        "</div>" +
        '<div class="mago-cuerpo">' +
          '<div class="deck-top">' +
            '<span class="eyebrow">' + esc((entry.subtitle || "PAES Ciencias").toUpperCase()) + "</span>" +
            '<div class="deck-menu">' +
              '<span class="deck-owned-badge">' + ic("check", { size: 14 }) + "Adquirido</span>" +
              '<button class="icon-btn danger" type="button" data-remove-store="' + deck.id + '" title="Eliminar de mi biblioteca" aria-label="Eliminar de mi biblioteca">' + ic("trash") + "</button>" +
            "</div>" +
          "</div>" +
          '<a class="deck-link" href="#/mazo/' + deck.id + '">' +
            "<h3>" + esc(deck.nombre) + "</h3>" +
            "<p>" + esc(deck.descripcion) + "</p>" +
          "</a>" +
          '<div class="mago-chips">' + chips + "</div>" +
          '<div class="deck-foot">' +
            '<span class="deck-count">' + ic("cards", { size: 16 }) + stats.total + "</span>" +
            '<div class="mini-bar"><span style="width:' + pct + '%"></span></div>' +
            '<span class="deck-pct" title="Tarjetas que ya sabes">' + stats.done + "/" + stats.total + "</span>" +
          "</div>" +
          pendHtml(stats.pend, "deck-pend") +
          '<a class="btn primary mago-abrir" href="#/mazo/' + deck.id + '">' + ic("layers", { size: 17 }) + "<span>Ver los 6 submazos</span></a>" +
        "</div>" +
      "</div>"
    );
  }

  // Pantalla del mazo con submazos: se elige cuál jugar (o todo el mazo).
  var vistaSubmazos = null;

  function renderSubmazos(deck, subs) {
    vistaSubmazos = deck.id;
    var tm = temaMazo(deck);
    var aurora = !!tm;
    var extra = tm && tm.clase !== "aq" ? " " + tm.clase : "";
    var stats = deckStats(deck);
    var pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
    var entry = catalogoDe(deck) || {};
    var tiles = subs.map(function (sub, i) {
      var st = deckStats(deck, sub.cards);
      var p = st.total ? Math.round((st.done / st.total) * 100) : 0;
      return '<a class="submazo reveal' + (st.total && st.done === st.total ? " completo" : "") + '" href="#/mazo/' + deck.id + "/" + esc(sub.id) + '" style="transition-delay:' + i * 40 + 'ms">' +
        '<span class="submazo-icono">' + iconoSubmazo(deck, sub.icon, 48) + "</span>" +
        '<span class="submazo-num">Submazo ' + sub.num + "</span>" +
        "<h2>" + esc(sub.title) + "</h2>" +
        "<p>" + esc(sub.description) + "</p>" +
        '<span class="submazo-pie">' +
          '<span class="deck-count">' + ic("cards", { size: 15 }) + st.total + "</span>" +
          '<span class="mini-bar"><span style="width:' + p + '%"></span></span>' +
          '<span class="deck-pct">' + st.done + "/" + st.total + "</span>" +
        "</span>" +
        pendHtml(st.pend, "deck-pend") +
        '<span class="submazo-jugar">' + ic("play", { size: 15 }) + "Jugar</span>" +
      "</a>";
    }).join("");

    app.innerHTML =
      '<nav class="breadcrumb"><a href="#/">Mis mazos</a><span class="sep">' + ic("chevronRight", { size: 14 }) + "</span><span>" + esc(deck.nombre) + "</span></nav>" +
      '<section class="mago-portada' + (aurora ? " aq-portada" + (extra ? extra + "-portada" : "") : "") + ' reveal">' +
        '<div class="mago-portada-texto">' +
          '<span class="eyebrow">' + esc((entry.subtitle || "").toUpperCase()) + (aurora && nivelAurora(entry) ? " · " + esc(nivelAurora(entry).toUpperCase()) : "") + "</span>" +
          "<h1>" + esc(deck.nombre) + "</h1>" +
          "<p>Elige un submazo para estudiar por partes, o juega todas las cartas juntas.</p>" +
          '<div class="mago-progreso">' +
            '<div class="mini-bar"><span style="width:' + pct + '%"></span></div>' +
            "<span>" + stats.done + "/" + stats.total + " dominadas</span>" +
            pendHtml(stats.pend, "study-pend") +
          "</div>" +
          '<a class="btn primary lg" href="#/mazo/' + deck.id + '/todo">' + ic("play", { size: 18 }) + "<span>Jugar todo el mazo (" + stats.total + ")</span></a>" +
        "</div>" +
        // La escena (química flotante, anillo y brillos) va solo detrás del mago,
        // para que no se cruce con el texto.
        '<div class="mago-portada-img">' + (aurora ? tm.escena() + tm.img : escenaMagoHtml() + MAGO_IMG) + "</div>" +
      "</section>" +
      '<section class="submazos-grid' + (aurora ? " aq-submazos" + (extra ? extra + "-submazos" : "") : "") + '" aria-label="Submazos">' + tiles + "</section>";
    setupReveal();
  }

  // Migas de pan del estudio: Mis mazos › Mazo › Submazo.
  function migasEstudio(deck, sec, confirmar) {
    var attr = confirmar ? ' data-confirm-leave="true"' : "";
    var sep = '<span class="sep">' + ic("chevronRight", { size: 14 }) + "</span>";
    return '<nav class="breadcrumb"><a href="#/"' + attr + ">Mis mazos</a>" + sep +
      (submazosDe(deck)
        ? '<a href="#/mazo/' + deck.id + '"' + attr + ">" + esc(deck.nombre) + "</a>" + sep + "<span>" + esc(sec ? sec.title : "Todo el mazo") + "</span>"
        : "<span>" + esc(deck.nombre) + "</span>") +
      "</nav>";
  }

  // Tarjetas y título de la sesión actual (el submazo o el mazo completo).
  function alcanceSesion(deck) {
    var sec = session && session.seccion ? submazo(deck, session.seccion) : null;
    return { sec: sec, cards: sec ? sec.cards : deck.cards, titulo: sec ? sec.title : deck.nombre };
  }

  function pendHtml(n, className) {
    if (!n) return "";
    return '<span class="' + className + '" title="Tarjetas guardadas como pendientes">' + n + (n === 1 ? " pendiente" : " pendientes") + "</span>";
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escText(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function ic(name, opts) {
    return window.icon ? window.icon(name, opts) : "";
  }

  function showNotice(message) {
    var old = document.querySelector(".app-toast");
    if (old && old.parentNode) old.parentNode.removeChild(old);
    var toast = document.createElement("div");
    toast.className = "app-toast";
    toast.setAttribute("role", "status");
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 6000);
  }

  // Alternativas seguidas («A)», «B)», «C)»…) de una pregunta: en dos columnas.
  var OPCIONES_RE = /<p><strong>A\)<\/strong>(?:(?!<\/p>)[\s\S])*<\/p>(?:\s*<p><strong>[B-E]\)<\/strong>(?:(?!<\/p>)[\s\S])*<\/p>)+/g;

  function cardHtml(text) {
    if (window.mdToHtml) {
      return window.mdToHtml(text == null ? "" : String(text)).replace(OPCIONES_RE, function (m) {
        return '<div class="card-opciones">' + m + "</div>";
      });
    }
    return "<p>" + escText(text) + "</p>";
  }

  function renderMath(scope) {
    if (typeof window.renderMathInElement === "function") {
      try {
        window.renderMathInElement(scope, MATH_OPTIONS);
      } catch (e) {
        /* fórmula inválida: queda el texto original */
      }
    }
  }

  function shuffle(list) {
    var out = list.slice();
    for (var i = out.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = out[i];
      out[i] = out[j];
      out[j] = tmp;
    }
    return out;
  }

  function updateTopbarTag() {
    var tag = document.getElementById("topbar-tag");
    if (!tag) return;
    var decks = window.DeckStore.all();
    var cards = 0;
    decks.forEach(function (d) { cards += d.cards.length; });
    tag.textContent =
      decks.length + (decks.length === 1 ? " mazo · " : " mazos · ") +
      cards + (cards === 1 ? " tarjeta" : " tarjetas");
  }

  function isSignedIn() {
    return authReady && !!(window.Auth && window.Auth.isSignedIn && window.Auth.isSignedIn());
  }

  // Redibujos de fondo (sincronización, mazos de la tienda): lo que ya se
  // veía aparece de inmediato, sin repetir el fundido de entrada.
  var sinEntrada = false;
  function enSilencio(fn) {
    sinEntrada = true;
    try { fn(); } finally { sinEntrada = false; }
  }

  function setupReveal() {
    if (sinEntrada) {
      var quietos = document.querySelectorAll(".reveal:not(.is-visible)");
      Array.prototype.forEach.call(quietos, function (el) { el.classList.add("sin-entrada", "is-visible"); });
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          Array.prototype.forEach.call(quietos, function (el) { el.classList.remove("sin-entrada"); });
        });
      });
      return;
    }
    if (reduceMotion || typeof window.IntersectionObserver !== "function") {
      Array.prototype.forEach.call(document.querySelectorAll(".reveal"), function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    Array.prototype.forEach.call(document.querySelectorAll(".reveal:not(.is-visible)"), function (el) {
      observer.observe(el);
    });
  }

  function setupParallax() {
    var scene = document.querySelector(".parallax-scene");
    var items = scene ? scene.querySelectorAll("[data-parallax]") : [];
    if (!scene || !items.length || reduceMotion) return;

    var pointerX = 0;
    var pointerY = 0;
    var ticking = false;

    function update() {
      var scrollY = window.scrollY || 0;
      Array.prototype.forEach.call(items, function (item) {
        var depth = parseFloat(item.getAttribute("data-parallax")) || 0;
        var x = pointerX * depth;
        var y = pointerY * depth - scrollY * depth * 0.08;
        item.style.transform = "translate3d(" + x.toFixed(2) + "px," + y.toFixed(2) + "px,0)";
      });
      ticking = false;
    }

    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    window.addEventListener("pointermove", function (event) {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 36;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 24;
      requestUpdate();
    }, { passive: true });
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    requestUpdate();
  }

  // Flashcards de ejemplo para la cinta animada de la portada.
  var EJEMPLOS = [
    { tema: "Matemática", q: "¿Cuánto es $\\frac{3}{4}$ de 20?", a: "15" },
    { tema: "Biología", q: "¿Qué organelo produce la energía de la célula?", a: "La mitocondria" },
    { tema: "Historia", q: "¿En qué año se proclamó la Independencia de Chile?", a: "1818" },
    { tema: "Física", q: "¿Cómo se calcula la velocidad media?", a: "$v = \\frac{d}{t}$" },
    { tema: "Química", q: "¿Cuál es el símbolo químico del sodio?", a: "Na" },
    { tema: "Inglés", q: "¿Cómo se dice «aprender» en inglés?", a: "To learn" },
    { tema: "Matemática", q: "Simplifica $2^3 \\cdot 2^2$", a: "$2^5 = 32$" },
    { tema: "Lenguaje", q: "¿Qué es una metáfora?", a: "Una comparación implícita entre dos ideas" },
    { tema: "Geografía", q: "¿Cuál es el río más largo de Chile?", a: "El río Loa" },
    { tema: "Matemática", q: "¿Cuál es la pendiente de $y = 3x + 1$?", a: "$m = 3$" },
    { tema: "Biología", q: "¿Qué molécula guarda la información genética?", a: "El ADN" },
    { tema: "PAES M1", q: "El 20% de 150 es…", a: "30" }
  ];

  function ejemploHtml(ej, oculta) {
    return (
      '<article class="mq-card"' + (oculta ? ' aria-hidden="true"' : "") + ">" +
        '<span class="mq-tema">' + esc(ej.tema) + "</span>" +
        '<p class="mq-q">' + escText(ej.q) + "</p>" +
        '<p class="mq-a"><span class="mq-r">R:</span> ' + escText(ej.a) + "</p>" +
      "</article>"
    );
  }

  // Una fila de la cinta, en bucle infinito. Cada mitad lleva los ejemplos
  // repetidos varias veces para que siempre sea más ancha que la pantalla
  // (incluso en monitores muy anchos o con el zoom alejado); la segunda
  // mitad es idéntica, así el salto al reiniciar la animación no se nota.
  var CINTA_REPETICIONES = 2;

  function filaCinta(lista, reversa) {
    var tarjetas = "";
    for (var r = 0; r < CINTA_REPETICIONES; r++) {
      tarjetas += lista.map(function (ej) { return ejemploHtml(ej, r > 0); }).join("");
    }
    return (
      '<div class="marquee-row' + (reversa ? " reverse" : "") + '">' +
        '<div class="marquee-track">' +
          '<div class="marquee-set">' + tarjetas + "</div>" +
          '<div class="marquee-set" aria-hidden="true">' + tarjetas + "</div>" +
        "</div>" +
      "</div>"
    );
  }

  // Fondo del inicio: cartas pixel que flotan, brillos que titilan y un
  // anillo mágico, como el mundo del mago. Solo decoración.
  // [x %, y %, ancho px, giro, opacidad, duración s, desfase s]
  var CARTAS_FONDO = [
    [7, 14, 46, -14, 0.5, 19, -3], [17, 44, 62, 9, 0.55, 23, -11], [4, 66, 38, -6, 0.32, 17, -7],
    [25, 8, 30, 18, 0.3, 21, -2], [27, 70, 34, -20, 0.34, 25, -15],
    [89, 18, 54, 12, 0.52, 20, -5], [79, 48, 40, -10, 0.4, 24, -9], [94, 56, 64, 16, 0.46, 18, -13],
    [74, 10, 28, -22, 0.28, 22, -6], [86, 78, 36, 6, 0.32, 26, -1]
  ];
  // [x %, y %, tamaño del pixel, color, duración s, desfase s]
  var CHISPAS_FONDO = [
    [12, 30, 3, "c", 4.2, -1], [21, 22, 2, "v", 5.6, -3], [9, 50, 2, "c", 6.1, -2], [31, 36, 3, "v", 4.8, -4],
    [15, 80, 2, "c", 5.2, -0.5], [35, 58, 2, "c", 6.6, -5], [3, 32, 2, "v", 5, -2.5], [22, 60, 3, "c", 4.4, -3.5],
    [69, 28, 3, "c", 4.6, -2], [82, 34, 2, "v", 5.4, -1.5], [92, 40, 3, "c", 6.2, -4.5], [66, 62, 2, "v", 4.9, -0.8],
    [77, 70, 3, "c", 5.8, -3.2], [97, 76, 2, "c", 4.3, -1.2], [72, 20, 2, "v", 6.4, -5.5], [86, 6, 2, "c", 5.1, -2.8]
  ];

  function fondoMagicoHtml() {
    var cartas = CARTAS_FONDO.map(function (c) {
      // "bajo": cartas a la altura del texto; en celular se ocultan.
      return '<span class="hf-carta' + (c[1] >= 40 ? " bajo" : "") + '" style="--x:' + c[0] + "%;--y:" + c[1] + "%;--w:" + c[2] + "px;--r:" + c[3] + "deg;--o:" + c[4] + ";--t:" + c[5] + "s;--d:" + c[6] + 's"><b><i></i></b></span>';
    }).join("");
    var chispas = CHISPAS_FONDO.map(function (c) {
      // "centro": brillos en la columna del texto; en celular se ocultan.
      return '<span class="hf-chispa' + (c[3] === "v" ? " lila" : "") + (c[0] > 18 && c[0] < 82 ? " centro" : "") + '" style="--x:' + c[0] + "%;--y:" + c[1] + "%;--s:" + c[2] + "px;--t:" + c[4] + "s;--d:" + c[5] + 's"></span>';
    }).join("");
    return (
      '<div class="hero-fondo" aria-hidden="true">' +
        '<span class="hf-aura"></span>' +
        '<svg class="hf-anillo" viewBox="0 0 400 400" focusable="false">' +
          '<defs><linearGradient id="hf-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5fd8ff"/><stop offset="1" stop-color="#8a6bff"/></linearGradient></defs>' +
          '<circle cx="200" cy="200" r="197" fill="none" stroke="url(#hf-grad)" stroke-width="1.6" stroke-dasharray="1.6 7.4"/>' +
          '<circle cx="200" cy="200" r="176" fill="none" stroke="url(#hf-grad)" stroke-width="0.9" stroke-dasharray="12 6 2 6"/>' +
          '<circle cx="200" cy="200" r="150" fill="none" stroke="url(#hf-grad)" stroke-width="0.6" stroke-dasharray="1 9"/>' +
        "</svg>" +
        cartas + chispas +
      "</div>"
    );
  }

  // Ícono pixel del juego (img/juego) o de química.
  function pxIco(nombre, size) {
    if (window.Economia && window.Economia.px) return window.Economia.px(nombre, size);
    return '<img class="px-ico" src="img/juego/' + encodeURIComponent(nombre) + '.svg?v=1" width="' + size + '" height="' + size + '" alt="" decoding="async" />';
  }

  function renderLanding() {
    var tag = document.getElementById("topbar-tag");
    if (tag) tag.textContent = "Flashcards";
    // Solo en localhost (ver account.js): entrar sin Supabase para probar.
    var canDemo = !!(window.Auth && window.Auth.canDemo && window.Auth.canDemo());
    // «Probar gratis»: cuenta de prueba sin registro (account.js).
    var canTrial = !!(window.Auth && window.Auth.canTrial && window.Auth.canTrial());
    app.innerHTML =
      '<section class="landing-hero hero-mago">' +
        fondoMagicoHtml() +
        // El mago de Studappy: ilustración decorativa que se funde con el fondo.
        '<div class="hero-escena" aria-hidden="true">' +
          '<img class="hero-mago-img" src="img/mago-800.webp?v=1" srcset="img/mago-800.webp?v=1 800w, img/mago-1400.webp?v=1 1400w" sizes="(max-width: 860px) 96vw, 820px" alt="" width="800" height="800" decoding="async" fetchpriority="high" />' +
        "</div>" +
        '<div class="hero-copy">' +
          '<span class="eyebrow">ESTUDIO · FLASHCARDS</span>' +
          '<h1 class="wordmark">Studappy</h1>' +
          '<p>Convierte lo que necesitas aprender en tarjetas claras, visuales y fáciles de repasar.</p>' +
          '<div class="landing-actions' + (canTrial ? " con-prueba" : "") + '">' +
            (canTrial
              ? '<button class="btn prueba-cta landing-prueba" id="landing-prueba" type="button">' +
                  '<span class="prueba-cta-chip">GRATIS</span>' +
                  '<span class="prueba-cta-txt">Probar sin registrarme</span>' + ic("chevronRight", { size: 18 }) +
                "</button>"
              : "") +
            '<button class="btn ' + (canTrial ? "ghost" : "primary") + ' landing-login" id="landing-login" type="button">' + (window.GOOGLE_ICON || "") + "<span>Iniciar sesión con Google</span></button>" +
          "</div>" +
          (canTrial
            ? '<ul class="landing-prueba-lista" aria-label="Qué incluye la prueba">' +
                "<li>" + pxIco("chispa", 22) + "<span><b>1 mazo</b> con IA</span></li>" +
                "<li>" + pxIco("lapiz", 22) + "<span><b>1 mazo</b> a mano</span></li>" +
                "<li>" + pxIco("cofre", 22) + "<span>Tienda <b>para mirar</b></span></li>" +
              "</ul>" +
              "<small>Sin correo ni contraseña. Cuando quieras, guarda todo con Google.</small>"
            : "<small>Tu espacio de estudio se abre después de iniciar sesión.</small>") +
          (canDemo
            ? '<button class="landing-demo-link" id="landing-demo" type="button">' + ic("play", { size: 14 }) + "<span>Modo local (solo localhost, sin Supabase)</span></button>"
            : "") +
        "</div>" +
      "</section>" +
      '<section class="marquee" aria-label="Ejemplos de flashcards">' +
        filaCinta(EJEMPLOS, false) +
        filaCinta(EJEMPLOS.slice(6).concat(EJEMPLOS.slice(0, 6)), true) +
      "</section>" +
      '<section class="bento-grid" aria-label="Funciones de Studappy">' +
        '<article class="bento-box bento-wide"><span class="bento-icon">' + ic("cards", { size: 25 }) + '</span><div><span class="bento-label">Crea</span><h2>Mazos a tu medida</h2><p>Organiza preguntas y respuestas para cada materia, proyecto o examen.</p></div></article>' +
        '<article class="bento-box"><span class="bento-icon blue">' + ic("target", { size: 25 }) + '</span><span class="bento-label">Aprende</span><h2>Repasa con intención</h2><p>Marca cada tarjeta con "Lo sé", "No lo sé" o "Pendiente", y vuelve a lo que te falta.</p></article>' +
        '<article class="bento-box"><span class="bento-icon sky">' + ic("refresh", { size: 25 }) + '</span><span class="bento-label">Organiza</span><h2>Tu ritmo</h2><p>Muestra la respuesta cuando quieras y mezcla las cartas en cada ronda.</p></article>' +
        '<article class="bento-box bento-wide bento-note"><span class="bento-icon mint">' + ic("sparkle", { size: 25 }) + '</span><div><span class="bento-label">Tu biblioteca</span><h2>Tus mazos te siguen</h2><p>Tus mazos, los de la tienda y tu avance se guardan en tu cuenta: entra desde cualquier dispositivo y sigue donde quedaste.</p></div></article>' +
      "</section>";
    renderMath(app.querySelector(".marquee"));
    setupReveal();
  }

  /* ---------- Home / administración ---------- */

  function deckCardHtml(deck, index) {
    if (esMago(deck) && submazosDe(deck)) return magoCardHtml(deck, index);
    if (temaMazo(deck) && submazosDe(deck)) return auroraCardHtml(deck, index);
    var stats = deckStats(deck);
    var pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
    var menu = deck.origen === "tienda"
      ? '<span class="deck-owned-badge">' + ic("check", { size: 14 }) + "Adquirido</span>" +
        '<button class="icon-btn danger" type="button" data-remove-store="' + deck.id + '" title="Eliminar de mi biblioteca" aria-label="Eliminar de mi biblioteca">' + ic("trash") + "</button>"
      : (window.Perfil && window.Perfil.compartido(deck.id) ? '<span class="deck-compartido" title="Compartido en tu perfil">' + ic("share", { size: 13 }) + "Compartido</span>" : "") +
        '<button class="icon-btn" type="button" data-share="' + deck.id + '" title="Compartir mazo" aria-label="Compartir mazo">' + ic("share") + "</button>" +
        '<button class="icon-btn" type="button" data-edit="' + deck.id + '" title="Editar mazo">' + ic("edit") + "</button>" +
        '<button class="icon-btn danger" type="button" data-del="' + deck.id + '" title="Eliminar mazo">' + ic("trash") + "</button>";
    return (
      '<div class="deck-card' + (deck.origen === "tienda" ? " owned" : "") + (deck.catalogId === "paes-m1-numeros" ? " store-numbers" : "") + ' reveal" style="--deck-color:' + esc(deck.color) + ";transition-delay:" + (index % 8) * 35 + 'ms">' +
        '<div class="deck-top">' +
          '<span class="deck-dot" style="background:' + esc(deck.color) + '"></span>' +
          '<div class="deck-menu">' + menu + "</div>" +
        "</div>" +
        '<a class="deck-link" href="#/mazo/' + deck.id + '">' +
          "<h3>" + esc(deck.nombre) + "</h3>" +
          (deck.descripcion ? "<p>" + esc(deck.descripcion) + "</p>" : '<p class="deck-empty-desc">Sin descripción</p>') +
        "</a>" +
        '<div class="deck-foot">' +
          '<span class="deck-count">' + ic("cards", { size: 16 }) + stats.total + "</span>" +
          '<div class="mini-bar"><span style="width:' + pct + '%"></span></div>' +
          '<span class="deck-pct" title="Tarjetas que ya sabes">' + stats.done + "/" + stats.total + "</span>" +
        "</div>" +
        pendHtml(stats.pend, "deck-pend") +
      "</div>"
    );
  }

  // Mazos compartidos en el perfil (insignia «Compartido» en las tarjetas).
  var firmaCompartidosGrid = "";
  function firmaCompartidos() {
    var p = window.Perfil && window.Perfil.estado ? window.Perfil.estado() : null;
    return p && p.compartidos ? p.compartidos.map(function (c) { return c.id; }).sort().join(",") : "";
  }

  function renderGrid(filter) {
    var grid = document.getElementById("deck-grid");
    if (!grid) return;
    firmaCompartidosGrid = firmaCompartidos();
    var term = (filter || "").trim().toLowerCase();
    var decks = window.DeckStore.all().filter(function (deck) {
      if (!term) return true;
      return (deck.nombre + " " + deck.descripcion).toLowerCase().indexOf(term) !== -1;
    });
    var count = document.getElementById("deck-count-label");
    if (count) {
      count.textContent = decks.length + (decks.length === 1 ? " mazo" : " mazos");
    }
    grid.innerHTML = decks.length
      ? decks.map(deckCardHtml).join("")
      : '<p class="grid-empty">Sin resultados para esa búsqueda.</p>';
    setupReveal();
  }

  /* ---------- Modo de prueba (cuenta anónima, sin registro) ---------- */

  function esPrueba() {
    return !!(window.Auth && window.Auth.isTrial && window.Auth.isTrial());
  }

  // Mazo creado con el generador: sus tarjetas tienen ids "g<n>-...".
  function esMazoIA(deck) {
    return deck.origen !== "tienda" && !!deck.cards.length && /^g\d+-/.test(String(deck.cards[0].id));
  }

  // En la prueba: 1 mazo a mano y 1 con IA (este último lo cuenta también el servidor).
  function cuposPrueba() {
    var propios = window.DeckStore.all().filter(function (d) { return d.origen !== "tienda"; });
    var ia = propios.filter(esMazoIA).length;
    return { manual: propios.length - ia, ia: ia };
  }

  function limitePrueba(tipo) {
    var ia = tipo === "ia";
    if (!window.StudappyConfirm) return;
    window.StudappyConfirm.ask(
      ia
        ? "En el modo de prueba puedes crear 1 mazo con IA. Con tu cuenta gratis creas 2 cada día y te llevas los que ya hiciste."
        : "En el modo de prueba puedes tener 1 mazo hecho a mano. Con tu cuenta gratis creas todos los que quieras y te llevas este.",
      function () { if (window.Auth && window.Auth.crearCuenta) window.Auth.crearCuenta(); },
      {
        title: ia ? "Ya creaste tu mazo con IA de prueba" : "Ya tienes tu mazo de prueba",
        confirmLabel: "Crear cuenta gratis",
        cancelLabel: "Ahora no",
        confirmClass: "primary"
      }
    );
  }

  function pruebaBannerHtml() {
    var c = cuposPrueba();
    function cupo(icono, nombre, usados, total) {
      var lleno = usados >= total;
      return '<li class="prueba-cupo' + (lleno ? " lleno" : "") + '">' + pxIco(icono, 22) +
        "<span>" + nombre + "</span><b>" + Math.min(usados, total) + "/" + total + "</b></li>";
    }
    return (
      '<section class="prueba-banner" aria-label="Modo prueba">' +
        '<div class="prueba-banner-texto">' +
          '<span class="prueba-badge">' + pxIco("estrella", 16) + "Modo prueba</span>" +
          "<h2>Estás probando Studappy gratis</h2>" +
          "<p>Crea tu cuenta cuando quieras: te llevas tus mazos y tu avance.</p>" +
          '<ul class="prueba-cupos">' +
            cupo("lapiz", "Mazo a mano", c.manual, 1) +
            cupo("chispa", "Mazo con IA", c.ia, 1) +
            '<li class="prueba-cupo">' + pxIco("cofre", 22) + "<span>Tienda</span><b>solo mirar</b></li>" +
          "</ul>" +
        "</div>" +
        '<div class="prueba-banner-cta">' +
          '<button class="btn prueba-cta" type="button" data-crear-cuenta>' + (window.GOOGLE_ICON || "") + '<span class="prueba-cta-txt">Crear cuenta gratis</span></button>' +
          "<small>Mazos sin límite · 2 mazos con IA al día · misiones y puntos</small>" +
        "</div>" +
      "</section>"
    );
  }

  // Sin mazos todavía en la prueba: las dos formas de empezar, bien visibles.
  function pruebaVacioHtml() {
    return (
      '<div class="prueba-inicio">' +
        '<button class="prueba-opcion" data-abrir-generador type="button">' +
          '<span class="prueba-opcion-ico">' + pxIco("chispa", 40) + "</span>" +
          "<b>Genera un mazo con IA</b>" +
          "<span>Sube un PDF, una foto o pega texto y la IA hace las tarjetas.</span>" +
        "</button>" +
        '<button class="prueba-opcion" data-nuevo-mazo type="button">' +
          '<span class="prueba-opcion-ico">' + pxIco("lapiz", 40) + "</span>" +
          "<b>Crea un mazo a mano</b>" +
          "<span>Escribe tus preguntas y respuestas, con fórmulas si quieres.</span>" +
        "</button>" +
        '<a class="prueba-opcion" href="#/tienda">' +
          '<span class="prueba-opcion-ico">' + pxIco("cofre", 40) + "</span>" +
          "<b>Mira la tienda</b>" +
          "<span>Mazos listos, temas visuales y más (para usar con tu cuenta).</span>" +
        "</a>" +
      "</div>"
    );
  }

  function renderHome() {
    updateTopbarTag();
    firmaCompartidosGrid = firmaCompartidos();
    var decks = window.DeckStore.all();
    var totalDone = 0;
    var totalCards = 0;
    decks.forEach(function (deck) {
      var s = deckStats(deck);
      totalDone += s.done;
      totalCards += s.total;
    });
    var pct = totalCards ? Math.round((totalDone / totalCards) * 100) : 0;

    app.innerHTML =
      '<section class="admin-head">' +
        '<div class="admin-title">' +
          '<span class="eyebrow">PANEL DE MAZOS</span>' +
          "<h1>Mis mazos</h1>" +
          '<p class="admin-sub">Crea, edita y estudia tus flashcards.</p>' +
        "</div>" +
         '<div class="admin-actions">' +
          '<button class="btn btn-ia lg" id="open-generador" type="button">' + ic("sparkle") + '<span>Generar con IA</span></button>' +
          '<a class="btn ghost lg" href="#/tienda">' + ic("layers") + '<span>Tienda</span></a>' +
          '<button class="btn primary lg" id="new-deck" type="button">' + ic("plus") + '<span>Nuevo mazo</span></button>' +
        '</div>' +
      "</section>" +
      (esPrueba() ? pruebaBannerHtml() : "") +
      '<div id="eco-resumen" class="eco-resumen" hidden></div>' +
      (!decks.length && esPrueba() && !(window.SyncMazos && window.SyncMazos.cargando())
        ? pruebaVacioHtml()
        : !decks.length && window.SyncMazos && window.SyncMazos.cargando()
        ? '<div class="empty-state"><span class="empty-icon">' + ic("refresh", { size: 34 }) + "</span><h2>Cargando tus mazos…</h2><p>Los estamos trayendo desde tu cuenta.</p></div>"
        : decks.length
        ? '<div class="toolbar">' +
            '<label class="search">' + ic("search", { size: 18 }) +
              '<input type="search" id="deck-search" placeholder="Buscar mazo…" autocomplete="off" />' +
            "</label>" +
            '<div class="toolbar-stats">' +
              '<span id="deck-count-label">' + decks.length + (decks.length === 1 ? " mazo" : " mazos") + "</span>" +
              '<div class="mini-bar"><span style="width:' + pct + '%"></span></div>' +
              "<span>" + totalDone + "/" + totalCards + " dominadas</span>" +
            "</div>" +
          "</div>" +
          '<div class="deck-grid" id="deck-grid">' +
            decks.map(deckCardHtml).join("") +
          "</div>"
        : '<div class="empty-state">' +
            '<span class="empty-icon">' + ic("sparkle", { size: 34 }) + "</span>" +
            "<h2>Sin mazos todavía</h2>" +
            "<p>Crea tu primer mazo y empieza a estudiar en segundos.</p>" +
            '<button class="btn primary" id="new-deck" type="button">' + ic("plus") + "<span>Nuevo mazo</span></button>" +
            '<a class="btn ghost" href="#/tienda">' + ic("layers") + "<span>Explorar tienda</span></a>" +
          "</div>");

    if (window.Economia) window.Economia.pintarResumen();
    setupReveal();
  }

  /* ---------- Editor de mazo ---------- */

  function editorHtml() {
    return (
      '<div class="modal" role="dialog" aria-modal="true">' +
        '<header class="modal-head">' +
          "<div>" +
            '<span class="modal-kicker" id="ed-kicker">' + (editingId ? "Editar mazo" : "Nuevo mazo") + "</span>" +
            '<h2 id="ed-title">' + (editingId ? "Editar mazo" : "Crear mazo") + "</h2>" +
          "</div>" +
          '<button class="icon-btn" id="ed-close" type="button" title="Cerrar">' + ic("x") + "</button>" +
        "</header>" +
        '<div class="guided-progress" id="ed-progress" aria-label="Progreso de creación"></div>' +
        '<div class="modal-body" id="ed-content"></div>' +
        '<footer class="modal-foot">' +
          (editingId
            ? '<button class="btn danger ghost" id="ed-delete" type="button">' + ic("trash", { size: 16 }) + "<span>Eliminar</span></button>"
            : "<span></span>") +
          '<div class="modal-foot-right guided-nav">' +
            '<button class="btn ghost" id="ed-cancel" type="button">Cancelar</button>' +
            '<button class="btn ghost" id="ed-back" type="button">' + ic("arrowLeft", { size: 16 }) + "<span>Atrás</span></button>" +
            '<button class="btn primary" id="ed-next" type="button"><span>Continuar</span>' + ic("chevronRight", { size: 16 }) + "</button>" +
          "</div>" +
        "</footer>" +
      "</div>"
    );
  }

  function editorStepHtml() {
    if (editorStep === 1) {
      return (
        '<div class="guided-step">' +
          '<span class="guided-icon">' + ic("layers", { size: 24 }) + "</span>" +
          '<p class="guided-lead">Primero dale un nombre para saber qué vas a estudiar.</p>' +
          '<label class="field" id="ed-name-field"><span>Nombre del mazo</span>' +
            '<input id="ed-name" type="text" maxlength="60" placeholder="Ej. Vocabulario de inglés" value="' + esc(draft.nombre) + '" />' +
          "</label>" +
          '<p class="guided-tip">Puedes cambiarlo todo después.</p>' +
        "</div>"
      );
    }

    if (editorStep === 2) {
      return (
        '<div class="guided-step">' +
          '<span class="guided-icon">' + ic("cards", { size: 24 }) + "</span>" +
          '<p class="guided-lead">Ahora crea tarjetas. En cada una, escribe una pregunta y su respuesta.</p>' +
          '<div class="cards-editor">' +
            '<div class="cards-editor-head">' +
              '<span id="ed-cards-count">Tarjetas (' + draft.cards.length + ")</span>" +
              '<button class="btn ghost sm" id="ed-add" type="button">' + ic("plus", { size: 16 }) + "<span>Agregar</span></button>" +
            "</div>" +
            '<div class="cards-list" id="ed-cards"></div>' +
          "</div>" +
          '<p class="guided-error" id="ed-card-error">Agrega al menos una tarjeta antes de continuar.</p>' +
          '<p class="guided-tip">No necesitas terminar todo ahora. Puedes volver y editar el mazo cuando quieras.</p>' +
        "</div>"
      );
    }

    var swatches = window.DeckStore.PALETTE.map(function (color) {
      var active = color.toLowerCase() === (draft.color || "").toLowerCase();
      return (
        '<button class="swatch' + (active ? " active" : "") + '" type="button" data-color="' + color + '" ' +
        'style="background:' + color + '" aria-label="Color ' + color + '"></button>'
      );
    }).join("");
    var filled = draft.cards.filter(function (card) { return (card.q || "").trim() || (card.a || "").trim(); }).length;

    return (
      '<div class="guided-step">' +
        '<span class="guided-icon">' + ic("sparkle", { size: 24 }) + "</span>" +
        '<p class="guided-lead">Ya tienes la base. Puedes añadir una descripción y elegir un color para reconocerlo rápido.</p>' +
        '<label class="field"><span>Descripción <small>opcional</small></span>' +
          '<input id="ed-desc" type="text" maxlength="140" placeholder="Ej. Palabras para el examen del viernes" value="' + esc(draft.descripcion) + '" />' +
        "</label>" +
        '<div class="field"><span>Color</span><div class="swatches" id="ed-colors">' + swatches + "</div></div>" +
        '<div class="guided-review"><strong>Resumen</strong><span><b>' + filled + "</b> " + (filled === 1 ? "tarjeta lista" : "tarjetas listas") + " · " + esc(draft.nombre || "Mazo sin título") + "</span></div>" +
      "</div>"
    );
  }

  function renderEditorStep() {
    var overlay = document.getElementById("editor");
    if (!overlay) return;
    var content = overlay.querySelector("#ed-content");
    if (!content) return;
    content.innerHTML = editorStepHtml();
    if (editorStep === 2) renderEditorCards();

    var progressBox = overlay.querySelector("#ed-progress");
    if (progressBox) {
      progressBox.innerHTML = [1, 2, 3].map(function (step) {
        return '<span class="guided-dot' + (step === editorStep ? " active" : step < editorStep ? " complete" : "") + '">' + step + "</span>";
      }).join('<span class="guided-line"></span>');
    }
    var back = overlay.querySelector("#ed-back");
    var next = overlay.querySelector("#ed-next");
    if (back) back.style.display = editorStep === 1 ? "none" : "inline-flex";
    if (next) {
      next.innerHTML = editorStep === 3
        ? ic("check", { size: 16 }) + "<span>" + (editingId ? "Guardar cambios" : "Crear mazo") + "</span>"
        : "<span>Continuar</span>" + ic("chevronRight", { size: 16 });
    }
    var kicker = overlay.querySelector("#ed-kicker");
    var title = overlay.querySelector("#ed-title");
    var labels = ["Empecemos", "Contenido", "Último paso"];
    var titles = ["Nombra tu mazo", "Añade tus tarjetas", "Deja todo listo"];
    if (kicker) kicker.textContent = labels[editorStep - 1];
    if (title) title.textContent = titles[editorStep - 1];
    var focus = overlay.querySelector(editorStep === 1 ? "#ed-name" : editorStep === 3 ? "#ed-desc" : "#ed-cards textarea");
    if (focus) focus.focus();
  }

  function askAbandon(onConfirm) {
    if (window.StudappyConfirm) {
      window.StudappyConfirm.ask("Los cambios que no hayas guardado se perderán.", onConfirm);
    } else if (typeof onConfirm === "function") {
      onConfirm();
    }
  }

  function renderEditorCards() {
    var box = document.getElementById("ed-cards");
    if (!box) return;
    box.innerHTML = draft.cards.map(function (card, i) {
      return (
        '<div class="card-row" data-id="' + card.id + '">' +
          '<span class="card-row-num">' + (i + 1) + "</span>" +
          '<div class="card-row-fields">' +
            '<textarea rows="2" data-role="q" placeholder="Pregunta">' + escText(card.q) + "</textarea>" +
            '<textarea rows="2" data-role="a" placeholder="Respuesta">' + escText(card.a) + "</textarea>" +
          "</div>" +
          '<button class="icon-btn danger" type="button" data-remove="' + card.id + '" title="Quitar tarjeta">' + ic("trash", { size: 16 }) + "</button>" +
        "</div>"
      );
    }).join("");
    var count = document.getElementById("ed-cards-count");
    if (count) count.textContent = "Tarjetas (" + draft.cards.length + ")";
  }

  function openEditor(deck) {
    if (deck && deck.origen === "tienda") return;
    editingId = deck ? deck.id : null;
    draft = deck ? clone(deck) : window.DeckStore.create();

    var overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.id = "editor";
    overlay.innerHTML = editorHtml();
    document.body.appendChild(overlay);
    editorStep = 1;
    renderEditorStep();

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        askAbandon(closeEditor);
        return;
      }
      var color = e.target.closest(".swatch[data-color]");
      if (color) {
        draft.color = color.getAttribute("data-color");
        Array.prototype.forEach.call(overlay.querySelectorAll(".swatch"), function (s) {
          s.classList.toggle("active", s.getAttribute("data-color") === draft.color);
        });
        return;
      }
      var add = e.target.closest("#ed-add");
      if (add) {
        draft.cards.push(window.DeckStore.newCard());
        renderEditorCards();
        var rows = overlay.querySelectorAll(".card-row textarea");
        if (rows.length) rows[rows.length - 1].focus();
        return;
      }
      if (e.target.closest("#ed-back")) {
        if (editorStep > 1) {
          askAbandon(function () {
            editorStep--;
            renderEditorStep();
          });
        }
        return;
      }
      if (e.target.closest("#ed-next")) {
        if (editorStep === 1) {
          var nameInput = overlay.querySelector("#ed-name");
          if (!nameInput || !nameInput.value.trim()) {
            var nameField = overlay.querySelector("#ed-name-field");
            if (nameField) nameField.classList.add("invalid");
            if (nameInput) nameInput.focus();
            return;
          }
          draft.nombre = nameInput.value;
        }
        if (editorStep === 2) {
          var hasCard = draft.cards.some(function (card) {
            return (card.q || "").trim() && (card.a || "").trim();
          });
          if (!hasCard) {
            var cardError = overlay.querySelector("#ed-card-error");
            if (cardError) cardError.classList.add("visible");
            var firstCardField = overlay.querySelector("#ed-cards textarea");
            if (firstCardField) firstCardField.focus();
            return;
          }
        }
        if (editorStep < 3) {
          editorStep++;
          renderEditorStep();
        } else {
          saveEditor();
        }
        return;
      }
      var remove = e.target.closest("[data-remove]");
      if (remove) {
        var id = remove.getAttribute("data-remove");
        draft.cards = draft.cards.filter(function (c) { return c.id !== id; });
        if (!draft.cards.length) draft.cards.push(window.DeckStore.newCard());
        renderEditorCards();
        return;
      }
      if (e.target.closest("#ed-close") || e.target.closest("#ed-cancel")) {
        askAbandon(closeEditor);
        return;
      }
      if (e.target.closest("#ed-delete")) return deleteFromEditor();
    });

    overlay.addEventListener("input", function (e) {
      var nameInput = e.target.closest("#ed-name");
      if (nameInput) {
        draft.nombre = nameInput.value;
        var nameField = overlay.querySelector("#ed-name-field");
        if (nameField && nameInput.value.trim()) nameField.classList.remove("invalid");
        return;
      }
      var descInput = e.target.closest("#ed-desc");
      if (descInput) { draft.descripcion = descInput.value; return; }
      var field = e.target.closest(".card-row textarea");
      if (field) {
        var row = field.closest(".card-row");
        var card = draft.cards.filter(function (c) { return c.id === row.getAttribute("data-id"); })[0];
        if (card) card[field.getAttribute("data-role")] = field.value;
        var cardError = overlay.querySelector("#ed-card-error");
        if (cardError) cardError.classList.remove("visible");
      }
    });

    overlay.addEventListener("keydown", function (e) {
      if (e.key === "Escape") askAbandon(closeEditor);
    });
  }

  function closeEditor() {
    var overlay = document.getElementById("editor");
    draft = null;
    editingId = null;
    if (window.Motion) window.Motion.close(overlay);
    else if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
  }

  function enterRoute() {
    app.classList.remove("route-enter");
    void app.offsetWidth;
    app.classList.add("route-enter");
  }

  function saveEditor() {
    draft.nombre = (draft.nombre || "").trim() || "Mazo sin título";
    draft.descripcion = (draft.descripcion || "").trim();
    draft.cards = draft.cards.filter(function (c) {
      return (c.q && c.q.trim()) || (c.a && c.a.trim());
    });
    if (!draft.cards.length) draft.cards.push(window.DeckStore.newCard());
    var saved = window.DeckStore.save(draft);
    var wasNew = !editingId;
    closeEditor();
    if (session && session.deckId === saved.id) startSession(saved, "todas");
    route();
    if (wasNew) {
      location.hash = "#/mazo/" + saved.id;
    }
  }

  function deleteFromEditor() {
    if (!editingId) return;
    var deck = window.DeckStore.get(editingId);
    if (!deck || deck.origen === "tienda") return;
    if (window.StudappyConfirm) {
      window.StudappyConfirm.ask("El mazo y sus tarjetas se eliminarán de tu cuenta.", function () {
        window.DeckStore.remove(editingId);
        closeEditor();
        location.hash = "#/";
        route();
      });
    }
  }

  function requestDelete(id) {
    var deck = window.DeckStore.get(id);
    if (!deck || deck.origen === "tienda") return;
    if (window.StudappyConfirm) {
      window.StudappyConfirm.ask('El mazo "' + deck.nombre + '" y su avance se eliminarán de tu cuenta.', function () {
        window.DeckStore.remove(id);
        renderHome();
      });
    }
  }

  function requestRemoveStoreDeck(id) {
    var deck = window.DeckStore.get(id);
    if (!deck || deck.origen !== "tienda" || !window.CloudDecks) return;
    if (!window.StudappyConfirm) return;
    window.StudappyConfirm.ask(
      "El mazo y su avance se quitarán de tu biblioteca y de tu cuenta. El catálogo lo conservará y podrás añadirlo otra vez.",
      function () {
        window.CloudDecks.remove(deck.id)
          .then(function () {
            window.DeckStore.resetProgress(deck.id);
            renderHome();
          })
          .catch(function (error) {
            showNotice("No se pudo eliminar el mazo: " + (error.message || "error de conexión"));
          });
      },
      { title: "¿Eliminar mazo de tu biblioteca?", confirmLabel: "Eliminar mazo", cancelLabel: "Conservar" }
    );
  }

  /* ---------- Estudio ---------- */

  // filtro: "todas" o "pendientes" (las guardadas como pendientes).
  // seccion: id del submazo (solo sus tarjetas) o null para todo el mazo.
  function startSession(deck, filtro, seccion) {
    filtro = filtro === "pendientes" ? "pendientes" : "todas";
    var sec = seccion ? submazo(deck, seccion) : null;
    var order = (sec ? sec.cards : deck.cards)
      .filter(function (card) { return filtro === "todas" || statusOf(deck.id, card.id) === "pendiente"; })
      .map(function (card) { return card.id; });
    session = { deckId: deck.id, seccion: sec ? sec.id : null, filtro: filtro, order: order, pos: 0, flipped: false, prepared: false, shuffle: true };
  }

  // Avisa a js/analitica.js (si está cargado) de lo que pasa en el estudio.
  function avisarEstudio(fase, extra) {
    if (!session) return;
    var detalle = { fase: fase, deckId: session.deckId, seccion: session.seccion || null, filtro: session.filtro, total: session.order.length };
    if (extra) Object.keys(extra).forEach(function (k) { detalle[k] = extra[k]; });
    try { window.dispatchEvent(new CustomEvent("studappy:estudio", { detail: detalle })); } catch (e) { /* navegador antiguo */ }
  }

  var ETIQUETA_ESTADO = { sabe: "la sabes", no: "no la sabías", pendiente: "pendiente" };

  function findCard(deck, cardId) {
    for (var i = 0; i < deck.cards.length; i++) {
      if (deck.cards[i].id === cardId) return deck.cards[i];
    }
    return null;
  }

  function renderStudy() {
    var deck = window.DeckStore.get(session.deckId);
    if (!deck) return renderHome();
    if (!session.prepared) return renderPreparation(deck);
    var alcance = alcanceSesion(deck);
    var stats = deckStats(deck, alcance.cards);
    var pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;

    if (session.pos >= session.order.length) return renderSummary(deck, stats);

    var card = findCard(deck, session.order[session.pos]);
    if (!card) {
      session.pos++;
      return renderStudy();
    }
    var counter = session.pos + 1 + " / " + session.order.length;
    var estado = statusOf(deck.id, card.id);

    app.innerHTML =
      migasEstudio(deck, alcance.sec, true) +
      '<section class="study' + (esMago(deck) ? " study-mago" : temaMazo(deck) ? " study-aq" + (temaMazo(deck).clase !== "aq" ? " study-" + temaMazo(deck).clase : "") : "") + '">' +
        '<header class="study-head">' +
          "<h1>" + esc(alcance.titulo) + "</h1>" +
          '<div class="study-stats">' +
            '<div class="mini-bar"><span style="width:' + pct + '%"></span></div>' +
            "<span>" + stats.done + "/" + stats.total + " dominadas</span>" +
            pendHtml(stats.pend, "study-pend") +
            (deck.origen === "tienda" ? '<span class="deck-owned-badge study-owned">' + ic("check", { size: 14 }) + "Mazo de la tienda</span>" :
              '<button class="link-btn" id="fc-edit" type="button">' + ic("edit", { size: 15 }) + "Editar mazo</button>") +
          "</div>" +
        "</header>" +
        '<div class="flashcard' + (session.flipped ? " flipped" : "") + '" id="fc-card" aria-live="polite">' +
          '<div class="flashcard-inner">' +
            '<div class="flashcard-face flashcard-front">' +
              '<span class="flashcard-kicker">Pregunta</span>' +
              '<div class="flashcard-stage"><div class="flashcard-text">' + cardHtml(card.q) + "</div></div>" +
              '<span class="flashcard-hint">Piensa tu respuesta y luego muestra la carta</span>' +
            "</div>" +
            '<div class="flashcard-face flashcard-back">' +
              '<span class="flashcard-kicker">Respuesta</span>' +
              '<div class="flashcard-stage"><div class="flashcard-text">' + cardHtml(card.a) + "</div></div>" +
            "</div>" +
          "</div>" +
        "</div>" +
        '<div class="study-actions">' +
          '<button class="btn primary" id="fc-show" type="button" style="display:' + (session.flipped ? "none" : "inline-flex") + '">' + ic("refresh", { size: 16 }) + "<span>Mostrar carta</span></button>" +
        "</div>" +
        // Autoevaluación, como en Anki: aparece al mostrar la respuesta.
        '<div class="grade-actions" id="fc-grade" role="group" aria-label="¿Sabías la respuesta?"' + (session.flipped ? "" : " hidden") + ">" +
          '<button class="btn-grade sabe" type="button" data-grade="sabe">' + ic("check", { size: 17 }) + "<span>Lo sé</span><kbd>1</kbd></button>" +
          '<button class="btn-grade no" type="button" data-grade="no">' + ic("x", { size: 17 }) + "<span>No lo sé</span><kbd>2</kbd></button>" +
          '<button class="btn-grade pendiente" type="button" data-grade="pendiente">' + ic("target", { size: 17 }) + "<span>Guardar como pendiente</span><kbd>3</kbd></button>" +
        "</div>" +
        '<div class="study-foot">' +
          '<span class="study-counter">' + counter + (session.filtro === "pendientes" ? " · pendientes" : "") + (estado ? " · " + ETIQUETA_ESTADO[estado] : "") + "</span>" +
          '<div class="study-tools">' +
            '<button class="link-btn" id="fc-shuffle" type="button">' + ic("shuffle", { size: 15 }) + "Mezclar</button>" +
            '<button class="link-btn" id="fc-restart" type="button">' + ic("refresh", { size: 15 }) + "Reiniciar avance</button>" +
          "</div>" +
        "</div>" +
      "</section>";

    renderMath(document.querySelector(".flashcard-front .flashcard-stage"));
    renderMath(document.querySelector(".flashcard-back .flashcard-stage"));
    marcarScrollCartas();
    // Las fuentes de las fórmulas pueden llegar después y cambiar el alto.
    setTimeout(marcarScrollCartas, 500);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(marcarScrollCartas);
    setupReveal();
  }

  // Tarjetas largas: si queda texto más abajo, el borde inferior se difumina
  // (clase hay-mas) para que se note que se puede deslizar.
  function marcarScroll(stage) {
    if (!stage) return;
    stage.classList.toggle("hay-mas", stage.scrollHeight - stage.clientHeight - stage.scrollTop > 4);
  }

  function marcarScrollCartas() {
    var stages = document.querySelectorAll(".flashcard-stage");
    for (var i = 0; i < stages.length; i++) marcarScroll(stages[i]);
  }

  document.addEventListener("scroll", function (e) {
    if (e.target && e.target.classList && e.target.classList.contains("flashcard-stage")) marcarScroll(e.target);
  }, true);
  window.addEventListener("resize", marcarScrollCartas);

  function renderSummary(deck, stats) {
    avisarEstudio("fin");
    var alcance = alcanceSesion(deck);
    var allDone = stats.total > 0 && stats.done === stats.total;
    var detalle = "Sabes <strong>" + stats.done + " de " + stats.total + "</strong> tarjetas de <strong>" + esc(alcance.titulo) + "</strong>" +
      (stats.pend ? " y tienes <strong>" + stats.pend + (stats.pend === 1 ? " pendiente" : " pendientes") + "</strong>" : "") + ".";
    var conSubmazos = !!submazosDe(deck);

    app.innerHTML =
      migasEstudio(deck, alcance.sec, false) +
      '<section class="study-summary reveal">' +
        '<span class="summary-icon ' + (allDone ? "ok" : "") + '">' + ic(allDone ? "check" : "brain", { size: 40 }) + "</span>" +
        "<h1>" + (allDone ? (alcance.sec ? "¡Dominaste este submazo!" : "¡Sabes todo el mazo!") : "Ronda terminada") + "</h1>" +
        "<p>" + detalle + "</p>" +
        '<div class="summary-actions">' +
          (stats.pend
            ? '<button class="btn btn-pend" id="fc-review" type="button">' + ic("target", { size: 16 }) + "<span>Repasar " + stats.pend + (stats.pend === 1 ? " pendiente" : " pendientes") + "</span></button>"
            : "") +
          '<button class="btn ghost" id="fc-again" type="button">' + ic("refresh", { size: 16 }) + "<span>Repetir todo</span></button>" +
          (conSubmazos ? '<a class="btn ghost" href="#/mazo/' + deck.id + '">' + ic("cards", { size: 16 }) + "<span>Otros submazos</span></a>" : "") +
          '<a class="btn ghost" href="#/">' + ic("layers", { size: 16 }) + "<span>Volver a los mazos</span></a>" +
        "</div>" +
      "</section>";

    setupReveal();
  }

  function renderPreparation(deck) {
    var count = session.order.length;
    var alcance = alcanceSesion(deck);
    var pend = deckStats(deck, alcance.cards).pend;
    app.innerHTML =
      migasEstudio(deck, alcance.sec, true) +
      '<section class="study-ready reveal' + (temaMazo(deck) ? " study-aq" + (temaMazo(deck).clase !== "aq" ? " study-" + temaMazo(deck).clase : "") : "") + '">' +
        (alcance.sec
          ? '<span class="ready-icon ready-px">' + iconoSubmazo(deck, alcance.sec.icon, 48) + "</span>" +
            '<span class="eyebrow">SUBMAZO ' + alcance.sec.num + " · " + esc(deck.nombre.toUpperCase()) + "</span>"
          : '<span class="ready-icon">' + ic("sparkle", { size: 34 }) + "</span>" +
            '<span class="eyebrow">MODO DE ESTUDIO</span>') +
        "<h1>¿Todo listo?</h1>" +
        '<p>Vas a repasar <strong>' + count + (count === 1 ? " tarjeta" : " tarjetas") + (session.filtro === "pendientes" ? " pendientes" : "") + '</strong> de <strong>' + esc(alcance.titulo) + "</strong>." +
        "<br />Al ver la respuesta, marca si la sabías: las que no, vuelven al final de la ronda.</p>" +
        '<label class="shuffle-choice"><input id="study-shuffle" type="checkbox" checked /><span class="shuffle-check">' + ic("shuffle", { size: 17 }) + "</span><span><strong>Mezclar las cartas</strong><small>Cambia el orden en cada ronda.</small></span></label>" +
        '<div class="ready-actions">' +
          '<button class="btn primary lg" id="study-ready" type="button">' + ic("play", { size: 18 }) + "<span>Empezar</span></button>" +
          (session.filtro === "todas" && pend
            ? '<button class="btn btn-pend lg" id="study-pend" type="button">' + ic("target", { size: 18 }) + "<span>Solo pendientes (" + pend + ")</span></button>"
            : "") +
          (session.filtro === "pendientes"
            ? '<button class="btn ghost lg" id="study-all" type="button">' + ic("layers", { size: 18 }) + "<span>Todas las tarjetas</span></button>"
            : "") +
        "</div>" +
      "</section>";
    setupReveal();
  }

  function flip() {
    if (!session || session.pos >= session.order.length) return;
    session.flipped = !session.flipped;
    var card = document.getElementById("fc-card");
    if (card) {
      card.classList.toggle("flipped", session.flipped);
    }
    var show = document.getElementById("fc-show");
    var grade = document.getElementById("fc-grade");
    if (show) show.style.display = session.flipped ? "none" : "inline-flex";
    if (grade) grade.hidden = !session.flipped;
    marcarScrollCartas();   // la cara que se ve ahora recién tiene tamaño
  }

  // "sabe": dominada · "no": vuelve al final de esta ronda · "pendiente": se
  // guarda para repasarla después y no se repite ahora.
  function gradeCard(tipo) {
    if (!session || !session.flipped || session.pos >= session.order.length) return;
    var deck = window.DeckStore.get(session.deckId);
    if (!deck) return;
    var cardId = session.order[session.pos];
    window.DeckStore.setStatus(deck.id, cardId, tipo);
    avisarEstudio("respuesta", { tipo: tipo });
    if (tipo === "no") session.order.push(cardId);
    session.pos++;
    session.flipped = false;
    renderStudy();
  }

  /* ---------- Eventos globales ---------- */

  document.addEventListener("click", function (e) {
    var leave = e.target.closest("[data-confirm-leave]");
    if (leave) {
      e.preventDefault();
      if (window.StudappyConfirm) {
        window.StudappyConfirm.ask("Vas a salir del apartado de estudio.", function () {
          location.hash = leave.getAttribute("href") || "#/";
        });
      }
      return;
    }
    if (e.target.closest("#landing-login")) {
      if (window.SB && window.SB.beginLogin) window.SB.beginLogin();
      return;
    }
    if (e.target.closest("#landing-demo")) {
      if (window.Auth && window.Auth.startDemo) window.Auth.startDemo();
      return;
    }
    var probar = e.target.closest("#landing-prueba");
    if (probar) {
      if (probar.disabled || !window.Auth || !window.Auth.startTrial) return;
      probar.disabled = true;
      probar.classList.add("cargando");
      var txt = probar.querySelector(".prueba-cta-txt");
      if (txt) txt.textContent = "Preparando tu prueba…";
      window.Auth.startTrial().catch(function () {
        probar.disabled = false;
        probar.classList.remove("cargando");
        if (txt) txt.textContent = "Probar sin registrarme";
      });
      return;
    }
    if (e.target.closest("#new-deck, [data-nuevo-mazo]")) {
      if (esPrueba() && cuposPrueba().manual >= 1) { limitePrueba("manual"); return; }
      openEditor(null);
      return;
    }
    if (e.target.closest("#open-generador, [data-abrir-generador]")) {
      if (esPrueba() && cuposPrueba().ia >= 1) { limitePrueba("ia"); return; }
      openGenerador();
      return;
    }
    var share = e.target.closest("[data-share]");
    if (share) {
      e.preventDefault();
      if (window.Perfil) window.Perfil.abrirCompartir(share.getAttribute("data-share"));
      return;
    }
    var edit = e.target.closest("[data-edit]");
    if (edit) {
      e.preventDefault();
      openEditor(window.DeckStore.get(edit.getAttribute("data-edit")));
      return;
    }
    var del = e.target.closest("[data-del]");
    if (del) {
      e.preventDefault();
      requestDelete(del.getAttribute("data-del"));
      return;
    }
    var removeStore = e.target.closest("[data-remove-store]");
    if (removeStore) {
      e.preventDefault();
      requestRemoveStoreDeck(removeStore.getAttribute("data-remove-store"));
      return;
    }
    if (e.target.closest("#fc-edit") && session) {
      openEditor(window.DeckStore.get(session.deckId));
      return;
    }
    if ((e.target.closest("#study-pend") || e.target.closest("#study-all")) && session) {
      var deckP = window.DeckStore.get(session.deckId);
      if (deckP) startSession(deckP, e.target.closest("#study-pend") ? "pendientes" : "todas", session.seccion);
      renderStudy();
      return;
    }
    if (e.target.closest("#study-ready") && session) {
      var shuffleChoice = document.getElementById("study-shuffle");
      session.shuffle = !shuffleChoice || shuffleChoice.checked;
      if (session.shuffle) session.order = shuffle(session.order);
      session.prepared = true;
      avisarEstudio("inicio");
      renderStudy();
      return;
    }
    if (e.target.closest("#fc-show")) { flip(); return; }
    var gradeBtn = e.target.closest("[data-grade]");
    if (gradeBtn) { gradeCard(gradeBtn.getAttribute("data-grade")); return; }
    if (e.target.closest("#fc-shuffle") && session) {
      // Mezcla las tarjetas que quedan en la ronda (la actual incluida).
      var restantes = shuffle(session.order.slice(session.pos));
      session.order = session.order.slice(0, session.pos).concat(restantes);
      session.flipped = false;
      renderStudy();
      return;
    }
    if (e.target.closest("#fc-restart") && session) {
      var deckB = window.DeckStore.get(session.deckId);
      var secB = deckB && session.seccion ? submazo(deckB, session.seccion) : null;
      // En un submazo solo se reinicia el avance de sus tarjetas.
      if (secB) secB.cards.forEach(function (card) { window.DeckStore.setStatus(deckB.id, card.id, null); });
      else window.DeckStore.resetProgress(session.deckId);
      if (deckB) startSession(deckB, "todas", session.seccion);
      renderStudy();
      return;
    }
    if (e.target.closest("#fc-review") && session) {
      var deckC = window.DeckStore.get(session.deckId);
      if (deckC) startSession(deckC, "pendientes", session.seccion);
      renderStudy();
      return;
    }
    if (e.target.closest("#fc-again") && session) {
      var deckD = window.DeckStore.get(session.deckId);
      if (deckD) startSession(deckD, "todas", session.seccion);
      renderStudy();
      return;
    }
  });

  document.addEventListener("input", function (e) {
    if (e.target && e.target.id === "deck-search") renderGrid(e.target.value);
  });

  // Atajos: Espacio/Enter muestra la carta; 1 = Lo sé, 2 = No lo sé, 3 = Pendiente.
  document.addEventListener("keydown", function (e) {
    if (!session || document.getElementById("editor") || document.querySelector(".confirm-overlay, .generador-overlay")) return;
    if (!session.prepared || session.pos >= session.order.length) return;
    if (e.target && e.target.closest && e.target.closest("input, textarea, select")) return;
    if (!session.flipped) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        flip();
      }
      return;
    }
    var tipo = { "1": "sabe", "2": "no", "3": "pendiente" }[e.key];
    if (tipo) {
      e.preventDefault();
      gradeCard(tipo);
    }
  });

  /* ---------- Generador ---------- */

  // El generador es un modal (como el editor), no una ruta: así la dirección
  // no queda pegada en #/generador al cerrarlo y los re-render del router
  // (cambios de sesión, sincronización) no abren un segundo wizard.
  function openGenerador() {
    if (window.Generador) window.Generador.open();
    else showNotice("El generador aún no está disponible.");
  }

  /* ---------- Router ---------- */

  function route() {
    var mainNav = document.getElementById("main-nav");
    if (mainNav) mainNav.hidden = !isSignedIn();
    // Perfil público de otra persona (#/u/CometaAzul-4821[/mazo]): se ve
    // también sin sesión, para abrir enlaces compartidos.
    var partesU = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (partesU[0] === "u" && partesU[1]) {
      session = null;
      vistaSubmazos = null;
      if (window.Perfil) window.Perfil.renderPublico(app, partesU[1], partesU[2]);
      else app.innerHTML = '<p class="store-setup-note">Los perfiles aún no están disponibles.</p>';
      window.scrollTo(0, 0);
      return;
    }
    if (!isSignedIn()) {
      session = null;
      if (window.Generador && window.Generador.isOpen && window.Generador.isOpen()) window.Generador.close();
      renderLanding();
      window.scrollTo(0, 0);
      return;
    }
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/").filter(Boolean);
    vistaSubmazos = null;
    if (parts[0] === "generador") {
      // Enlaces antiguos a #/generador: se reemplaza la dirección por el
      // inicio (sin disparar hashchange ni sumar historial) y se abre el modal.
      session = null;
      if (window.history && window.history.replaceState) window.history.replaceState(null, "", "#/");
      renderHome();
      openGenerador();
    } else if (parts[0] === "tienda") {
      session = null;
      if (window.Tienda) window.Tienda.render(app);
      else app.innerHTML = '<p class="store-setup-note">La tienda aún no está disponible.</p>';
    } else if (parts[0] === "perfil") {
      session = null;
      if (window.Perfil) window.Perfil.render(app);
      else app.innerHTML = '<p class="store-setup-note">El perfil aún no está disponible.</p>';
    } else if (parts[0] === "misiones") {
      session = null;
      if (window.Economia) window.Economia.render(app);
      else app.innerHTML = '<p class="store-setup-note">Las misiones aún no están disponibles.</p>';
    } else if (parts[0] === "mazo" && parts[1]) {
      var deck = window.DeckStore.get(parts[1]);
      if (!deck) return renderHome();
      var subs = submazosDe(deck);
      // Mazo con submazos: sin submazo elegido se muestra el selector.
      // "#/mazo/<id>/<submazo>" juega uno; "#/mazo/<id>/todo", el mazo completo.
      var secId = subs && parts[2] && parts[2] !== "todo" && submazo(deck, parts[2]) ? parts[2] : null;
      if (subs && !secId && parts[2] !== "todo") {
        session = null;
        renderSubmazos(deck, subs);
        window.scrollTo(0, 0);
        return;
      }
      if (!session || session.deckId !== deck.id || (session.seccion || null) !== secId) startSession(deck, "todas", secId);
      renderStudy();
    } else {
      session = null;
      renderHome();
    }
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", function () {
    route();
    enterRoute();
  });
  if (window.Auth && window.Auth.onChange) {
    var cuentaVista;
    window.Auth.onChange(function () {
      // Solo se redibuja si cambió la cuenta (entrar, salir, modo prueba).
      var u = window.Auth.user ? window.Auth.user() : null;
      var cuenta = u ? String(u.id) : "";
      if (authReady && cuenta === cuentaVista) return;
      cuentaVista = cuenta;
      authReady = true;
      route();
    });
  }
  // Cuando la sincronización trae cambios (u ocurre la primera carga), se
  // redibuja Mis mazos conservando lo escrito en el buscador.
  // Si se abrió el enlace de un mazo antes de que llegara desde la cuenta, se
  // mostró el inicio: cuando el mazo aparece, se abre.
  function retryDeckRoute() {
    var parts = location.hash.replace(/^#\/?/, "").split("/");
    if (parts[0] !== "mazo" || !parts[1]) return false;
    var enPantalla = (session && session.deckId === parts[1]) || vistaSubmazos === parts[1];
    if (!enPantalla && window.DeckStore.get(parts[1])) route();
    return true;
  }

  function refreshHomeFromSync() {
    if (!isSignedIn()) return;
    if (retryDeckRoute()) return;
    var hash = location.hash.replace(/^#\/?/, "").split("/")[0];
    if (hash) return;
    var search = document.getElementById("deck-search");
    var term = search ? search.value : "";
    var hadFocus = search && document.activeElement === search;
    enSilencio(function () {
      renderHome();
      var again = document.getElementById("deck-search");
      if (again && term) {
        again.value = term;
        renderGrid(term);
      }
      if (again && hadFocus) again.focus();
    });
  }
  window.addEventListener("studappy:mazos-sincronizados", refreshHomeFromSync);
  // Solo se redibuja si cambió qué mazos se comparten (no en cada carga del perfil).
  window.addEventListener("studappy:perfil", function () {
    if (document.getElementById("deck-grid") && firmaCompartidos() !== firmaCompartidosGrid) refreshHomeFromSync();
  });
  // "Cargando tus mazos…" solo se ve cuando todavía no hay ninguno: si ya hay
  // mazos en pantalla, empezar o terminar de cargar no cambia nada.
  window.addEventListener("studappy:mazos-cargando", function () {
    if (!window.DeckStore.all().length || document.querySelector("#app .empty-state")) refreshHomeFromSync();
  });

  window.addEventListener("studappy:cloud-decks-changed", function () {
    if (!isSignedIn()) return;
    if (retryDeckRoute()) return;
    var hash = location.hash.replace(/^#\/?/, "").split("/")[0];
    if (!hash) refreshHomeFromSync();
    else if (hash === "tienda") {
      var y = window.scrollY;
      enSilencio(route);
      window.scrollTo(0, y);
    }
  });
  window.StudappyApp = {
    renderMath: renderMath,
    cardHtml: cardHtml,
    cuposPrueba: cuposPrueba,
    limitePrueba: limitePrueba,
    esPrueba: esPrueba,
    route: route
  };

  setupParallax();
  route();
})();
