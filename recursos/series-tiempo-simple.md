# Series de tiempo

## Componentes de una serie de tiempo

Una **serie de tiempo** es una secuencia de observaciones ordenadas en el tiempo, $\{y_t\}_{t=1}^{n}$, donde el orden importa. Sus componentes clásicas son:

1. **Tendencia** $T_t$: movimiento de largo plazo (crecimiento, declive o estancamiento).
2. **Estacionalidad** $S_t$: patrón que se repite con un periodo fijo $s$ (diario, semanal, mensual, anual).
3. **Ciclo** $C_t$: fluctuación larga e irregular, sin periodo fijo (ciclos económicos).
4. **Ruido** $\varepsilon_t$: variación residual aleatoria no explicada.

**Composición.** El modelo **aditivo** supone que las componentes se suman:

$$y_t = T_t + S_t + C_t + \varepsilon_t$$

y es apropiado cuando la amplitud estacional es aproximadamente constante. El modelo **multiplicativo** supone que se multiplican:

$$y_t = T_t \cdot S_t \cdot C_t \cdot \varepsilon_t$$

y es apropiado cuando la amplitud estacional crece con el nivel de la serie. El logaritmo convierte un modelo multiplicativo en aditivo: $\ln y_t = \ln T_t + \ln S_t + \ln C_t + \ln \varepsilon_t$.

**Mini-ejemplo.** Las ventas minoristas de diciembre suelen combinar una tendencia creciente con un pico estacional pronunciado y ruido. Si el pico crece cada año en términos absolutos, conviene el esquema multiplicativo.

**Descomposición.** En la práctica cada componente se estima con medias móviles o con el método **STL** (*Seasonal-Trend decomposition using Loess*), que separa tendencia, estacionalidad y resto de forma iterativa.

## Estacionariedad y diferenciación

Una serie es **débilmente estacionaria** (o estacionaria en sentido amplio) si:

1. $E[y_t] = \mu$ constante para todo $t$.
2. $\text{Var}(y_t) = \gamma_0$ constante para todo $t$.
3. $\text{Cov}(y_t, y_{t+h}) = \gamma_h$ depende solo del rezago $h$, no de $t$.

Una serie **estrictamente estacionaria** requiere que toda la distribución conjunta sea invariante al desplazamiento temporal; la versión débil solo fija los dos primeros momentos.

**Por qué importa.** Los modelos ARMA y ARIMA necesitan estacionariedad (o una versión diferenciada de ella) para que los coeficientes tengan interpretación estable y la inferencia sea válida. Sin estacionariedad aparecen **regresiones espurias**.

**Operador de rezago.** Con $L y_t = y_{t-1}$, la primera diferencia es

$$\Delta y_t = y_t - y_{t-1} = (1 - L)\,y_t,$$

y la diferencia de orden $d$ es $\Delta^d y_t = (1 - L)^d y_t$. La **diferencia estacional** de periodo $s$ es

$$\Delta_s y_t = y_t - y_{t-s} = (1 - L^s)\,y_t.$$

**Transformaciones útiles.**

1. **Diferenciación** $\Delta y_t$: elimina tendencia (raíz unitaria).
2. **Logaritmo** $\ln y_t$: estabiliza varianza que crece con el nivel.
3. **Diferencia estacional** $\Delta_s y_t$: elimina el patrón estacional determinista o estocástico.
4. **Box-Cox** $y_t^{(\lambda)} = \dfrac{y_t^{\lambda} - 1}{\lambda}$: familia que incluye logaritmo ($\lambda \to 0$).

**Mini-ejemplo.** El paseo aleatorio $y_t = y_{t-1} + \varepsilon_t$ no es estacionario: $\text{Var}(y_t) = t\,\sigma_\varepsilon^2$ crece con $t$. Su primera diferencia $\Delta y_t = \varepsilon_t$ sí es estacionaria.

**Pruebas.** La **Dickey-Fuller aumentada (ADF)** contrasta $H_0$: existe raíz unitaria (no estacionaria). El **KPSS** contrasta la hipótesis opuesta ($H_0$: estacionariedad), por lo que conviene usar ambas.

## Autocorrelación: ACF y PACF

La **función de autocorrelación (ACF)** mide la correlación lineal de la serie con sus propios rezagos:

$$\rho_h = \frac{\gamma_h}{\gamma_0} = \frac{\text{Cov}(y_t, y_{t+h})}{\text{Var}(y_t)}, \qquad \rho_0 = 1, \quad -1 \leq \rho_h \leq 1.$$

