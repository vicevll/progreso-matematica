# Geometría analítica · 50 ejercicios
**Cuaderno de práctica · Funciones, trigonometría y geometría · 10°–11° / Univ 1**
*Recta, cónicas, lugares geométricos y coordenadas polares.*

## Formulario
### Distancia, punto medio y pendiente
- Distancia: $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$
- Punto medio: $M = \left(\dfrac{x_1 + x_2}{2}, \dfrac{y_1 + y_2}{2}\right)$
- División en razón $r$: $P = \left(\dfrac{x_1 + r x_2}{1 + r}, \dfrac{y_1 + r y_2}{1 + r}\right)$
- Pendiente: $m = \dfrac{y_2 - y_1}{x_2 - x_1}$
- Distancia de $(x_0, y_0)$ a la recta $Ax + By + C = 0$: $d = \dfrac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}$

### Ecuaciones de la recta
- Punto-pendiente: $y - y_1 = m(x - x_1)$
- Pendiente-ordenada: $y = mx + b$
- Forma general: $Ax + By + C = 0$
- Recta vertical: $x = a$; recta horizontal: $y = b$
- Intersección de dos rectas: resolver el sistema de sus ecuaciones

### Paralelismo y perpendicularidad
- Paralelas: $m_1 = m_2$
- Perpendiculares: $m_1 \cdot m_2 = -1$, es decir $m_2 = -\dfrac{1}{m_1}$
- Recta perpendicular a $Ax + By + C = 0$: pendiente $\dfrac{B}{A}$
- Mediatriz: recta perpendicular al segmento por su punto medio

### Circunferencia
- Forma canónica: $(x - h)^2 + (y - k)^2 = r^2$, centro $(h, k)$, radio $r$
- Forma general: $x^2 + y^2 + Dx + Ey + F = 0$
- Centro: $\left(-\dfrac{D}{2}, -\dfrac{E}{2}\right)$; radio: $r = \sqrt{\dfrac{D^2 + E^2}{4} - F}$
- Se reconocen completando cuadrados

### Parábola
- Abre vertical: $(x - h)^2 = 4p(y - k)$, vértice $(h, k)$, foco $(h, k + p)$
- Abre horizontal: $(y - k)^2 = 4p(x - h)$, vértice $(h, k)$, foco $(h + p, k)$
- Directriz: a distancia $|p|$ del vértice, del lado opuesto al foco
- Eje de simetría: recta por el foco y el vértice

### Elipse
- Forma canónica: $\dfrac{(x - h)^2}{a^2} + \dfrac{(y - k)^2}{b^2} = 1$ con $a > b > 0$
- Relación focal: $c^2 = a^2 - b^2$
- Focos: $(h \pm c, k)$ si el eje mayor es horizontal; $(h, k \pm c)$ si es vertical
- Excentricidad: $e = \dfrac{c}{a}$ con $0 \leq e < 1$
- Eje mayor $2a$, eje menor $2b$

### Hipérbola
- Abre horizontal: $\dfrac{(x - h)^2}{a^2} - \dfrac{(y - k)^2}{b^2} = 1$
- Abre vertical: $\dfrac{(y - k)^2}{a^2} - \dfrac{(x - h)^2}{b^2} = 1$
- Relación focal: $c^2 = a^2 + b^2$
- Asíntotas: $y - k = \pm\dfrac{b}{a}(x - h)$
- Excentricidad: $e = \dfrac{c}{a}$ con $e > 1$

### Coordenadas polares
- Paso a cartesianas: $x = r\cos\theta$, $y = r\,\text{sen}\,\theta$
- Paso a polares: $r = \sqrt{x^2 + y^2}$, $\tan\theta = \dfrac{y}{x}$
- Circunferencia centrada en el origen: $r = a$
- Cardioide: $r = a(1 + \cos\theta)$; rosa: $r = a\cos(n\theta)$; espiral: $r = a\theta$

## Ejercicios (50)
### Nivel 1 — Distancia y punto medio
1. Halla la distancia entre $(1, 2)$ y $(4, 6)$.
2. Halla la distancia entre $(-2, 3)$ y $(6, -1)$.
3. Halla la distancia entre $(0, 0)$ y $(-6, 8)$.
4. Halla el punto medio entre $(-3, 5)$ y $(7, -1)$.
5. Halla el punto medio entre $(1, -4)$ y $(-5, 2)$.
6. Halla la distancia entre $(2, -3)$ y $(-1, 1)$.
7. Halla el punto que divide el segmento de $(-1, 2)$ a $(5, 8)$ en razón $r = \frac{1}{2}$.
8. Halla la distancia entre $(5, 7)$ y $(5, -1)$.

