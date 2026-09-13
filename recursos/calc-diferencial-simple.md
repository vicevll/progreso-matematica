# Cálculo diferencial

**Guía simple · Cálculo · Universidad 1**
*Derivadas, reglas, optimización y razones relacionadas.*

Esta guía explica desde cero, y sin dar por conocida la notación, qué es la derivada, cómo se lee cada símbolo y cómo se aplican las reglas. Cada idea viene con su traducción a palabras simples y un mini-ejemplo.

---

## 1. La derivada: definición e idea intuitiva

Imagina un auto que recorre $240$ km en $3$ h. Su velocidad promedio fue $240/3 = 80$ km/h, pero el velocímetro marca la velocidad de cada instante exacto. La derivada es ese velocímetro, pero para cualquier función.

**Qué es una función y qué significa $f(x)$.** Una función es una regla que asigna a cada entrada un único resultado. La escritura $f(x)$ se lee "efe de equis": $f$ es el nombre de la regla, $x$ es la entrada (variable independiente) y $f(x)$ es la salida (variable dependiente). Por ejemplo, con $f(x)=x^2$: si entra $3$, sale $9$.

**Qué es $h$ y qué significa $h\to 0$.** Comparamos dos entradas cercanas: $x$ y $x+h$. La letra $h$ es el incremento, un número pequeño que sumamos a la entrada. El símbolo $h\to 0$ se lee "h tiende a cero": hacer $h$ cada vez más chico, tan chico como se quiera, sin llegar nunca a valer $0$ (porque dividir entre cero no se puede). El símbolo $\lim$ se lee "límite" y representa el valor al que se acerca la expresión en ese proceso.

La derivada es el límite del cociente incremental:

$$f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$$

Se lee: "efe prima de equis es el límite, cuando $h$ tiende a cero, de efe de equis más $h$, menos efe de equis, todo dividido por $h$". La prima (el apóstrofo) en $f'(x)$ indica "derivada", y el resultado es una nueva función que entrega la pendiente o razón de cambio instantánea en cada $x$.

**Mini-ejemplo.** Para $f(x)=x^2$:

$$f'(x)=\lim_{h\to 0}\frac{(x+h)^2-x^2}{h}=\lim_{h\to 0}\frac{2xh+h^2}{h}=\lim_{h\to 0}(2x+h)=2x$$

**Tres lecturas de la derivada.** Geométrica: $f'(a)$ es la pendiente de la recta tangente a la curva en $x=a$. Física: si $s(t)$ es la posición en el tiempo $t$, entonces $s'(t)$ es la velocidad instantánea. Económica: si $C(x)$ es el costo de producir $x$ unidades, $C'(x)$ es el costo marginal (lo que cuesta producir una unidad más).

---

## 2. La notación y cómo leerla

- $f'(x)$, notación de Lagrange: se lee "efe prima de equis". Es la derivada como función. Evaluada en un número $a$, $f'(a)$ es un número concreto: la pendiente en ese punto.
- $\dfrac{dy}{dx}$, notación de Leibniz: se lee "derivada de $y$ respecto de $x$" y se usa cuando $y=f(x)$. No es una fracción literal, pero se comporta como tal en la regla de la cadena y en razones relacionadas.
- $\dot{y}$, notación de Newton: el punto sobre la letra se lee "i griega punto" y significa derivada respecto del tiempo. En física: la posición cumple $\dot{s}=v$ y la velocidad cumple $\ddot{s}=a$.
- $\dfrac{d}{dx}$, operador derivada: se lee "de sobre de equis" y ordena derivar lo que sigue. Ejemplo: $\dfrac{d}{dx}(x^3)=3x^2$.
- $\Delta x$ y $\Delta y$: la letra griega delta (mayúscula) significa "cambio". $\Delta x$ es un cambio en la entrada y $\Delta y$ el cambio correspondiente en la salida. Por eso la razón de cambio promedio es $\dfrac{\Delta y}{\Delta x}$ y la instantánea es $\dfrac{dy}{dx}$.
- $f''(x)$: "efe biprima", la derivada segunda (se deriva dos veces).

