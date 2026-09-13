# Teoría de conjuntos

## Conjuntos y pertenencia

Un **conjunto** es una colección de objetos, llamados sus **elementos**. La relación primitiva es la **pertenencia**: escribimos $x \in A$ si $x$ es elemento de $A$, y $x \notin A$ en caso contrario.

1. **Inclusión.** $A \subseteq B$ si y solo si todo elemento de $A$ pertenece a $B$: $\forall x\,(x \in A \to x \in B)$.
2. **Igualdad.** $A = B$ si y solo si $A \subseteq B$ y $B \subseteq A$ (axioma de extensión).
3. **Inclusión estricta.** $A \subsetneq B$ si $A \subseteq B$ y $A \neq B$.

**Formas de definir un conjunto.**

1. Por extensión: $A = \{1, 2, 3\}$.
2. Por comprensión: $A = \{x : P(x)\}$, con $P$ una propiedad de $x$.

**Conjunto vacío.** $\emptyset$ es el conjunto sin elementos; es único y subconjunto de todos los conjuntos.

**Conjuntos numéricos.**
$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$$

**Teorema.** $\emptyset \subseteq A$ para todo conjunto $A$.

**Demostración.** La afirmación $\forall x\,(x \in \emptyset \to x \in A)$ es verdadera por vacuidad, pues $x \in \emptyset$ nunca ocurre. $\blacksquare$

**Mini-ejemplo.** $1 \in \{1, 2\}$, pero $\{1\} \notin \{1, 2\}$; en cambio $\{1\} \subseteq \{1, 2\}$. Pertenencia e inclusión son relaciones distintas.

**Advertencia fundacional.** La definición ingenua "el conjunto de todos los conjuntos que no se contienen a sí mismos" genera la **paradoja de Russell**; por eso la teoría axiomática restringe qué colecciones son conjuntos.

## Operaciones con conjuntos

Sean $A$ y $B$ conjuntos y $U$ un **conjunto universal** que los contiene.

1. **Unión:** $A \cup B = \{x : x \in A \text{ o } x \in B\}$.
2. **Intersección:** $A \cap B = \{x : x \in A \text{ y } x \in B\}$.
3. **Diferencia:** $A \setminus B = \{x : x \in A \text{ y } x \notin B\}$.
4. **Diferencia simétrica:** $A \triangle B = (A \setminus B) \cup (B \setminus A)$.
5. **Complemento:** $A^{c} = U \setminus A$.
6. **Producto cartesiano:** $A \times B = \{(a, b) : a \in A, b \in B\}$.
7. **Conjunto potencia:** $\mathcal{P}(A) = \{S : S \subseteq A\}$.

**Teorema (cardinal del potencia).** Si $A$ es finito, entonces $|\mathcal{P}(A)| = 2^{|A|}$.

**Propiedades algebraicas.**

1. Conmutativas: $A \cup B = B \cup A$ y $A \cap B = B \cap A$.
2. Asociativas: $(A \cup B) \cup C = A \cup (B \cup C)$ y $(A \cap B) \cap C = A \cap (B \cap C)$.
3. Distributivas: $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ y $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$.
4. Idempotencia: $A \cup A = A$ y $A \cap A = A$.
5. Absorción: $A \cup (A \cap B) = A$ y $A \cap (A \cup B) = A$.
6. Involución: $(A^{c})^{c} = A$.

**Teorema (leyes de De Morgan).**
$$(A \cup B)^{c} = A^{c} \cap B^{c}, \qquad (A \cap B)^{c} = A^{c} \cup B^{c}$$

**Demostración (primera ley).** Para todo $x$:
$$x \in (A \cup B)^{c} \iff x \notin A \cup B \iff (x \notin A \text{ y } x \notin B) \iff x \in A^{c} \cap B^{c}$$
Como tienen los mismos elementos, los conjuntos son iguales. $\blacksquare$

