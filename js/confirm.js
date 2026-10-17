(function () {
  var active = null;

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function close() {
    var node = active;
    active = null;
    if (window.Motion) window.Motion.close(node);
    else if (node && node.parentNode) node.parentNode.removeChild(node);
  }

  function ask(message, onConfirm, options) {
    if (active) return;
    options = options || {};
    var overlay = document.createElement("div");
    overlay.className = "confirm-overlay";
    overlay.innerHTML =
      '<div class="confirm-dialog" role="dialog" aria-modal="true" aria-labelledby="confirm-title">' +
        '<span class="confirm-kicker">Studappy</span>' +
        '<h2 id="confirm-title">' + esc(options.title || "¿Estás seguro que quieres abandonar?") + "</h2>" +
        '<p>' + esc(message || "Los cambios que no hayas guardado se perderán.") + "</p>" +
        '<div class="confirm-actions">' +
          '<button class="btn ghost" id="confirm-stay" type="button">' + esc(options.cancelLabel || "Seguir aquí") + "</button>" +
          '<button class="btn ' + (options.confirmClass === "primary" ? "primary" : "danger") + '" id="confirm-leave" type="button">' + esc(options.confirmLabel || "Abandonar") + "</button>" +
        "</div>" +
      "</div>";
    document.body.appendChild(overlay);
    active = overlay;

    function leave() {
      close();
      if (typeof onConfirm === "function") onConfirm();
    }

    overlay.addEventListener("click", function (event) {
      // options.onCancel: solo con el botón de cancelar (cerrar con Escape o
      // tocando fuera no cuenta como respuesta).
      if (event.target.closest("#confirm-stay")) {
        close();
        if (typeof options.onCancel === "function") options.onCancel();
        return;
      }
      if (event.target === overlay) {
        close();
        return;
      }
      if (event.target.closest("#confirm-leave")) leave();
    });
    overlay.addEventListener("keydown", function (event) {
      if (event.key === "Escape") close();
    });
    var stay = overlay.querySelector("#confirm-stay");
    if (stay) stay.focus();
  }

  window.StudappyConfirm = { ask: ask, close: close };
})();
