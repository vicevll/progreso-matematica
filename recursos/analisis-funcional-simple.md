# Análisis funcional

Área: Análisis · Nivel: Univ 4–5 · Descripción: Espacios de Banach y Hilbert, operadores y espectro.

## Espacios normados

Un **espacio normado** es un espacio vectorial $X$ sobre $\mathbb{K}$ ($\mathbb{K} = \mathbb{R}$ o $\mathbb{C}$) dotado de una **norma** $\|\cdot\| : X \to [0, \infty)$ que cumple:

1. **Positividad:** $\|x\| \geq 0$ y $\|x\| = 0 \iff x = 0$.
2. **Homogeneidad:** $\|\alpha x\| = |\alpha|\,\|x\|$ para todo escalar $\alpha$.
3. **Desigualdad triangular:** $\|x + y\| \leq \|x\| + \|y\|$.

Toda norma induce una **métrica** $d(x, y) = \|x - y\|$, y por tanto una topología: bolas $B(x, r) = \{y : \|x - y\| < r\}$, convergencia y continuidad.

**Ejemplos centrales:**

1. $\mathbb{R}^n$ con $\|x\|_2 = \left(\sum |x_i|^2\right)^{1/2}$, $\|x\|_1 = \sum |x_i|$ y $\|x\|_\infty = \max_i |x_i|$.
2. $\ell^p = \left\{x = (x_n) : \sum |x_n|^p < \infty\right\}$ con $\|x\|_p = \left(\sum |x_n|^p\right)^{1/p}$.
3. $L^p(\mu)$ con $\|f\|_p = \left(\int |f|^p\,d\mu\right)^{1/p}$.
4. $C[a,b]$ con $\|f\|_\infty = \sup_{x \in [a,b]} |f(x)|$.

**Equivalencia de normas.** Dos normas $\|\cdot\|$ y $\|\cdot\|'$ son **equivalentes** si existen $c, C > 0$ con
$$c\,\|x\| \leq \|x\|' \leq C\,\|x\| \quad \forall x.$$

**Teorema.** En un espacio de **dimensión finita** todas las normas son equivalentes. En dimensión infinita esto es falso: por ejemplo, en $C[0,1]$ las normas $\|\cdot\|_1$ y $\|\cdot\|_\infty$ no son equivalentes.

**Mini-ejemplo.** En $\mathbb{R}^2$, $\|x\|_\infty \leq \|x\|_2 \leq \sqrt{2}\,\|x\|_\infty$, así que ambas son equivalentes con $c = 1$ y $C = \sqrt{2}$.

## Espacios de Banach

Un **espacio de Banach** es un espacio normado $(X, \|\cdot\|)$ que es **completo**: toda sucesión de Cauchy converge a un elemento de $X$.

Recordemos que $(x_n)$ es de **Cauchy** si
$$\forall \varepsilon > 0 \; \exists N : m, n > N \Rightarrow \|x_m - x_n\| < \varepsilon.$$

**Ejemplos de Banach:**

1. $\mathbb{R}^n$ y $\mathbb{C}^n$ con cualquier norma (dimensión finita $\Rightarrow$ completo).
2. $\ell^p$ para $1 \leq p \leq \infty$.
3. $L^p(\mu)$ para $1 \leq p \leq \infty$ (teorema de Riesz-Fischer).
4. $C[a,b]$ con la norma del supremo.

**Contraejemplo.** $C[0,1]$ con la norma $\|\cdot\|_1 = \int_0^1 |f|$ **no** es de Banach: hay sucesiones de Cauchy que convergen a funciones discontinuas.

**Teorema (serie de Neumann).** Si $X$ es de Banach, $T \in \mathcal{B}(X)$ y $\|T\| < 1$, entonces $I - T$ es invertible y
$$(I - T)^{-1} = \sum_{n=0}^{\infty} T^n, \qquad \|(I-T)^{-1}\| \leq \frac{1}{1 - \|T\|}.$$

**Mini-ejemplo.** $\mathbb{R}^n$ con $\|\cdot\|_2$ es Banach porque toda sucesión de Cauchy en $\mathbb{R}^n$ converge coordenada a coordenada y $\mathbb{R}$ es completo.

## Espacios de Hilbert

Un **espacio de Hilbert** $H$ es un espacio vectorial con **producto interno** $\langle \cdot, \cdot \rangle : H \times H \to \mathbb{K}$ que es completo respecto de la norma inducida
$$\|x\| = \sqrt{\langle x, x\rangle}.$$

El producto interno cumple:

1. Linealidad en la primera variable: $\langle \alpha x + \beta y, z\rangle = \alpha\langle x, z\rangle + \beta\langle y, z\rangle$.
2. Simetría conjugada: $\langle x, y\rangle = \overline{\langle y, x\rangle}$.
3. Positividad: $\langle x, x\rangle \geq 0$ y $\langle x, x\rangle = 0 \iff x = 0$.

**Desigualdad de Cauchy-Schwarz:**
$$|\langle x, y\rangle| \leq \|x\|\,\|y\|.$$

**Ley del paralelogramo** (caracteriza las normas que vienen de un producto interno):
$$\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2.$$

**Ejemplos:** $\mathbb{R}^n$ con el producto punto, $\ell^2$ con $\langle x, y\rangle = \sum x_n \overline{y_n}$, y $L^2(\mu)$ con $\langle f, g\rangle = \int f\bar{g}\,d\mu$.

**Mini-ejemplo.** En $L^2[0,1]$, $\langle f, g\rangle = \int_0^1 f\bar{g}$. Para $f(x) = x$, $\|f\| = \sqrt{\int_0^1 x^2\,dx} = \dfrac{1}{\sqrt{3}}$.

## Ortogonalidad y proyecciones

En un espacio de Hilbert:

1. $x \perp y$ si $\langle x, y\rangle = 0$.
2. El conjunto de vectores ortogonales a un subconjunto $S$ es el **complemento ortogonal** $S^\perp = \{x : \langle x, s\rangle = 0 \ \forall s \in S\}$, que siempre es un subespacio **cerrado**.
3. Un **sistema ortonormal** $\{e_n\}$ cumple $\langle e_m, e_n\rangle = \delta_{mn}$.

**Teorema de la proyección.** Sea $M$ un subespacio **cerrado** de $H$. Para cada $x \in H$ existe un único $m \in M$ que minimiza la distancia, es decir
$$\|x - m\| = d(x, M) = \inf_{y \in M} \|x - y\|.$$
Además $x - m \perp M$.

**Descomposición ortogonal.** $H = M \oplus M^\perp$: todo $x$ se escribe de forma única como $x = m + n$ con $m \in M$ y $n \in M^\perp$.

**Bases ortonormales.** Si $\{e_n\}$ es una base ortonormal, todo $x$ admite el desarrollo
$$x = \sum_{n} \langle x, e_n\rangle e_n,$$
y vale la **identidad de Parseval**
$$\|x\|^2 = \sum_n |\langle x, e_n\rangle|^2.$$

**Mini-ejemplo.** En $L^2[-1,1]$, las funciones $1$ y $x$ son ortogonales porque $\langle 1, x\rangle = \int_{-1}^{1} x\,dx = 0$. La proyección de $x^2$ sobre $1$ es la constante $\dfrac{\langle x^2, 1\rangle}{\|1\|^2} = \dfrac{2/3}{2} = \dfrac{1}{3}$.

## Operadores lineales acotados

Sean $X, Y$ espacios normados y $T : X \to Y$ lineal. Se dice que $T$ es **acotado** si existe $C \geq 0$ con
$$\|Tx\| \leq C\|x\| \quad \forall x \in X.$$

La **norma de operador** es
$$\|T\| = \sup_{\|x\| \leq 1} \|Tx\| = \sup_{x \neq 0} \frac{\|Tx\|}{\|x\|}.$$

**Teorema.** Para $T$ lineal son equivalentes:

1. $T$ es acotado.
2. $T$ es continuo.
3. $T$ es continuo en $0$.

El conjunto $\mathcal{B}(X,Y)$ de operadores acotados es un espacio normado, y si $Y$ es Banach, también $\mathcal{B}(X,Y)$ lo es.

**En dimensión finita** todo operador lineal es acotado. En dimensión infinita no: el operador derivada $D : C^1[0,1] \to C[0,1]$, $Df = f'$, no es acotado.

**Ejemplos:**

1. **Multiplicación:** $(Tf)(x) = g(x)f(x)$ en $C[0,1]$ con $g$ continua; $\|T\| = \|g\|_\infty$.
2. **Integral:** $(Tf)(x) = \int_0^1 K(x,y)f(y)\,dy$ con $K$ continua; $T$ es acotado.
3. **Shift:** $T(x_1, x_2, \dots) = (0, x_1, x_2, \dots)$ en $\ell^2$; $\|T\| = 1$.

**Mini-ejemplo.** El funcional $f(x) = 3x_1 - 4x_2$ en $\mathbb{R}^2$ tiene norma $\|f\| = \sqrt{3^2 + (-4)^2} = 5$, alcanzada en $x = (3/5, -4/5)$.

## El teorema de Hahn-Banach

