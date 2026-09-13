# Métodos de demostración · 50 ejercicios
**Cuaderno de práctica · Álgebra escolar y fundamentos · 10°–11° / Univ 1**
*Directa, contrapositiva, contradicción e inducción.*

## Formulario
### Implicación y equivalencia
- La implicación $P \to Q$ solo es falsa cuando $P$ es verdadera y $Q$ es falsa.
- **Contrapositiva:** $P \to Q \equiv \neg Q \to \neg P$ (equivalentes).
- **Recíproca:** $Q \to P$ (no equivalente a la original).
- **Doble implicación:** $P \leftrightarrow Q$ significa $(P \to Q) \wedge (Q \to P)$.
- **Negación de una implicación:** $\neg(P \to Q) \equiv P \wedge \neg Q$.

### Cuantificadores
- $\forall$ significa "para todo"; $\exists$ significa "existe".
- Negación: $\neg(\forall x\, P(x)) \equiv \exists x\, \neg P(x)$ y $\neg(\exists x\, P(x)) \equiv \forall x\, \neg P(x)$.
- Un **contraejemplo** refuta una afirmación universal; un ejemplo no la prueba.

### Definiciones básicas
| Término | Definición |
| --- | --- |
| Par | $n = 2k$ para algún entero $k$ |
| Impar | $n = 2k + 1$ para algún entero $k$ |
| $a$ divide a $b$ | $b = ak$ para algún entero $k$ |
| Múltiplo de $m$ | $n = mk$ para algún entero $k$ |
| Racional | $x = a/b$ con $a, b$ enteros y $b \neq 0$ |
| Irracional | no es racional |

### Técnicas de demostración
1. **Directa:** supón la hipótesis y llega a la tesis por pasos justificados.
2. **Contrapositiva:** prueba $\neg Q \to \neg P$ en lugar de $P \to Q$.
3. **Contradicción:** supón $P$ y $\neg Q$ y deriva una imposibilidad.
4. **Casos:** divide la hipótesis en casos exhaustivos y prueba cada uno.
5. **Inducción:** base $n_0$, hipótesis $P(k)$ y paso $P(k) \to P(k+1)$.
6. **Inducción fuerte:** supón $P(j)$ para todo $j \leq k$ y prueba $P(k+1)$.
7. **Doble implicación:** prueba la ida $P \to Q$ y la vuelta $Q \to P$.

### Identidades y sumas útiles
- $a^2 - b^2 = (a - b)(a + b)$.
- $(a + b)^2 = a^2 + 2ab + b^2$.
- $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$.
- $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$.
- $\sum_{k=1}^{n} k^3 = \left(\frac{n(n+1)}{2}\right)^2$.
- $\sum_{k=0}^{n-1} 2^k = 2^n - 1$.

### Hechos de paridad y divisibilidad
- par $+$ par $=$ par; par $+$ impar $=$ impar; impar $+$ impar $=$ par.
- par $\times$ entero $=$ par; impar $\times$ impar $=$ impar.
- $n(n+1)$ es siempre par.
- Si $n^2$ es par, entonces $n$ es par (lo mismo con $3$).
- Si $a \mid b$ y $b \mid c$, entonces $a \mid c$.

## Ejercicios (50)
**Nivel 1 · Demostración directa (1–10).**
1. Demuestra que la suma de dos números pares es par.
2. Demuestra que la suma de dos números impares es par.
3. Demuestra que el producto de dos números impares es impar.
4. Demuestra que el cuadrado de un múltiplo de $3$ es múltiplo de $9$.
5. Demuestra que si $a \mid b$ y $b \mid c$, entonces $a \mid c$.
6. Demuestra que si $a \mid b$, entonces $a \mid bc$ para todo entero $c$.
7. Demuestra que la suma de tres enteros consecutivos es divisible por $3$.
8. Demuestra que el producto de dos enteros consecutivos es par.
9. Demuestra que si $n$ es par, entonces $n^2 + n$ es par.
10. Demuestra que si $a$ es par y $b$ es impar, entonces $a + b$ es impar.

**Nivel 2 · Contrapositiva (11–20).**
11. Demuestra: si $n^2$ es par, entonces $n$ es par.
12. Demuestra: si $n^2$ es impar, entonces $n$ es impar.
13. Demuestra: si $3n + 2$ es impar, entonces $n$ es impar.
14. Demuestra: si $n^3$ es par, entonces $n$ es par.
15. Demuestra: si $n^2$ es divisible por $3$, entonces $n$ es divisible por $3$.
16. Demuestra: si $m + n$ es impar, entonces $m$ y $n$ tienen paridad distinta.
17. Demuestra: si $5n + 3$ es par, entonces $n$ es impar.
18. Demuestra: si $mn$ es impar, entonces $m$ y $n$ son impares.
19. Demuestra: si $n^2 + 1$ es par, entonces $n$ es impar.
20. Demuestra: si $7n - 4$ es impar, entonces $n$ es impar.

