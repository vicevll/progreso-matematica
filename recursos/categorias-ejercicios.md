# Teoría de categorías — Formulario y ejercicios

## Formulario

### Categorías

- **Categoría** $\mathcal{C}$: objetos, hom-conjuntos $\text{Hom}_{\mathcal{C}}(A, B)$, composición asociativa $\circ$ e identidades $1_A$.
- **Leyes:**

$$h \circ (g \circ f) = (h \circ g) \circ f, \qquad f \circ 1_A = f = 1_B \circ f$$

- **Categoría dual** $\mathcal{C}^{op}$: mismos objetos y $\text{Hom}_{\mathcal{C}^{op}}(A, B) = \text{Hom}_{\mathcal{C}}(B, A)$.
- **Categorías concretas:** **Set**, **Grp**, **Vect**, **Top**, **Ab**, **R-Mod**, **Pos**.

$$$$

### Funtores

- **Covariante** $F: \mathcal{C} \to \mathcal{D}$:

$$F(g \circ f) = F(g) \circ F(f), \qquad F(1_A) = 1_{F(A)}$$

- **Contravariante** $F: \mathcal{C}^{op} \to \mathcal{D}$:

$$F(g \circ f) = F(f) \circ F(g)$$

- **Pleno:** todo morfismo entre imágenes proviene de un morfismo. **Fiel:** inyectivo sobre hom-conjuntos.
- Ejemplos: olvido $U: \mathbf{Grp} \to \mathbf{Set}$; dual $(-)^*: \mathbf{Vect} \to \mathbf{Vect}$; $\pi_1: \mathbf{Top} \to \mathbf{Grp}$; libre $\mathbf{Set} \to \mathbf{Grp}$.

### Transformaciones naturales

- **Transformación natural** $\eta: F \Rightarrow G$: morfismos $\eta_A: F(A) \to G(A)$ con

$$G(f) \circ \eta_A = \eta_B \circ F(f)$$

- **Isomorfismo natural:** cada $\eta_A$ es isomorfismo.
- Ejemplos: $\det: GL_n \Rightarrow (-)^*$; doble dualidad $\epsilon_V: V \to V^{**}$.
- Notación: $\text{Nat}(F, G)$ es el conjunto de transformaciones naturales $F \Rightarrow G$.

### Equivalencia de categorías

- $F: \mathcal{C} \to \mathcal{D}$ y $G: \mathcal{D} \to \mathcal{C}$ con

$$G \circ F \cong 1_{\mathcal{C}}, \qquad F \circ G \cong 1_{\mathcal{D}}$$

- Más débil que un isomorfismo de categorías; basta para trasladar teoremas.

### Límites y colímites

- **Producto:** $A \times B$ con $\pi_1, \pi_2$; en **Set**, producto cartesiano.
- **Coproducto:** $A \sqcup B$; en **Set**, unión disjunta; en **Ab**, suma directa.
- **Pullback:** límite de $A \xrightarrow{f} C \xleftarrow{g} B$; en **Set**, $\{(a, b) : f(a) = g(b)\}$.
- **Pushout:** dual del pullback; en **Set**, $(B \sqcup C)/\sim$.
- **Ecualizador:** límite de $f, g: A \rightrightarrows B$; **coecualizador**, su dual.
- **Propiedad universal:** para cada cono compatible existe un único morfismo al límite.

### Adjunciones

- **$F \dashv G$:**

$$\text{Hom}_{\mathcal{D}}(F(A), B) \cong \text{Hom}_{\mathcal{C}}(A, G(B))$$

- **Unidad** $\eta: 1 \Rightarrow G \circ F$ y **counidad** $\varepsilon: F \circ G \Rightarrow 1$, con identidades triangulares.
- Adjunto izquierdo preserva colímites; adjunto derecho preserva límites.
- Ejemplos: libre $\dashv$ olvido; producto $\dashv$ exponencial, $\text{Hom}(A \times B, C) \cong \text{Hom}(A, C^B)$; tensor $\dashv$ Hom, $\text{Hom}(A \otimes B, C) \cong \text{Hom}(A, \text{Hom}(B, C))$.

### Lema de Yoneda

$$\text{Nat}\big(\text{Hom}_{\mathcal{C}}(A, -),\, F\big) \cong F(A)$$

- **Versión contravariante:** $\text{Nat}(\text{Hom}_{\mathcal{C}}(-, A), F) \cong F(A)$.
- El encaje de Yoneda $A \mapsto \text{Hom}(A, -)$ es pleno y fiel.
- Un funtor representable determina su representante salvo isomorfismo único.
- Corolario: $\text{Nat}(\text{Hom}(A, -), \text{Hom}(B, -)) \cong \text{Hom}(B, A)$.

