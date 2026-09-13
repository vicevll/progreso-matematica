# Álgebra conmutativa · Formulario y práctica

## Formulario

### Ideales primos y maximales

1. $I$ es **primo** si $ab \in I \Rightarrow a \in I$ o $b \in I$; equivalentemente $R/I$ es dominio.
2. $I$ es **maximal** si no hay ideal propio estrictamente entre $I$ y $R$; equivalentemente $R/I$ es cuerpo.
3. Todo ideal maximal es primo: $R/I$ cuerpo $\Rightarrow$ $R/I$ dominio.
4. En un anillo noetheriano unitario no nulo, todo ideal propio está contenido en un maximal.
5. $\operatorname{Spec}(R) = \{\mathfrak{p} \subseteq R : \mathfrak{p} \text{ primo}\}$.
6. Ideales de $R/I$ $\leftrightarrow$ ideales de $R$ que contienen a $I$.
7. $\sqrt{I} = \{r \in R : r^n \in I \text{ para algún } n \geq 1\}$; $I$ es radical si $I = \sqrt{I}$.

### Espectro y topología de Zariski

1. Cerrados: $V(I) = \{\mathfrak{p} \in \operatorname{Spec}(R) : I \subseteq \mathfrak{p}\}$.
2. $V(I) \cup V(J) = V(IJ)$ y $\bigcap_\alpha V(I_\alpha) = V(\sum_\alpha I_\alpha)$.
3. Los maximales son puntos cerrados; $(0)$ (en un dominio) es el punto genérico.
4. $\operatorname{Spec}(\mathbb{Z}) = \{(0)\} \cup \{(p) : p \text{ primo}\}$.

### Localización

1. $S^{-1}R = \{r/s : r \in R,\; s \in S\}$ con $r/s = r'/s'$ si $t(rs'-r's)=0$ para algún $t \in S$.
2. $R_\mathfrak{p} = (R \setminus \mathfrak{p})^{-1}R$ es local, con único maximal $\mathfrak{p}R_\mathfrak{p}$.
3. $R_f = \{f^n\}^{-1}R$; equivale a $R[t]/(tf-1)$.
4. Primos de $S^{-1}R$ $\leftrightarrow$ primos $\mathfrak{p}$ de $R$ con $\mathfrak{p} \cap S = \emptyset$.
5. $\operatorname{Frac}(R) = (R\setminus\{0\})^{-1}R$ para $R$ dominio.

### Condiciones de cadena y noetherianidad

1. $R$ es **noetheriano** si toda cadena $I_1 \subseteq I_2 \subseteq \cdots$ se estabiliza.
2. Equivalentes: todo ideal es finitamente generado; todo conjunto no vacío de ideales tiene maximal.
3. **Hilbert:** $R$ noetheriano $\Rightarrow$ $R[x]$ noetheriano; por inducción $\mathbb{K}[x_1,\ldots,x_n]$ es noetheriano.
4. Todo cuerpo y todo DIP (por ejemplo $\mathbb{Z}$, $\mathbb{K}[x]$) son noetherianos.

### Descomposición primaria y dimensión

1. $Q$ **primario** si $ab \in Q,\; a \notin Q \Rightarrow b \in \sqrt{Q}$; $\sqrt{Q}$ es primo.
2. **Lasker–Noether:** en un anillo noetheriano, $I = Q_1 \cap \cdots \cap Q_n$ con $Q_i$ primarios y $\sqrt{Q_i}$ determinados por $I$.
3. En $\mathbb{Z}$, la descomposición primaria de $(n)$ son las potencias de primos de $n$.
4. $\dim R = $ longitud máxima de $\mathfrak{p}_0 \subsetneq \mathfrak{p}_1 \subsetneq \cdots \subsetneq \mathfrak{p}_n$.
5. $\operatorname{ht}(\mathfrak{p}) = \dim R_\mathfrak{p}$.
6. $\dim \mathbb{K}[x_1,\ldots,x_n] = n$; $\dim \mathbb{Z} = 1$; $\dim \mathbb{K} = 0$.
7. **Krull (principal):** si $a$ no es divisor de cero ni invertible, todo primo minimal de $(a)$ tiene altura $1$.

### Nullstellensatz de Hilbert

