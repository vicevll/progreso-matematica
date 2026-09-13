# Estadística matemática · 50 ejercicios
**Cuaderno de práctica · Probabilidad y estadística · Univ 3–4**
*Estimadores, suficiencia y máxima verosimilitud.*

## Formulario
### Estimadores y error cuadrático medio
- Sesgo: $\text{Sesgo}(\hat{\theta}) = E[\hat{\theta}] - \theta$
- Insesgado: $E[\hat{\theta}] = \theta$
- Error cuadrático medio: $\text{ECM}(\hat{\theta}) = \text{Var}(\hat{\theta}) + \text{Sesgo}(\hat{\theta})^2$
- $\text{Var}(\bar{X}) = \sigma^2/n$
- $S^2 = \frac{1}{n-1}\sum (X_i-\bar{X})^2$ es insesgado para $\sigma^2$
- $S_n^2 = \frac{1}{n}\sum (X_i-\bar{X})^2$ tiene sesgo $-\sigma^2/n$
- Consistencia: $\hat{\theta} \xrightarrow{P} \theta$ cuando $n \to \infty$

### Suficiencia
- Criterio de Neyman–Fisher: $L(\theta;x) = g(T(x),\theta)\,h(x)$
- Rao–Blackwell: $E[\hat{\theta} \mid T]$ mejora a $\hat{\theta}$ si $T$ es suficiente
- Suficientes: normal $\sum X_i$ para $\mu$; Poisson $\sum X_i$ para $\lambda$; Bernoulli $\sum X_i$ para $p$; uniforme$(0,\theta)$ el $\max X_i$; normal con $\mu$ conocido, $\sum (X_i-\mu)^2$ para $\sigma^2$

### Máxima verosimilitud
- $L(\theta) = \prod_i f(x_i;\theta)$, $\ell(\theta) = \ln L(\theta)$
- Ecuación de verosimilitud: $\dfrac{\partial \ell}{\partial \theta} = 0$
- Bernoulli: $\hat{p} = \bar{X}$
- Poisson: $\hat{\lambda} = \bar{X}$
- Exponencial: $\hat{\lambda} = 1/\bar{X}$
- Normal: $\hat{\mu} = \bar{X}$, $\hat{\sigma}^2 = \frac{1}{n}\sum (X_i-\bar{X})^2$
- Uniforme$(0,\theta)$: $\hat{\theta} = \max X_i$
- Invariancia: si $\hat{\theta}$ es MV de $\theta$, $g(\hat{\theta})$ es MV de $g(\theta)$

### Método de momentos
- Igualdad de momentos: $E[X^k] = \frac{1}{n}\sum_i X_i^k$
- Uniforme$(0,\theta)$: $\hat{\theta} = 2\bar{X}$

### Información de Fisher
- $I(\theta) = E\left[\left(\dfrac{\partial \ln f}{\partial \theta}\right)^2\right] = -E\left[\dfrac{\partial^2 \ln f}{\partial \theta^2}\right]$
- Normal con $\sigma$ conocida: $I(\mu) = 1/\sigma^2$
- Bernoulli: $I(p) = \dfrac{1}{p(1-p)}$
- Poisson: $I(\lambda) = 1/\lambda$
- Exponencial: $I(\lambda) = 1/\lambda^2$
- Normal: $I(\sigma^2) = \dfrac{1}{2\sigma^4}$
- Aditividad: muestra iid con información $n\,I(\theta)$

### Cota de Cramér–Rao y eficiencia
- $\text{Var}(\hat{\theta}) \geq \dfrac{1}{n\,I(\theta)}$ para insesgados regulares
- $\bar{X}$ es eficiente para $\mu$ en la normal
- MV es asintóticamente eficiente
- La uniforme$(0,\theta)$ no cumple regularidad (el soporte depende del parámetro)

### Pruebas óptimas
- Neyman–Pearson: rechaza si $\dfrac{L(\theta_1;x)}{L(\theta_0;x)} \gt k$
- Razón de verosimilitud: $\Lambda = \dfrac{\sup_{\Theta_0} L(\theta)}{\sup_{\Theta} L(\theta)}$
- Wilks: bajo $H_0$, $-2\ln\Lambda \sim \chi^2$ asintóticamente
- Grados de libertad: número de restricciones (diferencia de parámetros libres)
- Nivel: $\alpha = P(\text{rechazar} \mid H_0)$; potencia: $1-\beta = P(\text{rechazar} \mid H_1)$

### Bootstrap y jackknife
- Bootstrap: $B$ remuestras con reposición; percentiles para el intervalo
- Jackknife del sesgo: $(n-1)\big(\bar{\hat{\theta}}_{(\cdot)} - \hat{\theta}\big)$
- Varianza jackknife: $\dfrac{n-1}{n}\sum_i \big(\hat{\theta}_{(i)} - \bar{\hat{\theta}}_{(\cdot)}\big)^2$

