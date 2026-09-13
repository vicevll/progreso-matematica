# Teoría de la computabilidad · Formulario y práctica

## Formulario

### Máquinas de Turing
1. Tupla: $M = (Q, \Sigma, \Gamma, \delta, q_0, q_{aceptar}, q_{rechazar})$.
2. Transición determinista: $\delta: Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$.
3. Configuración: $u\,q\,v$, con $q$ el estado actual y $uv$ el contenido no blanco de la cinta.
4. La MT se detiene al entrar en $q_{aceptar}$ o $q_{rechazar}$.

### Clasificación de lenguajes
1. **Decidible (recursivo):** existe una MT que siempre termina.
2. **r.e. (reconocible):** existe una MT que acepta las cadenas de $L$ y puede no terminar con las demás.
3. **Indecidible:** ninguna MT lo decide.
4. Jerarquía: decidibles $\subset$ r.e. $\subset$ todos los lenguajes.

### Decidibilidad conocida
1. Decidibles: lenguajes regulares, lenguajes libres de contexto, pertenencia en un DFA, vacuidad y equivalencia de DFA, primalidad.
2. Indecidibles: parada, aceptación, vacuidad y totalidad de MT, equivalencia de MT, PCP, propiedades semánticas no triviales.

### Problema de la parada
1. $H = \{\langle M, w\rangle : M \text{ se detiene con la entrada } w\}$.
2. $H$ es indecidible (Turing, 1936) y r.e.
3. $\overline{H}$ no es r.e., por el teorema de Post.

### Reducciones
1. $A \leq_m B$: existe $f$ computable con $x \in A \iff f(x) \in B$.
2. Si $A$ es indecidible y $A \leq_m B$, entonces $B$ es indecidible.
3. Si $B$ es decidible y $A \leq_m B$, entonces $A$ es decidible.
4. La reducción es transitiva.

### Teorema de Rice
1. Toda propiedad semántica no trivial de $L(M)$ es indecidible.
2. Semántica: depende solo de $L(M)$. No trivial: la cumplen unos lenguajes y otros no.
3. Las propiedades sintácticas, como el número de estados, sí son decidibles.

### Teorema de Post
1. $L$ es decidible si y solo si $L$ y $\overline{L}$ son r.e.
2. Si $L$ es r.e. y $\overline{L}$ no lo es, entonces $L$ no es decidible.

### Cotas y simulaciones
1. Simular $k$ pasos de una MT es decidible para todo $k$ fijo o computable.
2. Simular hasta la terminación es una enumeración que reconoce pero no decide.
3. El *dovetailing* intercala simulaciones para reconocer uniones de lenguajes r.e.

## Ejercicios (50)

