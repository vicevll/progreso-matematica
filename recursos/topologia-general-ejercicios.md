# Topología general — Formulario y ejercicios

Área: **Geometría y topología** · Nivel: **Univ 3–4** · Descripción: espacios topológicos, continuidad, conexidad y compacidad.

## Formulario

### Espacios topológicos y abiertos

- **Espacio topológico** $(X,\tau)$: $\emptyset,X\in\tau$; uniones arbitrarias en $\tau$; intersecciones finitas en $\tau$.
- **Cerrado:** $F$ es cerrado si $X\setminus F\in\tau$.
- **Comparación:** más abiertos = topología más fina; menos abiertos = más gruesa.
- **Base** $\mathcal{B}$: todo abierto es unión de elementos de $\mathcal{B}$.
- **Subespacio** $A\subseteq X$: $\tau_A=\{A\cap U : U\in\tau\}$.

### Interior, clausura y frontera

$$\mathring{A}=\bigcup\{U\in\tau : U\subseteq A\}, \qquad \bar{A}=\bigcap\{F \text{ cerrado} : A\subseteq F\}, \qquad \partial A=\bar{A}\setminus\mathring{A}$$

- $A$ abierto si y solo si $A=\mathring{A}$; $A$ cerrado si y solo si $A=\bar{A}$.
- $\bar{A}=A\cup A'$, con $A'$ los puntos de acumulación.
- $A$ es denso si $\bar{A}=X$.

### Continuidad y homeomorfismos

- $f:X\to Y$ es **continua** si $f^{-1}(U)$ es abierto en $X$ para todo abierto $U\subseteq Y$.
- Equivale a: preimágenes de cerrados son cerradas; $f(\bar{A})\subseteq\overline{f(A)}$.
- **Homeomorfismo:** biyección continua con inversa continua; preserva conexidad, compacidad y separación.

### Conexidad

- $X$ es **conexo** si no es unión de dos abiertos no vacíos y disjuntos.
- Equivalentemente, los únicos conjuntos abiertos y cerrados a la vez son $\emptyset$ y $X$.
- **Conexo por caminos:** todo par de puntos se une con una curva continua; implica conexo.
- La imagen continua de un conexo es conexa; **componentes conexas**: piezas maximales.

### Compacidad

- $X$ es **compacto** si toda cubierta por abiertos admite subcubierta finita.
- Imagen continua de compacto es compacta; cerrado dentro de un compacto es compacto.
- En $\mathbb{R}^n$: compacto si y solo si cerrado y acotado (Heine-Borel).
- Toda función real continua sobre un compacto alcanza máximo y mínimo.

### Separación

- **T1:** los puntos son cerrados.
- **T2 (Hausdorff):** puntos distintos tienen vecindades disjuntas; límites únicos.
- **T3 (regular):** punto y cerrado se separan por abiertos.
- **T4 (normal):** dos cerrados disjuntos se separan por abiertos.
- Jerarquía: normal $\Rightarrow$ regular $\Rightarrow$ Hausdorff $\Rightarrow$ T1. Todo espacio métrico es normal.

### Producto y cociente

- **Producto** $X\times Y$: generado por los rectángulos $U\times V$; las proyecciones son continuas.
- **Cociente** $X/{\sim}$: $V$ es abierto si y solo si $q^{-1}(V)$ es abierto en $X$; se usa para pegar.
- **Tychonoff:** todo producto de compactos es compacto.
- $[0,1]/\{0\sim1\}\cong S^1$; con $(0,y)\sim(1,y)$ en $[0,1]^2$ se obtiene $S^1\times[0,1]$.

## Ejercicios (50)

### Topologías, abiertos y cerrados

1. Sobre $X=\{1,2,3\}$, ¿es $\tau=\{\emptyset,\{1\},\{2\},X\}$ una topología?
2. ¿Cuántos abiertos tiene la topología trivial de un conjunto con $5$ elementos?
3. ¿Cuántos abiertos tiene la topología discreta de un conjunto con $4$ elementos?
4. En $\mathbb{R}$ usual, ¿es $(1,2)\cup[3,4)$ abierto?
5. ¿Es $[0,1]\cup\{2\}$ cerrado en $\mathbb{R}$?
6. Halla el interior de $(0,1]$ en $\mathbb{R}$.
7. Halla la clausura de $\{1/n : n\in\mathbb{N}\}$ en $\mathbb{R}$.
8. Halla la frontera de $\mathbb{Q}$ en $\mathbb{R}$.
9. Halla el interior de $\mathbb{Q}$ en $\mathbb{R}$.
10. ¿Cuántas topologías distintas existen sobre $\{a,b\}$?
11. ¿Es $\{0\}$ abierto en $\mathbb{R}$ con la topología usual?
12. Da una base de la topología usual de $\mathbb{R}$.

### Continuidad y homeomorfismos

13. ¿Es $f(x)=x^2$ continua en $\mathbb{R}$ usual?
14. Calcula $f^{-1}((0,1))$ para $f(x)=x^2$.
15. ¿Es $f(x)=1/x$ continua en $\mathbb{R}\setminus\{0\}$?
16. ¿Es continua la identidad de $\mathbb{R}$ discreto a $\mathbb{R}$ usual?
17. ¿Y la identidad de $\mathbb{R}$ usual a $\mathbb{R}$ discreto?
18. Da un homeomorfismo entre $[0,1]$ y $[0,2]$.
19. ¿Son homeomorfos $[0,1]$ y $(0,1)$?
20. ¿Son homeomorfos $(0,1)$ y $\mathbb{R}$?
21. ¿Es $x\mapsto x^3$ un homeomorfismo de $\mathbb{R}$?
22. ¿Es continua $f(x)=x$ de $\mathbb{R}$ con la topología trivial a $\mathbb{R}$ usual?