**Mini-ejemplo.** Con $A = \{1, 2, 3\}$ y $B = \{3, 4\}$: $A \cup B = \{1, 2, 3, 4\}$, $A \cap B = \{3\}$, $A \setminus B = \{1, 2\}$ y $A \triangle B = \{1, 2, 4\}$.

## Relaciones

Una **relación binaria** $R$ entre $A$ y $B$ es un subconjunto $R \subseteq A \times B$. Escribimos $a \, R \, b$ en lugar de $(a, b) \in R$. Si $A = B$, decimos que $R$ es una relación **en** $A$.

**Propiedades.** Una relación $R$ en $A$ es:

1. **Reflexiva** si $\forall a \in A,\ a \, R \, a$.
2. **Simétrica** si $\forall a, b,\ a \, R \, b \to b \, R \, a$.
3. **Antisimétrica** si $\forall a, b,\ (a \, R \, b \text{ y } b \, R \, a) \to a = b$.
4. **Transitiva** si $\forall a, b, c,\ (a \, R \, b \text{ y } b \, R \, c) \to a \, R \, c$.

**Mini-ejemplos.**

1. $\leq$ en $\mathbb{R}$: reflexiva, antisimétrica y transitiva.
2. $<$ en $\mathbb{R}$: transitiva, pero no reflexiva.
3. "Es hermano de": simétrica, no reflexiva.
4. La divisibilidad $a \mid b$ en $\mathbb{N}$: reflexiva, antisimétrica y transitiva.

**Teorema.** Si $|A| = n$, el número de relaciones binarias en $A$ es $2^{n^{2}}$.

**Demostración.** Hay $n^{2}$ pares ordenados en $A \times A$; cada uno puede incluirse o no en $R$, lo que da $2^{n^{2}}$ elecciones. $\blacksquare$

## Relaciones de equivalencia

Una relación $R$ en $A$ es de **equivalencia** si es reflexiva, simétrica y transitiva; se escribe $a \sim b$.

**Clase de equivalencia de $a$.**
$$[a] = \{b \in A : a \sim b\}$$
El conjunto de todas las clases se denota $A/{\sim}$.

**Teorema.** Las clases de equivalencia de $\sim$ forman una **partición** de $A$: son no vacías, disjuntas dos a dos y su unión es $A$.

**Demostración.** Cada $a$ está en $[a]$ por reflexividad, así que las clases cubren $A$. Si $[a] \cap [b] \neq \emptyset$, sea $c$ en la intersección; entonces $a \sim c$ y $b \sim c$; por simetría y transitividad $a \sim b$, de donde $[a] = [b]$. Por tanto dos clases distintas son disjuntas. $\blacksquare$

**Mini-ejemplos.**

1. Congruencia módulo $n$: $a \equiv b \pmod n$ tiene exactamente $n$ clases.
2. "Tener el mismo cumpleaños": a lo sumo $366$ clases.
3. Igualdad de fracciones: $1/2 = 2/4$; las fracciones son representantes de clase.

**Mini-ejemplo resuelto.** En $\mathbb{Z}$, para $\equiv \pmod 5$ las clases son $[0] = \{\ldots, -5, 0, 5, \ldots\}$, $[1] = \{\ldots, -4, 1, 6, \ldots\}$, y así sucesivamente hasta $[4]$.

## Relaciones de orden

Una relación $R$ en $A$ es de **orden parcial** si es reflexiva, antisimétrica y transitiva; se escribe $a \preceq b$, y el par $(A, \preceq)$ es un **conjunto parcialmente ordenado** (poset). Es de **orden total** si, además, todo par es comparable: $\forall a, b,\ a \preceq b$ o $b \preceq a$.

**Elementos notables.**

1. **Maximal:** no existe $b$ con $a \prec b$.
2. **Minimal:** no existe $b$ con $b \prec a$.
3. **Máximo:** $b \preceq a$ para todo $b$.
4. **Mínimo:** $a \preceq b$ para todo $b$.

**Buen orden.** Un orden total es un **buen orden** si todo subconjunto no vacío tiene mínimo. $\mathbb{N}$ está bien ordenado con $\leq$; $\mathbb{Z}$ no lo está.

