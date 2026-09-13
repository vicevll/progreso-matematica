# Polinomios y ecuaciones

**Guía simple · Álgebra escolar y fundamentos · 10°–11° / Univ 1**
*Raíces, teorema del factor y teorema fundamental del álgebra.*

---

## 1. Grado, coeficientes y operaciones

Un polinomio es una suma finita de potencias de exponente entero no negativo:

$$P(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0, \qquad a_n \neq 0$$

El **grado** es $n$, el mayor exponente con coeficiente no nulo; $a_n$ es el **coeficiente líder** y $a_0$ el **término constante**. Se suman agrupando términos semejantes y se multiplican distribuyendo cada término. El grado del producto es la suma de los grados:

$$\deg(P \cdot Q) = \deg P + \deg Q, \qquad \deg(P + Q) \leq \max(\deg P, \deg Q)$$

**Mini-ejemplo.** $(3x^2 - 2x + 1) + (x^2 + 5x - 4) = 4x^2 + 3x - 3$ y $(x + 2)(x - 3) = x^2 - x - 6$.

---

## 2. División y regla de Ruffini

El **algoritmo de la división** da cociente y resto únicos:

$$P(x) = D(x)\,Q(x) + R(x), \qquad \deg R < \deg D$$

Si $R(x) = 0$, entonces $D$ divide a $P$. La **regla de Ruffini** divide entre $x - c$:

1. Escribe los coeficientes de $P$, incluidos los ceros de términos faltantes.
2. Baja el primero.
3. Multiplica por $c$ y suma al siguiente coeficiente.
4. Repite; el último número es el resto y los anteriores son el cociente.

**Mini-ejemplo.** Dividir $2x^3 - 5x^2 + 3x - 4$ entre $x - 2$ da coeficientes $2, -1, 1$ y resto $-2$:

$$2x^3 - 5x^2 + 3x - 4 = (x - 2)(2x^2 - x + 1) - 2$$

---

## 3. Teorema del resto y teorema del factor

**Teorema del resto.** El resto de dividir $P(x)$ entre $x - c$ es su valor en $c$:

$$R = P(c)$$

**Teorema del factor.** $x - c$ es factor de $P(x)$ si y solo si $P(c) = 0$:

$$P(c) = 0 \iff (x - c) \mid P(x)$$

Por eso **hallar raíces y factorizar son la misma tarea**. La **multiplicidad** de una raíz $c$ es el mayor $m$ tal que $(x - c)^m$ divide a $P$.

**Mini-ejemplo.** El resto de $x^4 - 3x + 5$ entre $x - 2$ es $P(2) = 16 - 6 + 5 = 15$. Y en $x^3 - 2x^2 - 5x + 6$, como $P(3) = 0$, el binomio $x - 3$ es factor.

---

## 4. Raíces racionales

Si $P$ tiene coeficientes enteros y $p/q$ es una raíz escrita en forma reducida, entonces

$$p \mid a_0, \qquad q \mid a_n$$

Esto produce una lista finita de candidatos a probar. Cada candidato que anule a $P$ aporta un factor lineal y permite bajar el grado por división sintética.

**Mini-ejemplo.** En $x^3 - 6x^2 + 11x - 6$ los candidatos son $\pm 1, \pm 2, \pm 3, \pm 6$. Como $P(1) = 0$, al dividir por $x - 1$ queda $x^2 - 5x + 6 = (x-2)(x-3)$, luego

$$x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3)$$

---

## 5. Teorema fundamental del álgebra

**Teorema fundamental del álgebra (TFA).** Todo polinomio de grado $n \geq 1$ con coeficientes complejos tiene al menos una raíz compleja.

En consecuencia, todo polinomio de grado $n$ se factoriza en factores lineales sobre $\mathbb{C}$:

$$P(z) = a_n (z - z_1)(z - z_2)\cdots(z - z_n)$$

Es decir, hay exactamente $n$ raíces contando multiplicidad. Si los coeficientes son **reales**, las raíces no reales aparecen en pares conjugados $a \pm bi$, y todo polinomio real de grado impar tiene al menos una raíz real.

**Mini-ejemplo.** $x^2 + 4 = 0$ tiene raíces $z = \pm 2i$, conjugadas entre sí.

---

## 6. Relaciones de Vieta

Los coeficientes resumen la información de las raíces. Para $x^2 + bx + c$ con raíces $r_1, r_2$:

$$r_1 + r_2 = -b, \qquad r_1 r_2 = c$$

Para $x^3 + bx^2 + cx + d$ con raíces $r_1, r_2, r_3$:

$$r_1 + r_2 + r_3 = -b, \quad r_1 r_2 + r_1 r_3 + r_2 r_3 = c, \quad r_1 r_2 r_3 = -d$$

En general, para $a_n x^n + \cdots + a_0$:

$$\sum r_i = -\frac{a_{n-1}}{a_n}, \qquad \prod r_i = (-1)^n \frac{a_0}{a_n}$$

**Mini-ejemplo.** Un polinomio mónico de grado 2 con raíces $3$ y $-5$ es $x^2 + 2x - 15$, pues $-b = 3 + (-5) = -2$ y $c = 3 \cdot (-5) = -15$.

---

## 7. Gráfica y comportamiento

- El grado y el signo del coeficiente líder fijan los extremos: grado par y líder positivo sube a ambos lados; grado impar y líder positivo baja a la izquierda y sube a la derecha.
- Cada raíz real es un corte con el eje $x$.
- En multiplicidad impar la gráfica cruza el eje; en multiplicidad par lo toca y rebota.
- Un polinomio de grado $n$ tiene a lo más $n - 1$ extremos locales.

Comportamiento en los extremos con líder positivo:

| Extremo | Grado par | Grado impar |
|---|---|---|
| $x \to -\infty$ | $+\infty$ | $-\infty$ |
| $x \to +\infty$ | $+\infty$ | $+\infty$ |

**Mini-ejemplo.** $P(x) = (x-1)^2(x+2)$ toca el eje en $x = 1$ (multiplicidad 2) y lo cruza en $x = -2$ (multiplicidad 1).

---

## Ejercicios (20)

### Nivel 1 — Grado y operaciones

1. Halla grado, coeficiente líder y término constante de $5x^4 - 3x^2 + 7x - 2$.
2. Suma $(3x^3 - 2x + 1) + (x^3 + 5x^2 - 4)$.
3. Multiplica $(2x - 3)(x^2 + 4x - 1)$.
4. Multiplica $(x^2 + 1)(x^2 - 3x + 2)$.
5. Multiplica $(x^2 - 2x + 3)(x - 4)$.

### Nivel 2 — División y Ruffini

6. Divide $x^3 + 4x^2 - 3x + 2$ entre $x + 2$.
7. Divide $x^3 - 2x^2 + 4x - 7$ entre $x - 1$.
8. Divide $2x^3 - 5x^2 + 3x - 4$ entre $x - 2$.
9. Divide $x^4 - 3x^2 + 2x - 5$ entre $x + 1$.
10. Divide $x^3 - 8$ entre $x - 2$.

### Nivel 3 — Teorema del resto y del factor

11. Halla el resto de dividir $x^4 - 3x + 5$ entre $x - 2$.
12. Halla el resto de dividir $2x^3 + 3x^2 - 4x + 1$ entre $x + 1$.
13. ¿Es $x - 3$ factor de $x^3 - 2x^2 - 5x + 6$?
14. Halla $k$ para que $x - 2$ sea factor de $x^3 + kx - 6$.
15. Factoriza $x^3 - 4x^2 + x + 6$ sabiendo que $x = -1$ es raíz.

### Nivel 4 — Raíces, factorización y Vieta

16. Factoriza completamente $x^3 - 6x^2 + 11x - 6$.
17. Resuelve $x^2 + 9 = 0$ sobre $\mathbb{C}$.
18. ¿Cuántas raíces complejas contando multiplicidad tiene $x^5 - 1$?
19. Construye el polinomio mónico de grado 2 con raíces $3$ y $-5$.
20. Verifica las relaciones de Vieta para $x^3 - 6x^2 + 11x - 6$.

---

## Respuestas

1. Grado $4$, líder $5$, constante $-2$.
2. $4x^3 + 5x^2 - 2x - 3$
3. $2x^3 + 5x^2 - 14x + 3$
4. $x^4 - 3x^3 + 3x^2 - 3x + 2$
5. $x^3 - 6x^2 + 11x - 12$
6. Cociente $x^2 + 2x - 7$, resto $16$
7. Cociente $x^2 - x + 3$, resto $-4$
8. Cociente $2x^2 - x + 1$, resto $-2$
9. Cociente $x^3 - x^2 - 2x + 4$, resto $-9$
10. Cociente $x^2 + 2x + 4$, resto $0$
11. $15$
12. $6$
13. Sí, porque $P(3) = 0$.
14. $k = -1$
15. $(x + 1)(x - 2)(x - 3)$
16. $(x - 1)(x - 2)(x - 3)$
17. $x = \pm 3i$
18. Cinco.
19. $x^2 + 2x - 15$
20. Suma $6$, productos por pares $11$, producto $6$.
