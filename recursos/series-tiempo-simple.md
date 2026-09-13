# Series de tiempo

Una **serie de tiempo** es una secuencia de observaciones ordenadas en el tiempo: $\{y_t\}$. Aquí $y_t$ es el valor observado en el instante $t$ (por ejemplo, las ventas del mes $t$) y el subíndice $t$ es el contador de tiempo. A diferencia de otros datos, el orden importa: $y_t$ suele depender de su pasado $y_{t-1}, y_{t-2}, \ldots$, y el objetivo es explotar esa dependencia para entender la serie y **pronosticar** el futuro.

## Componentes de una serie de tiempo

Toda serie puede pensarse como la combinación de cuatro piezas:

1. **Tendencia** $T_t$: el movimiento suave de largo plazo (crecimiento, declive o estabilidad).
2. **Estacionalidad** $S_t$: un patrón que se repite cada periodo fijo y conocido (cada año, cada mes, cada semana). El periodo se denota $s$: para datos mensuales con patrón anual, $s = 12$; para trimestrales, $s = 4$.
3. **Ciclo** $C_t$: fluctuaciones largas e irregulares, sin periodo fijo (como las expansiones y recesiones económicas).
4. **Ruido** $\varepsilon_t$: la variación aleatoria no explicada, impredecible.

Los dos modelos clásicos de composición son el **aditivo** (las piezas se suman: $y_t = T_t + S_t + C_t + \varepsilon_t$, útil cuando la estacionalidad es un "más o menos" fijo) y el **multiplicativo** ($y_t = T_t \cdot S_t \cdot C_t \cdot \varepsilon_t$, útil cuando la amplitud estacional crece con el nivel de la serie).

## Estacionariedad

Una serie es **débilmente estacionaria** si cumple tres condiciones para todo $t$:

1. Media constante: $E[y_t] = \mu$.
2. Varianza constante: $\text{Var}(y_t) = \sigma^2$.
3. Autocovarianza que depende solo de la distancia: $\text{Cov}(y_t, y_{t+h})$ depende solo del rezago $h$, no de $t$.

Los modelos clásicos (ARMA) exigen estacionariedad. Para lograrla se usan transformaciones:

- **Diferenciación ordinaria:** $\Delta y_t = y_t - y_{t-1}$: elimina tendencias. El paseo aleatorio $y_t = y_{t-1} + \varepsilon_t$ no es estacionario, pero su diferencia $\Delta y_t = \varepsilon_t$ sí.
- **Diferenciación estacional:** $\Delta_s y_t = y_t - y_{t-s}$: elimina estacionalidad de periodo $s$ (compara cada valor con el mismo periodo del ciclo anterior).
- **Logaritmo:** $\ln y_t$: estabiliza la varianza cuando esta crece con el nivel.
- **Pruebas:** Dickey-Fuller aumentada (ADF) y KPSS ayudan a decidir si una serie ya es estacionaria.

## Autocorrelación: ACF y PACF

La **función de autocorrelación (ACF)** mide la correlación de la serie consigo misma desplazada $h$ periodos:

$$\rho_h = \frac{\text{Cov}(y_t, y_{t+h})}{\text{Var}(y_t)}$$

Siempre $\rho_0 = 1$ y $-1 \leq \rho_h \leq 1$. El **correlograma** grafica $\rho_h$ contra $h$, con bandas de confianza en $\pm 1.96/\sqrt{n}$ (n = número de observaciones).

La **autocorrelación parcial (PACF)** es la correlación entre $y_t$ y $y_{t-h}$ **eliminando el efecto de los rezagos intermedios**: la relación "directa", sin intermediarios.

**Regla de identificación de modelos:**

- **AR($p$)**: ACF decae gradualmente; PACF se corta tras el rezago $p$.
- **MA($q$)**: ACF se corta tras el rezago $q$; PACF decae gradualmente.
- **ARMA($p, q$)**: ambas decaen gradualmente.

## Modelos AR, MA y ARMA

**AR($p$)** — autorregresivo: el valor actual depende de sus propios valores pasados:

$$y_t = c + \phi_1 y_{t-1} + \phi_2 y_{t-2} + \cdots + \phi_p y_{t-p} + \varepsilon_t$$

$c$ es una constante; $\phi_1, \ldots, \phi_p$ son los coeficientes de los $p$ valores pasados; $\varepsilon_t$ es el ruido (sorpresa del periodo). El AR(1) es $y_t = c + \phi_1 y_{t-1} + \varepsilon_t$: estacionario si $|\phi_1| < 1$, y su media de largo plazo es

$$\mu = \frac{c}{1 - \phi_1}$$

**MA($q$)** — medias móviles: depende de los errores pasados:

$$y_t = \mu + \varepsilon_t + \theta_1 \varepsilon_{t-1} + \cdots + \theta_q \varepsilon_{t-q}$$

