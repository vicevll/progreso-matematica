# Teoría de grafos

Un grafo modela relaciones entre objetos: los objetos son **vértices** y las relaciones **aristas**. Este tema cubre grados, caminos y conectividad, árboles, los problemas de Euler y Hamilton, coloración, planaridad y los algoritmos clásicos de redes.

## 1. Conceptos básicos y grados

Un **grafo** $G = (V, E)$ consta de un conjunto de **vértices** $V$ y un conjunto de **aristas** $E$, donde cada arista conecta un par de vértices. Variantes importantes:

1. **Simple:** sin lazos ni aristas múltiples.
2. **Dirigido:** las aristas tienen orientación ($u \to v$).
3. **Ponderado:** cada arista lleva un peso.
4. **Multigrafo:** admite aristas repetidas y lazos.

El **grado** $\deg(v)$ de un vértice es el número de aristas incidentes a él (en un multigrafo, los lazos cuentan doble). El **grado máximo** se denota $\Delta(G)$ y el **grado mínimo** $\delta(G)$. Un vértice es **par** o **impar** según su grado. Un **camino** es una secuencia de vértices conectados por aristas; un **ciclo** es un camino cerrado.

**Mini-ejemplo.** En una red social los vértices son personas y las aristas, amistades. El grado de una persona es su número de amigos. Si $V = \{a, b, c, d\}$ y $E = \{ab, ac, ad\}$, entonces $\deg(a) = 3$ y $\deg(b) = \deg(c) = \deg(d) = 1$.

## 2. El lema del apretón de manos

**Lema del apretón de manos.** En todo grafo,
$$\sum_{v \in V} \deg(v) = 2|E|.$$

Cada arista aporta exactamente $1$ al grado de cada uno de sus dos extremos, por lo que la suma de grados cuenta cada arista dos veces.

**Consecuencias.**
1. El número de vértices de grado **impar** es siempre **par**.
2. En un grafo simple con $n$ vértices, $0 \le \deg(v) \le n - 1$.
3. Todo grafo con al menos dos vértices tiene dos vértices con el mismo grado (principio del palomar).

**Mini-ejemplo.** Un conjunto de $7$ personas no puede tener todas exactamente $3$ amigos: la suma de grados sería $7 \cdot 3 = 21$, impar, imposible. Tampoco pueden tener todas grados distintos, porque solo hay $7$ valores posibles $\{0, \ldots, 6\}$ y los grados $0$ y $6$ no pueden coexistir.

**Teorema de Erdős–Gallai.** Una sucesión de enteros no negativos $d_1 \ge \cdots \ge d_n$ es la sucesión de grados de un grafo simple si y solo si su suma es par y para todo $k$:
$$\sum_{i=1}^{k} d_i \le k(k-1) + \sum_{i=k+1}^{n} \min(d_i, k).$$

## 3. Caminos, conectividad, árboles y Cayley

La **distancia** $d(u,v)$ es la longitud del camino más corto entre $u$ y $v$; el **diámetro** es la máxima distancia. Un **puente** es una arista cuya eliminación desconecta el grafo. Un grafo es **conexo** si existe un camino entre cada par de vértices; sus piezas maximales son las **componentes conexas**.

Los recorridos básicos son:

1. **BFS** (anchura): explora por niveles y da caminos más cortos en grafos sin pesos.
2. **DFS** (profundidad): explora hasta el fondo; detecta ciclos y sirve para orden topológico.

Un **árbol** es un grafo conexo sin ciclos. Las siguientes afirmaciones son equivalentes:

1. $T$ es conexo y acíclico.
2. $T$ es conexo y tiene exactamente $n - 1$ aristas.
3. Existe un único camino entre cada par de vértices.
4. Toda arista de $T$ es un puente.

Un **árbol generador** de $G$ es un subgrafo que es árbol y contiene todos los vértices. El **árbol generador mínimo** (MST) minimiza la suma de pesos; lo construyen Kruskal y Prim.

**Fórmula de Cayley.** El número de árboles etiquetados sobre $n$ vértices es
$$n^{n-2}.$$

**Mini-ejemplo.** Un árbol de $10$ vértices tiene $10 - 1 = 9$ aristas y $10^{8}$ árboles etiquetados son posibles sobre esos vértices.

## 4. Grafos eulerianos y hamiltonianos

