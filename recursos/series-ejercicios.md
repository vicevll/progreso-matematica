# Sucesiones y series infinitas · Ejercicios

Área: Cálculo · Nivel: Univ 2 · Descripción: Criterios de convergencia, Taylor, potencias y Fourier.

## Formulario

### Límites de sucesiones

$$a_n \to L \iff \forall \varepsilon > 0 \; \exists N : n > N \Rightarrow |a_n - L| < \varepsilon$$

- Cociente de polinomios: manda el grado mayor.
- $\displaystyle\lim_{n\to\infty}\left(1 + \frac{k}{n}\right)^n = e^{k}$.
- $\displaystyle\lim_{n\to\infty} n^{1/n} = 1$, $\displaystyle\lim_{n\to\infty}\frac{b^n}{n!} = 0$ para todo $b$.
- Monótona y acotada $\Rightarrow$ convergente.

### Series básicas

$$\sum_{n=0}^{\infty} a r^n = \frac{a}{1-r} \quad (|r| < 1)$$

$$\sum_{n=1}^{\infty}\frac{1}{n^p} \; \text{converge} \iff p > 1$$

$$\sum_{n=1}^{\infty}\frac{1}{n(n+1)} = 1, \qquad \sum_{n=1}^{\infty}\frac{1}{n^2} = \frac{\pi^2}{6}$$

### Criterios de convergencia

- **Razón:** $L = \displaystyle\lim\left|\frac{a_{n+1}}{a_n}\right|$; converge si $L < 1$, diverge si $L > 1$.
- **Raíz:** $L = \displaystyle\lim \sqrt[n]{|a_n|}$; misma regla.
- **Comparación:** $0 \leq a_n \leq b_n$; si $\sum b_n$ converge, $\sum a_n$ converge.
- **Comparación al límite:** $a_n/b_n \to c \in (0, \infty)$ $\Rightarrow$ mismo carácter.
- **Integral:** $\sum a_n$ y $\int_1^\infty f$ comparten carácter si $f(n) = a_n$, positiva y decreciente.
- **Leibniz:** si $a_n \downarrow 0$, entonces $\sum (-1)^n a_n$ converge.

### Series de potencias

$$\sum_{n=0}^{\infty} c_n x^n, \qquad R = \lim\left|\frac{c_n}{c_{n+1}}\right|$$

Converge absolutamente en $|x| < R$ y diverge en $|x| > R$; en $|x| = R$ se analiza aparte.

### Taylor y McLaurin

$$f(x) = \sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n, \qquad f(x) = \sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n$$

$$e^x = \sum_{n=0}^{\infty}\frac{x^n}{n!}, \qquad \operatorname{sen} x = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!}, \qquad \cos x = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{(2n)!}$$

$$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n \; (|x|<1), \qquad \ln(1+x) = \sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}x^n \; (-1 < x \leq 1)$$

### Fourier

$$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{L} + b_n\operatorname{sen}\frac{n\pi x}{L}\right)$$

## Ejercicios (50)

