# Geometría de Riemann — Formulario y 50 ejercicios

## Formulario

### 1. Métricas riemannianas y mediciones

$$g = g_{ij}\,dx^i \otimes dx^j, \qquad g_{ij} = g\!\left(\partial_i, \partial_j\right) = g_{ji}, \qquad g^{ij} = (g^{-1})^{ij}.$$

- Norma: $|v| = \sqrt{g_{ij}v^i v^j}$.
- Ángulo: $\cos\theta = \dfrac{g(v,w)}{\sqrt{g(v,v)\,g(w,w)}}$.
- Longitud: $\displaystyle L(\gamma) = \int_a^b \sqrt{g_{ij}\dot x^i \dot x^j}\,dt$.
- Volumen: $dV = \sqrt{\det(g_{ij})}\,dx^1\cdots dx^n$.

Casos de referencia:

1. Polares euclidianas: $g = dr^2 + r^2\,d\theta^2$, con $\sqrt{\det g} = r$.
2. Esfera radio $R$: $g = R^2\left(d\phi^2 + \text{sen}^2\phi\,d\theta^2\right)$.
3. Plano hiperbólico: $g = \dfrac{dx^2 + dy^2}{y^2}$.
4. Cilindro radio $r$: $g = r^2\,d\theta^2 + dz^2$.

### 2. Conexión de Levi-Civita, Christoffel y derivada covariante

$$\Gamma^k_{ij} = \frac{1}{2}g^{kl}\left(\partial_i g_{jl} + \partial_j g_{il} - \partial_l g_{ij}\right), \qquad \Gamma^k_{ij} = \Gamma^k_{ji}.$$

- Compatibilidad: $\nabla g = 0$; torsión: $\nabla_X Y - \nabla_Y X = [X,Y]$.
- Derivada covariante: $\nabla_{\partial_i}\partial_j = \Gamma^k_{ij}\partial_k$.
- En coordenadas: $\nabla_X Y = \left(X^i\partial_i Y^k + \Gamma^k_{ij}X^i Y^j\right)\partial_k$.
- Transporte paralelo: $\dfrac{DV}{dt} = 0$, es decir, $\dot V^k + \Gamma^k_{ij}\dot x^i V^j = 0$.
- Holonomía: la curvatura mide la rotación tras un lazo cerrado.

### 3. Geodésicas

$$\nabla_{\dot\gamma}\dot\gamma = 0 \quad \Longleftrightarrow \quad \ddot x^k + \Gamma^k_{ij}\dot x^i\dot x^j = 0.$$

- Son puntos críticos de $\displaystyle E(\gamma) = \frac{1}{2}\int_a^b g_{ij}\dot x^i\dot x^j\,dt$.
- Rapidez constante: $\dfrac{d}{dt}\,g(\dot\gamma,\dot\gamma) = 0$.
- Hopf-Rinow: completa $\Leftrightarrow$ existe geodésica minimizante entre todo par de puntos.

Ejemplos: rectas en $\mathbb{R}^n$; círculos máximos en $S^2$; semicírculos y rectas verticales en el hiperbólico; hélices en el cilindro.

### 4. Tensor de Riemann y curvaturas

$$R(X,Y)Z = \nabla_X\nabla_Y Z - \nabla_Y\nabla_X Z - \nabla_{[X,Y]}Z,$$
$$R^l{}_{ijk} = \partial_i\Gamma^l_{jk} - \partial_j\Gamma^l_{ik} + \Gamma^l_{im}\Gamma^m_{jk} - \Gamma^l_{jm}\Gamma^m_{ik}.$$

- Simetrías: $R_{lijk} = -R_{lkji}$, $R_{lijk} = R_{jkil}$, $R_{lijk} + R_{ljki} + R_{lkij} = 0$.
- Componentes independientes: $\dfrac{n^2(n^2-1)}{12}$.
- Curvatura seccional: $K(X,Y) = \dfrac{\langle R(X,Y)Y, X\rangle}{|X|^2|Y|^2 - \langle X, Y\rangle^2}$.
- Ricci: $R_{ij} = R^k{}_{ikj}$; escalar: $R = g^{ij}R_{ij}$.
- Tensor de Einstein: $G_{ij} = R_{ij} - \dfrac{1}{2}R\,g_{ij}$.
- Einstein: $R_{ij} - \dfrac{1}{2}R\,g_{ij} = 8\pi T_{ij}$.
- Curvatura constante $K$: $R_{ij} = (n-1)K\,g_{ij}$, $R = n(n-1)K$.

### 5. Comparación y Gauss-Bonnet

