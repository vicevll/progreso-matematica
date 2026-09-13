# Teoría de grupos · 50 ejercicios
**Cuaderno de práctica · Álgebra superior · Univ 3–4**
*Subgrupos, homomorfismos, acciones y teoremas de Sylow.*

## Formulario
### Grupos y órdenes
- Un grupo $(G, *)$ tiene cerradura, asociatividad, identidad $e$ e inversos.
- Orden del grupo: $|G|$, número de elementos.
- Orden de un elemento: $o(g) = \min\{n > 0 : g^n = e\}$.
- $g^n = e \iff o(g) \mid n$.
- Subgrupo cíclico: $\langle g\rangle = \{e, g, g^2, \ldots, g^{o(g)-1}\}$.
- $|\mathbb{Z}_n| = n$, $|S_n| = n!$, $|A_n| = n!/2$, $|D_n| = 2n$.
- $\mathbb{Z}_m \times \mathbb{Z}_n \cong \mathbb{Z}_{mn}$ si y solo si $\gcd(m, n) = 1$.
- Número de generadores de $\mathbb{Z}_n$: $\varphi(n)$.

### Subgrupos y teorema de Lagrange
- Criterio de subgrupo: $H \neq \emptyset$ y $a, b \in H \Rightarrow a b^{-1} \in H$.
- Teorema de Lagrange: $|G| = |H| \cdot [G : H]$.
- Índice: $[G : H] = |G| / |H|$.
- $o(g) \mid |G|$ para todo $g \in G$.
- Orden primo $\Rightarrow$ grupo cíclico.
- En $\mathbb{Z}_n$ hay un subgrupo por cada divisor $d$ de $n$.
- $H$ de índice $2$ en $G$ $\Rightarrow H \trianglelefteq G$.

### Homomorfismos y cocientes
- Homomorfismo: $\phi(ab) = \phi(a)\phi(b)$.
- $\ker\phi \trianglelefteq G$ y $\operatorname{Im}\phi \leq H$.
- $\phi$ inyectiva $\iff \ker\phi = \{e\}$.
- Teorema de isomorfía: $G/\ker\phi \cong \operatorname{Im}\phi$.
- Normal: $N \trianglelefteq G \iff gNg^{-1} = N$ para todo $g$.
- En un grupo abeliano todo subgrupo es normal.
- $|G/N| = |G|/|N|$.
- Centro: $Z(G) = \{g : gx = xg \ \forall x\}$.

### Acciones de grupo
- Acción: homomorfismo $G \to \operatorname{Perm}(X)$.
- Órbita: $Gx = \{gx : g \in G\}$.
- Estabilizador: $G_x = \{g \in G : gx = x\}$.
- Órbita-estabilizador: $|Gx| = [G : G_x] = |G| / |G_x|$.
- Clase de conjugación: $|\operatorname{cl}(g)| = [G : C_G(g)]$.
- Fórmula de clases: $|G| = |Z(G)| + \sum_i [G : C_G(g_i)]$.
- Burnside: $\#\text{órbitas} = \dfrac{1}{|G|}\sum_{g \in G} |X^g|$, con $X^g$ los puntos fijos de $g$.

### Teoremas de Sylow
- Sea $|G| = p^m r$ con $p$ primo y $p \nmid r$; un Sylow $p$-subgrupo tiene orden $p^m$.
- Existencia: hay al menos un Sylow $p$-subgrupo.
- Conjugación: todos los Sylow $p$-subgrupos son conjugados.
- Conteo: $n_p \equiv 1 \pmod p$ y $n_p \mid r$.
- Además $n_p = [G : N_G(P)]$.
- $n_p = 1 \iff$ el Sylow $p$-subgrupo es normal.
- Cauchy: $p \mid |G| \Rightarrow$ existe un elemento de orden $p$.
- Un $p$-grupo finito tiene centro no trivial.

