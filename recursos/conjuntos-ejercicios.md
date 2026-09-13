# Teoría de conjuntos · Ejercicios

## Formulario

### Pertenencia e inclusión

$$x \in A, \quad x \notin A, \quad A \subseteq B \iff \forall x\,(x \in A \to x \in B), \quad A = B \iff (A \subseteq B \land B \subseteq A)$$
$$\emptyset \subseteq A, \qquad A \subseteq A, \qquad \mathcal{P}(A) = \{S : S \subseteq A\}$$

### Operaciones

$$A \cup B = \{x : x \in A \lor x \in B\}, \qquad A \cap B = \{x : x \in A \land x \in B\}$$
$$A \setminus B = \{x : x \in A \land x \notin B\}, \qquad A \triangle B = (A \setminus B) \cup (B \setminus A)$$
$$A^{c} = U \setminus A, \qquad A \times B = \{(a, b) : a \in A \land b \in B\}$$

### Leyes de De Morgan

$$(A \cup B)^{c} = A^{c} \cap B^{c}, \qquad (A \cap B)^{c} = A^{c} \cup B^{c}$$
$$(A \cup B \cup C)^{c} = A^{c} \cap B^{c} \cap C^{c}$$

### Cardinalidad

$$|A \cup B| = |A| + |B| - |A \cap B|$$
$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$$
$$|A \times B| = |A| \cdot |B|, \qquad |\mathcal{P}(A)| = 2^{|A|}$$

### Relaciones

$$R \text{ de equivalencia} \iff R \text{ reflexiva, simétrica y transitiva}$$
$$R \text{ de orden parcial} \iff R \text{ reflexiva, antisimétrica y transitiva}$$
$$[a] = \{b \in A : a \sim b\}, \qquad A = \bigcup_{a \in A} [a] \quad \text{(clases disjuntas)}$$

### Numerabilidad

$$A \text{ numerable} \iff \exists f : \mathbb{N} \to A \ \text{biyectiva}, \qquad |\mathbb{N}| = \aleph_0, \quad |\mathbb{R}| = 2^{\aleph_0}$$
$$|\mathbb{N}| < |\mathcal{P}(\mathbb{N})|, \qquad \mathbb{Z} \text{ y } \mathbb{Q} \text{ numerables}, \qquad \mathbb{R} \text{ no numerable}$$
$$\mathbb{Z} : 0, 1, -1, 2, -2, \ldots, \qquad \mathbb{N} \times \mathbb{N} : (0,0), (0,1), (1,0), (0,2), \ldots$$

## Ejercicios (50)

