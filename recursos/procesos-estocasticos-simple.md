# Procesos estocásticos

## Procesos estocásticos y la propiedad de Markov

Un **proceso estocástico** es una familia de variables aleatorias indexadas por el tiempo: $\{X_t\}_{t \in T}$. El conjunto de índices $T$ puede ser **discreto** ($T = \{0, 1, 2, \ldots\}$: el proceso se observa a cada paso) o **continuo** ($T = [0, \infty)$: el tiempo fluye sin saltos). Los valores posibles de cada $X_t$ forman el **espacio de estados** $S$, que también puede ser discreto (finito o numerable) o continuo.

**Propiedad de Markov.** El futuro depende del pasado solo a través del presente:
$$P(X_{n+1} = j \mid X_n = i, \; X_{n-1}, \ldots, X_0) = P(X_{n+1} = j \mid X_n = i).$$
La barra $\mid$ se lee "dado que". Toda la información del pasado ya está resumida en el estado actual.

**Cadena de Markov.** Es un proceso con espacio de estados discreto que cumple la propiedad de Markov. Si además el tiempo es discreto, se llama **cadena de Markov en tiempo discreto** (en esta guía, "cadena" a secas).

**Homogeneidad.** La cadena es **homogénea** si la probabilidad de transición no depende del instante $n$:
$$p_{ij} = P(X_{n+1} = j \mid X_n = i).$$
El número $p_{ij}$ (se lee "p sub i jota") es la probabilidad de pasar del estado $i$ al estado $j$ en un paso.

**Matriz de transición.** Los números $p_{ij}$ forman la matriz cuadrada $P = (p_{ij})$. La fila es el estado de partida y la columna el de llegada. Toda matriz de transición cumple:
$$p_{ij} \geq 0, \qquad \sum_{j \in S} p_{ij} = 1.$$
Cada fila suma 1: desde cualquier estado hay que ir a alguna parte.

**Ecuaciones de Chapman-Kolmogorov.** La probabilidad de pasar de $i$ a $j$ en $n + m$ pasos:
$$p^{(n+m)}_{ij} = \sum_{k \in S} p^{(n)}_{ik}\, p^{(m)}_{kj}, \qquad \text{es decir, } P^{n+m} = P^n P^m.$$
Ir de $i$ a $j$ en $n+m$ pasos es ir de $i$ a un estado intermedio $k$ en $n$ pasos y luego de $k$ a $j$ en $m$ pasos, sumando sobre todos los $k$.

**Mini-ejemplo.** El clima de mañana (sol o lluvia) depende solo del clima de hoy: cadena de dos estados. Si estando soleado mañana sigue soleado con probabilidad $0.9$, la fila del estado "sol" es $(0.9,\; 0.1)$ y la matriz completa es $P = \begin{pmatrix} 0.9 & 0.1 \\ 0.5 & 0.5 \end{pmatrix}$.

## Matriz de transición y distribución estacionaria

La distribución de probabilidad sobre los estados en el instante $n$ es un **vector fila** $\pi_n = (\pi_n(i))_{i \in S}$, donde $\pi_n(i) = P(X_n = i)$. Su evolución es lineal:
$$\pi_{n+1} = \pi_n P, \qquad \text{y por inducción: } \pi_n = \pi_0 P^n.$$
$P^n$ es la matriz $P$ multiplicada por sí misma $n$ veces; su entrada $p^{(n)}_{ij}$ es la probabilidad de estar en $j$ después de $n$ pasos partiendo de $i$.

**Distribución estacionaria.** Un vector de probabilidad $\pi$ es **estacionario** si
$$\pi = \pi P, \qquad \sum_i \pi_i = 1.$$
Si hoy la distribución es $\pi$, mañana vuelve a ser $\pi$: no cambia con el tiempo. En álgebra lineal, $\pi$ es un vector propio izquierdo de $P$ con valor propio $1$.

**Ecuaciones de balance.** Componente a componente, el flujo entrante al estado $j$ iguala el saliente:
$$\pi_j = \sum_i \pi_i\, p_{ij}.$$

**Convergencia.** Si la cadena es **irreducible** (todos los estados se comunican) y **aperiódica** (periodo 1), entonces $\pi_n \to \pi$ desde cualquier distribución inicial, y $\pi$ es la única distribución estacionaria.

**Tiempo de retorno esperado.** Para un estado recurrente positivo, el tiempo medio para volver a $i$ es
$$E[T_i] = \frac{1}{\pi_i}.$$
Cuanto menos frecuente es el estado en el largo plazo, más se tarda en regresar.

