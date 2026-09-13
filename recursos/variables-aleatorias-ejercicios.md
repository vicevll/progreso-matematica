# Variables aleatorias y distribuciones · 50 ejercicios

## Formulario

| Distribución | Masa o densidad | $E[X]$ | $\text{Var}(X)$ |
|---|---|---|---|
| Bernoulli$(p)$ | $P(X=1)=p$, $P(X=0)=1-p$ | $p$ | $p(1-p)$ |
| Binomial$(n,p)$ | $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| Geométrica$(p)$ | $P(X=k)=(1-p)^{k-1}p$, $k\geq 1$ | $1/p$ | $(1-p)/p^2$ |
| Poisson$(\lambda)$ | $P(X=k)=\dfrac{e^{-\lambda}\lambda^k}{k!}$ | $\lambda$ | $\lambda$ |
| Uniforme$(a,b)$ | $f(x)=\dfrac{1}{b-a}$, $a\leq x\leq b$ | $\dfrac{a+b}{2}$ | $\dfrac{(b-a)^2}{12}$ |
| Exponencial$(\lambda)$ | $f(x)=\lambda e^{-\lambda x}$, $x\geq 0$ | $1/\lambda$ | $1/\lambda^2$ |
| Normal$(\mu,\sigma^2)$ | $f(x)=\dfrac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ | $\mu$ | $\sigma^2$ |

- Masa: $p(x)=P(X=x)$, $\sum_x p(x)=1$. Densidad: $P(a \leq X \leq b)=\int_a^b f(x)\,dx$. En continuas, $P(X=x)=0$.
- Esperanza: $E[X]=\sum_x x\,p(x)$ o $\int x f(x)\,dx$; $E[g(X)]=\sum_x g(x)p(x)$.
- Varianza: $\text{Var}(X)=E[X^2]-(E[X])^2$; $\text{Var}(aX+b)=a^2\text{Var}(X)$; independientes $\Rightarrow$ $\text{Var}(X+Y)=\text{Var}(X)+\text{Var}(Y)$.
- Covarianza y correlación: $\text{Cov}(X,Y)=E[XY]-E[X]E[Y]$; $\rho=\dfrac{\text{Cov}(X,Y)}{\sigma_X\sigma_Y}\in[-1,1]$.
- Estandarización: $Z=\dfrac{X-\mu}{\sigma}\sim N(0,1)$. Regla 68–95–99.7.
- TCL: $\bar{X}_n$ aproximadamente $N(\mu,\sigma^2/n)$; $SE=\sigma/\sqrt{n}$.
- fgm: $M(t)=E[e^{tX}]$; $M'(0)=E[X]$, $M''(0)=E[X^2]$; normal: $M(t)=e^{\mu t+\sigma^2 t^2/2}$.

## Ejercicios (50)

**Bernoulli y binomial (01–08)**

01. $X \sim \text{Bernoulli}(0.7)$: calcula $P(X = 0)$.
02. $X \sim \text{Bin}(5, 0.4)$: calcula $P(X = 2)$.
03. $X \sim \text{Bin}(8, 0.5)$: calcula $P(X = 5)$.
04. En 6 lanzamientos de una moneda justa, ¿probabilidad de exactamente 4 caras?
05. Un examen tipo test tiene 10 preguntas con 4 opciones; se responde al azar. ¿Probabilidad de acertar exactamente 3?
06. $X \sim \text{Bin}(12, 0.6)$: calcula $P(X = 7)$.
07. En 100 lanzamientos de un dado, sea $X$ el número de seises. ¿Cuánto valen $E[X]$ y $\text{Var}(X)$?
08. $X \sim \text{Bin}(3, 0.2)$: calcula $P(X \geq 1)$.

**Poisson (09–12)**

09. $X \sim \text{Poisson}(3)$: calcula $P(X = 0)$.
10. $X \sim \text{Poisson}(4)$: calcula $P(X = 2)$.
11. $X \sim \text{Poisson}(1)$: calcula $P(X \geq 1)$.
12. $X \sim \text{Poisson}(5)$: calcula $P(X \leq 2)$.

**Geométrica (13–15)**

13. $X \sim \text{Geom}(1/3)$: calcula $P(X = 2)$.
14. $X \sim \text{Geom}(0.25)$: calcula $P(X = 4)$.
15. $X \sim \text{Geom}(0.5)$: calcula $E[X]$ y $\text{Var}(X)$.

**Uniforme (16–18)**

16. $X \sim U(0, 10)$: calcula $P(2 < X < 5)$.
17. $X \sim U(1, 7)$: calcula $E[X]$ y $\text{Var}(X)$.
18. $X \sim U(0, 1)$: calcula $P(0.25 < X < 0.75)$.

**Exponencial (19–22)**

