# Análisis funcional · Ejercicios

Área: Análisis · Nivel: Univ 4–5 · Descripción: Espacios de Banach y Hilbert, operadores y espectro.

## Formulario

### Normas

1. Norma en $\mathbb{R}^n$: $\|x\|_p = \left(\sum_{i=1}^n |x_i|^p\right)^{1/p}$ para $1 \leq p < \infty$.
2. Norma del máximo: $\|x\|_\infty = \max_i |x_i|$.
3. En $\ell^p$: $\|x\|_p = \left(\sum_{n=1}^\infty |x_n|^p\right)^{1/p}$.
4. En $L^p(\mu)$: $\|f\|_p = \left(\int |f|^p\,d\mu\right)^{1/p}$ y $\|f\|_\infty = \operatorname{ess\,sup} |f|$.
5. En $C[a,b]$: $\|f\|_\infty = \sup_{x \in [a,b]} |f(x)|$.
6. Desigualdades entre normas en $\mathbb{R}^n$: $\|x\|_\infty \leq \|x\|_2 \leq \|x\|_1 \leq n\,\|x\|_\infty$.
7. Equivalencia de normas: existen $c, C > 0$ con $c\|x\| \leq \|x\|' \leq C\|x\|$.

### Producto interno, ortogonalidad y proyecciones

1. Producto interno en $L^2$: $\langle f, g\rangle = \int f\bar{g}\,d\mu$.
2. Norma inducida: $\|x\| = \sqrt{\langle x, x\rangle}$.
3. Cauchy-Schwarz: $|\langle x, y\rangle| \leq \|x\|\,\|y\|$.
4. Ortogonalidad: $x \perp y \iff \langle x, y\rangle = 0$.
5. Teorema de Pitágoras: $x \perp y \Rightarrow \|x + y\|^2 = \|x\|^2 + \|y\|^2$.
6. Proyección sobre un vector $u$: $P_u x = \dfrac{\langle x, u\rangle}{\langle u, u\rangle}\,u$.
7. Proyección sobre subespacio cerrado $M$: el único $m \in M$ con $x - m \perp M$.
8. Descomposición: $H = M \oplus M^\perp$.
9. Desarrollo en base ortonormal: $x = \sum_n \langle x, e_n\rangle e_n$.
10. Parseval: $\|x\|^2 = \sum_n |\langle x, e_n\rangle|^2$.
11. Distancia al subespacio: $d(x, M) = \|x - m\|$.

### Operadores y funcionales

1. Operador acotado: $\|Tx\| \leq C\|x\|$ para todo $x$.
2. Norma de operador: $\|T\| = \sup_{\|x\| \leq 1} \|Tx\| = \sup_{x \neq 0} \dfrac{\|Tx\|}{\|x\|}$.
3. Acotado $\iff$ continuo $\iff$ continuo en $0$.
4. Norma de un funcional $f(x) = \sum a_i x_i$ en $\mathbb{R}^n$ euclidiano: $\|f\| = \|a\|_2$.
5. Multiplicación: $(Tf)(x) = g(x)f(x)$ con $g$ continua; $\|T\| = \|g\|_\infty$.
6. Operador integral: $(Tf)(x) = \int_0^1 K(x,y)f(y)\,dy$; acotado para $K$ continua.
7. Shift unilateral: $T(x_1, x_2, \dots) = (0, x_1, x_2, \dots)$; $\|T\| = 1$.
8. Operador diagonal: $T(x_n) = (d_n x_n)$; $\|T\| = \sup_n |d_n|$.
9. Composición: $\|ST\| \leq \|S\|\,\|T\|$.
10. Funcional integral en $C[0,1]$: $f(x) = \int_0^1 x(t)\,dt$; $\|f\| = 1$.

### Teoremas fundamentales

1. **Hahn-Banach:** todo funcional continuo en un subespacio se extiende al espacio completo conservando la norma.
2. **Banach-Steinhaus:** acotación puntual de una familia en un Banach implica acotación uniforme.
3. **Aplicación abierta:** todo operador acotado y sobreyectivo entre Banach es abierto.
4. **Operador inverso:** operador biyectivo entre Banach tiene inverso acotado.
5. **Gráfica cerrada:** gráfica cerrada de un operador entre Banach implica continuidad.
6. Serie de Neumann: si $\|T\| < 1$, entonces $(I - T)^{-1} = \sum_{n=0}^\infty T^n$.

