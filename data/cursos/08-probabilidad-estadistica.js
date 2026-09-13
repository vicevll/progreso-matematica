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
## ¿Qué es una variable aleatoria?

Imagina que lanzas una moneda y quieres "hacer cuentas" con el resultado. El resultado en sí es una palabra: "cara" o "cruz". Las matemáticas trabajan mejor con números que con palabras, así que inventamos una regla que convierte cada resultado en un número. Esa regla es una **variable aleatoria**.

Formalmente: tenemos un **espacio muestral**, que es el conjunto de todos los resultados posibles de un experimento. Una **variable aleatoria** es una función que le asigna un número a cada resultado del espacio muestral. Es un nombre muy feo, porque no es "aleatoria" (la regla es fija: a "cara" siempre le toca el mismo número) y no es exactamente una "variable" (es una función). Lo aleatorio es el experimento; la función solo traduce.

Se denota con una letra mayúscula, casi siempre $X$, $Y$ o $Z$. ¿Por qué mayúscula? Porque representa una función, un objeto "grande". Cuando la función ya se aplicó a un resultado concreto y obtuvo un número específico, ese número se escribe con minúscula: $x$. Así que $X$ es "el número que saldrá al lanzar el dado" (algo todavía incierto) y $x = 4$ es "salió un cuatro" (algo ya conocido). Esta distinción entre mayúsculas (la variable, lo incierto) y minúsculas (el valor, lo observado) se usa en toda la estadística.

**Ejemplo.** Si lanzas un dado, el espacio muestral es $\{1, 2, 3, 4, 5, 6\}$. La variable aleatoria más natural es $X$ = "el número que muestra el dado", es decir, la función identidad: a cada resultado le asigna su propio número. Pero podríamos definir otra variable sobre el mismo experimento: $Y$ = "número de puntos pares", que valdría 1 si sale 2, 4 o 6, y 0 en otro caso. Sobre un mismo experimento pueden convivir muchas variables aleatorias distintas.

Hay dos grandes tipos de variables aleatorias, y toda la asignatura gira en torno a esa división:

- **Discreta:** la variable solo puede tomar una lista contable de valores: $0, 1, 2, 3, \ldots$ Por ejemplo, el número de llamadas que recibe una central en una hora, o el número de hijos de una familia. Los valores "saltan": entre 2 y 3 llamadas no hay 2.5 llamadas.
- **Continua:** la variable puede tomar cualquier valor de un intervalo completo: la altura de una persona, el tiempo que tarda en fundirse un foco, la temperatura. Entre 1.70 m y 1.71 m hay infinitos valores posibles y todos son válidos.

¿Cómo describimos el comportamiento de $X$? Para una variable discreta, se usa la **función de masa de probabilidad** (o simplemente "la masa"), que se escribe $p(x)$ o $p_X(x)$ y se define como

$$p(x) = P(X = x).$$

Traducción de cada símbolo: $P$ significa "probabilidad de", los paréntesis encierran el evento cuya probabilidad calculamos, $X = x$ es el evento "la variable toma el valor $x$". Entonces $p(3) = P(X = 3)$ se lee: "la probabilidad de que la variable aleatoria $X$ valga exactamente 3". El subíndice en $p_X(x)$ solo indica a qué variable pertenece la masa, útil cuando hay varias variables en juego; si no hay ambigüedad se escribe solo $p(x)$.

La masa debe cumplir una regla fundamental: si sumamos las probabilidades de todos los valores posibles, el total debe ser 1, porque $X$ seguro que toma alguno de sus valores. Se escribe $\sum_x p(x) = 1$, donde la $\sum$ (sigma mayúscula griega, "suma") con la letra $x$ debajo se lee: "suma sobre todos los valores $x$ que puede tomar la variable".

Para una variable continua, el análogo es la **función de densidad** (o "la densidad"), que se escribe $f(x)$ o $f_X(x)$. Aquí hay una trampa conceptual importantísima: en el caso continuo, $f(x)$ **no es una probabilidad**. La probabilidad de un intervalo se obtiene con una integral:

$$P(a \leq X \leq b) = \int_a^b f(x)\,dx.$$

El símbolo $\int_a^b$ es una integral definida: el área bajo la curva de $f$ entre los puntos $x = a$ y $x = b$. La densidad es una "concentración de probabilidad por unidad de longitud", de modo que la probabilidad es el área, no la altura. Y como el área bajo toda la curva debe representar la probabilidad total (todo el espacio), se exige $\int_{-\infty}^{\infty} f(x)\,dx = 1$. Los símbolos $-\infty$ y $\infty$ son "menos infinito" y "más infinito": los extremos de la recta numérica; la integral sobre todo $\mathbb{R}$ debe dar 1.

**Consecuencia famosa:** en el caso continuo, la probabilidad de un valor puntual es cero: $P(X = x) = 0$ para todo $x$. Un punto no tiene ancho, así que el área bajo la curva justo en un punto es cero. Por eso, en variables continuas solo preguntamos por intervalos ("¿cuál es la probabilidad de que la altura esté entre 1.70 y 1.75?"), nunca por valores exactos ("¿cuál es la probabilidad de medir exactamente 1.723416... metros?"). Que una probabilidad sea cero no significa que el evento sea imposible: medir 1.70 m exactamente es posible en teoría, pero su probabilidad es nula porque hay infinitos valores igualmente específicos compitiendo por una probabilidad total finita.

Finalmente, hay una tercera herramienta que resume a las dos anteriores: la **función de distribución** (acumulada), escrita $F(x)$, definida como

$$F(x) = P(X \leq x).$$

Se lee: "la probabilidad de que $X$ sea menor o igual que $x$". Para una discreta se obtiene sumando masas, $F(x) = \sum_{k \leq x} p(k)$; para una continua integrando, $F(x) = \int_{-\infty}^x f(t)\,dt$. La $F$ es una "probabilidad acumulada": empieza en 0 (muy a la izquierda no hay nada acumulado) y crece sin saltos hacia abajo hasta llegar a 1 (muy a la derecha ya se acumuló todo). Que sea acumulada es lo que la hace tan cómoda: $P(a < X \leq b) = F(b) - F(a)$.

## Cómo leer la notación

La notación de probabilidad asusta la primera vez, pero es solo una taquigrafía muy lógica. Aquí, un diccionario completo, letra por letra:

- **$X$, $Y$, $Z$** (mayúsculas): variables aleatorias. Son las "reglas que convierten resultados en números".
- **$x$, $y$, $z$, $k$, $n$** (minúsculas): valores concretos que puede tomar la variable. Por ejemplo, en "¿cuál es $P(X = 3)$?", el 3 juega el papel de $x$.
- **$P(\text{evento})$**: "la probabilidad del evento que está dentro del paréntesis". El evento se escribe con símbolos: $X = k$ ("$X$ vale $k$"), $X \leq b$ ("$X$ es a lo más $b$"), $a < X < b$ ("$X$ está estrictamente entre $a$ y $b$").
- **$p(x)$ o $p_X(x)$**: masa de probabilidad (caso discreto). Es exactamente $P(X = x)$ con un nombre más corto.
- **$f(x)$ o $f_X(x)$**: densidad (caso continuo). No es una probabilidad; es densidad.
- **$F(x)$**: distribución acumulada: $P(X \leq x)$.
- **$E[X]$**: esperanza, el "promedio a largo plazo" de $X$. Se lee "esperanza de equis" o "valor esperado de equis". La letra $E$ viene del inglés *expectation*.
- **$\mu$** (mu, letra griega): el símbolo estándar para la media de la población, que coincide con la esperanza de $X$: $\mu = E[X]$.
- **$\sigma^2$** (sigma al cuadrado): la varianza, una medida de dispersión. $\sigma$ (sigma) es la letra griega equivalente a la "s" de "desviación"; el cuadrado recuerda que es un promedio de distancias al cuadrado.
- **$\sigma$** (sigma a secas): la **desviación estándar**, la raíz cuadrada de la varianza, $\sigma = \sqrt{\sigma^2}$. Está en las mismas unidades que $X$, por eso es la más intuitiva: si $X$ se mide en metros, $\sigma$ también se mide en metros.
- **$\binom{n}{k}$**: "combinaciones de $n$ tomadas de $k$", el número de maneras de elegir $k$ objetos de un total de $n$ sin importar el orden. Se calcula $\binom{n}{k} = \frac{n!}{k!(n-k)!}$, donde $n!$ (factorial) es $n \cdot (n-1) \cdots 1$. Por ejemplo $\binom{5}{2} = 10$.
- **$e$**: el número de Euler, la base de los logaritmos naturales, $e \approx 2.71828$. Aparece en Poisson y en la exponencial.
- **$\lambda$** (lambda): parámetro de "tasa" o "intensidad" en Poisson y exponencial: cuántos eventos por unidad de tiempo esperamos.
- **$n$ y $p$**: en binomial, $n$ es el número de ensayos y $p$ la probabilidad de éxito en cada ensayo.
- **$\approx$**: "aproximadamente igual". Lo usamos cuando damos un valor decimal redondeado.
- **$\Rightarrow$**: "implica"; **$\Leftrightarrow$**: "equivale". Flechas lógicas que ahorran palabras.
- **$\bar{X}_n$**: "equis barra con subíndice n", la **media muestral** de $n$ observaciones: $\bar{X}_n = \frac{X_1 + X_2 + \cdots + X_n}{n}$. La barra sobre la letra es el símbolo universal de "promedio".

**Cómo leer una fórmula larga en tres pasos.** Tomemos la binomial: $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$. Paso 1: identifica qué es la letra de la izquierda ("probabilidad de que $X$ valga $k$"). Paso 2: identifica los ingredientes ($n$ ensayos, $k$ éxitos, $p$ probabilidad de éxito, $1-p$ de fracaso). Paso 3: lee el patrón: número de maneras de elegir *dónde* ocurren los $k$ éxitos ($\binom{n}{k}$), multiplicado por la probabilidad de que esos $k$ ensayos sean éxitos ($p^k$) y los otros $n-k$ sean fracasos ($(1-p)^{n-k}$).

**Convención de las sumas.** $\sum_{k=0}^{n} a_k$ se lee "suma de $a_k$ desde $k = 0$ hasta $k = n$": se evalúa $a_k$ en cada valor de $k$ y se suman los resultados. Si solo dice $\sum_x$, se suma sobre todos los valores posibles de $x$.

**Convención de las integrales.** $\int_a^b g(x)\,dx$ se lee "integral de $g$ desde $a$ hasta $b$": el área (con signo) bajo la gráfica de $g$ entre $a$ y $b$. El $dx$ al final solo recuerda que la variable de integración es $x$.

## Distribuciones discretas (Bernoulli, binomial, geométrica, Poisson) explicadas

Una **distribución** es la "receta" que dice qué probabilidad corresponde a cada valor. Cuando un fenómeno real sigue cierta receta, usamos distribuciones con nombre propio. Las cuatro discretas clásicas son:

### Bernoulli

Es la madre de todas las discretas: un solo ensayo con dos resultados posibles, "éxito" (con probabilidad $p$) y "fracaso" (con probabilidad $1-p$). La variable cuenta el número de éxitos, que solo puede ser 0 o 1:

$$P(X = 1) = p, \qquad P(X = 0) = 1 - p.$$

El parámetro $p$ es un número entre 0 y 1: la probabilidad de éxito. La escribimos $X \sim \text{Bernoulli}(p)$, y el símbolo $\sim$ se lee "se distribuye como" o "sigue una distribución". Lanzar una moneda con $p = 1/2$ es el ejemplo canónico: si la moneda está sesgada, $p \neq 1/2$.

### Binomial

¿Y si repetimos el ensayo de Bernoulli varias veces? La **binomial** cuenta el número de éxitos en $n$ ensayos **independientes**, todos con la misma probabilidad de éxito $p$. Sus condiciones son tres y hay que memorizarlas: número fijo de ensayos $n$, ensayos independientes entre sí, y probabilidad de éxito $p$ constante en cada ensayo. La masa es

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \qquad k = 0, 1, 2, \ldots, n.$$

La frase "$k = 0, 1, \ldots, n$" indica el dominio: la variable solo puede tomar esos valores, nada más. ¿Por qué la fórmula? Queremos exactamente $k$ éxitos. Los éxitos pueden ocurrir en cualesquiera $k$ de los $n$ ensayos, y hay $\binom{n}{k}$ maneras de elegir en cuáles. Para cada una de esas configuraciones, la probabilidad es $p^k$ (los $k$ éxitos) por $(1-p)^{n-k}$ (los $n-k$ fracasos). Como las configuraciones son incompatibles entre sí, sumamos $\binom{n}{k}$ veces el mismo número, lo que da la fórmula.

Se denota $X \sim \text{Bin}(n, p)$. Casos particulares: $\text{Bin}(1, p)$ es Bernoulli; la suma de binomios independientes con la misma $p$ es otra binomial (se suman las $n$).

**Ejemplo.** Un vendedor contacta 5 clientes; cada uno compra con probabilidad $0.3$, independientemente. Si $X$ = número de compradores, $P(X = 2) = \binom{5}{2}(0.3)^2(0.7)^3 = 10 \cdot 0.09 \cdot 0.343 = 0.3087$: alrededor del 31% de las veces venderá exactamente a dos.

### Geométrica

Cambiamos la pregunta: no preguntamos "¿cuántos éxitos en $n$ ensayos?", sino "¿cuántos ensayos hasta el **primer** éxito?". Esa variable tiene distribución **geométrica**:

$$P(X = k) = (1-p)^{k-1} p, \qquad k = 1, 2, 3, \ldots$$

Nota el dominio: $k$ empieza en 1 (necesitas al menos un ensayo) y no termina nunca, por eso los tres puntos suspensivos. Para que el primer éxito ocurra justo en el ensayo $k$, los primeros $k-1$ ensayos deben ser fracasos (probabilidad $(1-p)^{k-1}$) y el $k$-ésimo debe ser éxito (probabilidad $p$). Se denota $X \sim \text{Geom}(p)$.

**Propiedad estrella:** la geométrica "no tiene memoria". Si ya llevas 10 fracasos, la probabilidad de que el siguiente sea éxito sigue siendo exactamente $p$: el pasado no cambia las probabilidades futuras, porque los ensayos son independientes.

**Ejemplo.** Con un dado, la probabilidad de sacar el primer 6 exactamente en el cuarto lanzamiento es $P(X = 4) = (5/6)^3 (1/6) = 125/1296 \approx 0.0965$.

### Poisson

La **Poisson** cuenta el número de eventos que ocurren en un intervalo fijo de tiempo o espacio, cuando los eventos son raros, independientes y ocurren a una tasa promedio constante $\lambda$. Ejemplos típicos: llamadas a una central por hora, errores tipográficos por página, partículas radiactivas por segundo, accidentes por semana. Su masa es

$$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}, \qquad k = 0, 1, 2, \ldots$$

Aquí $e$ es el número de Euler y $k!$ el factorial. El parámetro $\lambda$ (lambda) es la tasa: el número **esperado** de eventos en el intervalo. De hecho, la esperanza y la varianza de una Poisson son ambas $\lambda$, un rasgo muy característico y fácil de recordar. Se denota $X \sim \text{Poisson}(\lambda)$.

¿De dónde sale? Es el límite de la binomial cuando $n$ es enorme y $p$ pequeñísima, pero el producto $np = \lambda$ se mantiene fijo. Por eso modela "eventos raros entre muchos intentos": una central con un millón de posibles llamadas, cada una con probabilidad minúscula, pero que en promedio produce $\lambda$ llamadas. En la práctica: si $n$ es grande ($n \geq 50$), $p$ pequeña ($p \leq 0.1$) y $np \leq 10$, la Poisson con $\lambda = np$ aproxima muy bien a la binomial, con mucha menos cuenta.

**Ejemplo.** Una central recibe en promedio $\lambda = 5$ llamadas por hora. La probabilidad de exactamente 3 llamadas en una hora es $P(X = 3) = \frac{e^{-5} 5^3}{3!} = \frac{0.00674 \cdot 125}{6} \approx 0.1404$.

### Hipergeométrica (mención)

Si extraemos sin reposición (lo extraído no vuelve), los ensayos dejan de ser independientes y la binomial deja de valer. La **hipergeométrica** cuenta éxitos al muestrear sin reposición de una población finita con $N$ elementos de los cuales $K$ son "éxitos". Es la distribución de las urnas, la lotería y el control de calidad con lotes pequeños.

## Distribuciones continuas (uniforme, exponencial, normal) explicadas

### Uniforme continua

La **uniforme** en el intervalo $[a, b]$ es "total ignorancia": todos los subintervalos de igual longitud tienen igual probabilidad. Su densidad es constante:

$$f(x) = \frac{1}{b-a} \quad \text{para } a \leq x \leq b, \qquad \text{y } f(x) = 0 \text{ fuera del intervalo.}$$

¿Por qué esa altura? Porque el área bajo la densidad debe ser 1, y el área de un rectángulo es base por altura: base $(b-a)$ por altura $1/(b-a)$ da 1. Nota que aquí la densidad es una altura de rectángulo, y sí puede ser mayor que 1 (si el intervalo es corto); eso no es un error, porque la densidad no es probabilidad. Se denota $X \sim U(a, b)$. Modela: posición de una aguja que cae al azar en un segmento, hora de llegada de un usuario dentro de una ventana de tiempo, redondeo de un reloj.

### Exponencial

La **exponencial** es la hermana continua de la geométrica: modela **tiempos de espera** hasta que ocurre un evento (tiempo hasta la próxima llamada, vida útil de un componente, tiempo entre llegadas a una fila). Su densidad es

$$f(x) = \lambda e^{-\lambda x}, \qquad x \geq 0.$$

El parámetro $\lambda > 0$ es la tasa de ocurrencia: a mayor $\lambda$, más rápido llega el evento y más rápido decae la densidad. Nota el dominio "$x \geq 0$": la densidad vale 0 para tiempos negativos (un tiempo de espera negativo no existe). La probabilidad de esperar más de $t$ unidades es la famosa cola exponencial:

$$P(X > t) = e^{-\lambda t}.$$

**Propiedad de pérdida de memoria:** si un foco lleva 1000 horas encendido y sigue vivo, la probabilidad de que dure 1000 horas más es la misma que tenía cuando era nuevo. El pasado no envejece a la exponencial: es la única distribución continua con esta propiedad.

**Ejemplo.** Un foco tiene vida media de 1000 horas, así que $\lambda = 1/1000$ por hora. La probabilidad de que dure más de 2000 horas es $P(X > 2000) = e^{-(1/1000) \cdot 2000} = e^{-2} \approx 0.1353$: solo un 13.5%.

### Normal (gaussiana)

La **normal** es la distribución más importante de toda la estadística. Su curva tiene forma de campana simétrica, centrada en $\mu$ y con dispersión gobernada por $\sigma$. Su densidad es

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}.$$

Desmenuzando la fórmula: $\mu$ es la media (el centro de la campana), $\sigma$ la desviación estándar (qué tan abierta es la campana), $\pi$ es el número pi, y $e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ es el factor que hace que la curva decaiga rápido al alejarse de $\mu$; el cuadrado en $(x-\mu)^2$ garantiza simetría (distancias iguales a izquierda y derecha pesan igual). El factor $\frac{1}{\sigma\sqrt{2\pi}}$ al frente es solo un normalizador: hace que el área total sea 1. Se denota $X \sim N(\mu, \sigma^2)$. Ojo con la convención: el segundo parámetro es la **varianza** $\sigma^2$, no la desviación $\sigma$; es un error clásico escribir $N(\mu, \sigma)$.

**Regla empírica 68–95–99.7:** si $X \sim N(\mu, \sigma^2)$, entonces aproximadamente
- el 68% de los valores cae en el intervalo $\mu \pm \sigma$ (media más-menos una desviación);
- el 95% cae en $\mu \pm 1.96\sigma$ (a menudo se redondea a $\mu \pm 2\sigma$);
- el 99.7% cae en $\mu \pm 3\sigma$.

**Estandarización.** Para calcular probabilidades se convierte cualquier normal en la **normal estándar** $Z \sim N(0,1)$ (media 0, varianza 1) restando la media y dividiendo por la desviación:

$$Z = \frac{X - \mu}{\sigma}.$$

El resultado $z$ se llama **puntuación z**: "¿a cuántas desviaciones estándar está $x$ de la media?". Luego se consulta una tabla (o software) para obtener $P(Z \leq z)$. De la normal derivan las distribuciones **t de Student**, **chi-cuadrado** ($\chi^2$) y **F**, que son las protagonistas de los cursos de inferencia.

**Ejemplo.** Puntajes con $\mu = 500$ y $\sigma = 100$. ¿Qué fracción supera los 700? Estandarizamos: $z = \frac{700 - 500}{100} = 2$. Consultando la tabla normal, $P(Z > 2) \approx 0.0228$: solo un 2.28% supera los 700.

## Esperanza y varianza

### Esperanza

La **esperanza** $E[X]$ (también llamada **media** o **valor esperado**) es el promedio que obtendríamos si repitiéramos el experimento infinitas veces y promediáramos los valores observados. Para una discreta, cada valor se pondera por su probabilidad:

$$E[X] = \sum_x x \, p(x).$$

Para una continua, la suma se vuelve integral:

$$E[X] = \int_{-\infty}^{\infty} x f(x)\,dx.$$

En ambos casos la idea es idéntica: "promedio ponderado", donde el peso de cada valor es qué tan probable es.

**Propiedades de la esperanza** (valen siempre, sin excepciones):
- **Linealidad:** $E[aX + b] = aE[X] + b$, y para dos variables $E[X + Y] = E[X] + E[Y]$. Aquí $a$ y $b$ son constantes. La linealidad es la propiedad más explotada de toda la probabilidad: **no requiere independencia**.
- **Esperanza de una función:** $E[g(X)] = \sum_x g(x) p(x)$ (o la integral correspondiente). Conocida como **regla del estadístico inconsciente**: para hallar $E[X^2]$ no necesitas conocer la distribución de $X^2$, solo usas la de $X$: $E[X^2] = \sum_x x^2 p(x)$.
- **Advertencia:** en general $E[g(X)] \neq g(E[X])$. El promedio de los cuadrados no es el cuadrado del promedio (piensa en 1 y 3: promedio de cuadrados es 5, cuadrado del promedio es 4). La igualdad solo vale si $g$ es lineal.

**Esperanzas de las distribuciones notables** (memorizables):

| Distribución | Esperanza $E[X]$ |
|---|---|
| Bernoulli$(p)$ | $p$ |
| Binomial$(n, p)$ | $np$ |
| Geométrica$(p)$ | $1/p$ |
| Poisson$(\lambda)$ | $\lambda$ |
| Uniforme$(a, b)$ | $(a+b)/2$ |
| Exponencial$(\lambda)$ | $1/\lambda$ |
| Normal$(\mu, \sigma^2)$ | $\mu$ |

Todas tienen sentido intuitivo: en $n$ ensayos con éxito $p$ esperas $np$ éxitos; si la tasa es $\lambda$ eventos por hora esperas $\lambda$; si el éxito tiene probabilidad $p$, esperas $1/p$ ensayos hasta el primero (con $p = 1/6$, $1/p = 6$ lanzamientos hasta el primer seis).

**Ejemplo.** Un juego paga $\$10$ con probabilidad $0.2$ y cuesta $\$3$ jugar. La ganancia neta $X$ vale $10 - 3 = 7$ con probabilidad $0.2$ y $-3$ con probabilidad $0.8$. Entonces $E[X] = 7(0.2) + (-3)(0.8) = 1.4 - 2.4 = -1$: en promedio pierdes un dólar por jugada.

### Varianza y desviación estándar

La esperanza no dice nada sobre qué tan dispersos son los valores: $\{0, 10\}$ y $\{5, 5\}$ pueden tener la misma media. La **varianza** mide dispersión: el promedio de las desviaciones al cuadrado respecto de la media:

$$\text{Var}(X) = E\left[(X - \mu)^2\right] = E[X^2] - (E[X])^2.$$

Las dos fórmulas dan lo mismo; la segunda (conocida como "fórmula computacional") suele ser más cómoda. El cuadrado garantiza que las desviaciones positivas y negativas no se cancelen y que las grandes pesen más. La **desviación estándar** es su raíz:

$$\sigma = \sqrt{\text{Var}(X)},$$

y está en las mismas unidades que $X$, por eso es la más interpretable: si $X$ son centímetros, $\sigma$ son centímetros, mientras que $\sigma^2$ son centímetros cuadrados.

**Propiedades:**
- $\text{Var}(aX + b) = a^2 \text{Var}(X)$. La constante $b$ (sumar) no cambia la dispersión; el factor $a$ (multiplicar) la escala al cuadrado.
- Si $X$ e $Y$ son **independientes**, $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$. Si no lo son, aparece un término extra de covarianza (ver la sección siguiente). Nótese el contraste: la esperanza siempre es aditiva; la varianza solo con independencia.

**Varianzas de las distribuciones notables:**

| Distribución | Varianza |
|---|---|
| Bernoulli$(p)$ | $p(1-p)$ |
| Binomial$(n, p)$ | $np(1-p)$ |
| Geométrica$(p)$ | $(1-p)/p^2$ |
| Poisson$(\lambda)$ | $\lambda$ |
| Uniforme$(a, b)$ | $(b-a)^2/12$ |
| Exponencial$(\lambda)$ | $1/\lambda^2$ |
| Normal$(\mu, \sigma^2)$ | $\sigma^2$ |

**Ejemplo.** Binomial con $n = 10$ y $p = 0.3$: $E[X] = 10(0.3) = 3$, $\text{Var}(X) = 10(0.3)(0.7) = 2.1$, $\sigma = \sqrt{2.1} \approx 1.45$.

## Distribuciones conjuntas y covarianza

Hasta ahora hemos mirado una variable a la vez. Pero a menudo importan dos o más juntas: la altura y el peso de una persona, el precio de dos acciones, la nota en dos exámenes.

### Distribución conjunta y marginales

La **distribución conjunta** de dos discretas $X$ e $Y$ es la tabla (o función) que da las probabilidades de todas las parejas:

$$p(x, y) = P(X = x \;\text{y}\; Y = y),$$

con la condición de que la suma de toda la tabla sea 1: $\sum_x \sum_y p(x,y) = 1$ (suma doble: se suma sobre $x$ y sobre $y$). En el caso continuo hay una **densidad conjunta** $f(x, y)$ que integra a 1.

De la conjunta se recuperan las distribuciones de cada variable por separado, las **marginales**, sumando (o integrando) sobre la otra variable:

$$p_X(x) = \sum_y p(x, y), \qquad p_Y(y) = \sum_x p(x, y).$$

"Marginal" viene de que en las tablas de probabilidad los totales se escribían en los márgenes. La conjunta también permite construir las **condicionales**: $P(Y = y \mid X = x) = \frac{p(x,y)}{p_X(x)}$, la regla de la probabilidad condicional aplicada a variables.

**Independencia de variables:** $X$ e $Y$ son independientes si y solo si $p(x, y) = p_X(x) p_Y(y)$ para toda pareja $(x, y)$: la tabla es el producto de sus márgenes.

### Covarianza

La **covarianza** mide la tendencia de dos variables a moverse juntas: ¿cuando $X$ está por encima de su media, $Y$ suele estarlo también? Su definición:

$$\text{Cov}(X, Y) = E\left[(X - E[X])(Y - E[Y])\right] = E[XY] - E[X]E[Y].$$

Si la covarianza es **positiva**, valores altos de $X$ tienden a acompañarse de valores altos de $Y$ (altura y peso). Si es **negativa**, van en direcciones opuestas (precio y demanda). Si es **cero**, no hay tendencia lineal. Nota la asimetría con la esperanza: la esperanza de la suma siempre es la suma de esperanzas; la varianza de la suma es

$$\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) + 2\text{Cov}(X, Y).$$

Con independencia la covarianza es 0 y recuperamos la fórmula corta.

**Relación con la independencia:** independencia $\Rightarrow$ covarianza cero, pero **el recíproco es falso**: puede haber covarianza cero con dependencia (por ejemplo $Y = X^2$ con $X$ simétrica respecto al 0). Covarianza cero solo significa "sin relación lineal".

### Correlación

La covarianza tiene un defecto: depende de las unidades. La **correlación** $\rho$ (letra griega rho) la normaliza:

$$\rho = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y},$$

donde $\sigma_X$ y $\sigma_Y$ son las desviaciones estándar de cada variable. Siempre cae en el intervalo $-1 \leq \rho \leq 1$. Los extremos tienen significado exacto: $\rho = 1$ significa relación lineal perfecta creciente ($Y = aX + b$ con $a > 0$), $\rho = -1$ relación lineal perfecta decreciente, $\rho = 0$ ausencia de relación lineal. La correlación es adimensional y comparable entre pares de variables distintas; es la medida de asociación más usada.

**Ejemplo.** Una urna tiene 3 bolas rojas y 2 azules; se extraen 2 sin reposición. Sea $X$ el número de rojas en la primera extracción e $Y$ en la segunda. Si la primera es roja, quedan menos rojas para la segunda: la covarianza es negativa, porque más rojas en la primera extracción reduce la probabilidad de roja en la segunda.

## Transformaciones y funciones generadoras

### Transformaciones: si $Y = g(X)$, ¿cuál es su distribución?

Dada la distribución de $X$ y una función $g$, queremos la de $Y = g(X)$.

**Caso discreto:** es directo. Si $g(x)$ no es inyectiva (varios $x$ pueden mapear al mismo $y$), se suman las probabilidades de todas las preimágenes:

$$P(Y = y) = \sum_{x:\, g(x) = y} p_X(x).$$

La notación "$x: g(x) = y$" se lee "todos los $x$ tales que $g(x) = y$". Por ejemplo, si $Y = X^2$ y $X$ toma valores $-2, -1, 0, 1, 2$ equiprobables, entonces $P(Y = 1) = P(X = -1) + P(X = 1) = 2/5$.

**Caso continuo:** hay dos técnicas estándar:
1. **Método de la función de distribución:** calcula primero $F_Y(y) = P(Y \leq y) = P(g(X) \leq y)$, expresándolo en términos de $F_X$, y luego deriva para obtener la densidad: $f_Y(y) = F_Y'(y)$.
2. **Cambio de variable:** si $g$ es estrictamente creciente o decreciente, $f_Y(y) = f_X(g^{-1}(y)) \left|\frac{d}{dy} g^{-1}(y)\right|$, donde $g^{-1}$ es la función inversa y las barras $|\cdot|$ son valor absoluto. En varias dimensiones el factor se generaliza al **jacobiano** (el determinante de la matriz de derivadas parciales).

### Función generadora de momentos

La **función generadora de momentos** (fgm) de $X$ es

$$M_X(t) = E\left[e^{tX}\right],$$

es decir, la esperanza de la función $e^{tX}$, calculada con la masa o densidad de $X$: $M_X(t) = \sum_x e^{tx} p(x)$ o $M_X(t) = \int e^{tx} f(x)\,dx$. ¿Para qué sirve? Para extraer "momentos" (los momentos son las esperanzas $E[X]$, $E[X^2]$, $E[X^3]$, ...): al derivar respecto de $t$ y evaluar en $t = 0$:

$$M'_X(0) = E[X], \qquad M''_X(0) = E[X^2],$$

y en general la $n$-ésima derivada en 0 da $E[X^n]$. Además, la fgm **determina la distribución**: dos variables con la misma fgm tienen la misma distribución. Por eso es una herramienta poderosa para probar teoremas.

