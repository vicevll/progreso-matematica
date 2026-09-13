# Cálculo vectorial

El cálculo vectorial estudia campos definidos en el plano y en el espacio, y las integrales que los acumulan a lo largo de curvas y superficies. Sus tres teoremas centrales —Green, Stokes y Gauss— son generalizaciones del teorema fundamental del cálculo: lo que se acumula en el interior de una región se manifiesta como el efecto neto en su frontera.

## Campos vectoriales

Un **campo vectorial** asigna una flecha (un vector) a cada punto del plano o del espacio. En el plano:

$$\vec{F}(x,y) = \langle P(x,y),\, Q(x,y) \rangle$$

y en el espacio:

$$\vec{F}(x,y,z) = \langle P(x,y,z),\, Q(x,y,z),\, R(x,y,z) \rangle$$

Los corchetes $\langle\ \rangle$ encierran las **componentes** del vector: $P$ y $Q$ (y $R$) son funciones ordinarias. La flechita de $\vec{F}$ indica que el resultado es un vector, no un número.

**Ejemplo.** $\vec{F}(x,y) = \langle -y, x \rangle$ es un campo de rotación: en $(1,0)$ vale $\langle 0,1 \rangle$, en $(0,1)$ vale $\langle -1,0 \rangle$; las flechas giran alrededor del origen, tangentes a los círculos. En cambio, $\vec{F}(x,y) = \langle x, y \rangle$ es radial: todas las flechas apuntan hacia afuera del origen, como un manantial.

Los campos vectoriales modelan velocidades de fluidos (viento, corrientes), fuerzas gravitatorias y campos eléctricos y magnéticos.

## Divergencia y rotacional

La **divergencia** mide la tendencia de un campo a "emanar" de un punto (fuente) o a "absorber" hacia él (sumidero). En el plano:

$$\nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}$$

En el espacio se añade la tercera componente:

$$\nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$

Si $\nabla \cdot \vec{F} > 0$ hay fuente en el punto; si es negativo, sumidero; si $\nabla \cdot \vec{F} = 0$ el campo es **incompresible** (ni se crea ni se destruye nada ahí). El símbolo $\partial$ es la **derivada parcial**: se deriva respecto de una variable tratando a las demás como constantes.

El **rotacional** mide la tendencia local a girar, como la rapidez con que giraría una ruedita de paletas sumergida en el fluido. En el plano es un número:

$$\nabla \times \vec{F} = \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}$$

En el espacio es un vector (indica el eje de giro y su intensidad):

$$\nabla \times \vec{F} = \left\langle \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z},\; \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x},\; \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right\rangle$$

Si $\nabla \times \vec{F} = \vec{0}$ el campo es **irrotacional** (no gira). El símbolo $\nabla$ ("nabla") representa el operador $\langle \frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z} \rangle$: la divergencia es como "multiplicarlo punto" por el campo; el rotacional, como "multiplicarlo cruz".

**Ejemplo.** Para $\vec{F} = \langle x^2 y,\; y^2 x \rangle$: $\nabla \cdot \vec{F} = 2xy + 2xy = 4xy$ y $\nabla \times \vec{F} = y^2 - x^2$. El campo $\langle -y, x \rangle$ tiene rotacional $1 - (-1) = 2$: gira antihorario en todas partes.

## Integrales de línea

La **integral de línea** de un campo a lo largo de una curva $C$ parametrizada por $\vec{r}(t) = \langle x(t), y(t) \rangle$, con $t \in [a,b]$, acumula la componente del campo en la dirección del camino:

$$\int_C \vec{F} \cdot d\vec{r} = \int_a^b \vec{F}\big(\vec{r}(t)\big) \cdot \vec{r}'(t)\, dt$$

Aquí $\vec{r}'(t) = \langle x'(t), y'(t) \rangle$ es el vector velocidad (tangente a la curva), y el producto punto $\vec{u} \cdot \vec{v} = u_1 v_1 + u_2 v_2$ selecciona la parte del campo que empuja a lo largo del camino. Físicamente la integral es el **trabajo** que realiza el campo al mover una partícula por $C$. Para una curva cerrada se escribe $\oint_C$ y se llama **circulación**. Recorrer la curva al revés cambia el signo del resultado.

También existe la integral respecto a la longitud de arco, sin producto punto y con el largo de la velocidad:

$$\int_C f\, ds = \int_a^b f\big(\vec{r}(t)\big)\, |\vec{r}'(t)|\, dt$$

Sirve para calcular la masa de un alambre con densidad $f$ (o su longitud, si $f = 1$).

**Ejemplo.** Para $\vec{F} = \langle y, x \rangle$ y $\vec{r}(t) = \langle t, t^2 \rangle$, $t \in [0,1]$: la velocidad es $\langle 1, 2t \rangle$, el campo sobre la curva es $\langle t^2, t \rangle$, y el producto punto da $t^2 + 2t^2 = 3t^2$. Entonces:

$$\int_0^1 3t^2\, dt = 1$$

## Campos conservativos y función potencial

$\vec{F}$ es **conservativo** si existe una función escalar $f$, llamada **potencial**, tal que el campo es su gradiente:

$$\vec{F} = \nabla f = \left\langle \frac{\partial f}{\partial x},\, \frac{\partial f}{\partial y} \right\rangle$$

En ese caso la integral de línea solo depende de los extremos (teorema fundamental para integrales de línea):

$$\int_C \vec{F} \cdot d\vec{r} = f(\vec{r}(b)) - f(\vec{r}(a))$$

El trabajo no depende del camino, y sobre una curva cerrada vale cero. Analogía física: el trabajo de la gravedad solo depende de la diferencia de altura entre el inicio y el final, no de la ruta.

**Criterio.** Si $\vec{F}$ es de clase $C^1$ (derivadas continuas) en un dominio **simplemente conexo** (una sola pieza, sin agujeros) y $\nabla \times \vec{F} = \vec{0}$, entonces $\vec{F}$ es conservativo. El dominio importa: el campo $\langle -y, x \rangle/(x^2 + y^2)$ tiene rotacional cero pero circulación $2\pi$ alrededor del círculo unitario, porque su dominio (el plano sin el origen) tiene un agujero.

**Cómo hallar el potencial.** Si $f_x = P$, integra respecto de $x$ tratando a $y$ como constante; aparece una función $g(y)$ como "constante de integración"; luego usa $f_y = Q$ para determinar $g$.

**Ejemplo.** Para $\vec{F} = \langle 2x, 2y \rangle$: de $f_x = 2x$ se tiene $f = x^2 + g(y)$; como $f_y = g'(y) = 2y$, resulta $g = y^2 + C$. Entonces $f = x^2 + y^2$ (la constante se omite).

## Teorema de Green

Si $C$ es una curva cerrada simple, orientada en sentido antihorario (la región queda a la izquierda), que limita una región $D$ del plano:

$$\oint_C (P\, dx + Q\, dy) = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dA$$

La expresión $P\,dx + Q\,dy$ es la forma clásica de escribir $\int_C \vec{F} \cdot d\vec{r}$ con $\vec{F} = \langle P, Q \rangle$. El teorema dice: la circulación en el borde es la suma de los rotacionales del interior. Convierte una integral de línea en una integral doble (o al revés); es útil cuando la curva es complicada pero la región es simple.

**Fórmula del área.** Tomando $P = -y/2$, $Q = x/2$ el rotacional vale $1$ y la integral doble da el área:

$$A = \frac{1}{2}\oint_C (x\, dy - y\, dx)$$

**Ejemplo.** Para el círculo unitario, en $\oint_C (x\,dy - y\,dx)$ el rotacional es $1 - (-1) = 2$, y Green da $\iint_D 2\,dA = 2\pi$ (el doble del área $\pi$). Para la elipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, parametrizada con $\vec{r}(t) = \langle a\cos t, b\sin t \rangle$, la fórmula del área da $A = \pi ab$.

## Superficies y flujo

Una superficie se describe con **dos** parámetros: $\vec{r}(u,v)$. Sus vectores tangentes son las derivadas parciales $\vec{r}_u$ y $\vec{r}_v$, y su **producto cruz** es un vector normal a la superficie:

$$\vec{n} = \vec{r}_u \times \vec{r}_v$$

(el producto cruz de dos vectores es un vector perpendicular a ambos; su longitud es el área del paralelogramo que forman). El vector normal unitario es $\hat{n} = \vec{n}/|\vec{n}|$. El **flujo** de $\vec{F}$ a través de una superficie $S$ es la integral de la componente normal:

$$\iint_S \vec{F} \cdot \vec{n}\, dS = \iint_D \vec{F}\big(\vec{r}(u,v)\big) \cdot (\vec{r}_u \times \vec{r}_v)\, du\, dv$$

Mide cuánto campo atraviesa la superficie: caudal de un fluido, flujo eléctrico o magnético. Un campo paralelo a la superficie no la atraviesa (producto punto con la normal igual a cero). Las superficies cerradas se orientan con la normal **exterior**.

**Ejemplo.** Para la esfera de radio $R$ y el campo radial $\vec{F} = \langle x, y, z \rangle$, el vector normal unitario exterior es $\hat{n} = \langle x, y, z \rangle / R$ (el vector posición normalizado), y $\vec{F} \cdot \hat{n} = (x^2 + y^2 + z^2)/R = R$. El flujo es $R$ por el área de la esfera: $R \cdot 4\pi R^2 = 4\pi R^3$.

## Teorema de Stokes

