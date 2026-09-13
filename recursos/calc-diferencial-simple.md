# Cálculo diferencial

**Guía simple · Cálculo · Universidad 1**
*Derivadas, reglas, optimización y razones relacionadas.*

---

## 1. Definición de la derivada

La derivada mide **cómo cambia una cantidad respecto a otra**: la velocidad es la derivada de la posición, el costo marginal es la derivada del costo y la pendiente de la recta tangente es la derivada de la función.

$$f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$$

Notaciones habituales: $f'(x)$, $\dfrac{dy}{dx}$ y $\dot{y}$ (en física, cuando la variable es el tiempo).

**Mini-ejemplo.** Para $f(x)=x^2$:

$$f'(x)=\lim_{h\to 0}\frac{(x+h)^2-x^2}{h}=\lim_{h\to 0}\frac{2xh+h^2}{h}=\lim_{h\to 0}(2x+h)=2x$$

---

## 2. Reglas básicas de derivación

| Regla | Fórmula |
|---|---|
| Constante | $(c)'=0$ |
| Potencia | $(x^n)'=nx^{n-1}$ |
| Múltiplo constante | $(cf)'=cf'$ |
| Suma | $(f\pm g)'=f'\pm g'$ |
| Producto | $(fg)'=f'g+fg'$ |
| Cociente | $\left(\dfrac{f}{g}\right)'=\dfrac{f'g-fg'}{g^2}$ |

Las derivadas notables que conviene memorizar:

| Función | Derivada |
|---|---|
| $e^x$ | $e^x$ |
| $\ln x$ | $\dfrac{1}{x}$ |
| $\text{sen}\,x$ | $\cos x$ |
| $\cos x$ | $-\text{sen}\,x$ |
| $\tan x$ | $\sec^2 x$ |

**Mini-ejemplos.** $(3x^4)'=12x^3$; $(x^2e^x)'=2xe^x+x^2e^x=e^x(x^2+2x)$; $\left(\dfrac{x}{x+1}\right)'=\dfrac{1}{(x+1)^2}$.

---

## 3. Regla de la cadena

Para funciones compuestas, se deriva la función externa y se multiplica por la derivada de la interna:

$$(f(g(x)))'=f'(g(x))\cdot g'(x)$$

Es la regla más usada y la que más se olvida.

**Mini-ejemplos.** $(e^{3x})'=3e^{3x}$; $(\text{sen}(x^2))'=2x\cos(x^2)$; $(\ln(5x+1))'=\dfrac{5}{5x+1}$.

---

## 4. Derivadas de orden superior y concavidad

La segunda derivada $f''$ es la derivada de $f'$ y mide la concavidad. Si $s(t)$ es la posición, $s'(t)$ es la velocidad y $s''(t)$ es la aceleración.

$$f''(x)=\frac{d}{dx}f'(x)$$

Interpretación del signo de $f''$:

1. $f''>0$: la curva es cóncava hacia arriba.
2. $f''<0$: la curva es cóncava hacia abajo.
3. Si $f''$ cambia de signo, hay un punto de inflexión.

**Mini-ejemplo.** $f(x)=x^3-3x^2$: $f'(x)=3x^2-6x$, $f''(x)=6x-6$ y $f'''(x)=6$. La inflexión está en $x=1$.

---

## 5. Recta tangente y aproximación lineal

La recta tangente a la curva en $x=a$ usa la derivada como pendiente:

$$y-f(a)=f'(a)(x-a)$$

Cerca del punto de tangencia, la curva se reemplaza por esa recta (**aproximación lineal**):

$$f(x)\approx f(a)+f'(a)(x-a)$$

**Mini-ejemplo.** Aproximar $\sqrt{9.1}$ con $f(x)=\sqrt{x}$ en $a=9$: $f(9)=3$ y $f'(9)=\dfrac{1}{6}$, entonces

$$\sqrt{9.1}\approx 3+\frac{0.1}{6}\approx 3.0167$$

El valor real es $3.01662\ldots$

---

## 6. Extremos: máximos y mínimos

Los **puntos críticos** son donde $f'(x)=0$ o donde $f'$ no existe; allí ocurren los extremos locales.

1. **Criterio de la primera derivada:** si $f'$ pasa de $+$ a $-$, hay máximo; si pasa de $-$ a $+$, hay mínimo.
2. **Criterio de la segunda derivada:** si $f'(c)=0$ y $f''(c)<0$, hay máximo; si $f''(c)>0$, hay mínimo; si $f''(c)=0$, no decide.

En un intervalo cerrado también se evalúa en los extremos del intervalo; el mayor valor es el máximo absoluto.

