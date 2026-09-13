# Topología general

Área: **Geometría y topología** · Nivel: **Univ 3–4** · Descripción: espacios topológicos, continuidad, conexidad y compacidad.

## Espacios topológicos

Un **espacio topológico** es un par $(X,\tau)$ donde $X$ es un conjunto y $\tau\subseteq\mathcal{P}(X)$ es una familia de subconjuntos, llamados **abiertos**, que cumple:

1. $\emptyset\in\tau$ y $X\in\tau$.
2. La unión de cualquier subfamilia de $\tau$ pertenece a $\tau$.
3. La intersección de una subfamilia **finita** de $\tau$ pertenece a $\tau$.

Los **cerrados** son los complementos de los abiertos: $F$ es cerrado si $X\setminus F\in\tau$.

**Ejemplo.** En $\mathbb{R}$, la **topología usual** $\tau_u$ consta de las uniones de intervalos abiertos. La **topología discreta** es $\tau=\mathcal{P}(X)$ (todo subconjunto es abierto); la **topología trivial** es $\tau=\{\emptyset,X\}$.

**Comparación.** Si $\tau_1\subseteq\tau_2$, se dice que $\tau_1$ es más **gruesa** (débil) y $\tau_2$ más **fina** (fuerte). La discreta es la más fina y la trivial la más gruesa.

**Vecindades.** $V$ es una **vecindad** de $x$ si existe $U\in\tau$ con $x\in U\subseteq V$. La topología describe la cercanía sin necesidad de una distancia.

## Bases, subespacios, interior y clausura

**Base.** Una familia $\mathcal{B}\subseteq\tau$ es una **base** si todo abierto es unión de elementos de $\mathcal{B}$. Es base si y solo si $X=\bigcup_{B\in\mathcal{B}}B$ y, para todo $x\in B_1\cap B_2$, existe $B_3\in\mathcal{B}$ con $x\in B_3\subseteq B_1\cap B_2$.

**Ejemplo.** En $\mathbb{R}$ usual, los intervalos abiertos $(a,b)$ forman una base. En $\mathbb{R}^n$, las bolas abiertas forman una base.

**Subespacio.** Si $A\subseteq X$, la **topología inducida** es
$$\tau_A=\{A\cap U : U\in\tau\}.$$

**Interior, clausura y frontera.**
$$\mathring{A}=\bigcup\{U\in\tau : U\subseteq A\}, \qquad \bar{A}=\bigcap\{F\subseteq X : F \text{ cerrado y } A\subseteq F\}$$
$$\partial A=\bar{A}\setminus\mathring{A}.$$
Se tiene que $A$ es abierto si y solo si $A=\mathring{A}$, y $A$ es cerrado si y solo si $A=\bar{A}$.

**Punto de acumulación.** $x$ es **punto de acumulación** de $A$ si toda vecindad de $x$ corta a $A\setminus\{x\}$. Entonces $\bar{A}=A\cup A'$, donde $A'$ es el conjunto de puntos de acumulación.

**Densidad.** $A$ es **denso** si $\bar{A}=X$. Por ejemplo, $\mathbb{Q}$ es denso en $\mathbb{R}$.

**Ejemplo.** En $\mathbb{R}$ usual, para $A=(0,1]$ se tiene $\mathring{A}=(0,1)$, $\bar{A}=[0,1]$ y $\partial A=\{0,1\}$.

## Continuidad y homeomorfismos

$f:X\to Y$ es **continua** si la preimagen de todo abierto de $Y$ es abierta en $X$:
$$f^{-1}(U)\in\tau_X \quad \text{para todo } U\in\tau_Y.$$

**Equivalencias.** Son equivalentes:

1. $f$ es continua.
2. La preimagen de todo cerrado es cerrada.
3. $f(\bar{A})\subseteq\overline{f(A)}$ para todo $A\subseteq X$.
4. Para todo $x$ y toda vecindad $V$ de $f(x)$, existe una vecindad $U$ de $x$ con $f(U)\subseteq V$.

**Homeomorfismo.** $f$ es un **homeomorfismo** si es biyectiva, continua y con inversa continua. Entonces $X$ e $Y$ son el "mismo" espacio topológico: comparten todos los invariantes topológicos (conexidad, compacidad, separación).

**Ejemplo.** $(0,1)$ y $\mathbb{R}$ son homeomorfos vía $x\mapsto\tan\!\big(\pi(x-\tfrac12)\big)$. En cambio $[0,1]$ y $(0,1)$ no lo son, porque $[0,1]$ es compacto y $(0,1)$ no.

## Conexidad

