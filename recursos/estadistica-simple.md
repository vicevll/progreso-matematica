# Estadística descriptiva e inferencial

**Área:** Probabilidad y estadística · **Nivel:** Univ 1–3

**Descripción:** Muestreo, estimación y pruebas de hipótesis.

La estadística se divide en **descriptiva** (resume y presenta datos) e **inferencial** (generaliza de la muestra a la población con una medida de incertidumbre). Este material recorre ambas partes y sus herramientas básicas.

## Población, muestra y datos

La **población** es el conjunto completo de unidades de interés. La **muestra** es el subconjunto observado, y debe obtenerse mediante **muestreo probabilístico** para ser representativa.

- **Parámetro:** valor que describe la población ($\mu$, $\sigma$, $p$).
- **Estadístico:** valor que describe la muestra ($\bar{x}$, $s$, $\hat{p}$).
- **Unidad de análisis:** el individuo u objeto medido.

### Tipos de datos

- **Cualitativos:** nominales (categorías sin orden) y ordinales (con orden).
- **Cuantitativos:** discretos (conteos) y continuos (mediciones).

### Tipos de muestreo

1. **Aleatorio simple:** cada unidad tiene la misma probabilidad de ser elegida.
2. **Estratificado:** se divide la población en estratos homogéneos y se muestrea cada uno.
3. **Por conglomerados:** se eligen grupos completos y se estudian todos sus elementos.
4. **Sistemático:** se elige un punto de partida y un salto fijo $k$.

**Mini-ejemplo.** Para estudiar el ingreso de una ciudad, se divide por distritos (estratos) y se toma una muestra aleatoria dentro de cada distrito. Este diseño reduce la varianza frente al muestreo aleatorio simple.

**Sesgo de selección.** Ocurre cuando la muestra no representa a la población (por ejemplo, encuestas telefónicas que excluyen a quienes no tienen teléfono). Es el error más grave porque no desaparece al aumentar $n$.

## Estadística descriptiva

Resume un conjunto de datos con medidas de centro, dispersión y forma.

### Tendencia central

- **Media:** $\bar{x} = \dfrac{1}{n}\sum_{i=1}^{n} x_i$.
- **Mediana:** valor central con los datos ordenados.
- **Moda:** valor más frecuente.

### Dispersión

- **Rango:** $\max(x_i) - \min(x_i)$.
- **Varianza muestral:** $s^2 = \dfrac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2$.
- **Desviación estándar:** $s = \sqrt{s^2}$.
- **Rango intercuartílico:** $\text{IQR} = Q_3 - Q_1$.
- **Coeficiente de variación:** $CV = \dfrac{s}{\bar{x}}$.

### Posición y forma

- **Cuartiles y percentiles:** dividen los datos ordenados.
- **Puntuación $z$:** $z = \dfrac{x - \bar{x}}{s}$, indica cuántas desviaciones estándar dista un valor.
- **Asimetría y curtosis:** describen la forma de la distribución.

**Mini-ejemplo.** Para los datos $2, 4, 4, 5, 9$: media $4.8$, mediana $4$, moda $4$, varianza $s^2 = 6.7$. La **mediana** y el IQR son **robustos** ante valores atípicos; la media y la desviación estándar no lo son.

## Distribuciones muestrales

La **distribución muestral** de un estadístico es su distribución sobre todas las muestras posibles de tamaño $n$.

Propiedades de la media muestral $\bar{X}$:

- $E[\bar{X}] = \mu$ (insesgada).
- $\text{Var}(\bar{X}) = \dfrac{\sigma^2}{n}$.
- **Error estándar:** $SE = \dfrac{\sigma}{\sqrt{n}}$.
- Si la población es normal, $\bar{X}$ es normal para cualquier $n$.
- Si no es normal, el **teorema central del límite** garantiza normalidad aproximada cuando $n$ es grande.

Para la proporción muestral $\hat{p}$:

$$SE = \sqrt{\frac{p(1-p)}{n}}$$

**Factor de corrección por población finita:** si la muestra es grande respecto a la población,

$$SE = \frac{\sigma}{\sqrt{n}}\sqrt{\frac{N-n}{N-1}}$$

**Mini-ejemplo.** Con $\sigma = 10$ y $n = 100$ el error estándar es $1$: las medias muestrales varían mucho menos que los individuos de la población.

## Estimación e intervalos de confianza

Un **estimador puntual** es un estadístico usado para aproximar un parámetro; una **estimación** es su valor observado en la muestra.

