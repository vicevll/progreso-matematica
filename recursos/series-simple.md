# Sucesiones y series infinitas

Área: Cálculo · Nivel: Univ 2 · Descripción: Criterios de convergencia, Taylor, potencias y Fourier.

## Sucesiones y convergencia

Una **sucesión** $\{a_n\}$ es una lista infinita ordenada de números. Decimos que converge a $L$ si sus términos se acercan a $L$ tanto como se quiera:

$$\lim_{n\to\infty} a_n = L.$$

Si no converge, la sucesión **diverge**. Un resultado central es que una sucesión **monótona y acotada** siempre converge: si siempre crece pero no rebasa una cota, debe acercarse a un límite.

Mini-ejemplos:

1. $\dfrac{1}{n} \to 0$, porque tarde o temprano es menor que cualquier margen $\varepsilon > 0$.
2. $\dfrac{3n^2 + 1}{2n^2 - n} \to \dfrac{3}{2}$: en un cociente de polinomios manda el grado mayor.
3. $\left(1 + \dfrac{1}{n}\right)^n \to e$; de hecho $\left(1 + \dfrac{1}{n}\right)^{kn} \to e^{k}$.

**Ejemplo resuelto.** $\displaystyle\lim_{n\to\infty}\frac{5n + 2}{n + 7} = \lim_{n\to\infty}\frac{5 + 2/n}{1 + 7/n} = 5$, dividiendo numerador y denominador entre $n$.

## Series: definición y condición necesaria

Una **serie** es la suma de los términos de una sucesión:

$$\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \cdots$$

No sumamos infinitos términos de golpe: definimos las **sumas parciales** $S_N = \sum_{n=1}^{N} a_n$. La serie **converge** si la sucesión $\{S_N\}$ converge; su suma es ese límite.

**Condición necesaria.** Si $\sum a_n$ converge, entonces $a_n \to 0$. El recíproco es **falso**: la serie armónica $\sum \frac{1}{n}$ diverge aunque $\frac{1}{n} \to 0$. Esto se usa sobre todo para detectar divergencias rápidas.

**Serie geométrica.** Con razón $r$:

$$\sum_{n=0}^{\infty} a r^n = \frac{a}{1 - r} \quad \text{si } |r| < 1; \qquad \text{diverge si } |r| \geq 1.$$

**Serie telescópica.** Si cada término es una diferencia, la suma se colapsa:

$$\sum_{n=1}^{\infty}\left(\frac{1}{n} - \frac{1}{n+1}\right) = 1.$$

**Serie $p$.** La serie $\sum \dfrac{1}{n^p}$ converge si $p > 1$ y diverge si $p \leq 1$. Es la familia de referencia del curso.

Mini-ejemplo: $\displaystyle\sum_{n=0}^{\infty} 4\left(\frac{1}{2}\right)^n = \frac{4}{1 - 1/2} = 8$.

## Criterios de convergencia

Los criterios comparan la serie con una geométrica o una $p$ conocida, o miden la rapidez de decrecimiento.