$X$ es **conexo** si no puede escribirse como unión de dos abiertos no vacíos y disjuntos. Equivalentemente, los únicos subconjuntos a la vez abiertos y cerrados son $\emptyset$ y $X$.

**Conexo por caminos.** $X$ es **conexo por caminos** si todo par de puntos se une por una curva continua. Conexo por caminos implica conexo, pero el recíproco es falso: la **curva del topólogo** es conexa y no es conexa por caminos.

**Componentes conexas.** Son las piezas maximales conexas; forman una partición de $X$.

**Teorema (imagen continua).** Si $f:X\to Y$ es continua y $X$ es conexo, entonces $f(X)$ es conexo. De aquí se deduce el **teorema del valor intermedio**.

**Ejemplo.** $\mathbb{R}\setminus\{0\}$ tiene dos componentes conexas. La circunferencia $S^1$ es conexa y conexa por caminos. En cambio $\{0\}\cup\{1/n:n\in\mathbb{N}\}$ no es conexo.

## Compacidad

$X$ es **compacto** si toda **cubierta por abiertos** de $X$ admite una subcubierta finita. Equivalentemente, toda familia de cerrados con intersección vacía tiene una subfamilia finita con intersección vacía.

**Propiedades.**

1. La imagen continua de un compacto es compacta.
2. Un subconjunto cerrado de un compacto es compacto.
3. Toda función real continua sobre un compacto alcanza máximo y mínimo.
4. En $\mathbb{R}^n$, un conjunto es compacto si y solo si es **cerrado y acotado** (teorema de Heine-Borel).

**Compacidad local.** $X$ es **localmente compacto** si cada punto tiene una base de vecindades compactas. Todo $\mathbb{R}^n$ lo es.

**Ejemplo.** $[0,1]$ es compacto; $(0,1)$ y $(0,1]$ no lo son. El conjunto $\{0\}\cup\{1/n:n\in\mathbb{N}\}$ es compacto.

## Axiomas de separación

1. **T1:** los puntos son cerrados.
2. **T2 (Hausdorff):** dos puntos distintos tienen vecindades disjuntas. Garantiza la unicidad del límite.
3. **T3 (regular):** un punto y un cerrado que no lo contiene se separan por abiertos disjuntos.
4. **T4 (normal):** dos cerrados disjuntos se separan por abiertos disjuntos. Permite construir funciones continuas (lema de Urysohn).

**Jerarquía.** normal $\Rightarrow$ regular $\Rightarrow$ Hausdorff $\Rightarrow$ T1. Ninguna implicación se invierte en general.

**Ejemplo.** Todo espacio métrico es normal y, por tanto, Hausdorff. En un cociente mal construido pueden aparecer patologías no Hausdorff.

## Topología producto y cociente

**Producto.** En $X\times Y$ la **topología producto** es la generada por los rectángulos $U\times V$ con $U$ abierto en $X$ y $V$ abierto en $Y$. Las proyecciones $\pi_X,\pi_Y$ son continuas y una función $f:Z\to X\times Y$ es continua si y solo si lo son sus componentes.

**Cociente.** Dada una sobreyección $q:X\to X/{\sim}$, la **topología cociente** es la más fina que hace continua a $q$: $V\subseteq X/{\sim}$ es abierto si y solo si $q^{-1}(V)$ es abierto en $X$. Sirve para **pegar**: el cilindro, el toro y la banda de Möbius se construyen así.

**Teorema de Tychonoff.** El producto arbitrario de espacios compactos es compacto (usa el axioma de elección).

**Ejemplo.** $[0,1]/\{0\sim1\}\cong S^1$: pegar los extremos del intervalo da la circunferencia. El cociente $[0,1]^2$ con $(0,y)\sim(1,y)$ es el cilindro $S^1\times[0,1]$.

## Ejercicios (20)

### Nivel 1

1. Sea $X=\{a,b,c\}$ y $\tau=\{\emptyset,\{a\},\{a,b\},X\}$. ¿Es $\tau$ una topología sobre $X$?
2. En $\mathbb{R}$ usual, halla el interior, la clausura y la frontera de $A=(0,1]\cup\{2\}$.
3. ¿Cuántos abiertos tiene la topología discreta de un conjunto con $3$ elementos?
4. Comprueba que $f(x)=3x+1$ es continua usando preimágenes de intervalos abiertos.
5. ¿Es $\mathbb{R}$ con la topología usual un espacio de Hausdorff? Justifica.

### Nivel 2

