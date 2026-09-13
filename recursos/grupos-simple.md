# Teoría de grupos
**Guía simple · Álgebra superior · Univ 3–4**
*Subgrupos, homomorfismos, acciones y teoremas de Sylow.*

## 1. Grupos y ejemplos fundamentales
Un **grupo** $(G, *)$ es un conjunto con una operación que cumple cuatro axiomas:

1. **Cerradura:** $a * b \in G$ para todo $a, b \in G$.
2. **Asociatividad:** $(a * b) * c = a * (b * c)$.
3. **Identidad:** existe $e \in G$ con $e * a = a * e = a$.
4. **Inversos:** para cada $a$ existe $a^{-1}$ con $a * a^{-1} = a^{-1} * a = e$.

El grupo es **abeliano** si además $a * b = b * a$. El **orden** $|G|$ es su número de elementos; el **orden de un elemento** $g$ es el menor $n > 0$ con $g^n = e$.

Las familias más importantes aparecen una y otra vez:

1. **Cíclicos** $\mathbb{Z}_n$: generados por un solo elemento; $|\mathbb{Z}_n| = n$.
2. **Simétricos** $S_n$: permutaciones de $n$ símbolos; $|S_n| = n!$.
3. **Alternantes** $A_n$: permutaciones pares; $|A_n| = n!/2$ para $n \geq 2$.
4. **Diedrales** $D_n$: simetrías del polígono regular de $n$ lados; $|D_n| = 2n$.
5. **Lineales** $GL_n(\mathbb{R})$: matrices invertibles de $n \times n$.
6. **Enteros módulo $n$** bajo suma: el modelo concreto de $\mathbb{Z}_n$.

**Mini-ejemplo.** En $S_3$ la transposición $(1\,2)$ cumple $(1\,2)^2 = e$, luego tiene orden $2$. El ciclo $(1\,2\,3)$ cumple $(1\,2\,3)^3 = e$ y no antes: orden $3$. Y $|S_3| = 3! = 6$.

## 2. Subgrupos y el teorema de Lagrange
$H \subseteq G$ es **subgrupo**, escrito $H \leq G$, si es cerrado bajo la operación e inversos. El criterio práctico evita verificarlo todo:
$$H \neq \emptyset \quad \text{y} \quad a, b \in H \Rightarrow a b^{-1} \in H$$

**Teorema de Lagrange.** Si $G$ es finito y $H \leq G$, entonces
$$|G| = |H| \cdot [G : H]$$
donde $[G : H]$ es el **índice**, el número de clases laterales. En particular, el orden de $H$ **divide** al orden de $G$.

**Consecuencias directas:**

1. El orden de todo elemento divide a $|G|$ (se aplica a $\langle g\rangle$).
2. Todo grupo de orden primo es cíclico y no tiene subgrupos propios.
3. El recíproco de Lagrange es **falso**: $A_4$ tiene orden $12$ pero no posee subgrupo de orden $6$.
4. En $\mathbb{Z}_n$ hay exactamente un subgrupo por cada divisor $d$ de $n$.

**Mini-ejemplo.** En $\mathbb{Z}_6$ los divisores de $6$ son $1, 2, 3, 6$, de modo que hay cuatro subgrupos: $\{0\}$, $\{0, 3\}$, $\{0, 2, 4\}$ y $\mathbb{Z}_6$. El de orden $3$ es $\langle 2\rangle$ y el de orden $2$ es $\langle 3\rangle$.

## 3. Homomorfismos, normales y cocientes
Un **homomorfismo** es una función que preserva la operación:
$$\phi(a * b) = \phi(a) * \phi(b)$$
Su **núcleo** $\ker\phi = \{a : \phi(a) = e\}$ mide la pérdida de información y su **imagen** $\operatorname{Im}\phi$ es el alcance. Se tiene:
$$\phi \text{ es inyectiva} \iff \ker\phi = \{e\}$$

**Teorema de isomorfía.** Para todo homomorfismo $\phi: G \to H$,
$$G/\ker\phi \cong \operatorname{Im}\phi$$

Un subgrupo $N \leq G$ es **normal**, $N \trianglelefteq G$, si $gNg^{-1} = N$ para todo $g \in G$. Esto equivale a que las clases laterales izquierdas y derechas coincidan, y es la condición que permite dar al cociente $G/N$ estructura de grupo con la operación inducida. Todo subgrupo de índice $2$ es normal.

Son normales destacados el **centro** $Z(G) = \{g : gx = xg \ \forall x\}$ y el **subgrupo conmutador** $[G, G]$, generado por los productos $aba^{-1}b^{-1}$; el segundo mide cuán no abeliano es el grupo.

**Mini-ejemplo.** La reducción $\phi: \mathbb{Z} \to \mathbb{Z}_5$, $\phi(n) = n \bmod 5$, tiene núcleo $\ker\phi = 5\mathbb{Z}$ e imagen todo $\mathbb{Z}_5$. Por isomorfía, $\mathbb{Z}/5\mathbb{Z} \cong \mathbb{Z}_5$. En un grupo abeliano todo subgrupo es normal.

