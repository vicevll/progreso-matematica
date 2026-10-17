// Módulo de IA del generador.
// Las llamadas pasan por la Edge Function "generar-tarjetas" de Supabase
// (supabase/functions/generar-tarjetas), que guarda la key de Gemini de
// Studappy y aplica el límite diario de cada usuario. El navegador nunca ve
// esa key.
//
// Quien ya usó sus mazos del día puede guardar su propia API key de Gemini:
// queda en este navegador (por usuario) y viaja con cada pedido a la función,
// que la usa en lugar de la de Studappy y no descuenta del límite.
(function () {
  var FUNCION = "generar-tarjetas";
  var MAX_MB = 25;
  var MAX_ARCHIVO = MAX_MB * 1024 * 1024;
  var TIPOS = ["application/pdf", "image/jpeg", "image/png", "image/webp"];
  var CLAVE_PREFIJO = "studappy-gemini-key:";
  var FORMATO_CLAVE = /^[A-Za-z0-9._-]{20,200}$/;
  var restantes = null;
  var limite = null;
  var periodo = "dia";
  var clavesEnMemoria = {}; // si el navegador no deja guardar, dura hasta recargar

  function usuarioId() {
    var u = window.Auth && window.Auth.user ? window.Auth.user() : null;
    return u && u.id ? String(u.id) : "";
  }

  function clavePropia() {
    var id = usuarioId();
    if (!id) return "";
    // En el modo de prueba solo se usa la key de Studappy (1 mazo con IA).
    if (window.Auth && window.Auth.isTrial && window.Auth.isTrial()) return "";
    if (clavesEnMemoria[id]) return clavesEnMemoria[id];
    try { return localStorage.getItem(CLAVE_PREFIJO + id) || ""; } catch (e) { return ""; }
  }

  function guardarClave(clave) {
    var id = usuarioId();
    if (!id) return;
    try {
      localStorage.setItem(CLAVE_PREFIJO + id, clave);
      delete clavesEnMemoria[id];
    } catch (e) {
      clavesEnMemoria[id] = clave; // el navegador no deja guardar: dura hasta recargar
    }
  }

  function quitarClave() {
    var id = usuarioId();
    if (!id) return;
    delete clavesEnMemoria[id];
    try { localStorage.removeItem(CLAVE_PREFIJO + id); } catch (e) { /* nada */ }
  }

  function formatoClave(clave) {
    return FORMATO_CLAVE.test(String(clave || "").trim());
  }

  // Las Edge Functions de los proyectos nuevos de Supabase solo aceptan las
  // claves de formato nuevo (sb_publishable_...), no la anon key antigua.
  // Es pública como la anon key; se configura en js/config.js.
  function clavePublicable() {
    var cfg = window.APP_CONFIG || {};
    var clave = String(cfg.SUPABASE_PUBLISHABLE_KEY || "").trim();
    return clave.indexOf("sb_publishable_") === 0 ? clave : "";
  }

  function isDemo() {
    return !!(window.Auth && window.Auth.isDemo && window.Auth.isDemo());
  }

  // Lee el error que devolvió la función o la plataforma: { msg, codigo }.
  function mensajeDeError(error) {
    var res = error && error.context;
    if (error && error.name === "FunctionsHttpError" && res && typeof res.json === "function") {
      var status = res.status;
      var porEstado = function () {
        if (status === 404) return { msg: "El generador aún no está instalado en el servidor (falta desplegar la función " + FUNCION + ").", codigo: "no_desplegada" };
        if (status === 401) return { msg: "Tu sesión expiró. Vuelve a iniciar sesión.", codigo: "sin_sesion" };
        return { msg: "El generador respondió con un error (" + status + ").", codigo: "error" };
      };
      return res.json().then(function (body) {
        if (body && body.error) return { msg: String(body.error), codigo: String(body.codigo || "error") }; // de nuestra función
        var code = body && body.code;
        if (code === "INVALID_API_KEY" || code === "INVALID_CREDENTIALS") {
          return { msg: "Falta configurar la publishable key de Supabase (SUPABASE_PUBLISHABLE_KEY en js/config.js).", codigo: "config" };
        }
        if (window.console && body) console.error("Respuesta del generador:", status, body);
        return porEstado();
      }, porEstado);
    }
    return Promise.resolve({ msg: "No se pudo conectar con el generador. Revisa tu conexión e intenta de nuevo.", codigo: "conexion" });
  }

  function invocar(body) {
    if (isDemo()) {
      return Promise.reject(new Error("En modo local el generador no está disponible. Entra con Google para usarlo."));
    }
    if (!window.SB || !window.SB.client) {
      return Promise.reject(new Error("El generador no está disponible ahora."));
    }
    var opciones = { body: body, timeout: 120000 };
    var clave = clavePublicable();
    if (clave) opciones.headers = { apikey: clave }; // la sesión del usuario sigue yendo en Authorization
    return window.SB.client.functions
      .invoke(FUNCION, opciones)
      .then(function (res) {
        if (res.error) {
          return mensajeDeError(res.error).then(function (e) {
            var err = new Error(e.msg);
            err.codigo = e.codigo;
            throw err;
          });
        }
        var data = res.data || {};
        if (data.propia) {
          restantes = null;
        } else {
          if (typeof data.restantes === "number") restantes = data.restantes;
          if (typeof data.limite === "number" && data.limite > 0) limite = data.limite;
          if (data.periodo) periodo = String(data.periodo);
        }
        return data;
      });
  }

  // Agrega la key propia (si hay) a un pedido que usa la IA.
  function conClave(body) {
    var k = clavePropia();
    if (k) body.clave = k;
    return body;
  }

  // Cuántos mazos con IA le quedan hoy, sin gastar ninguno.
  // Resuelve { propia: true } si usa su key, { restantes, limite, periodo }
  // o null si no se pudo saber (no bloquea al generador).
  function estado() {
    if (isDemo()) return Promise.resolve(null);
    if (clavePropia()) return Promise.resolve({ propia: true });
    return invocar({ accion: "estado" }).then(function (data) {
      if (typeof data.restantes !== "number") return null;
      return { restantes: data.restantes, limite: limite, periodo: periodo };
    }, function () { return null; });
  }

  // Comprueba una key con Google antes de guardarla.
  function verificarClave(clave) {
    clave = String(clave || "").trim();
    if (!clave) return Promise.reject(new Error("Pega tu API key para continuar."));
    if (!formatoClave(clave)) return Promise.reject(new Error("Eso no parece una API key. Cópiala completa desde Google AI Studio."));
    return invocar({ accion: "verificar", clave: clave }).then(function () { return clave; });
  }

  // Convierte base64 (sin el prefijo data:) desde un File.
  function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () {
        var dataUrl = String(reader.result || "");
        resolve(dataUrl.split(",")[1] || "");
      };
      reader.onerror = function () { reject(new Error("No se pudo leer el archivo.")); };
      reader.readAsDataURL(file);
    });
  }

  function fileToMime(file) {
    if (file.type) return file.type;
    var ext = (file.name || "").split(".").pop().toLowerCase();
    if (ext === "jpg" || ext === "jpeg") return "image/jpeg";
    if (ext === "png") return "image/png";
    if (ext === "webp") return "image/webp";
    if (ext === "pdf") return "application/pdf";
    return "application/octet-stream";
  }

  // Comandos de LaTeX que empiezan con b, f, n, r, t o u: en JSON, "\frac" se
  // leería como salto de página + "rac", "\times" como tabulación + "imes", etc.
  var LATEX_BFNRTU = {
    bar: 1, backslash: 1, because: 1, begin: 1, beta: 1, big: 1, Big: 1, bigcap: 1, bigcup: 1, bigg: 1, Bigg: 1,
    binom: 1, bm: 1, bmatrix: 1, boldsymbol: 1, bot: 1, boxed: 1, bullet: 1, bf: 1,
    flat: 1, forall: 1, frac: 1, frak: 1, frown: 1,
    nabla: 1, ne: 1, neg: 1, neq: 1, newline: 1, ngeq: 1, ni: 1, nleq: 1, nmid: 1, not: 1, notin: 1, nu: 1, nsubseteq: 1,
    rangle: 1, rbrace: 1, rceil: 1, Re: 1, rfloor: 1, rho: 1, right: 1, rightarrow: 1, Rightarrow: 1, rightleftharpoons: 1, rm: 1,
    tan: 1, tanh: 1, tau: 1, text: 1, textbf: 1, textit: 1, textrm: 1, tfrac: 1, therefore: 1, theta: 1, Theta: 1,
    tilde: 1, times: 1, to: 1, top: 1, triangle: 1, triangleq: 1,
    uparrow: 1, Uparrow: 1, underbrace: 1, underline: 1, unlhd: 1, upsilon: 1, Upsilon: 1, uplus: 1
  };

  // Repara las barras de LaTeX mal escapadas dentro de los strings de un JSON
  // generado por una IA, antes de JSON.parse. Respeta los escapes válidos
  // (\" \\ \/ \uXXXX y \n \t... cuando no forman un comando de LaTeX).
  function repararLatexJson(raw) {
    var out = "";
    var enString = false;
    for (var i = 0; i < raw.length; i++) {
      var ch = raw.charAt(i);
      if (!enString) {
        if (ch === '"') enString = true;
        out += ch;
        continue;
      }
      if (ch === '"') { enString = false; out += ch; continue; }
      if (ch !== "\\") { out += ch; continue; }
      var next = raw.charAt(i + 1);
      if (next === '"' || next === "\\" || next === "/") { out += ch + next; i++; continue; }
      var palabra = (raw.slice(i + 1).match(/^[A-Za-z]+/) || [""])[0];
      if (next === "u" && /^[0-9a-fA-F]{4}/.test(raw.slice(i + 2)) && !LATEX_BFNRTU[palabra]) {
        out += ch; continue; // \uXXXX real
      }
      if ("bfnrt".indexOf(next) !== -1 && !LATEX_BFNRTU[palabra]) {
        out += ch; continue; // escape JSON real (\n, \t...)
      }
      out += "\\\\"; // barra de LaTeX: se escapa
    }
    return out;
  }

  // Extrae el arreglo JSON de la respuesta (a veces viene con ```json ... ```).
  function parseJson(raw) {
    var text = String(raw || "");
    var inicio = text.indexOf("[");
    var fin = text.lastIndexOf("]");
    if (inicio === -1 || fin <= inicio) throw new Error("La IA no devolvió tarjetas válidas. Intenta de nuevo.");
    var json = text.slice(inicio, fin + 1);
    try {
      return JSON.parse(repararLatexJson(json));
    } catch (e) {
      try { return JSON.parse(json); } catch (e2) { /* sigue abajo */ }
      throw new Error("La IA devolvió tarjetas con un formato inválido. Intenta de nuevo.");
    }
  }

  // "sesion" identifica el mazo que se está generando: todas las llamadas de
  // una misma sesión cuentan como un solo mazo en el límite.
  function transcribirArchivo(file, progress, sesion) {
    var mime = fileToMime(file);
    if (TIPOS.indexOf(mime) === -1) return Promise.reject(new Error("Formato no soportado. Usa PDF, JPG, PNG o WEBP."));
    if (file.size > MAX_ARCHIVO) return Promise.reject(new Error("El archivo pesa " + (file.size / 1048576).toFixed(1) + " MB; el máximo es " + MAX_MB + " MB."));
    if (typeof progress === "function") progress("Leyendo archivo...");
    return fileToBase64(file).then(function (b64) {
      if (typeof progress === "function") progress(mime === "application/pdf" ? "La IA está leyendo el PDF..." : "La IA está leyendo la imagen...");
      return invocar(conClave({ accion: "transcribir", sesion: sesion, archivo: { mime: mime, datos: b64 } }));
    }).then(function (data) {
      return String(data.texto || "");
    });
  }

  // Devuelve el texto crudo de la IA; se convierte con parseJson.
  function generarTarjetas(markdown, count, progress, evitar, sesion) {
    if (typeof progress === "function") progress("La IA está creando las tarjetas...");
    return invocar(conClave({ accion: "generar", sesion: sesion, texto: markdown, cantidad: count, evitar: evitar || [] })).then(function (data) {
      return String(data.texto || "");
    });
  }

  window.IA = {
    MAX_ARCHIVO: MAX_ARCHIVO,
    transcribirArchivo: transcribirArchivo,
    generarTarjetas: generarTarjetas,
    parseJson: parseJson,
    repararLatexJson: repararLatexJson,
    restantes: function () { return restantes; },
    limite: function () { return limite; },
    periodo: function () { return periodo; },
    disponible: function () { return !isDemo(); },
    estado: estado,
    clavePropia: function () { return !!clavePropia(); },
    verificarClave: verificarClave,
    guardarClave: guardarClave,
    quitarClave: quitarClave,
    formatoClave: formatoClave
  };
})();
