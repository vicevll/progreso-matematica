# Geometría vectorial

**Nivel:** Univ 1 · **Área:** Funciones, trigonometría y geometría

Vectores, producto punto y cruz, rectas y planos en el espacio.

## Vectores: magnitud y dirección
Un **vector** es una cantidad con magnitud (tamaño) y dirección (sentido). Se representa como una flecha o como una lista de componentes:
$$\vec{v} = \langle v_1, v_2, v_3 \rangle = v_1\hat{i} + v_2\hat{j} + v_3\hat{k}$$

Su **magnitud** o norma es la longitud de la flecha:
$$|\vec{v}| = \sqrt{v_1^2 + v_2^2 + v_3^2}$$

Un **vector unitario** tiene norma $1$ y se obtiene normalizando:
$$\hat{u} = \frac{\vec{v}}{|\vec{v}|}$$

El **vector entre dos puntos** $A$ y $B$ se calcula restando coordenadas:
$$\overrightarrow{AB} = B - A = \langle x_B - x_A, \, y_B - y_A, \, z_B - z_A \rangle$$

**Mini-ejemplo.** Para $\vec{u} = \langle 2, -3, 6 \rangle$: $|\vec{u}| = \sqrt{4 + 9 + 36} = 7$ y $\hat{u} = \left\langle \frac{2}{7}, -\frac{3}{7}, \frac{6}{7} \right\rangle$.

Un punto $(1, 2)$ indica una posición; un vector $\langle 1, 2 \rangle$ indica un desplazamiento. El vector no depende de dónde se dibuje, solo de cuánto y hacia dónde.

## Operaciones con vectores
La **suma y la resta** se hacen componente a componente:
$$\vec{u} + \vec{v} = \langle u_1 + v_1, \, u_2 + v_2, \, u_3 + v_3 \rangle$$
$$\vec{u} - \vec{v} = \langle u_1 - v_1, \, u_2 - v_2, \, u_3 - v_3 \rangle$$

La **multiplicación por un escalar** $c$ escala cada componente:
$$c\vec{v} = \langle cv_1, \, cv_2, \, cv_3 \rangle$$

Geométricamente, la suma es la regla del paralelogramo y $c\vec{v}$ cambia la longitud por $|c|$; si $c < 0$, invierte el sentido.

**Propiedades:** conmutativa, asociativa, distributiva y elemento neutro $\vec{0}$.

**Mini-ejemplo.** Si $\vec{u} = \langle 2, -1, 3 \rangle$ y $\vec{v} = \langle 1, 4, -2 \rangle$:
$$\vec{u} + \vec{v} = \langle 3, 3, 1 \rangle, \qquad 2\vec{u} - \vec{v} = \langle 3, -6, 8 \rangle$$

## Producto punto
El **producto punto** (o escalar) de dos vectores es un **número**:
$$\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2 + u_3v_3 = |\vec{u}|\,|\vec{v}|\cos\theta$$
donde $\theta$ es el ángulo entre ellos.

**Propiedades:**
1. Conmutativo: $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$.
2. Distributivo: $\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}$.
3. $\vec{v} \cdot \vec{v} = |\vec{v}|^2$.
4. **Ortogonalidad:** $\vec{u} \cdot \vec{v} = 0$ si y solo si son perpendiculares.

**Mini-ejemplo.** $\langle 1, 2, -1 \rangle \cdot \langle 3, 0, 4 \rangle = 3 + 0 - 4 = -1$. El signo negativo indica que el ángulo entre ellos es obtuso.

El producto punto mide **alineación**: positivo si apuntan en direcciones parecidas, cero si son perpendiculares y negativo si van en sentidos opuestos.

## Ángulo, proyección y ortogonalidad
El ángulo entre dos vectores no nulos se obtiene despejando de la definición:
$$\cos\theta = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}|\,|\vec{v}|}$$

La **proyección de $\vec{u}$ sobre $\vec{v}$** es la "sombra" de uno sobre el otro:
$$\text{proy}_{\vec{v}}\vec{u} = \left( \frac{\vec{u} \cdot \vec{v}}{\vec{v} \cdot \vec{v}} \right)\vec{v}$$

La **componente escalar** de $\vec{u}$ en la dirección de $\vec{v}$ es:
$$\frac{\vec{u} \cdot \vec{v}}{|\vec{v}|}$$

**Mini-ejemplo.** Proyectar $\langle 3, 4 \rangle$ sobre $\langle 1, 0 \rangle$ da $\langle 3, 0 \rangle$: la componente horizontal. Separar fuerzas en componentes es exactamente esta operación.

El **trabajo mecánico** es una aplicación directa: $W = \vec{F} \cdot \vec{d}$; solo la componente de la fuerza en la dirección del movimiento realiza trabajo.

