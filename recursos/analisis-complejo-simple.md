# Análisis complejo

El análisis complejo estudia funciones definidas sobre $\mathbb{C}$, donde la derivación se vuelve mucho más restrictiva que en $\mathbb{R}$ y, en cambio, extraordinariamente poderosa. La holomorfía, las integrales de contorno y el cálculo de residuos permiten resolver integrales reales difíciles y describir el comportamiento global de una función a partir de su frontera.

## Funciones de variable compleja

Una función compleja $f: \mathbb{C} \to \mathbb{C}$ asigna a cada $z = x + iy$ un valor $f(z)$. Separando parte real e imaginaria:

$$f(z) = u(x,y) + i\,v(x,y)$$

donde $u$ y $v$ son funciones reales de dos variables. La distancia entre puntos es $|z - w|$, con $|z| = \sqrt{x^2 + y^2}$.

El límite y la continuidad se definen igual que en $\mathbb{R}$, pero al derivar hay **infinitas direcciones** de aproximación en el plano complejo. Esa exigencia adicional es lo que hace tan especiales a las funciones holomorfas.

**Ejemplo.** Para $f(z) = z^2 = (x^2 - y^2) + i(2xy)$ se tiene $u = x^2 - y^2$ y $v = 2xy$.

## Cauchy-Riemann y holomorfía

$f$ es **holomorfa** en $z_0$ si la derivada compleja

$$f'(z_0) = \lim_{h \to 0}\frac{f(z_0 + h) - f(z_0)}{h}$$

existe, con $h$ complejo aproximándose por cualquier dirección.

**Condiciones de Cauchy-Riemann (CR):**

$$u_x = v_y, \qquad u_y = -v_x$$

**Teorema.** Si $u$ y $v$ tienen derivadas parciales continuas en un abierto y cumplen CR, entonces $f$ es holomorfa allí, y

$$f'(z) = u_x + i\,v_x$$

Una consecuencia inmediata: $u$ y $v$ son **armónicas** ($u_{xx} + u_{yy} = 0$, y lo mismo $v$). A $v$ se le llama conjugada armónica de $u$.

**Ejemplo.** $f(z) = z^2$: $u_x = 2x = v_y$ y $u_y = -2y = -v_x$. Holomorfa en todo $\mathbb{C}$.

**Contraejemplo.** $f(z) = \bar{z}$: $u = x$, $v = -y$; entonces $u_x = 1 \neq v_y = -1$. No es holomorfa en ningún punto.

## Integrales de contorno

La integral de $f$ a lo largo de una curva $\gamma$ parametrizada por $\gamma(t)$, $t \in [a,b]$, es

$$\int_\gamma f(z)\,dz = \int_a^b f(\gamma(t))\,\gamma'(t)\,dt$$

**Propiedades:** linealidad; cambio de signo al recorrer la curva en sentido opuesto; y la **acotación**

$$\left|\int_\gamma f(z)\,dz\right| \leq \max_{z\in\gamma}|f(z)| \cdot \text{longitud}(\gamma)$$

**Ejemplo.** $\oint_{|z|=1} z\,dz = 0$ porque $z$ tiene primitiva $z^2/2$. En cambio

$$\oint_{|z|=1} \frac{dz}{z} = 2\pi i$$

El resultado mide cuántas vueltas da la curva alrededor del origen.

## Cauchy-Goursat y fórmula integral de Cauchy

**Teorema de Cauchy-Goursat.** Si $f$ es holomorfa en un dominio simplemente conexo y $\gamma$ es una curva cerrada contenida en él, entonces

$$\oint_\gamma f(z)\,dz = 0$$

**Fórmula integral de Cauchy.** Si $z_0$ está dentro de $\gamma$,

$$f(z_0) = \frac{1}{2\pi i}\oint_\gamma \frac{f(z)}{z - z_0}\,dz$$

De aquí se obtiene que toda función holomorfa es **infinitamente derivable**, con

$$f^{(n)}(z_0) = \frac{n!}{2\pi i}\oint_\gamma \frac{f(z)}{(z-z_0)^{n+1}}\,dz$$

Esto es mucho más fuerte que en el análisis real, donde derivable no implica dos veces derivable.

**Ejemplo.** $\oint_{|z|=2}\dfrac{e^z}{z-1}\,dz = 2\pi i\,e^{1} = 2\pi i\,e$.

## Series de Taylor y Laurent

Toda función holomorfa en un disco se desarrolla en **serie de Taylor** alrededor de $z_0$:

$$f(z) = \sum_{n=0}^{\infty} a_n (z-z_0)^n, \qquad a_n = \frac{f^{(n)}(z_0)}{n!}$$

En un **anillo** alrededor de una singularidad aparece la **serie de Laurent**, con potencias negativas:

$$f(z) = \sum_{n=-\infty}^{\infty} c_n (z-z_0)^n$$

El coeficiente $c_{-1}$ se llama **residuo** y es la clave para calcular integrales cerradas.

**Ejemplo.** Para $|z| < 1$, $\dfrac{1}{1-z} = \sum_{n=0}^{\infty} z^n$. Su radio de convergencia es $1$, es decir, la distancia al polo en $z = 1$.

## Singularidades y residuos

Sea $z_0$ un punto aislado donde $f$ no es holomorfa:

- **Singularidad evitable:** existe $\lim_{z\to z_0} f(z)$ (como $\dfrac{\text{sen}\,z}{z}$ en $0$).
- **Polo de orden $m$:** $f$ crece como $(z-z_0)^{-m}$.
- **Singularidad esencial:** infinitos términos negativos (como $e^{1/z}$ en $0$).

