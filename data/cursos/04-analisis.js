window.CURSOS = window.CURSOS || {};
window.CURSOS["analisis"] = {
  "espacios-metricos": String.raw`
## ¿Qué es un espacio métrico?
Un **espacio métrico** es un conjunto $X$ con una función de distancia $d: X \times X \to \mathbb{R}$ que cumple:

1. **Positividad:** $d(x, y) \geq 0$, y $d(x,y) = 0 \iff x = y$.
2. **Simetría:** $d(x, y) = d(y, x)$.
3. **Desigualdad triangular:** $d(x, z) \leq d(x, y) + d(y, z)$.

Con solo estas tres propiedades se pueden definir límites, continuidad, compacidad y completitud. El análisis deja de depender de la recta real y se vuelve general.

**Ejemplo.** $\mathbb{R}^n$ con la distancia euclidiana $d(x,y) = \sqrt{\sum (x_i - y_i)^2}$ es el espacio métrico estándar.

## Ejemplos de métricas
- **Discreta:** $d(x,y) = 0$ si $x = y$, y $1$ si no. Todo conjunto es abierto y cerrado.
- **Manhattan:** $d_1(x,y) = \sum |x_i - y_i|$ (distancias en una ciudad con cuadrícula).
- **Supremo:** $d_\infty(f,g) = \sup_{x\in[a,b]}|f(x) - g(x)|$ en funciones continuas.
- **Métrica inducida** por una norma: $d(x,y) = \|x - y\|$.
- **Métricas equivalentes:** las de $\mathbb{R}^n$ generan los mismos abiertos y la misma convergencia.

**Ejemplo numérico.** $d_1((0,0),(3,4)) = 7$; $d_2 = 5$; $d_\infty = 4$. La forma de medir cambia las distancias, no siempre la topología.

## Bolas abiertas y conjuntos abiertos
La **bola abierta** de centro $x$ y radio $r$:
$$B(x, r) = \{y \in X : d(x, y) < r\}$$

Un conjunto $U$ es **abierto** si para cada punto suyo existe una bola contenida en $U$. Un conjunto $F$ es **cerrado** si su complemento es abierto.

**Propiedades:**
- $\emptyset$ y $X$ son abiertos y cerrados a la vez.
- Unión arbitraria de abiertos es abierta; intersección finita de abiertos es abierta.
- En la métrica discreta, todo conjunto es abierto.

**Ejemplo.** En $\mathbb{R}$, $(0,1)$ es abierto; $[0,1]$ no lo es porque ninguna bola centrada en $0$ queda dentro.

## Clausura, interior y frontera
- **Interior** $\mathring{A}$: mayor abierto contenido en $A$.
- **Clausura** $\bar{A}$: menor cerrado que contiene a $A$.
- **Frontera** $\partial A = \bar{A} \setminus \mathring{A}$: puntos pegados a $A$ y a su complemento.

$A$ es cerrado si y solo si $\bar{A} = A$; es abierto si y solo si $\mathring{A} = A$. Un punto está en la clausura si toda bola suya corta a $A$.

**Ejemplo.** En $\mathbb{R}$, para $A = (0,1] \cup \{3\}$: interior $(0,1)$, clausura $[0,1] \cup \{3\}$, frontera $\{0, 1, 3\}$.

## Sucesiones de Cauchy y completitud
Una sucesión es de **Cauchy** si sus términos se acercan entre sí:
$$\forall \varepsilon > 0 \; \exists N : m, n > N \Rightarrow d(x_m, x_n) < \varepsilon$$

Toda sucesión convergente es de Cauchy. El recíproco define **completitud**: un espacio es **completo** si toda sucesión de Cauchy converge dentro de él.

**Ejemplos:**
- $\mathbb{R}$ y $\mathbb{R}^n$ son completos.
- $\mathbb{Q}$ no es completo: la sucesión de truncamientos de $\sqrt{2}$ es de Cauchy pero no converge en $\mathbb{Q}$.
- Las funciones continuas en $[a,b]$ con la métrica del supremo forman un espacio completo.

## Compacidad
Un espacio es **compacto** si toda cubierta por abiertos tiene una subcubierta finita. Equivalentemente (en espacios métricos): toda sucesión tiene una subsucesión convergente.

**Teoremas clave:**
- **Heine-Borel:** en $\mathbb{R}^n$, compacto $\iff$ cerrado y acotado.
- En un compacto, toda función continua alcanza máximo y mínimo.
- Un subconjunto de un espacio métrico completo es compacto si y solo si es cerrado y totalmente acotado.

**Ejemplo.** $[0,1]$ es compacto; $(0,1)$ y $\mathbb{R}$ no lo son. La sucesión $x_n = 1/n$ en $(0,1)$ no tiene subsucesión con límite dentro.

## Continuidad en espacios métricos
$f: X \to Y$ es **continua en $x_0$** si:
$$\forall \varepsilon > 0 \; \exists \delta > 0 : d_X(x, x_0) < \delta \Rightarrow d_Y(f(x), f(x_0)) < \varepsilon$$

**Caracterizaciones equivalentes:**
- La preimagen de todo abierto es abierta.
- $x_n \to x_0 \Rightarrow f(x_n) \to f(x_0)$.
- La preimagen de todo cerrado es cerrada.

**Continuidad uniforme:** el $\delta$ no depende del punto. Toda función continua en un compacto es uniformemente continua (Heine-Cantor).

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, métrica).** Verifica la desigualdad triangular para $d_1$ en $\mathbb{R}^2$.
- $|x_1 - z_1| \leq |x_1 - y_1| + |y_1 - z_1|$ y análogo en la segunda coordenada.
- Sumando: $d_1(x,z) \leq d_1(x,y) + d_1(y,z)$. $\blacksquare$

**Ejemplo 2 (práctica, abierto).** Demuestra que $(0, 1)$ es abierto en $\mathbb{R}$.
- Sea $x \in (0,1)$ y $r = \min(x, 1-x) > 0$.
- $B(x, r) = (x - r, x + r) \subseteq (0,1)$. Como $x$ era arbitrario, es abierto. $\blacksquare$

**Ejemplo 3 (práctica, Cauchy).** ¿Es de Cauchy $x_n = (-1)^n$ en $\mathbb{R}$?
- $d(x_{2n}, x_{2n+1}) = 2$ para todo $n$.
- No es de Cauchy (y no converge): oscila para siempre.

**Ejemplo 4 (aplicación, completitud).** ¿Es completo el intervalo $(0,1]$ con la métrica usual?
- $x_n = 1/n$ es de Cauchy en $(0,1]$.
- Su límite $0$ no está en el conjunto: **no es completo**.

**Ejemplo 5 (aplicación, compacidad).** Halla el máximo de $f(x) = x^2 - 3x + 1$ en $[0, 2]$.
- $[0,2]$ es compacto: el máximo existe.
- $f(0) = 1$, $f(2) = -1$; el vértice $x = 3/2$ da $f = -1.25$.
- Máximo: $1$ en $x = 0$; por compacidad, garantizado.

**Ejemplo 6 (práctica, continuidad uniforme).** ¿Es $f(x) = x^2$ uniformemente continua en $[0, 2]$?
- Sí: $[0,2]$ es compacto y $f$ es continua (Heine-Cantor).
- En $\mathbb{R}$ sí deja de serlo: $x_n = n$ requiere $\delta$ creciente.

## Contextos donde se aplica
- **Análisis:** base del análisis real, funcional y de las ecuaciones diferenciales.
- **Machine learning:** las métricas definen similitud y convergencia de algoritmos.
- **Optimización:** compacidad garantiza existencia de óptimos.
- **Topología:** generaliza el espacio sin métrica, solo con abiertos.
- **Computación:** convergencia de métodos iterativos y teoría de códigos.

## Errores comunes y cómo evitarlos
- **Confundir "cerrado" con "no abierto".** Un conjunto puede ser ambos o ninguno.
- **Creer que toda sucesión acotada converge.** Solo en compactos se extrae subsucesión convergente.
- **Suponer completitud automática.** Hay que verificarla: $\mathbb{Q}$ no es completo.
- **Aplicar Heine-Borel fuera de $\mathbb{R}^n$.** En dimensión infinita no vale.
- **Olvidar el radio en el punto.** Para verificar abierto, el $r$ puede depender del punto.

## Ejercicios propuestos
1. Demuestra que la métrica discreta cumple los tres axiomas.
2. Halla el interior y la frontera de $\mathbb{Q}$ en $\mathbb{R}$.
3. ¿Es de Cauchy la sucesión $x_n = 1 + 1/2 + \cdots + 1/n$? (relaciona con la armónica).
4. Demuestra que $[0,1]$ es cerrado.
5. ¿Es $f(x) = 1/x$ uniformemente continua en $(0,1]$?
6. En $C[0,1]$ con la métrica del supremo, ¿converge $f_n(x) = x^n$?
7. Demuestra que la clausura de $A$ es cerrada.
8. Halla dos métricas distintas en $\mathbb{R}$ que generen los mismos abiertos.

**Respuestas:** 1) Inmediato por casos. 2) Interior vacío, frontera $\mathbb{R}$. 3) No (diverge: no es de Cauchy). 4) Su complemento $(-\infty,0)\cup(1,\infty)$ es abierto. 5) No: cerca de 0 el $\delta$ se hace arbitrariamente pequeño. 6) No uniformemente: el límite es discontinuo. 7) Intersección de todos los cerrados que contienen a $A$. 8) $|x-y|$ y $\min(1, |x-y|)$.

## Resumen
- Una métrica es distancia con positividad, simetría y desigualdad triangular.
- Los abiertos se construyen con bolas; clausura e interior describen la cercanía.
- Cauchy es "acercarse entre sí"; completo es que siempre haya límite dentro.
- Compacto: cubierta finita y subsucesión convergente; Heine-Borel en $\mathbb{R}^n$.
- La continuidad se caracteriza con preimágenes de abiertos y con sucesiones; en compactos se vuelve uniforme.
`,

  "analisis-real": String.raw`
## Los reales y el axioma del supremo
El análisis real es el estudio riguroso de los números reales y las funciones de variable real. Su cimiento es el **axioma del supremo**:

> Todo subconjunto no vacío de $\mathbb{R}$ acotado superiormente tiene una **menor cota superior** (supremo).

Esta propiedad distingue $\mathbb{R}$ de $\mathbb{Q}$ y es la razón de que los límites existan donde deben. Con ella se demuestran la densidad, la convergencia monótona y el teorema del valor intermedio.

**Ejemplo.** $A = \{x \in \mathbb{Q} : x^2 < 2\}$ tiene supremo $\sqrt{2}$ en $\mathbb{R}$, pero no en $\mathbb{Q}$.

## Sucesiones y límites
Una sucesión converge a $L$ si:
$$\forall \varepsilon > 0 \; \exists N : n > N \Rightarrow |a_n - L| < \varepsilon$$

**Resultados clave:**
- Toda sucesión convergente es acotada.
- Una sucesión monótona y acotada converge (al supremo o ínfimo).
- **Bolzano-Weierstrass:** toda sucesión acotada tiene una subsucesión convergente.
- **Límite superior e inferior:** $\limsup a_n$ y $\liminf a_n$; la sucesión converge si y solo si ambos coinciden.
- Para sucesiones de Cauchy en $\mathbb{R}$: toda de Cauchy converge (completitud).

**Ejemplo.** $\limsup (-1)^n = 1$, $\liminf (-1)^n = -1$: no converge.

## Series numéricas
La serie $\sum a_n$ converge si la sucesión de sumas parciales $S_N = \sum_{n=1}^N a_n$ converge.

**Criterios:** comparación, razón, raíz, integral, Leibniz (alternantes), Dirichlet y Abel (más finos). **Convergencia absoluta** implica convergencia.

**Resultados notables:**
- $\sum \dfrac{1}{n^p}$ converge si $p > 1$.
- Reordenar una serie condicionalmente convergente puede cambiar su suma (teorema de Riemann).
- Serie armónica: diverge a pesar de que $a_n \to 0$.

**Ejemplo.** $\sum \dfrac{(-1)^{n+1}}{n} = \ln 2$ (condicional).

## Continuidad y continuidad uniforme
$f$ es continua en $c$ con la definición épsilon-delta. **Continuidad uniforme** exige un $\delta$ común para todo el dominio:
$$\forall \varepsilon > 0 \; \exists \delta > 0 : |x - y| < \delta \Rightarrow |f(x) - f(y)| < \varepsilon$$

**Teoremas:**
- **Heine-Cantor:** continua en compacto $\Rightarrow$ uniformemente continua.
- **Valor intermedio:** $f$ continua en $[a,b]$ toma todos los valores entre $f(a)$ y $f(b)$.
- **Valor extremo:** en compacto alcanza máximo y mínimo.

**Ejemplo.** $f(x) = x^2$ no es uniformemente continua en $\mathbb{R}$ pero sí en $[0,10]$: la compacidad es la diferencia.

## Derivación y teoremas del valor medio
$f'(c) = \lim_{h\to 0}\dfrac{f(c+h)-f(c)}{h}$. La derivabilidad implica continuidad, pero no al revés ($|x|$ en $0$).

**Teoremas centrales:**
- **Rolle:** $f(a) = f(b) \Rightarrow$ existe $c$ con $f'(c) = 0$.
- **Valor medio:** existe $c$ con $f'(c) = \dfrac{f(b)-f(a)}{b-a}$.
- **Regla de L'Hôpital** y **Teorema de Taylor** con resto.

**Consecuencias:** $f' > 0$ implica creciente; $f' = 0$ en un intervalo implica constante.

## La integral de Riemann
La integral definida se construye con sumas superiores e inferiores:
$$U(f, P) = \sum M_i \Delta x_i, \qquad L(f, P) = \sum m_i \Delta x_i$$
$f$ es **Riemann-integrable** si el ínfimo de las superiores iguala el supremo de las inferiores.

**Criterio de Lebesgue:** $f$ acotada es Riemann-integrable si y solo si sus discontinuidades forman un conjunto de medida cero.

**Propiedades:** linealidad, aditividad por intervalos, monotonía, teorema fundamental del cálculo.

## Sucesiones de funciones: puntual vs uniforme
**Convergencia puntual:** $f_n(x) \to f(x)$ para cada $x$ fijo.
**Convergencia uniforme:** $\sup_x |f_n(x) - f(x)| \to 0$.

La uniforme es mucho más fuerte y **preserva** continuidad, integrabilidad y (con hipótesis) derivabilidad:
- Si las $f_n$ son continuas y convergen uniformemente, el límite es continuo.
- $\lim \int f_n = \int \lim f_n$ bajo convergencia uniforme.
- La derivada del límite es el límite de las derivadas si estas convergen uniformemente.

**Ejemplo.** $f_n(x) = x^n$ en $[0,1]$ converge puntualmente a $0$ (y a $1$ en $x=1$), pero no uniformemente: el límite es discontinuo.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, supremo).** Halla el supremo de $A = \{1 - 1/n : n \in \mathbb{N}\}$.
- La sucesión crece hacia 1 y nunca lo alcanza.
- $\sup A = 1$, $\max A$ no existe.

**Ejemplo 2 (práctica, límite).** $\lim_{n\to\infty} \dfrac{3n^2 + 2}{4n^2 - n}$.
- Divide entre $n^2$: $\dfrac{3 + 2/n^2}{4 - 1/n} \to \dfrac{3}{4}$.

**Ejemplo 3 (práctica, series).** ¿Converge $\sum \dfrac{n+1}{n^3}$?
- Compara con $1/n^2$: $\dfrac{n+1}{n^3} \sim \dfrac{1}{n^2}$.
- Converge (serie p con p = 2).

**Ejemplo 4 (aplicación, valor intermedio).** Demuestra que $x^3 + x - 1 = 0$ tiene raíz en $(0, 1)$.
- $f(0) = -1 < 0$, $f(1) = 1 > 0$.
- Por el valor intermedio, existe $c \in (0,1)$ con $f(c) = 0$.

**Ejemplo 5 (práctica, valor medio).** Para $f(x) = x^2$ en $[0, 3]$, halla $c$ del valor medio.
- $\dfrac{f(3) - f(0)}{3} = 3 = f'(c) = 2c$.
- $c = 1.5 \in (0,3)$.

**Ejemplo 6 (contraejemplo, convergencia uniforme).** $f_n(x) = \dfrac{x}{n}$ en $\mathbb{R}$.
- Puntual: $f_n(x) \to 0$ para cada $x$.
- Uniforme: $\sup_x |x/n - 0| = \infty$: no converge uniformemente en $\mathbb{R}$.
- En $[0, 10]$ sí: $\sup = 10/n \to 0$.

## Contextos donde se aplica
- **Matemática:** fundamento del cálculo, ecuaciones diferenciales, análisis numérico.
- **Física:** rigor de los límites continuos, mecánica cuántica (espacios de funciones).
- **Probabilidad:** convergencia de variables aleatorias y de distribuciones.
- **Ingeniería:** procesamiento de señales y estabilidad de aproximaciones.
- **Computación:** convergencia de métodos iterativos.

## Errores comunes y cómo evitarlos
- **Suponer que puntual implica uniforme.** $x^n$ en $[0,1]$ es el contraejemplo clásico.
- **Derivar el límite sin hipótesis.** Necesitas convergencia uniforme de las derivadas.
- **Confundir acotada con convergente.** Una sucesión acotada puede oscilar.
- **Aplicar convergencia absoluta donde no la hay.** La condicional es frágil.
- **Olvidar que la continuidad no basta para la derivabilidad.** $|x|$ es continua y no derivable en 0.

## Ejercicios propuestos
1. Demuestra que $\sup(0,1) = 1$ y que no existe máximo.
2. Calcula $\limsup$ y $\liminf$ de $a_n = \dfrac{n}{n+1}\cos(n\pi)$.
3. ¿Converge $\sum \dfrac{1}{n\ln n}$? (criterio integral).
4. Prueba que $f(x) = 3x^5 + 2x - 1$ tiene al menos una raíz.
5. Halla $c$ del valor medio para $f(x) = x^3$ en $[0, 2]$.
6. ¿Converge uniformemente $f_n(x) = \dfrac{1}{n}\cos(nx)$ en $\mathbb{R}$?
7. Demuestra que $f(x) = 1/x$ no es uniformemente continua en $(0, \infty)$.
8. Calcula $\int_0^1 x^2\,dx$ como límite de sumas de Riemann.

**Respuestas:** 1) 1 es cota superior y ninguna menor lo es. 2) $\limsup = 1$, $\liminf = -1$. 3) Diverge ($\int 1/(x\ln x) = \ln\ln x \to \infty$). 4) $f(0) < 0$, $f(1) > 0$. 5) $c = 2/\sqrt{3}$. 6) Sí: $\sup|\cdot| = 1/n \to 0$. 7) Toma $x_n \to 0$: la diferencia se mantiene. 8) $1/3$.

## Resumen
- El axioma del supremo es el cimiento de la completitud de los reales.
- Monótona y acotada converge; Bolzano-Weierstrass extrae subsucesiones convergentes.
- La continuidad uniforme preserva propiedades al pasar al límite; en compactos es automática.
- Rolle y valor medio conectan derivadas con comportamiento global.
- Riemann integra funciones con pocas discontinuidades; la convergencia uniforme preserva límites.
`,

  "analisis-complejo": String.raw`
## Funciones de variable compleja
Una función compleja $f: \mathbb{C} \to \mathbb{C}$ asigna a $z = x + iy$ un valor $f(z)$. Se escribe $f(z) = u(x,y) + iv(x,y)$, con $u$ y $v$ funciones reales.

El límite y la continuidad se definen igual que en $\mathbb{R}$, con $|z - z_0|$ como distancia. La diferencia radical aparece al derivar: hay **muchas más direcciones** de aproximación en $\mathbb{C}$, y eso hace la derivabilidad compleja mucho más restrictiva.

**Ejemplo.** $f(z) = z^2 = (x^2 - y^2) + i(2xy)$: $u = x^2 - y^2$, $v = 2xy$.

## Holomorfía y ecuaciones de Cauchy-Riemann
$f$ es **holomorfa** en $z_0$ si la derivada compleja
$$f'(z_0) = \lim_{h \to 0}\frac{f(z_0 + h) - f(z_0)}{h}$$
existe (h complejo, aproximándose por cualquier dirección).

**Condiciones de Cauchy-Riemann:**
$$u_x = v_y, \qquad u_y = -v_x$$

Si $u$ y $v$ tienen derivadas parciales continuas y cumplen CR, entonces $f$ es holomorfa y
$$f'(z) = u_x + iv_x$$

**Ejemplo.** $f(z) = z^2$: $u_x = 2x = v_y$; $u_y = -2y = -v_x$. Holomorfa en todo $\mathbb{C}$.

**Contraejemplo.** $f(z) = \bar{z}$: $u = x$, $v = -y$; $u_x = 1 \neq v_y = -1$. No es holomorfa en ningún punto.

## Integrales de contorno
La integral de $f$ a lo largo de una curva $\gamma$:
$$\int_\gamma f(z)\,dz = \int_a^b f(\gamma(t))\gamma'(t)\,dt$$

**Propiedades:** linealidad, inversión de signo al recorrer al revés, acotación por longitud por máximo.

**Ejemplo.** $\oint_{|z|=1} z\,dz = 0$ (la función tiene primitiva $z^2/2$). En cambio $\oint_{|z|=1} \dfrac{dz}{z} = 2\pi i$: el resultado mide el número de vueltas.

## Teorema de Cauchy-Goursat y fórmula integral
**Cauchy-Goursat:** si $f$ es holomorfa en un dominio simplemente conexo y $\gamma$ es una curva cerrada dentro de él:
$$\oint_\gamma f(z)\,dz = 0$$

**Fórmula integral de Cauchy:** para $z_0$ dentro de $\gamma$:
$$f(z_0) = \frac{1}{2\pi i}\oint_\gamma \frac{f(z)}{z - z_0}\,dz$$

Consecuencia poderosa: una función holomorfa queda determinada por sus valores en la frontera. Además, es **infinitamente derivable** (mucho más que en análisis real):
$$f^{(n)}(z_0) = \frac{n!}{2\pi i}\oint_\gamma \frac{f(z)}{(z-z_0)^{n+1}}\,dz$$

## Series de Taylor y Laurent
Toda función holomorfa se desarrolla en **serie de Taylor** alrededor de $z_0$:
$$f(z) = \sum_{n=0}^{\infty} a_n (z - z_0)^n, \qquad a_n = \frac{f^{(n)}(z_0)}{n!}$$

En **anillos** alrededor de singularidades, se usa la **serie de Laurent**, con potencias negativas:
$$f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n$$

El coeficiente $c_{-1}$ es el **residuo**, y es la clave para calcular integrales.

**Ejemplo.** $e^z = \sum z^n/n!$ converge en todo $\mathbb{C}$. La serie de $1/z$ alrededor de 0 es su propio Laurent con $c_{-1} = 1$.

## Singularidades y residuos
- **Evitable:** el límite existe (como $\frac{\text{sen}\,z}{z}$ en 0).
- **Polo de orden $m$:** la función crece como $(z-z_0)^{-m}$.
- **Esencial:** infinitos términos negativos (como $e^{1/z}$ en 0).

**Teorema de los residuos:**
$$\oint_\gamma f(z)\,dz = 2\pi i \sum \text{Res}(f, z_k)$$
la suma de residuos en las singularidades dentro de $\gamma$.

**Cálculo de residuos:** polo simple: $\text{Res} = \lim_{z\to z_0}(z - z_0)f(z)$. Polo de orden $m$: fórmula con derivadas.

## Aplicaciones al cálculo real
Las integrales reales difíciles se resuelven con residuos:
$$\int_{-\infty}^{\infty} \frac{dx}{1 + x^2} = \pi$$

Método:
1. Extiende al plano complejo y elige un contorno (semicírculo grande).
2. Identifica polos en el semiplano superior.
3. Usa residuos; el arco aporta cero si $f \to 0$ suficientemente rápido.

**Ejemplo.** $\int_{-\infty}^{\infty}\dfrac{dx}{1+x^2}$: polo en $z = i$, residuo $\dfrac{1}{2i}$; integral $= 2\pi i \cdot \dfrac{1}{2i} = \pi$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, CR).** ¿Es holomorfa $f(z) = x^2 - y^2 + 2xyi$?
- $u_x = 2x$, $v_y = 2x$: coincide.
- $u_y = -2y$, $-v_x = -2y$: coincide.
- Es holomorfa (de hecho, $f = z^2$).

**Ejemplo 2 (práctica, integral).** $\oint_{|z|=2}\dfrac{dz}{z - 1}$.
- Polo simple en $z = 1$ dentro del contorno.
- Residuo $1$; integral $= 2\pi i$.

**Ejemplo 3 (aplicación, residuos).** Calcula $\int_{-\infty}^{\infty}\dfrac{dx}{x^2 + 4}$.
- Polos en $\pm 2i$; tomamos $z = 2i$: residuo $\dfrac{1}{2z}\big|_{2i} = \dfrac{1}{4i}$.
- Integral $= 2\pi i \cdot \dfrac{1}{4i} = \dfrac{\pi}{2}$.

**Ejemplo 4 (aplicación, integral trigonométrica).** $\int_0^{2\pi}\dfrac{d\theta}{2 + \cos\theta}$.
- Sustituye $z = e^{i\theta}$; queda una integral de contorno.
- Resultado: $\dfrac{2\pi}{\sqrt{3}}$.

**Ejemplo 5 (práctica, serie).** Desarrolla $\dfrac{1}{1-z}$ alrededor de 0.
- Serie geométrica: $\sum z^n$ para $|z| < 1$.
- El radio de convergencia es 1 (polo en $z = 1$).

**Ejemplo 6 (aplicación, Liouville).** ¿Puede existir una función holomorfa y acotada en todo $\mathbb{C}$ que no sea constante?
- No: **teorema de Liouville**.
- Toda función entera y acotada es constante; consecuencia: el teorema fundamental del álgebra.

## Contextos donde se aplica
- **Ingeniería:** análisis de circuitos, transformadas, control (variable $s$).
- **Física:** mecánica cuántica, teoría de campos, fluidos (potencial complejo).
- **Matemática:** teoría de números (función zeta), ecuaciones diferenciales, geometría.
- **Procesamiento de señales:** transformada $z$ y Fourier compleja.
- **Criptografía y álgebra:** curvas elípticas sobre $\mathbb{C}$.

## Errores comunes y cómo evitarlos
- **Confundir holomorfa con tener parciales.** Hacen falta Cauchy-Riemann y continuidad de las parciales.
- **Derivar $\bar{z}$ como constante.** $\bar{z}$ no es holomorfa.
- **Olvidar qué polos están dentro del contorno.** Solo cuentan los interiores.
- **Calcular mal el orden de un polo.** En $\dfrac{1}{(z-1)^3}$ el orden es 3.
- **Aplicar residuos sin verificar el decaimiento en el arco.** El arco debe aportar cero.

## Ejercicios propuestos
1. Verifica Cauchy-Riemann para $f(z) = e^z$.
2. ¿Es holomorfa $f(z) = |z|^2$? ¿Dónde?
3. Calcula $\oint_{|z|=1}\dfrac{dz}{z^2}$.
4. Halla el residuo de $\dfrac{e^z}{z}$ en 0.
5. Calcula $\int_{-\infty}^{\infty}\dfrac{dx}{(x^2+1)(x^2+4)}$.
6. Desarrolla $\dfrac{1}{z-2}$ en serie alrededor de 0 e indica el radio.
7. Evalúa $\oint_{|z|=3}\dfrac{dz}{(z-1)(z-2)}$.
8. ¿Qué dice Liouville sobre funciones enteras acotadas?

**Respuestas:** 1) $e^z = e^x(\cos y + i\,\text{sen}\,y)$; CR se cumplen. 2) Solo en $z = 0$ (no holomorfa en ningún abierto). 3) $0$ (no encierra polos en el origen... cuidado: el polo está en 0, dentro; el residuo de $1/z^2$ es 0). 4) $1$. 5) $\pi/6$. 6) $-\frac{1}{2}\sum (z/2)^n$, radio 2. 7) Polos simples en $z = 1$ y $z = 2$, ambos dentro del contorno. Residuos: $-1$ y $1$; la suma es $0$: la integral vale $0$. 8) Debe ser constante.

## Resumen
- La holomorfía es derivabilidad compleja y equivale a Cauchy-Riemann con parciales continuas.
- Cauchy-Goursat anula integrales cerradas; la fórmula integral expresa $f$ desde la frontera.
- Taylor y Laurent desarrollan funciones; el residuo es el coeficiente clave.
- El teorema de los residuos convierte integrales reales difíciles en sumas de residuos.
- Liouville y el principio del máximo muestran la rigidez de las funciones holomorfas.
`,

  "medida": String.raw`
## Por qué hace falta una nueva integral
La integral de Riemann falla en muchos casos: funciones muy discontinuas, límites de funciones, conjuntos patológicos. La **integral de Lebesgue** resuelve esto cambiando la estrategia: en lugar de partir el eje $x$, parte el eje $y$ y mide cuánto del dominio cae en cada nivel.

Resultado: se pueden integrar más funciones, y los teoremas de convergencia permiten intercambiar límite e integral con hipótesis más débiles. Por ejemplo, la función que vale 1 en los racionales y 0 en los irracionales no es Riemann-integrable, pero es Lebesgue-integrable con integral 0.

## Sigma-álgebras y medidas
Una **sigma-álgebra** $\mathcal{A}$ sobre $X$ es una familia de subconjuntos que contiene a $X$, es cerrada bajo complemento y bajo uniones numerables. Sus elementos son los **conjuntos medibles**.

Una **medida** es una función $\mu: \mathcal{A} \to [0, \infty]$ con:
1. $\mu(\emptyset) = 0$.
2. **Aditividad numerable:** para conjuntos disjuntos dos a dos, $\mu\left(\bigcup A_n\right) = \sum \mu(A_n)$.

**Propiedades:** monotonía ($A \subseteq B \Rightarrow \mu(A) \leq \mu(B)$), continuidad desde abajo/arriba, y $\mu(A \setminus B) = \mu(A) - \mu(B)$ si $B \subseteq A$ y $\mu(B) < \infty$.

**Ejemplos:** medida de conteo, medida de Dirac, medida de Lebesgue, medidas de probabilidad.

## La medida de Lebesgue
En $\mathbb{R}$, la medida de Lebesgue $\lambda$ generaliza la longitud:
- $\lambda([a, b]) = b - a$; $\lambda((a,b)) = b - a$.
- $\lambda(\mathbb{Q}) = 0$, $\lambda(\mathbb{R} \setminus \mathbb{Q}) = \infty$.
- Es invariante por traslación: $\lambda(A + t) = \lambda(A)$.

**Conjuntos de medida cero:** despreciables. Una propiedad que falla solo en un conjunto de medida cero vale **en casi todo punto** (c.t.p.).

**Conjunto de Cantor:** no numerable pero de medida cero: muestra que "pequeño" y "pocos" son conceptos distintos.

**Existencia de no medibles:** con el axioma de elección se construye el conjunto de Vitali, no medible. Por eso la sigma-álgebra debe restringirse.

## Funciones medibles
$f: X \to \mathbb{R}$ es **medible** si la preimagen de todo abierto (o de todo intervalo) es medible:
$$f^{-1}((a, \infty)) \in \mathcal{A} \quad \forall a$$

**Propiedades:** sumas, productos, supremos, límites y composiciones de funciones medibles son medibles (con cuidado en la composición).

**Ejemplo.** Toda función continua es medible (las preimágenes de abiertos son abiertas). Las funciones monótonas también lo son.

## La integral de Lebesgue
Se construye en etapas:
1. **Funciones simples:** $\phi = \sum c_i \chi_{A_i}$; su integral es $\int \phi = \sum c_i \mu(A_i)$.
2. **Funciones no negativas:** $\int f = \sup\left\{\int \phi : 0 \leq \phi \leq f, \phi \text{ simple}\right\}$.
3. **Funciones generales:** $f = f^+ - f^-$; integrable si ambas partes tienen integral finita.

**Notación:** $f \in L^1(\mu)$ si $\int |f|\,d\mu < \infty$.

**Comparación:** toda función Riemann-integrable es Lebesgue-integrable con el mismo valor; el recíproco es falso.

**Ejemplo.** La función de Dirichlet $\chi_\mathbb{Q}$: $\int \chi_\mathbb{Q}\,d\lambda = 0$ porque $\lambda(\mathbb{Q}) = 0$.

## Teoremas de convergencia
Los tres resultados que hacen poderosa a la integral:

**Convergencia monótona (Levi):** si $0 \leq f_n \uparrow f$, entonces
$$\lim_{n\to\infty}\int f_n = \int f$$

**Lema de Fatou:** si $f_n \geq 0$, entonces
$$\int \liminf f_n \leq \liminf \int f_n$$

**Convergencia dominada (Lebesgue):** si $f_n \to f$ c.t.p. y $|f_n| \leq g$ con $g \in L^1$, entonces
$$\lim \int f_n = \int f$$

Estos teoremas permiten intercambiar límite e integral sin continuidad ni convergencia uniforme.

## Espacios Lp
Para $1 \leq p < \infty$:
$$\|f\|_p = \left(\int |f|^p\,d\mu\right)^{1/p}, \qquad L^p = \{f : \|f\|_p < \infty\}$$

**Desigualdades clave:**
- **Hölder:** $\|fg\|_1 \leq \|f\|_p \|g\|_q$ con $\frac{1}{p} + \frac{1}{q} = 1$.
- **Minkowski:** $\|f + g\|_p \leq \|f\|_p + \|g\|_p$ (desigualdad triangular).

**Completitud:** los $L^p$ son espacios de Banach (se identifican funciones iguales c.t.p.). $L^2$ es además un espacio de Hilbert con producto interno $\langle f, g\rangle = \int f\bar{g}$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, medida cero).** Demuestra que $\mathbb{Q} \cap [0,1]$ tiene medida cero.
- Enumera los racionales $q_1, q_2, \ldots$
- Cubre cada $q_n$ con un intervalo de longitud $\varepsilon/2^n$.
- Longitud total: $\sum \varepsilon/2^n = \varepsilon$; como $\varepsilon$ es arbitrario, la medida es 0.

**Ejemplo 2 (práctica, medible).** ¿Es medible $f(x) = 1/x$ en $(0, 1)$?
- Es continua en $(0,1)$.
- Las funciones continuas son medibles. Sí.

**Ejemplo 3 (aplicación, convergencia dominada).** Calcula $\lim_{n\to\infty}\int_0^1 \dfrac{nx}{1 + n^2x^2}\,dx$.
- Puntualmente $f_n \to 0$ para $x > 0$.
- ¿Dominada? $|f_n| \leq 1/2$ (máximo en $nx=1$) no integrable... sí, constante 1/2 es integrable en $[0,1]$; de hecho $\int f_n = \dfrac{\ln(1+n^2)}{2n} \to 0$.
- Límite: 0, coherente con convergencia dominada.

**Ejemplo 4 (aplicación, monótona).** $\lim_{n\to\infty}\int_0^1 \left(1 + \dfrac{x}{n}\right)^n dx$.
- $f_n \uparrow e^x$; monótona permite intercambiar.
- Límite: $\int_0^1 e^x\,dx = e - 1$.

**Ejemplo 5 (práctica, Lp).** ¿Pertenece $f(x) = 1/\sqrt{x}$ a $L^1(0,1)$?
- $\int_0^1 x^{-1/2}\,dx = 2 < \infty$. Sí.
- ¿Y $1/x$? $\int_0^1 x^{-1}\,dx = \infty$. No.

**Ejemplo 6 (práctica, Fatou).** Da un ejemplo donde Fatou es estricta.
- $f_n = n\chi_{(0, 1/n)}$: $f_n \to 0$ pero $\int f_n = 1$.
- $\int \liminf f_n = 0 < \liminf \int f_n = 1$: sin dominación, el límite no se conserva.

## Contextos donde se aplica
- **Probabilidad:** la probabilidad es una medida; la esperanza, una integral de Lebesgue.
- **Análisis funcional:** los espacios $L^p$ son el escenario de operadores y ecuaciones.
- **Física:** mecánica cuántica (funciones de onda en $L^2$), mecánica estadística.
- **Teoría de señales:** energía y potencia de señales.
- **Economía:** integración en espacios de medidas, teoría de decisiones.

## Errores comunes y cómo evitarlos
- **Intercambiar límite e integral sin teorema.** Fatou y dominada tienen hipótesis; verifícalas.
- **Confundir medida cero con conjunto vacío.** El conjunto de Cantor es no numerable y de medida cero.
- **Suponer que toda función es medible.** Requiere comprobación; con elección hay patologías.
- **Olvidar "c.t.p." en los enunciados.** Las convergencias valen salvo conjuntos despreciables.
- **Confundir $L^1$ con integrabilidad puntual.** La integral de $|f|$ debe ser finita.

## Ejercicios propuestos
1. Demuestra que un conjunto numerable tiene medida cero.
2. ¿Es medible la función característica de $\mathbb{Q}$?
3. Calcula $\lim \int_0^1 \dfrac{x^n}{1+x}\,dx$ con convergencia dominada.
4. ¿Está $f(x) = \ln x$ en $L^1(0,1)$?
5. Verifica Hölder para $f = x$, $g = 1$ en $[0,1]$ con $p = q = 2$.
6. Da un ejemplo de $f_n \to 0$ con $\int f_n \to 1$.
7. ¿Es completo $L^1(0,1)$?
8. Calcula la medida del conjunto de Cantor (indica el resultado).

**Respuestas:** 1) Cuberta con intervalos de longitud $\varepsilon/2^n$. 2) Sí (es 0 c.t.p.). 3) $0$ por dominada con $g = 1$. 4) Sí: $\int_0^1 |\ln x|\,dx = 1$. 5) $\|fg\|_1 = 1/2 \leq \|f\|_2\|g\|_2 = \sqrt{1/3} \approx 0.577$. 6) $f_n = n\chi_{(0,1/n)}$. 7) Sí (Riesz-Fischer). 8) Cero.

## Resumen
- La integral de Lebesgue mide por niveles y extiende la de Riemann.
- Sigma-álgebras y medidas formalizan el tamaño; los conjuntos de medida cero son despreciables.
- Los teoremas de convergencia (monótona, Fatou, dominada) permiten intercambiar límite e integral.
- Los espacios $L^p$ son completos y $L^2$ es de Hilbert.
- La probabilidad es medida y la esperanza es integral: la teoría es el lenguaje de la estadística moderna.
`,

  "analisis-funcional": String.raw`
## Espacios normados
Un **espacio normado** es un espacio vectorial con una norma $\|\cdot\|$ que mide longitud:
1. $\|x\| \geq 0$ y $\|x\| = 0 \iff x = 0$.
2. $\|\alpha x\| = |\alpha|\|x\|$.
3. $\|x + y\| \leq \|x\| + \|y\|$.

Toda norma induce una métrica $d(x, y) = \|x - y\|$. Los ejemplos centrales son $\mathbb{R}^n$, $\ell^p$ (sucesiones) y $L^p$ (funciones).

**Dimensión finita vs infinita:** en dimensión finita todas las normas son equivalentes; en dimensión infinita, no. Ese es el corazón del análisis funcional.

## Espacios de Banach y de Hilbert
- **Banach:** espacio normado **completo** (toda sucesión de Cauchy converge). Ejemplos: $\mathbb{R}^n$, $\ell^p$, $L^p$, $C[a,b]$ con el supremo.
- **Hilbert:** espacio con **producto interno** completo. Ejemplos: $\mathbb{R}^n$ con producto punto, $\ell^2$, $L^2$.

El producto interno permite definir ángulos y ortogonalidad: $\langle x, y \rangle$, con $\|x\| = \sqrt{\langle x, x\rangle}$.

**Ejemplo.** $L^2[0,1]$ con $\langle f, g \rangle = \int_0^1 f\bar{g}$ es el ejemplo prototípico de Hilbert en dimensión infinita.

## Ortogonalidad y proyecciones
En un espacio de Hilbert:
- $x \perp y$ si $\langle x, y \rangle = 0$.
- **Teorema de la proyección:** para un subespacio cerrado $M$ y $x$, existe un único $m \in M$ con $\|x - m\|$ mínima; $x - m$ es perpendicular a $M$.
- **Descomposición ortogonal:** $H = M \oplus M^\perp$.
- **Bases ortonormales:** todo elemento se escribe $x = \sum \langle x, e_n\rangle e_n$; se cumple la **identidad de Parseval** $\|x\|^2 = \sum |\langle x, e_n\rangle|^2$.

**Ejemplo.** En $L^2[0, 2\pi]$, el sistema $\{1, \cos nx, \text{sen}\,nx\}$ es una base ortogonal: la serie de Fourier es la proyección sobre ella.

## Operadores lineales acotados
Un operador lineal $T: X \to Y$ es **acotado** si existe $C$ con $\|Tx\| \leq C\|x\|$ para todo $x$. La **norma** del operador:
$$\|T\| = \sup_{\|x\| \leq 1}\|Tx\|$$

**Equivalencias:** acotado $\iff$ continuo $\iff$ continuo en 0. En dimensión finita, todo operador lineal es acotado; en dimensión infinita, no (por ejemplo, la derivada no es acotada en $C^1$).

**Ejemplos:**
- Operador multiplicación: $(Tf)(x) = g(x)f(x)$ con $g$ acotada; $\|T\| = \|g\|_\infty$.
- Operador integral: $(Tf)(x) = \int_0^1 K(x,y)f(y)\,dy$ con $K$ continua; es acotado.

## Los grandes teoremas: Hahn-Banach
**Hahn-Banach:** todo funcional lineal continuo definido en un subespacio se puede extender al espacio completo **sin aumentar la norma**.

**Consecuencias:**
- Hay suficientes funcionales para separar puntos ($x \neq y \Rightarrow$ existe $f$ con $f(x)\neq f(y)$).
- En dimensión infinita, el dual es rico y se usa para dualidad.

**Forma geométrica:** separación de conjuntos convexos por hiperplanos. Es la base de la teoría de dualidad en optimización.

## Principio de acotación uniforme y aplicación abierta
**Banach-Steinhaus:** si una familia de operadores acotados es puntualmente acotada, entonces está uniformemente acotada. Es sorprendente: el control punto a punto implica control global.

**Teorema de la aplicación abierta:** todo operador lineal, acotado y sobreyectivo entre Banach es abierto (envía abiertos a abiertos).

**Teorema de la gráfica cerrada:** si la gráfica de $T$ es cerrada, entonces $T$ es continuo (bajo hipótesis de Banach). Son las tres joyas junto con Hahn-Banach.

## Espectro de un operador
El **espectro** de $T$ generaliza los valores propios:
$$\sigma(T) = \{\lambda \in \mathbb{C} : T - \lambda I \text{ no es invertible}\}$$

**Partes:** espectro puntual (valores propios), continuo y residual. El **radio espectral** cumple $r(T) \leq \|T\|$ y $r(T) = \lim \|T^n\|^{1/n}$.

**Operadores autoadjuntos** ($T = T^*$): su espectro es real y sus vectores propios forman base ortonormal (teorema espectral). Son el análogo infinito de las matrices simétricas y el modelo de los observables cuánticos.

**Ejemplo.** El operador multiplicación por $x$ en $L^2[0,1]$, $(Tf)(x) = xf(x)$, tiene espectro continuo $[0,1]$ y ningún valor propio.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, norma).** Calcula la norma del funcional $f(x) = 3x_1 - 4x_2$ en $\mathbb{R}^2$.
- $\|f\| = \sqrt{9 + 16} = 5$ (norma euclidiana del vector de coeficientes).
- Se alcanza con $x = (3/5, -4/5)$.

**Ejemplo 2 (práctica, ortogonalidad).** En $L^2[-1, 1]$, ¿son ortogonales $1$ y $x$?
- $\langle 1, x \rangle = \int_{-1}^{1} x\,dx = 0$.
- Sí, el sistema $\{1, x, x^2 - 1/3, \ldots\}$ (Legendre) es ortogonal.

**Ejemplo 3 (aplicación, proyección).** Proyecta $f(x) = x$ sobre el subespacio de constantes en $L^2[0,1]$.
- La constante óptima es el promedio: $c = \int_0^1 x\,dx = 1/2$.
- $\|x - 1/2\|_2^2 = 1/12$: error mínimo.

**Ejemplo 4 (aplicación, Fourier).** Interpreta la serie de Fourier como proyección.
- La base ortonormal es $\{e^{inx}/\sqrt{2\pi}\}$.
- Los coeficientes son las proyecciones; Parseval dice que la energía se conserva.

**Ejemplo 5 (práctica, operador).** Norma del operador $(Tf)(x) = \int_0^x f(t)\,dt$ en $C[0,1]$.
- $|Tf(x)| \leq \|f\|_\infty x \leq \|f\|_\infty$.
- $\|T\| = 1$ (alcanzada con $f \equiv 1$).

**Ejemplo 6 (práctica, espectro).** Espectro de la matriz $\begin{pmatrix} 2 & 0 \\ 0 & 3\end{pmatrix}$.
- Valores propios $2$ y $3$: espectro puntual $\{2, 3\}$.
- El radio espectral es 3.

## Contextos donde se aplica
- **Física cuántica:** estados en Hilbert, observables autoadjuntos, espectro como niveles de energía.
- **Ecuaciones diferenciales:** formulación débil, operadores integrales, teoría espectral.
- **Optimización y control:** dualidad, operadores de control, estabilidad.
- **Machine learning:** espacios de funciones, kernels (teorema de representación), regularización.
- **Teoría de señales:** operadores de convolución, filtros, análisis de Fourier.

## Errores comunes y cómo evitarlos
- **Suponer que acotado significa "imagen acotada".** Significa que la norma de salida está controlada.
- **Usar resultados de dimensión finita en dimensión infinita.** Los conjuntos cerrados y acotados no son compactos.
- **Confundir espectro con valores propios.** El espectro puede ser continuo.
- **Aplicar Hahn-Banach sin espacio vectorial.** Es un teorema de espacios normados.
- **Olvidar la completitud.** Banach-Steinhaus y aplicación abierta la requieren.

## Ejercicios propuestos
1. Demuestra que $\|\cdot\|_1$ y $\|\cdot\|_2$ son equivalentes en $\mathbb{R}^2$.
2. ¿Es completo $C[0,1]$ con la norma $\|\cdot\|_1$?
3. Proyecta $f(x) = x^2$ sobre constantes en $L^2[0,1]$.
4. Halla la norma del funcional $f(x) = \int_0^1 x(t)\,dt$ en $C[0,1]$.
5. Demuestra que la sucesión $e_n$ (base canónica) no tiene subsucesión convergente en $\ell^2$.
6. Espectro del operador $(Tf)(x) = xf(x)$ en $L^2[0,1]$.
7. ¿Son ortogonales $e^{inx}$ y $e^{imx}$ con $n \neq m$ en $L^2[0,2\pi]$?
8. ¿Por qué $L^2$ es Hilbert y $L^1$ no?

**Respuestas:** 1) $\|x\|_2 \leq \|x\|_1 \leq \sqrt{2}\|x\|_2$. 2) No (no es completo). 3) $c = 1/3$. 4) $\|f\| = 1$. 5) $\|e_n - e_m\| = \sqrt{2}$. 6) $[0,1]$, sin valores propios. 7) Sí, salvo $n = m$. 8) $L^2$ tiene producto interno; $L^1$ no admite uno compatible.

## Resumen
- Espacios normados, Banach (completos) y Hilbert (con producto interno) son los escenarios del análisis funcional.
- La proyección ortogonal generaliza la mejor aproximación; Parseval expresa la energía.
- Los operadores acotados son continuos; Hahn-Banach, Banach-Steinhaus, aplicación abierta y gráfica cerrada son los pilares.
- El espectro generaliza los valores propios; los autoadjuntos tienen teoría espectral completa.
- La mecánica cuántica y las ecuaciones diferenciales modernas viven aquí.
`,

  "analisis-armonico": String.raw`
## Series de Fourier
Una función **periódica** de periodo $2\pi$ se descompone en senos y cosenos:
$$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos nx + b_n\,\text{sen}\,nx\right)$$

Los coeficientes miden la contribución de cada frecuencia:
$$a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos nx\,dx, \qquad b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\,\text{sen}\,nx\,dx$$

La descomposición convierte una función en su **espectro**: la lista de amplitudes por frecuencia. Es la herramienta fundamental del procesamiento de señales.

**Ejemplo.** La onda cuadrada $f(x) = 1$ si $0 < x < \pi$, $-1$ si $-\pi < x < 0$, tiene $a_n = 0$ y $b_n = \frac{4}{n\pi}$ para $n$ impar: solo armónicos impares.

## Convergencia y fenómeno de Gibbs
**Condiciones de Dirichlet:** si $f$ es periódica, acotada y tiene finitas discontinuidades (con derivadas laterales), su serie de Fourier converge a $f$ en los puntos de continuidad y al **promedio de los saltos** en las discontinuidades.

**Convergencia uniforme:** si $f$ es continua, periódica y su derivada es integrable al cuadrado, la serie converge uniformemente.

**Fenómeno de Gibbs:** cerca de un salto, las sumas parciales oscilan y sobrepasan el valor de la función en un $9\%$ del salto, sin desaparecer al añadir términos. Es inevitable en discontinuidades.

## Transformada de Fourier
Para funciones no periódicas, la suma se convierte en integral:
$$\hat{f}(\omega) = \int_{-\infty}^{\infty} f(t)e^{-i\omega t}\,dt$$
$$f(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty} \hat{f}(\omega)e^{i\omega t}\,d\omega$$

$\hat{f}$ es el **espectro continuo** de frecuencias. Condición de existencia: $f \in L^1$ (y luego se extiende a $L^2$ por Plancherel).

**Ejemplo.** La transformada de la gaussiana es otra gaussiana: $e^{-t^2/2} \leftrightarrow \sqrt{2\pi}e^{-\omega^2/2}$. Es la función que mejor equilibra tiempo y frecuencia.

## Propiedades y convolución
- **Linealidad:** $\widehat{af + bg} = a\hat{f} + b\hat{g}$.
- **Traslación:** $\widehat{f(t - t_0)} = e^{-i\omega t_0}\hat{f}(\omega)$.
- **Modulación:** multiplicar por $e^{i\omega_0 t}$ traslada el espectro.
- **Escala:** $\widehat{f(at)} = \frac{1}{|a|}\hat{f}(\omega/a)$.
- **Derivada:** $\widehat{f'} = i\omega\hat{f}$: derivar multiplica por frecuencia.
- **Convolución:** $\widehat{f * g} = \hat{f}\cdot\hat{g}$, donde $(f*g)(t) = \int f(t-s)g(s)\,ds$.

El teorema de convolución es la razón de que los filtros actúen como multiplicaciones en frecuencia.

## DFT y FFT
La **transformada discreta de Fourier (DFT)** trabaja con $N$ muestras:
$$X_k = \sum_{n=0}^{N-1} x_n e^{-2\pi i kn/N}$$

La **FFT** (transformada rápida) la calcula en $O(N\log N)$ en lugar de $O(N^2)$: la diferencia entre un segundo y horas para datos grandes. Es uno de los algoritmos más importantes de la historia.

**Uso:** audio, imagen, telecomunicaciones, radar, compresión (MP3, JPEG).

## Wavelets: análisis multirresolución
Las wavelets localizan en **tiempo y frecuencia** a la vez: una familia de funciones desplazadas y escaladas:
$$\psi_{j,k}(t) = 2^{j/2}\psi(2^j t - k)$$

**Diferencia con Fourier:** Fourier dice "qué frecuencias hay"; las wavelets dicen "qué frecuencias, y cuándo". Ideales para señales no estacionarias: sismos, latidos, imágenes.

**Aplicación:** JPEG 2000, detección de bordes, eliminación de ruido.

## Principio de incertidumbre
No se puede localizar simultáneamente en tiempo y frecuencia con precisión arbitraria:
$$\Delta t \cdot \Delta \omega \geq \frac{1}{2}$$

Formalización del principio de Heisenberg en mecánica cuántica. La gaussiana alcanza la igualdad: es la señal óptimamente localizada.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, coeficientes).** Halla los coeficientes de $f(x) = x$ en $(-\pi, \pi)$.
- $f$ es impar: $a_n = 0$.
- $b_n = \dfrac{1}{\pi}\int_{-\pi}^{\pi} x\,\text{sen}\,nx\,dx = \dfrac{2(-1)^{n+1}}{n}$.
- Serie: $2\sum \dfrac{(-1)^{n+1}}{n}\text{sen}\,nx$.

**Ejemplo 2 (aplicación, identidad famosa).** Evaluando la serie anterior en $x = \pi/2$: $\sum \dfrac{(-1)^{n+1}}{2n-1} = \dfrac{\pi}{4}$ (serie de Leibniz).

**Ejemplo 3 (aplicación, filtro).** Una señal de audio tiene ruido de alta frecuencia. ¿Cómo se elimina?
- Transforma con FFT, atenúa las frecuencias altas y aplica la inversa.
- Multiplicar por una ventana en frecuencia equivale a convolucionar con un filtro en tiempo.

**Ejemplo 4 (práctica, transformada).** Transformada de $\chi_{[-1,1]}(t)$.
- $\hat{f}(\omega) = \int_{-1}^{1} e^{-i\omega t}\,dt = \dfrac{2\,\text{sen}\,\omega}{\omega}$.
- La función sinc: concentrada en tiempo, extendida en frecuencia (incertidumbre).

**Ejemplo 5 (aplicación, derivadas).** Resuelve $u_t = u_{xx}$ formalmente con Fourier.
- Transforma en $x$: $\dfrac{d\hat{u}}{dt} = -\omega^2 \hat{u}$.
- $\hat{u}(\omega, t) = \hat{u}_0(\omega)e^{-\omega^2 t}$: las frecuencias altas decaen más rápido (suavizado).

**Ejemplo 6 (práctica, incertidumbre).** Compara una delta (buena en tiempo) con una sinusoide pura (buena en frecuencia).
- $\delta$ tiene espectro plano: todo tiempo, toda frecuencia.
- La sinusoide tiene espectro puntual: una sola frecuencia, todo el tiempo.
- Son los extremos del principio de incertidumbre.

## Contextos donde se aplica
- **Ingeniería:** telecomunicaciones, audio, imagen, radar, 5G.
- **Física:** mecánica cuántica, óptica, ondas, espectroscopía.
- **Medicina:** resonancia magnética, ECG, ecografías.
- **Matemática:** EDP, teoría de números (series de Dirichlet), probabilidad.
- **Datos:** compresión, eliminación de ruido, extracción de características.

## Errores comunes y cómo evitarlos
- **Olvidar el periodo al calcular coeficientes.** Ajusta los límites según el periodo de la función.
- **Confundir serie (periódica) con transformada (no periódica).** La serie requiere periodicidad.
- **Ignorar Gibbs.** Truncar una serie de una función discontinua siempre oscila.
- **Aplicar FFT sin muestreo adecuado.** El aliasing arruina el espectro si violas Nyquist.
- **Pensar que Fourier localiza.** No indica cuándo ocurre una frecuencia; para eso, wavelets o ventanas.

## Ejercicios propuestos
1. Halla la serie de Fourier de $f(x) = |x|$ en $(-\pi, \pi)$.
2. Serie de la onda cuadrada: verifica que solo hay armónicos impares.
3. Transformada de $e^{-a|t|}$.
4. ¿Cuál es la transformada de $f(t - 3)$ en función de $\hat{f}$?
5. Verifica el teorema de convolución con dos pulsos rectangulares.
6. Explica el fenómeno de Gibbs con un dibujo mental de la onda cuadrada.
7. ¿Por qué la FFT es $O(N\log N)$ y no $O(N^2)$? (idea de dividir y vencer).
8. ¿Qué ventaja tienen las wavelets sobre Fourier para un sismo?

**Respuestas:** 1) $\dfrac{\pi}{2} - \dfrac{4}{\pi}\sum_{\text{impar}} \dfrac{\cos nx}{n^2}$. 2) $a_n = 0$ y $b_n = 4/(n\pi)$ impar. 3) $\dfrac{2a}{a^2+\omega^2}$. 4) $e^{-3i\omega}\hat{f}(\omega)$. 5) La transformada del producto es la convolución de las transformadas. 6) Oscilación cerca del salto sin desaparecer. 7) Divide en pares y reutiliza cálculos. 8) Localiza las frecuencias en el tiempo.

## Resumen
- Fourier descompone señales periódicas en armónicos; los coeficientes son su espectro.
- Dirichlet garantiza convergencia; Gibbs es inevitable en saltos.
- La transformada maneja funciones no periódicas; convolución se vuelve producto.
- La FFT hace el cálculo eficiente; base de la tecnología digital.
- Wavelets localizan tiempo-frecuencia; la incertidumbre impone límites fundamentales.
`
};
