# Geometría de Riemann

## Métricas riemannianas

Una **métrica riemanniana** en una variedad diferenciable $M$ de dimensión $n$ asigna a cada punto $p$ un producto interno definido positivo que varía de forma suave:
$$g_p : T_pM \times T_pM \to \mathbb{R}, \qquad g_p(v,v) > 0 \quad \text{si } v \neq 0.$$

En una carta local $(U, x^1, \dots, x^n)$ se escribe
$$g = g_{ij}\,dx^i \otimes dx^j, \qquad g_{ij} = g\!\left(\frac{\partial}{\partial x^i}, \frac{\partial}{\partial x^j}\right),$$
con la matriz $(g_{ij})$ simétrica y definida positiva. La longitud de un vector $v = v^i \partial_i$ es $\sqrt{g_{ij}v^i v^j}$ y el ángulo entre $v$ y $w$ cumple
$$\cos\theta = \frac{g(v,w)}{\sqrt{g(v,v)\,g(w,w)}}.$$

La **longitud** de una curva $\gamma : [a,b] \to M$ y el **elemento de volumen** son
$$L(\gamma) = \int_a^b \sqrt{g_{ij}\dot x^i \dot x^j}\,dt, \qquad dV = \sqrt{\det(g_{ij})}\;dx^1\cdots dx^n.$$

**Ejemplos clásicos:**
1. $\mathbb{R}^n$ con $g_{ij} = \delta_{ij}$ (métrica euclidiana).
2. La esfera $S^2$ de radio $R$: $g = R^2\big(d\phi^2 + \text{sen}^2\phi\,d\theta^2\big)$.
3. El plano hiperbólico (semiplano de Poincaré): $g = \dfrac{dx^2 + dy^2}{y^2}$, con $y > 0$.
4. El espacio de Minkowski: $g = -dt^2 + dx^2 + dy^2 + dz^2$ (signatura indefinida, base de la relatividad).

**Mini-ejemplo.** En $\mathbb{R}^2$ con coordenadas polares $x^1 = r$, $x^2 = \theta$, la métrica euclidiana es
$$g = dr^2 + r^2\,d\theta^2, \qquad g_{rr} = 1,\quad g_{r\theta} = 0,\quad g_{\theta\theta} = r^2.$$
Una curva radial $\theta = \text{cte}$ tiene longitud $L = \int_{r_0}^{r_1} dr = r_1 - r_0$, y como $\sqrt{\det g} = r$, su elemento de área es $dV = r\,dr\,d\theta$.

## Conexión de Levi-Civita y símbolos de Christoffel

Para derivar campos vectoriales sobre una variedad se necesita una **conexión** $\nabla$, una regla que compara vectores en espacios tangentes distintos. La **conexión de Levi-Civita** es la única que cumple:
1. **Sin torsión:** $\nabla_X Y - \nabla_Y X = [X, Y]$.
2. **Compatible con la métrica:** $\nabla g = 0$, es decir, $X\,g(Y,Z) = g(\nabla_X Y, Z) + g(Y, \nabla_X Z)$.

En coordenadas se codifica con los **símbolos de Christoffel**:
$$\nabla_{\partial_i}\partial_j = \Gamma^k_{ij}\,\partial_k, \qquad \Gamma^k_{ij} = \frac{1}{2}g^{kl}\left(\partial_i g_{jl} + \partial_j g_{il} - \partial_l g_{ij}\right),$$
donde $(g^{kl})$ es la matriz inversa de $(g_{ij})$. Los símbolos son simétricos, $\Gamma^k_{ij} = \Gamma^k_{ji}$, y **no son tensores**: cambian con las coordenadas, aunque la conexión no.

**Mini-ejemplo (polares).** Con $g = dr^2 + r^2 d\theta^2$ se tiene $g^{rr} = 1$, $g^{\theta\theta} = 1/r^2$. Entonces
$$\Gamma^r_{\theta\theta} = \frac{1}{2}g^{rr}\big(-\partial_r g_{\theta\theta}\big) = \frac{1}{2}(-2r) = -r, \qquad \Gamma^\theta_{r\theta} = \Gamma^\theta_{\theta r} = \frac{1}{2}g^{\theta\theta}\,\partial_r g_{\theta\theta} = \frac{1}{2r^2}(2r) = \frac{1}{r},$$
y todos los demás se anulan.

