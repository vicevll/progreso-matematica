(function () {
  var VERSION = "2026-09-13-perfil";
  var KEY = "mate-novedades-visto";
  var PENDING_KEY = "mate-novedades-pendiente";

  var ENTRIES = [
    {
      id: "trigonometria",
      version: "2026-09-13-triangulos",
      titulo: "Trigonometría con dibujos",
      texto: "Los ejemplos y las guías de Trigonometría ahora incluyen triángulos rectángulos dibujados.",
      accion: "Ver",
      onProbar: function () {
        window.location.hash = "#/curso/funciones-geometria/trigonometria";
      }
    },
    {
      id: "perfil",
      version: VERSION,
      titulo: "Nuevo: tu perfil",
      texto: "Elige tu foto y un apodo. Tu correo ya no se muestra.",
      accion: "Probar",
      requiereLogin: true,
      onProbar: function () {
        if (window.Profile) window.Profile.openEditor();
      }
    }
  ];

  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function write(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignorar */ }
  }

  function remove(key) {
    try { localStorage.removeItem(key); } catch (e) { /* ignorar */ }
  }

  function seen() {
    return read(KEY);
  }

  function markSeen(version) {
    write(KEY, version);
  }

  function pending() {
    try {
      var raw = read(PENDING_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setPending(entry) {
    write(PENDING_KEY, JSON.stringify({ id: entry.id, version: entry.version }));
  }

  function clearPending() {
    remove(PENDING_KEY);
  }

  function entryById(id) {
    return ENTRIES.filter(function (entry) { return entry.id === id; })[0] || null;
  }

  function isSignedIn() {
    return !!(window.ProgressStore && window.ProgressStore.getUser());
  }

  function runAction(entry) {
    markSeen(entry.version);
    clearPending();
    if (entry.onProbar) entry.onProbar();
  }

  function maybeRunPending() {
    var waiting = pending();
    if (!waiting || !isSignedIn()) return;
    var entry = entryById(waiting.id);
    if (!entry) {
      clearPending();
      return;
    }
    runAction(entry);
  }

  function notifyError(message) {
    var toast = document.createElement("aside");
    toast.className = "update-banner update-error";
    toast.innerHTML =
      '<span class="update-kicker">No se pudo continuar</span>' +
      "<p>" + message + "</p>";
    document.body.appendChild(toast);
    setTimeout(function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 7000);
  }

  function tryProbar(entry) {
    if (!entry.requiereLogin || isSignedIn()) {
      runAction(entry);
      return;
    }
    if (!(window.SB && window.SB.configured)) {
      notifyError("Para probar esta novedad necesitas iniciar sesión con Google.");
      return;
    }
    setPending(entry);
    window.SB.signInWithGoogle().catch(function (err) {
      clearPending();
      notifyError(
        "No se pudo iniciar sesión: " +
          (err && err.message ? err.message : "error desconocido")
      );
    });
  }

  function show(entry) {
    var banner = document.createElement("aside");
    banner.className = "update-banner";
    banner.innerHTML =
      '<span class="update-kicker">Actualización</span>' +
      "<h3>" + entry.titulo + "</h3>" +
      "<p>" + entry.texto + "</p>" +
      '<div class="update-actions">' +
        '<button class="btn" id="update-dismiss" type="button">Entendido</button>' +
        '<button class="btn primary" id="update-try" type="button">' + entry.accion + "</button>" +
      "</div>";
    document.body.appendChild(banner);

    banner.querySelector("#update-dismiss").addEventListener("click", function () {
      markSeen(entry.version);
      banner.parentNode.removeChild(banner);
    });

    banner.querySelector("#update-try").addEventListener("click", function () {
      banner.parentNode.removeChild(banner);
      tryProbar(entry);
    });
  }

  function run() {
    if (pending()) return;
    var waiting = ENTRIES.filter(function (entry) {
      return seen() !== entry.version;
    });
    if (!waiting.length) return;
    show(waiting[waiting.length - 1]);
  }

  window.Novedades = { run: run, show: show, maybeRunPending: maybeRunPending, notifyError: notifyError };

  if (window.ProgressStore) {
    window.ProgressStore.onChange(maybeRunPending);
    window.ProgressStore.onUpdate(maybeRunPending);
  }

  setTimeout(maybeRunPending, 1200);
  run();
})();
