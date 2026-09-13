# Series de tiempo · 50 ejercicios

## Formulario

### Componentes y estacionariedad

Modelo aditivo: $y_t = T_t + S_t + C_t + \varepsilon_t$; multiplicativo: $y_t = T_t \cdot S_t \cdot C_t \cdot \varepsilon_t$, donde $T_t$ es tendencia, $S_t$ estacionalidad, $C_t$ ciclo y $\varepsilon_t$ ruido.

Estacionariedad débil: media constante $E[y_t] = \mu$; varianza constante $\text{Var}(y_t) = \sigma^2$; autocovarianza $\text{Cov}(y_t, y_{t+h})$ que depende solo de $h$.

Transformaciones:

$$\Delta y_t = y_t - y_{t-1}, \qquad \Delta_s y_t = y_t - y_{t-s}, \qquad \ln y_t$$

### ACF y PACF

$$\rho_h = \frac{\text{Cov}(y_t, y_{t+h})}{\text{Var}(y_t)}, \qquad \rho_0 = 1$$

- AR($p$): ACF decae; PACF corta en $p$.
- MA($q$): ACF corta en $q$; PACF decae.
- ARMA($p,q$): ambas decaen.

### Modelos AR, MA y ARMA

AR($p$): $y_t = c + \phi_1 y_{t-1} + \cdots + \phi_p y_{t-p} + \varepsilon_t$

MA($q$): $y_t = \mu + \varepsilon_t + \theta_1 \varepsilon_{t-1} + \cdots + \theta_q \varepsilon_{t-q}$

ARMA($p,q$): $y_t = c + \phi_1 y_{t-1} + \cdots + \phi_p y_{t-p} + \varepsilon_t + \theta_1 \varepsilon_{t-1} + \cdots + \theta_q \varepsilon_{t-q}$

AR(1): estacionario si $|\phi| < 1$; media $\mu = \dfrac{c}{1-\phi}$; autocorrelaciones $\rho_h = \phi^h$; varianza $\dfrac{\sigma^2}{1-\phi^2}$.

MA(1): varianza $\sigma^2(1+\theta^2)$; $\rho_1 = \dfrac{\theta}{1+\theta^2}$; $\rho_h = 0$ para $h \geq 2$.

MA(2): $\rho_1 = \dfrac{\theta_1(1+\theta_2)}{1+\theta_1^2+\theta_2^2}$; $\rho_2 = \dfrac{\theta_2}{1+\theta_1^2+\theta_2^2}$; $\rho_h = 0$ para $h \geq 3$.

### ARIMA y SARIMA

ARIMA($p,d,q$): ARMA($p,q$) sobre la serie diferenciada $d$ veces.

SARIMA($p,d,q$)($P,D,Q$)$_s$: añade parte estacional de periodo $s$; la diferencia estacional es $\Delta_s y_t = y_t - y_{t-s}$.

Box-Jenkins: identificación $\to$ estimación $\to$ diagnóstico $\to$ pronóstico. Residuos: $\hat{\varepsilon}_t = y_t - \hat{y}_t$; deben ser ruido blanco (prueba de Ljung-Box).

### Suavizado exponencial

SES: $\hat{y}_{t+1} = \alpha y_t + (1-\alpha)\hat{y}_t$, con $0 < \alpha < 1$.

Holt añade tendencia; Holt-Winters añade estacionalidad (aditiva o multiplicativa).

### Volatilidad ARCH/GARCH

ARCH($q$): $\sigma_t^2 = \omega + \alpha_1 \varepsilon_{t-1}^2 + \cdots + \alpha_q \varepsilon_{t-q}^2$

GARCH($p,q$): $\sigma_t^2 = \omega + \displaystyle\sum_{i=1}^{q} \alpha_i \varepsilon_{t-i}^2 + \displaystyle\sum_{j=1}^{p} \beta_j \sigma_{t-j}^2$

GARCH(1,1): $\alpha_1 + \beta_1$ mide la persistencia de la volatilidad.

### Métricas de error

Con $e_t = y_t - \hat{y}_t$:

$$\text{MAE} = \frac{1}{n}\sum_{t=1}^{n}|e_t|, \qquad \text{RMSE} = \sqrt{\frac{1}{n}\sum_{t=1}^{n} e_t^2}, \qquad \text{MAPE} = \frac{100}{n}\sum_{t=1}^{n}\left|\frac{e_t}{y_t}\right|$$

## Ejercicios (50)

### Bloque A · Componentes y estacionariedad

