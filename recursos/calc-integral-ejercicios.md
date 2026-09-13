# Cálculo integral · 50 ejercicios

**Cuaderno de práctica · Cálculo · Universidad 1–2**
*Formulario explicado, 50 integrales por niveles y solucionario solo con resultados.*

---

## Formulario

En todas las fórmulas, $\displaystyle\int$ es el signo integral (una S alargada, de "suma"): representa la acumulación de infinitas rebanadas. La letra $C$ es la **constante de integración** (un número arbitrario) y aparece siempre en la integral indefinida, porque todas las antiderivadas de una función difieren en una constante. El símbolo $dx$ es el **diferencial de $x$**: indica la variable de integración y el ancho infinitesimal de cada rebanada.

### Integrales inmediatas

| Integral | Resultado | Cómo se lee |
|---|---|---|
| $\displaystyle\int k\,dx$ | $kx + C$ | $k$ es una constante: integrarla acumula $kx$. |
| $\displaystyle\int x^{n}\,dx$ | $\dfrac{x^{n+1}}{n+1} + C \quad (n \neq -1)$ | Regla de la potencia: sube el exponente en 1 y divide entre el nuevo exponente. |
| $\displaystyle\int \frac{1}{x}\,dx$ | $\ln\mid x\mid + C$ | La potencia $n=-1$ es la excepción; el valor absoluto cubre $x<0$. |
| $\displaystyle\int e^{x}\,dx$ | $e^{x} + C$ | La exponencial es su propia derivada. |
| $\displaystyle\int a^{x}\,dx$ | $\dfrac{a^{x}}{\ln a} + C$ | Se divide entre $\ln a$ para compensar ese factor. |
| $\displaystyle\int \operatorname{sen}x\,dx$ | $-\cos x + C$ | Con signo menos porque $(\cos x)' = -\operatorname{sen}x$. |
| $\displaystyle\int \cos x\,dx$ | $\operatorname{sen}x + C$ | La derivada del seno es el coseno. |
| $\displaystyle\int \sec^{2}x\,dx$ | $\tan x + C$ | La derivada de $\tan x$ es $\sec^2 x$. |
| $\displaystyle\int \frac{1}{1+x^{2}}\,dx$ | $\arctan x + C$ | Antiderivada del arco tangente. |
| $\displaystyle\int \frac{1}{\sqrt{1-x^{2}}}\,dx$ | $\arcsin x + C$ | Antiderivada del arco seno. |

### Propiedades

$$\int \big[\alpha f + \beta g\big]\,dx = \alpha\!\int f\,dx + \beta\!\int g\,dx \qquad \int_a^b f = -\int_b^a f \qquad \int_a^a f = 0$$

Las letras $\alpha$ y $\beta$ son constantes que salen del signo integral (linealidad). Los números $a$ y $b$ son los **límites de integración** (de dónde a dónde se acumula). Cambiar el orden de los límites cambia el signo, y acumular de $a$ a $a$ da cero.

### Teorema fundamental del cálculo

$$\frac{d}{dx}\int_a^x f(t)\,dt = f(x) \qquad \int_a^b f(x)\,dx = F(b) - F(a)$$

