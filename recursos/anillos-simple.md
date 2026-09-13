# Teoría de anillos

**Guía simple · Álgebra superior · Univ 4**
*Ideales, dominios, factorización y módulos.*

---

## 1. Anillos: definición y ejemplos

Un **anillo** $(R, +, \cdot)$ es un conjunto con dos operaciones tales que $(R, +)$ es grupo abeliano, el producto es asociativo y distribuye sobre la suma:

$$a(b + c) = ab + ac, \qquad (b + c)a = ba + ca$$

Es **conmutativo** si $ab = ba$ para todo $a, b$, y **unitario** si existe $1$ con $1a = a1 = a$. Un **dominio de integridad** es un anillo conmutativo unitario sin divisores de cero:

$$ab = 0 \implies a = 0 \ \text{o} \ b = 0$$

Un **cuerpo** es un anillo conmutativo unitario donde todo elemento no nulo es invertible. Todo cuerpo es dominio de integridad, pero el recíproco es falso.

**Mini-ejemplo.** $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$, $\mathbb{Z}_n$ y $\mathbb{K}[x]$ son conmutativos; $M_n(\mathbb{K})$ es unitario pero **no** conmutativo para $n \geq 2$. En $\mathbb{Z}_6$ se tiene $2 \cdot 3 = 0$ con $2, 3 \neq 0$: no es dominio. En cambio $\mathbb{Z}_7$ es cuerpo y por tanto dominio.

---

## 2. Ideales

Un **ideal** $I \subseteq R$ es un subgrupo aditivo cerrado bajo multiplicación por elementos del anillo: si $r \in R$ y $a \in I$, entonces $ra \in I$ (y también $ar \in I$ si el anillo no es conmutativo).

1. **Principal:** $I = (a) = \{ra : r \in R\}$, generado por un solo elemento.
2. **Primo:** $ab \in I \implies a \in I$ o $b \in I$.
3. **Maximal:** no existe un ideal propio $J$ con $I \subsetneq J \subsetneq R$.

**Hechos.** Todo ideal maximal es primo. En $\mathbb{Z}$ todos los ideales son principales: $(n) = n\mathbb{Z}$.

**Mini-ejemplo.** $(5)$ es primo y maximal en $\mathbb{Z}$. El ideal $(6)$ no es primo, porque $2 \cdot 3 \in (6)$ pero $2 \notin (6)$ y $3 \notin (6)$.

---

## 3. Anillos cociente e isomorfía

Si $I$ es un ideal de $R$, el cociente $R/I$ hereda las operaciones módulo $I$ y la proyección $\pi: R \to R/I$ es un homomorfismo con núcleo $I$. El diccionario fundamental es:

1. $I$ primo $\iff$ $R/I$ es un dominio de integridad.
2. $I$ maximal $\iff$ $R/I$ es un cuerpo.

**Teorema de isomorfía.** Para todo homomorfismo de anillos $\phi: R \to S$,

$$R/\ker\phi \cong \operatorname{Im}\phi$$

**Mini-ejemplo.** $\mathbb{Z}/(5) \cong \mathbb{Z}_5$ es cuerpo porque $(5)$ es maximal. Además $\mathbb{R}[x]/(x^2 + 1) \cong \mathbb{C}$, luego $(x^2 + 1)$ es maximal en $\mathbb{R}[x]$.

---

## 4. Módulos

Un **módulo** sobre un anillo $R$, o $R$-módulo, es un grupo abeliano $(M, +)$ con una acción $R \times M \to M$, $(r, m) \mapsto rm$, que satisface:

$$r(m + n) = rm + rn, \quad (r + s)m = rm + sm, \quad (rs)m = r(sm), \quad 1m = m$$

Un **submódulo** es un subgrupo cerrado bajo la acción. Los ideales son exactamente los submódulos cuando se ve $R$ como módulo sobre sí mismo. Un módulo es **libre** de rango $n$ si $M \cong R^n$.

**Mini-ejemplo.** $\mathbb{Z}^n$ es un $\mathbb{Z}$-módulo libre y todo grupo abeliano es un $\mathbb{Z}$-módulo. Sobre un DIP, todo submódulo de $R^n$ es libre.

---

## 5. DIP, DFU y dominios euclídeos

1. **DIP** (dominio de ideales principales): todo ideal es principal.
2. **DFU** (dominio de factorización única): todo elemento no nulo y no invertible se factoriza de forma única en irreducibles.
3. **Dominio euclídeo:** existe una norma $N$ que permite la división con resto.

Se tiene la cadena de implicaciones:

$$\text{euclídeo} \implies \text{DIP} \implies \text{DFU} \implies \text{dominio}$$

**Mini-ejemplo.** $\mathbb{Z}$ y $\mathbb{K}[x]$ son euclídeos (normas $|n|$ y $\deg$). En $\mathbb{Z}[x]$ el ideal $(2, x)$ no es principal, así que no es DIP aunque sí es DFU. En $\mathbb{Z}[\sqrt{-5}]$ falla la unicidad: $6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$.

---

## 6. Polinomios sobre un cuerpo

