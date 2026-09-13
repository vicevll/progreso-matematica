# Espacios métricos · ejercicios

## Formulario

### Métrica
$d:X\times X\to\mathbb{R}$ con positividad ($d(x,y)\geq 0$ y $d(x,y)=0 \iff x=y$), simetría ($d(x,y)=d(y,x)$) y desigualdad triangular $d(x,z)\leq d(x,y)+d(y,z)$.

### Bola abierta
$$B(x,r)=\{y\in X : d(x,y)<r\}, \qquad r>0.$$

### Abierto y cerrado
$U$ es abierto si $\forall x\in U\ \exists r>0$ con $B(x,r)\subseteq U$. $F$ es cerrado si $X\setminus F$ es abierto.

### Interior, clausura y frontera
$$\mathring{A}\subseteq A\subseteq\overline{A}, \qquad \partial A=\overline{A}\setminus\mathring{A}.$$
$x\in\overline{A}$ si y solo si $B(x,r)\cap A\neq\emptyset$ para todo $r>0$.

### Sucesión de Cauchy
$$\forall\varepsilon>0\ \exists N:\ m,n>N\Rightarrow d(x_m,x_n)<\varepsilon.$$

### Completitud
Todo sucesión de Cauchy converge dentro del espacio.

### Compacidad
Toda cubierta por abiertos tiene subcubierta finita; equivale a que toda sucesión tenga subsucesión convergente.

### Heine-Borel
En $\mathbb{R}^n$: compacto $\iff$ cerrado y acotado.

### Continuidad
$$\forall\varepsilon>0\ \exists\delta>0:\ d_X(x,x_0)<\delta\Rightarrow d_Y(f(x),f(x_0))<\varepsilon.$$
Equivale a que la preimagen de todo abierto sea abierta.

### Continuidad uniforme
Igual que la continuidad pero con $\delta$ independiente del punto.

### Heine-Cantor
Continua en un compacto $\Rightarrow$ uniformemente continua.

## Ejercicios (50)
1. ¿Es $d(x,y)=(x-y)^2$ una métrica en $\mathbb{R}$?
2. ¿Es $d(x,y)=|x-y|$ una métrica en $\mathbb{R}$?
3. ¿Es $d(x,y)=\sqrt{|x-y|}$ una métrica en $\mathbb{R}$?
4. ¿Es $d(x,y)=|x^2-y^2|$ una métrica en $\mathbb{R}$?
5. ¿Es $d(x,y)=\max\{|x-y|,1\}$ una métrica en $\mathbb{R}$?
6. ¿Es $d(x,y)=\dfrac{|x-y|}{1+|x-y|}$ una métrica en $\mathbb{R}$?
7. ¿Es $d_1(x,y)=|x_1-y_1|+|x_2-y_2|$ una métrica en $\mathbb{R}^2$?
8. ¿Es $d_\infty(x,y)=\max\{|x_1-y_1|,|x_2-y_2|\}$ una métrica en $\mathbb{R}^2$?
9. Calcula $d_1((0,0),(3,4))$ en $\mathbb{R}^2$.
10. Calcula $d_\infty((1,-2),(4,2))$ en $\mathbb{R}^2$.
11. Describe $B(0,2)$ en $\mathbb{R}$ con la métrica usual.
12. Describe $B(1,1)$ en $\mathbb{R}$ con la métrica usual.
13. En la métrica discreta sobre $X=\{a,b,c\}$, describe $B(a,1)$.
14. En la métrica discreta sobre $X=\{a,b,c\}$, describe $B(a,2)$.
15. Describe $B((0,0),1)$ en $\mathbb{R}^2$ euclidiano.
16. Describe $B((0,0),1)$ en $(\mathbb{R}^2,d_1)$.
17. Describe $B((0,0),1)$ en $(\mathbb{R}^2,d_\infty)$.
18. En $C[0,1]$ con $d_\infty$, describe $B(f,1)$.
19. ¿Es $(0,1)$ abierto en $\mathbb{R}$?
20. ¿Es $[0,1]$ cerrado en $\mathbb{R}$?
21. ¿Es $\mathbb{Q}$ abierto en $\mathbb{R}$?
22. ¿Es $\mathbb{Q}$ cerrado en $\mathbb{R}$?
23. Halla $\mathring{\mathbb{Q}}$ en $\mathbb{R}$.
24. Halla $\overline{\mathbb{Q}}$ en $\mathbb{R}$.
25. Halla $\partial(0,1)$ en $\mathbb{R}$.
26. Halla $\partial\mathbb{Q}$ en $\mathbb{R}$.
27. ¿Es $\{1/n:n\in\mathbb{N}\}$ cerrado en $\mathbb{R}$?
28. ¿Es $(0,1)$ cerrado en $\mathbb{R}$?
29. ¿Es $\mathbb{Q}$ completo con la métrica usual?
30. ¿Es $(0,1)$ completo con la métrica usual?
31. ¿Es $[0,1]$ completo con la métrica usual?
32. ¿Es $\mathbb{R}$ completo con la métrica usual?
33. ¿Es $(0,1]$ completo con la métrica usual?
34. ¿Es $\mathbb{Z}$ completo con la métrica usual?
35. ¿Es $C[0,1]$ con $d_\infty$ completo?
36. ¿Es $\mathbb{R}^2$ completo con la métrica euclidiana?
37. ¿Es $[0,1]$ compacto?
38. ¿Es $(0,1)$ compacto?
39. ¿Es $\mathbb{R}$ compacto?
40. ¿Es $\{0\}\cup\{1/n:n\in\mathbb{N}\}$ compacto?
41. ¿Es $\mathbb{Q}\cap[0,1]$ compacto?
42. ¿Es el conjunto de Cantor compacto?
43. ¿Es $\{(x,y):x^2+y^2<1\}$ compacto en $\mathbb{R}^2$?
44. ¿Es $\{(x,y):x^2+y^2\leq 1\}$ compacto en $\mathbb{R}^2$?
45. ¿Es $f(x)=x^2$ continua en $\mathbb{R}$?
46. ¿Es $f(x)=1/x$ uniformemente continua en $(0,1)$?
47. ¿Es $f(x)=1/x$ uniformemente continua en $[1,\infty)$?
48. ¿Es $f(x)=\operatorname{sen}x$ uniformemente continua en $\mathbb{R}$?
49. ¿Es $f(x)=x^2$ uniformemente continua en $[0,2]$?
50. ¿Es equivalente la continuidad de $f$ con que la preimagen de todo abierto sea abierta?

