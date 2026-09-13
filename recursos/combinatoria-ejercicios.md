# Combinatoria · Ejercicios

## Formulario

### Principios de conteo

**Suma:** casos disjuntos se suman. **Producto:** pasos independientes se multiplican.

$$|A \cup B| = |A| + |B| \quad (\text{si } A \cap B = \emptyset)$$

**Palomar:** si $kn+1$ objetos ocupan $n$ cajas, alguna caja tiene al menos $k+1$.

### Permutaciones y combinaciones

1. Permutaciones: $P(n, k) = \dfrac{n!}{(n-k)!}$.
2. Combinaciones: $\dbinom{n}{k} = \dfrac{n!}{k!(n-k)!}$.
3. Combinaciones con repetición: $\dbinom{n+k-1}{k}$.
4. Permutaciones con repetición: $\dfrac{n!}{n_1!\, n_2! \cdots}$.

### Binomio de Newton y Pascal

$$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k$$

1. $\dbinom{n}{k} = \dbinom{n}{n-k}$.
2. $\dbinom{n}{k} = \dbinom{n-1}{k-1} + \dbinom{n-1}{k}$.
3. $\displaystyle\sum_{k=0}^{n} \binom{n}{k} = 2^n$.
4. $\displaystyle\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ para $n \geq 1$.

### Inclusión-exclusión

$$|A \cup B| = |A| + |B| - |A \cap B|$$

$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$$

Desórdenes: $!n = n! \displaystyle\sum_{k=0}^{n} \dfrac{(-1)^k}{k!}$.

### Recurrencias

1. Orden dos: $a_n = p\,a_{n-1} + q\,a_{n-2}$; ecuación característica $r^2 = p\,r + q$.
2. Raíces distintas: $a_n = A r_1^{\,n} + B r_2^{\,n}$; raíz doble $r$: $a_n = (A + Bn) r^n$.
3. Fibonacci: $F_n = F_{n-1} + F_{n-2}$, $F_0 = 0$, $F_1 = 1$, con $F_n = \dfrac{\varphi^n - (-\varphi)^{-n}}{\sqrt{5}}$ y $\varphi = \dfrac{1+\sqrt{5}}{2}$.

### Funciones generadoras

$$G(x) = \sum_{n \geq 0} a_n x^n, \qquad \frac{1}{1-x} = \sum_{n \geq 0} x^n, \qquad \frac{1}{(1-x)^2} = \sum_{n \geq 0} (n+1) x^n$$

$$\frac{1}{(1-x)^3} = \sum_{n \geq 0} \binom{n+2}{2} x^n, \qquad \frac{1}{1-x-x^2} = \sum_{n \geq 0} F_n x^n$$

## Ejercicios (50)

### Permutaciones y combinaciones (1–20)

1. ¿Cuántas permutaciones hay de $5$ elementos distintos?
2. ¿De cuántas formas se ordenan $6$ libros distintos?
3. ¿Cuántos podios (primero, segundo, tercero) hay con $8$ corredores?
4. ¿Cuántas palabras de $4$ letras distintas se forman con $5$ vocales?
5. ¿Cuántos números de $3$ cifras distintas se forman con los dígitos $1$ a $9$?
6. ¿Cuántas combinaciones de $3$ elementos hay en un conjunto de $8$?
7. ¿Cuántas manos de $5$ cartas hay en una baraja de $52$?
8. ¿Cuántos subconjuntos de tamaño $4$ tiene un conjunto de $10$ elementos?
9. ¿Cuántos subconjuntos (de todos los tamaños) tiene un conjunto de $6$ elementos?
10. ¿Cuántos comités de $3$ personas se forman con $12$ candidatos?
11. ¿Cuántas cadenas de $5$ bits se pueden formar?
12. ¿De cuántas formas se sientan $5$ personas en una fila?
13. ¿Cuántas diagonales tiene un decágono (polígono de $10$ lados)?
14. ¿Cuántas permutaciones distintas tiene la palabra "CASA"?
15. ¿Cuántas permutaciones distintas tiene la palabra "MISSISSIPPI"?
16. ¿Cuántas combinaciones con repetición de $3$ elementos tomados de $5$ tipos hay?
17. ¿Cuántas soluciones enteras no negativas tiene $x_1 + x_2 + x_3 = 5$?
18. ¿Cuántas banderas de $3$ franjas se forman con $4$ colores (repetición permitida)?
19. ¿De cuántas formas se reparten $3$ premios idénticos entre $10$ personas, a lo sumo uno cada una?
20. ¿Cuántos números de $4$ cifras (sin cero inicial) admiten dígitos repetidos?

### Binomio de Newton (21–30)

21. Halla el coeficiente de $x^3$ en $(1 + x)^8$.
22. Halla el coeficiente de $x^2$ en $(x + 2)^4$.
23. Halla el coeficiente de $x^5$ en $(1 + x)^{10}$.
24. Calcula $\displaystyle\sum_{k=0}^{6} \binom{6}{k}$.
25. Halla el coeficiente de $x^3 y^2$ en $(x + y)^5$.
26. Halla el coeficiente de $x^4$ en $(1 + 2x)^6$.
27. Halla el coeficiente de $x^2$ en $(1 + x + x^2)^3$.
28. Halla el coeficiente de $x^5$ en $(1 + x + x^2)^3$.
29. Simplifica $\dbinom{7}{2} + \dbinom{7}{3}$ usando la regla de Pascal.
30. Halla el coeficiente de $x^7$ en $(1 + x)^{11}$.

### Inclusión-exclusión (31–38)

