# Ejercicios de teoría de representaciones

## Formulario

### Representaciones
- Representación: $\rho: G \to GL(V)$.
- Dimensión: $\dim V$.
- Representación regular: dimensión $|G|$.
- Permutación: $S_n$ sobre $\mathbb{C}^n$, con $\chi(g) = \#\{i : g(i) = i\}$.
- Trivial: $\chi(g) = 1$ para todo $g$.

### Caracteres
- $\chi_\rho(g) = \text{tr}(\rho(g))$, y es función de clase.
- $\chi(e) = \dim V$.
- $\chi(g^{-1}) = \overline{\chi(g)}$.
- $\chi_{V\oplus W} = \chi_V + \chi_W$ y $\chi_{V\otimes W} = \chi_V\,\chi_W$.
- Mismo carácter $\iff$ representaciones equivalentes.

### Ortogonalidad
- $\langle \chi, \psi\rangle = \dfrac{1}{|G|}\sum_{g\in G}\chi(g)\,\overline{\psi(g)}$.
- $\langle \chi_i, \chi_j\rangle = \delta_{ij}$ para irreducibles.
- Columnas: $\sum_i \chi_i(g)\,\overline{\chi_i(h)} = \dfrac{|G|}{|cl(g)|}\,\delta_{cl(g),cl(h)}$.
- Si $\chi$ es irreducible no trivial, $\sum_{g\in G}\chi(g) = 0$.

### Descomposición
- $m_i = \langle \chi_V, \chi_i\rangle$.
- $V \cong \bigoplus_i V_i^{\oplus m_i}$ y $\chi_V = \sum_i m_i\,\chi_i$.
- $\langle \chi_V, \chi_V\rangle = \sum_i m_i^2$.
- $V$ irreducible $\iff \langle \chi_V, \chi_V\rangle = 1$.

### Maschke y conteo
- Maschke: si $\text{car}\,\mathbb{K}\nmid |G|$, $V$ es suma directa de irreducibles.
- $\sum_i (\dim V_i)^2 = |G|$.
- Número de irreducibles $=$ número de clases de conjugación.

### Tablas de caracteres
- Filas: irreducibles; columnas: clases de conjugación.
- Ortogonalidad de filas y de columnas.
- Trivial y signo suelen ocupar las primeras filas.
- Los productos tensoriales se obtienen multiplicando caracteres.

## Ejercicios (50)
### Bloque A · Fundamentos
1. ¿Cuánto vale $\chi(e)$ para la representación trivial?
2. ¿Cuánto vale $\chi(e)$ para la representación regular de un grupo finito $G$?
3. ¿Cuál es la dimensión de la representación de permutación de $S_n$ sobre $\mathbb{C}^n$?
4. ¿Cuántas representaciones irreducibles tiene $S_3$?
5. ¿Cuántas representaciones irreducibles tiene $S_4$?
6. ¿Cuántas representaciones irreducibles tiene $\mathbb{Z}_6$?
7. ¿Cuál es la dimensión de la representación regular de $D_4$?
8. ¿Qué dimensión tiene toda irreducible de un grupo abeliano finito sobre $\mathbb{C}$?
9. Escribe las dimensiones de las irreducibles de $S_3$.
10. Escribe las dimensiones de las irreducibles de $S_4$.

### Bloque B · Caracteres de $S_3$
11. Carácter de la trivial de $S_3$ en las clases $(e,(1\,2),(1\,2\,3))$.
12. Carácter del signo de $S_3$.
13. Carácter de la estándar de $S_3$.
14. Carácter de la representación de permutación de $S_3$.
15. Calcula $\langle\chi_{\text{triv}},\chi_{\text{sign}}\rangle$ en $S_3$.
16. Calcula $\langle\chi_{\text{triv}},\chi_{\text{triv}}\rangle$ en $S_3$.
17. Calcula $\langle\chi_{\text{std}},\chi_{\text{std}}\rangle$ en $S_3$.
18. Calcula $\langle\chi_{\text{perm}},\chi_{\text{triv}}\rangle$ en $S_3$.
19. Calcula $\langle\chi_{\text{perm}},\chi_{\text{std}}\rangle$ en $S_3$.
20. Descompón la representación de permutación de $S_3$.

### Bloque C · Descomposición
21. Descompón $\chi = (2,-2,2)$ de $S_3$.
22. Descompón $\chi = (3,-1,0)$ de $S_3$.
23. Descompón $\chi = (4,0,1)$ de $S_3$.
24. Escribe el carácter de la representación regular de $S_3$.
25. Halla la multiplicidad de la trivial en la regular de $S_3$.
26. Halla la multiplicidad de la estándar en la regular de $S_3$.
27. Halla la multiplicidad del signo en $\chi_{\text{std}}\otimes\chi_{\text{std}}$ de $S_3$.
28. Descompón $2\,\chi_{\text{std}}$ de $S_3$.
29. Descompón $\chi_{\text{sign}}\otimes\chi_{\text{std}}$ de $S_3$.
30. Descompón $\chi_{\text{std}}\otimes\chi_{\text{std}}$ de $S_3$.

