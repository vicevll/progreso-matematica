# Cálculo de variaciones · 50 ejercicios

**Cuaderno de práctica · Cálculo · Universidad 4–5**
*Euler-Lagrange, integrales primeras y aplicaciones clásicas.*

---

## Formulario

### Funcional

$$J[y] = \int_a^b F\big(x, y(x), y'(x)\big)\,dx$$

### Ecuación de Euler-Lagrange

$$\frac{\partial F}{\partial y} - \frac{d}{dx}\left(\frac{\partial F}{\partial y'}\right) = 0$$

En forma desarrollada:

$$F_y - F_{xy'} - F_{yy'}\,y' - F_{y'y'}\,y'' = 0$$

### Integrales primeras

| Situación | Cantidad conservada |
|---|---|
| $F$ no depende de $x$ | $F - y'\,\dfrac{\partial F}{\partial y'} = C$ |
| $F$ no depende de $y$ | $\dfrac{\partial F}{\partial y'} = C$ |
| $F$ no depende de $y'$ | $\dfrac{\partial F}{\partial y} = 0$ |

### Condiciones de frontera

- **Fijas:** $y(a) = y_a$, $y(b) = y_b$.
- **Naturales:** $\left.\dfrac{\partial F}{\partial y'}\right|_{x=a} = 0$ o $\left.\dfrac{\partial F}{\partial y'}\right|_{x=b} = 0$.
- **Isoperimétricas:** aplicar Euler-Lagrange a $F + \lambda G$ con $\displaystyle\int_a^b G\,dx = L$.

### Aplicaciones clásicas

- **Braquistócrona:** $F = \sqrt{\dfrac{1 + (y')^2}{y}}$, solución cicloide.
- **Geodésica:** $F = \sqrt{1 + (y')^2}$, solución recta (en el plano).
- **Superficie de revolución:** $F = y\sqrt{1 + (y')^2}$, solución catenoide.
- **Acción (Hamilton):** $F = T - V$.
- **Tiempo de Fermat:** $F = \dfrac{\sqrt{1 + (y')^2}}{v(y)}$.

### Segunda variación y Legendre

$$\delta^2 J = \int_a^b \left(F_{yy}\,\eta^2 + 2F_{yy'}\,\eta\eta' + F_{y'y'}\,(\eta')^2\right)dx$$

- Mínimo si $F_{y'y'} \geq 0$; máximo si $F_{y'y'} \leq 0$ (condición necesaria de Legendre).

### Euler-Poisson (orden superior)

$$\frac{\partial F}{\partial y} - \frac{d}{dx}\left(\frac{\partial F}{\partial y'}\right) + \frac{d^2}{dx^2}\left(\frac{\partial F}{\partial y''}\right) = 0$$

---

## Ejercicios (50)

### Nivel 1 — Euler-Lagrange directo

1. Extremiza $J[y] = \displaystyle\int_0^2 (y')^2\,dx$ con $y(0) = 0$, $y(2) = 4$.
2. Halla la ecuación de Euler-Lagrange de $F = y^2 + (y')^2$.
3. Halla la ecuación de Euler-Lagrange de $F = (y')^2 + 2xy$.
4. Halla la ecuación de Euler-Lagrange de $F = (y')^3$.
5. Extremiza $J[y] = \displaystyle\int_0^1 \big[(y')^2 + y\big]\,dx$ con $y(0) = 0$, $y(1) = 2$.
6. Halla la EDO que resulta de extremizar $F = (y')^2 + \operatorname{sen}y$.
7. Extremiza $J[y] = \displaystyle\int_0^{\pi} (y')^2\,dx$ con $y(0) = 0$, $y(\pi) = 1$.
8. Halla la EDO de Euler-Lagrange de $F = \tfrac12 m(y')^2 - V(y)$.
9. Extremiza $J[y] = \displaystyle\int_0^1 \big[(y')^2 - y\big]\,dx$ con $y(0) = 0$, $y(1) = 0$.
10. Halla la ecuación de Euler-Lagrange de $F = (y')^2 + y\,y'$.

### Nivel 2 — Integrales primeras y Beltrami

11. Aplica Beltrami a $F = (y')^2$.
12. Aplica Beltrami a $F = y^2 + (y')^2$.
13. Aplica Beltrami a $F = y\sqrt{1 + (y')^2}$.
14. Aplica la integral primera de $F$ sin $y$ a $F = x\sqrt{1 + (y')^2}$.
15. Aplica la integral primera de $F$ sin $y$ a $F = \dfrac{(y')^2}{x}$.
16. Aplica Beltrami a $F = \dfrac{\sqrt{1 + (y')^2}}{y}$ (braquistócrona).
17. Aplica Beltrami a $F = \sqrt{1 + (y')^2}$.
18. Aplica Beltrami a $F = \dfrac{(y')^2}{y}$.
19. Aplica la integral primera de $F$ sin $y$ a $F = (y')^2 + x\,y'$.
20. Aplica Beltrami a $F = y^2(y')^2$.

### Nivel 3 — Condiciones de frontera

21. Escribe la condición natural en $x = 1$ para $J[y] = \displaystyle\int_0^1 (y')^2\,dx$ con $y(0) = 0$ y $y(1)$ libre.
22. Escribe la condición natural para $F = \sqrt{1 + (y')^2}$ en un extremo libre.
23. Extremiza $J[y] = \displaystyle\int_0^1 \big[(y')^2 + y\,y'\big]\,dx$ con $y(0) = 0$ y $y(1)$ libre.
24. Extremiza $J[y] = \displaystyle\int_0^1 \big[(y')^2 + x\,y\big]\,dx$ con $y(0) = 0$ y $y(1)$ libre.
25. Extremiza $J[y] = \displaystyle\int_0^1 (y')^2\,dx$ con $y(0) = 1$ y $y(1)$ libre.
26. Escribe el sistema de Euler-Lagrange para $J = \displaystyle\int F\,dx$ con la restricción $K = \displaystyle\int G\,dx = L$.
27. Extremiza $J[y] = \displaystyle\int_0^1 \big[(y')^2 + y^2\big]\,dx$ con $y(0) = 0$ y $y(1)$ libre.
28. Enuncia la condición natural general en $x = b$ cuando $y(b)$ es libre.
29. ¿Qué curva resuelve el problema isoperimétrico de máxima área con longitud fija?
30. Distingue una condición de frontera fija de una natural.

### Nivel 4 — Aplicaciones clásicas

31. Escribe el funcional de la braquistócrona.
32. ¿Cuál es la curva solución de la braquistócrona?
33. Escribe el funcional de la longitud de arco.
34. ¿Cuáles son las geodésicas del plano?
35. ¿Cuáles son las geodésicas de la esfera?
36. Escribe el funcional de la superficie mínima de revolución y su solución.
37. Escribe la acción del principio de Hamilton.
38. Deduce la EDO de la partícula libre a partir del principio de Hamilton.
39. ¿Cuál es la forma de la catenaria (cuerda colgante)?
40. Escribe el funcional del tiempo de Fermat en un medio no homogéneo.

### Nivel 5 — Segunda variación y problemas mixtos

41. Escribe la segunda variación de $J = \displaystyle\int_a^b F\,dx$.
42. Enuncia la condición de Legendre para un mínimo.
43. Enuncia la condición de Legendre para un máximo.
44. Clasifica el extremo de $J[y] = \displaystyle\int_0^1 (y')^2\,dx$ con extremos fijos.
45. ¿Qué ocurre con la ecuación de Euler-Lagrange si $F$ es una derivada total $F = \phi_x + \phi_y\,y'$?
46. Escribe la ecuación de Euler-Poisson cuando $F$ depende de $y''$.
47. Extremiza $J[y] = \displaystyle\int_0^1 (y'')^2\,dx$ con $y(0) = y'(0) = 0$, $y(1) = 1$, $y'(1) = 0$.
48. Escribe la integral primera de Beltrami cuando $F$ no depende de $x$.
49. Aplica Beltrami a $F = \tfrac12 m(y')^2 - V(y)$.
50. Extremiza $J[y] = \displaystyle\int_0^1 \big[(y')^2 + y\big]\,dx$ con $y(0) = 0$, $y(1) = 1$.

---

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $y = 2x$</div>
<div class="r"><b>02</b> $y'' = y$</div>
<div class="r"><b>03</b> $y'' = x$</div>
<div class="r"><b>04</b> $y'\,y'' = 0$ (recta si $y' \neq 0$)</div>
<div class="r"><b>05</b> $y = \dfrac{x^2 + 7x}{4}$</div>
<div class="r"><b>06</b> $y'' = \dfrac{1}{2}\cos y$</div>
<div class="r"><b>07</b> $y = \dfrac{x}{\pi}$</div>
<div class="r"><b>08</b> $m\,y'' = -V'(y)$</div>
<div class="r"><b>09</b> $y = \dfrac{x - x^2}{4}$</div>
<div class="r"><b>10</b> $y'' = 0$ (recta)</div>
<div class="r"><b>11</b> $(y')^2 = C$, luego $y = ax + b$</div>
<div class="r"><b>12</b> $(y')^2 - y^2 = C$</div>
<div class="r"><b>13</b> $y = C\sqrt{1 + (y')^2}$ (catenaria)</div>
<div class="r"><b>14</b> $\dfrac{x\,y'}{\sqrt{1 + (y')^2}} = C$</div>
<div class="r"><b>15</b> $y' = Cx$</div>
<div class="r"><b>16</b> $y\big(1 + (y')^2\big) = 2R$</div>
<div class="r"><b>17</b> $y' = C$ (recta)</div>
<div class="r"><b>18</b> $(y')^2 = C\,y$</div>
<div class="r"><b>19</b> $2y' + x = C$</div>
<div class="r"><b>20</b> $y\,y' = C$</div>
<div class="r"><b>21</b> $y'(1) = 0$</div>
<div class="r"><b>22</b> $y' = 0$ en el extremo libre</div>
<div class="r"><b>23</b> $y = 0$</div>
<div class="r"><b>24</b> $y = \dfrac{x^3}{12} - \dfrac{x}{4}$</div>
<div class="r"><b>25</b> $y = 1$</div>
<div class="r"><b>26</b> $\dfrac{\partial(F + \lambda G)}{\partial y} - \dfrac{d}{dx}\dfrac{\partial(F + \lambda G)}{\partial y'} = 0$</div>
<div class="r"><b>27</b> $y = 0$</div>
<div class="r"><b>28</b> $\left.\dfrac{\partial F}{\partial y'}\right|_{x=b} = 0$</div>
<div class="r"><b>29</b> La circunferencia (curvatura constante)</div>
<div class="r"><b>30</b> Fija: $y$ dado en el borde; natural: $\partial F/\partial y' = 0$ en el borde libre</div>
<div class="r"><b>31</b> $J = \displaystyle\int \sqrt{\dfrac{1 + (y')^2}{y}}\,dx$</div>
<div class="r"><b>32</b> La cicloide</div>
<div class="r"><b>33</b> $J = \displaystyle\int \sqrt{1 + (y')^2}\,dx$</div>
<div class="r"><b>34</b> Las rectas</div>
<div class="r"><b>35</b> Los círculos máximos</div>
<div class="r"><b>36</b> $S = 2\pi\displaystyle\int y\sqrt{1 + (y')^2}\,dx$; catenoide</div>
<div class="r"><b>37</b> $S = \displaystyle\int (T - V)\,dt$</div>
<div class="r"><b>38</b> $m\,\ddot{x} = 0$</div>
<div class="r"><b>39</b> $y = a\cosh\dfrac{x - b}{a}$</div>
<div class="r"><b>40</b> $T = \displaystyle\int \dfrac{\sqrt{1 + (y')^2}}{v(y)}\,dx$</div>
<div class="r"><b>41</b> $\delta^2 J = \displaystyle\int_a^b \left(F_{yy}\,\eta^2 + 2F_{yy'}\,\eta\eta' + F_{y'y'}\,(\eta')^2\right)dx$</div>
<div class="r"><b>42</b> $F_{y'y'} \geq 0$</div>
<div class="r"><b>43</b> $F_{y'y'} \leq 0$</div>
<div class="r"><b>44</b> Mínimo ($F_{y'y'} = 2 > 0$)</div>
<div class="r"><b>45</b> Se satisface idénticamente ($0 = 0$): todo extremo es admisible</div>
<div class="r"><b>46</b> $\dfrac{\partial F}{\partial y} - \dfrac{d}{dx}\dfrac{\partial F}{\partial y'} + \dfrac{d^2}{dx^2}\dfrac{\partial F}{\partial y''} = 0$</div>
<div class="r"><b>47</b> $y = -2x^3 + 3x^2$</div>
<div class="r"><b>48</b> $F - y'\,\dfrac{\partial F}{\partial y'} = C$</div>
<div class="r"><b>49</b> $\tfrac12 m(y')^2 + V(y) = C$</div>
<div class="r"><b>50</b> $y = \dfrac{x^2 + 3x}{4}$</div>
</div>
