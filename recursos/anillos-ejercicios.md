# Teoría de anillos · 50 ejercicios

**Cuaderno de práctica · Álgebra superior · Univ 4**
*Ideales, dominios, factorización y módulos.*

---

## Formulario

### Anillos y dominios

Un **anillo** $(R, +, \cdot)$ tiene $(R, +)$ grupo abeliano, producto asociativo y distributivo. Es **conmutativo** si $ab = ba$ y **unitario** si existe $1$.

- **Dominio de integridad:** conmutativo, unitario y sin divisores de cero: $ab = 0 \Rightarrow a = 0$ o $b = 0$.
- **Cuerpo:** todo elemento no nulo es invertible; todo cuerpo es dominio.
- **Unidades** $U(R)$: elementos invertibles; $a$ es divisor de cero si existe $b \neq 0$ con $ab = 0$.
- En $\mathbb{Z}_n$: es cuerpo $\iff$ $n$ es primo; es dominio $\iff$ $n$ es primo; $|U(\mathbb{Z}_n)| = \varphi(n)$.
- En $\mathbb{Z}_n$ los divisores de cero son los no nulos no coprimos con $n$.

### Ideales

Un **ideal** $I \subseteq R$ es un subgrupo aditivo con $r \in R$, $a \in I \Rightarrow ra \in I$.

- **Principal:** $(a) = \{ra : r \in R\}$.
- **Primo:** $ab \in I \Rightarrow a \in I$ o $b \in I$.
- **Maximal:** no existe ideal propio $J$ con $I \subsetneq J \subsetneq R$.
- Todo ideal maximal es primo. En $\mathbb{Z}$ todos los ideales son principales: $(n) = n\mathbb{Z}$.

### Cocientes e isomorfía

$$I \ \text{primo} \iff R/I \ \text{es dominio}, \qquad I \ \text{maximal} \iff R/I \ \text{es cuerpo}$$

$$R/\ker\phi \cong \operatorname{Im}\phi, \qquad \mathbb{Z}/(n) \cong \mathbb{Z}_n, \qquad \mathbb{R}[x]/(x^2 + 1) \cong \mathbb{C}, \qquad \mathbb{Z}[x]/(x^2 + 1) \cong \mathbb{Z}[i]$$

### Divisibilidad: DIP, DFU y euclídeo

$$\text{euclídeo} \implies \text{DIP} \implies \text{DFU} \implies \text{dominio}$$

- **DIP:** todo ideal es principal (ejemplos: $\mathbb{Z}$, $\mathbb{K}[x]$).
- **DFU:** factorización única en irreducibles (ejemplo: $\mathbb{Z}[x]$).
- **Euclídeo:** existe norma $N$ con división con resto (ejemplos: $\mathbb{Z}$ con $|n|$, $\mathbb{Z}[i]$ con $a^2 + b^2$).
- Falla la unicidad en $\mathbb{Z}[\sqrt{-5}]$: $6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$.

### Polinomios y mcd

$$P = QD + R, \qquad \deg R < \deg D \qquad\qquad (x - c) \mid P(x) \iff P(c) = 0$$

En $\mathbb{K}[x]$ (con $\mathbb{K}$ cuerpo) el mcd sale del algoritmo de Euclides: el último resto no nulo. Un polinomio de grado $n$ tiene a lo más $n$ raíces.

### Eisenstein y raíces racionales

**Eisenstein.** Si un primo $p$ cumple $p \mid a_i$ para $i < n$, $p \nmid a_n$ y $p^2 \nmid a_0$, entonces $P$ es irreducible sobre $\mathbb{Q}$.

**Raíces racionales.** Si $p/q$ (reducida) es raíz de $P \in \mathbb{Z}[x]$, entonces $p \mid a_0$ y $q \mid a_n$.

---

## Ejercicios (50)

### Nivel 1 — Anillos, dominios y divisores de cero

