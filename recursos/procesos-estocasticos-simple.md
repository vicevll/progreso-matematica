# Procesos estocásticos

## Procesos estocásticos y la propiedad de Markov

Un **proceso estocástico** es una familia de variables aleatorias indexadas por el tiempo, $\{X_t\}_{t \in T}$. El conjunto de índices $T$ puede ser discreto, $T = \{0, 1, 2, \ldots\}$, o continuo, $T = [0, \infty)$. Los valores posibles de las variables forman el **espacio de estados** $S$.

**Propiedad de Markov.** Un proceso cumple la propiedad de Markov si el futuro depende del pasado solo a través del presente:
$$P(X_{n+1} = j \mid X_n = i, X_{n-1}, \ldots, X_0) = P(X_{n+1} = j \mid X_n = i).$$

**Cadena de Markov.** Es un proceso con espacio de estados discreto que cumple la propiedad de Markov. Si el tiempo también es discreto, se llama **cadena de Markov en tiempo discreto**.

**Homogeneidad.** La cadena es homogénea si la probabilidad de transición no depende del instante $n$:
$$p_{ij} = P(X_{n+1} = j \mid X_n = i).$$

**Matriz de transición.** Los números $p_{ij}$ forman la matriz $P = (p_{ij})$, cuyas filas suman $1$:
$$p_{ij} \geq 0, \qquad \sum_{j \in S} p_{ij} = 1.$$

**Ecuaciones de Chapman-Kolmogorov.** Probabilidad de pasar de $i$ a $j$ en $n + m$ pasos:
$$p^{(n+m)}_{ij} = \sum_{k \in S} p^{(n)}_{ik} p^{(m)}_{kj}, \qquad \text{es decir, } P^{n+m} = P^n P^m.$$

**Mini-ejemplo.** El clima de mañana (sol o lluvia) depende solo del clima de hoy: es una cadena de dos estados. Si estando soleado mañana sigue soleado con probabilidad $0.9$, la fila del estado "sol" es $(0.9, 0.1)$.

## Matriz de transición y distribución estacionaria

La distribución de probabilidad sobre los estados en el instante $n$ es un vector fila $\pi_n = (\pi_n(i))_{i \in S}$. Su evolución es
$$\pi_{n+1} = \pi_n P, \qquad \pi_n = \pi_0 P^n.$$

**Distribución estacionaria.** Un vector de probabilidad $\pi$ es estacionario si
$$\pi = \pi P, \qquad \sum_i \pi_i = 1,$$
es decir, $\pi$ es un vector propio izquierdo de $P$ con valor propio $1$.

**Ecuaciones de balance.** Componente a componente, el flujo entrante al estado $j$ iguala el saliente:
$$\pi_j = \sum_i \pi_i p_{ij}.$$

**Convergencia.** Si la cadena es irreducible y aperiódica, entonces $\pi_n \to \pi$ desde cualquier distribución inicial, y $\pi$ es la única distribución estacionaria.

**Tiempo de retorno esperado.** Para un estado recurrente positivo,
$$E[T_i] = \frac{1}{\pi_i}.$$

**Mini-ejemplo.** Con $P = \begin{pmatrix} 0.9 & 0.1 \\ 0.5 & 0.5 \end{pmatrix}$, resolver $\pi = \pi P$ da $\pi = (5/6, 1/6)$: a largo plazo, $83.3\%$ de días soleados.

## Clases de estados

Dos estados $i$ y $j$ se **comunican** si $i$ alcanza a $j$ y $j$ alcanza a $i$ con probabilidad positiva. La comunicación es una relación de equivalencia y divide el espacio de estados en **clases**.

- **Recurrente:** partiendo de $i$, el proceso regresa a $i$ con probabilidad $1$.
- **Transitorio:** existe probabilidad positiva de no regresar nunca a $i$.
- **Periódico:** el regreso solo ocurre en múltiplos de un periodo $d > 1$; si $d = 1$ es **aperiódico**.
- **Irreducible:** todos los estados se comunican entre sí y forman una sola clase.
- **Recurrente positivo:** recurrente y con tiempo de retorno esperado finito.

**Teorema.** En una cadena finita e irreducible todos los estados son recurrentes positivos y existe una única distribución estacionaria $\pi$ con $\pi_i > 0$.

**Paseo aleatorio.** El paseo aleatorio simple sobre $\mathbb{Z}^d$ es recurrente en dimensiones $d = 1$ y $d = 2$, y transitorio en $d \geq 3$.

**Mini-ejemplo.** La cadena con $P = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ es irreducible pero periódica de periodo $2$; no hay convergencia, aunque existe $\pi = (1/2, 1/2)$.

## Procesos de Poisson y nacimiento-muerte