**Ejemplo clave.** La fgm de la normal $N(\mu, \sigma^2)$ es $M(t) = e^{\mu t + \sigma^2 t^2/2}$. Con ella se prueba el resultado más usado de la teoría: la **suma de normales independientes es normal**, con medias sumadas y varianzas sumadas: $X \sim N(\mu_1, \sigma_1^2)$, $Y \sim N(\mu_2, \sigma_2^2)$ independientes implican $X + Y \sim N(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$. Esta propiedad ("estabilidad bajo suma") la comparten la normal, la Poisson y la binomial.

**Aplicación práctica: la transformación de Box–Muller.** Para simular una normal estándar en una computadora se parte de dos uniformes independientes $U_1, U_2$ en $(0,1)$ y se aplica

$$Z_1 = \sqrt{-2\ln U_1} \cos(2\pi U_2), \qquad Z_2 = \sqrt{-2\ln U_1} \sin(2\pi U_2),$$

donde $\ln$ es el logaritmo natural, $\cos$ y $\sin$ las funciones trigonométricas, y $\pi$ el número pi. El resultado: $Z_1$ y $Z_2$ son normales estándar independientes. Toda la simulación estocástica moderna (Montecarlo, machine learning) descansa en transformaciones como esta.

## Teorema central del límite

El **teorema central del límite** (abreviado TCL) es probablemente el resultado más importante de la probabilidad, porque explica por qué la campana de Gauss aparece en todas partes. Su enunciado:

> Si $X_1, X_2, \ldots, X_n$ son variables aleatorias **independientes** con la **misma distribución** (se dice i.i.d., "independientes e idénticamente distribuidas"), con media común $\mu$ y varianza común $\sigma^2$ finita, entonces, cuando $n$ es grande, la **media muestral**
>
> $$\bar{X}_n = \frac{X_1 + X_2 + \cdots + X_n}{n}$$
>
> tiene aproximadamente distribución normal con media $\mu$ y varianza $\sigma^2/n$. Equivalentemente, la cantidad estandarizada
>
> $$\frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \xrightarrow{d} N(0, 1),$$
>
> es decir, se aproxima a la normal estándar cuando $n$ crece (la flecha con la letra $d$ se lee "converge en distribución").

**Qué dice en palabras llanas:** no importa qué forma tenga la distribución original (puede ser un dado uniforme, una binomial sesgada, cualquier cosa con varianza finita); si promediamos muchos valores independientes, el promedio se comporta como una normal centrada en $\mu$ y cada vez más concentrada (porque su desviación es $\sigma/\sqrt{n}$, que se encoge al crecer $n$). La normal es un "atractor" de los promedios.

**Por qué explica la omnipresencia de la normal:** casi cualquier cantidad real (estatura, errores de medición, tiempos de servicio, rendimientos de un portafolio) es la suma de muchos pequeños factores independientes. El TCL dice que esa suma, estandarizada, se ve normal. De ahí que la normal aparezca por todos lados, sin que nadie la "ponga" a propósito.

**Condiciones que no se pueden ignorar:**
- **Varianza finita:** si la distribución tiene colas demasiado pesadas (varianza infinita, como la de Cauchy), el TCL falla: los promedios no convergen a la normal.
- **Independencia:** dependencia fuerte también lo rompe; en series temporales se necesitan versiones del TCL para datos dependientes.
- **Qué tan grande es "grande":** si la distribución original es muy asimétrica, $n$ debe ser mayor. Reglas prácticas: con $n \geq 30$ la aproximación suele ser aceptable; si la población original es simétrica, con $n \geq 15$ ya va bien.

**Ejemplo.** Se lanza un dado 100 veces y se suma. La esperanza de la suma es $100 \cdot 3.5 = 350$. La varianza de un dado es $35/12 \approx 2.917$, así que la desviación de la suma es $\sqrt{100 \cdot 35/12} \approx 17.08$. Sin el TCL, calcular la probabilidad de que la suma supere 380 requeriría enumerar astronómicamente muchas configuraciones; con el TCL basta estandarizar: $z = \frac{380 - 350}{17.08} \approx 1.76$, y $P(Z > 1.76) \approx 0.039$. Solo un 3.9% de las veces.

## Ejemplos resueltos

**Ejemplo 1 (discreta, construcción).** Sea $X$ la suma de dos dados. ¿Cuál es su masa? ¿$P(X = 7)$? ¿$E[X]$?

*Solución.* $X$ puede valer de 2 a 12. Hay 36 resultados equiprobables. Para cada suma $k$, el número de formas es $6 - |k - 7|$ (por ejemplo, suma 7: las parejas $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$, seis formas). Entonces $P(X = 7) = 6/36 = 1/6$. Por simetría, $E[X] = 7$.

**Ejemplo 2 (Poisson).** Una central recibe en promedio 3 llamadas por minuto. ¿$P(\text{exactamente 5 en un minuto})$?

*Solución.* $X \sim \text{Poisson}(3)$, con $\lambda = 3$. $P(X = 5) = \frac{e^{-3} 3^5}{5!} = \frac{e^{-3} \cdot 243}{120} \approx 0.1008$.

**Ejemplo 3 (exponencial).** Un foco tiene vida media de 1000 horas: $\lambda = 1/1000$. ¿$P(\text{dura más de 2000 h})$?

*Solución.* $P(X > 2000) = e^{-\lambda \cdot 2000} = e^{-2} \approx 0.1353$. Solo un 13.5% de los focos supera las 2000 horas.

**Ejemplo 4 (esperanza, aplicación financiera).** Un seguro paga $\$50\,000$ si ocurre un evento de probabilidad $0.002$. ¿Cuál es el pago esperado? ¿Cuál es la prima justa?

*Solución.* $E[\text{pago}] = 50000 \cdot 0.002 = 100$. La prima actuarialmente justa es $\$100$ (en la práctica se añaden gastos y margen). La esperanza es la herramienta para "ponerle precio al riesgo".

**Ejemplo 5 (normal, estandarización).** Puntajes con $\mu = 500$ y $\sigma = 100$. ¿Qué porcentaje supera los 700?

*Solución.* $z = \frac{700 - 500}{100} = 2$. De la tabla normal estándar, $P(Z > 2) \approx 0.0228$: un $2.28\%$.

**Ejemplo 6 (TCL, aplicación).** El tiempo de atención de un cliente tiene media 10 minutos y desviación 3 minutos. ¿Probabilidad de que 50 clientes tarden en promedio más de 11 minutos?

*Solución.* La media muestral $\bar{X}_{50}$ tiene media 10 y desviación $3/\sqrt{50} \approx 0.424$. Estandarizamos: $z = \frac{11 - 10}{0.424} \approx 2.36$. Entonces $P(\bar{X} > 11) = P(Z > 2.36) \approx 0.009$: menos del 1%, muy improbable.

## Errores comunes y cómo evitarlos

- **Calcular $E[X^2]$ como $(E[X])^2$.** Falso salvo que la varianza sea cero. Siempre: $E[X^2] = \sum x^2 p(x)$, calculado con los cuadrados de los valores, no con el cuadrado del promedio. Ejemplo: dados 1 y 3 equiprobables, $E[X^2] = 5$ pero $(E[X])^2 = 4$.
- **Creer que covarianza cero implica independencia.** Solo es válida la implicación contraria: independencia $\Rightarrow$ covarianza cero. Hay pares dependientes con covarianza nula (p. ej. $Y = X^2$ con $X$ simétrica alrededor de 0). La excepción: en la normal bivariada, covarianza cero sí equivale a independencia.
- **Usar la densidad como probabilidad puntual.** En continuas, $f(x)$ no es $P(X = x)$; la probabilidad de un punto es 0. La densidad puede incluso superar 1 sin violar nada, porque lo que suma 1 es el área. Solo las integrales de la densidad son probabilidades.
- **Aplicar el TCL sin verificar condiciones.** Varianza infinita o dependencia fuerte lo invalidan. El TCL no es magia: exige independencia y varianza finita, y $n$ suficientemente grande según la asimetría.
- **Confundir varianza con desviación estándar.** La varianza está en unidades al cuadrado; la desviación estándar, en las unidades originales de $X$. Al comparar con la media, usa $\sigma$, no $\sigma^2$. Y recuerda que en la notación $N(\mu, \sigma^2)$ el segundo parámetro es la varianza.
- **Olvidar el dominio de la variable.** La geométrica empieza en 1, la Poisson en 0, la exponencial solo está definida para $x \geq 0$. Escribir $k = 0$ en la geométrica o $x < 0$ en la exponencial es un error inmediato.
- **Sumar varianzas sin independencia.** $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$ exige independencia; en general falta el término $2\text{Cov}(X, Y)$.
- **Confundir $P(X > k)$ con $P(X \geq k)$.** En discretas difieren en una masa: $P(X \geq k) = P(X > k) + P(X = k)$. En continuas da igual, porque los puntos pesan cero.

## Ejercicios propuestos (con respuestas)

1. $X$ uniforme en $\{1, 2, \ldots, 6\}$ (discreta). Calcula $E[X]$ y $\text{Var}(X)$.
2. Binomial con $n = 20$, $p = 0.4$: calcula $P(X = 8)$.
3. Poisson con $\lambda = 2$: calcula $P(X \geq 1)$.
4. Exponencial con $\lambda = 0.5$: calcula $P(X > 4)$.
5. Suma de dos dados: calcula su media y su varianza.
6. Con $n = 100$, $\mu = 500$, $\sigma = 100$, calcula $P(490 \leq \bar{X} \leq 510)$ usando el TCL.
7. Si $Y = 2X + 1$, ¿cuánto vale $\text{Cov}(X, Y)$ en términos de la varianza de $X$?
8. ¿Por qué aparece tanto la normal en la naturaleza y en los datos?

**Respuestas:**
1. $E[X] = 3.5$; $\text{Var}(X) = 35/12 \approx 2.917$.
2. $P(X = 8) = \binom{20}{8}(0.4)^8(0.6)^{12} \approx 0.1797$.
3. $P(X \geq 1) = 1 - P(X = 0) = 1 - e^{-2} \approx 0.8647$.
4. $P(X > 4) = e^{-0.5 \cdot 4} = e^{-2} \approx 0.1353$.
5. $E[X] = 7$; $\text{Var}(X) = 35/6 \approx 5.833$ (se duplica la varianza de un dado porque los lanzamientos son independientes).
6. Estandarizando: $z = \pm \frac{10}{100/\sqrt{100}} = \pm 1$; $P(-1 \leq Z \leq 1) \approx 0.6826$.
7. $\text{Cov}(X, 2X + 1) = 2\text{Cov}(X, X) = 2\text{Var}(X)$.
8. Por el TCL: muchas cantidades son sumas de factores pequeños independientes, y el TCL garantiza que tales sumas se aproximan a la normal; además la normal es estable bajo sumas.

## Resumen

- Una **variable aleatoria** es la regla que convierte resultados en números; discreta si toma valores contables, continua si llena intervalos.
- La **masa** $p(x) = P(X = x)$ describe discretas; la **densidad** $f(x)$ describe continuas y las probabilidades son áreas (integrales) bajo su curva; la **distribución** $F(x) = P(X \leq x)$ acumula.
- Distribuciones discretas notables: **Bernoulli** (un ensayo), **binomial** (éxitos en $n$ ensayos), **geométrica** (ensayos hasta el primer éxito), **Poisson** (eventos con tasa $\lambda$).
- Distribuciones continuas notables: **uniforme** (ignorancia total), **exponencial** (tiempos de espera, sin memoria), **normal** (campana de Gauss, regla 68–95–99.7).
- La **esperanza** es el promedio ponderado y es lineal siempre; la **varianza** $E[(X-\mu)^2]$ mide dispersión y solo es aditiva con independencia.
- La **conjunta** describe pares; las **marginales** salen sumando la otra variable; la **covarianza** y la **correlación** $\rho \in [-1, 1]$ miden asociación lineal.
- Las **transformaciones** y la **función generadora de momentos** permiten derivar distribuciones nuevas y probar teoremas.
- El **TCL** dice que las medias muestrales son aproximadamente normales para $n$ grande; explica la ubicuidad de la normal y sostiene toda la inferencia estadística.
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
## ¿Qué es estimar?

Imagina que quieres saber la altura promedio de todos los estudiantes de tu universidad, pero no puedes medir a los 50.000: te tomaría meses y costaría una fortuna. Lo que haces es medir a 200 elegidos al azar y, con esos 200 números, "adivinar" cuál es el promedio de los 50.000. Ese acto de adivinar de manera inteligente, usando una regla matemática clara, se llama **estimar**.

La estadística matemática es la rama que estudia precisamente esto: cómo construir buenas reglas para adivinar, cómo medir qué tan buena es una regla, y cómo decir con cuánta confianza podemos hacer afirmaciones sobre lo que no observamos.

Necesitamos tres ingredientes básicos:

- La **población**: el conjunto completo que nos interesa (los 50.000 estudiantes). Casi nunca la observamos entera.
- La **muestra**: el subconjunto que sí observamos (los 200 medidos). Se denota $X_1, X_2, \ldots, X_n$, donde $n$ es el tamaño de la muestra. Cada $X_i$ es el dato del individuo número $i$. En la muestra, cada $X_i$ es una variable aleatoria (antes de medir, el resultado es azar); los valores concretos observados se suelen escribir con minúscula: $x_1, \ldots, x_n$.
- El **parámetro**: el número desconocido de la población que queremos descubrir. Se denota con la letra griega **theta**, $\theta$. Es un número fijo pero desconocido: la altura promedio real $\mu$ (mu), la proporción $p$, la varianza $\sigma^2$ (sigma al cuadrado), etc. Todos son casos particulares de $\theta$.

Un **estimador** es la regla (la fórmula) que convierte la muestra en una adivinanza del parámetro. Se denota con un sombrero sobre la letra: $\hat{\theta}$ (se lee "theta sombrero"). El sombrero significa "esto es una adivinanza de theta, calculada con los datos". Por ejemplo:

- Si queremos estimar la media $\mu$, el estimador natural es el promedio de la muestra: $\bar{X} = \frac{1}{n}\sum_{i=1}^{n} X_i$. La barra sobre la letra se lee "promedio"; el símbolo $\sum_{i=1}^{n}$ significa "suma desde $i = 1$ hasta $i = n$".
- Si queremos estimar una proporción $p$ (por ejemplo, qué fracción de estudiantes usa lentes), el estimador es $\hat{p} = \frac{\text{número de éxitos}}{n}$.

Ojo con la distinción clave: el **estimador** es la fórmula (una función de la muestra), mientras que la **estimación** es el número concreto que sale cuando sustituyes los datos reales. El estimador es una variable aleatoria (cambia de muestra en muestra); la estimación es un número fijo (ya calculado).

Un detalle de notación: muchas veces el estimador depende de $n$ datos y lo escribimos como función $\hat{\theta} = \hat{\theta}(X_1, \ldots, X_n)$. La idea de "estimar bien" es que, en promedio o con probabilidad alta, $\hat{\theta}$ esté cerca de $\theta$.

## Cómo leer la notación

Antes de avanzar, traduzcamos los símbolos que aparecerán una y otra vez. Léelo sin prisa; cada uno se explica aquí la primera vez que lo usamos.

- $X_1, \ldots, X_n$: los $n$ datos de la muestra, vistos como variables aleatorias. El subíndice $i$ sirve para numerarlos: $X_1$ es el primero, $X_n$ el último.
- $x_1, \ldots, x_n$: los valores concretos observados de esa muestra.
- $\theta$: el parámetro desconocido (número fijo).
- $\hat{\theta}$: el estimador, la fórmula que adivina $\theta$ con los datos.
- $E[\cdot]$: la **esperanza** o valor esperado, es decir, el promedio que se obtendría repitiendo el experimento infinitas veces. Por ejemplo, si lanzas una moneda que da 1 (cara) con probabilidad $p$ y 0 con probabilidad $1-p$, entonces $E[X] = p$.
- $\text{Var}(\cdot)$: la **varianza**, medida de cuánto se dispersa la variable alrededor de su promedio. Si es pequeña, la variable casi siempre cae cerca de su media; si es grande, salta lejos.
- $f(x; \theta)$ o $f(x \mid \theta)$: la función de densidad (si $X$ es continua) o de masa (si es discreta) de una observación. Dice qué tan probable es observar el valor $x$ cuando el parámetro vale $\theta$. El punto y coma separa el dato (lo que cambia) del parámetro (lo que fija el modelo).
- $L(\theta)$: la **función de verosimilitud**, el corazón de este tema. Se define más abajo, pero adelanto: es la probabilidad conjunta de haber observado justo la muestra que vimos, pensada como función del parámetro.
- $\ln$: logaritmo natural (base $e \approx 2.718$). Lo usamos porque transforma productos en sumas y hace las derivadas fáciles.
- $\frac{\partial}{\partial \theta}$: derivada parcial respecto a $\theta$. Si no conoces derivadas parciales, piensa: "derivar respecto a $\theta$ tratando lo demás como constante". Para este curso casi siempre hay un solo parámetro y se reduce a la derivada normal.
- $I(\theta)$: la **información de Fisher** del modelo. Mide cuánta información aporta una observación sobre $\theta$. Cuanto más grande, más fácil es estimar $\theta$ con precisión.
- $n$: tamaño de la muestra. Casi todo mejora cuando $n$ crece.
- $P(\cdot)$: probabilidad de un evento.
- $1\!\!1_A$ o $\mathbb{1}_A$: la función **indicadora** del evento $A$; vale 1 si $A$ ocurre y 0 si no. Sirve para "encender y apagar" partes de una fórmula.
- $\arg\max$: se lee "argumento que maximiza". $\hat{\theta} = \arg\max_\theta L(\theta)$ significa: $\hat{\theta}$ es el valor de $\theta$ que hace a $L$ lo más grande posible.
- $N(\mu, \sigma^2)$: la distribución **normal** (campana de Gauss) con media $\mu$ y varianza $\sigma^2$.
- $\chi^2$: la distribución **ji-cuadrado** (chi-cuadrado), que aparece al final en las pruebas de hipótesis.

Con este vocabulario podemos entender todo lo que sigue. La idea general del curso: dados los datos, ¿cuál es la mejor manera de adivinar $\theta$? y ¿qué tan buena es esa adivinanza?

## Propiedades de los estimadores

Hay infinitas fórmulas que podrían "adivinar" un parámetro. Para saber cuáles son buenas, usamos tres propiedades deseables.

**1. Insesgamiento.** Un estimador es **insesgado** si, en promedio, acierta:
$$E[\hat{\theta}] = \theta$$
Se lee: la esperanza del estimador es exactamente el parámetro. Si lanzas el dado del muestreo muchas veces, el promedio de tus adivinanzas cae sobre el valor verdadero. La diferencia entre el promedio de la adivinanza y el valor verdadero se llama **sesgo**:
$$\text{sesgo}(\hat{\theta}) = E[\hat{\theta}] - \theta$$
Si el sesgo es cero, el estimador es insesgado; si es positivo, en promedio se pasa (adivina de más); si es negativo, se queda corto.

Ejemplo estrella: la varianza. Si defines la varianza muestral con denominador $n$,
$$S_n^2 = \frac{1}{n}\sum_{i=1}^{n}(X_i - \bar{X})^2,$$
resulta que $E[S_n^2] = \frac{n-1}{n}\sigma^2$, es decir, en promedio se queda corta: su sesgo es $-\sigma^2/n$. Por eso los libros usan la corrección de Bessel con $n-1$:
$$S^2 = \frac{1}{n-1}\sum_{i=1}^{n}(X_i - \bar{X})^2,$$
que sí cumple $E[S^2] = \sigma^2$. Ese misterioso $n-1$ del colegio tiene esta explicación exacta: corrige el sesgo.

**2. Consistencia.** Un estimador es **consistente** si, cuando la muestra crece, la adivinanza se acerca al valor verdadero:
$$\hat{\theta} \xrightarrow{P} \theta \quad \text{cuando } n \to \infty$$
La flecha con la $P$ se lee "converge en probabilidad": la probabilidad de que $\hat{\theta}$ esté lejos de $\theta$ tiende a cero. Es la propiedad mínima de sensatez: con más datos, mejor adivinanza. La media muestral es consistente para $\mu$ por la **ley de los grandes números** (el promedio empírico se estabiliza en el promedio teórico).

**3. Eficiencia.** Entre dos estimadores insesgados, es mejor el que tenga **menor varianza**, porque varía menos de muestra en muestra y por tanto sus adivinanzas están más concentradas cerca de $\theta$. El estimador con la menor varianza posible entre los insesgados se llama **eficiente**. La varianza de un estimador mide cuánto "temblor" tiene la adivinanza; queremos el temblor mínimo.

**La síntesis: el error cuadrático medio (ECM).** ¿Y si un estimador tiene un poco de sesgo pero mucha menos varianza? ¿Cómo comparar? El ECM combina ambas penalizaciones:
$$\text{ECM}(\hat{\theta}) = E\left[(\hat{\theta} - \theta)^2\right] = \text{Var}(\hat{\theta}) + \left(\text{sesgo}(\hat{\theta})\right)^2$$
Se lee: el error cuadrático medio esperado se descompone en varianza más el cuadrado del sesgo. Es una fórmula fundamental: el error total = temblor + desviación sistemática al cuadrado. A veces conviene un estimador ligeramente sesgado si su varianza es mucho menor; el ECM decide.

Resumen operativo: al evaluar un estimador, pregunta (a) ¿en promedio acierta? (sesgo), (b) ¿se acerca con más datos? (consistencia), (c) ¿tiembla poco? (varianza/eficiencia), y (d) ¿cuál es su ECM total?

## Suficiencia

Supón que tienes 100 datos y alguien te ofrece quedarse con un solo resumen de ellos. ¿Qué resumen elegirías para no perder información sobre $\theta$? La teoría de la **suficiencia** responde exactamente esta pregunta.

Un estadístico $T(X_1, \ldots, X_n)$ (una función de la muestra que resume los datos en un número o en un vector pequeño) es **suficiente** para $\theta$ si contiene toda la información de la muestra sobre $\theta$. La definición técnica: la distribución de los datos condicionada a conocer $T$ **no depende de $\theta$**. Es decir, una vez que sabes $T$, el resto de los datos son "puro ruido" sin nada más que decir sobre el parámetro.

**El criterio de factorización (teorema de Neyman-Fisher)** convierte la definición abstracta en un cálculo directo. $T$ es suficiente para $\theta$ si y solo si la verosimilitud puede factorizarse así:
$$L(\theta; x) = g(T(x), \theta) \cdot h(x)$$
Traducción: la probabilidad conjunta de los datos se escribe como el producto de dos piezas. La primera pieza, $g$, depende de los datos **solo a través del resumen** $T(x)$ y del parámetro $\theta$. La segunda pieza, $h$, depende de los datos pero **no** de $\theta$. Si logras esa descomposición, ya está: $T$ es suficiente.

Ejemplos clásicos:

- Para una normal con $\sigma$ conocida y parámetro $\mu$, el promedio $\bar{X}$ es suficiente: todo lo que los datos dicen sobre $\mu$ pasa por $\bar{X}$.
- Para datos de Poisson con tasa $\lambda$, la suma total $\sum_{i=1}^n X_i$ es suficiente (o, equivalentemente, $\bar{X}$).
- Para una uniforme en el intervalo $(0, \theta)$ — datos repartidos uniformemente entre 0 y un tope desconocido — el **máximo** de la muestra, $\max(X_1, \ldots, X_n)$, es suficiente. Intuitivo: si el tope es $\theta$, lo único que importa es cuál fue el dato más grande observado.

**El teorema de Rao-Blackwell** es la joya de esta sección: si tienes un estimador insesgado cualquiera y un estadístico suficiente $T$, entonces el estimador que resulta de **condicionar en $T$** (es decir, promediar tu estimador sobre todos los reordenamientos de los datos compatibles con $T$) sigue siendo insesgado y tiene varianza menor o igual:
$$\hat{\theta}^* = E[\hat{\theta} \mid T] \quad \Rightarrow \quad \text{Var}(\hat{\theta}^*) \leq \text{Var}(\hat{\theta})$$
Se lee: la esperanza del estimador original condicionada a conocer $T$ produce un estimador mejorado. Es una máquina gratuita de mejora: toma cualquier adivinanza insesgada, "exprímela" a través del resumen suficiente y obtienes una adivinanza que tiembla menos. Ejemplo: si $X_1$ es el primer lanzamiento de una moneda y lo usas como adivinanza de $p$ (insesgado pero burdo), el condicionamiento en $T = \sum X_i$ produce el promedio $\bar{X}$, que tiene varianza $p(1-p)/n$, mucho menor que la de un solo lanzamiento, $p(1-p)$.

## Máxima verosimilitud paso a paso

Este es el método más importante de toda la estadística. La filosofía es directa: **elige el valor del parámetro que hace más probable lo que observaste**. Si los datos que viste son $x_1, \ldots, x_n$, ¿bajo cuál valor de $\theta$ habría sido más probable verlos exactamente así? Ese valor es la adivinanza.

**Paso 0: ¿qué es la función de verosimilitud?** Es la probabilidad (o densidad) conjunta de los datos, pensada como función de $\theta$:
$$L(\theta) = \prod_{i=1}^{n} f(x_i; \theta)$$
El símbolo $\prod_{i=1}^{n}$ significa "producto desde $i=1$ hasta $n$", igual que $\sum$ pero multiplicando. El producto aparece porque los datos se suponen independientes: la probabilidad conjunta de eventos independientes es el producto de las probabilidades individuales. Cuidado con la diferencia sutil: en $f(x; \theta)$ el dato $x$ está fijo (ya lo observaste) y lo que varía es $\theta$. La verosimilitud es una función del parámetro, no del dato.

**Paso 1: escribe la verosimilitud.** Con el modelo en mano (normal, Poisson, exponencial...), escribe $L(\theta)$ como producto de las densidades evaluadas en los datos.

**Paso 2: toma logaritmo.** En lugar de maximizar $L$, maximizamos $\ell(\theta) = \ln L(\theta)$ (la "log-verosimilitud"). Como el logaritmo es una función creciente, el punto donde $L$ alcanza su máximo es el mismo donde lo alcanza $\ell$. La ventaja es enorme: el producto se convierte en suma:
$$\ell(\theta) = \ln L(\theta) = \sum_{i=1}^{n} \ln f(x_i; \theta)$$
y las sumas son mucho más fáciles de derivar que los productos.

**Paso 3: deriva e iguala a cero.** El máximo de una función diferenciable ocurre donde su pendiente es horizontal, es decir, donde la derivada se anula:
$$\frac{\partial \ell}{\partial \theta} = 0$$
La solución de esta ecuación (llamada ecuación de verosimilitud o ecuación de score) es el candidato $\hat{\theta}_{MV}$. El apellido "MV" significa "máxima verosimilitud".

**Paso 4: verifica que es máximo.** Calcula la segunda derivada en el punto candidato: si es negativa, la curva tiene forma de montaña y el punto es un máximo. Si es positiva, es un mínimo (y hay que mirar los bordes del dominio del parámetro).

**Los resultados clásicos** que conviene memorizar:

- Normal con $\sigma$ conocida: $\hat{\mu}_{MV} = \bar{X}$ (el promedio).
- Normal con ambos parámetros desconocidos: $\hat{\mu}_{MV} = \bar{X}$ y $\hat{\sigma}^2_{MV} = \frac{1}{n}\sum (X_i - \bar{X})^2$. ¡Ojo! El de la varianza usa $n$ (no $n-1$) y por eso es ligeramente sesgado.
- Poisson: $\hat{\lambda}_{MV} = \bar{X}$.
- Exponencial: $\hat{\lambda}_{MV} = 1/\bar{X}$ (el inverso del promedio).
- Bernoulli (moneda con probabilidad $p$): $\hat{p}_{MV} = \bar{X}$ (la frecuencia de éxitos).
- Uniforme $(0, \theta)$: $\hat{\theta}_{MV} = \max(X_1, \ldots, X_n)$. Aquí no hay derivada que valga: la verosimilitud es $L(\theta) = 1/\theta^n$ siempre que todos los datos sean menores que $\theta$ (porque si algún dato supera a $\theta$, la densidad es cero y la verosimilitud se anula). Como $1/\theta^n$ decrece al crecer $\theta$, el mejor $\theta$ es el menor posible que aún admita los datos: justo el máximo observado.

**Propiedades de MV** (por qué es el rey): el estimador de máxima verosimilitud es **consistente** y, cuando $n$ es grande, su distribución se acerca a una normal centrada en $\theta$ con la mínima varianza posible (es **asintóticamente eficiente**). El precio: en muestras pequeñas puede ser sesgado (como vimos con $\hat{\sigma}^2$). Aun así, para casi todo modelo razonable, MV es la respuesta estándar.

## Método de momentos

Hay un método mucho más tosco pero bellísimo por su simplicidad: el **método de momentos**. La idea es una ecuación: "lo que la teoría dice en promedio, debe igualar lo que la muestra da en promedio".

Los **momentos poblacionales** son los promedios teóricos: $E[X]$, $E[X^2]$, $E[X^3]$, ... (el momento de orden $k$ es $E[X^k]$). Los **momentos muestrales** son los promedios empíricos: $\frac{1}{n}\sum X_i$, $\frac{1}{n}\sum X_i^2$, $\frac{1}{n}\sum X_i^3$, ...

El método consiste en **igualar** tantos momentos como parámetros haya y **resolver**:
$$E[X^k] = \frac{1}{n}\sum_{i=1}^{n} X_i^k, \qquad k = 1, 2, \ldots$$
Por ejemplo, si hay un solo parámetro, igualamos $E[X]$ con el promedio muestral y despejamos. Si hay dos, igualamos además $E[X^2]$ con el promedio de los cuadrados.

Ejemplos:

- Uniforme $(0, \theta)$: la teoría dice $E[X] = \theta/2$ (el punto medio del intervalo). Igualando con el promedio muestral: $\theta/2 = \bar{X}$, de donde $\hat{\theta} = 2\bar{X}$.
- Exponencial: $E[X] = 1/\lambda$, luego $\hat{\lambda} = 1/\bar{X}$ (aquí coincide con MV).
- Bernoulli: $E[X] = p$, luego $\hat{p} = \bar{X}$ (también coincide).
- Poisson: $E[X] = \lambda$, luego $\hat{\lambda} = \bar{X}$ (coincide otra vez).

**Ventajas:** es trivial de calcular, no requiere optimizar nada, y sus estimadores suelen ser consistentes (por la ley de los grandes números). **Desventajas:** suele dar estimadores menos eficientes que MV, y a veces produce adivinanzas absurdas. El ejemplo clásico del absurdo: para la uniforme $(0, \theta)$, el método de momentos da $2\bar{X}$, pero si los datos son, digamos, $1, 2, 3, 98$, el promedio es $26$ y la adivinanza $52$, mientras que el dato máximo observado ya es $98$: ¡el estimador dice que el tope es menor que un dato observado, lo cual es imposible! MV da $\max X_i = 98$, siempre sensato. Moraleja: momentos es simple y rápido; MV es más confiable.

## Cota de Cramér-Rao e información de Fisher

Llegamos a la pregunta más profunda: ¿existe un límite absoluto a lo bien que se puede estimar? La respuesta es sí, y la da la **cota de Cramér-Rao**.

**Primero, la información de Fisher.** ¿Cuánto cambia la probabilidad de los datos cuando mueves un poco el parámetro? Si mover $\theta$ cambia mucho la verosimilitud, los datos son muy informativos sobre $\theta$; si casi no cambia, son poco informativos. La información de Fisher cuantifica exactamente esa sensibilidad. Para una sola observación:
$$I(\theta) = E\left[\left(\frac{\partial \ln f(X; \theta)}{\partial \theta}\right)^2\right] = -E\left[\frac{\partial^2 \ln f(X; \theta)}{\partial \theta^2}\right]$$
Leamos pieza por pieza. La derivada $\frac{\partial \ln f}{\partial \theta}$ se llama la **función de score**: mide la pendiente de la log-verosimilitud, es decir, cuánto cambiaría la credibilidad de los datos al mover $\theta$. Elevarla al cuadrado elimina el signo (nos importa la magnitud del cambio) y el promedio $E[\cdot]$ la hace determinista. La segunda igualdad (con el signo menos) es una identidad matemática útil: promediar la curvatura negativa de la log-verosimilitud. En una montaña muy picuda, la curvatura es grande y la información es grande: el pico está bien localizado. En una montaña plana y ancha, la información es poca: muchos valores de $\theta$ son casi igual de creíbles.

**Segundo, la cota.** Bajo ciertas condiciones de regularidad (que el dominio de $\theta$ no dependa del parámetro, entre otras), todo estimador insesgado cumple:
$$\text{Var}(\hat{\theta}) \geq \frac{1}{n\,I(\theta)}$$
Se lee: la varianza de cualquier adivinanza insesgada no puede bajar de ese piso. Es un límite universal de precisión. Un estimador que lo alcanza (varianza exactamente igual al piso) se llama **eficiente**; es el mejor posible, sin discusión. Los estimadores de máxima verosimilitud suelen alcanzar el piso cuando $n$ es grande (asintóticamente), que es otra razón de su prestigio.

**Ejemplos de información de Fisher:**

- Bernoulli: cada observación aporta $I(p) = \frac{1}{p(1-p)}$; la cota para $\hat{p}$ es $\frac{p(1-p)}{n}$, alcanzada justamente por la frecuencia muestral $\bar{X}$. La proporción muestral es eficiente.
- Poisson: $I(\lambda) = 1/\lambda$; la cota es $\lambda/n$, alcanzada por $\bar{X}$.
- Exponencial: $I(\lambda) = 1/\lambda^2$; la cota es $\lambda^2/n$.
- Normal con $\sigma$ conocida y parámetro $\mu$: $I(\mu) = 1/\sigma^2$; la cota es $\sigma^2/n$, alcanzada por $\bar{X}$.

**Advertencia importante:** si el dominio del parámetro depende del propio parámetro (como en la uniforme $(0, \theta)$, donde $\theta$ fija el borde del dominio), las condiciones de regularidad fallan y la cota puede no valer. Por eso la uniforme es el contraejemplo favorito: su estimador de MV, $\max X_i$, tiene varianza que decae como $1/n^2$ (mucho más rápido que $1/n$), superando lo que la cota "permitiría". La cota es una herramienta poderosa, pero hay que verificar sus hipótesis.

## Intervalos y pruebas óptimas

Hasta aquí estimamos un número. Ahora queremos (a) rodear el número con un rango creíble y (b) decidir entre dos hipótesis rivales, de la mejor manera posible.

**Pivotes e intervalos.** Un **pivote** (o cantidad pivotal) es una función de la muestra y del parámetro cuya distribución **no depende de ningún parámetro desconocido**. Por ejemplo, para una población normal con varianza desconocida,
$$T = \frac{\bar{X} - \mu}{S/\sqrt{n}} \sim t_{n-1}$$
Se lee: la diferencia entre el promedio muestral y la media verdadera, dividida por el error estándar estimado ($S/\sqrt{n}$, donde $S$ es la desviación muestral), se distribuye como una $t$ de Student con $n-1$ grados de libertad. Como esa distribución es conocida (está tabulada), podemos construir intervalos: con probabilidad $95\%$, la cantidad $T$ cae entre dos valores tabulados $\pm t^*$, y despejando $\mu$ se obtiene el intervalo
$$\bar{X} \pm t^* \cdot \frac{S}{\sqrt{n}}$$
La lógica del pivote es: atrapa el azar en una cantidad de distribución conocida, y luego "despeja" el parámetro.

**La prueba más potente: lema de Neyman-Pearson.** Queremos decidir entre $H_0$ (hipótesis nula, el "statu quo") y $H_1$ (la alternativa). El error de tipo I es rechazar $H_0$ siendo verdadera, y lo fijamos de antemano en un nivel $\alpha$ (típicamente $0.05$). La **potencia** es la probabilidad de rechazar $H_0$ cuando $H_1$ es verdadera, es decir, la capacidad de detectar la verdad; queremos la máxima potencia posible sin exceder $\alpha$. El lema de Neyman-Pearson dice cuál prueba logra eso cuando ambas hipótesis son simples (cada una fija un valor exacto del parámetro): **compara el cociente de verosimilitudes contra una constante**,
$$\frac{L(\theta_1)}{L(\theta_0)} > c \quad \Rightarrow \quad \text{rechazar } H_0$$
Traducción: mira cuánto más probable hace la alternativa a los datos observados que la nula; si la razón es suficientemente grande (mayor que un umbral $c$ elegido para que el nivel sea $\alpha$), rechaza. Es la manera óptima de decidir: ninguna otra prueba de nivel $\alpha$ tiene más potencia.

**Prueba de razón de verosimilitud (LR) para hipótesis compuestas.** Cuando las hipótesis no son un valor exacto sino conjuntos de valores (por ejemplo $H_0: \theta \leq \theta_0$), se usa la generalización natural. Se comparan el mejor ajuste dentro de $H_0$ contra el mejor ajuste global:
$$\Lambda = \frac{\sup_{H_0} L(\theta)}{\sup_{\Theta} L(\theta)}$$
Aquí $\sup$ significa "supremo", el mayor valor alcanzable: en el numerador, el máximo de la verosimilitud restringido a los valores permitidos por $H_0$; en el denominador, el máximo sin restricciones. Si $\Lambda$ es pequeño, el mejor modelo permitido por $H_0$ es mucho peor que el mejor modelo global: los datos gritan contra $H_0$. El milagro estadístico es el **teorema de Wilks**: bajo $H_0$, cuando $n$ crece,
$$-2\ln \Lambda \sim \chi^2_k$$
es decir, menos dos veces el logaritmo de $\Lambda$ se distribuye como una ji-cuadrado con $k$ grados de libertad, donde $k$ es el número de parámetros restringidos por $H_0$. Esto da un valor p universal: calculas $-2\ln\Lambda$, lo comparas con la tabla $\chi^2$ y decides. Es la maquinaria detrás de media estadística moderna, incluida la comparación de modelos anidados.

## Bootstrap y jackknife (idea)

¿Y si la teoría asintótica no aplica, el modelo es raro o la distribución del estimador es intratable (como la mediana)? Entonces le dejamos el trabajo a la computadora.

**Bootstrap (idea central).** El nombre viene de "levantarse a sí mismo tirando de las propias correas": usamos la muestra para imitar a la población. La población real es desconocida, pero la **distribución empírica** (la que asigna probabilidad $1/n$ a cada dato observado) es nuestra mejor imitación. El algoritmo:

1. Toma la muestra original $x_1, \ldots, x_n$.
2. Genera $B$ muestras **bootstrap**: cada una se obtiene remuestreando **con reposición** de los datos originales. Es decir, tomas $n$ veces un dato al azar de los originales, permitiendo repeticiones (un mismo dato puede salir varias veces, otro ninguna).
3. En cada muestra bootstrap calcula el estadístico de interés: $\hat{\theta}_1^*, \hat{\theta}_2^*, \ldots, \hat{\theta}_B^*$ (el asterisco marca "remuestreado"). Con $B = 10\,000$ típicamente.
4. Usa la variabilidad de esos $B$ valores como estimación de la variabilidad real del estimador: su desviación estándar estima el error estándar, y los percentiles $2.5\%$ y $97.5\%$ de los $\hat{\theta}_b^*$ forman un **intervalo de confianza bootstrap**.

Por qué funciona: si la muestra es una buena foto de la población, entonces remuestrearla imita bien el proceso de tomar muestras nuevas de la población. Ejemplo clásico: el intervalo de confianza de la **mediana** de los ingresos, cuya distribución exacta es horrible de calcular; el bootstrap la obtiene en segundos sin supuestos de normalidad.

**Jackknife.** Es el ancestro humilde del bootstrap: en lugar de remuestrear, **deja un dato fuera a la vez**. Con $n$ datos formas $n$ sub-muestras, cada una omitiendo un dato distinto, y calculas el estimador en cada una: $\hat{\theta}_{(i)}$ = estimador sin el dato $i$. El promedio de esos $n$ valores permite estimar el **sesgo** del estimador, y su dispersión permite estimar la **varianza** (multiplicando por $n-1$). El jackknife es sistemático y determinista (no aleatorio); el bootstrap es aleatorio pero más general y con mejores propiedades en muchos casos.

**Advertencia:** ambos métodos suponen datos independientes e idénticamente distribuidos. Con datos dependientes (series de tiempo) hay que remuestrear **bloques** completos para no romper la estructura de correlación. La intuición: si los datos tienen memoria, revolverlos al azar destruye información esencial.

## Ejemplos resueltos

**Ejemplo 1 (insesgamiento de la varianza).** ¿Es insesgado $\hat{\theta} = \frac{1}{n}\sum (X_i - \bar{X})^2$ para $\sigma^2$?
- Se puede probar que $E[\hat{\theta}] = \frac{n-1}{n}\sigma^2 \neq \sigma^2$.
- Sesgo: $-\sigma^2/n$: en promedio se queda corto, y la corrección exacta es multiplicar por $n/(n-1)$, que da el estimador con $n-1$.

**Ejemplo 2 (MV de Poisson).** Halla el MV de $\lambda$ para datos de Poisson.
- Verosimilitud: $L(\lambda) = \prod \frac{e^{-\lambda}\lambda^{x_i}}{x_i!} = \frac{e^{-n\lambda}\lambda^{\sum x_i}}{\prod x_i!}$.
- Logaritmo: $\ell(\lambda) = -n\lambda + \left(\sum x_i\right)\ln\lambda - \ln\prod x_i!$.
- Derivada: $\ell'(\lambda) = -n + \frac{\sum x_i}{\lambda}$. Igualando a cero: $\hat{\lambda} = \frac{1}{n}\sum x_i = \bar{X}$.
- Segunda derivada: $-\sum x_i/\lambda^2 < 0$: es máximo.

**Ejemplo 3 (información de Fisher exponencial).** Para la exponencial $f(x; \lambda) = \lambda e^{-\lambda x}$.
- $\ln f = \ln\lambda - \lambda x$; primera derivada: $1/\lambda - x$; segunda derivada: $-1/\lambda^2$.
- Como la segunda derivada no depende de $x$, su esperanza es ella misma: $I(\lambda) = -E[-1/\lambda^2] = 1/\lambda^2$.
- Cota de Cramér-Rao: $\lambda^2/n$.

**Ejemplo 4 (MV uniforme, sin derivadas).** Uniforme $(0, \theta)$.
- La densidad vale $1/\theta$ si $0 \leq x \leq \theta$ y cero fuera; la verosimilitud de la muestra es $\theta^{-n}$ si todos los $x_i \leq \theta$, y cero en otro caso.
- Como $\theta^{-n}$ baja al subir $\theta$, el máximo se logra con el menor $\theta$ que admite los datos: $\hat{\theta} = \max x_i$.
- Ojo: este estimador es sesgado ($E[\max X_i] = \frac{n}{n+1}\theta < \theta$); el insesgado es $\frac{n+1}{n}\max X_i$.

**Ejemplo 5 (Rao-Blackwell en Bernoulli).** Adivinanza burda de $p$: el primer lanzamiento, $\hat{p} = X_1$.
- Es insesgado: $E[X_1] = p$. Pero desperdicia $n-1$ datos.
- $T = \sum_{i=1}^n X_i$ es suficiente (la verosimilitud $p^T(1-p)^{n-T}$ depende de los datos solo a través de $T$).
- El estimador mejorado: $E[X_1 \mid T] = P(X_1 = 1 \mid T) = T/n = \bar{X}$, con varianza $p(1-p)/n$, mucho menor que $p(1-p)$.

**Ejemplo 6 (bootstrap para la mediana).** Queremos un IC del 95% para la mediana de ingresos de una muestra de $n = 500$.
- Remuestreamos $B = 10\,000$ veces con reposición y calculamos la mediana en cada muestra bootstrap.
- Tomamos los percentiles $2.5$ y $97.5$ de esas $10\,000$ medianas: ese es el IC bootstrap.
- No se asumió normalidad ni se derivó distribución alguna: la computadora lo resolvió.

## Errores comunes

- **Usar $n$ en lugar de $n-1$ para la varianza insesgada.** El denominador correcto depende del objetivo: $n-1$ quita el sesgo; $n$ es lo que da máxima verosimilitud. Conoce qué estás calculando.
- **Creer que MV siempre es insesgado.** Es asintóticamente impecable, pero en muestras finitas puede tener sesgo ($\hat{\sigma}^2$ con $n$ es el ejemplo). La propiedad exacta es la consistencia, no el insesgamiento.
- **Ignorar las condiciones de regularidad de Cramér-Rao.** Si el dominio del parámetro depende de él (uniforme), la cota no aplica; usarla igual conduce a conclusiones falsas.
- **Comparar estimadores solo por la varianza.** Un estimador con varianza pequeñísima pero sesgo enorme puede ser pésimo. Usa el ECM, que suma varianza y sesgo al cuadrado.
- **Aplicar bootstrap a datos dependientes.** Con series de tiempo remuestrea por bloques; de lo contrario destruyes la estructura y subestimas la incertidumbre.
- **Confundir estimador con estimación.** El estimador es la fórmula (variable aleatoria); la estimación es el número resultante (fijo). El sesgo y la varianza son propiedades de la fórmula, no del número.
- **Concluir que un estimador insesgado siempre es mejor.** Un poco de sesgo puede comprar mucha menos varianza; el ECM es el árbitro, no la pureza.

## Ejercicios propuestos (con respuestas)

1. ¿Es $\bar{X}$ consistente para $\mu$?
2. Halla el MV de $p$ en una muestra Bernoulli.
3. ¿Cuál es la información de Fisher de una normal con $\sigma$ conocida, para $\mu$?
4. Mejora por Rao-Blackwell el estimador $1\!\!1_{\{X_1 = 1\}}$ (indicadora de que el primer lanzamiento fue éxito) para $p$.
5. Cota de Cramér-Rao para $\lambda$ en una muestra Poisson.
6. ¿Por qué el bootstrap funciona sin supuestos paramétricos?
7. Demuestra que $\max X_i$ es suficiente para la uniforme $(0, \theta)$.
8. ¿Qué distribución tiene $-2\ln\Lambda$ bajo $H_0$, asintóticamente?
9. Sesgo de $\frac{1}{n}\sum (X_i - \bar{X})^2$ como estimador de $\sigma^2$.
10. ¿Cuál es la varianza del MV de $p$ en Bernoulli y qué la convierte en eficiente?

**Respuestas:** 1) Sí: por la ley de los grandes números, $\bar{X}$ converge en probabilidad a $\mu$. 2) $\hat{p} = \bar{X}$ (la frecuencia de éxitos). 3) $I(\mu) = 1/\sigma^2$. 4) El condicionamiento en $T = \sum X_i$ da $\bar{X}$. 5) $\lambda/n$. 6) Porque imita la población con la distribución empírica y remuestrea de ella, sin suponer ninguna familia paramétrica. 7) La verosimilitud es $\theta^{-n}1\!\!1_{\{x_{(n)} \leq \theta\}}$, que depende de los datos solo a través del máximo: aplica la factorización con $g = \theta^{-n}1\!\!1_{\{T \leq \theta\}}$ y $h = 1$. 8) $\chi^2_k$ con $k$ = número de parámetros restringidos (teorema de Wilks). 9) $-\sigma^2/n$. 10) $\text{Var}(\hat{p}) = p(1-p)/n$, exactamente la cota de Cramér-Rao con $I(p) = 1/(p(1-p))$; por eso es eficiente.

