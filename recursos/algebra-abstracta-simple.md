# Álgebra abstracta

El **álgebra abstracta** estudia conjuntos dotados de operaciones que satisfacen ciertos axiomas, y las consecuencias que se deducen de ellos. Al fijar los axiomas se descubren propiedades comunes a números, matrices, permutaciones y simetrías.

## Operaciones y estructuras algebraicas

Una **operación binaria** sobre un conjunto $A$ es una función $*: A \times A \to A$ que asigna a cada par $(a, b)$ un único elemento $a * b \in A$. La condición de que el resultado permanezca en $A$ se llama **cerradura**.

Una **estructura algebraica** es un conjunto junto con una o más operaciones y una lista de axiomas. Las tres estructuras fundamentales son:

1. **Grupo:** una operación, con asociatividad, identidad e inversos.
2. **Anillo:** dos operaciones (suma y producto) relacionadas por la distributividad.
3. **Cuerpo:** un anillo conmutativo en el que todo elemento no nulo tiene inverso multiplicativo.

La ganancia de la abstracción es la **reutilización**: un teorema demostrado para grupos vale a la vez para los enteros, las matrices invertibles y las simetrías de un polígono.

**Mini-ejemplo.** La suma en $\mathbb{Z}$ es una operación binaria: $3 + 5 = 8 \in \mathbb{Z}$. El conjunto $\mathbb{Z}$ con la suma es un grupo; con la multiplicación no lo es, porque $2$ carece de inverso entero.

## Grupos

Un **grupo** $(G, *)$ es un conjunto $G$ con una operación $*$ que cumple:

1. **Cerradura:** $a * b \in G$ para todos $a, b \in G$.
2. **Asociatividad:** $(a * b) * c = a * (b * c)$.
3. **Identidad:** existe $e \in G$ tal que $e * a = a * e = a$ para todo $a$.
4. **Inversos:** para cada $a \in G$ existe $a^{-1} \in G$ con $a * a^{-1} = a^{-1} * a = e$.

Si además $a * b = b * a$ para todos $a, b$, el grupo es **abeliano**.

El **orden** del grupo es $|G|$, su número de elementos. El **orden de un elemento** $g$ es el menor entero $n > 0$ con $g^n = e$.

**Ejemplos.** $(\mathbb{Z}, +)$, $(\mathbb{Q} \setminus \{0\}, \cdot)$, las matrices invertibles $GL_n$, las permutaciones $S_n$ y $(\mathbb{Z}/n\mathbb{Z}, +)$.

**No-ejemplo.** $(\mathbb{Z}, \cdot)$ no es grupo: $2$ no tiene inverso multiplicativo en $\mathbb{Z}$.

**Mini-ejemplo.** En $\mathbb{Z}_{12}$ con la suma, el orden de $\bar{3}$ es $4$, porque $3, 6, 9, 0$ es la primera vez que se vuelve a $\bar{0}$.

## Anillos y cuerpos

Un **anillo** $(R, +, \cdot)$ consta de un grupo abeliano $(R, +)$ y una segunda operación $\cdot$ que es asociativa y **distribuye** sobre la suma:
$$a \cdot (b + c) = a \cdot b + a \cdot c, \qquad (a + b) \cdot c = a \cdot c + b \cdot c$$

Si $\cdot$ es conmutativa, el anillo es **conmutativo**; si existe un neutro multiplicativo $1$, es **unitario**.

Un **dominio de integridad** es un anillo conmutativo unitario sin divisores de cero: si $ab = 0$ entonces $a = 0$ o $b = 0$.

Un **cuerpo** es un anillo conmutativo unitario en el que todo elemento no nulo es invertible. Todo cuerpo es dominio de integridad; el recíproco es falso.

**Ejemplos.** $\mathbb{Z}$ es dominio pero no cuerpo; $\mathbb{Q}$, $\mathbb{R}$ y $\mathbb{C}$ son cuerpos; $\mathbb{Z}/p\mathbb{Z}$ es cuerpo si y solo si $p$ es primo; $M_n(\mathbb{R})$ es un anillo no conmutativo.

