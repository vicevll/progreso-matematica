# Sucesiones y series · teoría esencial

## Sucesiones

Una **sucesión** $\{a_n\}$ es una lista infinita y ordenada de números: $a_1, a_2, a_3, \ldots$ El subíndice $n$ es la posición; $a_n$ es el valor en esa posición. Por ejemplo, si $a_n = \frac{1}{n}$, la lista es $1, \frac{1}{2}, \frac{1}{3}, \ldots$

Una sucesión **converge** a $L$ si sus términos se acercan a $L$ cuando $n$ crece. Se escribe $\lim_{n\to\infty} a_n = L$ (se lee: "el límite cuando $n$ tiende a infinito es $L$"). Si no hay tal número, la sucesión **diverge** (crece sin freno, oscila, etc.).

**Reglas prácticas para límites:**

- $\frac{1}{n} \to 0$; más en general, $\frac{1}{n^p} \to 0$ para todo $p > 0$.
- Cocientes de polinomios: manda el **grado mayor**. Solo mira el término dominante.
- Una sucesión **monótona y acotada** siempre converge.

## Series

Una **serie** es la suma de los términos de una sucesión:

$$\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \cdots$$

El símbolo $\sum$ (sigma) indica suma; debajo va el índice inicial ($n = 1$) y arriba el final ($\infty$: infinito, no termina). La serie **converge** si sus **sumas parciales** $S_N = a_1 + \cdots + a_N$ se acercan a un número fijo; ese número es la suma de la serie. Si no, **diverge**.

**Test del término (condición necesaria):** si $\sum a_n$ converge, entonces $a_n \to 0$. Si $a_n \not\to 0$, la serie **diverge**. Pero si $a_n \to 0$ no concluyes nada: la armónica diverge.

## Series de referencia

**Geométrica:** cada término se obtiene multiplicando el anterior por la **razón** $r$ (un número fijo). Primer término $a$.

$$\sum_{n=0}^{\infty} a r^n = \frac{a}{1-r} \quad \text{si } |r| < 1; \quad \text{diverge si } |r| \geq 1$$

Aquí $|r|$ es el valor absoluto de $r$ (su distancia al cero). La fórmula vale empezando en $n = 0$; si empieza en $n = 1$, el primer término es $ar$.

**Serie p:** $\sum \dfrac{1}{n^p}$ converge si $p > 1$ y diverge si $p \leq 1$. Casos: $p = 1$ es la **armónica** (diverge); $p = 2$ converge con suma $\frac{\pi^2}{6}$.

**Telescópica:** sus términos se cancelan en cadena. Ejemplo: $\sum \frac{1}{n(n+1)} = 1$ porque $\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$.

## Criterios de convergencia

Un **criterio** es una regla que responde "converge", "diverge" o "no decide".

