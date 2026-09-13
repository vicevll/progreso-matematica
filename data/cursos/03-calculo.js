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
## ¿Qué es la derivada? Una idea intuitiva

Imagina que haces un viaje en automóvil. Recorres $240$ kilómetros en $3$ horas. Para resumir "a qué velocidad fuiste" puedes dividir la distancia entre el tiempo: $240 \div 3 = 80$ kilómetros por hora. Esa es la **velocidad promedio** de todo el viaje. Pero el velocímetro del auto no marcó $80$ todo el tiempo: en algunos tramos ibas a $100$, en otros a $60$, y en un instante cualquiera marcaba, por ejemplo, $73$ km/h. Esa velocidad instantánea, la que aparece en un momento preciso, es la idea que captura la derivada. La derivada es el velocímetro de las funciones.

Para pasar de la velocidad promedio a la instantánea hacen falta dos ingredientes: una función que relacione dos cantidades y un proceso de acercamiento llamado límite. Veamos cada pieza con calma, porque cada letra y cada símbolo tienen un papel.

**Qué es una función y qué significa $f(x)$.** Una función es una regla que asigna a cada número de entrada un único número de salida. La escribimos $f(x)$ y se lee "efe de equis". En esa escritura: $f$ es el nombre de la regla (podría llamarse $g$, $h$ o como queramos); $x$ es la entrada, es decir, la variable independiente, el número que elegimos libremente; y $f(x)$ es la salida que la regla produce para esa entrada, llamada variable dependiente porque depende del valor de $x$. Si la regla es "elevar al cuadrado" escribimos $f(x) = x^2$: si entra $x = 3$, sale $f(3) = 9$; si entra $x = 5$, sale $f(5) = 25$. En un gráfico, cada par $(x, f(x))$ es un punto de la curva.

**Qué es un cambio pequeño y qué significa $h$.** Para medir cómo cambia la función, comparamos su valor en dos entradas cercanas: $x$ y $x + h$. La letra $h$ representa el **incremento**, un número pequeño que sumamos a la entrada (positivo si avanzamos, negativo si retrocedemos). La expresión $f(x+h)$ significa "el valor de la regla calculado en la entrada $x+h$". Por ejemplo, con $f(x) = x^2$ y $x = 3$: si $h = 0.1$, entonces $f(3 + 0.1) = 3.1^2 = 9.61$.

**La razón de cambio promedio.** El cambio de la salida es $f(x+h) - f(x)$ (cuánto subió o bajó la función) y el cambio de la entrada es $h$. El cociente

$$\frac{f(x+h)-f(x)}{h}$$

se llama **cociente incremental** o razón de cambio promedio, y responde a la pregunta: ¿cuánto cambia la salida por cada unidad que cambia la entrada? En el ejemplo del viaje, es la velocidad promedio. Si usamos la letra griega mayúscula $\Delta$ (delta), que siempre significa "cambio" o "diferencia", entonces $\Delta x = h$ es el cambio en la entrada y $\Delta y = f(x+h)-f(x)$ es el cambio en la salida. Así, el cociente incremental se escribe también $\dfrac{\Delta y}{\Delta x}$.

Veamos qué pasa con la función $f(x) = x^2$ en el punto $x = 3$ cuando $h$ se hace cada vez más pequeño:

| $h$ | $f(3+h)$ | Cociente $\dfrac{f(3+h)-f(3)}{h}$ |
|---|---|---|
| $1$ | $16$ | $7$ |
| $0.5$ | $12.25$ | $6.5$ |
| $0.1$ | $9.61$ | $6.1$ |
| $0.01$ | $9.0601$ | $6.01$ |
| $0.001$ | $9.006001$ | $6.001$ |

Los cocientes se acercan a $6$. En lenguaje de límites escribimos:

$$\lim_{h\to 0}\frac{(3+h)^2-9}{h}=6$$

**Qué es un límite y qué significa $h \to 0$.** El símbolo $\lim$ se lee "límite" y describe el valor al que se acerca una expresión. La escritura $h \to 0$ se lee "h tiende a cero": significa hacer $h$ cada vez más pequeño, tan pequeño como queramos, sin llegar nunca a valer exactamente $0$. Es fundamental que $h$ no sea $0$ porque el cociente tendría denominador cero, y dividir entre cero no está permitido. El límite mira el comportamiento **alrededor** del punto, no el valor en el punto.

**La definición de la derivada.** Al tomar el límite del cociente incremental cuando $h \to 0$ obtenemos la razón de cambio instantánea, que es la derivada:

$$f'(x) = \lim_{h \to 0}\frac{f(x+h)-f(x)}{h}$$

La expresión $f'(x)$ se lee "efe prima de equis": la prima (el apóstrofo) indica "derivada". El resultado es una **nueva función**: a cada valor de $x$ le asigna la pendiente o razón de cambio instantánea en ese punto. El proceso de calcularla se llama **derivar**, y cuando existe decimos que la función es **derivable** (o diferenciable) en ese punto.

**Las tres lecturas de la derivada.**

- **Geométrica:** si dibujamos la curva $y = f(x)$, el cociente incremental es la pendiente de la recta **secante** que pasa por los puntos $(x, f(x))$ y $(x+h, f(x+h))$. Al hacer $h \to 0$, el segundo punto se desliza hacia el primero y la secante se convierte en la **recta tangente**. Entonces $f'(x)$ es la pendiente de la recta tangente a la curva en el punto $(x, f(x))$.
- **Física:** si $s(t)$ es la posición de un objeto en el instante $t$, entonces $s'(t)$ es la velocidad instantánea, y el velocímetro la muestra.
- **Económica:** si $C(x)$ es el costo de producir $x$ unidades, $C'(x)$ es el costo marginal: lo que cuesta aproximadamente producir una unidad más.

**Un primer cálculo completo.** Calculemos la derivada de $f(x) = x^2$ desde la definición. Primero escribimos $f(x+h) = (x+h)^2$, luego armamos el cociente y simplificamos:

$$f'(x) = \lim_{h \to 0}\frac{(x+h)^2-x^2}{h} = \lim_{h \to 0}\frac{x^2+2xh+h^2-x^2}{h} = \lim_{h \to 0}\frac{2xh+h^2}{h}$$

Como $h \neq 0$ mientras tomamos el límite, podemos simplificar el factor $h$:

$$f'(x) = \lim_{h \to 0}\frac{h(2x+h)}{h} = \lim_{h \to 0}(2x+h) = 2x$$

Así, $f'(x) = 2x$. Ocurre algo notable: la fórmula funciona para cualquier $x$. En $x = 3$ la pendiente es $f'(3) = 6$, exactamente el valor al que se acercaba la tabla. En $x = 10$, la pendiente es $20$: la curva sube más rápido cuanto más a la derecha estamos.

## La notación y cómo leerla

No existe una única forma de escribir la derivada; hay varias, cada una cómoda para cierto contexto. Conocerlas todas es parte de aprender cálculo, porque los libros y los profesores las mezclan. Aquí está cada una con su lectura y su significado.

**Notación de Lagrange: $f'(x)$.** Se lee "efe prima de equis" y es la más usada en matemática general. La prima apostrofada indica "derivada de". Cuando queremos la derivada evaluada en un número concreto $a$, escribimos $f'(a)$, que es un **número** (la pendiente en ese punto), no una función. No confundas $f'(a)$ con $f(a)$: $f(a)$ es el valor de la función (la altura de la curva) y $f'(a)$ es la pendiente de la tangente.

**Notación de Leibniz: $\dfrac{dy}{dx}$.** Se lee "derivada de y respecto de x" (o "de i griega, de equis"). Aquí $y$ es la variable dependiente, escrita como $y = f(x)$; $dx$ representa un cambio infinitesimalmente pequeño en $x$; $dy$, el cambio correspondiente en $y$. No es una fracción corriente, sino un símbolo que recuerda el cociente $\Delta y / \Delta x$ del que proviene. Aun así, se comporta como una fracción en muchos cálculos (por ejemplo, en la regla de la cadena y en razones relacionadas), y esa es su mayor ventaja. El símbolo $\dfrac{d}{dx}$ por sí solo se lee "de sobre de equis" y actúa como un **operador**: ordena "deriva lo que venga a continuación respecto de $x$". Por ejemplo, $\dfrac{d}{dx}(x^3) = 3x^2$.

**Notación de Newton: $\dot{y}$.** Un punto sobre la letra se lee "i griega punto" e indica derivada **respecto del tiempo**. Es típica de la física: si $s$ es la posición, $\dot{s}$ es la velocidad y $\ddot{s}$ (dos puntos) es la aceleración.

**Notación de Euler: $Df$ o $D_x f$.** La letra $D$ mayúscula también representa al operador derivada. Se usa en textos de análisis y en ecuaciones diferenciales. En esta notación $D_x f$ significa "derivar $f$ respecto de $x$".

Esta tabla resume cómo se lee cada símbolo y qué significa:

| Símbolo | Se lee | Qué significa |
|---|---|---|
| $f'(x)$ | efe prima de equis | derivada de $f$ en $x$; es una función |
| $f'(a)$ | efe prima de a | número: pendiente de la tangente en $x=a$ |
| $\dfrac{dy}{dx}$ | derivada de y respecto de x | la derivada cuando $y=f(x)$ |
| $\dot{y}$ | i griega punto | derivada de $y$ respecto del tiempo |
| $\dfrac{d}{dx}$ | de sobre de equis | operador que deriva lo que sigue |
| $\Delta x$ | delta equis | un cambio finito en la entrada |
| $\Delta y$ | delta i griega | el cambio correspondiente en la salida |
| $h \to 0$ | h tiende a cero | acercar $h$ a cero sin llegar a cero |
| $f''(x)$ | efe biprima de equis | derivada segunda de $f$ |

**Cómo leer en voz alta la definición.** La fórmula

$$f'(x) = \lim_{h \to 0}\frac{f(x+h)-f(x)}{h}$$

se lee: "efe prima de equis es el límite, cuando $h$ tiende a cero, de efe de equis más $h$, menos efe de equis, todo dividido por $h$". Cuando puedas leerla así con naturalidad, ya no será una sopa de símbolos.

**Una advertencia útil.** En la notación de Leibniz, $\dfrac{dy}{dx}$ **no** significa $d$ por $y$ dividido por $d$ por $x$. La $d$ no es un número ni una variable: es parte del símbolo que indica "cambio infinitesimal". Del mismo modo, en $f'(x)$ la prima no se multiplica por nada: es una marca que distingue la función derivada de la función original.

## Definición formal paso a paso

Ya tenemos la definición. Ahora la usaremos como una receta de cinco pasos que funciona siempre, aunque a veces el álgebra sea pesada. Los pasos son:

1. **Calcula $f(x+h)$.** Reemplaza cada aparición de $x$ en la fórmula de $f$ por la expresión $x+h$.
2. **Resta $f(x)$.** Forma el numerador $f(x+h)-f(x)$ y simplifica lo que se pueda.
3. **Divide entre $h$.** Construye el cociente incremental completo.
4. **Simplifica para eliminar la $h$ del denominador.** Factoriza $h$, multiplica por el conjugado o busca denominador común, según el caso.
5. **Toma el límite $h \to 0$.** Al final reemplaza $h$ por $0$ en la expresión ya simplificada.

**Ejemplo 1: función constante.** Sea $f(x) = c$, donde $c$ es un número fijo (por ejemplo $7$). Entonces $f(x+h) = c$ también, porque la regla produce siempre el mismo valor. El cociente es

$$\frac{f(x+h)-f(x)}{h} = \frac{c-c}{h} = 0$$

y por lo tanto $f'(x) = 0$. Toda función constante tiene derivada cero: su gráfico es una recta horizontal y la pendiente de una horizontal es $0$.

**Ejemplo 2: función afín.** Sea $f(x) = 3x + 2$. Primero, $f(x+h) = 3(x+h)+2 = 3x+3h+2$. Restamos:

$$f(x+h)-f(x) = (3x+3h+2)-(3x+2) = 3h$$

Dividimos entre $h$: el cociente es $3$. El límite de una constante es esa misma constante, así que $f'(x) = 3$. Tiene sentido: la gráfica es una recta de pendiente $3$.

**Ejemplo 3: cuadrática.** Sea $f(x) = x^2$. Ya lo hicimos, pero repitámoslo con el orden de la receta:

$$f'(x) = \lim_{h \to 0}\frac{(x+h)^2-x^2}{h} = \lim_{h \to 0}\frac{x^2+2xh+h^2-x^2}{h} = \lim_{h \to 0}\frac{h(2x+h)}{h} = \lim_{h \to 0}(2x+h) = 2x$$

**Ejemplo 4: recíproca.** Sea $f(x) = \dfrac{1}{x}$, con $x \neq 0$. Calculamos $f(x+h) = \dfrac{1}{x+h}$. La diferencia de fracciones se resuelve con denominador común:

$$f(x+h)-f(x) = \frac{1}{x+h}-\frac{1}{x} = \frac{x-(x+h)}{x(x+h)} = \frac{-h}{x(x+h)}$$

Al dividir entre $h$:

$$\frac{f(x+h)-f(x)}{h} = \frac{-h}{x(x+h)} \cdot \frac{1}{h} = \frac{-1}{x(x+h)}$$

Cuando $h \to 0$, el denominador $x(x+h)$ tiende a $x \cdot x = x^2$. Por lo tanto:

$$f'(x) = -\frac{1}{x^2}$$

La derivada es negativa para todo $x \neq 0$: la función $\dfrac{1}{x}$ es decreciente en cada tramo de su dominio.

**Cuándo NO existe la derivada.** La derivada es un límite, y hay límites que no existen. Geometría y fórmulas se alinean:

- **Esquinas o picos.** La función $f(x) = |x|$ (valor absoluto de $x$) es continua en $x=0$, pero su gráfico forma una esquina. Por la izquierda el cociente incremental tiende a $-1$ y por la derecha a $+1$; como no coinciden, el límite no existe y $f'(0)$ no está definida.
- **Tangente vertical.** En $f(x) = \sqrt[3]{x}$ el cociente crece sin tope cerca de $0$: la recta tangente sería vertical y no tiene pendiente finita.
- **Discontinuidades.** Si la función da un salto o tiene un hueco, tampoco puede tener derivada allí.

De hecho, existe una regla general: **si una función es derivable en un punto, entonces es continua en ese punto**. El recíproco es falso, como muestra el valor absoluto. La continuidad es un requisito mínimo, pero no alcanza para derivar.

## Reglas básicas (con su justificación)

Calcular cada derivada desde la definición sería agotador. Por suerte, unas pocas reglas permiten derivar casi cualquier función combinando piezas. Lo importante no es solo memorizarlas: conviene entender por qué funcionan, porque así se recuerdan mejor y se usan con criterio.

**Regla de la constante: $(c)' = 0$.** Si $c$ es un número fijo, la función $f(x) = c$ no cambia nunca: $f(x+h) = c$ y el numerador es cero. Gráficamente es una recta horizontal, cuya pendiente es $0$.
Ejemplo: la derivada de $12$ es $0$.

**Regla de la identidad: $(x)' = 1$.** Para $f(x) = x$ se tiene $f(x+h)-f(x) = h$, y el cociente es $1$. La recta $y = x$ tiene pendiente $1$, como esperábamos.

**Regla de la potencia: $(x^n)' = n\,x^{n-1}$.** Esta es la regla más utilizada. Dice: baja el exponente como factor y resta uno al exponente. Funciona para todo exponente real $n$ donde la expresión tenga sentido, incluidos negativos y fracciones. La justificación para exponentes naturales usa el desarrollo del binomio:

$$(x+h)^n = x^n + n\,x^{n-1}h + (\text{términos con } h^2, h^3, \ldots)$$

Al restar $x^n$, dividir entre $h$ y tomar el límite, todos los términos que contienen $h$ desaparecen y queda exactamente $n\,x^{n-1}$.
Ejemplos: $(x^5)' = 5x^4$; $(x^{10})' = 10x^9$; y con exponentes no naturales, usando que $x^{-3} = \dfrac{1}{x^3}$: $(x^{-3})' = -3x^{-4} = -\dfrac{3}{x^4}$; también $(\sqrt{x})' = (x^{1/2})' = \dfrac{1}{2}x^{-1/2} = \dfrac{1}{2\sqrt{x}}$.

**Regla del múltiplo constante: $(c\,f)' = c\,f'$.** Un factor numérico fijo no participa en el cambio; solo escala el resultado. Si estiras una gráfica verticalmente multiplicándola por $3$, todas las pendientes quedan multiplicadas por $3$. Ejemplo: $(7x^3)' = 7 \cdot 3x^2 = 21x^2$.

**Regla de la suma y la resta: $(f \pm g)' = f' \pm g'$.** La derivada reparte sobre sumas y restas porque el cambio total es la suma de los cambios. Se puede derivar término a término. Ejemplo: $(5x^3 - 2x + 7)' = 15x^2 - 2$, porque la derivada de $7$ es $0$.

**Regla del producto: $(f\,g)' = f'\,g + f\,g'$.** La derivada de un producto **no** es el producto de las derivadas. La justificación viene de un rectángulo: imagina un rectángulo de lados $f$ y $g$, con área $f g$. Si la entrada cambia un poco, $f$ cambia a $f + \Delta f$ y $g$ a $g + \Delta g$. El área nueva es

$$(f+\Delta f)(g+\Delta g) = f g + f\,\Delta g + g\,\Delta f + \Delta f\,\Delta g$$

El aumento de área es $f\,\Delta g + g\,\Delta f + \Delta f\,\Delta g$. Al dividir entre $h$ y hacer $h \to 0$, el último término tiene un factor $h$ adicional y desaparece, mientras los otros dos se convierten en $f g'$ y $g f'$. Por eso la regla se lee en voz alta: "primera por derivada de la segunda, más segunda por derivada de la primera".
Ejemplo: $(x^2 e^x)' = (x^2)'e^x + x^2(e^x)' = 2x\,e^x + x^2 e^x = e^x(x^2+2x)$.

**Regla del cociente.** Para $g(x) \neq 0$:

$$\left(\frac{f}{g}\right)' = \frac{f'\,g - f\,g'}{g^2}$$

El numerador es "derivada de arriba por abajo, menos arriba por derivada de abajo", y todo va dividido por "abajo al cuadrado". Se deduce de la regla del producto escribiendo $f = \dfrac{f}{g}\cdot g$ y despejando. Un error típico es invertir el orden o equivocar el signo: el término con la derivada del numerador va primero y con signo positivo.
Ejemplo: $\left(\dfrac{x}{x+1}\right)' = \dfrac{1\cdot(x+1) - x\cdot 1}{(x+1)^2} = \dfrac{1}{(x+1)^2}$.

