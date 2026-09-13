(function () {
  var box = document.getElementById("account");
  if (!box) return;

  var LABELS = {
    disabled: "Supabase sin configurar",
    "signed-out": "Sin sesión",
    syncing: "Sincronizando",
    synced: "Sincronizado",
    pending: "Pendiente de subir",
    offline: "Sin conexión"
  };

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function render() {
    if (!window.SB || !window.SB.configured) {
      box.innerHTML =
        '<span class="account-note" title="Completa js/config.js con tu URL y anon key de Supabase">' +
        LABELS.disabled +
        "</span>";
      return;
    }

    var user = window.ProgressStore.getUser();
    var state = window.ProgressStore.status();

    if (user) {
      box.innerHTML =
        '<span class="sync-dot ' + state + '" title="' + esc(LABELS[state] || state) + '"></span>' +
        '<span class="account-email" title="' + esc(user.email || "") + '">' +
        esc(user.email || "Cuenta") +
        "</span>" +
        '<button class="account-btn" id="account-action" type="button">Salir</button>';
    } else {
      box.innerHTML =
        '<button class="account-btn primary" id="account-action" type="button">Entrar con Google</button>';
    }
  }

  document.addEventListener("click", function (e) {
    var button = e.target.closest("#account-action");
    if (!button) return;
    if (window.ProgressStore.getUser()) {
      window.SB.signOut();
    } else {
      window.SB.signInWithGoogle();
    }
  });

  window.ProgressStore.init();
  window.ProgressStore.onChange(render);
  render();
})();
