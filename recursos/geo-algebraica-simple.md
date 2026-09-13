# Geometría algebraica

Área **Geometría y topología** · Nivel **Univ 5** · *Variedades algebraicas, ideales y curvas.*

La geometría algebraica estudia los conjuntos de ceros de polinomios usando el álgebra conmutativa como herramienta. La clave es la dualidad entre **geometría** (conjuntos de puntos) y **álgebra** (ideales y anillos).

## Variedades afines

Sea $\mathbb{K}$ un cuerpo. Una **variedad algebraica afín** es el conjunto de ceros comunes de una familia de polinomios:
$$V(S) = \{p \in \mathbb{K}^n : f(p) = 0 \; \forall f \in S\}, \qquad S \subseteq \mathbb{K}[x_1,\ldots,x_n].$$

Recíprocamente, para $V \subseteq \mathbb{K}^n$ se define su **ideal**:
$$I(V) = \{f \in \mathbb{K}[x_1,\ldots,x_n] : f(p) = 0 \; \forall p \in V\}.$$

**Propiedades básicas:**

1. $V(1) = \emptyset$ y $V(0) = \mathbb{K}^n$ (el espacio afín $\mathbb{A}^n$).
2. $V(S)$ solo depende del ideal generado por $S$.
3. $V\!\left(\sum_\alpha I_\alpha\right) = \bigcap_\alpha V(I_\alpha)$ y $V(I \cap J) = V(I) \cup V(J)$.

**Ejemplos:** las rectas y las cónicas en $\mathbb{A}^2$; la esfera $x^2 + y^2 + z^2 = 1$; la cúbica $y^2 = x^3 - x$.

**Mini-ejemplo.** $V(x^2 - y^2) = V(x-y) \cup V(x+y)$: la unión de las dos rectas $y = x$ e $y = -x$.

## El Nullstellensatz y la correspondencia

Sobre un cuerpo **algebraicamente cerrado** $\mathbb{K}$ (por ejemplo $\mathbb{C}$), el **teorema de los ceros** de Hilbert relaciona ideales y variedades:
$$I(V(I)) = \sqrt{I}, \qquad \sqrt{I} = \{f : f^m \in I \text{ para algún } m \geq 1\}.$$

**Correspondencia (dualidad de la disciplina):**

1. Ideales **radicales** $\longleftrightarrow$ variedades.
2. Ideales **maximales** $\longleftrightarrow$ puntos.
3. Ideales **primos** $\longleftrightarrow$ subvariedades **irreducibles**.
4. La variedad $V$ es irreducible si y solo si $I(V)$ es primo.

**Consecuencia.** Toda cadena descendente de variedades se estabiliza (el anillo de polinomios es noetheriano, teorema de la base de Hilbert).

**Mini-ejemplo.** $(\mathbb{C}[x])$ es un dominio de ideales principales; sus maximales son $(x-a)$ con $a \in \mathbb{C}$, en correspondencia con los puntos de $\mathbb{A}^1$.

## Anillo de coordenadas y morfismos

El **anillo de coordenadas** de una variedad afín $V$ recoge las funciones polinómicas sobre ella:
$$A(V) = \mathbb{K}[x_1,\ldots,x_n]/I(V).$$

Dos polinomios definen la misma función si difieren en un elemento de $I(V)$.

Un **morfismo** $F: V \to W \subseteq \mathbb{K}^m$ es una aplicación dada por polinomios $F = (f_1,\ldots,f_m)$ que lleva $V$ dentro de $W$. Induce un homomorfismo de anillos en **sentido contrario**:
$$F^*: A(W) \to A(V), \qquad F^*(\varphi) = \varphi \circ F.$$

Es una correspondencia **contravariante**: la categoría de variedades afines es equivalente (opuesta) a la de álgebras reducidas y finitamente generadas sobre $\mathbb{K}$.

**Mini-ejemplo.** La aplicación $t \mapsto (t, t^2)$ identifica $\mathbb{A}^1$ con la parábola $V(y - x^2)$; de hecho $A(V(y-x^2)) \cong \mathbb{K}[x]$.

