# Cálculo vectorial · Formulario y ejercicios

## Formulario

### Campos vectoriales, divergencia y rotacional

- Campo en el plano: $\vec{F} = \langle P, Q \rangle$. En el espacio: $\vec{F} = \langle P, Q, R \rangle$.
- Gradiente: $\nabla f = \langle f_x, f_y, f_z \rangle$.
- Divergencia en el plano: $\nabla \cdot \vec{F} = P_x + Q_y$.
- Divergencia en el espacio: $\nabla \cdot \vec{F} = P_x + Q_y + R_z$.
- Rotacional en el plano: $\nabla \times \vec{F} = Q_x - P_y$.
- Rotacional en el espacio: $\nabla \times \vec{F} = \langle R_y - Q_z,\; P_z - R_x,\; Q_x - P_y \rangle$.

### Integrales de línea

- Trabajo o circulación: $\displaystyle\int_C \vec{F} \cdot d\vec{r} = \int_a^b \vec{F}(\vec{r}(t)) \cdot \vec{r}'(t)\, dt$.
- Longitud de arco: $\displaystyle\int_C f\, ds = \int_a^b f(\vec{r}(t))\, |\vec{r}'(t)|\, dt$.
- Curva cerrada: $\displaystyle\oint_C$.

### Campos conservativos y potencial

- $\vec{F}$ conservativo $\iff \vec{F} = \nabla f$.
- $\displaystyle\int_C \vec{F} \cdot d\vec{r} = f(\vec{r}(b)) - f(\vec{r}(a))$.
- Dominio simplemente conexo y $\nabla \times \vec{F} = \vec{0} \Rightarrow \vec{F} = \nabla f$.

### Teorema de Green

$$\oint_C (P\, dx + Q\, dy) = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dA$$

- Área con Green: $\displaystyle A = \frac{1}{2}\oint_C (x\, dy - y\, dx)$.

### Superficies y flujo

- Normal: $\vec{n} = \vec{r}_u \times \vec{r}_v$.
- Flujo: $\displaystyle\iint_S \vec{F} \cdot \vec{n}\, dS = \iint_D \vec{F}(\vec{r}(u,v)) \cdot (\vec{r}_u \times \vec{r}_v)\, du\, dv$.

### Teorema de Stokes

$$\oint_C \vec{F} \cdot d\vec{r} = \iint_S (\nabla \times \vec{F}) \cdot \vec{n}\, dS$$

### Teorema de Gauss (divergencia)

$$\iint_S \vec{F} \cdot \vec{n}\, dS = \iiint_V \nabla \cdot \vec{F}\, dV$$

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
9. ¿Es conservativo $\vec{F} = \langle 2x, 2y \rangle$?
10. ¿Es conservativo $\vec{F} = \langle -y, x \rangle$?

### Integrales de línea y trabajo

11. Calcula $\displaystyle\int_C \vec{F} \cdot d\vec{r}$ con $\vec{F} = \langle y, x \rangle$ sobre $\vec{r}(t) = \langle t, t^2 \rangle$, $t \in [0,1]$.
12. Calcula el trabajo de $\vec{F} = \langle x, y \rangle$ de $(0,0)$ a $(1,1)$ por el segmento recto.
13. Calcula el trabajo de $\vec{F} = \langle x, y \rangle$ de $(0,0)$ a $(1,1)$ por $y = x^2$.
14. Calcula el trabajo de $\vec{F} = \langle 3, 4 \rangle$ de $(0,0)$ a $(2,2)$.
15. Calcula $\displaystyle\oint_C \langle y, x \rangle \cdot d\vec{r}$ sobre el círculo unitario.
16. Calcula el trabajo de $\vec{F} = \langle 2x, 2y \rangle$ de $(0,0)$ a $(1,2)$.
17. Calcula $\displaystyle\oint_C \langle -y, x \rangle \cdot d\vec{r}$ sobre el círculo de radio $2$.
18. Calcula el trabajo de $\vec{F} = \langle e^x, 1 \rangle$ de $(0,0)$ a $(1,1)$ por la recta $y = x$.
19. Calcula $\displaystyle\int_0^1 \langle t, t^2 \rangle \cdot \langle 1, 2t \rangle\, dt$.
20. Calcula $\displaystyle\int_0^2 \langle t, 1 \rangle \cdot \langle 1, 1 \rangle\, dt$.

### Función potencial

21. Halla el potencial de $\vec{F} = \langle 2x, 2y \rangle$.
22. Halla el potencial de $\vec{F} = \langle 2xy, x^2 \rangle$.
23. Halla el potencial de $\vec{F} = \langle 2x, 3y^2 \rangle$.
24. Halla el potencial de $\vec{F} = \langle y, x \rangle$.
25. Halla el potencial de $\vec{F} = \langle yz, xz, xy \rangle$.
26. Halla el potencial de $\vec{F} = \langle e^x y, e^x \rangle$.

### Teorema de Green

27. Aplica Green a $\displaystyle\oint_C x\, dy$ sobre el cuadrado unitario antihorario.
28. Aplica Green a $\displaystyle\oint_C (-y)\, dx$ sobre el cuadrado unitario antihorario.
29. Calcula $\displaystyle\oint_C (x\, dy - y\, dx)$ sobre el círculo unitario.
30. Halla el área del círculo de radio $3$ con Green.
31. Calcula $\displaystyle\oint_C x\, dy$ sobre el círculo de radio $2$ antihorario.
32. Calcula $\displaystyle\oint_C (y\, dx + x\, dy)$ sobre el cuadrado unitario.
33. Calcula $\displaystyle\oint_C 2x\, dy$ sobre el círculo unitario.
34. Usa Green para hallar el área de la elipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$.
35. Calcula $\displaystyle\oint_C (-y\, dx + x\, dy)$ sobre el cuadrado unitario.

