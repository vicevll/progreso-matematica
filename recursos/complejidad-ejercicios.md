# Complejidad computacional — Formulario y práctica

Material de repaso y práctica sobre complejidad: notación asintótica, clases $\mathrm{P}$ y $\mathrm{NP}$, certificados, reducciones y NP-completitud. Incluye un formulario compacto, 50 ejercicios y el solucionario con los resultados.

## Formulario

### Notación asintótica

$$f(n) = \mathcal{O}(g(n)) \iff \exists c > 0, \ n_0 : \ 0 \leq f(n) \leq c\,g(n) \ \ \forall n \geq n_0$$
$$f(n) = \Omega(g(n)) \iff \exists c > 0, \ n_0 : \ f(n) \geq c\,g(n) \geq 0 \ \ \forall n \geq n_0$$
$$f(n) = \Theta(g(n)) \iff f(n) = \mathcal{O}(g(n)) \ \text{y} \ f(n) = \Omega(g(n))$$
$$f(n) = o(g(n)) \iff \lim_{n \to \infty} \frac{f(n)}{g(n)} = 0$$

### Jerarquía de crecimiento

$$\mathcal{O}(1) \subset \mathcal{O}(\log n) \subset \mathcal{O}(n) \subset \mathcal{O}(n\log n) \subset \mathcal{O}(n^2) \subset \mathcal{O}(n^3) \subset \mathcal{O}(2^n) \subset \mathcal{O}(n!)$$

Reglas útiles:

1. Se descartan las constantes multiplicativas: $5n^2 = \Theta(n^2)$.
2. Se conserva el término dominante: $n^2 + n\log n = \Theta(n^2)$.
3. $\log(n^k) = k\log n = \Theta(\log n)$.

### Teorema maestro

Para $T(n) = a\,T(n/b) + f(n)$ con $a \geq 1$, $b > 1$, se compara $f(n)$ con $n^{\log_b a}$:

1. Si $f(n) = \mathcal{O}(n^{\log_b a - \varepsilon})$, entonces $T(n) = \Theta(n^{\log_b a})$.
2. Si $f(n) = \Theta(n^{\log_b a})$, entonces $T(n) = \Theta(n^{\log_b a}\log n)$.
3. Si $f(n) = \Omega(n^{\log_b a + \varepsilon})$ y se cumple la condición de regularidad, entonces $T(n) = \Theta(f(n))$.

### Clases de complejidad

$$\mathrm{P} = \bigcup_{k \geq 1} \mathrm{DTIME}(n^k)$$
$$L \in \mathrm{NP} \iff \exists R(x, c) \ \text{polinomial tal que} \ x \in L \iff \exists c \ \text{con} \ |c| \leq \mathrm{poly}(|x|) \ \text{y} \ R(x, c) = 1$$

$$\mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{PSPACE} \subseteq \mathrm{EXP}$$

### Verificadores y certificados

1. El **certificado** $c$ es un testigo de la respuesta afirmativa.
2. El **verificador** $R$ comprueba $R(x, c)$ en tiempo polinomial.
3. La longitud del certificado es polinomial en $|x|$.
4. Ejemplos: asignación para SAT, ruta para el viajante, subconjunto para la mochila, coloración para el coloreo.

### Reducciones y NP-completitud

$$A \leq_p B \iff \exists f \ \text{polinomial con} \ x \in A \iff f(x) \in B$$

1. $B$ es **NP-duro** si todo $A \in \mathrm{NP}$ cumple $A \leq_p B$.
2. $B$ es **NP-completo** si $B \in \mathrm{NP}$ y $B$ es NP-duro.
3. Si $A \leq_p B$ y $B \in \mathrm{P}$, entonces $A \in \mathrm{P}$.
4. Si un NP-completo está en $\mathrm{P}$, entonces $\mathrm{P} = \mathrm{NP}$.

### Teorema de Cook-Levin y problemas clave

1. **Cook-Levin (1971):** SAT es NP-completo.
2. De SAT se derivan 3-SAT, clique, conjunto independiente, cubrimiento de vértices, coloración, camino hamiltoniano, viajante y mochila.
3. **Consecuencia:** si alguno de ellos es polinomial, todos los de $\mathrm{NP}$ lo son.

## Ejercicios (50)