1. Nombra los cuatro componentes clásicos de una serie de tiempo.
2. Enuncia las tres condiciones de la estacionariedad débil.
3. ¿Es estacionaria $y_t = 10 + 2t + \varepsilon_t$? Justifica.
4. ¿Es estacionario el AR(1) $y_t = 0.6 y_{t-1} + \varepsilon_t$? Justifica.
5. Aplica una diferencia a $y_t = 5 + 4t + \varepsilon_t$.
6. ¿Para qué se aplica el logaritmo a una serie?
7. ¿Qué transformación elimina una estacionalidad de periodo 7? Escríbela.
8. Escribe la diferencia estacional de una serie mensual con estacionalidad anual.
9. ¿Es estacionario el paseo aleatorio $y_t = y_{t-1} + \varepsilon_t$?
10. ¿Qué transformación convierte al paseo aleatorio en estacionario?

### Bloque B · Modelos AR

11. AR(1) con $\phi = 0.9$ y $c = 2$: halla la media de largo plazo.
12. AR(1) con $\phi = -0.5$ y $c = 0$: halla la media de largo plazo.
13. Escribe la ecuación de un AR(2).
14. ¿Cuál es la condición de estacionariedad de un AR(1)?
15. AR(1) con $\phi = 0.7$: halla la autocorrelación de rezago 2.
16. ¿Es estacionario el AR(2) con $\phi_1 = 0.5$ y $\phi_2 = 0.3$? (raíces: $z \approx 1.17$ y $z \approx -2.84$)
17. AR(1) con $\phi = 0.8$ y $c = 4$: halla la media de largo plazo.
18. AR(1) con $\phi = 0.5$ y $\text{Var}(\varepsilon_t) = 1$: halla la varianza de la serie.
19. ¿Qué patrón de ACF y PACF identifica a un AR(2)?
20. ¿Es estacionario el AR(1) con $\phi = 1.2$?

### Bloque C · Modelos MA y ARMA

21. MA(1) con $\theta = 0.6$ y $\sigma^2 = 1$: halla la varianza de la serie.
22. Para el ejercicio 21, halla $\rho_1$.
23. Para el ejercicio 21, halla $\rho_2$.
24. ¿Es siempre estacionario un MA($q$)?
25. MA(1) con $\theta = 0.8$: halla $\rho_1$.
26. Escribe la ecuación de un ARMA(1,1).
27. MA(2): expresa $\rho_2$ en función de $\theta_1$ y $\theta_2$.
28. MA(2) con $\theta_1 = 0.5$ y $\theta_2 = 0.3$: halla $\rho_1$.
29. ¿Qué propiedades definen un ruido blanco?
30. MA(1) con $\theta = -0.5$: halla $\rho_1$.

### Bloque D · ARIMA y SARIMA

31. Interpreta en palabras ARIMA(0,1,1).
32. Interpreta en palabras ARIMA(2,0,1).
33. ¿Qué significa $d = 2$ en ARIMA($p,d,q$)?
34. Interpreta SARIMA$(1,1,1)(0,1,1)_{12}$.
35. Define la diferencia estacional de periodo $s$.
36. Serie mensual con estacionalidad anual: ¿cuánto vale $s$?
37. ¿Qué hace $D = 1$ en la parte estacional de un SARIMA?
38. Ordena los cuatro pasos de la metodología Box-Jenkins.
39. ¿Qué prueba estadística verifica que los residuos son ruido blanco?
40. Serie trimestral con estacionalidad anual: ¿cuánto vale $s$?

### Bloque E · Suavizado, volatilidad y validación

