# Geometría algebraica · Formulario y práctica

Área **Geometría y topología** · Nivel **Univ 5** · *Variedades algebraicas, ideales y curvas.*

## Formulario

### Variedades afines e ideales

$$V(S) = \{p \in \mathbb{K}^n : f(p) = 0 \; \forall f \in S\}, \qquad I(V) = \{f \in \mathbb{K}[x_1,\ldots,x_n] : f(p) = 0 \; \forall p \in V\}.$$

1. $V(1) = \emptyset$, $V(0) = \mathbb{A}^n$.
2. $V\!\left(\sum_\alpha I_\alpha\right) = \bigcap_\alpha V(I_\alpha)$, $V(I \cap J) = V(I) \cup V(J)$.
3. Un ideal $I$ es **radical** si $I = \sqrt{I}$.

### Nullstellensatz

$$I(V(I)) = \sqrt{I} \quad (\mathbb{K} \text{ algebraicamente cerrado}).$$

1. Ideales radicales $\longleftrightarrow$ variedades.
2. Ideales maximales $\longleftrightarrow$ puntos.
3. Ideales primos $\longleftrightarrow$ subvariedades irreducibles.

### Anillo de coordenadas y morfismos

$$A(V) = \mathbb{K}[x_1,\ldots,x_n]/I(V).$$

1. Un morfismo $F: V \to W$ induce $F^*: A(W) \to A(V)$ (contravariante).
2. La categoría de variedades afines es opuesta a la de álgebras reducidas finitamente generadas.
3. $\dim A(V) = \dim V$ (dimensión de Krull).

### Género

$$g = \frac{(d-1)(d-2)}{2} \quad (d = \text{grado de una curva plana suave}).$$

1. $g = 0$: rectas y cónicas ($\mathbb{P}^1$).
2. $g = 1$: curvas elípticas.
3. $g \geq 2$: curvas generales.

### Bézout

$$\sum_p I_p(F, G) = \deg F \cdot \deg G.$$

Dos curvas planas proyectivas de grados $d_1$ y $d_2$, sin componentes comunes, se cortan en $d_1 d_2$ puntos contando multiplicidad y puntos complejos.

### Divisores y Riemann-Roch

$$D = \sum_i n_i p_i, \qquad \deg D = \sum_i n_i, \qquad \operatorname{div}(f) = \sum_p v_p(f)\, p.$$

$$L(D) = \{f : \operatorname{div}(f) + D \geq 0\} \cup \{0\}, \qquad \dim L(D) - \dim L(K - D) = \deg D - g + 1, \qquad \deg K = 2g - 2.$$

1. Si $\deg D > 2g - 2$, entonces $\dim L(D) = \deg D - g + 1$.
2. El grado de un divisor principal es $0$.

### Proyectivas, haces y esquemas

$$[x_0 : x_1 : \cdots : x_n] \in \mathbb{P}^n, \qquad \operatorname{Spec}(R) = \{\mathfrak{p} \subseteq R : \mathfrak{p} \text{ primo}\}.$$

1. Los haces de líneas sobre una curva se clasifican por el grado.
2. $H^1(\mathbb{P}^1, \mathcal{O}) = 0$.
3. $\operatorname{Spec}(\mathbb{Z})$ tiene un punto cerrado por cada primo y un punto genérico $(0)$.

## Ejercicios (50)

### Geometría y género

1. Calcula el género de una cónica plana suave.
2. Calcula el género de una cúbica plana suave.
3. Calcula el género de una cuártica plana suave.
4. Calcula el género de una quíntica plana suave.
5. Calcula el género de una séxtica plana suave.
6. Calcula el género de una curva plana suave de grado $7$.
7. Calcula el género de una curva plana suave de grado $8$.
8. ¿Para qué grado $d$ el género de una curva plana suave vale $1$?
9. ¿Para qué grado $d$ el género de una curva plana suave vale $3$?
10. ¿Para qué grado $d$ el género de una curva plana suave vale $6$?

### Bézout

11. Número de intersecciones de dos rectas en $\mathbb{P}^2$.
12. Número de intersecciones de una recta y una cónica.
13. Número de intersecciones de dos cónicas.
14. Número de intersecciones de una recta y una cúbica.
15. Número de intersecciones de una cónica y una cúbica.
16. Número de intersecciones de dos cúbicas.
17. Número de intersecciones de una recta y una cuártica.
18. Número de intersecciones de dos cuárticas.
19. Número de intersecciones de una cúbica y una cuártica.
20. Número de intersecciones de una cónica y una quíntica.

### Ideales, radicales y Nullstellensatz

