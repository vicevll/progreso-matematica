# Topología algebraica

La **topología algebraica** traduce problemas de forma en problemas de álgebra: asigna grupos a espacios de modo que las deformaciones continuas se conviertan en isomorfismos. Sus invariantes centrales son el grupo fundamental $\pi_1$, los grupos de homología $H_n$ y la teoría de espacios cubrientes.

## Homotopía

Dos aplicaciones continuas $f, g: X \to Y$ son **homótopas** si existe una aplicación continua $H: X \times [0,1] \to Y$ con
$$H(x,0) = f(x), \qquad H(x,1) = g(x).$$

Se escribe $f \simeq g$ y la homotopía es una relación de equivalencia. Si además se fija $A \subseteq X$ y $H(a,t) = f(a) = g(a)$ para todo $a \in A$, la homotopía es **relativa a $A$**; el caso $A = \{x_0\}$ fija extremos y será clave para $\pi_1$.

**Equivalencia homotópica.** $X$ e $Y$ son **homotópicamente equivalentes** si existen $f: X \to Y$ y $g: Y \to X$ con
$$g \circ f \simeq \mathrm{id}_X, \qquad f \circ g \simeq \mathrm{id}_Y.$$
Un espacio es **contráctil** si es equivalente a un punto. Las equivalencias homotópicas preservan $\pi_1$, la homología y $\chi$; son más flexibles que los homeomorfismos.

**Mini-ejemplo.** $\mathbb{R}^n$ es contráctil vía $H(x,t) = (1-t)x$, que contrae todo al origen. El anillo $S^1 \times [0,1]$ se contrae sobre $S^1 \times \{0\}$ con $H((z,s),t) = (z,(1-t)s)$: es equivalente a $S^1$, pero no homeomorfo a él.

## El grupo fundamental

Fijado $x_0 \in X$, un **lazo** es un camino $\gamma:[0,1]\to X$ con $\gamma(0)=\gamma(1)=x_0$. Dos lazos son equivalentes si son homótopos **fijando extremos**. Las clases forman un grupo con la concatenación
$$[\alpha]\cdot[\beta] = [\alpha * \beta], \qquad (\alpha * \beta)(t) = \begin{cases} \alpha(2t), & 0 \le t \le \tfrac12,\\ \beta(2t-1), & \tfrac12 \le t \le 1.\end{cases}$$

El neutro es la clase del lazo constante y el inverso recorre el lazo al revés. Este grupo es el **grupo fundamental** $\pi_1(X,x_0)$.

**Propiedades:**

1. Si $X$ es conexo por caminos, $\pi_1(X,x_0) \cong \pi_1(X,x_1)$; un camino entre $x_0$ y $x_1$ induce un isomorfismo (conjugación).
2. Una aplicación continua $f: X \to Y$ induce $f_*: \pi_1(X,x_0) \to \pi_1(Y,f(x_0))$, con $(g\circ f)_* = g_*\circ f_*$: $\pi_1$ es un **funtor**.
3. $X$ es **simplemente conexo** si es conexo por caminos y $\pi_1(X)=0$.

**Mini-ejemplo.** $\pi_1(\mathbb{R}^n)=0$ porque $\mathbb{R}^n$ es contráctil. El disco $D^2$ también es simplemente conexo.

## Cálculo de $\pi_1$ y grupos de superficies

**Herramientas de cálculo:**

1. **Retractos de deformación.** Si existe una homotopía $r_t: X \to X$ con $r_0 = \mathrm{id}_X$, $r_1(X) \subseteq A$ y $r_t|_A = \mathrm{id}_A$, entonces $\pi_1(A) \cong \pi_1(X)$.
2. **Productos.** $\pi_1(X \times Y, (x_0,y_0)) \cong \pi_1(X,x_0) \times \pi_1(Y,y_0)$.
3. **Grado.** $\pi_1(S^1) \cong \mathbb{Z}$: cada lazo se clasifica por su número de vueltas, y el isomorfismo es $[\gamma] \mapsto \deg(\gamma)$.
4. **Sumas por un punto.** $\pi_1(X \vee Y) \cong \pi_1(X) * \pi_1(Y)$ (producto libre) para espacios razonables.

