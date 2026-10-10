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

  function itemHtml(item) {
    var owned = window.CloudDecks && window.CloudDecks.isOwned(item.id);
    var available = item.status === "available";
    var disabled = !available || !!busy[item.id];
    var action;
    if (owned) {
      var deck = window.DeckStore.all().filter(function (entry) { return entry.catalogId === item.id; })[0];
      action = '<a class="btn primary" href="#/mazo/' + esc(deck ? deck.id : "") + '">' + icon("play") + "<span>Estudiar mazo</span></a>";
    } else if (available) {
      action = '<button class="btn primary" type="button" data-acquire="' + esc(item.id) + '"' + (disabled ? " disabled" : "") + '>' +
        icon(busy[item.id] ? "refresh" : "plus") +
        "<span>" + (busy[item.id] ? "Añadiendo…" : "Añadir") + "</span></button>";
    } else {
      action = '<button class="btn ghost" type="button" disabled><span>Próximamente</span></button>';
    }
    var message = messages[item.id] || (owned ? "Ya está en Mis mazos y se sincroniza con tu cuenta." : available ? "Gratis · se guarda en tu biblioteca de Supabase." : "Estamos preparando este mazo gratuito.");
    var breakdown = item.breakdown || {};
    var counts = item.cards.length
      ? item.cards.length + " tarjetas · " + (breakdown.concepts || 0) + " conceptos · " + (breakdown.exercises || 0) + " ejercicios · " + (breakdown.formulas || 0) + " fórmulas"
      : "Contenido en preparación";
    return (
      '<article class="store-card' + (owned ? " owned" : "") + '" style="--deck-color:' + esc(item.color) + '">' +
        '<div class="store-card-top"><span class="store-mark" style="background:' + esc(item.color) + '">' + icon(available ? "cards" : "sparkle", 22) + "</span>" +
          '<span class="store-badge' + (available ? " free" : " soon") + '">' + (owned ? "En tu biblioteca" : available ? "Gratis" : "Próximamente") + "</span></div>" +
        '<div class="store-card-copy"><span class="store-kicker">' + esc(item.tags.join(" · ")) + "</span><h2>" + esc(item.title) + "</h2><p>" + esc(item.description) + "</p></div>" +
        '<div class="store-card-bottom"><span class="store-card-count">' + icon("cards", 15) + esc(counts) + "</span>" +
          '<div class="store-tags">' + item.tags.map(function (tag) { return '<span>' + esc(tag) + "</span>"; }).join("") + "</div>" +
          '<p class="store-message' + (messages[item.id] && !owned ? " error" : "") + '" role="status">' + esc(message) + "</p>" + action +
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
      '<section class="store-header"><span class="eyebrow">BIBLIOTECA DE ESTUDIO</span><h1>Tienda de mazos</h1>' +
        '<p>Explora mazos de flashcards. Al obtener uno gratis, se copia a tu biblioteca de Supabase para que puedas estudiarlo desde Mis mazos.</p>' +
        '<div class="store-stats"><span><strong>' + availableCount + "</strong> " + (availableCount === 1 ? "mazo disponible" : "mazos disponibles") + "</span><span><strong>" + ownedCount + "</strong> " + (ownedCount === 1 ? "adquirido" : "adquiridos") + "</span></div></section>" +
      (window.CloudDecks && window.CloudDecks.configured()
        ? ""
        : '<p class="store-setup-note">Para guardar adquisiciones, configura Supabase y ejecuta <code>supabase/tienda.sql</code> en el SQL Editor.</p>') +
      '<section class="store-grid">' + items.map(itemHtml).join("") + "</section>";
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-acquire]");
    if (!button || !window.CloudDecks) return;
    var catalogId = button.getAttribute("data-acquire");
    if (busy[catalogId]) return;
    busy[catalogId] = true;
    messages[catalogId] = "Guardando en tu cuenta…";
    render();
    window.CloudDecks.acquire(catalogId)
      .then(function () {
        messages[catalogId] = "Mazo agregado correctamente a tu biblioteca.";
      })
      .catch(function (error) {
        var detail = error && error.message ? error.message : "Error desconocido";
        messages[catalogId] = "No se pudo adquirir. Verifica que supabase/tienda.sql esté ejecutado y que Supabase esté activo. " + detail;
      })
      .then(function () {
        busy[catalogId] = false;
        render();
      });
  });

  window.Tienda = { render: render };
})();
