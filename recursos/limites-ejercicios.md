# Límites y continuidad · práctica

## Formulario

### Definición de límite
$$\lim_{x\to c} f(x)=L \iff \forall \varepsilon>0\ \exists \delta>0:\ 0<|x-c|<\delta \Rightarrow |f(x)-L|<\varepsilon$$

### Límites laterales
$$\lim_{x\to c} f(x)=L \iff \lim_{x\to c^-} f(x)=\lim_{x\to c^+} f(x)=L$$

### Álgebra de límites
$$\lim(f\pm g)=L\pm M,\qquad \lim(fg)=L\cdot M,\qquad \lim\frac{f}{g}=\frac{L}{M}\ (M\neq0)$$

### Sustitución directa
Si $f$ es continua en $c$, entonces $\lim_{x\to c}f(x)=f(c)$.

### Formas indeterminadas
$$\frac{0}{0},\quad \frac{\infty}{\infty},\quad 0\cdot\infty,\quad \infty-\infty,\quad 1^\infty,\quad 0^0,\quad \infty^0$$

### Técnicas
1. Factorización: $\dfrac{x^2-a^2}{x-a}=x+a$.
2. Racionalización: multiplicar por el conjugado.
3. Común denominador para $\infty-\infty$.
4. División por la potencia dominante.
5. L'Hôpital: $\lim\dfrac{f}{g}=\lim\dfrac{f'}{g'}$ si hay $\frac{0}{0}$ o $\frac{\infty}{\infty}$.

### Límites al infinito (cociente de polinomios)
1. $\deg P<\deg Q$: límite $0$.
2. $\deg P=\deg Q$: cociente de coeficientes líderes.
3. $\deg P>\deg Q$: límite $\pm\infty$.

### Límites notables
$$\lim_{x\to0}\frac{\text{sen}\,x}{x}=1,\qquad \lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12$$
$$\lim_{x\to0}\frac{e^x-1}{x}=1,\qquad \lim_{n\to\infty}\left(1+\frac1n\right)^n=e$$

### Asíntotas
1. Vertical en $x=c$ si algún límite lateral es $\pm\infty$.
2. Horizontal $y=L$ si $\lim_{x\to\pm\infty}f(x)=L$.

### Continuidad
$f$ es continua en $c$ si $f(c)$ existe, $\lim_{x\to c}f(x)$ existe y ambos coinciden.

### Tipos de discontinuidad
1. Evitable: el límite existe pero no coincide con $f(c)$.
2. De salto: laterales finitos y distintos.
3. Infinita: algún lateral es $\pm\infty$.

### Teorema del valor intermedio
Si $f$ es continua en $[a,b]$ y $k$ está entre $f(a)$ y $f(b)$, existe $c\in(a,b)$ con $f(c)=k$.

## Ejercicios (50)

### Sustitución directa
1. $\lim_{x\to2}(x^2+3x-1)$.
2. $\lim_{x\to-2}(2x^3-x+4)$.
3. $\lim_{x\to0}\dfrac{3x-1}{x+2}$.
4. $\lim_{x\to3}\sqrt{2x+3}$.
5. $\lim_{x\to1}\dfrac{x^2+2x}{x+3}$.
6. $\lim_{x\to4}\dfrac{2x+1}{x-1}$.
7. $\lim_{x\to2}\dfrac{x+1}{x^2-1}$.
8. $\lim_{x\to0}\dfrac{x^2-2x+5}{2x+1}$.

### Factorización
9. $\lim_{x\to3}\dfrac{x^2-9}{x-3}$.
10. $\lim_{x\to-1}\dfrac{x^2-1}{x+1}$.
11. $\lim_{x\to2}\dfrac{x^2-5x+6}{x-2}$.
12. $\lim_{x\to1}\dfrac{x^2-3x+2}{x-1}$.
13. $\lim_{x\to-3}\dfrac{x^2+x-6}{x+3}$.
14. $\lim_{x\to0}\dfrac{x^3-x}{x}$.
15. $\lim_{x\to2}\dfrac{x^3-8}{x-2}$.
16. $\lim_{x\to1}\dfrac{x^3-1}{x-1}$.
17. $\lim_{x\to-1}\dfrac{x^3+1}{x+1}$.
18. $\lim_{x\to4}\dfrac{x^2-16}{x^2-3x-4}$.
19. $\lim_{x\to3}\dfrac{x^2-2x-3}{x^2-9}$.

### Racionalización
20. $\lim_{x\to0}\dfrac{\sqrt{x+1}-1}{x}$.
21. $\lim_{x\to4}\dfrac{\sqrt{x}-2}{x-4}$.
22. $\lim_{x\to0}\dfrac{\sqrt{4+x}-2}{x}$.
23. $\lim_{x\to9}\dfrac{\sqrt{x}-3}{x-9}$.
24. $\lim_{x\to0}\dfrac{\sqrt{x+9}-3}{x}$.
25. $\lim_{x\to1}\dfrac{\sqrt{x}-1}{x-1}$.
26. $\lim_{x\to0}\dfrac{\sqrt{1+x}-\sqrt{1-x}}{x}$.
27. $\lim_{x\to0}\dfrac{\sqrt{x^2+9}-3}{x^2}$.
28. $\lim_{x\to2}\dfrac{\sqrt{x+2}-2}{x-2}$.

### Límites al infinito
29. $\lim_{x\to\infty}\dfrac{2x^2+3x}{5x^2-1}$.
30. $\lim_{x\to\infty}\dfrac{5x^3-2x}{4x^3+x^2}$.
31. $\lim_{x\to\infty}\dfrac{3x+1}{x^2+2x}$.
32. $\lim_{x\to\infty}\dfrac{x^2+1}{x+1}$.
33. $\lim_{x\to\infty}\dfrac{7x^4-x^2}{2x^4+3x}$.
34. $\lim_{x\to\infty}\dfrac{4x^3+2}{x^3-x^2+x}$.
35. $\lim_{x\to\infty}\dfrac{(2x+1)(x-3)}{x^2+4}$.
36. $\lim_{x\to-\infty}\dfrac{3x^2+1}{x^2-2}$.
37. $\lim_{x\to\infty}\left(\sqrt{x^2+1}-x\right)$.
38. $\lim_{x\to\infty}\dfrac{\text{sen}\,x}{x}$.

### Límites notables
39. $\lim_{x\to0}\dfrac{\text{sen}\,3x}{x}$.
40. $\lim_{x\to0}\dfrac{\text{sen}\,5x}{2x}$.
41. $\lim_{x\to0}\dfrac{1-\cos x}{x}$.
42. $\lim_{x\to0}\dfrac{1-\cos x}{x^2}$.
43. $\lim_{x\to\infty}\left(1+\dfrac{1}{x}\right)^{2x}$.
44. $\lim_{x\to0}\dfrac{\tan x}{x}$.
45. $\lim_{x\to0}\dfrac{e^x-1}{x}$.

### Continuidad
46. Halla $k$ para que $f(x)=\begin{cases}x^2+1 & x<2\\ kx & x\geq2\end{cases}$ sea continua.
47. Analiza la continuidad de $f(x)=\dfrac{x-1}{x^2-1}$.
48. ¿Es continua $f(x)=\dfrac{x^2-4}{x-2}$ en $x=2$?
49. Halla $k$ para que $f(x)=\begin{cases}kx+1 & x<1\\ x^2 & x\geq1\end{cases}$ sea continua.
50. Indica el tipo de discontinuidad de $f(x)=\dfrac{1}{x-3}$.

## Solucionario · resultados
<div class="results">
<div class="r"><b>01</b> $9$</div>
<div class="r"><b>02</b> $-10$</div>
<div class="r"><b>03</b> $-\dfrac{1}{2}$</div>
<div class="r"><b>04</b> $3$</div>
<div class="r"><b>05</b> $\dfrac{3}{4}$</div>
<div class="r"><b>06</b> $3$</div>
<div class="r"><b>07</b> $1$</div>
<div class="r"><b>08</b> $5$</div>
<div class="r"><b>09</b> $6$</div>
<div class="r"><b>10</b> $-2$</div>
<div class="r"><b>11</b> $-1$</div>
<div class="r"><b>12</b> $-1$</div>
<div class="r"><b>13</b> $-5$</div>
<div class="r"><b>14</b> $-1$</div>
<div class="r"><b>15</b> $12$</div>
<div class="r"><b>16</b> $3$</div>
<div class="r"><b>17</b> $3$</div>
<div class="r"><b>18</b> $\dfrac{8}{5}$</div>
<div class="r"><b>19</b> $\dfrac{2}{3}$</div>
<div class="r"><b>20</b> $\dfrac{1}{2}$</div>
<div class="r"><b>21</b> $\dfrac{1}{4}$</div>
<div class="r"><b>22</b> $\dfrac{1}{4}$</div>
<div class="r"><b>23</b> $\dfrac{1}{6}$</div>
<div class="r"><b>24</b> $\dfrac{1}{6}$</div>
<div class="r"><b>25</b> $\dfrac{1}{2}$</div>
<div class="r"><b>26</b> $1$</div>
<div class="r"><b>27</b> $\dfrac{1}{6}$</div>
<div class="r"><b>28</b> $\dfrac{1}{4}$</div>
<div class="r"><b>29</b> $\dfrac{2}{5}$</div>
<div class="r"><b>30</b> $\dfrac{5}{4}$</div>
<div class="r"><b>31</b> $0$</div>
<div class="r"><b>32</b> $+\infty$</div>
<div class="r"><b>33</b> $\dfrac{7}{2}$</div>
<div class="r"><b>34</b> $4$</div>
<div class="r"><b>35</b> $2$</div>
<div class="r"><b>36</b> $3$</div>
<div class="r"><b>37</b> $0$</div>
<div class="r"><b>38</b> $0$</div>
<div class="r"><b>39</b> $3$</div>
<div class="r"><b>40</b> $\dfrac{5}{2}$</div>
<div class="r"><b>41</b> $0$</div>
<div class="r"><b>42</b> $\dfrac{1}{2}$</div>
<div class="r"><b>43</b> $e^2$</div>
<div class="r"><b>44</b> $1$</div>
<div class="r"><b>45</b> $1$</div>
<div class="r"><b>46</b> $k=\dfrac{5}{2}$</div>
<div class="r"><b>47</b> evitable en $x=1$; infinita en $x=-1$</div>
<div class="r"><b>48</b> no, evitable (límite $4$)</div>
<div class="r"><b>49</b> $k=0$</div>
<div class="r"><b>50</b> infinita en $x=3$</div>
</div>
