# Procesos estocásticos · 50 ejercicios

## Formulario

### Cadenas de Markov
1. Propiedad de Markov: $P(X_{n+1}=j \mid X_n=i,\; X_{n-1},\ldots,X_0) = p_{ij}$.
2. Transición: $p_{ij} \geq 0$, $\sum_j p_{ij} = 1$ (cada fila suma 1).
3. Chapman-Kolmogorov: $p^{(n+m)}_{ij} = \sum_k p^{(n)}_{ik}\, p^{(m)}_{kj}$, es decir $P^{n+m} = P^n P^m$.
4. Evolución de la ley: $\pi_n = \pi_0 P^n$.
5. Cadena homogénea: $p_{ij}$ no depende de $n$.

### Distribución estacionaria
1. $\pi = \pi P$ con $\sum_i \pi_i = 1$.
2. Balance: $\pi_j = \sum_i \pi_i\, p_{ij}$.
3. Si la cadena es irreducible y aperiódica, $\pi_n \to \pi$ desde cualquier inicio.
4. Cadena finita irreducible: existe única $\pi$ con $\pi_i > 0$.
5. Tiempo de retorno esperado: $E[T_i] = 1/\pi_i$.
6. Dos estados $P = \begin{pmatrix} 1-a & a \\ b & 1-b \end{pmatrix}$: $\pi = \left(\dfrac{b}{a+b},\; \dfrac{a}{a+b}\right)$.

### Clasificación de estados
1. Recurrente: regresa a $i$ con probabilidad $1$.
2. Transitorio: puede no regresar nunca.
3. Periódico de periodo $d > 1$; aperiódico si $d = 1$.
4. Irreducible: una sola clase de comunicación.
5. Recurrente positivo: recurrente y $E[T_i] < \infty$.
6. Paseo aleatorio en $\mathbb{Z}^d$: recurrente para $d = 1, 2$; transitorio para $d \geq 3$.

### Proceso de Poisson
1. $N_t \sim \mathrm{Poisson}(\lambda t)$: $P(N_t = k) = e^{-\lambda t}\dfrac{(\lambda t)^k}{k!}$.
2. $E[N_t] = \lambda t$, $\mathrm{Var}(N_t) = \lambda t$.
3. Tiempos entre eventos: $T_i \sim \mathrm{Exponencial}(\lambda)$, media $1/\lambda$, $P(T_i > t) = e^{-\lambda t}$.
4. Incrementos independientes y estacionarios.
5. Superposición: Poisson$(\lambda_1)$ + Poisson$(\lambda_2)$ = Poisson$(\lambda_1 + \lambda_2)$.

### Nacimiento-muerte y colas M/M/1
1. Utilización $\rho = \lambda/\mu$; estable si y solo si $\rho < 1$.
2. $L = \dfrac{\rho}{1-\rho}$, $L_q = \dfrac{\rho^2}{1-\rho}$.
3. Ley de Little: $W = L/\lambda$, $W_q = L_q/\lambda$.
4. M/M/$\infty$ (infinitos servidores): estacionaria Poisson$(\lambda/\mu)$.

### Martingalas
1. $E[M_{n+1} \mid \mathcal{F}_n] = M_n$ (juego justo).
2. Submartingala: $\geq$; supermartingala: $\leq$.
3. Ejemplos: paseo simétrico $S_n$, capital de juego justo, $W_t$, $W_t^2 - t$, $e^{\sigma W_t - \sigma^2 t/2}$.
4. Teorema opcional de parada: bajo condiciones, $E[M_\tau] = E[M_0]$.
5. Desigualdad maximal de Doob.

### Movimiento browniano
1. $W_0 = 0$; incrementos independientes y estacionarios.
2. $W_t \sim N(0,t)$; $W_t - W_s \sim N(0, t-s)$ para $t > s$.
3. $E[W_t] = 0$, $\mathrm{Var}(W_t) = t$, variación cuadrática $[W]_t = t$.
4. Trayectorias continuas y no diferenciables.
5. GBM: $S_t = S_0\, e^{(\mu - \sigma^2/2)t + \sigma W_t}$.

### Cálculo de Itô
1. Lema de Itô: $df(t, W_t) = \left(f_t + \tfrac{1}{2} f_{xx}\right) dt + f_x\, dW_t$.
2. $d(W_t^2) = 2W_t\, dW_t + dt$.
3. $E[e^{\sigma W_t}] = e^{\sigma^2 t/2}$.
4. EDS lineal: $dX_t = \mu\, dt + \sigma\, dW_t \Rightarrow X_t = X_0 + \mu t + \sigma W_t$.

## Ejercicios (50)