## Resumen

- Estimar es adivinar un parámetro $\theta$ con una fórmula $\hat{\theta}$ sobre la muestra; el sesgo mide el error sistemático y la varianza, el temblor.
- Un estimador insesgado acierta en promedio ($E[\hat{\theta}] = \theta$); uno consistente se acerca con más datos; uno eficiente tiembla lo mínimo posible. El ECM = varianza + sesgo² resume todo.
- Un estadístico suficiente condensa toda la información sobre $\theta$; el criterio de factorización lo verifica y Rao-Blackwell mejora estimadores con él.
- La máxima verosimilitud elige el parámetro que hace más probables los datos observados: logaritmo, derivada, cero, verificar máximo. Es consistente y asintóticamente eficiente.
- El método de momentos iguala promedios teóricos con empíricos: simple pero a veces ineficiente o absurdo.
- La información de Fisher mide cuánto gritan los datos sobre $\theta$; la cota de Cramér-Rao fija el piso universal de varianza.
- Los pivotes construyen intervalos; Neyman-Pearson da la prueba más potente; el teorema de Wilks conecta la razón de verosimilitud con la $\chi^2$.
- Bootstrap y jackknife sustituyen la teoría con computación: remuestreo con reposición y exclusión de un dato, respectivamente.
`,

  "procesos-estocasticos": String.raw`
## ¿Qué es un proceso estocástico?

Hasta ahora, en probabilidad hemos estudiado variables aleatorias "sueltas": lanzar un dado, medir una altura, contar llamadas en una hora. Un **proceso estocástico** es la idea natural cuando las variables aleatorias se suceden en el tiempo y están relacionadas entre sí. Formalmente: un proceso estocástico es una **familia de variables aleatorias indexadas por el tiempo**, que se escribe

$$\{X_t\}_{t \in T}$$

Leamos esta notación con calma, porque es el primer símbolo de la guía. Las llaves $\{\;\}$ indican "la colección de". El símbolo $X_t$ es una variable aleatoria (un número que depende del azar) que corresponde al instante $t$. La letra $t$ se llama **índice de tiempo**: en vez de tener una sola variable $X$, tenemos una por cada momento $t$. La letra $T$ denota el **conjunto de índices**, es decir, todos los instantes permitidos. La expresión $t \in T$ se lee "$t$ pertenece a $T$" y significa que $t$ recorre todos los valores del conjunto $T$.

Hay dos grandes familias según cómo sea el tiempo:

- **Tiempo discreto:** los instantes son separados y contables. Típicamente $T = \{0, 1, 2, 3, \ldots\}$ (el conjunto de enteros no negativos). Pensemos en un proceso observado "a cada paso": el valor del día 1, del día 2, del día 3... Un ejemplo es el precio de una acción registrado cada día al cierre.
- **Tiempo continuo:** el tiempo fluye sin saltos. Típicamente $T = [0, \infty)$, que es el intervalo de todos los números reales no negativos. Aquí $X_t$ está definido para *todo* instante real $t$, como la temperatura de un termómetro o la posición de una partícula de polvo en el agua.

Además, el conjunto de **valores posibles** que puede tomar $X_t$ se llama **espacio de estados**. Si los estados son contables (por ejemplo: "sol" y "lluvia", o los enteros $\mathbb{Z}$), hablamos de proceso con espacio de estados discreto. Si los valores llenan un intervalo de números reales, el espacio de estados es continuo. No hay que confundir las dos clasificaciones: el *tiempo* puede ser discreto o continuo, e independientemente el *espacio de estados* puede ser discreto o continuo. Tenemos así cuatro combinaciones posibles.

Un matiz importante que conviene interiorizar desde el principio: un proceso estocástico no es un número, sino una **regla completa del azar a lo largo del tiempo**. Cuando decimos que $X_t$ es el precio de una acción al día $t$, no estamos hablando de un único resultado, sino de todo un "universo" de trayectorias posibles, cada una con su probabilidad. Una sola realización concreta del proceso (los valores que efectivamente ocurrieron) se llama **trayectoria** o **camino muestral**.

La gran pregunta de la teoría es cómo modelar la **dependencia** entre $X_t$ en distintos tiempos. Si las variables fueran todas independientes, no habría mucho proceso que estudiar. Lo interesante —y lo difícil— es que el valor de hoy influye en el de mañana. La herramienta más famosa para capturar esa dependencia de manera manejable es la propiedad de Markov, que presentamos a continuación.

## Cómo leer la notación

Antes de entrar en materia, dediquemos una sección a descifrar la notación, porque es donde los principiantes se pierden. Si dominas esta sección, el resto de la guía se lee sin fricción.

**Probabilidades condicionales.** La expresión $P(A \mid B)$ se lee "la probabilidad de $A$ dado $B$" y significa: la probabilidad de que ocurra el evento $A$ *sabiendo* que ya ocurrió el evento $B$. La barra vertical $\mid$ es el símbolo de "dado que" o "condicionado a". Por ejemplo, $P(\text{lluvia mañana} \mid \text{sol hoy})$ es la probabilidad de lluvia mañana suponiendo que hoy hizo sol.

**Subíndices y superíndices.** En $X_n$, el subíndice $n$ indica el paso de tiempo (en tiempo discreto, $n$ es un entero: $n = 0, 1, 2, \ldots$). En $X_t$, la $t$ es un instante continuo. En una matriz de transición, $P^n$ (con superíndice) significa la matriz $P$ multiplicada por sí misma $n$ veces; sus entradas se denotan a veces $p_{ij}^{(n)}$ y dan probabilidades de ir de $i$ a $j$ en exactamente $n$ pasos.

**Sumatorias.** La expresión $\sum_j p_{ij}$ significa "suma de $p_{ij}$ sobre todos los valores posibles de $j$". Por ejemplo, $\sum_{j=1}^{3} p_{ij} = p_{i1} + p_{i2} + p_{i3}$. Cuando el índice de la suma no tiene límites escritos, se sobreentiende que recorre todo el espacio de estados.

**Esperanza condicional.** $E[Y \mid A]$ es el "valor esperado de $Y$ sabiendo que ocurrió $A$". La versión más avanzada $E[M_{n+1} \mid \mathcal{F}_n]$ usa $\mathcal{F}_n$ (leída "F sub n") para denotar *toda la información disponible hasta el instante* $n$. La $\mathcal{F}$ es una letra F caligráfica; $\mathcal{F}_n$ es la "historia del proceso hasta el tiempo $n$". Así, $E[M_{n+1} \mid \mathcal{F}_n]$ se lee: "el valor esperado de $M_{n+1}$, conociendo todo lo que pasó hasta el tiempo $n$". Esta notación es estándar en martingalas y cálculo estocástico; no te asustes, solo significa "promedio condicionado a toda la historia".

**Vectores y matrices.** Un **vector** es una lista ordenada de números; se escribe en fila $\pi = (\pi_1, \pi_2)$ o en columna. Una **matriz** es una tabla rectangular de números; por ejemplo $P = \begin{pmatrix} 0.9 & 0.1 \\ 0.5 & 0.5 \end{pmatrix}$ es una tabla de 2 filas y 2 columnas. La entrada $p_{ij}$ está en la fila $i$ y la columna $j$: el primer subíndice es la fila (estado de partida), el segundo es la columna (estado de llegada). El producto de un vector fila por una matriz se obtiene "fila por columnas": cada componente del resultado es la suma de los productos elemento a elemento.

**Igualdad $\pi = \pi P$.** Leída como ecuación, significa: el vector $\pi$ multiplicado por la matriz $P$ da de nuevo $\pi$. Cuando un vector cumple esto, se dice que es un **vector propio izquierdo** de $P$ asociado al **valor propio** 1. No hace falta saber álgebra lineal profunda: solo la interpretación, que explicamos en la sección de distribución estacionaria.

**Diferenciales.** En cálculo continuo, $dt$ representa un "pedacito infinitesimal de tiempo", $dW_t$ un "pedacito infinitesimal de variación del browniano" (definido más adelante). Las ecuaciones con diferenciales, como $dX_t = \mu\,dt + \sigma\,dW_t$, son una forma compacta de escribir que el cambio de $X_t$ en un intervalo muy pequeño de tiempo tiene dos componentes: una parte determinista (proporcional a $dt$) y una parte aleatoria (proporcional a $dW_t$).

Una recomendación general: cuando veas una fórmula con muchos símbolos, identifica primero *de qué tipo es cada objeto* (¿es un número?, ¿un vector?, ¿una matriz?, ¿una función del tiempo?). Casi todos los bloqueos desaparecen cuando se sabe qué se está multiplicando con qué.

## Cadenas de Markov y matriz de transición

### La propiedad de Markov

La **propiedad de Markov** es una hipótesis simplificadora con una idea muy intuitiva: *el futuro depende solo del presente, no del pasado*. En símbolos, para tiempo discreto:

$$P(X_{n+1} = j \mid X_n = i, \; X_{n-1}, X_{n-2}, \ldots) = P(X_{n+1} = j \mid X_n = i)$$

Traduzcamos esta ecuación pieza por pieza. $X_n$ es el estado en el paso $n$; $X_{n+1}$ es el estado en el siguiente paso. La letra $i$ denota el estado actual (digamos "sol") y la letra $j$ un estado futuro posible (digamos "lluvia"). El lado izquierdo es la probabilidad de pasar a $j$ en el paso siguiente, *conociendo además toda la historia* ($X_{n-1}, X_{n-2}, \ldots$ son los estados de los pasos anteriores). El lado derecho es la misma probabilidad *conociendo solo el estado presente*. La propiedad de Markov afirma que ambos números son iguales: una vez que sabes dónde estás hoy, saber dónde estuviste anteayer no aporta ninguna información adicional sobre mañana.

Es importante aclarar que la propiedad de Markov **no** dice que el pasado no exista; dice que toda la influencia del pasado ya quedó "resumida" en el presente. El proceso sí tiene memoria, pero de un solo paso de profundidad: recuerda el presente, y con eso le basta.

### ¿Qué es una cadena de Markov?

Una **cadena de Markov** es un proceso estocástico con (1) espacio de estados discreto (finito o numerable) y (2) tiempo discreto, que cumple la propiedad de Markov. Es el modelo más simple y más usado de dependencia temporal. Ejemplos clásicos: el clima de un día a otro (sol o lluvia), la cola de clientes en una tienda (número de personas esperando), el tablero de un juego de mesa con movimientos aleatorios.

Un ejemplo típico: supongamos que el clima de mañana depende solo del clima de hoy, no de la semana pasada. Si hoy es soleado, mañana será soleado con probabilidad $0.9$ y lluvioso con probabilidad $0.1$; si hoy llueve, mañana habrá sol con probabilidad $0.5$ y lluvia con probabilidad $0.5$. Esta descripción verbal ya contiene toda la información de la cadena.

### La matriz de transición

Para representar la regla anterior de forma compacta se usa la **matriz de transición** $P$. Es una tabla cuadrada (tantas filas como estados, tantas columnas como estados) cuya entrada genérica es:

$$p_{ij} = P(X_{n+1} = j \mid X_n = i)$$

La entrada $p_{ij}$ (se lee "p sub i jota") es la probabilidad de que, estando en el estado $i$, el proceso salte al estado $j$ en el siguiente paso. Se dice que es una **probabilidad de transición en un paso**. Las filas corresponden al estado de partida y las columnas al estado de llegada: es la convención universal y conviene memorizarla porque invertirla es un error clásico.

Dos propiedades fundamentales de toda matriz de transición:

1. **Cada entrada es una probabilidad:** $0 \leq p_{ij} \leq 1$ para todo par $i, j$.
2. **Cada fila suma 1:** $\sum_j p_{ij} = 1$. La razón es lógica: estando en el estado $i$, el proceso *tiene que ir a alguna parte* en el siguiente paso, y los destinos posibles son todos los estados $j$; la suma de las probabilidades de todos los destinos debe ser 1.

Para el ejemplo del clima, con estados ordenados como (sol, lluvia), la matriz es:

$$P = \begin{pmatrix} 0.9 & 0.1 \\ 0.5 & 0.5 \end{pmatrix}$$

La primera fila dice: desde sol, con probabilidad $0.9$ se queda en sol y con $0.1$ pasa a lluvia. La segunda fila dice: desde lluvia, con $0.5$ pasa a sol y con $0.5$ se queda en lluvia. Comprobemos que las filas suman 1: $0.9 + 0.1 = 1$ y $0.5 + 0.5 = 1$. Correcto.

Cuando la cadena es **homogénea en el tiempo**, las probabilidades de transición no cambian con $n$: pasar de sol a lluvia cuesta $0.1$ hoy, mañana y siempre. En toda esta guía asumimos homogeneidad salvo que se diga lo contrario, porque es lo que hace manejable el modelo.

### El vector de probabilidades y la evolución en $n$ pasos

Supongamos que en el tiempo 0 la cadena arranca con una distribución inicial $\pi_0 = (\pi_0(1), \pi_0(2), \ldots)$, donde $\pi_0(i)$ es la probabilidad de comenzar en el estado $i$ (un **vector de probabilidad**: entradas no negativas que suman 1). ¿Cómo se calcula la distribución en el paso 1? Sumando sobre todas las formas de llegar a cada estado:

$$\pi_1(j) = \sum_i \pi_0(i)\, p_{ij}$$

En notación matricial esto es simplemente $\pi_1 = \pi_0 P$: el vector fila $\pi_0$ multiplicado por la matriz $P$. Repitiendo el razonamiento, la distribución después de $n$ pasos es

$$\pi_n = \pi_0 P^n$$

donde $P^n$ es la matriz $P$ multiplicada por sí misma $n$ veces. Sus entradas, $p_{ij}^{(n)}$, son las probabilidades de transición en $n$ pasos: la probabilidad de estar en $j$ después de $n$ pasos habiendo partido de $i$. Un hecho notable es la **ecuación de Chapman-Kolmogorov**:

$$p_{ij}^{(n+m)} = \sum_k p_{ik}^{(n)}\, p_{kj}^{(m)}$$

que dice: ir de $i$ a $j$ en $n+m$ pasos equivale a ir de $i$ a algún estado intermedio $k$ en $n$ pasos y luego de $k$ a $j$ en los $m$ restantes, sumando sobre todos los intermediarios posibles. Es la versión probabilística de "los caminos se concatenan".

## Distribución estacionaria

### La idea: comportamiento a largo plazo

Imagina la cadena del clima funcionando durante 10.000 días. ¿Qué fracción de los días será soleada? La intuición sugiere que, con el tiempo, la cadena "olvida" su estado inicial y se instala en un patrón estable. Ese patrón estable es la **distribución estacionaria**.

### Definición y significado de $\pi = \pi P$

Una **distribución estacionaria** es un vector de probabilidad $\pi$ que cumple:

$$\pi = \pi P$$

En coordenadas (una ecuación por cada estado $j$):

$$\pi_j = \sum_i \pi_i \, p_{ij}$$

¿Qué significa esta ecuación? Si hoy la probabilidad de estar en cada estado viene dada por $\pi$, entonces mañana (tras multiplicar por $P$) la distribución vuelve a ser exactamente $\pi$. La distribución *no cambia* con el paso del tiempo: por eso se llama estacionaria. La ecuación $\pi_j = \sum_i \pi_i p_{ij}$ se conoce como **ecuación de balance** y tiene una interpretación de flujos muy bonita: el lado izquierdo es el "flujo que sale" del estado $j$ (su probabilidad actual), y el lado derecho es el "flujo que entra" a $j$ desde todos los estados $i$ (probabilidad de estar en $i$ multiplicada por la probabilidad de saltar de $i$ a $j$). En equilibrio, lo que entra es igual a lo que sale.

En términos de álgebra lineal: $\pi$ es un **vector propio izquierdo** de $P$ asociado al **valor propio** 1. Que el valor propio sea 1 no es casualidad: toda matriz de transición tiene al 1 como valor propio (el vector de solo unos es vector propio derecho), porque sus filas suman 1.

### Cómo calcularla

Dos observaciones hacen el cálculo trivial en la práctica:

1. Como las filas de $P$ suman 1, la ecuación $\pi = \pi P$ tiene infinitas soluciones proporcionales entre sí. Hace falta una condición extra: $\sum_j \pi_j = 1$ (las probabilidades deben sumar 1).
2. Para el caso de dos estados, $\pi = (\pi_1, \pi_2)$ con $\pi_1 + \pi_2 = 1$, basta resolver una ecuación lineal.

**Ejemplo resuelto (clima).** Con $P = \begin{pmatrix} 0.9 & 0.1 \\ 0.5 & 0.5 \end{pmatrix}$, las ecuaciones de balance son:

$$\pi_1 = 0.9\pi_1 + 0.5\pi_2, \qquad \pi_2 = 0.1\pi_1 + 0.5\pi_2, \qquad \pi_1 + \pi_2 = 1$$

De la primera: $0.1\pi_1 = 0.5\pi_2$, es decir $\pi_1 = 5\pi_2$. Con $\pi_1 + \pi_2 = 1$: $6\pi_2 = 1$, luego $\pi_2 = 1/6$ y $\pi_1 = 5/6$. Resultado:

$$\pi = \left(\frac{5}{6},\; \frac{1}{6}\right) \approx (0.833,\; 0.167)$$

Interpretación: a la larga, alrededor del $83.3\%$ de los días serán soleados y el $16.7\%$ lluviosos, *independientemente del clima del día inicial*.

### ¿Cuándo hay convergencia?

La estacionaria describe el largo plazo solo si la cadena realmente converge a ella. Los teoremas clásicos dicen: si la cadena es **irreducible** (desde cualquier estado se puede llegar a cualquier otro, ver sección siguiente) y **aperiódica** (ver sección siguiente), entonces existe una única distribución estacionaria $\pi$ y, partiendo de cualquier distribución inicial $\pi_0$,

$$\pi_n = \pi_0 P^n \;\longrightarrow\; \pi \qquad \text{cuando } n \to \infty$$

La flecha $\longrightarrow$ significa "tiende a" o "converge a". Además, en el límite, $\pi_j$ coincide con la fracción de tiempo a largo plazo que la cadena pasa en el estado $j$.

El **tiempo de mezcla** es una medida de *cuántos pasos* tarda la cadena en acercarse razonablemente a $\pi$. Una cadena con una fila muy "aferrada" a un estado (probabilidades tipo $0.99$) mezcla lentamente; una cadena con transiciones balanceadas mezcla rápido. Este concepto importa mucho en los algoritmos de simulación MCMC usados en estadística bayesiana, donde se quiere saber cuántas iteraciones hay que correr antes de que los muestreos "ya valgan".

## Clases de estados

No todos los estados de una cadena se comportan igual a largo plazo. Clasificarlos es el primer paso de cualquier análisis serio. Aquí van los conceptos clave, con sus definiciones precisas y su intuición.

### Recurrente y transitorio

- Un estado $i$ es **recurrente** si, partiendo de $i$, la probabilidad de regresar a $i$ en algún momento futuro es exactamente 1. No solo es posible volver: es *seguro* que se volverá (con probabilidad 1). Y si es seguro volver una vez, el proceso vuelve infinitas veces, eternamente.
- Un estado $i$ es **transitorio** si, partiendo de $i$, hay probabilidad positiva de no regresar nunca. En tal caso, el número de visitas al estado es finito (casi con seguridad): el proceso lo visita un rato y luego se va para siempre.

La intuición: un estado recurrente es un "hogar" al que el proceso regresa una y otra vez; un estado transitorio es un "lugar de paso" que tarde o temprano se abandona. En una cadena finita, es imposible que todos los estados sean transitorios: si todos pudieran abandonarse para siempre, el proceso, que no tiene a dónde más ir, se quedaría sin estados, lo cual es absurdo. De hecho, **en toda cadena finita existe al menos un estado recurrente**.

Un ejemplo clásico: el **paseo aleatorio** (en inglés *random walk*). Imaginemos un caminante que en cada paso lanza una moneda: si sale cara avanza un paso a la derecha, si sale cruz un paso a la izquierda. Sobre la recta de los enteros $\mathbb{Z}$ (el conjunto $\{\ldots, -2, -1, 0, 1, 2, \ldots\}$), este paseo es **recurrente**: por más lejos que se vaya, con probabilidad 1 regresará al punto de partida. Un resultado famoso de la teoría es que esto también vale en el plano (dimensión 2), pero en el espacio (dimensión 3) el paseo aleatorio se vuelve **transitorio**: hay probabilidad positiva de alejarse y no volver jamás. La frase memorable es: *"un borracho siempre encuentra el camino a casa; un pájaro borracho puede perderse para siempre"*.

### Recurrente positivo y recurrente nulo

Dentro de los recurrentes, se distingue según el **tiempo esperado de retorno**. Si $T_i$ es la variable aleatoria "número de pasos hasta regresar a $i$ por primera vez", el estado es **recurrente positivo** si $E[T_i] < \infty$ (el regreso tarda en promedio un tiempo finito) y **recurrente nulo** si $E[T_i] = \infty$ (se regresa seguro, pero el tiempo esperado es infinito). En **cadenas finitas**, todo estado recurrente es automáticamente recurrente positivo, así que la distinción solo aparece en espacios de estados infinitos (como el paseo aleatorio en $\mathbb{Z}$, que es recurrente nulo). No hay que memorizar la prueba; solo saber que la distinción existe.

