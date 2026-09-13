# Inferencia bayesiana · ejercicios

## Formulario

### Teorema de Bayes y actualización

$$p(\theta \mid x) = \frac{p(x \mid \theta)\,p(\theta)}{p(x)} \propto p(x \mid \theta)\,p(\theta)$$

En razón de momios (odds), con $\bar{H}$ el complemento de $H$:
$$\frac{P(H \mid x)}{P(\bar{H} \mid x)} = \frac{P(H)}{P(\bar{H})} \times \frac{P(x \mid H)}{P(x \mid \bar{H})}$$

### Familias conjugadas

| Modelo | Previa | Posterior |
| --- | --- | --- |
| Bernoulli/Binomial | $\text{Beta}(\alpha,\beta)$ | $\text{Beta}(\alpha+k,\ \beta+n-k)$ |
| Normal (varianza conocida) | $N(\mu_0,\sigma_0^2)$ | $N(\mu_n,\sigma_n^2)$ |
| Poisson | $\text{Gamma}(\alpha,\beta)$ | $\text{Gamma}(\alpha+S,\ \beta+n)$ |
| Multinomial | $\text{Dirichlet}(\boldsymbol{\alpha})$ | $\text{Dirichlet}(\boldsymbol{\alpha}+\mathbf{k})$ |

Normal-Normal:
$$\frac{1}{\sigma_n^2} = \frac{1}{\sigma_0^2} + \frac{n}{\sigma^2}, \qquad \mu_n = \sigma_n^2\left(\frac{\mu_0}{\sigma_0^2} + \frac{n\bar{x}}{\sigma^2}\right)$$

### Resúmenes del posterior

1. $\text{Beta}(\alpha,\beta)$: media $\dfrac{\alpha}{\alpha+\beta}$; moda $\dfrac{\alpha-1}{\alpha+\beta-2}$; varianza $\dfrac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$.
2. $\text{Gamma}(\alpha,\beta)$ con tasa $\beta$: media $\dfrac{\alpha}{\beta}$; moda $\dfrac{\alpha-1}{\beta}$; varianza $\dfrac{\alpha}{\beta^2}$.
3. $N(\mu_n,\sigma_n^2)$: media $\mu_n$; moda $\mu_n$.
4. Pérdida cuadrática $\Rightarrow$ media posterior; pérdida absoluta $\Rightarrow$ mediana; pérdida $0\text{-}1$ $\Rightarrow$ moda.

### Distribución predictiva posterior

Beta-Binomial, para $\tilde{k}$ éxitos en $m$ ensayos nuevos:
$$p(\tilde{k}) = \binom{m}{\tilde{k}}\frac{B(\alpha+\tilde{k},\ \beta+m-\tilde{k})}{B(\alpha,\beta)}$$
En particular $P(\text{éxito}) = \dfrac{\alpha}{\alpha+\beta}$.

Gamma-Poisson, para $\tilde{k}$ eventos en un intervalo nuevo:
$$P(\tilde{k}) = \frac{\Gamma(\alpha+\tilde{k})}{\Gamma(\alpha)\,\tilde{k}!}\left(\frac{\beta}{\beta+1}\right)^{\alpha}\left(\frac{1}{\beta+1}\right)^{\tilde{k}}$$

Normal-Normal, nueva observación:
$$\tilde{x} \mid x \sim N(\mu_n,\ \sigma_n^2+\sigma^2)$$

### Intervalos creíbles

Un intervalo creíble de nivel $1-\gamma$ cumple:
$$P(\theta \in [a,b] \mid x) = 1-\gamma$$
Aproximación normal: $\theta \approx N(\mu_n,\sigma_n^2)$ y $[a,b] = \mu_n \pm z_{1-\gamma/2}\,\sigma_n$, con $z_{0.975} \approx 1.96$.

### MCMC y comparación de modelos

1. Metropolis-Hastings (propuesta simétrica): $\alpha = \min\left(1, \dfrac{p(\theta^{*}\mid x)}{p(\theta \mid x)}\right)$.
2. Convergencia: $\hat{R} \to 1$; tamaño efectivo de muestra ESS.
3. Factor de Bayes: $BF_{12} = \dfrac{p(x \mid M_1)}{p(x \mid M_2)}$.
4. Criterios predictivos DIC, WAIC y LOO-CV: menor es mejor.
5. Jerárquico: $\dfrac{1}{\sigma_{\theta}^2} = \dfrac{1}{\tau^2} + \dfrac{n}{\sigma^2}$; la media posterior encoge hacia $\mu$.

## Ejercicios (50)

### Bloque A · Beta-Binomial

