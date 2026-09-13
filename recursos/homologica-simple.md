# Álgebra homológica

El **álgebra homológica** mide, mediante construcciones algebraicas, en qué grado falla una sucesión en ser exacta. Nace de la topología algebraica, pero hoy es el lenguaje común del álgebra, la geometría y la teoría de números. Trabajaremos con módulos sobre un anillo $R$ (por ejemplo $R = \mathbb{Z}$), aunque las ideas se generalizan a categorías abelianas.

## Sucesiones exactas

Una **sucesión exacta** es una cadena de módulos y homomorfismos donde la imagen de cada flecha es exactamente el núcleo de la siguiente:

$$\cdots \to A \xrightarrow{f} B \xrightarrow{g} C \to \cdots, \qquad \text{Im}\,f = \ker g$$

**Casos clave:**

1. $0 \to A \xrightarrow{f} B$ es exacta $\iff$ $f$ es inyectiva.
2. $B \xrightarrow{g} C \to 0$ es exacta $\iff$ $g$ es sobreyectiva.
3. $0 \to A \xrightarrow{f} B \xrightarrow{g} C \to 0$ es una **sucesión exacta corta**, y equivale a decir que $f$ es inyectiva, $g$ es sobreyectiva y $C \cong B/f(A)$.

La exactitud es una igualdad fuerte: exige que **todo** elemento que muere en $g$ provenga de $A$. Cuando solo se cumple $\text{Im}\,f \subseteq \ker g$, hablamos de un **complejo** y el defecto se mide con homología.

**Mini-ejemplo.** La sucesión
$$0 \to \mathbb{Z} \xrightarrow{\;\times 2\;} \mathbb{Z} \xrightarrow{\;\bmod 2\;} \mathbb{Z}/2 \to 0$$
es exacta: $\times 2$ es inyectiva, la reducción módulo 2 es sobreyectiva, y $\text{Im}(\times 2) = 2\mathbb{Z} = \ker(\bmod 2)$.

**Mini-ejemplo (no exacta).** En
$$\mathbb{Z} \xrightarrow{\;\times 2\;} \mathbb{Z} \xrightarrow{\;\times 2\;} \mathbb{Z} \to 0$$
el morfismo final no es sobreyectivo (su imagen es $2\mathbb{Z} \neq \mathbb{Z}$), así que no hay exactitud en el extremo derecho.

## Complejos y grupos de homología

Un **complejo de cadenas** $(C_\bullet, \partial_\bullet)$ es una sucesión de módulos con diferenciales que satisfacen $\partial_n \circ \partial_{n+1} = 0$, es decir, imagen contenida en el núcleo:

$$\cdots \to C_{n+1} \xrightarrow{\partial_{n+1}} C_n \xrightarrow{\partial_n} C_{n-1} \to \cdots, \qquad \partial_n \circ \partial_{n+1} = 0$$

Los **grupos de homología** miden cuánto le falta a ese "estar contenida" para ser igualdad:

$$H_n(C_\bullet) = \frac{\ker \partial_n}{\text{Im}\,\partial_{n+1}}$$

**Interpretación:**

1. $H_n = 0$ significa que el complejo es exacto en el grado $n$.
2. $H_n \neq 0$ registra un "agujero" algebraico: hay ciclos que no son fronteras.

Los elementos de $\ker \partial_n$ se llaman **ciclos** y los de $\text{Im}\,\partial_{n+1}$, **fronteras**. Un complejo es **acíclico** si todos sus grupos de homología se anulan.

**Mini-ejemplo.** Para el complejo $0 \to \mathbb{Z} \xrightarrow{\,\times 2\,} \mathbb{Z} \to 0$ (el primer $\mathbb{Z}$ en grado 1 y el segundo en grado 0):

1. $H_0 = \ker \partial_0 / \text{Im}\,\partial_1 = \mathbb{Z}/2\mathbb{Z}$.
2. $H_1 = \ker \partial_1 / \text{Im}\,\partial_2 = 0 / 0 = 0$.

**Mini-ejemplo (topológico).** La homología del toro $T^2$ es $H_0 = \mathbb{Z}$, $H_1 = \mathbb{Z}^2$ y $H_2 = \mathbb{Z}$: una componente conexa, dos túneles independientes y una cavidad. La **característica de Euler** es $\chi = \sum_i (-1)^i \dim H_i = 1 - 2 + 1 = 0$.

## Resoluciones

