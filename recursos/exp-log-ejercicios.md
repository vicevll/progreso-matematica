# Funciones exponenciales y logarítmicas · 50 ejercicios
**Cuaderno de práctica · Funciones, trigonometría y geometría · 10°–11°**
*Crecimiento, decaimiento, modelado y ecuaciones.*

## Formulario
### Exponentes
- $a^{x+y} = a^x a^y$
- $\dfrac{a^x}{a^y} = a^{x-y}$ con $a > 0$
- $(a^x)^y = a^{xy}$
- $a^{-x} = \dfrac{1}{a^x}$ con $a > 0$
- $a^0 = 1$ con $a \neq 0$
- $a^{1/n} = \sqrt[n]{a}$ con $a > 0$

### Función exponencial
- $f(x) = a^x$ con $a > 0$ y $a \neq 1$
- Dominio $\mathbb{R}$; rango $(0, \infty)$
- Pasa por $(0, 1)$ porque $a^0 = 1$
- Si $a > 1$ es creciente; si $0 < a < 1$ es decreciente
- $\dfrac{d}{dx} e^x = e^x$

### El número $e$
- $e = \lim_{n \to \infty} \left(1 + \dfrac{1}{n}\right)^n \approx 2.71828$
- Crecimiento continuo: $A(t) = A_0 e^{kt}$

### Definición de logaritmo
- $\log_a x = y \Leftrightarrow a^y = x$
- Condiciones: $a > 0$, $a \neq 1$, $x > 0$
- $\log_a 1 = 0$ y $\log_a a = 1$
- $\log_a a^n = n$ y $a^{\log_a x} = x$
- Logaritmo natural: $\ln x = \log_e x$

### Propiedades de los logaritmos
- $\log_a(xy) = \log_a x + \log_a y$
- $\log_a \dfrac{x}{y} = \log_a x - \log_a y$
- $\log_a(x^n) = n \log_a x$
- $\log_a \dfrac{1}{x} = -\log_a x$
- $\log_a(x + y) \neq \log_a x + \log_a y$

### Cambio de base
- $\log_a x = \dfrac{\log_b x}{\log_b a}$
- $\log_a x = \dfrac{\ln x}{\ln a} = \dfrac{\log_{10} x}{\log_{10} a}$
- $\log_a b \cdot \log_b a = 1$

### Ecuaciones
- $a^{f(x)} = a^{g(x)} \Rightarrow f(x) = g(x)$
- $a^x = N \Rightarrow x = \log_a N$
- $\log_a M = N \Rightarrow M = a^N$
- Verificar siempre el dominio del logaritmo

### Interés, decaimiento y escalas
- Interés compuesto: $A = P\left(1 + \dfrac{r}{n}\right)^{nt}$
- Crecimiento continuo: $A = Pe^{rt}$
- Decaimiento: $A = A_0 e^{-kt}$
- Vida media: $t_{1/2} = \dfrac{\ln 2}{k}$
- $\text{pH} = -\log_{10}[H^+]$
- Decibelios: $10\log_{10}\dfrac{I}{I_0}$
- Richter: $\log_{10}\dfrac{A}{A_0}$

## Ejercicios (50)
### Nivel 1 — Definición y evaluación de logaritmos
1. Calcula $\log_2 16$.
2. Calcula $\log_3 243$.
3. Calcula $\log_{10} 1000$.
4. Calcula $\ln e^5$.
5. Calcula $\log_5 1$.
6. Calcula $\log_7 7$.
7. Calcula $\log_2 \dfrac{1}{8}$.
8. Calcula $\log_9 3$.
9. Calcula $\log_{10} 0.01$.
10. Calcula $\log_2 \sqrt{2}$.

### Nivel 2 — Propiedades de los logaritmos
11. Simplifica $\log_2 40 - \log_2 5$.
12. Simplifica $\log_3 6 + \log_3 4 - \log_3 8$.
13. Simplifica $\log_6 4 + \log_6 9$.
14. Expande $\log\left(\dfrac{x^3}{y^2}\right)$.
15. Expande $\ln\left(x^2\sqrt{y}\right)$.
16. Combina $\ln x + \ln(x+1)$.
17. Combina $2\log x - \log y$.
18. Combina $\dfrac{1}{2}\ln x + 3\ln y$.
19. Simplifica $e^{\ln 7}$.
20. Simplifica $10^{\log 9}$.

### Nivel 3 — Cambio de base
21. Calcula $\log_3 20$ con tres decimales.
22. Calcula $\log_7 50$ con tres decimales.
23. Calcula $\log_4 8$.
24. Calcula $\log_{16} 8$.
25. Calcula $\log_2 5$ con tres decimales.
26. Calcula $\log_8 2$.

### Nivel 4 — Ecuaciones exponenciales
27. Resuelve $2^{x+1} = 32$.
28. Resuelve $5^{2x-1} = 125$.
29. Resuelve $3^x = 20$ con tres decimales.
30. Resuelve $7^x = 50$ con tres decimales.
31. Resuelve $4^x = 8$.
32. Resuelve $9^x = \dfrac{1}{27}$.
33. Resuelve $2^{2x} - 6 \cdot 2^x + 8 = 0$.
34. Resuelve $e^{2x} - 5e^x + 6 = 0$.