## Derivada covariante y transporte paralelo

La **derivada covariante** de un campo $Y$ en la dirección de $X$ es, en coordenadas,
$$\nabla_X Y = \big(X^i \partial_i Y^k + \Gamma^k_{ij} X^i Y^j\big)\,\partial_k.$$

Sus propiedades son $\mathbb{R}$-linealidad en $X$ y $Y$, y la regla de Leibniz $\nabla_X(fY) = X(f)Y + f\nabla_X Y$. Para un campo a lo largo de una curva $\gamma(t)$ se escribe
$$\frac{DV}{dt} = \nabla_{\dot\gamma} V.$$

Un campo es **paralelo** a lo largo de $\gamma$ si $\dfrac{DV}{dt} = 0$; esto define el **transporte paralelo**, que preserva la norma $g(V,V)$. En curvatura no nula, el resultado depende del camino recorrido (**holonomía**): transportar alrededor de un lazo pequeño rota el vector según la curvatura encerrada.

**Mini-ejemplo.** En polares, un vector transportado paralelamente a lo largo de un círculo $r = r_0$ satisface $\dot V^k + \Gamma^k_{ij}\dot x^i V^j = 0$. Con $\dot r = 0$, $\dot\theta = 1$, la componente se curva porque $\Gamma^\theta_{r\theta} \neq 0$: el vector gira al dar la vuelta. En el plano euclidiano (cartesianas) todos los $\Gamma$ se anulan y el transporte es el usual.

## Geodésicas

Una **geodésica** es una curva que transporta paralelamente su propio vector velocidad:
$$\nabla_{\dot\gamma}\dot\gamma = 0.$$

En coordenadas, con $x^k(t)$,
$$\ddot x^k + \Gamma^k_{ij}\,\dot x^i \dot x^j = 0.$$

Equivalentemente, las geodésicas son los puntos críticos del funcional de energía (o de longitud), de donde salen las **ecuaciones de Euler-Lagrange**. Son los "caminos rectos" y minimizan la distancia localmente; su rapidez $g(\dot\gamma,\dot\gamma)$ es constante. El **teorema de Hopf-Rinow** afirma que, en una variedad conexa, completitud métrica, completitud geodésica y compacidad de las bolas cerradas y acotadas son equivalentes; en tal caso existe una geodésica minimizante entre todo par de puntos.

**Ejemplos:** las rectas en $\mathbb{R}^n$; los círculos máximos en la esfera; los semicírculos verticales y las rectas verticales en el plano hiperbólico; las hélices en el cilindro.

**Mini-ejemplo.** En polares, la ecuación para $r$ con $\dot\theta = 0$ es $\ddot r - r\dot\theta^2 = \ddot r = 0$, luego la curva radial es una geodésica (una recta). La cantidad $r^2\dot\theta$ se conserva: es el análogo del momento angular.

## Tensor de curvatura de Riemann

El **tensor de Riemann** mide cuánto falla el transporte paralelo en conmutar:
$$R(X, Y)Z = \nabla_X\nabla_Y Z - \nabla_Y\nabla_X Z - \nabla_{[X,Y]} Z.$$

En coordenadas, con $R^l{}_{ijk}$ definido por $R(\partial_i,\partial_j)\partial_k = R^l{}_{ijk}\partial_l$,
$$R^l{}_{ijk} = \partial_i\Gamma^l_{jk} - \partial_j\Gamma^l_{ik} + \Gamma^l_{im}\Gamma^m_{jk} - \Gamma^l_{jm}\Gamma^m_{ik}.$$

Sus **simetrías** son
$$R^l{}_{ijk} = -R^l{}_{jik}, \qquad R_{lijk} = -R_{lkji}, \qquad R_{lijk} = R_{jkil}, \qquad R_{lijk} + R_{ljki} + R_{lkij} = 0,$$
más las identidades de Bianchi. En dimensión $n$ hay $\dfrac{n^2(n^2-1)}{12}$ componentes independientes: $1$ en $n = 2$, $6$ en $n = 3$, $20$ en $n = 4$.