- Bonnet-Myers: $\text{Ric} \geq (n-1)/R^2 > 0 \Rightarrow \text{diam} \leq \pi R$ y compacta.
- Cartan-Hadamard: $K \leq 0$ y simplemente conexa $\Rightarrow$ difeomorfa a $\mathbb{R}^n$.
- Synge: $K > 0$, dimensión par, orientable y compacta $\Rightarrow$ simplemente conexa.
- Gauss-Bonnet: $\displaystyle \int_M K\,dA = 2\pi\chi(M)$, con $\chi = 2 - 2g$ en superficies orientables.
- Versión local: $\displaystyle \int_D K\,dA + \sum_i\int_{\gamma_i}\kappa_g\,ds + \sum_j\theta_j = 2\pi$.
- Exceso angular: $\alpha + \beta + \gamma - \pi = \displaystyle\int_D K\,dA$.

### 6. Superficie con métrica ortogonal $g = E\,du^2 + G\,dv^2$

$$K = -\frac{1}{2\sqrt{EG}}\left[\frac{\partial}{\partial u}\left(\frac{G_u}{\sqrt{EG}}\right) + \frac{\partial}{\partial v}\left(\frac{E_v}{\sqrt{EG}}\right)\right],$$
donde $G_u = \partial_u G$ y $E_v = \partial_v E$.

## Ejercicios (50)

### Métricas (1–10)

1. Escribe la métrica euclidiana de $\mathbb{R}^2$ en coordenadas polares.
2. Escribe la métrica inducida en la esfera de radio $R$.
3. Calcula la norma del vector $\partial_x + \partial_y$ con la métrica euclidiana.
4. Escribe la métrica del plano hiperbólico en el semiplano.
5. Calcula el área total de la esfera de radio $R$ a partir de su métrica.
6. Halla la longitud del paralelo a latitud $\phi_0$ de la esfera de radio $R$.
7. Calcula la distancia geodésica entre los polos opuestos de la esfera de radio $R$.
8. Escribe la métrica de un cilindro de radio $r$ parametrizado por $(\theta, z)$.
9. Calcula la norma de $\partial_\phi$ con la métrica de la esfera unidad.
10. Calcula $\det(g_{ij})$ para la esfera de radio $R$ en coordenadas $(\phi, \theta)$.

### Símbolos de Christoffel (11–20)

11. Halla $\Gamma^r_{\theta\theta}$ para $g = dr^2 + r^2 d\theta^2$.
12. Halla $\Gamma^\theta_{r\theta}$ para $g = dr^2 + r^2 d\theta^2$.
13. Halla $\Gamma^\phi_{\theta\theta}$ para la esfera unidad.
14. Halla $\Gamma^\theta_{\phi\theta}$ para la esfera unidad.
15. Halla $\Gamma^r_{rr}$ para $g = dr^2 + r^2 d\theta^2$.
16. ¿Cuánto valen los símbolos de Christoffel en $\mathbb{R}^n$ con coordenadas cartesianas?
17. Para $g = dx^2 + e^{2x}dy^2$, calcula $\Gamma^x_{yy}$.
18. Para $g = dx^2 + e^{2x}dy^2$, calcula $\Gamma^y_{xy}$.
19. ¿Cuántos símbolos de Christoffel independientes hay en dimensión $2$?
20. ¿Cuántos símbolos de Christoffel independientes hay en dimensión $3$?

### Geodésicas (21–30)

21. Describe las geodésicas de $\mathbb{R}^n$ con la métrica euclidiana.
22. Describe las geodésicas de la esfera $S^2$.
23. ¿Qué cantidad se conserva a lo largo de una geodésica en polares?
24. Halla la longitud de un círculo máximo completo en la esfera de radio $R$.
25. Describe las geodésicas del plano hiperbólico.
26. Describe las geodésicas de un cilindro.
27. Escribe la ecuación geodésica para $r$ en polares cuando $\dot\theta = 0$.
28. ¿Qué garantiza el teorema de Hopf-Rinow?
29. Calcula la curvatura seccional de la esfera $S^2$ de radio $R$.
30. Calcula la curvatura seccional del plano hiperbólico.

### Curvaturas (31–42)

