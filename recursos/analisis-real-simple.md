# Análisis real

## Los números reales y el axioma del supremo

El análisis real estudia de manera rigurosa los números reales, los límites y las funciones de variable real. Su punto de partida es la propiedad que distingue a $\mathbb{R}$ de $\mathbb{Q}$.

**Cota superior.** Sea $A \subseteq \mathbb{R}$ no vacío. Un número $M$ es **cota superior** de $A$ si $a \leq M$ para todo $a \in A$. Se dice que $A$ está **acotado superiormente** si posee alguna cota superior.

**Supremo.** El **supremo** de $A$, denotado $\sup A$, es la menor de las cotas superiores. Es decir, $\sup A = s$ si:
1. $s$ es cota superior de $A$;
2. para toda cota superior $M$ se cumple $s \leq M$.

**Axioma del supremo.** Todo subconjunto no vacío de $\mathbb{R}$ acotado superiormente tiene supremo en $\mathbb{R}$.

De forma análoga se definen la **cota inferior**, el **ínfimo** ($\inf A$, la mayor cota inferior) y el axioma correspondiente para conjuntos acotados inferiormente.

**Teorema (caracterización).** $s = \sup A$ si y solo si $s$ es cota superior de $A$ y para todo $\varepsilon > 0$ existe $a \in A$ con $a > s - \varepsilon$.

**Consecuencias:**
1. **Propiedad arquimediana:** para todo $x \in \mathbb{R}$ existe $n \in \mathbb{N}$ con $n > x$.
2. **Densidad de $\mathbb{Q}$:** entre dos reales distintos siempre hay un racional.
3. Toda sucesión monótona y acotada converge (al supremo o al ínfimo).

**Mini-ejemplo.** Para $A = \{1 - 1/n : n \in \mathbb{N}\}$ se tiene $\sup A = 1$ e $\inf A = 0$; no existe máximo, y el mínimo es $0$.

## Sucesiones y límites

Una **sucesión** es una función $a: \mathbb{N} \to \mathbb{R}$, que se escribe $(a_n)$.

**Definición de límite.** $(a_n)$ converge a $L$ si
$$\forall \varepsilon > 0 \; \exists N \in \mathbb{N} : n > N \Rightarrow |a_n - L| < \varepsilon.$$

**Propiedades:**
1. El límite, si existe, es único.
2. Toda sucesión convergente es acotada.
3. Los límites conservan sumas, productos y cocientes con denominador no nulo.
4. **Sándwich:** si $a_n \leq b_n \leq c_n$ y $a_n, c_n \to L$, entonces $b_n \to L$.

**Teorema de la convergencia monótona.** Toda sucesión creciente y acotada superiormente converge a su supremo; toda sucesión decreciente y acotada inferiormente converge a su ínfimo.

**Teorema de Bolzano-Weierstrass.** Toda sucesión acotada posee una subsucesión convergente.

**Límite superior e inferior.** Se definen
$$\limsup a_n = \lim_{n\to\infty}\left(\sup_{k\geq n} a_k\right), \qquad \liminf a_n = \lim_{n\to\infty}\left(\inf_{k\geq n} a_k\right).$$
La sucesión converge si y solo si $\limsup a_n = \liminf a_n$, y ese valor común es el límite.

**Sucesiones de Cauchy.** $(a_n)$ es de **Cauchy** si
$$\forall \varepsilon > 0 \; \exists N : m, n > N \Rightarrow |a_m - a_n| < \varepsilon.$$
En $\mathbb{R}$: convergente $\iff$ de Cauchy (completitud).

**Mini-ejemplo.** $\limsup (-1)^n = 1$ y $\liminf (-1)^n = -1$; al no coincidir, la sucesión diverge.

## Series numéricas

Dada $(a_n)$, la **serie** $\sum_{n=1}^{\infty} a_n$ converge si la sucesión de sumas parciales $S_N = \sum_{n=1}^{N} a_n$ tiene límite finito; su valor es $\sum a_n = \lim S_N$.

**Condición necesaria.** Si $\sum a_n$ converge, entonces $a_n \to 0$. El recíproco es falso: la serie armónica $\sum 1/n$ diverge aunque $1/n \to 0$.