$\mu$ es la media; $\theta_1, \ldots, \theta_q$ ponderan los $q$ errores pasados. Siempre es estacionario. Un MA(1) con $\theta_1 = 0.6$ y varianza del ruido $\sigma^2 = 1$ tiene varianza $\sigma^2(1 + \theta_1^2) = 1.36$ y autocorrelación $\rho_1 = \theta_1/(1 + \theta_1^2) \approx 0.441$, con $\rho_h = 0$ para $h \geq 2$ (por eso la ACF "se corta").

**ARMA($p, q$)**: combina ambos términos, para series estacionarias:

$$y_t = c + \phi_1 y_{t-1} + \cdots + \phi_p y_{t-p} + \varepsilon_t + \theta_1 \varepsilon_{t-1} + \cdots + \theta_q \varepsilon_{t-q}$$

## ARIMA y SARIMA

**ARIMA($p, d, q$)**: ARMA aplicado a la serie **diferenciada $d$ veces**. La I es de "integrado". Así, ARIMA(1,1,0) significa: diferencia una vez y ajusta un AR(1) a la serie diferenciada. $d = 0$ si ya es estacionaria; $d = 1$ es lo más común (tendencia lineal); $d = 2$ es raro.

**SARIMA($p,d,q$)($P,D,Q$)$_s$**: añade la parte estacional de periodo $s$: $P$ (términos autorregresivos estacionales), $D$ (diferencias estacionales $\Delta_s y_t = y_t - y_{t-s}$) y $Q$ (medias móviles estacionales). Por ejemplo, SARIMA$(1,1,0)(1,1,0)_{12}$ para ventas mensuales con tendencia y estacionalidad anual.

**Metodología Box-Jenkins** (cuatro pasos):

1. **Identificación:** transforma y diferencia hasta estacionariedad; examina ACF/PACF para proponer órdenes.
2. **Estimación:** ajusta los coeficientes por máxima verosimilitud.
3. **Diagnóstico:** los **residuos** (lo que el modelo no explicó: $\hat{\varepsilon}_t = y_t - \hat{y}_t$) deben ser ruido blanco; verifica con ACF y la prueba de Ljung-Box; compara modelos con AIC (menor es mejor).
4. **Pronóstico:** predice y actualiza con datos nuevos.

## Suavizado exponencial

Alternativa a ARIMA, basada en recursiones con un parámetro de suavizado $\alpha \in (0,1)$.

- **Suavizado simple (SES):** sin tendencia ni estacionalidad: $\hat{y}_{t+1} = \alpha y_t + (1-\alpha)\hat{y}_t$. $\alpha$ cercano a 1 da memoria corta (reacciona rápido); cercano a 0, memoria larga (muy suave).
- **Holt:** añade una ecuación para la **tendencia**.
- **Holt-Winters:** añade la **estacionalidad** (aditiva o multiplicativa), con tres parámetros (nivel, tendencia, estacionalidad).

Es simple, robusto y fácil de automatizar; su desventaja frente a ARIMA es el menor fundamento inferencial.

## Volatilidad: ARCH y GARCH

En series financieras la varianza cambia con el tiempo y los días turbulentos se agrupan (*clusters* de volatilidad). Los modelos ARCH/GARCH describen la varianza condicional $\sigma_t^2$.

**ARCH($q$)**: la varianza depende de los cuadrados de las sorpresas pasadas:

$$\sigma_t^2 = \omega + \alpha_1 \varepsilon_{t-1}^2 + \cdots + \alpha_q \varepsilon_{t-q}^2$$

**GARCH($p, q$)**: añade varianzas pasadas (memoria más larga):

$$\sigma_t^2 = \omega + \sum_{i=1}^{q} \alpha_i \varepsilon_{t-i}^2 + \sum_{j=1}^{p} \beta_j \sigma_{t-j}^2$$

En un GARCH(1,1), la suma $\alpha_1 + \beta_1$ mide la **persistencia** de la volatilidad: cercana a 1 significa que los periodos turbulentos duran mucho. Se usa para pronosticar el riesgo (VaR condicional, márgenes, opciones).

## Validación y evaluación de pronósticos

1. **División temporal train/test:** nunca entrenes con datos futuros (fuga de información). La validación aleatoria de la estadística clásica no sirve: el orden del tiempo es irreversible.
2. **Reentrenamiento deslizante:** walk-forward o ventanas rodantes (backtesting serio).
3. **Métricas** con errores $e_t = y_t - \hat{y}_t$:
   - **MAE** (error absoluto medio): $\text{MAE} = \frac{1}{n}\sum_{t=1}^{n}|e_t|$.
   - **RMSE** (raíz del error cuadrático medio): $\text{RMSE} = \sqrt{\frac{1}{n}\sum_{t=1}^{n} e_t^2}$; castiga más los errores grandes; siempre RMSE $\geq$ MAE.
   - **MAPE** (error porcentual absoluto medio): $\text{MAPE} = \frac{100}{n}\sum_{t=1}^{n}\left|\frac{e_t}{y_t}\right|$; porcentaje del valor real; falla si $y_t = 0$.
4. **Baseline ingenuo:** compara contra pronosticar "mañana igual que hoy" (o igual que el mismo periodo del ciclo pasado). Si no le ganas al ingenuo, no aportas valor.
5. **Residuos:** deben ser ruido blanco; si quedan con estructura, falta modelo.

