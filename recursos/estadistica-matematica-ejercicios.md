# Estadística matemática · 50 ejercicios

Ejercicios de estimadores, suficiencia, máxima verosimilitud, momentos, información de Fisher, cota de Cramér-Rao, pruebas óptimas y bootstrap. Al final, el solucionario con los 50 resultados.

## Formulario

- **Sesgo:** $\text{sesgo}(\hat\theta) = E[\hat\theta] - \theta$; insesgado si $E[\hat\theta] = \theta$.
- **Error cuadrático medio:** $\text{ECM} = \text{Var}(\hat\theta) + (\text{sesgo})^2$.
- **Verosimilitud:** $L(\theta) = \prod_{i=1}^{n} f(x_i; \theta)$; log-verosimilitud $\ell(\theta) = \ln L(\theta)$.
- **MV:** resolver $\frac{\partial \ell}{\partial \theta} = 0$ y verificar máximo; en dominios dependientes del parámetro, inspeccionar la frontera.
- **Momentos:** $E[X^k] = \frac{1}{n}\sum_{i=1}^{n} X_i^k$.
- **Criterio de factorización (Neyman-Fisher):** $L(\theta; x) = g(T(x), \theta) \cdot h(x)$.
- **Rao-Blackwell:** $\hat\theta^* = E[\hat\theta \mid T]$, con $\text{Var}(\hat\theta^*) \leq \text{Var}(\hat\theta)$.
- **Información de Fisher:** $I(\theta) = E\Big[\big(\frac{\partial \ln f}{\partial \theta}\big)^2\Big] = -E\Big[\frac{\partial^2 \ln f}{\partial \theta^2}\Big]$.
- **Cota de Cramér-Rao:** $\text{Var}(\hat\theta) \geq \frac{1}{n I(\theta)}$ (estimador insesgado, condiciones de regularidad).
- **Neyman-Pearson:** rechazar $H_0$ si $\frac{L(\theta_1)}{L(\theta_0)} > c$.
- **Razón de verosimilitud:** $\Lambda = \frac{\sup_{H_0} L(\theta)}{\sup_{\Theta} L(\theta)}$; bajo $H_0$: $-2\ln\Lambda \sim \chi^2_k$ (Wilks).
- **Pivote para la media:** $T = \frac{\bar{X} - \mu}{S/\sqrt{n}} \sim t_{n-1}$.
- **IC 95% con $\sigma$ conocida:** $\bar{x} \pm 1.96 \frac{\sigma}{\sqrt{n}}$.

**Modelos útiles:**
- Bernoulli: $f(x; p) = p^x (1-p)^{1-x}$; MV $\hat p = \bar X$; $I(p) = \frac{1}{p(1-p)}$.
- Poisson: $f(x; \lambda) = \frac{e^{-\lambda}\lambda^x}{x!}$; MV $\hat\lambda = \bar X$; $I(\lambda) = \frac{1}{\lambda}$.
- Exponencial: $f(x; \lambda) = \lambda e^{-\lambda x}$; MV $\hat\lambda = \frac{1}{\bar X}$; $I(\lambda) = \frac{1}{\lambda^2}$.
- Normal: MV $\hat\mu = \bar X$, $\hat\sigma^2 = \frac{1}{n}\sum (X_i - \bar X)^2$; para $\mu$ con $\sigma$ conocida, $I(\mu) = \frac{1}{\sigma^2}$.
- Uniforme $(0, \theta)$: MV $\hat\theta = \max X_i$; $E[\max X_i] = \frac{n}{n+1}\theta$.

## Ejercicios (50)

**Bloque 1 · Estimadores y propiedades (1–10)**

1. Muestra Bernoulli de $n = 10$ con 7 éxitos. Halla el MV de $p$.
2. Muestra Poisson con $\sum x_i = 30$ y $n = 10$. Halla el MV de $\lambda$.
3. Muestra exponencial con promedio $\bar{x} = 4$. Halla el MV de $\lambda$.
4. Muestra normal, $n = 16$, $\bar{x} = 50$, $\sigma = 4$ conocida. Halla el MV de $\mu$.
5. Sesgo de $\frac{1}{n}\sum (X_i - \bar{X})^2$ como estimador de $\sigma^2$.
6. ¿Cuánto vale $E[S^2]$ si $S^2 = \frac{1}{n-1}\sum (X_i - \bar{X})^2$?
7. Estimador insesgado de $p$ en una muestra Bernoulli.
8. Un estimador tiene varianza $4$ y sesgo $1$. Halla su ECM.
9. ¿Es $\bar{X}$ consistente para $\mu$? ¿Por qué?
10. Si $\text{Var}(X) = \sigma^2$, ¿cuánto vale $\text{Var}(\bar{X})$?