Si $\mathbb{K}$ es un cuerpo, $\mathbb{K}[x]$ es un dominio euclídeo con el algoritmo de la división:

$$P = QD + R, \qquad \deg R < \deg D$$

El **máximo común divisor** se obtiene con el algoritmo de Euclides (el último resto no nulo). Además, un polinomio de grado $n$ tiene a lo más $n$ raíces y

$$(x - c) \mid P(x) \iff P(c) = 0$$

**Mini-ejemplo.** Para $x^3 - 1$ y $x^2 - 1$: se tiene $x^3 - 1 = (x^2 - 1)x + (x - 1)$ y $x^2 - 1 = (x - 1)(x + 1)$, luego el mcd es $x - 1$.

---

## 7. Irreducibilidad: Eisenstein y raíces racionales

**Criterio de Eisenstein.** Sea $P = a_n x^n + \cdots + a_0 \in \mathbb{Z}[x]$. Si existe un primo $p$ tal que $p \mid a_i$ para todo $i < n$, $p \nmid a_n$ y $p^2 \nmid a_0$, entonces $P$ es irreducible sobre $\mathbb{Q}$.

**Criterio de las raíces racionales.** Si $p/q$ (en forma reducida) es raíz de $P \in \mathbb{Z}[x]$, entonces

$$p \mid a_0, \qquad q \mid a_n$$

**Mini-ejemplo.** $x^3 - 2$ es irreducible por Eisenstein con $p = 2$, y $x^4 + 10x + 5$ también con $p = 5$. En $2x^3 + x^2 - 7x - 6$ los candidatos son $\pm 1, \pm 2, \pm 3, \pm 6, \pm \tfrac{1}{2}, \pm \tfrac{3}{2}$; como $P(-1) = 0$, el binomio $x + 1$ es factor.

---

## Ejercicios (20)

### Nivel 1 — Anillos e ideales

1. ¿Es $\mathbb{Z}_6$ un dominio de integridad? Justifica.
2. Halla las unidades de $\mathbb{Z}_8$.
3. Halla los divisores de cero de $\mathbb{Z}_8$.
4. ¿Es $3\mathbb{Z}$ un ideal de $\mathbb{Z}$?
5. Explica la diferencia entre ideal primo e ideal maximal.

### Nivel 2 — Cocientes y homomorfismos

6. Describe $\mathbb{Z}/(7)$.
7. ¿Es $(4)$ un ideal primo de $\mathbb{Z}$?
8. ¿Es $(x^2 + 1)$ maximal en $\mathbb{R}[x]$?
9. Halla el núcleo de $\phi: \mathbb{Z}[x] \to \mathbb{Z}$, $\phi(P) = P(0)$.
10. Describe $\mathbb{Z}[x]/(x^2 + 1)$.

### Nivel 3 — Divisibilidad y mcd

11. ¿Es $\mathbb{Z}[\sqrt{-5}]$ un DFU?
12. ¿Es todo cuerpo un DFU?
13. Halla el mcd de $252$ y $198$.
14. Halla el mcd de $x^3 - 1$ y $x^2 - 1$ en $\mathbb{Q}[x]$.
15. ¿Es $\mathbb{Z}[x]$ un DIP?

### Nivel 4 — Polinomios e irreducibilidad

16. Aplica Eisenstein a $x^4 + 10x + 5$ sobre $\mathbb{Q}$.
17. ¿Es irreducible $x^3 - 2$ sobre $\mathbb{Q}$?
18. Lista los candidatos a raíces racionales de $x^3 - 6x^2 + 11x - 6$.
19. Factoriza $x^3 - 6x^2 + 11x - 6$ sobre $\mathbb{Q}$.
20. Halla el mcd de $x^2 - 1$ y $x^2 - 2x + 1$.

---

## Respuestas

1. No: $2 \cdot 3 = 0$ con $2, 3 \neq 0$.
2. $1, 3, 5, 7$.
3. $2, 4, 6$.
4. Sí, es cerrado bajo suma y bajo multiplicación por enteros.
5. El primo cumple $ab \in I \Rightarrow a \in I$ o $b \in I$ y da cociente dominio; el maximal no está contenido en ningún ideal propio y da cociente cuerpo. Todo maximal es primo.
6. Es $\mathbb{Z}_7$, un cuerpo porque $7$ es primo.
7. No: $2 \cdot 2 = 4 \in (4)$ pero $2 \notin (4)$.
8. Sí: $\mathbb{R}[x]/(x^2 + 1) \cong \mathbb{C}$ es cuerpo.
9. $\ker\phi = (x)$.
10. Es isomorfo a los enteros gaussianos $\mathbb{Z}[i]$.
11. No: $6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$.
12. Sí: todo elemento no nulo es invertible, la factorización es vacía y única.
13. $18$.
14. $x - 1$.
15. No: el ideal $(2, x)$ no es principal.
16. Irreducible por Eisenstein con $p = 5$ (divide $10$ y $5$; $25 \nmid 5$).
17. Sí, por Eisenstein con $p = 2$.
18. $\pm 1, \pm 2, \pm 3, \pm 6$.
19. $(x - 1)(x - 2)(x - 3)$.
20. $x - 1$.
