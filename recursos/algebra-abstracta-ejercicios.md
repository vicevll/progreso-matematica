# Álgebra abstracta · Ejercicios

## Formulario

### Grupos

Un **grupo** $(G, *)$ cumple cerradura, asociatividad, identidad $e$ e inversos. Es **abeliano** si $a * b = b * a$.

$$(a * b) * c = a * (b * c), \qquad e * a = a * e = a, \qquad a * a^{-1} = a^{-1} * a = e$$

El **orden** de $g$ es el menor $n > 0$ con $g^n = e$.

### Anillos y cuerpos

Un **anillo** $(R, +, \cdot)$ tiene $(R, +)$ grupo abeliano, producto asociativo y distributivo:
$$a \cdot (b + c) = a \cdot b + a \cdot c$$
Es **cuerpo** si es conmutativo, unitario y todo elemento no nulo es invertible. $\mathbb{Z}_n$ es cuerpo si y solo si $n$ es primo.

### Subgrupos e ideales

Criterio de subgrupo: $H \neq \emptyset$ y $a, b \in H \Rightarrow a b^{-1} \in H$.

**Lagrange:** $|G| = |H| \cdot [G : H]$, así que $|H|$ divide a $|G|$.

$I \subseteq R$ es **ideal** si es subgrupo aditivo y $r a \in I$ para todo $r \in R$, $a \in I$. En $\mathbb{Z}$ los ideales son $n\mathbb{Z}$.

### Homomorfismos

$$\phi(a * b) = \phi(a) * \phi(b), \qquad \ker \phi = \{a : \phi(a) = e\}, \qquad G / \ker \phi \cong \text{Im}\,\phi$$

### Clasificación

1. Orden $p$ primo: solo $\mathbb{Z}_p$.
2. Orden $4$: $\mathbb{Z}_4$ y $\mathbb{Z}_2 \times \mathbb{Z}_2$.
3. Orden $6$: $\mathbb{Z}_6$ y $S_3$.
4. **Cayley:** todo grupo finito es subgrupo de un $S_n$.

## Ejercicios (50)

### Verificar si es grupo (1–10)

1. ¿Es $(\mathbb{Z}, +)$ un grupo?
2. ¿Es $(\mathbb{Z}, \cdot)$ un grupo?
3. ¿Es $(\mathbb{Q}, +)$ un grupo?
4. ¿Es $(\mathbb{N}, +)$ un grupo?
5. ¿Es $(\mathbb{R} \setminus \{0\}, \cdot)$ un grupo?
6. ¿Es $(\{1, -1, i, -i\}, \cdot)$ un grupo?
7. ¿Es el conjunto de matrices $2 \times 2$ con determinante $0$ un grupo bajo el producto?
8. ¿Es $(GL_2(\mathbb{R}), \cdot)$ un grupo?
9. ¿Es $(\mathbb{Z}_5 \setminus \{0\}, \cdot)$ un grupo?
10. ¿Es $(\mathbb{Z}_6 \setminus \{0\}, \cdot)$ un grupo?

### Subgrupos (11–22)

11. ¿Es $2\mathbb{Z}$ un subgrupo de $(\mathbb{Z}, +)$?
12. ¿Es $H = \{0, 3, 6\}$ un subgrupo de $\mathbb{Z}_9$?
13. ¿Es $H = \{0, 2, 4\}$ un subgrupo de $\mathbb{Z}_6$?
14. ¿Es $H = \{0, 1, 2\}$ un subgrupo de $\mathbb{Z}_4$?
15. ¿Es $3\mathbb{Z}$ un subgrupo de $(\mathbb{Z}, +)$?
16. Lista todos los subgrupos de $\mathbb{Z}_4$.
17. Lista todos los subgrupos de $\mathbb{Z}_6$.
18. ¿Es $H = \{0, 5\}$ un subgrupo de $\mathbb{Z}_{10}$?
19. ¿Es el conjunto de matrices invertibles un subgrupo de las matrices $2 \times 2$?
20. ¿Es $(\mathbb{Z}, +)$ un subgrupo de $(\mathbb{Q}, +)$?
21. ¿Es $H = \{1, 3, 5, 7\}$ un subgrupo de $(\mathbb{Z}_8^*, \cdot)$?
22. ¿Es $H = \{-1, 1\}$ un subgrupo de $(\mathbb{R} \setminus \{0\}, \cdot)$?

### Órdenes (23–34)

23. Halla el orden de $\bar{3}$ en $\mathbb{Z}_{12}$.
24. Halla el orden de $\bar{4}$ en $\mathbb{Z}_{10}$.
25. Halla el orden de $\bar{2}$ en $\mathbb{Z}_8$.
26. Halla el orden de $\bar{5}$ en $\mathbb{Z}_{10}$.
27. Halla el orden de $\bar{6}$ en $\mathbb{Z}_{12}$.
28. Halla el orden de $\bar{1}$ en $\mathbb{Z}_7$.
29. Halla el orden de $\bar{2}$ en $(\mathbb{Z}_7^*, \cdot)$.
30. Halla el orden de $\bar{3}$ en $(\mathbb{Z}_7^*, \cdot)$.
31. Halla el orden de la permutación $(1\,2\,3\,4)$ en $S_4$.
32. Halla el orden de la permutación $(1\,2)(3\,4\,5)$ en $S_5$.
33. ¿Cuál es el orden del grupo diedral $D_4$?
34. ¿Cuál es el orden del grupo simétrico $S_3$?

