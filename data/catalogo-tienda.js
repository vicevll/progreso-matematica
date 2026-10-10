// Catálogo público de mazos. El contenido adquirido se copia al usuario
// mediante el RPC de Supabase definido en supabase/tienda.sql.
window.STORE_CATALOG = [
  {
    id: "paes-m1-numeros",
    title: "PAES M1: Números",
    description: "15 tarjetas breves de conceptos, fórmulas y ejercicios de Números para PAES M1.",
    color: "#2878e8",
    price: 0,
    status: "available",
    tags: ["PAES M1", "Números", "15 tarjetas"],
    breakdown: { concepts: 5, exercises: 5, formulas: 5 },
    cards: [
      { id: "c01", q: "¿Cómo se relacionan los conjuntos $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$ y $\\mathbb{R}$? Clasifica $-4$, $\\frac{3}{5}$ y $\\sqrt{2}$.", a: "$\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$. $-4$ es entero y racional; $\\frac{3}{5}$ es racional; $\\sqrt{2}$ es real irracional." },
      { id: "c02", q: "¿Qué condición debe cumplir un número para ser racional? Da un ejemplo de uno que no lo sea.", a: "Es racional si puede escribirse como $\\frac{p}{q}$, con $p,q\\in\\mathbb{Z}$ y $q\\ne0$. Por ejemplo, $0{,}75=\\frac{3}{4}$. $\\sqrt{2}$ es irracional." },
      { id: "c03", q: "¿Qué representa $a^n$ cuando $n$ es un entero positivo?", a: "El producto de $n$ factores iguales a $a$: $a^n=\\underbrace{a\\cdot a\\cdots a}_{n\\text{ factores}}$. Por ejemplo, $2^4=2\\cdot2\\cdot2\\cdot2=16$." },
      { id: "c04", q: "¿Cuánto vale $a^0$? ¿Hay alguna excepción?", a: "$a^0=1$ para $a\\ne0$. La expresión $0^0$ no se define con esta regla." },
      { id: "c05", q: "¿Cómo se interpreta una potencia con exponente negativo, como $a^{-n}$?", a: "Es el inverso de la potencia positiva: $a^{-n}=\\frac{1}{a^n}$, con $a\\ne0$. Ejemplo: $2^{-3}=\\frac{1}{8}$." },

      { id: "f01", q: "¿Cómo calculas el $p\\%$ de una cantidad $N$?", a: "$\\frac{p}{100}\\cdot N$. Ejemplo: el $15\\%$ de 200 es $\\frac{15}{100}\\cdot200=30$." },
      { id: "f02", q: "¿Cómo calculas qué porcentaje representa $A$ de $B$?", a: "$\\frac{A}{B}\\cdot100\\%$, con $B\\ne0$. Ejemplo: 30 representa $\\frac{30}{120}\\cdot100\\%=25\\%$ de 120." },
      { id: "f03", q: "¿Cómo calculas el valor final de $N$ después de un aumento de $p\\%$?", a: "$N\\left(1+\\frac{p}{100}\\right)$. Ejemplo: aumentar 80 en $25\\%$: $80\\cdot1{,}25=100$." },
      { id: "f04", q: "¿Cómo calculas el precio final $P_f$ después de un descuento de $d\\%$?", a: "$P_f=P\\left(1-\\frac{d}{100}\\right)$. Ejemplo: $30\\%$ de descuento sobre $20\\,000$: $20\\,000\\cdot0{,}7=14\\,000$." },
      { id: "f05", q: "¿Cómo se combinan dos descuentos sucesivos de $d_1\\%$ y $d_2\\%$?", a: "Se multiplican los factores: $P_f=P\\left(1-\\frac{d_1}{100}\\right)\\left(1-\\frac{d_2}{100}\\right)$. Dos descuentos de $10\\%$ y $20\\%$ dejan el $72\\%$ del precio inicial: el descuento total es $28\\%$, no $30\\%$." },

      { id: "e01", q: "¿Cuáles afirmaciones son verdaderas sobre $4^{12}+2^{25}$? I) Es divisible por 2. II) Es divisible por 4. III) Es divisible por 3.", a: "Las tres son verdaderas. La suma es par y ambos términos son divisibles por 4. Módulo 3, $4^{12}\\equiv1$ y $2^{25}\\equiv2$; por eso la suma también es divisible por 3." },
      { id: "e02", q: "Simplifica $\\frac{6^{n+2}-6^n}{35}$.", a: "$\\frac{6^n(6^2-1)}{35}=\\frac{6^n(36-1)}{35}=6^n$." },
      { id: "e03", q: "Simplifica $\\sqrt{2}-\\sqrt{8}+\\sqrt{18}$.", a: "$\\sqrt{8}=2\\sqrt{2}$ y $\\sqrt{18}=3\\sqrt{2}$. Entonces $\\sqrt{2}-2\\sqrt{2}+3\\sqrt{2}=2\\sqrt{2}=\\sqrt{8}$." },
      { id: "e04", q: "¿$(-2)^{2n}$ es positivo o negativo? Considera $n\\in\\mathbb{N}$.", a: "$(-2)^{2n}=((-2)^2)^n=4^n$. Es un entero positivo." },
      { id: "e05", q: "Simplifica $5^n\\left(\\frac{1}{10^n}-\\frac{1}{15^n}\\right)$.", a: "$\\left(\\frac{5}{10}\\right)^n-\\left(\\frac{5}{15}\\right)^n=\\left(\\frac12\\right)^n-\\left(\\frac13\\right)^n$." },
    ]
  },
  {
    id: "paes-m1-proximo",
    title: "PAES M1 · Próximo mazo",
    description: "Segundo mazo gratuito del catálogo. Estamos definiendo sus contenidos después de validar el de Números.",
    color: "#22a6a1",
    price: 0,
    status: "coming-soon",
    tags: ["PAES M1", "Gratis", "Próximamente"],
    cards: []
  }
];
