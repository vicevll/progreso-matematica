# Teoría de números

Área: **Matemática discreta y fundamentos** · Nivel: **Univ 3–4** · Divisibilidad, congruencias, primos y criptografía.

## Divisibilidad y algoritmo de Euclides

Dados $a, b \in \mathbb{Z}$ con $a \neq 0$, se dice que $a$ **divide** a $b$, escrito $a \mid b$, si existe $k \in \mathbb{Z}$ tal que $b = ak$. Si no existe tal $k$, se escribe $a \nmid b$.

**Propiedades.** Si $a \mid b$ y $a \mid c$, entonces $a \mid (bx + cy)$ para todo $x, y \in \mathbb{Z}$. También $a \mid b$ y $b \mid a$ implican $a = \pm b$. La relación $\mid$ es reflexiva y transitiva en $\mathbb{N}$.

**División euclídea.** Para $a \in \mathbb{Z}$ y $b > 0$ existen únicos $q, r \in \mathbb{Z}$ con
$$a = bq + r, \qquad 0 \leq r < b.$$

**Algoritmo de Euclides.** El máximo común divisor se calcula con la recurrencia
$$\text{mcd}(a, b) = \text{mcd}(b, r),$$
donde $r$ es el resto de dividir $a$ entre $b$. Se repite hasta obtener resto $0$; el último resto no nulo es $\text{mcd}(a, b)$.

**Identidad de Bézout.** Existen enteros $x, y$ (llamados coeficientes de Bézout) con
$$ax + by = \text{mcd}(a, b).$$
Se obtienen despejando los restos hacia atrás.

**Mini-ejemplo.** $\text{mcd}(252, 105)$: como $252 = 2 \cdot 105 + 42$, $105 = 2 \cdot 42 + 21$ y $42 = 2 \cdot 21 + 0$, se tiene $\text{mcd} = 21$. Además $21 = 105 - 2 \cdot 42 = 105 - 2(252 - 2 \cdot 105) = 5 \cdot 105 - 2 \cdot 252$.

## Primos y factorización única

Un entero $p > 1$ es **primo** si sus únicos divisores positivos son $1$ y $p$. Si $p > 1$ no es primo, se llama **compuesto**. Los primeros primos son $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$.

**Lema de Euclides.** Si $p$ es primo y $p \mid ab$, entonces $p \mid a$ o $p \mid b$.

**Teorema fundamental de la aritmética.** Todo entero $n > 1$ se escribe de forma única, salvo el orden, como
$$n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k},$$
con $p_i$ primos distintos y $e_i \geq 1$.

**Número de divisores.** Si $n = p_1^{e_1} \cdots p_k^{e_k}$, el número de divisores positivos es
$$d(n) = (e_1 + 1)(e_2 + 1) \cdots (e_k + 1).$$

**Infinidad de primos (Euclides).** Si existieran solo $p_1, \ldots, p_n$, el número $N = p_1 p_2 \cdots p_n + 1$ no es divisible por ninguno de ellos, contradicción.

**Mini-ejemplo.** $360 = 2^3 \cdot 3^2 \cdot 5$, luego $d(360) = (3+1)(2+1)(1+1) = 24$.

## Congruencias y aritmética modular

Se dice que $a$ es **congruente** con $b$ módulo $n$, escrito $a \equiv b \pmod n$, si $n \mid (a - b)$. La congruencia es una relación de equivalencia y define $n$ clases de residuos módulo $n$.

**Compatibilidad.** Si $a \equiv b \pmod n$ y $c \equiv d \pmod n$, entonces
$$a + c \equiv b + d \pmod n, \qquad ac \equiv bd \pmod n, \qquad a^k \equiv b^k \pmod n.$$

**Inverso modular.** $a$ tiene inverso módulo $n$ si y solo si $\text{mcd}(a, n) = 1$. El inverso se calcula con Bézout: si $ax + ny = 1$, entonces $a^{-1} \equiv x \pmod n$.