### Mónadas

- Endofuntor $T: \mathcal{C} \to \mathcal{C}$ con $\eta: 1 \Rightarrow T$ y $\mu: T^2 \Rightarrow T$.
- **Leyes:**

$$\mu \circ T\eta = 1_T = \mu \circ \eta T, \qquad \mu \circ T\mu = \mu \circ \mu T$$

- Ejemplos: Maybe $T(X) = X \cup \{\bot\}$; listas $T(X) = X^*$ con concatenación.

## Ejercicios (50)

### Categorías concretas

1. ¿Cuántos objetos tiene la categoría discreta sobre el conjunto $\{a, b, c\}$?
2. En un monoide visto como categoría, ¿cuántos objetos hay?
3. ¿Cuál es el objeto inicial de $\mathbf{Set}$?
4. ¿Cuál es el objeto terminal de $\mathbf{Set}$?
5. ¿Cuál es el objeto cero de $\mathbf{Grp}$?
6. En $\mathbf{Set}$, ¿cuál es el cardinal de $A \times B$?
7. En $\mathbf{Set}$, ¿cuál es el cardinal de $A \sqcup B$?
8. Si $\lvert A\rvert = 2$ y $\lvert B\rvert = 3$, ¿cuál es el cardinal de $A \times B$?
9. Con los mismos conjuntos, ¿cuál es el cardinal de $A \sqcup B$?
10. ¿Cuál es $\dim_{\mathbb{R}}(\mathbb{R}^2 \oplus \mathbb{R}^3)$?

### Funtores

11. Para el olvido $U: \mathbf{Grp} \to \mathbf{Set}$, ¿cuál es el cardinal de $U(\mathbb{Z}_6)$?
12. ¿El funtor $(-)^*$ es covariante o contravariante?
13. ¿El funtor $\pi_1: \mathbf{Top} \to \mathbf{Grp}$ es covariante o contravariante?
14. ¿El funtor libre $\mathbf{Set} \to \mathbf{Grp}$ es adjunto izquierdo o derecho del olvido?
15. ¿El funtor $\text{Hom}(A, -)$ es covariante o contravariante?
16. ¿El funtor $\text{Hom}(-, A)$ es covariante o contravariante?
17. Para un funtor covariante, ¿cuánto vale $F(g \circ f)$?
18. Para un funtor contravariante, ¿cuánto vale $F(g \circ f)$?
19. Para un funtor cualquiera, ¿cuánto vale $F(1_A)$?
20. ¿Es pleno el funtor de olvido $\mathbf{Vect} \to \mathbf{Set}$?

### Productos y coproductos

21. En $\mathbf{Ab}$, ¿cuál es el coproducto de $\mathbb{Z}_2$ y $\mathbb{Z}_3$?
22. En $\mathbf{Grp}$, ¿cuál es el orden de $\mathbb{Z}_2 \times \mathbb{Z}_3$?
23. En $\mathbf{Set}$, ¿cuál es el producto de $\varnothing$ con $A$?
24. En $\mathbf{Set}$, ¿cuál es el coproducto de $\varnothing$ con $A$?
25. ¿Cuál es $\dim(\mathbb{R} \oplus \mathbb{R})$?
26. ¿Cómo se describe el producto en la categoría $\mathbf{Pos}$?
27. En $\mathbf{Set}$, ¿cuál es el producto de $A$ con el objeto terminal?
28. En $\mathbf{Set}$, ¿cuál es el coproducto de $A$ con el objeto inicial?
29. ¿Cuál es el objeto terminal de $\mathbf{Top}$?
30. En $\mathbf{Top}$, ¿cuál es el coproducto de $X$ e $Y$?

### Pullbacks y pushouts

31. En $\mathbf{Set}$, describe el pullback de $A \xrightarrow{f} C \xleftarrow{g} B$.
32. ¿Cuál es el pullback de $A \xrightarrow{1_A} A \xleftarrow{f} B$?
33. ¿Cuál es el pullback de $A \to * \leftarrow B$?
34. En $\mathbf{Set}$, describe el pushout de $A \to B$ y $A \to C$.
35. ¿Cuál es el pushout de $A \xrightarrow{f} B$ y $A \xrightarrow{1_A} A$?
36. ¿Cuál es el pushout de $A \to *$ y $A \to *$?
37. ¿Qué construye el pullback de dos morfismos hacia el objeto terminal?
38. ¿Qué tipo de límite corresponde a dos flechas paralelas $f, g: A \rightrightarrows B$?

### Lema de Yoneda

