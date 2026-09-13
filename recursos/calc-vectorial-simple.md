# Cálculo vectorial

El cálculo vectorial estudia campos definidos en el plano y en el espacio, y las integrales que los acumulan a lo largo de curvas y superficies. Sus tres teoremas centrales —Green, Stokes y Gauss— son generalizaciones del teorema fundamental del cálculo.

## Campos vectoriales

Un **campo vectorial** asigna un vector a cada punto del plano o del espacio. En el plano:

$$\vec{F}(x,y) = \langle P(x,y),\, Q(x,y) \rangle$$

En el espacio:

$$\vec{F}(x,y,z) = \langle P(x,y,z),\, Q(x,y,z),\, R(x,y,z) \rangle$$

Los campos vectoriales modelan velocidades de fluidos, fuerzas gravitatorias, campos eléctricos y magnéticos, y gradientes de temperatura.

**Ejemplo.** $\vec{F}(x,y) = \langle -y, x \rangle$ es un campo de rotación: en cada punto el vector es perpendicular al radio y crece con la distancia al origen.

## Divergencia y rotacional

La **divergencia** de un campo en el plano es un escalar que mide la tendencia a "emanar" o "absorber" en un punto:

$$\nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}$$

En el espacio se añade la tercera componente:

$$\nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$

El **rotacional** mide la circulación local (la tendencia a girar). En el plano es el escalar:

$$\nabla \times \vec{F} = \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}$$

En el espacio es el vector:

$$\nabla \times \vec{F} = \left\langle \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z},\; \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x},\; \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right\rangle$$

Si $\nabla \cdot \vec{F} = 0$ el campo es **incompresible** (solenoidal); si $\nabla \times \vec{F} = \vec{0}$ es **irrotacional**.

**Ejemplo.** Para $\vec{F} = \langle x^2 y,\; y^2 x \rangle$:
$$\nabla \cdot \vec{F} = 2xy + 2xy = 4xy, \qquad \nabla \times \vec{F} = y^2 - x^2$$

## Integrales de línea

La **integral de línea** de un campo a lo largo de una curva $C$ parametrizada por $\vec{r}(t)$, $t \in [a,b]$, acumula la componente tangencial:

$$\int_C \vec{F} \cdot d\vec{r} = \int_a^b \vec{F}(\vec{r}(t)) \cdot \vec{r}'(t)\, dt$$

Físicamente es el **trabajo** que realiza el campo al mover una partícula por $C$. Para una curva cerrada se escribe $\oint_C$ y se llama **circulación**.

También existe la integral respecto a la longitud de arco:

$$\int_C f\, ds = \int_a^b f(\vec{r}(t))\, |\vec{r}'(t)|\, dt$$

usada para calcular la masa de un alambre con densidad $f$.

**Ejemplo.** Para $\vec{F} = \langle y, x \rangle$ y $\vec{r}(t) = \langle t, t^2 \rangle$, $t \in [0,1]$:
$$\int_0^1 \big(t^2 + t \cdot 2t\big)\, dt = \int_0^1 3t^2\, dt = 1$$

## Campos conservativos y función potencial

$\vec{F}$ es **conservativo** si existe una función escalar $f$, llamada **potencial**, tal que:

$$\vec{F} = \nabla f$$

En ese caso la integral de línea solo depende de los extremos:

$$\int_C \vec{F} \cdot d\vec{r} = f(\vec{r}(b)) - f(\vec{r}(a))$$

**Criterio.** Si $\vec{F}$ es de clase $C^1$ en un dominio **simplemente conexo** (sin agujeros) y $\nabla \times \vec{F} = \vec{0}$, entonces $\vec{F}$ es conservativo.

**Ejemplo.** $\vec{F} = \langle 2x, 2y \rangle$. De $f_x = 2x$ se tiene $f = x^2 + g(y)$; como $f_y = g'(y) = 2y$, resulta $g = y^2 + C$. Entonces $f = x^2 + y^2$.