1. Previa $\text{Beta}(1,1)$ y $n=10$, $k=7$: halla la posterior.
2. Para el ejercicio 1, halla la media posterior.
3. Previa $\text{Beta}(2,3)$ y $n=10$, $k=6$: halla la posterior.
4. Para el ejercicio 3, halla la media posterior.
5. Previa $\text{Beta}(4,4)$ y $n=8$, $k=5$: halla la posterior.
6. Para el ejercicio 5, halla la moda posterior.
7. Previa $\text{Beta}(1,1)$ y $n=9$, $k=6$: halla la varianza posterior.
8. Previa $\text{Beta}(2,2)$ y $n=4$, $k=3$: halla la posterior.
9. Para el ejercicio 8, halla la media posterior.
10. Para el ejercicio 8, halla la probabilidad predictiva de $0$ éxitos en los próximos $3$ ensayos.

### Bloque B · Predictiva e intervalos creíbles

11. Previa $\text{Beta}(1,1)$ y $6$ caras en $9$: probabilidad predictiva de cara en el siguiente lanzamiento.
12. Con lo anterior, probabilidad predictiva de $2$ caras en los $2$ siguientes lanzamientos.
13. Posterior $\text{Beta}(7,4)$: intervalo creíble del $95\%$.
14. Posterior $\text{Beta}(8,4)$: intervalo creíble del $95\%$.
15. Previa $\text{Beta}(1,1)$ sin datos: intervalo creíble del $95\%$.
16. Previa $N(0,1)$, $\sigma^2=4$, $x=3$ y $n=1$: media posterior.
17. Para el ejercicio 16, varianza posterior.
18. Para el ejercicio 16, varianza de la predictiva de una nueva observación.
19. Previa $N(2,1)$, $\sigma^2=1$, $n=4$, $\bar{x}=3$: distribución posterior.
20. Para el ejercicio 19, intervalo creíble del $95\%$.
21. Previa $N(0,1)$, $\sigma^2=1$, $n=10$, $\bar{x}=1$: media posterior.
22. Para el ejercicio 21, varianza posterior.
23. Previa $N(0,0.25)$, $\sigma^2=1$, $n=4$, $\bar{x}=1$: distribución posterior.
24. Con $\sigma_0^2=1$, $\sigma^2=1$ y $n=4$: peso de los datos en la media posterior.
25. Posterior $N(0.6,0.8)$: intervalo creíble del $95\%$.

### Bloque C · Gamma-Poisson

26. Previa $\text{Gamma}(2,1)$, $n=5$ intervalos y $\sum x_i = 15$: halla la posterior.
27. Para el ejercicio 26, media posterior.
28. Para el ejercicio 26, moda posterior.
29. Para el ejercicio 26, probabilidad predictiva de $0$ eventos en el siguiente intervalo.
30. Previa $\text{Gamma}(3,2)$, $n=6$ y $\sum x_i = 18$: posterior y media.
31. Para el ejercicio 30, moda posterior.
32. Previa $\text{Gamma}(1,1)$, $n=4$ y $\sum x_i = 8$: posterior y media.
33. Posterior $\text{Gamma}(17,6)$: intervalo creíble del $95\%$.

### Bloque D · Bayes básico y evidencia

34. Previa en momios $1{:}4$ y razón de verosimilitud $6$: probabilidad posterior.
35. Prevalencia $5\%$, sensibilidad $90\%$, especificidad $90\%$: $P(\text{enfermo} \mid +)$.
36. Prevalencia $1\%$, sensibilidad $99\%$, especificidad $99\%$: $P(\text{enfermo} \mid +)$.
37. Prevalencia $10\%$, sensibilidad $80\%$, especificidad $90\%$: $P(\text{enfermo} \mid +)$.
38. Previa $P(H)=0.3$ y dos datos independientes con razón de verosimilitud $0.8$ frente a $0.2$: posterior.
39. Previa $\text{Beta}(1,1)$ y $6$ caras en $9$: evidencia (verosimilitud marginal).
40. Previa $\text{Beta}(2,2)$ y $6$ caras en $9$: evidencia (verosimilitud marginal).
41. Dos modelos con evidencias $0.1$ y $0.05$: factor de Bayes.
42. Dos modelos con LOO $120$ y $135$: ¿cuál se elige?

### Bloque E · Jerárquicos y aplicaciones

