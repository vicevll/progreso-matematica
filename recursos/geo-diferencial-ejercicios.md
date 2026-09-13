# Geometría diferencial de curvas y superficies · Ejercicios

## Formulario

### Curvas parametrizadas
$$\alpha(t) = (x(t), y(t), z(t)), \qquad \alpha'(t) \ \text{velocidad}, \qquad \lvert\alpha'(t)\rvert \ \text{rapidez}$$

### Longitud de arco
$$s(t) = \int_a^t \lvert\alpha'(\tau)\rvert\, d\tau, \qquad L = \int_a^b \lvert\alpha'(t)\rvert\, dt$$

### Triedro de Frenet-Serret
$$T = \alpha'(s), \qquad N = \frac{T'}{\lvert T'\rvert}, \qquad B = T \times N$$
$$T' = \kappa N, \qquad N' = -\kappa T + \tau B, \qquad B' = -\tau N$$

### Curvatura y torsión
$$\kappa = \lvert T'(s)\rvert = \frac{\lvert\alpha' \times \alpha''\rvert}{\lvert\alpha'\rvert^{3}}, \qquad \tau = -\frac{(T \times T')\cdot T''}{\lvert T'\rvert^{2}} = \frac{(\alpha', \alpha'', \alpha''')}{\lvert\alpha' \times \alpha''\rvert^{2}}$$

### Primera forma fundamental
$$I = E\, du^2 + 2F\, du\, dv + G\, dv^2, \qquad E = X_u \cdot X_u, \quad F = X_u \cdot X_v, \quad G = X_v \cdot X_v$$
$$dA = \sqrt{EG - F^2}\, du\, dv$$

### Segunda forma fundamental y curvaturas
$$II = L\, du^2 + 2M\, du\, dv + N\, dv^2, \qquad L = X_{uu}\cdot n, \quad M = X_{uv}\cdot n, \quad N = X_{vv}\cdot n$$
$$K = \frac{LN - M^2}{EG - F^2}, \qquad H = \frac{EN - 2FM + GL}{2(EG - F^2)}$$

| Signo de $K$ | Tipo de punto |
| $K > 0$ | elíptico |
| $K < 0$ | hiperbólico (silla) |
| $K = 0$ | parabólico o plano |

### Geodésicas
$$\ddot u^k + \sum_{i,j} \Gamma^k_{ij}\, \dot u^i \dot u^j = 0, \qquad \Gamma^k_{ij} = \frac{1}{2} g^{kl}\left(\partial_i g_{jl} + \partial_j g_{il} - \partial_l g_{ij}\right)$$

### Teorema egregio
$$K \ \text{depende solo de } E, F, G \quad (\text{propiedad intrínseca})$$

## Ejercicios (50)

### Parametrizaciones (1–5)
1. Deriva $\alpha(t) = (t, t^2)$.
2. Halla la rapidez de $\alpha(t) = (\cos t, \sin t, t)$.
3. Halla la rapidez de $\alpha(t) = (3t, 4t)$.
4. Deriva $\alpha(t) = (t^3, t^2)$.
5. Halla la rapidez de $\alpha(t) = (e^t\cos t, e^t\sin t)$.

### Longitud de arco (6–10)
6. Longitud de $\alpha(t) = (3t, 4t)$ en $[0, 2]$.
7. Longitud de $\alpha(t) = (\cos t, \sin t, t)$ en $[0, 2\pi]$.
8. Longitud de $\alpha(t) = (t^2, t^2)$ en $[0, 1]$.
9. Longitud de $\alpha(t) = (2t, t^2)$ en $[0, 1]$.
10. Reparametriza por longitud de arco $\alpha(t) = (1+2t, 3t, 1-t)$.

### Curvatura (11–15)
11. Curvatura de una recta.
12. Curvatura de una circunferencia de radio $5$.
13. Curvatura de $\alpha(t) = (t, t^2)$.
14. Curvatura de una circunferencia de radio $R$.
15. Curvatura de la hélice $(\cos t, \sin t, t)$.

### Torsión (16–20)
16. Torsión de una curva plana.
17. Torsión de una circunferencia.
18. Torsión de la hélice $(\cos t, \sin t, t)$.
19. Curvatura y torsión de $(\cos t, \sin t, 2t)$.
20. Curvatura y torsión de la hélice $(a\cos t, a\sin t, bt)$.

### Triedro de Frenet-Serret (21–25)
21. Vector tangente unitario de $\alpha(t) = (\cos t, \sin t, t)$.
22. Vector normal de $\alpha(t) = (\cos t, \sin t, t)$.
23. Vector binormal de $\alpha(t) = (\cos t, \sin t, t)$.
24. Escribe las tres ecuaciones de Frenet-Serret.
25. Fórmula de $\kappa$ para una parametrización arbitraria.

### Primera forma fundamental (26–30)
26. Define los coeficientes $E, F, G$.
27. Primera forma fundamental del plano $X(u,v) = (u, v, 0)$.
28. Primera forma fundamental del plano en polares.
29. Primera forma fundamental de la esfera unidad.
30. Elemento de área de una superficie.

### Segunda forma y curvaturas (31–35)
31. Define los coeficientes $L, M, N$.
32. Fórmula de la curvatura gaussiana $K$.
33. Fórmula de la curvatura media $H$.
34. Curvatura gaussiana de la esfera de radio $R$.
35. Curvatura gaussiana del plano y del cilindro.

### Geodésicas (36–40)
36. Ecuación de las geodésicas.
37. Geodésicas del plano.
38. Geodésicas de la esfera.
39. Geodésicas del cilindro.
40. Fórmula de los símbolos de Christoffel.

### Cálculos varios (41–45)
41. Curvatura de $\alpha(t) = (2\cos t, 2\sin t)$.
42. Longitud de $\alpha(t) = \left(t, \tfrac{2}{3}t^{3/2}\right)$ en $[0, 1]$.
43. Curvatura y torsión de $(t, t^2, t^3)$.
44. Curvatura gaussiana del cilindro de radio $R$.
45. Área de la esfera de radio $R$.

### Aplicaciones y conceptos (46–50)
46. Enuncia el teorema egregio de Gauss.
47. ¿Por qué no existe un mapa plano sin distorsión de la Tierra?
48. ¿Cuál es la geodésica de la esfera que pasa por dos puntos dados?
49. Curvatura gaussiana del pseudoplano (tractoide).
50. Definición de geodésica.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $\alpha'(t) = (1, 2t)$</div>
<div class="r"><b>02</b> $\sqrt{2}$</div>
<div class="r"><b>03</b> $5$</div>
<div class="r"><b>04</b> $\alpha'(t) = (3t^2, 2t)$</div>
<div class="r"><b>05</b> $\sqrt{2}\,e^t$</div>
<div class="r"><b>06</b> $10$</div>
<div class="r"><b>07</b> $2\pi\sqrt{2}$</div>
<div class="r"><b>08</b> $\sqrt{2}$</div>
<div class="r"><b>09</b> $\sqrt{2} + \ln(1+\sqrt{2})$</div>
<div class="r"><b>10</b> $\alpha(s) = \left(1 + \dfrac{2s}{\sqrt{14}}, \dfrac{3s}{\sqrt{14}}, 1 - \dfrac{s}{\sqrt{14}}\right)$</div>
<div class="r"><b>11</b> $0$</div>
<div class="r"><b>12</b> $\dfrac{1}{5}$</div>
<div class="r"><b>13</b> $\dfrac{2}{(1+4t^2)^{3/2}}$</div>
<div class="r"><b>14</b> $\dfrac{1}{R}$</div>
<div class="r"><b>15</b> $\dfrac{1}{2}$</div>
<div class="r"><b>16</b> $0$</div>
<div class="r"><b>17</b> $0$</div>
<div class="r"><b>18</b> $\dfrac{1}{2}$</div>
<div class="r"><b>19</b> $\kappa = \dfrac{1}{5}, \ \tau = \dfrac{2}{5}$</div>
<div class="r"><b>20</b> $\kappa = \dfrac{a}{a^2+b^2}, \ \tau = \dfrac{b}{a^2+b^2}$</div>
<div class="r"><b>21</b> $T = \dfrac{1}{\sqrt{2}}(-\sin t, \cos t, 1)$</div>
<div class="r"><b>22</b> $N = (-\cos t, -\sin t, 0)$</div>
<div class="r"><b>23</b> $B = \dfrac{1}{\sqrt{2}}(\sin t, -\cos t, 1)$</div>
<div class="r"><b>24</b> $T' = \kappa N, \ N' = -\kappa T + \tau B, \ B' = -\tau N$</div>
<div class="r"><b>25</b> $\kappa = \dfrac{\lvert\alpha' \times \alpha''\rvert}{\lvert\alpha'\rvert^{3}}$</div>
<div class="r"><b>26</b> $E = X_u \cdot X_u, \ F = X_u \cdot X_v, \ G = X_v \cdot X_v$</div>
<div class="r"><b>27</b> $I = du^2 + dv^2$</div>
<div class="r"><b>28</b> $I = dr^2 + r^2\, d\theta^2$</div>
<div class="r"><b>29</b> $I = \sin^2\phi\, d\theta^2 + d\phi^2$</div>
<div class="r"><b>30</b> $dA = \sqrt{EG - F^2}\, du\, dv$</div>
<div class="r"><b>31</b> $L = X_{uu}\cdot n, \ M = X_{uv}\cdot n, \ N = X_{vv}\cdot n$</div>
<div class="r"><b>32</b> $K = \dfrac{LN - M^2}{EG - F^2}$</div>
<div class="r"><b>33</b> $H = \dfrac{EN - 2FM + GL}{2(EG - F^2)}$</div>
<div class="r"><b>34</b> $\dfrac{1}{R^2}$</div>
<div class="r"><b>35</b> $K = 0$</div>
<div class="r"><b>36</b> $\ddot u^k + \sum_{i,j} \Gamma^k_{ij}\dot u^i \dot u^j = 0$</div>
<div class="r"><b>37</b> Rectas</div>
<div class="r"><b>38</b> Círculos máximos</div>
<div class="r"><b>39</b> Hélices (incluidas generatrices y circunferencias como casos límite)</div>
<div class="r"><b>40</b> $\Gamma^k_{ij} = \dfrac{1}{2} g^{kl}\left(\partial_i g_{jl} + \partial_j g_{il} - \partial_l g_{ij}\right)$</div>
<div class="r"><b>41</b> $\dfrac{1}{2}$</div>
<div class="r"><b>42</b> $\dfrac{2}{3}\left(2\sqrt{2} - 1\right)$</div>
<div class="r"><b>43</b> $\kappa = \dfrac{2\sqrt{9t^4 + 9t^2 + 1}}{(1+4t^2+9t^4)^{3/2}}, \ \tau = \dfrac{3}{9t^4 + 9t^2 + 1}$</div>
<div class="r"><b>44</b> $K = 0$</div>
<div class="r"><b>45</b> $4\pi R^2$</div>
<div class="r"><b>46</b> $K$ es intrínseca: depende solo de $E, F, G$</div>
<div class="r"><b>47</b> $K_{S^2} = 1/R^2 \neq 0 = K_{\text{plano}}$</div>
<div class="r"><b>48</b> El círculo máximo que los contiene</div>
<div class="r"><b>49</b> $K = -1$</div>
<div class="r"><b>50</b> Curva con aceleración tangencial nula (mínima local)</div>
</div>
