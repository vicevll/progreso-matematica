# Ecuaciones diferenciales ordinarias

Área: Cálculo · Nivel: Univ 1–2 · Descripción: Qué es una EDO, cómo leerla, métodos de primer y segundo orden, Laplace y aplicaciones.

## ¿Qué es una ecuación diferencial?

Una **ecuación diferencial** es una ecuación cuya incógnita es una **función**, no un número. En $3x + 5 = 11$ buscamos el número $x$; en una ecuación diferencial buscamos la función completa $y(x)$ que, junto con sus derivadas, cumple la igualdad. Las derivadas aparecen porque describen **razones de cambio**: casi todo lo que evoluciona se entiende mejor por la rapidez con que cambia que por su valor actual.

Una **EDO** (ecuación diferencial ordinaria) involucra una sola variable independiente. Su forma general es:

$$F(x, y, y', y'', \ldots, y^{(n)}) = 0$$

- $x$ es la **variable independiente** (a menudo el tiempo).
- $y = y(x)$ es la **función incógnita**, lo que queremos encontrar.
- $y', y'', \ldots$ son sus derivadas. El símbolo $y'$ se lee "y prima".
- $F$ es la fórmula que combina todo.

Si hay varias variables independientes, como $u(x,t)$, la ecuación se llama **en derivadas parciales** (EDP).

**Ejemplos cotidianos.** Las bacterias se reproducen más rápido mientras más hay: si $P(t)$ es la población, $\dfrac{dP}{dt} = kP$ (la razón de cambio es proporcional a la propia población). Un café se enfría rápido al principio y lento después: $\dfrac{dT}{dt} = -k(T - T_{\text{amb}})$, proporcional a la diferencia con el ambiente. Un circuito con bobina y resistencia cumple $L\dfrac{di}{dt} + Ri = V$, donde $L$ es la inductancia, $R$ la resistencia, $i(t)$ la corriente y $V$ el voltaje.

**Resolver** una EDO es hallar todas las funciones que la satisfacen. La comprobación siempre es sustituir: calcula las derivadas, reemplaza y verifica que la igualdad se cumpla.

## Cómo leer la notación

Cada símbolo tiene un significado preciso:

- $\dfrac{dy}{dx}$ es la **derivada de $y$ respecto de $x$**: la razón de cambio instantánea, el límite de $\dfrac{\Delta y}{\Delta x}$ cuando $\Delta x \to 0$. No es una fracción común, pero se comporta como tal en las ecuaciones separables gracias a la regla de la cadena.
- $y'$ es la forma corta de escribir $\dfrac{dy}{dx}$.
- $y''$ es la **segunda derivada**, la derivada de la derivada. El $2$ indica cuántas veces se deriva, no una potencia.
- $\dot{y}$ es la notación de Newton cuando la variable es el tiempo.
- $y(0) = 3$ es una **condición inicial**, no una multiplicación: dice que en $x = 0$ la función vale $3$.
- $\dfrac{\partial f}{\partial x}$ es la **derivada parcial**, usada cuando hay más de una variable.

Así, $y' + 2y = e^{-x}$ se lee: "buscamos una función cuya razón de cambio, más el doble de su valor, sea $e^{-x}$". Y $y'' + 9y = 0$ dice: "la segunda derivada es el opuesto de nueve veces la función", la firma de una oscilación.

## Orden, linealidad y soluciones

El **orden** de una EDO es el de la derivada más alta que aparece: $y' = 3x^2$ es de primer orden; $y'' + 4y = 0$, de segundo. El orden indica cuántas constantes tendrá la solución general.

Una EDO es **lineal** si se escribe como

$$a_n(x)\,y^{(n)} + \cdots + a_1(x)\,y' + a_0(x)\,y = g(x)$$

donde la incógnita $y$ y sus derivadas aparecen sumadas, a la primera potencia y sin multiplicarse entre sí. Son lineales $y' + 2y = e^{-x}$ y $x^2y'' + y = 0$; no lo son $y' = y^2$ ni $y\,y' = x$ ni $y'' + \text{sen}(y) = 0$. En las ecuaciones lineales, sumas de soluciones vuelven a ser soluciones.

La **solución general** es la familia de todas las soluciones, con constantes arbitrarias: $y = x^2 + C$ para $y' = 2x$. La letra $C$ representa **cualquier número real**; cada valor suyo da una curva distinta de la familia (en este caso, parábolas paralelas). Una EDO de orden $n$ suele tener $n$ constantes: $C_1, C_2, \ldots$

La **solución particular** se obtiene fijando las constantes con **condiciones iniciales** (valores en un mismo punto, como $y(0) = 3$) o **condiciones de frontera** (valores en puntos distintos). Ejemplo: de $y = x^2 + C$ con $y(0) = 3$ resulta $3 = 0 + C$, es decir, $y = x^2 + 3$.

**Mini-ejemplo.** $y'' = 6x$ se integra dos veces: $y' = 3x^2 + C_1$ y $y = x^3 + C_1x + C_2$. Con $y(0) = 1$ y $y'(0) = 2$ queda $y = x^3 + 2x + 1$.

## Variables separables

Una EDO de primer orden es **separable** si se escribe como un producto $y' = f(x)g(y)$. El método deja cada variable de su lado y luego integra:

$$\int \frac{dy}{g(y)} = \int f(x)\,dx$$

Funciona porque, si $H$ es una antiderivada de $\dfrac{1}{g}$, la regla de la cadena da $\dfrac{d}{dx}H(y) = f(x)$; integrar ambos lados produce el resultado. **Cuidado:** al dividir entre $g(y)$ hay que revisar si $g(y) = 0$ tiene soluciones constantes, porque se perderían en la división.

**Mini-ejemplo (crecimiento/decaimiento).** Para $y' = ky$:

$$\frac{dy}{y} = k\,dx \quad \Rightarrow \quad \ln|y| = kx + C \quad \Rightarrow \quad y = Ce^{kx}$$

Con $k > 0$ la función crece; con $k < 0$ decae (radiactividad, enfriamiento). La constante $C$ absorbe el signo y también el valor $C = 0$, que es la solución constante $y = 0$.

**Mini-ejemplo.** Para $y' = xy^2$: $\dfrac{dy}{y^2} = x\,dx$, luego $-\dfrac{1}{y} = \dfrac{x^2}{2} + C$ y $y = -\dfrac{1}{x^2/2 + C}$.

**Mini-ejemplo con condición inicial.** Para $y' = \dfrac{x}{y}$ con $y(0) = 2$: $y\,dy = x\,dx$ da $y^2 = x^2 + C$. La condición da $4 = C$, y como $y(0) = 2 > 0$ se elige la raíz positiva: $y = \sqrt{x^2 + 4}$.

## Ecuaciones lineales de primer orden y factor integrante

La forma estándar es

$$y' + P(x)\,y = Q(x)$$

donde $P(x)$ es el coeficiente de $y$ (cuánto influye la propia función en su cambio) y $Q(x)$ es el **término forzante** (la influencia externa). Si $Q = 0$ la ecuación es **homogénea** y separable.

**¿Qué es un factor integrante?** Es una función $\mu(x) > 0$ que, al multiplicar toda la ecuación, hace que el lado izquierdo sea la derivada de un producto:

$$\mu(x) = e^{\int P(x)\,dx}, \qquad (\mu y)' = \mu Q$$

La idea: queremos $\mu y' + \mu P y = (\mu y)' = \mu y' + \mu' y$, lo que exige $\mu' = \mu P$, una ecuación separable cuya solución es la exponencial anterior. No hace falta constante al integrar $P$.

**Método:** escribe la ecuación en forma estándar, calcula $\mu$, multiplica todo por $\mu$, integra $\mu y = \int \mu Q\,dx + C$ y despeja $y$.

**Mini-ejemplo.** Para $y' + 2y = e^{-x}$: $P = 2$, $\mu = e^{2x}$. Entonces $(e^{2x}y)' = e^{2x}e^{-x} = e^{x}$, así que $e^{2x}y = e^{x} + C$ y

$$y = e^{-x} + Ce^{-2x}$$

**Mini-ejemplo.** Para $y' + \dfrac{y}{x} = x^2$ (con $x > 0$): $P = \dfrac{1}{x}$, $\mu = e^{\ln x} = x$. Entonces $(xy)' = x^3$, de donde $xy = \dfrac{x^4}{4} + C$ y

$$y = \frac{x^3}{4} + \frac{C}{x}$$

## Ecuaciones exactas

Una ecuación escrita como $M(x,y)\,dx + N(x,y)\,dy = 0$ es **exacta** si existe una función $f(x,y)$ tal que $f_x = M$ y $f_y = N$. Entonces la ecuación es $df = 0$ y su solución son las **curvas de nivel** $f(x,y) = C$.

La condición práctica (necesaria y suficiente en dominios simples) es la igualdad de derivadas cruzadas:

$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

**Cómo hallar $f$:** integra $M$ respecto de $x$ (con $y$ como constante) y añade una función desconocida $g(y)$; deriva el resultado respecto de $y$, iguálalo con $N$ y despeja $g'(y)$.

**Mini-ejemplo.** Para $(2xy)\,dx + (x^2)\,dy = 0$: $M_y = 2x = N_x$, exacta. Integrando, $f = x^2y + g(y)$, y al comparar con $N = x^2$ resulta $g'(y) = 0$. La solución es

$$x^2y = C$$

**Mini-ejemplo.** Para $(3x^2 + y)\,dx + (x + 3y^2)\,dy = 0$: $M_y = 1 = N_x$. Se obtiene $f = x^3 + xy + y^3$, así que

$$x^3 + xy + y^3 = C$$

Si la ecuación no es exacta, a veces un factor integrante la vuelve exacta; el factor $\mu$ de las ecuaciones lineales es justamente un caso de esto.

## Segundo orden homogéneo y ecuación característica

La forma con coeficientes constantes es

$$ay'' + by' + cy = 0$$

con $a \neq 0$, $b$ y $c$ números fijos. Se llama **homogénea** porque el lado derecho es cero. Como las derivadas de $e^{rx}$ son múltiplos de ella misma, se prueba $y = e^{rx}$; al sustituir, el factor $e^{rx} \neq 0$ se cancela y queda un polinomio en $r$:

$$ar^2 + br + c = 0$$

Esta es la **ecuación característica**: sus raíces determinan el comportamiento de todas las soluciones. Sus raíces son $r = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, y el discriminante $\Delta = b^2 - 4ac$ distingue tres casos:

- **Raíces reales distintas** $r_1 \neq r_2$: $y = C_1e^{r_1x} + C_2e^{r_2x}$.
- **Raíz doble** $r$: $y = (C_1 + C_2x)e^{rx}$.
- **Complejas** $r = \alpha \pm \beta i$: $y = e^{\alpha x}\left(C_1\cos\beta x + C_2\,\text{sen}\,\beta x\right)$.

En el tercer caso, $e^{\alpha x}$ es la envolvente (crece o decae según $\alpha$) y $\beta$ es la frecuencia de la oscilación. Aquí $C_1$ y $C_2$ son las dos constantes arbitrarias; dos condiciones iniciales las determinan.

**Mini-ejemplo.** Para $y'' - y = 0$: $r^2 - 1 = 0$, raíces $r = \pm 1$, luego

$$y = C_1e^{x} + C_2e^{-x}$$

**Mini-ejemplo.** Para $y'' - 4y' + 4y = 0$: $(r-2)^2 = 0$, raíz doble $r = 2$:

$$y = (C_1 + C_2x)e^{2x}$$

**Mini-ejemplo.** Para $y'' + 4y = 0$: $r = \pm 2i$, oscilación pura:

$$y = C_1\cos 2x + C_2\,\text{sen}\,2x$$

**Mini-ejemplo con condiciones.** Para $y'' + 9y = 0$ con $y(0) = 1$, $y'(0) = 0$: $y = C_1\cos 3x + C_2\,\text{sen}\,3x$; de $y(0) = 1$ sale $C_1 = 1$ y de $y'(0) = 3C_2 = 0$ sale $C_2 = 0$. Resultado: $y = \cos 3x$.

## Segundo orden no homogéneo

Para $ay'' + by' + cy = g(x)$, la función $g(x)$ es el **término forzante**. La solución general es la suma de la homogénea y una particular:

$$y = y_h + y_p$$

La particular se busca con **coeficientes indeterminados**: se propone una $y_p$ con la misma forma que $g(x)$ y se ajustan las letras.

1. Resuelve la homogénea y escribe $y_h$ con sus constantes.
2. Propón $y_p$: polinomio de igual grado si $g$ es polinomio; $Ae^{kx}$ si $g = e^{kx}$; $A\cos\omega x + B\,\text{sen}\,\omega x$ si $g$ es seno o coseno (siempre ambos).
3. Sustituye y ajusta los coeficientes.
4. Escribe $y = y_h + y_p$.

**Resonancia:** si la propuesta ya aparece en $y_h$, multiplícala por $x$ (por $x^2$ si la raíz es doble).

**Mini-ejemplo.** Para $y'' - y = e^{2x}$, la homogénea da $y_h = C_1e^{x} + C_2e^{-x}$. Se propone $y_p = Ae^{2x}$:

$$4Ae^{2x} - Ae^{2x} = e^{2x} \quad \Rightarrow \quad 3A = 1 \quad \Rightarrow \quad A = \frac{1}{3}$$

Por lo tanto:

$$y = C_1e^{x} + C_2e^{-x} + \frac{1}{3}e^{2x}$$

**Mini-ejemplo (resonancia).** Para $y'' - y = e^{x}$, la propuesta $Ae^{x}$ ya está en $y_h$; se usa $y_p = Axe^{x}$ y resulta $A = \dfrac{1}{2}$:

$$y = C_1e^{x} + C_2e^{-x} + \frac{x}{2}e^{x}$$

Cuando la forma de $g$ no es simple se usa **variación de parámetros**.

## Transformada de Laplace

La **transformada de Laplace** convierte una función del tiempo $f(t)$ en una función de una nueva variable $s$ mediante una integral:

$$\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st}f(t)\,dt$$