**Series notables:**
1. **Geométrica:** $\sum_{n=0}^{\infty} r^n$ converge a $\dfrac{1}{1 - r}$ si $|r| < 1$, y diverge si $|r| \geq 1$.
2. **Armónica generalizada:** $\sum_{n=1}^{\infty} \dfrac{1}{n^p}$ converge si $p > 1$, y diverge si $p \leq 1$.
3. **Alternante armónica:** $\sum_{n=1}^{\infty} \dfrac{(-1)^{n+1}}{n} = \ln 2$.

**Criterios de convergencia:**
1. **Comparación:** si $0 \leq a_n \leq b_n$ y $\sum b_n$ converge, entonces $\sum a_n$ converge.
2. **Razón:** si $\lim \left|a_{n+1}/a_n\right| = L < 1$ converge; si $L > 1$, diverge.
3. **Raíz:** si $\lim \sqrt[n]{|a_n|} = L < 1$ converge; si $L > 1$, diverge.
4. **Integral:** si $f$ es positiva y decreciente con $f(n) = a_n$, entonces $\sum a_n$ e $\int_1^\infty f(x)\,dx$ convergen o divergen juntas.
5. **Leibniz:** si $b_n$ decrece a $0$, entonces $\sum (-1)^n b_n$ converge.

**Convergencia absoluta y condicional.** $\sum a_n$ es **absolutamente convergente** si $\sum |a_n|$ converge; entonces $\sum a_n$ converge. Si converge pero $\sum |a_n|$ diverge, es **condicionalmente convergente**. Reordenar una serie condicional puede cambiar su suma (teorema de Riemann).

**Mini-ejemplo.** $\sum \dfrac{1}{n^2}$ converge porque $p = 2 > 1$; $\sum \dfrac{1}{n}$ diverge porque $p = 1$.

## Continuidad y continuidad uniforme

Sea $f: D \subseteq \mathbb{R} \to \mathbb{R}$.

**Continuidad en un punto.** $f$ es **continua en** $c \in D$ si
$$\forall \varepsilon > 0 \; \exists \delta > 0 : |x - c| < \delta \Rightarrow |f(x) - f(c)| < \varepsilon.$$

**Caracterización secuencial.** $f$ es continua en $c$ si y solo si $x_n \to c \Rightarrow f(x_n) \to f(c)$.

**Continuidad uniforme.** $f$ es **uniformemente continua** en $D$ si
$$\forall \varepsilon > 0 \; \exists \delta > 0 : x, y \in D,\ |x - y| < \delta \Rightarrow |f(x) - f(y)| < \varepsilon.$$
El $\delta$ depende solo de $\varepsilon$, no del punto.

**Teorema de Heine-Cantor.** Toda función continua en un intervalo cerrado y acotado $[a,b]$ es uniformemente continua.

**Teorema del valor intermedio.** Si $f$ es continua en $[a,b]$ y $k$ está entre $f(a)$ y $f(b)$, existe $c \in [a,b]$ con $f(c) = k$.

**Teorema del valor extremo.** Si $f$ es continua en $[a,b]$, alcanza su máximo y su mínimo.

**Mini-ejemplo.** $f(x) = x^2$ no es uniformemente continua en $\mathbb{R}$ (con $x = n + 1/n$, $y = n$ la diferencia no decrece), pero sí lo es en $[0,10]$ por Heine-Cantor.

## Derivación y teoremas del valor medio

**Derivada.** $f$ es **derivable** en $c$ si existe
$$f'(c) = \lim_{h\to 0} \frac{f(c+h) - f(c)}{h}.$$
Derivable implica continua; el recíproco es falso ($f(x) = |x|$ en $0$).

**Teorema de Rolle.** Si $f$ es continua en $[a,b]$, derivable en $(a,b)$ y $f(a) = f(b)$, existe $c \in (a,b)$ con $f'(c) = 0$.

**Teorema del valor medio (Lagrange).** Si $f$ es continua en $[a,b]$ y derivable en $(a,b)$, existe $c \in (a,b)$ con
$$f'(c) = \frac{f(b) - f(a)}{b - a}.$$

**Teorema del valor medio de Cauchy.** Si $f$ y $g$ son continuas en $[a,b]$ y derivables en $(a,b)$, existe $c \in (a,b)$ con
$$(f(b) - f(a))g'(c) = (g(b) - g(a))f'(c).$$

**Teorema de Taylor.** Si $f$ tiene $n+1$ derivadas, entonces
$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x),$$
donde $R_n(x) = \dfrac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$ para algún $\xi$ entre $a$ y $x$.