La **autocorrelación parcial (PACF)** mide la correlación de $y_t$ con $y_{t+h}$ **descontando** el efecto de los rezagos intermedios $y_{t+1}, \ldots, y_{t+h-1}$. Es el último coeficiente de una regresión de $y_t$ sobre $y_{t-1}, \ldots, y_{t-h}$.

**Regla de identificación.**

1. Un modelo **AR($p$)** tiene ACF que decae gradualmente (cola infinita) y PACF que **corta** en el rezago $p$.
2. Un modelo **MA($q$)** tiene ACF que **corta** en el rezago $q$ y PACF que decae gradualmente.
3. Un modelo **ARMA($p,q$)** tiene ACF y PACF que decaen ambas gradualmente.

**Bandas de confianza.** Bajo ruido blanco, $\rho_h$ es aproximadamente normal con desviación $1/\sqrt{n}$, de modo que valores fuera de $\pm 1.96/\sqrt{n}$ se consideran significativos.

**Mini-ejemplo.** Si la PACF es significativa en el rezago 1 y nula después, mientras la ACF decae suavemente, un AR(1) es el candidato natural. Si la ACF es significativa en los rezagos 1 y 2 y luego nula, se sugiere un MA(2).

## Modelos AR, MA y ARMA

**Autorregresivo AR($p$).** El valor actual depende de valores pasados:

$$y_t = c + \phi_1 y_{t-1} + \cdots + \phi_p y_{t-p} + \varepsilon_t.$$

Es estacionario si las raíces del polinomio característico $1 - \phi_1 z - \cdots - \phi_p z^p = 0$ están **fuera** del círculo unitario ($|z| > 1$). En el caso AR(1), la condición se reduce a $|\phi_1| < 1$, y la media es $\mu = c/(1-\phi_1)$.

**Medias móviles MA($q$).** El valor actual depende de errores pasados:

$$y_t = \mu + \varepsilon_t + \theta_1 \varepsilon_{t-1} + \cdots + \theta_q \varepsilon_{t-q}.$$

Todo MA es estacionario; es **invertible** si las raíces de $1 + \theta_1 z + \cdots + \theta_q z^q = 0$ están fuera del círculo unitario.

**ARMA($p,q$).** Combina ambas estructuras:

$$y_t = c + \sum_{i=1}^{p} \phi_i y_{t-i} + \varepsilon_t + \sum_{j=1}^{q} \theta_j \varepsilon_{t-j}.$$

Si se cumple estacionariedad e invertibilidad, el modelo admite una representación AR($\infty$) y otra MA($\infty$).

**Mini-ejemplo (AR(1)).** Con $\phi = 0.7$ la ACF es $\rho_h = 0.7^{h}$, que decae geométricamente; la varianza estacionaria es $\dfrac{\sigma_\varepsilon^2}{1-\phi^2}$.

**Mini-ejemplo (MA(1)).** Con $\theta_1 = 0.5$ la ACF vale $\rho_1 = \dfrac{\theta_1}{1+\theta_1^2} = 0.4$ y $\rho_h = 0$ para $h \geq 2$; la varianza es $(1+\theta_1^2)\sigma_\varepsilon^2$.

## ARIMA y SARIMA

**ARIMA($p,d,q$).** Se aplica ARMA al resultado de diferenciar la serie $d$ veces:

$$\Delta^d y_t = c + \sum_{i=1}^{p} \phi_i \Delta^d y_{t-i} + \varepsilon_t + \sum_{j=1}^{q} \theta_j \varepsilon_{t-j}.$$

El parámetro $d$ maneja **tendencias estocásticas** (raíces unitarias). Si $d = 0$ se recupera un ARMA.

**SARIMA($p,d,q$)$(P,D,Q)_s$.** Añade un bloque estacional de periodo $s$:

$$\phi_p(L)\,\Phi_P(L^s)\,(1-L)^d (1-L^s)^D\, y_t = \theta_q(L)\,\Theta_Q(L^s)\,\varepsilon_t,$$

donde $\Phi_P$ y $\Theta_Q$ son los polinomios estacionales y $D$ el número de diferencias estacionales.

**Metodología Box-Jenkins.**

1. **Identificación:** transformar a estacionaria; examinar ACF/PACF para proponer $p,d,q$.
2. **Estimación:** ajustar los candidatos por máxima verosimilitud o mínimos cuadrados.
3. **Diagnóstico:** los residuos deben ser **ruido blanco**; usar ACF residual y el test de **Ljung-Box**.
4. **Pronóstico:** predecir y actualizar al llegar nueva información.