1. **Comparación:** si $0 \leq a_n \leq b_n$ y $\sum b_n$ converge, entonces $\sum a_n$ converge; si $\sum a_n$ diverge y $a_n \geq b_n$, entonces $\sum b_n$ diverge.
2. **Comparación al límite:** si $\lim \frac{a_n}{b_n} = c$ con $0 < c < \infty$, ambas series convergen o ambas divergen.
3. **Razón (D'Alembert):** con $L = \lim\left|\dfrac{a_{n+1}}{a_n}\right|$, la serie converge si $L < 1$, diverge si $L > 1$ y el criterio **no decide** si $L = 1$.
4. **Raíz (Cauchy):** con $L = \lim \sqrt[n]{|a_n|}$ se aplica la misma regla.
5. **Integral:** si $f$ es positiva, continua y decreciente con $f(n) = a_n$, entonces $\sum a_n$ y $\int_1^\infty f(x)\,dx$ convergen o divergen **juntas**.
6. **Series alternantes (Leibniz):** si $a_n$ decrece a $0$, entonces $\sum (-1)^n a_n$ converge.

Mini-ejemplo (razón): para $\sum \dfrac{x^n}{n!}$ se tiene $\left|\dfrac{a_{n+1}}{a_n}\right| = \dfrac{|x|}{n+1} \to 0 < 1$: converge para todo $x$.

Mini-ejemplo (integral): $\sum \dfrac{1}{n\ln n}$ diverge porque $\int_2^\infty \frac{dx}{x\ln x} = \ln(\ln x)\big|_2^\infty = \infty$.

## Convergencia absoluta y condicional

Una serie $\sum a_n$ es **absolutamente convergente** si $\sum |a_n|$ converge. Es **condicionalmente convergente** si $\sum a_n$ converge pero $\sum |a_n|$ diverge.

**Teorema.** La convergencia absoluta implica la convergencia. El recíproco no es cierto.

**Ejemplo clave.** $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{n}$ converge por Leibniz, pero $\sum \frac{1}{n}$ diverge: es condicionalmente convergente. Por el **teorema de Riemann**, reordenar sus términos puede alterar la suma, o incluso hacerla divergir.

Mini-ejemplo: $\displaystyle\sum \frac{(-1)^n}{n^2}$ converge **absolutamente**, porque $\sum \frac{1}{n^2}$ converge ($p = 2 > 1$).

## Series de potencias

Una **serie de potencias** define una función mediante una serie:

$$\sum_{n=0}^{\infty} c_n x^n.$$

Tiene un **radio de convergencia** $R$: la serie converge absolutamente si $|x| < R$ y diverge si $|x| > R$. En los extremos $x = \pm R$ se estudia caso por caso. Con el criterio de la razón,

$$R = \lim_{n\to\infty}\left|\frac{c_n}{c_{n+1}}\right|.$$

Mini-ejemplos:

1. $\sum x^n$ tiene $R = 1$ (es la geométrica).
2. $\sum \dfrac{x^n}{n!}$ tiene $R = \infty$: converge para todo $x$.
3. $\sum n!\,x^n$ tiene $R = 0$: solo converge en $x = 0$.

**Ejemplo resuelto.** Para $\sum \dfrac{x^n}{n\,3^n}$: $R = \lim \dfrac{(n+1)3^{n+1}}{n\,3^n} = 3$.

## Series de Taylor y McLaurin

Toda función suficientemente suave se aproxima por su **serie de Taylor** alrededor de $a$:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n.$$

Si $a = 0$ se llama serie de **McLaurin**. Algunas series clave:

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$$

$$\operatorname{sen} x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$$

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$$

$$\frac{1}{1-x} = 1 + x + x^2 + \cdots \quad (|x| < 1)$$

**Ejemplo resuelto.** Aproximar $e^{0.1}$ con tres términos: $e^{0.1} \approx 1 + 0.1 + \frac{0.01}{2} = 1.105$. El valor real es $1.10517\ldots$; el error es menor que $10^{-4}$.

## Series de Fourier (introducción)

Las series de **Fourier** descomponen una función **periódica** en una suma de senos y cosenos:

$$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{L} + b_n\operatorname{sen}\frac{n\pi x}{L}\right).$$

Los coeficientes miden cuánto aporta cada frecuencia:

$$a_n = \frac{1}{L}\int_{-L}^{L} f(x)\cos\frac{n\pi x}{L}\,dx, \qquad b_n = \frac{1}{L}\int_{-L}^{L} f(x)\operatorname{sen}\frac{n\pi x}{L}\,dx.$$

Mini-ejemplo: la serie de Fourier de una **onda cuadrada** usa solo armónicos **impares**, porque la función tiene simetría impar. Es la herramienta básica del procesamiento de señales.

