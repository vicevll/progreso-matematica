# Geometría proyectiva

**Nivel:** Univ 3–5 · **Área:** Funciones, trigonometría y geometría

Transformaciones, puntos al infinito y dualidad.

## El plano proyectivo y los puntos al infinito
En el plano euclidiano dos rectas paralelas nunca se cortan. La geometría proyectiva corrige esa excepción añadiendo un **punto al infinito** por cada dirección: todas las rectas paralelas de esa dirección se cortan allí.

El **plano proyectivo** $\mathbb{P}^2$ es el plano euclidiano más la **recta del infinito**, formada por todos esos puntos.

Una consecuencia elegante es la simetría total:

1. Dos puntos distintos determinan una única recta.
2. Dos rectas distintas se cortan en exactamente un punto, sin excepciones.

**Mini-ejemplo.** Los rieles de una vía férrea parecen juntarse en el horizonte: ese punto de fuga es el punto al infinito de la dirección de los rieles. La línea del horizonte es la imagen de la recta del infinito.

## Coordenadas homogéneas
Un punto de $\mathbb{P}^2$ se escribe con **coordenadas homogéneas** $(x:y:z)$, definidas salvo escala:
$$(x:y:z) \sim (\lambda x:\lambda y:\lambda z), \qquad \lambda \neq 0$$

La relación con el plano afín es inmediata:

1. Si $z \neq 0$, el punto es afín y vale $\left(\dfrac{x}{z}, \dfrac{y}{z}\right)$.
2. Si $z = 0$, es un punto al infinito en la dirección $(x, y)$.

**Mini-ejemplo.** El punto afín $(2,3)$ se escribe $(2:3:1)$ o $(4:6:2)$. El punto al infinito de la dirección horizontal es $(1:0:0)$.

**Mini-ejemplo.** El punto $(6:-3:3)$ representa a $\left(\dfrac{6}{3}, \dfrac{-3}{3}\right) = (2,-1)$.

## Rectas, incidencia y dualidad
Una recta proyectiva es el conjunto de puntos que satisface una ecuación lineal homogénea:
$$ax + by + cz = 0 \qquad \longleftrightarrow \qquad l = (a:b:c)$$

La **incidencia** se comprueba sustituyendo: el punto $P=(x:y:z)$ está en la recta $l=(a:b:c)$ si $ax+by+cz=0$.

Dos operaciones resuelven casi todo:

1. **Recta por dos puntos:** $l = P \times Q$ (producto vectorial).
2. **Intersección de dos rectas:** $X = l \times m$ (producto vectorial).

La **dualidad** intercambia el papel de puntos y rectas:

1. Al punto $(a:b:c)$ le corresponde la recta dual $ax+by+cz=0$.
2. Al enunciado "dos puntos determinan una recta" le corresponde "dos rectas determinan un punto".

**Mini-ejemplo.** La recta por $P=(1:2:1)$ y $Q=(2:-1:1)$ es
$$P \times Q = (3:1:-5) \;\Longrightarrow\; 3x + y - 5z = 0$$
Comprobación: $3(1)+2-5(1)=0$ y $3(2)-1-5(1)=0$.

## Transformaciones proyectivas (homografías)
Una **homografía** es una transformación de $\mathbb{P}^2$ dada por una matriz invertible $3 \times 3$:
$$\begin{pmatrix} x' \\ y' \\ z' \end{pmatrix} = H \begin{pmatrix} x \\ y \\ z \end{pmatrix}$$

Las homografías conservan la incidencia: puntos van a puntos, rectas a rectas y las intersecciones se preservan. Pueden clasificarse por lo que conservan:

1. **Rígidas:** distancias y ángulos.
2. **Semejanzas:** ángulos y proporciones.
3. **Afines:** paralelismo y razón de áreas.
4. **Proyectivas:** solo incidencia y razón cruzada.

**Mini-ejemplo.** Con $H=\begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$, el punto $(1:1:1)$ se transforma en
$$H(1:1:1)^T = (3:1:1), \qquad \text{afín } (3,1)$$

## La razón cruzada
La **razón cruzada** de cuatro puntos colineales $A, B, C, D$ es
$$(A,B;C,D) = \frac{AC/BC}{AD/BD}$$
con distancias dirigidas. En coordenadas afines $a, b, c, d$ equivale a
$$(A,B;C,D) = \frac{(c-a)(d-b)}{(c-b)(d-a)}$$

Es el **invariante fundamental** de la geometría proyectiva: no cambia bajo ninguna homografía, aunque las distancias y los ángulos sí.

**Mini-ejemplo.** Para $A=0$, $B=1$, $C=2$, $D=3$:
$$(A,B;C,D) = \frac{(2-0)(3-1)}{(2-1)(3-0)} = \frac{2 \cdot 2}{1 \cdot 3} = \frac{4}{3}$$

