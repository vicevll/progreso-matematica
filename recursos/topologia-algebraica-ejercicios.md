# Topología algebraica · ejercicios y formulario

Compendio de trabajo sobre homotopía, grupo fundamental, espacios cubrientes, homología y complejos CW. Cada resultado del formulario se aplica directamente en el solucionario. Se asume que los espacios son conexos por caminos y razonables (localmente simplemente conexos) cuando se habla de cubiertas.

## Formulario

### Homotopía y equivalencias

$$f \simeq g \iff \exists H: X \times [0,1] \to Y \text{ continua},\ H(\cdot,0)=f,\ H(\cdot,1)=g$$

$$X \simeq Y \iff \exists f: X \to Y,\ g: Y \to X,\quad g\circ f \simeq \mathrm{id}_X,\quad f\circ g \simeq \mathrm{id}_Y$$

- **Contráctil:** equivalente a un punto ($\mathbb{R}^n$, $D^n$, intervalos).
- Invariantes homotópicos: $\pi_1$, $H_n$, $\chi$, números de Betti.

### Grupo fundamental

$$\pi_1(X,x_0) = \{\text{lazos en } x_0\} / \text{homotopía relativa a } \{0,1\}, \qquad [\alpha][\beta] = [\alpha * \beta]$$

Functorialidad: $f: X \to Y$ induce $f_*: \pi_1(X,x_0) \to \pi_1(Y,f(x_0))$ con $(g\circ f)_* = g_* \circ f_*$.

$$X \text{ conexo por caminos} \implies \pi_1(X,x_0) \cong \pi_1(X,x_1)$$

$$\pi_1(X \times Y) \cong \pi_1(X) \times \pi_1(Y)$$

$$A \text{ retracto de deformación de } X \implies \pi_1(A) \cong \pi_1(X)$$

$$X,M \text{ simplemente conexos} \implies \pi_1(X \vee M) \cong \pi_1(X)$$

### $\pi_1$ de espacios típicos

| Espacio | $\pi_1$ | $H_1$ |
|---|---|---|
| $S^1$ | $\mathbb{Z}$ | $\mathbb{Z}$ |
| $S^n$, $n \ge 2$ | $0$ | $0$ |
| $D^2$ | $0$ | $0$ |
| $T^2$ | $\mathbb{Z}^2$ | $\mathbb{Z}^2$ |
| $S^1 \vee S^1$ | $F_2$ | $\mathbb{Z}^2$ |
| $\mathbb{RP}^2$ | $\mathbb{Z}/2$ | $\mathbb{Z}/2$ |
| botella de Klein | $\langle a,b \mid aba^{-1}b\rangle$ | $\mathbb{Z} \oplus \mathbb{Z}/2$ |
| género $g$ | $\langle a_i,b_i \mid \prod_{i=1}^{g}[a_i,b_i]\rangle$ | $\mathbb{Z}^{2g}$ |

### Teorema de Van Kampen

$$X = U \cup V,\quad U, V, U \cap V \text{ conexos por caminos}, \quad x_0 \in U \cap V$$

$$\pi_1(X,x_0) \cong \pi_1(U,x_0) *_{\pi_1(U \cap V, x_0)} \pi_1(V,x_0)$$

$$U \cap V \text{ simplemente conexo} \implies \pi_1(X) \cong \pi_1(U) * \pi_1(V)$$

$$V \text{ simplemente conexo} \implies \pi_1(X) \cong \pi_1(U) / \langle\!\langle i_*\pi_1(U \cap V) \rangle\!\rangle$$

### Espacios cubrientes

$p: \tilde X \to X$ es cubierta si cada punto tiene una vecindad $U$ con $p^{-1}(U) = \bigsqcup_\alpha V_\alpha$ y $p|_{V_\alpha}: V_\alpha \to U$ homeomorfismo.

- **Levantamiento de caminos:** único fijado $\tilde x_0 \in p^{-1}(x_0)$.
- **Levantamiento de homotopías:** homotopías fijando extremos se levantan.
- **Correspondencia:** cubiertas conexas de $X$ $\longleftrightarrow$ subgrupos $H \le \pi_1(X,x_0)$.
- **Hojas:** $[\pi_1(X):H]$. **Normal:** $\iff H \trianglelefteq \pi_1(X)$.
- **Universal:** $H = 0$; es simplemente conexa y cubre a todas.

