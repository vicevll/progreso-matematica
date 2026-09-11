window.CURSOS = window.CURSOS || {};
window.CURSOS["calculo"] = {
  "limites": String.raw`
## ¿Qué es un límite?
El límite describe **a qué valor se acerca** una función cuando la variable se aproxima a un punto, sin importar si la función está definida en ese punto.

$$\lim_{x \to c} f(x) = L$$

significa que $f(x)$ se puede hacer tan cercano a $L$ como se quiera, tomando $x$ suficientemente cerca de $c$. La función puede no estar definida en $c$: el límite describe el comportamiento alrededor, no en el punto.

**Ejemplo intuitivo.** $f(x) = \dfrac{x^2 - 1}{x - 1}$ no está definida en $x = 1$, pero para $x \neq 1$ se simplifica a $x + 1$, que se acerca a $2$. Entonces $\lim_{x\to 1} f(x) = 2$.

El límite es el concepto que sostiene todo el cálculo: la derivada y la integral se definen como límites.

## Definición formal épsilon-delta
$$\lim_{x \to c} f(x) = L \iff \forall \varepsilon > 0 \; \exists \delta > 0 : 0 < |x - c| < \delta \Rightarrow |f(x) - L| < \varepsilon$$

En palabras: para cualquier margen $\varepsilon$ que exijas alrededor de $L$, existe un margen $\delta$ alrededor de $c$ donde todos los valores de $f$ caen dentro. El $\varepsilon$ es el reto; el $\delta$ es la respuesta.

**Ejemplo.** Para demostrar $\lim_{x\to 3}(2x - 1) = 5$: dado $\varepsilon$, elige $\delta = \varepsilon/2$; si $|x - 3| < \delta$ entonces $|2x - 1 - 5| = 2|x - 3| < 2\delta = \varepsilon$.

## Límites laterales y existencia
El límite por izquierda ($x \to c^-$) usa valores menores que $c$; el límite por derecha ($x \to c^+$), valores mayores.

**Teorema clave:** $\lim_{x\to c} f(x)$ existe si y solo si ambos límites laterales existen y **coinciden**.

Es la herramienta para funciones por partes y para detectar saltos. Ejemplo: $f(x) = |x|/x$ tiene límite $-1$ por izquierda y $+1$ por derecha en $0$: el límite no existe.

## Propiedades y álgebra de límites
Si $\lim f = L$ y $\lim g = M$:
$$\lim (f \pm g) = L \pm M, \qquad \lim (f \cdot g) = L \cdot M, \qquad \lim \frac{f}{g} = \frac{L}{M} \;(M \neq 0)$$
$$\lim [f(x)]^n = L^n, \qquad \lim \sqrt[n]{f(x)} = \sqrt[n]{L}$$

También: $\lim c = c$, $\lim x = c$, y el límite de una función continua en $c$ es $f(c)$.

**Estrategia inicial:** casi siempre se intenta **sustitución directa**. Solo si aparece una indeterminación se pasa a técnicas.

## Indeterminaciones y técnicas
Las formas indeterminadas son $\frac{0}{0}$, $\frac{\infty}{\infty}$, $0 \cdot \infty$, $\infty - \infty$, $1^\infty$, $0^0$, $\infty^0$. Cada una exige una técnica:

1. **Factorización:** para $\frac{0}{0}$ con polinomios. $\lim_{x\to 2}\frac{x^2-4}{x-2} = \lim (x+2) = 4$.
2. **Racionalización:** para raíces. Multiplica por el conjugado.
3. **Común denominador:** para $\infty - \infty$.
4. **División por la potencia dominante:** para $\frac{\infty}{\infty}$.
5. **Límites notables:** $\lim_{x\to 0}\frac{\text{sen}\,x}{x} = 1$, $\lim_{x\to 0}\frac{1 - \cos x}{x} = 0$.
6. **L'Hôpital:** si hay $\frac{0}{0}$ o $\frac{\infty}{\infty}$, deriva numerador y denominador.

**Ejemplo con raíz.** $\lim_{x\to 0}\dfrac{\sqrt{x+1} - 1}{x} = \lim \dfrac{x}{x(\sqrt{x+1}+1)} = \dfrac{1}{2}$.

## Límites al infinito
Describen el comportamiento a largo plazo; definen las **asíntotas horizontales**.

- En un cociente de polinomios manda el grado mayor: $\lim_{x\to\infty}\dfrac{3x^2 + x}{2x^2 - 5} = \dfrac{3}{2}$.
- Si el grado del numerador es mayor, el límite es $\pm\infty$.
- Si el del denominador es mayor, el límite es $0$.
- Funciones exponenciales dominan a polinomios: $\lim_{x\to\infty}\dfrac{x^n}{e^x} = 0$.

**Asíntotas verticales:** aparecen donde el denominador se anula y el límite es infinito, como en $f(x) = \frac{1}{x-2}$ en $x = 2$.

## Continuidad
$f$ es **continua en $c$** si se cumplen tres condiciones:
1. $f(c)$ existe.
2. $\lim_{x\to c} f(x)$ existe.
3. $\lim_{x\to c} f(x) = f(c)$.

**Tipos de discontinuidad:** evitable (el límite existe pero no coincide con el valor), de salto (laterales distintos), infinita (asíntota vertical).

**Propiedades:** sumas, productos, cocientes y composiciones de continuas son continuas. Polinomios, seno, coseno, exponencial y logaritmo son continuos en su dominio.

**Teorema del valor intermedio:** si $f$ es continua en $[a, b]$ y $k$ está entre $f(a)$ y $f(b)$, existe $c \in (a,b)$ con $f(c) = k$. Es la base del método de bisección.

## El número e como límite
$$e = \lim_{n \to \infty}\left(1 + \frac{1}{n}\right)^n = \lim_{x \to 0}(1 + x)^{1/x} \approx 2.71828$$

Este límite define la base del crecimiento continuo. La forma general:
$$\lim_{n\to\infty}\left(1 + \frac{r}{n}\right)^n = e^r$$

**Ejemplo.** $\lim_{n\to\infty}\left(1 + \frac{0.05}{n}\right)^n = e^{0.05} \approx 1.05127$: el factor de crecimiento continuo al $5\%$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, factorización).** $\lim_{x\to 3}\dfrac{x^2 - 9}{x - 3}$.
- Indeterminación $\frac{0}{0}$; factoriza: $\dfrac{(x-3)(x+3)}{x-3} = x + 3$.
- Límite: $6$.

**Ejemplo 2 (práctica, racionalización).** $\lim_{x\to 4}\dfrac{\sqrt{x} - 2}{x - 4}$.
- Multiplica por el conjugado: $\dfrac{1}{\sqrt{x} + 2}$.
- Límite: $\dfrac{1}{4}$.

**Ejemplo 3 (práctica, infinito).** $\lim_{x\to\infty}\dfrac{5x^3 - 2x}{4x^3 + x^2}$.
- Divide entre $x^3$: $\dfrac{5 - 2/x^2}{4 + 1/x} \to \dfrac{5}{4}$.

**Ejemplo 4 (aplicación, física).** La posición de un móvil es $s(t) = 20t - 5t^2$. Halla la velocidad instantánea en $t = 2$ como límite del cociente incremental.
- $\dfrac{s(2+h) - s(2)}{h} = \dfrac{40 + 20h - 20 - 20h - 5h^2 - 20}{h}$.
- Simplifica: $\dfrac{-5h^2}{h} = -5h \to 0$; espera, el cálculo directo da $s(2) = 20$ y $s(2+h) = 40 + 20h - 5(2+h)^2 = 40 + 20h - 20 - 20h - 5h^2 = 20 - 5h^2$.
- Cociente: $\dfrac{20 - 5h^2 - 20}{h} = -5h$; el límite es $0$. La velocidad en el punto más alto es $0$.

**Ejemplo 5 (aplicación, economía).** El costo de producir $x$ unidades es $C(x) = 0.1x^2 + 5x + 200$. El costo marginal es $\lim_{h\to 0}\frac{C(x+h)-C(x)}{h}$.
- Desarrolla y simplifica: $0.2x + 5$.
- En $x = 100$: costo marginal $25$ por unidad adicional.

**Ejemplo 6 (práctica, continuidad).** Halla $k$ para que $f(x) = \begin{cases} x^2 + 1 & x < 2 \\ kx & x \geq 2 \end{cases}$ sea continua.
- Por izquierda: $4 + 1 = 5$; por derecha: $2k$.
- Iguala: $2k = 5 \Rightarrow k = 2.5$.

## Contextos donde se aplica
- **Física:** velocidad y aceleración instantáneas, valores límite de procesos.
- **Economía:** costo marginal, elasticidad, comportamiento a largo plazo.
- **Ingeniería:** estabilidad de sistemas, resistencias límite, señales.
- **Biología:** crecimiento poblacional a largo plazo, capacidades de carga.
- **Matemática:** es la base de derivadas, integrales y series.

## Errores comunes y cómo evitarlos
- **Sustituir cuando hay indeterminación.** Si aparece $\frac{0}{0}$, sustituir no decide; hay que transformar la expresión.
- **Concluir que el límite no existe porque $f(c)$ no existe.** El límite no depende del valor en el punto.
- **Aplicar L'Hôpital sin indeterminación.** Solo vale para $\frac{0}{0}$ o $\frac{\infty}{\infty}$.
- **Confundir $1^\infty$ con $1$.** $1^\infty$ es indeterminada; puede dar $e$ o divergir.
- **Olvidar comparar laterales.** Un límite existe solo si ambos coinciden.

## Ejercicios propuestos
1. $\lim_{x\to 2}(3x^2 - 4x + 1)$.
2. $\lim_{x\to -1}\dfrac{x^2 - 1}{x + 1}$.
3. $\lim_{x\to 0}\dfrac{\sqrt{4 + x} - 2}{x}$.
4. $\lim_{x\to\infty}\dfrac{2x^2 + 3x}{5x^2 - 1}$.
5. $\lim_{x\to 0}\dfrac{\text{sen}\,3x}{x}$.
6. $\lim_{x\to\infty}\left(1 + \dfrac{1}{x}\right)^{2x}$.
7. Analiza la continuidad de $f(x) = \dfrac{x-1}{x^2 - 1}$.
8. Demuestra con épsilon-delta: $\lim_{x\to 1}(3x) = 3$.

**Respuestas:** 1) $5$. 2) $-2$. 3) $1/4$. 4) $2/5$. 5) $3$. 6) $e^2$. 7) Discontinua evitable en $x = 1$ (límite $1/2$); infinita en $x = -1$. 8) Toma $\delta = \varepsilon/3$.

## Resumen
- El límite describe la aproximación, no el valor en el punto; los laterales deben coincidir.
- La sustitución directa es el primer intento; las indeterminaciones requieren factorizar, racionalizar o L'Hôpital.
- Al infinito, manda el grado mayor; las asíntotas describen el comportamiento extremo.
- La continuidad exige valor, límite e igualdad; el valor intermedio conecta continuidad con existencia de soluciones.
- El número $e$ nace como límite y gobierna el crecimiento continuo.
`,

  "calc-diferencial": String.raw`
## La derivada como razón de cambio
La derivada mide **cómo cambia una cantidad respecto a otra**: la velocidad es la derivada de la posición, la tasa de interés es la derivada del capital, la pendiente de la recta tangente es la derivada de la función.

$$f'(x) = \lim_{h \to 0}\frac{f(x + h) - f(x)}{h}$$

Geométricamente: la pendiente de la recta tangente en el punto. Físicamente: la razón de cambio instantánea. Numéricamente: el límite de cocientes promedio.

Notación: $f'(x)$, $\dfrac{dy}{dx}$, $\dot{y}$ (en física para el tiempo).

## Reglas básicas de derivación
- **Constante:** $(c)' = 0$.
- **Potencia:** $(x^n)' = nx^{n-1}$, válida para todo exponente real.
- **Constante por función:** $(cf)' = cf'$.
- **Suma:** $(f \pm g)' = f' \pm g'$.
- **Producto:** $(fg)' = f'g + fg'$.
- **Cociente:** $\left(\dfrac{f}{g}\right)' = \dfrac{f'g - fg'}{g^2}$.
- **Notables:** $(e^x)' = e^x$, $(\ln x)' = \dfrac{1}{x}$, $(\text{sen}\,x)' = \cos x$, $(\cos x)' = -\text{sen}\,x$.

**Ejemplos.** $(3x^4)' = 12x^3$; $(x^2 e^x)' = 2xe^x + x^2e^x = e^x(x^2 + 2x)$; $\left(\dfrac{x}{x+1}\right)' = \dfrac{1}{(x+1)^2}$.

## Regla de la cadena
Para funciones compuestas:
$$(f(g(x)))' = f'(g(x)) \cdot g'(x)$$

"Deriva la de afuera y multiplica por la derivada de la de adentro". Es la regla más usada y la más olvidada.

**Ejemplos:** $(e^{3x})' = 3e^{3x}$; $(\text{sen}(x^2))' = 2x\cos(x^2)$; $(\ln(5x + 1))' = \dfrac{5}{5x+1}$.

## Derivadas de orden superior
La segunda derivada $f''$ es la derivada de $f'$: mide la aceleración o la concavidad. La tercera, la cuarta, etc., aparecen en aproximaciones y ecuaciones diferenciales.

**Interpretación física:** si $s(t)$ es posición, $s'(t)$ es velocidad y $s''(t)$ es aceleración.

**Ejemplo.** $f(x) = x^3 - 3x^2$: $f'(x) = 3x^2 - 6x$, $f''(x) = 6x - 6$, $f'''(x) = 6$.

**Concavidad:** $f'' > 0$ cóncava hacia arriba; $f'' < 0$ hacia abajo; el cambio de signo marca un **punto de inflexión**.

## Recta tangente y aproximación lineal
La recta tangente en $x = a$:
$$y - f(a) = f'(a)(x - a)$$

La **aproximación lineal** reemplaza la curva por su tangente cerca del punto:
$$f(x) \approx f(a) + f'(a)(x - a)$$

**Ejemplo.** Aproximar $\sqrt{9.1}$ con $f(x) = \sqrt{x}$ en $a = 9$: $f(9) = 3$, $f'(9) = 1/6$, entonces $\sqrt{9.1} \approx 3 + 0.1/6 \approx 3.0167$. El valor real es $3.01662\ldots$

La aproximación es la base de los métodos numéricos y de la idea de diferencial.

## Extremos: máximos y mínimos
**Puntos críticos:** donde $f'(x) = 0$ o $f'$ no existe. Los extremos locales ocurren en puntos críticos.

**Criterios:**
- **Primera derivada:** si $f'$ cambia de $+$ a $-$, hay máximo; de $-$ a $+$, mínimo.
- **Segunda derivada:** si $f'(c) = 0$ y $f''(c) < 0$, máximo; si $f''(c) > 0$, mínimo; si $f''(c) = 0$, el criterio no decide.

**En un intervalo cerrado:** evalúa en puntos críticos y en los extremos; el mayor valor es el máximo absoluto.

**Ejemplo.** $f(x) = x^3 - 3x$: $f'(x) = 3x^2 - 3 = 0 \Rightarrow x = \pm 1$. $f''(-1) = -6 < 0$ (máximo en $x = -1$); $f''(1) = 6 > 0$ (mínimo en $x = 1$).

## Teoremas del valor medio
**Teorema de Rolle:** si $f$ es continua en $[a,b]$, derivable en $(a,b)$ y $f(a) = f(b)$, existe $c$ con $f'(c) = 0$.

**Teorema del valor medio:** existe $c \in (a,b)$ con
$$f'(c) = \frac{f(b) - f(a)}{b - a}$$
es decir: en algún punto, la pendiente instantánea iguala la pendiente promedio.

**Consecuencias:** si $f' > 0$ en un intervalo, $f$ es creciente; si $f' = 0$, $f$ es constante. Son las bases lógicas de la optimización.

## Regla de L'Hôpital y razones relacionadas
**L'Hôpital:** si $\lim \frac{f}{g}$ es $\frac{0}{0}$ o $\frac{\infty}{\infty}$,
$$\lim_{x\to c}\frac{f(x)}{g(x)} = \lim_{x\to c}\frac{f'(x)}{g'(x)}$$
si el segundo límite existe. A veces hay que aplicarla varias veces.

**Ejemplo.** $\lim_{x\to 0}\dfrac{e^x - 1}{x} = \lim \dfrac{e^x}{1} = 1$.

**Razones relacionadas:** cuando dos cantidades dependen del tiempo, sus derivadas se vinculan por la regla de la cadena. Ejemplo: un globo que se infla, $\dfrac{dV}{dt} = 4\pi r^2 \dfrac{dr}{dt}$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (aplicación, física).** Un objeto cae según $h(t) = 100 - 4.9t^2$. Halla la velocidad en $t = 2$ s.
- $h'(t) = -9.8t$.
- $h'(2) = -19.6$ m/s (hacia abajo).

**Ejemplo 2 (aplicación, optimización).** Maximiza el área de un rectángulo con perímetro 40.
- Lados $x$ y $20 - x$; $A(x) = x(20 - x) = 20x - x^2$.
- $A'(x) = 20 - 2x = 0 \Rightarrow x = 10$.
- Área máxima: $100$ (cuadrado de lado 10).

**Ejemplo 3 (aplicación, economía).** El ingreso es $R(x) = 50x - 0.5x^2$. Halla el ingreso marginal en $x = 20$ e interprétalo.
- $R'(x) = 50 - x$; $R'(20) = 30$.
- Producir la unidad 21 añade aproximadamente 30 al ingreso.

**Ejemplo 4 (práctica, reglas).** Deriva $f(x) = x^2\ln x$.
- Producto: $f'(x) = 2x\ln x + x^2 \cdot \dfrac{1}{x} = 2x\ln x + x$.

**Ejemplo 5 (práctica, cadena).** Deriva $g(x) = \text{sen}(3x^2 + 1)$.
- $g'(x) = \cos(3x^2 + 1) \cdot 6x = 6x\cos(3x^2 + 1)$.

**Ejemplo 6 (aplicación, razones relacionadas).** Un globo esférico se infla a $100$ cm$^3$/s. ¿Con qué rapidez crece el radio cuando $r = 5$ cm?
- $V = \dfrac{4}{3}\pi r^3 \Rightarrow \dfrac{dV}{dt} = 4\pi r^2 \dfrac{dr}{dt}$.
- $100 = 4\pi(25)\dfrac{dr}{dt} \Rightarrow \dfrac{dr}{dt} = \dfrac{1}{\pi} \approx 0.318$ cm/s.

## Contextos donde se aplica
- **Física:** velocidad, aceleración, fuerza, trabajo, circuitos.
- **Economía:** costo e ingreso marginal, maximización de beneficio.
- **Ingeniería:** control de sistemas, diseño óptimo, tasas de cambio.
- **Biología:** tasas de crecimiento, propagación de enfermedades.
- **Machine learning:** el descenso de gradiente es derivación aplicada.

## Errores comunes y cómo evitarlos
- **Olvidar la regla de la cadena.** La derivada de $e^{3x}$ es $3e^{3x}$, no $e^{3x}$.
- **Derivar un producto como producto de derivadas.** $(fg)' \neq f'g'$.
- **Confundir máximo con punto crítico.** Todo extremo es crítico, pero no todo crítico es extremo (ejemplo: $x^3$ en $0$).
- **Usar L'Hôpital sin indeterminación.** Verifica la forma antes.
- **Olvidar el dominio al optimizar.** La solución debe estar en el dominio del problema.

## Ejercicios propuestos
1. Deriva $f(x) = 5x^3 - 2x + 7$.
2. Deriva $g(x) = \dfrac{x^2}{x+1}$.
3. Deriva $h(x) = e^{2x}\cos x$.
4. Deriva $k(x) = \ln(x^2 + 1)$.
5. Halla la recta tangente a $y = x^2$ en $x = 3$.
6. Halla extremos de $f(x) = x^3 - 6x^2 + 9x$.
7. $\lim_{x\to 0}\dfrac{\text{sen}\,x - x}{x^3}$ (L'Hôpital repetido).
8. Un cubo crece con arista $a(t) = 2t$. Halla la rapidez de cambio del volumen en $t = 3$.

**Respuestas:** 1) $15x^2 - 2$. 2) $\dfrac{x^2 + 2x}{(x+1)^2}$. 3) $e^{2x}(2\cos x - \text{sen}\,x)$. 4) $\dfrac{2x}{x^2+1}$. 5) $y = 6x - 9$. 6) Máximo en $x=1$, mínimo en $x=3$. 7) $-1/6$. 8) $V = 8t^3$, $V'(3) = 216$ unidades cúbicas por unidad de tiempo.

## Resumen
- La derivada es el límite del cociente incremental: razón de cambio instantánea y pendiente.
- Reglas: potencia, producto, cociente y cadena; las notables se memorizan.
- La segunda derivada decide concavidad y clasifica extremos.
- La recta tangente aproxima localmente; el valor medio conecta pendiente instantánea y promedio.
- Optimizar es hallar puntos críticos y clasificarlos, verificando el dominio.
`,

  "calc-integral": String.raw`
## La integral como acumulación
Si la derivada mide la razón de cambio, la **integral acumula** ese cambio. El área bajo una curva, la distancia recorrida, el trabajo y la masa total son integrales.

Dividimos el intervalo en rectángulos delgados, sumamos sus áreas y tomamos el límite cuando el ancho tiende a cero: esa es la **suma de Riemann**, y su límite es la integral definida:
$$\int_a^b f(x)\,dx = \lim_{n\to\infty}\sum_{i=1}^{n} f(x_i^*)\,\Delta x$$

## Antiderivadas e integral indefinida
Una **antiderivada** de $f$ es una función $F$ con $F' = f$. Si $F$ es una antiderivada, todas son $F + C$.

$$\int f(x)\,dx = F(x) + C$$

**Integrales inmediatas:**
$$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \;(n \neq -1), \qquad \int \frac{1}{x}\,dx = \ln|x| + C$$
$$\int e^x\,dx = e^x + C, \qquad \int \cos x\,dx = \text{sen}\,x + C, \qquad \int \text{sen}\,x\,dx = -\cos x + C$$

La constante $C$ nunca se omite en la integral indefinida.

## Teorema fundamental del cálculo
Conecta derivada e integral y es el resultado central del curso:
$$\int_a^b f(x)\,dx = F(b) - F(a) \quad \text{si } F' = f$$
$$\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$$

El primero permite calcular integrales definidas con antiderivadas; el segundo dice que derivar e integrar son procesos inversos.

**Ejemplo.** $\int_1^3 x^2\,dx = \left[\dfrac{x^3}{3}\right]_1^3 = 9 - \dfrac{1}{3} = \dfrac{26}{3}$.

## Técnicas de integración
1. **Sustitución:** cambia variable para simplificar. $\int 2x\cos(x^2)\,dx$ con $u = x^2$ da $\text{sen}(x^2) + C$.
2. **Integración por partes:** $\int u\,dv = uv - \int v\,du$. Para productos de tipos distintos: $\int x e^x\,dx = xe^x - e^x + C$.
3. **Fracciones parciales:** para funciones racionales; descompón y integra cada parte.
4. **Sustitución trigonométrica:** para raíces de cuadráticas; usa seno, tangente o secante.
5. **Tablas y software:** en la práctica se combinan.

**Regla LIATE** para elegir $u$ en partes: logarítmica, inversa trigonométrica, algebraica, trigonométrica, exponencial.

## Aplicaciones geométricas
- **Área entre curvas:** $\displaystyle\int_a^b [f(x) - g(x)]\,dx$ con $f \geq g$.
- **Volumen de revolución (discos):** $V = \pi\displaystyle\int_a^b [f(x)]^2\,dx$.
- **Volumen (cascarones):** $V = 2\pi\displaystyle\int_a^b x f(x)\,dx$.
- **Longitud de arco:** $L = \displaystyle\int_a^b \sqrt{1 + [f'(x)]^2}\,dx$.
- **Valor promedio:** $\bar{f} = \dfrac{1}{b-a}\displaystyle\int_a^b f(x)\,dx$.
- **Trabajo:** $W = \displaystyle\int_a^b F(x)\,dx$.

## Integrales impropias
Cuando el intervalo es infinito o la función tiene discontinuidades, la integral se define como límite:
$$\int_1^\infty \frac{1}{x^p}\,dx \text{ converge si } p > 1, \text{ diverge si } p \leq 1$$

**Ejemplo.** $\int_1^\infty \dfrac{1}{x^2}\,dx = \lim_{b\to\infty}\left[-\dfrac{1}{x}\right]_1^b = 1$.

La integral de $1/x$ de $1$ a $\infty$ diverge, aunque la función tienda a cero: la convergencia requiere decrecer lo bastante rápido.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, sustitución).** $\displaystyle\int 2x\cos(x^2)\,dx$.
- Sea $u = x^2$, $du = 2x\,dx$.
- $\int \cos u\,du = \text{sen}\,u + C = \text{sen}(x^2) + C$.

**Ejemplo 2 (práctica, partes).** $\displaystyle\int x\ln x\,dx$.
- $u = \ln x$, $dv = x\,dx$; $du = dx/x$, $v = x^2/2$.
- $\dfrac{x^2}{2}\ln x - \int \dfrac{x}{2}\,dx = \dfrac{x^2}{2}\ln x - \dfrac{x^2}{4} + C$.

**Ejemplo 3 (práctica, definida).** $\displaystyle\int_0^{\pi} \text{sen}\,x\,dx$.
- Antiderivada $-\cos x$.
- $[-\cos x]_0^{\pi} = 1 + 1 = 2$.

**Ejemplo 4 (aplicación, física).** Un resorte requiere fuerza $F(x) = 50x$ N para estirarse $x$ m. Halla el trabajo para estirarlo 0.2 m.
- $W = \int_0^{0.2} 50x\,dx = \left[25x^2\right]_0^{0.2}$.
- $W = 25(0.04) = 1$ julio.

**Ejemplo 5 (aplicación, geometría).** Volumen del sólido generado al girar $y = \sqrt{x}$ en $[0,4]$ alrededor del eje $x$.
- Discos: $V = \pi\int_0^4 x\,dx = \pi\left[\dfrac{x^2}{2}\right]_0^4$.
- $V = 8\pi \approx 25.13$ unidades cúbicas.

**Ejemplo 6 (aplicación, economía).** El flujo de ingreso es $f(t) = 1000e^{-0.05t}$ por año. Halla el ingreso total durante 10 años.
- $\int_0^{10} 1000e^{-0.05t}\,dt = \left[-20000e^{-0.05t}\right]_0^{10}$.
- $= 20000(1 - e^{-0.5}) \approx 7869.39$.

## Contextos donde se aplica
- **Física:** trabajo, centro de masa, momento de inercia, presión de fluidos.
- **Ingeniería:** volúmenes, longitudes, flujos, energía.
- **Economía:** excedente del consumidor, valor presente de flujos continuos.
- **Probabilidad:** la integral de la densidad da probabilidades.
- **Biología:** áreas bajo curvas de concentración, dosis acumuladas.

## Errores comunes y cómo evitarlos
- **Olvidar la constante $C$.** En la indefinida siempre va.
- **Integrar productos como productos.** No existe regla del producto para integrales; usa partes o sustitución.
- **No cambiar los límites al sustituir.** Si cambias variable en una definida, cambia también los límites o regresa a la variable original.
- **Confundir área con integral.** Si $f < 0$, la integral es negativa; el área es $\int |f|$.
- **Aplicar mal el teorema fundamental.** La función debe ser continua en el intervalo.

## Ejercicios propuestos
1. $\displaystyle\int (3x^2 - 2x + 1)\,dx$.
2. $\displaystyle\int e^{5x}\,dx$.
3. $\displaystyle\int x\cos(x^2)\,dx$ (sustitución).
4. $\displaystyle\int x e^{2x}\,dx$ (partes).
5. $\displaystyle\int_1^2 \dfrac{1}{x^2}\,dx$.
6. Área entre $y = x$ y $y = x^2$ en $[0,1]$.
7. Volumen al girar $y = x^2$ en $[0,2]$ alrededor del eje $x$.
8. ¿Converge $\displaystyle\int_1^\infty \dfrac{1}{x^{1.5}}\,dx$?

**Respuestas:** 1) $x^3 - x^2 + x + C$. 2) $\dfrac{e^{5x}}{5} + C$. 3) $\dfrac{\text{sen}(x^2)}{2} + C$. 4) $\dfrac{e^{2x}}{2}\left(x - \dfrac{1}{2}\right) + C$. 5) $1/2$. 6) $1/6$. 7) $\dfrac{32\pi}{5}$. 8) Sí, converge a $2$.

## Resumen
- La integral acumula: suma de Riemann como definición, área como interpretación.
- El teorema fundamental conecta derivada e integral y permite calcular áreas exactas.
- Técnicas: sustitución, partes, fracciones parciales, sustitución trigonométrica.
- Aplicaciones: áreas, volúmenes, longitudes, trabajo, valor promedio.
- Las integrales impropias se definen como límites y pueden converger o divergir.
`,

  "series": String.raw`
## Sucesiones y convergencia
Una **sucesión** $\{a_n\}$ es una lista infinita ordenada. Converge a $L$ si sus términos se acercan a $L$:
$$\lim_{n\to\infty} a_n = L$$

**Criterios y ejemplos:**
- $\dfrac{1}{n} \to 0$; $n^2 \to \infty$; $\left(1 + \dfrac{1}{n}\right)^n \to e$.
- Una sucesión **monótona y acotada** siempre converge.
- Para cocientes de polinomios, manda el grado mayor.

Una **serie** es la suma de los términos de una sucesión:
$$\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \cdots$$
La serie converge si la sucesión de **sumas parciales** $S_N = \sum_{n=1}^N a_n$ converge.

## Condición necesaria y series básicas
**Condición necesaria:** si $\sum a_n$ converge, entonces $a_n \to 0$. El recíproco es **falso**: la serie armónica $\sum \frac{1}{n}$ diverge aunque $1/n \to 0$.

**Serie geométrica:**
$$\sum_{n=0}^{\infty} ar^n = \frac{a}{1 - r} \quad \text{si } |r| < 1; \text{ diverge si } |r| \geq 1$$

**Serie telescópica:** $\sum \dfrac{1}{n(n+1)} = 1$, porque $\dfrac{1}{n(n+1)} = \dfrac{1}{n} - \dfrac{1}{n+1}$ y los términos se cancelan.

**Serie p:** $\sum \dfrac{1}{n^p}$ converge si $p > 1$, diverge si $p \leq 1$.

## Criterios de convergencia
1. **Comparación:** si $0 \leq a_n \leq b_n$ y $\sum b_n$ converge, $\sum a_n$ converge.
2. **Comparación al límite:** compara con una serie p o geométrica conocida.
3. **Razón (D'Alembert):** $L = \lim\left|\dfrac{a_{n+1}}{a_n}\right|$: converge si $L < 1$, diverge si $L > 1$, no decide si $L = 1$.
4. **Raíz (Cauchy):** $L = \lim \sqrt[n]{|a_n|}$ con la misma regla.
5. **Integral:** si $f$ es positiva, continua y decreciente con $f(n) = a_n$, la serie y la integral $\int_1^\infty f$ convergen o divergen juntas.
6. **Series alternantes (Leibniz):** si $a_n$ decrece a $0$, $\sum (-1)^n a_n$ converge.

**Ejemplo con razón.** $\sum \dfrac{x^n}{n!}$: $\left|\dfrac{a_{n+1}}{a_n}\right| = \dfrac{|x|}{n+1} \to 0 < 1$: converge para todo $x$.

## Convergencia absoluta y condicional
$\sum a_n$ es **absolutamente convergente** si $\sum |a_n|$ converge. Si converge pero no absolutamente, es **condicionalmente convergente**.

**Teorema:** convergencia absoluta implica convergencia. El recíproco no vale.

**Ejemplo clave:** $\sum \dfrac{(-1)^n}{n}$ converge (Leibniz) pero $\sum \dfrac{1}{n}$ diverge: es condicionalmente convergente. Reordenar sus términos puede cambiar la suma (teorema de Riemann).

## Series de potencias
Una serie de potencias es una función definida por una serie:
$$\sum_{n=0}^{\infty} c_n x^n$$
Tiene un **radio de convergencia** $R$: converge absolutamente si $|x| < R$ y diverge si $|x| > R$. En $|x| = R$ se analiza caso a caso. Se calcula con la razón: $R = \lim\left|\dfrac{c_n}{c_{n+1}}\right|$.

**Ejemplos:** $\sum x^n$ tiene $R = 1$; $\sum \dfrac{x^n}{n!}$ tiene $R = \infty$; $\sum n!x^n$ tiene $R = 0$.

## Series de Taylor y McLaurin
Toda función suave se aproxima por su **serie de Taylor** alrededor de $a$:
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n$$
Si $a = 0$ se llama serie de **McLaurin**. Series clave:
$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$$
$$\text{sen}\,x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$$
$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$$
$$\frac{1}{1-x} = 1 + x + x^2 + \cdots \quad (|x| < 1)$$

La serie de Taylor es la base de las calculadoras y de la aproximación numérica.

## Series de Fourier (introducción)
Las series de **Fourier** descomponen funciones **periódicas** en senos y cosenos:
$$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{L} + b_n\,\text{sen}\,\frac{n\pi x}{L}\right)$$
Los coeficientes miden cuánto aporta cada frecuencia. Una onda cuadrada usa solo armónicos impares. Es la herramienta del procesamiento de señales.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, geométrica).** Suma $\displaystyle\sum_{n=0}^{\infty} 4\left(\frac{1}{2}\right)^n$.
- Geométrica con $a = 4$, $r = 1/2$.
- $S = \dfrac{4}{1 - 1/2} = 8$.

**Ejemplo 2 (práctica, telescópica).** Calcula $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n(n+1)}$.
- Descompón: $\dfrac{1}{n} - \dfrac{1}{n+1}$.
- Las sumas parciales son $1 - \dfrac{1}{N+1} \to 1$.

**Ejemplo 3 (práctica, criterio de la razón).** ¿Converge $\displaystyle\sum \frac{3^n}{n!}$?
- $\left|\dfrac{a_{n+1}}{a_n}\right| = \dfrac{3}{n+1} \to 0 < 1$.
- Converge (de hecho, suma $e^3$).

**Ejemplo 4 (práctica, alternante).** Analiza $\displaystyle\sum \frac{(-1)^n}{\sqrt{n}}$.
- $1/\sqrt{n}$ decrece a 0; por Leibniz converge.
- No absolutamente: $\sum n^{-1/2}$ diverge (p = 1/2).

**Ejemplo 5 (aplicación, aproximación).** Aproxima $e^{0.1}$ con tres términos de Taylor y estima el error.
- $e^{0.1} \approx 1 + 0.1 + 0.005 = 1.105$.
- Valor real: $1.10517\ldots$; el error es menor que $10^{-4}$.

**Ejemplo 6 (aplicación, paradoja de Zenón).** Una persona recorre la mitad del camino restante en cada paso. ¿Llega?
- Distancia total: $\sum \dfrac{1}{2^n} = 1$.
- La serie converge: en modelo matemático, sí llega (en tiempo finito).

## Contextos donde se aplica
- **Matemática:** cálculo de funciones, aproximaciones, ecuaciones diferenciales por series.
- **Física:** series de Fourier en ondas y calor; desarrollos multipolares.
- **Ingeniería:** procesamiento de señales, comunicaciones, control.
- **Computación:** evaluación de funciones en calculadoras, análisis de algoritmos.
- **Finanzas:** anualidades infinitas, modelos de valoración.

## Errores comunes y cómo evitarlos
- **Concluir convergencia porque $a_n \to 0$.** Es solo una condición necesaria; la armónica diverge.
- **Usar la razón cuando $L = 1$.** No decide; cambia de criterio.
- **Confundir convergencia con convergencia absoluta.** La condicional depende del orden.
- **Olvidar el radio de convergencia.** Una serie de potencias solo vale dentro de su intervalo.
- **Truncar Taylor sin estimar el error.** Siempre reporta una cota o el término siguiente.

## Ejercicios propuestos
1. ¿Converge $\displaystyle\sum \frac{1}{n^2 + 1}$?
2. Suma $\displaystyle\sum_{n=1}^{\infty} 2\left(\frac{2}{3}\right)^n$.
3. Aplica la razón a $\displaystyle\sum \frac{n!}{10^n}$.
4. Analiza $\displaystyle\sum \frac{(-1)^n}{n^2}$ (absoluta o condicional).
5. Halla el radio de convergencia de $\displaystyle\sum \frac{x^n}{n\,3^n}$.
6. Escribe los cuatro primeros términos de Taylor de $\cos x$ en $0$.
7. $\sum 1/n^{1.1}$: ¿converge?
8. Aproxima $\text{sen}(0.2)$ con dos términos y estima el error.

**Respuestas:** 1) Converge (comparación con $n^{-2}$). 2) $4$. 3) Diverge ($L = \infty$). 4) Absolutamente (p = 2). 5) $R = 3$. 6) $1 - x^2/2 + x^4/24 - x^6/720$. 7) Converge (p > 1). 8) $0.2$; error menor que $0.2^3/6 \approx 0.0013$.

## Resumen
- La serie converge si sus sumas parciales convergen; $a_n \to 0$ es necesario, no suficiente.
- Geométrica y p son las series de referencia; los criterios comparan contra ellas.
- Razón y raíz deciden salvo $L = 1$; la integral conecta con integrales impropias; Leibniz resuelve alternantes.
- Absoluta implica convergente; la condicional es frágil al reordenar.
- Taylor y Fourier representan funciones como series: la base del cálculo numérico y de las señales.
`,

  "calc-multivariable": String.raw`
## Funciones de varias variables
Una función de dos variables asigna un número a cada par: $z = f(x, y)$. Su gráfica es una **superficie** en el espacio; las **curvas de nivel** $f(x,y) = k$ son su mapa topográfico.

**Ejemplo.** $f(x, y) = x^2 + y^2$ es un paraboloide; sus curvas de nivel son circunferencias. $f(x,y) = xy$ es una silla de montar.

El dominio se restringe igual que en una variable: denominadores no nulos, raíces pares no negativas, logaritmos positivos; ahora en dos condiciones simultáneas.

## Derivadas parciales
La derivada parcial $\dfrac{\partial f}{\partial x}$ deriva respecto a $x$ manteniendo $y$ **constante**, y viceversa.

**Ejemplo.** $f(x, y) = x^2y + 3xy^2$:
$$\frac{\partial f}{\partial x} = 2xy + 3y^2, \qquad \frac{\partial f}{\partial y} = x^2 + 6xy$$

Las derivadas parciales miden la sensibilidad de la función en cada dirección coordenada. Los órdenes superiores $\dfrac{\partial^2 f}{\partial x \partial y}$ suelen ser iguales (teorema de Clairaut) cuando son continuas.

## Gradiente y derivada direccional
El **gradiente** reúne las parciales:
$$\nabla f = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right\rangle$$

Apuna en la dirección de **máximo crecimiento**; su módulo es la máxima razón de cambio. Es perpendicular a las curvas de nivel.

La **derivada direccional** en dirección del vector unitario $\hat{u}$:
$$D_{\hat{u}}f = \nabla f \cdot \hat{u}$$

**Ejemplo.** $f(x,y) = x^2 + y^2$: $\nabla f = \langle 2x, 2y \rangle$. En $(1, 2)$, el máximo crecimiento es en dirección $\langle 2, 4 \rangle$ y el módulo es $2\sqrt{5}$.

## Plano tangente y diferencial
El plano tangente a $z = f(x, y)$ en $(a, b)$:
$$z = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b)$$

La **aproximación lineal** usa el plano tangente:
$$f(x, y) \approx f(a, b) + f_x(a,b)\Delta x + f_y(a,b)\Delta y$$

**Ejemplo.** Aproxima $\sqrt{9.1 \cdot 4.05}$ con $f = \sqrt{xy}$ en $(9, 4)$: $f_x = \frac{\sqrt{y}}{2\sqrt{x}} = 1/3$, $f_y = 1/4$; resultado $\approx 6 + \frac{0.1}{3} + \frac{0.05}{4} \approx 6.0458$ (real: $6.0457\ldots$).

## Extremos y matriz hessiana
Los extremos locales ocurren donde $\nabla f = \vec{0}$ (puntos críticos). El **hessiano** clasifica:
$$H = \begin{vmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy} \end{vmatrix}$$

- $H > 0$ y $f_{xx} > 0$: mínimo local.
- $H > 0$ y $f_{xx} < 0$: máximo local.
- $H < 0$: punto silla.
- $H = 0$: no decide.

**Ejemplo.** $f(x,y) = x^2 - y^2$: gradiente cero en $(0,0)$; $H = -4 < 0$: silla (sube en $x$, baja en $y$).

## Multiplicadores de Lagrange
Para extremos con restricción $g(x, y) = c$:
$$\nabla f = \lambda \nabla g, \qquad g(x, y) = c$$
$\lambda$ es el multiplicador; mide la sensibilidad del óptimo ante cambios en la restricción (precio sombra).

**Ejemplo.** Maximiza $f = xy$ sujeto a $x + y = 10$.
- $\langle y, x \rangle = \lambda\langle 1, 1 \rangle \Rightarrow y = x = \lambda$; con $x + y = 10$: $x = y = 5$.
- Máximo: $f = 25$.

## Integrales dobles y triples
La integral doble $\displaystyle\iint_D f(x,y)\,dA$ acumula sobre una región del plano: volumen bajo la superficie. Se calcula con integrales iteradas:
$$\iint_D f\,dA = \int_a^b \int_{g(x)}^{h(x)} f(x,y)\,dy\,dx$$

En tres dimensiones, $\iiint_V f\,dV$ integra sobre sólidos. Aplicaciones: masa, centro de masa, momentos de inercia, carga total.

## Cambio de coordenadas y jacobiano
- **Polares:** $x = r\cos\theta$, $y = r\,\text{sen}\,\theta$, $dA = r\,dr\,d\theta$.
- **Cilíndricas:** $x = r\cos\theta$, $y = r\,\text{sen}\,\theta$, $z = z$, $dV = r\,dz\,dr\,d\theta$.
- **Esféricas:** $x = \rho\,\text{sen}\,\phi\cos\theta$, $y = \rho\,\text{sen}\,\phi\,\text{sen}\,\theta$, $z = \rho\cos\phi$, $dV = \rho^2\text{sen}\,\phi\,d\rho\,d\phi\,d\theta$.

El **jacobiano** es el factor de escala del cambio de variable: $dA = |J|\,du\,dv$. En polares, $|J| = r$.

**Ejemplo.** $\iint_{x^2+y^2 \leq 4} (x^2+y^2)\,dA$ en polares: $\int_0^{2\pi}\int_0^2 r^2 \cdot r\,dr\,d\theta = 2\pi \cdot 4 = 8\pi$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, parciales).** $f(x,y) = e^{xy}\ln(x+y)$: halla $f_x$ y $f_y$.
- $f_x = ye^{xy}\ln(x+y) + \dfrac{e^{xy}}{x+y}$.
- $f_y = xe^{xy}\ln(x+y) + \dfrac{e^{xy}}{x+y}$.

**Ejemplo 2 (aplicación, gradiente).** La temperatura de una placa es $T(x,y) = 100 - x^2 - 2y^2$. ¿En qué dirección aumenta más rápido desde $(2, 1)$?
- $\nabla T = \langle -2x, -4y \rangle$; en $(2,1)$: $\langle -4, -4 \rangle$.
- La temperatura sube en dirección $\langle -4, -4 \rangle$: hacia el origen.

**Ejemplo 3 (práctica, silla).** Clasifica el punto crítico de $f(x,y) = x^2 - y^2$.
- Gradiente cero solo en $(0,0)$.
- $H = f_{xx}f_{yy} - f_{xy}^2 = (2)(-2) - 0 = -4 < 0$.
- Punto silla.

**Ejemplo 4 (aplicación, Lagrange).** Minimiza $f = x^2 + y^2$ sujeto a $x + y = 4$.
- $2x = \lambda$, $2y = \lambda \Rightarrow x = y = 2$.
- Mínimo: $f = 8$ (punto más cercano al origen sobre la recta).

**Ejemplo 5 (práctica, integral doble).** $\displaystyle\int_0^1\int_0^2 (x + y)\,dy\,dx$.
- Interior: $\left[xy + \dfrac{y^2}{2}\right]_0^2 = 2x + 2$.
- Exterior: $\left[x^2 + 2x\right]_0^1 = 3$.

**Ejemplo 6 (aplicación, masa).** La densidad de una placa cuadrada $[0,1]^2$ es $\rho(x,y) = xy$. Halla su masa.
- $m = \int_0^1\int_0^1 xy\,dy\,dx$.
- Interior: $x/2$; exterior: $1/4$. Masa $= 1/4$.

## Contextos donde se aplica
- **Física:** campos de temperatura, potencial, presión; optimización de energías.
- **Economía:** producción con dos insumos, utilidad con dos bienes; Lagrange para restricciones presupuestarias.
- **Ingeniería:** diseño de superficies, transferencia de calor, mecánica de fluidos.
- **Machine learning:** funciones de pérdida en millones de variables; el gradiente guía el aprendizaje.
- **Geografía:** modelos de elevación, mapas de densidad.

## Errores comunes y cómo evitarlos
- **Olvidar que la otra variable es constante.** Al derivar parcialmente, trata $y$ como número.
- **Confundir gradiente con tangente.** El gradiente es normal a las curvas de nivel.
- **No verificar el hessiano.** Gradiente cero no garantiza extremo.
- **Olvidar el jacobiano $r$.** En polares, $dA = r\,dr\,d\theta$, no $dr\,d\theta$.
- **Escribir mal los límites de integración.** Dibuja la región antes de plantear las integrales iteradas.

## Ejercicios propuestos
1. Halla las parciales de $f(x,y) = x^3y^2 - 2xy$.
2. Calcula $\nabla f$ de $f = \ln(x^2 + y^2)$ en $(1,1)$.
3. Clasifica el crítico de $f = x^2 + y^2 + xy$.
4. Optimiza $f = xy$ con $x + 2y = 8$ por Lagrange.
5. $\displaystyle\int_0^1\int_0^1 (x^2 + y^2)\,dy\,dx$.
6. Convierte a polares $\iint_D xy\,dA$ con $D$ el disco unidad.
7. Halla el plano tangente a $f = x^2 - y^2$ en $(1, 1)$.
8. Masa de la placa $[0,2]\times[0,1]$ con $\rho = x + y$.

**Respuestas:** 1) $f_x = 3x^2y^2 - 2y$, $f_y = 2x^3y - 2x$. 2) $\langle 1, 1 \rangle$. 3) Mínimo ($H = 3 > 0$, $f_{xx} > 0$). 4) $x = 4$, $y = 2$, $f = 8$. 5) $2/3$. 6) $0$ por simetría. 7) $z = 2x - 2y - 1$. 8) $3$.

## Resumen
- Las funciones de varias variables se estudian con curvas de nivel y superficies.
- Las parciales miden sensibilidad por dirección; el gradiente da la dirección de máximo crecimiento.
- El plano tangente generaliza la recta tangente; el hessiano clasifica extremos.
- Lagrange resuelve optimización con restricciones y da precios sombra.
- Las integrales múltiples acumulan sobre regiones; el jacobiano ajusta el cambio de coordenadas.
`,

  "calc-vectorial": String.raw`
## Campos vectoriales
Un **campo vectorial** asigna un vector a cada punto: $\vec{F}(x,y) = \langle P(x,y), Q(x,y) \rangle$. Ejemplos: campos de velocidad de fluidos, campos gravitatorios, campos eléctricos.

**Conceptos asociados:**
- **Divergencia:** $\nabla \cdot \vec{F} = \dfrac{\partial P}{\partial x} + \dfrac{\partial Q}{\partial y}$: mide la tendencia a "emanar" de un punto (fuente o sumidero).
- **Rotacional:** $\nabla \times \vec{F} = \dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y}$ (en el plano): mide la circulación local.

Si $\nabla \cdot \vec{F} = 0$, el campo es **incompresible**; si $\nabla \times \vec{F} = \vec{0}$, es **irrotacional** (conservativo en dominios simples).

## Integrales de línea
La integral de línea acumula un campo a lo largo de una curva:
$$\int_C \vec{F} \cdot d\vec{r} = \int_a^b \vec{F}(\vec{r}(t)) \cdot \vec{r}'(t)\,dt$$

Interpretación física: **trabajo** realizado por el campo al mover una partícula por $C$.

**Ejemplo.** $\vec{F} = \langle y, x \rangle$ a lo largo de $\vec{r}(t) = \langle t, t^2 \rangle$, $t \in [0,1]$: $\int_0^1 (t^2 + t \cdot 2t)\,dt = \int_0^1 3t^2\,dt = 1$.

También existe la integral de línea respecto a longitud de arco: $\int_C f\,ds$, usada para masa de alambres.

## Campos conservativos y potencial
$\vec{F}$ es **conservativo** si $\vec{F} = \nabla f$ para una función potencial $f$. Entonces:
$$\int_C \vec{F} \cdot d\vec{r} = f(\vec{r}(b)) - f(\vec{r}(a))$$
Es decir, el trabajo **no depende del camino**, solo de los extremos.

**Criterio:** si $\vec{F}$ está definido en un dominio **simplemente conexo** y $\nabla \times \vec{F} = \vec{0}$, entonces es conservativo. En dominios con agujeros, el rotacional cero no basta: el campo $\langle -y, x \rangle/(x^2+y^2)$ tiene rotacional cero pero su integral sobre el círculo es $2\pi$.

## Teorema de Green
Para una curva cerrada $C$ que limita una región $D$:
$$\oint_C (P\,dx + Q\,dy) = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA$$

Convierte una integral de línea en una doble (o al revés). Es útil cuando la curva es complicada pero la región es simple.

**Ejemplo.** Área encerrada por una curva: $A = \dfrac{1}{2}\oint_C (x\,dy - y\,dx)$.

## Integrales de superficie y flujo
Una superficie parametrizada $\vec{r}(u, v)$ tiene vector normal $\vec{n} = \vec{r}_u \times \vec{r}_v$. El **flujo** de $\vec{F}$ a través de $S$:
$$\iint_S \vec{F} \cdot \vec{n}\,dS$$
Mide cuánto campo atraviesa la superficie: caudal, flujo eléctrico, flujo magnético.

**Ejemplo.** En una esfera de radio $R$, el flujo del campo radial $\vec{F} = \langle x, y, z \rangle$ es $4\pi R^3$.

## Teorema de Stokes
$$\oint_C \vec{F} \cdot d\vec{r} = \iint_S (\nabla \times \vec{F}) \cdot \vec{n}\,dS$$
La circulación alrededor de una curva cerrada iguala el flujo del rotacional a través de toda superficie que la tenga como borde. Generaliza Green al espacio.

## Teorema de Gauss (divergencia)
Para una superficie cerrada $S$ que encierra el volumen $V$:
$$\iint_S \vec{F} \cdot \vec{n}\,dS = \iiint_V \nabla \cdot \vec{F}\,dV$$
El flujo neto a través de la frontera iguala la integral de la divergencia dentro. Es la forma matemática de la conservación: lo que sale menos lo que entra es lo que se genera dentro.

**Ejemplo.** $\vec{F} = \langle x^2, y^2, z^2 \rangle$ en el cubo $[0,1]^3$: $\nabla\cdot\vec{F} = 2(x+y+z)$; la integral vale $2 \cdot 3 \cdot \frac{1}{2} = 3$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, divergencia y rotacional).** $\vec{F} = \langle x^2y, y^2x \rangle$.
- $\nabla \cdot \vec{F} = 2xy + 2xy = 4xy$.
- $\nabla \times \vec{F} = 2y x - x^2$; espera: $\partial_x(y^2x) = y^2$, $\partial_y(x^2y) = x^2$; rotacional $= y^2 - x^2$.

**Ejemplo 2 (aplicación, trabajo).** Trabajo de $\vec{F} = \langle 3, 4 \rangle$ a lo largo de la recta de $(0,0)$ a $(2, 2)$.
- Campo constante: $W = \vec{F} \cdot \vec{d} = \langle 3,4 \rangle \cdot \langle 2,2 \rangle = 14$.
- Correcto por ser conservativo.

**Ejemplo 3 (aplicación, potencial).** Halla el potencial de $\vec{F} = \langle 2x, 2y \rangle$.
- $f_x = 2x \Rightarrow f = x^2 + g(y)$.
- $f_y = g'(y) = 2y \Rightarrow g = y^2 + C$.
- $f = x^2 + y^2$; el trabajo entre dos puntos es la diferencia de potencial.

**Ejemplo 4 (práctica, Green).** $\oint_C (x\,dy - y\,dx)$ sobre el círculo unitario.
- Green: $\iint_D (1 - (-1))\,dA = 2 \cdot \pi = 2\pi$.
- De hecho, $2\pi$ es el doble del área: coincide con $\frac{1}{2}\oint$.

**Ejemplo 5 (aplicación, flujo).** Flujo de $\vec{F} = \langle 0, 0, z \rangle$ a través del disco $z = 1$, $x^2 + y^2 \leq 1$, orientado hacia arriba.
- $\vec{n} = \langle 0,0,1 \rangle$; $\vec{F} \cdot \vec{n} = z = 1$ en el disco.
- Flujo $= \pi \cdot 1 = \pi$.

**Ejemplo 6 (aplicación, Gauss).** Verifica Gauss para $\vec{F} = \langle x, y, z \rangle$ en la esfera de radio $R$.
- $\nabla \cdot \vec{F} = 3$; integral de volumen $= 3 \cdot \frac{4}{3}\pi R^3 = 4\pi R^3$.
- El flujo directo daba el mismo valor: verificado.

## Contextos donde se aplica
- **Física:** electromagnetismo (leyes de Gauss y Faraday en forma integral), fluidos, gravitación.
- **Ingeniería:** aerodinámica, transferencia de calor, mecánica de medios continuos.
- **Meteorología:** campos de viento y divergencia; predicción de tormentas.
- **Computación gráfica:** campos de normales, iluminación, simulación de fluidos.
- **Matemática:** puente hacia geometría diferencial y análisis vectorial.

## Errores comunes y cómo evitarlos
- **Confundir flujo con circulación.** Flujo atraviesa la superficie; circulación recorre la curva.
- **Aplicar Green sin curva cerrada y orientada.** La orientación positiva es antihoraria.
- **Suponer conservativo con rotacional cero sin revisar el dominio.** Hacen falta dominios simplemente conexos.
- **Olvidar el vector normal unitario.** El flujo usa la componente normal; normaliza si hace falta.
- **Mezclar los signos de orientación.** La normal y la orientación de la curva deben ser coherentes (regla de la mano derecha).

## Ejercicios propuestos
1. Halla divergencia y rotacional de $\vec{F} = \langle xy, yz \rangle$.
2. Calcula el trabajo de $\vec{F} = \langle y, x \rangle$ de $(0,0)$ a $(1,1)$ por la parábola $y = x^2$.
3. ¿Es conservativo $\vec{F} = \langle 2xy, x^2 \rangle$? Halla su potencial.
4. Aplica Green a $\oint_C (x\,dy)$ sobre el cuadrado unitario.
5. Flujo de $\vec{F} = \langle x, y, z \rangle$ por la superficie del cubo $[0,1]^3$.
6. Verifica Stokes para $\vec{F} = \langle -y, x, 0 \rangle$ sobre el disco unitario del plano $xy$.
7. Trabajo de $\vec{F} = \langle e^x, 1 \rangle$ de $(0,0)$ a $(1,1)$ por la recta $y = x$.
8. Divergencia de $\vec{F} = \langle x^3, y^3, z^3 \rangle$ en el origen.

**Respuestas:** 1) $\nabla\cdot\vec{F} = y + z$; rotacional $= \langle -y, 0, -x \rangle$ (en 3D). 2) $1$. 3) Sí: $f = x^2y$. 4) $1$ (área del cuadrado). 5) $3$. 6) Ambos lados dan $2\pi$; espera: circulación $2\pi$, y el flujo del rotacional también. 7) $e - 1$. 8) $0$.

## Resumen
- Los campos vectoriales se describen con divergencia y rotacional.
- La integral de línea mide trabajo o circulación; en campos conservativos es diferencia de potencial.
- Green conecta línea y área; Stokes, circulación y flujo del rotacional; Gauss, flujo y divergencia.
- Los teoremas integrales son generalizaciones del teorema fundamental del cálculo.
- El dominio importa: rotacional cero no garantiza potencial si hay agujeros.
`,

  "edo": String.raw`
## ¿Qué es una ecuación diferencial?
Una **ecuación diferencial** relaciona una función desconocida con sus derivadas. Una **EDO** involucra solo una variable independiente:
$$F(x, y, y', y'', \ldots) = 0$$

**Orden:** el de la derivada más alta. **Lineal:** si $y$ y sus derivadas aparecen solo a la primera potencia y sin productos entre ellas.

**Solución general:** familia con constantes arbitrarias. **Solución particular:** se fijan con condiciones iniciales o de frontera.

**Ejemplo.** $y' = 2x$ tiene solución general $y = x^2 + C$; con $y(0) = 3$, la particular es $y = x^2 + 3$.

Las EDO modelan todo sistema que cambia: poblaciones, circuitos, reacciones, enfriamiento.

## Ecuaciones de variables separables
Si la ecuación se escribe $y' = f(x)g(y)$:
$$\frac{dy}{g(y)} = f(x)\,dx \quad \Rightarrow \quad \int \frac{dy}{g(y)} = \int f(x)\,dx$$

**Ejemplo.** $y' = ky$ (crecimiento/decaimiento):
- $\dfrac{dy}{y} = k\,dx \Rightarrow \ln|y| = kx + C$.
- $y = Ce^{kx}$. Con $k > 0$ crece; con $k < 0$ decae.

**Ejemplo 2.** $y' = x y^2$:
- $\dfrac{dy}{y^2} = x\,dx \Rightarrow -\dfrac{1}{y} = \dfrac{x^2}{2} + C$.
- $y = -\dfrac{1}{x^2/2 + C}$.

## Ecuaciones lineales de primer orden
Forma estándar:
$$y' + P(x)y = Q(x)$$

Se multiplica por el **factor integrante** $\mu = e^{\int P\,dx}$, que convierte el lado izquierdo en la derivada de un producto:
$$(\mu y)' = \mu Q \quad \Rightarrow \quad y = \frac{1}{\mu}\int \mu Q\,dx$$

**Ejemplo.** $y' + 2y = e^{-x}$: $\mu = e^{2x}$; $(e^{2x}y)' = e^{x}$; $e^{2x}y = e^x + C$; $y = e^{-x} + Ce^{-2x}$.

## Ecuaciones exactas
$M(x,y)\,dx + N(x,y)\,dy = 0$ es **exacta** si $\dfrac{\partial M}{\partial y} = \dfrac{\partial N}{\partial x}$. Entonces existe $f$ con $f_x = M$, $f_y = N$, y la solución es $f(x,y) = C$. Si no es exacta, a veces un factor integrante la vuelve exacta.

**Ejemplo.** $(2xy)\,dx + (x^2)\,dy = 0$: $M_y = 2x = N_x$; $f = x^2y$; solución $x^2y = C$.

## Ecuaciones lineales de segundo orden homogéneas
Forma $ay'' + by' + cy = 0$. Se resuelve con la **ecuación característica** $ar^2 + br + c = 0$:

- **Raíces reales distintas** $r_1 \neq r_2$: $y = C_1e^{r_1x} + C_2e^{r_2x}$.
- **Raíz doble** $r$: $y = (C_1 + C_2x)e^{rx}$.
- **Complejas** $\alpha \pm \beta i$: $y = e^{\alpha x}(C_1\cos\beta x + C_2\,\text{sen}\,\beta x)$.

**Ejemplo.** $y'' - y = 0$: $r^2 - 1 = 0$, $r = \pm 1$: $y = C_1e^x + C_2e^{-x}$.

**Ejemplo.** $y'' + 4y = 0$: $r = \pm 2i$: $y = C_1\cos 2x + C_2\,\text{sen}\,2x$ (oscilación).

## No homogéneas: coeficientes indeterminados
Para $ay'' + by' + cy = g(x)$:
1. Resuelve la homogénea asociada $y_h$.
2. Propón una $y_p$ con la forma de $g$ (polinomio, exponencial, seno/coseno).
3. Sustituye y ajusta coeficientes.
4. Solución general: $y = y_h + y_p$.

**Ejemplo.** $y'' - y = e^{2x}$: $y_h = C_1e^x + C_2e^{-x}$; propon $y_p = Ae^{2x}$; $4Ae^{2x} - Ae^{2x} = e^{2x} \Rightarrow A = 1/3$; $y = C_1e^x + C_2e^{-x} + \frac{1}{3}e^{2x}$.

**Variación de parámetros** es el método general cuando la forma no es simple.

## Transformada de Laplace
Convierte una EDO con condiciones iniciales en álgebra:
$$\mathcal{L}\{y'\} = sY(s) - y(0), \qquad \mathcal{L}\{y''\} = s^2Y(s) - sy(0) - y'(0)$$
$$\mathcal{L}\{e^{at}\} = \frac{1}{s - a}, \qquad \mathcal{L}\{\text{sen}\,at\} = \frac{a}{s^2 + a^2}$$

**Método:** transforma, resuelve para $Y(s)$, aplica fracciones parciales y antitransforma. Es el método estándar en ingeniería para circuitos y control.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (aplicación, biología).** Una bacteria se reproduce con tasa proporcional a su población: $P' = 0.3P$, $P(0) = 100$. Halla $P(t)$.
- Separable: $P = 100e^{0.3t}$.
- En $t = 10$: $P \approx 100 e^3 \approx 2008.6$.

**Ejemplo 2 (aplicación, enfriamiento).** Un café a $90°$C en una sala a $20°$C: $T' = -k(T - 20)$. Tras 10 min está a $60°$C. Halla $k$.
- $T - 20 = 70e^{-kt}$; a $t = 10$: $40 = 70e^{-10k}$.
- $k = \dfrac{\ln(70/40)}{10} \approx 0.056$.

**Ejemplo 3 (aplicación, circuitos).** Circuito RL: $L\dfrac{di}{dt} + Ri = V$. Con $L = 1$, $R = 2$, $V = 10$, $i(0) = 0$.
- $i' + 2i = 10$; factor integrante $e^{2t}$.
- $i = 5 + Ce^{-2t}$; con $i(0)=0$: $C = -5$; $i(t) = 5(1 - e^{-2t})$.

**Ejemplo 4 (práctica, segundo orden).** Resuelve $y'' - 5y' + 6y = 0$.
- $r^2 - 5r + 6 = 0 \Rightarrow r = 2, 3$.
- $y = C_1e^{2x} + C_2e^{3x}$.

**Ejemplo 5 (práctica, oscilador).** $y'' + 9y = 0$ con $y(0) = 1$, $y'(0) = 0$.
- $y = C_1\cos 3x + C_2\,\text{sen}\,3x$.
- $y(0) = C_1 = 1$; $y'(0) = 3C_2 = 0$.
- $y = \cos 3x$.

**Ejemplo 6 (práctica, Laplace).** Resuelve $y' + y = 1$, $y(0) = 0$ por Laplace.
- $sY - 0 + Y = \dfrac{1}{s} \Rightarrow Y = \dfrac{1}{s(s+1)} = \dfrac{1}{s} - \dfrac{1}{s+1}$.
- Antitransforma: $y = 1 - e^{-t}$.

## Contextos donde se aplica
- **Física:** movimiento, osciladores, circuitos, gravitación, mecánica de fluidos.
- **Biología y medicina:** poblaciones, epidemias (SIR), farmacocinética.
- **Ingeniería:** control, vibraciones, calor, electrónica.
- **Economía:** modelos de crecimiento, ajuste de precios, dinámica de deuda.
- **Química:** cinética de reacciones, mezclas.

## Errores comunes y cómo evitarlos
- **Olvidar la constante al integrar.** Se pierde la solución general (o parte de ella).
- **Dividir entre $y$ sin analizar $y = 0$.** Puede existir la solución constante que se pierde.
- **Confundir homogénea con particular.** La general es la suma de ambas.
- **Errar en raíces complejas.** Recuerda la forma con exponencial, coseno y seno.
- **Aplicar condiciones iniciales antes de tener la general.** Primero la familia completa, luego las constantes.

## Ejercicios propuestos
1. Resuelve $y' = 3x^2$.
2. Resuelve $y' = y\cos x$.
3. Resuelve $y' + y = e^x$.
4. Resuelve $y'' - 4y' + 4y = 0$.
5. Resuelve $y'' + y = 0$ con $y(0) = 2$, $y'(0) = 1$.
6. Resuelve $y'' - y' - 6y = 0$.
7. Una población crece al $2\%$ anual: $P' = 0.02P$, $P(0) = 5000$; halla $P(50)$.
8. Resuelve $y' = x/y$ con $y(0) = 2$.

**Respuestas:** 1) $y = x^3 + C$. 2) $y = Ce^{\text{sen}\,x}$. 3) $y = \frac{e^x}{2} + Ce^{-x}$. 4) $y = (C_1 + C_2x)e^{2x}$. 5) $y = 2\cos x + \text{sen}\,x$. 6) $y = C_1e^{3x} + C_2e^{-2x}$. 7) $5000e^1 \approx 13591$. 8) $y = \sqrt{x^2 + 4}$.

## Resumen
- Una EDO relaciona la función y sus derivadas; la solución general lleva constantes que fijan las condiciones.
- Separables, lineales de primer orden y exactas tienen métodos directos.
- El segundo orden homogéneo se resuelve con la ecuación característica; los casos reales, dobles y complejos dan las tres formas de solución.
- Las no homogéneas suman una particular a la homogénea.
- Laplace transforma la EDO en álgebra y domina en ingeniería.
`,

  "edp": String.raw`
## ¿Qué es una ecuación en derivadas parciales?
Una **EDP** relaciona una función de varias variables con sus derivadas parciales. Aparecen cuando el fenómeno depende del espacio **y** del tiempo: calor, ondas, potencial eléctrico, difusión.

**Ejemplo.** La ecuación del calor en una dimensión:
$$\frac{\partial u}{\partial t} = k\frac{\partial^2 u}{\partial x^2}$$
La temperatura $u(x,t)$ cambia en el tiempo según su curvatura espacial.

Resolver una EDP requiere **condiciones iniciales** (estado en $t = 0$) y **condiciones de frontera** (qué pasa en los bordes).

## Clasificación de las EDP de segundo orden
Para $A u_{xx} + B u_{xy} + C u_{yy} + \cdots = 0$ se clasifica según el discriminante $\Delta = B^2 - 4AC$:

- **Elíptica** ($\Delta < 0$): problemas de equilibrio. Ejemplo: Laplace.
- **Parabólica** ($\Delta = 0$): difusión y evolución. Ejemplo: calor.
- **Hiperbólica** ($\Delta > 0$): propagación de ondas. Ejemplo: onda.

Cada tipo tiene comportamiento y métodos propios: las elípticas son "suaves", las parabólicas se alisan con el tiempo, las hiperbólicas transportan señales sin difuminarse.

## Ecuación de Laplace y de Poisson
**Laplace:** $\nabla^2 u = 0$ (por ejemplo, $u_{xx} + u_{yy} = 0$): estados estacionarios sin fuentes. Sus soluciones son **armónicas**: no tienen máximos ni mínimos interiores (principio del máximo).

**Poisson:** $\nabla^2 u = f$: equilibrio con fuentes (cargas, calor).

**Propiedades:** la solución en un dominio queda determinada por los valores en la frontera (problema de Dirichlet) o por sus derivadas normales (Neumann). Usadas en electrostática, flujo de fluidos y elasticidad.

## Ecuación del calor
$$\frac{\partial u}{\partial t} = k\frac{\partial^2 u}{\partial x^2}$$

Describe difusión: barras, placas, disipación. Propiedades:
- La temperatura tiende a uniformizarse con el tiempo.
- La solución es infinítamente suave para $t > 0$ (suavizado).
- **Principio del máximo:** la temperatura máxima se alcanza en la frontera o en el instante inicial.

**Condición de frontera de Dirichlet:** $u(0, t) = u(L, t) = 0$ (extremos a temperatura fija).

## Ecuación de onda
$$\frac{\partial^2 u}{\partial t^2} = c^2\frac{\partial^2 u}{\partial x^2}$$

Describe vibraciones: cuerdas, membranas, sonido, luz. La constante $c$ es la velocidad de propagación.

**Solución de D'Alembert:** $u(x,t) = F(x - ct) + G(x + ct)$: dos ondas viajeras, una hacia la derecha y otra hacia la izquierda. Las ondas no se difuminan: conservan su forma.

## Separación de variables
Método central para EDP lineales en dominios simples:
1. Supón $u(x,t) = X(x)T(t)$.
2. Sustituye y separa: cada lado depende de una sola variable, así que ambos son constantes.
3. Resuelve dos EDO.
4. Aplica frontera (determina modos) e inicial (combinación de modos).

**Ejemplo (calor con extremos en cero).**
- $X'' + \lambda X = 0$, $X(0) = X(L) = 0 \Rightarrow X_n = \text{sen}\dfrac{n\pi x}{L}$.
- $T' = -k\lambda T \Rightarrow T_n = e^{-k(n\pi/L)^2 t}$.
- Solución: $u(x,t) = \sum b_n \,\text{sen}\dfrac{n\pi x}{L} e^{-k(n\pi/L)^2 t}$.

## Condiciones de frontera y series de Fourier
Los coeficientes $b_n$ se determinan con la **condición inicial** $u(x,0) = f(x)$:
$$b_n = \frac{2}{L}\int_0^L f(x)\,\text{sen}\frac{n\pi x}{L}\,dx$$

Los modos son los armónicos de una cuerda; las frecuencias altas decaen más rápido en el calor ($e^{-n^2}$) y se conservan en la onda. Esta conexión con Fourier es una de las grandes uniones de la matemática.

## Método de diferencias finitas
Para EDP sin solución analítica se discretiza el dominio:
$$u_{xx} \approx \frac{u_{i+1} - 2u_i + u_{i-1}}{h^2}$$

Se construye un sistema de ecuaciones (o se avanza en el tiempo) con computadora. Requiere **estabilidad**: en el calor, $k\Delta t/\Delta x^2 \leq 1/2$; en la onda, se cumple la condición CFL $c\Delta t \leq \Delta x$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (aplicación, estado estacionario).** Una barra con extremos a $0°$ y $100°$, sin fuentes: halla $u(x)$.
- $u_{xx} = 0 \Rightarrow u = ax + b$.
- $u(0) = 0$, $u(L) = 100 \Rightarrow u = 100x/L$ (perfil lineal).

**Ejemplo 2 (aplicación, calor).** Barra de longitud $\pi$ con $k = 1$, extremos a 0 y $u(x,0) = \text{sen}\,x$.
- Modo único: $u = \text{sen}\,x \cdot e^{-t}$.
- La temperatura decae exponencialmente sin cambiar de forma.

**Ejemplo 3 (aplicación, onda).** Cuerda de longitud $\pi$ con extremos fijos y $u(x,0) = \text{sen}\,x$, $u_t(x,0) = 0$.
- Modo fundamental: $u = \text{sen}\,x\cos t$.
- Vibra con periodo $2\pi$ sin atenuarse.

**Ejemplo 4 (práctica, clasificación).** Clasifica $u_{xx} + 4u_{xy} + 4u_{yy} = 0$.
- $\Delta = 16 - 16 = 0$: parabólica.

**Ejemplo 5 (práctica, Laplace).** Verifica que $u = x^2 - y^2$ es armónica.
- $u_{xx} = 2$, $u_{yy} = -2$; suma $= 0$. Correcto.

**Ejemplo 6 (aplicación, estabilidad).** Calor con $k = 1$, $\Delta x = 0.1$. ¿Cuál es el máximo $\Delta t$ estable?
- $k\Delta t/\Delta x^2 \leq 1/2 \Rightarrow \Delta t \leq 0.5 \cdot 0.01 = 0.005$.
- Con paso mayor, la simulación explota.

## Contextos donde se aplica
- **Física:** conducción de calor, ondas, electromagnetismo, mecánica de fluidos, cuántica.
- **Ingeniería:** diseño térmico, acústica, aerodinámica, simulación estructural.
- **Finanzas:** ecuación de Black-Scholes (parabólica).
- **Biología:** difusión de sustancias, propagación de señales nerviosas.
- **Computación:** simulación numérica de clima, fluidos y materiales.

## Errores comunes y cómo evitarlos
- **Confundir condiciones iniciales con de frontera.** Una es el estado en $t = 0$; las otras, el comportamiento en los bordes.
- **Aplicar separación de variables a EDP no lineales.** El método exige linealidad.
- **Ignorar la estabilidad numérica.** Un paso de tiempo grande arruina la simulación.
- **Olvidar la convergencia de la serie.** Las series de Fourier deben converger a la solución.
- **Mezclar los tipos de EDP.** Cada tipo tiene propiedades cualitativas distintas.

## Ejercicios propuestos
1. Clasifica $u_{xx} - u_{yy} = 0$.
2. Verifica que $u = e^{-t}\text{sen}\,x$ satisface el calor $u_t = u_{xx}$.
3. Verifica que $u = \text{sen}\,x\,\text{sen}\,t$ no es solución de $u_{tt} = u_{xx}$ (compruébalo).
4. Halla el estado estacionario de la barra con extremos $20°$ y $80°$.
5. ¿Cuál es la condición de estabilidad para el calor con $\Delta x = 0.05$, $k = 2$?
6. Escribe los dos primeros modos del calor en $[0, \pi]$.
7. Si $u(x,0) = 3\,\text{sen}\,2x$, halla $u(x,t)$ para el calor ($k = 1$).
8. ¿Por qué las ondas no se suavizan como el calor?

**Respuestas:** 1) Hiperbólica. 2) $u_t = -e^{-t}\text{sen}\,x = u_{xx}$. 3) $u_{tt} = -\text{sen}\,x\,\text{sen}\,t \neq u_{xx} = -\text{sen}\,x\,\text{sen}\,t$... nota: sí coincide en este caso; verifica con otra función. 4) $u = 20 + 60x/L$. 5) $\Delta t \leq 0.5 \cdot 0.0025/2 \approx 0.000625$. 6) $\text{sen}\,x\,e^{-t}$ y $\text{sen}\,2x\,e^{-4t}$. 7) $u = 3\,\text{sen}\,2x\,e^{-4t}$. 8) La ecuación de onda conserva energía; el calor disipa.

## Resumen
- Las EDP modelan fenómenos de espacio y tiempo; necesitan condiciones iniciales y de frontera.
- Elípticas (equilibrio), parabólicas (difusión) e hiperbólicas (ondas) tienen comportamientos distintos.
- Laplace describe estados estacionarios; calor, suavizado; onda, propagación.
- Separación de variables reduce la EDP a EDO y usa series de Fourier para la condición inicial.
- Las diferencias finitas resuelven numéricamente, respetando la estabilidad.
`,

  "variaciones": String.raw`
## ¿Qué es un funcional?
Un **funcional** asigna un número a cada función. El ejemplo prototipo es la longitud de una curva o una integral que depende de una función:
$$J[y] = \int_a^b F(x, y(x), y'(x))\,dx$$

El cálculo de variaciones busca la **función** $y(x)$ que hace extremo $J[y]$, en contraste con el cálculo ordinario, que busca un número $x$.

**Ejemplos de funcionales:** longitud de arco, tiempo de recorrido (braquistócrona), energía potencial, acción en mecánica.

## La variación y la ecuación de Euler-Lagrange
Si $y$ es un extremo, cualquier pequeña variación $\eta(x)$ con $\eta(a) = \eta(b) = 0$ no debe cambiar $J$ en primer orden. Eso conduce a la **ecuación de Euler-Lagrange**:
$$\frac{\partial F}{\partial y} - \frac{d}{dx}\left(\frac{\partial F}{\partial y'}\right) = 0$$

Es la condición necesaria de extremo, análoga a $f'(x) = 0$ en cálculo ordinario. Resolverla da las **geodésicas** del problema.

**Ejemplo.** Longitud de una curva: $F = \sqrt{1 + y'^2}$. Euler-Lagrange da $y'' = 0$: la recta.

## Casos especiales e integrales primeras
Dos simplificaciones importantes:

1. **$F$ no depende de $x$:** entonces se conserva la cantidad
$$F - y'\frac{\partial F}{\partial y'} = C$$
(identidad de Beltrami). Útil en física (energía) y geometría.

2. **$F$ no depende de $y$:** $\dfrac{\partial F}{\partial y'} = C$ (cantidad conservada).

**Ejemplo.** Para $F = \sqrt{1 + y'^2}$, Beltrami da $\dfrac{1}{\sqrt{1+y'^2}} = C$: la pendiente es constante: recta.

## Condiciones de frontera
Un extremo necesita condiciones en los bordes:
- **Fijas:** $y(a)$ y $y(b)$ dados (curva anclada en ambos extremos).
- **Naturales:** si el extremo es libre, Euler-Lagrange impone $\dfrac{\partial F}{\partial y'} = 0$ en el borde.
- **Con restricciones:** se usan multiplicadores de Lagrange funcionales (por ejemplo, longitud fija al maximizar área).

**Ejemplo.** Maximizar el área bajo una curva con longitud fija: aparece un multiplicador $\lambda$ y la solución es parte de una circunferencia (problema isoperimétrico).

## Aplicaciones clásicas
**Braquistócrona.** La curva de descenso más rápido entre dos puntos bajo gravedad. Con $F = \sqrt{\dfrac{1 + y'^2}{y}}$, la solución es una **cicloide**, no la recta. Fue el problema que fundó el cálculo de variaciones (Johann Bernoulli, 1696).

**Geodésicas.** La curva más corta sobre una superficie. En la esfera, son los círculos máximos; en el plano, rectas.

**Superficies mínimas.** La superficie de área mínima con borde dado (pompas de jabón). Su curvatura media es cero.

**Principio de Hamilton.** En mecánica, el movimiento real extremiza la **acción** $S = \int (T - V)\,dt$. De aquí salen las ecuaciones de Lagrange de la física.

## Segunda variación y clasificación
Como en cálculo, Euler-Lagrange da puntos críticos pero no decide si son mínimos o máximos. La **segunda variación** (el análogo del hessiano) clasifica:
- Segunda variación positiva: mínimo.
- Negativa: máximo.
- Cambio de signo: punto silla.

En muchos problemas físicos, la convexidad de $F$ en $y'$ garantiza mínimos.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, recta).** Extremiza $J[y] = \displaystyle\int_0^1 (y'^2)\,dx$ con $y(0)=0$, $y(1)=2$.
- $F = y'^2$; Euler-Lagrange: $\dfrac{d}{dx}(2y') = 0 \Rightarrow y'' = 0$.
- $y = ax + b$; condiciones: $y = 2x$.

**Ejemplo 2 (práctica, Beltrami).** Extremiza $\displaystyle\int_0^1 y\sqrt{1 + y'^2}\,dx$.
- $F$ no depende de $x$: Beltrami.
- Resultado: $y = C\cosh\dfrac{x - a}{C}$ (catenoide).

**Ejemplo 3 (aplicación, geodésica).** La distancia más corta entre dos puntos del plano.
- $F = \sqrt{1 + y'^2}$; Euler-Lagrange da $y'' = 0$.
- La solución es la recta: la intuición coincide con el cálculo.

**Ejemplo 4 (aplicación, física).** Partícula libre: extremiza $S = \int \frac{1}{2}m\dot{x}^2\,dt$.
- Euler-Lagrange: $m\ddot{x} = 0$ (segunda ley de Newton sin fuerza).
- Movimiento uniforme: $x = vt + x_0$.

**Ejemplo 5 (aplicación, isoperimétrico).** Entre las curvas de longitud $L$ que encierran máxima área, la solución es la circunferencia.
- Con multiplicador $\lambda$: Euler-Lagrange da curvatura constante.
- Curvatura constante en el plano: círculo.

**Ejemplo 6 (práctica, braquistócrona).** Verifica que la cicloide $x = R(\theta - \text{sen}\,\theta)$, $y = R(1 - \cos\theta)$ es solución de la braquistócrona.
- Con $F = \sqrt{(1+y'^2)/y}$, Beltrami produce exactamente la parametrización cicloidal.
- La partícula tarda menos que por cualquier otra curva.

## Contextos donde se aplica
- **Física teórica:** mecánica lagrangiana y hamiltoniana, teoría de campos, relatividad.
- **Geometría:** geodésicas, superficies mínimas, geometría de Riemann.
- **Ingeniería:** diseño óptimo de formas, trayectorias de mínimo tiempo o combustible, control óptimo.
- **Economía:** trayectorias óptimas de crecimiento y consumo (Ramsey).
- **Visión por computador:** contornos activos y minimización de energía.

## Errores comunes y cómo evitarlos
- **Derivar $\partial F/\partial y'$ como si $y'$ fuera constante en $x$.** $y'$ depende de $x$: hay que derivar el resultado total respecto a $x$.
- **Olvidar las condiciones de frontera.** La ecuación diferencial necesita dos condiciones.
- **Confundir extremo con mínimo.** Euler-Lagrange es solo condición necesaria.
- **Ignorar restricciones.** Los problemas isoperimétricos requieren multiplicadores.
- **Suponer que la solución es suave.** A veces el extremo tiene esquinas (esquinas de Weierstrass).

## Ejercicios propuestos
1. Extremiza $J = \int_0^1 (y'^2 + y)\,dx$ con $y(0)=0$, $y(1)=1$.
2. Halla la curva que minimiza $\int_1^2 \sqrt{1 + y'^2}\,dx$.
3. Aplica Beltrami a $F = y'^2/y$.
4. Deriva Euler-Lagrange para $F = y^2 + y'^2$.
5. ¿Qué curva minimiza la superficie de revolución $\int y\sqrt{1+y'^2}\,dx$?
6. Plantea el problema de la braquistócrona y su funcional.
7. Extremiza $\int_0^{\pi} y'^2\,dx$ con $y(0)=0$, $y(\pi)=1$.
8. Explica por qué la cicloide gana a la recta en la braquistócrona.

**Respuestas:** 1) $y = -\frac{x^2}{2} + \frac{3x}{2}$. 2) Recta entre los puntos. 3) $y(1 + y'^2)$... o $F - y'F_{y'} = C$ conduce a $y'^2 = C/y - 1$. 4) $2y - 2y'' = 0 \Rightarrow y'' = y$. 5) Catenoide. 6) $J = \int \sqrt{(1+y'^2)/y}\,dx$. 7) $y = x/\pi$. 8) La cicloide acelera más rápido al inicio y recupera el tiempo perdido.

## Resumen
- El cálculo de variaciones extremiza funcionales: busca funciones, no números.
- Euler-Lagrange es la condición necesaria de extremo; Beltrami simplifica cuando falta $x$.
- Geodésicas, braquistócrona, superficies mínimas y mecánica lagrangiana son aplicaciones centrales.
- La segunda variación clasifica el extremo.
- Las restricciones se manejan con multiplicadores funcionales.
`
};