**Mini-ejemplo.** Si $D \to \infty$, entonces $(A,B;C,\infty) = \dfrac{AC}{BC} = \dfrac{c-a}{c-b}$.

## Teoremas clásicos: Desargues, Pascal y Pappus
Estos resultados dependen solo de la incidencia, por lo que sobreviven a cualquier proyección.

1. **Teorema de Desargues:** dos triángulos están en perspectiva desde un punto si y solo si las intersecciones de sus lados correspondientes son colineales.
2. **Teorema de Pascal:** para seis puntos en una cónica, las intersecciones de los tres pares de lados opuestos del hexágono inscrito son colineales (recta de Pascal).
3. **Teorema de Pappus:** con seis puntos alternados en dos rectas, las tres intersecciones correspondientes son colineales.

**Mini-ejemplo.** El dual de Pascal es el teorema de Brianchon, sobre hexágonos circunscritos a una cónica.

## Cónicas en el plano proyectivo
Todas las cónicas son proyectivamente equivalentes: elipse, parábola e hipérbola solo se distinguen por su posición respecto a la recta del infinito.

Una cónica se describe con una forma cuadrática homogénea:
$$Ax^2 + Bxy + Cy^2 + Dxz + Eyz + Fz^2 = 0$$

Su tipo se decide en $z = 0$:

1. **Elipse:** no toca la recta del infinito.
2. **Parábola:** es tangente a ella (un punto doble).
3. **Hipérbola:** la corta en dos puntos reales.

**Mini-ejemplo.** La circunferencia $x^2 + y^2 = 1$ se escribe $x^2 + y^2 - z^2 = 0$; en $z=0$ queda $x^2+y^2=0$, sin solución real, luego es una elipse.

**Mini-ejemplo.** La cónica $y^2 - xz = 0$ corta $z=0$ en $y^2=0$, un punto doble: es una parábola.

## Ejercicios (20)

### Nivel 1 · Coordenadas homogéneas
1. Escribe el punto afín $(5,-2)$ en coordenadas homogéneas.
2. ¿Qué punto afín representa $(8:4:2)$?
3. Halla el punto al infinito de la dirección de la recta $y = 3x - 4$.
4. Escribe $(-3,7)$ en coordenadas homogéneas.
5. ¿Qué punto afín representa $(0:0:5)$?

### Nivel 2 · Incidencia y razón cruzada
1. Halla la recta que pasa por $(1:2:1)$ y $(2:-1:1)$.
2. Halla la intersección de $x + y - z = 0$ y $x - y + 2z = 0$.
3. Calcula la razón cruzada de $A=0$, $B=1$, $C=3$, $D=5$.
4. Halla el punto al infinito de la recta $2x - 5y + 7 = 0$.
5. ¿Están alineados $(1:0:1)$, $(0:1:1)$ y $(1:1:1)$?

### Nivel 3 · Matrices y homografías
1. Aplica $H=\begin{pmatrix} 2 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ al punto $(1:0:1)$.
2. Aplica $H=\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$ al punto $(1:1:1)$.
3. Aplica $H=\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ al punto $(2:1:1)$.
4. Aplica $H=\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ al punto $(2:1:1)$.
5. Clasifica $H=\begin{pmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ como rígida, semejanza, afín o proyectiva.

### Nivel 4 · Dualidad y cónicas
1. Escribe el enunciado dual de "dos puntos determinan una recta".
2. Halla la recta dual del punto $(2:-3:1)$.
3. Clasifica la cónica $x^2 + y^2 - z^2 = 0$ según su corte con $z = 0$.
4. Clasifica la cónica $x^2 - y^2 = 0$ según su corte con $z = 0$.
5. Clasifica la cónica $y^2 - xz = 0$ según su corte con $z = 0$.

## Respuestas
1. $(5:-2:1)$.
2. $(4,2)$.
3. $(1:3:0)$.
4. $(-3:7:1)$.
5. $(0,0)$.
6. $3x + y - 5z = 0$.
7. $(1:-3:-2)$.
8. $6/5$.
9. $(5:2:0)$.
10. No; el determinante es $-1 \neq 0$.
11. $(3:0:1)$; afín $(3,0)$.
12. $(1:1:2)$; afín $\left(\dfrac{1}{2},\dfrac{1}{2}\right)$.
13. $(3:1:1)$; afín $(3,1)$.
14. $(1:2:1)$; afín $(1,2)$.
15. Semejanza (homotecia de razón $3$).
16. "Dos rectas determinan un punto".
17. $2x - 3y + z = 0$.
18. Elipse.
19. Hipérbola.
20. Parábola.
