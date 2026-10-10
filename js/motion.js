// Cierre animado para overlays, modales y diálogos.
// Anima la salida, bloquea interacción durante la animación y luego retira el nodo.
(function () {
  var CLOSE_MS = 220;

  function close(node, done) {
    if (!node || node.getAttribute("data-closing")) {
      if (typeof done === "function") done();
      return;
    }
    node.setAttribute("data-closing", "1");
    node.removeAttribute("id");
    node.style.pointerEvents = "none";

    var focused = document.activeElement;
    if (focused && node.contains(focused) && typeof focused.blur === "function") focused.blur();

    node.classList.add("is-closing");
    setTimeout(function () {
      if (node.parentNode) node.parentNode.removeChild(node);
      if (typeof done === "function") done();
    }, CLOSE_MS);
  }

  window.Motion = { close: close, CLOSE_MS: CLOSE_MS };
})();