## Ejercicios (20)

### Nivel 1 · Fundamentos y componentes

1. Nombra los cuatro componentes clásicos de una serie de tiempo y di qué representa cada uno.
2. Las ventas de juguetes tienen un pico cada diciembre y un valle cada enero: ¿qué componente es y cuál es su periodo $s$ en datos mensuales?
3. ¿Es estacionaria una serie de ruido blanco? Justifica con las tres condiciones.
4. Aplica una diferencia a $y_t = 3t + \varepsilon_t$ y di si el resultado es estacionario en media.
5. AR(1) con $\phi = 0.8$ y $c = 4$: halla la media de largo plazo $\mu$.

### Nivel 2 · AR, MA y ARMA

6. AR(1) con $\phi = 0.5$ y $c = 10$: halla la media de largo plazo.
7. ¿Qué patrón de ACF y PACF esperas en un MA(1)?
8. Una PACF se corta tras el rezago 2 y la ACF decae gradualmente: ¿qué modelo sugiere?
9. Escribe la ecuación de un MA(1) y explica cada símbolo.
10. ¿Es estacionario el AR(2) $y_t = 0.5 y_{t-1} + 0.3 y_{t-2} + \varepsilon_t$? (raíces de $1 - 0.5z - 0.3z^2 = 0$: $z \approx 1.17$ y $z \approx -2.84$)

### Nivel 3 · ARIMA, SARIMA y suavizado

11. Interpreta en palabras el modelo ARIMA(1,1,0).
12. Serie mensual no estacionaria con estacionalidad anual: propón un modelo SARIMA razonable.
13. Suavizado exponencial simple con $\alpha = 0.3$, $y_t = 10$ y $\hat{y}_t = 9.5$: calcula $\hat{y}_{t+1}$.
14. ¿Cuándo usarías Holt en lugar de suavizado simple, y cuándo Holt-Winters en lugar de Holt?
15. Halla la diferencia estacional de periodo 4 de una serie trimestral en el instante $t$.

### Nivel 4 · Aplicaciones y validación

16. Tu modelo logra RMSE 15 en la prueba y el modelo ingenuo RMSE 25: ¿cuál es la mejora porcentual?
17. Errores de pronóstico $2, -1, 3$: calcula MAE y RMSE. ¿Cuál es mayor y por qué?
18. Reales $100$ y $200$, pronósticos $110$ y $190$: calcula el MAPE.
19. En un GARCH(1,1) estimas $\alpha_1 + \beta_1 = 0.95$: interpreta.
20. ¿Por qué la validación de series de tiempo no puede barajar los datos al azar?

## Respuestas

1. Tendencia (dirección de largo plazo), estacionalidad (patrón de periodo fijo), ciclo (fluctuación larga irregular) y ruido (variación aleatoria no explicada).
2. Estacionalidad con periodo $s = 12$ (mensual anual).
3. Sí: media constante (cero), varianza constante y autocovarianzas nulas para $h \neq 0$, que dependen solo de $h$.
4. $\Delta y_t = 3 + \varepsilon_t - \varepsilon_{t-1}$, con media constante $3$: estacionaria en media.
5. $\mu = 4/(1 - 0.8) = 20$.
6. $\mu = 10/(1 - 0.5) = 20$.
7. ACF significativa solo en el rezago 1 (se corta) y PACF que decae gradualmente.
8. Un AR(2).
9. $y_t = \mu + \varepsilon_t + \theta_1 \varepsilon_{t-1}$: $\mu$ es la media; $\varepsilon_t$ la sorpresa actual; $\theta_1$ el peso de la sorpresa del periodo anterior.
10. Sí: las dos raíces del polinomio característico tienen módulo mayor que 1 (están fuera del círculo unitario).
11. Diferencia la serie una vez y ajusta un AR(1) a la serie diferenciada.
12. SARIMA$(p,1,q)(P,1,Q)_{12}$, por ejemplo SARIMA$(1,1,0)(1,1,0)_{12}$.
13. $\hat{y}_{t+1} = 0.3 \cdot 10 + 0.7 \cdot 9.5 = 3 + 6.65 = 9.65$.
14. Holt cuando hay tendencia; Holt-Winters cuando además hay estacionalidad.
15. $\Delta_4 y_t = y_t - y_{t-4}$.
16. $(25 - 15)/25 = 0.4$: mejora del $40\%$.
17. MAE $= (2 + 1 + 3)/3 = 2$; RMSE $= \sqrt{(4 + 1 + 9)/3} = \sqrt{14/3} \approx 2.16$. El RMSE es mayor porque eleva al cuadrado y castiga más los errores grandes.
18. MAPE $= 100 \cdot (10/100 + 10/200)/2 = 100 \cdot (0.05 + 0.05)/2 = 5\%$.
19. Alta persistencia de la volatilidad: los periodos de alta (o baja) volatilidad duran mucho en el tiempo.
20. Porque el orden temporal es la esencia de la serie: usar datos futuros para entrenar (fuga de información) infla el rendimiento y rompe la dependencia que se quiere modelar.
