window.CURSOS = window.CURSOS || {};
window.CURSOS["algebra-escolar"] = {
  "algebra-elemental": String.raw`
## ¿Qué es el álgebra elemental y por qué importa?
El álgebra elemental es la generalización de la aritmética: en lugar de operar solo con números concretos, operamos con letras que representan números cualesquiera. Esa idea simple es la puerta de entrada a toda la matemática posterior.

Cuando escribimos $x + 3 = 7$, la letra $x$ es una incógnita: un número que aún no conocemos. Cuando escribimos el área de un rectángulo como $A = b \cdot h$, las letras son variables: pueden tomar muchos valores distintos. Distinguir esos dos papeles es la primera lección.

El álgebra importa porque casi todo problema cuantitativo termina en una ecuación: calcular cuánto pagar, cuánto material comprar, cuánto tiempo tarda un proceso, cuánto crece una inversión. Saber manipular expresiones con soltura es requisito para el cálculo, la física, la economía y la programación.

Al terminar este curso deberías poder: simplificar expresiones con exponentes, factorizar polinomios básicos, resolver ecuaciones lineales y cuadráticas, resolver inecuaciones con valor absoluto y traducir problemas verbales a ecuaciones.

## El lenguaje del álgebra: variables, términos y coeficientes
Una **expresión algebraica** combina números, variables y operaciones. En $5x^2 - 3x + 7$:

- $5x^2$ es un término; $5$ es su coeficiente y $2$ su exponente.
- Los términos se separan por signos más y menos.
- El **grado** de la expresión es el mayor exponente: aquí, grado 2.
- El **término constante** es $7$.

Dos términos son **semejantes** si tienen la misma parte literal (las mismas variables con los mismos exponentes). $3x^2$ y $-8x^2$ son semejantes; $3x^2$ y $3x$ no lo son. La regla de oro es: solo se pueden sumar o restar términos semejantes.

Simplificar $4x + 7 + 2x - 3$ significa agrupar semejantes: $(4x + 2x) + (7 - 3) = 6x + 4$.

La **propiedad distributiva** conecta productos con sumas: $a(b + c) = ab + ac$. Es la herramienta que permite eliminar paréntesis y también el corazón de la factorización, que es la operación inversa.

## Leyes de exponentes: explicación
Un exponente indica multiplicación repetida: $a^n$ significa multiplicar $a$ por sí mismo $n$ veces. Las leyes de exponentes no son reglas arbitrarias para memorizar: cada una se deduce de contar factores.

**Producto de potencias con la misma base.** Si multiplicamos $a^3 \cdot a^2 = (a \cdot a \cdot a)(a \cdot a)$, hay $3 + 2 = 5$ factores, así que $a^3 \cdot a^2 = a^5$. En general, se suman los exponentes.

**Cociente de potencias con la misma base.** En $a^5 / a^3 = (a \cdot a \cdot a \cdot a \cdot a)/(a \cdot a \cdot a)$, se cancelan tres factores y quedan dos: $a^2$. Se restan los exponentes.

**Potencia de una potencia.** $(a^2)^3$ significa $a^2 \cdot a^2 \cdot a^2 = a^6$: se multiplican los exponentes.

**Exponente cero.** $a^n / a^n = 1$ para cualquier $a$ distinto de cero, y por la ley del cociente también es $a^0$. Por eso $a^0 = 1$ (con $a \neq 0$). Cuidado: $0^0$ no está definido.

**Exponentes negativos.** $a^{-n} = 1/a^n$ porque $a^0 / a^n = 1/a^n$. Un exponente negativo no hace que el número sea negativo: invierte, no cambia el signo.

**Exponente fraccionario.** $a^{1/2}$ es el número que al cuadrado da $a$, es decir $\sqrt{a}$. En general $a^{m/n} = \sqrt[n]{a^m}$.

**Potencia de un producto y de un cociente.** $(ab)^n = a^n b^n$ y $(a/b)^n = a^n/b^n$, porque la multiplicación es conmutativa.

## Fórmulas clave de exponentes
Estas son las leyes, escritas formalmente:

$$a^m \cdot a^n = a^{m+n}$$

$$\frac{a^m}{a^n} = a^{m-n} \quad (a \neq 0)$$

$$(a^m)^n = a^{m \cdot n}$$

$$(ab)^n = a^n b^n, \qquad \left(\frac{a}{b}\right)^n = \frac{a^n}{b^n} \quad (b \neq 0)$$

$$a^0 = 1 \quad (a \neq 0), \qquad a^{-n} = \frac{1}{a^n} \quad (a \neq 0)$$

$$a^{m/n} = \sqrt[n]{a^m}$$

Ejemplos directos:
- $x^4 \cdot x^3 = x^7$.
- $\dfrac{y^9}{y^4} = y^5$.
- $(2x)^3 = 2^3 x^3 = 8x^3$.
- $5^{-2} = \dfrac{1}{25}$.
- $27^{2/3} = (\sqrt[3]{27})^2 = 3^2 = 9$.

## Productos notables
Los productos notables son multiplicaciones que aparecen tantas veces que conviene memorizar su resultado. Se deducen aplicando la distributiva dos veces.

**Binomio al cuadrado:**
$$(a + b)^2 = a^2 + 2ab + b^2$$
$$(a - b)^2 = a^2 - 2ab + b^2$$

El término $2ab$ es el que casi todos olvidan. Verificación: $(x + 5)^2 = x^2 + 10x + 25$.

**Diferencia de cuadrados:**
$$(a + b)(a - b) = a^2 - b^2$$

Verificación: $(x + 3)(x - 3) = x^2 - 9$.

**Binomio al cubo:**
$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$

**Suma y diferencia de cubos:**
$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

Estos productos se leen en ambos sentidos: de producto a desarrollo y de desarrollo a factorización.

## Factorización: los casos principales
Factorizar es escribir una expresión como producto de factores más simples. Es la operación inversa de expandir.

1. **Factor común.** Extrae el máximo común divisor de todos los términos: $6x^3 + 9x^2 = 3x^2(2x + 3)$.
2. **Diferencia de cuadrados.** $x^2 - 16 = (x + 4)(x - 4)$.
3. **Trinomio cuadrado perfecto.** $x^2 + 6x + 9 = (x + 3)^2$ porque $2 \cdot 3 = 6$ y $3^2 = 9$.
4. **Trinomio $x^2 + bx + c$.** Busca dos números que sumen $b$ y multipliquen $c$: $x^2 + 5x + 6 = (x + 2)(x + 3)$.
5. **Agrupación.** $ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)$.

Método general recomendado: (1) saca factor común; (2) cuenta los términos; (3) si son dos, revisa diferencia de cuadrados o cubos; si son tres, revisa los trinomios; si son cuatro, agrupa.

## Ecuaciones lineales: método paso a paso
Una ecuación es una igualdad entre dos expresiones; resolverla es hallar los valores que la hacen verdadera. Las ecuaciones lineales tienen la incógnita con exponente 1.

El principio central: **cualquier operación aplicada a un lado debe aplicarse también al otro**. La igualdad es una balanza.

Método:
1. Elimina paréntesis con la distributiva.
2. Elimina denominadores multiplicando por el mínimo común múltiplo.
3. Agrupa los términos con la incógnita en un lado y los constantes en el otro.
4. Reduce términos semejantes.
5. Despeja la incógnita dividiendo por su coeficiente.
6. Verifica sustituyendo en la ecuación original.

Ejemplo: resolver $3(x - 2) + 5 = 2x + 7$.
- Distribuye: $3x - 6 + 5 = 2x + 7$.
- Reduce: $3x - 1 = 2x + 7$.
- Agrupa: $3x - 2x = 7 + 1$, es decir $x = 8$.
- Verifica: $3(8-2) + 5 = 23$ y $2(8) + 7 = 23$. Correcto.

## Ecuaciones cuadráticas: fórmula general y factorización
Una ecuación cuadrática tiene la forma $ax^2 + bx + c = 0$ con $a \neq 0$. Hay tres caminos principales.

**1. Fórmula general:**
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

El radicando $\Delta = b^2 - 4ac$ es el **discriminante**:
- $\Delta > 0$: dos soluciones reales distintas.
- $\Delta = 0$: una solución real doble.
- $\Delta < 0$: dos soluciones complejas conjugadas.

**2. Factorización.** Si el trinomio se factoriza fácil, las soluciones se leen directo. En $(x - 2)(x - 3) = 0$, un producto es cero solo si un factor es cero: $x = 2$ o $x = 3$.

**3. Completar el cuadrado.** Reescribir como $(x + p)^2 = q$. Útil conceptualmente y base de la fórmula general.

Ejemplo con la fórmula: $2x^2 - 4x - 6 = 0$.
$$x = \frac{4 \pm \sqrt{16 + 48}}{4} = \frac{4 \pm 8}{4}$$
Soluciones: $x = 3$ y $x = -1$. Verificación con $x = 3$: $18 - 12 - 6 = 0$.

## Inecuaciones y valor absoluto
Una inecuación se resuelve como una ecuación, con una diferencia crítica: **al multiplicar o dividir por un número negativo, el sentido de la desigualdad se invierte**.

Ejemplo: $-2x + 1 > 7$ $\Rightarrow$ $-2x > 6$ $\Rightarrow$ $x < -3$ (se invirtió).

El valor absoluto $|x|$ es la distancia de $x$ al cero. Las inecuaciones con valor absoluto se desdoblan:
- $|x| < r$ significa $-r < x < r$ (intervalo).
- $|x| > r$ significa $x > r$ o $x < -r$ (dos rayos).

Ejemplo: $|2x - 6| \leq 4$.
$$-4 \leq 2x - 6 \leq 4 \Rightarrow 2 \leq 2x \leq 10 \Rightarrow 1 \leq x \leq 5$$
El conjunto solución es el intervalo $[1, 5]$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (aplicación, finanzas).** Un capital colocado al $6\%$ anual simple produce $450$ dólares de interés en 3 años. ¿Cuál era el capital?
- Fórmula: $I = C \cdot r \cdot t$.
- Despeje: $C = \dfrac{I}{r \cdot t} = \dfrac{450}{0.06 \cdot 3} = 2500$.
- El capital inicial era $2500$ dólares.

**Ejemplo 2 (aplicación, geometría).** El perímetro de un rectángulo es $26$ cm y el largo mide 3 cm más que el ancho. Halla las dimensiones.
- Sean $a$ el ancho y $a + 3$ el largo.
- $2(a + a + 3) = 26 \Rightarrow 2(2a + 3) = 26 \Rightarrow 2a + 3 = 13 \Rightarrow a = 5$.
- Ancho $5$ cm, largo $8$ cm. Verificación: $2(5 + 8) = 26$.

**Ejemplo 3 (práctica, exponentes).** Simplifica $\dfrac{12x^5 y^{-3}}{4x^2 y^2}$.
- Coeficientes: $\dfrac{12}{4} = 3$.
- Potencias de $x$: $x^{5-2} = x^3$.
- Potencias de $y$: $y^{-3-2} = y^{-5} = \dfrac{1}{y^5}$.
- Resultado: $\dfrac{3x^3}{y^5}$.

**Ejemplo 4 (práctica, factorización).** Factoriza $2x^3 - 8x$.
- Factor común: $2x(x^2 - 4)$.
- Diferencia de cuadrados: $2x(x + 2)(x - 2)$.

**Ejemplo 5 (práctica, cuadrática).** Resuelve $2x^2 - 4x - 6 = 0$ con la fórmula general.
- $x = \dfrac{4 \pm \sqrt{16 + 48}}{4} = \dfrac{4 \pm 8}{4}$.
- Soluciones: $x = 3$ y $x = -1$.
- Verificación con $x = 3$: $18 - 12 - 6 = 0$.

**Ejemplo 6 (aplicación, física).** Un objeto cae desde $80$ m según $h(t) = 80 - 5t^2$. ¿Cuándo toca el suelo?
- Suelo significa $h(t) = 0$: $80 - 5t^2 = 0 \Rightarrow t^2 = 16$.
- Como el tiempo es positivo, $t = 4$ segundos.

## Contextos donde se aplica
- **Física:** las fórmulas de cinemática son álgebra: despejar tiempo o aceleración es resolver ecuaciones. $d = v_0 t + \frac{1}{2}at^2$ requiere manejar exponentes y cuadráticas.
- **Economía y finanzas:** interés compuesto usa exponentes: $C = C_0(1 + r)^t$. Despejar $t$ exige logaritmos, que se apoyan en las leyes de exponentes.
- **Geometría:** áreas, volúmenes y el teorema de Pitágoras generan expresiones que hay que simplificar y factorizar.
- **Programación:** la notación de complejidad algorítmica usa exponentes y polinomios; interpretar expresiones booleanas y aritméticas requiere estas bases.
- **Química y biología:** diluciones, tasas de crecimiento poblacional y decaimiento radiactivo son modelos algebraicos.

## Errores comunes y cómo evitarlos
- **$(a + b)^2 = a^2 + b^2$.** Falso. Falta $2ab$. Escribe siempre el desarrollo completo.
- **Sumar términos no semejantes.** $3x + 2$ no es $5x$. Solo se agrupan términos con la misma parte literal.
- **Mal uso de exponentes negativos.** $x^{-2}$ no es $-x^2$; es $1/x^2$.
- **Dividir entre una variable.** Si divides entre $x$, pierdes la solución $x = 0$. Factoriza en vez de dividir.
- **Olvidar invertir la desigualdad.** Al multiplicar o dividir por negativo en una inecuación, cambia el sentido.
- **Aplicar la fórmula cuadrática sin ordenar la ecuación.** Primero lleva todo a la forma $ax^2 + bx + c = 0$; el error de signo en $b$ es el más frecuente.
- **Cancelar términos en vez de factores.** $\frac{x + 2}{x + 3}$ no se simplifica; $\frac{x \cdot 2}{x \cdot 3}$ sí.

## Ejercicios propuestos
1. Simplifica: $3x^2 \cdot 5x^4$ y $\dfrac{8a^7}{2a^3}$.
2. Simplifica: $\dfrac{6x^{-2}y^3}{3x^2 y^{-1}}$.
3. Expande: $(3x - 4)^2$ y $(2a + 5)(2a - 5)$.
4. Factoriza: $x^2 - 9x + 20$ y $3x^2 - 12$.
5. Resuelve: $5(x - 1) = 3x + 7$.
6. Resuelve por factorización: $x^2 + x - 6 = 0$.
7. Resuelve con la fórmula general: $x^2 - 6x + 5 = 0$.
8. Resuelve la inecuación: $|x - 3| < 5$.
9. La suma de tres enteros consecutivos es 48. ¿Cuáles son?

**Respuestas:** 1) $15x^6$ y $4a^4$. 2) $2 y^4 / x^4$. 3) $9x^2 - 24x + 16$ y $4a^2 - 25$. 4) $(x - 4)(x - 5)$ y $3(x + 2)(x - 2)$. 5) $x = 6$. 6) $x = 2$, $x = -3$. 7) $x = 1$, $x = 5$. 8) $-2 < x < 8$. 9) 15, 16 y 17.

## Resumen
- El álgebra generaliza la aritmética con variables, términos y coeficientes.
- Las leyes de exponentes se deducen contando factores: producto suma, cociente resta, potencia multiplica.
- Los productos notables y la factorización son la misma relación leída en dos direcciones.
- Las ecuaciones lineales se resuelven aislando la incógnita con operaciones simétricas; las cuadráticas, con factorización o fórmula general.
- El discriminante decide cuántas soluciones reales hay.
- En inecuaciones, multiplicar por negativo invierte el sentido; el valor absoluto se desdobla en intervalo o dos rayos.
`,

  "numeros-reales-complejos": String.raw`
## Los conjuntos numéricos: una historia de ampliaciones
Cada vez que una operación no tenía respuesta dentro de un conjunto de números, la matemática amplió el conjunto. Así se construyó la cadena:

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$$

- $\mathbb{N}$: naturales, para contar.
- $\mathbb{Z}$: enteros, para restar (resuelven $x + 3 = 1$).
- $\mathbb{Q}$: racionales, para dividir (resuelven $2x = 1$).
- $\mathbb{R}$: reales, para medir y tomar límites; llenan los huecos de la recta (resuelven $x^2 = 2$).
- $\mathbb{C}$: complejos, para extraer raíces de negativos (resuelven $x^2 = -1$).

Comprender esta jerarquía ayuda a saber dónde vive cada solución y qué operaciones son válidas en cada nivel.

## Números reales: propiedades fundamentales
Los reales forman un **cuerpo ordenado completo**. Sus axiomas se agrupan en tres bloques:

**1. Axiomas de cuerpo (suma y multiplicación).** Conmutatividad, asociatividad, distributividad, neutros ($0$ y $1$) e inversos ($-a$ y $1/a$ para $a \neq 0$).

**2. Axiomas de orden.** Para cualquier par $a, b$ se cumple exactamente una: $a < b$, $a = b$ o $a > b$. El orden es compatible con las operaciones: si $a < b$ entonces $a + c < b + c$, y si $c > 0$ entonces $ac < bc$.

**3. Axioma del supremo (completitud).** Todo conjunto no vacío y acotado superiormente tiene una menor cota superior. Este axioma distingue a los reales de los racionales y es la base del cálculo.

**Propiedades clave:**
- **Tricotomía:** exactamente una de $a < b$, $a = b$, $a > b$ es verdadera.
- **Transitividad:** $a < b$ y $b < c$ implican $a < c$.
- **Densidad:** entre dos reales distintos siempre hay otro real (de hecho, infinitos).
- **Arquimedianidad:** para todo real $x$ existe un natural $n > x$.

## Valor absoluto y distancia en la recta
El valor absoluto mide distancia al origen:
$$|x| = \begin{cases} x & \text{si } x \geq 0 \\ -x & \text{si } x < 0 \end{cases}$$

Su interpretación geométrica es la clave: $|x - a|$ es la distancia entre $x$ y $a$. Por eso:
- $|x - a| < r$ significa que $x$ está a menos de $r$ de $a$: el intervalo $(a - r, a + r)$.
- $|x - a| = r$ significa $x = a + r$ o $x = a - r$.

**Propiedades:**
$$|ab| = |a||b|, \qquad \left|\frac{a}{b}\right| = \frac{|a|}{|b|}$$

$$|a + b| \leq |a| + |b| \quad \text{(desigualdad triangular)}$$

La desigualdad triangular es fundamental en análisis y geometría: el camino directo nunca es más largo que el camino con escala.

## Intervalos y su notación
Los intervalos describen conjuntos de reales:
- Cerrado: $[a, b] = \{x : a \leq x \leq b\}$.
- Abierto: $(a, b) = \{x : a < x < b\}$.
- Semiabiertos: $[a, b)$ y $(a, b]$.
- No acotados: $[a, \infty)$, $(-\infty, b)$, $(-\infty, \infty) = \mathbb{R}$.

Resolver una inecuación significa expresar el conjunto solución como unión de intervalos. Ejemplo: $x^2 < 4$ tiene solución $(-2, 2)$; $x^2 \geq 9$ tiene solución $(-\infty, -3] \cup [3, \infty)$.

## Números complejos: definición y operaciones
No existe ningún real cuyo cuadrado sea negativo. Para resolver $x^2 = -1$ se define la **unidad imaginaria**:
$$i^2 = -1$$

Un **número complejo** es una expresión $z = a + bi$ con $a, b \in \mathbb{R}$. La **parte real** es $\text{Re}(z) = a$ y la **parte imaginaria** es $\text{Im}(z) = b$.

**Operaciones:**
- Suma: $(a + bi) + (c + di) = (a + c) + (b + d)i$.
- Producto: $(a + bi)(c + di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)i$.
- **Conjugado:** $\bar{z} = a - bi$. El producto $z\bar{z} = a^2 + b^2$ es siempre real y no negativo.
- **División:** multiplica numerador y denominador por el conjugado.

Ejemplo de división:
$$\frac{1 + i}{2 - i} = \frac{(1 + i)(2 + i)}{(2 - i)(2 + i)} = \frac{2 + i + 2i + i^2}{4 + 1} = \frac{1 + 3i}{5} = \frac{1}{5} + \frac{3}{5}i$$

## El plano complejo y la forma polar
Un complejo $z = a + bi$ se representa como el punto $(a, b)$ en el plano. La distancia al origen es el **módulo**:
$$|z| = \sqrt{a^2 + b^2}$$

El ángulo con el eje real positivo es el **argumento** $\theta$, con $\tan\theta = b/a$ (ajustando el cuadrante).

Con el módulo $r = |z|$ y el argumento $\theta$, el complejo se escribe en **forma polar**:
$$z = r(\cos\theta + i\,\text{sen}\,\theta) = r\,\text{cis}\,\theta$$

Las coordenadas se recuperan con $a = r\cos\theta$ y $b = r\,\text{sen}\,\theta$.

La forma polar simplifica multiplicaciones y potencias:
$$z_1 z_2 = r_1 r_2\,\text{cis}(\theta_1 + \theta_2)$$
$$\frac{z_1}{z_2} = \frac{r_1}{r_2}\,\text{cis}(\theta_1 - \theta_2)$$

## Fórmula de De Moivre y raíces n-ésimas
Elevar a potencias en forma polar es directo:
$$z^n = r^n\,\text{cis}(n\theta) \quad \text{(fórmula de De Moivre)}$$

**Ejemplo.** Calcular $(1 + i)^6$.
- $r = \sqrt{2}$, $\theta = \pi/4$.
- $(1+i)^6 = (\sqrt{2})^6 \text{cis}(6 \cdot \pi/4) = 8\,\text{cis}(3\pi/2) = 8(0 - i) = -8i$.

Las **raíces n-ésimas** de un complejo son $n$ números distintos:
$$z_k = r^{1/n}\,\text{cis}\left(\frac{\theta + 2\pi k}{n}\right), \quad k = 0, 1, \ldots, n-1$$

Las $n$ raíces forman un polígono regular de $n$ lados inscrito en la circunferencia de radio $r^{1/n}$. Ejemplo: las raíces cúbicas de $1$ son $1$, $-\frac{1}{2} + \frac{\sqrt{3}}{2}i$ y $-\frac{1}{2} - \frac{\sqrt{3}}{2}i$: forman un triángulo equilátero.

## Fórmula de Euler y conexión con la trigonometría
La identidad más célebre de la matemática conecta exponenciales con trigonometría:
$$e^{i\theta} = \cos\theta + i\,\text{sen}\,\theta$$

De aquí sale la **fórmula de Euler** evaluada en $\pi$: $e^{i\pi} + 1 = 0$, que relaciona las cinco constantes fundamentales $0, 1, e, i, \pi$.

La forma exponencial $z = re^{i\theta}$ hace triviales las operaciones: multiplicar es sumar exponentes y dividir es restar. Es la notación estándar en ingeniería, física de ondas y procesamiento de señales.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (aplicación, control de calidad).** Una pieza debe medir $50$ mm con tolerancia de $0.5$ mm. Expresa el requisito con valor absoluto y como intervalo.
- $|x - 50| \leq 0.5$.
- Desdoblando: $-0.5 \leq x - 50 \leq 0.5 \Rightarrow 49.5 \leq x \leq 50.5$.
- La pieza es válida si su medida está en $[49.5, 50.5]$.

**Ejemplo 2 (aplicación, corriente alterna).** Dos fasores se multiplican: $z_1 = 2\,\text{cis}\,30°$ y $z_2 = 3\,\text{cis}\,60°$. Halla el producto.
- Módulos: $2 \cdot 3 = 6$.
- Ángulos: $30° + 60° = 90°$.
- $z_1 z_2 = 6\,\text{cis}\,90° = 6i$.

**Ejemplo 3 (práctica, producto).** Calcula $(3 + 2i)(1 - 4i)$.
- Distribuye: $3 - 12i + 2i - 8i^2$.
- Usa $i^2 = -1$: $3 - 10i + 8 = 11 - 10i$.

**Ejemplo 4 (práctica, división).** Divide $\dfrac{2 + i}{1 - i}$.
- Multiplica por el conjugado: $\dfrac{(2+i)(1+i)}{(1-i)(1+i)} = \dfrac{2 + 2i + i + i^2}{2}$.
- $= \dfrac{1 + 3i}{2} = \dfrac{1}{2} + \dfrac{3}{2}i$.

**Ejemplo 5 (práctica, De Moivre).** Calcula $(1 - i)^8$.
- Módulo y argumento: $r = \sqrt{2}$, $\theta = -\dfrac{\pi}{4}$.
- $(1-i)^8 = (\sqrt{2})^8\,\text{cis}\left(-\dfrac{8\pi}{4}\right) = 16\,\text{cis}(-2\pi) = 16$.

**Ejemplo 6 (práctica, raíces).** Halla las raíces cuartas de $16$.
- $16 = 16\,\text{cis}\,0$; $r^{1/4} = 2$.
- $z_k = 2\,\text{cis}\left(\dfrac{0 + 2\pi k}{4}\right)$, $k = 0,1,2,3$.
- Raíces: $2$, $2i$, $-2$, $-2i$: un cuadrado inscrito en el círculo de radio 2.

## Contextos donde se aplica
- **Ingeniería eléctrica:** la corriente alterna se modela con fasores complejos; impedancias son números complejos.
- **Física cuántica:** la función de onda es compleja; la probabilidad se obtiene del módulo al cuadrado.
- **Geometría:** los complejos representan rotaciones y homotecias del plano; multiplicar por $i$ gira 90 grados.
- **Ecuaciones diferenciales:** raíces complejas de la ecuación característica producen oscilaciones en la solución.
- **Procesamiento de señales:** la transformada de Fourier usa exponenciales complejas.

## Errores comunes y cómo evitarlos
- **$\sqrt{ab} = \sqrt{a}\sqrt{b}$ con negativos.** Solo vale para reales no negativos. Por ejemplo $\sqrt{-4}\sqrt{-9} = (2i)(3i) = -6$, no $\sqrt{36} = 6$.
- **Confundir conjugado con inverso.** $\bar{z} = a - bi$ pero $z^{-1} = \bar{z}/|z|^2$.
- **Mezclar grados y radianes.** La forma polar y De Moivre usan radianes salvo aviso explícito.
- **Perder raíces.** Cada complejo no nulo tiene exactamente $n$ raíces n-ésimas; reporta todas.
- **Olvidar el cuadrante del argumento.** $\arctan(b/a)$ por sí sola solo da ángulos en dos cuadrantes.
- **Tratar $i$ como variable formal sin usar $i^2 = -1$.** Al multiplicar, siempre reduce $i^2$ a $-1$.

## Ejercicios propuestos
1. Clasifica: $\sqrt{2}$, $-3$, $0.75$, $\pi$, $\sqrt{9}$.
2. Resuelve como intervalo: $|2x - 3| \leq 7$.
3. Opera: $(3 + 2i)(1 - 4i)$.
4. Divide: $\dfrac{2 + i}{1 - i}$.
5. Halla módulo y argumento de $z = -1 + i$.
6. Calcula $(1 - i)^8$ con De Moivre.
7. Halla las raíces cuartas de $16$.
8. Expresa en forma $a + bi$: $e^{i\pi/3}$.

**Respuestas:** 1) Irracional, entero, racional, irracional, natural. 2) $[-2, 5]$. 3) $11 - 10i$. 4) $\tfrac{1}{2} + \tfrac{3}{2}i$. 5) $r = \sqrt{2}$, $\theta = 3\pi/4$. 6) $16$. 7) $2$, $2i$, $-2$, $-2i$. 8) $\tfrac{1}{2} + \tfrac{\sqrt{3}}{2}i$.

## Resumen
- Los conjuntos numéricos se amplían para resolver operaciones sin solución en el conjunto anterior.
- Los reales son un cuerpo ordenado y completo; su completitud es la base del cálculo.
- El valor absoluto es distancia y desdobla inecuaciones en intervalos.
- Los complejos $a + bi$ se operan con $i^2 = -1$; el conjugado permite dividir.
- La forma polar y De Moivre simplifican potencias y raíces: $n$ raíces n-ésimas forman un polígono regular.
- La fórmula de Euler conecta exponencial, trigonometría y geometría.
`,

  "sucesiones-sumatorias": String.raw`
## ¿Qué es una sucesión?
Una **sucesión** es una función cuyo dominio son los números naturales: a cada posición $n$ le asigna un término $a_n$. Se escribe $\{a_n\} = a_1, a_2, a_3, \ldots$

Ejemplos:
- $\{1, 4, 9, 16, \ldots\}$ con término general $a_n = n^2$.
- $\{2, 4, 8, 16, \ldots\}$ con $a_n = 2^n$.
- $\{1, 1, 2, 3, 5, 8, \ldots\}$ definida por recurrencia: $a_1 = a_2 = 1$, $a_n = a_{n-1} + a_{n-2}$ (Fibonacci).

Las sucesiones pueden definirse de dos maneras: por **término general** (fórmula directa para cualquier $n$) o por **recurrencia** (cada término depende de los anteriores y hay que dar el punto de partida).

## Progresiones aritméticas
Una progresión aritmética (PA) avanza sumando una **diferencia** constante $d$:
$$a_n = a_1 + (n - 1)d$$

Ejemplo: $3, 7, 11, 15, \ldots$ tiene $a_1 = 3$, $d = 4$, entonces $a_{10} = 3 + 9 \cdot 4 = 39$.

La **suma de los primeros $n$ términos** tiene una fórmula famosa, que se deduce apareando extremos:
$$S_n = \frac{n(a_1 + a_n)}{2}$$

La deducción: sumar $a_1 + a_n$, $a_2 + a_{n-1}$, etc., da la misma cantidad $a_1 + a_n$ repetida $n/2$ veces.

Ejemplo: suma de los primeros 100 naturales:
$$1 + 2 + \cdots + 100 = \frac{100 \cdot 101}{2} = 5050$$

## Progresiones geométricas
Una progresión geométrica (PG) avanza multiplicando por una **razón** constante $r$:
$$a_n = a_1 r^{n-1}$$

Ejemplo: $2, 6, 18, 54, \ldots$ con $a_1 = 2$, $r = 3$; entonces $a_6 = 2 \cdot 3^5 = 486$.

La suma de los primeros $n$ términos:
$$S_n = a_1 \frac{1 - r^n}{1 - r} \quad (r \neq 1)$$

Deducción breve: $S_n = a_1 + a_1 r + \cdots + a_1 r^{n-1}$; multiplicando por $r$ y restando, casi todos los términos se cancelan.

Cuando $|r| < 1$, la **serie geométrica infinita** converge:
$$S_\infty = \frac{a_1}{1 - r}$$

Ejemplo: $1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots = \frac{1}{1 - 1/2} = 2$.

## Notación sigma y propiedades
La notación sigma compacta sumas:
$$\sum_{k=1}^{n} a_k = a_1 + a_2 + \cdots + a_n$$

Propiedades fundamentales:
$$\sum_{k=1}^{n} (a_k + b_k) = \sum_{k=1}^{n} a_k + \sum_{k=1}^{n} b_k$$
$$\sum_{k=1}^{n} c \cdot a_k = c \sum_{k=1}^{n} a_k$$

**Sumas notables** que conviene memorizar:
$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$$
$$\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$$
$$\sum_{k=1}^{n} k^3 = \left(\frac{n(n+1)}{2}\right)^2$$

El cambio de índice (reindexación) es una herramienta clave: $\sum_{k=1}^{n} a_k = \sum_{j=0}^{n-1} a_{j+1}$ permite alinear sumas.

## Inducción matemática: el método
La inducción demuestra afirmaciones de la forma "para todo $n \geq n_0$, $P(n)$". Es como una fila de fichas de dominó: si la primera cae y cada una tumba la siguiente, todas caen.

**Estructura:**
1. **Base:** verifica $P(n_0)$.
2. **Hipótesis inductiva:** supón que $P(k)$ es verdadera para un $k$ arbitrario.
3. **Paso inductivo:** demuestra que $P(k+1)$ es verdadera usando la hipótesis.
4. **Conclusión:** por el principio de inducción, $P(n)$ vale para todo $n \geq n_0$.

**Ejemplo completo.** Probar que $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$.

- Base $n = 1$: $\sum_{k=1}^{1} k = 1$ y $\frac{1 \cdot 2}{2} = 1$. Correcto.
- Hipótesis: supongamos que vale para $n = k$: $\sum_{i=1}^{k} i = \frac{k(k+1)}{2}$.
- Paso: la suma hasta $k+1$ es la suma hasta $k$ más el término $k+1$:
$$\sum_{i=1}^{k+1} i = \frac{k(k+1)}{2} + (k+1) = \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k+2)}{2}$$
que es exactamente la fórmula para $n = k+1$.
- Conclusión: la fórmula vale para todo $n$ natural.

## Inducción fuerte y recurrencias
En la **inducción fuerte**, la hipótesis es que $P(j)$ vale para todos los $j \leq k$, no solo para $k$. Se usa cuando cada caso depende de varios anteriores.

Es la herramienta natural para sucesiones definidas por recurrencia como Fibonacci. Ejemplo de resultado: $F_n \geq \left(\frac{3}{2}\right)^{n-2}$ para $n \geq 3$.

**Cómo resolver recurrencias simples por sustitución hacia atrás:**
- Torres de Hanói: $T(n) = 2T(n-1) + 1$, $T(1) = 1$. Iterando: $T(n) = 2^n - 1$.
- Interés compuesto: $C_n = C_{n-1}(1 + r)$, con $C_0$ dado. Iterando: $C_n = C_0(1+r)^n$.

## Límite de una sucesión
Una sucesión **converge** a $L$ si sus términos se acercan a $L$ tanto como queramos para $n$ suficientemente grande. Se escribe $\lim_{n\to\infty} a_n = L$.

Formalmente: para todo $\varepsilon > 0$ existe $N$ tal que si $n > N$ entonces $|a_n - L| < \varepsilon$.

**Reglas prácticas:**
- Una PG converge a $0$ si $|r| < 1$; diverge si $|r| > 1$; es constante si $r = 1$.
- En un cociente de polinomios, manda el grado mayor: $\frac{3n^2 + n}{2n^2 - 5} \to \frac{3}{2}$.
- El término general de una serie convergente siempre tiende a cero (el recíproco es falso).

Una sucesión **monótona y acotada** siempre converge: es el teorema de convergencia monótona, una consecuencia del axioma del supremo.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (aplicación, ahorro).** Ahorras $100$ dólares el primer mes y aumentas $20$ dólares cada mes. ¿Cuánto ahorras el mes 12 y cuánto en total el primer año?
- PA con $a_1 = 100$, $d = 20$.
- Mes 12: $a_{12} = 100 + 11 \cdot 20 = 320$.
- Total del año: $S_{12} = \dfrac{12(100 + 320)}{2} = 2520$.
- Ahorras $320$ dólares en diciembre y $2520$ en el año.

**Ejemplo 2 (aplicación, farmacología).** Un fármaco pierde el $30\%$ de su concentración cada 6 horas. ¿Qué fracción queda tras 24 horas?
- PG con razón $r = 0.7$.
- Tras 4 periodos: $0.7^4 \approx 0.2401$.
- Queda aproximadamente el $24\%$ de la dosis inicial.

**Ejemplo 3 (práctica, progresión aritmética).** En la PA $5, 9, 13, \ldots$ halla $a_{20}$ y $S_{20}$.
- $d = 4$: $a_{20} = 5 + 19 \cdot 4 = 81$.
- $S_{20} = \dfrac{20(5 + 81)}{2} = 860$.

**Ejemplo 4 (práctica, progresión geométrica).** Suma $3 + 6 + 12 + \cdots + 1536$.
- $a_1 = 3$, $r = 2$; $1536 = 3 \cdot 2^9$, así que $n = 10$.
- $S_{10} = 3 \cdot \dfrac{2^{10} - 1}{2 - 1} = 3(1023) = 3069$.

**Ejemplo 5 (práctica, sumatoria).** Calcula $\displaystyle\sum_{k=1}^{50} (2k + 1)$.
- Separa: $2\displaystyle\sum_{k=1}^{50} k + \displaystyle\sum_{k=1}^{50} 1 = 2 \cdot \dfrac{50 \cdot 51}{2} + 50$.
- $= 2550 + 50 = 2600$.

**Ejemplo 6 (aplicación, serie geométrica infinita).** Una pelota recorre en cada rebote la mitad del recorrido anterior. Si el primer tramo es $8$ m, ¿cuál es la distancia total de todos los rebotes sucesivos?
- PG con $a_1 = 4$ (primer rebote) y $r = 1/2$.
- $S_\infty = \dfrac{4}{1 - 1/2} = 8$ m adicionales.

## Contextos donde se aplica
- **Finanzas:** el valor futuro con aportes periódicos es una suma de progresión geométrica.
- **Computación:** analizar bucles anidados requiere sumar series (por ejemplo $\sum k$ o $\sum k^2$).
- **Física:** la distancia recorrida con aceleración constante genera progresiones; los decaimientos, progresiones geométricas.
- **Biología:** poblaciones que se duplican por periodo son progresiones geométricas.
- **Matemática aplicada:** las sumas de Riemann, que definen la integral, son sumatorias.

## Errores comunes y cómo evitarlos
- **Confundir $n$ con $n-1$.** El término 10 usa $n = 10$: $a_{10} = a_1 + 9d$. Cuenta los saltos, no los términos.
- **Usar la fórmula geométrica con $r = 1$.** El denominador se anula; con $r = 1$ la suma es $n \cdot a_1$.
- **Usar $S_\infty$ con $|r| \geq 1$.** La serie geométrica infinita solo suma si $|r| < 1$.
- **Inducción sin usar la hipótesis.** Si en el paso inductivo no usas que vale para $k$, algo está mal.
- **Olvidar la base de la inducción.** Sin base, la cadena no arranca.
- **Suponer convergencia por "los términos se ven pequeños".** Hay que verificarlo; la serie armónica diverge aunque $1/n \to 0$.

## Ejercicios propuestos
1. En la PA $5, 9, 13, \ldots$ halla $a_{20}$ y $S_{20}$.
2. En la PG $3, 6, 12, \ldots$ halla $a_{10}$ y $S_{10}$.
3. Calcula $\sum_{k=1}^{50} (2k + 1)$.
4. Calcula $\sum_{k=1}^{10} 2^k$.
5. Prueba por inducción que $\sum_{k=1}^n (2k - 1) = n^2$.
6. Halla el límite de $a_n = \frac{5n^2 - 3}{2n^2 + n}$.
7. Una pelota cae desde 8 m y rebota a la mitad de la altura cada vez. ¿Distancia total recorrida?
8. Resuelve la recurrencia $a_n = 3a_{n-1}$, $a_1 = 2$.

**Respuestas:** 1) $a_{20} = 81$, $S_{20} = 860$. 2) $a_{10} = 1536$, $S_{10} = 3069$. 3) $2600$. 4) $2046$. 5) Base $n=1$: $1 = 1$; paso: $k^2 + (2k+1) = (k+1)^2$. 6) $5/2$. 7) $24$ m (8 de bajada + $2 \cdot 8$ de rebotes). 8) $a_n = 2 \cdot 3^{n-1}$.

## Resumen
- Una sucesión asigna un número a cada posición; puede darse por término general o por recurrencia.
- PA: diferencia constante, $a_n = a_1 + (n-1)d$, suma $S_n = n(a_1+a_n)/2$.
- PG: razón constante, $a_n = a_1 r^{n-1}$; suma finita y serie infinita si $|r| < 1$.
- La notación sigma compacta y sus sumas notables son herramientas de cálculo.
- La inducción prueba afirmaciones sobre todos los naturales: base, hipótesis, paso.
- Sucesiones monótonas y acotadas convergen.
`,

  "polinomios": String.raw`
## ¿Qué es un polinomio?
Un **polinomio** es una suma de términos hechos de un número (llamado **coeficiente**) multiplicado por una letra (la **variable**) elevada a un exponente entero no negativo.

$$P(x) = 3x^{2} - 2x + 5$$

En este ejemplo hay tres términos: $3x^{2}$, $-2x$ y $5$. Los coeficientes son $3$, $-2$ y $5$. El **grado** es el mayor exponente de la variable: aquí es $2$. El término sin letra ($5$) es el **término constante**.

**¿Para qué sirven?** Los polinomios son las funciones más sencillas de manejar: describen curvas, áreas y volúmenes, y con ellos se modelan costos, trayectorias y muchos otros problemas.

## Cómo leer la notación
- $P(x)$ se lee "P de x" e indica que el valor de $P$ depende de $x$.
- $x^{2}$ significa $x \cdot x$, y $x^{3}$ significa $x \cdot x \cdot x$.
- $a_n$ es el **coeficiente líder**: el coeficiente del término de mayor exponente.
- $P(2)$ significa "reemplaza $x$ por $2$ en la fórmula".

## Evaluar un polinomio (básico)
Para evaluar solo hay que sustituir la variable por el número y hacer las operaciones.

**Ejemplo.** Si $P(x) = x^{2} + 3x - 1$, entonces:

$$P(2) = 2^{2} + 3 \cdot 2 - 1 = 4 + 6 - 1 = 9$$

## Suma y resta de polinomios
Se agrupan los **términos semejantes**: los que tienen la misma variable con el mismo exponente.

**Ejemplo.**

$$(2x^{2} + 3x - 1) + (x^{2} - 5x + 4) = (2x^{2} + x^{2}) + (3x - 5x) + (-1 + 4) = 3x^{2} - 2x + 3$$

## Multiplicación de polinomios
Se distribuye cada término del primero por todos los del segundo y luego se agrupan semejantes.

**Ejemplo.**

$$(x + 2)(x + 3) = x \cdot x + x \cdot 3 + 2 \cdot x + 2 \cdot 3 = x^{2} + 5x + 6$$

**Cuadrado de binomio** (muy frecuente):

$$(a + b)^{2} = a^{2} + 2ab + b^{2}$$

## División y regla de Ruffini
Dividir un polinomio entre $(x - c)$ es como dividir números: se obtiene un **cociente** y un **resto**.

La **regla de Ruffini** lo hace rápido con una tabla de coeficientes:
1. Escribe los coeficientes en orden (incluye un $0$ si falta un término).
2. Baja el primer coeficiente.
3. Multiplica por $c$, suma al siguiente, y repite.
4. El último número es el **resto**; los demás forman el **cociente**.

**Ejemplo.** Dividir $2x^{3} - 5x^{2} + 3x - 4$ entre $(x - 2)$:
- Coeficientes: $2$, $-5$, $3$, $-4$, con $c = 2$.
- Bajamos $2$; $2 \cdot 2 = 4$ y $4 + (-5) = -1$.
- $-1 \cdot 2 = -2$ y $-2 + 3 = 1$.
- $1 \cdot 2 = 2$ y $2 + (-4) = -2$.
- Resultado: cociente $2x^{2} - x + 1$, resto $-2$.

## Teorema del resto y teorema del factor
**Teorema del resto.** El resto de dividir $P(x)$ entre $(x - c)$ es simplemente $P(c)$: evalúa en vez de dividir.

**Teorema del factor.** $(x - c)$ es factor de $P(x)$ si y solo si $P(c) = 0$.

**Ejemplo.** Para $P(x) = x^{2} - 5x + 6$:
- $P(2) = 4 - 10 + 6 = 0$, por lo tanto $(x - 2)$ es factor.
- En efecto: $x^{2} - 5x + 6 = (x - 2)(x - 3)$.

## Factorización paso a paso
Factorizar es escribir el polinomio como producto de factores simples. Orden sugerido:

1. **Factor común.** $2x^{2} + 4x = 2x(x + 2)$.
2. **Diferencia de cuadrados.** $x^{2} - 9 = (x + 3)(x - 3)$.
3. **Trinomio de grado 2.** Busca dos números que sumen el coeficiente de $x$ y multipliquen el constante: $x^{2} - 5x + 6 = (x - 2)(x - 3)$.
4. **Ruffini.** Si el grado es mayor, encuentra una raíz con el teorema del factor y baja el grado con Ruffini.

## Raíces de un polinomio
Las **raíces** (o ceros) son los valores de $x$ donde $P(x) = 0$. Cada raíz $c$ corresponde al factor $(x - c)$.

**Ejemplo.** Las raíces de $x^{2} - 5x + 6$ son $2$ y $3$, porque $P(2) = 0$ y $P(3) = 0$.

## Relaciones de Vieta (avanzado)
Para un polinomio de grado 2, $x^{2} + bx + c$, con raíces $r_1$ y $r_2$:

$$r_1 + r_2 = -b, \qquad r_1 \cdot r_2 = c$$

Para grado 3, $x^{3} + bx^{2} + cx + d$, con raíces $r_1, r_2, r_3$:

$$r_1 + r_2 + r_3 = -b, \qquad r_1 r_2 + r_1 r_3 + r_2 r_3 = c, \qquad r_1 r_2 r_3 = -d$$

**Uso.** Sirve para construir polinomios con raíces dadas o para hallar una raíz conocidas las otras.

**Ejemplo.** Un polinomio con raíces $3$ y $-2$ es $x^{2} - x - 6$, porque $3 + (-2) = 1$ (así que $b = -1$) y $3 \cdot (-2) = -6$ (así que $c = -6$).

## Ejemplos resueltos
**Ejemplo 1 (evaluar).** Halla $P(-1)$ para $P(x) = 2x^{2} - 3x + 4$.
- $P(-1) = 2(1) - 3(-1) + 4 = 2 + 3 + 4 = 9$.

**Ejemplo 2 (multiplicar).** Desarrolla $(x + 4)(x - 2)$.
- $x^{2} - 2x + 4x - 8 = x^{2} + 2x - 8$.

**Ejemplo 3 (Ruffini).** Divide $x^{3} - 6x^{2} + 11x - 6$ entre $(x - 1)$.
- Coeficientes $1, -6, 11, -6$ con $c = 1$: bajamos $1$; $1 - 6 = -5$; $-5 + 11 = 6$; $6 - 6 = 0$.
- Cociente $x^{2} - 5x + 6$, resto $0$.

**Ejemplo 4 (factorizar).** Factoriza $x^{2} - x - 6$.
- Buscamos dos números que sumen $-1$ y multipliquen $-6$: son $2$ y $-3$.
- $x^{2} - x - 6 = (x + 2)(x - 3)$.

**Ejemplo 5 (raíces).** Halla las raíces de $x^{2} - 4x + 3$.
- Factorizamos: $(x - 1)(x - 3) = 0$.
- Raíces: $x = 1$ y $x = 3$.

## Errores comunes
- **Olvidar los términos con coeficiente cero** en Ruffini.
- **Confundir $(a + b)^{2}$ con $a^{2} + b^{2}$.** Falta el doble producto $2ab$.
- **Dividir entre una variable** (puedes perder la solución $x = 0$); factoriza en su lugar.
- **Confundir el teorema del resto con el del factor.** El del resto da el valor $P(c)$; el del factor exige $P(c) = 0$.
- **Errores de signo** al agrupar términos semejantes.

## Ejercicios propuestos
1. Evalúa $P(x) = x^{2} - 2x + 3$ en $x = 4$.
2. Suma $(3x^{2} - x + 2) + (x^{2} + 4x - 1)$.
3. Multiplica $(x + 5)(x + 2)$.
4. Desarrolla $(x - 3)^{2}$.
5. Divide $x^{3} + 2x^{2} - 5x - 6$ entre $(x - 2)$ con Ruffini.
6. ¿Es $x - 3$ factor de $x^{2} - x - 6$? Justifica con $P(3)$.
7. Factoriza $x^{2} - 7x + 12$.
8. Halla las raíces de $x^{2} - 9$.

**Respuestas:** 1) $11$. 2) $4x^{2} + 3x + 1$. 3) $x^{2} + 7x + 10$. 4) $x^{2} - 6x + 9$. 5) Cociente $x^{2} + 4x + 3$, resto $0$. 6) Sí, porque $P(3) = 9 - 3 - 6 = 0$. 7) $(x - 3)(x - 4)$. 8) $x = 3$ y $x = -3$.

## Resumen
- Un polinomio es una suma de términos de la forma "número por potencia de $x$"; su grado es el mayor exponente.
- Evaluar es sustituir; sumar es agrupar semejantes; multiplicar es distribuir.
- Ruffini divide entre $(x - c)$ de forma rápida.
- El teorema del resto dice que el resto es $P(c)$; el del factor dice que $P(c) = 0$ equivale a que $(x - c)$ sea factor.
- Factorizar y hallar raíces son la misma tarea: cada raíz $c$ da el factor $(x - c)$.
- Vieta relaciona suma y producto de raíces con los coeficientes.
`,

  "demostracion": String.raw`
## ¿Qué es demostrar en matemática?
Una **demostración** es una cadena de razonamientos que parte de definiciones, axiomas y hechos ya probados, y llega a una conclusión de manera inevitable. No es un argumento persuasivo: es una verificación lógica que cualquiera puede revisar paso a paso.

La estructura mínima de cualquier afirmación matemática es una **implicación**:
$$\text{si } P \text{ entonces } Q$$
donde $P$ es la hipótesis y $Q$ la tesis. Demostrar es conectar $P$ con $Q$ mediante pasos justificados.

Distinguir **condición necesaria** y **suficiente** es esencial:
- $P$ es suficiente para $Q$ si $P \Rightarrow Q$.
- $P$ es necesaria para $Q$ si $Q \Rightarrow P$ (es decir, sin $P$ no hay $Q$).
- "Si y solo si" ($P \Leftrightarrow Q$) significa ambas.

Confundirlas produce errores graves: probar la recíproca no prueba la afirmación original.

## El vocabulario lógico de las demostraciones
Los **cuantificadores** expresan alcance:
- $\forall$: "para todo" (universal).
- $\exists$: "existe" (existencial).

Una afirmación como "todo primo mayor que 2 es impar" se escribe $\forall p (p \text{ primo}, p > 2 \Rightarrow p \text{ impar})$.

**Negación de cuantificadores** (reglas de De Morgan cuantificacionales):
$$\neg(\forall x\, P(x)) \equiv \exists x\, \neg P(x)$$
$$\neg(\exists x\, P(x)) \equiv \forall x\, \neg P(x)$$

Negar "todos los números son pares" da "existe un número que no es par". Negar "existe un múltiplo de 7" da "ningún número es múltiplo de 7".

**Contraejemplo.** Para refutar $\forall x\, P(x)$ basta un solo $x$ con $\neg P(x)$. La afirmación "todo primo es impar" se refuta con $2$. Un ejemplo no prueba una afirmación universal, pero un contraejemplo la destruye.

## Demostración directa
La estrategia más natural: supón la hipótesis y avanza hasta la tesis aplicando definiciones y teoremas.

**Ejemplo.** Demostrar que la suma de dos números pares es par.
- Hipótesis: $a$ y $b$ son pares, es decir $a = 2m$ y $b = 2n$ para enteros $m, n$.
- Suma: $a + b = 2m + 2n = 2(m + n)$.
- Como $m + n$ es entero, $a + b$ es par. $\blacksquare$

La clave de la demostración directa es **traducir cada palabra a su definición** y combinar algebraicamente. La definición de par no es "lo que termina en 0, 2, 4, 6, 8": es "es $2$ por un entero".

## Demostración por contrapositiva
La **contrapositiva** de $P \Rightarrow Q$ es $\neg Q \Rightarrow \neg P$. Ambas son lógicamente equivalentes: probar una prueba la otra. Se usa cuando la hipótesis es difícil de manipular pero su negación es simple.

**Ejemplo.** Si $n^2$ es par, entonces $n$ es par.
- Contrapositiva: si $n$ es impar, entonces $n^2$ es impar.
- Supón $n$ impar: $n = 2k + 1$.
- Entonces $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, que es impar. $\blacksquare$

Sin contrapositiva, probar directamente "si $n^2$ es par entonces $n$ es par" es incómodo: tomar raíz cuadrada no da información directa sobre la paridad.

**Advertencia.** La contrapositiva NO es lo mismo que la recíproca. La recíproca de $P \Rightarrow Q$ es $Q \Rightarrow P$, y no es equivalente.

## Demostración por contradicción (reducción al absurdo)
Para probar $P \Rightarrow Q$ por contradicción, supón $P$ verdadera y $Q$ falsa, y deriva una imposibilidad (una contradicción con un hecho conocido o con la propia hipótesis).

**Ejemplo clásico.** $\sqrt{2}$ es irracional.
- Supón lo contrario: $\sqrt{2} = a/b$ con $a, b$ enteros sin factores comunes.
- Elevando al cuadrado: $2 = a^2/b^2$, es decir $a^2 = 2b^2$.
- Entonces $a^2$ es par, y por el resultado anterior $a$ es par: $a = 2k$.
- Sustituyendo: $4k^2 = 2b^2$, es decir $b^2 = 2k^2$; entonces $b$ también es par.
- Pero $a$ y $b$ no podían tener factores comunes. Contradicción. $\blacksquare$

El método es poderoso porque convierte una afirmación negativa ("no es racional") en un cálculo.

## Inducción matemática
Para afirmaciones indexadas por los naturales, la inducción es el método estándar:

1. **Base:** verifica el caso inicial $n_0$.
2. **Hipótesis:** supón $P(k)$ cierta.
3. **Paso:** demuestra $P(k+1)$ usando $P(k)$.

**Ejemplo.** Demostrar que $2^n > n$ para todo $n \geq 1$.
- Base $n = 1$: $2^1 = 2 > 1$. Correcto.
- Hipótesis: $2^k > k$.
- Paso: $2^{k+1} = 2 \cdot 2^k > 2k = k + k \geq k + 1$ para $k \geq 1$. Correcto.
- Conclusión: vale para todo $n \geq 1$.

**Inducción fuerte:** se supone válido para todos los valores menores o iguales que $k$. Se usa en Fibonacci y en el teorema fundamental de la aritmética.

## Disyunción de casos y doble implicación
**Prueba por casos.** Cuando las hipótesis se dividen naturalmente, se prueba cada caso por separado. Ejemplo: todo entero es par o impar; probar una propiedad en ambos casos.

**Doble implicación.** Para probar $P \Leftrightarrow Q$ se demuestran las dos direcciones:
1. $P \Rightarrow Q$ (ida).
2. $Q \Rightarrow P$ (vuelta).

A veces se encadena con equivalencias: $P \Leftrightarrow R_1 \Leftrightarrow R_2 \Leftrightarrow Q$.

**Ejemplo.** $n$ es par si y solo si $n^2$ es par.
- Ida: si $n = 2k$, entonces $n^2 = 4k^2 = 2(2k^2)$ es par.
- Vuelta: probada arriba por contrapositiva. $\blacksquare$

## Cómo elegir la técnica correcta
1. **Escribe con precisión** la hipótesis y la tesis, con cuantificadores explícitos.
2. Si la tesis es una igualdad con $n$ natural, considera inducción.
3. Si la hipótesis es simple pero la negación de la tesis es manejable, prueba contrapositiva.
4. Si la afirmación es negativa o de imposibilidad ("no existe", "no es posible"), usa contradicción.
5. Si la hipótesis tiene casos naturales, divide en casos.
6. Si sospechas que la afirmación es falsa, busca un contraejemplo antes de gastar tiempo.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, demostración directa).** Demuestra que la suma de dos impares es par.
- Sean $a = 2m + 1$ y $b = 2n + 1$.
- $a + b = 2m + 2n + 2 = 2(m + n + 1)$.
- Es $2$ por un entero: la suma es par. $\blacksquare$

**Ejemplo 2 (práctica, contrapositiva).** Si $3n + 2$ es impar, entonces $n$ es impar.
- Contrapositiva: si $n$ es par, $n = 2k$, entonces $3n + 2 = 6k + 2 = 2(3k + 1)$.
- $2(3k+1)$ es par: la contrapositiva vale, y con ella la afirmación original. $\blacksquare$

**Ejemplo 3 (práctica, contradicción).** $\sqrt{3}$ es irracional.
- Supón $\sqrt{3} = a/b$ con $a, b$ sin factores comunes.
- $3b^2 = a^2$ obliga a $a$ a ser múltiplo de 3: $a = 3k$.
- Entonces $3b^2 = 9k^2 \Rightarrow b^2 = 3k^2$: $b$ también es múltiplo de 3.
- Contradice que no tuvieran factores comunes. $\blacksquare$

**Ejemplo 4 (práctica, inducción).** Prueba que $3^n - 1$ es divisible por $2$ para todo $n \geq 1$.
- Base $n = 1$: $3 - 1 = 2$, divisible. Correcto.
- Hipótesis: $3^k - 1 = 2m$.
- Paso: $3^{k+1} - 1 = 3 \cdot 3^k - 1 = 3(2m + 1) - 1 = 6m + 2 = 2(3m + 1)$, divisible por 2. $\blacksquare$

**Ejemplo 5 (práctica, por casos).** Para todo entero $n$, $n^2 + n$ es par.
- Caso 1: $n$ par, $n = 2k$: $n^2 + n = 4k^2 + 2k = 2(2k^2 + k)$, par.
- Caso 2: $n$ impar, $n = 2k+1$: $n(n+1)$ tiene un factor par, así que el producto es par. $\blacksquare$

**Ejemplo 6 (aplicación, contraejemplo).** La afirmación "todo número primo es impar" es falsa.
- Basta un caso: $2$ es primo y es par.
- Un solo contraejemplo destruye una afirmación universal.

## Contextos donde se aplica
- **Toda la matemática:** no hay teorema sin demostración; es el estándar de verdad de la disciplina.
- **Ciencias de la computación:** verificar programas y probar corrección de algoritmos usa inducción e invariantes.
- **Ingeniería y física:** los modelos se apoyan en teoremas demostrados; entender la demostración evita malinterpretar las condiciones.
- **Formación del pensamiento:** demostrar entrena la argumentación rigurosa, útil en derecho, filosofía y debate.
- **Inteligencia artificial:** los teoremas de imposibilidad y los límites formales usan estas técnicas.

## Errores comunes y cómo evitarlos
- **Probar la recíproca.** $P \Rightarrow Q$ no es $Q \Rightarrow P$. Si pruebas la vuelta, prueba la ida también.
- **Usar lo que se quiere probar (petición de principio).** Cada paso debe apoyarse en hechos ya establecidos, no en la tesis.
- **Confundir necesario con suficiente.** "Si $x > 2$ entonces $x > 0$" es cierto; la recíproca no.
- **Generalizar desde ejemplos.** Que $3^2 + 4^2 = 5^2$ no prueba nada sobre todos los triángulos.
- **Olvidar la base de la inducción.** Sin base no hay cadena.
- **Saltos no justificados.** Cada igualdad y cada implicación merece una razón; el lector no debe adivinarla.

## Ejercicios propuestos
1. Demuestra directamente que la suma de dos impares es par.
2. Demuestra por contrapositiva: si $3n + 2$ es impar, entonces $n$ es impar.
3. Demuestra por contradicción que $\sqrt{3}$ es irracional.
4. Prueba por inducción: $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$.
5. Prueba por inducción: $3^n - 1$ es divisible entre 2 para todo $n \geq 1$.
6. Prueba la doble implicación: $n$ es impar si y solo si $n^2$ es impar.
7. Busca un contraejemplo: "todo número primo es impar".
8. Prueba por casos: para todo entero $n$, $n^2 + n$ es par.

**Respuestas (bosquejos):** 1) $a = 2m+1$, $b = 2n+1$, suma $= 2(m+n+1)$. 2) Contrapositiva: si $n$ es par, $3n+2$ es par (suma de par y par). 3) Análoga a la de $\sqrt{2}$: $3b^2 = a^2$ obliga a $a$ y $b$ a ser múltiplos de 3. 4) Base $n=1$: $1 = 1$; paso: sumar $(k+1)^2$ y factorizar. 5) $3^{k+1} - 1 = 3(3^k - 1) + 2$; ambos términos pares. 6) Ida y vuelta por contrapositiva/inducción directa. 7) $2$. 8) Si $n$ par, $n(n+1)$ par; si $n$ impar, $n+1$ par y el producto también.

## Resumen
- Demostrar es construir una cadena lógica de hipótesis a tesis.
- Cuantificadores y sus negaciones son el vocabulario base; un contraejemplo refuta un universal.
- Técnicas principales: directa, contrapositiva, contradicción, casos, inducción y doble implicación.
- La contrapositiva prueba la misma afirmación; la recíproca no.
- La inducción necesita base, hipótesis y paso; la inducción fuerte usa todos los casos previos.
- Elegir la técnica correcta ahorra la mitad del trabajo; escribir con precisión, la otra mitad.
`,

  "operaciones-combinadas": String.raw`
## ¿Qué son las operaciones combinadas?
Una expresión con operaciones combinadas mezcla sumas, restas, productos, cocientes, potencias y raíces, a veces con paréntesis. Resolverla exige un **orden fijo**: cambiar el orden cambia el resultado.

Por eso importa la convención: $2 + 3 \times 4 = 14$, pero operar de izquierda a derecha sin reglas daría $20$. La jerarquía elimina la ambigüedad.

## Jerarquía de las operaciones
De mayor a menor prioridad:
1. Paréntesis, corchetes y llaves (de dentro hacia fuera).
2. Potencias y raíces.
3. Multiplicaciones y divisiones, de izquierda a derecha.
4. Sumas y restas, de izquierda a derecha.

$$3 + 4 \times 2^2 = 3 + 4 \times 4 = 3 + 16 = 19$$

**Ejemplo.** $20 \div 4 \times 5$: como multiplicación y división tienen igual prioridad, se resuelve de izquierda a derecha: $(20 \div 4) \times 5 = 25$, no $20 \div 20 = 1$.

## Signos, opuestos y valor absoluto
- Un menos delante de un paréntesis cambia todos los signos internos: $-(a - b) = -a + b$.
- Signos en producto y cociente: $(-)(-) = +$ y $(-)(+) = -$.
- El **valor absoluto** $|x|$ es la distancia al cero y nunca es negativo.

$$|{-5}| = 5, \qquad -|{-5}| = -5, \qquad |-3 + 8| = 5$$

**Ejemplo.** $8 - (3 - 10) = 8 - (-7) = 8 + 7 = 15$.

## Paréntesis y corchetes anidados
Se resuelven de dentro hacia fuera: primero el paréntesis interno, luego el corchete y la llave.

$$2\big[5 + 3(4 - 1)\big] = 2[5 + 3 \times 3] = 2[5 + 9] = 28$$

**Ejemplo.** $10 - \{3 + 2[4 - (1 + 1)]\} = 10 - \{3 + 2[4 - 2]\} = 10 - \{3 + 4\} = 3$.

## Fracciones dentro de expresiones
Una fracción es una división y la barra actúa como paréntesis. Para sumar hace falta común denominador.

$$\frac{3}{4} + \frac{1}{6} = \frac{9}{12} + \frac{2}{12} = \frac{11}{12}$$

**Ejemplo.** $\dfrac{2 + 4}{3} \times 5 = \dfrac{6}{3} \times 5 = 2 \times 5 = 10$, no $2 + \frac{4}{3} \times 5$.

## Potencias y raíces combinadas
- Potencia: $a^n$ multiplica $a$ por sí mismo $n$ veces.
- Raíz: $\sqrt{a}$ es el número que al cuadrado da $a$.
- Signos: $(-2)^2 = 4$, pero $-2^2 = -4$; la potencia afecta solo al $2$.
- Exponente negativo: $a^{-n} = \dfrac{1}{a^n}$.

$$(-3)^2 + \sqrt{25} - 2^3 = 9 + 5 - 8 = 6$$

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica).** $12 + 3 \times (8 - 5)^2 \div 3$.
- Paréntesis y potencia: $(8-5)^2 = 9$.
- $12 + 3 \times 9 \div 3 = 12 + 27 \div 3 = 12 + 9 = 21$.

**Ejemplo 2 (práctica).** $5 - 2[3 - (4 - 6)]$.
- Interior: $4 - 6 = -2$; $3 - (-2) = 5$; $2 \times 5 = 10$.
- $5 - 10 = -5$.

**Ejemplo 3 (práctica).** $\dfrac{3}{4} \div \dfrac{9}{8} + 2$.
- Dividir es multiplicar por el inverso: $\frac{3}{4} \times \frac{8}{9} = \frac{2}{3}$.
- $\frac{2}{3} + 2 = \frac{8}{3}$.

**Ejemplo 4 (aplicación, compras).** Compras 3 cuadernos de 2500 y 2 lapiceros de 800, con $10\%$ de descuento.
- Subtotal: $3 \times 2500 + 2 \times 800 = 9100$.
- Total: $9100 \times 0.9 = 8190$.

**Ejemplo 5 (aplicación, física).** Con $a = 10$ y $t = 4$, calcula $d = \frac{1}{2} a t^2$.
- $t^2 = 16$; $\frac{1}{2} \times 10 \times 16 = 80$ m.

**Ejemplo 6 (práctica).** $\dfrac{(-2)^3 + 4 \times 3}{5 - 7}$.
- Numerador: $-8 + 12 = 4$; denominador: $-2$.
- Resultado: $-2$.

## Contextos donde se aplica
- Finanzas: totales con descuentos e impuestos.
- Física: fórmulas de cinemática y energía.
- Programación: precedencia de operadores al evaluar expresiones.
- Ingeniería: dimensiones y conversión de unidades.

## Errores comunes
- Operar de izquierda a derecha sin respetar prioridades.
- Creer que $20 \div 4 \times 5 = 1$; el resultado correcto es $25$.
- Confundir $-3^2 = -9$ con $(-3)^2 = 9$.
- No cambiar los signos al quitar un paréntesis precedido de menos.
- Olvidar el común denominador al sumar fracciones.

## Ejercicios propuestos
1. $8 + 2(5 - 3)^2$
2. $18 \div 3 \times 2 - 4$
3. $6 - \{4 + 2[3 - (1 + 1)]\}$
4. $\frac{5}{6} + \frac{1}{3} \times \frac{1}{2}$
5. $(-2)^3 + \sqrt{16} \times 2$
6. $\dfrac{3 + 5 \times 2}{4 - 6}$

**Respuestas:** 1) $16$. 2) $8$. 3) $0$. 4) $1$. 5) $0$. 6) $-6.5$.

## Resumen
- El orden es: paréntesis, potencias y raíces, multiplicación y división, suma y resta.
- Multiplicación y división comparten nivel y se resuelven de izquierda a derecha.
- Un menos delante de un paréntesis invierte los signos internos.
- La barra de fracción agrupa como un paréntesis.
- Distinguir $-a^2$ de $(-a)^2$ evita la mitad de los errores.
`,

  "ecuaciones": String.raw`
## ¿Qué es una ecuación?
Una **ecuación** es una igualdad entre dos expresiones que puede ser verdadera o falsa según el valor de la incógnita. **Resolverla** es hallar los valores que la hacen verdadera (las **soluciones**).

$$3x + 2 = 11$$

Aquí $x = 3$ es solución porque $3(3) + 2 = 11$. Una ecuación lineal tiene una solución; una cuadrática, hasta dos; otras no tienen solución real.

## Propiedades de la igualdad
La igualdad es una balanza: lo que se hace a un lado se hace al otro.
- Sumar o restar lo mismo en ambos lados.
- Multiplicar o dividir ambos lados por lo mismo, con divisor distinto de cero.
- Elevar al cuadrado puede introducir **soluciones falsas**: hay que verificar.

**Verificar** sustituyendo en la ecuación original es parte del método, no un extra.

## Ecuaciones lineales
Forma $ax + b = 0$ con $a \neq 0$. Método:
1. Elimina paréntesis y denominadores.
2. Agrupa las incógnitas en un lado y los números en el otro.
3. Reduce y despeja.
4. Verifica.

**Ejemplo.** $5(x - 1) = 3x + 7$.
- $5x - 5 = 3x + 7$.
- $5x - 3x = 7 + 5 \Rightarrow 2x = 12 \Rightarrow x = 6$.
- Verificación: $5(5) = 25$ y $3(6) + 7 = 25$.

## Ecuaciones con fracciones
Multiplica por el mínimo común múltiplo de los denominadores para eliminarlas.

**Ejemplo.** $\dfrac{x}{2} + \dfrac{x}{3} = 5$.
- MCM $= 6$: $3x + 2x = 30$.
- $5x = 30 \Rightarrow x = 6$.
- Verificación: $3 + 2 = 5$.

## Ecuaciones cuadráticas
Forma $ax^2 + bx + c = 0$. Tres caminos:
1. **Factorización:** $(x - 2)(x - 3) = 0 \Rightarrow x = 2$ o $x = 3$.
2. **Fórmula general:**
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
3. **Completar el cuadrado.**

El **discriminante** $\Delta = b^2 - 4ac$ decide: $\Delta > 0$ dos soluciones reales; $\Delta = 0$ una doble; $\Delta < 0$ dos complejas conjugadas.

**Ejemplo.** $x^2 - 5x + 6 = 0$: $\Delta = 1$; $x = \frac{5 \pm 1}{2}$, es decir $x = 3$ y $x = 2$.

## Ecuaciones con radicales
Aísla la raíz y eleva al cuadrado; repite si hay más de una. Verifica siempre, porque elevar puede crear soluciones extrañas.

**Ejemplo.** $\sqrt{x + 5} = x - 1$.
- Eleva: $x + 5 = x^2 - 2x + 1 \Rightarrow x^2 - 3x - 4 = 0$.
- Raíces: $x = 4$ y $x = -1$.
- Verifica: $x = 4$ cumple $\sqrt{9} = 3$; $x = -1$ da $\sqrt{4} = 2 \neq -2$.
- Solución: $x = 4$.

## Ecuaciones con valor absoluto
$|A| = k$ con $k \geq 0$ significa $A = k$ o $A = -k$.

**Ejemplo.** $|2x - 1| = 7$.
- $2x - 1 = 7 \Rightarrow x = 4$.
- $2x - 1 = -7 \Rightarrow x = -3$.
- Soluciones: $x = 4$ y $x = -3$.

## Sistemas de dos ecuaciones
Métodos: sustitución, eliminación e igualación.

**Ejemplo.** $\begin{cases} x + y = 10 \\ 2x - y = 2 \end{cases}$.
- Suma las ecuaciones: $3x = 12 \Rightarrow x = 4$; entonces $y = 6$.
- Verificación: $4 + 6 = 10$ y $8 - 6 = 2$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, lineal).** $4(x + 2) = 3x + 11$.
- $4x + 8 = 3x + 11 \Rightarrow x = 3$.

**Ejemplo 2 (práctica, fracciones).** $\dfrac{2x}{3} - 1 = \dfrac{x}{6} + 2$.
- MCM $6$: $4x - 6 = x + 12$.
- $3x = 18 \Rightarrow x = 6$.

**Ejemplo 3 (práctica, cuadrática).** $2x^2 - 4x - 6 = 0$.
- Divide entre $2$: $x^2 - 2x - 3 = 0$.
- $(x - 3)(x + 1) = 0 \Rightarrow x = 3$ o $x = -1$.

**Ejemplo 4 (aplicación, edades).** La edad de Ana es el doble de la de Beto; hace 5 años sumaban 20.
- Hoy: Ana $2b$, Beto $b$; hace 5 años: $(2b - 5) + (b - 5) = 20$.
- $3b - 10 = 20 \Rightarrow b = 10$: Ana tiene 20 y Beto 10.

**Ejemplo 5 (aplicación, física).** Un móvil parte con $v_0 = 2$ m/s y acelera a $4$ m/s$^2$. ¿Cuándo recorre 30 m?
- $s = v_0t + \frac{1}{2}at^2$: $30 = 2t + 2t^2$.
- $t^2 + t - 15 = 0 \Rightarrow t = \frac{-1 + \sqrt{61}}{2} \approx 3.4$ s; se descarta la raíz negativa.

**Ejemplo 6 (aplicación, dinero).** Por 3 entradas de adulto y 2 de niño se pagaron 130; la de adulto cuesta 10 más que la de niño.
- Niño $n$, adulto $n + 10$: $3(n + 10) + 2n = 130$.
- $5n + 30 = 130 \Rightarrow n = 20$: niño 20 y adulto 30.

## Contextos donde se aplica
- Física: tiempo, distancia y velocidad.
- Economía: puntos de equilibrio y máximos de beneficio.
- Geometría: dimensiones que cumplen un área o perímetro dados.
- Programación: despeje de parámetros y validaciones.

## Errores comunes
- No verificar, sobre todo tras elevar al cuadrado.
- Dividir por una expresión que puede ser cero.
- Errores de signo al pasar términos de un lado a otro.
- Usar la fórmula cuadrática sin ordenar primero la ecuación.
- No descartar soluciones fuera del dominio o del contexto.

## Ejercicios propuestos
1. $7x - 3 = 4x + 9$
2. $\frac{x}{4} + 2 = \frac{x}{2} - 1$
3. $x^2 - 9 = 0$
4. $x^2 + 2x - 15 = 0$
5. $\sqrt{x + 3} = x + 1$
6. $|3x - 2| = 8$

**Respuestas:** 1) $x = 4$. 2) $x = 12$. 3) $x = \pm 3$. 4) $x = 3$ o $x = -5$. 5) $x = 1$. 6) $x = \frac{10}{3}$ o $x = -2$.

## Resumen
- Resolver una ecuación es hallar los valores que la satisfacen; verifica siempre.
- Las lineales se despejan; las cuadráticas usan factorización o fórmula general.
- El discriminante decide cuántas soluciones reales hay.
- Radicales y valor absoluto exigen aislar y desdoblar, con verificación.
- Los sistemas se resuelven por sustitución o eliminación.
`,

  "inecuaciones": String.raw`
## ¿Qué es una inecuación?
Una **inecuación** es una desigualdad con incógnita: $x + 3 > 7$, $2x \leq 10$, $x^2 - 4 < 0$. Su solución no es un número, sino un **conjunto** de números que se expresa como **intervalo**.

## Reglas y el cambio de sentido
- Sumar o restar lo mismo en ambos lados no cambia el sentido.
- Multiplicar o dividir por un número positivo no cambia el sentido.
- Multiplicar o dividir por un número **negativo** **invierte** el sentido.

$$-2x > 6 \Rightarrow x < -3$$

## Inecuaciones lineales
Método idéntico al de las ecuaciones, cuidando el signo.

**Ejemplo.** $3x - 5 \leq 7$.
- $3x \leq 12 \Rightarrow x \leq 4$.
- Solución: $(-\infty, 4]$.

**Ejemplo.** $5 - 2x < 1$.
- $-2x < -4 \Rightarrow x > 2$.
- Solución: $(2, \infty)$.

## Notación de intervalos
- $[a, b]$: cerrado, incluye los extremos.
- $(a, b)$: abierto, los excluye.
- $[a, \infty)$ y $(-\infty, b]$: semirrectas.
- Con $\pm\infty$ se usa siempre paréntesis.

## Inecuaciones cuadráticas
1. Lleva todo a un lado y factoriza.
2. Halla las raíces.
3. Analiza el signo por intervalos con una tabla de signos.

**Ejemplo.** $x^2 - x - 6 < 0$.
- Factoriza: $(x - 3)(x + 2) < 0$.
- Raíces: $x = -2$ y $x = 3$; el producto es negativo entre ellas.
- Solución: $(-2, 3)$.

**Ejemplo.** $x^2 \geq 9$.
- $x^2 - 9 \geq 0 \Rightarrow (x - 3)(x + 3) \geq 0$.
- Solución: $(-\infty, -3] \cup [3, \infty)$.

## Inecuaciones con valor absoluto
- $|A| < k \iff -k < A < k$: un intervalo.
- $|A| > k \iff A > k$ o $A < -k$: dos rayos.
- Si $k < 0$: $|A| < k$ no tiene solución y $|A| > k$ se cumple siempre.

**Ejemplo.** $|2x - 6| \leq 4$.
- $-4 \leq 2x - 6 \leq 4 \Rightarrow 2 \leq 2x \leq 10 \Rightarrow 1 \leq x \leq 5$.
- Solución: $[1, 5]$.

## Inecuaciones racionales
Lleva todo a un lado, factoriza numerador y denominador y analiza el signo. El denominador **nunca** puede ser cero.

**Ejemplo.** $\dfrac{x - 1}{x + 2} > 0$.
- Puntos críticos: $x = 1$ y $x = -2$ (excluido).
- La expresión es positiva en $(-\infty, -2)$ y en $(1, \infty)$.
- Solución: $(-\infty, -2) \cup (1, \infty)$.

## Sistemas de inecuaciones
Se resuelven por separado y se **intersectan** las soluciones.

**Ejemplo.** $\begin{cases} 2x - 1 > 3 \\ x + 4 \leq 10 \end{cases}$.
- Primera: $x > 2$; segunda: $x \leq 6$.
- Solución: $(2, 6]$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, lineal).** $4x + 3 < 2x + 11$.
- $2x < 8 \Rightarrow x < 4$.
- Solución: $(-\infty, 4)$.

**Ejemplo 2 (práctica, cambio de sentido).** $7 - 3x \geq 1$.
- $-3x \geq -6 \Rightarrow x \leq 2$.
- Solución: $(-\infty, 2]$.

**Ejemplo 3 (práctica, cuadrática).** $x^2 + x - 12 > 0$.
- $(x + 4)(x - 3) > 0$; positiva fuera de las raíces.
- Solución: $(-\infty, -4) \cup (3, \infty)$.

**Ejemplo 4 (práctica, valor absoluto).** $|x - 3| > 5$.
- $x - 3 > 5$ o $x - 3 < -5$.
- Solución: $(-\infty, -2) \cup (8, \infty)$.

**Ejemplo 5 (aplicación, presupuesto).** Tienes 50 y cada café cuesta 4. ¿Cuántos puedes comprar para que te queden al menos 18?
- $50 - 4x \geq 18 \Rightarrow -4x \geq -32 \Rightarrow x \leq 8$.
- Hasta 8 cafés.

**Ejemplo 6 (aplicación, tolerancia).** Una pieza debe medir 20 mm con error máximo de 0.3 mm. Expresa el rango válido.
- $|x - 20| \leq 0.3 \Rightarrow 19.7 \leq x \leq 20.3$.
- Solución: $[19.7, 20.3]$.

## Contextos donde se aplica
- Economía: presupuestos y umbrales de rentabilidad.
- Ingeniería: tolerancias, rangos válidos y estabilidad.
- Salud: dosis seguras y valores de referencia.
- Programación: validaciones y condiciones de rango.

## Errores comunes
- No invertir el sentido al multiplicar o dividir por un negativo.
- Incluir puntos donde el denominador se anula.
- Usar corchetes con $\pm\infty$.
- Olvidar el análisis de signos en cuadráticas y racionales.
- Confundir $|A| < k$ (intervalo) con $|A| > k$ (dos rayos).

## Ejercicios propuestos
1. $5x - 2 \leq 13$
2. $-3x + 1 > 10$
3. $x^2 - 4x \geq 0$
4. $|x + 1| < 3$
5. $\frac{x - 2}{x + 1} \leq 0$
6. $\begin{cases} x + 1 > 0 \\ 2x \leq 8 \end{cases}$

**Respuestas:** 1) $(-\infty, 3]$. 2) $(-\infty, -3)$. 3) $(-\infty, 0] \cup [4, \infty)$. 4) $(-4, 2)$. 5) $(-1, 2]$. 6) $(-1, 4]$.

## Resumen
- Una inecuación tiene por solución un intervalo o una unión de intervalos.
- Multiplicar o dividir por un negativo invierte el sentido.
- Las cuadráticas y racionales se resuelven con análisis de signos.
- El valor absoluto se desdobla: intervalo si es menor, dos rayos si es mayor.
- Los sistemas se intersectan.
`
};
