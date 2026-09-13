# Variedades diferenciables

Área: **Geometría y topología** · Nivel: **Univ 4–5** · Descripción: Atlas, espacios tangentes y formas diferenciales.

## Variedades y atlas

Una **variedad topológica** de dimensión $n$ es un espacio topológico $M$ Hausdorff y con base numerable en el que cada punto tiene una vecindad homeomorfa a un abierto de $\mathbb{R}^n$.

Una **carta** (o sistema de coordenadas local) es un par $(U,\varphi)$ con $U\subseteq M$ abierto y $\varphi:U\to\varphi(U)\subseteq\mathbb{R}^n$ un homeomorfismo. A $U$ se le llama **dominio de la carta** y a las funciones $\varphi(p)=(x^1(p),\dots,x^n(p))$ las **coordenadas locales**.

Un **atlas** es una familia de cartas $\{(U_\alpha,\varphi_\alpha)\}$ que cubre $M$, es decir
$$\bigcup_\alpha U_\alpha=M.$$

**Compatibilidad.** Dos cartas $(U,\varphi)$ y $(V,\psi)$ con $U\cap V\neq\emptyset$ son **compatibles** si el **cambio de carta**
$$\psi\circ\varphi^{-1}:\varphi(U\cap V)\to\psi(U\cap V)$$
es un difeomorfismo, esto es, $C^\infty$ con inversa $C^\infty$.

**Definición.** Una **variedad diferenciable** (o suave) $M$ de dimensión $n$ es una variedad topológica con un atlas cuyas cartas son dos a dos compatibles. Un atlas **maximal** determina una **estructura diferenciable**.

**Ejemplo.** $\mathbb{R}^n$ es una variedad con la carta identidad. La esfera $S^n$ admite el atlas de dos cartas por **proyección estereográfica**, cuyas transiciones son $x\mapsto x/|x|^2$, suaves fuera del origen.

**Ejemplo.** El toro $T^2=\mathbb{R}^2/\mathbb{Z}^2$ y el espacio proyectivo $\mathbb{RP}^n$ son variedades; $\mathbb{RP}^n$ se recubre con $n+1$ cartas afines $x_i\neq0$.

## El espacio tangente

Sea $M$ una variedad y $p\in M$. Una **curva** por $p$ es una aplicación $\gamma:(-\varepsilon,\varepsilon)\to M$ con $\gamma(0)=p$. Dos curvas $\gamma_1,\gamma_2$ son **equivalentes** si, en alguna carta $(U,\varphi)$ con $p\in U$,
$$(\varphi\circ\gamma_1)'(0)=(\varphi\circ\gamma_2)'(0).$$

El **espacio tangente** $T_pM$ es el conjunto de clases de equivalencia de curvas por $p$. Es un espacio vectorial real de dimensión $n$.

Si $(U,\varphi)$ es una carta con coordenadas $x^i$, los vectores
$$\left.\frac{\partial}{\partial x^1}\right|_p,\dots,\left.\frac{\partial}{\partial x^n}\right|_p$$
forman una **base** de $T_pM$, llamada **base coordenada**. Todo $v\in T_pM$ se escribe
$$v=\sum_{i=1}^n v^i\left.\frac{\partial}{\partial x^i}\right|_p.$$

**Fibrado tangente.** $TM=\bigsqcup_{p\in M}T_pM$ con la proyección $\pi(v)=p$ es una variedad de dimensión $2n$ y coordenadas locales $(x^1,\dots,x^n,v^1,\dots,v^n)$.

**Diferencial de una función.** Para $f:M\to\mathbb{R}$ suave, $df_p:T_pM\to\mathbb{R}$ es lineal y
$$df_p(v)=\left.\frac{d}{dt}\right|_{t=0}f(\gamma(t))$$
para cualquier curva $\gamma$ que represente a $v$.

**Ejemplo.** En $S^2$, en el punto $p=(0,0,1)$ se tiene $T_pS^2=\{v\in\mathbb{R}^3 : v\cdot p=0\}$, el plano horizontal tangente.

## Aplicaciones diferenciables y valores regulares

$F:M\to N$ es **diferenciable** si para todo par de cartas $(U,\varphi)$ en $M$ y $(V,\psi)$ en $N$ con $F(U)\subseteq V$, la expresión coordenada
$$\psi\circ F\circ\varphi^{-1}:\varphi(U)\to\psi(V)$$
es $C^\infty$. La **diferencial** en $p$ es la aplicación lineal
$$dF_p:T_pM\to T_{F(p)}N,\qquad dF_p(v)=(F\circ\gamma)'(0),$$
y cumple la **regla de la cadena** $d(G\circ F)_p=dG_{F(p)}\circ dF_p$.

