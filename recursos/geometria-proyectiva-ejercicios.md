# Geometría proyectiva · 50 ejercicios

**Nivel:** Univ 3–5 · **Área:** Funciones, trigonometría y geometría

Transformaciones, puntos al infinito y dualidad.

## Formulario

**Coordenadas homogéneas**
$$(x,y) \;\longleftrightarrow\; (x:y:1), \qquad (x:y:z) \sim (\lambda x:\lambda y:\lambda z), \quad \lambda \neq 0$$
$$\text{Afín de } (x:y:z) = \left(\frac{x}{z}, \frac{y}{z}\right), \quad z \neq 0; \qquad \text{punto al infinito} \Leftrightarrow z = 0$$

**Rectas, incidencia y dualidad**
$$l = (a:b:c) \;\longleftrightarrow\; ax + by + cz = 0$$
$$\text{Recta por } P, Q: \; l = P \times Q; \qquad \text{intersección de } l, m: \; X = l \times m$$
$$\text{Colinealidad: } \det\begin{pmatrix} x_1 & y_1 & z_1 \\ x_2 & y_2 & z_2 \\ x_3 & y_3 & z_3 \end{pmatrix} = 0$$
$$\text{Punto al infinito de la recta } ax+by+cz=0: \; (b:-a:0)$$
$$\text{Dualidad: } (a:b:c) \;\longleftrightarrow\; ax+by+cz=0$$

**Homografías**
$$\begin{pmatrix} x' \\ y' \\ z' \end{pmatrix} = H \begin{pmatrix} x \\ y \\ z \end{pmatrix}, \qquad H \in GL(3,\mathbb{R}); \qquad l' = H^{-T} l$$

**Razón cruzada**
$$(A,B;C,D) = \frac{AC/BC}{AD/BD} = \frac{(c-a)(d-b)}{(c-b)(d-a)}$$

**Cónicas**
$$Ax^2 + Bxy + Cy^2 + Dxz + Eyz + Fz^2 = 0$$
$$\text{Corte con } z = 0: \quad \text{sin puntos reales} \to \text{elipse}, \quad \text{punto doble} \to \text{parábola}, \quad \text{dos puntos} \to \text{hipérbola}$$

## Ejercicios (50)

### Bloque A · Coordenadas homogéneas
1. Escribe el punto afín $(4,-3)$ en coordenadas homogéneas.
2. Escribe el punto afín $(-2,7)$ en coordenadas homogéneas.
3. ¿Qué punto afín representa $(6:9:3)$?
4. ¿Qué punto afín representa $(-4:2:2)$?
5. ¿Qué punto afín representa $(5:-10:-5)$?
6. Halla el punto al infinito de la dirección $(3,4)$.
7. Halla el punto al infinito de la recta $y = -2x + 5$.
8. Halla el punto al infinito de la recta $3x + 2y - 1 = 0$.
9. ¿Representan el mismo punto $(1:2:3)$ y $(2:4:6)$?
10. ¿Representan el mismo punto $(1:2:3)$ y $(1:2:6)$?

### Bloque B · Incidencia
11. Halla la recta que pasa por $(1:0:0)$ y $(0:1:0)$.
12. Halla la recta que pasa por $(1:1:1)$ y $(-1:1:1)$.
13. Halla la recta que pasa por $(1:2:1)$ y $(3:1:1)$.
14. Halla la recta que pasa por $(2:-1:1)$ y $(1:1:0)$.
15. Halla la intersección de $x - y + z = 0$ y $2x + y - z = 0$.
16. Halla la intersección de $x + 2y - z = 0$ y $x - z = 0$.
17. Halla la intersección de las rectas $y = 0$ y $z = 0$.
18. Halla la intersección de las rectas $x = 0$ y $y = 0$.
19. ¿Están alineados $(1:0:1)$, $(0:1:1)$ y $(1:1:1)$?
20. ¿Están alineados $(1:0:0)$, $(0:1:0)$ y $(1:1:0)$?

### Bloque C · Razón cruzada
21. Calcula $(A,B;C,D)$ para $A=0$, $B=1$, $C=2$, $D=3$.
22. Calcula $(A,B;C,D)$ para $A=0$, $B=1$, $C=3$, $D=5$.
23. Calcula $(A,B;C,D)$ para $A=1$, $B=2$, $C=4$, $D=8$.
24. Calcula $(A,B;C,D)$ para $A=0$, $B=2$, $C=1$, $D=4$.
25. Calcula $(A,B;C,D)$ para $A=-1$, $B=1$, $C=0$, $D=2$.
26. Calcula $(A,B;C,D)$ para $A=1$, $B=3$, $C=4$, $D=9$.
27. Calcula $(A,B;C,D)$ para $A=0$, $B=1$, $C=2$, $D=\infty$.
28. Calcula $(A,B;C,D)$ para $A=0$, $B=1$, $C=-1$, $D=2$.
29. Calcula $(A,B;C,D)$ para $A=0$, $B=1$, $C=\frac{1}{2}$, $D=3$.
30. Si una homografía envía cuatro puntos con razón cruzada $3$, ¿qué razón cruzada tienen sus imágenes?