El símbolo $\mathcal{L}$ es el operador; $F(s)$ es el resultado; $e^{-st}$ es un factor que hace converger la integral. Su gran ventaja: **convierte derivadas en multiplicaciones por $s$** e incorpora las condiciones iniciales. Una EDO se vuelve álgebra; al final se antitransforma con $\mathcal{L}^{-1}$.

Reglas de derivadas:

$$\mathcal{L}\{y'\} = sY(s) - y(0), \qquad \mathcal{L}\{y''\} = s^2Y(s) - sy(0) - y'(0)$$

Transformadas básicas:

$$\mathcal{L}\{1\} = \frac{1}{s}, \quad \mathcal{L}\{t\} = \frac{1}{s^2}, \quad \mathcal{L}\{e^{at}\} = \frac{1}{s-a}, \quad \mathcal{L}\{\text{sen}\,at\} = \frac{a}{s^2+a^2}, \quad \mathcal{L}\{\cos at\} = \frac{s}{s^2+a^2}$$

Transformadas notables: $\mathcal{L}\{t^n\} = \dfrac{n!}{s^{n+1}}$ y la traslación $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$.

**Método:** transforma cada término, sustituye los valores iniciales, despeja $Y(s)$, descompón en fracciones parciales y antitransforma con la tabla.

**Mini-ejemplo.** Resuelve $y' + y = 1$ con $y(0) = 0$:

$$sY + Y = \frac{1}{s} \quad \Rightarrow \quad Y = \frac{1}{s(s+1)} = \frac{1}{s} - \frac{1}{s+1}$$

Antitransformando:

$$y = 1 - e^{-t}$$

**Mini-ejemplo.** Para $y' + 2y = 0$ con $y(0) = 3$: $sY - 3 + 2Y = 0$, luego $Y = \dfrac{3}{s+2}$ y $y = 3e^{-2t}$.

## Aplicaciones

- **Poblaciones (Malthus).** $P' = kP$ da $P(t) = P_0e^{kt}$, con $P_0 = P(0)$ la población inicial y $k$ la tasa instantánea. Si $k > 0$ crece; si $k < 0$ decae. Con recursos limitados se usa el modelo logístico $P' = kP\left(1 - \dfrac{P}{K}\right)$, cuya solución se estabiliza en la capacidad de carga $K$.
- **Enfriamiento de Newton.** $T' = -k(T - T_{\text{amb}})$ da $T(t) = T_{\text{amb}} + (T_0 - T_{\text{amb}})e^{-kt}$: la temperatura tiende a la del ambiente.
- **Circuito RL.** $L\dfrac{di}{dt} + Ri = V$ es lineal de primer orden; con $i(0) = 0$ resulta $i(t) = \dfrac{V}{R}\left(1 - e^{-Rt/L}\right)$, que tiende a la corriente de régimen $V/R$.
- **Desintegración radiactiva.** $M' = -kM$ da $M(t) = M_0e^{-kt}$; la vida media se obtiene de $e^{-kT} = \dfrac{1}{2}$.

**Ejemplo resuelto.** Un café a $90°$C en una sala a $20°$C está a $60°$C tras 10 minutos. Con $T = 20 + 70e^{-kt}$: $40 = 70e^{-10k}$, luego $k = \dfrac{\ln(7/4)}{10} \approx 0{,}056$ por minuto. Llegará a $30°$C cuando $e^{-kt} = \dfrac{1}{7}$, es decir, en $t = \dfrac{\ln 7}{k} \approx 34{,}8$ minutos.

**Ejemplo resuelto.** En un circuito con $L = 1$, $R = 2$, $V = 10$ e $i(0) = 0$: $i' + 2i = 10$; factor integrante $e^{2t}$; $i = 5 + Ce^{-2t}$; la condición da $C = -5$:

$$i(t) = 5\left(1 - e^{-2t}\right)$$

## Ejercicios (20)

### Nivel 1

1. Resuelve $\dfrac{dy}{dx} = 3x^2$.
2. Resuelve $\dfrac{dy}{dx} = y$.
3. Resuelve $\dfrac{dy}{dx} = \dfrac{x}{y}$.
4. Indica el orden y si es lineal: $y'' + 2y' + y = 0$.
5. Resuelve $\dfrac{dy}{dx} = \dfrac{y}{x}$.

### Nivel 2

6. Resuelve $\dfrac{dy}{dx} = xy$.
7. Resuelve $y' + y = 1$.
8. Resuelve $y' + 2y = e^{-x}$.
9. Resuelve $y' + y = e^{x}$.
10. Resuelve $\dfrac{dy}{dx} = y\cos x$.

### Nivel 3

11. Resuelve $(2xy)\,dx + (x^2)\,dy = 0$.
12. Resuelve $(2x + y)\,dx + (x + 2y)\,dy = 0$.
13. Resuelve $y'' - 5y' + 6y = 0$.
14. Resuelve $y'' + 4y = 0$.
15. Resuelve $y'' - 4y' + 4y = 0$.

### Nivel 4

16. Resuelve $y'' - y = e^{2x}$.
17. Resuelve $y'' + y = 2$.
18. Calcula $\mathcal{L}\{e^{3t}\}$.
19. Calcula $\mathcal{L}\{\text{sen}\,2t\}$.
20. Resuelve $y' + y = 1$ con $y(0) = 0$ por Laplace.

## Respuestas

1. $y = x^3 + C$.
2. $y = Ce^{x}$.
3. $y^2 = x^2 + C$.
4. Segundo orden y lineal.
5. $y = Cx$.
6. $y = Ce^{x^2/2}$.
7. $y = 1 + Ce^{-x}$.
8. $y = e^{-x} + Ce^{-2x}$.
9. $y = \dfrac{e^{x}}{2} + Ce^{-x}$.
10. $y = Ce^{\text{sen}\,x}$.
11. $x^2y = C$.
12. $x^2 + xy + y^2 = C$.
13. $y = C_1e^{2x} + C_2e^{3x}$.
14. $y = C_1\cos 2x + C_2\,\text{sen}\,2x$.
15. $y = (C_1 + C_2x)e^{2x}$.
16. $y = C_1e^{x} + C_2e^{-x} + \dfrac{1}{3}e^{2x}$.
17. $y = C_1\cos x + C_2\,\text{sen}\,x + 2$.
18. $\mathcal{L}\{e^{3t}\} = \dfrac{1}{s-3}$.
19. $\mathcal{L}\{\text{sen}\,2t\} = \dfrac{2}{s^2+4}$.
20. $y = 1 - e^{-t}$.
