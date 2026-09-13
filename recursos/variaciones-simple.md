# Cálculo de variaciones

**Guía simple · Cálculo · Universidad 4–5**
*Funcionales, ecuación de Euler-Lagrange y extremos.*

---

## 1. Funcionales

Un **funcional** es una regla que asigna un número a cada función. El caso prototipo es una integral que depende de una función $y(x)$ y de su derivada:

$$J[y] = \int_a^b F\big(x, y(x), y'(x)\big)\,dx$$

La función $F$ se llama **lagrangiano** o integrando. El cálculo de variaciones no busca un número $x$, sino la **función** $y(x)$ que hace máxima o mínima a $J$.

Algunos funcionales clásicos:

1. **Longitud de arco:** $J[y] = \displaystyle\int_a^b \sqrt{1 + (y')^2}\,dx$.
2. **Tiempo de recorrido:** $J[y] = \displaystyle\int_a^b \frac{\sqrt{1 + (y')^2}}{v(y)}\,dx$.
3. **Acción en mecánica:** $S = \displaystyle\int (T - V)\,dt$.

**Mini-ejemplo.** Para $J[y] = \displaystyle\int_0^1 (y')^2\,dx$ con $y = x$ se tiene $y' = 1$ y $J = 1$; con $y = x^2$ se tiene $y' = 2x$ y $J = \displaystyle\int_0^1 4x^2\,dx = \dfrac{4}{3}$. Distintas funciones dan distintos valores: tiene sentido preguntar cuál lo minimiza.

---

## 2. La variación y la ecuación de Euler-Lagrange

Se perturba la función candidata como $y + \varepsilon\eta$, donde $\eta$ es una **variación** arbitraria con $\eta(a) = \eta(b) = 0$ (la curva queda anclada en los extremos). Que $y$ sea un extremo exige $\dfrac{d}{d\varepsilon}J[y + \varepsilon\eta] = 0$ en $\varepsilon = 0$:

$$\delta J = \int_a^b \left(F_y\,\eta + F_{y'}\,\eta'\right)dx = 0$$

Integrando por partes el término con $\eta'$ y usando $\eta(a) = \eta(b) = 0$ se obtiene la **ecuación de Euler-Lagrange**:

$$\boxed{\;\frac{\partial F}{\partial y} - \frac{d}{dx}\left(\frac{\partial F}{\partial y'}\right) = 0\;}$$

Es la condición **necesaria** de extremo, análoga a $f'(x) = 0$ en cálculo ordinario. Sus soluciones se llaman **extremales**.

**Mini-ejemplo.** Para $F = \sqrt{1 + (y')^2}$ (longitud), $F_y = 0$ y $F_{y'} = \dfrac{y'}{\sqrt{1 + (y')^2}}$. La ecuación da $\dfrac{d}{dx}F_{y'} = 0$, es decir $y'' = 0$: la extremal es una **recta**.

---

## 3. Casos especiales e integrales primeras

Cuando $F$ no depende de alguna variable, la ecuación de Euler-Lagrange se simplifica y aparece una **integral primera** (una cantidad constante sobre las extremales).

1. **$F$ no depende de $x$ (identidad de Beltrami):**
$$F - y'\,\frac{\partial F}{\partial y'} = C$$

2. **$F$ no depende de $y$:**
$$\frac{\partial F}{\partial y'} = C$$

3. **$F$ no depende de $y'$:** la ecuación se reduce a $F_y = 0$.

**Mini-ejemplo (Beltrami).** Con $F = \sqrt{1 + (y')^2}$ (no depende de $x$ ni de $y$):
$$F - y'F_{y'} = \frac{1}{\sqrt{1 + (y')^2}} = C \;\Rightarrow\; y' = \text{constante},$$
otra vez la recta.

**Mini-ejemplo (falta $y$).** Con $F = x\sqrt{1 + (y')^2}$, como $F_y = 0$:
$$\frac{\partial F}{\partial y'} = \frac{x\,y'}{\sqrt{1 + (y')^2}} = C.$$

---

## 4. Condiciones de frontera

La ecuación de Euler-Lagrange es de segundo orden: necesita dos condiciones en los bordes.

1. **Fijas (Dirichlet).** Se conocen $y(a)$ y $y(b)$; la curva está anclada.
2. **Naturales.** Si $y$ es libre en un extremo, la variación impone
$$\left.\frac{\partial F}{\partial y'}\right|_{x=b} = 0$$
(o análogamente en $x = a$).
3. **Con restricciones (isoperimétricas).** Si además se exige $\displaystyle\int_a^b G\,dx = L$, se forma el lagrangiano aumentado $F + \lambda G$ y se aplica Euler-Lagrange. El parámetro $\lambda$ es un multiplicador de Lagrange funcional.

**Mini-ejemplo.** Para $J[y] = \displaystyle\int_0^1 (y')^2\,dx$ con $y(0) = 0$ y $y(1)$ libre: la extremal es $y = ax + b$, con $b = 0$; la condición natural $2y'(1) = 0$ fuerza $a = 0$, luego $y = 0$.

---

## 5. Aplicaciones clásicas

**Braquistócrona.** Curva de descenso más rápido entre dos puntos bajo gravedad. Con $F = \sqrt{\dfrac{1 + (y')^2}{y}}$, la solución es una **cicloide**, no la recta. La planteó Johann Bernoulli en 1696 y fundó el cálculo de variaciones.

**Geodésicas.** Curva más corta sobre una superficie. En el plano son las **rectas**; en la esfera, los **círculos máximos**.

**Superficies mínimas.** Superficie de área mínima con borde dado (pompas de jabón). Con $F = y\sqrt{1 + (y')^2}$ la superficie de revolución asociada es la **catenoide**, y su curvatura media es cero.

**Principio de Hamilton.** En mecánica, el movimiento real extremiza la **acción** $S = \displaystyle\int (T - V)\,dt$; de allí salen las ecuaciones de Lagrange y, para una partícula libre, la ley de Newton $m\ddot{x} = 0$.

---

## 6. Segunda variación

Euler-Lagrange solo da puntos críticos; para decidir si son mínimos o máximos se usa la **segunda variación** (el análogo del hessiano):

$$\delta^2 J = \int_a^b \left(F_{yy}\,\eta^2 + 2F_{yy'}\,\eta\eta' + F_{y'y'}\,(\eta')^2\right)dx$$

La **condición de Legendre** es necesaria:
- Si $F_{y'y'} \geq 0$ en la extremal, el extremo puede ser un **mínimo**.
- Si $F_{y'y'} \leq 0$, puede ser un **máximo**.

En la mayoría de los problemas físicos, $F$ es convexa en $y'$, lo que garantiza un mínimo. Una condición suficiente completa exige además la condición de Jacobi (ausencia de puntos conjugados).

**Mini-ejemplo.** Para $J[y] = \displaystyle\int_0^1 (y')^2\,dx$ se tiene $F_{y'y'} = 2 > 0$: la recta hallada es un **mínimo**.

---

## 7. Ejemplos resueltos

**Ejemplo 1 (recta).** Extremiza $J[y] = \displaystyle\int_0^1 (y')^2\,dx$ con $y(0) = 0$, $y(1) = 1$.
- $F = (y')^2$, Euler-Lagrange: $\dfrac{d}{dx}(2y') = 0 \Rightarrow y'' = 0$.
- $y = ax + b$; con las condiciones, $y = x$.

**Ejemplo 2 (Beltrami).** Extremiza $\displaystyle\int_0^1 y\sqrt{1 + (y')^2}\,dx$.
- $F$ no depende de $x$: se usa Beltrami.
- Resultado: $y = C\cosh\dfrac{x - a}{C}$ (catenoide).

**Ejemplo 3 (potencial).** Extremiza $J[y] = \displaystyle\int_0^1 \big[(y')^2 + 2y\big]\,dx$ con $y(0) = 0$, $y(1) = 1$.
- $2 - 2y'' = 0 \Rightarrow y'' = 1$.
- $y = \dfrac{x^2}{2} + ax + b$; con las condiciones, $y = \dfrac{x^2 + x}{2}$.

**Ejemplo 4 (braquistócrona).** Verifica que la cicloide $x = R(\theta - \operatorname{sen}\theta)$, $y = R(1 - \cos\theta)$ resuelve la braquistócrona.
- Con $F = \sqrt{(1 + (y')^2)/y}$, Beltrami conduce a $y\big(1 + (y')^2\big) = 2R$.
- La parametrización cicloidal satisface esa relación.

---

## Ejercicios (20)

### Nivel 1 — Euler-Lagrange directo

1. Extremiza $J[y] = \displaystyle\int_0^1 (y')^2\,dx$ con $y(0) = 0$, $y(1) = 1$.
2. Halla la ecuación de Euler-Lagrange de $F = y^2 + (y')^2$.
3. Extremiza $J[y] = \displaystyle\int_0^1 \big[(y')^2 + 2y\big]\,dx$ con $y(0) = 0$, $y(1) = 1$.
4. Halla la extremal de $J[y] = \displaystyle\int_1^2 \sqrt{1 + (y')^2}\,dx$ con $y(1) = 0$, $y(2) = 1$.
5. Escribe la EDO que resulta de extremizar $J[y] = \displaystyle\int_0^1 \big[(y')^2 + \cos y\big]\,dx$.

### Nivel 2 — Integrales primeras y Beltrami

6. Aplica Beltrami a $F = (y')^2$.
7. Aplica Beltrami a $F = y^2 + (y')^2$.
8. Aplica Beltrami a $F = \sqrt{1 + (y')^2}$.
9. Aplica Beltrami a $F = \dfrac{\sqrt{1 + (y')^2}}{y}$.
10. Aplica Beltrami a $F = \dfrac{(y')^2}{y}$.

### Nivel 3 — Condiciones de frontera y aplicaciones

11. Escribe la condición natural en $x = 1$ para $J[y] = \displaystyle\int_0^1 (y')^2\,dx$ con $y(0) = 0$ y $y(1)$ libre.
12. Extremiza $J[y] = \displaystyle\int_0^1 (y')^2\,dx$ con $y(0) = 1$ y $y(1)$ libre.
13. Escribe el funcional de la braquistócrona.
14. ¿Cuál es la curva geodésica sobre una esfera?
15. Enuncia la condición natural general en $x = b$ para $F(x, y, y')$ cuando $y(b)$ es libre.

### Nivel 4 — Segunda variación y problemas mixtos

16. Escribe la segunda variación de $J = \displaystyle\int_a^b F(x, y, y')\,dx$.
17. Enuncia la condición de Legendre para un mínimo.
18. Clasifica el extremo de $J[y] = \displaystyle\int_0^1 (y')^2\,dx$ con $y(0) = y(1) = 0$.
19. Deduce la EDO de la partícula libre a partir de $S = \displaystyle\int \tfrac12 m(\dot{x})^2\,dt$.
20. Extremiza $J[y] = \displaystyle\int_0^1 \big[(y')^2 + y\,y'\big]\,dx$ con $y(0) = 0$, $y(1) = 1$.

---

## Respuestas

1. $y = x$
2. $y'' = y$
3. $y = \dfrac{x^2 + x}{2}$
4. $y = x - 1$
5. $y'' = \dfrac{1}{2}\cos y$
6. $(y')^2 = C$, es decir $y = ax + b$ (recta)
7. $(y')^2 - y^2 = C$
8. $y' = C$ (recta)
9. $y\big(1 + (y')^2\big) = 2R$
10. $(y')^2 = C\,y$
11. $y'(1) = 0$; la extremal resultante es $y = 0$
12. $y = 1$
13. $J[y] = \displaystyle\int \sqrt{\dfrac{1 + (y')^2}{y}}\,dx$
14. Los círculos máximos
15. $\left.\dfrac{\partial F}{\partial y'}\right|_{x=b} = 0$
16. $\delta^2 J = \displaystyle\int_a^b \left(F_{yy}\,\eta^2 + 2F_{yy'}\,\eta\eta' + F_{y'y'}\,(\eta')^2\right)dx$
17. $F_{y'y'} \geq 0$ a lo largo de la extremal
18. Mínimo (aquí $F_{y'y'} = 2 > 0$)
19. $m\ddot{x} = 0$, esto es, movimiento uniforme $x = vt + x_0$
20. $y = x$
