# Sucesiones y series infinitas · 50 ejercicios

## Formulario

**Notación.** $\sum_{n=1}^{\infty} a_n$ significa "suma de los términos $a_1 + a_2 + a_3 + \cdots$ sin terminar". $a_n$ es el término general; $S_N = \sum_{n=1}^{N} a_n$ es la suma parcial de los primeros $N$ términos. $\lim_{n\to\infty}$ se lee "límite cuando $n$ tiende a infinito"; $|r|$ es el valor absoluto; $n! = n(n-1)\cdots 2\cdot 1$; $n^p$ es la potencia $p$-ésima; $\sqrt[n]{x}$ es la raíz enésima.

**Convergencia.** La serie converge si $S_N$ tiende a un número finito; si no, diverge. Condición necesaria: si $\sum a_n$ converge, entonces $a_n \to 0$ (el recíproco es falso: la armónica diverge).

| Serie | Condición de convergencia | Suma o veredicto |
|---|---|---|
| Geométrica $\sum_{n=0}^{\infty} a r^n$ | $\mid r \mid < 1$ converge; $\mid r \mid \geq 1$ diverge | $\dfrac{a}{1-r}$ |
| Serie p $\sum \dfrac{1}{n^p}$ | $p > 1$ converge; $p \leq 1$ diverge | $p=2$: $\dfrac{\pi^2}{6}$ |
| Telescópica $\sum \dfrac{1}{n(n+1)}$ | converge | $1$ |

**Criterios.** Sean $a_n, b_n > 0$.

| Criterio | Regla | Úsalo cuando |
|---|---|---|
| Comparación | $a_n \leq b_n$ y $\sum b_n$ converge $\Rightarrow$ $\sum a_n$ converge | tu serie es "menor" que una conocida |
| Comparación al límite | $L = \lim \dfrac{a_n}{b_n}$ con $0 < L < \infty$: convergen o divergen juntas | tu serie se parece a una p |
| Razón | $L = \lim \left\mid \dfrac{a_{n+1}}{a_n} \right\mid$: $L<1$ converge, $L>1$ diverge, $L=1$ no decide | hay factoriales o potencias |
| Raíz | $L = \lim \sqrt[n]{\mid a_n \mid}$: misma regla | todo está elevado a la $n$ |
| Integral | serie e $\int_1^{\infty} f(x)\,dx$ convergen o divergen juntas | $f$ positiva, continua y decreciente |
| Leibniz (alternantes) | $a_n$ decrece a $0$ $\Rightarrow$ $\sum (-1)^n a_n$ converge | signos alternados |

**Absoluta y condicional.** Absoluta: $\sum \mid a_n \mid$ converge (implica convergencia). Condicional: converge pero $\sum \mid a_n \mid$ diverge. Ejemplo: $\sum \frac{(-1)^{n+1}}{n} = \ln 2$ es condicional.

**Series de potencias.** $\sum c_n x^n$ tiene radio $R = \lim \left\mid \dfrac{c_n}{c_{n+1}} \right\mid$: converge absolutamente si $\mid x \mid < R$.

**Taylor.** $e^x = \sum \frac{x^n}{n!}$; $\operatorname{sen} x = \sum \frac{(-1)^n x^{2n+1}}{(2n+1)!}$; $\cos x = \sum \frac{(-1)^n x^{2n}}{(2n)!}$; $\frac{1}{1-x} = \sum x^n$ si $\mid x \mid < 1$.

## Ejercicios (50)

**1–7 · Límites de sucesiones**

1. $\lim_{n\to\infty} \dfrac{3n+1}{n+2}$
2. $\lim_{n\to\infty} \dfrac{n^2+1}{2n^3-3}$
3. $\lim_{n\to\infty} \dfrac{2n^2-5}{n^2+n}$
4. $\lim_{n\to\infty} \left(1 + \dfrac{1}{n}\right)^n$
5. $\lim_{n\to\infty} \dfrac{5^n+1}{5^n}$
6. $\lim_{n\to\infty} \dfrac{\operatorname{sen} n}{n}$
7. $\lim_{n\to\infty} \dfrac{(-1)^n}{n}$

**8–14 · Series geométricas** (si convergen, halla la suma)