### Clasificación de grupos pequeños
- Orden $p$: solo $\mathbb{Z}_p$.
- Orden $p^2$: $\mathbb{Z}_{p^2}$ o $\mathbb{Z}_p \times \mathbb{Z}_p$ (siempre abelianos).
- Orden $4$: $\mathbb{Z}_4$ y $\mathbb{Z}_2 \times \mathbb{Z}_2$.
- Orden $6$: $\mathbb{Z}_6$ y $S_3$.
- Orden $8$: $\mathbb{Z}_8$, $\mathbb{Z}_4 \times \mathbb{Z}_2$, $\mathbb{Z}_2^3$, $D_4$, $Q_8$.
- Orden $9$: $\mathbb{Z}_9$ y $\mathbb{Z}_3 \times \mathbb{Z}_3$.
- Orden $pq$ con $p < q$ y $p \nmid (q - 1)$: solo el cíclico $\mathbb{Z}_{pq}$.

## Ejercicios (50)
### Nivel 1 — Órdenes y ejemplos
1. Halla el orden de $(1\,2\,3\,4\,5)$ en $S_5$.
2. Halla el orden de $(1\,2)(3\,4\,5)$ en $S_5$.
3. Halla el orden de $\bar{4}$ en $\mathbb{Z}_{10}$.
4. Halla el orden de $\bar{7}$ en $\mathbb{Z}_{18}$.
5. ¿Cuál es el orden de $D_6$, grupo de simetrías del hexágono?
6. ¿Cuál es el orden de $A_4$?
7. ¿Cuál es el orden de $GL_2(\mathbb{Z}_2)$?
8. ¿Es abeliano $S_3$?

### Nivel 2 — Subgrupos y Lagrange
9. ¿Tiene $\mathbb{Z}_{12}$ un subgrupo de orden $5$?
10. ¿Cuántos subgrupos tiene $\mathbb{Z}_6$?
11. Calcula el índice $[\mathbb{Z}_{15} : \langle 3\rangle]$.
12. Calcula el índice $[\mathbb{Z}_{24} : \langle 6\rangle]$.
13. Halla el orden de $\langle 2\rangle$ en $\mathbb{Z}_{16}$.
14. ¿Cuántos generadores tiene $\mathbb{Z}_{12}$?
15. ¿Puede un grupo de orden $21$ tener un subgrupo de orden $6$?
16. ¿Cuál es el orden de $\mathbb{Z}_2 \times \mathbb{Z}_2 \times \mathbb{Z}_2$?

### Nivel 3 — Homomorfismos y cocientes
17. Halla el núcleo de $\phi: \mathbb{Z} \to \mathbb{Z}_6$ con $\phi(n) = n \bmod 6$.
18. Halla la imagen del homomorfismo anterior.
19. Calcula $|\mathbb{Z}_{18} / \langle 6\rangle|$.
20. ¿Es $A_3$ normal en $S_3$?
21. ¿Cuál es el orden del centro de $D_4$?
22. ¿Cuál es el orden del centro de $Q_8$?
23. ¿Es cíclico $\mathbb{Z}_2 \times \mathbb{Z}_2$?
24. Identifica $S_3 / \langle(1\,2\,3)\rangle$.

### Nivel 4 — Acciones de grupo
25. ¿Cuál es el tamaño de la órbita de un vértice bajo $D_4$?
26. ¿Cuál es el tamaño del estabilizador de un vértice bajo $D_4$?
27. ¿Cuántas clases de conjugación tiene $S_3$?
28. Cuenta las coloraciones de un triángulo con $3$ colores salvo rotación.
29. Cuenta las coloraciones de un cuadrado con $2$ colores salvo rotación.
30. Cuenta los collares de $4$ cuentas con $2$ colores salvo rotación y reflexión.
31. Si $|G| = 12$ y $|G_x| = 3$, ¿cuánto vale $|Gx|$?
32. Si $|G| = 8$ y el estabilizador es trivial, ¿cuánto mide la órbita?

