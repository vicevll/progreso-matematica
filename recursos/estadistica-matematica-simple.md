# Estadística matemática
**Guía simple · Probabilidad y estadística · Univ 3–4**
*Estimadores, suficiencia y máxima verosimilitud.*

## 1. Estimadores y sus propiedades
Un **estimador** $\hat{\theta}$ es una función de la muestra $X_1,\dots,X_n$ que aproxima un parámetro $\theta$ desconocido. Sus propiedades se miden así:

- **Sesgo:** $\text{Sesgo}(\hat{\theta}) = E[\hat{\theta}] - \theta$. El estimador es **insesgado** si $E[\hat{\theta}] = \theta$.
- **Varianza:** $\text{Var}(\hat{\theta})$ mide la dispersión del estimador alrededor de su media.
- **Error cuadrático medio:** $\text{ECM}(\hat{\theta}) = E[(\hat{\theta}-\theta)^2] = \text{Var}(\hat{\theta}) + \text{Sesgo}(\hat{\theta})^2$.
- **Consistencia:** $\hat{\theta} \to \theta$ en probabilidad cuando $n \to \infty$.
- **Eficiencia:** entre los insesgados, alcanza la menor varianza posible (idealmente la cota de Cramér–Rao).

**Estimadores notables:**
1. $\bar{X}$ es insesgado y consistente para $\mu$.
2. $S^2 = \frac{1}{n-1}\sum (X_i - \bar{X})^2$ es insesgado para $\sigma^2$ (de ahí el $n-1$).
3. $S_n^2 = \frac{1}{n}\sum (X_i - \bar{X})^2$ tiene sesgo $-\sigma^2/n$.

**Mini-ejemplo.** Si $E[X] = \mu$ y $\text{Var}(X) = \sigma^2$, entonces $\text{Var}(\bar{X}) = \sigma^2/n$ y $\text{ECM}(\bar{X}) = \sigma^2/n$.

## 2. Suficiencia y criterio de Neyman–Fisher
Un estadístico $T(X_1,\dots,X_n)$ es **suficiente** para $\theta$ si conserva toda la información de la muestra sobre $\theta$; equivalentemente, la distribución condicional de los datos dado $T$ no depende de $\theta$.

**Criterio de factorización (Neyman–Fisher).** $T$ es suficiente para $\theta$ si y solo si la verosimilitud factoriza como
$$L(\theta; x) = g\big(T(x), \theta\big)\, h(x)$$
donde $h(x)$ no depende de $\theta$.

**Suficientes típicos:**
1. Normal con $\sigma$ conocida: $T = \sum X_i$ (o $\bar{X}$) para $\mu$.
2. Poisson: $T = \sum X_i$ para $\lambda$.
3. Uniforme$(0,\theta)$: $T = \max X_i$ para $\theta$.
4. Bernoulli: $T = \sum X_i$ para $p$.
5. Normal con $\mu$ conocido: $T = \sum (X_i-\mu)^2$ para $\sigma^2$.

**Teorema de Rao–Blackwell.** Si $\hat{\theta}$ es insesgado y $T$ es suficiente, entonces $E[\hat{\theta} \mid T]$ es insesgado para $\theta$ y tiene varianza menor o igual que $\hat{\theta}$.

**Mini-ejemplo.** En Bernoulli, $\mathbb{1}_{X_1=1}$ es insesgado para $p$; condicionando en $T = \sum X_i$ se obtiene $\bar{X}$, con menor varianza.

## 3. Estimación por máxima verosimilitud
La **verosimilitud** de una muestra iid es
$$L(\theta) = \prod_{i=1}^{n} f(x_i; \theta), \qquad \ell(\theta) = \ln L(\theta)$$
y el **estimador de máxima verosimilitud (MV)** es
$$\hat{\theta}_{MV} = \arg\max_{\theta} \ell(\theta).$$

**Procedimiento:**
1. Escribe la verosimilitud como producto de densidades (o masas).
2. Toma logaritmo para convertir el producto en suma.
3. Deriva respecto de $\theta$, iguala a cero y resuelve la **ecuación de verosimilitud**.
4. Verifica que es un máximo (segunda derivada o borde del dominio).