**Mini-ejemplo.** Con $P = \begin{pmatrix} 0.9 & 0.1 \\ 0.5 & 0.5 \end{pmatrix}$: las ecuaciones $\pi_1 = 0.9\pi_1 + 0.5\pi_2$ y $\pi_1 + \pi_2 = 1$ dan $\pi = (5/6,\; 1/6)$: a largo plazo, $83.3\%$ de días soleados.

## Clases de estados

Dos estados $i$ y $j$ se **comunican** si $i$ alcanza a $j$ y $j$ alcanza a $i$ con probabilidad positiva. La comunicación es una relación de equivalencia que divide el espacio de estados en **clases**.

- **Recurrente:** partiendo de $i$, el proceso regresa a $i$ con probabilidad $1$ (y entonces vuelve infinitas veces).
- **Transitorio:** existe probabilidad positiva de no regresar nunca a $i$; el proceso lo visita un rato y lo abandona para siempre.
- **Periódico:** el regreso solo ocurre en múltiplos de un periodo $d > 1$; si $d = 1$ el estado es **aperiódico**.
- **Irreducible:** todos los estados se comunican entre sí y forman una sola clase.
- **Recurrente positivo:** recurrente y con tiempo de retorno esperado finito ($E[T_i] < \infty$).

**Teorema.** En una cadena finita e irreducible todos los estados son recurrentes positivos y existe una única distribución estacionaria $\pi$ con $\pi_i > 0$ en todas sus componentes.

**Paseo aleatorio.** El paseo aleatorio simple sobre $\mathbb{Z}^d$ (la red de enteros en $d$ dimensiones, con saltos de $\pm 1$ equiprobables en cada coordenada) es **recurrente** en dimensiones $d = 1$ y $d = 2$, y **transitorio** en $d \geq 3$. La frase clásica: "un borracho encuentra el camino a casa; un pájaro borracho puede perderse para siempre".

**Mini-ejemplo.** La cadena con $P = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ es irreducible pero periódica de periodo $2$: alterna eternamente y no converge, aunque sí existe $\pi = (1/2,\; 1/2)$.

## Procesos de Poisson y nacimiento-muerte

**Proceso de Poisson.** Es un proceso de conteo $\{N_t\}_{t \geq 0}$ en tiempo continuo: $N_t$ cuenta los eventos ocurridos hasta el instante $t$. Sus hipótesis: $N_0 = 0$, **incrementos independientes** (intervalos disjuntos no se influyen), **incrementos estacionarios** (solo importa la longitud del intervalo) y eventos de a uno. La tasa $\lambda > 0$ es el número esperado de eventos por unidad de tiempo. El número de eventos en un intervalo de longitud $t$ se distribuye
$$N_t \sim \mathrm{Poisson}(\lambda t), \qquad P(N_t = k) = e^{-\lambda t}\frac{(\lambda t)^k}{k!}, \quad k = 0, 1, 2, \ldots$$
donde $e \approx 2.71828$ y $k! = 1 \cdot 2 \cdots k$. Media y varianza: $\lambda t$.

Los **tiempos entre eventos** $T_1, T_2, \ldots$ son independientes con distribución exponencial:
$$T_i \sim \mathrm{Exponencial}(\lambda), \qquad P(T_i > t) = e^{-\lambda t}, \qquad E[T_i] = \frac{1}{\lambda}.$$
La exponencial no tiene memoria: haber esperado ya no acorta la espera restante.

**Proceso de nacimiento y muerte.** Es una cadena de Markov en tiempo continuo sobre $\{0, 1, 2, \ldots\}$ con tasas de **nacimiento** $\lambda_n$ (salto de $n$ a $n+1$) y de **muerte** $\mu_n$ (salto de $n$ a $n-1$). Modela poblaciones y colas.

**Cola M/M/1.** Un solo servidor, llegadas Poisson de tasa $\lambda$, tiempos de servicio exponenciales de tasa $\mu$. Es **estable** si $\lambda < \mu$; la **utilización** es $\rho = \lambda/\mu$ (fracción de tiempo que el servidor está ocupado). Con $\rho < 1$:
$$L = \frac{\rho}{1 - \rho}, \qquad L_q = \frac{\rho^2}{1 - \rho}, \qquad W = \frac{L}{\lambda} = \frac{1}{\mu - \lambda}.$$
$L$ es el número medio de clientes en el sistema (cola + servicio), $L_q$ en la cola, $W$ el tiempo medio en el sistema. La **ley de Little** $L = \lambda W$ conecta las tres.

**Mini-ejemplo.** Banco con $\lambda = 8$ llegadas por hora y $\mu = 10$ servicios por hora: $\rho = 0.8$ y $L = 4$ clientes en promedio. Si $\rho \to 1$ la cola crece sin límite: la congestión es fuertemente no lineal.

## Martingalas