### Nivel 2 — Pendiente y ecuaciones de rectas
9. Halla la pendiente de la recta que pasa por $(2, 1)$ y $(6, 9)$.
10. Halla la pendiente de la recta que pasa por $(-1, 3)$ y $(2, -3)$.
11. Halla la recta que pasa por $(3, -2)$ con pendiente $4$.
12. Halla la recta que pasa por $(1, 2)$ y $(3, 8)$.
13. Halla la recta que pasa por $(0, 1)$ con pendiente $-2$.
14. Halla la recta que pasa por $(2, -1)$ y $(2, 5)$.
15. Halla la recta que pasa por $(-2, 4)$ y $(3, 4)$.
16. Halla la intersección de $y = 2x + 1$ con $y = -x + 7$.
17. Escribe en forma general la recta que pasa por $(1, 1)$ y $(3, 5)$.
18. Halla la distancia del origen a la recta $3x + 4y - 10 = 0$.

### Nivel 3 — Paralelismo y perpendicularidad
19. Halla la recta paralela a $y = 2x + 3$ que pasa por $(1, 1)$.
20. Halla la recta paralela a $y = -3x + 4$ que pasa por $(2, -1)$.
21. Halla la recta perpendicular a $y = -\frac{1}{3}x + 2$ que pasa por $(1, 1)$.
22. Halla la recta perpendicular a $y = 2x + 1$ que pasa por $(4, 1)$.
23. Determina si $y = 3x + 1$ e $y = 3x - 5$ son paralelas.
24. Determina si $y = 4x - 2$ e $y = -\frac{1}{4}x + 3$ son perpendiculares.
25. Halla la mediatriz del segmento de $(1, 2)$ a $(5, 10)$.
26. Halla la recta paralela a la que pasa por $(0, 0)$ y $(3, 6)$ que pasa por $(1, 1)$.

### Nivel 4 — Circunferencia
27. Determina centro y radio de $x^2 + y^2 + 8x - 2y + 8 = 0$.
28. Determina centro y radio de $x^2 + y^2 - 6x + 4y - 12 = 0$.
29. Determina centro y radio de $x^2 + y^2 - 4x + 6y - 12 = 0$.
30. Determina centro y radio de $x^2 + y^2 + 2x + 2y - 2 = 0$.
31. Determina centro y radio de $x^2 + y^2 - 10x = 0$.
32. Escribe la circunferencia con centro $(2, 3)$ y radio $4$.
33. Escribe la circunferencia con centro $(-1, 2)$ que pasa por $(2, 6)$.
34. Determina centro y radio de $x^2 + y^2 + 6x - 8y = 0$.

### Nivel 5 — Parábola
35. Halla vértice, foco y directriz de $y = 2x^2$.
36. Halla vértice, foco y directriz de $x^2 = 8y$.
37. Halla vértice, foco y directriz de $y = x^2 - 4x + 3$.
38. Halla vértice, foco y directriz de $y^2 = 12x$.
39. Halla vértice, foco y directriz de $(x - 1)^2 = 8(y + 2)$.
40. Halla vértice y foco de $y^2 - 4y - 8x + 4 = 0$.

### Nivel 6 — Elipse
41. Para $\frac{x^2}{25} + \frac{y^2}{9} = 1$, halla focos y excentricidad.
42. Para $\frac{x^2}{36} + \frac{y^2}{16} = 1$, halla focos y excentricidad.
43. Para $\frac{x^2}{169} + \frac{y^2}{25} = 1$, halla focos y excentricidad.
44. Para $\frac{x^2}{9} + \frac{y^2}{25} = 1$, halla focos y excentricidad.
45. Escribe la elipse con focos $(\pm 3, 0)$ y $a = 5$.

### Nivel 7 — Hipérbola
46. Para $\frac{x^2}{16} - \frac{y^2}{9} = 1$, halla focos y asíntotas.
47. Para $\frac{y^2}{9} - \frac{x^2}{16} = 1$, halla focos y asíntotas.
48. Para $\frac{x^2}{4} - \frac{y^2}{12} = 1$, halla focos y asíntotas.

### Nivel 8 — Coordenadas polares
49. Convierte $(3, 3)$ a polares y $(4, \pi/6)$ a cartesianas.
50. Convierte $(1, \sqrt{3})$ a polares y $(2, \pi/3)$ a cartesianas.

