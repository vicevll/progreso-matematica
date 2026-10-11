// Prompts para el generador de flashcards.
// Diseñados para producir JSON limpio y LaTeX correcto.
var PROMPTS = {
  transcribir: "Transcribe el contenido de esta imagen a Markdown. " +
    "Usa LaTeX entre $...$ para fórmulas en línea y $$...$$ para fórmulas en bloque. " +
    "Mantén títulos, listas y estructura. No omitas contenido matemático. " +
    "Si no hay texto legible, responde 'SIN_TEXTO'.",

  generar: "A partir del siguiente contenido académico, genera exactamente {count} tarjetas de estudio " +
    "(flashcards) en formato JSON. Cada tarjeta debe tener:\n" +
    "- q: pregunta o concepto breve (en español)\n" +
    "- a: respuesta completa pero concisa\n\n" +
    "Reglas:\n" +
    "1. Usa LaTeX con $...$ para fórmulas.\n" +
    "2. Varía entre: conceptos, definiciones, fórmulas y ejercicios breves.\n" +
    "3. Las preguntas deben ser autocontenidas.\n" +
    "4. Devuelve SOLO el JSON, sin markdown ni explicaciones.\n" +
    "5. Formato: [{\"q\":\"...\",\"a\":\"...\"}, ...]\n\n" +
    "Contenido:\n{content}",

  regenerar: "Genera {count} tarjetas diferentes a partir del mismo contenido. " +
    "No repitas preguntas anteriores. Formato JSON igual que antes:\n" +
    "[{\"q\":\"...\",\"a\":\"...\"}, ...]\n\n" +
    "Contenido:\n{content}"
};