### Conexidad

23. ¿Es conexo $[0,1]\cup[2,3]$?
24. ¿Cuántas componentes conexas tiene $\mathbb{R}\setminus\{0\}$?
25. ¿Es conexo $S^1$?
26. ¿Es conexo $\mathbb{Q}$?
27. ¿Qué se puede decir de la imagen continua de un espacio conexo?
28. ¿Es conexo $\mathbb{R}$?
29. ¿Cuántas componentes conexas tiene $(0,1)\cup(1,2)\cup(3,4)$?
30. ¿Es conexo $\mathbb{R}^2\setminus\{0\}$?
31. ¿Es conexo $\{0\}\cup\{1/n : n\in\mathbb{N}\}$?

### Compacidad

32. ¿Es compacto $[0,1]$?
33. ¿Es compacto $(0,1)$?
34. ¿Es compacto $(0,1]$?
35. ¿Es compacto $\mathbb{R}$?
36. ¿Es compacto $S^1$?
37. En $\mathbb{R}^n$, ¿qué caracteriza a los compactos?
38. ¿Es compacto $\{0\}\cup\{1/n : n\in\mathbb{N}\}$?
39. ¿Qué se puede decir de la imagen continua de un compacto?
40. ¿Es compacto $\mathbb{Q}\cap[0,1]$?

### Producto y cociente

41. Identifica el cociente $[0,1]/\{0\sim1\}$.
42. ¿Qué espacio da $[0,1]^2$ con $(0,y)\sim(1,y)$?
43. ¿Qué espacio da $[0,1]^2$ con $(x,0)\sim(x,1)$ y $(0,y)\sim(1,y)$?
44. ¿Qué espacio da $[0,1]^2$ con $(0,y)\sim(1,1-y)$?
45. ¿Es Hausdorff el producto de dos espacios de Hausdorff?
46. ¿Qué afirma el teorema de Tychonoff?
47. ¿Coincide la topología producto de $\mathbb{R}\times\mathbb{R}$ con la usual de $\mathbb{R}^2$?
48. ¿Es compacto el cociente de un espacio compacto?
49. ¿Es Hausdorff todo espacio cociente?
50. Identifica el cociente $\mathbb{R}/\mathbb{Z}$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> No: $\{1\}\cup\{2\}\notin\tau$</div>
<div class="r"><b>02</b> $2$</div>
<div class="r"><b>03</b> $16$</div>
<div class="r"><b>04</b> No</div>
<div class="r"><b>05</b> Sí</div>
<div class="r"><b>06</b> $(0,1)$</div>
<div class="r"><b>07</b> $\{1/n:n\in\mathbb{N}\}\cup\{0\}$</div>
<div class="r"><b>08</b> $\mathbb{R}$</div>
<div class="r"><b>09</b> $\emptyset$</div>
<div class="r"><b>10</b> $4$</div>
<div class="r"><b>11</b> No</div>
<div class="r"><b>12</b> intervalos abiertos $(a,b)$</div>
<div class="r"><b>13</b> Sí</div>
<div class="r"><b>14</b> $(-1,0)\cup(0,1)$</div>
<div class="r"><b>15</b> Sí</div>
<div class="r"><b>16</b> Sí</div>
<div class="r"><b>17</b> No</div>
<div class="r"><b>18</b> $x\mapsto 2x$</div>
<div class="r"><b>19</b> No</div>
<div class="r"><b>20</b> Sí</div>
<div class="r"><b>21</b> Sí</div>
<div class="r"><b>22</b> No</div>
<div class="r"><b>23</b> No</div>
<div class="r"><b>24</b> $2$</div>
<div class="r"><b>25</b> Sí</div>
<div class="r"><b>26</b> No</div>
<div class="r"><b>27</b> es conexa</div>
<div class="r"><b>28</b> Sí</div>
<div class="r"><b>29</b> $3$</div>
<div class="r"><b>30</b> Sí</div>
<div class="r"><b>31</b> No</div>
<div class="r"><b>32</b> Sí</div>
<div class="r"><b>33</b> No</div>
<div class="r"><b>34</b> No</div>
<div class="r"><b>35</b> No</div>
<div class="r"><b>36</b> Sí</div>
<div class="r"><b>37</b> cerrado y acotado</div>
<div class="r"><b>38</b> Sí</div>
<div class="r"><b>39</b> es compacta</div>
<div class="r"><b>40</b> No</div>
<div class="r"><b>41</b> $S^1$</div>
<div class="r"><b>42</b> $S^1\times[0,1]$</div>
<div class="r"><b>43</b> $T^2=S^1\times S^1$</div>
<div class="r"><b>44</b> banda de Möbius</div>
<div class="r"><b>45</b> Sí</div>
<div class="r"><b>46</b> el producto de compactos es compacto</div>
<div class="r"><b>47</b> Sí</div>
<div class="r"><b>48</b> Sí, es compacto</div>
<div class="r"><b>49</b> No</div>
<div class="r"><b>50</b> $S^1$</div>
</div>
