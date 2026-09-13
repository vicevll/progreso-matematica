# Álgebra homológica · ejercicios y formulario

Compendio de trabajo sobre complejos, homología, resoluciones y funtores derivados sobre un anillo $R$ (pensado para $R = \mathbb{Z}$). Cada resultado del formulario se aplica directamente en el solucionario.

## Formulario

### Sucesiones exactas

Exactitud en un tramo significa igualdad imagen-núcleo:

$$\cdots \to A \xrightarrow{f} B \xrightarrow{g} C \to \cdots, \qquad \text{Im}\,f = \ker g$$

$$0 \to A \xrightarrow{f} B \text{ exacta} \iff f \text{ inyectiva}$$

$$B \xrightarrow{g} C \to 0 \text{ exacta} \iff g \text{ sobreyectiva}$$

$$0 \to A \to B \to C \to 0 \text{ corta} \implies C \cong B/A$$

### Complejos y homología

Un complejo cumple $\partial_n \circ \partial_{n+1} = 0$ y su homología mide el fallo de exactitud:

$$H_n = \frac{\ker \partial_n}{\text{Im}\,\partial_{n+1}}$$

- **Ciclos:** $\ker \partial_n$. **Fronteras:** $\text{Im}\,\partial_{n+1}$.
- $H_n = 0$ para todo $n$ $\iff$ el complejo es acíclico (exacto en todo grado).
- **Característica de Euler:** $\chi = \sum_i (-1)^i \dim H_i = \sum_i (-1)^i b_i$.

Homología estándar:

| Espacio | $H_0$ | $H_1$ | $H_2$ |
|---|---|---|---|
| $S^0$ | $\mathbb{Z}^2$ | $0$ | $0$ |
| $S^1$ | $\mathbb{Z}$ | $\mathbb{Z}$ | $0$ |
| $S^2$ | $\mathbb{Z}$ | $0$ | $\mathbb{Z}$ |
| $T^2$ | $\mathbb{Z}$ | $\mathbb{Z}^2$ | $\mathbb{Z}$ |

### Resoluciones

**Proyectiva** de $M$: sucesión exacta con $P_i$ proyectivos,
$$\cdots \to P_2 \to P_1 \to P_0 \to M \to 0$$

**Inyectiva** de $M$: sucesión exacta con $I^i$ inyectivos,
$$0 \to M \to I^0 \to I^1 \to I^2 \to \cdots$$

Modelos sobre $R = \mathbb{Z}$:

$$\text{Resolución proyectiva de } \mathbb{Z}/n: \quad \cdots \to \mathbb{Z} \xrightarrow{n} \mathbb{Z} \xrightarrow{n} \mathbb{Z} \to \mathbb{Z}/n \to 0$$

$$\text{Resolución inyectiva de } \mathbb{Z}: \quad 0 \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{Q}/\mathbb{Z} \to 0$$

Sobre un DIP, un módulo es proyectivo $\iff$ es libre; y plano $\iff$ sin torsión.

### Tor

Derivados del producto tensorial mediante una resolución proyectiva $P_\bullet \to A$:
$$\text{Tor}_n^R(A, B) = H_n(P_\bullet \otimes_R B), \qquad \text{Tor}_0^R(A, B) = A \otimes_R B$$

Propiedades:

1. $\text{Tor}_n^R(A, B) \cong \text{Tor}_n^R(B, A)$ (simetría).
2. $A$ es plano $\iff$ $\text{Tor}_n^R(A, B) = 0$ para $n \geq 1$ y todo $B$.
3. $P$ proyectivo $\Rightarrow$ $\text{Tor}_n^R(P, B) = 0$ para $n \geq 1$.
4. Sobre un DIP: $\text{Tor}_1^R(\mathbb{Z}/m, \mathbb{Z}/n) = \mathbb{Z}/\gcd(m,n)$, y $\text{Tor}_n = 0$ para $n \geq 2$.

### Ext

Derivados de $\text{Hom}$ mediante una resolución proyectiva $P_\bullet \to A$:
$$\text{Ext}^n_R(A, B) = H^n(\text{Hom}_R(P_\bullet, B)), \qquad \text{Ext}^0_R(A, B) = \text{Hom}_R(A, B)$$

Propiedades:

1. $P$ proyectivo $\Rightarrow$ $\text{Ext}^n_R(P, B) = 0$ para $n \geq 1$.
2. $\text{Ext}^1_R(A, B)$ clasifica las sucesiones $0 \to B \to E \to A \to 0$ salvo equivalencia.
3. Sobre un DIP: $\text{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/n, \mathbb{Z}) = \mathbb{Z}/n$ y $\text{Ext}^n = 0$ para $n \geq 2$.

### Lemas de diagramas

- **Lema de la serpiente:** de un diagrama conmutativo con filas exactas sale una sucesión exacta larga
$$\ker f_1 \to \ker f_2 \to \ker f_3 \xrightarrow{\delta} \text{coker}\,f_1 \to \text{coker}\,f_2 \to \text{coker}\,f_3$$
donde $\delta$ es el **morfismo de conexión**, construido persiguiendo el diagrama.
- **Lema de los cinco:** si cuatro de cinco morfismos verticales son isomorfismos, el quinto también.
- **Lema del zig-zag:** generaliza la persecución de elementos para demostrar exactitud de sucesiones largas.

