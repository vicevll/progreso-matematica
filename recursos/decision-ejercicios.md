# Teoría de la decisión · ejercicios

Área: **Probabilidad y estadística** · Nivel: **Univ 4–5** · Utilidad, riesgo y decisión óptima.

## Formulario

**Utilidad esperada**

$$
EU(a) = \sum_{s \in S} P(s)\,u(r(a,s)).
$$

**Equivalente de certeza y prima de riesgo**

$$
u(EC) = EU(X), \qquad \text{prima} = E[X] - EC.
$$

**Valor de la información**

$$
\text{VEIP} = E_s\!\left[\max_a u(a,s)\right] - \max_a E_s\!\left[u(a,s)\right].
$$

$$
\text{VIM} = E_{\text{muestra}}\!\left[\max_a E_{s \mid \text{muestra}}[u(a,s)]\right] - \max_a E_s[u(a,s)].
$$

$$
\text{VEIP} \geq \text{VIM} \geq 0.
$$

**Riesgo y pérdida de Bayes**

$$
R(\theta, \delta) = E\!\left[L(\theta, \delta(X)) \mid \theta\right].
$$

**Criterios de decisión**

$$
\text{Maximin}: \max_a \min_s u(a,s), \qquad \text{Minimax}: \min_a \max_s L(a,s).
$$

$$
H(a) = \alpha \max_s u(a,s) + (1-\alpha)\min_s u(a,s).
$$

$$
r(a,s) = \max_{a'} u(a',s) - u(a,s), \qquad \text{Savage}: \min_a \max_s r(a,s).
$$

**Estimadores de Bayes según la pérdida**

1. Pérdida cuadrática $(\theta - a)^2$: media posterior.
2. Pérdida absoluta $|\theta - a|$: mediana posterior.
3. Pérdida $0$-$1$: moda posterior.

**Árboles de decisión**

1. Nodo de azar: $V = \sum_i P_i\,V_i$.
2. Nodo de decisión: $V = \max_i V_i$.
3. Se resuelve por inducción hacia atrás.

## Ejercicios (50)

### Bloque A · Utilidad esperada

1. Apuesta $50/50$ entre ganar $100$ y perder $40$. Halla la utilidad esperada de un decisor neutral al riesgo.
2. Un boleto cuesta $5$ y da un premio de $500$ con probabilidad $0.01$. Halla la utilidad esperada de comprarlo.
3. Acción $A$ paga $200$ seguro; acción $B$ paga $600$ con probabilidad $0.3$ y $0$ con $0.7$. Compara sus utilidades esperadas.
4. Con un dado justo, el pago es el resultado. Halla el valor esperado del pago.
5. Con un dado justo, el pago es el cuadrado del resultado. Halla el valor esperado del pago.
6. Dos estados equiprobables; $a_1: (50,10)$, $a_2: (20,20)$. Halla $EU(a_1)$ y $EU(a_2)$.
7. Se gana $10$ con probabilidad $0.8$ y se pierden $30$ con probabilidad $0.2$. Halla la utilidad esperada.
8. Inversión de $1000$: con probabilidad $0.6$ dobla y con $0.4$ pierde $500$. Halla la ganancia esperada.
9. Estados con probabilidades $0.2, 0.5, 0.3$; pagos $(100, 50, 0)$. Halla la utilidad esperada.
10. Un billete cuesta $2$ y da un premio de $1000$ con probabilidad $0.001$. Halla la utilidad esperada de comprarlo.
11. Dos estados equiprobables; $a_1: (40,10)$, $a_2: (20,40)$. Halla $EU(a_1)$ y $EU(a_2)$.
12. Un seguro con prima $120$ cubre una pérdida de $2000$ con probabilidad $0.05$. Halla el valor esperado de la pérdida cubierta.
13. Apuesta $50/50$ entre $0$ y $400$ para un decisor neutral al riesgo. Halla la utilidad esperada.
14. Apuesta $50/50$ entre ganar $200$ y perder $100$. Halla la utilidad esperada de un neutral al riesgo.

### Bloque B · Utilidad y aversión al riesgo

15. Con $u(x) = \sqrt{x}$, apuesta $50/50$ entre $0$ y $100$. Halla $EU$.
16. Con los datos del ejercicio 15, halla el equivalente de certeza.
17. Con los datos del ejercicio 15, halla la prima de riesgo.
18. Con $u(x) = \sqrt{x}$, apuesta $50/50$ entre $0$ y $400$. Halla $EU$.
19. Con los datos del ejercicio 18, halla el equivalente de certeza.
20. Con los datos del ejercicio 18, halla la prima de riesgo.
21. Con $u(x) = \ln x$, apuesta $50/50$ entre $10$ y $1000$. Halla $EU$.
22. Con los datos del ejercicio 21, halla el equivalente de certeza.
23. Con los datos del ejercicio 21, halla la prima de riesgo.
24. Un decisor neutral ($u(x) = x$) enfrenta una apuesta $50/50$ entre $100$ y $0$. Halla su equivalente de certeza.
25. Riqueza $100$ y $u(x) = \sqrt{x}$; apuesta $50/50$ que pierde o gana $100$. ¿Conviene apostar?
26. Con $u(x) = \sqrt{x}$, apuesta $50/50$ entre $25$ y $225$. Halla $EC$ y la prima de riesgo.

### Bloque C · VEIP y VIM

