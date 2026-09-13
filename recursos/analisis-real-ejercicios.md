# Análisis real: formulario y ejercicios

## Formulario

### Supremo, ínfimo y axioma del supremo
1. $M$ es **cota superior** de $A$ si $a \leq M$ para todo $a \in A$.
2. $\sup A$ es la menor cota superior; $\inf A$ es la mayor cota inferior.
3. **Axioma del supremo:** todo $A \subseteq \mathbb{R}$ no vacío y acotado superiormente tiene supremo.
4. Caracterización: $s = \sup A \iff$ $s$ es cota superior y $\forall \varepsilon > 0\ \exists a \in A : a > s - \varepsilon$.
5. Si $\sup A \in A$, entonces es el máximo; si $\inf A \in A$, es el mínimo.

### Sucesiones y límites
1. $a_n \to L \iff \forall \varepsilon > 0\ \exists N : n > N \Rightarrow |a_n - L| < \varepsilon$.
2. Convergente $\Rightarrow$ acotada; monótona y acotada $\Rightarrow$ convergente.
3. **Bolzano-Weierstrass:** toda sucesión acotada tiene subsucesión convergente.
4. $\limsup a_n = \lim \left(\sup_{k \geq n} a_k\right)$, $\liminf a_n = \lim \left(\inf_{k \geq n} a_k\right)$.
5. $a_n$ converge $\iff \limsup a_n = \liminf a_n$.
6. En $\mathbb{R}$: convergente $\iff$ de Cauchy.
7. Límites útiles: $\left(1 + \frac{1}{n}\right)^n \to e$, $n^{1/n} \to 1$, $\frac{\ln n}{n} \to 0$, $\frac{x^n}{n!} \to 0$.

### Series numéricas
1. $\sum a_n$ converge $\iff$ la sucesión $S_N = \sum_{n=1}^{N} a_n$ converge.
2. $\sum a_n$ converge $\Rightarrow a_n \to 0$ (no recíproco).
3. Geométrica: $\sum_{n=0}^{\infty} r^n = \dfrac{1}{1-r}$ si $|r| < 1$.
4. $p$-series: $\sum \dfrac{1}{n^p}$ converge $\iff p > 1$.
5. Comparación, razón ($L < 1$ converge), raíz ($L < 1$ converge), integral, Leibniz.
6. $\sum |a_n| < \infty \Rightarrow \sum a_n$ converge (absoluta $\Rightarrow$ convergente).
7. La condicional puede reordenarse cambiando su suma (Riemann).

### Continuidad
1. $f$ continua en $c$: $\forall \varepsilon > 0\ \exists \delta > 0 : |x - c| < \delta \Rightarrow |f(x) - f(c)| < \varepsilon$.
2. Equivale a $x_n \to c \Rightarrow f(x_n) \to f(c)$.
3. **Uniforme:** el $\delta$ sirve para todos los puntos del dominio.
4. **Heine-Cantor:** continua en $[a,b]$ (compacto) $\Rightarrow$ uniformemente continua.
5. **Valor intermedio:** $f$ continua en $[a,b]$ toma todos los valores entre $f(a)$ y $f(b)$.
6. **Valor extremo:** $f$ continua en $[a,b]$ alcanza máximo y mínimo.

### Derivación y valor medio
1. $f'(c) = \lim_{h \to 0}\dfrac{f(c+h) - f(c)}{h}$.
2. Derivabilidad $\Rightarrow$ continuidad (no recíproco).
3. **Rolle:** $f(a) = f(b) \Rightarrow \exists c : f'(c) = 0$.
4. **Lagrange:** $\exists c : f'(c) = \dfrac{f(b) - f(a)}{b - a}$.
5. **Cauchy:** $\exists c : (f(b)-f(a))g'(c) = (g(b)-g(a))f'(c)$.
6. **Taylor:** $f(x) = \sum_{k=0}^{n}\dfrac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x)$.

### Integral de Riemann
1. $U(f,P) = \sum M_i \Delta x_i$ y $L(f,P) = \sum m_i \Delta x_i$ con $\Delta x_i = x_i - x_{i-1}$.
2. Integrable $\iff \inf_P U(f,P) = \sup_P L(f,P)$.
3. **Criterio:** $\forall \varepsilon > 0\ \exists P : U(f,P) - L(f,P) < \varepsilon$.
4. **Lebesgue:** acotada e integrable $\iff$ discontinuidades de medida cero.
5. **TFC:** $F(x) = \int_a^x f$ cumple $F' = f$; $\int_a^b f = G(b) - G(a)$ si $G' = f$.

