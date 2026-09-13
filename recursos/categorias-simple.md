# Teoría de categorías

## Categorías

Una **categoría** $\mathcal{C}$ consta de:

1. Una colección de **objetos** $\text{ob}(\mathcal{C})$.
2. Para cada par de objetos $A, B$, un conjunto de **morfismos** $\text{Hom}_{\mathcal{C}}(A, B)$, también escrito $\mathcal{C}(A, B)$.
3. Una **composición** $\circ: \text{Hom}(B, C) \times \text{Hom}(A, B) \to \text{Hom}(A, C)$ para cada terna $A, B, C$.
4. Una **identidad** $1_A \in \text{Hom}(A, A)$ por cada objeto.

Estos datos deben satisfacer:

1. **Asociatividad:** $h \circ (g \circ f) = (h \circ g) \circ f$ siempre que las composiciones tengan sentido.
2. **Identidad:** $f \circ 1_A = f = 1_B \circ f$ para todo $f: A \to B$.

**Ejemplos.** **Set** (conjuntos y funciones), **Grp** (grupos y homomorfismos), **Vect** (espacios vectoriales y transformaciones lineales), **Top** (espacios topológicos y funciones continuas), **R-Mod** (módulos y homomorfismos), **Pos** (conjuntos parcialmente ordenados y aplicaciones monótonas).

**Mini-ejemplo.** Un monoide $(M, \cdot, e)$ es una categoría con un único objeto $\bullet$: se define $\text{Hom}(\bullet, \bullet) = M$, la composición es el producto de $M$ y $e$ actúa como identidad. Así, la teoría de categorías contiene a la teoría de monoides.

La idea central: la matemática se organiza por **relaciones** (morfismos) más que por objetos. Muchos teoremas son "la misma historia" en categorías distintas.

## Funtores

Un **funtor** $F: \mathcal{C} \to \mathcal{D}$ asigna a cada objeto $A$ de $\mathcal{C}$ un objeto $F(A)$ de $\mathcal{D}$, y a cada morfismo $f: A \to B$ un morfismo $F(f): F(A) \to F(B)$, de modo que:

$$F(g \circ f) = F(g) \circ F(f), \qquad F(1_A) = 1_{F(A)}$$

- **Covariante:** preserva la dirección de los morfismos, como arriba.
- **Contravariante:** invierte la dirección; entonces $F(f): F(B) \to F(A)$ y $F(g \circ f) = F(f) \circ F(g)$.

**Mini-ejemplo 1.** El funtor de olvido $U: \mathbf{Grp} \to \mathbf{Set}$ envía cada grupo a su conjunto subyacente y cada homomorfismo a la misma función, sin recordar la operación.

**Mini-ejemplo 2.** El dual $V \mapsto V^* = \text{Hom}(V, \mathbb{K})$ es contravariante: a cada lineal $T: V \to W$ le asocia $T^*: W^* \to V^*$ con $T^*(\varphi) = \varphi \circ T$.

**Mini-ejemplo 3.** El grupo fundamental $\pi_1: \mathbf{Top} \to \mathbf{Grp}$ y la construcción del grupo libre $F: \mathbf{Set} \to \mathbf{Grp}$ son covariantes.

Los funtores "traducen" una categoría en otra y revelan analogías profundas.

## Transformaciones naturales

Una **transformación natural** $\eta: F \Rightarrow G$ entre funtores $F, G: \mathcal{C} \to \mathcal{D}$ asigna a cada objeto $A$ un morfismo $\eta_A: F(A) \to G(A)$ tal que para todo $f: A \to B$ el cuadrado conmuta:

$$G(f) \circ \eta_A = \eta_B \circ F(f)$$

Es la noción correcta de "morfismo entre funtores". Si además cada $\eta_A$ es isomorfismo, $\eta$ es un **isomorfismo natural**.

**Mini-ejemplo 1.** El **determinante** es una transformación natural del funtor $GL_n$ al funtor de unidades $(-)^*$, pues $\det(AB) = \det A \det B$.

**Mini-ejemplo 2.** La **doble dualidad** $\epsilon_V: V \to V^{**}$, $\epsilon_V(v)(\varphi) = \varphi(v)$, es natural; en cambio la elección $V \to V^*$ requiere una base y **no** es natural.

**Mini-ejemplo 3.** Para todo grupo $G$ hay una transformación natural entre la representación regular y ciertos funtores representables. Eilenberg y Mac Lane introdujeron las categorías precisamente para formalizar la naturalidad.