## Producto cruz
El **producto cruz** de dos vectores de $\mathbb{R}^3$ es un **vector** perpendicular a ambos:
$$\vec{u} \times \vec{v} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{vmatrix} = \langle u_2v_3 - u_3v_2, \; u_3v_1 - u_1v_3, \; u_1v_2 - u_2v_1 \rangle$$

**Propiedades:**
1. **Anticonmutativo:** $\vec{u} \times \vec{v} = -(\vec{v} \times \vec{u})$.
2. $\vec{u} \times \vec{u} = \vec{0}$.
3. $|\vec{u} \times \vec{v}| = |\vec{u}|\,|\vec{v}|\,\text{sen}\,\theta$, el área del paralelogramo que forman.
4. Son paralelos si y solo si $\vec{u} \times \vec{v} = \vec{0}$.

**Mini-ejemplo.** $\langle 1, 0, 0 \rangle \times \langle 0, 1, 0 \rangle = \langle 0, 0, 1 \rangle = \hat{k}$, con sentido dado por la regla de la mano derecha.

El área del triángulo de vértices $A$, $B$, $C$ es $\frac{1}{2}\Big|\overrightarrow{AB} \times \overrightarrow{AC}\Big|$.

## Rectas en el espacio
Una recta queda determinada por un **punto** $P$ y un **vector director** $\vec{d}$:
$$\vec{r}(t) = \vec{r}_0 + t\vec{d}, \qquad t \in \mathbb{R}$$

**Ecuaciones paramétricas:**
$$x = x_0 + t d_1, \qquad y = y_0 + t d_2, \qquad z = z_0 + t d_3$$

**Ecuaciones simétricas**, despejando $t$ e igualando:
$$\frac{x - x_0}{d_1} = \frac{y - y_0}{d_2} = \frac{z - z_0}{d_3}$$

Dos rectas son **paralelas** si sus direcciones son proporcionales, **perpendiculares** si $\vec{d}_1 \cdot \vec{d}_2 = 0$, **secantes** si se cortan y **alabeadas** si no se cortan ni son paralelas.

**Mini-ejemplo.** La recta por $(1, 2, 3)$ con dirección $\langle 2, -1, 4 \rangle$ es $\vec{r}(t) = \langle 1 + 2t, \, 2 - t, \, 3 + 4t \rangle$.

## Planos
Un plano queda determinado por un **punto** y un **vector normal** $\vec{n}$ (perpendicular al plano):
$$\vec{n} \cdot (\vec{r} - \vec{r}_0) = 0 \quad \Longleftrightarrow \quad a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$$

que se escribe en forma general como:
$$ax + by + cz = d$$

**Cómo hallar la normal:** dados tres puntos $A$, $B$, $C$ del plano, $\vec{n} = \overrightarrow{AB} \times \overrightarrow{AC}$.

**Relaciones:**
1. Planos paralelos: normales proporcionales.
2. Planos perpendiculares: $\vec{n}_1 \cdot \vec{n}_2 = 0$.
3. Recta y plano paralelos: $\vec{d} \cdot \vec{n} = 0$.

**Mini-ejemplo.** El plano por $(1, 0, 0)$ con normal $\langle 2, 1, -1 \rangle$ es $2(x - 1) + y - z = 0$, es decir $2x + y - z = 2$.

## Distancias
**De un punto a un plano** $ax + by + cz + d = 0$, desde $(x_0, y_0, z_0)$:
$$D = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$$

**De un punto a una recta**, donde $Q$ es un punto de la recta y $\vec{d}$ su dirección:
$$D = \frac{\Big|\overrightarrow{PQ} \times \vec{d}\Big|}{|\vec{d}|}$$

**Entre rectas alabeadas** de direcciones $\vec{d}_1$ y $\vec{d}_2$:
$$D = \frac{\Big|\overrightarrow{PQ} \cdot (\vec{d}_1 \times \vec{d}_2)\Big|}{\Big|\vec{d}_1 \times \vec{d}_2\Big|}$$

**Mini-ejemplo.** Distancia del origen al plano $2x - 3y + 6z = 14$:
$$D = \frac{|0 - 0 + 0 - 14|}{\sqrt{4 + 9 + 36}} = \frac{14}{7} = 2$$

## Ejercicios (20)

### Nivel 1 · Fundamentos (1–5)
1. Halla la norma de $\vec{u} = \langle 3, -4, 12 \rangle$.
2. Halla el vector unitario en la dirección de $\vec{v} = \langle 2, -2, 1 \rangle$.
3. Dados $\vec{u} = \langle 1, 2, 3 \rangle$ y $\vec{v} = \langle 4, -1, 0 \rangle$, calcula $\vec{u} + \vec{v}$ y $2\vec{u} - \vec{v}$.
4. Halla $\overrightarrow{AB}$ con $A(2, -1, 3)$ y $B(5, 3, -2)$.
5. Calcula el producto punto de $\vec{u} = \langle 2, 1, -3 \rangle$ y $\vec{v} = \langle 1, -4, 2 \rangle$.

