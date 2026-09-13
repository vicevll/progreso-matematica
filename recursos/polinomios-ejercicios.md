# Polinomios y ecuaciones · 50 ejercicios

**Cuaderno de práctica · Álgebra escolar y fundamentos · 10°–11° / Univ 1**
*Raíces, teorema del factor y teorema fundamental del álgebra.*

---

## Formulario

### Polinomios, grado y operaciones

$$P(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0, \qquad a_n \neq 0$$

- Grado $n$, coeficiente líder $a_n$, término constante $a_0$.
- $\deg(P \cdot Q) = \deg P + \deg Q$.
- $\deg(P + Q) \leq \max(\deg P, \deg Q)$ (con igualdad salvo cancelación del término líder).

### División y regla de Ruffini

$$P(x) = D(x)\,Q(x) + R(x), \qquad \deg R < \deg D$$

Ruffini (divisor $x - c$): escribir los coeficientes con ceros incluidos, bajar el primero, multiplicar por $c$ y sumar; el último valor es el resto $R = P(c)$.

### Teorema del resto y del factor

$$R = P(c) \qquad\qquad P(c) = 0 \iff (x - c) \mid P(x)$$

Multiplicidad $m$ de una raíz $c$: $(x - c)^m \mid P$ pero $(x - c)^{m+1}$ no divide a $P$.

### Raíces racionales

Con coeficientes enteros, si $p/q$ es raíz en forma reducida:

$$p \mid a_0, \qquad q \mid a_n$$

### Teorema fundamental del álgebra

Todo polinomio de grado $n \geq 1$ tiene $n$ raíces complejas contando multiplicidad:

$$P(z) = a_n (z - z_1)(z - z_2)\cdots(z - z_n)$$

Con coeficientes reales, las raíces no reales aparecen en pares conjugados $a \pm bi$; todo polinomio real de grado impar tiene al menos una raíz real.

### Relaciones de Vieta

$$x^2 + bx + c: \quad r_1 + r_2 = -b, \quad r_1 r_2 = c$$

$$x^3 + bx^2 + cx + d: \quad \sum r_i = -b, \quad \sum_{i<j} r_i r_j = c, \quad r_1 r_2 r_3 = -d$$

$$a_n x^n + \cdots + a_0: \quad \sum r_i = -\frac{a_{n-1}}{a_n}, \qquad \prod r_i = (-1)^n \frac{a_0}{a_n}$$

### Gráfica

- Líder positivo: grado par sube en ambos extremos; grado impar baja a la izquierda y sube a la derecha.
- Raíz de multiplicidad impar: la gráfica cruza el eje $x$; par: lo toca y rebota.
- Grado $n$: a lo más $n - 1$ extremos locales.

---

## Ejercicios (50)

### Nivel 1 — Grado, suma y multiplicación

1. Halla grado, coeficiente líder y término constante de $7x^5 - 2x^3 + x - 9$.
2. Suma $(4x^2 - 3x + 2) + (2x^2 + 5x - 7)$.
3. Resta $(x^3 - 2x + 5) - (3x^3 + x^2 - 4)$.
4. Multiplica $(3x - 2)(x^2 + x - 4)$.
5. Multiplica $(x + 5)(x - 5)$.
6. Desarrolla $(2x + 3)^2$.
7. Multiplica $(x^2 - 1)(x^2 + x + 1)$.
8. ¿Cuál es el grado del producto de un polinomio de grado $3$ por uno de grado $4$?

### Nivel 2 — División larga y sintética

9. Divide $x^3 + 4x^2 - 3x + 2$ entre $x + 2$.
10. Divide $2x^3 - 5x^2 + 3x - 4$ entre $x - 2$.
11. Divide $x^4 - 3x^2 + 2x - 5$ entre $x + 1$.
12. Divide $x^3 - 8$ entre $x - 2$.
13. Divide $6x^3 + x^2 - 4x + 1$ entre $2x - 1$.
14. Divide $x^5 - 1$ entre $x - 1$.
15. Divide $x^3 + 2x^2 - 5x - 6$ entre $x - 2$.
16. Divide $3x^4 - 2x^3 + x - 4$ entre $x + 1$.

### Nivel 3 — Teorema del resto y del factor

17. Halla el resto de dividir $x^4 - 3x + 5$ entre $x - 2$.
18. Halla el resto de dividir $2x^3 + 3x^2 - 4x + 1$ entre $x + 1$.
19. Halla el resto de dividir $x^3 - 5x^2 + 2x + 8$ entre $x - 3$.
20. ¿Es $x - 3$ factor de $x^3 - 2x^2 - 5x + 6$?
21. ¿Es $x + 2$ factor de $x^3 + 3x^2 - 4x - 12$?
22. Halla $k$ para que $x - 2$ sea factor de $x^3 + kx - 6$.
23. Halla $m$ para que el resto de dividir $x^3 + mx + 4$ entre $x + 2$ sea $0$.
24. Halla $a$ para que el resto de dividir $2x^3 + ax^2 - 3x + 1$ entre $x - 1$ sea $2$.

### Nivel 4 — Raíces racionales

25. Lista las raíces racionales posibles de $x^3 - 6x^2 + 11x - 6$.
26. Lista las raíces racionales posibles de $2x^3 + x^2 - 7x - 6$.
27. Encuentra una raíz racional de $x^3 - 6x^2 + 11x - 6$.
28. Halla todas las raíces de $x^3 + x^2 - 4x - 4$.
29. Halla todas las raíces de $x^3 - 3x^2 - 4x + 12$.
30. Halla todas las raíces de $2x^3 - 3x^2 - 3x + 2$.
31. Halla todas las raíces de $x^3 - 2x^2 - 5x + 6$.
32. Halla todas las raíces de $2x^3 + x^2 - 7x - 6$.

### Nivel 5 — Factorización completa

33. Factoriza $x^3 - 6x^2 + 11x - 6$.
34. Factoriza $x^3 - 4x^2 + x + 6$.
35. Factoriza $x^3 + 2x^2 - 5x - 6$.
36. Factoriza $x^4 - 5x^2 + 4$.
37. Factoriza $x^3 - 3x^2 - 4x + 12$.
38. Factoriza $x^4 - 1$.
39. Factoriza $2x^3 + x^2 - 7x - 6$.
40. Factoriza $x^4 - 2x^3 - 7x^2 + 8x + 12$.

### Nivel 6 — Raíces complejas y TFA

41. Resuelve $x^2 + 9 = 0$ sobre $\mathbb{C}$.
42. Resuelve $x^2 + 4x + 13 = 0$.
43. Resuelve $x^2 - 2x + 5 = 0$.
44. Si $2 + i$ es raíz de un polinomio de coeficientes reales, ¿qué otra raíz se conoce?
45. ¿Cuántas raíces complejas contando multiplicidad tiene $x^6 - 1$?
46. Factoriza $x^2 + 1$ sobre $\mathbb{C}$.

### Nivel 7 — Vieta y aplicaciones

47. Construye el polinomio mónico de grado 2 con raíces $3$ y $-5$.
48. Construye el polinomio mónico de grado 3 con raíces $1$, $2$ y $-3$.
49. Para $x^3 - 6x^2 + 11x - 6$, halla la suma y el producto de sus raíces por Vieta.
50. Un polinomio de grado 4 con coeficientes reales tiene la raíz $2 - i$; ¿qué otra raíz debe tener?

---

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> Grado $5$, líder $7$, constante $-9$</div>
<div class="r"><b>02</b> $6x^2 + 2x - 5$</div>
<div class="r"><b>03</b> $-2x^3 - x^2 - 2x + 9$</div>
<div class="r"><b>04</b> $3x^3 + x^2 - 14x + 8$</div>
<div class="r"><b>05</b> $x^2 - 25$</div>
<div class="r"><b>06</b> $4x^2 + 12x + 9$</div>
<div class="r"><b>07</b> $x^4 + x^3 - x - 1$</div>
<div class="r"><b>08</b> $7$</div>
<div class="r"><b>09</b> Cociente $x^2 + 2x - 7$, resto $16$</div>
<div class="r"><b>10</b> Cociente $2x^2 - x + 1$, resto $-2$</div>
<div class="r"><b>11</b> Cociente $x^3 - x^2 - 2x + 4$, resto $-9$</div>
<div class="r"><b>12</b> Cociente $x^2 + 2x + 4$, resto $0$</div>
<div class="r"><b>13</b> Cociente $3x^2 + 2x - 1$, resto $0$</div>
<div class="r"><b>14</b> Cociente $x^4 + x^3 + x^2 + x + 1$, resto $0$</div>
<div class="r"><b>15</b> Cociente $x^2 + 4x + 3$, resto $0$</div>
<div class="r"><b>16</b> Cociente $3x^3 - 5x^2 + 5x - 4$, resto $0$</div>
<div class="r"><b>17</b> $15$</div>
<div class="r"><b>18</b> $6$</div>
<div class="r"><b>19</b> $-4$</div>
<div class="r"><b>20</b> Sí, porque $P(3) = 0$</div>
<div class="r"><b>21</b> Sí, porque $P(-2) = 0$</div>
<div class="r"><b>22</b> $k = -1$</div>
<div class="r"><b>23</b> $m = -2$</div>
<div class="r"><b>24</b> $a = 2$</div>
<div class="r"><b>25</b> $\pm 1, \pm 2, \pm 3, \pm 6$</div>
<div class="r"><b>26</b> $\pm 1, \pm 2, \pm 3, \pm 6, \pm \tfrac{1}{2}, \pm \tfrac{3}{2}$</div>
<div class="r"><b>27</b> $1$</div>
<div class="r"><b>28</b> $-1,\ 2,\ -2$</div>
<div class="r"><b>29</b> $2,\ 3,\ -2$</div>
<div class="r"><b>30</b> $2,\ \tfrac{1}{2},\ -1$</div>
<div class="r"><b>31</b> $1,\ 3,\ -2$</div>
<div class="r"><b>32</b> $-1,\ 2,\ -\tfrac{3}{2}$</div>
<div class="r"><b>33</b> $(x - 1)(x - 2)(x - 3)$</div>
<div class="r"><b>34</b> $(x + 1)(x - 2)(x - 3)$</div>
<div class="r"><b>35</b> $(x - 2)(x + 1)(x + 3)$</div>
<div class="r"><b>36</b> $(x - 1)(x + 1)(x - 2)(x + 2)$</div>
<div class="r"><b>37</b> $(x - 2)(x - 3)(x + 2)$</div>
<div class="r"><b>38</b> $(x - 1)(x + 1)(x^2 + 1)$</div>
<div class="r"><b>39</b> $(x + 1)(x - 2)(2x + 3)$</div>
<div class="r"><b>40</b> $(x - 2)(x + 1)(x - 3)(x + 2)$</div>
<div class="r"><b>41</b> $x = \pm 3i$</div>
<div class="r"><b>42</b> $x = -2 \pm 3i$</div>
<div class="r"><b>43</b> $x = 1 \pm 2i$</div>
<div class="r"><b>44</b> $2 - i$</div>
<div class="r"><b>45</b> $6$</div>
<div class="r"><b>46</b> $(x - i)(x + i)$</div>
<div class="r"><b>47</b> $x^2 + 2x - 15$</div>
<div class="r"><b>48</b> $x^3 - 7x + 6$</div>
<div class="r"><b>49</b> Suma $6$, producto $6$</div>
<div class="r"><b>50</b> $2 + i$</div>
</div>
