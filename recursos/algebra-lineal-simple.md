# Álgebra lineal
**Guía simple · Álgebra superior · Univ 1–2**
*Matrices, espacios vectoriales, valores propios y diagonalización.*

## 1. Espacios vectoriales

Un **espacio vectorial sobre un cuerpo $\mathbb{K}$** es un conjunto $V$ con dos operaciones: una **suma** de vectores, $u+v$, y un **producto por escalares**, $\alpha v$. Aquí $\mathbb{K}$ (se lee "cuerpo K") es el conjunto de números que usamos como escalares, casi siempre $\mathbb{R}$, el conjunto de los números reales; $V$ es el conjunto cuyos elementos llamamos vectores; $u$ y $v$ son vectores; y $\alpha$ es un escalar. Las operaciones deben cumplir las reglas de siempre: conmutatividad, asociatividad, neutro $\vec{0}$ (el vector cero, que cumple $v+\vec{0}=v$), inverso $-v$ (que cumple $v+(-v)=\vec{0}$), distributividad y compatibilidad de escalares.

**Ejemplos:** $\mathbb{R}^n$ (las listas de $n$ números reales), las matrices $M_{m \times n}$ (tablas con $m$ filas y $n$ columnas), los polinomios $\mathbb{K}[x]$, las funciones continuas $C[a,b]$ y las soluciones de una ecuación diferencial lineal homogénea.

Un **subespacio** $W \subseteq V$ es un subconjunto no vacío cerrado bajo suma y producto por escalares. El símbolo $\subseteq$ se lee "subconjunto de". En la práctica basta comprobar que $\vec{0} \in W$ y que sumar o escalar elementos de $W$ no se sale de $W$.

**Mini-ejemplo.** En $\mathbb{R}^3$, el conjunto $W = \{(x,y,0) : x, y \in \mathbb{R}\}$ es un subespacio: la notación se lee "las ternas $(x,y,0)$ con $x,y$ reales", y al sumar o escalar se conserva la tercera coordenada nula.

## 2. Independencia, base y dimensión

- **Combinación lineal:** una expresión $\alpha_1 v_1 + \cdots + \alpha_n v_n$, donde los $v_i$ son vectores y los $\alpha_i$ son escalares elegidos libremente. Es sumar copias estiradas o encogidas de cada vector.
- **Generan:** los vectores $v_1,\ldots,v_n$ generan a $V$ si todo vector del espacio se puede escribir como combinación lineal de ellos. El conjunto de todas las combinaciones se llama el span o generado y se escribe $\operatorname{span}\{v_1,\ldots,v_n\}$.
- **Independientes:** los vectores son linealmente independientes si la única combinación que da $\vec{0}$ es la trivial, es decir, la que tiene todos los coeficientes iguales a cero. Si alguna combinación con coeficientes no todos nulos da $\vec{0}$, son dependientes (hay redundancia).
- **Base:** conjunto que genera y es independiente. Su utilidad es que cada vector del espacio se escribe de manera única como combinación de los vectores de la base; esos coeficientes se llaman coordenadas y se escriben $[v]_B$.
- **Dimensión:** número de vectores de una base, escrito $\dim V$; no depende de la base elegida.

**Mini-ejemplo.** En $\mathbb{R}^3$, $\{(1,0,0),(0,1,0),(0,0,1)\}$ es la base canónica (los vectores $e_1,e_2,e_3$, cada uno con un $1$ en su posición y ceros en el resto) y $\dim \mathbb{R}^3 = 3$. Los vectores $(1,1,1)$ y $(2,2,2)$ son dependientes porque uno es múltiplo del otro: $(2,2,2) = 2(1,1,1)$.

## 3. Matrices y sistemas: eliminación de Gauss

Un sistema de ecuaciones lineales se escribe en forma matricial como $A\vec{x} = \vec{b}$: $A$ es la matriz de coeficientes (la tabla de números que multiplican a las incógnitas), $\vec{x}$ es el vector columna de incógnitas y $\vec{b}$ es el vector columna de términos independientes. Se resuelve con **eliminación de Gauss**: se aplican operaciones elementales por filas (intercambiar filas, multiplicar una fila por un número no nulo y sumar a una fila un múltiplo de otra) hasta la forma escalonada, y luego se despeja de abajo hacia arriba.

**Teorema de Rouché-Frobenius:** el **rango** de una matriz es el número de filas no nulas que quedan tras aplicar Gauss, e indica cuánta información independiente contiene. Comparando el rango de $A$ con el rango de la matriz ampliada $(A \mid b)$, que junta $A$ con la columna $\vec{b}$ separadas por una barra:

- $\text{rango}(A) < \text{rango}(A \mid b)$: sistema incompatible (no tiene solución).
- $\text{rango}(A) = \text{rango}(A \mid b) = n$: solución única, donde $n$ es el número de incógnitas.
- $\text{rango}(A) = \text{rango}(A \mid b) < n$: infinitas soluciones con $n - r$ parámetros libres, donde $r$ es el rango común.

