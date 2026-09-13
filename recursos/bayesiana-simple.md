# Inferencia bayesiana

La inferencia bayesiana trata los parámetros como variables aleatorias: se parte de una creencia previa y se actualiza con los datos para obtener una distribución posterior. A diferencia de la inferencia frecuentista, la respuesta es una distribución completa sobre el parámetro, no un valor puntual.

## Bayes en inferencia

El teorema de Bayes en forma de densidades es el motor de toda la inferencia:
$$p(\theta \mid x) = \frac{p(x \mid \theta)\,p(\theta)}{p(x)} \propto p(x \mid \theta)\,p(\theta)$$

Los ingredientes son:

1. **Previa** $p(\theta)$: lo que creemos antes de ver datos.
2. **Verosimilitud** $p(x \mid \theta)$: la información que aportan los datos.
3. **Posterior** $p(\theta \mid x)$: la creencia actualizada.
4. **Evidencia** $p(x) = \int p(x \mid \theta)p(\theta)\,d\theta$: la constante de normalización.

La forma proporcional es la más usada porque la evidencia solo reescala. En palabras: el posterior es la previa corregida por la verosimilitud. Con muchos datos, la verosimilitud domina y la previa pierde peso.

**Mini-ejemplo.** Con previa $P(H)=0.3$ y una observación cuya verosimilitud es $3$ veces mayor bajo $H$ que bajo su complemento, el posterior es $P(H\mid x) = \frac{0.3\cdot 3}{0.3\cdot 3 + 0.7\cdot 1} \approx 0.5625$.

## Distribuciones previas

La previa es una elección del modelador y admite varias clases:

1. **Informativas:** codifican conocimiento real (datos previos, expertos).
2. **Débiles o difusas:** apenas imponen restricciones; dejan mandar a los datos.
3. **No informativas:** planas o de Jeffreys, invariantes ante reparametrizaciones.
4. **Conjugadas:** garantizan que el posterior pertenezca a la misma familia que la previa.

La crítica habitual es la subjetividad. La respuesta práctica es el **análisis de sensibilidad**: probar varias previas razonables y comprobar que, con datos suficientes, los posteriores coinciden.

**Mini-ejemplo.** Para una moneda, $\text{Beta}(1,1)$ es uniforme sobre $[0,1]$: todo valor de $p$ es igualmente creíble antes de lanzar.

## Familias conjugadas

Cuando la previa y la verosimilitud son conjugadas, la actualización se reduce a sumar parámetros.

1. **Beta-Binomial.** Previa $\text{Beta}(\alpha,\beta)$ y $k$ éxitos en $n$ ensayos:
$$\theta \mid x \sim \text{Beta}(\alpha + k,\; \beta + n - k)$$
2. **Normal-Normal.** Previa $N(\mu_0,\sigma_0^2)$ y verosimilitud $N(\theta,\sigma^2)$ con $n$ datos: el posterior es normal, con precisión sumada:
$$\frac{1}{\sigma_n^2} = \frac{1}{\sigma_0^2} + \frac{n}{\sigma^2}, \qquad \mu_n = \sigma_n^2\left(\frac{\mu_0}{\sigma_0^2} + \frac{n\bar{x}}{\sigma^2}\right)$$
3. **Gamma-Poisson.** Previa $\text{Gamma}(\alpha,\beta)$ (forma, tasa) y datos Poisson con suma $S$ en $n$ intervalos:
$$\lambda \mid x \sim \text{Gamma}(\alpha + S,\; \beta + n)$$
4. **Dirichlet-Multinomial.** Generaliza Beta a varias categorías.

**Mini-ejemplo.** Previa $\text{Beta}(2,2)$ y $7$ caras en $10$ lanzamientos dan posterior $\text{Beta}(9,5)$, con media $9/14 \approx 0.643$.

## Posterior, predictiva e intervalos creíbles

Del posterior se extraen resúmenes:

1. **Media** posterior: minimiza la pérdida cuadrática.
2. **Mediana**: minimiza la pérdida absoluta.
3. **Moda** (MAP): maximiza la densidad posterior.
4. **Cuantiles**: describen la forma completa.

Un **intervalo creíble** al $95\%$ es $[a,b]$ con
$$P(\theta \in [a,b] \mid x) = 0.95$$
Su lectura es directa: dado el modelo y los datos, el parámetro está en ese rango con probabilidad $0.95$. No es lo mismo que un intervalo de confianza frecuentista, que se refiere a la cobertura del procedimiento.