## Ejercicios (50)
### Nivel 1 — Sesgo y ECM
1. $X_1,\dots,X_n$ iid con $E[X_i]=\mu$. Halla el sesgo de $\bar{X}$ para $\mu$.
2. Halla el sesgo de $S_n^2 = \frac{1}{n}\sum (X_i-\bar{X})^2$ para $\sigma^2$.
3. Con $E[X]=\mu$ y $\text{Var}(X)=\sigma^2$, calcula $\text{ECM}(\bar{X})$ para $\mu$.
4. Un estimador tiene $\text{Var}(\hat{\theta})=\sigma^2/n$ y sesgo $b$. Escribe su ECM.
5. $X \sim U(0,\theta)$ y $\hat{\theta}=2\bar{X}$. Halla el sesgo.
6. $X \sim \text{Bernoulli}(p)$ y $\hat{p}=\bar{X}$. Halla el sesgo.
7. Con $E[X]=\mu$, halla el sesgo de $T=\frac{1}{n+1}\sum X_i$ para $\mu$.
8. Entre $\bar{X}$ y $X_1$, ¿cuál tiene menor ECM para $\mu$?

### Nivel 2 — Suficiencia
9. Normal con $\sigma$ conocida. Da un estadístico suficiente para $\mu$.
10. Poisson$(\lambda)$. Da un estadístico suficiente para $\lambda$.
11. Uniforme$(0,\theta)$. Da un estadístico suficiente para $\theta$.
12. Bernoulli$(p)$. Da un estadístico suficiente para $p$.
13. Exponencial$(\lambda)$. Da un estadístico suficiente para $\lambda$.
14. Normal con $\mu$ conocido. Da un estadístico suficiente para $\sigma^2$.
15. En $L(\theta;x)=\theta^{-n}\prod_i \mathbb{1}_{[0,\theta]}(x_i)$, identifica el estadístico suficiente.
16. Mejora por Rao–Blackwell el estimador $\mathbb{1}_{X_1=1}$ de $p$ usando $T=\sum X_i$.

### Nivel 3 — Máxima verosimilitud
17. Halla el MV de $p$ en Bernoulli$(p)$.
18. Halla el MV de $\lambda$ en Poisson$(\lambda)$.
19. Halla el MV de $\lambda$ en exponencial$(\lambda)$.
20. Halla el MV de $\mu$ en normal con $\sigma$ conocida.
21. Halla el MV de $\sigma^2$ en normal con $\mu$ conocido.
22. Halla el MV de $\sigma^2$ en normal con $\mu$ desconocido.
23. Halla el MV de $\theta$ en uniforme$(0,\theta)$.
24. Halla el MV de $p$ en la geométrica $P(X=k)=(1-p)^{k-1}p$.
25. Halla el MV de $\theta$ en $f(x;\theta)=\theta x^{\theta-1}$ para $0 \lt x \lt 1$.
26. Datos exponenciales con $\bar{x}=4$. Estima $\lambda$ por MV.

### Nivel 4 — Momentos e información de Fisher
27. Halla el estimador de momentos de $\theta$ en uniforme$(0,\theta)$.
28. Halla el estimador de momentos de $\lambda$ en Poisson$(\lambda)$.
29. Calcula $I(\mu)$ para la normal con $\sigma$ conocida.
30. Calcula $I(p)$ para Bernoulli$(p)$.
31. Calcula $I(\lambda)$ para Poisson$(\lambda)$.
32. Calcula $I(\lambda)$ para exponencial$(\lambda)$.
33. Calcula $I(\mu)$ para la normal con $\sigma=2$.
34. ¿Por qué la uniforme$(0,\theta)$ no admite la cota de Cramér–Rao?

### Nivel 5 — Cramér–Rao y eficiencia
35. Cota de Cramér–Rao para $\mu$ en la normal ($\sigma$ conocida).
36. Cota de Cramér–Rao para $p$ en Bernoulli.
37. Cota de Cramér–Rao para $\lambda$ en Poisson.
38. Cota de Cramér–Rao para $\lambda$ en exponencial.
39. Cota de Cramér–Rao para $\mu$ con $n=10$ y $\sigma=2$.
40. Cota de Cramér–Rao para $\sigma^2$ en la normal con $\mu$ conocido.
41. ¿Cuál es la eficiencia de $\bar{X}$ para $\mu$ en la normal?
42. ¿Cuál es la eficiencia asintótica del estimador MV?

