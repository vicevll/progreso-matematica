# Ecuaciones en derivadas parciales · formulario y práctica

## Formulario

### Clasificación de EDP de segundo orden

$$A\,u_{xx}+B\,u_{xy}+C\,u_{yy}+\cdots=0,\qquad \Delta=B^2-4AC.$$

1. $\Delta<0$: **elíptica** (equilibrio; prototipo Laplace).
2. $\Delta=0$: **parabólica** (difusión; prototipo calor).
3. $\Delta>0$: **hiperbólica** (ondas; prototipo onda).

### Laplaciano y ecuaciones de equilibrio

$$\nabla^2 u=u_{xx}+u_{yy}=0 \quad\text{(Laplace)},\qquad \nabla^2 u=f \quad\text{(Poisson)}.$$

1. **Dirichlet:** se fija $u$ en la frontera.
2. **Neumann:** se fija la derivada normal $\partial u/\partial n$ en la frontera.

### Ecuación del calor

$$u_t=k\,u_{xx},\qquad k>0.$$

Solución por modos en $[0,L]$ con extremos nulos $u(0,t)=u(L,t)=0$:

$$u(x,t)=\sum_{n=1}^{\infty}b_n\,\text{sen}\frac{n\pi x}{L}\,e^{-k(n\pi/L)^2t}.$$

Estabilidad del esquema explícito:

$$\frac{k\,\Delta t}{\Delta x^2}\le\frac{1}{2}.$$

### Ecuación de onda

$$u_{tt}=c^2\,u_{xx},\qquad u(x,t)=F(x-ct)+G(x+ct).$$

Condición CFL del esquema explícito:

$$c\,\Delta t\le\Delta x.$$

### Separación de variables

$$u(x,t)=X(x)\,T(t),\qquad X''+\lambda X=0,\qquad \lambda_n=\left(\frac{n\pi}{L}\right)^2,$$

$$X_n(x)=\text{sen}\frac{n\pi x}{L},\qquad T_n(t)=e^{-k(n\pi/L)^2t}.$$

Coeficientes de la condición inicial $u(x,0)=f(x)$:

$$b_n=\frac{2}{L}\int_0^L f(x)\,\text{sen}\frac{n\pi x}{L}\,dx.$$

### Diferencias finitas

$$u_{xx}\approx\frac{u_{i+1}-2u_i+u_{i-1}}{h^2},\qquad u_t\approx\frac{u_i^{n+1}-u_i^{n}}{\Delta t}.$$

## Ejercicios (50)

### A. Clasificación

1. Clasifica $u_{xx}+u_{yy}=0$.
2. Clasifica $u_t-u_{xx}=0$.
3. Clasifica $u_{tt}-u_{xx}=0$.
4. Clasifica $u_{xx}+4u_{xy}+4u_{yy}=0$.
5. Clasifica $u_{xx}-3u_{xy}+2u_{yy}=0$.
6. Clasifica $u_{xx}+2u_{xy}+3u_{yy}=0$.
7. Clasifica $u_{xx}-u_{yy}=0$.
8. Clasifica $u_{xx}+2u_{xy}+u_{yy}=0$.
9. Clasifica $2u_{xx}+3u_{xy}+u_{yy}=0$.
10. Clasifica $u_{xx}+u_{xy}+u_{yy}=0$.
11. Clasifica $u_{xx}+6u_{xy}+9u_{yy}=0$.
12. Clasifica $u_{xx}-4u_{xy}+4u_{yy}=0$.

### B. Laplace, Poisson y funciones armónicas

13. ¿Es armónica $u=x^2-y^2$?
14. ¿Es armónica $u=x^2+y^2$?
15. ¿Es armónica $u=e^x\,\text{sen}\,y$?
16. ¿Es armónica $u=e^x\cos y$?
17. ¿Es armónica $u=xy$?
18. ¿Es armónica $u=x^3-3xy^2$?
19. Resuelve $u_{xx}=0$ con $u(0)=0$ y $u(1)=5$.
20. Resuelve $u_{xx}=0$ con $u(0)=10$ y $u(2)=30$.
21. Verifica que $u=x^2$ resuelve $u_{xx}=2$.
22. ¿Es armónica $u=\ln\sqrt{x^2+y^2}$ en $r>0$?

### C. Ecuación del calor

23. Verifica que $u=e^{-t}\,\text{sen}\,x$ satisface $u_t=u_{xx}$.
24. Verifica que $u=e^{-4t}\,\text{sen}\,2x$ satisface $u_t=u_{xx}$.
25. Verifica que $u=e^{-9t}\,\text{sen}\,3x$ satisface $u_t=u_{xx}$.
26. Calor con $k=1$ y $u(x,0)=\text{sen}\,x$: halla $u(x,t)$.
27. Calor con $k=1$ y $u(x,0)=3\,\text{sen}\,2x$: halla $u(x,t)$.
28. Calor con $k=1$ y $u(x,0)=5\,\text{sen}\,3x$: halla $u(x,t)$.
29. Calor con $k=1$ y $u(x,0)=2\,\text{sen}\,x+\text{sen}\,2x$: halla $u(x,t)$.
30. Calor con extremos nulos: ¿a qué tiende $u(x,t)$ cuando $t\to\infty$?
31. ¿Suaviza el calor las irregularidades de la condición inicial?
32. Máximo $\Delta t$ estable con $k=1$ y $\Delta x=0.1$.
33. Máximo $\Delta t$ estable con $k=0.5$ y $\Delta x=0.1$.
34. Máximo $\Delta t$ estable con $k=2$ y $\Delta x=0.05$.

### D. Ecuación de onda