| $X$ | cubierta universal | $\pi_1(X)$ |
|---|---|---|
| $S^1$ | $\mathbb{R}$ | $\mathbb{Z}$ |
| $T^2$ | $\mathbb{R}^2$ | $\mathbb{Z}^2$ |
| $\mathbb{RP}^n$ | $S^n$ | $\mathbb{Z}/2$ ($n \ge 2$) |
| $S^1 \vee S^1$ | árbol de Cayley de $F_2$ | $F_2$ |
| botella de Klein | $\mathbb{R}^2$ | $\langle a,b \mid aba^{-1}b\rangle$ |

### Homología

$$H_n(X) = \frac{\ker \partial_n}{\mathrm{Im}\,\partial_{n+1}}, \qquad \partial_n \circ \partial_{n+1} = 0$$

$$H_0(X) \cong \mathbb{Z}^{\#\text{componentes}}, \qquad H_1(X) \cong \pi_1(X)^{\mathrm{ab}}$$

**Mayer-Vietoris** para $X = U \cup V$:

$$\cdots \to H_n(U \cap V) \to H_n(U) \oplus H_n(V) \to H_n(X) \to H_{n-1}(U \cap V) \to \cdots$$

Números de Betti: $b_n = \mathrm{rango}\,H_n(X)$.

| Espacio | $H_0$ | $H_1$ | $H_2$ |
|---|---|---|---|
| $S^1$ | $\mathbb{Z}$ | $\mathbb{Z}$ | $0$ |
| $S^2$ | $\mathbb{Z}$ | $0$ | $\mathbb{Z}$ |
| $T^2$ | $\mathbb{Z}$ | $\mathbb{Z}^2$ | $\mathbb{Z}$ |
| $\mathbb{RP}^2$ | $\mathbb{Z}$ | $\mathbb{Z}/2$ | $0$ |
| botella de Klein | $\mathbb{Z}$ | $\mathbb{Z} \oplus \mathbb{Z}/2$ | $0$ |
| género $g$ | $\mathbb{Z}$ | $\mathbb{Z}^{2g}$ | $\mathbb{Z}$ |

### Complejos CW y característica de Euler

$$\chi(X) = \sum_n (-1)^n c_n = \sum_n (-1)^n b_n$$

$$S^n:\ 1 \text{ celda de dimensión } 0 + 1 \text{ celda de dimensión } n \implies \chi = 1 + (-1)^n$$

$$\text{superficie de género } g:\ \chi = 2 - 2g; \qquad \mathbb{RP}^2:\ \chi = 1; \qquad \text{Klein}:\ \chi = 0$$

## Ejercicios (50)

### Bloque A · homotopía y grupo fundamental (1–10)

1. ¿Es contráctil $S^1$?
2. ¿Es contráctil $\mathbb{R}^2$?
3. ¿Es contráctil $S^2$?
4. Calcula $\pi_1(\mathbb{R}^2)$.
5. Calcula $\pi_1(S^1)$.
6. Calcula $\pi_1(S^n)$ para $n \ge 2$.
7. Calcula $\pi_1(S^1 \times S^1)$.
8. ¿Es simplemente conexo $S^1$?
9. ¿Es simplemente conexo $S^2$?
10. Calcula $\pi_1(D^2)$.

### Bloque B · superficies y Van Kampen (11–20)

11. Calcula $\pi_1(T^2)$.
12. Calcula $\pi_1(\mathbb{RP}^2)$.
13. Calcula $\pi_1(S^1 \vee S^1)$.
14. Usa Van Kampen para calcular $\pi_1(S^2)$.
15. Calcula $\pi_1(S^1 \vee S^2)$.
16. Da una presentación de $\pi_1$ de la botella de Klein.
17. Calcula $\pi_1$ del toro menos un punto.
18. Calcula $\pi_1(\mathbb{RP}^2)$ menos un punto.
19. Da una presentación de $\pi_1$ de la superficie de género $2$.
20. ¿Es abeliano $\pi_1(S^1 \vee S^1)$?

### Bloque C · espacios cubrientes (21–30)

21. ¿Cuál es la cubierta universal de $S^1$?
22. ¿Cuál es la cubierta universal de $T^2$?
23. ¿Cuál es la cubierta universal de $\mathbb{RP}^2$?
24. ¿Cuántas hojas tiene la cubierta $S^n \to \mathbb{RP}^n$?
25. ¿Qué grupo forman las transformaciones de cubierta de $\mathbb{R} \to S^1$?
26. ¿Qué subgrupos de $\mathbb{Z}$ corresponden a cubiertas conexas de $S^1$?
27. ¿Qué cubierta corresponde al subgrupo $H = 0$?
28. ¿Cuántas hojas tiene la cubierta $S^1 \to S^1$, $z \mapsto z^n$?
29. ¿Es normal la cubierta universal?
30. Si $\tilde X \to X$ es una cubierta con $\tilde X$ simplemente conexo, ¿qué es $\pi_1(X)$?

### Bloque D · homología (31–40)

31. Calcula $H_0(S^1)$.
32. Calcula $H_1(S^1)$.
33. Calcula $H_2(S^1)$.
34. Calcula $H_1(T^2)$.
35. Calcula $H_2(T^2)$.
36. Calcula $H_1(\mathbb{RP}^2)$.
37. Calcula $H_2(\mathbb{RP}^2)$.
38. Calcula $H_1(S^1 \vee S^1)$.
39. ¿Qué relación hay entre $H_1(X)$ y $\pi_1(X)$?
40. Da la homología de la botella de Klein.

### Bloque E · característica de Euler y CW (41–50)

41. Calcula $\chi(S^2)$.
42. Calcula $\chi(S^1)$.
43. Calcula $\chi(T^2)$.
44. Calcula $\chi(\mathbb{RP}^2)$.
45. Calcula $\chi$ de la botella de Klein.
46. Escribe $\chi$ en función de los números de celdas de un complejo CW finito.
47. Escribe $\chi$ en función de los números de Betti.
48. Da $\chi$ de la superficie orientable de género $g$.
49. Calcula $\chi$ del cubo.
50. Para el CW de $S^2$ con una $0$-celda y una $2$-celda, calcula $\chi$.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $No$</div>
<div class="r"><b>02</b> $Sí$</div>
<div class="r"><b>03</b> $No$</div>
<div class="r"><b>04</b> $0$</div>
<div class="r"><b>05</b> $\mathbb{Z}$</div>
<div class="r"><b>06</b> $0$</div>
<div class="r"><b>07</b> $\mathbb{Z}^2$</div>
<div class="r"><b>08</b> $No$</div>
<div class="r"><b>09</b> $Sí$</div>
<div class="r"><b>10</b> $0$</div>
<div class="r"><b>11</b> $\mathbb{Z}^2$</div>
<div class="r"><b>12</b> $\mathbb{Z}/2$</div>
<div class="r"><b>13</b> $F_2$</div>
<div class="r"><b>14</b> $0$</div>
<div class="r"><b>15</b> $\mathbb{Z}$</div>
<div class="r"><b>16</b> $\langle a,b \mid aba^{-1}b\rangle$</div>
<div class="r"><b>17</b> $F_2$</div>
<div class="r"><b>18</b> $\mathbb{Z}$</div>
<div class="r"><b>19</b> $\langle a_1,b_1,a_2,b_2 \mid [a_1,b_1][a_2,b_2]\rangle$</div>
<div class="r"><b>20</b> $No$</div>
<div class="r"><b>21</b> $\mathbb{R}$</div>
<div class="r"><b>22</b> $\mathbb{R}^2$</div>
<div class="r"><b>23</b> $S^2$</div>
<div class="r"><b>24</b> $2$</div>
<div class="r"><b>25</b> $\mathbb{Z}$</div>
<div class="r"><b>26</b> $n\mathbb{Z}$ con $n \ge 0$</div>
<div class="r"><b>27</b> la cubierta universal</div>
<div class="r"><b>28</b> $n$</div>
<div class="r"><b>29</b> $Sí$</div>
<div class="r"><b>30</b> el grupo de transformaciones de cubierta</div>
<div class="r"><b>31</b> $\mathbb{Z}$</div>
<div class="r"><b>32</b> $\mathbb{Z}$</div>
<div class="r"><b>33</b> $0$</div>
<div class="r"><b>34</b> $\mathbb{Z}^2$</div>
<div class="r"><b>35</b> $\mathbb{Z}$</div>
<div class="r"><b>36</b> $\mathbb{Z}/2$</div>
<div class="r"><b>37</b> $0$</div>
<div class="r"><b>38</b> $\mathbb{Z}^2$</div>
<div class="r"><b>39</b> $H_1 \cong \pi_1^{\mathrm{ab}}$</div>
<div class="r"><b>40</b> $\mathbb{Z},\ \mathbb{Z} \oplus \mathbb{Z}/2,\ 0$</div>
<div class="r"><b>41</b> $2$</div>
<div class="r"><b>42</b> $0$</div>
<div class="r"><b>43</b> $0$</div>
<div class="r"><b>44</b> $1$</div>
<div class="r"><b>45</b> $0$</div>
<div class="r"><b>46</b> $\sum_n (-1)^n c_n$</div>
<div class="r"><b>47</b> $\sum_n (-1)^n b_n$</div>
<div class="r"><b>48</b> $2 - 2g$</div>
<div class="r"><b>49</b> $2$</div>
<div class="r"><b>50</b> $1 - 0 + 1 = 2$</div>
</div>