19. $X$ exponencial con $\lambda = 2$: calcula $P(X > 1)$.
20. $X$ exponencial con $\lambda = 0.5$: calcula $P(X \leq 4)$.
21. $X$ exponencial con $\lambda = 3$: calcula $E[X]$ y $\text{Var}(X)$.
22. $X$ exponencial con $\lambda = 2$: calcula $P(0.5 < X < 1)$.

**Normal (23–27)**

23. $Z \sim N(0,1)$: calcula $P(Z \leq 1.96)$.
24. $X \sim N(50, 100)$: calcula $P(X > 65)$.
25. $X \sim N(50, 100)$: calcula $P(40 \leq X \leq 60)$.
26. $X \sim N(100, 225)$: calcula $P(X < 85)$.
27. $Z \sim N(0,1)$: calcula $P(-2 \leq Z \leq 2)$.

**Esperanza y varianza (28–35)**

28. $X$ con $p(0)=0.2$, $p(1)=0.3$, $p(2)=0.5$: calcula $E[X]$.
29. Con la misma $X$ del 28: calcula $E[X^2]$ y $\text{Var}(X)$.
30. Si $E[X]=10$ y $\text{Var}(X)=4$: calcula $E[2X+3]$ y $\text{Var}(2X+3)$.
31. $X$ uniforme discreta en $\{1,\ldots,6\}$: calcula $\text{Var}(X)$.
32. $X \sim \text{Bin}(50, 0.2)$: calcula $E[X]$ y $\text{Var}(X)$.
33. $X \sim \text{Poisson}(6)$: calcula $E[X]$ y $\text{Var}(X)$.
34. $X$ exponencial con $\lambda = 4$: calcula $E[X]$ y $\text{Var}(X)$.
35. Si $X \sim N(\mu, \sigma^2)$, calcula $E[3X - 2\mu]$.

**Conjuntas, covarianza y correlación (36–40)**

36. $X$ e $Y$ independientes con $\text{Var}(X)=3$ y $\text{Var}(Y)=5$: calcula $\text{Var}(X+Y)$.
37. $\text{Cov}(X,Y)=4$, $\text{Var}(X)=9$, $\text{Var}(Y)=16$: calcula $\text{Var}(X+Y)$.
38. $\text{Cov}(X,Y)=6$, $\sigma_X=2$, $\sigma_Y=5$: calcula $\rho$.
39. $Y = -2X + 5$ con $\text{Var}(X)=4$: calcula $\text{Cov}(X,Y)$ y $\rho$.
40. De la tabla conjunta $p(0,0)=0.1$, $p(0,1)=0.2$, $p(1,0)=0.3$, $p(1,1)=0.4$: calcula la marginal $p_X(0)$.

**Transformaciones y funciones generadoras (41–44)**

41. $X$ uniforme discreta en $\{-1, 0, 1\}$ e $Y = X^2$: calcula $P(Y = 1)$.
42. $X$ uniforme discreta en $\{1,\ldots,6\}$ e $Y = X^2$: calcula $P(Y = 4)$.
43. La fgm de $X$ es $M(t) = e^{2t + 9t^2/2}$: identifica la distribución, $E[X]$ y $\text{Var}(X)$.
44. $Y = 5X + 1$ con $E[X] = 4$: calcula $E[Y]$.

**Teorema central del límite (45–50)**

