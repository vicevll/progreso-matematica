# Geometría vectorial · 50 ejercicios

**Nivel:** Univ 1 · **Área:** Funciones, trigonometría y geometría — Vectores, producto punto y cruz, rectas y planos en el espacio.

## Formulario

### Vectores
$$|\vec{v}| = \sqrt{v_1^2 + v_2^2 + v_3^2}, \qquad \hat{u} = \frac{\vec{v}}{|\vec{v}|}, \qquad \overrightarrow{AB} = B - A$$
$$c\vec{v} = \langle cv_1, cv_2, cv_3 \rangle, \qquad \vec{u} \pm \vec{v} = \langle u_1 \pm v_1, \, u_2 \pm v_2, \, u_3 \pm v_3 \rangle$$

### Producto punto, ángulo y proyección
$$\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2 + u_3v_3 = |\vec{u}|\,|\vec{v}|\cos\theta$$
$$\cos\theta = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}|\,|\vec{v}|}, \qquad \text{proy}_{\vec{v}}\vec{u} = \left( \frac{\vec{u} \cdot \vec{v}}{\vec{v} \cdot \vec{v}} \right)\vec{v}, \qquad \text{comp}_{\vec{v}}\vec{u} = \frac{\vec{u} \cdot \vec{v}}{|\vec{v}|}$$
$$\vec{u} \perp \vec{v} \iff \vec{u} \cdot \vec{v} = 0$$

### Producto cruz
$$\vec{u} \times \vec{v} = \langle u_2v_3 - u_3v_2, \; u_3v_1 - u_1v_3, \; u_1v_2 - u_2v_1 \rangle, \qquad \vec{u} \times \vec{v} = -(\vec{v} \times \vec{u})$$
$$|\vec{u} \times \vec{v}| = |\vec{u}|\,|\vec{v}|\,\text{sen}\,\theta, \qquad A_{\triangle} = \frac{1}{2}\Big|\overrightarrow{AB} \times \overrightarrow{AC}\Big|, \qquad V = \Big|\vec{u} \cdot (\vec{v} \times \vec{w})\Big|$$

### Rectas y planos
$$\vec{r}(t) = \vec{r}_0 + t\vec{d}, \qquad \frac{x - x_0}{d_1} = \frac{y - y_0}{d_2} = \frac{z - z_0}{d_3}$$
$$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0 \quad \Longleftrightarrow \quad ax + by + cz = d, \qquad \vec{n} = \overrightarrow{AB} \times \overrightarrow{AC}$$

### Distancias
$$D_{\text{punto-plano}} = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$$
$$D_{\text{punto-recta}} = \frac{\Big|\overrightarrow{PQ} \times \vec{d}\Big|}{|\vec{d}|}, \qquad D_{\text{alabeadas}} = \frac{\Big|\overrightarrow{PQ} \cdot (\vec{d}_1 \times \vec{d}_2)\Big|}{\Big|\vec{d}_1 \times \vec{d}_2\Big|}$$

## Ejercicios (50)

