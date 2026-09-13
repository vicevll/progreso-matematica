# Teoría de nudos

## 1. ¿Qué es un nudo?

Un **nudo** es un embebimiento suave del círculo en el espacio tridimensional:
$$K: S^1 \hookrightarrow \mathbb{R}^3$$
Es una cuerda cerrada sin autointersecciones. Un **enlace** $L$ es una unión disjunta de varios círculos embebidos, llamados **componentes**; para una sola componente se recupera un nudo.

Dos nudos son **equivalentes** si existe una **isotopía ambiente** que lleva uno al otro: una deformación continua del espacio que nunca corta la cuerda ni permite pasar una hebra a través de otra. El problema central es clasificar nudos: ¿cuándo dos nudos son el mismo?

**Ejemplos.**
1. El **nudo trivial** (no anudado): una circunferencia plana.
2. El **trébol** $3_1$: el nudo no trivial más simple, con 3 cruces.
3. El **nudo de ocho** $4_1$: 4 cruces, igual a su imagen especular (**anfiquiral**).
4. Los **anillos de Borromeo**: un enlace de 3 componentes que juntos no se separan, pero ningún par está enlazado.

El **número de cruces** $c(K)$ es el mínimo de cruces sobre todos los diagramas de $K$.

**Mini-ejemplo.** El nudo trivial tiene $c = 0$; el trébol tiene $c = 3$; el nudo de ocho tiene $c = 4$.

## 2. Diagramas y movimientos de Reidemeister

Un **diagrama** $D$ es la proyección del nudo sobre el plano, anotando en cada cruce qué hebra pasa **por arriba** y cuál **por abajo**. Un mismo nudo admite infinitos diagramas.

Dos diagramas representan el mismo nudo exactamente cuando se conectan por los tres **movimientos de Reidemeister** (más isotopía del plano):
1. **Tipo I:** crea o elimina un rizo simple.
2. **Tipo II:** desliza una hebra sobre otra; crea o elimina dos cruces opuestos.
3. **Tipo III:** mueve una hebra por encima (o por debajo) de un cruce.

**Teorema de Reidemeister.** Dos diagramas $D$ y $D'$ representan nudos equivalentes si y solo si se relacionan por una sucesión finita de movimientos de Reidemeister y deformaciones planas.

**Interpretación.** Los movimientos de Reidemeister son los "axiomas" de la teoría: todo **invariante de nudos** (cantidad que no cambia) debe ser preservado por ellos.

**Mini-ejemplo.** Un diagrama con un rizo aislado se simplifica con un movimiento tipo I sin cambiar el nudo. El trébol no se reduce a $0$ cruces con ningún movimiento: por eso es no trivial.

## 3. El grupo del nudo

Al nudo $K$ se le asocia el **grupo del nudo**, el grupo fundamental de su complemento en la esfera $S^3$:
$$G(K) = \pi_1(S^3 \setminus K)$$
Es un invariante: nudos equivalentes tienen grupos isomorfos.

**Presentación de Wirtinger.** Sea $D$ un diagrama con $n$ cruces. Los **arcos** (trozos entre cruces consecutivos) dan $n$ generadores $g_1, \dots, g_n$, y cada cruce da una **relación** de la forma
$$g_{i+1} = g_k^{-1} g_i g_k \quad \text{o} \quad g_{i+1} = g_k g_i g_k^{-1}$$
según el sentido del cruce. Así
$$G(K) = \langle g_1, \dots, g_n \mid r_1 = \dots = r_n = 1 \rangle$$
con una relación que se deduce de las demás.

**Ejemplos.**
1. Nudo trivial: $G = \mathbb{Z}$.
2. Trébol: $G = \langle a, b \mid a^2 = b^3 \rangle$, no abeliano.
3. La **abelianización** de todo grupo de nudo es $\mathbb{Z}$.

**Advertencia.** El grupo no es un invariante **completo**: existen nudos no triviales con grupo $\mathbb{Z}$ (los **nudos de Conway**, de 11 cruces o más) y el grupo no distingue un nudo de su imagen especular.

**Mini-ejemplo.** En $G(3_1) = \langle a, b \mid a^2 = b^3 \rangle$ los generadores no conmutan; como el grupo del trivial es $\mathbb{Z}$ (abeliano), el trébol es no trivial.

## 4. Polinomios de Alexander y Jones

### Polinomio de Alexander
El **polinomio de Alexander** $\Delta_K(t) \in \mathbb{Z}[t, t^{-1}]$ se calcula con la **matriz de Alexander** (obtenida de la presentación de Wirtinger) o por la **relación de skein**:
$$\Delta_{L_+}(t) - \Delta_{L_-}(t) = (t^{1/2} - t^{-1/2})\, \Delta_{L_0}(t), \qquad \Delta_{\text{trivial}}(t) = 1$$
donde $L_+$, $L_-$ y $L_0$ son los tres diagramas que solo difieren en un cruce (positivo, negativo y suavizado). Se normaliza de forma simétrica: $\Delta(t) = \Delta(t^{-1})$ salvo unidades.