**Mini-ejemplo.** $f(x)=x^3-3x$: $f'(x)=3x^2-3=0\Rightarrow x=\pm1$. Como $f''(-1)=-6<0$, hay máximo en $(-1,2)$; como $f''(1)=6>0$, hay mínimo en $(1,-2)$.

---

## 7. Teorema del valor medio y regla de L'Hôpital

**Teorema del valor medio.** Si $f$ es continua en $[a,b]$ y derivable en $(a,b)$, existe $c\in(a,b)$ tal que

$$f'(c)=\frac{f(b)-f(a)}{b-a}$$

es decir: en algún punto la pendiente instantánea iguala la pendiente promedio.

**Regla de L'Hôpital.** Si $\lim\dfrac{f}{g}$ es $\dfrac{0}{0}$ o $\dfrac{\infty}{\infty}$,

$$\lim_{x\to c}\frac{f(x)}{g(x)}=\lim_{x\to c}\frac{f'(x)}{g'(x)}$$

siempre que el segundo límite exista.

**Mini-ejemplos.** Para $f(x)=x^2$ en $[0,2]$: $2c=2\Rightarrow c=1$. Y $\displaystyle\lim_{x\to0}\frac{e^x-1}{x}=\lim_{x\to0}\frac{e^x}{1}=1$.

---

## 8. Razones relacionadas

Cuando dos cantidades dependen del tiempo, sus derivadas se vinculan mediante la regla de la cadena.

**Mini-ejemplo.** Un globo esférico se infla a $100$ cm$^3$/s. Como $V=\dfrac{4}{3}\pi r^3$,

$$\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}\;\Rightarrow\;\frac{dr}{dt}=\frac{100}{4\pi r^2}$$

Cuando $r=5$: $\dfrac{dr}{dt}=\dfrac{1}{\pi}\approx 0.318$ cm/s.

---

## Ejercicios (20)

### Nivel 1 — Reglas básicas

1. Deriva $f(x)=4x^3-5x^2+7x-2$.
2. Deriva $g(x)=\dfrac{3}{x^2}$.
3. Deriva $h(x)=x^2e^x$.
4. Deriva $k(x)=\dfrac{x+1}{x-1}$.
5. Deriva $m(x)=5\,\text{sen}\,x-2\cos x$.

### Nivel 2 — Regla de la cadena

6. Deriva $f(x)=(3x^2+1)^5$.
7. Deriva $g(x)=e^{4x}$.
8. Deriva $h(x)=\ln(2x^3+1)$.
9. Deriva $k(x)=\text{sen}(5x)$.
10. Deriva $m(x)=\sqrt{x^2+9}$.

### Nivel 3 — Tangentes, extremos y optimización

11. Halla la recta tangente a $y=x^3-3x$ en $x=2$.
12. Halla los extremos de $f(x)=x^3-6x^2+9x$.
13. Maximiza el área de un rectángulo de perímetro $40$.
14. Verifica el teorema del valor medio para $f(x)=x^2$ en $[0,2]$ hallando $c$.
15. Calcula $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}$.

### Nivel 4 — Orden superior, concavidad y razones relacionadas

16. Halla $f''(x)$ para $f(x)=x^4-2x^3$.
17. Halla el punto de inflexión de $f(x)=x^3-3x^2$.
18. Un globo esférico se infla a $100$ cm$^3$/s. Halla $\dfrac{dr}{dt}$ cuando $r=5$ cm.
19. Un cubo crece con arista a razón de $2$ cm/s. Halla la rapidez del volumen cuando la arista mide $3$ cm.
20. Un círculo se expande con $\dfrac{dr}{dt}=0.5$ cm/s. Halla la rapidez del área cuando $r=10$ cm.

---

## Respuestas

1. $f'(x)=12x^2-10x+7$
2. $g'(x)=-\dfrac{6}{x^3}$
3. $h'(x)=e^x(x^2+2x)$
4. $k'(x)=-\dfrac{2}{(x-1)^2}$
5. $m'(x)=5\cos x+2\,\text{sen}\,x$
6. $f'(x)=30x(3x^2+1)^4$
7. $g'(x)=4e^{4x}$
8. $h'(x)=\dfrac{6x^2}{2x^3+1}$
9. $k'(x)=5\cos(5x)$
10. $m'(x)=\dfrac{x}{\sqrt{x^2+9}}$
11. $y=9x-16$
12. Máximo en $(1,4)$; mínimo en $(3,0)$
13. $100$ (cuadrado de lado $10$)
14. $c=1$
15. $\dfrac{1}{2}$
16. $f''(x)=12x^2-12x$
17. $(1,-2)$
18. $\dfrac{dr}{dt}=\dfrac{1}{\pi}\approx0.318$ cm/s
19. $54$ cm$^3$/s
20. $10\pi\approx31.42$ cm$^2$/s