Una advertencia: $\dfrac{dy}{dx}$ no significa $d$ por $y$ dividido por $d$ por $x$; la $d$ es parte del símbolo de derivada. Y no confundas $f(a)$ (altura de la curva) con $f'(a)$ (pendiente).

---

## 3. Reglas básicas de derivación

**Constante:** $(c)'=0$. Aquí $c$ es un número fijo. Una recta horizontal no sube ni baja, así que su pendiente es $0$.

**Potencia:** $(x^n)'=n\,x^{n-1}$. El exponente $n$ baja multiplicando y el exponente disminuye en $1$; vale para negativos y fracciones. Mini-ejemplos: $(x^5)'=5x^4$; $(x^{-2})'=-2x^{-3}$; $(\sqrt{x})'=(x^{1/2})'=\dfrac{1}{2\sqrt{x}}$.

**Múltiplo constante:** $(c\,f)'=c\,f'$. Un factor numérico fijo solo escala el resultado. Ejemplo: $(3x^4)'=12x^3$.

**Suma y resta:** $(f\pm g)'=f'\pm g'$. Se deriva término a término. Ejemplo: $(5x^3-2x+7)'=15x^2-2$.

**Producto:** $(f\,g)'=f'\,g+f\,g'$. Se lee "primera por derivada de la segunda, más segunda por derivada de la primera". Ejemplo: $(x^2e^x)'=2xe^x+x^2e^x=e^x(x^2+2x)$.

**Cociente:** $\left(\dfrac{f}{g}\right)'=\dfrac{f'\,g-f\,g'}{g^2}$. El orden importa: derivada de arriba por abajo, menos arriba por derivada de abajo, todo sobre abajo al cuadrado. Ejemplo: $\left(\dfrac{x}{x+1}\right)'=\dfrac{(1)(x+1)-x(1)}{(x+1)^2}=\dfrac{1}{(x+1)^2}$.

| Regla | Fórmula |
|---|---|
| Constante | $(c)'=0$ |
| Potencia | $(x^n)'=nx^{n-1}$ |
| Múltiplo constante | $(cf)'=cf'$ |
| Suma | $(f\pm g)'=f'\pm g'$ |
| Producto | $(fg)'=f'g+fg'$ |
| Cociente | $\left(\dfrac{f}{g}\right)'=\dfrac{f'g-fg'}{g^2}$ |

**Derivadas notables.** El número $e$ es una constante especial, $e\approx 2.71828$; $\ln x$ es el logaritmo natural (en base $e$); $\sec x=\dfrac{1}{\cos x}$ es la secante.

| Función | Derivada |
|---|---|
| $e^x$ | $e^x$ |
| $a^x$ | $a^x\ln a$ |
| $\ln x$ | $\dfrac{1}{x}$ |
| $\text{sen}\,x$ | $\cos x$ |
| $\cos x$ | $-\text{sen}\,x$ |
| $\tan x$ | $\sec^2 x$ |

---

## 4. Regla de la cadena

Cuando una función está compuesta (una regla dentro de otra), $f(g(x))$, se deriva la externa y se multiplica por la derivada de la interna:

$$(f(g(x)))'=f'(g(x))\cdot g'(x)$$

Aquí $f'(g(x))$ significa "derivar $f$ y evaluarla en $g(x)$". La lógica: si la interna cambia $3$ veces más rápido que $x$ y la externa cambia $5$ veces más rápido que la interna, la externa cambia $15$ veces más rápido que $x$: las razones se multiplican. En notación de Leibniz, con $y=f(u)$ y $u=g(x)$: $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$.

**Mini-ejemplos.** $(e^{3x})'=3e^{3x}$; $(\text{sen}(x^2))'=2x\cos(x^2)$; $(\ln(5x+1))'=\dfrac{5}{5x+1}$; $((3x^2+1)^5)'=30x(3x^2+1)^4$.

Olvidar multiplicar por la derivada interna es el error más frecuente de todo el cálculo diferencial.

---

## 5. Derivadas de orden superior y concavidad

La derivada segunda $f''$ es la derivada de $f'$ y mide cómo cambia la pendiente. Se calcula derivando dos veces:

$$f''(x)=\frac{d}{dx}f'(x)$$

**Interpretación física.** Si $s(t)$ es la posición, $s'(t)$ es la velocidad y $s''(t)$ es la aceleración.

