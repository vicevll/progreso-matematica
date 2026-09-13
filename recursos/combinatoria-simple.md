# Combinatoria

La **combinatoria** estudia cómo contar colecciones finitas: de cuántas maneras pueden ordenarse, elegirse o distribuirse objetos bajo ciertas reglas. Sus herramientas —principios de conteo, permutaciones, combinaciones, inclusión-exclusión, recurrencias y funciones generadoras— son la base del cálculo de probabilidades, del análisis de algoritmos y de la teoría de números.

## Principios de conteo

El conteo se apoya en reglas simples pero potentes:

1. **Principio de la suma.** Si dos casos no pueden ocurrir a la vez y el primero se da de $m$ formas y el segundo de $n$, el total es $m + n$.
2. **Principio del producto.** Si una tarea consta de dos pasos independientes con $m$ y $n$ posibilidades, hay $mn$ formas de realizarla.
3. **Principio del palomar.** Si $n+1$ objetos se reparten en $n$ cajas, alguna caja contiene al menos dos. En general, con $kn+1$ objetos, alguna contiene al menos $k+1$.
4. **Principio de simetría.** Si cada configuración cuenta con un compañero por una biyección, basta contar una mitad y duplicar.

$$(\text{suma: casos disjuntos}) \qquad (\text{producto: pasos sucesivos})$$

**Mini-ejemplo.** Un menú con $3$ entradas, $4$ platos y $2$ postres admite $3 \cdot 4 \cdot 2 = 24$ combinaciones. Con $13$ personas, al menos dos cumplen años el mismo mes, porque solo hay $12$ meses.

**Mini-ejemplo.** Para contar los pares ordenados $(a, b)$ con $a \in \{1,2,3\}$ y $b \in \{4,5\}$ se usa el producto: $3 \cdot 2 = 6$.

## Permutaciones y combinaciones

La elección de la fórmula depende de dos preguntas: ¿importa el orden? ¿se permite repetir?

1. **Permutaciones** (importa el orden, sin repetición):
$$P(n, k) = \frac{n!}{(n-k)!}, \qquad P(n, n) = n!$$
2. **Combinaciones** (no importa el orden, sin repetición):
$$C(n, k) = \binom{n}{k} = \frac{n!}{k!(n-k)!}$$
3. **Combinaciones con repetición** (elegir $k$ de $n$ tipos, repitiendo):
$$\binom{n + k - 1}{k}$$
4. **Permutaciones con objetos repetidos** (grupos de tamaños $n_1, n_2, \ldots$):
$$\frac{n!}{n_1!\, n_2! \cdots}$$

**Mini-ejemplo.** Un podio de $8$ corredores: $P(8,3) = 8 \cdot 7 \cdot 6 = 336$. Elegir $3$ delegados de $8$: $\binom{8}{3} = 56$. Las palabras formadas con las letras de "CASA" son $\frac{4!}{2!} = 12$.

## Binomio de Newton y triángulo de Pascal

El **teorema del binomio** expande una potencia:

$$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k$$

Los coeficientes $\binom{n}{k}$ cumplen identidades fundamentales:

1. **Simetría:** $\binom{n}{k} = \binom{n}{n-k}$.
2. **Regla de Pascal:** $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$, que genera el triángulo de Pascal.
3. **Suma total:** $\displaystyle\sum_{k=0}^{n} \binom{n}{k} = 2^n$.
4. **Suma alternada:** $\displaystyle\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ para $n \geq 1$.

$$\begin{array}{ccccccc} & & & 1 & & & \\ & & 1 & & 1 & & \\ & 1 & & 2 & & 1 & \\ 1 & & 3 & & 3 & & 1 \end{array}$$

**Mini-ejemplo.** El coeficiente de $x^2$ en $(x + 2)^4$ es $\binom{4}{2} 2^2 = 6 \cdot 4 = 24$, pues $24$ cuenta las formas de elegir los dos factores que aportan el $2$.

## Principio de inclusión-exclusión

Para contar una unión se corrigen las superposiciones alternando signos:

$$|A \cup B| = |A| + |B| - |A \cap B|$$

$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$$

En general, se suman las intersecciones de tamaño impar y se restan las de tamaño par:

$$\left|\bigcup_{i=1}^{n} A_i\right| = \sum_{\emptyset \neq S \subseteq \{1,\ldots,n\}} (-1)^{|S|+1} \left|\bigcap_{i \in S} A_i\right|$$

**Mini-ejemplo.** Del $1$ al $100$, los divisibles por $3$ o $5$ son
$$\left\lfloor \frac{100}{3} \right\rfloor + \left\lfloor \frac{100}{5} \right\rfloor - \left\lfloor \frac{100}{15} \right\rfloor = 33 + 20 - 6 = 47.$$

**Mini-ejemplo.** Los **desórdenes** (permutaciones sin puntos fijos) se cuentan por inclusión-exclusión:
$$!n = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}, \qquad !4 = 9.$$

## Recurrencias

Una **recurrencia** define cada término en función de los anteriores. La **sucesión de Fibonacci** es el ejemplo canónico:

$$F_n = F_{n-1} + F_{n-2}, \qquad F_0 = 0, \; F_1 = 1$$

Para una recurrencia **lineal de orden dos** $a_n = p\,a_{n-1} + q\,a_{n-2}$ se plantea la **ecuación característica** $r^2 = p\,r + q$. Si sus raíces $r_1, r_2$ son distintas:

$$a_n = A\,r_1^{\,n} + B\,r_2^{\,n}$$