## Solucionario · resultados
<div class="results">
<div class="r"><b>01</b> No (falla la desigualdad triangular)</div>
<div class="r"><b>02</b> Sí</div>
<div class="r"><b>03</b> Sí</div>
<div class="r"><b>04</b> No ($d(1,-1)=0$)</div>
<div class="r"><b>05</b> No ($d(x,x)=1$)</div>
<div class="r"><b>06</b> Sí</div>
<div class="r"><b>07</b> Sí</div>
<div class="r"><b>08</b> Sí</div>
<div class="r"><b>09</b> $7$</div>
<div class="r"><b>10</b> $4$</div>
<div class="r"><b>11</b> $(-2,2)$</div>
<div class="r"><b>12</b> $(0,2)$</div>
<div class="r"><b>13</b> $\{a\}$</div>
<div class="r"><b>14</b> $X=\{a,b,c\}$</div>
<div class="r"><b>15</b> $x^2+y^2<1$</div>
<div class="r"><b>16</b> $|x|+|y|<1$</div>
<div class="r"><b>17</b> $\max\{|x|,|y|\}<1$</div>
<div class="r"><b>18</b> $\sup_{t\in[0,1]}|f(t)-g(t)|<1$</div>
<div class="r"><b>19</b> Sí</div>
<div class="r"><b>20</b> Sí</div>
<div class="r"><b>21</b> No</div>
<div class="r"><b>22</b> No</div>
<div class="r"><b>23</b> $\emptyset$</div>
<div class="r"><b>24</b> $\mathbb{R}$</div>
<div class="r"><b>25</b> $\{0,1\}$</div>
<div class="r"><b>26</b> $\mathbb{R}$</div>
<div class="r"><b>27</b> No ($0$ es de acumulación)</div>
<div class="r"><b>28</b> No</div>
<div class="r"><b>29</b> No</div>
<div class="r"><b>30</b> No</div>
<div class="r"><b>31</b> Sí</div>
<div class="r"><b>32</b> Sí</div>
<div class="r"><b>33</b> No</div>
<div class="r"><b>34</b> Sí</div>
<div class="r"><b>35</b> Sí</div>
<div class="r"><b>36</b> Sí</div>
<div class="r"><b>37</b> Sí</div>
<div class="r"><b>38</b> No</div>
<div class="r"><b>39</b> No</div>
<div class="r"><b>40</b> Sí</div>
<div class="r"><b>41</b> No</div>
<div class="r"><b>42</b> Sí</div>
<div class="r"><b>43</b> No</div>
<div class="r"><b>44</b> Sí</div>
<div class="r"><b>45</b> Sí</div>
<div class="r"><b>46</b> No</div>
<div class="r"><b>47</b> Sí</div>
<div class="r"><b>48</b> Sí</div>
<div class="r"><b>49</b> Sí (compacto)</div>
<div class="r"><b>50</b> Sí</div>
</div>
