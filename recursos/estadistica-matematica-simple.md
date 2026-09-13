## Estadística matemática: guía simple

La estadística matemática estudia cómo **estimar** (adivinar con reglas) los números desconocidos de una población a partir de una muestra, y cómo medir qué tan buenas son esas adivinanzas.

### Conceptos básicos

- **Población:** el conjunto completo que interesa (ej. todos los estudiantes).
- **Muestra:** los datos observados $X_1, X_2, \ldots, X_n$ (ej. 200 estudiantes medidos).
- **Parámetro:** el número desconocido de la población, denotado $\theta$ (ej. la media $\mu$, la proporción $p$).
- **Estimador:** la fórmula que adivina el parámetro con los datos, denotada $\hat{\theta}$. Es una variable aleatoria: cambia de muestra en muestra.
- **Estimación:** el número concreto que sale al aplicar la fórmula a los datos observados.

### Propiedades de los estimadores

- **Insesgado:** en promedio acierta: $E[\hat{\theta}] = \theta$. El **sesgo** es $E[\hat{\theta}] - \theta$.
- **Consistente:** con más datos se acerca al valor verdadero: $\hat{\theta} \xrightarrow{P} \theta$.
- **Eficiente:** entre los insesgados, tiene la varianza mínima posible.
- **Error cuadrático medio (ECM):** combina ambos: $\text{ECM} = \text{Var}(\hat{\theta}) + (\text{sesgo})^2$.

Ejemplo clave: la varianza muestral con $n-1$, $S^2 = \frac{1}{n-1}\sum (X_i - \bar{X})^2$, es insesgada para $\sigma^2$; con $n$ tiene sesgo $-\sigma^2/n$.

### Suficiencia

Un estadístico $T$ es **suficiente** para $\theta$ si contiene toda la información de la muestra sobre $\theta$. **Criterio de factorización:** la verosimilitud se descompone como
$$L(\theta; x) = g(T(x), \theta) \cdot h(x)$$
Suficientes clásicos: $\bar{X}$ para $\mu$ normal; $\sum X_i$ para Poisson; $\max X_i$ para uniforme $(0, \theta)$. El **teorema de Rao-Blackwell** mejora cualquier estimador insesgado condicionándolo en un estadístico suficiente: $E[\hat{\theta} \mid T]$ tiene varianza menor o igual.

### Máxima verosimilitud (MV)

Se elige el valor de $\theta$ que hace más probable lo observado. La **función de verosimilitud** es la probabilidad conjunta de los datos:
$$L(\theta) = \prod_{i=1}^{n} f(x_i; \theta)$$
**Método:** 1) escribir $L$; 2) tomar $\ln L$ (el logaritmo convierte el producto en suma); 3) derivar respecto a $\theta$ e igualar a cero; 4) verificar máximo con la segunda derivada.

Resultados que debes saber: Bernoulli $\hat{p} = \bar{X}$; Poisson $\hat{\lambda} = \bar{X}$; normal $\hat{\mu} = \bar{X}$ y $\hat{\sigma}^2 = \frac{1}{n}\sum (X_i - \bar{X})^2$ (sesgado, usa $n$); exponencial $\hat{\lambda} = 1/\bar{X}$; uniforme $(0,\theta)$ $\hat{\theta} = \max X_i$.

### Método de momentos

Iguala momentos teóricos con empíricos y despeja:
$$E[X^k] = \frac{1}{n}\sum_{i=1}^n X_i^k$$
Ejemplos: exponencial $\hat{\lambda} = 1/\bar{X}$; uniforme $(0,\theta)$ $\hat{\theta} = 2\bar{X}$; Poisson $\hat{\lambda} = \bar{X}$. Simple, pero a veces menos eficiente que MV e incluso da valores imposibles (como $2\bar{X} < \max X_i$ en la uniforme).

### Cota de Cramér-Rao e información de Fisher

La **información de Fisher** mide cuánta información aporta una observación sobre $\theta$:
$$I(\theta) = E\left[\left(\frac{\partial \ln f}{\partial \theta}\right)^2\right] = -E\left[\frac{\partial^2 \ln f}{\partial \theta^2}\right]$$
Para todo estimador insesgado, la varianza no puede bajar de la **cota de Cramér-Rao**:
$$\text{Var}(\hat{\theta}) \geq \frac{1}{n\,I(\theta)}$$
Un estimador que la alcanza es **eficiente**. Valores útiles: Bernoulli $I(p) = \frac{1}{p(1-p)}$; Poisson $I(\lambda) = 1/\lambda$; exponencial $I(\lambda) = 1/\lambda^2$; normal (para $\mu$, con $\sigma$ conocida) $I(\mu) = 1/\sigma^2$. Ojo: si el dominio depende del parámetro (uniforme), la cota puede no valer.

### Intervalos y pruebas óptimas

- **Pivote:** cantidad cuya distribución no depende del parámetro; de ella se despeja el intervalo. Por ejemplo $\frac{\bar{X} - \mu}{S/\sqrt{n}} \sim t_{n-1}$ da el IC $\bar{X} \pm t^* S/\sqrt{n}$.
- **Neyman-Pearson:** la prueba más potente de nivel $\alpha$ entre hipótesis simples rechaza cuando $\frac{L(\theta_1)}{L(\theta_0)} > c$.
- **Razón de verosimilitud (LR):** para hipótesis compuestas, $\Lambda = \frac{\sup_{H_0} L(\theta)}{\sup_{\Theta} L(\theta)}$; bajo $H_0$, $-2\ln\Lambda \sim \chi^2_k$ (teorema de Wilks), con $k$ = parámetros restringidos.