**Hahn-Banach (forma analítica).** Sea $X$ un espacio normado, $M \subseteq X$ un subespacio y $f : M \to \mathbb{K}$ un funcional lineal con $|f(m)| \leq C\|m\|$ para todo $m \in M$. Entonces existe $F : X \to \mathbb{K}$ lineal tal que
$$F\big|_M = f, \qquad |F(x)| \leq C\|x\| \quad \forall x \in X.$$

Es decir, todo funcional continuo definido en un subespacio se extiende al espacio completo **sin aumentar la norma**.

**Consecuencias:**

1. **Separación de puntos:** si $x \neq y$, existe $F \in X^*$ con $F(x) \neq F(y)$.
2. Para cada $x \neq 0$ existe $F \in X^*$ con $\|F\| = 1$ y $F(x) = \|x\|$.
3. El **dual** $X^* = \mathcal{B}(X, \mathbb{K})$ es no trivial y rico en dimensión infinita.

**Forma geométrica.** Dos conjuntos convexos disjuntos (uno abierto) pueden separarse por un **hiperplano**: existe $F$ y una constante $c$ con $F(x) \leq c$ en uno y $F(x) \geq c$ en el otro. Es la base de la dualidad en optimización.

**Mini-ejemplo.** En $\mathbb{R}^2$ el funcional $f(t, 0) = t$ definido en el eje $x$ se extiende a $F(t,s) = t$ en todo $\mathbb{R}^2$ sin cambiar su norma $\|F\| = 1$.

## Acotación uniforme y aplicación abierta

Los tres teoremas fundamentales del análisis funcional (junto con Hahn-Banach) requieren **completitud**.

**Banach-Steinhaus (acotación uniforme).** Sea $\{T_\alpha\} \subseteq \mathcal{B}(X,Y)$ con $X$ Banach. Si la familia es **puntualmente acotada**,
$$\sup_\alpha \|T_\alpha x\| < \infty \quad \forall x \in X,$$
entonces es **uniformemente acotada**:
$$\sup_\alpha \|T_\alpha\| < \infty.$$

El control punto a punto implica control global. Es una de las sorpresas del análisis funcional.

**Teorema de la aplicación abierta.** Si $T \in \mathcal{B}(X,Y)$ es **sobreyectivo** con $X, Y$ Banach, entonces $T$ es **abierto**: la imagen de todo abierto es abierta.

**Corolario (operador inverso).** Si $T \in \mathcal{B}(X,Y)$ es biyectivo y $X, Y$ son Banach, entonces $T^{-1}$ es acotado.

**Teorema de la gráfica cerrada.** Sea $T : X \to Y$ lineal con $X, Y$ Banach. Si la gráfica $\{(x, Tx) : x \in X\}$ es cerrada en $X \times Y$, entonces $T$ es continuo.

**Mini-ejemplo.** La inclusión $i : C[0,1] \to L^1[0,1]$, $if = f$, es acotada ($\|f\|_1 \leq \|f\|_\infty$) pero no sobreyectiva; su inversa no es acotada, lo que confirma que la hipótesis de sobreyectividad en la aplicación abierta es esencial.

## Espectro de un operador

Sea $X$ un espacio de Banach complejo y $T \in \mathcal{B}(X)$. El **espectro** de $T$ es
$$\sigma(T) = \{\lambda \in \mathbb{C} : T - \lambda I \text{ no es invertible en } \mathcal{B}(X)\}.$$

El **resolvente** es $\rho(T) = \mathbb{C} \setminus \sigma(T)$. El espectro se descompone en:

1. **Puntual** $\sigma_p(T)$: los $\lambda$ para los que $T - \lambda I$ no es inyectivo (valores propios).
2. **Continuo** $\sigma_c(T)$: $T - \lambda I$ inyectivo con imagen densa pero no todo $X$.
3. **Residual** $\sigma_r(T)$: $T - \lambda I$ inyectivo pero imagen no densa.

**Propiedades:**

1. $\sigma(T)$ es un subconjunto **compacto** no vacío de $\mathbb{C}$ contenido en $\{|\lambda| \leq \|T\|\}$.
2. El **radio espectral** $r(T) = \sup\{|\lambda| : \lambda \in \sigma(T)\}$ cumple
$$r(T) = \lim_{n \to \infty} \|T^n\|^{1/n} \leq \|T\|.$$

**Operadores autoadjuntos.** Si $T = T^*$, entonces $\sigma(T) \subseteq \mathbb{R}$. Los **operadores normales** ($T T^* = T^* T$) admiten el **teorema espectral**: se diagonalizan mediante una familia de proyecciones ortogonales.

**Mini-ejemplo.** $T = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$. Sus valores propios son $2$ y $3$, luego $\sigma(T) = \{2, 3\}$ y $r(T) = 3$.

## Ejercicios (20)

