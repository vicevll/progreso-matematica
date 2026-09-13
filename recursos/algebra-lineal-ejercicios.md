# Álgebra lineal · 50 ejercicios
**Cuaderno de práctica · Álgebra superior · Univ 1–2**
*Matrices, espacios vectoriales, valores propios y diagonalización.*

## Formulario

### Espacios vectoriales y bases
- **Espacio vectorial:** conjunto $V$ con una suma $u+v$ y un producto por escalares $\alpha v$ que cumplen las reglas habituales; $u$ y $v$ son vectores y $\alpha$ es un número (escalar).
- **Subespacio $W \subseteq V$:** subconjunto no vacío cerrado bajo suma y escalares; siempre contiene al vector cero $\vec{0}$.
- **Combinación lineal:** expresión $\alpha_1 v_1 + \cdots + \alpha_k v_k$, donde los $\alpha_i$ son escalares concretos y los $v_i$ son vectores.
- **Span:** $\operatorname{span}\{v_1,\ldots,v_k\}$ es el conjunto de todas las combinaciones lineales; se lee "el generado por" y siempre es un subespacio.
- **Base canónica de $\mathbb{R}^n$:** $\{e_1, e_2, \ldots, e_n\}$, donde $e_i$ es el vector con un $1$ en la posición $i$ y $0$ en las demás. Por ejemplo, en $\mathbb{R}^3$, $e_1=(1,0,0)$, $e_2=(0,1,0)$ y $e_3=(0,0,1)$.
- **Coordenadas respecto de una base:** si $B=\{v_1,\ldots,v_n\}$ y $v = c_1v_1+\cdots+c_nv_n$, entonces $[v]_B = (c_1,\ldots,c_n)$; son únicas.
- **Teorema de la dimensión:** $\dim V = \dim(\ker T) + \dim(\operatorname{Im} T)$; aquí $\dim$ es el número de vectores de una base, $\ker T = \{v : T(v)=\vec{0}\}$ es el núcleo (lo que se aplasta al cero) y $\operatorname{Im} T = \{T(v) : v \in V\}$ es la imagen (los resultados alcanzables).
- **Inyectividad:** $T$ es inyectiva (dos entradas distintas no comparten salida) si y solo si $\ker T = \{\vec{0}\}$.

### Matrices y operaciones
- **Suma e producto por escalar:** se hacen entrada con entrada, siempre que las matrices tengan el mismo tamaño $m \times n$ (filas por columnas); $(\alpha A)_{ij} = \alpha a_{ij}$.
- **Producto:** $(AB)_{ij} = \sum_k a_{ik} b_{kj}$; el símbolo $\sum_k$ significa sumar sobre todos los índices $k$ posibles, y la entrada $(i,j)$ se obtiene de la fila $i$ de $A$ con la columna $j$ de $B$.
- **Condición de tamaño:** $A$ de $m \times n$ por $B$ de $n \times p$ da $m \times p$; las columnas de la primera deben coincidir con las filas de la segunda.
- **Transpuesta:** $(AB)^T = B^T A^T$; el superíndice $T$ significa cambiar filas por columnas, y el orden del producto se invierte.
- **Identidad:** $A I_n = I_n A = A$; $I_n$ es la matriz con $1$ en la diagonal y $0$ en el resto, y juega el papel del número $1$.
- **Producto matriz-vector:** $A\vec{x}$ combina las columnas de $A$ con pesos dados por las coordenadas de $\vec{x}$.

### Determinantes
- $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$; el símbolo $\det$ viene de "determinante" y el resultado es un número.
- $\det(AB) = \det A \det B$: el determinante de un producto es el producto de los determinantes.
- $\det(A^{-1}) = \dfrac{1}{\det A}$: la inversa invierte el determinante.
- $\det A = 0 \iff A$ no es invertible; si el determinante es cero, la matriz es singular y no tiene inversa.
- En una matriz triangular (o diagonal), el determinante es el producto de los números de la diagonal.
- **Cofactores:** el cofactor de la entrada $a_{ij}$ es $C_{ij} = (-1)^{i+j}M_{ij}$, donde $M_{ij}$ es el determinante que queda al borrar la fila $i$ y la columna $j$; desarrollar por cualquier fila o columna da lo mismo.

