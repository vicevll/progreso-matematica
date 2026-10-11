// Generador de mazos con IA.
// Wizard de 4 pasos: origen → markdown → tarjetas → crear mazo.
(function () {
  var overlay = null;
  var step = 1;
  var state = {
    markdown: "",
    cards: [],
    nombre: "",
    descripcion: "",
    color: "#2f80ed",
    status: ""
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function ic(name, size) {
    return window.icon ? window.icon(name, { size: size || 18 }) : "";
  }

  function close() {
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    overlay = null;
    state = { markdown: "", cards: [], nombre: "", descripcion: "", color: "#2f80ed", status: "" };
    step = 1;
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
        '<div class="gen-tabs"><button class="gen-tab active" data-tab="file" type="button">Subir archivo</button><button class="gen-tab" data-tab="text" type="button">Pegar texto</button></div>' +
        '<div id="gen-tab-file" class="gen-tab-panel active">' +
          '<label class="gen-drop" id="gen-drop" for="gen-file-input">' +
            '<span class="gen-drop-inner">' + ic("upload", 32) + '<strong>Arrastra un archivo aquí</strong><small>o haz clic para elegir · PDF, JPG, PNG</small></span>' +
            '<input id="gen-file-input" type="file" accept="application/pdf,image/jpeg,image/png" hidden />' +
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
        '<p>La IA transcribió el contenido. Corrige lo que necesites antes de generar las tarjetas.</p>' +
        '<textarea id="gen-markdown" rows="14" placeholder="Markdown del contenido...">' + esc(state.markdown) + "</textarea>" +
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
          '<label class="gen-count"><span>Cantidad: <output id="gen-count-output">' + state.cards.length + "</output></span>" +
            '<input id="gen-count" type="range" min="5" max="30" value="' + state.cards.length + '" /></label>' +
          '<button class="btn ghost sm" id="gen-regenerate" type="button">' + ic("refresh", 16) + "<span>Regenerar</span></button>" +
        "</div>" +
        '<div class="gen-cards-list" id="gen-cards-list"></div>' +
        '<div class="gen-status" id="gen-status">' + state.status + "</div>" +
      "</div>"
    );
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
    var nextDisabled = step === 1 && !state.markdown ? ' disabled' : '';
    var createDisabled = step === 4 && state.cards.length < 1 ? ' disabled' : '';
    return (
      '<span class="gen-footer-note">' + (step === 4 ? "Se guarda en este dispositivo." : "") + '</span>' +
      '<div class="gen-footer-actions">' +
        '<button class="btn ghost" id="gen-cancel" type="button">Cancelar</button>' +
        (step > 1 ? '<button class="btn ghost" id="gen-back" type="button">' + ic("arrowLeft", 16) + " Atrás</button>" : "") +
        (step < 4
          ? '<button class="btn primary" id="gen-next" type="button"' + nextDisabled + '><span>Siguiente</span>' + ic("chevronRight", 16) + "</button>"
          : '<button class="btn primary" id="gen-create" type="button"' + createDisabled + '>' + ic("check", 16) + "<span>Crear mazo</span></button>") +
      "</div>"
    );
  }

  function open() {
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
    state = { markdown: "", cards: [], nombre: "", descripcion: "", color: "#2f80ed", status: "" };
    render();
    attachEvents();
  }

  function attachEvents() {
    overlay.addEventListener("click", handleClick);
    overlay.addEventListener("input", handleInput);
    overlay.addEventListener("change", handleChange);
    overlay.addEventListener("keydown", function (e) { if (e.key === "Escape") askAbandon(close); });

    var drop = document.getElementById("gen-drop");
    if (drop) {
      drop.addEventListener("dragover", function (e) { e.preventDefault(); drop.classList.add("drag-over"); });
      drop.addEventListener("dragleave", function () { drop.classList.remove("drag-over"); });
      drop.addEventListener("drop", function (e) {
        e.preventDefault();
        drop.classList.remove("drag-over");
        var file = e.dataTransfer.files && e.dataTransfer.files[0];
        if (file) handleFile(file);
      });
    }
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
      askAbandon(function () { step = Math.max(1, step - 1); render(); });
      return;
    }
    if (e.target.closest("#gen-next")) { nextStep(); return; }
    if (e.target.closest("#gen-create")) { createDeck(); return; }

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

    if (e.target.closest("#gen-regenerate")) { regenerate(); return; }
  }

  function handleInput(e) {
    if (e.target.id === "gen-markdown") state.markdown = e.target.value;
    if (e.target.id === "gen-nombre") state.nombre = e.target.value;
    if (e.target.id === "gen-desc") state.descripcion = e.target.value;
    if (e.target.id === "gen-raw-text") state.markdown = e.target.value;
    if (e.target.id === "gen-count") {
      var count = parseInt(e.target.value, 10);
      var output = document.getElementById("gen-count-output");
      if (output) output.textContent = count;
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
    var status = document.getElementById("gen-file-status");
    if (status) status.textContent = "Procesando " + file.name + "...";
    state.markdown = "";
    state.status = "";
    IA.transcribirArchivo(file, function (msg) {
      if (status) status.textContent = msg;
    }).then(function (text) {
      state.markdown = text;
      if (status) status.textContent = "Listo · " + text.length + " caracteres";
      setTimeout(function () { nextStep(); }, 400);
    }).catch(function (err) {
      if (status) status.textContent = "Error: " + (err.message || err);
    });
  }

  function nextStep() {
    if (step === 1 && !state.markdown.trim()) return;
    if (step === 2) {
      state.markdown = (document.getElementById("gen-markdown") || {}).value || state.markdown;
      if (!state.markdown.trim()) return;
      generateCards();
      return;
    }
    if (step === 3) {
      collectCardsFromDom();
    }
    step++;
    render();
  }

  function generateCards() {
    state.status = "Generando tarjetas...";
    render();
    var count = 10;
    var countInput = document.getElementById("gen-count");
    if (countInput) count = parseInt(countInput.value, 10) || 10;
    IA.generarTarjetas(state.markdown, count, function (msg) {
      state.status = msg;
      var statusEl = document.getElementById("gen-status");
      if (statusEl) statusEl.textContent = msg;
    }).then(function (raw) {
      var cards = IA.parseJson(raw);
      if (!Array.isArray(cards) || !cards.length) throw new Error("La IA no devolvió tarjetas válidas.");
      state.cards = cards.slice(0, 30).map(function (c) { return { q: String(c.q || ""), a: String(c.a || "") }; });
      state.status = "Listo · " + state.cards.length + " tarjetas";
      step = 3;
      render();
    }).catch(function (err) {
      state.status = "Error: " + (err.message || err);
      render();
    });
  }

  function regenerate() {
    collectCardsFromDom();
    state.status = "Regenerando...";
    render();
    var countInput = document.getElementById("gen-count");
    var count = countInput ? parseInt(countInput.value, 10) || 10 : state.cards.length || 10;
    IA.generarTarjetas(state.markdown, count, function (msg) {
      state.status = msg;
      var statusEl = document.getElementById("gen-status");
      if (statusEl) statusEl.textContent = msg;
    }).then(function (raw) {
      var cards = IA.parseJson(raw);
      if (!Array.isArray(cards) || !cards.length) throw new Error("La IA no devolvió tarjetas válidas.");
      state.cards = cards.slice(0, 30).map(function (c) { return { q: String(c.q || ""), a: String(c.a || "") }; });
      state.status = "Listo · " + state.cards.length + " tarjetas";
      renderCards();
    }).catch(function (err) {
      state.status = "Error: " + (err.message || err);
      var statusEl = document.getElementById("gen-status");
      if (statusEl) statusEl.textContent = state.status;
    });
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

  window.Generador = { open: open };
})();
