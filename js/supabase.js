(function () {
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
})();
