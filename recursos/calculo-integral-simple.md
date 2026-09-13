# Cálculo integral

**Guía simple · Cálculo · Universidad 1–2**
*De la acumulación a las técnicas: entiende qué es integrar y cómo calcularlo.*

---

## 1. La integral como acumulación

La derivada mide **cuánto cambia** algo; la integral mide **cuánto se acumula**. Si conocemos la razón de cambio de una cantidad, la integral reconstruye la cantidad total.

Geométricamente, $\displaystyle\int_a^b f(x)\,dx$ es el **área con signo** entre la curva $y=f(x)$ y el eje $x$, desde $a$ hasta $b$. El área es positiva donde $f(x) > 0$ y negativa donde $f(x) < 0$.

La integral definida se construye con **sumas de Riemann**: se parte $[a,b]$ en $n$ franjas, se forma un rectángulo por franja y se toma el límite cuando $n \to \infty$:

$$\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*)\,\Delta x$$

> **Idea clave:** integrar es sumar infinitas contribuciones infinitesimales.

---

## 2. Antiderivadas e integral indefinida

Una **antiderivada** de $f$ es una función $F$ tal que $F'(x) = f(x)$. Como la derivada de una constante es cero, todas las antiderivadas difieren en una constante:

$$\int f(x)\,dx = F(x) + C$$

Estas son las integrales inmediatas que conviene dominar:

| Integral | Resultado |
|---|---|
| $\displaystyle\int k\,dx$ | $kx + C$ |
| $\displaystyle\int x^{n}\,dx$ | $\dfrac{x^{n+1}}{n+1} + C \quad (n \neq -1)$ |
| $\displaystyle\int \frac{1}{x}\,dx$ | $\ln|x| + C$ |
| $\displaystyle\int e^{x}\,dx$ | $e^{x} + C$ |
| $\displaystyle\int a^{x}\,dx$ | $\dfrac{a^{x}}{\ln a} + C$ |
| $\displaystyle\int \operatorname{sen}x\,dx$ | $-\cos x + C$ |
| $\displaystyle\int \cos x\,dx$ | $\operatorname{sen}x + C$ |
| $\displaystyle\int \sec^{2}x\,dx$ | $\tan x + C$ |
| $\displaystyle\int \frac{1}{1+x^{2}}\,dx$ | $\arctan x + C$ |
| $\displaystyle\int \frac{1}{\sqrt{1-x^{2}}}\,dx$ | $\arcsin x + C$ |

**Linealidad.** La integral respeta sumas y múltiplos constantes:

$$\int \big[\alpha f(x) + \beta g(x)\big]\,dx = \alpha \int f(x)\,dx + \beta \int g(x)\,dx$$

---

## 3. Teorema fundamental del cálculo

Es el puente entre derivar e integrar.

**Parte 1 (derivada de una acumulación).** Si $f$ es continua, entonces

$$\frac{d}{dx}\int_{a}^{x} f(t)\,dt = f(x)$$

**Parte 2 (regla de Barrow).** Si $F$ es una antiderivada de $f$:

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

**Ejemplo.** $\displaystyle\int_0^2 3x^{2}\,dx = \Big[x^{3}\Big]_0^2 = 8 - 0 = 8.$

---

## 4. Técnicas de integración

### 4.1 Sustitución (cambio de variable)

Se usa cuando aparece una función y (salvo constante) su derivada:

$$\int f\big(g(x)\big)\,g'(x)\,dx = \int f(u)\,du, \qquad u = g(x)$$

**Ejemplo.** $\displaystyle\int 2x\,e^{x^{2}}\,dx = e^{x^{2}} + C$, con $u = x^{2}$.

### 4.2 Integración por partes

$$\int u\,dv = uv - \int v\,du$$

Para elegir $u$ se usa el orden **LIATE**: Logarítmica, Inversa trigonométrica, Algebraica, Trigonométrica, Exponencial.

