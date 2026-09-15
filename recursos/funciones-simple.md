# Funciones

**Área:** Funciones y trigonometría · **Nivel:** 10°–11°

Dominio, rango, composición, inversa y tipos básicos.

## ¿Qué es una función?

Una **función** es una regla que asigna a cada entrada **exactamente una** salida. Se escribe $f: A \to B$, donde $A$ es el dominio y $B$ el codominio; $y = f(x)$ distingue la variable independiente $x$ de la dependiente $y$.

Una función no es solo una fórmula: también importa el conjunto donde está definida. Así, $f(x) = x^2$ con dominio $\mathbb{R}$ y $f(x) = x^2$ con dominio $[0, \infty)$ son funciones distintas, aunque compartan la regla.

**Mini-ejemplo.** La regla "al número se le asigna su doble más uno" se escribe $f(x) = 2x + 1$ y cumple $f(3) = 7$.

## Representaciones de una función

Una misma función admite varias representaciones y pasar de una a otra es una destreza central:

1. **Verbal:** "a cada número se le asigna su doble más uno".
2. **Algebraica:** $f(x) = 2x + 1$.
3. **Tabla:** pares ordenados $(x, f(x))$.
4. **Gráfica:** el conjunto de puntos $(x, f(x))$ en el plano.

**Mini-ejemplo.** Para $f(x) = x^2 - 1$: $f(-2) = 3$, $f(0) = -1$, $f(2) = 3$. La gráfica es una parábola con vértice en $(0, -1)$.

La **prueba de la recta vertical** dice que una gráfica representa una función si ninguna recta vertical la corta más de una vez. La circunferencia $x^2 + y^2 = 1$ no es función; la parábola $y = x^2$ sí lo es.

## Funciones básicas

Estas funciones son los ladrillos de las demás y conviene reconocerlas de inmediato:

- **Constante:** $f(x) = c$; recta horizontal, rango $\{c\}$.
- **Lineal:** $f(x) = mx + b$; recta de pendiente $m$.
- **Cuadrática:** $f(x) = ax^2 + bx + c$; parábola con vértice en $x = -\dfrac{b}{2a}$.
- **Cúbica:** $f(x) = x^3$; creciente en todo $\mathbb{R}$.
- **Valor absoluto:** $f(x) = |x|$; forma de V con vértice en el origen.
- **Raíz cuadrada:** $f(x) = \sqrt{x}$; dominio $[0, \infty)$, creciente.
- **Racional:** $f(x) = \dfrac{1}{x}$; hipérbola con asíntotas en los ejes.
- **Por partes:** reglas distintas por intervalos, como $f(x) = |x|$.

**Mini-ejemplo.** $f(x) = -2x + 5$ es lineal con pendiente $-2$; corta el eje $y$ en $5$.

**Sus gráficas.** La **lineal** $y = mx$ y la **afín** $y = mx + b$ son rectas: $m$ es la pendiente y $b$ el corte con el eje $y$.

:::fig func f=x xmin=-5 xmax=5 label=y%20%3D%20x caption=Función%20lineal%3A%20%24y%3Dx%24

:::fig func f=2*x+1 xmin=-5 xmax=5 label=y%20%3D%202x%2B1 caption=Función%20afín%3A%20%24y%3D2x%2B1%24

La **cuadrática** $y = ax^2 + bx + c$ dibuja una parábola: abre hacia arriba si $a > 0$, hacia abajo si $a < 0$, con vértice en $x = -\dfrac{b}{2a}$.

:::fig func f=x^2 xmin=-4 xmax=4 label=y%20%3D%20x%C2%B2 caption=Parábola%3A%20%24y%3Dx%5E2%24

:::fig func f=x^2-4*x+3 xmin=-2 xmax=6 label=y%20%3D%20x%C2%B2-4x%2B3 caption=Parábola%20con%20raíces%20en%201%20y%203%3A%20%24y%3Dx%5E2-4x%2B3%24

Otras básicas: el **valor absoluto** $y = |x|$ forma una V, la **raíz cuadrada** $y = \sqrt{x}$ crece y se aplana, y la **racional** $y = \dfrac{1}{x}$ es una hipérbola con asíntotas en los ejes.

:::fig func f=abs(x) xmin=-4 xmax=4 label=y%20%3D%20%7Cx%7C caption=Valor%20absoluto%3A%20%24y%3D%7Cx%7C%24

:::fig func f=sqrt(x) xmin=0 xmax=6 label=y%20%3D%20%E2%88%9Ax caption=Raíz%20cuadrada%3A%20%24y%3D%5Csqrt%7Bx%7D%24

:::fig func f=1/x xmin=-5 xmax=5 ymin=-5 ymax=5 label=y%20%3D%201%2Fx caption=Racional%3A%20%24y%3D%5Cfrac%7B1%7D%7Bx%7D%24

## Composición de funciones

La **composición** aplica una función y luego otra:

$$(f \circ g)(x) = f\big(g(x)\big)$$

Su dominio son los $x$ del dominio de $g$ tales que $g(x)$ pertenece al dominio de $f$. La composición **no es conmutativa**.

