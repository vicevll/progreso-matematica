# Matemática discreta · Ejercicios

## Formulario

### Álgebra booleana

Operaciones sobre $\{0, 1\}$: AND ($\land$), OR ($\lor$) y NOT ($\neg$). Leyes clave:

$$x \land (y \lor z) = (x \land y) \lor (x \land z), \qquad x \lor (x \land y) = x$$

$$\neg(x \land y) = \neg x \lor \neg y, \qquad \neg(x \lor y) = \neg x \land \neg y$$

Identidades: $x \lor \neg x = 1$, $x \land \neg x = 0$, $x \lor 0 = x$, $x \land 1 = x$.

### Circuitos lógicos

Compuertas: AND, OR, NOT, NAND, NOR, XOR. **Universales:** NAND y NOR.

| Entradas | AND | OR | XOR | NAND | NOR |
| --- | --- | --- | --- | --- | --- |
| $0, 0$ | $0$ | $0$ | $0$ | $1$ | $1$ |
| $0, 1$ | $0$ | $1$ | $1$ | $1$ | $0$ |
| $1, 0$ | $0$ | $1$ | $1$ | $1$ | $0$ |
| $1, 1$ | $1$ | $1$ | $0$ | $0$ | $0$ |

Función de mayoría de 3 bits: $M = (x \land y) \lor (x \land z) \lor (y \land z)$.

### Recurrencias

Ecuación característica de $a_n = c_1 a_{n-1} + \cdots + c_k a_{n-k}$: $r^k = c_1 r^{k-1} + \cdots + c_k$.

$$T_{\text{Hanói}}(n) = 2T(n-1) + 1, \quad T(1) = 1 \ \Rightarrow \ T(n) = 2^n - 1$$

$$F_n = F_{n-1} + F_{n-2}, \quad F_0 = 0, \ F_1 = 1 \ \Rightarrow \ F_n = \frac{\varphi^n - (1-\varphi)^n}{\sqrt{5}}, \quad \varphi = \frac{1+\sqrt{5}}{2}$$

El número de formas de subir $n$ escalones de a $1$ o $2$ pasos es $F_{n+1}$.

### Funciones generadoras

$$G(x) = \sum_{n \geq 0} a_n x^n, \qquad \frac{1}{1-x} = \sum_{n\geq 0} x^n, \qquad \frac{1}{(1-x)^2} = \sum_{n\geq 0} (n+1)x^n$$

$$\frac{1}{1-x-x^2} = \sum_{n\geq 0} F_n x^n, \qquad (x+y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k$$

### Inducción y sumas

$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}, \qquad \sum_{k=1}^{n} (2k-1) = n^2, \qquad \sum_{k=0}^{n} 2^k = 2^{n+1} - 1$$

**Inducción fuerte:** se supone $P(j)$ para todo $j < n$ y se prueba $P(n)$.

### Complejidad

$$f(n) = O(g(n)) \iff \exists\, c, n_0 > 0 : \ f(n) \leq c\,g(n) \ \ \forall n \geq n_0$$

Jerarquía: $O(1) < O(\log n) < O(n) < O(n\log n) < O(n^2) < O(2^n) < O(n!)$.

**Teorema maestro** para $T(n) = aT(n/b) + f(n)$, comparando $f(n)$ con $n^{\log_b a}$:

1. $f(n)$ menor: $T(n) = \Theta(n^{\log_b a})$.
2. $f(n)$ del mismo orden: $T(n) = \Theta(n^{\log_b a}\log n)$.
3. $f(n)$ mayor: $T(n) = \Theta(f(n))$.

## Ejercicios (50)

### Simplificación booleana (1–12)

1. Simplifica $x \lor (x \land y)$.
2. Simplifica $x \land (x \lor y)$.
3. Simplifica $\neg(\neg x)$.
4. Aplica De Morgan a $\neg(x \land y)$.
5. Aplica De Morgan a $\neg(x \lor y)$.
6. Simplifica $x \lor \neg x$.
7. Simplifica $x \land \neg x$.
8. Simplifica $x \lor 1$.
9. Simplifica $x \land 0$.
10. Simplifica $(x \land y) \lor (x \land \neg y)$.
11. Simplifica $x \lor (x \land \neg y)$.
12. Simplifica $x \lor (\neg x \land y)$.

### Circuitos lógicos (13–20)

13. ¿Cuáles son las dos compuertas universales?
14. ¿Qué compuerta da $1$ cuando las entradas difieren?
15. Escribe la función de mayoría de $3$ bits.
16. Salida de una AND con entradas $1$ y $0$.
17. Salida de una OR con entradas $0$ y $1$.
18. Salida de una NAND con entradas $1$ y $1$.
19. Salida de una NOR con entradas $0$ y $0$.
20. Salida de una XOR con entradas $1$ y $1$.

### Recurrencias (21–34)

21. Resuelve $a_n = 2a_{n-1} + 1$ con $a_0 = 0$.
22. Resuelve $a_n = 3a_{n-1}$ con $a_0 = 2$.
23. ¿Cuántos movimientos mueven $10$ discos en las Torres de Hanói?
24. ¿Cuántos movimientos mueven $64$ discos (forma aproximada)?
25. Con $F_0 = 0$, $F_1 = 1$, calcula $F_7$.
26. Con $F_0 = 0$, $F_1 = 1$, calcula $F_8$.
27. ¿Cuántas formas hay de subir $6$ escalones de a $1$ o $2$ pasos?
28. ¿Cuántas formas hay de subir $10$ escalones de a $1$ o $2$ pasos?
29. Resuelve $T(n) = 2T(n-1) + 1$ con $T(1) = 1$.
30. Halla las raíces de la ecuación característica de Fibonacci.
31. Con $a_1 = a_2 = 1$, $a_n = a_{n-1} + a_{n-2}$, calcula $a_6$.
32. Resuelve $a_n = 5a_{n-1} - 6a_{n-2}$ con $a_0 = 1$ y $a_1 = 0$.
33. ¿Qué complejidad describe la recurrencia $T(n) = T(n/2) + 1$?
34. Halla la raíz de la ecuación característica de $a_n = 4a_{n-1} - 4a_{n-2}$.

