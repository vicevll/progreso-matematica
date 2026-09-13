# Teoría de representaciones

## Representaciones de grupos
Una **representación** de un grupo $G$ sobre un espacio vectorial $V$ (sobre un cuerpo $\mathbb{K}$) es un homomorfismo
$$\rho: G \to GL(V)$$
donde $GL(V)$ es el grupo de transformaciones lineales invertibles. La **dimensión** de la representación es $\dim V$. Representar un grupo es hacerlo actuar como transformaciones lineales, de modo que la teoría de grupos se traduce en álgebra lineal.

**Definición equivalente.** Una representación es una acción de $G$ sobre $V$ por aplicaciones lineales: $g\cdot v = \rho(g)v$, con $g\cdot(h\cdot v) = (gh)\cdot v$ y $e\cdot v = v$.

Dos representaciones $\rho$ y $\rho'$ son **equivalentes** (isomorfas) si existe un isomorfismo lineal $T: V \to V'$ con $T\rho(g) = \rho'(g)T$ para todo $g$.

**Ejemplos.**
1. **Trivial:** $\rho(g) = I$ para todo $g$; dimensión $1$.
2. **Regular:** $G$ actúa sobre $\mathbb{C}[G] = \{\sum_g c_g\,g\}$ por multiplicación a izquierda; dimensión $|G|$.
3. **Permutación:** $S_n$ actúa sobre $\mathbb{C}^n$ permutando coordenadas.
4. **Signo:** $S_n \to \{\pm 1\}$ según la paridad de la permutación.

**Mini-ejemplo.** La representación de permutación de $S_3$ en $\mathbb{C}^3$ envía $(1\,2)$ a la matriz que intercambia las dos primeras coordenadas.

## Subrepresentaciones e irreducibles
Sea $\rho$ una representación en $V$. Un subespacio $W \subseteq V$ es **invariante** si $\rho(g)W \subseteq W$ para todo $g \in G$; entonces la restricción define una **subrepresentación**.

Una representación no nula $V$ es **irreducible** si sus únicos subespacios invariantes son $\{0\}$ y $V$. Es **indescomponible** si no se puede escribir como suma directa de dos subrepresentaciones no nulas.

**Suma directa.** Si $V = W_1 \oplus W_2$ con ambos invariantes, se escribe $\rho = \rho_1 \oplus \rho_2$.

**Mini-ejemplo.** La representación de permutación de $S_3$ sobre $\mathbb{C}^3$ se descompone como
$$\mathbb{C}^3 = L \oplus H, \qquad L = \langle (1,1,1)\rangle, \qquad H = \{(x_1,x_2,x_3) : x_1 + x_2 + x_3 = 0\}$$
donde $L$ es la trivial (dimensión $1$) y $H$ es irreducible (dimensión $2$).

Sobre $\mathbb{C}$ y con $G$ finito toda representación es suma directa de irreducibles; entonces "irreducible" e "indescomponible" coinciden.

## Lema de Schur
**Lema de Schur.** Sean $V$ y $W$ representaciones irreducibles y $T: V \to W$ lineal con $T\rho_V(g) = \rho_W(g)T$ para todo $g$. Entonces:
1. Si $V \not\cong W$, entonces $T = 0$.
2. Si $V = W$ y el cuerpo es $\mathbb{C}$, entonces $T = \lambda I$ para algún $\lambda \in \mathbb{C}$.

**Idea de la demostración.** El núcleo y la imagen de $T$ son subrepresentaciones. Al ser $V$ y $W$ irreducibles, $\ker T$ es $0$ o todo $V$, y $\text{Im}\,T$ es $0$ o todo $W$. Sobre $\mathbb{C}$ todo endomorfismo tiene un valor propio $\lambda$; como $T - \lambda I$ es un morfismo con núcleo no nulo, el caso 1 obliga a $T - \lambda I = 0$.

**Consecuencias.**
1. Si $G$ es abeliano, toda irreducible sobre $\mathbb{C}$ tiene dimensión $1$: cada $\rho(g)$ conmuta con la acción y por Schur es escalar.
2. El conjunto de morfismos $V \to V$ que conmutan con la acción es un álgebra de división.

**Mini-ejemplo.** En $S_3$ no existe morfismo no nulo entre la trivial y la estándar; cualquier morfismo entre copias de la estándar es un escalar.

## Caracteres
El **carácter** de una representación $\rho$ es
$$\chi_\rho(g) = \text{tr}(\rho(g))$$
El carácter es una **función de clase**: $\chi(hgh^{-1}) = \chi(g)$, por lo que basta conocerlo en las clases de conjugación.

**Propiedades.**
1. $\chi(e) = \dim V$.
2. $\chi(g^{-1}) = \overline{\chi(g)}$.
3. $\chi_{V\oplus W} = \chi_V + \chi_W$ y $\chi_{V\otimes W} = \chi_V\,\chi_W$.
4. Dos representaciones son equivalentes si y solo si tienen el mismo carácter.

