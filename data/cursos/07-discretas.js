window.CURSOS = window.CURSOS || {};
window.CURSOS["discretas"] = {
  "conjuntos": String.raw`
## Conjuntos y pertenencia
Un **conjunto** es una colección de objetos, sus **elementos**. Se escribe $x \in A$ (pertenece) y $x \notin A$ (no pertenece). La relación básica es la **pertenencia**; la **inclusión** $A \subseteq B$ significa que todo elemento de $A$ está en $B$.

**Formas de definir:** por extensión ($A = \{1, 2, 3\}$) o por comprensión ($A = \{x : x \text{ es par}\}$). El **conjunto vacío** $\emptyset$ no tiene elementos y es subconjunto de todos.

**Conjuntos numéricos:** $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$.

**Advertencia fundacional:** la definición ingenua "conjunto de todos los conjuntos que no se contienen a sí mismos" produce la **paradoja de Russell**. Por eso la teoría axiomática (ZFC) restringe qué colecciones son conjuntos.

## Operaciones con conjuntos
- **Unión:** $A \cup B = \{x : x \in A \text{ o } x \in B\}$.
- **Intersección:** $A \cap B = \{x : x \in A \text{ y } x \in B\}$.
- **Diferencia:** $A \setminus B = \{x : x \in A, x \notin B\}$.
- **Complemento:** $A^c = U \setminus A$ (respecto a un universal $U$).
- **Producto cartesiano:** $A \times B = \{(a, b) : a \in A, b \in B\}$.
- **Conjunto potencia:** $\mathcal{P}(A)$, todos los subconjuntos; $|\mathcal{P}(A)| = 2^{|A|}$.

**Leyes:** conmutativas, asociativas, distributivas, idempotencia, absorción y **De Morgan**:
$$(A \cup B)^c = A^c \cap B^c, \qquad (A \cap B)^c = A^c \cup B^c$$

**Ejemplo.** Si $A = \{1,2,3\}$ y $B = \{3,4\}$: $A \cup B = \{1,2,3,4\}$, $A \cap B = \{3\}$, $A \setminus B = \{1,2\}$.

## Relaciones
Una **relación** binaria $R$ entre $A$ y $B$ es un subconjunto de $A \times B$. Se escribe $aRb$. Una relación en $A$ puede tener propiedades:

- **Reflexiva:** $aRa$ para todo $a$.
- **Simétrica:** $aRb \Rightarrow bRa$.
- **Antisimétrica:** $aRb$ y $bRa \Rightarrow a = b$.
- **Transitiva:** $aRb$ y $bRc \Rightarrow aRc$.

**Ejemplos:** $\leq$ en $\mathbb{R}$ es reflexiva, antisimétrica y transitiva; $<$ no es reflexiva; "es hermano de" es simétrica; la divisibilidad $a \mid b$ es reflexiva, antisimétrica y transitiva en $\mathbb{N}$.

Las relaciones son la base de las funciones, los órdenes y las equivalencias.

## Relaciones de equivalencia
Una relación es de **equivalencia** si es reflexiva, simétrica y transitiva. Define **clases de equivalencia**:
$$[a] = \{b \in A : a \sim b\}$$
Las clases forman una **partición** de $A$: son disjuntas dos a dos y su unión es $A$.

**Ejemplos:**
- Congruencia módulo $n$: $\mathbb{Z}/n\mathbb{Z}$ con $n$ clases.
- "Tiene el mismo cumpleaños que": 366 clases posibles.
- Igualdad de fracciones: $1/2 = 2/4$; las fracciones son representantes de clase.

**Ejemplo.** En $\mathbb{Z}$, $a \equiv b \pmod 5$: las clases son $[0], [1], [2], [3], [4]$.

## Relaciones de orden
Una relación es de **orden parcial** si es reflexiva, antisimétrica y transitiva; se escribe $a \preceq b$. Es **total** si todo par es comparable.

- **Ejemplos:** $(\mathbb{R}, \leq)$ es orden total; $(\mathcal{P}(S), \subseteq)$ es orden parcial no total.
- **Elementos notables:** maximal, minimal, máximo, mínimo.
- **Buen orden:** todo subconjunto no vacío tiene mínimo; $\mathbb{N}$ lo es, $\mathbb{Z}$ no.

**Diagramas de Hasse:** representación gráfica de órdenes finitos, eliminando flechas redundantes.

**Aplicación:** los órdenes aparecen en jerarquías, dependencias de tareas (orden topológico) y teoría de conjuntos.

## Cardinalidad y numerabilidad
Dos conjuntos tienen la **misma cardinalidad** si existe una biyección entre ellos. Un conjunto es:
- **Finito:** biyectable con $\{1, \ldots, n\}$.
- **Infinito numerable:** biyectable con $\mathbb{N}$.
- **No numerable:** ni finito ni numerable.

**Ejemplos clave:**
- $\mathbb{Z}$ y $\mathbb{Q}$ son numerables (se pueden enumerar).
- $\mathbb{R}$ es no numerable.
- $|\mathcal{P}(\mathbb{N})| > |\mathbb{N}|$ (Cantor).

**Paradoja de Galileo:** los cuadrados perfectos son "tantos" como los naturales, porque $n \mapsto n^2$ es biyectiva. En infinito, una parte propia puede tener el mismo tamaño que el todo.

## El argumento diagonal de Cantor
**Teorema:** $\mathbb{R}$ no es numerable.

**Demostración.** Supón una lista de todos los reales entre 0 y 1:
$$0.d_{11}d_{12}d_{13}\ldots, \quad 0.d_{21}d_{22}\ldots, \quad \ldots$$
Construye $x = 0.e_1e_2\ldots$ con $e_n \neq d_{nn}$ (cambia la diagonal). Entonces $x$ difiere de cada número de la lista en al menos una cifra: no está en la lista. Contradicción. $\blacksquare$

El argumento también prueba que ningún conjunto es biyectable con su potencia: $|A| < |\mathcal{P}(A)|$.

## Axiomática ZFC y el axioma de elección
La teoría **ZFC** (Zermelo-Fraenkel con Elección) formaliza los conjuntos y evita paradojas:
- Extensión, vacío, pares, unión, potencia, infinito, reemplazo, regularidad.
- **Axioma de elección:** para toda familia de conjuntos no vacíos existe una función que elige un elemento de cada uno.

**Consecuencias del axioma de elección:** el buen orden de cualquier conjunto, el lema de Zorn, la existencia de bases en espacios vectoriales infinitos... y la existencia de conjuntos no medibles (Vitali).

**Independencia:** el axioma de elección y la hipótesis del continuo son independientes de ZFC (Gödel y Cohen).

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, operaciones).** Con $A = \{1,2,3,4\}$, $B = \{3,4,5\}$: halla $A \triangle B$ (diferencia simétrica).
- $A \triangle B = (A \setminus B) \cup (B \setminus A)$.
- $= \{1,2\} \cup \{5\} = \{1,2,5\}$.

**Ejemplo 2 (práctica, potencia).** ¿Cuántos subconjuntos tiene un conjunto de 6 elementos?
- $|\mathcal{P}(A)| = 2^6 = 64$.

**Ejemplo 3 (práctica, equivalencia).** Clases de equivalencia de la congruencia módulo 4 en $\{0, \ldots, 11\}$.
- $[0] = \{0,4,8\}$, $[1] = \{1,5,9\}$, $[2] = \{2,6,10\}$, $[3] = \{3,7,11\}$.
- Cuatro clases: partición del conjunto.

**Ejemplo 4 (aplicación, orden).** Orden topológico de tareas: A antes que B, B antes que C, A antes que D.
- Orden: $A, B, C, D$ o $A, B, D, C$ o $A, D, B, C$.
- Cualquier orden que respete las dependencias es válido.

**Ejemplo 5 (aplicación, numerabilidad).** Demuestra que $\mathbb{Z}$ es numerable.
- Enumeración: $0, 1, -1, 2, -2, 3, -3, \ldots$
- La biyección $f(n) = (-1)^n \lceil n/2 \rceil$ lo formaliza.

**Ejemplo 6 (aplicación, diagonal).** ¿Puede un programa listar todos los programas que no se listan a sí mismos? (análogo de Russell).
- Si existiera $P$, preguntar si $P$ se lista a sí mismo produce paradoja.
- La autorreferencia es el mecanismo de la incompletitud y la indecidibilidad.

## Contextos donde se aplica
- **Matemática:** fundamento de todo objeto matemático; funciones, relaciones y cardinalidades.
- **Computación:** tipos, bases de datos, teoría de lenguajes formales.
- **Lógica:** semántica, modelos y teoría de conjuntos.
- **Probabilidad:** espacios muestrales y eventos son conjuntos.
- **Filosofía:** fundamentos de la matemática y paradojas.

## Errores comunes y cómo evitarlos
- **Confundir pertenencia con inclusión.** $1 \in \{1\}$ pero $\{1\} \notin \{1\}$.
- **Olvidar que $\emptyset \subseteq A$ siempre.** Y $\emptyset \in \mathcal{P}(A)$.
- **Suponer que todo infinito es numerable.** $\mathbb{R}$ no lo es.
- **Confundir relación con función.** Una función es un caso especial de relación.
- **Usar el conjunto universal sin declararlo.** El complemento depende de $U$.

## Ejercicios propuestos
1. Sea $A = \{x \in \mathbb{N} : x < 6\}$: lista sus elementos y potencia.
2. Demuestra $(A \cap B)^c = A^c \cup B^c$ por doble inclusión.
3. ¿Es de equivalencia "vivir en la misma ciudad"?
4. Dibuja el diagrama de Hasse de los divisores de 12.
5. Demuestra que $\mathbb{Q}$ es numerable (idea de la tabla).
6. ¿Es numerable el conjunto de los polinomios con coeficientes enteros?
7. Clases de equivalencia módulo 3 en $\mathbb{Z}$.
8. ¿Por qué no existe el conjunto de todos los conjuntos?

**Respuestas:** 1) $\{0,\ldots,5\}$; $2^6 = 64$. 2) Doble inclusión. 3) Sí. 4) $1,2,3,4,6,12$ con divisibilidad. 5) Recorre la matriz numerador/denominador en diagonales. 6) Sí: unión numerable de numerables. 7) $[0],[1],[2]$. 8. Paradoja de Russell.

## Resumen
- Conjuntos, pertenencia e inclusión son el lenguaje base; las operaciones cumplen leyes algebraicas.
- Las relaciones de equivalencia particionan; las de orden jerarquizan.
- Numerable significa biyectable con $\mathbb{N}$; $\mathbb{R}$ es no numerable por la diagonal.
- ZFC formaliza la teoría y el axioma de elección tiene consecuencias potentes.
- La autorreferencia produce paradojas y conecta con la lógica y la computación.
`,

  "logica": String.raw`
## Proposiciones y conectivas
Una **proposición** es un enunciado que es verdadero o falso. Las **conectivas** construyen proposiciones compuestas:
- **Negación:** $\neg p$ (no $p$).
- **Conjunción:** $p \land q$ (y).
- **Disyunción:** $p \lor q$ (o inclusivo).
- **Implicación:** $p \to q$ (si $p$ entonces $q$).
- **Bicondicional:** $p \leftrightarrow q$ (si y solo si).

**Implicación:** solo es falsa cuando $p$ es verdadera y $q$ falsa. "Si llueve, hay nubes" es verdadera si no llueve, aunque no haya nubes.

**Tabla de verdad:** enumera todas las combinaciones. Con $n$ variables hay $2^n$ filas.

## Equivalencias lógicas y formas normales
Dos proposiciones son **lógicamente equivalentes** si tienen la misma tabla de verdad; se denota $p \equiv q$.

**Leyes clave:**
- **De Morgan:** $\neg(p \land q) \equiv \neg p \lor \neg q$; $\neg(p \lor q) \equiv \neg p \land \neg q$.
- **Contrapositiva:** $p \to q \equiv \neg q \to \neg p$.
- **Distributivas, asociativas, idempotentes y de absorción.**
- **Implicación:** $p \to q \equiv \neg p \lor q$.
- **Doble negación:** $\neg\neg p \equiv p$.

**Formas normales:** toda proposición equivale a una **FNC** (conjunción de disyunciones) y a una **FND** (disyunción de conjunciones). Se obtienen con tablas o álgebra.

**Tautología:** siempre verdadera ($p \lor \neg p$). **Contradicción:** siempre falsa ($p \land \neg p$).

## Cuantificadores
- **Universal:** $\forall x\, P(x)$ ("para todo $x$").
- **Existencial:** $\exists x\, P(x)$ ("existe al menos un $x$").

**Negaciones:**
$$\neg\forall x\, P(x) \equiv \exists x\, \neg P(x)$$
$$\neg\exists x\, P(x) \equiv \forall x\, \neg P(x)$$

**Orden importa:** $\forall x \exists y \, y > x$ (cierto en $\mathbb{R}$) es distinto de $\exists y \forall x \, y > x$ (falso).

**Cuantificador de unicidad:** $\exists! x\, P(x)$ ("existe exactamente uno").

**Ejemplo.** La negación de "todos los primos son impares" es "existe un primo que no es impar" (el 2): la afirmación original es falsa.

## Lógica de predicados
La lógica de primer orden añade **términos** (variables, constantes, funciones) y **predicados** $P(t_1, \ldots, t_n)$. Una **estructura** o modelo da un dominio y significados.

**Satisfacibilidad:** una fórmula es satisfacible si es verdadera en algún modelo. **Validez:** verdadera en todos los modelos.

**Teoremas fundamentales:**
- **Completitud de Gödel (1929):** una fórmula es válida si y solo si es demostrable. El cálculo de primer orden captura toda la verdad lógica.
- **Compacidad:** si todo subconjunto finito de axiomas es satisfacible, el conjunto completo lo es.
- **Löwenheim-Skolem:** si hay un modelo infinito, hay modelos de todos los cardinales infinitos.

## Sistemas formales y demostraciones
Un **sistema formal** tiene:
1. Un lenguaje (símbolos).
2. Axiomas lógicos y no lógicos.
3. Reglas de inferencia (modus ponens, generalización).

Una **demostración** es una secuencia finita de fórmulas donde cada paso es axioma o se sigue por regla. Una **teoría** es un conjunto de axiomas; sus **teoremas** son las fórmulas demostrables.

**Modus ponens:** de $p$ y $p \to q$ se sigue $q$. Junto con la deducción natural (introducción/eliminación de conectivas), es la base de las demostraciones rigurosas.

**Ejemplo.** En la deducción natural, para probar $p \to q$ se supone $p$ y se deriva $q$; se descarga la suposición con la regla de introducción de la implicación.

## Completitud, consistencia y decidibilidad
- **Consistente:** no se puede demostrar $p$ y $\neg p$.
- **Completa (en sentido semántico):** toda fórmula válida es demostrable.
- **Decidible:** existe un algoritmo que decide si una fórmula es teorema.

**Resultados:**
- La lógica proposicional es **decidible** (tablas de verdad, SAT).
- La lógica de primer orden es **completa** (Gödel) pero **indecidible** (Church-Turing): no hay algoritmo para la validez.
- La aritmética de Peano es **incompleta** e indecidible.

## Los teoremas de incompletitud
**Primer teorema de Gödel:** toda teoría consistente, recursiva y suficientemente rica (capaz de expresar aritmética) tiene proposiciones verdaderas pero **no demostrables** dentro de ella.

**Segundo teorema:** tal teoría no puede demostrar su propia consistencia.

**Mecanismo:** autorreferencia: la sentencia $G$ = "esta proposición no es demostrable". Si fuera demostrable, sería falsa (contradicción); luego es verdadera pero indemostrable.

**Consecuencia:** no existe un sistema formal completo y consistente que capture toda la matemática. La verdad supera a la demostrabilidad.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, tabla).** Tabla de $p \to q$.
- Falsa solo con $p = V$, $q = F$.
- Tres filas verdaderas, una falsa.

**Ejemplo 2 (práctica, De Morgan).** Verifica $\neg(p \land q) \equiv \neg p \lor \neg q$.
- Ambas columnas coinciden en las cuatro filas.
- Equivalencia confirmada.

**Ejemplo 3 (práctica, cuantificadores).** Niega "para todo $x$, $x^2 \geq 0$".
- $\exists x$ con $x^2 < 0$ (falso en $\mathbb{R}$, verdadero en $\mathbb{C}$ sin orden).

**Ejemplo 4 (aplicación, circuitos).** Simplifica $\neg(\neg p \lor q) \lor p$.
- De Morgan: $(p \land \neg q) \lor p$.
- Absorción: $p$ (la expresión se simplifica a $p$).

**Ejemplo 5 (aplicación, matemática).** Escribe la definición de límite con cuantificadores.
- $\forall \varepsilon > 0 \; \exists \delta > 0 : 0 < |x - c| < \delta \Rightarrow |f(x) - L| < \varepsilon$.
- La negación intercambia cuantificadores: $\exists\varepsilon > 0\;\forall\delta\ldots$

**Ejemplo 6 (aplicación, computación).** ¿Por qué SAT es importante?
- SAT (satisfacibilidad proposicional) es el primer problema NP-completo (Cook-Levin).
- Demostradores automáticos y verificación de software lo usan.

## Contextos donde se aplica
- **Matemática:** toda demostración es lógica aplicada; fundamentos y teoría de modelos.
- **Computación:** diseño de circuitos, verificación de programas, inteligencia artificial, bases de datos.
- **Filosofía:** argumentación rigurosa, semántica y epistemología.
- **Derecho:** estructura de argumentos y detección de falacias.
- **Lingüística:** semántica composicional del lenguaje natural.

## Errores comunes y cómo evitarlos
- **Confundir la implicación con la conversa.** $p \to q$ no es $q \to p$.
- **Negar mal un cuantificador.** $\forall$ se niega con $\exists$, no con $\forall$.
- **Confundir necesario con suficiente.** "Solo si" vs "si".
- **Olvidar el orden de los cuantificadores.** $\forall\exists \neq \exists\forall$.
- **Suponer que todo es decidible.** La lógica de primer orden no lo es.

## Ejercicios propuestos
1. Construye la tabla de $p \leftrightarrow q$.
2. Aplica De Morgan a $\neg(p \lor \neg q)$.
3. Niega: "existe un número mayor que todos".
4. Escribe en FNC: $p \to (q \land r)$.
5. ¿Es tautología $(p \to q) \lor (q \to p)$?
6. Traduce: "todo entero par es suma de dos primos" (conjetura de Goldbach).
7. ¿Qué dice el primer teorema de incompletitud en una frase?
8. Prueba por deducción natural: $p \land q \to p$.

**Respuestas:** 1) Verdadera cuando coinciden. 2) $\neg p \land q$. 3) "Todo número tiene alguno mayor". 4) $(\neg p \lor q) \land (\neg p \lor r)$. 5) Sí (siempre hay una dirección verdadera). 6) $\forall n (\text{par}(n) \land n > 2 \to \exists p, q \text{ primos}: n = p + q)$. 7) Hay verdades no demostrables en sistemas ricos. 8) Regla de eliminación de la conjunción.

## Resumen
- Las conectivas y tablas de verdad formalizan el razonamiento proposicional; las equivalencias permiten simplificar.
- Los cuantificadores expresan universalidad y existencia; su orden y negación son críticos.
- Los sistemas formales definen demostraciones; Gödel garantiza completitud en primer orden.
- La incompletitud muestra límites intrínsecos de todo sistema formal rico.
- La lógica es el fundamento de la matemática y de la computación.
`,

  "numeros": String.raw`
## Divisibilidad y algoritmo de Euclides
$a$ **divide** a $b$ ($a \mid b$) si existe entero $k$ con $b = ak$. Propiedades: transitiva, lineal ($a \mid b, a \mid c \Rightarrow a \mid (bx + cy)$), y si $a \mid b$ y $b \mid a$ entonces $a = \pm b$.

**División euclídea:** para $a, b$ con $b > 0$ existen únicos $q, r$ con
$$a = bq + r, \qquad 0 \leq r < b$$

**Algoritmo de Euclides:** repite divisiones hasta resto 0; el último resto no nulo es el **máximo común divisor**:
$$\text{mcd}(a, b) = \text{mcd}(b, r)$$

**Ejemplo.** $\text{mcd}(252, 105)$: $252 = 2\cdot105 + 42$; $105 = 2\cdot42 + 21$; $42 = 2\cdot21 + 0$. mcd $= 21$.

**Identidad de Bézout:** existen enteros $x, y$ con $ax + by = \text{mcd}(a,b)$; se calculan por sustitución hacia atrás.

## Primos y factorización única
Un **primo** $p > 1$ solo es divisible por 1 y por sí mismo. Los primeros: $2, 3, 5, 7, 11, 13, \ldots$

**Teorema fundamental de la aritmética:** todo entero $n > 1$ se factoriza de forma única como producto de primos:
$$n = p_1^{e_1}p_2^{e_2}\cdots p_k^{e_k}$$

**Infinidad de primos (Euclides):** si hubiera finitos $p_1, \ldots, p_n$, el número $p_1p_2\cdots p_n + 1$ no es divisible por ninguno: contradicción.

**Distribución:** el teorema de los números primos dice que $\pi(x) \sim x/\ln x$; hay arbitrarios huecos entre primos, pero también pares gemelos conjeturados infinitos.

**Ejemplo.** $360 = 2^3 \cdot 3^2 \cdot 5$; los divisores son $(3+1)(2+1)(1+1) = 24$.

## Congruencias y aritmética modular
$a \equiv b \pmod n$ si $n \mid (a - b)$. Las congruencias se suman, multiplican y potencian:
$$a \equiv b, \; c \equiv d \Rightarrow a + c \equiv b + d, \quad ac \equiv bd \pmod n$$

**Inverso modular:** $a$ tiene inverso módulo $n$ si y solo si $\text{mcd}(a, n) = 1$; se calcula con Bézout.

**Ejemplo.** $4x \equiv 1 \pmod 7$: como $4 \cdot 2 = 8 \equiv 1$, $x \equiv 2$. Verificación: $4(2) = 8 \equiv 1$.

**Aplicación:** los relojes, los calendarios y los checksums usan aritmética modular; la criptografía RSA vive en $\mathbb{Z}/n\mathbb{Z}$.

## Teoremas de Fermat y Euler
**Pequeño teorema de Fermat:** si $p$ es primo y $\text{mcd}(a, p) = 1$:
$$a^{p-1} \equiv 1 \pmod p$$

**Función de Euler:** $\varphi(n)$ cuenta los enteros entre 1 y $n$ coprimos con $n$. Si $n = p_1^{e_1}\cdots p_k^{e_k}$:
$$\varphi(n) = n\prod_{i=1}^{k}\left(1 - \frac{1}{p_i}\right)$$

**Teorema de Euler:** si $\text{mcd}(a, n) = 1$:
$$a^{\varphi(n)} \equiv 1 \pmod n$$

**Ejemplo.** $3^{100} \bmod 7$: como $\varphi(7) = 6$ y $100 = 6 \cdot 16 + 4$, $3^{100} \equiv 3^4 = 81 \equiv 4 \pmod 7$.

## Teorema chino del resto
Si $m_1, \ldots, m_k$ son coprimos dos a dos, el sistema
$$x \equiv a_i \pmod{m_i}$$
tiene solución única módulo $M = m_1m_2\cdots m_k$.

**Ejemplo.** Resuelve $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$.
- Candidatos $x \equiv 2, 5, 8 \pmod{15}$; el que es $\equiv 3 \pmod 5$ es $8$.
- Solución: $x \equiv 8 \pmod{15}$.

**Aplicación:** reconstrucción de enteros grandes, RSA, calendarios (sol y luna), y la aritmética de computadoras con módulos.

## Ecuaciones diofánticas
Una ecuación **diofántica** pide soluciones enteras. La lineal $ax + by = c$ tiene solución si y solo si $\text{mcd}(a,b) \mid c$; se resuelve con Bézout.

**Ejemplo.** $6x + 15y = 9$: mcd $= 3$ divide 9, hay soluciones. Dividiendo entre 3: $2x + 5y = 3$; con Bézout $x = 9, y = -3$ es una; la familia es $x = 9 + 5t$, $y = -3 - 2t$.

**Ecuaciones famosas:** Pitágoras $x^2 + y^2 = z^2$ (ternas), Pell $x^2 - ny^2 = 1$, y Fermat $x^n + y^n = z^n$ (sin soluciones para $n > 2$, probado por Wiles en 1994).

**Método:** factorizar, usar congruencias y descenso infinito.

## Reciprocidad cuadrática (panorama)
Un residuo cuadrático módulo $p$ es un cuadrado perfecto módulo $p$. El **símbolo de Legendre** $\left(\frac{a}{p}\right)$ vale 1 si $a$ es residuo, $-1$ si no.

**Ley de reciprocidad cuadrática (Gauss):**
$$\left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2}\frac{q-1}{2}}$$
Permite decidir residuos sin calcular. Es el teorema más celebrado de la teoría de números elemental y la puerta a la teoría algebraica de números.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, mcd).** Halla $\text{mcd}(1071, 462)$.
- $1071 = 2\cdot462 + 147$; $462 = 3\cdot147 + 21$; $147 = 7\cdot21 + 0$.
- mcd $= 21$.

**Ejemplo 2 (práctica, Bézout).** Expresa $\text{mcd}(21, 15)$ como combinación.
- $21 = 1\cdot15 + 6$; $15 = 2\cdot6 + 3$; $6 = 2\cdot3$.
- $3 = 15 - 2\cdot6 = 15 - 2(21 - 15) = 3\cdot15 - 2\cdot21$.

**Ejemplo 3 (práctica, congruencia).** Resuelve $7x \equiv 3 \pmod{10}$.
- Inverso de 7 mód 10 es 3 ($7\cdot3 = 21 \equiv 1$).
- $x \equiv 9 \pmod{10}$.

**Ejemplo 4 (aplicación, cifrado).** En RSA con $p = 5$, $q = 11$: calcula $n$ y $\varphi(n)$.
- $n = 55$; $\varphi = 4 \cdot 10 = 40$.
- Con exponente público $e = 3$, la privada es $d = 27$ ($3\cdot27 = 81 \equiv 1 \pmod{40}$).

**Ejemplo 5 (aplicación, calendario).** Un evento ocurre cada 4 días y otro cada 7; hoy coinciden. ¿En cuántos días vuelven a coincidir?
- $x \equiv 0 \pmod 4$, $x \equiv 0 \pmod 7$.
- $x \equiv 0 \pmod{28}$: 28 días.

**Ejemplo 6 (aplicación, primalidad).** Aplica Fermat para detectar un compuesto.
- $n = 341$: $2^{340} \equiv 1 \pmod{341}$ lo engaña (pseudoprimo base 2).
- Con base 3 falla: $341$ es compuesto ($11 \cdot 31$).

## Contextos donde se aplica
- **Criptografía:** RSA, Diffie-Hellman, firmas digitales, curvas elípticas.
- **Computación:** hashing, checksums, generadores seudoaleatorios.
- **Matemática:** fundamento de la aritmética y de la teoría algebraica de números.
- **Física:** simetrías modulares en teoría de cuerdas y sistemas integrables.
- **Vida cotidiana:** calendarios, códigos de barras, ISBN, IBAN.

## Errores comunes y cómo evitarlos
- **Dividir en congruencias sin inverso.** Solo si $\text{mcd}(a, n) = 1$.
- **Aplicar Fermat con módulo compuesto.** Solo vale para primos (salvo pseudoprimos).
- **Confundir $\varphi(p)$ con $p$.** $\varphi(p) = p - 1$.
- **Olvidar el caso del mcd en diofánticas.** Sin divisibilidad no hay solución.
- **Suponer unicidad sin coprimalidad en el teorema chino.** Es esencial.

## Ejercicios propuestos
1. Halla $\text{mcd}(48, 18)$ y exprésalo por Bézout.
2. Factoriza $720$ y cuenta sus divisores.
3. Resuelve $3x \equiv 5 \pmod{11}$.
4. Calcula $\varphi(36)$.
5. Resuelve $x \equiv 1 \pmod 4$, $x \equiv 2 \pmod 3$.
6. ¿Tiene solución $4x + 6y = 7$?
7. Calcula $5^{2024} \bmod 7$.
8. ¿Cuántos números primos hay menores que 30?

**Respuestas:** 1) $6 = 48(-1) + 18(3)$. 2) $2^4\cdot3^2\cdot5$; 30 divisores. 3) $x \equiv 9$. 4) $\varphi(36) = 12$. 5) $x \equiv 5 \pmod{12}$. 6) No: mcd $2 \nmid 7$. 7) $5^{2024} \equiv 5^{2} = 25 \equiv 4$ (orden 6, $2024 \equiv 2$). 8) 10: $2,3,5,7,11,13,17,19,23,29$.

## Resumen
- Euclides calcula el mcd y Bézout lo expresa como combinación lineal.
- La factorización en primos es única y sostiene toda la aritmética.
- Las congruencias generalizan la paridad; Fermat, Euler y el teorema chino resuelven exponentes y sistemas.
- Las diofánticas lineales se resuelven con mcd y Bézout.
- La reciprocidad cuadrática abre la teoría algebraica de números.
`,

  "combinatoria": String.raw`
## Principios básicos de conteo
- **Principio de la suma:** si los casos son disjuntos, el total es la suma.
- **Principio del producto:** si hay $m$ formas de hacer lo primero y $n$ lo segundo, hay $mn$ formas del par.
- **Principio del palomar:** si $n+1$ palomas ocupan $n$ nidos, algún nido tiene al menos 2. Con $kn+1$ palomas, alguno tiene $k+1$.
- **Principio de simetría:** contar una mitad y duplicar.

**Ejemplo.** Menús con 3 entradas, 4 platos y 2 postres: $3 \cdot 4 \cdot 2 = 24$ combinaciones. Con 13 personas, al menos 2 cumplen años el mismo mes (palomar).

## Permutaciones y combinaciones
- **Permutaciones** (importa el orden, sin repetición):
$$P(n, k) = \frac{n!}{(n-k)!}$$
- **Combinaciones** (no importa el orden):
$$C(n, k) = \binom{n}{k} = \frac{n!}{k!(n-k)!}$$
- **Con repetición:** combinaciones $\binom{n+k-1}{k}$; permutaciones con objetos repetidos $\dfrac{n!}{n_1!n_2!\cdots}$.

**Decisión clave:** ¿importa el orden? ¿se permite repetir? Las respuestas determinan la fórmula.

**Ejemplo.** Podio de 8 corredores: $P(8,3) = 336$. Elección de 3 delegados: $C(8,3) = 56$.

## Binomio de Newton y Pascal
**Teorema del binomio:**
$$(x + y)^n = \sum_{k=0}^{n}\binom{n}{k}x^{n-k}y^k$$

**Propiedades de los coeficientes:**
- Simetría: $\binom{n}{k} = \binom{n}{n-k}$.
- Pascal: $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$.
- Suma total: $\sum_k \binom{n}{k} = 2^n$.
- Suma alternada: $\sum_k (-1)^k\binom{n}{k} = 0$.

**Ejemplo.** $(x + 2)^4 = x^4 + 8x^3 + 24x^2 + 32x + 16$. El coeficiente de $x^2$ es $\binom{4}{2}2^2 = 24$.

**Identidad del palomar generalizada:** $\binom{n}{k}$ cuenta subconjuntos de tamaño $k$ y aparece en toda la combinatoria.

## Principio de inclusión-exclusión
Para contar la unión de conjuntos:
$$|A \cup B| = |A| + |B| - |A \cap B|$$
$$|A \cup B \cup C| = |A| + |B| + |C| - |A\cap B| - |A\cap C| - |B\cap C| + |A \cap B \cap C|$$

En general, se alternan sumas de intersecciones de todos los tamaños.

**Ejemplo.** ¿Cuántos números del 1 al 100 son divisibles por 3 o 5?
- $\lfloor 100/3 \rfloor + \lfloor 100/5 \rfloor - \lfloor 100/15 \rfloor = 33 + 20 - 6 = 47$.

**Aplicación clásica:** contar desórdenes (permutaciones sin puntos fijos) y funciones sobreyectivas.

## Recurrencias
Una **recurrencia** define cada término con los anteriores. La **sucesión de Fibonacci**:
$$F_n = F_{n-1} + F_{n-2}, \quad F_0 = 0, F_1 = 1$$

**Recurrencias lineales de orden 2:** $a_n = pa_{n-1} + qa_{n-2}$ se resuelven con la ecuación característica $r^2 = pr + q$; si las raíces son $r_1, r_2$:
$$a_n = A r_1^n + B r_2^n$$
con $A, B$ ajustadas a las condiciones iniciales.

**Ejemplo.** Fibonacci: $r^2 = r + 1$ da $r = \frac{1 \pm \sqrt{5}}{2}$ (número áureo $\varphi$):
$$F_n = \frac{\varphi^n - (-\varphi)^{-n}}{\sqrt{5}}$$
De aquí sale que $F_n$ crece como $\varphi^n/\sqrt{5}$.

## Funciones generadoras
Una **función generadora** codifica una sucesión como coeficientes de una serie:
$$G(x) = \sum_{n=0}^{\infty} a_n x^n$$

**Ejemplos clave:**
- $\dfrac{1}{1-x} = 1 + x + x^2 + \cdots$ (sucesión constante 1).
- $\dfrac{1}{(1-x)^2}$: coeficientes $n+1$.
- $\dfrac{1}{1-x-x^2}$: Fibonacci.

**Método:** para contar con restricciones se multiplican funciones generadoras de cada categoría y se busca el coeficiente deseado. Las operaciones (suma, producto, derivada) corresponden a operaciones sobre sucesiones.

**Ejemplo.** Formas de pagar $n$ con monedas de 1 y 2: coeficientes de $\dfrac{1}{(1-x)(1-x^2)}$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, producto).** Placas de 3 letras y 3 dígitos.
- Letras: $26^3$; dígitos: $10^3$.
- Total: $26^3 \cdot 10^3 = 17\,576\,000$.

**Ejemplo 2 (práctica, combinaciones).** ¿Cuántos subconjuntos de tamaño 4 tiene un conjunto de 10?
- $\binom{10}{4} = 210$.

**Ejemplo 3 (práctica, inclusión-exclusión).** Del 1 al 200, ¿cuántos no son divisibles ni por 2 ni por 3?
- Múltiplos de 2: 100; de 3: 66; de 6: 33; unión: 133.
- No divisibles: $200 - 133 = 67$.

**Ejemplo 4 (aplicación, palomar).** En una reunión de 367 personas, ¿pueden tener todas cumpleaños distintos?
- Solo hay 366 fechas posibles (con bisiesto).
- No: por palomar, al menos dos coinciden.

**Ejemplo 5 (aplicación, Fibonacci).** Un peldaño de escalera se sube de a 1 o 2 pasos. ¿Cuántas formas hay de subir 10 escalones?
- $a_n = a_{n-1} + a_{n-2}$ con $a_1 = 1, a_2 = 2$.
- La sucesión es $1, 2, 3, 5, 8, 13, 21, 34, 55, 89$: 89 formas.

**Ejemplo 6 (aplicación, generatrices).** Coeficiente de $x^5$ en $(1 + x + x^2)^3$.
- Es el número de soluciones de $e_1 + e_2 + e_3 = 5$ con $e_i \in \{0,1,2\}$.
- Soluciones: $(2,2,1)$ y permutaciones: 3 formas. Coeficiente $= 3$.

## Contextos donde se aplica
- **Probabilidad:** contar casos favorables y totales.
- **Computación:** análisis de algoritmos, asignación de recursos, criptografía.
- **Biología:** genética combinatoria, secuencias de ADN.
- **Juegos:** póker, lotería, ajedrez (número de posiciones).
- **Logística:** rutas, horarios, asignaciones.

## Errores comunes y cómo evitarlos
- **Confundir permutación con combinación.** ¿Importa el orden?
- **Contar dos veces el mismo objeto.** Define el objeto con precisión.
- **Olvidar los casos límite.** $k = 0$, conjuntos vacíos, repeticiones.
- **Aplicar inclusión-exclusión con signos mal.** Alterna desde la suma simple.
- **Suponer independencia de elecciones.** Verifica si las decisiones se afectan.

## Ejercicios propuestos
1. ¿Cuántas palabras de 4 letras distintas hay con 5 vocales?
2. ¿Cuántas manos de 5 cartas hay en una baraja de 52?
3. Coeficiente de $x^3$ en $(1+x)^8$.
4. ¿Cuántos números del 1 al 300 son divisibles por 2, 3 o 5?
5. Resuelve $a_n = 5a_{n-1} - 6a_{n-2}$, $a_0 = 1$, $a_1 = 0$.
6. Formas de subir 6 escalones de a 1 o 2.
7. Coeficiente de $x^4$ en $\frac{1}{1-x}$ veces $\frac{1}{1-x^2}$.
8. Con 5 pares de guantes, ¿cuántas formas de elegir 2 guantes que no formen par?

**Respuestas:** 1) $P(5,4) = 120$. 2) $\binom{52}{5} = 2\,598\,960$. 3) $\binom{8}{3} = 56$. 4) $150 + 100 + 60 - 50 - 30 - 20 + 10 = 220$. 5) $a_n = 3^n - 2\cdot2^n$... verifica: $a_n = 3(3)^n - 2(2)^n$; ajusta con $a_0 = 1$, $a_1 = 0$. 6) 13. 7. 3. 8. $\binom{10}{2} - 5 = 40$.

## Resumen
- Suma, producto y palomar son los principios base del conteo.
- Permutaciones y combinaciones dependen de si importa el orden y si hay repetición.
- El binomio y Pascal estructuran los coeficientes; inclusión-exclusión corrige superposiciones.
- Las recurrencias y las funciones generadoras resuelven conteos complejos.
- Contar bien es la mitad de la probabilidad y de la teoría de algoritmos.
`,

  "grafos": String.raw`
## Conceptos básicos de grafos
Un **grafo** $G = (V, E)$ consta de **vértices** $V$ y **aristas** $E$ que conectan pares. Variantes: dirigido (aristas con orientación), ponderado (aristas con peso), multigrafo (aristas repetidas), simple (sin lazos ni múltiples).

**Conceptos:**
- **Vecinos** y **grado** $\deg(v)$: número de aristas incidentes.
- **Camino:** secuencia de vértices conectados; **ciclo:** camino cerrado.
- **Grafo conexo:** hay camino entre todo par de vértices.
- **Subgrafo** y **grafo inducido**.

**Ejemplo.** Una red social es un grafo: personas como vértices, amistades como aristas. El grado es el número de amigos.

## Grados y el lema del apretón de manos
**Lema del apretón de manos:**
$$\sum_{v \in V}\deg(v) = 2|E|$$

Es decir, la suma de grados es el doble del número de aristas. Consecuencias:
- El número de vértices de grado impar es **par**.
- En un grafo con $n$ vértices, el grado máximo es $n-1$.

**Ejemplo.** En un grupo de 7 personas, no pueden todas tener exactamente 3 amigos: la suma sería 21, impar, imposible.

**Teorema de Erdős-Gallai:** caracteriza las secuencias de grados realizables.

## Caminos, conectividad y distancias
- **Distancia** $d(u,v)$: longitud del camino más corto.
- **Diámetro:** máxima distancia.
- **Puente:** arista cuya eliminación desconecta.
- **Componentes conexas** de un grafo no conexo.

**Algoritmos de recorrido:**
- **BFS** (búsqueda en anchura): explora por niveles; da caminos más cortos en grafos sin peso.
- **DFS** (búsqueda en profundidad): explora hasta el fondo; útil para detectar ciclos y ordenar topológicamente.

**Ejemplo.** En un árbol genealógico, BFS encuentra el parentesco más corto.

## Árboles
Un **árbol** es un grafo conexo sin ciclos. Caracterizaciones equivalentes:
- Conexo con exactamente $n - 1$ aristas.
- Conexo, y toda arista es un puente.
- Único camino entre cada par de vértices.

**Árbol generador:** subgrafo que es árbol y contiene todos los vértices. **Árbol generador mínimo:** con peso total mínimo (Kruskal, Prim).

**Fórmula de Cayley:** hay $n^{n-2}$ árboles etiquetados con $n$ vértices.

**Ejemplo.** Red de carreteras que conecta $n$ ciudades con costo mínimo: árbol generador mínimo.

## Grafos eulerianos y hamiltonianos
**Camino euleriano:** recorre cada **arista** exactamente una vez. Existe si el grafo es conexo y tiene 0 o 2 vértices de grado impar (Euler, 1736, puentes de Königsberg).

**Circuito euleriano:** todos los grados pares; empieza y termina en el mismo vértice.

**Camino hamiltoniano:** visita cada **vértice** exactamente una vez. No hay criterio simple; el problema es NP-completo.

**Ejemplo.** El problema del viajante busca un ciclo hamiltoniano de peso mínimo: uno de los problemas más famosos de la optimización.

## Coloración de grafos
Una **coloración propia** asigna colores a vértices de modo que vecinos tengan colores distintos. El **número cromático** $\chi(G)$ es el mínimo de colores.

**Resultados:**
- $\chi(G) \leq \Delta(G) + 1$ (grado máximo + 1).
- **Teorema de los cuatro colores:** todo grafo planar se colorea con 4 colores.
- $\chi(G) = 2$ si y solo si es bipartito.
- Los grafos completos $K_n$ tienen $\chi = n$.

**Aplicación:** asignación de frecuencias en telefonía, horarios de exámenes, mapas.

**Ejemplo.** Programar exámenes sin choques: dos exámenes con estudiantes comunes no pueden ser a la misma hora. Es una coloración.

## Planaridad y fórmula de Euler
Un grafo es **planar** si se puede dibujar sin cruces de aristas. **Fórmula de Euler** para grafos planares conexos:
$$V - E + F = 2$$
donde $F$ cuenta las caras (incluida la exterior).

**Consecuencias:** $E \leq 3V - 6$ para grafos planares con $V \geq 3$; $K_5$ (completo de 5) y $K_{3,3}$ (bipartito completo) no son planares (teorema de Kuratowski: un grafo es planar si y solo si no contiene subdivisiones de $K_5$ o $K_{3,3}$).

**Ejemplo.** $K_4$ es planar: $V = 4$, $E = 6$, $F = 4$; $4 - 6 + 4 = 2$.

## Algoritmos fundamentales
- **Dijkstra:** camino más corto desde un origen con pesos no negativos; complejidad $O(E \log V)$.
- **Bellman-Ford:** admite pesos negativos; detecta ciclos negativos.
- **Floyd-Warshall:** todos los pares de caminos más cortos.
- **Kruskal:** árbol generador mínimo ordenando aristas por peso con unión-búsqueda.
- **Ford-Fulkerson:** flujo máximo en redes; teorema max-flow min-cut.
- **Orden topológico:** secuencia de tareas compatible con dependencias (DAG).

**Ejemplo.** Una app de mapas usa Dijkstra con los tiempos de viaje como pesos.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, grados).** Un grafo tiene 5 aristas. ¿Cuál es la suma de grados?
- $2E = 10$.
- La suma es 10; el número de vértices impares es par.

**Ejemplo 2 (práctica, árboles).** ¿Cuántas aristas tiene un árbol de 10 vértices?
- $n - 1 = 9$.

**Ejemplo 3 (práctica, Euler).** ¿Tiene circuito euleriano un triángulo con una diagonal adjunta? (grafo $K_4$ menos una arista)
- Grados: $2, 3, 3, 2$: dos impares.
- Tiene camino euleriano, no circuito.

**Ejemplo 4 (aplicación, coloreo).** Color del ciclo $C_5$.
- Un ciclo impar requiere 3 colores.
- $\chi(C_5) = 3$.

**Ejemplo 5 (aplicación, Dijkstra).** Grafo: $A-B$ (1), $B-C$ (2), $A-C$ (5). Camino más corto de $A$ a $C$.
- Por $B$: $1 + 2 = 3 < 5$.
- Distancia 3 vía $B$.

**Ejemplo 6 (aplicación, planaridad).** ¿Es planar $K_{3,3}$?
- $V = 6$, $E = 9$; la cota $E \leq 3V - 6 = 12$ no lo prohíbe.
- Pero los grafos bipartitos tienen $E \leq 2V - 4 = 8 < 9$: no es planar.

## Contextos donde se aplica
- **Redes:** internet, rutas, telecomunicaciones, redes sociales.
- **Logística:** rutas de reparto, cadenas de suministro, horarios.
- **Computación:** compiladores (grafo de dependencias), bases de datos, circuitos.
- **Biología:** redes metabólicas, propagación de epidemias, ecología.
- **Química:** estructura molecular como grafo (átomos y enlaces).

## Errores comunes y cómo evitarlos
- **Confundir camino euleriano con hamiltoniano.** Aristas vs vértices.
- **Aplicar Dijkstra con pesos negativos.** Usa Bellman-Ford.
- **Olvidar que un árbol con $n$ vértices tiene $n-1$ aristas.** Es su firma.
- **Suponer planaridad por dibujo.** Puede redibujarse sin cruces o no ser planar.
- **Confundir grado con número de vecinos en multigrafos.** Los lazos cuentan doble.

## Ejercicios propuestos
1. Dibuja un grafo con grados $3,3,2,2,2$ y verifica el lema de manos.
2. ¿Es árbol el grafo $V = 5$, $E = 4$ conexo sin ciclos? Justifica.
3. ¿Tiene $K_5$ camino euleriano?
4. Colorea un cubo (grafo) con mínimo de colores.
5. Aplica Euler a un cubo: $V, E, F$.
6. Camino más corto en un triángulo con pesos $1, 1, 5$.
7. Número de árboles etiquetados con 4 vértices (Cayley).
8. ¿Es bipartito un ciclo de longitud 6?

**Respuestas:** 1) Suma 12 = 2·6. 2) Sí, es árbol. 3) Sí: todos los grados son pares (4). 4) 2 colores (el cubo es bipartito). 5) $8, 12, 6$. 6) Por las aristas de peso 1: 2. 7) $4^2 = 16$. 8) Sí.

## Resumen
- Los grafos modelan relaciones; grados, caminos y conectividad son sus nociones básicas.
- Los árboles son las estructuras conexas mínimas; Cayley los cuenta.
- Eulerianas (aristas) y hamiltonianas (vértices) son preguntas distintas; la segunda es dura.
- Coloración, planaridad y la fórmula de Euler conectan con mapas y redes.
- Dijkstra, Kruskal y flujo máximo son los algoritmos esenciales de la teoría de redes.
`,

  "matematica-discreta": String.raw`
## Álgebra booleana
El **álgebra booleana** opera con dos valores $\{0, 1\}$ y las operaciones AND ($\land$), OR ($\lor$) y NOT ($\neg$):
- $x \land y = 1$ solo si ambos son 1.
- $x \lor y = 1$ si alguno es 1.
- $\neg x$ invierte.

**Leyes:** conmutativas, asociativas, distributivas, identidad, complemento, absorción, **De Morgan**:
$$\neg(x \land y) = \neg x \lor \neg y, \qquad \neg(x \lor y) = \neg x \land \neg y$$

**Formas canónicas:** toda función booleana se expresa como suma de productos (minitérminos) o producto de sumas (maxitérminos). Es la base del diseño digital.

**Ejemplo.** $x \land (y \lor \neg x) = (x \land y) \lor (x \land \neg x) = x \land y$.

## Circuitos lógicos
Las compuertas AND, OR, NOT (y NAND, NOR, XOR) implementan operaciones booleanas. Todo circuito combina compuertas para calcular una función.

**Compuertas universales:** NAND y NOR pueden construir todas las demás; por eso son la base de los chips.

**Minimización:** el **mapa de Karnaugh** agrupa unos adyacentes para simplificar expresiones. Menos compuertas = más rápido y barato.

**Ejemplo.** La función de mayoría de 3 bits $M = xy \lor xz \lor yz$ se simplifica agrupando en Karnaugh.

**Relación con lógica:** un circuito es una proposición; verificar equivalencia es demostrar equivalencia lógica.

## Recurrencias lineales
Una recurrencia de la forma
$$a_n = c_1a_{n-1} + \cdots + c_k a_{n-k}$$
se resuelve con la **ecuación característica** $r^k = c_1r^{k-1} + \cdots + c_k$.

- Raíces distintas: $a_n = \sum A_i r_i^n$.
- Raíz repetida: multiplica por potencias de $n$.
- No homogénea: suma una solución particular.

**Ejemplo (Torres de Hanói).** $T(n) = 2T(n-1) + 1$, $T(1) = 1$; solución $T(n) = 2^n - 1$. Con 64 discos: $1.8 \times 10^{19}$ movimientos.

**Ejemplo (Fibonacci).** Resuelta con el número áureo: crecimiento exponencial.

## Funciones generadoras
Codifican sucesiones como coeficientes de series de potencias:
$$G(x) = \sum_{n \geq 0} a_n x^n$$

**Operaciones:**
- Suma de sucesiones: suma de series.
- Convolución: producto de series.
- Desplazamiento: multiplicar por $x$.
- Derivada: multiplica $a_n$ por $n$.

**Serie clave:** $\dfrac{1}{1-x} = \sum x^n$; derivando, $\dfrac{1}{(1-x)^2} = \sum (n+1)x^n$.

**Ejemplo.** Número de formas de pagar $n$ céntimos con monedas de 1, 5 y 10: coeficiente de $x^n$ en $\dfrac{1}{(1-x)(1-x^5)(1-x^{10})}$.

## Inducción fuerte y recursión
La **inducción fuerte** supone $P(j)$ para todo $j \leq k$ y demuestra $P(k+1)$. Es la herramienta natural para recurrencias y algoritmos recursivos.

**Ejemplo.** Todo entero $n \geq 2$ tiene factorización en primos.
- Si $n$ es primo, listo. Si $n = ab$ con $a, b < n$, por inducción fuerte ambos se factorizan; multiplicando, $n$ también.

**Recursión en computación:** una función se llama a sí misma con casos base. La inducción demuestra su correctitud (hipótesis inductiva = hipótesis de recursión).

**Ejemplo.** Búsqueda binaria: $T(n) = T(n/2) + 1$; solución $T(n) = \log_2 n$.

## Complejidad de algoritmos
La **notación O** describe el crecimiento asintótico:
$$f(n) = O(g(n)) \iff \exists c, n_0 : f(n) \leq c\,g(n) \; \forall n \geq n_0$$

**Jerarquía:** $O(1) < O(\log n) < O(n) < O(n\log n) < O(n^2) < O(2^n) < O(n!)$.

**Análisis de recurrencias:** el **teorema maestro** resuelve $T(n) = aT(n/b) + f(n)$ comparando $f$ con $n^{\log_b a}$.

**Ejemplo.** Mergesort: $T(n) = 2T(n/2) + O(n) = O(n\log n)$. La búsqueda binaria: $O(\log n)$.

**Ejemplo.** Un bucle doble sobre $n$ elementos: $O(n^2)$. Tres bucles anidados: $O(n^3)$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, booleano).** Simplifica $\neg(\neg x \lor y) \lor x$.
- De Morgan: $(x \land \neg y) \lor x$.
- Absorción: $x$.

**Ejemplo 2 (práctica, recurrencia).** Resuelve $a_n = 3a_{n-1}$, $a_0 = 2$.
- Iterando: $a_n = 2 \cdot 3^n$.
- Verificación: $a_1 = 6$.

**Ejemplo 3 (práctica, generatriz).** Coeficiente de $x^4$ en $\frac{1}{1-x}$.
- Todos los coeficientes son 1.
- El coeficiente es 1 (una sola forma con monedas de 1).

**Ejemplo 4 (aplicación, algoritmos).** Ordena $[5, 2, 8, 1]$ con mergesort y cuenta comparaciones.
- Divide: $[5,2]$ y $[8,1]$; ordena: $[2,5]$ y $[1,8]$; mezcla: $[1,2,5,8]$.
- Cerca de $n\log n = 8$ comparaciones.

**Ejemplo 5 (aplicación, circuitos).** Función de paridad de 3 bits.
- $P = x \oplus y \oplus z$ (XOR).
- Vale 1 si el número de unos es impar.

**Ejemplo 6 (aplicación, inducción).** Demuestra que $2^n > n^2$ para $n \geq 5$.
- Base $n = 5$: $32 > 25$.
- Paso: $2^{k+1} = 2\cdot2^k > 2k^2 \geq (k+1)^2$ para $k \geq 5$ (verifica la desigualdad).

## Contextos donde se aplica
- **Ingeniería electrónica:** diseño de procesadores, memorias y circuitos digitales.
- **Computación:** análisis de algoritmos, estructuras de datos, compiladores.
- **Criptografía:** funciones booleanas y S-cajas.
- **Matemática:** conteo, probabilidad discreta, teoría de números computacional.
- **Optimización:** programación entera y satisfacibilidad (SAT).

## Errores comunes y cómo evitarlos
- **Confundir $O$ con tiempo exacto.** Solo describe el crecimiento.
- **Olvidar los casos base en recurrencias.** Sin ellos no hay solución única.
- **Aplicar De Morgan mal.** Cambia también el operador ($\land \leftrightarrow \lor$).
- **Sumar complejidades de bucles anidados como si fueran secuenciales.** Anidar es multiplicar.
- **Suponer que una recurrencia tiene solución cerrada simple.** A veces solo asintótica.

## Ejercicios propuestos
1. Simplifica $x \lor (x \land y)$.
2. Resuelve $a_n = 2a_{n-1} + 1$, $a_0 = 0$.
3. Coeficiente de $x^3$ en $\frac{1}{(1-x)^2}$.
4. Complejidad de un bucle que va de 1 a $n$ con paso doble.
5. Demuestra por inducción que $\sum k = n(n+1)/2$.
6. Aplica el teorema maestro a $T(n) = 4T(n/2) + n$.
7. Diseña el circuito de $x \land \neg y$.
8. Torres de Hanói con 10 discos: ¿cuántos movimientos?

**Respuestas:** 1) $x$. 2) $a_n = 2^n - 1$. 3) 4. 4) $O(\log n)$. 5) Base y paso estándar. 6) $O(n^2)$. 7) AND de $x$ con NOT $y$. 8) $2^{10} - 1 = 1023$.

## Resumen
- El álgebra booleana y los circuitos digitales son la base del hardware.
- Las recurrencias describen procesos recursivos; se resuelven por ecuación característica.
- Las funciones generadoras empaquetan conteos en coeficientes.
- La inducción fuerte valida la recursión y las factorizaciones.
- La notación O y el teorema maestro cuantifican la eficiencia de los algoritmos.
`,

  "computabilidad": String.raw`
## Máquinas de Turing
Una **máquina de Turing** es un modelo abstracto de cómputo: una cinta infinita dividida en celdas, un cabezal que lee y escribe, y un conjunto finito de estados con reglas de transición.

Formalmente: $M = (Q, \Sigma, \Gamma, \delta, q_0, q_{aceptar}, q_{rechazar})$, donde $\delta$ dice, según el estado y el símbolo leído, qué escribir, hacia dónde moverse y a qué estado ir.

**Ejemplo.** Una máquina que suma 1 en binario: recorre la cinta de derecha a izquierda cambiando 1s por 0s hasta encontrar un 0, que cambia por 1.

**Tesis de Church-Turing:** todo lo computable efectivamente es computable por una máquina de Turing. Es la definición de "algoritmo" y no ha sido refutada.

## Modelos equivalentes y Church-Turing
Muchos modelos resultan equivalentes:
- **Máquinas de Turing** (cintas, cabezal).
- **Cálculo lambda** (funciones y aplicación).
- **Funciones recursivas** (composición, recursión primitiva, minimización).
- **Lenguajes de programación** razonables (Python, C, etc., con memoria ilimitada).

**Tesis de Church-Turing:** la computabilidad es una noción absoluta, independiente del modelo. Por eso las demostraciones de imposibilidad (como la parada) valen para todos.

**Implicación práctica:** si un problema no es Turing-computable, no hay lenguaje ni computadora que lo resuelva.

## Decidibilidad y lenguajes
Un **lenguaje** $L \subseteq \Sigma^*$ es un conjunto de cadenas. Una máquina **decide** $L$ si siempre termina y responde sí/no correctamente.

- **Decidible (recursivo):** existe una máquina que lo decide.
- **Reconocible (recursivamente enumerable, r.e.):** existe una máquina que acepta las cadenas de $L$ (puede no terminar en las que no están).
- **Indecidible:** ningún algoritmo lo decide.

**Relaciones:** todo decidible es reconocible; hay reconocibles no decidibles; y hay lenguajes ni siquiera reconocibles (más que funciones, por cardinalidad).

**Ejemplo.** Los lenguajes regulares y libres de contexto son decidibles.

## El problema de la parada
**Teorema:** el lenguaje
$$H = \{\langle M, w\rangle : M \text{ se detiene con entrada } w\}$$
es **indecidible**.

**Demostración (diagonal).** Supón que existe $D$ que decide $H$. Construye $P$ que, con entrada $\langle M\rangle$, hace lo contrario de lo que $D$ dice sobre $\langle M, \langle M\rangle\rangle$. Entonces $P(\langle P\rangle)$ se contradice. $\blacksquare$

**Consecuencia:** no existe un verificador general de programas; la corrección total de software no es algorítmicamente decidible.

**Ejemplo.** No se puede saber si un programa arbitrario terminará; solo casos particulares son decidibles.

## Reducciones
Una **reducción** transforma instancias de un problema $A$ en instancias de $B$, de modo que resolver $B$ resuelva $A$:
$$A \leq_m B$$
Si $A$ es indecidible y $A \leq_m B$, entonces $B$ es indecidible.

**Método estándar:** para probar que un problema es indecidible, reduce la parada (o su complemento) a él.

**Ejemplos de problemas indecidibles:**
- ¿Se detiene $M$ con la entrada vacía?
- ¿Acepta $M$ alguna cadena?
- ¿Son equivalentes dos máquinas (mismo lenguaje)?
- **Problema de correspondencia de Post:** dadas parejas de cadenas, ¿hay una secuencia que iguale arriba y abajo?

## El teorema de Rice
**Teorema de Rice:** toda propiedad **no trivial** del lenguaje de una máquina de Turing es indecidible. Es decir, si una propiedad semántica la cumplen algunas máquinas y otras no, no hay algoritmo general que la decida.

**Ejemplos:** "el lenguaje es finito", "el lenguaje es vacío", "la máquina acepta 0", "el lenguaje es regular": todos indecidibles.

**Lo que Rice no dice:** no prohíbe decidir propiedades **sintácticas** (como "tiene más de 100 estados") ni propiedades de máquinas específicas. La línea es semántica vs sintáctica.

**Importancia:** explica por qué la verificación automática general es imposible y hay que restringirse a casos o propiedades limitadas.

## Recursivo vs recursivamente enumerable
- **Recursivo:** decidible; el algoritmo termina en todos los casos.
- **r.e.:** aceptable; el algoritmo puede no terminar.
- **Teorema de Post:** $L$ es decidible si y solo si $L$ y su complemento son r.e.
- Existen r.e. cuyo complemento no es r.e. (la parada).

**Jerarquía:** decidibles $\subset$ r.e. $\subset$ todos los lenguajes. La diferencia se mide con la **jerarquía aritmética** y los grados de Turing.

**Ejemplo.** El problema de la parada es r.e. (simulamos la máquina) pero no decidible. Su complemento ni siquiera es r.e.

## La tesis extendida y los límites
La **tesis de Church-Turing fuerte** (física): cualquier función computable por un proceso físico razonable es Turing-computable. No hay "hipercomputación" físicamente realizable conocida.

**Límites de la matemática automatizada:**
- No hay demostrador automático completo para toda la matemática.
- La verificación de software debe usar lógica restringida o asistencia humana.
- Los asistentes de pruebas (Coq, Lean) verifican demostraciones dadas, no las inventan.

**Lado positivo:** la indecidibilidad separa lo posible de lo imposible y guía la investigación hacia problemas que sí pueden automatizarse.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, máquina).** Describe una máquina que reconoce $0^n1^n$.
- Alterna marcando un 0 y un 1; si se acaban juntos, acepta.
- No es regular, pero sí decidible.

**Ejemplo 2 (práctica, parada).** ¿Decide algo el programa "mientras true: nada"?
- No se detiene nunca con ninguna entrada.
- La parada es trivial para este programa específico, pero no en general.

**Ejemplo 3 (práctica, reducción).** Reduce el problema "¿M acepta la cadena vacía?" a la parada.
- Construye $M'$ que borra la entrada y simula $M$ en la vacía.
- $M'$ se detiene sii $M$ acepta $\varepsilon$: reducción válida.

**Ejemplo 4 (aplicación, Rice).** ¿Es decidible "la máquina tiene lenguaje infinito"?
- Es una propiedad semántica no trivial.
- Indecidible por Rice.

**Ejemplo 5 (aplicación, PCP).** ¿Es decidible el problema de correspondencia de Post?
- Indecidible: se reduce desde la parada.
- Incluso con alfabetos pequeños sigue siendo indecidible.

**Ejemplo 6 (aplicación, compiladores).** ¿Por qué no existe un detector perfecto de bucles infinitos?
- Sería un decisor de la parada.
- Los analizadores reales detectan solo patrones simples o requieren anotaciones.

## Contextos donde se aplica
- **Ciencias de la computación:** verificación de programas, compiladores, lenguajes.
- **Matemática:** límites de la demostración automática; incompletitud y jerarquías.
- **Inteligencia artificial:** límites teóricos de agentes y razonadores.
- **Seguridad:** análisis de malware y detección de intenciones maliciosas.
- **Filosofía:** naturaleza del razonamiento mecánico y la mente.

## Errores comunes y cómo evitarlos
- **Confundir indecidible con "muy difícil".** Es imposibilidad, no dificultad.
- **Creer que un caso particular indecidible no es resoluble.** Muchos casos sí; la imposibilidad es general.
- **Invertir la reducción.** Para probar $B$ indecidible, reduce $A$ (indecidible) **a** $B$.
- **Aplicar Rice a propiedades sintácticas.** Solo vale para las semánticas.
- **Suponer que r.e. implica decidible.** La parada es r.e. y no decidible.

## Ejercicios propuestos
1. Describe informalmente una máquina que reconoce palíndromos binarios.
2. ¿Es decidible el problema "¿el programa imprime 42?" (para todo programa)?
3. Reduce "¿M acepta alguna cadena?" a la parada.
4. ¿Es r.e. el complemento de la parada?
5. Aplica Rice: ¿es decidible "M tiene menos de 10 estados"?
6. ¿Por qué hay lenguajes no r.e.?
7. ¿Puede una máquina decidir si otra es equivalente a otra?
8. Explica la tesis de Church-Turing en una frase.

**Respuestas:** 1) Marca extremos y compara hacia adentro. 2) Indecidible (Rice/reducción). 3) Simula M sobre todas las cadenas en paralelo (dovetailing). 4) No. 5. Sí: es sintáctica, se decide contando estados. 6. Hay más lenguajes que máquinas (cardinalidad). 7. No. 8. Todo lo computable efectivamente lo es por una máquina de Turing.

## Resumen
- La máquina de Turing define el cómputo; Church-Turing afirma su universalidad.
- Decidible, reconocible e indecidible clasifican problemas; la parada es el ejemplo central.
- Las reducciones propagan la indecidibilidad; Rice la generaliza a toda propiedad semántica.
- r.e. y recursivo se relacionan por el teorema de Post.
- Los límites de la computabilidad acotan lo que el software y la matemática automática pueden lograr.
`,

  "complejidad": String.raw`
## Notación asintótica
La complejidad mide recursos (tiempo, memoria) en función del tamaño $n$ de la entrada:
- $f = O(g)$: $f$ crece a lo más como $g$.
- $f = \Omega(g)$: $f$ crece al menos como $g$.
- $f = \Theta(g)$: mismo orden de crecimiento.
- $f = o(g)$: crece estrictamente más lento.

**Jerarquía:** $O(1) \subset O(\log n) \subset O(n) \subset O(n\log n) \subset O(n^2) \subset O(n^3) \subset O(2^n) \subset O(n!)$.

**Ejemplo.** $3n^2 + 5n + 7 = \Theta(n^2)$: el término dominante manda.

**Buenas prácticas:** ignora constantes y términos menores; enfócate en cómo escala con entradas grandes.

## Las clases P y NP
- **P:** problemas de decisión resolubles en tiempo polinomial por una máquina determinista. Son los "tratables".
- **NP:** problemas cuya solución, una vez dada, se **verifica** en tiempo polinomial por una máquina determinista.

Equivalentemente, NP es la clase de problemas resolubles en tiempo polinomial por una máquina **no determinista** (que adivina y verifica).

**Relación:** $P \subseteq NP$. ¿Es estricta? Es el problema abierto más famoso de la computación: **P vs NP**.

**Ejemplos en P:** ordenar, camino más corto, primalidad (AKS), programación lineal, emparejamiento.
**Ejemplos en NP:** SAT, clique, viajante (decisión), mochila (decisión), coloración.

## Verificadores y certificados
Un problema está en NP si existe una relación $R(x, c)$ decidible en tiempo polinomial tal que:
$$x \in L \iff \exists c : R(x, c) = 1$$

El testigo $c$ se llama **certificado**. Para 3-SAT, el certificado es una asignación de verdad; verificar toma tiempo lineal en el número de cláusulas.

**Ejemplo.** El problema del viajante (¿hay ruta de costo $\leq k$?): el certificado es la ruta misma; verificar su costo es polinomial.

**Consecuencia:** si P = NP, todo problema verificable sería resoluble; la criptografía moderna (RSA) podría romperse.

## Reducciones y NP-completitud
Una **reducción polinomial** $A \leq_p B$ transforma instancias de $A$ en instancias de $B$ en tiempo polinomial, preservando la respuesta.

Un problema $B$ es **NP-completo** si:
1. $B \in NP$.
2. Todo problema de NP se reduce a $B$ en tiempo polinomial.

**Propiedad clave:** si un NP-completo está en P, entonces P = NP. Por eso los NP-completos son los candidatos a ser intratables.

**Método para probar NP-completitud:**
1. Muestra que $B \in NP$ (da un verificador).
2. Reduce un NP-completo conocido $A$ a $B$ ($A \leq_p B$).

## El teorema de Cook-Levin
**SAT** (satisfacibilidad booleana): dada una fórmula proposicional, ¿existe una asignación que la haga verdadera?

**Teorema de Cook-Levin (1971):** SAT es NP-completo.

**Idea de la demostración:** cualquier cómputo de una máquina de Turing no determinista en tiempo polinomial se codifica como una fórmula gigante cuyas variables describen el estado, la cinta y el cabezal; la fórmula es satisfacible sii existe una computación aceptante.

**Consecuencia:** la primera piedra de la NP-completitud; de SAT se derivan miles de problemas NP-completos (3-SAT, clique, conjunto independiente, viajante...).

## Problemas NP-completos famosos
- **3-SAT:** cláusulas de 3 literales.
- **Clique:** ¿hay un subgrafo completo de tamaño $k$?
- **Conjunto independiente y cubrimiento de vértices.**
- **Coloración:** ¿es $k$-coloreable?
- **Camino hamiltoniano y viajante.**
- **Mochila (decisión).**
- **Partición de conjuntos.**
- **Cubrimiento exacto** (tetrominós, sudoku generalizado).

**Problemas relacionados:**
- **coNP:** complementos de NP (tautologías).
- **PSPACE:** memoria polinomial (TQBF es completo).
- **EXP:** tiempo exponencial.

## P vs NP y estrategias para problemas duros
**P vs NP:** ¿existe un algoritmo polinomial para SAT? A la fecha, no se sabe. Clay Institute lo lista entre los siete problemas del milenio.

**Si P = NP:** la optimización combinatoria sería fácil, la criptografía clásica caería, la matemática se automatizaría en gran medida.

**Si P ≠ NP:** hay problemas intrínsecamente difíciles; la seguridad criptográfica tiene base.

**Estrategias prácticas ante NP-completos:**
- **Aproximación:** algoritmos con garantía (por ejemplo, 2-aproximación para cubrimiento).
- **Parámetros:** complejidad parametrizada (FPT): explota parámetros pequeños.
- **Heurísticas:** búsqueda local, recocido, algoritmos genéticos.
- **SAT solvers:** en la práctica resuelven instancias industriales enormes.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, O).** Ordena por crecimiento: $n\log n$, $2^n$, $n^2$, $\log n$, $n!$.
- De menor a mayor: $\log n < n\log n < n^2 < 2^n < n!$.

**Ejemplo 2 (práctica, P).** ¿Está la búsqueda binaria en P?
- Tiempo $O(\log n) \subseteq$ polinomial.
- Sí, y de hecho es muy eficiente.

**Ejemplo 3 (práctica, NP).** Certificado para "¿tiene el grafo un triángulo?"
- Los 3 vértices del triángulo.
- Verificar las 3 aristas: $O(1)$.

**Ejemplo 4 (aplicación, reducción).** Reduce clique a conjunto independiente.
- En el grafo complemento, un clique es un conjunto independiente.
- La reducción invierte aristas: polinomial.

**Ejemplo 5 (aplicación, criptografía).** ¿Por qué RSA asume P ≠ NP?
- Romper RSA se relaciona con factorizar y logaritmo discreto.
- Factorizar está en NP $\cap$ coNP, no se sabe si en P; se cree difícil.

**Ejemplo 6 (aplicación, práctica).** Un SAT solver resuelve una fórmula de 10.000 variables.
- Con técnicas de propagación y aprendizaje de cláusulas.
- Las instancias estructuradas suelen ser tratables aunque el caso general sea NP-completo.

## Contextos donde se aplica
- **Optimización:** rutas, horarios, asignaciones, logística.
- **Criptografía:** seguridad computacional basada en problemas difíciles.
- **Bioinformática:** alineamiento, plegamiento, filogenia (muchos NP-duros).
- **Machine learning:** entrenamiento de modelos y problemas combinatorios.
- **Verificación:** model checking y SAT solving industrial.

## Errores comunes y cómo evitarlos
- **Confundir NP con "no polinomial".** NP = verificable en tiempo polinomial.
- **Decir "NP-completo" para cualquier problema difícil.** Hay jerarquías.
- **Invertir reducciones.** Para probar $B$ NP-completo, reduce un NP-completo **a** $B$.
- **Ignorar la dirección de la cota en $O$.** $O$ es solo superior (salvo caso promedio).
- **Creer que P ≠ NP está probado.** Sigue abierto.

## Ejercicios propuestos
1. Clasifica $5n^3 + 2n$ y $n\log n + n^2$ en $\Theta$.
2. Da un certificado para coloración con $k$ colores.
3. ¿Está el problema de la mochila fraccionaria en P?
4. Reduce 3-SAT a clique (idea).
5. ¿Qué clase contiene los complementos de SAT?
6. ¿Por qué PSPACE contiene a NP?
7. Da una 2-aproximación para cubrimiento mínimo.
8. ¿Es el problema de la parada NP-completo?

**Respuestas:** 1) $\Theta(n^3)$ y $\Theta(n^2)$. 2) La coloración asignada. 3) Sí (voraz). 4. Crea un vértice por literal y conecta los compatibles. 5. coNP. 6. Con memoria polinomial se simula el certificado. 7. Elige el conjunto que más cubra. 8. No: es indecidible, fuera de NP.

## Resumen
- La notación asintótica captura el crecimiento; P contiene lo tratable.
- NP es la clase de lo verificable; P vs NP es el gran problema abierto.
- Cook-Levin probó a SAT NP-completo; de ahí se derivan miles de problemas.
- Reducciones polinomiales ordenan la dureza y clasifican los problemas.
- Aproximación, parámetros y heurísticas doméstican los problemas NP-duros en la práctica.
`
};