**Diagrama de Hasse.** Es la representación gráfica de un orden finito: se dibuja la relación de cobertura y se omiten reflexividad y transitividad.

**Mini-ejemplos.**

1. $(\mathbb{R}, \leq)$ es un orden total.
2. $(\mathcal{P}(S), \subseteq)$ es un orden parcial; no es total si $|S| \geq 2$.
3. La divisibilidad en $\{1, 2, 3, 6\}$ es un orden parcial, con $1$ mínimo y $6$ máximo.

## Cardinalidad y numerabilidad

Dos conjuntos $A$ y $B$ tienen la **misma cardinalidad**, $|A| = |B|$, si existe una **biyección** $f : A \to B$.

**Clasificación.**

1. **Finito:** biyectable con $\{1, \ldots, n\}$ para algún $n \in \mathbb{N}$.
2. **Infinito numerable:** biyectable con $\mathbb{N}$; se escribe $|A| = \aleph_0$.
3. **No numerable:** ni finito ni numerable.

**Teorema.** Si $A$ y $B$ son numerables, entonces $A \cup B$, $A \times B$ y el conjunto de los subconjuntos finitos de $A$ son numerables.

**Demostración (idea, para $A \times B$).** Si $A = \{a_0, a_1, \ldots\}$ y $B = \{b_0, b_1, \ldots\}$, se recorre la matriz de pares por diagonales: $(a_0, b_0), (a_0, b_1), (a_1, b_0), (a_0, b_2), \ldots$ Esta enumeración es una biyección con $\mathbb{N}$. $\blacksquare$

**Teorema.** $\mathbb{Z}$ y $\mathbb{Q}$ son numerables; $\mathbb{R}$ no lo es.

**Mini-ejemplos.**

1. $\mathbb{Z}$: enumeración $0, 1, -1, 2, -2, 3, -3, \ldots$
2. **Paradoja de Galileo:** $n \mapsto n^{2}$ biyecta $\mathbb{N}$ con los cuadrados; una parte propia tiene el mismo cardinal que el todo.
3. $|\mathbb{N}| = \aleph_0$ y $|\mathbb{R}| = 2^{\aleph_0}$.

## El argumento diagonal de Cantor

**Teorema (Cantor).** $\mathbb{R}$ no es numerable.

**Demostración.** Basta probar que ningún listado cubre los reales de $(0, 1)$. Supón una lista
$$0.d_{11}d_{12}d_{13}\ldots, \quad 0.d_{21}d_{22}d_{23}\ldots, \quad 0.d_{31}d_{32}d_{33}\ldots, \quad \ldots$$
Define $x = 0.e_1e_2e_3\ldots$ mediante
$$e_n = \begin{cases} 1 & \text{si } d_{nn} \neq 1 \\ 2 & \text{si } d_{nn} = 1 \end{cases}$$
Entonces $x$ difiere del $n$-ésimo número de la lista en su $n$-ésima cifra, para todo $n$, de modo que $x$ no está en la lista. Contradicción. $\blacksquare$

**Teorema (Cantor, forma general).** Para todo conjunto $A$, $|A| < |\mathcal{P}(A)|$.

**Demostración.** La aplicación $a \mapsto \{a\}$ es inyectiva, luego $|A| \leq |\mathcal{P}(A)|$. Si existiera una sobreyección $f : A \to \mathcal{P}(A)$, el conjunto
$$D = \{a \in A : a \notin f(a)\}$$
sería $D = f(d)$ para algún $d \in A$. Pero entonces $d \in D \iff d \notin f(d) = D$, contradicción. Luego no hay sobreyección. $\blacksquare$

**Mini-ejemplo.** Aplicado a $A = \mathbb{N}$ da $|\mathbb{N}| < |\mathcal{P}(\mathbb{N})|$; la autorreferencia es el mismo mecanismo de la paradoja de Russell y de la indecibilidad.

