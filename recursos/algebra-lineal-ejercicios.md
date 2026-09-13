# Álgebra lineal · 50 ejercicios
**Cuaderno de práctica · Álgebra superior · Univ 1–2**
*Matrices, espacios vectoriales, valores propios y diagonalización.*

## Formulario
### Espacios vectoriales y bases
- Base canónica de $\mathbb{R}^n$: $\{e_1, e_2, \ldots, e_n\}$
- $\dim V = \dim(\ker T) + \dim(\text{Im}\,T)$
- $T$ es inyectiva $\iff \ker T = \{\vec{0}\}$
- Coordenadas únicas respecto de una base

### Matrices y operaciones
- $(AB)_{ij} = \sum_k a_{ik} b_{kj}$
- $(AB)^T = B^T A^T$
- $A I_n = I_n A = A$
- Producto matriz-vector: $A\vec{x}$ combina las columnas de $A$

### Determinantes
- $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$
- $\det(AB) = \det A \det B$
- $\det(A^{-1}) = \dfrac{1}{\det A}$
- $\det A = 0 \iff A$ no es invertible
- En una matriz triangular, el determinante es el producto de la diagonal

### Sistemas lineales
- Rouché-Frobenius: compara $\text{rango}(A)$ con $\text{rango}(A \mid b)$
- Único si ambos rangos igualan $n$; infinitas si ambos son menores que $n$; incompatible si difieren
- Cramer: $x_i = \dfrac{\det(A_i)}{\det A}$ con $\det A \neq 0$
- Eliminación de Gauss: operaciones elementales por filas hasta la escalonada

### Rango e inversa
- Rango = número de filas no nulas en la forma escalonada
- $A^{-1} = \dfrac{1}{\det A}\,\text{adj}(A)$
- $A^{-1} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \dfrac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$

### Valores y vectores propios
- $\det(A - \lambda I) = 0$ da el polinomio característico
- $A v = \lambda v$ con $v \neq \vec{0}$
- $\lambda_1 + \cdots + \lambda_n = \text{tr}(A)$
- $\lambda_1 \lambda_2 \cdots \lambda_n = \det A$

### Diagonalización
- $A = P D P^{-1}$ con $D$ diagonal y $P$ de vectores propios
- Diagonalizable $\iff$ existe una base de vectores propios
- Multiplicidad geométrica igual a la algebraica en cada valor propio
- Toda matriz simétrica real es diagonalizable ortogonalmente

### Producto interno y ortogonalidad
- $\langle u, v \rangle = \sum_i u_i v_i$
- Proyección de $u$ sobre $v$: $\dfrac{\langle u, v \rangle}{\langle v, v \rangle}\,v$
- $u \perp v \iff \langle u, v \rangle = 0$
- Mínimos cuadrados: $A^T A \vec{x} = A^T \vec{b}$

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