### Periódico y aperiódico

El **periodo** de un estado $i$ es el máximo común divisor de todos los números $n \geq 1$ tales que es posible volver a $i$ en exactamente $n$ pasos ($p_{ii}^{(n)} > 0$). En palabras: un estado es **periódico** de periodo $d$ si los retornos solo pueden ocurrir en instantes múltiplos de $d$, y **aperiódico** si su periodo es 1.

El ejemplo típico es la caminata en un cuadrado: un paseo aleatorio sobre un ciclo de longitud 2 solo puede volver al estado inicial en un número *par* de pasos; su periodo es 2. Una cadena con al menos una "auto-transición" (probabilidad positiva de quedarse en el mismo estado, como $p_{ii} > 0$) suele ser aperiódica, porque el proceso puede "esperar" un paso y así ajustar la paridad de los retornos. La periodicidad importa porque una cadena periódica **no converge** a la distribución estacionaria: en lugar de asentarse, oscila eternamente entre configuraciones. La convergencia a $\pi$ requiere aperiodicidad.

### Comunicación e irreducibilidad

Se dice que $i$ **se comunica con** $j$ si existe algún camino (de una o más transiciones) para ir de $i$ a $j$ con probabilidad positiva. Una cadena es **irreducible** si todos los estados se comunican entre sí: desde cualquier estado se puede llegar a cualquier otro. Si la cadena no es irreducible, se descompone en **clases de comunicación**: bloques de estados que se comunican entre sí, y entre los bloques el proceso solo puede ir en ciertas direcciones (los bloques transitorios "alimentan" a los recurrentes, y una vez dentro de un bloque recurrente ya no se sale).

La clasificación se resume en el teorema estructural más útil del tema: **en una cadena de Markov finita e irreducible, todos los estados son recurrentes positivos y existe una única distribución estacionaria $\pi$**. Si además la cadena es aperiódica, la distribución converge a $\pi$ desde cualquier punto de partida. Este es el "paquete completo" que uno busca cuando modela con cadenas.

Finalmente, una relación elegante que conecta esta sección con la anterior: si $\pi$ es la distribución estacionaria de una cadena irreducible y recurrente positiva, entonces el **tiempo medio de retorno** al estado $i$ es

$$E[T_i] = \frac{1}{\pi_i}$$

Cuanto más raro es un estado en el largo plazo (menor $\pi_i$), más se tarda en promedio en volver a visitarlo. En el ejemplo del clima, $\pi = (5/6, 1/6)$: partiendo de un día lluvioso, el tiempo esperado hasta el siguiente día lluvioso es $1/\pi_2 = 6$ días.

## Procesos de Poisson y nacimiento-muerte

Con las cadenas de Markov cubrimos el tiempo discreto. Ahora pasamos al tiempo continuo, empezando por el proceso más fundamental de todos.

### El proceso de Poisson con tasa $\lambda$

Un **proceso de Poisson** de tasa $\lambda$ (la letra griega lambda) es el modelo matemático para "eventos que ocurren al azar, de forma totalmente independiente, a una tasa constante". Imagina llamadas que llegan a una central telefónica, terremotos, o clientes entrando a un banco. El parámetro $\lambda > 0$ es la **tasa de ocurrencia**: el número esperado de eventos por unidad de tiempo. Si $\lambda = 3$ llamadas por minuto, entonces en promedio ocurren 3 llamadas cada minuto.

Sus propiedades definitorias son:

1. **El proceso arranca en cero:** $N_0 = 0$, donde $N_t$ denota el número de eventos ocurridos hasta el instante $t$.
2. **Incrementos independientes:** el número de eventos en intervalos de tiempo disjuntos es independiente. Lo que pasó entre las 10:00 y las 11:00 no influye en lo que pasará entre las 14:00 y las 15:00.
3. **Incrementos estacionarios:** la distribución del número de eventos en un intervalo depende solo de la *longitud* del intervalo, no de dónde empiece. Una hora cualquiera es igual a cualquier otra hora.
4. **Eventos uno a uno:** en un instante dado no pueden ocurrir dos eventos simultáneos (los eventos no se "amontonan" en el mismo instante; técnicamente, $P(N_t \text{ salta más de 1 en } (t, t+h]) = o(h)$, un término despreciable frente a $h$).

La consecuencia estrella es que el número de eventos en un intervalo de longitud $t$ sigue una distribución de **Poisson de parámetro** $\lambda t$:

$$P(N_{t} = k) = \frac{e^{-\lambda t} (\lambda t)^k}{k!}, \qquad k = 0, 1, 2, \ldots$$

Aquí $e \approx 2.71828$ es el número de Euler (la base de los logaritmos naturales) y $k!$ (se lee "k factorial") es el producto $1 \cdot 2 \cdots k$, con la convención $0! = 1$. La expresión $P(N_t = k)$ es la probabilidad de que ocurran exactamente $k$ eventos en un intervalo de longitud $t$. La media y la varianza de esta distribución son ambas $\lambda t$.

Otra propiedad clave: los **tiempos entre eventos consecutivos** son variables aleatorias independientes con distribución **exponencial** de tasa $\lambda$, cuya densidad es $f(x) = \lambda e^{-\lambda x}$ para $x \geq 0$, y cuyo promedio es $1/\lambda$. Si llegan $\lambda = 3$ llamadas por minuto, el tiempo medio entre llamadas es $1/3$ de minuto (20 segundos). La exponencial tiene la famosa **propiedad de pérdida de memoria**: si ya esperaste 10 minutos sin eventos, el tiempo adicional de espera se distribuye *igual* que si acabaras de empezar a esperar.

### Procesos de nacimiento y muerte

Una generalización natural: ¿qué pasa si la tasa de ocurrencia depende del estado actual? Un **proceso de nacimiento y muerte** es un proceso de Markov en tiempo continuo sobre los estados $\{0, 1, 2, \ldots\}$ (típicamente, "número de individuos" o "número de clientes en el sistema") en el que, desde el estado $n$, solo hay dos transiciones posibles:

- un **nacimiento**: el estado sube a $n+1$, con tasa $\lambda_n$;
- una **muerte**: el estado baja a $n-1$, con tasa $\mu_n$ (leída "mu sub n"; $\mu$ es la letra griega mu).

La interpretación de "tasa $\lambda_n$" es: si estamos en el estado $n$, el tiempo hasta el próximo nacimiento es exponencial de media $1/\lambda_n$ (a mayor tasa, más pronto ocurre). El nombre viene de modelos de poblaciones (nacimientos y muertes de individuos) y de colas (llegadas y salidas de clientes). En una cola, los "nacimientos" son llegadas de clientes y las "muertes" son finalizaciones de servicio.

### La cola M/M/1

El ejemplo más famoso de nacimiento y muerte es la **cola M/M/1**: un único servidor (por eso el "1"), con llegadas según un proceso de Poisson de tasa $\lambda$ y tiempos de servicio exponenciales de tasa $\mu$ (las dos "M" significan "Markoviano", en honor a Markov, y señalan la falta de memoria). Los supuestos: los clientes llegan de forma independiente, un solo cajero atiende de a uno, y los tiempos de servicio son aleatorios exponenciales.

La cantidad central es la **intensidad de tráfico** o **utilización**:

$$\rho = \frac{\lambda}{\mu}$$

que es la fracción de tiempo que el servidor está ocupado. La cola es **estable** (no crece sin control) si y solo si $\rho < 1$, es decir, si el servidor atiende más rápido de lo que llegan los clientes en promedio. Si $\rho \geq 1$, la cola crece sin límite y no existe comportamiento de equilibrio.

Bajo estabilidad, las fórmulas clásicas son:

- **Número medio de clientes en el sistema** (esperando más siendo atendidos): $L = \dfrac{\rho}{1-\rho}$.
- **Tiempo medio en el sistema** (espera más servicio): $W = \dfrac{L}{\lambda} = \dfrac{1}{\mu - \lambda}$.

La segunda igualdad es un caso particular de la **ley de Little**, una de las fórmulas más útiles y universales de la teoría de colas: $L = \lambda W$ ("el número medio en el sistema es la tasa de llegada por el tiempo medio en el sistema"). Vale para sistemas muchísimo más generales que M/M/1.

**Ejemplo numérico.** Un banco recibe $\lambda = 8$ clientes por hora y el cajero atiende a $\mu = 10$ por hora. Entonces $\rho = 0.8$ (el cajero está ocupado el 80% del tiempo), $L = 0.8/0.2 = 4$ clientes en promedio, y $W = 4/8 = 0.5$ horas (30 minutos) en promedio. La lección dramática aparece cuando $\rho$ se acerca a 1: con $\rho = 0.9$, $L = 9$; con $\rho = 0.99$, $L = 99$. La relación es **no lineal**: acercarse a la saturación del servidor dispara la cola. Por eso los bancos y call centers vigilan su utilización con mucho cuidado.

## Martingalas

### ¿Qué es una martingala?

El concepto de **martingala** nació en los juegos de azar: en el siglo XVIII, la "martingala" era una estrategia de apuestas que consistía en doblar la apuesta tras cada pérdida. La teoría moderna transformó el nombre en uno de los conceptos más fecundos de toda la probabilidad.

Una **martingala** (en tiempo discreto) es una sucesión de variables aleatorias $M_0, M_1, M_2, \ldots$ que cumple:

$$E[M_{n+1} \mid \mathcal{F}_n] = M_n$$

Recordemos la notación: $\mathcal{F}_n$ es toda la información acumulada hasta el instante $n$; $E[\cdot \mid \mathcal{F}_n]$ es la esperanza condicional a esa información. La ecuación se lee así: **"el valor esperado de mañana, conociendo todo lo que ha pasado hasta hoy, es exactamente el valor de hoy"**. En términos de juegos: si $M_n$ es tu capital tras $n$ rondas de un juego, la martingala describe un **juego justo**: en promedio, ni ganas ni pierdes en cada ronda, sin importar la historia anterior.

Parientes cercanos, que aparecen tanto o más en las aplicaciones:

- **Submartingala:** $E[M_{n+1} \mid \mathcal{F}_n] \geq M_n$ — el valor esperado futuro es *al menos* el presente: un juego a tu favor. (Memotécnica: "sub" = sube en promedio.)
- **Supermartingala:** $E[M_{n+1} \mid \mathcal{F}_n] \leq M_n$ — el valor esperado futuro es *a lo sumo* el presente: un juego en tu contra. (Memotécnica: "super" baja en promedio; suena contraintuitivo, pero la convención es esta.)

### Ejemplos

1. **Paseo aleatorio simétrico.** Lanza una moneda justa en cada paso: cara, ganas $\$1$; cruz, pierdes $\$1$. Tu capital tras $n$ lanzamientos es una martingala, porque la ganancia esperada de cada lanzamiento es $0$.
2. **Capital en un juego justo.** Cualquier juego donde la ganancia esperada de cada ronda es cero produce una martingala; es la formalización de "la casa no regala nada".
3. **El paseo aleatorio generalizado de Wald.** Si $S_n = X_1 + \cdots + X_n$ con $X_i$ independientes de media 0, entonces $S_n$ es martingala.
4. **$W_t^2 - t$.** Para el movimiento browniano $W_t$ (definido en la sección siguiente), el proceso $M_t = W_t^2 - t$ es martingala. La comprobación ilustra la idea: $W_t^2$ crece en promedio, pero al restarle $t$ (su crecimiento esperado) queda "centrado": su valor esperado condicional futuro es justo el valor actual. Este ejemplo conecta martingalas con el cálculo estocástico.

### Los teoremas fundamentales

- **Desigualdad maximal de Doob:** controla la probabilidad de que una martingala (o submartingala) no negativa supere un nivel $c$: $$P\left(\max_{0 \leq k \leq n} |M_k| \geq c\right) \leq \frac{E[|M_n|]}{c}$$ Es la herramienta básica para demostrar que las martingalas no se "disparan" con frecuencia.
- **Teorema de convergencia de martingalas:** una martingala acotada (o que cumple condiciones técnicas de integrabilidad) converge casi seguramente a un límite. Es decir, el azar "se agota" en el límite: la martingala se asienta.
- **Teorema de parada opcional (de Doob):** bajo condiciones adecuadas, *parar una martingala en un tiempo aleatorio no rompe la justicia*: $E[M_{\tau}] = E[M_0]$, donde $\tau$ (la letra griega tau) es un **tiempo de parada**, es decir, un instante aleatorio que se puede decidir mirando solo la historia hasta ese momento (como "dejo de jugar cuando mi capital llegue a 100"). La sutileza —y el error clásico— es que las condiciones *importan*: con apuestas dobladas y capital infinito (o tiempo de espera infinito en promedio), la conclusión puede fallar. Por eso las estrategias "infalibles" de casino no lo son: las condiciones técnicas fallan en la práctica (el capital es finito o la mesa tiene límites de apuesta).

### ¿Para qué sirven?

Las martingalas son la herramienta central para responder preguntas de "¿cuánto tardará?" y "¿qué probabilidad de...?": probabilidad de ruina de un jugador, tiempo esperado de absorción, y —de forma espectacular— **la valoración de derivados en finanzas**. La idea de la **valoración neutral al riesgo**: se construye una probabilidad artificial bajo la cual los precios descontados son martingalas; el precio de una opción es entonces la esperanza descontada de su pago bajo esa medida. De ahí salen Black-Scholes y toda la industria de derivados. El precio justo se define con la matemática de "juegos justos": el precio que impide arbitraje (ganancia sin riesgo) es el que hace que el precio descontado del activo sea martingala.

## Movimiento browniano

### Origen y definición

El **movimiento browniano** debe su nombre al botánico Robert Brown, quien en 1827 observó al microscopio cómo las partículas de polen suspendidas en agua se movían de forma errática e incesante. La explicación física (las moléculas del agua golpeando la partícula) la dieron Einstein (1905) y Smoluchowski; la construcción matemática rigurosa la dio Norbert Wiener (1923), por lo que el proceso también se llama **proceso de Wiener**.

Matemáticamente, el movimiento browniano $W_t$ (con $t \geq 0$, tiempo continuo) es el proceso que cumple:

1. **Arranca en cero:** $W_0 = 0$.
2. **Incrementos independientes:** para tiempos $0 \leq t_1 < t_2 \leq t_3 < t_4$, las variaciones $W_{t_2} - W_{t_1}$ y $W_{t_4} - W_{t_3}$ son independientes: lo que hizo el proceso en un intervalo no informa sobre lo que hará en otro disjunto.
3. **Incrementos normales y estacionarios:** la variación en un intervalo de longitud $h$ es $W_{t+h} - W_t \sim N(0, h)$: una variable normal (gaussiana, la curva de campana) con media 0 y varianza igual a la longitud del intervalo. El símbolo $\sim$ se lee "se distribuye como"; $N(0, h)$ denota la distribución normal de media 0 y varianza $h$.
4. **Trayectorias continuas:** la función $t \mapsto W_t$ no tiene saltos. Pero —y esta es la sorpresa— es continua en todas partes y **no diferenciable en ninguna**: en ningún instante tiene velocidad. La trayectoria cambia de dirección infinitamente a menudo y tan abruptamente que no admite tangente.

### Propiedades fundamentales

- **Media y varianza:** $E[W_t] = 0$ y $\text{Var}(W_t) = t$. La varianza crece *linealmente* con el tiempo: la incertidumbre se acumula, y el proceso se dispersa como $\sqrt{t}$ (la desviación estándar de $W_t$ es $\sqrt{t}$).
- **Densidad de transición:** la distribución de $W_t$ es normal, y su densidad es exactamente la solución fundamental de la **ecuación del calor** (la ecuación de difusión $\partial u/\partial t = \frac{1}{2}\partial^2 u/\partial x^2$). Por eso el browniano modela la **difusión**: tinta en agua, calor en una barra, partículas en suspensión.
- **Variación cuadrática:** si se suman los cuadrados de los incrementos sobre una partición fina del intervalo $[0,t]$, el límite es determinista e igual a $t$: se escribe $[W]_t = t$. Este hecho técnico es el corazón del cálculo de Itô: aunque los incrementos son aleatorios y "bailan", sus *cuadrados* se comportan de forma predecible.
- **Autosimilaridad:** si se reescala el tiempo y el espacio apropiadamente, el proceso se ve "igual a sí mismo" a cualquier escala: $(1/\sqrt{c}) W_{ct}$ tiene la misma distribución que $W_t$. De ahí que las gráficas del browniano parezcan fractales: al hacer zoom se ven estructuras similares.
- **Regularidad de las trayectorias:** son continuas, no diferenciables en ningún punto, y tienen **variación total infinita** en cualquier intervalo: si intentaras medir su "longitud" como curva, obtendrías infinito. Por eso la integral de Riemann clásica no funciona con $W_t$ y hace falta una integral nueva: la de Itô.

### Aplicaciones

- **Física:** difusión de partículas, ruido térmico en circuitos, movimiento de moléculas.
- **Finanzas:** el modelo de precios estándar es el **movimiento browniano geométrico**, donde los *rendimientos* siguen un browniano con deriva. De ahí salen Black-Scholes y la teoría moderna de derivados.
- **Biología:** trayectorias de microorganismos, dispersión de poblaciones.
- **Ingeniería:** ruido en señales y sensores, filtros de Kalman (donde la incertidumbre evoluciona de forma browniana).

## Introducción al cálculo de Itô

### El problema: la regla de la cadena falla

Supongamos que queremos describir la evolución de una cantidad $f(W_t)$ que es función del browniano: por ejemplo, el precio de una opción como función del precio del activo. Si $W_t$ fuera diferenciable, la regla de la cadena clásica diría $df = f'(W_t)\,dW_t$. Pero $W_t$ **no es diferenciable en ningún punto**, y además tiene variación infinita: el cálculo diferencial clásico colapsa. Peor aún: la intuición ingenua da resultados *falsos*, no solo imprecisos.

La clave técnica es la variación cuadrática $[W]_t = t$. En un intervalo infinitesimal $dt$, el incremento $dW_t$ es "del orden de" $\sqrt{dt}$ (no de $dt$, como sería una función suave). Por lo tanto, su cuadrado es del orden de $dt$ y **no puede despreciarse** al hacer un desarrollo de Taylor de segundo orden. El término que la regla clásica descarta es justamente el que no hay que descartar.

### El lema de Itô

El **lema de Itô** (Kiyoshi Itô, 1944) es la versión estocástica de la regla de la cadena. Para una función $f$ suficientemente suave:

$$df(W_t) = f'(W_t)\,dW_t + \frac{1}{2} f''(W_t)\,dt$$

Aquí $f'$ y $f''$ son la primera y segunda derivada ordinarias de $f$. En su forma integral:

$$f(W_t) - f(W_0) = \int_0^t f'(W_s)\,dW_s + \frac{1}{2}\int_0^t f''(W_s)\,ds$$

El primer término es una **integral de Itô** y el segundo es una integral ordinaria. La regla se resume así: *se hace el Taylor de orden 2, y el término $(dW_t)^2$ se reemplaza por $dt$* (porque la variación cuadrática es $t$). Es una regla de cálculo compacta y muy operativa.

**Ejemplo.** Sea $f(x) = x^2$. Entonces $f' = 2x$ y $f'' = 2$. El lema de Itô da:

$$d(W_t^2) = 2W_t\,dW_t + \frac{1}{2}\cdot 2 \cdot dt = 2W_t\,dW_t + dt$$

que, reordenado, es exactamente la afirmación de que $W_t^2 - t$ es martingala (su diferencial estocástico no tiene componente $dt$, es decir, no tiene deriva). Este ejemplo conecta todo: Itô explica las martingalas asociadas al browniano.

### ¿Qué es una integral de Itô?

La **integral de Itô** $\int_0^t H_s\,dW_s$ (donde $H_s$ es un proceso que "solo mira el pasado", adaptado, y con condiciones de integrabilidad) se define como un límite de sumas en las que el integrando se evalúa **en el extremo izquierdo** de cada subintervalo:

$$\int_0^t H_s\,dW_s = \lim_{\|P\| \to 0} \sum_{k} H_{t_k}(W_{t_{k+1}} - W_{t_k})$$

donde $P$ es una partición del intervalo $[0,t]$ y $\|P\|$ su tamaño máximo. El detalle de evaluar $H$ en el extremo *izquierdo* (y no en el derecho ni en el punto medio) es crucial: garantiza que la integral no puede "mirar el futuro", lo que la hace matemáticamente coherente (la integral es una martingala) y la conecta con la interpretación financiera (no se puede operar con información futura). La convergencia de las sumas no es trayectoria a trayectoria (como en Riemann), sino en media cuadrática (convergencia en $L^2$), otro tecnicismo necesario por la variación infinita.

Dos propiedades fundamentales de la integral de Itô:

1. **Esperanza nula:** $E\left[\int_0^t H_s\,dW_s\right] = 0$ — el azar puro no tiene deriva.
2. **Isometría de Itô:** $E\left[\left(\int_0^t H_s\,dW_s\right)^2\right] = E\left[\int_0^t H_s^2\,ds\right]$ — la varianza de la integral se calcula integrando la varianza instantánea. Es la tabla de multiplicar del cálculo estocástico.

### Ecuaciones diferenciales estocásticas (EDS)

Una **ecuación diferencial estocástica** (EDS; en inglés SDE) es una ecuación para la evolución de un proceso $X_t$ con una parte determinista y una parte aleatoria:

$$dX_t = \mu(X_t, t)\,dt + \sigma(X_t, t)\,dW_t$$

Leamos los símbolos: $\mu$ (mu) es la **deriva** (*drift*), el crecimiento promedio por unidad de tiempo; $\sigma$ (sigma) es la **volatilidad** (*diffusion*), la intensidad del ruido; $dW_t$ es el incremento del browniano. La expresión significa que, en un intervalo pequeño $dt$, $X_t$ cambia en $\mu\,dt$ en promedio, más una perturbación aleatoria $\sigma\,dW_t$ de desviación estándar $\sigma\sqrt{dt}$. Es el análogo estocástico de la ecuación diferencial ordinaria $x' = \mu(x)$.

La versión general del lema de Itô, para $f(X_t, t)$ con $X_t$ que resuelve una EDS, es:

$$df(X_t, t) = \left(\frac{\partial f}{\partial t} + \mu\frac{\partial f}{\partial x} + \frac{1}{2}\sigma^2\frac{\partial^2 f}{\partial x^2}\right)dt + \sigma\frac{\partial f}{\partial x}\,dW_t$$

Los símbolos $\partial f/\partial t$ y $\partial f/\partial x$ son derivadas parciales (derivar respecto a una variable manteniendo las otras fijas). El término nuevo frente al cálculo clásico es $\frac{1}{2}\sigma^2 \frac{\partial^2 f}{\partial x^2}$: la "corrección de Itô".

**Ejemplos de EDS:**

- **Movimiento browniano geométrico** (el modelo de Black-Scholes para precios de activos): $dS_t = \mu S_t\,dt + \sigma S_t\,dW_t$. Aquí la deriva y la volatilidad son proporcionales al nivel del precio. Su solución explícita es:

$$S_t = S_0\, e^{(\mu - \sigma^2/2)\,t + \sigma W_t}$$

La exponencial $e^{x}$ es la función exponencial natural. Observa el término $-\sigma^2/2$: es la corrección de Itô en acción. La deriva del *logaritmo* del precio no es $\mu$ sino $\mu - \sigma^2/2$. Es un error clásico (y costoso en finanzas) olvidar ese término: con $\mu = 0.1$ y $\sigma = 0.2$, la deriva efectiva del log-precio es $0.1 - 0.04/2 = 0.08$, no $0.1$. La razón profunda es la concavidad del logaritmo más la varianza que aporta el ruido: el ruido multiplicativo "come" parte del crecimiento promedio (la media geométrica es menor que la media aritmética).
- **Proceso de Ornstein-Uhlenbeck:** $dX_t = \theta(\kappa - X_t)\,dt + \sigma\,dW_t$ con $\theta > 0$: la deriva empuja a $X_t$ hacia el nivel $\kappa$ ("reversión a la media"). Modela tasas de interés, temperatura, voltajes con ruido.
- **Puente browniano:** browniano condicionado a volver a 0 en un tiempo fijo; se usa en interpolación y estadística.

La teoría de EDS (existencia y unicidad de soluciones, bajo condiciones de Lipschitz sobre $\mu$ y $\sigma$) es análoga a la de las ecuaciones diferenciales ordinarias, y su principal herramienta de resolución y análisis es precisamente el lema de Itô. Las EDS se resuelven casi siempre de forma **numérica**, con el método de Euler-Maruyama: para un paso de tiempo pequeño $\Delta t$, se genera $Z \sim N(0,1)$ (una normal estándar, mediante un generador de números aleatorios) y se actualiza:

$$X_{t+\Delta t} \approx X_t + \mu(X_t)\Delta t + \sigma(X_t)\sqrt{\Delta t}\; Z$$

Es la simulación que aparece en todo software financiero moderno.

## Ejemplos resueltos

**Ejemplo 1 (cadena de Markov: distribución estacionaria).** Considera la cadena con matriz $P = \begin{pmatrix} 0.7 & 0.3 \\ 0.4 & 0.6 \end{pmatrix}$. Halla su distribución estacionaria.

*Solución.* Escribimos las ecuaciones de balance: $\pi_1 = 0.7\pi_1 + 0.4\pi_2$ y $\pi_2 = 0.3\pi_1 + 0.6\pi_2$, con $\pi_1 + \pi_2 = 1$. De la primera: $0.3\pi_1 = 0.4\pi_2$, es decir $\pi_1 = (4/3)\pi_2$. Con la normalización: $(4/3)\pi_2 + \pi_2 = 1$, luego $(7/3)\pi_2 = 1$, $\pi_2 = 3/7$ y $\pi_1 = 4/7$. Resultado:

$$\pi = \left(\frac{4}{7},\; \frac{3}{7}\right) \approx (0.571,\; 0.429)$$

A largo plazo, el $57.1\%$ del tiempo se pasa en el estado 1. Nota que no usamos la segunda ecuación de balance: en dos estados, con la normalización, una sola ecuación de balance basta (la otra es redundante).

**Ejemplo 2 (transición en dos pasos).** Con la matriz del clima $P = \begin{pmatrix} 0.9 & 0.1 \\ 0.5 & 0.5 \end{pmatrix}$, partiendo de un día lluvioso (estado 2), ¿cuál es la probabilidad de que haga sol exactamente dos días después?

*Solución.* Necesitamos la entrada $(2,1)$ de $P^2$. Los caminos de lluvia a sol en dos pasos son: lluvia $\to$ lluvia $\to$ sol (probabilidad $0.5 \cdot 0.5 = 0.25$) y lluvia $\to$ sol $\to$ sol (probabilidad $0.5 \cdot 0.9 = 0.45$). Sumando: $0.25 + 0.45 = 0.70$. Es decir, el $70\%$. Este es el método general: para $n$ pasos, se calcula $P^n$ (multiplicando matrices o sumando caminos) y se mira la entrada correspondiente.

**Ejemplo 3 (Poisson).** Una línea de atención recibe en promedio 3 llamadas cada 5 minutos. ¿Cuál es la probabilidad de recibir exactamente 2 llamadas en 10 minutos?

*Solución.* La tasa es $\lambda = 3$ cada 5 minutos, así que en 10 minutos $\lambda t = 3 \cdot 2 = 6$ (si tomamos 5 minutos como unidad de tiempo). La fórmula de Poisson da:

$$P(N = 2) = \frac{e^{-6} 6^2}{2!} = 18 e^{-6} \approx 0.0446$$

Alrededor del $4.5\%$. Ojo con la unidad de tiempo: si medimos el tiempo en minutos, $\lambda = 0.6$ por minuto y $t = 10$, y $\lambda t = 6$ de nuevo. Lo importante es que $\lambda t$ sea el número esperado de eventos en el intervalo.

**Ejemplo 4 (cola M/M/1).** Un supermercado tiene una caja: llegan $\lambda = 30$ clientes por hora y la caja atiende a $\mu = 40$ por hora. Halla la utilización, el número medio de clientes en el sistema y el tiempo medio de espera.

*Solución.* $\rho = 30/40 = 0.75$: la caja está ocupada el 75% del tiempo. $L = \rho/(1-\rho) = 0.75/0.25 = 3$ clientes en promedio. Por la ley de Little, $W = L/\lambda = 3/30 = 0.1$ horas, es decir 6 minutos en promedio (esperando más siendo atendidos). Contraste: si las llegadas subieran a $\lambda = 32$ (con $\mu = 40$), $\rho = 0.8$ y $L = 4$; un aumento del 6.7% en las llegadas sube la cola un 33%. La no linealidad es la lección central de las colas.

**Ejemplo 5 (movimiento browniano geométrico).** Un precio sigue $dS = \mu S\,dt + \sigma S\,dW$ con $S_0 = 100$, $\mu = 0.1$, $\sigma = 0.2$ y horizonte $t = 1$ (un año). Escribe la solución y evalúa el precio con una realización $Z = 0$ del ruido normalizado.

*Solución.* La solución es $S_1 = 100\,e^{(0.1 - 0.2^2/2)\cdot 1 + 0.2\,Z} = 100\,e^{0.08 + 0.2Z}$. Con $Z = 0$ (el escenario "sin sorpresas"): $S_1 = 100\,e^{0.08} \approx 108.33$. Observa que el valor más probable no crece al $10\%$ sino al $8.3\%$: la corrección $-\sigma^2/2 = -0.02$ es la firma del cálculo de Itô.

**Ejemplo 6 (martingala y parada).** En una ruleta (imaginaria, justa) apuestas $\$1$ al rojo en cada giro, y el rojo paga $1:1$ con probabilidad $1/2$. Muestra que tu capital es martingala y explica por qué ninguna estrategia de apuestas cambia el valor esperado.

*Solución.* Si $M_n$ es el capital tras $n$ giros, la ganancia esperada de cada giro es $\frac{1}{2}(+1) + \frac{1}{2}(-1) = 0$, así que $E[M_{n+1} \mid \mathcal{F}_n] = M_n$: martingala. Por la propiedad de martingala, $E[M_n] = M_0$ para todo $n$: el valor esperado del capital final es siempre el capital inicial, sin importar cómo elijas las apuestas (doblar tras perder, etc.), siempre que no haya límites de mesa, capital infinito ni apuestas que miren el futuro. Las estrategias "de martingala" de casino fallan precisamente porque esos supuestos no se cumplen: el capital es finito y las mesas tienen apuestas máximas; la ruina eventual es segura y el valor esperado sigue siendo negativo.

## Errores comunes

- **Suponer estacionariedad sin verificar.** La convergencia a $\pi$ exige irreducibilidad y aperiodicidad. Una cadena periódica oscila; una reducible puede quedarse atrapada en una clase según el punto de partida. Siempre clasifica los estados antes de usar $\pi$.
- **Invertir filas y columnas de la matriz de transición.** $p_{ij}$ es ir de $i$ a $j$: fila = origen, columna = destino. Si multiplicas $\pi_0$ como columna en lugar de fila, todo sale mal.
- **Olvidar la condición de normalización.** La ecuación $\pi = \pi P$ tiene infinitas soluciones proporcionales; sin $\sum_j \pi_j = 1$ no hay unicidad.
- **Tratar el browniano como diferenciable.** No lo es en ningún punto y tiene variación infinita. Usar la regla de la cadena clásica o hablar de su "velocidad" produce contradicciones; el cálculo correcto es el de Itô.
- **Olvidar el término $-\sigma^2/2$.** La deriva del log-precio en el browniano geométrico es $\mu - \sigma^2/2$, no $\mu$. Olvidarlo sobreestima sistemáticamente los precios y rompe el vínculo con Black-Scholes.
- **Confundir martingala con "sin riesgo".** Una martingala es un juego justo en esperanza, pero puede tener varianza enorme y llevarte a la ruina en el camino. "Esperanza cero" no es "seguro".
- **Aplicar el teorema de parada opcional sin verificar condiciones.** Con espera infinita en promedio o capital ilimitado, $E[M_\tau] = E[M_0]$ puede fallar. Es la base de los mitos de "apuestas infalibles".
- **Usar la cola M/M/1 con $\rho \geq 1$.** No existe régimen estable; las fórmulas de $L$ y $W$ presuponen $\rho < 1$.
- **Confundir cadena de Markov con sucesión independiente.** La dependencia es la esencia del modelo. Y a la inversa: aplicar Markov a procesos con memoria larga (ráfagas, estacionalidad) produce modelos que fallan en las predicciones. Verifica siempre la hipótesis.
- **Confundir tiempo discreto con continuo.** La matriz $P$ describe saltos a pasos discretos; el proceso de Poisson y el browniano viven en tiempo continuo y usan tasas y diferenciales. Mezclar las herramientas (por ejemplo, "la matriz de transición del browniano") es un síntoma de no haber entendido la clasificación.

## Ejercicios propuestos

1. Con $P = \begin{pmatrix} 0.5 & 0.5 \\ 0.2 & 0.8 \end{pmatrix}$, halla la distribución estacionaria $\pi$.
2. ¿Es recurrente el paseo aleatorio simple en $\mathbb{Z}$? ¿Y en dimensión 3?
3. Cola M/M/1 con $\lambda = 4$ y $\mu = 5$: halla $\rho$, $L$ y $W$.
4. Proceso de Poisson con $\lambda t = 1$: calcula $P(\text{exactamente 3 eventos})$.
5. Verifica que $W_t^2 - t$ es martingala (usa el lema de Itô).
6. Simula un paso browniano con $dt = 0.01$: ¿cuál es la varianza del incremento?
7. ¿Por qué el paseo aleatorio en dimensión 3 es transitorio?
8. Escribe la EDS del movimiento browniano geométrico y su solución explícita.

