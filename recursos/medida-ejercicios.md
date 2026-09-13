# Teoría de la medida e integral de Lebesgue · 50 ejercicios

**Cuaderno de práctica · Análisis · Universidad 4–5**
*Formulario completo, 50 ejercicios por niveles y solucionario solo con resultados.*

---

## Formulario

### Medida y conjuntos de medida cero

1. Aditividad numerable: para $A_n$ disjuntos dos a dos,
$$\mu\left(\bigcup_{n=1}^{\infty} A_n\right) = \sum_{n=1}^{\infty} \mu(A_n), \qquad \mu(\emptyset) = 0.$$
2. Monotonía: $A \subseteq B \Rightarrow \mu(A) \leq \mu(B)$.
3. Diferencia: si $B \subseteq A$ y $\mu(B) < \infty$, entonces $\mu(A \setminus B) = \mu(A) - \mu(B)$.
4. Todo conjunto **numerable** tiene medida de Lebesgue cero.
5. Longitud: $\lambda([a,b]) = \lambda((a,b)) = b - a$.
6. Invariancia por traslación: $\lambda(A + t) = \lambda(A)$.
7. Conjunto de Cantor: no numerable y de medida cero.
8. "En casi todo punto" (c.t.p.) significa salvo un conjunto de medida cero.

### Funciones medibles

1. $f$ es medible si $f^{-1}((a,\infty]) \in \mathcal{A}$ para todo $a$ (o equivalentemente con abiertos de Borel).
2. Toda función **continua** es medible; toda función **monótona** es medible.
3. Sumas, productos, $\max$, $\min$, $|f|$ y $f^{\pm}$ de funciones medibles son medibles.
4. Supremos, ínfimos y límites puntuales de funciones medibles son medibles.

### Integral de Lebesgue

1. Función simple $\phi = \sum c_i \chi_{A_i}$: $\displaystyle\int \phi \, d\mu = \sum c_i \mu(A_i)$.
2. $f \geq 0$: $\displaystyle\int f \, d\mu = \sup\left\{\int \phi \, d\mu : 0 \leq \phi \leq f,\ \phi \text{ simple}\right\}$.
3. General: $f = f^{+} - f^{-}$ y $\displaystyle\int f = \int f^{+} - \int f^{-}$.
4. Linealidad y monotonía: $\displaystyle\int (af + bg) = a\int f + b\int g$; $f \leq g \Rightarrow \int f \leq \int g$.
5. $\displaystyle\int \chi_A \, d\mu = \mu(A)$ y $\left|\int f\right| \leq \int |f|$.
6. $f \in L^{1}(\mu) \iff \displaystyle\int |f| \, d\mu < \infty$.
7. Riemann-integrable $\Rightarrow$ Lebesgue-integrable, con el mismo valor.

### Teoremas de convergencia

1. **Monótona (Levi):** si $0 \leq f_n \uparrow f$, entonces $\displaystyle\lim_{n} \int f_n = \int f$.
2. **Fatou:** si $f_n \geq 0$, entonces $\displaystyle\int \liminf f_n \leq \liminf \int f_n$.
3. **Dominada (Lebesgue):** si $f_n \to f$ c.t.p. y $|f_n| \leq g \in L^{1}$, entonces $\displaystyle\lim_{n} \int f_n = \int f$.
4. Moraleja: el límite se intercambia sin continuidad ni convergencia uniforme; basta monotonía o una dominante integrable.

### Espacios $L^{p}$

1. Definición: $\displaystyle\lVert f \rVert_p = \left(\int |f|^{p} \, d\mu\right)^{1/p}$, con $1 \leq p < \infty$.
2. $f \in L^{p} \iff \lVert f \rVert_p < \infty$; se identifican funciones iguales c.t.p.
3. **Hölder:** con $\frac{1}{p} + \frac{1}{q} = 1$, $\displaystyle\lVert fg \rVert_1 \leq \lVert f \rVert_p \lVert g \rVert_q$.
4. **Minkowski:** $\lVert f + g \rVert_p \leq \lVert f \rVert_p + \lVert g \rVert_p$.
5. Los $L^{p}$ son completos (Banach); $L^{2}$ es de Hilbert con $\langle f, g \rangle = \int f\bar{g}$.

