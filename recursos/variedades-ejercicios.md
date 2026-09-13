# Variedades diferenciables — Formulario y ejercicios

Área: **Geometría y topología** · Nivel: **Univ 4–5** · Descripción: Atlas, espacios tangentes y formas diferenciales.

## Formulario

### Variedades, cartas y atlas

- **Variedad topológica** $M$ de dimensión $n$: Hausdorff, con base numerable y localmente homeomorfa a $\mathbb{R}^n$.
- **Carta** $(U,\varphi)$: $U\subseteq M$ abierto y $\varphi:U\to\mathbb{R}^n$ homeomorfismo sobre un abierto.
- **Atlas:** familia de cartas que cubre $M$; **cambio de carta**: $\psi\circ\varphi^{-1}$ en $U\cap V$.
- **Variedad diferenciable:** atlas con todos los cambios de carta $C^\infty$ (atlas maximal = estructura).
- **Fibrado tangente:** $TM=\bigsqcup_p T_pM$ con $\dim TM=2n$.

| Objeto | Dimensión |
|---|---|
| $\mathbb{R}^n$ | $n$ |
| $S^n$ | $n$ |
| $GL_n(\mathbb{R})$ | $n^2$ |
| $SL_n(\mathbb{R})$ | $n^2-1$ |
| $O(n)$ | $\frac{n(n-1)}{2}$ |
| $TM$ | $2n$ |

### Espacio tangente y diferencial

- $T_pM$: clases de curvas por $p$ con la misma derivada en coordenadas; $\dim T_pM=n$.
- **Base coordenada:** $\frac{\partial}{\partial x^1}\big|_p,\dots,\frac{\partial}{\partial x^n}\big|_p$.
- $dF_p:T_pM\to T_{F(p)}N$ es lineal y $dF_p(v)=(F\circ\gamma)'(0)$.
- **Regla de la cadena:** $d(G\circ F)_p=dG_{F(p)}\circ dF_p$.
- **Inmersión:** $dF_p$ inyectiva. **Submersión:** $dF_p$ sobreyectiva. **Difeomorfismo:** biyectiva con inversa suave.

### Valores regulares y subvariedades

- $q$ es **valor regular** de $F:M\to N$ si $dF_p$ es sobreyectiva para todo $p\in F^{-1}(q)$.
- **Teorema de la preimagen:** $F^{-1}(q)$ es subvariedad de dimensión $\dim M-\dim N$.
- En $\mathbb{R}^n$: $df=\sum_i\partial_i f\,dx^i$, que corresponde a $\nabla f$.
- Ejemplos: $S^{n-1}=f^{-1}(r^2)$ con $f(x)=|x|^2$; $SL_n(\mathbb{R})=\det^{-1}(1)$.

### Campos vectoriales, flujos y corchete