**Nivel 3 · Contradicción e irracionalidad (21–30).**
21. Demuestra que $\sqrt{2}$ es irracional.
22. Demuestra que $\sqrt{3}$ es irracional.
23. Demuestra que $\sqrt{5}$ es irracional.
24. Demuestra que no existe el menor número racional positivo.
25. Demuestra que hay infinitos números primos.
26. Demuestra que la suma de un número racional y uno irracional es irracional.
27. Demuestra que $\log_2 3$ es irracional.
28. Demuestra que ningún entero es par e impar a la vez.
29. Demuestra que si $a, b$ son enteros con $a + b > 100$, entonces $a > 50$ o $b > 50$.
30. Demuestra que $\sqrt{6}$ es irracional.

**Nivel 4 · Casos y doble implicación (31–40).**
31. Demuestra por casos que $n^2 + n$ es par para todo entero $n$.
32. Demuestra que el cuadrado de todo entero deja resto $0$ o $1$ al dividir por $4$.
33. Demuestra por casos que $\lvert xy \rvert = \lvert x \rvert \, \lvert y \rvert$ para reales $x, y$.
34. Demuestra que $n^2 - n$ es divisible por $2$ para todo entero $n$.
35. Demuestra que $n^2 + 3n + 2$ es par para todo entero $n$.
36. Demuestra la doble implicación: $n$ es par si y solo si $n + 1$ es impar.
37. Demuestra la doble implicación: $3 \mid n$ si y solo si $3 \mid n^2$.
38. Demuestra la doble implicación: $n$ es impar si y solo si $n^2$ es impar.
39. Demuestra que $a + b$ es par si y solo si $a$ y $b$ tienen la misma paridad.
40. Demuestra que $x^2 = 9$ si y solo si $x = 3$ o $x = -3$ (en los reales).

**Nivel 5 · Inducción (41–50).**
41. Prueba por inducción: $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$ para $n \geq 1$.
42. Prueba por inducción: $\sum_{k=1}^{n} (2k-1) = n^2$ para $n \geq 1$.
43. Prueba por inducción: $2^n > n$ para $n \geq 1$.
44. Prueba por inducción: $3^n - 1$ es divisible por $2$ para $n \geq 1$.
45. Prueba por inducción: $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$ para $n \geq 1$.
46. Prueba por inducción: $\sum_{k=1}^{n} k^3 = \left(\frac{n(n+1)}{2}\right)^2$ para $n \geq 1$.
47. Prueba por inducción: $n^3 + 2n$ es divisible por $3$ para $n \geq 1$.
48. Prueba por inducción: $4^n - 1$ es divisible por $3$ para $n \geq 1$.
49. Prueba por inducción: $2^n \geq n + 1$ para $n \geq 1$.
50. Prueba por inducción: $\sum_{k=0}^{n-1} 2^k = 2^n - 1$ para $n \geq 1$.

