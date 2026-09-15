window.CURSOS = window.CURSOS || {};
window.CURSOS["algebra-superior"] = {
  "matrices": String.raw`
## ¿Qué es una matriz y para qué sirve?
Una **matriz** es una tabla rectangular de números ordenada en **filas** (horizontales) y **columnas** (verticales). Por ejemplo:

$$A = \begin{pmatrix} 2 & -1 \\ 0 & 3 \end{pmatrix}$$

Esta matriz tiene **2 filas y 2 columnas**, por eso se dice que es de tamaño $2 \times 2$ (se lee "dos por dos": primero filas, luego columnas). El número que está en la fila $i$ y la columna $j$ se escribe $a_{ij}$. En el ejemplo, $a_{11} = 2$, $a_{12} = -1$, $a_{21} = 0$ y $a_{22} = 3$.

**¿Por qué importan?** Porque permiten escribir y resolver sistemas de ecuaciones de forma ordenada, representar transformaciones del plano (rotaciones, reflejos, escalados), guardar datos en tablas y hacer cálculos que en computación aparecen por todas partes (gráficos, inteligencia artificial, simulaciones).

**Cómo leer la notación.** Cada letra tiene un papel:
- $A$ es el nombre de la matriz.
- $a_{ij}$ es el número concreto en la fila $i$ y columna $j$.
- $\mathbb{R}^{m \times n}$ se lee "matrices de $m$ filas y $n$ columnas con números reales".

## Operaciones básicas: suma, resta y multiplicación por un número
**Suma y resta.** Solo se pueden sumar o restar matrices **del mismo tamaño**, y se hace número con número en la misma posición:

$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 6 & 8 \\ 10 & 12 \end{pmatrix}$$

**Multiplicación por un escalar.** Un **escalar** es simplemente un número. Se multiplica cada entrada por ese número:

$$3 \cdot \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 3 & 6 \\ 9 & 12 \end{pmatrix}$$

**Propiedades:** la suma es conmutativa ($A + B = B + A$) y asociativa; existe la matriz nula $O$ (todos sus números son $0$) que cumple $A + O = A$.

## Multiplicación de matrices: la regla de fila por columna
Multiplicar matrices **no** es multiplicar número con número. La regla es: se toma cada **fila** de la primera matriz y cada **columna** de la segunda, se multiplican término a término y se suman los resultados.

$$(AB)_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}$$

**Cómo leer esta fórmula.** $(AB)_{ij}$ es el número en la fila $i$ y columna $j$ del producto. El símbolo $\sum_{k=1}^{n}$ significa "sumar para $k$ desde $1$ hasta $n$". Es decir: multiplico el primer número de la fila $i$ por el primer número de la columna $j$, el segundo por el segundo, y así hasta el final; luego sumo todo.

**Ejemplo paso a paso.**

$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1\cdot 5 + 2\cdot 7 & 1\cdot 6 + 2\cdot 8 \\ 3\cdot 5 + 4\cdot 7 & 3\cdot 6 + 4\cdot 8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}$$

**Condición de tamaño:** solo se puede multiplicar $A$ (de tamaño $m \times n$) por $B$ (de tamaño $n \times p$): el número de columnas de $A$ debe coincidir con el de filas de $B$. El resultado es de tamaño $m \times p$.

**Advertencia importante:** $AB$ y $BA$ pueden ser distintos. La multiplicación de matrices **no es conmutativa**.

## Matriz identidad e inversa
La **matriz identidad** $I_n$ es la matriz cuadrada con $1$ en la diagonal y $0$ en el resto:

$$I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

Cumple el papel del número $1$: $A I = I A = A$.

La **inversa** de una matriz cuadrada $A$ es otra matriz $A^{-1}$ que cumple:

$$A A^{-1} = A^{-1} A = I$$

No todas las matrices tienen inversa. Si existe, se dice que $A$ es **invertible** o no singular. Para $2 \times 2$ hay una fórmula directa:

$$A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}, \qquad A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}, \quad \text{si } ad - bc \neq 0$$

**Cómo leerla.** $ad - bc$ se llama **determinante** de $A$ y se escribe $\det(A)$. Si $\det(A) = 0$, no se puede dividir y la inversa no existe.

## Determinantes
El **determinante** es un número que se calcula a partir de una matriz cuadrada y que mide si la matriz es invertible.

Para $2 \times 2$:

$$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$$

Para $3 \times 3$ se usa la **regla de Sarrus** o el desarrollo por cofactores:

$$\det\begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix} = aei + bfg + cdh - ceg - bdi - afh$$

**Propiedades clave:**
- $\det(AB) = \det(A)\det(B)$.
- Si una fila (o columna) es múltiplo de otra, el determinante es $0$.
- $\det(A) \neq 0$ si y solo si $A$ es invertible.

## Sistemas de ecuaciones y eliminación de Gauss
Un sistema de ecuaciones lineales puede escribirse en forma matricial:

$$\begin{cases} 2x + y = 5 \\ x - 3y = -1 \end{cases} \quad \Longleftrightarrow \quad \begin{pmatrix} 2 & 1 \\ 1 & -3 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ -1 \end{pmatrix}$$

**Cómo leer esto.** La matriz guarda los coeficientes, el vector de la derecha guarda los resultados, y el vector $(x, y)$ son las incógnitas. La igualdad matricial reproduce exactamente las dos ecuaciones.

**Método de Gauss.** Se opera sobre la **matriz ampliada** (coeficientes y resultados en una sola tabla) con tres operaciones permitidas, que no cambian la solución:
1. Intercambiar dos filas.
2. Multiplicar una fila por un número distinto de cero.
3. Sumar a una fila un múltiplo de otra.

El objetivo es llegar a una forma escalonada (triangular) y luego despejar de abajo hacia arriba (sustitución hacia atrás).

**Ejemplo.** Partiendo de la matriz ampliada:

$$\left(\begin{array}{cc|c} 2 & 1 & 5 \\ 1 & -3 & -1 \end{array}\right) \longrightarrow \left(\begin{array}{cc|c} 1 & -3 & -1 \\ 2 & 1 & 5 \end{array}\right) \longrightarrow \left(\begin{array}{cc|c} 1 & -3 & -1 \\ 0 & 7 & 7 \end{array}\right)$$

De la última fila, $7y = 7$, luego $y = 1$. Sustituyendo en la primera, $x - 3 = -1$, luego $x = 2$. La solución es $(x, y) = (2, 1)$.

## Rango, sistemas compatibles e incompatibles
El **rango** de una matriz es el número de filas no nulas que quedan al aplicarle Gauss. Indica cuánta información independiente contiene.

Para un sistema $Ax = b$:
- Si $\text{rango}(A) = \text{rango}(A \mid b) = n$ (número de incógnitas), hay **solución única**.
- Si $\text{rango}(A) = \text{rango}(A \mid b) < n$, hay **infinitas soluciones**.
- Si $\text{rango}(A) < \text{rango}(A \mid b)$, el sistema es **incompatible**: no tiene solución.

**Ejemplo sin solución:** $x + y = 1$ y $x + y = 3$ son paralelas; al escalonar aparece una fila del tipo $0 = 2$, imposible.

## Aplicaciones y por qué estudiar matrices
- **Resolución de sistemas:** cualquier modelo lineal (circuitos, mezclas, economía) se resuelve con matrices.
- **Transformaciones geométricas:** rotar, reflejar o escalar una figura es multiplicar sus puntos por una matriz.
- **Computación gráfica y videojuegos:** cada objeto de la pantalla se transforma con matrices.
- **Datos y aprendizaje automático:** las tablas de datos son matrices; los algoritmos usan productos de matrices.
- **Cadenas de Markov y economía:** las probabilidades de transición se organizan en matrices.

## Errores comunes y cómo evitarlos
- **Sumar matrices de distinto tamaño.** Deben coincidir filas y columnas.
- **Multiplicar entrada con entrada.** La multiplicación es fila por columna.
- **Creer que $AB = BA$.** Casi nunca se cumple.
- **Olvidar la condición de tamaño en el producto.** Columnas de la primera = filas de la segunda.
- **Dividir entre el determinante cuando es cero.** Si $\det(A) = 0$, la inversa no existe.
- **Confundir la matriz con su determinante.** La matriz es la tabla; el determinante es un número.

## Contextos donde se aplica
- **Ingeniería y física:** resolver sistemas de fuerzas, circuitos y estructuras.
- **Computación:** gráficos 3D, inteligencia artificial, procesamiento de imágenes.
- **Economía:** tablas input-output y modelos de producción.
- **Estadística:** matrices de datos, covarianza y regresión.
- **Matemática pura:** las matrices son la cara concreta de las transformaciones lineales.

## Ejercicios propuestos
1. Suma $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 0 & -1 \\ 5 & 2 \end{pmatrix}$.
2. Calcula $3\begin{pmatrix} 2 & -1 \\ 0 & 4 \end{pmatrix}$.
3. Multiplica $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ 1 & 5 \end{pmatrix}$.
4. Halla el determinante de $\begin{pmatrix} 3 & 5 \\ 2 & 4 \end{pmatrix}$.
5. Halla la inversa de $\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$.
6. Resuelve por Gauss: $x + y = 4$, $2x - y = 5$.
7. ¿Es invertible $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$? Justifica con el determinante.
8. Escribe en forma matricial el sistema $3x - y = 2$, $x + 2y = 7$.

**Respuestas:** 1) $\begin{pmatrix} 1 & 1 \\ 8 & 6 \end{pmatrix}$. 2) $\begin{pmatrix} 6 & -3 \\ 0 & 12 \end{pmatrix}$. 3) $\begin{pmatrix} 4 & 10 \\ 10 & 20 \end{pmatrix}$. 4) $2$. 5) $\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$. 6) $x = 3$, $y = 1$. 7) No: $\det = 0$. 8) $\begin{pmatrix} 3 & -1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2 \\ 7 \end{pmatrix}$.

## Resumen
- Una matriz es una tabla de números con filas y columnas; $a_{ij}$ es la entrada de la fila $i$ y columna $j$.
- Se suman del mismo tamaño y se multiplican fila por columna; el producto no es conmutativo.
- La identidad $I$ actúa como el $1$; la inversa $A^{-1}$ deshace el efecto de $A$.
- El determinante decide si hay inversa y ayuda a resolver sistemas.
- Gauss transforma un sistema en otro más simple con operaciones que conservan la solución.
- El rango clasifica los sistemas en compatible determinado, indeterminado o incompatible.
`,

  "algebra-lineal": String.raw`
## ¿Qué es un espacio vectorial?

El **álgebra lineal** es la rama de la matemática que estudia los vectores, las matrices y las transformaciones que actúan sobre ellos. Su objeto central es el **espacio vectorial**: un conjunto de objetos que se pueden sumar entre sí y multiplicar por números sin salirse del conjunto. La idea suena abstracta, pero es la misma que usas al moverte en un plano: puedes sumar desplazamientos y estirarlos, y nunca abandonas el plano. Vamos a construir la definición paso a paso, explicando cada símbolo desde cero.

**El cuerpo de escalares $\mathbb{K}$.** La letra $\mathbb{K}$ (se lee "cuerpo K") representa el conjunto de números que usaremos para multiplicar vectores; a esos números se les llama **escalares**. Un cuerpo es un conjunto donde se puede sumar, restar, multiplicar y dividir (excepto entre cero) con las reglas de siempre. En casi todo este curso $\mathbb{K} = \mathbb{R}$, el conjunto de los números reales; en algunos problemas podría ser $\mathbb{C}$, el conjunto de los números complejos. Cuando veas $\mathbb{K}$, léelo como "el cuerpo de escalares que estemos usando".

**El conjunto de vectores $V$.** La letra $V$ es simplemente el nombre de un conjunto cuyos elementos llamamos **vectores**. Un vector $v$ (se lee "vector v") puede ser una flecha, pero también una lista de números, una matriz, un polinomio o una función. Lo importante no es el aspecto del objeto, sino que se comporte bien frente a la suma y al producto por escalares.

**Las dos operaciones.** En $V$ deben estar definidas:

- La **suma**: dados dos vectores $u, v \in V$, el símbolo $\in$ se lee "pertenece a" y significa que $u$ y $v$ son elementos del conjunto $V$. La suma se escribe $u + v$ y debe volver a ser un elemento de $V$.
- El **producto por un escalar**: dados un número $\alpha \in \mathbb{K}$ (la letra griega $\alpha$, "alfa", es el nombre típico de un escalar) y un vector $v \in V$, el producto se escribe $\alpha v$ y también debe ser un elemento de $V$.

### La definición, regla por regla

Un **espacio vectorial sobre $\mathbb{K}$** es un conjunto $V$ con una suma y un producto por escalares que cumplen estas ocho reglas. Se enuncian de forma simbólica, pero cada una tiene una lectura en palabras:

1. **Cerradura de la suma.** Si $u, v \in V$, entonces $u + v \in V$. En palabras: sumar dos vectores del conjunto nunca te saca del conjunto.
2. **Cerradura del producto por escalar.** Si $\alpha \in \mathbb{K}$ y $v \in V$, entonces $\alpha v \in V$. En palabras: estirar o encoger un vector del conjunto no te saca del conjunto.
3. **Conmutatividad.** $u + v = v + u$: el orden de la suma no cambia el resultado.
4. **Asociatividad.** $(u + v) + w = u + (v + w)$: el modo de agrupar tres sumandos no cambia el resultado.
5. **Neutro aditivo.** Existe un vector especial llamado **vector cero** o **vector nulo**, escrito $\vec{0}$ (se lee "vector cero"), tal que $v + \vec{0} = v$ para todo vector $v$. Es el equivalente vectorial del número $0$.
6. **Inverso aditivo.** Para cada vector $v$ existe un vector $-v$, llamado su **opuesto**, tal que $v + (-v) = \vec{0}$. Es el equivalente vectorial del número negativo.
7. **Distributividad.** Se cumplen $\alpha(u + v) = \alpha u + \alpha v$ y $(\alpha + \beta)v = \alpha v + \beta v$, donde $\alpha$ y $\beta$ son escalares. En palabras: multiplicar por una suma es multiplicar por cada sumando, y sumar escalares es lo mismo que sumar sus efectos.
8. **Compatibilidad de escalares.** $(\alpha\beta)v = \alpha(\beta v)$ y $1 \cdot v = v$, donde $1$ es el neutro del producto en $\mathbb{K}$. En palabras: multiplicar por dos números seguidos equivale a multiplicar por su producto, y el número $1$ deja al vector intacto.

**Analogía.** Piensa en un espacio vectorial como un "patio de juegos" con dos reglas de seguridad: puedes combinar dos jugadores (suma) y puedes cambiarles el tamaño (escalar), pero el juego se queda siempre dentro del patio. Todo lo que cumple esas reglas es un espacio vectorial, aunque no se parezca a flechas.

### Ejemplos fundamentales

- **$\mathbb{R}^n$.** El símbolo $\mathbb{R}^n$ (se lee "erre n" o "erre a la n") significa el conjunto de todas las listas ordenadas de $n$ números reales. Un elemento se escribe $(x_1, x_2, \ldots, x_n)$; cada $x_i$ (se lee "equis sub i") es un número real llamado la i-ésima coordenada. Para $n=1$ es la recta, para $n=2$ el plano y para $n=3$ el espacio. La suma y el producto por escalar se hacen coordenada a coordenada.
- **Matrices $M_{m \times n}(\mathbb{R})$.** La letra $M$ viene de "matriz", $\mathbb{R}$ indica que las entradas son números reales, y los subíndices $m \times n$ (se lee "m por n") indican que hay $m$ filas y $n$ columnas. Es un espacio vectorial: las matrices del mismo tamaño se suman entrada con entrada y se multiplican por números.
- **Polinomios $\mathbb{R}[x]$.** El símbolo $\mathbb{R}[x]$ (se lee "erre corchete equis") designa al conjunto de todos los polinomios con coeficientes reales en la variable $x$. Sumar polinomios y multiplicarlos por números da polinomios, así que es un espacio vectorial. El subconjunto de polinomios de grado menor o igual que $n$ se escribe $\mathbb{R}_n[x]$.
- **Funciones continuas $C[a,b]$.** La letra $C$ recuerda "continua" y $[a,b]$ es un intervalo de números reales. Los elementos de $C[a,b]$ son funciones continuas definidas en ese intervalo; se suman función a función y se multiplican por números.
- **Soluciones de una ecuación diferencial lineal homogénea.** El conjunto de todas las soluciones de una ecuación como $y'' + 3y' + 2y = 0$ es un espacio vectorial: la suma de soluciones y los múltiplos de soluciones vuelven a ser soluciones.

### Subespacios vectoriales

Un **subespacio** $W \subseteq V$ es un subconjunto no vacío dentro de un espacio vectorial que, por sí solo, también es un espacio vectorial con las operaciones heredadas. El símbolo $\subseteq$ se lee "subconjunto de". En la práctica no hace falta verificar las ocho reglas: basta comprobar que $\vec{0} \in W$, que la suma de dos elementos de $W$ sigue en $W$ y que multiplicar un elemento de $W$ por un escalar sigue dando un elemento de $W$.

**Ejemplo de subespacio.** El conjunto $W = \{(x,y,z) : x + y + z = 0\}$ es un plano que pasa por el origen en $\mathbb{R}^3$. La notación $\{(x,y,z) : x + y + z = 0\}$ se lee "el conjunto de las ternas $(x,y,z)$ tales que $x+y+z=0$"; los dos puntos se leen "tales que". Comprobemos: $(0,0,0)$ cumple la ecuación, y si $u=(x_1,y_1,z_1)$ y $v=(x_2,y_2,z_2)$ cumplen $x_i+y_i+z_i=0$, entonces su suma cumple $(x_1+x_2)+(y_1+y_2)+(z_1+z_2)=0$, y el múltiplo $\alpha u$ también. Es un subespacio.

**Ejemplo que no es subespacio.** El conjunto $W = \{(x,y) : x + y = 1\}$ es una recta que no pasa por el origen. Falla porque $(0,0)$ no pertenece a $W$ y porque $(1,0)+(0,1)=(1,1)$ no cumple $x+y=1$. Moraleja: los subespacios son rectas, planos o hiperplanos que **siempre pasan por el origen**.

## Vectores, combinaciones lineales y cómo leer la notación

Un **vector** de $\mathbb{R}^n$ es una lista ordenada de números: $v = (v_1, v_2, \ldots, v_n)$. Aquí $v$ es el nombre del vector y $v_1, v_2, \ldots$ son sus **coordenadas** o **componentes**, que son números concretos. Por ejemplo, en $\mathbb{R}^3$ escribimos $v = (2, -1, 4)$, donde la primera coordenada es $2$, la segunda es $-1$ y la tercera es $4$. En los problemas de geometría suele verse $v = (x,y,z)$, y entonces $x,y,z$ son simplemente los nombres de las tres coordenadas.

**Cómo se suma y cómo se estira.** La suma de vectores se hace coordenada a coordenada:
$$u + v = (u_1 + v_1,\; u_2 + v_2,\; \ldots,\; u_n + v_n)$$
El producto por un escalar $\alpha$ multiplica cada coordenada:
$$\alpha v = (\alpha v_1,\; \alpha v_2,\; \ldots,\; \alpha v_n)$$
Geométricamente, si $\alpha > 1$ el vector se estira, si $0 < \alpha < 1$ se encoge y si $\alpha < 0$ cambia de sentido. Por ejemplo, en $\mathbb{R}^2$: si $u = (1,2)$ y $v = (3,-1)$, entonces $u+v = (4,1)$, y si $\alpha = 3$, entonces $\alpha v = (9,-3)$.

### Diccionario de notación

| Símbolo | Se lee | Qué representa y para qué sirve |
| --- | --- | --- |
| $v$ | "vector v" | Nombre genérico de un vector, es decir, de un elemento del espacio. |
| $v_i$ | "v sub i" | La i-ésima coordenada de $v$; siempre es un número, no un vector. |
| $\alpha$, $\beta$, $\lambda$ | "alfa, beta, lambda" | Letras griegas típicas para escalares, o sea, números. |
| $u + v$ | "u más v" | Suma de vectores, coordenada a coordenada. |
| $\alpha v$ | "alfa por v" | Producto de un escalar por cada coordenada del vector. |
| $\vec{0}$ | "vector cero" | Vector con todas las coordenadas nulas; es el neutro de la suma. |
| $\operatorname{span}$ | "span" o "el generado por" | Conjunto de todas las combinaciones lineales de unos vectores. |
| $\in$ | "pertenece a" | Indica que un objeto es elemento de un conjunto. |
| $\subseteq$ | "subconjunto de" | Indica que todos los elementos de un conjunto están en otro. |
| $\mathbb{K}$ | "cuerpo K" | Conjunto de escalares; casi siempre $\mathbb{R}$ o $\mathbb{C}$. |
| $\mathbb{R}^n$ | "erre n" | Listas de $n$ números reales; es el espacio vectorial modelo. |
| $\{\;\}$ | "el conjunto de" | Agrupa objetos, por ejemplo $\{v_1, v_2\}$. |
| $:$ | "tales que" | Describe una condición dentro de un conjunto. |
| $\iff$ | "si y solo si" | Las dos afirmaciones que une son equivalentes. |

**Combinación lineal.** Una **combinación lineal** de unos vectores $v_1, v_2, \ldots, v_k$ es cualquier expresión de la forma
$$\alpha_1 v_1 + \alpha_2 v_2 + \cdots + \alpha_k v_k$$
donde $\alpha_1, \ldots, \alpha_k$ son escalares elegidos libremente. Los puntos suspensivos indican que se continúa el patrón hasta llegar al índice $k$. La combinación se llama **trivial** cuando todos los escalares son cero, es decir, cuando la combinación vale $\vec{0}$ sin mérito alguno.

**Ejemplo.** En $\mathbb{R}^2$, el vector $(4,3)$ es combinación lineal de $(1,2)$ y $(2,-1)$ porque
$$(4,3) = 2(1,2) + 1(2,-1) = (2,4) + (2,-1) = (4,3).$$
Para hallar esos coeficientes se plantea un sistema: si buscamos $\alpha(1,2) + \beta(2,-1) = (4,3)$, igualando coordenadas queda $\alpha + 2\beta = 4$ y $2\alpha - \beta = 3$, cuya solución es $\alpha = 2$, $\beta = 1$.

**Conjunto generado.** El conjunto de **todas** las combinaciones lineales posibles de unos vectores se llama su **span** o **conjunto generado**, y se escribe
$$\operatorname{span}\{v_1, v_2, \ldots, v_k\} = \{\alpha_1 v_1 + \cdots + \alpha_k v_k : \alpha_i \in \mathbb{K}\}.$$
La palabra inglesa span significa "abarcar" o "extender": el span es todo lo que se puede alcanzar moviendo los coeficientes. Siempre es un subespacio vectorial. La notación $\operatorname{span}\{v_1, v_2, \ldots, v_k\}$ se lee "el espacio generado por $v_1, v_2, \ldots, v_k$". Por ejemplo, en $\mathbb{R}^3$:

- $\operatorname{span}\{(1,0,0), (0,1,0)\}$ es el plano formado por los vectores cuya tercera coordenada es $0$, porque toda combinación tiene la forma $(a,b,0)$.
- $\operatorname{span}\{(1,1,0)\}$ es una recta que pasa por el origen y por el punto $(1,1,0)$.
- $\operatorname{span}\{(1,1,0), (2,2,0)\}$ es la misma recta: el segundo vector no aporta nada nuevo porque ya era múltiplo del primero.

## Independencia lineal, base y dimensión

**Dependencia lineal.** Un conjunto de vectores $v_1, \ldots, v_k$ es **linealmente dependiente** si existe una combinación lineal de ellos que da $\vec{0}$ sin que todos los coeficientes sean cero:
$$\alpha_1 v_1 + \cdots + \alpha_k v_k = \vec{0} \quad \text{con algún } \alpha_i \neq 0.$$
En palabras: hay redundancia, algún vector se puede escribir como combinación de los demás. Por ejemplo, $(1,2,3)$ y $(2,4,6)$ son dependientes porque $2(1,2,3) - 1(2,4,6) = (0,0,0)$: el segundo es el doble del primero.

**Independencia lineal.** Los vectores son **linealmente independientes** si la única combinación que da $\vec{0}$ es la trivial, es decir, si
$$\alpha_1 v_1 + \cdots + \alpha_k v_k = \vec{0} \quad \text{obliga a } \alpha_1 = \alpha_2 = \cdots = \alpha_k = 0.$$
Geométricamente: ninguno se puede formar con los otros; cada uno aporta una dirección nueva.

**Cómo comprobarlo.** Se colocan los vectores como columnas de una matriz y se resuelve el sistema homogéneo asociado. Si el rango (que estudiaremos enseguida) coincide con el número de vectores, son independientes; si es menor, son dependientes. Cuando hay $n$ vectores en $\mathbb{R}^n$, basta calcular el determinante de la matriz que forman: si $\det \neq 0$ son independientes, y si $\det = 0$ son dependientes. El símbolo $\det$ viene de "determinante" y se explicará en detalle más adelante.

**Ejemplo.** Los vectores $v_1=(1,1,1)$, $v_2=(1,2,3)$ y $v_3=(1,0,0)$ de $\mathbb{R}^3$ forman la matriz
$$M = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 0 \\ 1 & 3 & 0 \end{pmatrix}$$
cuyo determinante vale $1 \neq 0$. Por lo tanto son linealmente independientes: ninguno es combinación de los otros dos.

**Base.** Una **base** de un espacio vectorial $V$ es un conjunto de vectores que cumple dos condiciones a la vez: **genera** a $V$ (todo vector del espacio es combinación lineal de ellos) y es **linealmente independiente** (sin redundancia). La utilidad de una base es que da un sistema de coordenadas: cada vector de $V$ se escribe de manera **única** como combinación de los vectores de la base.

Ejemplos de bases:

- En $\mathbb{R}^2$, $\{e_1, e_2\}$ con $e_1=(1,0)$ y $e_2=(0,1)$: es la **base canónica**. La letra $e$ viene de "estándar" y el subíndice indica la posición del $1$.
- En $\mathbb{R}^3$, $\{e_1,e_2,e_3\}$ con $e_1=(1,0,0)$, $e_2=(0,1,0)$ y $e_3=(0,0,1)$.
- En $\mathbb{R}^n$, la base canónica tiene $n$ vectores $e_1,\ldots,e_n$, donde $e_i$ tiene un $1$ en la posición $i$ y ceros en las demás.
- En los polinomios de grado menor o igual que $2$, una base natural es $\{1, x, x^2\}$.

**Coordenadas.** Si $B = \{v_1, \ldots, v_n\}$ es una base y $v = c_1 v_1 + \cdots + c_n v_n$, los números $c_1,\ldots,c_n$ se llaman las **coordenadas** de $v$ en la base $B$ y se escribe $[v]_B = (c_1, \ldots, c_n)$. Los corchetes con subíndice recuerdan que las coordenadas dependen de la base elegida. Por ejemplo, en la base $B=\{(1,1),(1,-1)\}$ de $\mathbb{R}^2$, el vector $v=(3,1)$ cumple $v = 2(1,1) + 1(1,-1)$, así que $[v]_B = (2,1)$.

**Dimensión.** La **dimensión** de $V$, escrita $\dim V$ (el símbolo $\dim$ viene de "dimensión"), es el número de vectores de cualquiera de sus bases. El teorema fundamental dice que todas las bases de un mismo espacio tienen el mismo número de elementos, así que la dimensión está bien definida. Algunos valores típicos:

- $\dim \mathbb{R}^n = n$: el plano tiene dimensión $2$ y el espacio dimensión $3$.
- $\dim M_{m \times n} = mn$: hay una coordenada por cada entrada de la matriz.
- Los polinomios de grado menor o igual que $n$ tienen dimensión $n+1$, gracias a la base $\{1,x,\ldots,x^n\}$.
- El subespacio $\{\vec{0}\}$ tiene dimensión $0$.

**Ejemplo.** El subespacio $W = \operatorname{span}\{(1,2,1), (2,4,2), (1,0,1)\}$ tiene dimensión $2$, porque el segundo vector es el doble del primero, de modo que una base es $\{(1,2,1), (1,0,1)\}$. En general, la dimensión de un span es el número de vectores que quedan tras eliminar los redundantes.

## Matrices y sistemas de ecuaciones

**Matriz.** Una **matriz** $A$ es una tabla rectangular de números ordenada en filas (horizontales) y columnas (verticales). Si tiene $m$ filas y $n$ columnas se dice que es de tamaño $m \times n$ y se escribe $A \in \mathbb{R}^{m \times n}$. El número ubicado en la fila $i$ y la columna $j$ se llama **entrada** $(i,j)$ y se escribe $a_{ij}$ (se lee "a sub i j"). Por ejemplo, en
$$A = \begin{pmatrix} 2 & -1 \\ 0 & 3 \end{pmatrix}$$
tenemos $a_{11}=2$, $a_{12}=-1$, $a_{21}=0$ y $a_{22}=3$. Las matrices son la forma concreta de guardar información lineal: coeficientes de un sistema, datos de una tabla, pesos de una red neuronal o las probabilidades de una cadena de Markov.

**Operaciones básicas.** Dos matrices del mismo tamaño se suman entrada con entrada: $(A+B)_{ij} = a_{ij}+b_{ij}$, donde $(A+B)_{ij}$ denota la entrada en la fila $i$ y la columna $j$ de la suma. Un escalar $\alpha$ multiplica cada entrada: $(\alpha A)_{ij} = \alpha a_{ij}$. La **transpuesta** $A^T$ es la matriz que resulta de cambiar filas por columnas, es decir, $(A^T)_{ij} = a_{ji}$; la letra $T$ viene de "transpuesta". Una matriz es **simétrica** si $A = A^T$.

**Producto de matrices.** Multiplicar matrices no es multiplicar entrada con entrada: la regla es **fila por columna**. Si $A$ es $m \times n$ y $B$ es $n \times p$, el producto $AB$ es $m \times p$ y su entrada $(i,j)$ se obtiene multiplicando la fila $i$ de $A$ por la columna $j$ de $B$ y sumando los resultados:
$$(AB)_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}.$$
El símbolo $\sum_{k=1}^{n}$ se lee "suma desde $k=1$ hasta $n$" y significa sumar todos los términos que resultan de reemplazar $k$ por $1,2,\ldots,n$. Condición clave: el número de columnas de $A$ debe coincidir con el número de filas de $B$; si no coinciden, el producto no está definido.

**Ejemplo paso a paso.**
$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1\cdot 5 + 2\cdot 7 & 1\cdot 6 + 2\cdot 8 \\ 3\cdot 5 + 4\cdot 7 & 3\cdot 6 + 4\cdot 8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}.$$
Ojo: el producto **no es conmutativo**: casi siempre $AB \neq BA$, y a veces uno de los dos productos ni siquiera existe. En cambio sí es asociativo, $(AB)C = A(BC)$, y distributivo: $A(B+C) = AB + AC$. La **matriz identidad** $I_n$ es la matriz cuadrada con $1$ en la diagonal y $0$ en el resto; cumple $AI_n = I_nA = A$, así que juega el papel del número $1$. También se cumple $(AB)^T = B^T A^T$: la transpuesta invierte el orden del producto.

**Interpretación del producto matriz-vector.** Multiplicar una matriz por un vector, $A\vec{x}$, combina las columnas de $A$ con pesos dados por las coordenadas de $\vec{x}$. Por ejemplo,
$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 2 \\ 1 \end{pmatrix} = 2\begin{pmatrix} 1 \\ 3 \end{pmatrix} + 1\begin{pmatrix} 2 \\ 4 \end{pmatrix} = \begin{pmatrix} 4 \\ 10 \end{pmatrix}.$$
Esta lectura es clave para entender la imagen de una transformación lineal: los resultados posibles son combinaciones de las columnas.

**Sistema de ecuaciones.** Un sistema de $m$ ecuaciones lineales con $n$ incógnitas se escribe
$$\begin{cases} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\ \quad \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m \end{cases}$$
donde las $x_j$ son las **incógnitas** (los números que buscamos), los $a_{ij}$ son los **coeficientes** (los números conocidos que multiplican a cada incógnita) y los $b_i$ son los **términos independientes** (los resultados conocidos que no multiplican a ninguna incógnita). Los puntos suspensivos verticales $\vdots$ indican que la lista continúa siguiendo el patrón. En forma matricial, todo el sistema se escribe de manera compacta como $A\vec{x} = \vec{b}$: aquí $A$ es la matriz de coeficientes, $\vec{x}$ es el vector columna de incógnitas y $\vec{b}$ es el vector columna de términos independientes. Por ejemplo,
$$\begin{cases} 2x + y = 5 \\ x - 3y = -1 \end{cases} \quad \Longleftrightarrow \quad \begin{pmatrix} 2 & 1 \\ 1 & -3 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ -1 \end{pmatrix}.$$
La doble flecha $\Longleftrightarrow$ (se lee "si y solo si") indica que las dos escrituras contienen exactamente la misma información.

**Matriz ampliada.** Para aplicar el método de Gauss se escribe la **matriz ampliada** $[A \mid \vec{b}]$, que junta la matriz de coeficientes y la columna de términos independientes separadas por una barra vertical $\mid$ (que aquí funciona como separador visual, no como operación):
$$\left(\begin{array}{cc|c} 2 & 1 & 5 \\ 1 & -3 & -1 \end{array}\right).$$
Esa barra recuerda dónde estaba el signo igual. La notación $[A \mid \vec{b}]$ se lee "matriz A ampliada con b".

**Eliminación de Gauss.** El método consiste en transformar el sistema en otro equivalente pero más simple, usando tres operaciones permitidas que no cambian la solución:

1. Intercambiar dos filas.
2. Multiplicar una fila por un número distinto de cero.
3. Sumar a una fila un múltiplo de otra fila.

El objetivo es llegar a la **forma escalonada**: una matriz donde cada **pivote** (el primer número no nulo de una fila) está a la derecha del pivote de la fila anterior y las filas nulas quedan abajo. Después se despeja de abajo hacia arriba con **sustitución hacia atrás**.

**Ejemplo completo.** Resolvamos
$$\begin{cases} x + y + z = 6 \\ 2x - y + z = 3 \\ x + 2y - z = 2 \end{cases}$$
La matriz ampliada y los pasos son:
$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 2 & -1 & 1 & 3 \\ 1 & 2 & -1 & 2 \end{array}\right) \longrightarrow \left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -3 & -1 & -9 \\ 0 & 1 & -2 & -4 \end{array}\right) \longrightarrow \left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & -2 & -4 \\ 0 & 0 & -7 & -21 \end{array}\right).$$
En el primer paso se hicieron $F_2 \to F_2 - 2F_1$ y $F_3 \to F_3 - F_1$ (a la fila 2 se le restó el doble de la fila 1, y a la fila 3 se le restó la fila 1). En el segundo paso se intercambiaron las filas 2 y 3 y luego se hizo $F_3 \to F_3 + 3F_2$. La notación $F_i$ significa "fila i". De la última fila se lee $-7z = -21$, luego $z = 3$. Sustituyendo en la segunda, $y - 2(3) = -4$, luego $y = 2$. Sustituyendo en la primera, $x + 2 + 3 = 6$, luego $x = 1$. La solución es $(x,y,z) = (1,2,3)$.

**Clasificación de sistemas.** En general, un sistema lineal puede tener una solución, infinitas soluciones o ninguna. Para saber en qué caso estamos se comparan los **rangos** de la matriz $A$ y de la matriz ampliada. El **rango** de una matriz es el número de filas no nulas que quedan al aplicarle Gauss, e informalmente mide cuánta información independiente contiene. Las reglas son:

- Si rango$(A) = \text{rango}(A \mid b) = n$ (el número de incógnitas), hay **solución única**.
- Si rango$(A) = \text{rango}(A \mid b) < n$, hay **infinitas soluciones** y quedan $n - r$ parámetros libres, donde $r$ es el rango común.
- Si rango$(A) < \text{rango}(A \mid b)$, el sistema es **incompatible**: no tiene solución.

**Ejemplo incompatible.** El sistema $x + y = 1$, $x + y = 3$ describe dos rectas paralelas. Al escalonar aparece una fila del tipo $0 = 2$, imposible: rango$(A) = 1 < \text{rango}(A \mid b) = 2$.

**Sistemas homogéneos.** Un sistema es **homogéneo** si todos los términos independientes son cero, es decir, tiene la forma $A\vec{x} = \vec{0}$. Siempre admite la solución trivial $\vec{x} = \vec{0}$; tiene soluciones distintas de cero si y solo si rango$(A) < n$, es decir, si sobran incógnitas o hay ecuaciones redundantes.

## Rango, determinantes e inversa

**Rango.** El **rango** de una matriz $A$, escrito rango$(A)$, es el número de filas no nulas que quedan después de aplicar eliminación de Gauss. Mide cuántas filas (o columnas) independientes tiene la matriz, es decir, cuánta información lineal genuina contiene. Sus propiedades más útiles son:

- Nunca supera al mínimo entre filas y columnas: $0 \leq \text{rango}(A) \leq \min(m,n)$.
- El rango no cambia al intercambiar filas, multiplicar una fila por un número no nulo o sumar a una fila un múltiplo de otra.
- Rango$(A)$ es también la dimensión del espacio generado por las columnas de $A$. Por eso, para una transformación lineal representada por $A$, el rango coincide con la dimensión de su imagen, como veremos en la sección del teorema de la dimensión.
- Una matriz de $n \times n$ tiene rango $n$ si y solo si sus columnas son linealmente independientes.

**Ejemplo.** La matriz
$$\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$$
tiene rango $1$ porque la segunda fila es el doble de la primera; al hacer $F_2 \to F_2 - 2F_1$ queda una fila nula.

**Determinante.** El **determinante** es un número que se calcula a partir de una matriz **cuadrada** y que mide si la matriz es invertible. Se escribe $\det(A)$ o $\det A$ ("determinante de A"). Para una matriz $1 \times 1$, $\det(a) = a$. Para una $2 \times 2$:
$$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc.$$
En palabras: producto de la diagonal principal (de arriba a la izquierda abajo a la derecha) menos producto de la diagonal secundaria.

Para una matriz $3 \times 3$ hay dos métodos. La **regla de Sarrus**:
$$\det\begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix} = aei + bfg + cdh - ceg - bdi - afh.$$
Y el **desarrollo por cofactores**, que usa los conceptos de **menor** y **cofactor**. Dada una entrada $a_{ij}$, su menor $M_{ij}$ es el determinante de la matriz que queda al borrar la fila $i$ y la columna $j$, y su cofactor es $C_{ij} = (-1)^{i+j} M_{ij}$; el factor $(-1)^{i+j}$ produce un patrón de signos alternados que empieza con $+$ en la esquina superior izquierda. Entonces:
$$\det A = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}.$$
Esta fórmula se puede desarrollar por cualquier fila o cualquier columna, no solo por la primera.

**Propiedades de los determinantes.** Todas se leen pensando en el determinante como una medida del "volumen con signo":

- $\det(AB) = \det(A)\det(B)$: el determinante de un producto es el producto de los determinantes.
- $\det(A^T) = \det(A)$: transponer no cambia el determinante.
- Si una fila o columna es múltiplo de otra, o es nula, el determinante es $0$.
- Intercambiar dos filas cambia el signo del determinante.
- Sumar a una fila un múltiplo de otra no cambia el determinante.
- En una matriz triangular (o diagonal), el determinante es el producto de los números de la diagonal.
- $\det(\alpha A) = \alpha^n \det(A)$ para una matriz $n \times n$.
- $A$ es invertible si y solo si $\det(A) \neq 0$.

**Interpretación geométrica.** En $\mathbb{R}^2$, el valor absoluto del determinante de una matriz $2 \times 2$ es el área del paralelogramo que forman sus vectores columna, y en $\mathbb{R}^3$ es el volumen del paralelepípedo correspondiente. El signo indica si la orientación se conserva o se invierte. Si $\det(A) = 0$, los vectores columna son dependientes y el paralelogramo o paralelepípedo está achatado, con volumen cero: por eso no hay inversa.

**Ejemplo de determinante $3 \times 3$.** Para
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$$
desarrollando por la primera fila:
$$\det A = 1\cdot\det\begin{pmatrix} 1 & 4 \\ 6 & 0 \end{pmatrix} - 2\cdot\det\begin{pmatrix} 0 & 4 \\ 5 & 0 \end{pmatrix} + 3\cdot\det\begin{pmatrix} 0 & 1 \\ 5 & 6 \end{pmatrix} = 1(0-24) - 2(0-20) + 3(0-5) = -24 + 40 - 15 = 1.$$

**Inversa.** La **inversa** de una matriz cuadrada $A$ es la matriz $A^{-1}$ (se lee "A inversa") que cumple
$$A A^{-1} = A^{-1} A = I,$$
donde $I$ es la matriz identidad del mismo tamaño. La inversa deshace el efecto de $A$, igual que dividir deshace el efecto de multiplicar. No todas las matrices tienen inversa: si existe, se dice que $A$ es **invertible** o **no singular**, y si no existe, se dice **singular**. El criterio fundamental es: $A$ es invertible si y solo si $\det(A) \neq 0$.

Para una matriz $2 \times 2$ hay una fórmula directa:
$$A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \quad \Longrightarrow \quad A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}, \quad \text{si } ad - bc \neq 0.$$
La receta en palabras: se intercambian los elementos de la diagonal principal, se cambian de signo los de la diagonal secundaria y se divide todo entre el determinante.

**Ejemplo.** Para $A = \begin{pmatrix} 4 & 2 \\ 1 & 3 \end{pmatrix}$ se tiene $\det(A) = 4\cdot 3 - 2\cdot 1 = 10$, luego
$$A^{-1} = \frac{1}{10}\begin{pmatrix} 3 & -2 \\ -1 & 4 \end{pmatrix} = \begin{pmatrix} 0.3 & -0.2 \\ -0.1 & 0.4 \end{pmatrix}.$$
Verificación: multiplicar $A$ por $A^{-1}$ debe dar la identidad.

Para matrices mayores se usa la **adjunta**. La matriz adjunta de $A$, escrita adj$(A)$, es la transpuesta de la matriz de cofactores: en la posición $(i,j)$ lleva el cofactor $C_{ji}$. Entonces
$$A^{-1} = \frac{1}{\det A}\,\text{adj}(A), \quad \text{si } \det A \neq 0.$$
Por ejemplo, para la matriz del apartado anterior se obtiene
$$A^{-1} = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix},$$
resultado que se comprueba multiplicando por $A$.

**Método de Gauss-Jordan.** Otra vía para invertir consiste en ampliar la matriz con la identidad, $[A \mid I]$, y aplicar operaciones por filas hasta que el bloque izquierdo se convierta en la identidad; el bloque derecho será entonces $A^{-1}$, es decir, $[A \mid I] \to [I \mid A^{-1}]$.

**Propiedades de la inversa.** $(A^{-1})^{-1} = A$; $(AB)^{-1} = B^{-1}A^{-1}$, donde el orden se invierte (como al quitarse los zapatos y luego los calcetines); $(A^T)^{-1} = (A^{-1})^T$; y $\det(A^{-1}) = 1/\det(A)$.

**Regla de Cramer.** Para un sistema $A\vec{x} = \vec{b}$ con el mismo número de ecuaciones que de incógnitas y con $\det(A) \neq 0$, la solución se calcula entrada por entrada:
$$x_i = \frac{\det(A_i)}{\det(A)},$$
donde $A_i$ es la matriz que resulta de reemplazar la columna $i$ de $A$ por el vector $\vec{b}$. Es útil para sistemas pequeños o cuando solo interesa una incógnita.

**Ejemplo de Cramer.** En el sistema $2x + y = 5$, $x - 3y = -1$, se tiene $\det(A) = -7$ y
$$x = \frac{\det\begin{pmatrix} 5 & 1 \\ -1 & -3 \end{pmatrix}}{-7} = \frac{-14}{-7} = 2, \qquad y = \frac{\det\begin{pmatrix} 2 & 5 \\ 1 & -1 \end{pmatrix}}{-7} = \frac{-7}{-7} = 1.$$

## Transformaciones lineales

**Definición.** Una **transformación lineal** (o aplicación lineal) es una función $T: V \to W$ entre dos espacios vectoriales que respeta la suma y el producto por escalares. La notación $T: V \to W$ se lee "T de V en W": la letra $T$ es el nombre de la función, $V$ es el **dominio** (de dónde salen los vectores) y $W$ es el **codominio** (a dónde llegan). Para cada vector $v \in V$, el resultado $T(v)$ se llama la **imagen** de $v$ y pertenece a $W$. La linealidad se expresa con dos condiciones:

$$T(u + v) = T(u) + T(v) \qquad \text{y} \qquad T(\alpha v) = \alpha T(v).$$

En palabras: la imagen de la suma es la suma de las imágenes, y la imagen de un múltiplo es el múltiplo de la imagen. Ambas juntas equivalen a decir que $T$ preserva cualquier combinación lineal: $T(\alpha u + \beta v) = \alpha T(u) + \beta T(v)$. Un primer dato práctico: toda transformación lineal cumple $T(\vec{0}) = \vec{0}$, porque $T(\vec{0}) = T(0\cdot\vec{0}) = 0\cdot T(\vec{0}) = \vec{0}$. Si al evaluar en el vector cero no obtienes el vector cero, no es lineal.

**Ejemplos geométricos.** En $\mathbb{R}^2$:

- Una **rotación** de ángulo $\theta$ (la letra griega $\theta$ se lee "theta" y representa el ángulo) se escribe $T(x,y) = (x\cos\theta - y\sin\theta,\; x\sin\theta + y\cos\theta)$. Para $\theta = 90°$ resulta $T(x,y) = (-y,x)$.
- Un **reflejo** sobre el eje $x$: $T(x,y) = (x,-y)$.
- Una **proyección** sobre el eje $x$: $T(x,y) = (x,0)$.
- Un **escalado** uniforme: $T(x,y) = (3x,3y)$.

Todos ellos son lineales. En cambio $T(x,y) = (x+1, y)$ no lo es, porque $T(0,0) = (1,0) \neq (0,0)$: es una traslación, no una transformación lineal.

**Otros ejemplos.** La derivada de polinomios $T(p) = p'$ es lineal, porque $(p+q)' = p' + q'$ y $(\alpha p)' = \alpha p'$. La integral de funciones continuas también lo es. En cambio, el valor absoluto no es lineal.

**Matriz de una transformación.** Toda transformación lineal entre espacios de dimensión finita se representa con una matriz, una vez elegidas las bases. En la base canónica de $\mathbb{R}^n$, la regla es sencilla: la columna $j$ de la matriz es el vector $T(e_j)$, donde $e_j$ es el j-ésimo vector de la base canónica. Por ejemplo, para $T(x,y) = (2x - y,\; x + y)$:
$$T(1,0) = (2,1), \qquad T(0,1) = (-1,1) \quad \Longrightarrow \quad [T] = \begin{pmatrix} 2 & -1 \\ 1 & 1 \end{pmatrix}.$$
Para comprobarlo, multiplica esa matriz por $(x,y)$: $\begin{pmatrix} 2 & -1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2x-y \\ x+y \end{pmatrix}$.

**Composición.** Si $T: U \to V$ y $S: V \to W$ son transformaciones lineales, la composición $S \circ T$ (se lee "S compuesta con T") aplica primero $T$ y después $S$: $(S \circ T)(u) = S(T(u))$. La composición de transformaciones corresponde a la multiplicación de sus matrices, en el mismo orden. La transformación inversa $T^{-1}$ existe exactamente cuando la matriz de $T$ es invertible.

## Núcleo, imagen y teorema de la dimensión

**Núcleo.** El **núcleo** de una transformación lineal $T: V \to W$, escrito $\ker T$ (la abreviatura viene del inglés kernel, "núcleo"), es el conjunto de todos los vectores del dominio que $T$ envía al vector cero:
$$\ker T = \{v \in V : T(v) = \vec{0}\}.$$
En palabras: mide cuánta información se pierde al aplicar $T$, porque todos los vectores del núcleo quedan aplastados contra el cero y ya no se distinguen entre sí. El núcleo siempre es un subespacio de $V$ y siempre contiene a $\vec{0}$.

**Imagen.** La **imagen** de $T$, escrita $\operatorname{Im} T$, es el conjunto de todos los resultados posibles de $T$:
$$\operatorname{Im} T = \{T(v) : v \in V\}.$$
En palabras: es el alcance de la transformación, todo lo que se puede obtener a la salida. La imagen siempre es un subespacio de $W$. Si $T$ está dada por una matriz $A$ en la base canónica, entonces $\operatorname{Im} T$ es el conjunto generado por las columnas de $A$, llamado **espacio columna**, y su dimensión es el rango de $A$.

**Inyectiva, sobreyectiva y biyectiva.** Una transformación lineal $T$ es:

- **inyectiva** si vectores distintos tienen imágenes distintas; esto equivale a que $\ker T = \{\vec{0}\}$, es decir, a que solo el cero se aplasta.
- **sobreyectiva** si todo vector del codominio es imagen de algún vector del dominio; esto equivale a que $\operatorname{Im} T = W$.
- **biyectiva** si es inyectiva y sobreyectiva a la vez; en ese caso existe la transformación inversa $T^{-1}$.

**Teorema de la dimensión.** Para una transformación lineal $T: V \to W$ con $V$ de dimensión finita:
$$\dim V = \dim(\ker T) + \dim(\operatorname{Im} T).$$
Cada término se lee así: $\dim V$ es la dimensión del espacio de partida (cuántas coordenadas independientes hay a la entrada); $\dim(\ker T)$ es la dimensión del núcleo (cuántas direcciones se pierden); $\dim(\operatorname{Im} T)$ es la dimensión de la imagen (cuántas direcciones sobreviven a la salida). El teorema dice que las direcciones de entrada se reparten entre las que se pierden y las que llegan: es una ley de conservación de la información. Si $T$ es la multiplicación por una matriz $A$ de $n$ columnas, el teorema se vuelve $n = \text{nulidad}(A) + \text{rango}(A)$, donde la **nulidad** es la dimensión del núcleo de $A$.

**Consecuencia práctica.** Si $T: V \to W$ y $\dim V = \dim W$, entonces $T$ es inyectiva si y solo si es sobreyectiva: basta comprobar una de las dos. Además, $\dim(\operatorname{Im} T) \leq \dim W$, así que no se puede "fabricar" dimensión de la nada.

**Ejemplo 1.** Para $T(x,y,z) = (x + y + z,\; 0)$: el núcleo son los vectores que cumplen $x+y+z=0$, un plano de dimensión $2$ con base $\{(-1,1,0), (-1,0,1)\}$; la imagen son los vectores de la forma $(t,0)$, una recta de dimensión $1$ con base $\{(1,0)\}$. Se cumple $3 = 2 + 1$.

**Ejemplo 2.** Para $T(x,y) = (x - y,\; y - z,\; x - z)$ (definida en $\mathbb{R}^3$): el núcleo exige $x=y$ y $y=z$, luego es la recta $\operatorname{span}\{(1,1,1)\}$ de dimensión $1$; la imagen está formada por las ternas $(a,b,c)$ con $c = a + b$, un plano de dimensión $2$. De nuevo $3 = 1 + 2$.

## Valores y vectores propios

**La idea geométrica.** Cuando aplicas una matriz $A$ a un vector cualquiera, el resultado suele apuntar hacia una dirección distinta. Sin embargo, existen direcciones privilegiadas que no cambian de dirección: el vector solo se estira, se encoge o se da vuelta. Esas direcciones son los vectores propios, y el factor de escala asociado es el valor propio.

**Definición.** Sea $A$ una matriz cuadrada. Un número $\lambda$ (la letra griega $\lambda$, "lambda") es un **valor propio** de $A$ si existe un vector $v \neq \vec{0}$ tal que
$$A v = \lambda v.$$
El vector $v$ es entonces un **vector propio** asociado a $\lambda$. Léase despacio: al multiplicar $v$ por la matriz $A$ se obtiene el mismo vector $v$ multiplicado por el escalar $\lambda$. En palabras, $A$ no cambia la dirección de $v$: solo la escala por $\lambda$. Si $\lambda > 1$ el vector se alarga, si $0 < \lambda < 1$ se acorta, si $\lambda < 0$ se invierte y si $\lambda = 0$ el vector es aplastado al cero (y entonces $v$ está en el núcleo de $A$). Se exige $v \neq \vec{0}$ porque el vector cero cumple $A\vec{0} = \lambda\vec{0}$ para cualquier $\lambda$ y no aporta información; en cambio, si $v$ es vector propio de $\lambda$, cualquier múltiplo $\alpha v$ con $\alpha \neq 0$ también lo es.

**Cómo se calculan.** La ecuación $Av = \lambda v$ se reescribe como $Av - \lambda v = \vec{0}$. Para poder sacar factor común $v$ hay que escribir $\lambda v = \lambda I v$, donde $I$ es la matriz identidad del mismo tamaño que $A$ (así $\lambda$ se convierte en la matriz diagonal $\lambda I$). Entonces:
$$(A - \lambda I)v = \vec{0}.$$
Esto es un sistema homogéneo de matriz $A - \lambda I$. Tiene soluciones distintas de cero si y solo si el determinante de esa matriz es cero:
$$\det(A - \lambda I) = 0.$$
Esta ecuación se llama **ecuación característica**; el polinomio $p_A(\lambda) = \det(A - \lambda I)$ se llama **polinomio característico** de $A$ y tiene grado $n$ cuando $A$ es $n \times n$. Sus raíces son exactamente los valores propios.

**Procedimiento.** 1) Forma la matriz $A - \lambda I$ restando $\lambda$ a cada entrada de la diagonal. 2) Calcula su determinante y resuelve $\det(A - \lambda I) = 0$. 3) Para cada valor propio $\lambda$, resuelve el sistema $(A - \lambda I)v = \vec{0}$ para hallar los vectores propios. 4) El conjunto de soluciones de ese sistema se llama **espacio propio** de $\lambda$ y se escribe $E_\lambda = \ker(A - \lambda I)$.

**Ejemplo completo.** Para
$$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$$
se tiene
$$\det(A - \lambda I) = \det\begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix} = (4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda - 5)(\lambda - 2).$$
Los valores propios son $\lambda = 5$ y $\lambda = 2$. Para $\lambda = 5$:
$$(A - 5I)v = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \Longrightarrow -x + y = 0 \Longrightarrow y = x,$$
así que un vector propio es $(1,1)$ y $E_5 = \operatorname{span}\{(1,1)\}$. Para $\lambda = 2$:
$$(A - 2I)v = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \Longrightarrow 2x + y = 0,$$
así que un vector propio es $(1,-2)$ y $E_2 = \operatorname{span}\{(1,-2)\}$.

**Comprobación rápida.** La suma de los valores propios (contando multiplicidades) coincide con la **traza** de $A$, que es la suma de los elementos de la diagonal principal y se escribe $\operatorname{tr}(A)$: aquí $5 + 2 = 7 = 4 + 3$. El producto de los valores propios coincide con el determinante: $5 \cdot 2 = 10 = \det A$. Estas dos pistas permiten verificar los cálculos.

**Ejemplo $3 \times 3$.** Para
$$A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & 1 \\ 0 & 0 & 3 \end{pmatrix}$$
el polinomio característico es $p_A(\lambda) = (2-\lambda)(3-\lambda)^2$, porque la matriz $A - \lambda I$ es triangular. Los valores propios son $\lambda = 2$ (simple) y $\lambda = 3$ (doble). Para $\lambda = 2$, el espacio propio es $\operatorname{span}\{(1,0,0)\}$. Para $\lambda = 3$ hay que resolver $(A - 3I)v = \vec{0}$ con
$$A - 3I = \begin{pmatrix} -1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix},$$
que obliga a $x = 0$ y $z = 0$, dejando $y$ libre: $E_3 = \operatorname{span}\{(0,1,0)\}$, de dimensión $1$. En total hay tres valores propios contando multiplicidad pero solo dos direcciones propias independientes; esta observación será clave al estudiar la diagonalización.

**Multiplicidades.** La **multiplicidad algebraica** de $\lambda$ es el número de veces que $\lambda$ aparece como raíz del polinomio característico. La **multiplicidad geométrica** es la dimensión de su espacio propio, $\dim E_\lambda$. Siempre se cumple $1 \leq \text{geométrica} \leq \text{algebraica}$. Cuando no coinciden, la matriz no tendrá suficientes direcciones propias.

**Un caso sin valores propios reales.** La matriz de rotación de $90°$,
$$R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix},$$
tiene polinomio característico $\lambda^2 + 1 = 0$, cuyas raíces son $\lambda = i$ y $\lambda = -i$, números complejos. Tiene sentido geométrico: al rotar $90°$ ninguna dirección real se conserva, así que no hay vectores propios reales. Los valores propios complejos son perfectamente válidos y muy útiles (por ejemplo, describen oscilaciones), pero en este curso nos centraremos en los reales.

## Diagonalización

**Definición.** Una matriz cuadrada $A$ es **diagonalizable** si existen una matriz invertible $P$ y una matriz diagonal $D$ tales que
$$A = P D P^{-1}.$$
Cada símbolo: $P$ es la **matriz de paso**, cuyas columnas son los vectores propios de $A$; $P^{-1}$ es su inversa; y $D$ es una matriz **diagonal** (con ceros fuera de la diagonal) que lleva los valores propios en la diagonal, en el mismo orden en que se colocaron los vectores propios en $P$. La utilidad es enorme: en la base de vectores propios, $A$ se comporta como $D$, y $D$ es fácil de elevar a potencias, de invertir y de analizar. Diagonalizar es, en el fondo, cambiar de coordenadas para que la transformación sea un simple escalado por ejes.

**Criterio.** Una matriz $n \times n$ es diagonalizable si y solo si tiene $n$ vectores propios linealmente independientes. En términos de multiplicidades: es diagonalizable si y solo si para cada valor propio la multiplicidad geométrica iguala a la algebraica. Un caso particular muy cómodo: si todos los valores propios son distintos (sin repeticiones), entonces la matriz es automáticamente diagonalizable.

**Procedimiento.** 1) Halla los valores propios resolviendo $\det(A - \lambda I) = 0$. 2) Para cada uno, halla una base de su espacio propio. 3) Si juntando todas las bases obtienes $n$ vectores independientes, forma $P$ con ellos como columnas y $D$ con los valores propios correspondientes en la diagonal. 4) Escribe $A = PDP^{-1}$ y, si quieres, verifica multiplicando.

**Ejemplo completo.** Para $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ ya obtuvimos los pares $(\lambda=5, v=(1,1))$ y $(\lambda=2, v=(1,-2))$. Entonces
$$P = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}, \qquad D = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}, \qquad P^{-1} = \begin{pmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{pmatrix},$$
y se cumple $A = PDP^{-1}$. En efecto, $P^{-1}$ se obtuvo con la fórmula de $2 \times 2$ (determinante de $P$ igual a $-3$) y la verificación directa reproduce las entradas originales.

**Potencias de una matriz.** Si $A = PDP^{-1}$, entonces $A^k = P D^k P^{-1}$ para todo entero $k \geq 0$, porque los productos $P^{-1}P$ intermedios se cancelan. Calcular potencias grandes de $A$ se reduce a elevar números al exponente $k$ en la diagonal de $D$. Esta técnica es la base del análisis de sistemas que evolucionan paso a paso.

**Aplicación: cadenas de Markov.** El modelo de dos estados
$$M = \begin{pmatrix} 0.9 & 0.2 \\ 0.1 & 0.8 \end{pmatrix}$$
representa probabilidades de transición. Sus valores propios son $\lambda = 1$ y $\lambda = 0.7$. El vector propio de $\lambda = 1$ es $(2,1)$, que normalizado (dividido entre su suma, $3$) da la distribución estable $(2/3, 1/3)$: a largo plazo el sistema converge a ese reparto, y el valor propio dominante $1$ garantiza que la masa total se conserva. Así se explican el clima, los mercados y el famoso algoritmo PageRank.

**Teorema espectral.** Si $A$ es una matriz **simétrica** real (es decir, $A = A^T$), entonces es diagonalizable de forma especial: existe una matriz $Q$ cuyas columnas son vectores propios **ortonormales** (perpendiculares entre sí y de longitud $1$) tal que
$$A = Q D Q^T, \quad \text{con } Q^T Q = I, \text{ o sea } Q^{-1} = Q^T.$$
Aquí aparece $Q^T$, la transpuesta de $Q$; en matrices ortogonales coincide con la inversa, lo que hace el cálculo aún más sencillo. Ejemplo: $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ tiene valores propios $3$ y $1$, y se diagonaliza con $Q$ de columnas $(1,1)/\sqrt{2}$ y $(1,-1)/\sqrt{2}$.

**Cuando no se puede diagonalizar.** La matriz
$$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$$
tiene un único valor propio $\lambda = 1$ (doble) y su espacio propio es $\operatorname{span}\{(1,0)\}$, de dimensión $1$. Como la multiplicidad geométrica ($1$) es menor que la algebraica ($2$), no es diagonalizable. Estos casos se estudian con la forma de Jordan, una versión casi diagonal que no veremos aquí.

## Producto interno y ortogonalidad

**Producto interno.** El **producto interno** es una operación que asigna a cada par de vectores $u, v$ un número, escrito $\langle u, v \rangle$ (se lee "u punto v" o "producto interno de u con v"). Sirve para medir ángulos, longitudes y distancias, cosas que la estructura de espacio vectorial por sí sola no permite. En $\mathbb{R}^n$ el producto interno estándar es el **producto punto**:
$$\langle u, v \rangle = u_1 v_1 + u_2 v_2 + \cdots + u_n v_n = \sum_{i=1}^{n} u_i v_i.$$
Es decir: se multiplican las coordenadas correspondientes y se suman los resultados. Ejemplo: $\langle (1,2,3), (4,-1,0) \rangle = 1\cdot 4 + 2\cdot(-1) + 3\cdot 0 = 2$. Propiedades básicas: $\langle u, v \rangle = \langle v, u \rangle$ (conmutativo), es lineal en cada variable y $\langle v, v \rangle \geq 0$, con igualdad solo para $v = \vec{0}$.

**Norma y distancia.** La **norma** o longitud de un vector es $\|v\| = \sqrt{\langle v, v \rangle}$; las dobles barras $\|\cdot\|$ son la notación estándar de longitud. En $\mathbb{R}^3$, $\|(3,4,0)\| = \sqrt{9+16} = 5$. La **distancia** entre $u$ y $v$ es $d(u,v) = \|u - v\|$. Un vector de norma $1$ se llama **unitario**; para normalizar $v \neq \vec{0}$ se divide entre su norma: $v/\|v\|$.

**Ángulo y ortogonalidad.** El ángulo $\theta$ entre dos vectores no nulos cumple
$$\cos\theta = \frac{\langle u, v \rangle}{\|u\|\,\|v\|}.$$
Dos vectores son **ortogonales** (perpendiculares) si $\langle u, v \rangle = 0$. Por ejemplo, $(1,2)$ y $(2,-1)$ son ortogonales porque $1\cdot 2 + 2\cdot(-1) = 0$. Un conjunto de vectores es **ortogonal** si todos sus elementos son perpendiculares entre sí, y es **ortonormal** si además todos tienen norma $1$. Las bases ortonormales son las mejores para calcular, porque las coordenadas se obtienen con simples productos internos: si $\{q_1,\ldots,q_n\}$ es ortonormal, entonces $v = \langle v, q_1\rangle q_1 + \cdots + \langle v, q_n\rangle q_n$.

**Proyección.** La **proyección** de $u$ sobre $v$ (con $v \neq \vec{0}$) es el vector
$$\operatorname{proy}_v(u) = \frac{\langle u, v \rangle}{\langle v, v \rangle}\, v.$$
La fracción indica cuánto de $u$ apunta en la dirección de $v$. La diferencia $u - \operatorname{proy}_v(u)$ es la **componente ortogonal** y es perpendicular a $v$; así, la proyección descompone $u$ en una parte paralela y otra perpendicular a $v$. Ejemplo: la proyección de $(2,3)$ sobre $(1,1)$ es $\frac{5}{2}(1,1) = (2.5, 2.5)$, y la componente ortogonal es $(-0.5, 0.5)$.

**Gram-Schmidt.** El método de **Gram-Schmidt** fabrica una base ortonormal a partir de una base cualquiera. Dados $v_1, v_2, \ldots$, se construyen vectores ortogonales $u_1, u_2, \ldots$ así: $u_1 = v_1$; luego $u_2 = v_2 - \operatorname{proy}_{u_1}(v_2)$; y en general a cada $v_k$ se le restan sus proyecciones sobre todos los $u_i$ anteriores. Al final se normaliza cada $u_i$ dividiéndolo entre su norma. Ejemplo con $v_1=(1,1,0)$ y $v_2=(1,0,1)$: $u_1 = (1,1,0)$ y
$$u_2 = (1,0,1) - \frac{1}{2}(1,1,0) = \left(\tfrac{1}{2}, -\tfrac{1}{2}, 1\right),$$
que es perpendicular a $u_1$, como se comprueba con el producto interno.

**Complemento ortogonal.** Dado un subespacio $W$ de $\mathbb{R}^n$, su **complemento ortogonal** $W^\perp$ (se lee "W perpendicular") es el conjunto de vectores perpendiculares a todos los de $W$. Se cumple que todo vector de $\mathbb{R}^n$ se descompone de forma única como suma de uno de $W$ y otro de $W^\perp$.

**Mínimos cuadrados.** Cuando el sistema $A\vec{x} = \vec{b}$ no tiene solución (es incompatible), a veces interesa la **mejor solución aproximada**: el vector $\vec{x}$ que hace mínima la distancia $\|A\vec{x} - \vec{b}\|$. Ese vector se obtiene resolviendo las **ecuaciones normales**
$$A^T A \vec{x} = A^T \vec{b},$$
donde $A^T$ es la transpuesta de $A$. La explicación geométrica: el error $\vec{b} - A\vec{x}$ debe ser perpendicular al espacio columna de $A$, y la condición de perpendicularidad con cada columna conduce exactamente a $A^T(A\vec{x} - \vec{b}) = \vec{0}$. Si las columnas de $A$ son independientes, $A^T A$ es invertible y $\vec{x} = (A^T A)^{-1} A^T \vec{b}$.

**Ejemplo: ajustar una recta.** Se quieren ajustar los puntos $(1,2)$, $(2,3)$, $(3,5)$ a una recta $y = b + m x$, donde $b$ es la ordenada en el origen y $m$ la pendiente. Se plantea el sistema sobredeterminado
$$\begin{pmatrix} 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{pmatrix}\begin{pmatrix} b \\ m \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \\ 5 \end{pmatrix}.$$
Entonces $A^T A = \begin{pmatrix} 3 & 6 \\ 6 & 14 \end{pmatrix}$ y $A^T \vec{b} = \begin{pmatrix} 10 \\ 23 \end{pmatrix}$. Resolviendo, $m = 1.5$ y $b = 1/3 \approx 0.33$, así que la recta ajustada es $y \approx 1.5x + 0.33$. Este es el corazón de la **regresión lineal**, una de las herramientas más usadas en estadística y aprendizaje automático.

## Aplicaciones y contexto

El álgebra lineal aparece en prácticamente toda la ciencia y la ingeniería. Algunos contextos donde estos conceptos se usan a diario:

- **Computación gráfica y videojuegos:** rotar, escalar, proyectar o reflejar objetos 3D se hace multiplicando sus coordenadas por matrices. La cámara, la luz y las animaciones son transformaciones lineales.
- **Ciencia de datos y aprendizaje automático:** las tablas de datos son matrices; el análisis de componentes principales (PCA) usa valores y vectores propios de la matriz de covarianza; la regresión es un problema de mínimos cuadrados; las redes neuronales encadenan productos de matrices.
- **Física e ingeniería:** los circuitos eléctricos, las estructuras, las vibraciones mecánicas y la mecánica cuántica se modelan con sistemas lineales y operadores cuyos valores propios son frecuencias o niveles de energía.
- **Economía:** los modelos de insumo-producto de Leontief relacionan sectores mediante matrices y buscan su vector propio dominante.
- **Búsqueda en internet:** el algoritmo PageRank calcula el vector propio principal de la matriz de enlaces de la web.
- **Matemática pura:** el álgebra lineal es el lenguaje de las ecuaciones diferenciales, la geometría y el análisis numérico.

## Errores comunes

Estos son los tropiezos más frecuentes al empezar con álgebra lineal. Reconocerlos a tiempo ahorra muchos puntos en los exámenes.

- **Sumar matrices de distinto tamaño.** La suma entrada con entrada solo existe si ambas matrices tienen las mismas filas y las mismas columnas. Si los tamaños difieren, la operación no está definida.
- **Multiplicar matrices entrada con entrada.** El producto no es como la suma: se hace fila por columna y se suman los productos. Multiplicar $a_{ij}b_{ij}$ da un resultado equivocado.
- **Creer que $AB = BA$.** El producto de matrices casi nunca es conmutativo; incluso puede ocurrir que $AB$ exista y $BA$ no. Siempre revisa los tamaños y el orden.
- **Olvidar la condición de tamaño en el producto.** Para multiplicar $A$ por $B$ debe cumplirse que el número de columnas de $A$ sea igual al número de filas de $B$; el resultado tiene el número de filas de $A$ y el número de columnas de $B$.
- **Confundir la matriz con su determinante.** La matriz es la tabla; el determinante es un número que sale de ella. Solo las matrices cuadradas tienen determinante.
- **Dividir entre un determinante nulo.** Si $\det(A) = 0$, la inversa no existe y no se puede dividir entre $\det A$. Antes de calcular cualquier inversa, comprueba el determinante.
- **Perder signos al desarrollar cofactores.** El factor $(-1)^{i+j}$ alterna los signos en forma de tablero de ajedrez. Un signo mal puesto arruina todo el determinante; anótalo o desarrolla por una fila con ceros.
- **Creer que dos vectores dependientes deben ser distintos.** Dos vectores iguales o uno múltiplo del otro ya son dependientes; también lo es cualquier conjunto que contenga al vector $\vec{0}$.
- **Creer que cualquier conjunto que genera es una base.** Generar no basta: hace falta además que el conjunto sea linealmente independiente. Un conjunto con redundancia genera, pero no es base.
- **Confundir rango con número de filas.** El rango nunca supera el número de filas, pero puede ser menor si hay filas dependientes; es el número de filas o columnas independientes.
- **Confundir núcleo con imagen.** El núcleo vive en el dominio y contiene lo que se aplasta al cero; la imagen vive en el codominio y contiene los resultados alcanzables. No son el mismo conjunto ni están en el mismo espacio.
- **Confundir inyectiva con sobreyectiva.** Inyectiva significa que no hay dos entradas con la misma salida (equivale a $\ker T = \{\vec{0}\}$); sobreyectiva significa que toda salida posible se alcanza (equivale a $\operatorname{Im} T = W$).
- **Suponer que toda matriz es diagonalizable.** Solo lo es si tiene suficientes vectores propios independientes. Ejemplo clásico: $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ no lo es.
- **Creer que un vector propio puede ser $\vec{0}$.** Por definición se exige $v \neq \vec{0}$; el vector cero cumple la ecuación para cualquier $\lambda$ y no indica ninguna dirección propia. Tampoco te asustes con $\lambda = 0$: es un valor propio válido y significa que la matriz aplasta alguna dirección.
- **Aplicar mal Gram-Schmidt.** A cada vector nuevo hay que restarle sus proyecciones sobre **todos** los vectores ortogonales anteriores, no solo sobre el último; si no, pierdes la ortogonalidad.
- **Olvidar la transpuesta en mínimos cuadrados.** Las ecuaciones normales son $A^T A \vec{x} = A^T \vec{b}$: la $A^T$ debe multiplicar por la izquierda en ambos lados. Escribir $A\vec{x} = \vec{b}$ cuando no hay solución exacta es precisamente el error que la técnica corrige.

## Ejercicios propuestos (con respuestas)

Resuelve cada ejercicio y consulta las respuestas al final. Están ordenados de menor a mayor dificultad y cubren todos los temas.

1. ¿Es $\{(1,2),(2,4)\}$ una base de $\mathbb{R}^2$?
2. Halla la dimensión de $\operatorname{span}\{(1,0,2),(0,1,3)\}$.
3. ¿Son linealmente independientes $(1,1,0)$, $(0,1,1)$ y $(1,0,1)$?
4. Expresa $(4,3)$ como combinación lineal de $(1,2)$ y $(2,-1)$.
5. Resuelve por Gauss: $x+y+z=2$, $x-y+z=0$, $2x+y-z=1$.
6. Clasifica el sistema $x+y+z=1$, $2x+2y+2z=2$, $x-y=0$.
7. Clasifica el sistema $x+y=2$, $2x+2y=5$.
8. Calcula $\det\begin{pmatrix} 2 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}$.
9. Calcula $\det\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
10. Halla la inversa de $\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$.
11. Halla la inversa de $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.
12. Halla el rango de $\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 1 & 3 & 7 \end{pmatrix}$.
13. Escribe la matriz de $T(x,y) = (x+y,\; x-y)$ en la base canónica y decide si es biyectiva.
14. Halla el núcleo y la imagen de $T(x,y,z) = (x,0,z)$.
15. Halla los valores propios de $\begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$.
16. Halla los valores propios de $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
17. Diagonaliza $A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$ escribiendo $A = PDP^{-1}$.
18. ¿Es diagonalizable $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$? Justifica.
19. Proyecta $(3,4)$ sobre $(1,0)$.
20. Ajusta por mínimos cuadrados una recta a los puntos $(0,0)$, $(1,2)$, $(2,3)$.

**Respuestas.**

1. No: los vectores son dependientes, porque $(2,4) = 2(1,2)$.
2. $2$, porque los dos vectores no son múltiplos entre sí.
3. Sí: el determinante de la matriz que forman vale $1 \neq 0$.
4. $(4,3) = 2(1,2) + 1(2,-1)$.
5. $(x,y,z) = (1/3, 1, 2/3)$.
6. Infinitas soluciones: $x = y = t$, $z = 1 - 2t$ con $t \in \mathbb{R}$.
7. Incompatible: al restar queda $0 = 1$; las rectas son paralelas.
8. $4$ (desarrollo por la primera fila).
9. $-1$.
10. $\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$ (determinante $1$).
11. $\begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix}$ (determinante $-2$).
12. Rango $2$: la tercera fila es la suma de las dos primeras.
13. Matriz $\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$; su determinante es $-2 \neq 0$, así que $T$ es inyectiva y sobreyectiva, es decir, biyectiva.
14. Núcleo: $\{(0,t,0) : t \in \mathbb{R}\}$; imagen: el plano $xz$, formado por los vectores $(a,0,c)$.
15. $\lambda = 4$ y $\lambda = 2$, porque $(3-\lambda)^2 - 1 = 0$.
16. $\lambda = 1$ y $\lambda = -1$, porque $\lambda^2 - 1 = 0$.
17. $P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ y $D = \begin{pmatrix} 4 & 0 \\ 0 & 2 \end{pmatrix}$; los vectores propios son $(1,1)$ y $(1,-1)$.
18. No: $\lambda = 1$ es doble pero el espacio propio es $\operatorname{span}\{(1,0)\}$, de dimensión $1$.
19. $(3,0)$: la proyección conserva la primera coordenada y anula la segunda.
20. $y \approx 1.5x + 0.17$; las ecuaciones normales dan $3b + 3m = 5$ y $3b + 5m = 8$.

## Resumen

- Un **espacio vectorial** es un conjunto $V$ con suma y producto por escalares que cumplen las reglas de cerradura, conmutatividad, asociatividad, neutro $\vec{0}$, inverso, distributividad y compatibilidad. Sus ejemplos típicos son $\mathbb{R}^n$, las matrices, los polinomios y las funciones continuas. Un **subespacio** es un subconjunto cerrado bajo suma y escalares que siempre contiene a $\vec{0}$.
- Una **combinación lineal** es $\alpha_1 v_1 + \cdots + \alpha_k v_k$; el **span** es el conjunto de todas ellas. Los vectores son **independientes** si la única combinación que da $\vec{0}$ es la trivial. Una **base** genera y es independiente; la **dimensión** es su número de vectores y las **coordenadas** respecto de una base son únicas.
- Un **sistema lineal** se escribe $A\vec{x} = \vec{b}$ y se resuelve con eliminación de Gauss sobre la matriz ampliada $[A \mid \vec{b}]$. La clasificación depende del **rango**: solución única si rango$(A) = \text{rango}(A \mid b) = n$; infinitas soluciones si ambos coinciden y son menores que $n$; incompatible si rango$(A) < \text{rango}(A \mid b)$.
- El **determinante** $\det A$ es un número que mide volumen con signo; $A$ es invertible si y solo si $\det A \neq 0$, y entonces $A^{-1} = \frac{1}{\det A}\operatorname{adj}(A)$. La **regla de Cramer** resuelve sistemas cuadrados con $x_i = \det(A_i)/\det(A)$.
- Una **transformación lineal** $T: V \to W$ respeta sumas y escalares; toda ella se representa con una matriz cuyas columnas son las imágenes de los vectores de la base. La composición corresponde al producto de matrices.
- El **núcleo** $\ker T = \{v : T(v) = \vec{0}\}$ mide la pérdida de información y la **imagen** $\operatorname{Im} T = \{T(v)\}$ mide el alcance. $T$ es inyectiva si y solo si $\ker T = \{\vec{0}\}$, y el **teorema de la dimensión** afirma $\dim V = \dim(\ker T) + \dim(\operatorname{Im} T)$.
- Un **valor propio** $\lambda$ y su **vector propio** $v \neq \vec{0}$ cumplen $A v = \lambda v$; se calculan con el polinomio característico $p_A(\lambda) = \det(A - \lambda I) = 0$. La suma de los valores propios es la traza y su producto es el determinante.
- Una matriz es **diagonalizable**, $A = PDP^{-1}$, si tiene $n$ vectores propios independientes; siempre lo es si sus valores propios son distintos, y toda matriz simétrica real se diagonaliza ortogonalmente: $A = QDQ^T$.
- El **producto interno** $\langle u, v \rangle$ mide longitudes y ángulos; la **proyección** de $u$ sobre $v$ es $\frac{\langle u,v\rangle}{\langle v,v\rangle}v$; **Gram-Schmidt** construye bases ortonormales; y los **mínimos cuadrados** resuelven sistemas incompatibles mediante $A^T A \vec{x} = A^T \vec{b}$, la base de la regresión lineal.
`
};