**Respuestas:**

1. Ecuaciones: $\pi_1 = 0.5\pi_1 + 0.2\pi_2 \Rightarrow 0.5\pi_1 = 0.2\pi_2 \Rightarrow \pi_1 = 0.4\pi_2$; con $\pi_1 + \pi_2 = 1$: $\pi = (2/7, 5/7) \approx (0.286, 0.714)$.
2. Sí, es recurrente en dimensión 1 (y también en dimensión 2); en dimensión 3 el paseo aleatorio es transitorio: la probabilidad de retorno al origen es estrictamente menor que 1 (vale aproximadamente $0.34$).
3. $\rho = 4/5 = 0.8$; $L = 0.8/0.2 = 4$ clientes; $W = L/\lambda = 1$ unidad de tiempo.
4. $P(N = 3) = e^{-1}\cdot 1^3/3! = e^{-1}/6 \approx 0.0613$.
5. Por Itô, $d(W_t^2) = 2W_t\,dW_t + dt$, luego $d(W_t^2 - t) = 2W_t\,dW_t$: no tiene deriva, así que $E[W_{t+h}^2 - (t+h) \mid \mathcal{F}_t] = W_t^2 - t$: es martingala.
6. El incremento en un intervalo $dt$ se distribuye $N(0, dt)$, así que su varianza es $0.01$.
7. Porque con probabilidad positiva la trayectoria se aleja y no regresa jamás: el espacio tridimensional es lo bastante "grande" para perderse (probabilidad de retorno $\approx 0.34 < 1$).
8. $dS_t = \mu S_t\,dt + \sigma S_t\,dW_t$; solución: $S_t = S_0 e^{(\mu - \sigma^2/2)t + \sigma W_t}$.

## Resumen

- Un **proceso estocástico** es una familia de variables aleatorias $\{X_t\}_{t \in T}$ indexadas por el tiempo, que puede ser discreto o continuo, igual que el espacio de estados.
- La **propiedad de Markov** reduce el futuro al presente; una **cadena de Markov** queda descrita por su **matriz de transición** $P = (p_{ij})$, cuyas filas suman 1.
- La **distribución estacionaria** resuelve $\pi = \pi P$ y describe el largo plazo; existe y es única (con convergencia) para cadenas irreducibles y aperiódicas.
- Los estados se clasifican en **recurrentes/transitorios**, **periódicos/aperiódicos**; el tiempo medio de retorno es $1/\pi_i$.
- El **proceso de Poisson** con tasa $\lambda$ modela eventos independientes: conteos $\text{Poisson}(\lambda t)$, tiempos $\text{Exponencial}(\lambda)$; las colas M/M/1 con $\rho = \lambda/\mu$ muestran la no linealidad de la congestión.
- Una **martingala** es un juego justo: $E[M_{n+1} \mid \mathcal{F}_n] = M_n$; sus teoremas (Doob, convergencia, parada opcional) sostienen la valoración neutral al riesgo.
- El **movimiento browniano** es continuo, no diferenciable, con $W_t \sim N(0,t)$ y variación cuadrática $[W]_t = t$; modela difusión y precios.
- El **cálculo de Itô** corrige la regla de la cadena con el término $\frac{1}{2}f''\,dt$; las **EDS** $dX = \mu\,dt + \sigma\,dW$ modelan dinámicas con ruido, y el browniano geométrico resuelve Black-Scholes con su deriva corregida $\mu - \sigma^2/2$.
`,

  "series-tiempo": String.raw`
## ¿Qué es una serie de tiempo?

Imagina que anotas un mismo número, día tras día: la temperatura de tu ciudad al mediodía, las ventas de una tienda cada mes, o el precio de cierre de una acción cada día. La lista de esos números, **en el orden en que fueron observados**, es una **serie de tiempo**.

Dicho con precisión: una serie de tiempo es una secuencia de observaciones ordenadas en el tiempo, escritas como $\{y_t\}$. La letra $y$ es el valor observado (la temperatura, las ventas, el precio) y el subíndice $t$ es el **instante de tiempo** en que se observó: $y_1$ es la primera observación, $y_2$ la segunda, y así. Por ejemplo, si cada mes registras las ventas durante 12 meses, $y_3 = 450$ significa "en el tercer mes se vendieron 450 unidades".

Lo que distingue a una serie de tiempo de cualquier otro conjunto de datos es el **orden**. En estadística clásica, el orden de los datos no importa; aquí es la esencia: $y_t$ casi siempre guarda relación con lo que ocurrió antes ($y_{t-1}$, $y_{t-2}$, ...). El objetivo central es aprovechar ese pasado para **pronosticar** el futuro, pero también para **entender** la estructura de la serie (¿hay una tendencia? ¿un patrón que se repite?) y, a veces, para **controlar** un proceso.

Ejemplos típicos de series de tiempo:

- **Economía:** el PIB trimestral de un país, la inflación mensual, el tipo de cambio diario.
- **Negocios:** demanda de un producto, ventas, inventarios, visitas a una página web.
- **Meteorología:** temperatura diaria, precipitación mensual, nivel de un río.
- **Finanzas:** precios y rendimientos de acciones, volatilidad, tasas de interés.
- **Salud:** número diario de casos de una enfermedad, signos vitales de un paciente monitorizado.

A lo largo de esta guía aprenderás a leer la notación, a descomponer una serie en sus piezas, a detectar si es apta para modelarse y a usar los modelos clásicos de pronóstico: AR, MA, ARMA, ARIMA, SARIMA y suavizado exponencial, más una idea de cómo se modela la volatilidad (ARCH/GARCH) y cómo se juzga si un pronóstico es bueno.

## Cómo leer la notación

La notación de series de tiempo es compacta; aquí la explicamos símbolo por símbolo, tal como se usarán en el resto de la guía.

**El subíndice $t$.** La letra $t$ representa el tiempo y funciona como contador de observaciones. $t = 1$ es la primera observación, $t = 2$ la segunda, etc. Es exactamente igual al índice $n$ de las sucesiones: $y_1, y_2, y_3, \ldots$ Si la serie es mensual y empieza en enero de 2020, entonces $y_1$ es el dato de enero, $y_2$ el de febrero, y $y_{13}$ el de enero de 2021.

**El pasado de la serie.** $y_{t-1}$ se lee "y sub t menos uno" y es el valor **inmediatamente anterior** a $y_t$. $y_{t-2}$ es el valor de hace dos periodos, y $y_{t-k}$ el de hace $k$ periodos. Estas expresiones son las protagonistas de los modelos: dicen que el presente depende del pasado.

**La media $\mu$ y el sombrero $\hat{y}$.** La letra griega $\mu$ (mu) denota el nivel promedio de la serie. Un símbolo con sombrero, como $\hat{y}_t$, significa **pronóstico**: $\hat{y}_t$ es el valor estimado de $y_t$ hecho con la información disponible antes de observar $y_t$. La diferencia entre lo observado y lo pronosticado, $y_t - \hat{y}_t$, se llama **error de pronóstico** y es el termómetro de todo modelo.

**El ruido $\varepsilon_t$.** La letra griega $\varepsilon$ (épsilon) con subíndice representa la parte aleatoria e impredecible de la serie: la sorpresa de cada periodo. Se supone que es un **ruido blanco**: media cero ($E[\varepsilon_t] = 0$), varianza constante y sin correlación con su propio pasado. Piensa en ella como las fluctuaciones que ningún modelo puede anticipar.

**El operador de diferencia $\Delta$.** La letra griega $\Delta$ (delta mayúscula) significa "cambio respecto al periodo anterior":
$$\Delta y_t = y_t - y_{t-1}$$
Si las ventas pasaron de 100 a 115, la diferencia es $\Delta y_t = 15$. Como verás, aplicar diferencias es la operación más importante para preparar una serie.

**El operador de rezago $B$.** $B$ significa "retrocede un paso": $B\,y_t = y_{t-1}$. Entonces $\Delta y_t = y_t - B y_t = (1-B)y_t$. Es solo una taquigrafía que hace más compactas las fórmulas.

**Parámetros griegos.** $\phi$ (fi) son los coeficientes de los valores pasados en los modelos autorregresivos; $\theta$ (zeta) son los coeficientes de los errores pasados en los modelos de medias móviles; $\alpha$ (alfa) y $\beta$ (beta) aparecen en el suavizado exponencial y en los modelos de volatilidad; $\omega$ (omega) es una constante de nivel; $c$ es una constante; $\sigma^2$ (sigma al cuadrado) es la varianza del ruido, y $\sigma$ su raíz cuadrada, la desviación estándar.

**La barra vertical $\mid$.** En $E[y_t \mid \text{pasado}]$ se lee "dado que": la esperanza de $y_t$ **dada** la información previa. Es la notación de condicionamiento, heredada de la probabilidad condicional.

**Valores absolutos y desigualdades.** La condición $|\phi| < 1$ (barras = valor absoluto, que ignora el signo) significa "el número $\phi$ está estrictamente entre $-1$ y $1$". Es la condición que garantiza que un modelo autorregresivo no explote.

**Los paréntesis de los modelos.** La escritura AR($p$) indica un modelo autorregresivo de orden $p$, es decir, con $p$ valores pasados. MA($q$) es un modelo de medias móviles con $q$ errores pasados. ARIMA($p, d, q$) combina tres números: el orden autorregresivo $p$, el número de diferencias $d$ y el orden de medias móviles $q$. Cada letra y cada número se explican en sus secciones; por ahora retén que son "recetas" con ingredientes contados.

Regla de lectura práctica: si una fórmula te confunde, reemplaza las letras por números y escribe los tres primeros términos a mano. Casi toda esta guía se entiende haciendo eso una vez.

## Componentes: tendencia, estacionalidad, ciclo y ruido

La idea más útil del análisis de series es que toda serie puede pensarse como la combinación de unas pocas piezas reconocibles. Son cuatro:

**La tendencia $T_t$.** Es el movimiento suave y sostenido de largo plazo: crecimiento, declive o estabilidad. No es cada subida y bajada, sino la dirección general. Por ejemplo, las ventas de una empresa que crecen año a año tienen tendencia creciente. La $T$ con subíndice $t$ significa "el valor de la tendencia en el instante $t$": una tendencia lineal sería $T_t = a + b\,t$, donde $a$ es el punto de partida y $b$ la pendiente (cuánto sube la serie por cada periodo).

**La estacionalidad $S_t$.** Es un patrón que se **repite cada periodo fijo y conocido**: cada año, cada trimestre, cada semana, cada día. Los picos de ventas cada diciembre, el aumento de consumo de helado cada verano o el tráfico de una calle cada viernes son estacionalidad. La palabra clave es "periodo fijo": sabes de antemano cuándo vuelve el patrón. El periodo se denota $s$: para datos mensuales con patrón anual, $s = 12$; para datos trimestrales, $s = 4$; para datos diarios con patrón semanal, $s = 7$. A lo largo de un año la estacionalidad suma cero: las subidas estacionales se compensan con bajadas.

**El ciclo $C_t$.** Es una fluctuación ondulante de largo plazo, **sin periodo fijo**, ligada a la economía: expansión y recesión. Dura años y no es predecible en su calendario. En la práctica, separar el ciclo de la tendencia es difícil y muchos análisis los tratan juntos como "tendencia-ciclo".

**El ruido $\varepsilon_t$.** Es la variación aleatoria que queda tras quitar todo lo anterior: eventos puntuales, errores de medición, sorpresas. Por definición, no tiene patrón.

**¿Cómo se combinan las piezas?** Hay dos modelos clásicos de composición. El **modelo aditivo** suma las piezas:
$$y_t = T_t + S_t + C_t + \varepsilon_t$$
Aquí la estacionalidad es un "más o menos" constante (por ejemplo, 50 unidades extra cada diciembre, pase lo que pase con el nivel). El **modelo multiplicativo** las multiplica:
$$y_t = T_t \cdot S_t \cdot C_t \cdot \varepsilon_t$$
Aquí la estacionalidad es proporcional al nivel (un diciembre multiplica las ventas por 1.3). El multiplicativo conviene cuando la amplitud estacional **crece** con el nivel de la serie; el aditivo, cuando es estable.

**Descomponer** una serie significa estimar cada componente. Las herramientas clásicas son las **medias móviles** (promedios deslizantes que suavizan el ruido) y algoritmos como STL. Por ejemplo, una media móvil de 12 meses "promedia" la estacionalidad anual y deja ver la tendencia; restando esa media a la serie original queda la parte estacional.

**Ejemplo.** Una juguetería vende poco en enero, mucho en diciembre. Su gráfica muestra una tendencia creciente (cada año vende más), un pico cada diciembre (estacionalidad de periodo $s = 12$) y saltos aleatorios mes a mes (ruido). Con un modelo multiplicativo: las ventas de diciembre valen aproximadamente tendencia $\times$ 2.

**¿Para qué sirve descomponer?** Para entender la serie, para quitar la estacionalidad (ajuste estacional) y comparar meses justamente, y para pronosticar: si sabes la tendencia y el factor de diciembre, puedes proyectar el próximo diciembre.

## Estacionariedad

La **estacionariedad** es la propiedad que necesitan las series para que los modelos clásicos funcionen. Intuitivamente, una serie es estacionaria si "se ve igual" en cualquier tramo: el mismo nivel promedio, la misma dispersión, y las mismas relaciones con su pasado, sin importar desde cuándo empieces a mirarla.

**La definición (estacionariedad débil).** Una serie es débilmente estacionaria si cumple tres condiciones, para todo instante $t$:

1. **Media constante:** $E[y_t] = \mu$ (el promedio no cambia con el tiempo).
2. **Varianza constante:** $\text{Var}(y_t) = \sigma^2$ (la dispersión no cambia con el tiempo).
3. **Autocovarianza que depende solo de la distancia:** $\text{Cov}(y_t, y_{t+h})$ (la relación entre $y_t$ y su valor $h$ periodos después) depende solo de $h$, no del instante $t$.

Aquí $E[\cdot]$ es la esperanza (promedio teórico), $\text{Var}$ la varianza (dispersión) y $\text{Cov}$ la covarianza (grado en que dos cosas se mueven juntas). La tercera condición dice que la "memoria" de la serie es la misma en 1990 y en 2020.

**¿Por qué importa tanto?** Los modelos ARMA (que verás en seguida) están diseñados para series estacionarias. Si una serie tiene tendencia, su media no es constante; si tiene estacionalidad, su autocovarianza depende de la estación. Ajustar un modelo estacionario a una serie no estacionaria produce estimaciones engañosas y **regresiones espurias**: dos series con tendencia pueden parecer relacionadas sin estarlo.

**El ejemplo clave: el paseo aleatorio.** La serie definida por $y_t = y_{t-1} + \varepsilon_t$ (cada valor es el anterior más una sorpresa aleatoria) **no es estacionaria**: su nivel deambula sin volver a ningún promedio y su varianza crece con el tiempo. Pero su primera diferencia, $\Delta y_t = \varepsilon_t$, sí es estacionaria (es ruido blanco puro). Esta es la lección central: **diferenciar convierte muchos procesos no estacionarios en estacionarios**.

**Transformaciones para lograr estacionariedad:**

- **Diferenciación ordinaria:** $\Delta y_t = y_t - y_{t-1}$. Elimina tendencias. Aplicarla $d$ veces se llama diferenciación de orden $d$. Casi nunca se necesita $d > 2$; con $d = 1$ basta en la práctica.
- **Diferenciación estacional:** $\Delta_s y_t = y_t - y_{t-s}$. Compara cada valor con el mismo periodo del ciclo anterior: resta el enero pasado al enero actual. Elimina estacionalidad de periodo $s$.
- **Logaritmo:** $\ln y_t$. Si la varianza crece con el nivel de la serie, el logaritmo la estabiliza (la serie de logaritmos tiene dispersión más homogénea). También convierte el modelo multiplicativo en aditivo, porque $\ln(T_t \cdot S_t) = \ln T_t + \ln S_t$.
- **Box-Cox:** una familia de transformaciones que generaliza al logaritmo; elige el exponente que mejor estabiliza la varianza.

**¿Cómo se verifica?** Hay pruebas estadísticas: la **prueba de Dickey-Fuller aumentada (ADF)**, cuya hipótesis nula es "la serie tiene una raíz unitaria" (es decir, es no estacionaria), y la **prueba KPSS**, cuya nula es "la serie es estacionaria". Usarlas juntas ayuda a decidir con más confianza. Además, el ojo entrenado reconoce la no estacionariedad: una serie que sube o baja de forma persistente, o con varianza que se ensancha, no es estacionaria.

**En resumen:** antes de modelar, mira la serie, transforma (logaritmo si hace falta) y diferencia hasta que su media, su varianza y su memoria luzcan estables. Ese es el punto de partida de toda la metodología de Box-Jenkins que veremos más adelante.

## ACF y PACF

La autocorrelación es la herramienta con la que una serie "cuenta" cuánto recuerda de su pasado. Es la correlación de la serie **consigo misma** desplazada en el tiempo.

**La función de autocorrelación (ACF).** La autocorrelación de rezago $h$ (h se lee "hache" y es el número de periodos de separación) se define como:
$$\rho_h = \frac{\text{Cov}(y_t, y_{t+h})}{\text{Var}(y_t)}$$
Se lee: la correlación entre un valor y el de $h$ periodos después, dividida entre la varianza para normalizar. Siempre vale $1$ en el rezago $h = 0$ (toda variable correlaciona perfectamente consigo misma) y queda entre $-1$ y $1$ en los demás rezagos. El **correlograma** es la gráfica de $\rho_h$ contra $h$: barras que muestran la memoria de la serie. Si la barra del rezago 1 es alta y positiva, un valor alto hoy suele seguir a un valor alto ayer.

Para saber si una autocorrelación es "significativa" (es decir, demasiado grande para ser casualidad), se dibujan **bandas de confianza**, típicamente en $\pm 1.96 / \sqrt{n}$, donde $n$ es el número de observaciones. Las barras que sobresalen de las bandas indican memoria real, no ruido.

**La función de autocorrelación parcial (PACF).** La ACF tiene un defecto sutil: si $y_t$ depende de $y_{t-1}$ y $y_{t-1}$ depende de $y_{t-2}$, entonces $y_t$ se correlaciona con $y_{t-2}$ **de rebote**, sin relación directa. La PACF elimina ese efecto intermedio: la autocorrelación parcial de rezago $h$ es la correlación entre $y_t$ y $y_{t-h}$ **habiendo quitado la influencia de todos los rezagos intermedios** $y_{t-1}, \ldots, y_{t-h+1}$. Es la "correlación directa" a distancia $h$, sin intermediarios.

**La regla de lectura que identifica modelos.** Comparando el patrón de la ACF y la PACF se adivina el tipo de modelo:

- **AR($p$) (autorregresivo):** la ACF **decae gradualmente** (como una ola que se apaga) y la PACF **se corta** tras el rezago $p$ (barras significativas solo hasta $p$).
- **MA($q$) (medias móviles):** al revés: la ACF **se corta** tras el rezago $q$ y la PACF **decae gradualmente**.
- **ARMA($p, q$):** ambas decaen gradualmente (hay que usar criterios numéricos).

**Ejemplo.** Si el correlograma muestra la PACF significativa solo en el rezago 1 y la ACF decayendo lentamente, un modelo **AR(1)** es el candidato natural: el presente depende del pasado inmediato, y la dependencia indirecta produce el decaimiento lento de la ACF. Si fuera al revés (ACF significativa solo en el rezago 1), el candidato es **MA(1)**: solo el error de ayer importa.

Esta lectura es el paso de **identificación** en la metodología de Box-Jenkins: antes de ajustar nada, las gráficas ACF y PACF sugieren qué modelo probar. Más adelante verás cómo se combina con la diferenciación (para series no estacionarias se grafican la ACF y la PACF **después de diferenciar**).

## Modelos AR, MA y ARMA

Llega el corazón del tema: los modelos lineales de series de tiempo. Todos comparten una idea: $y_t$ se explica como una combinación de términos pasados más una sorpresa presente $\varepsilon_t$.

**El modelo AR($p$) — autorregresivo.** "Autorregresivo" significa "regresión sobre uno mismo": el valor actual depende de sus propios valores pasados:
$$y_t = c + \phi_1 y_{t-1} + \phi_2 y_{t-2} + \cdots + \phi_p y_{t-p} + \varepsilon_t$$
Leyendo cada símbolo: $c$ es una constante; $\phi_1$ es el coeficiente que multiplica al valor de hace un periodo; $\phi_2$, al de hace dos; y así hasta $p$, el **orden** del modelo (cuántos periodos de memoria). $\varepsilon_t$ es la sorpresa del periodo actual. Por ejemplo, el AR(1):
$$y_t = c + \phi_1 y_{t-1} + \varepsilon_t$$
dice: "el valor de hoy es una constante, más una fracción del valor de ayer, más una sorpresa". Con $\phi_1 = 0.7$: cada valor "arrastra" el 70% del anterior.

**Condición de estacionariedad.** Un AR($p$) es estacionario si las raíces del **polinomio característico** $1 - \phi_1 z - \phi_2 z^2 - \cdots - \phi_p z^p = 0$ están todas **fuera del círculo unitario** (tienen módulo mayor que 1). Para el AR(1) esto se reduce a la condición simple que ya conoces: $|\phi_1| < 1$. Con $|\phi_1| \geq 1$ la serie explota o pasea sin rumbo.

**La media de un AR(1).** Tomando esperanzas en $y_t = c + \phi_1 y_{t-1} + \varepsilon_t$ y usando que en estado estacionario $E[y_t] = E[y_{t-1}] = \mu$ y $E[\varepsilon_t] = 0$, se obtiene $\mu = c + \phi_1 \mu$, de donde:
$$\mu = \frac{c}{1 - \phi_1}$$
La serie fluctúa alrededor de ese nivel. Con $c = 10$ y $\phi_1 = 0.5$: $\mu = 20$. Fíjate en la intuición: si $c$ es el "empuje" constante y $1 - \phi_1$ es la "fuga" de memoria, el nivel de equilibrio es el empuje dividido por la fuga.

**El modelo MA($q$) — medias móviles.** Aquí el valor actual depende de los **errores pasados**, no de los valores pasados:
$$y_t = \mu + \varepsilon_t + \theta_1 \varepsilon_{t-1} + \theta_2 \varepsilon_{t-2} + \cdots + \theta_q \varepsilon_{t-q}$$
$\mu$ es la media de la serie; $\theta_1$ pondera la sorpresa de ayer, $\theta_2$ la de hace dos periodos, hasta $q$. El MA(1), $y_t = \mu + \varepsilon_t + \theta_1 \varepsilon_{t-1}$, dice que una sorpresa ayer todavía afecta el valor de hoy. Un MA siempre es estacionario (la media y la varianza no dependen de $t$); su contraparte, la **invertibilidad**, es la condición análoga sobre los coeficientes $\theta$ para poder leer el pasado desde el presente.

**El modelo ARMA($p, q$).** Combina ambos ingredientes:
$$y_t = c + \phi_1 y_{t-1} + \cdots + \phi_p y_{t-p} + \varepsilon_t + \theta_1 \varepsilon_{t-1} + \cdots + \theta_q \varepsilon_{t-q}$$
Es el modelo general para series estacionarias: memoria de valores pasados **y** de errores pasados. En la práctica, órdenes pequeños (p y q iguales a 1 o 2) resuelven la mayoría de los casos reales.

**Cómo se distinguen en la práctica.** La memoria de cada modelo deja huella en los correlogramas: el AR produce PACF que se corta y ACF que decae; el MA produce ACF que se corta y PACF que decae; el ARMA produce ambas decaídas. Esa es la firma que ya aprendiste a leer.

**Ejemplo con números.** El AR(1) con $\phi = 0.7$ tiene autocorrelaciones $\rho_h = 0.7^h$: en el rezago 1, $0.7$; en el rezago 2, $0.49$; en el rezago 3, $0.343$; un decaimiento geométrico, exactamente el patrón "ACF decae gradualmente" de la sección anterior.

## ARIMA y SARIMA

La realidad rara vez entrega series estacionarias: llegan con tendencia y estacionalidad. Los modelos ARIMA y SARIMA son la solución: **ARMA aplicado a la serie ya transformada**.

**El modelo ARIMA($p, d, q$).** La letra I es de "integrado", y se refiere a cuántas diferencias hicieron falta. La receta completa es:

1. **Diferencia** la serie $d$ veces para eliminar la tendencia: $d = 0$ si ya es estacionaria, $d = 1$ si tiene tendencia lineal (lo más común), $d = 2$ en casos raros.
2. **Ajusta un ARMA($p, q$)** a la serie diferenciada.

En símbolos, con $d = 1$ y escribiendo $\Delta y_t = y_t - y_{t-1}$:
$$\Delta y_t = c + \phi_1 \Delta y_{t-1} + \cdots + \phi_p \Delta y_{t-p} + \varepsilon_t + \theta_1 \varepsilon_{t-1} + \cdots + \theta_q \varepsilon_{t-q}$$
Así, ARIMA(1,1,0) significa: "diferencia una vez y ajusta un AR(1)"; ARIMA(0,1,1): "diferencia una vez y ajusta un MA(1)".

**El modelo SARIMA($p, d, q$)($P, D, Q$)$_s$.** Añade el tratamiento de la estacionalidad de periodo $s$. Los paréntesis mayores son la parte no estacional (ya conocida); los menores son la parte estacional:

- $P$: orden autorregresivo estacional (cuántos "mismos periodos de ciclos pasados" importan).
- $D$: número de diferencias estacionales $\Delta_s y_t = y_t - y_{t-s}$.
- $Q$: orden de medias móviles estacional.
- $s$: el periodo (12 para mensual anual, 4 para trimestral, 7 para diario semanal).

Por ejemplo, SARIMA$(1,1,0)(1,1,0)_{12}$ describe ventas mensuales con tendencia y estacionalidad anual: una diferencia ordinaria y una estacional de periodo 12, más un término autorregresivo ordinario y uno estacional. La estacionalidad se elimina comparando cada mes con el mismo mes del año anterior.

**Los residuos.** Tras ajustar cualquier modelo, los **residuos** son lo que el modelo no logró explicar: las diferencias entre lo observado y lo que el modelo predijo, $\hat{\varepsilon}_t = y_t - \hat{y}_t$. La exigencia de calidad es que los residuos sean **ruido blanco**: media cero, varianza constante, sin autocorrelación. Si la ACF de los residuos todavía muestra barras significativas, quedó estructura sin capturar y hay que ampliar el modelo. La **prueba de Ljung-Box** formaliza este chequeo: su hipótesis nula es "las primeras autocorrelaciones de los residuos son todas cero".

**La metodología Box-Jenkins.** Es el procedimiento clásico en cuatro pasos:

1. **Identificación:** mira la serie, transforma (logaritmo si la varianza crece), diferencia hasta estacionariedad y examina ACF/PACF para proponer órdenes candidatos.
2. **Estimación:** ajusta los coeficientes de cada modelo candidato, típicamente por **máxima verosimilitud** (el método que elige los parámetros que hacen más probables los datos observados).
3. **Diagnóstico:** revisa los residuos (¿son ruido blanco? ¿pasa Ljung-Box?) y compara candidatos con criterios como el AIC (criterio de información de Akaike; **menor es mejor**).
4. **Pronóstico:** genera predicciones y actualízalas cuando lleguen datos nuevos.

**Ejemplo.** Una serie de ventas mensuales sube año tras año y tiene pico cada diciembre. La identificas como no estacionaria con estacionalidad anual: aplicas $d = 1$ y $D = 1$ con $s = 12$; los correlogramas de la serie doblemente diferenciada sugieren pocos términos AR/MA; ajustas SARIMA$(1,1,0)(1,1,0)_{12}$, compruebas que los residuos son ruido blanco y pronosticas los próximos meses.

## Suavizado exponencial

El suavizado exponencial es la familia **alternativa** a ARIMA para pronosticar, con otra filosofía: en lugar de un modelo con interpretación probabilística, se usa una regla recursiva sencilla que pondera las observaciones pasadas.

**Suavizado exponencial simple (SES).** Para series sin tendencia ni estacionalidad, el pronóstico del siguiente periodo es una mezcla del último valor observado y del pronóstico anterior:
$$\hat{y}_{t+1} = \alpha\, y_t + (1 - \alpha)\,\hat{y}_t$$
Aquí $\alpha$ es el **parámetro de suavizado**, un número entre 0 y 1 que controla la memoria. Si $\alpha$ es cercano a 1, el pronóstico persigue de cerca al último dato (memoria corta, reacciona rápido); si es cercano a 0, el pronóstico cambia poco (memoria larga, muy suave). El nombre "exponencial" viene de que, al desenrollar la recursión, los pesos de los datos pasados decaen exponencialmente: el dato de ayer pesa $\alpha$, el de anteayer $\alpha(1-\alpha)$, el anterior $\alpha(1-\alpha)^2$, y así.

**Holt.** Añade una **ecuación para la tendencia**: el nivel se actualiza como en SES y además se actualiza una pendiente $b_t$ que permite pronosticar series que suben o bajan de forma sostenida. El pronóstico a $h$ periodos es nivel más $h$ veces la pendiente.

**Holt-Winters.** Añade, sobre Holt, una **ecuación para la estacionalidad** de periodo $s$, en dos variantes: **aditiva** (la estacionalidad es un "más o menos" fijo) o **multiplicativa** (la estacionalidad es un factor proporcional al nivel, como los picos de diciembre que crecen con las ventas). Es el método estrella para demandas con estacionalidad y se implementa con tres parámetros de suavizado: uno para el nivel, otro para la tendencia y otro para la estacionalidad.

**Comparación con ARIMA.** El suavizado exponencial es simple, robusto, fácil de automatizar y muy usado en pronóstico de demanda industrial. Su desventaja es el menor fundamento inferencial: no produce distribuciones de pronóstico completas ni intervalos de confianza tan rigurosos como un ARIMA bien diagnosticado. En la práctica conviven: se comparan ambos sobre datos de prueba y gana el que pronostica mejor.

**Ejemplo.** Demanda mensual de helados, con nivel estable dentro de cada año y picos cada verano: Holt-Winters multiplicativo con $s = 12$ captura el patrón. Con $\alpha$ para nivel, $\beta$ para tendencia y $\gamma$ para estacionalidad, el método aprende solo, mes a mes, cuánto sube la demanda en verano.

## Volatilidad ARCH/GARCH (idea)

En series financieras (rendimientos de acciones, tipos de cambio) ocurre un fenómeno que los modelos anteriores no cubren: la **dispersión misma cambia con el tiempo**. Hay días tranquilos y días turbulentos, y lo notable es que **se agrupan**: los días de grandes movimientos se suceden (los llamados *clusters* de volatilidad). Técnicamente: la media puede ser estacionaria, pero la varianza condicional no lo es; a esto se le llama **heterocedasticidad condicional**.

**El modelo ARCH($q$).** La sigla viene del inglés *Autoregressive Conditional Heteroscedasticity* (heterocedasticidad condicional autorregresiva). Su idea: la varianza de hoy depende de los **cuadrados de las sorpresas pasadas**. Si $\varepsilon_t$ es la sorpresa del periodo $t$ y $\sigma_t^2$ su varianza condicional (la dispersión esperada de $\varepsilon_t$ dada la historia), entonces:
$$\sigma_t^2 = \omega + \alpha_1 \varepsilon_{t-1}^2 + \alpha_2 \varepsilon_{t-2}^2 + \cdots + \alpha_q \varepsilon_{t-q}^2$$
Leyendo cada símbolo: $\omega$ (omega) es un nivel base de varianza; cada $\alpha_j$ pondera el cuadrado de la sorpresa de hace $j$ periodos. El cuadrado es clave: convierte en "magnitud" tanto una sorpresa negativa como una positiva ($(-3)^2 = 3^2 = 9$), así que un día de caída brutal infla la volatilidad tanto como un día de subida brutal.

**El modelo GARCH($p, q$).** Generaliza ARCH añadiendo las **varianzas pasadas**, dando memoria más larga y flexible:
$$\sigma_t^2 = \omega + \sum_{i=1}^{q} \alpha_i \varepsilon_{t-i}^2 + \sum_{j=1}^{p} \beta_j \sigma_{t-j}^2$$
El término $\sum$ (sigma mayúscula) es la notación de suma: $\sum_{i=1}^{q}$ significa "suma desde $i = 1$ hasta $i = q$". En palabras: la volatilidad de hoy se compone de un nivel base, más la huella de las sorpresas recientes (los $\alpha_i$) y más la persistencia de la volatilidad anterior (los $\beta_j$).

**La lectura del GARCH(1,1).** Es el "caballo de batalla" de las finanzas. La suma $\alpha_1 + \beta_1$ mide la **persistencia** de la volatilidad: si es cercana a 1, los periodos turbulentos duran mucho; si es menor, se desvanecen rápido. La condición $\alpha_1 + \beta_1 < 1$ garantiza una varianza de largo plazo finita.

**¿Para qué sirve?** Para **pronosticar la volatilidad**, y con ella el riesgo: el *Value at Risk* (VaR) condicional, los márgenes de las bolsas, la valoración de opciones. Tras un día de gran caída, GARCH predice días inciertos por delante: la varianza tiene memoria, igual que la media la tenía en los modelos ARMA.

