# Ecuaciones diferenciales ordinarias

## ¿Qué es una ecuación diferencial?

Una **ecuación diferencial** relaciona una función desconocida con sus derivadas. Una **EDO** (ecuación diferencial ordinaria) involucra solo una variable independiente:

$$F(x, y, y', y'', \ldots) = 0$$

- **Orden:** el de la derivada más alta que aparece.
- **Lineal:** si $y$ y sus derivadas aparecen solo a la primera potencia, sin productos entre ellas ni funciones de $y$.

La **solución general** es una familia que contiene constantes arbitrarias; la **solución particular** se obtiene al fijar esas constantes con condiciones iniciales o de frontera.

**Mini-ejemplo.** La ecuación $y' = 2x$ se integra de inmediato:

$$y = \int 2x\,dx = x^2 + C$$

Con la condición $y(0) = 3$ queda $3 = 0 + C$, es decir, $y = x^2 + 3$.

Una EDO modela cualquier sistema que cambia: poblaciones, circuitos, reacciones y enfriamiento.

## Ecuaciones de variables separables

Si la ecuación se puede escribir como $y' = f(x)g(y)$, las variables se separan:

$$\frac{dy}{g(y)} = f(x)\,dx \quad \Rightarrow \quad \int \frac{dy}{g(y)} = \int f(x)\,dx$$

Al integrar cada lado aparece una constante; conviene agrupar todas las constantes en un solo lado.

**Mini-ejemplo (crecimiento/decaimiento).** Para $y' = ky$:

$$\frac{dy}{y} = k\,dx \quad \Rightarrow \quad \ln|y| = kx + C \quad \Rightarrow \quad y = Ce^{kx}$$

Con $k > 0$ la función crece; con $k < 0$ decae.

**Mini-ejemplo.** Para $y' = xy$:

$$\frac{dy}{y} = x\,dx \quad \Rightarrow \quad \ln|y| = \frac{x^2}{2} + C \quad \Rightarrow \quad y = Ce^{x^2/2}$$

## Ecuaciones lineales de primer orden

La forma estándar es:

$$y' + P(x)\,y = Q(x)$$

Se multiplica por el **factor integrante**:

$$\mu(x) = e^{\int P(x)\,dx}$$

que convierte el lado izquierdo en la derivada de un producto:

$$(\mu y)' = \mu Q \quad \Rightarrow \quad y = \frac{1}{\mu}\int \mu Q\,dx$$

**Mini-ejemplo.** Para $y' + 2y = e^{-x}$, con $P = 2$ se tiene $\mu = e^{2x}$:

$$(e^{2x}y)' = e^{2x}e^{-x} = e^{x} \quad \Rightarrow \quad e^{2x}y = e^{x} + C \quad \Rightarrow \quad y = e^{-x} + Ce^{-2x}$$

**Mini-ejemplo.** Para $y' + y = x$: $\mu = e^{x}$ y $(e^{x}y)' = xe^{x}$, de donde

$$y = x - 1 + Ce^{-x}$$

## Ecuaciones exactas

Una ecuación $M(x,y)\,dx + N(x,y)\,dy = 0$ es **exacta** si existe una función $f(x,y)$ con $f_x = M$ y $f_y = N$. La condición necesaria y suficiente (en dominios simples) es:

$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

Entonces la solución es la familia de nivel:

$$f(x,y) = C$$

**Mini-ejemplo.** Para $(2xy)\,dx + (x^2)\,dy = 0$:

$$M_y = 2x = N_x$$

Integrando, $f = x^2y$, así que la solución es $x^2y = C$.

**Mini-ejemplo.** Para $(3x^2 + y)\,dx + (x + 3y^2)\,dy = 0$, como $M_y = 1 = N_x$, se obtiene

$$x^3 + xy + y^3 = C$$

Si la ecuación no es exacta, a veces un factor integrante la vuelve exacta.

## Segundo orden homogéneo

Forma general:

$$ay'' + by' + cy = 0$$

Se resuelve con la **ecuación característica** $ar^2 + br + c = 0$. Según sus raíces:

- **Reales distintas** $r_1 \neq r_2$: $y = C_1e^{r_1x} + C_2e^{r_2x}$.
- **Raíz doble** $r$: $y = (C_1 + C_2x)e^{rx}$.
- **Complejas** $\alpha \pm \beta i$: $y = e^{\alpha x}\left(C_1\cos\beta x + C_2\,\text{sen}\,\beta x\right)$.

**Mini-ejemplo.** Para $y'' - y = 0$, la ecuación $r^2 - 1 = 0$ da $r = \pm 1$:

$$y = C_1e^{x} + C_2e^{-x}$$

**Mini-ejemplo.** Para $y'' + 4y = 0$, $r = \pm 2i$:

$$y = C_1\cos 2x + C_2\,\text{sen}\,2x$$

Esta última describe una oscilación sin amortiguamiento.

## Segundo orden no homogéneo

Para $ay'' + by' + cy = g(x)$ se usa el método de **coeficientes indeterminados**:

1. Resuelve la homogénea asociada para obtener $y_h$.
2. Propón una solución particular $y_p$ con la forma de $g(x)$ (polinomio, exponencial, seno o coseno).
3. Sustituye y ajusta los coeficientes.
4. La solución general es $y = y_h + y_p$.

**Mini-ejemplo.** Para $y'' - y = e^{2x}$, la homogénea da $y_h = C_1e^{x} + C_2e^{-x}$. Se propone $y_p = Ae^{2x}$:

$$4Ae^{2x} - Ae^{2x} = e^{2x} \quad \Rightarrow \quad 3A = 1 \quad \Rightarrow \quad A = \frac{1}{3}$$

Por lo tanto:

$$y = C_1e^{x} + C_2e^{-x} + \frac{1}{3}e^{2x}$$

Cuando la forma de $g$ no es simple se usa **variación de parámetros**.

## Transformada de Laplace

La transformada convierte una EDO con condiciones iniciales en un problema algebraico:

$$\mathcal{L}\{y'\} = sY(s) - y(0), \qquad \mathcal{L}\{y''\} = s^2Y(s) - sy(0) - y'(0)$$

Transformadas básicas:

$$\mathcal{L}\{1\} = \frac{1}{s}, \qquad \mathcal{L}\{e^{at}\} = \frac{1}{s-a}, \qquad \mathcal{L}\{\text{sen}\,at\} = \frac{a}{s^2+a^2}, \qquad \mathcal{L}\{t\} = \frac{1}{s^2}$$

**Método:** transformar, despejar $Y(s)$, descomponer en fracciones parciales y antitransformar.

**Mini-ejemplo.** Resuelve $y' + y = 1$ con $y(0) = 0$:

$$sY + Y = \frac{1}{s} \quad \Rightarrow \quad Y = \frac{1}{s(s+1)} = \frac{1}{s} - \frac{1}{s+1}$$

Antitransformando:

$$y = 1 - e^{-t}$$

## Ejercicios (20)

### Nivel 1

1. Resuelve $\dfrac{dy}{dx} = 3x^2$.
2. Resuelve $\dfrac{dy}{dx} = y$.
3. Resuelve $\dfrac{dy}{dx} = \dfrac{x}{y}$.
4. Indica el orden y si es lineal: $y'' + 2y' + y = 0$.
5. Resuelve $\dfrac{dy}{dx} = \dfrac{y}{x}$.

### Nivel 2

6. Resuelve $\dfrac{dy}{dx} = xy$.
7. Resuelve $y' + y = 1$.
8. Resuelve $y' + 2y = e^{-x}$.
9. Resuelve $y' + y = e^{x}$.
10. Resuelve $\dfrac{dy}{dx} = y\cos x$.

### Nivel 3

11. Resuelve $(2xy)\,dx + (x^2)\,dy = 0$.
12. Resuelve $(2x + y)\,dx + (x + 2y)\,dy = 0$.
13. Resuelve $y'' - 5y' + 6y = 0$.
14. Resuelve $y'' + 4y = 0$.
15. Resuelve $y'' - 4y' + 4y = 0$.

### Nivel 4

16. Resuelve $y'' - y = e^{2x}$.
17. Resuelve $y'' + y = 2$.
18. Calcula $\mathcal{L}\{e^{3t}\}$.
19. Calcula $\mathcal{L}\{\text{sen}\,2t\}$.
20. Resuelve $y' + y = 1$ con $y(0) = 0$ por Laplace.

## Respuestas

1. $y = x^3 + C$.
2. $y = Ce^{x}$.
3. $y^2 = x^2 + C$.
4. Segundo orden y lineal.
5. $y = Cx$.
6. $y = Ce^{x^2/2}$.
7. $y = 1 + Ce^{-x}$.
8. $y = e^{-x} + Ce^{-2x}$.
9. $y = \dfrac{e^{x}}{2} + Ce^{-x}$.
10. $y = Ce^{\text{sen}\,x}$.
11. $x^2y = C$.
12. $x^2 + xy + y^2 = C$.
13. $y = C_1e^{2x} + C_2e^{3x}$.
14. $y = C_1\cos 2x + C_2\,\text{sen}\,2x$.
15. $y = (C_1 + C_2x)e^{2x}$.
16. $y = C_1e^{x} + C_2e^{-x} + \dfrac{1}{3}e^{2x}$.
17. $y = C_1\cos x + C_2\,\text{sen}\,x + 2$.
18. $\mathcal{L}\{e^{3t}\} = \dfrac{1}{s-3}$.
19. $\mathcal{L}\{\text{sen}\,2t\} = \dfrac{2}{s^2+4}$.
20. $y = 1 - e^{-t}$.
