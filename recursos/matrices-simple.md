# Matrices
**Guía simple · Álgebra superior · Univ 1**
*Operaciones, determinantes, inversa y sistemas de ecuaciones.*

## 1. Qué es una matriz y cómo se lee

Una **matriz** es una tabla rectangular de números ordenada en **filas** (las líneas horizontales) y **columnas** (las líneas verticales). Cada número de la tabla se llama **entrada** o **elemento**.

$$A = \begin{pmatrix} 2 & -1 & 0 \\ 3 & 5 & 4 \end{pmatrix}$$

Los paréntesis son solo la forma estándar de encerrar matrices. La matriz $A$ tiene $2$ filas y $3$ columnas; su **tamaño** (también llamado **orden**) es $2 \times 3$ y se lee "dos por tres": siempre se escribe primero el número de filas y después el de columnas.

**Cómo se nombra cada entrada.** La entrada que está en la fila $i$ y en la columna $j$ se escribe $a_{ij}$:
- La letra mayúscula $A$ es el **nombre** de la matriz.
- En $a_{ij}$, el primer subíndice ($i$) indica la fila y el segundo ($j$) la columna. Los subíndices son etiquetas, no números que se multipliquen.
- En el ejemplo: $a_{11} = 2$, $a_{12} = -1$, $a_{13} = 0$, $a_{21} = 3$, $a_{22} = 5$ y $a_{23} = 4$.

**Símbolos que conviene conocer.**
- $\mathbb{R}^{m \times n}$ (se lee "erre $m$ por $n$") es el conjunto de todas las matrices con números reales que tienen $m$ filas y $n$ columnas.
- Una matriz es **cuadrada** si tiene igual número de filas y de columnas ($m = n$). Su **diagonal principal** está formada por las entradas $a_{11}, a_{22}, a_{33}, \ldots$
- Un **vector fila** es una matriz de tamaño $1 \times n$; un **vector columna** es una matriz de tamaño $m \times 1$.

**Mini-ejemplo.** En $B = \begin{pmatrix} 7 \\ 0 \\ -2 \end{pmatrix}$ el tamaño es $3 \times 1$ (es un vector columna) y $b_{31} = -2$.

## 2. Suma, resta y multiplicación por un escalar

Un **escalar** es simplemente un número (real) que multiplica a una matriz. Se le llama "escalar" para distinguirlo de "matriz", que es una tabla.

**Suma y resta.** Solo se pueden sumar o restar matrices del **mismo tamaño**, operando entrada con entrada: la entrada de la fila $i$ y columna $j$ del resultado es la suma (o resta) de las entradas que ocupan esa misma posición.

$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1+5 & 2+6 \\ 3+7 & 4+8 \end{pmatrix} = \begin{pmatrix} 6 & 8 \\ 10 & 12 \end{pmatrix}$$

La **opuesta** de $A$, escrita $-A$, es la matriz que cambia el signo de todas las entradas; así, $A - B$ se calcula como $A + (-B)$.

**Multiplicación por un escalar.** Se multiplica cada entrada por ese número:

$$-2 \cdot \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} -2 & -4 \\ -6 & -8 \end{pmatrix}$$

**La matriz nula** $O$ es la matriz (del tamaño adecuado) con todas sus entradas iguales a $0$. Cumple $A + O = A$: es el "cero" de las matrices.

**Propiedades.** $A + B = B + A$; $(A + B) + C = A + (B + C)$; $k(A + B) = kA + kB$; $(k + l)A = kA + lA$; $k(lA) = (kl)A$; $1 \cdot A = A$.

**Mini-ejemplo.** $2\begin{pmatrix} 1 & 0 \\ 2 & -1 \end{pmatrix} - \begin{pmatrix} 3 & 2 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 4 & -2 \end{pmatrix} - \begin{pmatrix} 3 & 2 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} -1 & -2 \\ 4 & -3 \end{pmatrix}$.

## 3. Producto de matrices: la regla de fila por columna

Multiplicar matrices **no** es multiplicar entrada con entrada. Se usa la regla **fila por columna**: se toma cada fila de la primera matriz y cada columna de la segunda, se multiplican las entradas correspondientes y se suman los productos.