**Mini-ejemplo.** Con $f(x) = \sqrt{x}$ y $g(x) = x - 3$: $(f \circ g)(x) = \sqrt{x - 3}$ con dominio $[3, \infty)$, mientras que $(g \circ f)(x) = \sqrt{x} - 3$ con dominio $[0, \infty)$.

**Mini-ejemplo.** Con $f(x) = 3x - 2$ y $g(x) = x^2$: $(f \circ g)(2) = f(4) = 10$ y $(g \circ f)(2) = g(4) = 16$.

## Función inversa

La inversa $f^{-1}$ deshace el efecto de $f$:

$$f\big(f^{-1}(x)\big) = x, \qquad f^{-1}\big(f(x)\big) = x$$

Existe solo si $f$ es **inyectiva**; gráficamente es el reflejo sobre la recta $y = x$. Método: escribir $y = f(x)$, intercambiar $x$ y $y$, despejar $y$ y renombrar.

**Mini-ejemplo.** Para $f(x) = 2x + 3$: $y = 2x + 3 \Rightarrow x = 2y + 3 \Rightarrow y = \dfrac{x - 3}{2}$, luego $f^{-1}(x) = \dfrac{x - 3}{2}$.

A veces hay que **restringir el dominio**: $f(x) = x^2$ no es inyectiva en $\mathbb{R}$, pero sí en $[0, \infty)$, donde su inversa es $\sqrt{x}$.

## Inyectiva, sobreyectiva y biyectiva

- **Inyectiva:** entradas distintas dan salidas distintas; es decir, $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$. Pasa la prueba de la recta horizontal.
- **Sobreyectiva:** todo elemento del codominio es alcanzado.
- **Biyectiva:** cumple ambas; entonces existe la inversa $f^{-1}: B \to A$.

**Mini-ejemplo.** $f(x) = x^3$ con $f: \mathbb{R} \to \mathbb{R}$ es biyectiva y su inversa es $f^{-1}(x) = \sqrt[3]{x}$. En cambio $f(x) = x^2$ con $f: \mathbb{R} \to \mathbb{R}$ no es inyectiva ni sobreyectiva.

## Ejercicios (20)

### Nivel 1 · Evaluación y tipos

1. Si $f(x) = x^2 + 1$, calcula $f(0)$ y $f(2)$.
2. Halla el vértice de $f(x) = x^2 - 2x - 3$.
3. Clasifica $f(x) = -3x + 2$ y da su pendiente.
4. Con $f(x) = x^2$ y $g(x) = x + 1$, halla $(f \circ g)(x)$.
5. Halla las raíces de $f(x) = x^2 - 9$.

### Nivel 2 · Evaluación y tipos

6. Si $f(x) = 3x - 1$, calcula $f(4)$.
7. Para $f(x) = 2x - 3$, ¿cuál es la pendiente y el corte con el eje $y$?
8. Halla las raíces de $f(x) = x^2 - 4$.
9. Clasifica $f(x) = -2x + 5$ (constante, lineal, cuadrática, ...).
10. Clasifica $f(x) = x^2 - 6x + 5$.

### Nivel 3 · Composición

11. Con $f(x) = x + 3$ y $g(x) = 2x$, halla $(f \circ g)(x)$.
12. Con $f(x) = x + 3$ y $g(x) = 2x$, halla $(g \circ f)(x)$.
13. Con $f(x) = x^2$ y $g(x) = x + 1$, halla $(f \circ g)(x)$.
14. Con $f(x) = x^2$ y $g(x) = x - 4$, halla $(f \circ g)(x)$.
15. Con $f(x) = 2x$ y $g(x) = x - 1$, calcula $(f \circ g)(3)$.

### Nivel 4 · Inversa y cuadráticas

16. Halla la inversa de $f(x) = x - 7$.
17. Halla la inversa de $f(x) = 4x + 1$.
18. Halla la inversa de $f(x) = \dfrac{x - 3}{2}$.
19. Halla el vértice de $g(x) = (x + 1)^2 - 4$.
20. Halla el vértice de $g(x) = (x + 1)^2 - 4$.

## Respuestas

1. $f(0) = 1$, $f(2) = 5$
2. $(1, -4)$
3. Lineal (afín), pendiente $-3$
4. $(f \circ g)(x) = (x + 1)^2$
5. $x = \pm 3$
6. $f(4) = 11$
7. Pendiente $2$, corte en $-3$
8. $x = -2$ y $x = 2$
9. Lineal
10. Cuadrática
11. $(f \circ g)(x) = 2x + 3$
12. $(g \circ f)(x) = 2x + 6$
13. $(f \circ g)(x) = (x + 1)^2$
14. $(f \circ g)(x) = (x - 4)^2$
15. $(f \circ g)(3) = 4$
16. $f^{-1}(x) = x + 7$
17. $f^{-1}(x) = \dfrac{x - 1}{4}$
18. $f^{-1}(x) = 2x + 3$
19. $(-1, -4)$
20. $(-1, -4)$