Una **resolución proyectiva** de un módulo $M$ es una sucesión exacta con cada $P_i$ proyectivo:

$$\cdots \to P_2 \xrightarrow{\partial_2} P_1 \xrightarrow{\partial_1} P_0 \xrightarrow{\varepsilon} M \to 0$$

La idea es **reemplazar** $M$ por una cadena de objetos de mejor comportamiento (los proyectivos), y aplicar funtores a esa cadena. Dualmente, una **resolución inyectiva** usa módulos inyectivos y diferenciales que suben:

$$0 \to M \xrightarrow{\eta} I^0 \xrightarrow{d^0} I^1 \xrightarrow{d^1} I^2 \to \cdots$$

Sobre $R = \mathbb{Z}$ (o cualquier anillo), todo módulo admite resoluciones proyectivas e inyectivas, y los funtores derivados que definiremos no dependen de la resolución elegida.

**Mini-ejemplo (proyectiva).** Para $\mathbb{Z}/n$ sobre $\mathbb{Z}$:
$$\cdots \to \mathbb{Z} \xrightarrow{\;\times n\;} \mathbb{Z} \xrightarrow{\;\times n\;} \mathbb{Z} \xrightarrow{\;\bmod n\;} \mathbb{Z}/n \to 0$$
Cada $\mathbb{Z}$ es libre, luego proyectivo. Esta resolución es infinita, reflejo de que $\mathbb{Z}/n$ tiene **dimensión proyectiva infinita** sobre $\mathbb{Z}$.

**Mini-ejemplo (inyectiva).** Sobre $\mathbb{Z}$:
$$0 \to \mathbb{Z} \hookrightarrow \mathbb{Q} \to \mathbb{Q}/\mathbb{Z} \to 0$$
es una resolución inyectiva de $\mathbb{Z}$, pues $\mathbb{Q}$ y $\mathbb{Q}/\mathbb{Z}$ son inyectivos (divisibles).

## Funtores derivados: Tor y Ext

El producto tensorial y el funtor Hom no son exactos, y ese defecto se codifica en sus **funtores derivados**.

**Tor.** Si se tensa una sucesión exacta corta de un lado, la exactitud por la izquierda puede perderse. $\text{Tor}_n^R(-, B)$ mide ese fallo:

$$\text{Tor}_n^R(A, B) = H_n(P_\bullet \otimes_R B)$$

donde $P_\bullet \to A$ es una resolución proyectiva. En particular $\text{Tor}_0^R(A, B) = A \otimes_R B$.

**Ext.** El funtor $\text{Hom}_R(A, -)$ es exacto por la izquierda, no por la derecha; $\text{Ext}^n_R(A, B)$ mide ese fallo:

$$\text{Ext}^n_R(A, B) = H^n(\text{Hom}_R(P_\bullet, B))$$

y $\text{Ext}^0_R(A, B) = \text{Hom}_R(A, B)$.

**Propiedades fundamentales:**

1. $A$ es **plano** $\iff$ $\text{Tor}_n^R(A, B) = 0$ para todo $n \geq 1$ y todo $B$.
2. Si $P$ es proyectivo, $\text{Tor}_n^R(P, B) = 0 = \text{Ext}^n_R(P, B)$ para $n \geq 1$.
3. Sobre un DIP, para $n \geq 2$ se tiene $\text{Tor}_n^R(A, B) = 0$; toda la información está en $\text{Tor}_1$.
4. $\text{Ext}^1_R(A, B)$ clasifica las sucesiones exactas cortas $0 \to B \to E \to A \to 0$ salvo equivalencia.

**Mini-ejemplo (Tor).** Para $R = \mathbb{Z}$,
$$\text{Tor}_1^{\mathbb{Z}}(\mathbb{Z}/2, \mathbb{Z}/2) = \mathbb{Z}/2.$$
Se obtiene tensando la resolución $\cdots \to \mathbb{Z} \xrightarrow{2} \mathbb{Z} \to \mathbb{Z}/2 \to 0$ con $\mathbb{Z}/2$: el núcleo de multiplicar por 2 en $\mathbb{Z}/2$ es todo $\mathbb{Z}/2$.

**Mini-ejemplo (Ext).** $\text{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/2, \mathbb{Z}/2) = \mathbb{Z}/2$: hay exactamente dos extensiones de $\mathbb{Z}/2$ por $\mathbb{Z}/2$ salvo isomorfismo, la **trivial** $\mathbb{Z}/2 \oplus \mathbb{Z}/2$ y la **no escindida** $\mathbb{Z}/4$.