## Equivalencia de categorías

Una **equivalencia** entre categorías captura la idea de que dos teorías son "esencialmente la misma": existen funtores $F: \mathcal{C} \to \mathcal{D}$ y $G: \mathcal{D} \to \mathcal{C}$ con isomorfismos naturales

$$G \circ F \cong 1_{\mathcal{C}}, \qquad F \circ G \cong 1_{\mathcal{D}}$$

Esto es más débil que un **isomorfismo de categorías**, que exigiría igualdades $G \circ F = 1_{\mathcal{C}}$ y $F \circ G = 1_{\mathcal{D}}$. La equivalencia basta para trasladar teoremas de una categoría a la otra.

**Mini-ejemplo.** La categoría de espacios vectoriales de dimensión finita es equivalente a su dual; los grupos finitos abelianos son equivalentes a los $\mathbb{Z}$-módulos de torsión finitamente generados.

## Límites y colímites

Los **límites** generalizan las construcciones universales de la matemática:

- **Producto:** límite del diagrama de dos objetos; en **Set**, el producto cartesiano.
- **Pullback:** límite de un cospan $A \to C \leftarrow B$.
- **Ecualizador:** límite de dos flechas paralelas $f, g: A \rightrightarrows B$.

Los **colímites** son la construcción dual:

- **Coproducto:** caso dual del producto; en **Set**, la unión disjunta; en **Ab**, la suma directa.
- **Pushout:** dual del pullback; en **Top**, el pegado de espacios.
- **Cociente:** colímite de una relación de equivalencia.

**Propiedad universal.** Un límite se define por su relación con todos los objetos compatibles: para cada objeto del diagrama compatible existe un **único** morfismo hacia el límite. Es la forma moderna de decir "el mejor objeto que encaja".

**Mini-ejemplo.** En **Set**, el producto $A \times B$ viene con proyecciones $\pi_1, \pi_2$; para cualquier par $f: X \to A$, $g: X \to B$ existe una única $\langle f, g\rangle: X \to A \times B$ con $\pi_1 \circ \langle f, g\rangle = f$ y $\pi_2 \circ \langle f, g\rangle = g$.

## Adjunciones

Una **adjunción** $F \dashv G$ entre funtores $F: \mathcal{C} \to \mathcal{D}$ y $G: \mathcal{D} \to \mathcal{C}$ es una biyección natural

$$\text{Hom}_{\mathcal{D}}(F(A), B) \cong \text{Hom}_{\mathcal{C}}(A, G(B))$$

Se dice que $F$ es el **adjunto izquierdo** y $G$ el **adjunto derecho**. Equivalentemente, hay transformaciones naturales (unidad y counidad)

$$\eta: 1_{\mathcal{C}} \Rightarrow G \circ F, \qquad \varepsilon: F \circ G \Rightarrow 1_{\mathcal{D}}$$

que satisfacen las **identidades triangulares**.

**Mini-ejemplos.**

1. **Libre $\dashv$ olvido:** $\text{Hom}_{\mathbf{Grp}}(F(S), G) \cong \text{Hom}_{\mathbf{Set}}(S, U(G))$: construir el grupo libre sobre un conjunto.
2. **Producto $\dashv$ exponencial:** $\text{Hom}(A \times B, C) \cong \text{Hom}(A, C^B)$, la curryficación de la programación funcional.
3. **Tensor $\dashv$ Hom:** la adjunción que origina los funtores $\text{Tor}$ y $\text{Ext}$.

Las adjunciones son omnipresentes: "construcción libre" a la izquierda, "olvido" a la derecha.

## Lema de Yoneda

**Lema de Yoneda.** Para todo funtor $F: \mathcal{C} \to \mathbf{Set}$ y todo objeto $A$ existe una biyección natural

$$\text{Nat}\big(\text{Hom}_{\mathcal{C}}(A, -),\, F\big) \cong F(A)$$

El lado izquierdo son las transformaciones naturales desde el funtor representable $\text{Hom}(A, -)$ hacia $F$.

**Interpretación.** Para entender un objeto conviene mirar cómo se relaciona con todos los demás: la versión categórica de "dime con quién andas y te diré quién eres".

**Consecuencias.**

1. El **encaje de Yoneda** $A \mapsto \text{Hom}(A, -)$ es pleno y fiel.
2. Si un funtor es representable por $A$ y por $A'$, entonces $A \cong A'$ (único salvo isomorfismo).
3. Las construcciones universales quedan determinadas por su propiedad universal, sin construir explícitamente el objeto.