43. Jerárquico: $\mu=0$, $\tau^2=4$, $\sigma^2=1$, $n=3$, $\bar{y}=3$: media posterior de $\theta_j$.
44. Para el ejercicio 43, varianza posterior de $\theta_j$.
45. Jerárquico: $\mu=0$, $\tau^2=1$, $\sigma^2=1$, $n=1$, $\bar{y}=10$: media posterior.
46. Jerárquico: $\mu=0$, $\tau^2=1$, $\sigma^2=1$, $n=100$, $\bar{y}=2$: media posterior.
47. Para el ejercicio 46, varianza posterior.
48. A/B testing con previas $\text{Beta}(1,1)$: A convierte $30/200$ y B $24/200$; medias posteriores.
49. Previa $\text{Beta}(1,1)$ y $6$ caras en $9$: probabilidad predictiva de $0$ caras en el siguiente lanzamiento.
50. Previa $\text{Beta}(1,1)$ y $3$ caras en $6$: media posterior.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $\text{Beta}(8,4)$</div>
<div class="r"><b>02</b> $8/12 = 2/3 \approx 0.667$</div>
<div class="r"><b>03</b> $\text{Beta}(8,7)$</div>
<div class="r"><b>04</b> $8/15 \approx 0.533$</div>
<div class="r"><b>05</b> $\text{Beta}(9,7)$</div>
<div class="r"><b>06</b> $\dfrac{9-1}{9+7-2} = 4/7 \approx 0.571$</div>
<div class="r"><b>07</b> $\dfrac{7 \cdot 4}{11^2 \cdot 12} = \dfrac{7}{363} \approx 0.0193$</div>
<div class="r"><b>08</b> $\text{Beta}(5,3)$</div>
<div class="r"><b>09</b> $5/8 = 0.625$</div>
<div class="r"><b>10</b> $1/12 \approx 0.0833$</div>
<div class="r"><b>11</b> $7/11 \approx 0.636$</div>
<div class="r"><b>12</b> $\dfrac{7 \cdot 8}{11 \cdot 12} = 14/33 \approx 0.424$</div>
<div class="r"><b>13</b> $[0.348,\ 0.878]$</div>
<div class="r"><b>14</b> $[0.390,\ 0.891]$</div>
<div class="r"><b>15</b> $[0.025,\ 0.975]$</div>
<div class="r"><b>16</b> $0.6$</div>
<div class="r"><b>17</b> $0.8$</div>
<div class="r"><b>18</b> $4 + 0.8 = 4.8$</div>
<div class="r"><b>19</b> $N(2.8,\ 0.2)$</div>
<div class="r"><b>20</b> $[1.923,\ 3.677]$</div>
<div class="r"><b>21</b> $10/11 \approx 0.909$</div>
<div class="r"><b>22</b> $1/11 \approx 0.0909$</div>
<div class="r"><b>23</b> $N(0.5,\ 0.125)$</div>
<div class="r"><b>24</b> $4/5 = 0.8$</div>
<div class="r"><b>25</b> $[-1.153,\ 2.353]$</div>
<div class="r"><b>26</b> $\text{Gamma}(17,6)$</div>
<div class="r"><b>27</b> $17/6 \approx 2.833$</div>
<div class="r"><b>28</b> $16/6 = 8/3 \approx 2.667$</div>
<div class="r"><b>29</b> $\left(\dfrac{6}{7}\right)^{17} \approx 0.0728$</div>
<div class="r"><b>30</b> $\text{Gamma}(21,8)$; media $21/8 = 2.625$</div>
<div class="r"><b>31</b> $20/8 = 2.5$</div>
<div class="r"><b>32</b> $\text{Gamma}(9,5)$; media $9/5 = 1.8$</div>
<div class="r"><b>33</b> $[1.651,\ 4.330]$</div>
<div class="r"><b>34</b> momios $6{:}4$, luego $P = 3/5 = 0.6$</div>
<div class="r"><b>35</b> $\dfrac{0.045}{0.045+0.095} \approx 0.321$</div>
<div class="r"><b>36</b> $\dfrac{0.0099}{0.0099+0.0099} = 0.5$</div>
<div class="r"><b>37</b> $\dfrac{0.08}{0.08+0.09} \approx 0.471$</div>
<div class="r"><b>38</b> $48/55 \approx 0.873$</div>
<div class="r"><b>39</b> $\dfrac{1}{10} = 0.1$</div>
<div class="r"><b>40</b> $0.1273$</div>
<div class="r"><b>41</b> $BF_{12} = 0.1/0.05 = 2$</div>
<div class="r"><b>42</b> el de LOO $120$ (menor es mejor)</div>
<div class="r"><b>43</b> $9/3.25 \approx 2.769$</div>
<div class="r"><b>44</b> $1/3.25 \approx 0.308$</div>
<div class="r"><b>45</b> $10/2 = 5$</div>
<div class="r"><b>46</b> $200/101 \approx 1.980$</div>
<div class="r"><b>47</b> $1/101 \approx 0.0099$</div>
<div class="r"><b>48</b> A: $31/202 \approx 0.1535$; B: $25/202 \approx 0.1238$</div>
<div class="r"><b>49</b> $4/11 \approx 0.364$</div>
<div class="r"><b>50</b> $4/8 = 0.5$</div>
</div>
