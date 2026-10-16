// Regalo de bienvenida: el Mazo del mago.
//
// Reemplaza al antiguo tour (js/tour.js), sin ventanas: la primera vez que una
// cuenta entra, se agrega el Mazo del mago a Mis mazos en silencio.
//
// Que ya se dio queda guardado en este navegador y en la cuenta de Supabase
// (user_metadata.tour_mago, la misma marca del tour), así las cuentas que ya
// vieron el tour no lo reciben de nuevo y no se repite en otro dispositivo.
// En localhost no se marca la cuenta. Para apagarlo en pruebas:
// localStorage.setItem("studappy-tour-off", "1").
(function () {
  var LOCAL = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname);
  var MAZO = "paes-ciencias-mago";
  var CLAVE = "studappy-tour-mago:";
  var revisado = {}; // cuentas ya revisadas en esta carga de la página

  function user() {
    return window.Auth && window.Auth.user ? window.Auth.user() : null;
  }

  function isDemo() {
    return !!(window.Auth && window.Auth.isDemo && window.Auth.isDemo());
  }

  function apagado() {
    if (!LOCAL) return false;
    try { return localStorage.getItem("studappy-tour-off") === "1"; } catch (e) { return false; }
  }

  function yaDado(u) {
    try {
      if (localStorage.getItem(CLAVE + u.id) === "1") return true;
    } catch (e) { /* sin almacenamiento */ }
    return !!(u.user_metadata && u.user_metadata.tour_mago === "visto");
  }

  function marcar(u) {
    try { localStorage.setItem(CLAVE + u.id, "1"); } catch (e) { /* sin almacenamiento */ }
    if (LOCAL || !window.SB || !window.SB.client || !window.SB.client.auth) return;
    if (u.user_metadata && u.user_metadata.tour_mago === "visto") return;
    try {
      window.SB.client.auth.updateUser({ data: { tour_mago: "visto" } })
        .catch(function () { /* queda guardado en este navegador */ });
    } catch (e) { /* ignorar */ }
  }

  function revisar() {
    var u = user();
    if (!u || isDemo() || revisado[u.id] || apagado()) return;
    revisado[u.id] = true;
    if (yaDado(u) || !window.CloudDecks) return;
    // Primero llegan los mazos de la cuenta, para no agregarlo dos veces.
    Promise.resolve(window.CloudDecks.sync ? window.CloudDecks.sync() : null)
      .catch(function () { /* se revisa igual */ })
      .then(function () {
        var actual = user();
        if (!actual || actual.id !== u.id) return;
        if (window.CloudDecks.isOwned(MAZO)) { marcar(u); return; }
        return window.CloudDecks.acquire(MAZO).then(function () {
          marcar(u);
        }, function () {
          revisado[u.id] = false; // se intenta de nuevo en la próxima carga
        });
      });
  }

  if (window.Auth && window.Auth.onChange) {
    window.Auth.onChange(revisar);
    if (window.Auth.ready) revisar();
  }
})();