## Axiomática ZFC y el axioma de elección

La teoría **ZFC** (Zermelo-Fraenkel con Elección) formaliza la teoría de conjuntos en lógica de primer orden y evita las paradojas. Sus axiomas principales son:

1. **Extensión:** dos conjuntos con los mismos elementos son iguales.
2. **Vacío:** existe $\emptyset$.
3. **Pares:** dados $a, b$ existe $\{a, b\}$.
4. **Unión:** existe $\bigcup A$ para toda colección $A$.
5. **Conjunto potencia:** existe $\mathcal{P}(A)$.
6. **Infinito:** existe un conjunto inductivo, del que se obtiene $\mathbb{N}$.
7. **Separación:** $\{x \in A : P(x)\}$ es un conjunto, no una colección arbitraria.
8. **Reemplazo:** la imagen de un conjunto bajo una función es un conjunto.
9. **Regularidad:** toda colección no vacía tiene un elemento $\in$-minimal.

**Axioma de elección (AC).** Para toda familia $\{A_i\}_{i \in I}$ de conjuntos no vacíos existe una **función de elección** $f$ con $f(i) \in A_i$ para cada $i \in I$.

**Consecuencias de AC.**

1. Todo conjunto admite un buen orden (teorema de Zermelo).
2. **Lema de Zorn:** si toda cadena de un poset tiene cota superior, entonces hay un elemento maximal.
3. Todo espacio vectorial tiene base.
4. Existen conjuntos de reales no medibles (Vitali).

**Independencia.** AC y la **hipótesis del continuo** ($2^{\aleph_0} = \aleph_1$) son independientes de ZF: Gödel probó su consistencia relativa y Cohen su independencia.

**Mini-ejemplo.** Sin elección no se puede garantizar el buen orden de $\mathbb{R}$; con elección existe, pero la construcción es no explícita.

## Ejercicios (20)

### Nivel 1 · Básico

1. Sea $A = \{x \in \mathbb{N} : x \leq 5\}$. Escribe $A$ por extensión y calcula $|\mathcal{P}(A)|$.
2. Sean $A = \{1, 2, 3\}$ y $B = \{2, 3, 4\}$. Halla $A \cup B$, $A \cap B$ y $A \setminus B$.
3. ¿Se cumple $3 \in \{1, \{2, 3\}, 4\}$? ¿Y $\{2, 3\} \in \{1, \{2, 3\}, 4\}$?
4. Escribe por extensión $A = \{x \in \mathbb{Z} : x^{2} = 9\}$.
5. Sea $U = \{1, \ldots, 10\}$ y $A = \{2, 4, 6, 8, 10\}$. Halla $A^{c}$.

### Nivel 2 · Intermedio

6. Demuestra por doble inclusión que $A \setminus B \subseteq A$.
7. Sean $A = \{1, 2, 3, 4\}$ y $B = \{3, 4, 5\}$. Halla $A \triangle B$.
8. ¿Cuántos subconjuntos tiene un conjunto de $7$ elementos?
9. Con $A = \{1, 2\}$, $B = \{2, 3\}$ y $U = \{1, 2, 3, 4\}$, verifica De Morgan calculando $(A \cup B)^{c}$ y $A^{c} \cap B^{c}$.
10. En $\{1, 2, 3\}$ sea $R = \{(1,1), (2,2), (3,3), (1,2), (2,1)\}$. ¿Es de equivalencia? Describe sus clases.

### Nivel 3 · Avanzado

11. Halla las clases de equivalencia de la congruencia módulo $4$ en $\{0, 1, \ldots, 11\}$.
12. Demuestra que "tener la misma paridad" es una relación de equivalencia en $\mathbb{Z}$ y describe sus clases.
13. Sea $A = \{a, b, c\}$. Enumera $\mathcal{P}(A)$ y verifica que $|\mathcal{P}(A)| = 2^{3}$.
14. ¿Es $\subseteq$ un orden total en $\mathcal{P}(\{1, 2\})$? Justifica.
15. Demuestra que $\mathbb{N} \times \mathbb{N}$ es numerable.

