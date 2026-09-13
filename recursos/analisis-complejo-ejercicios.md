# Análisis complejo · Formulario y ejercicios

## Formulario

### Cauchy-Riemann y holomorfía

- $f(z) = u(x,y) + i\,v(x,y)$.
- Holomorfa $\iff$ Cauchy-Riemann: $u_x = v_y$, $u_y = -v_x$ (con parciales continuas).
- Derivada: $f'(z) = u_x + i\,v_x = v_y - i\,u_y$.
- $u$ y $v$ son armónicas: $u_{xx} + u_{yy} = 0$, $v_{xx} + v_{yy} = 0$.

### Integrales de contorno

- $\displaystyle\int_\gamma f(z)\,dz = \int_a^b f(\gamma(t))\,\gamma'(t)\,dt$.
- Acotación: $\left|\displaystyle\int_\gamma f\,dz\right| \leq \max_\gamma |f| \cdot \text{long}(\gamma)$.
- Cauchy-Goursat: $f$ holomorfa en un simplemente conexo y $\gamma$ cerrada $\Rightarrow \displaystyle\oint_\gamma f\,dz = 0$.
- Fórmula integral de Cauchy: $\displaystyle f(z_0) = \frac{1}{2\pi i}\oint_\gamma \frac{f(z)}{z-z_0}\,dz$.
- Derivadas: $\displaystyle f^{(n)}(z_0) = \frac{n!}{2\pi i}\oint_\gamma \frac{f(z)}{(z-z_0)^{n+1}}\,dz$.

### Series de Taylor y Laurent

- Taylor: $\displaystyle f(z) = \sum_{n=0}^{\infty} a_n (z-z_0)^n$, con $a_n = \dfrac{f^{(n)}(z_0)}{n!}$.
- Laurent: $\displaystyle f(z) = \sum_{n=-\infty}^{\infty} c_n (z-z_0)^n$.
- El residuo es $c_{-1}$.

### Singularidades y residuos

- Evitable, polo de orden $m$, o esencial.
- Polo simple: $\text{Res}(f,z_0) = \displaystyle\lim_{z\to z_0}(z-z_0)f(z)$.
- Polo de orden $m$: $\text{Res}(f,z_0) = \dfrac{1}{(m-1)!}\displaystyle\lim_{z\to z_0}\frac{d^{m-1}}{dz^{m-1}}\big[(z-z_0)^m f(z)\big]$.
- Teorema de los residuos: $\displaystyle\oint_\gamma f(z)\,dz = 2\pi i \sum_k \text{Res}(f,z_k)$.

### Integrales reales con residuos

- $\displaystyle\int_{-\infty}^{\infty} f(x)\,dx = 2\pi i \sum_{\text{Im}\,z_k > 0} \text{Res}(f,z_k)$ (si $f \to 0$ en el arco).
- Trigonométrica: $z = e^{i\theta}$, $\cos\theta = \dfrac{z + z^{-1}}{2}$, $d\theta = \dfrac{dz}{iz}$.
- $\displaystyle\int_0^{2\pi}\frac{d\theta}{a + b\cos\theta} = \frac{2\pi}{\sqrt{a^2 - b^2}}$, para $a > |b|$.

## Ejercicios (50)

### Cauchy-Riemann y holomorfía

1. ¿Es holomorfa $f(z) = z^2$?
2. Verifica Cauchy-Riemann para $f(z) = e^z$.
3. ¿Es holomorfa $f(z) = \bar{z}$?
4. ¿Dónde es derivable $f(z) = |z|^2$?
5. ¿Es holomorfa $f(z) = x^2 + i\,y^2$?
6. Halla $f'(z)$ para $f(z) = z^3$.
7. Halla $f'(z)$ para $f(z) = \dfrac{1}{z}$.
8. ¿Es armónica $u = x^2 - y^2$? Halla su conjugada $v$.
9. Halla la conjugada armónica de $u = e^x\cos y$.
10. ¿Dónde es holomorfa $f(z) = \dfrac{1}{z^2+1}$?

### Integrales de contorno