6. En el subespacio $A=[0,1]\subseteq\mathbb{R}$, ¿es $[0,\tfrac12)$ abierto en $A$?
7. ¿Es $[0,1]$ compacto? ¿Y $(0,1]$?
8. ¿Es conexo el intervalo $(0,1)$? ¿Y $\mathbb{Q}$?
9. Exhibe un homeomorfismo explícito entre $(0,1)$ y $\mathbb{R}$.
10. ¿Es $(0,1)\cup[2,3)$ abierto en $\mathbb{R}$? ¿Y cerrado?

### Nivel 3

11. Demuestra que la imagen continua de un espacio compacto es compacta.
12. Explica por qué toda función continua $f:S^1\to\mathbb{R}$ alcanza su máximo y su mínimo.
13. ¿Son homeomorfos $[0,1]$ y $[0,1)$? Argumenta con un invariante topológico.
14. Enumera todas las topologías sobre el conjunto $\{a,b\}$.
15. ¿Es compacto el producto $[0,1]\times[0,1]$? ¿Qué topología se usa?

### Nivel 4

16. Describe el cociente $[0,1]/\{0\sim1\}$ e identifícalo con un espacio conocido.
17. Construye el cilindro $S^1\times[0,1]$ como cociente de un cuadrado.
18. Demuestra que todo espacio métrico es normal.
19. Da una función continua en un espacio no compacto que no sea acotada.
20. Demuestra que $(0,1)$ no es compacto exhibiendo una cubierta por abiertos sin subcubierta finita.

## Respuestas

1. Sí: $\emptyset$ y $X$ están; las uniones y las intersecciones finitas de $\{a\}$ y $\{a,b\}$ vuelven a estar en $\tau$.
2. $\mathring{A}=(0,1)$; $\bar{A}=[0,1]\cup\{2\}$; $\partial A=\{0,1,2\}$.
3. $2^3=8$ abiertos.
4. $f^{-1}((a,b))=\big(\tfrac{a-1}{3},\tfrac{b-1}{3}\big)$, que es abierto; luego $f$ es continua.
5. Sí: dados $x\neq y$, las bolas de radio $|x-y|/2$ son abiertas y disjuntas.
6. Sí, pues $[0,\tfrac12)=A\cap(-1,\tfrac12)$ y $(-1,\tfrac12)$ es abierto en $\mathbb{R}$.
7. $[0,1]$ sí es compacto (cerrado y acotado). $(0,1]$ no lo es.
8. $(0,1)$ es conexo. $\mathbb{Q}$ no es conexo: $(-\infty,\sqrt{2})\cap\mathbb{Q}$ y $(\sqrt{2},\infty)\cap\mathbb{Q}$ lo parten.
9. $f(x)=\tan\!\big(\pi(x-\tfrac12)\big)$, continua, biyectiva y con inversa $y\mapsto\tfrac12+\tfrac1\pi\arctan y$.
10. No es abierto (por $[2,3)$) ni cerrado (por $(0,1)$).
11. Sea $\{U_i\}$ una cubierta abierta de $f(X)$. Entonces $\{f^{-1}(U_i)\}$ cubre $X$; por compacidad hay una subcubierta finita y sus imágenes cubren $f(X)$.
12. $S^1$ es compacto y $f$ es continua; por tanto $f(S^1)$ es un compacto de $\mathbb{R}$, cerrado y acotado, así que contiene su máximo y su mínimo.
13. No: $[0,1]$ es compacto y $[0,1)$ no lo es; la compacidad es invariante por homeomorfismo.
14. Cuatro: $\{\emptyset,X\}$; $\{\emptyset,\{a\},X\}$; $\{\emptyset,\{b\},X\}$; $\mathcal{P}(X)$.
15. Sí, es compacto: es producto de compactos (Tychonoff) y también es cerrado y acotado en $\mathbb{R}^2$. Se usa la topología producto.
16. Es $S^1$: la clase de $0$ y la de $1$ se identifican y el intervalo cerrado se enrolla en una circunferencia.
17. En $[0,1]\times[0,1]$ impón $(0,y)\sim(1,y)$; el cociente es homeomorfo a $S^1\times[0,1]$.
18. Dados cerrados disjuntos $A,B$ en un espacio métrico, las funciones $d(\cdot,A)$ y $d(\cdot,B)$ son continuas; se separan con los abiertos $\{d(\cdot,A)<d(\cdot,B)\}$ y $\{d(\cdot,B)<d(\cdot,A)\}$.
19. $f:(0,1)\to\mathbb{R}$, $f(x)=1/x$, es continua y no acotada; $(0,1)$ no es compacto.
20. La familia $\{(1/n,1):n\in\mathbb{N}\}$ cubre $(0,1)$ pero ninguna subfamilia finita lo cubre, pues quedaría sin cubrir $(0,1/N)$.
