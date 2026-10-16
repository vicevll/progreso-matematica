(function () {
  var busy = {};
  var messages = {};

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function icon(name, size) {
    return window.icon ? window.icon(name, { size: size || 18 }) : "";
  }

  // opts.canje (desde js/economia.js): botón para canjear el mazo con puntos.
  function itemHtml(item, opts) {
    opts = opts || {};
    var owned = window.CloudDecks && window.CloudDecks.isOwned(item.id);
    var available = item.status === "available";
    var disabled = !available || !!busy[item.id];
    // Mazo que se canjea con puntos (supabase/misiones.sql) y todavía no se canjeó.
    var conPuntos = available && !owned && window.Economia && window.Economia.mazoDelCatalogo(item.id);
    var porCanjear = conPuntos && !conPuntos.tengo;
    var action;
    if (owned) {
      var deck = window.DeckStore.all().filter(function (entry) { return entry.catalogId === item.id; })[0];
      action = '<a class="btn primary" href="#/mazo/' + esc(deck ? deck.id : "") + '">' + icon("play") + "<span>Estudiar mazo</span></a>";
    } else if (porCanjear) {
      action = opts.canje || ('<button class="btn eco-canjear" type="button" data-canjear="' + esc(conPuntos.id) + '">' + window.Economia.px("moneda", 14) +
        "<span>Canjear · " + esc(new Intl.NumberFormat("es-CL").format(conPuntos.precio)) + " pts</span></button>");
    } else if (available) {
      action = '<button class="btn primary" type="button" data-acquire="' + esc(item.id) + '"' + (disabled ? " disabled" : "") + '>' +
        icon(busy[item.id] ? "refresh" : "plus") +
        "<span>" + (busy[item.id] ? "Añadiendo…" : "Añadir") + "</span></button>";
    } else {
      action = '<button class="btn ghost" type="button" disabled><span>Próximamente</span></button>';
    }
    var message = messages[item.id] || (owned ? "Ya está en Mis mazos y se sincroniza con tu cuenta." : porCanjear ? "Se canjea con puntos de las misiones." : conPuntos ? "Ya lo canjeaste: añádelo a tu biblioteca." : available ? "Gratis · se guarda en tu cuenta." : "Estamos preparando este mazo gratuito.");
    var etiqueta = owned ? "En tu biblioteca" : conPuntos ? new Intl.NumberFormat("es-CL").format(conPuntos.precio) + " pts" : available ? "Gratis" : "Próximamente";
    var breakdown = item.breakdown || {};
    var counts = !item.cards.length
      ? "Contenido en preparación"
      : item.sections && item.sections.length
        ? item.cards.length + " tarjetas · " + item.sections.length + " submazos"
        : item.cards.length + " tarjetas · " + (breakdown.concepts || 0) + " conceptos · " + (breakdown.exercises || 0) + " ejercicios · " + (breakdown.formulas || 0) + " fórmulas";
    if (item.theme === "mago" && window.MagoArte) return magoItemHtml(item, owned, available, action, message, counts, etiqueta);
    if (item.theme === "aurora-quimica" && window.AuroraQuimicaArte) return auroraItemHtml(item, owned, action, message, counts, etiqueta, conPuntos);
    var mark = icon(available ? "cards" : "sparkle", 22);
    return (
      '<article class="store-card' + (owned ? " owned" : "") + (item.theme ? " store-" + esc(item.theme) : "") + '" style="--deck-color:' + esc(item.color) + '">' +
        '<div class="store-card-top"><span class="store-mark" style="background:' + esc(item.color) + '">' + mark + "</span>" +
          '<span class="store-badge' + (available ? " free" : " soon") + '">' + esc(etiqueta) + "</span></div>" +
        '<div class="store-card-copy"><span class="store-kicker">' + esc(item.tags.join(" · ")) + "</span><h2>" + esc(item.title) + "</h2><p>" + esc(item.description) + "</p></div>" +
        '<div class="store-card-bottom"><span class="store-card-count">' + icon("cards", 15) + esc(counts) + "</span>" +
          '<div class="store-tags">' + item.tags.map(function (tag) { return '<span>' + esc(tag) + "</span>"; }).join("") + "</div>" +
          '<p class="store-message' + (messages[item.id] && !owned ? " error" : "") + '" role="status">' + esc(message) + "</p>" + action +
        "</div>" +
      "</article>"
    );
  }

  // Mazo del mago: versión compacta de su tarjeta de Mis mazos (mismo cielo,
  // el mago con su química en pixel art y un ícono por submazo).
  function magoItemHtml(item, owned, available, action, message, counts, etiqueta) {
    var arte = window.MagoArte;
    var iconos = (item.sections || []).map(function (sec, i) {
      return '<span class="sm-submazo" title="Submazo ' + (i + 1) + ": " + esc(sec.title) + '">' + arte.icono(sec.icon, 32) + "</span>";
    }).join("");
    return (
      '<article class="store-card store-mago' + (owned ? " owned" : "") + '" style="--deck-color:' + esc(item.color) + '">' +
        '<div class="sm-arte">' + arte.escenaHtml() + arte.imagenHtml() +
          '<span class="store-badge sm-badge' + (available ? " free" : " soon") + '">' + esc(etiqueta) + "</span>" +
        "</div>" +
        '<div class="sm-cuerpo">' +
          '<span class="eyebrow">' + esc(String(item.subtitle || item.tags.join(" · ")).toUpperCase()) + "</span>" +
          "<h2>" + esc(item.title) + "</h2>" +
          "<p>" + esc(item.description) + "</p>" +
          '<div class="sm-submazos" aria-hidden="true">' + iconos + "</div>" +
          '<span class="store-card-count">' + icon("cards", 15) + esc(counts) + "</span>" +
          '<p class="store-message' + (messages[item.id] && !owned ? " error" : "") + '" role="status">' + esc(message) + "</p>" + action +
        "</div>" +
      "</article>"
    );
  }

  // Mazo Aurora química (se canjea con puntos): franja de aurora con el matraz,
  // su nivel, sus submazos y el precio.
  function auroraItemHtml(item, owned, action, message, counts, etiqueta, conPuntos) {
    var arte = window.AuroraQuimicaArte;
    var nivel = arte.nivel(item);
    var iconos = (item.sections || []).map(function (sec, i) {
      return '<span class="sm-submazo" title="Submazo ' + (i + 1) + ": " + esc(sec.title) + '">' + arte.icono(sec.icon, 32) + "</span>";
    }).join("");
    var precio = conPuntos && !owned
      ? '<span class="sa-precio">' + (window.Economia ? window.Economia.px("moneda", 16) : "") + esc(new Intl.NumberFormat("es-CL").format(conPuntos.precio)) + "</span>"
      : "";
    return (
      '<article class="store-card store-aq' + (owned ? " owned" : "") + '" style="--deck-color:' + esc(item.color) + '">' +
        '<div class="sa-arte">' + arte.escenaHtml() + arte.imagenHtml() +
          (nivel ? '<span class="aq-nivel">' + esc(nivel) + "</span>" : "") +
          (owned || (conPuntos && conPuntos.tengo) ? '<span class="store-badge sm-badge sa-badge free">' + (owned ? "En tu biblioteca" : "Canjeado") + "</span>" : "") +
        "</div>" +
        '<div class="sm-cuerpo">' +
          '<span class="eyebrow">' + esc(String(item.subtitle || item.tags.join(" · ")).toUpperCase()) + "</span>" +
          "<h2>" + esc(item.title) + "</h2>" +
          "<p>" + esc(item.description) + "</p>" +
          '<div class="sm-submazos" aria-hidden="true">' + iconos + "</div>" +
          '<span class="store-card-count">' + icon("cards", 15) + esc(counts) + "</span>" +
          '<p class="store-message' + (messages[item.id] && !owned ? " error" : "") + '" role="status">' + esc(message) + "</p>" +
          '<div class="sa-pie">' + precio + action + "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function render(container) {
    container = container || document.getElementById("app");
    if (!container) return;
    var items = window.STORE_CATALOG || [];
    var availableCount = items.filter(function (item) { return item.status === "available"; }).length;
    var ownedCount = items.filter(function (item) { return window.CloudDecks && window.CloudDecks.isOwned(item.id); }).length;
    container.innerHTML =
      '<nav class="breadcrumb"><a href="#/">Mis mazos</a><span class="sep">' + icon("chevronRight", 14) + "</span><span>Tienda</span></nav>" +
      '<section class="store-header"><span class="eyebrow">BIBLIOTECA DE ESTUDIO</span><h1>Tienda</h1>' +
        '<p>Añade mazos gratis a tu cuenta y canjea los puntos de las misiones por temas visuales, IA plus y mazos.</p>' +
        '<div class="store-stats"><span><strong>' + availableCount + "</strong> " + (availableCount === 1 ? "mazo disponible" : "mazos disponibles") + "</span><span><strong>" + ownedCount + "</strong> " + (ownedCount === 1 ? "adquirido" : "adquiridos") + "</span></div></section>" +
      (window.CloudDecks && window.CloudDecks.configured()
        ? ""
        : window.Auth && window.Auth.isDemo && window.Auth.isDemo()
          ? '<p class="store-setup-note">Estás en modo prueba: puedes ver el catálogo, pero para añadir mazos entra con Google.</p>'
          : '<p class="store-setup-note">Para guardar adquisiciones, configura Supabase y ejecuta <code>supabase/tienda.sql</code> en el SQL Editor.</p>') +
      (window.Economia ? window.Economia.billeteraHtml() : "") +
      '<h2 class="eco-titulo">' + (window.Economia ? window.Economia.px("carta", 28) : "") + "Mazos</h2>" +
      // Los mazos que se canjean con puntos van en «Mazos por puntos» (js/economia.js).
      '<section class="store-grid">' + items.filter(function (item) { return !(item.price > 0); }).map(function (item) { return itemHtml(item); }).join("") + "</section>" +
      (window.Economia ? window.Economia.tiendaHtml() : "");
  }

  // Solo se redibuja si la tienda sigue en pantalla: si el usuario se fue a
  // otra página mientras se guardaba el mazo, no se pisa esa página.
  function onStorePage() {
    return location.hash.replace(/^#\/?/, "").split("/")[0] === "tienda";
  }

  function refresh() {
    if (onStorePage()) render();
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-acquire]");
    if (!button || !window.CloudDecks) return;
    var catalogId = button.getAttribute("data-acquire");
    if (busy[catalogId]) return;
    busy[catalogId] = true;
    messages[catalogId] = "Guardando en tu cuenta…";
    refresh();
    window.CloudDecks.acquire(catalogId)
      .then(function () {
        messages[catalogId] = "Mazo agregado correctamente a tu biblioteca.";
      })
      .catch(function (error) {
        messages[catalogId] = error && error.message ? error.message : "No se pudo añadir el mazo. Intenta de nuevo.";
      })
      .then(function () {
        busy[catalogId] = false;
        refresh();
      });
  });

  window.Tienda = { render: render, itemHtml: itemHtml };
})();