## Solucionario · resultados
<div class="results">
<div class="r"><b>01</b> $2m + 2n = 2(m+n)$ es par.</div>
<div class="r"><b>02</b> $(2m+1)+(2n+1) = 2(m+n+1)$ es par.</div>
<div class="r"><b>03</b> $(2m+1)(2n+1) = 2(2mn+m+n)+1$ es impar.</div>
<div class="r"><b>04</b> $(3k)^2 = 9k^2$ es múltiplo de $9$.</div>
<div class="r"><b>05</b> $b=ak$ y $c=bl$ implican $c=a(kl)$, luego $a \mid c$.</div>
<div class="r"><b>06</b> $b=ak$ implica $bc=a(kc)$, luego $a \mid bc$.</div>
<div class="r"><b>07</b> $n+(n+1)+(n+2) = 3(n+1)$ es múltiplo de $3$.</div>
<div class="r"><b>08</b> Uno de los dos es par; producto con par es par.</div>
<div class="r"><b>09</b> $n=2k$ da $n^2+n = 4k^2+2k = 2(2k^2+k)$.</div>
<div class="r"><b>10</b> $2m+(2n+1) = 2(m+n)+1$ es impar.</div>
<div class="r"><b>11</b> Contrapositiva: $n=2k+1$ da $n^2 = 2(2k^2+2k)+1$ impar.</div>
<div class="r"><b>12</b> Contrapositiva: $n=2k$ da $n^2 = 4k^2$ par.</div>
<div class="r"><b>13</b> Contrapositiva: $n=2k$ da $3n+2 = 2(3k+1)$ par.</div>
<div class="r"><b>14</b> Contrapositiva: $n=2k$ da $n^3 = 8k^3$ par.</div>
<div class="r"><b>15</b> Contrapositiva: $3 \nmid n$ da resto $1$ al elevar al cuadrado.</div>
<div class="r"><b>16</b> Contrapositiva: igual paridad implica $m+n$ par.</div>
<div class="r"><b>17</b> Contrapositiva: $n=2k$ da $5n+3 = 10k+3$ impar.</div>
<div class="r"><b>18</b> Contrapositiva: un factor par hace par el producto.</div>
<div class="r"><b>19</b> Contrapositiva: $n=2k$ da $n^2+1 = 4k^2+1$ impar.</div>
<div class="r"><b>20</b> Contrapositiva: $n=2k$ da $7n-4 = 2(7k-2)$ par.</div>
<div class="r"><b>21</b> $\sqrt{2}=a/b$ reducida; $a^2=2b^2$ obliga a $a,b$ pares.</div>
<div class="r"><b>22</b> Análogo: $3 \mid a^2$ obliga a $3 \mid a$ y luego $3 \mid b$.</div>
<div class="r"><b>23</b> Análogo: $5 \mid a^2$ obliga a $5 \mid a$ y luego $5 \mid b$.</div>
<div class="r"><b>24</b> Si $r$ fuera el menor, $r/2$ es un racional positivo menor.</div>
<div class="r"><b>25</b> $p_1 p_2 \cdots p_n + 1$ tiene un factor primo nuevo.</div>
<div class="r"><b>26</b> Si $q+r=s$ con $q,s$ racionales, entonces $r=s-q$ es racional.</div>
<div class="r"><b>27</b> $\log_2 3 = p/q$ daría $2^p = 3^q$, imposible.</div>
<div class="r"><b>28</b> Un entero no puede ser a la vez $2k$ y $2m+1$.</div>
<div class="r"><b>29</b> $a \leq 50$ y $b \leq 50$ implican $a+b \leq 100$.</div>
<div class="r"><b>30</b> $\sqrt{6}=a/b$; $a^2=6b^2$ obliga a $2$ y $3$ a dividir $a,b$.</div>
<div class="r"><b>31</b> Casos par/impar; $n(n+1)$ siempre es par.</div>
<div class="r"><b>32</b> $n=2k$ da $4k^2$; $n=2k+1$ da $4(k^2+k)+1$.</div>
<div class="r"><b>33</b> Casos según signos; en cada uno los valores absolutos coinciden.</div>
<div class="r"><b>34</b> $n(n-1)$ es producto de enteros consecutivos, par.</div>
<div class="r"><b>35</b> $(n+1)(n+2)$ es producto de enteros consecutivos, par.</div>
<div class="r"><b>36</b> Ida: $2k+1$; vuelta: $n+1=2m+1$ da $n=2m$.</div>
<div class="r"><b>37</b> Ida: $(3k)^2=9k^2$; vuelta por contrapositiva.</div>
<div class="r"><b>38</b> Ida: $(2k+1)^2$ impar; vuelta: contrapositiva de $n$ par.</div>
<div class="r"><b>39</b> Paridad igual da suma par; distinta da suma impar.</div>
<div class="r"><b>40</b> $(x-3)(x+3)=0$ en los reales.</div>
<div class="r"><b>41</b> Base $n=1$; paso $\frac{k(k+1)}{2}+(k+1)=\frac{(k+1)(k+2)}{2}$.</div>
<div class="r"><b>42</b> Base $1=1^2$; paso $k^2+(2k+1)=(k+1)^2$.</div>
<div class="r"><b>43</b> Base $2>1$; paso $2 \cdot 2^k > 2k \geq k+1$.</div>
<div class="r"><b>44</b> Base $2$; paso $3^{k+1}-1 = 3(3^k-1)+2$.</div>
<div class="r"><b>45</b> Base; paso suma $\frac{k(k+1)(2k+1)}{6}+(k+1)^2$.</div>
<div class="r"><b>46</b> Base; paso usa $(k+1)^3$ sobre $\left(\frac{k(k+1)}{2}\right)^2$.</div>
<div class="r"><b>47</b> Base $3$; paso $(k+1)^3+2(k+1) = (k^3+2k)+3(k^2+k+1)$.</div>
<div class="r"><b>48</b> Base $3$; paso $4^{k+1}-1 = 4(4^k-1)+3$.</div>
<div class="r"><b>49</b> Base $2 \geq 2$; paso $2 \cdot 2^k \geq 2(k+1) \geq k+2$.</div>
<div class="r"><b>50</b> Base $1=2^1-1$; paso $(2^n-1)+2^n = 2^{n+1}-1$.</div>
</div>
