# Sucesiones y sumatorias
**Guía simple · Álgebra escolar y fundamentos · 10°–11°**
*Progresiones, notación sigma, inducción matemática.*

## 1. Sucesiones: término general y recurrencia
Una **sucesión** es una función que asigna a cada número natural $n$ un término $a_n$. Se escribe $\{a_n\}$ o listando $a_1, a_2, a_3, \ldots$

Hay dos formas de definirla:
1. **Término general:** una fórmula directa $a_n = f(n)$.
2. **Recurrencia:** cada término depende de los anteriores, más condiciones iniciales.

Fórmulas clave:
$$a_n = f(n), \qquad a_{n+1} = g(a_n, a_{n-1}, \ldots)$$

Mini-ejemplo: con $a_n = 2n + 1$ se obtiene $3, 5, 7, 9, \ldots$ En cambio, $a_1 = 1$ con $a_{n+1} = a_n + n$ genera $1, 2, 4, 7, \ldots$

## 2. Progresión aritmética (PA)
Una PA avanza sumando una **diferencia** constante $d = a_{n+1} - a_n$. Su término general y su suma son:
$$a_n = a_1 + (n-1)d$$
$$S_n = \frac{n(a_1 + a_n)}{2} = \frac{n\big(2a_1 + (n-1)d\big)}{2}$$

Mini-ejemplo: en $3, 7, 11, \ldots$ se tiene $d = 4$, luego $a_{20} = 3 + 19 \cdot 4 = 79$ y $S_{20} = \dfrac{20(3 + 79)}{2} = 820$.

## 3. Progresión geométrica (PG)
Una PG avanza multiplicando por una **razón** constante $r = \dfrac{a_{n+1}}{a_n}$. Sus fórmulas son:
$$a_n = a_1 r^{n-1}, \qquad S_n = a_1\frac{1 - r^n}{1 - r} \quad (r \neq 1)$$
$$S_\infty = \frac{a_1}{1 - r} \quad (|r| < 1)$$

Mini-ejemplo: en $2, 6, 18, \ldots$ se tiene $r = 3$, luego $a_6 = 2 \cdot 3^5 = 486$ y $S_6 = 2 \cdot \dfrac{3^6 - 1}{2} = 728$.

## 4. Notación sigma y sumas notables
La notación sigma compacta sumas:
$$\sum_{k=1}^{n} a_k = a_1 + a_2 + \cdots + a_n$$

Propiedades fundamentales:
$$\sum_{k=1}^{n}(a_k + b_k) = \sum_{k=1}^{n} a_k + \sum_{k=1}^{n} b_k, \qquad \sum_{k=1}^{n} c\,a_k = c \sum_{k=1}^{n} a_k$$

Sumas notables:
$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}, \qquad \sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}, \qquad \sum_{k=1}^{n} k^3 = \left(\frac{n(n+1)}{2}\right)^2$$

Mini-ejemplo: $\displaystyle\sum_{k=1}^{10}(3k + 2) = 3 \cdot \frac{10 \cdot 11}{2} + 2 \cdot 10 = 165 + 20 = 185$.

## 5. Inducción matemática
La inducción demuestra afirmaciones de la forma "para todo $n \geq n_0$, $P(n)$".

1. **Base:** verifica $P(n_0)$.
2. **Hipótesis inductiva:** supón $P(k)$ verdadera para un $k$ arbitrario.
3. **Paso inductivo:** demuestra $P(k+1)$ usando la hipótesis.
4. **Conclusión:** $P(n)$ vale para todo $n \geq n_0$.

Mini-ejemplo: para probar $\displaystyle\sum_{k=1}^{n}(2k-1) = n^2$, la base $n = 1$ da $1 = 1$, y el paso usa
$$k^2 + \big(2(k+1) - 1\big) = k^2 + 2k + 1 = (k+1)^2.$$