La **curvatura seccional** del plano generado por $X, Y$ es
$$K(X,Y) = \frac{\big\langle R(X,Y)Y,\, X \big\rangle}{|X|^2|Y|^2 - \langle X, Y\rangle^2},$$
y en dimensión 2 coincide con la curvatura gaussiana. El tensor de Riemann queda determinado por todas las curvaturas seccionales. Geométricamente, $K > 0$ hace converger geodésicas cercanas, $K < 0$ las separa y $K = 0$ las mantiene paralelas.

**Mini-ejemplo.** Para la esfera $S^2$ de radio $R$, $K = 1/R^2$; en $\mathbb{R}^2$, $R^l{}_{ijk} = 0$ y $K = 0$.

## Curvatura de Ricci, escalar y Einstein

Las **contracciones** del tensor de Riemann dan objetos más manejables. El **tensor de Ricci** y la **curvatura escalar** son
$$R_{ij} = R^k{}_{ikj}, \qquad R = g^{ij}R_{ij}.$$

Ricci promedia las curvaturas seccionales en cada dirección y el escalar es un único número por punto. El **tensor de Einstein**,
$$G_{ij} = R_{ij} - \frac{1}{2}R\,g_{ij},$$
tiene divergencia nula (identidad de Bianchi contratada) y conduce a las **ecuaciones de Einstein**:
$$R_{ij} - \frac{1}{2}R\,g_{ij} = 8\pi T_{ij}.$$

**Mini-ejemplo.** En la esfera $S^n$ de radio $R$ y curvatura seccional constante $K = 1/R^2$:
$$R_{ij} = \frac{n-1}{R^2}\,g_{ij}, \qquad R = \frac{n(n-1)}{R^2}.$$
Para $S^2$ (radio $R$): $R_{ij} = \dfrac{1}{R^2}g_{ij}$ y $R = \dfrac{2}{R^2}$. Para $S^3$: $R_{ij} = \dfrac{2}{R^2}g_{ij}$ y $R = \dfrac{6}{R^2}$. El plano tiene Ricci y escalar nulos.

## Comparación y resultados globales

Los **teoremas de comparación** relacionan la curvatura con el comportamiento global, comparando triángulos geodésicos con los de curvatura constante.

1. **Bonnet-Myers:** si $\text{Ric} \geq (n-1)/R^2 > 0$, entonces el diámetro es $\leq \pi R$ y la variedad es compacta con grupo fundamental finito.
2. **Cartan-Hadamard:** si $K \leq 0$ y la variedad es simplemente conexa, entonces es difeomorfa a $\mathbb{R}^n$; el mapa exponencial es un difeomorfismo.
3. **Synge:** si $K > 0$, la dimensión es par y la variedad es orientable y compacta, entonces es simplemente conexa.
4. **Comparación de Rauch:** la curvatura controla la tasa de separación de geodésicas vecinas.

**Mini-ejemplo.** El plano hiperbólico cumple $K = -1 \leq 0$ y es simplemente conexo; Cartan-Hadamard confirma que es difeomorfo a $\mathbb{R}^2$, aunque las distancias crecen exponencialmente. La esfera $S^n$ cumple las hipótesis de Bonnet-Myers con $\text{Ric} = (n-1)/R^2$, y en efecto su diámetro es $\pi R$.

## Gauss-Bonnet

El **teorema de Gauss-Bonnet** liga la curvatura con la topología:
$$\int_M K\,dA = 2\pi\,\chi(M),$$
donde $\chi(M)$ es la característica de Euler. Para una superficie compacta de género $g$, $\chi = 2 - 2g$, de modo que
$$\int_M K\,dA = 4\pi(1 - g).$$

Existe también una **versión local** para una región $D$ con borde geodésico a trozos:
$$\int_D K\,dA + \sum_i \int_{\gamma_i} \kappa_g\,ds + \sum_j \theta_j = 2\pi,$$
donde $\kappa_g$ es la curvatura geodésica y $\theta_j$ los ángulos exteriores. De aquí se obtiene el exceso angular de un triángulo geodésico:
$$\alpha + \beta + \gamma - \pi = \int_D K\,dA.$$