**Tabla de derivadas notables.** Estas fórmulas conviene tenerlas a mano. Antes de la tabla, tres símbolos nuevos: el número $e$ es una constante irracional especial, $e \approx 2.71828$, la base del crecimiento continuo; $\ln x$ es el logaritmo natural, es decir, el logaritmo en base $e$; y $\sec x = \dfrac{1}{\cos x}$ es la secante. Además, en cálculo las funciones trigonométricas se miden en radianes.

| Función | Derivada | Comentario |
|---|---|---|
| $e^x$ | $e^x$ | la función es su propia derivada: crece a un ritmo igual a su valor |
| $a^x$ | $a^x \ln a$ | generaliza el caso anterior; con $a=e$ queda $e^x$ |
| $\ln x$ | $\dfrac{1}{x}$ | válida para $x > 0$ |
| $\text{sen}\,x$ | $\cos x$ | el ciclo de las trigonométricas |
| $\cos x$ | $-\text{sen}\,x$ | aparece el signo menos |
| $\tan x$ | $\sec^2 x$ | o también $1/\cos^2 x$ |
| $\arcsin x$ | $\dfrac{1}{\sqrt{1-x^2}}$ | derivable en $-1 < x < 1$ |
| $\arctan x$ | $\dfrac{1}{1+x^2}$ | definida para todo $x$ |

**Ejemplos combinados.** Con las reglas anteriores ya podemos derivar mucho:

- $f(x) = 5x^3 - 2x + 7 \Rightarrow f'(x) = 15x^2 - 2$.
- $f(x) = x^2 e^x \Rightarrow f'(x) = e^x(x^2 + 2x)$ (producto).
- $f(x) = \dfrac{x}{x+1} \Rightarrow f'(x) = \dfrac{1}{(x+1)^2}$ (cociente).
- $f(x) = 3\,\text{sen}\,x - 2\ln x \Rightarrow f'(x) = 3\cos x - \dfrac{2}{x}$ (suma y notables).

## Regla de la cadena

Hasta ahora derivamos funciones "planas". Pero la mayoría de las funciones del mundo real son **composiciones**: una regla aplicada dentro de otra. Por ejemplo, $e^{3x}$ significa "primero multiplica por $3$, luego aplica la exponencial"; $\text{sen}(x^2)$ significa "primero eleva al cuadrado, luego aplica el seno". La escritura $f(g(x))$ indica exactamente eso: primero actúa $g$ sobre $x$, y al resultado le aplica $f$.

La regla que resuelve estos casos es la **regla de la cadena**:

$$(f(g(x)))' = f'(g(x)) \cdot g'(x)$$

Se lee en voz alta: "derivada de la de afuera, evaluada en la de adentro, por la derivada de la de adentro". O, más corto: "deriva la capa externa y multiplica por la derivada de la capa interna".

**Por qué se multiplica.** Piensa en dos engranajes. Si la pieza interna cambia $3$ veces más rápido que $x$, y la externa cambia $5$ veces más rápido que la interna, entonces la externa cambia $5 \times 3 = 15$ veces más rápido que $x$. Las razones de cambio se multiplican. En notación de Leibniz, con $y = f(u)$ y $u = g(x)$:

$$\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}$$

Y aquí sí el símbolo se comporta como una fracción: las $du$ parecen cancelarse. Esa es la razón de ser de la notación de Leibniz.

**Ejemplos resueltos paso a paso.**

- $(\text{sen}(5x))' = \cos(5x) \cdot 5 = 5\cos(5x)$. La capa externa es seno, cuya derivada es coseno; la interna es $5x$, cuya derivada es $5$.
- $(e^{4x})' = e^{4x}\cdot 4 = 4e^{4x}$. La exponencial es su propia derivada; la interna aporta el $4$.
- $(\ln(2x^3+1))' = \dfrac{1}{2x^3+1}\cdot 6x^2 = \dfrac{6x^2}{2x^3+1}$. La derivada del logaritmo es uno sobre su argumento, por la derivada del argumento.
- $((3x^2+1)^5)' = 5(3x^2+1)^4 \cdot 6x = 30x(3x^2+1)^4$. Aquí la capa externa es la potencia quinta y la interna es $3x^2+1$.
- $(\sqrt{x^2+9})' = \dfrac{1}{2\sqrt{x^2+9}}\cdot 2x = \dfrac{x}{\sqrt{x^2+9}}$. La raíz cuadrada es una potencia de exponente $1/2$.
- $(e^{-x}\,\text{sen}\,x)' = e^{-x}(\cos x - \text{sen}\,x)$. Se combinan producto y cadena: la derivada de $e^{-x}$ es $-e^{-x}$ y la de $\text{sen}\,x$ es $\cos x$.
- $((\text{sen}\,x)^2)' = 2\,\text{sen}\,x \cdot \cos x = \text{sen}(2x)$. La potencia externa y el seno interno, más una identidad trigonométrica conocida.

**Un primo cercano: la derivación implícita.** A veces la relación entre $x$ e $y$ no viene despejada, como en $x^2 + y^2 = 25$. Aun así, pensamos que $y$ depende de $x$ y usamos la regla de la cadena en cada aparición de $y$: la derivada de $y^2$ es $2y \cdot \dfrac{dy}{dx}$. Derivando ambos lados:

$$2x + 2y\,\frac{dy}{dx} = 0 \quad\Rightarrow\quad \frac{dy}{dx} = -\frac{x}{y}$$

Ese $\dfrac{dy}{dx}$ que aparece multiplicando es precisamente la regla de la cadena cuando la variable interna es $y$. La derivación implícita es la herramienta estándar cuando despejar $y$ es difícil o imposible.

**Errores típicos con la cadena.** Olvidar multiplicar por la derivada interna (escribir $(\text{sen}(5x))' = \cos(5x)$, sin el $5$) es el error número uno del cálculo diferencial. También es incorrecto derivar una suma de capas como si fuera un producto: la linealidad se aplica a sumas, no a composiciones.

## Derivadas de orden superior

La derivada de $f$ es una función nueva, $f'$. Si esa función también es derivable, podemos derivarla otra vez y obtener la **derivada segunda**, que se escribe $f''(x)$ y se lee "efe biprima de equis". Repitiendo el proceso aparecen $f'''(x)$ (tercera derivada), $f^{(4)}(x)$ (cuarta, con el número entre paréntesis), y en general $f^{(n)}(x)$, la **n-ésima derivada**. En notación de Leibniz se escribe $\dfrac{d^2y}{dx^2}$ para la segunda y $\dfrac{d^3y}{dx^3}$ para la tercera; el superíndice cuenta cuántas veces se derivó.

**Interpretación física.** Si $s(t)$ es la posición de un objeto en el tiempo, entonces:

- $s'(t)$ es la velocidad (razón de cambio de la posición);
- $s''(t)$ es la aceleración (razón de cambio de la velocidad).

En un cuerpo que cae, la posición es $h(t) = 100 - 4.9t^2$. Entonces $h'(t) = -9.8t$ y $h''(t) = -9.8$: la aceleración es constante, el conocido valor de la gravedad.

**Cálculo de una cadena de derivadas.** Para $f(x) = x^3 - 3x^2$:

$$f'(x) = 3x^2 - 6x, \qquad f''(x) = 6x - 6, \qquad f'''(x) = 6, \qquad f^{(4)}(x) = 0$$

A partir de la cuarta derivada todo se anula, porque derivar una constante da cero.

Otro ejemplo con ciclo infinito: para $f(x) = \text{sen}\,x$,

$$f'(x) = \cos x, \quad f''(x) = -\text{sen}\,x, \quad f'''(x) = -\cos x, \quad f^{(4)}(x) = \text{sen}\,x$$

y el patrón se repite cada cuatro derivadas. Para $f(x) = e^{2x}$ en cambio, $f^{(n)}(x) = 2^n e^{2x}$.

**Significado de la segunda derivada.** La segunda derivada mide cómo cambia la pendiente. Si $f'' > 0$, la pendiente va aumentando y la curva se abre hacia arriba (pensemos en una taza). Si $f'' < 0$, la pendiente va disminuyendo y la curva se abre hacia abajo (pensemos en una montaña). Esta idea gobierna la concavidad y la clasificación de extremos, como veremos más adelante.

**Una advertencia de notación.** No confundas $f^{(2)}(x)$ (segunda derivada) con $f(x)^2$ o $f^2(x)$ (la función elevada al cuadrado). La potencia de una función y su derivada de orden superior son cosas completamente distintas.

## Recta tangente y aproximación

Ya sabemos que $f'(a)$ es la pendiente de la recta tangente a la curva en el punto $(a, f(a))$. Con esa pendiente y ese punto se escribe la ecuación de la recta usando la forma punto-pendiente. Si $(x, y)$ es un punto cualquiera de la recta, entonces:

$$y - f(a) = f'(a)(x-a)$$

Cada símbolo: $a$ es la coordenada horizontal del punto de tangencia; $f(a)$ es la altura de la curva allí; $f'(a)$ es la pendiente; $x$ e $y$ son las coordenadas variables de la recta. Despejando $y$ se obtiene $y = f(a) + f'(a)(x-a)$.

**Ejemplo.** Hallemos la tangente a $y = x^2$ en $x = 3$. La función es $f(x) = x^2$, su derivada es $f'(x) = 2x$. Entonces $f(3) = 9$ y $f'(3) = 6$. La ecuación es

$$y - 9 = 6(x-3) \quad\Rightarrow\quad y = 6x - 9$$

Verificación: en $x = 3$ la recta da $y = 6\cdot 3 - 9 = 9$; pasa por $(3, 9)$, el punto de la curva.

**Aproximación lineal.** Cerca del punto de tangencia, la curva y su tangente son casi indistinguibles: si hacemos mucho zoom en el gráfico, la curva parece una recta. Esa observación se convierte en una herramienta numérica:

$$f(x) \approx f(a) + f'(a)(x-a)$$

Se lee: "para $x$ cercano a $a$, el valor de la función es aproximadamente el valor en $a$ más la pendiente por la distancia recorrida". Es la receta para estimar raíces, exponenciales y logaritmos sin calculadora.

**Ejemplo: estimar $\sqrt{9.1}$.** Elegimos $f(x) = \sqrt{x}$ y el punto cercano conocido $a = 9$, porque $f(9) = 3$ es exacto. La derivada es $f'(x) = \dfrac{1}{2\sqrt{x}}$, así que $f'(9) = \dfrac{1}{6}$. Entonces:

$$\sqrt{9.1} \approx 3 + \frac{1}{6}(9.1-9) = 3 + \frac{0.1}{6} \approx 3.0167$$

El valor real es $3.01662\ldots$: el error es de apenas cinco cienmilésimas. La aproximación es buena porque $9.1$ está muy cerca de $9$.

**Ejemplo: estimar $\ln(1.02)$.** Con $f(x) = \ln x$ y $a = 1$: $f(1) = 0$ y $f'(1) = 1$. Entonces $\ln(1.02) \approx 0 + 1\cdot(0.02) = 0.02$. El valor real es $0.0198\ldots$

**Diferenciales.** Otra forma de escribir la misma idea usa los **diferenciales** $dx$ y $dy$. Si $x$ cambia en una cantidad pequeña $dx$, el cambio de $y$ se estima como

$$dy = f'(x)\,dx$$

Esta es la versión "de ingeniero" de la aproximación lineal, y es la notación que aparece en física e ingeniería para propagar errores. El error de la aproximación crece con $h^2$ (el cuadrado de la distancia al punto), por eso funciona tan bien cerca de $a$ y tan mal lejos de él.

## Máximos, mínimos y concavidad

Una de las aplicaciones más valiosas de la derivada es encontrar los valores extremos de una función: el mayor beneficio, el menor costo, la altura máxima, el tiempo mínimo. Estos son los **máximos y mínimos**.

**Definiciones.** Un **máximo local** (o relativo) es un punto donde la función vale más que en todos los puntos cercanos; un **mínimo local**, uno donde vale menos. Si vale más (o menos) que en **todo** el dominio, se llama **máximo (o mínimo) absoluto** o global. La palabra "local" se refiere a la vecindad del punto; "absoluto", al universo entero de la función.

**Puntos críticos.** Un punto $c$ es **crítico** si $f'(c) = 0$ o si $f'(c)$ no existe. El teorema de Fermat dice que los extremos locales de una función derivable ocurren en puntos críticos: si en un pico la recta tangente no fuera horizontal, la función seguiría subiendo o bajando. Ojo: el recíproco no vale, no todo punto crítico es extremo. La función $f(x) = x^3$ tiene $f'(0) = 0$, pero es creciente en todo su dominio y en $0$ no hay ni máximo ni mínimo.

**Criterio de la primera derivada.** Se estudia el signo de $f'$ alrededor del punto crítico:

- Si $f'$ pasa de positiva a negativa, hay un **máximo** local.
- Si $f'$ pasa de negativa a positiva, hay un **mínimo** local.
- Si $f'$ no cambia de signo, no hay extremo.

La lógica: donde $f' > 0$ la función sube; donde $f' < 0$ la función baja.

**Criterio de la segunda derivada.** Si $f'(c) = 0$ y existe $f''(c)$, entonces:

- $f''(c) < 0$: **máximo** local (curva cóncava hacia abajo, como una colina).
- $f''(c) > 0$: **mínimo** local (curva cóncava hacia arriba, como un valle).
- $f''(c) = 0$: el criterio no decide; hay que usar el de la primera derivada.

**Concavidad y puntos de inflexión.** La concavidad describe hacia dónde se abre la curva: si $f'' > 0$ en un intervalo, es **cóncava hacia arriba**; si $f'' < 0$, es **cóncava hacia abajo**. Un **punto de inflexión** es donde la concavidad cambia de sentido. En un punto de inflexión típicamente $f'' = 0$, pero no todo punto con $f'' = 0$ es de inflexión: por ejemplo, en $f(x) = x^4$ se tiene $f''(0) = 0$ y sin embargo la curva es cóncava hacia arriba a ambos lados del origen.

**Cómo hallar extremos absolutos en un intervalo cerrado.** Si $f$ es continua en $[a,b]$, el teorema del valor extremo garantiza que alcanza un máximo y un mínimo absolutos. Para encontrarlos:

1. Halla los puntos críticos de $f$ dentro de $(a,b)$.
2. Evalúa $f$ en esos puntos críticos.
3. Evalúa $f$ en los extremos $a$ y $b$.
4. Compara todos los valores: el mayor es el máximo absoluto y el menor, el mínimo absoluto.

**Ejemplo 1.** Para $f(x) = x^3 - 3x$: $f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$, que se anula en $x = -1$ y $x = 1$. La segunda derivada es $f''(x) = 6x$. Como $f''(-1) = -6 < 0$, en $x = -1$ hay máximo, con valor $f(-1) = 2$. Como $f''(1) = 6 > 0$, en $x = 1$ hay mínimo, con valor $f(1) = -2$. En el intervalo cerrado $[-2, 2]$ habría que comparar también $f(-2) = -2$ y $f(2) = 2$: el máximo absoluto es $2$ (en $x=-1$ y en $x=2$) y el mínimo absoluto es $-2$ (en $x=1$ y en $x=-2$).

**Ejemplo 2.** Para $f(x) = x^3 - 6x^2 + 9x$: $f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$. Los puntos críticos son $x = 1$ y $x = 3$. Con $f''(x) = 6x - 12$: $f''(1) = -6 < 0$ (máximo en $(1,4)$) y $f''(3) = 6 > 0$ (mínimo en $(3,0)$).

**Optimización paso a paso.** Para resolver problemas de máximos y mínimos con enunciado:

1. Identifica las cantidades y asígnales letras.
2. Escribe la **función objetivo** (la que hay que maximizar o minimizar).
3. Usa los datos del problema (la **restricción**) para dejar la función en una sola variable.
4. Determina el dominio razonable de esa variable.
5. Deriva, iguala a cero y resuelve.
6. Clasifica con el criterio de la primera o segunda derivada.
7. Responde la pregunta concreta, con unidades.

**Ejemplo 3 (optimización).** De todos los rectángulos de perímetro $40$, ¿cuál tiene área máxima? Si los lados miden $x$ y $y$, el perímetro impone $2x + 2y = 40$, es decir, $y = 20 - x$. El área es $A(x) = x(20-x) = 20x - x^2$, con $0 < x < 20$. Entonces $A'(x) = 20 - 2x = 0$ da $x = 10$, y $A''(x) = -2 < 0$ confirma que es máximo. El área máxima es $A(10) = 100$, y corresponde al cuadrado de lado $10$.

## Teoremas del valor medio

Los teoremas del valor medio son el puente entre el comportamiento local de la derivada y el comportamiento global de la función. Para enunciarlos necesitamos dos notaciones de intervalo: $[a,b]$ es el intervalo **cerrado**, que incluye los extremos $a$ y $b$ (todos los $x$ con $a \leq x \leq b$); $(a,b)$ es el intervalo **abierto**, que los excluye (todos los $x$ con $a < x < b$). La distinción importa porque las hipótesis de los teoremas piden continuidad en el cerrado y derivabilidad en el abierto.

**Teorema de Rolle.** Si $f$ es continua en $[a,b]$, derivable en $(a,b)$ y además $f(a) = f(b)$, entonces existe al menos un punto $c$ en $(a,b)$ tal que $f'(c) = 0$.

La intuición: si sales y vuelves a la misma altura, en algún momento del camino estuviste nivelado, ni subiendo ni bajando. Ejemplo: $f(x) = x^2 - 4x + 3$ en $[1,3]$ cumple $f(1) = f(3) = 0$; su derivada $f'(x) = 2x - 4$ se anula en $c = 2$.

**Teorema del valor medio (Lagrange).** Si $f$ es continua en $[a,b]$ y derivable en $(a,b)$, entonces existe al menos un punto $c$ en $(a,b)$ tal que

$$f'(c) = \frac{f(b)-f(a)}{b-a}$$

La fracción de la derecha es la pendiente de la recta que une los puntos $(a, f(a))$ y $(b, f(b))$, es decir, la razón de cambio **promedio** en el intervalo. El teorema dice que en algún punto intermedio la razón de cambio **instantánea** iguala a la promedio. La analogía del radar: si en un viaje de $2$ horas recorriste $160$ km, tu velocidad promedio fue $80$ km/h, y en algún instante exacto el velocímetro marcó $80$ km/h.

**Ejemplo de verificación.** Para $f(x) = x^2$ en $[0,2]$: la pendiente promedio es $\dfrac{f(2)-f(0)}{2-0} = \dfrac{4-0}{2} = 2$. Buscamos $c$ con $f'(c) = 2c = 2$, y encontramos $c = 1$, que está dentro del intervalo. Verificado.

Otro ejemplo: $f(x) = x^3 - 3x$ en $[0,2]$. La pendiente promedio es $\dfrac{2-0}{2} = 1$. Buscamos $c$ con $f'(c) = 3c^2 - 3 = 1$, es decir, $c^2 = \dfrac{4}{3}$, así que $c = \dfrac{2}{\sqrt{3}} \approx 1.155$, que pertenece a $(0,2)$. Verificado.

**Consecuencias prácticas.** Del teorema del valor medio se deducen hechos que usamos a diario al analizar funciones:

- Si $f'(x) > 0$ en un intervalo, entonces $f$ es **creciente** allí.
- Si $f'(x) < 0$ en un intervalo, entonces $f$ es **decreciente** allí.
- Si $f'(x) = 0$ en un intervalo, entonces $f$ es **constante** allí.
- Si dos funciones tienen la misma derivada, difieren en una constante.

Estos resultados son la base lógica de la optimización y de la integración: por eso el cálculo diferencial no es solo una colección de técnicas, sino una teoría con estructura.

## L'Hôpital y razonamiento con razones relacionadas

**La regla de L'Hôpital.** Al calcular límites de cocientes aparecen formas **indeterminadas**, como $\dfrac{0}{0}$ o $\dfrac{\infty}{\infty}$, donde sustituir directamente no decide nada. La regla dice: si $\lim_{x\to c}\dfrac{f(x)}{g(x)}$ es de la forma $\dfrac{0}{0}$ o $\dfrac{\infty}{\infty}$, entonces

$$\lim_{x\to c}\frac{f(x)}{g(x)} = \lim_{x\to c}\frac{f'(x)}{g'(x)}$$

siempre que el límite de la derecha exista. Se deriva numerador y denominador **por separado** (no es la regla del cociente) y se repite el proceso si vuelve a aparecer una indeterminación.

Antes de aplicarla hay que **verificar** que la forma es indeterminada. Si el límite no es de la forma $\dfrac{0}{0}$ ni $\dfrac{\infty}{\infty}$, la regla no se aplica y usarla da resultados falsos. Por ejemplo, $\lim_{x\to 1}\dfrac{x+1}{x+2} = \dfrac{2}{3}$; derivar arriba y abajo daría $\dfrac{1}{1} = 1$, que es incorrecto.

**Ejemplos.**

- $\displaystyle\lim_{x\to 0}\frac{e^x-1}{x}$ es $\dfrac{0}{0}$. Derivando: $\displaystyle\lim_{x\to 0}\frac{e^x}{1} = 1$.
- $\displaystyle\lim_{x\to 0}\frac{1-\cos x}{x^2}$ es $\dfrac{0}{0}$. Primera aplicación: $\displaystyle\lim_{x\to 0}\frac{\text{sen}\,x}{2x} = \frac{1}{2}$.
- $\displaystyle\lim_{x\to 0}\frac{\text{sen}\,x-x}{x^3}$ es $\dfrac{0}{0}$. Primera vez: $\dfrac{\cos x-1}{3x^2}$, todavía $\dfrac{0}{0}$. Segunda vez: $\dfrac{-\text{sen}\,x}{6x} = -\dfrac{1}{6}$.
- $\displaystyle\lim_{x\to 0^+} x\ln x$ es $0 \cdot (-\infty)$, que no es de la forma estándar; se reescribe como $\dfrac{\ln x}{1/x}$, que es $\dfrac{\infty}{\infty}$, y L'Hôpital da $0$.

**Razones relacionadas.** Cuando dos o más cantidades dependen del tiempo, sus derivadas quedan vinculadas por la regla de la cadena. La notación $\dfrac{dV}{dt}$ se lee "derivada de $V$ respecto de $t$" y significa la rapidez con que cambia el volumen $V$; $\dfrac{dr}{dt}$ es la rapidez con que cambia el radio $r$. Aunque $V$ dependa de $r$, y no directamente de $t$, el tiempo entra por el radio: $V = V(r(t))$. La regla de la cadena convierte esa dependencia en una ecuación entre rapideces.

**Estrategia para razones relacionadas.**

1. Dibuja la situación y nombra las cantidades con letras ($V$, $r$, $A$, $x$, $t$).
2. Escribe la relación geométrica o física entre ellas (por ejemplo $V = \dfrac{4}{3}\pi r^3$).
3. Deriva ambos lados respecto del tiempo $t$, aplicando la regla de la cadena a cada variable.
4. Sustituye los datos conocidos **después** de derivar.
5. Resuelve la rapidez pedida e interprétala con unidades y signo (positivo: crece; negativo: decrece).

**Ejemplo 1 (globo).** Un globo esférico se infla a razón de $100$ cm$^3$/s. ¿Con qué rapidez crece el radio cuando $r = 5$ cm? El volumen es $V = \dfrac{4}{3}\pi r^3$. Derivando respecto de $t$:

$$\frac{dV}{dt} = 4\pi r^2\,\frac{dr}{dt}$$

Sustituimos $\dfrac{dV}{dt} = 100$ y $r = 5$: $100 = 4\pi(25)\dfrac{dr}{dt}$, de donde $\dfrac{dr}{dt} = \dfrac{1}{\pi} \approx 0.318$ cm/s. Observa que la rapidez del radio no es constante: cuando el globo es grande, el mismo flujo de aire infla el radio más lentamente.

**Ejemplo 2 (cubo).** Un cubo crece con arista $a(t)$ que aumenta a $2$ cm/s. Su volumen es $V = a^3$, así que $\dfrac{dV}{dt} = 3a^2\dfrac{da}{dt}$. Cuando $a = 3$ cm: $\dfrac{dV}{dt} = 3\cdot 9 \cdot 2 = 54$ cm$^3$/s.

**Ejemplo 3 (escalera).** Una escalera de $5$ m se apoya en una pared. La base se aleja de la pared a $1$ m/s. ¿Con qué rapidez baja el extremo superior cuando la base está a $3$ m? Si $x$ es la distancia base-pared e $y$ la altura, entonces $x^2+y^2=25$. Derivando: $2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0$. Cuando $x=3$, $y=4$, y $\dfrac{dx}{dt}=1$: $2(3)(1)+2(4)\dfrac{dy}{dt}=0$, de donde $\dfrac{dy}{dt} = -\dfrac{3}{4}$ m/s. El signo negativo indica que la altura disminuye.

## Ejemplos resueltos

**Ejemplo 1 (definición, con raíz).** Deriva $f(x) = \sqrt{x}$ desde la definición. El cociente es

$$\frac{\sqrt{x+h}-\sqrt{x}}{h}$$

Multiplicamos por el conjugado $\sqrt{x+h}+\sqrt{x}$ (arriba y abajo, que es multiplicar por $1$):

$$\frac{(\sqrt{x+h}-\sqrt{x})(\sqrt{x+h}+\sqrt{x})}{h(\sqrt{x+h}+\sqrt{x})} = \frac{(x+h)-x}{h(\sqrt{x+h}+\sqrt{x})} = \frac{h}{h(\sqrt{x+h}+\sqrt{x})} = \frac{1}{\sqrt{x+h}+\sqrt{x}}$$

Al hacer $h \to 0$ queda $\dfrac{1}{2\sqrt{x}}$. Coincide con la regla de la potencia, como debe ser.

**Ejemplo 2 (física).** Un objeto cae según $h(t) = 100 - 4.9t^2$ metros. Halla la velocidad en $t = 2$ s. La derivada de la posición es $h'(t) = -9.8t$. Entonces $h'(2) = -19.6$ m/s: cae a $19.6$ m/s (el signo negativo indica hacia abajo).

**Ejemplo 3 (optimización).** Maximiza el área de un rectángulo de perímetro $40$. Con lados $x$ y $20-x$, el área es $A(x) = 20x - x^2$. Derivando: $A'(x) = 20 - 2x = 0 \Rightarrow x = 10$. Como $A''(x) = -2 < 0$, es un máximo. El área máxima es $100$ y corresponde a un cuadrado de lado $10$.

**Ejemplo 4 (economía).** El ingreso por vender $x$ unidades es $R(x) = 50x - 0.5x^2$. El ingreso marginal es la derivada: $R'(x) = 50 - x$. En $x = 20$: $R'(20) = 30$. Interpretación: vender la unidad $21$ añade aproximadamente $30$ al ingreso.

**Ejemplo 5 (producto).** Deriva $f(x) = x^2\ln x$. Aplicamos la regla del producto con $f_1 = x^2$ y $f_2 = \ln x$:

$$f'(x) = 2x\ln x + x^2\cdot\frac{1}{x} = 2x\ln x + x$$

**Ejemplo 6 (cadena).** Deriva $g(x) = \text{sen}(3x^2+1)$. La capa externa es el seno; la interna, $3x^2+1$, con derivada $6x$:

$$g'(x) = \cos(3x^2+1)\cdot 6x = 6x\cos(3x^2+1)$$

**Ejemplo 7 (razones relacionadas).** Un globo esférico se infla a $100$ cm$^3$/s. ¿Con qué rapidez crece el radio cuando $r = 5$ cm? Como $V = \dfrac{4}{3}\pi r^3$, se tiene $\dfrac{dV}{dt} = 4\pi r^2\dfrac{dr}{dt}$. Entonces $100 = 4\pi(25)\dfrac{dr}{dt}$ y $\dfrac{dr}{dt} = \dfrac{1}{\pi} \approx 0.318$ cm/s.

**Ejemplo 8 (valor medio).** Verifica el teorema del valor medio para $f(x) = x^3 - 3x$ en $[0,2]$. La pendiente promedio es $\dfrac{f(2)-f(0)}{2-0} = \dfrac{2-0}{2} = 1$. Buscamos $c$ con $3c^2-3 = 1$, es decir $c = \dfrac{2}{\sqrt{3}} \approx 1.155$, que está en $(0,2)$.

**Ejemplo 9 (implícita).** De $x^2 + y^2 = 25$, halla $\dfrac{dy}{dx}$. Derivando ambos lados respecto de $x$ y recordando que $y$ depende de $x$: $2x + 2y\dfrac{dy}{dx} = 0$, luego $\dfrac{dy}{dx} = -\dfrac{x}{y}$. En el punto $(3,4)$ la pendiente es $-\dfrac{3}{4}$.

## Errores comunes

- **Derivar un producto como producto de derivadas.** $(f g)' \neq f'g'$. Hay que usar $f'g + f g'$. Ejemplo: la derivada de $x^2e^x$ no es $2x e^x$, sino $e^x(x^2+2x)$.
- **Olvidar la regla de la cadena.** $(\text{sen}(5x))' = \cos(5x)$ está mal; falta el factor $5$. La derivada de $e^{3x}$ es $3e^{3x}$, no $e^{3x}$.
- **Equivocar el orden o los signos en el cociente.** Es $f'g - fg'$ sobre $g^2$; invertir los términos cambia el resultado por completo.
- **Confundir $f(a)$ con $f'(a)$.** $f(a)$ es la altura de la curva; $f'(a)$ es la pendiente. Al evaluar una derivada hay que derivar primero y recién después reemplazar.
- **Creer que todo punto crítico es extremo.** $f(x) = x^3$ tiene $f'(0) = 0$ y no presenta máximo ni mínimo. Siempre hay que clasificar (signo de $f'$ o valor de $f''$).
- **Aplicar L'Hôpital sin indeterminación.** Solo vale para $\dfrac{0}{0}$ o $\dfrac{\infty}{\infty}$. Verifica antes de derivar.
- **Evaluar fuera del dominio.** La derivada de $\ln x$ es $\dfrac{1}{x}$, pero solo tiene sentido para $x > 0$; la de $\sqrt{x}$, solo desde $0$ hacia la derecha.
- **Olvidar los extremos del intervalo.** En un problema en $[a,b]$, el máximo absoluto puede estar en un extremo, no solo en un punto crítico.
- **En razones relacionadas, derivar antes de sustituir o al revés.** Primero se deriva la relación, después se sustituyen los valores numéricos; y no se olvida la regla de la cadena en cada variable que depende del tiempo.
- **Usar la aproximación lineal lejos del punto.** La tangente solo acompaña a la curva cerca de $a$; para valores lejanos el error es grande.
- **Tratar $\dfrac{dy}{dx}$ como una fracción literal.** En la regla de la cadena y en razones relacionadas funciona como si se cancelaran, pero en general es un símbolo unificado y no una división de números.

