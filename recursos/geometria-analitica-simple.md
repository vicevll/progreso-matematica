# Geometría analítica
**Guía simple · Funciones, trigonometría y geometría · 10°–11° / Univ 1**
*Recta, cónicas, lugares geométricos y coordenadas polares.*

## 1. El plano cartesiano
La geometría analítica une el álgebra y la geometría: cada punto del plano se identifica con un par ordenado $(x, y)$ y cada figura con una ecuación.

El **plano cartesiano** tiene dos ejes perpendiculares que se cortan en el origen. El eje horizontal es $x$ (abscisas) y el vertical es $y$ (ordenadas). Los ejes dividen el plano en cuatro **cuadrantes**, numerados en sentido antihorario desde el superior derecho.

Una ecuación describe un **lugar geométrico**: el conjunto de todos los puntos que la satisfacen. Un punto pertenece a la figura si al sustituir sus coordenadas la igualdad se cumple.

**Mini-ejemplo.** El punto $(2, -3)$ está en el cuarto cuadrante y no pertenece a la circunferencia $x^2 + y^2 = 4$, porque $2^2 + (-3)^2 = 13 \neq 4$.

## 2. Distancia y punto medio
La **distancia** entre $P_1(x_1, y_1)$ y $P_2(x_2, y_2)$ proviene del teorema de Pitágoras:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

El **punto medio** es el promedio de las coordenadas:
$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

La **división de un segmento en razón** $r$ (de $P_1$ a $P_2$) da el punto:
$$P = \left(\frac{x_1 + r x_2}{1 + r}, \frac{y_1 + r y_2}{1 + r}\right)$$

**Mini-ejemplo.** Para $A(1, 2)$ y $B(4, 6)$: $d = \sqrt{9 + 16} = 5$ y $M = (2.5, 4)$.

## 3. La recta: pendiente y ecuaciones
La **pendiente** mide la inclinación de una recta:
$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\Delta y}{\Delta x}$$

Indica cuánto sube $y$ por cada unidad que avanza $x$: positiva sube, negativa baja, cero es horizontal e indefinida es vertical.

Las formas principales de la ecuación de la recta son:
- **Punto-pendiente:** $y - y_1 = m(x - x_1)$
- **Pendiente-ordenada:** $y = mx + b$
- **General:** $Ax + By + C = 0$

**Mini-ejemplo.** La recta por $(2, 1)$ y $(4, 7)$ tiene $m = \frac{6}{2} = 3$, luego $y - 1 = 3(x - 2)$, es decir $y = 3x - 5$.

## 4. Paralelismo y perpendicularidad
Dadas dos rectas con pendientes $m_1$ y $m_2$:
- Son **paralelas** si $m_1 = m_2$ (nunca se cortan).
- Son **perpendiculares** si $m_1 \cdot m_2 = -1$, es decir $m_2 = -\frac{1}{m_1}$.

Las rectas verticales y horizontales son perpendiculares entre sí, aunque el caso vertical no se captura con la fórmula de pendientes.

**Mini-ejemplo.** La recta perpendicular a $y = 2x + 1$ que pasa por $(4, 1)$ tiene pendiente $-\frac{1}{2}$: $y - 1 = -\frac{1}{2}(x - 4)$.

## 5. La circunferencia
Es el lugar geométrico de los puntos que equidistan de un centro $(h, k)$:
$$(x - h)^2 + (y - k)^2 = r^2$$

En su **forma general** $x^2 + y^2 + Dx + Ey + F = 0$ se reconocen centro y radio **completando cuadrados**.

**Mini-ejemplo.** Para $x^2 + y^2 - 4x + 6y - 12 = 0$: agrupando y completando, $(x - 2)^2 + (y + 3)^2 = 25$. Centro $(2, -3)$ y radio $5$.

## 6. La parábola
Es el lugar geométrico de los puntos que equidistan de un **foco** y una **recta directriz**.

$$(x - h)^2 = 4p(y - k) \quad \text{(abre vertical)}$$
$$(y - k)^2 = 4p(x - h) \quad \text{(abre horizontal)}$$

El vértice es $(h, k)$ y el signo de $p$ indica la dirección de apertura. El foco está a distancia $|p|$ del vértice, sobre el eje, y la directriz a la misma distancia del lado opuesto.

**Mini-ejemplo.** $y = x^2 - 4x + 3 = (x - 2)^2 - 1$ tiene vértice $(2, -1)$; como $4p = 1$, $p = \frac{1}{4}$ y el foco es $(2, -\frac{3}{4})$.

## 7. La elipse y la hipérbola
La **elipse** es el lugar de puntos cuya suma de distancias a dos focos es constante:
$$\frac{(x - h)^2}{a^2} + \frac{(y - k)^2}{b^2} = 1, \qquad c^2 = a^2 - b^2$$
Su excentricidad es $e = \frac{c}{a}$ con $0 \leq e < 1$.

