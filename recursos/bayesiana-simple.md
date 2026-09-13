# Inferencia bayesiana · Guía simple

## La idea en una frase

La inferencia bayesiana trata los parámetros (una probabilidad $p$, una media $\mu$, una tasa $\lambda$) como variables aleatorias sobre las que tenemos creencias, y usa el teorema de Bayes para actualizar esas creencias con los datos.

## La ecuación central

$$p(\theta \mid x) = \frac{p(x \mid \theta)\,p(\theta)}{p(x)} \quad \propto \quad p(x \mid \theta)\,p(\theta)$$

Con palabras: **posterior $\propto$ verosimilitud $\times$ previa**.

- $p(\theta)$: **previa** — creencia sobre el parámetro $\theta$ antes de ver datos.
- $p(x \mid \theta)$: **verosimilitud** — cuán plausibles son los datos $x$ si el parámetro vale $\theta$.
- $p(\theta \mid x)$: **posterior** — creencia actualizada después de ver los datos.
- $p(x)$: **evidencia** — constante que normaliza (no depende de $\theta$).

## Familias conjugadas: la tabla que resuelve casi todo

| Verosimilitud | Previa conjugada | Posterior |
|---|---|---|
| Binomial ($k$ éxitos en $n$) | Beta($\alpha$, $\beta$) | Beta($\alpha + k$, $\beta + n - k$) |
| Normal con $\sigma$ conocida | $N(\mu_0, \sigma_0^2)$ | $N\left(\dfrac{\frac{1}{\sigma_0^2}\mu_0 + \frac{n}{\sigma^2}\bar{x}}{\frac{1}{\sigma_0^2} + \frac{n}{\sigma^2}},\ \dfrac{1}{\frac{1}{\sigma_0^2} + \frac{n}{\sigma^2}}\right)$ |
| Poisson ($x_1,\ldots,x_n$) | Gamma($\alpha$, $\beta$) | Gamma($\alpha + \sum x_i$, $\beta + n$) |

La Beta vive en $[0,1]$ y su media es $\dfrac{\alpha}{\alpha+\beta}$: $\alpha$ cuenta éxitos ficticios, $\beta$ fracasos ficticios.

## Posterior, predictiva e intervalos

- **Intervalo creíble 95%:** intervalo $[a,b]$ con $P(a \le \theta \le b \mid x) = 0.95$. Interpretación directa: el parámetro está ahí con probabilidad 0.95 (dado el modelo).
- **Predictiva posterior:** $p(\tilde{x} \mid x) = \int p(\tilde{x} \mid \theta)\,p(\theta \mid x)\,d\theta$; promedia la incertidumbre del parámetro. Con posterior Beta($\alpha,\beta$), la probabilidad de éxito en el próximo ensayo es la media $\dfrac{\alpha}{\alpha+\beta}$.
- **MCMC:** si no hay forma cerrada, se muestrea la posterior. Metropolis-Hastings propone saltos y los acepta con probabilidad $\min\!\left(1, \dfrac{p(\theta^{*} \mid x)}{p(\theta^{(t)} \mid x)}\right)$; Gibbs muestrea cada parámetro condicionado en los demás. Diagnóstico: $\hat{R} < 1.01$.
- **Modelos jerárquicos:** $\theta_j \sim N(\mu, \tau^2)$; los grupos con pocos datos se encogen hacia $\mu$ (shrinkage).

## Ejercicios (20)

### Nivel 1 · Conceptos básicos

1. Escribe el teorema de Bayes para el posterior $p(\theta \mid x)$ y nombra las cuatro piezas.
2. Si $p(A)=0.3$, $p(B \mid A)=0.8$ y $p(B \mid \text{no }A)=0.2$, calcula $p(A \mid B)$.
3. ¿Qué significa la barra vertical en $p(x \mid \theta)$?
4. Explica con tus palabras qué significa que $p(\theta \mid x) \propto p(x \mid \theta)\,p(\theta)$.
5. ¿Qué le pasa a la influencia de la previa cuando la muestra crece mucho?

### Nivel 2 · Familias conjugadas

