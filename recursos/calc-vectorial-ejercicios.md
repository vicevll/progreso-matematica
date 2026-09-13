# Cálculo vectorial · 50 ejercicios

## Formulario

### Campos vectoriales

- Campo en el plano: $\vec{F}(x,y) = \langle P, Q \rangle$. En el espacio: $\vec{F}(x,y,z) = \langle P, Q, R \rangle$.
- Gradiente: $\nabla f = \langle f_x, f_y \rangle$ (plano), $\nabla f = \langle f_x, f_y, f_z \rangle$ (espacio). La parcial $f_x$ deriva respecto de $x$ tratando las demás variables como constantes.
- Divergencia en el plano: $\nabla \cdot \vec{F} = P_x + Q_y$.
- Divergencia en el espacio: $\nabla \cdot \vec{F} = P_x + Q_y + R_z$.
- Rotacional en el plano: $\nabla \times \vec{F} = Q_x - P_y$.
- Rotacional en el espacio: $\nabla \times \vec{F} = \langle R_y - Q_z,\; P_z - R_x,\; Q_x - P_y \rangle$.
- $\nabla \cdot \vec{F} = 0$: campo incompresible. $\nabla \times \vec{F} = \vec{0}$: campo irrotacional.

### Integrales de línea

- Trabajo o circulación: $\displaystyle\int_C \vec{F} \cdot d\vec{r} = \int_a^b \vec{F}\big(\vec{r}(t)\big) \cdot \vec{r}'(t)\, dt$.
- Con longitud de arco: $\displaystyle\int_C f\, ds = \int_a^b f\big(\vec{r}(t)\big)\, |\vec{r}'(t)|\, dt$.
- Curva cerrada: $\displaystyle\oint_C$. Recorrer la curva al revés cambia el signo de la integral vectorial.

### Campos conservativos y potencial

- $\vec{F}$ conservativo $\iff$ existe $f$ con $\vec{F} = \nabla f$.
- $\displaystyle\int_C \vec{F} \cdot d\vec{r} = f(\vec{r}(b)) - f(\vec{r}(a))$: el trabajo no depende del camino; en curvas cerradas vale $0$.
- Criterio: dominio simplemente conexo (sin agujeros) y $\nabla \times \vec{F} = \vec{0}$ $\Rightarrow$ $\vec{F} = \nabla f$.
- Método: de $f_x = P$ integra respecto de $x$ con "constante" $g(y)$; usa $f_y = Q$ para hallar $g$.

### Teorema de Green

$$\oint_C (P\, dx + Q\, dy) = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dA$$

Curva cerrada simple, orientada antihorario; $D$ es la región que encierra.

- Área con Green: $\displaystyle A = \frac{1}{2}\oint_C (x\, dy - y\, dx)$.

### Superficies y flujo

- Superficie parametrizada: $\vec{r}(u,v)$. Tangentes: $\vec{r}_u$, $\vec{r}_v$. Normal: $\vec{n} = \vec{r}_u \times \vec{r}_v$; unitaria: $\hat{n} = \vec{n}/|\vec{n}|$.
- Flujo: $\displaystyle\iint_S \vec{F} \cdot \vec{n}\, dS = \iint_D \vec{F}\big(\vec{r}(u,v)\big) \cdot (\vec{r}_u \times \vec{r}_v)\, du\, dv$.
- Superficies cerradas: normal exterior.

### Teorema de Stokes

$$\oint_C \vec{F} \cdot d\vec{r} = \iint_S (\nabla \times \vec{F}) \cdot \vec{n}\, dS$$

La orientación de $C$ y de $\vec{n}$ se relacionan por la regla de la mano derecha.

### Teorema de Gauss (divergencia)

$$\iint_S \vec{F} \cdot \vec{n}\, dS = \iiint_V \nabla \cdot \vec{F}\, dV$$

$S$ superficie cerrada que encierra el volumen $V$, con normal exterior.

## Ejercicios (50)

### Divergencia y rotacional

1. Halla $\nabla \cdot \vec{F}$ para $\vec{F} = \langle x^2, y^2 \rangle$.
2. Halla $\nabla \cdot \vec{F}$ para $\vec{F} = \langle xy, yz, zx \rangle$.
3. Halla $\nabla \cdot \vec{F}$ para $\vec{F} = \langle x^3, y^3, z^3 \rangle$.
4. Halla $\nabla \times \vec{F}$ para $\vec{F} = \langle -y, x, 0 \rangle$.
5. Halla $\nabla \times \vec{F}$ para $\vec{F} = \langle yz, xz, xy \rangle$.
6. Halla $\nabla \cdot \vec{F}$ para $\vec{F} = \langle e^x, e^y, e^z \rangle$.
7. Halla $\nabla \times \vec{F}$ para $\vec{F} = \langle 0, 0, xy \rangle$.
8. Halla $\nabla \cdot \vec{F}$ para $\vec{F} = \langle x, y, z \rangle$.
9. Halla $\nabla \cdot \vec{F}$ para $\vec{F} = \langle x^2 y, x y^2 \rangle$.
10. Halla el rotacional (en el plano) de $\vec{F} = \langle x^2 y, x y^2 \rangle$.
11. Halla $\nabla \cdot \vec{F}$ para $\vec{F} = \langle \cos x, \operatorname{sen} y, e^z \rangle$.
12. Halla el rotacional (en el plano) de $\vec{F} = \langle -y, x \rangle$.

