# Matrices · 50 ejercicios
**Cuaderno de práctica · Álgebra superior · Univ 1** — *Operaciones, determinantes, inversa y sistemas de ecuaciones.*

## Formulario

Antes de empezar: en todo el archivo, $i$ es el número de fila y $j$ el número de columna; las filas se numeran de arriba hacia abajo y las columnas de izquierda a derecha. La letra $k$ se usa como escalar (un número) o como índice de una suma, según el contexto.

### Matriz, tamaño y entradas
- Una **matriz** $A$ es una tabla rectangular de números ordenada en **filas** (horizontales) y **columnas** (verticales). Cada número de dentro es una **entrada** o **elemento**.
- El **tamaño** (u **orden**) es $m \times n$: primero el número de filas y después el de columnas. $\mathbb{R}^{m \times n}$ es el conjunto de todas las matrices reales de tamaño $m \times n$.
- La entrada de la fila $i$ y la columna $j$ se escribe $a_{ij}$: el primer subíndice es la fila y el segundo la columna. Por ejemplo, en $\begin{pmatrix} 5 & -1 & 2 \\ 0 & 3 & 7 \end{pmatrix}$ se tiene $a_{23} = 7$.
- Una matriz es **cuadrada** si $m = n$; su **diagonal principal** son las entradas $a_{11}, a_{22}, \ldots$
- Dos matrices son **iguales** si tienen el mismo tamaño y coinciden entrada por entrada.
- La **matriz nula** $O$ tiene todas sus entradas iguales a $0$.

### Suma, resta y multiplicación por un escalar
- Un **escalar** $k$ es un número real que multiplica a una matriz.
- $A + B$ y $A - B$ solo existen si $A$ y $B$ tienen el mismo tamaño; se opera entrada con entrada: $(A + B)_{ij} = a_{ij} + b_{ij}$.
- $(kA)_{ij} = k\,a_{ij}$: se multiplica cada entrada por $k$.
- La **matriz identidad** $I_n$ es la matriz cuadrada con $1$ en la diagonal principal y $0$ fuera de ella; cumple $A I_n = I_n A = A$.

### Producto de matrices
- La regla es **fila por columna**: se multiplican las entradas de una fila de $A$ por las correspondientes de una columna de $B$ y se suman los productos.
- Fórmula: $(AB)_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}$. El símbolo $\sum_{k=1}^{n}$ significa "sumar para $k = 1, 2, \ldots, n$".
- **Condición de tamaño:** el número de columnas de $A$ debe igualar el número de filas de $B$. Si $A$ es $m \times n$ y $B$ es $n \times p$, el producto $AB$ es $m \times p$.
- **No es conmutativa:** en general $AB \neq BA$.
- **Matriz por vector columna:** $\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}$.

### Determinantes
- El **determinante** $\det(A)$ (también escrito $|A|$) es un número asociado a una matriz cuadrada.
- $2 \times 2$: $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$.
- $3 \times 3$ (**regla de Sarrus**): $\det\begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix} = aei + bfg + cdh - ceg - bdi - afh$.
- Propiedades: $\det(AB) = \det(A)\det(B)$; $\det(I_n) = 1$; si una fila (o columna) es múltiplo de otra o es nula, el determinante vale $0$; en una matriz triangular el determinante es el producto de la diagonal.

### Inversa
- $A$ es **invertible** (o **no singular**) si existe una matriz $A^{-1}$ tal que $A A^{-1} = A^{-1} A = I_n$.
- **Condición:** $\det(A) \neq 0$. Si $\det(A) = 0$, $A$ es **singular** y no tiene inversa.
- Fórmula $2 \times 2$: si $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ y $ad - bc \neq 0$, entonces $A^{-1} = \dfrac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.