8. $\sum_{n=0}^{\infty} \left(\frac{3}{4}\right)^n$
9. $\sum_{n=0}^{\infty} 2\left(-\frac{1}{2}\right)^n$
10. $\sum_{n=1}^{\infty} \left(\frac{1}{2}\right)^n$
11. $\sum_{n=0}^{\infty} \left(\frac{5}{4}\right)^n$
12. $\sum_{n=0}^{\infty} (-1)^n$
13. $\sum_{n=0}^{\infty} 7\left(\frac{1}{3}\right)^n$
14. $\sum_{n=0}^{\infty} \frac{3^n}{4^{n+1}}$

**15–17 · Series telescópicas**

15. $\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$
16. $\sum_{n=1}^{\infty} \frac{1}{n(n+2)}$
17. $\sum_{n=1}^{\infty} \ln\left(1 + \frac{1}{n}\right)$

**18–21 · Series p**

18. $\sum_{n=1}^{\infty} \frac{1}{n^2}$
19. $\sum_{n=1}^{\infty} \frac{1}{n^{0.9}}$
20. $\sum_{n=1}^{\infty} n^{-3/2}$
21. $\sum_{n=1}^{\infty} \frac{1}{\sqrt[3]{n}}$

**22–28 · Comparación y comparación al límite**

22. $\sum_{n=1}^{\infty} \frac{1}{n^2+1}$
23. $\sum_{n=1}^{\infty} \frac{1}{n+\sqrt{n}}$
24. $\sum_{n=1}^{\infty} \frac{\operatorname{sen}^2 n}{n^2}$
25. $\sum_{n=1}^{\infty} \frac{n}{n^3+1}$
26. $\sum_{n=1}^{\infty} \frac{n+1}{n^3+5}$
27. $\sum_{n=1}^{\infty} \frac{1}{\sqrt{n^2+1}}$
28. $\sum_{n=1}^{\infty} \frac{n^2+2}{n^4-n}$

**29–36 · Criterios de la razón y de la raíz**

29. $\sum_{n=1}^{\infty} \frac{n}{3^n}$
30. $\sum_{n=1}^{\infty} \frac{5^n}{n!}$
31. $\sum_{n=1}^{\infty} \frac{n!}{10^n}$
32. $\sum_{n=1}^{\infty} \frac{n^n}{n!}$
33. $\sum_{n=1}^{\infty} \frac{(-3)^n}{n!}$
34. $\sum_{n=1}^{\infty} \frac{n^2}{2^n}$
35. $\sum_{n=1}^{\infty} \left(\frac{n}{n+1}\right)^{n^2}$
36. $\sum_{n=1}^{\infty} \left(1 + \frac{1}{n}\right)^{n^2}$

**37–39 · Criterio de la integral**

37. $\sum_{n=2}^{\infty} \frac{1}{n \ln n}$
38. $\sum_{n=2}^{\infty} \frac{1}{n (\ln n)^2}$
39. $\sum_{n=1}^{\infty} \frac{n}{n^2+1}$

**40–46 · Series alternantes y convergencia absoluta/condicional**

40. $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$
41. $\sum_{n=1}^{\infty} \frac{(-1)^n}{\sqrt{n}}$
42. $\sum_{n=1}^{\infty} (-1)^n \frac{n}{n+1}$
43. $\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}$
44. $\sum_{n=1}^{\infty} \frac{(-1)^n}{n^3}$
45. $\sum_{n=2}^{\infty} \frac{(-1)^n}{\ln n}$
46. $\sum_{n=1}^{\infty} \frac{\cos(n\pi)}{n}$

**47–50 · Radio de convergencia**