### Bloque D · Matrices y homografías
31. Aplica $H=\begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ al punto $(1:1:1)$.
32. Aplica $H=\begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ al punto $(1:1:1)$.
33. Aplica $H=\begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix}$ al punto $(1:2:3)$.
34. Aplica $H=\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix}$ al punto $(2:3:1)$.
35. Aplica $H=\begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ al punto $(1:0:1)$.
36. Aplica $H=\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$ al punto $(1:1:1)$.
37. Aplica $H=\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ al punto $(3:-2:1)$.
38. Halla un punto fijo de $H=\begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ distinto de $(0:1:0)$.
39. Calcula la composición $H_2 H_1$ con $H_1=\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ y $H_2=\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$.
40. Halla la inversa de $H=\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$.

### Bloque E · Dualidad
41. Halla la recta dual del punto $(2:-3:1)$.
42. Halla la recta dual del punto $(1:0:0)$.
43. Halla el punto dual de la recta $x + 2y - z = 0$.
44. Escribe el enunciado dual de "dos rectas se cortan en un punto".
45. Escribe el enunciado dual de "tres puntos no colineales determinan un triángulo".
46. ¿Cuál es el teorema dual del teorema de Pascal?

### Bloque F · Cónicas
47. Clasifica la cónica $x^2 + y^2 - z^2 = 0$ según su corte con $z = 0$.
48. Clasifica la cónica $x^2 - y^2 = 0$ según su corte con $z = 0$.
49. Clasifica la cónica $y^2 - xz = 0$ según su corte con $z = 0$.
50. Escribe la circunferencia $x^2 + y^2 = 4$ en forma homogénea.

## Solucionario · resultados
<div class="results">
<div class="r"><b>01</b> $(4:-3:1)$</div>
<div class="r"><b>02</b> $(-2:7:1)$</div>
<div class="r"><b>03</b> $(2,3)$</div>
<div class="r"><b>04</b> $(-2,1)$</div>
<div class="r"><b>05</b> $(-1,2)$</div>
<div class="r"><b>06</b> $(3:4:0)$</div>
<div class="r"><b>07</b> $(1:-2:0)$</div>
<div class="r"><b>08</b> $(2:-3:0)$</div>
<div class="r"><b>09</b> Sí, $(2:4:6) = 2(1:2:3)$</div>
<div class="r"><b>10</b> No, $3 \neq 6$</div>
<div class="r"><b>11</b> $z = 0$</div>
<div class="r"><b>12</b> $y - z = 0$</div>
<div class="r"><b>13</b> $x + 2y - 5z = 0$</div>
<div class="r"><b>14</b> $-x + y + 3z = 0$</div>
<div class="r"><b>15</b> $(0:1:1)$</div>
<div class="r"><b>16</b> $(1:0:1)$</div>
<div class="r"><b>17</b> $(1:0:0)$</div>
<div class="r"><b>18</b> $(0:0:1)$</div>
<div class="r"><b>19</b> No, $\det = -1 \neq 0$</div>
<div class="r"><b>20</b> Sí, sobre $z = 0$</div>
<div class="r"><b>21</b> $\dfrac{4}{3}$</div>
<div class="r"><b>22</b> $\dfrac{6}{5}$</div>
<div class="r"><b>23</b> $\dfrac{9}{7}$</div>
<div class="r"><b>24</b> $-\dfrac{1}{2}$</div>
<div class="r"><b>25</b> $-\dfrac{1}{3}$</div>
<div class="r"><b>26</b> $\dfrac{9}{4}$</div>
<div class="r"><b>27</b> $2$</div>
<div class="r"><b>28</b> $\dfrac{1}{4}$</div>
<div class="r"><b>29</b> $-\dfrac{2}{3}$</div>
<div class="r"><b>30</b> $3$</div>
<div class="r"><b>31</b> $(3:1:1)$, afín $(3,1)$</div>
<div class="r"><b>32</b> $(1:2:1)$, afín $(1,2)$</div>
<div class="r"><b>33</b> $(1:2:3)$</div>
<div class="r"><b>34</b> $(2:3:6)$, afín $\left(\frac{1}{3},\frac{1}{2}\right)$</div>
<div class="r"><b>35</b> $(2:0:1)$, afín $(2,0)$</div>
<div class="r"><b>36</b> $(1:1:2)$, afín $\left(\frac{1}{2},\frac{1}{2}\right)$</div>
<div class="r"><b>37</b> $(-2:3:1)$, afín $(-2,3)$</div>
<div class="r"><b>38</b> $(1:0:0)$</div>
<div class="r"><b>39</b> $\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 2 \end{pmatrix}$</div>
<div class="r"><b>40</b> $\begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$</div>
<div class="r"><b>41</b> $2x - 3y + z = 0$</div>
<div class="r"><b>42</b> $x = 0$</div>
<div class="r"><b>43</b> $(1:2:-1)$</div>
<div class="r"><b>44</b> "Dos puntos determinan una recta"</div>
<div class="r"><b>45</b> "Tres rectas no concurrentes determinan un triángulo"</div>
<div class="r"><b>46</b> Teorema de Brianchon</div>
<div class="r"><b>47</b> Elipse</div>
<div class="r"><b>48</b> Hipérbola</div>
<div class="r"><b>49</b> Parábola</div>
<div class="r"><b>50</b> $x^2 + y^2 - 4z^2 = 0$</div>
</div>