## Lema de la serpiente y lemas de diagramas

**Lema de la serpiente.** Dado un diagrama conmutativo con filas exactas
$$\begin{array}{ccccccccc}
 & & 0 & & 0 & & 0 & & \\
 & & \downarrow & & \downarrow & & \downarrow & & \\
0 & \to & A_1 & \to & A_2 & \to & A_3 & \to & 0\\
 & & {\scriptstyle f_1}\downarrow & & {\scriptstyle f_2}\downarrow & & {\scriptstyle f_3}\downarrow & & \\
0 & \to & B_1 & \to & B_2 & \to & B_3 & \to & 0\\
 & & \downarrow & & \downarrow & & \downarrow & & \\
 & & \text{coker}\,f_1 & & \text{coker}\,f_2 & & \text{coker}\,f_3 & & \\
 & & \downarrow & & \downarrow & & \downarrow & & \\
 & & 0 & & 0 & & 0 & &
\end{array}$$
existe una **sucesión exacta larga** que conecta núcleos y conúcleos:
$$\ker f_1 \to \ker f_2 \to \ker f_3 \xrightarrow{\;\delta\;} \text{coker}\,f_1 \to \text{coker}\,f_2 \to \text{coker}\,f_3$$

El **morfismo de conexión** $\delta$ se construye "persiguiendo el diagrama": se toma $x \in \ker f_3$, se levanta a $A_2$, se aplica $f_2$, se baja a $B_1$ y se proyecta a $\text{coker}\,f_1$. El resultado no depende de las elecciones: es **natural**.

**Lema de los cinco.** En un diagrama conmutativo de filas exactas
$$\begin{array}{ccccccccccc}
A_1 & \to & A_2 & \to & A_3 & \to & A_4 & \to & A_5\\
\downarrow & & \downarrow & & \downarrow & & \downarrow & & \downarrow\\
B_1 & \to & B_2 & \to & B_3 & \to & B_4 & \to & B_5
\end{array}$$
si los cuatro morfismos de los extremos son isomorfismos, entonces el morfismo central también lo es.

**Lema del zig-zag.** Formaliza la "persecución de elementos" y permite demostrar la exactitud de sucesiones largas que provienen de diagramas dobles, generalizando la serpiente.

**Mini-ejemplo (serpiente).** En el diagrama con $f_1 : \mathbb{Z} \xrightarrow{2} \mathbb{Z}$ y $f_2 : \mathbb{Z} \xrightarrow{1} \mathbb{Z}$, el morfismo de conexión $\delta = 0$ y la sucesión larga se escinde como $0 \to \mathbb{Z} \to \mathbb{Z} \to \mathbb{Z}/2 \to \mathbb{Z}/2 \to 0$.

## Cohomología

La **cohomología** es la versión dual: los índices crecen y los diferenciales $d^n$ suben de grado:

$$0 \to A^0 \xrightarrow{d^0} A^1 \xrightarrow{d^1} A^2 \to \cdots, \qquad d^n \circ d^{n-1} = 0$$
$$H^n(A^\bullet) = \frac{\ker d^n}{\text{Im}\,d^{n-1}}$$

**Propiedades:**

1. $H^0$ detecta los elementos que mueren en $d^0$; $H^n$ mide el fallo de exactitud en grado $n$.
2. Si $A^\bullet = \text{Hom}_R(P_\bullet, B)$ con $P_\bullet \to A$ proyectiva, entonces $H^n(A^\bullet) = \text{Ext}^n_R(A, B)$.
3. La cohomología es **contravariante** en el objeto: un morfismo $A \to A'$ induce $H^n(A') \to H^n(A)$.

**Ejemplos relevantes:**

1. **Cohomología singular** de espacios topológicos, invariante homotópico.
2. **Cohomología de De Rham**: para una variedad $M$, las $p$-formas cerradas módulo exactas dan $H^p_{dR}(M)$; el teorema de De Rham afirma que coincide con la cohomología singular real.
3. **Cohomología de grupos** $H^n(G, M)$: clasifica extensiones y acciones.
4. **Cohomología de haces** y **cohomología de Galois**, centrales en geometría algebraica y teoría de números.

