// Generador de mazos con IA.
// Wizard de 4 pasos: origen → markdown → tarjetas → crear mazo.
(function () {
  var overlay = null;
  var step = 1;
  var MAX_TARJETAS = 20; // máximo de tarjetas por mazo generado con IA (la función aplica el mismo límite)
  // Cada llamada a la IA recibe un número; si el wizard se cierra o se
  // retrocede, se incrementa y las respuestas antiguas se ignoran.
  var requestId = 0;
  var state = freshState();

  function freshState() {
    return { markdown: "", cards: [], nombre: "", descripcion: "", color: "#2f80ed", status: "", statusError: false, busy: false, count: 10, sesion: nuevaSesion() };
  }

  // Identifica este mazo ante el límite de IA: abrir el generador de nuevo es
  // otro mazo; regenerar o cambiar de archivo dentro del mismo no lo es.
  function nuevaSesion() {
    var bytes = new Uint8Array(12);
    if (window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(bytes);
    else for (var i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
    return "g" + Array.prototype.map.call(bytes, function (b) { return ("0" + b.toString(16)).slice(-2); }).join("");
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function ic(name, size) {
    return window.icon ? window.icon(name, { size: size || 18 }) : "";
  }

  function isOpen() {
    return !!(overlay && overlay.parentNode);
  }

  function close() {
    requestId++;
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    overlay = null;
    state = freshState();
    step = 1;
  }

  function canAdvance() {
    if (state.busy) return false;
    if (step === 1) return !!state.markdown.trim();
    return true;
  }

  function statusHtml() {
    return '<div class="gen-status' + (state.statusError ? " error" : "") + '" id="gen-status" role="status" aria-live="polite"' +
      (state.status ? "" : " hidden") + ">" + esc(state.status) + "</div>";
  }

  // Actualiza el mensaje de estado sin redibujar el paso (textContent: el
  // texto de error puede venir de la respuesta de la API).
  function setStatus(message, isError) {
    state.status = message || "";
    state.statusError = !!isError;
    var el = overlay && overlay.querySelector("#gen-status");
    if (!el) return;
    el.textContent = state.status;
    el.classList.toggle("error", state.statusError);
    el.hidden = !state.status;
    if (state.statusError && el.scrollIntoView) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  // Sincroniza los botones con el estado actual (ocupado, texto vacío, etc.).
  function syncButtons() {
    if (!overlay) return;
    var next = overlay.querySelector("#gen-next");
    if (next) {
      next.disabled = !canAdvance();
      var label = next.querySelector("span");
      if (label) label.textContent = state.busy ? "Generando…" : "Siguiente";
    }
    var regen = overlay.querySelector("#gen-regenerate");
    if (regen) regen.disabled = state.busy;
    var create = overlay.querySelector("#gen-create");
    if (create) create.disabled = state.busy || state.cards.length < 1;
  }

  function dots() {
    return [1, 2, 3, 4].map(function (i) {
      return '<span class="gen-dot' + (i === step ? " active" : i < step ? " done" : "") + '">' + i + "</span>";
    }).join('<span class="gen-line"></span>');
  }

  function render() {
    if (!overlay) return;
    var content = overlay.querySelector("#gen-content");
    if (!content) return;
    content.innerHTML = stepHtml();
    if (step === 3) renderCards();
    var footer = overlay.querySelector("#gen-footer");
    if (footer) footer.innerHTML = footerHtml();
    var progress = overlay.querySelector("#gen-progress");
    if (progress) progress.innerHTML = dots();
    var title = overlay.querySelector("#gen-title");
    if (title) title.textContent = ["Origen", "Texto", "Tarjetas", "Crear mazo"][step - 1];
    focusFirst();
  }

  function stepHtml() {
    if (step === 1) return step1Html();
    if (step === 2) return step2Html();
    if (step === 3) return step3Html();
    return step4Html();
  }

  function step1Html() {
    return (
      '<div class="gen-step">' +
        '<span class="gen-icon">' + ic("upload", 28) + "</span>" +
        '<h2>¿De dónde sacamos el contenido?</h2>' +
        '<p>Sube un PDF o una imagen (foto, captura, escaneo) y la IA lo convierte en tarjetas. También puedes pegar texto directamente.</p>' +
        (window.IA && window.IA.disponible && !window.IA.disponible()
          ? '<div class="gen-status error" role="status">En modo prueba el generador no puede usar la IA. Entra con Google para probarlo.</div>'
          : "") +
        '<div class="gen-tabs"><button class="gen-tab active" data-tab="file" type="button">Subir archivo</button><button class="gen-tab" data-tab="text" type="button">Pegar texto</button></div>' +
        '<div id="gen-tab-file" class="gen-tab-panel active">' +
          '<label class="gen-drop" id="gen-drop" for="gen-file-input">' +
            '<span class="gen-drop-inner">' + ic("upload", 32) + '<strong>Arrastra un archivo aquí</strong><small>o haz clic para elegir · PDF, JPG, PNG o WEBP · máx. 10 MB</small></span>' +
            '<input id="gen-file-input" type="file" accept="application/pdf,image/jpeg,image/png,image/webp" hidden />' +
          "</label>" +
          '<div class="gen-file-status" id="gen-file-status"></div>' +
        "</div>" +
        '<div id="gen-tab-text" class="gen-tab-panel">' +
          '<textarea id="gen-raw-text" rows="10" placeholder="Pega aquí el texto o markdown del que quieres generar tarjetas..."></textarea>' +
        "</div>" +
      "</div>"
    );
  }

  function step2Html() {
    return (
      '<div class="gen-step">' +
        '<span class="gen-icon">' + ic("edit", 28) + "</span>" +
        '<h2>Revisa el texto extraído</h2>' +
        '<p>Revisa el contenido y corrige lo que necesites. Después elige cuántas tarjetas quieres.</p>' +
        '<div class="gen-cards-controls">' + countHtml() + "</div>" +
        statusHtml() +
        '<textarea id="gen-markdown" rows="12" placeholder="Markdown del contenido...">' + esc(state.markdown) + "</textarea>" +
        '<div class="gen-hint">Tip: usa $...$ para fórmulas en línea y $$...$$ para fórmulas en bloque.</div>' +
      "</div>"
    );
  }

  function step3Html() {
    return (
      '<div class="gen-step">' +
        '<span class="gen-icon">' + ic("cards", 28) + "</span>" +
        '<h2>Tarjetas generadas</h2>' +
        '<p>La IA creó estas tarjetas. Edítalas, elimínalas o regenera un lote nuevo.</p>' +
        '<div class="gen-cards-controls">' +
          countHtml() +
          '<button class="btn ghost sm" id="gen-regenerate" type="button"' + (state.busy ? " disabled" : "") + ">" + ic("refresh", 16) + "<span>Regenerar</span></button>" +
        "</div>" +
        statusHtml() +
        '<div class="gen-cards-list" id="gen-cards-list"></div>' +
      "</div>"
    );
  }

  function countHtml() {
    return '<label class="gen-count"><span>Cantidad: <output id="gen-count-output">' + state.count + "</output></span>" +
      '<input id="gen-count" type="range" min="5" max="' + MAX_TARJETAS + '" value="' + state.count + '" /></label>';
  }

  function renderCards() {
    var list = document.getElementById("gen-cards-list");
    if (!list) return;
    if (!state.cards.length) {
      list.innerHTML = '<div class="gen-empty">Aún no hay tarjetas. Genera unas con el botón de abajo.</div>';
      return;
    }
    list.innerHTML = state.cards.map(function (card, i) {
      return (
        '<div class="gen-card" data-idx="' + i + '">' +
          '<span class="gen-card-num">' + (i + 1) + "</span>" +
          '<div class="gen-card-fields">' +
            '<textarea rows="2" data-field="q" placeholder="Pregunta">' + esc(card.q) + "</textarea>" +
            '<textarea rows="2" data-field="a" placeholder="Respuesta">' + esc(card.a) + "</textarea>" +
          "</div>" +
          '<button class="icon-btn danger" type="button" data-remove="' + i + '" title="Quitar">' + ic("trash", 16) + "</button>" +
        "</div>"
      );
    }).join("");
  }

  function step4Html() {
    var swatches = (window.DeckStore.PALETTE || ["#2f80ed", "#38bdf8", "#0ea5e9", "#6366f1", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"]).map(function (color) {
      var active = color.toLowerCase() === state.color.toLowerCase();
      return '<button class="swatch' + (active ? " active" : "") + '" type="button" data-color="' + color + '" style="background:' + color + '"></button>';
    }).join("");
    return (
      '<div class="gen-step">' +
        '<span class="gen-icon">' + ic("check", 28) + "</span>" +
        '<h2>Crea el mazo</h2>' +
        '<p>Último paso: dale nombre, descripción y color. Las ' + state.cards.length + ' tarjetas quedarán listas para estudiar.</p>' +
        '<label class="gen-field"><span>Nombre</span><input id="gen-nombre" type="text" maxlength="60" placeholder="Ej. Números reales" value="' + esc(state.nombre) + '" /></label>' +
        '<label class="gen-field"><span>Descripción <small>(opcional)</small></span><input id="gen-desc" type="text" maxlength="140" placeholder="Ej. Capítulo 3 del libro" value="' + esc(state.descripcion) + '" /></label>' +
        '<div class="gen-field"><span>Color</span><div class="swatches">' + swatches + "</div></div>" +
      "</div>"
    );
  }

  function footerHtml() {
    var nextDisabled = canAdvance() ? "" : " disabled";
    var createDisabled = state.busy || state.cards.length < 1 ? " disabled" : "";
    var nextLabel = state.busy ? "Generando…" : "Siguiente";
    return (
      '<span class="gen-footer-note">' + (step === 4 ? (window.Auth && window.Auth.isDemo && window.Auth.isDemo() ? "Modo prueba: se guarda en este navegador." : "Se guarda en tu cuenta.") : "") + '</span>' +
      '<div class="gen-footer-actions">' +
        '<button class="btn ghost" id="gen-cancel" type="button">Cancelar</button>' +
        (step > 1 ? '<button class="btn ghost" id="gen-back" type="button">' + ic("arrowLeft", 16) + " Atrás</button>" : "") +
        (step < 4
          ? '<button class="btn primary" id="gen-next" type="button"' + nextDisabled + "><span>" + nextLabel + "</span>" + ic("chevronRight", 16) + "</button>"
          : '<button class="btn primary" id="gen-create" type="button"' + createDisabled + '>' + ic("check", 16) + "<span>Crear mazo</span></button>") +
      "</div>"
    );
  }

  function open() {
    // Idempotente: si ya está abierto no se crea un segundo wizard encima.
    if (isOpen()) return;
    overlay = document.createElement("div");
    overlay.className = "overlay generador-overlay";
    overlay.innerHTML = (
      '<div class="gen-modal" role="dialog" aria-modal="true">' +
        '<header class="modal-head">' +
          '<div><span class="modal-kicker">Generador con IA</span><h2 id="gen-title">Origen</h2></div>' +
          '<button class="icon-btn" id="gen-close" type="button" title="Cerrar">' + ic("x") + "</button>" +
        "</header>" +
        '<div class="gen-progress" id="gen-progress">' + dots() + "</div>" +
        '<div class="gen-content" id="gen-content"></div>' +
        '<footer class="modal-foot" id="gen-footer"></footer>' +
      "</div>"
    );
    document.body.appendChild(overlay);
    step = 1;
    state = freshState();
    render();
    attachEvents();
  }

  function attachEvents() {
    overlay.addEventListener("click", handleClick);
    overlay.addEventListener("input", handleInput);
    overlay.addEventListener("change", handleChange);
    overlay.addEventListener("keydown", function (e) { if (e.key === "Escape") askAbandon(close); });

    // Delegado en el overlay: la zona se redibuja al volver al paso 1.
    overlay.addEventListener("dragover", function (e) {
      var drop = e.target.closest && e.target.closest("#gen-drop");
      if (!drop) return;
      e.preventDefault();
      drop.classList.add("drag-over");
    });
    overlay.addEventListener("dragleave", function (e) {
      var drop = e.target.closest && e.target.closest("#gen-drop");
      if (drop && !drop.contains(e.relatedTarget)) drop.classList.remove("drag-over");
    });
    overlay.addEventListener("drop", function (e) {
      var drop = e.target.closest && e.target.closest("#gen-drop");
      if (!drop) return;
      e.preventDefault();
      drop.classList.remove("drag-over");
      var file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (file) handleFile(file);
    });
  }

  function askAbandon(onConfirm) {
    if (window.StudappyConfirm) {
      window.StudappyConfirm.ask("Lo que hayas generado se perderá.", onConfirm);
    } else if (typeof onConfirm === "function") onConfirm();
  }

  function handleClick(e) {
    if (e.target === overlay || e.target.closest("#gen-close") || e.target.closest("#gen-cancel")) {
      askAbandon(close);
      return;
    }
    if (e.target.closest("#gen-back")) {
      askAbandon(function () {
        requestId++; // descarta una generación en curso
        state.busy = false;
        setStatus("");
        step = Math.max(1, step - 1);
        render();
      });
      return;
    }
    var next = e.target.closest("#gen-next");
    if (next) { if (!next.disabled) nextStep(); return; }
    var create = e.target.closest("#gen-create");
    if (create) { if (!create.disabled) createDeck(); return; }

    var tab = e.target.closest(".gen-tab");
    if (tab) {
      var target = tab.getAttribute("data-tab");
      Array.prototype.forEach.call(overlay.querySelectorAll(".gen-tab"), function (t) { t.classList.toggle("active", t === tab); });
      Array.prototype.forEach.call(overlay.querySelectorAll(".gen-tab-panel"), function (p) { p.classList.toggle("active", p.id === "gen-tab-" + target); });
      return;
    }

    var swatch = e.target.closest(".swatch");
    if (swatch) {
      state.color = swatch.getAttribute("data-color");
      Array.prototype.forEach.call(overlay.querySelectorAll(".swatch"), function (s) { s.classList.toggle("active", s.getAttribute("data-color") === state.color); });
      return;
    }

    var removeBtn = e.target.closest("[data-remove]");
    if (removeBtn) {
      var idx = parseInt(removeBtn.getAttribute("data-remove"), 10);
      state.cards.splice(idx, 1);
      renderCards();
      return;
    }

    var regen = e.target.closest("#gen-regenerate");
    if (regen) { if (!regen.disabled) regenerate(); return; }
  }

  function handleInput(e) {
    if (e.target.id === "gen-markdown") state.markdown = e.target.value;
    if (e.target.id === "gen-nombre") state.nombre = e.target.value;
    if (e.target.id === "gen-desc") state.descripcion = e.target.value;
    if (e.target.id === "gen-raw-text") {
      state.markdown = e.target.value;
      syncButtons(); // habilita "Siguiente" en cuanto hay texto pegado
    }
    if (e.target.id === "gen-count") {
      state.count = Math.min(MAX_TARJETAS, parseInt(e.target.value, 10) || 10);
      var output = document.getElementById("gen-count-output");
      if (output) output.textContent = state.count;
    }
    if (e.target.dataset.field && e.target.closest(".gen-card")) {
      var card = state.cards[parseInt(e.target.closest(".gen-card").getAttribute("data-idx"), 10)];
      if (card) card[e.target.dataset.field] = e.target.value;
    }
  }

  function handleChange(e) {
    if (e.target.id === "gen-file-input") handleFile(e.target.files && e.target.files[0]);
  }

  function handleFile(file) {
    if (!file) return;
    var token = ++requestId;
    var status = document.getElementById("gen-file-status");
    function fileStatus(message, isError) {
      if (!status) return;
      status.textContent = message;
      status.classList.toggle("error", !!isError);
    }
    fileStatus("Procesando " + file.name + "...");
    state.markdown = "";
    setStatus("");
    syncButtons();
    IA.transcribirArchivo(file, function (msg) {
      if (token === requestId) fileStatus(msg);
    }, state.sesion).then(function (text) {
      if (token !== requestId || !overlay) return;
      state.markdown = text;
      fileStatus("Listo · " + text.length + " caracteres");
      syncButtons();
      setTimeout(function () {
        if (token === requestId && overlay && step === 1) nextStep();
      }, 400);
    }).catch(function (err) {
      if (token !== requestId || !overlay) return;
      fileStatus("Error: " + (err.message || err), true);
      syncButtons();
    });
  }

  function nextStep() {
    if (state.busy) return;
    if (step === 1 && !state.markdown.trim()) return;
    if (step === 2) {
      state.markdown = (document.getElementById("gen-markdown") || {}).value || state.markdown;
      if (!state.markdown.trim()) {
        setStatus("Escribe o pega algo de contenido antes de generar.", true);
        return;
      }
      generateCards();
      return;
    }
    if (step === 3) {
      collectCardsFromDom();
    }
    step++;
    render();
  }

  // Convierte la respuesta de la IA en tarjetas { q, a } (máximo MAX_TARJETAS).
  function toCards(raw) {
    var cards = IA.parseJson(raw);
    if (!Array.isArray(cards) || !cards.length) throw new Error("La IA no devolvió tarjetas válidas.");
    return cards.slice(0, MAX_TARJETAS).map(function (c) { return { q: String(c.q || ""), a: String(c.a || "") }; });
  }

  // Lanza una generación y gestiona el estado "ocupado", los mensajes y los
  // errores. onCards recibe las tarjetas solo si la respuesta sigue vigente.
  function listoMensaje(n) {
    var quedan = window.IA && window.IA.restantes ? window.IA.restantes() : null;
    if (typeof quedan !== "number") return "Listo · " + n + " tarjetas";
    var cuando = { dia: " hoy", semana: " esta semana", mes: " este mes" }[window.IA.periodo ? window.IA.periodo() : "dia"] || "";
    return "Listo · " + n + " tarjetas · te " + (quedan === 1 ? "queda 1 mazo" : "quedan " + quedan + " mazos") + " con IA" + cuando;
  }

  function requestCards(count, startMessage, onCards, evitar) {
    if (state.busy) return;
    var token = ++requestId;
    state.busy = true;
    setStatus(startMessage);
    syncButtons();
    IA.generarTarjetas(state.markdown, count, function (msg) {
      if (token === requestId) setStatus(msg);
    }, evitar, state.sesion).then(function (raw) {
      if (token !== requestId || !overlay) return;
      var cards = toCards(raw);
      state.busy = false;
      state.cards = cards;
      state.status = listoMensaje(cards.length);
      state.statusError = false;
      onCards();
    }).catch(function (err) {
      if (token !== requestId || !overlay) return;
      state.busy = false;
      setStatus("Error: " + (err && err.message ? err.message : err), true);
      syncButtons();
    });
  }

  function generateCards() {
    requestCards(state.count, "Generando tarjetas…", function () {
      step = 3;
      render();
    });
  }

  function regenerate() {
    collectCardsFromDom();
    var anteriores = state.cards.map(function (c) { return c.q; }).filter(Boolean);
    requestCards(state.count, "Regenerando…", function () {
      renderCards();
      setStatus(state.status);
      syncButtons();
    }, anteriores);
  }

  function collectCardsFromDom() {
    var list = document.getElementById("gen-cards-list");
    if (!list) return;
    Array.prototype.forEach.call(list.querySelectorAll(".gen-card"), function (row) {
      var idx = parseInt(row.getAttribute("data-idx"), 10);
      var card = state.cards[idx];
      if (!card) return;
      var q = row.querySelector('[data-field="q"]');
      var a = row.querySelector('[data-field="a"]');
      if (q) card.q = q.value;
      if (a) card.a = a.value;
    });
  }

  function createDeck() {
    collectCardsFromDom();
    state.nombre = (document.getElementById("gen-nombre") || {}).value || state.nombre;
    state.descripcion = (document.getElementById("gen-desc") || {}).value || state.descripcion;
    if (!state.nombre.trim()) state.nombre = "Mazo generado";
    if (!state.cards.length) return;
    var deck = window.DeckStore.create();
    deck.nombre = state.nombre.trim();
    deck.descripcion = state.descripcion.trim();
    deck.color = state.color;
    deck.cards = state.cards.map(function (c, i) { return { id: "g" + i + "-" + Date.now().toString(36), q: c.q, a: c.a }; });
    var saved = window.DeckStore.save(deck);
    close();
    location.hash = "#/mazo/" + saved.id;
  }

  function focusFirst() {
    setTimeout(function () {
      if (!overlay) return;
      var input = overlay.querySelector("input, textarea");
      if (input) input.focus();
    }, 60);
  }

  window.Generador = { open: open, close: close, isOpen: isOpen };
})();