### Cohomología y coeficientes universales

Cohomología: índices crecientes y diferenciales $d^n$ que suben,
$$H^n = \frac{\ker d^n}{\text{Im}\,d^{n-1}}, \qquad H^n(\text{Hom}_R(P_\bullet, B)) = \text{Ext}^n_R(A, B)$$

**Teorema de los coeficientes universales:**
$$0 \to H_n(X) \otimes G \to H_n(X; G) \to \text{Tor}_1(H_{n-1}(X), G) \to 0$$

## Ejercicios (50)

### Bloque A · exactitud (1–10)

1. ¿Es exacta $0 \to \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \to \mathbb{Z}/2 \to 0$?
2. ¿Es exacta $0 \to \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \xrightarrow{\bmod 3} \mathbb{Z}/3 \to 0$?
3. ¿Es exacta $0 \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{Q}/\mathbb{Z} \to 0$?
4. ¿Es exacta $\mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \to 0$?
5. ¿A qué equivale que $0 \to A \xrightarrow{f} B$ sea exacta?
6. ¿A qué equivale que $B \xrightarrow{g} C \to 0$ sea exacta?
7. En una sucesión corta $0 \to A \to B \to C \to 0$, ¿qué describe $C$?
8. ¿Es exacta $0 \to \mathbb{Z}/2 \xrightarrow{\times 2} \mathbb{Z}/4 \to \mathbb{Z}/2 \to 0$?
9. ¿Es exacta $0 \to \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \xrightarrow{\times 3} \mathbb{Z} \to 0$?
10. Si $0 \to A \xrightarrow{f} B \xrightarrow{g} C \to 0$ es exacta, ¿qué es $\text{Im}\,f$?

### Bloque B · cálculo de $H_n$ (11–22)

11. Calcula $H_0$ de $0 \to \mathbb{Z} \xrightarrow{0} \mathbb{Z} \to 0$.
12. Calcula $H_1$ de $0 \to \mathbb{Z} \xrightarrow{0} \mathbb{Z} \to 0$.
13. Calcula $H_0$ de $0 \to \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \to 0$.
14. Calcula $H_1$ de $0 \to \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \to 0$.
15. Calcula $H_0$ y $H_1$ de $0 \to \mathbb{Z} \xrightarrow{\times 3} \mathbb{Z} \to 0$.
16. Da $H_0, H_1, H_2$ del círculo $S^1$.
17. Da $H_0, H_1, H_2$ de la esfera $S^2$.
18. Da $H_0, H_1, H_2$ del toro $T^2$.
19. Calcula $H_0$ de $S^0$ (dos puntos).
20. Calcula la característica de Euler de $S^2$.
21. Calcula la característica de Euler de $T^2$.
22. Da $H_0, H_1, H_2$ del complejo $0 \to \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \xrightarrow{0} \mathbb{Z} \to 0$.

### Bloque C · resoluciones (23–32)

23. Escribe una resolución proyectiva de $\mathbb{Z}/2$ sobre $\mathbb{Z}$.
24. Escribe una resolución proyectiva de $\mathbb{Z}/n$ sobre $\mathbb{Z}$.
25. Escribe una resolución proyectiva de $\mathbb{Z}$ sobre $\mathbb{Z}$.
26. Escribe una resolución proyectiva de un módulo libre $M$.
27. Escribe una resolución inyectiva de $\mathbb{Z}$ sobre $\mathbb{Z}$.
28. ¿Cuál es la dimensión proyectiva de $\mathbb{Z}/2$ sobre $\mathbb{Z}$?
29. ¿Bajo qué condición $\text{Tor}_n^R(A, B) = 0$ para todo $n \geq 1$?
30. ¿Cuál es el valor de $\text{Tor}_0^R(A, B)$?
31. ¿Cuál es el valor de $\text{Ext}^0_R(A, B)$?
32. ¿Es $\mathbb{Z}$ proyectivo como $\mathbb{Z}$-módulo?

### Bloque D · Tor (33–40)

33. Calcula $\text{Tor}_1^{\mathbb{Z}}(\mathbb{Z}/2, \mathbb{Z}/2)$.
34. Calcula $\text{Tor}_1^{\mathbb{Z}}(\mathbb{Z}/3, \mathbb{Z}/3)$.
35. Calcula $\text{Tor}_1^{\mathbb{Z}}(\mathbb{Z}/2, \mathbb{Z}/3)$.
36. Calcula $\text{Tor}_1^{\mathbb{Z}}(\mathbb{Z}/4, \mathbb{Z}/6)$.
37. Da la fórmula general de $\text{Tor}_1^{\mathbb{Z}}(\mathbb{Z}/m, \mathbb{Z}/n)$.
38. Calcula $\text{Tor}_1^{\mathbb{Z}}(\mathbb{Z}^k, B)$.
39. Calcula $\text{Tor}_1^{\mathbb{Z}}(\mathbb{Q}/\mathbb{Z}, \mathbb{Z}/n)$.
40. Calcula $\text{Tor}_2^{\mathbb{Z}}(\mathbb{Z}/2, \mathbb{Z}/2)$.