**Criterios de selección.** Se comparan modelos con **AIC** y **BIC**, penalizando el número de parámetros:

$$\text{AIC} = -2\ln L + 2k, \qquad \text{BIC} = -2\ln L + k\ln n.$$

**Mini-ejemplo.** Ventas mensuales con tendencia y estacionalidad anual sugieren un SARIMA$(1,1,0)(1,1,0)_{12}$.

## Suavizado exponencial

Alternativa simple y robusta a ARIMA para pronosticar.

**Suavizado exponencial simple (SES).** Para series sin tendencia:

$$\hat{y}_{t+1} = \alpha y_t + (1-\alpha)\hat{y}_t, \qquad 0 < \alpha < 1.$$

El parámetro $\alpha$ controla la memoria: valores cercanos a $1$ dan más peso al dato reciente.

**Método de Holt.** Añade una componente de tendencia $b_t$:

$$\ell_t = \alpha y_t + (1-\alpha)(\ell_{t-1} + b_{t-1}), \qquad b_t = \beta(\ell_t - \ell_{t-1}) + (1-\beta)b_{t-1},$$
$$\hat{y}_{t+h} = \ell_t + h\,b_t.$$

**Holt-Winters.** Añade estacionalidad de periodo $s$, en versión **aditiva** o **multiplicativa**:

$$\hat{y}_{t+h} = \ell_t + h\,b_t + s_{t+h-s}, \qquad \text{(aditiva).}$$

**Mini-ejemplo.** Con $\alpha = 0.4$, $y_t = 20$ y $\hat{y}_t = 15$ se obtiene $\hat{y}_{t+1} = 0.4(20) + 0.6(15) = 17$.

**Ventaja:** fácil de automatizar y estable con pocos datos. **Desventaja:** menor fundamento inferencial y no ofrece intervalos tan naturales como ARIMA.

## Volatilidad: ARCH y GARCH

En finanzas la varianza **cambia** con el tiempo (**heterocedasticidad condicional**). Un modelo **ARCH($q$)** describe la varianza condicional como función de errores pasados al cuadrado:

$$\sigma_t^2 = \omega + \alpha_1 \varepsilon_{t-1}^2 + \cdots + \alpha_q \varepsilon_{t-q}^2, \qquad \varepsilon_t = \sigma_t z_t, \quad z_t \sim \text{i.i.d.}(0,1).$$

**GARCH($p,q$)** añade las varianzas pasadas:

$$\sigma_t^2 = \omega + \sum_{i=1}^{q} \alpha_i \varepsilon_{t-i}^2 + \sum_{j=1}^{p} \beta_j \sigma_{t-j}^2.$$

**Propiedades.** GARCH(1,1) es estacionario en covarianza si $\alpha_1 + \beta_1 < 1$; la **persistencia** de la volatilidad es $\alpha_1 + \beta_1$. La varianza incondicional es $\bar{\sigma}^2 = \dfrac{\omega}{1 - \alpha_1 - \beta_1}$.

**Hechos estilizados.** Los **clusters de volatilidad** (días turbulentos se agrupan) y la asimetría (efecto apalancamiento, capturado por EGARCH o GJR-GARCH).

**Mini-ejemplo.** Tras un día de gran caída, un GARCH(1,1) predice mayor volatilidad mañana: la varianza tiene memoria. Con $\alpha_1 = 0.1$ y $\beta_1 = 0.8$, la persistencia es $0.9$.

## Validación y métricas de pronóstico

**Partición temporal.** Nunca se entrena con datos futuros: la muestra se divide en **train** (pasado) y **test** (futuro) respetando el orden cronológico.

**Validación cruzada temporal.** Dos esquemas habituales:

1. **Ventana expansiva** (*expanding*): el conjunto de entrenamiento crece con el tiempo.
2. **Ventana deslizante** (*rolling*): tamaño de entrenamiento fijo que avanza.
3. **Walk-forward:** reentrenar en cada paso simula el uso real y evita resultados inflados.

**Métricas.**

$$\text{MAE} = \frac{1}{n}\sum_{t=1}^{n} \left\lvert y_t - \hat{y}_t \right\rvert, \qquad \text{RMSE} = \sqrt{\frac{1}{n}\sum_{t=1}^{n} (y_t - \hat{y}_t)^2},$$
$$\text{MAPE} = \frac{100}{n}\sum_{t=1}^{n} \left\lvert \frac{y_t - \hat{y}_t}{y_t} \right\rvert.$$

