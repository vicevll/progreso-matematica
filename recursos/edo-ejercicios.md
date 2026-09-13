# EDO · Formulario y batería de ejercicios

## Formulario

### Clasificación y solución

- Orden: el de la derivada de mayor orden.
- Lineal: $y$ y sus derivadas aparecen a la primera potencia, sin productos entre ellas.
- Solución general: familia con constantes arbitrarias; particular: con constantes fijadas.

### Variables separables

$$y' = f(x)g(y) \quad \Rightarrow \quad \int \frac{dy}{g(y)} = \int f(x)\,dx$$

### Lineal de primer orden

$$y' + P(x)y = Q(x), \qquad \mu = e^{\int P\,dx}, \qquad y = \frac{1}{\mu}\int \mu Q\,dx$$

### Exactas

$$M\,dx + N\,dy = 0 \text{ es exacta si } \frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

La solución es $f(x,y) = C$ con $f_x = M$ y $f_y = N$.

### Segundo orden homogéneo

$$ay'' + by' + cy = 0, \qquad ar^2 + br + c = 0$$

1. Reales distintas $r_1 \neq r_2$: $y = C_1e^{r_1x} + C_2e^{r_2x}$.
2. Raíz doble $r$: $y = (C_1 + C_2x)e^{rx}$.
3. Complejas $\alpha \pm \beta i$: $y = e^{\alpha x}\left(C_1\cos\beta x + C_2\,\text{sen}\,\beta x\right)$.

### Segundo orden no homogéneo

$$ay'' + by' + cy = g(x) \quad \Rightarrow \quad y = y_h + y_p$$

$y_h$ es la solución de la homogénea; $y_p$ se propone con la forma de $g(x)$ (coeficientes indeterminados) o por variación de parámetros.

### Transformada de Laplace

