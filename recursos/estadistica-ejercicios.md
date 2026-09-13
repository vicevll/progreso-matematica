# Estadística descriptiva e inferencial · Ejercicios

**Área:** Probabilidad y estadística · **Nivel:** Univ 1–3

**Descripción:** Muestreo, estimación y pruebas de hipótesis.

## Formulario

### Descriptiva

Media: $\bar{x} = \dfrac{1}{n}\sum_{i=1}^{n} x_i$

Varianza muestral: $s^2 = \dfrac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2$

Desviación estándar: $s = \sqrt{s^2}$

Puntuación $z$: $z = \dfrac{x - \bar{x}}{s}$

### Distribuciones muestrales

Error estándar de la media: $SE = \dfrac{\sigma}{\sqrt{n}}$

Error estándar de la proporción: $SE = \sqrt{\dfrac{\hat{p}(1-\hat{p})}{n}}$

### Intervalos de confianza

Media con $\sigma$ conocida: $\bar{x} \pm z_{1-\alpha/2}\dfrac{\sigma}{\sqrt{n}}$

Media con $\sigma$ desconocida: $\bar{x} \pm t_{n-1,\,1-\alpha/2}\dfrac{s}{\sqrt{n}}$

Proporción: $\hat{p} \pm z_{1-\alpha/2}\sqrt{\dfrac{\hat{p}(1-\hat{p})}{n}}$

Tamaño de muestra: $n = \left(\dfrac{z_{1-\alpha/2}\,\sigma}{E}\right)^2$

### Pruebas de hipótesis

Una media ($\sigma$ conocida): $z = \dfrac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$

Una media ($\sigma$ desconocida): $t = \dfrac{\bar{x} - \mu_0}{s/\sqrt{n}}$

Dos medias independientes: $t = \dfrac{\bar{x}_1 - \bar{x}_2}{s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}$

Dos medias pareadas: $t = \dfrac{\bar{d}}{s_d/\sqrt{n}}$

Dos proporciones: $z = \dfrac{\hat{p}_1 - \hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})\left(\frac{1}{n_1}+\frac{1}{n_2}\right)}}$

### Chi-cuadrado

Bondad de ajuste: $\chi^2 = \sum \dfrac{(O_i - E_i)^2}{E_i}$

Independencia: $\chi^2 = \sum \dfrac{(O_{ij} - E_{ij})^2}{E_{ij}}, \qquad E_{ij} = \dfrac{(\text{total fila})(\text{total columna})}{n}$

### Regresión y correlación

$$b_1 = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}, \qquad b_0 = \bar{y} - b_1\bar{x}, \qquad R^2 = r^2$$

### Valores críticos usuales

- $z$: $z_{0.025} = 1.96$, $z_{0.05} = 1.645$, $z_{0.005} = 2.576$.
- $t$: $t_{24,\,0.025} = 2.064$, $t_{15,\,0.025} = 2.131$, $t_{9,\,0.025} = 2.262$, $t_{19,\,0.05} = 1.729$.
- $\chi^2$: $\chi^2_{1,\,0.05} = 3.841$, $\chi^2_{4,\,0.05} = 9.488$, $\chi^2_{6,\,0.05} = 12.592$.

## Ejercicios (50)

### A. Media, varianza y desviación

1. Halla la media de $2, 4, 4, 5, 9$.
2. Halla la mediana de $2, 4, 4, 5, 9$.
3. Halla la moda de $2, 4, 4, 5, 9$.
4. Halla la varianza muestral $s^2$ de $2, 4, 4, 5, 9$.
5. Halla la desviación estándar $s$ de $2, 4, 4, 5, 9$.
6. Halla la media de $10, 12, 12, 13, 15$.
7. Halla la varianza muestral $s^2$ de $10, 12, 12, 13, 15$.
8. Halla la media de $1, 3, 3, 5, 8$.
9. Halla la mediana de $1, 3, 3, 5, 8$.
10. Calcula la puntuación $z$ de $x = 9$ con media $5$ y desviación $2$.