**Rango y casos.** $F$ es una **inmersión** si $dF_p$ es inyectiva; una **submersión** si $dF_p$ es sobreyectiva; un **difeomorfismo** si es biyectiva con inversa diferenciable.

**Valor regular.** $q\in N$ es **valor regular** de $F$ si $dF_p$ es sobreyectiva para todo $p\in F^{-1}(q)$. Los puntos donde $dF_p$ no es sobreyectiva son **puntos críticos**, y sus imágenes son **valores críticos**.

**Teorema (de la preimagen).** Si $q$ es un valor regular de $F:M\to N$, entonces $F^{-1}(q)$ es una subvariedad de $M$ de dimensión $\dim M-\dim N$. Es la versión global del teorema de la función implícita.

**Ejemplo.** Para $f:\mathbb{R}^n\to\mathbb{R}$, $f(x)=|x|^2$, todo $r^2>0$ es valor regular, pues $\nabla f(x)=2x\neq0$ sobre $f^{-1}(r^2)$. Luego $f^{-1}(r^2)=S^{n-1}$ es una subvariedad de dimensión $n-1$.

**Ejemplo.** $SL_n(\mathbb{R})=\det^{-1}(1)$: como $1$ es valor regular de $\det$ y $\dim M_n(\mathbb{R})=n^2$, resulta una subvariedad de dimensión $n^2-1$.

## Campos vectoriales y flujos

Un **campo vectorial** es una aplicación suave $X:M\to TM$ con $\pi\circ X=\mathrm{id}_M$; asigna a cada $p$ un vector $X(p)\in T_pM$. En una carta,
$$X=\sum_{i=1}^n X^i(x)\frac{\partial}{\partial x^i}.$$

Una **curva integral** de $X$ por $p$ es $\gamma:I\to M$ con $\gamma(0)=p$ y $\gamma'(t)=X(\gamma(t))$. En coordenadas satisface el sistema $\dot x^i=X^i(x)$.

**Flujo.** El **flujo** de $X$ es la familia $\phi_t$ en la que $t\mapsto\phi_t(p)$ es la curva integral por $p$. Cumple
$$\phi_0=\mathrm{id},\qquad \phi_{s+t}=\phi_s\circ\phi_t$$
allí donde está definido.