45. Con $n=100$, $\mu=50$, $\sigma=20$: calcula el error estándar $SE = \sigma/\sqrt{n}$.
46. Con $n=64$, $\mu=80$, $\sigma=16$: calcula $P(\bar{X} > 83)$.
47. Con $n=25$, $\mu=60$, $\sigma=5$: calcula $P(\bar{X} < 58)$.
48. Con $n=100$, $\mu=500$, $\sigma=100$: calcula $P(490 \leq \bar{X} \leq 510)$.
49. Se lanza un dado 100 veces y se suma. Media y desviación estándar de la suma.
50. Se lanza un dado 100 veces. Aproxima con el TCL (sin corrección de continuidad) la probabilidad de que la suma supere 380.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $1 - 0.7 = 0.3$</div>
<div class="r"><b>02</b> $\binom{5}{2}(0.4)^2(0.6)^3 = 0.3456$</div>
<div class="r"><b>03</b> $\binom{8}{5}(0.5)^8 = 56/256 = 0.21875$</div>
<div class="r"><b>04</b> $\binom{6}{4}(0.5)^6 = 15/64 = 0.234375$</div>
<div class="r"><b>05</b> $\binom{10}{3}(0.25)^3(0.75)^7 \approx 0.2503$</div>
<div class="r"><b>06</b> $\binom{12}{7}(0.6)^7(0.4)^5 \approx 0.2270$</div>
<div class="r"><b>07</b> $E[X] = 100/6 \approx 16.67$; $\text{Var}(X) = 100(1/6)(5/6) \approx 13.89$</div>
<div class="r"><b>08</b> $1 - (0.8)^3 = 0.488$</div>
<div class="r"><b>09</b> $e^{-3} \approx 0.0498$</div>
<div class="r"><b>10</b> $\dfrac{e^{-4}4^2}{2!} = 8e^{-4} \approx 0.1465$</div>
<div class="r"><b>11</b> $1 - e^{-1} \approx 0.6321$</div>
<div class="r"><b>12</b> $e^{-5}(1 + 5 + 25/2) = 18.5\,e^{-5} \approx 0.1247$</div>
<div class="r"><b>13</b> $(2/3)(1/3) = 2/9 \approx 0.2222$</div>
<div class="r"><b>14</b> $(0.75)^3(0.25) = 0.1055$</div>
<div class="r"><b>15</b> $E[X] = 1/0.5 = 2$; $\text{Var}(X) = (1-0.5)/0.25 = 2$</div>
<div class="r"><b>16</b> $(5-2)/10 = 0.3$</div>
<div class="r"><b>17</b> $E[X] = 4$; $\text{Var}(X) = 36/12 = 3$</div>
<div class="r"><b>18</b> $0.75 - 0.25 = 0.5$</div>
<div class="r"><b>19</b> $e^{-2} \approx 0.1353$</div>
<div class="r"><b>20</b> $1 - e^{-0.5 \cdot 4} = 1 - e^{-2} \approx 0.8647$</div>
<div class="r"><b>21</b> $E[X] = 1/3 \approx 0.333$; $\text{Var}(X) = 1/9 \approx 0.111$</div>
<div class="r"><b>22</b> $e^{-1} - e^{-2} \approx 0.2325$</div>
<div class="r"><b>23</b> $0.9750$</div>
<div class="r"><b>24</b> $z = 1.5$; $P(Z > 1.5) \approx 0.0668$</div>
<div class="r"><b>25</b> $P(-1 \leq Z \leq 1) \approx 0.6826$</div>
<div class="r"><b>26</b> $z = -1$; $P(Z < -1) \approx 0.1587$</div>
<div class="r"><b>27</b> $2\Phi(2) - 1 \approx 0.9545$</div>
<div class="r"><b>28</b> $E[X] = 0(0.2) + 1(0.3) + 2(0.5) = 1.3$</div>
<div class="r"><b>29</b> $E[X^2] = 0 + 0.3 + 2 = 2.3$; $\text{Var}(X) = 2.3 - 1.69 = 0.61$</div>
<div class="r"><b>30</b> $E[2X+3] = 23$; $\text{Var}(2X+3) = 16$</div>
<div class="r"><b>31</b> $E[X^2] = 91/6$; $\text{Var}(X) = 91/6 - 12.25 = 35/12 \approx 2.917$</div>
<div class="r"><b>32</b> $E[X] = 10$; $\text{Var}(X) = 8$</div>
<div class="r"><b>33</b> $E[X] = 6$; $\text{Var}(X) = 6$</div>
<div class="r"><b>34</b> $E[X] = 1/4 = 0.25$; $\text{Var}(X) = 1/16 = 0.0625$</div>
<div class="r"><b>35</b> $3E[X] - 2\mu = 3\mu - 2\mu = \mu$</div>
<div class="r"><b>36</b> $\text{Var}(X+Y) = 3 + 5 = 8$</div>
<div class="r"><b>37</b> $9 + 16 + 2(4) = 33$</div>
<div class="r"><b>38</b> $\rho = \dfrac{6}{2 \cdot 5} = 0.6$</div>
<div class="r"><b>39</b> $\text{Cov}(X, -2X+5) = -2\text{Var}(X) = -8$; $\rho = -1$</div>
<div class="r"><b>40</b> $p_X(0) = 0.1 + 0.2 = 0.3$</div>
<div class="r"><b>41</b> $P(Y=1) = P(X=-1) + P(X=1) = 2/3$</div>
<div class="r"><b>42</b> $P(Y=4) = P(X=2) = 1/6$</div>
<div class="r"><b>43</b> Normal $N(2, 9)$: $E[X] = 2$, $\text{Var}(X) = 9$</div>
<div class="r"><b>44</b> $E[Y] = 5(4) + 1 = 21$</div>
<div class="r"><b>45</b> $SE = 20/\sqrt{100} = 2$</div>
<div class="r"><b>46</b> $z = \dfrac{83-80}{16/8} = 1.5$; $P(Z > 1.5) \approx 0.0668$</div>
<div class="r"><b>47</b> $z = \dfrac{58-60}{5/5} = -2$; $P(Z < -2) \approx 0.0228$</div>
<div class="r"><b>48</b> $P(-1 \leq Z \leq 1) \approx 0.6826$</div>
<div class="r"><b>49</b> $E = 350$; $\sigma = \sqrt{100 \cdot 35/12} \approx 17.08$</div>
<div class="r"><b>50</b> $z = \dfrac{380-350}{17.08} \approx 1.76$; $P(Z > 1.76) \approx 0.0392$</div>
</div>
