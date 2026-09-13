(function () {
  var VERSION = "2026-09-13-perfil";
  var KEY = "mate-novedades-visto";

  var ENTRIES = [
    {
      version: VERSION,
      titulo: "Nuevo: tu perfil",
      texto: "Elige tu foto y un apodo. Tu correo ya no se muestra.",
      accion: "Probar",
      onProbar: function () {
        if (window.ProgressStore && window.ProgressStore.getUser()) {
          if (window.Profile) window.Profile.openEditor();
        } else if (window.SB && window.SB.configured) {
          window.SB.signInWithGoogle();
        }
      }
    }
  ];

  function seen() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function markSeen(version) {
    try { localStorage.setItem(KEY, version); } catch (e) { /* ignorar */ }
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
      markSeen(entry.version);
      banner.parentNode.removeChild(banner);
      if (entry.onProbar) entry.onProbar();
    });
  }

  function run() {
    var pending = ENTRIES.filter(function (entry) {
      return seen() !== entry.version;
    });
    if (!pending.length) return;
    show(pending[pending.length - 1]);
  }

  window.Novedades = { run: run, show: show };
  run();
})();
