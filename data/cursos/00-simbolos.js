window.CURSOS = window.CURSOS || {};
window.CURSOS["simbolos"] = {
  "x": String.raw`
## ¿Qué significa?
La letra $x$ es la letra más usada en matemática para nombrar una cantidad **desconocida**. Tiene dos papeles principales:

- **Incógnita:** un número concreto que hay que encontrar, por ejemplo en $x + 3 = 7$.
- **Variable:** un valor que puede cambiar, por ejemplo en $y = 2x$, donde $x$ toma muchos valores.

## ¿Cómo se lee?
- "$x$" se lee "equis".
- "Halla $x$" significa "encuentra el valor desconocido".
- En $f(x)$, la $x$ es la **entrada** de la función: lo que tú le das.

## ¿Por qué $x$?
Por costumbre histórica: el álgebra nació con ecuaciones y se adoptó la $x$ como la incógnita típica. Puedes usar cualquier letra ($t$, $n$, $a$…), pero $x$ es la convención universal.

## Ejemplos
- En $x - 5 = 2$, la incógnita vale $x = 7$.
- En $y = 3x$, si $x = 2$ entonces $y = 6$.

## Errores comunes
- Confundir incógnita con variable: en $x + 3 = 7$ hay UN valor; en $y = 2x$ hay infinitos pares.
- Cambiar el significado de $x$ a mitad de un problema.

## Dónde lo verás en Studappy
En casi todos los temas: álgebra, funciones, ecuaciones, límites y mucho más.
`,

  "fx": String.raw`
## ¿Qué significa?
La notación $f(x)$ se lee **"f de x"** y significa "el valor de la función $f$ cuando la entrada es $x$". Es la forma estándar de escribir funciones.

$$f(x) = x^2 + 1$$

## ¿Cómo se lee?
- "$f(x)$" → "efe de equis".
- "Halla $f(3)$" → "evalúa la función en $x = 3$": reemplaza la $x$ por $3$ y calcula.
- La letra $f$ es solo el **nombre** de la función; se usan $g$, $h$, etc.

## ¿Qué significa evaluar?
Evaluar es sustituir y operar:

$$f(3) = 3^2 + 1 = 9 + 1 = 10$$

## Ejemplo
Con $f(x) = 2x - 1$:
- $f(0) = -1$
- $f(5) = 9$
- $f(a) = 2a - 1$ (la entrada puede ser una letra)

## Errores comunes
- Confundir $f(x)$ con $f \cdot x$: NO es multiplicación, es "f evaluada en x".
- Confundir $f(x + 1)$ (entrada desplazada) con $f(x) + 1$ (resultado desplazado).

## Dónde lo verás en Studappy
En Funciones, y como base de cálculo, exponenciales, logaritmos y más.
`,

  "triangulo": String.raw`
## ¿Qué significa?
La palabra **triángulo** aparece con dos significados en matemática:

1. **La figura geométrica:** la forma de 3 lados y 3 ángulos, la base de la trigonometría.
2. **La letra griega $\Delta$ (delta):** se usa para indicar un **cambio** entre dos valores: $\Delta x$ = "cambio en $x$".

## El triángulo en geometría
- Sus ángulos internos suman $180°$.
- En un triángulo rectángulo valen Pitágoras y las razones trigonométricas.

## La $\Delta$ como cambio
$$\Delta x = x_{final} - x_{inicial}$$

Por ejemplo, si una temperatura pasa de $20°$ a $35°$: $\Delta T = 15°$.

## El $\Delta$ de la cuadrática
En la fórmula general de la ecuación cuadrática, $\Delta = b^2 - 4ac$ se llama **discriminante** y decide cuántas soluciones hay.

## Errores comunes
- Confundir el triángulo figura con la letra $\Delta$.
- Olvidar que $\Delta$ es una DIFERENCIA, no un valor absoluto.

## Dónde lo verás en Studappy
En Trigonometría, Geometría, Ecuaciones y Cálculo.
`,

  "por-lo-tanto": String.raw`
## ¿Qué significa?
El símbolo $\therefore$ se lee **"por lo tanto"** y se usa al final de un razonamiento para anunciar la **conclusión**. Es la firma de las demostraciones.

## ¿Cómo se usa?
En una demostración o resolución, después de una cadena de pasos:

$$2x = 8 \qquad \therefore \quad x = 4$$

## ¿Cuándo aparece?
- Al terminar una demostración (junto al cuadradito $\blacksquare$).
- Al cerrar un ejercicio resuelto.
- En lógica, para separar premisas de conclusión.

## Ejemplo
- Si $x + 1 = 5$, entonces $x = 4$. $\therefore$ la solución es $4$.

## Errores comunes
- Usarlo sin que haya una cadena de razonamiento previa.
- Confundirlo con $\Rightarrow$ ("implica"): $\Rightarrow$ une pasos, $\therefore$ anuncia el final.

## Dónde lo verás en Studappy
En Álgebra, Ecuaciones y en las resoluciones de los ejercicios.
`,

  "igualdad": String.raw`
## ¿Qué significa?
El signo $=$ se lee **"igual"** y afirma que las dos expresiones que lo rodean valen **lo mismo**. Es el símbolo más importante del álgebra.

$$3 + 4 = 7$$

## La igualdad como balanza
Una ecuación es una igualdad con una incógnita: $x + 5 = 12$. Resolverla es encontrar el valor que hace verdadera la igualdad.

**Regla de oro:** lo que hagas de un lado, hazlo del otro.

## Otros usos
- Definición: $A = \pi r^2$ significa "el área es".
- Resultado: $f(2) = 9$.
- Aproximación: $\approx$ (casi igual), como $\pi \approx 3.14$.

## Errores comunes
- Escribir $=$ cuando quieres decir $\approx$.
- Romper la balanza: operar solo de un lado.
- Usar $=$ entre expresiones que no son iguales.

## Dónde lo verás en Studappy
En absolutamente todos los temas: es el idioma de la matemática.
`,

  "pi": String.raw`
## ¿Qué significa?
La letra griega $\pi$ (pi) es el número más famoso de la geometría:

$$\pi = 3.14159265\ldots$$

Es la razón entre la **circunferencia** de un círculo y su **diámetro**: en cualquier círculo, al dividir su perímetro entre su diámetro siempre sale $\pi$.

## ¿Para qué sirve?
- Perímetro del círculo: $C = 2\pi r$.
- Área del círculo: $A = \pi r^2$.
- Volumen de la esfera: $V = \frac{4}{3}\pi r^3$.
- También aparece en trigonometría (los radianes usan $\pi$: $\pi = 180°$) y en análisis.

## ¿Cuánto vale?
Es un número **irracional**: tiene infinitos decimales que no se repiten. En cálculos se usa $\pi \approx 3.14$ o la fracción $\frac{22}{7}$ como aproximación.

## Errores comunes
- Tratar $\pi$ como una variable: es un número fijo.
- Usar $3.14$ cuando el resultado debe dejarse con $\pi$ (exacto).
- Confundir grados y radianes: $\pi$ radianes $= 180°$.

## Dónde lo verás en Studappy
En Geometría, Trigonometría y Cálculo integral.
`,

  "raiz": String.raw`
## ¿Qué significa?
El símbolo $\sqrt{\phantom{x}}$ se llama **raíz** y responde a la pregunta inversa de la potencia:

$$\sqrt{9} = 3 \quad \text{porque} \quad 3^2 = 9$$

## La raíz cuadrada
$\sqrt{x}$ es el número que al **cuadrado** da $x$:
$$\sqrt{16} = 4, \qquad \sqrt{25} = 5$$

## La raíz enésima
$\sqrt[n]{x}$ es el número que elevado a la $n$ da $x$:
$$\sqrt[3]{8} = 2 \quad \text{porque} \quad 2^3 = 8$$

## Reglas clave
- $\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$ (para $a, b \geq 0$).
- La raíz cuadrada de un número negativo NO existe en los reales; en complejos es $i\sqrt{|x|}$.
- $\sqrt{x^2} = |x|$.

## Errores comunes
- Creer que $\sqrt{x^2} = x$ siempre: en realidad es $|x|$.
- Olvidar que $\sqrt{a + b} \neq \sqrt{a} + \sqrt{b}$.
- Sacar raíces de números negativos sin usar complejos.

## Dónde lo verás en Studappy
En Álgebra, Ecuaciones, Funciones, Exponenciales y Cálculo.
`,

  "sumatoria": String.raw`
## ¿Qué significa?
La letra griega $\sum$ (sigma) significa **"suma de"**. Compacta sumas larguísimas:

$$\sum_{k=1}^{5} k = 1 + 2 + 3 + 4 + 5 = 15$$

## ¿Cómo se lee?
- Debajo: $k = 1$ → "la variable $k$ empieza en 1".
- Arriba: $5$ → "termina en 5".
- A la derecha: la expresión que se suma para cada $k$.

## Reglas útiles
$$\sum (a_k + b_k) = \sum a_k + \sum b_k \qquad \sum c \cdot a_k = c \sum a_k$$

## Sumas famosas
$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}, \qquad \sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$$

## Errores comunes
- Confundir el índice ($k$) con el límite superior.
- Cambiar los límites al reindexar sin ajustar la expresión.
- Pensar que $\sum (a_k \cdot b_k) = \sum a_k \cdot \sum b_k$ (falso).

## Dónde lo verás en Studappy
En Sucesiones y sumatorias, Series y Cálculo integral.
`,

  "limite": String.raw`
## ¿Qué significa?
El símbolo $\lim$ significa **"límite"** y describe a qué valor se acerca una función cuando la entrada se acerca a un punto:

$$\lim_{x \to 2} f(x)$$

se lee "límite de $f(x)$ cuando $x$ tiende a $2$".

## ¿Qué idea esconde?
No importa qué pasa EXACTAMENTE en $x = 2$; importa a qué valor se aproxima $f(x)$ cuando $x$ se acerca a $2$.

## Ejemplo
$$\lim_{x \to 2} (3x + 1) = 7$$

Porque al acercar $x$ a $2$, la expresión se acerca a $7$.

## ¿Cuándo se usa?
- Para definir la derivada (el corazón del cálculo).
- Para estudiar qué pasa en puntos donde la función no está definida.
- Para analizar el comportamiento al infinito: $\lim_{x \to \infty} \frac{1}{x} = 0$.

## Errores comunes
- Dar $0/0$ o $\infty/\infty$ como respuesta: son señales de que hay que trabajar más.
- Confundir el valor en el punto con el límite: pueden ser distintos.

## Dónde lo verás en Studappy
En Límites, Cálculo diferencial, Sucesiones y Series.
`,

  "infinito": String.raw`
## ¿Qué significa?
El símbolo $\infty$ significa **"infinito"**: no es un número, sino una idea: "sin límite", "sin fin".

## ¿Cómo se usa?
- "Cuando $x \to \infty$" → "cuando $x$ crece sin límite".
- $[0, \infty)$ es un intervalo: "desde 0 hasta crecer sin fin".
- Resultados como $+\infty$ indican que una cantidad crece sin tope.

## Ejemplos
- $\frac{1}{x} \to 0$ cuando $x \to \infty$: al dividir entre algo gigante, queda casi cero.
- La suma infinita $1 + \frac{1}{2} + \frac{1}{4} + \cdots$ se acerca a $2$.

## Errores comunes
- Operar con $\infty$ como si fuera un número ($\infty - \infty$ no está definido).
- Decir que algo "es infinito" cuando en realidad "tiende a infinito".

## Dónde lo verás en Studappy
En Límites, Series, Intervalos y Análisis.
`
};