## 4. Acciones de grupo
Una **acción** de $G$ sobre un conjunto $X$ es un homomorfismo $\rho: G \to \operatorname{Perm}(X)$: cada $g$ mueve los elementos de $X$ respetando la estructura. Dos conceptos organizan todo:

1. **Órbita:** $Gx = \{gx : g \in G\}$.
2. **Estabilizador:** $G_x = \{g : gx = x\}$, que es un subgrupo.

**Teorema órbita-estabilizador.**
$$|Gx| = \frac{|G|}{|G_x|} = [G : G_x]$$

La **fórmula de clases** descompone el grupo en su centro y las clases de conjugación:
$$|G| = |Z(G)| + \sum_i [G : C_G(g_i)]$$
donde $C_G(g) = \{x : xg = gx\}$ es el centralizador y $|\operatorname{cl}(g)| = [G : C_G(g)]$.

**Fórmula de Burnside.** El número de órbitas es
$$\#\text{órbitas} = \frac{1}{|G|}\sum_{g \in G} |X^g|$$
con $X^g$ el conjunto de puntos fijos de $g$. Cuenta configuraciones únicas salvo simetría.

**Mini-ejemplo.** Colorear las caras de un cubo con dos colores, salvo rotación: Burnside sobre las $24$ rotaciones da $10$ coloraciones distintas. Para el estabilizador de un vértice en $D_4$: hay $2$ simetrías que lo fijan y su órbita tiene $8/2 = 4$ vértices, como debe ser.

## 5. Teoremas de Sylow
Sea $|G| = p^m \cdot r$ con $p$ primo y $p \nmid r$. Un **$p$-subgrupo de Sylow** es un subgrupo de orden $p^m$ (la mayor potencia de $p$ posible).

**Teoremas de Sylow.**

1. **Existencia:** existe al menos un Sylow $p$-subgrupo.
2. **Conjugación:** todos los Sylow $p$-subgrupos son conjugados entre sí.
3. **Conteo:** si $n_p$ es su número, entonces
$$n_p \equiv 1 \pmod p, \qquad n_p \mid r, \qquad n_p = [G : N_G(P)]$$

Consecuencia central: $n_p = 1$ si y solo si el único Sylow $p$-subgrupo es **normal**.

**Aplicaciones típicas.**

1. Demostrar que un grupo de orden dado no es simple, mostrando que algún $n_p = 1$.
2. Probar que todo grupo de orden $pq$ con $p < q$ y $p \nmid (q - 1)$ es cíclico.
3. **Teorema de Cauchy:** si $p \mid |G|$, entonces $G$ tiene un elemento de orden $p$.
4. Un $p$-grupo finito tiene centro no trivial.

**Mini-ejemplo.** Sea $|G| = 15 = 3 \cdot 5$. Para $p = 3$: $n_3 \mid 5$ y $n_3 \equiv 1 \pmod 3$, luego $n_3 = 1$. Para $p = 5$: $n_5 \mid 3$ y $n_5 \equiv 1 \pmod 5$, luego $n_5 = 1$. Ambos Sylow son normales y $G \cong \mathbb{Z}_3 \times \mathbb{Z}_5 \cong \mathbb{Z}_{15}$.

## 6. Clasificación de grupos pequeños
La clasificación describe todos los grupos de un orden dado salvo isomorfismo. Los casos básicos son:

1. Orden $p$ primo: solo $\mathbb{Z}_p$ (cíclico).
2. Orden $p^2$: solo $\mathbb{Z}_{p^2}$ o $\mathbb{Z}_p \times \mathbb{Z}_p$; todo grupo de orden $p^2$ es abeliano.
3. Orden $4$: $\mathbb{Z}_4$ y $\mathbb{Z}_2 \times \mathbb{Z}_2$.
4. Orden $6$: $\mathbb{Z}_6$ y $S_3$ (el único no abeliano).
5. Orden $8$: $\mathbb{Z}_8$, $\mathbb{Z}_4 \times \mathbb{Z}_2$, $\mathbb{Z}_2^3$, $D_4$ y $Q_8$.
6. Orden $9$: $\mathbb{Z}_9$ y $\mathbb{Z}_3 \times \mathbb{Z}_3$.
7. Orden $pq$ con $p < q$ y $p \nmid (q-1)$: solo el cíclico $\mathbb{Z}_{pq}$.

Un dato útil de aritmética: $\mathbb{Z}_m \times \mathbb{Z}_n \cong \mathbb{Z}_{mn}$ si y solo si $\gcd(m, n) = 1$.