**Producto interno.** Para funciones de clase sobre $G$ finito,
$$\langle \chi, \psi\rangle = \frac{1}{|G|}\sum_{g\in G}\chi(g)\,\overline{\psi(g)}$$

**Ortogonalidad.** Si $\chi_i$ son caracteres irreducibles, entonces
$$\langle \chi_i, \chi_j\rangle = \delta_{ij}$$

**Fórmula de descomposición.** La multiplicidad de $\chi_i$ en $\chi_V$ es
$$m_i = \langle \chi_V, \chi_i\rangle, \qquad V \cong \bigoplus_i V_i^{\oplus m_i}$$

**Mini-ejemplo.** Para la estándar de $S_3$, $\chi = (2,0,-1)$ en las clases $(e,(1\,2),(1\,2\,3))$ y
$$\langle\chi,\chi\rangle = \frac{1}{6}\bigl(1\cdot4 + 3\cdot0 + 2\cdot1\bigr) = 1$$
luego es irreducible.

## Teorema de Maschke y descomposición
**Teorema de Maschke.** Si $G$ es finito y $\text{car}\,\mathbb{K} = 0$ (o $\text{car}\,\mathbb{K}$ no divide a $|G|$), toda representación $V$ se descompone en suma directa de irreducibles:
$$V \cong V_1^{\oplus m_1} \oplus \cdots \oplus V_k^{\oplus m_k}$$

**Idea de la demostración.** Dada una subrepresentación $W$, se construye un proyector $G$-invariante promediando sobre el grupo:
$$P = \frac{1}{|G|}\sum_{g\in G}\rho(g)\,P_0\,\rho(g)^{-1}$$
Su núcleo proporciona el complemento invariante de $W$.

**Consecuencias.**
1. Las representaciones quedan clasificadas por sus caracteres.
2. El número de irreducibles es igual al número de clases de conjugación.
3. **Suma de cuadrados:** $\displaystyle\sum_i (\dim V_i)^2 = |G|$.

**Mini-ejemplo.** $S_3$ tiene $3$ clases de conjugación; sus irreducibles tienen dimensiones $1,1,2$, y
$$1^2 + 1^2 + 2^2 = 6 = |S_3|$$

## Tablas de caracteres
La **tabla de caracteres** de $G$ tiene una fila por cada irreducible y una columna por cada clase de conjugación. Se construye con:
1. $\chi_i(e) = \dim V_i$ y $\sum_i (\dim V_i)^2 = |G|$.
2. Ortogonalidad de filas respecto del producto interno.
3. Ortogonalidad de columnas.
4. Productos tensoriales y caracteres trivial y signo como apoyo.

**Tabla de $S_3$** (clases: $\{e\}$, transposiciones, 3-ciclos):

| Carácter | $e$ | $(1\,2)$ | $(1\,2\,3)$ |
|---|---|---|---|
| Trivial | 1 | 1 | 1 |
| Signo | 1 | $-1$ | 1 |
| Estándar | 2 | 0 | $-1$ |

**Verificación.** Ortogonalidad de filas, por ejemplo
$$\langle\chi_{\text{triv}},\chi_{\text{std}}\rangle = \frac{1}{6}\bigl(1\cdot2 + 3\cdot1\cdot0 + 2\cdot1\cdot(-1)\bigr) = 0$$

**Mini-ejemplo (tabla de $\mathbb{Z}_4$).** Con $\omega = i$:

| Carácter | $e$ | $g$ | $g^2$ | $g^3$ |
|---|---|---|---|---|
| $\chi_0$ | 1 | 1 | 1 | 1 |
| $\chi_1$ | 1 | $i$ | $-1$ | $-i$ |
| $\chi_2$ | 1 | $-1$ | 1 | $-1$ |
| $\chi_3$ | 1 | $-i$ | $-1$ | $i$ |

## Ejemplos resueltos
**Ejemplo 1 (irreducibilidad).** Decide si $\chi = (1,1,1)$ de $S_3$ es irreducible.
- Es el carácter trivial, de dimensión $1$.
- $\langle\chi,\chi\rangle = \frac{1}{6}(1 + 3 + 2) = 1$: irreducible.

**Ejemplo 2 (descomposición).** Descompón $\chi = (3,-1,0)$ de $S_3$.
- $\langle\chi,\chi_{\text{triv}}\rangle = \frac{1}{6}(3 - 3 + 0) = 0$.
- $\langle\chi,\chi_{\text{sign}}\rangle = \frac{1}{6}(3 + 3 + 0) = 1$ y $\langle\chi,\chi_{\text{std}}\rangle = \frac{1}{6}(6 + 0 + 0) = 1$.
- Por tanto $\chi = \chi_{\text{sign}} + \chi_{\text{std}}$.

**Ejemplo 3 (representación regular).** Descompón la regular de $S_3$, con carácter $(6,0,0)$.
- $m_i = \langle \chi_{\text{reg}}, \chi_i\rangle = \chi_i(e) = \dim V_i$.
- $\chi_{\text{reg}} = \chi_{\text{triv}} + \chi_{\text{sign}} + 2\,\chi_{\text{std}}$.

