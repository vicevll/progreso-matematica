# Ecuaciones en derivadas parciales

Las ecuaciones en derivadas parciales (EDP) describen cómo cambia una función de varias variables. Aparecen cuando el fenómeno depende del espacio **y** del tiempo: conducción de calor, vibración de cuerdas, potencial eléctrico, difusión de sustancias.

## ¿Qué es una EDP y cuál es su orden?

Una EDP relaciona una función $u(x_1,\dots,x_n)$ con sus derivadas parciales:

$$F\left(x_1,\dots,x_n,\;u,\;\frac{\partial u}{\partial x_1},\dots,\frac{\partial^2 u}{\partial x_i\,\partial x_j},\dots\right)=0.$$

1. El **orden** es el de la derivada parcial más alta que aparece.
2. Es **lineal** si $u$ y todas sus derivadas aparecen a la primera potencia, sin productos entre ellas ni funciones no lineales de $u$.

**Mini-ejemplo.** La ecuación del calor

$$\frac{\partial u}{\partial t}=k\,\frac{\partial^2 u}{\partial x^2}$$

es de segundo orden y lineal: $u_t$ y $u_{xx}$ aparecen a la primera potencia. En cambio $u_t+u\,u_x=0$ es no lineal, porque contiene el producto $u\,u_x$.

Resolver una EDP exige **condiciones iniciales** (el estado en $t=0$) y **condiciones de frontera** (qué ocurre en los bordes del dominio).

## Clasificación de las EDP de segundo orden

Para una EDP lineal de segundo orden con dos variables,

$$A\,u_{xx}+B\,u_{xy}+C\,u_{yy}+D\,u_x+E\,u_y+F\,u=G,$$

el tipo lo decide el discriminante $\Delta=B^2-4AC$:

| Tipo | Discriminante | Prototipo | Comportamiento |
| --- | --- | --- | --- |
| Elíptica | $\Delta<0$ | Laplace, $\nabla^2 u=0$ | Equilibrio, soluciones suaves |
| Parabólica | $\Delta=0$ | Calor, $u_t=k\,u_{xx}$ | Difusión, suavizado temporal |
| Hiperbólica | $\Delta>0$ | Onda, $u_{tt}=c^2u_{xx}$ | Propagación sin difuminarse |

**Mini-ejemplo.** $u_{xx}+4u_{xy}+4u_{yy}=0$ tiene $A=1$, $B=4$, $C=4$ y $\Delta=16-16=0$: es **parabólica**.

## Ecuación de Laplace y de Poisson

La ecuación de **Laplace** describe estados de equilibrio sin fuentes:

$$\nabla^2 u=\frac{\partial^2 u}{\partial x^2}+\frac{\partial^2 u}{\partial y^2}=0.$$

Sus soluciones se llaman **armónicas** y cumplen el principio del máximo: no tienen máximos ni mínimos interiores. La ecuación de **Poisson** incorpora fuentes:

$$\nabla^2 u=f(x,y).$$

La solución en un dominio queda determinada por los valores en la frontera (problema de **Dirichlet**) o por sus derivadas normales (problema de **Neumann**).

**Mini-ejemplo.** $u(x,y)=x^2-y^2$ es armónica: $u_{xx}=2$, $u_{yy}=-2$ y $u_{xx}+u_{yy}=0$. En cambio $u=x^2+y^2$ no lo es, porque $\nabla^2 u=4$.

## Ecuación del calor

$$\frac{\partial u}{\partial t}=k\,\frac{\partial^2 u}{\partial x^2},\qquad k>0.$$

Modela la difusión: barras, placas y disipación térmica. Propiedades:

1. La temperatura tiende a uniformizarse con el tiempo.
2. Para $t>0$ la solución es infinitamente suave (efecto suavizante).
3. El máximo se alcanza en la frontera o en el instante inicial (principio del máximo).

Con extremos a temperatura fija, la frontera de **Dirichlet** es $u(0,t)=u(L,t)=0$.

**Mini-ejemplo.** $u(x,t)=e^{-t}\,\text{sen}\,x$ satisface $u_t=u_{xx}$ con $k=1$: en efecto, $u_t=-e^{-t}\,\text{sen}\,x=u_{xx}$.

## Ecuación de onda

$$\frac{\partial^2 u}{\partial t^2}=c^2\,\frac{\partial^2 u}{\partial x^2}.$$

Describe vibraciones de cuerdas y membranas, y ondas de sonido o luz; $c$ es la velocidad de propagación. La **solución de D'Alembert**

$$u(x,t)=F(x-ct)+G(x+ct)$$

representa dos ondas viajeras, una hacia la derecha y otra hacia la izquierda, que conservan su forma.

**Mini-ejemplo.** $u(x,t)=\text{sen}\,x\cos t$ satisface $u_{tt}=u_{xx}$, pues $u_{tt}=-\text{sen}\,x\cos t=u_{xx}$.

## Separación de variables y series de Fourier

Es el método central para EDP lineales en dominios simples:

1. Supón $u(x,t)=X(x)\,T(t)$.
2. Sustituye en la EDP y separa: cada lado depende de una sola variable, luego ambos igualan una constante $-\lambda$.
3. Resuelve las dos EDO resultantes.
4. Aplica la frontera (fija los modos) y la condición inicial (combina los modos).