---

## Ejercicios (50)

### Nivel 1 — Medida y conjuntos de medida cero

1. Calcula $\lambda([2,5])$.
2. Calcula $\lambda(\{1,2,3\})$.
3. Calcula $\lambda(\mathbb{Q} \cap [0,1])$.
4. Calcula $\lambda([0,1] \cup [2,3])$.
5. ¿Cuánto mide el conjunto de Cantor?
6. Calcula $\lambda((0,1))$.
7. Calcula $\lambda(\mathbb{N})$ como subconjunto de $\mathbb{R}$.
8. Calcula $\lambda([0,1] \setminus \mathbb{Q})$.
9. ¿Cuánto mide un conjunto numerable cualquiera?
10. Calcula $\lambda([a,b])$.

### Nivel 2 — Funciones medibles

11. ¿Es medible $f(x) = x^{2}$?
12. ¿Es medible $\chi_{\mathbb{Q}}$?
13. Calcula $\displaystyle\int_0^1 \chi_{\mathbb{Q}} \, d\lambda$.
14. Calcula $\displaystyle\int_0^1 \chi_{[1/4,\,3/4]} \, d\lambda$.
15. ¿Es medible toda función continua?
16. Calcula $\displaystyle\int \chi_{[0,2]} \, d\lambda$ sobre $\mathbb{R}$.
17. ¿Es medible $f(x) = \operatorname{sen}(1/x)$ en $(0,1)$?
18. Calcula $\displaystyle\int_0^1 \chi_{\{0\}} \, d\lambda$.
19. ¿Es medible $f(x) = 1/x$ en $(0,1)$?
20. Calcula $\displaystyle\int_0^3 \chi_{[1,2]} \, d\lambda$.

### Nivel 3 — Integral de Lebesgue

21. Calcula $\displaystyle\int_0^1 x \, d\lambda$.
22. Calcula $\displaystyle\int_0^1 x^{2} \, d\lambda$.
23. Calcula $\displaystyle\int_1^2 \frac{1}{x} \, d\lambda$.
24. Calcula $\displaystyle\int_0^1 e^{x} \, d\lambda$.
25. Calcula $\displaystyle\int \phi \, d\lambda$ para $\phi = 2\chi_{[0,1]} + 3\chi_{[1,2]}$.
26. Calcula $\displaystyle\int_0^1 (3x+1) \, d\lambda$.
27. Calcula $\displaystyle\int_1^{e} \frac{1}{x} \, d\lambda$.
28. Calcula $\displaystyle\int_0^{\pi} \operatorname{sen}x \, d\lambda$.
29. Calcula $\displaystyle\int_0^1 \sqrt{x} \, d\lambda$.
30. Calcula $\displaystyle\int \phi \, d\lambda$ para $\phi = 4\chi_{[0,\,1/2]}$.

### Nivel 4 — Teoremas de convergencia

31. Calcula $\displaystyle\lim_{n\to\infty}\int_0^1 x^{n} \, d\lambda$.
32. Calcula $\displaystyle\lim_{n\to\infty}\int_0^1 \left(1+\frac{x}{n}\right)^{n} d\lambda$.
33. Calcula $\displaystyle\lim_{n\to\infty}\int_0^1 \frac{x^{n}}{1+x} \, d\lambda$.
34. Calcula $\displaystyle\lim_{n\to\infty}\int_0^{\infty} \frac{1}{n}\chi_{[0,n]} \, d\lambda$.
35. Para $f_n = n\chi_{(0,1/n)}$, calcula $\displaystyle\liminf_{n\to\infty}\int f_n \, d\lambda$.
36. Para $f_n = n\chi_{(0,1/n)}$, calcula $\displaystyle\int \liminf_{n\to\infty} f_n \, d\lambda$.
37. Calcula $\displaystyle\lim_{n\to\infty}\int_0^1 \frac{nx}{1+n^{2}x^{2}} \, d\lambda$.
38. Calcula $\displaystyle\lim_{n\to\infty}\int_0^1 e^{-nx} \, d\lambda$.
39. Calcula $\displaystyle\lim_{n\to\infty}\int_0^1 n x^{n-1} \, d\lambda$.
40. Calcula $\displaystyle\lim_{n\to\infty}\int_0^1 \left(1-\frac{x}{n}\right)^{n} d\lambda$.