## Ejercicios propuestos (con respuestas)

1. Deriva $f(x) = 5x^3 - 2x + 7$.
2. Deriva $g(x) = \dfrac{x^2}{x+1}$.
3. Deriva $h(x) = e^{2x}\cos x$.
4. Deriva $k(x) = \ln(x^2 + 1)$.
5. Deriva $m(x) = (3x^2+1)^5$.
6. Halla la recta tangente a $y = x^3 - 3x$ en $x = 2$.
7. Halla los extremos de $f(x) = x^3 - 6x^2 + 9x$.
8. Dos números suman $20$: encuentra el par cuyo producto es máximo.
9. Calcula $\displaystyle\lim_{x\to 0}\frac{\text{sen}\,x - x}{x^3}$.
10. Halla $f''(x)$ para $f(x) = xe^x$.
11. Un globo esférico se infla con $\dfrac{dV}{dt} = 100$ cm$^3$/s. Halla $\dfrac{dr}{dt}$ cuando $r = 5$ cm.
12. Verifica el teorema del valor medio para $f(x) = x^2$ en $[0,2]$.
13. Deriva desde la definición $f(x) = \dfrac{1}{x+1}$.
14. De $x^2 + xy + y^2 = 7$, halla $\dfrac{dy}{dx}$.

**Respuestas.**