Sea $\mathcal{F}_n$ la **filtración**: toda la información acumulada hasta el instante $n$. Un proceso $\{M_n\}$ es una **martingala** si
$$E[M_{n+1} \mid \mathcal{F}_n] = M_n.$$
El valor esperado de mañana, conociendo todo lo que ha pasado hasta hoy, es exactamente el valor de hoy: modela **juegos justos**.

- **Submartingala:** $E[M_{n+1} \mid \mathcal{F}_n] \geq M_n$ (juego a tu favor).
- **Supermartingala:** $E[M_{n+1} \mid \mathcal{F}_n] \leq M_n$ (juego en tu contra).

**Ejemplos.** El paseo aleatorio simétrico $S_n = \sum_{i=1}^n X_i$ con $P(X_i = \pm 1) = 1/2$; el capital de un jugador en un juego justo; para el movimiento browniano, $W_t$ y $W_t^2 - t$; y el exponencial $e^{\sigma W_t - \sigma^2 t/2}$.

**Teoremas.** Desigualdad maximal de Doob (controla cuánto puede desviarse); teorema de convergencia de martingalas; **teorema opcional de parada**: bajo condiciones de integrabilidad, detener una martingala en un tiempo de parada conserva la igualdad de esperanzas: $E[M_\tau] = E[M_0]$.

**Mini-ejemplo.** Si $E[X_i] = 0$ y las $X_i$ son independientes,
$$E[S_{n+1} \mid \mathcal{F}_n] = S_n + E[X_{n+1}] = S_n,$$
de modo que $\{S_n\}$ es martingala.

## Movimiento browniano

El **movimiento browniano** estándar (proceso de Wiener) $\{W_t\}_{t \geq 0}$ es un proceso en tiempo continuo y espacio de estados continuo que cumple:

1. $W_0 = 0$.
2. **Incrementos independientes y estacionarios:** para $s < t$, $W_t - W_s$ es independiente del pasado.
3. $W_t - W_s \sim N(0, t - s)$: la variación en un intervalo de longitud $h$ es normal de media $0$ y varianza $h$.

**Propiedades.**
- $E[W_t] = 0$ y $\mathrm{Var}(W_t) = t$: la incertidumbre crece linealmente con el tiempo.
- **Variación cuadrática:** $[W]_t = t$: la suma de los cuadrados de los incrementos converge al tiempo transcurrido.
- **Autosimilitud:** $\{W_{ct}\} \stackrel{d}{=} \{\sqrt{c}\, W_t\}$: reescalado, el proceso se ve igual.
- Las trayectorias son **continuas pero no diferenciables** en ningún punto, y tienen variación total infinita: por eso se necesita un cálculo nuevo (Itô).

**Movimiento browniano geométrico (GBM).** Se define
$$S_t = S_0\, e^{(\mu - \sigma^2/2)\,t + \sigma W_t}$$
y modela precios de activos: los rendimientos siguen un browniano con deriva $\mu$ y volatilidad $\sigma$. El término $-\sigma^2/2$ es la corrección de Itô: la deriva del log-precio no es $\mu$ sino $\mu - \sigma^2/2$.

**Mini-ejemplo.** Para $t = 4$, $W_4 \sim N(0, 4)$, de modo que $P(W_4 \leq 0) = 1/2$ por simetría.

## Cálculo de Itô