La **distribución predictiva posterior** para una nueva observación integra la incertidumbre sobre $\theta$:
$$p(\tilde{x} \mid x) = \int p(\tilde{x} \mid \theta)\,p(\theta \mid x)\,d\theta$$
Por eso es más ancha que la predictiva con el parámetro fijado.

**Mini-ejemplo.** Con posterior $\text{Beta}(9,5)$, la probabilidad predictiva de cara es $E[\theta\mid x] = 9/14 \approx 0.643$, y un intervalo creíble aproximado del $95\%$ es $[0.39, 0.89]$.

## Métodos computacionales: MCMC

Cuando la evidencia no tiene forma cerrada, se muestrea el posterior con cadenas de Markov (MCMC):

1. **Metropolis-Hastings:** propone un salto $\theta^{*}$ y lo acepta con probabilidad
$$\alpha = \min\left(1, \frac{p(\theta^{*}\mid x)\,q(\theta \mid \theta^{*})}{p(\theta \mid x)\,q(\theta^{*} \mid \theta)}\right)$$
Si la propuesta es simétrica, el cociente de propuestas se cancela y solo importa el cociente de posteriores.
2. **Gibbs:** muestrea cada parámetro de su condicional completa dado el resto.
3. **Hamiltonian Monte Carlo (HMC):** usa el gradiente de la log-posterior; es el motor de Stan y PyMC.
4. **Inferencia variacional:** aproxima el posterior por optimización; más rápida, menos exacta.

Los diagnósticos obligatorios son el estadístico $\hat{R}$ de Gelman-Rubin (cercano a $1$, típicamente menor que $1.01$), el **tamaño efectivo de muestra (ESS)** y la inspección de las trazas.

**Mini-ejemplo.** Un modelo jerárquico con cien parámetros se ajusta con HMC; si $\hat{R} \approx 1.00$ y las trazas mezclan bien, se acepta la convergencia.

## Comparación de modelos

1. **Factor de Bayes:** cociente de evidencias $BF_{12} = p(x \mid M_1)/p(x \mid M_2)$; valores mayores que $10$ indican evidencia fuerte.
2. **DIC, WAIC y LOO-CV:** criterios predictivos; **menor es mejor**.
3. **Regularización implícita:** una previa normal equivale a una penalización tipo Ridge.

Los factores de Bayes son sensibles a la previa, así que conviene reportar análisis de sensibilidad. Los criterios predictivos como LOO-CV son más estables para comparar modelos.

**Mini-ejemplo.** Entre dos modelos de conversión con LOO de $120$ y $135$, se prefiere el de $120$: predice mejor en datos retenidos.

## Modelos jerárquicos

Los **modelos jerárquicos** disponen los parámetros en niveles: los parámetros individuales provienen de una distribución poblacional con su propia previa:
$$y_{ij} \sim N(\theta_j, \sigma^2), \qquad \theta_j \sim N(\mu, \tau^2), \qquad \mu, \tau \sim \text{previa}$$

La ventaja es el **pooling parcial**: los grupos se informan mutuamente sin igualarse. Los grupos con pocos datos se **encogen** hacia la media global (shrinkage), lo que estabiliza las estimaciones y reduce el sobreajuste.

**Mini-ejemplo.** Para $\mu=0$, $\tau^2=1$, $\sigma^2=1$ y $n=4$ con $\bar{y}=2$, la precisión posterior es $1 + 4 = 5$, de modo que $\theta_j \mid y \sim N(1.6,\; 0.2)$: la estimación grupal se acerca a la media global.

## Ejercicios (20)

### Nivel 1 · Fundamentos y conjugadas

1. Previa $\text{Beta}(1,1)$ y $6$ caras en $9$ lanzamientos: halla la distribución posterior.
2. Previa $\text{Beta}(2,5)$ y $3$ éxitos en $10$ ensayos: halla la posterior.
3. Previa $\text{Gamma}(3,2)$ (forma, tasa) y datos Poisson con $n=5$, $\sum x_i = 12$: halla la posterior y su media.
4. Previa $N(0,1)$ y verosimilitud $N(\theta,4)$ con una observación $x=3$: halla la media y la varianza posteriores.
5. Con posterior $\text{Beta}(7,4)$: calcula la media, la moda y la varianza.

### Nivel 2 · Predictiva e intervalos creíbles

