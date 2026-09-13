# Sucesiones y sumatorias · 50 ejercicios
**Cuaderno de práctica · Álgebra escolar y fundamentos · 10°–11°**
*Progresiones, notación sigma, inducción matemática.*

## Formulario
### Sucesiones
Una sucesión asigna a cada $n$ un término $a_n$. Puede darse por término general o por recurrencia:
$$a_n = f(n), \qquad a_1 \text{ dado}, \quad a_{n+1} = g(a_n, a_{n-1}, \ldots)$$

### Progresión aritmética (PA)
Diferencia constante $d = a_{n+1} - a_n$:
$$a_n = a_1 + (n-1)d, \qquad a_m = a_k + (m-k)d$$
$$S_n = \frac{n(a_1 + a_n)}{2} = \frac{n\big(2a_1 + (n-1)d\big)}{2}$$

### Progresión geométrica (PG)
Razón constante $r = \dfrac{a_{n+1}}{a_n}$:
$$a_n = a_1 r^{n-1}, \qquad a_k^2 = a_{k-1}\,a_{k+1}$$
$$S_n = a_1\frac{1 - r^n}{1 - r} = a_1\frac{r^n - 1}{r - 1} \quad (r \neq 1)$$

### Series geométricas infinitas
$$S_\infty = \frac{a_1}{1 - r} \quad (|r| < 1)$$
$$\sum_{k=0}^{\infty} r^k = \frac{1}{1 - r} \quad (|r| < 1)$$

### Notación sigma y propiedades
$$\sum_{k=1}^{n} a_k = a_1 + a_2 + \cdots + a_n$$
$$\sum_{k=1}^{n}(a_k + b_k) = \sum_{k=1}^{n} a_k + \sum_{k=1}^{n} b_k$$
$$\sum_{k=1}^{n} c\,a_k = c \sum_{k=1}^{n} a_k, \qquad \sum_{k=1}^{n} c = n c$$
$$\text{Telescópica: } \sum_{k=1}^{n}\big(u_k - u_{k+1}\big) = u_1 - u_{n+1}$$

### Sumas notables
| Suma | Fórmula |
| --- | --- |
| $\sum_{k=1}^n k$ | $\frac{n(n+1)}{2}$ |
| $\sum_{k=1}^n k^2$ | $\frac{n(n+1)(2n+1)}{6}$ |
| $\sum_{k=1}^n k^3$ | $\left(\frac{n(n+1)}{2}\right)^2$ |
| $\sum_{k=1}^n (2k-1)$ | $n^2$ |
| $\sum_{k=1}^n c$ | $nc$ |

### Inducción matemática
Para probar $P(n)$ para todo $n \geq n_0$:
1. **Base:** verifica $P(n_0)$.
2. **Hipótesis:** supón $P(k)$ verdadera.
3. **Paso:** demuestra $P(k+1)$ usando la hipótesis.
4. **Conclusión:** $P(n)$ vale para todo $n \geq n_0$.

La **inducción fuerte** supone $P(j)$ verdadera para todos los $j \leq k$.

### Límites de sucesiones
$$\lim_{n\to\infty} a_n = L \iff \forall \varepsilon > 0\ \exists N:\ n > N \Rightarrow |a_n - L| < \varepsilon$$
- Si $|r| < 1$ entonces $r^n \to 0$.
- En $\dfrac{p(n)}{q(n)}$ con polinomios manda el término de mayor grado.
- Toda sucesión monótona y acotada converge.

## Ejercicios (50)
### Nivel 1 · Reconocimiento de sucesiones (1–10)
1. Escribe los cinco primeros términos de $a_n = 4n - 3$.
2. En la PA $2, 5, 8, \ldots$, halla $a_{15}$.
3. En la PA $7, 12, 17, \ldots$, halla $a_{10}$.
4. En una PA se tiene $a_5 = 20$ y $a_9 = 36$. Halla $a_1$ y $d$.
5. En la PG $3, 6, 12, \ldots$, halla $a_8$.
6. En una PG con $a_1 = 5$ y $r = 2$, halla $a_6$.
7. En la PG $81, 27, 9, \ldots$, halla $a_6$.
8. Con la recurrencia $a_1 = 2$, $a_{n+1} = a_n + 5$, escribe los cuatro primeros términos.
9. Con la recurrencia $a_1 = 3$, $a_{n+1} = 2a_n - 1$, escribe los cuatro primeros términos.
10. Halla el término general de $1, 4, 9, 16, \ldots$

