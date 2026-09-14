(function () {
  window.GOOGLE_ICON =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true">' +
    '<path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>' +
    '<path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>' +
    '<path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.98 21.98 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>' +
    '<path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>' +
    "</svg>";

  var cfg = window.APP_CONFIG || {};
  var url = String(cfg.SUPABASE_URL || "");
  var key = String(cfg.SUPABASE_ANON_KEY || "");
  var configured =
    url.indexOf("http") === 0 &&
    key.length > 20 &&
    url.indexOf("PEGA_AQUI") === -1 &&
    key.indexOf("PEGA_AQUI") === -1;

  var client = null;
  if (configured && window.supabase && typeof window.supabase.createClient === "function") {
    client = window.supabase.createClient(url, key, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: "pkce",
        storage: window.localStorage,
        storageKey: "mate-auth"
      }
    });
  }

  function redirectTo() {
    return window.location.origin + window.location.pathname;
  }

  function notConfigured() {
    return Promise.reject(new Error("Supabase no configurado"));
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

  window.Novedades = { notifyError: notifyError };

  window.SB = {
    configured: configured,
    client: client,
    redirectTo: redirectTo,
    signInWithGoogle: function () {
      if (!client) return notConfigured();
      return client.auth
        .signInWithOAuth({
          provider: "google",
          options: { redirectTo: redirectTo(), skipBrowserRedirect: true }
        })
        .then(function (res) {
          if (res && res.error) throw res.error;
          if (res && res.data && res.data.url) {
            window.location.assign(res.data.url);
            return;
          }
          throw new Error("No se pudo abrir el inicio de sesión de Google");
        });
    },
    signOut: function () {
      if (!client) return notConfigured();
      return client.auth.signOut();
    },
    getSession: function () {
      if (!client) return Promise.resolve(null);
      return client.auth.getSession().then(function (res) {
        return res && res.data ? res.data.session : null;
      }).catch(function () {
        // sesión corrupta o no disponible: se trata como sin sesión
        return null;
      });
    },
    onChange: function (cb) {
      if (!client) return function () {};
      var sub = client.auth.onAuthStateChange(function (_event, session) {
        cb(session);
      });
      return function () {
        if (sub && sub.data && sub.data.subscription) {
          sub.data.subscription.unsubscribe();
        }
      };
    }
  };

  function detectOAuthReturn() {
    if (!client || !/[?#].*(code=|access_token=)/.test(window.location.href)) return;
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      window.SB.getSession().then(function (session) {
        if (session) {
          clearInterval(timer);
          return;
        }
        if (tries > 20) {
          clearInterval(timer);
          try {
            // Limpia verificadores PKCE viejos que puedan romper el próximo intento
            Object.keys(localStorage).forEach(function (k) {
              if (k.indexOf("mate-auth") === 0 && k.indexOf("code-verifier") !== -1) {
                localStorage.removeItem(k);
              }
            });
            window.history.replaceState({}, "", window.location.pathname);
          } catch (e) {
            /* ignorar */
          }
          if (window.Novedades && window.Novedades.notifyError) {
            window.Novedades.notifyError(
              "No se pudo completar el inicio de sesión con Google. " +
              "Vuelve a intentarlo o abre la página desde https://studappy.vercel.app/"
            );
          }
        }
      });
    }, 500);
  }

  setTimeout(detectOAuthReturn, 400);
})();
