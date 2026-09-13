# Números reales y complejos · 50 ejercicios

**Cuaderno de práctica · Álgebra escolar y fundamentos · 10°–11°**
*Propiedades, valor absoluto, forma polar de los números complejos.*

---

## Formulario

### Clasificación de los números

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$$

1. $\mathbb{N}$: naturales, para contar.
2. $\mathbb{Z}$: enteros, para restar.
3. $\mathbb{Q}$: racionales, para dividir; $\mathbb{Q} = \left\{\frac{a}{b} : a, b \in \mathbb{Z},\ b \neq 0\right\}$.
4. $\mathbb{R}$: reales, para medir y tomar límites.
5. $\mathbb{C}$: complejos; $\mathbb{C} = \{a + bi : a, b \in \mathbb{R},\ i^{2} = -1\}$.

### Axiomas de cuerpo y orden

$$a + b = b + a, \qquad ab = ba, \qquad a(b + c) = ab + ac$$

$$a + 0 = a, \qquad a \cdot 1 = a, \qquad a + (-a) = 0, \qquad a \cdot \frac{1}{a} = 1 \ (a \neq 0)$$

$$a < b \;\Rightarrow\; a + c < b + c, \qquad c > 0 \;\Rightarrow\; ac < bc$$

Tricotomía: exactamente una de $a < b$, $a = b$, $a > b$ es verdadera. Axioma del supremo: todo conjunto no vacío y acotado superiormente tiene una menor cota superior.

### Valor absoluto e intervalos

$$|x| = \begin{cases} x & \text{si } x \geq 0 \\ -x & \text{si } x < 0 \end{cases}$$

$$|ab| = |a|\,|b|, \qquad \left|\frac{a}{b}\right| = \frac{|a|}{|b|}, \qquad |a + b| \leq |a| + |b|$$

$$|x - a| < r \;\Longleftrightarrow\; a - r < x < a + r$$

| Notación | Significado |
|---|---|
| $[a, b]$ | $a \leq x \leq b$ |
| $(a, b)$ | $a < x < b$ |
| $[a, b)$ | $a \leq x < b$ |
| $(a, b]$ | $a < x \leq b$ |
| $[a, \infty)$ | $x \geq a$ |
| $(-\infty, b)$ | $x < b$ |

### Operaciones con complejos

| Operación | Fórmula |
|---|---|
| Suma | $(a + bi) + (c + di) = (a + c) + (b + d)i$ |
| Resta | $(a + bi) - (c + di) = (a - c) + (b - d)i$ |
| Producto | $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$ |
| Conjugado | $\bar{z} = a - bi$ |
| División | $\dfrac{a + bi}{c + di} = \dfrac{(a + bi)(c - di)}{c^{2} + d^{2}}$ |

Potencias de la unidad imaginaria: $i^{2} = -1$, $i^{3} = -i$, $i^{4} = 1$, y el ciclo se repite cada cuatro.

### Módulo, conjugado y argumento

$$|z| = \sqrt{a^{2} + b^{2}}, \qquad \bar{z} = a - bi, \qquad z\bar{z} = a^{2} + b^{2}$$

$$\tan\theta = \frac{b}{a}, \qquad \theta \in [0, 2\pi) \text{ ajustando el cuadrante}$$

### Forma polar

$$z = r(\cos\theta + i\,\text{sen}\,\theta) = r\,\text{cis}\,\theta, \qquad r = |z|, \qquad a = r\cos\theta, \qquad b = r\,\text{sen}\,\theta$$

$$z_{1} z_{2} = r_{1} r_{2}\,\text{cis}(\theta_{1} + \theta_{2}), \qquad \frac{z_{1}}{z_{2}} = \frac{r_{1}}{r_{2}}\,\text{cis}(\theta_{1} - \theta_{2})$$

### Potencias: fórmula de De Moivre

$$z^{n} = r^{n}\,\text{cis}(n\theta)$$

### Raíces n-ésimas