**Cadenas de Markov y transición**
1. Para $P = \begin{pmatrix} 0.8 & 0.2 \\ 0.3 & 0.7 \end{pmatrix}$, halla $p_{12}$ e interpreta.
2. Con esa matriz, calcula $(P^2)_{11}$.
3. Con la misma matriz, escribe la matriz $P^2$ completa.
4. Halla la distribución estacionaria de $P = \begin{pmatrix} 0.8 & 0.2 \\ 0.3 & 0.7 \end{pmatrix}$.
5. Halla $\pi$ para $P = \begin{pmatrix} 0.5 & 0.5 \\ 0.2 & 0.8 \end{pmatrix}$.
6. Partiendo de $X_0 = 1$ con la matriz del ejercicio 1, ¿cuál es $P(X_2 = 1)$?
7. ¿Es $\pi = (1/2,\; 1/2)$ estacionaria para $P = \begin{pmatrix} 0.9 & 0.1 \\ 0.1 & 0.9 \end{pmatrix}$?
8. Escribe las ecuaciones de Chapman-Kolmogorov para $p^{(n+m)}_{ij}$.
9. ¿Qué condición garantiza una única distribución estacionaria en una cadena finita?
10. Calcula $E[T_i]$ si $\pi_i = 0.2$.
11. Partiendo de $\pi_0 = (1, 0)$ con $P = \begin{pmatrix} 0.7 & 0.3 \\ 0.4 & 0.6 \end{pmatrix}$, halla el vector de probabilidad tras un paso.
12. Para $P = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, ¿es irreducible? ¿es periódica?
13. Para $P = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$, ¿es irreducible?
14. Define estado absorbente y da una matriz de ejemplo.
15. ¿Es recurrente el paseo aleatorio simple en $\mathbb{Z}$? ¿y en $\mathbb{Z}^2$?

**Procesos de Poisson**
16. Proceso de Poisson con $\lambda = 4$ por hora: calcula $E[N_3]$.
17. Con $\lambda = 4$ por hora, calcula $P(N_1 = 0)$.
18. Con $\lambda = 4$ por hora, calcula $P(N_2 = 2)$.
19. Con $\lambda = 2$, calcula $P(N_1 \geq 1)$.
20. Con $\lambda = 3$, halla la media del tiempo entre llegadas.
21. Con $\lambda = 3$, calcula $P(T_1 > 0.5)$.
22. ¿Cuál es la varianza de $N_t$ en un proceso de Poisson de tasa $\lambda$?
23. Con $\lambda t = 5$, calcula $P(N = 5)$.
24. Con $\lambda t = 2$, calcula $P(N = 3)$.
25. Si $T_1, T_2 \sim \mathrm{Exponencial}(1)$ independientes, ¿cuál es $E[T_1 + T_2]$?
26. Un proceso de Poisson tiene $\lambda = 6$ por hora. Expresa la tasa por minuto.
27. ¿Son independientes los incrementos de un proceso de Poisson en intervalos disjuntos?

**Nacimiento-muerte y colas**
28. M/M/1 con $\lambda = 4$, $\mu = 5$: calcula $\rho$.
29. Con $\lambda = 4$, $\mu = 5$: calcula $L$.
30. Con $\lambda = 4$, $\mu = 5$: calcula $W$.
31. M/M/1 con $\lambda = 2$, $\mu = 4$: calcula $L$.
32. ¿Cuál es la condición de estabilidad de una cola M/M/1?
33. Con $\rho = 0.5$, calcula $L_q$.

**Martingalas**
34. ¿Es el paseo aleatorio simétrico una martingala?
35. Si $M$ es martingala, ¿cuánto vale $E[M_{n+1} \mid \mathcal{F}_n]$?
36. ¿Es $W_t$ una martingala respecto de su filtración natural?
37. ¿Es $W_t^2 - t$ una martingala?
38. Un capital $M_n$ sigue un juego justo con $M_0 = 10$; halla $E[M_{10}]$.
39. ¿Es $e^{W_t - t/2}$ una martingala?
40. ¿Qué teorema permite detener una martingala conservando su esperanza (bajo condiciones)?

