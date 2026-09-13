# Cálculo multivariable

**Guía simple · Cálculo · Universidad 2–3**
*Derivadas parciales, gradiente e integrales múltiples.*

---

## 1. Funciones de varias variables

Una función de dos variables asigna un número a cada par ordenado del plano: $z=f(x,y)$. Su gráfica es una **superficie** en el espacio y las **curvas de nivel** $f(x,y)=k$ forman su mapa topográfico.

El dominio se obtiene como en una variable, pero con condiciones simultáneas: denominadores distintos de cero, raíces pares no negativas y logaritmos positivos.

**Ejemplo.** $f(x,y)=x^2+y^2$ es un paraboloide; sus curvas de nivel $x^2+y^2=k$ son circunferencias. La función $f(x,y)=xy$ es una silla de montar.

---

## 2. Derivadas parciales

La parcial respecto a $x$ deriva manteniendo $y$ **constante**, y viceversa:

$$\frac{\partial f}{\partial x}=\lim_{h\to0}\frac{f(x+h,\,y)-f(x,y)}{h}, \qquad \frac{\partial f}{\partial y}=\lim_{k\to0}\frac{f(x,\,y+k)-f(x,y)}{k}$$

Las segundas parciales mixtas coinciden cuando son continuas (**teorema de Clairaut**):

$$\frac{\partial^2 f}{\partial x\,\partial y}=\frac{\partial^2 f}{\partial y\,\partial x}$$

**Ejemplo.** $f(x,y)=x^2y+3xy^2$:

$$\frac{\partial f}{\partial x}=2xy+3y^2, \qquad \frac{\partial f}{\partial y}=x^2+6xy$$

---

## 3. Gradiente y derivada direccional

El **gradiente** reúne las parciales en un vector:

$$\nabla f=\left\langle \frac{\partial f}{\partial x},\ \frac{\partial f}{\partial y}\right\rangle$$

Apunta en la dirección de **máximo crecimiento** y su módulo $\lVert \nabla f\rVert$ es la máxima razón de cambio. La **derivada direccional** según el vector unitario $\hat u$ es

$$D_{\hat u}f=\nabla f\cdot \hat u$$

**Ejemplo.** $f(x,y)=x^2+y^2$ tiene $\nabla f=\langle 2x,2y\rangle$. En $(1,2)$ el máximo crecimiento ocurre en dirección $\langle 2,4\rangle$ y su valor es $\sqrt{2^2+4^2}=2\sqrt5$.

---

## 4. Plano tangente y aproximación lineal

El plano tangente a $z=f(x,y)$ en $(a,b)$ es

$$z=f(a,b)+f_x(a,b)\,(x-a)+f_y(a,b)\,(y-b)$$

De ahí sale la **aproximación lineal** para incrementos pequeños:

$$f(x,y)\approx f(a,b)+f_x(a,b)\,\Delta x+f_y(a,b)\,\Delta y$$

**Ejemplo.** Con $f=\sqrt{xy}$ en $(a,b)=(9,4)$: $f=6$, $f_x=\dfrac{\sqrt y}{2\sqrt x}=\dfrac13$ y $f_y=\dfrac{\sqrt x}{2\sqrt y}=\dfrac34$. Entonces

$$\sqrt{9.1\cdot4.05}\approx 6+\frac{0.1}{3}+\frac{0.05}{4}=6.0708\ldots$$

---

## 5. Extremos y matriz hessiana

Los extremos locales ocurren en los **puntos críticos**, donde $\nabla f=\vec 0$. El **hessiano** los clasifica:

$$H=\begin{vmatrix} f_{xx} & f_{xy}\\ f_{xy} & f_{yy}\end{vmatrix}=f_{xx}f_{yy}-f_{xy}^{2}$$

- $H>0$ y $f_{xx}>0$: mínimo local.
- $H>0$ y $f_{xx}<0$: máximo local.
- $H<0$: punto silla.
- $H=0$: el criterio no decide.

**Ejemplo.** $f(x,y)=x^2-y^2$ tiene su único crítico en $(0,0)$. Como $H=(2)(-2)-0=-4<0$, es un punto silla.

---

## 6. Multiplicadores de Lagrange

Para optimizar $f$ sujeta a la restricción $g(x,y)=c$ se resuelve

$$\nabla f=\lambda\,\nabla g, \qquad g(x,y)=c$$

El multiplicador $\lambda$ mide la sensibilidad del óptimo ante cambios en la restricción (**precio sombra**).

**Ejemplo.** Maximizar $f=xy$ sujeto a $x+y=10$: $\langle y,x\rangle=\lambda\langle1,1\rangle$ da $x=y$; con la restricción, $x=y=5$ y el máximo es $f=25$.

---

## 7. Integrales dobles y triples

Una integral doble acumula sobre una región del plano; se calcula como integral iterada:

$$\iint_D f(x,y)\,dA=\int_a^b\int_{g(x)}^{h(x)} f(x,y)\,dy\,dx$$

La integral triple $\displaystyle\iiint_V f\,dV$ integra sobre un sólido. Aplicaciones: volumen, masa, centro de masa y momentos de inercia.