Para el calor con extremos en cero:

$$X''+\lambda X=0,\qquad X(0)=X(L)=0\;\Rightarrow\;X_n(x)=\text{sen}\frac{n\pi x}{L},$$

$$T_n(t)=e^{-k(n\pi/L)^2t},\qquad u(x,t)=\sum_{n=1}^{\infty}b_n\,\text{sen}\frac{n\pi x}{L}\,e^{-k(n\pi/L)^2t}.$$

Los coeficientes $b_n$ los determina la condición inicial $u(x,0)=f(x)$:

$$b_n=\frac{2}{L}\int_0^L f(x)\,\text{sen}\frac{n\pi x}{L}\,dx.$$

**Mini-ejemplo.** Con $L=\pi$, $k=1$ y $u(x,0)=\text{sen}\,x$ solo sobrevive el primer modo: $u(x,t)=\text{sen}\,x\,e^{-t}$.

## Diferencias finitas y estabilidad

Cuando no hay solución analítica se **discretiza** el dominio. Las aproximaciones central y progresiva son:

$$u_{xx}\approx\frac{u_{i+1}-2u_i+u_{i-1}}{h^2},\qquad u_t\approx\frac{u_i^{n+1}-u_i^{n}}{\Delta t}.$$

El esquema explícito del calor es **estable** solo si

$$\frac{k\,\Delta t}{\Delta x^2}\le\frac{1}{2},$$

mientras que la ecuación de onda cumple la condición CFL $c\,\Delta t\le\Delta x$. Violarlas hace que la simulación crezca sin control.

**Mini-ejemplo.** Para el calor con $k=1$ y $\Delta x=0.1$: $\Delta t\le\tfrac{1}{2}(0.1)^2=0.005$.

## Ejercicios (20)

### Nivel 1 · básico

1. Clasifica $u_{xx}+u_{yy}=0$.
2. Clasifica $u_t=u_{xx}$.
3. Clasifica $u_{tt}=u_{xx}$.
4. ¿Cuál es el orden de $u_t=u_{xxxx}$?
5. Verifica que $u(x,y)=x^2-y^2$ es armónica.

### Nivel 2 · intermedio

6. Clasifica $u_{xx}+4u_{xy}+4u_{yy}=0$.
7. Clasifica $u_{xx}-3u_{xy}+2u_{yy}=0$.
8. Verifica que $u=e^{-t}\,\text{sen}\,x$ satisface $u_t=u_{xx}$.
9. Verifica que $u=\text{sen}\,x\cos t$ satisface $u_{tt}=u_{xx}$.
10. Resuelve $u_{xx}=0$ con $u(0)=0$ y $u(L)=100$.

### Nivel 3 · avanzado

11. Clasifica $u_{xx}+2u_{xy}+3u_{yy}=0$.
12. Resuelve $u_{xx}=0$ con $u(0)=20$ y $u(L)=80$.
13. Resuelve el calor en $[0,\pi]$ con $k=1$ y $u(x,0)=\text{sen}\,x$.
14. Resuelve el calor con $k=1$ y $u(x,0)=3\,\text{sen}\,2x$.
15. Resuelve la onda en $[0,\pi]$ con $c=1$, $u(x,0)=\text{sen}\,x$ y $u_t(x,0)=0$.

### Nivel 4 · aplicado

16. Halla el máximo $\Delta t$ estable para el calor con $k=1$ y $\Delta x=0.1$.
17. Halla el máximo $\Delta t$ estable para el calor con $k=2$ y $\Delta x=0.05$.
18. Con $c=3$ y $\Delta x=0.3$, ¿qué condición CFL impone a $\Delta t$?
19. Escribe los dos primeros modos del calor en $[0,\pi]$ con $k=1$.
20. Si $u(x,0)=2\,\text{sen}\,3x$, halla $u(x,t)$ para el calor con $k=1$.

## Respuestas

1. Elíptica ($\Delta=-4<0$).
2. Parabólica.
3. Hiperbólica.
4. Orden $4$.
5. $u_{xx}=2$, $u_{yy}=-2$ y $u_{xx}+u_{yy}=0$: armónica.
6. Parabólica ($\Delta=16-16=0$).
7. Hiperbólica ($\Delta=9-8=1>0$).
8. $u_t=-e^{-t}\,\text{sen}\,x=u_{xx}$.
9. $u_{tt}=-\text{sen}\,x\cos t=u_{xx}$.
10. $u(x)=\dfrac{100x}{L}$.
11. Elíptica ($\Delta=4-12=-8<0$).
12. $u(x)=20+\dfrac{60x}{L}$.
13. $u(x,t)=\text{sen}\,x\,e^{-t}$.
14. $u(x,t)=3\,\text{sen}\,2x\,e^{-4t}$.
15. $u(x,t)=\text{sen}\,x\cos t$.
16. $\Delta t\le 0.005$.
17. $\Delta t\le 0.000625$.
18. $\Delta t\le 0.1$.
19. $\text{sen}\,x\,e^{-t}$ y $\text{sen}\,2x\,e^{-4t}$.
20. $u(x,t)=2\,\text{sen}\,3x\,e^{-9t}$.
