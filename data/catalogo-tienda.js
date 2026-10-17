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
    // Estequiometría (PAES): mazo pequeño, 200 puntos.
    id: "paes-quimica-estequiometria",
    title: "Estequiometría",
    subtitle: "PAES Ciencias · Química",
    description: "23 tarjetas: 8 conceptos clave y 15 ejercicios de resolución (moles, masas, balanceo y reactivo limitante).",
    color: "#2fb8a0",
    price: 200,
    status: "available",
    // Diseño Aurora química (ver js/app.js y css/neon.css). Se canjea con puntos (misiones.sql).
    theme: "aurora-quimica",
    nivel: "pequeno",
    tags: ["PAES Ciencias", "Química", "2 submazos"],
    sections: [
      { id: "e1", title: "Conceptos clave", description: "Mol, masa molar, coeficientes, conservación de la masa y reactivo limitante.", icon: "balanza" },
      { id: "e2", title: "Ejercicios de resolución", description: "Calcula masas y moles, balancea ecuaciones y encuentra el reactivo limitante.", icon: "vaso" }
    ],
    cards: [
      { id: "e1-c01", q: "¿Qué es un **mol**?", a: "La unidad del Sistema Internacional para la **cantidad de sustancia**. Un mol contiene $6{,}02\\cdot10^{23}$ entidades (átomos, moléculas o iones): el **número de Avogadro**." },
      { id: "e1-c02", q: "¿Qué es la **masa molar** y en qué unidad se expresa?", a: "La masa de **1 mol** de una sustancia, en **g/mol**. Se obtiene sumando las masas atómicas de la fórmula: $\\mathrm{H_2O}$ $=2\\cdot1+16=18$ g/mol." },
      { id: "e1-c03", q: "¿Cómo se relacionan la **masa**, los **moles** y la **masa molar**?", a: "$n=\\dfrac{m}{M}$: moles = masa (g) ÷ masa molar (g/mol). Ejemplo: 36 g de agua son $\\frac{36}{18}=2$ mol." },
      { id: "e1-c04", q: "¿Cómo pasas de **moles** a número de **partículas**?", a: "Multiplicas por el número de Avogadro: $N=n\\cdot6{,}02\\cdot10^{23}$. Ejemplo: 2 mol de $\\mathrm{CO_2}$ son $1{,}204\\cdot10^{24}$ moléculas." },
      { id: "e1-c05", q: "¿Qué indican los **coeficientes** de una ecuación balanceada?", a: "La proporción en **moles** (y en moléculas) en que reaccionan y se forman las sustancias. En $\\mathrm{2H_2+O_2\\rightarrow 2H_2O}$, 2 mol de $\\mathrm{H_2}$ reaccionan con 1 mol de $\\mathrm{O_2}$ y forman 2 mol de $\\mathrm{H_2O}$." },
      { id: "e1-c06", q: "¿Qué dice la **ley de conservación de la masa** y por qué se balancean las ecuaciones?", a: "La masa total de los reactivos es igual a la de los productos (Lavoisier): los átomos no se crean ni se destruyen. Por eso cada elemento debe tener el **mismo número de átomos** a ambos lados de la ecuación." },
      { id: "e1-c07", q: "¿Qué volumen ocupa **1 mol de gas** en condiciones normales (CNPT)?", a: "**22,4 L**, a 0 °C (273 K) y 1 atm, si el gas se comporta como gas ideal." },
      { id: "e1-c08", q: "¿Qué es el **reactivo limitante**?", a: "El reactivo que **se acaba primero**: determina cuánto producto se forma. El otro no reacciona por completo: es el **reactivo en exceso**." },

      { id: "e2-e01", q: "Calcula la masa molar del ácido sulfúrico, $\\mathrm{H_2SO_4}$. (H = 1, S = 32, O = 16)", a: "$2\\cdot1+32+4\\cdot16=$ **98 g/mol**." },
      { id: "e2-e02", q: "¿Cuántos moles hay en 88 g de $\\mathrm{CO_2}$? (C = 12, O = 16)", a: "$M=12+2\\cdot16=44$ g/mol, así que $n=\\frac{88}{44}=$ **2 mol**." },
      { id: "e2-e03", q: "¿Cuántos gramos son 0,5 mol de $\\mathrm{NaCl}$? (Na = 23, Cl = 35,5)", a: "$M=23+35{,}5=58{,}5$ g/mol, así que $m=0{,}5\\cdot58{,}5=$ **29,25 g**." },
      { id: "e2-e04", q: "¿Cuántas moléculas hay en 9 g de agua? (H = 1, O = 16)", a: "$n=\\frac{9}{18}=0{,}5$ mol. $N=0{,}5\\cdot6{,}02\\cdot10^{23}=$ **$3{,}01\\cdot10^{23}$ moléculas**." },
      { id: "e2-e05", q: "Balancea: $\\mathrm{H_2+O_2\\rightarrow H_2O}$", a: "$\\mathrm{2H_2+O_2\\rightarrow 2H_2O}$. Quedan 4 H y 2 O a cada lado." },
      { id: "e2-e06", q: "Balancea la combustión del metano: $\\mathrm{CH_4+O_2\\rightarrow CO_2+H_2O}$", a: "$\\mathrm{CH_4+2O_2\\rightarrow CO_2+2H_2O}$. C: 1 = 1; H: 4 = 4; O: 4 = 2 + 2." },
      { id: "e2-e07", q: "Balancea la oxidación del hierro: $\\mathrm{Fe+O_2\\rightarrow Fe_2O_3}$", a: "$\\mathrm{4Fe+3O_2\\rightarrow 2Fe_2O_3}$. Fe: 4 = 4; O: 6 = 6." },
      { id: "e2-e08", q: "Balancea la combustión del propano: $\\mathrm{C_3H_8+O_2\\rightarrow CO_2+H_2O}$", a: "$\\mathrm{C_3H_8+5O_2\\rightarrow 3CO_2+4H_2O}$. Primero el C (3 $\\mathrm{CO_2}$), luego el H (8 H → 4 $\\mathrm{H_2O}$) y al final el O: $3\\cdot2+4=10$ átomos → 5 $\\mathrm{O_2}$." },
      { id: "e2-e09", q: "En $\\mathrm{N_2+3H_2\\rightarrow 2NH_3}$, ¿cuántos moles de amoníaco se forman con 6 mol de $\\mathrm{H_2}$ (y $\\mathrm{N_2}$ suficiente)?", a: "Por cada 3 mol de $\\mathrm{H_2}$ se forman 2 de $\\mathrm{NH_3}$: $6\\cdot\\frac{2}{3}=$ **4 mol de $\\mathrm{NH_3}$**." },
      { id: "e2-e10", q: "En $\\mathrm{2H_2+O_2\\rightarrow 2H_2O}$, ¿cuántos gramos de agua se forman con 8 g de $\\mathrm{H_2}$ (y $\\mathrm{O_2}$ suficiente)?", a: "$n=\\frac{8}{2}=4$ mol de $\\mathrm{H_2}$ → 4 mol de $\\mathrm{H_2O}$ (relación 2:2). $m=4\\cdot18=$ **72 g**." },
      { id: "e2-e11", q: "¿Cuántos gramos de $\\mathrm{O_2}$ se necesitan para quemar 32 g de metano? $\\mathrm{CH_4+2O_2\\rightarrow CO_2+2H_2O}$", a: "$n=\\frac{32}{16}=2$ mol de $\\mathrm{CH_4}$ → necesitan $2\\cdot2=4$ mol de $\\mathrm{O_2}$. $m=4\\cdot32=$ **128 g**." },
      { id: "e2-e12", q: "Al calentar 200 g de $\\mathrm{CaCO_3}$ ocurre $\\mathrm{CaCO_3\\rightarrow CaO+CO_2}$. ¿Cuántos gramos de $\\mathrm{CaO}$ se obtienen? (Ca = 40, C = 12, O = 16)", a: "$M_{\\mathrm{CaCO_3}}=100$ g/mol → 2 mol → 2 mol de $\\mathrm{CaO}$. Con $M_{\\mathrm{CaO}}=56$ g/mol: $2\\cdot56=$ **112 g**." },
      { id: "e2-e13", q: "¿Qué volumen ocupan 44 g de $\\mathrm{CO_2}$ en CNPT?", a: "$n=\\frac{44}{44}=1$ mol, que en CNPT ocupa **22,4 L**." },
      { id: "e2-e14", q: "En $\\mathrm{2H_2+O_2\\rightarrow 2H_2O}$ se mezclan 4 mol de $\\mathrm{H_2}$ y 3 mol de $\\mathrm{O_2}$. ¿Cuál es el reactivo limitante y cuánta agua se forma?", a: "4 mol de $\\mathrm{H_2}$ necesitan solo 2 mol de $\\mathrm{O_2}$ (hay 3). El **limitante es el $\\mathrm{H_2}$**: se forman **4 mol de agua** y sobra 1 mol de $\\mathrm{O_2}$." },
      { id: "e2-e15", q: "Con 28 g de $\\mathrm{N_2}$ e hidrógeno en exceso se obtienen 27,2 g de $\\mathrm{NH_3}$: $\\mathrm{N_2+3H_2\\rightarrow 2NH_3}$. ¿Cuál es el porcentaje de rendimiento? (N = 14, H = 1)", a: "Teórico: 1 mol de $\\mathrm{N_2}$ → 2 mol de $\\mathrm{NH_3}$ $=2\\cdot17=34$ g. Rendimiento $=\\frac{27{,}2}{34}\\cdot100=$ **80 %**." }
    ]
  },
  {
    // Estequiometría nivel medicina (apunte Química MED): mazo grande, 500 puntos.
    id: "medicina-estequiometria",
    title: "Estequiometría nivel medicina",
    subtitle: "Química MED · Leyes ponderales",
    description: "25 tarjetas: 15 conceptos de leyes ponderales y 10 ejercicios de resolución de nivel medicina.",
    color: "#2f9fd0",
    price: 500,
    status: "available",
    // Diseño Aurora química (ver js/app.js y css/neon.css). Se canjea con puntos (misiones.sql).
    theme: "aurora-quimica",
    nivel: "grande",
    tags: ["Química MED", "Estequiometría", "2 submazos"],
    sections: [
      { id: "q1", title: "Conceptos y leyes ponderales", description: "Mol, fórmulas empírica y molecular, leyes ponderales, peso equivalente y rendimiento.", icon: "capsula" },
      { id: "q2", title: "Resolución nivel medicina", description: "Fórmulas, reactivo limitante, rendimiento y equivalentes, con contexto biomédico.", icon: "corazon" }
    ],
    cards: [
      { id: "q1-c01", q: "¿Qué es la **unidad de masa atómica** (u.m.a.)?", a: "La unidad para expresar la masa de un átomo: **1/12 de la masa de un átomo de carbono-12**. Por eso el $\\mathrm{^{12}C}$ pesa exactamente 12 u.m.a." },
      { id: "q1-c02", q: "¿Qué es un **mol** según el Sistema Internacional?", a: "La unidad de **cantidad de sustancia**: una cantidad fija de entidades fundamentales igual al número de Avogadro, $6{,}02\\cdot10^{23}$ átomos o moléculas." },
      { id: "q1-c03", q: "¿Qué diferencia hay entre **átomo-gramo** y **mol-gramo**?", a: "**Átomo-gramo**: la masa de 1 mol de **átomos**, en gramos (la masa atómica en g). **Mol-gramo**: la masa de 1 mol de **moléculas** o entidades, en gramos (la masa molar en g). Ej.: 1 at-g de C = 12 g; 1 mol-g de $\\mathrm{CO_2}$ = 44 g." },
      { id: "q1-c04", q: "¿Por qué 1 mol de gas ocupa **22,4 L** en condiciones estándar?", a: "Por la ecuación de los gases ideales: $V=\\frac{nRT}{P}=\\frac{1\\cdot0{,}082\\cdot273}{1}\\approx22{,}4$ L, con 1 mol, 273 K, 1 atm y $R=0{,}082\\ \\frac{\\mathrm{atm\\cdot L}}{\\mathrm{mol\\cdot K}}$. Solo vale en esas condiciones." },
      { id: "q1-c05", q: "¿Cómo se calcula la **composición porcentual** de un elemento en un compuesto?", a: "$\\%=\\dfrac{n\\cdot M_{\\text{elemento}}}{M_{\\text{compuesto}}}\\cdot100$, con $n$ el subíndice del elemento. En la glucosa ($\\mathrm{C_6H_{12}O_6}$): C 40 %, H 6,7 % y O 53,3 %." },
      { id: "q1-c06", q: "¿Qué diferencia hay entre **fórmula empírica** y **fórmula molecular**?", a: "La **molecular** da el número real de átomos ($\\mathrm{C_6H_{12}O_6}$). La **empírica** da la mínima relación entera entre ellos ($\\mathrm{CH_2O}$, relación 1:2:1)." },
      { id: "q1-c07", q: "¿Cómo se obtiene la **fórmula empírica** desde la composición porcentual?", a: "1) Divide el % de cada elemento por su masa molar (moles en 100 g). 2) Divide todos los resultados por el menor. 3) Si quedan decimales, amplifica hasta tener enteros: esos son los subíndices." },
      { id: "q1-c08", q: "¿Cómo se pasa de la **fórmula empírica** a la **molecular**?", a: "Divide la masa molar del compuesto por la de la fórmula empírica: el resultado es el factor que multiplica cada subíndice. Glucosa: $\\frac{180}{30}=6$, así que $\\mathrm{(CH_2O)_6=C_6H_{12}O_6}$." },
      { id: "q1-c09", q: "¿Qué dice la **ley de conservación de la masa** (Lavoisier)?", a: "La materia no se crea ni se destruye por métodos químicos ordinarios: la masa de los reactivos es igual a la de los productos. Ej.: $\\mathrm{MgCO_3}$ (84,3 g) → $\\mathrm{CO_2}$ (44,0 g) + $\\mathrm{MgO}$ (40,3 g)." },
      { id: "q1-c10", q: "¿Qué dice la **ley de las proporciones definidas** (Proust)?", a: "Distintas muestras de un mismo compuesto siempre tienen los mismos elementos en la **misma proporción en masa**. El $\\mathrm{CO_2}$ de cualquier fuente tiene 27,3 % de C y 72,7 % de O." },
      { id: "q1-c11", q: "¿Qué dice la **ley de las proporciones múltiples**?", a: "Si dos elementos forman más de un compuesto, las masas de uno que se combinan con una masa fija del otro están en relación de **números enteros sencillos**. Ej.: por cada 12 g de C, el CO tiene 16 g de O y el $\\mathrm{CO_2}$ 32 g: relación 1:2." },
      { id: "q1-c12", q: "¿Qué es el **peso equivalente** (ley de las proporciones recíprocas de Richter)?", a: "La masa de una sustancia que reacciona, desplaza o sustituye a **1,008 partes en masa de hidrógeno** o a **8 de oxígeno**. Ej.: 16 g de $\\mathrm{CH_4}$ reaccionan con 64 g de $\\mathrm{O_2}$, así que $PE=\\frac{16\\cdot8}{64}=2$." },
      { id: "q1-c13", q: "¿Cómo se calcula el **peso equivalente** con el **parámetro de carga** $\\theta$?", a: "$PE=\\dfrac{M}{\\theta}$. $\\theta$ es la **valencia** (elemento), el valor absoluto de la **carga** (ion), los **H⁺ que cede** (ácido), los **OH⁻ que se sustituyen** (hidróxido), **2 × n.º de O** (óxido) o la **carga total** del catión o del anión (sal)." },
      { id: "q1-c14", q: "¿Qué es un **equivalente-gramo** y qué dice la **ley de los equivalentes**?", a: "Un eq-g es el peso equivalente expresado en gramos: $\\#\\text{eq-g}=\\frac{m}{PE}$. En una reacción, todas las sustancias se consumen y se forman en el **mismo número de equivalentes-gramo**." },
      { id: "q1-c15", q: "¿Qué son el **rendimiento teórico**, el **real** y el **porcentaje de rendimiento**?", a: "Teórico: el producto que se formaría si reaccionara todo el **reactivo limitante**. Real: lo que se obtiene en la práctica. $\\%=\\frac{\\text{real}}{\\text{teórico}}\\cdot100$. Suele ser menor que 100 % porque muchas reacciones son reversibles." },

      { id: "q2-e01", q: "Un hidrocarburo tiene 92,3 % de C y 7,7 % de H, y su masa molar es 78 g/mol. ¿Cuáles son su fórmula empírica y su fórmula molecular? (C = 12, H = 1)", a: "C: $\\frac{92{,}3}{12}=7{,}69$; H: $\\frac{7{,}7}{1}=7{,}7$ → relación 1:1 → empírica **CH** (13 g/mol). Factor $\\frac{78}{13}=6$ → molecular **$\\mathrm{C_6H_6}$** (benceno)." },
      { id: "q2-e02", q: "¿Qué porcentaje de nitrógeno tiene la urea, $\\mathrm{CO(NH_2)_2}$, la sustancia con que eliminamos nitrógeno en la orina? (C = 12, O = 16, N = 14, H = 1)", a: "$M=12+16+2\\cdot(14+2)=60$ g/mol. $\\%\\mathrm{N}=\\frac{2\\cdot14}{60}\\cdot100\\approx$ **46,7 %**." },
      { id: "q2-e03", q: "En la respiración celular, $\\mathrm{C_6H_{12}O_6+6O_2\\rightarrow 6CO_2+6H_2O}$. ¿Qué volumen de $\\mathrm{CO_2}$ en CNPT se produce al oxidar 45 g de glucosa (180 g/mol)?", a: "$n=\\frac{45}{180}=0{,}25$ mol → $6\\cdot0{,}25=1{,}5$ mol de $\\mathrm{CO_2}$. $V=1{,}5\\cdot22{,}4=$ **33,6 L**." },
      { id: "q2-e04", q: "Reaccionan 54 g de Al con 142 g de $\\mathrm{Cl_2}$: $\\mathrm{2Al+3Cl_2\\rightarrow 2AlCl_3}$. ¿Cuál es el limitante, cuánto $\\mathrm{AlCl_3}$ se forma y cuánto sobra? (Al = 27, Cl = 35,5)", a: "Al: $\\frac{54}{27}=2$ mol; $\\mathrm{Cl_2}$: $\\frac{142}{71}=2$ mol. 2 mol de Al necesitan 3 de $\\mathrm{Cl_2}$: el **limitante es el $\\mathrm{Cl_2}$**. Se forman $2\\cdot\\frac{2}{3}=1{,}33$ mol de $\\mathrm{AlCl_3}$ (133,5 g/mol) = **178 g**. Reaccionan 36 g de Al: **sobran 18 g**. Comprueba: 54 + 142 = 178 + 18." },
      { id: "q2-e05", q: "La aspirina ($\\mathrm{C_9H_8O_4}$, 180 g/mol) se obtiene del ácido salicílico ($\\mathrm{C_7H_6O_3}$, 138 g/mol) en relación 1:1. Con 2,76 g de ácido salicílico se obtienen 2,70 g de aspirina. ¿Cuál es el rendimiento?", a: "$n=\\frac{2{,}76}{138}=0{,}02$ mol → teórico $0{,}02\\cdot180=3{,}6$ g. Rendimiento $=\\frac{2{,}70}{3{,}6}\\cdot100=$ **75 %**." },
      { id: "q2-e06", q: "Un antiácido con $\\mathrm{Mg(OH)_2}$ neutraliza el ácido del estómago: $\\mathrm{Mg(OH)_2+2HCl\\rightarrow MgCl_2+2H_2O}$. ¿Qué masa de $\\mathrm{Mg(OH)_2}$ neutraliza 0,73 g de HCl? (Mg = 24, O = 16, H = 1, Cl = 35,5)", a: "$n_{\\mathrm{HCl}}=\\frac{0{,}73}{36{,}5}=0{,}02$ mol → $0{,}01$ mol de $\\mathrm{Mg(OH)_2}$ (relación 1:2). Con 58 g/mol: **0,58 g**." },
      { id: "q2-e07", q: "Calcula el peso equivalente del $\\mathrm{H_3PO_4}$ si en la reacción forma $\\mathrm{HPO_4^{2-}}$. (H = 1, P = 31, O = 16)", a: "$M=3+31+64=98$ g/mol. Cede 2 H⁺, así que $\\theta=2$ y $PE=\\frac{98}{2}=$ **49 g/eq**." },
      { id: "q2-e08", q: "Calcula el peso equivalente del fosfato de calcio, $\\mathrm{Ca_3(PO_4)_2}$, el mineral de los huesos. (Ca = 40, P = 31, O = 16)", a: "$M=3\\cdot40+2\\cdot(31+64)=310$ g/mol. Carga total del catión: $3\\cdot(+2)=6$, así que $\\theta=6$ y $PE=\\frac{310}{6}\\approx$ **51,7 g/eq**." },
      { id: "q2-e09", q: "¿Qué masa de NaOH neutraliza completamente 4,9 g de $\\mathrm{H_2SO_4}$? Usa la ley de los equivalentes. (H = 1, S = 32, O = 16, Na = 23)", a: "$PE_{\\mathrm{H_2SO_4}}=\\frac{98}{2}=49$ → $\\frac{4{,}9}{49}=0{,}1$ eq-g. Reacciona el mismo número de eq-g de NaOH ($PE=\\frac{40}{1}=40$): $0{,}1\\cdot40=$ **4 g**." },
      { id: "q2-e10", q: "Al quemar 2,4 g de un metal divalente se obtienen 4,0 g de su óxido. ¿Cuál es su peso equivalente y de qué metal se trata?", a: "Oxígeno combinado: $4{,}0-2{,}4=1{,}6$ g. $PE=\\frac{2{,}4\\cdot8}{1{,}6}=$ **12 g/eq**. Si es divalente, $M=12\\cdot2=24$ g/mol: es **magnesio**." }
    ]
  },
  {
    // Primera Guerra Mundial (tema Gran Guerra): 12 cosas que debes saber y 15 preguntas.
    id: "historia-primera-guerra-mundial",
    title: "Primera Guerra Mundial",
    subtitle: "Historia · Siglo XX",
    description: "27 tarjetas: 12 cosas que debes saber y 15 preguntas de cuestionario (causas, trincheras, 1917 y el Tratado de Versalles).",
    color: "#d9a441",
    price: 200,
    status: "available",
    // Diseño Gran Guerra (ver js/app.js y css/gran-guerra.css). Se canjea con puntos (misiones.sql).
    theme: "gran-guerra",
    nivel: "pequeno",
    tags: ["Historia", "Siglo XX", "2 submazos"],
    sections: [
      { id: "gm1", title: "Lo que debes saber", description: "Causas, bandos, Sarajevo, trincheras, armas nuevas, 1917 y el fin de la guerra.", icon: "casco" },
      { id: "gm2", title: "Cuestionario", description: "Preguntas tipo prueba: verdadero o falso, orden cronológico, batallas, Versalles y Chile en la guerra.", icon: "medalla" }
    ],
    cards: [
      { id: "gm1-c01", q: "¿Qué fue la **Primera Guerra Mundial** y cuándo ocurrió?", a: "Una enorme guerra entre las grandes potencias, también llamada **la Gran Guerra**. Duró de **1914 a 1918**. Se peleó sobre todo en Europa, pero fue **mundial** porque participaron países y colonias de los cinco continentes. Murieron cerca de **10 millones de soldados**." },
      { id: "gm1-c02", q: "¿Cuáles fueron las **4 causas de fondo**? Pista: recuerda **MANÍ**.", a: "- **M**ilitarismo: competían por tener más armas y soldados.\n- **A**lianzas: si atacaban a uno, sus aliados entraban.\n- **N**acionalismo: orgullo extremo por la propia nación.\n- **I**mperialismo: peleas por colonias en África y Asia." },
      { id: "gm1-c03", q: "¿Qué fue la **Paz Armada**?", a: "El período de **1871 a 1914**: las potencias no peleaban entre sí, pero desconfiaban y se preparaban para la guerra. Extendieron el **servicio militar obligatorio** y compitieron en una **carrera armamentista**. Era una paz con el dedo en el gatillo." },
      { id: "gm1-c04", q: "¿Qué **dos bandos** se enfrentaron?", a: "- **Potencias Centrales**: Alemania, Austria-Hungría, el Imperio otomano y Bulgaria.\n- **Aliados**: Francia, Reino Unido, Rusia, Serbia y Bélgica; luego **Italia** (1915) y **EE.UU.** (1917).\nItalia era aliada de Alemania, pero al empezar la guerra se declaró neutral." },
      { id: "gm1-c05", q: "¿Por qué a los **Balcanes** les decían el **«polvorín de Europa»**?", a: "Porque estaban a punto de explotar, como un barril de pólvora. Muchos eslavos bajo Austria-Hungría querían unirse a **Serbia**, que ya era independiente. **Rusia** apoyaba a Serbia, pero **Austria-Hungría** quería dominar la zona: en 1908 se quedó con **Bosnia**." },
      { id: "gm1-c06", q: "¿Cuál fue el **detonante** de la guerra?", a: "El **atentado de Sarajevo** (28 de junio de 1914): el nacionalista **Gavrilo Princip** mató al archiduque **Francisco Fernando**, heredero de Austria-Hungría. Austria culpó a Serbia y le declaró la guerra. Por las alianzas, los países entraron uno tras otro: un **efecto dominó**." },
      { id: "gm1-c07", q: "¿Qué fue el **Plan Schlieffen** y por qué fracasó?", a: "El plan alemán para ganar rápido: derrotar a **Francia** pasando por **Bélgica** (un país neutral) y después atacar a **Rusia**. Fracasó en la **batalla del Marne** (septiembre de 1914), donde franceses y británicos frenaron a los alemanes cerca de París." },
      { id: "gm1-c08", q: "¿Cómo era la **guerra de trincheras**?", a: "Desde fines de 1914 se cavaron trincheras **del mar del Norte a Suiza**. Los soldados vivían entre barro, ratas y frío, y atacar significaba cruzar la **tierra de nadie** bajo las ametralladoras. Casi nadie avanzaba: era una **guerra de desgaste**." },
      { id: "gm1-c09", q: "¿Qué **armas nuevas** aparecieron?", a: "- **Ametralladoras** y **artillería** pesada.\n- **Gas venenoso** (desde 1915).\n- **Tanques** (desde 1916).\n- **Aviones** y **zepelines**, para espiar y bombardear.\n- **Submarinos** alemanes que hundían barcos." },
      { id: "gm1-c10", q: "¿Por qué se dice que fue una **guerra total**?", a: "Porque **toda la sociedad** trabajó para ganar, no solo los soldados: las fábricas hacían armas, se **racionó** la comida y se usó **propaganda** para reclutar. Con los hombres en el frente, las **mujeres** ocuparon sus trabajos." },
      { id: "gm1-c11", q: "¿Por qué **1917** fue un año clave?", a: "- **Entró EE.UU.**, por los submarinos alemanes y el **telegrama Zimmermann**.\n- **Salió Rusia**, tras la **Revolución rusa**: Lenin pactó un armisticio con Alemania (la paz llegó en 1918).\nCon los soldados y el dinero de EE.UU., los Aliados tomaron ventaja." },
      { id: "gm1-c12", q: "¿Cómo terminó la guerra y qué cambió?", a: "El **armisticio** del **11 de noviembre de 1918** detuvo los combates. Luego:\n- El **Tratado de Versalles** (1919) castigó a Alemania.\n- Cayeron **4 imperios** y nacieron países nuevos.\n- Nació la **Sociedad de las Naciones**." },

      { id: "gm2-q01", q: "**Verdadero o falso:** la Primera Guerra Mundial comenzó cuando Alemania invadió Polonia.", a: "**Falso.** Eso pasó en 1939 y dio inicio a la **Segunda** Guerra Mundial. La Primera comenzó en **1914**, después del atentado de Sarajevo, cuando Austria-Hungría le declaró la guerra a Serbia." },
      { id: "gm2-q02", q: "¿Por qué la invasión alemana de **Bélgica** hizo entrar al **Reino Unido** en la guerra?", a: "Porque Bélgica era **neutral** y el Reino Unido se había comprometido a defenderla. Además, no quería a Alemania dominando la costa frente a Inglaterra. Le declaró la guerra el **4 de agosto de 1914**." },
      { id: "gm2-q03", q: "Ordena del más antiguo al más reciente: **Tratado de Versalles**, **atentado de Sarajevo**, **entrada de EE.UU.** y **batalla del Marne**.", a: "1. Atentado de Sarajevo (junio de **1914**)\n2. Batalla del Marne (septiembre de **1914**)\n3. Entrada de EE.UU. (abril de **1917**)\n4. Tratado de Versalles (junio de **1919**)" },
      { id: "gm2-q04", q: "¿Qué era la **«tierra de nadie»**?", a: "La franja de terreno **entre las trincheras** de los dos bandos, llena de alambre de púas, cráteres y barro. Quien la cruzaba quedaba a la vista de las ametralladoras enemigas: por eso cada ataque costaba miles de vidas." },
      { id: "gm2-q05", q: "¿Qué batalla de 1916 se volvió el símbolo de la resistencia francesa?", a: "**Verdún** (de febrero a diciembre de 1916). Alemania quiso agotar al ejército francés, pero Francia resistió casi **10 meses** con el lema **«¡No pasarán!»**. Murieron cientos de miles de soldados y el frente casi no se movió." },
      { id: "gm2-q06", q: "¿En qué batalla se usaron **tanques** por primera vez y quién los usó?", a: "En la **batalla del Somme**, en **septiembre de 1916**. Los usaron los **británicos**: eran lentos y se echaban a perder seguido, pero podían aplastar el alambre de púas y cruzar trincheras." },
      { id: "gm2-q07", q: "¿Qué proponía el **telegrama Zimmermann**?", a: "Un mensaje secreto de Alemania a **México** (1917): si EE.UU. entraba en la guerra y México lo atacaba, lo ayudaría a recuperar **Texas, Nuevo México y Arizona**. Los británicos lo descifraron y se lo pasaron a EE.UU., que lo publicó. Fue una razón para que **EE.UU. entrara en la guerra**." },
      { id: "gm2-q08", q: "¿Por qué **Rusia** salió de la guerra antes del final?", a: "Por las derrotas y el hambre estalló la **Revolución rusa** (1917): cayó el zar **Nicolás II** y los bolcheviques de **Lenin** tomaron el poder. Firmaron la paz con Alemania en **Brest-Litovsk** (1918), aunque Rusia perdió grandes territorios." },
      { id: "gm2-q09", q: "¿Qué pasó **«a la hora 11 del día 11 del mes 11»** de 1918?", a: "Empezó el **armisticio**: los combates se detuvieron. Alemania lo firmó en un vagón de tren en **Compiègne** (Francia). Sus aliados ya se habían rendido y el káiser **Guillermo II** había dejado el trono dos días antes." },
      { id: "gm2-q10", q: "Nombra **tres castigos** del Tratado de Versalles a Alemania.", a: "- Aceptar la **culpa** de la guerra.\n- Pagar **reparaciones** a los vencedores.\n- Perder **Alsacia y Lorena** y **todas sus colonias**.\n- Tener un ejército de solo **100.000 soldados**, sin aviones, tanques ni submarinos." },
      { id: "gm2-q11", q: "¿Qué **cuatro imperios** desaparecieron con la guerra?", a: "El **alemán**, el **austrohúngaro**, el **ruso** y el **otomano** (turco). En su lugar aparecieron o volvieron a existir países como **Polonia**, **Checoslovaquia**, **Yugoslavia**, **Austria**, **Hungría** y **Finlandia**." },
      { id: "gm2-q12", q: "¿Qué fue la **Sociedad de las Naciones** y por qué fracasó?", a: "Una organización creada en **1919** por idea del presidente de EE.UU. **Woodrow Wilson**, para resolver los conflictos conversando. Fracasó porque **EE.UU. nunca entró** y **no tenía ejército**. No evitó la Segunda Guerra Mundial y la reemplazó la **ONU**." },
      { id: "gm2-q13", q: "¿Cómo cambió la guerra la vida de las **mujeres**?", a: "Con los hombres en el frente, trabajaron en **fábricas de municiones**, transporte, campos y hospitales. Eso impulsó el **voto femenino**: Alemania y el Reino Unido lo aprobaron en **1918** (en el Reino Unido, primero desde los 30 años)." },
      { id: "gm2-q14", q: "¿Qué país salió de la guerra como **nueva gran potencia** y por qué?", a: "**Estados Unidos.** No se peleó en su territorio, así que su industria quedó intacta. Además, vendió armas y comida y **prestó dinero** a los Aliados: Europa terminó destruida y endeudada con EE.UU." },
      { id: "gm2-q15", q: "Chile fue **neutral**, pero la guerra llegó a sus costas. ¿Qué pasó?", a: "- **Batalla de Coronel** (1914): barcos alemanes vencieron a los británicos frente a Coronel.\n- El crucero alemán **Dresden** se hundió en la isla **Robinson Crusoe** (1915).\n- El **salitre** se vendió mucho para explosivos; después, el sintético lo llevó a la crisis." }
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