**Ejemplo.** $\displaystyle\int x\,e^{x}\,dx = x e^{x} - e^{x} + C = (x-1)e^{x} + C.$

### 4.3 Fracciones parciales

Para integrales de funciones racionales $P(x)/Q(x)$ con $\deg P < \deg Q$: factoriza el denominador y descompón en fracciones simples.

$$\frac{1}{x^{2}-1} = \frac{1}{2}\left(\frac{1}{x-1} - \frac{1}{x+1}\right)$$

$$\int \frac{1}{x^{2}-1}\,dx = \frac{1}{2}\ln\left|\frac{x-1}{x+1}\right| + C$$

### 4.4 Sustitución trigonométrica

| Radical | Sustitución |
|---|---|
| $\sqrt{a^{2}-x^{2}}$ | $x = a\operatorname{sen}\theta$ |
| $\sqrt{a^{2}+x^{2}}$ | $x = a\tan\theta$ |
| $\sqrt{x^{2}-a^{2}}$ | $x = a\sec\theta$ |

---

## 5. Aplicaciones

- **Área entre curvas:** $\displaystyle A = \int_a^b \big|f(x) - g(x)\big|\,dx$ (por encima menos por debajo).
- **Volumen por discos:** $\displaystyle V = \pi\int_a^b \big[f(x)\big]^{2}\,dx$.
- **Volumen por arandelas:** $\displaystyle V = \pi\int_a^b \Big([R(x)]^{2} - [r(x)]^{2}\Big)\,dx$.
- **Volumen por cascarones:** $\displaystyle V = 2\pi\int_a^b x\,f(x)\,dx$.
- **Longitud de arco:** $\displaystyle L = \int_a^b \sqrt{1 + \big[f'(x)\big]^{2}}\,dx$.
- **Valor promedio:** $\displaystyle \bar f = \frac{1}{b-a}\int_a^b f(x)\,dx$.
- **Trabajo variable:** $\displaystyle W = \int_a^b F(x)\,dx$.

---

## 6. Integrales impropias

Aparecen cuando el intervalo es infinito o la función se vuelve infinita. Se resuelven con un límite:

$$\int_a^{\infty} f(x)\,dx = \lim_{t \to \infty} \int_a^t f(x)\,dx$$

**Criterio $p$ de referencia:**

$$\int_1^{\infty} \frac{1}{x^{p}}\,dx \quad \text{converge si } p > 1, \quad \text{diverge si } p \leq 1$$

**Ejemplo.** $\displaystyle\int_1^{\infty}\frac{1}{x^{2}}\,dx = \lim_{t\to\infty}\left[-\frac{1}{x}\right]_1^t = 1$, converge.

---

## 7. Ejercicios (10)

1. $\displaystyle\int \left(4x^{3} - 2x + 1\right)\,dx$
2. $\displaystyle\int \frac{1}{x+3}\,dx$
3. $\displaystyle\int x\,e^{x^{2}}\,dx$
4. $\displaystyle\int \ln x\,dx$
5. $\displaystyle\int \cos^{2}x\,dx$
6. $\displaystyle\int \frac{1}{x^{2}-4}\,dx$
7. $\displaystyle\int_0^2 3x^{2}\,dx$
8. $\displaystyle\int_1^4 \frac{1}{\sqrt{x}}\,dx$
9. Halla el área entre $y=x^{2}$ y $y=x$ en $[0,1]$.
10. $\displaystyle\int_1^{\infty}\frac{1}{x^{3}}\,dx$

---

## Respuestas

1. $x^{4} - x^{2} + x + C$
2. $\ln|x+3| + C$
3. $\dfrac{1}{2}e^{x^{2}} + C$
4. $x\ln x - x + C$
5. $\dfrac{x}{2} + \dfrac{\operatorname{sen}2x}{4} + C$
6. $\dfrac{1}{4}\ln\left|\dfrac{x-2}{x+2}\right| + C$
7. $8$
8. $2$
9. $\dfrac{1}{6}$
10. $\dfrac{1}{2}$