**Bloque 2 · Suficiencia y Rao-Blackwell (11–15)**

11. Estadístico suficiente para $p$ en una muestra Bernoulli.
12. Estadístico suficiente para $\lambda$ en una muestra Poisson.
13. Estadístico suficiente para $\mu$ de una normal con $\sigma$ conocida.
14. Estadístico suficiente para $(\mu, \sigma^2)$ de una normal con ambos parámetros desconocidos.
15. Estadístico suficiente para $\theta$ de una uniforme $(0, \theta)$.
16. Al condicionar un estimador insesgado en un estadístico suficiente, ¿qué garantiza el teorema de Rao-Blackwell sobre la varianza?

**Bloque 3 · Máxima verosimilitud y momentos (17–26)**

17. Fórmula general del MV de $p$ en Bernoulli (en términos de $n$ y $X_i$).
18. Fórmula general del MV de $\lambda$ en Poisson.
19. Fórmula general del MV de $\lambda$ en exponencial.
20. MV de $\mu$ para una normal con $\sigma^2$ conocida.
21. MV de $\sigma^2$ para una normal con $\mu$ desconocida. ¿Es insesgado?
22. MV de $\theta$ para la uniforme $(0, \theta)$. ¿Por qué no se usa derivada?
23. Estimador de momentos de $\lambda$ para la exponencial.
24. Estimador de momentos de $\theta$ para la uniforme $(0, \theta)$.
25. Estimador de momentos de $p$ para Bernoulli.
26. Para la uniforme $(0, \theta)$: ¿cuánto vale $E[\max X_i]$?

**Bloque 4 · Información de Fisher y Cramér-Rao (27–36)**

27. Información de Fisher de una observación Bernoulli.
28. Información de Fisher de una observación Poisson.
29. Información de Fisher de una observación exponencial.
30. Información de Fisher para $\mu$ de una normal con $\sigma$ conocida.
31. Cota de Cramér-Rao para $\hat p$ en Bernoulli ($n$ observaciones).
32. Cota de Cramér-Rao para $\hat\lambda$ en Poisson ($n$ observaciones).
33. Cota de Cramér-Rao para $\hat\lambda$ en exponencial ($n$ observaciones).
34. Cota de Cramér-Rao para $\hat\mu$ normal con $\sigma$ conocida ($n$ observaciones).
35. ¿Alcanza $\bar{X}$ la cota de Cramér-Rao para $\mu$ normal con $\sigma$ conocida?
36. ¿Qué nombre recibe un estimador insesgado cuya varianza iguala la cota de Cramér-Rao?

**Bloque 5 · Pruebas e intervalos (37–42)**

37. Probabilidad del error de tipo I (rechazar $H_0$ verdadera).
38. Probabilidad del error de tipo II (no rechazar $H_0$ falsa).
39. Potencia de una prueba en términos de $\beta$.
40. Según Neyman-Pearson, ¿cuándo rechaza $H_0$ la prueba más potente?
41. Según Wilks, ¿qué distribución tiene $-2\ln\Lambda$ bajo $H_0$?
42. IC 95% para $\mu$ con $\sigma = 4$ conocida, $n = 16$ y $\bar{x} = 50$.

**Bloque 6 · Bootstrap, jackknife y cálculos (43–50)**