### Sistemas de ecuaciones y eliminación de Gauss
- Un sistema se escribe $A\mathbf{x} = \mathbf{b}$: $A$ guarda los **coeficientes** (los números que multiplican a las incógnitas), $\mathbf{x}$ las **incógnitas** y $\mathbf{b}$ los **términos independientes** (los números solos).
- La **matriz ampliada** $(A \mid b)$ junta $A$ y $\mathbf{b}$ separados por una línea vertical: $\left(\begin{array}{cc|c} 2 & 1 & 5 \\ 1 & -3 & -1 \end{array}\right)$, donde la última columna son los términos independientes.
- **Operaciones permitidas** (no cambian la solución): intercambiar filas; multiplicar una fila por un número distinto de $0$; sumar a una fila un múltiplo de otra fila.
- Se busca la **forma escalonada** (cada fila empieza más a la derecha que la anterior) y se despeja de abajo hacia arriba (**sustitución hacia atrás**).

### Rango y clasificación de sistemas
- El **rango** es el número de filas no nulas que quedan al aplicar Gauss; equivale al número de filas (o columnas) **independientes**, es decir, que no se obtienen combinando las demás.
- Para $A\mathbf{x} = \mathbf{b}$ con $n$ incógnitas:
  - $\text{rango}(A) = \text{rango}(A \mid b) = n$: **compatible determinado** (solución única).
  - $\text{rango}(A) = \text{rango}(A \mid b) < n$: **compatible indeterminado** (infinitas soluciones; hay $n - \text{rango}(A)$ parámetros libres).
  - $\text{rango}(A) < \text{rango}(A \mid b)$: **incompatible** (sin solución).

## Ejercicios (50)

### Nivel 1 — Fundamentos (1–10)

1. Escribe el tamaño de $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$ (recuerda: filas $\times$ columnas).
2. En $A = \begin{pmatrix} 5 & -1 & 2 \\ 0 & 3 & 7 \end{pmatrix}$, ¿cuánto vale la entrada $a_{23}$ (fila $2$, columna $3$)?
3. Suma $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 0 & -1 \\ 5 & 2 \end{pmatrix}$.
4. Resta $\begin{pmatrix} 5 & 0 \\ -2 & 3 \end{pmatrix} - \begin{pmatrix} 1 & 4 \\ 2 & -1 \end{pmatrix}$.
5. Calcula $3\begin{pmatrix} 2 & -1 \\ 0 & 4 \end{pmatrix}$.
6. Calcula $-2\begin{pmatrix} 1 & 3 \\ -1 & 0 \end{pmatrix}$.
7. Suma la matriz nula $O = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ a $\begin{pmatrix} 2 & -3 \\ 1 & 0 \end{pmatrix}$.
8. Calcula $2\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} - 3\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
9. Halla $x$ e $y$ para que $\begin{pmatrix} x & 2 \\ 3 & y \end{pmatrix} = \begin{pmatrix} 5 & 2 \\ 3 & -1 \end{pmatrix}$ (igualdad entrada por entrada).
10. ¿Se puede sumar una matriz de tamaño $2 \times 3$ con una de tamaño $3 \times 2$? Justifica.

### Nivel 2 — Producto y determinantes (11–25)

11. Multiplica $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ 1 & 5 \end{pmatrix}$ (regla fila por columna).
12. Multiplica $\begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}\begin{pmatrix} 1 & -1 \\ 2 & 4 \end{pmatrix}$.
13. Calcula $I_2\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$, donde $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ es la identidad $2 \times 2$.
14. Calcula $\begin{pmatrix} 2 & 3 \end{pmatrix}\begin{pmatrix} 4 \\ 1 \end{pmatrix}$ (un vector fila por un vector columna; el resultado es de tamaño $1 \times 1$).
15. Calcula $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ y describe con palabras el efecto sobre la matriz.
16. Con $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ y $B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$, calcula $AB$ y $BA$. ¿Son iguales?
17. Halla el determinante de $\begin{pmatrix} 3 & 5 \\ 2 & 4 \end{pmatrix}$.
18. Halla el determinante de $\begin{pmatrix} 1 & -2 \\ 4 & 3 \end{pmatrix}$.
19. Halla el determinante de $\begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}$.
20. Halla el determinante de $\begin{pmatrix} -1 & 3 \\ 2 & 5 \end{pmatrix}$.
21. Calcula con la regla de Sarrus $\det\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$.
22. Calcula $\det\begin{pmatrix} 2 & 0 & 0 \\ 1 & 3 & 0 \\ 4 & 5 & 6 \end{pmatrix}$ (observa la forma triangular).
23. ¿Es invertible $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$? Justifica con el determinante.
24. Si $\det(A) = 2$ y $\det(B) = 3$, ¿cuánto vale $\det(AB)$?
25. Halla $\det\begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & -3 \end{pmatrix}$ (matriz diagonal).