47. $\sum_{n=0}^{\infty} \frac{x^n}{n!}$
48. $\sum_{n=1}^{\infty} n\, x^n$
49. $\sum_{n=0}^{\infty} \frac{(x-1)^n}{2^n}$
50. $\sum_{n=1}^{\infty} \frac{1}{n\,2^n}$ (analiza convergencia y, si puedes, su suma)

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $3$</div>
<div class="r"><b>02</b> $0$</div>
<div class="r"><b>03</b> $2$</div>
<div class="r"><b>04</b> $e$</div>
<div class="r"><b>05</b> $1$</div>
<div class="r"><b>06</b> $0$</div>
<div class="r"><b>07</b> $0$</div>
<div class="r"><b>08</b> Converge, suma $4$</div>
<div class="r"><b>09</b> Converge, suma $\frac{4}{3}$</div>
<div class="r"><b>10</b> Converge, suma $1$</div>
<div class="r"><b>11</b> Diverge ($r = \frac{5}{4} > 1$)</div>
<div class="r"><b>12</b> Diverge (oscila: $1, 0, 1, 0, \ldots$)</div>
<div class="r"><b>13</b> Converge, suma $\frac{21}{2}$</div>
<div class="r"><b>14</b> Converge, suma $1$</div>
<div class="r"><b>15</b> Converge, suma $1$</div>
<div class="r"><b>16</b> Converge, suma $\frac{3}{4}$</div>
<div class="r"><b>17</b> Diverge (parciales $\ln(N+1) \to \infty$)</div>
<div class="r"><b>18</b> Converge (p $= 2 > 1$), suma $\frac{\pi^2}{6}$</div>
<div class="r"><b>19</b> Diverge (p $= 0.9 \leq 1$)</div>
<div class="r"><b>20</b> Converge (p $= \frac{3}{2} > 1$)</div>
<div class="r"><b>21</b> Diverge (p $= \frac{1}{3} \leq 1$)</div>
<div class="r"><b>22</b> Converge ($\leq \frac{1}{n^2}$)</div>
<div class="r"><b>23</b> Diverge ($\geq \frac{1}{2n}$)</div>
<div class="r"><b>24</b> Converge ($\leq \frac{1}{n^2}$)</div>
<div class="r"><b>25</b> Converge (comp. límite con $\frac{1}{n^2}$, $L = 1$)</div>
<div class="r"><b>26</b> Converge (comp. límite con $\frac{1}{n^2}$, $L = 1$)</div>
<div class="r"><b>27</b> Diverge (comp. límite con $\frac{1}{n}$, $L = 1$)</div>
<div class="r"><b>28</b> Converge (dominante $\frac{1}{n^2}$)</div>
<div class="r"><b>29</b> Converge (razón: $L = \frac{1}{3} < 1$)</div>
<div class="r"><b>30</b> Converge (razón: $L = 0 < 1$)</div>
<div class="r"><b>31</b> Diverge (razón: $L = \infty > 1$)</div>
<div class="r"><b>32</b> Diverge (razón: $L = e > 1$)</div>
<div class="r"><b>33</b> Converge absolutamente (razón: $L = 0 < 1$)</div>
<div class="r"><b>34</b> Converge (razón: $L = \frac{1}{2} < 1$)</div>
<div class="r"><b>35</b> Converge (raíz: $L = \frac{1}{e} < 1$)</div>
<div class="r"><b>36</b> Diverge (raíz: $L = e > 1$)</div>
<div class="r"><b>37</b> Diverge (integral: $\ln \ln x \to \infty$)</div>
<div class="r"><b>38</b> Converge (integral: $-\frac{1}{\ln x}$ acotada)</div>
<div class="r"><b>39</b> Diverge (integral: $\frac{1}{2}\ln(x^2+1) \to \infty$)</div>
<div class="r"><b>40</b> Converge condicionalmente, suma $\ln 2$</div>
<div class="r"><b>41</b> Converge condicionalmente</div>
<div class="r"><b>42</b> Diverge (término $\not\to 0$)</div>
<div class="r"><b>43</b> Converge absolutamente (p $= 2$)</div>
<div class="r"><b>44</b> Converge absolutamente (p $= 3$)</div>
<div class="r"><b>45</b> Converge condicionalmente (Leibniz; $\sum \frac{1}{\ln n}$ diverge)</div>
<div class="r"><b>46</b> Converge condicionalmente ($\cos(n\pi) = (-1)^n$)</div>
<div class="r"><b>47</b> $R = \infty$ (converge para todo $x$)</div>
<div class="r"><b>48</b> $R = 1$</div>
<div class="r"><b>49</b> $R = 2$ (centro en $x = 1$)</div>
<div class="r"><b>50</b> Converge, suma $\ln 2$ ($-\ln(1-x)$ en $x = \frac{1}{2}$)</div>
</div>