43. ¿Cómo se genera una muestra bootstrap a partir de $x_1, \ldots, x_n$?
44. ¿Qué hace el jackknife con una muestra de $n$ datos?
45. Uniforme $(0, \theta)$ con $n = 5$ y máximo observado $8$. MV de $\theta$.
46. Uniforme $(0, \theta)$ con $n = 5$ y máximo observado $8$. Estimador insesgado basado en el máximo.
47. Bernoulli con $n = 20$ y $12$ éxitos. MV de $p$.
48. Exponencial con $n = 10$ y $\sum x_i = 25$. MV de $\lambda$.
49. Normal con $n = 25$ y $\sum x_i = 1250$. MV de $\mu$.
50. Poisson con $n = 8$ y $\sum x_i = 32$. MV de $\lambda$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $\hat p = 7/10 = 0.7$</div>
<div class="r"><b>02</b> $\hat\lambda = 30/10 = 3$</div>
<div class="r"><b>03</b> $\hat\lambda = 1/4 = 0.25$</div>
<div class="r"><b>04</b> $\hat\mu = 50$</div>
<div class="r"><b>05</b> $-\sigma^2/n$</div>
<div class="r"><b>06</b> $E[S^2] = \sigma^2$</div>
<div class="r"><b>07</b> $\hat p = \bar X$</div>
<div class="r"><b>08</b> $\text{ECM} = 4 + 1^2 = 5$</div>
<div class="r"><b>09</b> Sí: por la ley de los grandes números, $\bar X \xrightarrow{P} \mu$</div>
<div class="r"><b>10</b> $\text{Var}(\bar X) = \sigma^2/n$</div>
<div class="r"><b>11</b> $T = \sum X_i$</div>
<div class="r"><b>12</b> $T = \sum X_i$</div>
<div class="r"><b>13</b> $T = \bar X$</div>
<div class="r"><b>14</b> $T = \big(\bar X, \sum (X_i - \bar X)^2\big)$</div>
<div class="r"><b>15</b> $T = \max X_i$</div>
<div class="r"><b>16</b> La varianza no aumenta: $\text{Var}(\hat\theta^*) \leq \text{Var}(\hat\theta)$</div>
<div class="r"><b>17</b> $\hat p = \frac{1}{n}\sum_{i=1}^{n} X_i = \bar X$</div>
<div class="r"><b>18</b> $\hat\lambda = \bar X$</div>
<div class="r"><b>19</b> $\hat\lambda = 1/\bar X$</div>
<div class="r"><b>20</b> $\hat\mu = \bar X$</div>
<div class="r"><b>21</b> $\hat\sigma^2 = \frac{1}{n}\sum (X_i - \bar X)^2$; no, tiene sesgo $-\sigma^2/n$</div>
<div class="r"><b>22</b> $\hat\theta = \max X_i$; $L$ es decreciente en $\theta$: el máximo está en la frontera</div>
<div class="r"><b>23</b> $\hat\lambda = 1/\bar X$</div>
<div class="r"><b>24</b> $\hat\theta = 2\bar X$</div>
<div class="r"><b>25</b> $\hat p = \bar X$</div>
<div class="r"><b>26</b> $E[\max X_i] = \frac{n}{n+1}\theta$</div>
<div class="r"><b>27</b> $I(p) = \frac{1}{p(1-p)}$</div>
<div class="r"><b>28</b> $I(\lambda) = 1/\lambda$</div>
<div class="r"><b>29</b> $I(\lambda) = 1/\lambda^2$</div>
<div class="r"><b>30</b> $I(\mu) = 1/\sigma^2$</div>
<div class="r"><b>31</b> $p(1-p)/n$</div>
<div class="r"><b>32</b> $\lambda/n$</div>
<div class="r"><b>33</b> $\lambda^2/n$</div>
<div class="r"><b>34</b> $\sigma^2/n$</div>
<div class="r"><b>35</b> Sí: $\text{Var}(\bar X) = \sigma^2/n$ iguala la cota</div>
<div class="r"><b>36</b> Eficiente</div>
<div class="r"><b>37</b> $\alpha$</div>
<div class="r"><b>38</b> $\beta$</div>
<div class="r"><b>39</b> $1 - \beta$</div>
<div class="r"><b>40</b> Si $L(\theta_1)/L(\theta_0) > c$</div>
<div class="r"><b>41</b> $\chi^2_k$ (asintótica), $k$ = parámetros restringidos</div>
<div class="r"><b>42</b> $50 \pm 1.96 \cdot \frac{4}{4}$: $[48.04,\ 51.96]$</div>
<div class="r"><b>43</b> Remuestrea $n$ valores con reposición de los datos originales</div>
<div class="r"><b>44</b> Deja un dato fuera a la vez y recalcula el estadístico</div>
<div class="r"><b>45</b> $\hat\theta = 8$</div>
<div class="r"><b>46</b> $\hat\theta = \frac{n+1}{n}\cdot 8 = \frac{6}{5}\cdot 8 = 9.6$</div>
<div class="r"><b>47</b> $\hat p = 12/20 = 0.6$</div>
<div class="r"><b>48</b> $\hat\lambda = 10/25 = 0.4$</div>
<div class="r"><b>49</b> $\hat\mu = 1250/25 = 50$</div>
<div class="r"><b>50</b> $\hat\lambda = 32/8 = 4$</div>
</div>