### Convergencia puntual y uniforme
1. Puntual: $f_n(x) \to f(x)$ para cada $x$ fijo.
2. Uniforme: $\sup_{x} |f_n(x) - f(x)| \to 0$.
3. Uniforme preserva continuidad, integral y (con hipótesis) derivación.
4. **Dini:** monótona de continuas hacia continua en compacto $\Rightarrow$ uniforme.
5. **Cauchy uniforme:** $\sup_x |f_m(x) - f_n(x)| \to 0$ cuando $m,n \to \infty$.

## Ejercicios (50)

**Supremo e ínfimo**
1. Halla $\sup$ e $\inf$ de $A = \{1 - 1/n : n \in \mathbb{N}\}$.
2. Halla $\inf$ de $A = \{1/n : n \in \mathbb{N}\}$.
3. Halla $\sup$ de $A = (-2, 2)$.
4. Halla $\inf$ de $A = \{x \in \mathbb{R} : x^2 > 2,\ x > 0\}$.
5. Halla $\sup$ de $A = \{x \in \mathbb{Q} : x^2 < 3\}$.
6. Halla $\inf$ de $A = \{(n+1)/n : n \in \mathbb{N}\}$.
7. Halla $\sup$ de $A = \{(-1)^n(1 + 1/n) : n \in \mathbb{N}\}$.
8. Halla $\inf$ de $A = \{10^{-n} : n \in \mathbb{N}\}$.

**Límites de sucesiones**
9. Calcula $\displaystyle\lim_{n\to\infty} \frac{2n+1}{3n-2}$.
10. Calcula $\displaystyle\lim_{n\to\infty} \frac{n^2+3n}{2n^2-n+1}$.
11. Calcula $\displaystyle\lim_{n\to\infty} \left(1 + \frac{2}{n}\right)^n$.
12. Calcula $\displaystyle\lim_{n\to\infty} n^{1/n}$.
13. Calcula $\displaystyle\lim_{n\to\infty} (\sqrt{n+1} - \sqrt{n})$.
14. Calcula $\displaystyle\lim_{n\to\infty} \frac{\sin n}{n}$.
15. Calcula $\displaystyle\lim_{n\to\infty} \frac{3^n}{n!}$.
16. Calcula $\displaystyle\lim_{n\to\infty} \left(\frac{n-1}{n+1}\right)^n$.

**Límite superior e inferior**
17. Halla $\limsup$ de $a_n = (-1)^n + \frac{1}{n}$.
18. Halla $\liminf$ de $a_n = \cos(n\pi)$.
19. Halla $\limsup$ de $a_n = \cos(n\pi) + \frac{1}{n}$.
20. Halla $\liminf$ de $a_n = \frac{(-1)^n n}{n+1}$.

**Series numéricas**
21. Calcula $\displaystyle\sum_{n=1}^{\infty} \frac{1}{2^n}$.
22. Calcula $\displaystyle\sum_{n=0}^{\infty} \frac{1}{3^n}$.
23. ¿Converge o diverge $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n}$?
24. Calcula $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2}$.
25. Calcula $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$.
26. ¿Cuál es la suma de $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^3}$? (nombra el valor)
27. Calcula $\displaystyle\sum_{n=1}^{\infty} \frac{n}{2^n}$.
28. Calcula $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$.
29. Calcula $\displaystyle\sum_{n=1}^{\infty} \frac{1}{4n^2-1}$.
30. Calcula $\displaystyle\sum_{n=1}^{\infty} \frac{2^n}{n!}$.
31. Calcula $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{2n-1}$.
32. ¿Converge o diverge $\displaystyle\sum_{n=1}^{\infty} \frac{n+1}{n^2}$?
33. ¿Converge o diverge $\displaystyle\sum_{n=2}^{\infty} \frac{1}{n(\ln n)^2}$?
34. ¿Converge o diverge $\displaystyle\sum_{n=1}^{\infty} \frac{1}{\sqrt{n}}$?

