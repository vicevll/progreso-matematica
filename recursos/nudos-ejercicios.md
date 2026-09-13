# Teoría de nudos · Formulario y ejercicios

## Formulario

### Definiciones básicas
- **Nudo:** embebimiento $K: S^1 \hookrightarrow \mathbb{R}^3$.
- **Enlace:** unión disjunta de $n$ círculos embebidos (**componentes**).
- **Equivalencia:** isotopía ambiente (sin cortar ni atravesar hebras).
- **Número de cruces:** $c(K) = \min_{D}\;\#\{\text{cruces de } D\}$, el mínimo sobre todos los diagramas $D$.
- **Nudo trivial:** $c = 0$; actúa como elemento neutro.

### Movimientos de Reidemeister
1. **Tipo I:** elimina o crea un rizo simple.
2. **Tipo II:** elimina o crea dos cruces opuestos (desliza una hebra sobre otra).
3. **Tipo III:** mueve una hebra por encima o por debajo de un cruce.
- **Teorema:** dos diagramas dan el mismo nudo si y solo si se conectan por I, II y III (más isotopía del plano).
- Todo **invariante** debe ser preservado por los tres movimientos.

### Grupo del nudo y presentación de Wirtinger
- **Grupo del nudo:** $G(K) = \pi_1(S^3 \setminus K)$.
- Diagrama con $n$ cruces: $n$ arcos dan $n$ generadores y $n$ relaciones (una redundante).
$$G(K) = \langle g_1, \dots, g_n \mid r_1 = \dots = r_n = 1 \rangle$$
- Relación de cruce: $g_{i+1} = g_k^{-1} g_i g_k$ o $g_{i+1} = g_k g_i g_k^{-1}$.
- **Abelianización:** $G(K)^{\text{ab}} = \mathbb{Z}$ para todo nudo.
- **Suma conexa:** $G(K_1 \# K_2) = G(K_1) * G(K_2)$ (producto libre).
- El grupo **no es completo** y no detecta la quiralidad.

### Polinomios de nudos
- **Alexander** $\Delta_K(t)$, con skein:
$$\Delta_{L_+} - \Delta_{L_-} = (t^{1/2} - t^{-1/2})\, \Delta_{L_0}, \qquad \Delta_{\text{trivial}} = 1$$
- **Jones** $V_K(t)$, con skein:
$$t^{-1} V_{L_+} - t\, V_{L_-} = (t^{1/2} - t^{-1/2})\, V_{L_0}, \qquad V_{\text{trivial}} = 1$$
- **HOMFLY** $P_K(a, z)$, con skein:
$$a\, P_{L_+} - a^{-1}\, P_{L_-} = z\, P_{L_0}, \qquad P_{\text{trivial}} = 1$$
- **Especializaciones:** $V_K(t) = P_K(t,\, t^{1/2} - t^{-1/2})$ y $\Delta_K(t) = P_K(1,\, t^{1/2} - t^{-1/2})$.

**Tabla de invariantes de nudos pequeños.**

| Nudo | $\Delta_K(t)$ | $V_K(t)$ | $g(K)$ |
|---|---|---|---|
| Trivial | $1$ | $1$ | $0$ |
| Trébol $3_1$ | $t^2 - t + 1$ | $-t^{-4} + t^{-3} + t^{-1}$ | $1$ |
| Ocho $4_1$ | $t^2 - 3t + 1$ | $t^{-2} - t^{-1} + 1 - t + t^{2}$ | $1$ |
| Cinquefoil $5_1$ | $t^4 - t^3 + t^2 - t + 1$ | $-t^{-7} + t^{-6} - t^{-5} + t^{-4} + t^{-2}$ | $2$ |

**Valores útiles.**
1. $V_K(1) = 1$ para todo nudo.
2. $|\Delta_K(1)| = 1$ para todo nudo.
3. Determinante del nudo: $|\Delta_K(-1)|$.
4. $V_K(t^{-1})$ es el Jones del nudo espejo (detecta quiralidad si difiere).

### Superficies de Seifert y género
- **Superficie de Seifert:** superficie compacta, orientable y conexa $\Sigma$ con $\partial \Sigma = K$.
- **Género:** $g(K) = \min \text{género}(\Sigma)$.
- $g(K) = 0$ si y solo si $K$ es trivial.
- **Aditividad:** $g(K_1 \# K_2) = g(K_1) + g(K_2)$.
- **Cota de Alexander:** $g(K) \geq \tfrac{1}{2}\,\text{span}(\Delta_K)$; con igualdad para nudos alternantes.

### Suma conexa y nudos primos
- $K_1 \# K_2$: cortar y unir sin añadir cruces; el trivial es el neutro.
- **Primo:** no se escribe como suma de dos nudos no triviales.
- **Teorema de Schubert:** descomposición única en primos (salvo orden).
- $\Delta_{K_1 \# K_2} = \Delta_{K_1} \cdot \Delta_{K_2}$ y $g$ es aditivo.

## Ejercicios (50)

### Bloque A · Movimientos de Reidemeister
1. ¿Cuántos tipos de movimientos de Reidemeister existen?
2. ¿Qué movimiento elimina un rizo simple?
3. ¿Qué movimiento elimina dos cruces opuestos?
4. ¿Qué movimiento desliza una hebra por encima de un cruce?
5. Aplicando un movimiento tipo I a un diagrama con un rizo, ¿cuántos cruces se eliminan?
6. Aplicando un movimiento tipo II, ¿cuántos cruces se eliminan?
7. ¿Se conserva siempre el número de cruces de un diagrama bajo Reidemeister?
8. ¿Cuál es el número mínimo de cruces del trébol?
9. ¿Cuál es el número mínimo de cruces del nudo de ocho?
10. ¿Cambian los movimientos de Reidemeister la clase de isotopía del nudo?

### Bloque B · Grupo del nudo
11. ¿Cuál es el grupo del nudo del nudo trivial?
12. Escribe la presentación del grupo del nudo del trébol.
13. ¿Es abeliano el grupo del trébol?
14. ¿Cuál es la abelianización del grupo del trébol?
15. ¿Cuántos generadores de Wirtinger tiene el diagrama estándar del trébol (3 cruces)?
16. ¿Cuántas relaciones de Wirtinger tiene un diagrama con $n$ cruces?
17. ¿Existen nudos no triviales con grupo del nudo isomorfo a $\mathbb{Z}$?
18. ¿Cómo es el grupo del nudo de una suma conexa?
19. ¿Es el grupo del nudo un invariante completo?
20. ¿Distingue el grupo del nudo al trébol de su imagen especular?

### Bloque C · Polinomio de Alexander
21. ¿Cuál es el polinomio de Alexander del nudo trivial?
22. ¿Cuál es el polinomio de Alexander del trébol?
23. ¿Cuánto vale $|\Delta(1)|$ para todo nudo?
24. ¿Cuál es el polinomio de Alexander del nudo de ocho?
25. ¿Cuál es el span del polinomio de Alexander del trébol?
26. ¿Detecta el polinomio de Alexander la quiralidad?
27. ¿Cuál es el polinomio de Alexander del $5_1$ (cinquefoil)?
28. ¿Cuál es el span del polinomio de Alexander del $5_1$?
29. ¿Qué cota inferior de género da el span del $\Delta$ del $5_1$?
30. ¿Cuál es el polinomio de Alexander de $3_1 \# 3_1$?

### Bloque D · Polinomio de Jones
31. ¿Cuál es el polinomio de Jones del nudo trivial?
32. ¿Cuál es el polinomio de Jones del trébol diestro?
33. ¿Cuál es el polinomio de Jones de la imagen especular del trébol?
34. ¿Coinciden el Jones del trébol y el de su imagen especular?
35. ¿Cuál es el polinomio de Jones del nudo de ocho?
36. ¿Cuánto vale $V(1)$ para todo nudo?
37. ¿Cuál es el determinante del trébol, $|\Delta(-1)|$?
38. ¿Coinciden el polinomio de Jones del trébol y el del nudo de ocho?

### Bloque E · Superficies de Seifert y género
39. ¿Cuál es el género del nudo trivial?
40. ¿Cuál es el género del trébol?
41. ¿Cuál es el género del nudo de ocho?
42. Si $g(K_1) = 1$ y $g(K_2) = 2$, ¿cuál es $g(K_1 \# K_2)$?
43. ¿Es orientable toda superficie de Seifert?
44. Si un nudo tiene $\text{span}(\Delta) = 4$, ¿qué cota inferior de género se obtiene?
45. ¿Cuál es el género del nudo $5_1$?

### Bloque F · Suma conexa y nudos primos
46. ¿Cuál es el elemento neutro de la suma conexa de nudos?
47. ¿Es primo el trébol?
48. ¿Es primo el nudo de ocho?
49. ¿Cuántos nudos primos hay con 3 cruces?
50. ¿Es primo el nudo $3_1 \# 3_1$?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $3$</div>
<div class="r"><b>02</b> Tipo I</div>
<div class="r"><b>03</b> Tipo II</div>
<div class="r"><b>04</b> Tipo III</div>
<div class="r"><b>05</b> $1$</div>
<div class="r"><b>06</b> $2$</div>
<div class="r"><b>07</b> No</div>
<div class="r"><b>08</b> $3$</div>
<div class="r"><b>09</b> $4$</div>
<div class="r"><b>10</b> No</div>
<div class="r"><b>11</b> $\mathbb{Z}$</div>
<div class="r"><b>12</b> $\langle a, b \mid a^2 = b^3 \rangle$</div>
<div class="r"><b>13</b> No</div>
<div class="r"><b>14</b> $\mathbb{Z}$</div>
<div class="r"><b>15</b> $3$</div>
<div class="r"><b>16</b> $n$</div>
<div class="r"><b>17</b> Sí</div>
<div class="r"><b>18</b> Producto libre</div>
<div class="r"><b>19</b> No</div>
<div class="r"><b>20</b> No</div>
<div class="r"><b>21</b> $1$</div>
<div class="r"><b>22</b> $t^2 - t + 1$</div>
<div class="r"><b>23</b> $1$</div>
<div class="r"><b>24</b> $t^2 - 3t + 1$</div>
<div class="r"><b>25</b> $2$</div>
<div class="r"><b>26</b> No</div>
<div class="r"><b>27</b> $t^4 - t^3 + t^2 - t + 1$</div>
<div class="r"><b>28</b> $4$</div>
<div class="r"><b>29</b> $2$</div>
<div class="r"><b>30</b> $(t^2 - t + 1)^2$</div>
<div class="r"><b>31</b> $1$</div>
<div class="r"><b>32</b> $-t^{-4} + t^{-3} + t^{-1}$</div>
<div class="r"><b>33</b> $-t^{4} + t^{3} + t$</div>
<div class="r"><b>34</b> No</div>
<div class="r"><b>35</b> $t^{-2} - t^{-1} + 1 - t + t^{2}$</div>
<div class="r"><b>36</b> $1$</div>
<div class="r"><b>37</b> $3$</div>
<div class="r"><b>38</b> No</div>
<div class="r"><b>39</b> $0$</div>
<div class="r"><b>40</b> $1$</div>
<div class="r"><b>41</b> $1$</div>
<div class="r"><b>42</b> $3$</div>
<div class="r"><b>43</b> Sí</div>
<div class="r"><b>44</b> $2$</div>
<div class="r"><b>45</b> $2$</div>
<div class="r"><b>46</b> El nudo trivial</div>
<div class="r"><b>47</b> Sí</div>
<div class="r"><b>48</b> Sí</div>
<div class="r"><b>49</b> $1$</div>
<div class="r"><b>50</b> No</div>
</div>
