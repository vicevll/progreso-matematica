# Cálculo diferencial · 50 ejercicios

**Cuaderno de práctica · Cálculo · Universidad 1**
*Formulario completo, 50 ejercicios por niveles y solucionario solo con resultados.*

---

## Formulario

### Definición de la derivada

$$f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$$

### Reglas básicas

| Regla | Fórmula |
|---|---|
| Constante | $(c)'=0$ |
| Potencia | $(x^n)'=nx^{n-1}$ |
| Múltiplo constante | $(cf)'=cf'$ |
| Suma | $(f\pm g)'=f'\pm g'$ |
| Producto | $(fg)'=f'g+fg'$ |
| Cociente | $\left(\dfrac{f}{g}\right)'=\dfrac{f'g-fg'}{g^2}$ |
| Cadena | $(f(g(x)))'=f'(g(x))\,g'(x)$ |

### Derivadas notables

| Función | Derivada |
|---|---|
| $e^x$ | $e^x$ |
| $a^x$ | $a^x\ln a$ |
| $\ln x$ | $\dfrac{1}{x}$ |
| $\text{sen}\,x$ | $\cos x$ |
| $\cos x$ | $-\text{sen}\,x$ |
| $\tan x$ | $\sec^2 x$ |
| $\arcsin x$ | $\dfrac{1}{\sqrt{1-x^2}}$ |
| $\arctan x$ | $\dfrac{1}{1+x^2}$ |

### Orden superior, tangente y aproximación

$$f''(x)=\frac{d}{dx}f'(x)\qquad y-f(a)=f'(a)(x-a)\qquad f(x)\approx f(a)+f'(a)(x-a)$$

### Extremos, concavidad y teoremas

| Concepto | Criterio |
|---|---|
| Punto crítico | $f'(x)=0$ o $f'$ no existe |
| Máximo local | $f'$ pasa de $+$ a $-$ (o $f''<0$) |
| Mínimo local | $f'$ pasa de $-$ a $+$ (o $f''>0$) |
| Cóncava hacia arriba | $f''>0$ |
| Cóncava hacia abajo | $f''<0$ |
| Punto de inflexión | $f''$ cambia de signo |
| Valor medio | $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ |
| L'Hôpital | $\lim\dfrac{f}{g}=\lim\dfrac{f'}{g'}$ en $\dfrac{0}{0}$ o $\dfrac{\infty}{\infty}$ |

### Razones relacionadas

$$\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}\qquad \frac{dA}{dt}=2\pi r\frac{dr}{dt}\qquad \frac{dV}{dt}=3a^2\frac{da}{dt}$$

---

## Ejercicios (50)

### Nivel 1 — Reglas básicas

1. Deriva $f(x)=7x^5-3x^2+4x-9$.
2. Deriva $f(x)=x^3-6x^2+5x$.
3. Deriva $f(x)=\dfrac{1}{x^3}$.
4. Deriva $f(x)=\sqrt{x}$.
5. Deriva $f(x)=x^2e^x$.
6. Deriva $f(x)=x\ln x$.
7. Deriva $f(x)=\dfrac{x^2}{x+1}$.
8. Deriva $f(x)=\dfrac{x-1}{x+2}$.
9. Deriva $f(x)=3\,\text{sen}\,x+2\cos x$.
10. Deriva $f(x)=\tan x$.

### Nivel 2 — Regla de la cadena

11. Deriva $f(x)=(2x+1)^6$.
12. Deriva $f(x)=(x^2+3x)^4$.
13. Deriva $f(x)=e^{3x^2}$.
14. Deriva $f(x)=\ln(x^2+1)$.
15. Deriva $f(x)=\text{sen}(4x)$.
16. Deriva $f(x)=\cos(x^2)$.
17. Deriva $f(x)=\sqrt{4x+1}$.
18. Deriva $f(x)=e^{-x}\,\text{sen}\,x$.
19. Deriva $f(x)=\ln(\text{sen}\,x)$.
20. Deriva $f(x)=x^2\cos x$.

### Nivel 3 — Derivación implícita y orden superior