### Bootstrap y jackknife

- **Bootstrap:** remuestrea $B$ veces **con reposición** de los datos observados, recalcula el estadístico en cada remuestra y usa esa variabilidad para estimar error estándar, sesgo e intervalos (percentiles 2.5 y 97.5). No necesita supuestos paramétricos.
- **Jackknife:** deja **un dato fuera** a la vez, formando $n$ sub-muestras; estima sesgo y varianza. Con datos dependientes (series), el bootstrap debe remuestrear bloques.

## Ejercicios (20)

**Nivel 1 — fundamentos**

1. Halla el estimador de máxima verosimilitud de $p$ en una muestra Bernoulli de tamaño $n$.
2. Halla el MV de $\lambda$ en una muestra Poisson.
3. ¿Es $\bar{X}$ un estimador insesgado de la media $\mu$?
4. ¿Cuál es el sesgo de $\frac{1}{n}\sum (X_i - \bar{X})^2$ como estimador de $\sigma^2$?
5. Da un estadístico suficiente para $p$ en una muestra Bernoulli.

**Nivel 2 — verosimilitud y momentos**

6. Halla el MV de $\lambda$ en una muestra exponencial.
7. Halla el MV de $\sigma^2$ para una normal con $\mu$ desconocida.
8. Halla el estimador de momentos de $\theta$ para una uniforme $(0, \theta)$.
9. Calcula la información de Fisher de una observación Bernoulli.
10. Calcula la cota de Cramér-Rao para $\hat{\lambda}$ en una muestra Poisson.

**Nivel 3 — eficiencia y Fisher**

11. Halla el MV de $\theta$ para la uniforme $(0, \theta)$ y explica por qué no se deriva.
12. Demuestra con la factorización que $\max X_i$ es suficiente para la uniforme $(0, \theta)$.
13. Calcula la información de Fisher de la exponencial y su cota.
14. Calcula la información de Fisher para $\mu$ de una normal con $\sigma$ conocida y la cota.
15. Un estimador tiene varianza $4$ y sesgo $1$. Halla su ECM.

**Nivel 4 — teoría fina**

16. Si $E[\max X_i] = \frac{n}{n+1}\theta$ para la uniforme $(0, \theta)$, construye un estimador insesgado de $\theta$ a partir del máximo.
17. Según el teorema de Wilks, ¿qué distribución tiene $-2\ln\Lambda$ bajo $H_0$?
18. ¿Qué prueba es la más potente entre las de nivel $\alpha$ según el lema de Neyman-Pearson?
19. ¿Cómo construye el bootstrap una muestra bootstrap a partir de $x_1, \ldots, x_n$?
20. ¿Qué hace el jackknife con una muestra de $n$ datos y para qué sirve?

## Respuestas

1. $\hat{p} = \bar{X} = \frac{1}{n}\sum X_i$ (la frecuencia de éxitos).
2. $\hat{\lambda} = \bar{X}$.
3. Sí: $E[\bar{X}] = \mu$.
4. Sesgo $= -\sigma^2/n$ (se queda corto; por eso se usa $n-1$).
5. $T = \sum_{i=1}^n X_i$ (o equivalentemente $\bar{X}$).
6. $\hat{\lambda} = 1/\bar{X}$.
7. $\hat{\sigma}^2 = \frac{1}{n}\sum (X_i - \bar{X})^2$ (con $n$, ligeramente sesgado).
8. $E[X] = \theta/2 = \bar{X} \Rightarrow \hat{\theta} = 2\bar{X}$.
9. $I(p) = \frac{1}{p(1-p)}$.
10. Cota $= \lambda/n$ (pues $I(\lambda) = 1/\lambda$), alcanzada por $\bar{X}$.
11. $\hat{\theta} = \max X_i$; no se deriva porque la verosimilitud $\theta^{-n}$ es monótona decreciente en $\theta$ y el máximo está en la frontera admisible.
12. $L(\theta) = \theta^{-n} 1\!\!1_{\{x_{(n)} \leq \theta\}}$ depende de los datos solo a través de $x_{(n)} = \max x_i$: factoriza con $g = \theta^{-n}1\!\!1_{\{T \leq \theta\}}$, $h = 1$.
13. $I(\lambda) = 1/\lambda^2$; cota $= \lambda^2/n$.
14. $I(\mu) = 1/\sigma^2$; cota $= \sigma^2/n$, alcanzada por $\bar{X}$.
15. $\text{ECM} = \text{Var} + \text{sesgo}^2 = 4 + 1 = 5$.
16. $\hat{\theta} = \frac{n+1}{n}\max X_i$ (multiplicar por $(n+1)/n$ corrige el sesgo).
17. $\chi^2_k$ (ji-cuadrado con $k$ = número de parámetros restringidos por $H_0$), asintóticamente.
18. La que compara el cociente de verosimilitudes $L(\theta_1)/L(\theta_0)$ contra una constante $c$ elegida para el nivel $\alpha$.
19. Toma $n$ valores al azar de $x_1, \ldots, x_n$ **con reposición** (pueden repetirse), repite $B$ veces y calcula el estadístico en cada remuestra.
20. Deja un dato fuera a la vez (forma $n$ sub-muestras de $n-1$ datos) y usa los $n$ valores del estadístico para estimar sesgo y varianza.
