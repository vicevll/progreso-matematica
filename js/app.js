(function () {
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

  var RECURSOS = {
    "algebra-escolar/operaciones-combinadas": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Operaciones combinadas.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "6 páginas · PDF",
          archivo: "recursos/operaciones-combinadas-simple.pdf",
          fuente: "recursos/operaciones-combinadas-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/operaciones-combinadas-ejercicios.pdf",
          fuente: "recursos/operaciones-combinadas-ejercicios.md"
        }
      ]
    },
    "algebra-escolar/ecuaciones": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Ecuaciones.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "5 páginas · PDF",
          archivo: "recursos/ecuaciones-simple.pdf",
          fuente: "recursos/ecuaciones-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/ecuaciones-ejercicios.pdf",
          fuente: "recursos/ecuaciones-ejercicios.md"
        }
      ]
    },
    "algebra-escolar/inecuaciones": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Inecuaciones.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "5 páginas · PDF",
          archivo: "recursos/inecuaciones-simple.pdf",
          fuente: "recursos/inecuaciones-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/inecuaciones-ejercicios.pdf",
          fuente: "recursos/inecuaciones-ejercicios.md"
        }
      ]
    },
    "algebra-escolar/algebra-elemental": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Álgebra elemental.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "6 páginas · PDF",
          archivo: "recursos/algebra-elemental-simple.pdf",
          fuente: "recursos/algebra-elemental-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/algebra-elemental-ejercicios.pdf",
          fuente: "recursos/algebra-elemental-ejercicios.md"
        }
      ]
    },
    "algebra-escolar/numeros-reales-complejos": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Números reales y complejos.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/numeros-reales-complejos-simple.pdf",
          fuente: "recursos/numeros-reales-complejos-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "8 páginas · PDF",
          archivo: "recursos/numeros-reales-complejos-ejercicios.pdf",
          fuente: "recursos/numeros-reales-complejos-ejercicios.md"
        }
      ]
    },
    "algebra-escolar/sucesiones-sumatorias": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Sucesiones y sumatorias.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/sucesiones-sumatorias-simple.pdf",
          fuente: "recursos/sucesiones-sumatorias-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "8 páginas · PDF",
          archivo: "recursos/sucesiones-sumatorias-ejercicios.pdf",
          fuente: "recursos/sucesiones-sumatorias-ejercicios.md"
        }
      ]
    },
    "algebra-escolar/polinomios": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Polinomios y ecuaciones.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/polinomios-simple.pdf",
          fuente: "recursos/polinomios-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/polinomios-ejercicios.pdf",
          fuente: "recursos/polinomios-ejercicios.md"
        }
      ]
    },
    "algebra-escolar/demostracion": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Métodos de demostración.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "6 páginas · PDF",
          archivo: "recursos/demostracion-simple.pdf",
          fuente: "recursos/demostracion-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/demostracion-ejercicios.pdf",
          fuente: "recursos/demostracion-ejercicios.md"
        }
      ]
    },
    "funciones-geometria/funciones": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Funciones.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/funciones-simple.pdf",
          fuente: "recursos/funciones-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/funciones-ejercicios.pdf",
          fuente: "recursos/funciones-ejercicios.md"
        }
      ]
    },
    "funciones-geometria/exp-log": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Funciones exponenciales y logarítmicas.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "6 páginas · PDF",
          archivo: "recursos/exp-log-simple.pdf",
          fuente: "recursos/exp-log-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/exp-log-ejercicios.pdf",
          fuente: "recursos/exp-log-ejercicios.md"
        }
      ]
    },
    "funciones-geometria/trigonometria": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Trigonometría.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "6 páginas · PDF",
          archivo: "recursos/trigonometria-simple.pdf",
          fuente: "recursos/trigonometria-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "5 páginas · PDF",
          archivo: "recursos/trigonometria-ejercicios.pdf",
          fuente: "recursos/trigonometria-ejercicios.md"
        }
      ]
    },
    "funciones-geometria/geometria-euclidiana": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Geometría euclidiana.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/geometria-euclidiana-simple.pdf",
          fuente: "recursos/geometria-euclidiana-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/geometria-euclidiana-ejercicios.pdf",
          fuente: "recursos/geometria-euclidiana-ejercicios.md"
        }
      ]
    },
    "funciones-geometria/geometria-analitica": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Geometría analítica.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "6 páginas · PDF",
          archivo: "recursos/geometria-analitica-simple.pdf",
          fuente: "recursos/geometria-analitica-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/geometria-analitica-ejercicios.pdf",
          fuente: "recursos/geometria-analitica-ejercicios.md"
        }
      ]
    },
    "calculo/limites": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Límites y continuidad.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/limites-simple.pdf",
          fuente: "recursos/limites-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "8 páginas · PDF",
          archivo: "recursos/limites-ejercicios.pdf",
          fuente: "recursos/limites-ejercicios.md"
        }
      ]
    },
    "calculo/calc-diferencial": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Cálculo diferencial.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "9 páginas · PDF",
          archivo: "recursos/calc-diferencial-simple.pdf",
          fuente: "recursos/calc-diferencial-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "8 páginas · PDF",
          archivo: "recursos/calc-diferencial-ejercicios.pdf",
          fuente: "recursos/calc-diferencial-ejercicios.md"
        }
      ]
    },
    "calculo/calc-integral": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Cálculo integral.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "10 páginas · PDF",
          archivo: "recursos/calc-integral-simple.pdf",
          fuente: "recursos/calc-integral-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "9 páginas · PDF",
          archivo: "recursos/calc-integral-ejercicios.pdf",
          fuente: "recursos/calc-integral-ejercicios.md"
        }
      ]
    },
    "calculo/series": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Sucesiones y series infinitas.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/series-simple.pdf",
          fuente: "recursos/series-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/series-ejercicios.pdf",
          fuente: "recursos/series-ejercicios.md"
        }
      ]
    },
    "calculo/calc-vectorial": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Cálculo vectorial.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/calc-vectorial-simple.pdf",
          fuente: "recursos/calc-vectorial-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/calc-vectorial-ejercicios.pdf",
          fuente: "recursos/calc-vectorial-ejercicios.md"
        }
      ]
    },
    "calculo/edo": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Ecuaciones diferenciales ordinarias.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "10 páginas · PDF",
          archivo: "recursos/edo-simple.pdf",
          fuente: "recursos/edo-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "8 páginas · PDF",
          archivo: "recursos/edo-ejercicios.pdf",
          fuente: "recursos/edo-ejercicios.md"
        }
      ]
    },
    "calculo/edp": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Ecuaciones en derivadas parciales.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/edp-simple.pdf",
          fuente: "recursos/edp-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/edp-ejercicios.pdf",
          fuente: "recursos/edp-ejercicios.md"
        }
      ]
    },
    "algebra-superior/matrices": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Matrices.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "9 páginas · PDF",
          archivo: "recursos/matrices-simple.pdf",
          fuente: "recursos/matrices-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "8 páginas · PDF",
          archivo: "recursos/matrices-ejercicios.pdf",
          fuente: "recursos/matrices-ejercicios.md"
        }
      ]
    },
    "algebra-superior/algebra-lineal": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Álgebra lineal.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/algebra-lineal-simple.pdf",
          fuente: "recursos/algebra-lineal-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "9 páginas · PDF",
          archivo: "recursos/algebra-lineal-ejercicios.pdf",
          fuente: "recursos/algebra-lineal-ejercicios.md"
        }
      ]
    }
  };

  function isSectionDone(areaId, temaId, index) {
    return window.ProgressStore.isSectionDone(areaId, temaId, index);
  }

  function toggleSection(areaId, temaId, index) {
    window.ProgressStore.toggle(areaId, temaId, index);
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

  function globalCounts() {
    var temas = 0;
    CATALOGO.forEach(function (area) {
      temas += area.temas.length;
    });
    return { areas: CATALOGO.length, temas: temas };
  }

  function updateTopbarTag() {
    var tag = document.getElementById("topbar-tag");
    if (!tag) return;
    var c = globalCounts();
    tag.textContent = c.temas + " temas · " + c.areas + " áreas";
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
    return window.ProgressStore.getLastVisited();
  }

  function saveLastVisited(areaId, temaId) {
    window.ProgressStore.setLastVisited(areaId, temaId);
  }

  /* ---------- Bloqueos y acceso ---------- */

  var AREA_LOCKS = {
    "algebra-superior": {
      tipo: "proximamente",
      titulo: "Próximamente",
      texto: "Álgebra superior estará disponible pronto. Te avisaremos cuando se abra para todos."
    },
    calculo: {
      tipo: "login",
      titulo: "Cálculo requiere tu cuenta",
      texto: "Para entrar a Cálculo necesitas iniciar sesión con Google."
    }
  };

  var TEMA_LOCKS = {
    trigonometria: {
      titulo: "Trigonometría está bloqueada",
      texto: "Inicia sesión con Google para estudiar Trigonometría."
    },
    "numeros-reales-complejos": {
      titulo: "Números reales y complejos está bloqueado",
      texto: "Inicia sesión con Google para estudiar Números reales y complejos."
    },
    demostracion: {
      titulo: "Métodos de demostración está bloqueado",
      texto: "Inicia sesión con Google para estudiar Métodos de demostración."
    },
    polinomios: {
      titulo: "Polinomios y ecuaciones está bloqueado",
      texto: "Inicia sesión con Google para estudiar Polinomios y ecuaciones."
    }
  };

  function isSignedIn() {
    return !!(window.ProgressStore && window.ProgressStore.getUser());
  }

  function areaLock(areaId) {
    var lock = AREA_LOCKS[areaId];
    if (!lock) return null;
    if (lock.tipo === "login" && isSignedIn()) return null;
    return lock;
  }

  function temaLock(temaId) {
    var lock = TEMA_LOCKS[temaId];
    if (!lock) return null;
    if (isSignedIn()) return null;
    return lock;
  }

  function loginToSee(dest) {
    try {
      localStorage.setItem("mate-login-dest", dest);
    } catch (e) {
      /* almacenamiento no disponible */
    }
    if (window.SB && window.SB.configured) {
      window.SB.signInWithGoogle().catch(function (err) {
        try {
          localStorage.removeItem("mate-login-dest");
        } catch (e2) {
          /* ignorar */
        }
        if (window.Novedades && window.Novedades.notifyError) {
          window.Novedades.notifyError(
            "No se pudo iniciar sesión: " + (err && err.message ? err.message : "error desconocido")
          );
        }
      });
    } else if (window.Novedades && window.Novedades.notifyError) {
      window.Novedades.notifyError("Inicia sesión con Google para continuar.");
    }
  }

  function googleBtnHtml(dest, label) {
    return (
      '<button class="google-btn" type="button" data-dest="' + esc(dest) + '">' +
        (window.GOOGLE_ICON || "") +
        "<span>" + esc(label || "Entrar con Google") + "</span>" +
      "</button>"
    );
  }

  function openModal(titulo, texto, loginDest) {
    var existing = document.getElementById("modal-overlay");
    if (existing && existing.parentNode) existing.parentNode.removeChild(existing);

    var footer;
    if (loginDest) {
      footer =
        '<div class="update-actions modal-actions">' +
          '<button class="btn" id="modal-back" type="button">Volver</button>' +
          googleBtnHtml(loginDest, "Entrar con Google") +
        "</div>";
    } else {
      footer =
        '<div class="update-actions">' +
          '<button class="btn primary" id="modal-close" type="button">Entendido</button>' +
        "</div>";
    }

    var overlay = document.createElement("div");
    overlay.id = "modal-overlay";
    overlay.className = "modal-overlay";
    overlay.innerHTML =
      '<div class="modal-box" role="dialog" aria-modal="true">' +
        '<span class="modal-kicker">Studappy</span>' +
        "<h3>" + esc(titulo) + "</h3>" +
        "<p>" + esc(texto) + "</p>" +
        footer +
      "</div>";
    document.body.appendChild(overlay);

    function cerrar() {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }
    overlay.addEventListener("click", function (ev) {
      if (ev.target === overlay) cerrar();
    });

    var closeBtn = overlay.querySelector("#modal-close");
    if (closeBtn) closeBtn.addEventListener("click", cerrar);
    var backBtn = overlay.querySelector("#modal-back");
    if (backBtn) backBtn.addEventListener("click", cerrar);
  }

  function openLoginModal(titulo, texto, dest) {
    openModal(
      titulo,
      (texto || "Esta sección está bloqueada: necesitas iniciar sesión con Google para acceder.") +
        " No te preocupes: al volver te dejamos justo donde estabas.",
      dest
    );
  }

  function renderLocked(titulo, texto, cta) {
    app.innerHTML =
      '<nav class="breadcrumb"><a href="#/">Inicio</a></nav>' +
      '<section class="locked-view">' +
        '<div class="locked-icon" aria-hidden="true">🔒</div>' +
        "<h1>" + esc(titulo) + "</h1>" +
        "<p>" + esc(texto) + "</p>" +
        (cta || "") +
      "</section>";
    setupReveal();
  }

  function lockedLoginCta(dest) {
    return (
      '<div class="locked-actions">' +
        '<button class="btn locked-back" type="button">Volver</button>' +
        googleBtnHtml(dest, "Entrar con Google") +
      "</div>"
    );
  }

  /* ---------- Vistas ---------- */

  function flatGuides(areaId) {
    var out = [];
    CATALOGO.forEach(function (area) {
      if (areaId && area.id !== areaId) return;
      area.temas.forEach(function (tema) {
        var pack = RECURSOS[area.id + "/" + tema.id];
        if (!pack || !pack.items || pack.items.length < 2) return;
        out.push({
          areaId: area.id,
          areaNombre: area.nombre,
          temaId: tema.id,
          temaNombre: tema.nombre,
          nivel: tema.nivel,
          simple: pack.items[0],
          ejercicios: pack.items[1]
        });
      });
    });
    return out;
  }

  function randomGuide(areaId) {
    var pool = flatGuides(areaId);
    if (!pool.length) return null;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function recoCardHtml(guide) {
    if (!guide) return "";
    return (
      '<aside class="reco" id="reco">' +
        '<div class="reco-head">' +
          '<span class="reco-kicker">Guía recomendada</span>' +
          '<button class="reco-shuffle" type="button" title="Ver otra recomendación">Ver otra ↻</button>' +
        "</div>" +
        '<a class="reco-title" href="#/curso/' + guide.areaId + "/" + guide.temaId + '">' + esc(guide.temaNombre) + "</a>" +
        '<p class="reco-meta">' + esc(guide.areaNombre) + " · " + esc(guide.nivel) + "</p>" +
        '<div class="reco-actions">' +
          '<a class="reco-btn" href="' + guide.simple.archivo + '" download>Guía simple · 20 ejercicios</a>' +
          '<a class="reco-btn" href="' + guide.ejercicios.archivo + '" download>Cuaderno · 50 ejercicios</a>' +
        "</div>" +
      "</aside>"
    );
  }

  function renderRecomendacion(areaId) {
    if (!isSignedIn()) {
      return (
        '<aside class="reco reco-locked reveal">' +
          '<span class="reco-kicker">Guía recomendada</span>' +
          '<p class="reco-meta">Inicia sesión para recibir recomendaciones de guías.</p>' +
          '<div class="reco-actions">' +
            googleBtnHtml("#/", "Entrar con Google") +
          "</div>" +
        "</aside>"
      );
    }
    return recoCardHtml(randomGuide(areaId));
  }

  function renderHome() {
    setWide(false);
    var g = globalStats();
    var counts = globalCounts();
    var pct = g.total ? Math.round((g.done / g.total) * 100) : 0;

    var cards = CATALOGO.map(function (area, i) {
      var s = areaStats(area);
      var aPct = s.total ? Math.round((s.done / s.total) * 100) : 0;
      var lock = areaLock(area.id);
      var lockBadge = "";
      var extraAttrs = "";
      var cls = "area-card reveal";
      if (lock) {
        cls += " locked";
        extraAttrs = ' data-lock="' + area.id + '"';
        lockBadge = '<span class="lock-badge" aria-hidden="true">🔒</span>';
      }
      return (
        '<a class="' + cls + '" href="#/area/' + area.id + '"' + extraAttrs + ' style="--area-color:' + area.color + ";transition-delay:" + (i % 8) * 35 + 'ms">' +
          lockBadge +
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

    var user = window.ProgressStore ? window.ProgressStore.getUser() : null;
    var greeting = "";
    if (user && window.Profile) {
      greeting =
        '<div class="hero-user reveal">' +
          window.Profile.avatarHtml(user, "md") +
          '<span class="hero-user-text">' +
            '<span class="hero-user-kicker">Hola,</span>' +
            '<span class="hero-user-name">' + esc(window.Profile.name(user)) + "</span>" +
          "</span>" +
        "</div>";
    }

    app.innerHTML =
      '<section class="hero-simple">' +
        greeting +
        '<div class="eyebrow reveal">MAPA DE ESTUDIO <span>01—0' + counts.areas + "</span></div>" +
        '<div class="hero-mark reveal"><img src="img/studappy.png" alt="Studappy" /></div>' +
        '<p class="reveal hero-desc">Aprende matemáticas y mide tu avance en tiempo real.</p>' +
        '<div class="hero-progress reveal">' +
          '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
          '<span class="label">' + g.done + " de " + g.total + " secciones · " + pct + "%</span>" +
        "</div>" +
        '<div class="home-note reveal"><span class="note-dot"></span><span>Elige un área para comenzar una nueva línea de estudio.</span></div>' +
        continueCard +
      "</section>" +
      renderRecomendacion() +
      '<h2 class="section-title reveal">Áreas</h2>' +
      '<div class="area-grid">' + cards + "</div>";

    clearCourseSpy();
    setupReveal();
  }

  function renderArea(areaId) {
    setWide(false);
    var area = findArea(areaId);
    if (!area) return renderHome();

    var lock = areaLock(area.id);
    if (lock) {
      if (lock.tipo === "proximamente") {
        renderLocked(lock.titulo, lock.texto);
        return;
      }
      renderLocked(lock.titulo, lock.texto, lockedLoginCta("#/area/" + area.id));
      return;
    }

    var s = areaStats(area);
    var pct = s.total ? Math.round((s.done / s.total) * 100) : 0;

    var topics = area.temas.map(function (tema, i) {
      var c = courseStats(area.id, tema.id);
      var cDone = c.total > 0 && c.done === c.total;
      var cPct = c.total ? Math.round((c.done / c.total) * 100) : 0;
      var tLock = temaLock(tema.id);
      var lockBadge = tLock ? '<span class="lock-badge" aria-hidden="true">🔒</span>' : "";
      var lockAttrs = tLock ? ' data-lock-dest="#/curso/' + area.id + "/" + tema.id + '"' : "";
      var cls = "topic-card reveal" + (cDone ? " done" : "") + (tLock ? " locked" : "");
      return (
        '<a class="' + cls + '" href="#/curso/' + area.id + "/" + tema.id + '"' + lockAttrs + ' style="transition-delay:' + Math.min(i, 8) * 30 + 'ms">' +
          '<div class="topic-num">' + (cDone ? "✓" : i + 1) + "</div>" +
          '<div class="topic-body">' +
            "<h3>" + esc(tema.nombre) +
              '<span class="badge nivel">' + esc(tema.nivel) + "</span>" +
              lockBadge +
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
      renderRecomendacion(areaId) +
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

  function renderRecursos(areaId, temaId) {
    var pack = RECURSOS[areaId + "/" + temaId];
    if (!pack) return "";

    var signed = isSignedIn();

    var cards = pack.items.map(function (item) {
      var actions;
      if (signed) {
        actions =
          '<div class="recurso-actions">' +
            '<a class="recurso-btn" href="' + item.archivo + '" download>Descargar PDF</a>' +
            (item.fuente
              ? '<a class="recurso-link" href="' + item.fuente + '" download>Markdown</a>'
              : "") +
          "</div>";
      } else {
        actions =
          '<div class="recurso-actions">' +
            '<button class="google-btn recurso-login" type="button" data-dest="#/curso/' + areaId + "/" + temaId + '">' +
              (window.GOOGLE_ICON || "") +
              "<span>Inicia sesión para descargar</span>" +
            "</button>" +
          "</div>";
      }
      return (
        '<article class="recurso-card reveal' + (signed ? "" : " recurso-locked") + '">' +
          '<span class="recurso-icon" aria-hidden="true">' + (signed ? "↓" : "🔒") + "</span>" +
          '<div class="recurso-body">' +
            '<div class="recurso-top">' +
              '<span class="recurso-titulo">' + esc(item.titulo) + "</span>" +
              '<span class="recurso-meta">' + esc(item.meta) + "</span>" +
            "</div>" +
            '<p class="recurso-desc">' + esc(item.descripcion) + "</p>" +
            actions +
          "</div>" +
        "</article>"
      );
    }).join("");

    var nota = signed
      ? ""
      : '<p class="recurso-note">Las guías se descargan solo con tu cuenta. Inicia sesión con Google.</p>';

    return (
      '<section class="recursos" aria-label="Material descargable">' +
        '<header class="recursos-head reveal">' +
          '<span class="recursos-kicker">' + esc(pack.titulo) + "</span>" +
          "<h2>Guías para descargar</h2>" +
          "<p>" + esc(pack.descripcion) + "</p>" +
          nota +
        "</header>" +
        '<div class="recurso-grid">' + cards + "</div>" +
      "</section>"
    );
  }

  function renderCurso(areaId, temaId) {
    setWide(true);
    var area = findArea(areaId);
    if (!area) return renderHome();
    var tema = findTema(area, temaId);
    if (!tema) return renderArea(areaId);

    var lock = areaLock(area.id);
    if (lock) {
      if (lock.tipo === "proximamente") {
        renderLocked(lock.titulo, lock.texto);
        return;
      }
      renderLocked(lock.titulo, lock.texto, lockedLoginCta("#/curso/" + area.id + "/" + tema.id));
      return;
    }

    var tLock = temaLock(tema.id);
    if (tLock) {
      renderLocked(tLock.titulo, tLock.texto, lockedLoginCta("#/curso/" + area.id + "/" + tema.id));
      return;
    }

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
      renderRecursos(area.id, tema.id) +
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
    if (window.Diagram) window.Diagram.hydrate(app);
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
    var locked = e.target.closest(".area-card.locked");
    if (locked) {
      e.preventDefault();
      var lockId = locked.getAttribute("data-lock");
      var lock = AREA_LOCKS[lockId] || null;
      if (!lock || (lock.tipo === "login" && isSignedIn())) {
        location.hash = "#/area/" + lockId;
        return;
      }
      if (lock.tipo === "proximamente") {
        openModal(lock.titulo, lock.texto);
      } else {
        openLoginModal(lock.titulo, "Esta sección está bloqueada porque aún no has iniciado sesión.", "#/area/" + lockId);
      }
      return;
    }

    var lockedTema = e.target.closest(".topic-card.locked");
    if (lockedTema) {
      e.preventDefault();
      var tDest = lockedTema.getAttribute("data-lock-dest") || "#/";
      var temaIdLock = tDest.split("/").pop();
      var tLock = TEMA_LOCKS[temaIdLock] || null;
      if (!tLock || isSignedIn()) {
        location.hash = tDest;
        return;
      }
      openLoginModal(tLock.titulo, "Esta sección está bloqueada porque aún no has iniciado sesión.", tDest);
      return;
    }

    var gBtn = e.target.closest(".google-btn[data-dest]");
    if (gBtn) {
      var overlayBox = gBtn.closest("#modal-overlay");
      if (overlayBox && overlayBox.parentNode) overlayBox.parentNode.removeChild(overlayBox);
      loginToSee(gBtn.getAttribute("data-dest") || "#/");
      return;
    }

    var backBtn = e.target.closest(".locked-back, #modal-back");
    if (backBtn) {
      var overlayBox2 = backBtn.closest("#modal-overlay");
      if (overlayBox2 && overlayBox2.parentNode) overlayBox2.parentNode.removeChild(overlayBox2);
      if (window.history.length > 1) {
        window.history.back();
      } else {
        location.hash = "#/";
      }
      return;
    }

    var button = e.target.closest(".section-toggle");
    if (button) {
      var areaId = button.getAttribute("data-area");
      var temaId = button.getAttribute("data-tema");
      var index = parseInt(button.getAttribute("data-index"), 10);
      toggleSection(areaId, temaId, index);
      updateCourseUI(areaId, temaId, index, button);
      return;
    }

    var shuffle = e.target.closest(".reco-shuffle");
    if (shuffle) {
      var box = document.getElementById("reco");
      if (box) {
        var hash = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
        var ctxArea = hash[0] === "area" ? hash[1] : null;
        box.outerHTML = recoCardHtml(randomGuide(ctxArea));
      }
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

  if (window.ProgressStore && typeof window.ProgressStore.onUpdate === "function") {
    window.ProgressStore.onUpdate(function () {
      var y = window.scrollY;
      route();
      window.scrollTo(0, y);
    });
  }

  if (window.ProgressStore && typeof window.ProgressStore.onChange === "function") {
    window.ProgressStore.onChange(function () {
      var y = window.scrollY;
      route();
      window.scrollTo(0, y);
    });
  }

  if (window.Profile && typeof window.Profile.onChange === "function") {
    window.Profile.onChange(function () {
      var hash = location.hash.replace(/^#\/?/, "");
      if (!hash) {
        var y = window.scrollY;
        route();
        window.scrollTo(0, y);
      }
    });
  }

  setupParallax();
  updateTopbarTag();
  window.addEventListener("hashchange", route);
  route();
})();