Un **intervalo de confianza (IC)** al nivel $1-\alpha$ cuantifica la precisión de la estimación.

### Media con $\sigma$ conocida

$$\bar{x} \pm z_{1-\alpha/2}\frac{\sigma}{\sqrt{n}}$$

Al $95\%$, $z_{0.975} = 1.96$:

$$\bar{x} \pm 1.96\frac{\sigma}{\sqrt{n}}$$

### Media con $\sigma$ desconocida

Se usa $s$ y la **distribución $t$ de Student** con $n-1$ grados de libertad:

$$\bar{x} \pm t_{n-1,\,1-\alpha/2}\frac{s}{\sqrt{n}}$$

El multiplicador $t$ es mayor que $z$, lo que refleja la incertidumbre adicional por estimar $\sigma$.

### Proporción

$$\hat{p} \pm z_{1-\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

### Tamaño de muestra

Para un margen de error deseado $E$:

$$n = \left(\frac{z_{1-\alpha/2}\,\sigma}{E}\right)^2$$

**Mini-ejemplo.** Con $\bar{x} = 50$, $s = 10$ y $n = 25$ (t con 24 gl, $t = 2.064$):

$$IC_{95\%} = 50 \pm 2.064 \cdot 2 = [45.872,\ 54.128]$$

**Interpretación correcta.** El $95\%$ de los intervalos construidos así contienen al parámetro. No significa "probabilidad de que $\mu$ esté dentro del intervalo" una vez calculado, en el enfoque frecuentista.

## Pruebas de hipótesis y valor p

Una **prueba de hipótesis** decide entre dos afirmaciones sobre la población.

- $H_0$ (**hipótesis nula**): afirmación de referencia (sin efecto, sin diferencia).
- $H_1$ (**hipótesis alternativa**): lo que se busca evidencia a favor.

### Pasos

1. Formular $H_0$ y $H_1$ (una o dos colas).
2. Elegir el nivel de significancia $\alpha$ (típicamente $0.05$).
3. Seleccionar el estadístico y verificar sus supuestos.
4. Calcular el estadístico y el **valor p**.
5. Decidir: si $p < \alpha$, se rechaza $H_0$; en caso contrario, no se rechaza.

### Errores y potencia

| Decisión | $H_0$ verdadera | $H_0$ falsa |
|---|---|---|
| No rechazar $H_0$ | Acierto | Error tipo II ($\beta$) |
| Rechazar $H_0$ | Error tipo I ($\alpha$) | Acierto (potencia $1-\beta$) |

El **valor p** es la probabilidad de observar un resultado al menos tan extremo como el obtenido, suponiendo que $H_0$ es verdadera. **No** es la probabilidad de que $H_0$ sea cierta.

**Mini-ejemplo (z para una media).** Con $\bar{x} = 52$, $\mu_0 = 50$, $\sigma = 10$ y $n = 25$:

$$z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}} = \frac{2}{2} = 1, \qquad p \approx 0.317$$

No hay evidencia suficiente para rechazar $H_0$ al $5\%$.

## Pruebas t, chi-cuadrado y ANOVA

### Prueba t de una muestra

Cuando $\sigma$ es desconocida:

$$t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}} \sim t_{n-1}$$

### Prueba t de dos muestras

- **Independientes (varianzas iguales):** $t = \dfrac{\bar{x}_1 - \bar{x}_2}{s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}$, con $s_p^2 = \dfrac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}$.
- **Pareadas:** se trabaja con las diferencias $d_i$ y $t = \dfrac{\bar{d}}{s_d/\sqrt{n}}$.
- **Muestras grandes o varianzas desiguales:** corrección de Welch.

### Chi-cuadrado ($\chi^2$)

- **Bondad de ajuste:** $\chi^2 = \sum \dfrac{(O_i - E_i)^2}{E_i}$, con $k-1$ grados de libertad.
- **Independencia en tablas de contingencia:** $gl = (r-1)(c-1)$.

### ANOVA de un factor

Compara las medias de $k$ grupos:

$$F = \frac{\text{variabilidad entre grupos}}{\text{variabilidad dentro de grupos}}$$

Con $F$ grande se rechaza la igualdad de medias. Los grados de libertad son $k-1$ (entre) y $n-k$ (dentro).

### Alternativas no paramétricas

Wilcoxon, Mann-Whitney y Kruskal-Wallis no requieren normalidad.