**Proceso de Poisson.** Es un proceso de conteo $\{N_t\}_{t \geq 0}$ con incrementos independientes y estacionarios, tasa $\lambda > 0$ y $N_0 = 0$. El número de eventos en un intervalo de longitud $t$ es
$$N_t \sim \mathrm{Poisson}(\lambda t), \qquad P(N_t = k) = e^{-\lambda t}\frac{(\lambda t)^k}{k!}.$$
Los **tiempos entre eventos** $T_1, T_2, \ldots$ son independientes y
$$T_i \sim \mathrm{Exponencial}(\lambda), \qquad E[T_i] = \frac{1}{\lambda}.$$

**Proceso de nacimiento y muerte.** Es una cadena en tiempo continuo sobre $\{0, 1, 2, \ldots\}$ con tasas de nacimiento $\lambda_n$ (de $n$ a $n+1$) y de muerte $\mu_n$ (de $n$ a $n-1$).

**Cola M/M/1.** Llegadas Poisson de tasa $\lambda$ y servicios exponenciales de tasa $\mu$. Es estable si $\lambda < \mu$, con utilización $\rho = \lambda/\mu$:
$$L = \frac{\rho}{1 - \rho}, \qquad L_q = \frac{\rho^2}{1 - \rho}, \qquad W = \frac{L}{\lambda}.$$

**Mini-ejemplo.** Banco con $\lambda = 8$ llegadas por hora y $\mu = 10$ servicios por hora: $\rho = 0.8$ y $L = 4$ clientes en promedio; si $\rho \to 1$, la cola crece sin límite.

## Martingalas

Sea $\{\mathcal{F}_n\}$ una filtración (información acumulada hasta $n$). Un proceso adaptado e integrable $\{M_n\}$ es una **martingala** si
$$E[M_{n+1} \mid \mathcal{F}_n] = M_n.$$
El valor esperado del mañana es el valor de hoy: modela **juegos justos**.

- **Submartingala:** $E[M_{n+1} \mid \mathcal{F}_n] \geq M_n$.
- **Supermartingala:** $E[M_{n+1} \mid \mathcal{F}_n] \leq M_n$.

**Ejemplos.** El paseo aleatorio simétrico $S_n = \sum_{i=1}^n X_i$ con $P(X_i = \pm 1) = 1/2$; el capital de un jugador en un juego justo; $W_t^2 - t$ para el movimiento browniano.

**Teoremas.** Desigualdad maximal de Doob; convergencia de martingalas; **teorema opcional de parada**: bajo condiciones de integrabilidad, detener una martingala en un tiempo de parada conserva la propiedad.

**Mini-ejemplo.** Si $E[X_i] = 0$ y las $X_i$ son independientes,
$$E[S_{n+1} \mid \mathcal{F}_n] = S_n + E[X_{n+1}] = S_n,$$
de modo que $\{S_n\}$ es martingala.

## Movimiento browniano

El **movimiento browniano** estándar (proceso de Wiener) $\{W_t\}_{t \geq 0}$ es un proceso de trayectorias continuas que cumple:
1. $W_0 = 0$.
2. Incrementos independientes y estacionarios: $W_t - W_s$ es independiente de $\mathcal{F}_s$ para $s < t$.
3. $W_t - W_s \sim N(0, t - s)$ para $t > s$.

**Propiedades.**
- $E[W_t] = 0$ y $\mathrm{Var}(W_t) = t$.
- **Variación cuadrática:** $[W]_t = t$.
- **Autosimilitud:** $\{W_{ct}\} \stackrel{d}{=} \{\sqrt{c}\,W_t\}$.
- Las trayectorias son continuas pero **no diferenciables** (tienen variación no acotada).

**Movimiento browniano geométrico.** Se define $S_t = S_0 e^{(\mu - \sigma^2/2)t + \sigma W_t}$ y modela precios de activos.

**Mini-ejemplo.** Para $t = 4$, $W_4 \sim N(0, 4)$, de modo que $P(W_4 \leq 0) = 1/2$ por simetría.

## Cálculo de Itô

Para funciones del movimiento browniano la regla de la cadena incorpora un término de segundo orden. El **lema de Itô** afirma que si $f(t, x)$ tiene derivadas continuas,
$$df(t, W_t) = \left(\frac{\partial f}{\partial t} + \frac{1}{2}\frac{\partial^2 f}{\partial x^2}\right) dt + \frac{\partial f}{\partial x}\, dW_t.$$
En particular, para $f(x) = x^2$:
$$d(W_t^2) = 2W_t\, dW_t + dt.$$

La **integral de Itô** $\int_0^t f_s\, dW_s$ se define como límite en $L^2$ de sumas sobre particiones; no es una integral de Riemann-Stieltjes porque $W$ tiene variación no acotada.

**Ecuaciones diferenciales estocásticas (EDS).** Una EDS de difusión tiene la forma
$$dX_t = \mu(t, X_t)\, dt + \sigma(t, X_t)\, dW_t,$$
donde $\mu$ es la deriva y $\sigma$ la volatilidad.

**Fórmula de Black-Scholes.** Para el movimiento browniano geométrico
$$dS_t = \mu S_t\, dt + \sigma S_t\, dW_t,$$
la solución explícita es
$$S_t = S_0 \exp\!\left(\left(\mu - \frac{\sigma^2}{2}\right)t + \sigma W_t\right).$$