1. $f'(x) = 15x^2 - 2$.
2. $g'(x) = \dfrac{x^2+2x}{(x+1)^2}$ (regla del cociente).
3. $h'(x) = e^{2x}(2\cos x - \text{sen}\,x)$ (producto y cadena).
4. $k'(x) = \dfrac{2x}{x^2+1}$.
5. $m'(x) = 30x(3x^2+1)^4$ (cadena).
6. $f(2) = 2$ y $f'(x) = 3x^2-3$, $f'(2) = 9$: la recta es $y = 9x - 16$.
7. Máximo en $(1,4)$; mínimo en $(3,0)$.
8. Los números son $10$ y $10$; el producto máximo es $100$.
9. $-\dfrac{1}{6}$ (dos aplicaciones de L'Hôpital).
10. $f'(x) = e^x(x+1)$, $f''(x) = e^x(x+2)$.
11. $\dfrac{dr}{dt} = \dfrac{1}{\pi} \approx 0.318$ cm/s.
12. $c = 1$.
13. $f'(x) = -\dfrac{1}{(x+1)^2}$.
14. $\dfrac{dy}{dx} = -\dfrac{2x+y}{x+2y}$.

## Resumen

- La derivada es el límite del cociente incremental, $f'(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$: mide la razón de cambio instantánea y la pendiente de la recta tangente.
- Cada notación tiene su uso: $f'(x)$ en matemática general, $\frac{dy}{dx}$ en cálculos con razones, $\dot{y}$ en física.
- Una función es derivable en un punto si el límite del cociente existe; derivable implica continua, pero no al revés.
- Las reglas básicas (potencia, producto, cociente, cadena y las derivadas notables) permiten derivar casi cualquier expresión sin volver a la definición.
- La regla de la cadena es la herramienta central para composiciones y para la derivación implícita.
- Las derivadas de orden superior describen aceleración, concavidad y aproximaciones cada vez más finas.
- La recta tangente da la aproximación lineal, base de las estimaciones numéricas.
- Los puntos críticos, junto con los criterios de la primera y segunda derivada, resuelven los problemas de optimización.
- Rolle y el valor medio conectan el cambio instantáneo con el promedio y fundamentan el análisis de crecimiento.
- L'Hôpital resuelve límites indeterminados y las razones relacionadas traducen problemas de cambio en ecuaciones de derivadas.
`,

  "calc-integral": String.raw`
## ¿Qué significa integrar? La idea de acumular

Si la derivada mide **qué tan rápido cambia** una cantidad, la integral mide **cuánto se acumuló** ese cambio. Es la operación inversa en espíritu, pero además es una herramienta de suma: la integral suma infinitas contribuciones pequeñísimas para obtener un total.

Una analogía cotidiana: el **velocímetro** de un auto muestra la rapidez en cada instante (eso es la derivada de la posición). El **odómetro** muestra la distancia total recorrida (eso es la integral de la velocidad). Si conoces la velocidad en cada momento y quieres saber cuánto avanzaste, integras:

$$D = \int_{a}^{b} v(t)\,dt$$

Aquí $v(t)$ es la velocidad en el instante $t$, $a$ es el momento en que empezamos a medir, $b$ el momento en que terminamos y $D$ la distancia total. La integral acumula todos los pequeños productos "velocidad por intervalito de tiempo".

**El área bajo la curva.** Geométricamente, $\displaystyle\int_a^b f(x)\,dx$ se interpreta como el **área con signo** entre la curva $y = f(x)$, el eje horizontal $x$ y las rectas verticales $x = a$ y $x = b$. Decimos "con signo" porque las partes de la curva que quedan **por debajo** del eje aportan área negativa. La integral no siempre es el área geométrica: si $f$ toma valores negativos, la integral también los resta.

**La suma de Riemann: la integral antes de ser integral.** Para definir con precisión esa área, hacemos lo que haría un niño con papel cuadriculado: partir el intervalo $[a,b]$ en muchas franjas delgadas y aproximar cada franja con un rectángulo.

1. Partimos $[a,b]$ en $n$ subintervalos iguales.
2. El ancho de cada subintervalo es $\Delta x = \dfrac{b-a}{n}$. La letra griega $\Delta$ (delta mayúscula) se lee "cambio en", así que $\Delta x$ significa "el cambio en $x$", es decir, el ancho de una franja.
3. En cada franja elegimos un punto de muestra $x_i^*$. El subíndice $i$ indica que es la franja número $i$ (desde $i=1$ hasta $i=n$), y el asterisco recuerda que es un punto cualquiera dentro de esa franja.
4. La altura del rectángulo es $f(x_i^*)$.
5. El área de ese rectángulo es base por altura: $f(x_i^*)\,\Delta x$.
6. Sumamos las $n$ áreas con la letra griega $\Sigma$ (sigma mayúscula), que significa "suma": $\displaystyle\sum_{i=1}^{n} f(x_i^*)\,\Delta x$.

La **suma de Riemann** es esa suma finita. La **integral definida** es el límite de esas sumas cuando el número de franjas crece sin fin:

$$\int_a^b f(x)\,dx = \lim_{n\to\infty} \sum_{i=1}^{n} f(x_i^*)\,\Delta x$$

Leamos la fórmula símbolo por símbolo:

- $\displaystyle\lim_{n\to\infty}$ significa "el límite cuando $n$ tiende a infinito", es decir, cuando las franjas son infinitamente delgadas.
- $\displaystyle\sum_{i=1}^{n}$ es la suma desde la franja 1 hasta la franja $n$.
- $f(x_i^*)$ es la altura de la franja $i$.
- $\Delta x$ es el ancho, que en el límite se vuelve infinitesimal y se escribe $dx$.
- El símbolo $\displaystyle\int$ es una letra S alargada, de la palabra latina *summa* (suma): es el límite de la suma.

En una frase: **integrar es sumar infinitas rebanadas infinitamente delgadas**.

**Ejemplo conceptual con números.** Tomemos $f(x) = x^2$ en el intervalo $[0,1]$ y usemos $n$ franjas con el extremo derecho de cada una como punto de muestra. Entonces $x_i^* = i/n$ y $\Delta x = 1/n$. La suma de Riemann vale

$$\sum_{i=1}^{n} \left(\frac{i}{n}\right)^2 \frac{1}{n} = \frac{1}{n^3}\sum_{i=1}^{n} i^2 = \frac{1}{n^3}\cdot\frac{n(n+1)(2n+1)}{6} = \frac{(n+1)(2n+1)}{6n^2}$$

Al tomar $n \to \infty$, el resultado tiende a $\dfrac{2}{6} = \dfrac{1}{3}$. Por lo tanto $\displaystyle\int_0^1 x^2\,dx = \frac{1}{3}$: el área bajo la parábola en ese intervalo. Más adelante veremos que este cálculo, hecho con el teorema fundamental, toma una sola línea.

**Mini-ejemplo de acumulación.** Si la velocidad es $v(t) = 3t^2$ (en metros por segundo), la distancia recorrida entre $t = 0$ y $t = 2$ segundos es

$$\int_0^2 3t^2\,dt = \Big[t^3\Big]_0^2 = 8 - 0 = 8 \text{ metros}$$

El símbolo $\Big[t^3\Big]_0^2$ significa "evalúa $t^3$ en $t=2$ y réstale $t^3$ evaluado en $t=0$". Volveremos sobre esta notación con calma.

## La notación y cómo leerla

La notación de la integral fue inventada por Gottfried Leibniz a finales del siglo XVII y sigue siendo la más usada por su enorme claridad. La fórmula general de una integral definida es

$$\int_a^b f(x)\,dx$$

y se lee "la integral desde $a$ hasta $b$ de efe de equis, diferencial de equis". Cada pieza tiene un nombre y un significado:

- $\displaystyle\int$: el **signo integral**. Es una S alargada y recuerda que estamos sumando. No es una letra cualquiera: siempre debe ir acompañado de un diferencial.
- $a$ y $b$: los **límites de integración**. $a$ es el límite inferior (donde empieza la acumulación) y $b$ el límite superior (donde termina). Se escriben como subíndice y superíndice del signo integral.
- $f(x)$: el **integrando**, es decir, la función que se está acumulando.
- $dx$: el **diferencial de $x$**. Aquí está la clave: $dx$ indica cuál es la variable de integración y representa el ancho infinitesimal de cada rebanada. Si la variable fuera $t$, escribiríamos $dt$; si fuera $u$, $du$. La expresión $f(x)\,dx$ se lee como "la altura $f(x)$ por el ancho infinitesimal $dx$": es el área de una rebanada infinitamente delgada.

**¿Por qué $dx$ es imprescindible?** Porque sin él no sabríamos respecto a qué variable integrar. La expresión $\int x t\,dx$ es distinta de $\int x t\,dt$: en la primera la variable es $x$ (y $t$ es una constante), en la segunda la variable es $t$. El diferencial cierra la expresión igual que el punto cierra una oración; una integral sin diferencial está incompleta.

**Integral definida contra integral indefinida.**

- La **integral definida** $\displaystyle\int_a^b f(x)\,dx$ tiene límites $a$ y $b$ y su resultado es **un número** (por ejemplo, $\frac{1}{3}$ o $8\pi$).
- La **integral indefinida** $\displaystyle\int f(x)\,dx$ no tiene límites y su resultado es **una familia de funciones** que difieren en una constante (por ejemplo, $x^3 + C$).

Son objetos de naturaleza distinta que comparten notación porque el teorema fundamental las conecta.

**La notación de evaluación.** Para indicar que hay que evaluar una expresión entre dos valores usamos corchetes con los límites:

$$\Big[F(x)\Big]_a^b = F(b) - F(a)$$

Primero se escribe la antiderivada entre corchetes, y luego los límites $a$ (abajo) y $b$ (arriba). El resultado es el valor en el límite superior menos el valor en el límite inferior. Esta diferencia $F(b) - F(a)$ es el corazón del cálculo integral y la explicaremos en detalle en la sección del teorema fundamental.

**Sobre el uso de variables mudas.** En $\displaystyle\int_a^b f(x)\,dx$, la letra $x$ es una **variable muda** o auxiliar: el resultado no depende de cómo la llamemos. $\displaystyle\int_a^b f(t)\,dt$ y $\displaystyle\int_a^b f(u)\,du$ significan exactamente lo mismo. Cuando veas $\frac{d}{dx}\int_a^x f(t)\,dt$, la $t$ es la variable muda que recorre el intervalo y la $x$ es la variable del resultado; por eso se usan letras distintas.

## Antiderivadas e integral indefinida

**Definición.** Una **antiderivada** (o primitiva) de una función $f$ es otra función $F$ cuya derivada es $f$:

$$F'(x) = f(x)$$

Es decir: antiderivar es **deshacer** una derivada, buscar "de dónde vino" la función $f$.

**Ejemplo.** Una antiderivada de $f(x) = 2x$ es $F(x) = x^2$, porque $(x^2)' = 2x$. Pero también $x^2 + 3$, $x^2 - 7$ y $x^2 + 100$ son antiderivadas, porque la derivada de cualquier constante es cero. De hecho, si $F$ es una antiderivada, **todas** las antiderivadas son de la forma $F(x) + C$.

**¿Qué es $C$?** Es la **constante de integración**: un número real arbitrario. Geométricamente, sumar $C$ desplaza la gráfica de $F$ hacia arriba o hacia abajo sin cambiar su pendiente en ningún punto. Como la pendiente en cada $x$ es exactamente $f(x)$, todas esas curvas paralelas son antiderivadas válidas. Por eso la integral indefinida representa una **familia infinita de curvas** y no una sola.

$$\int f(x)\,dx = F(x) + C \qquad \text{siempre que } F'(x) = f(x)$$

Leamos: "la integral indefinida de $f$ de equis, diferencial de equis, es igual a $F$ de equis más $C$". El símbolo $C$ nunca se omite: olvidarlo es uno de los errores más comunes y más costosos.

**Condiciones iniciales: elegir una curva de la familia.** Si además sabemos por dónde pasa la antiderivada, podemos calcular $C$. Si $F'(x) = 2x$ y queremos la antiderivada que cumple $F(1) = 5$:

1. La familia es $F(x) = x^2 + C$.
2. Imponemos la condición: $F(1) = 1 + C = 5$.
3. Despejamos: $C = 4$.
4. La antiderivada particular es $F(x) = x^2 + 4$.

**Linealidad.** La integral hereda de la derivada dos propiedades muy útiles: la integral de una suma es la suma de las integrales, y las constantes pueden salir del signo integral.

$$\int \big[\alpha f(x) + \beta g(x)\big]\,dx = \alpha \int f(x)\,dx + \beta \int g(x)\,dx$$

Aquí $\alpha$ y $\beta$ son constantes. Esta propiedad permite integrar polinomios término a término sin ninguna dificultad.

**Mini-ejemplo.** $\displaystyle\int \left(4x^3 - \frac{2}{x}\right)dx = 4\cdot\frac{x^4}{4} - 2\ln\mid x\mid + C = x^4 - 2\ln\mid x\mid + C$.

**Advertencia importante.** La linealidad vale para sumas y para multiplicar por constantes, pero **no** para productos ni cocientes de funciones: en general $\int f g \neq \left(\int f\right)\left(\int g\right)$ y $\int \frac{f}{g} \neq \frac{\int f}{\int g}$. Para productos y cocientes existen las técnicas de las secciones siguientes.

## Tabla de integrales inmediatas (explicada)

Estas integrales se llaman **inmediatas** porque se reconocen de memoria, igual que las tablas de multiplicar. Cada una es simplemente una regla de derivación leída al revés. La columna de la derecha explica de dónde sale y cómo verificarla.

| Integral | Resultado | Por qué |
|---|---|---|
| $\displaystyle\int k\,dx$ | $kx + C$ | La derivada de $kx$ es $k$: integrar una constante acumula $k$ por cada unidad de $x$. |
| $\displaystyle\int x^{n}\,dx$ | $\dfrac{x^{n+1}}{n+1} + C \quad (n \neq -1)$ | Es la regla de la potencia al revés: se sube el exponente y se divide entre el nuevo exponente. |
| $\displaystyle\int \dfrac{1}{x}\,dx$ | $\ln\mid x\mid + C$ | Excepción de la regla anterior cuando $n = -1$; el valor absoluto cubre los $x$ negativos. |
| $\displaystyle\int e^{x}\,dx$ | $e^{x} + C$ | La exponencial es su propia derivada: es la única función que no cambia al integrar. |
| $\displaystyle\int a^{x}\,dx$ | $\dfrac{a^{x}}{\ln a} + C$ | Se divide entre $\ln a$ para compensar que $(a^x)' = a^x \ln a$. |
| $\displaystyle\int \operatorname{sen}x\,dx$ | $-\cos x + C$ | Lleva signo menos porque la derivada del coseno es menos seno. |
| $\displaystyle\int \cos x\,dx$ | $\operatorname{sen}x + C$ | La derivada del seno es el coseno: se lee al revés sin cambios. |
| $\displaystyle\int \sec^{2}x\,dx$ | $\tan x + C$ | La derivada de la tangente es secante al cuadrado. |
| $\displaystyle\int \dfrac{1}{1+x^{2}}\,dx$ | $\arctan x + C$ | La derivada del arco tangente es $1/(1+x^2)$. |
| $\displaystyle\int \dfrac{1}{\sqrt{1-x^{2}}}\,dx$ | $\arcsin x + C$ | La derivada del arco seno es $1/\sqrt{1-x^2}$ en su dominio. |

**Cómo usar la tabla con la linealidad.** Para integrar un polinomio, se integra término a término.

**Ejemplo 1.** $\displaystyle\int \left(6x^2 - 4x + 3\right)dx$. Aplicamos la regla de la potencia a cada término:

$$6\cdot\frac{x^3}{3} - 4\cdot\frac{x^2}{2} + 3x + C = 2x^3 - 2x^2 + 3x + C$$

**Verificación.** Derivamos el resultado: $(2x^3 - 2x^2 + 3x)' = 6x^2 - 4x + 3$, que es el integrando. Correcto.

**Ejemplo 2.** $\displaystyle\int \left(\frac{1}{x} + e^x\right)dx = \ln\mid x\mid + e^x + C$.

**Ejemplo 3.** $\displaystyle\int \left(\sqrt{x} + \frac{1}{x^2}\right)dx$. Escribimos las raíces y fracciones como potencias: $\sqrt{x} = x^{1/2}$ y $\frac{1}{x^2} = x^{-2}$.

$$\int \left(x^{1/2} + x^{-2}\right)dx = \frac{x^{3/2}}{3/2} + \frac{x^{-1}}{-1} + C = \frac{2}{3}x^{3/2} - \frac{1}{x} + C$$

**Ejemplo 4.** $\displaystyle\int \left(3\cos x - 2\operatorname{sen}x\right)dx = 3\operatorname{sen}x - 2(-\cos x) + C = 3\operatorname{sen}x + 2\cos x + C$.

**Truco de las potencias.** Cualquier raíz o fracción se convierte en potencia: $\sqrt[n]{x^m} = x^{m/n}$ y $\frac{1}{x^m} = x^{-m}$. Así, casi todas las integrales de potencias se resuelven con la misma regla.

## El teorema fundamental del cálculo

Este teorema es el resultado central de todo el curso: conecta las dos grandes ideas del cálculo, la derivada y la integral, y convierte el cálculo de áreas (sumas infinitas) en una simple resta.

**Parte 1 (derivar una acumulación).** Si $f$ es continua, entonces la función definida por la integral desde un punto fijo $a$ hasta $x$ tiene derivada igual al integrando:

$$\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$$

Leamos los símbolos: $\frac{d}{dx}$ significa "deriva respecto a $x$"; $t$ es la variable muda que recorre el intervalo $[a,x]$; el resultado dice que **derivar y acumular son operaciones inversas**. Si acumulas una función y luego derivas, vuelves a la función original. Es como abrir y cerrar una puerta: la acumulación y la derivación se cancelan.

**Ejemplo.** $\dfrac{d}{dx}\displaystyle\int_0^x t^2\,dt = x^2$. No hace falta calcular la integral: la derivada de la acumulación es directamente la función que está dentro.

**Parte 2 (regla de Barrow).** Si $f$ es continua en $[a,b]$ y $F$ es cualquier antiderivada de $f$ (es decir, $F' = f$), entonces

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

Esta es la fórmula que usarás mil veces. Dice: para calcular el área acumulada, busca una antiderivada, **evalúala en el límite superior $b$** y **réstale su valor en el límite inferior $a$**. El resultado $F(b) - F(a)$ no depende de qué antiderivada elijas: si usas $F + C$, la constante se cancela en la resta, porque $(F(b) + C) - (F(a) + C) = F(b) - F(a)$.

**¿Por qué funciona? Intuición.** Cada rebanada de ancho $dx$ aporta $f(x)\,dx$. Como $F' = f$, un pequeño cambio en $F$ es aproximadamente $\Delta F \approx F'(x)\,\Delta x = f(x)\,\Delta x$. Entonces sumar todas las rebanadas equivale a sumar todos los pequeños cambios de $F$ a lo largo del camino, y esa suma encadenada (telescópica) es exactamente el cambio total $F(b) - F(a)$. ¡La suma de infinitos pedacitos se simplifica porque todo lo intermedio se cancela!

**Ejemplo resuelto completo.** Calculemos $\displaystyle\int_1^3 x^2\,dx$.

1. Buscamos una antiderivada de $x^2$: como $\left(\frac{x^3}{3}\right)' = x^2$, tomamos $F(x) = \frac{x^3}{3}$.
2. Evaluamos en los límites: $\Big[\frac{x^3}{3}\Big]_1^3$.
3. Restamos: $F(3) - F(1) = \frac{27}{3} - \frac{1}{3} = 9 - \frac{1}{3} = \frac{26}{3} \approx 8.67$.

El resultado es el área exacta bajo la parábola entre 1 y 3. Compara el esfuerzo con hacer la suma de Riemann: el teorema nos ahorró un límite complicadísimo.

**Ejemplo con velocidad.** Si $v(t) = 3t^2$ y queremos la distancia entre $t = 0$ y $t = 2$: la antiderivada es $t^3$, entonces la distancia es $2^3 - 0^3 = 8$ metros.

**Propiedades de la integral definida.** Estas reglas son intuitivas y muy útiles:

1. $\displaystyle\int_a^a f(x)\,dx = 0$: no hay recorrido, no hay acumulación.
2. $\displaystyle\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$: invertir el sentido cambia el signo (si vas en reversa, "desacumulas").
3. $\displaystyle\int_a^b f + \int_b^c f = \int_a^c f$: acumular en dos tramos es acumular en uno solo, siempre que se encadenen.
4. $\displaystyle\int_a^b k\,f(x)\,dx = k\int_a^b f(x)\,dx$: las constantes salen.
5. $\displaystyle\int_a^b (f \pm g) = \int_a^b f \pm \int_a^b g$: la integral de la suma es la suma de las integrales.

## Integración por sustitución

La **regla de la cadena** dice que al derivar una función compuesta hay que multiplicar por la derivada de la función interior: $\big(f(g(x))\big)' = f'(g(x))\cdot g'(x)$. La **sustitución** es esa misma regla leída al revés. Se usa cuando en el integrando aparece una función y, multiplicando, su derivada.

$$\int f\big(g(x)\big)\,g'(x)\,dx = \int f(u)\,du, \qquad u = g(x)$$

Leamos cada pieza:

- $g(x)$ es la **función interior**, la que "molesta" dentro del integrando. Le damos el nombre corto $u$.
- $g'(x)$ es su derivada, que debe aparecer en el integrando (salvo constante) para que la sustitución funcione.
- $du = g'(x)\,dx$ es el **diferencial**: esta igualdad es la que permite reemplazar $g'(x)\,dx$ por $du$. No es magia: es la definición del diferencial de una función compuesta.
- Después de sustituir, la integral en la variable $u$ debe ser más simple.

**Método paso a paso.** (1) Elige $u = g(x)$. (2) Calcula $du = g'(x)\,dx$. (3) Reescribe toda la integral en términos de $u$ y $du$: no debe quedar ninguna $x$. (4) Integra en $u$. (5) Devuelve la variable original o cambia los límites.

**Ejemplo 1.** $\displaystyle\int 2x\cos(x^2)\,dx$.

- Sea $u = x^2$ (la función interior). Entonces $du = 2x\,dx$.
- El integrando contiene exactamente $2x\,dx$, así que lo reemplazamos: $\displaystyle\int \cos u\,du$.
- Integramos: $\operatorname{sen}u + C$.
- Volvemos a $x$: $\operatorname{sen}(x^2) + C$.

**Verificación.** Derivamos $\operatorname{sen}(x^2)$ con la regla de la cadena: $\cos(x^2)\cdot 2x = 2x\cos(x^2)$. Correcto.

**Ejemplo 2.** $\displaystyle\int x\,e^{x^2}\,dx$. Aquí $du = 2x\,dx$, pero en el integrando solo hay $x\,dx$: falta el 2. Lo arreglamos así: $x\,dx = \frac{1}{2}\,du$. Entonces

$$\int x e^{x^2}\,dx = \frac{1}{2}\int e^u\,du = \frac{1}{2}e^u + C = \frac{1}{2}e^{x^2} + C$$

Moraleja: si falta una constante multiplicativa, se ajusta el factor sin problema; lo que **no** se puede ajustar es una variable que falte.

**Ejemplo 3.** $\displaystyle\int \frac{3x^2}{x^3+1}\,dx$. Sea $u = x^3+1$, entonces $du = 3x^2\,dx$. La integral se convierte en

$$\int \frac{1}{u}\,du = \ln\mid u\mid + C = \ln\mid x^3+1\mid + C$$

**Ejemplo 4.** $\displaystyle\int \frac{\ln x}{x}\,dx$. Sea $u = \ln x$, entonces $du = \frac{1}{x}\,dx$. Queda

$$\int u\,du = \frac{u^2}{2} + C = \frac{(\ln x)^2}{2} + C$$

**Sustitución en integrales definidas: cambiar los límites.** Si la integral tiene límites, hay dos caminos: (a) resolver la indefinida, volver a $x$ y luego evaluar; o (b) cambiar los límites junto con la variable, lo cual suele ser más limpio. Veamos el camino (b).

**Ejemplo 5.** $\displaystyle\int_0^2 2x\left(x^2+1\right)^4\,dx$. Sea $u = x^2+1$, $du = 2x\,dx$. Los límites también cambian:

- Cuando $x = 0$: $u = 0^2 + 1 = 1$ (nuevo límite inferior).
- Cuando $x = 2$: $u = 2^2 + 1 = 5$ (nuevo límite superior).

$$\int_0^2 2x(x^2+1)^4\,dx = \int_1^5 u^4\,du = \left[\frac{u^5}{5}\right]_1^5 = \frac{3125 - 1}{5} = \frac{3124}{5} = 624.8$$

Si olvidas cambiar los límites y evalúas $u$ entre 0 y 2, el resultado es incorrecto. Esta es la trampa más frecuente de la sustitución.

## Integración por partes

La **regla del producto** para derivadas dice $(uv)' = u'v + uv'$. Despejando e integrando se obtiene la fórmula de **integración por partes**:

$$\int u\,dv = uv - \int v\,du$$

Leamos cada símbolo antes de usarlo:

- $u$ y $v$ son funciones de $x$ (las elegiremos nosotros).
- $dv$ es el diferencial de $v$, y $du$ el de $u$.
- La fórmula transforma una integral (la de $u\,dv$) en otra (la de $v\,du$) que debe ser **más fácil**. Si la nueva integral es peor, hay que intercambiar la elección de $u$ y $dv$.

La técnica sirve para productos de funciones de **tipos distintos**: un polinomio por una exponencial, un logaritmo por una potencia, etc. La regla **LIATE** sugiere el orden para elegir $u$, de mayor a menor prioridad:

1. **L**ogarítmica ($\ln x$, $\log x$)
2. **I**nversa trigonométrica ($\arctan x$, $\arcsin x$)
3. **A**lgebraica ($x$, $x^2$, polinomios)
4. **T**rigonométrica ($\operatorname{sen}x$, $\cos x$)
5. **E**xponencial ($e^x$, $a^x$)

Se elige como $u$ la función que aparezca **primero** en la lista, y el resto es $dv$.

**Ejemplo 1.** $\displaystyle\int x\,e^x\,dx$. Por LIATE, $u = x$ (algebraica) y $dv = e^x\,dx$ (exponencial). Entonces $du = dx$ y $v = e^x$.

$$\int x e^x\,dx = x e^x - \int e^x\,dx = x e^x - e^x + C = (x-1)e^x + C$$

**Verificación.** Derivamos $(x-1)e^x$: $e^x + (x-1)e^x = xe^x$. Correcto.

**Ejemplo 2.** $\displaystyle\int x\ln x\,dx$. Aquí $u = \ln x$ (logarítmica, primera en LIATE) y $dv = x\,dx$. Entonces $du = \frac{1}{x}\,dx$ y $v = \frac{x^2}{2}$.

$$\int x\ln x\,dx = \frac{x^2}{2}\ln x - \int \frac{x^2}{2}\cdot\frac{1}{x}\,dx = \frac{x^2}{2}\ln x - \frac{1}{2}\int x\,dx = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C$$

**Ejemplo 3.** $\displaystyle\int \ln x\,dx$. Parece no tener producto, pero escribimos $\ln x = \ln x \cdot 1$ y tomamos $u = \ln x$, $dv = dx$. Entonces $du = \frac{1}{x}\,dx$, $v = x$.

$$\int \ln x\,dx = x\ln x - \int x\cdot\frac{1}{x}\,dx = x\ln x - \int 1\,dx = x\ln x - x + C$$

**Ejemplo 4 (repetir partes).** $\displaystyle\int x^2 e^x\,dx$. Tomamos $u = x^2$, $dv = e^x dx$, con lo que $du = 2x\,dx$, $v = e^x$:

$$\int x^2 e^x\,dx = x^2 e^x - 2\int x e^x\,dx$$

La nueva integral es la del ejemplo 1, que ya sabemos vale $(x-1)e^x$. Entonces

$$\int x^2 e^x\,dx = x^2 e^x - 2(x-1)e^x + C = \left(x^2 - 2x + 2\right)e^x + C$$

**Ejemplo 5 (integral cíclica).** $\displaystyle\int e^x\operatorname{sen}x\,dx$. Aplicamos partes con $u = \operatorname{sen}x$, $dv = e^x dx$: $du = \cos x\,dx$, $v = e^x$.

$$\int e^x\operatorname{sen}x\,dx = e^x\operatorname{sen}x - \int e^x\cos x\,dx$$

Aplicamos partes otra vez a la integral del coseno ($u = \cos x$, $dv = e^x dx$): $\int e^x\cos x\,dx = e^x\cos x + \int e^x\operatorname{sen}x\,dx$. Sustituyendo:

$$I = e^x\operatorname{sen}x - e^x\cos x - I \quad\Rightarrow\quad 2I = e^x(\operatorname{sen}x - \cos x) \quad\Rightarrow\quad I = \frac{e^x}{2}\left(\operatorname{sen}x - \cos x\right) + C$$

La integral "vuelve a aparecer"; se despeja como una ecuación y se obtiene el resultado.

## Fracciones parciales

Esta técnica integra **funciones racionales**, es decir, cocientes de polinomios $P(x)/Q(x)$ como $\frac{x+3}{x^2+3x+2}$. La idea es descomponer una fracción complicada en una suma de fracciones simples cuya integral ya conocemos: logaritmos y arcotangentes.

**Requisito previo.** La fracción debe ser **propia**: el grado del numerador $P$ debe ser menor que el grado del denominador $Q$. Si no lo es, primero se hace la división larga de polinomios y se separa un polinomio más una fracción propia.

**El método.** (1) Factoriza el denominador $Q(x)$ en factores lineales (como $x-2$) y cuadráticos irreducibles (como $x^2+4$). (2) Propón una suma de fracciones, una por cada factor, con constantes desconocidas en los numeradores. (3) Calcula las constantes. (4) Integra cada fracción simple.

**Caso 1: factores lineales distintos.** A cada factor $x - r$ le corresponde una fracción $\frac{A}{x-r}$.

**Ejemplo.** $\displaystyle\int \frac{1}{x^2-1}\,dx$. El denominador se factoriza como $(x-1)(x+1)$. Proponemos

$$\frac{1}{x^2-1} = \frac{A}{x-1} + \frac{B}{x+1}$$

Multiplicando por $(x-1)(x+1)$: $1 = A(x+1) + B(x-1)$. Evaluando en $x = 1$: $1 = 2A \Rightarrow A = \frac{1}{2}$. Evaluando en $x = -1$: $1 = -2B \Rightarrow B = -\frac{1}{2}$.

$$\int \frac{1}{x^2-1}\,dx = \frac{1}{2}\int\frac{1}{x-1}\,dx - \frac{1}{2}\int\frac{1}{x+1}\,dx = \frac{1}{2}\ln\mid x-1\mid - \frac{1}{2}\ln\mid x+1\mid + C = \frac{1}{2}\ln\left\lvert\frac{x-1}{x+1}\right\rvert + C$$

**Ejemplo con numerador no constante.** $\displaystyle\int \frac{x+3}{x^2+3x+2}\,dx$. Factorizamos: $(x+1)(x+2)$. Proponemos $\frac{x+3}{(x+1)(x+2)} = \frac{A}{x+1} + \frac{B}{x+2}$. Multiplicando: $x + 3 = A(x+2) + B(x+1)$. En $x = -1$: $2 = A$. En $x = -2$: $1 = -B \Rightarrow B = -1$. Entonces

$$\int \frac{x+3}{x^2+3x+2}\,dx = 2\ln\mid x+1\mid - \ln\mid x+2\mid + C$$

**Caso 2: factores lineales repetidos.** A $(x-r)^m$ le corresponden $m$ fracciones: $\frac{A_1}{x-r} + \frac{A_2}{(x-r)^2} + \cdots + \frac{A_m}{(x-r)^m}$.

**Caso 3: factor cuadrático irreducible.** A $x^2 + bx + c$ (sin raíces reales) le corresponde una fracción $\frac{Ax+B}{x^2+bx+c}$. Para integrarla, se completa el cuadrado en el denominador y aparecen un logaritmo (de la parte con $x$) y una arcotangente (de la parte constante).

**Ejemplo.** $\displaystyle\int \frac{1}{x^2+4}\,dx$. Completando el cuadrado: $x^2+4 = 4\left(\left(\frac{x}{2}\right)^2 + 1\right)$. Con la sustitución $u = x/2$, $dx = 2\,du$:

$$\int \frac{1}{x^2+4}\,dx = \frac{1}{2}\arctan\frac{x}{2} + C$$

**Ejemplo con numerador lineal.** $\displaystyle\int \frac{2x+1}{x^2+x+1}\,dx$. El numerador es exactamente la derivada del denominador ($(x^2+x+1)' = 2x+1$), así que la integral es directamente un logaritmo:

$$\int \frac{2x+1}{x^2+x+1}\,dx = \ln\mid x^2+x+1\mid + C$$

## Sustitución trigonométrica

Esta técnica se usa cuando el integrando contiene **raíces de expresiones cuadráticas** como $\sqrt{a^2-x^2}$, $\sqrt{a^2+x^2}$ o $\sqrt{x^2-a^2}$. La idea es aprovechar las identidades pitagóricas para eliminar la raíz:

- $1 - \operatorname{sen}^2\theta = \cos^2\theta$
- $1 + \tan^2\theta = \sec^2\theta$
- $\sec^2\theta - 1 = \tan^2\theta$

Según el radical que aparezca, se elige la sustitución:

| Radical | Sustitución | Identidad que elimina la raíz |
|---|---|---|
| $\sqrt{a^{2}-x^{2}}$ | $x = a\operatorname{sen}\theta$ | $1-\operatorname{sen}^2\theta = \cos^2\theta$ |
| $\sqrt{a^{2}+x^{2}}$ | $x = a\tan\theta$ | $1+\tan^2\theta = \sec^2\theta$ |
| $\sqrt{x^{2}-a^{2}}$ | $x = a\sec\theta$ | $\sec^2\theta-1 = \tan^2\theta$ |

Además hay que calcular el diferencial ($dx = a\cos\theta\,d\theta$ en el primer caso, por ejemplo) y, al final, **volver a $x$**. Para eso se dibuja un **triángulo rectángulo** con los lados que sugiere la sustitución: por ejemplo, si $x = a\operatorname{sen}\theta$, entonces $\operatorname{sen}\theta = x/a$; un triángulo con cateto opuesto $x$, hipotenusa $a$ y cateto adyacente $\sqrt{a^2-x^2}$ permite leer cualquier función trigonométrica de $\theta$ en términos de $x$.

**Ejemplo 1.** $\displaystyle\int \sqrt{1-x^2}\,dx$. Con $x = \operatorname{sen}\theta$ y $dx = \cos\theta\,d\theta$:

$$\sqrt{1-x^2} = \sqrt{1-\operatorname{sen}^2\theta} = \cos\theta$$

$$\int \sqrt{1-x^2}\,dx = \int \cos^2\theta\,d\theta = \int \frac{1+\cos 2\theta}{2}\,d\theta = \frac{\theta}{2} + \frac{\operatorname{sen}2\theta}{4} + C$$

Para volver a $x$ usamos $\theta = \arcsin x$ y la identidad $\operatorname{sen}2\theta = 2\operatorname{sen}\theta\cos\theta = 2x\sqrt{1-x^2}$. El resultado es

$$\int \sqrt{1-x^2}\,dx = \frac{1}{2}\left(x\sqrt{1-x^2} + \arcsin x\right) + C$$

**Ejemplo 2.** $\displaystyle\int \frac{x^2}{\sqrt{1-x^2}}\,dx$. Con $x = \operatorname{sen}\theta$:

$$\int \frac{\operatorname{sen}^2\theta}{\cos\theta}\cos\theta\,d\theta = \int \operatorname{sen}^2\theta\,d\theta = \frac{\theta}{2} - \frac{\operatorname{sen}2\theta}{4} + C = \frac{1}{2}\left(\arcsin x - x\sqrt{1-x^2}\right) + C$$

**Ejemplo 3.** $\displaystyle\int \frac{1}{x^2\sqrt{x^2+1}}\,dx$. Con $x = \tan\theta$, $dx = \sec^2\theta\,d\theta$:

$$\int \frac{\sec^2\theta}{\tan^2\theta\sec\theta}\,d\theta = \int \frac{\sec\theta}{\tan^2\theta}\,d\theta = \int \frac{\cos\theta}{\operatorname{sen}^2\theta}\,d\theta = -\frac{1}{\operatorname{sen}\theta} + C = -\frac{\sqrt{1+x^2}}{x} + C$$

En el último paso usamos el triángulo: con $\tan\theta = x$, la hipotenusa es $\sqrt{1+x^2}$, de modo que $\operatorname{sen}\theta = \frac{x}{\sqrt{1+x^2}}$.

**Ejemplo 4.** $\displaystyle\int \frac{1}{\left(x^2+1\right)^{3/2}}\,dx$. Con $x = \tan\theta$:

$$\int \frac{\sec^2\theta}{\sec^3\theta}\,d\theta = \int \cos\theta\,d\theta = \operatorname{sen}\theta + C = \frac{x}{\sqrt{1+x^2}} + C$$

## Integrales definidas, áreas y volúmenes

La integral definida es la herramienta para medir cantidades acumuladas. Estas son las aplicaciones geométricas y físicas más importantes.

**Área con signo contra área geométrica.** Si $f(x) \geq 0$ en $[a,b]$, entonces $\int_a^b f$ es exactamente el área bajo la curva. Si $f$ es negativa, la integral resta esa región. El **área geométrica** (siempre positiva) se obtiene integrando el valor absoluto: $\int_a^b \lvert f(x)\rvert\,dx$. Confundir ambas es un error clásico.

**Área entre dos curvas.** Si $f(x) \geq g(x)$ en $[a,b]$, el área encerrada entre las curvas es la integral de la diferencia:

$$A = \int_a^b \big[f(x) - g(x)\big]\,dx$$

**Ejemplo.** Área entre $y = x$ y $y = x^2$ en $[0,1]$. En ese intervalo $x \geq x^2$, entonces

$$A = \int_0^1 (x - x^2)\,dx = \left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}$$

Primero conviene hallar los puntos de corte igualando $x = x^2 \Rightarrow x(x-1) = 0$, de donde los límites son $0$ y $1$.

**Volumen de revolución: método de discos.** Si la región bajo $y = f(x)$ en $[a,b]$ gira alrededor del eje $x$, cada rebanada vertical genera un disco de radio $f(x)$ y área transversal $\pi[f(x)]^2$. Sumando discos:

$$V = \pi\int_a^b \big[f(x)\big]^2\,dx$$

**Ejemplo.** Al girar $y = \sqrt{x}$ en $[0,4]$ alrededor del eje $x$:

$$V = \pi\int_0^4 x\,dx = \pi\left[\frac{x^2}{2}\right]_0^4 = \pi\cdot 8 = 8\pi \approx 25.13$$

**Volumen: método de arandelas.** Si la región está entre dos curvas $R(x) \geq r(x)$ (radio exterior y radio interior), cada rebanada genera una arandela (disco con agujero):

$$V = \pi\int_a^b \left([R(x)]^2 - [r(x)]^2\right)dx$$

**Volumen: método de cascarones cilíndricos.** Cuando es más fácil integrar respecto a $x$ pero el giro es alrededor del eje $y$, cada franja vertical genera un tubo de radio $x$, altura $f(x)$ y grosor $dx$:

$$V = 2\pi\int_a^b x\,f(x)\,dx$$

**Longitud de arco.** La longitud de la curva $y = f(x)$ entre $a$ y $b$ se obtiene sumando hipotenusas infinitesimales $\sqrt{dx^2 + dy^2}$:

$$L = \int_a^b \sqrt{1 + \big[f'(x)\big]^2}\,dx$$

**Valor promedio de una función.** El promedio de $f$ en $[a,b]$ es la altura de un rectángulo que tendría la misma área:

$$\bar{f} = \frac{1}{b-a}\int_a^b f(x)\,dx$$

El factor $\frac{1}{b-a}$ divide entre la longitud del intervalo, igual que un promedio aritmético divide entre la cantidad de datos.

**Trabajo.** Si una fuerza $F(x)$ actúa a lo largo del desplazamiento $x$, el trabajo es la integral de la fuerza:

$$W = \int_a^b F(x)\,dx$$

**Ejemplo (resorte).** Un resorte requiere fuerza $F(x) = 50x$ newtons para estirarse $x$ metros. El trabajo para estirarlo 0.2 m es

$$W = \int_0^{0.2} 50x\,dx = \left[25x^2\right]_0^{0.2} = 25(0.04) = 1 \text{ julio}$$

**Ejemplo (flujo de ingreso).** Un flujo de ingreso de $f(t) = 1000e^{-0.05t}$ por año durante 10 años acumula

$$\int_0^{10} 1000e^{-0.05t}\,dt = \left[-20000e^{-0.05t}\right]_0^{10} = 20000\left(1 - e^{-0.5}\right) \approx 7869.39$$

## Integrales impropias

Una integral es **impropia** cuando el intervalo de integración es infinito o cuando la función se vuelve infinita en algún punto. En ambos casos no se puede aplicar directamente el teorema fundamental; se define como un **límite**.

**Tipo 1: intervalo infinito.**

$$\int_a^{\infty} f(x)\,dx = \lim_{t\to\infty} \int_a^t f(x)\,dx$$

Se calcula la integral hasta un valor finito $t$ y luego se toma el límite. Si el límite existe y es finito, la integral **converge**; si no, **diverge**.

**Ejemplo 1.** $\displaystyle\int_1^{\infty} \frac{1}{x^2}\,dx$.

$$\int_1^t x^{-2}\,dx = \left[-\frac{1}{x}\right]_1^t = -\frac{1}{t} + 1 \;\xrightarrow[t\to\infty]{}\; 1$$

La integral converge y vale 1. Geométricamente, aunque la región se extiende infinitamente hacia la derecha, su área es finita porque la curva baja lo suficientemente rápido.

**Ejemplo 2.** $\displaystyle\int_1^{\infty} \frac{1}{x}\,dx = \lim_{t\to\infty}\Big[\ln x\Big]_1^t = \lim_{t\to\infty}\ln t = \infty$.

Diverge. Este contraste es crucial: la función $1/x$ también tiende a cero, pero **no lo suficientemente rápido**. Que el integrando tienda a cero no garantiza convergencia.

**Criterio de referencia (criterio p).**

$$\int_1^{\infty} \frac{1}{x^{p}}\,dx \text{ converge si } p > 1 \text{ y diverge si } p \leq 1$$

Aquí $p$ es un exponente constante (por ejemplo $p = 2$, $p = 1.5$, $p = 1$). Si $p$ es mayor que 1, la curva decrece lo bastante rápido para que el área total sea finita.

**Tipo 2: discontinuidad infinita.** Si $f$ se hace infinita en $a$, en $b$ o en un punto interior $c$, se corta el intervalo y se toma límite. Por ejemplo, si el problema está en $b$:

$$\int_a^b f(x)\,dx = \lim_{t\to b^-} \int_a^t f(x)\,dx$$

**Ejemplo 3.** $\displaystyle\int_0^1 \frac{1}{\sqrt{x}}\,dx$. La función se dispara en $x = 0$ (asíntota vertical). Calculamos desde un valor pequeño $t$ y tomamos límite:

$$\lim_{t\to 0^+}\Big[2\sqrt{x}\Big]_t^1 = \lim_{t\to 0^+}\left(2 - 2\sqrt{t}\right) = 2$$

La integral converge a 2, aunque la función no esté definida en el extremo.

**Comparación.** Cuando una integral impropia se parece a otra conocida, el **criterio de comparación** ayuda: si $0 \leq f(x) \leq g(x)$ y la integral de $g$ converge, entonces la de $f$ también converge; si la de $f$ diverge, la de $g$ también. Es el mismo espíritu de comparar con las series.

## Ejemplos resueltos

**Ejemplo 1 (inmediata).** $\displaystyle\int \left(3x^2 - 2x + 1\right)dx$.

Integramos término a término con la regla de la potencia:

$$3\cdot\frac{x^3}{3} - 2\cdot\frac{x^2}{2} + x + C = x^3 - x^2 + x + C$$

Verificación por derivación: $3x^2 - 2x + 1$. Correcto.

**Ejemplo 2 (sustitución).** $\displaystyle\int 2x\cos\left(x^2\right)dx$.

Sea $u = x^2$, con $du = 2x\,dx$. Entonces $\int \cos u\,du = \operatorname{sen}u + C = \operatorname{sen}\left(x^2\right) + C$.

**Ejemplo 3 (partes).** $\displaystyle\int x\ln x\,dx$.

Por LIATE, $u = \ln x$ y $dv = x\,dx$; entonces $du = \frac{1}{x}\,dx$ y $v = \frac{x^2}{2}$.

$$\int x\ln x\,dx = \frac{x^2}{2}\ln x - \int \frac{x}{2}\,dx = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C$$

**Ejemplo 4 (definida).** $\displaystyle\int_0^{\pi} \operatorname{sen}x\,dx$.

La antiderivada del seno es $-\cos x$, entonces

$$\Big[-\cos x\Big]_0^{\pi} = (-\cos\pi) - (-\cos 0) = 1 + 1 = 2$$

**Ejemplo 5 (área).** Área entre $y = x$ y $y = x^2$ en $[0,1]$: ya calculada, vale $\frac{1}{6}$. Primero se hallan los cortes ($x = 0$ y $x = 1$) y se identifica cuál curva está arriba ($y = x$).

**Ejemplo 6 (física, trabajo).** Un resorte requiere $F(x) = 50x$ N para estirarse $x$ m. El trabajo para estirarlo 0.2 m:

$$W = \int_0^{0.2} 50x\,dx = \left[25x^2\right]_0^{0.2} = 25(0.04) = 1 \text{ julio}$$

**Ejemplo 7 (volumen).** Volumen del sólido al girar $y = \sqrt{x}$ en $[0,4]$ alrededor del eje $x$:

$$V = \pi\int_0^4 x\,dx = \pi\left[\frac{x^2}{2}\right]_0^4 = 8\pi \approx 25.13 \text{ unidades cúbicas}$$

**Ejemplo 8 (economía, flujo).** El flujo de ingreso es $f(t) = 1000e^{-0.05t}$ por año. El ingreso total durante 10 años:

$$\int_0^{10} 1000e^{-0.05t}\,dt = \left[-20000e^{-0.05t}\right]_0^{10} = 20000\left(1 - e^{-0.5}\right) \approx 7869.39$$

**Ejemplo 9 (impropia).** $\displaystyle\int_1^{\infty} \frac{1}{x^{1.5}}\,dx$. Como $p = 1.5 > 1$, converge:

$$\lim_{t\to\infty}\left[-\frac{2}{\sqrt{x}}\right]_1^t = \lim_{t\to\infty}\left(2 - \frac{2}{\sqrt{t}}\right) = 2$$

## Errores comunes

**Olvidar la constante $C$ en la integral indefinida.** La familia $x^3 + C$ contiene todas las antiderivadas; escribir solo $x^3$ pierde infinitas soluciones. En una integral definida, en cambio, la constante se cancela y no se escribe.

**Integrar productos como si fueran productos de integrales.** No existe una regla del producto para integrales. Para $\int x e^x\,dx$ hay que usar partes; escribir $\left(\int x\right)\left(\int e^x\right)$ es incorrecto.

**No cambiar los límites al sustituir en una integral definida.** Si haces $u = x^2+1$ y sigues evaluando entre 0 y 2 (valores de $x$), el resultado está mal. O cambias los límites a los valores de $u$, o vuelves a la variable $x$ antes de evaluar.

**Confundir área con integral.** Si la función es negativa, la integral es negativa; el área geométrica es la integral del valor absoluto. La integral mide área **con signo**.

**Aplicar el teorema fundamental sin continuidad.** La función debe ser continua en $[a,b]$ (o al menos integrable). Con asíntotas verticales dentro del intervalo, hay que tratar la integral como impropia y usar límites.

**Elegir mal $u$ y $dv$ en partes.** Si después de aplicar la fórmula la integral resultante es más complicada, conviene intercambiar la elección. La regla LIATE es una guía, no un mandato absoluto.

**Olvidar la regla de la cadena al verificar.** Al verificar una antiderivada derivando, hay que aplicar la cadena, sobre todo en sustituciones. Verificar siempre es la mejor forma de detectar errores.

**Dividir entre una variable sin analizar el caso cero.** Al separar variables o simplificar, puede perderse la solución constante. En integración, simplificar sin cuidado puede cambiar el dominio de validez.

## Ejercicios propuestos (con respuestas)

1. $\displaystyle\int \left(3x^2 - 2x + 1\right)dx$.
2. $\displaystyle\int e^{5x}\,dx$.
3. $\displaystyle\int x\cos\left(x^2\right)dx$ (sustitución).
4. $\displaystyle\int x e^{2x}\,dx$ (por partes).
5. $\displaystyle\int_1^2 \frac{1}{x^2}\,dx$.
6. Área entre $y = x$ y $y = x^2$ en $[0,1]$.
7. Volumen al girar $y = x^2$ en $[0,2]$ alrededor del eje $x$.
8. ¿Converge $\displaystyle\int_1^{\infty} \frac{1}{x^{1.5}}\,dx$?
9. $\displaystyle\int \frac{\ln x}{x}\,dx$.
10. $\displaystyle\int \frac{2x+1}{x^2+x+1}\,dx$.
11. $\displaystyle\int \sqrt{1-x^2}\,dx$ (sustitución trigonométrica).
12. $\displaystyle\int_0^1 \frac{1}{\sqrt{x}}\,dx$ (impropia).

**Respuestas:**

1) $x^3 - x^2 + x + C$.
2) $\dfrac{e^{5x}}{5} + C$.
3) $\dfrac{\operatorname{sen}\left(x^2\right)}{2} + C$.
4) $\dfrac{e^{2x}}{2}\left(x - \dfrac{1}{2}\right) + C$.
5) $\dfrac{1}{2}$.
6) $\dfrac{1}{6}$.
7) $\dfrac{32\pi}{5}$.
8) Sí, converge a $2$.
9) $\dfrac{(\ln x)^2}{2} + C$.
10) $\ln\mid x^2+x+1\mid + C$.
11) $\dfrac{1}{2}\left(x\sqrt{1-x^2} + \arcsin x\right) + C$.
12) Converge a $2$.

