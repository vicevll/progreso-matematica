# Variables aleatorias y distribuciones

## Variable aleatoria
Una **variable aleatoria** $X$ es una función medible del espacio muestral $\Omega$ al conjunto de los números reales: asigna un número a cada resultado del experimento.

1. **Discreta:** toma valores en un conjunto finito o numerable, como $\{0, 1, 2, \ldots\}$.
2. **Continua:** toma valores en un intervalo; su probabilidad se reparte de forma continua.

**Ejemplo.** $X$ = número de caras al lanzar dos monedas: discreta con valores $\{0, 1, 2\}$. $T$ = tiempo de espera en una fila: continua, $T \in [0, \infty)$.

Las variables aleatorias permiten operar (sumar, promediar) con los resultados de un experimento y estudiar su comportamiento mediante distribuciones.

## Función de masa, densidad y CDF
La ley de una variable aleatoria se describe de tres formas equivalentes.

1. **Función de masa (discreta):** $p(x) = P(X = x)$, con $p(x) \geq 0$ y $\sum_x p(x) = 1$.
2. **Función de densidad (continua):** $f(x) \geq 0$ con $\int_{-\infty}^{\infty} f(x)\,dx = 1$, y
$$P(a \leq X \leq b) = \int_a^b f(x)\,dx$$
3. **Función de distribución acumulada (CDF):** $F(x) = P(X \leq x)$; es no decreciente, $F(-\infty) = 0$ y $F(\infty) = 1$.

Relaciones: en el caso discreto $F(x) = \sum_{t \leq x} p(t)$; en el continuo $F'(x) = f(x)$ donde esta es derivable.

**Ejemplo.** Si $X$ tiene masa $p(1) = 0.2$, $p(2) = 0.5$, $p(3) = 0.3$, entonces $F(2) = 0.7$ y $F(3) = 1$. En el caso continuo, $P(X = x) = 0$ para todo $x$: solo los intervalos tienen probabilidad positiva.

## Distribuciones discretas notables
Las distribuciones discretas modelan conteos de éxitos o de eventos.

1. **Bernoulli($p$):** un ensayo con éxito ($1$) o fracaso ($0$); $p(1) = p$.
2. **Binomial($n, p$):** número de éxitos en $n$ ensayos independientes:
$$P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}$$
3. **Geométrica($p$):** ensayos hasta el primer éxito: $P(X = k) = (1-p)^{k-1}p$.
4. **Poisson($\lambda$):** número de eventos en un intervalo con tasa $\lambda$:
$$P(X = k) = \frac{e^{-\lambda}\lambda^k}{k!}$$
5. **Hipergeométrica:** número de éxitos al extraer sin reposición de una población finita.

**Ejemplo.** Llamadas por hora con $\lambda = 5$: $P(X = 3) = e^{-5}5^3/3! \approx 0.1404$. Una binomial con $n = 10$, $p = 0.3$ tiene $E[X] = 3$ y $\operatorname{Var}(X) = 2.1$.

## Distribuciones continuas notables
Las distribuciones continuas describen magnitudes como tiempos, longitudes o errores.

1. **Uniforme($a, b$):** densidad constante $f(x) = 1/(b-a)$ para $x \in [a, b]$.
2. **Exponencial($\lambda$):** $f(x) = \lambda e^{-\lambda x}$ para $x \geq 0$; modela tiempos de espera y cumple la propiedad de pérdida de memoria.
3. **Normal($\mu, \sigma^2$):**
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$
4. **t de Student, chi-cuadrado y F:** derivadas de la normal; sostienen la inferencia estadística.

**Ejemplo.** En una normal, el $68\%$ de los valores cae en $\mu \pm \sigma$, el $95\%$ en $\mu \pm 1.96\sigma$ y el $99.7\%$ en $\mu \pm 3\sigma$.

## Esperanza
La **esperanza** (o media) es el promedio ponderado por la probabilidad:
$$E[X] = \sum_x x\,p(x) \quad \text{(discreta)}, \qquad E[X] = \int_{-\infty}^{\infty} x f(x)\,dx \quad \text{(continua)}$$

**Propiedades:**
1. **Linealidad:** $E[aX + bY] = aE[X] + bE[Y]$, siempre, sin necesitar independencia.
2. **Constante:** $E[c] = c$.
3. **Función de $X$:** $E[g(X)] = \sum_x g(x)p(x)$ o $\int g(x)f(x)\,dx$ (regla del estadístico inconsciente).
4. En general $E[g(X)] \neq g(E[X])$.

