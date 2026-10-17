// El Mazo del mago, pedido desde el modo de prueba.
//
// Ya no se regala solo: lo ofrece el tutorial (js/guia.js). Con cuenta se
// agrega ahí mismo; en la prueba, el botón «Crear cuenta y llevármelo» deja
// una marca en este navegador (studappy-quiere-mago, con la hora) y abre
// Google. Al volver con la cuenta nueva, este archivo agrega el mazo y borra
// la marca. La marca vale un día.
(function () {
  var MAZO = "paes-ciencias-mago";
  var CLAVE = "studappy-quiere-mago";
  var VIGENCIA = 24 * 60 * 60 * 1000;
  var revisado = {}; // cuentas ya revisadas en esta carga de la página

  function user() {
    return window.Auth && window.Auth.user ? window.Auth.user() : null;
  }

  function isDemo() {
    return !!(window.Auth && window.Auth.isDemo && window.Auth.isDemo());
  }

  function isTrial() {
    return !!(window.Auth && window.Auth.isTrial && window.Auth.isTrial());
  }

  function pedido() {
    var v = "";
    try { v = localStorage.getItem(CLAVE) || ""; } catch (e) { return false; }
    if (!v) return false;
    var t = parseInt(v, 10);
    if (v === "1" || (t && Date.now() - t < VIGENCIA)) return true;
    borrar(); // marca vencida
    return false;
  }

  function borrar() {
    try { localStorage.removeItem(CLAVE); } catch (e) { /* sin almacenamiento */ }
  }

  function revisar() {
    var u = user();
    if (!u || isDemo() || isTrial() || revisado[u.id] || !window.CloudDecks) return;
    if (!pedido()) return;
    revisado[u.id] = true;
    // Primero llegan los mazos de la cuenta, para no agregarlo dos veces.
    Promise.resolve(window.CloudDecks.sync ? window.CloudDecks.sync() : null)
      .catch(function () { /* se revisa igual */ })
      .then(function () {
        var actual = user();
        if (!actual || actual.id !== u.id) return;
        if (window.CloudDecks.isOwned(MAZO)) { borrar(); return; }
        return window.CloudDecks.acquire(MAZO).then(function () {
          borrar();
          if (window.Novedades && window.Novedades.notify) window.Novedades.notify("¡El Mazo del mago ya está en Mis mazos!");
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