$$\mathcal{L}\{y'\} = sY(s) - y(0), \qquad \mathcal{L}\{y''\} = s^2Y(s) - sy(0) - y'(0)$$

$$\mathcal{L}\{1\} = \frac{1}{s}, \quad \mathcal{L}\{t\} = \frac{1}{s^2}, \quad \mathcal{L}\{e^{at}\} = \frac{1}{s-a}, \quad \mathcal{L}\{\text{sen}\,at\} = \frac{a}{s^2+a^2}, \quad \mathcal{L}\{\cos at\} = \frac{s}{s^2+a^2}$$

$$\mathcal{L}\{e^{at}f(t)\} = F(s-a), \qquad \mathcal{L}\{y'\} \;\text{permite resolver EDO con datos iniciales.}$$

## Ejercicios (50)

1. $\dfrac{dy}{dx} = 2x$.
2. $\dfrac{dy}{dx} = \dfrac{x}{y}$.
3. $\dfrac{dy}{dx} = y$.
4. $\dfrac{dy}{dx} = xy$.
5. $\dfrac{dy}{dx} = \dfrac{1}{y}$.
6. $\dfrac{dy}{dx} = \dfrac{y}{x}$.
7. $\dfrac{dy}{dx} = x^2y$.
8. $\dfrac{dy}{dx} = \dfrac{x^2}{y}$.
9. $\dfrac{dy}{dx} = y\cos x$.
10. $\dfrac{dy}{dx} = y^2$.
11. $y' + y = 1$.
12. $y' + 2y = e^{-x}$.
13. $y' - y = e^{x}$.
14. $y' + y = e^{x}$.
15. $y' + 2y = 4$.
16. $y' + y = x$.
17. $y' + 3y = e^{2x}$.
18. $y' + \dfrac{y}{x} = 1$.
19. $y' + 2xy = x$.
20. $y' + \dfrac{y}{x} = x^2$.
21. $(2xy)\,dx + (x^2)\,dy = 0$.
22. $(2x + y)\,dx + (x + 2y)\,dy = 0$.
23. $(y\cos x)\,dx + (\text{sen}\,x)\,dy = 0$.
24. $(3x^2 + y)\,dx + (x + 3y^2)\,dy = 0$.
25. $(2xy^2 - 1)\,dx + (2x^2y)\,dy = 0$.
26. $(e^y)\,dx + (xe^y + 1)\,dy = 0$.
27. $(\cos y)\,dx + (y^2 - x\,\text{sen}\,y)\,dy = 0$.
28. $(3x^2y)\,dx + (x^3 + 1)\,dy = 0$.
29. $y'' - y = 0$.
30. $y'' - 5y' + 6y = 0$.
31. $y'' - 4y' + 4y = 0$.
32. $y'' + 4y = 0$.
33. $y'' + y = 0$.
34. $y'' - y' - 6y = 0$.
35. $y'' + 2y' + 5y = 0$.
36. $y'' - 6y' + 9y = 0$.
37. $y'' + 2y' + y = 0$.
38. $y'' - 9y = 0$.
39. $y'' + 9y = 0$.
40. $y'' - 2y' + 2y = 0$.
41. $y'' - y = e^{2x}$.
42. $y'' + y = 2$.
43. $y'' - 4y = e^{x}$.
44. $y'' + 3y' + 2y = 4x$.
45. $y'' - 3y' + 2y = e^{3x}$.
46. Calcula $\mathcal{L}\{e^{3t}\}$.
47. Calcula $\mathcal{L}\{\text{sen}\,2t\}$.
48. Calcula $\mathcal{L}\{t\}$.
49. Resuelve $y' + y = 0$ con $y(0) = 1$ por Laplace.
50. Resuelve $y' + y = 1$ con $y(0) = 0$ por Laplace.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $y = x^2 + C$</div>
<div class="r"><b>02</b> $y^2 = x^2 + C$</div>
<div class="r"><b>03</b> $y = Ce^{x}$</div>
<div class="r"><b>04</b> $y = Ce^{x^2/2}$</div>
<div class="r"><b>05</b> $y^2 = 2x + C$</div>
<div class="r"><b>06</b> $y = Cx$</div>
<div class="r"><b>07</b> $y = Ce^{x^3/3}$</div>
<div class="r"><b>08</b> $y^2 = \dfrac{2x^3}{3} + C$</div>
<div class="r"><b>09</b> $y = Ce^{\text{sen}\,x}$</div>
<div class="r"><b>10</b> $y = \dfrac{1}{C - x}$</div>
<div class="r"><b>11</b> $y = 1 + Ce^{-x}$</div>
<div class="r"><b>12</b> $y = e^{-x} + Ce^{-2x}$</div>
<div class="r"><b>13</b> $y = (x + C)e^{x}$</div>
<div class="r"><b>14</b> $y = \dfrac{e^{x}}{2} + Ce^{-x}$</div>
<div class="r"><b>15</b> $y = 2 + Ce^{-2x}$</div>
<div class="r"><b>16</b> $y = x - 1 + Ce^{-x}$</div>
<div class="r"><b>17</b> $y = \dfrac{e^{2x}}{5} + Ce^{-3x}$</div>
<div class="r"><b>18</b> $y = \dfrac{x}{2} + \dfrac{C}{x}$</div>
<div class="r"><b>19</b> $y = \dfrac{1}{2} + Ce^{-x^2}$</div>
<div class="r"><b>20</b> $y = \dfrac{x^3}{4} + \dfrac{C}{x}$</div>
<div class="r"><b>21</b> $x^2y = C$</div>
<div class="r"><b>22</b> $x^2 + xy + y^2 = C$</div>
<div class="r"><b>23</b> $y\,\text{sen}\,x = C$</div>
<div class="r"><b>24</b> $x^3 + xy + y^3 = C$</div>
<div class="r"><b>25</b> $x^2y^2 - x = C$</div>
<div class="r"><b>26</b> $xe^y + y = C$</div>
<div class="r"><b>27</b> $x\cos y + \dfrac{y^3}{3} = C$</div>
<div class="r"><b>28</b> $x^3y + y = C$</div>
<div class="r"><b>29</b> $y = C_1e^{x} + C_2e^{-x}$</div>
<div class="r"><b>30</b> $y = C_1e^{2x} + C_2e^{3x}$</div>
<div class="r"><b>31</b> $y = (C_1 + C_2x)e^{2x}$</div>
<div class="r"><b>32</b> $y = C_1\cos 2x + C_2\,\text{sen}\,2x$</div>
<div class="r"><b>33</b> $y = C_1\cos x + C_2\,\text{sen}\,x$</div>
<div class="r"><b>34</b> $y = C_1e^{3x} + C_2e^{-2x}$</div>
<div class="r"><b>35</b> $y = e^{-x}\left(C_1\cos 2x + C_2\,\text{sen}\,2x\right)$</div>
<div class="r"><b>36</b> $y = (C_1 + C_2x)e^{3x}$</div>
<div class="r"><b>37</b> $y = (C_1 + C_2x)e^{-x}$</div>
<div class="r"><b>38</b> $y = C_1e^{3x} + C_2e^{-3x}$</div>
<div class="r"><b>39</b> $y = C_1\cos 3x + C_2\,\text{sen}\,3x$</div>
<div class="r"><b>40</b> $y = e^{x}\left(C_1\cos x + C_2\,\text{sen}\,x\right)$</div>
<div class="r"><b>41</b> $y = C_1e^{x} + C_2e^{-x} + \dfrac{1}{3}e^{2x}$</div>
<div class="r"><b>42</b> $y = C_1\cos x + C_2\,\text{sen}\,x + 2$</div>
<div class="r"><b>43</b> $y = C_1e^{2x} + C_2e^{-2x} - \dfrac{1}{3}e^{x}$</div>
<div class="r"><b>44</b> $y = C_1e^{-x} + C_2e^{-2x} + 2x - 3$</div>
<div class="r"><b>45</b> $y = C_1e^{x} + C_2e^{2x} + \dfrac{1}{2}e^{3x}$</div>
<div class="r"><b>46</b> $\dfrac{1}{s - 3}$</div>
<div class="r"><b>47</b> $\dfrac{2}{s^2 + 4}$</div>
<div class="r"><b>48</b> $\dfrac{1}{s^2}$</div>
<div class="r"><b>49</b> $y = e^{-t}$</div>
<div class="r"><b>50</b> $y = 1 - e^{-t}$</div>
</div>
