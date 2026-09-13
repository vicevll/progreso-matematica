# Cálculo integral

**Guía simple · Cálculo · Universidad 1–2**
*Antiderivadas, técnicas de integración, áreas, volúmenes e integrales impropias, con cada símbolo explicado.*

---

## 1. La integral como acumulación

La derivada mide **cuánto cambia** una cantidad; la integral mide **cuánto se acumula**. Si conocemos la razón de cambio, la integral reconstruye el total: sumar la velocidad da la distancia, sumar el caudal da el volumen de agua, sumar el costo marginal da el costo total.

Geométricamente, $\displaystyle\int_a^b f(x)\,dx$ es el **área con signo** entre la curva $y = f(x)$ y el eje $x$, desde $x = a$ hasta $x = b$. Decimos "con signo" porque lo que está por debajo del eje cuenta negativo. Leamos la notación pieza por pieza:

- $\displaystyle\int$ es una S alargada, de la palabra latina *summa*: recuerda que estamos sumando.
- $a$ y $b$ son los **límites de integración**: $a$ es dónde empieza la acumulación y $b$ dónde termina.
- $f(x)$ es el **integrando**, la función que se acumula.
- $dx$ es el **diferencial de $x$**: indica la variable de integración y representa el ancho infinitesimal de cada rebanada. La cantidad $f(x)\,dx$ es el área de una rebanada delgadísima de altura $f(x)$ y ancho $dx$.

Para definirla con precisión, partimos $[a,b]$ en $n$ franjas iguales de ancho $\Delta x = \dfrac{b-a}{n}$ (la letra griega $\Delta$ se lee "cambio en"), elegimos en cada franja un punto $x_i^*$, formamos el rectángulo de altura $f(x_i^*)$ y sumamos las $n$ áreas con el símbolo $\Sigma$ (sigma mayúscula, "suma"). Esa es la **suma de Riemann**, y su límite cuando $n\to\infty$ es la integral definida:

$$\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*)\,\Delta x$$

En palabras: al hacer las franjas infinitamente delgadas, $\Delta x$ se convierte en $dx$ y la suma se convierte en integral.

**Mini-ejemplo.** Si la velocidad es $v(t) = 3t^2$ (m/s), la distancia recorrida entre $t=0$ y $t=2$ segundos es

$$\int_0^2 3t^2\,dt = \Big[t^3\Big]_0^2 = 8 - 0 = 8 \text{ metros}$$

El corchete $\Big[t^3\Big]_0^2$ significa "evalúa $t^3$ en 2 y réstale $t^3$ en 0".

---

## 2. Antiderivadas e integrales inmediatas

Una **antiderivada** de $f$ es una función $F$ cuya derivada es $f$: $F'(x) = f(x)$. Antiderivar es deshacer la derivación. Como la derivada de cualquier constante es cero, todas las antiderivadas de una función difieren en una constante, y se escriben:

$$\int f(x)\,dx = F(x) + C$$

La letra $C$ es la **constante de integración**: un número real arbitrario que representa que la familia de antiderivadas son curvas paralelas (misma pendiente en cada punto). En la integral indefinida, $C$ nunca se omite.

| Integral | Resultado | Explicación breve |
|---|---|---|
| $\displaystyle\int k\,dx$ | $kx + C$ | Integrar una constante acumula $k$ por unidad de $x$. |
| $\displaystyle\int x^{n}\,dx$ | $\dfrac{x^{n+1}}{n+1} + C \quad (n \neq -1)$ | Regla de la potencia al revés: sube el exponente y divide entre el nuevo. |
| $\displaystyle\int \frac{1}{x}\,dx$ | $\ln\mid x\mid + C$ | Caso excluido de la potencia; el valor absoluto cubre $x<0$. |
| $\displaystyle\int e^{x}\,dx$ | $e^{x} + C$ | La exponencial es su propia derivada. |
| $\displaystyle\int a^{x}\,dx$ | $\dfrac{a^{x}}{\ln a} + C$ | Se compensa el factor $\ln a$ que aparece al derivar. |
| $\displaystyle\int \operatorname{sen}x\,dx$ | $-\cos x + C$ | Signo menos porque $(\cos x)' = -\operatorname{sen}x$. |
| $\displaystyle\int \cos x\,dx$ | $\operatorname{sen}x + C$ | La derivada del seno es el coseno. |
| $\displaystyle\int \sec^{2}x\,dx$ | $\tan x + C$ | La derivada de la tangente es la secante al cuadrado. |
| $\displaystyle\int \frac{1}{1+x^{2}}\,dx$ | $\arctan x + C$ | Derivada del arco tangente. |
| $\displaystyle\int \frac{1}{\sqrt{1-x^{2}}}\,dx$ | $\arcsin x + C$ | Derivada del arco seno. |

**Linealidad.** La integral respeta sumas y múltiplos constantes ($\alpha$ y $\beta$ son números):