### Bloque D · Grupos abelianos y tablas
31. Escribe los caracteres de $\mathbb{Z}_2$.
32. ¿Cuántas irreducibles tiene $\mathbb{Z}_3$?
33. ¿Qué valor toma la irreducible no trivial de $\mathbb{Z}_3$ en un generador?
34. ¿Qué valor toma el carácter trivial de $\mathbb{Z}_4$ en cada elemento?
35. Escribe la fórmula del carácter $\chi_j(g^k)$ para $\mathbb{Z}_n$.
36. Calcula $\sum_{g\in G}\chi(g)$ para una irreducible no trivial.
37. ¿Cuántas irreducibles tiene $D_4$?
38. Escribe las dimensiones de las irreducibles de $D_4$.
39. Calcula $\sum_i(\dim V_i)^2$ para $D_4$.
40. Calcula $\sum_i(\dim V_i)^2$ para $A_4$.

### Bloque E · Teoremas y cálculo
41. Escribe las dimensiones de las irreducibles de $A_4$.
42. Carácter de la permutación de $S_4$ en $(e,(1\,2),(1\,2\,3),(1\,2\,3\,4),(1\,2)(3\,4))$.
43. Calcula $\langle\chi_{\text{perm}},\chi_{\text{perm}}\rangle$ en $S_4$.
44. Descompón la representación de permutación de $S_4$.
45. ¿Cuántas irreducibles tiene $S_3\times\mathbb{Z}_2$?
46. ¿Qué vale un morfismo entre irreducibles no isomorfas según el lema de Schur?
47. ¿Qué forma tiene un endomorfismo de una irreducible sobre $\mathbb{C}$ según el lema de Schur?
48. Calcula $\langle\chi_i,\chi_j\rangle$ para irreducibles distintas.
49. ¿Cuántas clases de conjugación tiene $S_3$?
50. Escribe $|S_3|$ como suma de cuadrados de dimensiones.

## Solucionario · resultados
<div class="results">
<div class="r"><b>01</b> $1$</div>
<div class="r"><b>02</b> $|G|$</div>
<div class="r"><b>03</b> $n$</div>
<div class="r"><b>04</b> $3$</div>
<div class="r"><b>05</b> $5$</div>
<div class="r"><b>06</b> $6$</div>
<div class="r"><b>07</b> $8$</div>
<div class="r"><b>08</b> $1$</div>
<div class="r"><b>09</b> $1,1,2$</div>
<div class="r"><b>10</b> $1,1,2,3,3$</div>
<div class="r"><b>11</b> $(1,1,1)$</div>
<div class="r"><b>12</b> $(1,-1,1)$</div>
<div class="r"><b>13</b> $(2,0,-1)$</div>
<div class="r"><b>14</b> $(3,1,0)$</div>
<div class="r"><b>15</b> $0$</div>
<div class="r"><b>16</b> $1$</div>
<div class="r"><b>17</b> $1$</div>
<div class="r"><b>18</b> $1$</div>
<div class="r"><b>19</b> $1$</div>
<div class="r"><b>20</b> $\chi_{\text{triv}}+\chi_{\text{std}}$</div>
<div class="r"><b>21</b> $2\,\chi_{\text{sign}}$</div>
<div class="r"><b>22</b> $\chi_{\text{sign}}+\chi_{\text{std}}$</div>
<div class="r"><b>23</b> $\chi_{\text{triv}}+\chi_{\text{sign}}+\chi_{\text{std}}$</div>
<div class="r"><b>24</b> $(6,0,0)$</div>
<div class="r"><b>25</b> $1$</div>
<div class="r"><b>26</b> $2$</div>
<div class="r"><b>27</b> $1$</div>
<div class="r"><b>28</b> $(4,0,-2)=2\,\chi_{\text{std}}$</div>
<div class="r"><b>29</b> $\chi_{\text{std}}$</div>
<div class="r"><b>30</b> $\chi_{\text{triv}}+\chi_{\text{sign}}+\chi_{\text{std}}$</div>
<div class="r"><b>31</b> $(1,1)$ y $(1,-1)$</div>
<div class="r"><b>32</b> $3$</div>
<div class="r"><b>33</b> $\omega=e^{2\pi i/3}$</div>
<div class="r"><b>34</b> $1$</div>
<div class="r"><b>35</b> $\omega^{jk}$, con $\omega=e^{2\pi i/n}$</div>
<div class="r"><b>36</b> $0$</div>
<div class="r"><b>37</b> $5$</div>
<div class="r"><b>38</b> $1,1,1,1,2$</div>
<div class="r"><b>39</b> $8$</div>
<div class="r"><b>40</b> $12$</div>
<div class="r"><b>41</b> $1,1,1,3$</div>
<div class="r"><b>42</b> $(4,2,1,0,0)$</div>
<div class="r"><b>43</b> $2$</div>
<div class="r"><b>44</b> $\chi_{\text{triv}}+\chi_{\text{dim}\,3}$</div>
<div class="r"><b>45</b> $6$</div>
<div class="r"><b>46</b> $0$</div>
<div class="r"><b>47</b> $\lambda I$</div>
<div class="r"><b>48</b> $0$</div>
<div class="r"><b>49</b> $3$</div>
<div class="r"><b>50</b> $6$</div>
</div>