6. Con posterior $\text{Beta}(7,4)$, ¿cuál es la probabilidad predictiva de cara en el siguiente lanzamiento?
7. Con la misma posterior, ¿cuál es la probabilidad predictiva de dos caras en los dos siguientes lanzamientos?
8. Con posterior $\text{Beta}(7,4)$, halla un intervalo creíble del $95\%$.
9. Posterior $N(0.6,0.8)$ y varianza de muestreo $\sigma^2 = 4$: halla la predictiva de una nueva observación.
10. Posterior $\text{Gamma}(15,7)$: halla la probabilidad predictiva de observar $0$ eventos en el siguiente intervalo.

### Nivel 3 · MCMC, comparación y jerárquicos

11. ¿Qué mide el estadístico $\hat{R}$ y cuándo indica convergencia?
12. Un factor de Bayes $BF_{12} = 12$: interpreta la evidencia.
13. Escribe el criterio de aceptación de Metropolis-Hastings cuando la propuesta es simétrica.
14. En un modelo jerárquico, explica qué es el shrinkage o pooling parcial.
15. ¿Por qué el tamaño efectivo de muestra (ESS) importa más que el número bruto de iteraciones?

### Nivel 4 · Aplicaciones

16. A/B testing: A convierte $30$ de $200$ y B convierte $24$ de $200$, con previas $\text{Beta}(1,1)$. Halla las posteriores y sus medias.
17. Una enfermedad tiene prevalencia $2\%$; el test tiene sensibilidad $90\%$ y especificidad $95\%$. Halla $P(\text{enfermo} \mid +)$.
18. Jerárquico: $\theta_j \sim N(\mu,\tau^2)$ con $\mu=0$, $\tau^2=1$; $y_j \sim N(\theta_j,1)$ y $n=4$ con $\bar{y}=2$. Halla la posterior de $\theta_j$.
19. Con previa $\text{Beta}(1,1)$, ¿cuál es la evidencia (verosimilitud marginal) de observar $6$ caras en $9$ lanzamientos?
20. Compara la influencia de las previas $\text{Beta}(1,1)$ y $\text{Beta}(10,10)$ con $6$ caras en $9$: halla las posteriores y sus medias.

## Respuestas

1. $\text{Beta}(7,4)$.
2. $\text{Beta}(5,12)$.
3. $\text{Gamma}(15,7)$; media $15/7 \approx 2.143$.
4. $N(0.6,\; 0.8)$.
5. Media $7/11 \approx 0.636$; moda $6/9 = 2/3 \approx 0.667$; varianza $\frac{7 \cdot 4}{11^2 \cdot 12} = \frac{7}{363} \approx 0.0193$.
6. $E[p] = 7/11 \approx 0.636$.
7. $E[p^2] = \frac{7 \cdot 8}{11 \cdot 12} = \frac{14}{33} \approx 0.424$.
8. $[0.348,\; 0.878]$.
9. $N(0.6,\; 4.8)$, porque la varianza predictiva es $\sigma^2 + \sigma_n^2 = 4 + 0.8$.
10. $\left(\frac{7}{8}\right)^{15} \approx 0.1349$.
11. Mide la dispersión entre cadenas frente a la interna; $\hat{R} \approx 1$ (p. ej. $< 1.01$) indica convergencia.
12. $BF > 10$: evidencia fuerte a favor de $M_1$.
13. $\alpha = \min\left(1, \frac{p(\theta^{*} \mid x)}{p(\theta \mid x)}\right)$.
14. Los grupos con pocos datos se acercan a la media global; los grupos con muchos datos conservan su estimación propia.
15. Las muestras están autocorrelacionadas; el ESS mide cuántas muestras independientes equivalen y determina la precisión real.
16. A: $\text{Beta}(31,171)$ con media $31/202 \approx 0.1535$; B: $\text{Beta}(25,177)$ con media $25/202 \approx 0.1238$.
17. $\frac{0.9 \cdot 0.02}{0.9 \cdot 0.02 + 0.05 \cdot 0.98} = \frac{0.018}{0.067} \approx 0.2687$.
18. $N(1.6,\; 0.2)$, con precisión $1 + 4 = 5$.
19. $\frac{1}{n+1} = \frac{1}{10} = 0.1$.
20. $\text{Beta}(1,1)$ da $\text{Beta}(7,4)$ con media $0.636$; $\text{Beta}(10,10)$ da $\text{Beta}(16,13)$ con media $16/29 \approx 0.552$. La previa más fuerte encoge hacia $0.5$.