1. ¿Existe una MT que reconozca $\{0^n 1^n : n \geq 0\}$?
2. ¿Existe una MT que sume $1$ a un número binario?
3. ¿Existe una MT que reconozca palíndromos binarios?
4. ¿Existe una MT que decida $\{w w : w \in \{0,1\}^*\}$?
5. ¿Existe una MT que reconozca las cadenas con igual número de $0$ y de $1$?
6. ¿Existe una MT que cuente los unos y escriba su representación binaria?
7. ¿Existe una MT no determinista con más poder que una determinista?
8. ¿Existe una máquina de Turing universal?
9. ¿Existe una MT que reconozca $\{a^n b^n c^n : n \geq 0\}$?
10. ¿Existe una MT que decida si un número es primo?
11. ¿Es decidible la pertenencia de una cadena a un lenguaje regular?
12. ¿Es decidible la vacuidad de un DFA?
13. ¿Es decidible la equivalencia de dos DFA?
14. ¿Es decidible la pertenencia para gramáticas libres de contexto?
15. ¿Es decidible la vacuidad de una gramática libre de contexto?
16. ¿Es decidible la equivalencia de dos gramáticas libres de contexto?
17. ¿Es decidible si un DFA acepta infinitas cadenas?
18. ¿Es decidible si el lenguaje de una MT es vacío?
19. ¿Es decidible si dos MT reconocen el mismo lenguaje?
20. ¿Es decidible si una MT acepta al menos una cadena?
21. ¿Es decidible si una MT acepta todas las cadenas?
22. ¿Es decidible si el lenguaje de una MT es regular?
23. ¿Es decidible si el lenguaje de una MT es finito?
24. Dado un lenguaje decidible por su decisor, ¿es decidible la pertenencia?
25. ¿Es decidible si una MT tiene un estado inalcanzable?
26. ¿Es transitiva la reducción $\leq_m$?
27. Si $A \leq_m B$ y $B$ es decidible, ¿es $A$ decidible?
28. Si $A \leq_m B$ y $A$ es decidible, ¿es $B$ decidible?
29. ¿Es decidible el problema de correspondencia de Post?
30. ¿Es decidible si la intersección de dos gramáticas libres de contexto es vacía?
31. ¿Es decidible si una MT se detiene con alguna entrada?
32. ¿Es decidible si una MT acepta al menos dos cadenas?
33. ¿Es decidible el problema de equivalencia de dos MT?
34. ¿Es decidible si una función computable es total?
35. ¿Es decidible si una MT visita todas las celdas de la cinta?
36. ¿Es decidible el problema de la parada?
37. Fijados una máquina $M_0$ y una entrada $w_0$, ¿es decidible si $M_0$ se detiene con $w_0$?
38. ¿Es r.e. el problema de la parada?
39. ¿Es r.e. el complemento del problema de la parada?
40. ¿Es decidible si una MT se detiene con la entrada vacía?
41. ¿Es decidible si una MT se detiene con todas las entradas?
42. ¿Es decidible si una MT se detiene en a lo más $100$ pasos?
43. ¿Es decidible si una MT se detiene en a lo más $|w|^2$ pasos?
44. ¿Es decidible si existe una entrada con la que una MT no se detiene?
45. ¿Es decidible si una MT se detiene con la entrada $0^k$ para todo $k$?
46. ¿Es decidible si $L(M)$ contiene la cadena $010$?
47. ¿Es decidible si $L(M) = \Sigma^*$?
48. ¿Es decidible si $L(M)$ tiene exactamente $10$ cadenas?
49. ¿Es decidible si una MT tiene exactamente $7$ estados?
50. ¿Es decidible si $L(M)$ contiene al menos un palíndromo?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> Sí, decidible: marca pares $0$-$1$ y verifica que se agoten a la vez.</div>
<div class="r"><b>02</b> Sí, decidible: recorre de derecha a izquierda cambiando $1$ por $0$ hasta el primer $0$.</div>
<div class="r"><b>03</b> Sí, decidible: compara los extremos y avanza hacia el centro.</div>
<div class="r"><b>04</b> Sí, decidible: localiza el centro y compara ambas mitades símbolo a símbolo.</div>
<div class="r"><b>05</b> Sí, decidible: cancela pares $0$-$1$ hasta agotar o fallar.</div>
<div class="r"><b>06</b> Sí, decidible: máquina contadora que escribe el binario del número de unos.</div>
<div class="r"><b>07</b> No: el no determinismo no añade poder; toda MTND admite una MTD equivalente.</div>
<div class="r"><b>08</b> Sí, decidible: la MT universal simula $\langle M, w\rangle$.</div>
<div class="r"><b>09</b> Sí, decidible: cancela ternas $a$, $b$, $c$ en orden.</div>
<div class="r"><b>10</b> Sí, decidible: divide por $2, \ldots, \sqrt{n}$ y termina.</div>
<div class="r"><b>11</b> Sí, decidible: simula el DFA sobre la cadena.</div>
<div class="r"><b>12</b> Sí, decidible: busca estados finales alcanzables.</div>
<div class="r"><b>13</b> Sí, decidible: construye el autómata producto y compara.</div>
<div class="r"><b>14</b> Sí, decidible: algoritmo CYK en tiempo polinomial.</div>
<div class="r"><b>15</b> Sí, decidible: elimina símbolos inútiles y no generadores.</div>
<div class="r"><b>16</b> Indecidible: la equivalencia de gramáticas libres de contexto no es decidible.</div>
<div class="r"><b>17</b> Sí, decidible: detecta un ciclo accesible y coaccesible en el DFA.</div>
<div class="r"><b>18</b> Indecidible: la vacuidad es una propiedad semántica no trivial (Rice).</div>
<div class="r"><b>19</b> Indecidible: la equivalencia de MT es semántica y no trivial.</div>
<div class="r"><b>20</b> Indecidible: existen MT con y sin cadenas aceptadas (Rice).</div>
<div class="r"><b>21</b> Indecidible: "acepta todo" es semántica no trivial (Rice).</div>
<div class="r"><b>22</b> Indecidible: la regularidad del lenguaje es semántica no trivial (Rice).</div>
<div class="r"><b>23</b> Indecidible: la finitud del lenguaje es semántica no trivial (Rice).</div>
<div class="r"><b>24</b> Sí, decidible: ejecuta el decisor de $L$ sobre la entrada.</div>
<div class="r"><b>25</b> Sí, decidible: es una propiedad sintáctica (recorrido del grafo de estados).</div>
<div class="r"><b>26</b> Sí: la composición de reducciones computables es una reducción.</div>
<div class="r"><b>27</b> Sí, decidible: la composición del reductor con el decisor de $B$ decide $A$.</div>
<div class="r"><b>28</b> No se concluye: la reducción no transfiere decidibilidad de $A$ a $B$.</div>
<div class="r"><b>29</b> Indecidible: el PCP se reduce desde el problema de la parada.</div>
<div class="r"><b>30</b> Indecidible: la intersección vacía de dos GLC es indecidible.</div>
<div class="r"><b>31</b> Indecidible: se reduce la parada a "¿se detiene con alguna entrada?".</div>
<div class="r"><b>32</b> Indecidible: "acepta al menos dos cadenas" es semántica no trivial (Rice).</div>
<div class="r"><b>33</b> Indecidible: reduce la aceptación (o la parada) a la equivalencia de MT.</div>
<div class="r"><b>34</b> Indecidible: la totalidad equivale a detenerse con toda entrada.</div>
<div class="r"><b>35</b> Indecidible: visitar toda la cinta se reduce desde la parada.</div>
<div class="r"><b>36</b> Indecidible: teorema de Turing, por argumento diagonal.</div>
<div class="r"><b>37</b> Sí, decidible: para $M_0$ y $w_0$ fijos la respuesta es una constante.</div>
<div class="r"><b>38</b> Sí, r.e.: simula $M$ sobre $w$, que termina si se detiene.</div>
<div class="r"><b>39</b> No: por el teorema de Post, si lo fuera la parada sería decidible.</div>
<div class="r"><b>40</b> Indecidible: se reduce la parada a este problema.</div>
<div class="r"><b>41</b> Indecidible: "se detiene con toda entrada" es semántica no trivial.</div>
<div class="r"><b>42</b> Sí, decidible: simula exactamente $100$ pasos.</div>
<div class="r"><b>43</b> Sí, decidible: la cota de pasos $|w|^2$ es finita y computable.</div>
<div class="r"><b>44</b> Indecidible: un decisor de esto decidiría la parada.</div>
<div class="r"><b>45</b> Indecidible: cuantifica sobre infinitas entradas (reducción desde la parada).</div>
<div class="r"><b>46</b> Indecidible: "contiene $010$" es semántica no trivial (Rice).</div>
<div class="r"><b>47</b> Indecidible: "igual a $\Sigma^*$" es semántica no trivial (Rice).</div>
<div class="r"><b>48</b> Indecidible: "tiene exactamente $10$ cadenas" es semántica no trivial.</div>
<div class="r"><b>49</b> Sí, decidible: es una propiedad sintáctica de la máquina.</div>
<div class="r"><b>50</b> Indecidible: "contiene un palíndromo" es semántica no trivial (Rice).</div>
</div>