**Movimiento browniano y cálculo de Itô**
41. Con $W_0 = 0$, ¿cuál es la distribución de $W_t$?
42. Calcula $E[W_t]$.
43. Calcula $\mathrm{Var}(W_t)$.
44. ¿Cuál es la distribución de $W_5 - W_2$?
45. ¿Cuánto vale la variación cuadrática $[W]_t$?
46. ¿Son diferenciables las trayectorias del movimiento browniano?
47. Usa el lema de Itô para hallar $d(W_t^2)$.
48. Con $S_0 = 100$, $\mu = 0.1$, $\sigma = 0.2$, $t = 1$ y $Z = 0$, calcula $S_1$.
49. Escribe la EDS del movimiento browniano geométrico.
50. Calcula $E[e^{\sigma W_t}]$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $p_{12}=0.2$: estando en el estado 1, la probabilidad de pasar al estado 2 es 0.2</div>
<div class="r"><b>02</b> $0.8\cdot0.8+0.2\cdot0.3=0.70$</div>
<div class="r"><b>03</b> $\begin{pmatrix} 0.70 & 0.30 \\ 0.45 & 0.55 \end{pmatrix}$</div>
<div class="r"><b>04</b> $(3/5,\ 2/5)=(0.6,\ 0.4)$</div>
<div class="r"><b>05</b> $(2/7,\ 5/7)\approx(0.286,\ 0.714)$</div>
<div class="r"><b>06</b> $(P^2)_{11}=0.70$</div>
<div class="r"><b>07</b> Sí: $\pi P=(0.5,\ 0.5)=\pi$</div>
<div class="r"><b>08</b> $p^{(n+m)}_{ij} = \sum_k p^{(n)}_{ik}\, p^{(m)}_{kj}$</div>
<div class="r"><b>09</b> Que sea irreducible (y aperiódica para la convergencia)</div>
<div class="r"><b>10</b> $1/0.2 = 5$</div>
<div class="r"><b>11</b> $(0.7,\ 0.3)$</div>
<div class="r"><b>12</b> Sí es irreducible; periódica de periodo $2$</div>
<div class="r"><b>13</b> No: dos clases cerradas que no se comunican</div>
<div class="r"><b>14</b> Estado con $p_{ii}=1$; p. ej. $\begin{pmatrix} 1 & 0 \\ 0.5 & 0.5 \end{pmatrix}$</div>
<div class="r"><b>15</b> Sí; sí (recurrente en $d=1$ y $d=2$, transitorio en $d\geq3$)</div>
<div class="r"><b>16</b> $\lambda t = 4\cdot3 = 12$</div>
<div class="r"><b>17</b> $e^{-4} \approx 0.0183$</div>
<div class="r"><b>18</b> $e^{-8}\cdot8^2/2! = 32e^{-8} \approx 0.0107$</div>
<div class="r"><b>19</b> $1 - e^{-2} \approx 0.8647$</div>
<div class="r"><b>20</b> $1/\lambda = 1/3 \approx 0.333$</div>
<div class="r"><b>21</b> $e^{-3\cdot0.5} = e^{-1.5} \approx 0.2231$</div>
<div class="r"><b>22</b> $\lambda t$ (igual que la media)</div>
<div class="r"><b>23</b> $e^{-5}5^5/5! \approx 0.1755$</div>
<div class="r"><b>24</b> $e^{-2}2^3/3! = 4e^{-2}/3 \approx 0.1804$</div>
<div class="r"><b>25</b> $1+1 = 2$</div>
<div class="r"><b>26</b> $6/60 = 0.1$ por minuto</div>
<div class="r"><b>27</b> Sí: los incrementos en intervalos disjuntos son independientes</div>
<div class="r"><b>28</b> $\rho = 4/5 = 0.8$</div>
<div class="r"><b>29</b> $L = 0.8/0.2 = 4$</div>
<div class="r"><b>30</b> $W = L/\lambda = 4/4 = 1$</div>
<div class="r"><b>31</b> $\rho=0.5$; $L = 0.5/0.5 = 1$</div>
<div class="r"><b>32</b> $\rho < 1$, es decir $\lambda < \mu$</div>
<div class="r"><b>33</b> $L_q = 0.25/0.5 = 0.5$</div>
<div class="r"><b>34</b> Sí</div>
<div class="r"><b>35</b> $M_n$</div>
<div class="r"><b>36</b> Sí</div>
<div class="r"><b>37</b> Sí</div>
<div class="r"><b>38</b> $E[M_{10}] = M_0 = 10$</div>
<div class="r"><b>39</b> Sí: $e^{W_t-t/2}$ es martingala (exponencial de Doléans)</div>
<div class="r"><b>40</b> Teorema opcional de parada (de Doob)</div>
<div class="r"><b>41</b> $N(0, t)$</div>
<div class="r"><b>42</b> $0$</div>
<div class="r"><b>43</b> $t$</div>
<div class="r"><b>44</b> $N(0, 3)$</div>
<div class="r"><b>45</b> $t$</div>
<div class="r"><b>46</b> No: continuas en todas partes, diferenciables en ninguna</div>
<div class="r"><b>47</b> $2W_t\, dW_t + dt$</div>
<div class="r"><b>48</b> $100e^{0.08} \approx 108.33$</div>
<div class="r"><b>49</b> $dS_t = \mu S_t\, dt + \sigma S_t\, dW_t$</div>
<div class="r"><b>50</b> $e^{\sigma^2 t/2}$</div>
</div>