### Nivel 6 — Pruebas óptimas
43. ¿Qué cociente compara con una constante la prueba de Neyman–Pearson?
44. Prueba $H_0:\theta=\theta_0$ frente a $H_1:\theta=\theta_1 \gt \theta_0$ en la exponencial. ¿Para qué valores de $\sum X_i$ se rechaza?
45. ¿Cuál es la distribución asintótica de $-2\ln\Lambda$ bajo $H_0$?
46. Al contrastar $H_0:\mu=\mu_0$ en la normal con $\sigma$ conocida, ¿cuántos grados de libertad tiene?
47. En ese mismo contraste, ¿a qué equivale $-2\ln\Lambda$?
48. Define el nivel de significancia $\alpha$.
49. Define la potencia de una prueba.
50. Si $\alpha=0.05$ y $\beta=0.20$, halla la potencia.

## Solucionario · resultados
<div class="results">
<div class="r"><b>01</b> $0$</div>
<div class="r"><b>02</b> $-\sigma^2/n$</div>
<div class="r"><b>03</b> $\sigma^2/n$</div>
<div class="r"><b>04</b> $\sigma^2/n + b^2$</div>
<div class="r"><b>05</b> $0$</div>
<div class="r"><b>06</b> $0$</div>
<div class="r"><b>07</b> $-\dfrac{\mu}{n+1}$</div>
<div class="r"><b>08</b> $\bar{X}$</div>
<div class="r"><b>09</b> $\bar{X}$ (o $\sum X_i$)</div>
<div class="r"><b>10</b> $\sum X_i$</div>
<div class="r"><b>11</b> $\max X_i$</div>
<div class="r"><b>12</b> $\sum X_i$</div>
<div class="r"><b>13</b> $\sum X_i$</div>
<div class="r"><b>14</b> $\sum (X_i-\mu)^2$</div>
<div class="r"><b>15</b> $T=\max X_i$</div>
<div class="r"><b>16</b> $\bar{X}$</div>
<div class="r"><b>17</b> $\hat{p}=\bar{X}$</div>
<div class="r"><b>18</b> $\hat{\lambda}=\bar{X}$</div>
<div class="r"><b>19</b> $\hat{\lambda}=1/\bar{X}$</div>
<div class="r"><b>20</b> $\hat{\mu}=\bar{X}$</div>
<div class="r"><b>21</b> $\dfrac{1}{n}\sum (X_i-\mu)^2$</div>
<div class="r"><b>22</b> $\dfrac{1}{n}\sum (X_i-\bar{X})^2$</div>
<div class="r"><b>23</b> $\max X_i$</div>
<div class="r"><b>24</b> $\hat{p}=1/\bar{X}$</div>
<div class="r"><b>25</b> $\hat{\theta}=-\dfrac{n}{\sum \ln X_i}$</div>
<div class="r"><b>26</b> $0.25$</div>
<div class="r"><b>27</b> $2\bar{X}$</div>
<div class="r"><b>28</b> $\bar{X}$</div>
<div class="r"><b>29</b> $1/\sigma^2$</div>
<div class="r"><b>30</b> $\dfrac{1}{p(1-p)}$</div>
<div class="r"><b>31</b> $1/\lambda$</div>
<div class="r"><b>32</b> $1/\lambda^2$</div>
<div class="r"><b>33</b> $1/4$</div>
<div class="r"><b>34</b> El soporte depende de $\theta$; no hay regularidad</div>
<div class="r"><b>35</b> $\sigma^2/n$</div>
<div class="r"><b>36</b> $\dfrac{p(1-p)}{n}$</div>
<div class="r"><b>37</b> $\lambda/n$</div>
<div class="r"><b>38</b> $\lambda^2/n$</div>
<div class="r"><b>39</b> $0.4$</div>
<div class="r"><b>40</b> $\dfrac{2\sigma^4}{n}$</div>
<div class="r"><b>41</b> $1$ (alcanza la cota)</div>
<div class="r"><b>42</b> $1$ (asintóticamente eficiente)</div>
<div class="r"><b>43</b> El cociente $L(\theta_1;x)/L(\theta_0;x)$</div>
<div class="r"><b>44</b> Para $\sum X_i$ pequeño</div>
<div class="r"><b>45</b> Una $\chi^2$ (Wilks)</div>
<div class="r"><b>46</b> $1$</div>
<div class="r"><b>47</b> $z^2$ con $z=\dfrac{\bar{X}-\mu_0}{\sigma/\sqrt{n}}$</div>
<div class="r"><b>48</b> $\alpha=P(\text{rechazar } H_0 \mid H_0)$</div>
<div class="r"><b>49</b> $1-\beta=P(\text{rechazar } H_0 \mid H_1)$</div>
<div class="r"><b>50</b> $0.80$</div>
</div>
