(function () {
  "use strict";

  var books = window.LIBROS || [];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function isSignedIn() {
    return !!(window.ProgressStore && window.ProgressStore.getUser());
  }

  function folders() {
    var out = [];
    books.forEach(function (b) {
      if (out.indexOf(b.f) === -1) out.push(b.f);
    });
    return out.sort(function (a, b) {
      return a.localeCompare(b, "es");
    });
  }

  function viewHtml() {
    var total = books.length;
    var pdfs = books.filter(function (b) {
      return b.e === "pdf";
    }).length;
    var opts = folders()
      .map(function (f) {
        return '<option value="' + esc(f) + '">' + esc(f) + "</option>";
      })
      .join("");

    return (
      '<nav class="breadcrumb"><a href="#/">Inicio</a><span class="sep">/</span><span>Biblioteca</span></nav>' +
      '<section class="bib-hero">' +
        '<div class="eyebrow">BIBLIOTECA DIGITAL <span>MATH LIBRARY</span></div>' +
        "<h1>Libros de <em>matemática</em></h1>" +
        '<p class="bib-desc">Catálogo de ' +
          total +
          " libros de estudio en PDF y otros formatos, organizados por tema. Elige un libro para ver su ficha y descargarlo.</p>" +
        '<div class="bib-stats">' +
          '<span><b>' + total + "</b> libros</span>" +
          '<span><b>' + pdfs + "</b> PDF</span>" +
          '<span><b>' + folders().length + "</b> temas</span>" +
        "</div>" +
      "</section>" +
      '<div class="bib-controls">' +
        '<input class="bib-search" id="bib-q" type="search" placeholder="Buscar por título o autor…" autocomplete="off" />' +
        '<select class="bib-filter" id="bib-f"><option value="">Todos los temas</option>' + opts + "</select>" +
        '<span class="bib-count" id="bib-count"></span>' +
      "</div>" +
      '<div class="bib-grid" id="bib-grid"></div>'
    );
  }

  function filterBooks(term, folder) {
    return books.filter(function (b) {
      if (folder && b.f !== folder) return false;
      if (!term) return true;
      var hay = (b.t + " " + (b.a || "")).toLowerCase();
      return hay.indexOf(term) !== -1;
    });
  }

  function cardHtml(b) {
    return (
      '<button class="bib-card" type="button" data-bib="' + esc(b.u) + '">' +
        '<span class="bib-ext">' + esc(b.e || "?") + "</span>" +
        '<span class="bib-card-title">' + esc(b.t) + "</span>" +
        (b.a ? '<span class="bib-card-author">' + esc(b.a) + "</span>" : "") +
        '<span class="bib-card-foot">' +
          "<span>" + esc(b.s) + "</span>" +
          '<span class="bib-chip">' + esc(b.f) + "</span>" +
        "</span>" +
      "</button>"
    );
  }

  function renderGrid(term, folder) {
    var grid = document.getElementById("bib-grid");
    var count = document.getElementById("bib-count");
    if (!grid) return;
    var list = filterBooks(term, folder);
    count.textContent = list.length + " / " + books.length + " libros";
    grid.innerHTML = list.map(cardHtml).join("") ||
      '<p class="bib-empty">Sin resultados para esta búsqueda.</p>';
  }

  function detailHtml(b) {
    var signed = isSignedIn();
    var dl;
    if (signed) {
      dl =
        '<a class="bib-dl" href="' + esc(b.u) + '" target="_blank" rel="noopener">' +
          "Descargar desde MEGA ↗" +
        "</a>" +
        '<p class="bib-dl-note">Sesión activa: ' + esc((window.ProgressStore.getUser() || {}).email || "") + "</p>";
    } else {
      dl =
        '<button class="bib-dl bib-dl-login" type="button" data-dest="#/biblioteca">' +
          "Iniciar sesión para descargar" +
        "</button>" +
        '<p class="bib-dl-note">La descarga se habilita al iniciar sesión con Google.</p>';
    }
    return (
      '<div class="modal-overlay" id="bib-modal">' +
        '<div class="modal-box bib-modal-box" role="dialog" aria-modal="true">' +
          '<button class="bib-close" type="button" aria-label="Cerrar">✕</button>' +
          '<span class="modal-kicker">Biblioteca</span>' +
          "<h3>" + esc(b.t) + "</h3>" +
          '<dl class="bib-fields">' +
            "<div><dt>Autor</dt><dd" + (b.a ? "" : ' class="muted"') + ">" + esc(b.a || "No especificado") + "</dd></div>" +
            "<div><dt>Libro</dt><dd>" + esc(b.t) + "</dd></div>" +
            "<div><dt>Año</dt><dd" + (b.y ? "" : ' class="muted"') + ">" + esc(b.y || "No disponible") + "</dd></div>" +
            "<div><dt>Tema</dt><dd>" + esc(b.f) + "</dd></div>" +
            "<div><dt>Tamaño</dt><dd>" + esc(b.s) + "</dd></div>" +
            "<div><dt>Formato</dt><dd>" + esc((b.e || "?").toUpperCase()) + "</dd></div>" +
          "</dl>" +
          '<div class="bib-dl-zone">' + dl + "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function openDetail(url) {
    var book = null;
    for (var i = 0; i < books.length; i++) {
      if (books[i].u === url) {
        book = books[i];
        break;
      }
    }
    if (!book) return;
    var existing = document.getElementById("bib-modal");
    if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    var el = document.createElement("div");
    el.innerHTML = detailHtml(book);
    var overlay = el.firstChild;
    document.body.appendChild(overlay);
  }

  function closeDetail() {
    var overlay = document.getElementById("bib-modal");
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
  }

  function loginToSee(dest) {
    if (window.SB && window.SB.configured && window.SB.beginLogin) {
      window.SB.beginLogin(dest);
    } else if (window.Novedades && window.Novedades.notifyError) {
      window.Novedades.notifyError("Inicia sesión con Google para continuar.");
    }
  }

  document.addEventListener("click", function (e) {
    var card = e.target.closest(".bib-card[data-bib]");
    if (card) {
      openDetail(card.getAttribute("data-bib"));
      return;
    }
    var loginBtn = e.target.closest(".bib-dl-login[data-dest]");
    if (loginBtn) {
      loginToSee(loginBtn.getAttribute("data-dest") || "#/biblioteca");
      return;
    }
    var closeBtn = e.target.closest(".bib-close");
    if (closeBtn) {
      closeDetail();
      return;
    }
    var overlay = e.target.closest("#bib-modal");
    if (overlay && e.target === overlay) {
      closeDetail();
      return;
    }
  });

  document.addEventListener("input", function (e) {
    if (e.target && e.target.id === "bib-q") {
      var f = document.getElementById("bib-f");
      renderGrid(e.target.value.trim().toLowerCase(), f ? f.value : "");
    }
  });

  document.addEventListener("change", function (e) {
    if (e.target && e.target.id === "bib-f") {
      var q = document.getElementById("bib-q");
      renderGrid(q ? q.value.trim().toLowerCase() : "", e.target.value);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDetail();
  });

  window.Biblioteca = {
    viewHtml: viewHtml,
    render: function (container) {
      if (container) {
        container.innerHTML = viewHtml();
        renderGrid("", "");
        return;
      }
      var app = document.getElementById("app");
      if (app) {
        app.innerHTML = viewHtml();
        renderGrid("", "");
      }
    },
    reRender: renderGrid
  };
})();