**Signo de $f''$.**

1. $f''>0$: la curva es cóncava hacia arriba (se abre como una taza).
2. $f''<0$: la curva es cóncava hacia abajo (se abre como una colina).
3. Si $f''$ cambia de signo, hay un punto de inflexión (cambia la concavidad).

**Mini-ejemplo.** $f(x)=x^3-3x^2$: $f'(x)=3x^2-6x$, $f''(x)=6x-6$ y $f'''(x)=6$. La inflexión está en $x=1$, donde $f''$ pasa de negativa a positiva.

---

## 6. Recta tangente y aproximación lineal

La recta tangente a la curva en $x=a$ pasa por el punto $(a,f(a))$ y tiene pendiente $f'(a)$:

$$y-f(a)=f'(a)(x-a)$$

Cada símbolo: $a$ es la coordenada horizontal del punto de tangencia, $f(a)$ su altura, $f'(a)$ la pendiente, y $(x,y)$ un punto cualquiera de la recta.

Cerca del punto de tangencia, la curva se confunde con su recta (**aproximación lineal**):

$$f(x)\approx f(a)+f'(a)(x-a)$$

**Mini-ejemplo.** Aproximar $\sqrt{9.1}$ con $f(x)=\sqrt{x}$ en $a=9$: $f(9)=3$ y $f'(9)=\dfrac{1}{6}$, entonces

$$\sqrt{9.1}\approx 3+\frac{0.1}{6}\approx 3.0167$$

El valor real es $3.01662\ldots$: la estimación es excelente porque $9.1$ está muy cerca de $9$.

---

## 7. Extremos: máximos y mínimos

Los **puntos críticos** son los valores de $x$ donde $f'(x)=0$ o donde $f'$ no existe; los extremos locales ocurren en puntos críticos (aunque no todo punto crítico es extremo).

1. **Criterio de la primera derivada:** si $f'$ pasa de $+$ a $-$ en el punto, hay máximo; si pasa de $-$ a $+$, hay mínimo.
2. **Criterio de la segunda derivada:** si $f'(c)=0$ y $f''(c)<0$, hay máximo; si $f''(c)>0$, hay mínimo; si $f''(c)=0$, el criterio no decide.

En un intervalo cerrado también se evalúa en los extremos del intervalo; el mayor valor es el máximo absoluto y el menor, el mínimo absoluto.

**Mini-ejemplo.** $f(x)=x^3-3x$: $f'(x)=3x^2-3=0\Rightarrow x=\pm1$. Como $f''(-1)=-6<0$, hay máximo en $(-1,2)$; como $f''(1)=6>0$, hay mínimo en $(1,-2)$.

---

## 8. Teorema del valor medio y regla de L'Hôpital

**Teorema del valor medio.** Si $f$ es continua en $[a,b]$ y derivable en $(a,b)$, existe $c\in(a,b)$ tal que

$$f'(c)=\frac{f(b)-f(a)}{b-a}$$

es decir: en algún punto intermedio la pendiente instantánea iguala a la pendiente promedio. La notación $[a,b]$ es el intervalo cerrado (incluye los extremos) y $(a,b)$ el abierto (no los incluye).

**Regla de L'Hôpital.** Si $\lim\dfrac{f}{g}$ es $\dfrac{0}{0}$ o $\dfrac{\infty}{\infty}$,

$$\lim_{x\to c}\frac{f(x)}{g(x)}=\lim_{x\to c}\frac{f'(x)}{g'(x)}$$

siempre que el segundo límite exista. Hay que verificar la indeterminación antes de aplicarla, y a veces se aplica más de una vez.

**Mini-ejemplos.** Para $f(x)=x^2$ en $[0,2]$: $2c=2\Rightarrow c=1$. Y $\displaystyle\lim_{x\to0}\frac{e^x-1}{x}=\lim_{x\to0}\frac{e^x}{1}=1$.

---

## 9. Razones relacionadas

Cuando dos cantidades dependen del tiempo, sus derivadas se vinculan mediante la regla de la cadena. La notación $\dfrac{dV}{dt}$ significa "rapidez con que cambia $V$ respecto del tiempo"; $\dfrac{dr}{dt}$ es la rapidez del radio.

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