## Resumen

- **Integrar es acumular.** La integral definida nace como el límite de las sumas de Riemann: sumar infinitas rebanadas de altura $f(x)$ y ancho infinitesimal $dx$.
- **Cada símbolo cuenta.** $\int$ es la S de suma, $a$ y $b$ son los límites, $f(x)$ es el integrando, $dx$ indica la variable y el ancho infinitesimal, y $C$ es la constante de integración de la integral indefinida.
- **Antiderivar es deshacer la derivada.** Todas las antiderivadas forman la familia $F(x) + C$; una condición inicial elige una sola curva.
- **El teorema fundamental conecta todo.** $\int_a^b f = F(b) - F(a)$ convierte un problema de áreas en una resta, y $\frac{d}{dx}\int_a^x f = f$ dice que derivar e integrar son inversos.
- **Técnicas.** Sustitución (revés de la cadena), partes (revés del producto, guiada por LIATE), fracciones parciales (para racionales) y sustitución trigonométrica (para raíces cuadráticas).
- **Aplicaciones.** Áreas entre curvas, volúmenes por discos, arandelas y cascarones, longitud de arco, valor promedio y trabajo.
- **Impropias.** Cuando el intervalo es infinito o la función se dispara, se usan límites; el criterio p es la referencia: $\int_1^{\infty} x^{-p}$ converge si y solo si $p > 1$.
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