**Mini-ejemplo.** Para la circunferencia $S^1$, $H^0_{dR}(S^1) = \mathbb{R}$ (funciones constantes) y $H^1_{dR}(S^1) = \mathbb{R}$ (la forma $d\theta$ es cerrada pero no exacta). La dimensión total recupera los números de Betti de $S^1$.

## Aplicaciones y cálculo de invariantes

La homología y la cohomología producen **invariantes** que no dependen de las presentaciones.

1. **Números de Betti:** $b_i = \dim_{\mathbb{Q}} H_i(X; \mathbb{Q})$; miden cuántos agujeros independientes hay en el grado $i$.
2. **Característica de Euler:** $\chi = \sum_i (-1)^i b_i$; coincide con la definición combinatoria $V - E + F$.
3. **Grupos de homología con torsión:** $H_1(\mathbb{RP}^2) = \mathbb{Z}/2$, información invisible para los números de Betti reales.
4. **Teorema de los coeficientes universales:** relaciona $H_i(X; G)$ con $H_i(X; \mathbb{Z})$ mediante un $\text{Tor}$ y con la cohomología mediante un $\text{Ext}$:
$$0 \to H_i(X) \otimes G \to H_i(X; G) \to \text{Tor}_1(H_{i-1}(X), G) \to 0$$

**Mini-ejemplo.** Para el círculo $S^1$: $H_0 = \mathbb{Z}$, $H_1 = \mathbb{Z}$, entonces $\chi(S^1) = 1 - 1 = 0$. Para la esfera $S^2$: $H_0 = \mathbb{Z}$, $H_1 = 0$, $H_2 = \mathbb{Z}$ y $\chi(S^2) = 1 - 0 + 1 = 2$.

**Mini-ejemplo (coeficientes).** Con $G = \mathbb{Z}/2$ y $X = \mathbb{RP}^2$, el teorema de los coeficientes universales explica por qué $H_1(\mathbb{RP}^2; \mathbb{Z}/2) = \mathbb{Z}/2$ y $H_2(\mathbb{RP}^2; \mathbb{Z}/2) = \mathbb{Z}/2$.

## Ejercicios (20)

### Nivel 1 · fundamentos

1. Decide si $0 \to \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \to \mathbb{Z}/2 \to 0$ es exacta.
2. Calcula $H_0$ del complejo $0 \to \mathbb{Z} \xrightarrow{0} \mathbb{Z} \to 0$.
3. Escribe una resolución proyectiva de $\mathbb{Z}/3$ sobre $\mathbb{Z}$.
4. Calcula $\text{Tor}_0^{\mathbb{Z}}(\mathbb{Z}/2, \mathbb{Z}/3)$.
5. Enuncia qué establece el lema de los cinco.

### Nivel 2 · cálculo directo

6. Decide si $0 \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{Q}/\mathbb{Z} \to 0$ es exacta.
7. Calcula $H_0$ y $H_1$ del complejo $0 \to \mathbb{Z} \xrightarrow{\times 3} \mathbb{Z} \to 0$.
8. Calcula $\text{Tor}_1^{\mathbb{Z}}(\mathbb{Z}/4, \mathbb{Z}/6)$.
9. Calcula $\text{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/5, \mathbb{Z})$.
10. Da los grupos de homología de la esfera $S^2$ y su característica de Euler.

### Nivel 3 · técnicas

11. Calcula $\text{Tor}_1^{\mathbb{Z}}(\mathbb{Z}/2, \mathbb{Z}/2)$ desde una resolución y explica por qué detecta torsión.
12. Demuestra que $\text{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/2 \oplus \mathbb{Z}/3, \mathbb{Z}) \cong \mathbb{Z}/6$.
13. Calcula $\text{Ext}^1_R(P, B)$ para $P$ proyectivo y justifica.
14. Da la homología del toro $T^2$ y su característica de Euler.
15. Construye el morfismo de conexión $\delta$ del lema de la serpiente y verifica que es natural.

### Nivel 4 · retos

16. Calcula $\text{Tor}_1^{\mathbb{Z}}(\mathbb{Z}/m, \mathbb{Z}/n)$ y deduce para qué $m, n$ se anula.
17. Calcula todos los grupos de homología del complejo $0 \to \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \to 0$.
18. Interpreta $\text{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/2, \mathbb{Z}/2) = \mathbb{Z}/2$ en términos de extensiones de grupos.
19. Usando el lema de la serpiente, relaciona $\ker$ y $\text{coker}$ en un diagrama con $f_1 = \times 2$, $f_2 = \text{id}$, $f_3 = \text{id}$.
20. Calcula $H^0_{dR}$ y $H^1_{dR}$ de $S^1$ y relaciónalos con los números de Betti.

