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
    description: "54 tarjetas de conocimiento sobre estructura atómica, en 6 submazos que puedes jugar por separado.",
    color: "#7b5cff",
    price: 0,
    status: "available",
    // Diseño especial en Mis mazos (ver js/app.js y css/neon.css).
    theme: "mago",
    tags: ["PAES Ciencias", "Química", "6 submazos"],
    // Cada submazo agrupa las tarjetas cuyo id empieza con su id ("m1-01" → m1).
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
      { id: "m1-01", q: "¿Qué es la **materia**?", a: "Todo lo que tiene **masa** y ocupa un lugar en el espacio (**volumen**). Se clasifica en **sustancias puras** y **mezclas**." },
      { id: "m1-02", q: "¿Qué es una **sustancia pura**?", a: "Materia de **composición fija** y propiedades constantes, como su temperatura de fusión y de ebullición. No se separa por métodos físicos. Puede ser un **elemento** o un **compuesto**." },
      { id: "m1-03", q: "¿Qué es un **elemento**?", a: "Una sustancia pura formada por átomos de un solo tipo, todos con el mismo número atómico. No se puede descomponer en sustancias más simples por métodos químicos. Ejemplos: hierro ($\\mathrm{Fe}$), oxígeno ($\\mathrm{O_2}$) y oro ($\\mathrm{Au}$)." },
      { id: "m1-04", q: "¿Qué es un **compuesto**?", a: "Una sustancia pura formada por dos o más elementos **unidos químicamente** en una proporción fija. Solo se separa en sus elementos por métodos químicos. Ejemplos: agua ($\\mathrm{H_2O}$), sal común ($\\mathrm{NaCl}$) y dióxido de carbono ($\\mathrm{CO_2}$)." },
      { id: "m1-05", q: "¿Qué es una **mezcla**?", a: "La unión **física** de dos o más sustancias en proporción **variable**, en la que cada una conserva sus propiedades. Sus componentes se separan por métodos físicos." },
      { id: "m1-06", q: "¿Qué es una **mezcla homogénea**?", a: "Una mezcla de composición uniforme: se ve una sola fase y no se distinguen sus componentes. También se llama **disolución**. Ejemplos: agua con sal disuelta, el aire y el bronce." },
      { id: "m1-07", q: "¿Qué es una **mezcla heterogénea**?", a: "Una mezcla de composición no uniforme: se distinguen sus componentes o fases, a simple vista o con microscopio. Ejemplos: agua con aceite, arena con piedras y una ensalada." },
      { id: "m1-08", q: "¿En qué se diferencia un **compuesto** de una **mezcla**?", a: "En el compuesto, los elementos están unidos químicamente en proporción fija y forman una sustancia con propiedades nuevas. En la mezcla, los componentes solo están juntos, en proporción variable, y conservan sus propiedades." },

      // Separación de mezclas
      { id: "m2-01", q: "¿En qué se basan los **métodos de separación de mezclas**?", a: "En las diferencias de propiedades **físicas** entre los componentes: tamaño de partícula, densidad, temperatura de ebullición o solubilidad. Separan sin cambiar la identidad química de las sustancias." },
      { id: "m2-02", q: "¿Qué es la **decantación**?", a: "Separa un sólido insoluble de un líquido, o dos líquidos que no se mezclan, por **diferencia de densidad**: se deja reposar y el componente más denso se va al fondo. Para dos líquidos se usa un **embudo de decantación**." },
      { id: "m2-03", q: "¿Dónde se usa la **decantación**?", a: "Para separar agua y aceite, para que el barro se asiente en los estanques de las plantas de agua potable y para separar los sedimentos del vino." },
      { id: "m2-04", q: "¿Qué es la **filtración**?", a: "Separa un sólido **insoluble** de un líquido (o de un gas) haciéndolo pasar por un material poroso, como el papel filtro: el líquido atraviesa y el sólido queda retenido. Ejemplo: arena y agua." },
      { id: "m2-05", q: "¿Dónde se usa la **filtración**?", a: "Al preparar café con filtro, en los purificadores y plantas de agua potable, en las mascarillas y filtros de aire, y en los filtros de aceite y de aire de los autos." },
      { id: "m2-06", q: "¿Qué es el **tamizado**?", a: "Separa sólidos con **distinto tamaño de partícula** usando un tamiz o cedazo (una malla): las partículas pequeñas pasan y las grandes quedan arriba. Ejemplo: arena y piedras." },
      { id: "m2-07", q: "¿Dónde se usa el **tamizado**?", a: "En la construcción, para obtener arena fina; en la cocina, al cernir la harina; y en la minería y la agricultura, para clasificar minerales o granos según su tamaño." },
      { id: "m2-08", q: "¿Qué es la **destilación**?", a: "Separa líquidos que se mezclan entre sí, o un sólido disuelto en un líquido, por **diferencia de temperatura de ebullición**: se calienta, el componente más volátil se evapora y luego se **condensa** al enfriarse. Ejemplo: agua y alcohol." },
      { id: "m2-09", q: "¿Dónde se usa la **destilación**?", a: "Para producir pisco y otros destilados, obtener agua destilada, refinar el petróleo (destilación fraccionada) y desalinizar agua de mar." },

      // Propiedades físicas
      { id: "m3-01", q: "¿Qué es una **propiedad física**?", a: "Una característica que se puede observar o medir **sin cambiar la composición** de la sustancia. Ejemplos: masa, volumen, densidad, temperatura de fusión y de ebullición, y color." },
      { id: "m3-02", q: "¿Qué diferencia hay entre propiedades **extensivas** e **intensivas**?", a: "Las **extensivas** dependen de la cantidad de materia, como la masa y el volumen. Las **intensivas** no dependen de ella, como la densidad y las temperaturas de fusión y de ebullición, y por eso sirven para **identificar** una sustancia." },
      { id: "m3-03", q: "¿Qué es la **masa** y en qué unidades se mide?", a: "La cantidad de materia de un cuerpo. Se mide con una balanza; su unidad en el Sistema Internacional es el **kilogramo (kg)**, y también se usa el gramo (g)." },
      { id: "m3-04", q: "¿Qué es el **volumen** y en qué unidades se mide?", a: "El espacio que ocupa un cuerpo. Su unidad en el Sistema Internacional es el **metro cúbico** ($\\mathrm{m^3}$); también se usan el litro (L), el mililitro (mL) y el $\\mathrm{cm^3}$, con $1\\ \\mathrm{mL} = 1\\ \\mathrm{cm^3}$." },
      { id: "m3-05", q: "¿Qué es la **densidad**?", a: "La relación entre la masa y el volumen de un cuerpo: $d = \\dfrac{m}{V}$. Se expresa en g/mL o g/cm³ (en el Sistema Internacional, kg/m³). El agua líquida tiene una densidad cercana a $1\\ \\mathrm{g/mL}$." },
      { id: "m3-06", q: "¿Qué relación hay entre la densidad y **flotar**?", a: "Un cuerpo flota en un líquido si su densidad es **menor** que la del líquido, y se hunde si es mayor. Por eso el hielo, con una densidad de unos $0{,}92\\ \\mathrm{g/cm^3}$, flota en el agua." },
      { id: "m3-07", q: "¿Qué es la **temperatura de fusión**?", a: "La temperatura a la que una sustancia pasa de **sólido a líquido**, a una presión dada. El agua se funde a $0\\ ^\\circ\\mathrm{C}$ a una atmósfera de presión." },
      { id: "m3-08", q: "¿Qué es la **temperatura de ebullición**?", a: "La temperatura a la que un líquido pasa a **gas** en toda su masa, formando burbujas. Depende de la presión: el agua hierve a $100\\ ^\\circ\\mathrm{C}$ a nivel del mar, y a menos en la montaña, donde la presión es menor." },
      { id: "m3-09", q: "¿Qué pasa con la temperatura de una sustancia pura mientras **cambia de estado**?", a: "Se mantiene **constante** hasta que termina el cambio, porque la energía se usa en el cambio de estado. Esto permite distinguirla de una mezcla, que cambia de estado en un rango de temperaturas." },
      { id: "m3-10", q: "¿Qué metal es **líquido** a temperatura ambiente?", a: "El **mercurio** ($\\mathrm{Hg}$): se funde a unos $-39\\ ^\\circ\\mathrm{C}$. La mayoría de los metales tienen temperaturas de fusión altas; el hierro, por ejemplo, se funde a unos $1538\\ ^\\circ\\mathrm{C}$." },

      // Modelos atómicos
      { id: "m4-01", q: "¿Qué propone la **teoría atómica de Dalton** (1808)?", a: "La materia está formada por **átomos indivisibles**. Los átomos de un mismo elemento son iguales entre sí y distintos de los de otros elementos. Los compuestos se forman al unirse átomos en proporciones de números enteros sencillos, y en las reacciones químicas los átomos solo se reordenan: no se crean ni se destruyen." },
      { id: "m4-02", q: "¿Qué ideas de Dalton resultaron **incorrectas**?", a: "Que el átomo es indivisible, porque está formado por partículas subatómicas, y que todos los átomos de un elemento tienen la misma masa, porque existen los **isótopos**." },
      { id: "m4-03", q: "¿Quién descubrió el **electrón** y cómo?", a: "**J. J. Thomson**, en 1897, al estudiar los **rayos catódicos**: demostró que estaban formados por partículas con carga negativa, mucho más livianas que un átomo." },
      { id: "m4-04", q: "¿Cómo es el **modelo atómico de Thomson** (1904)?", a: "El átomo es una **esfera de carga positiva** con los electrones incrustados, como las pasas en un budín (el \"budín de pasas\"). En conjunto, el átomo es neutro." },
      { id: "m4-05", q: "¿En qué consistió el **experimento de Rutherford**?", a: "Se bombardeó una lámina muy delgada de oro con partículas alfa, que tienen carga positiva. La mayoría la atravesó sin desviarse, algunas se desviaron y muy pocas rebotaron. Lo realizaron Geiger y Marsden, bajo la dirección de Rutherford, entre 1909 y 1911." },
      { id: "m4-06", q: "¿Cómo es el **modelo atómico de Rutherford** (1911)?", a: "Un **núcleo** muy pequeño y denso, con carga positiva, donde está casi toda la masa del átomo, y electrones que giran a su alrededor. La mayor parte del átomo es **espacio vacío**; por eso se le llama modelo planetario." },
      { id: "m4-07", q: "¿Qué problema tenía el **modelo de Rutherford**?", a: "Según la física clásica, un electrón que gira emite energía y terminaría cayendo al núcleo. El modelo no explicaba por qué el átomo es estable ni los espectros de líneas de los elementos." },
      { id: "m4-08", q: "¿Cómo es el **modelo atómico de Bohr** (1913)?", a: "Los electrones giran en **órbitas circulares** de energía definida, los niveles $n = 1, 2, 3\\ldots$, sin emitir energía. Al **saltar** de un nivel a otro absorben o emiten una cantidad fija de energía en forma de luz. Así explicó el espectro del hidrógeno." },
      { id: "m4-09", q: "¿En qué orden aparecieron estos modelos atómicos?", a: "**Dalton** (1808) → **Thomson** (1904) → **Rutherford** (1911) → **Bohr** (1913). Cada uno corrigió al anterior a partir de nuevos experimentos." },

      // Partículas, Z y A
      { id: "m5-01", q: "¿Qué es el **protón**?", a: "Una partícula subatómica con **carga positiva** (+1) que está en el **núcleo**. Su masa es de aproximadamente 1 u, unos $1{,}67\\cdot10^{-27}\\ \\mathrm{kg}$." },
      { id: "m5-02", q: "¿Qué es el **neutrón**?", a: "Una partícula subatómica **sin carga** eléctrica que está en el **núcleo**, con una masa muy parecida a la del protón. Lo descubrió **James Chadwick** en 1932." },
      { id: "m5-03", q: "¿Qué es el **electrón**?", a: "Una partícula subatómica con **carga negativa** (−1) que se mueve alrededor del núcleo, en los niveles de energía. Su masa es unas **1836 veces menor** que la del protón." },
      { id: "m5-04", q: "¿Dónde se concentra la **masa** del átomo?", a: "En el **núcleo**, formado por protones y neutrones, que en conjunto se llaman **nucleones**. Los electrones aportan una masa casi despreciable." },
      { id: "m5-05", q: "¿Qué es el **número atómico (Z)**?", a: "La cantidad de **protones** del núcleo. Identifica al elemento: todos los átomos de carbono tienen $Z = 6$. En un átomo neutro, Z también es igual al número de electrones." },
      { id: "m5-06", q: "¿Qué es el **número másico (A)**?", a: "La suma de **protones y neutrones** del núcleo: $A = Z + n$, donde $n$ es el número de neutrones." },
      { id: "m5-07", q: "¿Cómo se representa un átomo con su Z y su A?", a: "Con la notación $^{A}_{Z}\\mathrm{X}$: el número másico arriba a la izquierda, el número atómico abajo a la izquierda y el símbolo del elemento. Ejemplo: $^{23}_{11}\\mathrm{Na}$." },
      { id: "m5-08", q: "¿Cómo se relaciona el número de **neutrones** con Z y A?", a: "El número de neutrones es la diferencia entre el número másico y el número atómico: $n = A - Z$." },
      { id: "m5-09", q: "¿Qué son los **isótopos**?", a: "Átomos de un mismo elemento (igual **Z**) con distinto número de **neutrones** y, por lo tanto, distinto **A**. Ejemplo: $^{12}_{6}\\mathrm{C}$ y $^{14}_{6}\\mathrm{C}$." },

      // Átomos e iones según Bohr
      { id: "m6-01", q: "¿Qué muestra el **modelo de Bohr** de un átomo?", a: "El **núcleo** al centro, con su número de protones ($p^+$) y neutrones ($n$), y **círculos concéntricos** que representan los niveles de energía, con los electrones dibujados en cada uno." },
      { id: "m6-02", q: "¿Cuántos electrones caben como máximo en cada **nivel**?", a: "$2n^2$: 2 en el nivel 1, 8 en el nivel 2, 18 en el nivel 3 y 32 en el nivel 4. En los modelos de Bohr de los primeros 20 elementos se usa el orden **2, 8, 8, 2**." },
      { id: "m6-03", q: "¿En qué orden se ubican los electrones en los niveles?", a: "Desde el nivel **más cercano al núcleo**, el de menor energía, hacia afuera: se completa un nivel antes de empezar el siguiente." },
      { id: "m6-04", q: "¿Qué son los **electrones de valencia**?", a: "Los electrones del **último nivel** ocupado. Determinan cómo se combina el átomo con otros: el sodio tiene 1 y el cloro tiene 7." },
      { id: "m6-05", q: "¿Cómo es el modelo de Bohr del **sodio** ($^{23}_{11}\\mathrm{Na}$)?", a: "Un núcleo con **11 protones y 12 neutrones**, y 11 electrones repartidos así: **2** en el nivel 1, **8** en el nivel 2 y **1** en el nivel 3 (2, 8, 1)." },
      { id: "m6-06", q: "¿Qué es un **ion**?", a: "Un átomo con **carga eléctrica** porque ganó o perdió electrones. Su número de protones (Z) no cambia: solo cambia el número de electrones." },
      { id: "m6-07", q: "¿Qué es un **catión**?", a: "Un ion **positivo**: se forma cuando el átomo **pierde** electrones y queda con más protones que electrones. Ejemplo: $\\mathrm{Na^+}$, con 11 protones y 10 electrones (2, 8)." },
      { id: "m6-08", q: "¿Qué es un **anión**?", a: "Un ion **negativo**: se forma cuando el átomo **gana** electrones y queda con más electrones que protones. Ejemplo: $\\mathrm{Cl^-}$, con 17 protones y 18 electrones (2, 8, 8)." },
      { id: "m6-09", q: "¿Cómo se representa un **ion** en el modelo de Bohr?", a: "Igual que el átomo, con el **mismo núcleo**, pero dibujando solo los electrones que le quedan después de ganarlos o perderlos. Se encierra entre corchetes con la carga arriba a la derecha, por ejemplo $[\\mathrm{Na}]^+$." },
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