1. ¿Es $\mathbb{Z}_9$ un dominio de integridad? Justifica.
2. Halla los divisores de cero de $\mathbb{Z}_{10}$.
3. Halla las unidades de $\mathbb{Z}_{12}$.
4. ¿Para qué valores de $n$ es $\mathbb{Z}_n$ un cuerpo?
5. ¿Cuántas unidades tiene $\mathbb{Z}_{15}$?
6. ¿Es $\mathbb{Z}_6$ un cuerpo?
7. En $\mathbb{Z}_8$, ¿es $4$ un divisor de cero?
8. ¿Es $\mathbb{Z}_7$ un dominio de integridad? ¿Y un cuerpo?

### Nivel 2 — Ideales

9. ¿Es $2\mathbb{Z}$ un ideal de $\mathbb{Z}$?
10. Halla todos los ideales de $\mathbb{Z}_{12}$.
11. ¿Es $(5)$ un ideal primo de $\mathbb{Z}$?
12. ¿Es $(6)$ un ideal primo de $\mathbb{Z}$?
13. ¿Es $(x)$ un ideal primo de $\mathbb{Z}[x]$?
14. ¿Es $(2)$ un ideal maximal de $\mathbb{Z}[x]$?
15. Halla los ideales maximales de $\mathbb{Z}_6$.
16. ¿Es $(x)$ maximal en $\mathbb{Q}[x]$?
17. ¿Es $(2, x)$ maximal en $\mathbb{Z}[x]$?

### Nivel 3 — Cocientes, homomorfismos y primalidad

18. Describe el anillo $\mathbb{Z}/(6)$.
19. Halla el núcleo de $\phi: \mathbb{Z} \to \mathbb{Z}_5$, $\phi(n) = n \bmod 5$.
20. Halla el núcleo de $\phi: \mathbb{Z}[x] \to \mathbb{Z}$, $\phi(P) = P(0)$.
21. Describe $\mathbb{Z}[x]/(x^2 + 1)$.
22. ¿Es $\mathbb{R}[x]/(x^2 + 1)$ un cuerpo?
23. Si $R/I$ es un cuerpo, entonces $I$ es …
24. Si $R/I$ es un dominio, entonces $I$ es …
25. ¿Es $(x^2 - 1)$ un ideal primo de $\mathbb{R}[x]$?
26. ¿Es $(x^2 + 1)$ un ideal primo de $\mathbb{R}[x]$?

### Nivel 4 — DIP, DFU y euclídeos

27. ¿Es $\mathbb{Z}$ un DIP?
28. ¿Es $\mathbb{Z}[x]$ un DIP?
29. ¿Es $\mathbb{Q}[x]$ un DIP?
30. ¿Es todo DIP un DFU?
31. ¿Es $\mathbb{Z}[\sqrt{-5}]$ un DFU?
32. ¿Es $\mathbb{Z}[i]$ un dominio euclídeo?
33. Halla el mcd de $84$ y $132$.
34. Halla el mcd de $252$ y $198$.

### Nivel 5 — Polinomios y mcd

35. Halla el mcd de $x^3 - 1$ y $x^2 - 1$ en $\mathbb{Q}[x]$.
36. Halla el mcd de $x^2 - 1$ y $x^2 - 2x + 1$.
37. Halla el mcd de $x^3 - x$ y $x^2 - 1$.
38. Halla el mcd de $x^2 - 3x + 2$ y $x^2 - 4x + 3$.
39. Factoriza $x^4 - 1$ sobre $\mathbb{R}$.
40. Factoriza $x^3 - 1$ sobre $\mathbb{C}$.
41. Resuelve $x^2 + 16 = 0$ sobre $\mathbb{C}$.
42. ¿Cuántas raíces reales tiene $x^4 + 1$?

### Nivel 6 — Eisenstein y raíces racionales

43. Aplica Eisenstein a $x^3 - 2$ sobre $\mathbb{Q}$.
44. Aplica Eisenstein a $x^4 + 10x + 5$ sobre $\mathbb{Q}$.
45. Aplica Eisenstein a $x^3 + 3x + 3$ sobre $\mathbb{Q}$.
46. ¿Es irreducible $x^3 + x + 1$ sobre $\mathbb{Q}$?
47. Lista los candidatos a raíces racionales de $2x^3 + x^2 - 7x - 6$.
48. Halla una raíz racional de $x^3 - 6x^2 + 11x - 6$.
49. Factoriza $2x^3 + x^2 - 7x - 6$ sobre $\mathbb{Q}$.
50. Halla el mcd de $x^2 - 4x + 3$ y $x^2 - 5x + 6$.

