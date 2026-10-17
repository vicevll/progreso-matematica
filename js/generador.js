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
    return {
      markdown: "", cards: [], nombre: "", descripcion: "", color: "#2f80ed", status: "", statusError: false, busy: false, count: 10, sesion: nuevaSesion(),
      // Límite diario y API key propia
      cuota: null,        // { restantes, limite, periodo } de la key de Studappy
      usoIA: false,       // este mazo ya usó la IA (ya cuenta en el límite)
      vistaClave: null,   // { motivo: "cuota" | "invalida" } muestra el panel de API key
      pendiente: null,    // acción a reintentar después de guardar la key
      claveOcupado: false
    };
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

  // IA plus (tienda, supabase/misiones.sql): el día que se canjea, el límite
  // sube de 2 a 3 mazos. Se ofrece si hoy no está activo.
  function plusOfertaHtml() {
    var E = window.Economia;
    if (!E || !E.estado || !E.estado() || !E.plus || E.plus().activo) return "";
    var it = (E.estado().items || []).filter(function (i) { return i.id === "ia-plus"; })[0];
    if (!it || it.estado !== "disponible") return "";
    return '<div class="gen-plus-oferta">' + E.px("chispa", 30) +
      "<span><b>IA plus</b>: canjéalo por " + new Intl.NumberFormat("es-CL").format(it.precio) + " puntos y crea 1 mazo más hoy.</span>" +
      '<button class="btn eco-canjear" id="gen-ir-plus" type="button"><span>Ir a la tienda</span></button></div>' +
      '<p class="gen-clave-o">O conecta tu propia API key:</p>';
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
    var guardar = overlay.querySelector("#gen-clave-guardar");
    if (guardar) {
      guardar.disabled = state.claveOcupado;
      var texto = guardar.querySelector("span");
      if (texto) texto.textContent = state.claveOcupado ? "Comprobando…" : "Guardar y continuar";
    }
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
    var conClave = !!state.vistaClave;
    content.innerHTML = conClave ? claveHtml() : stepHtml();
    if (step === 3 && !conClave) renderCards();
    var footer = overlay.querySelector("#gen-footer");
    if (footer) footer.innerHTML = conClave ? claveFooterHtml() : footerHtml();
    var progress = overlay.querySelector("#gen-progress");
    if (progress) progress.innerHTML = dots();
    var title = overlay.querySelector("#gen-title");
    if (title) title.textContent = conClave ? (esVistaPrueba() ? "Modo prueba" : "Tu API key") : ["Origen", "Texto", "Tarjetas", "Crear mazo"][step - 1];
    focusFirst();
  }

  // ---------- Límite diario y API key propia ----------

  var CUANDO = { dia: "de hoy", semana: "de esta semana", mes: "de este mes" };
  var RENUEVAN = { dia: "Mañana se renuevan.", semana: "Se renuevan la próxima semana.", mes: "Se renuevan el próximo mes." };

  function limiteMazos() {
    return (state.cuota && state.cuota.limite) || (window.IA && window.IA.limite && window.IA.limite()) || 2;
  }

  function periodoActual() {
    return (state.cuota && state.cuota.periodo) || (window.IA && window.IA.periodo ? window.IA.periodo() : "dia");
  }

  // Modo de prueba (cuenta anónima): 1 mazo con IA en total y sin API key propia.
  function esPrueba() {
    return !!(window.Auth && window.Auth.isTrial && window.Auth.isTrial());
  }

  function esVistaPrueba() {
    return !!(state.vistaClave && state.vistaClave.motivo === "prueba");
  }

  function cuotaHtml() {
    if (!window.IA || !window.IA.disponible || !window.IA.disponible()) return "";
    if (esPrueba() || (state.cuota && state.cuota.periodo === "prueba")) {
      var cp = state.cuota;
      if (!cp || typeof cp.restantes !== "number" || cp.restantes < 1) return "";
      return '<span class="gen-cuota-txt gen-cuota-prueba">' + ic("sparkle", 15) + "Modo prueba: puedes crear <b>1 mazo con IA</b></span>";
    }
    if (window.IA.clavePropia && window.IA.clavePropia()) {
      return '<span class="gen-cuota-txt">' + ic("key", 15) + "Usando tu API key de Gemini</span>" +
        '<button class="gen-link" id="gen-clave-quitar" type="button">Quitar</button>';
    }
    var c = state.cuota;
    if (!c || typeof c.restantes !== "number" || c.restantes < 1) return "";
    var hoy = { dia: "hoy", semana: "esta semana", mes: "este mes" }[c.periodo] || "";
    return '<span class="gen-cuota-txt">' + ic("sparkle", 15) + (c.restantes === 1 ? "Te queda 1" : "Te quedan " + c.restantes) +
      " de " + (c.limite || limiteMazos()) + " mazos con IA " + hoy + "</span>";
  }

  function actualizarCuota() {
    var el = overlay && overlay.querySelector("#gen-cuota");
    if (!el) return;
    var html = cuotaHtml();
    el.innerHTML = html;
    el.hidden = !html;
  }

  // Al abrir: si ya no le quedan mazos hoy, pide la key antes de que trabaje.
  function revisarCuota() {
    if (!window.IA || !window.IA.estado || !window.IA.disponible()) return;
    var ov = overlay;
    window.IA.estado().then(function (est) {
      if (!est || overlay !== ov) return;
      state.cuota = est.propia ? null : est;
      if (!est.propia && est.restantes === 0 && !state.usoIA && !state.busy && !state.vistaClave && step === 1) {
        mostrarClave(est.periodo === "prueba" || esPrueba() ? "prueba" : "cuota", null);
        return;
      }
      actualizarCuota();
    });
  }

  function mostrarClave(motivo, reintentar) {
    state.vistaClave = { motivo: motivo };
    state.pendiente = reintentar || null;
    state.claveOcupado = false;
    state.status = "";
    state.statusError = false;
    render();
  }

  // Errores que se resuelven con una API key: devuelve true si los manejó.
  function manejarErrorClave(err, reintentar) {
    var codigo = err && err.codigo;
    var propia = window.IA && window.IA.clavePropia && window.IA.clavePropia();
    if (codigo === "prueba" || (codigo === "cuota" && esPrueba())) { mostrarClave("prueba", null); return true; }
    if (codigo === "cuota" && !propia) { mostrarClave("cuota", reintentar); return true; }
    if (codigo === "clave_invalida" && propia) { mostrarClave("invalida", reintentar); return true; }
    return false;
  }

  // Ya usó su mazo con IA de prueba: en vez de la API key, crear la cuenta.
  function pruebaHtml() {
    return (
      '<div class="gen-step gen-clave gen-prueba">' +
        '<span class="prueba-badge">' + (window.Economia ? window.Economia.px("estrella", 16) : "") + "Modo prueba</span>" +
        "<h2>Ya creaste tu mazo con IA de prueba</h2>" +
        "<p>Crea tu cuenta gratis con Google y sigue creando: <b>2 mazos con IA cada día</b>, mazos a mano sin límite, misiones con puntos y la tienda completa.</p>" +
        '<ul class="prueba-lista">' +
          "<li>" + ic("check", 15) + "Tus mazos de prueba se pueden pasar a tu cuenta</li>" +
          "<li>" + ic("check", 15) + "Tu avance se guarda y te sigue en cualquier dispositivo</li>" +
          "<li>" + ic("check", 15) + "Gratis, en un clic</li>" +
        "</ul>" +
      "</div>"
    );
  }

  function claveHtml() {
    if (esVistaPrueba()) return pruebaHtml();
    var invalida = state.vistaClave && state.vistaClave.motivo === "invalida";
    var periodo = periodoActual();
    var titulo = invalida
      ? "Tu API key no funcionó"
      : "Ya usaste tus " + limiteMazos() + " mazos con IA " + (CUANDO[periodo] || "disponibles");
    var texto = invalida
      ? "Google rechazó la API key que tenías guardada. Revisa que esté bien copiada o crea una nueva y pégala aquí."
      : (RENUEVAN[periodo] ? RENUEVAN[periodo] + " " : "") +
        "Si quieres seguir ahora, conecta tu propia API key de Gemini: es gratis y toma un par de minutos.";
    return (
      '<div class="gen-step gen-clave">' +
        '<span class="gen-icon">' + ic("key", 28) + "</span>" +
        "<h2>" + esc(titulo) + "</h2>" +
        "<p>" + esc(texto) + "</p>" +
        (invalida ? "" : plusOfertaHtml()) +
        '<ol class="gen-clave-pasos">' +
          '<li>Entra a <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio</a> con tu cuenta de Google. Si es tu primera vez, acepta los términos.</li>' +
          "<li>Presiona <strong>Create API key</strong> (Crear clave de API). Si te pide un proyecto, elige el que aparece o crea uno nuevo.</li>" +
          "<li>Copia la clave completa.</li>" +
          "<li>Pégala aquí abajo y presiona <strong>Guardar y continuar</strong>.</li>" +
        "</ol>" +
        '<label class="gen-field"><span>Tu API key de Gemini</span>' +
          '<input id="gen-clave" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="200" placeholder="Pega tu API key aquí" />' +
        "</label>" +
        statusHtml() +
        '<p class="gen-clave-nota">Se guarda solo en este navegador, para tu cuenta, y se usa únicamente para generar tus mazos. ' +
          "Google ofrece un nivel gratuito con límites de uso. Puedes quitarla cuando quieras desde el generador.</p>" +
      "</div>"
    );
  }

  function claveFooterHtml() {
    if (esVistaPrueba()) {
      return (
        '<span class="gen-footer-note"></span>' +
        '<div class="gen-footer-actions">' +
          '<button class="btn ghost" id="gen-cancel" type="button">Ahora no</button>' +
          '<button class="btn prueba-cta" type="button" data-crear-cuenta>' + (window.GOOGLE_ICON || "") + "<span>Crear cuenta gratis</span></button>" +
        "</div>"
      );
    }
    return (
      '<span class="gen-footer-note"></span>' +
      '<div class="gen-footer-actions">' +
        '<button class="btn ghost" id="gen-cancel" type="button">Cancelar</button>' +
        (step > 1 ? '<button class="btn ghost" id="gen-clave-volver" type="button">' + ic("arrowLeft", 16) + " Volver</button>" : "") +
        '<button class="btn primary" id="gen-clave-guardar" type="button"' + (state.claveOcupado ? " disabled" : "") + ">" +
          ic("check", 16) + "<span>" + (state.claveOcupado ? "Comprobando…" : "Guardar y continuar") + "</span></button>" +
      "</div>"
    );
  }

  function guardarClave() {
    if (state.claveOcupado || !overlay) return;
    var input = overlay.querySelector("#gen-clave");
    var clave = String((input && input.value) || "").trim();
    if (!clave) { setStatus("Pega tu API key para continuar.", true); return; }
    if (!window.IA.formatoClave(clave)) { setStatus("Eso no parece una API key. Cópiala completa desde Google AI Studio.", true); return; }
    var ov = overlay;
    state.claveOcupado = true;
    setStatus("Comprobando tu API key con Google…");
    syncButtons();
    window.IA.verificarClave(clave).then(function () {
      if (overlay !== ov) return;
      window.IA.guardarClave(clave);
      var pendiente = state.pendiente;
      state.pendiente = null;
      state.vistaClave = null;
      state.claveOcupado = false;
      state.status = "";
      state.statusError = false;
      render();
      if (pendiente) pendiente();
    }).catch(function (err) {
      if (overlay !== ov) return;
      state.claveOcupado = false;
      setStatus(err && err.message ? err.message : String(err), true);
      syncButtons();
    });
  }

  function quitarClave() {
    window.IA.quitarClave();
    state.cuota = null;
    actualizarCuota();
    revisarCuota();
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
          ? '<div class="gen-status error" role="status">En modo local el generador no puede usar la IA. Entra con Google para probarlo.</div>'
          : "") +
        '<div class="gen-cuota" id="gen-cuota"' + (cuotaHtml() ? "" : " hidden") + ">" + cuotaHtml() + "</div>" +
        '<div class="gen-tabs"><button class="gen-tab active" data-tab="file" type="button">Subir archivo</button><button class="gen-tab" data-tab="text" type="button">Pegar texto</button></div>' +
        '<div id="gen-tab-file" class="gen-tab-panel active">' +
          '<label class="gen-drop" id="gen-drop" for="gen-file-input">' +
            '<span class="gen-drop-inner">' + ic("upload", 32) + '<strong>Arrastra un archivo aquí</strong><small>o haz clic para elegir · PDF, JPG, PNG o WEBP · máx. 25 MB</small></span>' +
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
      '<span class="gen-footer-note">' + (step === 4 ? (window.Auth && window.Auth.isDemo && window.Auth.isDemo() ? "Modo local: se guarda en este navegador." : window.Auth && window.Auth.isTrial && window.Auth.isTrial() ? "Modo prueba: tu mazo se guarda; crea tu cuenta para no perderlo." : "Se guarda en tu cuenta.") : "") + '</span>' +
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
    revisarCuota();
  }

  function attachEvents() {
    overlay.addEventListener("click", handleClick);
    overlay.addEventListener("input", handleInput);
    overlay.addEventListener("change", handleChange);
    overlay.addEventListener("keydown", function (e) {
      if (e.key === "Escape") askAbandon(close);
      if (e.key === "Enter" && e.target && e.target.id === "gen-clave") { e.preventDefault(); guardarClave(); }
    });

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
      if (esVistaPrueba() && !state.usoIA) { close(); return; }
      askAbandon(close);
      return;
    }
    if (e.target.closest("#gen-ir-plus")) {
      var irTienda = function () { close(); location.hash = "#/tienda"; };
      // Si todavía no se generó nada, no hay nada que perder.
      if (step === 1 && !state.usoIA) irTienda();
      else askAbandon(irTienda);
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
    if (e.target.closest("#gen-clave-guardar")) { guardarClave(); return; }
    if (e.target.closest("#gen-clave-quitar")) { quitarClave(); return; }
    if (e.target.closest("#gen-clave-volver")) {
      state.vistaClave = null;
      state.pendiente = null;
      render();
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
      state.usoIA = true;
      state.markdown = text;
      fileStatus("Listo · " + text.length + " caracteres");
      syncButtons();
      setTimeout(function () {
        if (token === requestId && overlay && step === 1) nextStep();
      }, 400);
    }).catch(function (err) {
      if (token !== requestId || !overlay) return;
      if (manejarErrorClave(err, function () { handleFile(file); })) return;
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
    if (esPrueba()) return "Listo · " + n + " tarjetas · tu mazo con IA de prueba (puedes regenerar)";
    if (window.IA && window.IA.clavePropia && window.IA.clavePropia()) return "Listo · " + n + " tarjetas · con tu API key";
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
      state.usoIA = true;
      var cards = toCards(raw);
      state.busy = false;
      state.cards = cards;
      state.status = listoMensaje(cards.length);
      state.statusError = false;
      onCards();
    }).catch(function (err) {
      if (token !== requestId || !overlay) return;
      state.busy = false;
      if (manejarErrorClave(err, function () { requestCards(count, startMessage, onCards, evitar); })) return;
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
    try { window.dispatchEvent(new CustomEvent("studappy:mazo-generado")); } catch (e) { /* navegador antiguo */ }
    location.hash = "#/mazo/" + saved.id;
  }

  function focusFirst() {
    setTimeout(function () {
      if (!overlay) return;
      var input = overlay.querySelector("input, textarea");
      if (!input) return;
      if (state.vistaClave) {
        // En el panel de la key primero hay que leer los pasos: en el celular no
        // se abre el teclado ni se baja la vista hasta el campo.
        var chico = window.matchMedia && window.matchMedia("(max-width: 640px)").matches;
        if (!chico) input.focus({ preventScroll: true });
        return;
      }
      input.focus();
    }, 60);
  }

  window.Generador = { open: open, close: close, isOpen: isOpen };
})();