**Superficies.** La superficie orientable de género $g$ tiene
$$\pi_1 = \langle a_1,b_1,\dots,a_g,b_g \mid [a_1,b_1][a_2,b_2]\cdots[a_g,b_g] = 1\rangle, \qquad [a_i,b_i] = a_i b_i a_i^{-1} b_i^{-1},$$
y su abelianización es $\mathbb{Z}^{2g}$.

**Mini-ejemplo.** El toro $T^2 = S^1 \times S^1$ cumple $\pi_1(T^2) = \mathbb{Z} \times \mathbb{Z} = \mathbb{Z}^2$. La figura 8 tiene $\pi_1 = F_2$, el grupo libre de rango $2$, que **no** es abeliano.

## Teorema de Van Kampen

**Teorema (Van Kampen).** Sea $X = U \cup V$ con $U$, $V$ y $U \cap V$ conexos por caminos y no vacíos. Si $x_0 \in U \cap V$, entonces $\pi_1(X,x_0)$ es el **producto libre amalgamado**
$$\pi_1(X) \cong \pi_1(U) *_{\pi_1(U\cap V)} \pi_1(V),$$
es decir, el cociente del producto libre $\pi_1(U) * \pi_1(V)$ por las relaciones $i_*[\alpha] = j_*[\alpha]$ con $[\alpha] \in \pi_1(U \cap V)$, donde $i: U\cap V \hookrightarrow U$ y $j: U\cap V \hookrightarrow V$ son las inclusiones.

**Consecuencias:**

1. Si $U \cap V$ es simplemente conexo, entonces $\pi_1(X) \cong \pi_1(U) * \pi_1(V)$.
2. Si $V$ es simplemente conexo, $\pi_1(X) \cong \pi_1(U)/N$, donde $N$ es el subgrupo normal generado por la imagen de $\pi_1(U\cap V)$.

**Mini-ejemplo.** Para $S^2$, tomando dos hemisferios $U$, $V$ (contráctiles) que se cortan en una banda ecuatorial (contráctil), Van Kampen da $\pi_1(S^2) = 0 * 0 = 0$.

**Mini-ejemplo.** Para $\mathbb{RP}^2$, que es $D^2$ con el borde identificado antipodalmente, Van Kampen da $\pi_1(\mathbb{RP}^2) = \mathbb{Z}/2$.

## Espacios cubrientes

Una **cubierta** es una aplicación continua y sobreyectiva $p: \tilde X \to X$ tal que cada punto de $X$ tiene una vecindad abierta $U$ cuya preimagen es unión disjunta de abiertos, $p^{-1}(U) = \bigsqcup_\alpha V_\alpha$, con cada $p|_{V_\alpha}: V_\alpha \to U$ un homeomorfismo. Si todas las fibras tienen $n$ elementos, la cubierta es **de $n$ hojas**.

**Propiedades de levantamiento:**

1. **Caminos:** dado $\tilde x_0 \in p^{-1}(x_0)$, todo camino $\gamma$ en $X$ desde $x_0$ se levanta de forma única a un camino $\tilde\gamma$ en $\tilde X$ con $\tilde\gamma(0)=\tilde x_0$.
2. **Homotopías:** dos caminos homótopos fijando extremos se levantan a caminos homótopos fijando extremos.

**Teorema de clasificación.** Para $X$ conexo por caminos y localmente simplemente conexo, las cubiertas conexas de $X$ corresponden biyectivamente a los subgrupos $H \le \pi_1(X,x_0)$. El número de hojas de la cubierta asociada a $H$ es $[\pi_1(X):H]$, y la cubierta es **normal** si y solo si $H$ es normal.

**Cubierta universal.** La cubierta correspondiente a $H = 0$ es la **cubierta universal** $\tilde X \to X$: es simplemente conexa y cubre a cualquier otra cubierta de $X$.

**Mini-ejemplos.** $p:\mathbb{R}\to S^1$, $t \mapsto e^{2\pi i t}$, es la cubierta universal del círculo y sus transformaciones de cubierta forman $\mathbb{Z}$. La aplicación $S^n \to \mathbb{RP}^n$ es la cubierta universal de dos hojas del proyectivo real. La cubierta universal del toro es $\mathbb{R}^2 \to T^2$.

## Homología