Un **camino euleriano** recorre cada **arista** exactamente una vez; un **circuito euleriano** es un camino euleriano cerrado. La caracterización es puramente local:

**Teorema de Euler.** Un grafo conexo tiene un **circuito euleriano** si y solo si **todos** sus vértices tienen grado par. Tiene un **camino euleriano abierto** (no cerrado) si y solo si tiene **exactamente dos** vértices de grado impar (que serán los extremos).

Un **camino hamiltoniano** visita cada **vértice** exactamente una vez, y un **ciclo hamiltoniano** es cerrado. No existe un criterio simple: decidir si un grafo es hamiltoniano es NP-completo.

**Mini-ejemplo.** El grafo $K_4$ menos una arista tiene grados $2, 3, 3, 2$: dos impares, luego admite camino euleriano pero no circuito. El ciclo impar $C_5$ sí tiene ciclo hamiltoniano (recorre sus $5$ vértices) pero su ciclo euleriano no existe porque todos sus grados son $2$... de hecho $C_5$ sí es todo de grado par y es euleriano: todo ciclo es a la vez euleriano y hamiltoniano.

**Puentes de Königsberg.** Con cuatro regiones de grado impar, no existía paseo que cruzara cada puente una sola vez: el primer resultado de la teoría de grafos (Euler, 1736).

## 5. Coloración

Una **coloración propia** asigna colores a los vértices de modo que dos vértices adyacentes reciban colores distintos. El **número cromático** $\chi(G)$ es el mínimo de colores necesarios.

**Resultados clave.**
1. $\chi(G) \le \Delta(G) + 1$ (teorema de Brooks, con igualdad solo para completos e impares).
2. $\chi(G) = 2$ si y solo si $G$ es **bipartito**.
3. $\chi(K_n) = n$ y $\chi(C_n) = 2$ si $n$ es par, $3$ si $n$ es impar.
4. **Teorema de los cuatro colores:** todo grafo **planar** admite una coloración con $4$ colores.

**Aplicaciones.** Asignación de frecuencias en telefonía, programación de horarios de exámenes, coloreado de mapas y registro de variables en compiladores.

**Mini-ejemplo.** Programar exámenes sin choques: dos exámenes con estudiantes comunes no pueden compartir hora. Los exámenes son vértices, los conflictos aristas, y las horas son colores.

## 6. Planaridad y fórmula de Euler

Un grafo es **planar** si puede dibujarse en el plano sin que sus aristas se crucen. Sus regiones delimitadas (más la región exterior) son las **caras**.

**Fórmula de Euler.** Para todo grafo planar **conexo** con $V$ vértices, $E$ aristas y $F$ caras:
$$V - E + F = 2.$$

**Consecuencias.**
1. Si $V \ge 3$: $E \le 3V - 6$.
2. Si es bipartito y $V \ge 3$: $E \le 2V - 4$.
3. $K_5$ no es planar (tiene $5$ vértices y $10$ aristas, pero $3V-6 = 9 < 10$).
4. $K_{3,3}$ no es planar (bipartito con $V = 6$, $9$ aristas, pero $2V-4 = 8 < 9$).

**Teorema de Kuratowski.** Un grafo es planar si y solo si no contiene una subdivisión de $K_5$ ni de $K_{3,3}$.

**Mini-ejemplo.** Para $K_4$: $V = 4$, $E = 6$, $F = 4$; se cumple $4 - 6 + 4 = 2$. El cubo es planar con $V = 8$, $E = 12$, $F = 6$: $8 - 12 + 6 = 2$.

## 7. Algoritmos de redes

1. **Dijkstra:** camino más corto desde un origen con pesos **no negativos**; complejidad $O(E \log V)$.
2. **Bellman–Ford:** admite pesos negativos y detecta ciclos negativos; $O(VE)$.
3. **Floyd–Warshall:** todos los pares de caminos más cortos; $O(V^3)$.
4. **Kruskal:** árbol generador mínimo, ordenando aristas por peso con una estructura de unión-búsqueda.
5. **Prim:** árbol generador mínimo creciendo desde un vértice.
6. **Ford–Fulkerson:** flujo máximo en redes; el **teorema max-flow min-cut** afirma que el flujo máximo es igual a la capacidad del corte mínimo.
7. **Orden topológico:** secuencia de tareas compatible con dependencias en un DAG.

