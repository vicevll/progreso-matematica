# Álgebra lineal
**Guía simple · Álgebra superior · Univ 1–2**
*Matrices, espacios vectoriales, valores propios y diagonalización.*

## 1. Espacios vectoriales
Un **espacio vectorial** sobre un cuerpo $\mathbb{K}$ es un conjunto $V$ con una suma de vectores y un producto por escalares que cumplen: conmutatividad, asociatividad, neutro $\vec{0}$, inverso, distributividad y compatibilidad de escalares.

**Ejemplos:** $\mathbb{R}^n$, las matrices $M_{m \times n}$, los polinomios $\mathbb{K}[x]$, las funciones continuas $C[a,b]$ y las soluciones de una EDO lineal.

Un **subespacio** $W \subseteq V$ es un subconjunto no vacío cerrado bajo suma y producto por escalares.

**Mini-ejemplo.** En $\mathbb{R}^3$, el conjunto $W = \{(x,y,0) : x, y \in \mathbb{R}\}$ es un subespacio: la suma y el escalado conservan la tercera coordenada nula.

## 2. Independencia, base y dimensión
- **Combinación lineal:** $\alpha_1 v_1 + \cdots + \alpha_n v_n$.
- **Generan:** todo vector del espacio es combinación lineal de ellos.
- **Independientes:** la única combinación que da $\vec{0}$ es la trivial.
- **Base:** conjunto que genera y es independiente; las coordenadas son únicas.
- **Dimensión:** número de vectores de una base (bien definido).

**Mini-ejemplo.** En $\mathbb{R}^3$, $\{(1,0,0),(0,1,0),(0,0,1)\}$ es la base canónica y $\dim \mathbb{R}^3 = 3$. Los vectores $(1,1,1)$ y $(2,2,2)$ son dependientes porque uno es múltiplo del otro.

## 3. Matrices y sistemas: eliminación de Gauss
Un sistema $A\vec{x} = \vec{b}$ se resuelve con **eliminación de Gauss**: se aplican operaciones elementales por filas hasta la forma escalonada.

**Teorema de Rouché-Frobenius:**
- $\text{rango}(A) < \text{rango}(A \mid b)$: sistema incompatible.
- $\text{rango}(A) = \text{rango}(A \mid b) = n$: solución única.
- $\text{rango}(A) = \text{rango}(A \mid b) < n$: infinitas soluciones con $n - r$ parámetros.

**Forma matricial:**
$$\begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} b_1 \\ b_2 \end{pmatrix}$$

**Mini-ejemplo.**
$$\begin{cases} x + y = 3 \\ 2x - y = 0 \end{cases} \Rightarrow x = 1, \; y = 2$$

## 4. Rango, determinantes e inversa
- **Rango:** número de filas (o columnas) independientes; dimensión de la imagen.
- **Determinante:** mide el volumen con signo; cumple $\det(AB) = \det A \det B$.
- **Inversa:** $A$ es invertible si y solo si $\det A \neq 0$, y entonces
$$A^{-1} = \frac{1}{\det A}\,\text{adj}(A)$$
- **Regla de Cramer:** si $\det A \neq 0$, entonces $x_i = \dfrac{\det(A_i)}{\det A}$.

**Mini-ejemplo.** $\det\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} = 2 \cdot 3 - 1 \cdot 1 = 5 \neq 0$, luego la matriz es invertible.

## 5. Transformaciones lineales
$T : V \to W$ es **lineal** si
$$T(u + v) = T(u) + T(v), \qquad T(\alpha v) = \alpha T(v)$$
Toda transformación lineal entre espacios de dimensión finita se representa con una **matriz** una vez elegidas las bases; la composición corresponde al producto de matrices.

**Mini-ejemplo.** $T(x,y) = (2x, \, x+y)$ tiene matriz $\begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$ en la base canónica.

## 6. Núcleo, imagen y teorema de la dimensión
- **Núcleo:** $\ker T = \{v : T(v) = \vec{0}\}$; mide la pérdida de información.
- **Imagen:** $\text{Im}\,T = \{T(v) : v \in V\}$; es el alcance.
- $T$ es inyectiva $\iff \ker T = \{\vec{0}\}$; sobreyectiva $\iff \text{Im}\,T = W$.
- **Teorema de la dimensión:**
$$\dim V = \dim(\ker T) + \dim(\text{Im}\,T)$$

**Mini-ejemplo.** $T(x,y,z) = (x+y+z, \, 0)$: el núcleo tiene dimensión $2$ y la imagen dimensión $1$; como $2+1 = 3$, el teorema se cumple.

## 7. Valores propios y diagonalización
$\lambda$ es **valor propio** con **vector propio** $v \neq \vec{0}$ si $Av = \lambda v$. Se calculan con el polinomio característico
$$\det(A - \lambda I) = 0$$
$A$ es **diagonalizable** si existe una base de vectores propios, equivalentemente $A = PDP^{-1}$ con $D$ diagonal. Es diagonalizable si la multiplicidad geométrica iguala a la algebraica en cada valor propio.

**Teorema espectral:** toda matriz simétrica real es diagonalizable con base **ortonormal**.

**Mini-ejemplo.** $A = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ tiene valores propios $2$ y $3$ y es diagonalizable. En cambio $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ no lo es: $\lambda = 1$ es doble pero solo hay un vector propio.

## 8. Producto interno y ortogonalidad
El producto interno $\langle u, v \rangle$ permite medir ángulos y distancias; en $\mathbb{R}^n$ es el producto punto. Dos vectores son **ortogonales** si $\langle u, v \rangle = 0$.

- **Proyección** de $u$ sobre $v$: $\dfrac{\langle u, v \rangle}{\langle v, v \rangle}\,v$.
- **Gram-Schmidt:** construye bases ortonormales.
- **Mínimos cuadrados:** la mejor solución de $A\vec{x} = \vec{b}$ sale de $A^T A \vec{x} = A^T \vec{b}$.

**Mini-ejemplo.** La proyección de $(1,1)$ sobre $(1,0)$ es $(1,0)$; la componente ortogonal es $(0,1)$.

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
