# Series de tiempo · Formulario y ejercicios

## Formulario

### Componentes y composición

Modelo aditivo: $y_t = T_t + S_t + C_t + \varepsilon_t$.

Modelo multiplicativo: $y_t = T_t \cdot S_t \cdot C_t \cdot \varepsilon_t$.

Logaritmo para linealizar el producto: $\ln y_t = \ln T_t + \ln S_t + \ln C_t + \ln \varepsilon_t$.

### Estacionariedad y diferenciación

Estacionariedad débil: $E[y_t] = \mu$, $\text{Var}(y_t) = \gamma_0$, $\text{Cov}(y_t, y_{t+h}) = \gamma_h$.

Operador de rezago: $L y_t = y_{t-1}$.

Primera diferencia: $\Delta y_t = (1 - L) y_t = y_t - y_{t-1}$.

Diferencia de orden $d$: $\Delta^d y_t = (1 - L)^d y_t$.

Diferencia estacional: $\Delta_s y_t = y_t - y_{t-s}$.

Box-Cox: $y_t^{(\lambda)} = \dfrac{y_t^{\lambda} - 1}{\lambda}$, con logaritmo si $\lambda \to 0$.

### ACF y PACF

$$\rho_h = \frac{\gamma_h}{\gamma_0}, \qquad \rho_0 = 1, \qquad \text{banda} = \pm \frac{1.96}{\sqrt{n}}.$$

Identificación: AR($p$) → PACF corta en $p$; MA($q$) → ACF corta en $q$; ARMA → ambas decaen.

### Modelos AR, MA y ARMA

AR($p$): $y_t = c + \displaystyle\sum_{i=1}^{p}\phi_i y_{t-i} + \varepsilon_t$, media $\mu = \dfrac{c}{1-\sum_i \phi_i}$.

AR(1): estacionario si $\lvert \phi_1 \rvert < 1$, $\rho_h = \phi_1^{h}$, $\text{Var} = \dfrac{\sigma_\varepsilon^2}{1-\phi_1^2}$.

MA($q$): $y_t = \mu + \varepsilon_t + \displaystyle\sum_{j=1}^{q}\theta_j \varepsilon_{t-j}$.

MA(1): $\rho_1 = \dfrac{\theta_1}{1+\theta_1^2}$, $\rho_h = 0$ para $h \geq 2$, $\text{Var} = (1+\theta_1^2)\sigma_\varepsilon^2$.

ARMA($p,q$): $y_t = c + \displaystyle\sum_{i=1}^{p}\phi_i y_{t-i} + \varepsilon_t + \sum_{j=1}^{q}\theta_j \varepsilon_{t-j}$.

### ARIMA y SARIMA

ARIMA($p,d,q$): ARMA aplicado a $\Delta^d y_t$.

SARIMA($p,d,q$)$(P,D,Q)_s$: incluye polinomios y diferencias estacionales de periodo $s$.

AIC: $-2\ln L + 2k$. BIC: $-2\ln L + k\ln n$.

### Suavizado exponencial

SES: $\hat{y}_{t+1} = \alpha y_t + (1-\alpha)\hat{y}_t$.

Holt: $\ell_t = \alpha y_t + (1-\alpha)(\ell_{t-1}+b_{t-1})$, $b_t = \beta(\ell_t-\ell_{t-1})+(1-\beta)b_{t-1}$.

Holt-Winters aditivo: $\hat{y}_{t+h} = \ell_t + h b_t + s_{t+h-s}$.

### ARCH y GARCH

ARCH($q$): $\sigma_t^2 = \omega + \displaystyle\sum_{i=1}^{q}\alpha_i \varepsilon_{t-i}^2$.

GARCH($p,q$): $\sigma_t^2 = \omega + \displaystyle\sum_{i=1}^{q}\alpha_i \varepsilon_{t-i}^2 + \sum_{j=1}^{p}\beta_j \sigma_{t-j}^2$.

Varianza incondicional: $\bar{\sigma}^2 = \dfrac{\omega}{1-\sum\alpha_i-\sum\beta_j}$; persistencia $\sum\alpha_i+\sum\beta_j$.

### Pronóstico y métricas

MAE: $\dfrac{1}{n}\displaystyle\sum_{t=1}^{n}\lvert y_t-\hat{y}_t\rvert$.

RMSE: $\sqrt{\dfrac{1}{n}\displaystyle\sum_{t=1}^{n}(y_t-\hat{y}_t)^2}$.

MAPE: $\dfrac{100}{n}\displaystyle\sum_{t=1}^{n}\left\lvert \dfrac{y_t-\hat{y}_t}{y_t}\right\rvert$.