1. **Comparación.** Si $0 \leq a_n \leq b_n$ y $\sum b_n$ converge, entonces $\sum a_n$ converge. Compárate con una p o una geométrica.
2. **Comparación al límite.** Si $L = \lim \frac{a_n}{b_n}$ es un número positivo y finito, ambas series convergen o divergen juntas. Elige $b_n$ como el término dominante de $a_n$.
3. **Razón (D'Alembert).** $L = \lim \left|\frac{a_{n+1}}{a_n}\right|$: converge si $L < 1$, diverge si $L > 1$, no decide si $L = 1$. Ideal para factoriales y potencias.
4. **Raíz (Cauchy).** $L = \lim \sqrt[n]{|a_n|}$, con la misma regla. Ideal cuando todo está elevado a la $n$.
5. **Integral.** Si $f$ es positiva, continua y decreciente con $f(n) = a_n$, la serie y la integral $\int_1^\infty f(x)\,dx$ convergen o divergen juntas.
6. **Alternantes (Leibniz).** Si $a_n > 0$ decrece y $a_n \to 0$, entonces $\sum (-1)^n a_n$ converge. Además, el error al cortar en $S_N$ es menor que el primer término omitido.

## Convergencia absoluta y condicional

$\sum a_n$ es **absolutamente convergente** si $\sum |a_n|$ converge. Si converge pero su versión en valor absoluto diverge, es **condicionalmente convergente**.

**Teorema:** convergencia absoluta implica convergencia. El recíproco es falso.

**Ejemplo clave:** $\sum \frac{(-1)^{n+1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \cdots$ converge (Leibniz, suma $\ln 2$), pero $\sum \frac{1}{n}$ diverge: es **condicionalmente convergente**. Las series condicionales son frágiles: reordenar sus términos puede cambiar la suma (teorema de Riemann).

## Series de potencias

Una **serie de potencias** es una función definida por una serie: $\sum_{n=0}^{\infty} c_n x^n$. Tiene un **radio de convergencia** $R$: converge absolutamente si $|x| < R$ y diverge si $|x| > R$. En los extremos se analiza caso a caso. Se calcula con la razón:

$$R = \lim_{n\to\infty} \left|\frac{c_n}{c_{n+1}}\right|$$

Ejemplos: $\sum x^n$ tiene $R = 1$; $\sum \frac{x^n}{n!}$ tiene $R = \infty$ (converge para todo $x$); $\sum n!\, x^n$ tiene $R = 0$.

## Taylor y McLaurin

La **serie de Taylor** de $f$ alrededor de $a$ es

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$

donde $f^{(n)}(a)$ es la derivada enésima evaluada en $a$ y $n! = n(n-1)\cdots 2 \cdot 1$ es el factorial. Si $a = 0$ se llama **McLaurin**. Series clave:

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$$

$$\operatorname{sen} x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$$

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$$

Para $x$ pequeño, los primeros términos ya aproximan bien. **Siempre estima el error:** en series alternantes, el error es menor que el primer término omitido.

## Errores comunes

- Concluir convergencia porque $a_n \to 0$ (la armónica diverge).
- Usar la razón cuando $L = 1$ (no decide).
- Olvidar que la geométrica estándar empieza en $n = 0$.
- Confundir convergencia con convergencia absoluta.
- Ignorar el radio de convergencia de una serie de potencias.
- Truncar Taylor sin acotar el error.

## Ejercicios (20)

**Nivel 1 · Sucesiones y geométricas básicas**

1. Calcula $\lim_{n\to\infty} \dfrac{2n+3}{4n-5}$.
2. Calcula $\lim_{n\to\infty} \left(\dfrac{1}{3}\right)^n$.
3. Suma $\displaystyle\sum_{n=0}^{\infty} \left(\frac{1}{5}\right)^n$.
4. Suma $\displaystyle\sum_{n=0}^{\infty} 3\left(\frac{2}{3}\right)^n$.
5. ¿Converge $\displaystyle\sum_{n=0}^{\infty} \left(\frac{1}{10}\right)^n$? Si sí, ¿a qué valor?

**Nivel 2 · Series p, comparación y telescópicas**

6. ¿Converge $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^3}$?
7. ¿Converge $\displaystyle\sum_{n=1}^{\infty} \frac{1}{\sqrt{n}}$?
8. ¿Converge $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2 + n}$? Usa comparación.
9. Suma $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$.
10. ¿Converge $\displaystyle\sum_{n=1}^{\infty} \frac{2n+1}{n^3 + 4}$? Usa comparación al límite.

**Nivel 3 · Criterios de razón, raíz y alternantes**

11. ¿Converge $\displaystyle\sum_{n=1}^{\infty} \frac{n}{2^n}$? Usa la razón.
12. ¿Converge $\displaystyle\sum_{n=1}^{\infty} \frac{2^n}{n!}$? Usa la razón.
13. ¿Converge $\displaystyle\sum_{n=1}^{\infty} \frac{n!}{n^n}$? Usa la razón.
14. ¿Converge $\displaystyle\sum_{n=1}^{\infty} \left(\frac{n}{2n+1}\right)^n$? Usa la raíz.
15. ¿Converge $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{\sqrt{n}}$? Usa Leibniz.

**Nivel 4 · Absoluta/condicional, radios y sumas exactas**

16. Analiza $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}$: ¿convergencia absoluta o condicional?
17. Analiza $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{n}$: ¿absoluta o condicional?
18. Halla el radio de convergencia de $\displaystyle\sum_{n=0}^{\infty} \frac{x^n}{n!}$.
19. Halla el radio de convergencia de $\displaystyle\sum_{n=1}^{\infty} n\, x^n$.
20. Suma $\displaystyle\sum_{n=0}^{\infty} \frac{2^n + 3^n}{5^n}$.

## Respuestas

1. $\frac{1}{2}$ (manda el grado 1: cociente de coeficientes).
2. $0$ (geométrica con razón menor que 1 en módulo).
3. $\frac{5}{4}$ (geométrica: $\frac{1}{1-1/5}$).
4. $9$ (geométrica: $\frac{3}{1-2/3}$).
5. Converge a $\frac{10}{9}$.
6. Converge (serie p, $p = 3 > 1$).
7. Diverge (serie p, $p = \frac{1}{2} \leq 1$).
8. Converge: $\frac{1}{n^2+n} \leq \frac{1}{n^2}$ y la p con $p = 2$ converge.
9. $1$ (telescópica: $\frac{1}{n} - \frac{1}{n+1}$ se cancela en cadena).
10. Converge: se compara con $\frac{1}{n^2}$ y el cociente tiende a $2 > 0$.
11. Converge: $\left|\frac{a_{n+1}}{a_n}\right| = \frac{n+1}{2n} \to \frac{1}{2} < 1$.
12. Converge: $\left|\frac{a_{n+1}}{a_n}\right| = \frac{2}{n+1} \to 0 < 1$.
13. Converge: $\left|\frac{a_{n+1}}{a_n}\right| = \left(\frac{n}{n+1}\right)^n \to \frac{1}{e} < 1$.
14. Converge: $\sqrt[n]{|a_n|} = \frac{n}{2n+1} \to \frac{1}{2} < 1$.
15. Converge: $\frac{1}{\sqrt{n}}$ decrece a $0$ (Leibniz).
16. Absolutamente convergente: $\sum \frac{1}{n^2}$ converge.
17. Condicionalmente convergente: converge por Leibniz pero $\sum \frac{1}{n}$ diverge.
18. $R = \infty$ (converge para todo $x$).
19. $R = 1$: $\left|\frac{c_n}{c_{n+1}}\right| = \frac{n}{n+1} \to 1$.
20. $\frac{25}{6}$: suma de geométricas $\frac{1}{1-2/5} + \frac{1}{1-3/5} = \frac{5}{3} + \frac{5}{2}$.
