# Matemática discreta

La **matemática discreta** estudia estructuras finitas o numerables: el álgebra de los valores lógicos, los circuitos digitales, las sucesiones definidas por recurrencia, el conteo mediante series y el costo de los algoritmos. Su vocabulario (funciones booleanas, recurrencias, notación $O$) es la base del análisis de algoritmos y del diseño de hardware.

## Álgebra booleana

El **álgebra booleana** opera con dos valores $\{0, 1\}$ y las operaciones AND ($\land$), OR ($\lor$) y NOT ($\neg$):

1. $x \land y = 1$ solo si ambos valen $1$.
2. $x \lor y = 1$ si al menos uno vale $1$.
3. $\neg x$ invierte el valor.

**Leyes fundamentales:**

1. **Conmutativas:** $x \land y = y \land x$, $x \lor y = y \lor x$.
2. **Asociativas:** $(x \land y) \land z = x \land (y \land z)$.
3. **Distributivas:** $x \land (y \lor z) = (x \land y) \lor (x \land z)$.
4. **Identidad:** $x \land 1 = x$, $x \lor 0 = x$.
5. **Complemento:** $x \land \neg x = 0$, $x \lor \neg x = 1$.
6. **Absorción:** $x \lor (x \land y) = x$, $x \land (x \lor y) = x$.
7. **De Morgan:**
$$\neg(x \land y) = \neg x \lor \neg y, \qquad \neg(x \lor y) = \neg x \land \neg y$$

**Formas canónicas.** Toda función booleana se expresa como **suma de productos** (minitérminos) o como **producto de sumas** (maxitérminos). Es la representación que alimenta el diseño digital.

**Mini-ejemplo.** $x \land (y \lor \neg x) = (x \land y) \lor (x \land \neg x) = (x \land y) \lor 0 = x \land y$.

## Circuitos lógicos

Las compuertas AND, OR y NOT —junto con NAND, NOR y XOR— implementan las operaciones booleanas. Todo circuito combina compuertas para calcular una función; la expresión resultante es una proposición y verificar equivalencia de circuitos es demostrar equivalencia lógica.

**Compuertas universales.** NAND y NOR pueden construir todas las demás (incluida NOT), por lo que son la base de los chips reales; minimizar compuertas ahorra área y energía.

**Minimización.** El **mapa de Karnaugh** agrupa unos adyacentes en potencias de dos para simplificar expresiones. Cuantas menos compuertas, más rápido y barato el circuito.

**Mini-ejemplo (mayoría de 3 bits).** La función que da $1$ cuando al menos dos de $x, y, z$ son $1$ es
$$M = (x \land y) \lor (x \land z) \lor (y \land z)$$
y su tabla de verdad tiene cuatro filas con salida $1$.

## Recurrencias lineales

Una **recurrencia** define cada término a partir de los anteriores. Se dice **lineal de orden $k$** si
$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \cdots + c_k a_{n-k}$$
y se resuelve con la **ecuación característica** $r^k = c_1 r^{k-1} + \cdots + c_k$:

1. **Raíces distintas** $r_1, \ldots, r_k$: $a_n = \sum_i A_i r_i^n$.
2. **Raíz repetida** de multiplicidad $m$: multiplicar por potencias de $n$ (por ejemplo $(A + Bn) r^n$).
3. **No homogénea:** sumar una solución particular a la homogénea.

Las constantes $A_i$ se ajustan con las condiciones iniciales.

**Mini-ejemplo (Torres de Hanói).** $T(n) = 2T(n-1) + 1$ con $T(1) = 1$ tiene solución cerrada
$$T(n) = 2^n - 1$$
Con $64$ discos serían $2^{64} - 1 \approx 1.8 \times 10^{19}$ movimientos.

**Mini-ejemplo (Fibonacci).** $F_n = F_{n-1} + F_{n-2}$ con $F_0 = 0$, $F_1 = 1$ tiene ecuación $r^2 = r + 1$, cuyas raíces dan el número áureo $\varphi = \frac{1+\sqrt{5}}{2}$ y
$$F_n = \frac{\varphi^n - (-\varphi)^{-n}}{\sqrt{5}}$$
de modo que $F_n$ crece como $\varphi^n / \sqrt{5}$.

## Funciones generadoras

Una **función generadora** codifica una sucesión $(a_n)$ como los coeficientes de una serie de potencias:
$$G(x) = \sum_{n \geq 0} a_n x^n$$

**Operaciones.** La suma de sucesiones corresponde a la suma de series; la **convolución** $(a * b)_n = \sum_{k} a_k b_{n-k}$ corresponde al producto; multiplicar por $x$ **desplaza** la sucesión; derivar multiplica $a_n$ por $n$.

**Series clave:**
$$\frac{1}{1-x} = \sum_{n\geq 0} x^n, \qquad \frac{1}{(1-x)^2} = \sum_{n\geq 0} (n+1)x^n, \qquad \frac{1}{1-x-x^2} = \sum_{n\geq 0} F_n x^n$$

**Mini-ejemplo (pago con monedas).** El número de formas de pagar $n$ céntimos con monedas de $1$ y $2$ es el coeficiente de $x^n$ en
$$\frac{1}{(1-x)(1-x^2)}$$
Para $n = 5$ hay $3$ formas: $1+1+1+1+1$, $1+1+1+2$ y $1+2+2$.

## Inducción fuerte y recursión

