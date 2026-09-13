# Teoría de la medida e integral de Lebesgue

**Guía simple · Análisis · Universidad 4–5**
*Sigma-álgebras, medida, funciones medibles y convergencia.*

---

## 1. Por qué hace falta una nueva integral

La integral de Riemann parte el eje $x$ y aproxima el área con rectángulos. Funciona bien para funciones continuas o con pocas discontinuidades, pero falla en tres frentes:

1. Funciones muy discontinuas, como la de Dirichlet, no son integrables.
2. Pasar al límite dentro de la integral exige convergencia uniforme, una hipótesis muy fuerte.
3. Los conjuntos "patológicos" no se pueden medir con longitud elemental.

La **integral de Lebesgue** cambia de estrategia: en lugar de partir el dominio, parte el **recorrido** (eje $y$) y mide cuánto del dominio cae en cada nivel. Con ello se integran más funciones y los teoremas de convergencia funcionan con hipótesis mucho más débiles.

**Mini-ejemplo.** La función de Dirichlet $\chi_{\mathbb{Q}}$ vale $1$ en los racionales y $0$ en los irracionales. No es Riemann-integrable, pero es Lebesgue-integrable y

$$\int_0^1 \chi_{\mathbb{Q}}\,d\lambda = 0,$$

porque $\mathbb{Q}$ es despreciable frente a $\lambda$.

---

## 2. Sigma-álgebras y medidas

Una **sigma-álgebra** $\mathcal{A}$ sobre un conjunto $X$ es una familia de subconjuntos que cumple:

1. $X \in \mathcal{A}$.
2. Si $A \in \mathcal{A}$, entonces $A^{c} = X \setminus A \in \mathcal{A}$.
3. Si $A_1, A_2, \dots \in \mathcal{A}$, entonces $\bigcup_{n=1}^{\infty} A_n \in \mathcal{A}$.

Los elementos de $\mathcal{A}$ se llaman **conjuntos medibles**. De las tres propiedades se deduce que $\emptyset \in \mathcal{A}$ y que la intersección numerable de medibles es medible.

Una **medida** es una función $\mu: \mathcal{A} \to [0, \infty]$ con:

1. $\mu(\emptyset) = 0$.
2. **Aditividad numerable:** si $A_i$ son disjuntos dos a dos,
$$\mu\left(\bigcup_{n=1}^{\infty} A_n\right) = \sum_{n=1}^{\infty} \mu(A_n).$$

**Propiedades inmediatas.** Si $A \subseteq B$, entonces $\mu(A) \leq \mu(B)$ (monotonía). Si además $\mu(B) < \infty$, entonces $\mu(B \setminus A) = \mu(B) - \mu(A)$. La sucesión $A_n \uparrow A$ cumple $\mu(A_n) \to \mu(A)$ (continuidad desde abajo).

**Mini-ejemplo.** En $X = \{a, b, c\}$ con la medida de conteo, $\mu(\{a, b\}) = 2$; con la medida de Dirac $\delta_a$, $\delta_a(\{a\}) = 1$, pero $\delta_a(\{b\}) = 0$.

---

## 3. La medida de Lebesgue y los conjuntos de medida cero

En $\mathbb{R}$ (y en $\mathbb{R}^n$) existe una medida privilegiada, la **medida de Lebesgue** $\lambda$, que generaliza la longitud:

1. $\lambda([a, b]) = \lambda((a, b)) = b - a$.
2. $\lambda(\mathbb{R}) = \infty$ y $\lambda(\emptyset) = 0$.
3. Es **invariante por traslación:** $\lambda(A + t) = \lambda(A)$ para todo $t$.

Un conjunto $N$ tiene **medida cero** si para cada $\varepsilon > 0$ se puede cubrir con intervalos de longitud total menor que $\varepsilon$. Todo conjunto numerable tiene medida cero. Si una propiedad vale salvo en un conjunto de medida cero, se dice que vale **en casi todo punto** (c.t.p.).

**Mini-ejemplo.** El conjunto de Cantor es no numerable y sin embargo $\lambda(\mathcal{C}) = 0$: "pocos elementos" y "medida pequeña" son conceptos distintos.

**Advertencia.** Con el axioma de elección se construye el conjunto de Vitali, que **no es medible**. Por eso la sigma-álgebra de Lebesgue excluye ciertos subconjuntos patológicos.

---

## 4. Funciones medibles

