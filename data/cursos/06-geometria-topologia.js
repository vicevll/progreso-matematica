window.CURSOS = window.CURSOS || {};
window.CURSOS["geometria-topologia"] = {
  "topologia-general": String.raw`
## Espacios topológicos
Un **espacio topológico** es un conjunto $X$ con una familia $\tau$ de subconjuntos (los **abiertos**) que cumple:
1. $\emptyset$ y $X$ son abiertos.
2. Unión arbitraria de abiertos es abierta.
3. Intersección **finita** de abiertos es abierta.

Los complementos de los abiertos son los **cerrados**. La topología define qué puntos están "cerca" sin necesidad de una distancia.

**Ejemplos:**
- **Topología usual** de $\mathbb{R}$: uniones de intervalos abiertos.
- **Topología discreta:** todos los subconjuntos son abiertos.
- **Topología trivial:** solo $\emptyset$ y $X$.
- **Topología de Zariski** en geometría algebraica.

Comparar topologías: más abiertos = más fina; menos = más gruesa.

## Bases, subespacios y clausura
Una **base** de la topología es una familia cuyas uniones generan todos los abiertos. En $\mathbb{R}$, los intervalos abiertos forman una base.

**Subespacio:** si $A \subseteq X$, los abiertos de $A$ son $A \cap U$ con $U$ abierto en $X$ (topología inducida).

**Clausura, interior y frontera:** igual que en espacios métricos:
- $\bar{A}$: menor cerrado que contiene a $A$; los puntos cuya toda vecindad corta a $A$.
- $\mathring{A}$: mayor abierto dentro de $A$.
- $\partial A = \bar{A} \setminus \mathring{A}$.

**Punto de acumulación:** todo abierto que lo contiene tiene otro punto de $A$. La clausura es $A$ más sus puntos de acumulación.

## Continuidad y homeomorfismos
$f: X \to Y$ es **continua** si la preimagen de todo abierto de $Y$ es abierta en $X$:
$$f^{-1}(U) \text{ abierto en } X \quad \forall U \text{ abierto en } Y$$

Equivalencias: preimágenes de cerrados son cerradas; $f(\bar{A}) \subseteq \overline{f(A)}$; continuidad por redes.

**Homeomorfismo:** biyección continua con inversa continua. Es la noción de "mismo espacio topológico": preserva todos los invariantes.

**Ejemplo.** $(0,1)$ y $\mathbb{R}$ son homeomorfos vía $x \mapsto \tan(\pi(x - 1/2))$; $[0,1]$ y $(0,1)$ no lo son (compacidad distinta).

## Conexidad
$X$ es **conexo** si no se puede escribir como unión de dos abiertos no vacíos disjuntos. Equivalentemente, los únicos subconjuntos abiertos y cerrados a la vez son $\emptyset$ y $X$.

**Conexo por caminos:** todo par de puntos se une con una curva continua. Implica conexo, pero no al revés (la curva del topólogo es conexa y no por caminos).

**Componentes conexas:** las piezas maximales conexas.

**Teorema del valor intermedio topológico:** la imagen continua de un conexo es conexa. De aquí sale el resultado clásico de funciones.

**Ejemplo.** $\mathbb{R} \setminus \{0\}$ tiene dos componentes; el círculo $S^1$ es conexo y por caminos.

## Compacidad
$X$ es **compacto** si toda cubierta por abiertos tiene subcubierta finita.

**Propiedades:**
- La imagen continua de un compacto es compacta.
- En un compacto, toda función real continua alcanza máximo y mínimo.
- Un subespacio de $\mathbb{R}^n$ es compacto si y solo si es cerrado y acotado (Heine-Borel).
- Un cerrado dentro de un compacto es compacto.

**Compacidad local:** cada punto tiene vecindades compactas ($\mathbb{R}^n$ lo es).

**Ejemplo.** $[0,1]$ es compacto; $(0,1)$ no. La sucesión $1/n$ no tiene subsucesión con límite dentro.

## Axiomas de separación
- **T1:** los puntos son cerrados.
- **T2 (Hausdorff):** dos puntos distintos tienen vecindades disjuntas. Garantiza unicidad de límites.
- **T3 (regular):** punto y cerrado se separan por abiertos.
- **T4 (normal):** dos cerrados disjuntos se separan. Permite construir funciones continuas (lema de Urysohn).

**Jerarquía:** normal $\Rightarrow$ regular $\Rightarrow$ Hausdorff $\Rightarrow$ T1.

Casi todos los espacios de interés (métricos, variedades) son normales. Las patologías aparecen en cocientes malos.

## Topología producto y cociente
**Producto:** $X \times Y$ con la topología generada por los productos de abiertos $U \times V$. Propiedad universal: las proyecciones son continuas y toda función continua a $X \times Y$ se factoriza.

**Cociente:** $X/\sim$ con la topología más fina que hace continua la proyección. Sirve para pegar: construir el toro a partir de un cuadrado, la banda de Möbius a partir de una tira.

**Ejemplo.** $[0,1]/\{0 \sim 1\} \cong S^1$: pegar los extremos del intervalo da la circunferencia.

**Teorema de Tychonoff:** producto arbitrario de compactos es compacto (con el axioma de elección).

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, abiertos).** ¿Es $(0,1) \cup (2,3)$ abierto en $\mathbb{R}$?
- Unión de dos abiertos.
- Sí, por el axioma de uniones arbitrarias.

**Ejemplo 2 (práctica, continuidad).** Demuestra que $f(x) = x^2$ es continua con preimágenes.
- $f^{-1}((a,b))$: resuelve $a < x^2 < b$.
- Es unión de intervalos abiertos; abierto. $\blacksquare$

**Ejemplo 3 (práctica, conexidad).** ¿Es conexo $\mathbb{Q}$?
- Entre dos racionales siempre hay un irracional.
- Los conjuntos $(-\infty, \sqrt{2})$ y $(\sqrt{2}, \infty)$ parten $\mathbb{Q}$: no es conexo.

**Ejemplo 4 (aplicación, compacidad).** Halla el máximo de $f(x) = x^3 - 3x$ en $[-2, 2]$.
- $[-2,2]$ es compacto: el máximo existe.
- $f'(x) = 3x^2 - 3 = 0 \Rightarrow x = \pm 1$; valores: $f(-2) = -2$, $f(-1) = 2$, $f(1) = -2$, $f(2) = 2$.
- Máximo $2$ en $x = \pm 1$ y $x = 2$.

**Ejemplo 5 (aplicación, cociente).** Construye el cilindro como cociente.
- $[0,1] \times [0,1]$ con $(0, y) \sim (1, y)$.
- El resultado es $S^1 \times [0,1]$.

**Ejemplo 6 (aplicación, homeomorfismo).** ¿Son homeomorfos $[0,1]$ y $[0,1]$? (trivial) ¿Y $(0,1)$ y $[0,1]$?
- $(0,1)$ es homeomorfo a $\mathbb{R}$.
- $[0,1]$ es compacto y $(0,1)$ no: no son homeomorfos.

## Contextos donde se aplica
- **Análisis:** continuidad, compacidad y convergencia sin métrica.
- **Geometría:** superficies, variedades, clasificación de formas.
- **Computación:** topología de redes, análisis de datos topológico.
- **Física:** espacios de fases, teorías de campos, solitones.
- **Robótica:** planificación de trayectorias y espacios de configuración.

## Errores comunes y cómo evitarlos
- **Suponer que todo espacio es Hausdorff.** Es una hipótesis, no un regalo.
- **Confundir conexo con conexo por caminos.** Hay contraejemplos.
- **Creer que compacto significa cerrado y acotado siempre.** Solo en $\mathbb{R}^n$.
- **Olvidar que las intersecciones deben ser finitas.** Infinitas intersecciones de abiertos pueden no ser abiertas.
- **Tratar el cociente como subconjunto.** Es un espacio nuevo con su topología.

## Ejercicios propuestos
1. ¿Cuántos abiertos tiene un espacio con la topología trivial y con la discreta?
2. Demuestra que $\mathbb{R}$ con la topología usual es Hausdorff.
3. ¿Es compacto el intervalo $(0,1]$?
4. Demuestra que la imagen continua de un conexo es conexa.
5. Construye la banda de Möbius como cociente.
6. ¿Es conexo $[0,1] \cup [2,3]$?
7. Describe la topología del subespacio $\mathbb{Z} \subseteq \mathbb{R}$.
8. ¿Es homeomorfo el toro al plano proyectivo?

**Respuestas:** 1) Trivial: 2; discreta: $2^n$ si $X$ tiene $n$ puntos. 2. Para $x \neq y$, radios menores que $|x-y|/2$. 3. No. 4. Imagen de una separación sería separación. 5. Cuadrado con $(0,y) \sim (1, 1-y)$. 6. No: dos componentes. 7. Discreta. 8. No: orientabilidad distinta.

## Resumen
- Los abiertos definen la topología; las intersecciones finitas son la clave de los axiomas.
- Continuidad es preimagen de abiertos; homeomorfismo es la igualdad topológica.
- Conexidad y compacidad son invariantes centrales que preservan las funciones continuas.
- Hausdorff garantiza límites únicos; producto y cociente construyen espacios nuevos.
- La topología general es el escenario de todo el análisis moderno.
`,

  "topologia-algebraica": String.raw`
## Homotopía
Dos funciones continuas $f, g: X \to Y$ son **homótopas** si se deforman una en otra por una familia continua $H(x, t)$ con $H(x,0) = f(x)$ y $H(x,1) = g(x)$.

**Equivalencia homotópica:** $X$ e $Y$ son equivalentes si hay $f: X \to Y$ y $g: Y \to X$ con $g \circ f$ y $f \circ g$ homótopas a las identidades. Es más flexible que homeomorfismo.

**Contráctil:** equivalente a un punto. El disco, $\mathbb{R}^n$, los intervalos son contráctiles.

**Ejemplo.** El anillo $S^1 \times [0,1]$ es equivalente a $S^1$ (se contrae la altura), pero no homeomorfo.

La homotopía ignora las deformaciones suaves y conserva solo la "forma esencial".

## El grupo fundamental
Fija un punto base $x_0$. Los **lazos** son caminos cerrados en $x_0$; dos lazos son equivalentes si son homótopos fijando extremos. Las clases forman un grupo con la concatenación:
$$\pi_1(X, x_0)$$

- Independiente del punto base si $X$ es conexo por caminos (salvo isomorfismo).
- Si es trivial, $X$ es **simplemente conexo**.

**Ejemplos:**
- $\pi_1(S^1) = \mathbb{Z}$: cada lazo se clasifica por su número de vueltas.
- $\pi_1(S^n) = 0$ para $n \geq 2$.
- $\pi_1(\mathbb{R}^n) = 0$.

## Cálculo del grupo fundamental
**Herramientas:**
- **Retractos de deformación:** si $A$ es retracto de deformación de $X$, $\pi_1(A) \cong \pi_1(X)$.
- **Teorema de Van Kampen:** si $X = U \cup V$ con $U, V, U \cap V$ conexos por caminos,
$$\pi_1(X) = \pi_1(U) *_{\pi_1(U \cap V)} \pi_1(V)$$
el producto amalgamado. Permite calcular uniendo piezas.
- **Productos:** $\pi_1(X \times Y) = \pi_1(X) \times \pi_1(Y)$.

**Ejemplo.** El toro $T^2 = S^1 \times S^1$: $\pi_1 = \mathbb{Z} \times \mathbb{Z}$. La figura 8 tiene $\pi_1$ = grupo libre de rango 2.

**Aplicación:** el teorema del punto fijo de Brouwer y el teorema de Borsuk-Ulam se demuestran con estos invariantes.

## Espacios cubrientes
Una **cubierta** $p: \tilde{X} \to X$ es una aplicación continua y sobreyectiva donde cada punto tiene una vecindad cuya preimagen es unión disjunta de copias homeomorfas.

**Teorema:** las cubiertas de $X$ (con $X$ conexo y razonable) corresponden a los subgrupos de $\pi_1(X)$.

**Ejemplos:**
- $\mathbb{R} \to S^1$, $t \mapsto e^{2\pi i t}$: cubierta universal del círculo.
- $S^n \to \mathbb{RP}^n$: cubierta doble del proyectivo real.
- El toro cubre a la botella de Klein (no orientable).

**Levantamiento de caminos:** todo camino en $X$ se levanta a $\tilde{X}$ desde un punto fijo: la herramienta para clasificar lazos.

## Homología
La homología asigna grupos abelianos $H_n(X)$ que cuentan agujeros de cada dimensión:
- $H_0$: componentes conexas (rango = número de componentes).
- $H_1$: túneles; es la abelianización de $\pi_1$.
- $H_2$: cavidades.

**Axiomas de Eilenberg-Steenrod:** invariancia homotópica, escisión, sucesión de Mayer-Vietoris, dimensión. La homología es el invariante más computable.

**Ejemplo.** Superficie de género $g$: $H_0 = \mathbb{Z}$, $H_1 = \mathbb{Z}^{2g}$, $H_2 = \mathbb{Z}$. El género se lee directamente.

## Complejos CW y característica de Euler
Un **complejo CW** se construye pegando celdas de dimensión creciente: puntos (0-celdas), aristas (1-celdas), discos (2-celdas), etc. Casi toda forma razonable admite una estructura CW.

**Característica de Euler:**
$$\chi = V - E + F = \sum_n (-1)^n c_n$$
donde $c_n$ es el número de celdas de dimensión $n$. También $\chi = \sum (-1)^n b_n$ con los números de Betti $b_n = \text{rango}\,H_n$.

**Ejemplos:** esfera $\chi = 2$; toro $\chi = 0$; superficie de género $g$: $\chi = 2 - 2g$. Es un invariante topológico (¡y se calcula contando!).

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, homotopía).** ¿Es contráctil $\mathbb{R}^2 \setminus \{0\}$?
- Se deforma sobre el círculo unitario.
- No es contráctil: es homotópico a $S^1$, con $\pi_1 = \mathbb{Z}$.

**Ejemplo 2 (práctica, grupo fundamental).** $\pi_1$ del plano perforado.
- Retracto de deformación: $S^1$.
- $\pi_1 = \mathbb{Z}$ (vueltas alrededor del agujero).

**Ejemplo 3 (práctica, Van Kampen).** $\pi_1$ de la esfera $S^2$.
- Cubre con dos hemisferios (contráctiles) que se cortan en una banda (contráctil).
- Producto amalgamado trivial: $\pi_1(S^2) = 0$.

**Ejemplo 4 (aplicación, punto fijo).** Toda función continua del disco en sí mismo tiene punto fijo (Brouwer).
- Si no lo tuviera, se construye una retracción del disco al borde.
- $\pi_1(S^1) = \mathbb{Z} \neq 0$ imposibilita la retracción.

**Ejemplo 5 (aplicación, homología).** Homología de la botella de Klein.
- $H_0 = \mathbb{Z}$, $H_1 = \mathbb{Z} \oplus \mathbb{Z}_2$, $H_2 = 0$.
- La torsión $\mathbb{Z}_2$ detecta la no orientabilidad.

**Ejemplo 6 (práctica, Euler).** Característica de Euler del cubo.
- $V = 8$, $E = 12$, $F = 6$.
- $\chi = 8 - 12 + 6 = 2$: igual a la esfera (son homeomorfos).

## Contextos donde se aplica
- **Matemática:** clasificación de superficies y variedades; teoremas de punto fijo.
- **Física:** defectos topológicos, solitones, fases de la materia.
- **Robótica:** espacios de configuración y planificación (obstáculos crean agujeros).
- **Análisis de datos:** homología persistente para detectar forma.
- **Redes:** invariantes de grafos y complejos simpliciales.

## Errores comunes y cómo evitarlos
- **Confundir homotopía con homeomorfismo.** La homotopía es más gruesa.
- **Olvidar el punto base.** $\pi_1$ depende de él fuera de espacios conexos por caminos.
- **Suponer que $\pi_1$ abeliano.** En general no lo es (figura 8).
- **Usar homología para concluir homeomorfismo.** Compartir homología no basta.
- **Ignorar la torsión en homología.** $H_1$ puede tener partes finitas.

## Ejercicios propuestos
1. ¿Es contráctil la esfera $S^2$?
2. Calcula $\pi_1$ del toro y del plano proyectivo.
3. ¿Es simplemente conexo $\mathbb{R}^3 \setminus \{\text{recta}\}$?
4. Característica de Euler del toro contando celdas.
5. Homología de $S^2$.
6. Demuestra que $S^1$ no es contráctil.
7. ¿Cuántas vueltas da el lazo $e^{4\pi i t}$ en $S^1$?
8. ¿Es la botella de Klein orientable? (relación con homología).

**Respuestas:** 1) No ($\pi_2$ no trivial; no es homotópica a un punto). 2) $\mathbb{Z}^2$ y $\mathbb{Z}_2$. 3) No: $\pi_1 = \mathbb{Z}$. 4) $V - E + F = 1 - 2 + 1 = 0$. 5) $H_0 = H_2 = \mathbb{Z}$, $H_1 = 0$. 6. Su $\pi_1 = \mathbb{Z}$. 7. Dos. 8. No; su $H_2 = 0$ lo delata.

## Resumen
- La homotopía clasifica espacios por deformación; el grupo fundamental captura los lazos.
- Van Kampen y las cubiertas calculan $\pi_1$; las cubiertas corresponden a subgrupos.
- La homología cuenta agujeros por dimensión y es el invariante más computable.
- Complejos CW y característica de Euler dan herramientas de cálculo directo.
- Los invariantes algebraicos resuelven teoremas de punto fijo y clasificación de superficies.
`,

  "geo-diferencial": String.raw`
## Curvas parametrizadas
Una **curva** es una aplicación diferenciable $\alpha: I \to \mathbb{R}^n$, $\alpha(t) = (x(t), y(t), z(t))$. El vector **velocidad** es $\alpha'(t)$; la **rapidez** es $|\alpha'(t)|$.

**Regular:** $\alpha'(t) \neq 0$ en todo punto. En una curva regular se puede definir la recta tangente.

**Reparametrización:** cambiar el parámetro sin cambiar la curva geométrica. La **longitud de arco** es la parametrización natural:
$$s(t) = \int_a^t |\alpha'(\tau)|\,d\tau$$

**Ejemplo.** La hélice $\alpha(t) = (\cos t, \text{sen}\,t, t)$ tiene rapidez $\sqrt{2}$; su longitud de 0 a $2\pi$ es $2\pi\sqrt{2}$.

## Triedro de Frenet-Serret
Parametrizando por longitud de arco, se definen los vectores:
- **Tangente:** $T(s) = \alpha'(s)$ (unitario).
- **Normal:** $N(s) = T'(s)/|T'(s)|$.
- **Binormal:** $B = T \times N$.

**Ecuaciones de Frenet-Serret:**
$$T' = \kappa N, \qquad N' = -\kappa T + \tau B, \qquad B' = -\tau N$$
donde $\kappa$ es la curvatura y $\tau$ la torsión. Estas ecuaciones determinan la curva salvo movimiento rígido: el **teorema fundamental de las curvas**.

## Curvatura y torsión
- **Curvatura:** $\kappa = |T'(s)| = \dfrac{|\alpha' \times \alpha''|}{|\alpha'|^3}$: mide cuánto se dobla la curva. $\kappa = 1/R$ para una circunferencia de radio $R$.
- **Torsión:** $\tau = -\dfrac{(T \times T') \cdot T''}{|T'|^2}$: mide cuánto se sale del plano.

**Interpretación:** $\kappa$ es el giro del plano osculador; $\tau$, el giro del triedro. Una curva plana tiene $\tau = 0$; una hélice tiene ambas constantes.

**Ejemplo.** La circunferencia de radio $R$: $\kappa = 1/R$, $\tau = 0$. La hélice circular: $\kappa$ y $\tau$ constantes.

## Superficies y la primera forma fundamental
Una **superficie** parametrizada es $X(u, v): U \subseteq \mathbb{R}^2 \to \mathbb{R}^3$. Los vectores tangentes $\partial_u, \partial_v$ generan el plano tangente; la **normal** es $\dfrac{X_u \times X_v}{|X_u \times X_v|}$.

La **primera forma fundamental** define la métrica de la superficie:
$$I = E\,du^2 + 2F\,du\,dv + G\,dv^2$$
con $E = X_u \cdot X_u$, $F = X_u \cdot X_v$, $G = X_v \cdot X_v$.

Con ella se miden **longitudes, ángulos y áreas sobre la superficie**, sin referencia al espacio ambiente. Es la noción de **geometría intrínseca**.

## Segunda forma fundamental y curvaturas
La **segunda forma fundamental** mide cómo se dobla la superficie en el espacio:
$$II = L\,du^2 + 2M\,du\,dv + N\,dv^2$$
con $L = X_{uu}\cdot n$, $M = X_{uv}\cdot n$, $N = X_{vv}\cdot n$.

**Curvaturas principales:** los valores propios de la matriz de la segunda forma respecto a la primera. Se obtienen de:
$$K = \frac{LN - M^2}{EG - F^2} \quad \text{(curvatura gaussiana)}, \qquad H = \frac{EN - 2FM + GL}{2(EG - F^2)} \quad \text{(media)}$$

**Clasificación de puntos:** $K > 0$ elíptico; $K < 0$ hiperbólico (silla); $K = 0$ parabólico o plano.

## Geodésicas
Una **geodésica** es la curva de longitud mínima local entre puntos; equivalentemente, la curva con aceleración tangencial nula (la "recta" de la superficie).

Se obtiene de las **ecuaciones de Euler-Lagrange** de la longitud de arco o del sistema con los **símbolos de Christoffel**:
$$\ddot{u}^k + \sum_{i,j} \Gamma^k_{ij}\dot{u}^i\dot{u}^j = 0$$

**Ejemplos:** en el plano, rectas; en la esfera, círculos máximos; en el cilindro, hélices.

La geometría intrínseca (longitudes, geodésicas, área) no depende de cómo se sumerja la superficie.

## Teorema egregio de Gauss
**Gauss** descubrió que la curvatura gaussiana $K$ se puede calcular solo con la primera forma fundamental (la métrica): es una propiedad **intrínseca**, independiente de la inmersión.

**Consecuencia:** la esfera tiene $K = 1/R^2 > 0$; no existe un mapa plano que preserve distancias. La Tierra no se puede desarrollar en un mapa sin distorsión.

**Theorema egregium:** "teorema sobresaliente". Es el resultado que fundó la geometría riemanniana: la curvatura depende solo de la métrica.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, longitud).** Longitud de $\alpha(t) = (3t, 4t)$ de $t = 0$ a $2$.
- $|\alpha'| = 5$.
- $L = \int_0^2 5\,dt = 10$.

**Ejemplo 2 (práctica, curvatura).** Circunferencia de radio 5.
- $\kappa = 1/5$.
- $\tau = 0$ (es plana).

**Ejemplo 3 (práctica, primera forma).** Esfera unidad $X(\theta, \phi) = (\text{sen}\,\phi\cos\theta, \text{sen}\,\phi\,\text{sen}\,\theta, \cos\phi)$.
- $E = \text{sen}^2\phi$, $F = 0$, $G = 1$.
- $I = \text{sen}^2\phi\,d\theta^2 + d\phi^2$.

**Ejemplo 4 (aplicación, curvatura gaussiana).** Curvatura de la esfera de radio $R$.
- $K = 1/R^2$ constante y positiva.
- El área de un triángulo esférico excede $\pi$ en $K \times$ área: la curvatura se mide con ángulos.

**Ejemplo 5 (aplicación, geodésica).** Geodésicas del cilindro.
- Desarrollando el cilindro en el plano, las geodésicas son rectas.
- Al enrollar: hélices (y las generatrices y circunferencias como casos límite).

**Ejemplo 6 (aplicación, egregium).** ¿Por qué no hay mapas perfectos de la Tierra?
- La esfera tiene $K = 1/R^2 \neq 0$; el plano tiene $K = 0$.
- Si existiera una isometría, la curvatura se conservaría (Gauss). Imposible.

## Contextos donde se aplica
- **Cartografía:** proyecciones y distorsión; la curvatura explica los compromisos.
- **Física:** relatividad general (geometría del espacio-tiempo), mecánica de curvas.
- **Gráficos 3D:** superficies, normales, iluminación, texturas.
- **Robótica:** trayectorias sobre superficies (geodésicas).
- **Biología:** formas de membranas y superficies mínimas.

## Errores comunes y cómo evitarlos
- **Confundir curvatura con torsión.** La curvatura dobla; la torsión sale del plano.
- **Olvidar la reparametrización por longitud de arco.** Las fórmulas de Frenet la requieren.
- **Confundir propiedades intrínsecas y extrínsecas.** $K$ es intrínseca; la normal, no.
- **Suponer que toda geodésica es globalmente mínima.** Solo localmente; en la esfera, los círculos máximos compiten.
- **Errar al calcular la normal.** $X_u \times X_v$ debe ser no nulo (parametrización regular).

## Ejercicios propuestos
1. Longitud de $\alpha(t) = (t, t^2)$ de 0 a 1 (deja la integral planteada).
2. Curvatura de una recta.
3. Curvatura y torsión de la hélice $(\cos t, \text{sen}\,t, ct)$.
4. Primera forma fundamental del plano en polares.
5. ¿Cuál es la curvatura gaussiana de un cilindro? ¿Es desarrollable?
6. Halla una geodésica de la esfera por dos puntos dados.
7. ¿Puede una superficie tener $K < 0$ constante? Da un ejemplo.
8. Demuestra que el área de un triángulo esférico con ángulos $90°, 90°, 90°$ es $\pi/2$.

**Respuestas:** 1) $\int_0^1\sqrt{1+4t^2}\,dt$. 2) $0$. 3) $\kappa = 1/(1+c^2)$, $\tau = c/(1+c^2)$. 4) $dr^2 + r^2\,d\theta^2$. 5) $K = 0$; sí, es desarrollable. 6) Círculo máximo. 7. Sí: el pseudoplano (tractoide). 8. Área $= A + B + C - \pi = \pi/2$ con $K = 1$.

## Resumen
- Curvas: Frenet describe tangente, normal y binormal; curvatura y torsión las determinan salvo movimiento.
- Superficies: la primera forma da la métrica intrínseca; la segunda, la curvatura extrínseca.
- Las geodésicas generalizan las rectas; se obtienen de Euler-Lagrange.
- El teorema egregio: la curvatura gaussiana es intrínseca.
- La geometría diferencial clásica es la puerta a las variedades y Riemann.
`,

  "variedades": String.raw`
## Variedades diferenciables
Una **variedad** de dimensión $n$ es un espacio topológico que localmente parece $\mathbb{R}^n$: cada punto tiene una vecindad homeomorfa a un abierto euclídeo, mediante **cartas** $(U, \varphi)$.

Un **atlas** es una colección de cartas que cubren la variedad; los cambios de carta deben ser diferenciables ($C^\infty$). Eso permite hacer cálculo en espacios curvos.

**Ejemplos:**
- $\mathbb{R}^n$ mismo; la esfera $S^n$ (dos cartas por proyección estereográfica).
- El toro $T^2$, el proyectivo $\mathbb{RP}^n$, el grupo $GL_n(\mathbb{R})$ (un abierto de $M_n$).
- Superficies regulares en $\mathbb{R}^3$.

**Ejemplo.** $S^2$ con dos cartas: quitar el polo norte y proyectar; quitar el sur y proyectar. Las transiciones son suaves.

## El espacio tangente
En cada punto $p$ se define el **espacio tangente** $T_pM$: los vectores velocidad de curvas que pasan por $p$. Es un espacio vectorial de dimensión $n$.

En coordenadas, los vectores $\dfrac{\partial}{\partial x^i}$ forman una base.

El **fibrado tangente** $TM = \bigsqcup_p T_pM$ es una variedad de dimensión $2n$: el conjunto de todos los vectores tangentes.

**Diferencial de una función:** $df_p: T_pM \to \mathbb{R}$; en coordenadas es el gradiente.

## Aplicaciones diferenciables
$F: M \to N$ es **diferenciable** si en cada par de cartas la expresión coordenada es suave. La **diferencial** $dF_p: T_pM \to T_{F(p)}N$ es la mejor aproximación lineal.

**Submersión:** $dF_p$ sobreyectiva (teorema de la función implícita). **Inmersión:** $dF_p$ inyectiva. **Embebimiento:** inmersión inyectiva y homeomorfismo sobre la imagen.

**Teorema de la preimagen (regular value):** si $c$ es valor regular, $F^{-1}(c)$ es una subvariedad de dimensión $\dim M - \dim N$.

**Ejemplo.** La esfera es $f^{-1}(1)$ para $f(x) = |x|^2$ en $\mathbb{R}^3 \setminus \{0\}$: subvariedad de dimensión 2.

## Campos vectoriales y flujos
Un **campo vectorial** asigna a cada punto un vector tangente: $X(p) \in T_pM$. En coordenadas, es un sistema de funciones.

**Curvas integrales:** curvas cuya velocidad es el campo. El **flujo** $\phi_t$ mueve cada punto a lo largo de su curva integral.

**Corchete de Lie:** $[X, Y]$ mide la no conmutatividad de los flujos. Es un campo vectorial y cumple Jacobi.

**Ejemplo.** En $\mathbb{R}^2$, el campo $X = (-y, x)$ genera rotaciones: sus curvas integrales son circunferencias y el flujo son rotaciones.

## Formas diferenciales
Una **1-forma** es una asignación lineal a cada espacio tangente (un campo de covectores). Una **k-forma** asigna a cada punto una aplicación multilineal alternada de $k$ vectores.

**Derivada exterior** $d$: lleva $k$-formas a $(k+1)$-formas, con $d^2 = 0$ (la clave de la cohomología).

**Fórmula de Cartan:** $\mathcal{L}_X = d\iota_X + \iota_X d$: relaciona derivada de Lie, contracción y derivada exterior.

**Ejemplo.** En $\mathbb{R}^3$: $df$ es el gradiente (como 1-forma); $d$ de una 1-forma es el rotacional; $d$ de una 2-forma es la divergencia. El cálculo vectorial queda unificado.

## Integración sobre variedades y Stokes
Una **orientación** permite integrar $n$-formas sobre variedades de dimensión $n$. En coordenadas:
$$\int_U \omega = \int_{\varphi(U)} f(x)\,dx^1 \cdots dx^n$$

**Teorema de Stokes general:**
$$\int_M d\omega = \int_{\partial M} \omega$$
Generaliza a Green, Stokes y Gauss en una sola fórmula. Es la declaración más elegante del cálculo multivariable.

**Aplicación:** la integral de una forma cerrada ($d\omega = 0$) sobre un ciclo depende solo de su clase de homología.

## Orientabilidad
Una variedad es **orientable** si admite un atlas con transiciones de determinante jacobiano positivo; equivalentemente, admite una forma de volumen que nunca se anula.

**Ejemplos:** esferas y toros son orientables; la banda de Möbius y la botella de Klein no lo son.

**Consecuencia:** solo en variedades orientables se integra sin ambigüedad de signo. La orientabilidad es un invariante topológico detectado por la homología superior.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, cartas).** Describe una carta del toro.
- $T^2 = \mathbb{R}^2/\mathbb{Z}^2$; la proyección de un cuadrado abierto es una carta.
- Transiciones: traslaciones por enteros (suaves).

**Ejemplo 2 (práctica, tangente).** Espacio tangente a $S^2$ en el polo norte.
- Vectores perpendiculares a $(0,0,1)$.
- Es el plano $z = 1$ trasladado... formalmente: el plano horizontal en el punto.

**Ejemplo 3 (práctica, preimagen).** Demuestra que $SL_n(\mathbb{R})$ es una variedad.
- $SL_n = \det^{-1}(1)$; $1$ es valor regular de $\det$.
- Dimensión $n^2 - 1$.

**Ejemplo 4 (aplicación, Stokes).** Calcula el área de $S^2$ integrando la 2-forma estándar.
- $\int_{S^2}\omega = 4\pi$ con la forma de área.
- Coincide con $\int_{\partial B^3}\omega$: Stokes conecta esfera y bola.

**Ejemplo 5 (aplicación, campo).** Curvas integrales del campo gradiente de $f(x,y) = x^2 + y^2$.
- Las curvas son radiales hacia afuera.
- El flujo expande; las líneas de nivel son círculos (perpendiculares).

**Ejemplo 6 (aplicación, orientabilidad).** ¿Es orientable la banda de Möbius?
- No: al recorrerla, la normal vuelve invertida.
- Su fibrado tangente no es trivial; no hay forma de volumen global.

## Contextos donde se aplica
- **Física:** relatividad general (el espacio-tiempo es una variedad), mecánica lagrangiana (fibrados).
- **Robótica:** espacios de configuración son variedades (articulaciones, orientaciones).
- **Gráficos:** mallas de superficies, parametrizaciones, técnicas de mapeo.
- **Machine learning:** variedades de datos (manifold learning), geometría de espacios latentes.
- **Matemática:** puente entre geometría, topología, álgebra y análisis.

## Errores comunes y cómo evitarlos
- **Confundir variedad con superficie en $\mathbb{R}^3$.** Las variedades son intrínsecas.
- **Olvidar la compatibilidad de cartas.** El atlas debe tener transiciones suaves.
- **Suponer que toda variedad es orientable.** Möbius y Klein son contraejemplos.
- **Aplicar el teorema de la preimagen sin valor regular.** Si $c$ es crítico, la preimagen puede ser singular.
- **Confundir el espacio tangente con la variedad.** Son objetos de dimensiones distintas.

## Ejercicios propuestos
1. Describe dos cartas de $S^1$.
2. ¿Qué dimensión tiene $GL_n(\mathbb{R})$?
3. Espacio tangente a $S^1$ en $(1, 0)$.
4. Demuestra que $O(n)$ es una subvariedad de dimensión $n(n-1)/2$.
5. Calcula el flujo del campo $X = (1, 0)$ en $\mathbb{R}^2$.
6. ¿Es orientable el toro?
7. Aplica Stokes a la 1-forma $x\,dy$ sobre el círculo unitario.
8. ¿Por qué el corchete de Lie de $X = \partial_x$ e $Y = x\partial_y$ es $[X, Y] = \partial_y$?

**Respuestas:** 1) Proyección estereográfica desde dos polos. 2) $n^2$. 3) La recta vertical en el punto (dirección $y$). 4. $O(n) = f^{-1}(I)$ para $f(A) = A^TA$. 5. $\phi_t(x,y) = (x + t, y)$. 6. Sí. 7. $\int_{S^1} x\,dy = \pi$ (área). 8. Calcula $XY - YX$.

## Resumen
- Una variedad es localmente euclídea, con cartas compatibles que permiten cálculo.
- El espacio tangente y el fibrado tangente son los escenarios de la velocidad.
- Los campos vectoriales generan flujos; el corchete mide su no conmutatividad.
- Las formas y la derivada exterior unifican gradiente, rotacional y divergencia; Stokes generaliza todos los teoremas integrales.
- La orientabilidad decide cuándo se puede integrar sin ambigüedad.
`,

  "geo-riemann": String.raw`
## Métricas riemannianas
Una **métrica riemanniana** en una variedad $M$ asigna a cada espacio tangente un producto interno que varía suavemente:
$$g_p: T_pM \times T_pM \to \mathbb{R}$$

En coordenadas locales se escribe $g = g_{ij}\,dx^i \otimes dx^j$. Con ella se miden **longitudes, ángulos, áreas y distancias** en la variedad.

**Ejemplos:**
- $\mathbb{R}^n$ con la métrica euclidiana $g_{ij} = \delta_{ij}$.
- La esfera $S^2$ con $g = d\phi^2 + \text{sen}^2\phi\,d\theta^2$.
- El plano hiperbólico con $g = (dx^2 + dy^2)/y^2$.
- Espacio de Minkowski (relatividad): métrica de signatura indefinida.

Una métrica convierte una variedad topológica en un espacio de medición.

## Conexión y derivada covariante
Para derivar campos vectoriales en variedades se necesita una **conexión** $\nabla$: una regla que transporta vectores entre espacios tangentes.

**Conexión de Levi-Civita:** la única sin torsión y compatible con la métrica ($\nabla g = 0$). Se calcula con los **símbolos de Christoffel**:
$$\Gamma^k_{ij} = \frac{1}{2}g^{kl}\left(\partial_i g_{jl} + \partial_j g_{il} - \partial_l g_{ij}\right)$$

**Derivada covariante** de un campo $Y$ en dirección de $X$: $\nabla_X Y$. Los símbolos de Christoffel no son tensores: dependen de las coordenadas, pero la conexión no.

**Transporte paralelo:** mover un vector a lo largo de una curva manteniéndolo "constante" ($\nabla_{\dot\gamma}V = 0$). En curvatura no nula, depende del camino.

## Geodésicas
Una **geodésica** es una curva que transporta paralelamente su propio vector velocidad:
$$\nabla_{\dot\gamma}\dot\gamma = 0$$

En coordenadas:
$$\ddot{x}^k + \Gamma^k_{ij}\dot{x}^i\dot{x}^j = 0$$

Las geodésicas son los "caminos rectos" y minimizan distancia localmente. El **teorema de Hopf-Rinow** conecta completitud métrica, geodésica y topológica.

**Ejemplos:** rectas en $\mathbb{R}^n$; círculos máximos en la esfera; semicírculos verticales en el plano hiperbólico.

## Curvatura de Riemann
El **tensor de curvatura** mide cuánto falla el transporte paralelo en conmutar:
$$R(X, Y)Z = \nabla_X\nabla_YZ - \nabla_Y\nabla_XZ - \nabla_{[X,Y]}Z$$

En coordenadas:
$$R^l_{ijk} = \partial_i\Gamma^l_{jk} - \partial_j\Gamma^l_{ik} + \Gamma^l_{im}\Gamma^m_{jk} - \Gamma^l_{jm}\Gamma^m_{ik}$$

**Propiedades:** antisimetría en los pares, primera y segunda identidad de Bianchi, simetrías de los índices.

**Curvatura seccional:** la curvatura gaussiana del plano generado por dos vectores: $K(X,Y) = \dfrac{\langle R(X,Y)Y, X\rangle}{|X|^2|Y|^2 - \langle X, Y\rangle^2}$. Determina completamente el tensor.

**Geodésicas cercanas:** la curvatura mide si convergen (positiva), divergen (negativa) o se mantienen (cero).

## Curvatura de Ricci y escalar
**Contracciones del tensor de Riemann:**
- **Ricci:** $R_{ij} = R^k_{ikj}$: promedio de curvaturas seccionales en cada dirección.
- **Escalar:** $R = g^{ij}R_{ij}$: un solo número por punto.

**Ecuaciones de Einstein:** $R_{ij} - \frac{1}{2}Rg_{ij} = 8\pi T_{ij}$: la materia ($T$) curva el espacio-tiempo. La relatividad general es geometría riemanniana (lorentziana).

**Ejemplo.** La esfera $S^n$ tiene curvatura seccional constante $1/R^2$, Ricci $(n-1)/R^2$ y escalar $n(n-1)/R^2$.

## Comparación y resultados globales
**Teoremas de comparación:** comparan triángulos geodésicos con los de curvatura constante:
- **Bonnet-Myers:** curvatura de Ricci $\geq (n-1)/R^2 > 0$ implica diámetro $\leq \pi R$ y compactitud.
- **Cartan-Hadamard:** curvatura seccional $\leq 0$ y simplemente conexo implica difeomorfo a $\mathbb{R}^n$.
- **Synge:** curvatura positiva y dimensión par orientable implica simplemente conexo.

**Teorema de Gauss-Bonnet:** $\displaystyle\int_M K\,dA = 2\pi\chi(M)$: la curvatura total es un invariante topológico. Une geometría y topología de forma espectacular.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, métrica).** Métrica de la esfera en coordenadas esféricas.
- $g = R^2(d\phi^2 + \text{sen}^2\phi\,d\theta^2)$.
- Área total: $\int_0^{2\pi}\int_0^{\pi} R^2\text{sen}\,\phi\,d\phi\,d\theta = 4\pi R^2$.

**Ejemplo 2 (práctica, geodésica).** Verifica que los círculos máximos son geodésicas de la esfera.
- Por simetría, la aceleración covariante es normal a la esfera.
- La componente tangencial se anula: $\nabla_{\dot\gamma}\dot\gamma = 0$. $\blacksquare$

**Ejemplo 3 (aplicación, curvatura).** Curvatura seccional del plano hiperbólico.
- $K = -1$ constante.
- Los triángulos tienen suma de ángulos menor que $\pi$.

**Ejemplo 4 (aplicación, Gauss-Bonnet).** Verifica en la esfera.
- $\int K\,dA = \frac{1}{R^2}\cdot 4\pi R^2 = 4\pi$.
- $2\pi\chi(S^2) = 4\pi$. Coincide.

**Ejemplo 5 (aplicación, relatividad).** Desvía la luz el Sol.
- La métrica de Schwarzschild describe el espacio-tiempo solar.
- Las geodésicas nulas (luz) se curvan: la deflexión predicha ($1.75''$) se midió en 1919.

**Ejemplo 6 (práctica, Ricci).** Curvatura de Ricci de la esfera $S^2$ de radio $R$.
- $R_{ij} = \frac{1}{R^2}g_{ij}$.
- Escalar $R = 2/R^2$.

## Contextos donde se aplica
- **Relatividad general:** agujeros negros, cosmología, ondas gravitacionales.
- **Matemática:** geometría global, flujo de Ricci (poincaré), teoría de Einstein.
- **Visión por computador y ML:** manifold learning, distancias geodésicas en datos.
- **Robótica:** espacios de configuración con métricas no euclídeas.
- **Materiales:** geometría de superficies y membranas.

## Errores comunes y cómo evitarlos
- **Confundir los símbolos de Christoffel con tensores.** No lo son: cambian con las coordenadas.
- **Olvidar la compatibilidad métrica.** Levi-Civita es única bajo esas hipótesis.
- **Suponer que las geodésicas son siempre mínimas globales.** En la esfera hay varias.
- **Confundir curvatura seccional con escalar.** La escalar es un promedio.
- **Ignorar la signatura en relatividad.** El tiempo entra con signo negativo.

## Ejercicios propuestos
1. Escribe la métrica del plano en polares.
2. Calcula los símbolos de Christoffel de la esfera.
3. Demuestra que las rectas son geodésicas de $\mathbb{R}^n$.
4. Verifica Gauss-Bonnet en el toro plano.
5. Curvatura escalar de $S^3$ de radio $R$.
6. ¿Qué implica Cartan-Hadamard para el plano hiperbólico?
7. ¿Qué curvatura tiene el cilindro (como variedad riemanniana)?
8. Interpreta la ecuación de Einstein en palabras.

**Respuestas:** 1) $dr^2 + r^2 d\theta^2$. 2) $\Gamma^\phi_{\theta\theta} = -\text{sen}\,\phi\cos\phi$, $\Gamma^\theta_{\phi\theta} = \cot\phi$. 3) Los símbolos se anulan. 4) $\int K = 0 = 2\pi\chi$ (toro). 5. $6/R^2$. 6. Es difeomorfo a $\mathbb{R}^2$ y simplemente conexo. 7. $K = 0$ (desarrollable). 8. La materia-energía dicta la curvatura del espacio-tiempo.

## Resumen
- Una métrica riemanniana permite medir en una variedad; Levi-Civita da la conexión estándar.
- Las geodésicas son los caminos rectos; el transporte paralelo depende del camino en curvatura no nula.
- Riemann, Ricci y escalar describen la curvatura a distintos niveles.
- Los teoremas de comparación y Gauss-Bonnet conectan geometría local con topología global.
- Es el lenguaje de la relatividad general y de la geometría moderna.
`,

  "geo-algebraica": String.raw`
## Variedades afines
Una **variedad algebraica afín** es el conjunto de ceros comunes de una familia de polinomios:
$$V(S) = \{p \in \mathbb{K}^n : f(p) = 0 \; \forall f \in S\}$$

**Ejemplos:** rectas y cónicas en el plano; la esfera $x^2 + y^2 + z^2 = 1$; la curva $y^2 = x^3 - x$ (elíptica).

**Ideal asociado:** para $V \subseteq \mathbb{K}^n$,
$$I(V) = \{f \in \mathbb{K}[x_1,\ldots,x_n] : f(p) = 0 \; \forall p \in V\}$$

La geometría (conjuntos) y el álgebra (ideales) se corresponden. Esa dualidad es el corazón de la disciplina.

## El Nullstellensatz y la correspondencia
**Nullstellensatz (teorema de los ceros) de Hilbert:** sobre un cuerpo algebraicamente cerrado:
$$I(V(I)) = \sqrt{I}$$
donde $\sqrt{I}$ es el radical de $I$ (los polinomios cuyas potencias están en $I$).

**Consecuencias:**
- Correspondencia biyectiva entre variedades e ideales radicales.
- Ideales maximales $\leftrightarrow$ puntos.
- Ideales primos $\leftrightarrow$ subvariedades irreducibles.

**Ejemplo.** $V(x^2 - y, y^2 - x) = \{(0,0), (1,1)\}$; su ideal es la intersección de los ideales de cada punto.

## Coordenadas y morfismos
El **anillo de coordenadas** de $V$ es $A(V) = \mathbb{K}[x_1,\ldots,x_n]/I(V)$: las funciones polinómicas sobre $V$ (dos polinomios son iguales si coinciden en $V$).

**Morfismos** entre variedades: aplicaciones dadas por polinomios $F = (f_1, \ldots, f_m)$ que llevan $V$ a $W$. Inducen homomorfismos de anillos en sentido contrario: contravariante.

**Equivalencia de categorías:** la categoría de variedades afines es equivalente (opuesta) a la de álgebras reducidas finitamente generadas. Geometría y álgebra son dos vistas de lo mismo.

## Curvas algebraicas y género
Una **curva** es una variedad de dimensión 1. Las curvas proyectivas suaves se clasifican por su **género** $g$ (número de "agujeros"):

- $g = 0$: rectas, cónicas (esencialmente la esfera de Riemann $\mathbb{P}^1$).
- $g = 1$: curvas elípticas.
- $g \geq 2$: curvas generales.

**Grado y género:** para una curva plana suave de grado $d$:
$$g = \frac{(d-1)(d-2)}{2}$$
Cúbicas ($d = 3$) tienen género 1: se necesitan curvas de grado 4 para género 3.

**Aplicación:** las curvas elípticas son grupos; sostienen la criptografía ECC.

## Divisores y Riemann-Roch (introducción)
Un **divisor** formaliza ceros y polos de funciones con multiplicidad: $D = \sum n_i p_i$. Su **grado** es $\sum n_i$.

**Espacio de Riemann-Roch:** $L(D)$ son las funciones con polos controlados por $D$. El teorema de Riemann-Roch:
$$\dim L(D) - \dim L(K - D) = \deg D - g + 1$$
Relaciona el género, el grado y las dimensiones. Es una de las herramientas más profundas de la geometría algebraica y culmina en el teorema de Riemann-Roch-Hirzebruch.

## Variedades proyectivas y haces
El **espacio proyectivo** $\mathbb{P}^n$ añade puntos al infinito y hace que la intersección sea perfecta (Bézout). Las variedades proyectivas son cerradas en $\mathbb{P}^n$.

**Teoría de haces:** un **haz** asigna datos locales compatibles (funciones, formas) a cada abierto. La **cohomología de haces** $H^i(X, \mathcal{F})$ mide obstrucciones globales.

**Ejemplo.** $H^1(\mathbb{P}^1, \mathcal{O}) = 0$; los haces de líneas sobre curvas se clasifican por el grado.

## Esquemas (panorama)
Los **esquemas** de Grothendieck generalizan las variedades admitiendo coordenadas nilpotentes (información infinitesimal) y trabajando sobre cualquier anillo base.

**Idea:** el espectro $\text{Spec}(R)$ es el esquema afín; se pegan esquemas afines para formar esquemas generales.

**Ventajas:** unifica variedades algebraicas, aritmética de $\mathbb{Z}$, y permite definir familias y deformaciones. Toda la geometría algebraica moderna usa esquemas.

**Ejemplo.** $\text{Spec}(\mathbb{Z})$ contiene los puntos primos y el punto genérico; es el modelo de la aritmética.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, variedad).** Describe $V(y - x^2)$ en $\mathbb{C}^2$.
- Es la parábola $y = x^2$.
- Su ideal es primo (el cociente es $\mathbb{C}[x]$): variedad irreducible.

**Ejemplo 2 (práctica, intersección).** Intersección de $y = x^2$ con $y = x$.
- Resuelve $x^2 = x$: puntos $(0,0)$ y $(1,1)$.
- Dos puntos: 2 = producto de los grados (Bézout en el plano).

**Ejemplo 3 (práctica, género).** Género de una cuártica plana suave.
- $g = (4-1)(4-2)/2 = 3$.
- Tres agujeros.

**Ejemplo 4 (aplicación, criptografía).** Curva elíptica $y^2 = x^3 - x$ sobre un cuerpo finito.
- Los puntos forman un grupo abeliano.
- Protocolos ECDH y ECDSA se apoyan en la dificultad del logaritmo discreto.

**Ejemplo 5 (aplicación, Bézout).** Número de intersecciones de dos cónicas.
- $d_1 \cdot d_2 = 4$ contando multiplicidades y puntos complejos.
- Sin proyectivizar, algunas se pierden en el infinito.

**Ejemplo 6 (aplicación, anillo de coordenadas).** Anillo de la hipérbola $xy = 1$.
- $\mathbb{C}[x, y]/(xy - 1) \cong \mathbb{C}[x, x^{-1}]$.
- Es un dominio, pero no finitamente generado como espacio vectorial: la hipérbola no es compacta.

## Contextos donde se aplica
- **Criptografía:** curvas elípticas, emparejamientos, protocolos post-cuánticos.
- **Teoría de números:** curvas sobre $\mathbb{Q}$, conjetura de Fermat-Wiles, puntos racionales.
- **Robótica:** cinemática con restricciones polinomiales; bases de Gröbner.
- **Códigos:** códigos algebraico-geométricos (Reed-Solomon, Goppa).
- **Física:** variedades de Calabi-Yau en teoría de cuerdas.

## Errores comunes y cómo evitarlos
- **Suponer que el ideal de una variedad es radical.** Puede haber nilpotentes.
- **Olvidar el cierre proyectivo.** Las intersecciones se cuentan en el proyectivo.
- **Confundir variedad algebraica con diferenciable.** Las singulares no son variedades.
- **Creer que todo ideal corresponde a variedad.** Depende del cuerpo base.
- **Ignorar la diferencia entre $\mathbb{R}$ y $\mathbb{C}$.** Los teoremas requieren clausura algebraica.

## Ejercicios propuestos
1. Describe $V(x^2 + y^2 - 1)$ en $\mathbb{R}^2$ y en $\mathbb{C}^2$.
2. ¿Es $I = (x^2)$ radical en $\mathbb{C}[x]$?
3. Halla el género de una quíntica plana suave.
4. Intersección de $y = x$ con $y = -x$.
5. ¿Por qué $y^2 = x^3 - x$ es una curva elíptica?
6. Anillo de coordenadas de $V(y - x^3)$.
7. ¿Qué puntos al infinito tiene la parábola $y = x^2$?
8. ¿Es $\mathbb{C}[x, y]$ un anillo noetheriano?

**Respuestas:** 1) Circunferencia real; en complejo, también cónica compleja. 2) No: $\sqrt{(x^2)} = (x)$. 3) $(5-1)(5-2)/2 = 6$. 4) $(0,0)$. 5. Es suave, género 1, y admite estructura de grupo. 6. $\mathbb{C}[x]$. 7. Uno: el punto al infinito en dirección vertical. 8. Sí (Hilbert).

## Resumen
- Las variedades algebraicas son ceros de polinomios; ideal y variedad se corresponden por el Nullstellensatz.
- El anillo de coordenadas convierte geometría en álgebra; los morfismos invierten flechas.
- Las curvas se clasifican por su género; Riemann-Roch conecta género, grado y funciones.
- Proyectivizar y usar haces resuelve problemas de intersección y globalidad.
- Los esquemas modernizan todo el edificio y lo conectan con la aritmética.
`,

  "nudos": String.raw`
## ¿Qué es un nudo?
Un **nudo** es un embebimiento del círculo en el espacio tridimensional: una cuerda cerrada sin autointersecciones. Un **enlace** tiene varios componentes anudados entre sí.

**Hasta deformación continua** (isotopía): no se pueden cortar ni atravesar. El problema central es clasificar nudos: ¿cuándo dos nudos son equivalentes?

**Ejemplos:**
- **Trivial:** una circunferencia sin anudar.
- **Trébol** ($3_1$): el nudo no trivial más simple.
- **Nudo de ocho** ($4_1$): su imagen especular es equivalente (anfiquiral).
- **Anillo de Borromeo:** tres componentes que juntos no se separan, pero ningún par está enlazado.

## Diagramas y movimientos de Reidemeister
Un **diagrama** es la proyección del nudo en el plano con información de cruces (arriba/abajo). Dos diagramas representan el mismo nudo si se relacionan por los **movimientos de Reidemeister**:

- **Tipo I:** elimina un rizo.
- **Tipo II:** desliza una hebra sobre otra.
- **Tipo III:** mueve una hebra por encima de un cruce.

**Teorema:** dos diagramas son del mismo nudo si y solo si se conectan por estos tres movimientos (más isotopía del plano). Son los "axiomas" de la teoría de nudos.

**Ejemplo.** El trébol necesita al menos 3 cruces; ningún movimiento de Reidemeister lo reduce a 0.

## Invariantes: grupo del nudo
Los invariantes distinguen nudos: si dos nudos tienen un invariante distinto, no son equivalentes (el recíproco no siempre vale).

**Grupo del nudo:** $\pi_1(\mathbb{R}^3 \setminus K)$, el grupo fundamental del complemento. Se calcula con la **presentación de Wirtinger** (un generador por arco, una relación por cruce).

**Ejemplos:** el grupo del trivial es $\mathbb{Z}$; el del trébol es $\langle a, b \mid a^2 = b^3\rangle$, no abeliano y distinto de $\mathbb{Z}$.

**Importante:** existen nudos con grupo $\mathbb{Z}$ no triviales (nudos de Conway, 11 cruces): el grupo no es completo.

## Polinomios de nudos
Invariantes polinomiales calculados desde el diagrama:

- **Polinomio de Alexander** $\Delta(t)$: derivado de la homología del recubrimiento cíclico; se calcula con la matriz de Alexander. Trébol: $t^2 - t + 1$.
- **Polinomio de Jones** $V(t)$: usa el álgebra de Temperley-Lieb y la representación de trenzas. Trébol: $-t^{-4} + t^{-3} + t^{-1}$. Distingue el trébol de su espejo (quiralidad).
- **Polinomio de HOMFLY** $P(a, z)$: generaliza Alexander y Jones.

**Propiedades:** con cambios de variable adecuados, todos son evaluaciones del polinomio de HOMFLY.

**Advertencia:** los polinomios no son completos: hay nudos distintos con el mismo polinomio de Jones.

## Superficies de Seifert y género
Una **superficie de Seifert** es una superficie orientable con borde el nudo. Su **género** (número de asas) es un invariante: el **género del nudo**. El nudo trivial tiene género 0; el trébol, género 1.

**Cómo construirla:** orientar el diagrama y resolver cada cruce con un "parche" (algoritmo de Seifert).

**Teorema:** el género es aditivo bajo la suma conexa: $g(K_1 \# K_2) = g(K_1) + g(K_2)$. El trébol es primo.

**Aplicación:** una superficie de género mínimo da cotas para el número de cruces.

## Suma conexa y nudos primos
La **suma conexa** $K_1 \# K_2$ corta ambos nudos y los une. Un nudo es **primo** si no se descompone como suma de dos no triviales.

**Teorema de Schubert:** todo nudo se descompone de forma única como suma conexa de nudos primos. Es el "teorema fundamental de la aritmética" de los nudos.

**Lista de primos:** con pocos cruces hay pocos: 0 (trivial), 3 (trébol), 4 (ocho), 5 (cinco nudos), 6 (tres), etc. El número de nudos primos crece muy rápido con los cruces.

## Aplicaciones de la teoría de nudos
- **Biología:** el ADN es una doble hélice anudada; las topoisomerasas cortan y reanudan hebras. Los modelos de nudos explican la replicación.
- **Química:** síntesis de nudos moleculares y catenanos.
- **Física:** cualquierones, teorías de campos topológicas, gravedad cuántica de lazos.
- **Matemática:** conexiones con teoría de representaciones cuánticas, álgebras de operadores, y la conjetura de Jones (probada por Khovanov).

**Ejemplo.** Un plásmido circular de ADN es un nudo (o enlace) cuya topología cambia con enzimas específicas.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, Reidemeister).** Simplifica un diagrama con un rizo aislado.
- Movimiento tipo I elimina el rizo.
- El nudo no cambia: es el mismo nudo.

**Ejemplo 2 (práctica, grupo).** Presentación del trébol.
- Tres arcos generan $a, b, c$; relaciones $c = b^{-1}ab$, etc.
- Resultado: $\langle a, b \mid a^2 = b^3 \rangle$.

**Ejemplo 3 (práctica, polinomio).** Polinomio de Alexander del trébol.
- Cálculo con la matriz: $\Delta(t) = t^2 - t + 1$.
- No es 1, como el del trivial: el trébol es no trivial.

**Ejemplo 4 (aplicación, quiralidad).** ¿Es el trébol igual a su imagen especular?
- El polinomio de Jones del trébol y de su espejo difieren.
- El trébol es quiral: no hay isotopía que lo iguale a su reflejo.

**Ejemplo 5 (aplicación, género).** Género del nudo de ocho.
- Superficie de Seifert de género 1.
- El nudo de ocho acota una superficie con un asa.

**Ejemplo 6 (aplicación, suma).** ¿Es el trébol primo? ¿Y la suma de dos tréboles?
- El trébol es primo (género 1 no se descompone).
- La suma de dos tréboles tiene género 2 y no es trivial.

## Contextos donde se aplica
- **Biología molecular:** topología del ADN, enzimas de restricción.
- **Física:** teorías topológicas, efecto Hall cuántico, gravedad cuántica.
- **Química:** moléculas anudadas, polímeros.
- **Matemática:** teoría de representaciones, nudos y 3-variedades (conjetura de Poincaré vía Ricci).
- **Computación:** algoritmos de simplificación de diagramas y homología de Khovanov.

## Errores comunes y cómo evitarlos
- **Confundir igualdad de invariantes con equivalencia.** Los invariantes no son completos.
- **Creer que un diagrama simple es el nudo trivial.** Puede tener cruces esenciales.
- **Olvidar la información de cruce.** Sin arriba/abajo, el diagrama es otra curva.
- **Suponer que todo nudo es quiral o anfiquiral sin cálculo.** Hay que verificar.
- **Mezclar nudos con enlaces.** Un enlace tiene varios componentes.

## Ejercicios propuestos
1. ¿Cuántos cruces mínimos tiene el nudo trivial?
2. Aplica Reidemeister tipo II a dos cruces opuestos.
3. Polinomio de Alexander del nudo trivial.
4. ¿Es el nudo de ocho quiral?
5. Género del trébol y del ocho.
6. Presentación de Wirtinger de un nudo con 2 cruces (¿cuál es?).
7. ¿Es el trébol suma conexa de nudos no triviales?
8. ¿Por qué el ADN circular es un nudo relevante?

**Respuestas:** 1) Cero. 2) Se eliminan sin cambiar el nudo. 3) $\Delta = 1$. 4. No: es anfiquiral. 5) Ambos género 1. 6. Solo existe el trivial (2 cruces no forman nudo). 7. No: es primo. 8. Su topología afecta replicación y transcripción.

## Resumen
- Los nudos se estudian por diagramas; Reidemeister formaliza las deformaciones permitidas.
- El grupo del nudo y los polinomios (Alexander, Jones, HOMFLY) son invariantes poderosos pero incompletos.
- Las superficies de Seifert dan el género; la suma conexa da una factorización única en primos.
- La quiralidad distingue nudos de sus espejos.
- La teoría conecta biología, física y matemática profunda.
`
};
