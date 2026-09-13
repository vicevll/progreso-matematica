# Teoría de números · Ejercicios

Área: **Matemática discreta y fundamentos** · Nivel: **Univ 3–4** · Divisibilidad, congruencias, primos y criptografía.

## Formulario

### Divisibilidad, mcd y Bézout

1. $a \mid b \iff \exists k \in \mathbb{Z},\ b = ak$.
2. $\text{mcd}(a, b) = \text{mcd}(b, r)$ con $a = bq + r$.
3. $ax + by = \text{mcd}(a, b)$ (identidad de Bézout).
4. $l = \text{mcm}(a, b)$ cumple $\text{mcd}(a, b) \cdot \text{mcm}(a, b) = a \cdot b$.

### Congruencias

1. $a \equiv b \pmod n \iff n \mid (a - b)$.
2. $a \equiv b,\ c \equiv d \implies a + c \equiv b + d$ y $ac \equiv bd \pmod n$.
3. $a^{-1} \pmod n$ existe $\iff \text{mcd}(a, n) = 1$.
4. $ax \equiv b \pmod n$ tiene solución $\iff \text{mcd}(a, n) \mid b$.

### Fermat y Euler

1. $\varphi(n) = n \prod_{i=1}^{k} \left( 1 - \frac{1}{p_i} \right)$ para $n = p_1^{e_1} \cdots p_k^{e_k}$.
2. $\varphi(p) = p - 1$, $\varphi(p^k) = p^k - p^{k-1}$.
3. $a^{p-1} \equiv 1 \pmod p$ si $p$ primo y $\text{mcd}(a,p)=1$ (Fermat).
4. $a^{\varphi(n)} \equiv 1 \pmod n$ si $\text{mcd}(a,n)=1$ (Euler).

### Teorema chino del resto

1. $x \equiv a_i \pmod{m_i}$ con $m_i$ coprimos dos a dos tiene solución única módulo $M = \prod m_i$.
2. $x \equiv \sum_i a_i M_i y_i \pmod M$, con $M_i = M/m_i$ y $y_i \equiv M_i^{-1} \pmod{m_i}$.

### Ecuaciones diofánticas

1. $ax + by = c$ tiene solución $\iff \text{mcd}(a,b) \mid c$.
2. $x = x_0 + \frac{b}{d} t$, $y = y_0 - \frac{a}{d} t$, con $d = \text{mcd}(a,b)$.

### RSA básico

1. $n = pq$, $\varphi(n) = (p-1)(q-1)$.
2. $e$ público con $\text{mcd}(e, \varphi(n)) = 1$; $d \equiv e^{-1} \pmod{\varphi(n)}$.
3. Cifrar: $c \equiv m^{e} \pmod n$. Descifrar: $m \equiv c^{d} \pmod n$.

## Ejercicios (50)

### Bloque A · mcd y Bézout (1–10)

1. Calcula $\text{mcd}(84, 60)$.
2. Calcula $\text{mcd}(1071, 462)$.
3. Calcula $\text{mcd}(270, 192)$.
4. Calcula $\text{mcd}(1001, 273)$.
5. Calcula $\text{mcd}(391, 323)$.
6. Expresa $\text{mcd}(21, 15)$ por Bézout.
7. Expresa $\text{mcd}(84, 60)$ por Bézout.
8. Expresa $\text{mcd}(1001, 273)$ por Bézout.
9. Expresa $\text{mcd}(270, 192)$ por Bézout.
10. Calcula $\text{mcd}(828, 372)$.

### Bloque B · Congruencias (11–20)

11. Calcula $12345 \bmod 7$.
12. Calcula $2^{10} \bmod 1000$.
13. Resuelve $3x \equiv 5 \pmod{11}$.
14. Resuelve $7x \equiv 3 \pmod{10}$.
15. Resuelve $4x \equiv 1 \pmod 7$.
16. Resuelve $5x \equiv 2 \pmod{13}$.
17. Resuelve $6x \equiv 4 \pmod{10}$.
18. ¿Tiene solución $6x \equiv 5 \pmod 9$? Justifica.
19. Calcula el inverso de $17$ módulo $60$.
20. Calcula $9^{2025} \bmod 10$.

### Bloque C · Fermat y Euler (21–30)

21. Calcula $\varphi(36)$.
22. Calcula $\varphi(100)$.
23. Calcula $\varphi(72)$.
24. Calcula $\varphi(210)$.
25. Calcula $3^{100} \bmod 7$.
26. Calcula $5^{2024} \bmod 7$.
27. Calcula $2^{1000} \bmod 13$.
28. Calcula $7^{222} \bmod 11$.
29. Calcula $3^{2025} \bmod 7$.
30. Calcula $2^{2025} \bmod 15$.

### Bloque D · Teorema chino del resto (31–38)