Sea $(X, \mathcal{A})$ un espacio medible. Una función $f: X \to \mathbb{R}$ es **medible** si la preimagen de todo conjunto de Borel es medible. Basta verificar una condición:

$$f^{-1}\big((a, \infty]\big) \in \mathcal{A} \qquad \forall a \in \mathbb{R}.$$

**Propiedades de clausura.** Si $f$ y $g$ son medibles, también lo son $f + g$, $fg$, $\max(f,g)$, $\min(f,g)$, $|f|$ y $f^{+} = \max(f,0)$, $f^{-} = \max(-f,0)$. Los límites puntuales, el supremo y el ínfimo de sucesiones de funciones medibles son medibles.

**Mini-ejemplo.** Toda función continua es medible, porque la preimagen de un abierto es abierta y todo abierto es de Borel. En particular $f(x) = x^3$ y $f(x) = 1/x$ en $(0,1)$ son medibles.

---

## 5. La integral de Lebesgue

Se construye en tres pasos, del caso más simple al general.

1. **Funciones simples.** Si $\phi = \sum_{i=1}^{n} c_i \chi_{A_i}$ con $A_i$ medibles disjuntos, se define
$$\int \phi \, d\mu = \sum_{i=1}^{n} c_i \,\mu(A_i).$$
2. **Funciones no negativas.** Para $f \geq 0$ medible,
$$\int f \, d\mu = \sup\left\{\int \phi \, d\mu : 0 \leq \phi \leq f,\ \phi \text{ simple}\right\}.$$
3. **Funciones generales.** Se escribe $f = f^{+} - f^{-}$ y se define $\int f = \int f^{+} - \int f^{-}$, con la integral definida siempre que no aparezca $\infty - \infty$.

Se dice que $f$ es **integrable** (o $f \in L^{1}(\mu)$) si $\int |f| \, d\mu < \infty$.

**Propiedades.** Linealidad, monotonía ($f \leq g \Rightarrow \int f \leq \int g$) y $\left|\int f\right| \leq \int |f|$. Toda función Riemann-integrable es Lebesgue-integrable y ambas integrales coinciden.

**Mini-ejemplo.** Para la función simple $\phi = 2\chi_{[0,1]} + 3\chi_{[1,2]}$,
$$\int \phi \, d\lambda = 2\lambda([0,1]) + 3\lambda([1,2]) = 2 + 3 = 5.$$

---

## 6. Los teoremas de convergencia

Son la razón de ser de la teoría: permiten intercambiar límite e integral sin continuidad ni convergencia uniforme.

**Convergencia monótona (Levi).** Si $0 \leq f_n \uparrow f$ c.t.p., entonces
$$\lim_{n \to \infty} \int f_n \, d\mu = \int f \, d\mu.$$

**Lema de Fatou.** Si $f_n \geq 0$, entonces
$$\int \liminf_{n \to \infty} f_n \, d\mu \leq \liminf_{n \to \infty} \int f_n \, d\mu.$$

**Convergencia dominada (Lebesgue).** Si $f_n \to f$ c.t.p. y existe $g \in L^{1}$ con $|f_n| \leq g$ para todo $n$, entonces
$$\lim_{n \to \infty} \int f_n \, d\mu = \int f \, d\mu.$$

**Mini-ejemplo.** Con $f_n(x) = (1 + x/n)^n$ en $[0,1]$, la sucesión crece a $e^{x}$ y la convergencia monótona da
$$\lim_{n \to \infty} \int_0^1 \left(1 + \frac{x}{n}\right)^{n} dx = \int_0^1 e^{x} \, dx = e - 1.$$

---

## 7. Espacios $L^{p}$

Para $1 \leq p < \infty$ se define
$$\|f\|_p = \left(\int |f|^{p} \, d\mu\right)^{1/p}, \qquad L^{p}(\mu) = \left\{f : \|f\|_p < \infty\right\},$$
identificando funciones que coinciden c.t.p.

**Desigualdades fundamentales.**
1. **Hölder:** si $\frac{1}{p} + \frac{1}{q} = 1$, entonces
$$\|fg\|_1 \leq \|f\|_p \,\|g\|_q.$$
2. **Minkowski:** $\|f + g\|_p \leq \|f\|_p + \|g\|_p$ (desigualdad triangular).

**Completitud.** Los espacios $L^{p}$ son de **Banach** (completos con la norma $\|\cdot\|_p$). El caso $p = 2$ es especial: es un espacio de **Hilbert** con producto interno
$$\langle f, g \rangle = \int f \bar{g} \, d\mu, \qquad \|f\|_2 = \sqrt{\langle f, f \rangle}.$$