y las constantes $A, B$ se ajustan con las condiciones iniciales. Si hay una raíz doble $r$, la solución es $a_n = (A + Bn) r^n$.

**Mini-ejemplo.** Fibonacci: $r^2 = r + 1$ da $r = \dfrac{1 \pm \sqrt{5}}{2}$, y con $\varphi = \frac{1+\sqrt{5}}{2}$:
$$F_n = \frac{\varphi^n - (-\varphi)^{-n}}{\sqrt{5}}, \qquad \text{así } F_n \sim \frac{\varphi^n}{\sqrt{5}}.$$

**Mini-ejemplo.** Subir una escalera de $n$ peldaños de a uno o dos pasos sigue $a_n = a_{n-1} + a_{n-2}$ con $a_1 = 1, a_2 = 2$; para $n = 6$ hay $13$ formas.

## Funciones generadoras

Una **función generadora** empaqueta una sucesión $(a_n)$ en los coeficientes de una serie de potencias:

$$G(x) = \sum_{n=0}^{\infty} a_n x^n$$

Las operaciones sobre series reflejan operaciones sobre sucesiones: sumar corresponde a sumar sucesiones, multiplicar a la **convolución**, multiplicar por $x$ a desplazar y derivar a multiplicar $a_n$ por $n$.

1. $\dfrac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots$ (sucesión constante $1$).
2. $\dfrac{1}{(1-x)^2} = \sum_{n \geq 0} (n+1) x^n$ (coeficientes $n+1$).
3. $\dfrac{1}{1-x-x^2} = \sum_{n \geq 0} F_n x^n$ (Fibonacci).

Para contar configuraciones con restricciones se multiplican las generatrices de cada categoría y se extrae el coeficiente deseado.

**Mini-ejemplo.** Las formas de pagar $n$ céntimos con monedas de $1$ y $2$ son los coeficientes de $\dfrac{1}{(1-x)(1-x^2)}$. Para $n = 4$ hay $3$: $1+1+1+1$, $2+1+1$ y $2+2$.

**Mini-ejemplo.** El número de soluciones de $e_1 + e_2 + e_3 = 5$ con cada $e_i \in \{0,1,2\}$ es el coeficiente de $x^5$ en $(1 + x + x^2)^3$, que vale $3$.

## Ejercicios (20)

### Nivel 1 · Principios de conteo

1. Un menú tiene $4$ entradas, $5$ platos y $3$ postres. ¿Cuántos menús distintos hay?
2. ¿Cuántas cadenas de $6$ bits se pueden formar?
3. ¿Cuántos números de $2$ cifras distintas se forman con los dígitos $1$ a $9$?
4. En un grupo de $8$ personas, ¿cuántos apretones de manos hay si cada par se saluda una vez?
5. ¿Cuántos subconjuntos tiene un conjunto de $7$ elementos?

### Nivel 2 · Permutaciones y combinaciones

6. ¿De cuántas formas se ordenan $6$ libros distintos en un estante?
7. ¿Cuántos podios (primero, segundo, tercero) hay con $10$ corredores?
8. ¿Cuántos comités de $4$ personas se forman con $15$ candidatos?
9. ¿Cuántas permutaciones distintas tiene la palabra "BANANA"?
10. ¿Cuántas combinaciones con repetición de $4$ elementos tomados de $3$ tipos hay?

### Nivel 3 · Binomio y recuentos

11. Halla el coeficiente de $x^3$ en $(1 + x)^9$.
12. Halla el coeficiente de $x^2$ en $(x + 3)^5$.
13. Calcula $\displaystyle\sum_{k=0}^{5} \binom{5}{k}$.
14. Del $1$ al $150$, ¿cuántos números son divisibles por $2$ o por $5$?
15. ¿Cuántos desórdenes ($!4$) existen de $4$ elementos?

### Nivel 4 · Recurrencias y generatrices

16. Con $F_0 = 0$, $F_1 = 1$, calcula $F_8$.
17. ¿Cuántas formas hay de subir $5$ escalones de a uno o dos pasos?
18. Resuelve $a_n = 3a_{n-1} - 2a_{n-2}$ con $a_0 = 0$, $a_1 = 1$.
19. Halla el coeficiente de $x^4$ en $\dfrac{1}{1-x}$.
20. Halla el coeficiente de $x^3$ en $\dfrac{1}{(1-x)^2}$.

## Respuestas

1. $4 \cdot 5 \cdot 3 = 60$.
2. $2^6 = 64$.
3. $9 \cdot 8 = 72$ (sin repetir cifra; sin el cero).
4. $\binom{8}{2} = 28$.
5. $2^7 = 128$.
6. $6! = 720$.
7. $P(10,3) = 10 \cdot 9 \cdot 8 = 720$.
8. $\binom{15}{4} = 1365$.
9. $\dfrac{6!}{3!\,2!\,1!} = 60$.
10. $\binom{3+4-1}{4} = \binom{6}{4} = 15$.
11. $\binom{9}{3} = 84$.
12. $\binom{5}{2}3^3 = 10 \cdot 27 = 270$.
13. $2^5 = 32$.
14. $\lfloor 150/2 \rfloor + \lfloor 150/5 \rfloor - \lfloor 150/10 \rfloor = 75 + 30 - 15 = 90$.
15. $!4 = 9$.
16. $F_8 = 21$.
17. $a_1 = 1, a_2 = 2$ y $a_n = a_{n-1} + a_{n-2}$: $a_5 = 8$.
18. Raíces $1, 2$: $a_n = 2^n - 1$.
19. El coeficiente es $1$.
20. El coeficiente es $3 + 1 = 4$.