35. Verifica que $u=\text{sen}\,x\cos t$ satisface $u_{tt}=u_{xx}$.
36. Verifica que $u=\text{sen}\,x\cos 2t$ satisface $u_{tt}=4u_{xx}$.
37. Escribe la forma general de D'Alembert para $u_{tt}=c^2u_{xx}$.
38. Onda con $c=1$, $u(x,0)=\text{sen}\,x$ y $u_t(x,0)=0$: halla $u(x,t)$.
39. Onda con $c=2$, $u(x,0)=\text{sen}\,x$ y $u_t(x,0)=0$: halla $u(x,t)$.
40. Onda con $c=1$, $u(x,0)=0$ y $u_t(x,0)=\text{sen}\,x$: halla $u(x,t)$.
41. ¿Se atenúan las ondas como se atenúa el calor?
42. Con $c=3$ y $\Delta x=0.3$, ¿qué cota CFL cumple $\Delta t$?

### E. Separación de variables y Fourier

43. Modos espaciales del calor en $[0,L]$ con extremos nulos.
44. Valores propios $\lambda_n$ del problema $X''+\lambda X=0$ con $X(0)=X(L)=0$.
45. Factor temporal $T_n(t)$ del calor con $k$.
46. Fórmula del coeficiente $b_n$ para $u(x,0)=f(x)$.
47. Primer modo del calor en $[0,\pi]$ con $k=1$.

### F. Diferencias finitas

48. Aproximación central de $u_{xx}$.
49. Aproximación progresiva de $u_t$.
50. Condición de estabilidad del esquema explícito del calor.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> Elíptica</div>
<div class="r"><b>02</b> Parabólica</div>
<div class="r"><b>03</b> Hiperbólica</div>
<div class="r"><b>04</b> Parabólica</div>
<div class="r"><b>05</b> Hiperbólica</div>
<div class="r"><b>06</b> Elíptica</div>
<div class="r"><b>07</b> Hiperbólica</div>
<div class="r"><b>08</b> Parabólica</div>
<div class="r"><b>09</b> Hiperbólica</div>
<div class="r"><b>10</b> Elíptica</div>
<div class="r"><b>11</b> Parabólica</div>
<div class="r"><b>12</b> Parabólica</div>
<div class="r"><b>13</b> Sí, $\nabla^2u=0$</div>
<div class="r"><b>14</b> No, $\nabla^2u=4$</div>
<div class="r"><b>15</b> Sí, $\nabla^2u=0$</div>
<div class="r"><b>16</b> Sí, $\nabla^2u=0$</div>
<div class="r"><b>17</b> Sí, $\nabla^2u=0$</div>
<div class="r"><b>18</b> Sí, $\nabla^2u=0$</div>
<div class="r"><b>19</b> $u=5x$</div>
<div class="r"><b>20</b> $u=10+10x$</div>
<div class="r"><b>21</b> Sí, $u_{xx}=2$</div>
<div class="r"><b>22</b> Sí, $\nabla^2u=0$</div>
<div class="r"><b>23</b> Sí, $u_t=u_{xx}$</div>
<div class="r"><b>24</b> Sí, $u_t=u_{xx}$</div>
<div class="r"><b>25</b> Sí, $u_t=u_{xx}$</div>
<div class="r"><b>26</b> $u=e^{-t}\text{sen}\,x$</div>
<div class="r"><b>27</b> $u=3e^{-4t}\text{sen}\,2x$</div>
<div class="r"><b>28</b> $u=5e^{-9t}\text{sen}\,3x$</div>
<div class="r"><b>29</b> $u=2e^{-t}\text{sen}\,x+e^{-4t}\text{sen}\,2x$</div>
<div class="r"><b>30</b> $u\to 0$</div>
<div class="r"><b>31</b> Sí</div>
<div class="r"><b>32</b> $\Delta t\le 0.005$</div>
<div class="r"><b>33</b> $\Delta t\le 0.01$</div>
<div class="r"><b>34</b> $\Delta t\le 0.000625$</div>
<div class="r"><b>35</b> Sí, $u_{tt}=u_{xx}$</div>
<div class="r"><b>36</b> Sí, $u_{tt}=4u_{xx}$</div>
<div class="r"><b>37</b> $F(x-ct)+G(x+ct)$</div>
<div class="r"><b>38</b> $u=\text{sen}\,x\cos t$</div>
<div class="r"><b>39</b> $u=\text{sen}\,x\cos 2t$</div>
<div class="r"><b>40</b> $u=\text{sen}\,x\,\text{sen}\,t$</div>
<div class="r"><b>41</b> No, conservan su forma</div>
<div class="r"><b>42</b> $\Delta t\le 0.1$</div>
<div class="r"><b>43</b> $X_n=\text{sen}\dfrac{n\pi x}{L}$</div>
<div class="r"><b>44</b> $\lambda_n=\left(\dfrac{n\pi}{L}\right)^2$</div>
<div class="r"><b>45</b> $T_n=e^{-k(n\pi/L)^2t}$</div>
<div class="r"><b>46</b> $b_n=\dfrac{2}{L}\int_0^L f(x)\text{sen}\dfrac{n\pi x}{L}\,dx$</div>
<div class="r"><b>47</b> $u=\text{sen}\,x\,e^{-t}$</div>
<div class="r"><b>48</b> $\dfrac{u_{i+1}-2u_i+u_{i-1}}{h^2}$</div>
<div class="r"><b>49</b> $\dfrac{u_i^{n+1}-u_i^{n}}{\Delta t}$</div>
<div class="r"><b>50</b> $\dfrac{k\,\Delta t}{\Delta x^2}\le\dfrac{1}{2}$</div>
</div>