**Ejemplos.** Trivial: $\Delta = 1$. Trébol: $\Delta = t - 1 + t^{-1}$ (equivalente a $t^2 - t + 1$). Ocho: $\Delta = t - 3 + t^{-1}$.

### Polinomio de Jones
El **polinomio de Jones** $V_K(t) \in \mathbb{Z}[t^{1/2}, t^{-1/2}]$ se define por
$$t^{-1} V_{L_+}(t) - t\, V_{L_-}(t) = (t^{1/2} - t^{-1/2})\, V_{L_0}(t), \qquad V_{\text{trivial}}(t) = 1$$

**Ejemplos.** Trébol diestro: $V = -t^{-4} + t^{-3} + t^{-1}$; su espejo: $V = -t^{4} + t^{3} + t$; ocho: $V = t^{-2} - t^{-1} + 1 - t + t^{2}$.

**Propiedades.**
1. $V_K(1) = 1$ para todo nudo.
2. $V_K(t^{-1})$ es el Jones del nudo espejo. Si $V_K(t) \neq V_K(t^{-1})$, el nudo es **quiral**.
3. El Jones distingue el trébol de su espejo; el Alexander **no**, porque es simétrico.

**Mini-ejemplo.** Como el Jones del trébol y el de su imagen especular difieren, el trébol es **quiral**. En cambio el ocho cumple $V(t) = V(t^{-1})$ y es anfiquiral.

## 5. El polinomio de HOMFLY

El **polinomio de HOMFLY** $P_K(a, z) \in \mathbb{Z}[a^{\pm 1}, z^{\pm 1}]$ generaliza a Alexander y Jones en dos variables, mediante la relación de skein
$$a\, P_{L_+}(a, z) - a^{-1}\, P_{L_-}(a, z) = z\, P_{L_0}(a, z), \qquad P_{\text{trivial}}(a, z) = 1$$

**Especializaciones.**
1. **Jones:** $V_K(t) = P_K\big(t,\; t^{1/2} - t^{-1/2}\big)$.
2. **Alexander:** $\Delta_K(t) = P_K\big(1,\; t^{1/2} - t^{-1/2}\big)$.

**Ejemplo.** Para el trébol diestro, $P_{3_1}(a, z) = 2a^{-2} - a^{-4} + a^{-2} z^{2}$. Evaluando $a = 1$ resulta $P(1, z) = z^{2} + 1$; con $z^{2} = t - 2 + t^{-1}$ se recupera $\Delta = t - 1 + t^{-1}$.

**Advertencia.** El HOMFLY es más fino que Alexander y Jones por separado, pero **tampoco es completo**.

**Mini-ejemplo.** Como $P(1, z)$ devuelve siempre el Alexander, el HOMFLY es un refinamiento común de los dos invariantes clásicos.

## 6. Superficies de Seifert y género

Una **superficie de Seifert** para $K$ es una superficie compacta, orientable y conexa $\Sigma \subset S^3$ cuyo borde es el nudo:
$$\partial \Sigma = K$$
El **género del nudo** $g(K)$ es el mínimo género posible entre las superficies de Seifert de $K$.

**Algoritmo de Seifert.**
1. Orienta el diagrama y suaviza cada cruce con el **parche** que respeta la orientación.
2. Se forman los **círculos de Seifert** (curvas cerradas).
3. Conecta los círculos con cintas en los lugares de los cruces.

