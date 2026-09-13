# Ejercicios de teoría de grafos

## Formulario

### Grados y conteo

$$\sum_{v \in V} \deg(v) = 2|E|, \qquad |E| = \frac{1}{2}\sum_{v \in V} \deg(v)$$

- El número de vértices de grado impar es **par**.
- Grafo simple con $n$ vértices: $0 \le \deg(v) \le n - 1$.
- Grafo $r$-regular con $n$ vértices: $|E| = \dfrac{rn}{2}$.
- Grafo completo: $|E(K_n)| = \dbinom{n}{2}$, y $\deg(v) = n - 1$ para todo $v$.

### Árboles

- Un árbol con $n \ge 1$ vértices tiene exactamente $n - 1$ aristas.
- Conexo y acíclico $\iff$ conexo con $n - 1$ aristas $\iff$ único camino entre cada par.
- **Fórmula de Cayley:** número de árboles etiquetados sobre $n$ vértices $= n^{n-2}$.
- Todo árbol con al menos una arista es bipartito: $\chi = 2$.

### Euler y Hamilton

- **Circuito euleriano** (conexo): todos los grados pares.
- **Camino euleriano abierto** (conexo): exactamente dos grados impares.
- Si hay $4$ o más grados impares, no existe camino euleriano.
- Camino/ciclo hamiltoniano: visita cada vértice una vez; no hay criterio simple (NP-completo).

### Coloración

- $\chi(K_n) = n$.
- $\chi(C_n) = 2$ si $n$ es par; $\chi(C_n) = 3$ si $n$ es impar.
- $\chi(G) = 2 \iff G$ bipartito.
- $\chi(G) \le \Delta(G) + 1$.
- Grafo planar: $\chi(G) \le 4$ (teorema de los cuatro colores).

### Planaridad

$$V - E + F = 2 \quad \text{(planar conexo)}$$

- $E \le 3V - 6$ para $V \ge 3$.
- $E \le 2V - 4$ para grafos bipartitos planares con $V \ge 3$.
- $K_5$ y $K_{3,3}$ **no** son planares (Kuratowski).

### Algoritmos de redes

- **Dijkstra:** camino más corto con pesos no negativos, $O(E \log V)$.
- **Bellman–Ford:** admite pesos negativos y detecta ciclos negativos, $O(VE)$.
- **Kruskal / Prim:** árbol generador mínimo.
- **Ford–Fulkerson:** flujo máximo; **max-flow min-cut**: flujo máximo $=$ capacidad del corte mínimo.

## Ejercicios (50)

