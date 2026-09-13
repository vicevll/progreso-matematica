# Variables aleatorias y distribuciones — Formulario y 50 ejercicios

## Formulario
### Ley de probabilidad
- **Masa (discreta):** $p(x) = P(X = x)$, con $p(x) \geq 0$ y $\sum_x p(x) = 1$.
- **Densidad (continua):** $f(x) \geq 0$, $\int_{-\infty}^{\infty} f(x)\,dx = 1$ y $P(a \leq X \leq b) = \int_a^b f(x)\,dx$.
- **CDF:** $F(x) = P(X \leq x)$; $F$ no decreciente, $F(-\infty) = 0$, $F(\infty) = 1$.
- **Discreta:** $F(x) = \sum_{t \leq x} p(t)$; **continua:** $F'(x) = f(x)$.

### Esperanza y varianza
$$E[X] = \sum_x x\,p(x) \quad \text{o} \quad E[X] = \int x f(x)\,dx$$
$$E[g(X)] = \sum_x g(x)p(x) \quad \text{o} \quad E[g(X)] = \int g(x)f(x)\,dx$$
$$\operatorname{Var}(X) = E[(X-\mu)^2] = E[X^2] - (E[X])^2$$
- Linealidad: $E[aX + bY] = aE[X] + bE[Y]$.
- $\operatorname{Var}(aX + b) = a^2\operatorname{Var}(X)$.
- Si $X, Y$ independientes: $\operatorname{Var}(X+Y) = \operatorname{Var}(X) + \operatorname{Var}(Y)$.

### Distribuciones discretas
- **Bernoulli($p$):** $P(1) = p$; $E = p$; $\operatorname{Var} = p(1-p)$.
- **Binomial($n, p$):** $P(X=k) = \dbinom{n}{k}p^k(1-p)^{n-k}$; $E = np$; $\operatorname{Var} = np(1-p)$.
- **Geométrica($p$):** $P(X=k) = (1-p)^{k-1}p$; $E = 1/p$; $\operatorname{Var} = (1-p)/p^2$.
- **Poisson($\lambda$):** $P(X=k) = \dfrac{e^{-\lambda}\lambda^k}{k!}$; $E = \lambda$; $\operatorname{Var} = \lambda$.
- **Hipergeométrica:** $P(X=k) = \dfrac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}$.

### Distribuciones continuas
- **Uniforme($a, b$):** $f(x) = \dfrac{1}{b-a}$; $E = \dfrac{a+b}{2}$; $\operatorname{Var} = \dfrac{(b-a)^2}{12}$.
- **Exponencial($\lambda$):** $f(x) = \lambda e^{-\lambda x}$; $E = \dfrac{1}{\lambda}$; $\operatorname{Var} = \dfrac{1}{\lambda^2}$; $P(X > x) = e^{-\lambda x}$.
- **Normal($\mu, \sigma^2$):** $f(x) = \dfrac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$; estandariza con $z = \dfrac{x-\mu}{\sigma}$.
- **Normal estándar:** $P(-1 \leq Z \leq 1) \approx 0.6826$; $P(-1.96 \leq Z \leq 1.96) \approx 0.95$; $P(-3 \leq Z \leq 3) \approx 0.9974$.

