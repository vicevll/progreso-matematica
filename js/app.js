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

  function deckStats(deck) {
    var done = 0;
    var pend = 0;
    deck.cards.forEach(function (card) {
      var st = statusOf(deck.id, card.id);
      if (st === "sabe") done++;
      else if (st === "pendiente") pend++;
    });
    return { done: done, pend: pend, total: deck.cards.length };
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

  function cardHtml(text) {
    if (window.mdToHtml) return window.mdToHtml(text == null ? "" : String(text));
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

  function setupReveal() {
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

  function renderLanding() {
    var tag = document.getElementById("topbar-tag");
    if (tag) tag.textContent = "Flashcards";
    // Solo en localhost (ver account.js): entrar sin Google para probar.
    var canDemo = !!(window.Auth && window.Auth.canDemo && window.Auth.canDemo());
    app.innerHTML =
      '<section class="landing-hero">' +
        '<div class="hero-copy">' +
          '<span class="eyebrow">ESTUDIO · FLASHCARDS</span>' +
          '<h1 class="wordmark">Studappy</h1>' +
          '<p>Convierte lo que necesitas aprender en tarjetas claras, visuales y fáciles de repasar.</p>' +
          '<div class="landing-actions">' +
            '<button class="btn primary landing-login" id="landing-login" type="button">' + (window.GOOGLE_ICON || "") + "<span>Iniciar sesión con Google</span></button>" +
            (canDemo ? '<button class="btn ghost" id="landing-demo" type="button">' + ic("play", { size: 16 }) + "<span>Entrar en modo prueba</span></button>" : "") +
          "</div>" +
          (canDemo
            ? "<small>Modo prueba: solo aparece en localhost, no usa tu cuenta y la tienda queda desactivada.</small>"
            : "<small>Tu espacio de estudio se abre después de iniciar sesión.</small>") +
        "</div>" +
        '<div class="hero-art" aria-hidden="true">' +
          '<span class="hero-halo"></span>' +
          '<img class="hero-logo" src="img/hero-logo.webp?v=2" alt="" width="420" height="420" />' +
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
    var stats = deckStats(deck);
    var pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
    var menu = deck.origen === "tienda"
      ? '<span class="deck-owned-badge">' + ic("check", { size: 14 }) + "Adquirido</span>" +
        '<button class="icon-btn danger" type="button" data-remove-store="' + deck.id + '" title="Eliminar de mi biblioteca" aria-label="Eliminar de mi biblioteca">' + ic("trash") + "</button>"
      : '<button class="icon-btn" type="button" data-edit="' + deck.id + '" title="Editar mazo">' + ic("edit") + "</button>" +
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

  function renderGrid(filter) {
    var grid = document.getElementById("deck-grid");
    if (!grid) return;
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

  function renderHome() {
    updateTopbarTag();
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
      (!decks.length && window.SyncMazos && window.SyncMazos.cargando()
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
  function startSession(deck, filtro) {
    filtro = filtro === "pendientes" ? "pendientes" : "todas";
    var order = deck.cards
      .filter(function (card) { return filtro === "todas" || statusOf(deck.id, card.id) === "pendiente"; })
      .map(function (card) { return card.id; });
    session = { deckId: deck.id, filtro: filtro, order: order, pos: 0, flipped: false, prepared: false, shuffle: true };
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
    var stats = deckStats(deck);
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
      '<nav class="breadcrumb"><a href="#/" data-confirm-leave="true">Mis mazos</a><span class="sep">' + ic("chevronRight", { size: 14 }) + "</span><span>" + esc(deck.nombre) + "</span></nav>" +
      '<section class="study">' +
        '<header class="study-head">' +
          "<h1>" + esc(deck.nombre) + "</h1>" +
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
    setupReveal();
  }

  function renderSummary(deck, stats) {
    var allDone = stats.total > 0 && stats.done === stats.total;
    var detalle = "Sabes <strong>" + stats.done + " de " + stats.total + "</strong> tarjetas de <strong>" + esc(deck.nombre) + "</strong>" +
      (stats.pend ? " y tienes <strong>" + stats.pend + (stats.pend === 1 ? " pendiente" : " pendientes") + "</strong>" : "") + ".";

    app.innerHTML =
      '<nav class="breadcrumb"><a href="#/">Mis mazos</a><span class="sep">' + ic("chevronRight", { size: 14 }) + "</span><span>" + esc(deck.nombre) + "</span></nav>" +
      '<section class="study-summary reveal">' +
        '<span class="summary-icon ' + (allDone ? "ok" : "") + '">' + ic(allDone ? "check" : "brain", { size: 40 }) + "</span>" +
        "<h1>" + (allDone ? "¡Sabes todo el mazo!" : "Ronda terminada") + "</h1>" +
        "<p>" + detalle + "</p>" +
        '<div class="summary-actions">' +
          (stats.pend
            ? '<button class="btn btn-pend" id="fc-review" type="button">' + ic("target", { size: 16 }) + "<span>Repasar " + stats.pend + (stats.pend === 1 ? " pendiente" : " pendientes") + "</span></button>"
            : "") +
          '<button class="btn ghost" id="fc-again" type="button">' + ic("refresh", { size: 16 }) + "<span>Repetir todo</span></button>" +
          '<a class="btn ghost" href="#/">' + ic("layers", { size: 16 }) + "<span>Volver a los mazos</span></a>" +
        "</div>" +
      "</section>";

    setupReveal();
  }

  function renderPreparation(deck) {
    var count = session.order.length;
    var pend = deckStats(deck).pend;
    app.innerHTML =
      '<nav class="breadcrumb"><a href="#/" data-confirm-leave="true">Mis mazos</a><span class="sep">' + ic("chevronRight", { size: 14 }) + "</span><span>" + esc(deck.nombre) + "</span></nav>" +
      '<section class="study-ready reveal">' +
        '<span class="ready-icon">' + ic("sparkle", { size: 34 }) + "</span>" +
        '<span class="eyebrow">MODO DE ESTUDIO</span>' +
        "<h1>¿Todo listo?</h1>" +
        '<p>Vas a repasar <strong>' + count + (count === 1 ? " tarjeta" : " tarjetas") + (session.filtro === "pendientes" ? " pendientes" : "") + '</strong> de <strong>' + esc(deck.nombre) + "</strong>." +
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
  }

  // "sabe": dominada · "no": vuelve al final de esta ronda · "pendiente": se
  // guarda para repasarla después y no se repite ahora.
  function gradeCard(tipo) {
    if (!session || !session.flipped || session.pos >= session.order.length) return;
    var deck = window.DeckStore.get(session.deckId);
    if (!deck) return;
    var cardId = session.order[session.pos];
    window.DeckStore.setStatus(deck.id, cardId, tipo);
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
    if (e.target.closest("#new-deck")) {
      openEditor(null);
      return;
    }
    if (e.target.closest("#open-generador")) {
      openGenerador();
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
      if (deckP) startSession(deckP, e.target.closest("#study-pend") ? "pendientes" : "todas");
      renderStudy();
      return;
    }
    if (e.target.closest("#study-ready") && session) {
      var shuffleChoice = document.getElementById("study-shuffle");
      session.shuffle = !shuffleChoice || shuffleChoice.checked;
      if (session.shuffle) session.order = shuffle(session.order);
      session.prepared = true;
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
      window.DeckStore.resetProgress(session.deckId);
      var deckB = window.DeckStore.get(session.deckId);
      if (deckB) startSession(deckB, "todas");
      renderStudy();
      return;
    }
    if (e.target.closest("#fc-review") && session) {
      var deckC = window.DeckStore.get(session.deckId);
      if (deckC) startSession(deckC, "pendientes");
      renderStudy();
      return;
    }
    if (e.target.closest("#fc-again") && session) {
      var deckD = window.DeckStore.get(session.deckId);
      if (deckD) startSession(deckD, "todas");
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
    if (!isSignedIn()) {
      session = null;
      if (window.Generador && window.Generador.isOpen && window.Generador.isOpen()) window.Generador.close();
      renderLanding();
      window.scrollTo(0, 0);
      return;
    }
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/").filter(Boolean);
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
    } else if (parts[0] === "mazo" && parts[1]) {
      var deck = window.DeckStore.get(parts[1]);
      if (!deck) return renderHome();
      if (!session || session.deckId !== deck.id) startSession(deck, "todas");
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
    window.Auth.onChange(function () {
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
    if ((!session || session.deckId !== parts[1]) && window.DeckStore.get(parts[1])) route();
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
    renderHome();
    var again = document.getElementById("deck-search");
    if (again && term) {
      again.value = term;
      renderGrid(term);
    }
    if (again && hadFocus) again.focus();
  }
  window.addEventListener("studappy:mazos-sincronizados", refreshHomeFromSync);
  window.addEventListener("studappy:mazos-cargando", refreshHomeFromSync);

  window.addEventListener("studappy:cloud-decks-changed", function () {
    if (!isSignedIn()) return;
    if (retryDeckRoute()) return;
    var hash = location.hash.replace(/^#\/?/, "").split("/")[0];
    if (!hash || hash === "tienda") route();
  });
  setupParallax();
  route();
})();