**Corchete de Lie.** Para dos campos $X,Y$, el **corchete** $[X,Y]$ es el campo dado en coordenadas por
$$[X,Y]=\sum_{i,j}\left(X^j\frac{\partial Y^i}{\partial x^j}-Y^j\frac{\partial X^i}{\partial x^j}\right)\frac{\partial}{\partial x^i}.$$
Es antisimétrico y bilineal, y satisface la **identidad de Jacobi**
$$[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0.$$

**Ejemplo.** En $\mathbb{R}^2$, el campo $X=-y\,\partial_x+x\,\partial_y$ genera rotaciones: sus curvas integrales son circunferencias y
$$\phi_t(x,y)=(x\cos t-y\sin t,\ x\sin t+y\cos t).$$

**Ejemplo.** Para $X=\partial_x$ e $Y=x\,\partial_y$ se tiene $[X,Y]=\partial_y$: trasladar y cortar verticalmente no conmutan.

## Formas diferenciales

El **fibrado cotangente** $T^*M$ tiene en cada $p$ el espacio dual $T_p^*M=(T_pM)^*$. Un **campo de covectores** o **1-forma** es una sección suave de $T^*M$; en coordenadas,
$$\omega=\sum_{i=1}^n \omega_i\,dx^i,\qquad \omega\!\left(\frac{\partial}{\partial x^j}\right)=\omega_j.$$

Una **$k$-forma** $\omega$ asigna a cada $p$ una aplicación multilineal y alternada $\omega_p:(T_pM)^k\to\mathbb{R}$. Se escribe con la **base exterior** $dx^{i_1}\wedge\cdots\wedge dx^{i_k}$ con $i_1<\cdots<i_k$; su número de componentes independientes es $\binom{n}{k}$.

**Producto exterior.** $\wedge$ es bilineal y graduado antisimétrico:
$$\alpha\wedge\beta=(-1)^{kl}\beta\wedge\alpha$$
para $\alpha$ una $k$-forma y $\beta$ una $l$-forma. En particular $dx^i\wedge dx^j=-dx^j\wedge dx^i$ y $dx^i\wedge dx^i=0$.

**Derivada exterior.** Existe una única aplicación $d$ que lleva $k$-formas a $(k+1)$-formas, es lineal, con
$$d(f)=\sum_{i=1}^n\frac{\partial f}{\partial x^i}\,dx^i,\qquad d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^k\alpha\wedge d\beta,$$
y cumple la propiedad fundamental
$$d^2=d\circ d=0.$$

**Fórmula de Cartan.** Con la **contracción** $\iota_X$ y la derivada de Lie $\mathcal{L}_X$,
$$\mathcal{L}_X=d\,\iota_X+\iota_X\,d.$$

**Ejemplo.** En $\mathbb{R}^3$ con la métrica euclídea, $df$ corresponde al gradiente, la derivada exterior de una 1-forma al rotacional y la de una 2-forma a la divergencia. Así $\nabla\times\nabla f=0$ y $\nabla\cdot(\nabla\times F)=0$ son las dos caras de $d^2=0$.

## Integración, orientación y teorema de Stokes

Una $n$-forma sobre una $n$-variedad se integra usando cartas. Si en $(U,\varphi)$ se tiene $\omega=f\,dx^1\wedge\cdots\wedge dx^n$, se define
$$\int_U\omega=\int_{\varphi(U)}f(x^1,\dots,x^n)\,dx^1\cdots dx^n.$$
Para que el resultado no dependa de la carta, el atlas debe ser **orientado** (jacobianos positivos), es decir, hay que fijar una **orientación**.

**Teorema de Stokes.** Sea $M$ una $n$-variedad orientada con borde $\partial M$ y sea $\omega$ una $(n-1)$-forma de soporte compacto. Entonces
$$\int_M d\omega=\int_{\partial M}\omega,$$
donde $\partial M$ hereda la orientación inducida (regla de la normal hacia afuera).

**Consecuencias.** Para $n=2$ y $n=3$ se recuperan el teorema de Green, el de Stokes clásico y el de la divergencia (Gauss). Todos son la misma fórmula.

**Formas cerradas y exactas.** $\omega$ es **cerrada** si $d\omega=0$ y **exacta** si $\omega=d\alpha$. Como $d^2=0$, toda forma exacta es cerrada. El **lema de Poincaré** afirma que en un abierto contractible toda forma cerrada es exacta.

**Ejemplo.** Sobre $S^1$, con la 1-forma $\omega=x\,dy$, Stokes da
$$\int_{S^1}x\,dy=\int_D dx\wedge dy=\pi,$$
el área del disco unidad $D$.

**Ejemplo.** El área de $S^2$ es $\int_{S^2}\omega=4\pi$ con la forma de área $\omega=x\,dy\wedge dz+y\,dz\wedge dx+z\,dx\wedge dy$; coincide con $\int_{\partial B^3}\omega$ por Stokes.

## Orientabilidad

Una variedad $M$ de dimensión $n$ es **orientable** si admite un atlas cuyas transiciones tienen **jacobiano positivo**,
$$\det\!\left(\frac{\partial\psi^j}{\partial x^i}\right)>0.$$
Equivalentemente, $M$ admite una **forma de volumen** $\omega$ que no se anula en ningún punto ($\omega_p\neq0$ para todo $p$), o un campo continuo de $n$-marcos.

**Teorema.** Una variedad conexa orientable admite exactamente **dos** orientaciones, una y su opuesta. La orientabilidad es un invariante topológico.

**Ejemplos orientables.** $\mathbb{R}^n$, $S^n$, el toro $T^2$, $\mathbb{RP}^n$ con $n$ impar y todo grupo de Lie.

**Ejemplos no orientables.** La **banda de Möbius** y la **botella de Klein**.

**Ejemplo.** En la banda de Möbius, al transportar una normal a lo largo del bucle central esta regresa invertida: no puede existir una forma de volumen global ni un atlas con jacobianos positivos.

**Consecuencia.** Solo en variedades orientables la integración de $n$-formas está bien definida sin ambigüedad de signo; en una variedad no orientable se integran densidades $|\omega|$.

## Ejercicios (20)

### Nivel 1

1. ¿Cuántas cartas tiene como mínimo el atlas estereográfico estándar de $S^n$?
2. ¿Qué dimensión tiene la variedad $GL_n(\mathbb{R})$?
3. Escribe la base coordenada de $T_p\mathbb{R}^2$ en la carta identidad.
4. Si $\dim M=n$, ¿cuál es la dimensión de $T_pM$?
5. Calcula $df_3(h)$ para $f(x)=x^2$ y todo $h\in\mathbb{R}$.

### Nivel 2

6. ¿Es $(0,1)$ una variedad diferenciable de dimensión $1$? Justifica.
7. Describe una carta del toro $T^2=\mathbb{R}^2/\mathbb{Z}^2$ y sus transiciones.
8. Halla el espacio tangente a $S^1$ en el punto $(1,0)$.
9. Prueba que $SL_n(\mathbb{R})$ es una subvariedad de dimensión $n^2-1$.
10. Calcula $[X,Y]$ para $X=\partial_x$ e $Y=\partial_y$ en $\mathbb{R}^2$.

### Nivel 3

11. Demuestra que $S^n$ es una variedad diferenciable con el atlas estereográfico.
12. Calcula $d\omega$ para la 1-forma $\omega=x\,dy-y\,dx$ en $\mathbb{R}^2$.
13. Verifica que $d^2=0$ aplicado a $f(x,y)=x^2y$.
14. Explica por qué la banda de Möbius no es orientable.
15. Enuncia el teorema de la preimagen y aplícalo a $f^{-1}(1)$ con $f(x,y,z)=x^2+y^2+z^2$.

### Nivel 4

16. ¿Por qué toda forma exacta es cerrada?
17. Aplica Stokes a $\omega=x\,dy$ sobre $S^1$ y da el resultado.
18. Describe el flujo del campo $X=(-y,x)$ en $\mathbb{R}^2$.
19. ¿Cuántas orientaciones tiene una variedad conexa orientable?
20. Calcula $d(x\,dy\wedge dz+y\,dz\wedge dx+z\,dx\wedge dy)$.

## Respuestas

1. Dos cartas: la proyección estereográfica desde el polo norte y desde el polo sur.
2. $n^2$, pues $GL_n(\mathbb{R})$ es abierto en $M_n(\mathbb{R})\cong\mathbb{R}^{n^2}$.
3. $\left.\dfrac{\partial}{\partial x}\right|_p$ y $\left.\dfrac{\partial}{\partial y}\right|_p$.
4. $n$.
5. $df_3(h)=f'(3)h=6h$.
6. Sí: $(0,1)$ es un abierto de $\mathbb{R}$ y la carta identidad lo parametriza con cambio suave.
7. La proyección de un cuadrado abierto; los cambios de carta son traslaciones por vectores enteros, que son suaves.
8. $T_{(1,0)}S^1=\{v\in\mathbb{R}^2 : v\cdot(1,0)=0\}=\{(0,t):t\in\mathbb{R}\}$.
9. $SL_n=\det^{-1}(1)$; $1$ es valor regular de $\det$ y $\dim M_n(\mathbb{R})=n^2$, luego la dimensión es $n^2-1$.
10. $[X,Y]=0$, porque los campos coordenados conmutan.
11. Las dos proyecciones estereográficas cubren $S^n$ y la transición $x\mapsto x/|x|^2$ es suave; luego $S^n$ es variedad diferenciable.
12. $d\omega=dx\wedge dy-dy\wedge dx=2\,dx\wedge dy$.
13. $df=2xy\,dx+x^2\,dy$ y $d(df)=2x\,dy\wedge dx+2x\,dx\wedge dy=0$.
14. Al recorrer el bucle central, un campo de normales regresa invertido; no hay forma de volumen global ni atlas con jacobianos positivos.
15. Si $c$ es valor regular, $F^{-1}(c)$ es subvariedad de dimensión $\dim M-\dim N$; aquí $\nabla f=2(x,y,z)\neq0$ sobre $f^{-1}(1)$, luego $f^{-1}(1)=S^2$ tiene dimensión $2$.
16. Si $\omega=d\alpha$, entonces $d\omega=d(d\alpha)=0$ por la propiedad $d^2=0$.
17. Por Stokes, $\displaystyle\int_{S^1}x\,dy=\int_D d(x\,dy)=\int_D dx\wedge dy=\pi$.
18. $\phi_t(x,y)=(x\cos t-y\sin t,\ x\sin t+y\cos t)$: rotaciones de ángulo $t$.
19. Dos: una y su opuesta.
20. $d\omega=3\,dx\wedge dy\wedge dz$.