**Mini-ejemplo.**
1. Esfera de radio $R$: $\int K\,dA = \dfrac{1}{R^2}\cdot 4\pi R^2 = 4\pi = 2\pi\chi(S^2)$ con $\chi = 2$.
2. Toro plano: $K = 0$, luego $\int K\,dA = 0 = 2\pi\chi$ con $\chi = 0$.
3. Superficie de género $2$: $\int K\,dA = 2\pi(2 - 4) = -4\pi$.
4. Triángulo esférico con tres ángulos rectos: $\alpha+\beta+\gamma-\pi = \dfrac{3\pi}{2}-\pi = \dfrac{\pi}{2} = \int_D K\,dA$ (con $R = 1$).

## Ejercicios (20)

### Nivel 1 (básico)

1. Escribe la métrica euclidiana de $\mathbb{R}^2$ en coordenadas polares.
2. Calcula la norma del vector tangente $\partial_x + \partial_y$ con la métrica euclidiana.
3. ¿Cuántos símbolos de Christoffel independientes hay en dimensión $2$?
4. Escribe la métrica de la esfera $S^2$ de radio $R$ en coordenadas $(\phi, \theta)$.
5. ¿Qué curvatura seccional constante tiene el plano hiperbólico?

### Nivel 2 (cálculo directo)

6. Halla $\Gamma^r_{\theta\theta}$ para $g = dr^2 + r^2 d\theta^2$.
7. Halla $\Gamma^\theta_{r\theta}$ para $g = dr^2 + r^2 d\theta^2$.
8. Halla $\Gamma^\phi_{\theta\theta}$ para la esfera unidad $g = d\phi^2 + \text{sen}^2\phi\,d\theta^2$.
9. Halla $\Gamma^\theta_{\phi\theta}$ para la esfera unidad.
10. ¿Cuánto valen todos los símbolos de Christoffel en $\mathbb{R}^n$ con coordenadas cartesianas?

### Nivel 3 (curvaturas)

11. Calcula la curvatura seccional de la esfera $S^2$ de radio $R$.
12. Calcula la curvatura escalar de $S^2$ de radio $R$.
13. Calcula la curvatura escalar de $S^3$ de radio $R$.
14. Escribe el tensor de Ricci de $S^n$ de radio $R$.
15. Calcula el tensor de Einstein de $S^2$ de radio $R$.

### Nivel 4 (global y topológico)

16. Aplica Gauss-Bonnet a la esfera y verifica la igualdad.
17. Halla la curvatura total $\int_M K\,dA$ de una superficie de género $2$.
18. Da la característica de Euler del toro y del plano proyectivo real.
19. ¿Qué afirma Cartan-Hadamard para una variedad con $K \leq 0$ simplemente conexa?
20. Escribe la ecuación de Einstein con el tensor de Einstein.

## Respuestas

1. $g = dr^2 + r^2\,d\theta^2$.
2. $\sqrt{1^2 + 1^2} = \sqrt{2}$.
3. $6$.
4. $g = R^2\big(d\phi^2 + \text{sen}^2\phi\,d\theta^2\big)$.
5. $K = -1$.
6. $\Gamma^r_{\theta\theta} = -r$.
7. $\Gamma^\theta_{r\theta} = \dfrac{1}{r}$.
8. $\Gamma^\phi_{\theta\theta} = -\text{sen}\,\phi\cos\phi$.
9. $\Gamma^\theta_{\phi\theta} = \cot\phi$.
10. Todos se anulan: $\Gamma^k_{ij} = 0$.
11. $K = \dfrac{1}{R^2}$.
12. $R = \dfrac{2}{R^2}$.
13. $R = \dfrac{6}{R^2}$.
14. $R_{ij} = \dfrac{n-1}{R^2}\,g_{ij}$.
15. $G_{ij} = 0$ (en dimensión 2 el tensor de Einstein se anula).
16. $\displaystyle\int_{S^2} K\,dA = \frac{1}{R^2}\cdot 4\pi R^2 = 4\pi = 2\pi\chi(S^2)$.
17. $\displaystyle\int_M K\,dA = 2\pi(2 - 2\cdot 2) = -4\pi$.
18. Toro: $\chi = 0$; plano proyectivo: $\chi = 1$.
19. La variedad es difeomorfa a $\mathbb{R}^n$ y el mapa exponencial es un difeomorfismo.
20. $R_{ij} - \dfrac{1}{2}R\,g_{ij} = 8\pi T_{ij}$.
