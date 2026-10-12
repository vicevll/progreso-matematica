// Iconos propios · trazo único, extremos y uniones redondeados.
// Uso: window.icon("plus")  ->  <svg class="ic" ...>
(function () {
  var PATHS = {
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    edit: '<path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="M13.5 6.5l3 3"/>',
    trash:
      '<path d="M4 7h16"/><path d="M9.5 7V5.2A1.2 1.2 0 0 1 10.7 4h2.6a1.2 1.2 0 0 1 1.2 1.2V7"/><path d="M6.5 7l.9 12.1a1.3 1.3 0 0 0 1.3 1.2h6.6a1.3 1.3 0 0 0 1.3-1.2L17.5 7"/><path d="M10.5 11v6"/><path d="M13.5 11v6"/>',
    layers: '<path d="M12 3.5l8.5 4.7L12 12.9 3.5 8.2 12 3.5z"/><path d="M3.5 12.4L12 17l8.5-4.6"/><path d="M3.5 16.6L12 21.2l8.5-4.6"/>',
    cards:
      '<rect x="3" y="6.5" width="12" height="14" rx="3.2"/><path d="M8.5 4H18a3 3 0 0 1 3 3v8.5"/>',
    play: '<path d="M8 5.6v12.8a.8.8 0 0 0 1.2.7l10-6.4a.8.8 0 0 0 0-1.4l-10-6.4A.8.8 0 0 0 8 5.6z"/>',
    shuffle:
      '<path d="M4 7h3.2l9.3 10H20"/><path d="M17.2 4.4L20 7l-2.8 2.6"/><path d="M4 17h3.2l2.4-2.6"/><path d="M17.2 14.4L20 17l-2.8 2.6"/>',
    check: '<path d="M5 12.5l4.2 4.2L19 7"/>',
    x: '<path d="M6.5 6.5l11 11"/><path d="M17.5 6.5l-11 11"/>',
    search: '<circle cx="11" cy="11" r="6.6"/><path d="M20 20l-3.7-3.7"/>',
    arrowLeft: '<path d="M19 12H5.5"/><path d="M11 6.5L5.5 12l5.5 5.5"/>',
    chevronRight: '<path d="M9.5 6l6 6-6 6"/>',
    refresh: '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5V9H15"/>',
    sparkle:
      '<path d="M12 4l1.5 4.3L18 10l-4.5 1.7L12 16l-1.5-4.3L6 10l4.5-1.7L12 4z"/><path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z"/>',
    bolt: '<path d="M13 3.5L5.5 13H11l-1 7.5L18.5 11H13l1-7.5z"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.4"/>',
    brain:
      '<path d="M9.5 5.2A2.7 2.7 0 0 0 5 6.6a2.4 2.4 0 0 0-1.2 4.2A2.6 2.6 0 0 0 5 15.4a2.7 2.7 0 0 0 4.5 1.3V5.2z"/><path d="M14.5 5.2A2.7 2.7 0 0 1 19 6.6a2.4 2.4 0 0 1 1.2 4.2A2.6 2.6 0 0 1 19 15.4a2.7 2.7 0 0 1-4.5 1.3V5.2z"/><path d="M9.5 9.5H7.8"/><path d="M14.5 9.5h1.7"/><path d="M9.5 13H8"/><path d="M14.5 13h1.5"/>',
    palette:
      '<path d="M12 3.8a8.2 8.2 0 0 0 0 16.4c1.2 0 1.9-.8 1.9-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.4-.6-.4-1 0-.8.7-1.4 1.5-1.4h1.6A4 4 0 0 0 20 10.9C19.9 6.9 16.5 3.8 12 3.8z"/><circle cx="8.4" cy="10.4" r="1"/><circle cx="12" cy="8.2" r="1"/><circle cx="15.6" cy="10.4" r="1"/>',
    download: '<path d="M12 4v10.5"/><path d="M8 11l4 4 4-4"/><path d="M5 19h14"/>',
    upload: '<path d="M12 20V9.5"/><path d="M8 13l4-4 4 4"/><path d="M5 5h14"/>',
    image: '<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="8.5" cy="9" r="1.3"/><path d="M4.5 17l4.3-4.3 3.2 3 2.1-2.1 5.4 4.9"/>',
    alignLeft: '<path d="M5 6h14M5 10h10M5 14h14M5 18h9"/>',
    alignCenter: '<path d="M5 6h14M7 10h10M5 14h14M8 18h8"/>',
    alignRight: '<path d="M5 6h14M9 10h10M5 14h14M10 18h9"/>',
    sun: '<circle cx="12" cy="12" r="3.5"/><path d="M12 2.8v2M12 19.2v2M21.2 12h-2M4.8 12h-2M18.5 5.5l-1.4 1.4M6.9 17.1l-1.4 1.4M18.5 18.5l-1.4-1.4M6.9 6.9L5.5 5.5"/>',
    moon: '<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.7 8.7 0 1 0 20 15.5z"/>',
    key: '<circle cx="8" cy="15.5" r="4.2"/><path d="M11 12.5L19.5 4"/><path d="M16.5 7l2.6 2.6"/><path d="M14.2 9.3l2 2"/>',
    settings:
      '<circle cx="12" cy="12" r="3"/><path d="M12 3.5v2.2M12 18.3v2.2M4.9 7.8l1.9 1.1M17.2 15.1l1.9 1.1M4.9 16.2l1.9-1.1M17.2 8.9l1.9-1.1"/>'
  };

  window.ICONS = PATHS;

  window.icon = function (name, opts) {
    opts = opts || {};
    var path = PATHS[name] || "";
    var cls = "ic" + (opts.className ? " " + opts.className : "");
    var size = opts.size || 20;
    return (
      '<svg class="' + cls + '" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" ' +
      'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true">' + path + "</svg>"
    );
  };
})();