### B. Intervalos de confianza

11. IC al $95\%$ para la media: $\bar{x} = 20$, $\sigma = 4$, $n = 64$.
12. IC al $95\%$ para la media: $\bar{x} = 80$, $\sigma = 12$, $n = 36$.
13. IC al $95\%$ para la media: $\bar{x} = 50$, $\sigma = 10$, $n = 25$.
14. IC al $95\%$ para la media: $\bar{x} = 100$, $\sigma = 15$, $n = 100$.
15. IC al $95\%$ para la media: $\bar{x} = 60$, $\sigma = 8$, $n = 16$.
16. IC al $95\%$ para la proporción: $\hat{p} = 0.5$, $n = 100$.
17. IC al $95\%$ para la proporción: $\hat{p} = 0.6$, $n = 400$.
18. IC al $95\%$ para la media con $t$: $\bar{x} = 50$, $s = 10$, $n = 25$.
19. IC al $95\%$ para la media con $t$: $\bar{x} = 100$, $s = 15$, $n = 16$.
20. Tamaño de muestra para $E = 2$, $\sigma = 10$ al $95\%$.

### C. Pruebas $z$

21. Prueba $z$: $\bar{x} = 52$, $\mu_0 = 50$, $\sigma = 10$, $n = 25$. Halla $z$.
22. Halla el valor p de dos colas para $z = 1$.
23. Prueba $z$: $\bar{x} = 55$, $\mu_0 = 50$, $\sigma = 10$, $n = 25$. Halla $z$.
24. Halla el valor p de dos colas para $z = 2.5$.
25. Prueba $z$: $\bar{x} = 103$, $\mu_0 = 100$, $\sigma = 15$, $n = 49$. Halla $z$.
26. Halla el valor p de dos colas para $z = 1.4$.
27. Dos proporciones: $\hat{p}_1 = 0.12$ con $n_1 = 200$ y $\hat{p}_2 = 0.15$ con $n_2 = 200$. Halla $z$.
28. Halla el valor crítico $z$ al $5\%$ en una prueba de dos colas.

### D. Pruebas $t$

29. Prueba $t$: $\bar{x} = 498$, $\mu_0 = 500$, $s = 5$, $n = 25$. Halla $t$.
30. Halla el valor p de dos colas para $|t| = 2$ con $24$ grados de libertad.
31. Prueba $t$: $\bar{x} = 12$, $\mu_0 = 10$, $s = 4$, $n = 16$. Halla $t$.
32. Prueba $t$ pareada: $\bar{d} = 3$, $s_d = 4$, $n = 16$. Halla $t$.
33. Halla el valor crítico $t$ al $95\%$ (dos colas) con $9$ grados de libertad.
34. Prueba $t$: $\bar{x} = 52$, $\mu_0 = 50$, $s = 8$, $n = 16$. Halla $t$.
35. Dos muestras: $\bar{x}_1 = 10$, $\bar{x}_2 = 8$, $s_p = 2$, $n_1 = n_2 = 9$. Halla $t$.
36. Halla el valor crítico $t$ al $95\%$ (una cola) con $19$ grados de libertad.

### E. Chi-cuadrado

37. Bondad de ajuste: frecuencias observadas $8, 12, 10, 10, 9, 11$ con esperada $10$ en cada una. Halla $\chi^2$.
38. Independencia en tabla $2 \times 2$: fila A $30$ y $20$, fila B $20$ y $30$. Halla $\chi^2$.
39. Halla el valor crítico $\chi^2$ al $5\%$ con $1$ grado de libertad.
40. Independencia en tabla $2 \times 2$: fila C $40$ y $10$, fila D $20$ y $30$. Halla $\chi^2$.
41. Halla el valor crítico $\chi^2$ al $5\%$ con $4$ grados de libertad.
42. Bondad de ajuste: observadas $20, 20, 20, 20, 20$ con esperadas $15, 15, 25, 25, 25$. Halla $\chi^2$.
43. ¿Cuántos grados de libertad tiene una prueba $\chi^2$ de independencia en una tabla $3 \times 4$?
44. Halla el valor crítico $\chi^2$ al $5\%$ con $6$ grados de libertad.