El **RMSE** penaliza más los errores grandes; el **MAPE** es porcentual (no depende de la escala) pero se indetermina si $y_t = 0$.

**Residuos.** Deben comportarse como ruido blanco: sin autocorrelación significativa (ACF, Ljung-Box) y con media cero.

**Referencia.** Todo modelo debe superar a un **baseline ingenuo**: el último valor $\hat{y}_{t+1} = y_t$ o el valor estacional $\hat{y}_{t+1} = y_{t-s}$.

**Mini-ejemplo.** Si el modelo tiene $\text{RMSE} = 15$ y el ingenuo $\text{RMSE} = 25$, la mejora relativa es $(25-15)/25 = 40\%$.

## Ejercicios (20)

### Nivel 1: Conceptos básicos

1. Identifica la componente dominante: ventas de helados con un pico cada verano.
2. ¿Es estacionaria la serie $y_t = \varepsilon_t$ con $\varepsilon_t$ ruido blanco?
3. Para el AR(1) $y_t = 2 + 0.6\,y_{t-1} + \varepsilon_t$, halla la media de largo plazo.
4. Obtén la primera diferencia de $y_t = 4t + \varepsilon_t$.
5. ¿Cómo se escribe la diferencia estacional de una serie trimestral?

### Nivel 2: ACF, PACF y estacionariedad

6. Para un MA(1) con $\theta_1 = 0.5$, calcula $\rho_1$.
7. Para un AR(1) con $\phi_1 = 0.7$, calcula $\rho_2$.
8. La PACF de una serie corta en el rezago 2 y su ACF decae gradualmente. ¿Qué modelo se sugiere?
9. Para un AR(1) con $\phi_1 = 0.5$ y $\sigma_\varepsilon^2 = 3$, calcula la varianza estacionaria.
10. Escribe la condición de estacionariedad de un AR(1).

### Nivel 3: Pronóstico y métricas

11. Con el AR(1) $y_t = 1 + 0.5\,y_{t-1} + \varepsilon_t$ y $y_t = 4$, pronostica $\hat{y}_{t+1}$.
12. Serie real $100, 110$ y pronóstico $90, 121$. Calcula el MAPE.
13. Errores de pronóstico $2, -2, 2, -2$. Calcula el RMSE.
14. Suavizado exponencial simple con $\alpha = 0.4$, $y_t = 20$ y $\hat{y}_t = 15$. Calcula $\hat{y}_{t+1}$.
15. En un GARCH(1,1) con $\alpha_1 = 0.1$ y $\beta_1 = 0.8$, ¿cuál es la persistencia?

### Nivel 4: Aplicación

16. Una serie muestra tendencia lineal creciente y raíz unitaria. ¿Qué orden $d$ usarías en un ARIMA?
17. Ventas mensuales con estacionalidad anual. ¿Qué periodo estacional $s$ usarías en un SARIMA?
18. ¿Cuál es la hipótesis nula de la prueba ADF?
19. ¿Por qué la validación temporal no debe mezclar datos pasados y futuros?
20. Un modelo logra $\text{RMSE} = 15$ frente a $\text{RMSE} = 25$ del baseline ingenuo. ¿Qué mejora relativa obtiene?

## Respuestas

1. Estacionalidad.
2. Sí: media $0$, varianza constante y autocovarianza nula para $h \geq 1$.
3. $\mu = \dfrac{2}{1-0.6} = 5$.
4. $\Delta y_t = 4 + \varepsilon_t - \varepsilon_{t-1}$.
5. $\Delta_4 y_t = y_t - y_{t-4}$.
6. $\rho_1 = \dfrac{0.5}{1+0.5^2} = 0.4$.
7. $\rho_2 = 0.7^2 = 0.49$.
8. Un AR(2).
9. $\text{Var} = \dfrac{3}{1-0.5^2} = 4$.
10. $\lvert \phi_1 \rvert < 1$.
11. $\hat{y}_{t+1} = 1 + 0.5(4) = 3$.
12. MAPE $= \frac{1}{2}(10\% + 10\%) = 10\%$.
13. $\text{RMSE} = \sqrt{\frac{4+4+4+4}{4}} = 2$.
14. $\hat{y}_{t+1} = 0.4(20) + 0.6(15) = 17$.
15. $\alpha_1 + \beta_1 = 0.9$.
16. $d = 1$.
17. $s = 12$.
18. Que la serie tiene raíz unitaria (no es estacionaria).
19. Porque el futuro no puede usarse para predecir el pasado; hacerlo infla artificialmente el desempeño.
20. $\dfrac{25-15}{25} = 40\%$.