### Nivel 1 · Normas y producto interno

1. Calcula $\|(3, -4)\|_2$ en $\mathbb{R}^2$.
2. Calcula $\|(1, -2, 2)\|_1$ y $\|(1, -2, 2)\|_\infty$.
3. Halla $\langle (1,2), (3,-1)\rangle$ en $\mathbb{R}^2$.
4. Halla la norma del funcional $f(x,y) = x + y$ en $\mathbb{R}^2$ con la norma euclidiana.
5. Determina el espectro de $\begin{pmatrix} 1 & 0 \\ 0 & 4 \end{pmatrix}$.

### Nivel 2 · Hilbert, ortogonalidad y proyecciones

6. Halla la norma del funcional $f(x,y) = 2x + 3y$ en $\mathbb{R}^2$ euclidiano.
7. Proyecta $f(x) = x$ sobre el subespacio de las constantes en $L^2[0,1]$.
8. ¿Son ortogonales $1$ y $x$ en $L^2[-1,1]$? Justifica.
9. Proyecta $f(x) = e^x$ sobre las constantes en $L^2[0,1]$.
10. Calcula la distancia de $f(x) = x$ al subespacio de las constantes en $L^2[0,1]$.

### Nivel 3 · Operadores acotados

11. Halla la norma del operador multiplicación $(Tf)(x) = 2f(x)$ en $C[0,1]$.
12. Halla la norma de $(Tf)(x) = \int_0^x f(t)\,dt$ en $C[0,1]$.
13. Halla la norma del funcional $f(x) = \int_0^1 x(t)\,dt$ en $C[0,1]$.
14. Calcula el radio espectral de $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$.
15. Determina el espectro del operador multiplicación $(Tf)(x) = x f(x)$ en $L^2[0,1]$.

### Nivel 4 · Desafío

16. En $\ell^2$ calcula $\|e_n - e_m\|$ para $n \neq m$ y explica por qué $(e_n)$ no tiene subsucesión convergente.
17. Halla la norma del operador proyección $P(x,y) = (x, 0)$ en $\mathbb{R}^2$ euclidiano.
18. Halla la norma como operador en $\ell^2$ de la matriz $\begin{pmatrix} 2 & 0 \\ 0 & -3 \end{pmatrix}$.
19. Determina el espectro del operador multiplicación $(Tf)(x) = x^2 f(x)$ en $L^2[0,1]$.
20. Halla la norma en $\ell^2$ del operador $T(x_1, x_2, x_3, \dots) = \left(\dfrac{x_1}{2}, \dfrac{x_2}{3}, \dfrac{x_3}{4}, \dots\right)$.

## Respuestas

1. $\sqrt{3^2 + (-4)^2} = 5$.
2. $\|(1,-2,2)\|_1 = 1 + 2 + 2 = 5$; $\|(1,-2,2)\|_\infty = 2$.
3. $\langle (1,2), (3,-1)\rangle = 1\cdot 3 + 2\cdot(-1) = 1$.
4. $\|f\| = \sqrt{1^2 + 1^2} = \sqrt{2}$.
5. $\sigma(T) = \{1, 4\}$.
6. $\|f\| = \sqrt{2^2 + 3^2} = \sqrt{13}$.
7. La constante óptima es el promedio $c = \int_0^1 x\,dx = \dfrac{1}{2}$.
8. Sí: $\langle 1, x\rangle = \int_{-1}^{1} x\,dx = 0$.
9. $c = \int_0^1 e^x\,dx = e - 1$.
10. $\|x - 1/2\|_2 = \left(\int_0^1 (x - 1/2)^2\,dx\right)^{1/2} = \dfrac{1}{\sqrt{12}}$.
11. $\|T\| = \sup |2f| / \|f\|_\infty = 2$.
12. $|Tf(x)| \leq \|f\|_\infty\, x \leq \|f\|_\infty$, luego $\|T\| = 1$ (alcanzada con $f \equiv 1$).
13. $\left|\int_0^1 x(t)\,dt\right| \leq \|x\|_\infty$, y con $x \equiv 1$ se alcanza: $\|f\| = 1$.
14. $T^2 = 0$, así que $\sigma(T) = \{0\}$ y $r(T) = 0$.
15. $\sigma(T) = [0,1]$ (espectro continuo), sin valores propios.
16. $\|e_n - e_m\| = \sqrt{2}$; como la distancia se mantiene, ninguna subsucesión puede ser de Cauchy.
17. $\|P\| = 1$.
18. $\|T\| = \max\{|2|, |-3|\} = 3$.
19. $\sigma(T) = [0,1]$.
20. $\|T\| = \sup_n \dfrac{1}{n+1} = \dfrac{1}{2}$.
