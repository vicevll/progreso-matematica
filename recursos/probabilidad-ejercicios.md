# Probabilidad · ejercicios

Área: **Probabilidad y estadística** · Nivel: **Univ 1–2** · Temas: axiomas, probabilidad condicional, independencia, Bayes y conteo.

## Formulario

**Espacio muestral y axiomas**

$$
P(A) \geq 0, \qquad P(\Omega) = 1, \qquad P\left(\bigcup_n A_n\right) = \sum_n P(A_n) \ \text{si los } A_n \text{ son disjuntos.}
$$

$$
P(\emptyset) = 0, \qquad P(A^c) = 1 - P(A), \qquad P(A \cup B) = P(A) + P(B) - P(A \cap B).
$$

**Probabilidad condicional y regla del producto**

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \qquad P(B) > 0.
$$

$$
P(A \cap B) = P(A \mid B)\,P(B), \qquad P(A \cap B \cap C) = P(A)\,P(B \mid A)\,P(C \mid A \cap B).
$$

**Independencia**

$$
A, B \text{ independientes} \iff P(A \cap B) = P(A)\,P(B) \iff P(A \mid B) = P(A).
$$

**Probabilidad total y Bayes**

$$
P(A) = \sum_{i=1}^{n} P(A \mid B_i)\,P(B_i), \qquad P(B_j \mid A) = \frac{P(A \mid B_j)\,P(B_j)}{\sum_i P(A \mid B_i)\,P(B_i)}.
$$

**Conteo y Laplace**

$$
P(A) = \frac{|A|}{|\Omega|}, \qquad P(n,k) = \frac{n!}{(n-k)!}, \qquad \binom{n}{k} = \frac{n!}{k!\,(n-k)!}.
$$

## Ejercicios (50)

### Bloque A · Axiomas y reglas básicas

1. Si $P(A) = 0.35$, halla $P(A^c)$.
2. Con un dado justo, halla $P(\text{primo})$.
3. Se lanzan dos monedas. Halla $P(\text{exactamente una cara})$.
4. Con un dado justo, halla $P(\text{múltiplo de 3})$.
5. Si $P(A) = 0.5$, $P(B) = 0.3$ y $A \cap B = \emptyset$, halla $P(A \cup B)$.
6. Si $P(A) = 0.4$, $P(B) = 0.5$ y $P(A \cap B) = 0.15$, halla $P(A \cup B)$.
7. Si $P(A \cup B) = 0.9$, $P(A) = 0.5$ y $P(B) = 0.6$, halla $P(A \cap B)$.
8. De una baraja de 52 cartas se extrae una. Halla $P(\text{as})$.
9. Con un dado justo, halla $P(\text{mayor que 4})$.
10. Si $P(A^c) = 0.28$, halla $P(A)$.

### Bloque B · Probabilidad condicional

11. Si $P(A \cap B) = 0.12$ y $P(B) = 0.4$, halla $P(A \mid B)$.
12. Si $P(A \mid B) = 0.5$ y $P(B) = 0.6$, halla $P(A \cap B)$.
13. Se extraen dos cartas sin reposición. Halla $P(\text{2ª as} \mid \text{1ª as})$.
14. Con un dado, halla $P(\text{par} \mid \text{mayor que 3})$.
15. Si $P(A) = 0.6$ y $P(B \mid A) = 0.5$, halla $P(A \cap B)$.
16. Si $P(A) = 0.5$, $P(B \mid A) = 0.6$ y $P(C \mid A \cap B) = 0.4$, halla $P(A \cap B \cap C)$.
17. Si $P(A \cap B) = 0.2$ y $P(A) = 0.5$, halla $P(B \mid A)$.
18. Una urna tiene 5 rojas y 3 azules. Sin reposición, halla $P(\text{2ª roja} \mid \text{1ª roja})$.
19. Si $P(A \mid B) = 0.25$ y $P(A \cap B) = 0.1$, halla $P(B)$.
20. De una baraja, se sabe que la carta es roja. Halla $P(\text{corazón} \mid \text{roja})$.

### Bloque C · Independencia

21. $P(A) = 0.3$, $P(B) = 0.4$, $P(A \cap B) = 0.12$. ¿Son independientes?
22. $P(A) = 0.5$, $P(B) = 0.5$, $P(A \cap B) = 0.2$. ¿Son independientes?
23. Se lanzan dos dados. Halla $P(\text{par en el 1º y impar en el 2º})$.
24. $A$ y $B$ independientes, $P(A) = 0.7$, $P(B) = 0.4$. Halla $P(A \cap B)$.
25. Se lanza una moneda justa tres veces. Halla $P(\text{tres caras})$.
26. $A$ y $B$ independientes, $P(A) = 0.2$, $P(B) = 0.5$. Halla $P(A \cup B)$.
27. Si $P(A) = 0$, ¿cuánto vale $P(A \cap B)$?
28. Dos componentes con fiabilidad $0.9$ cada una funcionan independientemente. Halla $P(\text{ambas fallan})$.
29. $A$ y $B$ independientes, $P(A) = 0.6$, $P(B) = 0.5$. Halla $P(A \cap B^c)$.
30. Se lanza una moneda y un dado. Halla $P(\text{cara y 6})$.

### Bloque D · Probabilidad total y Bayes