$$\int \big[\alpha f(x) + \beta g(x)\big]\,dx = \alpha \int f(x)\,dx + \beta \int g(x)\,dx$$

Esto permite integrar polinomios término a término. La linealidad **no** vale para productos ni cocientes: no existe regla del producto para integrales.

**Mini-ejemplo.** $\displaystyle\int \left(4x^{3} - \frac{2}{x}\right)dx = 4\cdot\frac{x^4}{4} - 2\ln\mid x\mid + C = x^{4} - 2\ln\mid x\mid + C$.

---

## 3. Teorema fundamental del cálculo

Es el puente entre derivar e integrar: convierte el cálculo de áreas (sumas infinitas) en una simple resta.

**Parte 1.** Si $f$ es continua, la derivada de una acumulación devuelve la función:

$$\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$$

Aquí $t$ es una variable muda que recorre el intervalo $[a,x]$ y $x$ es la variable del resultado. Significa que derivar y acumular son operaciones inversas.

**Parte 2 (regla de Barrow).** Si $F$ es una antiderivada de $f$ (es decir, $F' = f$):

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

Se busca una antiderivada $F$, se evalúa en el límite superior $b$ y se le resta el valor en el límite inferior $a$. La constante $C$ no aparece porque se cancela en la resta. La notación compacta es $\Big[F(x)\Big]_a^b = F(b) - F(a)$.

**Mini-ejemplo.** $\displaystyle\int_1^3 x^{2}\,dx = \left[\frac{x^{3}}{3}\right]_1^3 = \frac{27}{3} - \frac{1}{3} = \frac{26}{3}$.

**Propiedades útiles.** $\displaystyle\int_a^a f = 0$, $\displaystyle\int_a^b f = -\int_b^a f$ (invertir el sentido cambia el signo) y $\displaystyle\int_a^b f + \int_b^c f = \int_a^c f$ (encadenar tramos).

---

## 4. Sustitución (cambio de variable)

Es la **regla de la cadena al revés**. Se usa cuando aparece una función y, multiplicando, su derivada. Se elige $u = g(x)$ (la función interior), se calcula el diferencial $du = g'(x)\,dx$ y se reescribe todo en términos de $u$:

$$\int f\big(g(x)\big)\,g'(x)\,dx = \int f(u)\,du, \qquad u = g(x)$$

El símbolo $du$ significa $g'(x)\,dx$; por eso el integrando debe contener ese factor (salvo una constante, que se ajusta). En una integral definida, al sustituir también cambian los límites: si $x$ va de $a$ a $b$, entonces $u$ va de $g(a)$ a $g(b)$.

**Mini-ejemplo.** Con $u = x^{2}$, $du = 2x\,dx$:

$$\int 2x\,e^{x^{2}}\,dx = \int e^{u}\,du = e^{x^{2}} + C$$

**Mini-ejemplo definido.** $\displaystyle\int_0^2 2x(x^2+1)^4\,dx$: con $u = x^2+1$, los límites pasan de $x=0,2$ a $u=1,5$:

$$\int_1^5 u^4\,du = \left[\frac{u^5}{5}\right]_1^5 = \frac{3124}{5}$$

---

## 5. Integración por partes

Es la **regla del producto al revés**. Sirve para productos de funciones de distinto tipo (un polinomio por una exponencial, un logaritmo por una potencia, etc.):

$$\int u\,dv = uv - \int v\,du$$

Los símbolos $u$ y $dv$ son las dos partes en que dividimos el integrando; $du$ y $v$ se obtienen de ellas (derivando $u$ e integrando $dv$). La fórmula cambia una integral por otra que debe ser más sencilla. Para elegir $u$ se sigue el orden **LIATE**:

1. **L**ogarítmica ($\ln x$)
2. **I**nversa trigonométrica ($\arctan x$, $\arcsin x$)
3. **A**lgebraica ($x$, polinomios)
4. **T**rigonométrica ($\operatorname{sen}x$, $\cos x$)
5. **E**xponencial ($e^x$)

La función que aparece primero en la lista se toma como $u$; el resto es $dv$.

**Mini-ejemplo.** Con $u = \ln x$ y $dv = x\,dx$, se tiene $du = \frac{1}{x}\,dx$ y $v = \frac{x^2}{2}$:

$$\int x\ln x\,dx = \frac{x^{2}}{2}\ln x - \int \frac{x}{2}\,dx = \frac{x^{2}}{2}\ln x - \frac{x^{2}}{4} + C$$

**Mini-ejemplo.** $\displaystyle\int x e^x\,dx = xe^x - e^x + C = (x-1)e^x + C$.

---

## 6. Fracciones parciales

Integra **funciones racionales** $P(x)/Q(x)$ (cocientes de polinomios). La idea es descomponer una fracción complicada en una suma de fracciones simples. Requisito: la fracción debe ser propia (grado del numerador menor que el del denominador); si no, primero se divide.

El método: factorizar el denominador y proponer una fracción por cada factor. Los dos casos básicos:

1. **Factor lineal $x-r$:** aporta $\dfrac{A}{x-r}$, que se integra como $A\ln\mid x-r\mid$.
2. **Factor cuadrático irreducible $x^2+bx+c$:** aporta $\dfrac{Ax+B}{x^2+bx+c}$; al completar el cuadrado aparecen un logaritmo y una arcotangente.

**Mini-ejemplo.** $\dfrac{1}{x^{2}-1} = \dfrac{1}{2}\left(\dfrac{1}{x-1} - \dfrac{1}{x+1}\right)$, luego

$$\int \frac{1}{x^{2}-1}\,dx = \frac{1}{2}\ln\left\lvert\frac{x-1}{x+1}\right\rvert + C$$

**Mini-ejemplo.** $\displaystyle\int \frac{1}{x^2+4}\,dx = \frac{1}{2}\arctan\frac{x}{2} + C$.

---

## 7. Sustitución trigonométrica

Se usa cuando el integrando contiene una **raíz de expresión cuadrática**. La sustitución se elige según el radical y aprovecha una identidad pitagórica para eliminar la raíz. $a$ es una constante positiva:

| Radical | Sustitución | Identidad que usa |
|---|---|---|
| $\sqrt{a^{2}-x^{2}}$ | $x = a\operatorname{sen}\theta$ | $1-\operatorname{sen}^2\theta = \cos^2\theta$ |
| $\sqrt{a^{2}+x^{2}}$ | $x = a\tan\theta$ | $1+\tan^2\theta = \sec^2\theta$ |
| $\sqrt{x^{2}-a^{2}}$ | $x = a\sec\theta$ | $\sec^2\theta-1 = \tan^2\theta$ |

Además de sustituir $x$, hay que sustituir $dx$ (por ejemplo, si $x = a\operatorname{sen}\theta$, entonces $dx = a\cos\theta\,d\theta$). Al final se vuelve a la variable $x$ usando un triángulo rectángulo: por ejemplo, $\operatorname{sen}\theta = x/a$ sugiere un triángulo de cateto opuesto $x$ e hipotenusa $a$.

**Mini-ejemplo.** $\displaystyle\int \sqrt{1-x^{2}}\,dx = \frac{1}{2}\left(x\sqrt{1-x^{2}} + \arcsin x\right) + C$.

---

## 8. Aplicaciones e integrales impropias

**Aplicaciones geométricas y físicas.** En todas las fórmulas, $f$ y $g$ son funciones, $a$ y $b$ los límites del intervalo y $[f(x)]^2$ aparece porque el área de un disco de radio $f(x)$ es $\pi$ por el radio al cuadrado.

1. **Área entre curvas:** $\displaystyle A = \int_a^b \big\lvert f(x) - g(x)\big\rvert\,dx$ (si $f \geq g$, basta $f-g$).
2. **Volumen por discos:** $\displaystyle V = \pi\int_a^b \big[f(x)\big]^{2}\,dx$ (giro alrededor del eje $x$).
3. **Volumen por cascarones:** $\displaystyle V = 2\pi\int_a^b x\,f(x)\,dx$ (giro alrededor del eje $y$).
4. **Longitud de arco:** $\displaystyle L = \int_a^b \sqrt{1 + \big[f'(x)\big]^{2}}\,dx$.
5. **Valor promedio:** $\displaystyle \bar f = \frac{1}{b-a}\int_a^b f(x)\,dx$ (la altura del rectángulo de igual área).
6. **Trabajo:** $\displaystyle W = \int_a^b F(x)\,dx$ (fuerza por desplazamiento infinitesimal).

**Integrales impropias.** Una integral es impropia si el intervalo es infinito o si la función se vuelve infinita en algún punto. Se define con un **límite**:

$$\int_a^{\infty} f(x)\,dx = \lim_{t \to \infty} \int_a^t f(x)\,dx$$

Si el límite existe y es finito, la integral **converge**; si no, **diverge**. Para el caso de discontinuidad en un extremo, el límite se toma acercándose a ese extremo por dentro.

Criterio $p$ de referencia ($p$ es el exponente del denominador): $\displaystyle\int_1^{\infty} \frac{1}{x^{p}}\,dx$ converge si $p > 1$ y diverge si $p \leq 1$.

**Mini-ejemplo.** $\displaystyle\int_1^{\infty} \frac{1}{x^{2}}\,dx = \lim_{t\to\infty}\left[-\frac{1}{x}\right]_1^t = \lim_{t\to\infty}\left(1 - \frac{1}{t}\right) = 1$.

**Mini-ejemplo.** $\displaystyle\int_1^{\infty} \frac{1}{x}\,dx = \lim_{t\to\infty}\ln t = \infty$: diverge, aunque $1/x \to 0$. Que el integrando tienda a cero no garantiza convergencia.

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
