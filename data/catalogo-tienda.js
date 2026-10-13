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
    id: "paes-ciencias-mago",
    title: "Mazo del mago",
    subtitle: "PAES Ciencias · Estructura atómica",
    description: "60 tarjetas de conocimiento sobre estructura atómica, en 6 submazos que puedes jugar por separado.",
    color: "#7b5cff",
    price: 0,
    status: "available",
    // Diseño especial en Mis mazos (ver js/app.js y css/neon.css).
    theme: "mago",
    tags: ["PAES Ciencias", "Química", "6 submazos"],
    // Cada submazo agrupa las tarjetas cuyo id empieza con su id ("m1-b01" → m1).
    sections: [
      { id: "m1", title: "Sustancias puras y mezclas", description: "Clasificación de la materia: elementos, compuestos y mezclas.", icon: "mezcla" },
      { id: "m2", title: "Separación de mezclas", description: "Decantación, filtración, tamizado y destilación, y sus usos.", icon: "embudo" },
      { id: "m3", title: "Propiedades físicas", description: "Temperaturas de fusión y ebullición, masa, volumen y densidad.", icon: "termometro" },
      { id: "m4", title: "Modelos atómicos", description: "Teoría de Dalton y modelos de Thomson, Rutherford y Bohr.", icon: "atomo" },
      { id: "m5", title: "Partículas, Z y A", description: "Electrón, protón y neutrón. Número atómico y número másico.", icon: "tabla" },
      { id: "m6", title: "Átomos e iones según Bohr", description: "Cómo se representan átomos e iones con el modelo de Bohr.", icon: "bohr" },
    ],
    cards: [
      // Sustancias puras y mezclas
      { id: "m1-b01", q: "¿Qué es la **materia**?", a: "Todo lo que tiene **masa** y ocupa un lugar en el espacio. Se clasifica en **sustancias puras** y **mezclas**." },
      { id: "m1-b02", q: "¿Qué es una **sustancia pura**?", a: "Materia con **composición fija** y propiedades constantes. Puede ser un **elemento** o un **compuesto**." },
      { id: "m1-b03", q: "¿Qué es un **elemento**?", a: "Una sustancia pura formada por **un solo tipo de átomo**. Ejemplos: oxígeno ($\\mathrm{O}$) y hierro ($\\mathrm{Fe}$)." },
      { id: "m1-b04", q: "¿Qué es un **compuesto**?", a: "Una sustancia pura formada por **dos o más elementos unidos químicamente**. Ejemplos: agua ($\\mathrm{H_2O}$) y sal ($\\mathrm{NaCl}$)." },
      { id: "m1-b05", q: "¿Qué es una **mezcla**?", a: "La unión de dos o más sustancias que **no se unen químicamente**: cada una **conserva sus propiedades**." },
      { id: "m1-b06", q: "¿Qué es una **mezcla homogénea**?", a: "Una mezcla **uniforme**, en la que no se distinguen sus componentes. También se llama **disolución**. Ejemplo: agua con sal." },
      { id: "m1-b07", q: "¿Qué es una **mezcla heterogénea**?", a: "Una mezcla **no uniforme**, en la que sí se distinguen sus componentes. Ejemplo: agua con aceite." },
      { id: "m1-b08", q: "¿Cómo se separan los componentes de una **mezcla**?", a: "Con **métodos físicos**, como filtrar o destilar, sin cambiar las sustancias." },
      { id: "m1-b09", q: "¿Cómo se separa un **compuesto** en sus elementos?", a: "Solo con **métodos químicos**. Ejemplo: el agua se separa en hidrógeno y oxígeno por electrólisis." },
      { id: "m1-b10", q: "¿El **aire** es una sustancia pura o una mezcla?", a: "Una **mezcla homogénea** de gases, principalmente nitrógeno y oxígeno." },

      // Separación de mezclas
      { id: "m2-b01", q: "¿Qué es un **método de separación de mezclas**?", a: "Un procedimiento **físico** para separar las sustancias de una mezcla sin cambiarlas químicamente." },
      { id: "m2-b02", q: "¿Qué es la **filtración**?", a: "Separa un **sólido de un líquido** haciéndolos pasar por un filtro: el sólido queda retenido. Ejemplo: arena y agua." },
      { id: "m2-b03", q: "¿Qué es la **decantación**?", a: "Se deja **reposar** la mezcla para que lo más denso baje al fondo, y luego se vierte el líquido de arriba." },
      { id: "m2-b04", q: "¿Qué es la **destilación**?", a: "Separa líquidos por su **temperatura de ebullición**: uno se evapora primero y luego se condensa al enfriarse." },
      { id: "m2-b05", q: "¿Qué es el **tamizado**?", a: "Separa **sólidos de distinto tamaño** con un tamiz o malla. Ejemplo: cernir la harina." },
      { id: "m2-b06", q: "¿Qué es la **cristalización**?", a: "Obtiene un **sólido disuelto** formando **cristales**. Ejemplo: obtener sal de agua salada." },
      { id: "m2-b07", q: "¿Qué es la **centrifugación**?", a: "Hace **girar muy rápido** la mezcla para separar componentes de distinta densidad. Ejemplo: separar las células de la sangre del plasma." },
      { id: "m2-b08", q: "¿Qué método separa **agua y aceite**?", a: "La **decantación**, porque no se mezclan y tienen distinta densidad." },
      { id: "m2-b09", q: "¿Dónde se usa la **destilación**?", a: "Para obtener **agua destilada**, producir **pisco** y refinar el **petróleo**." },
      { id: "m2-b10", q: "¿Dónde se usa la **filtración**?", a: "Al preparar **café** con filtro, en los **purificadores de agua** y en los **filtros de aire**." },

      // Propiedades físicas
      { id: "m3-b01", q: "¿Qué es una **propiedad física**?", a: "Una característica que se mide **sin cambiar la composición** de la sustancia, como la masa o la densidad." },
      { id: "m3-b02", q: "¿Qué es la **masa**?", a: "La **cantidad de materia** de un cuerpo. Se mide con una balanza, en **gramos (g)** o **kilogramos (kg)**." },
      { id: "m3-b03", q: "¿Qué es el **volumen**?", a: "El **espacio que ocupa** un cuerpo. Se mide en **litros (L)**, **mililitros (mL)** o **cm³**." },
      { id: "m3-b04", q: "¿Qué es la **densidad**?", a: "La relación entre la masa y el volumen: $d = \\dfrac{m}{V}$. Se mide en **g/mL** o **g/cm³**." },
      { id: "m3-b05", q: "¿Por qué el **aceite flota** en el agua?", a: "Porque es **menos denso** que el agua. Lo menos denso flota y lo más denso se hunde." },
      { id: "m3-b06", q: "¿Qué es la **temperatura de fusión**?", a: "La temperatura a la que un **sólido pasa a líquido**. El hielo se funde a **0 °C**." },
      { id: "m3-b07", q: "¿Qué es la **temperatura de ebullición**?", a: "La temperatura a la que un **líquido pasa a gas**. El agua hierve a **100 °C** a nivel del mar." },
      { id: "m3-b08", q: "¿Qué pasa con la temperatura de una sustancia pura **mientras se funde o hierve**?", a: "Se mantiene **constante** hasta que termina el cambio de estado." },
      { id: "m3-b09", q: "¿Qué es un **cambio físico**?", a: "Cambia la **forma o el estado**, pero **no la composición** de la sustancia. Ejemplo: el hielo que se derrite." },
      { id: "m3-b10", q: "¿Qué es un **cambio químico**?", a: "Se forman **sustancias nuevas** con propiedades distintas. Ejemplos: la combustión, la oxidación y la fermentación." },

      // Modelos atómicos
      { id: "m4-b01", q: "¿Qué proponía **Demócrito**?", a: "Que todo está formado por partículas muy pequeñas e **indivisibles**, a las que llamó **átomos**." },
      { id: "m4-b02", q: "¿Qué propone la **teoría atómica de Dalton**?", a: "La materia está formada por **átomos indivisibles**, y los átomos de un mismo elemento son **idénticos**." },
      { id: "m4-b03", q: "¿Cómo imaginaba **Dalton** el átomo?", a: "Como una **esfera sólida y compacta**, sin partes en su interior." },
      { id: "m4-b04", q: "¿Qué descubrió **Thomson**?", a: "El **electrón**, en 1897." },
      { id: "m4-b05", q: "¿Cómo es el **modelo atómico de Thomson**?", a: "El **«budín de pasas»**: una esfera con **carga positiva** y los **electrones incrustados** en ella." },
      { id: "m4-b06", q: "¿Qué experimento hizo **Rutherford**?", a: "Lanzó partículas alfa contra una **lámina de oro**: casi todas la atravesaron y unas pocas rebotaron." },
      { id: "m4-b07", q: "¿Cómo es el **modelo atómico de Rutherford**?", a: "El **modelo planetario**: un **núcleo positivo** con casi toda la masa y los electrones girando a su alrededor. La mayor parte del átomo es **espacio vacío**." },
      { id: "m4-b08", q: "¿Cómo es el **modelo atómico de Bohr**?", a: "Los electrones giran en **órbitas circulares**, cada una con un **nivel de energía** definido." },
      { id: "m4-b09", q: "En el modelo de Bohr, ¿qué pasa cuando un electrón **recibe energía**?", a: "**Salta a un nivel más alto**. Al volver a su nivel, libera esa energía como **luz**." },
      { id: "m4-b10", q: "¿En qué **orden** aparecieron los modelos atómicos?", a: "**Dalton** (1808) → **Thomson** (1904) → **Rutherford** (1911) → **Bohr** (1913)." },

      // Partículas, Z y A
      { id: "m5-b01", q: "¿Cuáles son las **partículas subatómicas** y dónde están?", a: "**Protones** y **neutrones** en el **núcleo**, y **electrones** girando alrededor." },
      { id: "m5-b02", q: "¿Qué **carga** tiene cada partícula subatómica?", a: "Protón: **positiva** (+1). Electrón: **negativa** (−1). Neutrón: **sin carga** (0)." },
      { id: "m5-b03", q: "¿Qué partícula tiene **mucho menos masa**?", a: "El **electrón**: es unas **1836 veces más liviano** que el protón. Protón y neutrón tienen masas parecidas." },
      { id: "m5-b04", q: "¿Quién descubrió cada **partícula subatómica**?", a: "El electrón, **Thomson**. El protón, **Rutherford**. El neutrón, **Chadwick** (1932)." },
      { id: "m5-b05", q: "¿Qué es el **número atómico (Z)**?", a: "La cantidad de **protones** del núcleo. Identifica a cada elemento." },
      { id: "m5-b06", q: "¿Qué es el **número másico (A)**?", a: "La suma de **protones y neutrones** del núcleo: $A = p^+ + n$." },
      { id: "m5-b07", q: "¿Cómo se escriben **Z y A** junto al símbolo de un elemento?", a: "Así: $^{A}_{Z}\\mathrm{X}$. A va arriba y Z abajo, a la izquierda. Ejemplo: $^{12}_{6}\\mathrm{C}$." },
      { id: "m5-b08", q: "¿Qué son los **isótopos**?", a: "Átomos del **mismo elemento** (igual Z) con **distinto número de neutrones**, y por eso distinto A." },
      { id: "m5-b09", q: "¿Qué son los **isóbaros**?", a: "Átomos de **distintos elementos** con el **mismo número másico (A)**." },
      { id: "m5-b10", q: "¿Qué son los **isótonos**?", a: "Átomos con el **mismo número de neutrones** y distinto número de protones." },

      // Átomos e iones según Bohr
      { id: "m6-b01", q: "¿Cómo se dibuja un átomo según **Bohr**?", a: "Con el **núcleo** al centro y **círculos** a su alrededor, que son los niveles de energía con sus electrones." },
      { id: "m6-b02", q: "En un **átomo neutro**, ¿cuántos electrones hay?", a: "La **misma cantidad que protones** ($p^+ = e^-$). Ejemplo: el aluminio (Z = 13) tiene 13 electrones." },
      { id: "m6-b03", q: "¿Cuántos electrones caben en los **primeros niveles**?", a: "**2** en el primer nivel y **8** en el segundo." },
      { id: "m6-b04", q: "¿Cómo se reparten los 13 electrones del **aluminio**?", a: "**2, 8, 3**: 2 en el primer nivel, 8 en el segundo y 3 en el tercero." },
      { id: "m6-b05", q: "¿Qué son los **electrones de valencia**?", a: "Los electrones del **último nivel**. Indican el **grupo**: el aluminio tiene 3 y está en el grupo III-A." },
      { id: "m6-b06", q: "¿Qué indica el **número de niveles** con electrones?", a: "El **período** de la tabla periódica. El aluminio tiene 3 niveles y está en el período 3." },
      { id: "m6-b07", q: "¿Qué es un **ion**?", a: "Un átomo con **carga eléctrica** porque **ganó o perdió electrones**. Sus protones no cambian." },
      { id: "m6-b08", q: "¿Qué es un **catión**?", a: "Un ion **positivo**: el átomo **perdió electrones** y queda con más protones que electrones. Ejemplo: $\\mathrm{Na^+}$." },
      { id: "m6-b09", q: "¿Qué es un **anión**?", a: "Un ion **negativo**: el átomo **ganó electrones** y queda con más electrones que protones. Ejemplo: $\\mathrm{Cl^-}$." },
      { id: "m6-b10", q: "¿Cómo se dibuja un **ion** según Bohr?", a: "Con el **mismo núcleo** que el átomo, pero solo con los electrones que le quedan. Ejemplo: $\\mathrm{Na^+}$ queda con 2 y 8." },
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
