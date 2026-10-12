/* Vercel Web Analytics + Speed Insights para Studappy.
 *
 * La app cambia de pantalla con rutas "#/..." (#/tienda, #/mazo/<id>...).
 * Los scripts de Vercel solo cuentan una visita cuando cambia la ruta real
 * (pathname), así que sin esto todo quedaría registrado como "/".
 *
 * Qué hace:
 *  - Registra una visita por cada pantalla, con su ruta como si fuera una
 *    página normal (/tienda, /mazo/abc...) y agrupada por tipo de pantalla
 *    (/mazo/[id], /mazo/[id]/[submazo]).
 *  - Quita el "#" y los parámetros "?..." de las direcciones que se envían,
 *    para que nunca salgan códigos de inicio de sesión ni otros datos.
 *
 * Debe cargarse con "defer" ANTES de los dos scripts de /_vercel/ (index.html).
 */
(function () {
  "use strict";

  // Cola estándar de Vercel: guarda las llamadas hasta que carguen sus scripts.
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };

  function segmento(s) {
    return encodeURIComponent(String(s).slice(0, 80));
  }

  // Traduce el hash actual a { path, route } (ver el router en js/app.js).
  function rutaActual() {
    var hash = location.hash;
    // Solo las rutas de la app empiezan con "#/"; cualquier otro hash
    // (por ejemplo, respuestas del inicio de sesión) cuenta como el inicio.
    if (hash.indexOf("#/") !== 0) return { path: "/", route: "/" };
    var partes = hash.slice(2).split(/[?&]/)[0].split("/").filter(Boolean);

    if (partes[0] === "tienda") return { path: "/tienda", route: "/tienda" };
    if (partes[0] === "generador") return { path: "/generador", route: "/generador" };
    if (partes[0] === "mazo" && partes[1]) {
      var base = "/mazo/" + segmento(partes[1]);
      if (!partes[2]) return { path: base, route: "/mazo/[id]" };
      if (partes[2] === "todo") return { path: base + "/todo", route: "/mazo/[id]/todo" };
      return { path: base + "/" + segmento(partes[2]), route: "/mazo/[id]/[submazo]" };
    }
    return { path: "/", route: "/" };
  }

  // Dirección limpia: origen + ruta, sin "?..." ni "#...".
  function limpiar(url) {
    try {
      var u = new URL(url, location.origin);
      u.search = "";
      u.hash = "";
      return u.href;
    } catch (e) {
      return location.origin + "/";
    }
  }

  function conUrlLimpia(evento) {
    var copia = {};
    for (var k in evento) if (Object.prototype.hasOwnProperty.call(evento, k)) copia[k] = evento[k];
    copia.url = limpiar(evento.url);
    return copia;
  }

  window.va("beforeSend", conUrlLimpia);
  window.si("beforeSend", conUrlLimpia);

  var scriptSpeed = document.querySelector('script[src*="/_vercel/speed-insights/"]');
  var ultima = null;

  function registrar() {
    var r = rutaActual();
    // Speed Insights lee estos atributos cada vez que mide algo.
    if (scriptSpeed) {
      scriptSpeed.setAttribute("data-route", r.route);
      scriptSpeed.setAttribute("data-path", r.path);
    }
    if (r.path === ultima) return;
    ultima = r.path;
    window.va("pageview", { route: r.route, path: r.path });
  }

  registrar();
  window.addEventListener("hashchange", registrar);
})();