27. Dos estados equiprobables; $a_1: (100,20)$, $a_2: (50,40)$. Halla la mejor utilidad esperada sin información.
28. Con los datos del ejercicio 27, halla la utilidad esperada con información perfecta.
29. Con los datos del ejercicio 27, halla el VEIP.
30. Estados con probabilidades $0.3$ y $0.7$; $a_1: (0,100)$, $a_2: (50,50)$. Halla la mejor utilidad esperada sin información.
31. Con los datos del ejercicio 30, halla el VEIP.
32. Tres estados equiprobables; $a_1: (30,30,30)$, $a_2: (90,0,0)$. Halla el VEIP.
33. Si en el ejercicio 32 la información cuesta $12$, halla su valor neto.
34. Estados con probabilidades $0.4$ y $0.6$; $a_1: (200,0)$, $a_2: (100,100)$. Halla el VEIP.
35. Dos estados equiprobables; $a_1: (100,0)$, $a_2: (0,100)$. Halla el VEIP de la información perfecta.
36. Con la matriz del ejercicio 35, una muestra acierta el estado con probabilidad $0.8$. Halla el VIM.

### Bloque D · Criterios de decisión

37. Matriz $a_1: (100,20)$, $a_2: (50,40)$. Aplica el criterio maximin.
38. Con la matriz del ejercicio 37, aplica el criterio maximax.
39. Con la matriz del ejercicio 37, aplica Hurwicz con $\alpha = 0.5$.
40. Con la matriz del ejercicio 37, aplica Hurwicz con $\alpha = 0.2$.
41. Pérdidas $a_1: (10,30)$, $a_2: (20,15)$. Aplica el criterio minimax.
42. Matriz $a_1: (100,20)$, $a_2: (50,40)$. Aplica Savage y da el arrepentimiento máximo.
43. Matriz $a_1: (40,80)$, $a_2: (100,10)$. Aplica Savage y da el arrepentimiento máximo.
44. Tres estados equiprobables; $a_1: (10,20,30)$, $a_2: (40,0,10)$. Aplica el criterio de Laplace (valor esperado).
45. Matriz $a_1: (-5,10)$, $a_2: (0,8)$. Aplica el criterio maximin.
46. Con la matriz del ejercicio 37, aplica Hurwicz con $\alpha = 0.8$.

### Bloque E · Pérdida, Bayes y árboles

47. Posterior $P(\theta=10)=0.2$, $P(\theta=20)=0.5$, $P(\theta=30)=0.3$. Con pérdida cuadrática, halla la estimación óptima.
48. Con la posterior del ejercicio 47, con pérdida absoluta, halla la estimación óptima.
49. Con la posterior del ejercicio 47, con pérdida $0$-$1$, halla la estimación óptima y el riesgo mínimo.
50. Perforar petróleo: seco con $0.7$ (pérdida $1$M) y húmedo con $0.3$ (ganancia $5$M). Halla el VEIP y el valor neto si el test cuesta $0.1$M.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $30$</div>
<div class="r"><b>02</b> $0$</div>
<div class="r"><b>03</b> $\max\{200,180\} = 200$</div>
<div class="r"><b>04</b> $3.5$</div>
<div class="r"><b>05</b> $\dfrac{91}{6} \approx 15.17$</div>
<div class="r"><b>06</b> $EU(a_1)=30$; $EU(a_2)=20$</div>
<div class="r"><b>07</b> $2$</div>
<div class="r"><b>08</b> $400$</div>
<div class="r"><b>09</b> $45$</div>
<div class="r"><b>10</b> $-1$</div>
<div class="r"><b>11</b> $EU(a_1)=25$; $EU(a_2)=30$</div>
<div class="r"><b>12</b> $100$</div>
<div class="r"><b>13</b> $200$</div>
<div class="r"><b>14</b> $50$</div>
<div class="r"><b>15</b> $5$</div>
<div class="r"><b>16</b> $25$</div>
<div class="r"><b>17</b> $25$</div>
<div class="r"><b>18</b> $10$</div>
<div class="r"><b>19</b> $100$</div>
<div class="r"><b>20</b> $100$</div>
<div class="r"><b>21</b> $\ln 100 \approx 4.605$</div>
<div class="r"><b>22</b> $100$</div>
<div class="r"><b>23</b> $405$</div>
<div class="r"><b>24</b> $50$</div>
<div class="r"><b>25</b> No, $5\sqrt{2} \approx 7.07 < 10$</div>
<div class="r"><b>26</b> $EC=100$; prima $=25$</div>
<div class="r"><b>27</b> $60$</div>
<div class="r"><b>28</b> $70$</div>
<div class="r"><b>29</b> $10$</div>
<div class="r"><b>30</b> $70$</div>
<div class="r"><b>31</b> $15$</div>
<div class="r"><b>32</b> $20$</div>
<div class="r"><b>33</b> $8$</div>
<div class="r"><b>34</b> $40$</div>
<div class="r"><b>35</b> $50$</div>
<div class="r"><b>36</b> $30$</div>
<div class="r"><b>37</b> $a_2$ con $40$</div>
<div class="r"><b>38</b> $a_1$ con $100$</div>
<div class="r"><b>39</b> $a_1$ con $60$</div>
<div class="r"><b>40</b> $a_2$ con $42$</div>
<div class="r"><b>41</b> $a_2$ con $20$</div>
<div class="r"><b>42</b> $a_1$; arrepentimiento máximo $20$</div>
<div class="r"><b>43</b> $a_1$; arrepentimiento máximo $60$</div>
<div class="r"><b>44</b> $a_1$ con $20$</div>
<div class="r"><b>45</b> $a_2$ con $0$</div>
<div class="r"><b>46</b> $a_1$ con $84$</div>
<div class="r"><b>47</b> $21$</div>
<div class="r"><b>48</b> $20$</div>
<div class="r"><b>49</b> moda $20$; riesgo $0.5$</div>
<div class="r"><b>50</b> $\text{VEIP}=0.7$M; neto $0.6$M</div>
</div>