31. Calcula el tensor de Riemann de $\mathbb{R}^n$.
32. ¿Cuántas componentes independientes tiene el tensor de Riemann en dimensión $2$?
33. ¿Cuántas componentes independientes tiene el tensor de Riemann en dimensión $4$?
34. Calcula la curvatura seccional del plano euclidiano.
35. Calcula la curvatura escalar de $S^2$ de radio $R$.
36. Calcula la curvatura escalar de $S^3$ de radio $R$.
37. Escribe la curvatura escalar de $S^n$ de radio $R$.
38. Calcula el tensor de Ricci del plano euclidiano.
39. Calcula el tensor de Einstein de $S^2$ de radio $R$.
40. Calcula el tensor de Einstein de $S^3$ de radio $R$.
41. ¿Cuántas componentes independientes tiene el tensor de Ricci en dimensión $4$?
42. Si una superficie tiene $K = 0$ en todo punto, ¿cuánto valen su Ricci y su escalar?

### Gauss-Bonnet y topología (43–50)

43. Calcula $\displaystyle\int_{S^2} K\,dA$.
44. Da la característica de Euler de $S^2$.
45. Calcula $\displaystyle\int_T K\,dA$ para el toro plano.
46. Expresa la característica de Euler de una superficie orientable de género $g$.
47. ¿Cuál es el género del toro?
48. Calcula la curvatura total de una superficie compacta orientable de género $2$.
49. Calcula $\displaystyle\int_M K\,dA$ para una superficie con $\chi = -3$.
50. Da la característica de Euler del plano proyectivo real $\mathbb{RP}^2$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $dr^2 + r^2\,d\theta^2$</div>
<div class="r"><b>02</b> $R^2\left(d\phi^2 + \text{sen}^2\phi\,d\theta^2\right)$</div>
<div class="r"><b>03</b> $\sqrt{2}$</div>
<div class="r"><b>04</b> $\dfrac{dx^2 + dy^2}{y^2}$</div>
<div class="r"><b>05</b> $4\pi R^2$</div>
<div class="r"><b>06</b> $2\pi R\,\text{sen}\,\phi_0$</div>
<div class="r"><b>07</b> $\pi R$</div>
<div class="r"><b>08</b> $r^2\,d\theta^2 + dz^2$</div>
<div class="r"><b>09</b> $1$</div>
<div class="r"><b>10</b> $R^4\,\text{sen}^2\phi$</div>
<div class="r"><b>11</b> $-r$</div>
<div class="r"><b>12</b> $\dfrac{1}{r}$</div>
<div class="r"><b>13</b> $-\text{sen}\,\phi\cos\phi$</div>
<div class="r"><b>14</b> $\cot\phi$</div>
<div class="r"><b>15</b> $0$</div>
<div class="r"><b>16</b> $0$</div>
<div class="r"><b>17</b> $-e^{2x}$</div>
<div class="r"><b>18</b> $1$</div>
<div class="r"><b>19</b> $6$</div>
<div class="r"><b>20</b> $18$</div>
<div class="r"><b>21</b> rectas</div>
<div class="r"><b>22</b> círculos máximos</div>
<div class="r"><b>23</b> $r^2\dot\theta$ (momento angular)</div>
<div class="r"><b>24</b> $2\pi R$</div>
<div class="r"><b>25</b> semicírculos verticales y rectas verticales</div>
<div class="r"><b>26</b> hélices</div>
<div class="r"><b>27</b> $\ddot r = 0$ (recta radial)</div>
<div class="r"><b>28</b> geodésica minimizante entre todo par de puntos</div>
<div class="r"><b>29</b> $1/R^2$</div>
<div class="r"><b>30</b> $-1$</div>
<div class="r"><b>31</b> $R^l{}_{ijk} = 0$</div>
<div class="r"><b>32</b> $1$</div>
<div class="r"><b>33</b> $20$</div>
<div class="r"><b>34</b> $0$</div>
<div class="r"><b>35</b> $2/R^2$</div>
<div class="r"><b>36</b> $6/R^2$</div>
<div class="r"><b>37</b> $n(n-1)/R^2$</div>
<div class="r"><b>38</b> $0$</div>
<div class="r"><b>39</b> $0$</div>
<div class="r"><b>40</b> $-\dfrac{1}{R^2}\,g_{ij}$</div>
<div class="r"><b>41</b> $10$</div>
<div class="r"><b>42</b> $R_{ij} = 0$ y $R = 0$</div>
<div class="r"><b>43</b> $4\pi$</div>
<div class="r"><b>44</b> $2$</div>
<div class="r"><b>45</b> $0$</div>
<div class="r"><b>46</b> $2 - 2g$</div>
<div class="r"><b>47</b> $1$</div>
<div class="r"><b>48</b> $-4\pi$</div>
<div class="r"><b>49</b> $-6\pi$</div>
<div class="r"><b>50</b> $1$</div>
</div>