**Cálculo de residuos.**

- Polo simple: $\displaystyle \text{Res}(f,z_0) = \lim_{z\to z_0}(z-z_0)f(z)$.
- Polo de orden $m$: $\displaystyle \text{Res}(f,z_0) = \frac{1}{(m-1)!}\lim_{z\to z_0}\frac{d^{m-1}}{dz^{m-1}}\big[(z-z_0)^m f(z)\big]$.

**Teorema de los residuos.** Si $f$ es holomorfa salvo en singularidades aisladas $z_k$ dentro de $\gamma$,

$$\oint_\gamma f(z)\,dz = 2\pi i \sum_k \text{Res}(f,z_k)$$

**Ejemplo.** En $f(z) = \dfrac{1}{z(z-1)}$, el polo en $z=1$ es simple y $\text{Res}(f,1) = \dfrac{1}{1} = 1$.

## Aplicaciones a integrales reales

El teorema de los residuos convierte integrales reales en sumas algebraicas. Para integrales sobre toda la recta:

$$\int_{-\infty}^{\infty} f(x)\,dx = 2\pi i \sum_{\text{Im}\,z_k > 0} \text{Res}(f,z_k)$$

cuando $f$ decae suficientemente rápido y el contorno (un semicírculo grande) aporta cero en el arco.

**Método.**

1. Extiende $f$ al plano complejo y cierra el contorno.
2. Identifica los polos del semiplano superior.
3. Suma residuos y multiplica por $2\pi i$.

**Ejemplo.** $\displaystyle\int_{-\infty}^{\infty}\frac{dx}{1+x^2}$: el polo es $z = i$, con residuo $\dfrac{1}{2i}$. Entonces la integral vale $2\pi i \cdot \dfrac{1}{2i} = \pi$.

Para integrales trigonométricas se usa $z = e^{i\theta}$, que transforma el intervalo $[0,2\pi]$ en el círculo unitario.

## Ejercicios (20)

### Nivel 1 · Cauchy-Riemann y holomorfía

1. Verifica Cauchy-Riemann para $f(z) = z^2$.
2. ¿Es holomorfa $f(z) = \bar{z}$? Justifica.
3. Muestra que $f(z) = e^z$ cumple las condiciones de Cauchy-Riemann.
4. ¿Dónde es derivable $f(z) = |z|^2$? ¿Es holomorfa?
5. Halla $f'(z)$ para $f(z) = z^3$ usando $f' = u_x + i\,v_x$.

### Nivel 2 · Integrales de contorno

6. Calcula $\displaystyle\oint_{|z|=1} z\,dz$.
7. Calcula $\displaystyle\oint_{|z|=1} \frac{dz}{z}$.
8. Calcula $\displaystyle\oint_{|z|=1} \frac{dz}{z^2}$.
9. Calcula $\displaystyle\oint_{|z|=2} \frac{dz}{z-1}$.
10. Calcula $\displaystyle\int_0^{1+i} z^2\,dz$ a lo largo del segmento recto.

### Nivel 3 · Series y residuos

11. Halla el residuo de $\dfrac{e^z}{z}$ en $0$.
12. Halla el residuo de $\dfrac{1}{z^2}$ en $0$.
13. Halla el residuo de $\dfrac{1}{z-1}$ en $z = 1$.
14. Halla el residuo de $\dfrac{1}{z^2+1}$ en $z = i$.
15. Halla el residuo de $\dfrac{1}{z(z-1)}$ en $z = 1$.

### Nivel 4 · Residuos e integrales reales

16. Calcula $\displaystyle\int_{-\infty}^{\infty} \frac{dx}{1+x^2}$.
17. Calcula $\displaystyle\int_{-\infty}^{\infty} \frac{dx}{x^2+4}$.
18. Calcula $\displaystyle\int_{-\infty}^{\infty} \frac{dx}{(x^2+1)(x^2+4)}$.
19. Calcula $\displaystyle\oint_{|z|=3} \frac{dz}{(z-1)(z-2)}$.
20. Calcula $\displaystyle\int_0^{2\pi} \frac{d\theta}{2+\cos\theta}$.

## Respuestas

1. $u_x = 2x = v_y$ y $u_y = -2y = -v_x$: es holomorfa.
2. No: $u = x$, $v = -y$ dan $u_x = 1 \neq v_y = -1$.
3. Con $e^z = e^x\cos y + i\,e^x\,\text{sen}\,y$ se cumple $u_x = v_y$ y $u_y = -v_x$.
4. Solo en $z = 0$ (CR exigen $x = y = 0$); no es holomorfa en ningún abierto.
5. $f'(z) = 3x^2 - 3y^2 + i\,6xy = 3z^2$.
6. $0$ (tiene primitiva $z^2/2$).
7. $2\pi i$.
8. $0$ (el residuo de $z^{-2}$ es $0$).
9. $2\pi i$ (polo simple en $z = 1$, residuo $1$).
10. $\dfrac{(1+i)^3}{3} = \dfrac{-2+2i}{3}$.
11. $1$.
12. $0$.
13. $1$.
14. $\dfrac{1}{2i} = -\dfrac{i}{2}$.
15. $1$.
16. $\pi$.
17. $\dfrac{\pi}{2}$.
18. $\dfrac{\pi}{6}$.
19. $0$ (los residuos $-1$ y $1$ se cancelan).
20. $\dfrac{2\pi}{\sqrt{3}}$.
