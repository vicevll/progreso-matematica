// Módulo de IA: Gemini 2.0 Flash (gratis, con visión) y Groq (gratis, solo texto).
// Las API keys se guardan en localStorage (clave "ia-config").
(function () {
  var CONFIG_KEY = "ia-config";

  function loadConfig() {
    try {
      var raw = localStorage.getItem(CONFIG_KEY);
      return raw ? JSON.parse(raw) : { provider: "gemini", geminiKey: "", groqKey: "" };
    } catch (e) {
      return { provider: "gemini", geminiKey: "", groqKey: "" };
    }
  }

  function saveConfig(config) {
    try { localStorage.setItem(CONFIG_KEY, JSON.stringify(config)); } catch (e) { /* ignorar */ }
  }

  function callGemini(parts) {
    var config = loadConfig();
    if (!config.geminiKey) return Promise.reject(new Error("Falta la API key de Gemini. Configúrala en el generador."));
    return fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + encodeURIComponent(config.geminiKey), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: parts }],
        generationConfig: { temperature: 0.4, maxOutputTokens: 8192 }
      })
    }).then(function (res) {
      if (!res.ok) return res.text().then(function (t) { throw new Error("Gemini " + res.status + ": " + t.slice(0, 200)); });
      return res.json();
    }).then(function (data) {
      if (!data.candidates || !data.candidates.length) throw new Error("Gemini no devolvió respuesta.");
      var text = (data.candidates[0].content || {}).parts || [];
      return text.map(function (p) { return p.text || ""; }).join("");
    });
  }

  function callGroq(text) {
    var config = loadConfig();
    if (!config.groqKey) return Promise.reject(new Error("Falta la API key de Groq. Configúrala en el generador."));
    return fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + config.groqKey },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: text }],
        temperature: 0.4,
        max_tokens: 4096
      })
    }).then(function (res) {
      if (!res.ok) return res.text().then(function (t) { throw new Error("Groq " + res.status + ": " + t.slice(0, 200)); });
      return res.json();
    }).then(function (data) {
      return data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content || "";
    });
  }

  function callIA(partsOrText) {
    var config = loadConfig();
    if (config.provider === "groq") return callGroq(partsOrText);
    return callGemini(partsOrText);
  }

  // Convierte base64 (sin data URL) en string.
  function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () {
        var dataUrl = String(reader.result || "");
        resolve(dataUrl.split(",")[1] || "");
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function fileToMime(file) {
    if (file.type) return file.type;
    var ext = (file.name || "").split(".").pop().toLowerCase();
    if (ext === "jpg" || ext === "jpeg") return "image/jpeg";
    if (ext === "png") return "image/png";
    if (ext === "pdf") return "application/pdf";
    return "application/octet-stream";
  }

  // Extrae JSON de una respuesta de LLM (a veces viene con ```json ... ```).
  function parseJson(raw) {
    var text = String(raw || "");
    var match = text.match(/\[[\s\S]*\]/);
    if (!match) throw new Error("La IA no devolvió un JSON válido.");
    return JSON.parse(match[0]);
  }

  function transcribirImagen(file, progress) {
    if (typeof progress === "function") progress("Leyendo archivo...");
    return fileToBase64(file).then(function (b64) {
      var mime = fileToMime(file);
      var label = mime === "application/pdf" ? "Leyendo PDF con Gemini..." : "Enviando imagen a Gemini...";
      if (typeof progress === "function") progress(label);
      return callGemini([
        { text: PROMPTS.transcribir },
        { inline_data: { mime_type: mime, data: b64 } }
      ]);
    }).then(function (text) {
      if (text.indexOf("SIN_TEXTO") !== -1) throw new Error("No se pudo leer texto en el archivo.");
      return text;
    });
  }

  // Rellena {clave} en una plantilla en una sola pasada.
  // Usa una función como reemplazo para que los "$$", "$&" o "$'" del
  // contenido (muy comunes en LaTeX) se copien tal cual y no se interpreten
  // como patrones especiales de String.replace.
  function fillPrompt(template, vars) {
    return String(template).replace(/\{(\w+)\}/g, function (match, key) {
      return Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : match;
    });
  }

  function generarTarjetas(markdown, count, progress) {
    var config = loadConfig();
    var prompt = fillPrompt(PROMPTS.generar, { count: count, content: markdown });
    if (config.provider === "groq") {
      if (typeof progress === "function") progress("Enviando a Groq...");
      return callGroq(prompt);
    }
    if (typeof progress === "function") progress("Enviando a Gemini...");
    return callGemini([{ text: prompt }]);
  }

  window.IA = {
    loadConfig: loadConfig,
    saveConfig: saveConfig,
    callIA: callIA,
    callGemini: callGemini,
    callGroq: callGroq,
    transcribirArchivo: transcribirImagen,
    generarTarjetas: generarTarjetas,
    fillPrompt: fillPrompt,
    parseJson: parseJson
  };
})();