**Cancelación.** De $ac \equiv bc \pmod n$ se puede cancelar $c$ solo si $\text{mcd}(c, n) = 1$.

**Mini-ejemplo.** $4x \equiv 1 \pmod 7$: como $4 \cdot 2 = 8 \equiv 1$, el inverso de $4$ es $2$ y $x \equiv 2 \pmod 7$.

## Teoremas de Fermat y Euler

**Función de Euler.** $\varphi(n)$ es el número de enteros entre $1$ y $n$ coprimos con $n$. Si $n = p_1^{e_1} \cdots p_k^{e_k}$, entonces
$$\varphi(n) = n \prod_{i=1}^{k} \left( 1 - \frac{1}{p_i} \right).$$
En particular, para $p$ primo, $\varphi(p) = p - 1$.

**Pequeño teorema de Fermat.** Si $p$ es primo y $\text{mcd}(a, p) = 1$, entonces
$$a^{p-1} \equiv 1 \pmod p.$$

**Teorema de Euler.** Si $\text{mcd}(a, n) = 1$, entonces
$$a^{\varphi(n)} \equiv 1 \pmod n.$$

El teorema de Euler generaliza al de Fermat, pues $\varphi(p) = p - 1$.

**Mini-ejemplo.** $3^{100} \bmod 7$: como $\varphi(7) = 6$ y $100 = 6 \cdot 16 + 4$, se tiene $3^{100} \equiv 3^4 = 81 \equiv 4 \pmod 7$.

## Teorema chino del resto

**Teorema.** Si $m_1, \ldots, m_k$ son coprimos dos a dos, el sistema
$$x \equiv a_1 \pmod{m_1}, \quad \ldots, \quad x \equiv a_k \pmod{m_k}$$
tiene solución única módulo $M = m_1 m_2 \cdots m_k$.

**Método de construcción.** Con $M_i = M/m_i$ y $y_i$ el inverso de $M_i$ módulo $m_i$, la solución es
$$x \equiv \sum_{i=1}^{k} a_i M_i y_i \pmod M.$$

**Mini-ejemplo.** Resolver $x \equiv 2 \pmod 3$ y $x \equiv 3 \pmod 5$. Los candidatos $x \equiv 2, 5, 8 \pmod{15}$; el que cumple $x \equiv 3 \pmod 5$ es $8$. Solución: $x \equiv 8 \pmod{15}$.

## Ecuaciones diofánticas

Una **ecuación diofántica** es una ecuación cuyas soluciones se buscan en $\mathbb{Z}$. La lineal de dos variables es
$$ax + by = c.$$

**Teorema.** La ecuación $ax + by = c$ tiene solución entera si y solo si $\text{mcd}(a, b) \mid c$.

**Solución general.** Si $(x_0, y_0)$ es una solución particular y $d = \text{mcd}(a, b)$, entonces todas las soluciones son
$$x = x_0 + \frac{b}{d} t, \qquad y = y_0 - \frac{a}{d} t, \qquad t \in \mathbb{Z}.$$

**Mini-ejemplo.** $6x + 15y = 9$: como $\text{mcd}(6, 15) = 3$ divide a $9$, hay soluciones. Dividiendo entre $3$ queda $2x + 5y = 3$, con solución particular $(9, -3)$; la familia es $x = 9 + 5t$, $y = -3 - 2t$.

## Reciprocidad cuadrática (panorama)

Sea $p$ primo impar. Un entero $a$ con $\text{mcd}(a, p) = 1$ es un **residuo cuadrático** módulo $p$ si existe $x$ con $x^2 \equiv a \pmod p$. El **símbolo de Legendre** se define como
$$\left( \frac{a}{p} \right) = \begin{cases} 1 & \text{si } a \text{ es residuo cuadrático}, \\ -1 & \text{si no lo es}. \end{cases}$$

**Criterio de Euler.** $\left( \frac{a}{p} \right) \equiv a^{(p-1)/2} \pmod p$.