31. Urna A: 3 blancas y 1 negra; urna B: 1 blanca y 3 negras. Se elige una urna al azar y se extrae una bola. Halla $P(\text{blanca})$.
32. Con las urnas del ejercicio 31, si salió blanca, halla $P(\text{A} \mid \text{blanca})$.
33. Enfermedad con prevalencia $1\%$; test con sensibilidad $99\%$ y especificidad $95\%$. Halla $P(\text{enf} \mid +)$.
34. Enfermedad con prevalencia $2\%$; test con sensibilidad $90\%$ y especificidad $95\%$. Halla $P(\text{enf} \mid +)$.
35. Máquina 1: 60% de la producción, 2% defectuosa; máquina 2: 40%, 5% defectuosa. Halla $P(\text{defectuosa})$.
36. Con los datos del ejercicio 35, halla $P(\text{máquina 1} \mid \text{defectuosa})$.
37. Enfermedad con prevalencia $5\%$; test con sensibilidad $98\%$ y especificidad $90\%$. Halla $P(\text{enf} \mid +)$.
38. Turno mañana: 50% y 1% defectuoso; tarde: 30% y 2%; noche: 20% y 3%. Halla $P(\text{defectuoso})$.
39. Con los datos del ejercicio 38, halla $P(\text{mañana} \mid \text{defectuoso})$.
40. $P(B_1) = 0.3$, $P(B_2) = 0.7$, $P(A \mid B_1) = 0.8$, $P(A \mid B_2) = 0.4$. Halla $P(A)$.
41. Con los datos del ejercicio 40, halla $P(B_1 \mid A)$.
42. Enfermedad con prevalencia $10\%$; test con sensibilidad $80\%$ y especificidad $90\%$. Halla $P(\text{enf} \mid +)$.

### Bloque E · Conteo y probabilidad

43. ¿Cuántas permutaciones hay de 5 objetos distintos?
44. Calcula $\binom{10}{3}$.
45. Calcula $P(10,3)$.
46. ¿Cuántas manos de 5 cartas hay en una baraja de 52?
47. ¿Cuántos anagramas tiene la palabra «CASA»?
48. ¿Cuántos comités de 3 personas se forman con 8?
49. Con dígitos del 0 al 9, ¿cuántas claves de 4 dígitos hay (con repetición)?
50. Halla la probabilidad de que 5 cartas extraídas sean todas corazones.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $0.65$</div>
<div class="r"><b>02</b> $\dfrac{1}{2}$</div>
<div class="r"><b>03</b> $\dfrac{1}{2}$</div>
<div class="r"><b>04</b> $\dfrac{1}{3}$</div>
<div class="r"><b>05</b> $0.8$</div>
<div class="r"><b>06</b> $0.75$</div>
<div class="r"><b>07</b> $0.2$</div>
<div class="r"><b>08</b> $\dfrac{1}{13} \approx 0.0769$</div>
<div class="r"><b>09</b> $\dfrac{1}{3}$</div>
<div class="r"><b>10</b> $0.72$</div>
<div class="r"><b>11</b> $0.3$</div>
<div class="r"><b>12</b> $0.3$</div>
<div class="r"><b>13</b> $\dfrac{1}{17} \approx 0.0588$</div>
<div class="r"><b>14</b> $\dfrac{2}{3}$</div>
<div class="r"><b>15</b> $0.3$</div>
<div class="r"><b>16</b> $0.12$</div>
<div class="r"><b>17</b> $0.4$</div>
<div class="r"><b>18</b> $\dfrac{4}{7} \approx 0.5714$</div>
<div class="r"><b>19</b> $0.4$</div>
<div class="r"><b>20</b> $\dfrac{1}{2}$</div>
<div class="r"><b>21</b> Sí, $0.3 \cdot 0.4 = 0.12$</div>
<div class="r"><b>22</b> No, $0.25 \neq 0.2$</div>
<div class="r"><b>23</b> $\dfrac{1}{4}$</div>
<div class="r"><b>24</b> $0.28$</div>
<div class="r"><b>25</b> $\dfrac{1}{8}$</div>
<div class="r"><b>26</b> $0.6$</div>
<div class="r"><b>27</b> $0$</div>
<div class="r"><b>28</b> $0.01$</div>
<div class="r"><b>29</b> $0.3$</div>
<div class="r"><b>30</b> $\dfrac{1}{12} \approx 0.0833$</div>
<div class="r"><b>31</b> $0.5$</div>
<div class="r"><b>32</b> $0.75$</div>
<div class="r"><b>33</b> $\approx 0.167$</div>
<div class="r"><b>34</b> $\approx 0.269$</div>
<div class="r"><b>35</b> $0.032$</div>
<div class="r"><b>36</b> $0.375$</div>
<div class="r"><b>37</b> $\approx 0.340$</div>
<div class="r"><b>38</b> $0.017$</div>
<div class="r"><b>39</b> $\approx 0.294$</div>
<div class="r"><b>40</b> $0.52$</div>
<div class="r"><b>41</b> $\approx 0.462$</div>
<div class="r"><b>42</b> $\approx 0.471$</div>
<div class="r"><b>43</b> $120$</div>
<div class="r"><b>44</b> $120$</div>
<div class="r"><b>45</b> $720$</div>
<div class="r"><b>46</b> $2\,598\,960$</div>
<div class="r"><b>47</b> $12$</div>
<div class="r"><b>48</b> $56$</div>
<div class="r"><b>49</b> $10\,000$</div>
<div class="r"><b>50</b> $\dfrac{\binom{13}{5}}{\binom{52}{5}} \approx 0.000495$</div>
</div>
