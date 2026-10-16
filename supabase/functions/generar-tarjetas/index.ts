// Studappy · Edge Function "generar-tarjetas"
//
// Recibe pedidos del generador de mazos de usuarios con sesión iniciada,
// descuenta su límite de mazos con IA (supabase/ia.sql) y llama a Gemini con
// la key del proyecto, que nunca llega al navegador.
//
// Quien ya usó sus mazos del día puede guardar su propia API key de Gemini
// (queda en su navegador). Si el pedido trae "clave", se usa esa key y no se
// descuenta nada del límite. La key del usuario no se guarda ni se registra.
//
// Secretos (Supabase -> Edge Functions -> Secrets):
//   GEMINI_API_KEY        obligatorio, tu key de Google AI Studio
//   GEMINI_MODELO_TEXTO   opcional, modelo para generar tarjetas
//   GEMINI_MODELO_VISION  opcional, modelo para leer PDF e imágenes
//   GEMINI_MODELO_PLUS    opcional, modelo de los mazos IA plus (canje con puntos)
// SUPABASE_URL, SUPABASE_ANON_KEY y SUPABASE_SERVICE_ROLE_KEY los pone Supabase.
//
// Pedidos (POST JSON). "sesion" identifica el mazo que se está generando:
//   { accion: "transcribir", sesion, archivo: { mime, datos }, clave?, plus? }   datos en base64
//   { accion: "generar", sesion, texto, cantidad, evitar?, clave?, plus? }
//   plus: true usa un canje de IA plus (mejor modelo, hasta 40 tarjetas, sin límite diario)
//   { accion: "estado" }              cuántos mazos le quedan hoy (no gasta)
//   { accion: "verificar", clave }    comprueba una API key con Google (no gasta)
// Respuesta: { texto, restantes, limite, periodo } (o { texto, propia: true } con
// key propia, o { texto, plus: true } con IA plus), o { error, codigo } con status 4xx/5xx.

const GEMINI_KEY = Deno.env.get("GEMINI_API_KEY") ?? "";
// Por defecto, la familia Flash-Lite (la más barata). Si quieres más calidad
// al generar, define GEMINI_MODELO_TEXTO = "gemini-flash-latest".
const MODELO_TEXTO = Deno.env.get("GEMINI_MODELO_TEXTO") || "gemini-flash-lite-latest";
const MODELO_VISION = Deno.env.get("GEMINI_MODELO_VISION") || "gemini-flash-lite-latest";
// IA plus (supabase/misiones.sql): un mazo con un modelo mejor y hasta 40 tarjetas.
const MODELO_PLUS = Deno.env.get("GEMINI_MODELO_PLUS") || "gemini-flash-latest";
const GEMINI_BASE = Deno.env.get("GEMINI_BASE_URL") || "https://generativelanguage.googleapis.com/v1beta";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

// Gemini acepta hasta 50 MB de PDF en línea; 25 MB (≈33 MB en base64) deja margen.
const MAX_ARCHIVO_MB = 25;
const MAX_ARCHIVO_BYTES = MAX_ARCHIVO_MB * 1024 * 1024;
const MAX_TEXTO = 40000;
const MAX_TARJETAS = 20; // máximo de tarjetas por mazo generado con IA
const MAX_TARJETAS_PLUS = 40;
const TIPOS_ARCHIVO = ["application/pdf", "image/jpeg", "image/png", "image/webp"];
const FORMATO_CLAVE = /^[A-Za-z0-9._-]{20,200}$/;

const CORS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const PROMPT_TRANSCRIBIR =
  "Transcribe el contenido de este archivo a Markdown. " +
  "Usa LaTeX entre $...$ para fórmulas en línea y $$...$$ para fórmulas en bloque. " +
  "Mantén títulos, listas y estructura. No omitas contenido matemático. " +
  "Responde solo con la transcripción. Si no hay texto legible, responde exactamente SIN_TEXTO.";

function promptGenerar(cantidad: number, evitar: string[]): string {
  let texto =
    `A partir del contenido académico que viene a continuación, genera exactamente ${cantidad} ` +
    "tarjetas de estudio (flashcards) en español. Cada tarjeta tiene:\n" +
    "- q: una pregunta o concepto breve, autocontenido (se entiende sin ver las demás)\n" +
    "- a: la respuesta, completa pero concisa\n\n" +
    "Reglas:\n" +
    "1. Escribe las fórmulas en LaTeX entre $...$ (en línea) o $$...$$ (en bloque).\n" +
    "2. Varía entre conceptos, definiciones, fórmulas y ejercicios breves con su resultado.\n" +
    "3. Usa solo información del contenido; no inventes datos.\n" +
    "4. No numeres las tarjetas ni agregues texto fuera de q y a.";
  if (evitar.length) {
    texto += "\n5. Estas preguntas ya existen; crea otras distintas:\n" +
      evitar.map((q) => "- " + q).join("\n");
  }
  return texto;
}