### Funciones generadoras (35–41)

35. Halla el coeficiente de $x^4$ en $\dfrac{1}{1-x}$.
36. Halla el coeficiente de $x^3$ en $\dfrac{1}{(1-x)^2}$.
37. Escribe la serie de potencias de $\dfrac{1}{1-x}$.
38. ¿Qué sucesión generan los coeficientes de $\dfrac{1}{(1-x)^2}$?
39. ¿Cuántas formas hay de pagar $5$ céntimos con monedas de $1$ y $2$?
40. ¿Qué función generadora produce la sucesión de Fibonacci?
41. Halla el coeficiente de $x^2$ en $(1+x)^5$.

### Inducción (42–46)

42. ¿A qué suma equivale $\displaystyle\sum_{k=1}^{n} k$?
43. ¿Qué caso base verifica la afirmación $2^n > n^2$ para $n \geq 5$?
44. ¿A qué equivale $\displaystyle\sum_{k=0}^{n} 2^k$?
45. En la inducción fuerte que factoriza $n$, ¿qué supone la hipótesis inductiva?
46. ¿A qué equivale la suma de los primeros $n$ números impares?

### Notación O (47–50)

47. Da una cota $O$ de $3n^2 + 5n + 2$.
48. Aplica el teorema maestro a $T(n) = 4T(n/2) + n$.
49. Aplica el teorema maestro a $T(n) = 2T(n/2) + n$.
50. Ordena de menor a mayor: $O(n!)$, $O(1)$, $O(n)$, $O(2^n)$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $x$</div>
<div class="r"><b>02</b> $x$</div>
<div class="r"><b>03</b> $x$</div>
<div class="r"><b>04</b> $\neg x \lor \neg y$</div>
<div class="r"><b>05</b> $\neg x \land \neg y$</div>
<div class="r"><b>06</b> $1$</div>
<div class="r"><b>07</b> $0$</div>
<div class="r"><b>08</b> $1$</div>
<div class="r"><b>09</b> $0$</div>
<div class="r"><b>10</b> $x$</div>
<div class="r"><b>11</b> $x$</div>
<div class="r"><b>12</b> $x \lor y$</div>
<div class="r"><b>13</b> NAND y NOR</div>
<div class="r"><b>14</b> XOR</div>
<div class="r"><b>15</b> $(x \land y) \lor (x \land z) \lor (y \land z)$</div>
<div class="r"><b>16</b> $0$</div>
<div class="r"><b>17</b> $1$</div>
<div class="r"><b>18</b> $0$</div>
<div class="r"><b>19</b> $1$</div>
<div class="r"><b>20</b> $0$</div>
<div class="r"><b>21</b> $a_n = 2^n - 1$</div>
<div class="r"><b>22</b> $a_n = 2 \cdot 3^n$</div>
<div class="r"><b>23</b> $2^{10} - 1 = 1023$</div>
<div class="r"><b>24</b> $2^{64} - 1 \approx 1.8 \times 10^{19}$</div>
<div class="r"><b>25</b> $13$</div>
<div class="r"><b>26</b> $21$</div>
<div class="r"><b>27</b> $13$</div>
<div class="r"><b>28</b> $89$</div>
<div class="r"><b>29</b> $T(n) = 2^n - 1$</div>
<div class="r"><b>30</b> $r = \dfrac{1 \pm \sqrt{5}}{2}$</div>
<div class="r"><b>31</b> $a_6 = 8$</div>
<div class="r"><b>32</b> $a_n = 3 \cdot 2^n - 2 \cdot 3^n$</div>
<div class="r"><b>33</b> $O(\log n)$</div>
<div class="r"><b>34</b> $r = 2$ (doble)</div>
<div class="r"><b>35</b> $1$</div>
<div class="r"><b>36</b> $4$</div>
<div class="r"><b>37</b> $\displaystyle\sum_{n \geq 0} x^n$</div>
<div class="r"><b>38</b> $1, 2, 3, 4, \ldots$ ($a_n = n+1$)</div>
<div class="r"><b>39</b> $3$</div>
<div class="r"><b>40</b> $\dfrac{1}{1-x-x^2}$</div>
<div class="r"><b>41</b> $\dbinom{5}{2} = 10$</div>
<div class="r"><b>42</b> $\dfrac{n(n+1)}{2}$</div>
<div class="r"><b>43</b> $n = 5$: $32 > 25$</div>
<div class="r"><b>44</b> $2^{n+1} - 1$</div>
<div class="r"><b>45</b> Que todo $j < n$ se factoriza</div>
<div class="r"><b>46</b> $n^2$</div>
<div class="r"><b>47</b> $O(n^2)$</div>
<div class="r"><b>48</b> $O(n^2)$</div>
<div class="r"><b>49</b> $O(n \log n)$</div>
<div class="r"><b>50</b> $O(1) < O(n) < O(2^n) < O(n!)$</div>
</div>