### Nivel 5 — Espacios $L^{p}$

41. Calcula $\lVert x \rVert_2$ en $L^{2}[0,1]$.
42. Calcula $\lVert 1 \rVert_2$ en $L^{2}[0,1]$.
43. ¿Está $f(x) = x^{-1/2}$ en $L^{1}(0,1)$? Indica su integral.
44. ¿Está $f(x) = x^{-1}$ en $L^{1}(0,1)$?
45. Calcula $\lVert x \rVert_1$ en $L^{1}[0,1]$.
46. Calcula $\lVert fg \rVert_1$ para $f = x$, $g = 1$ en $[0,1]$.
47. ¿Es completo $L^{1}(0,1)$?
48. ¿Es $L^{2}(0,1)$ un espacio de Hilbert?
49. Calcula $\lVert x^{2} \rVert_1$ en $L^{1}[0,1]$.
50. Calcula $\lVert f \rVert_2 \lVert g \rVert_2$ para $f = x$, $g = 1$ en $[0,1]$.

---

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $3$</div>
<div class="r"><b>02</b> $0$</div>
<div class="r"><b>03</b> $0$</div>
<div class="r"><b>04</b> $2$</div>
<div class="r"><b>05</b> $0$</div>
<div class="r"><b>06</b> $1$</div>
<div class="r"><b>07</b> $0$</div>
<div class="r"><b>08</b> $1$</div>
<div class="r"><b>09</b> $0$</div>
<div class="r"><b>10</b> $b-a$</div>
<div class="r"><b>11</b> Sí (es continua)</div>
<div class="r"><b>12</b> Sí</div>
<div class="r"><b>13</b> $0$</div>
<div class="r"><b>14</b> $\dfrac{1}{2}$</div>
<div class="r"><b>15</b> Sí</div>
<div class="r"><b>16</b> $2$</div>
<div class="r"><b>17</b> Sí (es continua en $(0,1)$)</div>
<div class="r"><b>18</b> $0$</div>
<div class="r"><b>19</b> Sí (es continua en $(0,1)$)</div>
<div class="r"><b>20</b> $1$</div>
<div class="r"><b>21</b> $\dfrac{1}{2}$</div>
<div class="r"><b>22</b> $\dfrac{1}{3}$</div>
<div class="r"><b>23</b> $\ln 2$</div>
<div class="r"><b>24</b> $e-1$</div>
<div class="r"><b>25</b> $5$</div>
<div class="r"><b>26</b> $\dfrac{5}{2}$</div>
<div class="r"><b>27</b> $1$</div>
<div class="r"><b>28</b> $2$</div>
<div class="r"><b>29</b> $\dfrac{2}{3}$</div>
<div class="r"><b>30</b> $2$</div>
<div class="r"><b>31</b> $0$</div>
<div class="r"><b>32</b> $e-1$</div>
<div class="r"><b>33</b> $0$</div>
<div class="r"><b>34</b> $1$</div>
<div class="r"><b>35</b> $1$</div>
<div class="r"><b>36</b> $0$</div>
<div class="r"><b>37</b> $0$</div>
<div class="r"><b>38</b> $0$</div>
<div class="r"><b>39</b> $1$</div>
<div class="r"><b>40</b> $1-e^{-1}$</div>
<div class="r"><b>41</b> $\dfrac{1}{\sqrt{3}}$</div>
<div class="r"><b>42</b> $1$</div>
<div class="r"><b>43</b> Sí; $\displaystyle\int_0^1 x^{-1/2}dx = 2$</div>
<div class="r"><b>44</b> No (la integral diverge)</div>
<div class="r"><b>45</b> $\dfrac{1}{2}$</div>
<div class="r"><b>46</b> $\dfrac{1}{2}$</div>
<div class="r"><b>47</b> Sí (Riesz-Fischer)</div>
<div class="r"><b>48</b> Sí, con $\langle f,g\rangle = \int f\bar{g}$</div>
<div class="r"><b>49</b> $\dfrac{1}{3}$</div>
<div class="r"><b>50</b> $\dfrac{1}{\sqrt{3}}$</div>
</div>