// Salida estructurada: Gemini devuelve JSON válido (con las barras de LaTeX
// bien escapadas) que cumple este esquema.
const ESQUEMA_TARJETAS = {
  type: "ARRAY",
  items: {
    type: "OBJECT",
    properties: { q: { type: "STRING" }, a: { type: "STRING" } },
    required: ["q", "a"],
  },
};

type Cuota = { restantes?: number; limite?: number; periodo?: string };

class ErrorUsuario extends Error {
  status: number;
  codigo: string;
  constructor(status: number, message: string, codigo = "error") {
    super(message);
    this.status = status;
    this.codigo = codigo;
  }
}

function responder(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

async function usuarioDe(req: Request): Promise<string> {
  const auth = req.headers.get("Authorization") ?? "";
  if (!auth.startsWith("Bearer ")) {
    throw new ErrorUsuario(401, "Inicia sesión para usar el generador.", "sin_sesion");
  }
  const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { Authorization: auth, apikey: ANON_KEY || req.headers.get("apikey") || "" },
  });
  const user = res.ok ? await res.json().catch(() => null) : null;
  if (!user || !user.id) {
    throw new ErrorUsuario(401, "Tu sesión expiró. Vuelve a iniciar sesión.", "sin_sesion");
  }
  return String(user.id);
}

async function rpc(nombre: string, args: Record<string, unknown>): Promise<unknown> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${nombre}`, {
    method: "POST",
    headers: {
      apikey: SERVICE_KEY,
      Authorization: `Bearer ${SERVICE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
  const texto = await res.text();
  if (!res.ok) {
    let detalle: { message?: string; hint?: string } = {};
    try { detalle = JSON.parse(texto); } catch { /* texto plano */ }
    if (detalle.hint === "cuota_agotada") {
      throw new ErrorUsuario(429, detalle.message || "Ya usaste tus mazos con IA de hoy.", "cuota");
    }
    if (detalle.hint === "sin_plus" || detalle.hint === "plus_agotado") {
      throw new ErrorUsuario(400, detalle.message || "No tienes IA plus disponible.", detalle.hint);
    }
    if (detalle.hint === "cuota_mazo") {
      throw new ErrorUsuario(429, detalle.message || "Este mazo ya usó todas sus llamadas a la IA.", "cuota_mazo");
    }
    console.error(`RPC ${nombre}`, res.status, texto.slice(0, 500));
    if (res.status === 404) {
      throw new ErrorUsuario(500, "Falta ejecutar supabase/ia.sql en el proyecto.", "config");
    }
    throw new ErrorUsuario(500, "No se pudo registrar el uso del generador.", "cuota_error");
  }
  return texto ? JSON.parse(texto) : null;
}

// Errores de Google cuando la key es del usuario: se los explicamos a él.
function errorClavePropia(status: number, texto: string): ErrorUsuario | null {
  if (status === 429) {
    return new ErrorUsuario(429, "Tu API key llegó a su límite de uso en Google. Espera un minuto (o hasta mañana) e intenta de nuevo.", "clave_cuota");
  }
  if (status === 400 && !/API_KEY_INVALID|API key not valid|API key expired/i.test(texto)) return null;
  if (status === 400 || status === 401 || status === 403) {
    return new ErrorUsuario(400, "Google rechazó tu API key. Revisa que esté bien copiada o crea una nueva en Google AI Studio.", "clave_invalida");
  }
  return null;
}