**Mini-ejemplo.** Con $\mu = 0.1$ y $\sigma = 0.2$, la deriva efectiva del logaritmo es $\mu - \sigma^2/2 = 0.08$.

## Ejercicios (20)

**Nivel 1 (básico)**
1. Escribe la propiedad de Markov para una cadena $\{X_n\}$.
2. Para $P = \begin{pmatrix} 0.6 & 0.4 \\ 0.3 & 0.7 \end{pmatrix}$, ¿cuánto vale $p_{21}$?
3. Si $\pi = (1/3, 2/3)$ y $P = \begin{pmatrix} 1/2 & 1/2 \\ 1/4 & 3/4 \end{pmatrix}$, calcula $\pi P$.
4. Un proceso de Poisson tiene tasa $\lambda = 3$ por hora. ¿Cuál es el número medio de eventos en $2$ horas?
5. ¿Cuánto vale $E[W_t]$ para el movimiento browniano?

**Nivel 2 (intermedio)**
6. Halla la distribución estacionaria de $P = \begin{pmatrix} 0.7 & 0.3 \\ 0.4 & 0.6 \end{pmatrix}$.
7. Con la matriz anterior, calcula la probabilidad de ir del estado $1$ al estado $1$ en dos pasos.
8. Proceso de Poisson con $\lambda = 2$: calcula $P(N_1 = 3)$.
9. Cola M/M/1 con $\lambda = 3$ y $\mu = 5$: halla $\rho$ y $L$.
10. Verifica que el paseo aleatorio simétrico $S_n = \sum_{i=1}^n X_i$ con $X_i = \pm 1$ equiprobables es una martingala.

**Nivel 3 (avanzado)**
11. Para la cadena con $P = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, ¿es irreducible? ¿es periódica?
12. Proceso de Poisson con $\lambda = 0.5$ por minuto: calcula $P(T_1 > 4)$.
13. Calcula $E[W_t^2]$ y $E[W_t^2 - t]$.
14. Si $W_0 = 0$, ¿cuál es la distribución de $W_3 - W_1$?
15. Para la EDS $dX_t = \mu\, dt + \sigma\, dW_t$ con constantes, escribe la solución $X_t$.

**Nivel 4 (reto)**
16. Para $P = \begin{pmatrix} 1-a & a \\ b & 1-b \end{pmatrix}$ con $0 < a, b < 1$, halla $\pi$.
17. En un proceso de nacimiento-muerte con $\lambda_n = \lambda$ y $\mu_n = n\mu$, describe la distribución estacionaria.
18. Usa el lema de Itô para hallar $d(W_t^2)$.
19. Escribe la solución explícita de $dS_t = \mu S_t\, dt + \sigma S_t\, dW_t$.
20. Si $\pi_i = 1/4$, calcula el tiempo de retorno esperado $E[T_i]$.

## Respuestas

1. $P(X_{n+1} = j \mid X_n = i, X_{n-1}, \ldots, X_0) = P(X_{n+1} = j \mid X_n = i)$.
2. $p_{21} = 0.3$.
3. $\pi P = (1/3, 2/3) = \pi$: es estacionaria.
4. $E[N_2] = \lambda t = 3 \cdot 2 = 6$.
5. $E[W_t] = 0$.
6. $\pi = (4/7, 3/7) \approx (0.571, 0.429)$.
7. $(P^2)_{11} = 0.7^2 + 0.3 \cdot 0.4 = 0.61$.
8. $P(N_1 = 3) = e^{-2}\dfrac{2^3}{3!} = \dfrac{4}{3}e^{-2} \approx 0.1804$.
9. $\rho = 3/5 = 0.6$; $L = \dfrac{0.6}{0.4} = 1.5$.
10. $E[S_{n+1} \mid \mathcal{F}_n] = S_n + E[X_{n+1}] = S_n + 0 = S_n$.
11. Es irreducible; es periódica de periodo $2$.
12. $P(T_1 > 4) = e^{-0.5 \cdot 4} = e^{-2} \approx 0.1353$.
13. $E[W_t^2] = \mathrm{Var}(W_t) = t$; $E[W_t^2 - t] = 0$.
14. $W_3 - W_1 \sim N(0, 2)$.
15. $X_t = X_0 + \mu t + \sigma W_t$.
16. $\pi = \left(\dfrac{b}{a+b}, \dfrac{a}{a+b}\right)$.
17. Estacionaria de tipo Poisson: $\pi_n = e^{-\rho}\dfrac{\rho^n}{n!}$ con $\rho = \lambda/\mu$.
18. $d(W_t^2) = 2W_t\, dW_t + dt$.
19. $S_t = S_0 \exp\!\left(\left(\mu - \dfrac{\sigma^2}{2}\right)t + \sigma W_t\right)$.
20. $E[T_i] = 1/\pi_i = 4$.
