# Teoría de cuerpos y Galois · Ejercicios

## Formulario

### Grados y torres

- $[K:F]=\dim_F K$ es el grado de la extensión.
- Torre: $[K:F]=[K:E]\cdot[E:F]$ para $F\subseteq E\subseteq K$.
- Extensión simple algebraica: $[F(\alpha):F]=\deg m_\alpha$.
- Isomorfismo: $F(\alpha)\cong F[x]/(m_\alpha)$.
- Si $x^n-a$ es irreducible sobre $F$, entonces $[F(\sqrt[n]{a}):F]=n$.
- El polinomio mínimo de un elemento divide a todo polinomio que lo anula.

### Polinomio mínimo

- $m_\alpha$ es mónico, irreducible y de grado mínimo entre los que anulan a $\alpha$.
- $m_\alpha\mid p$ para todo $p\in F[x]$ con $p(\alpha)=0$.
- Los **conjugados** de $\alpha$ son las raíces de $m_\alpha$.
- $m_{\sqrt{2}}=x^2-2$; $m_{\sqrt[3]{2}}=x^3-2$; $m_i=x^2+1$.
- $m_{\sqrt{2}+\sqrt{3}}=x^4-10x^2+1$; $m_{i+\sqrt{2}}=x^4-2x^2+9$.
- Ciclotómico: $\Phi_p(x)=\dfrac{x^p-1}{x-1}$ y $\deg\Phi_p=p-1$.
- Eisenstein: si $p\mid a_i$ para $i<n$, $p\nmid a_n$, $p^2\nmid a_0$, entonces $f$ es irreducible sobre $\mathbb{Q}$.

### Cuerpo de descomposición

- Menor cuerpo que contiene a $F$ y a todas las raíces de $f$.
- Existe y es único salvo $F$-isomorfismo.
- $K/F$ normal si y solo si $K$ es cuerpo de descomposición de una familia de polinomios.
- Si $f$ es separable, $[K:F]=\left|\mathrm{Gal}(K/F)\right|$.
- Ejemplos: $x^3-2\mapsto 6$; $x^3-3x+1\mapsto 3$; $x^4-2\mapsto 8$.

### Grupo de Galois y correspondencia

- $\mathrm{Gal}(K/F)=\{\sigma\in\mathrm{Aut}(K) : \sigma|_F=\mathrm{id}\}$.
- $\left|\mathrm{Gal}(K/F)\right|\leq[K:F]$, con igualdad si y solo si $K/F$ es de Galois.
- Correspondencia: $E\leftrightarrow H=\mathrm{Gal}(K/E)$ y $H\leftrightarrow K^H$.
- $[K:E]=|H|$ y $[E:F]=[G:H]$.
- $E/F$ normal si y solo si $H\trianglelefteq G$; entonces $\mathrm{Gal}(E/F)\cong G/H$.
- $\mathrm{Gal}(\mathbb{Q}(\sqrt{2})/\mathbb{Q})\cong\mathbb{Z}_2$; $\mathrm{Gal}(\mathbb{Q}(\sqrt{2},\sqrt{3})/\mathbb{Q})\cong\mathbb{Z}_2\times\mathbb{Z}_2$.
- $\mathrm{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q})\cong(\mathbb{Z}/n\mathbb{Z})^{*}$.

### Solubilidad y construibilidad

- Grupo soluble: cadena normal con cocientes abelianos.
- **Galois:** $f$ soluble por radicales si y solo si $\mathrm{Gal}(K/F)$ es soluble.
- **Abel-Ruffini:** la ecuación general de grado $n\geq 5$ no es soluble por radicales, porque $S_n$ no es soluble.
- Construible con regla y compás: torre de extensiones cuadráticas; el grado es potencia de $2$.
- Polígono regular de $n$ lados: construible si y solo si $\varphi(n)=2^k$.
- Imposibles: duplicar el cubo, trisecar $60^\circ$, cuadrar el círculo.

## Ejercicios (50)