## 6. Inducción fuerte y recurrencias
En la **inducción fuerte** la hipótesis es que $P(j)$ vale para todos los $j \leq k$; se usa cuando cada caso depende de varios anteriores, como en Fibonacci.

Mini-ejemplo: las Torres de Hanói cumplen $T(n) = 2T(n-1) + 1$ con $T(1) = 1$. Iterando hacia atrás se obtiene la fórmula cerrada $T(n) = 2^n - 1$; para $n = 3$, $T(3) = 7$.

## 7. Límite de sucesiones
Una sucesión **converge** a $L$ si sus términos se acercan a $L$ tanto como se quiera para $n$ grande: $\lim_{n\to\infty} a_n = L$.

Reglas prácticas:
1. Una PG converge a $0$ si $|r| < 1$, diverge si $|r| > 1$ y es constante si $r = 1$.
2. En un cociente de polinomios manda el grado mayor: $\dfrac{3n^2 + n}{2n^2 - 5} \to \dfrac{3}{2}$.
3. Toda sucesión monótona y acotada converge.

Mini-ejemplo: $\displaystyle\lim_{n\to\infty} \frac{3n^2 + n}{2n^2 - 5} = \frac{3}{2}$.

## Ejercicios (20)
### Nivel 1 · Fundamentos
1. Escribe los cinco primeros términos de $a_n = 5n - 2$.
2. Halla $a_{12}$ en la PA $4, 9, 14, \ldots$
3. Halla $a_7$ en la PG $2, 6, 18, \ldots$
4. Escribe los cuatro primeros términos de $a_n = n^2 + 1$.
5. Calcula $\displaystyle\sum_{k=1}^{6} k$.

### Nivel 2 · Aplicación directa
6. Suma los 15 primeros términos de la PA $3, 8, 13, \ldots$
7. Calcula $1 + 2 + 4 + \cdots$ hasta 10 términos.
8. Halla la suma de la serie infinita $6 + 3 + \frac{3}{2} + \cdots$
9. Calcula $\displaystyle\sum_{k=1}^{20}(2k - 1)$.
10. Calcula $\displaystyle\sum_{k=1}^{10} k^2$.

### Nivel 3 · Intermedio
11. Calcula $\displaystyle\sum_{k=1}^{8}(3k + 1)$.
12. En una PA con $a_3 = 11$ y $d = 4$, halla $a_{10}$.
13. Suma los 12 primeros múltiplos positivos de 5.
14. Calcula $S_5$ de la PG con $a_1 = 8$ y $r = \frac{1}{2}$.
15. Prueba por inducción que $\displaystyle\sum_{k=1}^{n}(2k - 1) = n^2$.

### Nivel 4 · Desafío
16. Calcula $\displaystyle\lim_{n\to\infty} \frac{2n^2 + 3n}{n^2 - 1}$.
17. Calcula $\displaystyle\lim_{n\to\infty} \left(\frac{1}{2}\right)^n$.
18. Resuelve la recurrencia $a_1 = 2$, $a_{n+1} = 3a_n$.
19. Resuelve la recurrencia $a_1 = 5$, $a_{n+1} = a_n + 4$.
20. Halla una fórmula cerrada para $\displaystyle\sum_{k=1}^{n} \frac{1}{k(k+1)}$.

## Respuestas
1) $3, 8, 13, 18, 23$.
2) $59$.
3) $1458$.
4) $2, 5, 10, 17$.
5) $21$.
6) $570$.
7) $1023$.
8) $12$.
9) $400$.
10) $385$.
11) $116$.
12) $39$.
13) $390$.
14) $\frac{31}{2}$.
15) Bosquejo: base $1 = 1$; paso $k^2 + (2k + 1) = (k+1)^2$.
16) $2$.
17) $0$.
18) $a_n = 2 \cdot 3^{n-1}$.
19) $a_n = 4n + 1$.
20) $\frac{n}{n+1}$.
