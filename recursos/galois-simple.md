# Teoría de cuerpos y Galois

## Extensiones de cuerpos y grado

Una **extensión de cuerpos** es una pareja de cuerpos $F \subseteq K$, denotada $K/F$; se dice que $K$ es una extensión de $F$. El **grado** es la dimensión de $K$ como espacio vectorial sobre $F$:
$$[K:F]=\dim_F K.$$
La extensión es **finita** cuando $[K:F]<\infty$ y **algebraica** cuando todo elemento de $K$ es raíz de un polinomio no nulo con coeficientes en $F$.

**Extensiones simples.** Si $K=F(\alpha)$, donde $F(\alpha)$ es el menor subcuerpo que contiene a $F$ y a $\alpha$, la extensión es **simple**. Todo elemento de $F(\alpha)$ es una expresión racional en $\alpha$ con coeficientes en $F$:
$$F(\alpha)=\left\{\frac{p(\alpha)}{q(\alpha)} : p,q\in F[x],\ q(\alpha)\neq 0\right\}.$$

**Teorema de la torre.** Si $F\subseteq E\subseteq K$, entonces
$$[K:F]=[K:E]\cdot[E:F].$$

**Corolario.** Si $[K:F]$ es primo, no existen cuerpos intermedios propios entre $F$ y $K$.

**Mini-ejemplo.** $[\mathbb{Q}(\sqrt{2}):\mathbb{Q}]=2$, pues $\{1,\sqrt{2}\}$ es base; $[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}]=3$; $[\mathbb{C}:\mathbb{R}]=2$.

## Elementos algebraicos y polinomio mínimo

Sea $K/F$ una extensión y $\alpha\in K$.

- $\alpha$ es **algebraico** sobre $F$ si existe $p\in F[x]$, $p\neq 0$, con $p(\alpha)=0$.
- $\alpha$ es **trascendente** si no es algebraico (por ejemplo $\pi$ y $e$ sobre $\mathbb{Q}$).

**Polinomio mínimo.** Si $\alpha$ es algebraico, el **polinomio mínimo** $m_\alpha(x)$ es el polinomio mónico de menor grado que anula a $\alpha$.

**Teorema.** $m_\alpha$ es irreducible sobre $F$, divide a todo polinomio de $F[x]$ que anula a $\alpha$, y
$$[F(\alpha):F]=\deg m_\alpha.$$
Además $F(\alpha)\cong F[x]/(m_\alpha)$.

**Conjugados.** Las raíces de $m_\alpha$ en una clausura algebraica son los **conjugados** de $\alpha$; todo automorfismo de la extensión envía $\alpha$ a uno de sus conjugados.

**Mini-ejemplo.** Sobre $\mathbb{Q}$: $m_{\sqrt{2}}=x^2-2$; $m_{\sqrt[3]{2}}=x^3-2$ (irreducible por Eisenstein con $p=2$); $m_{\sqrt{2}+\sqrt{3}}=x^4-10x^2+1$.

## Cuerpo de descomposición

El **cuerpo de descomposición** de $f\in F[x]$ es el menor cuerpo que contiene a $F$ y a todas las raíces de $f$; allí $f$ se factoriza como producto de factores lineales.

**Teorema.** Todo $f\in F[x]$ tiene un cuerpo de descomposición, único salvo $F$-isomorfismo.

**Normalidad.** $K/F$ es **normal** si todo polinomio irreducible de $F[x]$ con una raíz en $K$ tiene todas sus raíces en $K$. Equivalentemente, $K$ es el cuerpo de descomposición de una familia de polinomios.

**Teorema del grado.** Si $f$ es separable de grado $n$ y $K$ es su cuerpo de descomposición, entonces
$$[K:F]=\left|\mathrm{Gal}(K/F)\right|,$$
y $\mathrm{Gal}(K/F)$ se identifica con un subgrupo de $S_n$.

**Mini-ejemplo.** Para $f=x^3-2$ sobre $\mathbb{Q}$, con $\omega=e^{2\pi i/3}$, el cuerpo de descomposición es $\mathbb{Q}(\sqrt[3]{2},\omega)$ y $[\mathbb{Q}(\sqrt[3]{2},\omega):\mathbb{Q}]=6$.

## El grupo de Galois

