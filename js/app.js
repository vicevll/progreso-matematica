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

  var RECURSOS = {
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
          meta: "8 páginas · PDF",
          archivo: "recursos/trigonometria-simple.pdf",
          fuente: "recursos/trigonometria-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
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
    "funciones-geometria/geometria-vectorial": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Geometría vectorial.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/geometria-vectorial-simple.pdf",
          fuente: "recursos/geometria-vectorial-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/geometria-vectorial-ejercicios.pdf",
          fuente: "recursos/geometria-vectorial-ejercicios.md"
        }
      ]
    },
    "funciones-geometria/geometria-proyectiva": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Geometría proyectiva.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/geometria-proyectiva-simple.pdf",
          fuente: "recursos/geometria-proyectiva-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/geometria-proyectiva-ejercicios.pdf",
          fuente: "recursos/geometria-proyectiva-ejercicios.md"
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
          meta: "7 páginas · PDF",
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
          meta: "8 páginas · PDF",
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
          meta: "8 páginas · PDF",
          archivo: "recursos/series-simple.pdf",
          fuente: "recursos/series-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "8 páginas · PDF",
          archivo: "recursos/series-ejercicios.pdf",
          fuente: "recursos/series-ejercicios.md"
        }
      ]
    },
    "calculo/calc-multivariable": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Cálculo multivariable.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/calc-multivariable-simple.pdf",
          fuente: "recursos/calc-multivariable-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/calc-multivariable-ejercicios.pdf",
          fuente: "recursos/calc-multivariable-ejercicios.md"
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
          meta: "7 páginas · PDF",
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
          meta: "7 páginas · PDF",
          archivo: "recursos/edo-simple.pdf",
          fuente: "recursos/edo-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
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
          meta: "7 páginas · PDF",
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
    "calculo/variaciones": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Cálculo de variaciones.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/variaciones-simple.pdf",
          fuente: "recursos/variaciones-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/variaciones-ejercicios.pdf",
          fuente: "recursos/variaciones-ejercicios.md"
        }
      ]
    },
    "analisis/espacios-metricos": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Espacios métricos.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/espacios-metricos-simple.pdf",
          fuente: "recursos/espacios-metricos-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/espacios-metricos-ejercicios.pdf",
          fuente: "recursos/espacios-metricos-ejercicios.md"
        }
      ]
    },
    "analisis/analisis-real": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Análisis real.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "9 páginas · PDF",
          archivo: "recursos/analisis-real-simple.pdf",
          fuente: "recursos/analisis-real-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/analisis-real-ejercicios.pdf",
          fuente: "recursos/analisis-real-ejercicios.md"
        }
      ]
    },
    "analisis/analisis-complejo": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Análisis complejo.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/analisis-complejo-simple.pdf",
          fuente: "recursos/analisis-complejo-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/analisis-complejo-ejercicios.pdf",
          fuente: "recursos/analisis-complejo-ejercicios.md"
        }
      ]
    },
    "analisis/medida": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Teoría de la medida e integral de Lebesgue.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/medida-simple.pdf",
          fuente: "recursos/medida-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "8 páginas · PDF",
          archivo: "recursos/medida-ejercicios.pdf",
          fuente: "recursos/medida-ejercicios.md"
        }
      ]
    },
    "analisis/analisis-funcional": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Análisis funcional.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "9 páginas · PDF",
          archivo: "recursos/analisis-funcional-simple.pdf",
          fuente: "recursos/analisis-funcional-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "8 páginas · PDF",
          archivo: "recursos/analisis-funcional-ejercicios.pdf",
          fuente: "recursos/analisis-funcional-ejercicios.md"
        }
      ]
    },
    "analisis/analisis-armonico": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Análisis armónico.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/analisis-armonico-simple.pdf",
          fuente: "recursos/analisis-armonico-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "8 páginas · PDF",
          archivo: "recursos/analisis-armonico-ejercicios.pdf",
          fuente: "recursos/analisis-armonico-ejercicios.md"
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
          meta: "7 páginas · PDF",
          archivo: "recursos/algebra-lineal-simple.pdf",
          fuente: "recursos/algebra-lineal-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "8 páginas · PDF",
          archivo: "recursos/algebra-lineal-ejercicios.pdf",
          fuente: "recursos/algebra-lineal-ejercicios.md"
        }
      ]
    },
    "algebra-superior/algebra-abstracta": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Álgebra abstracta.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/algebra-abstracta-simple.pdf",
          fuente: "recursos/algebra-abstracta-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/algebra-abstracta-ejercicios.pdf",
          fuente: "recursos/algebra-abstracta-ejercicios.md"
        }
      ]
    },
    "algebra-superior/grupos": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Teoría de grupos.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/grupos-simple.pdf",
          fuente: "recursos/grupos-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/grupos-ejercicios.pdf",
          fuente: "recursos/grupos-ejercicios.md"
        }
      ]
    },
    "algebra-superior/anillos": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Teoría de anillos.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/anillos-simple.pdf",
          fuente: "recursos/anillos-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/anillos-ejercicios.pdf",
          fuente: "recursos/anillos-ejercicios.md"
        }
      ]
    },
    "algebra-superior/galois": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Teoría de cuerpos y Galois.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/galois-simple.pdf",
          fuente: "recursos/galois-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/galois-ejercicios.pdf",
          fuente: "recursos/galois-ejercicios.md"
        }
      ]
    },
    "algebra-superior/algebra-conmutativa": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Álgebra conmutativa.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/algebra-conmutativa-simple.pdf",
          fuente: "recursos/algebra-conmutativa-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/algebra-conmutativa-ejercicios.pdf",
          fuente: "recursos/algebra-conmutativa-ejercicios.md"
        }
      ]
    },
    "algebra-superior/representaciones": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Teoría de representaciones.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/representaciones-simple.pdf",
          fuente: "recursos/representaciones-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/representaciones-ejercicios.pdf",
          fuente: "recursos/representaciones-ejercicios.md"
        }
      ]
    },
    "algebra-superior/homologica": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Álgebra homológica.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "9 páginas · PDF",
          archivo: "recursos/homologica-simple.pdf",
          fuente: "recursos/homologica-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "8 páginas · PDF",
          archivo: "recursos/homologica-ejercicios.pdf",
          fuente: "recursos/homologica-ejercicios.md"
        }
      ]
    },
    "algebra-superior/categorias": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Teoría de categorías.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/categorias-simple.pdf",
          fuente: "recursos/categorias-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/categorias-ejercicios.pdf",
          fuente: "recursos/categorias-ejercicios.md"
        }
      ]
    },
    "geometria-topologia/topologia-general": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Topología general.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/topologia-general-simple.pdf",
          fuente: "recursos/topologia-general-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/topologia-general-ejercicios.pdf",
          fuente: "recursos/topologia-general-ejercicios.md"
        }
      ]
    },
    "geometria-topologia/topologia-algebraica": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Topología algebraica.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/topologia-algebraica-simple.pdf",
          fuente: "recursos/topologia-algebraica-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "8 páginas · PDF",
          archivo: "recursos/topologia-algebraica-ejercicios.pdf",
          fuente: "recursos/topologia-algebraica-ejercicios.md"
        }
      ]
    },
    "geometria-topologia/geo-diferencial": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Geometría diferencial de curvas y superficies.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/geo-diferencial-simple.pdf",
          fuente: "recursos/geo-diferencial-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/geo-diferencial-ejercicios.pdf",
          fuente: "recursos/geo-diferencial-ejercicios.md"
        }
      ]
    },
    "geometria-topologia/variedades": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Variedades diferenciables.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "9 páginas · PDF",
          archivo: "recursos/variedades-simple.pdf",
          fuente: "recursos/variedades-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/variedades-ejercicios.pdf",
          fuente: "recursos/variedades-ejercicios.md"
        }
      ]
    },
    "geometria-topologia/geo-riemann": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Geometría de Riemann.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "9 páginas · PDF",
          archivo: "recursos/geo-riemann-simple.pdf",
          fuente: "recursos/geo-riemann-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/geo-riemann-ejercicios.pdf",
          fuente: "recursos/geo-riemann-ejercicios.md"
        }
      ]
    },
    "geometria-topologia/geo-algebraica": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Geometría algebraica.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/geo-algebraica-simple.pdf",
          fuente: "recursos/geo-algebraica-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/geo-algebraica-ejercicios.pdf",
          fuente: "recursos/geo-algebraica-ejercicios.md"
        }
      ]
    },
    "geometria-topologia/nudos": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Teoría de nudos.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "9 páginas · PDF",
          archivo: "recursos/nudos-simple.pdf",
          fuente: "recursos/nudos-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/nudos-ejercicios.pdf",
          fuente: "recursos/nudos-ejercicios.md"
        }
      ]
    },
    "discretas/conjuntos": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Teoría de conjuntos.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "10 páginas · PDF",
          archivo: "recursos/conjuntos-simple.pdf",
          fuente: "recursos/conjuntos-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/conjuntos-ejercicios.pdf",
          fuente: "recursos/conjuntos-ejercicios.md"
        }
      ]
    },
    "discretas/logica": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Lógica matemática.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/logica-simple.pdf",
          fuente: "recursos/logica-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/logica-ejercicios.pdf",
          fuente: "recursos/logica-ejercicios.md"
        }
      ]
    },
    "discretas/numeros": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Teoría de números.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/numeros-simple.pdf",
          fuente: "recursos/numeros-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/numeros-ejercicios.pdf",
          fuente: "recursos/numeros-ejercicios.md"
        }
      ]
    },
    "discretas/combinatoria": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Combinatoria.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/combinatoria-simple.pdf",
          fuente: "recursos/combinatoria-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/combinatoria-ejercicios.pdf",
          fuente: "recursos/combinatoria-ejercicios.md"
        }
      ]
    },
    "discretas/grafos": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Teoría de grafos.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/grafos-simple.pdf",
          fuente: "recursos/grafos-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/grafos-ejercicios.pdf",
          fuente: "recursos/grafos-ejercicios.md"
        }
      ]
    },
    "discretas/matematica-discreta": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Matemática discreta.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/matematica-discreta-simple.pdf",
          fuente: "recursos/matematica-discreta-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/matematica-discreta-ejercicios.pdf",
          fuente: "recursos/matematica-discreta-ejercicios.md"
        }
      ]
    },
    "discretas/computabilidad": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Teoría de la computabilidad.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/computabilidad-simple.pdf",
          fuente: "recursos/computabilidad-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/computabilidad-ejercicios.pdf",
          fuente: "recursos/computabilidad-ejercicios.md"
        }
      ]
    },
    "discretas/complejidad": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Complejidad computacional.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/complejidad-simple.pdf",
          fuente: "recursos/complejidad-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/complejidad-ejercicios.pdf",
          fuente: "recursos/complejidad-ejercicios.md"
        }
      ]
    },
    "probabilidad-estadistica/probabilidad": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Probabilidad.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/probabilidad-simple.pdf",
          fuente: "recursos/probabilidad-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/probabilidad-ejercicios.pdf",
          fuente: "recursos/probabilidad-ejercicios.md"
        }
      ]
    },
    "probabilidad-estadistica/variables-aleatorias": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Variables aleatorias y distribuciones.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/variables-aleatorias-simple.pdf",
          fuente: "recursos/variables-aleatorias-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/variables-aleatorias-ejercicios.pdf",
          fuente: "recursos/variables-aleatorias-ejercicios.md"
        }
      ]
    },
    "probabilidad-estadistica/estadistica": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Estadística descriptiva e inferencial.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "9 páginas · PDF",
          archivo: "recursos/estadistica-simple.pdf",
          fuente: "recursos/estadistica-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/estadistica-ejercicios.pdf",
          fuente: "recursos/estadistica-ejercicios.md"
        }
      ]
    },
    "probabilidad-estadistica/estadistica-matematica": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Estadística matemática.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/estadistica-matematica-simple.pdf",
          fuente: "recursos/estadistica-matematica-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/estadistica-matematica-ejercicios.pdf",
          fuente: "recursos/estadistica-matematica-ejercicios.md"
        }
      ]
    },
    "probabilidad-estadistica/procesos-estocasticos": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Procesos estocásticos.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/procesos-estocasticos-simple.pdf",
          fuente: "recursos/procesos-estocasticos-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "6 páginas · PDF",
          archivo: "recursos/procesos-estocasticos-ejercicios.pdf",
          fuente: "recursos/procesos-estocasticos-ejercicios.md"
        }
      ]
    },
    "probabilidad-estadistica/series-tiempo": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Series de tiempo.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "9 páginas · PDF",
          archivo: "recursos/series-tiempo-simple.pdf",
          fuente: "recursos/series-tiempo-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/series-tiempo-ejercicios.pdf",
          fuente: "recursos/series-tiempo-ejercicios.md"
        }
      ]
    },
    "probabilidad-estadistica/bayesiana": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Inferencia bayesiana.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "8 páginas · PDF",
          archivo: "recursos/bayesiana-simple.pdf",
          fuente: "recursos/bayesiana-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/bayesiana-ejercicios.pdf",
          fuente: "recursos/bayesiana-ejercicios.md"
        }
      ]
    },
    "probabilidad-estadistica/decision": {
      titulo: "Material descargable",
      descripcion: "Dos guías en PDF para acompañar el estudio de Teoría de la decisión.",
      items: [
        {
          titulo: "Guía simple",
          descripcion: "Teoría esencial + 20 ejercicios con respuestas.",
          meta: "7 páginas · PDF",
          archivo: "recursos/decision-simple.pdf",
          fuente: "recursos/decision-simple.md"
        },
        {
          titulo: "50 ejercicios",
          descripcion: "Formulario completo + 50 ejercicios y solucionario de resultados.",
          meta: "7 páginas · PDF",
          archivo: "recursos/decision-ejercicios.pdf",
          fuente: "recursos/decision-ejercicios.md"
        }
      ]
    }
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

  function renderRecursos(areaId, temaId) {
    var pack = RECURSOS[areaId + "/" + temaId];
    if (!pack) return "";

    var cards = pack.items.map(function (item) {
      return (
        '<article class="recurso-card reveal">' +
          '<span class="recurso-icon" aria-hidden="true">↓</span>' +
          '<div class="recurso-body">' +
            '<div class="recurso-top">' +
              '<span class="recurso-titulo">' + esc(item.titulo) + "</span>" +
              '<span class="recurso-meta">' + esc(item.meta) + "</span>" +
            "</div>" +
            '<p class="recurso-desc">' + esc(item.descripcion) + "</p>" +
            '<div class="recurso-actions">' +
              '<a class="recurso-btn" href="' + item.archivo + '" download>Descargar PDF</a>' +
              (item.fuente
                ? '<a class="recurso-link" href="' + item.fuente + '" download>Markdown</a>'
                : "") +
            "</div>" +
          "</div>" +
        "</article>"
      );
    }).join("");

    return (
      '<section class="recursos" aria-label="Material descargable">' +
        '<header class="recursos-head reveal">' +
          '<span class="recursos-kicker">' + esc(pack.titulo) + "</span>" +
          "<h2>Guías para descargar</h2>" +
          "<p>" + esc(pack.descripcion) + "</p>" +
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