11. Calcula $\displaystyle\oint_{|z|=1} z\,dz$.
12. Calcula $\displaystyle\oint_{|z|=1} \frac{dz}{z}$.
13. Calcula $\displaystyle\oint_{|z|=1} \frac{dz}{z^2}$.
14. Calcula $\displaystyle\oint_{|z|=1} \bar{z}\,dz$.
15. Calcula $\displaystyle\oint_{|z|=2} \frac{dz}{z-1}$.
16. Calcula $\displaystyle\oint_{|z|=3} \frac{dz}{z-2}$.
17. Calcula $\displaystyle\oint_{|z|=1} \frac{dz}{z-2}$.
18. Calcula $\displaystyle\oint_{|z|=1} e^z\,dz$.
19. Calcula $\displaystyle\oint_{|z|=2} \frac{dz}{z^2+1}$.
20. Calcula $\displaystyle\oint_{|z|=3} \frac{dz}{(z-1)(z-2)}$.
21. Calcula $\displaystyle\oint_{|z|=1} \frac{e^z}{z}\,dz$.
22. Calcula $\displaystyle\oint_{|z|=1} \frac{dz}{z(z-2)}$.

### Residuos y singularidades

23. Halla el residuo de $\dfrac{e^z}{z}$ en $0$.
24. Halla el residuo de $\dfrac{1}{z^2}$ en $0$.
25. Halla el residuo de $\dfrac{1}{z-1}$ en $z = 1$.
26. Halla el residuo de $\dfrac{1}{z^2+1}$ en $z = i$.
27. Halla el residuo de $\dfrac{e^z}{z-1}$ en $z = 1$.
28. Halla el residuo de $\dfrac{1}{z(z-1)}$ en $z = 1$.
29. Halla el residuo de $\dfrac{1}{z(z-1)}$ en $z = 0$.
30. Halla el residuo de $\dfrac{z}{z^2+4}$ en $z = 2i$.
31. Halla el residuo de $\dfrac{1}{(z-1)^2}$ en $z = 1$.
32. Clasifica la singularidad de $\dfrac{\text{sen}\,z}{z}$ en $0$.
33. Clasifica la singularidad de $e^{1/z}$ en $0$.
34. ¿Cuál es el orden del polo de $\dfrac{1}{(z-1)^3}$ en $z = 1$?
35. Halla el residuo de $\dfrac{\cos z}{z}$ en $0$.

### Integrales reales con residuos