$$z_{k} = r^{1/n}\,\text{cis}\left(\frac{\theta + 2\pi k}{n}\right), \qquad k = 0, 1, \ldots, n-1$$

### Fórmula de Euler

$$e^{i\theta} = \cos\theta + i\,\text{sen}\,\theta, \qquad z = r e^{i\theta}$$

$$e^{i\pi} + 1 = 0$$

---

## Ejercicios (50)

### Nivel 1 — Conjuntos numéricos y reales

1. Clasifica el número $\sqrt{5}$.
2. Clasifica el número $-7$.
3. Clasifica el número $\frac{1}{3}$.
4. Clasifica el número $\sqrt{16}$.
5. ¿Es $\mathbb{Q}$ cerrado bajo la raíz cuadrada? Justifica con un contraejemplo.
6. ¿A qué conjunto numérico mínimo pertenece $\pi$?
7. Halla el supremo de $A = \{x \in \mathbb{R} : x < 3\}$.
8. Encuentra un racional entre $\frac{3}{5}$ y $\frac{4}{5}$.

### Nivel 2 — Valor absoluto e intervalos

9. Calcula $|-8|$.
10. Calcula $|3 - 11|$.
11. Resuelve: $|2x - 1| \leq 5$.
12. Resuelve: $|x + 4| < 2$.
13. Resuelve: $|x - 3| \geq 5$.
14. Expresa el intervalo $[-1, 4]$ mediante un valor absoluto.
15. Resuelve: $|x| > 7$.
16. Halla la distancia entre $-3$ y $5$.

### Nivel 3 — Operaciones con complejos

17. Calcula $(2 + 3i) + (4 - 5i)$.
18. Calcula $(2 + 3i) - (4 - 5i)$.
19. Calcula $(2 + i)(3 - i)$.
20. Calcula $(1 + i)(1 - i)$.
21. Calcula $(3 - 2i)^{2}$.
22. Calcula $\dfrac{1 + i}{1 - i}$.
23. Calcula $\dfrac{3 + i}{2 - i}$.
24. Calcula $i^{100}$.

### Nivel 4 — Módulo, conjugado y argumento

25. Halla $|3 + 4i|$.
26. Halla $|-5 + 12i|$.
27. Halla el conjugado de $2 - 7i$.
28. Para $z = 1 + i$, calcula $z\bar{z}$.
29. Halla el argumento de $z = 1 + i$.
30. Halla el argumento de $z = -\sqrt{3} + i$.
31. Halla módulo y argumento de $z = -2$.
32. Halla módulo y argumento de $z = 3i$.

### Nivel 5 — Forma polar

33. Expresa $1 + i$ en forma polar.
34. Expresa $\sqrt{3} - i$ en forma polar.
35. Expresa $-1 + i$ en forma polar.
36. Multiplica $z_{1} = 2\,\text{cis}\,40^\circ$ y $z_{2} = 5\,\text{cis}\,20^\circ$.
37. Divide $\dfrac{12\,\text{cis}\,80^\circ}{3\,\text{cis}\,20^\circ}$.
38. Pasa a la forma $a + bi$: $4\,\text{cis}\,\frac{\pi}{3}$.

### Nivel 6 — Potencias y fórmula de De Moivre

39. Calcula $(1 + i)^{4}$.
40. Calcula $(\sqrt{3} + i)^{6}$.
41. Calcula $(1 - i)^{6}$.
42. Calcula $(2\,\text{cis}\,15^\circ)^{4}$.
43. Calcula $(1 + i)^{8}$.
44. Calcula $(-1 + i)^{4}$.

### Nivel 7 — Raíces n-ésimas

45. Halla las raíces cuadradas de $i$.
46. Halla las raíces cúbicas de $8$.
47. Halla las raíces cuartas de $-16$.

### Nivel 8 — Fórmula de Euler