## Solucionario · resultados
<div class="results">
<div class="r"><b>01</b> $5$</div>
<div class="r"><b>02</b> $4\sqrt{5}$</div>
<div class="r"><b>03</b> $10$</div>
<div class="r"><b>04</b> $(2, 2)$</div>
<div class="r"><b>05</b> $(-2, -1)$</div>
<div class="r"><b>06</b> $5$</div>
<div class="r"><b>07</b> $(1, 4)$</div>
<div class="r"><b>08</b> $8$</div>
<div class="r"><b>09</b> $m = 2$</div>
<div class="r"><b>10</b> $m = -2$</div>
<div class="r"><b>11</b> $y = 4x - 14$</div>
<div class="r"><b>12</b> $y = 3x - 1$</div>
<div class="r"><b>13</b> $y = -2x + 1$</div>
<div class="r"><b>14</b> $x = 2$</div>
<div class="r"><b>15</b> $y = 4$</div>
<div class="r"><b>16</b> $(2, 5)$</div>
<div class="r"><b>17</b> $2x - y - 1 = 0$</div>
<div class="r"><b>18</b> $2$</div>
<div class="r"><b>19</b> $y = 2x - 1$</div>
<div class="r"><b>20</b> $y = -3x + 5$</div>
<div class="r"><b>21</b> $y = 3x - 2$</div>
<div class="r"><b>22</b> $y = -\frac{1}{2}x + 3$</div>
<div class="r"><b>23</b> Sí, paralelas</div>
<div class="r"><b>24</b> Sí, perpendiculares</div>
<div class="r"><b>25</b> $y = -\frac{1}{2}x + \frac{15}{2}$</div>
<div class="r"><b>26</b> $y = 2x - 1$</div>
<div class="r"><b>27</b> Centro $(-4, 1)$, radio $3$</div>
<div class="r"><b>28</b> Centro $(3, -2)$, radio $5$</div>
<div class="r"><b>29</b> Centro $(2, -3)$, radio $5$</div>
<div class="r"><b>30</b> Centro $(-1, -1)$, radio $2$</div>
<div class="r"><b>31</b> Centro $(5, 0)$, radio $5$</div>
<div class="r"><b>32</b> $(x - 2)^2 + (y - 3)^2 = 16$</div>
<div class="r"><b>33</b> $(x + 1)^2 + (y - 2)^2 = 25$</div>
<div class="r"><b>34</b> Centro $(-3, 4)$, radio $5$</div>
<div class="r"><b>35</b> Vértice $(0, 0)$, foco $(0, \frac{1}{8})$, directriz $y = -\frac{1}{8}$</div>
<div class="r"><b>36</b> Vértice $(0, 0)$, foco $(0, 2)$, directriz $y = -2$</div>
<div class="r"><b>37</b> Vértice $(2, -1)$, foco $(2, -\frac{3}{4})$, directriz $y = -\frac{5}{4}$</div>
<div class="r"><b>38</b> Vértice $(0, 0)$, foco $(3, 0)$, directriz $x = -3$</div>
<div class="r"><b>39</b> Vértice $(1, -2)$, foco $(1, 0)$, directriz $y = -4$</div>
<div class="r"><b>40</b> Vértice $(0, 2)$, foco $(2, 2)$</div>
<div class="r"><b>41</b> Focos $(\pm 4, 0)$, $e = 0.8$</div>
<div class="r"><b>42</b> Focos $(\pm \sqrt{20}, 0)$, $e = \frac{\sqrt{20}}{6} \approx 0.745$</div>
<div class="r"><b>43</b> Focos $(\pm 12, 0)$, $e = \frac{12}{13} \approx 0.923$</div>
<div class="r"><b>44</b> Focos $(0, \pm 4)$, $e = 0.8$</div>
<div class="r"><b>45</b> $\frac{x^2}{25} + \frac{y^2}{16} = 1$</div>
<div class="r"><b>46</b> Focos $(\pm 5, 0)$, asíntotas $y = \pm \frac{3}{4}x$</div>
<div class="r"><b>47</b> Focos $(0, \pm 5)$, asíntotas $y = \pm \frac{3}{4}x$</div>
<div class="r"><b>48</b> Focos $(\pm 4, 0)$, asíntotas $y = \pm \sqrt{3}\,x$</div>
<div class="r"><b>49</b> $(3\sqrt{2}, \frac{\pi}{4})$ y $(2\sqrt{3}, 2)$</div>
<div class="r"><b>50</b> $(2, \frac{\pi}{3})$ y $(1, \sqrt{3})$</div>
</div>
