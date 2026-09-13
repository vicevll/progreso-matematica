# Espacios métricos

## 1. Definición de métrica y ejemplos

Un **espacio métrico** es un conjunto $X$ junto con una función $d:X\times X\to\mathbb{R}$ que cumple:

1. **Positividad:** $d(x,y)\geq 0$ y $d(x,y)=0 \iff x=y$.
2. **Simetría:** $d(x,y)=d(y,x)$.
3. **Desigualdad triangular:** $d(x,z)\leq d(x,y)+d(y,z)$.

A $d$ se le llama **distancia** o **métrica**. Con solo estos axiomas se definen límites, continuidad, compacidad y completitud, sin depender de la recta real.

**Ejemplos.**

1. **Euclidiana** en $\mathbb{R}^n$: $d_2(x,y)=\sqrt{\sum_{i=1}^{n}(x_i-y_i)^2}$.
2. **Manhattan** en $\mathbb{R}^n$: $d_1(x,y)=\sum_{i=1}^{n}|x_i-y_i|$.
3. **Supremo** en $C[a,b]$: $d_\infty(f,g)=\sup_{x\in[a,b]}|f(x)-g(x)|$.
4. **Discreta** en cualquier $X$: $d(x,y)=0$ si $x=y$, y $d(x,y)=1$ si $x\neq y$.
5. **Inducida por una norma:** $d(x,y)=\|x-y\|$.

**Mini-ejemplo.** En $\mathbb{R}^2$, $d_1((0,0),(3,4))=7$, $d_2((0,0),(3,4))=5$ y $d_\infty((0,0),(3,4))=4$.

## 2. Bolas y conjuntos abiertos

La **bola abierta** de centro $x$ y radio $r>0$ es
$$B(x,r)=\{y\in X : d(x,y)<r\}.$$

Un conjunto $U\subseteq X$ es **abierto** si para cada $x\in U$ existe $r>0$ tal que $B(x,r)\subseteq U$. Un conjunto $F$ es **cerrado** si su complemento $X\setminus F$ es abierto.

**Propiedades.**

1. $\emptyset$ y $X$ son abiertos y cerrados a la vez.
2. La unión arbitraria de abiertos es abierta.
3. La intersección finita de abiertos es abierta.
4. Toda bola abierta es un conjunto abierto.

**Mini-ejemplo.** En $\mathbb{R}$ con la métrica usual, $B(0,2)=(-2,2)$ es abierto; $[0,1]$ no es abierto porque ninguna bola centrada en $0$ queda dentro de $[0,1]$.

## 3. Interior, clausura y frontera

1. **Interior:** $\mathring{A}$ es el mayor abierto contenido en $A$.
2. **Clausura:** $\overline{A}$ es el menor cerrado que contiene a $A$.
3. **Frontera:** $\partial A=\overline{A}\setminus\mathring{A}$.

Equivalentemente, $x\in\overline{A}$ si $B(x,r)\cap A\neq\emptyset$ para todo $r>0$. Además, $A$ es abierto si y solo si $\mathring{A}=A$, y es cerrado si y solo si $\overline{A}=A$.

**Mini-ejemplo.** En $\mathbb{R}$ con $A=(0,1]\cup\{3\}$ se tiene $\mathring{A}=(0,1)$, $\overline{A}=[0,1]\cup\{3\}$ y $\partial A=\{0,1,3\}$. Para $A=\mathbb{Q}$: $\mathring{\mathbb{Q}}=\emptyset$, $\overline{\mathbb{Q}}=\mathbb{R}$ y $\partial\mathbb{Q}=\mathbb{R}$.

## 4. Sucesiones de Cauchy y completitud

Una sucesión $(x_n)$ en $X$ es de **Cauchy** si
$$\forall\varepsilon>0\ \exists N:\ m,n>N\Rightarrow d(x_m,x_n)<\varepsilon.$$

Toda sucesión convergente es de Cauchy. Un espacio es **completo** si toda sucesión de Cauchy converge a un punto de $X$.

**Mini-ejemplos.**

1. $\mathbb{R}$, $\mathbb{R}^n$ y $C[a,b]$ con la métrica del supremo son completos.
2. $\mathbb{Q}$ no es completo: los truncamientos de $\sqrt{2}$ forman una sucesión de Cauchy sin límite en $\mathbb{Q}$.
3. $(0,1]$ no es completo: $x_n=1/n$ es de Cauchy pero su límite $0\notin(0,1]$.

## 5. Compacidad

Un espacio es **compacto** si toda cubierta por abiertos admite una subcubierta finita. En espacios métricos esto equivale a que toda sucesión tenga una subsucesión convergente.

**Hechos clave.**

1. Todo compacto es cerrado y acotado.
2. Un subconjunto cerrado de un compacto es compacto.
3. Una función continua sobre un compacto alcanza máximo y mínimo.
4. En un espacio completo, un conjunto es compacto si y solo si es cerrado y totalmente acotado.