### F. Correlación y regresión

45. Halla la correlación $r$ de $(1,2), (2,3), (3,5)$.
46. Halla la pendiente $b_1$ de la regresión de $(1,2), (2,3), (3,5)$.
47. Halla el intercepto $b_0$ de la regresión de $(1,2), (2,3), (3,5)$.
48. Si $r \approx 0.982$, halla $R^2$.
49. Con $b_0 = 10000$ y $b_1 = 2000$, predice $y$ cuando $x = 5$.
50. Si $r = 0.6$, ¿cuánto vale $R^2$?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $4.8$</div>
<div class="r"><b>02</b> $4$</div>
<div class="r"><b>03</b> $4$</div>
<div class="r"><b>04</b> $6.7$</div>
<div class="r"><b>05</b> $2.588$</div>
<div class="r"><b>06</b> $12.4$</div>
<div class="r"><b>07</b> $3.3$</div>
<div class="r"><b>08</b> $4$</div>
<div class="r"><b>09</b> $3$</div>
<div class="r"><b>10</b> $2$</div>
<div class="r"><b>11</b> $[19.02,\ 20.98]$</div>
<div class="r"><b>12</b> $[76.08,\ 83.92]$</div>
<div class="r"><b>13</b> $[46.08,\ 53.92]$</div>
<div class="r"><b>14</b> $[97.06,\ 102.94]$</div>
<div class="r"><b>15</b> $[56.08,\ 63.92]$</div>
<div class="r"><b>16</b> $[0.402,\ 0.598]$</div>
<div class="r"><b>17</b> $[0.552,\ 0.648]$</div>
<div class="r"><b>18</b> $[45.872,\ 54.128]$</div>
<div class="r"><b>19</b> $[92.01,\ 107.99]$</div>
<div class="r"><b>20</b> $97$</div>
<div class="r"><b>21</b> $z = 1$</div>
<div class="r"><b>22</b> $0.3173$</div>
<div class="r"><b>23</b> $z = 2.5$</div>
<div class="r"><b>24</b> $0.0124$</div>
<div class="r"><b>25</b> $z = 1.4$</div>
<div class="r"><b>26</b> $0.1616$</div>
<div class="r"><b>27</b> $z \approx 0.878$</div>
<div class="r"><b>28</b> $1.96$</div>
<div class="r"><b>29</b> $t = -2$</div>
<div class="r"><b>30</b> $0.057$</div>
<div class="r"><b>31</b> $t = 2$</div>
<div class="r"><b>32</b> $t = 3$</div>
<div class="r"><b>33</b> $2.262$</div>
<div class="r"><b>34</b> $t = 1$</div>
<div class="r"><b>35</b> $t \approx 2.121$</div>
<div class="r"><b>36</b> $1.729$</div>
<div class="r"><b>37</b> $\chi^2 = 1$</div>
<div class="r"><b>38</b> $\chi^2 = 4$</div>
<div class="r"><b>39</b> $3.841$</div>
<div class="r"><b>40</b> $\chi^2 \approx 16.67$</div>
<div class="r"><b>41</b> $9.488$</div>
<div class="r"><b>42</b> $\chi^2 \approx 6.33$</div>
<div class="r"><b>43</b> $6$</div>
<div class="r"><b>44</b> $12.592$</div>
<div class="r"><b>45</b> $r \approx 0.982$</div>
<div class="r"><b>46</b> $b_1 = 1.5$</div>
<div class="r"><b>47</b> $b_0 \approx 0.333$</div>
<div class="r"><b>48</b> $R^2 \approx 0.964$</div>
<div class="r"><b>49</b> $20000$</div>
<div class="r"><b>50</b> $R^2 = 0.36$</div>
</div>
