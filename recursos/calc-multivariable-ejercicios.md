# Cálculo multivariable · 50 ejercicios

**Cuaderno de práctica · Cálculo · Universidad 2–3**
*Formulario completo, 50 ejercicios por niveles y solucionario solo con resultados.*

---

## Formulario

### Funciones de varias variables

$$z=f(x,y) \qquad \text{curvas de nivel: } f(x,y)=k$$

### Derivadas parciales

$$\frac{\partial f}{\partial x}, \qquad \frac{\partial f}{\partial y}, \qquad \frac{\partial^{2} f}{\partial x\,\partial y}=\frac{\partial^{2} f}{\partial y\,\partial x}$$

### Gradiente y derivada direccional

$$\nabla f=\left\langle \frac{\partial f}{\partial x},\frac{\partial f}{\partial y}\right\rangle \qquad D_{\hat u}f=\nabla f\cdot\hat u \qquad \lVert\nabla f\rVert \text{ es la máxima razón de cambio}$$

### Plano tangente y aproximación lineal

$$z=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)$$

$$f(x,y)\approx f(a,b)+f_x(a,b)\,\Delta x+f_y(a,b)\,\Delta y$$

### Extremos y hessiano

$$H=f_{xx}f_{yy}-f_{xy}^{2}$$

| Condición | Clasificación |
|---|---|
| $H>0$ y $f_{xx}>0$ | mínimo local |
| $H>0$ y $f_{xx}<0$ | máximo local |
| $H<0$ | punto silla |
| $H=0$ | no decide |

### Multiplicadores de Lagrange

$$\nabla f=\lambda\,\nabla g, \qquad g(x,y)=c$$

### Integrales dobles y triples

$$\iint_D f\,dA=\int_a^b\int_{g(x)}^{h(x)} f\,dy\,dx, \qquad \iiint_V f\,dV$$

### Coordenadas y jacobiano

| Sistema | Cambio de variable | Diferencial |
|---|---|---|
| Polares | $x=r\cos\theta,\ y=r\operatorname{sen}\theta$ | $dA=r\,dr\,d\theta$ |
| Cilíndricas | $x=r\cos\theta,\ y=r\operatorname{sen}\theta,\ z=z$ | $dV=r\,dz\,dr\,d\theta$ |
| Esféricas | $x=\rho\operatorname{sen}\phi\cos\theta,\ y=\rho\operatorname{sen}\phi\operatorname{sen}\theta,\ z=\rho\cos\phi$ | $dV=\rho^{2}\operatorname{sen}\phi\,d\rho\,d\phi\,d\theta$ |

En general $dA=\lvert J\rvert\,du\,dv$; en polares $\lvert J\rvert=r$.

---

## Ejercicios (50)

### Nivel 1 — Derivadas parciales

1. Halla $f_x$ y $f_y$ de $f(x,y)=x^{3}y^{2}-2xy$.
2. Halla $f_x$ y $f_y$ de $f(x,y)=x^{2}y+3xy^{2}$.
3. Halla $f_x$ y $f_y$ de $f(x,y)=e^{x^{2}+y^{2}}$.
4. Halla $f_x$ y $f_y$ de $f(x,y)=\ln(x^{2}+y^{2})$.
5. Halla $f_x$ y $f_y$ de $f(x,y)=x\operatorname{sen}y+y\cos x$.

### Nivel 2 — Segundas parciales

6. Halla $f_{xx}$, $f_{yy}$ y $f_{xy}$ de $f(x,y)=x^{3}+y^{3}-3xy$.
7. Halla $f_{xx}$, $f_{yy}$ y $f_{xy}$ de $f(x,y)=x^{2}y^{3}$.
8. Halla $f_{xx}$, $f_{yy}$ y $f_{xy}$ de $f(x,y)=e^{xy}$.
9. Halla $f_{xx}$, $f_{yy}$ y $f_{xy}$ de $f(x,y)=\operatorname{sen}x\cos y$.
10. Verifica que $f_{xy}=f_{yx}$ para $f(x,y)=x^{3}y^{2}-2xy$.

### Nivel 3 — Gradiente y derivada direccional

11. Calcula $\nabla f(1,1)$ para $f(x,y)=x^{2}y+y^{3}$.
12. Calcula $\nabla f(0,\pi/2)$ para $f(x,y)=e^{x}\operatorname{sen}y$.
13. Halla la máxima razón de cambio de $f(x,y)=x^{2}+2y^{2}$ en $(1,1)$.
14. Calcula $D_{\hat u}f$ para $f(x,y)=xy$ en $(1,2)$ con $\hat u=\left\langle \tfrac{1}{\sqrt2},\tfrac{1}{\sqrt2}\right\rangle$.
15. Halla la dirección de máximo aumento de $T(x,y)=100-x^{2}-2y^{2}$ en $(2,1)$.