### Nivel 2 · Intermedio (6–10)
6. Halla el ángulo entre $\vec{u} = \langle 1, 1, 0 \rangle$ y $\vec{v} = \langle 0, 1, 1 \rangle$.
7. Proyecta $\vec{u} = \langle 2, 5, 2 \rangle$ sobre $\vec{v} = \langle 1, 1, 1 \rangle$.
8. Calcula $\vec{u} \times \vec{v}$ con $\vec{u} = \langle 1, 2, 3 \rangle$ y $\vec{v} = \langle 4, 5, 6 \rangle$.
9. Halla el área del paralelogramo formado por $\vec{u} = \langle 1, 0, 0 \rangle$ y $\vec{v} = \langle 0, 2, 1 \rangle$.
10. Determina si $\vec{u} = \langle 2, -1, 3 \rangle$ y $\vec{v} = \langle 1, 2, 0 \rangle$ son ortogonales.

### Nivel 3 · Avanzado (11–15)
11. Escribe la ecuación paramétrica de la recta por $P(1, -2, 3)$ con dirección $\vec{d} = \langle 2, 1, -1 \rangle$.
12. Halla las ecuaciones simétricas de la recta por $(2, 0, -1)$ y $(4, 3, 2)$.
13. Halla la ecuación del plano por $(1, 2, 3)$ con normal $\vec{n} = \langle 2, -1, 4 \rangle$.
14. Halla la normal del plano que pasa por $A(1, 0, 0)$, $B(0, 1, 0)$ y $C(0, 0, 2)$.
15. Calcula la distancia del punto $(1, 2, 3)$ al plano $2x - y + 2z = 1$.

### Nivel 4 · Desafío (16–20)
16. Halla el área del triángulo con vértices $A(1, 0, 0)$, $B(0, 2, 0)$ y $C(0, 0, 3)$.
17. Halla la distancia del punto $P(3, 1, 2)$ a la recta por $Q(1, 0, 0)$ con dirección $\vec{d} = \langle 1, 1, 1 \rangle$.
18. Determina si las rectas de direcciones $\vec{d}_1 = \langle 1, 2, 1 \rangle$ y $\vec{d}_2 = \langle 1, -1, 1 \rangle$ son perpendiculares.
19. Halla el volumen del paralelepípedo formado por $\vec{u} = \langle 1, 1, 0 \rangle$, $\vec{v} = \langle 0, 1, 1 \rangle$ y $\vec{w} = \langle 1, 0, 1 \rangle$.
20. Halla la distancia entre las rectas alabeadas: $\vec{r}_1(t) = t\langle 1, 0, 0 \rangle$ y $\vec{r}_2(s) = \langle 0, 1, 1 \rangle + s\langle 0, 1, 0 \rangle$.

## Respuestas
1. $|\vec{u}| = 13$.
2. $\hat{u} = \left\langle \dfrac{2}{3}, -\dfrac{2}{3}, \dfrac{1}{3} \right\rangle$.
3. $\vec{u} + \vec{v} = \langle 5, 1, 3 \rangle$; $2\vec{u} - \vec{v} = \langle -2, 5, 6 \rangle$.
4. $\overrightarrow{AB} = \langle 3, 4, -5 \rangle$.
5. $\vec{u} \cdot \vec{v} = -8$.
6. $\theta = 60°$.
7. $\text{proy}_{\vec{v}}\vec{u} = \langle 3, 3, 3 \rangle$.
8. $\vec{u} \times \vec{v} = \langle -3, 6, -3 \rangle$.
9. Área $= \sqrt{5}$.
10. Sí: $\vec{u} \cdot \vec{v} = 0$.
11. $\vec{r}(t) = \langle 1 + 2t, \, -2 + t, \, 3 - t \rangle$.
12. $\dfrac{x - 2}{2} = \dfrac{y}{3} = \dfrac{z + 1}{3}$.
13. $2x - y + 4z = 12$.
14. $\vec{n} = \langle 2, 2, 1 \rangle$; el plano es $2x + 2y + z = 2$.
15. $D = \dfrac{5}{3}$.
16. Área $= \dfrac{7}{2}$.
17. $D = \dfrac{\sqrt{2}}{\sqrt{3}} = \dfrac{\sqrt{6}}{3} \approx 0.816$.
18. Sí: $\vec{d}_1 \cdot \vec{d}_2 = 0$.
19. $V = 2$.
20. $D = 1$.
