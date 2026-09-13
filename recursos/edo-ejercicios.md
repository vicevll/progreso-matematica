# EDO · Formulario y batería de ejercicios

## Formulario

### Qué es una EDO y cómo leerla

Una **ecuación diferencial ordinaria** relaciona una función incógnita $y(x)$ con sus derivadas. La forma general es $F(x, y, y', y'', \ldots) = 0$: aquí $x$ es la **variable independiente**, $y$ la **función incógnita** y $y'$, $y''$ sus derivadas (razones de cambio). En $\dfrac{dy}{dx}$, la expresión significa "cuánto cambia $y$ por unidad de cambio de $x$"; $y'$ es la forma abreviada. Una condición como $y(0) = 3$ no es un producto: es el valor inicial de la función.

- **Orden:** el de la derivada más alta que aparece ($y'$ primero, $y''$ segundo, etc.).
- **Lineal:** $y$ y sus derivadas aparecen sumadas, a la primera potencia y sin productos entre ellas, dentro de una expresión del tipo $a_n(x)y^{(n)} + \cdots + a_1(x)y' + a_0(x)y = g(x)$.
- **Solución general:** familia de soluciones con tantas constantes arbitrarias ($C$, $C_1$, $C_2$, ...) como el orden. Cada constante puede tomar cualquier valor real.
- **Solución particular:** se obtiene fijando esas constantes con condiciones iniciales o de frontera.

### Variables separables

Si la ecuación se escribe $y' = f(x)\,g(y)$, se separan las variables y se integra cada lado:

$$y' = f(x)g(y) \quad \Rightarrow \quad \int \frac{dy}{g(y)} = \int f(x)\,dx$$

Aquí $f(x)$ es lo que depende solo de $x$ y $g(y)$ lo que depende solo de $y$. El método vale porque la regla de la cadena permite integrar ambos lados respecto de $x$. **Cuidado:** al dividir entre $g(y)$ pueden perderse soluciones constantes con $g(y) = 0$.

### Lineal de primer orden y factor integrante

Forma estándar:

$$y' + P(x)\,y = Q(x), \qquad \mu = e^{\int P\,dx}, \qquad (\mu y)' = \mu Q, \qquad y = \frac{1}{\mu}\left(\int \mu Q\,dx + C\right)$$

$P(x)$ es el coeficiente de $y$ (influencia del valor actual) y $Q(x)$ el término forzante (influencia externa). El **factor integrante** $\mu(x) = e^{\int P\,dx}$ es la función que convierte el lado izquierdo en la derivada del producto $(\mu y)'$: se elige para que $\mu' = \mu P$. Multiplicar toda la ecuación por $\mu$ y comprobar que $(\mu y)' = \mu Q$ es el corazón del método.

### Ecuaciones exactas

$$M(x,y)\,dx + N(x,y)\,dy = 0 \text{ es exacta si } \frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

$M$ es lo que multiplica a $dx$ y $N$ lo que multiplica a $dy$. La condición usa **derivadas parciales**: $M_y$ deriva $M$ respecto de $y$ tratando $x$ como constante, y $N_x$ al revés. Si es exacta, existe una función $f(x,y)$ con $f_x = M$ y $f_y = N$, y la solución son sus curvas de nivel:

$$f(x,y) = C$$

Para hallar $f$: integra $M$ en $x$ y añade $g(y)$; deriva en $y$; iguala con $N$; despeja $g'$ e integra. Si la ecuación no es exacta, a veces un factor integrante la vuelve exacta.

### Segundo orden homogéneo y ecuación característica

$$ay'' + by' + cy = 0, \qquad ar^2 + br + c = 0$$

$a \neq 0$, $b$ y $c$ son constantes; "homogénea" significa que el lado derecho es cero. Se prueba $y = e^{rx}$ porque sus derivadas son múltiplos de ella misma, y al sustituir queda la **ecuación característica** $ar^2 + br + c = 0$, cuyas raíces $r$ determinan la forma de la solución:

1. **Reales distintas** $r_1 \neq r_2$: $y = C_1e^{r_1x} + C_2e^{r_2x}$.
2. **Raíz doble** $r$: $y = (C_1 + C_2x)e^{rx}$.
3. **Complejas** $r = \alpha \pm \beta i$: $y = e^{\alpha x}\left(C_1\cos\beta x + C_2\,\text{sen}\,\beta x\right)$.

En el caso complejo, $e^{\alpha x}$ es la envolvente ($\alpha < 0$ amortigua, $\alpha > 0$ crece) y $\beta$ fija la frecuencia de oscilación. Las constantes $C_1$ y $C_2$ se determinan con dos condiciones iniciales.

### Segundo orden no homogéneo

$$ay'' + by' + cy = g(x), \qquad y = y_h + y_p$$

$g(x)$ es el **término forzante**; $y_h$ es la solución general de la homogénea asociada y $y_p$ una solución particular de la completa. Se busca $y_p$ con **coeficientes indeterminados**, proponiendo la misma forma que $g$: polinomio de igual grado, $Ae^{kx}$ para exponenciales, $A\cos\omega x + B\,\text{sen}\,\omega x$ para senos o cosenos (siempre ambos), y productos cuando $g$ es un producto. Si la propuesta ya aparece en $y_h$ (**resonancia**), se multiplica por $x$. Si la forma no es simple, se usa **variación de parámetros**.

### Transformada de Laplace

$$\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st}f(t)\,dt, \qquad \mathcal{L}\{y'\} = sY(s) - y(0), \qquad \mathcal{L}\{y''\} = s^2Y(s) - sy(0) - y'(0)$$

La transformada convierte una función del tiempo $f(t)$ en una función de la variable $s$: la derivada se vuelve una multiplicación por $s$ y la condición inicial queda incorporada como término conocido. Se transforma la EDO, se despeja $Y(s)$ algebraicamente y se antitransforma con $\mathcal{L}^{-1}$ y la tabla:

$$\mathcal{L}\{1\} = \frac{1}{s}, \quad \mathcal{L}\{t\} = \frac{1}{s^2}, \quad \mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}, \quad \mathcal{L}\{e^{at}\} = \frac{1}{s-a}$$

$$\mathcal{L}\{\text{sen}\,at\} = \frac{a}{s^2+a^2}, \quad \mathcal{L}\{\cos at\} = \frac{s}{s^2+a^2}, \quad \mathcal{L}\{e^{at}f(t)\} = F(s-a)$$

### Aplicaciones típicas

- **Poblaciones:** $P' = kP \Rightarrow P(t) = P_0e^{kt}$ ($P_0 = P(0)$, $k$ tasa instantánea). Con recursos limitados: $P' = kP(1 - P/K)$.
- **Enfriamiento de Newton:** $T' = -k(T - T_{\text{amb}}) \Rightarrow T(t) = T_{\text{amb}} + (T_0 - T_{\text{amb}})e^{-kt}$.
- **Circuito RL:** $L\,i' + Ri = V \Rightarrow i(t) = \dfrac{V}{R}\left(1 - e^{-Rt/L}\right)$ si $i(0) = 0$.
- **Desintegración:** $M' = -kM \Rightarrow M(t) = M_0e^{-kt}$.

## Ejercicios (50)

### A. Variables separables

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

### B. Lineales de primer orden

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

### C. Exactas

21. $(2xy)\,dx + (x^2)\,dy = 0$.
22. $(2x + y)\,dx + (x + 2y)\,dy = 0$.
23. $(y\cos x)\,dx + (\text{sen}\,x)\,dy = 0$.
24. $(3x^2 + y)\,dx + (x + 3y^2)\,dy = 0$.
25. $(2xy^2 - 1)\,dx + (2x^2y)\,dy = 0$.
26. $(e^y)\,dx + (xe^y + 1)\,dy = 0$.
27. $(\cos y)\,dx + (y^2 - x\,\text{sen}\,y)\,dy = 0$.
28. $(3x^2y)\,dx + (x^3 + 1)\,dy = 0$.

### D. Segundo orden homogéneo

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

### E. No homogéneas

41. $y'' - y = e^{2x}$.
42. $y'' + y = 2$.
43. $y'' - 4y = e^{x}$.
44. $y'' + 3y' + 2y = 4x$.
45. $y'' - 3y' + 2y = e^{3x}$.

### F. Transformada de Laplace

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