## Validación de pronósticos

Pronosticar es fácil; pronosticar **bien y demostrarlo honestamente** es el oficio. Esta sección explica cómo juzgar un modelo sin engañarse.

**La división temporal de datos.** La regla de oro: **nunca entrenes con el futuro**. Los datos se parten en dos tramos ordenados: el de **entrenamiento** (los primeros periodos, con los que se ajusta el modelo) y el de **prueba** (los últimos, que el modelo no vio, con los que se juzga). A diferencia de la validación cruzada aleatoria de la estadística clásica, aquí no se puede barajar: el tiempo es irreversible, y usar datos futuros para entrenar (lo que se llama **fuga de información**) infla las métricas y produce confianza falsa.

**Validación deslizante.** Para imitar el uso real, se emplean esquemas en que el modelo se reentrena a medida que "avanza el reloj": **walk-forward** (reentrenar en cada paso con toda la historia disponible) o **ventanas rodantes** (con una ventana fija). Es el *backtesting* serio de los pronósticos.

**Las métricas de error.** Dado un conjunto de errores $e_t = y_t - \hat{y}_t$ (real menos pronóstico), las tres métricas clásicas son:

- **MAE** (*Mean Absolute Error*, error absoluto medio): el promedio de los valores absolutos de los errores,
$$\text{MAE} = \frac{1}{n}\sum_{t=1}^{n}|e_t|$$
Mide el error típico en las mismas unidades que la serie, sin castigar los errores grandes de forma especial. El valor absoluto $|e_t|$ quita el signo: un error de $-5$ cuenta como $5$.

- **RMSE** (*Root Mean Squared Error*, raíz del error cuadrático medio):
$$\text{RMSE} = \sqrt{\frac{1}{n}\sum_{t=1}^{n} e_t^2}$$
Eleva los errores al cuadrado (castigando fuertemente los grandes) antes de promediar, y luego saca la raíz para volver a las unidades originales. Siempre cumple RMSE $\geq$ MAE, y la brecha entre ambos revela cuántos errores grandes hay.

- **MAPE** (*Mean Absolute Percentage Error*, error porcentual absoluto medio):
$$\text{MAPE} = \frac{100}{n}\sum_{t=1}^{n}\left|\frac{e_t}{y_t}\right|$$
Expresa el error como porcentaje del valor real, útil para comunicar a gerencia y para comparar series de escalas distintas. Falla si algún $y_t$ es cero.

**El modelo ingenuo como referencia.** Ninguna métrica significa nada sola: un RMSE de 15 puede ser excelente o pésimo según la serie. Por eso siempre se compara contra un **baseline** ingenuo: pronosticar que mañana será igual que hoy (el "modelo ingenuo") o que será igual que el mismo periodo del ciclo pasado. Si tu modelo no le gana al ingenuo, no aporta valor. En el ejemplo clásico: RMSE 15 contra RMSE 25 del ingenuo es una mejora del $40\%$.

**El chequeo de residuos.** Un buen modelo deja residuos que son ruido blanco (sin estructura). Si los residuos muestran autocorrelación, el modelo dejó información en la mesa. Si muestran varianza cambiante, quizá convenga un modelo de volatilidad. Este diagnóstico complementa a las métricas: un RMSE bajo con residuos estructurados es sospechoso de sobreajuste.

## Ejemplos resueltos

**Ejemplo 1 (estacionariedad).** ¿Es estacionaria $y_t = 0.5\,t + \varepsilon_t$, con $\varepsilon_t$ ruido blanco?
- La parte $0.5\,t$ crece sin límite: la media de $y_t$ es $E[y_t] = 0.5\,t$, que depende de $t$.
- No es estacionaria (falla la condición 1). Al diferenciar: $\Delta y_t = 0.5 + \varepsilon_t - \varepsilon_{t-1}$, cuya media es $0.5$ constante: la diferencia ya es estacionaria en media. Conclusión: $d = 1$ bastaría.

**Ejemplo 2 (media de un AR(1)).** Para $y_t = c + 0.5\,y_{t-1} + \varepsilon_t$ con $c = 10$, ¿alrededor de qué nivel fluctúa la serie?
- Fórmula de la media: $\mu = c/(1 - \phi_1) = 10/(1 - 0.5) = 20$.
- La serie tiende a volver a 20; cuando está por encima, el término $0.5 y_{t-1}$ la empuja de regreso.

**Ejemplo 3 (lectura de correlogramas).** La ACF es significativa solo en el rezago 1 y la PACF decae lentamente. ¿Qué modelo se sugiere?
- ACF que se corta en 1 es la firma de un MA(1): $y_t = \mu + \varepsilon_t + \theta_1 \varepsilon_{t-1}$.
- La PACF que decae es la "imagen espejo" esperada: los efectos indirectos se acumulan.

**Ejemplo 4 (autocorrelaciones de un AR(1)).** Para $y_t = 0.7 y_{t-1} + \varepsilon_t$, halla $\rho_1$, $\rho_2$ y $\rho_3$.
- En un AR(1) estacionario, $\rho_h = \phi^h = 0.7^h$.
- $\rho_1 = 0.7$; $\rho_2 = 0.49$; $\rho_3 = 0.343$: decaimiento geométrico, como predice la teoría.

**Ejemplo 5 (aplicación, ventas).** Ventas mensuales con tendencia creciente y pico cada 12 meses. Diseña el tratamiento.
- Logaritmo si la amplitud estacional crece; luego una diferencia ordinaria ($d = 1$) y una estacional ($D = 1$, $s = 12$).
- Ajustar SARIMA$(1,1,0)(1,1,0)_{12}$, verificar residuos con Ljung-Box y pronosticar.

**Ejemplo 6 (aplicación, finanzas).** Rendimientos diarios con rachas de días muy volátiles. ¿Qué modelo?
- La media es aproximadamente estacionaria, pero la varianza muestra *clusters*.
- Ajusta GARCH(1,1): $\sigma_t^2 = \omega + \alpha_1 \varepsilon_{t-1}^2 + \beta_1 \sigma_{t-1}^2$.
- Si $\alpha_1 + \beta_1 \approx 0.98$, la volatilidad es muy persistente: los sustos duran semanas; úsala para pronosticar el riesgo (VaR condicional).

**Ejemplo 7 (cálculo de métricas).** Pronósticos $\hat{y} = 100, 200, 300$ contra reales $y = 110, 190, 310$. Calcula MAE, RMSE y MAPE.
- Errores: $110 - 100 = 10$; $190 - 200 = -10$; $310 - 300 = 10$.
- MAE $= (10 + 10 + 10)/3 = 10$.
- RMSE $= \sqrt{(100 + 100 + 100)/3} = \sqrt{100} = 10$.
- MAPE $= 100 \cdot (|10/110| + |10/190| + |10/310|)/3 \approx 100 \cdot (0.0909 + 0.0526 + 0.0323)/3 \approx 5.86\%$.

**Ejemplo 8 (suavizado).** Con SES, $\alpha = 0.4$, último dato $y_t = 20$ y pronóstico previo $\hat{y}_t = 18$. Pronostica $t+1$.
- $\hat{y}_{t+1} = 0.4 \cdot 20 + 0.6 \cdot 18 = 8 + 10.8 = 18.8$.
- El pronóstico se mueve hacia el dato reciente, pero solo un $40\%$ del camino.

## Errores comunes

- **Modelar sin verificar estacionariedad.** Es el error capital: ARMA sobre una serie con tendencia da coeficientes inestables y regresiones espurias. Siempre transforma y diferencia primero.
- **Leer ACF/PACF de la serie original** cuando deberías leerlas de la serie ya diferenciada. Primero estabiliza, luego identifica.
- **Fuga de información temporal.** Entrenar con datos futuros (o normalizar usando todo el periodo) infla las métricas. La división debe respetar el orden del tiempo.
- **Sobreajustar con órdenes altos.** Añadir términos AR/MA hasta que todo "encaje" produce modelos que pronostican peor. Diagnostica residuos y usa AIC.
- **Comparar RMSE sin baseline.** Un error aparente "bajo" puede ser peor que el modelo ingenuo. La mejora sobre el ingenuo es la medida real de valor.
- **Confundir autocorrelación con causalidad.** Que $y_t$ siga a $y_{t-1}$ no explica el mecanismo; es una descripción, no una explicación.
- **Ignorar la estacionalidad residual.** Si tras diferenciar queda estacionalidad, la ACF mostrará picos en los múltiplos de $s$; diferencia estacionalmente.
- **Usar MAPE con valores cercanos a cero.** La división por $y_t \approx 0$ explota el porcentaje; usa MAE o RMSE.

## Ejercicios propuestos

1. ¿Es estacionaria una serie de ruido blanco? ¿Y un paseo aleatorio?
2. Aplica una diferencia a $y_t = 3t + \varepsilon_t$ y di si el resultado es estacionario en media.
3. AR(1) con $\phi = 0.8$ y $c = 4$: halla la media de largo plazo.
4. Una PACF que se corta tras el rezago 2 y una ACF que decae: ¿qué modelo sugieren?
5. Halla la diferencia estacional de una serie trimestral ($s = 4$).
6. En un GARCH(1,1), interpreta $\alpha_1 + \beta_1 = 0.95$.
7. Con errores $2, -1, 3, 0$, calcula MAE y RMSE.
8. ¿Por qué la validación de series de tiempo no puede barajar los datos?

**Respuestas:** 1) El ruido blanco sí; el paseo aleatorio no. 2) $\Delta y_t = 3 + \varepsilon_t - \varepsilon_{t-1}$, con media constante $3$: sí, estacionario en media. 3) $\mu = 4/(1 - 0.8) = 20$. 4) Un AR(2). 5) $\Delta_4 y_t = y_t - y_{t-4}$. 6) Alta persistencia: la volatilidad tarda mucho en volver a su nivel. 7) MAE $= (2 + 1 + 3 + 0)/4 = 1.5$; RMSE $= \sqrt{(4 + 1 + 9 + 0)/4} = \sqrt{3.5} \approx 1.87$. 8) Porque el futuro no puede informar al pasado; barajar rompe la dependencia temporal que es la esencia de la serie.

## Resumen

- Una serie de tiempo es una secuencia $\{y_t\}$ ordenada en el tiempo; su esencia es la dependencia entre el presente y el pasado.
- Toda serie se descompone en tendencia, estacionalidad, ciclo y ruido, en composición aditiva o multiplicativa.
- La estacionariedad (media y varianza constantes, memoria que solo depende del rezago) es el requisito de los modelos clásicos; se logra con logaritmos y diferenciación ordinaria o estacional.
- La ACF mide la correlación con los rezagos; la PACF la mide quitando intermediarios; juntas identifican AR, MA y ARMA.
- ARIMA aplica ARMA a la serie diferenciada; SARIMA añade el tratamiento estacional; la metodología Box-Jenkins ordena identificación, estimación, diagnóstico y pronóstico.
- El suavizado exponencial (SES, Holt, Holt-Winters) es la alternativa simple y automática; ARCH/GARCH modelan la volatilidad cambiante.
- La validación exige división temporal, reentrenamiento deslizante, métricas (MAE, RMSE, MAPE) contra un baseline ingenuo y residuos que sean ruido blanco.
`,

  "bayesiana": String.raw`
## ¿Qué es la inferencia bayesiana?

La estadística que casi todo el mundo conoce —la de los cursos introductorios, los intervalos de confianza y los valores p— se llama estadística *frecuentista*. En esa escuela, un parámetro (por ejemplo, la probabilidad $p$ de que una moneda caiga cara, o la media $\mu$ de una población) se considera un número fijo y desconocido, y la probabilidad se interpreta como la frecuencia con la que ocurriría un suceso si repitiéramos un experimento infinitas veces.

La **inferencia bayesiana** adopta un punto de vista distinto: trata los parámetros como *variables aleatorias*, es decir, como cantidades sobre las que tenemos incertidumbre y a las que podemos asignar probabilidades. Para un bayesiano, la frase "la probabilidad de que la moneda esté sesgada es 0.8" tiene sentido perfecto: es una expresión numérica de cuánto creemos en esa afirmación. La probabilidad deja de ser solo una frecuencia y pasa a ser también un **grado de creencia** (o grado de plausibilidad), que se actualiza conforme llega nueva información.

El motor de toda la inferencia bayesiana es el **teorema de Bayes**, una fórmula de probabilidad condicional conocida desde el siglo XVIII. La idea central es sencillísima:

> Empiezas con una creencia inicial sobre el parámetro (la **distribución previa** o simplemente *previa*). Observas datos. El teorema de Bayes te dice cómo combinar creencia y datos para obtener una creencia actualizada (la **distribución posterior** o *posterior*).

La estadística bayesiana no es una moda reciente: Thomas Bayes y Pierre-Simon Laplace la usaron en el siglo XVIII, y durante más de cien años fue la forma estándar de hacer inferencia. Cayó en desuso cuando resultó computacionalmente difícil, y resurgió con fuerza desde los años 90 gracias a las computadoras modernas y a los métodos de simulación (MCMC), que permiten resolver problemas imposibles a mano.

¿Qué ventajas ofrece?

- **Respuestas directas.** Podemos decir "la probabilidad de que el parámetro esté entre 0.4 y 0.6 es 95%", que es exactamente lo que la gente quiere saber.
- **Incorporación natural de conocimiento previo.** Si sabemos algo del problema antes de mirar los datos, podemos incluirlo de forma explícita.
- **Modelos flexibles.** Los modelos jerárquicos, que son difíciles en el enfoque frecuentista, resultan muy naturales en el bayesiano.
- **Misma receta para todo.** Prior + datos → posterior. Sin importar si el modelo es pequeño o tiene miles de parámetros.

## Cómo leer la notación

La notación bayesiana usa pocos símbolos, pero conviene conocerlos todos antes de seguir.

**La barra vertical $\mid$ (se lee "dado").** La expresión $p(A \mid B)$ significa "la probabilidad (o densidad) de $A$ **dado** que sabemos que ocurrió $B$". Es probabilidad condicional: lo que está a la derecha de la barra es lo que ya sabemos; lo que está a la izquierda es lo que queremos averiguar. Por ejemplo, $p(\text{cara} \mid \text{moneda justa}) = 0.5$: si sabemos que la moneda es justa, la probabilidad de cara es 0.5.

**El parámetro $\theta$.** Es la letra griega *theta*, y en estadística designa genéricamente al parámetro que queremos estimar. Puede ser un solo número (la probabilidad $p$ de cara de una moneda, la media $\mu$ de una población, la tasa $\lambda$ de una Poisson) o un vector de varios números. En esta guía usaremos $\theta$ cuando hablemos del parámetro en general, y letras concretas ($p$, $\mu$, $\lambda$) en los ejemplos.

**Los datos $x$.** La letra $x$ (a veces escrita en negrita $\mathbf{x}$ para indicar que son varios números) representa los datos observados: el resultado de $n$ lanzamientos de moneda, las alturas medidas de 50 personas, el número de visitas a una página. En una muestra de $n$ valores a veces escribimos $x_1, x_2, \ldots, x_n$, donde el subíndice numera cada observación. En otros libros verás $D$ (de *data*) para los datos; es lo mismo.

**La notación de función.** Escribimos $p(\theta)$ para "la distribución de probabilidad del parámetro $\theta$" y $p(x \mid \theta)$ para "la distribución de los datos suponiendo que el parámetro vale $\theta$". Técnicamente $p(\theta)$ y $p(x \mid \theta)$ son funciones distintas, pero en la práctica bayesiana usamos la misma letra $p$ para todas y distinguimos las distribuciones por su argumento. Así, $p(\theta)$ es la previa, $p(\theta \mid x)$ es la posterior y $p(x \mid \theta)$ es la verosimilitud.

**El signo $\propto$ (se lee "proporcional a").** Indica que dos expresiones son iguales salvo por una constante multiplicativa que no depende de la variable de interés. Por ejemplo, si la posterior es $p(\theta \mid x) = 3 \cdot \theta^2$ en el rango válido de $\theta$, escribir $p(\theta \mid x) \propto \theta^2$ quiere decir "la forma de la posterior es la de $\theta^2$; la constante 3 solo sirve para que la densidad integre a 1". El uso de $\propto$ es clave en Bayes, porque la evidencia $p(x)$ no depende de $\theta$ y por tanto puede ignorarse cuando solo nos interesa la forma del posterior.

**La integral $\int$.** Es la suma continua de los cursos de cálculo. Cuando trabajamos con parámetros continuos, $P(a \leq \theta \leq b) = \int_a^b p(\theta)\,d\theta$: la probabilidad es el área bajo la curva de la densidad entre $a$ y $b$. El símbolo $d\theta$ indica la variable respecto a la cual integramos. No te asustes: en esta guía casi todas las integrales se resuelven usando familias conocidas de distribuciones, y las que no, se resuelven por simulación.

**Densidad vs. masa.** Si $\theta$ es discreto (por ejemplo, número de categorías), $p(\theta)$ es una función de masa: cada valor tiene una probabilidad. Si $\theta$ es continuo (una proporción, una media), $p(\theta)$ es una **densidad**: la altura de la curva no es una probabilidad (puede superar 1), solo las áreas bajo la curva son probabilidades. La fórmula de Bayes vale igual en ambos casos.

## El teorema de Bayes como método de actualización

Empecemos por la versión discreta, que es la más fácil de entender, y luego generalicemos a parámetros continuos.

**Versión discreta.** Supongamos que $\theta$ solo puede tomar un número finito de valores, digamos $\theta_1, \theta_2, \ldots, \theta_k$. Antes de ver datos asignamos a cada valor una probabilidad previa $p(\theta_i)$. Al observar los datos $x$, el teorema de Bayes dice:

$$p(\theta_i \mid x) = \frac{p(x \mid \theta_i)\,p(\theta_i)}{p(x)}$$

donde:

- $p(\theta_i)$ es la **probabilidad previa** de que el parámetro valga $\theta_i$: lo que creíamos antes de mirar los datos.
- $p(x \mid \theta_i)$ es la **verosimilitud**: cuán plausibles son los datos que observamos *si* el parámetro valiera $\theta_i$. Piénsala como una pregunta contrafactual: "¿con qué probabilidad habría salido esto, si la verdad fuera $\theta_i$?".
- $p(\theta_i \mid x)$ es la **probabilidad posterior**: lo que creemos después de ver los datos. Es la estrella del método.
- $p(x)$ es la **evidencia** (también llamada *probabilidad marginal* o *constante de normalización*). Se calcula sumando sobre todos los valores posibles del parámetro:

$$p(x) = \sum_{i=1}^{k} p(x \mid \theta_i)\,p(\theta_i)$$

La evidencia es un único número que no depende de qué $\theta_i$ estemos evaluando; su papel es garantizar que las probabilidades posteriores sumen 1.

**¿Por qué funciona?** Porque es una regla de actualización coherente: repartes tu creencia entre las hipótesis según su plausibilidad relativa. Si una hipótesis $\theta_i$ predice los datos mucho mejor que otra $\theta_j$ (es decir, $p(x \mid \theta_i) \gg p(x \mid \theta_j)$), la evidencia la premia aumentando su probabilidad posterior. Observa que la regla compara hipótesis a través de la verosimilitud, pero pondera por la previa: una hipótesis muy verosímil pero increíble a priori no gana tan fácil.

**Un ejemplo numérico discreto.** Una bolsa puede ser de tipo A (70% de bolas rojas) o de tipo B (30% de bolas rojas). A priori creemos que es igual de probable cada tipo: $p(A) = p(B) = 0.5$. Extraemos una bola al azar y sale roja ($x$ = "roja"). Entonces:

- Verosimilitudes: $p(\text{roja} \mid A) = 0.7$, $p(\text{roja} \mid B) = 0.3$.
- Evidencia: $p(\text{roja}) = 0.7 \times 0.5 + 0.3 \times 0.5 = 0.5$.
- Posterior: $p(A \mid \text{roja}) = 0.7 \times 0.5 / 0.5 = 0.7$, y $p(B \mid \text{roja}) = 0.3$.

Ver una bola roja sube nuestra creencia en el tipo A de 0.5 a 0.7. Si extraemos una segunda bola (roja también), el posterior 0.7/0.3 se convierte en la nueva previa y el proceso se repite: $p(A \mid \text{roja, roja}) = 0.7^2 \times 0.5 / (0.7^2 \times 0.5 + 0.3^2 \times 0.5) \approx 0.845$. La creencia en A sube cada vez que llega evidencia favorable. Esta idea —usar el posterior de hoy como previa de mañana— se llama **actualización secuencial**.

**Versión continua.** Cuando $\theta$ es continuo, las sumas se convierten en integrales:

$$p(\theta \mid x) = \frac{p(x \mid \theta)\,p(\theta)}{p(x)}, \qquad p(x) = \int p(x \mid \theta)\,p(\theta)\,d\theta$$

El significado de cada pieza es idéntico al caso discreto, solo que ahora $p(\theta)$ y $p(\theta \mid x)$ son densidades. Como la evidencia $p(x)$ es una constante que no depende de $\theta$, en la práctica escribimos:

$$p(\theta \mid x) \propto p(x \mid \theta)\,p(\theta)$$

que se lee: "la posterior es proporcional a la verosimilitud por la previa". Esta es la ecuación más importante de toda la inferencia bayesiana. Memorízala en palabras:

> **Posterior $\propto$ Verosimilitud $\times$ Previa.**

**Interpretación cualitativa.** Con pocos datos, la previa domina: la posterior se parece a lo que creías. Con muchos datos, la verosimilitud domina: la posterior se parece a lo que dicen los datos, y distintas previas razonables llevan a posteriores casi idénticas. Por eso la elección de la previa importa sobre todo en problemas con muestras pequeñas.

**El papel de la previa como multiplicador.** Una regla práctica: la posterior "recorta" la previa donde la verosimilitud es pequeña y la "refuerza" donde la verosimilitud es grande. Visualmente, la posterior es el producto punto a punto de dos curvas: la de la previa y la de la verosimilitud.

## Distribuciones previas

La previa $p(\theta)$ es la creencia sobre el parámetro antes de ver los datos. Elegirla es parte del modelado, y hay varias familias de elecciones.

**Previas informativas.** Incorporan conocimiento previo real y específico. Si un físico sabe por teoría que la masa de una partícula debe rondar un cierto valor, usa una previa concentrada alrededor de ese valor. Si un analista de conversiones sabe que la tasa de clics típica de un botón anda por el 2%, puede usar una previa centrada en 0.02. Ventaja: aprovechan toda la información disponible. Riesgo: si el conocimiento previo está mal, contaminan los resultados, sobre todo con pocos datos.

**Previas débiles (o difusas).** Son previas con varianza grande: no afirman casi nada sobre la ubicación del parámetro, solo le dan un rango razonable. Son el compromiso práctico más común: dejan que los datos manden, pero mantienen el modelo estable.

**Previas no informativas.** Intentan representar la ignorancia total. El ejemplo clásico es la previa uniforme $p(\theta) = \text{constante}$ sobre un rango: todos los valores del rango son igual de creíbles a priori. La previa de **Jeffreys** es un refinamiento: se elige para que la inferencia no cambie al reparametrizar el modelo (por ejemplo, trabajar con $p$ o con $\log p$ no debería alterar las conclusiones). Para una proporción, la previa de Jeffreys es Beta(0.5, 0.5). Nota: las previas no informativas a veces son impropias (su integral es infinita), lo que es aceptable si la posterior resulta propia.

**Previas conjugadas.** Son las que, combinadas con una verosimilitud dada, producen una posterior de la *misma familia* que la previa. Las veremos en detalle en la sección siguiente; son las más cómodas porque la actualización se reduce a sumar y restar números.

**La crítica de la subjetividad y su respuesta.** La objeción clásica al método bayesiano es: "la previa es subjetiva, luego el resultado es subjetivo". La respuesta bayesiana tiene varias capas. Primera: la subjetividad es honesta y explícita; en el enfoque frecuentista las elecciones (modelo, tamaño muestral, transformaciones) también existen pero quedan ocultas. Segunda: se puede hacer **análisis de sensibilidad**: repetir el análisis con varias previas razonables y comprobar que las conclusiones no cambian. Tercera: con suficientes datos, la previa se vuelve irrelevante.

**Ejemplo.** Antes de lanzar una moneda nueva, la previa uniforme sobre $p$ (la probabilidad de cara) se escribe Beta(1,1): cualquier valor de $p$ entre 0 y 1 es igual de creíble. Veremos en la siguiente sección qué significa "Beta(1,1)".

## Familias conjugadas (Beta-Binomial, Normal-Normal, Gamma-Poisson)

Una **familia conjugada** es un par (previa, verosimilitud) tal que la posterior pertenece a la misma familia de distribuciones que la previa. La actualización se convierte entonces en álgebra simple: los datos se resumen en estadísticos suficientes (por ejemplo, el número de éxitos $k$ y el número de ensayos $n$) y la posterior se obtiene actualizando los parámetros de la previa.

### Beta-Binomial

La distribución **Beta** describe una cantidad continua que vive en el intervalo $[0,1]$: una proporción, una probabilidad, una tasa. Tiene dos parámetros, llamados $\alpha$ (alfa) y $\beta$ (beta), ambos positivos:

$$p(\theta) = \frac{\theta^{\alpha-1}(1-\theta)^{\beta-1}}{\mathrm{B}(\alpha, \beta)}, \qquad 0 < \theta < 1$$

Aquí $\mathrm{B}(\alpha, \beta)$ es la **función beta**, una constante que solo sirve para que la densidad integre a 1. ¿Qué significan $\alpha$ y $\beta$? Son "pseudocontadores": $\alpha$ actúa como un número ficticio de éxitos previos y $\beta$ como un número ficticio de fracasos previos. La media de la Beta es

$$\mathrm{E}[\theta] = \frac{\alpha}{\alpha + \beta}$$

de modo que la previa concentra su masa alrededor de esa razón, y la concentración crece con $\alpha + \beta$ (el "tamaño de muestra previo"). Casos especiales útiles:

- Beta(1,1) = uniforme en $[0,1]$: total ignorancia.
- Beta(0.5, 0.5) = previa de Jeffreys.
- Beta(2,2) = creencia simétrica pero suave alrededor de 0.5.
- Beta(10,10) = creencia fuerte en que $\theta$ anda cerca de 0.5.

La verosimilitud para una proporción con $n$ ensayos independientes y $k$ éxitos es la binomial: $p(k \mid \theta) \propto \theta^{k}(1-\theta)^{n-k}$. Combinando:

$$p(\theta \mid k) \propto \theta^{\alpha-1}(1-\theta)^{\beta-1} \cdot \theta^{k}(1-\theta)^{n-k} = \theta^{\alpha+k-1}(1-\theta)^{\beta+n-k-1}$$

que es de nuevo una Beta, con parámetros actualizados:

$$\text{Beta}(\alpha, \beta) + k \text{ éxitos en } n \Rightarrow \text{posterior } \text{Beta}(\alpha + k,\ \beta + n - k)$$

Fíjate qué intuitivo es: los éxitos observados se suman a $\alpha$ y los fracasos observados se suman a $\beta$. La previa actúa como datos ficticios iniciales.

**Ejemplo.** Previa Beta(2,2) (equivalente a haber visto antes 2 caras y 2 cruces) y luego 7 caras en 10 lanzamientos. Posterior: Beta(9, 5). Media posterior: $9/(9+5) = 9/14 \approx 0.643$. Compara con la proporción muestral 0.7: la previa ha "encogido" la estimación hacia su centro 0.5.

### Normal-Normal

Si el parámetro es una media y tanto la previa como la verosimilitud son normales, la posterior también es normal. Concretamente: supongamos que los datos son $x_1, \ldots, x_n$ con media $\bar{x}$ y varianza conocida $\sigma^2$, y que la previa sobre la media es $N(\mu_0, \sigma_0^2)$ (normal con media $\mu_0$ y varianza $\sigma_0^2$). Entonces la posterior es normal con media

$$\mu_{\text{post}} = \frac{\dfrac{1}{\sigma_0^2}\,\mu_0 + \dfrac{n}{\sigma^2}\,\bar{x}}{\dfrac{1}{\sigma_0^2} + \dfrac{n}{\sigma^2}}$$

Es un **promedio ponderado por precisiones**, donde la precisión es el inverso de la varianza ($1/\sigma_0^2$ para la previa y $n/\sigma^2$ para los datos). Si la previa es muy precisa, su peso es grande; si hay muchos datos, el peso de $\bar{x}$ domina. La varianza posterior es

$$\sigma^2_{\text{post}} = \frac{1}{\dfrac{1}{\sigma_0^2} + \dfrac{n}{\sigma^2}}$$

Observa que la precisión posterior es la suma de precisiones: la información se acumula.

**Ejemplo.** Previa $N(170, 25)$ para la altura media (en cm) de un grupo; medimos 16 personas con $\bar{x} = 174$ y suponemos $\sigma^2 = 100$. Precisión previa $1/25 = 0.04$; precisión de los datos $16/100 = 0.16$. Posterior: media $= (0.04 \cdot 170 + 0.16 \cdot 174)/0.20 = 173.2$; varianza $= 1/0.20 = 5$. La creencia se ha movido de 170 hacia 174.

### Gamma-Poisson

Si el parámetro es una tasa $\lambda > 0$ (llegadas por hora, defectos por lote) y los datos son conteos con distribución de Poisson, la previa conjugada es la **Gamma**. La densidad Gamma tiene dos parámetros, $\alpha$ (forma) y $\beta$ (tasa, o a veces se usa la escala $1/\beta$; revisa la convención de cada libro), media $\alpha/\beta$ y varianza $\alpha/\beta^2$. Si observamos $x_1, \ldots, x_n$ conteos de Poisson, la posterior es

$$\text{Gamma}\!\left(\alpha + \sum_{i=1}^{n} x_i,\ \ \beta + n\right)$$

Otra vez la regla es sumar: los conteos observados se suman a $\alpha$ y el número de períodos de observación se suma a $\beta$.

**Ejemplo.** Previa Gamma(2, 1) (creencia previa: tasa media de 2 llegadas por hora, con poca información). Observamos 3 horas con 3, 5 y 4 llegadas (suma 12). Posterior: Gamma(14, 4), con media $14/4 = 3.5$ llegadas por hora.

### Dirichlet-Multinomial

Generaliza la Beta-Binomial a más de dos categorías. Si las categorías son $K$ y las probabilidades de cada categoría forman un vector $\theta = (\theta_1, \ldots, \theta_K)$ que suma 1, la previa conjugada es la **Dirichlet**, con parámetros $\alpha_1, \ldots, \alpha_K$ que funcionan como pseudocontadores por categoría. Si observamos conteos $k_1, \ldots, k_K$, la posterior es Dirichlet con parámetros $\alpha_1 + k_1, \ldots, \alpha_K + k_K$. Es la herramienta básica para modelos de clasificación y de mezclas.

## Posterior, predictiva e intervalos creíbles

Una vez calculada la posterior $p(\theta \mid x)$, ¿cómo la usamos para responder preguntas?

**Resúmenes de la posterior.** La posterior completa es la descripción honesta de la incertidumbre, pero a veces queremos números sueltos:

- **Media posterior** $\mathrm{E}[\theta \mid x]$: el centro de gravedad de la creencia actualizada.
- **Mediana posterior**: el valor que deja el 50% de la masa a cada lado; robusta ante colas pesadas.
- **Moda posterior** (o **MAP**, máximo a posteriori): el valor más creíble; coincide con la estimación de máxima verosimilitud cuando la previa es plana.
- **Cuantiles**: el cuantil 0.025 y el 0.975 enmarcan el 95% central de la creencia.

**Intervalo creíble.** Un intervalo creíble del 95% es un intervalo $[a, b]$ tal que

$$P(a \leq \theta \leq b \mid x) = 0.95$$

Es decir: *dado el modelo y los datos, la probabilidad de que el parámetro esté en ese intervalo es 0.95*. Esta es exactamente la interpretación que la gente quiere darle a los intervalos de confianza, pero que los intervalos de confianza no tienen: un intervalo de confianza al 95% es un procedimiento que, repetido muchas veces, cubre el parámetro el 95% de las ocasiones; sobre un intervalo concreto no se puede afirmar nada. El intervalo creíble responde la pregunta natural, el de confianza responde otra pregunta (la cobertura frecuentista del procedimiento). Existen varios intervalos creíbles con el mismo contenido de probabilidad: el de **colas iguales** (2.5% de masa en cada cola) y el de **máxima densidad** (HPD, *highest posterior density*: el más corto, que contiene solo los valores más creíbles).

**Ejemplo.** Posterior Beta(9,5): el intervalo creíble del 95% de colas iguales es aproximadamente $[0.36, 0.88]$. Se puede decir honestamente: "la probabilidad de que la proporción esté entre 0.36 y 0.88 es 95%".

**Distribución predictiva posterior.** A menudo la pregunta no es sobre el parámetro sino sobre la próxima observación $\tilde{x}$ (con tilde para distinguirla de los datos ya vistos). Por ejemplo: ¿qué probabilidad hay de que el próximo lanzamiento sea cara? La respuesta bayesiana promedia sobre toda la incertidumbre del parámetro:

$$p(\tilde{x} \mid x) = \int p(\tilde{x} \mid \theta)\,p(\theta \mid x)\,d\theta$$