**Condición de tamaño.** El producto $AB$ solo existe si el número de **columnas** de $A$ coincide con el número de **filas** de $B$. Si $A$ es de tamaño $m \times n$ y $B$ es de tamaño $n \times p$, entonces $AB$ tiene tamaño $m \times p$ (las medidas interiores $n$ deben coincidir).

**Fórmula.** La entrada de la fila $i$ y columna $j$ del producto $AB$ es

$$(AB)_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}$$

**Cómo leerla.** $(AB)_{ij}$ es el número que queda en la fila $i$, columna $j$ de $AB$. El símbolo $\sum_{k=1}^{n}$ significa "sumar para $k$ desde $1$ hasta $n$". Es decir: se multiplica la primera entrada de la fila $i$ de $A$ por la primera de la columna $j$ de $B$, la segunda por la segunda, y así hasta el final; después se suman todos los productos.

**Ejemplo paso a paso.**

$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1\cdot 5 + 2\cdot 7 & 1\cdot 6 + 2\cdot 8 \\ 3\cdot 5 + 4\cdot 7 & 3\cdot 6 + 4\cdot 8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}$$

**Aviso importante.** $AB$ y $BA$ pueden ser distintos: la multiplicación de matrices **no es conmutativa**. Un caso particular del producto es el **producto matriz por vector columna**, que da como resultado otro vector columna.

## 4. Matriz identidad e inversa

La **matriz identidad** $I_n$ es la matriz cuadrada de tamaño $n \times n$ con $1$ en la diagonal principal y $0$ en todas las demás entradas:

$$I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \qquad I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

Es el "uno" de las matrices: cumple $A I_n = I_n A = A$ para toda $A$ cuadrada del tamaño adecuado.

La **inversa** de una matriz cuadrada $A$ es otra matriz, escrita $A^{-1}$ (se lee "$A$ inversa"), que cumple

$$A A^{-1} = A^{-1} A = I$$

No todas las matrices tienen inversa. Si existe, se dice que $A$ es **invertible** o **no singular**; si no existe, se dice que es **singular**.

Para matrices $2 \times 2$ hay una fórmula directa. Si $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ y $\det(A) = ad - bc \neq 0$, entonces

$$A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

**Cómo leerla.** Se intercambian las entradas de la diagonal principal ($a$ y $d$), se cambian los signos de las otras dos ($b$ y $c$) y todo se divide entre el número $ad - bc$, llamado **determinante** de $A$. Si $ad - bc = 0$ no se puede dividir y la inversa no existe.

**Mini-ejemplo.** Para $A = \begin{pmatrix} 4 & 2 \\ 1 & 3 \end{pmatrix}$: $ad - bc = 4\cdot 3 - 2\cdot 1 = 10 \neq 0$, luego $A^{-1} = \frac{1}{10}\begin{pmatrix} 3 & -2 \\ -1 & 4 \end{pmatrix}$.

## 5. Determinantes

El **determinante** es un número que se calcula a partir de una matriz **cuadrada**. Se escribe $\det(A)$, o también $|A|$, y permite saber si la matriz tiene inversa.

Para $2 \times 2$:

$$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$$

es decir, producto de la diagonal principal menos producto de la otra diagonal.

Para $3 \times 3$ se usa la **regla de Sarrus**:

$$\det\begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix} = aei + bfg + cdh - ceg - bdi - afh$$

Las tres diagonales que "bajan" (de izquierda a derecha) suman y las tres que "suben" restan.

**Propiedades clave.**
1. $\det(AB) = \det(A)\det(B)$.
2. $\det(I_n) = 1$.
3. Si una fila (o columna) es múltiplo de otra, o es nula, el determinante vale $0$.
4. El determinante de una matriz triangular (con $0$ a un lado de la diagonal) es el producto de su diagonal.
5. $\det(A) \neq 0$ si y solo si $A$ es invertible.

**Mini-ejemplo.**

$$\det\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix} = 1\cdot 1\cdot 0 + 2\cdot 4\cdot 5 + 3\cdot 0\cdot 6 - 3\cdot 1\cdot 5 - 2\cdot 0\cdot 0 - 1\cdot 4\cdot 6 = 0 + 40 + 0 - 15 - 0 - 24 = 1$$

