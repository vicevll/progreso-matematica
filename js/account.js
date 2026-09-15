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

    if (!user) {
      box.innerHTML =
        '<button class="google-btn" id="account-login" type="button">' +
          (window.GOOGLE_ICON || "") +
          "<span>Entrar con Google</span>" +
        "</button>";
      return;
    }

    box.innerHTML =
      '<button class="account-profile" id="account-profile" type="button" title="Editar perfil">' +
        window.Profile.avatarHtml(user, "sm") +
        '<span class="account-name">' + esc(window.Profile.name(user)) + "</span>" +
      "</button>" +
      '<span class="sync-dot ' + state + '" title="' + esc(LABELS[state] || state) + '"></span>' +
      '<button class="account-btn" id="account-profile-btn" type="button">Perfil</button>' +
      '<button class="account-btn" id="account-logout" type="button">Salir</button>';
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("#account-login")) {
      if (window.SB && window.SB.beginLogin) window.SB.beginLogin();
      return;
    }
    if (e.target.closest("#account-logout")) {
      window.SB.signOut();
      return;
    }
    if (e.target.closest("#account-profile") || e.target.closest("#account-profile-btn")) {
      window.Profile.openEditor();
    }
  });

  window.ProgressStore.init();
  window.ProgressStore.onChange(function () {
    render();
    if (window.ProgressStore.getUser()) {
      var dest = null;
      try {
        dest = localStorage.getItem("mate-login-dest");
      } catch (e) {
        /* ignorar */
      }
      if (dest) {
        try {
          localStorage.removeItem("mate-login-dest");
        } catch (e2) {
          /* ignorar */
        }
        if (window.location.hash !== dest) window.location.hash = dest;
      }
      window.Profile.load().then(function () {
        window.Profile.maybePrompt();
      });
    }
  });
  window.Profile.onChange(render);
  render();
})();