### Flujo y superficies

36. Halla el flujo de $\vec{F} = \langle 0, 0, z \rangle$ por el disco $z = 1$, $x^2 + y^2 \leq 1$, hacia arriba.
37. Halla el flujo de $\vec{F} = \langle 0, 0, 1 \rangle$ por el cuadrado $[0,1]^2$ en $z = 0$, hacia arriba.
38. Halla el flujo de $\vec{F} = \langle x, y, z \rangle$ por la esfera de radio $1$.
39. Halla el flujo de $\vec{F} = \langle x, y, z \rangle$ por la esfera de radio $3$.
40. Halla el flujo de $\vec{F} = \langle 0, 0, z \rangle$ por el disco $z = 2$, $x^2 + y^2 \leq 1$, hacia arriba.
41. Halla el flujo de $\vec{F} = \langle 0, 0, z^2 \rangle$ por el disco unitario en $z = 1$, hacia arriba.

### Teorema de Stokes

42. Verifica Stokes para $\vec{F} = \langle -y, x, 0 \rangle$ sobre el disco unitario del plano $xy$.
43. Verifica Stokes para $\vec{F} = \langle -y, x, z \rangle$ sobre el disco unitario del plano $xy$.
44. Calcula la circulación de $\vec{F} = \langle 0, 0, xy \rangle$ sobre el círculo unitario en $z = 0$.
45. Calcula la circulación de $\vec{F} = \langle yz, xz, xy \rangle$ sobre el círculo unitario en $z = 0$.
46. Calcula la circulación de $\vec{F} = \langle -y, x, 0 \rangle$ sobre el círculo de radio $2$ en el plano $xy$.

### Teorema de Gauss

47. Verifica Gauss para $\vec{F} = \langle x, y, z \rangle$ en el cubo $[0,1]^3$.
48. Verifica Gauss para $\vec{F} = \langle x^2, y^2, z^2 \rangle$ en el cubo $[0,1]^3$.
49. Halla el flujo de $\vec{F} = \langle x, y, 0 \rangle$ por la esfera de radio $2$ usando Gauss.
50. Halla el flujo de $\vec{F} = \langle x, y, z \rangle$ por la esfera de radio $2$ usando Gauss.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $\nabla \cdot \vec{F} = 2x + 2y$</div>
<div class="r"><b>02</b> $\nabla \cdot \vec{F} = y + z + x$</div>
<div class="r"><b>03</b> $\nabla \cdot \vec{F} = 3(x^2 + y^2 + z^2)$</div>
<div class="r"><b>04</b> $\nabla \times \vec{F} = \langle 0, 0, 2 \rangle$</div>
<div class="r"><b>05</b> $\nabla \times \vec{F} = \langle 0,\, 0,\, 0 \rangle$ (conservativo)</div>
<div class="r"><b>06</b> $\nabla \cdot \vec{F} = e^x + e^y + e^z$</div>
<div class="r"><b>07</b> $\nabla \times \vec{F} = \langle x,\, -y,\, 0 \rangle$</div>
<div class="r"><b>08</b> $\nabla \cdot \vec{F} = 3$</div>
<div class="r"><b>09</b> Sí, es conservativo (rotacional $0$)</div>
<div class="r"><b>10</b> No, $\nabla \times \vec{F} = 2 \neq 0$</div>
<div class="r"><b>11</b> $1$</div>
<div class="r"><b>12</b> $1$</div>
<div class="r"><b>13</b> $1$</div>
<div class="r"><b>14</b> $14$</div>
<div class="r"><b>15</b> $0$</div>
<div class="r"><b>16</b> $5$</div>
<div class="r"><b>17</b> $8\pi$</div>
<div class="r"><b>18</b> $e$</div>
<div class="r"><b>19</b> $1$</div>
<div class="r"><b>20</b> $4$</div>
<div class="r"><b>21</b> $f = x^2 + y^2 + C$</div>
<div class="r"><b>22</b> $f = x^2 y + C$</div>
<div class="r"><b>23</b> $f = x^2 + y^3 + C$</div>
<div class="r"><b>24</b> $f = xy + C$</div>
<div class="r"><b>25</b> $f = xyz + C$</div>
<div class="r"><b>26</b> $f = e^x y + C$</div>
<div class="r"><b>27</b> $1$</div>
<div class="r"><b>28</b> $1$</div>
<div class="r"><b>29</b> $2\pi$</div>
<div class="r"><b>30</b> $9\pi$</div>
<div class="r"><b>31</b> $4\pi$</div>
<div class="r"><b>32</b> $0$</div>
<div class="r"><b>33</b> $2\pi$</div>
<div class="r"><b>34</b> $A = \pi a b$</div>
<div class="r"><b>35</b> $2$</div>
<div class="r"><b>36</b> $\pi$</div>
<div class="r"><b>37</b> $1$</div>
<div class="r"><b>38</b> $4\pi$</div>
<div class="r"><b>39</b> $108\pi$</div>
<div class="r"><b>40</b> $2\pi$</div>
<div class="r"><b>41</b> $\pi$</div>
<div class="r"><b>42</b> $2\pi$ (ambos lados)</div>
<div class="r"><b>43</b> $2\pi$ (ambos lados)</div>
<div class="r"><b>44</b> $0$</div>
<div class="r"><b>45</b> $0$</div>
<div class="r"><b>46</b> $8\pi$</div>
<div class="r"><b>47</b> $3$</div>
<div class="r"><b>48</b> $3$</div>
<div class="r"><b>49</b> $\dfrac{64\pi}{3}$</div>
<div class="r"><b>50</b> $32\pi$</div>
</div>