**Valores conocidos.** Binomial: $np$; Poisson: $\lambda$; geométrica: $1/p$; exponencial: $1/\lambda$; uniforme: $(a+b)/2$; normal: $\mu$.

**Ejemplo.** Un juego paga $\$10$ con probabilidad $0.2$ y cuesta $\$3$: $E = 0.2 \cdot 10 - 3 = -1$; pérdida media de $\$1$ por partida.

## Varianza y desviación estándar
La **varianza** mide la dispersión alrededor de la media:
$$\operatorname{Var}(X) = E[(X - \mu)^2] = E[X^2] - (E[X])^2$$

La **desviación estándar** es $\sigma = \sqrt{\operatorname{Var}(X)}$, en las mismas unidades que $X$.

**Propiedades:**
1. $\operatorname{Var}(X) \geq 0$; $\operatorname{Var}(c) = 0$.
2. $\operatorname{Var}(aX + b) = a^2\operatorname{Var}(X)$.
3. Si $X$ e $Y$ son independientes: $\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y)$.

**Valores conocidos.** Binomial: $np(1-p)$; Poisson: $\lambda$; geométrica: $(1-p)/p^2$; exponencial: $1/\lambda^2$; uniforme: $(b-a)^2/12$; normal: $\sigma^2$.

**Ejemplo.** Binomial con $n = 10$, $p = 0.3$: $E[X] = 3$, $\operatorname{Var}(X) = 2.1$, $\sigma \approx 1.45$.

## Distribuciones conjuntas, covarianza y correlación
Para dos variables se define la **distribución conjunta** $p(x, y)$ o $f(x, y)$. Las **marginales** se obtienen sumando o integrando la otra variable, y las **condicionales** con la regla del cociente.

**Independencia:** $X$ e $Y$ son independientes si $p(x, y) = p_X(x)p_Y(y)$ (o el producto de densidades).

**Covarianza:**
$$\operatorname{Cov}(X, Y) = E[XY] - E[X]E[Y]$$

**Correlación:**
$$\rho = \frac{\operatorname{Cov}(X, Y)}{\sigma_X \sigma_Y} \in [-1, 1]$$

**Propiedades.** $\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2\operatorname{Cov}(X, Y)$. Independientes implica covarianza $0$, pero el recíproco es falso. $|\rho| = 1$ indica relación lineal exacta.

**Ejemplo.** Si $Y = 2X + 1$, entonces $\operatorname{Cov}(X, Y) = 2\operatorname{Var}(X)$ y $\rho = 1$: relación lineal perfecta.

## Transformaciones, FGM y teorema central del límite
Si $Y = g(X)$:
1. **Discreta:** suma la masa sobre las preimágenes de cada valor de $Y$.
2. **Continua:** usa la CDF, $F_Y(y) = P(g(X) \leq y)$, o cambio de variable con jacobiano.

**Función generadora de momentos (FGM):** $M_X(t) = E[e^{tX}]$; sus derivadas en $0$ dan los momentos:
$$M_X'(0) = E[X], \qquad M_X''(0) = E[X^2]$$

**Ejemplo.** Si $X \sim N(\mu, \sigma^2)$, $M_X(t) = e^{\mu t + \sigma^2 t^2/2}$. La suma de normales independientes es normal con medias y varianzas sumadas.

**Teorema central del límite (TCL).** Si $X_1, \ldots, X_n$ son independientes con media $\mu$ y varianza $\sigma^2$ finita, entonces
$$\frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \xrightarrow{d} N(0, 1)$$
sin importar la distribución original. Para $n$ grande, $\bar{X}_n$ es aproximadamente normal.

**Ejemplo.** La suma de $100$ lanzamientos de un dado tiene media $350$ y desviación $\sqrt{100 \cdot 35/12} \approx 17.08$; el TCL permite aproximar probabilidades de sumas.