### Conjuntas y covarianza
$$\operatorname{Cov}(X, Y) = E[XY] - E[X]E[Y], \qquad \rho = \frac{\operatorname{Cov}(X, Y)}{\sigma_X \sigma_Y} \in [-1, 1]$$
$$\operatorname{Var}(X+Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2\operatorname{Cov}(X, Y)$$

### Teorema central del límite
$$\frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \xrightarrow{d} N(0, 1), \qquad SE = \frac{\sigma}{\sqrt{n}}$$

## Ejercicios (50)
### Esperanza y varianza
1. $X$ = resultado de un dado justo. Halla $E[X]$.
2. Con el dado de 1, halla $\operatorname{Var}(X)$.
3. $X \sim \text{Bernoulli}(0.3)$. Halla $E[X]$.
4. $X \sim \text{Bernoulli}(0.3)$. Halla $\operatorname{Var}(X)$.
5. $X$ tiene masa $p(0) = 0.1$, $p(1) = 0.6$, $p(2) = 0.3$. Halla $E[X]$.
6. Con la masa de 5, halla $\operatorname{Var}(X)$.
7. $X \sim \text{Binomial}(10, 0.5)$. Halla $E[X]$.
8. $X \sim \text{Binomial}(10, 0.5)$. Halla $\operatorname{Var}(X)$.
9. $X \sim \text{Binomial}(12, 0.25)$. Halla $E[X]$.
10. $X \sim \text{Binomial}(12, 0.25)$. Halla $\operatorname{Var}(X)$.

### Binomial, Poisson y geométrica
11. $X \sim \text{Binomial}(5, 0.2)$. Halla $P(X = 0)$.
12. $X \sim \text{Binomial}(5, 0.2)$. Halla $P(X = 2)$.
13. $X \sim \text{Binomial}(10, 0.3)$. Halla $P(X = 3)$.
14. $X \sim \text{Binomial}(4, 0.5)$. Halla $P(X = 2)$.
15. $X \sim \text{Poisson}(2)$. Halla $E[X]$.
16. $X \sim \text{Poisson}(2)$. Halla $\operatorname{Var}(X)$.
17. $X \sim \text{Poisson}(3)$. Halla $P(X = 0)$.
18. $X \sim \text{Poisson}(3)$. Halla $P(X = 2)$.
19. $X \sim \text{Poisson}(4)$. Halla $P(X \leq 1)$.
20. $X \sim \text{Poisson}(1)$. Halla $P(X \geq 1)$.
21. $X \sim \text{Geométrica}(0.25)$. Halla $E[X]$.
22. $X \sim \text{Geométrica}(0.25)$. Halla $\operatorname{Var}(X)$.
23. $X \sim \text{Geométrica}(0.5)$. Halla $P(X = 3)$.
24. $X \sim \text{Geométrica}(0.2)$. Halla $P(X = 1)$.
25. Población de $10$ con $3$ éxitos; se extraen $4$ sin reposición. Halla $P(X = 1)$.

### Uniforme y exponencial
26. $X \sim \text{Uniforme}(0, 1)$. Halla $E[X]$.
27. $X \sim \text{Uniforme}(0, 1)$. Halla $\operatorname{Var}(X)$.
28. $X \sim \text{Uniforme}(2, 8)$. Halla $E[X]$.
29. $X \sim \text{Uniforme}(2, 8)$. Halla $\operatorname{Var}(X)$.
30. $X \sim \text{Uniforme}(0, 10)$. Halla $P(X > 7)$.
31. $X \sim \text{Exponencial}(2)$. Halla $E[X]$.
32. $X \sim \text{Exponencial}(2)$. Halla $\operatorname{Var}(X)$.
33. $X \sim \text{Exponencial}(0.5)$. Halla $E[X]$.
34. $X \sim \text{Exponencial}(0.5)$. Halla $P(X > 2)$.
35. $X \sim \text{Exponencial}(1)$. Halla $P(X \leq 1)$.
36. $X \sim \text{Exponencial}(1/3)$. Halla $P(X > 3)$.

### Normal
37. $Z \sim N(0, 1)$. Halla $P(Z \leq 0)$.
38. $Z \sim N(0, 1)$. Halla $P(-1 \leq Z \leq 1)$.
39. $Z \sim N(0, 1)$. Halla $P(-1.96 \leq Z \leq 1.96)$.
40. $X \sim N(100, 15^2)$. Halla $P(X > 130)$.
41. $X \sim N(500, 100^2)$. Halla $P(X < 600)$.
42. $Z \sim N(0, 1)$. Halla $P(Z > 1.645)$.
43. $X \sim N(50, 10^2)$. Halla $P(40 < X < 60)$.

### Teorema central del límite
44. $n = 100$, $\mu = 50$, $\sigma = 10$. Halla el error estándar de $\bar{X}$.
45. Con los datos de 44, aproxíma $P(\bar{X} > 52)$.
46. $n = 64$, $\mu = 20$, $\sigma = 8$. Aproxíma $P(\bar{X} < 22)$.
47. Se suman $100$ dados justos. Halla la media de la suma.
48. Con los dados de 47, halla la desviación estándar de la suma.
49. Se lanzan $100$ monedas y $X$ cuenta caras. Aproxíma $P(45 \leq X \leq 55)$.
50. $X$ tiene masa $P(1) = 0.3$, $P(2) = 0.4$, $P(3) = 0.3$. Halla $F(2)$.

## Solucionario · resultados
<div class="results">
<div class="r"><b>01</b> $7/2$</div>
<div class="r"><b>02</b> $35/12$</div>
<div class="r"><b>03</b> $0.3$</div>
<div class="r"><b>04</b> $0.21$</div>
<div class="r"><b>05</b> $1.2$</div>
<div class="r"><b>06</b> $0.36$</div>
<div class="r"><b>07</b> $5$</div>
<div class="r"><b>08</b> $2.5$</div>
<div class="r"><b>09</b> $3$</div>
<div class="r"><b>10</b> $9/4$</div>
<div class="r"><b>11</b> $0.3277$</div>
<div class="r"><b>12</b> $0.2048$</div>
<div class="r"><b>13</b> $0.2668$</div>
<div class="r"><b>14</b> $3/8$</div>
<div class="r"><b>15</b> $2$</div>
<div class="r"><b>16</b> $2$</div>
<div class="r"><b>17</b> $0.0498$</div>
<div class="r"><b>18</b> $0.2240$</div>
<div class="r"><b>19</b> $0.0916$</div>
<div class="r"><b>20</b> $0.6321$</div>
<div class="r"><b>21</b> $4$</div>
<div class="r"><b>22</b> $12$</div>
<div class="r"><b>23</b> $1/8$</div>
<div class="r"><b>24</b> $0.2$</div>
<div class="r"><b>25</b> $0.5$</div>
<div class="r"><b>26</b> $1/2$</div>
<div class="r"><b>27</b> $1/12$</div>
<div class="r"><b>28</b> $5$</div>
<div class="r"><b>29</b> $3$</div>
<div class="r"><b>30</b> $0.3$</div>
<div class="r"><b>31</b> $1/2$</div>
<div class="r"><b>32</b> $1/4$</div>
<div class="r"><b>33</b> $2$</div>
<div class="r"><b>34</b> $0.3679$</div>
<div class="r"><b>35</b> $0.6321$</div>
<div class="r"><b>36</b> $0.3679$</div>
<div class="r"><b>37</b> $1/2$</div>
<div class="r"><b>38</b> $0.6826$</div>
<div class="r"><b>39</b> $0.95$</div>
<div class="r"><b>40</b> $0.0228$</div>
<div class="r"><b>41</b> $0.8413$</div>
<div class="r"><b>42</b> $0.05$</div>
<div class="r"><b>43</b> $0.6826$</div>
<div class="r"><b>44</b> $1$</div>
<div class="r"><b>45</b> $0.0228$</div>
<div class="r"><b>46</b> $0.9772$</div>
<div class="r"><b>47</b> $350$</div>
<div class="r"><b>48</b> $17.08$</div>
<div class="r"><b>49</b> $0.6826$</div>
<div class="r"><b>50</b> $0.7$</div>
</div>