1. $\mathbb{K}$ algebraicamente cerrado; $V(I) = \{a \in \mathbb{K}^n : f(a)=0\;\forall f \in I\}$.
2. $I(X) = \{f \in \mathbb{K}[x_1,\ldots,x_n] : f(a)=0\;\forall a \in X\}$.
3. **Débil:** los maximales de $\mathbb{K}[x_1,\ldots,x_n]$ son $(x_1-a_1,\ldots,x_n-a_n)$; $I$ propio $\Rightarrow V(I) \neq \emptyset$.
4. **Fuerte:** $I(V(I)) = \sqrt{I}$.
5. Ideales radicales $\leftrightarrow$ variedades, en biyección por $I \mapsto V(I)$ y $X \mapsto I(X)$.

## Ejercicios (50)

1. ¿Es $(0)$ primo en $\mathbb{Z}$?
2. ¿Es $(0)$ maximal en $\mathbb{Z}$?
3. Halla todos los ideales maximales de $\mathbb{Z}$.
4. ¿Es $(6)$ primo en $\mathbb{Z}$?
5. Describe $\operatorname{Spec}(\mathbb{Z})$.
6. ¿Es $(x)$ maximal en $\mathbb{C}[x]$?
7. ¿Es $(x)$ maximal en $\mathbb{R}[x]$?
8. Describe los ideales primos de $\mathbb{C}[x]$.
9. ¿Es $(x^2+1)$ maximal en $\mathbb{R}[x]$?
10. ¿Es $(x^2+1)$ primo en $\mathbb{C}[x]$?
11. ¿Cuántos ideales maximales tiene $\mathbb{C}[x]$?
12. Halla los ideales primos de $\mathbb{Z}/12\mathbb{Z}$.
13. ¿Cuántos puntos tiene $\operatorname{Spec}(\mathbb{Z}/12\mathbb{Z})$?
14. ¿Es $\mathbb{Z}/6\mathbb{Z}$ un dominio?
15. ¿Es $\mathbb{Z}/6\mathbb{Z}$ un cuerpo?
16. Describe los elementos de $\mathbb{Z}_{(p)}$.
17. ¿Es $\mathbb{Z}_{(2)}$ local?
18. ¿Cuál es el ideal maximal de $\mathbb{Z}_{(2)}$?
19. ¿Cuál es el cuerpo de fracciones de $\mathbb{Z}$?
20. ¿Cuál es el cuerpo de fracciones de $\mathbb{K}[x]$?
21. ¿Cuál es el cuerpo de fracciones de $\mathbb{Z}[i]$?
22. ¿Es $\mathbb{Z}$ noetheriano?
23. ¿Es $\mathbb{Z}[x]$ noetheriano?
24. ¿Es $\mathbb{K}[x,y]$ noetheriano?
25. ¿Es $\mathbb{K}[x_1,\ldots,x_n]$ noetheriano?
26. ¿Es $\mathbb{Z}[x_1,x_2,\ldots]$ noetheriano?
27. Calcula $\dim \mathbb{K}$ para $\mathbb{K}$ un cuerpo.
28. Calcula $\dim \mathbb{Z}$.
29. Calcula $\dim \mathbb{K}[x]$.
30. Calcula $\dim \mathbb{C}[x,y]$.
31. Calcula $\dim \mathbb{K}[x_1,\ldots,x_n]$.
32. Calcula $\dim \mathbb{Z}/12\mathbb{Z}$.
33. Calcula $\dim \mathbb{C}[x,y]/(y-x^2)$.
34. Calcula $\dim \mathbb{C}[x,y]/(xy)$.
35. Calcula $\dim \mathbb{C}[x,y]/(x,y)$.
36. Calcula $\dim \mathbb{Z}[x]$.
37. Descompón primariamente $(12)$ en $\mathbb{Z}$.
38. Descompón primariamente $(18)$ en $\mathbb{Z}$.
39. Descompón primariamente $(20)$ en $\mathbb{Z}$.
40. Descompón primariamente $(36)$ en $\mathbb{Z}$.
41. Halla $\sqrt{(12)}$ en $\mathbb{Z}$.
42. Halla $\sqrt{(18)}$ en $\mathbb{Z}$.
43. Enuncia el Nullstellensatz fuerte.
44. Enuncia la versión débil del Nullstellensatz.
45. Describe $V(xy)$ en $\mathbb{C}^2$.
46. Describe $V(y-x^2)$ en $\mathbb{C}^2$.
47. Describe $V(x^2+y^2-1)$ en $\mathbb{R}^2$.
48. Describe $V(x^2+y^2+1)$ en $\mathbb{R}^2$.
49. ¿Cuándo es $R/I$ un cuerpo?
50. ¿Cuándo es $R/I$ un dominio?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $\text{Sí, }\mathbb{Z}\text{ es dominio}$</div>
<div class="r"><b>02</b> $\text{No, }\mathbb{Z}\text{ no es cuerpo}$</div>
<div class="r"><b>03</b> $(p),\ p\ \text{primo}$</div>
<div class="r"><b>04</b> $\text{No, }2\cdot3\in(6)$</div>
<div class="r"><b>05</b> $\{(0)\}\cup\{(p):p\ \text{primo}\}$</div>
<div class="r"><b>06</b> $\text{Sí, }\mathbb{C}[x]/(x)\cong\mathbb{C}$</div>
<div class="r"><b>07</b> $\text{Sí, }\mathbb{R}[x]/(x)\cong\mathbb{R}$</div>
<div class="r"><b>08</b> $(0)\ \text{y}\ (x-a),\ a\in\mathbb{C}$</div>
<div class="r"><b>09</b> $\text{Sí, }\mathbb{R}[x]/(x^2+1)\cong\mathbb{C}$</div>
<div class="r"><b>10</b> $\text{No, }x^2+1=(x-i)(x+i)$</div>
<div class="r"><b>11</b> $\text{Uno por cada }a\in\mathbb{C}$</div>
<div class="r"><b>12</b> $(2)\ \text{y}\ (3)$</div>
<div class="r"><b>13</b> $2$</div>
<div class="r"><b>14</b> $\text{No, }2\cdot3=0$</div>
<div class="r"><b>15</b> $\text{No, hay divisores de cero}$</div>
<div class="r"><b>16</b> $\{a/b:p\nmid b\}$</div>
<div class="r"><b>17</b> $\text{Sí, único maximal}$</div>
<div class="r"><b>18</b> $2\mathbb{Z}_{(2)}$</div>
<div class="r"><b>19</b> $\mathbb{Q}$</div>
<div class="r"><b>20</b> $\mathbb{K}(x)$</div>
<div class="r"><b>21</b> $\mathbb{Q}(i)$</div>
<div class="r"><b>22</b> $\text{Sí, todo ideal es }(n)$</div>
<div class="r"><b>23</b> $\text{Sí, Hilbert}$</div>
<div class="r"><b>24</b> $\text{Sí, Hilbert}$</div>
<div class="r"><b>25</b> $\text{Sí, Hilbert}$</div>
<div class="r"><b>26</b> $\text{No, cadena }(x_1)\subsetneq(x_1,x_2)\subsetneq\cdots$</div>
<div class="r"><b>27</b> $0$</div>
<div class="r"><b>28</b> $1$</div>
<div class="r"><b>29</b> $1$</div>
<div class="r"><b>30</b> $2$</div>
<div class="r"><b>31</b> $n$</div>
<div class="r"><b>32</b> $0$</div>
<div class="r"><b>33</b> $1$</div>
<div class="r"><b>34</b> $1$</div>
<div class="r"><b>35</b> $0$</div>
<div class="r"><b>36</b> $2$</div>
<div class="r"><b>37</b> $(4)\cap(3)$</div>
<div class="r"><b>38</b> $(2)\cap(9)$</div>
<div class="r"><b>39</b> $(4)\cap(5)$</div>
<div class="r"><b>40</b> $(4)\cap(9)$</div>
<div class="r"><b>41</b> $(6)$</div>
<div class="r"><b>42</b> $(6)$</div>
<div class="r"><b>43</b> $I(V(I))=\sqrt{I}$</div>
<div class="r"><b>44</b> $\text{maximales}\leftrightarrow\text{puntos de }\mathbb{K}^n$</div>
<div class="r"><b>45</b> $\text{Los dos ejes }(x=0)\cup(y=0)$</div>
<div class="r"><b>46</b> $\text{La parábola }y=x^2$</div>
<div class="r"><b>47</b> $\text{La circunferencia unitaria}$</div>
<div class="r"><b>48</b> $\emptyset$</div>
<div class="r"><b>49</b> $\text{Si }I\text{ es maximal}$</div>
<div class="r"><b>50</b> $\text{Si }I\text{ es primo}$</div>
</div>
