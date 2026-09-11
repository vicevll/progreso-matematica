window.CURSOS = window.CURSOS || {};
window.CURSOS["probabilidad-estadistica"] = {
  "probabilidad": String.raw`
## Espacio muestral y eventos
Un **experimento aleatorio** tiene resultados posibles que forman el **espacio muestral** $\Omega$. Un **evento** es un subconjunto de $\Omega$.

**Ejemplos:**
- Lanzar un dado: $\Omega = \{1, 2, 3, 4, 5, 6\}$; evento "par" $= \{2, 4, 6\}$.
- Lanzar dos monedas: $\Omega = \{CC, CS, SC, SS\}$.
- Vida de un foco: $\Omega = [0, \infty)$.

**Operaciones:** unión (alguno), intersección (ambos), complemento (no), diferencia. Los eventos se combinan como conjuntos.

**Eventos disjuntos:** $A \cap B = \emptyset$; no pueden ocurrir juntos. La probabilidad de su unión es la suma.

## Axiomas de Kolmogorov
Una **probabilidad** $P$ sobre $\Omega$ cumple:
1. **No negatividad:** $P(A) \geq 0$.
2. **Normalización:** $P(\Omega) = 1$.
3. **Aditividad numerable:** para eventos disjuntos dos a dos:
$$P\left(\bigcup_{n} A_n\right) = \sum_n P(A_n)$$

**Consecuencias:**
- $P(\emptyset) = 0$; $P(A^c) = 1 - P(A)$.
- Si $A \subseteq B$: $P(A) \leq P(B)$.
- **Unión general:** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

**Ejemplo.** Con un dado justo, $P(\text{par}) = 3/6 = 0.5$; $P(\text{no 6}) = 5/6$.

**Interpretaciones:** frecuentista (límite de frecuencias), bayesiana (grado de creencia), y formal (los axiomas). Las tres conviven.

## Probabilidad condicional
La probabilidad de $A$ dado que ocurrió $B$:
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \qquad P(B) > 0$$

Reorganizando: $P(A \cap B) = P(A \mid B)P(B)$ (regla del producto). Para tres eventos:
$$P(A \cap B \cap C) = P(A)P(B \mid A)P(C \mid A \cap B)$$

**Ejemplo.** Con un dado, $P(\text{par} \mid \text{mayor que 3}) = P(\{4,6\})/P(\{4,5,6\}) = (2/6)/(3/6) = 2/3$.

**Advertencia:** $P(A \mid B) \neq P(B \mid A)$ (falacia del fiscal). Confundirlas es el error más costoso en aplicaciones médicas y legales.

## Independencia
$A$ y $B$ son **independientes** si:
$$P(A \cap B) = P(A)P(B)$$
o equivalentemente $P(A \mid B) = P(A)$: saber uno no cambia la información del otro.

**Independencia múltiple:** cada subconjunto factoriza. Ojo: independientes dos a dos no implica mutuamente independientes.

**Ejemplos:**
- Dos lanzamientos de moneda: independientes.
- Extraer sin reposición: dependientes.
- $P(A) = 0$ o $1$: independiente de cualquier evento.

**Falacia del jugador:** creer que una racha pasada cambia la probabilidad futura en eventos independientes. La moneda no tiene memoria.

## Probabilidad total y teorema de Bayes
**Partición:** eventos $B_1, \ldots, B_n$ disjuntos que cubren $\Omega$.

**Probabilidad total:**
$$P(A) = \sum_{i} P(A \mid B_i)P(B_i)$$

**Teorema de Bayes:**
$$P(B_j \mid A) = \frac{P(A \mid B_j)P(B_j)}{\sum_i P(A \mid B_i)P(B_i)}$$

**Ejemplo médico (clásico).** Enfermedad con prevalencia $1\%$; test con sensibilidad $99\%$ y especificidad $95\%$.
- $P(\text{enf} \mid +) = \dfrac{0.99 \cdot 0.01}{0.99\cdot0.01 + 0.05\cdot0.99} \approx 0.167$.
- A pesar del test positivo, solo $16.7\%$ tiene la enfermedad: los falsos positivos dominan por la baja prevalencia.

**Lección:** la tasa base es esencial; el test cambia la creencia, pero no la vuelve certeza.

## Conteo y probabilidad
En espacios finitos con resultados equiprobables:
$$P(A) = \frac{|A|}{|\Omega|}$$

Se usan las técnicas de conteo: permutaciones, combinaciones, inclusión-exclusión.

**Ejemplos:**
- Dos dados suman 7: 6 casos de 36: $P = 1/6$.
- Mano de póker con un par: $\dfrac{13 \cdot C(4,2) \cdot C(12,3) \cdot 4^3}{C(52,5)}$.
- Cumpleaños: con 23 personas, $P(\text{coincidencia}) > 0.5$ (paradoja del cumpleaños).

**Ejemplo.** La probabilidad de que al menos dos de 23 personas cumplan el mismo día es $1 - \frac{365\cdot364\cdots343}{365^{23}} \approx 0.507$.

## Ley de los grandes números
**Ley débil:** el promedio de $n$ ensayos independientes converge en probabilidad a la esperanza:
$$\bar{X}_n \xrightarrow{P} \mu$$

**Ley fuerte:** la convergencia es casi segura.

**Interpretación:** justifica la definición frecuentista de probabilidad y la estimación por promedios. Con $n$ grande, el promedio empírico se estabiliza.

**Ejemplo.** En 10.000 lanzamientos de moneda, la fracción de caras estará cerca de $0.5$ (típicamente entre $0.49$ y $0.51$). La desviación típica del promedio decae como $1/\sqrt{n}$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, axiomas).** Con un dado, $P(\text{impar o mayor que 4})$.
- $P(\text{impar}) = 1/2$; $P(>4) = 1/3$; intersección $\{5\}$: $1/6$.
- $P = 1/2 + 1/3 - 1/6 = 2/3$.

**Ejemplo 2 (práctica, condicional).** Se extraen dos cartas sin reposición. ¿Probabilidad de que la segunda sea as?
- $P(\text{2ª as}) = P(\text{1ª as})P(\text{2ª as} \mid \text{1ª as}) + P(\text{no as})P(\dots)$
- $= \frac{4}{52}\cdot\frac{3}{51} + \frac{48}{52}\cdot\frac{4}{51} = \frac{4}{52}$: igual a la primera. Simetría.

**Ejemplo 3 (práctica, Bayes).** Dos urnas: la A tiene 3 blancas y 1 negra; la B, 1 blanca y 3 negras. Se elige una urna al azar y sale blanca. ¿Probabilidad de haber elegido A?
- $P(A \mid B) = \dfrac{(3/4)(1/2)}{(3/4)(1/2) + (1/4)(1/2)} = 3/4$.

**Ejemplo 4 (aplicación, control de calidad).** Una fábrica produce con 2% de defectuosos. ¿Probabilidad de que en 5 unidades haya 0 defectuosas?
- Independientes: $0.98^5 \approx 0.9039$.
- El modelo es binomial: $C(5,0)(0.02)^0(0.98)^5$.

**Ejemplo 5 (aplicación, riesgo).** Un seguro cubre un evento con probabilidad $0.001$ y da $\$100\,000$. Prima justa.
- Valor esperado del pago: $0.001 \cdot 100000 = 100$.
- La prima actuarial es $\$100$ (más gastos y margen).

**Ejemplo 6 (aplicación, paradoja).** La paradoja de Monty Hall.
- Tres puertas, una con premio. Tras elegir, el presentador abre una puerta vacía. ¿Conviene cambiar?
- Cambiar gana con probabilidad $2/3$; quedarse, $1/3$.
- $P(\text{ganar si cambia}) = P(\text{elección inicial incorrecta}) = 2/3$.

## Contextos donde se aplica
- **Medicina:** diagnóstico, sensibilidad y especificidad, ensayos clínicos.
- **Finanzas y seguros:** valoración de riesgo, primas, derivados.
- **Ingeniería:** fiabilidad, control de calidad, telecomunicaciones.
- **Machine learning:** modelos probabilísticos, clasificación, incertidumbre.
- **Vida diaria:** juegos, encuestas, pronósticos, decisiones.

## Errores comunes y cómo evitarlos
- **Confundir $P(A\mid B)$ con $P(B\mid A)$.** Falacia del fiscal; usa Bayes.
- **Ignorar la tasa base.** La prevalencia cambia radicalmente la interpretación.
- **Suponer independencia sin justificar.** Verifica $P(A \cap B) = P(A)P(B)$.
- **Sumar eventos no disjuntos.** Resta la intersección.
- **Creer en la falacia del jugador.** Los eventos independientes no tienen memoria.

## Ejercicios propuestos
1. Con dos dados, $P(\text{suma} \leq 4)$.
2. Si $P(A) = 0.4$, $P(B) = 0.5$, $P(A \cap B) = 0.2$: ¿son independientes?
3. Una enfermedad afecta al 2% y el test tiene 90% de sensibilidad y 95% de especificidad. $P(\text{enf} \mid +)$.
4. ¿Cuántas manos de 5 cartas tienen exactamente 2 ases?
5. Probabilidad de al menos un 6 en 4 lanzamientos.
6. Se lanzan 2 monedas; ¿$P(\text{ambas caras} \mid \text{al menos una cara})$?
7. En 1000 nacimientos con $P(\text{niña}) = 0.5$, ¿qué espera la ley de grandes números?
8. ¿Por qué Monty Hall no es 50/50 al cambiar?

**Respuestas:** 1) $6/36 = 1/6$. 2) $0.4\cdot0.5 = 0.2$: sí. 3) $\frac{0.9\cdot0.02}{0.9\cdot0.02 + 0.05\cdot0.98} \approx 0.269$. 4) $\frac{C(4,2)C(48,3)}{C(52,5)} \approx 0.0399$. 5) $1 - (5/6)^4 \approx 0.5177$. 6) $1/3$. 7) Cerca de 500 niñas, con desviación $\sqrt{250} \approx 15.8$. 8. La información del presentador sesga hacia la otra puerta.

## Resumen
- Espacio muestral, eventos y axiomas definen la probabilidad; las reglas se deducen de Kolmogorov.
- La condicional y la regla del producto conectan información; Bayes invierte la dirección.
- Independencia significa que la información no cambia; no se asume, se verifica.
- La probabilidad total descompone por casos; Bayes actualiza creencias.
- La ley de los grandes números justifica la estabilidad de los promedios.
`,

  "variables-aleatorias": String.raw`
## Variables aleatorias
Una **variable aleatoria** $X$ es una función del espacio muestral a los números: convierte resultados en valores. Puede ser **discreta** (valores contables) o **continua** (intervalos).

- **Función de masa (discreta):** $p(x) = P(X = x)$, con $\sum_x p(x) = 1$.
- **Densidad (continua):** $P(a \leq X \leq b) = \int_a^b f(x)\,dx$, con $\int f = 1$.
- **Función de distribución:** $F(x) = P(X \leq x)$; crece de 0 a 1.

**Ejemplo.** Un dado: $X$ = resultado, masa $p(k) = 1/6$. La altura de una persona: densidad aproximadamente normal.

**Advertencia:** en continuas, $P(X = x) = 0$ para todo $x$; las probabilidades son de intervalos.

## Distribuciones discretas notables
- **Bernoulli($p$):** un ensayo, $P(1) = p$.
- **Binomial($n, p$):** número de éxitos en $n$ ensayos independientes:
$$P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}$$
- **Geométrica($p$):** número de ensayos hasta el primer éxito: $P(X = k) = (1-p)^{k-1}p$.
- **Poisson($\lambda$):** número de eventos en un intervalo con tasa $\lambda$:
$$P(X = k) = \frac{e^{-\lambda}\lambda^k}{k!}$$
- **Hipergeométrica:** éxitos al extraer sin reposición.

**Ejemplo.** Llamadas por hora con $\lambda = 5$: $P(X = 3) = e^{-5}5^3/3! \approx 0.1404$.

## Distribuciones continuas notables
- **Uniforme($a, b$):** densidad constante $1/(b-a)$.
- **Exponencial($\lambda$):** $f(x) = \lambda e^{-\lambda x}$, $x \geq 0$; modela tiempos de espera. Propiedad de pérdida de memoria.
- **Normal($\mu, \sigma^2$):**
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$
- **t de Student, chi-cuadrado, F:** derivadas de la normal, base de la inferencia.

**Ejemplo.** El 68% de una normal cae en $\mu \pm \sigma$; el 95% en $\mu \pm 1.96\sigma$; el 99.7% en $\mu \pm 3\sigma$.

## Esperanza
La **esperanza** es el promedio ponderado:
$$E[X] = \sum_x x\,p(x) \quad \text{o} \quad \int x f(x)\,dx$$

**Propiedades:**
- Linealidad: $E[aX + bY] = aE[X] + bE[Y]$ (siempre, sin independencia).
- $E[g(X)] = \sum g(x)p(x)$ (no es $g(E[X])$ en general).
- **Regla del estadístico inconsciente:** $E[g(X)] = \int g(x)f(x)\,dx$.

**Valores conocidos:** binomial $np$; Poisson $\lambda$; geométrica $1/p$; exponencial $1/\lambda$; uniforme $(a+b)/2$; normal $\mu$.

**Ejemplo.** En un juego que paga $\$10$ con probabilidad $0.2$ y cuesta $\$3$ jugar: $E = 0.2 \cdot 10 - 3 = -1$: pérdida media de $\$1$.

## Varianza y desviación estándar
La **varianza** mide dispersión:
$$\text{Var}(X) = E[(X - \mu)^2] = E[X^2] - (E[X])^2$$

La **desviación estándar** es $\sigma = \sqrt{\text{Var}(X)}$, en las mismas unidades que $X$.

**Propiedades:**
- $\text{Var}(aX + b) = a^2\text{Var}(X)$.
- Si $X, Y$ independientes: $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$.
- Binomial: $np(1-p)$; Poisson: $\lambda$; exponencial: $1/\lambda^2$; uniforme: $(b-a)^2/12$.

**Ejemplo.** Binomial con $n = 10$, $p = 0.3$: $E = 3$, $\text{Var} = 2.1$, $\sigma \approx 1.45$.

## Distribuciones conjuntas, covarianza y correlación
Para dos variables, la **distribución conjunta** $p(x, y)$. **Marginales** se obtienen sumando/integrando la otra variable; **condicionales** con la regla del cociente.

**Covarianza:**
$$\text{Cov}(X, Y) = E[XY] - E[X]E[Y]$$

**Correlación:** $\rho = \dfrac{\text{Cov}(X,Y)}{\sigma_X\sigma_Y} \in [-1, 1]$.

**Propiedades:** independientes $\Rightarrow$ covarianza 0 (el recíproco es falso); $|\rho| = 1$ significa relación lineal exacta.

**Ejemplo.** En una urna con dos tipos de bolas, la covarianza negativa indica que más de un tipo reduce el otro (sin reposición).

## Transformaciones y funciones generadoras
Si $Y = g(X)$:
- Discreta: suma sobre las preimágenes.
- Continua: técnica de la función de distribución o cambio de variable con jacobiano.

**Función generadora de momentos:** $M_X(t) = E[e^{tX}]$; sus derivadas en 0 dan los momentos: $M'(0) = E[X]$, $M''(0) = E[X^2]$.

**Ejemplo.** Normal: $M(t) = e^{\mu t + \sigma^2t^2/2}$. Suma de normales independientes es normal con medias y varianzas sumadas.

**Transformación de Box-Muller:** convierte uniformes en normales; base de la simulación.

## Teorema central del límite
**TCL:** si $X_1, \ldots, X_n$ son independientes con media $\mu$ y varianza $\sigma^2$, entonces
$$\frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \xrightarrow{d} N(0, 1)$$

Sin importar la distribución original (con varianza finita), la media muestral es aproximadamente normal para $n$ grande. Es la razón de la omnipresencia de la normal.

**Ejemplo.** La suma de 100 lanzamientos de un dado tiene media $350$ y desviación $\sqrt{100 \cdot 35/12} \approx 17.1$; el TCL permite aproximar probabilidades.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, masa).** $X$ = suma de dos dados. Distribución y $P(X = 7)$.
- $P(X = k)$ crece hasta 7 y decrece: $P(7) = 6/36 = 1/6$.
- $E[X] = 7$.

**Ejemplo 2 (práctica, Poisson).** Una central recibe 3 llamadas por minuto en promedio. $P(\text{exactamente 5 en un minuto})$.
- $P = e^{-3}3^5/5! \approx 0.1008$.

**Ejemplo 3 (práctica, exponencial).** Tiempo de vida de un foco con $\lambda = 1/1000$ horas. $P(\text{dura más de 2000 h})$.
- $P = e^{-2} \approx 0.1353$.

**Ejemplo 4 (aplicación, esperanza).** Seguro con pago $\$50\,000$ y probabilidad $0.002$.
- $E[\text{pago}] = 100$.
- Prima justa: $\$100$.

**Ejemplo 5 (aplicación, normal).** Puntajes con $\mu = 500$, $\sigma = 100$. Porcentaje sobre 700.
- $z = 2$; $P(Z > 2) \approx 0.0228$: $2.28\%$.

**Ejemplo 6 (aplicación, TCL).** Tiempo de atención con media 10 min y desviación 3 min. Probabilidad de que 50 clientes tarden en promedio más de 11 min.
- $z = \frac{11 - 10}{3/\sqrt{50}} \approx 2.36$.
- $P \approx 0.009$: poco probable.

## Contextos donde se aplica
- **Estadística:** toda la inferencia se apoya en distribuciones y TCL.
- **Finanzas:** rendimientos, riesgo, VaR, precios de opciones.
- **Ingeniería:** fiabilidad, tolerancias, control de procesos.
- **Física:** ruido, decaimientos, mecánica estadística.
- **Machine learning:** modelos generativos, incertidumbre, validación.

## Errores comunes y cómo evitarlos
- **Calcular $E[X^2]$ como $(E[X])^2$.** Falso salvo varianza cero.
- **Suponer independencia por covarianza cero.** Solo vale al revés en general (normal bivariada es excepción).
- **Usar la densidad como probabilidad puntual.** La densidad puede superar 1.
- **Aplicar TCL con varianza infinita o dependencia fuerte.** Requiere condiciones.
- **Confundir desviación estándar con varianza.** La primera está en unidades de $X$.

## Ejercicios propuestos
1. $X$ uniforme en $\{1,\ldots,6\}$: $E$ y $\text{Var}$.
2. Binomial $n = 20$, $p = 0.4$: $P(X = 8)$.
3. Poisson $\lambda = 2$: $P(X \geq 1)$.
4. Exponencial $\lambda = 0.5$: $P(X > 4)$.
5. Media y varianza de la suma de dos dados.
6. $P(490 \leq \bar{X} \leq 510)$ con $n = 100$, $\mu = 500$, $\sigma = 100$.
7. Covarianza de $X$ e $Y$ con $Y = 2X + 1$.
8. ¿Por qué la normal aparece tanto?

**Respuestas:** 1) $3.5$; $35/12 \approx 2.92$. 2) $C(20,8)0.4^8 0.6^{12} \approx 0.1797$. 3) $1 - e^{-2} \approx 0.8647$. 4) $e^{-2} \approx 0.1353$. 5) $7$; $35/6 \approx 5.83$. 6) $z = \pm 1$: $\approx 0.6826$. 7) $2\text{Var}(X)$. 8. TCL y estabilidad bajo suma.

## Resumen
- Las variables aleatorias traducen resultados a números; masa y densidad describen su ley.
- Las distribuciones notables (binomial, Poisson, exponencial, normal) modelan patrones comunes.
- Esperanza y varianza resumen centro y dispersión; la linealidad de $E$ es universal.
- Conjuntas, covarianza y correlación describen relaciones.
- El TCL explica la ubicuidad de la normal y sostiene la inferencia.
`,

  "estadistica": String.raw`
## Población, muestra y tipos de datos
La **población** es el conjunto completo de interés; la **muestra** es el subconjunto observado. Un **parámetro** describe la población ($\mu$, $\sigma$, $p$); un **estadístico** describe la muestra ($\bar{x}$, $s$, $\hat{p}$).

**Tipos de datos:** cualitativos (nominales, ordinales) y cuantitativos (discretos, continuos).

**Muestreo:**
- **Aleatorio simple:** todos los individuos con igual probabilidad.
- **Estratificado:** divide en estratos homogéneos y muestrea cada uno.
- **Por conglomerados:** muestrea grupos completos.
- **Sesgo de selección:** la muestra no representa a la población; el error más grave.

**Ejemplo.** Encuestas telefónicas sesgan si excluyen a quienes no tienen teléfono.

## Estadística descriptiva
- **Tendencia central:** media, mediana, moda.
- **Dispersión:** rango, varianza, desviación estándar, rango intercuartílico (IQR).
- **Posición:** percentiles, cuartiles, puntuaciones $z$.
- **Forma:** asimetría y curtosis.

**Diagramas:** histogramas, diagramas de caja, dispersión, series temporales.

**Ejemplo.** Datos $2, 4, 4, 5, 9$: media $4.8$, mediana $4$, moda $4$, varianza muestral $s^2 = 6.7$.

**Robustez:** la mediana y el IQR resisten valores atípicos; la media y la desviación estándar no.

## Distribuciones muestrales
La **distribución muestral** de un estadístico es su distribución sobre todas las muestras posibles.

**Propiedades:**
- $E[\bar{X}] = \mu$; $\text{Var}(\bar{X}) = \sigma^2/n$; error estándar $SE = \sigma/\sqrt{n}$.
- Si la población es normal, $\bar{X}$ es normal exactamente.
- Si no, el **TCL** garantiza normalidad aproximada para $n$ grande.
- La proporción muestral $\hat{p}$ tiene $SE = \sqrt{p(1-p)/n}$.

**Ejemplo.** Con $\sigma = 10$ y $n = 100$, el error estándar es $1$: las medias muestrales varían mucho menos que los individuos.

**Factor de corrección finita:** si la muestra es grande respecto a la población, multiplica por $\sqrt{(N-n)/(N-1)}$.

## Estimación puntual e intervalos de confianza
Un **estimador** es un estadístico para un parámetro; una **estimación**, su valor observado.

**Intervalo de confianza (IC) al $95\%$ para la media (con $\sigma$ conocida):**
$$\bar{x} \pm z_{0.025}\frac{\sigma}{\sqrt{n}} = \bar{x} \pm 1.96\frac{\sigma}{\sqrt{n}}$$

**Interpretación correcta:** el $95\%$ de los intervalos construidos así contienen el parámetro. No es "probabilidad de que $\mu$ esté dentro".

**Si $\sigma$ es desconocida:** usa $s$ y la distribución $t$ de Student con $n-1$ grados de libertad; el multiplicador es mayor.

**Ejemplo.** $\bar{x} = 50$, $s = 10$, $n = 25$: $IC_{95\%} = 50 \pm 2.064 \cdot 2 = [45.9, 54.1]$ (t con 24 gl).

## Pruebas de hipótesis
**Pasos:**
1. Formula $H_0$ (nula) y $H_1$ (alternativa).
2. Elige el nivel de significancia $\alpha$ (típico $0.05$).
3. Selecciona el estadístico y verifica supuestos.
4. Calcula el valor del estadístico y el **valor p**.
5. Decide: si $p < \alpha$, rechaza $H_0$; si no, no la rechaces.

**Errores:**
- **Tipo I:** rechazar $H_0$ verdadera (probabilidad $\alpha$).
- **Tipo II:** no rechazar $H_0$ falsa (probabilidad $\beta$).
- **Potencia:** $1 - \beta$: probabilidad de detectar un efecto real.

**Ejemplo.** Test $z$ para una media: $z = \dfrac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$. Con $\bar{x} = 52$, $\mu_0 = 50$, $\sigma = 10$, $n = 25$: $z = 1$; $p \approx 0.159$: no hay evidencia suficiente contra $H_0$.

## Pruebas t, chi-cuadrado y ANOVA
- **t de una muestra:** media con $\sigma$ desconocida.
- **t de dos muestras:** compara dos medias (independientes o pareadas).
- **chi-cuadrado:** bondad de ajuste, independencia en tablas de contingencia.
- **ANOVA:** compara tres o más medias; $F = $ variabilidad entre grupos / dentro de grupos.
- **No paramétricas:** Wilcoxon, Mann-Whitney, Kruskal-Wallis (sin supuesto normal).

**Ejemplo.** Comparar un medicamento con placebo: t de dos muestras; si $p < 0.05$, hay diferencia significativa.

**Advertencia:** múltiples pruebas inflan el error tipo I; corrige con Bonferroni ($\alpha/m$) o FDR.

## Correlación y regresión lineal
**Correlación de Pearson:** $r$ mide asociación lineal, entre $-1$ y $1$. No implica causalidad.

**Regresión lineal simple:** $\hat{y} = b_0 + b_1x$, con
$$b_1 = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}, \qquad b_0 = \bar{y} - b_1\bar{x}$$

**Bondad de ajuste:** $R^2$ = proporción de varianza explicada.

**Supuestos:** linealidad, independencia, homocedasticidad, normalidad de residuos.

**Ejemplo.** Años de estudio vs salario: $b_1 \approx 2000$ significa que cada año adicional se asocia con $\$2000$ más en promedio (asociación, no causalidad).

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, descriptiva).** Datos $10, 12, 12, 13, 15$: media, mediana y $s$.
- Media $12.4$, mediana $12$.
- $s^2 = \frac{\sum (x_i - 12.4)^2}{4} = 3.3$; $s \approx 1.82$.

**Ejemplo 2 (práctica, IC).** $\bar{x} = 80$, $\sigma = 12$, $n = 36$: IC 95%.
- $SE = 2$; margen $= 1.96 \cdot 2 = 3.92$.
- IC: $[76.08, 83.92]$.

**Ejemplo 3 (práctica, hipótesis).** ¿Difiere la media de 100? $\bar{x} = 103$, $\sigma = 15$, $n = 49$.
- $z = (103 - 100)/(15/7) = 1.4$; $p \approx 0.162$ (dos colas).
- No se rechaza al 5%: no hay evidencia suficiente.

**Ejemplo 4 (aplicación, calidad).** Proceso debe llenar 500 ml. Muestra de 25: $\bar{x} = 498$, $s = 5$. ¿Está fuera de control?
- $t = (498 - 500)/(5/5) = -2$; $p \approx 0.057$ con 24 gl.
- Al borde: investigar y ampliar la muestra.

**Ejemplo 5 (aplicación, marketing).** Dos versiones de una web: A convierte 12% de 200 (24); B, 15% de 200 (30).
- Prueba de proporciones: $z \approx 0.87$; $p \approx 0.38$.
- No hay diferencia significativa: se necesitan más datos.

**Ejemplo 6 (aplicación, regresión).** Estudio vs salario con $r = 0.6$.
- Correlación moderada; $R^2 = 0.36$: 36% de la varianza explicada.
- La regresión estima el efecto promedio, no la causalidad.

## Contextos donde se aplica
- **Medicina:** ensayos clínicos, eficacia de tratamientos, epidemiología.
- **Negocios:** encuestas, control de calidad, marketing, A/B testing.
- **Ciencia:** análisis de experimentos, validación de teorías.
- **Deportes:** rendimiento, scouting, analítica.
- **Machine learning:** validación, métricas, selección de modelos.

## Errores comunes y cómo evitarlos
- **Interpretar el valor p como $P(H_0)$. Es la probabilidad de los datos (o más extremos) bajo $H_0$.**
- **Confundir significancia estadística con relevancia práctica.** Un efecto diminuto puede ser significativo con $n$ enorme.
- **Múltiples pruebas sin corrección.** p-hacking infla falsos positivos.
- **Confundir correlación con causalidad.** Hace falta diseño experimental o identificación causal.
- **Ignorar supuestos del test.** Verifica normalidad, independencia y homocedasticidad.

## Ejercicios propuestos
1. Datos $1, 3, 3, 5, 8$: media, mediana y moda.
2. IC 95% con $\bar{x} = 20$, $\sigma = 4$, $n = 64$.
3. Test $z$: $\bar{x} = 55$, $\mu_0 = 50$, $\sigma = 10$, $n = 25$; decide al 5%.
4. Correlación de $(1,2), (2,3), (3,5)$.
5. Regresión para los datos del ejercicio 4.
6. ¿Qué error se comete al no rechazar $H_0$ falsa?
7. Interpreta $R^2 = 0.8$.
8. ¿Por qué la media es sensible a valores atípicos?

**Respuestas:** 1) 4, 3, 3. 2) $20 \pm 0.98$: $[19.02, 20.98]$. 3) $z = 2.5$; $p \approx 0.012$: rechaza $H_0$. 4) $r \approx 0.982$. 5) $y \approx 1.5x + 0.33$. 6. Error tipo II. 7. 80% de la varianza de $y$ explicada por $x$. 8. Porque incluye el valor en el cálculo.

## Resumen
- Descriptiva resume datos; la inferencia generaliza de la muestra a la población con incertidumbre.
- Los intervalos de confianza cuantifican la precisión; las pruebas deciden con valores p.
- t, chi-cuadrado y ANOVA cubren los casos clásicos; las no paramétricas evitan supuestos.
- La regresión estima relaciones lineales; la correlación no implica causalidad.
- El rigor exige corregir por múltiples pruebas y verificar supuestos.
`,

  "estadistica-matematica": String.raw`
## Estimadores y sus propiedades
Un **estimador** $\hat{\theta}$ es una función de la muestra que aproxima un parámetro $\theta$. Propiedades deseables:

- **Insesgado:** $E[\hat{\theta}] = \theta$.
- **Consistente:** $\hat{\theta} \to \theta$ en probabilidad cuando $n \to \infty$.
- **Eficiente:** tiene la menor varianza posible (entre insesgados).
- **Error cuadrático medio:** $\text{ECM} = \text{Var}(\hat{\theta}) + (\text{sesgo})^2$.

**Ejemplos:**
- Media muestral $\bar{X}$: insesgada para $\mu$, consistente.
- Varianza muestral $S^2 = \frac{1}{n-1}\sum(X_i - \bar{X})^2$: insesgada para $\sigma^2$ (por eso $n-1$).
- Proporción muestral $\hat{p}$: insesgada para $p$.

**Ejemplo.** El estimador $\frac{1}{n}\sum (X_i - \bar{X})^2$ es sesgado para $\sigma^2$; el sesgo es $-\sigma^2/n$.

## Suficiencia
Un estadístico $T$ es **suficiente** para $\theta$ si contiene toda la información de la muestra sobre $\theta$: la distribución condicional de los datos dado $T$ no depende de $\theta$.

**Criterio de factorización (Neyman-Fisher):** $T$ es suficiente sii la verosimilitud factoriza:
$$L(\theta; x) = g(T(x), \theta) \cdot h(x)$$

**Ejemplos:**
- Para una normal con $\sigma$ conocida, $\bar{X}$ es suficiente para $\mu$.
- Para Poisson, $\sum X_i$ es suficiente para $\lambda$.
- Para uniforme $(0, \theta)$, $\max X_i$ es suficiente.

**Teorema de Rao-Blackwell:** un estimador insesgado se mejora condicionando en un estadístico suficiente (reduce la varianza).

## Máxima verosimilitud
El **método de máxima verosimilitud (MV)** elige $\hat{\theta}$ que maximiza la probabilidad de los datos observados:
$$L(\theta) = \prod_{i=1}^{n} f(x_i; \theta), \qquad \hat{\theta}_{MV} = \arg\max_\theta \ln L(\theta)$$

**Método:**
1. Escribe la verosimilitud (producto de densidades).
2. Toma logaritmo (más manejable).
3. Deriva respecto a $\theta$ e iguala a 0.
4. Verifica máximo con la segunda derivada.

**Ejemplos:** normal: $\hat{\mu} = \bar{X}$, $\hat{\sigma}^2 = \frac{1}{n}\sum(X_i - \bar{X})^2$ (sesgado). Poisson: $\hat{\lambda} = \bar{X}$. Exponencial: $\hat{\lambda} = 1/\bar{X}$.

**Propiedades:** consistente y asintóticamente normal y eficiente; puede ser sesgado en muestras finitas.

## Método de momentos
Iguala los momentos poblacionales a los muestrales:
$$E[X^k] = \frac{1}{n}\sum X_i^k$$
y resuelve para los parámetros.

**Ejemplo.** Uniforme $(0, \theta)$: $E[X] = \theta/2$; igualando, $\hat{\theta} = 2\bar{X}$.

**Ventaja:** simple y no requiere optimización. **Desventaja:** suele dar estimadores menos eficientes que MV; puede salir de rango.

**Uniformes:** para $(0, \theta)$, el método de momentos da $2\bar{X}$, pero MV da $\max X_i$, que es mejor.

## Cota de Cramér-Rao
Bajo condiciones de regularidad, para todo estimador insesgado:
$$\text{Var}(\hat{\theta}) \geq \frac{1}{n\,I(\theta)}$$
donde $I(\theta)$ es la **información de Fisher**:
$$I(\theta) = E\left[\left(\frac{\partial \ln f}{\partial \theta}\right)^2\right] = -E\left[\frac{\partial^2 \ln f}{\partial \theta^2}\right]$$

Un estimador que alcanza la cota es **eficiente**. MV suele alcanzarla asintóticamente.

**Ejemplo (Bernoulli).** $I(p) = \frac{1}{p(1-p)}$; la cota para $\hat{p}$ es $\frac{p(1-p)}{n}$, alcanzada por la proporción muestral.

## Intervalos y pruebas óptimas
**Intervalos de confianza basados en pivotes:** una cantidad cuya distribución no depende del parámetro. Para la media normal con $\sigma$ desconocida:
$$T = \frac{\bar{X} - \mu}{S/\sqrt{n}} \sim t_{n-1}$$

**Lema de Neyman-Pearson:** la prueba más potente entre las de nivel $\alpha$ compara el cociente de verosimilitudes contra una constante.

**Prueba de razón de verosimilitud (LR):** para hipótesis compuestas:
$$\Lambda = \frac{\sup_{H_0} L(\theta)}{\sup_{\Theta} L(\theta)}$$
Bajo $H_0$, $-2\ln\Lambda \sim \chi^2$ asintóticamente (Wilks). Generaliza a modelos anidados.

## Métodos computacionales: bootstrap y jackknife
**Bootstrap:** remuestrea con reposición de los datos observados para estimar la distribución de un estadístico:
1. Genera $B$ muestras bootstrap.
2. Calcula el estadístico en cada una.
3. Usa la variabilidad observada para IC y sesgo.

**Jackknife:** deja un dato fuera a la vez; estima sesgo y varianza.

**Ventaja:** funciona cuando la teoría asintótica no aplica. **Ejemplo:** IC bootstrap para la mediana (cuya distribución exacta es complicada).

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, insesgamiento).** ¿Es insesgado $\hat{\theta} = \frac{1}{n}\sum (X_i - \bar{X})^2$?
- $E[\hat{\theta}] = \frac{n-1}{n}\sigma^2 \neq \sigma^2$.
- Sesgado; el insesgado usa $n-1$.

**Ejemplo 2 (práctica, MV).** MV para Poisson.
- $\ln L = -n\lambda + \sum x_i \ln \lambda - \ln\prod x_i!$.
- Derivada: $-n + \sum x_i/\lambda = 0 \Rightarrow \hat{\lambda} = \bar{X}$.

**Ejemplo 3 (práctica, Fisher).** Información de Fisher para exponencial.
- $\ln f = \ln\lambda - \lambda x$; segunda derivada $-1/\lambda^2$.
- $I(\lambda) = 1/\lambda^2$; cota $= \lambda^2/n$.

**Ejemplo 4 (aplicación, MV uniforme).** MV para uniforme $(0, \theta)$.
- $L = \theta^{-n}$ si todos $x_i \leq \theta$.
- Maximizar: el menor $\theta$ admisible es $\hat{\theta} = \max X_i$.

**Ejemplo 5 (aplicación, Rao-Blackwell).** Mejorar un estimador de $p$ en Bernoulli.
- $T = \sum X_i$ es suficiente.
- El estimador mejorado es $\bar{X}$, con menor varianza.

**Ejemplo 6 (aplicación, bootstrap).** Estimar el IC de la mediana de ingresos.
- Remuestrea 10.000 veces y toma percentiles $2.5$ y $97.5$.
- No requiere supuesto normal.

## Contextos donde se aplica
- **Estadística aplicada:** construcción de estimadores e intervalos óptimos.
- **Machine learning:** máxima verosimilitud entrena modelos (regresión, redes).
- **Econometría:** identificación y eficiencia de estimadores.
- **Biología:** estimación de tasas, tamaños poblacionales (captura-recaptura).
- **Ingeniería:** fiabilidad y control estadístico.

## Errores comunes y cómo evitarlos
- **Usar $n$ en lugar de $n-1$ para la varianza insesgada.** El sesgo depende de la corrección.
- **Suponer que MV siempre es insesgado.** Es asintóticamente bueno, no exacto.
- **Ignorar las condiciones de regularidad de Cramér-Rao.** Dominios que dependen del parámetro rompen la cota.
- **Comparar estimadores solo por la varianza.** Considera el sesgo y el ECM.
- **Aplicar bootstrap a datos dependientes.** Requiere remuestreo por bloques.

## Ejercicios propuestos
1. ¿Es $\bar{X}$ consistente para $\mu$?
2. Halla MV de $p$ en Bernoulli.
3. ¿Cuál es la información de Fisher de la normal con $\sigma$ conocida?
4. Mejora por Rao-Blackwell el estimador $\mathbb{1}_{X_1 = 1}$ para $p$.
5. Cota de Cramér-Rao para $\lambda$ de Poisson.
6. ¿Por qué el bootstrap funciona sin supuestos paramétricos?
7. Demuestra que $\max X_i$ es suficiente para uniforme $(0,\theta)$.
8. ¿Qué distribución tiene $-2\ln\Lambda$ bajo $H_0$?

**Respuestas:** 1) Sí (LGN). 2) $\hat{p} = \bar{X}$. 3) $I(\mu) = 1/\sigma^2$. 4) $\bar{X}$. 5) $\lambda/n$. 6. Aproxima la distribución empírica por la observada. 7. La verosimilitud depende solo del máximo. 8. $\chi^2$ asintótica.

## Resumen
- Insesgamiento, consistencia y eficiencia ordenan los estimadores; el ECM combina sesgo y varianza.
- La suficiencia captura toda la información; Rao-Blackwell mejora estimadores.
- Máxima verosimilitud y momentos son los métodos centrales de construcción.
- Cramér-Rao establece el límite de precisión; Neyman-Pearson y LR dan pruebas óptimas.
- Bootstrap y jackknife resuelven problemas sin teoría asintótica.
`,

  "procesos-estocasticos": String.raw`
## Procesos estocásticos y la propiedad de Markov
Un **proceso estocástico** es una familia de variables aleatorias indexadas por el tiempo: $\{X_t\}_{t \in T}$. El tiempo puede ser discreto ($T = \{0,1,2,\ldots\}$) o continuo ($T = [0,\infty)$).

**Propiedad de Markov:** el futuro solo depende del presente, no del pasado:
$$P(X_{n+1} = j \mid X_n = i, X_{n-1}, \ldots) = P(X_{n+1} = j \mid X_n = i)$$

**Cadena de Markov:** proceso con espacio de estados discreto que cumple la propiedad. Se describe con la **matriz de transición** $P = (p_{ij})$:
$$p_{ij} = P(X_{n+1} = j \mid X_n = i), \qquad \sum_j p_{ij} = 1$$

**Ejemplo.** El clima de mañana (sol/lluvia) depende solo del clima de hoy: una cadena de dos estados.

## Matriz de transición y distribución estacionaria
La probabilidad de estar en cada estado tras $n$ pasos es $\pi_n = \pi_0 P^n$.

**Distribución estacionaria** $\pi$: cumple $\pi = \pi P$ (vector propio izquierdo de valor propio 1). Si la cadena es irreducible y aperiódica, **converge** a $\pi$ desde cualquier inicio.

**Ecuaciones de balance:** para cada estado, el flujo entrante iguala el saliente:
$$\pi_j = \sum_i \pi_i p_{ij}$$

**Ejemplo (clima).** $P = \begin{pmatrix} 0.9 & 0.1 \\ 0.5 & 0.5 \end{pmatrix}$: resolver $\pi = \pi P$ da $\pi = (5/6, 1/6)$: $83.3\%$ de días soleados a largo plazo.

**Tiempo de mezcla:** cuántos pasos tarda en acercarse a $\pi$.

## Clases de estados
- **Recurrente:** el proceso regresa al estado con probabilidad 1.
- **Transitorio:** puede no regresar.
- **Periódico:** solo regresa en múltiplos de un periodo $d$; **aperiódico** si $d = 1$.
- **Irreducible:** todos los estados se comunican entre sí.

**Clasificación:** en una cadena finita e irreducible, todos los estados son recurrentes positivos y existe única $\pi$.

**Tiempo de retorno esperado:** $E[T_i] = 1/\pi_i$.

**Ejemplo.** El paseo aleatorio simple en $\mathbb{Z}$: recurrente en dimensiones 1 y 2, transitorio en dimensión 3 ("un borracho encuentra su casa; un pájaro borracho se pierde").

## Procesos de Poisson y nacimiento-muerte
**Proceso de Poisson:** cuenta eventos independientes con tasa $\lambda$. El número en un intervalo de longitud $t$ es $\text{Poisson}(\lambda t)$; los tiempos entre eventos son $\text{Exponencial}(\lambda)$.

**Proceso de nacimiento y muerte:** la tasa de subir depende del estado, y de bajar también. Modela colas y poblaciones.

**Cola M/M/1:** llegadas Poisson ($\lambda$), servicios exponenciales ($\mu$). Estable si $\lambda < \mu$; utilización $\rho = \lambda/\mu$; número medio en el sistema $L = \rho/(1-\rho)$.

**Ejemplo.** Banco con llegadas 8/hora y servicio 10/hora: $\rho = 0.8$, $L = 4$ clientes en promedio. Si $\rho \to 1$, la cola explota.

## Martingalas
Una **martingala** $M_n$ cumple $E[M_{n+1} \mid \mathcal{F}_n] = M_n$: el valor esperado futuro es el presente. Modela juegos justos.

**Ejemplos:**
- Paseo aleatorio simétrico: martingala.
- Capital de un jugador en un juego justo: martingala.
- $W_t^2 - t$ para el movimiento browniano: martingala.

**Teoremas:** desigualdad maximal de Doob, teorema de convergencia de martingalas, teorema opcional de parada (parar un juego justo sigue siendo justo bajo condiciones).

**Aplicación:** cálculo de probabilidades de ruina y precios de derivados en finanzas (valoración neutral al riesgo).

## Movimiento browniano
El **movimiento browniano** (proceso de Wiener) $W_t$ es un proceso con:
1. $W_0 = 0$.
2. Incrementos independientes y estacionarios.
3. $W_t - W_s \sim N(0, t - s)$.
4. Trayectorias continuas (pero no diferenciables).

**Propiedades:** variación cuadrática $[W]_t = t$; autosimilaridad; densidad de transición normal.

**Aplicaciones:** física (difusión), finanzas (precios: movimiento browniano geométrico), biología.

**Ejemplo.** La ecuación del calor describe la densidad de $W_t$; su varianza crece linealmente en el tiempo.

## Cálculo de Itô
Para funciones del browniano, la regla de la cadena cambia (aparece un término de segundo orden):
$$df(W_t) = f'(W_t)\,dW_t + \frac{1}{2}f''(W_t)\,dt$$

**Lema de Itô** es la versión estocástica de Taylor. La integral de Itô $\int f\,dW$ se define como límite en $L^2$.

**Ecuaciones diferenciales estocásticas (EDS):**
$$dX_t = \mu(X_t)\,dt + \sigma(X_t)\,dW_t$$
El **movimiento browniano geométrico** $dS = \mu S\,dt + \sigma S\,dW$ modela precios; de ahí la fórmula de Black-Scholes:
$$S_t = S_0 e^{(\mu - \sigma^2/2)t + \sigma W_t}$$

**Ejemplo.** Acción con $\mu = 0.1$, $\sigma = 0.2$: la deriva efectiva es $0.08$ por el término $-\sigma^2/2$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, Markov).** Cadena con $P = \begin{pmatrix} 0.7 & 0.3 \\ 0.4 & 0.6 \end{pmatrix}$: halla $\pi$.
- $0.7\pi_1 + 0.4\pi_2 = \pi_1 \Rightarrow 0.3\pi_1 = 0.4\pi_2$.
- $\pi = (4/7, 3/7) \approx (0.571, 0.429)$.

**Ejemplo 2 (práctica, transición).** Partiendo de lluvia, ¿probabilidad de sol en dos días? (con la matriz del ejemplo del clima)
- $P^2$: desde lluvia a sol $= 0.5\cdot0.9 + 0.5\cdot0.5 = 0.7$.
- 70%.

**Ejemplo 3 (práctica, Poisson).** Eventos cada 5 minutos en promedio: $P(\text{2 en 10 min})$.
- $\lambda t = 2$; $P = e^{-2}2^2/2 = 2e^{-2} \approx 0.2707$.

**Ejemplo 4 (aplicación, colas).** Supermercado con llegadas 30/hora, cajas 40/hora.
- $\rho = 0.75$; $L = 3$ clientes; tiempo de espera $W = L/\lambda = 6$ min.
- Con $\lambda = 0.8\mu$: $L = 4$; la no linealidad castiga.

**Ejemplo 5 (aplicación, finanzas).** Simula un precio con $S_0 = 100$, $\mu = 0.1$, $\sigma = 0.2$, $t = 1$.
- $S_1 = 100e^{(0.1 - 0.02) + 0.2Z}$ con $Z \sim N(0,1)$.
- Para $Z = 0$: $S_1 = 100e^{0.08} \approx 108.33$.

**Ejemplo 6 (aplicación, martingala).** Apuestas de $1$ al rojo en ruleta justa (imaginaria).
- El capital es martingala: $E[M_n] = M_0$.
- Estrategias de apuesta no cambian el valor esperado (opcional stopping aparte).

## Contextos donde se aplica
- **Finanzas:** valoración de opciones, gestión de riesgo, Black-Scholes.
- **Física:** difusión, ruido térmico, mecánica estadística.
- **Ingeniería:** colas, telecomunicaciones, fiabilidad.
- **Biología:** demografía estocástica, genética de poblaciones, epidemias.
- **Machine learning:** procesos gaussianos, cadenas de Markov en MCMC y NLP.

## Errores comunes y cómo evitarlos
- **Suponer estacionariedad desde el inicio.** Hay que verificar irreducibilidad y aperiodicidad.
- **Tratamiento determinista del browniano.** No es diferenciable; usa Itô.
- **Olvidar el término $-\sigma^2/2$.** La deriva del logaritmo no es $\mu$.
- **Confundir cadena con sucesión independiente.** La dependencia es la esencia.
- **Aplicar la propiedad de Markov a procesos con memoria.** Verifica la hipótesis.

## Ejercicios propuestos
1. Con $P = \begin{pmatrix} 0.5 & 0.5 \\ 0.2 & 0.8 \end{pmatrix}$, halla $\pi$.
2. ¿Es recurrente el paseo aleatorio en $\mathbb{Z}$?
3. Cola M/M/1 con $\lambda = 4$, $\mu = 5$: halla $L$ y $W$.
4. $P(\text{3 eventos Poisson con } \lambda t = 1)$.
5. Verifica que $W_t^2 - t$ es martingala.
6. Simula un paso browniano con $dt = 0.01$: varianza.
7. ¿Por qué el paseo aleatorio en 3D es transitorio?
8. Escribe la EDS del movimiento browniano geométrico.

**Respuestas:** 1) $(2/7, 5/7)$. 2) Sí (d = 1 y 2). 3) $\rho = 0.8$, $L = 4$, $W = 1$. 4) $e^{-1}/6 \approx 0.0613$. 5. $E[W_{t+1}^2 - (t+1) \mid \mathcal{F}_t] = W_t^2 - t$. 6. $0.01$. 7. La probabilidad de retorno es menor que 1. 8. $dS = \mu S\,dt + \sigma S\,dW$.

## Resumen
- La propiedad de Markov simplifica el futuro al presente; las cadenas se describen con matrices de transición.
- La distribución estacionaria es el comportamiento a largo plazo; las clases de estados la garantizan.
- Poisson y nacimiento-muerte modelan eventos y colas; martingalas, juegos justos.
- El browniano introduce el cálculo estocástico; Itô corrige la regla de la cadena.
- Las aplicaciones dominan finanzas, física, biología e ingeniería.
`,

  "series-tiempo": String.raw`
## Componentes de una serie de tiempo
Una **serie de tiempo** es una secuencia de observaciones ordenadas en el tiempo: $\{y_t\}$. Sus componentes:

- **Tendencia** $T_t$: dirección de largo plazo (crecimiento o declive).
- **Estacionalidad** $S_t$: patrón que se repite cada periodo fijo (mensual, semanal).
- **Ciclos** $C_t$: fluctuaciones más largas e irregulares (económicas).
- **Ruido** $\varepsilon_t$: variación aleatoria no explicada.

**Modelos de composición:** aditivo ($y_t = T_t + S_t + C_t + \varepsilon_t$) o multiplicativo ($y_t = T_t \cdot S_t \cdot C_t \cdot \varepsilon_t$).

**Ejemplo.** Ventas minoristas: tendencia creciente + pico estacional en diciembre + ruido.

**Descomposición:** en Python/R se estima cada componente con medias móviles o STL.

## Estacionariedad
Una serie es **estacionaria** (débilmente) si:
- $E[y_t] = \mu$ constante.
- $\text{Var}(y_t)$ constante.
- $\text{Cov}(y_t, y_{t+h})$ depende solo de $h$.

**Por qué importa:** los modelos ARMA requieren estacionariedad; sin ella, los coeficientes no tienen interpretación estable.

**Transformaciones para lograrla:**
- **Diferenciación:** $\Delta y_t = y_t - y_{t-1}$ elimina tendencia.
- **Logaritmo:** estabiliza varianza creciente.
- **Diferenciación estacional:** $\Delta_s y_t = y_t - y_{t-s}$.

**Ejemplo.** Un paseo aleatorio $y_t = y_{t-1} + \varepsilon_t$ no es estacionario; su diferencia $\varepsilon_t$ sí.

**Pruebas:** Dickey-Fuller aumentada (ADF), KPSS.

## Autocorrelación: ACF y PACF
La **función de autocorrelación (ACF)** mide correlación con rezagos:
$$\rho_h = \frac{\text{Cov}(y_t, y_{t+h})}{\text{Var}(y_t)}$$

La **autocorrelación parcial (PACF)** mide la correlación con $y_{t+h}$ eliminando el efecto de los rezagos intermedios.

**Lectura para identificar modelos:**
- AR($p$): ACF decae gradualmente; PACF corta en $p$.
- MA($q$): ACF corta en $q$; PACF decae gradualmente.
- ARMA: ambas decaen.

**Ejemplo.** Si la PACF es significativa solo en el rezago 1 y corta después, un AR(1) es candidato.

## Modelos AR, MA y ARMA
**AR($p$)** — autorregresivo:
$$y_t = c + \phi_1y_{t-1} + \cdots + \phi_py_{t-p} + \varepsilon_t$$
El valor actual depende de valores pasados. Estacionario si las raíces del polinomio característico están fuera del círculo unitario.

**MA($q$)** — medias móviles:
$$y_t = \mu + \varepsilon_t + \theta_1\varepsilon_{t-1} + \cdots + \theta_q\varepsilon_{t-q}$$
Depende de errores pasados. Siempre estacionario; invertible bajo condiciones.

**ARMA($p, q$):** combina ambos.

**Ejemplo.** AR(1) con $\phi = 0.7$: $y_t = 0.7y_{t-1} + \varepsilon_t$; la ACF decae como $0.7^h$.

## ARIMA y SARIMA
**ARIMA($p, d, q$):** ARMA aplicado a la serie diferenciada $d$ veces. Maneja tendencias estocásticas.

**SARIMA($p,d,q$)$(P,D,Q)_s$:** añade componentes estacionales de periodo $s$.

**Metodología Box-Jenkins:**
1. **Identificación:** transforma a estacionaria; examina ACF/PACF.
2. **Estimación:** ajusta candidatos (máxima verosimilitud).
3. **Diagnóstico:** los residuos deben ser ruido blanco (ACF no significativa, Ljung-Box).
4. **Pronóstico:** predice y actualiza con nueva información.

**Ejemplo.** Ventas mensuales con tendencia y estacionalidad anual: SARIMA$(1,1,0)(1,1,0)_{12}$.

## Suavizado exponencial
Alternativa a ARIMA para pronóstico:
- **Suavizado simple:** promedio ponderado exponencialmente; adecuado sin tendencia.
- **Holt:** añade tendencia.
- **Holt-Winters:** añade estacionalidad (aditiva o multiplicativa).

**Formulación recursiva:** $\hat{y}_{t+1} = \alpha y_t + (1-\alpha)\hat{y}_t$; $\alpha$ controla la memoria.

**Ventaja:** simple, robusto y fácil de automatizar. **Desventaja:** menor fundamento inferencial que ARIMA.

**Ejemplo.** Demanda con estacionalidad fuerte: Holt-Winters captura el patrón con tres parámetros.

## Volatilidad: ARCH y GARCH
En finanzas, la varianza cambia con el tiempo (**heterocedasticidad condicional**). **ARCH($q$):**
$$\sigma_t^2 = \omega + \alpha_1\varepsilon_{t-1}^2 + \cdots + \alpha_q\varepsilon_{t-q}^2$$
**GARCH($p, q$)** añade varianzas pasadas:
$$\sigma_t^2 = \omega + \sum \alpha_i\varepsilon_{t-i}^2 + \sum \beta_j\sigma_{t-j}^2$$

**Hechos estilizados:** los clusters de volatilidad (días turbulentos se agrupan). GARCH(1,1) es el caballo de batalla en finanzas.

**Ejemplo.** Tras un día de gran caída, GARCH predice mayor volatilidad mañana: la varianza tiene memoria.

## Validación y evaluación de pronósticos
- **División train/test temporal:** nunca uses datos futuros para entrenar.
- **Validación cruzada de series:** ventanas deslizantes (rolling) o expansivas.
- **Métricas:** MAE, RMSE, MAPE; compara contra un modelo ingenuo (último valor, media estacional).
- **Residuos:** deben ser ruido blanco; si no, falta estructura.

**Ejemplo.** Un RMSE menor que el del "pronóstico ingenuo" indica valor predictivo real.

**Advertencia:** backtesting con reentrenamiento (walk-forward) evita resultados inflados.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, estacionariedad).** ¿Es estacionaria $y_t = 0.5t + \varepsilon_t$?
- Tiene tendencia lineal: media creciente.
- No estacionaria; una diferencia la vuelve estacionaria.

**Ejemplo 2 (práctica, AR).** AR(1) con $\phi = 0.5$: valor esperado a largo plazo si $c = 10$.
- Media: $\mu = c/(1-\phi) = 20$.
- La serie fluctúa alrededor de 20.

**Ejemplo 3 (práctica, ACF).** ¿Qué patrón esperas en un MA(1)?
- ACF significativa solo en el rezago 1.
- PACF decae gradualmente.

**Ejemplo 4 (aplicación, ventas).** Serie con tendencia y pico cada 12 meses.
- Diferenciar (d = 1) y estacional (D = 1).
- Modelo SARIMA.

**Ejemplo 5 (aplicación, finanzas).** Rendimientos con clusters de volatilidad.
- Ajusta GARCH(1,1): $\alpha + \beta$ cercano a 1 indica persistencia.
- Pronóstico de VaR condicional.

**Ejemplo 6 (aplicación, evaluación).** Pronóstico de demanda: modelo con RMSE 15 vs ingenuo 25.
- Mejora del $40\%$ en error.
- El modelo añade valor; verifica con walk-forward.

## Contextos donde se aplica
- **Economía y finanzas:** PIB, inflación, tipos de cambio, riesgo de mercado.
- **Negocios:** demanda, ventas, inventarios, precios.
- **Meteorología:** temperatura, precipitación (con modelos físicos).
- **Ingeniería:** señales de sensores, control de procesos.
- **Salud:** series epidemiológicas, monitoreo de pacientes.

## Errores comunes y cómo evitarlos
- **Ignorar la estacionariedad.** Los modelos fallan o dan resultados espurios.
- **Usar ACF/PACF sin transformar.** Primero estabiliza.
- **Fuga de información temporal.** No entrenes con el futuro.
- **Sobreajustar con órdenes altos.** Diagnostica residuos.
- **Comparar solo RMSE sin baseline.** Usa el modelo ingenuo como referencia.

## Ejercicios propuestos
1. ¿Es estacionaria una serie de ruido blanco?
2. Aplica una diferencia a $y_t = 3t + \varepsilon_t$.
3. AR(1): $\phi = 0.8$, $c = 4$; halla la media.
4. ¿Qué modelo sugiere una PACF que corta en 2?
5. Diferencia estacional de una serie trimestral.
6. Interpreta $\alpha + \beta = 0.95$ en GARCH.
7. ¿Qué mide el RMSE?
8. ¿Por qué la validación temporal difiere de la aleatoria?

**Respuestas:** 1) Sí. 2) $\Delta y_t = 3 + \varepsilon_t - \varepsilon_{t-1}$ (estacionaria en media). 3) $\mu = 20$. 4. AR(2). 5. $y_t - y_{t-4}$. 6. Alta persistencia de la volatilidad. 7. Raíz del error cuadrático medio. 8. Porque el tiempo impide mezclar pasado y futuro.

## Resumen
- Las series se descomponen en tendencia, estacionalidad, ciclo y ruido.
- La estacionariedad es requisito; se logra con diferenciación y transformaciones.
- ACF y PACF identifican AR, MA y ARMA; Box-Jenkins ordena la metodología.
- ARIMA, SARIMA y suavizado exponencial son los modelos clásicos de pronóstico.
- GARCH modela volatilidad; la validación temporal evita conclusiones infladas.
`,

  "bayesiana": String.raw`
## Bayes en inferencia
La estadística bayesiana trata los parámetros como variables aleatorias con una distribución de creencia. El teorema de Bayes en forma de densidades:
$$p(\theta \mid x) = \frac{p(x \mid \theta)\,p(\theta)}{p(x)} \propto p(x \mid \theta)\,p(\theta)$$

- **Previa** $p(\theta)$: creencia antes de ver datos.
- **Verosimilitud** $p(x \mid \theta)$: la información de los datos.
- **Posterior** $p(\theta \mid x)$: creencia actualizada.
- **Evidencia** $p(x)$: constante de normalización.

**Interpretación:** el posterior combina lo que creías con lo que observaste. Con más datos, la verosimilitud domina.

## Distribuciones previas
La elección de la previa es parte del modelo:
- **Informativas:** incorporan conocimiento previo real.
- **Débiles o difusas:** dejan que los datos manden.
- **No informativas:** planas o de Jeffreys (invariantes a reparametrizaciones).
- **Conjugadas:** producen posteriores de la misma familia (cómodas computacionalmente).

**Crítica:** la subjetividad de la previa. **Respuesta:** análisis de sensibilidad; con datos suficientes, distintas previas razonables dan posteriores similares.

**Ejemplo.** Antes de lanzar una moneda, una previa Beta(1,1) es uniforme: cualquier $p$ igual de creíble.

## Familias conjugadas
Si la posterior es de la misma familia que la previa, la actualización es algebraica simple:

- **Beta-Binomial:** previa $\text{Beta}(\alpha, \beta)$ + $k$ éxitos en $n$ $\Rightarrow$ posterior $\text{Beta}(\alpha + k, \beta + n - k)$.
- **Normal-Normal:** previa $N(\mu_0, \sigma_0^2)$ con verosimilitud $N(\theta, \sigma^2)$ da posterior normal con precisión sumada.
- **Gamma-Poisson:** previa $\text{Gamma}(\alpha, \beta)$ + observaciones Poisson da posterior Gamma.
- **Dirichlet-Multinomial:** generaliza Beta a varias categorías.

**Ejemplo.** Previa Beta(2,2) + 7 caras en 10: posterior Beta(9, 5); media $9/14 \approx 0.643$.

## Posterior, predictiva e intervalos creíbles
- **Resumen del posterior:** media, mediana, moda y cuantiles.
- **Intervalo creíble** $[a, b]$: $P(\theta \in [a,b] \mid x) = 0.95$. Interpretación directa: el parámetro está en el intervalo con probabilidad $0.95$ (dado el modelo).
- **Distribución predictiva posterior:** para una nueva observación:
$$p(\tilde{x} \mid x) = \int p(\tilde{x} \mid \theta)p(\theta \mid x)\,d\theta$$
Integra la incertidumbre sobre $\theta$.

**Diferencia clave con el IC frecuentista:** el intervalo creíble responde exactamente la pregunta que la gente hace; el de confianza tiene otra interpretación.

**Ejemplo.** Posterior Beta(9,5): intervalo creíble del 95% aproximadamente $[0.36, 0.88]$.

## Métodos computacionales: MCMC
Cuando el posterior no tiene forma cerrada, se muestrea:
- **Metropolis-Hastings:** propone saltos y acepta según el cociente de posteriores.
- **Gibbs:** muestrea cada parámetro condicionado en los demás.
- **Hamiltonian Monte Carlo (HMC):** usa gradientes; es el motor de Stan y PyMC.
- **Variational Inference:** aproxima con optimización (más rápido, menos exacto).

**Diagnóstico:** convergencia con $\hat{R}$ (Gelman-Rubin) cerca de 1, tamaño efectivo de muestra, y cadenas mezclando bien.

**Ejemplo.** Un modelo jerárquico con 100 parámetros se ajusta con HMC en Stan; los diagnósticos confirman convergencia.

## Comparación de modelos
- **Factor de Bayes:** cociente de evidencias $p(x \mid M_1)/p(x \mid M_2)$; cuantifica la evidencia relativa.
- **DIC, WAIC, LOO-CV:** criterios predictivos; menor es mejor.
- **Regularización implícita:** las previas actúan como penalizaciones (Ridge ~ previa normal).

**Advertencia:** los factores de Bayes son sensibles a la previa; reporta sensibilidad.

**Ejemplo.** Comparar dos modelos de conversión: LOO-CV favorece el que predice mejor en datos retenidos.

## Estadística bayesiana jerárquica
Los **modelos jerárquicos** organizan parámetros en niveles: los parámetros individuales provienen de una distribución poblacional, que a su vez tiene previa.

**Ventaja:** **pooling parcial**: los grupos se informan mutuamente sin igualarlos. Ideal para datos agrupados (escuelas, regiones, pacientes).

**Ejemplo.** Estimación de tasas de conversión por ciudad: ciudades con pocos datos se "encogen" hacia la media global (shrinkage), estabilizando las estimaciones.

**Formalmente:** $y_{ij} \sim N(\theta_j, \sigma^2)$, $\theta_j \sim N(\mu, \tau^2)$, con previas en $\mu, \tau$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, conjugada).** Previa Beta(1,1) + 7 caras en 10 lanzamientos.
- Posterior Beta(8, 4).
- Media posterior $8/12 = 2/3$.

**Ejemplo 2 (práctica, comparación).** Previa Beta(10,10) + mismos datos.
- Posterior Beta(17, 13); media $\approx 0.567$.
- La previa más fuerte tira hacia 0.5: menos datos, más influencia previa.

**Ejemplo 3 (aplicación, medicina).** Test diagnóstico en clave bayesiana.
- Previa = prevalencia $1\%$.
- Verosimilitud = sensibilidad y especificidad.
- Posterior $P(\text{enf} \mid +) \approx 16.7\%$, como en Bayes básico.

**Ejemplo 4 (aplicación, A/B testing).** Dos versiones con conversiones 30/200 y 24/200.
- Posteriores Beta(30+1, 170+1) y Beta(25, 177).
- Probabilidad de que B > A: se calcula por simulación; si es $>95\%$, lanzar B.

**Ejemplo 5 (aplicación, jerárquico).** Tasas por sucursal con tamaños muy distintos.
- Estimaciones encogidas hacia la media: extremos suavizados.
- Menos sobreajuste que estimar cada sucursal por separado.

**Ejemplo 6 (aplicación, predicción).** ¿Probabilidad de al menos 60 caras en los próximos 100 lanzamientos?
- Usa la predictiva posterior integrando la incertidumbre de $p$.
- Más ancha que la binomial con $p$ fijo: refleja incertidumbre.

## Contextos donde se aplica
- **Medicina:** ensayos adaptativos, diagnóstico, farmacología.
- **Machine learning:** naive Bayes, redes bayesianas, modelos generativos, regularización.
- **Economía:** series con cambio de régimen, modelos jerárquicos.
- **A/B testing:** decisiones con probabilidades directas.
- **Ciencia:** estimación de parámetros con incertidumbre honesta.

## Errores comunes y cómo evitarlos
- **Confundir intervalo creíble con el de confianza.** Conceptos distintos.
- **Elegir previas informativas sin justificar.** Documenta y prueba sensibilidad.
- **No verificar la convergencia de MCMC.** $\hat{R}$ y diagnósticos son obligatorios.
- **Interpretar el posterior como la verosimilitud.** La previa importa con pocos datos.
- **Ignorar la dependencia en modelos jerárquicos.** El pooling cambia las estimaciones.

## Ejercicios propuestos
1. Previa Beta(3,3) + 5 caras en 8: posterior y media.
2. ¿Qué previa es conjugada de la Poisson?
3. Intervalo creíble vs intervalo de confianza: una diferencia.
4. ¿Qué mide $\hat{R}$?
5. Diseña una previa para la tasa de clics de un botón nuevo.
6. Factor de Bayes: ¿qué valores indican evidencia fuerte?
7. ¿Cómo funciona el shrinkage en un modelo jerárquico?
8. ¿Por qué MCMC es necesario?

**Respuestas:** 1) Beta(8, 6), media $4/7 \approx 0.571$. 2. Gamma. 3. El creíble da probabilidad directa del parámetro. 4. Convergencia de las cadenas. 5. Débil alrededor de $2\%$. 6. Mayor que 10 (o $\ln$ mayor que 2.3). 7. Grupos pequeños se acercan a la media global. 8. Porque las integrales del posterior no tienen forma cerrada.

## Resumen
- La inferencia bayesiana actualiza una previa con la verosimilitud para obtener el posterior.
- Las familias conjugadas hacen la actualización algebraica; MCMC resuelve el caso general.
- Los intervalos creíbles tienen interpretación directa y la predictiva integra la incertidumbre.
- La comparación de modelos y los jerárquicos (shrinkage) son herramientas centrales.
- La estadística bayesiana responde preguntas naturales con un modelo explícito.
`,

  "decision": String.raw`
## Elementos de una decisión
Decidir bajo incertidumbre requiere:
- **Acciones** $a \in A$: lo que podemos elegir.
- **Estados de la naturaleza** $s \in S$: lo que no controlamos.
- **Resultados** $r(a, s)$: consecuencia de acción y estado.
- **Probabilidades** $P(s)$: creencias sobre los estados.
- **Función de utilidad** $u(r)$: preferencias sobre los resultados.

La **utilidad esperada** de una acción:
$$EU(a) = \sum_s P(s)\,u(r(a, s))$$

El **principio de maximización de la utilidad esperada** (von Neumann-Morgenstern) dice: elige la acción con mayor $EU$. Bajo axiomas de racionalidad, es la única regla consistente.

**Ejemplo.** Apostar $\$10$ a una moneda justa con premio $\$25$: $EU = 0.5 \cdot 15 + 0.5 \cdot (-10) = 2.5$: conviene jugar (si eres neutral al riesgo).

## Utilidad, dinero y aversión al riesgo
La utilidad no es lineal en dinero. Una función de utilidad **cóncava** (por ejemplo $\ln$) implica **aversión al riesgo**: se prefiere el valor esperado seguro a la apuesta.

- **Neutral al riesgo:** $u$ lineal; decide por valor esperado.
- **Averso:** $u$ cóncava; paga por evitar incertidumbre (seguros).
- **Amante del riesgo:** $u$ convexa; busca apuestas.

**Equivalente de certeza (EC):** la cantidad segura con la misma utilidad que la apuesta. **Prima de riesgo:** $E[X] - EC$.

**Ejemplo.** Con $u(x) = \sqrt{x}$ y una apuesta $50/50$ entre $0$ y $100$: $EU = 5$; EC $= 25 < 50$ (valor esperado): prima de riesgo $25$.

**Paradoja de San Petersburgo:** el valor esperado infinito no se traduce en utilidad infinita; Bernoulli propuso la utilidad logarítmica para resolverla.

## Valor de la información
**VEIP** (valor esperado de la información perfecta): cuánto pagarías por saber el estado antes de decidir:
$$\text{VEIP} = E_s[\max_a u(a, s)] - \max_a E_s[u(a, s)]$$

**VIM** (valor de la información de una muestra): usa probabilidades posteriores en lugar de certeza.

**Propiedad:** VEIP $\geq$ VIM $\geq 0$: la información nunca daña (con decisión óptima). En la práctica, el costo de la información se compara con su valor.

**Ejemplo.** Un agricultor decide sembrar según lluvia; saber el clima con certeza vale la diferencia entre decidir con y sin información.

## Función de pérdida y riesgo
Formulación equivalente con **pérdidas** $L(\theta, a)$: el **riesgo** de una regla de decisión $\delta$ es:
$$R(\theta, \delta) = E[L(\theta, \delta(X)) \mid \theta]$$

**Riesgo de Bayes:** minimiza el riesgo promedio con una previa. **Estimadores de Bayes:** la media/mediana posterior según la pérdida (cuadrática/absoluta).

**Ejemplos de pérdidas:**
- Cuadrática $L = (\theta - a)^2$: el estimador es la media posterior.
- Absoluta $L = |\theta - a|$: la mediana posterior.
- 0-1: la moda posterior (clasificación).

**Ejemplo.** Estimar la demanda: con pérdida cuadrática, la estimación óptima es la media posterior de la demanda.

## Criterios minimax y de decisión clásicos
Cuando no hay probabilidades confiables:
- **Minimax (Wald):** elige la acción que minimiza la pérdida máxima posible: $\min_a \max_s L(a, s)$.
- **Maximin:** maximiza el peor resultado (útil en catástrofes).
- **Hurwicz:** combina optimismo y pesimismo con $\alpha \in [0,1]$.
- **Savage (arrepentimiento minimax):** minimiza el máximo arrepentimiento $L(a,s) - \min_{a'}L(a',s)$.

**Cuándo usarlos:** entornos con profunda incertidumbre (guerra, regulación, nuevos mercados), cuando estimar probabilidades es temerario.

**Ejemplo.** Diseño de una presa: minimax considera el peor escenario de crecida, no el promedio.

## Árboles de decisión y análisis de sensibilidad
Un **árbol de decisión** representa secuencialmente decisiones (cuadrados) y estados (círculos), resolviendo hacia atrás (backward induction):
1. Dibuja el árbol con acciones y estados.
2. Asigna probabilidades y utilidades terminales.
3. Calcula la utilidad esperada de cada nodo de estado.
4. Elige la mejor acción en cada nodo de decisión.

**Sensibilidad:** varía probabilidades y utilidades para ver si la decisión cambia. **Punto de indiferencia:** valor donde dos acciones empatan.

**Ejemplo.** Lanzar un producto o testear primero: el árbol compara lanzamiento directo con test y decisión posterior.

## Aplicaciones: negocios, medicina, política
**Negocios:**
- Valoración de proyectos con opciones reales.
- A/B testing con criterios de decisión.
- Gestión de inventario y seguros.

**Medicina:**
- Tratamiento vs esperar: utilidades con calidad de vida.
- Umbrales de decisión diagnóstica.
- Priorización de trasplantes.

**Política y sociedad:**
- Respuesta a pandemias: costos económicos vs vidas.
- Regulación ambiental bajo incertidumbre.
- Subastas y diseño de mecanismos.

**Ejemplo médico.** Tratar una enfermedad rara: la utilidad de curar es alta, pero los efectos adversos importan; el umbral depende de la probabilidad.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, utilidad esperada).** Lotería: $\$5$ al boleto, premio $\$100$ con probabilidad $1/50$, nada si no.
- $EU = (1/50)(95) + (49/50)(-5) = 1.9 - 4.9 = -3$.
- Pérdida esperada: $\$3$; no conviene (neutral al riesgo).

**Ejemplo 2 (práctica, aversión).** Seguro de auto: prima $\$300$; accidente con probabilidad $0.05$ y pérdida $\$5000$.
- Valor esperado de la pérdida: $250 < 300$.
- Un averso al riesgo paga los $300$ por tranquilidad; el neutral no.

**Ejemplo 3 (práctica, VEIP).** Decisión sin saber el estado: ganancias $100$ o $20$ según estado equiprobable; con info perfecta eliges siempre.
- $EU$ sin info: max de promedios; con info: promedio de máximos.
- VEIP = diferencia.

**Ejemplo 4 (aplicación, minimax).** Proyecto A: ganancias $10$ o $-2$. Proyecto B: $5$ o $1$.
- Peor caso A: $-2$; peor caso B: $1$.
- Minimax elige B.

**Ejemplo 5 (aplicación, prueba médica).** Test con sensibilidad 90%, especificidad 95%, prevalencia 1%.
- Tratar a todos: muchos efectos adversos innecesarios.
- Testear y tratar positivos: mejor utilidad esperada; umbral calculado con Bayes.

**Ejemplo 6 (aplicación, árbol).** Perforar petróleo: seco con $0.7$ (pérdida 1M), húmedo con $0.3$ (ganancia 5M). Test sísmico informa.
- Sin test: $EU = 0.3(5) - 0.7(1) = 0.8$M.
- Con test: actualiza y decide; el árbol muestra el valor de testear.

## Contextos donde se aplica
- **Economía y finanzas:** portafolios, seguros, inversión.
- **Medicina:** diagnóstico y tratamiento, política sanitaria.
- **Ingeniería:** fiabilidad, diseño robusto, mantenimiento.
- **Inteligencia artificial:** agentes racionales, aprendizaje por refuerzo, planificación.
- **Política pública:** regulación, emergencias, asignación de recursos.

## Errores comunes y cómo evitarlos
- **Maximizar el valor monetario esperado sin utilidad.** El riesgo importa.
- **Ignorar la aversión al riesgo del decisor.** Pregunta por la función de utilidad.
- **Usar minimax cuando hay buenas probabilidades.** Desperdicia información.
- **No hacer análisis de sensibilidad.** Una decisión puede ser frágil.
- **Confundir arrepentimiento con pérdida.** Savage mide contra el mejor posible.

## Ejercicios propuestos
1. Apuesta 50/50 entre ganar $\$100$ o perder $\$40$: ¿conviene a un neutral?
2. Con $u = \ln x$, calcula el EC de la apuesta entre $100$ y $10000$ equiprobable.
3. Acción A: $EU = 10$; B: $EU = 12$ con riesgo. ¿Qué falta para decidir?
4. Calcula el arrepentimiento máximo de dos acciones.
5. Diseña un árbol simple para decidir comprar o alquilar.
6. ¿Cuándo es racional comprar un seguro con prima mayor al valor esperado?
7. ¿Qué es un punto de indiferencia?
8. Interpreta VEIP en palabras.

**Respuestas:** 1) $EU = 30 > 0$: sí. 2) $EU = (\ln 100 + \ln 10000)/2 = \ln 1000$; EC $= 1000$. 3. La utilidad de cada resultado y la aversión al riesgo. 4. Diferencia contra el mejor por estado. 5. Nodos de decisión y estados de precios. 6. Con aversión al riesgo o presupuesto limitado. 7. Probabilidad donde dos acciones empatan. 8. Cuánto vale saber el futuro antes de decidir.

## Resumen
- Decidir bajo incertidumbre combina acciones, estados, probabilidades y utilidad.
- La utilidad esperada es el criterio racional; la forma de $u$ captura el riesgo.
- La información tiene valor; VEIP y VIM lo cuantifican.
- Minimax y Savage cubren la incertidumbre profunda; los árboles estructuran decisiones secuenciales.
- La teoría de la decisión conecta estadística, economía e inteligencia artificial.
`
};