### Campos conservativos y función potencial

13. ¿Es conservativo $\vec{F} = \langle 2x, 2y \rangle$? Si lo es, da su potencial.
14. ¿Es conservativo $\vec{F} = \langle -y, x \rangle$? Justifica.
15. Halla el potencial de $\vec{F} = \langle 2xy, x^2 \rangle$.
16. Halla el potencial de $\vec{F} = \langle 2x, 3y^2 \rangle$.
17. Halla el potencial de $\vec{F} = \langle e^x, 1 \rangle$.
18. Halla el potencial de $\vec{F} = \langle y\cos(xy), x\cos(xy) \rangle$.
19. Halla el potencial de $\vec{F} = \langle 3x^2 + 2y, 2x \rangle$.
20. ¿Es conservativo $\vec{F} = \langle y, x \rangle$? Si lo es, da su potencial.

### Integrales de línea y trabajo

21. Calcula $\displaystyle\int_C \vec{F} \cdot d\vec{r}$ para $\vec{F} = \langle y, x \rangle$ sobre $\vec{r}(t) = \langle t, t^2 \rangle$, $t \in [0,1]$.
22. Calcula el trabajo de $\vec{F} = \langle x, y \rangle$ de $(0,0)$ a $(1,1)$ por el segmento recto.
23. Calcula el trabajo de $\vec{F} = \langle 3, 4 \rangle$ de $(0,0)$ a $(2,2)$ por la recta.
24. Calcula el trabajo de $\vec{F} = \langle y, x \rangle$ de $(0,0)$ a $(1,1)$ por la parábola $y = x^2$.
25. Calcula $\displaystyle\int_C f\, ds$ con $f(x,y) = x + y$ sobre $\vec{r}(t) = \langle t, 0 \rangle$, $t \in [0,2]$.
26. Calcula el trabajo de $\vec{F} = \langle e^x, 1 \rangle$ de $(0,0)$ a $(1,1)$ por la recta $y = x$.
27. Calcula la circulación de $\vec{F} = \langle -y, x \rangle$ alrededor del círculo unitario, recorrido antihorario.
28. Calcula $\displaystyle\oint_C \vec{F} \cdot d\vec{r}$ para $\vec{F} = \langle 2x, 2y \rangle$ sobre la circunferencia unitaria.
29. Calcula el trabajo de $\vec{F} = \langle y^2, 2xy \rangle$ de $(0,0)$ a $(2,1)$.
30. Calcula $\displaystyle\int_C \vec{F} \cdot d\vec{r}$ para $\vec{F} = \langle x, x^2 \rangle$ sobre $\vec{r}(t) = \langle t, t \rangle$, $t \in [0,1]$.

### Teorema de Green

31. Aplica Green a $\displaystyle\oint_C x\, dy$ sobre el cuadrado unitario $[0,1] \times [0,1]$, orientado antihorario.
32. Calcula $\displaystyle\oint_C (x\, dy - y\, dx)$ sobre el círculo unitario.
33. Usa Green para hallar el área encerrada por la elipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$.
34. Calcula $\displaystyle\oint_C (y\, dx - x\, dy)$ sobre el círculo unitario.
35. Calcula $\displaystyle\oint_C (x^2\, dx + y^2\, dy)$ sobre el círculo unitario.
36. Usa Green para hallar el área del disco $x^2 + y^2 \le 4$.
37. Calcula $\displaystyle\oint_C (y^2\, dx + x^2\, dy)$ sobre el cuadrado unitario, orientado antihorario.
38. Calcula $\displaystyle\oint_C (x\, dy + y\, dx)$ sobre el círculo unitario.

### Superficies y flujo

39. Halla el flujo de $\vec{F} = \langle 0, 0, z \rangle$ a través del disco $z = 1$, $x^2 + y^2 \le 1$, orientado hacia arriba.
40. Halla el flujo de $\vec{F} = \langle x, y, z \rangle$ a través de la esfera de radio $R$ (normal exterior).
41. Halla el flujo de $\vec{F} = \langle 0, 0, 1 \rangle$ a través del disco $x^2 + y^2 \le 4$ en el plano $z = 0$, orientado hacia arriba.
42. Halla el flujo de $\vec{F} = \langle x, y, 0 \rangle$ a través de la esfera de radio $2$ usando Gauss.
43. Halla el flujo de $\vec{F} = \langle 1, 0, 0 \rangle$ a través del cuadrado unitario del plano $x = 1$ (con $0 \le y \le 1$, $0 \le z \le 1$), con normal en la dirección de $\hat{i}$.
44. Halla el flujo de $\vec{F} = \langle 0, 0, 5 \rangle$ a través del disco unitario horizontal, orientado hacia abajo.