Para funciones del browniano la regla de la cadena incorpora un término de segundo orden, porque $(dW_t)^2 \approx dt$. El **lema de Itô** afirma que si $f(t, x)$ tiene derivadas continuas,
$$df(t, W_t) = \left(\frac{\partial f}{\partial t} + \frac{1}{2}\frac{\partial^2 f}{\partial x^2}\right) dt + \frac{\partial f}{\partial x}\, dW_t.$$
En particular, para $f(x) = x^2$ (con $f' = 2x$ y $f'' = 2$):
$$d(W_t^2) = 2W_t\, dW_t + dt.$$
Esto demuestra que $W_t^2 - t$ es martingala (su diferencial no tiene deriva).

La **integral de Itô** $\int_0^t H_s\, dW_s$ se define como límite en media cuadrática (límite en $L^2$) de sumas donde el integrando se evalúa en el extremo izquierdo de cada subintervalo. No es una integral de Riemann-Stieltjes porque $W$ tiene variación no acotada. Dos propiedades: esperanza cero y la **isometría de Itô**:
$$E\left[\left(\int_0^t H_s\, dW_s\right)^2\right] = E\left[\int_0^t H_s^2\, ds\right].$$

**Ecuaciones diferenciales estocásticas (EDS).** Tienen la forma
$$dX_t = \mu(t, X_t)\, dt + \sigma(t, X_t)\, dW_t,$$
donde $\mu$ es la **deriva** (crecimiento promedio) y $\sigma$ la **volatilidad** (intensidad del ruido).

**Fórmula de Black-Scholes.** Para el movimiento browniano geométrico
$$dS_t = \mu S_t\, dt + \sigma S_t\, dW_t,$$
la solución explícita es
$$S_t = S_0 \exp\!\left(\left(\mu - \frac{\sigma^2}{2}\right)t + \sigma W_t\right).$$

**Mini-ejemplo.** Con $\mu = 0.1$ y $\sigma = 0.2$, la deriva efectiva del logaritmo es $\mu - \sigma^2/2 = 0.08$, no $0.1$.

## Ejercicios (20)

**Nivel 1 (básico)**
1. ¿Qué es un proceso estocástico? Da un ejemplo de tiempo discreto y otro de tiempo continuo.
2. Escribe la propiedad de Markov para una cadena $\{X_n\}$.
3. Para $P = \begin{pmatrix} 0.6 & 0.4 \\ 0.3 & 0.7 \end{pmatrix}$, ¿cuánto vale $p_{21}$ y qué significa?
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
15. Para la EDS $dX_t = \mu\, dt + \sigma\, dW_t$ con $\mu$ y $\sigma$ constantes, escribe la solución $X_t$.

**Nivel 4 (reto)**
16. Para $P = \begin{pmatrix} 1-a & a \\ b & 1-b \end{pmatrix}$ con $0 < a, b < 1$, halla la distribución estacionaria $\pi$.
17. En un proceso de nacimiento-muerte con $\lambda_n = \lambda$ constante y $\mu_n = n\mu$ (cola M/M/$\infty$: infinitos servidores), ¿cuál es la distribución estacionaria?
18. Usa el lema de Itô para hallar $d(W_t^2)$.
19. Escribe la solución explícita de $dS_t = \mu S_t\, dt + \sigma S_t\, dW_t$.
20. Si la distribución estacionaria asigna $\pi_i = 1/4$ a un estado, calcula el tiempo de retorno esperado $E[T_i]$.

## Respuestas

1. Una familia de variables aleatorias indexadas por el tiempo $\{X_t\}_{t \in T}$. Discreto: el clima diario o el precio de cierre diario. Continuo: la temperatura a lo largo del día o la posición de una partícula en el agua.
2. $P(X_{n+1} = j \mid X_n = i, X_{n-1}, \ldots, X_0) = P(X_{n+1} = j \mid X_n = i)$.
3. $p_{21} = 0.3$: estando en el estado 2, la probabilidad de pasar al estado 1 en un paso es $0.3$.
4. $E[N_2] = \lambda t = 3 \cdot 2 = 6$ eventos en promedio.
5. $E[W_t] = 0$.
6. $0.3\pi_1 = 0.4\pi_2$ con $\pi_1 + \pi_2 = 1$: $\pi = (4/7,\; 3/7) \approx (0.571,\; 0.429)$.
7. $(P^2)_{11} = 0.7^2 + 0.3 \cdot 0.4 = 0.49 + 0.12 = 0.61$.
8. $P(N_1 = 3) = e^{-2}\dfrac{2^3}{3!} = \dfrac{4}{3}e^{-2} \approx 0.1804$.
9. $\rho = 3/5 = 0.6$; $L = \dfrac{0.6}{0.4} = 1.5$ clientes en promedio.
10. $E[S_{n+1} \mid \mathcal{F}_n] = S_n + E[X_{n+1}] = S_n + 0 = S_n$.
11. Es irreducible (los dos estados se comunican); es periódica de periodo $2$ (solo se regresa en pasos pares).
12. $P(T_1 > 4) = e^{-0.5 \cdot 4} = e^{-2} \approx 0.1353$.
13. $E[W_t^2] = \mathrm{Var}(W_t) = t$ (pues $E[W_t] = 0$); $E[W_t^2 - t] = t - t = 0$.
14. $W_3 - W_1 \sim N(0, 2)$: normal de media 0 y varianza $3 - 1 = 2$.
15. $X_t = X_0 + \mu t + \sigma W_t$.
16. De $a\pi_1 = b\pi_2$ y $\pi_1 + \pi_2 = 1$: $\pi = \left(\dfrac{b}{a+b},\; \dfrac{a}{a+b}\right)$.
17. Estacionaria de tipo Poisson: $\pi_n = e^{-\rho}\dfrac{\rho^n}{n!}$ con $\rho = \lambda/\mu$.
18. $d(W_t^2) = 2W_t\, dW_t + dt$.
19. $S_t = S_0 \exp\!\left(\left(\mu - \dfrac{\sigma^2}{2}\right)t + \sigma W_t\right)$.
20. $E[T_i] = 1/\pi_i = 4$ pasos en promedio.