**Ejemplo.** $\displaystyle\int_0^1\int_0^2 (x+y)\,dy\,dx=\int_0^1(2x+2)\,dx=3.$

---

## 8. Cambio de variable y jacobiano

El **jacobiano** es el factor de escala del cambio de coordenadas: $dA=\lvert J\rvert\,du\,dv$.

- **Polares:** $x=r\cos\theta$, $y=r\operatorname{sen}\theta$, $dA=r\,dr\,d\theta$.
- **Cilíndricas:** $x=r\cos\theta$, $y=r\operatorname{sen}\theta$, $z=z$, $dV=r\,dz\,dr\,d\theta$.
- **Esféricas:** $x=\rho\operatorname{sen}\phi\cos\theta$, $y=\rho\operatorname{sen}\phi\operatorname{sen}\theta$, $z=\rho\cos\phi$, $dV=\rho^{2}\operatorname{sen}\phi\,d\rho\,d\phi\,d\theta$.

En polares el jacobiano vale $\lvert J\rvert=r$.

**Ejemplo.** $\displaystyle\iint_{x^2+y^2\le4}(x^2+y^2)\,dA=\int_0^{2\pi}\int_0^{2}r^{2}\cdot r\,dr\,d\theta=2\pi\cdot4=8\pi.$

---

## Ejercicios (20)

### Nivel 1 — Derivadas parciales

1. Halla $f_x$ y $f_y$ de $f(x,y)=x^{3}y^{2}-2xy$.
2. Halla $f_x$ y $f_y$ de $f(x,y)=e^{xy}$.
3. Halla $f_x$ y $f_y$ de $f(x,y)=x^{2}+y^{2}+xy$.
4. Halla $f_x$ y $f_y$ de $f(x,y)=\ln(x^{2}+y^{2})$.
5. Halla $f_x$ y $f_y$ de $f(x,y)=x\cos(xy)$.

### Nivel 2 — Gradiente y plano tangente

6. Calcula $\nabla f(1,1)$ para $f(x,y)=x^{2}y+y^{3}$.
7. Halla la dirección de máximo crecimiento de $f(x,y)=x^{2}-y^{2}$ en $(2,1)$.
8. Calcula $D_{\hat u}f$ en $(1,1)$ para $f(x,y)=x^{2}+y^{2}$ con $\hat u=\left\langle \tfrac35,\tfrac45\right\rangle$.
9. Halla el plano tangente a $f(x,y)=x^{2}+y^{2}$ en $(1,2)$.
10. Halla el plano tangente a $f(x,y)=xy$ en $(2,3)$.

### Nivel 3 — Extremos y Lagrange

11. Halla y clasifica el punto crítico de $f(x,y)=x^{2}+y^{2}+xy$.
12. Clasifica el punto crítico de $f(x,y)=x^{2}-y^{2}$.
13. Halla y clasifica el punto crítico de $f(x,y)=x^{2}+y^{2}-2x-6y+14$.
14. Maximiza $f=xy$ sujeta a $x+y=10$.
15. Minimiza $f=x^{2}+y^{2}$ sujeta a $x+y=4$.

### Nivel 4 — Integrales múltiples

16. Calcula $\displaystyle\int_0^1\int_0^2 (x+y)\,dy\,dx$.
17. Calcula $\displaystyle\int_0^1\int_0^1 (x^{2}+y^{2})\,dy\,dx$.
18. Calcula $\displaystyle\iint_{x^2+y^2\le4}(x^{2}+y^{2})\,dA$ usando polares.
19. Calcula $\displaystyle\iint_{x^2+y^2\le1} xy\,dA$.
20. Halla la masa de la placa $[0,1]\times[0,1]$ con densidad $\rho(x,y)=xy$.

---

## Respuestas

1. $f_x=3x^{2}y^{2}-2y$, $f_y=2x^{3}y-2x$.
2. $f_x=ye^{xy}$, $f_y=xe^{xy}$.
3. $f_x=2x+y$, $f_y=2y+x$.
4. $f_x=\dfrac{2x}{x^{2}+y^{2}}$, $f_y=\dfrac{2y}{x^{2}+y^{2}}$.
5. $f_x=\cos(xy)-xy\operatorname{sen}(xy)$, $f_y=-x^{2}\operatorname{sen}(xy)$.
6. $\nabla f(1,1)=\langle 2,4\rangle$.
7. $\langle 4,-2\rangle$.
8. $D_{\hat u}f=\dfrac{14}{5}$.
9. $z=2x+4y-5$.
10. $z=3x+2y-6$.
11. Mínimo en $(0,0)$; $H=3>0$ y $f_{xx}=2>0$; $f=0$.
12. Punto silla en $(0,0)$; $H=-4<0$.
13. Mínimo en $(1,3)$; $H=4>0$ y $f_{xx}=2>0$; $f=4$.
14. $x=y=5$; máximo $f=25$.
15. $x=y=2$; mínimo $f=8$.
16. $3$.
17. $\dfrac{2}{3}$.
18. $8\pi$.
19. $0$ (simetría).
20. $m=\dfrac{1}{4}$.