La **homología singular** asigna a cada espacio $X$ grupos abelianos $H_n(X)$ que cuentan agujeros de dimensión $n$. Se parte del complejo de cadenas singulares
$$\cdots \to C_{n+1}(X) \xrightarrow{\partial_{n+1}} C_n(X) \xrightarrow{\partial_n} C_{n-1}(X) \to \cdots, \qquad \partial_n \circ \partial_{n+1} = 0,$$
y se define
$$H_n(X) = \frac{\ker \partial_n}{\mathrm{Im}\,\partial_{n+1}}.$$

**Interpretación:**

1. $H_0(X)$ es el grupo libre generado por las componentes conexas por caminos; su rango es el número de componentes.
2. $H_1(X)$ cuenta los túneles (lazos independientes) y es la **abelianización** de $\pi_1(X)$: $H_1(X) \cong \pi_1(X)^{\mathrm{ab}}$.
3. $H_2(X)$ detecta cavidades bidimensionales (superficies cerradas que no acotan).

**Propiedades:**

1. **Invariancia homotópica:** si $X \simeq Y$, entonces $H_n(X) \cong H_n(Y)$ para todo $n$.
2. **Mayer-Vietoris:** si $X = U \cup V$, existe una sucesión exacta larga
$$\cdots \to H_n(U \cap V) \to H_n(U) \oplus H_n(V) \to H_n(X) \to H_{n-1}(U \cap V) \to \cdots$$
3. **Números de Betti:** $b_n = \mathrm{rango}\,H_n(X)$.

**Mini-ejemplo.** Para $S^2$: $H_0 = \mathbb{Z}$, $H_1 = 0$, $H_2 = \mathbb{Z}$. Para la superficie de género $g$: $H_0 = \mathbb{Z}$, $H_1 = \mathbb{Z}^{2g}$, $H_2 = \mathbb{Z}$. La botella de Klein tiene $H_1 = \mathbb{Z} \oplus \mathbb{Z}/2$: la **torsión** detecta su no orientabilidad.

## Complejos CW y característica de Euler

Un **complejo CW** se construye pegando **celdas** de dimensión creciente: $0$-celdas (puntos), $1$-celdas (arcos), $2$-celdas (discos), etc. Un espacio es CW si admite una filtración $X^0 \subseteq X^1 \subseteq \cdots$ donde $X^n$ se obtiene de $X^{n-1}$ adjuntando $n$-celdas. Esferas, toros, superficies y $\mathbb{RP}^n$ admiten estructuras CW finitas.

Si $c_n$ es el número de $n$-celdas, la **característica de Euler** es
$$\chi(X) = \sum_n (-1)^n c_n = \sum_n (-1)^n b_n,$$
con $b_n$ los números de Betti. Es un invariante topológico (y homotópico).

**Ejemplos y propiedades:**

1. Cada estructura CW del mismo espacio da el mismo $\chi$, que puede calcularse contando celdas.
2. La esfera $S^n$ tiene una $0$-celda y una $n$-celda: $\chi(S^n) = 1 + (-1)^n$.
3. El toro $T^2$ con $V=1$, $E=2$, $F=1$ da $\chi = 1-2+1 = 0$.
4. La superficie de género $g$ cumple $\chi = 2 - 2g$; el proyectivo real $\mathbb{RP}^2$ tiene $\chi = 1$.

**Mini-ejemplo.** El cubo, homeomorfo a $S^2$, tiene $V=8$, $E=12$, $F=6$, luego $\chi = 8-12+6 = 2$, en coincidencia con $\chi(S^2)$.

## Ejercicios (20)

### Nivel 1 · fundamentos

1. Define cuándo dos aplicaciones continuas $f, g: X \to Y$ son homótopas.
2. ¿Es contráctil $\mathbb{R}^n$? Justifica.
3. ¿Cuál es $\pi_1(S^1)$?
4. ¿Es simplemente conexo $S^2$?
5. Enuncia el teorema de Van Kampen.

### Nivel 2 · cálculo directo

6. Calcula $\pi_1(S^1 \times S^1)$.
7. Calcula $\pi_1$ de la figura 8 ($S^1 \vee S^1$).
8. Calcula $\pi_1(\mathbb{RP}^2)$.
9. Describe la cubierta universal de $S^1$.
10. Calcula $H_0$, $H_1$ y $H_2$ de $S^1$.

### Nivel 3 · técnicas