**Forma matricial:**
$$\begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} b_1 \\ b_2 \end{pmatrix}$$
Aquí $a_{ij}$ es el coeficiente de la fila $i$ y la columna $j$, $x$ e $y$ son las incógnitas y $b_1,b_2$ los resultados conocidos.

**Mini-ejemplo.**
$$\begin{cases} x + y = 3 \\ 2x - y = 0 \end{cases} \Rightarrow x = 1, \; y = 2$$
Comprobación: $1+2=3$ y $2(1)-2=0$.

## 4. Rango, determinantes e inversa

- **Rango:** número de filas (o columnas) independientes; también es la dimensión de la imagen de la transformación asociada a la matriz.
- **Determinante:** número que se calcula a partir de una matriz cuadrada y que mide el volumen con signo del paralelepípedo formado por sus columnas. Se escribe $\det A$ y cumple $\det(AB) = \det A \det B$.
- **Inversa:** la matriz $A^{-1}$ que cumple $A A^{-1} = A^{-1} A = I$, donde $I$ es la identidad (unos en la diagonal y ceros fuera). Existe si y solo si $\det A \neq 0$, y entonces
$$A^{-1} = \frac{1}{\det A}\,\text{adj}(A)$$
donde $\text{adj}(A)$ es la adjunta, la transpuesta de la matriz de cofactores.
- **Regla de Cramer:** si $\det A \neq 0$, la solución del sistema $A\vec{x}=\vec{b}$ es $x_i = \dfrac{\det(A_i)}{\det A}$, donde $A_i$ es la matriz que resulta de reemplazar la columna $i$ de $A$ por $\vec{b}$.

**Mini-ejemplo.** $\det\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} = 2 \cdot 3 - 1 \cdot 1 = 5 \neq 0$, luego la matriz es invertible.

## 5. Transformaciones lineales

$T : V \to W$ es una **transformación lineal** si respeta la suma y el producto por escalares:
$$T(u + v) = T(u) + T(v), \qquad T(\alpha v) = \alpha T(v)$$
La notación $T: V \to W$ se lee "T de V en W": $V$ es el dominio (de dónde salen los vectores) y $W$ el codominio (a dónde llegan); $T(v)$ es la imagen del vector $v$. Toda transformación lineal entre espacios de dimensión finita se representa con una **matriz** una vez elegidas las bases: en la base canónica, cada columna es la imagen de un vector de la base. La composición de transformaciones corresponde al producto de matrices.

**Mini-ejemplo.** $T(x,y) = (2x, \, x+y)$ tiene matriz $\begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$ en la base canónica, porque $T(1,0) = (2,1)$ da la primera columna y $T(0,1) = (0,1)$ da la segunda.

## 6. Núcleo, imagen y teorema de la dimensión

- **Núcleo:** el núcleo de $T$, escrito $\ker T$ (de la palabra inglesa kernel), es el conjunto de todos los vectores $v$ que $T$ envía al vector cero: $\ker T = \{v : T(v) = \vec{0}\}$. En palabras, mide cuánta información se pierde al aplicar $T$.
- **Imagen:** la imagen de $T$, escrita $\operatorname{Im} T$, es el conjunto de todos los resultados posibles: $\operatorname{Im} T = \{T(v) : v \in V\}$. En palabras, es el alcance de la transformación.
- $T$ es inyectiva (sin dos entradas con la misma salida) $\iff \ker T = \{\vec{0}\}$; y es sobreyectiva (todo el codominio se alcanza) $\iff \operatorname{Im} T = W$. El símbolo $\iff$ se lee "si y solo si".
- **Teorema de la dimensión:** $\dim V = \dim(\ker T) + \dim(\operatorname{Im} T)$. La dimensión de entrada se reparte entre lo que se pierde (núcleo) y lo que sobrevive (imagen).

**Mini-ejemplo.** $T(x,y,z) = (x+y+z, \, 0)$: el núcleo son los vectores con $x+y+z=0$, un plano de dimensión $2$; la imagen son los vectores de la forma $(t,0)$, una recta de dimensión $1$; como $2+1 = 3$, el teorema se cumple.

## 7. Valores propios y diagonalización

$\lambda$ (la letra griega "lambda") es un **valor propio** de la matriz $A$, con **vector propio** $v \neq \vec{0}$, si al multiplicar la matriz por el vector se obtiene el mismo vector escalado:
$$A v = \lambda v$$
En palabras: $A$ no cambia la dirección de $v$, solo la estira o encoge un factor $\lambda$. Se calculan con el **polinomio característico** $p_A(\lambda) = \det(A - \lambda I) = 0$, donde $I$ es la identidad del mismo tamaño que $A$; sus raíces son los valores propios. El conjunto de vectores propios de un mismo $\lambda$, junto con el cero, forma el espacio propio $E_\lambda = \ker(A - \lambda I)$.

$A$ es **diagonalizable** si tiene suficientes vectores propios independientes como para formar una base, equivalentemente si $A = P D P^{-1}$, donde $P$ es la matriz cuyas columnas son los vectores propios, $D$ es la matriz diagonal con los valores propios en la diagonal y $P^{-1}$ es la inversa de $P$. Es diagonalizable si la multiplicidad geométrica (dimensión del espacio propio) iguala a la algebraica (veces que $\lambda$ aparece como raíz) en cada valor propio.

