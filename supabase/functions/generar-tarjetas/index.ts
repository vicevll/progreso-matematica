// Studappy · Edge Function "generar-tarjetas"
//
// Recibe pedidos del generador de mazos de usuarios con sesión iniciada,
// descuenta su cuota diaria (supabase/ia.sql) y llama a Gemini con la key del
// proyecto, que nunca llega al navegador.
//
// Secretos (Supabase -> Edge Functions -> Secrets):
//   GEMINI_API_KEY        obligatorio, tu key de Google AI Studio
//   GEMINI_MODELO_TEXTO   opcional, modelo para generar tarjetas
//   GEMINI_MODELO_VISION  opcional, modelo para leer PDF e imágenes
// SUPABASE_URL, SUPABASE_ANON_KEY y SUPABASE_SERVICE_ROLE_KEY los pone Supabase.
//
// Pedidos (POST JSON):
//   { accion: "transcribir", archivo: { mime, datos } }   datos en base64
//   { accion: "generar", texto, cantidad, evitar? }
// Respuesta: { texto, restantes }  o  { error, codigo } con status 4xx/5xx.

const GEMINI_KEY = Deno.env.get("GEMINI_API_KEY") ?? "";
// Por defecto, la familia Flash-Lite (la más barata). Si quieres más calidad
// al generar, define GEMINI_MODELO_TEXTO = "gemini-flash-latest".
const MODELO_TEXTO = Deno.env.get("GEMINI_MODELO_TEXTO") || "gemini-flash-lite-latest";
const MODELO_VISION = Deno.env.get("GEMINI_MODELO_VISION") || "gemini-flash-lite-latest";
const GEMINI_BASE = Deno.env.get("GEMINI_BASE_URL") || "https://generativelanguage.googleapis.com/v1beta";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

const MAX_ARCHIVO_BYTES = 5 * 1024 * 1024;
const MAX_TEXTO = 40000;
const TIPOS_ARCHIVO = ["application/pdf", "image/jpeg", "image/png", "image/webp"];

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
      throw new ErrorUsuario(429, detalle.message || "Llegaste al límite de hoy.", "cuota");
    }
    console.error(`RPC ${nombre}`, res.status, texto.slice(0, 500));
    if (res.status === 404) {
      throw new ErrorUsuario(500, "Falta ejecutar supabase/ia.sql en el proyecto.", "config");
    }
    throw new ErrorUsuario(500, "No se pudo registrar el uso del generador.", "cuota_error");
  }
  return texto ? JSON.parse(texto) : null;
}

async function gemini(modelo: string, partes: unknown[], config: Record<string, unknown>): Promise<string> {
  let res: Response;
  try {
    res = await fetch(`${GEMINI_BASE}/models/${encodeURIComponent(modelo)}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": GEMINI_KEY },
      body: JSON.stringify({ contents: [{ role: "user", parts: partes }], generationConfig: config }),
    });
  } catch (e) {
    console.error("Gemini sin conexión", e);
    throw new ErrorUsuario(502, "No se pudo conectar con la IA. Intenta de nuevo.", "ia_conexion");
  }
  if (!res.ok) {
    const texto = await res.text();
    console.error("Gemini", modelo, res.status, texto.slice(0, 800));
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

function validar(body: any) {
  if (!body || typeof body !== "object") throw new ErrorUsuario(400, "Pedido inválido.", "pedido");
  if (body.accion === "transcribir") {
    const archivo = body.archivo ?? {};
    const mime = String(archivo.mime ?? "");
    const datos = String(archivo.datos ?? "");
    if (!TIPOS_ARCHIVO.includes(mime)) {
      throw new ErrorUsuario(400, "Formato no soportado. Usa PDF, JPG, PNG o WEBP.", "formato");
    }
    if (!datos || !/^[A-Za-z0-9+/=\s]+$/.test(datos)) throw new ErrorUsuario(400, "El archivo llegó vacío o dañado.", "pedido");
    if (datos.length > Math.ceil(MAX_ARCHIVO_BYTES / 3) * 4 + 16) {
      throw new ErrorUsuario(413, "El archivo supera los 5 MB.", "tamano");
    }
    return { accion: "transcribir" as const, mime, datos };
  }
  if (body.accion === "generar") {
    const texto = String(body.texto ?? "").trim();
    if (!texto) throw new ErrorUsuario(400, "No hay contenido para generar tarjetas.", "pedido");
    if (texto.length > MAX_TEXTO) {
      throw new ErrorUsuario(413, `El texto es muy largo (máximo ${MAX_TEXTO.toLocaleString("es-CL")} caracteres). Divídelo en partes.`, "tamano");
    }
    const cantidad = Math.min(30, Math.max(5, Math.round(Number(body.cantidad) || 10)));
    const evitar = Array.isArray(body.evitar)
      ? body.evitar.map((q: unknown) => String(q ?? "").slice(0, 300)).filter(Boolean).slice(0, 60)
      : [];
    return { accion: "generar" as const, texto, cantidad, evitar };
  }
  throw new ErrorUsuario(400, "Acción desconocida.", "pedido");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return responder(405, { error: "Método no permitido.", codigo: "metodo" });

  let userId = "";
  let consumido = false;
  let devolver = false;
  try {
    if (!GEMINI_KEY) throw new ErrorUsuario(500, "Falta configurar GEMINI_API_KEY en los secretos de Supabase.", "config");
    userId = await usuarioDe(req);
    const pedido = validar(await req.json().catch(() => null));

    const restantes = Number(await rpc("ia_consumir", { p_user: userId }));
    consumido = true;

    let texto: string;
    try {
      if (pedido.accion === "transcribir") {
        texto = await gemini(
          MODELO_VISION,
          [{ text: PROMPT_TRANSCRIBIR }, { inline_data: { mime_type: pedido.mime, data: pedido.datos } }],
          { temperature: 0.2, maxOutputTokens: 8192 },
        );
      } else {
        texto = await gemini(
          MODELO_TEXTO,
          [{ text: promptGenerar(pedido.cantidad, pedido.evitar) }, { text: "Contenido:\n\n" + pedido.texto }],
          {
            temperature: 0.5,
            maxOutputTokens: 8192,
            responseMimeType: "application/json",
            responseSchema: ESQUEMA_TARJETAS,
          },
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
    return responder(200, { texto, restantes });
  } catch (e) {
    if (consumido && devolver) {
      try { await rpc("ia_devolver", { p_user: userId }); } catch (e2) { console.error("No se pudo devolver el uso", e2); }
    }
    if (e instanceof ErrorUsuario) return responder(e.status, { error: e.message, codigo: e.codigo });
    console.error("Error inesperado", e);
    return responder(500, { error: "Error inesperado en el generador.", codigo: "interno" });
  }
});
