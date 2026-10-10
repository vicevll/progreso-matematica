(function () {
  var box = document.getElementById("account");
  if (!box) return;

  var session = null;
  var listeners = [];
  var ready = false;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function user() {
    return session ? session.user : null;
  }

  function meta(u) {
    return (u && u.user_metadata) || {};
  }

  function displayName(u) {
    var m = meta(u);
    return m.nickname || m.full_name || m.name || m.given_name || "Estudiante";
  }

  function avatarHtml(u) {
    var url = meta(u).avatar_url || meta(u).picture || "";
    if (url) {
      return '<img class="avatar avatar-sm" src="' + esc(url) + '" alt="" />';
    }
    var initial = (displayName(u).trim().charAt(0) || "E").toUpperCase();
    return (
      '<span class="avatar avatar-sm avatar-auto" style="background:#3b5bdb">' +
      esc(initial) +
      "</span>"
    );
  }

  function emit() {
    listeners.forEach(function (cb) {
      try { cb(session); } catch (e) { /* ignorar */ }
    });
  }

  function setSession(next) {
    session = next;
    ready = true;
    window.Auth.ready = true;
    render();
    emit();
  }

  function render() {
    if (!window.SB || !window.SB.configured) {
      box.innerHTML =
        '<span class="account-note" title="Completa js/config.js con tu URL y anon key">Supabase sin configurar</span>';
      return;
    }
    var u = user();
    if (!u) {
      box.innerHTML =
        '<button class="google-btn" id="account-login" type="button">' +
          (window.GOOGLE_ICON || "") +
          "<span>Entrar con Google</span>" +
        "</button>";
      return;
    }
    box.innerHTML =
      '<span class="account-profile">' +
        avatarHtml(u) +
        '<span class="account-name">' + esc(displayName(u)) + "</span>" +
      "</span>" +
      '<button class="account-btn" id="account-logout" type="button">Salir</button>';
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("#account-login")) {
      if (window.SB && window.SB.beginLogin) window.SB.beginLogin();
      return;
    }
    if (e.target.closest("#account-logout")) {
      window.SB.signOut();
    }
  });

  window.Auth = {
    ready: false,
    isSignedIn: function () { return !!user(); },
    user: user,
    name: displayName,
    avatarHtml: avatarHtml,
    onChange: function (cb) {
      listeners.push(cb);
      return function () {
        listeners = listeners.filter(function (item) { return item !== cb; });
      };
    }
  };

  if (window.SB && window.SB.configured) {
    window.SB.getSession().then(function (s) {
      setSession(s);
    });
    window.SB.onChange(function (s) {
      setSession(s);
    });
  } else {
    setSession(null);
  }
})();