### Nivel 5 — Ecuaciones logarítmicas
35. Resuelve $\log_3(x+4) - \log_3 x = 1$.
36. Resuelve $\log_2 x + \log_2(x-2) = 3$.
37. Resuelve $\log_{10}(x+1) = 1$.
38. Resuelve $\ln x + \ln 3 = 2$.
39. Resuelve $\log_5(x-1) = 2$.
40. Resuelve $\log_3 x = -1$.

### Nivel 6 — Interés compuesto y crecimiento
41. Se invierten $1000$ al $5\%$ anual con capitalización anual durante 10 años. Halla el monto.
42. Se invierten $1000$ al $5\%$ anual con capitalización continua durante 10 años. Halla el monto.
43. Se invierten $2000$ al $6\%$ anual con capitalización mensual durante 5 años. Halla el monto.
44. ¿Cuánto tarda una inversión en duplicarse al $8\%$ continuo?
45. Una población de $500$ crece de forma continua al $3\%$ anual. Halla su tamaño a los 10 años.

### Nivel 7 — Decaimiento y escalas
46. Un fármaco tiene vida media de 6 horas. ¿Qué fracción queda tras 24 horas?
47. Una sustancia radiactiva tiene vida media de 12 años. Si había $80$ g, ¿cuánto queda tras 30 años?
48. Halla la constante de decaimiento $k$ de una sustancia con vida media de 12 años.
49. Halla el pH de una solución con $[H^+] = 10^{-4}$ M.
50. Una intensidad sonora es $100$ veces la de referencia. Calcula los decibelios.

## Solucionario · resultados
<div class="results">
<div class="r"><b>01</b> $4$</div>
<div class="r"><b>02</b> $5$</div>
<div class="r"><b>03</b> $3$</div>
<div class="r"><b>04</b> $5$</div>
<div class="r"><b>05</b> $0$</div>
<div class="r"><b>06</b> $1$</div>
<div class="r"><b>07</b> $-3$</div>
<div class="r"><b>08</b> $\frac{1}{2}$</div>
<div class="r"><b>09</b> $-2$</div>
<div class="r"><b>10</b> $\frac{1}{2}$</div>
<div class="r"><b>11</b> $3$</div>
<div class="r"><b>12</b> $1$</div>
<div class="r"><b>13</b> $2$</div>
<div class="r"><b>14</b> $3\log x - 2\log y$</div>
<div class="r"><b>15</b> $2\ln x + \frac{1}{2}\ln y$</div>
<div class="r"><b>16</b> $\ln(x(x+1))$</div>
<div class="r"><b>17</b> $\log\frac{x^2}{y}$</div>
<div class="r"><b>18</b> $\ln(\sqrt{x}\,y^3)$</div>
<div class="r"><b>19</b> $7$</div>
<div class="r"><b>20</b> $9$</div>
<div class="r"><b>21</b> $2.727$</div>
<div class="r"><b>22</b> $2.010$</div>
<div class="r"><b>23</b> $\frac{3}{2}$</div>
<div class="r"><b>24</b> $\frac{3}{4}$</div>
<div class="r"><b>25</b> $2.322$</div>
<div class="r"><b>26</b> $\frac{1}{3}$</div>
<div class="r"><b>27</b> $x = 4$</div>
<div class="r"><b>28</b> $x = 2$</div>
<div class="r"><b>29</b> $x \approx 2.727$</div>
<div class="r"><b>30</b> $x \approx 2.010$</div>
<div class="r"><b>31</b> $x = \frac{3}{2}$</div>
<div class="r"><b>32</b> $x = -\frac{3}{2}$</div>
<div class="r"><b>33</b> $x = 1$, $x = 2$</div>
<div class="r"><b>34</b> $x = \ln 2 \approx 0.693$, $x = \ln 3 \approx 1.099$</div>
<div class="r"><b>35</b> $x = 2$</div>
<div class="r"><b>36</b> $x = 4$</div>
<div class="r"><b>37</b> $x = 9$</div>
<div class="r"><b>38</b> $x = \frac{e^2}{3} \approx 2.463$</div>
<div class="r"><b>39</b> $x = 26$</div>
<div class="r"><b>40</b> $x = \frac{1}{3}$</div>
<div class="r"><b>41</b> $1628.89$</div>
<div class="r"><b>42</b> $1648.72$</div>
<div class="r"><b>43</b> $2697.70$</div>
<div class="r"><b>44</b> $\approx 8.664$ años</div>
<div class="r"><b>45</b> $674.93$</div>
<div class="r"><b>46</b> $\frac{1}{16} = 6.25\%$</div>
<div class="r"><b>47</b> $14.14$ g</div>
<div class="r"><b>48</b> $0.0578$</div>
<div class="r"><b>49</b> $4$</div>
<div class="r"><b>50</b> $20$</div>
</div>