**Teorema espectral:** toda matriz simétrica real (igual a su transpuesta, $A = A^T$) es diagonalizable con una base **ortonormal** de vectores propios.

**Mini-ejemplo.** $A = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ tiene valores propios $2$ y $3$ y es diagonalizable (ya es diagonal). En cambio $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ no lo es: $\lambda = 1$ es doble pero solo hay un vector propio independiente, $(1,0)$.

## 8. Producto interno y ortogonalidad

El **producto interno** $\langle u, v \rangle$ asigna un número a cada par de vectores y permite medir ángulos y distancias; en $\mathbb{R}^n$ es el producto punto, $\langle u,v\rangle = u_1v_1 + \cdots + u_nv_n$. Dos vectores son **ortogonales** (perpendiculares) si $\langle u, v \rangle = 0$.

- **Proyección** de $u$ sobre $v$: $\dfrac{\langle u, v \rangle}{\langle v, v \rangle}\,v$. Es la parte de $u$ que apunta en la dirección de $v$.
- **Gram-Schmidt:** procedimiento que construye bases ortonormales (vectores perpendiculares entre sí y de longitud $1$) restando a cada vector sus proyecciones sobre los anteriores.
- **Mínimos cuadrados:** cuando $A\vec{x} = \vec{b}$ no tiene solución exacta, la mejor solución aproximada $x$ sale de las ecuaciones normales $A^T A \vec{x} = A^T \vec{b}$, donde $A^T$ es la transpuesta de $A$.

**Mini-ejemplo.** La proyección de $(1,1)$ sobre $(1,0)$ es $(1,0)$: la parte perpendicular es $(0,1)$, que no tiene componente en la dirección de $(1,0)$.

## Ejercicios (20)

### Nivel 1 — Espacios vectoriales y bases
1. ¿Es $\{(1,2), (2,4)\}$ una base de $\mathbb{R}^2$?
2. ¿Genera $\{(1,0,0), (0,1,0), (0,0,1)\}$ a $\mathbb{R}^3$?
3. Halla la dimensión del subespacio de $\mathbb{R}^3$ generado por $(1,1,0)$ y $(0,0,1)$.
4. ¿Son independientes los vectores $(1,2,3)$ y $(2,4,6)$?
5. Expresa $(3,5)$ como combinación de $(1,0)$ y $(0,1)$.

### Nivel 2 — Sistemas, rango y determinantes
6. Resuelve $\begin{cases} x + y = 3 \\ 2x - y = 0 \end{cases}$.
7. Resuelve $\begin{cases} 2x + y = 5 \\ x - y = 1 \end{cases}$.
8. Calcula $\det\begin{pmatrix} 2 & -1 \\ 3 & 4 \end{pmatrix}$.
9. Calcula $\det\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$.
10. Halla el rango de $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$.

### Nivel 3 — Transformaciones, valores propios y diagonalización
11. Escribe la matriz de $T(x,y) = (2x, \, x+y)$ en la base canónica.
12. Halla los valores propios de $\begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix}$.
13. Halla los valores propios de $\begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.
14. Determina el núcleo y la imagen de $T(x,y,z) = (x, 0, z)$.
15. ¿Es diagonalizable $\begin{pmatrix} 2 & 2 \\ 0 & 2 \end{pmatrix}$?

### Nivel 4 — Ortogonalidad y aplicaciones
16. Proyecta $(2,3)$ sobre $(1,1)$.
17. Proyecta $(1,1)$ sobre $(1,0)$.
18. ¿Son ortogonales $(1,2)$ y $(2,-1)$?
19. Ajusta por mínimos cuadrados la recta a los puntos $(0,1)$, $(1,2)$, $(2,4)$.
20. Halla el valor propio dominante del modelo $\begin{pmatrix} 0.9 & 0.2 \\ 0.1 & 0.8 \end{pmatrix}$.

## Respuestas
1. No: son dependientes, uno es múltiplo del otro.
2. Sí, es la base canónica de $\mathbb{R}^3$.
3. $\dim = 2$.
4. No: $(2,4,6) = 2(1,2,3)$.
5. $(3,5) = 3(1,0) + 5(0,1)$.
6. $x = 1$, $y = 2$.
7. $x = 2$, $y = 1$.
8. $11$.
9. $1$.
10. Rango $1$.
11. $\begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$.
12. $\lambda = 3$ y $\lambda = -2$.
13. $\lambda = 5$ y $\lambda = 2$.
14. Núcleo $\{(0,t,0)\}$; imagen el plano $xz$.
15. No: el único vector propio es $(1,0)$.
16. $\dfrac{5}{2}(1,1)$.
17. $(1,0)$.
18. Sí: $(1)(2) + (2)(-1) = 0$.
19. $y \approx 1.5x + 0.83$.
20. $\lambda = 1$.