**Ley de reciprocidad cuadrática (Gauss).** Para primos impares distintos $p, q$,
$$\left( \frac{p}{q} \right) \left( \frac{q}{p} \right) = (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}}.$$

Los **suplementos** son $\left( \frac{-1}{p} \right) = (-1)^{(p-1)/2}$ y $\left( \frac{2}{p} \right) = (-1)^{(p^2-1)/8}$.

**Mini-ejemplo.** ¿Es $5$ residuo cuadrático módulo $13$? Como $5^2 = 25 \equiv 12 \equiv -1$ no, pero $4^2 = 16 \equiv 3$; probando los cuadrados $1, 4, 9, 3, 12, 10$ no aparece $5$, luego $\left( \frac{5}{13} \right) = -1$.

## Ejercicios (20)

### Nivel 1 · Básico

1. Calcula $\text{mcd}(48, 36)$.
2. ¿Es primo el número $91$? Justifica.
3. Calcula $17 \bmod 5$.
4. ¿Cuántos divisores positivos tiene $72$?
5. Resuelve $x \equiv 3 \pmod 7$ con $0 \leq x < 7$.

### Nivel 2 · Intermedio

6. Calcula $\text{mcd}(252, 198)$ con el algoritmo de Euclides.
7. Expresa $\text{mcd}(48, 18)$ como combinación de Bézout.
8. Factoriza $300$ y calcula $\varphi(300)$.
9. Resuelve $5x \equiv 1 \pmod{13}$.
10. Calcula $\varphi(36)$.

### Nivel 3 · Avanzado

11. Calcula $3^{2025} \bmod 7$.
12. Resuelve $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$, $x \equiv 2 \pmod 7$.
13. Halla la solución general de $6x + 15y = 9$.
14. Resuelve $7x \equiv 3 \pmod{10}$.
15. ¿Tiene solución $4x \equiv 6 \pmod 8$? Justifica.

### Nivel 4 · Aplicación

16. En RSA con $p = 5$, $q = 11$ y $e = 3$, calcula $n$, $\varphi(n)$ y $d$.
17. Con $n = 55$ y $e = 3$, cifra el mensaje $m = 9$. ¿Cuál es el criptograma $c$?
18. Un evento ocurre cada $4$ días y otro cada $7$; hoy coinciden. ¿En cuántos días vuelven a coincidir?
19. ¿Cuántos primos hay menores que $30$?
20. Verifica que $341$ es pseudoprimo de base $2$ y explica por qué es compuesto.

## Respuestas

1. $12$.
2. No: $91 = 7 \cdot 13$.
3. $2$.
4. $72 = 2^3 \cdot 3^2$, luego $12$ divisores.
5. $x = 3$.
6. $18$, pues $252 = 198 + 54$, $198 = 3 \cdot 54 + 36$, $54 = 36 + 18$, $36 = 2 \cdot 18$.
7. $6 = 3 \cdot 18 - 48$.
8. $300 = 2^2 \cdot 3 \cdot 5^2$ y $\varphi(300) = 80$.
9. $x \equiv 8 \pmod{13}$.
10. $12$.
11. $3^{2025} \equiv 3^3 = 27 \equiv 6 \pmod 7$.
12. $x \equiv 23 \pmod{105}$.
13. $x = 9 + 5t$, $y = -3 - 2t$, con $t \in \mathbb{Z}$.
14. $x \equiv 9 \pmod{10}$.
15. No: $\text{mcd}(4, 8) = 4$ no divide a $6$.
16. $n = 55$, $\varphi(55) = 40$ y $d = 27$.
17. $c = 9^3 \bmod 55 = 729 \bmod 55 = 14$.
18. $\text{mcm}(4, 7) = 28$ días.
19. $10$ primos: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$.
20. $2^{340} \equiv 1 \pmod{341}$, pero $341 = 11 \cdot 31$, así que es compuesto (pseudoprimo de base $2$).
