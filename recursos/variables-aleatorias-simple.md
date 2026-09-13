## Variables aleatorias

Una **variable aleatoria** $X$ es una función que convierte cada resultado de un experimento en un número. Se escribe con mayúscula ($X$) y sus valores con minúscula ($x$). Es **discreta** si toma valores contables ($0, 1, 2, \ldots$) y **continua** si llena intervalos.

- **Masa (discreta):** $p(x) = P(X = x)$, con $\sum_x p(x) = 1$.
- **Densidad (continua):** $P(a \leq X \leq b) = \int_a^b f(x)\,dx$, con $\int_{-\infty}^{\infty} f(x)\,dx = 1$. La densidad no es probabilidad: en continuas, $P(X = x) = 0$ para todo $x$.
- **Distribución acumulada:** $F(x) = P(X \leq x)$; crece de 0 a 1.

## Distribuciones discretas

- **Bernoulli$(p)$:** un ensayo; $P(X = 1) = p$, $P(X = 0) = 1-p$.
- **Binomial$(n, p)$:** éxitos en $n$ ensayos independientes con probabilidad $p$:

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \qquad k = 0, 1, \ldots, n.$$

- **Geométrica$(p)$:** ensayos hasta el primer éxito:

$$P(X = k) = (1-p)^{k-1} p, \qquad k = 1, 2, 3, \ldots$$

- **Poisson$(\lambda)$:** eventos en un intervalo con tasa $\lambda$:

$$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}, \qquad k = 0, 1, 2, \ldots$$

## Distribuciones continuas

- **Uniforme$(a, b)$:** densidad constante $f(x) = \dfrac{1}{b-a}$ para $a \leq x \leq b$.
- **Exponencial$(\lambda)$:** $f(x) = \lambda e^{-\lambda x}$ para $x \geq 0$; modela tiempos de espera; $P(X > t) = e^{-\lambda t}$; no tiene memoria.
- **Normal$(\mu, \sigma^2)$:**

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}.$$

Regla 68–95–99.7: el 68% cae en $\mu \pm \sigma$; el 95% en $\mu \pm 1.96\sigma$; el 99.7% en $\mu \pm 3\sigma$. Para calcular probabilidades se estandariza: $Z = \dfrac{X - \mu}{\sigma} \sim N(0,1)$.

## Esperanza y varianza

$$E[X] = \sum_x x\,p(x) \quad \text{o} \quad \int_{-\infty}^{\infty} x f(x)\,dx$$

- Linealidad (siempre): $E[aX + bY] = aE[X] + bE[Y]$.
- $E[g(X)] = \sum_x g(x) p(x)$: se usa la masa de $X$, no la de $g(X)$.

$$\text{Var}(X) = E[(X - \mu)^2] = E[X^2] - (E[X])^2, \qquad \sigma = \sqrt{\text{Var}(X)}$$

- $\text{Var}(aX + b) = a^2 \text{Var}(X)$.
- Si $X, Y$ independientes: $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$.

**Valores de referencia:** binomial: $E = np$, $\text{Var} = np(1-p)$; Poisson: $E = \text{Var} = \lambda$; geométrica: $E = 1/p$, $\text{Var} = (1-p)/p^2$; uniforme: $E = (a+b)/2$, $\text{Var} = (b-a)^2/12$; exponencial: $E = 1/\lambda$, $\text{Var} = 1/\lambda^2$; normal: $E = \mu$, $\text{Var} = \sigma^2$.

## Conjuntas, covarianza y teorema central del límite

- **Conjunta:** $p(x, y) = P(X = x, Y = y)$. **Marginales:** $p_X(x) = \sum_y p(x, y)$.
- **Covarianza:** $\text{Cov}(X, Y) = E[XY] - E[X]E[Y]$. **Correlación:** $\rho = \dfrac{\text{Cov}(X,Y)}{\sigma_X \sigma_Y} \in [-1, 1]$.
- Independencia $\Rightarrow$ covarianza 0 (el recíproco es falso). En general: $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y) + 2\text{Cov}(X,Y)$.
- **Función generadora de momentos:** $M_X(t) = E[e^{tX}]$; $M'(0) = E[X]$, $M''(0) = E[X^2]$.
- **TCL:** si $X_1, \ldots, X_n$ son independientes con media $\mu$ y varianza $\sigma^2$, entonces $\bar{X}_n$ es aproximadamente $N(\mu, \sigma^2/n)$ y $\dfrac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \approx N(0,1)$ para $n$ grande.

## Ejercicios (20)

### Nivel 1 · Fundamentos

1. La masa de una discreta $X$ es $p(0) = 0.3$, $p(1) = 0.5$, $p(2) = 0.2$. Comprueba que suma 1 y calcula $P(X \geq 1)$.
2. Si $X$ es continua, ¿cuánto vale $P(X = 3)$?
3. El número de llamadas a una central en una hora, con tasa promedio de 4 por hora: ¿qué distribución modela esta variable y con qué parámetro?
4. Si $X \sim \text{Bernoulli}(0.4)$, calcula $P(X = 1)$ y $E[X]$.
5. Si $X \sim U(2, 6)$ (uniforme continua), ¿cuánto vale su densidad dentro del intervalo y cuál es su media?