### Nivel 2 · Aplicación directa (11–20)
11. En la sucesión $a_n = 2n + 1$, ¿qué posición ocupa el término $101$?
12. Suma los 20 primeros términos de la PA $5, 9, 13, \ldots$
13. Calcula $1 + 2 + 3 + \cdots + 40$.
14. Calcula $1 + 3 + 5 + \cdots + 99$.
15. En la PA con $a_1 = 6$ y $d = -3$, halla $S_{10}$.
16. Calcula $2 + 6 + 18 + \cdots$ hasta 10 términos.
17. Calcula $S_8$ de la PG con $a_1 = 1$ y $r = \frac{1}{2}$.
18. Halla la suma de la serie $4 + 2 + 1 + \frac{1}{2} + \cdots$
19. Halla la suma de la serie infinita con $a_1 = 9$ y $r = \frac{1}{3}$.
20. Calcula $\displaystyle\sum_{k=1}^{20} k$.

### Nivel 3 · Sigma y sumas notables (21–30)
21. Calcula $\displaystyle\sum_{k=1}^{10} k^2$.
22. Calcula $\displaystyle\sum_{k=1}^{6} k^3$.
23. Calcula $\displaystyle\sum_{k=1}^{30} (2k + 3)$.
24. Calcula $\displaystyle\sum_{k=1}^{15} (k^2 - k)$.
25. Expresa $\displaystyle\sum_{k=1}^{n} (4k - 1)$ en función de $n$.
26. Calcula $\displaystyle\sum_{k=1}^{50} (3k^2 + 1)$.
27. Calcula $\displaystyle\sum_{k=0}^{\infty} \left(\frac{1}{3}\right)^k$.
28. Prueba por inducción que $\displaystyle\sum_{k=1}^{n} (2k - 1) = n^2$.
29. Prueba por inducción que $\displaystyle\sum_{k=1}^{n} 2^k = 2^{n+1} - 2$.
30. Prueba que $n^2 + n$ es par para todo entero $n$ (divide en casos).

### Nivel 4 · Inducción, recurrencias y límites (31–40)
31. Calcula $\displaystyle\lim_{n\to\infty} \frac{3n^2 + 2}{n^2 - 5}$.
32. Calcula $\displaystyle\lim_{n\to\infty} \frac{5n + 1}{2n^2 + 3}$.
33. Calcula $\displaystyle\lim_{n\to\infty} \frac{(-1)^n}{n}$.
34. Calcula $\displaystyle\lim_{n\to\infty} \left(\frac{2}{3}\right)^n$.
35. Calcula $\displaystyle\lim_{n\to\infty} \frac{4n^3 - n}{2n^3 + n^2}$.
36. Resuelve la recurrencia $a_n = 2a_{n-1} + 3$, con $a_1 = 1$.
37. Resuelve la recurrencia $a_n = a_{n-1} + 2n$, con $a_1 = 1$.
38. Prueba por inducción que $\displaystyle\sum_{i=1}^{n} F_i = F_{n+2} - 1$, donde $F_i$ es la sucesión de Fibonacci.
39. Prueba por inducción que $\displaystyle\sum_{k=1}^{n} k^3 = \left(\frac{n(n+1)}{2}\right)^2$.
40. Prueba por inducción que $n! > 2^n$ para todo $n \geq 4$.

### Nivel 5 · Desafío (41–50)
41. Suma todos los múltiplos positivos de 3 menores que 200.
42. ¿Cuántos términos de la PA $3, 8, 13, \ldots$ suman menos de 1000?
43. Un capital de $1000$ dólares crece al $5\%$ anual. ¿Cuánto vale tras 10 años?
44. Una pelota cae desde 10 m y en cada rebote alcanza $\frac{3}{5}$ de la altura anterior. Halla la distancia total recorrida.
45. Calcula $\displaystyle\sum_{k=1}^{\infty} \frac{2}{3^k}$.
46. Halla una fórmula cerrada para $\displaystyle\sum_{k=1}^{n} \frac{1}{k(k+1)}$.
47. Resuelve la recurrencia $a_n = a_{n-1} + 3^{n-1}$, con $a_1 = 1$.
48. Halla el límite de la sucesión definida por $a_1 = 1$ y $a_{n+1} = \frac{1}{2}a_n + 1$.
49. Sabiendo que $\displaystyle\sum_{k=1}^{n}(2k-1) = n^2$, calcula $\displaystyle\sum_{k=1}^{100}(2k-1)$.
50. Halla la suma de los 10 primeros números de Fibonacci.