21. Calcula $\sqrt{(x^2)}$ en $\mathbb{C}[x]$.
22. Calcula $\sqrt{(x^3)}$ en $\mathbb{C}[x]$.
23. Calcula $\sqrt{(x^2 y^2)}$ en $\mathbb{C}[x,y]$.
24. ¿Es $(xy)$ radical en $\mathbb{C}[x,y]$?
25. ¿Es $(x^2)$ radical en $\mathbb{C}[x]$?
26. Halla $I(V(xy))$ en $\mathbb{C}^2$.
27. Halla $I(V(x^2 - y^2))$ en $\mathbb{C}^2$.
28. Describe $V(x^2 - y, y^2 - x)$ en $\mathbb{C}^2$.
29. ¿Qué es $V(1)$?
30. ¿Qué es $V(0)$ en $\mathbb{A}^n$?
31. ¿Cuántos puntos reales tiene $V(x^2 + y^2 + 1)$ en $\mathbb{R}^2$?
32. ¿Qué figura es $V(x^2 + y^2 - 1)$ en $\mathbb{R}^2$?
33. Describe los ideales maximales de $\mathbb{C}[x]$.
34. ¿A qué corresponden los ideales primos en la correspondencia del Nullstellensatz?

### Anillo de coordenadas y morfismos

35. Halla $A(V(y - x^2))$.
36. Halla $A(V(y - x^3))$.
37. Halla $A(V(xy - 1))$.
38. Calcula $\dim A(V(x^2 + y^2 - 1))$.
39. Calcula $\dim \mathbb{C}[x,y]$.
40. ¿En qué dirección va el homomorfismo inducido por un morfismo $V \to W$?
41. ¿Cuál es la imagen de $t \mapsto (t, t^2)$?
42. ¿Cuál es la imagen de $t \mapsto (t^2, t^3)$?

### Curvas elípticas, Riemann-Roch y esquemas

43. ¿Cuántos puntos al infinito tiene una cúbica suave de Weierstrass en $\mathbb{P}^2$?
44. ¿Qué estructura tiene el conjunto de puntos de una curva elíptica?
45. Riemann-Roch: $g = 0$, $\deg D = 3$. Calcula $\dim L(D)$.
46. Riemann-Roch: $g = 1$, $\deg D = 2$. Calcula $\dim L(D)$.
47. Riemann-Roch: $g = 2$, $\deg D = 5$. Calcula $\dim L(D)$.
48. Riemann-Roch: $g = 3$, $\deg D = 7$. Calcula $\dim L(D)$.
49. Riemann-Roch con $D = K$. Calcula $\dim L(K)$.
50. ¿Cuál es el grado del divisor de una función racional no nula sobre una curva proyectiva suave?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $0$</div>
<div class="r"><b>02</b> $1$</div>
<div class="r"><b>03</b> $3$</div>
<div class="r"><b>04</b> $6$</div>
<div class="r"><b>05</b> $10$</div>
<div class="r"><b>06</b> $15$</div>
<div class="r"><b>07</b> $21$</div>
<div class="r"><b>08</b> $d = 3$</div>
<div class="r"><b>09</b> $d = 4$</div>
<div class="r"><b>10</b> $d = 5$</div>
<div class="r"><b>11</b> $1$</div>
<div class="r"><b>12</b> $2$</div>
<div class="r"><b>13</b> $4$</div>
<div class="r"><b>14</b> $3$</div>
<div class="r"><b>15</b> $6$</div>
<div class="r"><b>16</b> $9$</div>
<div class="r"><b>17</b> $4$</div>
<div class="r"><b>18</b> $16$</div>
<div class="r"><b>19</b> $12$</div>
<div class="r"><b>20</b> $10$</div>
<div class="r"><b>21</b> $(x)$</div>
<div class="r"><b>22</b> $(x)$</div>
<div class="r"><b>23</b> $(xy)$</div>
<div class="r"><b>24</b> Sí</div>
<div class="r"><b>25</b> No</div>
<div class="r"><b>26</b> $(xy)$</div>
<div class="r"><b>27</b> $(x^2 - y^2)$</div>
<div class="r"><b>28</b> $\{(0,0),(1,1)\}$</div>
<div class="r"><b>29</b> $\emptyset$</div>
<div class="r"><b>30</b> $\mathbb{A}^n$</div>
<div class="r"><b>31</b> $0$</div>
<div class="r"><b>32</b> $\text{circunferencia unitaria}$</div>
<div class="r"><b>33</b> $(x-a),\ a \in \mathbb{C}$</div>
<div class="r"><b>34</b> $\text{subvariedades irreducibles}$</div>
<div class="r"><b>35</b> $\mathbb{C}[x]$</div>
<div class="r"><b>36</b> $\mathbb{C}[x]$</div>
<div class="r"><b>37</b> $\mathbb{C}[x,x^{-1}]$</div>
<div class="r"><b>38</b> $1$</div>
<div class="r"><b>39</b> $2$</div>
<div class="r"><b>40</b> $A(W) \to A(V)$</div>
<div class="r"><b>41</b> $V(y - x^2)$</div>
<div class="r"><b>42</b> $V(y^2 - x^3)$</div>
<div class="r"><b>43</b> $1$</div>
<div class="r"><b>44</b> $\text{grupo abeliano}$</div>
<div class="r"><b>45</b> $4$</div>
<div class="r"><b>46</b> $2$</div>
<div class="r"><b>47</b> $4$</div>
<div class="r"><b>48</b> $5$</div>
<div class="r"><b>49</b> $g$</div>
<div class="r"><b>50</b> $0$</div>
</div>