Baseline ingenuo: $\hat{y}_{t+1} = y_t$ o $\hat{y}_{t+1} = y_{t-s}$.

## Ejercicios (50)

1. **(Estacionariedad)** ¿Es estacionaria la serie $y_t = 5 + \varepsilon_t$?
2. **(Estacionariedad)** Calcula la primera diferencia de $y_t = 2t + \varepsilon_t$.
3. **(Estacionariedad)** Calcula la segunda diferencia de $y_t = t^2$.
4. **(Estacionariedad)** Halla la media de largo plazo del AR(1) con $c = 1$ y $\phi_1 = 0.9$.
5. **(Estacionariedad)** Escribe la condición de estacionariedad de un AR(1).
6. **(Estacionariedad)** ¿Es estacionario el AR(2) $y_t = 0.5y_{t-1} + 0.2y_{t-2} + \varepsilon_t$?
7. **(Estacionariedad)** Escribe la diferencia estacional mensual.
8. **(Estacionariedad)** ¿Es estacionario un paseo aleatorio?
9. **(Estacionariedad)** En un paseo aleatorio con $\sigma_\varepsilon^2 = 2$, calcula $\text{Var}(y_t)$ para $t = 10$.
10. **(Estacionariedad)** ¿Qué transformación estabiliza una varianza que crece con el nivel?
11. **(ACF/PACF)** Para un MA(1) con $\theta_1 = 0.5$, calcula $\rho_1$.
12. **(ACF/PACF)** Para un MA(1) con $\theta_1 = 0.5$, calcula $\rho_2$.
13. **(ACF/PACF)** Para un AR(1) con $\phi_1 = 0.6$, calcula $\rho_2$.
14. **(ACF/PACF)** Si la PACF corta en el rezago 3, ¿qué modelo se sugiere?
15. **(ACF/PACF)** Si la ACF corta después del rezago 2, ¿qué modelo se sugiere?
16. **(AR/MA)** Varianza estacionaria de un AR(1) con $\phi_1 = 0.5$ y $\sigma_\varepsilon^2 = 3$.
17. **(AR/MA)** Varianza de un MA(1) con $\theta_1 = 0.5$ y $\sigma_\varepsilon^2 = 1$.
18. **(AR/MA)** Escribe la fórmula de $\rho_1$ de un MA(1) con coeficiente $\theta_1$.
19. **(AR/MA)** Media de largo plazo del AR(2) con $c = 1$, $\phi_1 = 0.5$ y $\phi_2 = 0.3$.
20. **(AR/MA)** ¿Qué estructuras combina un modelo ARMA?
21. **(Pronóstico)** Con $y_t = 1 + 0.5y_{t-1} + \varepsilon_t$ y $y_t = 4$, pronostica un paso.
22. **(Pronóstico)** Con el modelo anterior, pronostica dos pasos.
23. **(Pronóstico)** Con el mismo AR(1), pronostica tres pasos.
24. **(Pronóstico)** Con $y_t = 1 + 0.5y_{t-1} + 0.2y_{t-2} + \varepsilon_t$, $y_t = 4$ e $y_{t-1} = 2$, pronostica un paso.
25. **(Pronóstico)** Con el AR(2) anterior, pronostica dos pasos.
26. **(Pronóstico)** Para un MA(1) con $\mu = 10$, $\theta_1 = 0.5$ y $\varepsilon_t = 2$, pronostica $\hat{y}_{t+1}$.
27. **(Pronóstico)** Suavizado simple con $\alpha = 0.4$, $y_t = 20$ y $\hat{y}_t = 15$.
28. **(Pronóstico)** Suavizado simple con $\alpha = 0.2$, $y_t = 30$ y $\hat{y}_t = 25$.
29. **(Pronóstico)** ¿Qué produce el suavizado exponencial simple cuando $\alpha = 1$?
30. **(Pronóstico)** ¿Qué componentes añade Holt-Winters frente a Holt?
31. **(Pronóstico)** ¿Qué valor usa el pronóstico ingenuo de un paso?
32. **(Pronóstico)** ¿Qué valor usa el pronóstico ingenuo estacional?
33. **(Métricas)** Serie real $100, 110$ y pronóstico $90, 121$. Calcula el MAPE.
34. **(Métricas)** Serie real $50, 50$ y pronóstico $55, 45$. Calcula el MAPE.
35. **(Métricas)** Errores $2, -2, 2, -2$. Calcula el RMSE.
36. **(Métricas)** Errores $1, -1, 1, -1$. Calcula el RMSE.
37. **(Métricas)** Errores $1, 2, -3$. Calcula el MAE.
38. **(Métricas)** Errores $2, -1, -1$. Calcula el error medio (sesgo).
39. **(Métricas)** Errores $3, 0, -3, 0$. Calcula el MSE.
40. **(Métricas)** Si el RMSE del modelo es $10$ y el del ingenuo es $20$, ¿qué mejora relativa hay?
41. **(Métricas)** Escribe la fórmula del MAPE.
42. **(Métricas)** ¿Qué métrica es adimensional (porcentual) entre MAE, RMSE y MAPE?
43. **(GARCH)** En un GARCH(1,1) con $\alpha_1 = 0.1$ y $\beta_1 = 0.8$, calcula la persistencia.
44. **(GARCH)** ¿Qué indica una persistencia $\alpha_1 + \beta_1$ cercana a $1$?
45. **(GARCH)** ¿Qué cantidad modela la ecuación de un ARCH($q$)?
46. **(Validación)** ¿Cuál es la hipótesis nula de la prueba ADF?
47. **(Validación)** Si el test de Ljung-Box sobre los residuos da $p > 0.05$, ¿qué se concluye?
48. **(Validación)** ¿Qué datos no deben usarse al entrenar un modelo de series de tiempo?
49. **(Validación)** ¿Por qué se diferencia una serie antes de ajustar un ARMA?
50. **(Validación)** En un SARIMA$(p,d,q)(P,D,Q)_s$ para datos mensuales con estacionalidad anual, ¿cuánto vale $s$?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> Sí</div>
<div class="r"><b>02</b> $\Delta y_t = 2 + \varepsilon_t - \varepsilon_{t-1}$</div>
<div class="r"><b>03</b> $2$</div>
<div class="r"><b>04</b> $10$</div>
<div class="r"><b>05</b> $\lvert \phi_1 \rvert < 1$</div>
<div class="r"><b>06</b> Sí</div>
<div class="r"><b>07</b> $y_t - y_{t-12}$</div>
<div class="r"><b>08</b> No</div>
<div class="r"><b>09</b> $20$</div>
<div class="r"><b>10</b> $\ln y_t$</div>
<div class="r"><b>11</b> $0.4$</div>
<div class="r"><b>12</b> $0$</div>
<div class="r"><b>13</b> $0.36$</div>
<div class="r"><b>14</b> AR(3)</div>
<div class="r"><b>15</b> MA(2)</div>
<div class="r"><b>16</b> $4$</div>
<div class="r"><b>17</b> $1.25$</div>
<div class="r"><b>18</b> $\rho_1 = \dfrac{\theta_1}{1+\theta_1^2}$</div>
<div class="r"><b>19</b> $5$</div>
<div class="r"><b>20</b> AR y MA</div>
<div class="r"><b>21</b> $3$</div>
<div class="r"><b>22</b> $2.5$</div>
<div class="r"><b>23</b> $2.25$</div>
<div class="r"><b>24</b> $3.4$</div>
<div class="r"><b>25</b> $3.5$</div>
<div class="r"><b>26</b> $11$</div>
<div class="r"><b>27</b> $17$</div>
<div class="r"><b>28</b> $26$</div>
<div class="r"><b>29</b> $\hat{y}_{t+1} = y_t$</div>
<div class="r"><b>30</b> Nivel, tendencia y estacionalidad</div>
<div class="r"><b>31</b> $\hat{y}_{t+1} = y_t$</div>
<div class="r"><b>32</b> $\hat{y}_{t+1} = y_{t-s}$</div>
<div class="r"><b>33</b> $10\%$</div>
<div class="r"><b>34</b> $10\%$</div>
<div class="r"><b>35</b> $2$</div>
<div class="r"><b>36</b> $1$</div>
<div class="r"><b>37</b> $2$</div>
<div class="r"><b>38</b> $0$</div>
<div class="r"><b>39</b> $4.5$</div>
<div class="r"><b>40</b> $50\%$</div>
<div class="r"><b>41</b> $\text{MAPE} = \dfrac{100}{n}\sum_{t=1}^{n}\left\lvert \dfrac{y_t-\hat{y}_t}{y_t}\right\rvert$</div>
<div class="r"><b>42</b> MAPE</div>
<div class="r"><b>43</b> $0.9$</div>
<div class="r"><b>44</b> Persistencia alta de la volatilidad</div>
<div class="r"><b>45</b> La varianza condicional $\sigma_t^2$</div>
<div class="r"><b>46</b> Raíz unitaria (no estacionariedad)</div>
<div class="r"><b>47</b> Residuos compatibles con ruido blanco</div>
<div class="r"><b>48</b> Datos futuros</div>
<div class="r"><b>49</b> Para alcanzar estacionariedad</div>
<div class="r"><b>50</b> $s = 12$</div>
</div>
