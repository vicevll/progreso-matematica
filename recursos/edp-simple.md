# Ecuaciones en derivadas parciales

Área: Cálculo · Nivel: Univ 2–3 · Descripción: Qué es una EDP, cómo leer la notación, clasificación, calor, onda, Laplace, separación de variables y diferencias finitas.

## ¿Qué es una EDP?

Una **ecuación en derivadas parciales (EDP)** es una ecuación cuya incógnita es una **función de varias variables**, en la que aparecen sus **derivadas parciales**. Mientras que una EDO como $y'(t) = -2y(t)$ busca una función $y(t)$ de una sola variable, una EDP busca una función como $u(x,t)$, que depende del espacio $x$ y del tiempo $t$ a la vez.

La función incógnita $u(x,t)$ se lee "u de equis, te": es el valor de la magnitud $u$ (temperatura, desplazamiento, voltaje...) en la posición $x$ y el instante $t$. No es una multiplicación.

**¿Qué es una derivada parcial?** El símbolo $\dfrac{\partial u}{\partial x}$ se lee "derivada parcial de u respecto de x" y mide cómo cambia $u$ cuando **solo** $x$ se mueve, dejando a las demás variables fijas como números. La letra $\partial$ se llama "d redonda". Para $u(x,t) = x^2 + t^3$: $\dfrac{\partial u}{\partial x} = 2x$ (la $t^3$ se congela) y $\dfrac{\partial u}{\partial t} = 3t^2$ (ahora se congela la $x^2$).

Las tres EDP clásicas:

$$\text{Calor (difusión):}\quad \frac{\partial u}{\partial t} = k\,\frac{\partial^2 u}{\partial x^2}, \qquad \text{Onda:}\quad \frac{\partial^2 u}{\partial t^2} = c^2\frac{\partial^2 u}{\partial x^2}, \qquad \text{Laplace:}\quad \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$$

Para resolver una EDP se necesitan **condiciones iniciales**, como $u(x,0) = f(x)$ (estado en $t = 0$), y **condiciones de frontera**, como $u(0,t) = u(L,t) = 0$ (qué ocurre en los bordes, para todo tiempo). La escritura $u(0,t) = 0$ **no** es un producto: significa que en el extremo $x = 0$ la función vale cero en todo instante.

## Cómo leer la notación

- $\dfrac{\partial u}{\partial t}$ = derivada parcial de $u$ respecto de $t$ (solo $t$ se mueve). Forma corta: $u_t$.
- $u_x$, $u_{xx}$ = primera y segunda derivada parcial respecto de $x$. $u_{xx}$ mide la **curvatura** del perfil en la dirección $x$; no confundir con $(u_x)^2$.
- $u_{xt}$ = derivada mixta: primero respecto de $x$, luego respecto de $t$.
- $\Delta u = \nabla^2 u = u_{xx} + u_{yy}$ = el **laplaciano**: suma de las segundas derivadas espaciales. El símbolo $\nabla$ se lee "nabla"; $\Delta$ aquí no es "cambio", sino "laplaciano".
- $k$ = difusividad térmica (constante positiva del material); $c$ = velocidad de propagación de la onda.
- $u(x,0) = f(x)$ = condición inicial: en $t = 0$ la solución coincide con la función dada $f$.
- $u(0,t) = 0$ = condición de frontera tipo **Dirichlet**: el borde se mantiene en valor cero. Si en cambio se fija la derivada normal, es tipo **Neumann** (por ejemplo borde aislado).
- $F(x - ct)$ = una onda de forma arbitraria $F$ que viaja hacia la derecha con velocidad $c$; si su argumento es $x - ct$, la cresta que cumple $x - ct = \text{constante}$ avanza con velocidad $c$.

## Clasificación de las EDP de segundo orden

Una EDP lineal de segundo orden se escribe $A\,u_{xx} + B\,u_{xy} + C\,u_{yy} + \cdots = 0$. Su carácter lo decide el **discriminante**

$$\Delta = B^2 - 4AC$$

- **Elíptica** ($\Delta < 0$): problemas de **equilibrio** (sin tiempo). Prototipo: Laplace. Soluciones suaves y armónicas.
- **Parabólica** ($\Delta = 0$): **difusión y evolución** en el tiempo. Prototipo: el calor. Irreversible, suaviza.
- **Hiperbólica** ($\Delta > 0$): **propagación de ondas** a velocidad finita. Prototipo: la onda. Conserva forma y energía.

Los nombres vienen de la geometría: una elipse tiene cuadrados con el mismo signo, una parábola uno solo, una hipérbola signos opuestos. Ejemplos: $u_{xx} + u_{yy} = 0$ es elíptica ($\Delta = -4$); $u_t - u_{xx} = 0$ es parabólica ($\Delta = 0$); $u_{tt} - u_{xx} = 0$ es hiperbólica ($\Delta = 4$). Para $u_{xx} + 4u_{xy} + 4u_{yy} = 0$: $\Delta = 16 - 16 = 0$, parabólica.

## Ecuación de Laplace y Poisson