**Mini-ejemplo.** Con $F = \text{Hom}(B, -)$ se obtiene $\text{Nat}(\text{Hom}(A, -), \text{Hom}(B, -)) \cong \text{Hom}(B, A)$: los morfismos entre representables son exactamente los morfismos entre los objetos que representan (con la dirección invertida).

## Mónadas

Una **mónada** sobre una categoría $\mathcal{C}$ es un endofuntor $T: \mathcal{C} \to \mathcal{C}$ junto con transformaciones naturales

$$\eta: 1_{\mathcal{C}} \Rightarrow T, \qquad \mu: T^2 \Rightarrow T$$

que cumplen las leyes de coherencia:

$$\mu \circ T\eta = 1_T = \mu \circ \eta T, \qquad \mu \circ T\mu = \mu \circ \mu T$$

**Mini-ejemplo 1 (Maybe).** En la categoría de tipos, $T(X) = X \cup \{\bot\}$; la unidad $\eta_X(x) = x$ introduce el valor y la multiplicación $\mu_X$ aplana $\bot$ o el valor. Modela cálculos que pueden fallar sin excepciones.

**Mini-ejemplo 2 (listas).** $T(X) = X^*$ es la lista de elementos de $X$; $\eta_X$ forma la lista de un elemento y $\mu_X$ concatena listas. Las leyes de unidad y asociatividad son las de la concatenación.

**Origen.** Las mónadas aparecen en el álgebra sobre mónadas, en la semántica de lenguajes de programación (Eugenio Moggi) y en la construcción de categorías de álgebras.

## Ejercicios (20)

### Nivel 1 (básico)

1. Enuncia la definición de categoría (objetos, morfismos, composición e identidades).
2. Da dos ejemplos de categorías concretas e indica cuáles son sus objetos y sus morfismos.
3. Define qué es un funtor covariante $F: \mathcal{C} \to \mathcal{D}$.
4. Define qué es una transformación natural $\eta: F \Rightarrow G$.
5. En $\mathbf{Set}$, ¿qué es el producto de dos conjuntos?

### Nivel 2 (intermedio)

6. Verifica que la composición de funciones en $\mathbf{Set}$ es asociativa y que la identidad cumple sus leyes.
7. Explica el funtor de olvido $U: \mathbf{Grp} \to \mathbf{Set}$ y comprueba que preserva composición.
8. Demuestra que el producto cartesiano satisface la propiedad universal del producto en $\mathbf{Set}$.
9. ¿Qué es el coproducto en $\mathbf{Set}$? Describe sus inyecciones y su propiedad universal.
10. Define la categoría dual $\mathcal{C}^{op}$ y muestra que $\text{Hom}_{\mathcal{C}^{op}}(A, B) = \text{Hom}_{\mathcal{C}}(B, A)$.

### Nivel 3 (avanzado)

11. Enuncia el lema de Yoneda y explica por qué determina un objeto por sus morfismos.
12. Define la adjunción $F \dashv G$ mediante la biyección natural de hom-conjuntos.
13. ¿Qué es un pullback? Da su propiedad universal y un ejemplo en $\mathbf{Set}$.
14. Explica en qué sentido $\mathbf{Vect}_{fd}$ es equivalente a su dual.
15. Define una mónada y sus dos leyes de coherencia.

### Nivel 4 (experto)

16. Demuestra que $(-)^*$ es contravariante y que la doble dualidad $V \to V^{**}$ es natural.
17. Prueba que un objeto que representa un funtor es único salvo isomorfismo único usando Yoneda.
18. Explica por qué el adjunto izquierdo de una adjunción preserva colímites.
19. Describe la mónada Maybe y verifica sus leyes de unidad y asociatividad.
20. Relaciona límites, colímites y el bifuntor $\text{Hom}$ vía la adjunción tensor-$\text{Hom}$.

## Respuestas

1. Una categoría es una colección de objetos con hom-conjuntos $\text{Hom}(A,B)$, una composición asociativa y una identidad $1_A$ por objeto, que actúa como neutro.

2. **Set**: objetos conjuntos, morfismos funciones. **Grp**: objetos grupos, morfismos homomorfismos. También valen **Vect**, **Top**, **Pos**.

3. Un funtor covariante envía $A \mapsto F(A)$, $f \mapsto F(f)$ con $F(g \circ f) = F(g) \circ F(f)$ y $F(1_A) = 1_{F(A)}$.