## 6. Sistemas de ecuaciones y eliminación de Gauss

Un sistema de ecuaciones lineales se puede escribir en forma matricial. Por ejemplo:

$$\begin{cases} 2x + y = 5 \\ x - 3y = -1 \end{cases} \quad \Longleftrightarrow \quad \begin{pmatrix} 2 & 1 \\ 1 & -3 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ -1 \end{pmatrix}$$

**Cómo leer esto.** La matriz guarda los **coeficientes** (los números que multiplican a las incógnitas); el vector columna de la izquierda guarda las **incógnitas** $x$ e $y$; y el vector columna de la derecha guarda los **términos independientes** (los números que están solos al otro lado del signo $=$). Al multiplicar, se recuperan exactamente las dos ecuaciones. En general, un sistema se escribe $A\mathbf{x} = \mathbf{b}$.

**Matriz ampliada.** Es la tabla que reúne la matriz de coeficientes y la columna de términos independientes, separadas por una línea vertical:

$$\left(\begin{array}{cc|c} 2 & 1 & 5 \\ 1 & -3 & -1 \end{array}\right)$$

**Método de Gauss.** Consiste en transformar la matriz ampliada con tres **operaciones elementales**, que no cambian la solución del sistema:
1. Intercambiar dos filas.
2. Multiplicar una fila por un número distinto de $0$.
3. Sumar a una fila un múltiplo de otra fila.

El objetivo es llegar a la **forma escalonada** (cada fila empieza más a la derecha que la anterior) y después despejar las incógnitas de abajo hacia arriba (**sustitución hacia atrás**).

**Ejemplo completo.** Partiendo de la matriz ampliada anterior:

$$\left(\begin{array}{cc|c} 2 & 1 & 5 \\ 1 & -3 & -1 \end{array}\right) \longrightarrow \left(\begin{array}{cc|c} 1 & -3 & -1 \\ 2 & 1 & 5 \end{array}\right) \longrightarrow \left(\begin{array}{cc|c} 1 & -3 & -1 \\ 0 & 7 & 7 \end{array}\right)$$

Primero se intercambiaron las dos filas; después se restó $2$ veces la primera fila a la segunda. De la última fila se lee $7y = 7$, luego $y = 1$. Sustituyendo en la primera: $x - 3(1) = -1$, luego $x = 2$. La solución es $(x, y) = (2, 1)$.

## 7. Rango y clasificación de sistemas

El **rango** de una matriz es el número de filas no nulas que quedan después de aplicarle Gauss. También se interpreta como el número de filas (o columnas) **independientes**, es decir, que no se pueden obtener sumando múltiplos de las otras. Indica cuánta información distinta contiene la matriz. Se escribe $\text{rango}(A)$.

Para un sistema $A\mathbf{x} = \mathbf{b}$ con $n$ incógnitas se comparan el rango de $A$ y el rango de la **matriz ampliada** $(A \mid b)$ (coeficientes y términos independientes juntos):

| Situación | Qué ocurre | Tipo de sistema |
| --- | --- | --- |
| $\text{rango}(A) = \text{rango}(A \mid b) = n$ | una única solución | compatible determinado |
| $\text{rango}(A) = \text{rango}(A \mid b) < n$ | infinitas soluciones | compatible indeterminado |
| $\text{rango}(A) < \text{rango}(A \mid b)$ | ninguna solución | incompatible |

**Interpretación.** Compatible significa "con solución"; incompatible, "sin solución". En un sistema incompatible, al escalonar aparece una fila imposible del tipo $0 = c$ con $c \neq 0$, como ocurre con $x + y = 1$ y $x + y = 3$ (dos rectas paralelas). Cuando hay **infinitas soluciones** quedan incógnitas libres, llamadas **parámetros**: por ejemplo, de $x + y = 4$ se obtiene $y = 4 - x$ y se escribe $x = t$, $y = 4 - t$.

**Mini-ejemplo.** En $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 0 & 1 & 0 \end{pmatrix}$ la segunda fila es el doble de la primera, así que al restarle $2$ veces la primera fila se anula; quedan dos filas no nulas, luego el rango es $2$.

## Ejercicios (20)

### Nivel 1 — Fundamentos