### Nivel 4 — Plano tangente y aproximación lineal

16. Halla el plano tangente a $z=x^{2}+y^{2}$ en $(1,2)$.
17. Halla el plano tangente a $z=xy$ en $(2,3)$.
18. Halla el plano tangente a $z=e^{x}\cos y$ en $(0,0)$.
19. Aproxima $\sqrt{9.1\cdot4.05}$ con $f=\sqrt{xy}$ en $(9,4)$.
20. Aproxima $(1.02)^{2}(0.97)$ con $f=x^{2}y$ en $(1,1)$.

### Nivel 5 — Extremos y hessiano

21. Halla y clasifica el punto crítico de $f(x,y)=x^{2}+y^{2}-2x-4y+5$.
22. Clasifica el punto crítico de $f(x,y)=x^{2}-y^{2}$.
23. Halla y clasifica los puntos críticos de $f(x,y)=x^{3}-3x+y^{2}$.
24. Halla y clasifica el punto crítico de $f(x,y)=x^{2}+xy+y^{2}$.
25. Halla y clasifica los puntos críticos de $f(x,y)=x^{4}+y^{4}-4xy$.

### Nivel 6 — Multiplicadores de Lagrange

26. Maximiza $f=xy$ sujeta a $x+y=10$.
27. Minimiza $f=x^{2}+y^{2}$ sujeta a $x+y=4$.
28. Maximiza $f=xy$ sujeta a $x+2y=8$.
29. Minimiza $f=x^{2}+y^{2}$ sujeta a $xy=1$.
30. Maximiza $f=x+y$ sujeta a $x^{2}+y^{2}=2$.

### Nivel 7 — Integrales dobles

31. Calcula $\displaystyle\int_0^1\int_0^2 (x+y)\,dy\,dx$.
32. Calcula $\displaystyle\int_0^1\int_0^1 (x^{2}+y^{2})\,dy\,dx$.
33. Calcula $\displaystyle\int_0^2\int_0^1 xy\,dy\,dx$.
34. Calcula $\displaystyle\int_0^1\int_0^{x}(x+y)\,dy\,dx$.
35. Calcula $\displaystyle\int_0^1\int_0^1 e^{x+y}\,dy\,dx$.

### Nivel 8 — Coordenadas polares

36. Calcula $\displaystyle\iint_D (x^{2}+y^{2})\,dA$ con $D: x^{2}+y^{2}\le4$.
37. Halla el área del disco unitario usando polares.
38. Calcula $\displaystyle\iint_D xy\,dA$ con $D$ el disco unitario.
39. Calcula $\displaystyle\iint_D e^{x^{2}+y^{2}}\,dA$ con $D$ el disco unitario.
40. Calcula $\displaystyle\iint_D \sqrt{x^{2}+y^{2}}\,dA$ con $D$ el disco unitario.

### Nivel 9 — Integrales triples

41. Calcula $\displaystyle\int_0^1\int_0^1\int_0^1 (x+y+z)\,dz\,dy\,dx$.
42. Calcula $\displaystyle\iiint_{[0,1]^{3}} xyz\,dV$.
43. Halla el volumen del cubo $[0,1]\times[0,1]\times[0,1]$.
44. Calcula $\displaystyle\iiint_{[0,1]^{3}} (x^{2}+y^{2}+z^{2})\,dV$.
45. Halla el volumen de la bola $x^{2}+y^{2}+z^{2}\le1$ usando esféricas.

### Nivel 10 — Cambio de variable y aplicaciones

46. Halla el jacobiano del cambio $x=u+v$, $y=u-v$.
47. Halla el jacobiano del cambio a polares.
48. Halla la masa de la placa $[0,1]\times[0,1]$ con densidad $\rho=xy$.
49. Halla la masa de la placa $[0,2]\times[0,1]$ con densidad $\rho=x+y$.
50. Halla el volumen bajo $z=4-x^{2}-y^{2}$ sobre el disco unitario.