21. De $x^2+y^2=25$, halla $\dfrac{dy}{dx}$.
22. De $x^2+xy+y^2=7$, halla $\dfrac{dy}{dx}$.
23. De $y^2=x^3$, halla $\dfrac{dy}{dx}$.
24. De $xy=4$, halla $\dfrac{dy}{dx}$.
25. $f(x)=x^3-3x^2$: halla $f''(x)$.
26. $f(x)=\text{sen}\,x$: halla $f''(x)$.
27. $f(x)=e^{2x}$: halla $f''(x)$.
28. $f(x)=\ln x$: halla $f''(x)$.
29. $f(x)=x^4$: halla $f'''(x)$.
30. $f(x)=xe^x$: halla $f''(x)$.

### Nivel 4 — Tangentes y aproximación lineal

31. Recta tangente a $y=x^2$ en $x=3$.
32. Recta tangente a $y=x^3$ en $x=1$.
33. Recta tangente a $y=\ln x$ en $x=1$.
34. Recta tangente a $y=e^x$ en $x=0$.
35. Recta tangente a $y=\sqrt{x}$ en $x=4$.
36. Aproxima $\sqrt{16.1}$ con la tangente en $a=16$.
37. Aproxima $e^{0.05}$ con la tangente en $a=0$.
38. Aproxima $\ln(1.02)$ con la tangente en $a=1$.

### Nivel 5 — Extremos, optimización y concavidad

39. Halla los extremos de $f(x)=x^3-3x$.
40. Halla los extremos de $f(x)=x^3-6x^2+9x$.
41. Halla los extremos de $f(x)=x^2-4x+3$.
42. Analiza la concavidad de $f(x)=x^3$.
43. Halla el punto de inflexión de $f(x)=x^3-3x^2$.
44. Maximiza el área de un rectángulo de perímetro $40$.
45. Dos números suman $20$: maximiza su producto.
46. Con $100$ m de cerca se cerca un rectángulo apoyado en un río (sin cerca en ese lado): maximiza el área.

### Nivel 6 — Razones relacionadas y L'Hôpital

47. Un globo esférico se infla con $\dfrac{dV}{dt}=100$ cm$^3$/s. Halla $\dfrac{dr}{dt}$ cuando $r=5$ cm.
48. Un cubo crece con $\dfrac{da}{dt}=2$ cm/s. Halla $\dfrac{dV}{dt}$ cuando $a=3$ cm.
49. Un círculo se expande con $\dfrac{dr}{dt}=0.5$ cm/s. Halla $\dfrac{dA}{dt}$ cuando $r=10$ cm.
50. Calcula $\displaystyle\lim_{x\to0}\frac{e^x-1}{x}$.

---

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $35x^4-6x+4$</div>
<div class="r"><b>02</b> $3x^2-12x+5$</div>
<div class="r"><b>03</b> $-\dfrac{3}{x^4}$</div>
<div class="r"><b>04</b> $\dfrac{1}{2\sqrt{x}}$</div>
<div class="r"><b>05</b> $e^x(x^2+2x)$</div>
<div class="r"><b>06</b> $\ln x+1$</div>
<div class="r"><b>07</b> $\dfrac{x^2+2x}{(x+1)^2}$</div>
<div class="r"><b>08</b> $\dfrac{3}{(x+2)^2}$</div>
<div class="r"><b>09</b> $3\cos x-2\,\text{sen}\,x$</div>
<div class="r"><b>10</b> $\sec^2 x$</div>
<div class="r"><b>11</b> $12(2x+1)^5$</div>
<div class="r"><b>12</b> $4(x^2+3x)^3(2x+3)$</div>
<div class="r"><b>13</b> $6xe^{3x^2}$</div>
<div class="r"><b>14</b> $\dfrac{2x}{x^2+1}$</div>
<div class="r"><b>15</b> $4\cos(4x)$</div>
<div class="r"><b>16</b> $-2x\,\text{sen}(x^2)$</div>
<div class="r"><b>17</b> $\dfrac{2}{\sqrt{4x+1}}$</div>
<div class="r"><b>18</b> $e^{-x}(\cos x-\text{sen}\,x)$</div>
<div class="r"><b>19</b> $\cot x$</div>
<div class="r"><b>20</b> $2x\cos x-x^2\,\text{sen}\,x$</div>
<div class="r"><b>21</b> $-\dfrac{x}{y}$</div>
<div class="r"><b>22</b> $-\dfrac{2x+y}{x+2y}$</div>
<div class="r"><b>23</b> $\dfrac{3x^2}{2y}$</div>
<div class="r"><b>24</b> $-\dfrac{y}{x}$</div>
<div class="r"><b>25</b> $6x-6$</div>
<div class="r"><b>26</b> $-\text{sen}\,x$</div>
<div class="r"><b>27</b> $4e^{2x}$</div>
<div class="r"><b>28</b> $-\dfrac{1}{x^2}$</div>
<div class="r"><b>29</b> $24x$</div>
<div class="r"><b>30</b> $e^x(x+2)$</div>
<div class="r"><b>31</b> $y=6x-9$</div>
<div class="r"><b>32</b> $y=3x-2$</div>
<div class="r"><b>33</b> $y=x-1$</div>
<div class="r"><b>34</b> $y=x+1$</div>
<div class="r"><b>35</b> $y=\dfrac{x}{4}+1$</div>
<div class="r"><b>36</b> $4.0125$</div>
<div class="r"><b>37</b> $1.05$</div>
<div class="r"><b>38</b> $0.02$</div>
<div class="r"><b>39</b> Máximo $(-1,2)$; mínimo $(1,-2)$</div>
<div class="r"><b>40</b> Máximo $(1,4)$; mínimo $(3,0)$</div>
<div class="r"><b>41</b> Mínimo $(2,-1)$</div>
<div class="r"><b>42</b> Cóncava hacia arriba si $x>0$; hacia abajo si $x<0$</div>
<div class="r"><b>43</b> $(1,-2)$</div>
<div class="r"><b>44</b> $100$ (cuadrado de lado $10$)</div>
<div class="r"><b>45</b> $10$ y $10$; producto $100$</div>
<div class="r"><b>46</b> $1250$ (lados $50$ y $25$)</div>
<div class="r"><b>47</b> $\dfrac{1}{\pi}\approx0.318$ cm/s</div>
<div class="r"><b>48</b> $54$ cm$^3$/s</div>
<div class="r"><b>49</b> $10\pi\approx31.42$ cm$^2$/s</div>
<div class="r"><b>50</b> $1$</div>
</div>