1. Escribe el tamaño de $A = \begin{pmatrix} 2 & -1 & 0 \\ 3 & 5 & 4 \end{pmatrix}$ e indica los valores de $a_{12}$ y $a_{23}$.
2. Suma $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 0 & -1 \\ 5 & 2 \end{pmatrix}$.
3. Calcula $3\begin{pmatrix} 2 & -1 \\ 0 & 4 \end{pmatrix}$.
4. Halla el determinante de $\begin{pmatrix} 3 & 5 \\ 2 & 4 \end{pmatrix}$.
5. ¿Es invertible $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$? Justifica con el determinante.

### Nivel 2 — Operaciones

6. Multiplica $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ 1 & 5 \end{pmatrix}$.
7. Calcula $2A - B$ con $A = \begin{pmatrix} 1 & 0 \\ 2 & -1 \end{pmatrix}$ y $B = \begin{pmatrix} 3 & 2 \\ 0 & 1 \end{pmatrix}$.
8. Halla la inversa de $\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$.
9. Calcula $\det\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$.
10. Calcula $\begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}\begin{pmatrix} 4 \\ 2 \end{pmatrix}$.

### Nivel 3 — Determinantes, inversa y Gauss

11. Resuelve por Gauss: $x + y = 4$, $2x - y = 5$.
12. Resuelve por Gauss: $2x + y = 5$, $x - 3y = -1$.
13. Halla la inversa de $\begin{pmatrix} 4 & 2 \\ 1 & 3 \end{pmatrix}$.
14. Halla el rango de $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 0 & 1 & 0 \end{pmatrix}$.
15. Resuelve: $x + y + z = 6$, $2x - y + z = 3$, $x + 2y - z = 2$.

### Nivel 4 — Aplicaciones y clasificación

16. La matriz $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ transforma cada punto $(x, y)$ en $(-y, x)$ (rotación de $90^\circ$). Aplícala al punto $(3, 1)$.
17. Las notas de 3 estudiantes en 2 pruebas son las filas de $N = \begin{pmatrix} 70 & 80 \\ 60 & 90 \\ 100 & 50 \end{pmatrix}$. Multiplícala por el vector de pesos $\begin{pmatrix} 0.4 \\ 0.6 \end{pmatrix}$ para obtener la nota final de cada estudiante.
18. ¿Para qué valor de $k$ la matriz $\begin{pmatrix} k & 2 \\ 8 & 4 \end{pmatrix}$ no tiene inversa?
19. Un puesto vende café a 2 dólares y té a 3 dólares. Un día vendió 40 bebidas y recaudó 106 dólares. Plantea el sistema y resuélvelo por Gauss.
20. Clasifica el sistema $2x + y = 4$, $4x + 2y = 8$ y, si tiene soluciones, escríbelas.

## Respuestas

1. Tamaño $2 \times 3$; $a_{12} = -1$; $a_{23} = 4$.
2. $\begin{pmatrix} 1 & 1 \\ 8 & 6 \end{pmatrix}$.
3. $\begin{pmatrix} 6 & -3 \\ 0 & 12 \end{pmatrix}$.
4. $2$.
5. No: $\det = 0$.
6. $\begin{pmatrix} 4 & 10 \\ 10 & 20 \end{pmatrix}$.
7. $\begin{pmatrix} -1 & -2 \\ 4 & -3 \end{pmatrix}$.
8. $\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$.
9. $1$.
10. $\begin{pmatrix} 10 \\ 6 \end{pmatrix}$.
11. $x = 3$, $y = 1$.
12. $x = 2$, $y = 1$.
13. $\frac{1}{10}\begin{pmatrix} 3 & -2 \\ -1 & 4 \end{pmatrix}$.
14. $2$.
15. $x = 1$, $y = 2$, $z = 3$.
16. $(-1, 3)$.
17. $\begin{pmatrix} 76 \\ 78 \\ 70 \end{pmatrix}$, es decir, $76$, $78$ y $70$.
18. $k = 4$.
19. $c + t = 40$, $2c + 3t = 106$; café $c = 14$, té $t = 26$.
20. Compatible indeterminado; $x = t$, $y = 4 - 2t$ con $t \in \mathbb{R}$.