### Sistemas lineales
- Un sistema se escribe $A\vec{x} = \vec{b}$: $A$ es la matriz de coeficientes, $\vec{x}$ el vector de incógnitas y $\vec{b}$ el vector de términos independientes.
- **Rouché-Frobenius:** se compara el rango de $A$ con el rango de la matriz ampliada $(A \mid b)$, que añade la columna $\vec{b}$ separada por una barra; el rango es el número de filas no nulas tras aplicar Gauss.
- **Solución única** si ambos rangos son iguales al número $n$ de incógnitas; **infinitas soluciones** si ambos son iguales pero menores que $n$ (quedan $n-r$ parámetros libres); **incompatible** si el rango de $A$ es menor que el de la ampliada.
- **Cramer:** con $\det A \neq 0$, cada incógnita vale $x_i = \dfrac{\det(A_i)}{\det A}$, donde $A_i$ es $A$ con la columna $i$ reemplazada por $\vec{b}$.
- **Eliminación de Gauss:** operaciones elementales por filas (intercambiar, multiplicar por un número no nulo, sumar un múltiplo) hasta la forma escalonada, y luego sustitución hacia atrás.

### Rango e inversa
- **Rango:** número de filas no nulas en la forma escalonada; coincide con la dimensión de la imagen y con el número de columnas independientes.
- **Inversa general:** $A^{-1} = \dfrac{1}{\det A}\,\text{adj}(A)$; la adjunta $\text{adj}(A)$ es la transpuesta de la matriz de cofactores.
- **Inversa $2 \times 2$:** para $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ con $ad-bc \neq 0$ se tiene $A^{-1} = \dfrac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
- **Propiedades:** $(AB)^{-1} = B^{-1}A^{-1}$ (el orden se invierte) y $(A^T)^{-1} = (A^{-1})^T$.

### Valores y vectores propios
- $\det(A - \lambda I) = 0$ es la ecuación característica; $\lambda$ (letra griega "lambda") es el valor propio y $I$ es la identidad del mismo tamaño que $A$. Las raíces de ese polinomio son los valores propios.
- $A v = \lambda v$ con $v \neq \vec{0}$ define al vector propio $v$: al aplicarle $A$ no cambia de dirección, solo se escala por $\lambda$.
- **Traza y determinante:** $\lambda_1 + \cdots + \lambda_n = \operatorname{tr}(A)$ es la suma de los valores propios (contando multiplicidades) y coincide con la traza, la suma de los elementos de la diagonal de $A$; y $\lambda_1 \lambda_2 \cdots \lambda_n = \det A$.
- **Espacio propio:** $E_\lambda = \ker(A - \lambda I)$ es el conjunto de vectores propios de $\lambda$ más el vector cero; su dimensión es la multiplicidad geométrica.

### Diagonalización
- $A = P D P^{-1}$ con $D$ diagonal y $P$ formada por columnas que son vectores propios; $P^{-1}$ es la inversa de $P$. Así, $A^k = P D^k P^{-1}$, lo que facilita calcular potencias.
- Diagonalizable $\iff$ existe una base de vectores propios, es decir, hay $n$ vectores propios linealmente independientes.
- Multiplicidad geométrica (dimensión del espacio propio) igual a la algebraica (veces que $\lambda$ es raíz) en cada valor propio; si difieren, no hay diagonalización.
- Si todos los valores propios son distintos, la matriz es diagonalizable.
- Toda matriz simétrica real ($A = A^T$) es diagonalizable ortogonalmente: $A = QDQ^T$ con $Q$ de columnas ortonormales, y como $Q$ es ortogonal se cumple $Q^{-1} = Q^T$.

### Producto interno y ortogonalidad
- $\langle u, v \rangle = \sum_i u_i v_i$ es el producto interno (producto punto en $\mathbb{R}^n$); asigna un número a cada par de vectores.
- **Norma:** $\|u\| = \sqrt{\langle u,u\rangle}$ es la longitud del vector $u$; un vector es unitario si $\|u\| = 1$.
- Proyección de $u$ sobre $v$: $\dfrac{\langle u, v \rangle}{\langle v, v \rangle}\,v$; es la parte de $u$ que apunta en la dirección de $v$.
- $u \perp v \iff \langle u, v \rangle = 0$; el símbolo $\perp$ se lee "es perpendicular a".
- **Gram-Schmidt:** a cada vector se le restan sus proyecciones sobre los anteriores y luego se normaliza, produciendo una base ortonormal.
- **Mínimos cuadrados:** cuando $A\vec{x}=\vec{b}$ no tiene solución, la mejor aproximación sale de $A^T A \vec{x} = A^T \vec{b}$, donde $A^T$ es la transpuesta de $A$.