## Teorema de Green

Si $C$ es una curva cerrada simple, orientada en sentido antihorario, que limita una región $D$ del plano:

$$\oint_C (P\, dx + Q\, dy) = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dA$$

Convierte una integral de línea en una integral doble (o al revés). Es especialmente útil cuando la curva es complicada pero la región es simple.

**Ejemplo (área).** Tomando $P = -y$, $Q = x$ se obtiene el área de la región:
$$A = \frac{1}{2}\oint_C (x\, dy - y\, dx)$$

Para el círculo unitario, el integrando de Green es $1 - (-1) = 2$, y el área resulta $\pi$.

## Superficies y flujo

Una superficie parametrizada $\vec{r}(u,v)$ tiene vector normal

$$\vec{n} = \vec{r}_u \times \vec{r}_v$$

El **flujo** de $\vec{F}$ a través de una superficie $S$ es la integral de la componente normal:

$$\iint_S \vec{F} \cdot \vec{n}\, dS$$

Mide cuánto campo atraviesa la superficie: caudal de un fluido, flujo eléctrico o magnético.

**Ejemplo.** Para la esfera de radio $R$ y el campo radial $\vec{F} = \langle x, y, z \rangle$, el vector normal unitario es $\hat{n} = \vec{r}/R$ y $\vec{F} \cdot \hat{n} = R$. El flujo es $R \cdot 4\pi R^2 = 4\pi R^3$.

## Teorema de Stokes

La circulación de $\vec{F}$ alrededor de una curva cerrada $C$ iguala el flujo del rotacional a través de cualquier superficie $S$ que tenga a $C$ como borde:

$$\oint_C \vec{F} \cdot d\vec{r} = \iint_S (\nabla \times \vec{F}) \cdot \vec{n}\, dS$$

Generaliza el teorema de Green al espacio. La orientación de $C$ y la normal $\vec{n}$ se relacionan por la regla de la mano derecha.

**Ejemplo.** Para $\vec{F} = \langle -y, x, 0 \rangle$, se tiene $\nabla \times \vec{F} = \langle 0, 0, 2 \rangle$. Sobre un disco de área $A$ en el plano $xy$ orientado hacia arriba, la circulación es $2A$.

## Teorema de Gauss (divergencia)

Si $S$ es una superficie cerrada que encierra un volumen $V$, con normal exterior $\vec{n}$:

$$\iint_S \vec{F} \cdot \vec{n}\, dS = \iiint_V \nabla \cdot \vec{F}\, dV$$

El flujo neto a través de la frontera iguala la integral de la divergencia en el interior. Es la formulación matemática de la conservación: lo que sale menos lo que entra es lo que se genera dentro.

**Ejemplo.** Para $\vec{F} = \langle x^2, y^2, z^2 \rangle$ en el cubo $[0,1]^3$:
$$\nabla \cdot \vec{F} = 2(x + y + z), \qquad \iiint_V 2(x+y+z)\, dV = 2 \cdot 3 \cdot \frac{1}{2} = 3$$

## Ejercicios (20)

### Nivel 1 · Divergencia y rotacional

1. Halla la divergencia de $\vec{F} = \langle x^2 y,\; x y^2 \rangle$.
2. Halla la divergencia de $\vec{F} = \langle x^3, y^3, z^3 \rangle$ en el origen.
3. Halla el rotacional de $\vec{F} = \langle -y, x, 0 \rangle$.
4. Halla la divergencia de $\vec{F} = \langle xy, yz, zx \rangle$.
5. Determina si $\vec{F} = \langle 2x, 2y \rangle$ es conservativo.

### Nivel 2 · Integrales de línea y potencial