**Laplace:** $\Delta u = 0$, es decir, $u_{xx} + u_{yy} = 0$. Describe el **equilibrio sin fuentes**: temperatura final de una placa, potencial eléctrico sin cargas, membrana en reposo. Sus soluciones son **armónicas**: en cada punto el valor es el promedio de los vecinos, y por eso los máximos y mínimos solo se alcanzan en la frontera (**principio del máximo**). La solución queda determinada por la frontera.

**Poisson:** $\Delta u = f$. La función $f$ es la densidad de **fuentes** (cargas, calor interno). Si $f = 0$ se recupera Laplace.

Condiciones clásicas: **Dirichlet** fija el valor $u$ en el borde; **Neumann** fija la derivada normal $\dfrac{\partial u}{\partial n}$ (el flujo a través del borde).

En una dimensión, Laplace es $u_{xx} = 0$, cuya solución es la recta $u = ax + b$: el equilibrio entre dos extremos a temperatura fija es un perfil **lineal**.

## Ecuación del calor

$$u_t = k\,u_{xx}, \qquad k > 0$$

El lado izquierdo es la rapidez con que cambia la temperatura en un punto; el derecho, $k$ veces la curvatura del perfil. Si el punto está más caliente que sus vecinos (cima, $u_{xx} < 0$), se enfría; si está más frío (valle, $u_{xx} > 0$), se calienta: **el calor fluye de donde sobra hacia donde falta**.

Propiedades: la solución se **suaviza** (para $t > 0$ es infinitamente derivable, por fea que sea la condición inicial); el máximo se alcanza al inicio o en la frontera (**principio del máximo**); el proceso es **irreversible**; y a largo plazo la temperatura tiende al equilibrio (a $0$ con extremos a cero, o al promedio con extremos aislados).

Con extremos a cero, $u(0,t) = u(L,t) = 0$, y condición inicial $u(x,0) = f(x)$, la solución por modos es

$$u(x,t) = \sum_{n=1}^{\infty} b_n\,\text{sen}\left(\frac{n\pi x}{L}\right)e^{-k(n\pi/L)^2 t}$$

Cada modo decae con exponente proporcional a $n^2$: los detalles finos (n grande) mueren primero.

## Ecuación de onda

$$u_{tt} = c^2\,u_{xx}$$

El lado izquierdo es la **aceleración** de cada punto; el derecho, $c^2$ por la **curvatura**. Curvatura produce aceleración: es la ley de Newton de una cuerda. La constante $c$ es la velocidad de la onda.

**Solución de D'Alembert:**

$$u(x,t) = F(x - ct) + G(x + ct)$$

dos ondas viajeras de forma arbitraria: $F$ hacia la derecha y $G$ hacia la izquierda, ambas a velocidad $c$. A diferencia del calor, las ondas **no se difuminan ni se atenúan**: conservan su forma y su energía. La ecuación es reversible en el tiempo.

Al tener segunda derivada temporal necesita **dos condiciones iniciales**: forma $u(x,0) = f(x)$ y velocidad $u_t(x,0) = g(x)$. Con $f(x) = \text{sen}\,x$ y $g = 0$ (cuerda de longitud $\pi$, $c = 1$): $u = \text{sen}\,x\cos t$, una oscilación que nunca se detiene.

## Separación de variables

Método para EDP **lineales** en regiones simples. Se supone que la solución es un producto

$$u(x,t) = X(x)\,T(t)$$

y se sustituye en la ecuación. Para el calor en $[0,L]$ con extremos a cero:

1. Sustituir: $X\,T' = k\,X''\,T$.
2. Separar: $\dfrac{T'}{kT} = \dfrac{X''}{X}$. El lado izquierdo solo depende de $t$ y el derecho solo de $x$; como son iguales, ambos son una **constante** $-\lambda$ (lambda).
3. Espacial: $X'' + \lambda X = 0$ con $X(0) = X(L) = 0$. Solo hay soluciones no triviales para $\lambda_n = \left(\dfrac{n\pi}{L}\right)^2$, con funciones propias

$$X_n(x) = \text{sen}\left(\frac{n\pi x}{L}\right), \qquad n = 1, 2, 3, \ldots$$

4. Temporal: $T' = -k\lambda_n T$ da $T_n(t) = e^{-k(n\pi/L)^2 t}$.
5. Superponer (la ecuación es lineal): $u = \sum_{n=1}^{\infty} b_n\,X_n(x)\,T_n(t)$.
6. Ajustar la condición inicial: $f(x) = \sum b_n\,\text{sen}\left(\dfrac{n\pi x}{L}\right)$.

Los senos son **ortogonales**: $\int_0^L \text{sen}\left(\dfrac{n\pi x}{L}\right)\text{sen}\left(\dfrac{m\pi x}{L}\right)dx$ vale $0$ si $n \neq m$ y $L/2$ si $n = m$. Multiplicando la serie por un seno e integrando se despejan los coeficientes:

$$b_n = \frac{2}{L}\int_0^L f(x)\,\text{sen}\left(\frac{n\pi x}{L}\right)dx$$

Esta es la conexión con las **series de Fourier**: la condición inicial se descompone en armónicos. Con extremos a cero se usan senos (Dirichlet); con extremos aislados, cosenos (Neumann).

## Diferencias finitas (idea)

Si la EDP no se resuelve con fórmulas, se discretiza: posiciones $x_i = i\,\Delta x$ y tiempos $t_n = n\,\Delta t$. Se aproxima

$$u_{xx} \approx \frac{u_{i+1} - 2u_i + u_{i-1}}{h^2}, \qquad u_t \approx \frac{u_i^{n+1} - u_i^{n}}{\Delta t}$$

y el calor se vuelve un esquema que avanza paso a paso. El peligro es la **estabilidad**:

$$\frac{k\,\Delta t}{\Delta x^2} \leq \frac{1}{2} \quad \text{(calor)}, \qquad c\,\Delta t \leq \Delta x \quad \text{(onda, condición CFL)}$$

Si se viola, los errores crecen sin control y la simulación explota. Ejemplo: con $k = 1$ y $\Delta x = 0.1$, el paso máximo estable es $\Delta t = 0.005$.

## Ejercicios (20)

### Nivel 1

1. Para $u(x,t) = x^2 + t^3$, calcula $\dfrac{\partial u}{\partial x}$.
2. Para $u(x,t) = x^2 + t^3$, calcula $\dfrac{\partial u}{\partial t}$.
3. Para $u(x,t) = \text{sen}(x + t)$, calcula $u_x$.
4. Clasifica $u_{xx} + u_{yy} = 0$.
5. Explica qué significa la condición $u(0,t) = 0$.

### Nivel 2

6. Clasifica $u_t - u_{xx} = 0$.
7. Clasifica $u_{tt} - u_{xx} = 0$.
8. Verifica que $u = x^2 - y^2$ es armónica (cumple Laplace).
9. Resuelve $u_{xx} = 0$ con $u(0) = 0$ y $u(1) = 5$.
10. Para $u = e^{-t}\,\text{sen}\,x$, calcula $u_t$ y $u_{xx}$ y compáralos.

### Nivel 3

11. Resuelve $u_{xx} = 0$ con $u(0) = 10$ y $u(2) = 30$.
12. Calor con $k = 1$ en $[0,\pi]$, extremos a cero y $u(x,0) = \text{sen}\,x$: halla $u(x,t)$.
13. Calor con $k = 1$ en $[0,\pi]$, extremos a cero y $u(x,0) = 3\,\text{sen}\,2x$: halla $u(x,t)$.
14. Onda con $c = 1$, $u(x,0) = \text{sen}\,x$ y $u_t(x,0) = 0$: halla $u(x,t)$.
15. Clasifica $u_{xx} + 4u_{xy} + 4u_{yy} = 0$.

### Nivel 4

16. ¿Cuál es el máximo $\Delta t$ estable para el calor explícito con $k = 1$ y $\Delta x = 0.1$?
17. Verifica que $u = \text{sen}\,x\cos 2t$ satisface $u_{tt} = 4u_{xx}$.
18. Escribe la forma general de D'Alembert para $u_{tt} = c^2u_{xx}$.
19. ¿A qué tiende la solución del calor con extremos a cero cuando $t \to \infty$?
20. Escribe la fórmula del coeficiente $b_n$ para la condición inicial $u(x,0) = f(x)$ en $[0,L]$.

## Respuestas

1. $\dfrac{\partial u}{\partial x} = 2x$ (la $t^3$ se trata como constante).
2. $\dfrac{\partial u}{\partial t} = 3t^2$ (ahora se congela la $x^2$).
3. $u_x = \cos(x+t)$.
4. Elíptica ($\Delta = 0 - 4 = -4 < 0$).
5. Que el extremo $x = 0$ se mantiene en valor $0$ para todo tiempo $t$.
6. Parabólica ($\Delta = 0$).
7. Hiperbólica ($\Delta = 4 > 0$).
8. $u_{xx} = 2$ y $u_{yy} = -2$; la suma es $0$: sí es armónica.
9. $u = 5x$.
10. $u_t = u_{xx} = -e^{-t}\text{sen}\,x$: satisface $u_t = u_{xx}$.
11. $u = 10x + 10$.
12. $u = \text{sen}\,x\,e^{-t}$.
13. $u = 3\,\text{sen}\,2x\,e^{-4t}$.
14. $u = \text{sen}\,x\cos t$.
15. Parabólica ($\Delta = 16 - 16 = 0$).
16. $\Delta t \leq 0.005$.
17. $u_{tt} = -4\,\text{sen}\,x\cos 2t$ y $u_{xx} = -\text{sen}\,x\cos 2t$: se cumple.
18. $u(x,t) = F(x-ct) + G(x+ct)$.
19. A $0$: todo el calor se disipa hacia los bordes.
20. $b_n = \dfrac{2}{L}\displaystyle\int_0^L f(x)\,\text{sen}\left(\dfrac{n\pi x}{L}\right)dx$.
