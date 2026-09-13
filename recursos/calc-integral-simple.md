# Cálculo integral

**Guía simple · Cálculo · Universidad 1–2**
*Antiderivadas, técnicas de integración, áreas y volúmenes.*

---

## 1. La integral como acumulación

La derivada mide **cuánto cambia** una cantidad; la integral mide **cuánto se acumula**. Si conocemos la razón de cambio, la integral reconstruye el total.

Geométricamente, $\displaystyle\int_a^b f(x)\,dx$ es el **área con signo** entre la curva $y = f(x)$ y el eje $x$. Se construye partiendo $[a,b]$ en $n$ franjas y tomando el límite de la suma de Riemann:

$$\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*)\,\Delta x$$

**Mini-ejemplo.** Si la velocidad es $v(t) = 3t^2$, la distancia recorrida entre $t=0$ y $t=2$ es $\displaystyle\int_0^2 3t^2\,dt = \Big[t^3\Big]_0^2 = 8$.

---

## 2. Antiderivadas e integrales inmediatas

Una **antiderivada** de $f$ es una función $F$ con $F'(x) = f(x)$. Todas las antiderivadas difieren en una constante:

$$\int f(x)\,dx = F(x) + C$$

| Integral | Resultado |
|---|---|
| $\displaystyle\int k\,dx$ | $kx + C$ |
| $\displaystyle\int x^{n}\,dx$ | $\dfrac{x^{n+1}}{n+1} + C \quad (n \neq -1)$ |
| $\displaystyle\int \frac{1}{x}\,dx$ | $\ln\mid x\mid + C$ |
| $\displaystyle\int e^{x}\,dx$ | $e^{x} + C$ |
| $\displaystyle\int a^{x}\,dx$ | $\dfrac{a^{x}}{\ln a} + C$ |
| $\displaystyle\int \operatorname{sen}x\,dx$ | $-\cos x + C$ |
| $\displaystyle\int \cos x\,dx$ | $\operatorname{sen}x + C$ |
| $\displaystyle\int \sec^{2}x\,dx$ | $\tan x + C$ |
| $\displaystyle\int \frac{1}{1+x^{2}}\,dx$ | $\arctan x + C$ |
| $\displaystyle\int \frac{1}{\sqrt{1-x^{2}}}\,dx$ | $\arcsin x + C$ |

**Linealidad.** La integral respeta sumas y múltiplos constantes:

$$\int \big[\alpha f(x) + \beta g(x)\big]\,dx = \alpha \int f(x)\,dx + \beta \int g(x)\,dx$$

**Mini-ejemplo.** $\displaystyle\int \left(4x^{3} - \frac{2}{x}\right)dx = x^{4} - 2\ln\mid x\mid + C$.

---

## 3. Teorema fundamental del cálculo

Es el puente entre derivar e integrar.

**Parte 1.** Si $f$ es continua, la derivada de una acumulación es la función:

$$\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$$

**Parte 2 (regla de Barrow).** Si $F$ es una antiderivada de $f$:

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

**Mini-ejemplo.** $\displaystyle\int_1^3 x^{2}\,dx = \left[\frac{x^{3}}{3}\right]_1^3 = 9 - \frac{1}{3} = \frac{26}{3}$.

---

## 4. Sustitución (cambio de variable)

Se usa cuando aparece una función y, salvo constante, su derivada:

$$\int f\big(g(x)\big)\,g'(x)\,dx = \int f(u)\,du, \qquad u = g(x)$$

En una integral definida, al sustituir también cambian los límites.

**Mini-ejemplo.** Con $u = x^{2}$, $du = 2x\,dx$:

$$\int 2x\,e^{x^{2}}\,dx = \int e^{u}\,du = e^{x^{2}} + C$$

---

## 5. Integración por partes

Se usa para productos de funciones de distinto tipo:

$$\int u\,dv = uv - \int v\,du$$

Para elegir $u$ se sigue el orden **LIATE**: Logarítmica, Inversa trigonométrica, Algebraica, Trigonométrica, Exponencial.

**Mini-ejemplo.** Con $u = \ln x$ y $dv = x\,dx$:

$$\int x\ln x\,dx = \frac{x^{2}}{2}\ln x - \int \frac{x}{2}\,dx = \frac{x^{2}}{2}\ln x - \frac{x^{2}}{4} + C$$

---

## 6. Fracciones parciales

Para integrales de funciones racionales $P(x)/Q(x)$ con $\deg P < \deg Q$: factoriza el denominador y descompón en fracciones simples.

**Mini-ejemplo.** $\dfrac{1}{x^{2}-1} = \dfrac{1}{2}\left(\dfrac{1}{x-1} - \dfrac{1}{x+1}\right)$, luego

$$\int \frac{1}{x^{2}-1}\,dx = \frac{1}{2}\ln\left\lvert\frac{x-1}{x+1}\right\rvert + C$$

---

## 7. Sustitución trigonométrica

Para radicales cuadráticos se elige la sustitución según el radical:

| Radical | Sustitución |
|---|---|
| $\sqrt{a^{2}-x^{2}}$ | $x = a\operatorname{sen}\theta$ |
| $\sqrt{a^{2}+x^{2}}$ | $x = a\tan\theta$ |
| $\sqrt{x^{2}-a^{2}}$ | $x = a\sec\theta$ |

**Mini-ejemplo.** $\displaystyle\int \sqrt{1-x^{2}}\,dx = \frac{1}{2}\left(x\sqrt{1-x^{2}} + \arcsin x\right) + C$.

---

## 8. Aplicaciones e integrales impropias

**Aplicaciones geométricas y físicas:**

1. **Área entre curvas:** $\displaystyle A = \int_a^b \big\lvert f(x) - g(x)\big\rvert\,dx$.
2. **Volumen por discos:** $\displaystyle V = \pi\int_a^b \big[f(x)\big]^{2}\,dx$.
3. **Volumen por cascarones:** $\displaystyle V = 2\pi\int_a^b x\,f(x)\,dx$.
4. **Longitud de arco:** $\displaystyle L = \int_a^b \sqrt{1 + \big[f'(x)\big]^{2}}\,dx$.
5. **Valor promedio:** $\displaystyle \bar f = \frac{1}{b-a}\int_a^b f(x)\,dx$.
6. **Trabajo:** $\displaystyle W = \int_a^b F(x)\,dx$.

**Integrales impropias.** Cuando el intervalo es infinito o la función se vuelve infinita, se define con un límite:

$$\int_a^{\infty} f(x)\,dx = \lim_{t \to \infty} \int_a^t f(x)\,dx$$

Criterio $p$ de referencia: $\displaystyle\int_1^{\infty} \frac{1}{x^{p}}\,dx$ converge si $p > 1$ y diverge si $p \leq 1$.

**Mini-ejemplo.** $\displaystyle\int_1^{\infty} \frac{1}{x^{2}}\,dx = \lim_{t\to\infty}\left[-\frac{1}{x}\right]_1^t = 1$.

---

## Ejercicios (20)

### Nivel 1 — Integrales inmediatas

1. $\displaystyle\int \left(6x^{2} - 4x + 3\right)dx$
2. $\displaystyle\int \left(\frac{1}{x} + e^{x}\right)dx$
3. $\displaystyle\int \left(3\cos x - 2\operatorname{sen}x\right)dx$
4. $\displaystyle\int \left(\sqrt{x} + \frac{1}{x^{2}}\right)dx$
5. $\displaystyle\int \left(2^{x} + x^{3}\right)dx$

### Nivel 2 — Sustitución

6. $\displaystyle\int 2x\left(x^{2}+1\right)^{4}\,dx$
7. $\displaystyle\int x\,e^{x^{2}}\,dx$
8. $\displaystyle\int \cos x\,\operatorname{sen}^{2}x\,dx$
9. $\displaystyle\int \frac{\ln x}{x}\,dx$
10. $\displaystyle\int \frac{x}{\sqrt{x^{2}+4}}\,dx$

### Nivel 3 — Integración por partes

11. $\displaystyle\int x\,e^{x}\,dx$
12. $\displaystyle\int x\cos x\,dx$
13. $\displaystyle\int \ln x\,dx$
14. $\displaystyle\int x^{2}e^{x}\,dx$
15. $\displaystyle\int x\operatorname{sen}x\,dx$

### Nivel 4 — Definidas y aplicaciones

16. $\displaystyle\int_0^2 3x^{2}\,dx$
17. $\displaystyle\int_0^{\pi} \operatorname{sen}x\,dx$
18. $\displaystyle\int_1^{e} \frac{1}{x}\,dx$
19. Halla el área entre $y=x$ y $y=x^{2}$ en $[0,1]$.
20. $\displaystyle\int_1^{\infty}\frac{1}{x^{3}}\,dx$

---

## Respuestas

1. $2x^{3} - 2x^{2} + 3x + C$
2. $\ln\mid x\mid + e^{x} + C$
3. $3\operatorname{sen}x + 2\cos x + C$
4. $\dfrac{2}{3}x^{3/2} - \dfrac{1}{x} + C$
5. $\dfrac{2^{x}}{\ln 2} + \dfrac{x^{4}}{4} + C$
6. $\dfrac{\left(x^{2}+1\right)^{5}}{5} + C$
7. $\dfrac{1}{2}e^{x^{2}} + C$
8. $\dfrac{\operatorname{sen}^{3}x}{3} + C$
9. $\dfrac{(\ln x)^{2}}{2} + C$
10. $\sqrt{x^{2}+4} + C$
11. $(x-1)e^{x} + C$
12. $x\operatorname{sen}x + \cos x + C$
13. $x\ln x - x + C$
14. $\left(x^{2}-2x+2\right)e^{x} + C$
15. $-x\cos x + \operatorname{sen}x + C$
16. $8$
17. $2$
18. $1$
19. $\dfrac{1}{6}$
20. $\dfrac{1}{2}$