### Nivel 3 — Inversa, Gauss y rango (26–40)

26. Halla la inversa de $\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$ con la fórmula de $2 \times 2$.
27. Halla la inversa de $\begin{pmatrix} 4 & 2 \\ 1 & 3 \end{pmatrix}$.
28. Halla la inversa de $\begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}$.
29. Halla la inversa de $\begin{pmatrix} 3 & 1 \\ 2 & 1 \end{pmatrix}$.
30. ¿Tiene inversa $\begin{pmatrix} 1 & 2 \\ 3 & 6 \end{pmatrix}$? Justifica con el determinante.
31. Resuelve por Gauss: $x + y = 4$, $2x - y = 5$.
32. Resuelve por Gauss: $2x + y = 5$, $x - 3y = -1$.
33. Resuelve el sistema $x + y = 3$, $2x - y = 0$.
34. Resuelve el sistema $3x - y = 5$, $x + 2y = 4$.
35. Resuelve el sistema $3 \times 3$: $x + y + z = 6$, $2x - y + z = 3$, $x + 2y - z = 2$.
36. Resuelve el sistema $3 \times 3$: $x + y + z = 1$, $x - y + z = 3$, $2x + y - z = 0$.
37. Clasifica el sistema $x + y = 1$, $x + y = 3$ (¿tiene solución?).
38. Clasifica el sistema $2x + y = 4$, $4x + 2y = 8$ y escribe todas sus soluciones con un parámetro.
39. Halla el rango de $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$.
40. Halla el rango de $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 0 & 1 & 0 \end{pmatrix}$.

### Nivel 4 — Aplicaciones (41–50)