11. Usa Van Kampen para calcular $\pi_1(S^2)$.
12. Calcula $\pi_1$ del toro menos un punto.
13. Calcula la homología de $S^2$.
14. Calcula $\chi(T^2)$ contando celdas de una estructura CW.
15. Explica la relación entre $H_1(X)$ y $\pi_1(X)$.

### Nivel 4 · retos

16. Da una presentación de $\pi_1$ de la botella de Klein y muestra que no es abeliano.
17. Describe la correspondencia entre cubiertas de $S^1$ y subgrupos de $\mathbb{Z}$.
18. Demuestra que $\chi = 2 - 2g$ para la superficie orientable de género $g$.
19. Calcula la homología de $\mathbb{RP}^2$ e interpreta su torsión.
20. Demuestra que $S^1$ no es contráctil usando $\pi_1$.

## Respuestas

1. Si existe $H: X \times [0,1] \to Y$ continua con $H(x,0)=f(x)$ y $H(x,1)=g(x)$.

2. Sí: $H(x,t) = (1-t)x$ deforma todo $\mathbb{R}^n$ al punto $0$.

3. $\pi_1(S^1) \cong \mathbb{Z}$.

4. Sí: $\pi_1(S^2) = 0$, es simplemente conexa.

5. Si $X = U \cup V$ con $U$, $V$ y $U\cap V$ conexos por caminos, entonces $\pi_1(X) \cong \pi_1(U) *_{\pi_1(U\cap V)} \pi_1(V)$.

6. $\pi_1(S^1 \times S^1) \cong \mathbb{Z} \times \mathbb{Z} = \mathbb{Z}^2$.

7. $\pi_1(S^1 \vee S^1) \cong F_2$, el grupo libre de rango $2$.

8. $\pi_1(\mathbb{RP}^2) \cong \mathbb{Z}/2$.

9. $p:\mathbb{R} \to S^1$, $t \mapsto e^{2\pi i t}$; $\mathbb{R}$ es simplemente conexo.

10. $H_0 = \mathbb{Z}$, $H_1 = \mathbb{Z}$, $H_2 = 0$.

11. $S^2 = U \cup V$ con dos hemisferios contráctiles y $U \cap V$ contráctil: $\pi_1(S^2) = 0 * 0 = 0$.

12. El toro menos un punto se retrae a $S^1 \vee S^1$, luego $\pi_1 = F_2$.

13. $H_0 = \mathbb{Z}$, $H_1 = 0$, $H_2 = \mathbb{Z}$.

14. $V = 1$, $E = 2$, $F = 1$: $\chi = 1 - 2 + 1 = 0$.

15. $H_1(X) \cong \pi_1(X)^{\mathrm{ab}}$, la abelianización de $\pi_1(X)$.

16. $\pi_1(K) = \langle a, b \mid aba^{-1}b = 1\rangle$, es decir $aba^{-1} = b^{-1}$. En $S_3$, con $a=(12)$ y $b=(123)$, se cumple $aba^{-1}=b^{-1}$; esto define un homomorfismo sobreyectivo $G \to S_3$, y como $S_3$ no es abeliano, $G$ tampoco lo es.

17. Los subgrupos de $\mathbb{Z}$ son $n\mathbb{Z}$ con $n \ge 0$. El subgrupo $n\mathbb{Z}$ corresponde a la cubierta de $n$ hojas $S^1 \to S^1$, $z \mapsto z^n$; el subgrupo $\{0\}$ corresponde a la cubierta universal $\mathbb{R} \to S^1$.

18. La superficie de género $g$ admite una estructura CW con $1$ vértice, $2g$ aristas y $1$ cara, luego $\chi = 1 - 2g + 1 = 2 - 2g$. Coincide con $b_0 - b_1 + b_2 = 1 - 2g + 1$.

19. $H_0(\mathbb{RP}^2) = \mathbb{Z}$, $H_1(\mathbb{RP}^2) = \mathbb{Z}/2$, $H_2(\mathbb{RP}^2) = 0$. La torsión $\mathbb{Z}/2$ refleja la no orientabilidad.

20. Si $S^1$ fuera contráctil, $\pi_1(S^1)$ sería trivial; pero $\pi_1(S^1) = \mathbb{Z} \neq 0$. Por tanto no es contráctil.