El **grupo de Galois** de $K/F$ es el conjunto de automorfismos de $K$ que fijan $F$ punto a punto, con la composición:
$$\mathrm{Gal}(K/F)=\{\sigma\in\mathrm{Aut}(K) : \sigma(a)=a \text{ para todo } a\in F\}.$$

**Propiedades.**

1. Cada $\sigma\in\mathrm{Gal}(K/F)$ permuta las raíces del polinomio mínimo de cada elemento.
2. Si $K$ es el cuerpo de descomposición de un polinomio de grado $n$, entonces $\mathrm{Gal}(K/F)$ es un subgrupo de $S_n$.
3. $\left|\mathrm{Gal}(K/F)\right|\leq [K:F]$, con igualdad si y solo si $K/F$ es **de Galois** (normal y separable; automático en característica $0$).

**Mini-ejemplo.** $\mathrm{Gal}(\mathbb{Q}(\sqrt{2})/\mathbb{Q})=\{\mathrm{id},\sigma\}$ con $\sigma(\sqrt{2})=-\sqrt{2}$; es isomorfo a $\mathbb{Z}_2$.

## La correspondencia de Galois

Sea $K/F$ una extensión de Galois con $G=\mathrm{Gal}(K/F)$.

**Teorema fundamental.** Hay una biyección que invierte inclusiones entre cuerpos intermedios y subgrupos:
$$\{E : F\subseteq E\subseteq K\}\ \longleftrightarrow\ \{H : H\leq G\},$$
dada por $E\mapsto \mathrm{Gal}(K/E)$ y $H\mapsto K^H=\{\alpha\in K : \sigma(\alpha)=\alpha \text{ para todo } \sigma\in H\}$.

**Propiedades.**

1. $[K:E]=|H|$ y $[E:F]=[G:H]$.
2. $E/F$ es normal (y por tanto de Galois) si y solo si $H\trianglelefteq G$; en tal caso
$$\mathrm{Gal}(E/F)\cong G/H.$$
3. El retículo de subcuerpos es el retículo de subgrupos invertido.

**Mini-ejemplo.** Para $\mathbb{Q}(\sqrt{2},\sqrt{3})/\mathbb{Q}$ el grupo es $\mathbb{Z}_2\times\mathbb{Z}_2$; sus tres subgrupos de orden $2$ corresponden a $\mathbb{Q}(\sqrt{2})$, $\mathbb{Q}(\sqrt{3})$ y $\mathbb{Q}(\sqrt{6})$.

## Solubilidad por radicales

Un elemento es **expresable por radicales** si se obtiene de los coeficientes con sumas, restas, productos, cocientes y extracción de raíces $n$-ésimas. Un polinomio es **soluble por radicales** si todas sus raíces lo son.

Un grupo finito $G$ es **soluble** si existe una cadena
$$\{e\}=G_0\trianglelefteq G_1\trianglelefteq\cdots\trianglelefteq G_n=G$$
cuyos cocientes $G_{i+1}/G_i$ son abelianos.

**Teorema de Galois.** Sea $f\in F[x]$ separable, con $\mathrm{char}(F)=0$ y cuerpo de descomposición $K$. Entonces $f$ es soluble por radicales sobre $F$ si y solo si $\mathrm{Gal}(K/F)$ es un grupo soluble.

**Teorema de Abel-Ruffini.** La ecuación general de grado $n\geq 5$ no es soluble por radicales, porque $\mathrm{Gal}(K/F)=S_n$ y $S_n$ no es soluble para $n\geq 5$ (contiene al subgrupo simple no abeliano $A_n$).

**Mini-ejemplo.** $S_3$ y $S_4$ son solubles, luego las ecuaciones generales de grados $3$ y $4$ sí se resuelven por radicales; $S_5$ no lo es.

## Imposibilidades clásicas

Un número real es **construible** con regla y compás si y solo si está en una torre de extensiones cuadráticas de $\mathbb{Q}$; en consecuencia, su grado sobre $\mathbb{Q}$ es una potencia de $2$ y el polígono regular de $n$ lados es construible si y solo si
$$\varphi(n)=2^k.$$

Los tres problemas griegos:

1. **Duplicar el cubo.** Construir $\sqrt[3]{2}$ exigiría grado $3$, que no es potencia de $2$: **imposible**.
2. **Trisecar el ángulo.** Trisecar $60^\circ$ equivale a resolver $x^3-3x-1=0$, irreducible de grado $3$: **imposible** en general.
3. **Cuadrar el círculo.** Construir un cuadrado de área $\pi$ exigiría que $\pi$ fuera algebraico; Lindemann probó que $\pi$ es **trascendente**: **imposible**.

**Construcciones posibles.** El pentágono ($\varphi(5)=4$), el hexágono y el heptadecágono ($\varphi(17)=16$) sí son construibles; el heptágono no ($\varphi(7)=6$).

**Mini-ejemplo.** $\sqrt{2+\sqrt{2}}$ es construible porque se obtiene con dos raíces cuadradas sucesivas; el ángulo de $20^\circ$ no lo es porque $2\cos 20^\circ$ tiene grado $3$.

## Ejercicios (20)

### Nivel 1 · Básico

1. Calcula $[\mathbb{Q}(\sqrt{7}):\mathbb{Q}]$.
2. Halla el polinomio mínimo de $\sqrt{2}$ sobre $\mathbb{Q}$.
3. ¿Cuál es $[\mathbb{Q}(\sqrt[3]{5}):\mathbb{Q}]$?
4. Determina $\mathrm{Gal}(\mathbb{Q}(\sqrt{3})/\mathbb{Q})$.
5. ¿Cuánto vale $[\mathbb{C}:\mathbb{R}]$?

### Nivel 2 · Intermedio

6. Halla el polinomio mínimo de $\zeta_5=e^{2\pi i/5}$ sobre $\mathbb{Q}$.
7. Calcula $[\mathbb{Q}(\sqrt{2},\sqrt{5}):\mathbb{Q}]$.
8. Halla el grupo de Galois de $x^2-3$ sobre $\mathbb{Q}$.
9. ¿Es $\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$ una extensión de Galois?
10. Halla el cuerpo de descomposición de $x^3-1$ sobre $\mathbb{Q}$ y su grado.

### Nivel 3 · Avanzado

11. Calcula $[\mathbb{Q}(\sqrt{2},\sqrt{3},\sqrt{5}):\mathbb{Q}]$.
12. Halla el grupo de Galois de $x^4-2$ sobre $\mathbb{Q}$.
13. Halla el polinomio mínimo de $i+\sqrt{2}$ sobre $\mathbb{Q}$.
14. Lista los subcuerpos de $\mathbb{Q}(\sqrt{2},\sqrt{3})$.
15. ¿Es soluble por radicales la ecuación general de grado $4$? Justifica.

### Nivel 4 · Desafío

16. Demuestra que $\sqrt[3]{2}$ no es construible con regla y compás.
17. Halla el grupo de Galois de $x^5-6x+3$ sobre $\mathbb{Q}$ y decide su solubilidad.
18. ¿Es construible el polígono regular de $17$ lados?
19. ¿Es construible el polígono regular de $7$ lados?
20. Calcula el grado del cuerpo de descomposición de $x^4-2$ sobre $\mathbb{Q}$.

## Respuestas

1. $2$.
2. $x^2-2$.
3. $3$.
4. $\mathbb{Z}_2$, generado por $\sigma(\sqrt{3})=-\sqrt{3}$.
5. $2$.
6. $\Phi_5(x)=x^4+x^3+x^2+x+1$; grado $4$.
7. $4$.
8. $\mathbb{Z}_2$.
9. No: $\mathbb{Q}(\sqrt[3]{2})$ no contiene a las raíces complejas de $x^3-2$; su grupo de Galois es trivial y el grado es $3$.
10. $\mathbb{Q}(\omega)$ con $\omega=e^{2\pi i/3}$; grado $2$.
11. $8$.
12. $D_4$ (orden $8$).
13. $x^4-2x^2+9$.
14. $\mathbb{Q}$, $\mathbb{Q}(\sqrt{2})$, $\mathbb{Q}(\sqrt{3})$, $\mathbb{Q}(\sqrt{6})$.
15. Sí: $S_4$ es soluble.
16. $[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}]=3$ no es potencia de $2$.
17. $S_5$; no es soluble por radicales (Abel-Ruffini).
18. Sí: $\varphi(17)=16=2^4$.
19. No: $\varphi(7)=6$ no es potencia de $2$.
20. $8$.