6. Calcula $\displaystyle\int_C \vec{F} \cdot d\vec{r}$ para $\vec{F} = \langle y, x \rangle$ sobre $\vec{r}(t) = \langle t, t^2 \rangle$, $t \in [0,1]$.
7. Calcula el trabajo de $\vec{F} = \langle x, y \rangle$ de $(0,0)$ a $(1,1)$ por el segmento recto.
8. Halla el potencial de $\vec{F} = \langle 2xy,\; x^2 \rangle$.
9. Halla el potencial de $\vec{F} = \langle 2x,\; 3y^2 \rangle$.
10. Calcula el trabajo de $\vec{F} = \langle y, x \rangle$ de $(0,0)$ a $(1,1)$ por la parábola $y = x^2$.

### Nivel 3 · Green y flujo

11. Aplica Green a $\displaystyle\oint_C x\, dy$ sobre el cuadrado unitario orientado antihorario.
12. Calcula $\displaystyle\oint_C (x\, dy - y\, dx)$ sobre el círculo unitario.
13. Usa Green para hallar el área encerrada por la elipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$.
14. Halla el flujo de $\vec{F} = \langle 0, 0, z \rangle$ a través del disco $z = 1$, $x^2 + y^2 \leq 1$, orientado hacia arriba.
15. Halla el flujo de $\vec{F} = \langle x, y, z \rangle$ a través de la esfera de radio $R$.

### Nivel 4 · Stokes y Gauss

16. Verifica Stokes para $\vec{F} = \langle -y, x, 0 \rangle$ sobre el disco unitario del plano $xy$.
17. Verifica Gauss para $\vec{F} = \langle x, y, z \rangle$ en el cubo $[0,1]^3$.
18. Verifica Gauss para $\vec{F} = \langle x^2, y^2, z^2 \rangle$ en el cubo $[0,1]^3$.
19. Verifica Stokes para $\vec{F} = \langle -y, x, z \rangle$ sobre el disco unitario del plano $xy$.
20. Halla el flujo de $\vec{F} = \langle x, y, 0 \rangle$ a través de la esfera de radio $2$ usando Gauss.

## Respuestas

1. $\nabla \cdot \vec{F} = 2xy + 2xy = 4xy$.
2. $\nabla \cdot \vec{F} = 3x^2 + 3y^2 + 3z^2$; en el origen vale $0$.
3. $\nabla \times \vec{F} = \langle 0, 0, 2 \rangle$.
4. $\nabla \cdot \vec{F} = y + z + x$.
5. Sí: $\nabla \times \vec{F} = 0$ y el dominio es simplemente conexo; potencial $f = x^2 + y^2$.
6. $\displaystyle\int_0^1 3t^2\, dt = 1$.
7. $W = 1$ (potencial $\frac{x^2 + y^2}{2}$, evaluado entre los extremos).
8. $f = x^2 y + C$.
9. $f = x^2 + y^3 + C$.
10. $W = 1$: el campo es conservativo y el trabajo no depende del camino.
11. $\displaystyle\iint_D 1\, dA = 1$.
12. Green: $\displaystyle\iint_D 2\, dA = 2\pi$; coincide con el doble del área.
13. $A = \pi a b$.
14. $\vec{F} \cdot \hat{n} = z = 1$ en el disco; flujo $= \pi$.
15. Flujo $= 4\pi R^3$.
16. Circulación $\displaystyle\oint_C \vec{F} \cdot d\vec{r} = 2\pi$; flujo de $\langle 0,0,2 \rangle$ por el disco $= 2\pi$. Coinciden.
17. $\iiint_V 3\, dV = 3$; flujo directo también $3$.
18. $\iiint_V 2(x+y+z)\, dV = 3$.
19. $\nabla \times \vec{F} = \langle 0, 0, 2 \rangle$; flujo por el disco $= 2\pi$; la circulación vale $2\pi$.
20. $\nabla \cdot \vec{F} = 2$; $\iiint_V 2\, dV = 2 \cdot \frac{4}{3}\pi (2)^3 = \frac{64\pi}{3}$.