### Nivel 2 · Cálculo directo

6. Si $X \sim \text{Bin}(10, 0.5)$, calcula $P(X = 3)$.
7. Si $X \sim \text{Poisson}(2)$, calcula $P(X = 0)$.
8. Si $X$ es exponencial con $\lambda = 0.25$, calcula $P(X > 8)$.
9. Si $X \sim \text{Geom}(0.2)$, calcula $P(X = 3)$.
10. Si $X$ es uniforme discreta en $\{1, \ldots, 6\}$, calcula $E[X^2]$.

### Nivel 3 · Aplicaciones

11. Un juego paga $\$50$ con probabilidad $0.1$ y hace perder $\$10$ con probabilidad $0.9$. Calcula la ganancia esperada.
12. Si $E[X] = 5$ y $\text{Var}(X) = 4$, calcula $E[3X - 2]$ y $\text{Var}(3X - 2)$.
13. Si $X \sim N(100, 15^2)$, calcula $P(X > 130)$.
14. Si $X \sim \text{Bin}(100, 0.3)$, calcula su media, su varianza y su desviación estándar.
15. Si $X \sim \text{Poisson}(5)$, calcula $P(X \leq 2)$.

### Nivel 4 · Desafío

16. Sea $X$ la suma de dos dados. Calcula $P(X = 9)$.
17. Sea $X$ uniforme discreta en $\{1, 2, 3, 4\}$ e $Y = X$. Calcula $\text{Cov}(X, Y)$.
18. Si $Y = 3X + 2$, ¿cuánto vale la correlación $\rho$ entre $X$ e $Y$?
19. Con $n = 36$, $\mu = 50$ y $\sigma = 12$, usa el TCL para calcular $P(\bar{X} > 52)$.
20. Si la función generadora de momentos de $X$ es $M(t) = e^{3t + 8t^2/2}$, identifica la distribución de $X$ y da su media y varianza.

## Respuestas

1. $0.3 + 0.5 + 0.2 = 1$; $P(X \geq 1) = 0.5 + 0.2 = 0.7$.
2. $P(X = 3) = 0$: en continuas los puntos tienen probabilidad cero.
3. Poisson con $\lambda = 4$: eventos a tasa constante en un intervalo fijo.
4. $P(X = 1) = 0.4$; $E[X] = p = 0.4$.
5. Densidad $f(x) = \frac{1}{6-2} = \frac{1}{4}$ para $2 \leq x \leq 6$; media $E[X] = \frac{2+6}{2} = 4$.
6. $P(X = 3) = \binom{10}{3}(0.5)^{10} = \frac{120}{1024} = 0.1171875 \approx 0.1172$.
7. $P(X = 0) = e^{-2} \approx 0.1353$.
8. $P(X > 8) = e^{-0.25 \cdot 8} = e^{-2} \approx 0.1353$.
9. $P(X = 3) = (0.8)^2 (0.2) = 0.128$.
10. $E[X^2] = \frac{1 + 4 + 9 + 16 + 25 + 36}{6} = \frac{91}{6} \approx 15.1667$.
11. $E[X] = 0.1(50) + 0.9(-10) = 5 - 9 = -4$: pierde $\$4$ en promedio.
12. $E[3X - 2] = 3(5) - 2 = 13$; $\text{Var}(3X - 2) = 9(4) = 36$.
13. $z = \frac{130 - 100}{15} = 2$; $P(Z > 2) \approx 0.0228$.
14. $E[X] = 100(0.3) = 30$; $\text{Var}(X) = 100(0.3)(0.7) = 21$; $\sigma = \sqrt{21} \approx 4.58$.
15. $P(X \leq 2) = e^{-5}\left(1 + 5 + \frac{25}{2}\right) = e^{-5}(18.5) \approx 0.1247$.
16. $P(X = 9) = \frac{4}{36} = \frac{1}{9}$ (parejas $(3,6), (4,5), (5,4), (6,3)$).
17. $E[X] = 2.5$, $E[X^2] = \frac{1+4+9+16}{4} = 7.5$; $\text{Var}(X) = 7.5 - 6.25 = 1.25$; como $Y = X$, $\text{Cov}(X, Y) = \text{Var}(X) = 1.25$.
18. $\rho = 1$: $Y$ es función lineal creciente de $X$, relación lineal perfecta positiva.
19. $SE = \frac{12}{\sqrt{36}} = 2$; $z = \frac{52 - 50}{2} = 1$; $P(Z > 1) \approx 0.1587$.
20. Es la fgm de una normal $N(3, 8)$: $E[X] = 3$ y $\text{Var}(X) = 8$.