## Ejercicios (50)

### Nivel 1 — Matrices y operaciones
1. Calcula $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$.
2. Calcula $2\begin{pmatrix} 1 & -1 \\ 0 & 3 \end{pmatrix}$.
3. Calcula $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} I_2$.
4. Calcula $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 2 \\ 1 \end{pmatrix}$.
5. Calcula $\begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}$.
6. Halla la transpuesta de $\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$.
7. Calcula $\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$.
8. Calcula $A^2$ para $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.

### Nivel 2 — Determinantes
9. Calcula $\det\begin{pmatrix} 2 & -1 \\ 3 & 4 \end{pmatrix}$.
10. Calcula $\det\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.
11. Calcula $\det\begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix}$.
12. Calcula $\det\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$.
13. Calcula $\det\begin{pmatrix} 2 & 0 & 0 \\ 1 & 3 & 0 \\ 4 & 5 & 6 \end{pmatrix}$.
14. Calcula $\det\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
15. Calcula $\det\begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 3 & 6 \end{pmatrix}$.
16. Si $\det A = 3$ y $\det B = 5$, halla $\det(AB)$.

### Nivel 3 — Sistemas lineales
17. Resuelve $\begin{cases} x + y = 3 \\ 2x - y = 0 \end{cases}$.
18. Resuelve $\begin{cases} 2x + y = 5 \\ x - y = 1 \end{cases}$.
19. Resuelve $\begin{cases} x + 2y = 4 \\ 3x - y = 1 \end{cases}$.
20. Resuelve $\begin{cases} x + y + z = 6 \\ x - y = 0 \\ z = 2 \end{cases}$.
21. Resuelve $\begin{cases} x + y = 2 \\ 2x + 2y = 4 \end{cases}$.
22. Resuelve $\begin{cases} x + y = 1 \\ x + y = 3 \end{cases}$.
23. Resuelve $\begin{cases} x - y = 0 \\ 2x + y = 6 \end{cases}$.
24. Resuelve $\begin{cases} 3x + 2y = 7 \\ x - y = 1 \end{cases}$.
25. Resuelve $\begin{cases} 2x - y = 1 \\ 4x - 2y = 2 \end{cases}$.
26. Resuelve $\begin{cases} x + y + z = 6 \\ x - y + z = 2 \\ x + y - z = 0 \end{cases}$.

### Nivel 4 — Rango e inversas
27. Halla el rango de $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$.
28. Halla el rango de $\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 2 \end{pmatrix}$.
29. Halla el rango de $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$.
30. Halla la inversa de $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.
31. Halla la inversa de $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$.
32. Halla la inversa de $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.
33. ¿Es invertible $\begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}$?
34. Halla la inversa de $\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$.

### Nivel 5 — Valores y vectores propios
35. Halla los valores propios de $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$.
36. Halla los valores propios de $\begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix}$.
37. Halla los valores propios de $\begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.
38. Halla los valores propios de $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.
39. Halla un vector propio de $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ para $\lambda = 2$.
40. Halla un vector propio de $\begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ para $\lambda = 2$.
41. Halla los valores propios de $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
42. Escribe el polinomio característico de $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$.

### Nivel 6 — Diagonalización y ortogonalidad
43. ¿Es diagonalizable $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$?
44. ¿Es diagonalizable $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$?
45. ¿Es diagonalizable $\begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$?
46. Diagonaliza $A = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ escribiendo $A = PDP^{-1}$.
47. ¿Es diagonalizable ortogonalmente toda matriz simétrica real?
48. Proyecta $(2,3)$ sobre $(1,1)$.
49. ¿Son ortogonales $(1,2)$ y $(2,-1)$?
50. Calcula $\det(A - \lambda I)$ para $A = \begin{pmatrix} 1 & 2 \\ 3 & 2 \end{pmatrix}$.