**Propiedades.**
1. $g(K) = 0$ si y solo si $K$ es el nudo trivial.
2. El género es **aditivo**: $g(K_1 \# K_2) = g(K_1) + g(K_2)$.
3. **Cota de Alexander:** si $\Delta_K$ tiene span $d$ (grado máximo menos grado mínimo), entonces $g(K) \geq d/2$. Para nudos **alternantes** vale la igualdad $g(K) = d/2$.

**Ejemplos.** Trivial: $g = 0$. Trébol y ocho: $g = 1$. Cinquefoil $5_1$: $g = 2$.

**Mini-ejemplo.** El Alexander del trébol es $t - 1 + t^{-1}$, de span $2$; la cota da $g \geq 1$. Como el trébol no es trivial, $g = 1$.

## 7. Suma conexa y nudos primos

La **suma conexa** $K_1 \# K_2$ se forma cortando ambos nudos y uniéndolos por los extremos libres, sin añadir cruces.

Un nudo no trivial es **primo** si $K = K_1 \# K_2$ obliga a que uno de los factores sea el trivial. El nudo trivial es el **elemento neutro**: $K \# \text{trivial} = K$.

**Teorema de Schubert.** Todo nudo se descompone de forma única (salvo el orden) como suma conexa de nudos primos. Es el análogo del teorema fundamental de la aritmética para nudos.

**Consecuencias.**
1. $g(K_1 \# K_2) = g(K_1) + g(K_2)$.
2. Todo nudo de género $1$ es primo.
3. $\Delta_{K_1 \# K_2}(t) = \Delta_{K_1}(t)\, \Delta_{K_2}(t)$.

**Tabla de nudos primos según el número de cruces.**

| Cruces | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|
| Número de primos | 1 | 1 | 2 | 3 | 7 | 21 |

**Mini-ejemplo.** El trébol es primo (género 1). La suma de dos tréboles $3_1 \# 3_1$ tiene género $2$, no es prima y su Alexander es $(t - 1 + t^{-1})^{2}$.

## 8. Aplicaciones de la teoría de nudos

1. **Biología molecular.** El ADN circular es un nudo o un enlace; las **topoisomerasas** cortan y reanudan hebras cambiando su topología. Los invariantes miden el enrollamiento en la replicación y la transcripción.
2. **Química.** Síntesis de **nudos moleculares**, catenanos y rotaxanos; la topología controla propiedades físicas.
3. **Física.** Teorías de campos topológicas, **cualquierones**, efecto Hall cuántico y gravedad cuántica de lazos.
4. **Matemática.** Homología de Khovanov, teoría de representaciones cuánticas, invariantes de 3-variedades y cirugía de Dehn.
5. **Computación.** Algoritmos de simplificación de diagramas y cálculo de invariantes.

**Mini-ejemplo.** Un plásmido de ADN es un enlace cuya clase de isotopía cambia bajo la acción de enzimas específicas; el número de enlace es un invariante que se mide experimentalmente por electroforesis.

## Ejercicios (20)

### Nivel 1 · Básico
1. Define qué es un nudo y qué es un enlace.
2. ¿Cuántos cruces mínimos tiene el nudo trivial?
3. Escribe el nombre y la notación del nudo no trivial más simple.
4. ¿Qué movimiento de Reidemeister elimina un rizo aislado?
5. ¿Es el nudo de ocho quiral o anfiquiral?

### Nivel 2 · Intermedio
6. Calcula el polinomio de Alexander del nudo trivial.
7. Calcula el polinomio de Alexander del trébol.
8. Indica el género del trébol y del nudo de ocho.
9. ¿Es el trébol un nudo primo? Justifica.
10. Escribe una presentación del grupo del nudo del trébol.

### Nivel 3 · Avanzado
11. Si $g(K_1) = 2$ y $g(K_2) = 1$, ¿cuál es $g(K_1 \# K_2)$?
12. Demuestra con el polinomio de Jones que el trébol es quiral.
13. ¿Cuántos nudos primos hay con 5 cruces?
14. El Alexander del nudo de ocho es $t^2 - 3t + 1$. Deduce una cota inferior de su género.
15. ¿Puede un nudo no trivial tener grupo del nudo isomorfo a $\mathbb{Z}$?

### Nivel 4 · Experto
16. Escribe la relación de skein que define el polinomio de Jones.
17. ¿Cómo se obtiene el polinomio de Alexander a partir del HOMFLY?
18. Deduce el género del trébol usando el span de su polinomio de Alexander.
19. Describe la descomposición de $3_1 \# 3_1$: ¿es primo? ¿Cuál es su género?
20. Explica por qué los polinomios de nudos no clasifican completamente los nudos.

## Respuestas

1. Un nudo es un embebimiento $S^1 \hookrightarrow \mathbb{R}^3$; un enlace es una unión disjunta de varios círculos embebidos.
2. Cero.
3. El trébol, notado $3_1$.
4. El movimiento de Reidemeister de tipo I.
5. Anfiquiral: es equivalente a su imagen especular.
6. $\Delta(t) = 1$.
7. $\Delta(t) = t - 1 + t^{-1}$, equivalente a $t^2 - t + 1$.
8. $g(3_1) = 1$ y $g(4_1) = 1$.
9. Sí: tiene género $1$ y no admite descomposición como suma de dos nudos no triviales.
10. $G(3_1) = \langle a, b \mid a^2 = b^3 \rangle$.
11. $g(K_1 \# K_2) = 2 + 1 = 3$.
12. El Jones del trébol diestro es $-t^{-4} + t^{-3} + t^{-1}$, mientras que el de su espejo es $-t^{4} + t^{3} + t$; como difieren, el trébol es quiral.
13. Dos nudos primos, $5_1$ y $5_2$.
14. El span es $2 - 0 = 2$, luego $g \geq 1$; en este caso la cota es óptima y $g(4_1) = 1$.
15. Sí: los nudos de Conway, por ejemplo de 11 cruces, son no triviales y tienen grupo $\mathbb{Z}$.
16. $t^{-1} V_{L_+}(t) - t\, V_{L_-}(t) = (t^{1/2} - t^{-1/2})\, V_{L_0}(t)$.
17. Evaluando $a = 1$ y $z = t^{1/2} - t^{-1/2}$: $\Delta(t) = P(1,\; t^{1/2} - t^{-1/2})$.
18. $\Delta_{3_1} = t - 1 + t^{-1}$ tiene span $2$, luego $g \geq 1$; como el trébol es no trivial, $g = 1$.
19. No es primo: se descompone como $3_1 \# 3_1$ y su género es $1 + 1 = 2$.
20. Porque existen nudos distintos con el mismo polinomio de Jones (y también con el mismo HOMFLY o el mismo Alexander).