## Respuestas

1. Sí: $\times 2$ es inyectiva, la reducción es sobreyectiva y $2\mathbb{Z} = \ker(\bmod 2)$.

2. $H_0 = \ker \partial_0 / \text{Im}\,\partial_1 = \mathbb{Z}/0 = \mathbb{Z}$.

3. $\cdots \to \mathbb{Z} \xrightarrow{\times 3} \mathbb{Z} \xrightarrow{\bmod 3} \mathbb{Z}/3 \to 0$.

4. $\text{Tor}_0 = \mathbb{Z}/2 \otimes_{\mathbb{Z}} \mathbb{Z}/3 = 0$, porque $\gcd(2,3) = 1$.

5. Si en un diagrama conmutativo de filas exactas cuatro de los cinco morfismos verticales son isomorfismos, el quinto también.

6. Sí: $\mathbb{Q}/\mathbb{Z}$ es el cociente y la inclusión es inyectiva; la proyección es sobreyectiva.

7. $H_0 = \mathbb{Z}/3\mathbb{Z}$ y $H_1 = 0$ (pues $\times 3$ es inyectiva en $\mathbb{Z}$).

8. $\text{Tor}_1(\mathbb{Z}/m, \mathbb{Z}/n) = \mathbb{Z}/\gcd(m,n)$, luego $\mathbb{Z}/\gcd(4,6) = \mathbb{Z}/2$.

9. $\text{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/n, \mathbb{Z}) = \mathbb{Z}/n$, luego $\mathbb{Z}/5$.

10. $H_0 = \mathbb{Z}$, $H_1 = 0$, $H_2 = \mathbb{Z}$; $\chi = 1 - 0 + 1 = 2$.

11. Tensando $0 \to \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \to \mathbb{Z}/2 \to 0$ con $\mathbb{Z}/2$, el núcleo de $\times 2$ es todo $\mathbb{Z}/2$, luego $\text{Tor}_1 = \mathbb{Z}/2$; mide la torsión 2 de los módulos.

12. $\text{Ext}^1$ es aditivo: $\text{Ext}^1(\mathbb{Z}/2 \oplus \mathbb{Z}/3, \mathbb{Z}) \cong \mathbb{Z}/2 \oplus \mathbb{Z}/3 \cong \mathbb{Z}/6$.

13. Si $P$ es proyectivo, la resolución $0 \to P \xrightarrow{\text{id}} P \to 0$ da $\text{Ext}^1_R(P, B) = 0$.

14. $H_0 = \mathbb{Z}$, $H_1 = \mathbb{Z}^2$, $H_2 = \mathbb{Z}$; $\chi = 1 - 2 + 1 = 0$.

15. $\delta(x)$ se define levantando $x \in \ker f_3$ a $A_2$, aplicando $f_2$, bajando a $B_1$ y proyectando a $\text{coker}\,f_1$; no depende de las elevaciones, de modo que es natural.

16. $\text{Tor}_1(\mathbb{Z}/m, \mathbb{Z}/n) = \mathbb{Z}/\gcd(m,n)$; se anula si y solo si $\gcd(m,n) = 1$ (módulos coprimos).

17. $H_2 = 0$, $H_1 = 0$ y $H_0 = \mathbb{Z}/2\mathbb{Z}$.

18. Hay dos extensiones de $\mathbb{Z}/2$ por $\mathbb{Z}/2$ salvo isomorfismo: la trivial $\mathbb{Z}/2 \oplus \mathbb{Z}/2$ y la no escindida $\mathbb{Z}/4$; $\text{Ext}^1$ clasifica esa elección.

19. La sucesión larga es $0 \to \ker f_1 \to \ker f_2 \to \ker f_3 \xrightarrow{\delta} \text{coker}\,f_1 \to \text{coker}\,f_2 \to \text{coker}\,f_3 \to 0$; con $f_1 = \times 2$ se tiene $\ker f_1 = 0$ y $\text{coker}\,f_1 = \mathbb{Z}/2$.

20. $H^0_{dR}(S^1) = \mathbb{R}$ y $H^1_{dR}(S^1) = \mathbb{R}$; coinciden con $b_0 = b_1 = 1$, es decir con la homología de $S^1$.