36. Calcula $\displaystyle\int_{-\infty}^{\infty} \frac{dx}{x^2+1}$.
37. Calcula $\displaystyle\int_{-\infty}^{\infty} \frac{dx}{x^2+4}$.
38. Calcula $\displaystyle\int_{-\infty}^{\infty} \frac{dx}{(x^2+1)(x^2+4)}$.
39. Calcula $\displaystyle\int_{-\infty}^{\infty} \frac{dx}{(x^2+1)^2}$.
40. Calcula $\displaystyle\int_{-\infty}^{\infty} \frac{dx}{x^2+x+1}$.
41. Calcula $\displaystyle\int_0^{\infty} \frac{dx}{x^2+1}$.
42. Calcula $\displaystyle\int_0^{\infty} \frac{dx}{x^4+1}$.
43. Calcula $\displaystyle\int_0^{2\pi} \frac{d\theta}{2+\cos\theta}$.
44. Calcula $\displaystyle\int_0^{2\pi} \frac{d\theta}{5+4\cos\theta}$.
45. Calcula $\displaystyle\int_0^{2\pi} \frac{d\theta}{3+2\cos\theta}$.
46. Calcula $\displaystyle\int_{-\infty}^{\infty} \frac{dx}{x^2-2x+5}$.
47. Calcula $\displaystyle\int_{-\infty}^{\infty} \frac{\cos x}{x^2+1}\,dx$.
48. Calcula $\displaystyle\int_{-\infty}^{\infty} \frac{x\,\text{sen}\,x}{x^2+1}\,dx$.
49. Calcula $\displaystyle\int_{-\infty}^{\infty} \frac{dx}{(x^2+4)^2}$.
50. Calcula $\displaystyle\int_0^{2\pi} \frac{d\theta}{1+\frac{1}{2}\cos\theta}$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> Sí, holomorfa en todo $\mathbb{C}$</div>
<div class="r"><b>02</b> Sí: $u_x = v_y = e^x\cos y$, $u_y = -v_x = -e^x\,\text{sen}\,y$</div>
<div class="r"><b>03</b> No: $u_x = 1 \neq v_y = -1$</div>
<div class="r"><b>04</b> Solo en $z = 0$; no holomorfa en ningún abierto</div>
<div class="r"><b>05</b> Solo sobre la recta $y = x$; no holomorfa</div>
<div class="r"><b>06</b> $f'(z) = 3z^2$</div>
<div class="r"><b>07</b> $f'(z) = -\dfrac{1}{z^2}$ para $z \neq 0$</div>
<div class="r"><b>08</b> Sí ($u_{xx} + u_{yy} = 0$); $v = 2xy + C$</div>
<div class="r"><b>09</b> $v = e^x\,\text{sen}\,y + C$</div>
<div class="r"><b>10</b> En $\mathbb{C} \setminus \{i, -i\}$</div>
<div class="r"><b>11</b> $0$</div>
<div class="r"><b>12</b> $2\pi i$</div>
<div class="r"><b>13</b> $0$</div>
<div class="r"><b>14</b> $2\pi i$</div>
<div class="r"><b>15</b> $2\pi i$</div>
<div class="r"><b>16</b> $2\pi i$</div>
<div class="r"><b>17</b> $0$ (polo fuera del contorno)</div>
<div class="r"><b>18</b> $0$ (Cauchy-Goursat)</div>
<div class="r"><b>19</b> $0$ (residuos $\frac{1}{2i}$ y $-\frac{1}{2i}$ se cancelan)</div>
<div class="r"><b>20</b> $0$ (residuos $-1$ y $1$)</div>
<div class="r"><b>21</b> $2\pi i$</div>
<div class="r"><b>22</b> $-\pi i$</div>
<div class="r"><b>23</b> $1$</div>
<div class="r"><b>24</b> $0$</div>
<div class="r"><b>25</b> $1$</div>
<div class="r"><b>26</b> $\dfrac{1}{2i} = -\dfrac{i}{2}$</div>
<div class="r"><b>27</b> $e$</div>
<div class="r"><b>28</b> $1$</div>
<div class="r"><b>29</b> $-1$</div>
<div class="r"><b>30</b> $\dfrac{1}{2}$</div>
<div class="r"><b>31</b> $0$</div>
<div class="r"><b>32</b> Singularidad evitable</div>
<div class="r"><b>33</b> Singularidad esencial</div>
<div class="r"><b>34</b> Orden $3$</div>
<div class="r"><b>35</b> $1$</div>
<div class="r"><b>36</b> $\pi$</div>
<div class="r"><b>37</b> $\dfrac{\pi}{2}$</div>
<div class="r"><b>38</b> $\dfrac{\pi}{6}$</div>
<div class="r"><b>39</b> $\dfrac{\pi}{2}$</div>
<div class="r"><b>40</b> $\dfrac{2\pi}{\sqrt{3}}$</div>
<div class="r"><b>41</b> $\dfrac{\pi}{2}$</div>
<div class="r"><b>42</b> $\dfrac{\pi}{2\sqrt{2}}$</div>
<div class="r"><b>43</b> $\dfrac{2\pi}{\sqrt{3}}$</div>
<div class="r"><b>44</b> $\dfrac{2\pi}{3}$</div>
<div class="r"><b>45</b> $\dfrac{2\pi}{\sqrt{5}}$</div>
<div class="r"><b>46</b> $\dfrac{\pi}{2}$</div>
<div class="r"><b>47</b> $\dfrac{\pi}{e}$</div>
<div class="r"><b>48</b> $\dfrac{\pi}{e}$</div>
<div class="r"><b>49</b> $\dfrac{\pi}{16}$</div>
<div class="r"><b>50</b> $\dfrac{4\pi}{\sqrt{3}}$</div>
</div>