39. Enuncia el lema de Yoneda en su forma covariante.
40. ¿A qué es isomorfo $\text{Nat}(\text{Hom}(A, -), \text{Hom}(B, -))$?
41. Si $A$ y $A'$ representan el mismo funtor, ¿qué relación hay entre $A$ y $A'$?
42. ¿Qué propiedades tiene el encaje de Yoneda $A \mapsto \text{Hom}(A, -)$?
43. ¿A qué es isomorfo $\text{Nat}(\text{Hom}(A, -), \text{Hom}(A, -))$?
44. ¿Cuál es la forma contravariante del lema de Yoneda?

### Adjunciones

45. Escribe la biyección natural que define $F \dashv G$.
46. Para la adjunción libre-olvido en grupos, ¿a qué es isomorfo $\text{Hom}_{\mathbf{Grp}}(F(S), G)$?
47. Escribe la adjunción producto-exponencial.
48. Escribe la adjunción tensor-Hom.
49. En una adjunción $F \dashv G$, ¿qué preserva el funtor izquierdo $F$?
50. En una adjunción $F \dashv G$, ¿qué preserva el funtor derecho $G$?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $3$</div>
<div class="r"><b>02</b> $1$</div>
<div class="r"><b>03</b> $\varnothing$</div>
<div class="r"><b>04</b> $\{*\}$</div>
<div class="r"><b>05</b> $\{e\}$</div>
<div class="r"><b>06</b> $\lvert A\rvert \cdot \lvert B\rvert$</div>
<div class="r"><b>07</b> $\lvert A\rvert + \lvert B\rvert$</div>
<div class="r"><b>08</b> $6$</div>
<div class="r"><b>09</b> $5$</div>
<div class="r"><b>10</b> $5$</div>
<div class="r"><b>11</b> $6$</div>
<div class="r"><b>12</b> contravariante</div>
<div class="r"><b>13</b> covariante</div>
<div class="r"><b>14</b> izquierdo</div>
<div class="r"><b>15</b> covariante</div>
<div class="r"><b>16</b> contravariante</div>
<div class="r"><b>17</b> $F(g) \circ F(f)$</div>
<div class="r"><b>18</b> $F(f) \circ F(g)$</div>
<div class="r"><b>19</b> $1_{F(A)}$</div>
<div class="r"><b>20</b> no</div>
<div class="r"><b>21</b> $\mathbb{Z}_2 \oplus \mathbb{Z}_3 \cong \mathbb{Z}_6$</div>
<div class="r"><b>22</b> $6$</div>
<div class="r"><b>23</b> $\varnothing$</div>
<div class="r"><b>24</b> $A$</div>
<div class="r"><b>25</b> $2$</div>
<div class="r"><b>26</b> orden producto componente a componente</div>
<div class="r"><b>27</b> $A$</div>
<div class="r"><b>28</b> $A$</div>
<div class="r"><b>29</b> el espacio de un punto</div>
<div class="r"><b>30</b> $X \sqcup Y$</div>
<div class="r"><b>31</b> $\{(a, b) : f(a) = g(b)\}$</div>
<div class="r"><b>32</b> $B$</div>
<div class="r"><b>33</b> $A \times B$</div>
<div class="r"><b>34</b> $(B \sqcup C)/\sim$</div>
<div class="r"><b>35</b> $B$</div>
<div class="r"><b>36</b> $*$</div>
<div class="r"><b>37</b> el producto $A \times B$</div>
<div class="r"><b>38</b> el ecualizador</div>
<div class="r"><b>39</b> $\mathrm{Nat}(\mathrm{Hom}(A, -), F) \cong F(A)$</div>
<div class="r"><b>40</b> $\mathrm{Hom}(B, A)$</div>
<div class="r"><b>41</b> $A \cong A'$ (único salvo isomorfismo)</div>
<div class="r"><b>42</b> pleno y fiel</div>
<div class="r"><b>43</b> $\mathrm{Hom}(A, A)$</div>
<div class="r"><b>44</b> $\mathrm{Nat}(\mathrm{Hom}(-, A), F) \cong F(A)$</div>
<div class="r"><b>45</b> $\mathrm{Hom}_{\mathcal{D}}(FA, B) \cong \mathrm{Hom}_{\mathcal{C}}(A, GB)$</div>
<div class="r"><b>46</b> $\mathrm{Hom}_{\mathbf{Set}}(S, U(G))$</div>
<div class="r"><b>47</b> $\mathrm{Hom}(A \times B, C) \cong \mathrm{Hom}(A, C^B)$</div>
<div class="r"><b>48</b> $\mathrm{Hom}(A \otimes B, C) \cong \mathrm{Hom}(A, \mathrm{Hom}(B, C))$</div>
<div class="r"><b>49</b> colímites</div>
<div class="r"><b>50</b> límites</div>
</div>