1. Sean $A = \{1, 2, 3\}$ y $B = \{3, 4\}$. Halla $A \cup B$.
2. Con esos conjuntos, halla $A \cap B$.
3. Con esos conjuntos, halla $A \setminus B$.
4. Con esos conjuntos, halla $B \setminus A$.
5. Sean $A = \{1, 2, 3, 4\}$ y $B = \{2, 4, 6\}$. Halla $A \cap B$.
6. Con esos conjuntos, halla $A \triangle B$.
7. Sea $A = \{1, 2, 3\}$. ¿Cuántos elementos tiene $\mathcal{P}(A)$?
8. Sea $A = \{1, 2, 3, 4, 5, 6\}$. Calcula $|\mathcal{P}(A)|$.
9. Sea $U = \{1, \ldots, 8\}$ y $A = \{2, 4, 6\}$. Halla $A^{c}$.
10. Sea $U = \{1, \ldots, 10\}$ y $A = \{1, 3, 5, 7, 9\}$. Halla $A^{c}$.
11. Si $|A| = 5$, $|B| = 7$ y $|A \cap B| = 3$, halla $|A \cup B|$.
12. Si $|A| = 4$ y $|B| = 5$, halla $|A \times B|$.
13. ¿Cuántos pares $(a, b) \in \mathbb{N}^{2}$ cumplen $a + b = 5$?
14. Sean $A = \{1, 2, 3, 4\}$ y $B = \{3, 4, 5\}$. Halla $|A \cup B|$.
15. Del 1 al 10, ¿cuántos enteros no son divisibles ni por 2 ni por 3?
16. Sean $U = \{1, \ldots, 6\}$, $A = \{1, 2, 3\}$ y $B = \{3, 4\}$. Halla $(A \cup B)^{c}$.
17. Con esos conjuntos, halla $A^{c} \cap B^{c}$.
18. Con esos conjuntos, halla $A^{c} \cup B^{c}$.
19. Con esos conjuntos, halla $(A \cap B)^{c}$.
20. La relación identidad en $\{1, 2, 3\}$, ¿es de equivalencia?
21. ¿Cuántas relaciones binarias distintas hay en un conjunto de $3$ elementos?
22. ¿Cuántas relaciones reflexivas hay en un conjunto de $2$ elementos?
23. La congruencia módulo $3$ en $\mathbb{Z}$, ¿cuántas clases tiene?
24. La congruencia módulo $5$ en $\mathbb{Z}$, ¿cuántas clases tiene?
25. Halla las clases de congruencia módulo $3$ en $\{0, 1, \ldots, 8\}$.
26. La relación "tener el mismo cumpleaños", ¿cuántas clases admite como máximo?
27. Si $A$ se particiona en clases de tamaños $2$, $3$ y $5$, ¿cuánto vale $|A|$?
28. ¿Cuál es el cardinal de $\mathbb{N}$?
29. ¿Es $\mathbb{Z}$ numerable?
30. ¿Es $\mathbb{Q}$ numerable?
31. ¿Es $\mathbb{R}$ numerable?
32. Compara $|\mathbb{N}|$ con $|\mathcal{P}(\mathbb{N})|$.
33. Escribe $|\mathbb{R}|$ en notación de cardinales.
34. Si $A$ y $B$ son disjuntos con $|A| = 6$ y $|B| = 4$, halla $|A \cup B|$.
35. Si $|A| = 6$, $|B| = 4$ y $|A \cap B| = 2$, halla $|A \cup B|$.
36. Si $|A| = 10$, $|B| = 8$ y $|A \cup B| = 15$, halla $|A \cap B|$.
37. Calcula $|\{x \in \mathbb{Z} : -3 \leq x \leq 5\}|$.
38. Calcula $|\{x \in \mathbb{N} : x < 8\}|$.
39. ¿Cuántos subconjuntos de tamaño $2$ tiene un conjunto de $5$ elementos?
40. ¿Cuántos subconjuntos de tamaño $3$ tiene un conjunto de $5$ elementos?
41. ¿Cuántos subconjuntos propios no vacíos tiene un conjunto de $4$ elementos?
42. Halla $\mathcal{P}(\emptyset)$.
43. Calcula $|\mathcal{P}(\{1, 2, 3, 4\})|$.
44. Simplifica $(A^{c})^{c}$.
45. Simplifica $A \cap A^{c}$.
46. Simplifica $A \cup A^{c}$.
47. ¿Es $\leq$ un orden total en $\mathbb{R}$?
48. ¿Es $<$ reflexiva en $\mathbb{R}$?
49. La divisibilidad en $\{1, 2, 3, 6\}$, ¿es un orden parcial?
50. ¿Existe una biyección entre $\mathbb{N}$ y $\mathbb{Z}$?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $\{1,2,3,4\}$</div>
<div class="r"><b>02</b> $\{3\}$</div>
<div class="r"><b>03</b> $\{1,2\}$</div>
<div class="r"><b>04</b> $\{4\}$</div>
<div class="r"><b>05</b> $\{2,4\}$</div>
<div class="r"><b>06</b> $\{1,3,6\}$</div>
<div class="r"><b>07</b> $8$</div>
<div class="r"><b>08</b> $64$</div>
<div class="r"><b>09</b> $\{1,3,5,7,8\}$</div>
<div class="r"><b>10</b> $\{2,4,6,8,10\}$</div>
<div class="r"><b>11</b> $9$</div>
<div class="r"><b>12</b> $20$</div>
<div class="r"><b>13</b> $6$</div>
<div class="r"><b>14</b> $5$</div>
<div class="r"><b>15</b> $3$</div>
<div class="r"><b>16</b> $\{5,6\}$</div>
<div class="r"><b>17</b> $\{5,6\}$</div>
<div class="r"><b>18</b> $\{1,2,4,5,6\}$</div>
<div class="r"><b>19</b> $\{1,2,4,5,6\}$</div>
<div class="r"><b>20</b> Sí</div>
<div class="r"><b>21</b> $512$</div>
<div class="r"><b>22</b> $4$</div>
<div class="r"><b>23</b> $3$</div>
<div class="r"><b>24</b> $5$</div>
<div class="r"><b>25</b> $[0]=\{0,3,6\},\,[1]=\{1,4,7\},\,[2]=\{2,5,8\}$</div>
<div class="r"><b>26</b> $366$</div>
<div class="r"><b>27</b> $10$</div>
<div class="r"><b>28</b> $\aleph_0$</div>
<div class="r"><b>29</b> Sí</div>
<div class="r"><b>30</b> Sí</div>
<div class="r"><b>31</b> No</div>
<div class="r"><b>32</b> $|\mathcal{P}(\mathbb{N})|>|\mathbb{N}|$</div>
<div class="r"><b>33</b> $2^{\aleph_0}$</div>
<div class="r"><b>34</b> $10$</div>
<div class="r"><b>35</b> $8$</div>
<div class="r"><b>36</b> $3$</div>
<div class="r"><b>37</b> $9$</div>
<div class="r"><b>38</b> $8$</div>
<div class="r"><b>39</b> $10$</div>
<div class="r"><b>40</b> $10$</div>
<div class="r"><b>41</b> $14$</div>
<div class="r"><b>42</b> $\{\emptyset\}$</div>
<div class="r"><b>43</b> $16$</div>
<div class="r"><b>44</b> $A$</div>
<div class="r"><b>45</b> $\emptyset$</div>
<div class="r"><b>46</b> $U$</div>
<div class="r"><b>47</b> Sí</div>
<div class="r"><b>48</b> No</div>
<div class="r"><b>49</b> Sí</div>
<div class="r"><b>50</b> Sí</div>
</div>