## Curvas algebraicas y género

Una **curva** es una variedad de dimensión $1$. Las curvas proyectivas suaves se clasifican por un invariante entero, el **género** $g$ (número de "agujeros" de la superficie de Riemann asociada):

1. $g = 0$: rectas y cónicas (la esfera de Riemann $\mathbb{P}^1$).
2. $g = 1$: curvas elípticas.
3. $g \geq 2$: curvas generales.

Para una **curva plana suave** de grado $d$:
$$g = \frac{(d-1)(d-2)}{2}.$$

**Ejemplos.** Cónica ($d=2$): $g = 0$. Cúbica ($d=3$): $g = 1$. Cuártica ($d=4$): $g = 3$.

**Mini-ejemplo.** La curva elíptica $y^2 = x^3 - x$ es suave y de grado $3$, luego $g = 1$; además sus puntos forman un **grupo abeliano** (base de la criptografía ECC).

## Divisores y Riemann-Roch

Un **divisor** es una suma formal de puntos con coeficientes enteros:
$$D = \sum_i n_i p_i, \qquad \deg D = \sum_i n_i.$$

$D$ registra ceros (coeficientes positivos) y polos (negativos) de funciones racionales. El **espacio de Riemann-Roch** es
$$L(D) = \{f \text{ racional sobre } X : \operatorname{div}(f) + D \geq 0\} \cup \{0\}.$$

**Teorema de Riemann-Roch.** Para una curva proyectiva suave de género $g$ y un divisor $D$:
$$\dim L(D) - \dim L(K - D) = \deg D - g + 1,$$
donde $K$ es el divisor canónico, con $\deg K = 2g - 2$.

**Consecuencias:** si $\deg D > 2g - 2$, entonces $\dim L(D) = \deg D - g + 1$. Este resultado relaciona género, grado y dimensiones, y culmina en Riemann-Roch-Hirzebruch.

**Mini-ejemplo.** En $\mathbb{P}^1$ ($g=0$) con $\deg D = 3$: como $\deg K = -2$, se tiene $\deg(K-D) = -5 < 0$ y $L(K-D) = 0$, luego $\dim L(D) = \deg D - g + 1 = 4$ (las funciones racionales con polos acotados por $D$ forman un espacio de dimensión $4$).

## Variedades proyectivas, Bézout y haces

El **espacio proyectivo** $\mathbb{P}^n$ se obtiene al añadir puntos al infinito, de modo que las rectas se cierran. Las variedades proyectivas son cerradas en $\mathbb{P}^n$ y su intersección es "perfecta", lo que da el **teorema de Bézout**:
$$\sum_p I_p(F, G) = \deg F \cdot \deg G,$$
donde $I_p$ es la multiplicidad de intersección en $p$. En particular, dos curvas planas proyectivas de grados $d_1$ y $d_2$ sin componentes comunes se cortan en exactamente $d_1 d_2$ puntos contando multiplicidad y puntos complejos.

La **teoría de haces** asigna datos locales compatibles (funciones, formas diferenciales) a cada abierto. Un **haz** $\mathcal{F}$ sobre $X$ codifica información local; su **cohomología** $H^i(X, \mathcal{F})$ mide las obstrucciones a extender esos datos globalmente.

**Mini-ejemplo.** En $\mathbb{P}^1$, todo haz de líneas $\mathcal{O}(d)$ tiene grado $d$; los haces de líneas sobre una curva se clasifican por el grado. Además $H^1(\mathbb{P}^1, \mathcal{O}) = 0$.

## Esquemas (panorama)

Los **esquemas** de Grothendieck generalizan las variedades de dos maneras: admiten coordenadas **nilpotentes** (información infinitesimal) y se definen sobre un anillo base arbitrario, no solo sobre un cuerpo.

El esquema afín asociado a un anillo $R$ es su **espectro**:
$$\operatorname{Spec}(R) = \{\mathfrak{p} \subseteq R : \mathfrak{p} \text{ es ideal primo}\},$$
equipado con la topología de Zariski y un haz de anillos estructural. Los esquemas generales se obtienen **pegando** esquemas afines.

