// Studappy · aplica el tema visual elegido antes de pintar la página.
// El tema real vive en la cuenta (supabase/misiones.sql); aquí se recuerda el
// último en este navegador para que no parpadee al cargar. js/economia.js lo
// actualiza al iniciar sesión.
(function () {
  var TEMAS = { noche: "#060a16", aurora: "#031014", atardecer: "#120810", bosque: "#050e08", arcade: "#0b0418" };
  var CLAVE = "studappy-tema";

  function aplicar(id) {
    id = String(id || "").replace(/^tema:/, "");
    if (!TEMAS[id]) id = "noche";
    var html = document.documentElement;
    if (id === "noche") html.removeAttribute("data-tema");
    else html.setAttribute("data-tema", id);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", TEMAS[id]);
    try {
      if (id === "noche") localStorage.removeItem(CLAVE);
      else localStorage.setItem(CLAVE, id);
    } catch (e) { /* sin almacenamiento */ }
    return id;
  }

  var guardado = null;
  try { guardado = localStorage.getItem(CLAVE); } catch (e) { /* sin almacenamiento */ }
  if (guardado && TEMAS[guardado]) {
    document.documentElement.setAttribute("data-tema", guardado);
    document.addEventListener("DOMContentLoaded", function () { aplicar(guardado); });
  }

  window.StudappyTema = {
    aplicar: aplicar,
    actual: function () { return document.documentElement.getAttribute("data-tema") || "noche"; },
    existe: function (id) { return !!TEMAS[String(id || "").replace(/^tema:/, "")]; }
  };
})();