1. $\displaystyle\lim_{n\to\infty}\frac{3n+1}{2n-5}$.
2. $\displaystyle\lim_{n\to\infty}\frac{n^2+1}{2n^2-n}$.
3. $\displaystyle\lim_{n\to\infty}\left(\sqrt{n+1}-\sqrt{n}\right)$.
4. $\displaystyle\lim_{n\to\infty}\left(1+\frac{2}{n}\right)^n$.
5. $\displaystyle\lim_{n\to\infty}\left(1-\frac{1}{n}\right)^n$.
6. $\displaystyle\lim_{n\to\infty} n^{1/n}$.
7. $\displaystyle\lim_{n\to\infty}\frac{2^n}{n!}$.
8. $\displaystyle\lim_{n\to\infty}\frac{n!}{n^n}$.
9. $\displaystyle\lim_{n\to\infty}\frac{(-1)^n}{n}$.
10. $\displaystyle\lim_{n\to\infty}\frac{\cos n}{n}$.
11. $\displaystyle\sum_{n=1}^{\infty}\frac{3}{4^n}$.
12. $\displaystyle\sum_{n=0}^{\infty}2\left(-\frac{1}{3}\right)^n$.
13. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n(n+2)}$.
14. $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n^2-1}$.
15. $\displaystyle\sum_{n=1}^{\infty}\left[\left(\frac{1}{2}\right)^n+\left(\frac{1}{3}\right)^n\right]$.
16. $\displaystyle\sum_{n=1}^{\infty}\left(\frac{1}{n+1}-\frac{1}{n+2}\right)$.
17. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^2}$.
18. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{\sqrt{n}}$.
19. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^2+1}$.
20. $\displaystyle\sum_{n=1}^{\infty}\frac{n}{n^2+1}$.
21. $\displaystyle\sum_{n=1}^{\infty}\frac{2^n}{n!}$ (razón).
22. $\displaystyle\sum_{n=1}^{\infty}\frac{n!}{3^n}$ (razón).
23. $\displaystyle\sum_{n=1}^{\infty}\left(\frac{n}{2n+1}\right)^n$ (raíz).
24. $\displaystyle\sum_{n=1}^{\infty}\left(1-\frac{1}{n}\right)^{n^2}$ (raíz).
25. $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n\ln n}$ (integral).
26. $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n(\ln n)^2}$ (integral).
27. $\displaystyle\sum_{n=1}^{\infty}\frac{3^n}{n^n}$ (raíz).
28. $\displaystyle\sum_{n=1}^{\infty}\left(\frac{n}{n+1}\right)^{n^2}$ (raíz).
29. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{2n-1}$.
30. $\displaystyle\sum_{n=1}^{\infty}\frac{2n+1}{3n+2}$.
31. $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{n}$ (absoluta o condicional).
32. $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}$ (absoluta o condicional).
33. $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{\sqrt{n}}$ (absoluta o condicional).
34. $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n n}{n^2+1}$ (absoluta o condicional).
35. $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}$.
36. $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n n}{2n+1}$.
37. Radio de convergencia de $\displaystyle\sum_{n=1}^{\infty}\frac{x^n}{n}$.
38. Radio de convergencia de $\displaystyle\sum_{n=0}^{\infty}\frac{x^n}{n!}$.
39. Radio de convergencia de $\displaystyle\sum_{n=0}^{\infty} n!\,x^n$.
40. Radio de convergencia de $\displaystyle\sum_{n=1}^{\infty}\frac{(x-2)^n}{3^n}$.
41. Radio de convergencia de $\displaystyle\sum_{n=1}^{\infty} n^3 x^n$.
42. Radio de convergencia de $\displaystyle\sum_{n=1}^{\infty}\frac{x^n}{n\,3^n}$.
43. Escribe la serie de McLaurin de $e^x$.
44. Escribe los cuatro primeros términos de McLaurin de $\cos x$.
45. Escribe la serie de McLaurin de $\dfrac{1}{1-x}$ y su intervalo.
46. Escribe la serie de McLaurin de $\ln(1+x)$.
47. Escribe la serie de McLaurin de $\operatorname{sen} x$.
48. Escribe la serie de Taylor de $e^x$ centrada en $x = 1$.
49. ¿Qué tipo de serie descompone funciones periódicas en senos y cosenos?
50. Halla el valor de $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^2}$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $\dfrac{3}{2}$</div>
<div class="r"><b>02</b> $\dfrac{1}{2}$</div>
<div class="r"><b>03</b> $0$</div>
<div class="r"><b>04</b> $e^{2}$</div>
<div class="r"><b>05</b> $e^{-1}$</div>
<div class="r"><b>06</b> $1$</div>
<div class="r"><b>07</b> $0$</div>
<div class="r"><b>08</b> $0$</div>
<div class="r"><b>09</b> $0$</div>
<div class="r"><b>10</b> $0$</div>
<div class="r"><b>11</b> converge a $1$</div>
<div class="r"><b>12</b> converge a $\dfrac{3}{2}$</div>
<div class="r"><b>13</b> converge a $\dfrac{3}{4}$</div>
<div class="r"><b>14</b> converge a $\dfrac{3}{4}$</div>
<div class="r"><b>15</b> converge a $\dfrac{3}{2}$</div>
<div class="r"><b>16</b> converge a $\dfrac{1}{2}$</div>
<div class="r"><b>17</b> converge a $\dfrac{\pi^2}{6}$</div>
<div class="r"><b>18</b> diverge ($p = 1/2$)</div>
<div class="r"><b>19</b> converge (comparación)</div>
<div class="r"><b>20</b> diverge (comparación con armónica)</div>
<div class="r"><b>21</b> converge a $e^2$</div>
<div class="r"><b>22</b> diverge ($L = \infty$)</div>
<div class="r"><b>23</b> converge ($L = 1/2$)</div>
<div class="r"><b>24</b> converge ($L = e^{-1}$)</div>
<div class="r"><b>25</b> diverge (integral)</div>
<div class="r"><b>26</b> converge (integral)</div>
<div class="r"><b>27</b> converge ($L = 0$)</div>
<div class="r"><b>28</b> converge ($L = e^{-1}$)</div>
<div class="r"><b>29</b> diverge</div>
<div class="r"><b>30</b> diverge ($a_n \to 2/3 \neq 0$)</div>
<div class="r"><b>31</b> condicional ($\ln 2$)</div>
<div class="r"><b>32</b> absoluta ($\pi^2/12$)</div>
<div class="r"><b>33</b> condicional</div>
<div class="r"><b>34</b> condicional</div>
<div class="r"><b>35</b> condicional ($\pi/4$)</div>
<div class="r"><b>36</b> diverge ($a_n \not\to 0$)</div>
<div class="r"><b>37</b> $R = 1$</div>
<div class="r"><b>38</b> $R = \infty$</div>
<div class="r"><b>39</b> $R = 0$</div>
<div class="r"><b>40</b> $R = 3$</div>
<div class="r"><b>41</b> $R = 1$</div>
<div class="r"><b>42</b> $R = 3$</div>
<div class="r"><b>43</b> $\displaystyle\sum_{n=0}^{\infty}\frac{x^n}{n!}$</div>
<div class="r"><b>44</b> $1 - \dfrac{x^2}{2} + \dfrac{x^4}{24} - \dfrac{x^6}{720}$</div>
<div class="r"><b>45</b> $\displaystyle\sum_{n=0}^{\infty}x^n$, $|x| < 1$</div>
<div class="r"><b>46</b> $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}x^n$</div>
<div class="r"><b>47</b> $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!}$</div>
<div class="r"><b>48</b> $e\displaystyle\sum_{n=0}^{\infty}\frac{(x-1)^n}{n!}$</div>
<div class="r"><b>49</b> serie de Fourier</div>
<div class="r"><b>50</b> $\dfrac{\pi^2}{6}$</div>
</div>
