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

## Gráficas de expresiones y funciones

Las expresiones algebraicas se visualizan con gráficas. Las más frecuentes son:

- La **recta** $y = 2x + 1$: pendiente $2$ y corte con el eje $y$ en $1$.
- La **parábola** $y = x^2$: mínimo en el vértice $(0, 0)$.
- El **valor absoluto** $y = |x|$: forma de V con vértice en el origen.

:::fig func f=2*x+1 xmin=-5 xmax=5 label=y%20%3D%202x%2B1 caption=Función%20afín%3A%20%24y%3D2x%2B1%24

:::fig func f=x^2 xmin=-4 xmax=4 label=y%20%3D%20x%C2%B2 caption=Parábola%3A%20%24y%3Dx%5E2%24

:::fig func f=abs(x) xmin=-4 xmax=4 label=y%20%3D%20%7Cx%7C caption=Valor%20absoluto%3A%20%24y%3D%7Cx%7C%24

Estas gráficas ayudan a entender qué significa factorizar: cada raíz real de la expresión es un corte con el eje $x$.

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

## Límite de una sucesión
Una sucesión **converge** a $L$ si sus términos se acercan a $L$ tanto como queramos para $n$ suficientemente grande. Se escribe $\lim_{n\to\infty} a_n = L$.

Formalmente: para todo $\varepsilon > 0$ existe $N$ tal que si $n > N$ entonces $|a_n - L| < \varepsilon$.

**Reglas prácticas:**
- Una PG converge a $0$ si $|r| < 1$; diverge si $|r| > 1$; es constante si $r = 1$.
- En un cociente de polinomios, manda el grado mayor: $\frac{3n^2 + n}{2n^2 - 5} \to \frac{3}{2}$.
- El término general de una serie convergente siempre tiende a cero (el recíproco es falso).

Una sucesión **monótona y acotada** siempre converge: es el teorema de convergencia monótona, una consecuencia del axioma del supremo.

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
- **Suponer convergencia por "los términos se ven pequeños".** Hay que verificarlo; la serie armónica diverge aunque $1/n \to 0$.

## Ejercicios propuestos
1. En la PA $5, 9, 13, \ldots$ halla $a_{20}$ y $S_{20}$.
2. En la PG $3, 6, 12, \ldots$ halla $a_{10}$ y $S_{10}$.
3. Calcula $\sum_{k=1}^{50} (2k + 1)$.
4. Calcula $\sum_{k=1}^{10} 2^k$.
6. Halla el límite de $a_n = \frac{5n^2 - 3}{2n^2 + n}$.
7. Una pelota cae desde 8 m y rebota a la mitad de la altura cada vez. ¿Distancia total recorrida?
8. Resuelve la recurrencia $a_n = 3a_{n-1}$, $a_1 = 2$.

**Respuestas:** 1) $a_{20} = 81$, $S_{20} = 860$. 2) $a_{10} = 1536$, $S_{10} = 3069$. 3) $2600$. 4) $2046$. 5) Base $n=1$: $1 = 1$; paso: $k^2 + (2k+1) = (k+1)^2$. 6) $5/2$. 7) $24$ m (8 de bajada + $2 \cdot 8$ de rebotes). 8) $a_n = 2 \cdot 3^{n-1}$.

## Resumen
- Una sucesión asigna un número a cada posición; puede darse por término general o por recurrencia.
- PA: diferencia constante, $a_n = a_1 + (n-1)d$, suma $S_n = n(a_1+a_n)/2$.
- PG: razón constante, $a_n = a_1 r^{n-1}$; suma finita y serie infinita si $|r| < 1$.
- La notación sigma compacta y sus sumas notables son herramientas de cálculo.
- Sucesiones monótonas y acotadas convergen.
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