1. Un grafo tiene $12$ aristas. Halla la suma de sus grados.
2. Un grafo simple tiene $9$ vértices. ¿Cuál es el grado máximo posible?
3. Un árbol tiene $20$ vértices. ¿Cuántas aristas tiene?
4. Los grados de un grafo son $5, 4, 3, 2, 2$. Calcula la suma de grados y el número de aristas.
5. ¿Es posible un grafo con tres vértices de grado impar?
6. Un grafo es $4$-regular con $7$ vértices. ¿Cuántas aristas tiene?
7. ¿Existe un grafo simple con grados $3,3,3,3$? ¿Cuántas aristas?
8. Número de árboles etiquetados con $4$ vértices (Cayley).
9. Número de árboles etiquetados con $6$ vértices.
10. Número cromático de $K_7$.
11. Número cromático de $C_5$.
12. Número cromático de $C_8$.
13. Número cromático de $K_{3,3}$.
14. Si $\Delta(G) = 4$, ¿qué cota superior da $\chi(G) \le \Delta(G) + 1$?
15. Grafo planar conexo con $V = 6$ y $E = 10$. Halla $F$.
16. Grafo planar conexo con $V = 5$ y $E = 8$. Halla $F$.
17. Aplica la cota $E \le 3V - 6$ a un grafo planar con $V = 10$.
18. Aplica la cota $E \le 2V - 4$ a un grafo bipartito planar con $V = 8$.
19. ¿Es planar $K_5$?
20. ¿Es planar $K_{3,3}$?
21. ¿Es planar $K_4$?
22. ¿Cuántos vértices de grado impar debe tener un grafo conexo para admitir un circuito euleriano?
23. ¿Cuántos vértices de grado impar para un camino euleriano abierto?
24. Un grafo conexo tiene $4$ vértices de grado impar. ¿Tiene camino euleriano?
25. Camino más corto de $A$ a $C$ con aristas $A-B = 2$, $B-C = 3$, $A-C = 7$.
26. Camino más corto de $A$ a $D$ con $A-B = 1$, $B-C = 1$, $C-D = 1$, $A-D = 5$.
27. Árbol generador mínimo de $K_4$ con pesos $AB = 1$, $AC = 4$, $AD = 5$, $BC = 2$, $BD = 6$, $CD = 3$.
28. Árbol generador mínimo con pesos $AB = 2$, $BC = 3$, $CD = 1$, $AD = 4$, $AC = 5$.
29. Red $s \to a = 2$, $s \to b = 2$, $a \to t = 2$, $b \to t = 2$, $a \to b = 1$. Flujo máximo.
30. Red $s \to a = 3$, $s \to b = 2$, $a \to t = 2$, $b \to t = 3$, $a \to b = 1$. Flujo máximo.
31. Red de una sola ruta $s \to a = 4$, $a \to t = 4$. Flujo máximo.
32. ¿Es todo árbol bipartito?
33. Número cromático de un árbol con al menos una arista.
34. Número de aristas de $K_6$.
35. Grado de cada vértice en $K_8$.
36. Número de aristas de $K_5$.
37. Un árbol tiene $25$ aristas. ¿Cuántos vértices tiene?
38. Grafo conexo con $10$ vértices y $9$ aristas sin ciclos: ¿es árbol?
39. Grafo conexo con $10$ vértices y $10$ aristas: ¿contiene un ciclo?
40. ¿Cuántos colores garantiza el teorema de los cuatro colores para todo grafo planar?
41. Número cromático de $K_{2,4}$.
42. La suma de grados de un grafo es $40$. ¿Cuántas aristas tiene?
43. Un grafo es $3$-regular con $10$ vértices. ¿Cuántas aristas tiene?
44. En un camino $P_n$, ¿cuál es la distancia entre sus dos extremos?
45. ¿Cuántos vértices recorre un ciclo hamiltoniano de $C_5$?
46. ¿Puede un grafo no conexo tener circuito euleriano?
47. Según max-flow min-cut, el flujo máximo es igual a…
48. ¿Cuántas aristas tiene un árbol generador de un grafo con $n$ vértices?
49. Número de aristas de $K_{3,3}$.
50. Grafo planar conexo con $E = 7$ y $F = 3$. Halla $V$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $2 \cdot 12 = 24$</div>
<div class="r"><b>02</b> $9 - 1 = 8$</div>
<div class="r"><b>03</b> $20 - 1 = 19$</div>
<div class="r"><b>04</b> suma $16$, aristas $8$</div>
<div class="r"><b>05</b> No: el número de grados impares debe ser par</div>
<div class="r"><b>06</b> $\dfrac{4 \cdot 7}{2} = 14$</div>
<div class="r"><b>07</b> Sí, es $K_4$: $6$ aristas</div>
<div class="r"><b>08</b> $4^{2} = 16$</div>
<div class="r"><b>09</b> $6^{4} = 1296$</div>
<div class="r"><b>10</b> $\chi(K_7) = 7$</div>
<div class="r"><b>11</b> $\chi(C_5) = 3$</div>
<div class="r"><b>12</b> $\chi(C_8) = 2$</div>
<div class="r"><b>13</b> $\chi(K_{3,3}) = 2$</div>
<div class="r"><b>14</b> $4 + 1 = 5$</div>
<div class="r"><b>15</b> $F = 2 + 10 - 6 = 6$</div>
<div class="r"><b>16</b> $F = 2 + 8 - 5 = 5$</div>
<div class="r"><b>17</b> $3 \cdot 10 - 6 = 24$</div>
<div class="r"><b>18</b> $2 \cdot 8 - 4 = 12$</div>
<div class="r"><b>19</b> No es planar</div>
<div class="r"><b>20</b> No es planar</div>
<div class="r"><b>21</b> Sí, es planar</div>
<div class="r"><b>22</b> $0$ vértices impares</div>
<div class="r"><b>23</b> $2$ vértices impares</div>
<div class="r"><b>24</b> No</div>
<div class="r"><b>25</b> $2 + 3 = 5$</div>
<div class="r"><b>26</b> $1 + 1 + 1 = 3$</div>
<div class="r"><b>27</b> $1 + 2 + 3 = 6$</div>
<div class="r"><b>28</b> $2 + 1 + 3 = 6$</div>
<div class="r"><b>29</b> $4$</div>
<div class="r"><b>30</b> $5$</div>
<div class="r"><b>31</b> $4$</div>
<div class="r"><b>32</b> Sí</div>
<div class="r"><b>33</b> $2$</div>
<div class="r"><b>34</b> $\dbinom{6}{2} = 15$</div>
<div class="r"><b>35</b> $8 - 1 = 7$</div>
<div class="r"><b>36</b> $\dbinom{5}{2} = 10$</div>
<div class="r"><b>37</b> $25 + 1 = 26$</div>
<div class="r"><b>38</b> Sí</div>
<div class="r"><b>39</b> Sí, contiene un ciclo</div>
<div class="r"><b>40</b> $4$ colores</div>
<div class="r"><b>41</b> $\chi(K_{2,4}) = 2$</div>
<div class="r"><b>42</b> $\dfrac{40}{2} = 20$</div>
<div class="r"><b>43</b> $\dfrac{3 \cdot 10}{2} = 15$</div>
<div class="r"><b>44</b> $n - 1$</div>
<div class="r"><b>45</b> $5$ vértices</div>
<div class="r"><b>46</b> No</div>
<div class="r"><b>47</b> la capacidad del corte mínimo</div>
<div class="r"><b>48</b> $n - 1$</div>
<div class="r"><b>49</b> $3 \cdot 3 = 9$</div>
<div class="r"><b>50</b> $V = 2 + 7 - 3 = 6$</div>
</div>