- Campo: $X=\sum_i X^i\frac{\partial}{\partial x^i}$; **curva integral**: $\dot x^i=X^i(x)$.
- **Flujo:** $\phi_0=\mathrm{id}$ y $\phi_{s+t}=\phi_s\circ\phi_t$.
- **Corchete de Lie:** $[X,Y]=\sum_{i,j}\left(X^j\partial_jY^i-Y^j\partial_jX^i\right)\partial_i$.
- **Propiedades:** $[X,Y]=-[Y,X]$; **Jacobi** $[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0$.
- El corchete mide la no conmutatividad de los flujos.

### Formas diferenciales

- **1-forma:** $\omega=\sum_i\omega_i\,dx^i$, con $\omega\!\left(\frac{\partial}{\partial x^j}\right)=\omega_j$.
- **$k$-forma:** base $dx^{i_1}\wedge\cdots\wedge dx^{i_k}$ con $i_1<\cdots<i_k$; número de componentes $\binom{n}{k}$.
- **Producto exterior:** $\alpha\wedge\beta=(-1)^{kl}\beta\wedge\alpha$; $dx^i\wedge dx^i=0$.
- **Derivada exterior:** $d(f)=\sum_i\partial_i f\,dx^i$ y $d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^k\alpha\wedge d\beta$.
- **Propiedad fundamental:** $d^2=0$. **Cartan:** $\mathcal{L}_X=d\iota_X+\iota_X\,d$.

### Integración, Stokes y orientabilidad

- $\displaystyle\int_U f\,dx^1\wedge\cdots\wedge dx^n=\int_{\varphi(U)}f(x)\,dx^1\cdots dx^n$.
- **Stokes:** $\displaystyle\int_M d\omega=\int_{\partial M}\omega$.
- **Cerrada:** $d\omega=0$; **exacta:** $\omega=d\alpha$. Toda forma exacta es cerrada.
- **Lema de Poincaré:** en un abierto contractible, cerrada implica exacta.
- **Orientable:** atlas con jacobianos positivos, o forma de volumen que no se anula.
- No orientables: banda de Möbius y botella de Klein.

## Ejercicios (50)

### Cartas, variedades y dimensiones

1. ¿Cuál es la dimensión de $\mathbb{R}^n$?
2. ¿Cuántas cartas como mínimo tiene el atlas estereográfico de $S^n$?
3. Si $\dim M=n$, ¿qué dimensión tiene el fibrado tangente $TM$?
4. ¿Cuántas coordenadas locales tiene una carta de una $3$-variedad?
5. ¿Cuál es la dimensión de $GL_n(\mathbb{R})$?
6. ¿Cuál es la dimensión de $SL_n(\mathbb{R})$?
7. ¿Cuál es la dimensión de $O(n)$?
8. ¿Cuál es la dimensión de $S^n$?
9. ¿Es $\mathbb{RP}^n$ una variedad diferenciable?
10. ¿Cuántas cartas afines estándar recubren $\mathbb{RP}^n$?

### Espacio tangente y diferenciales

11. ¿Cuál es la dimensión de $T_pM$?
12. ¿Qué condición cumple $v\in T_pS^2$ en el punto $p$?
13. Para $f(x,y)=xy$, ¿cuánto vale $df_{(1,1)}(h_1,h_2)$?
14. ¿Cuánto vale $d(\det)_I(H)$?
15. ¿Cuál es la diferencial de la identidad $\mathrm{id}_M$?
16. Escribe la regla de la cadena para $d(G\circ F)_p$.
17. Si $\dim M=2$ y $\dim N=3$, ¿cuál es el rango máximo de $dF_p$?
18. En una inmersión, ¿la diferencial es inyectiva o sobreyectiva?
19. En una submersión, ¿la diferencial es inyectiva o sobreyectiva?
20. Si $F$ es submersión en $p$, ¿qué dimensión local tiene $F^{-1}(F(p))$?

### Valores regulares y subvariedades

21. Para $f(x,y,z)=x^2+y^2+z^2$, ¿es $1$ un valor regular?
22. ¿Qué dimensión tiene $f^{-1}(1)$ en el caso anterior?
23. Para $f(x,y)=x^2-y^2$, ¿es $0$ un valor regular?
24. ¿Qué dimensión tiene $SL_2(\mathbb{R})$?
25. ¿Es $O(n)$ una subvariedad de $M_n(\mathbb{R})$?
26. Si $F:\mathbb{R}^5\to\mathbb{R}^2$ y $c$ es valor regular, ¿qué dimensión tiene $F^{-1}(c)$?
27. ¿Qué es un valor crítico?
28. Si $c\notin F(M)$, ¿es $c$ un valor regular?
29. ¿Qué dimensión tiene $S^1\times S^1$?
30. ¿Es $S^2$ una subvariedad de $\mathbb{R}^3$?

### Campos vectoriales, flujos y corchete

31. Halla la curva integral de $X=\partial_x$ en $\mathbb{R}$ con condición inicial $x_0$.
32. ¿Cuál es el flujo de $X=\partial_x$ en $\mathbb{R}^2$?
33. ¿Qué curvas integrales tiene $X=(-y,x)$ en $\mathbb{R}^2$?
34. Escribe $\phi_t$ del campo $X=(-y,x)$.
35. Calcula $[\partial_x,\partial_y]$.
36. Calcula $[\partial_x,x\,\partial_y]$.
37. ¿Cumple el corchete de Lie la identidad de Jacobi?
38. Calcula $[\partial_x,x^2\,\partial_y]$.

### Formas diferenciales

39. Calcula $d(x^2)$.
40. Calcula $d(x\,dy)$ en $\mathbb{R}^2$.
41. Calcula $d(x\,dy-y\,dx)$.
42. Calcula $d(2x\,dy\wedge dz+3y\,dz\wedge dx)$.
43. Calcula $d\omega$ para $\omega=x\,dy\wedge dz+y\,dz\wedge dx+z\,dx\wedge dy$.
44. ¿Cuántas $k$-formas independientes hay en $\mathbb{R}^n$?
45. ¿Cuántas $2$-formas independientes hay en $\mathbb{R}^3$?
46. ¿Es cerrada la $1$-forma $x\,dy$?

### Integración, Stokes y orientabilidad

47. ¿Cuánto vale $\displaystyle\int_{S^1}x\,dy$?
48. ¿Cuánto vale $\displaystyle\int_{S^2}\omega$ con la forma de área de $S^2$?
49. ¿Cuántas orientaciones tiene una variedad conexa orientable?
50. ¿Es orientable la banda de Möbius?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $n$</div>
<div class="r"><b>02</b> $2$</div>
<div class="r"><b>03</b> $2n$</div>
<div class="r"><b>04</b> $3$</div>
<div class="r"><b>05</b> $n^2$</div>
<div class="r"><b>06</b> $n^2-1$</div>
<div class="r"><b>07</b> $\frac{n(n-1)}{2}$</div>
<div class="r"><b>08</b> $n$</div>
<div class="r"><b>09</b> Sí</div>
<div class="r"><b>10</b> $n+1$</div>
<div class="r"><b>11</b> $n$</div>
<div class="r"><b>12</b> $v\cdot p=0$</div>
<div class="r"><b>13</b> $h_1+h_2$</div>
<div class="r"><b>14</b> $\operatorname{tr}(H)$</div>
<div class="r"><b>15</b> la identidad</div>
<div class="r"><b>16</b> $dG_{F(p)}\circ dF_p$</div>
<div class="r"><b>17</b> $2$</div>
<div class="r"><b>18</b> inyectiva</div>
<div class="r"><b>19</b> sobreyectiva</div>
<div class="r"><b>20</b> $\dim M-\dim N$</div>
<div class="r"><b>21</b> Sí</div>
<div class="r"><b>22</b> $2$</div>
<div class="r"><b>23</b> No</div>
<div class="r"><b>24</b> $3$</div>
<div class="r"><b>25</b> Sí</div>
<div class="r"><b>26</b> $3$</div>
<div class="r"><b>27</b> la imagen de un punto crítico</div>
<div class="r"><b>28</b> Sí</div>
<div class="r"><b>29</b> $2$</div>
<div class="r"><b>30</b> Sí</div>
<div class="r"><b>31</b> $x(t)=x_0+t$</div>
<div class="r"><b>32</b> $\phi_t(x,y)=(x+t,y)$</div>
<div class="r"><b>33</b> circunferencias</div>
<div class="r"><b>34</b> $\phi_t(x,y)=(x\cos t-y\sin t,\ x\sin t+y\cos t)$</div>
<div class="r"><b>35</b> $0$</div>
<div class="r"><b>36</b> $\partial_y$</div>
<div class="r"><b>37</b> Sí</div>
<div class="r"><b>38</b> $2x\,\partial_y$</div>
<div class="r"><b>39</b> $2x\,dx$</div>
<div class="r"><b>40</b> $dx\wedge dy$</div>
<div class="r"><b>41</b> $2\,dx\wedge dy$</div>
<div class="r"><b>42</b> $5\,dx\wedge dy\wedge dz$</div>
<div class="r"><b>43</b> $3\,dx\wedge dy\wedge dz$</div>
<div class="r"><b>44</b> $\binom{n}{k}$</div>
<div class="r"><b>45</b> $3$</div>
<div class="r"><b>46</b> No</div>
<div class="r"><b>47</b> $\pi$</div>
<div class="r"><b>48</b> $4\pi$</div>
<div class="r"><b>49</b> $2$</div>
<div class="r"><b>50</b> No</div>
</div>