## Solucionario · resultados
<div class="results">
<div class="r"><b>01</b> $\begin{pmatrix} 6 & 8 \\ 10 & 12 \end{pmatrix}$</div>
<div class="r"><b>02</b> $\begin{pmatrix} 2 & -2 \\ 0 & 6 \end{pmatrix}$</div>
<div class="r"><b>03</b> $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$</div>
<div class="r"><b>04</b> $\begin{pmatrix} 4 \\ 10 \end{pmatrix}$</div>
<div class="r"><b>05</b> $\begin{pmatrix} 3 & 1 \\ 7 & 4 \end{pmatrix}$</div>
<div class="r"><b>06</b> $\begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}$</div>
<div class="r"><b>07</b> $\begin{pmatrix} 5 & 2 \\ 2 & 1 \end{pmatrix}$</div>
<div class="r"><b>08</b> $\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$</div>
<div class="r"><b>09</b> $11$</div>
<div class="r"><b>10</b> $-2$</div>
<div class="r"><b>11</b> $-6$</div>
<div class="r"><b>12</b> $1$</div>
<div class="r"><b>13</b> $36$</div>
<div class="r"><b>14</b> $-1$</div>
<div class="r"><b>15</b> $1$</div>
<div class="r"><b>16</b> $15$</div>
<div class="r"><b>17</b> $x = 1$, $y = 2$</div>
<div class="r"><b>18</b> $x = 2$, $y = 1$</div>
<div class="r"><b>19</b> $x = \frac{6}{7}$, $y = \frac{11}{7}$</div>
<div class="r"><b>20</b> $x = 2$, $y = 2$, $z = 2$</div>
<div class="r"><b>21</b> $x = t$, $y = 2 - t$</div>
<div class="r"><b>22</b> Incompatible</div>
<div class="r"><b>23</b> $x = 2$, $y = 2$</div>
<div class="r"><b>24</b> $x = \frac{9}{5}$, $y = \frac{4}{5}$</div>
<div class="r"><b>25</b> $x = t$, $y = 2t - 1$</div>
<div class="r"><b>26</b> $x = 1$, $y = 2$, $z = 3$</div>
<div class="r"><b>27</b> $1$</div>
<div class="r"><b>28</b> $2$</div>
<div class="r"><b>29</b> $1$</div>
<div class="r"><b>30</b> $\begin{pmatrix} -2 & 1 \\ \frac{3}{2} & -\frac{1}{2} \end{pmatrix}$</div>
<div class="r"><b>31</b> $\begin{pmatrix} \frac{1}{2} & 0 \\ 0 & \frac{1}{3} \end{pmatrix}$</div>
<div class="r"><b>32</b> $\begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$</div>
<div class="r"><b>33</b> No: $\det = 0$</div>
<div class="r"><b>34</b> $\begin{pmatrix} 1 & -2 \\ 0 & 1 \end{pmatrix}$</div>
<div class="r"><b>35</b> $\lambda = 2$, $\lambda = 3$</div>
<div class="r"><b>36</b> $\lambda = 3$, $\lambda = -2$</div>
<div class="r"><b>37</b> $\lambda = 5$, $\lambda = 2$</div>
<div class="r"><b>38</b> $\lambda = 3$, $\lambda = 1$</div>
<div class="r"><b>39</b> $(1,0)$</div>
<div class="r"><b>40</b> $(1,-2)$</div>
<div class="r"><b>41</b> $\lambda = 1$, $\lambda = -1$</div>
<div class="r"><b>42</b> $\lambda^2 - (a+d)\lambda + (ad-bc)$</div>
<div class="r"><b>43</b> Sí, ya es diagonal</div>
<div class="r"><b>44</b> No: $\lambda = 1$ doble y un solo vector propio</div>
<div class="r"><b>45</b> Sí: dos valores propios distintos</div>
<div class="r"><b>46</b> $P = I$, $D = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$</div>
<div class="r"><b>47</b> Sí, por el teorema espectral</div>
<div class="r"><b>48</b> $\frac{5}{2}(1,1)$</div>
<div class="r"><b>49</b> Sí: el producto punto es $0$</div>
<div class="r"><b>50</b> $\lambda^2 - 3\lambda - 4$</div>
</div>