---

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $f_x=3x^{2}y^{2}-2y,\ f_y=2x^{3}y-2x$</div>
<div class="r"><b>02</b> $f_x=2xy+3y^{2},\ f_y=x^{2}+6xy$</div>
<div class="r"><b>03</b> $f_x=2xe^{x^{2}+y^{2}},\ f_y=2ye^{x^{2}+y^{2}}$</div>
<div class="r"><b>04</b> $f_x=\dfrac{2x}{x^{2}+y^{2}},\ f_y=\dfrac{2y}{x^{2}+y^{2}}$</div>
<div class="r"><b>05</b> $f_x=\operatorname{sen}y-y\operatorname{sen}x,\ f_y=x\cos y+\cos x$</div>
<div class="r"><b>06</b> $f_{xx}=6x,\ f_{yy}=6y,\ f_{xy}=-3$</div>
<div class="r"><b>07</b> $f_{xx}=2y^{3},\ f_{yy}=6x^{2}y,\ f_{xy}=6xy^{2}$</div>
<div class="r"><b>08</b> $f_{xx}=y^{2}e^{xy},\ f_{yy}=x^{2}e^{xy},\ f_{xy}=(1+xy)e^{xy}$</div>
<div class="r"><b>09</b> $f_{xx}=-\operatorname{sen}x\cos y,\ f_{yy}=-\operatorname{sen}x\cos y,\ f_{xy}=-\cos x\operatorname{sen}y$</div>
<div class="r"><b>10</b> $f_{xy}=f_{yx}=6x^{2}y-2$</div>
<div class="r"><b>11</b> $\nabla f(1,1)=\langle2,4\rangle$</div>
<div class="r"><b>12</b> $\nabla f(0,\pi/2)=\langle1,0\rangle$</div>
<div class="r"><b>13</b> $\lVert\nabla f\rVert=2\sqrt5$ en dirección $\langle2,4\rangle$</div>
<div class="r"><b>14</b> $D_{\hat u}f=\dfrac{3\sqrt2}{2}$</div>
<div class="r"><b>15</b> $\langle-4,-4\rangle$</div>
<div class="r"><b>16</b> $z=2x+4y-5$</div>
<div class="r"><b>17</b> $z=3x+2y-6$</div>
<div class="r"><b>18</b> $z=1+x$</div>
<div class="r"><b>19</b> $\approx6.0708$</div>
<div class="r"><b>20</b> $\approx1.01$</div>
<div class="r"><b>21</b> Mínimo en $(1,2)$, $f=0$</div>
<div class="r"><b>22</b> Silla en $(0,0)$, $H=-4<0$</div>
<div class="r"><b>23</b> Mínimo en $(1,0)$, $f=-2$; silla en $(-1,0)$</div>
<div class="r"><b>24</b> Mínimo en $(0,0)$, $f=0$, $H=3>0$</div>
<div class="r"><b>25</b> Silla en $(0,0)$; mínimos en $(1,1)$ y $(-1,-1)$, $f=-2$</div>
<div class="r"><b>26</b> $x=y=5$, máximo $f=25$</div>
<div class="r"><b>27</b> $x=y=2$, mínimo $f=8$</div>
<div class="r"><b>28</b> $x=4,\ y=2$, máximo $f=8$</div>
<div class="r"><b>29</b> $x=y=1$ o $x=y=-1$, mínimo $f=2$</div>
<div class="r"><b>30</b> $x=y=1$, máximo $f=2$</div>
<div class="r"><b>31</b> $3$</div>
<div class="r"><b>32</b> $\dfrac{2}{3}$</div>
<div class="r"><b>33</b> $1$</div>
<div class="r"><b>34</b> $\dfrac{1}{2}$</div>
<div class="r"><b>35</b> $(e-1)^{2}$</div>
<div class="r"><b>36</b> $8\pi$</div>
<div class="r"><b>37</b> $\pi$</div>
<div class="r"><b>38</b> $0$</div>
<div class="r"><b>39</b> $\pi(e-1)$</div>
<div class="r"><b>40</b> $\dfrac{2\pi}{3}$</div>
<div class="r"><b>41</b> $\dfrac{3}{2}$</div>
<div class="r"><b>42</b> $\dfrac{1}{8}$</div>
<div class="r"><b>43</b> $1$</div>
<div class="r"><b>44</b> $1$</div>
<div class="r"><b>45</b> $\dfrac{4\pi}{3}$</div>
<div class="r"><b>46</b> $\lvert J\rvert=2$</div>
<div class="r"><b>47</b> $\lvert J\rvert=r$</div>
<div class="r"><b>48</b> $m=\dfrac{1}{4}$</div>
<div class="r"><b>49</b> $m=3$</div>
<div class="r"><b>50</b> $\dfrac{7\pi}{2}$</div>
</div>