**Ejemplo 4 (producto tensorial).** Calcula $\chi_{\text{std}} \otimes \chi_{\text{std}}$ en $S_3$.
- $(2,0,-1)^2 = (4,0,1)$.
- Descompone como $\chi_{\text{triv}} + \chi_{\text{sign}} + \chi_{\text{std}}$.

## Ejercicios (20)
### Nivel 1 — Básico
1. Define con precisión qué es una representación de un grupo $G$ sobre un espacio vectorial $V$.
2. Escribe $\rho(g)$ y el carácter de la representación trivial de un grupo $G$.
3. ¿Cuál es la dimensión de la representación regular de $S_3$?
4. Halla $\chi(e)$ para la representación de permutación de $S_4$ sobre $\mathbb{C}^4$.
5. ¿Cuántas representaciones irreducibles tiene $\mathbb{Z}_5$ sobre $\mathbb{C}$?

### Nivel 2 — Intermedio
6. Verifica la igualdad $\sum_i (\dim V_i)^2 = |G|$ para $G = \mathbb{Z}_4$.
7. Escribe el carácter de la representación de permutación de $S_3$ en las clases $e$, transposición y 3-ciclo.
8. Comprueba que la representación de permutación de $S_3$ contiene a la trivial con multiplicidad $1$.
9. Calcula $\langle\chi_i,\chi_i\rangle$ para una irreducible $\chi_i$.
10. ¿Por qué toda irreducible de un grupo abeliano finito sobre $\mathbb{C}$ tiene dimensión $1$?

### Nivel 3 — Avanzado
11. Descompón $\chi = (3,-1,0)$ de $S_3$ en irreducibles.
12. Descompón la representación regular de $S_3$.
13. Verifica la ortogonalidad $\langle\chi_{\text{std}},\chi_{\text{sign}}\rangle = 0$ en $S_3$.
14. Calcula $\langle\chi_{\text{perm}},\chi_{\text{perm}}\rangle$ para la permutación de $S_4$.
15. Determina las dimensiones de las irreducibles de $S_4$.

### Nivel 4 — Retos
16. Prueba que el carácter es constante en cada clase de conjugación.
17. Halla el carácter de la representación estándar de $S_3$ y comprueba que es irreducible.
18. Escribe la tabla de caracteres de $\mathbb{Z}_4$.
19. Descompón la representación de permutación de $S_4$ sobre $\mathbb{C}^4$ en irreducibles.
20. Explica por qué el número de irreducibles coincide con el número de clases de conjugación.

## Respuestas
1. Un homomorfismo $\rho: G \to GL(V)$, es decir, una acción lineal de $G$ sobre $V$.
2. $\rho(g) = I$ y $\chi(g) = 1$ para todo $g$.
3. $|S_3| = 6$.
4. $\chi(e) = \dim V = 4$.
5. $5$ (grupo abeliano: $5$ clases de conjugación, todas de dimensión $1$).
6. $1^2 + 1^2 + 1^2 + 1^2 = 4 = |\mathbb{Z}_4|$.
7. $(3,1,0)$.
8. $\langle\chi_{\text{perm}},\chi_{\text{triv}}\rangle = \frac{1}{6}(3 + 3 + 0) = 1$.
9. $\langle\chi_i,\chi_i\rangle = 1$.
10. Por el lema de Schur: cada $\rho(g)$ conmuta con la acción, luego es escalar y todo subespacio es invariante.
11. $\chi = \chi_{\text{sign}} + \chi_{\text{std}}$.
12. $\chi_{\text{reg}} = \chi_{\text{triv}} + \chi_{\text{sign}} + 2\,\chi_{\text{std}}$.
13. $\frac{1}{6}\bigl(1\cdot2 + 3\cdot(-1)\cdot0 + 2\cdot1\cdot(-1)\bigr) = \frac{1}{6}(2 - 2) = 0$.
14. $\frac{1}{24}\bigl(16 + 6\cdot4 + 8\cdot1\bigr) = \frac{48}{24} = 2$.
15. $1,1,2,3,3$, pues $1+1+4+9+9 = 24$.
16. $\chi(hgh^{-1}) = \text{tr}\bigl(\rho(h)\rho(g)\rho(h)^{-1}\bigr) = \text{tr}\bigl(\rho(g)\bigr) = \chi(g)$.
17. $\chi = (2,0,-1)$; $\langle\chi,\chi\rangle = \frac{1}{6}(4 + 0 + 2) = 1$, luego es irreducible.
18. Filas: $(1,1,1,1)$, $(1,i,-1,-i)$, $(1,-1,1,-1)$, $(1,-i,-1,i)$.
19. $\chi_{\text{triv}} + \chi_{\text{estándar}}$, con dimensiones $1 + 3 = 4$.
20. Los caracteres irreducibles forman una base ortonormal del espacio de funciones de clase, cuya dimensión es el número de clases de conjugación.