---

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> No: $3 \cdot 3 = 0$</div>
<div class="r"><b>02</b> $2, 4, 5, 6, 8$</div>
<div class="r"><b>03</b> $1, 5, 7, 11$</div>
<div class="r"><b>04</b> $n$ primo</div>
<div class="r"><b>05</b> $8$</div>
<div class="r"><b>06</b> No ($6$ no es primo)</div>
<div class="r"><b>07</b> Sí: $4 \cdot 2 = 0$</div>
<div class="r"><b>08</b> Sí, y es cuerpo</div>
<div class="r"><b>09</b> Sí</div>
<div class="r"><b>10</b> $(0), (1), (2), (3), (4), (6)$</div>
<div class="r"><b>11</b> Sí, y maximal</div>
<div class="r"><b>12</b> No: $2 \cdot 3 \in (6)$ pero $2, 3 \notin (6)$</div>
<div class="r"><b>13</b> Sí: $\mathbb{Z}[x]/(x) \cong \mathbb{Z}$</div>
<div class="r"><b>14</b> No: $\mathbb{Z}_2[x]$ no es cuerpo (sí es primo)</div>
<div class="r"><b>15</b> $(2)$ y $(3)$</div>
<div class="r"><b>16</b> Sí: $\mathbb{Q}[x]/(x) \cong \mathbb{Q}$</div>
<div class="r"><b>17</b> Sí: $\mathbb{Z}[x]/(2, x) \cong \mathbb{Z}_2$</div>
<div class="r"><b>18</b> $\mathbb{Z}_6$, no es dominio</div>
<div class="r"><b>19</b> $5\mathbb{Z}$</div>
<div class="r"><b>20</b> $(x)$</div>
<div class="r"><b>21</b> $\mathbb{Z}[i]$</div>
<div class="r"><b>22</b> Sí: $\cong \mathbb{C}$</div>
<div class="r"><b>23</b> maximal</div>
<div class="r"><b>24</b> primo</div>
<div class="r"><b>25</b> No: $x^2 - 1 = (x - 1)(x + 1)$</div>
<div class="r"><b>26</b> Sí, es irreducible</div>
<div class="r"><b>27</b> Sí</div>
<div class="r"><b>28</b> No: $(2, x)$ no es principal</div>
<div class="r"><b>29</b> Sí, es euclídeo</div>
<div class="r"><b>30</b> Sí</div>
<div class="r"><b>31</b> No</div>
<div class="r"><b>32</b> Sí, con norma $a^2 + b^2$</div>
<div class="r"><b>33</b> $12$</div>
<div class="r"><b>34</b> $18$</div>
<div class="r"><b>35</b> $x - 1$</div>
<div class="r"><b>36</b> $x - 1$</div>
<div class="r"><b>37</b> $x^2 - 1$</div>
<div class="r"><b>38</b> $x - 1$</div>
<div class="r"><b>39</b> $(x - 1)(x + 1)(x^2 + 1)$</div>
<div class="r"><b>40</b> $(x - 1)(x - \omega)(x - \omega^2)$, $\omega = e^{2\pi i/3}$</div>
<div class="r"><b>41</b> $x = \pm 4i$</div>
<div class="r"><b>42</b> $0$</div>
<div class="r"><b>43</b> Irreducible ($p = 2$)</div>
<div class="r"><b>44</b> Irreducible ($p = 5$)</div>
<div class="r"><b>45</b> Irreducible ($p = 3$)</div>
<div class="r"><b>46</b> Sí, irreducible</div>
<div class="r"><b>47</b> $\pm 1, \pm 2, \pm 3, \pm 6, \pm \tfrac{1}{2}, \pm \tfrac{3}{2}$</div>
<div class="r"><b>48</b> $x = 1$</div>
<div class="r"><b>49</b> $(x + 1)(x - 2)(2x + 3)$</div>
<div class="r"><b>50</b> $x - 3$</div>
</div>