41. La matriz de rotación $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ transforma $(x, y)$ en $(-y, x)$. Aplícala al punto $(3, 1)$.
42. La matriz $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ refleja los puntos respecto del eje $x$. Aplícala al punto $(2, 5)$.
43. La matriz $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ escala las coordenadas. Aplícala al punto $(-1, 4)$.
44. Las notas de 3 estudiantes en 2 pruebas forman la matriz $N = \begin{pmatrix} 70 & 80 \\ 60 & 90 \\ 100 & 50 \end{pmatrix}$ y los pesos de las pruebas son $0.4$ y $0.6$. Calcula $N\begin{pmatrix} 0.4 \\ 0.6 \end{pmatrix}$, la nota final de cada estudiante.
45. Un puesto vende café a 2 dólares y té a 3 dólares. Un día vendió 40 bebidas y recaudó 106 dólares. Plantea el sistema y halla cuántos cafés y cuántos tés vendió.
46. En una papelería, 3 cuadernos y 2 lápices cuestan 23 dólares; 1 cuaderno y 4 lápices cuestan 21 dólares. Plantea el sistema y halla el precio de cada artículo.
47. ¿Para qué valor de $k$ no es invertible $\begin{pmatrix} k & 3 \\ 2 & 4 \end{pmatrix}$?
48. ¿Para qué valor de $k$ tiene infinitas soluciones el sistema $x + y = 2$, $3x + 3y = k$?
49. Verifica que $A^{-1} = \begin{pmatrix} 2 & -3 \\ -1 & 2 \end{pmatrix}$ es la inversa de $A = \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}$ calculando $AA^{-1}$.
50. Una fábrica organiza sus insumos en la matriz $P = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$ (filas: insumos; columnas: productos) y quiere producir el vector $\begin{pmatrix} 10 \\ 5 \end{pmatrix}$ (unidades de cada producto). Calcula $P\begin{pmatrix} 10 \\ 5 \end{pmatrix}$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $2 \times 3$</div>
<div class="r"><b>02</b> $a_{23} = 7$</div>
<div class="r"><b>03</b> $\begin{pmatrix} 1 & 1 \\ 8 & 6 \end{pmatrix}$</div>
<div class="r"><b>04</b> $\begin{pmatrix} 4 & -4 \\ -4 & 4 \end{pmatrix}$</div>
<div class="r"><b>05</b> $\begin{pmatrix} 6 & -3 \\ 0 & 12 \end{pmatrix}$</div>
<div class="r"><b>06</b> $\begin{pmatrix} -2 & -6 \\ 2 & 0 \end{pmatrix}$</div>
<div class="r"><b>07</b> $\begin{pmatrix} 2 & -3 \\ 1 & 0 \end{pmatrix}$</div>
<div class="r"><b>08</b> $\begin{pmatrix} 2 & 1 \\ 3 & 8 \end{pmatrix}$</div>
<div class="r"><b>09</b> $x = 5$, $y = -1$</div>
<div class="r"><b>10</b> No: distinto tamaño</div>
<div class="r"><b>11</b> $\begin{pmatrix} 4 & 10 \\ 10 & 20 \end{pmatrix}$</div>
<div class="r"><b>12</b> $\begin{pmatrix} 4 & 2 \\ 6 & 12 \end{pmatrix}$</div>
<div class="r"><b>13</b> $\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$</div>
<div class="r"><b>14</b> $11$</div>
<div class="r"><b>15</b> $\begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$, intercambia las filas</div>
<div class="r"><b>16</b> $AB = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, $BA = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$; no son iguales</div>
<div class="r"><b>17</b> $2$</div>
<div class="r"><b>18</b> $11$</div>
<div class="r"><b>19</b> $0$</div>
<div class="r"><b>20</b> $-11$</div>
<div class="r"><b>21</b> $1$</div>
<div class="r"><b>22</b> $36$</div>
<div class="r"><b>23</b> No: $\det = 0$</div>
<div class="r"><b>24</b> $6$</div>
<div class="r"><b>25</b> $-6$</div>
<div class="r"><b>26</b> $\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$</div>
<div class="r"><b>27</b> $\frac{1}{10}\begin{pmatrix} 3 & -2 \\ -1 & 4 \end{pmatrix}$</div>
<div class="r"><b>28</b> $\begin{pmatrix} 2 & -3 \\ -1 & 2 \end{pmatrix}$</div>
<div class="r"><b>29</b> $\begin{pmatrix} 1 & -1 \\ -2 & 3 \end{pmatrix}$</div>
<div class="r"><b>30</b> No: $\det = 0$</div>
<div class="r"><b>31</b> $x = 3$, $y = 1$</div>
<div class="r"><b>32</b> $x = 2$, $y = 1$</div>
<div class="r"><b>33</b> $x = 1$, $y = 2$</div>
<div class="r"><b>34</b> $x = 2$, $y = 1$</div>
<div class="r"><b>35</b> $x = 1$, $y = 2$, $z = 3$</div>
<div class="r"><b>36</b> $x = 1$, $y = -1$, $z = 1$</div>
<div class="r"><b>37</b> Incompatible</div>
<div class="r"><b>38</b> $x = t$, $y = 4 - 2t$</div>
<div class="r"><b>39</b> $1$</div>
<div class="r"><b>40</b> $2$</div>
<div class="r"><b>41</b> $(-1, 3)$</div>
<div class="r"><b>42</b> $(2, -5)$</div>
<div class="r"><b>43</b> $(-2, 12)$</div>
<div class="r"><b>44</b> $(76, 78, 70)$</div>
<div class="r"><b>45</b> $c = 14$, $t = 26$</div>
<div class="r"><b>46</b> $c = 5$, $l = 4$</div>
<div class="r"><b>47</b> $k = \frac{3}{2}$</div>
<div class="r"><b>48</b> $k = 6$</div>
<div class="r"><b>49</b> $AA^{-1} = I_2$</div>
<div class="r"><b>50</b> $(25, 15)$</div>
</div>