Una **ecuación diferencial** es una ecuación cuya incógnita es una **función completa**, no un número. Compáralo con lo que conoces: en la ecuación $3x + 5 = 11$ buscamos un número $x$; en una ecuación diferencial buscamos todas las funciones $y(x)$ que, al sustituirlas junto con sus derivadas, hacen que la igualdad se cumpla. La derivada aparece porque casi todo lo que cambia en el mundo se describe mejor por su **razón de cambio** que por su valor actual: no basta decir "hay 1000 bacterias", interesa saber "cuántas habrá en una hora", y eso depende de la rapidez con que se reproducen.

Una **ecuación diferencial ordinaria** (EDO) es la que involucra una sola variable independiente. Su forma general es:

$$F(x, y, y', y'', \ldots, y^{(n)}) = 0$$

Aquí cada símbolo tiene un papel:

- $x$ es la **variable independiente** (por ejemplo, el tiempo $t$).
- $y = y(x)$ es la **función incógnita**: lo que queremos averiguar.
- $y'$, $y''$, $\ldots$, $y^{(n)}$ son las derivadas de $y$ respecto de $x$.
- $F$ es una fórmula que combina todo lo anterior.

Si la función depende de **varias** variables, por ejemplo $u(x,t)$, hablamos de **ecuación en derivadas parciales** (EDP), tema de otro capítulo. Aquí solo trataremos EDO.

**Ejemplos cotidianos donde aparece una EDO.**

- **Bacterias en un cultivo.** Mientras más bacterias hay, más rápido se reproducen. Si $P(t)$ es la población en el instante $t$, el enunciado "la velocidad de crecimiento es proporcional a la población actual" se escribe $\dfrac{dP}{dt} = kP$. La incógnita es la función $P(t)$.
- **Café que se enfría.** La temperatura baja rápido al principio y lento al final, porque la velocidad de enfriamiento es proporcional a la **diferencia** con la sala: $\dfrac{dT}{dt} = -k(T - T_{\text{amb}})$.
- **Paracaidista.** La velocidad no crece sin límite: la gravedad empuja hacia abajo y el aire frena. Con masa $m$, gravedad $g$ y coeficiente de roce $c$: $m\dfrac{dv}{dt} = mg - cv$.
- **Circuito eléctrico.** Al encender una bobina, la corriente no salta de golpe: $L\dfrac{di}{dt} + Ri = V$, donde $L$ es la inductancia, $R$ la resistencia, $i(t)$ la corriente y $V$ el voltaje aplicado.
- **Interés continuo.** Un capital $C$ que crece al $5\%$ instantáneo obedece $\dfrac{dC}{dt} = 0{,}05\,C$.
- **Mezclas.** Un estanque donde entra agua con sal y sale mezcla: la cantidad de sal cambia según el balance entre lo que entra y lo que sale.

En todos los casos la ecuación no dice cuánto vale la función, sino **cómo cambia**. Resolverla significa reconstruir toda la historia del fenómeno a partir de su ley de cambio.

**Qué significa resolver.** Resolver una EDO es encontrar todas las funciones que la satisfacen en un intervalo. Por ejemplo, para $y' = 2x$ cualquier función de la forma $y = x^2 + C$ sirve, porque su derivada es $2x$ sin importar el valor de $C$. La comprobación siempre consiste en sustituir: calcula $y'$, reemplaza en la ecuación y verifica que la igualdad sea cierta para todo $x$ del intervalo.

## Cómo leer la notación

Antes de resolver, hay que saber **leer**. Estos son los símbolos que usaremos todo el curso:

- $\dfrac{dy}{dx}$ es la **derivada de $y$ respecto de $x$**: mide la razón de cambio instantánea. No es una fracción común, sino el límite de $\dfrac{\Delta y}{\Delta x}$ cuando $\Delta x \to 0$. Es decir, cuánto cambia $y$ por cada unidad de cambio de $x$, medido en el límite. En las ecuaciones separables la trataremos como si fuera una fracción, y eso se justifica con la regla de la cadena.
- $y'$ es otra forma de escribir $\dfrac{dy}{dx}$ (notación de Lagrange, más corta).
- $y''$ es la **segunda derivada**: la derivada de la derivada, $\dfrac{d^2y}{dx^2}$. El $2$ indica que derivamos dos veces; no significa "elevar al cuadrado".
- $y'''$ y $y^{(4)}$ continúan la lista. A partir de la cuarta se usa $y^{(n)}$ con paréntesis para no confundir con potencias.
- $\dot{y}$ es la notación de Newton para derivadas respecto del **tiempo**; es muy usada en física.
- $y(x)$ significa que $y$ depende de $x$. Escribir $y(0) = 3$ **no es multiplicar**: es la **condición inicial**, e indica que cuando $x = 0$ la función vale $3$.
- $\dfrac{\partial f}{\partial x}$ (con d redondeada) es la **derivada parcial**: se deriva respecto de $x$ tratando las demás variables como constantes. Solo aparece cuando hay más de una variable independiente.

Así, la ecuación

$$y' + 2y = e^{-x}$$

se lee: "buscamos una función $y(x)$ cuya razón de cambio, más el doble de su valor, sea igual a $e^{-x}$ para todo $x$". Y la ecuación

$$y'' + 9y = 0$$

se lee: "buscamos una función cuya segunda derivada sea exactamente el opuesto de nueve veces la función". Ese tipo de ecuación describe oscilaciones: cuando la función es positiva, la segunda derivada es negativa (curva hacia abajo), y viceversa, lo que produce un vaivén.

## Orden, linealidad y soluciones

**Orden.** El orden de una EDO es el de la derivada más alta que aparece. Es la primera etiqueta para clasificarla, porque determina cuántas constantes tendrá la solución general y qué métodos usar.

- $y' = 3x^2$ es de **primer orden**.
- $y'' + 4y = 0$ es de **segundo orden**.
- $y''' + y\,y' = 0$ es de **tercer orden**.

**Linealidad.** Una EDO es **lineal** si se puede escribir en la forma

$$a_n(x)\,y^{(n)} + \cdots + a_2(x)\,y'' + a_1(x)\,y' + a_0(x)\,y = g(x)$$

donde los coeficientes $a_i(x)$ y el término $g(x)$ dependen solo de $x$. La clave: la incógnita $y$ y sus derivadas aparecen **sumadas**, cada una a la primera potencia, sin multiplicarse entre sí y sin estar dentro de funciones como $\text{sen}(y)$ o $e^{y}$.

- Son lineales: $y' + 2y = e^{-x}$; $x^2y'' + y = 0$; $y''' - 3y = x$. Observa que $x^2$ en un coeficiente no rompe la linealidad: el coeficiente puede ser complicado, la incógnita no.
- No son lineales: $y' = y^2$ (potencia de $y$); $y\,y' = x$ (producto de incógnitas); $y'' + \text{sen}(y) = 0$ (función de $y$).

La linealidad importa porque permite **sumar soluciones**: si $y_1$ y $y_2$ resuelven una ecuación lineal homogénea, cualquier combinación $C_1y_1 + C_2y_2$ también la resuelve. Esa propiedad (principio de superposición) es la base de los métodos de segundo orden.

**Solución general.** Es la familia de **todas** las soluciones, escrita con constantes arbitrarias. Para una EDO de orden $n$, la solución general suele tener $n$ constantes. Por ejemplo, $y' = 2x$ tiene por solución general $y = x^2 + C$ (una constante); $y'' = 6x$ tiene $y = x^3 + C_1x + C_2$ (dos constantes). La palabra "general" significa que cualquier solución particular se obtiene dándole valores a las constantes.

**Solución particular.** Es una solución concreta, sin constantes libres. Se obtiene de la general fijando las constantes con **condiciones**:

- **Condiciones iniciales:** se especifican el valor de la función y de algunas derivadas en un mismo punto, por ejemplo $y(0) = 3$ o $y(0) = 1$, $y'(0) = 0$.
- **Condiciones de frontera:** se especifican valores en dos puntos distintos, por ejemplo $y(0) = 0$ y $y(1) = 1$.

Una EDO junto con condiciones iniciales forma un **problema de valor inicial**. La teoría garantiza que, bajo condiciones suaves, existe una única solución: la condición inicial selecciona exactamente una curva de toda la familia.

**Qué es exactamente $C$.** $C$ es una **constante arbitraria**: un número real cualquiera que representa la libertad que deja la integración. En $y = x^2 + C$, cada valor de $C$ da una parábola desplazada verticalmente; todas tienen la misma pendiente $2x$ y son paralelas entre sí. La condición $y(0) = 3$ obliga a $3 = 0 + C$, es decir, $C = 3$, y selecciona la parábola $y = x^2 + 3$. En segundo orden usamos $C_1$ y $C_2$ porque hacen falta dos condiciones para determinarlas.

**Ejemplo resuelto.** La ecuación $y'' = 6x$ se integra dos veces:

$$y' = \int 6x\,dx = 3x^2 + C_1, \qquad y = \int (3x^2 + C_1)\,dx = x^3 + C_1x + C_2$$

Con $y(0) = 1$ y $y'(0) = 2$: de $y(0) = C_2 = 1$ y de $y'(0) = C_1 = 2$, resulta $y = x^3 + 2x + 1$, la solución particular. Observa que las constantes se determinan **al final**, cuando ya se tiene la familia completa.

## Variables separables

El método más directo. Una EDO de primer orden es **separable** si se puede escribir como un producto de una función de $x$ por una función de $y$:

$$\frac{dy}{dx} = f(x)\,g(y)$$

La idea es **separar las variables**: dejar todo lo que tiene $y$ de un lado y todo lo que tiene $x$ del otro, y luego integrar:

$$\int \frac{dy}{g(y)} = \int f(x)\,dx$$

**¿Por qué funciona?** Si $H(y)$ es una antiderivada de $\dfrac{1}{g(y)}$, la regla de la cadena da $\dfrac{d}{dx}H(y(x)) = H'(y)\,y' = \dfrac{1}{g(y)}\,\dfrac{dy}{dx} = f(x)$. Entonces $H(y) = \int f(x)\,dx + C$. La manipulación con diferenciales es una forma cómoda de recordar el resultado, y la regla de la cadena es la razón rigurosa.

**Advertencia importante:** al dividir entre $g(y)$ hay que preguntarse si $g(y) = 0$ para algún valor constante de $y$. Si $y = c$ con $g(c) = 0$, esa **solución constante** satisface la ecuación y puede perderse en la división. Conviene analizarla aparte.

**Ejemplo 1 (crecimiento y decaimiento).** Resolvamos $y' = ky$, el modelo de poblaciones y de desintegración radiactiva. Separando:

$$\int \frac{dy}{y} = \int k\,dx \quad \Rightarrow \quad \ln|y| = kx + C$$

Para despejar $y$, aplicamos exponencial a ambos lados: $|y| = e^{kx+C} = e^{C}e^{kx}$. El factor $e^{C}$ es una constante positiva; permitiendo que tome también valores negativos y el cero (la solución constante $y = 0$), escribimos $y = Ce^{kx}$ con $C$ real. Si $k > 0$ la función crece (poblaciones); si $k < 0$ decae (radiactividad, enfriamiento).

**Ejemplo 2.** Resolvamos $y' = xy^2$. Separando:

$$\int \frac{dy}{y^2} = \int x\,dx \quad \Rightarrow \quad -\frac{1}{y} = \frac{x^2}{2} + C$$

Despejando: $y = -\dfrac{1}{x^2/2 + C}$. Aquí la división entre $y^2$ supone $y \neq 0$; la función constante $y = 0$ también resuelve la ecuación y la añadimos como caso aparte.

**Ejemplo 3 (con condición inicial).** Resolvamos $y' = \dfrac{x}{y}$ con $y(0) = 2$. Separando $y\,dy = x\,dx$ e integrando:

$$\frac{y^2}{2} = \frac{x^2}{2} + K \quad \Rightarrow \quad y^2 = x^2 + C$$

La condición $y(0) = 2$ da $4 = 0 + C$, así que $y^2 = x^2 + 4$. Al despejar hay dos ramas, $y = \sqrt{x^2+4}$ y $y = -\sqrt{x^2+4}$; como $y(0) = 2 > 0$, elegimos la positiva: $y = \sqrt{x^2 + 4}$. La constante ya quedó fijada y la solución es única.

**Ejemplo 4.** Para $y' = (1+y^2)\cos x$, separamos $\dfrac{dy}{1+y^2} = \cos x\,dx$. La integral de la izquierda es la arcotangente:

$$\arctan y = \text{sen}\,x + C \quad \Rightarrow \quad y = \tan(\text{sen}\,x + C)$$

No siempre se puede despejar $y$ con funciones elementales; a veces la solución se deja en forma implícita. En muchas aplicaciones eso es perfectamente válido.

## Ecuaciones lineales de primer orden y factor integrante

La forma estándar de una EDO lineal de primer orden es

$$y' + P(x)\,y = Q(x)$$

- $P(x)$ es el **coeficiente de $y$**: indica cuánto influye el valor actual en su propia razón de cambio.
- $Q(x)$ es el **término forzante** o fuente: lo que empuja el sistema desde afuera, sin depender de $y$.
- Si $Q(x) = 0$ la ecuación se llama **homogénea** y es separable; si $Q(x) \neq 0$, es **no homogénea**.

Este tipo de ecuación no siempre es separable, pero admite una técnica muy elegante: multiplicar por un **factor integrante**.

**¿Qué es un factor integrante?** Es una función $\mu(x) > 0$ que, al multiplicar la ecuación completa, convierte el lado izquierdo en la derivada de un producto. Buscamos $\mu$ tal que

$$\mu y' + \mu P y = (\mu y)'$$

Por la regla del producto, $(\mu y)' = \mu y' + \mu' y$. Comparando, necesitamos $\mu' = \mu P$, que es una ecuación separable:

$$\frac{\mu'}{\mu} = P \quad \Rightarrow \quad \ln \mu = \int P(x)\,dx \quad \Rightarrow \quad \mu(x) = e^{\int P(x)\,dx}$$

No hace falta agregar constante al integrar $P$: cualquier antiderivada produce un factor válido, porque una constante multiplicativa se cancela al final.

**El método completo.**

1. Escribe la ecuación en la forma $y' + P(x)y = Q(x)$.
2. Calcula $\mu = e^{\int P\,dx}$.
3. Multiplica **toda** la ecuación por $\mu$: queda $(\mu y)' = \mu Q$.
4. Integra ambos lados: $\mu y = \int \mu Q\,dx + C$.
5. Despeja: $y = \dfrac{1}{\mu}\left(\int \mu Q\,dx + C\right)$.

**Ejemplo resuelto 1.** Resolvamos $y' + 2y = e^{-x}$. Aquí $P = 2$ y $Q = e^{-x}$. El factor integrante es $\mu = e^{\int 2\,dx} = e^{2x}$. Multiplicando:

$$e^{2x}y' + 2e^{2x}y = e^{x} \quad \Rightarrow \quad (e^{2x}y)' = e^{x}$$

Integrando: $e^{2x}y = e^{x} + C$. Dividiendo entre $e^{2x}$:

$$y = e^{-x} + Ce^{-2x}$$

**Verificación.** Derivando $y' = -e^{-x} - 2Ce^{-2x}$ y sumando $2y = 2e^{-x} + 2Ce^{-2x}$ se obtiene $e^{-x}$, como exige la ecuación. Correcto.

**Ejemplo resuelto 2.** Resolvamos $y' + \dfrac{y}{x} = x^2$ para $x > 0$. Aquí $P = \dfrac{1}{x}$, así que

$$\mu = e^{\int \frac{dx}{x}} = e^{\ln x} = x$$

Multiplicando: $xy' + y = x^3$, que es $(xy)' = x^3$. Integrando: $xy = \dfrac{x^4}{4} + C$, y por lo tanto

$$y = \frac{x^3}{4} + \frac{C}{x}$$

**Ejemplo resuelto 3.** Para $y' - y = e^{x}$: $\mu = e^{\int(-1)dx} = e^{-x}$. Multiplicando: $(e^{-x}y)' = e^{-x}e^{x} = 1$. Integrando: $e^{-x}y = x + C$, es decir, $y = (x + C)e^{x}$. Este caso muestra una **resonancia**: el forzante $e^x$ tiene la misma forma que la solución homogénea $Ce^{x}$, y por eso aparece un factor $x$ extra.

## Ecuaciones exactas

Otra familia de primer orden se escribe en **forma diferencial**:

$$M(x,y)\,dx + N(x,y)\,dy = 0$$

donde $M$ y $N$ son funciones de dos variables. El método se basa en una idea geométrica: si el lado izquierdo es la **diferencial total** de alguna función $f(x,y)$, es decir,

$$df = \frac{\partial f}{\partial x}\,dx + \frac{\partial f}{\partial y}\,dy = M\,dx + N\,dy$$

entonces la ecuación dice simplemente $df = 0$, cuya solución son las **curvas de nivel** $f(x,y) = C$. Ese $C$ vuelve a ser la constante arbitraria, ahora etiquetando cada curva de nivel.

**Criterio de exactitud.** Si existen $f$ con $f_x = M$ y $f_y = N$, derivando otra vez y usando que las derivadas cruzadas coinciden ($f_{xy} = f_{yx}$), se obtiene la condición

$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

En dominios sin agujeros esta condición es **necesaria y suficiente**: si se cumple, la ecuación es exacta.

**Método para hallar $f$.**

1. Verifica que $M_y = N_x$.
2. Integra $M$ respecto de $x$, tratando $y$ como constante. Aparece una "constante de integración" que puede depender de $y$; llámala $g(y)$.
3. Deriva el resultado respecto de $y$ y **compáralo con $N$**: eso te da $g'(y)$.
4. Integra $g'(y)$ y escribe la solución $f(x,y) = C$.

**Ejemplo resuelto 1.** Resolvamos $(2xy)\,dx + (x^2)\,dy = 0$. Aquí $M = 2xy$ y $N = x^2$. Calculamos $M_y = 2x$ y $N_x = 2x$: coinciden, la ecuación es exacta. Integramos $M$ en $x$:

$$f = \int 2xy\,dx = x^2y + g(y)$$

Derivamos respecto de $y$: $f_y = x^2 + g'(y)$. Debe ser igual a $N = x^2$, así que $g'(y) = 0$ y $g$ es constante. La solución es la familia de curvas

$$x^2y = C$$

**Ejemplo resuelto 2.** Resolvamos $(3x^2 + y)\,dx + (x + 3y^2)\,dy = 0$. Aquí $M = 3x^2 + y$, $N = x + 3y^2$, y $M_y = 1 = N_x$: exacta. Integrando $M$ en $x$:

$$f = x^3 + xy + g(y)$$

Derivando en $y$: $f_y = x + g'(y)$, que debe igualar a $N = x + 3y^2$. Entonces $g'(y) = 3y^2$ y $g(y) = y^3$. La solución es

$$x^3 + xy + y^3 = C$$

**Cuando no es exacta.** Si $M_y \neq N_x$ puede existir un factor integrante (¡otra vez la misma idea!) que la vuelva exacta al multiplicar. De hecho, el método de la sección anterior es un caso particular: escribir $y' + Py = Q$ como $(Py - Q)\,dx + dy = 0$ y multiplicar por $\mu$ hace exacta la ecuación precisamente cuando $\mu' = \mu P$. Los conceptos encajan.

## Segundo orden homogéneo y ecuación característica

Pasamos a la ecuación lineal de segundo orden con coeficientes constantes:

$$ay'' + by' + cy = 0$$

donde $a \neq 0$, $b$ y $c$ son números fijos. Se llama **homogénea** porque el lado derecho es cero, y **de coeficientes constantes** porque no dependen de $x$. Modela osciladores mecánicos, circuitos, vibraciones y muchos sistemas físicos.

La observación clave: las derivadas de la exponencial $y = e^{rx}$ son múltiplos de ella misma ($y' = re^{rx}$, $y'' = r^2e^{rx}$). Si probamos esa forma, todos los términos quedan multiplicados por el factor común $e^{rx} \neq 0$ y la ecuación se reduce a un polinomio en $r$. Sustituyendo:

$$ar^2e^{rx} + bre^{rx} + ce^{rx} = 0 \quad \Rightarrow \quad e^{rx}\left(ar^2 + br + c\right) = 0$$

Como $e^{rx}$ nunca es cero, debe anularse el paréntesis:

$$ar^2 + br + c = 0$$

Esta es la **ecuación característica** (o ecuación auxiliar). Es característica porque su polinomio "caracteriza" por completo el comportamiento de las soluciones: sus raíces determinan si el sistema crece, decae u oscila. Sus soluciones son

$$r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

y el discriminante $\Delta = b^2 - 4ac$ decide cuál de los tres casos aparece.

**Caso 1: raíces reales distintas ($\Delta > 0$).** Si $r_1 \neq r_2$, las funciones $e^{r_1x}$ y $e^{r_2x}$ son dos soluciones independientes y la solución general es

$$y = C_1e^{r_1x} + C_2e^{r_2x}$$

**Caso 2: raíz doble ($\Delta = 0$).** La ecuación característica da una sola raíz $r$. Una solución es $e^{rx}$, pero hacen falta dos. La segunda es $xe^{rx}$ (se obtiene reduciendo el orden), así que

$$y = (C_1 + C_2x)e^{rx}$$

**Caso 3: raíces complejas conjugadas ($\Delta < 0$).** Las raíces son $r = \alpha \pm \beta i$, con $\alpha = -\dfrac{b}{2a}$ y $\beta = \dfrac{\sqrt{4ac - b^2}}{2a}$. Usando la fórmula de Euler $e^{i\theta} = \cos\theta + i\,\text{sen}\,\theta$, las exponenciales complejas se combinan en funciones reales:

$$y = e^{\alpha x}\left(C_1\cos\beta x + C_2\,\text{sen}\,\beta x\right)$$

La parte real $\alpha$ controla el crecimiento o decaimiento (el "envolvente" $e^{\alpha x}$) y la parte imaginaria $\beta$ controla la frecuencia de la oscilación.

**Ejemplo resuelto 1.** Para $y'' - y = 0$: la característica es $r^2 - 1 = 0$, con raíces $r = \pm 1$. Como son reales distintas:

$$y = C_1e^{x} + C_2e^{-x}$$

**Ejemplo resuelto 2.** Para $y'' - 5y' + 6y = 0$: $r^2 - 5r + 6 = 0$ se factoriza como $(r-2)(r-3) = 0$, con $r = 2$ y $r = 3$. Entonces $y = C_1e^{2x} + C_2e^{3x}$.

**Ejemplo resuelto 3.** Para $y'' - 4y' + 4y = 0$: $r^2 - 4r + 4 = (r-2)^2 = 0$, raíz doble $r = 2$. La solución es $y = (C_1 + C_2x)e^{2x}$.

**Ejemplo resuelto 4.** Para $y'' + 4y = 0$: $r^2 + 4 = 0$ da $r = \pm 2i$, es decir, $\alpha = 0$ y $\beta = 2$. Sin amortiguamiento, oscilación pura:

$$y = C_1\cos 2x + C_2\,\text{sen}\,2x$$

**Ejemplo resuelto 5.** Para $y'' + 2y' + 5y = 0$: $r^2 + 2r + 5 = 0$ da $r = -1 \pm 2i$, con $\alpha = -1$ y $\beta = 2$. La solución

$$y = e^{-x}\left(C_1\cos 2x + C_2\,\text{sen}\,2x\right)$$

describe una oscilación que se apaga: el factor $e^{-x}$ reduce la amplitud con el tiempo. Este es el caso típico de un resorte con roce.

## No homogéneas: coeficientes indeterminados

Ahora el lado derecho no es cero:

$$ay'' + by' + cy = g(x)$$

La función $g(x)$ se llama **término forzante**: representa una fuerza o señal externa. El resultado estructural fundamental es que la solución general es

$$y = y_h + y_p$$

donde $y_h$ es la solución general de la **homogénea asociada** $ay'' + by' + cy = 0$ (con sus constantes $C_1$, $C_2$) y $y_p$ es **una** solución particular cualquiera de la ecuación completa. ¿Por qué? Si $y$ y $y_p$ resuelven la no homogénea, su diferencia $y - y_p$ resuelve la homogénea; por lo tanto $y = y_h + y_p$. Toda la "libertad" vive en $y_h$; la particular solo aporta una respuesta concreta al forzante.

**Método de coeficientes indeterminados.**

1. Resuelve la homogénea y escribe $y_h$ con sus constantes.
2. Propón una $y_p$ con la **misma forma** que $g(x)$, pero con coeficientes desconocidos (letras $A$, $B$, etc.).
3. Sustituye $y_p$ en la ecuación completa y ajusta los coeficientes.
4. Escribe $y = y_h + y_p$ y, si hay condiciones iniciales, determina $C_1$ y $C_2$.

**Formas de la propuesta según $g(x)$.**

- Si $g$ es un polinomio de grado $n$, propón un polinomio completo de grado $n$: para $g = 4x$, prueba $y_p = Ax + B$; para $g = x^2$, prueba $Ax^2 + Bx + C$.
- Si $g = Ae^{kx}$, propón $y_p = Ce^{kx}$.
- Si $g$ es $\cos\omega x$, $\text{sen}\,\omega x$ o una combinación, propón **ambos**: $y_p = A\cos\omega x + B\,\text{sen}\,\omega x$, aunque falte uno de los dos.
- Si $g$ es un producto, por ejemplo $xe^{2x}$, propón el producto correspondiente $(Ax+B)e^{2x}$.

**Regla de duplicación (resonancia).** Si la propuesta ya aparece en $y_h$, multiplica la propuesta por $x$ (y por $x^2$ si la raíz es doble). Sin este ajuste, sustituir daría $0 = g(x)$, una contradicción.

**Ejemplo resuelto 1.** Resolvamos $y'' - y = e^{2x}$. La homogénea es $y'' - y = 0$, con $r = \pm 1$, así que $y_h = C_1e^{x} + C_2e^{-x}$. Como $e^{2x}$ no aparece en $y_h$, proponemos $y_p = Ae^{2x}$. Entonces $y_p'' = 4Ae^{2x}$ y

$$4Ae^{2x} - Ae^{2x} = e^{2x} \quad \Rightarrow \quad 3A = 1 \quad \Rightarrow \quad A = \frac{1}{3}$$

La solución general es

$$y = C_1e^{x} + C_2e^{-x} + \frac{1}{3}e^{2x}$$

**Ejemplo resuelto 2.** Para $y'' + y = 2$, la homogénea da $y_h = C_1\cos x + C_2\,\text{sen}\,x$. El forzante es constante, así que probamos $y_p = A$: sustituyendo, $0 + A = 2$, luego $y_p = 2$ y

$$y = C_1\cos x + C_2\,\text{sen}\,x + 2$$

**Ejemplo resuelto 3.** Para $y'' + 3y' + 2y = 4x$: la característica $r^2 + 3r + 2 = (r+1)(r+2) = 0$ da $y_h = C_1e^{-x} + C_2e^{-2x}$. El forzante es lineal, así que $y_p = Ax + B$. Derivando: $y_p' = A$, $y_p'' = 0$. Sustituyendo: $3A + 2Ax + 2B = 4x$. Igualando coeficientes: $2A = 4 \Rightarrow A = 2$, y $3A + 2B = 0 \Rightarrow 6 + 2B = 0 \Rightarrow B = -3$. Por lo tanto

$$y = C_1e^{-x} + C_2e^{-2x} + 2x - 3$$

**Ejemplo resuelto 4 (resonancia).** Para $y'' - y = e^{x}$, la propuesta natural $Ae^{x}$ ya está en $y_h = C_1e^{x} + C_2e^{-x}$. Multiplicamos por $x$: $y_p = Axe^{x}$. Entonces $y_p' = Ae^{x}(x+1)$ y $y_p'' = Ae^{x}(x+2)$. Sustituyendo:

$$Ae^{x}(x+2) - Axe^{x} = 2Ae^{x} = e^{x} \quad \Rightarrow \quad A = \frac{1}{2}$$

Así, $y = C_1e^{x} + C_2e^{-x} + \dfrac{x}{2}e^{x}$.

Cuando el forzante no tiene una forma tan simple, se usa **variación de parámetros**, el método general que escribe $y_p = u_1(x)y_1(x) + u_2(x)y_2(x)$ con $y_1$, $y_2$ soluciones de la homogénea. Las fórmulas son

$$y_p = -y_1\int\frac{y_2\,g}{W}\,dx + y_2\int\frac{y_1\,g}{W}\,dx, \qquad W = y_1y_2' - y_1'y_2$$

donde $W$ se llama wronskiano. Para los casos de este curso basta con coeficientes indeterminados.

## Transformada de Laplace

La **transformada de Laplace** es una operación que convierte una función del tiempo $f(t)$ en una función de una nueva variable $s$:

$$\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st}f(t)\,dt$$

Cada símbolo: $\mathcal{L}$ es el operador "transformada de Laplace"; la integral es **impropia** (llega hasta infinito); $e^{-st}$ es un factor de decaimiento que garantiza la convergencia para $s$ suficientemente grande; $F(s)$ es el resultado, una función de la variable $s$. La transformada se define para $t \geq 0$, justo el dominio natural de los problemas con condición inicial.

**¿Para qué sirve?** Convierte **derivadas en multiplicaciones por $s$** y la condición inicial queda incorporada automáticamente. Una EDO se transforma en una **ecuación algebraica** en $Y(s)$, fácil de despejar; al final se aplica la **transformada inversa** $\mathcal{L}^{-1}$ para volver al tiempo.

Las dos reglas que hacen magia:

$$\mathcal{L}\{y'\} = sY(s) - y(0), \qquad \mathcal{L}\{y''\} = s^2Y(s) - sy(0) - y'(0)$$

Mira con cuidado: la transformada de $y'$ es $s$ por la transformada de $y$, menos el valor inicial. La derivada "desaparece" y deja sus datos iniciales como términos conocidos. La regla se deduce integrando por partes: $\int_0^\infty e^{-st}y'\,dt = [e^{-st}y]_0^\infty + s\int_0^\infty e^{-st}y\,dt = sY(s) - y(0)$.

**Transformadas básicas** (útiles para antitransformar):

$$\mathcal{L}\{1\} = \frac{1}{s}, \qquad \mathcal{L}\{t\} = \frac{1}{s^2}, \qquad \mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$$

$$\mathcal{L}\{e^{at}\} = \frac{1}{s-a}, \qquad \mathcal{L}\{\text{sen}\,at\} = \frac{a}{s^2+a^2}, \qquad \mathcal{L}\{\cos at\} = \frac{s}{s^2+a^2}$$

La transformada es **lineal**: $\mathcal{L}\{af + bg\} = a\mathcal{L}\{f\} + b\mathcal{L}\{g\}$. También es útil el **teorema de traslación**: $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$.

**Método completo.**

1. Transforma cada término de la EDO usando las reglas de derivadas.
2. Sustituye los valores iniciales.
3. Despeja $Y(s)$ algebraicamente.
4. Descompón en fracciones parciales si hace falta.
5. Antitransforma término a término con la tabla.

**Ejemplo resuelto 1.** Resolvamos $y' + y = 1$ con $y(0) = 0$. Transformando término a término:

$$sY(s) - 0 + Y(s) = \frac{1}{s} \quad \Rightarrow \quad Y(s)(s+1) = \frac{1}{s} \quad \Rightarrow \quad Y(s) = \frac{1}{s(s+1)}$$

Fracciones parciales: $\dfrac{1}{s(s+1)} = \dfrac{A}{s} + \dfrac{B}{s+1}$. Multiplicando por $s(s+1)$: $1 = A(s+1) + Bs$. Con $s = 0$: $A = 1$; con $s = -1$: $B = -1$. Entonces

$$Y(s) = \frac{1}{s} - \frac{1}{s+1} \quad \Rightarrow \quad y(t) = 1 - e^{-t}$$

usando $\mathcal{L}\{1\} = 1/s$ y $\mathcal{L}\{e^{-t}\} = 1/(s+1)$.

**Ejemplo resuelto 2.** Resolvamos $y'' + y = 0$ con $y(0) = 1$, $y'(0) = 0$. Transformando:

$$s^2Y(s) - s\cdot 1 - 0 + Y(s) = 0 \quad \Rightarrow \quad Y(s)(s^2+1) = s \quad \Rightarrow \quad Y(s) = \frac{s}{s^2+1}$$

Antitransformando con la tabla: $y(t) = \cos t$. Un oscilador armónico que empieza en su máximo y con velocidad inicial nula.

**Ejemplo resuelto 3.** Para $y' + 2y = 0$ con $y(0) = 3$:

$$sY - 3 + 2Y = 0 \quad \Rightarrow \quad Y(s+2) = 3 \quad \Rightarrow \quad Y = \frac{3}{s+2} \quad \Rightarrow \quad y = 3e^{-2t}$$

La transformada es el método estándar en ingeniería para circuitos, control y vibraciones.

## Aplicaciones (poblaciones, enfriamiento, circuitos)

**1. Crecimiento de poblaciones (modelo de Malthus).** Si la tasa de crecimiento es proporcional al tamaño, $P' = kP$, la solución es $P(t) = P_0e^{kt}$, donde $P_0 = P(0)$ es la población inicial y $k$ la tasa instantánea. Con $k > 0$ crece; con $k < 0$ decrece. Cuando los recursos son limitados se usa el modelo **logístico** $P' = kP\left(1 - \dfrac{P}{K}\right)$, con capacidad de carga $K$; su solución (por separación de variables) es $P(t) = \dfrac{KP_0e^{kt}}{K + P_0(e^{kt} - 1)}$ y se estabiliza en $K$.

**Ejemplo numérico.** Con $P_0 = 100$ bacterias y $k = 0{,}3$ por hora: $P(t) = 100e^{0{,}3t}$. A las 10 horas, $P(10) = 100e^{3} \approx 2008{,}55$ bacterias.

**2. Ley de enfriamiento de Newton.** La velocidad de enfriamiento es proporcional a la diferencia con el ambiente: $T' = -k(T - T_{\text{amb}})$, donde $T(t)$ es la temperatura del objeto, $T_{\text{amb}}$ la del ambiente y $k > 0$ la constante de enfriamiento. Reordenando $T' + kT = kT_{\text{amb}}$, es lineal de primer orden; su solución es

$$T(t) = T_{\text{amb}} + (T_0 - T_{\text{amb}})e^{-kt}$$

donde $T_0 = T(0)$. La temperatura tiende a la del ambiente: la exponencial se apaga.

**Ejemplo numérico.** Un café a $90°$C en una sala a $20°$C. Tras 10 minutos está a $60°$C. Entonces $60 = 20 + 70e^{-10k}$, es decir, $e^{-10k} = \dfrac{40}{70} = \dfrac{4}{7}$, de donde

$$k = \frac{\ln(7/4)}{10} \approx 0{,}056 \text{ por minuto}$$

¿Cuándo llegará a $30°$C? Resolviendo $30 = 20 + 70e^{-kt}$: $e^{-kt} = \dfrac{1}{7}$, así que $t = \dfrac{\ln 7}{k} \approx 34{,}8$ minutos.

**3. Circuito RL.** En un circuito con resistencia $R$ y bobina $L$ conectado a un voltaje $V$, la corriente $i(t)$ cumple

$$L\frac{di}{dt} + Ri = V$$

Dividiendo entre $L$: $i' + \dfrac{R}{L}i = \dfrac{V}{L}$, lineal de primer orden con $P = \dfrac{R}{L}$ y $Q = \dfrac{V}{L}$. El factor integrante es $\mu = e^{Rt/L}$ y la solución (con $i(0) = 0$) es

$$i(t) = \frac{V}{R}\left(1 - e^{-Rt/L}\right)$$

La corriente arranca en cero y tiende a la corriente de régimen $V/R$; la constante de tiempo $L/R$ mide cuán rápido se acerca.

**Ejemplo numérico.** Con $L = 1$ H, $R = 2$ ohmios, $V = 10$ voltios e $i(0) = 0$: $i' + 2i = 10$, factor integrante $e^{2t}$, y

$$i(t) = 5\left(1 - e^{-2t}\right)$$

En régimen permanente la corriente es $5$ amperios.

**4. Otras aplicaciones.** La desintegración radiactiva usa $M' = -kM$; las mezclas usan ecuaciones lineales de primer orden para la cantidad de sustancia; los circuitos RLC y los sistemas masa-resorte con amortiguamiento conducen a ecuaciones de segundo orden, resueltas con la ecuación característica o con Laplace.

## Ejemplos resueltos

**Ejemplo 1 (variables separables con condición inicial).** Resuelve $y' = xy$ con $y(0) = 2$.

Separando: $\dfrac{dy}{y} = x\,dx$. Integrando: $\ln|y| = \dfrac{x^2}{2} + C$, es decir, $y = Ke^{x^2/2}$. La condición $y(0) = 2$ da $K = 2$:

$$y = 2e^{x^2/2}$$

Verificación: $y' = 2xe^{x^2/2} = xy$. Correcto.

**Ejemplo 2 (lineal de primer orden).** Resuelve $y' + y = x$.

Aquí $P = 1$, $Q = x$; el factor integrante es $\mu = e^{\int 1\,dx} = e^{x}$. Multiplicando: $(e^{x}y)' = xe^{x}$. Integrando por partes, $\int xe^{x}\,dx = xe^{x} - e^{x} + C$, así que

$$e^{x}y = (x-1)e^{x} + C \quad \Rightarrow \quad y = x - 1 + Ce^{-x}$$

**Ejemplo 3 (exacta).** Resuelve $(\cos y)\,dx + (y^2 - x\,\text{sen}\,y)\,dy = 0$.

$M = \cos y$ y $N = y^2 - x\,\text{sen}\,y$. Comprobamos: $M_y = -\text{sen}\,y$ y $N_x = -\text{sen}\,y$: exacta. Integramos $M$ en $x$:

$$f = \int \cos y\,dx = x\cos y + g(y)$$

Derivamos en $y$: $f_y = -x\,\text{sen}\,y + g'(y)$, que debe igualar a $N = y^2 - x\,\text{sen}\,y$. Entonces $g'(y) = y^2$, luego $g(y) = \dfrac{y^3}{3}$. La solución implícita es

$$x\cos y + \frac{y^3}{3} = C$$

**Ejemplo 4 (segundo orden con condiciones iniciales).** Resuelve $y'' - 5y' + 6y = 0$ con $y(0) = 1$, $y'(0) = 0$.

Característica: $r^2 - 5r + 6 = 0$, raíces $r = 2$ y $r = 3$. General: $y = C_1e^{2x} + C_2e^{3x}$ y $y' = 2C_1e^{2x} + 3C_2e^{3x}$. Condiciones:

$$C_1 + C_2 = 1, \qquad 2C_1 + 3C_2 = 0$$

De la primera, $C_1 = 1 - C_2$. Sustituyendo: $2(1 - C_2) + 3C_2 = 0 \Rightarrow 2 + C_2 = 0 \Rightarrow C_2 = -2$, y entonces $C_1 = 3$. La solución es

$$y = 3e^{2x} - 2e^{3x}$$

**Ejemplo 5 (no homogénea).** Resuelve $y'' - 3y' + 2y = e^{3x}$.

Homogénea: $r^2 - 3r + 2 = (r-1)(r-2) = 0$, así que $y_h = C_1e^{x} + C_2e^{2x}$. Como $e^{3x}$ no está en $y_h$, proponemos $y_p = Ae^{3x}$. Entonces $y_p'' = 9Ae^{3x}$, $y_p' = 3Ae^{3x}$, y

$$9Ae^{3x} - 9Ae^{3x} + 2Ae^{3x} = e^{3x} \quad \Rightarrow \quad 2A = 1 \quad \Rightarrow \quad A = \frac{1}{2}$$

Solución general: $y = C_1e^{x} + C_2e^{2x} + \dfrac{1}{2}e^{3x}$.

**Ejemplo 6 (transformada de Laplace).** Resuelve $y'' + y = 0$ con $y(0) = 1$, $y'(0) = 0$ (ya resuelto arriba; aquí se pide comparar métodos). Por Laplace: $Y(s) = \dfrac{s}{s^2+1}$ y $y = \cos t$. El mismo resultado se obtiene con la ecuación característica: $r = \pm i$, $y = C_1\cos t + C_2\,\text{sen}\,t$, y las condiciones dan $C_1 = 1$, $C_2 = 0$. Dos caminos, una respuesta.

**Ejemplo 7 (aplicación: enfriamiento).** Una taza a $80°$C en una habitación a $25°$C se enfría a $65°$C en 5 minutos. ¿Cuánto tarda en llegar a $40°$C?

Modelo: $T = 25 + 55e^{-kt}$. De $65 = 25 + 55e^{-5k}$: $e^{-5k} = \dfrac{40}{55} = \dfrac{8}{11}$, luego $k = \dfrac{\ln(11/8)}{5} \approx 0{,}0635$. Para $T = 40$: $e^{-kt} = \dfrac{15}{55} = \dfrac{3}{11}$, así que $t = \dfrac{\ln(11/3)}{k} \approx 20{,}5$ minutos.

## Errores comunes

- **Olvidar la constante de integración.** Si se omite $C$ se pierde toda una familia de soluciones y las condiciones iniciales no se pueden aplicar. En la integral indefinida, $C$ nunca se omite.
- **Dividir entre $y$ sin analizar el caso $y = 0$.** La función constante $y = 0$ suele ser solución y se pierde al separar variables.
- **Aplicar condiciones iniciales antes de tener la solución general.** Primero se construye la familia completa con todas las constantes; solo al final se fijan.
- **Confundir homogénea con particular en segundo orden.** La respuesta completa es $y = y_h + y_p$; quedarse solo con $y_p$ no incluye las constantes.
- **Equivocarse en el signo del factor integrante.** Si $P = -3$, entonces $\mu = e^{-3x}$, no $e^{3x}$. Revisa la fórmula: $\mu = e^{\int P\,dx}$.
- **Multiplicar por el factor integrante solo un lado.** Debe multiplicarse **toda** la ecuación para no alterar la igualdad.
- **Usar la ecuación característica con coeficientes que dependen de $x$.** El método $ar^2 + br + c = 0$ exige coeficientes constantes.
- **No ajustar la propuesta cuando hay resonancia.** Si la forma de $g$ ya está en $y_h$, sin multiplicar por $x$ la sustitución es imposible.
- **Errar las raíces complejas.** Recuerda que $\alpha$ va en la exponencial y $\beta$ multiplica dentro del seno y del coseno: $y = e^{\alpha x}(C_1\cos\beta x + C_2\,\text{sen}\,\beta x)$.
- **En Laplace, olvidar los términos iniciales.** $\mathcal{L}\{y''\}$ es $s^2Y - sy(0) - y'(0)$, con sus dos datos. Un error de signo aquí arruina todo el cálculo.
- **En exactas, derivar mal las parciales.** Verifica siempre $M_y = N_x$ **antes** de buscar $f$, e incluye la función $g(y)$ al integrar.
- **No verificar.** Sustituir la solución en la ecuación es rápido y detecta casi todos los errores anteriores.

## Ejercicios propuestos (con respuestas)

1. Resuelve $y' = 3x^2$.
2. Resuelve $y' = \dfrac{y}{x}$.
3. Resuelve $y' = y\cos x$.
4. Resuelve $y' = \dfrac{x}{y}$ con $y(0) = 2$.
5. Resuelve $y' = (1+y^2)\cos x$.
6. Resuelve $y' + y = e^{x}$.
7. Resuelve $y' + \dfrac{y}{x} = x^2$.
8. Resuelve $y' + 2xy = x$.
9. Resuelve $(2x + y)\,dx + (x + 2y)\,dy = 0$.
10. Resuelve $(\cos y)\,dx + (y^2 - x\,\text{sen}\,y)\,dy = 0$.
11. Resuelve $(2xy^2 - 1)\,dx + (2x^2y)\,dy = 0$.
12. Resuelve $y'' - 5y' + 6y = 0$ con $y(0) = 1$, $y'(0) = 0$.
13. Resuelve $y'' + 2y' + 5y = 0$.
14. Resuelve $y'' - 4y = e^{x}$.
15. Resuelve $y'' - y = e^{x}$.
16. Calcula $\mathcal{L}\{t^2\}$.
17. Resuelve $y'' + y = 0$ con $y(0) = 1$, $y'(0) = 0$ por Laplace.
18. Una población crece con $P' = 0{,}02P$ y $P(0) = 5000$. Halla $P(50)$.
19. Un objeto a $100°$C en una sala a $20°$C cumple $T' = -k(T-20)$ y tras 20 minutos está a $60°$C. Halla $k$.
20. En un circuito RL con $L = 1$, $R = 2$, $V = 10$, $i(0) = 0$, halla $i(t)$.

**Respuestas.**

1. $y = x^3 + C$.
2. $y = Cx$.
3. $y = Ce^{\text{sen}\,x}$.
4. $y = \sqrt{x^2 + 4}$.
5. $y = \tan(\text{sen}\,x + C)$.
6. $y = \dfrac{e^{x}}{2} + Ce^{-x}$.
7. $y = \dfrac{x^3}{4} + \dfrac{C}{x}$.
8. $y = \dfrac{1}{2} + Ce^{-x^2}$.
9. $x^2 + xy + y^2 = C$.
10. $x\cos y + \dfrac{y^3}{3} = C$.
11. $x^2y^2 - x = C$.
12. $y = 3e^{2x} - 2e^{3x}$.
13. $y = e^{-x}(C_1\cos 2x + C_2\,\text{sen}\,2x)$.
14. $y = C_1e^{2x} + C_2e^{-2x} - \dfrac{1}{3}e^{x}$.
15. $y = C_1e^{x} + C_2e^{-x} + \dfrac{x}{2}e^{x}$.
16. $\mathcal{L}\{t^2\} = \dfrac{2}{s^3}$.
17. $y = \cos t$.
18. $P(50) = 5000e^{1} \approx 13\,591{,}4$.
19. $k = \dfrac{\ln(2)}{20} \approx 0{,}0347$ por minuto.
20. $i(t) = 5\left(1 - e^{-2t}\right)$.

## Resumen

- Una EDO relaciona una función incógnita con sus derivadas. El **orden** es el de la derivada más alta; es **lineal** si la incógnita aparece a la primera potencia, sumada y sin productos entre derivadas.
- La **solución general** es una familia con tantas constantes arbitrarias como el orden; la **solución particular** se obtiene fijando esas constantes con condiciones iniciales o de frontera. La constante $C$ representa toda la libertad de la integración.
- Las **separables** se resuelven dejando cada variable de un lado e integrando; hay que vigilar las soluciones constantes que se pierden al dividir.
- Las **lineales de primer orden** $y' + Py = Q$ se resuelven multiplicando por el **factor integrante** $\mu = e^{\int P\,dx}$, que convierte el lado izquierdo en $(\mu y)'$.
- Las **exactas** $M\,dx + N\,dy = 0$ cumplen $M_y = N_x$; su solución son las curvas de nivel $f(x,y) = C$ de la función potencial.
- El **segundo orden homogéneo** $ay'' + by' + cy = 0$ se resuelve con la **ecuación característica** $ar^2 + br + c = 0$: raíces reales distintas, raíz doble o complejas conjugadas dan las tres formas de la solución.
- Las **no homogéneas** suman a la homogénea una **particular**, construida por coeficientes indeterminados o variación de parámetros.
- La **transformada de Laplace** convierte la EDO con datos iniciales en álgebra en la variable $s$, y la antitransformada devuelve la solución en el tiempo.
- Las aplicaciones son inmensas: poblaciones, enfriamiento, circuitos, mezclas, desintegración y oscilaciones. La misma matemática gobierna todos esos fenómenos.
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

};