La circulación de $\vec{F}$ alrededor de una curva cerrada $C$ iguala el flujo del rotacional a través de cualquier superficie $S$ que tenga a $C$ como borde:

$$\oint_C \vec{F} \cdot d\vec{r} = \iint_S (\nabla \times \vec{F}) \cdot \vec{n}\, dS$$

La orientación de $C$ y la normal $\vec{n}$ se relacionan por la regla de la mano derecha (el pulgar según $\vec{n}$, los dedos dan el sentido de $C$). Stokes generaliza el teorema de Green al espacio.

**Ejemplo.** Para $\vec{F} = \langle -y, x, 0 \rangle$ se tiene $\nabla \times \vec{F} = \langle 0, 0, 2 \rangle$. Sobre un disco de área $A$ en el plano $xy$ orientado hacia arriba, el flujo del rotacional es $2A$. Para el disco unitario, $2\pi$, que coincide con la circulación por el borde: $\oint_C \vec{F} \cdot d\vec{r} = \int_0^{2\pi} 1\,dt = 2\pi$.

## Teorema de Gauss (divergencia)

Si $S$ es una superficie cerrada que encierra un volumen $V$, con normal exterior $\vec{n}$:

$$\iint_S \vec{F} \cdot \vec{n}\, dS = \iiint_V \nabla \cdot \vec{F}\, dV$$

El flujo neto a través de la frontera iguala la integral de la divergencia en el interior. Es la formulación matemática de la conservación: lo que sale menos lo que entra es lo que se genera dentro. Es la base de la ley de Gauss del electromagnetismo.

**Ejemplo.** Para $\vec{F} = \langle x^2, y^2, z^2 \rangle$ en el cubo $[0,1]^3$:

$$\nabla \cdot \vec{F} = 2(x + y + z), \qquad \iiint_V 2(x+y+z)\, dV = 2 \cdot 3 \cdot \frac{1}{2} = 3$$

(cada una de las integrales de $x$, $y$ y $z$ sobre el cubo vale $\frac{1}{2}$). Para $\vec{F} = \langle x, y, z \rangle$ en la esfera de radio $R$: divergencia $3$ y flujo $3 \cdot \frac{4}{3}\pi R^3 = 4\pi R^3$, el mismo resultado de la sección de flujo.

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
5. Sí: $\nabla \times \vec{F} = 0$ y el dominio es todo el plano (simplemente conexo); potencial $f = x^2 + y^2$.
6. $\vec{r}'(t) = \langle 1, 2t \rangle$, $\vec{F}(\vec{r}(t)) = \langle t^2, t \rangle$; $\displaystyle\int_0^1 (t^2 + 2t^2)\, dt = \int_0^1 3t^2\, dt = 1$.
7. $W = 1$: potencial $\frac{x^2 + y^2}{2}$, y $f(1,1) - f(0,0) = 1 - 0 = 1$.
8. $f = x^2 y + C$.
9. $f = x^2 + y^3 + C$.
10. $W = 1$: el campo es conservativo ($f = xy$) y el trabajo no depende del camino.
11. $P = 0$, $Q = x$; rotacional $1$; $\displaystyle\iint_D 1\, dA = 1$ (área del cuadrado).
12. Rotacional $= 2$; Green: $\displaystyle\iint_D 2\, dA = 2\pi$; coincide con el doble del área.
13. Con $\vec{r}(t) = \langle a\cos t, b\sin t \rangle$: $A = \dfrac{1}{2}\int_0^{2\pi} ab\,dt = \pi a b$.
14. $\vec{F} \cdot \hat{n} = z = 1$ en el disco; flujo $= 1 \cdot \pi = \pi$.
15. $\vec{F} \cdot \hat{n} = R$; flujo $= R \cdot 4\pi R^2 = 4\pi R^3$.
16. Circulación $\displaystyle\oint_C \vec{F} \cdot d\vec{r} = \int_0^{2\pi} 1\,dt = 2\pi$; flujo de $\langle 0,0,2 \rangle$ por el disco $= 2\pi$. Coinciden.
17. $\nabla \cdot \vec{F} = 3$; $\displaystyle\iiint_V 3\, dV = 3$ (volumen del cubo: 1); el flujo directo también es $3$.
18. $\nabla \cdot \vec{F} = 2(x + y + z)$; $\displaystyle\iiint_V 2(x+y+z)\, dV = 2 \cdot 3 \cdot \tfrac{1}{2} = 3$.
19. $\nabla \times \vec{F} = \langle 0, 0, 2 \rangle$; flujo por el disco $= 2\pi$; la circulación por el borde vale $2\pi$.
20. $\nabla \cdot \vec{F} = 2$; $\displaystyle\iiint_V 2\, dV = 2 \cdot \frac{4}{3}\pi (2)^3 = \frac{64\pi}{3}$.