### Homomorfismos (35–42)

35. ¿Es $\phi: \mathbb{Z} \to \mathbb{Z}$, $\phi(n) = 2n$, un homomorfismo?
36. Halla el núcleo de $\phi: \mathbb{Z} \to \mathbb{Z}_4$, $\phi(n) = n \bmod 4$.
37. Halla la imagen de $\phi: \mathbb{Z} \to \mathbb{Z}_5$, $\phi(n) = n \bmod 5$.
38. ¿Es $\phi: \mathbb{Z} \to \mathbb{Z}$, $\phi(n) = n + 1$, un homomorfismo?
39. Halla el núcleo de $\phi: \mathbb{Z} \to \mathbb{Z}_{12}$, $\phi(n) = n \bmod 12$.
40. Halla el núcleo de $\phi: \mathbb{Z}_6 \to \mathbb{Z}_6$, $\phi(x) = 2x$.
41. Halla la imagen de $\phi: \mathbb{Z} \to \mathbb{Z}$, $\phi(n) = 3n$.
42. ¿Es $\phi: \mathbb{R} \to \mathbb{R}$, $\phi(x) = x^2$, un homomorfismo de grupos aditivos?

### Ideales y anillos (43–50)

43. ¿Es $2\mathbb{Z}$ un ideal de $\mathbb{Z}$?
44. ¿Es el ideal $(5)$ maximal en $\mathbb{Z}$?
45. ¿Es el ideal $(6)$ primo en $\mathbb{Z}$?
46. ¿Es $\mathbb{Z}_7$ un cuerpo?
47. ¿Cuántos ideales tiene $\mathbb{Z}_{12}$?
48. ¿Es el ideal $(x^2 + 1)$ maximal en $\mathbb{R}[x]$?
49. ¿Es $\mathbb{Z}[x]$ un dominio de ideales principales?
50. ¿Es $(\mathbb{Z}_6, +, \cdot)$ un dominio de integridad?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> Sí</div>
<div class="r"><b>02</b> No</div>
<div class="r"><b>03</b> Sí</div>
<div class="r"><b>04</b> No</div>
<div class="r"><b>05</b> Sí</div>
<div class="r"><b>06</b> Sí</div>
<div class="r"><b>07</b> No</div>
<div class="r"><b>08</b> Sí</div>
<div class="r"><b>09</b> Sí</div>
<div class="r"><b>10</b> No</div>
<div class="r"><b>11</b> Sí</div>
<div class="r"><b>12</b> Sí</div>
<div class="r"><b>13</b> Sí</div>
<div class="r"><b>14</b> No</div>
<div class="r"><b>15</b> Sí</div>
<div class="r"><b>16</b> $\{0\}$, $\{0,2\}$, $\mathbb{Z}_4$</div>
<div class="r"><b>17</b> $\{0\}$, $\{0,3\}$, $\{0,2,4\}$, $\mathbb{Z}_6$</div>
<div class="r"><b>18</b> Sí</div>
<div class="r"><b>19</b> Sí</div>
<div class="r"><b>20</b> Sí</div>
<div class="r"><b>21</b> Sí</div>
<div class="r"><b>22</b> Sí</div>
<div class="r"><b>23</b> $4$</div>
<div class="r"><b>24</b> $5$</div>
<div class="r"><b>25</b> $4$</div>
<div class="r"><b>26</b> $2$</div>
<div class="r"><b>27</b> $2$</div>
<div class="r"><b>28</b> $7$</div>
<div class="r"><b>29</b> $3$</div>
<div class="r"><b>30</b> $6$</div>
<div class="r"><b>31</b> $4$</div>
<div class="r"><b>32</b> $6$</div>
<div class="r"><b>33</b> $8$</div>
<div class="r"><b>34</b> $6$</div>
<div class="r"><b>35</b> Sí</div>
<div class="r"><b>36</b> $4\mathbb{Z}$</div>
<div class="r"><b>37</b> $\mathbb{Z}_5$</div>
<div class="r"><b>38</b> No</div>
<div class="r"><b>39</b> $12\mathbb{Z}$</div>
<div class="r"><b>40</b> $\{0, 3\}$</div>
<div class="r"><b>41</b> $3\mathbb{Z}$</div>
<div class="r"><b>42</b> No</div>
<div class="r"><b>43</b> Sí</div>
<div class="r"><b>44</b> Sí</div>
<div class="r"><b>45</b> No</div>
<div class="r"><b>46</b> Sí</div>
<div class="r"><b>47</b> $6$</div>
<div class="r"><b>48</b> Sí</div>
<div class="r"><b>49</b> No</div>
<div class="r"><b>50</b> No</div>
</div>