1. Halla la norma de $\vec{u} = \langle 2, -3, 6 \rangle$.
2. Halla la norma de $\vec{v} = \langle 1, 4, 8 \rangle$.
3. Halla el vector unitario de $\vec{w} = \langle 0, 3, 4 \rangle$.
4. Halla el vector unitario de $\vec{a} = \langle -2, 2, -1 \rangle$.
5. Halla la norma de $\overrightarrow{AB}$ con $A(1, 2, 3)$ y $B(4, 6, 3)$.
6. Halla $|\langle 5, -12 \rangle|$.
7. Calcula $\langle 1, -2, 3 \rangle + \langle 4, 0, -1 \rangle$.
8. Calcula $3\langle 1, -2, 3 \rangle - 2\langle 4, 0, -1 \rangle$.
9. Halla $\overrightarrow{AB}$ con $A(1, 0, 2)$ y $B(3, -1, 4)$.
10. Calcula $-2\langle 2, 1, -1 \rangle$.
11. Calcula $\langle 2, -3, 1 \rangle \cdot \langle 4, 1, -2 \rangle$.
12. Calcula $\langle 1, 0, -1 \rangle \cdot \langle 3, 2, 3 \rangle$.
13. Calcula $\langle -1, 2, 4 \rangle \cdot \langle 2, 3, -1 \rangle$.
14. Calcula $\langle 3, -1, 2 \rangle \cdot \langle 1, 5, 2 \rangle$.
15. Calcula $\langle 2, -1, 3 \rangle \cdot \langle 2, -1, 3 \rangle$.
16. Si $\vec{u} \cdot \vec{v} = 12$ y $|\vec{v}| = 4$, halla la componente escalar de $\vec{u}$ sobre $\vec{v}$.
17. Halla el ángulo entre $\langle 1, 0 \rangle$ y $\langle \sqrt{3}, 1 \rangle$.
18. Halla el ángulo entre $\langle 1, 1, 0 \rangle$ y $\langle 0, 1, 1 \rangle$.
19. Halla el ángulo entre $\langle 1, 2, 2 \rangle$ y $\langle 3, 0, 0 \rangle$.
20. Halla el ángulo entre $\langle 1, 0, 0 \rangle$ y $\langle 1, 1, 1 \rangle$.
21. Halla el ángulo entre $\langle 2, -1, 2 \rangle$ y $\langle 1, 2, -2 \rangle$.
22. Halla el ángulo entre $\langle 1, 1, 1 \rangle$ y $\langle 2, -1, 0 \rangle$.
23. Proyecta $\langle 3, 4 \rangle$ sobre $\langle 1, 0 \rangle$.
24. Proyecta $\langle 2, 5, 2 \rangle$ sobre $\langle 1, 1, 1 \rangle$.
25. Proyecta $\langle 2, -1, 3 \rangle$ sobre $\langle 1, 1, 1 \rangle$.
26. Proyecta $\langle 3, -2, 1 \rangle$ sobre $\langle 1, 0, 0 \rangle$.
27. Halla la componente escalar de $\langle 1, 2, 2 \rangle$ sobre $\langle 0, 1, 0 \rangle$.
28. Determina si $\langle 1, 2, -2 \rangle$ y $\langle 2, -1, 0 \rangle$ son ortogonales.
29. Halla $k$ para que $\langle 2, k, 1 \rangle$ y $\langle 1, -1, 3 \rangle$ sean ortogonales.
30. Halla $k$ para que $\langle 1, k, 2 \rangle$ y $\langle 3, -1, k \rangle$ sean ortogonales.
31. Calcula $\langle 1, 2, 3 \rangle \times \langle 4, 5, 6 \rangle$.
32. Calcula $\langle 2, 1, 0 \rangle \times \langle 1, -1, 3 \rangle$.
33. Calcula $\hat{i} \times \hat{j}$.
34. Calcula $\langle 1, 0, 2 \rangle \times \langle 0, 1, 1 \rangle$.
35. Calcula $\langle 3, -1, 2 \rangle \times \langle 1, 2, 3 \rangle$.
36. Calcula $\langle 1, 2, 3 \rangle \times \langle 2, 4, 6 \rangle$.
37. Halla el área del paralelogramo formado por $\langle 1, 0, 0 \rangle$ y $\langle 0, 2, 1 \rangle$.
38. Halla el área del triángulo con vértices $A(1, 0, 0)$, $B(0, 2, 0)$ y $C(0, 0, 3)$.
39. Halla el volumen del paralelepípedo formado por $\langle 1, 1, 0 \rangle$, $\langle 0, 1, 1 \rangle$ y $\langle 1, 0, 1 \rangle$.
40. Halla el área del triángulo con vértices $A(0, 0, 0)$, $B(1, 2, 0)$ y $C(0, 1, 3)$.
41. Escribe la ecuación paramétrica de la recta por $P(1, -2, 3)$ con dirección $\langle 2, 1, -1 \rangle$.
42. Halla las ecuaciones simétricas de la recta por $(2, 0, -1)$ y $(4, 3, 2)$.
43. Determina si las rectas de direcciones $\langle 1, 2, 3 \rangle$ y $\langle 2, 4, 6 \rangle$ son paralelas.
44. Halla el punto de $\vec{r}(t) = \langle 1, 2, 3 \rangle + t\langle 1, -1, 2 \rangle$ en $t = 2$.
45. Halla la dirección de la recta que pasa por $A(1, 1, 1)$ y $B(3, 0, 4)$.
46. Halla la ecuación del plano por $(1, 2, 3)$ con normal $\langle 2, -1, 4 \rangle$.
47. Halla la ecuación del plano que pasa por el origen con normal $\langle 1, 1, 1 \rangle$.
48. Halla la normal y la ecuación del plano por $A(2, 0, 0)$, $B(0, 1, 0)$ y $C(0, 0, 1)$.
49. Halla la distancia del punto $(1, 2, 3)$ al plano $2x - y + 2z = 1$.
50. Halla la distancia del punto $P(3, 1, 2)$ a la recta por $Q(1, 0, 0)$ con dirección $\langle 1, 1, 1 \rangle$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $|\vec{u}| = 7$</div>
<div class="r"><b>02</b> $|\vec{v}| = 9$</div>
<div class="r"><b>03</b> $\langle 0, \frac{3}{5}, \frac{4}{5} \rangle$</div>
<div class="r"><b>04</b> $\langle -\frac{2}{3}, \frac{2}{3}, -\frac{1}{3} \rangle$</div>
<div class="r"><b>05</b> $5$</div>
<div class="r"><b>06</b> $13$</div>
<div class="r"><b>07</b> $\langle 5, -2, 2 \rangle$</div>
<div class="r"><b>08</b> $\langle -5, -6, 11 \rangle$</div>
<div class="r"><b>09</b> $\langle 2, -1, 2 \rangle$</div>
<div class="r"><b>10</b> $\langle -4, -2, 2 \rangle$</div>
<div class="r"><b>11</b> $3$</div>
<div class="r"><b>12</b> $0$</div>
<div class="r"><b>13</b> $0$</div>
<div class="r"><b>14</b> $2$</div>
<div class="r"><b>15</b> $14$</div>
<div class="r"><b>16</b> $3$</div>
<div class="r"><b>17</b> $30°$</div>
<div class="r"><b>18</b> $60°$</div>
<div class="r"><b>19</b> $\arccos\frac{1}{3} \approx 70.53°$</div>
<div class="r"><b>20</b> $\arccos\frac{1}{\sqrt{3}} \approx 54.74°$</div>
<div class="r"><b>21</b> $\arccos\left(-\frac{4}{9}\right) \approx 116.39°$</div>
<div class="r"><b>22</b> $\arccos\frac{1}{\sqrt{15}} \approx 74.96°$</div>
<div class="r"><b>23</b> $\langle 3, 0 \rangle$</div>
<div class="r"><b>24</b> $\langle 3, 3, 3 \rangle$</div>
<div class="r"><b>25</b> $\langle \frac{4}{3}, \frac{4}{3}, \frac{4}{3} \rangle$</div>
<div class="r"><b>26</b> $\langle 3, 0, 0 \rangle$</div>
<div class="r"><b>27</b> $2$</div>
<div class="r"><b>28</b> Sí: $\vec{u} \cdot \vec{v} = 0$</div>
<div class="r"><b>29</b> $k = 5$</div>
<div class="r"><b>30</b> $k = -3$</div>
<div class="r"><b>31</b> $\langle -3, 6, -3 \rangle$</div>
<div class="r"><b>32</b> $\langle 3, -6, -3 \rangle$</div>
<div class="r"><b>33</b> $\langle 0, 0, 1 \rangle$</div>
<div class="r"><b>34</b> $\langle -2, -1, 1 \rangle$</div>
<div class="r"><b>35</b> $\langle -7, -7, 7 \rangle$</div>
<div class="r"><b>36</b> $\langle 0, 0, 0 \rangle$</div>
<div class="r"><b>37</b> $\sqrt{5}$</div>
<div class="r"><b>38</b> $\frac{7}{2}$</div>
<div class="r"><b>39</b> $2$</div>
<div class="r"><b>40</b> $\frac{\sqrt{46}}{2}$</div>
<div class="r"><b>41</b> $\langle 1 + 2t, -2 + t, 3 - t \rangle$</div>
<div class="r"><b>42</b> $\frac{x - 2}{2} = \frac{y}{3} = \frac{z + 1}{3}$</div>
<div class="r"><b>43</b> Sí, son proporcionales</div>
<div class="r"><b>44</b> $\langle 3, 0, 7 \rangle$</div>
<div class="r"><b>45</b> $\langle 2, -1, 3 \rangle$</div>
<div class="r"><b>46</b> $2x - y + 4z = 12$</div>
<div class="r"><b>47</b> $x + y + z = 0$</div>
<div class="r"><b>48</b> $\vec{n} = \langle 1, 2, 2 \rangle$; $x + 2y + 2z = 2$</div>
<div class="r"><b>49</b> $\frac{5}{3}$</div>
<div class="r"><b>50</b> $\frac{\sqrt{6}}{3} \approx 0.816$</div>
</div>