**Mini-ejemplo (Dijkstra).** Con aristas $A-B = 1$, $B-C = 2$, $A-C = 5$, la distancia más corta de $A$ a $C$ es $1 + 2 = 3$ (vía $B$), mejor que la arista directa de peso $5$.

**Mini-ejemplo (Kruskal).** Si las aristas ordenadas son $AB = 1$, $BC = 2$, $CD = 3$, $AD = 4$, se toman las tres primeras, que ya conectan los cuatro vértices, con costo $1 + 2 + 3 = 6$.

**Mini-ejemplo (Ford–Fulkerson).** En la red $s \to a = 3$, $s \to b = 2$, $a \to t = 2$, $b \to t = 3$, $a \to b = 1$, el corte mínimo vale $5$, luego el flujo máximo es $5$.

## Ejercicios (20)

### Nivel 1

1. Un grafo tiene $7$ aristas. ¿Cuál es la suma de sus grados?
2. ¿Cuántas aristas tiene un árbol con $12$ vértices?
3. En un grafo simple con $6$ vértices, ¿cuál es el grado máximo posible?
4. Los grados de un grafo con $4$ vértices son $3,3,3,3$. ¿Cuántas aristas tiene?
5. ¿Puede existir un grafo cuyos únicos grados sean $1,1,1$? Justifica.

### Nivel 2

6. Halla el número cromático de $K_4$.
7. Halla el número cromático del ciclo $C_7$.
8. Un grafo planar conexo tiene $V = 8$ y $E = 12$. Halla el número de caras $F$.
9. ¿Cuántos árboles etiquetados con $5$ vértices existen (Cayley)?
10. Un grafo conexo tiene exactamente $2$ vértices de grado impar. ¿Qué tipo de camino euleriano admite?

### Nivel 3

11. Con aristas $A-B = 1$, $B-C = 2$, $A-C = 5$, halla la distancia mínima de $A$ a $C$.
12. Con pesos $AB = 1$, $BC = 2$, $CD = 3$, $AD = 4$, $BD = 5$, halla el costo del árbol generador mínimo.
13. ¿Es planar $K_5$? Justifica con la cota.
14. ¿Es bipartito el ciclo $C_8$?
15. En la red $s \to a = 3$, $s \to b = 2$, $a \to t = 2$, $b \to t = 3$, $a \to b = 1$, halla el flujo máximo.

### Nivel 4

16. Demuestra que todo grafo con al menos dos vértices tiene dos vértices con el mismo grado.
17. ¿Cuántos árboles generadores tiene $K_4$?
18. Halla $\chi(K_{3,3})$.
19. Un grafo planar tiene $V = 6$ y $V \ge 3$. ¿Cuál es el máximo número de aristas que puede tener?
20. Explica la diferencia esencial entre un ciclo euleriano y un ciclo hamiltoniano.

## Respuestas

1. $2 \cdot 7 = 14$.
2. $12 - 1 = 11$.
3. $6 - 1 = 5$.
4. $\dfrac{3+3+3+3}{2} = 6$ (es $K_4$).
5. No: hay $3$ vértices de grado impar, pero el número de impares debe ser par.
6. $\chi(K_4) = 4$.
7. Un ciclo impar requiere $3$ colores.
8. $F = 2 + E - V = 2 + 12 - 8 = 6$.
9. $5^{5-2} = 125$.
10. Un camino euleriano **abierto** (no cerrado), con esos dos vértices como extremos.
11. $1 + 2 = 3$ vía $B$.
12. Tomando $AB = 1$, $BC = 2$, $CD = 3$: costo $6$.
13. No: $V = 5$, $3V - 6 = 9 < 10 = E$.
14. Sí: $\chi(C_8) = 2$.
15. El corte mínimo vale $5$, luego el flujo máximo es $5$.
16. Con $n$ vértices hay $n$ grados posibles en $\{0,\ldots,n-1\}$, pero $0$ y $n-1$ no coexisten; quedan $n-1$ valores para $n$ vértices: por palomar, dos coinciden.
17. $4^{4-2} = 16$.
18. Es bipartito: $\chi(K_{3,3}) = 2$.
19. $3V - 6 = 3 \cdot 6 - 6 = 12$.
20. El euleriano recorre cada **arista** una vez (criterio local de grados); el hamiltoniano visita cada **vértice** una vez (problema NP-completo sin criterio simple).