Leemos esta fórmula así: para cada valor posible del parámetro $\theta$, calculamos la probabilidad del nuevo dato con ese $\theta$, y promediamos esas probabilidades ponderándolas por la posterior. El resultado es más ancho (más incierto) que usar un único valor puntual del parámetro, porque incluye la incertidumbre sobre $\theta$.

**Ejemplo clásico.** Con posterior Beta(9,5), la probabilidad predictiva de que el próximo lanzamiento sea cara es la media posterior, $9/14 \approx 0.643$. No es 0.7 (la proporción muestral) porque la predictiva integra la incertidumbre. Si quisiéramos la probabilidad de al menos 60 caras en los próximos 100 lanzamientos, usaríamos la **beta-binomial** (la mezcla de binomiales sobre la posterior), que da un resultado más disperso que la binomial con $p = 0.643$ fijo.

## MCMC: idea de Metropolis-Hastings y Gibbs

Hasta ahora todos los cálculos fueron posibles porque las integrales tenían forma cerrada (gracias a las conjugadas). Pero en modelos reales —con muchos parámetros, no linealidades o previas no conjugadas— la posterior no pertenece a ninguna familia conocida, y las integrales (la evidencia, la predictiva, los cuantiles) no se pueden calcular a mano.

La solución moderna es **MCMC** (Markov Chain Monte Carlo, cadenas de Markov de Monte Carlo): en lugar de calcular la posterior analíticamente, generamos una *muestra* grande de valores $\theta^{(1)}, \theta^{(2)}, \ldots, \theta^{(T)}$ cuya distribución se aproxima a la posterior. Con esa muestra, todo se vuelve fácil: la media posterior se aproxima con el promedio de la muestra, los cuantiles con cuantiles muestrales, y las probabilidades con frecuencias relativas.

¿Cómo generar de una distribución de la que solo conocemos su forma salvo una constante? Aquí entran los dos algoritmos clásicos.

**Metropolis-Hastings (MH).** Es un paseo aleatorio inteligente. La idea:

1. Empieza en un valor cualquiera $\theta^{(t)}$.
2. **Propón** un candidato $\theta^{*}$ cerca del valor actual (por ejemplo, sumando ruido normal: $\theta^{*} = \theta^{(t)} + \varepsilon$).
3. Calcula el cociente de aceptación

$$r = \frac{p(\theta^{*} \mid x)}{p(\theta^{(t)} \mid x)} = \frac{p(x \mid \theta^{*})\,p(\theta^{*})}{p(x \mid \theta^{(t)})\,p(\theta^{(t)})}$$

Observa la magia: la constante de normalización $p(x)$ se cancela en el cociente, así que *no necesitamos conocerla*. Solo necesitamos verosimilitud y previa punto a punto.

4. Acepta el candidato con probabilidad $\min(1, r)$: si $r \geq 1$ (el candidato es mejor que el actual), acéptalo siempre; si $r < 1$, acéptalo con probabilidad $r$ (tira un dado). Si no se acepta, quédate en el valor actual y repítelo.
5. Repite miles de veces.

El truco del paso 4 garantiza que, a la larga, la cadena visita cada región con una frecuencia proporcional a la densidad posterior. La intuición: el paseo sube las colinas de la posterior y, de vez en cuando, da un paso cuesta abajo para no quedarse atrapado.

**Muestreo de Gibbs.** Es un caso particular de MH para modelos con varios parámetros. Si el modelo tiene parámetros $\theta_1, \theta_2, \ldots, \theta_d$, Gibbs los actualiza de a uno por vez: muestrea $\theta_1$ de su distribución *condicional completa* $p(\theta_1 \mid \theta_2, \ldots, \theta_d, x)$ (tratando a los demás como fijos), luego $\theta_2$ dado los demás, y así sucesivamente, repitiendo el ciclo. En muchos modelos las condicionales completas son familias simples (normales, gammas) aunque la posterior conjunta sea intratable. Es como arreglar una cama con muchas almohadas: arreglas una, luego otra, y al final todas están bien.

**Mejoras modernas.** El **Hamiltonian Monte Carlo (HMC)** usa gradientes de la posterior para proponer saltos largos y eficientes; es el motor de los programas **Stan** y **PyMC**, los dos estándares de la estadística bayesiana computacional. La **inferencia variacional** es una alternativa más rápida y menos exacta: aproxima la posterior con una familia paramétrica optimizando una distancia; se usa cuando MCMC es demasiado lento.

**Diagnósticos: ¿confiamos en la muestra?** MCMC requiere verificación:

- **Convergencia.** Se corren varias cadenas desde puntos distintos. El estadístico $\hat{R}$ (Gelman-Rubin) compara la varianza entre cadenas y dentro de cadenas; si todas exploran la misma región, $\hat{R} \approx 1$. Regla práctica: exigir $\hat{R} < 1.01$.
- **Mezcla.** Las cadenas deben oscilar rápido, sin quedarse atascadas; se inspeccionan los gráficos de traza.
- **Tamaño efectivo de muestra.** Las muestras de una cadena están correlacionadas; el número efectivo de muestras independientes debe ser grande (miles) para estimar bien cuantiles extremos.

**Ejemplo.** Un modelo jerárquico con 100 parámetros no tiene posterior cerrada; se ajusta con HMC en Stan, que devuelve 4 cadenas de miles de iteraciones cada una; con $\hat{R} < 1.01$ y trazas bien mezcladas, las conclusiones son fiables.

## Comparación de modelos

A veces hay varios modelos plausibles y queremos saber cuál prefieren los datos.

**Factor de Bayes.** Para dos modelos $M_1$ y $M_2$, el factor de Bayes es el cociente de sus evidencias:

$$\mathrm{BF}_{12} = \frac{p(x \mid M_1)}{p(x \mid M_2)}$$

donde cada evidencia es la verosimilitud promedio sobre la previa del modelo: $p(x \mid M) = \int p(x \mid \theta, M)\,p(\theta \mid M)\,d\theta$. El factor de Bayes cuantifica cuánto más probable es observar los datos bajo un modelo que bajo el otro. Convenciones habituales: $\mathrm{BF} > 10$ (o $\ln \mathrm{BF} > 2.3$) es evidencia fuerte, $\mathrm{BF} > 100$ decisiva. Dos advertencias: (1) el factor de Bayes penaliza automáticamente la complejidad, pero es muy sensible a la previa, así que hay que reportar sensibilidad; (2) calcular evidencias en modelos complejos es difícil computacionalmente (se usan métodos especiales como el *puente* o *path sampling*).

**Criterios predictivos.** En lugar de evidencias, se puede evaluar cuán bien predice cada modelo datos que no vio: **DIC** (Deviance Information Criterion), **WAIC** (Widely Applicable Information Criterion) y **LOO-CV** (validación cruzada de dejar uno fuera, estimada eficientemente con la aproximación PSIS). En todos, *menor es mejor*: miden error predictivo esperado. Son la contraparte bayesiana de AIC y BIC, y suelen ser más robustos porque usan toda la posterior, no un punto.

**Regularización implícita.** Una observación elegante: las previas actúan como penalizaciones. Una previa normal sobre coeficientes de regresión equivale a la penalización ridge (L2), y una previa Laplace equivale al lasso (L1). Así, la estadística bayesiana ofrece una lectura unificada de las técnicas de regularización del machine learning.

**Ejemplo.** Para comparar dos modelos de conversión (digamos, uno con tasa única y otro con tasas por segmento), se calcula LOO-CV en ambos y se prefiere el que predice mejor los datos retenidos; si el modelo simple predice casi igual, se prefiere por parsimonia.

## Modelos jerárquicos

Los **modelos jerárquicos** (o multinivel, o de efectos mixtos) organizan los parámetros en niveles de una jerarquía conceptual. En lugar de estimar cada grupo de forma aislada, se supone que los parámetros de los grupos provienen de una distribución poblacional común, que a su vez tiene sus propias previas (hiperprevias).

**El modelo formal.** Para grupos $j = 1, \ldots, J$, con observaciones $i = 1, \ldots, n_j$:

$$y_{ij} \sim N(\theta_j, \sigma^2), \qquad \theta_j \sim N(\mu, \tau^2), \qquad \mu \sim p(\mu), \quad \tau \sim p(\tau)$$

Léelo de arriba hacia abajo: los datos de cada grupo $j$ se distribuyen alrededor de la media de su grupo $\theta_j$; las medias de los grupos, a su vez, se distribuyen alrededor de una media global $\mu$ con dispersión $\tau$; y $\mu$ y $\tau$ tienen previas. $\sigma$ es la variabilidad dentro de cada grupo, $\tau$ la variabilidad *entre* grupos, y $p(\mu)$ y $p(\tau)$ son las hiperprevias.

**Pooling parcial y shrinkage.** La magia es lo que ocurre al estimar las $\theta_j$. Si estimaras cada grupo por separado (no pooling), los grupos con pocos datos tendrían estimaciones ruidosas, con extremos espurios. Si los trataras a todos como iguales (pooling total), perderías la variación real entre grupos. El modelo jerárquico hace **pooling parcial**: cada $\theta_j$ se estima como un compromiso entre la media del grupo y la media global $\mu$, con un peso que depende de cuántos datos tenga el grupo. Los grupos con pocos datos se "encogen" hacia $\mu$ (este fenómeno se llama **shrinkage**), y los grupos con muchos datos se quedan cerca de su propia media. Resultado: estimaciones estables y honestas, y menos sobreajuste.

**Ejemplo.** Tasas de conversión por ciudad: una ciudad con 10 visitas y 5 conversiones no puede tener una estimación confiable por sí sola; el modelo la empuja hacia la media de todas las ciudades. Una ciudad con 10.000 visitas se estima casi por su cuenta. La fuerza del encogimiento la decide el dato ($\tau$ se estima, no se fija).

**Extensión predictiva.** Los modelos jerárquicos también predicen mejor grupos nuevos: un grupo aún no observado se predice con la distribución poblacional $N(\mu, \tau^2)$, incorporando la variabilidad entre grupos.

## Ejemplos resueltos

**Ejemplo 1 (práctica, conjugada Beta-Binomial).** Previa uniforme Beta(1,1) y 7 caras en 10 lanzamientos.

- Posterior: Beta($1+7$, $1+3$) = Beta(8, 4).
- Media posterior: $8/(8+4) = 8/12 = 2/3 \approx 0.667$.
- La proporción muestral es 0.7; la previa uniforme apenas modifica la estimación.

**Ejemplo 2 (práctica, comparación de previas).** Previa informativa Beta(10,10) con los mismos datos (7 caras en 10).

- Posterior: Beta(17, 13); media $17/30 \approx 0.567$.
- La previa fuerte (equivalente a 20 lanzamientos ficticios alrededor de 0.5) tira de la estimación hacia 0.5. Moraleja: con pocos datos, la previa pesa; con 1000 lanzamientos, ambas previas habrían dado casi lo mismo.

**Ejemplo 3 (aplicación, medicina).** Un test diagnóstico en clave bayesiana. Una enfermedad tiene prevalencia del 1% (la previa). El test tiene sensibilidad 90% (probabilidad de positivo dado enfermo) y especificidad 95% (probabilidad de negativo dado sano). Si el test da positivo, ¿qué probabilidad hay de estar enfermo?

$$p(\text{enf} \mid +) = \frac{0.90 \times 0.01}{0.90 \times 0.01 + 0.05 \times 0.99} = \frac{0.009}{0.009 + 0.0495} \approx 0.154$$

Solo un 15.4% (algunos textos, con especificidad del 95% y redondeos, citan 16.7%). La sorpresa desaparece al entender la fórmula: los falsos positivos (5% de los sanos, que son el 99% de la población) inundan a los verdaderos positivos.

**Ejemplo 4 (aplicación, A/B testing).** Dos versiones de una página, A y B. A convierte 30 de 200 visitas; B convierte 24 de 200. Con previas uniformes:

- Posterior A: Beta(31, 171); posterior B: Beta(25, 177).
- La pregunta natural es: ¿cuál es la probabilidad de que B sea mejor que A, es decir, $p(\theta_B > \theta_A \mid \text{datos})$? Se calcula por simulación (muestrear de ambas posteriores y contar cuántas veces $\theta_B > \theta_A$). Si esa probabilidad supera 0.95, se decide lanzar B; la interpretación es directa y no requiere p-valores.

**Ejemplo 5 (aplicación, jerárquico).** Tasas de conversión por sucursal con tamaños muy distintos. El modelo jerárquico encoge las sucursales pequeñas hacia la media global: los extremos (una sucursal con 2 de 3 conversiones) dejan de parecer extraordinarios, y las estimaciones globales se estabilizan. El resultado es menos sobreajuste que estimar cada sucursal por separado y más realismo que suponer todas iguales.

**Ejemplo 6 (aplicación, predicción).** Con posterior Beta(9,5), ¿probabilidad de al menos 60 caras en los próximos 100 lanzamientos? No se usa la binomial con $p = 0.643$ fijo, sino la **beta-binomial**: se promedia la binomial sobre la posterior de $p$. La distribución resultante es más ancha, porque refleja que no conocemos $p$ con certeza. La respuesta exacta requiere integración numérica o simulación; conceptualmente, "integra la incertidumbre".

## Errores comunes

- **Confundir el intervalo creíble con el intervalo de confianza.** Son objetos conceptualmente distintos: el creíble da una probabilidad sobre el parámetro; el de confianza, una propiedad del procedimiento. Nunca digas "con 95% de confianza el parámetro está aquí" si lo que calculaste es un intervalo frecuentista.
- **Elegir previas informativas sin justificarlas.** Documenta de dónde sale la previa y repite el análisis con alternativas (sensibilidad). Si el resultado cambia según la previa, dímelo: es parte del resultado.
- **No verificar la convergencia de MCMC.** Publicar resultados de cadenas no convergidas es el error más grave de la práctica bayesiana. $\hat{R}$, trazas y tamaño efectivo son obligatorios.
- **Interpretar el posterior como la verosimilitud.** Con pocos datos, la previa modifica visiblemente las conclusiones; ignorarla es un error. La posterior es el producto de ambas.
- **Usar la media posterior donde debes usar la predictiva.** La media posterior de una proporción es la probabilidad predictiva de un éxito *individual*, pero para conteos futuros hay que usar la distribución predictiva completa (beta-binomial), que es más dispersa.
- **Ignorar la dependencia en modelos jerárquicos.** Si hay grupos, no los trates como independientes sin pensarlo: el pooling parcial cambia las estimaciones de todos los grupos a la vez.
- **Comparar modelos solo con factores de Bayes sin sensibilidad.** La evidencia depende de la previa; los criterios predictivos (WAIC, LOO-CV) suelen ser más estables.

## Ejercicios propuestos (con respuestas)

1. Previa Beta(3,3) y 5 caras en 8 lanzamientos: halla la posterior y su media.
2. ¿Qué previa es conjugada de la verosimilitud de Poisson?
3. Da una diferencia entre intervalo creíble e intervalo de confianza.
4. ¿Qué mide el estadístico $\hat{R}$ de Gelman-Rubin?
5. Diseña una previa para la tasa de clics de un botón nuevo del que no sabemos nada (razonablemente débil).
6. Factor de Bayes: ¿qué valores indican evidencia fuerte a favor de $M_1$?
7. ¿Cómo funciona el shrinkage en un modelo jerárquico?
8. ¿Por qué es necesario MCMC en los modelos no conjugados?
9. En el ejemplo del test médico, ¿por qué la probabilidad posterior de estar enfermo es tan baja pese a un test positivo?
10. Con posterior Beta(9,5), ¿cuál es la probabilidad predictiva de que el próximo lanzamiento sea cara?

**Respuestas:** 1) Beta(8, 6); media $8/14 = 4/7 \approx 0.571$. 2) La Gamma. 3) El creíble da la probabilidad directa de que el parámetro esté en el intervalo, dado el modelo; el de confianza describe la cobertura del procedimiento. 4) La convergencia entre cadenas de MCMC; valores cercanos a 1 indican convergencia. 5) Una Beta débil centrada en una tasa típica del sector, por ejemplo Beta(2, 98), media 0.02, con tamaño previo 100; o Beta(1,1) si de verdad no hay información. 6) Mayor que 10 (o logaritmo mayor que 2.3). 7) Los grupos con pocos datos se acercan a la media global poblacional, estabilizando las estimaciones. 8) Porque las integrales del posterior no tienen forma cerrada y solo podemos muestrear de ella. 9) Porque la prevalencia es bajísima (1%): los falsos positivos del 99% sano superan a los verdaderos positivos. 10) Es la media posterior, $9/14 \approx 0.643$.

## Resumen

- La inferencia bayesiana trata los parámetros como variables aleatorias y expresa el conocimiento como distribuciones de probabilidad.
- La ecuación central es: posterior $\propto$ verosimilitud $\times$ previa; la evidencia $p(x)$ normaliza y la previa importa más con pocos datos.
- Las familias conjugadas (Beta-Binomial, Normal-Normal, Gamma-Poisson, Dirichlet-Multinomial) convierten la actualización en sumas simples de pseudocontadores o de precisiones.
- La posterior se resume con media, cuantiles e intervalos creíbles, que tienen la interpretación directa que la gente espera; la predictiva posterior integra la incertidumbre del parámetro para predecir nuevas observaciones.
- MCMC (Metropolis-Hastings, Gibbs, HMC) permite muestrear posteriores intratables, siempre que se verifique la convergencia ($\hat{R}$, trazas, tamaño efectivo).
- La comparación de modelos usa factores de Bayes y criterios predictivos (DIC, WAIC, LOO-CV); las previas actúan como regularizadores.
- Los modelos jerárquicos combinan información entre grupos (pooling parcial, shrinkage) y producen estimaciones estables y predicciones honestas.
`,

  "decision": String.raw`
## ¿Qué es decidir bajo incertidumbre?

Toda decisión importante se toma sin saber con certeza qué pasará después. Si decides llevar paraguas, no sabes si lloverá; si inviertes en una empresa, no sabes si crecerá; si un médico receta un tratamiento, no sabe si el paciente mejorará. La **teoría de la decisión** es la rama de la matemática que estudia, de forma rigurosa, cómo elegir la mejor acción posible cuando el resultado de cada acción depende de factores que no controlamos.

Los matemáticos distinguen dos situaciones:

- **Decidir bajo riesgo:** conocemos (o podemos estimar) la probabilidad de cada escenario posible. Por ejemplo, la probabilidad de lluvia mañana según el pronóstico. Aquí la herramienta central es la **utilidad esperada**, que veremos enseguida.
- **Decidir bajo incertidumbre profunda:** no tenemos ni idea confiable de las probabilidades. Por ejemplo, cómo reaccionará un mercado a un producto totalmente nuevo, o qué hará un adversario en una guerra. Aquí se usan **criterios** como el minimax o el de Savage, que también estudiaremos.

En ambos casos, el esquema es el mismo: hay acciones que podemos elegir, estados del mundo que no controlamos, y resultados que dependen de ambos. La teoría de la decisión nos da reglas para ordenar las acciones de mejor a peor y justificar la elección.

Un ejemplo que nos acompañará toda la guía: decides si llevar paraguas. Los estados de la naturaleza son dos: "llueve" o "no llueve". Las acciones son dos: "llevar paraguas" o "no llevarlo". Si llueve y no llevaste paraguas, el resultado es malo (te mojas); si no llueve y lo llevaste, el resultado es apenas molesto (cargarlo de más). Este problema diminuto contiene todos los ingredientes de una decisión.

¿Para qué sirve la teoría? Para no decidir "a sentimiento" cuando las opciones son muchas y los escenarios complejos: inversiones, tratamientos médicos, diseños de ingeniería, políticas públicas. Es el lenguaje común de la economía, la estadística y la inteligencia artificial.

## Cómo leer la notación

La notación de la teoría de la decisión usa letras simples, pero cada símbolo tiene un significado exacto. Vamos a leerlos uno por uno, despacio.

**La acción $a$.** Es lo que tú eliges: llevar paraguas, comprar, operar, sembrar maíz. La letra $a$ viene de la palabra inglesa *action* (acción). El conjunto de todas las acciones disponibles se llama $A$ (mayúscula). La escritura $a \in A$ se lee "la acción $a$ pertenece al conjunto $A$": el símbolo $\in$ es "pertenece a", y se usa para decir que un elemento está dentro de un conjunto. Por ejemplo, si las acciones son comprar ($C$) y alquilar ($L$), escribimos $A = \{C, L\}$; las llaves $\{ \ \}$ encierran la lista de elementos del conjunto.

**El estado de la naturaleza $s$.** Es el escenario que NO controlas: llueve, hay recesión, el paciente tiene la enfermedad. La letra $s$ viene de *state* (estado). El conjunto de estados posibles se llama $S$, y $s \in S$ significa "el estado $s$ es uno de los posibles". La palabra "naturaleza" recuerda que estos estados los decide el azar o el mundo exterior, no tú.

**El resultado $r(a, s)$.** Se lee "erre de a, ese". Es el número que describe la consecuencia de elegir la acción $a$ cuando ocurre el estado $s$. Por ejemplo, si $a$ = no llevar paraguas y $s$ = llueve, el resultado podría ser $-50$ (escala de comodidad, números negativos significan malestar). El resultado suele ser dinero, días de hospital, utilidad o cualquier cantidad que nos importe. La coma dentro del paréntesis se lee "y": $r(a,s)$ es el resultado de $a$ y $s$ juntos.

**La probabilidad $P(s)$.** Se lee "pe de ese". Es un número entre $0$ y $1$ que mide qué tan creíble es el estado $s$. $P(s) = 0$ significa "seguro que no ocurre"; $P(s) = 1$ significa "seguro que sí"; $P(s) = 0.3$ significa "30% de posibilidades". Como los estados cubren todas las posibilidades, sus probabilidades suman 1:

$$\sum_{s \in S} P(s) = 1$$

El símbolo $\sum_{s \in S}$ es la **suma** (letra griega sigma) sobre todos los estados: "suma de $P(s)$ para cada $s$ que está en $S$". La ecuación se lee: "la suma de las probabilidades de todos los estados es 1". Es la idea de que la probabilidad total es el 100%.

**La utilidad $u(x)$.** Se lee "u de equis". Es la función que convierte un resultado en un número que mide qué tan feliz te hace. La letra $x$ aquí es solo un nombre genérico del resultado: $u(100)$ es la utilidad que te produce el resultado 100. La utilidad es la pieza clave de la teoría: dos personas pueden valorar distinto el mismo resultado. Una de ellas puede adorar el riesgo y la otra detestarlo; la función $u$ captura esa diferencia. Usaremos $u$ en minúscula para la utilidad.

**La composición $u(r(a,s))$.** Se lee "u de, erre de a, ese". Significa: primero calcula el resultado $r(a,s)$ y después conviértelo en utilidad aplicándole $u$. Es la utilidad que obtienes si eliges $a$ y ocurre $s$. Cuando la utilidad es simplemente el dinero ($u(x) = x$), decimos que el decisor es **neutral al riesgo**, y entonces $u(r(a,s)) = r(a,s)$.

**La utilidad esperada $EU(a)$.** Las letras $E$ y $U$ vienen de *expected utility* (utilidad esperada en inglés). La utilidad esperada de la acción $a$ es el promedio de las utilidades de sus resultados, ponderado por las probabilidades de cada estado:

$$EU(a) = \sum_{s \in S} P(s)\,u(r(a, s))$$

Se lee: "la utilidad esperada de $a$ es la suma, sobre todos los estados $s$, de la probabilidad de $s$ multiplicada por la utilidad del resultado". Es la herramienta central de la guía: comparamos acciones comparando sus utilidades esperadas.

**El operador esperanza $E[\cdot]$.** El símbolo $E$ con corchetes significa "valor esperado de". Por ejemplo, $E[X]$ es el valor esperado de la variable $X$: su promedio ponderado por probabilidades. La utilidad esperada $EU(a)$ es un caso particular: la esperanza de la utilidad. El subíndice a veces indica sobre qué se promedia: $E_s[\max_a u(a,s)]$ significa "promedia sobre los estados $s$ la cantidad $\max_a u(a,s)$".

**El máximo $\max_a$ y el mínimo $\min_s$.** Se leen "máximo sobre $a$" y "mínimo sobre $s$". $\max_a u(a,s)$ significa: fija el estado $s$, prueba todas las acciones $a$ posibles y quédate con la utilidad más grande. Por ejemplo, $\max\{3, 7, 5\} = 7$: el máximo del conjunto es 7. Del mismo modo, $\min\{3, 7, 5\} = 3$. El subíndice $a$ o $s$ indica la letra que varía mientras las demás quedan fijas.

**Las desigualdades.** $>$ se lee "mayor que"; $<$ "menor que"; $\geq$ "mayor o igual que"; $\leq$ "menor o igual que". La escritura $\text{VEIP} \geq \text{VIM} \geq 0$ se lee: "VEIP es mayor o igual que VIM, que a su vez es mayor o igual que 0".

**El parámetro $\theta$ (theta) y la pérdida $L(\theta, a)$.** En la parte estadística de la teoría, $\theta$ (letra griega theta) representa el valor verdadero y desconocido que nos importa: la demanda real, la tasa de éxito real de un tratamiento. La **pérdida** $L(\theta, a)$ (ele mayúscula) es un número que mide cuánto "duele" elegir $a$ cuando la verdad es $\theta$: a diferencia de la utilidad, aquí más es peor, y lo óptimo es pérdida mínima (idealmente cero).

**La regla de decisión $\delta$ (delta).** Es una función que dice qué acción tomar según lo observado. En estadística, un estimador es una regla de decisión: dados los datos $X$, decide un valor $\delta(X)$. El **riesgo** $R(\theta, \delta)$ es la pérdida esperada de esa regla.

**El coeficiente $\alpha$ (alfa).** En el criterio de Hurwicz, $\alpha$ es un número entre $0$ y $1$ que mide el optimismo del decisor: $\alpha = 1$ es optimista puro, $\alpha = 0$ es pesimista puro.

**La barra condicional $\mid$.** Se lee "dado que". La expresión $P(s \mid \text{muestra})$ significa "la probabilidad del estado $s$ una vez que vimos la muestra": es la probabilidad **posterior**, la creencia actualizada con la nueva información.

**Otras funciones.** $\sqrt{x}$ es la raíz cuadrada de $x$ (el número que multiplicado por sí mismo da $x$). $\ln x$ es el logaritmo natural (el exponente al que hay que elevar el número $e \approx 2.718$ para obtener $x$). Ambas son funciones cóncavas, y por eso aparecen como utilidades de personas aversas al riesgo. $x^2$ es "equis al cuadrado", $x$ multiplicado por sí mismo.

**La prima o derivada.** Al hablar de aversión al riesgo usaremos $u'(x)$ (se lee "u prima de equis"), la derivada de $u$: la pendiente de su gráfica, cuánto sube la utilidad cuando $x$ aumenta una unidad. Y $u''(x)$ ("u biprima"), la derivada segunda: la curvatura de la gráfica. Si $u''(x) < 0$, la gráfica se dobla hacia abajo y $u$ es cóncava.

Con este vocabulario ya podemos construir el problema de decisión completo.

## Elementos de una decisión

Un problema de decisión bajo riesgo se modela con **cinco ingredientes**, y conviene escribirlos todos explícitamente antes de calcular nada.

**1. El conjunto de acciones $A$.** Todo lo que podemos elegir. Debe estar bien delimitado: comprar o alquilar, operar o esperar, sembrar maíz o soja. Incluir una acción olvidada es el error más grave posible: la teoría solo puede elegir la mejor entre las opciones que le damos.

**2. El conjunto de estados $S$.** Los escenarios posibles que no controlamos. Deben ser **mutuamente excluyentes** (no pueden ocurrir dos a la vez: o llueve o no llueve) y **exhaustivos** (cubren todo lo posible). Si los estados se superponen o dejan huecos, las probabilidades no sumarán bien.

**3. La función de resultados $r(a,s)$.** Para cada pareja acción–estado, el resultado correspondiente. Suele escribirse en una **tabla de pagos**: las filas son las acciones, las columnas los estados, y cada casilla es un resultado. Nuestro ejemplo del paraguas, con resultados medidos en una escala de comodidad:

| $r(a,s)$ | Llueve ($s_1$) | No llueve ($s_2$) |
|---|---|---|
| Llevar paraguas ($a_1$) | $0$ | $-5$ |
| No llevarlo ($a_2$) | $-50$ | $10$ |

La casilla $-50$ se lee: "si elijo no llevarlo y llueve, mi resultado es $-50$". La casilla $10$: "si no llueve y no lo llevo, gano $10$ de comodidad". Cada fila es la suerte de una acción según el estado; cada columna, la comparación de acciones ante un mismo estado.

**4. Las probabilidades $P(s)$.** Nuestra creencia sobre cada estado. Supongamos que el pronóstico dice $P(\text{llueve}) = 0.3$ y por tanto $P(\text{no llueve}) = 0.7$, porque $0.3 + 0.7 = 1$. Con probabilidades en la mesa ya no decidimos "bajo incertidumbre" sino **bajo riesgo**: podemos calcular.

**5. La función de utilidad $u$.** El valor que cada resultado tiene para el decisor. Por ahora, para no complicar, supongamos un decisor neutral al riesgo: $u(x) = x$. La utilidad del resultado es el resultado mismo. (En la siguiente sección soltaremos esa hipótesis, que es justamente la más interesante.)

**La regla de decisión: utilidad esperada.** Con los cinco ingredientes calculamos, para cada acción, su utilidad esperada:

$$EU(a) = \sum_{s \in S} P(s)\,u(r(a, s))$$

Se lee término por término: para cada estado $s$, multiplica su probabilidad $P(s)$ por la utilidad que te daría en ese estado $u(r(a,s))$, y suma sobre todos los estados. Es el promedio ponderado de los resultados de la acción.

Calculemos con el paraguas. Para la acción $a_1$ (llevarlo):

$$EU(a_1) = P(s_1)\,u(r(a_1, s_1)) + P(s_2)\,u(r(a_1, s_2)) = 0.3 \cdot 0 + 0.7 \cdot (-5) = 0 - 3.5 = -3.5$$

Para la acción $a_2$ (no llevarlo):

$$EU(a_2) = 0.3 \cdot (-50) + 0.7 \cdot 10 = -15 + 7 = -8$$

Como $-3.5 > -8$, llevar paraguas es mejor: pierdes menos utilidad esperada. Intuición: mojarse ($-50$) es tan malo que, aunque solo llueva con 30%, vale la pena cargar el paraguas.

**El principio de maximización de la utilidad esperada.** La regla "elige la acción con mayor $EU$" se conoce como principio de von Neumann–Morgenstern, por los matemáticos que la axiomatizaron en 1944. Su fuerza está en un teorema: si tus preferencias cumplen cuatro axiomas razonables (comparabilidad, transitividad, continuidad e independencia), entonces existe una utilidad $u$ tal que tú prefieres exactamente las acciones con mayor $EU$. Es decir, la regla no es un capricho: es la única coherente con preferencias racionales básicas. En la práctica la usamos como receta: calcular $EU$ de cada acción y quedarnos con la mayor.

**Una advertencia importante.** La utilidad esperada usa probabilidades. Si las probabilidades son inventadas y no tienes fundamento para ellas, el resultado es basura elegante. En ese caso conviene pasar a los criterios de incertidumbre profunda (minimax, Savage), que no exigen probabilidades. Saber cuándo usar cada herramienta es parte de la teoría.

## Utilidad y aversión al riesgo

Hasta ahora asumimos $u(x) = x$: la utilidad es el dinero. Pero las personas no valoran así. Perder $\$1000$ duele más de lo que alegra ganar $\$1000$; recibir un millón no te hace exactamente mil veces más feliz que recibir mil. La utilidad del dinero es **cóncava**: cada peso adicional aporta menos felicidad que el anterior (a esto los economistas lo llaman utilidad marginal decreciente).

**Las tres actitudes ante el riesgo.** La forma de la función $u$ clasifica a los decisores:

- **Neutral al riesgo:** $u$ es una recta, $u(x) = ax + b$. Solo importa el valor esperado; una apuesta justa (que ni gana ni pierde en promedio) le da lo mismo que no apostar.
- **Averso al riesgo:** $u$ es **cóncava**, se dobla hacia abajo ($u''(x) < 0$). Prefiere lo seguro: rechaza apuestas justas y paga por evitar incertidumbre (por eso compra seguros). Ejemplos: $u(x) = \sqrt{x}$, $u(x) = \ln x$.
- **Amante del riesgo:** $u$ es **convexa**, se dobla hacia arriba ($u''(x) > 0$). Disfruta la incertidumbre: acepta apuestas justas e incluso paga por apostar (casino, lotería). Ejemplo: $u(x) = x^2$ para $x \geq 0$.

¿Qué significa "cóncava" sin jerga? Que la gráfica de $u$ está por encima de la cuerda que une dos puntos cualesquiera de ella. Consecuencia clave: la utilidad del promedio es mayor que el promedio de las utilidades. En símbolos, para $u$ cóncava y cualquier apuesta $X$:

$$u\!\left(E[X]\right) \geq E\!\left[u(X)\right]$$

Se lee: "la utilidad del valor esperado es mayor o igual que la utilidad esperada". Es la **desigualdad de Jensen**, y es la razón matemática de que un averso prefiera lo seguro: la utilidad de tener el promedio seguro supera la utilidad promedio de la apuesta.

**Ejemplo con $u(x) = \sqrt{x}$.** Una apuesta $50/50$: con probabilidad $0.5$ ganas $100$ y con $0.5$ ganas $0$ (llamémosla "apuesta entre $0$ y $100$"). El valor esperado en dinero es

