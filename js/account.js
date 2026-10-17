(function () {
  var box = document.getElementById("account");
  if (!box) return;

  var session = null;
  var listeners = [];
  var ready = false;

  // Modo local: solo en localhost permite entrar sin Google para probar la
  // app. No toca Supabase (la tienda queda desactivada) y en el sitio
  // publicado no existe, porque depende del nombre del host.
  var LOCAL = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname);
  var DEMO_KEY = "studappy-modo-prueba";
  var DEMO_SESSION = { demo: true, user: { id: "modo-prueba", user_metadata: { full_name: "Modo local" } } };

  // Modo de prueba («Probar gratis», sin registro): una cuenta anónima de
  // Supabase. Tiene 1 mazo a mano, 1 mazo con IA y la tienda solo para mirar
  // (los límites de la IA y la tienda los pone el servidor). Se recuerda su id
  // para ofrecer traer sus mazos al crear la cuenta con Google (sync-mazos.js).
  var PRUEBA_KEY = "studappy-prueba-uid";
  var iniciandoPrueba = null;

  function demoWanted() {
    if (!LOCAL) return false;
    try { return localStorage.getItem(DEMO_KEY) === "1"; } catch (e) { return false; }
  }

  function isDemo() {
    return !!(session && session.demo);
  }

  function isTrial() {
    return !!(session && !session.demo && session.user && session.user.is_anonymous === true);
  }

  function trialId() {
    try { return localStorage.getItem(PRUEBA_KEY) || ""; } catch (e) { return ""; }
  }

  function mensajePrueba(err) {
    var msg = String((err && err.message) || "").toLowerCase();
    var status = err && err.status;
    if (msg.indexOf("anonymous") !== -1 && msg.indexOf("disabled") !== -1) {
      return "El modo de prueba todavía no está activado. Mientras tanto, entra con Google.";
    }
    if (status === 429 || msg.indexOf("rate limit") !== -1 || msg.indexOf("too many") !== -1) {
      return "Se abrieron muchas pruebas desde tu red. Intenta en un rato o entra con Google.";
    }
    if (msg.indexOf("captcha") !== -1) {
      return "El modo de prueba necesita una verificación que esta página no tiene. Entra con Google.";
    }
    if (msg.indexOf("fetch") !== -1 || msg.indexOf("network") !== -1) {
      return "No hay conexión. Revisa tu internet e intenta de nuevo.";
    }
    return "No se pudo abrir el modo de prueba. Intenta de nuevo o entra con Google.";
  }

  // Abre el modo de prueba. Devuelve una promesa (la portada muestra
  // «Preparando…» mientras tanto).
  function startTrial() {
    if (iniciandoPrueba) return iniciandoPrueba;
    if (user()) return Promise.resolve(session);
    if (!window.SB || !window.SB.signInAnonymously) return Promise.reject(new Error("Supabase no configurado"));
    iniciandoPrueba = window.SB.signInAnonymously().then(function (s) {
      iniciandoPrueba = null;
      if (s) setSession(s);
      return s;
    }, function (err) {
      iniciandoPrueba = null;
      if (window.console) console.error("Modo de prueba:", err);
      if (window.Novedades && window.Novedades.notifyError) window.Novedades.notifyError(mensajePrueba(err));
      throw err;
    });
    return iniciandoPrueba;
  }

  function crearCuenta() {
    if (window.SB && window.SB.beginLogin) window.SB.beginLogin();
  }

  // Sale del modo de prueba: la cuenta anónima no se puede recuperar, así que
  // se borra su copia en este navegador.
  function salirDePrueba() {
    var id = session && session.user ? String(session.user.id) : "";
    return Promise.resolve(window.SB && window.SB.signOut ? window.SB.signOut() : null).then(function () {
      try {
        if (localStorage.getItem(PRUEBA_KEY) === id) localStorage.removeItem(PRUEBA_KEY);
        localStorage.removeItem("studappy-eco:" + id);
      } catch (e) { /* ignorar */ }
      if (id && window.DeckStore && window.DeckStore.forgetAccount) window.DeckStore.forgetAccount(id);
    });
  }

  function startDemo() {
    if (!LOCAL) return;
    try { localStorage.setItem(DEMO_KEY, "1"); } catch (e) { /* sin almacenamiento: dura hasta recargar */ }
    setSession(DEMO_SESSION);
  }

  function stopDemo() {
    try { localStorage.removeItem(DEMO_KEY); } catch (e) { /* ignorar */ }
    setSession(null);
  }

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

  function firmaPerfil(s) {
    var u = s && s.user;
    var meta = (u && u.user_metadata) || {};
    return u ? [u.id, u.email, meta.full_name, meta.name, meta.avatar_url, meta.picture].join("|") : "";
  }

  function setSession(next) {
    // Una sesión real de Google siempre tiene prioridad sobre el modo prueba.
    if (!next && demoWanted()) next = DEMO_SESSION;
    // Supabase vuelve a anunciar la misma sesión al volver a la pestaña y al
    // renovar el token. No es un cambio de cuenta: se guarda la sesión nueva
    // sin avisar a los demás módulos (si no, se redibuja toda la pantalla).
    if (ready && session && next && session.user && next.user &&
        session.user.id === next.user.id && !!session.demo === !!next.demo) {
      var antes = firmaPerfil(session);
      session = next;
      if (firmaPerfil(next) !== antes) render();
      return;
    }
    session = next;
    if (isTrial()) {
      try { localStorage.setItem(PRUEBA_KEY, String(next.user.id)); } catch (e) { /* sin almacenamiento */ }
    }
    document.documentElement.classList.toggle("modo-prueba", isTrial());
    // Antes de avisar a los demás módulos, el almacén pasa a los mazos de
    // esta cuenta (o a ninguno si no hay sesión).
    if (window.DeckStore && window.DeckStore.useAccount) {
      window.DeckStore.useAccount(next && next.user ? next.user.id : null);
    }
    ready = true;
    window.Auth.ready = true;
    render();
    emit();
  }

  function render() {
    if (isDemo()) {
      box.innerHTML =
        '<span class="account-profile">' +
          avatarHtml(user()) +
          '<span class="account-name">Modo local</span>' +
        "</span>" +
        '<button class="account-btn" id="account-logout" type="button">Salir</button>';
      return;
    }
    if (isTrial()) {
      box.innerHTML =
        '<span class="account-prueba" title="Estás probando Studappy sin cuenta">' +
          '<span class="prueba-dot" aria-hidden="true"></span><span class="account-prueba-txt">Modo prueba</span>' +
        "</span>" +
        '<button class="prueba-cta-mini" type="button" data-crear-cuenta>' +
          (window.GOOGLE_ICON || "") + "<span>Crear cuenta</span>" +
        "</button>" +
        '<button class="account-btn" id="account-logout" type="button">Salir</button>';
      return;
    }
    if (!window.SB || !window.SB.configured) {
      box.innerHTML =
        '<span class="account-note" title="Completa js/config.js con tu URL y anon key">Supabase sin configurar</span>';
      return;
    }
    var u = user();
    if (!u) {
      box.innerHTML =
        '<button class="prueba-cta-mini account-probar" id="account-probar" type="button">Probar gratis</button>' +
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
    var probar = e.target.closest("#account-probar");
    if (probar) {
      if (probar.disabled) return;
      probar.disabled = true;
      probar.textContent = "Preparando…";
      startTrial().catch(function () {
        probar.disabled = false;
        probar.textContent = "Probar gratis";
      });
      return;
    }
    // Cualquier botón «Crear cuenta» del modo de prueba (barra, portada,
    // tienda, generador): entra con Google. Los mazos de prueba se ofrecen
    // al volver (js/sync-mazos.js).
    var crear = e.target.closest("[data-crear-cuenta]");
    if (crear) {
      e.preventDefault();
      crearCuenta();
      return;
    }
    var logout = e.target.closest("#account-logout");
    if (logout) {
      if (isDemo()) {
        stopDemo();
        return;
      }
      if (isTrial()) {
        if (!window.StudappyConfirm) { salirDePrueba(); return; }
        window.StudappyConfirm.ask(
          "Tus mazos de prueba se borran al salir. Para guardarlos, crea tu cuenta gratis con Google.",
          function () { salirDePrueba(); },
          { title: "¿Salir del modo de prueba?", confirmLabel: "Salir y borrar", cancelLabel: "Seguir probando" }
        );
        return;
      }
      if (logout.disabled) return;
      logout.disabled = true;
      logout.textContent = "Saliendo…";
      // Sube los cambios pendientes antes de cerrar la sesión.
      var salir = window.SyncMazos ? window.SyncMazos.salir() : window.SB.signOut();
      Promise.resolve(salir).catch(function () {
        logout.disabled = false;
        logout.textContent = "Salir";
      });
    }
  });

  window.Auth = {
    ready: false,
    isSignedIn: function () { return !!user(); },
    isDemo: isDemo,
    canDemo: function () { return LOCAL; },
    startDemo: startDemo,
    isTrial: isTrial,
    canTrial: function () { return !!(window.SB && window.SB.configured); },
    startTrial: startTrial,
    trialId: trialId,
    crearCuenta: crearCuenta,
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