### Bloque E · Ext (41–46)

41. Calcula $\text{Ext}^1_{\mathbb{Z}}(\mathbb{Z}, \mathbb{Z})$.
42. Calcula $\text{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/2, \mathbb{Z})$.
43. Da la fórmula general de $\text{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/n, \mathbb{Z})$.
44. Calcula $\text{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/2, \mathbb{Z}/2)$.
45. Calcula $\text{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/2 \oplus \mathbb{Z}/3, \mathbb{Z})$.
46. Calcula $\text{Ext}^2_{\mathbb{Z}}(\mathbb{Z}/2, \mathbb{Z})$.

### Bloque F · lemas de diagramas (47–50)

47. Enuncia el lema de los cinco.
48. ¿Qué produce el lema de la serpiente a partir de un diagrama con filas exactas?
49. ¿Qué clasifica $\text{Ext}^1_R(A, B)$?
50. Expresa la característica de Euler en términos de los números de Betti.

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $Sí$</div>
<div class="r"><b>02</b> $No$</div>
<div class="r"><b>03</b> $Sí$</div>
<div class="r"><b>04</b> $No$</div>
<div class="r"><b>05</b> $f$ inyectiva</div>
<div class="r"><b>06</b> $g$ sobreyectiva</div>
<div class="r"><b>07</b> $C \cong B/A$</div>
<div class="r"><b>08</b> $Sí$</div>
<div class="r"><b>09</b> $No$</div>
<div class="r"><b>10</b> $\text{Im}\,f = \ker g$</div>
<div class="r"><b>11</b> $\mathbb{Z}$</div>
<div class="r"><b>12</b> $\mathbb{Z}$</div>
<div class="r"><b>13</b> $\mathbb{Z}/2$</div>
<div class="r"><b>14</b> $0$</div>
<div class="r"><b>15</b> $\mathbb{Z}/3,\ 0$</div>
<div class="r"><b>16</b> $\mathbb{Z},\ \mathbb{Z},\ 0$</div>
<div class="r"><b>17</b> $\mathbb{Z},\ 0,\ \mathbb{Z}$</div>
<div class="r"><b>18</b> $\mathbb{Z},\ \mathbb{Z}^2,\ \mathbb{Z}$</div>
<div class="r"><b>19</b> $\mathbb{Z}^2$</div>
<div class="r"><b>20</b> $2$</div>
<div class="r"><b>21</b> $0$</div>
<div class="r"><b>22</b> $\mathbb{Z},\ \mathbb{Z}/2,\ 0$</div>
<div class="r"><b>23</b> $\cdots \to \mathbb{Z} \xrightarrow{2} \mathbb{Z} \to \mathbb{Z}/2 \to 0$</div>
<div class="r"><b>24</b> $\cdots \to \mathbb{Z} \xrightarrow{n} \mathbb{Z} \to \mathbb{Z}/n \to 0$</div>
<div class="r"><b>25</b> $0 \to \mathbb{Z} \xrightarrow{\text{id}} \mathbb{Z} \to 0$</div>
<div class="r"><b>26</b> $0 \to M \xrightarrow{\text{id}} M \to 0$</div>
<div class="r"><b>27</b> $0 \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{Q}/\mathbb{Z} \to 0$</div>
<div class="r"><b>28</b> infinita</div>
<div class="r"><b>29</b> $A$ plano</div>
<div class="r"><b>30</b> $A \otimes_R B$</div>
<div class="r"><b>31</b> $\text{Hom}_R(A, B)$</div>
<div class="r"><b>32</b> $Sí$</div>
<div class="r"><b>33</b> $\mathbb{Z}/2$</div>
<div class="r"><b>34</b> $\mathbb{Z}/3$</div>
<div class="r"><b>35</b> $0$</div>
<div class="r"><b>36</b> $\mathbb{Z}/2$</div>
<div class="r"><b>37</b> $\mathbb{Z}/\gcd(m, n)$</div>
<div class="r"><b>38</b> $0$</div>
<div class="r"><b>39</b> $\mathbb{Z}/n$</div>
<div class="r"><b>40</b> $0$</div>
<div class="r"><b>41</b> $0$</div>
<div class="r"><b>42</b> $\mathbb{Z}/2$</div>
<div class="r"><b>43</b> $\mathbb{Z}/n$</div>
<div class="r"><b>44</b> $\mathbb{Z}/2$</div>
<div class="r"><b>45</b> $\mathbb{Z}/6$</div>
<div class="r"><b>46</b> $0$</div>
<div class="r"><b>47</b> cuatro isos $\Rightarrow$ el quinto es iso</div>
<div class="r"><b>48</b> una sucesión exacta larga</div>
<div class="r"><b>49</b> extensiones $0 \to B \to E \to A \to 0$</div>
<div class="r"><b>50</b> $\chi = \sum_i (-1)^i b_i$</div>
</div>