### Nivel 5 — Sylow
33. ¿Qué valores puede tomar $n_2$ si $|G| = 24$?
34. Halla $n_3$ si $|G| = 45$.
35. Halla $n_5$ si $|G| = 20$.
36. ¿Qué valores puede tomar $n_3$ si $|G| = 12$?
37. Halla $n_7$ si $|G| = 21$.
38. ¿Cómo es todo grupo de orden $15$?
39. ¿Es trivial el centro de un grupo de orden $8$?
40. ¿Es abeliano todo grupo de orden $p^2$?
41. ¿Cuántos Sylow $5$-subgrupos tiene un grupo de orden $25$?
42. ¿Qué valores puede tomar $n_5$ si $|G| = 30$?

### Nivel 6 — Clasificación
43. ¿Cuántos grupos de orden $4$ hay salvo isomorfismo?
44. ¿Cuántos grupos de orden $6$ hay salvo isomorfismo?
45. ¿Cuántos grupos de orden $9$ hay salvo isomorfismo?
46. ¿Cuántos grupos de orden $8$ hay salvo isomorfismo?
47. ¿Cuántos grupos de orden primo $p$ hay?
48. ¿Cuántos grupos de orden $p^2$ hay?
49. ¿Es cíclico $\mathbb{Z}_2 \times \mathbb{Z}_3$?
50. ¿Cómo es un grupo de orden $pq$ con $p < q$ y $p \nmid (q - 1)$?

## Solucionario · resultados
<div class="results">
<div class="r"><b>01</b> $5$</div>
<div class="r"><b>02</b> $6$</div>
<div class="r"><b>03</b> $5$</div>
<div class="r"><b>04</b> $18$</div>
<div class="r"><b>05</b> $12$</div>
<div class="r"><b>06</b> $12$</div>
<div class="r"><b>07</b> $6$</div>
<div class="r"><b>08</b> No</div>
<div class="r"><b>09</b> No ($5 \nmid 12$)</div>
<div class="r"><b>10</b> $4$</div>
<div class="r"><b>11</b> $3$</div>
<div class="r"><b>12</b> $6$</div>
<div class="r"><b>13</b> $8$</div>
<div class="r"><b>14</b> $4$</div>
<div class="r"><b>15</b> No ($6 \nmid 21$)</div>
<div class="r"><b>16</b> $8$</div>
<div class="r"><b>17</b> $6\mathbb{Z}$</div>
<div class="r"><b>18</b> $\mathbb{Z}_6$</div>
<div class="r"><b>19</b> $3$</div>
<div class="r"><b>20</b> Sí</div>
<div class="r"><b>21</b> $2$</div>
<div class="r"><b>22</b> $2$</div>
<div class="r"><b>23</b> No</div>
<div class="r"><b>24</b> $\mathbb{Z}_2$</div>
<div class="r"><b>25</b> $4$</div>
<div class="r"><b>26</b> $2$</div>
<div class="r"><b>27</b> $3$</div>
<div class="r"><b>28</b> $11$</div>
<div class="r"><b>29</b> $6$</div>
<div class="r"><b>30</b> $6$</div>
<div class="r"><b>31</b> $4$</div>
<div class="r"><b>32</b> $8$</div>
<div class="r"><b>33</b> $1$ o $3$</div>
<div class="r"><b>34</b> $1$</div>
<div class="r"><b>35</b> $1$</div>
<div class="r"><b>36</b> $1$ o $4$</div>
<div class="r"><b>37</b> $1$</div>
<div class="r"><b>38</b> Cíclico ($\mathbb{Z}_{15}$)</div>
<div class="r"><b>39</b> No, $|Z(G)| > 1$</div>
<div class="r"><b>40</b> Sí</div>
<div class="r"><b>41</b> $1$</div>
<div class="r"><b>42</b> $1$ o $6$</div>
<div class="r"><b>43</b> $2$</div>
<div class="r"><b>44</b> $2$</div>
<div class="r"><b>45</b> $2$</div>
<div class="r"><b>46</b> $5$</div>
<div class="r"><b>47</b> $1$</div>
<div class="r"><b>48</b> $2$</div>
<div class="r"><b>49</b> Sí</div>
<div class="r"><b>50</b> Cíclico</div>
</div>