**Consecuencias útiles:**
1. $f' > 0$ en un intervalo $\Rightarrow$ $f$ es estrictamente creciente.
2. $f' = 0$ en un intervalo $\Rightarrow$ $f$ es constante.
3. Regla de L'Hôpital para las indeterminaciones $\frac{0}{0}$ y $\frac{\infty}{\infty}$.

**Mini-ejemplo.** Para $f(x) = x^2$ en $[0,4]$: $\dfrac{f(4)-f(0)}{4} = 4 = f'(c) = 2c$, luego $c = 2$.

## La integral de Riemann

Sea $f$ acotada en $[a,b]$ y $P = \{x_0 < x_1 < \cdots < x_n\}$ una partición. Con $M_i = \sup_{[x_{i-1}, x_i]} f$ y $m_i = \inf_{[x_{i-1}, x_i]} f$ se definen las sumas
$$U(f,P) = \sum_{i=1}^{n} M_i\, \Delta x_i, \qquad L(f,P) = \sum_{i=1}^{n} m_i\, \Delta x_i.$$

La **integral superior** es $\overline{\int_a^b f} = \inf_P U(f,P)$ y la **integral inferior** es $\underline{\int_a^b f} = \sup_P L(f,P)$.

**Definición.** $f$ es **Riemann-integrable** si la integral superior y la inferior coinciden; ese valor común es $\int_a^b f(x)\,dx$.

**Criterio de Riemann.** $f$ acotada es integrable si y solo si para todo $\varepsilon > 0$ existe una partición $P$ con $U(f,P) - L(f,P) < \varepsilon$.

**Criterio de Lebesgue.** Una función acotada es Riemann-integrable si y solo si el conjunto de sus discontinuidades tiene medida cero. En particular, toda función continua, monótona o con finitas discontinuidades es integrable.

**Teorema fundamental del cálculo.** Si $F(x) = \int_a^x f(t)\,dt$ con $f$ continua, entonces $F$ es derivable y $F'(x) = f(x)$. Además, si $G' = f$ entonces $\int_a^b f = G(b) - G(a)$.

**Propiedades:** linealidad, aditividad $\int_a^b = \int_a^c + \int_c^b$, monotonía y acotación $\left|\int_a^b f\right| \leq \int_a^b |f|$.

**Mini-ejemplo.** $\int_0^1 x^2\,dx = \lim_{n\to\infty}\sum_{i=1}^{n}\left(\frac{i}{n}\right)^2\frac{1}{n} = \lim \frac{n(n+1)(2n+1)}{6n^3} = \frac{1}{3}$.

## Sucesiones de funciones: convergencia puntual y uniforme

Sea $(f_n)$ una sucesión de funciones definidas en $D \subseteq \mathbb{R}$.

**Convergencia puntual.** $f_n \to f$ **puntualmente** si para cada $x \in D$ fijo se cumple $f_n(x) \to f(x)$.

**Convergencia uniforme.** $f_n \to f$ **uniformemente** en $D$ si
$$\sup_{x \in D} |f_n(x) - f(x)| \to 0.$$
La convergencia uniforme implica la puntual, pero no al revés.

**Teoremas de preservación.** Si $f_n \to f$ uniformemente:
1. y cada $f_n$ es continua, entonces $f$ es continua;
2. y cada $f_n$ es integrable en $[a,b]$, entonces $f$ es integrable y $\displaystyle\int_a^b f_n \to \int_a^b f$;
3. si las $f_n$ son derivables, $f_n \to f$ en un punto y $f_n' \to g$ uniformemente, entonces $f$ es derivable y $f' = g$.

**Criterio de Cauchy uniforme.** $f_n$ converge uniformemente si y solo si
$$\forall \varepsilon > 0 \; \exists N : m, n > N \Rightarrow \sup_{x \in D}|f_m(x) - f_n(x)| < \varepsilon.$$

**Teorema de Dini.** Si las $f_n$ son continuas, $f_n \to f$ puntualmente, $f$ es continua y la convergencia es monótona en cada punto, entonces la convergencia es uniforme.

**Mini-ejemplo.** $f_n(x) = x^n$ en $[0,1]$ converge puntualmente a $f(x) = 0$ si $x < 1$ y $f(1) = 1$; como el límite es discontinuo, la convergencia no es uniforme.

## Ejercicios (20)