**Casos básicos:**
1. Bernoulli/Binomial: $\hat{p} = \bar{X}$.
2. Poisson: $\hat{\lambda} = \bar{X}$.
3. Exponencial: $\hat{\lambda} = 1/\bar{X}$.
4. Normal: $\hat{\mu} = \bar{X}$, $\hat{\sigma}^2 = \frac{1}{n}\sum (X_i-\bar{X})^2$ (sesgado).
5. Uniforme$(0,\theta)$: $\hat{\theta} = \max X_i$.

**Propiedades.** Bajo regularidad, el MV es consistente, asintóticamente normal con varianza $\big(n\,I(\theta)\big)^{-1}$ y asintóticamente eficiente; en muestras finitas puede estar sesgado. **Invariancia:** si $\hat{\theta}$ es MV de $\theta$, entonces $g(\hat{\theta})$ es MV de $g(\theta)$.

**Mini-ejemplo.** Para Bernoulli, $\ell(p) = \sum x_i \ln p + (n-\sum x_i)\ln(1-p)$; derivando, $\hat{p} = \bar{X}$.

## 4. Método de momentos
Iguala los **momentos poblacionales** con los **momentos muestrales**:
$$E[X^k] = \frac{1}{n}\sum_{i=1}^{n} X_i^k$$
y resuelve el sistema para los parámetros. Con $r$ parámetros se usan $k = 1,\dots,r$.

**Mini-ejemplo.** Uniforme$(0,\theta)$: como $E[X] = \theta/2$, igualando $\bar{X} = \theta/2$ resulta $\hat{\theta} = 2\bar{X}$.

**Ventajas y límites.** Es simple y no requiere optimización, pero suele ser menos eficiente que MV y puede producir valores fuera del rango del parámetro. En la uniforme$(0,\theta)$, MV da $\max X_i$, que es mejor que $2\bar{X}$.

## 5. Información de Fisher y cota de Cramér–Rao
La **información de Fisher** de una observación es
$$I(\theta) = E\left[\left(\frac{\partial \ln f(X;\theta)}{\partial \theta}\right)^2\right] = -E\left[\frac{\partial^2 \ln f(X;\theta)}{\partial \theta^2}\right].$$
Para una muestra iid la información total es $n\,I(\theta)$.

**Cota de Cramér–Rao.** Bajo condiciones de regularidad, todo estimador insesgado cumple
$$\text{Var}(\hat{\theta}) \geq \frac{1}{n\,I(\theta)}.$$
Un estimador que alcanza la cota es **eficiente**. La MV suele alcanzarla solo asintóticamente.

**Ejemplos:**
1. Normal con $\sigma$ conocida: $I(\mu) = 1/\sigma^2$; cota $\sigma^2/n$ (alcanzada por $\bar{X}$).
2. Bernoulli: $I(p) = \dfrac{1}{p(1-p)}$; cota $p(1-p)/n$.
3. Poisson: $I(\lambda) = 1/\lambda$; cota $\lambda/n$.
4. Exponencial: $I(\lambda) = 1/\lambda^2$; cota $\lambda^2/n$.

**Advertencia.** Si el soporte de $f$ depende de $\theta$ (por ejemplo uniforme$(0,\theta)$), falla la regularidad y la cota no es aplicable.

## 6. Pruebas óptimas: Neyman–Pearson y razón de verosimilitud
**Lema de Neyman–Pearson.** Para $H_0: \theta = \theta_0$ frente a $H_1: \theta = \theta_1$, la prueba más potente de nivel $\alpha$ rechaza la hipótesis nula cuando
$$\frac{L(\theta_1; x)}{L(\theta_0; x)} \gt k$$
eligiendo la constante $k$ tal que $P(\text{rechazar} \mid H_0) = \alpha$.

**Razón de verosimilitud (LR).** Para hipótesis compuestas se usa
$$\Lambda = \frac{\sup_{\theta \in \Theta_0} L(\theta)}{\sup_{\theta \in \Theta} L(\theta)}, \qquad 0 \leq \Lambda \leq 1.$$

**Teorema de Wilks.** Bajo $H_0$ y condiciones de regularidad, $-2\ln\Lambda$ converge en distribución a una $\chi^2$ con grados de libertad iguales a la diferencia de parámetros libres. Es la base de los contrastes de modelos anidados.

**Mini-ejemplo.** Normal con $\sigma$ conocida y $H_0: \mu = \mu_0$: $\,-2\ln\Lambda = z^2$ con $z = \dfrac{\bar{X}-\mu_0}{\sigma/\sqrt{n}}$, que sigue una $\chi^2_1$.