1. Calcula $[\mathbb{Q}(\sqrt{11}):\mathbb{Q}]$.
2. Calcula $[\mathbb{Q}(\sqrt[3]{7}):\mathbb{Q}]$.
3. Calcula $[\mathbb{Q}(\sqrt{2},\sqrt{7}):\mathbb{Q}]$.
4. Calcula $[\mathbb{Q}(\sqrt{2},\sqrt{3},\sqrt{6}):\mathbb{Q}]$.
5. Calcula $[\mathbb{Q}(\sqrt{5},i):\mathbb{Q}]$.
6. Halla el grado de $\mathbb{Q}(\sqrt[3]{2},\omega)$ sobre $\mathbb{Q}$, con $\omega=e^{2\pi i/3}$.
7. Halla $[\mathbb{Q}(\zeta_3):\mathbb{Q}]$.
8. Halla $[\mathbb{Q}(\zeta_7):\mathbb{Q}]$.
9. Polinomio mínimo de $\sqrt{3}$ sobre $\mathbb{Q}$.
10. Polinomio mínimo de $\sqrt[3]{2}$ sobre $\mathbb{Q}$.
11. Polinomio mínimo de $i$ sobre $\mathbb{Q}$.
12. Polinomio mínimo de $\sqrt{2}+\sqrt{3}$ sobre $\mathbb{Q}$.
13. Polinomio mínimo de $\sqrt{2}+\sqrt{5}$ sobre $\mathbb{Q}$.
14. Polinomio mínimo de $i\sqrt{3}$ sobre $\mathbb{Q}$.
15. Polinomio mínimo de $1+\sqrt{2}$ sobre $\mathbb{Q}$.
16. Calcula el grado de $\mathbb{Q}(\sqrt{2}+\sqrt{3})$ sobre $\mathbb{Q}$.
17. Calcula el grado de $\mathbb{Q}(\sqrt[3]{2}+\sqrt[3]{4})$ sobre $\mathbb{Q}$.
18. Calcula $[\mathbb{Q}(\sqrt{2},\sqrt[3]{2}):\mathbb{Q}]$.
19. Grupo de Galois de $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$.
20. Grupo de Galois de $\mathbb{Q}(\sqrt{2},\sqrt{3})/\mathbb{Q}$.
21. Grupo de Galois de $x^2+x+1$ sobre $\mathbb{Q}$.
22. Grupo de Galois de $x^3-2$ sobre $\mathbb{Q}$.
23. Grupo de Galois de $x^3-1$ sobre $\mathbb{Q}$.
24. Grupo de Galois de $x^4-2$ sobre $\mathbb{Q}$.
25. Grupo de Galois de $x^4+1$ sobre $\mathbb{Q}$.
26. Grupo de Galois de $x^4-5x^2+6$ sobre $\mathbb{Q}$.
27. Grupo de Galois de $x^4-4x^2+1$ sobre $\mathbb{Q}$.
28. Grupo de Galois de $x^3-3x+1$ sobre $\mathbb{Q}$.
29. Grupo de Galois de $x^2-5$ sobre $\mathbb{Q}$.
30. Grupo de Galois de $\mathbb{Q}(\zeta_5)/\mathbb{Q}$.
31. Grupo de Galois de $\mathbb{Q}(\zeta_7)/\mathbb{Q}$.
32. ¿Es normal $\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$?
33. ¿Es normal $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$?
34. ¿Es normal $\mathbb{Q}(\sqrt[3]{2},\omega)/\mathbb{Q}$?
35. ¿Cuántos subcuerpos tiene $\mathbb{Q}(\sqrt{2},\sqrt{3})$?
36. ¿Cuántos subgrupos tiene $\mathbb{Z}_2\times\mathbb{Z}_2$?
37. ¿Cuántos subcuerpos tiene $\mathbb{Q}(\zeta_5)$?
38. Grado del cuerpo de descomposición de $x^3-3x+1$ sobre $\mathbb{Q}$.
39. Grado del cuerpo de descomposición de $x^3-2$ sobre $\mathbb{Q}$.
40. Grado del cuerpo de descomposición de $x^4-2$ sobre $\mathbb{Q}$.
41. ¿Es soluble el grupo $S_3$?
42. ¿Es soluble el grupo $S_4$?
43. ¿Es soluble el grupo $S_5$?
44. ¿Es soluble el grupo $A_5$?
45. ¿Es soluble el grupo $\mathbb{Z}_2\times\mathbb{Z}_2$?
46. ¿Es soluble el grupo $D_4$?
47. ¿Es soluble por radicales $x^4-2$ sobre $\mathbb{Q}$?
48. ¿Es soluble por radicales $x^5-6x+3$ sobre $\mathbb{Q}$?
49. ¿Es construible $\sqrt{2+\sqrt{2}}$ con regla y compás?
50. ¿Es construible el heptágono regular con regla y compás?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $2$</div>
<div class="r"><b>02</b> $3$</div>
<div class="r"><b>03</b> $4$</div>
<div class="r"><b>04</b> $4$</div>
<div class="r"><b>05</b> $4$</div>
<div class="r"><b>06</b> $6$</div>
<div class="r"><b>07</b> $2$</div>
<div class="r"><b>08</b> $6$</div>
<div class="r"><b>09</b> $x^2-3$</div>
<div class="r"><b>10</b> $x^3-2$</div>
<div class="r"><b>11</b> $x^2+1$</div>
<div class="r"><b>12</b> $x^4-10x^2+1$</div>
<div class="r"><b>13</b> $x^4-14x^2+9$</div>
<div class="r"><b>14</b> $x^2+3$</div>
<div class="r"><b>15</b> $x^2-2x-1$</div>
<div class="r"><b>16</b> $4$</div>
<div class="r"><b>17</b> $3$</div>
<div class="r"><b>18</b> $6$</div>
<div class="r"><b>19</b> $\mathbb{Z}_2$</div>
<div class="r"><b>20</b> $\mathbb{Z}_2\times\mathbb{Z}_2$</div>
<div class="r"><b>21</b> $\mathbb{Z}_2$</div>
<div class="r"><b>22</b> $S_3$</div>
<div class="r"><b>23</b> $\mathbb{Z}_2$</div>
<div class="r"><b>24</b> $D_4$</div>
<div class="r"><b>25</b> $\mathbb{Z}_2\times\mathbb{Z}_2$</div>
<div class="r"><b>26</b> $\mathbb{Z}_2\times\mathbb{Z}_2$</div>
<div class="r"><b>27</b> $\mathbb{Z}_2\times\mathbb{Z}_2$</div>
<div class="r"><b>28</b> $\mathbb{Z}_3$</div>
<div class="r"><b>29</b> $\mathbb{Z}_2$</div>
<div class="r"><b>30</b> $\mathbb{Z}_4$</div>
<div class="r"><b>31</b> $\mathbb{Z}_6$</div>
<div class="r"><b>32</b> No</div>
<div class="r"><b>33</b> Sí</div>
<div class="r"><b>34</b> Sí</div>
<div class="r"><b>35</b> $5$</div>
<div class="r"><b>36</b> $5$</div>
<div class="r"><b>37</b> $3$</div>
<div class="r"><b>38</b> $3$</div>
<div class="r"><b>39</b> $6$</div>
<div class="r"><b>40</b> $8$</div>
<div class="r"><b>41</b> Sí</div>
<div class="r"><b>42</b> Sí</div>
<div class="r"><b>43</b> No</div>
<div class="r"><b>44</b> No</div>
<div class="r"><b>45</b> Sí</div>
<div class="r"><b>46</b> Sí</div>
<div class="r"><b>47</b> Sí</div>
<div class="r"><b>48</b> No</div>
<div class="r"><b>49</b> Sí</div>
<div class="r"><b>50</b> No</div>
</div>