## Solucionario · resultados
<div class="results">
<div class="r"><b>01</b> $1, 5, 9, 13, 17$</div>
<div class="r"><b>02</b> $44$</div>
<div class="r"><b>03</b> $52$</div>
<div class="r"><b>04</b> $a_1 = 4$, $d = 4$</div>
<div class="r"><b>05</b> $384$</div>
<div class="r"><b>06</b> $160$</div>
<div class="r"><b>07</b> $\frac{1}{3}$</div>
<div class="r"><b>08</b> $2, 7, 12, 17$</div>
<div class="r"><b>09</b> $3, 5, 9, 17$</div>
<div class="r"><b>10</b> $a_n = n^2$</div>
<div class="r"><b>11</b> $n = 50$</div>
<div class="r"><b>12</b> $860$</div>
<div class="r"><b>13</b> $820$</div>
<div class="r"><b>14</b> $2500$</div>
<div class="r"><b>15</b> $-75$</div>
<div class="r"><b>16</b> $59048$</div>
<div class="r"><b>17</b> $\frac{255}{128}$</div>
<div class="r"><b>18</b> $8$</div>
<div class="r"><b>19</b> $\frac{27}{2}$</div>
<div class="r"><b>20</b> $210$</div>
<div class="r"><b>21</b> $385$</div>
<div class="r"><b>22</b> $441$</div>
<div class="r"><b>23</b> $1020$</div>
<div class="r"><b>24</b> $1120$</div>
<div class="r"><b>25</b> $n(2n+1)$</div>
<div class="r"><b>26</b> $128825$</div>
<div class="r"><b>27</b> $\frac{3}{2}$</div>
<div class="r"><b>28</b> Bosquejo: base $1 = 1$; paso $k^2 + (2k+1) = (k+1)^2$.</div>
<div class="r"><b>29</b> Bosquejo: base $2 = 2$; paso $(2^{k+1}-2)+2^{k+1} = 2^{k+2}-2$.</div>
<div class="r"><b>30</b> Bosquejo: si $n$ es par, $n(n+1)$ es par; si $n$ es impar, $n+1$ es par.</div>
<div class="r"><b>31</b> $3$</div>
<div class="r"><b>32</b> $0$</div>
<div class="r"><b>33</b> $0$</div>
<div class="r"><b>34</b> $0$</div>
<div class="r"><b>35</b> $2$</div>
<div class="r"><b>36</b> $a_n = 2^{n+1} - 3$</div>
<div class="r"><b>37</b> $a_n = n^2 + n - 1$</div>
<div class="r"><b>38</b> Bosquejo: base $F_1 = F_3 - 1$; paso $F_{k+2}-1+F_{k+1} = F_{k+3}-1$.</div>
<div class="r"><b>39</b> Bosquejo: base $1 = 1$; paso $\left(\frac{k(k+1)}{2}\right)^2 + (k+1)^3 = \left(\frac{(k+1)(k+2)}{2}\right)^2$.</div>
<div class="r"><b>40</b> Bosquejo: base $24 > 16$; paso $(k+1)! = (k+1)k! > (k+1)2^k \geq 2^{k+1}$.</div>
<div class="r"><b>41</b> $6633$</div>
<div class="r"><b>42</b> $19$ términos, con suma $912$</div>
<div class="r"><b>43</b> $1000(1.05)^{10} \approx 1628.89$ dólares</div>
<div class="r"><b>44</b> $40$ m</div>
<div class="r"><b>45</b> $1$</div>
<div class="r"><b>46</b> $\frac{n}{n+1}$</div>
<div class="r"><b>47</b> $a_n = \frac{3^n - 1}{2}$</div>
<div class="r"><b>48</b> $2$</div>
<div class="r"><b>49</b> $10000$</div>
<div class="r"><b>50</b> $143$</div>
</div>