41. SES con $\alpha = 0.4$, $y_t = 20$ y $\hat{y}_t = 18$: halla $\hat{y}_{t+1}$.
42. SES con $\alpha = 0.1$, $y_t = 20$ y $\hat{y}_t = 18$: halla $\hat{y}_{t+1}$.
43. ¿Qué componente añade Holt al suavizado exponencial simple?
44. ¿Qué componente añade Holt-Winters sobre Holt?
45. En SES, ¿qué significa $\alpha$ cercano a 1?
46. ARCH(1) con $\omega = 0.1$, $\alpha = 0.5$ y $\varepsilon_{t-1} = 2$: halla $\sigma_t^2$.
47. GARCH(1,1) con $\omega = 0.02$, $\alpha = 0.2$, $\beta = 0.7$, $\varepsilon_{t-1}^2 = 1$ y $\sigma_{t-1}^2 = 2$: halla $\sigma_t^2$.
48. Errores $3, -1, 2, 0$: halla el MAE.
49. Errores $3, -1, 2, 0$: halla el RMSE.
50. Reales $100$ y $200$; pronósticos $105$ y $210$: halla el MAPE.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> tendencia, estacionalidad, ciclo y ruido</div>
<div class="r"><b>02</b> media constante; varianza constante; autocovarianza que depende solo del rezago</div>
<div class="r"><b>03</b> No: $E[y_t] = 10 + 2t$ crece con $t$</div>
<div class="r"><b>04</b> Sí: $|\phi| = 0.6 < 1$</div>
<div class="r"><b>05</b> $\Delta y_t = 4 + \varepsilon_t - \varepsilon_{t-1}$</div>
<div class="r"><b>06</b> estabilizar la varianza cuando crece con el nivel</div>
<div class="r"><b>07</b> diferencia estacional $\Delta_7 y_t = y_t - y_{t-7}$</div>
<div class="r"><b>08</b> $y_t - y_{t-12}$</div>
<div class="r"><b>09</b> No: su varianza crece con el tiempo</div>
<div class="r"><b>10</b> la primera diferencia: $\Delta y_t = \varepsilon_t$</div>
<div class="r"><b>11</b> $\mu = 2/(1-0.9) = 20$</div>
<div class="r"><b>12</b> $\mu = 0$</div>
<div class="r"><b>13</b> $y_t = c + \phi_1 y_{t-1} + \phi_2 y_{t-2} + \varepsilon_t$</div>
<div class="r"><b>14</b> $|\phi| < 1$</div>
<div class="r"><b>15</b> $\rho_2 = 0.7^2 = 0.49$</div>
<div class="r"><b>16</b> Sí: ambas raíces tienen módulo mayor que 1</div>
<div class="r"><b>17</b> $\mu = 4/(1-0.8) = 20$</div>
<div class="r"><b>18</b> $1/(1-0.25) = 4/3 \approx 1.333$</div>
<div class="r"><b>19</b> PACF que corta en 2 y ACF que decae gradualmente</div>
<div class="r"><b>20</b> No: $|\phi| = 1.2 > 1$</div>
<div class="r"><b>21</b> $\sigma^2(1+\theta^2) = 1.36$</div>
<div class="r"><b>22</b> $\rho_1 = 0.6/1.36 \approx 0.441$</div>
<div class="r"><b>23</b> $\rho_2 = 0$</div>
<div class="r"><b>24</b> Sí, un MA($q$) finito siempre es estacionario</div>
<div class="r"><b>25</b> $\rho_1 = 0.8/1.64 \approx 0.488$</div>
<div class="r"><b>26</b> $y_t = c + \phi y_{t-1} + \varepsilon_t + \theta \varepsilon_{t-1}$</div>
<div class="r"><b>27</b> $\rho_2 = \theta_2/(1+\theta_1^2+\theta_2^2)$</div>
<div class="r"><b>28</b> $\rho_1 = 0.65/1.34 \approx 0.485$</div>
<div class="r"><b>29</b> media cero, varianza constante y sin autocorrelación</div>
<div class="r"><b>30</b> $\rho_1 = -0.5/1.25 = -0.4$</div>
<div class="r"><b>31</b> diferencia una vez y ajusta un MA(1) a la serie diferenciada</div>
<div class="r"><b>32</b> ARMA(2,1) sin diferenciar ($d = 0$)</div>
<div class="r"><b>33</b> diferenciar la serie dos veces</div>
<div class="r"><b>34</b> ARMA(1,1) sobre la serie diferenciada una vez, más una diferencia estacional de periodo 12 y un MA estacional de orden 1</div>
<div class="r"><b>35</b> $\Delta_s y_t = y_t - y_{t-s}$</div>
<div class="r"><b>36</b> $s = 12$</div>
<div class="r"><b>37</b> aplica una diferencia estacional</div>
<div class="r"><b>38</b> identificación, estimación, diagnóstico, pronóstico</div>
<div class="r"><b>39</b> la prueba de Ljung-Box</div>
<div class="r"><b>40</b> $s = 4$</div>
<div class="r"><b>41</b> $\hat{y}_{t+1} = 0.4 \cdot 20 + 0.6 \cdot 18 = 18.8$</div>
<div class="r"><b>42</b> $\hat{y}_{t+1} = 0.1 \cdot 20 + 0.9 \cdot 18 = 18.2$</div>
<div class="r"><b>43</b> la tendencia</div>
<div class="r"><b>44</b> la estacionalidad (aditiva o multiplicativa)</div>
<div class="r"><b>45</b> memoria corta: mucho peso al dato más reciente</div>
<div class="r"><b>46</b> $\sigma_t^2 = 0.1 + 0.5 \cdot 4 = 2.1$</div>
<div class="r"><b>47</b> $\sigma_t^2 = 0.02 + 0.2 \cdot 1 + 0.7 \cdot 2 = 1.62$</div>
<div class="r"><b>48</b> $\text{MAE} = (3+1+2+0)/4 = 1.5$</div>
<div class="r"><b>49</b> $\text{RMSE} = \sqrt{14/4} = \sqrt{3.5} \approx 1.871$</div>
<div class="r"><b>50</b> $\text{MAPE} = 100 \cdot (0.05 + 0.05)/2 = 5\%$</div>
</div>
