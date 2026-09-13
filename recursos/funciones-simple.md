# Funciones

**Área:** Funciones, trigonometría y geometría · **Nivel:** 10°–11°

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

## Dominio, codominio y rango

El **dominio** es el conjunto de entradas permitidas y el **rango** (o imagen) el conjunto de salidas alcanzadas. Para hallar el dominio se detectan las operaciones prohibidas:

- **División por cero:** en $f(x) = \dfrac{1}{x - 2}$ el dominio es $\mathbb{R} \setminus \{2\}$.
- **Raíces pares de negativos:** en $f(x) = \sqrt{x - 3}$ el dominio es $[3, \infty)$.
- **Logaritmos de no positivos:** en $f(x) = \ln(x + 1)$ el dominio es $(-1, \infty)$.

Para el rango se despeja $x$ en función de $y$ o se lee la gráfica.

**Mini-ejemplo.** $f(x) = \sqrt{4 - x^2}$ exige $-2 \le x \le 2$; como la raíz nunca es negativa y el máximo es $2$ en $x = 0$, el rango es $[0, 2]$.

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

## Transformaciones de gráficas

Partiendo de una gráfica base se aplica:

$$g(x) = a \cdot f\big(b(x - h)\big) + k$$

- $+ k$: desplaza verticalmente $k$ unidades.
- $x - h$: desplaza horizontalmente $h$ unidades (a la derecha si $h > 0$).
- $a$: estira verticalmente si $|a| > 1$, comprime si $0 < |a| < 1$; si $a < 0$ refleja sobre el eje $x$.
- $b$: comprime horizontalmente si $|b| > 1$; si $b < 0$ refleja sobre el eje $y$.

**Mini-ejemplo.** $g(x) = (x - 2)^2 + 3$ es la parábola $x^2$ desplazada 2 a la derecha y 3 arriba; su vértice es $(2, 3)$.

**Mini-ejemplo.** $g(x) = -\sqrt{x + 1}$ desplaza la raíz 1 a la izquierda y la refleja; dominio $[-1, \infty)$, rango $(-\infty, 0]$.

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

### Nivel 1 · Dominio y rango

1. Halla el dominio de $f(x) = \dfrac{1}{x - 4}$.
2. Halla el dominio de $f(x) = \sqrt{x - 2}$.
3. Halla el rango de $f(x) = x^2 - 3$.
4. Halla el dominio de $f(x) = \dfrac{\sqrt{x + 1}}{x}$.
5. Halla el rango de $f(x) = \sqrt{x + 2}$.

### Nivel 2 · Evaluación, paridad y tipos

6. Si $f(x) = 3x - 1$, calcula $f(4)$.
7. Determina si $f(x) = x^3 - x$ es par, impar o ninguna.
8. Determina si $f(x) = x^4 + 1$ es par, impar o ninguna.
9. Clasifica $f(x) = -2x + 5$ (constante, lineal, cuadrática, ...).
10. Clasifica $f(x) = x^2 - 6x + 5$.

### Nivel 3 · Composición

11. Con $f(x) = x + 3$ y $g(x) = 2x$, halla $(f \circ g)(x)$.
12. Con $f(x) = x + 3$ y $g(x) = 2x$, halla $(g \circ f)(x)$.
13. Con $f(x) = x^2$ y $g(x) = x + 1$, halla $(f \circ g)(x)$.
14. Con $f(x) = \sqrt{x}$ y $g(x) = x - 4$, halla el dominio de $f \circ g$.
15. Con $f(x) = 2x$ y $g(x) = x - 1$, calcula $(f \circ g)(3)$.

### Nivel 4 · Inversa y transformaciones

16. Halla la inversa de $f(x) = x - 7$.
17. Halla la inversa de $f(x) = 4x + 1$.
18. Halla la inversa de $f(x) = \dfrac{x - 3}{2}$.
19. Halla el vértice de $g(x) = (x + 1)^2 - 4$.
20. Describe la transformación de $g(x) = \sqrt{x} + 2$ respecto a $\sqrt{x}$.

## Respuestas

1. $\mathbb{R} \setminus \{4\}$
2. $[2, \infty)$
3. $[-3, \infty)$
4. $[-1, 0) \cup (0, \infty)$
5. $[0, \infty)$
6. $f(4) = 11$
7. Impar
8. Par
9. Lineal
10. Cuadrática
11. $(f \circ g)(x) = 2x + 3$
12. $(g \circ f)(x) = 2x + 6$
13. $(f \circ g)(x) = (x + 1)^2$
14. $[4, \infty)$
15. $(f \circ g)(3) = 4$
16. $f^{-1}(x) = x + 7$
17. $f^{-1}(x) = \dfrac{x - 1}{4}$
18. $f^{-1}(x) = 2x + 3$
19. $(-1, -4)$
20. La gráfica de $\sqrt{x}$ desplazada 2 unidades hacia arriba.