**Ventajas:** unifican la geometría algebraica clásica con la aritmética de $\mathbb{Z}$, permiten definir familias y deformaciones, e integran los nilpotentes que el Nullstellensatz radical ignora.

**Mini-ejemplo.** $\operatorname{Spec}(\mathbb{Z})$ tiene un punto cerrado por cada primo $p$ (el ideal $(p)$) y un **punto genérico** (el ideal $(0)$): es el modelo geométrico de la aritmética.

## Ejercicios (20)

### Nivel 1 · Fundamentos

1. Describe $V(x^2 + y^2 - 1)$ en $\mathbb{R}^2$.
2. ¿Es el ideal $(x^2)$ radical en $\mathbb{C}[x]$?
3. Calcula el género de una cónica plana suave.
4. Halla el anillo de coordenadas de $V(y - x^3)$.
5. ¿Cuántos puntos al infinito tiene la parábola $y = x^2$?

### Nivel 2 · Intermedio

6. Halla el anillo de coordenadas de la hipérbola $xy = 1$.
7. Calcula el género de una cuártica plana suave.
8. ¿Cuántos puntos de intersección (Bézout) tienen dos cónicas genéricas?
9. Describe $V(x^2 - y, y^2 - x)$ en $\mathbb{C}^2$.
10. ¿Es $\mathbb{C}[x,y]$ un anillo noetheriano?

### Nivel 3 · Avanzado

11. Calcula el género de una quíntica plana suave.
12. Calcula el género de la curva elíptica $y^2 = x^3 - x$.
13. Para una curva plana suave de grado $d$, ¿qué grado da género $3$?
14. Riemann-Roch con $g = 0$ y $\deg D = 2$: calcula $\dim L(D)$.
15. ¿Cuál es el grado del divisor de una función racional no nula sobre una curva proyectiva suave?

### Nivel 4 · Retos

16. Bézout: ¿en cuántos puntos se cortan una cúbica y una recta (contando multiplicidades y en $\mathbb{C}$)?
17. Calcula el género de una séxtica plana suave.
18. ¿Cuál es el punto genérico de $\operatorname{Spec}(\mathbb{Z})$?
19. Riemann-Roch con $g = 1$ y $\deg D = 1$: calcula $\dim L(D)$.
20. Intersección de $y = x^2$ con $y = 0$ contada con multiplicidad (Bézout).

## Respuestas

1. La circunferencia unidad $\{(x,y) : x^2 + y^2 = 1\}$.
2. No; su radical es $\sqrt{(x^2)} = (x)$.
3. $g = \dfrac{(2-1)(2-2)}{2} = 0$.
4. $A(V) = \mathbb{C}[x,y]/(y - x^3) \cong \mathbb{C}[x]$.
5. Uno, el punto al infinito en la dirección vertical.
6. $\mathbb{C}[x,y]/(xy - 1) \cong \mathbb{C}[x, x^{-1}]$.
7. $g = \dfrac{(4-1)(4-2)}{2} = 3$.
8. $2 \cdot 2 = 4$ puntos (contando multiplicidades y puntos complejos).
9. $V = \{(0,0), (1,1)\}$.
10. Sí, por el teorema de la base de Hilbert.
11. $g = \dfrac{(5-1)(5-2)}{2} = 6$.
12. $g = 1$ (cúbica suave).
13. $d = 4$, pues $\dfrac{(4-1)(4-2)}{2} = 3$.
14. $\dim L(D) = \deg D - g + 1 = 3$.
15. Cero: el grado de un divisor principal es $0$.
16. $3 \cdot 1 = 3$ puntos.
17. $g = \dfrac{(6-1)(6-2)}{2} = 10$.
18. El ideal $(0)$, que corresponde al punto genérico.
19. $\dim L(D) = \deg D - g + 1 = 1$.
20. $2 \cdot 1 = 2$, concentrados en el origen como un punto de multiplicidad $2$.