1. Clasifica $7n^2 + 3n + 5$ en notación $\Theta$.
2. Clasifica $4n^3 + 2n^2 + 100$ en notación $\Theta$.
3. Clasifica $n\log n + 5n$ en notación $\Theta$.
4. Clasifica $2^n + n^{100}$ en notación $\Theta$.
5. Simplifica $\log(n^3)$ en notación $\Theta$.
6. ¿Es $3n = \mathcal{O}(n^2)$?
7. ¿Es $n^2 = \mathcal{O}(n)$?
8. ¿Es $2^n = \Omega(n!)$?
9. Complejidad de un bucle simple de 1 a $n$.
10. Complejidad de dos bucles anidados sobre $n$ elementos.
11. Complejidad de tres bucles anidados sobre $n$ elementos.
12. Complejidad de la búsqueda binaria.
13. Complejidad de mergesort.
14. Resuelve $T(n) = 2T(n/2) + n$.
15. Resuelve $T(n) = T(n/2) + 1$.
16. Resuelve $T(n) = 4T(n/2) + n$.
17. Resuelve $T(n) = 2T(n/2) + n^2$.
18. Resuelve $T(n) = T(n-1) + 1$.
19. Resuelve $T(n) = 2T(n-1) + 1$.
20. Ordena de menor a mayor: $n^2$, $2^n$, $\log n$, $n!$, $n\log n$.
21. Complejidad del ordenamiento por burbuja.
22. Complejidad del cálculo recursivo ingenuo de Fibonacci.
23. Complejidad de multiplicar dos matrices $n \times n$ de forma ingenua.
24. ¿Se cumple $\mathcal{O}(1) \subset \mathcal{O}(\log n)$?
25. ¿Es $n\log n = \Theta(n^2)$?
26. ¿Está el problema de ordenar en $\mathrm{P}$?
27. ¿Está SAT en $\mathrm{P}$?
28. ¿Está SAT en $\mathrm{NP}$?
29. ¿Está 3-SAT en $\mathrm{NP}$?
30. ¿Está clique en $\mathrm{NP}$?
31. ¿Está el viajante de decisión en $\mathrm{NP}$?
32. ¿Cómo se llama la clase de los complementos de los problemas de $\mathrm{NP}$?
33. ¿Está la primalidad en $\mathrm{P}$?
34. ¿Está el problema de la tautología en $\mathrm{coNP}$?
35. ¿Está el problema de la parada en $\mathrm{NP}$?
36. ¿Se sabe si la inclusión $\mathrm{P} \subseteq \mathrm{NP}$ es estricta?
37. ¿Se sabe si $\mathrm{NP} = \mathrm{coNP}$?
38. ¿Contiene $\mathrm{PSPACE}$ a $\mathrm{NP}$?
39. Da un certificado para 3-SAT.
40. Da un certificado para clique de tamaño $k$.
41. Da un certificado para el ciclo hamiltoniano.
42. Da un certificado para el $k$-coloreo.
43. Da un certificado para la mochila de decisión.
44. ¿En qué tiempo se verifica un certificado de 3-SAT?
45. Describe el método de dos pasos para probar que un problema es NP-completo.
46. Si $A \leq_p B$ y $A$ es NP-completo, ¿qué se concluye sobre $B$?
47. Si un problema NP-completo pertenece a $\mathrm{P}$, ¿qué se concluye?
48. ¿Qué afirma el teorema de Cook-Levin?
49. ¿Qué construcción usa la reducción de clique a conjunto independiente?
50. Da la idea de la reducción de 3-SAT a clique.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $\Theta(n^2)$</div>
<div class="r"><b>02</b> $\Theta(n^3)$</div>
<div class="r"><b>03</b> $\Theta(n\log n)$</div>
<div class="r"><b>04</b> $\Theta(2^n)$</div>
<div class="r"><b>05</b> $\Theta(\log n)$</div>
<div class="r"><b>06</b> Sí</div>
<div class="r"><b>07</b> No</div>
<div class="r"><b>08</b> No</div>
<div class="r"><b>09</b> $\mathcal{O}(n)$</div>
<div class="r"><b>10</b> $\mathcal{O}(n^2)$</div>
<div class="r"><b>11</b> $\mathcal{O}(n^3)$</div>
<div class="r"><b>12</b> $\mathcal{O}(\log n)$</div>
<div class="r"><b>13</b> $\mathcal{O}(n\log n)$</div>
<div class="r"><b>14</b> $\Theta(n\log n)$</div>
<div class="r"><b>15</b> $\Theta(\log n)$</div>
<div class="r"><b>16</b> $\Theta(n^2)$</div>
<div class="r"><b>17</b> $\Theta(n^2)$</div>
<div class="r"><b>18</b> $\Theta(n)$</div>
<div class="r"><b>19</b> $\Theta(2^n)$</div>
<div class="r"><b>20</b> $\log n < n\log n < n^2 < 2^n < n!$</div>
<div class="r"><b>21</b> $\mathcal{O}(n^2)$</div>
<div class="r"><b>22</b> $\mathcal{O}(2^n)$</div>
<div class="r"><b>23</b> $\mathcal{O}(n^3)$</div>
<div class="r"><b>24</b> Sí</div>
<div class="r"><b>25</b> No</div>
<div class="r"><b>26</b> Sí</div>
<div class="r"><b>27</b> No se sabe</div>
<div class="r"><b>28</b> Sí</div>
<div class="r"><b>29</b> Sí</div>
<div class="r"><b>30</b> Sí</div>
<div class="r"><b>31</b> Sí</div>
<div class="r"><b>32</b> $\mathrm{coNP}$</div>
<div class="r"><b>33</b> Sí</div>
<div class="r"><b>34</b> Sí</div>
<div class="r"><b>35</b> No</div>
<div class="r"><b>36</b> No se sabe</div>
<div class="r"><b>37</b> No se sabe</div>
<div class="r"><b>38</b> Sí</div>
<div class="r"><b>39</b> Una asignación de verdad</div>
<div class="r"><b>40</b> Los $k$ vértices del clique</div>
<div class="r"><b>41</b> El ciclo hamiltoniano</div>
<div class="r"><b>42</b> La coloración asignada</div>
<div class="r"><b>43</b> El subconjunto de ítems</div>
<div class="r"><b>44</b> En tiempo polinomial</div>
<div class="r"><b>45</b> Mostrar $B \in \mathrm{NP}$ y reducir un NP-completo $A \leq_p B$</div>
<div class="r"><b>46</b> $B$ es NP-duro</div>
<div class="r"><b>47</b> $\mathrm{P} = \mathrm{NP}$</div>
<div class="r"><b>48</b> SAT es NP-completo</div>
<div class="r"><b>49</b> El grafo complemento</div>
<div class="r"><b>50</b> Un vértice por literal y aristas entre literales compatibles</div>
</div>