6. Previa Beta(1,1) y 6 caras en 10 lanzamientos: halla la posterior y su media.
7. Previa Beta(2,8) y 4 éxitos en 5 ensayos: halla la posterior y su media.
8. Previa $N(100, 20)$ con datos $n=10$, $\bar{x}=105$, $\sigma^2=50$: calcula la media posterior.
9. Previa Gamma(3, 1) y observaciones Poisson 2, 4, 3, 5 en 4 períodos: halla la posterior.
10. ¿Cuántos "datos ficticios" representa la previa Beta(4,6)?

### Nivel 3 · Intervalos y predicción

11. Explica la diferencia entre intervalo creíble e intervalo de confianza.
12. Con posterior Beta(9,5), ¿qué probabilidad das al próximo lanzamiento de ser cara?
13. Con posterior Beta(9,5), da un intervalo creíble aproximado del 95% (usa el del texto: $[0.36, 0.88]$) e interprétalo.
14. ¿Qué significa que la predictiva beta-binomial es más ancha que la binomial con $p$ fijo?
15. Previa Beta(5,5) y 8 caras en 12: media posterior y proporción muestral; compara.

### Nivel 4 · MCMC, comparación y jerarquía

16. ¿Por qué es necesario MCMC en modelos no conjugados?
17. Describe el paso de aceptación de Metropolis-Hastings.
18. ¿Qué mide $\hat{R}$ y qué valor indica convergencia?
19. Un factor de Bayes de 20 a favor de $M_1$: ¿qué concluyes?
20. En un modelo jerárquico de tasas por ciudad, ¿qué le pasa a una ciudad con 3 visitas?

## Respuestas

1. $p(\theta \mid x) = \dfrac{p(x \mid \theta)\,p(\theta)}{p(x)}$; previa, verosimilitud, posterior y evidencia.
2. $p(B) = 0.8 \cdot 0.3 + 0.2 \cdot 0.7 = 0.38$; $p(A \mid B) = 0.24/0.38 \approx 0.632$.
3. "Dado": la probabilidad (o densidad) de lo de la izquierda suponiendo lo de la derecha.
4. La posterior es, salvo una constante, el producto punto a punto de verosimilitud y previa; la evidencia solo normaliza.
5. Tiende a cero: la verosimilitud domina y distintas previas razonables dan posteriores casi iguales.
6. Beta(7, 5); media $7/12 \approx 0.583$.
7. Beta(6, 9); media $6/15 = 0.4$.
8. Precisión previa $1/20 = 0.05$; precisión datos $10/50 = 0.2$; media $= (0.05 \cdot 100 + 0.2 \cdot 105)/0.25 = 104$.
9. Gamma(3 + 14, 1 + 4) = Gamma(17, 5); media $17/5 = 3.4$.
10. Diez: 4 éxitos ficticios y 6 fracasos ficticios.
11. El creíble da una probabilidad sobre el parámetro dado el modelo; el de confianza describe la cobertura del procedimiento repetido.
12. La media posterior, $9/14 \approx 0.643$.
13. $[0.36, 0.88]$: la probabilidad de que la proporción esté en ese rango es 95% (dado el modelo).
14. Refleja la incertidumbre sobre $p$, no solo la variabilidad del conteo con $p$ fijo.
15. Media posterior $= 13/22 \approx 0.591$; proporción muestral $= 0.667$; la previa encoge la estimación hacia 0.5.
16. Porque las integrales (evidencia, cuantiles, predictiva) no tienen forma cerrada y solo se puede muestrear la posterior.
17. Acepta el candidato $\theta^{*}$ con probabilidad $\min\!\left(1, \dfrac{p(x \mid \theta^{*})\,p(\theta^{*})}{p(x \mid \theta^{(t)})\,p(\theta^{(t)})}\right)$; si se rechaza, repite el valor actual.
18. La convergencia entre cadenas (Gelman-Rubin); $\hat{R} < 1.01$ indica convergencia.
19. Evidencia fuerte a favor de $M_1$ (mayor que 10); igual conviene reportar sensibilidad a la previa.
20. Su estimación se encoge fuertemente hacia la media global de todas las ciudades (shrinkage), porque sus datos son muy pocos.