### Teoremas de Stokes y Gauss

45. Verifica Stokes para $\vec{F} = \langle -y, x, 0 \rangle$ sobre el disco unitario del plano $xy$.
46. Verifica Gauss para $\vec{F} = \langle x, y, z \rangle$ en el cubo $[0,1]^3$.
47. Verifica Gauss para $\vec{F} = \langle x^2, y^2, z^2 \rangle$ en el cubo $[0,1]^3$.
48. Verifica Stokes para $\vec{F} = \langle -y, x, z \rangle$ sobre el disco unitario del plano $xy$.
49. Halla el flujo de $\vec{F} = \langle x, 2y, 3z \rangle$ a través de la superficie del cubo $[0,1]^3$ usando Gauss.
50. Halla el flujo de $\vec{F} = \langle x^2, 0, 0 \rangle$ a través de la superficie del cubo $[0,1]^3$ usando Gauss.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $\nabla \cdot \vec{F} = 2x + 2y$</div>
<div class="r"><b>02</b> $\nabla \cdot \vec{F} = x + y + z$</div>
<div class="r"><b>03</b> $\nabla \cdot \vec{F} = 3x^2 + 3y^2 + 3z^2$</div>
<div class="r"><b>04</b> $\nabla \times \vec{F} = \langle 0, 0, 2 \rangle$</div>
<div class="r"><b>05</b> $\nabla \times \vec{F} = \langle 0, 0, 0 \rangle$</div>
<div class="r"><b>06</b> $\nabla \cdot \vec{F} = e^x + e^y + e^z$</div>
<div class="r"><b>07</b> $\nabla \times \vec{F} = \langle x, -y, 0 \rangle$</div>
<div class="r"><b>08</b> $\nabla \cdot \vec{F} = 3$</div>
<div class="r"><b>09</b> $\nabla \cdot \vec{F} = 4xy$</div>
<div class="r"><b>10</b> $\nabla \times \vec{F} = y^2 - x^2$</div>
<div class="r"><b>11</b> $\nabla \cdot \vec{F} = -\operatorname{sen} x + \cos y + e^z$</div>
<div class="r"><b>12</b> $\nabla \times \vec{F} = 2$</div>
<div class="r"><b>13</b> Sí; $f = x^2 + y^2$</div>
<div class="r"><b>14</b> No: $\nabla \times \vec{F} = 2 \ne 0$</div>
<div class="r"><b>15</b> $f = x^2 y + C$</div>
<div class="r"><b>16</b> $f = x^2 + y^3 + C$</div>
<div class="r"><b>17</b> $f = e^x + y + C$</div>
<div class="r"><b>18</b> $f = \operatorname{sen}(xy) + C$</div>
<div class="r"><b>19</b> $f = x^3 + 2xy + C$</div>
<div class="r"><b>20</b> Sí; $f = xy + C$</div>
<div class="r"><b>21</b> $1$</div>
<div class="r"><b>22</b> $1$</div>
<div class="r"><b>23</b> $14$</div>
<div class="r"><b>24</b> $1$</div>
<div class="r"><b>25</b> $2$</div>
<div class="r"><b>26</b> $e$</div>
<div class="r"><b>27</b> $2\pi$</div>
<div class="r"><b>28</b> $0$</div>
<div class="r"><b>29</b> $2$</div>
<div class="r"><b>30</b> $\dfrac{5}{6}$</div>
<div class="r"><b>31</b> $1$</div>
<div class="r"><b>32</b> $2\pi$</div>
<div class="r"><b>33</b> $A = \pi a b$</div>
<div class="r"><b>34</b> $-2\pi$</div>
<div class="r"><b>35</b> $0$</div>
<div class="r"><b>36</b> $4\pi$</div>
<div class="r"><b>37</b> $0$</div>
<div class="r"><b>38</b> $0$</div>
<div class="r"><b>39</b> $\pi$</div>
<div class="r"><b>40</b> $4\pi R^3$</div>
<div class="r"><b>41</b> $4\pi$</div>
<div class="r"><b>42</b> $\dfrac{64\pi}{3}$</div>
<div class="r"><b>43</b> $1$</div>
<div class="r"><b>44</b> $-5\pi$</div>
<div class="r"><b>45</b> Ambos lados dan $2\pi$</div>
<div class="r"><b>46</b> $\displaystyle\iiint_V 3\, dV = 3$</div>
<div class="r"><b>47</b> $\displaystyle\iiint_V 2(x+y+z)\, dV = 3$</div>
<div class="r"><b>48</b> Ambos lados dan $2\pi$</div>
<div class="r"><b>49</b> $6$</div>
<div class="r"><b>50</b> $1$</div>
</div>