## Ejercicios (20)
### Nivel 1 — Fundamentos
1. Sea $X$ el resultado de un dado justo. Calcula $E[X]$ y $\operatorname{Var}(X)$.
2. $X$ tiene masa $p(0) = 0.3$, $p(1) = 0.5$, $p(2) = 0.2$. Halla $E[X]$ y $\operatorname{Var}(X)$.
3. $X \sim \text{Bernoulli}(0.5)$. Calcula $E[X]$ y $\operatorname{Var}(X)$.
4. $X$ tiene masa $P(1) = 0.2$, $P(2) = 0.5$, $P(3) = 0.3$. Halla $F(2)$ y $F(2.5)$.
5. $X$ es uniforme discreta en $\{0, 1, 2, 3\}$. Calcula $E[X]$ y $\operatorname{Var}(X)$.

### Nivel 2 — Distribuciones notables
6. $X \sim \text{Binomial}(10, 0.3)$. Calcula $E[X]$ y $\operatorname{Var}(X)$.
7. $X \sim \text{Binomial}(20, 0.4)$. Calcula $P(X = 8)$.
8. $X \sim \text{Poisson}(3)$. Calcula $P(X \leq 1)$.
9. $X \sim \text{Geométrica}(0.2)$. Calcula $E[X]$ y $\operatorname{Var}(X)$.
10. $X \sim \text{Poisson}(2)$. Calcula $P(X \geq 1)$.

### Nivel 3 — Continuas
11. $X \sim \text{Exponencial}(0.5)$. Calcula $P(X > 4)$.
12. $X \sim \text{Uniforme}(0, 10)$. Calcula $E[X]$ y $\operatorname{Var}(X)$.
13. $X \sim N(500, 100^2)$. Calcula $P(X > 700)$.
14. $Z \sim N(0, 1)$. Calcula $P(-1 \leq Z \leq 1)$.
15. $X \sim \text{Exponencial}(2)$. Calcula $E[X]$ y $\operatorname{Var}(X)$.

### Nivel 4 — TCL y aplicaciones
16. Se suman $100$ lanzamientos de un dado. Calcula la media y la desviación estándar de la suma.
17. Tiempo de atención con $\mu = 10$ y $\sigma = 3$; $n = 50$. Aproxima $P(\bar{X} > 11)$.
18. $Y = 2X + 1$ con $\operatorname{Var}(X) = 3$. Calcula $\operatorname{Cov}(X, Y)$.
19. Se lanzan $100$ monedas y $X$ cuenta caras. Usa el TCL para aproximar $P(40 \leq X \leq 60)$.
20. $X \sim N(50, 10^2)$ con $n = 36$. Aproxima $P(\bar{X} > 53)$.

## Respuestas
1. $E[X] = 7/2 = 3.5$; $\operatorname{Var}(X) = 35/12 \approx 2.9167$.
2. $E[X] = 0.9$; $E[X^2] = 1.3$; $\operatorname{Var}(X) = 0.49$.
3. $E[X] = 0.5$; $\operatorname{Var}(X) = 0.25$.
4. $F(2) = 0.7$; $F(2.5) = 0.7$.
5. $E[X] = 3/2$; $\operatorname{Var}(X) = 5/4 = 1.25$.
6. $E[X] = np = 3$; $\operatorname{Var}(X) = np(1-p) = 2.1$.
7. $\binom{20}{8}(0.4)^8(0.6)^{12} \approx 0.1797$.
8. $e^{-3}(1+3) = 4e^{-3} \approx 0.1991$.
9. $E[X] = 1/0.2 = 5$; $\operatorname{Var}(X) = 0.8/0.04 = 20$.
10. $1 - e^{-2} \approx 0.8647$.
11. $e^{-0.5 \cdot 4} = e^{-2} \approx 0.1353$.
12. $E[X] = 5$; $\operatorname{Var}(X) = 100/12 = 25/3 \approx 8.3333$.
13. $z = 2$; $P(Z > 2) \approx 0.0228$.
14. $\Phi(1) - \Phi(-1) \approx 0.6826$.
15. $E[X] = 1/2$; $\operatorname{Var}(X) = 1/4$.
16. Media $= 350$; desviación $= \sqrt{100 \cdot 35/12} \approx 17.08$.
17. $z = \dfrac{11 - 10}{3/\sqrt{50}} \approx 2.357$; $P \approx 0.0092$.
18. $\operatorname{Cov}(X, Y) = 2\operatorname{Var}(X) = 6$.
19. $\mu = 50$, $\sigma = 5$; $P(|Z| \leq 2) \approx 0.9545$.
20. $SE = 10/6 \approx 1.667$; $z = 1.8$; $P(Z > 1.8) \approx 0.0359$.
