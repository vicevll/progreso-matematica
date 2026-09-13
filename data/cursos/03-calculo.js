window.CURSOS = window.CURSOS || {};
window.CURSOS["calculo"] = {
  "limites": String.raw`
## La idea de límite

Toda la matemática del cambio —la que llamamos cálculo— se apoya en una sola pregunta: **¿qué le ocurre a una cantidad cuando otra cantidad se acerca cada vez más a un valor especial?** La herramienta que responde esa pregunta se llama **límite**.

Empecemos por el vocabulario básico. Una **función** es una regla que a cada número de entrada le asigna un único número de salida. La escribimos con una letra, típicamente $f$, y la notación $f(x)$ se lee "efe de equis" y significa "la salida que la regla $f$ produce para la entrada $x$". Por ejemplo, si la regla es $f(x) = x^2$ (elevar al cuadrado), entonces $f(3) = 9$ y $f(-2) = 4$.

Ahora imagina que la entrada $x$ se va acercando a un número fijo. ¿Qué le pasa a la salida $f(x)$? El límite responde describiendo **el valor al que se acerca $f(x)$**, sin importar si $f$ está definida o no en ese punto de llegada. La clave de la idea es esta: **el límite mira el comportamiento alrededor del punto, no el valor en el punto**.

Veamos el ejemplo clásico. Considera la función

$$f(x) = \dfrac{x^2 - 1}{x - 1}.$$

Esta fracción tiene un problema en $x = 1$: el denominador se anula ($1 - 1 = 0$) y **dividir entre cero no está permitido** en matemática, así que $f(1)$ no existe. Sin embargo, nada nos impide preguntarnos qué ocurre cuando $x$ está *cerca* de $1$. Calculemos con valores cercanos:

| $x$ | $f(x) = \dfrac{x^2 - 1}{x - 1}$ |
|---|---|
| $0{,}9$ | $1{,}9$ |
| $0{,}99$ | $1{,}99$ |
| $0{,}999$ | $1{,}999$ |
| $1{,}001$ | $2{,}001$ |
| $1{,}01$ | $2{,}01$ |
| $1{,}1$ | $2{,}1$ |

Cuanto más se acerca $x$ a $1$, más se acerca $f(x)$ a $2$. Ese número $2$ es el límite. Lo escribimos así:

$$\lim_{x \to 1} f(x) = 2$$

y se lee: "el límite de efe de equis cuando equis tiende a uno es dos". Observa lo sorprendente: la función **no está definida** en $x = 1$, y sin embargo el límite existe y vale $2$. ¿Por qué funciona? Porque para todo $x \neq 1$ la fracción se puede simplificar: como $x^2 - 1 = (x - 1)(x + 1)$, se tiene

$$\dfrac{x^2 - 1}{x - 1} = \dfrac{(x - 1)(x + 1)}{x - 1} = x + 1 \quad \text{para todo } x \neq 1,$$

y la expresión $x + 1$ se acerca a $2$ cuando $x$ se acerca a $1$. La simplificación es válida precisamente porque en el límite $x$ nunca llega a ser exactamente $1$; solo se aproxima.

¿Por qué importa tanto este concepto? Porque la **derivada** (la razón de cambio instantánea) y la **integral** (el área bajo una curva) se definen como límites, y la **continuidad** de una función se define con un límite. Entender límites es entender el idioma en que está escrito todo el cálculo.

## Cómo leer la notación

La notación de límites está llena de símbolos; la buena noticia es que cada uno tiene un significado preciso y se lee en voz alta de una manera natural. Vamos a diseccionar la expresión completa

$$\lim_{x \to a} f(x) = L$$

pieza por pieza:

- **$\lim$** se lee "límite". Es el operador principal: ordena "estudia hacia dónde se acercan los valores de la función".
- **$x \to a$** se lee "equis tiende a a". La flecha $\to$ se lee "tiende a" y describe un **acercamiento**: la variable $x$ se acerca al número fijo $a$ tanto como queramos, sin necesidad de llegar a tocarlo. La letra $a$ es un número cualquiera: en los ejemplos anteriores era $a = 1$, pero podría ser $a = 3$, $a = 0$ o $a = -2$.
- **$f(x)$** se lee "efe de equis": la salida de la regla $f$ para la entrada $x$. Es la cantidad que se está acercando a algo.
- **$=$** se lee "es igual a". Conecta la expresión del límite con su resultado.
- **$L$** es el resultado: el número al que se acercan los valores de $f(x)$. La letra $L$ viene de "límite".

La expresión completa se lee en voz alta así: **"el límite de efe de equis, cuando equis tiende a a, es igual a ele"**.

Ahora los símbolos adicionales que aparecen en las variantes del tema:

- **$x \to a^{+}$** se lee "equis tiende a a por la derecha": significa acercarse a $a$ usando **solo valores mayores** que $a$ (por ejemplo, acercarse a $1$ usando $1{,}1$, $1{,}01$, $1{,}001$...). El signo $+$ como superíndice marca la derecha, porque en la recta numérica los números mayores que $a$ están a su derecha.
- **$x \to a^{-}$** se lee "equis tiende a a por la izquierda": acercarse usando **solo valores menores** que $a$ ($0{,}9$, $0{,}99$, $0{,}999$...). El signo $-$ marca la izquierda.
- **$x \to \infty$** se lee "equis tiende a infinito": la variable $x$ **crece sin límite**, haciéndose más grande que cualquier número fijo que imaginemos ($1000$, luego un millón, luego un billón...). El símbolo $\infty$ se lee "infinito" y **no es un número**: es una idea que resume "crecer sin tope". No se puede operar con él como con un número (no existe "infinito más uno" en este contexto).
- **$x \to -\infty$** se lee "equis tiende a menos infinito": la variable se hace negativa cada vez más lejos, sin límite en la dirección negativa.
- **$\varepsilon$** (la letra griega épsilon) representa un **margen de error permitido en la salida**: un número positivo, normalmente pensado como muy pequeño. "La salida debe quedar a menos de épsilon de $L$".
- **$\delta$** (la letra griega delta) representa un **margen en la entrada**: un número positivo que dice "toma $x$ a menos de delta de $a$".
- **$\forall$** se lee "para todo". Indica que una afirmación vale para cualquier valor del símbolo que le sigue: por ejemplo, $\forall x > 0$ se lee "para todo equis mayor que cero".
- **$\exists$** se lee "existe". Afirma que al menos un objeto con cierta propiedad puede encontrarse.
- **$\Rightarrow$** se lee "implica" o "entonces". Conecta una hipótesis con su consecuencia: $A \Rightarrow B$ se lee "si ocurre A, entonces ocurre B".
- **$\iff$** se lee "si y solo si". Es una doble implicación: ambas direcciones valen.
- **$|x - a|$** se lee "valor absoluto de equis menos a". El **valor absoluto** de un número es su distancia al cero en la recta numérica, siempre positiva o nula: $|3| = 3$, $|-3| = 3$, $|0| = 0$. Por eso $|x - a|$ es exactamente **la distancia entre $x$ y $a$**: da lo mismo el orden ($|x - a|$ y $|a - x|$ son el mismo número). Por ejemplo, si $x = 2{,}9$ y $a = 3$, la distancia es $|2{,}9 - 3| = 0{,}1$.
- **$<$** se lee "menor que" y **$>$** "mayor que"; los símbolos $\leq$ y $\geq$ añaden el caso de igualdad ("menor o igual", "mayor o igual").
- **$0 < |x - a|$** se lee "la distancia de equis a a es mayor que cero" y significa simplemente que **$x$ no es igual a $a$**: en el límite estudiamos puntos cercanos a $a$, pero nunca el punto $a$ mismo.

Con este diccionario ya se puede descifrar cualquier texto de límites. La práctica recomendada es leer en voz alta cada fórmula la primera vez que se ve, sustituyendo símbolo por símbolo.

## Definición formal

La idea intuitiva —"los valores de $f(x)$ se acercan a $L$ cuando $x$ se acerca a $a$"— se puede convertir en una definición matemática rigurosa. Su versión informal dice:

> El límite de $f(x)$ cuando $x$ tiende a $a$ es $L$ si podemos hacer que $f(x)$ esté **tan cerca de $L$ como queramos**, con tal de tomar $x$ **suficientemente cerca de $a$** (pero distinto de $a$).

Las palabras "tan cerca como queramos" y "suficientemente cerca" se precisan con los márgenes $\varepsilon$ y $\delta$. La definición formal, llamada **definición épsilon-delta**, es:

$$\lim_{x \to a} f(x) = L \iff \forall \varepsilon > 0 \; \exists \delta > 0 : \; 0 < |x - a| < \delta \Rightarrow |f(x) - L| < \varepsilon$$

Leamos esta cadena de símbolos en voz alta, por partes:

1. **$\forall \varepsilon > 0$** — "para todo épsilon mayor que cero": alguien (un adversario, si lo pensamos como juego) propone **cualquier** margen de error positivo, por pequeño que sea, alrededor de $L$.
2. **$\exists \delta > 0$** — "existe un delta mayor que cero": nosotros debemos responder encontrando un margen $\delta$ alrededor de $a$.
3. **$0 < |x - a| < \delta$** — "si la distancia de $x$ a $a$ es positiva (es decir, $x \neq a$) y menor que delta": consideramos cualquier entrada $x$ que esté dentro del margen $\delta$ de $a$, sin ser $a$ misma.
4. **$\Rightarrow |f(x) - L| < \varepsilon$** — "entonces la distancia de $f(x)$ a $L$ es menor que épsilon": todos esos $x$ producen salidas que caen dentro del margen de error exigido.

En la metáfora del juego: **el épsilon es el reto y el delta es la respuesta**. Si para cada reto $\varepsilon$, por exigente que sea, somos capaces de responder con un $\delta$ que funciona, entonces el límite vale $L$.

Nota la condición **$0 < |x - a|$**: exige que $x$ sea distinto de $a$. Esa es la forma técnica de decir que el valor $f(a)$ —si existe o no— es irrelevante para el límite. Solo importa lo que ocurre en los puntos **alrededor** de $a$.

Veamos la definición en acción con una demostración completa. Vamos a probar que

$$\lim_{x \to 3} (2x - 1) = 5.$$

Aquí la función es $f(x) = 2x - 1$ (doblar la entrada y restarle uno), el punto es $a = 3$ y el candidato a límite es $L = 5$ (efectivamente, $f(3) = 2 \cdot 3 - 1 = 5$). Para probarlo con épsilon-delta razonamos así:

1. Nos dan un $\varepsilon > 0$ cualquiera (el reto).
2. Queremos conseguir que $|f(x) - 5| < \varepsilon$. Calculemos esa distancia: $|f(x) - 5| = |(2x - 1) - 5| = |2x - 6| = |2(x - 3)| = 2|x - 3|$. El factor $2$ sale del valor absoluto porque $2$ es positivo.
3. La condición que queremos es $2|x - 3| < \varepsilon$, es decir, $|x - 3| < \varepsilon / 2$. Entonces la respuesta al reto es tomar **$\delta = \varepsilon / 2$** (delta igual a épsilon partido por dos).
4. Verificación: si $0 < |x - 3| < \delta = \varepsilon / 2$, entonces $|f(x) - 5| = 2|x - 3| < 2 \cdot (\varepsilon/2) = \varepsilon$, exactamente lo pedido.

Conclusión: el límite vale $5$. Observa la receta general de estas demostraciones: **se parte de la distancia $|f(x) - L|$, se reescribe en función de $|x - a|$ y se elige $\delta$ para que la cadena cierre**.

Un segundo ejemplo, más corto. Para probar $\lim_{x \to 2}(3x + 1) = 7$, calculamos $|(3x + 1) - 7| = |3x - 6| = 3|x - 2|$. Queremos $3|x - 2| < \varepsilon$, así que basta $|x - 2| < \varepsilon / 3$: la respuesta es $\delta = \varepsilon/3$. (Comprobación: $f(2) = 3 \cdot 2 + 1 = 7$, el valor esperado.)

Conviene aclarar: en la práctica diaria **no se demuestra cada límite con épsilon-delta**; para eso existen las técnicas de las próximas secciones. Pero la definición formal es el contrato que da validez a todas esas técnicas, y aparece en los cursos porque garantiza que la palabra "acercarse" significa algo preciso.

## Límites laterales

A veces el comportamiento de una función cambia según de qué lado nos acerquemos al punto. Para estudiarlo se definen los **límites laterales**.

- El **límite por la izquierda**, escrito $\lim_{x \to a^{-}} f(x)$, considera solo entradas $x$ **menores** que $a$ (acercamiento desde la izquierda en la recta numérica).
- El **límite por la derecha**, escrito $\lim_{x \to a^{+}} f(x)$, considera solo entradas $x$ **mayores** que $a$ (acercamiento desde la derecha).

El teorema central del tema es este:

> El límite de $f(x)$ cuando $x$ tiende a $a$ existe **si y solo si** los dos límites laterales existen y son **iguales**. En símbolos: $\lim_{x \to a} f(x) = L \iff \lim_{x \to a^{-}} f(x) = L \;\text{y}\; \lim_{x \to a^{+}} f(x) = L$.

Si los dos laterales existen pero valen distinto, el límite bilateral **no existe**.

El ejemplo más famoso es $f(x) = \dfrac{|x|}{x}$, con $x \neq 0$. Recordemos el valor absoluto: $|x| = x$ cuando $x \geq 0$, y $|x| = -x$ cuando $x < 0$. Entonces:

- Por la izquierda ($x < 0$): $|x| = -x$, así que $\dfrac{|x|}{x} = \dfrac{-x}{x} = -1$ para todo $x < 0$. Luego $\lim_{x \to 0^{-}} \dfrac{|x|}{x} = -1$.
- Por la derecha ($x > 0$): $|x| = x$, así que $\dfrac{|x|}{x} = \dfrac{x}{x} = 1$ para todo $x > 0$. Luego $\lim_{x \to 0^{+}} \dfrac{|x|}{x} = 1$.

Los laterales valen $-1$ y $+1$: no coinciden, y por el teorema el límite en $0$ **no existe**. Gráficamente, la función vale $-1$ en toda la mitad izquierda y $+1$ en toda la mitad derecha: el gráfico da un **salto** en $0$.

Los límites laterales son la herramienta natural para las **funciones por partes**, definidas con fórmulas distintas en tramos distintos. Ejemplo:

$$f(x) = \begin{cases} x^2 + 1 & \text{si } x < 2 \\ 3x - 1 & \text{si } x \geq 2 \end{cases}$$

Para estudiar el límite en $a = 2$ miramos cada lado con su fórmula:

- Por la izquierda ($x \to 2^{-}$, usamos $x^2 + 1$): los valores se acercan a $2^2 + 1 = 5$.
- Por la derecha ($x \to 2^{+}$, usamos $3x - 1$): los valores se acercan a $3 \cdot 2 - 1 = 5$.

Ambos laterales valen $5$: coinciden, y por lo tanto $\lim_{x \to 2} f(x) = 5$. Nota además que $f(2) = 3 \cdot 2 - 1 = 5$: aquí el límite coincide con el valor de la función, lo que anticipa la noción de continuidad.

## Cálculo práctico de límites

En el trabajo cotidiano, el primer intento para calcular un límite es siempre el mismo: **sustitución directa**.

**Estrategia de sustitución directa.** Para calcular $\lim_{x \to a} f(x)$, reemplaza $x$ por $a$ en la fórmula de $f$ y evalúa. Si el resultado es un número real (no aparece una división entre cero ni otra operación prohibida), ese número **es** el límite. La justificación es que la mayoría de las funciones elementales (polinomios, raíces, exponenciales, seno, coseno, logaritmos) son continuas en su dominio: el valor en el punto coincide con el límite.

**Ejemplo.** $\lim_{x \to 2} (3x^2 - 4x + 1)$. Sustituimos $x = 2$: $3 \cdot 2^2 - 4 \cdot 2 + 1 = 12 - 8 + 1 = 5$. Sin más trabajo: el límite es $5$.

**Ejemplo donde la sustitución falla.** $\lim_{x \to 1} \dfrac{x^2 - 1}{x - 1}$: al sustituir $x = 1$ aparece $\dfrac{0}{0}$, que no es un número. Aquí la sustitución **no decide** nada; es una **indeterminación** (sección siguiente) y hay que transformar la expresión.

Cuando los límites de funciones individuales existen, se pueden combinar con las **propiedades algebraicas**. Si $\lim_{x \to a} f(x) = L$ y $\lim_{x \to a} g(x) = M$, entonces:

- **Suma y resta:** $\lim_{x \to a} [f(x) \pm g(x)] = L \pm M$. El límite de una suma es la suma de los límites (el signo $\pm$ significa "más o menos", la misma regla vale para restar).
- **Producto:** $\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M$. El punto $\cdot$ indica multiplicación.
- **Cociente:** $\lim_{x \to a} \dfrac{f(x)}{g(x)} = \dfrac{L}{M}$, **siempre que $M \neq 0$**. Dividir entre cero no está permitido, así que esta regla solo vale cuando el límite del denominador no es cero.
- **Potencia:** $\lim_{x \to a} [f(x)]^n = L^n$. El exponente $n$ es un número fijo.
- **Raíz:** $\lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{L}$ (con el cuidado de que la raíz exista; por ejemplo, las raíces de índice par no admiten números negativos).

Además hay dos límites triviales que conviene memorizar:

- **Límite de una constante:** $\lim_{x \to a} c = c$. Si $f(x) = c$ siempre vale lo mismo, el límite es $c$ (la letra $c$ denota un número fijo).
- **Límite de la identidad:** $\lim_{x \to a} x = a$. La función $f(x) = x$ acerca sus salidas al mismo $a$ al que se acerca la entrada.

**Ejemplo combinado.** $\lim_{x \to 1} (x^2 + 3)$: por la regla de la suma, $\lim (x^2) + \lim (3) = (1)^2 + 3 = 4$, usando el límite de la identidad y el de la constante.

## Indeterminaciones y técnicas

Una **indeterminación** es lo que queda escrito tras sustituir, cuando el resultado tiene una forma que **no determina** el valor del límite. La más famosa es $\dfrac{0}{0}$: no se le puede asignar un valor, porque infinitos números cumplirían el papel (si $2 \cdot 0 = 0$ y $5 \cdot 0 = 0$, ¿cuánto valdría $\dfrac{0}{0}$? Cualquier cosa). Las formas indeterminadas clásicas son siete:

$$\frac{0}{0},\qquad \frac{\infty}{\infty},\qquad 0 \cdot \infty,\qquad \infty - \infty,\qquad 1^{\infty},\qquad 0^{0},\qquad \infty^{0}$$

Leídas en voz alta: "cero sobre cero" (numerador y denominador tienden a cero); "infinito sobre infinito" (ambos crecen sin límite); "cero por infinito" (un factor tiende a cero y el otro crece sin límite); "infinito menos infinito" (dos cantidades que crecen sin límite se restan); "uno a la infinito" (la base tiende a $1$ y el exponente crece sin límite — ojo: **no** vale $1$ automáticamente); "cero a la cero" y "infinito a la cero". Cada forma exige una técnica específica.

**Técnica 1: factorización (para $\frac{0}{0}$ con polinomios).** Si numerador y denominador son polinomios que se anulan en $x = a$, ambos contienen el factor $(x - a)$, que se puede cancelar.

**Ejemplo.** $\lim_{x \to 3} \dfrac{x^2 - 9}{x - 3}$. Al sustituir: $\dfrac{0}{0}$. Factorizamos el numerador como diferencia de cuadrados: $x^2 - 9 = (x - 3)(x + 3)$. Entonces

$$\frac{x^2 - 9}{x - 3} = \frac{(x - 3)(x + 3)}{x - 3} = x + 3 \quad \text{para } x \neq 3,$$

y ahora sí: $\lim_{x \to 3}(x + 3) = 6$. Cancelar $(x - 3)$ es legítimo porque en el límite $x \neq 3$.

**Técnica 2: racionalización (para $\frac{0}{0}$ con raíces).** Cuando aparecen raíces cuadradas, se multiplica numerador y denominador por el **conjugado**, aprovechando la identidad $(a - b)(a + b) = a^2 - b^2$, que elimina las raíces.

**Ejemplo.** $\lim_{x \to 0} \dfrac{\sqrt{x + 1} - 1}{x}$. Al sustituir: $\dfrac{0}{0}$. El conjugado del numerador es $\sqrt{x + 1} + 1$. Multiplicamos arriba y abajo por él (multiplicar por $\dfrac{\sqrt{x+1}+1}{\sqrt{x+1}+1}$ es multiplicar por $1$):

$$\frac{\sqrt{x + 1} - 1}{x} \cdot \frac{\sqrt{x + 1} + 1}{\sqrt{x + 1} + 1} = \frac{(x + 1) - 1}{x\,(\sqrt{x + 1} + 1)} = \frac{x}{x\,(\sqrt{x + 1} + 1)} = \frac{1}{\sqrt{x + 1} + 1}.$$

Cancelamos el factor $x$ (válido porque $x \neq 0$ en el límite) y al sustituir $x = 0$ queda $\dfrac{1}{\sqrt{1} + 1} = \dfrac{1}{2}$.

**Técnica 3: común denominador (para $\infty - \infty$).** Si la expresión es una resta de fracciones cuyos denominadores tienden a cero, se combinan en una sola fracción y se simplifica.

**Ejemplo.** $\lim_{x \to 0} \left( \dfrac{1}{x} - \dfrac{1}{x^2 + x} \right)$. Cada fracción crece sin límite en valor absoluto: es la forma $\infty - \infty$. El denominador común es $x(x + 1)$, y

$$\frac{1}{x} - \frac{1}{x(x+1)} = \frac{(x + 1) - 1}{x(x + 1)} = \frac{x}{x(x + 1)} = \frac{1}{x + 1}.$$

Al hacer $x \to 0$: el límite es $1$. La resta de dos "infinitos" dio un número finito: por eso la forma era indeterminada.

**Técnica 4: división por la potencia dominante (para $\frac{\infty}{\infty}$).** Se divide numerador y denominador por la mayor potencia de $x$ que aparece, y se usa que los términos como $\dfrac{1}{x}$ o $\dfrac{1}{x^2}$ tienden a cero cuando $x \to \infty$. Se desarrolla en la próxima sección.

**Técnica 5: límites notables.** Ciertas formas con funciones trigonométricas o exponenciales tienen valores estándar (sección de límites notables).

**Técnica 6: regla de L'Hôpital (para $\frac{0}{0}$ o $\frac{\infty}{\infty}$).** Si el cociente es indeterminado, se deriva numerador y denominador **por separado** (no es la regla del cociente de la derivación) y se repite si hace falta:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}.$$

El apóstrofo $f'$ se lee "efe prima" y denota la **derivada** de $f$. **Advertencia:** antes de usarla hay que verificar que la forma sea efectivamente $\dfrac{0}{0}$ o $\dfrac{\infty}{\infty}$; en otros casos la regla produce resultados falsos.

**Ejemplo.** $\lim_{x \to 0} \dfrac{1 - \cos x}{x^2}$ es $\dfrac{0}{0}$ (recordando que $\cos 0 = 1$). Primera aplicación: $\lim \dfrac{\text{sen}\,x}{2x}$, todavía $\dfrac{0}{0}$. Segunda: $\lim \dfrac{\cos x}{2} = \dfrac{1}{2}$.

## Límites al infinito

Los límites con $x \to \infty$ (equis tiende a infinito) describen el **comportamiento a largo plazo** de la función: qué le ocurre cuando la entrada crece sin límite. Para un cociente de dos polinomios —una **función racional**— manda el **grado** de cada uno. El grado de un polinomio es el mayor exponente de $x$ que aparece: por ejemplo, $3x^2 + x$ tiene grado $2$ y $2x^2 - 5$ también tiene grado $2$.

Hay tres casos, según los grados del numerador (arriba) y del denominador (abajo):

1. **Grado del numerador menor que grado del denominador:** el límite es $0$. El denominador crece más rápido y la fracción se aplasta contra cero. Ejemplo: $\lim_{x \to \infty} \dfrac{3x + 1}{x^2 + 2x} = 0$ (arriba grado $1$, abajo grado $2$).
2. **Grados iguales:** el límite es el **cociente de los coeficientes principales** (los números que acompañan a la mayor potencia). Ejemplo: $\lim_{x \to \infty} \dfrac{3x^2 + x}{2x^2 - 5} = \dfrac{3}{2}$, porque ambos grados son $2$ y los coeficientes principales son $3$ y $2$.
3. **Grado del numerador mayor:** la fracción crece sin límite; el resultado es $+\infty$ o $-\infty$ según los signos. Ejemplo: $\lim_{x \to \infty} \dfrac{x^2 + 1}{x + 1} = +\infty$, mientras que $\lim_{x \to \infty} \dfrac{x^3 + x}{1 - x^2} = -\infty$ (el signo negativo del denominador domina al final).

La técnica que justifica todo esto es la **división por la potencia dominante**: se divide numerador y denominador por la mayor potencia de $x$ del denominador y se observa que los términos restantes, del tipo $\dfrac{1}{x}$ o $\dfrac{1}{x^2}$, tienden a cero. En el ejemplo del caso 2, dividiendo arriba y abajo por $x^2$:

$$\frac{3x^2 + x}{2x^2 - 5} = \frac{3 + \frac{1}{x}}{2 - \frac{5}{x^2}} \to \frac{3 + 0}{2 - 0} = \frac{3}{2}.$$

Estos límites definen las **asíntotas horizontales**: si $\lim_{x \to \pm\infty} f(x) = L$, la recta horizontal $y = L$ (todos los puntos del plano con segunda coordenada igual a $L$) es una asíntota horizontal del gráfico: la curva se pega a esa recta cuando nos alejamos mucho.

**Asíntotas verticales:** aparecen donde el denominador se anula y el límite (o algún lateral) es infinito. Ejemplo: $f(x) = \dfrac{1}{x - 2}$ en $x = 2$. Por la derecha ($x \to 2^{+}$, con $x - 2 > 0$ pequeño) la fracción es positiva y enorme: el límite es $+\infty$. Por la izquierda ($x \to 2^{-}$, con $x - 2 < 0$ pequeño) es negativa y enorme: $-\infty$. La recta vertical $x = 2$ es una asíntota vertical: el gráfico se dispara hacia arriba por un lado y hacia abajo por el otro.

Una comparación útil de velocidades: **las funciones exponenciales dominan a las potencias**. Si $n$ es un exponente fijo cualquiera,

$$\lim_{x \to \infty} \frac{x^n}{e^x} = 0,$$

donde $e \approx 2{,}71828$ es la constante de Euler y $e^x$ es la función exponencial (crece multiplicándose por $e$ en cada paso). Por grande que sea $n$, la exponencial termina ganando.

## Límites notables

Ciertos límites con funciones trigonométricas y exponenciales tienen valores exactos que conviene memorizar, porque permiten resolver familias enteras de ejercicios. Recordemos los protagonistas: **$\text{sen}\,x$** (el seno de $x$), **$\cos x$** (el coseno de $x$) y **$e$**, el número de Euler, una constante irracional, $e \approx 2{,}71828$, base del crecimiento continuo. En cálculo, los ángulos de seno y coseno se miden en **radianes** (la unidad natural de ángulo, donde media vuelta mide $\pi \approx 3{,}1416$ radianes).

Los cuatro límites notables fundamentales:

$$\lim_{x \to 0} \frac{\text{sen}\,x}{x} = 1, \qquad \lim_{x \to 0} \frac{1 - \cos x}{x} = 0, \qquad \lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}, \qquad \lim_{x \to 0} \frac{e^x - 1}{x} = 1.$$

Leamos el primero: "el límite de seno de equis sobre equis, cuando equis tiende a cero, es uno". La intuición: cerca de $x = 0$, la curva $y = \text{sen}\,x$ se confunde con la recta $y = x$ (su recta tangente en el origen tiene pendiente $1$), de modo que el cociente tiende a $1$. El tercero dice que $1 - \cos x$ se hace pequeño como $x^2/2$ (el numerador se anula "el doble de rápido" que en el segundo).

**Cómo usarlos.** La clave es **reescribir** la expresión hasta que aparezca la forma exacta del notable. Ejemplo: $\lim_{x \to 0} \dfrac{\text{sen}\,3x}{x}$. Queremos que el denominador sea $3x$ (lo mismo que está dentro del seno). Multiplicamos y dividimos por $3$:

$$\lim_{x \to 0} \frac{\text{sen}\,3x}{x} = \lim_{x \to 0} 3 \cdot \frac{\text{sen}\,3x}{3x} = 3 \cdot 1 = 3.$$

El cambio "dentro del seno y en el denominador" debe ser **el mismo**: cuando $x \to 0$, también $3x \to 0$, así que $\dfrac{\text{sen}\,3x}{3x} \to 1$. Otro ejemplo: $\lim_{x \to 0} \dfrac{\text{sen}\,5x}{2x} = \dfrac{5}{2} \cdot \lim \dfrac{\text{sen}\,5x}{5x} = \dfrac{5}{2}$.

**El número $e$ como límite.** El número $e$ nace precisamente de un límite:

$$e = \lim_{n \to \infty} \left( 1 + \frac{1}{n} \right)^n = \lim_{x \to 0} (1 + x)^{1/x} \approx 2{,}71828.$$

Leído: "base uno más uno sobre ene, todo elevado a la ene, tiende a $e$ cuando ene tiende a infinito". La forma general, con una tasa $r$ fija, es:

$$\lim_{n \to \infty} \left( 1 + \frac{r}{n} \right)^n = e^{r}.$$

**Ejemplo.** $\lim_{n \to \infty} \left( 1 + \dfrac{0{,}05}{n} \right)^n = e^{0{,}05} \approx 1{,}0513$: es el factor de crecimiento continuo de un capital al $5\%$ anual con capitalización continua. Y una variante frecuente en exámenes: $\lim_{x \to \infty} \left( 1 + \dfrac{1}{x} \right)^{2x} = \left[ \lim_{x \to \infty} \left( 1 + \dfrac{1}{x} \right)^x \right]^2 = e^2$, usando la regla de la potencia de límites.

## Continuidad y discontinuidades

Intuitivamente, una función es **continua** en un punto si su gráfico pasa por ese punto **sin saltos ni huecos**: se puede dibujar sin levantar el lápiz. La definición formal exige tres condiciones, todas a la vez, para que $f$ sea continua en $a$:

1. **$f(a)$ existe.** El punto $a$ debe estar en el dominio de la función: hay un valor asignado en $a$.
2. **$\lim_{x \to a} f(x)$ existe.** Los valores de $f$ se acercan a un único número cuando $x$ se acerca a $a$ (los laterales coinciden).
3. **$\lim_{x \to a} f(x) = f(a)$.** El número al que se acercan los valores es exactamente el valor en el punto.

Si falla cualquiera de las tres, hay una **discontinuidad**, y se clasifica según cuál falló:

- **Evitable (o removible):** el límite existe pero no coincide con $f(a)$, típicamente porque $f(a)$ no está definido o está definido en otro valor. Ejemplo: $f(x) = \dfrac{x^2 - 1}{x - 1}$ en $x = 1$: el límite es $2$ pero $f(1)$ no existe. Se llama evitable porque podríamos "reparar" la función definiendo $f(1) = 2$.
- **De salto:** los dos laterales existen, son finitos y distintos. Ejemplo: $f(x) = \dfrac{|x|}{x}$ en $x = 0$: laterales $-1$ y $1$. El gráfico salta de un nivel a otro.
- **Infinita:** algún límite lateral es $+\infty$ o $-\infty$; el gráfico se dispara junto a una asíntota vertical. Ejemplo: $f(x) = \dfrac{1}{x - 2}$ en $x = 2$.

**Propiedades útiles.** Si $f$ y $g$ son continuas en $a$, también lo son su suma, su resta, su producto y su cociente (este último donde $g(a) \neq 0$), así como las composiciones (una función aplicada dentro de otra). Además, los polinomios, el seno, el coseno, la exponencial y el logaritmo son continuos en todo su dominio. Por eso la sustitución directa funciona con ellos.

**Teorema del valor intermedio (TVI).** Si $f$ es continua en el intervalo cerrado $[a, b]$ (todos los números entre $a$ y $b$, incluidos los extremos, con $a < b$) y $k$ es cualquier número entre $f(a)$ y $f(b)$, entonces **existe** al menos un punto $c$ en el intervalo abierto $(a, b)$ (los extremos excluidos) tal que $f(c) = k$. Geométricamente: una curva continua que va de una altura a otra **tiene que pasar por todas las alturas intermedias**.

**Ejemplo.** La función $f(x) = x^3 - x - 1$ es continua (es un polinomio). En los extremos del intervalo $[1, 2]$: $f(1) = 1 - 1 - 1 = -1$ y $f(2) = 8 - 2 - 1 = 5$. Como $0$ está entre $-1$ y $5$, el TVI garantiza que existe un $c$ en $(1, 2)$ con $f(c) = 0$: la ecuación $x^3 - x - 1 = 0$ tiene una raíz entre $1$ y $2$. Este razonamiento es la base del método de bisección para hallar raíces.

**Determinar parámetros para lograr continuidad.** Ejemplo: hallar $k$ para que sea continua la función

$$f(x) = \begin{cases} x^2 + 1 & \text{si } x < 2 \\ kx & \text{si } x \geq 2 \end{cases}$$

El único punto en duda es $x = 2$. Por la izquierda el límite es $2^2 + 1 = 5$. Por la derecha es $k \cdot 2 = 2k$. Para que exista el límite, ambos deben coincidir: $2k = 5$, de donde $k = \dfrac{5}{2} = 2{,}5$. Con ese valor, $f(2) = 2k = 5$ coincide con el límite y las tres condiciones se cumplen.

## Ejemplos resueltos

**Ejemplo 1 (sustitución directa).** $\lim_{x \to 2} (3x^2 - 4x + 1)$. Como el polinomio es continuo, sustituimos: $3 \cdot 4 - 4 \cdot 2 + 1 = 12 - 8 + 1 = 5$. Respuesta: $5$.

**Ejemplo 2 (factorización).** $\lim_{x \to -1} \dfrac{x^2 - 1}{x + 1}$. Al sustituir: $\dfrac{0}{0}$. Factorizamos: $x^2 - 1 = (x - 1)(x + 1)$. Cancelando el factor $(x + 1)$ queda $x - 1$, y con $x \to -1$: $-2$. Respuesta: $-2$.

**Ejemplo 3 (racionalización).** $\lim_{x \to 0} \dfrac{\sqrt{4 + x} - 2}{x}$. Sustitución: $\dfrac{0}{0}$. Multiplicamos por el conjugado $\sqrt{4 + x} + 2$:

$$\frac{\sqrt{4 + x} - 2}{x} \cdot \frac{\sqrt{4 + x} + 2}{\sqrt{4 + x} + 2} = \frac{(4 + x) - 4}{x(\sqrt{4 + x} + 2)} = \frac{x}{x(\sqrt{4 + x} + 2)} = \frac{1}{\sqrt{4 + x} + 2}.$$

Con $x \to 0$: $\dfrac{1}{2 + 2} = \dfrac{1}{4}$. Respuesta: $\dfrac{1}{4}$.

**Ejemplo 4 (límite al infinito).** $\lim_{x \to \infty} \dfrac{5x^3 - 2x}{4x^3 + x^2}$. Grados iguales ($3$ y $3$): dividimos arriba y abajo por $x^3$:

$$\frac{5 - \frac{2}{x^2}}{4 + \frac{1}{x}} \to \frac{5 - 0}{4 + 0} = \frac{5}{4}.$$

Respuesta: $\dfrac{5}{4}$.

**Ejemplo 5 (límite notable).** $\lim_{x \to 0} \dfrac{\text{sen}\,3x}{x} = 3 \cdot \lim_{x \to 0} \dfrac{\text{sen}\,3x}{3x} = 3 \cdot 1 = 3$. Respuesta: $3$.

**Ejemplo 6 (número $e$).** $\lim_{x \to \infty} \left( 1 + \dfrac{1}{x} \right)^{2x} = \left[ \left( 1 + \dfrac{1}{x} \right)^x \right]^2 = e^2$. Respuesta: $e^2$.

**Ejemplo 7 (continuidad).** Analiza $f(x) = \dfrac{x - 1}{x^2 - 1}$. El denominador se anula en $x = 1$ y $x = -1$ (porque $x^2 - 1 = (x - 1)(x + 1)$). Para $x \neq 1$, la función se simplifica a $\dfrac{1}{x + 1}$. En $x = 1$: el límite es $\dfrac{1}{2}$, pero $f(1)$ no existe: discontinuidad **evitable** en $x = 1$. En $x = -1$: al acercarse, el denominador tiende a cero y la fracción crece sin límite: discontinuidad **infinita** en $x = -1$ (asíntota vertical).

**Ejemplo 8 (aplicación, física).** La posición de un móvil (en metros, a los $t$ segundos) es $s(t) = 20t - 5t^2$. La velocidad promedio entre los instantes $t$ y $t + h$ (con $h$ un intervalo pequeño de tiempo) es el cociente incremental $\dfrac{s(t + h) - s(t)}{h}$. La velocidad instantánea es el límite cuando $h \to 0$. En $t = 2$: primero $s(2) = 20 \cdot 2 - 5 \cdot 4 = 20$, y $s(2 + h) = 20(2 + h) - 5(2 + h)^2 = 40 + 20h - 20 - 20h - 5h^2 = 20 - 5h^2$. El cociente es $\dfrac{(20 - 5h^2) - 20}{h} = \dfrac{-5h^2}{h} = -5h$, y su límite cuando $h \to 0$ es $0$. Velocidad instantánea en $t = 2$: $0$ m/s. Tiene sentido: $s(t)$ es una parábola con vértice en $t = 2$, el instante en que el móvil alcanza su punto más alto y se detiene un instante.

**Ejemplo 9 (demostración épsilon-delta).** Probar que $\lim_{x \to 1} (3x) = 3$. Dado $\varepsilon > 0$, buscamos $\delta$ tal que $0 < |x - 1| < \delta$ implique $|3x - 3| < \varepsilon$. Como $|3x - 3| = 3|x - 1|$, basta que $3|x - 1| < \varepsilon$, es decir, $|x - 1| < \dfrac{\varepsilon}{3}$. Tomamos $\delta = \dfrac{\varepsilon}{3}$ y la cadena cierra: $|3x - 3| = 3|x - 1| < 3\delta = \varepsilon$.

## Errores comunes

- **Sustituir y quedarse con la indeterminación.** Si al sustituir aparece $\dfrac{0}{0}$, eso no es el resultado: la sustitución no decidió nada y hay que transformar la expresión (factorizar, racionalizar o aplicar L'Hôpital).
- **Concluir que no hay límite porque $f(a)$ no existe.** Falso. El ejemplo inicial, $\dfrac{x^2 - 1}{x - 1}$, no existe en $x = 1$ y su límite es $2$. El límite mira los alrededores, no el punto.
- **Cancelar factores sin exigir $x \neq a$.** La cancelación $\dfrac{(x-3)(x+3)}{x-3} = x+3$ es válida solo porque en el límite $x \neq 3$. Olvidar esa salvedad lleva a confusiones conceptuales (aunque el número final suela salir bien).
- **Aplicar L'Hôpital sin verificar la forma.** Si el cociente no es $\dfrac{0}{0}$ ni $\dfrac{\infty}{\infty}$, la regla da resultados falsos. Ejemplo: $\lim_{x \to 1} \dfrac{x + 1}{x + 2} = \dfrac{2}{3}$; derivar arriba y abajo daría $1$, incorrecto.
- **Creer que $1^{\infty} = 1$.** La forma $1^{\infty}$ es indeterminada: puede dar $e$, $e^2$ o divergir. Nunca se responde $1$ sin análisis.
- **No comparar los límites laterales.** En funciones por partes o con valor absoluto, el límite existe solo si ambos laterales coinciden.
- **Tratar $\infty$ como un número.** No valen operaciones como $\infty - \infty = 0$ o $\dfrac{\infty}{\infty} = 1$: son formas indeterminadas que exigen técnica.
- **Olvidar el signo al infinito.** En $\lim_{x \to -\infty}$ o en asíntotas verticales, el signo de $\pm\infty$ depende de los signos de los términos dominantes; hay que examinarlo, no adivinarlo.
- **Confundir "continua" con "el límite existe".** La continuidad exige además que el valor en el punto exista y coincida con el límite.
- **Sacar raíces sin cuidado.** $\sqrt{x^2} = |x|$, no $x$: cuando $x \to -\infty$, $\sqrt{x^2}$ se comporta como $-x$. Este descuido cambia los signos al infinito.

## Ejercicios propuestos (con respuestas)

1. $\lim_{x \to 2} (3x^2 - 4x + 1)$.
2. $\lim_{x \to -1} \dfrac{x^2 - 1}{x + 1}$.
3. $\lim_{x \to 0} \dfrac{\sqrt{4 + x} - 2}{x}$.
4. $\lim_{x \to \infty} \dfrac{2x^2 + 3x}{5x^2 - 1}$.
5. $\lim_{x \to 0} \dfrac{\text{sen}\,3x}{x}$.
6. $\lim_{x \to \infty} \left( 1 + \dfrac{1}{x} \right)^{2x}$.
7. Analiza la continuidad de $f(x) = \dfrac{x - 1}{x^2 - 1}$.
8. Demuestra con épsilon-delta que $\lim_{x \to 1} (3x) = 3$.

**Respuestas.** 1) $5$ (sustitución directa). 2) $-2$ (factoriza y cancela $x + 1$). 3) $\dfrac{1}{4}$ (racionaliza con el conjugado). 4) $\dfrac{2}{5}$ (grados iguales: cociente de coeficientes principales). 5) $3$ (reescribe como $3 \cdot \dfrac{\text{sen}\,3x}{3x}$). 6) $e^2$ (potencia del límite notable de $e$). 7) Discontinuidad evitable en $x = 1$ (límite $\dfrac{1}{2}$) e infinita en $x = -1$. 8) Dado $\varepsilon > 0$, toma $\delta = \dfrac{\varepsilon}{3}$: si $0 < |x - 1| < \delta$, entonces $|3x - 3| = 3|x - 1| < 3\delta = \varepsilon$.

## Resumen

- El límite $\lim_{x \to a} f(x) = L$ describe el valor al que se acercan las salidas $f(x)$ cuando la entrada $x$ se acerca a $a$; mira el comportamiento **alrededor** de $a$, no el valor en $a$.
- La notación se lee pieza por pieza: $\lim$ ("límite"), $x \to a$ ("equis tiende a a"), $a^{+}$ y $a^{-}$ (derecha e izquierda), $\infty$ (crecer sin límite), $\varepsilon$ (margen en la salida) y $\delta$ (margen en la entrada).
- La definición épsilon-delta formaliza la idea: para cada reto $\varepsilon > 0$ existe una respuesta $\delta > 0$; el épsilon es el reto y el delta la respuesta.
- El límite bilateral existe si y solo si los laterales existen y coinciden; los saltos y las funciones por partes se analizan con laterales.
- La sustitución directa es el primer intento; las indeterminaciones ($\frac{0}{0}$, $\frac{\infty}{\infty}$, $1^\infty$, etc.) exigen factorizar, racionalizar, buscar común denominador, dividir por la potencia dominante, usar límites notables o L'Hôpital.
- Al infinito manda el grado mayor en cocientes de polinomios; las asíntotas horizontales y verticales describen el comportamiento extremo del gráfico.
- Los límites notables ($\frac{\text{sen}\,x}{x} \to 1$, $\frac{1 - \cos x}{x^2} \to \frac{1}{2}$, $\frac{e^x - 1}{x} \to 1$, $(1 + \frac{1}{n})^n \to e$) se usan reescribiendo la expresión para que aparezca la forma exacta.
- La continuidad exige valor en el punto, límite existente e igualdad entre ambos; las discontinuidades son evitables, de salto o infinitas, y el teorema del valor intermedio garantiza raíces en intervalos donde la función continua cambia de signo.
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
## ¿Qué es una serie?

Imagina que tienes una lista infinita de números y quieres **sumarlos todos**. Eso, dicho de la forma más simple posible, es una serie: la suma de infinitos términos.

Ejemplo concreto: pensemos en la suma

$$1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16} + \cdots$$

Cada término es la mitad del anterior. ¿Cuánto da esta suma infinita? Es natural sospechar que se acerca a $2$: si sumas los primeros términos obtienes $1$, luego $1.5$, luego $1.75$, luego $1.875$... cada vez te acercas más a $2$ sin pasarte. Diremos que esta serie **converge** a $2$.

Pero cuidado: no toda suma infinita da un número. La suma

$$1 + 1 + 1 + 1 + 1 + \cdots$$

crece sin límite, y la suma

$$1 - 1 + 1 - 1 + 1 - \cdots$$

no se estabiliza nunca: da $1$, luego $0$, luego $1$, luego $0$... Estas series **divergen**.

La palabra clave es **converger**: una serie converge cuando sus sumas parciales (las sumas de los primeros términos) se acercan a un número fijo llamado la **suma de la serie**. Si no lo hacen, la serie **diverge**. A lo largo de toda esta guía, "analizar una serie" significará decidir si converge o diverge y, cuando sea posible, calcular su suma.

¿Para qué sirve todo esto? Las series son la herramienta con la que las calculadoras evalúan funciones como el seno o el exponencial, con la que se estudian ondas y señales (series de Fourier) y con la que se aproximan soluciones de ecuaciones. Son el puente entre lo finito y lo infinito.

## Cómo leer la notación

La notación de series es compacta y al principio asusta, pero cada símbolo tiene un significado concreto. Veámoslo pieza por pieza.

**El símbolo de suma $\sum$.** Es la letra griega *sigma* mayúscula, que indica "suma". Viene con tres adornos:

- **Debajo** (o al costado) se escribe el índice y su valor inicial. En $\sum_{n=1}^{\infty}$ el índice es la letra $n$, que empieza valiendo $1$.
- **Encima** se escribe el valor final. El símbolo $\infty$ (infinito) indica que la suma no termina: se suman infinitos términos.
- **A la derecha** se escribe la fórmula que define cada término.

**El término general $a_n$.** Se lee "a sub ene". Es la fórmula que da el término número $n$ de la lista. Por ejemplo, si $a_n = \dfrac{1}{n^2}$, entonces:

- $a_1 = \dfrac{1}{1^2} = 1$
- $a_2 = \dfrac{1}{2^2} = \dfrac{1}{4}$
- $a_3 = \dfrac{1}{3^2} = \dfrac{1}{9}$

y así sucesivamente. Reemplazar $n$ por números concretos es la operación más importante para leer series: si no entiendes una serie, calcula sus tres primeros términos a mano.

**La expresión completa.** La escritura

$$\sum_{n=1}^{\infty} a_n$$

se lee: "la suma desde $n$ igual a $1$ hasta infinito de $a_n$". Su significado es la suma infinita

$$a_1 + a_2 + a_3 + a_4 + \cdots$$

Los puntos suspensivos $\cdots$ significan "y así sigue, sin terminar".

**Índices que empiezan en cero.** Algunas series empiezan en $n = 0$:

$$\sum_{n=0}^{\infty} a_n = a_0 + a_1 + a_2 + \cdots$$

Es solo un cambio de etiqueta: no cambia nada esencial. Aprenderás a reconocerlo con las series geométricas y de Taylor.

**El límite $\lim$.** Se lee "límite". La expresión $\lim_{n \to \infty} a_n = L$ significa "cuando $n$ crece sin límite, el número $a_n$ se acerca al número $L$". La flecha $\to$ se lee "tiende a". Por ejemplo, $\lim_{n\to\infty} \dfrac{1}{n} = 0$: cuando $n$ es enorme, $1/n$ es diminuto, cada vez más cerca de $0$.

**El valor absoluto $|r|$.** Las barras $| \ |$ significan "valor absoluto": la distancia del número al cero, ignorando el signo. Así, $|3| = 3$, $|-3| = 3$, $|-0.5| = 0.5$. La condición $|r| < 1$ significa "el número $r$ está estrictamente entre $-1$ y $1$". La condición $|r| \geq 1$ significa "$r$ es $1$, mayor que $1$, $-1$ o menor que $-1$". El símbolo $\geq$ se lee "mayor o igual que", $<$ "menor que", $\leq$ "menor o igual que".

**Factorial $n!$.** Se lee "ene factorial". Es el producto de todos los enteros desde $1$ hasta $n$: $5! = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 120$. Por convención, $0! = 1$. El factorial crece más rápido que cualquier potencia: por eso aparece en las series de Taylor.

**Fracciones y potencias.** La potencia $n^p$ es $n$ multiplicado por sí mismo $p$ veces. Por ejemplo $n^2 = n \cdot n$, y $n^{1/2} = \sqrt{n}$ (la raíz cuadrada de $n$). La escritura $\sqrt[n]{|a_n|}$ es la raíz enésima, el número que elevado a la $n$ da $|a_n|$.

## Sucesiones y convergencia

**Qué es una sucesión.** Una **sucesión** $\{a_n\}$ (las llaves indican "el conjunto de todos los $a_n$") es una lista infinita y ordenada de números:

$$a_1, a_2, a_3, a_4, \ldots$$

Piensa en ella como una fila de personas: cada posición $n$ tiene un ocupante $a_n$. Ejemplos:

- $\left\{\dfrac{1}{n}\right\}$ es la lista $1, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \ldots$: cada vez más pequeña.
- $\left\{n^2\right\}$ es la lista $1, 4, 9, 16, 25, \ldots$: crece sin freno.
- $\left\{(-1)^n\right\}$ es la lista $-1, 1, -1, 1, \ldots$: salta para siempre entre dos valores.

**Convergencia de una sucesión.** Una sucesión converge a un número $L$ (la "ele") si sus términos se acercan a $L$ tanto como queramos, quedándose cerca. Se escribe

$$\lim_{n\to\infty} a_n = L$$

y se lee "el límite de $a_n$ cuando $n$ tiende a infinito es $L$". Si no existe tal número, la sucesión **diverge**. Divergir puede significar crecer sin límite (como $n^2$, que tiende a $\infty$), oscilar sin parar (como $(-1)^n$) o cualquier comportamiento sin un destino fijo.

**Ejemplos que hay que memorizar.** Son los cimientos de todo lo que viene:

- $\dfrac{1}{n} \to 0$: los inversos de números grandes se van a cero.
- $n^2 \to \infty$: las potencias crecen sin límite.
- $\left(1 + \dfrac{1}{n}\right)^n \to e$: el número $e \approx 2.71828$, la constante de Euler, nace exactamente de este límite. Aparecerá en todas las series exponenciales.

**Cocientes de polinomios: manda el grado mayor.** Si $a_n$ es un cociente de polinomios en $n$, su límite lo decide el término de mayor grado (el mayor exponente de $n$). Por ejemplo:

$$\lim_{n\to\infty} \frac{3n^2 + n}{2n^2 + 5} = \frac{3}{2}$$

porque arriba y abajo el mayor grado es $n^2$, y quedan los coeficientes $3$ y $2$. En cambio,

$$\lim_{n\to\infty} \frac{5n + 1}{n^2 - 3} = 0$$

porque abajo el grado es mayor (el denominador crece mucho más rápido). Y si el grado de arriba es mayor, el límite es infinito (la sucesión diverge a $\infty$). Regla práctica: mira solo los términos de mayor grado, el resto es irrelevante cuando $n$ es gigante.

**Monótona y acotada: un teorema que da convergencia gratis.** Una sucesión es **monótona** si siempre va en una sola dirección (siempre sube o siempre baja), y es **acotada** si todos sus términos quedan entre dos números fijos. El teorema dice: *toda sucesión monótona y acotada converge*. No te dice a qué valor, solo que converge. Es un resultado de existencia: si una fila infinita de números sube (o baja) sin saltarse una barrera, tiene que acercarse a algún límite. Es la garantía matemática de que "no puede crecer para siempre sin llegar a ninguna parte".

**De sucesiones a series.** Una serie no es más que intentar sumar los términos de una sucesión. Si tienes la sucesión $\{a_n\}$, la serie asociada es

$$\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \cdots$$

Para decidir si esa suma infinita tiene sentido, definimos las **sumas parciales** $S_N$: la suma de solo los primeros $N$ términos,

$$S_N = \sum_{n=1}^{N} a_n = a_1 + a_2 + \cdots + a_N$$

Observa que aquí la suma termina en $N$, un número finito: por eso $S_N$ siempre se puede calcular. Por ejemplo, para la serie de $1/2^n$: $S_1 = \frac{1}{2}$, $S_2 = \frac{3}{4}$, $S_3 = \frac{7}{8}$, $S_4 = \frac{15}{16}$, y se ve que $S_N \to 1$.

**Definición central.** La serie $\sum a_n$ **converge** si la sucesión de sumas parciales $S_N$ converge; en ese caso la suma de la serie es ese límite. Si las sumas parciales no convergen, la serie **diverge**. Toda la teoría de series es una colección de trucos para decidir esto sin tener que sumar infinitos términos.

## Series geométricas y p

Hay dos familias de series que actúan como *patrón de referencia*: casi todos los demás problemas se resuelven comparando contra una de ellas. Conviene dominarlas por completo.

**La serie geométrica.** En una serie geométrica cada término se obtiene multiplicando el anterior por un número fijo $r$, llamado **razón** (de "razón común", el factor que se repite). Su forma general es

$$\sum_{n=0}^{\infty} a\, r^n = a + ar + ar^2 + ar^3 + \cdots$$

donde $a$ es el **primer término** (el valor en $n = 0$) y $r$ es la razón. Si escribes los primeros términos, $a r^1 = ar$, $a r^2 = a \cdot r \cdot r$, y así: cada término multiplica al anterior por $r$.

La fórmula mágica, que debes memorizar, es:

$$\sum_{n=0}^{\infty} a\,r^n = \frac{a}{1 - r} \quad \text{si } |r| < 1; \quad \text{diverge si } |r| \geq 1$$

En palabras: la serie geométrica converge exactamente cuando la razón está estrictamente entre $-1$ y $1$, y su suma es el primer término dividido por $1$ menos la razón.

¿Por qué $|r| < 1$? Porque si $r = \frac{1}{2}$, las potencias $r^n$ se encogen a cero y la suma se acumula hacia un límite. Si $r = 2$, cada término duplica el anterior y la suma explota. Si $r = 1$, sumas $a + a + a + \cdots$ infinitamente: diverge. Si $r = -1$, la suma oscila $a - a + a - a + \cdots$ y tampoco converge.

Ejemplo: $\sum_{n=0}^{\infty} \left(\frac{1}{2}\right)^n = \frac{1}{1 - 1/2} = 2$. Aquí $a = 1$ (porque el término en $n=0$ es $r^0 = 1$) y $r = 1/2$.

**Cuidado con el punto de partida.** La fórmula de arriba vale cuando la suma empieza en $n = 0$. Si tu serie empieza en $n = 1$ o en $n = 3$, saca el primer término como factor común: por ejemplo,

$$\sum_{n=1}^{\infty} r^n = r + r^2 + r^3 + \cdots = r\left(1 + r + r^2 + \cdots\right) = \frac{r}{1 - r}$$

porque $r$ multiplica a la serie geométrica estándar. Verificar siempre "cuál es el primer término" es la forma de no equivocarse.

**La serie p.** La serie p (se llama así por la letra del exponente) es

$$\sum_{n=1}^{\infty} \frac{1}{n^p} = \frac{1}{1^p} + \frac{1}{2^p} + \frac{1}{3^p} + \cdots$$

El criterio p, que se demuestra con integrales, dice:

$$\text{converge si } p > 1; \quad \text{diverge si } p \leq 1$$

Casos célebres:

- $p = 1$: la **serie armónica** $\sum \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \cdots$ **diverge**, aunque sus términos tiendan a cero. Es el ejemplo clásico de que "los términos se van a cero" no basta. Diverge muy despacio: para superar la suma $20$ necesitas unos $400$ millones de términos.
- $p = 2$: $\sum \frac{1}{n^2}$ converge. Su suma exacta, demostrada por Euler, es $\dfrac{\pi^2}{6} \approx 1.6449$, un resultado hermoso que conecta la suma con el círculo.

**La serie telescópica.** Aunque no es una "familia p", es la tercera serie exacta que conviene conocer. Se llama telescópica porque sus términos se pliegan unos sobre otros, como un telescopio viejo. El ejemplo patrón es

$$\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$$

El truco es la **descomposición en fracciones parciales**: buscamos dos fracciones más simples cuya suma sea el término original. Aquí

$$\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$$

(compruébalo haciendo denominador común). Entonces la suma parcial $N$-ésima es

$$S_N = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{4}\right) + \cdots + \left(\frac{1}{N} - \frac{1}{N+1}\right)$$

Casi todo se cancela en cadena: cada $-\frac{1}{k}$ se elimina con el $+\frac{1}{k}$ siguiente. Sobreviven solo el primer $1$ y el último $-\frac{1}{N+1}$. Por tanto $S_N = 1 - \frac{1}{N+1}$, y al tender $N$ a infinito, la serie suma exactamente $1$.

**Resumen de referencia.** Geométrica: converge si $|r| < 1$, suma $\frac{a}{1-r}$. Serie p: converge si $p > 1$. Telescópica: se colapsa a una resta de extremos. Con estas tres en la mano ya puedes analizar muchísimas series por comparación.

## Criterios de convergencia explicados uno a uno

Un **criterio** es una regla que, aplicada a una serie, responde "converge", "diverge" o "no me preguntes a mí" (no concluye). Ningún criterio lo resuelve todo: la habilidad está en elegir bien. Los presentamos uno a uno, con su lógica, cuándo usarlo y sus puntos ciegos.

**Condición necesaria: el test del término.** Si $\sum a_n$ converge, entonces obligatoriamente sus términos se van a cero: $\lim a_n = 0$. Es una *condición necesaria*, no suficiente. Su uso práctico es el **test de divergencia**: si calculas $\lim a_n$ y no da $0$ (o no existe), la serie **diverge**, sin más análisis. Ejemplo: $\sum \frac{n}{n+1}$ tiene término general que tiende a $1$, no a cero: diverge. Pero si $a_n \to 0$, el test no dice nada: la armónica $\sum \frac{1}{n}$ tiene términos que tienden a cero y aun así diverge. Es el error número uno de los principiantes: confundir "necesario" con "suficiente".

**1. Criterio de comparación.** Idea: si los términos de mi serie son más pequeños que los de una serie que converge, la mía también converge; si son más grandes que los de una que diverge, la mía también diverge. Formalmente: si $0 \leq a_n \leq b_n$ para todo $n$ (desde algún punto) y $\sum b_n$ converge, entonces $\sum a_n$ converge. La desigualdad $0 \leq a_n \leq b_n$ se lee "a sub ene está entre cero y b sub ene": exige términos positivos y comparables. Ejemplo: $\sum \frac{1}{n^2 + 1}$ converge porque $\frac{1}{n^2 + 1} \leq \frac{1}{n^2}$ (denominador más grande, fracción más chica) y $\sum \frac{1}{n^2}$ converge (serie p con $p = 2$). ¿Con quién comparo? Casi siempre con una serie p o una geométrica.

**2. Criterio de comparación al límite.** A veces las desigualdades directas son incómodas. Entonces comparamos "en el infinito": calculamos

$$L = \lim_{n\to\infty} \frac{a_n}{b_n}$$

con $a_n, b_n > 0$. Si ese límite $L$ es un número **positivo y finito** (ni $0$ ni $\infty$), entonces ambas series **convergen o divergen juntas**: se comportan igual porque sus términos son "proporcionales" cuando $n$ es grande. La elección de $b_n$ viene de quedarse solo con el término dominante de $a_n$. Ejemplo: para $\sum \frac{n^2 + 3}{2n^4 - n}$, el término dominante es $\frac{n^2}{2n^4} = \frac{1}{2n^2}$; comparo con $b_n = \frac{1}{n^2}$. El límite del cociente da $\frac{1}{2} > 0$, y como $\sum \frac{1}{n^2}$ converge, la original converge.

**3. Criterio de la razón (D'Alembert).** Pensado para series con factoriales, potencias y productos: cosas que se multiplican, no que se suman. Formamos el cociente de dos términos consecutivos (con valor absoluto para ignorar signos):

$$L = \lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right|$$

Regla: si $L < 1$, la serie **converge** (incluso absolutamente); si $L > 1$, **diverge**; si $L = 1$, **no decide** y hay que usar otro criterio. La intuición: si cada término es "una fracción fija" del anterior con fracción menor que $1$, la serie se comporta como una geométrica convergente. Ejemplo: para $\sum \frac{3^n}{n!}$,

$$\left|\frac{a_{n+1}}{a_n}\right| = \frac{3^{n+1}/(n+1)!}{3^n/n!} = \frac{3}{n+1} \to 0 < 1$$

converge. Nota: el cociente de factoriales se simplifica porque $(n+1)! = (n+1)\cdot n!$.

**4. Criterio de la raíz (Cauchy).** Mismo veredicto, otra herramienta: útil cuando el término general está elevado a la $n$. Calculamos

$$L = \lim_{n\to\infty} \sqrt[n]{|a_n|}$$

La raíz enésima "deshace" la potencia enésima. Regla idéntica: $L < 1$ converge, $L > 1$ diverge, $L = 1$ no decide. Ejemplo: $\sum \left(\frac{n}{2n+1}\right)^n$ tiene $\sqrt[n]{|a_n|} = \frac{n}{2n+1} \to \frac{1}{2} < 1$: converge.

**5. Criterio de la integral.** Conecta series con integrales impropias. Requisitos: existe una función $f$ **positiva, continua y decreciente** con $f(n) = a_n$ (la función que al evaluarla en enteros reproduce la serie). Entonces la serie $\sum a_n$ y la integral impropia $\int_1^{\infty} f(x)\,dx$ **convergen o divergen juntas**. La intuición es geométrica: los términos de la serie son las áreas de rectángulos que encajan entre el área bajo la curva y el área de rectángulos desplazados, así que una se dispara si y solo si la otra lo hace. Es el criterio natural para la serie p: $\int_1^\infty x^{-p}\,dx$ converge exactamente si $p > 1$. Úsalo cuando puedas integrar $f$ fácilmente, típicamente cuando $a_n$ involucra $\ln n$ o potencias.

**6. Criterio de series alternantes (Leibniz).** Una serie **alternante** es aquella cuyos términos cambian de signo en cada paso, como $\sum (-1)^n a_n$ o $\sum (-1)^{n+1} a_n$, con $a_n > 0$. El factor $(-1)^n$ vale $1$ si $n$ es par y $-1$ si $n$ es impar: por eso alterna. El criterio de Leibniz dice: si $a_n$ **decrece** (cada término positivo es más chico que el anterior) y $a_n \to 0$, entonces la serie alternante **converge**. La intuición: las sumas parciales van oscilando alrededor del límite con saltos cada vez más pequeños, y se estabilizan. Además da una cota de error gratuita: la diferencia entre la suma exacta y la suma parcial $S_N$ es **menor o igual que el primer término omitido** $a_{N+1}$. Ejemplo: $\sum \frac{(-1)^{n+1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$ converge, porque $1/n$ decrece a $0$. Su suma es $\ln 2$, el logaritmo natural de $2$.

**Cómo elegir criterio (hoja de ruta práctica).**

1. ¿$a_n \not\to 0$? Entonces diverge (test del término). Si $a_n \to 0$, sigue.
2. ¿Es una geométrica, una p, una telescópica o una alternante obvia? Aplica su regla directa.
3. ¿Hay factoriales o potencias enésimas? Razón (y raíz si todo está elevado a la $n$).
4. ¿Se parece a una serie p salvo por términos menores? Comparación o comparación al límite.
5. ¿Puedes integrar el término general? Criterio de la integral.

## Convergencia absoluta y condicional

Hasta ahora hemos tratado series de términos positivos o alternantes. Ahora refinamos: hay dos maneras de converger.

**Convergencia absoluta.** Una serie $\sum a_n$ es **absolutamente convergente** si la serie de sus valores absolutos converge:

$$\sum_{n=1}^{\infty} |a_n| \quad \text{converge}$$

Es decir: quitamos todos los signos, ponemos todos los términos positivos, y esa serie de puros positivos converge.

**Convergencia condicional.** Una serie es **condicionalmente convergente** si converge, pero su serie de valores absolutos diverge. La convergencia "sobrevive" solo gracias al juego de signos: los positivos y negativos se compensan entre sí.

**El teorema clave:** si $\sum |a_n|$ converge, entonces $\sum a_n$ converge. Convergencia absoluta **implica** convergencia. La prueba es elegante: como $0 \leq a_n + |a_n| \leq 2|a_n|$, la serie de $a_n + |a_n|$ converge por comparación, y restando la serie convergente de $|a_n|$ queda $a_n$. El recíproco **no vale**: hay series convergentes que no son absolutamente convergentes.

**El ejemplo que hay que dominar:** la **serie armónica alternante**

$$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$$

Converge por Leibniz (vale $\ln 2$), pero su versión en valor absoluto es la armónica $\sum \frac{1}{n}$, que diverge. Por lo tanto es **condicionalmente convergente**.

**Por qué importa la distinción: el teorema de Riemann.** Las series absolutamente convergentes se comportan como sumas finitas: puedes reordenar sus términos en cualquier orden y la suma no cambia. Las condicionalmente convergentes son frágiles: el teorema de reordenación de Riemann dice que, reordenando sus términos de forma astuta, puedes hacer que la serie sume **cualquier número que quieras**, o incluso que diverja. La suma infinita condicional depende del orden de los sumandos, algo que en las sumas finitas jamás ocurre. Es una de las sorpresas más profundas del análisis.

**Cómo clasificar en la práctica.** Si la serie es de términos positivos, convergencia y convergencia absoluta son lo mismo. Si hay signos mezclados, primero prueba la absoluta (con comparación o razón, que suelen trabajar con $|a_n|$ directamente); si la absoluta converge, listo. Si no, prueba si al menos la serie original converge (típicamente por Leibniz): en ese caso es condicional.

## Series de potencias

**Qué es.** Una **serie de potencias** es una serie cuyos términos contienen potencias de una variable $x$, con coeficientes $c_n$ (números que acompañan a cada potencia):

$$\sum_{n=0}^{\infty} c_n x^n = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \cdots$$

Cada $x$ que elijas convierte esto en una serie numérica normal, que puede converger o no. Por eso una serie de potencias es una **función definida por una serie**: para cada $x$ permitido, la suma da un valor $f(x)$.

**Radio de convergencia.** Lo sorprendente es que el conjunto de $x$ donde converge es siempre un intervalo centrado en el origen: existe un número $R \geq 0$ (posiblemente infinito), llamado **radio de convergencia**, tal que la serie converge absolutamente si $|x| < R$ y diverge si $|x| > R$. En los extremos exactos $|x| = R$ no hay regla general: hay que sustituir cada extremo y analizar la serie numérica resultante caso por caso.

**Cómo se calcula.** Con el criterio de la razón aplicado a los coeficientes:

$$R = \lim_{n\to\infty} \left|\frac{c_n}{c_{n+1}}\right|$$

(el cociente de coeficientes consecutivos, sin la $x$). Si el límite es $\infty$, la serie converge para todo $x$ real ($R = \infty$); si es $0$, solo converge en $x = 0$ ($R = 0$).

**Ejemplos de referencia:**

- $\sum_{n=0}^{\infty} x^n$: aquí $c_n = 1$ para todo $n$, así que $R = \lim \left|\frac{1}{1}\right| = 1$. Converge si $|x| < 1$, y su suma es la geométrica $\frac{1}{1-x}$. En $x = 1$ diverge, en $x = -1$ oscila: los extremos fallan.
- $\sum_{n=0}^{\infty} \frac{x^n}{n!}$: $R = \lim \frac{(n+1)!}{n!} = \lim (n+1) = \infty$. Converge **para todo** $x$. Veremos que esta serie es $e^x$.
- $\sum_{n=0}^{\infty} n!\, x^n$: $R = \lim \frac{n!}{(n+1)!} = \lim \frac{1}{n+1} = 0$. Solo sirve en $x = 0$. Los factoriales crecen tan rápido que nada de $x$ distinto de cero los doma.

**Derivación e integración término a término.** Dentro del intervalo de convergencia, una serie de potencias se comporta como un polinomio infinito: se puede **derivar e integrar término a término**, y la serie resultante tiene el mismo radio de convergencia. Esto permite resolver ecuaciones diferenciales suponiendo una solución en serie, y genera nuevas series a partir de conocidas.

## Taylor y McLaurin

**La idea.** Un polinomio de grado bajo solo puede acercarse a una función en puntos cercanos a un centro. Si permitimos polinomios "de grado infinito", es decir, series de potencias, podemos representar funciones suaves **exactamente** (al menos dentro de un intervalo). La **serie de Taylor** de una función $f$ alrededor del punto $a$ es

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n$$

Léela pieza por pieza: $f^{(n)}(a)$ es la **derivada enésima** de $f$ evaluada en $a$ (la derivada aplicada $n$ veces; $f^{(0)}$ es la propia $f$); $n!$ es el factorial; $(x-a)^n$ es la potencia del desplazamiento desde el centro $a$. El término $n$-ésimo mide "cómo de curva" es la función en el orden $n$, ponderado por el factorial. Cuando el centro es $a = 0$, la serie se llama **serie de McLaurin** (caso especial, pero el más usado).

**Las cuatro series que debes conocer de memoria:**

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots \quad \text{(válida para todo } x \text{)}$$

$$\operatorname{sen} x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots \quad \text{(todo } x \text{)}$$

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots \quad \text{(todo } x \text{)}$$

$$\frac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots \quad \text{(solo si } |x| < 1 \text{)}$$

Fíjate en los patrones: el seno solo tiene potencias impares y signos alternados; el coseno solo pares, alternados. La última es la geométrica disfrazada: coincide con $\sum x^n$.

**Para qué sirve.** Si $x$ es pequeño, las primeras potencias de $x$ se encogen muy rápido y los primeros términos de la serie ya dan una excelente aproximación. Así es como una calculadora calcula $\text{sen}(0.3)$: no dibuja un triángulo, suma $0.3 - \frac{0.3^3}{6} + \frac{0.3^5}{120}$ y corta. La **estimación del error** es obligatoria: si cortas en el término $N$-ésimo, el error cometido está controlado por el término siguiente (en las alternantes, directamente el error es menor que el primer término omitido). Aproximar sin acotar el error es el error de novato por excelencia.

## Introducción a Fourier

**El problema.** Las series de Taylor representan funciones suaves alrededor de un punto. Pero muchas funciones importantes del mundo real son **periódicas**: se repiten a intervalos regulares. Una onda de sonido, la corriente alterna, el latido del corazón. Para ellas, los bloques de construcción naturales no son potencias $x^n$, sino **senos y cosenos** de frecuencias crecientes.

**La idea.** Una función periódica (de período $2L$, es decir, que se repite cada tramo de longitud $2L$) se puede escribir como superposición de ondas:

$$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{L} + b_n\,\operatorname{sen}\frac{n\pi x}{L}\right)$$

Los números $a_0, a_1, a_2, \ldots$ y $b_1, b_2, \ldots$ son los **coeficientes de Fourier**, y se calculan con integrales que miden cuánto se parece la función a cada onda individual: cada coeficiente mide "cuánto aporta esa frecuencia". El término $\frac{a_0}{2}$ es el **nivel medio** de la función (la constante alrededor de la cual oscila). Los términos con $n$ grande corresponden a oscilaciones cada vez más rápidas.

**Un ejemplo clásico.** La onda cuadrada (una señal que salta entre $+1$ y $-1$ alternando tramos) se escribe solo con armónicos impares:

$$\frac{4}{\pi}\left(\operatorname{sen} x + \frac{\operatorname{sen} 3x}{3} + \frac{\operatorname{sen} 5x}{5} + \cdots\right)$$

Con más términos, la aproximación se afila, salvo un salto persistente en las esquinas (el fenómeno de Gibbs). La serie de Fourier es la base matemática del **procesamiento de señales**: el MP3 de tu música, la compresión de imágenes, los ecualizadores y la resonancia magnética funcionan descomponiendo y recombinando frecuencias con estas ideas. Aplicaciones históricas: Fourier la inventó para estudiar la difusión del calor en placas.

## Ejemplos resueltos

Cada ejemplo muestra no solo el resultado, sino la cadena de razonamiento.

**Ejemplo 1 (geométrica).** Suma $\displaystyle\sum_{n=0}^{\infty} 4\left(\frac{1}{2}\right)^n$.

- **Identificación.** Es geométrica: primer término $a = 4$ (el valor en $n=0$), razón $r = \frac{1}{2}$.
- **Verificación.** $|r| = \frac{1}{2} < 1$: converge.
- **Fórmula.** $S = \dfrac{a}{1-r} = \dfrac{4}{1 - 1/2} = \dfrac{4}{1/2} = 8$.

**Ejemplo 2 (telescópica).** Calcula $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n(n+1)}$.

- **Descomposición.** $\dfrac{1}{n(n+1)} = \dfrac{1}{n} - \dfrac{1}{n+1}$.
- **Suma parcial.** $S_N = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{N} - \frac{1}{N+1}\right) = 1 - \frac{1}{N+1}$.
- **Límite.** $S_N \to 1$. La serie suma $1$.

**Ejemplo 3 (razón).** ¿Converge $\displaystyle\sum_{n=1}^{\infty} \frac{3^n}{n!}$?

- **Armado del cociente.** $\left|\dfrac{a_{n+1}}{a_n}\right| = \dfrac{3^{n+1}}{(n+1)!} \cdot \dfrac{n!}{3^n} = \dfrac{3}{n+1}$.
- **Límite.** $\dfrac{3}{n+1} \to 0 < 1$.
- **Veredicto.** Converge (absolutamente). De hecho su suma es $e^3 - 1$, relacionada con la serie de $e^x$.

**Ejemplo 4 (alternante).** Analiza $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{\sqrt{n}}$.

- **Leibniz.** Los términos positivos $\frac{1}{\sqrt{n}}$ decrecen y tienden a $0$: la alternante **converge**.
- **¿Absolutamente?** $\sum \frac{1}{\sqrt{n}} = \sum n^{-1/2}$ es una serie p con $p = \frac{1}{2} \leq 1$: **diverge**.
- **Conclusión.** Convergencia **condicional**.

**Ejemplo 5 (Taylor aplicado).** Aproxima $e^{0.1}$ con tres términos y estima el error.

- **Serie.** $e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \cdots$. Con $x = 0.1$: $e^{0.1} \approx 1 + 0.1 + \frac{0.01}{2} = 1.105$.
- **Error.** El siguiente término es $\frac{(0.1)^3}{6} = \frac{0.001}{6} \approx 1.7 \times 10^{-4}$. Como la cola es menor que eso, el error es menor que $10^{-4}$.
- **Comparación.** Valor real $1.10517\ldots$: efectivamente el error es diminuto.

**Ejemplo 6 (Zenón, aplicación conceptual).** Una persona recorre en cada paso la mitad del camino que le queda. ¿Llega a la meta?

- **Modelo.** La distancia total recorrida es $\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots = \sum_{n=1}^{\infty} \frac{1}{2^n}$.
- **Cálculo.** Es la geométrica con $r = \frac{1}{2}$ empezando en $n=1$: suma $\frac{1/2}{1 - 1/2} = 1$.
- **Conclusión.** La suma de infinitos tramos es finita: en el modelo matemático, sí llega (y en tiempo finito, si cada paso toma la mitad de tiempo). La paradoja de Zenón se disuelve al entender que infinitos sumandos pueden tener suma finita.

## Errores comunes

- **Concluir convergencia porque $a_n \to 0$.** Es solo una condición necesaria. La armónica $\sum \frac{1}{n}$ tiene términos que tienden a cero y diverge. Si $a_n \to 0$, hay que seguir analizando; si $a_n \not\to 0$, sí puedes concluir divergencia.
- **Usar la razón cuando $L = 1$.** El criterio de la razón no decide en $L = 1$: ni converge ni diverge garantizado. Hay que cambiar de criterio (comparación, integral). Ejemplo: la armónica y la serie de $1/n^2$ dan ambas $L = 1$, y una diverge mientras la otra converge.
- **Confundir convergencia con convergencia absoluta.** Son propiedades distintas. La armónica alternante converge, pero su serie de valores absolutos diverge: es condicional. La convergencia condicional depende del orden de los términos.
- **Olvidar el radio de convergencia.** Una serie de potencias solo vale dentro de su intervalo: escribir $\frac{1}{1-x} = 1 + x + x^2 + \cdots$ y luego evaluar en $x = 2$ es inválido (daría $\frac{1}{-1} = -1$ contra una serie que explota).
- **Truncar Taylor sin estimar el error.** Aproximar sin cota de error no es aproximar. Siempre reporta una cota (por ejemplo, el primer término omitido en series alternantes) o no sabrás cuántos decimales son confiables.
- **Desalinear el índice de la geométrica.** Aplicar $\frac{a}{1-r}$ con un primer término equivocado (olvidando que la fórmula estándar empieza en $n=0$) es el error aritmético más frecuente. Verifica siempre cuál es el término con $n=0$.
- **Comparar contra la serie equivocada.** Comparar con $\sum \frac{1}{n}$ cuando la serie dominante es $\sum \frac{1}{n^2}$ (o al revés) invierte los veredictos. Identifica el término dominante antes de comparar.

## Ejercicios propuestos (con respuestas)

1. ¿Converge $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2 + 1}$?
2. Suma $\displaystyle\sum_{n=1}^{\infty} 2\left(\frac{2}{3}\right)^n$.
3. Aplica el criterio de la razón a $\displaystyle\sum_{n=1}^{\infty} \frac{n!}{10^n}$.
4. Analiza $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}$: ¿convergencia absoluta o condicional?
5. Halla el radio de convergencia de $\displaystyle\sum_{n=1}^{\infty} \frac{x^n}{n\,3^n}$.
6. Escribe los cuatro primeros términos de la serie de Taylor de $\cos x$ alrededor de $0$.
7. $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^{1.1}}$: ¿converge?
8. Aproxima $\operatorname{sen}(0.2)$ con dos términos y estima el error.

**Respuestas.**

1. **Converge.** Por comparación: $\frac{1}{n^2 + 1} \leq \frac{1}{n^2}$ y la serie p con $p = 2$ converge.
2. **Suma $4$.** Geométrica con $a = 2 \cdot \frac{2}{3} = \frac{4}{3}$ (primer término, en $n=1$) y $r = \frac{2}{3}$: $S = \frac{4/3}{1 - 2/3} = 4$.
3. **Diverge.** $\left|\frac{a_{n+1}}{a_n}\right| = \frac{n+1}{10} \to \infty > 1$.
4. **Absolutamente convergente.** $\sum \frac{1}{n^2}$ converge (p = 2), luego la alternante converge absolutamente.
5. **$R = 3$.** $c_n = \frac{1}{n\,3^n}$; $R = \lim \left|\frac{c_n}{c_{n+1}}\right| = \lim \frac{(n+1)3^{n+1}}{n\,3^n} = 3$.
6. **$1 - \dfrac{x^2}{2!} + \dfrac{x^4}{4!} - \dfrac{x^6}{6!}$**, es decir $1 - \frac{x^2}{2} + \frac{x^4}{24} - \frac{x^6}{720}$.
7. **Converge.** Serie p con $p = 1.1 > 1$.
8. **$\operatorname{sen}(0.2) \approx 0.2$**, con error menor que $\frac{0.2^3}{6} \approx 0.0013$ (el término cúbico omitido).

## Resumen

- **La serie converge si sus sumas parciales convergen**; $a_n \to 0$ es condición necesaria pero no suficiente (la armónica diverge).
- **Series de referencia:** la geométrica converge si $|r| < 1$ con suma $\frac{a}{1-r}$; la serie p converge si $p > 1$; la telescópica se colapsa por cancelación.
- **Criterios:** comparación y comparación al límite se apoyan en las de referencia; razón y raíz deciden salvo en $L = 1$; la integral conecta series con integrales impropias; Leibniz resuelve las alternantes.
- **Absoluta implica convergente**; la condicional es frágil: reordenar puede cambiar su suma (Riemann).
- **Series de potencias:** convergen en un intervalo $|x| < R$; se derivan e integran término a término.
- **Taylor y Fourier representan funciones como series:** Taylor con potencias alrededor de un punto (cálculo numérico), Fourier con senos y cosenos para funciones periódicas (señales y ondas).
`,


  "calc-vectorial": String.raw`
## ¿Qué es un campo vectorial?

Hasta ahora estudiaste funciones que reciben un número y devuelven un número, como $f(x) = x^2$, o que reciben dos números y devuelven uno, como $f(x,y) = x^2 + y^2$ (la altura de un punto del terreno). En el cálculo vectorial damos un paso más: estudiamos funciones que reciben un **punto** del plano o del espacio y devuelven **un vector**, es decir, una flecha con dirección y magnitud.

Para entender la idea, piensa en un mapa del viento en el pronóstico del tiempo. En cada punto del mapa (cada punto es un par de coordenadas $(x,y)$) el mapa dibuja una **flecha**: la dirección de la flecha indica hacia dónde sopla el viento en ese punto, y su largo indica la velocidad. Esa colección de flechas —una por punto— es un **campo vectorial**. Otros ejemplos de la vida real:

- El campo de velocidades del agua en un río: en cada punto, una flecha que dice hacia dónde y con qué rapidez se mueve el agua.
- El campo gravitatorio de la Tierra: en cada punto del espacio, una flecha que apunta hacia el centro de la Tierra y cuya longitud dice la fuerza con que atrae a una masa.
- El campo eléctrico de una carga: en cada punto, una flecha que apunta alejándose de la carga (si es positiva) y que se acorta al alejarse.
- El campo magnético de un imán, visible con limaduras de hierro: las limaduras se alinean siguiendo las flechas del campo.

Antes de seguir, recordemos qué es un vector. Un vector en el plano es un par ordenado de números: $\vec{v} = \langle a, b \rangle$. Los corchetes angulares $\langle\ \rangle$ son solo una forma de escribir el vector que evita confundirlo con el punto $(a,b)$; también se escribe $\vec{v} = a\,\hat{i} + b\,\hat{j}$, donde $\hat{i}$ y $\hat{j}$ son los **vectores unitarios** (de largo 1) que apuntan en la dirección de los ejes $x$ e $y$ respectivamente. El primer número, $a$, es la componente en $x$; el segundo, $b$, la componente en $y$. En el espacio usamos tres componentes: $\vec{v} = \langle a, b, c \rangle = a\,\hat{i} + b\,\hat{j} + c\,\hat{k}$. El **largo** o magnitud del vector se escribe $|\vec{v}|$ y se calcula con Pitágoras: $|\langle a,b \rangle| = \sqrt{a^2 + b^2}$.

Un **campo vectorial** es entonces una regla que a cada punto del plano le asigna un vector. En el plano se escribe

$$\vec{F}(x,y) = \langle P(x,y),\, Q(x,y) \rangle$$

y en el espacio

$$\vec{F}(x,y,z) = \langle P(x,y,z),\, Q(x,y,z),\, R(x,y,z) \rangle$$

Aquí, cada símbolo tiene un papel concreto:

- $\vec{F}$ es el campo. La flechita encima de la $F$ es la señal de que el resultado de $\vec{F}$ es un **vector**, no un número. Sin la flechita, $F$, normalmente se reserva para funciones escalares (que devuelven un número).
- $P$ y $Q$ (y $R$ en el espacio) son funciones ordinarias de dos (o tres) variables: son las **componentes** del campo. Por ejemplo, en $\vec{F}(x,y) = \langle -y, x \rangle$ las componentes son $P(x,y) = -y$ y $Q(x,y) = x$.
- La notación $\langle a, b \rangle$ significa: "el vector cuya primera componente es $a$ y cuya segunda componente es $b$".

Veamos dos campos clásicos del plano para fijar la idea. El campo $\vec{F}(x,y) = \langle x, y \rangle$ es el **campo radial**: en cada punto la flecha apunta directamente hacia afuera del origen, y su largo es la distancia al origen. Si pones el dedo en el punto $(2,0)$, el campo vale $\langle 2, 0 \rangle$: una flecha que apunta a la derecha, de largo 2. En el punto $(0,-3)$ vale $\langle 0, -3 \rangle$: flecha hacia abajo, de largo 3. Es exactamente el patrón que dibujarías si el origen fuera un manantial del que brota agua en todas direcciones.

El campo $\vec{F}(x,y) = \langle -y, x \rangle$ es el **campo de rotación**. En el punto $(1,0)$ vale $\langle 0, 1 \rangle$: una flecha que apunta hacia arriba. En $(0,1)$ vale $\langle -1, 0 \rangle$: flecha hacia la izquierda. En $(-1,0)$ vale $\langle 0,-1 \rangle$: hacia abajo. ¿Notas el patrón? Las flechas van girando alrededor del origen, siempre tangentes a los círculos centrados en él, como el agua de un remolino. Además, mientras más lejos del origen, más largas son las flechas.

Estos dos ejemplos anticipan las dos preguntas fundamentales del cálculo vectorial: dado un campo, ¿tiende a **emanar** de los puntos (como un manantial) o a **absorber** hacia ellos (como un desagüe)? ¿tiende a **girar** alrededor de los puntos (como un remolino) o no? La primera pregunta la responde la **divergencia** y la segunda el **rotacional**, que veremos en detalle más adelante.

Una observación importante: no confundas campo vectorial con función escalar. La temperatura de una habitación es un **campo escalar**: a cada punto le corresponde un número (los grados). El viento en esa misma habitación es un **campo vectorial**: a cada punto le corresponde una flecha. El cálculo vectorial estudia los segundos y cómo se relacionan con los primeros.

## Cómo leer la notación

El cálculo vectorial tiene fama de difícil, pero la mayor parte de la dificultad está en los símbolos. Vamos a leerlos uno por uno, con calma. Todos aparecerán una y otra vez.

**Producto punto.** El **producto punto** (o producto escalar) entre dos vectores $\vec{u} = \langle u_1, u_2 \rangle$ y $\vec{v} = \langle v_1, v_2 \rangle$ es un **número**, definido así:

$$\vec{u} \cdot \vec{v} = u_1 v_1 + u_2 v_2$$

Multiplicas componente con componente y sumas. Por ejemplo, $\langle 3, 4 \rangle \cdot \langle 2, 2 \rangle = 3\cdot 2 + 4\cdot 2 = 6 + 8 = 14$. ¿Qué significa geométricamente? Mide **cuánto se alinean** los dos vectores: si apuntan en la misma dirección, el producto punto es grande y positivo; si son perpendiculares, vale cero; si apuntan en direcciones opuestas, es negativo. La interpretación física más importante para nosotros es el **trabajo**: si una fuerza $\vec{F}$ empuja un objeto que se desplaza según el vector $\vec{d}$, el trabajo realizado es $\vec{F} \cdot \vec{d}$. Si empujas perpendicular al movimiento, no haces trabajo (el producto punto vale cero). En el espacio, la fórmula agrega la tercera componente: $\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2 + u_3v_3$.

**Producto cruz.** El **producto cruz** solo existe en el espacio (tres componentes). Se escribe $\vec{u} \times \vec{v}$ y su resultado es un **vector** perpendicular a ambos. Su magnitud es $|\vec{u} \times \vec{v}| = |\vec{u}|\,|\vec{v}|\,\text{sen}\,\theta$, donde $\theta$ es el ángulo entre ambos; esa magnitud es exactamente el área del paralelogramo que forman los dos vectores. La fórmula completa, si $\vec{u} = \langle u_1, u_2, u_3 \rangle$ y $\vec{v} = \langle v_1, v_2, v_3 \rangle$, es

$$\vec{u} \times \vec{v} = \langle u_2 v_3 - u_3 v_2,\; u_3 v_1 - u_1 v_3,\; u_1 v_2 - u_2 v_1 \rangle$$

Por ejemplo, $\hat{i} \times \hat{j} = \hat{k}$, $\hat{j} \times \hat{k} = \hat{i}$ y $\hat{k} \times \hat{i} = \hat{j}$. El sentido del vector resultante se decide con la **regla de la mano derecha**: si apuntas los dedos de la mano derecha en la dirección del primer vector y los cierras hacia el segundo, el pulgar indica la dirección del producto cruz. La usaremos para orientar superficies.

**Derivadas parciales y el gradiente.** Cuando una función depende de varias variables, la derivada respecto de una de ellas (tratando a las demás como si fueran constantes) se escribe con la "d redondeada": $\partial$. Por ejemplo, para $f(x,y) = x^2 y + y^3$, la parcial respecto de $x$ es $\dfrac{\partial f}{\partial x} = 2xy$ (la $y$ se trata como constante), y la respecto de $y$ es $\dfrac{\partial f}{\partial y} = x^2 + 3y^2$ (ahora la $x$ es la constante). A veces las escribimos compactamente como $f_x$ y $f_y$.

El **gradiente** de una función escalar $f$ es el vector formado por todas sus derivadas parciales:

$$\nabla f = \left\langle \frac{\partial f}{\partial x},\; \frac{\partial f}{\partial y} \right\rangle \quad \text{en el plano}, \qquad \nabla f = \left\langle \frac{\partial f}{\partial x},\; \frac{\partial f}{\partial y},\; \frac{\partial f}{\partial z} \right\rangle \quad \text{en el espacio}$$

El gradiente apunta en la dirección en que $f$ crece más rápido (piensa en una montaña: el gradiente de la altura es la flecha de máxima pendiente), y su longitud es la rapidez de ese crecimiento.

**El operador nabla.** El símbolo $\nabla$ se lee "nabla" (o "del") y representa un operador: una "receta de derivación" con forma de vector:

$$\nabla = \left\langle \frac{\partial}{\partial x},\; \frac{\partial}{\partial y} \right\rangle$$

No es un vector de números, sino de instrucciones: "deriva respecto de $x$", "deriva respecto de $y$". Con ese operador se construyen las tres operaciones estrella del curso:

- Aplicado a una función escalar, produce el gradiente: $\nabla f$ (un vector).
- Aplicado a un campo vectorial con **punto**, produce la divergencia: $\nabla \cdot \vec{F}$ (un número).
- Aplicado a un campo vectorial con **cruz**, produce el rotacional: $\nabla \times \vec{F}$ (un vector en el espacio, un número en el plano).

La intuición: "nabla" es como un vector de derivadas, y podemos usarlo como si fuera un vector común: multiplicarlo "punto" o "cruz" por un campo.

**Curvas parametrizadas.** Para recorrer una curva, describimos sus puntos con un parámetro $t$, que puedes pensar como el tiempo. Escribimos

$$\vec{r}(t) = \langle x(t),\, y(t) \rangle$$

que significa: en el instante $t$, estamos en el punto de coordenadas $(x(t), y(t))$. Por ejemplo, $\vec{r}(t) = \langle t, t^2 \rangle$ recorre la parábola $y = x^2$: en $t = 0$ estamos en $(0,0)$, en $t = 1$ en $(1,1)$, en $t = 2$ en $(2,4)$. La **derivada** $\vec{r}'(t) = \langle x'(t), y'(t) \rangle$ se calcula componente a componente y es el vector velocidad: apunta en la dirección del movimiento (tangente a la curva) y su largo es la rapidez. Para $\vec{r}(t) = \langle t, t^2 \rangle$, la velocidad es $\vec{r}'(t) = \langle 1, 2t \rangle$.

**Símbolos de integral.** Distintos contextos usan distintos símbolos de integral:

- $\int_C$: integral a lo largo de una curva $C$ (integral de línea).
- $\oint_C$: la misma, pero para una curva **cerrada** (empieza y termina en el mismo punto); se llama circulación cuando integra un campo.
- $\iint_D$: integral doble sobre una región plana $D$ (área o acumulación en el plano).
- $\iint_S$: integral sobre una superficie $S$ (flujo).
- $\iiint_V$: integral triple sobre un volumen $V$.

**Los "d" que acompañan.** En estas integrales aparecen piezas como $d\vec{r}$, $ds$, $dA$, $dV$ y $dS$, y conviene leerlas como "trocitos infinitamente pequeños":

- $d\vec{r} = \vec{r}'(t)\,dt$ es un **desplazamiento infinitesimal**: un trocito de curva, con dirección. Es el análogo vectorial del $dx$ de siempre.
- $ds = |\vec{r}'(t)|\,dt$ es un trocito de **longitud de arco**: lo mismo, pero sin dirección (solo el largo).
- $dA$ es un trocito de **área** en el plano; $dV$, un trocito de **volumen**; $dS$, un trocito de **área sobre una superficie**.

Con esto ya podemos leer expresiones completas. Por ejemplo,

$$\int_C \vec{F} \cdot d\vec{r}$$

se lee: "a lo largo de la curva $C$, suma los productos punto del campo $\vec{F}$ con cada trocito dirigido de la curva". Y

$$\iint_S \vec{F} \cdot \vec{n}\,dS$$

se lee: "sobre la superficie $S$, suma los productos punto del campo con el vector normal unitario $\vec{n}$ en cada trocito de superficie". Un último símbolo: $\vec{n}$ (o $\hat{n}$) es el **vector normal unitario**, es decir, la flecha de largo 1 perpendicular a la superficie, que indica hacia qué lado mira la superficie. En un disco horizontal que mira hacia arriba, $\vec{n} = \langle 0, 0, 1 \rangle$.

## Divergencia y rotacional

Dado un campo vectorial, las dos preguntas naturales son: ¿el campo "brota" de los puntos o "se hunde" en ellos? y ¿el campo "gira" alrededor de los puntos o no? La **divergencia** responde la primera; el **rotacional**, la segunda. Son las dos herramientas de diagnóstico de un campo.

**Divergencia.** En el plano, para $\vec{F} = \langle P, Q \rangle$, la divergencia es el número

$$\nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}$$

Es decir: derivada de la primera componente respecto de $x$, más derivada de la segunda componente respecto de $y$. En el espacio se agrega la tercera:

$$\nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$

**Qué mide.** La mejor analogía es un fluido. Imagina que $\vec{F}$ es el campo de velocidades de un gas o un líquido. Coloca una cajita transparente diminuta alrededor de un punto y mira cuánto fluido sale por sus paredes menos cuánto entra. Si sale más de lo que entra, en ese punto hay una **fuente** (un manantial que inyecta fluido): la divergencia es positiva. Si entra más de lo que sale, hay un **sumidero** (un desagüe): la divergencia es negativa. Si entra exactamente lo que sale, el fluido ni se crea ni se destruye ahí: la divergencia es cero. La divergencia mide, por unidad de volumen, cuánto campo se **genera** en el punto.

- $\nabla \cdot \vec{F} > 0$: fuente en ese punto.
- $\nabla \cdot \vec{F} < 0$: sumidero.
- $\nabla \cdot \vec{F} = 0$: ni fuente ni sumidero; el campo se llama **incompresible** (el fluido no se comprime ni se expande).

**Ejemplo.** Para $\vec{F}(x,y) = \langle x^2 y,\; y^2 x \rangle$, las componentes son $P = x^2y$ y $Q = y^2x$. Entonces $\dfrac{\partial P}{\partial x} = 2xy$ y $\dfrac{\partial Q}{\partial y} = 2xy$, y la divergencia es $2xy + 2xy = 4xy$. En el punto $(1,1)$ vale $4$: hay fuente. En el punto $(1,-1)$ vale $-4$: hay sumidero. El mismo campo se comporta distinto en distintos lugares: eso es lo valioso de la divergencia, que es una función de la posición, no un número fijo.

**Rotacional.** En el plano, el rotacional es el número

$$\nabla \times \vec{F} = \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}$$

Es decir: derivada de la segunda componente respecto de $x$, menos derivada de la primera respecto de $y$ (¡atención al orden!). En el espacio el rotacional es un **vector**:

$$\nabla \times \vec{F} = \left\langle \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z},\;\; \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x},\;\; \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right\rangle$$

Hay un truco para recordar la fórmula: es como calcular el "producto cruz" del operador $\nabla = \langle \partial_x, \partial_y, \partial_z \rangle$ con $\vec{F} = \langle P, Q, R \rangle$. Observa el patrón: cada componente tiene la forma "derivada de una componente respecto de una variable, menos derivada de otra componente respecto de la otra variable". Nota que, en el plano, la "versión en 2D" es simplemente la tercera componente de la fórmula espacial.

**Qué mide.** La analogía ahora es una **ruedita de paletas** (como un molinito de papel) colocada dentro del fluido. Si el fluido pasa a distintas velocidades por un lado y por el otro, la ruedita gira; si el fluido la empuja igual de ambos lados, no gira. El rotacional mide la **tendencia local a girar**: cuánto gira la ruedita en cada punto.

- $\nabla \times \vec{F} > 0$ (en el plano): giro en sentido antihorario (contrario a las agujas del reloj).
- $\nabla \times \vec{F} < 0$: giro horario.
- $\nabla \times \vec{F} = 0$ (o $\vec{0}$ en el espacio): el campo es **irrotacional**: no produce giro local.

**Ejemplo.** El campo de rotación $\vec{F} = \langle -y, x \rangle$ tiene $P = -y$, $Q = x$, así que $\dfrac{\partial Q}{\partial x} = 1$ y $\dfrac{\partial P}{\partial y} = -1$. Su rotacional es $1 - (-1) = 2$: positivo en todas partes, lo que confirma que una ruedita de paletas giraría antihorario en cualquier punto. En cambio, el campo radial $\vec{F} = \langle x, y \rangle$ tiene $P = x$, $Q = y$, con $\dfrac{\partial Q}{\partial x} = 0$ y $\dfrac{\partial P}{\partial y} = 0$: rotacional cero. Un manantial que brota en todas direcciones no hace girar a la ruedita; un remolino sí.

Un detalle para no confundirse: en el espacio, la divergencia es un número pero el rotacional es un vector. ¿Por qué vector? Porque en el espacio hay muchos ejes posibles de giro: el vector rotacional indica la dirección del **eje** alrededor del cual gira el fluido (por la regla de la mano derecha), y su longitud indica la intensidad del giro.

Los campos con divergencia cero aparecen en fluidos incompresibles (agua, en buena aproximación) y en el campo magnético (no hay "cargas magnéticas" que sean fuentes). Los campos con rotacional cero aparecen, como veremos, en la gravitación y la electrostática, y están ligados a la idea de **energía potencial**.

## Integrales de línea

Hasta ahora las integrales recorrían el eje $x$ (de $a$ a $b$) o una región plana. Una **integral de línea** recorre una **curva**: sumamos algo a lo largo de un camino. La motivación física es el trabajo.

**El problema del trabajo.** Una fuerza constante que desplaza un objeto en línea recta hace un trabajo $\vec{F} \cdot \vec{d}$ (producto punto, ya lo vimos). Pero en la realidad la fuerza suele **cambiar de punto a punto** (la gravedad de un planeta es distinta según la altura) y el camino suele ser **curvo**. La estrategia es la de siempre en cálculo: partimos el camino en trocitos tan pequeños que en cada uno la fuerza sea casi constante y el trozo casi recto; en cada trocito el trabajo es aproximadamente $\vec{F} \cdot \vec{r}'(t)\,dt$; sumamos todo y tomamos el límite. El resultado es la integral de línea:

$$\int_C \vec{F} \cdot d\vec{r} = \int_a^b \vec{F}\big(\vec{r}(t)\big) \cdot \vec{r}'(t)\,dt$$

**Cómo leer la fórmula, pieza por pieza.** Supongamos que la curva $C$ se recorre con la parametrización $\vec{r}(t)$ desde $t = a$ hasta $t = b$.

- $\vec{r}(t) = \langle x(t), y(t) \rangle$: la posición sobre la curva en el instante $t$.
- $\vec{F}(\vec{r}(t))$: el campo **evaluado en el punto de la curva**. Aquí está el paso más olvidado: hay que sustituir $x$ por $x(t)$ e $y$ por $y(t)$ en las componentes del campo.
- $\vec{r}'(t) = \langle x'(t), y'(t) \rangle$: el vector velocidad, tangente a la curva. La longitud de cada trocito es $|\vec{r}'(t)|\,dt$, y su dirección la da $\vec{r}'(t)$.
- El producto punto $\vec{F} \cdot \vec{r}'$: es la **componente del campo en la dirección del movimiento**, multiplicada por la rapidez. Solo la parte del campo que empuja **a lo largo del camino** hace trabajo; la parte perpendicular no contribuye. Eso es exactamente lo que selecciona el producto punto.
- El resultado es un número: el trabajo total realizado por el campo al mover una partícula por $C$.

Cuando la curva es **cerrada** (vuelve al punto de partida), la integral se escribe con un circulito, $\oint_C \vec{F} \cdot d\vec{r}$, y el resultado se llama **circulación** del campo alrededor de $C$: cuánto "empuja" el campo en promedio a lo largo del circuito.

**Ejemplo resuelto.** Calculemos el trabajo de $\vec{F} = \langle y, x \rangle$ a lo largo de la parábola $\vec{r}(t) = \langle t, t^2 \rangle$ desde $t = 0$ hasta $t = 1$ (es decir, de $(0,0)$ a $(1,1)$).

1. Velocidad: $\vec{r}'(t) = \langle 1, 2t \rangle$.
2. Campo sobre la curva: en el punto $(t, t^2)$ el campo vale $\vec{F}(t, t^2) = \langle t^2, t \rangle$ (sustituimos $x = t$, $y = t^2$).
3. Producto punto: $\langle t^2, t \rangle \cdot \langle 1, 2t \rangle = t^2 \cdot 1 + t \cdot 2t = t^2 + 2t^2 = 3t^2$.
4. Integral: $\int_0^1 3t^2\,dt = \left[ t^3 \right]_0^1 = 1$.

El trabajo es $1$ (en las unidades que sean). Probemos ahora el **mismo campo entre los mismos puntos** pero por el camino recto $\vec{r}(t) = \langle t, t \rangle$, $0 \le t \le 1$: la velocidad es $\langle 1, 1 \rangle$, el campo sobre el camino es $\langle t, t \rangle$, el producto punto da $t + t = 2t$, y la integral $\int_0^1 2t\,dt = 1$. ¡El mismo resultado! No es casualidad: este campo es conservativo, y el trabajo solo depende de los extremos. Lo veremos en la próxima sección.

**La integral de línea de un campo escalar.** Existe otra integral de línea, que no integra un campo vectorial sino una función ordinaria, y que usa la longitud de arco:

$$\int_C f\,ds = \int_a^b f\big(\vec{r}(t)\big)\,|\vec{r}'(t)|\,dt$$

Fíjate en las dos diferencias con la anterior: no hay producto punto, y aparece el **largo** de la velocidad, $|\vec{r}'(t)|$, no el vector. Sirve para sumar cantidades repartidas a lo largo de un hilo: si $f$ es la densidad de un alambre (masa por unidad de longitud), la integral da la **masa total del alambre**; si $f = 1$, da simplemente su **longitud**.

**La dirección importa.** Recorrer la curva al revés (de $t = b$ a $t = a$) cambia el signo de $\vec{r}'$ y por tanto el signo de la integral vectorial: $\int_{-C} \vec{F} \cdot d\vec{r} = -\int_C \vec{F} \cdot d\vec{r}$. Físicamente: bajar la montaña es lo contrario de subirla. En cambio, la integral escalar $\int_C f\,ds$ no cambia de signo, porque $|\vec{r}'|$ es positivo en cualquier dirección: la masa del alambre es la misma lo mires desde donde lo mires.

## Campos conservativos y función potencial

Algunos campos tienen una propiedad mágica: el trabajo entre dos puntos **no depende del camino**. En el ejemplo anterior, $\vec{F} = \langle y, x \rangle$ dio trabajo $1$ tanto por la parábola como por la recta. Estos campos se llaman **conservativos** y son los más importantes en física.

**Definición.** Un campo $\vec{F}$ es **conservativo** si existe una función escalar $f$ (la **función potencial**) tal que

$$\vec{F} = \nabla f$$

es decir, el campo es el gradiente de $f$. En componentes: $P = f_x$ y $Q = f_y$ (en el espacio, también $R = f_z$). La palabra "potencial" viene de la física: piensa en la **energía potencial**. La gravedad cerca de la superficie terrestre se describe con un potencial $f(x,y) = mgy$ (masa por gravedad por altura), y el campo gravitatorio es su gradiente $\nabla f = \langle 0, mg \rangle$: una fuerza constante hacia abajo. La energía eléctrica de un circuito también es un potencial: la palabra "voltaje" es sinónimo de diferencia de potencial.

**El teorema fundamental de las integrales de línea.** Si $\vec{F} = \nabla f$ y $C$ es una curva que va del punto $A = \vec{r}(a)$ al punto $B = \vec{r}(b)$, entonces

$$\int_C \vec{F} \cdot d\vec{r} = f(B) - f(A)$$

El trabajo es la **diferencia de potencial** entre los extremos, exactamente como la integral de una derivada es la diferencia de la antiderivada ($\int_a^b f'(x)\,dx = f(b) - f(a)$). Esta es la primera de una cadena de "teoremas fundamentales" que recorrerá todo el curso. Dos consecuencias inmediatas:

- El trabajo **no depende del camino**: cualquier curva entre $A$ y $B$ da lo mismo.
- Sobre una curva **cerrada**, el trabajo es cero: $\oint_C \vec{F} \cdot d\vec{r} = f(A) - f(A) = 0$. Subes y bajas la misma montaña: el balance neto es cero.

**¿Cómo saber si un campo es conservativo sin encontrar el potencial?** En un dominio **simplemente conexo** (en una sola pieza y **sin agujeros**), la respuesta es simple:

$$\vec{F}\ \text{conservativo} \iff \nabla \times \vec{F} = \vec{0}$$

En el plano el rotacional es $Q_x - P_y$, así que la condición es $Q_x = P_y$ (la derivada de la segunda componente respecto de $x$ igual a la de la primera respecto de $y$). La condición "sin agujeros" es esencial, y el ejemplo clásico lo demuestra: el campo

$$\vec{F}(x,y) = \left\langle \frac{-y}{x^2 + y^2},\; \frac{x}{x^2 + y^2} \right\rangle$$

tiene rotacional cero (puedes comprobarlo derivando: ambas parciales cruzadas coinciden), pero su circulación alrededor del círculo unitario es $2\pi$, no cero. ¿Qué pasó? El campo está definido en el plano **sin el origen** (allí el denominador se anula), y ese dominio tiene un agujero: el punto $(0,0)$. El campo da vueltas alrededor del agujero, como un remolino alrededor de un desagüe, y aunque localmente no "gira", globalmente sí lo hace. Moraleja: rotacional cero **más** dominio sin agujeros garantiza conservativo.

**Cómo encontrar el potencial, paso a paso.** Supongamos $\vec{F} = \langle 2x, 2y \rangle$ y busquemos $f$ con $\nabla f = \vec{F}$.

1. La primera componente nos da $f_x = 2x$. Integramos respecto de $x$ tratando a $y$ como constante: $f = x^2 + g(y)$. La "constante" de integración no puede ser una constante fija, sino una función $g(y)$, porque al derivar respecto de $x$ cualquier función que solo dependa de $y$ desaparece.
2. Ahora usamos la segunda componente: $f_y = 2y$. Derivamos nuestra $f$: $f_y = 0 + g'(y)$. Igualando: $g'(y) = 2y$, de donde $g(y) = y^2 + C$ (ahora sí, $C$ es una constante común y corriente).
3. El potencial es $f(x,y) = x^2 + y^2 + C$. La constante $C$ es irrelevante para los cálculos, porque al hacer $f(B) - f(A)$ se cancela; suele escribirse $C$ o simplemente omitirse.

**Ejemplo de uso.** Calculemos el trabajo de $\vec{F} = \langle 2x, 2y \rangle$ de $(0,0)$ a $(1,1)$ por cualquier camino. Con el potencial $f = x^2 + y^2$: trabajo $= f(1,1) - f(0,0) = (1 + 1) - (0 + 0) = 2$. Compara con el campo $\langle y, x \rangle$ de antes, que dio $1$: su potencial es $f = xy$, y en efecto $f(1,1) - f(0,0) = 1$.

**Analogía física para recordar.** Subir una montaña: el trabajo de la gravedad solo depende de la diferencia de altura entre el punto de partida y el de llegada, no de si subiste por el sendero recto o por el sinuoso. La altura es el potencial; la fuerza gravitatoria es su gradiente; la montaña, el campo conservativo. Un campo no conservativo sería como un tobogán de agua con remolinos: el trabajo sí dependería de la ruta.

## Teorema de Green

El teorema de Green es el eslabón que conecta las integrales de línea con las integrales dobles. Es, en el plano, el análogo del teorema fundamental del cálculo: relaciona lo que pasa en el **interior** de una región con lo que pasa en su **borde**.

**Enunciado.** Sea $C$ una curva cerrada, simple (no se corta a sí misma) y orientada **positivamente** (en sentido antihorario, de modo que al recorrerla la región queda a tu izquierda). Sea $D$ la región que encierra. Entonces:

$$\oint_C (P\,dx + Q\,dy) = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dA$$

**Qué significa la notación $P\,dx + Q\,dy$.** Es la forma clásica (que viene de la física) de escribir la integral de línea del campo $\vec{F} = \langle P, Q \rangle$: si la curva se parametriza con $\vec{r}(t) = \langle x(t), y(t) \rangle$, entonces $dx = x'(t)\,dt$ y $dy = y'(t)\,dt$, y la integral $\oint_C (P\,dx + Q\,dy)$ es exactamente $\oint_C \vec{F} \cdot d\vec{r} = \oint_C (P\,x' + Q\,y')\,dt$. Se lee: "integral de $P$ respecto de $x$ más $Q$ respecto de $y$ a lo largo de $C$".

**Qué dice el teorema, en palabras.** La circulación del campo alrededor del borde es igual a la **suma de los rotacionales de todo el interior**. El integrando $\dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y}$ es precisamente el rotacional del campo $\langle P, Q \rangle$ en el plano. Cada punto del interior contribuye con su tendencia local a girar, y el resultado neto es lo que se siente al dar toda la vuelta por el borde. Es la misma idea del teorema fundamental: la acumulación de los "cambios pequeños" en el interior iguala el "cambio total" en la frontera.

**Cuándo conviene usarlo.** Cuando la curva es complicada (una frontera rara) pero la región interior es simple (un disco, un rectángulo), cambiamos la integral de línea por una doble, casi siempre más fácil. O al revés: cuando la integral doble del rotacional es horrible, quizá el borde sea simple. Green es un **intercambiador de dificultad**.

**La fórmula del área.** Un uso ingenioso: elegimos $P = -\frac{1}{2}y$ y $Q = \frac{1}{2}x$. Entonces el rotacional es $\frac{1}{2} - \left(-\frac{1}{2}\right) = 1$, y el teorema dice

$$\oint_C \frac{1}{2}(x\,dy - y\,dx) = \iint_D 1\,dA = \text{área de } D$$

de donde sale la famosa fórmula del área encerrada por una curva:

$$A = \frac{1}{2}\oint_C (x\,dy - y\,dx)$$

**Ejemplo resuelto.** Calculemos $\oint_C (x\,dy - y\,dx)$ sobre el círculo unitario. Aquí $P = -y$ y $Q = x$, así que el rotacional es $\dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y} = 1 - (-1) = 2$. Por Green:

$$\oint_C (x\,dy - y\,dx) = \iint_D 2\,dA = 2 \cdot (\text{área del disco unitario}) = 2\pi$$

Nota que $2\pi$ es el **doble** del área $\pi$: por eso la fórmula del área lleva el factor $\frac{1}{2}$. Podríamos haber parametrizado el círculo con $\vec{r}(t) = \langle \cos t, \sin t \rangle$ y haber calculado la integral de línea directamente, pero Green lo resolvió sin parametrizar nada.

**Ejemplo con la elipse.** Hallemos el área de la elipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ con la fórmula del área. Parametrizamos con $\vec{r}(t) = \langle a\cos t, b\sin t \rangle$, $0 \le t \le 2\pi$ (comprueba que satisface la ecuación de la elipse dividiendo). Entonces $x\,dy - y\,dx = (a\cos t)(b\cos t)\,dt - (b\sin t)(-a\sin t)\,dt = ab(\cos^2 t + \sin^2 t)\,dt = ab\,dt$, y el área es

$$A = \frac{1}{2}\int_0^{2\pi} ab\,dt = \frac{1}{2}\cdot ab \cdot 2\pi = \pi ab$$

El área del círculo ($a = b = R$) es el caso particular $\pi R^2$.

## Integrales de superficie y flujo

Así como las integrales de línea acumulan sobre curvas, las **integrales de superficie** acumulan sobre superficies: sábanas curvas en el espacio, como una esfera, un cono o el techo de una carpa. La pregunta física que responden es el **flujo**: ¿cuánto campo atraviesa la superficie?

**Parametrizar una superficie.** Una superficie necesita **dos** parámetros (como la latitud y la longitud para ubicar un punto en la Tierra), que llamaremos $u$ y $v$. La superficie se describe con una función vectorial de dos variables:

$$\vec{r}(u,v) = \langle x(u,v),\, y(u,v),\, z(u,v) \rangle$$

Por ejemplo, un disco horizontal de radio $1$ a altura $z = 1$ se parametriza con $\vec{r}(u,v) = \langle u\cos v, u\sin v, 1 \rangle$ con $0 \le u \le 1$ y $0 \le v \le 2\pi$. Aquí $u$ es la distancia al centro y $v$ el ángulo.

**El vector normal.** Derivamos $\vec{r}$ respecto de cada parámetro (derivando componente a componente):

$$\vec{r}_u = \left\langle \frac{\partial x}{\partial u}, \frac{\partial y}{\partial u}, \frac{\partial z}{\partial u} \right\rangle, \qquad \vec{r}_v = \left\langle \frac{\partial x}{\partial v}, \frac{\partial y}{\partial v}, \frac{\partial z}{\partial v} \right\rangle$$

Geométricamente, $\vec{r}_u$ es el vector tangente a la superficie en la dirección en que crece $u$ (con $v$ fijo), y $\vec{r}_v$ lo mismo para $v$. Ambos son tangentes a la superficie, así que su **producto cruz** es perpendicular a los dos y por tanto **normal** a la superficie:

$$\vec{n} = \vec{r}_u \times \vec{r}_v$$

Además, la magnitud $|\vec{r}_u \times \vec{r}_v|$ es el área del paralelogramo infinitesimal que forman los dos vectores tangentes: es el **trocito de área** de la superficie, el $dS$. El vector **normal unitario** (de largo 1) se obtiene dividiendo: $\hat{n} = \vec{n}/|\vec{n}|$.

**Definición de flujo.** El flujo del campo $\vec{F}$ a través de la superficie $S$ es

$$\iint_S \vec{F} \cdot \vec{n}\,dS = \iint_D \vec{F}\big(\vec{r}(u,v)\big) \cdot \big(\vec{r}_u \times \vec{r}_v\big)\,du\,dv$$

donde $D$ es la región de los parámetros $(u,v)$. La lectura es directa: en cada trocito de superficie tomamos la **componente normal** del campo (el producto punto con $\vec{n}$ selecciona solo la parte del campo que atraviesa la superficie) y la sumamos. Un campo que corre **paralelo** a la superficie (como el viento que resbala sobre una pared) no la atraviesa: su flujo es cero, porque el producto punto con la normal es cero. Físicamente, si $\vec{F}$ es la velocidad de un fluido, el flujo es el **caudal**: la cantidad de fluido que cruza la superficie por unidad de tiempo. En electromagnetismo, el flujo del campo eléctrico es la base de la ley de Gauss.

**Orientación.** Toda superficie tiene dos lados, y el signo del flujo depende del lado que elijamos: $\vec{n}$ puede apuntar hacia un lado o hacia el otro (multiplicar $\vec{n}$ por $-1$ cambia el signo del flujo). Para superficies cerradas (como una esfera) la convención es usar la normal **exterior** (que apunta hacia afuera). Un flujo neto positivo significa que, en total, el campo sale de la región encerrada.

**Ejemplo resuelto 1.** Flujo de $\vec{F} = \langle 0, 0, z \rangle$ a través del disco $z = 1$, $x^2 + y^2 \le 1$, orientado hacia arriba. La normal unitaria hacia arriba es simplemente $\hat{n} = \langle 0, 0, 1 \rangle$ (el disco es horizontal). El producto punto es $\vec{F} \cdot \hat{n} = \langle 0, 0, z \rangle \cdot \langle 0, 0, 1 \rangle = z$, y sobre el disco $z = 1$, así que el integrando vale $1$ en toda la superficie. El flujo es $1 \times (\text{área del disco}) = \pi$. Ni siquiera hizo falta parametrizar: el campo es constante y normal en todo el disco.

**Ejemplo resuelto 2.** Flujo del campo radial $\vec{F} = \langle x, y, z \rangle$ a través de la esfera de radio $R$ centrada en el origen, con normal exterior. En un punto $\langle x, y, z \rangle$ de la esfera, la distancia al centro es $R$, y la normal exterior unitaria es $\hat{n} = \dfrac{1}{R}\langle x, y, z \rangle$ (el vector posición, normalizado). Entonces

$$\vec{F} \cdot \hat{n} = \langle x,y,z \rangle \cdot \frac{1}{R}\langle x,y,z \rangle = \frac{x^2 + y^2 + z^2}{R} = \frac{R^2}{R} = R$$

El integrando es constante, así que el flujo es $R$ por el área de la esfera:

$$\iint_S \vec{F} \cdot \hat{n}\,dS = R \cdot 4\pi R^2 = 4\pi R^3$$

En la sección de Gauss reencontraremos este resultado por otro camino, y el hecho de que ambos coincidan no será casualidad.

**Área de una superficie.** Si integramos $f = 1$ con la fórmula escalar, obtenemos el área de la superficie: $\text{Área}(S) = \iint_D |\vec{r}_u \times \vec{r}_v|\,du\,dv$. Es la versión en 3D de "longitud de arco con $f = 1$".

## Teoremas de Stokes y Gauss

Cierran el curso dos teoremas que generalizan a Green al espacio. Son el puente entre lo local (derivadas: rotacional y divergencia) y lo global (integrales sobre curvas, superficies y volúmenes). Los tres teoremas —Green, Stokes y Gauss— son, en el fondo, el mismo teorema fundamental del cálculo con distintos disfraces.

**Teorema de Stokes.** Sea $S$ una superficie orientada (con normal unitaria $\vec{n}$) cuyo borde es la curva cerrada $C$. La orientación de $C$ debe ser **compatible** con la de $S$ por la regla de la mano derecha: si el pulgar apunta según $\vec{n}$, los dedos cerrados indican el sentido en que se recorre $C$. Entonces:

$$\oint_C \vec{F} \cdot d\vec{r} = \iint_S (\nabla \times \vec{F}) \cdot \vec{n}\,dS$$

**Qué dice.** La **circulación** del campo alrededor del borde de la superficie es igual al **flujo del rotacional** a través de la superficie. Cada trocito de superficie contribuye con su giro local (rotacional), y la suma de todos los giros es exactamente el empuje neto que se siente al recorrer el borde. Es Green en el espacio: si $S$ es una región plana del plano $xy$ con normal $\langle 0,0,1 \rangle$, Stokes se reduce a Green. Una consecuencia muy usada: si el campo es irrotacional ($\nabla \times \vec{F} = \vec{0}$) en un dominio sin agujeros, la circulación es cero en cualquier curva cerrada, y el campo es conservativo —lo que ya sabíamos, pero ahora desde el punto de vista de Stokes—.

**Ejemplo resuelto.** Verifiquemos Stokes para $\vec{F} = \langle -y, x, 0 \rangle$ con $S$ el disco unitario del plano $xy$, orientado hacia arriba ($\vec{n} = \langle 0,0,1 \rangle$), y $C$ su borde: el círculo unitario recorrido antihorario.

- Lado del flujo: el rotacional es $\nabla \times \vec{F} = \langle 0 - 0,\, 0 - 0,\, 1 - (-1) \rangle = \langle 0, 0, 2 \rangle$. El producto punto con la normal es $2$, constante, así que $\iint_S (\nabla \times \vec{F}) \cdot \vec{n}\,dS = 2 \cdot (\text{área del disco}) = 2\pi$.
- Lado de la circulación: parametrizamos el borde con $\vec{r}(t) = \langle \cos t, \sin t, 0 \rangle$, $0 \le t \le 2\pi$. Entonces $\vec{r}'(t) = \langle -\sin t, \cos t, 0 \rangle$ y $\vec{F}(\vec{r}(t)) = \langle -\sin t, \cos t, 0 \rangle$. El producto punto da $\sin^2 t + \cos^2 t = 1$, y $\oint_C \vec{F} \cdot d\vec{r} = \int_0^{2\pi} 1\,dt = 2\pi$.

Ambos lados dan $2\pi$: el teorema se cumple.

**Teorema de Gauss (de la divergencia).** Sea $S$ una superficie **cerrada** que encierra el volumen $V$, con normal exterior $\vec{n}$. Entonces:

$$\iint_S \vec{F} \cdot \vec{n}\,dS = \iiint_V \nabla \cdot \vec{F}\,dV$$

**Qué dice.** El **flujo neto** del campo a través de la frontera es igual a la **integral de la divergencia en todo el interior**. Es la formulación matemática exacta de un principio de conservación: lo que sale por la frontera menos lo que entra es exactamente lo que se **genera** en el interior. Si la divergencia es cero (campo incompresible, sin fuentes ni sumideros), el flujo neto por cualquier superficie cerrada es cero: todo lo que entra por un lado sale por otro. Esta es la ley de Gauss del electromagnetismo: el flujo eléctrico a través de una superficie cerrada es proporcional a la carga encerrada.

**Ejemplo resuelto 1.** Flujo de $\vec{F} = \langle x^2, y^2, z^2 \rangle$ a través del cubo $[0,1]^3$ (el cubo de lado 1 con una esquina en el origen). Calcularlo cara por cara es largo (seis caras); con Gauss es inmediato. La divergencia es $\nabla \cdot \vec{F} = 2x + 2y + 2z = 2(x + y + z)$, y el flujo es

$$\iiint_V 2(x+y+z)\,dV = 2\left( \int_0^1\!\!\int_0^1\!\!\int_0^1 x\,dx\,dy\,dz + \int_0^1\!\!\int_0^1\!\!\int_0^1 y\,dx\,dy\,dz + \int_0^1\!\!\int_0^1\!\!\int_0^1 z\,dx\,dy\,dz \right)$$

Cada una de las tres integrales vale $\frac{1}{2}$ (por simetría: en un cubo de lado 1, el promedio de $x$, de $y$ y de $z$ es $\frac{1}{2}$), así que el flujo es $2 \cdot 3 \cdot \frac{1}{2} = 3$.

**Ejemplo resuelto 2.** Reencontremos el flujo del campo radial por la esfera, esta vez con Gauss. Para $\vec{F} = \langle x, y, z \rangle$, la divergencia es $1 + 1 + 1 = 3$, constante. Entonces el flujo por la esfera de radio $R$ es

$$\iint_S \vec{F} \cdot \vec{n}\,dS = \iiint_V 3\,dV = 3 \cdot \frac{4}{3}\pi R^3 = 4\pi R^3$$

exactamente el resultado que habíamos obtenido integrando directamente. La coincidencia de los dos caminos es la esencia del teorema.

**La familia de teoremas fundamentales.** Ya puedes ver el patrón general:

- Teorema fundamental del cálculo: $\int_a^b f'(x)\,dx = f(b) - f(a)$: la integral de la **derivada** en el interior es la **diferencia** en la frontera (los dos puntos extremos).
- Green: la integral del **rotacional** en una región es la **circulación** en su borde.
- Stokes: la integral del **rotacional** en una superficie es la **circulación** en su borde.
- Gauss: la integral de la **divergencia** en un volumen es el **flujo** en su borde.

Todos dicen lo mismo con distintas palabras: **la suma de los cambios infinitesimales del interior se manifiesta como el efecto neto en la frontera**. Si entiendes uno, entiendes los cuatro.

## Ejemplos resueltos

Aquí resolvemos seis casos típicos con todo el detalle, para que veas el método completo en cada tema.

**Ejemplo 1 (divergencia y rotacional).** Para $\vec{F}(x,y) = \langle x^2y,\; y^2x \rangle$, las componentes son $P = x^2y$ y $Q = y^2x$. Divergencia: $\nabla \cdot \vec{F} = P_x + Q_y = 2xy + 2xy = 4xy$. Rotacional (en el plano): $\nabla \times \vec{F} = Q_x - P_y = y^2 - x^2$. Interpretación: en $(1,0)$, la divergencia es $0$ y el rotacional $-1$ (giro horario); en $(1,1)$, divergencia $4$ (fuente) y rotacional $0$ (sin giro). Cada punto tiene su diagnóstico.

**Ejemplo 2 (trabajo de un campo constante).** Calculemos el trabajo de $\vec{F} = \langle 3, 4 \rangle$ desde $(0,0)$ hasta $(2,2)$ por la recta $\vec{r}(t) = \langle 2t, 2t \rangle$, $0 \le t \le 1$. La velocidad es $\vec{r}'(t) = \langle 2, 2 \rangle$, el campo es constante, y el producto punto es $\langle 3,4 \rangle \cdot \langle 2,2 \rangle = 6 + 8 = 14$. La integral es $\int_0^1 14\,dt = 14$. Para un campo constante y un camino recto, el trabajo es simplemente $\vec{F} \cdot \vec{d}$, con $\vec{d} = \langle 2,2 \rangle$ el desplazamiento total: $3\cdot 2 + 4\cdot 2 = 14$. Coincide.

**Ejemplo 3 (hallar el potencial).** Para $\vec{F} = \langle 2x, 2y \rangle$: de $f_x = 2x$ integramos y obtenemos $f = x^2 + g(y)$. De $f_y = g'(y) = 2y$ obtenemos $g(y) = y^2 + C$. Potencial: $f = x^2 + y^2$ (la constante se omite). El trabajo entre dos puntos cualesquiera es la diferencia de potencial: de $(0,0)$ a $(1,1)$ vale $f(1,1) - f(0,0) = 2 - 0 = 2$, por cualquier camino.

**Ejemplo 4 (Green).** Para $\oint_C (x\,dy - y\,dx)$ sobre el círculo unitario, tenemos $P = -y$, $Q = x$, y el rotacional $Q_x - P_y = 1 - (-1) = 2$. Por Green: $\oint_C (x\,dy - y\,dx) = \iint_D 2\,dA = 2 \cdot \pi \cdot 1^2 = 2\pi$. Además, como $2\pi = 2 \cdot \pi$, el resultado es el doble del área, tal como predice la fórmula $A = \frac{1}{2}\oint_C (x\,dy - y\,dx)$.

**Ejemplo 5 (flujo por un disco).** Flujo de $\vec{F} = \langle 0, 0, z \rangle$ a través del disco $z = 1$, $x^2 + y^2 \le 1$, orientado hacia arriba. Normal unitaria: $\vec{n} = \langle 0, 0, 1 \rangle$. Producto punto: $\vec{F} \cdot \vec{n} = \langle 0,0,z \rangle \cdot \langle 0,0,1 \rangle = z$. Sobre el disco, $z = 1$, así que el integrando es $1$ en toda la superficie y el flujo es $1 \cdot \pi = \pi$.

**Ejemplo 6 (Gauss, verificación doble).** Para $\vec{F} = \langle x, y, z \rangle$ y la esfera de radio $R$: divergencia $\nabla \cdot \vec{F} = 3$. Por Gauss, el flujo es $\iiint_V 3\,dV = 3 \cdot \frac{4}{3}\pi R^3 = 4\pi R^3$. Por integración directa (sección de flujo), habíamos obtenido el mismo valor $4\pi R^3$: el teorema queda verificado. Este ejemplo es la ley de Gauss electrostática en miniatura: el flujo solo depende de la "carga" total (aquí, de la divergencia integrada) y no de la forma de la superficie.

## Errores comunes

- **Confundir flujo con circulación.** El flujo atraviesa una **superficie** (usa producto punto con la normal); la circulación recorre una **curva** (usa producto punto con la tangente). Si te preguntan "¿cuánto campo sale de la esfera?", piensa flujo y Gauss; si te preguntan "¿cuánto empuja alrededor del circuito?", piensa circulación y Stokes o Green.
- **Aplicar Green a una curva abierta o mal orientada.** Green exige curva **cerrada**, simple, recorrida en sentido **antihorario**. Si la curva es abierta, no hay región que encerrar; si recorres al revés, el resultado cambia de signo. Antes de aplicar Green, dibuja la curva y verifica la orientación.
- **Deducir conservativo solo del rotacional cero.** Falta la hipótesis del dominio: debe ser **simplemente conexo** (sin agujeros). El campo $\langle -y, x \rangle/(x^2 + y^2)$ tiene rotacional cero pero circulación $2\pi$ alrededor del agujero en el origen. Si hay agujeros, el rotacional cero no basta.
- **Olvidar sustituir la parametrización en el campo.** En $\int_C \vec{F} \cdot d\vec{r}$ hay que evaluar $\vec{F}$ **en los puntos de la curva**: $\vec{F}(\vec{r}(t))$, es decir, reemplazar $x$ por $x(t)$ e $y$ por $y(t)$. Dejar el campo en variables "sueltas" e integrar es el error más frecuente de todos.
- **Confundir la integral vectorial con la escalar.** En $\int_C \vec{F} \cdot d\vec{r}$ va el **vector** velocidad $\vec{r}'(t)$ con producto punto; en $\int_C f\,ds$ va su **longitud** $|\vec{r}'(t)|$. La primera depende de la orientación (cambia de signo al invertir la curva); la segunda no.
- **Olvidar la normal o su orientación en el flujo.** El flujo usa la componente **normal**; si parametrizas con $\vec{r}(u,v)$, la normal es $\vec{r}_u \times \vec{r}_v$, y si pides la normal unitaria debes dividir por su magnitud. En superficies cerradas usa la normal exterior; el signo de la respuesta depende de ello.
- **Mezclar los signos entre la normal y la curva.** En Stokes, la orientación de la curva y la de la normal deben ser compatibles por la **regla de la mano derecha**. Cambiar una sin la otra introduce un signo menos.
- **Tratar el rotacional en el espacio como un número.** En 3D el rotacional es un **vector** (eje y magnitud del giro); solo en el plano es un número. Al verificar Stokes en el espacio, el flujo del rotacional usa el producto punto con la normal.
- **Olvidar que divergencia y rotacional son funciones.** No son constantes: son nuevas funciones de la posición. Pedir "la divergencia de $\vec{F}$ en el punto $P$" significa evaluar la función divergencia en $P$, como en el ejemplo $\nabla \cdot \langle x^2y, y^2x \rangle = 4xy$, que en $(1,-1)$ vale $-4$.

## Ejercicios propuestos (con respuestas)

1. Halla divergencia y rotacional de $\vec{F} = \langle xy,\, yz,\, 0 \rangle$ (en el espacio).
2. Calcula el trabajo de $\vec{F} = \langle y, x \rangle$ de $(0,0)$ a $(1,1)$ a lo largo de la parábola $y = x^2$.
3. ¿Es conservativo $\vec{F} = \langle 2xy,\, x^2 \rangle$? Si lo es, halla su potencial.
4. Aplica el teorema de Green para calcular $\oint_C x\,dy$ sobre el cuadrado unitario $[0,1] \times [0,1]$, recorrido antihorario.
5. Halla el flujo de $\vec{F} = \langle x, y, z \rangle$ a través de la superficie del cubo $[0,1]^3$ usando Gauss.
6. Verifica Stokes para $\vec{F} = \langle -y, x, 0 \rangle$ sobre el disco unitario del plano $xy$.
7. Calcula el trabajo de $\vec{F} = \langle e^x, 1 \rangle$ de $(0,0)$ a $(1,1)$ a lo largo de la recta $y = x$.
8. Calcula la divergencia de $\vec{F} = \langle x^3, y^3, z^3 \rangle$ en el origen.

**Respuestas.**

1. Divergencia: $y + z + 0 = y + z$. Rotacional: $\langle R_y - Q_z,\; P_z - R_x,\; Q_x - P_y \rangle = \langle 0 - y,\; 0 - 0,\; 0 - x \rangle = \langle -y,\, 0,\, -x \rangle$.
2. Con $\vec{r}(t) = \langle t, t^2 \rangle$: $\int_0^1 (t^2 + t \cdot 2t)\,dt = \int_0^1 3t^2\,dt = 1$. (Es el ejemplo de la sección de integrales de línea.)
3. Sí. Condición: $Q_x = 2x = P_y$, y el dominio es todo el plano (simplemente conexo). Potencial: de $f_x = 2xy$ sale $f = x^2y + g(y)$; de $f_y = x^2 + g'(y) = x^2$ sale $g$ constante; luego $f = x^2y$.
4. $P = 0$, $Q = x$; el rotacional es $Q_x - P_y = 1 - 0 = 1$. Por Green: $\oint_C x\,dy = \iint_D 1\,dA = 1$ (el área del cuadrado unitario).
5. $\nabla \cdot \vec{F} = 1 + 1 + 1 = 3$; el flujo es $\iiint_V 3\,dV = 3 \cdot 1 = 3$ (volumen del cubo: 1).
6. Rotacional: $\langle 0, 0, 2 \rangle$; flujo por el disco: $2 \cdot \pi = 2\pi$. Circulación por el borde $\vec{r}(t) = \langle \cos t, \sin t, 0 \rangle$: $\int_0^{2\pi} 1\,dt = 2\pi$. Ambos lados coinciden.
7. Potencial: $f = e^x + y$; el trabajo es $f(1,1) - f(0,0) = (e + 1) - (1 + 0) = e$. (Directo: $\int_0^1 (e^t + 1)\,dt = (e - 1) + 1 = e$.)
8. $\nabla \cdot \vec{F} = 3x^2 + 3y^2 + 3z^2$; en el origen $(0,0,0)$ vale $0$.

## Resumen

- Un **campo vectorial** asigna una flecha a cada punto: $\vec{F}(x,y) = \langle P, Q \rangle$ en el plano, $\langle P, Q, R \rangle$ en el espacio. Modela velocidades de fluidos, fuerzas gravitatorias, campos eléctricos y magnéticos.
- La **divergencia** $\nabla \cdot \vec{F} = P_x + Q_y$ (más $R_z$ en el espacio) mide fuentes y sumideros: positiva donde el campo emana, negativa donde se absorbe, cero si es incompresible.
- El **rotacional** mide la tendencia local a girar: $Q_x - P_y$ en el plano (un número), un vector en el espacio. Cero significa irrotacional.
- La **integral de línea** $\int_C \vec{F} \cdot d\vec{r} = \int_a^b \vec{F}(\vec{r}(t)) \cdot \vec{r}'(t)\,dt$ acumula la componente tangencial del campo a lo largo de una curva: es el trabajo. La versión escalar $\int_C f\,ds$ usa la longitud de arco.
- Un campo es **conservativo** si $\vec{F} = \nabla f$ para un potencial $f$; entonces el trabajo es $f(B) - f(A)$: no depende del camino y es cero en curvas cerradas. Rotacional cero en un dominio simplemente conexo garantiza conservativo.
- El **teorema de Green** cambia una integral de línea cerrada por una doble sobre la región encerrada; de él sale la fórmula del área $A = \frac{1}{2}\oint_C (x\,dy - y\,dx)$.
- El **flujo** $\iint_S \vec{F} \cdot \vec{n}\,dS$ mide cuánto campo atraviesa una superficie; la normal viene de $\vec{r}_u \times \vec{r}_v$.
- **Stokes** conecta la circulación en el borde de una superficie con el flujo de su rotacional; **Gauss** conecta el flujo por una superficie cerrada con la integral de la divergencia en el volumen encerrado. Ambos generalizan a Green.
- Green, Stokes y Gauss son versiones del teorema fundamental del cálculo: lo que se acumula en el interior se manifiesta en la frontera.
- El dominio importa: un rotacional cero no garantiza potencial si la región tiene agujeros.
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

Hasta ahora, en los cursos de cálculo trabajaste con funciones de una sola variable: una regla como $f(x) = x^2$ recibe un número $x$ y devuelve otro número $f(x)$. Su derivada, $f'(x)$, mide cuánto cambia la salida cuando la entrada cambia un poco. Esa maquinaria describe fenómenos que dependen de **una sola cantidad**: la posición depende del tiempo, el costo depende del número de unidades.

Pero la mayoría de los fenómenos físicos dependen de **varias cantidades a la vez**. Piensa en una barra de metal que se calienta por un extremo: la temperatura no es la misma en todos los puntos de la barra, y además cambia con el paso del tiempo. Si $x$ mide la posición a lo largo de la barra y $t$ mide el tiempo, la temperatura es una función de **dos variables**, y se escribe $u(x,t)$. La escritura $u(x,t)$ se lee "u de equis, te" y significa: el valor de la magnitud $u$ en la posición $x$ y en el instante $t$. Entran dos datos y sale un número.

Cuando una función depende de dos o más variables, ya no alcanza con una sola derivada. Necesitamos saber cómo cambia $u$ cuando movemos $x$ (dejando $t$ quieto) y cómo cambia cuando movemos $t$ (dejando $x$ quieto). Cada una de esas derivadas "parciales" se escribe con una letra $d$ redondeada, llamada **d** redonda o símbolo de derivada parcial:

$$\frac{\partial u}{\partial x}, \qquad \frac{\partial u}{\partial t}$$

El símbolo $\partial$ (se pronuncia "d redonda" o "parcial") indica que derivamos **respecto de una variable tratando a las demás como si fueran números fijos**. Por ejemplo, si $u(x,t) = x^2 + t^3$, entonces $\dfrac{\partial u}{\partial x} = 2x$ (la $t^3$ se trata como constante y su derivada es cero) y $\dfrac{\partial u}{\partial t} = 3t^2$ (ahora la $x^2$ es la constante).

Una **ecuación en derivadas parciales**, abreviada **EDP**, es una ecuación en la que la incógnita es una función de varias variables y en la que aparecen sus derivadas parciales. No buscamos un número, como en $3x + 5 = 11$, sino una **función completa**. La ecuación más famosa de todas, la **ecuación del calor** en una dimensión, es

$$\frac{\partial u}{\partial t} = k\,\frac{\partial^2 u}{\partial x^2}$$

donde $u(x,t)$ es la temperatura, $t$ es el tiempo, $x$ la posición y $k$ es una constante positiva del material (la **difusividad térmica**: qué tan rápido conduce el calor ese material). En palabras, la ecuación dice: "la rapidez con que sube o baja la temperatura en un punto es proporcional a cuánto se curva el perfil de temperaturas alrededor de ese punto". Si el punto está más caliente que sus vecinos, se enfría; si está más frío, se calienta.

¿Por qué aparecen estas ecuaciones en todas partes? Porque casi todos los fenómenos que involucran **espacio y tiempo** (o dos coordenadas espaciales) se describen relacionando cambios parciales: el calor que fluye por una barra, las ondas en una cuerda o en el aire, el potencial eléctrico en una región, la difusión de una sustancia en un líquido, la deformación de una membrana. Las EDP son el idioma matemático de la física continua.

**La diferencia clave con las EDO.** Una ecuación diferencial ordinaria (EDO) como $y'(t) = -2y(t)$ tiene una sola variable independiente (el tiempo) y su solución general incluye constantes arbitrarias que se fijan con valores iniciales, como $y(0) = 5$. Una EDP tiene **dos o más variables independientes** y, en consecuencia, las condiciones que fijan su solución son mucho más ricas:

- Las **condiciones iniciales** describen el estado del sistema en el instante inicial, por ejemplo $u(x,0) = f(x)$: "en el momento $t = 0$, la temperatura en cada punto $x$ viene dada por la función $f(x)$".
- Las **condiciones de frontera** (también llamadas condiciones de contorno o de borde) describen qué ocurre en los extremos del dominio espacial en **todo** instante, por ejemplo $u(0,t) = 0$: "el extremo izquierdo se mantiene a temperatura cero en todo momento".

Resolver una EDP significa encontrar la función $u$ que cumple la ecuación y además satisface todas las condiciones dadas. A lo largo de esta guía verás que cada tipo de EDP tiene su propio "temperamento", y que hay métodos clásicos (separación de variables, series de Fourier, diferencias finitas) para domarlas.

## Cómo leer la notación

Antes de resolver nada, hay que aprender a leer las fórmulas. Una EDP escrita en el pizarrón parece un bosque de símbolos; cada uno tiene un papel fijo. Vamos símbolo por símbolo.

**La función incógnita: $u(x,t)$.** La letra $u$ es el nombre de la función incógnita (podría ser $T$ de temperatura, $P$ de presión, $V$ de voltaje; se elige $u$ por convención). Las letras dentro del paréntesis son sus **variables independientes**: en este curso serán casi siempre $x$ (posición) y $t$ (tiempo), o $x$ e $y$ (dos coordenadas espaciales). Escribir $u(x,t)$ no es multiplicar: es "el valor de $u$ en el punto $x$ al tiempo $t$". Si $u$ es la temperatura, $u(3, 10)$ es la temperatura en el punto $x = 3$ a los $t = 10$ segundos.

**La derivada parcial respecto de una variable: $\dfrac{\partial u}{\partial t}$.** Se lee "derivada parcial de u respecto de te" y es la razón de cambio de $u$ cuando **solo** $t$ se mueve y todo lo demás permanece fijo. Es el análogo exacto de la derivada ordinaria, pero con una regla adicional: al derivar respecto de $t$, las demás letras se congelan. Para $u(x,t) = x^2t + \text{sen}\,t$ se tiene $\dfrac{\partial u}{\partial t} = x^2 + \cos t$, porque $x^2$ se comporta como una constante. La forma compacta de escribirla es $u_t$: el subíndice indica la variable respecto de la cual se deriva. Así, $u_x$ significa $\dfrac{\partial u}{\partial x}$ y $u_t$ significa $\dfrac{\partial u}{\partial t}$.

**La derivada parcial segunda: $\dfrac{\partial^2 u}{\partial x^2}$.** Es la derivada parcial de la derivada parcial: primero derivamos $u$ respecto de $x$ y al resultado lo volvemos a derivar respecto de $x$. Se escribe en compacto $u_{xx}$. Mide la **curvatura** del perfil de $u$ en la dirección $x$: si $u_{xx} > 0$ la gráfica se abre hacia arriba (como una taza) y si $u_{xx} < 0$ se abre hacia abajo (como una montaña). No confundas $u_{xx}$ con $(u_x)^2$: la primera es la segunda derivada; la segunda, el cuadrado de la primera derivada. Son objetos completamente distintos. También existe la **derivada mixta** $u_{xy}$: derivar primero respecto de $x$ y luego respecto de $y$ (en casi todas las funciones de interés, $u_{xy} = u_{yx}$, no importa el orden).

**El laplaciano: $\Delta u$ o $\nabla^2 u$.** La letra griega mayúscula delta, $\Delta$, se lee "delta" y en este contexto significa **laplaciano**: la suma de las segundas derivadas en todas las direcciones espaciales. En dos dimensiones,

$$\Delta u = \nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = u_{xx} + u_{yy}$$

El símbolo $\nabla$ (se lee "nabla") es el operador gradiente, un vector formado por todas las derivadas parciales primeras; $\nabla^2 = \nabla \cdot \nabla$ es una forma compacta de recordar que se suman las segundas derivadas. El laplaciano es el personaje central de las EDP de equilibrio: mide cuánto se aparta el valor de $u$ en un punto del promedio de sus vecinos. Un punto con laplaciano cero está "en paz" con su entorno; un punto con laplaciano positivo es un valle rodeado de valores mayores.

**Las condiciones como igualdades, no como productos.** La escritura $u(0,t) = 0$ **no** significa "u por cero por te igual a cero". Significa: "cuando $x = 0$, la función vale $0$, para todo tiempo $t$". Es una restricción sobre los valores de la función en el borde izquierdo. Del mismo modo, $u(x,0) = f(x)$ dice: "cuando $t = 0$, la función coincide con la función dada $f$". En general, una **condición de frontera** es una regla que la solución debe cumplir en el borde del dominio espacial (en $x = 0$ y en $x = L$, si la región va de $0$ a $L$), y una **condición inicial** es la regla que debe cumplir en el borde temporal $t = 0$. La distinción importa mucho: mezclarlas es uno de los errores clásicos.

**Las constantes físicas: $k$ y $c$.** En la ecuación del calor aparece $k$, un número positivo fijo (difusividad). En la ecuación de onda aparece $c$, la velocidad de propagación de la onda. Son datos del problema, no incógnitas. Saber leerlas en contexto evita confusiones: la misma letra $c$ que en otra guía era una constante de integración aquí es la velocidad del sonido en el medio.

**Las funciones arbitrarias: $F$ y $G$.** En la solución de la onda aparece $F(x - ct)$, donde $F$ es una **función cualquiera**, no una fórmula fija. $F(x - ct)$ se lee "F de equis menos ce te": a $F$ se le aplica al número $x - ct$. Si $F(z) = z^2$, entonces $F(x - ct) = (x - ct)^2$. La idea es que cualquier perfil $F$, desplazado hacia la derecha con velocidad $c$, es una onda que viaja. Veremos esto con detalle en la sección de la ecuación de onda.

**Resumen de lectura.** $u_t = k\,u_{xx}$ se lee en voz alta: "la derivada parcial de u respecto del tiempo es k veces la segunda derivada parcial de u respecto de x". Cuando puedas traducir cada ecuación a esa frase, la mitad del trabajo de entender una EDP ya está hecho. La otra mitad es saber qué significa geométrica o físicamente cada término, y eso es lo que cubren las próximas secciones.

## Clasificación de las EDP de segundo orden

Las EDP más importantes de la física son de **segundo orden**: la derivada más alta que aparece es una segunda derivada. Su forma general (lineal, en dos variables) es

$$A\,u_{xx} + B\,u_{xy} + C\,u_{yy} + D\,u_x + E\,u_y + F\,u = G$$

donde $A, B, C, D, E, F, G$ son funciones conocidas de $(x, y)$ (o constantes). No hay que memorizarla entera: lo esencial es que los tres términos con segundas derivadas — los que tienen coeficientes $A$, $B$ y $C$ — deciden el carácter de la ecuación. El número

$$\Delta = B^2 - 4AC$$

se llama **discriminante** y separa a las EDP en tres familias, con comportamientos radicalmente distintos.

**Elíptica ($\Delta < 0$).** Cuando $B^2 - 4AC$ es negativo, la ecuación es **elíptica**. El nombre viene de la geometría: la ecuación de una elipse, $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$, tiene dos términos cuadráticos con el mismo signo. Una EDP elíptica describe **equilibrio**: estados estacionarios que no dependen del tiempo, como la temperatura final de una placa, el potencial eléctrico de cargas en reposo o la forma de una membrana en reposo. Sus soluciones son suaves y "armoniosas": no hay propagación, no hay evolución, solo una fotografía final del sistema. El prototipo es la ecuación de Laplace, $u_{xx} + u_{yy} = 0$, donde $A = 1$, $B = 0$, $C = 1$ y $\Delta = 0^2 - 4\cdot 1 \cdot 1 = -4 < 0$.

**Parabólica ($\Delta = 0$).** Si el discriminante es cero, la ecuación es **parabólica**. El nombre evoca la parábola $y = x^2$: una dirección es cuadrática y la otra lineal. Las EDP parabólicas describen **difusión y evolución en una sola dirección del tiempo**: el calor que se reparte, la tinta que se diluye, el precio que se suaviza en los modelos financieros. Su firma es la ecuación del calor, $u_t = k\,u_{xx}$; reescrita como $k\,u_{xx} - u_t = 0$, los coeficientes de las segundas derivadas son $A = k$, $B = 0$, $C = 0$ (no hay $u_{tt}$ ni $u_{yy}$), así que $\Delta = 0$. El tiempo fluye hacia adelante y el pasado no se recupera: la ecuación es **irreversible**.

**Hiperbólica ($\Delta > 0$).** Si el discriminante es positivo, la ecuación es **hiperbólica**. El nombre viene de la hipérbola $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$, con términos cuadráticos de signos opuestos. Las EDP hiperbólicas describen **propagación de ondas**: una perturbación viaja a velocidad finita sin deformarse, como el sonido, la luz o una onda en una cuerda. El prototipo es la ecuación de onda, $u_{tt} = c^2 u_{xx}$, con $A = -c^2$... espera, mejor lo reescribimos: $u_{tt} - c^2 u_{xx} = 0$, con $A = -c^2$, $B = 0$, $C = 1$, y $\Delta = 0 - 4(-c^2)(1) = 4c^2 > 0$. El signo negativo entre las segundas derivadas es la huella digital de la onda.

**Una regla práctica de lectura.** Mira la ecuación e identifica sus dos segundas derivadas principales: si ambas van **con el mismo signo** (sumándose), es elíptica (equilibrio); si falta una de ellas y hay una primera derivada temporal, es parabólica (difusión); si van **con signos opuestos**, es hiperbólica (ondas).

**¿Por qué importa la clasificación?** Porque no es una etiqueta decorativa: cada familia tiene propiedades matemáticas distintas y exige métodos distintos. Las elípticas se resuelven con condiciones de frontera en todo el borde y producen soluciones suaves en todo el interior; las parabólicas necesitan una condición inicial y producen soluciones que se alisan con el tiempo; las hiperbólicas necesitan dos condiciones iniciales (posición y velocidad iniciales) y transportan información a velocidad finita. Confundir el tipo de ecuación es como aplicar las reglas del fútbol a un partido de tenis: nada funciona.

Un último ejemplo de clasificación con números. Para $u_{xx} + 4u_{xy} + 4u_{yy} = 0$: $A = 1$, $B = 4$, $C = 4$, y $\Delta = 4^2 - 4\cdot 1 \cdot 4 = 16 - 16 = 0$: parabólica. Para $u_{xx} - 3u_{xy} + 2u_{yy} = 0$: $\Delta = 9 - 4\cdot 1 \cdot 2 = 1 > 0$: hiperbólica. Para $u_{xx} + 2u_{xy} + 3u_{yy} = 0$: $\Delta = 4 - 12 = -8 < 0$: elíptica.

## Ecuación de Laplace y de Poisson

**La ecuación de Laplace** es la EDP más simple y una de las más profundas:

$$\Delta u = 0, \qquad \text{es decir,} \qquad \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$$

¿Qué dice? Que en cada punto, la suma de las curvaturas en las dos direcciones es cero: si la gráfica se curva hacia arriba en la dirección $x$, debe curvarse hacia abajo en la dirección $y$ para compensar. En lenguaje físico: **estado de equilibrio sin fuentes**. Es la temperatura final de una placa calentada en los bordes, el potencial eléctrico en una región sin cargas, la altura de una membrana tensa y en reposo.

Las soluciones de la ecuación de Laplace se llaman **funciones armónicas**, y tienen propiedades sorprendentes:

- **Propiedad del valor medio:** el valor de $u$ en cualquier punto es exactamente el promedio de sus valores sobre cualquier círculo centrado en ese punto. Por eso las superficies armónicas parecen "autoniveladas".
- **Principio del máximo:** una función armónica no puede tener máximos ni mínimos en el interior del dominio; sus valores extremos se alcanzan siempre **en la frontera**. Si los bordes de la placa están a temperaturas entre $0°$ y $100°$, ninguna temperatura interior puede salirse de ese rango.
- **Determinación por la frontera:** basta conocer los valores en todo el borde para que la solución interior quede completamente determinada (y única). Toda la información entra por la frontera.

**La ecuación de Poisson** agrega una fuente:

$$\Delta u = f, \qquad \text{es decir,} \qquad u_{xx} + u_{yy} = f(x,y)$$

Aquí $f(x,y)$ es una función conocida que representa la **densidad de fuentes**: cargas eléctricas (en electrostática, $f$ es la densidad de carga), fuentes de calor internas, o masa en un problema gravitatorio. Cuando $f = 0$ se recupera Laplace: Poisson es Laplace "con enchufes".

**Cómo se fijan las condiciones de frontera.** Hay dos formas clásicas:

- **Condición de Dirichlet:** se fija el **valor** de $u$ en el borde. Ejemplo: $u(0,y) = 0$, $u(L,y) = 100$ (los lados de la placa están a esas temperaturas).
- **Condición de Neumann:** se fija la **derivada normal** $\dfrac{\partial u}{\partial n}$ en el borde, es decir, cuánto varía $u$ al salir de la región perpendicularmente al borde. Ejemplo: $\dfrac{\partial u}{\partial n} = 0$ en el borde significa "borde aislado": ningún flujo atraviesa la frontera.

La primera describe bordes a temperatura (o voltaje) conocida; la segunda, bordes con flujo conocido. El símbolo $n$ (ene) denota la dirección normal (perpendicular) al borde, apuntando hacia afuera.

**Un ejemplo mínimo pero completo.** En una dimensión, la ecuación de Laplace es simplemente $u_{xx} = 0$, cuyas soluciones son las rectas $u(x) = ax + b$ (integrando dos veces). Si pedimos $u(0) = 0$ y $u(L) = 100$, obtenemos $b = 0$ y $aL = 100$, es decir, $u(x) = \dfrac{100}{L}x$: el perfil de temperatura de equilibrio de una barra con extremos a $0°$ y $100°$ es una línea recta. Este es el caso más importante de una idea general: **en ausencia de fuentes, el equilibrio reparte las cosas de manera lineal** entre los valores de la frontera.

**Verificación práctica.** Para saber si una función es armónica se calculan las dos segundas derivadas y se suman. Para $u = x^2 - y^2$: $u_{xx} = 2$ y $u_{yy} = -2$, y la suma es $0$: es armónica. Para $u = x^2 + y^2$: $u_{xx} = 2$ y $u_{yy} = 2$, la suma es $4$: **no** es armónica (satisface una Poisson con $f = 4$).

## Ecuación del calor

La ecuación del calor en una dimensión es

$$\frac{\partial u}{\partial t} = k\,\frac{\partial^2 u}{\partial x^2}, \qquad k > 0$$

donde $u(x,t)$ es la temperatura (o la concentración, o la cantidad que se difunde) y $k$ es la constante de difusión del material. **Leamos cada lado por separado.**

- El lado izquierdo, $u_t = \dfrac{\partial u}{\partial t}$, es la rapidez con que cambia la temperatura en un punto fijo $x$: positiva si se calienta, negativa si se enfría.
- El lado derecho, $k\,u_{xx}$, mira la **curvatura espacial** del perfil de temperaturas. En un valle del perfil (el punto está más frío que sus vecinos), $u_{xx} > 0$ y por tanto $u_t > 0$: el punto se calienta. En una cima (más caliente que los vecinos), $u_{xx} < 0$ y el punto se enfría. La ecuación dice: **el calor fluye de donde sobra hacia donde falta, y la velocidad del flujo es proporcional a la curvatura**.

**El suavizado.** La propiedad más famosa del calor: por irregular que sea la condición inicial $f(x)$ (aunque tenga picos, esquinas o saltos), para cualquier $t > 0$ la solución es **infinitamente suave** (derivable todas las veces que quieras). El calor borra los detalles finos: las irregularidades de alta frecuencia mueren primero. Es como mirar una fotografía que se va desenfocando: las texturas finas desaparecen, quedan las formas gruesas.

**Principio del máximo.** La temperatura máxima de todo el proceso se alcanza **o bien en el instante inicial o bien en la frontera**; nunca aparece espontáneamente un nuevo máximo en el interior. Si los extremos de la barra están a $0°$ y la barra comienza a $100°$, ninguna parte de la barra superará jamás los $100°$.

**Irreversibilidad.** La ecuación del calor tiene una flecha del tiempo. La ecuación con $t$ cambiado por $-t$ (el "calor hacia atrás") no es la misma ecuación y sus soluciones se vuelven inestables: los detalles reaparecen de la nada. El calor disipa; no se concentra solo.

**Las condiciones típicas.** Para una barra de longitud $L$ se piden:

- Condición inicial: $u(x, 0) = f(x)$, el perfil de temperatura en el momento inicial.
- Condiciones de frontera. Las dos más comunes son Dirichlet, $u(0,t) = u(L,t) = 0$ (los extremos se mantienen a temperatura cero, conectados a un baño frío), y Neumann, $u_x(0,t) = u_x(L,t) = 0$ (extremos aislados: el flujo de calor a través del borde es nulo).

**Comportamiento a largo plazo.** Con extremos mantenidos a cero, toda la barra termina a temperatura cero: $u(x,t) \to 0$ cuando $t \to \infty$. Con extremos aislados, la temperatura se uniformiza al **promedio** de la condición inicial (la energía se conserva pero se reparte). Con extremos a temperaturas distintas, la solución tiende al perfil lineal que vimos en la sección de Laplace: el estado estacionario del calor resuelve $u_{xx} = 0$.

**Un ejemplo que se verifica a mano.** La función $u(x,t) = e^{-t}\text{sen}\,x$ satisface $u_t = u_{xx}$ (caso $k = 1$): el lado izquierdo es $-e^{-t}\text{sen}\,x$, y el derecho, derivando dos veces el seno, también es $-e^{-t}\text{sen}\,x$. La temperatura decae multiplicada por $e^{-t}$ manteniendo la forma sinusoidal. Observa la estructura típica: el seno espacial (que se anula en los extremos de $[0,\pi]$) y la exponencial temporal decreciente.

## Ecuación de onda

La ecuación de onda en una dimensión es

$$\frac{\partial^2 u}{\partial t^2} = c^2\,\frac{\partial^2 u}{\partial x^2}$$

donde $u(x,t)$ es el desplazamiento de una cuerda vibrante (o la presión en el aire, o el campo eléctrico de la luz) y $c$ es la **velocidad de propagación** de la onda en ese medio. **Cada símbolo, en palabras:** el lado izquierdo es la **aceleración** de cada punto de la cuerda (segunda derivada respecto del tiempo); el lado derecho es $c^2$ veces la **curvatura espacial** de la cuerda. La ecuación dice: cuanto más curvada esté la cuerda en un punto, más fuerte es la fuerza que lo acelera hacia el equilibrio. Es la ley de Newton para un medio elástico: curvatura produce aceleración.

**La solución de D'Alembert.** Toda solución de la ecuación de onda se puede escribir como la suma de dos ondas viajeras:

$$u(x,t) = F(x - ct) + G(x + ct)$$

donde $F$ y $G$ son funciones arbitrarias (determinadas por las condiciones iniciales). ¿Por qué funciona? Verifiquemos solo $F(x - ct)$: por la regla de la cadena, $u_{xx} = F''(x - ct)$ y $u_t = -c\,F'(x - ct)$, luego $u_{tt} = c^2 F''(x - ct) = c^2 u_{xx}$. Exacto.

**Qué significa $F(x - ct)$.** Fija un punto de la forma de la onda, por ejemplo la cresta que cumple $x - ct = 3$. Esa condición se reescribe $x = 3 + ct$: la cresta se mueve **hacia la derecha** con velocidad $c$, porque su posición crece con el tiempo. Por eso $F(x - ct)$ es una onda que viaja a la derecha conservando su forma, y $G(x + ct)$ viaja a la izquierda. La solución general es la superposición de una que va para allá y otra que viene para acá.

**Contraste con el calor.** El calor disipa y suaviza; la onda **no se difumina**: una perturbación viaja íntegra, a velocidad finita $c$, y (en la cuerda ideal) no pierde energía. Las señales llegan con su forma intacta. Además la ecuación de onda es **reversible en el tiempo**: si $u(x,t)$ es solución, también lo es $u(x,-t)$. Esa es la diferencia esencial entre parabólica e hiperbólica.

**Las condiciones.** La ecuación tiene segunda derivada temporal, así que necesita **dos condiciones iniciales**: la forma inicial $u(x,0) = f(x)$ y la velocidad inicial $u_t(x,0) = g(x)$. (Piensa en una cuerda de guitarra: hay que saber dónde se la desplazó y con qué velocidad se la soltó.) Más las condiciones de frontera: para una cuerda fija en los extremos, $u(0,t) = u(L,t) = 0$ (los extremos nunca se mueven).

**Ejemplo con verificación.** La función $u(x,t) = \text{sen}\,x\,\cos t$ satisface $u_{tt} = u_{xx}$ (caso $c = 1$): $u_{tt} = -\text{sen}\,x\cos t$ y $u_{xx} = -\text{sen}\,x\cos t$. Describe una cuerda de longitud $\pi$ fija en los extremos, que vibra en su **modo fundamental**: todos los puntos oscilan arriba y abajo al mismo ritmo, sin atenuarse, con forma espacial $\text{sen}\,x$ y oscilación temporal $\cos t$. El periodo de la oscilación es $2\pi$ segundos. Compara con el ejemplo del calor: misma forma espacial, pero allí la amplitud moría con $e^{-t}$ y aquí oscila eternamente.

## Separación de variables paso a paso

**Separación de variables** es el método central para resolver EDP lineales en regiones simples (una barra, un rectángulo, un disco). La idea es atrevida y elegantísima: **suponer que la solución es el producto de una función que solo depende de $x$ por otra que solo depende de $t$**:

$$u(x,t) = X(x)\,T(t)$$

Aquí $X(x)$ (X mayúscula de equis) es la parte espacial y $T(t)$ la parte temporal. Si el universo es amable, la solución completa resulta ser una suma de estos productos. Veámoslo completo con el ejemplo que ilumina todo lo demás: **la ecuación del calor en una barra de longitud $L$ con extremos a temperatura cero**.

**Paso 1. Sustituir.** Insertamos $u = X(x)T(t)$ en $u_t = k\,u_{xx}$. Como al derivar respecto de $t$ la parte $X(x)$ es constante, $u_t = X(x)\,T'(t)$; y como al derivar dos veces respecto de $x$ la parte $T(t)$ es constante, $u_{xx} = X''(x)\,T(t)$. La ecuación queda

$$X(x)\,T'(t) = k\,X''(x)\,T(t)$$

**Paso 2. Separar.** Dividimos ambos lados por $k\,X(x)\,T(t)$ (suponiendo que no se anula):

$$\frac{T'(t)}{k\,T(t)} = \frac{X''(x)}{X(x)}$$

**Paso 3. El argumento clave.** Mira la igualdad: el lado izquierdo depende **solo** de $t$ y el lado derecho depende **solo** de $x$. Si cambiamos $x$ manteniendo $t$ fijo, el lado izquierdo no cambia, así que el derecho tampoco: la expresión de la derecha es constante. Si cambiamos $t$ manteniendo $x$ fijo, el lado derecho no cambia, así que el izquierdo tampoco: la de la izquierda es constante. Como son iguales, **ambas son la misma constante**, que por tradición se escribe $-\lambda$ (lambda, letra griega):

$$\frac{X''(x)}{X(x)} = \frac{T'(t)}{k\,T(t)} = -\lambda$$

De una sola EDP han nacido dos **EDO** (ecuaciones diferenciales ordinarias), mucho más fáciles.

**Paso 4. El problema espacial.** Reescribimos: $X''(x) + \lambda X(x) = 0$, junto con las condiciones de frontera, que se heredan: como $u(0,t) = X(0)T(t) = 0$ para todo $t$, debe ser $X(0) = 0$; igualmente $X(L) = 0$. Ahora hay que analizar qué valores de $\lambda$ permiten soluciones no triviales:

- Si $\lambda < 0$, digamos $\lambda = -s^2$, la solución general es $X = A\cosh(sx) + B\,\text{senh}(sx)$; con $X(0) = 0$ queda $A = 0$, y con $X(L) = 0$ queda $B\,\text{senh}(sL) = 0$, que obliga $B = 0$: solo la solución trivial. Descartado.
- Si $\lambda = 0$, la solución es la recta $X = Ax + B$; las dos condiciones fuerzan $A = B = 0$. Descartado.
- Si $\lambda > 0$, digamos $\lambda = s^2$, la solución es $X = A\cos(sx) + B\,\text{sen}(sx)$. La condición $X(0) = 0$ elimina el coseno ($A = 0$). La condición $X(L) = 0$ exige $B\,\text{sen}(sL) = 0$; para que $B \neq 0$ debe ser $\text{sen}(sL) = 0$, es decir, $sL = n\pi$ con $n = 1, 2, 3, \ldots$ Por lo tanto los valores permitidos son

$$\lambda_n = \left(\frac{n\pi}{L}\right)^2, \qquad X_n(x) = \text{sen}\left(\frac{n\pi x}{L}\right)$$

Estos números $\lambda_n$ se llaman **valores propios** (eigenvalores) y las funciones $X_n$, **funciones propias**. Cada $n$ produce un **modo** de vibración o de difusión: $n = 1$ es el modo fundamental (media onda de seno), $n = 2$ tiene un nodo en el medio, y así.

**Paso 5. El problema temporal.** Para cada $\lambda_n$, la ecuación $T'(t) = -k\lambda_n T(t)$ tiene por solución la exponencial decreciente

$$T_n(t) = e^{-k\lambda_n t} = e^{-k(n\pi/L)^2 t}$$

(Es la EDO clásica $y' = ay$ con $a = -k\lambda_n$, cuya solución es $y = e^{at}$.)

**Paso 6. Superposición.** Cada producto $X_n(x)T_n(t)$ es una solución. Como la ecuación es **lineal** (la incógnita y sus derivadas aparecen sumadas, sin productos ni potencias), cualquier combinación de soluciones también lo es. La solución general es la serie

$$u(x,t) = \sum_{n=1}^{\infty} b_n\,\text{sen}\left(\frac{n\pi x}{L}\right)e^{-k(n\pi/L)^2 t}$$

donde los coeficientes $b_n$ quedan libres. El símbolo $\sum_{n=1}^{\infty}$ se lee "suma desde n igual a 1 hasta infinito": sumamos infinitos términos, uno por cada modo.

**Paso 7. La condición inicial elige los $b_n$.** Falta imponer $u(x,0) = f(x)$. Haciendo $t = 0$ en la serie (todas las exponenciales valen $1$):

$$f(x) = \sum_{n=1}^{\infty} b_n\,\text{sen}\left(\frac{n\pi x}{L}\right)$$

Los coeficientes se calculan con la fórmula de la próxima sección. Si $f(x) = \text{sen}\left(\dfrac{n\pi x}{L}\right)$ ya es un modo puro, entonces ese $b_n$ vale $1$ y todos los demás $0$, y la serie se reduce a un solo término: por eso el ejemplo $u(x,0) = \text{sen}\,x$ en la barra $[0,\pi]$ da $u = \text{sen}\,x\,e^{-t}$. La separación de variables convierte una EDP en dos EDO y una serie infinita: es la navaja suiza de este tema.

## Condiciones de frontera y Fourier

El paso 7 anterior plantea una pregunta central: ¿cualquier función $f(x)$ se puede escribir como suma de senos? La respuesta, dada por **Fourier** a comienzos del siglo XIX, es sí, y es una de las uniones más fecundas de toda la matemática: las **series de Fourier** descomponen una función en ondas puras.

**La idea de Fourier.** Los senos $\text{sen}\left(\dfrac{n\pi x}{L}\right)$ con $n = 1, 2, 3, \ldots$ forman una "base": cualquier perfil de temperatura razonable se expresa como combinación de ellos, igual que cualquier vector del plano se expresa con dos flechas base. Cada coeficiente $b_n$ mide "cuánto del modo $n$ contiene la función $f$".

**La ortogonalidad (la llave del cálculo).** El hecho técnico que permite despejar los coeficientes es que los senos de frecuencias distintas son **ortogonales**: su producto integrado sobre la barra se anula,

$$\int_0^L \text{sen}\left(\frac{n\pi x}{L}\right)\text{sen}\left(\frac{m\pi x}{L}\right)dx = 0 \quad \text{si } n \neq m, \qquad \text{y vale } \frac{L}{2} \text{ si } n = m$$

**Cómo se obtiene la fórmula.** Multiplicamos la serie $f(x) = \sum b_n\,\text{sen}\left(\dfrac{n\pi x}{L}\right)$ por $\text{sen}\left(\dfrac{m\pi x}{L}\right)$ e integramos de $0$ a $L$. Gracias a la ortogonalidad, de los infinitos términos del lado derecho sobrevive únicamente el de $n = m$, que aporta $b_m \cdot \dfrac{L}{2}$. Despejando:

$$b_n = \frac{2}{L}\int_0^L f(x)\,\text{sen}\left(\frac{n\pi x}{L}\right)dx$$

Esta es **la** fórmula de los coeficientes de la condición inicial. El símbolo $\int_0^L$ es la integral definida de $0$ a $L$: el área con signo bajo la curva.

**Ejemplo calculado completo.** Supón una barra de longitud $L$ con extremos a cero y temperatura inicial uniforme $f(x) = 1$ (toda la barra a $1°$). Entonces

$$b_n = \frac{2}{L}\int_0^L 1\cdot\text{sen}\left(\frac{n\pi x}{L}\right)dx = \frac{2}{n\pi}\left(1 - \cos(n\pi)\right)$$

Como $\cos(n\pi) = 1$ si $n$ es par y $-1$ si $n$ es impar, resulta $b_n = 0$ para $n$ par y $b_n = \dfrac{4}{n\pi}$ para $n$ impar. La solución es

$$u(x,t) = \frac{4}{\pi}\text{sen}\left(\frac{\pi x}{L}\right)e^{-k\pi^2 t/L^2} + \frac{4}{3\pi}\text{sen}\left(\frac{3\pi x}{L}\right)e^{-9k\pi^2 t/L^2} + \cdots$$

**La moraleja física escondida en las exponenciales.** Fíjate en el factor temporal del modo $n$: $e^{-k(n\pi/L)^2 t}$ decae tanto más rápido cuanto mayor es $n$ (el exponente crece como $n^2$). Las frecuencias altas —los detalles finos, las esquinas— mueren casi de inmediato; las bajas sobreviven. Ahí está el suavizado del calor hecho fórmula. En la ecuación de onda, en cambio, cada modo oscila con $\cos\left(\dfrac{n\pi ct}{L}\right)$ **sin decaer**: todas las frecuencias conviven para siempre. Los modos de Fourier son los armónicos de una cuerda de guitarra.

**Dirichlet y Neumann eligen la familia.** Con extremos a cero (Dirichlet) se usan **senos**, porque cada seno se anula en $x = 0$ y en $x = L$. Con extremos aislados (Neumann, $u_x = 0$ en los bordes) se usan **cosenos**, porque sus derivadas se anulan en los bordes. La condición de frontera decide el alfabeto con el que se escribe la solución; la condición inicial decide los coeficientes.

## Diferencias finitas (idea)

Muchas EDP no admiten soluciones con fórmulas (dominios irregulares, coeficientes variables, no linealidades). Entonces se recurre a la computadora, y el método más simple se llama **diferencias finitas**. La idea es volver al concepto de derivada: una derivada es un límite de cocientes de diferencias; si en lugar del límite usamos diferencias pequeñas pero finitas, la EDP se convierte en un sistema de ecuaciones algebraicas.

**La rejilla.** Se cubre el dominio con una malla: posiciones $x_i = i\,\Delta x$ separadas un paso $\Delta x$ (hache de espacio), y tiempos $t_n = n\,\Delta t$ separados un paso $\Delta t$ (paso de tiempo). La notación $u_i^n$ significa "el valor aproximado de $u$ en la posición $x_i$ y el tiempo $t_n$": el subíndice indica posición, el superíndice indica tiempo (no es una potencia).

**La aproximación de las derivadas.** La segunda derivada se aproxima con la **diferencia central**:

$$u_{xx} \approx \frac{u_{i+1} - 2u_i + u_{i-1}}{h^2}, \qquad h = \Delta x$$

¿De dónde sale? De la definición de derivada como límite: la fórmula combina el valor en el punto, en el vecino de la derecha y en el vecino de la izquierda, de modo que para funciones suaves el error sea proporcional a $h^2$ (muy pequeño). La primera derivada temporal se aproxima con la **diferencia progresiva**:

$$u_t \approx \frac{u_i^{n+1} - u_i^{n}}{\Delta t}$$

**El esquema explícito del calor.** Sustituyendo ambas en $u_t = k u_{xx}$ y despejando el valor del futuro:

$$u_i^{n+1} = u_i^{n} + \frac{k\,\Delta t}{h^2}\left(u_{i+1}^{n} - 2u_i^{n} + u_{i-1}^{n}\right)$$

Cada nuevo valor se calcula a partir de los tres valores del instante anterior: el método avanza en el tiempo paso a paso, como un reloj. Con la condición inicial $u(x,0) = f(x)$ se llena la fila $n = 0$ y de allí se propagan todas las demás.

**La estabilidad: la trampa que espera a los incautos.** El método anterior solo funciona si el paso de tiempo es suficientemente pequeño. Para el calor explícito, la condición de **estabilidad** es

$$\frac{k\,\Delta t}{h^2} \leq \frac{1}{2}$$

Si se viola, los errores de redondeo se amplifican en cada paso y la simulación "explota" en valores sin sentido, cada vez más grandes. **Ejemplo numérico:** con $k = 1$ y $h = 0.1$ se tiene $h^2 = 0.01$, así que $\Delta t \leq 0.5 \cdot 0.01 = 0.005$: hay que avanzar el tiempo en pasos menores que cinco milésimas. Con $k = 2$ y $h = 0.05$: $\Delta t \leq \dfrac{0.5 \cdot 0.0025}{2} = 0.000625$. Reducir $h$ a la mitad obliga a reducir $\Delta t$ a la cuarta parte: por eso las simulaciones finas son costosas.

**La condición CFL para la onda.** En la ecuación de onda el esquema explícito exige que en un paso de tiempo la onda numérica no viaje más de una celda:

$$c\,\Delta t \leq \Delta x$$

Se llama condición **CFL** (por Courant, Friedrichs y Lewy): la información no puede avanzar más rápido que la rejilla. Con $c = 3$ y $\Delta x = 0.3$: $\Delta t \leq 0.1$.

Las diferencias finitas no dan una fórmula sino una tabla de números, pero con la estabilidad respetada producen aproximaciones que convergen a la solución verdadera cuando la rejilla se refina. Es la puerta de entrada a la simulación computacional del clima, los fluidos y los materiales.

## Ejemplos resueltos

**Ejemplo 1 (estado estacionario de una barra).** Una barra de longitud $L$ tiene el extremo izquierdo a $0°$ y el derecho a $100°$, sin fuentes internas. Halla la temperatura de equilibrio. El equilibrio resuelve la ecuación de Laplace unidimensional $u_{xx} = 0$. Integrando dos veces: $u(x) = ax + b$. La condición $u(0) = 0$ da $b = 0$; la condición $u(L) = 100$ da $aL = 100$, es decir, $a = 100/L$. Resultado: $u(x) = \dfrac{100}{L}x$, un perfil lineal entre los dos extremos. No depende de la conductividad del material: en equilibrio, el material solo decide cuánto tarda en llegar, no la forma final.

**Ejemplo 2 (calor con un solo modo).** Barra de longitud $\pi$ con $k = 1$, extremos a cero y condición inicial $u(x,0) = \text{sen}\,x$. Como la condición inicial es exactamente el modo $n = 1$ (aquí $L = \pi$, así que el modo es $\text{sen}\left(\dfrac{1\pi x}{\pi}\right) = \text{sen}\,x$), la solución es $u(x,t) = \text{sen}\,x \cdot e^{-t}$. Verificación: $u_t = -\text{sen}\,x\,e^{-t}$ y $u_{xx} = -\text{sen}\,x\,e^{-t}$: se cumple. La temperatura decae exponencialmente sin cambiar de forma: solo cambia la altura de la curva.

**Ejemplo 3 (onda, modo fundamental).** Cuerda de longitud $\pi$ con extremos fijos, posición inicial $u(x,0) = \text{sen}\,x$ y velocidad inicial nula $u_t(x,0) = 0$. La solución es $u(x,t) = \text{sen}\,x\cos t$. Verificación: $u_{tt} = -\text{sen}\,x\cos t$ y $u_{xx} = -\text{sen}\,x\cos t$: cumple $u_{tt} = u_{xx}$ (aquí $c = 1$). La cuerda oscila con periodo $2\pi$ y nunca se detiene ni se atenúa: la energía se conserva.

**Ejemplo 4 (clasificación).** Clasifica $u_{xx} + 4u_{xy} + 4u_{yy} = 0$. Identificamos $A = 1$, $B = 4$, $C = 4$ y calculamos el discriminante $\Delta = B^2 - 4AC = 16 - 16 = 0$. Parabólica.

**Ejemplo 5 (verificación de armónica).** Verifica que $u = x^2 - y^2$ es armónica. $u_{xx} = 2$ (derivando dos veces respecto de $x$, con $y$ fija) y $u_{yy} = -2$. Suma: $0$. Es armónica.

**Ejemplo 6 (Poisson con frontera).** Resuelve $u_{xx} = 2$ con $u(0) = 0$ y $u(1) = 5$. Integrando una vez: $u_x = 2x + A$; integrando otra: $u = x^2 + Ax + B$. De $u(0) = 0$ sale $B = 0$; de $u(1) = 5$ sale $1 + A = 5$, es decir, $A = 4$. Resultado: $u = x^2 + 4x$. Comprobación: $u_{xx} = 2$ y los valores en la frontera son los pedidos.

**Ejemplo 7 (estabilidad numérica).** En el esquema explícito del calor con $k = 1$ y $\Delta x = 0.1$, ¿cuál es el mayor paso de tiempo estable? La condición es $\dfrac{k\,\Delta t}{\Delta x^2} \leq \dfrac{1}{2}$, es decir, $\dfrac{\Delta t}{0.01} \leq \dfrac{1}{2}$, de donde $\Delta t \leq 0.005$. Con un paso mayor, los errores crecen sin control y la simulación deja de tener sentido.

**Ejemplo 8 (coeficientes de Fourier).** Para la barra $[0,L]$ con extremos a cero y $f(x) = 1$, calcula $b_1$. Aplicamos la fórmula: $b_1 = \dfrac{2}{L}\int_0^L \text{sen}\left(\dfrac{\pi x}{L}\right)dx = \dfrac{2}{L}\cdot\dfrac{L}{\pi}\left[-\cos\left(\dfrac{\pi x}{L}\right)\right]_0^L = \dfrac{2}{\pi}(1 - (-1)) = \dfrac{4}{\pi}$. El modo fundamental entra con amplitud $4/\pi \approx 1.27$.

## Errores comunes

- **Confundir condiciones iniciales con condiciones de frontera.** Las iniciales describen el estado en $t = 0$ para todos los puntos $x$; las de frontera describen los bordes $x = 0$ y $x = L$ para todos los tiempos $t$. Una EDP de evolución necesita ambas, cada una en su lugar.
- **Leer $u(0,t) = 0$ como un producto.** No es "u por cero por t": es la restricción de que la función vale cero cuando $x = 0$, en todo instante. Confundirlo con un producto lleva a cuentas absurdas.
- **Derivar parcialmente olvidando congelar la otra variable.** Al calcular $u_x$ de $x^2t + t^2$ hay que tratar a $t$ como constante: el resultado es $2xt$, no $2xt + 2t$. En una derivada parcial, solo se mueve la variable indicada por el denominador.
- **Confundir $u_{xx}$ con $(u_x)^2$.** El subíndice $xx$ significa segunda derivada; no es un cuadrado. Para $u = x^3$, $u_{xx} = 6x$, mientras que $(u_x)^2 = (3x^2)^2 = 9x^4$.
- **Aplicar separación de variables a EDP no lineales.** El método exige linealidad: la superposición de soluciones debe volver a ser solución. Si aparece $u^2$, $u\,u_x$ o $\text{sen}(u)$, el producto $X(x)T(t)$ no descompone la ecuación y el método falla.
- **Olvidar la condición de estabilidad en diferencias finitas.** Un $\Delta t$ demasiado grande arruina la simulación: los números crecen hasta el infinito sin representar la física. Siempre hay que verificar $\dfrac{k\Delta t}{\Delta x^2} \leq \dfrac{1}{2}$ (calor) o $c\,\Delta t \leq \Delta x$ (onda).
- **Mezclar los tipos de EDP.** Elíptica, parabólica e hiperbólica tienen propiedades cualitativas opuestas (equilibrio, suavizado, propagación). Clasificar primero evita esperar que una onda se difumine o que el calor oscile.
- **Creer que la onda se atenúa como el calor.** La onda conserva su forma y su energía; el calor disipa. Las frecuencias altas sobreviven en la onda y mueren en el calor.
- **Olvidar que la serie de Fourier debe converger.** La suma infinita de modos representa la condición inicial solo bajo hipótesis razonables sobre $f$; para funciones con saltos, la serie converge a los valores medios de los saltos.
- **Olvidar el factor $c^2$.** En la onda, la velocidad es $c$ pero el coeficiente es $c^2$; en $u_{tt} = 4u_{xx}$ la velocidad de propagación es $2$, no $4$. Y al escribir las soluciones modales, la frecuencia temporal es $n\pi c/L$, con la $c$ incluida.

## Ejercicios propuestos (con respuestas)

1. Clasifica $u_{xx} - u_{yy} = 0$.
2. Clasifica $u_{xx} + 2u_{xy} + 3u_{yy} = 0$.
3. Verifica que $u = e^{-t}\text{sen}\,x$ satisface $u_t = u_{xx}$.
4. Verifica que $u = x^2 + t$ **no** satisface $u_{tt} = u_{xx}$.
5. Halla el estado estacionario de una barra con extremos a $20°$ y $80°$.
6. Resuelve $u_{xx} = 2$ con $u(0) = 0$ y $u(1) = 5$.
7. Calor con $k = 1$ en $[0,\pi]$ y $u(x,0) = 3\,\text{sen}\,2x$: halla $u(x,t)$.
8. Onda con $c = 1$, $u(x,0) = \text{sen}\,x$ y $u_t(x,0) = 0$: halla $u(x,t)$.
9. Escribe los dos primeros modos del calor en $[0,\pi]$ con extremos a cero.
10. ¿Cuál es el máximo $\Delta t$ estable para el calor explícito con $k = 2$ y $\Delta x = 0.05$?

**Respuestas.**

1. Hiperbólica: $A = 1$, $B = 0$, $C = -1$, y $\Delta = 0 - 4(1)(-1) = 4 > 0$.
2. Elíptica: $\Delta = 4 - 12 = -8 < 0$.
3. $u_t = -e^{-t}\text{sen}\,x$ y $u_{xx} = -e^{-t}\text{sen}\,x$: se cumple.
4. $u_{tt} = 0$ pero $u_{xx} = 2$: no es solución.
5. $u(x) = 20 + \dfrac{60}{L}x$ (recta que une $20$ en $x = 0$ con $80$ en $x = L$).
6. $u = x^2 + 4x$.
7. $u(x,t) = 3\,e^{-4t}\,\text{sen}\,2x$ (el modo $n = 2$ decae con $e^{-4t}$).
8. $u(x,t) = \text{sen}\,x\cos t$.
9. $\text{sen}\,x\,e^{-t}$ y $\text{sen}\,2x\,e^{-4t}$.
10. $\Delta t \leq \dfrac{0.5 \cdot 0.0025}{2} = 0.000625$.

## Resumen

- Una EDP relaciona una función de varias variables, como $u(x,t)$, con sus derivadas parciales; a diferencia de una EDO, necesita condiciones iniciales y condiciones de frontera.
- La notación: $u_t$ y $u_x$ son derivadas parciales; $u_{xx}$ es la segunda derivada; $\Delta u = u_{xx} + u_{yy}$ es el laplaciano; $u(0,t) = 0$ es una condición, no un producto.
- El discriminante $\Delta = B^2 - 4AC$ clasifica las EDP de segundo orden: elípticas (equilibrio, Laplace), parabólicas (difusión, calor) e hiperbólicas (ondas, D'Alembert).
- Laplace ($\Delta u = 0$) describe estados estacionarios armónicos, con principio del máximo; Poisson ($\Delta u = f$) agrega fuentes; Dirichlet fija valores en la frontera y Neumann fija derivadas normales.
- El calor $u_t = k u_{xx}$ suaviza, es irreversible y tiende al equilibrio; la onda $u_{tt} = c^2 u_{xx}$ propaga señales sin deformarlas y conserva energía.
- La separación de variables supone $u = X(x)T(t)$, convierte la EDP en dos EDO, produce los modos $\text{sen}\left(\dfrac{n\pi x}{L}\right)e^{-k(n\pi/L)^2 t}$ y deja los coeficientes a la serie de Fourier de la condición inicial, con $b_n = \dfrac{2}{L}\int_0^L f(x)\,\text{sen}\left(\dfrac{n\pi x}{L}\right)dx$.
- Las diferencias finitas discretizan las derivadas para resolver numéricamente; exigen respetar la estabilidad: $\dfrac{k\Delta t}{\Delta x^2} \leq \dfrac{1}{2}$ en el calor y $c\,\Delta t \leq \Delta x$ en la onda.
`,

};