En la primera igualdad, $\frac{d}{dx}$ significa "deriva respecto a $x$" y $t$ es una variable muda: derivar una acumulación devuelve la función, porque derivar e integrar son inversos. En la segunda, $F$ es cualquier antiderivada de $f$ ($F' = f$), y $F(b) - F(a)$ es evaluar $F$ en el límite superior $b$ menos su valor en el límite inferior $a$ (la constante $C$ se cancela en esa resta).

### Técnicas

1. **Sustitución:** $\displaystyle\int f(g(x))\,g'(x)\,dx = \int f(u)\,du$, con $u = g(x)$. La letra $u$ es la función interior, y $du = g'(x)\,dx$ es su diferencial. Es la regla de la cadena al revés.
2. **Por partes:** $\displaystyle\int u\,dv = uv - \int v\,du$ (orden LIATE). Se parte el integrando en dos piezas $u$ y $dv$; luego $du$ es la derivada de $u$ y $v$ la antiderivada de $dv$. Es la regla del producto al revés.
3. **Fracciones parciales:** descompón $P(x)/Q(x)$ en fracciones simples $\frac{A}{x-r}$ o $\frac{Ax+B}{x^2+bx+c}$; las primeras dan logaritmos y las segundas, logaritmos y arcotangentes.
4. **Sustitución trigonométrica:** elimina raíces cuadráticas usando identidades pitagóricas ($a$ es una constante positiva):

| Radical | Sustitución | Identidad que usa |
|---|---|---|
| $\sqrt{a^{2}-x^{2}}$ | $x = a\operatorname{sen}\theta$ | $1-\operatorname{sen}^2\theta = \cos^2\theta$ |
| $\sqrt{a^{2}+x^{2}}$ | $x = a\tan\theta$ | $1+\tan^2\theta = \sec^2\theta$ |
| $\sqrt{x^{2}-a^{2}}$ | $x = a\sec\theta$ | $\sec^2\theta-1 = \tan^2\theta$ |

### Aplicaciones

| Cantidad | Fórmula | Significado de los símbolos |
|---|---|---|
| Área entre curvas | $A = \displaystyle\int_a^b \big\lvert f-g\big\rvert\,dx$ | $f$ y $g$ son las curvas; $a$ y $b$ sus cortes. |
| Volumen (discos) | $V = \pi\displaystyle\int_a^b [f(x)]^{2}\,dx$ | Giro de $y=f(x)$ alrededor del eje $x$; el radio es $f(x)$. |
| Volumen (arandelas) | $V = \pi\displaystyle\int_a^b \big([R]^{2}-[r]^{2}\big)\,dx$ | $R$ es el radio exterior y $r$ el interior. |
| Volumen (cascarones) | $V = 2\pi\displaystyle\int_a^b x\,f(x)\,dx$ | Giro alrededor del eje $y$; el radio de cada tubo es $x$. |
| Longitud de arco | $L = \displaystyle\int_a^b \sqrt{1+[f'(x)]^{2}}\,dx$ | $f'$ es la derivada de $f$ (la pendiente). |
| Valor promedio | $\bar f = \dfrac{1}{b-a}\displaystyle\int_a^b f$ | La altura del rectángulo de igual área. |
| Trabajo | $W = \displaystyle\int_a^b F(x)\,dx$ | $F(x)$ es la fuerza y $x$ el desplazamiento. |

### Integrales impropias

$$\int_a^{\infty} f(x)\,dx = \lim_{t\to\infty}\int_a^t f(x)\,dx \qquad \int_1^{\infty}\frac{1}{x^{p}}\,dx \text{ converge si } p>1$$

Cuando el límite superior es $\infty$, la integral se define como el límite cuando $t$ crece sin fin. La letra $p$ es el exponente del denominador: con $p > 1$ la integral converge (da un número finito); con $p \leq 1$, diverge. Si la función se dispara dentro del intervalo, se usa un límite análogo acercándose al punto problemático.

---

## Ejercicios (50)

### Nivel 1 — Integrales inmediatas

1. $\displaystyle\int x^{4}\,dx$
2. $\displaystyle\int \left(2x^{3} - 3x^{2} + 1\right)dx$
3. $\displaystyle\int \frac{1}{x}\,dx$
4. $\displaystyle\int e^{3x}\,dx$
5. $\displaystyle\int \cos 4x\,dx$
6. $\displaystyle\int \sec^{2}x\,dx$
7. $\displaystyle\int \frac{1}{1+x^{2}}\,dx$
8. $\displaystyle\int \sqrt{x}\,dx$

### Nivel 2 — Sustitución

9. $\displaystyle\int 2x\left(x^{2}+3\right)^{5}\,dx$
10. $\displaystyle\int x\,e^{x^{2}}\,dx$
11. $\displaystyle\int \cos x\,\operatorname{sen}^{3}x\,dx$
12. $\displaystyle\int \frac{\ln x}{x}\,dx$
13. $\displaystyle\int \frac{x}{\sqrt{x^{2}+9}}\,dx$
14. $\displaystyle\int \frac{e^{\sqrt{x}}}{\sqrt{x}}\,dx$
15. $\displaystyle\int \frac{3x^{2}}{x^{3}+1}\,dx$
16. $\displaystyle\int \tan x\,dx$

### Nivel 3 — Integración por partes

17. $\displaystyle\int x\,e^{x}\,dx$
18. $\displaystyle\int x\cos x\,dx$
19. $\displaystyle\int x\operatorname{sen}x\,dx$
20. $\displaystyle\int \ln x\,dx$
21. $\displaystyle\int x^{2}e^{x}\,dx$
22. $\displaystyle\int \arctan x\,dx$
23. $\displaystyle\int x^{2}\ln x\,dx$
24. $\displaystyle\int e^{x}\operatorname{sen}x\,dx$

### Nivel 4 — Trigonométricas

25. $\displaystyle\int \operatorname{sen}^{2}x\,dx$
26. $\displaystyle\int \cos^{2}x\,dx$
27. $\displaystyle\int \operatorname{sen}^{3}x\,dx$
28. $\displaystyle\int \tan^{2}x\,dx$
29. $\displaystyle\int \sec x\,dx$
30. $\displaystyle\int \operatorname{sen}x\cos x\,dx$

### Nivel 5 — Racionales y fracciones parciales

31. $\displaystyle\int \frac{1}{x^{2}-1}\,dx$
32. $\displaystyle\int \frac{1}{x^{2}+x}\,dx$
33. $\displaystyle\int \frac{x+3}{x^{2}+3x+2}\,dx$
34. $\displaystyle\int \frac{1}{x^{2}+4}\,dx$
35. $\displaystyle\int \frac{1}{x^{2}+2x+5}\,dx$
36. $\displaystyle\int \frac{2x+1}{x^{2}+x+1}\,dx$

### Nivel 6 — Sustitución trigonométrica

37. $\displaystyle\int \sqrt{1-x^{2}}\,dx$
38. $\displaystyle\int \frac{x^{2}}{\sqrt{1-x^{2}}}\,dx$
39. $\displaystyle\int \frac{1}{x^{2}\sqrt{x^{2}+1}}\,dx$
40. $\displaystyle\int \frac{1}{\left(x^{2}+1\right)^{3/2}}\,dx$

### Nivel 7 — Integrales definidas

41. $\displaystyle\int_0^1 x^{2}\,dx$
42. $\displaystyle\int_0^{\pi} \operatorname{sen}x\,dx$
43. $\displaystyle\int_1^{e} \frac{1}{x}\,dx$
44. $\displaystyle\int_0^1 e^{x}\,dx$
45. $\displaystyle\int_0^1 \frac{1}{1+x^{2}}\,dx$

### Nivel 8 — Aplicaciones

46. Halla el área entre $y=x$ y $y=x^{2}$ en $[0,1]$.
47. Halla el volumen al girar $y=\sqrt{x}$, $x\in[0,4]$, alrededor del eje $x$.
48. Halla el área entre $y=4-x^{2}$ y el eje $x$.

### Nivel 9 — Impropias

49. $\displaystyle\int_1^{\infty}\frac{1}{x^{2}}\,dx$
50. $\displaystyle\int_1^{\infty}\frac{1}{x^{3/2}}\,dx$

---

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $\dfrac{x^{5}}{5}+C$</div>
<div class="r"><b>02</b> $\dfrac{x^{4}}{2}-x^{3}+x+C$</div>
<div class="r"><b>03</b> $\ln\mid x\mid+C$</div>
<div class="r"><b>04</b> $\dfrac{1}{3}e^{3x}+C$</div>
<div class="r"><b>05</b> $\dfrac{1}{4}\operatorname{sen}4x+C$</div>
<div class="r"><b>06</b> $\tan x+C$</div>
<div class="r"><b>07</b> $\arctan x+C$</div>
<div class="r"><b>08</b> $\dfrac{2}{3}x^{3/2}+C$</div>
<div class="r"><b>09</b> $\dfrac{\left(x^{2}+3\right)^{6}}{6}+C$</div>
<div class="r"><b>10</b> $\dfrac{1}{2}e^{x^{2}}+C$</div>
<div class="r"><b>11</b> $\dfrac{\operatorname{sen}^{4}x}{4}+C$</div>
<div class="r"><b>12</b> $\dfrac{(\ln x)^{2}}{2}+C$</div>
<div class="r"><b>13</b> $\sqrt{x^{2}+9}+C$</div>
<div class="r"><b>14</b> $2e^{\sqrt{x}}+C$</div>
<div class="r"><b>15</b> $\ln\mid x^{3}+1\mid+C$</div>
<div class="r"><b>16</b> $-\ln\mid\cos x\mid+C$</div>
<div class="r"><b>17</b> $(x-1)e^{x}+C$</div>
<div class="r"><b>18</b> $x\operatorname{sen}x+\cos x+C$</div>
<div class="r"><b>19</b> $-x\cos x+\operatorname{sen}x+C$</div>
<div class="r"><b>20</b> $x\ln x-x+C$</div>
<div class="r"><b>21</b> $\left(x^{2}-2x+2\right)e^{x}+C$</div>
<div class="r"><b>22</b> $x\arctan x-\dfrac{1}{2}\ln\left(1+x^{2}\right)+C$</div>
<div class="r"><b>23</b> $\dfrac{x^{3}}{3}\ln x-\dfrac{x^{3}}{9}+C$</div>
<div class="r"><b>24</b> $\dfrac{e^{x}}{2}\left(\operatorname{sen}x-\cos x\right)+C$</div>
<div class="r"><b>25</b> $\dfrac{x}{2}-\dfrac{\operatorname{sen}2x}{4}+C$</div>
<div class="r"><b>26</b> $\dfrac{x}{2}+\dfrac{\operatorname{sen}2x}{4}+C$</div>
<div class="r"><b>27</b> $-\cos x+\dfrac{\cos^{3}x}{3}+C$</div>
<div class="r"><b>28</b> $\tan x-x+C$</div>
<div class="r"><b>29</b> $\ln\mid\sec x+\tan x\mid+C$</div>
<div class="r"><b>30</b> $\dfrac{\operatorname{sen}^{2}x}{2}+C$</div>
<div class="r"><b>31</b> $\dfrac{1}{2}\ln\left\lvert\dfrac{x-1}{x+1}\right\rvert+C$</div>
<div class="r"><b>32</b> $\ln\left\lvert\dfrac{x}{x+1}\right\rvert+C$</div>
<div class="r"><b>33</b> $2\ln\mid x+1\mid-\ln\mid x+2\mid+C$</div>
<div class="r"><b>34</b> $\dfrac{1}{2}\arctan\dfrac{x}{2}+C$</div>
<div class="r"><b>35</b> $\dfrac{1}{2}\arctan\dfrac{x+1}{2}+C$</div>
<div class="r"><b>36</b> $\ln\mid x^{2}+x+1\mid+C$</div>
<div class="r"><b>37</b> $\dfrac{1}{2}\left(x\sqrt{1-x^{2}}+\arcsin x\right)+C$</div>
<div class="r"><b>38</b> $\dfrac{1}{2}\left(\arcsin x-x\sqrt{1-x^{2}}\right)+C$</div>
<div class="r"><b>39</b> $-\dfrac{\sqrt{1+x^{2}}}{x}+C$</div>
<div class="r"><b>40</b> $\dfrac{x}{\sqrt{1+x^{2}}}+C$</div>
<div class="r"><b>41</b> $\dfrac{1}{3}$</div>
<div class="r"><b>42</b> $2$</div>
<div class="r"><b>43</b> $1$</div>
<div class="r"><b>44</b> $e-1$</div>
<div class="r"><b>45</b> $\dfrac{\pi}{4}$</div>
<div class="r"><b>46</b> $\dfrac{1}{6}$</div>
<div class="r"><b>47</b> $8\pi$</div>
<div class="r"><b>48</b> $\dfrac{32}{3}$</div>
<div class="r"><b>49</b> $1$</div>
<div class="r"><b>50</b> $2$</div>
</div>