### Espectro

1. Espectro: $\sigma(T) = \{\lambda \in \mathbb{C} : T - \lambda I \text{ no es invertible}\}$.
2. Resolvente: $\rho(T) = \mathbb{C} \setminus \sigma(T)$.
3. $\sigma(T)$ es compacto, no vacío y está contenido en $\{|\lambda| \leq \|T\|\}$.
4. Radio espectral: $r(T) = \sup_{\lambda \in \sigma(T)} |\lambda| = \lim_n \|T^n\|^{1/n}$.
5. Matriz diagonal: $\sigma(\operatorname{diag}(d_1, \dots, d_n)) = \{d_1, \dots, d_n\}$.
6. Operador multiplicación por $g$ en $L^2$: $\sigma(T) = \overline{g(X)}$.
7. Autoadjunto $T = T^*$: $\sigma(T) \subseteq \mathbb{R}$.

## Ejercicios (50)

### Normas

1. Calcula $\|(3,4)\|_2$.
2. Calcula $\|(1,-2,2)\|_2$.
3. Calcula $\|(1,-2,2)\|_1$.
4. Calcula $\|(1,-2,2)\|_\infty$.
5. Calcula $\|(2,3)\|_2$.
6. Calcula $\|(5,12)\|_2$.
7. Calcula $\|(1,1,1,1,1,1,1)\|_2$.
8. Calcula $\|(1,-1,0)\|_1$.
9. Calcula $\|(3,-4)\|_\infty$.
10. Calcula $\|f\|_\infty$ para $f(x) = x$ en $[0,1]$.
11. Calcula $\|f\|_\infty$ para $f(x) = \sin x$ en $[0,\pi]$.
12. Calcula $\|f\|_2$ para $f(x) = x$ en $[0,1]$.
13. Calcula $\|f\|_1$ para $f(x) = x$ en $[0,1]$.
14. Calcula $\|f\|_2$ para $f(x) = 1$ en $[0,1]$.
15. Calcula $\|f\|_2$ para $f(x) = x^2$ en $[0,1]$.

### Ortogonalidad

16. Calcula $\langle (1,2), (2,-1)\rangle$ en $\mathbb{R}^2$.
17. Calcula $\langle (1,1), (1,-1)\rangle$ en $\mathbb{R}^2$.
18. Calcula $\langle x, x^2\rangle$ en $L^2[-1,1]$.
19. Calcula $\langle 1, x\rangle$ en $L^2[0,1]$.
20. Calcula $\langle e^{inx}, e^{imx}\rangle$ en $L^2[0,2\pi]$ con $n \neq m$.
21. Calcula $\langle \sin x, \cos x\rangle$ en $L^2[-\pi,\pi]$.
22. Calcula $\|e_n\|$ en $\ell^2$ para el vector canónico $e_n$.
23. Calcula $\|\sin x\|_2$ en $L^2[0,2\pi]$.
24. Calcula $\langle \cos x, \cos 2x\rangle$ en $L^2[0,2\pi]$.
25. Calcula $\langle 1, x^2\rangle$ en $L^2[-1,1]$.

### Proyecciones

26. Proyecta $x$ sobre las constantes en $L^2[0,1]$.
27. Proyecta $x^2$ sobre las constantes en $L^2[0,1]$.
28. Proyecta $e^x$ sobre las constantes en $L^2[0,1]$.
29. Proyecta $x$ sobre $\operatorname{span}\{1\}$ en $L^2[-1,1]$.
30. Halla la distancia de $x$ a las constantes en $L^2[0,1]$.
31. Proyecta $x^2$ sobre $\operatorname{span}\{x\}$ en $L^2[0,1]$.
32. Halla la distancia de $x^2$ a $\operatorname{span}\{x\}$ en $L^2[0,1]$.
33. Proyecta $(3,4)$ sobre el eje $x$ en $\mathbb{R}^2$.
34. Halla la distancia de $(3,4)$ al eje $x$ en $\mathbb{R}^2$.
35. Proyecta $(1,1)$ sobre $\operatorname{span}\{(1,0)\}$.

### Operadores