4. Una transformación natural asigna $\eta_A: F(A) \to G(A)$ a cada $A$, con $G(f) \circ \eta_A = \eta_B \circ F(f)$ para todo $f: A \to B$.

5. El producto es $A \times B = \{(a, b) : a \in A,\; b \in B\}$ con las proyecciones $\pi_1, \pi_2$.

6. Asociatividad: $(h \circ g) \circ f = h \circ (g \circ f)$ porque la composición de funciones es asociativa. Identidad: $f \circ 1_A = f = 1_B \circ f$.

7. $U$ asigna a cada grupo su conjunto subyacente y a cada homomorfismo la misma función; si $\varphi, \psi$ son homomorfismos composables, $U(\psi \circ \varphi) = U(\psi) \circ U(\varphi)$.

8. Dadas $f: X \to A$, $g: X \to B$, la única función es $\langle f, g\rangle(x) = (f(x), g(x))$, y cumple $\pi_1 \circ \langle f, g\rangle = f$, $\pi_2 \circ \langle f, g\rangle = g$.

9. El coproducto es la unión disjunta $A \sqcup B$ con inyecciones $\iota_A, \iota_B$; para todo par $f: A \to X$, $g: B \to X$ existe una única $[f, g]: A \sqcup B \to X$ que las extiende.

10. $\mathcal{C}^{op}$ tiene los mismos objetos; los morfismos se invierten: $\text{Hom}_{\mathcal{C}^{op}}(A, B) = \text{Hom}_{\mathcal{C}}(B, A)$, y $(g \circ_{op} f) = f \circ g$.

11. Yoneda: $\text{Nat}(\text{Hom}(A, -), F) \cong F(A)$. Un objeto queda caracterizado por los morfismos que emite, de modo que dos objetos con el mismo funtor representable son isomorfos.

12. $F \dashv G$ significa una biyección natural $\text{Hom}_{\mathcal{D}}(F(A), B) \cong \text{Hom}_{\mathcal{C}}(A, G(B))$ en $A$ y $B$.

13. El pullback de $A \xrightarrow{f} C \xleftarrow{g} B$ es un objeto $P$ con $p_1: P \to A$, $p_2: P \to B$, $f \circ p_1 = g \circ p_2$, universal. En **Set**, $P = \{(a, b) : f(a) = g(b)\}$.

14. Los funtores $V \mapsto V^*$ y $V \mapsto V$ (dimensiones finitas) son cuasi-inversos: $V \cong V^{**}$ de forma natural; por tanto las categorías son equivalentes, no isomorfas.

15. Una mónada es $T: \mathcal{C} \to \mathcal{C}$ con $\eta: 1 \Rightarrow T$, $\mu: T^2 \Rightarrow T$, cumpliendo $\mu \circ T\eta = 1_T = \mu \circ \eta T$ y $\mu \circ T\mu = \mu \circ \mu T$.

16. Para $T: V \to W$ se define $T^*(\varphi) = \varphi \circ T$, de donde $(S \circ T)^* = T^* \circ S^*$: contravariante. La doble dual cumple $T^{**} \circ \epsilon_V = \epsilon_W \circ T$, luego es natural.

17. Si $A$ y $A'$ representan el mismo funtor, Yoneda da isomorfismos naturales $\text{Hom}(A, -) \cong \text{Hom}(A', -)$; evaluando en $A'$ y usando la identidad se obtiene $A \cong A'$, y el isomorfismo es único porque Yoneda es pleno y fiel.

18. Todo adjunto izquierdo preserva colímites porque $\text{Hom}(F(-), B) \cong \text{Hom}(-, G(B))$ convierte colímites en límites de hom-conjuntos, que se preservan; dualmente $G$ preserva límites.

19. $T(X) = X \cup \{\bot\}$, $\eta_X(x) = x$, $\mu_X(x) = x$ y $\mu_X(\bot) = \bot$. Unidad: $\mu \circ \eta T = 1_T = \mu \circ T\eta$. Asociatividad: aplanar dos veces coincide, $\mu \circ T\mu = \mu \circ \mu T$.

20. La adjunción $A \otimes - \dashv \text{Hom}(B, -)$ expresa $\text{Hom}(A \otimes B, C) \cong \text{Hom}(A, \text{Hom}(B, C))$; los hom-conjuntos representan límites y colímites, y las adjunciones trasladan unos en otros.