La **inducción fuerte** demuestra $P(n)$ suponiendo $P(j)$ para **todo** $j$ con $j \leq k$ (o $j < n$) y probando $P(k+1)$. Es la herramienta natural para validar recurrencias, factorizaciones y algoritmos recursivos.

**Mini-ejemplo (factorización).** Todo entero $n \geq 2$ es primo o producto de primos. Si $n$ es primo, listo; si $n = ab$ con $a, b < n$, por inducción fuerte ambos se factorizan y multiplicándolas se factoriza $n$.

**Recursión en computación.** Una función se llama a sí misma con **casos base**. La inducción demuestra su correctitud: la hipótesis inductiva hace el papel de la hipótesis de recursión.

**Mini-ejemplo (búsqueda binaria).** $T(n) = T(n/2) + 1$ con $T(1) = 1$ da $T(n) = \log_2 n$, por lo que la búsqueda binaria es $O(\log n)$.

## Complejidad y teorema maestro

La **notación $O$** describe el crecimiento asintótico:
$$f(n) = O(g(n)) \iff \exists\, c > 0,\ n_0 : \ f(n) \leq c\,g(n) \ \ \forall n \geq n_0$$

**Jerarquía de crecimiento:**
$$O(1) < O(\log n) < O(n) < O(n \log n) < O(n^2) < O(2^n) < O(n!)$$

**Teorema maestro.** Para $T(n) = a\,T(n/b) + f(n)$ con $a \geq 1$ y $b > 1$, se compara $f(n)$ con $n^{\log_b a}$:

1. Si $f(n) = O(n^{\log_b a - \varepsilon})$: $T(n) = \Theta(n^{\log_b a})$.
2. Si $f(n) = \Theta(n^{\log_b a})$: $T(n) = \Theta(n^{\log_b a}\log n)$.
3. Si $f(n) = \Omega(n^{\log_b a + \varepsilon})$ con regularidad: $T(n) = \Theta(f(n))$.

**Mini-ejemplo (mergesort).** $T(n) = 2T(n/2) + O(n)$: aquí $\log_b a = \log_2 2 = 1$, cae en el caso 2, luego $T(n) = O(n \log n)$.

**Mini-ejemplo (bucles).** Dos bucles anidados sobre $n$ elementos dan $O(n^2)$; tres anidados, $O(n^3)$; un bucle con paso doble, $O(\log n)$.

## Ejercicios (20)

### Nivel 1 · Álgebra booleana y circuitos

1. Simplifica $x \lor (x \land y)$.
2. Simplifica $\neg(\neg x \lor y) \lor x$.
3. Aplica De Morgan a $\neg(x \land \neg y)$.
4. Evalúa $1 \land (0 \lor 1)$.
5. ¿Qué compuerta es universal además de NAND?

### Nivel 2 · Recurrencias

6. Resuelve $a_n = 2a_{n-1} + 1$ con $a_0 = 0$.
7. Resuelve $a_n = 3a_{n-1}$ con $a_0 = 2$.
8. ¿Cuántos movimientos mueven $10$ discos en las Torres de Hanói?
9. Con $F_0 = 0$, $F_1 = 1$, calcula $F_6$.
10. Halla la ecuación característica de $a_n = 5a_{n-1} - 6a_{n-2}$.

### Nivel 3 · Funciones generadoras e inducción

11. Halla el coeficiente de $x^3$ en $\dfrac{1}{(1-x)^2}$.
12. Halla el coeficiente de $x^4$ en $\dfrac{1}{1-x}$.
13. ¿Cuántas formas hay de pagar $5$ céntimos con monedas de $1$ y $2$?
14. ¿Qué sucesión generan los coeficientes de $\dfrac{1}{(1-x)^2}$?
15. En la inducción fuerte que factoriza $n$, ¿cuál es la hipótesis inductiva?

### Nivel 4 · Complejidad y teorema maestro

16. Complejidad de un bucle de $1$ a $n$ con paso doble.
17. Complejidad de dos bucles anidados sobre $n$.
18. Aplica el teorema maestro a $T(n) = 4T(n/2) + n$.
19. Aplica el teorema maestro a $T(n) = 2T(n/2) + n$.
20. Ordena de menor a mayor: $O(n^2)$, $O(\log n)$, $O(n\log n)$, $O(1)$.

## Respuestas

1. $x$ (ley de absorción).
2. $x$.
3. $\neg x \lor y$.
4. $1$.
5. NOR.
6. $a_n = 2^n - 1$.
7. $a_n = 2 \cdot 3^n$.
8. $2^{10} - 1 = 1023$ movimientos.
9. $F_6 = 8$.
10. $r^2 - 5r + 6 = 0$, con raíces $r = 2$ y $r = 3$.
11. Coeficiente $4$, pues $\dfrac{1}{(1-x)^2} = \sum (n+1)x^n$.
12. Coeficiente $1$.
13. $3$ formas.
14. La sucesión $1, 2, 3, 4, \ldots$, es decir $a_n = n + 1$.
15. Que todo $j$ con $2 \leq j < n$ es primo o producto de primos.
16. $O(\log n)$.
17. $O(n^2)$.
18. $O(n^2)$, porque $\log_2 4 = 2 > 1$ (caso 1).
19. $O(n\log n)$, porque $\log_2 2 = 1$ (caso 2).
20. $O(1) < O(\log n) < O(n\log n) < O(n^2)$.