**Mini-ejemplo.** En $\mathbb{Z}_6$ se tiene $2 \cdot 3 = 6 \equiv 0$ con $2 \neq 0$ y $3 \neq 0$: hay divisores de cero, luego no es dominio de integridad.

## Homomorfismos

Un **homomorfismo** entre dos estructuras del mismo tipo es una función que **preserva las operaciones**:
$$\phi(a * b) = \phi(a) * \phi(b)$$

El **núcleo** y la **imagen** miden su comportamiento:
$$\ker \phi = \{a : \phi(a) = e\}, \qquad \text{Im}\,\phi = \{\phi(a) : a \in G\}$$

**Teorema (isomorfía).** Si $\phi: G \to H$ es un homomorfismo de grupos, entonces
$$G / \ker \phi \cong \text{Im}\,\phi$$

Un **isomorfismo** es un homomorfismo biyectivo: las dos estructuras son "la misma" salvo el nombre de sus elementos.

**Mini-ejemplo.** La reducción $\phi: \mathbb{Z} \to \mathbb{Z}_5$, $\phi(n) = n \bmod 5$, cumple $\phi(m + n) = \phi(m) + \phi(n)$. Su núcleo es $5\mathbb{Z}$ y su imagen es todo $\mathbb{Z}_5$, de modo que $\mathbb{Z}/5\mathbb{Z} \cong \mathbb{Z}_5$.

## Subestructuras

Una **subestructura** es un subconjunto que, con las operaciones heredadas, vuelve a ser una estructura del mismo tipo.

1. **Subgrupo** $H \leq G$: cerrado bajo la operación y los inversos. Criterio práctico: $H \neq \emptyset$ y $a, b \in H \Rightarrow a b^{-1} \in H$.
2. **Subgrupo normal** $N \trianglelefteq G$: cumple $gNg^{-1} = N$ para todo $g$; permite construir el cociente $G/N$.
3. **Ideal** $I \subseteq R$: cerrado bajo la suma y bajo la multiplicación por cualquier elemento del anillo; permite el cociente $R/I$.
4. **Subcuerpo:** subconjunto que es cuerpo con las operaciones heredadas.

**Teorema de Lagrange.** Si $G$ es finito y $H \leq G$, entonces $|H|$ divide a $|G|$:
$$|G| = |H| \cdot [G : H]$$

**Mini-ejemplo.** $2\mathbb{Z} \leq \mathbb{Z}$ es subgrupo, y es normal porque $\mathbb{Z}$ es abeliano. En cambio, en $S_3$ el subgrupo generado por una transposición no es normal.

## Isomorfismo y clasificación

Dos estructuras son **isomorfas** si existe una biyección que preserva las operaciones. **Clasificar** consiste en describir todas las estructuras de un tipo salvo isomorfismo.

**Ejemplos.**
1. Todo grupo cíclico de orden $n$ es isomorfo a $\mathbb{Z}_n$.
2. Solo existe un grupo de orden $5$ salvo isomorfismo: $\mathbb{Z}_5$.
3. Los grupos de orden $4$ son dos: $\mathbb{Z}_4$ y $\mathbb{Z}_2 \times \mathbb{Z}_2$.
4. Los grupos de orden $6$ son dos: $\mathbb{Z}_6$ y $S_3$.

**Mini-ejemplo.** $\mathbb{Z}_6 \cong \mathbb{Z}_2 \times \mathbb{Z}_3$ por el teorema chino del resto, ya que $2$ y $3$ son coprimos.

## El teorema de Cayley

**Teorema de Cayley.** Todo grupo finito $G$ es isomorfo a un subgrupo del grupo de permutaciones $S_n$. La demostración hace actuar a $G$ sobre sí mismo por multiplicación: cada $g$ define la biyección $x \mapsto gx$.

Así, la abstracción siempre puede concretarse: cualquier grupo abstracto se ve como simetrías de un conjunto. La idea prepara la teoría de **representaciones**, donde el grupo actúa por matrices.