36. Halla la norma de $(Tf)(x) = 3f(x)$ en $C[0,1]$.
37. Halla la norma de $(Tf)(x) = x f(x)$ en $C[0,1]$.
38. Halla la norma de $(Tf)(x) = \int_0^x f(t)\,dt$ en $C[0,1]$.
39. Halla la norma de $f(x) = \int_0^1 x(t)\,dt$ en $C[0,1]$.
40. Halla la norma de $f(x,y) = x + y$ en $\mathbb{R}^2$ euclidiano.
41. Halla la norma de $f(x,y) = 2x + y$ en $\mathbb{R}^2$ euclidiano.
42. Halla la norma de $f(x,y,z) = x + y + z$ en $\mathbb{R}^3$ euclidiano.
43. Halla la norma del operador diagonal $\operatorname{diag}(2,3)$ en $\mathbb{R}^2$ euclidiano.
44. Halla la norma del shift $T(x_1,x_2,\dots) = (0,x_1,x_2,\dots)$ en $\ell^2$.
45. Halla la norma de $T(x_1,x_2,\dots) = \left(\dfrac{x_1}{2}, \dfrac{x_2}{3}, \dots\right)$ en $\ell^2$.

### Espectro

46. Determina el espectro de $\operatorname{diag}(2,3)$.
47. Halla el radio espectral de $\operatorname{diag}(2,3)$.
48. Determina el espectro de $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$.
49. Determina el espectro de $(Tf)(x) = x f(x)$ en $L^2[0,1]$.
50. Determina el espectro de $(Tf)(x) = x^2 f(x)$ en $L^2[0,1]$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $5$</div>
<div class="r"><b>02</b> $3$</div>
<div class="r"><b>03</b> $5$</div>
<div class="r"><b>04</b> $2$</div>
<div class="r"><b>05</b> $\sqrt{13}$</div>
<div class="r"><b>06</b> $13$</div>
<div class="r"><b>07</b> $\sqrt{7}$</div>
<div class="r"><b>08</b> $2$</div>
<div class="r"><b>09</b> $4$</div>
<div class="r"><b>10</b> $1$</div>
<div class="r"><b>11</b> $1$</div>
<div class="r"><b>12</b> $\dfrac{1}{\sqrt{3}}$</div>
<div class="r"><b>13</b> $\dfrac{1}{2}$</div>
<div class="r"><b>14</b> $1$</div>
<div class="r"><b>15</b> $\dfrac{1}{\sqrt{5}}$</div>
<div class="r"><b>16</b> $0$</div>
<div class="r"><b>17</b> $0$</div>
<div class="r"><b>18</b> $0$</div>
<div class="r"><b>19</b> $\dfrac{1}{2}$</div>
<div class="r"><b>20</b> $0$</div>
<div class="r"><b>21</b> $0$</div>
<div class="r"><b>22</b> $1$</div>
<div class="r"><b>23</b> $\sqrt{\pi}$</div>
<div class="r"><b>24</b> $0$</div>
<div class="r"><b>25</b> $\dfrac{2}{3}$</div>
<div class="r"><b>26</b> $\dfrac{1}{2}$</div>
<div class="r"><b>27</b> $\dfrac{1}{3}$</div>
<div class="r"><b>28</b> $e - 1$</div>
<div class="r"><b>29</b> $0$</div>
<div class="r"><b>30</b> $\dfrac{1}{\sqrt{12}}$</div>
<div class="r"><b>31</b> $\dfrac{3}{4}x$</div>
<div class="r"><b>32</b> $\dfrac{1}{\sqrt{80}}$</div>
<div class="r"><b>33</b> $(3,0)$</div>
<div class="r"><b>34</b> $4$</div>
<div class="r"><b>35</b> $(1,0)$</div>
<div class="r"><b>36</b> $3$</div>
<div class="r"><b>37</b> $1$</div>
<div class="r"><b>38</b> $1$</div>
<div class="r"><b>39</b> $1$</div>
<div class="r"><b>40</b> $\sqrt{2}$</div>
<div class="r"><b>41</b> $\sqrt{5}$</div>
<div class="r"><b>42</b> $\sqrt{3}$</div>
<div class="r"><b>43</b> $3$</div>
<div class="r"><b>44</b> $1$</div>
<div class="r"><b>45</b> $\dfrac{1}{2}$</div>
<div class="r"><b>46</b> $\{2,3\}$</div>
<div class="r"><b>47</b> $3$</div>
<div class="r"><b>48</b> $\{0\}$</div>
<div class="r"><b>49</b> $[0,1]$</div>
<div class="r"><b>50</b> $[0,1]$</div>
</div>