async function gemini(modelo: string, partes: unknown[], config: Record<string, unknown>, clavePropia = ""): Promise<string> {
  let res: Response;
  try {
    res = await fetch(`${GEMINI_BASE}/models/${encodeURIComponent(modelo)}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": clavePropia || GEMINI_KEY },
      body: JSON.stringify({ contents: [{ role: "user", parts: partes }], generationConfig: config }),
    });
  } catch (e) {
    console.error("Gemini sin conexión", e);
    throw new ErrorUsuario(502, "No se pudo conectar con la IA. Intenta de nuevo.", "ia_conexion");
  }
  if (!res.ok) {
    const texto = await res.text();
    console.error("Gemini", modelo, res.status, clavePropia ? "(key del usuario)" : "", texto.slice(0, 800));
    if (clavePropia) {
      const e = errorClavePropia(res.status, texto);
      if (e) throw e;
    }
    if (res.status === 429) {
      throw new ErrorUsuario(503, "La IA tiene mucha demanda ahora. Intenta de nuevo en un minuto.", "ia_ocupada");
    }
    if (res.status === 404) {
      throw new ErrorUsuario(502, `El modelo "${modelo}" no está disponible. Cambia GEMINI_MODELO_* en los secretos.`, "modelo");
    }
    if (res.status === 400 || res.status === 403) {
      throw new ErrorUsuario(502, "La IA rechazó el pedido (revisa la key o el archivo).", "ia_rechazo");
    }
    throw new ErrorUsuario(502, "La IA no pudo responder. Intenta de nuevo.", "ia_error");
  }
  const data = await res.json().catch(() => null);
  const candidato = data?.candidates?.[0];
  const texto = (candidato?.content?.parts ?? [])
    .map((p: { text?: string }) => p.text ?? "")
    .join("")
    .trim();
  if (!texto) {
    const motivo = candidato?.finishReason || data?.promptFeedback?.blockReason || "";
    throw new ErrorUsuario(422, "La IA no devolvió contenido" + (motivo ? ` (${motivo})` : "") + ". Prueba con otro texto.", "vacio");
  }
  return texto;
}

// Comprueba una key con Google listando modelos (no genera nada ni tiene costo).
async function verificarClave(clave: string): Promise<void> {
  let res: Response;
  try {
    res = await fetch(`${GEMINI_BASE}/models?pageSize=1`, { headers: { "x-goog-api-key": clave } });
  } catch (e) {
    console.error("Gemini sin conexión (verificar)", e);
    throw new ErrorUsuario(502, "No se pudo comprobar la key con Google. Intenta de nuevo.", "ia_conexion");
  }
  if (res.ok) return;
  const texto = await res.text();
  if (res.status === 429) return; // la key existe; solo está ocupada
  const e = errorClavePropia(res.status, texto);
  if (e) throw e;
  console.error("Gemini (verificar)", res.status, texto.slice(0, 400));
  throw new ErrorUsuario(502, "No se pudo comprobar la key con Google. Intenta de nuevo.", "ia_error");
}

function claveDe(body: any, obligatoria: boolean): string {
  const clave = typeof body.clave === "string" ? body.clave.trim() : "";
  if (!clave) {
    if (obligatoria) throw new ErrorUsuario(400, "Pega tu API key para continuar.", "clave_invalida");
    return "";
  }
  if (!FORMATO_CLAVE.test(clave)) {
    throw new ErrorUsuario(400, "Eso no parece una API key. Cópiala completa desde Google AI Studio.", "clave_invalida");
  }
  return clave;
}

function validar(body: any) {
  if (!body || typeof body !== "object") throw new ErrorUsuario(400, "Pedido inválido.", "pedido");
  if (body.accion === "estado") return { accion: "estado" as const };
  if (body.accion === "verificar") return { accion: "verificar" as const, clave: claveDe(body, true) };
  const clave = claveDe(body, false);
  const sesion = String(body.sesion ?? "");
  if (!/^[A-Za-z0-9_-]{8,64}$/.test(sesion)) {
    throw new ErrorUsuario(400, "Recarga la página e intenta de nuevo (falta la sesión del generador).", "pedido");
  }
  if (body.accion === "transcribir") {
    const archivo = body.archivo ?? {};
    const mime = String(archivo.mime ?? "");
    const datos = String(archivo.datos ?? "");
    if (!TIPOS_ARCHIVO.includes(mime)) {
      throw new ErrorUsuario(400, "Formato no soportado. Usa PDF, JPG, PNG o WEBP.", "formato");
    }
    if (!datos || !/^[A-Za-z0-9+/=\s]+$/.test(datos)) throw new ErrorUsuario(400, "El archivo llegó vacío o dañado.", "pedido");
    if (datos.length > Math.ceil(MAX_ARCHIVO_BYTES / 3) * 4 + 16) {
      throw new ErrorUsuario(413, `El archivo supera los ${MAX_ARCHIVO_MB} MB.`, "tamano");
    }
    return { accion: "transcribir" as const, sesion, clave, plus: body.plus === true, mime, datos };
  }
  if (body.accion === "generar") {
    const texto = String(body.texto ?? "").trim();
    if (!texto) throw new ErrorUsuario(400, "No hay contenido para generar tarjetas.", "pedido");
    if (texto.length > MAX_TEXTO) {
      throw new ErrorUsuario(413, `El texto es muy largo (máximo ${MAX_TEXTO.toLocaleString("es-CL")} caracteres). Divídelo en partes.`, "tamano");
    }
    const cantidad = Math.min(body.plus === true ? MAX_TARJETAS_PLUS : MAX_TARJETAS, Math.max(5, Math.round(Number(body.cantidad) || 10)));
    const evitar = Array.isArray(body.evitar)
      ? body.evitar.map((q: unknown) => String(q ?? "").slice(0, 300)).filter(Boolean).slice(0, 60)
      : [];
    return { accion: "generar" as const, sesion, clave, plus: body.plus === true, texto, cantidad, evitar };
  }
  throw new ErrorUsuario(400, "Acción desconocida.", "pedido");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return responder(405, { error: "Método no permitido.", codigo: "metodo" });

  let userId = "";
  let sesion = "";
  let consumido = false;
  let devolver = false;
  let plus = false;
  try {
    userId = await usuarioDe(req);
    const pedido = validar(await req.json().catch(() => null));

    if (pedido.accion === "estado") {
      const est = (await rpc("ia_estado", { p_user: userId })) as Cuota | null;
      return responder(200, { restantes: Number(est?.restantes ?? 0), limite: Number(est?.limite ?? 0), periodo: est?.periodo ?? "dia" });
    }
    if (pedido.accion === "verificar") {
      await verificarClave(pedido.clave);
      return responder(200, { ok: true });
    }

    sesion = pedido.sesion;
    // IA plus usa siempre la key de Studappy (es un premio), aunque el usuario tenga la suya.
    plus = pedido.plus;
    const propia = plus ? "" : pedido.clave;
    if (!propia && !GEMINI_KEY) throw new ErrorUsuario(500, "Falta configurar GEMINI_API_KEY en los secretos de Supabase.", "config");

    // Con la key del usuario no se descuenta nada: el costo es de su cuenta de Google.
    // Un mazo IA plus tampoco cuenta en el límite diario: gasta su canje.
    let cuota: Cuota | null = null;
    if (plus) {
      await rpc("ia_plus_usar", { p_user: userId, p_sesion: sesion });
      consumido = true;
    } else if (!propia) {
      cuota = (await rpc("ia_consumir", { p_user: userId, p_sesion: sesion })) as Cuota | null;
      consumido = true;
    }

    let texto: string;
    try {
      if (pedido.accion === "transcribir") {
        texto = await gemini(
          plus ? MODELO_PLUS : MODELO_VISION,
          [{ text: PROMPT_TRANSCRIBIR }, { inline_data: { mime_type: pedido.mime, data: pedido.datos } }],
          { temperature: 0.2, maxOutputTokens: 8192 },
          propia,
        );
      } else {
        texto = await gemini(
          plus ? MODELO_PLUS : MODELO_TEXTO,
          [{ text: promptGenerar(pedido.cantidad, pedido.evitar) }, { text: "Contenido:\n\n" + pedido.texto }],
          {
            temperature: 0.5,
            maxOutputTokens: 8192,
            responseMimeType: "application/json",
            responseSchema: ESQUEMA_TARJETAS,
          },
          propia,
        );
      }
    } catch (e) {
      // Si Gemini falló por conexión o error del servicio no hubo costo: se
      // devuelve el uso. Si respondió (aunque vacío), el uso se mantiene.
      devolver = !(e instanceof ErrorUsuario && e.codigo === "vacio");
      throw e;
    }

    if (pedido.accion === "transcribir" && texto.includes("SIN_TEXTO")) {
      throw new ErrorUsuario(422, "No se encontró texto legible en el archivo.", "sin_texto");
    }
    if (pedido.accion === "generar") {
      // Aunque la IA devuelva de más, nunca se entregan más tarjetas de las pedidas.
      try {
        const tarjetas = JSON.parse(texto);
        if (Array.isArray(tarjetas)) texto = JSON.stringify(tarjetas.slice(0, pedido.cantidad));
      } catch { /* formato inesperado: el navegador lo repara y también recorta */ }
    }
    if (pedido.accion === "generar") {
      // Para las misiones ("Crea un mazo con IA"). Si misiones.sql no está, no pasa nada.
      try {
        await rpc("ia_registrar_generacion", { p_user: userId, p_sesion: sesion, p_propia: !!propia, p_plus: plus });
      } catch (e) {
        console.error("No se pudo registrar la generación", e);
      }
    }
    if (plus) return responder(200, { texto, plus: true });
    if (propia) return responder(200, { texto, propia: true });
    return responder(200, {
      texto,
      restantes: Number(cuota?.restantes ?? 0),
      limite: Number(cuota?.limite ?? 0),
      periodo: cuota?.periodo ?? "dia",
    });
  } catch (e) {
    if (consumido && devolver) {
      const funcion = plus ? "ia_plus_devolver" : "ia_devolver";
      try { await rpc(funcion, { p_user: userId, p_sesion: sesion }); } catch (e2) { console.error("No se pudo devolver el uso", e2); }
    }
    if (e instanceof ErrorUsuario) return responder(e.status, { error: e.message, codigo: e.codigo });
    console.error("Error inesperado", e);
    return responder(500, { error: "Error inesperado en el generador.", codigo: "interno" });
  }
});