**Mini-ejemplo.** $[0,1]$ es compacto; $(0,1)$ no lo es, pues $x_n=1/n$ no tiene subsucesión con límite dentro de $(0,1)$. El conjunto $\{0\}\cup\{1/n:n\in\mathbb{N}\}$ es compacto.

## 6. Continuidad y continuidad uniforme

$f:X\to Y$ es **continua en $x_0$** si
$$\forall\varepsilon>0\ \exists\delta>0:\ d_X(x,x_0)<\delta\Rightarrow d_Y(f(x),f(x_0))<\varepsilon.$$

**Caracterizaciones equivalentes.**

1. La preimagen de todo abierto es abierta.
2. La preimagen de todo cerrado es cerrada.
3. $x_n\to x_0\Rightarrow f(x_n)\to f(x_0)$.

$f$ es **uniformemente continua** si el $\delta$ puede elegirse independiente del punto:
$$\forall\varepsilon>0\ \exists\delta>0:\ d_X(x,y)<\delta\Rightarrow d_Y(f(x),f(y))<\varepsilon.$$

**Heine-Cantor:** toda función continua sobre un espacio compacto es uniformemente continua.

**Mini-ejemplo.** $f(x)=x^2$ es uniformemente continua en $[0,2]$ (compacto) pero no en $\mathbb{R}$. $f(x)=1/x$ no es uniformemente continua en $(0,1)$ y sí lo es en $[1,\infty)$.

## 7. El teorema de Heine-Borel

**Teorema (Heine-Borel).** En $\mathbb{R}^n$ con la métrica usual, un conjunto es compacto si y solo si es cerrado y acotado.

**Consecuencias.**

1. $[a,b]$ es compacto; $(a,b)$, $\mathbb{R}$ y $\mathbb{Q}\cap[0,1]$ no lo son.
2. El conjunto de Cantor es cerrado y acotado, luego compacto.
3. Heine-Borel no vale en dimensión infinita: la bola cerrada unitaria de un espacio de Banach infinito-dimensional no es compacta.

**Mini-ejemplo.** En $\mathbb{R}^2$, el disco cerrado $\{(x,y):x^2+y^2\leq 1\}$ es compacto; el disco abierto $\{(x,y):x^2+y^2<1\}$ no lo es porque no es cerrado.

## Ejercicios (20)

### Nivel 1
1. Calcula $d_2((0,0),(3,4))$ en $\mathbb{R}^2$.
2. Calcula $d_1((1,2),(4,6))$ en $\mathbb{R}^2$.
3. Calcula $d_\infty((1,2),(4,6))$ en $\mathbb{R}^2$.
4. Describe $B(0,1)$ en $\mathbb{R}$ con la métrica usual.
5. ¿Es $d(x,y)=|x-y|$ una métrica en $\mathbb{R}$?

### Nivel 2
1. ¿Es $d(x,y)=(x-y)^2$ una métrica en $\mathbb{R}$?
2. Describe $B((0,0),1)$ en $(\mathbb{R}^2,d_1)$.
3. ¿Es $[0,1]$ abierto en $\mathbb{R}$?
4. Halla $\partial[0,1]$ en $\mathbb{R}$.
5. ¿Es $\mathbb{Q}$ completo con la métrica usual?

### Nivel 3
1. Halla $\mathring{\mathbb{Q}}$ y $\overline{\mathbb{Q}}$ en $\mathbb{R}$.
2. ¿Es $\{0\}\cup\{1/n:n\in\mathbb{N}\}$ cerrado en $\mathbb{R}$?
3. ¿Es $(0,1)$ completo con la métrica usual?
4. ¿Es $(0,1)$ compacto?
5. ¿Es $[0,1]$ compacto?

### Nivel 4
1. Demuestra que $(0,1)$ es abierto en $\mathbb{R}$.
2. ¿Es $f(x)=x^2$ uniformemente continua en $\mathbb{R}$?
3. ¿Es $f(x)=1/x$ uniformemente continua en $(0,1]$?
4. ¿Es $\mathbb{Q}\cap[0,1]$ compacto?
5. Enuncia el teorema de Heine-Borel en $\mathbb{R}^n$.

## Respuestas
1. $5$.
2. $7$.
3. $3$.
4. $(-1,1)$.
5. Sí.
6. No: falla la desigualdad triangular.
7. $\{(x,y):|x|+|y|<1\}$ (un rombo).
8. No.
9. $\{0,1\}$.
10. No.
11. $\mathring{\mathbb{Q}}=\emptyset$ y $\overline{\mathbb{Q}}=\mathbb{R}$.
12. Sí.
13. No: $1/n\to 0\notin(0,1)$.
14. No.
15. Sí.
16. Para cada $x\in(0,1)$ toma $r=\min(x,1-x)>0$; entonces $B(x,r)\subseteq(0,1)$.
17. No.
18. No.
19. No.
20. En $\mathbb{R}^n$: compacto si y solo si cerrado y acotado.