## Aplicaciones y errores comunes

**Contextos donde se aplica:**

- **Matemática:** representar funciones, aproximar y resolver ecuaciones diferenciales por series.
- **Física:** series de Fourier en ondas, calor y desarrollos multipolares.
- **Computación:** las calculadoras evalúan funciones con series de Taylor truncadas.
- **Finanzas:** anualidades perpetuas, que son series geométricas infinitas.

**Errores comunes y cómo evitarlos:**

1. Concluir convergencia porque $a_n \to 0$: es solo condición necesaria (la armónica diverge).
2. Usar la razón o la raíz cuando $L = 1$: el criterio no decide, hay que cambiar de método.
3. Confundir convergencia con convergencia absoluta: la condicional depende del orden.
4. Olvidar el radio de convergencia: una serie de potencias solo vale dentro de su intervalo.
5. Truncar una serie de Taylor sin estimar el error: siempre reporta una cota o el término siguiente.

## Ejercicios (20)

### Nivel 1 (1–5)

1. Calcula $\displaystyle\lim_{n\to\infty}\frac{4n+3}{2n-1}$.
2. Calcula $\displaystyle\lim_{n\to\infty}\left(1+\frac{3}{n}\right)^n$.
3. Suma $\displaystyle\sum_{n=0}^{\infty} 6\left(\frac{1}{4}\right)^n$.
4. ¿Converge $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^{4}}$?
5. Calcula $\displaystyle\lim_{n\to\infty}\frac{n^3-2n}{5n^3+n^2}$.

### Nivel 2 (6–10)

6. Suma $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n(n+1)}$.
7. Aplica el criterio de la razón a $\displaystyle\sum_{n=1}^{\infty}\frac{5^n}{n!}$.
8. Aplica el criterio de la raíz a $\displaystyle\sum_{n=1}^{\infty}\left(\frac{n}{3n+1}\right)^n$.
9. Analiza $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{n}$ (absoluta o condicional).
10. ¿Converge $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n\ln n}$?

### Nivel 3 (11–15)

11. Halla el radio de convergencia de $\displaystyle\sum_{n=1}^{\infty}\frac{x^n}{n\,4^n}$.
12. Halla el radio de convergencia de $\displaystyle\sum_{n=0}^{\infty} n!\,x^n$.
13. Escribe los cuatro primeros términos de McLaurin de $\cos x$.
14. ¿Absoluta o condicional? $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}$.
15. ¿Converge $\displaystyle\sum_{n=1}^{\infty}\frac{n!}{5^n}$?

### Nivel 4 (16–20)

16. Suma $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n}{2^n}$.
17. Halla el radio de convergencia de $\displaystyle\sum_{n=1}^{\infty}\frac{(x-1)^n}{n}$.
18. Aproxima $e^{0.2}$ con tres términos de Taylor.
19. Suma la serie de Gregory–Leibniz $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}$.
20. ¿Qué armónicos usa la serie de Fourier de una onda cuadrada?

## Respuestas

1. $2$.
2. $e^{3}$.
3. $8$.
4. Sí, converge ($p = 4 > 1$).
5. $\dfrac{1}{5}$.
6. $1$.
7. $L = 0 < 1$: converge.
8. $L = \dfrac{1}{3} < 1$: converge.
9. Condicionalmente convergente (la armónica diverge).
10. Diverge (criterio integral: $\ln(\ln x) \to \infty$).
11. $R = 4$.
12. $R = 0$.
13. $1 - \dfrac{x^2}{2} + \dfrac{x^4}{24} - \dfrac{x^6}{720}$.
14. Absolutamente convergente ($p = 2$).
15. Diverge ($L = \infty$).
16. $\dfrac{2}{3}$.
17. $R = 1$.
18. $1 + 0.2 + 0.02 = 1.22$; el valor real es $1.22140\ldots$.
19. $\dfrac{\pi}{4}$.
20. Solo los armónicos impares.