$$E[X] = 0.5 \cdot 100 + 0.5 \cdot 0 = 50$$

pero la utilidad esperada es

$$EU = 0.5 \cdot \sqrt{100} + 0.5 \cdot \sqrt{0} = 0.5 \cdot 10 + 0 = 5$$

¿Cuánto dinero seguro produce esa misma utilidad 5? Como $\sqrt{25} = 5$, la respuesta es 25. Es decir: para este decisor, la apuesta con valor esperado 50 "vale" lo mismo que 25 seguros.

**Equivalente de certeza y prima de riesgo.** Estos dos conceptos traducen lo anterior a números:

- El **equivalente de certeza** $EC$ es la cantidad segura que da la misma utilidad que la apuesta. Se define por la ecuación $u(EC) = EU(X)$: se despeja $EC$ aplicando la función inversa de $u$ a ambos lados. En el ejemplo, $EC = 25$.
- La **prima de riesgo** es la diferencia entre lo que la apuesta vale en promedio y su equivalente de certeza:

$$\text{prima de riesgo} = E[X] - EC$$

En el ejemplo, $50 - 25 = 25$: este decisor estaría dispuesto a pagar hasta 25 para cambiar la apuesta por su valor esperado seguro. Para un neutral, $EC = E[X]$ y la prima es 0. Para un amante del riesgo, $EC > E[X]$ y la prima es **negativa**: paga por poder apostar. Con $u(x) = x^2$ y la misma apuesta entre $0$ y $100$:

$$EU = 0.5 \cdot 100^2 + 0.5 \cdot 0^2 = 5000, \qquad EC = \sqrt{5000} \approx 70.71 > 50$$

premia el riesgo con $50 - 70.71 = -20.71$: prefiere la apuesta a su promedio seguro.

**La medida de Arrow–Pratt.** ¿Cuánta aversión tiene una utilidad dada? Los economistas Kenneth Arrow y John Pratt propusieron el coeficiente de aversión absoluta al riesgo:

$$A(x) = -\frac{u''(x)}{u'(x)}$$

Se lee: "menos la segunda derivada de $u$ dividida por la primera". El signo menos hace que $A(x) > 0$ signifique aversión. Para $u(x) = \sqrt{x}$ resulta $A(x) = \frac{1}{2x}$: la aversión disminuye al aumentar la riqueza (un rico tolera más riesgo que un pobre, en términos absolutos). Para $u(x) = \ln x$, $A(x) = \frac{1}{x}$. No necesitas calcularlo en problemas básicos, pero explica por qué $u = \sqrt{x}$ y $u = \ln x$ son los ejemplos clásicos de aversión.

**La paradoja de San Petersburgo.** En 1713, Nicolas Bernoulli propuso el juego: lanzas una moneda hasta que sale cara; si sale en el lanzamiento $n$, ganas $2^n$ monedas. Como la probabilidad de que la primera cara salga en el lanzamiento $n$ es $\frac{1}{2^n}$, el valor esperado es

$$\sum_{n=1}^{\infty} \frac{1}{2^n} \cdot 2^n = 1 + 1 + 1 + \cdots = \infty$$

¡La suma infinita de unos es infinita! El juego vale infinito, y sin embargo nadie pagaría una fortuna por jugarlo. La paradoja: la gente no valora el dinero linealmente. La solución, de Daniel Bernoulli (1738), fue proponer la utilidad logarítmica $u(x) = \ln x$. Entonces la utilidad esperada es finita:

$$EU = \sum_{n=1}^{\infty} \frac{1}{2^n} \ln(2^n) = \ln 2 \cdot \sum_{n=1}^{\infty} \frac{n}{2^n} = 2\ln 2 = \ln 4$$

(usamos que la suma $\sum n/2^n = 2$), de modo que el equivalente de certeza es $EC = 4$: la utilidad de la lotería equivale a 4 monedas seguras. Con utilidad logarítmica la paradoja desaparece. Este episodio fundó la idea de utilidad como la usamos hoy.

**Cómo decidir con aversión.** La receta nunca cambia: calcula $EU(a) = \sum_s P(s)\,u(r(a,s))$ con la $u$ del decisor (no con el dinero crudo) y elige la mayor. La utilidad es quien decide; el dinero solo es un resultado.

## Valor de la información (VEIP y VIM)

La información vale porque permite **decidir mejor**. Si supieras con certeza el estado de la naturaleza antes de elegir, tomarías siempre la mejor acción para ese estado. La teoría mide cuánto vale ese "saber antes".

**El VEIP: valor esperado de la información perfecta.** Imagina que un oráculo te revela el estado $s$ antes de decidir. Ya sabiendo $s$, eliges la acción que maximiza la utilidad en ese estado: $\max_a u(a, s)$ (recuerda: máxima utilidad entre todas las acciones, con $s$ fijo). El promedio de esa ganancia, sobre todos los estados posibles, es la utilidad esperada **con información perfecta**:

$$E_s\!\left[\max_a u(a, s)\right]$$

Sin el oráculo, lo mejor que puedes hacer es elegir la acción con mayor utilidad esperada:

$$\max_a E_s\!\left[u(a, s)\right]$$

El **VEIP** es la diferencia entre ambas:

$$\text{VEIP} = E_s\!\left[\max_a u(a, s)\right] - \max_a E_s\!\left[u(a, s)\right]$$

Es lo máximo que pagarías por la información perfecta: más allá de ese precio, la información sale más cara de lo que vale.

**Ejemplo.** Retomemos la tabla $a_1: (100, 20)$ y $a_2: (50, 40)$ con estados equiprobables ($P(s_1) = P(s_2) = 0.5$). Sin información:

$$EU(a_1) = 0.5 \cdot 100 + 0.5 \cdot 20 = 60, \qquad EU(a_2) = 0.5 \cdot 50 + 0.5 \cdot 40 = 45$$

así que el mejor valor sin información es $\max\{60, 45\} = 60$. Con información perfecta, si supieras que ocurre $s_1$ elegirías $a_1$ (ganas 100) y si supieras que ocurre $s_2$ elegirías $a_2$ (ganas 40). En promedio:

$$E_s[\max_a u(a,s)] = 0.5 \cdot 100 + 0.5 \cdot 40 = 70$$

Por lo tanto $\text{VEIP} = 70 - 60 = 10$: pagarías hasta 10 por saber el estado. Fíjate en el detalle clave: con información perfecta puedes elegir distinto según el estado (a veces $a_1$, a veces $a_2$), y esa flexibilidad es justamente lo que vale 10.

**El VIM: valor de la información de una muestra.** La información perfecta no existe: en la vida real compras información **imperfecta** (un test, un estudio de mercado, una muestra) que solo mejora tus probabilidades. Al ver el resultado de la muestra, actualizas las probabilidades con el teorema de Bayes (de ahí la barra $\mid$): de $P(s)$ pasas a las posteriores $P(s \mid \text{muestra})$. El **VIM** es:

$$\text{VIM} = E_{\text{muestra}}\!\left[\max_a E_{s \mid \text{muestra}}\!\left[u(a, s)\right]\right] - \max_a E_s\!\left[u(a, s)\right]$$

Se lee: "el valor esperado (sobre los resultados de la muestra) de la mejor utilidad esperada posterior, menos la mejor utilidad esperada previa". Es el VEIP con certeza reemplazada por probabilidades posteriores.

**Ejemplo numérico.** Con la misma tabla, supón que un test acierta el estado con probabilidad $0.8$: si el estado es $s_1$, el test dice $s_1$ con $0.8$ y $s_2$ con $0.2$, y simétricamente. Como las previas son $0.5$ y $0.5$, el teorema de Bayes da posteriores idénticas a las exactitudes: si el test dice $s_1$, entonces $P(s_1 \mid \text{test} = s_1) = 0.8$ y $P(s_2 \mid \text{test} = s_1) = 0.2$; si dice $s_2$, al revés. Con test positivo a $s_1$:

$$EU(a_1) = 0.8 \cdot 100 + 0.2 \cdot 20 = 84, \qquad EU(a_2) = 0.8 \cdot 50 + 0.2 \cdot 40 = 48 \quad\Rightarrow\quad \text{eliges } a_1: 84$$

Con test positivo a $s_2$:

$$EU(a_1) = 0.2 \cdot 100 + 0.8 \cdot 20 = 36, \qquad EU(a_2) = 0.2 \cdot 50 + 0.8 \cdot 40 = 42 \quad\Rightarrow\quad \text{eliges } a_2: 42$$

Cada resultado del test ocurre con probabilidad $0.5$, así que la utilidad esperada con la muestra es $0.5 \cdot 84 + 0.5 \cdot 42 = 63$, y

$$\text{VIM} = 63 - 60 = 3$$

**La propiedad fundamental.** Con decisión óptima, más información nunca hace daño:

$$\text{VEIP} \geq \text{VIM} \geq 0$$

La información perfecta vale al menos tanto como la imperfecta, y ambas valen al menos cero (si el test es inútil, simplemente lo ignoras y no pierdes nada). En la práctica, compra la información si su **valor neto** es positivo:

$$\text{valor neto} = \text{VIM} - \text{costo de la información}$$

Un estudio de mercado que cuesta 2 y tiene VIM 3 se compra; si cuesta 5, no. El VEIP es también una cota superior del VIM: ningún test, por bueno que sea, puede valer más que saber la verdad.

**Intuición final.** El VEIP y el VIM son la respuesta cuantitativa a "¿cuánto pago por una consultoría, un sensor, un estudio clínico?". Comparan dos mundos: el de la información y el de su ausencia, y miden la diferencia en utilidad esperada.

## Pérdida y riesgo de Bayes

La estadística también es un problema de decisión: hay que elegir un número (un estimador) sin conocer el valor verdadero. Para ese mundo, en lugar de utilidad se usa la **pérdida**.

**La función de pérdida $L(\theta, a)$.** Mide el costo de elegir $a$ cuando la verdad es $\theta$: cero si aciertas, positiva si te equivocas, y más grande cuanto peor el error. Las tres pérdidas clásicas:

- **Cuadrática:** $L(\theta, a) = (\theta - a)^2$. Castiga el error al cuadrado: errores dobles duelen cuatro veces. Es la más usada por comodidad matemática.
- **Absoluta:** $L(\theta, a) = \lvert \theta - a \rvert$. Castiga proporcionalmente al error (las barras $\lvert \ \rvert$ son el valor absoluto: la distancia sin signo).
- **0-1 (clasificación):** $L(\theta, a) = 0$ si $a = \theta$, y $L(\theta, a) = 1$ si $a \neq \theta$. Solo importa acertar o fallar, sin matices.

**El riesgo de una regla de decisión.** Una **regla de decisión** $\delta$ asigna una acción a cada observación: visto el dato $X$, elige $\delta(X)$. El **riesgo** es la pérdida esperada de la regla cuando la verdad es $\theta$:

$$R(\theta, \delta) = E\!\left[L(\theta, \delta(X)) \mid \theta\right]$$

Se lee: "el riesgo de la regla $\delta$ cuando el parámetro es $\theta$ es la pérdida promedio de $\delta(X)$, promediada sobre los datos, suponiendo que la verdad es $\theta$". Es análogo a la utilidad esperada, pero con pérdidas: queremos riesgo pequeño.

**El riesgo de Bayes.** Si además tenemos una distribución previa sobre $\theta$ (nuestra creencia antes de los datos), podemos promediar el riesgo sobre ella y obtener el **riesgo de Bayes**: el riesgo promedio de la regla según la previa. La regla que lo minimiza es la **regla de Bayes**. El resultado central es hermoso y práctico: la acción óptima según cada pérdida es un resumen clásico de la distribución posterior de $\theta$:

- Con pérdida **cuadrática**, el óptimo es la **media** posterior.
- Con pérdida **absoluta**, el óptimo es la **mediana** posterior.
- Con pérdida **0-1**, el óptimo es la **moda** posterior.

**Ejemplo numérico.** Supongamos que, tras ver los datos, la distribución posterior de $\theta$ es $P(\theta = 10) = 0.2$, $P(\theta = 20) = 0.5$, $P(\theta = 30) = 0.3$. Entonces:

- **Media posterior:** $0.2 \cdot 10 + 0.5 \cdot 20 + 0.3 \cdot 30 = 2 + 10 + 9 = 21$. Con pérdida cuadrática, estima 21.
- **Mediana posterior:** el valor que deja al menos 50% de probabilidad a cada lado; aquí es 20 (la probabilidad acumulada hasta 20 es $0.7 \geq 0.5$ y hasta 10 es $0.2 < 0.5$). Con pérdida absoluta, estima 20.
- **Moda posterior:** el valor más probable, 20 (probabilidad 0.5). Con pérdida 0-1, estima 20, y el riesgo mínimo es la probabilidad de fallar: $1 - 0.5 = 0.5$.

**Por qué importa.** Este puente entre pérdidas y resúmenes del posterior es el motor de la **estimación de Bayes**: si tu problema penaliza los errores grandes (cuadrática), usa la media; si penaliza linealmente (absoluta), la mediana; si solo importa acertar (clasificación), la moda. La teoría de la decisión convierte la elección del estimador en una decisión explícita con una pérdida declarada, en lugar de una receta ciega.

## Criterios clásicos (minimax, maximin, Hurwicz, Savage)

¿Y si no tienes probabilidades confiables? En la **incertidumbre profunda** (guerra, regulación nueva, mercados sin historia, cambio climático), inventar probabilidades puede ser peor que prescindir de ellas. Para esos casos existen criterios que trabajan solo con la tabla de pagos. Supongamos que la tabla da **utilidades** (ganancias): más es mejor.

**El criterio maximin (Wald, versión ganancias).** Para cada acción mira su peor resultado posible y elige la acción cuyo peor resultado es el mejor:

$$\max_a \min_s u(a, s)$$

Se lee: "el máximo sobre las acciones del mínimo sobre los estados". Es el criterio del pesimista total: supón que pase lo peor y prepárate para eso. Es la actitud de una presa hidráulica o de un plan de emergencia: no te importa el promedio, te importa sobrevivir al peor escenario.

**El criterio maximax.** El espejo optimista: elige la acción con el mejor de los mejores resultados:

$$\max_a \max_s u(a, s)$$

Mira solo el techo de cada acción. Es la actitud del jugador de casino que solo ve el premio gordo.

**El criterio de Laplace (razón insuficiente).** Si no sabes las probabilidades, trátalas como iguales (equiprobables) y maximiza el promedio simple:

$$\max_a \frac{1}{\lvert S \rvert} \sum_{s \in S} u(a, s)$$

donde $\lvert S \rvert$ es el número de estados. Es un compromiso: "no tengo razones para distinguir estados, así que los trato igual".

**El criterio de Hurwicz.** Interpola entre el pesimismo y el optimismo con el coeficiente de optimismo $\alpha$ (alfa) entre $0$ y $1$:

$$H(a) = \alpha \max_s u(a, s) + (1 - \alpha) \min_s u(a, s)$$

Con $\alpha = 1$ es maximax; con $\alpha = 0$, maximin; con $\alpha = 0.5$, el punto medio. El decisor elige su $\alpha$ según su temperamento y se queda con la acción de mayor $H(a)$.

**El criterio de Savage (arrepentimiento minimax).** La idea de Savage: lo que duele no es la pérdida cruda, sino el **arrepentimiento**: cuánto dejaste sobre la mesa por no haber elegido lo mejor *sabiendo* el estado. Para cada estado $s$, el arrepentimiento de la acción $a$ es la distancia al mejor resultado posible en ese estado:

$$r(a, s) = \max_{a'} u(a', s) - u(a, s)$$

(la $a'$ con apóstrofe es "otra acción cualquiera": el máximo se toma sobre todas las acciones). El criterio de Savage minimiza el arrepentimiento máximo: $\min_a \max_s r(a, s)$. Es pesimista pero relativo: se compara con el mejor, no con el cero.

**El criterio minimax (versión pérdidas).** Si tu tabla está en **pérdidas** $L(a, s)$ (más es peor), el criterio análogo al maximin es el **minimax**: elegir la acción que minimiza la pérdida máxima posible:

$$\min_a \max_s L(a, s)$$

Es la misma actitud pesimista (lo peor primero), traducida al lenguaje de pérdidas. Fíjate en el orden: minimiza sobre acciones, maximiza sobre estados.

**Un ejemplo con los cuatro criterios.** Tabla de ganancias $a_1: (100, 20)$ y $a_2: (50, 40)$:

- **Maximin:** peores casos $20$ y $40$; elige $a_2$ (40).
- **Maximax:** techos $100$ y $50$; elige $a_1$ (100).
- **Laplace:** $EU(a_1) = 60 > EU(a_2) = 45$; elige $a_1$.
- **Hurwicz con $\alpha = 0.5$:** $H(a_1) = 0.5 \cdot 100 + 0.5 \cdot 20 = 60$, $H(a_2) = 45$; elige $a_1$.
- **Savage:** mejores por estado: $100$ y $40$. Arrepentimientos de $a_1$: $(100 - 100, 40 - 20) = (0, 20)$, máximo $20$. De $a_2$: $(100 - 50, 40 - 40) = (50, 0)$, máximo $50$. Elige $a_1$ (máximo arrepentimiento menor).

¡Cuatro criterios, dos ganadores distintos! No es un defecto: cada criterio encarna una actitud distinta ante lo desconocido. El maximin protege del desastre ($a_2$ nunca baja de 40); el de Savage y Hurwicz persiguen el mejor promedio razonable ($a_1$). La elección del criterio es, en sí misma, una decisión con carga moral y estratégica.

**¿Cuándo usar cada uno?** Si las probabilidades son buenas y el contexto permite esperanza matemática, usa utilidad esperada: es la regla racional estándar y no desperdicia información. Si el contexto es adversario o catástrofe (una inundación de la presa, un ataque), el maximin/minimax protege contra lo peor. Si quieres formalizar tu grado de optimismo, Hurwicz. Si te duele "haber elegido mal" en retrospectiva, Savage. Ninguno requiere probabilidades; todos requieren la tabla de resultados.

## Árboles de decisión

Las decisiones reales son **secuenciales**: decides, el azar responde, vuelves a decidir, y así. El **árbol de decisión** es el dibujo estándar de ese proceso: un diagrama de ramas que se lee de izquierda (el inicio) a derecha (los resultados finales).

**Los símbolos del árbol.** Dos tipos de nodos:

- **Nodo de decisión (cuadrado):** aquí elige el decisor. De cada cuadrado salen tantas ramas como acciones haya.
- **Nodo de azar (círculo):** aquí elige la naturaleza. De cada círculo salen tantas ramas como estados, y cada rama lleva escrita su probabilidad (todas las ramas de un círculo suman 1).

Las puntas del árbol (sin ramas) son las **hojas**: ahí se escribe la utilidad del resultado final de cada camino completo. Un camino es una sucesión de decisiones y azares desde la raíz hasta una hoja.

**La regla: inducción hacia atrás.** El árbol se resuelve de las hojas hacia la raíz, en cuatro pasos:

1. Dibuja el árbol completo: nodos, ramas, probabilidades y utilidades de las hojas.
2. En cada **nodo de azar**, calcula la utilidad esperada de sus ramas:

$$V = \sum_i P_i \cdot V_i$$

donde $P_i$ es la probabilidad de la rama $i$ y $V_i$ el valor de lo que hay al final de ella. Ese valor $V$ "sube" al círculo.

3. En cada **nodo de decisión**, quédate con la rama de mayor valor: $V = \max_i V_i$. Las ramas rechazadas se tachan o podan.
4. Repite hacia arriba hasta llegar a la raíz: el valor de la raíz es la utilidad esperada de la estrategia óptima, y las ramas supervivientes forman la **política óptima** (qué hacer en cada situación).

**Ejemplo: perforar petróleo con test sísmico.** Puedes perforar directamente o pagar un test sísmico. Si perforas: el pozo está **seco** con probabilidad $0.7$ (pérdida de 1 millón) o **húmedo** con $0.3$ (ganancia de 5 millones). No perforar da 0.

- Sin test: $EU(\text{perforar}) = 0.3 \cdot 5 + 0.7 \cdot (-1) = 0.8$ millones, mejor que 0. Perforas y esperas 0.8M.
- El test sísmico cuesta 0.1M y acierta: si el pozo está húmedo, el test da positivo con probabilidad $0.9$; si está seco, da negativo con probabilidad $0.8$. Por el teorema de Bayes (con previas $0.3$ y $0.7$): la probabilidad de test positivo es $0.9 \cdot 0.3 + 0.2 \cdot 0.7 = 0.41$, y dado positivo, $P(\text{húmedo} \mid +) = \frac{0.9 \cdot 0.3}{0.41} \approx 0.66$; dado negativo, $P(\text{húmedo} \mid -) = \frac{0.1 \cdot 0.3}{0.59} \approx 0.05$.

Resolviendo hacia atrás:

- Si el test da positivo: $EU(\text{perforar}) = 0.66 \cdot 5 - 0.34 \cdot 1 \approx 2.95$; perforas. Si da negativo: $EU = 0.05 \cdot 5 - 0.95 \cdot 1 = -0.70$; no perforas (0).
- Valor del árbol con test: $0.41 \cdot 2.95 + 0.59 \cdot 0 \approx 1.21$; restando el costo del test, $1.21 - 0.1 = 1.11$ millones.

Como $1.11 > 0.8$, conviene testear antes de perforar. La diferencia $1.21 - 0.8 = 0.41$ es el VIM del test: lo que el test agrega en bruto, y su valor neto es $0.41 - 0.1 = 0.31$ millones.

**Análisis de sensibilidad.** La decisión depende de números que estimamos: probabilidades, utilidades, costos. El **análisis de sensibilidad** varía uno de esos números y mira si la decisión óptima cambia. Si cambia con una variación pequeña, la decisión es frágil y conviene afinar ese dato; si aguanta variaciones grandes, es robusta.

**El punto de indiferencia.** Es el valor del parámetro donde dos acciones empatan. Para encontrarlo, igualamos sus utilidades esperadas y despejamos. Ejemplo: con la tabla $a_1: (100, 20)$ y $a_2: (50, 40)$, sea $p$ la probabilidad del primer estado. Entonces

$$EU(a_1) = 100p + 20(1-p) = 80p + 20, \qquad EU(a_2) = 50p + 40(1-p) = 10p + 40$$

Igualando: $80p + 20 = 10p + 40 \Rightarrow 70p = 20 \Rightarrow p = \frac{2}{7} \approx 0.286$. Si $p > 0.286$ elige $a_1$; si $p < 0.286$, $a_2$; si $p = 0.286$, da igual. El punto de indiferencia resume toda la sensibilidad de la decisión a la probabilidad.

## Aplicaciones

**Negocios y finanzas.** Valoración de proyectos de inversión con opciones reales (la opción de expandir o abandonar es un nodo de decisión); gestión de inventarios (cuánto pedir sin conocer la demanda); seguros (la prima se compara con la utilidad esperada con y sin seguro); A/B testing (elegir la variante ganadora es una decisión con datos); portafolios (el inversor averso elige según su utilidad, no solo según la rentabilidad esperada).

**Medicina.** Tratar o esperar: la utilidad de curar, la de sufrir efectos adversos y la probabilidad de la enfermedad deciden el umbral de tratamiento; testear antes de tratar agrega el VIM del test; priorización de trasplantes ordena pacientes con utilidades de supervivencia; política sanitaria (vacunación masiva) compara vidas y costos con utilidades sociales.

**Ingeniería.** Diseño robusto: una pieza debe funcionar en un rango de condiciones, no solo en el promedio; mantenimiento predictivo: reemplazar ahora o arriesgar una falla; diseño de presas y estructuras: minimax ante crecidas extremas.

**Política pública.** Respuesta a pandemias (confinar o no: costos económicos contra vidas); regulación ambiental bajo incertidumbre climática; asignación de presupuesto entre programas; subastas y diseño de mecanismos (la teoría de la decisión estudia qué revela cada participante).

**Inteligencia artificial.** Un agente racional es literalmente un maximizador de utilidad esperada; el aprendizaje por refuerzo resuelve árboles enormes (procesos de decisión de Markov) con inducción hacia atrás; la clasificación automática usa la pérdida 0-1; la recomendación de productos pondera la utilidad del usuario con la incertidumbre de sus gustos.

## Ejemplos resueltos

**Ejemplo 1 (utilidad esperada).** Una lotería: el boleto cuesta $\$5$ y paga $\$100$ con probabilidad $1/50$. Para un neutral al riesgo:

$$EU = \frac{1}{50} \cdot 95 + \frac{49}{50} \cdot (-5) = 1.9 - 4.9 = -3$$

La utilidad esperada es $-3$: en promedio pierdes $\$3$ por boleto. No conviene. El cálculo descompone los dos casos: ganas 95 netos (100 de premio menos 5 del boleto) o pierdes 5.

**Ejemplo 2 (aversión al riesgo y seguros).** Un seguro de auto cuesta $\$300$ al año y cubre una pérdida de $\$5000$ que ocurre con probabilidad $0.05$. La pérdida esperada es $0.05 \cdot 5000 = 250 < 300$: el seguro es "caro" en valor esperado. ¿Es irracional comprarlo? No: para un **averso**, la utilidad de perder $\$5000$ de golpe es desproporcionadamente negativa (con $u = \ln x$, perder 5000 de 10000 derrumba la utilidad mucho más de lo que 300 la baja). El averso paga la prima de riesgo por tranquilidad; el neutral no compra. La teoría muestra que comprar seguro con prima mayor al valor esperado es racional si y solo si eres suficientemente averso.

**Ejemplo 3 (VEIP).** Con la tabla $a_1: (100, 20)$, $a_2: (50, 40)$ y estados equiprobables, ya calculamos: sin información, el mejor valor es 60; con información perfecta, $0.5 \cdot 100 + 0.5 \cdot 40 = 70$; por tanto $\text{VEIP} = 10$. La lectura operativa: un pronóstico perfecto no debe costar más de 10.

**Ejemplo 4 (minimax).** Dos proyectos. El A rinde $10$ en el escenario bueno y $-2$ en el malo; el B rinde $5$ y $1$. Sin probabilidades confiables, minimax mira lo peor: A tiene peor caso $-2$, B tiene peor caso $1$. Elige B: nunca pierdes. (Con utilidad esperada y probabilidades favorables al escenario bueno, A podría ganar; la diferencia ilustra que el criterio cambia la respuesta.)

**Ejemplo 5 (umbral médico).** Una enfermedad rara: prevalencia $p = 0.01$. Utilidades por paciente: tratar a un enfermo da $+100$; tratar a un sano da $-5$ (efectos adversos); no tratar a un enfermo da $-100$; no tratar a un sano da $0$. Compara tres estrategias:

- **No tratar a nadie:** $EU = 0.01 \cdot (-100) = -1$.
- **Tratar a todos:** $EU = 0.01 \cdot 100 + 0.99 \cdot (-5) = 1 - 4.95 = -3.95$.
- **Testear y tratar positivos:** con sensibilidad 0.9 y especificidad 0.95, la probabilidad de test positivo es $0.9 \cdot 0.01 + 0.05 \cdot 0.99 = 0.0585$, y dado positivo, la probabilidad de enfermedad es $\frac{0.009}{0.0585} \approx 0.154$. Tratar a los positivos da $EU = 0.0585 \cdot (0.154 \cdot 100 - 0.846 \cdot 5) \approx 0.0585 \cdot 11.2 \approx 0.65$.

El testeo domina: $0.65 > -1 > -3.95$. El umbral (punto de indiferencia entre no tratar y tratar a todos) sale de $105p - 5 = -100p$, es decir $p = \frac{5}{205} \approx 0.024$: con prevalencia sobre 2.4% conviene tratar a todos; bajo ella, mejor el test.

**Ejemplo 6 (árbol completo).** El problema del petróleo de la sección de árboles: perforar directo da $EU = 0.8$M; testear primero da $1.11$M netos. La inducción hacia atrás mostró que el test se usa para perforar solo si es positivo. El VIM del test es $0.41$M y su valor neto $0.31$M. Con un test que costara 0.5M, el valor neto sería $0.41 - 0.5 = -0.09$M y convendría perforar directo: el árbol decide también cuánto pagar por la información.

## Errores comunes y cómo evitarlos

- **Maximizar el dinero esperado sin utilidad.** El valor esperado ignora el riesgo: una apuesta con esperanza positiva puede arruinarte. Usa la utilidad del decisor, no el dinero crudo.
- **Ignorar la actitud ante el riesgo del decisor.** Pregunta (o elicita) la función de utilidad antes de recomendar. Decidir por otro con tu propia aversión es un error de modelado.
- **Usar minimax cuando hay probabilidades buenas.** Desperdicia información: si puedes estimar $P(s)$, la utilidad esperada domina al pesimismo extremo.
- **Confundir arrepentimiento con pérdida.** El arrepentimiento de Savage se mide contra el mejor resultado del estado, no contra cero. Usar la tabla cruda en lugar de la tabla de arrepentimientos invalida el criterio.
- **Olvidar estados o acciones posibles.** Si la acción "esperar" o el estado "catástrofe" no está en la tabla, la decisión óptima del modelo puede ser desastrosa en la realidad.
- **No hacer análisis de sensibilidad.** Una decisión "óptima" que cambia ante un 1% de variación en una probabilidad es frágil; identifica el punto de indiferencia antes de comprometerte.
- **Confundir VEIP con VIM.** El VEIP usa información perfecta (certeza) y es una cota superior; el VIM usa un test real con posterior calculada por Bayes. Son conceptos distintos con fórmulas distintas.

## Ejercicios propuestos (con respuestas)

1. Una apuesta $50/50$ paga $100$ si ganas y $-40$ si pierdes. ¿Conviene a un neutral al riesgo?
2. Con $u(x) = \ln x$, halla el equivalente de certeza de una apuesta $50/50$ entre $100$ y $10000$.
3. Con la tabla $a_1: (100, 20)$ y $a_2: (50, 40)$, aplica maximin, Hurwicz con $\alpha = 0.7$ y Savage.
4. Tabla de pérdidas: $a_1: (10, 30)$ y $a_2: (20, 15)$. Aplica minimax.
5. Con la tabla $a_1: (100, 20)$ y $a_2: (50, 40)$ y estados equiprobables, halla el VEIP.
6. Posterior $P(\theta = 10) = 0.2$, $P(\theta = 20) = 0.5$, $P(\theta = 30) = 0.3$. Halla la estimación óptima con pérdida cuadrática, absoluta y 0-1.
7. ¿Por qué puede ser racional comprar un seguro cuya prima supera la pérdida esperada?
8. Halla el punto de indiferencia (en la probabilidad del primer estado) entre $a_1: (100, 20)$ y $a_2: (50, 40)$.

**Respuestas:**
1) $EU = 0.5 \cdot 100 + 0.5 \cdot (-40) = 30 > 0$: sí conviene. 2) $EU = \frac{\ln 100 + \ln 10000}{2} = \ln 1000$; por tanto $EC = 1000$. 3) Maximin: $a_2$ (peor caso 40). Hurwicz $\alpha = 0.7$: $H(a_1) = 0.7 \cdot 100 + 0.3 \cdot 20 = 76$; $H(a_2) = 0.7 \cdot 50 + 0.3 \cdot 40 = 47$: elige $a_1$. Savage: arrepentimientos $a_1: (0, 20)$, máximo 20; $a_2: (50, 0)$, máximo 50: elige $a_1$. 4) Pérdidas máximas: $30$ y $20$; minimax elige $a_2$. 5) $70 - 60 = 10$. 6) Cuadrática: media $21$; absoluta: mediana $20$; 0-1: moda $20$ (riesgo $0.5$). 7) Porque un decisor averso valora evitar una pérdida grande más que la prima: la utilidad esperada con seguro supera a la utilidad esperada sin él, aunque la prima exceda la pérdida esperada. 8) $80p + 20 = 10p + 40 \Rightarrow p = 2/7 \approx 0.286$.

## Resumen

- Decidir bajo incertidumbre es elegir una acción $a \in A$ sin saber qué estado $s \in S$ ocurrirá; el resultado $r(a,s)$ depende de ambos.
- La utilidad esperada $EU(a) = \sum_s P(s)\,u(r(a,s))$ es el criterio racional estándar (von Neumann–Morgenstern): elige la acción de mayor $EU$.
- La forma de la utilidad captura la actitud ante el riesgo: lineal (neutral), cóncava (averso), convexa (amante). El equivalente de certeza y la prima de riesgo la miden en dinero.
- La información vale: el VEIP usa información perfecta, el VIM usa una muestra con posterior bayesiana, y siempre $\text{VEIP} \geq \text{VIM} \geq 0$.
- Con pérdidas, el riesgo de Bayes minimiza la pérdida esperada; la pérdida cuadrática pide la media posterior, la absoluta la mediana y la 0-1 la moda.
- Sin probabilidades confiables: maximin/minimax (pesimista), maximax (optimista), Laplace (equiprobable), Hurwicz (mezcla con $\alpha$) y Savage (arrepentimiento minimax).
- Los árboles de decisión estructuran decisiones secuenciales y se resuelven por inducción hacia atrás; el análisis de sensibilidad y los puntos de indiferencia prueban la robustez.
- La teoría de la decisión es el puente entre la probabilidad, la economía, la medicina y la inteligencia artificial: todas eligen acciones bajo incertidumbre.
`
};