**Mini-ejemplo.** $\mathbb{Z}_3 = \{0, 1, 2\}$ se representa con las permutaciones de $\{0, 1, 2\}$ dadas por las traslaciones $x \mapsto x + a$. El elemento $1$ corresponde a $(0\,1\,2)$ y el elemento $2$ a $(0\,2\,1)$.

## Ejercicios (20)

### Nivel 1 · Reconocer estructuras

1. Enumera las cuatro propiedades que definen un grupo.
2. ¿Es $(\mathbb{Z}, +)$ un grupo? ¿Es abeliano?
3. ¿Es $(\mathbb{Z}, \cdot)$ un grupo? Justifica.
4. ¿Es $(\mathbb{Q} \setminus \{0\}, \cdot)$ un grupo?
5. ¿Es $(\mathbb{R}, \cdot)$ un grupo? Justifica.

### Nivel 2 · Subgrupos y órdenes

6. Halla el orden de $\bar{3}$ en $\mathbb{Z}_{12}$.
7. ¿Es $2\mathbb{Z}$ un subgrupo de $(\mathbb{Z}, +)$?
8. Halla el orden de $\bar{5}$ en $\mathbb{Z}_{10}$.
9. ¿Es $H = \{0, 2, 4\}$ un subgrupo de $\mathbb{Z}_6$?
10. Halla el orden de $\bar{2}$ en $\mathbb{Z}_8$.

### Nivel 3 · Homomorfismos y anillos

11. ¿Es $\phi: \mathbb{Z} \to \mathbb{Z}$, $\phi(n) = 2n$, un homomorfismo?
12. Halla el núcleo de $\phi: \mathbb{Z} \to \mathbb{Z}_4$, $\phi(n) = n \bmod 4$.
13. ¿Es $\mathbb{Z}_7$ un cuerpo? ¿Y $\mathbb{Z}_8$?
14. ¿Es $(2)$ un ideal de $\mathbb{Z}$?
15. ¿Es $\mathbb{Z}_6$ un dominio de integridad?

### Nivel 4 · Clasificación e isomorfismo

16. ¿Cuántos grupos de orden $4$ hay salvo isomorfismo? Nómbralos.
17. ¿Es $\mathbb{Z}_6$ isomorfo a $\mathbb{Z}_2 \times \mathbb{Z}_3$?
18. ¿Es todo grupo de orden primo cíclico?
19. Según Cayley, ¿todo grupo finito es isomorfo a un subgrupo de permutaciones?
20. ¿Cuántos grupos de orden $6$ hay salvo isomorfismo? Nómbralos.

## Respuestas

1. Cerradura, asociatividad, identidad e inversos.
2. Sí; es abeliano.
3. No: $2$ no tiene inverso multiplicativo entero.
4. Sí; es abeliano.
5. No: $0$ no tiene inverso multiplicativo.
6. $4$, pues $3 + 3 + 3 + 3 = 12 \equiv 0$.
7. Sí: es cerrado bajo la suma y contiene los inversos.
8. $2$, pues $5 + 5 = 10 \equiv 0$.
9. Sí: $2 + 4 = 6 \equiv 0$ y los inversos están en $H$.
10. $4$, pues $2 + 2 + 2 + 2 = 8 \equiv 0$.
11. Sí: $2(m + n) = 2m + 2n$.
12. $\ker \phi = 4\mathbb{Z}$.
13. $\mathbb{Z}_7$ sí es cuerpo; $\mathbb{Z}_8$ no lo es.
14. Sí, y además es maximal.
15. No: $2 \cdot 3 = 0$ con factores no nulos.
16. Dos: $\mathbb{Z}_4$ y $\mathbb{Z}_2 \times \mathbb{Z}_2$.
17. Sí, por el teorema chino del resto.
18. Sí: sus subgrupos solo pueden tener orden $1$ o el propio orden primo.
19. Sí, es el enunciado del teorema de Cayley.
20. Dos: $\mathbb{Z}_6$ y $S_3$.
