(function () {
  var STORAGE_KEY = "mate-progreso";
  var LAST_KEY = "mate-ultimo";
  var app = document.getElementById("app");
  var revealObserver = null;
  var courseObserver = null;
  var reduceMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var MATH_OPTIONS = {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false }
    ],
    throwOnError: false
  };

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  var progress = loadProgress();

  function isSectionDone(areaId, temaId, index) {
    return progress[areaId + "/" + temaId + "#" + index] === true;
  }

  function toggleSection(areaId, temaId, index) {
    var k = areaId + "/" + temaId + "#" + index;
    if (progress[k]) {
      delete progress[k];
    } else {
      progress[k] = true;
    }
    saveProgress();
  }

  function getSections(areaId, temaId) {
    var cursos = window.CURSOS[areaId] || {};
    var md = cursos[temaId];
    if (!md) return [];
    var lines = md.split("\n");
    var sections = [];
    var current = null;
    for (var i = 0; i < lines.length; i++) {
      var trimmed = lines[i].trim();
      var heading = trimmed.match(/^##\s+(.*)$/);
      if (heading) {
        if (current) sections.push(current);
        current = { title: heading[1], body: [] };
      } else if (current) {
        current.body.push(lines[i]);
      }
    }
    if (current) sections.push(current);
    return sections.map(function (s) {
      return { title: s.title, body: s.body.join("\n") };
    });
  }

  function courseStats(areaId, temaId) {
    var sections = getSections(areaId, temaId);
    var done = 0;
    sections.forEach(function (_, i) {
      if (isSectionDone(areaId, temaId, i)) done++;
    });
    return { done: done, total: sections.length };
  }

  function areaStats(area) {
    var done = 0;
    var total = 0;
    area.temas.forEach(function (tema) {
      var s = courseStats(area.id, tema.id);
      done += s.done;
      total += s.total;
    });
    return { done: done, total: total };
  }

  function globalStats() {
    var done = 0;
    var total = 0;
    CATALOGO.forEach(function (area) {
      var s = areaStats(area);
      done += s.done;
      total += s.total;
    });
    return { done: done, total: total };
  }

  function findArea(areaId) {
    for (var i = 0; i < CATALOGO.length; i++) {
      if (CATALOGO[i].id === areaId) return CATALOGO[i];
    }
    return null;
  }

  function findTema(area, temaId) {
    for (var i = 0; i < area.temas.length; i++) {
      if (area.temas[i].id === temaId) return area.temas[i];
    }
    return null;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function renderMath() {
    if (typeof window.renderMathInElement === "function") {
      try {
        window.renderMathInElement(app, MATH_OPTIONS);
      } catch (e) {
        /* fórmula inválida: queda el texto original */
      }
    }
  }

  function setWide(on) {
    app.classList.toggle("wide", !!on);
  }

  function setupReveal() {
    if (reduceMotion || typeof window.IntersectionObserver !== "function") {
      Array.prototype.forEach.call(document.querySelectorAll(".reveal"), function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    }
    Array.prototype.forEach.call(document.querySelectorAll(".reveal:not(.is-visible)"), function (el) {
      revealObserver.observe(el);
    });
  }

  function setupCourseSpy() {
    clearCourseSpy();
    var nav = document.getElementById("section-index");
    if (!nav || typeof window.IntersectionObserver !== "function") return;
    var chips = nav.querySelectorAll(".chip");
    courseObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Array.prototype.forEach.call(chips, function (chip) {
          chip.classList.toggle("active", chip.getAttribute("data-target") === entry.target.id);
        });
      });
    }, { rootMargin: "-42% 0px -52% 0px", threshold: 0 });
    Array.prototype.forEach.call(document.querySelectorAll(".lesson-section"), function (section) {
      courseObserver.observe(section);
    });
  }

  function clearCourseSpy() {
    if (courseObserver) {
      courseObserver.disconnect();
      courseObserver = null;
    }
  }

  function setupParallax() {
    if (reduceMotion) return;
    var ticking = false;
    function update() {
      var scrollTop = window.scrollY;
      document.documentElement.style.setProperty("--scroll", String(scrollTop));
      var nav = document.getElementById("section-index");
      if (nav) {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        nav.style.setProperty("--read", max > 0 ? Math.min(1, scrollTop / max).toFixed(4) : "0");
      }
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
    update();
  }

  function loadLastVisited() {
    try {
      return JSON.parse(localStorage.getItem(LAST_KEY)) || null;
    } catch (e) {
      return null;
    }
  }

  function saveLastVisited(areaId, temaId) {
    try {
      localStorage.setItem(LAST_KEY, JSON.stringify({ areaId: areaId, temaId: temaId }));
    } catch (e) {
      /* almacenamiento no disponible */
    }
  }

  /* ---------- Vistas ---------- */

  function renderHome() {
    setWide(false);
    var g = globalStats();
    var pct = g.total ? Math.round((g.done / g.total) * 100) : 0;

    var cards = CATALOGO.map(function (area, i) {
      var s = areaStats(area);
      var aPct = s.total ? Math.round((s.done / s.total) * 100) : 0;
      return (
        '<a class="area-card reveal" href="#/area/' + area.id + '" style="--area-color:' + area.color + ";transition-delay:" + (i % 8) * 35 + 'ms">' +
          "<h2>" + esc(area.nombre) + "</h2>" +
          "<p>" + esc(area.descripcion) + "</p>" +
          '<div class="area-meta">' +
            "<span>" + s.total + " secciones</span>" +
            '<div class="mini-bar"><span style="width:' + aPct + '%"></span></div>' +
            "<span>" + s.done + "/" + s.total + "</span>" +
          "</div>" +
        "</a>"
      );
    }).join("");

    var last = loadLastVisited();
    var continueCard = "";
    if (last) {
      var lastArea = findArea(last.areaId);
      var lastTema = lastArea ? findTema(lastArea, last.temaId) : null;
      if (lastArea && lastTema) {
        continueCard =
          '<a class="continue-card reveal" href="#/curso/' + lastArea.id + "/" + lastTema.id + '">' +
            '<span class="continue-kicker">Continuar donde ibas</span>' +
            '<span class="continue-title">' + esc(lastTema.nombre) + "</span>" +
            '<span class="continue-meta">' + esc(lastArea.nombre) + "</span>" +
          "</a>";
      }
    }

    app.innerHTML =
      '<section class="hero-simple">' +
        '<div class="eyebrow reveal">MAPA DE ESTUDIO <span>01—08</span></div>' +
        '<h1 class="reveal">Tu ruta de<br><em>matemática</em></h1>' +
        '<p class="reveal">8 áreas y 59 temas, de 10° grado a último año de universidad. Cada curso se completa sección por sección.</p>' +
        '<div class="hero-progress reveal">' +
          '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
          '<span class="label">' + g.done + " de " + g.total + " secciones · " + pct + "%</span>" +
        "</div>" +
        '<div class="home-note reveal"><span class="note-dot"></span><span>Elige un área para comenzar una nueva línea de estudio.</span></div>' +
        continueCard +
      "</section>" +
      '<h2 class="section-title reveal">Áreas</h2>' +
      '<div class="area-grid">' + cards + "</div>";

    clearCourseSpy();
    setupReveal();
  }

  function renderArea(areaId) {
    setWide(false);
    var area = findArea(areaId);
    if (!area) return renderHome();

    var s = areaStats(area);
    var pct = s.total ? Math.round((s.done / s.total) * 100) : 0;

    var topics = area.temas.map(function (tema, i) {
      var c = courseStats(area.id, tema.id);
      var cDone = c.total > 0 && c.done === c.total;
      var cPct = c.total ? Math.round((c.done / c.total) * 100) : 0;
      return (
        '<a class="topic-card reveal' + (cDone ? " done" : "") + '" href="#/curso/' + area.id + "/" + tema.id + '" style="transition-delay:' + Math.min(i, 8) * 30 + 'ms">' +
          '<div class="topic-num">' + (cDone ? "✓" : i + 1) + "</div>" +
          '<div class="topic-body">' +
            "<h3>" + esc(tema.nombre) +
              '<span class="badge nivel">' + esc(tema.nivel) + "</span>" +
            "</h3>" +
            "<p>" + esc(tema.descripcion) + "</p>" +
            '<div class="topic-progress">' +
              '<div class="mini-bar"><span style="width:' + cPct + '%"></span></div>' +
              "<span>" + c.done + "/" + c.total + " secciones</span>" +
            "</div>" +
          "</div>" +
        "</a>"
      );
    }).join("");

    app.innerHTML =
      '<nav class="breadcrumb">' +
        '<a href="#/">Inicio</a><span class="sep">/</span><span>' + esc(area.nombre) + "</span>" +
      "</nav>" +
      '<section class="area-header" style="--area-color:' + area.color + '">' +
        "<h1>" + esc(area.nombre) + "</h1>" +
        "<p>" + esc(area.descripcion) + "</p>" +
        '<div class="progress-row">' +
          '<div class="mini-bar"><span style="width:' + pct + '%"></span></div>' +
          "<span>" + s.done + " de " + s.total + " secciones completadas</span>" +
        "</div>" +
      "</section>" +
      '<div class="topic-list">' + topics + "</div>";

    clearCourseSpy();
    setupReveal();
  }

  function sectionButton(areaId, temaId, index, done) {
    return (
      '<button class="btn section-toggle' + (done ? " done" : " primary") + '" ' +
        'data-area="' + areaId + '" data-tema="' + temaId + '" data-index="' + index + '">' +
        (done ? "✓ Sección completada" : "Marcar como completado") +
      "</button>"
    );
  }

  function renderCurso(areaId, temaId) {
    setWide(true);
    var area = findArea(areaId);
    if (!area) return renderHome();
    var tema = findTema(area, temaId);
    if (!tema) return renderArea(areaId);
    saveLastVisited(area.id, tema.id);

    var sections = getSections(area.id, tema.id);
    var stats = courseStats(area.id, tema.id);
    var pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;

    if (sections.length === 0) {
      app.innerHTML =
        '<nav class="breadcrumb"><a href="#/">Inicio</a><span class="sep">/</span>' +
        '<a href="#/area/' + area.id + '">' + esc(area.nombre) + "</a></nav>" +
        '<p class="empty">Este curso todavía no tiene contenido.</p>';
      return;
    }

    var chips = sections.map(function (sec, i) {
      var done = isSectionDone(area.id, tema.id, i);
      return (
        '<button class="chip' + (done ? " done" : "") + '" data-target="seccion-' + i + '" title="' + esc(sec.title) + '">' +
          '<span class="chip-check">' + (done ? "✓" : i + 1) + "</span>" +
          "<span>" + esc(sec.title) + "</span>" +
        "</button>"
      );
    }).join("");

    var lessons = sections.map(function (sec, i) {
      var done = isSectionDone(area.id, tema.id, i);
      return (
        '<section class="lesson-section reveal' + (done ? " done" : "") + '" id="seccion-' + i + '" style="transition-delay:' + Math.min(i, 6) * 40 + 'ms">' +
          '<header class="lesson-head">' +
            '<span class="lesson-num">' + (i + 1) + "</span>" +
            "<h2>" + esc(sec.title) + "</h2>" +
          "</header>" +
          '<div class="lesson-body">' + window.mdToHtml(sec.body) + "</div>" +
          '<footer class="lesson-footer">' +
            sectionButton(area.id, tema.id, i, done) +
          "</footer>" +
        "</section>"
      );
    }).join("");

    var index = area.temas.indexOf(tema);
    var prev = index > 0 ? area.temas[index - 1] : null;
    var next = index < area.temas.length - 1 ? area.temas[index + 1] : null;

    app.innerHTML =
      '<nav class="breadcrumb">' +
        '<a href="#/">Inicio</a><span class="sep">/</span>' +
        '<a href="#/area/' + area.id + '">' + esc(area.nombre) + "</a>" +
        '<span class="sep">/</span><span>' + esc(tema.nombre) + "</span>" +
      "</nav>" +
      '<header class="course-hero" style="--area-color:' + area.color + '">' +
        "<h1>" + esc(tema.nombre) + "</h1>" +
        '<div class="course-badges">' +
          '<span class="badge">' + esc(area.nombre) + "</span>" +
          '<span class="badge nivel">' + esc(tema.nivel) + "</span>" +
        "</div>" +
        '<p class="course-desc">' + esc(tema.descripcion) + "</p>" +
        '<div class="progress-row">' +
          '<div class="mini-bar"><span id="course-progress-bar" style="width:' + pct + '%"></span></div>' +
          '<span id="course-progress-label">' + stats.done + " de " + stats.total + " secciones completadas</span>" +
        "</div>" +
      "</header>" +
      '<nav class="section-index" id="section-index">' + chips + "</nav>" +
      '<div class="lesson-list">' + lessons + "</div>" +
      '<div class="nav-row">' +
        (prev
          ? '<a class="btn" href="#/curso/' + area.id + "/" + prev.id + '">← ' + esc(prev.nombre) + "</a>"
          : "<span></span>") +
        (next
          ? '<a class="btn" href="#/curso/' + area.id + "/" + next.id + '">' + esc(next.nombre) + " →</a>"
          : "<span></span>") +
      "</div>";

    renderMath();
    setupReveal();
    setupCourseSpy();
  }

  function updateCourseUI(areaId, temaId, index, button) {
    var done = isSectionDone(areaId, temaId, index);

    var section = button.closest(".lesson-section");
    if (section) section.classList.toggle("done", done);

    button.classList.toggle("done", done);
    button.classList.toggle("primary", !done);
    button.textContent = done ? "✓ Sección completada" : "Marcar como completado";

    var chip = document.querySelector('.chip[data-target="seccion-' + index + '"]');
    if (chip) {
      chip.classList.toggle("done", done);
      var check = chip.querySelector(".chip-check");
      if (check) check.textContent = done ? "✓" : String(index + 1);
    }

    var stats = courseStats(areaId, temaId);
    var pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
    var bar = document.getElementById("course-progress-bar");
    var label = document.getElementById("course-progress-label");
    if (bar) bar.style.width = pct + "%";
    if (label) label.textContent = stats.done + " de " + stats.total + " secciones completadas";
  }

  /* ---------- Eventos globales ---------- */

  document.addEventListener("click", function (e) {
    var button = e.target.closest(".section-toggle");
    if (button) {
      var areaId = button.getAttribute("data-area");
      var temaId = button.getAttribute("data-tema");
      var index = parseInt(button.getAttribute("data-index"), 10);
      toggleSection(areaId, temaId, index);
      updateCourseUI(areaId, temaId, index, button);
      return;
    }

    var chip = e.target.closest(".chip");
    if (chip) {
      var target = document.getElementById(chip.getAttribute("data-target"));
      if (target) {
        var y = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  });

  /* ---------- Router ---------- */

  function route() {
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/").filter(Boolean);

    if (parts[0] === "area" && parts[1]) {
      renderArea(parts[1]);
    } else if (parts[0] === "curso" && parts[1] && parts[2]) {
      renderCurso(parts[1], parts[2]);
    } else {
      renderHome();
    }
    window.scrollTo(0, 0);
    app.classList.remove("route-enter");
    void app.offsetWidth;
    app.classList.add("route-enter");
  }

  setupParallax();
  window.addEventListener("hashchange", route);
  route();
})();