31. Resuelve $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$.
32. Resuelve $x \equiv 1 \pmod 4$, $x \equiv 2 \pmod 3$.
33. Resuelve $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$, $x \equiv 2 \pmod 7$.
34. Resuelve $x \equiv 0 \pmod 4$, $x \equiv 0 \pmod 7$.
35. Resuelve $x \equiv 1 \pmod 2$, $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$.
36. Resuelve $x \equiv 3 \pmod 4$, $x \equiv 2 \pmod 9$.
37. Resuelve $x \equiv 5 \pmod 6$, $x \equiv 4 \pmod{11}$.
38. Resuelve $x \equiv 6 \pmod 7$, $x \equiv 5 \pmod 8$, $x \equiv 4 \pmod 9$.

### Bloque E · Ecuaciones diofánticas (39–45)

39. Resuelve $6x + 15y = 9$.
40. Resuelve $4x + 6y = 7$.
41. Resuelve $7x + 11y = 1$.
42. Resuelve $15x + 25y = 10$.
43. Resuelve $12x + 18y = 30$.
44. ¿Tiene solución entera $8x + 12y = 6$?
45. Resuelve $5x + 7y = 1$.

### Bloque F · RSA básico (46–50)

46. En RSA con $p = 5$, $q = 11$, calcula $n$ y $\varphi(n)$.
47. Con los datos anteriores y $e = 3$, calcula la clave privada $d$.
48. Con $n = 55$, $e = 3$, cifra el mensaje $m = 9$.
49. Con $n = 55$, $e = 3$, descifra el criptograma $c = 14$.
50. En RSA con $p = 3$, $q = 11$, $e = 3$, calcula $n$, $\varphi(n)$ y $d$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $12$</div>
<div class="r"><b>02</b> $21$</div>
<div class="r"><b>03</b> $6$</div>
<div class="r"><b>04</b> $91$</div>
<div class="r"><b>05</b> $17$</div>
<div class="r"><b>06</b> $3 = 3 \cdot 15 - 2 \cdot 21$</div>
<div class="r"><b>07</b> $12 = 3 \cdot 60 - 2 \cdot 84$</div>
<div class="r"><b>08</b> $91 = 4 \cdot 273 - 1001$</div>
<div class="r"><b>09</b> $6 = 5 \cdot 270 - 7 \cdot 192$</div>
<div class="r"><b>10</b> $12$</div>
<div class="r"><b>11</b> $4$</div>
<div class="r"><b>12</b> $24$</div>
<div class="r"><b>13</b> $x \equiv 9 \pmod{11}$</div>
<div class="r"><b>14</b> $x \equiv 9 \pmod{10}$</div>
<div class="r"><b>15</b> $x \equiv 2 \pmod 7$</div>
<div class="r"><b>16</b> $x \equiv 3 \pmod{13}$</div>
<div class="r"><b>17</b> $x \equiv 4, 9 \pmod{10}$</div>
<div class="r"><b>18</b> no, pues $3 \nmid 5$</div>
<div class="r"><b>19</b> $53$</div>
<div class="r"><b>20</b> $9$</div>
<div class="r"><b>21</b> $12$</div>
<div class="r"><b>22</b> $40$</div>
<div class="r"><b>23</b> $24$</div>
<div class="r"><b>24</b> $48$</div>
<div class="r"><b>25</b> $4$</div>
<div class="r"><b>26</b> $4$</div>
<div class="r"><b>27</b> $3$</div>
<div class="r"><b>28</b> $5$</div>
<div class="r"><b>29</b> $6$</div>
<div class="r"><b>30</b> $2$</div>
<div class="r"><b>31</b> $x \equiv 8 \pmod{15}$</div>
<div class="r"><b>32</b> $x \equiv 5 \pmod{12}$</div>
<div class="r"><b>33</b> $x \equiv 23 \pmod{105}$</div>
<div class="r"><b>34</b> $x \equiv 0 \pmod{28}$</div>
<div class="r"><b>35</b> $x \equiv 23 \pmod{30}$</div>
<div class="r"><b>36</b> $x \equiv 11 \pmod{36}$</div>
<div class="r"><b>37</b> $x \equiv 59 \pmod{66}$</div>
<div class="r"><b>38</b> $x \equiv 13 \pmod{504}$</div>
<div class="r"><b>39</b> $x = 9 + 5t,\ y = -3 - 2t$</div>
<div class="r"><b>40</b> sin solución ($2 \nmid 7$)</div>
<div class="r"><b>41</b> $(x, y) = (8, -5) + (11, -7)t$</div>
<div class="r"><b>42</b> $(x, y) = (4, -2) + (5, -3)t$</div>
<div class="r"><b>43</b> $(x, y) = (1, 1) + (3, -2)t$</div>
<div class="r"><b>44</b> sin solución ($4 \nmid 6$)</div>
<div class="r"><b>45</b> $(x, y) = (3, -2) + (7, -5)t$</div>
<div class="r"><b>46</b> $n = 55,\ \varphi(n) = 40$</div>
<div class="r"><b>47</b> $d = 27$</div>
<div class="r"><b>48</b> $c = 14$</div>
<div class="r"><b>49</b> $m = 9$</div>
<div class="r"><b>50</b> $n = 33,\ \varphi(n) = 20,\ d = 7$</div>
</div>