La **hipérbola** es el lugar de puntos cuya diferencia de distancias a dos focos es constante en valor absoluto:
$$\frac{(x - h)^2}{a^2} - \frac{(y - k)^2}{b^2} = 1, \qquad c^2 = a^2 + b^2$$
Sus asíntotas son $y - k = \pm\frac{b}{a}(x - h)$.

**Mini-ejemplo.** En $\frac{x^2}{25} + \frac{y^2}{9} = 1$, $a = 5$, $b = 3$ y $c = 4$: focos $(\pm 4, 0)$ y $e = 0.8$. En $\frac{x^2}{16} - \frac{y^2}{9} = 1$, $c = 5$, focos $(\pm 5, 0)$ y asíntotas $y = \pm\frac{3}{4}x$.

## 8. Coordenadas polares
Un punto se describe por su **distancia al origen** $r$ y un **ángulo** $\theta$:
$$x = r\cos\theta, \qquad y = r\,\text{sen}\,\theta$$
$$r = \sqrt{x^2 + y^2}, \qquad \tan\theta = \frac{y}{x}$$

Los polares simplifican figuras con simetría radial, como la circunferencia $r = a$ o la rosa $r = a\cos(n\theta)$.

**Mini-ejemplo.** $(2, \frac{\pi}{3})$ en polares es $(2\cos 60°, 2\,\text{sen}\,60°) = (1, \sqrt{3})$ en cartesianas.

## Ejercicios (20)
### Nivel 1 — Distancia y punto medio
1. Halla la distancia y el punto medio entre $(-2, 3)$ y $(6, -1)$.
2. Halla la distancia entre $(1, 1)$ y $(4, 5)$.
3. Halla el punto medio entre $(-3, 5)$ y $(7, -1)$.
4. Halla la distancia entre $(0, 0)$ y $(-6, 8)$.
5. Halla el punto que divide el segmento de $(-1, 2)$ a $(5, 8)$ en razón $r = \frac{1}{2}$.

### Nivel 2 — Rectas, paralelismo y perpendicularidad
6. Halla la ecuación de la recta que pasa por $(3, -2)$ con pendiente $4$.
7. Halla la pendiente de la recta que pasa por $(2, 1)$ y $(6, 9)$.
8. Halla la ecuación de la recta que pasa por $(1, 2)$ y $(3, 8)$.
9. Halla la recta perpendicular a $y = -\frac{1}{3}x + 2$ que pasa por $(1, 1)$.
10. Halla la recta paralela a $y = 2x + 3$ que pasa por $(1, 1)$.

### Nivel 3 — Circunferencia y parábola
11. Determina centro y radio de $x^2 + y^2 + 8x - 2y + 8 = 0$.
12. Determina centro y radio de $x^2 + y^2 - 6x + 4y - 12 = 0$.
13. Halla vértice, foco y directriz de $y = 2x^2$.
14. Halla vértice, foco y directriz de $y = x^2 - 4x + 3$.
15. Determina centro y radio de $x^2 + y^2 + 2x + 2y - 2 = 0$.

### Nivel 4 — Cónicas y coordenadas polares
16. Para $\frac{x^2}{25} + \frac{y^2}{9} = 1$, halla focos y excentricidad.
17. Para $\frac{x^2}{36} + \frac{y^2}{16} = 1$, halla focos y excentricidad.
18. Para $\frac{x^2}{16} - \frac{y^2}{9} = 1$, halla focos y asíntotas.
19. Para $\frac{y^2}{9} - \frac{x^2}{16} = 1$, halla focos y asíntotas.
20. Convierte $(3, 3)$ a coordenadas polares y $(4, \pi/6)$ a cartesianas.

## Respuestas
1. $d = 4\sqrt{5}$; $M = (2, 1)$
2. $d = 5$
3. $M = (2, 2)$
4. $d = 10$
5. $P = (1, 4)$
6. $y = 4x - 14$
7. $m = 2$
8. $y = 3x - 1$
9. $y = 3x - 2$
10. $y = 2x - 1$
11. Centro $(-4, 1)$, radio $3$
12. Centro $(3, -2)$, radio $5$
13. Vértice $(0, 0)$; foco $(0, \frac{1}{8})$; directriz $y = -\frac{1}{8}$
14. Vértice $(2, -1)$; foco $(2, -\frac{3}{4})$; directriz $y = -\frac{5}{4}$
15. Centro $(-1, -1)$, radio $2$
16. Focos $(\pm 4, 0)$; $e = \frac{4}{5} = 0.8$
17. Focos $(\pm \sqrt{20}, 0)$; $e = \frac{\sqrt{20}}{6} \approx 0.745$
18. Focos $(\pm 5, 0)$; asíntotas $y = \pm \frac{3}{4}x$
19. Focos $(0, \pm 5)$; asíntotas $y = \pm \frac{3}{4}x$
20. $(3\sqrt{2}, \frac{\pi}{4})$ y $(2\sqrt{3}, 2)$