**Mini-ejemplo.** Para orden $6$: como $6 = 2 \cdot 3$ y $2 \mid (3-1)$, existen dos grupos, el cíclico $\mathbb{Z}_6$ y el no abeliano $S_3$. Para orden $9 = 3^2$ hay exactamente dos, ambos abelianos.

## 7. Ejemplos resueltos
**Ejemplo 1 (orden de un elemento).** Orden de $(1\,2\,3\,4)$ en $S_4$.
- Es un ciclo de longitud $4$.
- $(1\,2\,3\,4)^4 = e$ y ninguna potencia menor: orden $4$.

**Ejemplo 2 (Lagrange).** ¿Existe un subgrupo de orden $3$ en $\mathbb{Z}_{12}$?
- $3 \mid 12$, así que Lagrange no lo prohíbe.
- Sí: $\langle 4\rangle = \{0, 4, 8\}$.

**Ejemplo 3 (cociente).** Identifica $\mathbb{Z}/6\mathbb{Z}$.
- El núcleo de $\phi(n) = n \bmod 6$ es $6\mathbb{Z}$.
- Por el teorema de isomorfía, $\mathbb{Z}/6\mathbb{Z} \cong \mathbb{Z}_6$.

**Ejemplo 4 (Burnside).** Collares de $4$ cuentas con $2$ colores, rotaciones identificadas.
- Identidad fija $2^4 = 16$; dos rotaciones de $90°$ fijan $2$ cada una; la de $180°$ fija $2^2 = 4$.
- Burnside: $(16 + 2 + 2 + 4)/4 = 6$ collares distintos.

**Ejemplo 5 (Sylow).** Demuestra que todo grupo de orden $15$ es cíclico.
- $n_3 \mid 5$ y $n_3 \equiv 1 \pmod 3$ implican $n_3 = 1$.
- $n_5 \mid 3$ y $n_5 \equiv 1 \pmod 5$ implican $n_5 = 1$.
- Ambos Sylow son normales y $G \cong \mathbb{Z}_3 \times \mathbb{Z}_5 \cong \mathbb{Z}_{15}$.

**Ejemplo 6 (acción).** ¿Cuántas simetrías de $D_4$ fijan el vértice $1$?
- El estabilizador contiene la identidad y la reflexión por la diagonal.
- $|G_x| = 2$, así que la órbita tiene $8/2 = 4$ vértices: coherente.

## Ejercicios (20)
### Nivel 1 — Fundamentos
1. Halla el orden de $(1\,2\,3)$ en $S_4$.
2. Halla el orden de $\bar{5}$ en $\mathbb{Z}_{12}$.
3. ¿Es $(\mathbb{Z}, \cdot)$ un grupo?
4. ¿Cuál es el orden de $D_5$, el grupo de simetrías del pentágono?
5. ¿Cuántos elementos tiene $S_4$?

### Nivel 2 — Subgrupos y Lagrange
6. ¿Cuántos subgrupos tiene $\mathbb{Z}_8$?
7. ¿Puede $\mathbb{Z}_{10}$ tener un subgrupo de orden $4$?
8. Halla el orden de $\bar{6}$ en $\mathbb{Z}_{15}$.
9. Calcula el índice $[\mathbb{Z}_{20} : \langle 4\rangle]$.
10. ¿Cuál es el orden de $A_5$?

### Nivel 3 — Normales, cocientes y acciones
11. ¿Es $A_n$ normal en $S_n$?
12. Halla el centro de $S_3$.
13. Calcula $|\mathbb{Z}_{12} / \{0, 3, 6, 9\}|$.
14. ¿Cuál es el tamaño de la órbita de un vértice bajo $D_4$?
15. Cuenta los collares de $4$ cuentas con $2$ colores salvo rotación.

### Nivel 4 — Sylow y clasificación
16. Halla $n_3$ para un grupo de orden $45$.
17. Halla $n_5$ para un grupo de orden $20$.
18. ¿Cuántos grupos de orden $9$ hay salvo isomorfismo?
19. ¿Cuántos grupos de orden $4$ hay salvo isomorfismo?
20. ¿Es simple todo grupo de orden $15$?

## Respuestas
1. $3$
2. $12$
3. No: $2$ no tiene inverso multiplicativo entero.
4. $10$
5. $24$
6. $4$: $\{0\}$, $\{0,4\}$, $\{0,2,4,6\}$, $\mathbb{Z}_8$.
7. No: $4 \nmid 10$.
8. $5$
9. $4$
10. $60$
11. Sí: tiene índice $2$.
12. $\{e\}$, trivial.
13. $3$
14. $4$
15. $6$
16. $n_3 = 1$.
17. $n_5 = 1$.
18. Dos: $\mathbb{Z}_9$ y $\mathbb{Z}_3 \times \mathbb{Z}_3$.
19. Dos: $\mathbb{Z}_4$ y $\mathbb{Z}_2 \times \mathbb{Z}_2$.
20. No: es el cíclico $\mathbb{Z}_{15}$.