### Nivel 4 · Desafío

16. Demuestra que $|\mathcal{P}(\mathbb{N})| > |\mathbb{N}|$.
17. ¿Es numerable el conjunto de los números algebraicos? Justifica.
18. Demuestra que $\mathbb{Q}$ es numerable.
19. Explica, con la paradoja de Russell, por qué no existe el conjunto de todos los conjuntos.
20. ¿Por qué falla la definición ingenua de conjunto y qué aporta la axiomática ZFC?

## Respuestas

1. $A = \{0, 1, 2, 3, 4, 5\}$; $|\mathcal{P}(A)| = 2^{6} = 64$.
2. $A \cup B = \{1, 2, 3, 4\}$, $A \cap B = \{2, 3\}$, $A \setminus B = \{1\}$.
3. $3 \notin \{1, \{2, 3\}, 4\}$, pero $\{2, 3\} \in \{1, \{2, 3\}, 4\}$.
4. $A = \{-3, 3\}$.
5. $A^{c} = \{1, 3, 5, 7, 9\}$.
6. Si $x \in A \setminus B$ entonces $x \in A$ y $x \notin B$; en particular $x \in A$. Luego $A \setminus B \subseteq A$.
7. $A \triangle B = \{1, 2, 5\}$.
8. $2^{7} = 128$.
9. $(A \cup B)^{c} = \{4\}$ y $A^{c} \cap B^{c} = \{4\}$: coinciden, como afirma De Morgan.
10. Sí es de equivalencia; clases $[1] = [2] = \{1, 2\}$ y $[3] = \{3\}$.
11. $[0] = \{0, 4, 8\}$, $[1] = \{1, 5, 9\}$, $[2] = \{2, 6, 10\}$, $[3] = \{3, 7, 11\}$.
12. Reflexiva: $a - a = 0$ es par. Simétrica: si $a - b$ es par, entonces $b - a = -(a - b)$ también lo es. Transitiva: la suma de dos pares es par. Clases: los pares y los impares (dos clases).
13. $\mathcal{P}(A) = \{\emptyset, \{a\}, \{b\}, \{c\}, \{a, b\}, \{a, c\}, \{b, c\}, \{a, b, c\}\}$; $|\mathcal{P}(A)| = 8 = 2^{3}$.
14. No: $\{1\}$ y $\{2\}$ son incomparables, pues $\{1\} \nsubseteq \{2\}$ y $\{2\} \nsubseteq \{1\}$. Es orden parcial, no total.
15. Se enumera por diagonales: $(0,0), (0,1), (1,0), (0,2), (1,1), (2,0), \ldots$ Esto define una biyección con $\mathbb{N}$ (emparejamiento de Cantor).
16. La aplicación $a \mapsto \{a\}$ es inyectiva; si hubiera sobreyección $f : A \to \mathcal{P}(A)$, el conjunto $D = \{a : a \notin f(a)\}$ daría $d \in D \iff d \notin D$. Contradicción; luego $|A| < |\mathcal{P}(A)|$.
17. Sí. Los polinomios con coeficientes enteros forman una unión numerable de conjuntos numerables, y cada polinomio tiene un número finito de raíces; los algebraicos son una unión numerable de conjuntos finitos.
18. Se disponen los racionales positivos en una tabla $p/q$ y se recorren las diagonales, saltando las fracciones repetidas; se obtiene una biyección con $\mathbb{N}$.
19. Si existiera el conjunto $V$ de todos los conjuntos, el axioma de separación daría $R = \{x \in V : x \notin x\}$. Entonces $R \in R \iff R \notin R$, contradicción.
20. La comprensión irrestricta produce la paradoja de Russell. ZFC solo permite formar $\{x \in A : P(x)\}$ a partir de un conjunto ya dado (separación) y regula la formación de conjuntos con reemplazo, unión y potencia, evitando la autorreferencia patológica.