48. Expresa $e^{i\pi/2}$ en la forma $a + bi$.
49. Expresa $e^{i\pi/4}$ en la forma $a + bi$.
50. Verifica con la fórmula de Euler que $e^{i\pi} + 1 = 0$.

---

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> Irracional</div>
<div class="r"><b>02</b> Entero</div>
<div class="r"><b>03</b> Racional</div>
<div class="r"><b>04</b> Natural</div>
<div class="r"><b>05</b> No; por ejemplo $\sqrt{2} \notin \mathbb{Q}$</div>
<div class="r"><b>06</b> $\mathbb{R}$ (irracional)</div>
<div class="r"><b>07</b> $\sup A = 3$</div>
<div class="r"><b>08</b> Por ejemplo $\frac{7}{10}$</div>
<div class="r"><b>09</b> $8$</div>
<div class="r"><b>10</b> $8$</div>
<div class="r"><b>11</b> $[-2, 3]$</div>
<div class="r"><b>12</b> $(-6, -2)$</div>
<div class="r"><b>13</b> $(-\infty, -2] \cup [8, \infty)$</div>
<div class="r"><b>14</b> $\left|x - \frac{3}{2}\right| \leq \frac{5}{2}$</div>
<div class="r"><b>15</b> $(-\infty, -7) \cup (7, \infty)$</div>
<div class="r"><b>16</b> $8$</div>
<div class="r"><b>17</b> $6 - 2i$</div>
<div class="r"><b>18</b> $-2 + 8i$</div>
<div class="r"><b>19</b> $7 + i$</div>
<div class="r"><b>20</b> $2$</div>
<div class="r"><b>21</b> $5 - 12i$</div>
<div class="r"><b>22</b> $i$</div>
<div class="r"><b>23</b> $1 + i$</div>
<div class="r"><b>24</b> $1$</div>
<div class="r"><b>25</b> $5$</div>
<div class="r"><b>26</b> $13$</div>
<div class="r"><b>27</b> $2 + 7i$</div>
<div class="r"><b>28</b> $2$</div>
<div class="r"><b>29</b> $\frac{\pi}{4}$</div>
<div class="r"><b>30</b> $\frac{5\pi}{6}$</div>
<div class="r"><b>31</b> $r = 2$, $\theta = \pi$</div>
<div class="r"><b>32</b> $r = 3$, $\theta = \frac{\pi}{2}$</div>
<div class="r"><b>33</b> $\sqrt{2}\,\text{cis}\,\frac{\pi}{4}$</div>
<div class="r"><b>34</b> $2\,\text{cis}\left(-\frac{\pi}{6}\right)$</div>
<div class="r"><b>35</b> $\sqrt{2}\,\text{cis}\,\frac{3\pi}{4}$</div>
<div class="r"><b>36</b> $10\,\text{cis}\,60^\circ$</div>
<div class="r"><b>37</b> $4\,\text{cis}\,60^\circ$</div>
<div class="r"><b>38</b> $2 + 2\sqrt{3}i$</div>
<div class="r"><b>39</b> $-4$</div>
<div class="r"><b>40</b> $-64$</div>
<div class="r"><b>41</b> $8i$</div>
<div class="r"><b>42</b> $8 + 8\sqrt{3}i$</div>
<div class="r"><b>43</b> $16$</div>
<div class="r"><b>44</b> $-4$</div>
<div class="r"><b>45</b> $\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i$ y $-\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i$</div>
<div class="r"><b>46</b> $2$, $-1 + \sqrt{3}i$, $-1 - \sqrt{3}i$</div>
<div class="r"><b>47</b> $\sqrt{2} + \sqrt{2}i$, $-\sqrt{2} + \sqrt{2}i$, $-\sqrt{2} - \sqrt{2}i$, $\sqrt{2} - \sqrt{2}i$</div>
<div class="r"><b>48</b> $i$</div>
<div class="r"><b>49</b> $\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i$</div>
<div class="r"><b>50</b> $e^{i\pi} = -1$, luego $e^{i\pi} + 1 = 0$</div>
</div>