**Continuidad**
35. ¿En qué puntos es continua $f(x) = \dfrac{x^2-1}{x-1}$?
36. ¿Qué valor debe tomar $f(0)$ para que $f(x) = \dfrac{\sin x}{x}$ sea continua en $0$?
37. ¿Es $f(x) = x^3 + 2x$ uniformemente continua en $[0,5]$?
38. ¿Es $f(x) = x^2$ uniformemente continua en $\mathbb{R}$?
39. ¿Tiene $x^3 + x - 1 = 0$ una raíz en $(0,1)$?
40. Halla el máximo de $f(x) = x^2 - 4x + 1$ en $[0,3]$.

**Teoremas del valor medio**
41. Halla $c$ del TVM para $f(x) = x^2$ en $[0,4]$.
42. Halla $c$ del TVM para $f(x) = x^3$ en $[0,3]$.
43. Halla $c$ del TVM para $f(x) = 1/x$ en $[1,2]$.
44. Halla $c$ de Rolle para $f(x) = x^2 - 4x$ en $[0,4]$.
45. ¿Existe $c$ con $f'(c) = 0$ para $f(x) = |x|$ en $[-1,1]$?
46. Halla $c$ del TVM para $f(x) = x^3 - 3x$ en $[0,2]$.

**Convergencia uniforme**
47. ¿Converge uniformemente $f_n(x) = x/n$ en $[0,1]$?
48. ¿Converge uniformemente $f_n(x) = x^n$ en $[0,1]$?
49. ¿Converge uniformemente $f_n(x) = \dfrac{nx}{1+n^2x^2}$ en $[0,1]$?
50. ¿Converge uniformemente $f_n(x) = \dfrac{1}{n}\sin(nx)$ en $\mathbb{R}$?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $\sup=1,\ \inf=0$</div>
<div class="r"><b>02</b> $0$</div>
<div class="r"><b>03</b> $2$</div>
<div class="r"><b>04</b> $\sqrt{2}$</div>
<div class="r"><b>05</b> $\sqrt{3}$</div>
<div class="r"><b>06</b> $1$</div>
<div class="r"><b>07</b> $\frac{3}{2}$</div>
<div class="r"><b>08</b> $0$</div>
<div class="r"><b>09</b> $\frac{2}{3}$</div>
<div class="r"><b>10</b> $\frac{1}{2}$</div>
<div class="r"><b>11</b> $e^{2}$</div>
<div class="r"><b>12</b> $1$</div>
<div class="r"><b>13</b> $0$</div>
<div class="r"><b>14</b> $0$</div>
<div class="r"><b>15</b> $0$</div>
<div class="r"><b>16</b> $e^{-2}$</div>
<div class="r"><b>17</b> $1$</div>
<div class="r"><b>18</b> $-1$</div>
<div class="r"><b>19</b> $1$</div>
<div class="r"><b>20</b> $-1$</div>
<div class="r"><b>21</b> $1$</div>
<div class="r"><b>22</b> $\frac{3}{2}$</div>
<div class="r"><b>23</b> diverge</div>
<div class="r"><b>24</b> $\frac{\pi^{2}}{6}$</div>
<div class="r"><b>25</b> $\ln 2$</div>
<div class="r"><b>26</b> $\zeta(3)$</div>
<div class="r"><b>27</b> $2$</div>
<div class="r"><b>28</b> $1$</div>
<div class="r"><b>29</b> $\frac{1}{2}$</div>
<div class="r"><b>30</b> $e^{2}-1$</div>
<div class="r"><b>31</b> $\frac{\pi}{4}$</div>
<div class="r"><b>32</b> diverge</div>
<div class="r"><b>33</b> converge</div>
<div class="r"><b>34</b> diverge</div>
<div class="r"><b>35</b> $\mathbb{R}\setminus\{1\}$</div>
<div class="r"><b>36</b> $1$</div>
<div class="r"><b>37</b> Sí</div>
<div class="r"><b>38</b> No</div>
<div class="r"><b>39</b> Sí</div>
<div class="r"><b>40</b> $1$</div>
<div class="r"><b>41</b> $2$</div>
<div class="r"><b>42</b> $\sqrt{3}$</div>
<div class="r"><b>43</b> $\sqrt{2}$</div>
<div class="r"><b>44</b> $2$</div>
<div class="r"><b>45</b> No</div>
<div class="r"><b>46</b> $\frac{2}{\sqrt{3}}$</div>
<div class="r"><b>47</b> Sí</div>
<div class="r"><b>48</b> No</div>
<div class="r"><b>49</b> No</div>
<div class="r"><b>50</b> Sí</div>
</div>