**Mini-ejemplo.** En $L^{2}[0,1]$, $\|1\|_2 = \sqrt{\int_0^1 1^2 dx} = 1$ y $\|x\|_2 = \sqrt{\int_0^1 x^2 dx} = \frac{1}{\sqrt{3}}$. En cambio $f(x) = x^{-1/2}$ está en $L^{1}(0,1)$ porque $\int_0^1 x^{-1/2} dx = 2 < \infty$.

---

## Ejercicios (20)

### Nivel 1 — Medida y conjuntos de medida cero

1. Demuestra que todo conjunto numerable de $\mathbb{R}$ tiene medida de Lebesgue cero.
2. Calcula $\lambda(\mathbb{Q} \cap [0,1])$.
3. Sea $\mu$ la medida de conteo en $\mathbb{N}$. Calcula $\mu(\{2,4,6\})$.
4. Prueba que si $A \subseteq B$ son medibles, entonces $\mu(A) \leq \mu(B)$.
5. Calcula la medida del conjunto de Cantor.

### Nivel 2 — Funciones medibles e integral de Lebesgue

6. Calcula $\displaystyle\int_0^1 \chi_{\mathbb{Q}} \, d\lambda$.
7. Calcula $\displaystyle\int \phi \, d\lambda$ para $\phi = 3\chi_{[0,1]} + 2\chi_{[1,3]}$.
8. ¿Es medible la función característica $\chi_{[0,1]}$? Justifica.
9. Calcula $\displaystyle\int_0^1 x \, d\lambda$.
10. ¿Pertenece $f(x) = x^{-1/2}$ a $L^{1}(0,1)$? Indica su integral.

### Nivel 3 — Teoremas de convergencia

11. Calcula $\displaystyle\lim_{n\to\infty}\int_0^1 \frac{x^{n}}{1+x}\,d\lambda$.
12. Calcula $\displaystyle\lim_{n\to\infty}\int_0^1 \left(1+\frac{x}{n}\right)^{n} d\lambda$.
13. Para $f_n = n\chi_{(0,1/n)}$, compara $\displaystyle\int \liminf f_n$ con $\displaystyle\liminf \int f_n$.
14. Calcula $\displaystyle\lim_{n\to\infty}\int_0^1 \frac{nx}{1+n^{2}x^{2}}\,d\lambda$.
15. Calcula $\displaystyle\lim_{n\to\infty}\int_0^1 n x^{n-1}\,d\lambda$.

### Nivel 4 — Espacios $L^{p}$

16. ¿Está $f(x) = x^{-2}$ en $L^{1}(0,1)$?
17. Calcula $\|1\|_2$ en $L^{2}[0,1]$.
18. Verifica Hölder para $f = x$, $g = 1$ en $[0,1]$ con $p = q = 2$.
19. ¿Es completo $L^{2}(0,1)$?
20. Calcula $\|x\|_2$ en $L^{2}[0,1]$.

---

## Respuestas

1. Se cubre el $n$-ésimo punto con un intervalo de longitud $\varepsilon/2^{n}$; la suma total es $\leq \varepsilon$.
2. $0$.
3. $3$.
4. $B = A \cup (B \setminus A)$ con unión disjunta; por aditividad $\mu(B) = \mu(A) + \mu(B\setminus A) \geq \mu(A)$.
5. $0$.
6. $0$, porque $\lambda(\mathbb{Q}) = 0$.
7. $3 + 2 = 5$.
8. Sí: $[0,1]$ es de Borel y su preimagen es el propio conjunto.
9. $\dfrac{1}{2}$.
10. Sí; $\displaystyle\int_0^1 x^{-1/2}\,dx = 2 < \infty$.
11. $0$ (convergencia dominada con $g = 1$).
12. $e - 1$.
13. $\displaystyle\int \liminf f_n = 0 < \liminf \int f_n = 1$.
14. $0$.
15. $1$, pues $\displaystyle\int_0^1 n x^{n-1}\,dx = 1$ para todo $n$.
16. No; $\displaystyle\int_0^1 x^{-2}\,dx = \infty$.
17. $1$.
18. $\|fg\|_1 = \dfrac{1}{2} \leq \|f\|_2\|g\|_2 = \dfrac{1}{\sqrt{3}} \approx 0.577$.
19. Sí, por el teorema de Riesz-Fischer.
20. $\dfrac{1}{\sqrt{3}}$.