31. Del $1$ al $100$, ¿cuántos números son divisibles por $3$ o por $5$?
32. Del $1$ al $200$, ¿cuántos números no son divisibles ni por $2$ ni por $3$?
33. Del $1$ al $300$, ¿cuántos números son divisibles por $2$, $3$ o $5$?
34. Del $1$ al $1000$, ¿cuántos números son divisibles por $3$ o por $7$?
35. Del $1$ al $100$, ¿cuántos números no son divisibles por $2$, $3$ ni $5$?
36. ¿Cuántos desórdenes ($!4$) hay de $4$ elementos?
37. ¿Cuántos desórdenes ($!5$) hay de $5$ elementos?
38. Del $1$ al $30$, ¿cuántos números son coprimos con $30$?

### Recurrencias (39–44)

39. Con $F_1 = F_2 = 1$ y $F_n = F_{n-1} + F_{n-2}$, calcula $F_7$.
40. ¿Cuántas formas hay de subir $6$ escalones de a uno o dos pasos?
41. Resuelve $a_n = 5a_{n-1} - 6a_{n-2}$ con $a_0 = 1$, $a_1 = 0$.
42. En las Torres de Hanói, $T(n) = 2T(n-1) + 1$ con $T(1) = 1$. ¿Cuántos movimientos requiere $n = 10$?
43. Resuelve $a_n = 2a_{n-1} + 1$ con $a_0 = 0$.
44. Con $F_0 = 0$, $F_1 = 1$, calcula $F_{10}$.

### Funciones generadoras (45–50)

45. Halla el coeficiente de $x^4$ en $\dfrac{1}{1-x}$.
46. Halla el coeficiente de $x^3$ en $\dfrac{1}{(1-x)^2}$.
47. Halla el coeficiente de $x^5$ en $\dfrac{1}{(1-x)(1-x^2)}$.
48. Halla el coeficiente de $x^4$ en $\dfrac{1}{(1-x)(1-x^2)}$.
49. Halla el coeficiente de $x^3$ en $\dfrac{1}{(1-x)^3}$.
50. Halla el coeficiente de $x^2$ en $\dfrac{1}{(1-x)(1-x^2)}$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $5! = 120$</div>
<div class="r"><b>02</b> $6! = 720$</div>
<div class="r"><b>03</b> $P(8,3) = 336$</div>
<div class="r"><b>04</b> $P(5,4) = 120$</div>
<div class="r"><b>05</b> $P(9,3) = 504$</div>
<div class="r"><b>06</b> $\binom{8}{3} = 56$</div>
<div class="r"><b>07</b> $\binom{52}{5} = 2\,598\,960$</div>
<div class="r"><b>08</b> $\binom{10}{4} = 210$</div>
<div class="r"><b>09</b> $2^6 = 64$</div>
<div class="r"><b>10</b> $\binom{12}{3} = 220$</div>
<div class="r"><b>11</b> $2^5 = 32$</div>
<div class="r"><b>12</b> $5! = 120$</div>
<div class="r"><b>13</b> $\binom{10}{2} - 10 = 35$</div>
<div class="r"><b>14</b> $\dfrac{4!}{2!} = 12$</div>
<div class="r"><b>15</b> $\dfrac{11!}{1!\,4!\,4!\,2!} = 34\,650$</div>
<div class="r"><b>16</b> $\binom{7}{3} = 35$</div>
<div class="r"><b>17</b> $\binom{7}{2} = 21$</div>
<div class="r"><b>18</b> $4^3 = 64$</div>
<div class="r"><b>19</b> $\binom{10}{3} = 120$</div>
<div class="r"><b>20</b> $9 \cdot 10^3 = 9000$</div>
<div class="r"><b>21</b> $\binom{8}{3} = 56$</div>
<div class="r"><b>22</b> $\binom{4}{2} 2^2 = 24$</div>
<div class="r"><b>23</b> $\binom{10}{5} = 252$</div>
<div class="r"><b>24</b> $2^6 = 64$</div>
<div class="r"><b>25</b> $\binom{5}{3} = 10$</div>
<div class="r"><b>26</b> $\binom{6}{4} 2^4 = 240$</div>
<div class="r"><b>27</b> $6$</div>
<div class="r"><b>28</b> $3$</div>
<div class="r"><b>29</b> $\binom{8}{3} = 56$</div>
<div class="r"><b>30</b> $\binom{11}{7} = 330$</div>
<div class="r"><b>31</b> $47$</div>
<div class="r"><b>32</b> $67$</div>
<div class="r"><b>33</b> $220$</div>
<div class="r"><b>34</b> $428$</div>
<div class="r"><b>35</b> $26$</div>
<div class="r"><b>36</b> $!4 = 9$</div>
<div class="r"><b>37</b> $!5 = 44$</div>
<div class="r"><b>38</b> $\varphi(30) = 8$</div>
<div class="r"><b>39</b> $F_7 = 13$</div>
<div class="r"><b>40</b> $13$</div>
<div class="r"><b>41</b> $3 \cdot 2^n - 2 \cdot 3^n$</div>
<div class="r"><b>42</b> $2^{10} - 1 = 1023$</div>
<div class="r"><b>43</b> $2^n - 1$</div>
<div class="r"><b>44</b> $F_{10} = 55$</div>
<div class="r"><b>45</b> $1$</div>
<div class="r"><b>46</b> $4$</div>
<div class="r"><b>47</b> $3$</div>
<div class="r"><b>48</b> $3$</div>
<div class="r"><b>49</b> $\binom{5}{2} = 10$</div>
<div class="r"><b>50</b> $2$</div>
</div>