**Mini-ejemplo.** Para comparar un medicamento con un placebo se usa una prueba $t$ de dos muestras; si $p < 0.05$, se concluye diferencia significativa.

**Advertencia.** Hacer muchas pruebas infla el error tipo I; se corrige con Bonferroni ($\alpha/m$) o con control de la tasa de falsos descubrimientos (FDR).

## Correlación y regresión lineal

### Correlación de Pearson

$$r = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \sum (y_i - \bar{y})^2}} \in [-1, 1]$$

Mide la fuerza y el sentido de la asociación **lineal**. $r = 0$ no implica ausencia de relación, solo de relación lineal.

### Regresión lineal simple

$$\hat{y} = b_0 + b_1 x, \qquad b_1 = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}, \qquad b_0 = \bar{y} - b_1\bar{x}$$

### Bondad de ajuste

$$R^2 = r^2$$

es la proporción de la varianza de $y$ explicada por $x$.

### Supuestos

1. Linealidad.
2. Independencia de los errores.
3. **Homocedasticidad** (varianza constante).
4. Normalidad de los residuos.

**Mini-ejemplo.** Años de estudio vs salario con $b_1 \approx 2000$ significa que cada año adicional se asocia, en promedio, con $\$2000$ más de salario. Es una **asociación**, no una relación causal.

## Ejercicios (20)

### Nivel 1 · Descriptiva

1. Calcula la media de $3, 7, 7, 9, 14$.
2. Calcula la mediana de $3, 7, 7, 9, 14$.
3. Calcula la varianza muestral $s^2$ de $3, 7, 7, 9, 14$.
4. Halla la moda de $3, 7, 7, 9, 14$.
5. Halla el rango de $3, 7, 7, 9, 14$.

### Nivel 2 · Intervalos y error estándar

6. Construye el IC al $95\%$ para la media con $\bar{x} = 30$, $\sigma = 5$, $n = 100$.
7. Construye el IC al $95\%$ para la media con $\bar{x} = 100$, $\sigma = 20$, $n = 25$.
8. Construye el IC al $95\%$ para la proporción con $\hat{p} = 0.4$ y $n = 400$.
9. Calcula el error estándar de la media con $\sigma = 9$ y $n = 81$.
10. Halla el tamaño de muestra para un margen $E = 1$ con $\sigma = 8$ al $95\%$.

### Nivel 3 · Pruebas y correlación

11. Prueba $z$: $\bar{x} = 54$, $\mu_0 = 50$, $\sigma = 12$, $n = 36$. Calcula $z$.
12. Halla el valor p de dos colas para $z = 2$.
13. Prueba $t$: $\bar{x} = 52$, $\mu_0 = 50$, $s = 6$, $n = 9$. Calcula $t$.
14. Calcula la correlación $r$ de $(1,3), (2,5), (3,9)$.
15. Halla la pendiente $b_1$ de la regresión para los datos del ejercicio 14.

### Nivel 4 · Aplicaciones

16. Bondad de ajuste: frecuencias observadas $10, 20, 30, 40$ con esperadas $25$ en cada una. Calcula $\chi^2$.
17. ¿Cuántos grados de libertad tiene una prueba $\chi^2$ de independencia en una tabla $3 \times 4$?
18. En un ANOVA con $k = 4$ grupos y $n = 20$ observaciones, ¿cuántos grados de libertad tiene el numerador ($F_{entre}$)?
19. Prueba $t$ pareada: $\bar{d} = 2$, $s_d = 5$, $n = 25$. Calcula $t$.
20. Si $r = 0.9$, ¿cuánto vale $R^2$?

## Respuestas

1. $\bar{x} = 8$.
2. Mediana $= 7$.
3. $s^2 = 16$.
4. Moda $= 7$.
5. Rango $= 11$.
6. $IC = 30 \pm 0.98 = [29.02,\ 30.98]$.
7. $IC = 100 \pm 7.84 = [92.16,\ 107.84]$.
8. $IC = 0.4 \pm 0.048 = [0.352,\ 0.448]$.
9. $SE = 1$.
10. $n = 245.86 \Rightarrow 246$.
11. $z = 2$.
12. $p \approx 0.0455$.
13. $t = 1$.
14. $r \approx 0.982$.
15. $b_1 = 3$.
16. $\chi^2 = 20$.
17. $gl = 6$.
18. $gl = 3$.
19. $t = 2$.
20. $R^2 = 0.81$.