**Nivel 1 (básico)**
1. Halla $\sup A$, $\inf A$, máximo y mínimo de $A = \{1 - 1/n : n \in \mathbb{N}\}$.
2. Calcula $\displaystyle\lim_{n\to\infty} \frac{3n^2 + 2}{4n^2 - n}$.
3. Determina si $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2}$ converge y, si es posible, su suma.
4. ¿Es $f(x) = 3x + 1$ uniformemente continua en $\mathbb{R}$? Justifica.
5. Calcula la derivada de $f(x) = x^3 - 2x$.

**Nivel 2 (intermedio)**
6. Halla $\limsup a_n$ y $\liminf a_n$ para $a_n = (-1)^n + \frac{1}{n}$.
7. ¿Converge $\displaystyle\sum_{n=1}^{\infty} \frac{n+1}{n^3}$? Justifica con comparación.
8. Halla el punto $c$ del teorema del valor medio para $f(x) = x^2$ en $[0,3]$.
9. ¿Es $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$ absolutamente convergente? ¿Cuánto vale su suma?
10. Calcula $\displaystyle\int_0^1 x^2\,dx$ como límite de sumas de Riemann.

**Nivel 3 (avanzado)**
11. Halla el supremo en $\mathbb{R}$ de $A = \{x \in \mathbb{Q} : x^2 < 2\}$. ¿Pertenece a $\mathbb{Q}$?
12. Calcula $\displaystyle\lim_{n\to\infty}\left(1 + \frac{1}{n}\right)^n$.
13. ¿Converge $\displaystyle\sum_{n=2}^{\infty} \frac{1}{n\ln n}$? Usa el criterio integral.
14. Demuestra que $f(x) = x^3 + x - 1$ tiene al menos una raíz en $(0,1)$.
15. ¿Es $f_n(x) = x^n$ uniformemente convergente en $[0,1]$? Explica.

**Nivel 4 (reto)**
16. Calcula $\displaystyle\lim_{n\to\infty} \frac{\ln n}{n}$.
17. ¿Converge $\displaystyle\sum_{n=1}^{\infty} \frac{2^n}{n!}$? Usa el criterio de la razón.
18. Halla el punto $c$ del teorema del valor medio para $f(x) = x^3$ en $[0,2]$.
19. ¿Es $f(x) = 1/x$ uniformemente continua en $(0,1]$? Justifica.
20. ¿Converge uniformemente $f_n(x) = \frac{1}{n}\cos(nx)$ en $\mathbb{R}$?

## Respuestas

1. $\sup A = 1$, $\inf A = 0$; no hay máximo y el mínimo es $0$.
2. $\dfrac{3}{4}$.
3. Converge; su suma es $\dfrac{\pi^2}{6}$.
4. Sí: dado $\varepsilon > 0$ basta $\delta = \varepsilon/3$, pues $f$ es Lipschitz.
5. $f'(x) = 3x^2 - 2$.
6. $\limsup a_n = 1$, $\liminf a_n = -1$.
7. Converge: $\dfrac{n+1}{n^3} \leq \dfrac{2}{n^2}$ y $\sum 1/n^2$ converge.
8. $c = \dfrac{3}{2}$.
9. No es absolutamente convergente (la armónica diverge); es condicional y su suma es $\ln 2$.
10. $\dfrac{1}{3}$.
11. $\sup A = \sqrt{2}$, que no pertenece a $\mathbb{Q}$.
12. $e$.
13. Diverge: $\displaystyle\int_2^\infty \frac{dx}{x\ln x} = \lim \ln\ln x = \infty$.
14. $f(0) = -1 < 0$ y $f(1) = 1 > 0$; por el valor intermedio existe $c \in (0,1)$ con $f(c) = 0$.
15. No: el límite puntual es discontinuo en $1$ ($f(1) = 1$ y $f(x) = 0$ para $x < 1$).
16. $0$.
17. Sí: $\left|\dfrac{a_{n+1}}{a_n}\right| = \dfrac{2}{n+1} \to 0 < 1$.
18. $c = \dfrac{2}{\sqrt{3}}$.
19. No: con $x_n = 1/n$ y $y_n = 1/(n+1)$ se tiene $|f(x_n) - f(y_n)| = 1$, que no tiende a $0$.
20. Sí: $\sup_{x}\left|\frac{1}{n}\cos(nx)\right| = \frac{1}{n} \to 0$.