## 7. Métodos computacionales: bootstrap y jackknife
**Bootstrap.** Aproxima la distribución muestral de un estadístico remuestreando con reposición de los datos observados:
1. Genera $B$ muestras bootstrap de tamaño $n$ (con reposición).
2. Calcula $\hat{\theta}^*_b$ en cada muestra.
3. Usa la variabilidad de $\{\hat{\theta}^*_b\}$ para estimar el sesgo, el error estándar y los intervalos de confianza (por percentiles).

**Jackknife.** Deja fuera una observación a la vez, calcula $\hat{\theta}_{(i)}$ y estima el sesgo como
$$\widehat{\text{Sesgo}}_{jack} = (n-1)\big(\bar{\hat{\theta}}_{(\cdot)} - \hat{\theta}\big),$$
donde $\bar{\hat{\theta}}_{(\cdot)}$ es el promedio de los estimadores dejando uno fuera.

**Ventajas.** Ambos funcionan cuando la teoría asintótica es dudosa o la distribución exacta es intratable (mediana, correlación, cocientes). Para datos dependientes se requiere bootstrap por bloques.

## Ejercicios (20)
### Nivel 1 — Estimadores y propiedades
1. ¿Es $\bar{X}$ insesgado para $\mu$?
2. Halla el sesgo de $S_n^2 = \frac{1}{n}\sum (X_i-\bar{X})^2$ para $\sigma^2$.
3. Calcula $\text{ECM}(\bar{X})$ para $\mu$ si $\text{Var}(X) = \sigma^2$.
4. ¿Es $2\bar{X}$ insesgado para $\theta$ en uniforme$(0,\theta)$?
5. Si un estimador tiene $\text{Var} = \sigma^2/n$ y sesgo $b$, escribe su ECM.

### Nivel 2 — Suficiencia y máxima verosimilitud
6. Da un estadístico suficiente para $\lambda$ en Poisson$(\lambda)$.
7. Da un estadístico suficiente para $\theta$ en uniforme$(0,\theta)$.
8. Halla el MV de $p$ en Bernoulli$(p)$.
9. Halla el MV de $\lambda$ en exponencial$(\lambda)$.
10. Halla el MV de $\sigma^2$ en normal con $\mu$ desconocido.

### Nivel 3 — Fisher, Cramér–Rao y momentos
11. Halla $I(\mu)$ para normal con $\sigma$ conocida.
12. Halla $I(p)$ para Bernoulli$(p)$.
13. Da la cota de Cramér–Rao para $\lambda$ en Poisson.
14. Halla el estimador de momentos de $\theta$ en uniforme$(0,\theta)$.
15. Da la cota de Cramér–Rao para $\mu$ con $n = 10$ y $\sigma = 2$.

### Nivel 4 — Pruebas óptimas y métodos computacionales
16. ¿Qué cociente compara la prueba más potente según Neyman–Pearson?
17. ¿Cuál es la distribución asintótica de $-2\ln\Lambda$ bajo $H_0$?
18. ¿Qué distribución aproxima el bootstrap?
19. ¿Qué estima el jackknife?
20. Si $\beta = 0.20$, ¿cuál es la potencia?

## Respuestas
1. Sí.
2. $-\sigma^2/n$.
3. $\sigma^2/n$.
4. Sí, porque $E[2\bar{X}] = 2(\theta/2) = \theta$.
5. $\sigma^2/n + b^2$.
6. $T = \sum X_i$.
7. $T = \max X_i$.
8. $\hat{p} = \bar{X}$.
9. $\hat{\lambda} = 1/\bar{X}$.
10. $\hat{\sigma}^2 = \frac{1}{n}\sum (X_i-\bar{X})^2$.
11. $I(\mu) = 1/\sigma^2$.
12. $I(p) = \dfrac{1}{p(1-p)}$.
13. $\lambda/n$.
14. $\hat{\theta} = 2\bar{X}$.
15. $\sigma^2/n = 4/10 = 0.4$.
16. El cociente de verosimilitudes $L(\theta_1;x)/L(\theta_0;x)$.
17. Una $\chi^2$ (teorema de Wilks).
18. La distribución muestral del estadístico.
19. El sesgo y la varianza, dejando un dato fuera a la vez.
20. $1-\beta = 0.80$.
