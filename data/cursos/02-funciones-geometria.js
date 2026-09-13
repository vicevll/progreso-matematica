window.CURSOS = window.CURSOS || {};
window.CURSOS["funciones-geometria"] = {
  "funciones": String.raw`
## ¿Qué es una función?
Una **función** es una regla que asigna a cada valor de entrada **exactamente un** valor de salida. Es el concepto central que describe cómo una cantidad depende de otra.

La notación $f: A \to B$ indica que $f$ toma valores de $A$ (dominio) y produce valores en $B$ (codominio). Escribimos $y = f(x)$: $x$ es la variable independiente, $y$ la dependiente.

Una función no es una fórmula: es la regla completa, incluidos dominio y codominio. $f(x) = x^2$ con dominio $\mathbb{R}$ y $f(x) = x^2$ con dominio $[0, \infty)$ son funciones distintas aunque compartan la fórmula.

La condición "exactamente un" es la clave: una recta vertical puede cortar la gráfica en un punto a lo sumo.

## Representaciones de una función
Una misma función admite cuatro representaciones, y saber pasar de una a otra es una habilidad central:

1. **Verbal:** "a cada número se le asigna su doble más uno".
2. **Algebraica:** $f(x) = 2x + 1$.
3. **Tabla de valores:** pares $(x, f(x))$.
4. **Gráfica:** el conjunto de puntos $(x, f(x))$ en el plano.

**Ejemplo.** Sea $f(x) = x^2 - 1$. Tabla: $f(-2) = 3$, $f(-1) = 0$, $f(0) = -1$, $f(1) = 0$, $f(2) = 3$. La gráfica es una parábola que abre hacia arriba con vértice en $(0, -1)$.

Pasar de fórmula a gráfica es "dibujar la regla"; de gráfica a fórmula es modelar. Ambas direcciones se practican.

## Dominio, codominio y rango
El **dominio** es el conjunto de entradas permitidas; el **rango** (o imagen) es el conjunto de salidas realmente alcanzadas.

Para hallar el dominio de una fórmula, identifica las operaciones prohibidas:
- **División por cero:** en $f(x) = \frac{1}{x - 2}$, el dominio es $\mathbb{R} \setminus \{2\}$.
- **Raíces pares de negativos:** en $f(x) = \sqrt{x - 3}$, el dominio es $[3, \infty)$.
- **Logaritmos de no positivos:** en $f(x) = \ln(x + 1)$, el dominio es $(-1, \infty)$.

Para el rango, despeja $x$ en función de $y$ y analiza qué valores de $y$ admiten solución, o usa la gráfica.

**Ejemplo.** $f(x) = \sqrt{4 - x^2}$: el radicando debe ser no negativo, $-2 \leq x \leq 2$; el rango es $[0, 2]$ porque la raíz nunca es negativa y el máximo es $2$ en $x = 0$.

## La prueba de la recta vertical
Una gráfica representa una función si y solo si **ninguna recta vertical la corta más de una vez**. Si una entrada $x$ tuviera dos salidas, la recta vertical en ese $x$ cortaría dos puntos.

La circunferencia $x^2 + y^2 = 1$ no es función: para $x = 0$ hay dos valores $y = \pm 1$. La parábola $y = x^2$ sí lo es.

Esta prueba es la versión gráfica de la definición: un solo valor de salida por cada entrada.

## Funciones básicas y sus gráficas
Estas funciones son los ladrillos de todas las demás; conviene reconocerlas al instante:

- **Constante:** $f(x) = c$; recta horizontal.
- **Lineal:** $f(x) = mx + b$; recta con pendiente $m$.
- **Cuadrática:** $f(x) = ax^2 + bx + c$; parábola; vértice en $x = -b/(2a)$.
- **Cúbica:** $f(x) = x^3$; creciente en todo $\mathbb{R}$, con un punto de inflexión.
- **Valor absoluto:** $f(x) = |x|$; forma de V con vértice en el origen.
- **Raíz cuadrada:** $f(x) = \sqrt{x}$; creciente y cóncava, dominio $[0, \infty)$.
- **Racional:** $f(x) = 1/x$; hipérbola con asíntotas en los ejes.
- **Exponencial y logarítmica:** crecimiento rápido y su inversa (en otro curso).
- **Por partes:** reglas distintas en intervalos distintos, como $f(x) = |x|$.

## Transformaciones de gráficas
Conocer la gráfica base y aplicar transformaciones evita tabular cientos de puntos:

$$g(x) = a \cdot f(b(x - h)) + k$$

- $+ k$: desplaza verticalmente $k$ unidades.
- $x - h$: desplaza horizontalmente $h$ unidades (a la derecha si $h > 0$).
- $a$: estira ($|a| > 1$) o comprime ($0 < |a| < 1$) verticalmente; si $a < 0$, refleja sobre el eje $x$.
- $b$: comprime horizontalmente si $|b| > 1$ y estira si $0 < |b| < 1$; si $b < 0$, refleja sobre el eje $y$.

**Ejemplo.** $g(x) = (x - 2)^2 + 3$ es la parábola $x^2$ desplazada 2 a la derecha y 3 arriba; vértice en $(2, 3)$.

**Ejemplo.** $g(x) = -\sqrt{x + 1}$: raíz desplazada 1 a la izquierda y reflejada hacia abajo; dominio $[-1, \infty)$, rango $(-\infty, 0]$.

## Composición de funciones
La **composición** aplica primero una función y luego otra:
$$(f \circ g)(x) = f(g(x))$$

El dominio de $f \circ g$ son los $x$ del dominio de $g$ tales que $g(x)$ está en el dominio de $f$.

**Ejemplo.** $f(x) = \sqrt{x}$ y $g(x) = x - 3$. Entonces $(f \circ g)(x) = \sqrt{x - 3}$, con dominio $[3, \infty)$. En cambio $(g \circ f)(x) = \sqrt{x} - 3$, con dominio $[0, \infty)$. La composición no es conmutativa.

La composición es la operación que encadena procesos: convertir grados a radianes y luego calcular seno es $f \circ g$.

## Función inversa
La inversa $f^{-1}$ deshace el efecto de $f$:
$$f(f^{-1}(x)) = x, \qquad f^{-1}(f(x)) = x$$

Existe solo si $f$ es **inyectiva** (un valor de salida por cada entrada). Gráficamente, la inversa es el reflejo sobre la recta $y = x$.

**Método para hallarla:**
1. Escribe $y = f(x)$.
2. Intercambia $x$ y $y$.
3. Despeja $y$.
4. Renombra: $y = f^{-1}(x)$.

**Ejemplo.** $f(x) = 2x + 3$.
- $y = 2x + 3$.
- Intercambia: $x = 2y + 3$.
- Despeja: $y = (x - 3)/2$.
- $f^{-1}(x) = \dfrac{x - 3}{2}$.
- Verificación: $f^{-1}(f(1)) = f^{-1}(5) = 1$. Correcto.

A veces hay que **restringir el dominio** para lograr inyectividad: $f(x) = x^2$ no es inyectiva en $\mathbb{R}$, pero sí en $[0, \infty)$, donde su inversa es $\sqrt{x}$.

## Funciones pares, impares y simetrías
- **Par:** $f(-x) = f(x)$ para todo $x$; la gráfica es simétrica respecto al eje $y$. Ejemplo: $f(x) = x^2$, $\cos x$.
- **Impar:** $f(-x) = -f(x)$; simetría respecto al origen. Ejemplo: $f(x) = x^3$, $\text{sen}\,x$.
- **Ninguna:** la mayoría de funciones, como $f(x) = x^2 + x$.

Reconocer la paridad economiza trabajo: en funciones pares, calcular la integral de $-a$ a $a$ equivale a $2\int_0^a$.

## Inyectiva, sobreyectiva y biyectiva
- **Inyectiva:** entradas distintas dan salidas distintas ($f(x_1) = f(x_2) \Rightarrow x_1 = x_2$). Pasa la prueba de la recta horizontal.
- **Sobreyectiva:** todo elemento del codominio es alcanzado.
- **Biyectiva:** ambas cosas; entonces existe inversa $f^{-1}: B \to A$.

**Ejemplo.** $f(x) = x^3$ con $f: \mathbb{R} \to \mathbb{R}$ es biyectiva y tiene inversa $f^{-1}(x) = \sqrt[3]{x}$. $f(x) = x^2$ con $f: \mathbb{R} \to \mathbb{R}$ no es inyectiva ni sobreyectiva.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (aplicación, tarifas).** Un taxi cobra $2$ dólares de base más $1.5$ por km. Expresa el costo como función y calcula un viaje de 10 km.
- $C(d) = 2 + 1.5d$, con dominio práctico $d \geq 0$.
- $C(10) = 2 + 15 = 17$ dólares.
- El dominio no incluye distancias negativas: la función está restringida por el contexto.

**Ejemplo 2 (aplicación, unidades).** La temperatura en grados Fahrenheit es $F(C) = \frac{9}{5}C + 32$. Halla la inversa e interpreta.
- Despeja: $C = \frac{5}{9}(F - 32)$.
- $F^{-1}(F) = \frac{5}{9}(F - 32)$ convierte Fahrenheit a Celsius.
- Verificación: $F = 212 \Rightarrow C = 100$, el punto de ebullición del agua.

**Ejemplo 3 (práctica, dominio).** Halla el dominio de $f(x) = \dfrac{\sqrt{x + 2}}{x - 1}$.
- Raíz: $x + 2 \geq 0 \Rightarrow x \geq -2$.
- Denominador: $x \neq 1$.
- Dominio: $[-2, 1) \cup (1, \infty)$.

**Ejemplo 4 (práctica, composición).** Con $f(x) = 3x - 2$ y $g(x) = x^2$, calcula $(f \circ g)(2)$ y $(g \circ f)(2)$.
- $(f \circ g)(2) = f(4) = 10$.
- $(g \circ f)(2) = g(4) = 16$.
- La composición no es conmutativa: los resultados difieren.

**Ejemplo 5 (práctica, inversa).** Halla la inversa de $f(x) = \dfrac{x + 1}{x - 2}$.
- $y = \dfrac{x+1}{x-2} \Rightarrow y(x - 2) = x + 1 \Rightarrow yx - x = 1 + 2y$.
- $x(y - 1) = 1 + 2y \Rightarrow x = \dfrac{2y + 1}{y - 1}$.
- $f^{-1}(x) = \dfrac{2x + 1}{x - 1}$.

**Ejemplo 6 (aplicación, geometría).** El área de un círculo es $A(r) = \pi r^2$ y el radio crece según $r(t) = 3t$. Expresa el área en función del tiempo.
- Composición: $(A \circ r)(t) = \pi(3t)^2 = 9\pi t^2$.
- En $t = 2$ s, el área es $36\pi \approx 113.1$ cm$^2$.

## Contextos donde se aplica
- **Física:** la posición como función del tiempo, la ley de gravitación, las conversiones de unidades.
- **Economía:** oferta, demanda y costo como funciones del precio o la cantidad.
- **Programación:** cada función de un programa es, literalmente, una función matemática; las transformaciones de imágenes son composiciones.
- **Biología:** crecimiento poblacional, concentración de fármacos en sangre.
- **Ingeniería:** señales de entrada y salida de un sistema; la respuesta es una función de la excitación.

## Errores comunes y cómo evitarlos
- **Confundir $f(x + 1)$ con $f(x) + 1$.** Lo primero desplaza la entrada; lo segundo, la salida.
- **Confundir $f^{-1}(x)$ con $\frac{1}{f(x)}$.** La inversa deshace; el recíproco divide.
- **Olvidar restringir el dominio de la inversa.** $x^2$ solo se invierte en un tramo.
- **Dar el dominio sin excluir valores problemáticos.** Revisa denominadores, raíces y logaritmos.
- **Suponer que toda función tiene inversa.** Sin inyectividad no hay inversa.
- **Desplazar en la dirección equivocada.** $f(x - 3)$ se mueve a la derecha (el signo parece contradecir la intuición).

## Ejercicios propuestos
1. Halla el dominio de $f(x) = \dfrac{\sqrt{x + 2}}{x - 1}$.
2. Halla el rango de $f(x) = x^2 - 4x + 1$ (completa el cuadrado).
3. Si $f(x) = 3x - 2$ y $g(x) = x^2$, calcula $(f \circ g)(2)$ y $(g \circ f)(2)$.
4. Halla la inversa de $f(x) = \dfrac{x + 1}{x - 2}$.
5. Determina si $f(x) = x^4 - x^2$ es par, impar o ninguna.
6. Describe la gráfica de $g(x) = -2(x + 1)^2 + 5$ a partir de $x^2$.
7. ¿Es inyectiva $f(x) = x^2 - 1$ en $[-3, 3]$? Si no, restringe el dominio.

**Respuestas:** 1) $[-2, 1) \cup (1, \infty)$. 2) $[-3, \infty)$. 3) $(f \circ g)(2) = 10$; $(g \circ f)(2) = 16$. 4) $f^{-1}(x) = \dfrac{2x + 1}{x - 1}$. 5) Par. 6) Parábola invertida, estirada, vértice $(-1, 5)$. 7) No; en $[0, 3]$ sí.

## Resumen
- Función: una salida exacta por cada entrada; dominio, codominio y rango la definen.
- Valor absoluto, divisiones, raíces pares y logaritmos restringen el dominio.
- La recta vertical verifica si una gráfica es función; la horizontal, si es inyectiva.
- Las transformaciones desplazan, estiran y reflejan la gráfica base.
- La composición encadena funciones y no es conmutativa.
- La inversa deshace a la función y requiere inyectividad, a veces restringiendo el dominio.
`,

  "exp-log": String.raw`
## Crecimiento exponencial: la idea central
Hay dos formas básicas de crecer: sumando una cantidad fija (crecimiento lineal) o multiplicando por un factor fijo (crecimiento exponencial). La diferencia es enorme.

Con crecimiento lineal $f(n) = 3n$, en 100 pasos llegas a 300. Con crecimiento exponencial $f(n) = 2^n$, en 100 pasos llegas a un número de 31 cifras.

**Ejemplo de la diferencia:** una hoja de papel que se dobla se duplica en grosor cada pliegue. Tras 42 pliegues, el grosor supera la distancia Tierra-Luna. La intuición lineal falla por completo.

El crecimiento exponencial aparece cuando **cada paso multiplica por el resultado anterior**: poblaciones, interés compuesto, contagios, decaimiento radiactivo.

## La función exponencial y sus propiedades
La función exponencial de base $a$ es
$$f(x) = a^x, \qquad a > 0, \quad a \neq 1$$

**Propiedades:**
- Dominio $\mathbb{R}$; rango $(0, \infty)$: la exponencial **nunca es negativa ni cero**.
- Si $a > 1$, es creciente: $a^x \to \infty$ cuando $x \to \infty$, y $a^x \to 0$ cuando $x \to -\infty$.
- Si $0 < a < 1$, es decreciente (decaimiento).
- Pasa siempre por $(0, 1)$, porque $a^0 = 1$.
- Leyes: $a^{x+y} = a^x a^y$, $a^{-x} = 1/a^x$, $(a^x)^y = a^{xy}$.

**Comparación de bases:** la gráfica de $2^x$ crece más rápido que $x^2$ para $x$ grande. El crecimiento exponencial siempre gana a cualquier polinomio.

## La base e: el número de Euler
Entre todas las bases hay una especial: $e \approx 2.71828\ldots$, definida como el límite
$$e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n$$

¿Por qué $e$? Porque con base $e$, la función $f(x) = e^x$ es su propia derivada: $\frac{d}{dx} e^x = e^x$. Esa propiedad la convierte en la base natural del cálculo y de todos los modelos de crecimiento continuo.

En ciencias se escribe el crecimiento continuo como $A(t) = A_0 e^{kt}$, donde $k$ es la tasa continua: $k > 0$ crece, $k < 0$ decae.

## Logaritmo: definición
El logaritmo responde la pregunta inversa: **¿a qué exponente hay que elevar la base para obtener un número?**
$$\log_a x = y \quad \Longleftrightarrow \quad a^y = x$$

Condiciones: $a > 0$, $a \neq 1$, $x > 0$. No existe el logaritmo de un número no positivo.

Ejemplos:
- $\log_2 8 = 3$ porque $2^3 = 8$.
- $\log_{10} 1000 = 3$.
- $\ln e = 1$ (el logaritmo natural usa base $e$).
- $\log_a 1 = 0$ porque $a^0 = 1$.
- $\log_a a = 1$.

El logaritmo es la inversa de la exponencial: $f(x) = a^x$ y $g(x) = \log_a x$ son funciones inversas, simétricas respecto a $y = x$.

## Propiedades de los logaritmos
Las propiedades se deducen de las leyes de exponentes:

$$\log_a(xy) = \log_a x + \log_a y$$

$$\log_a\left(\frac{x}{y}\right) = \log_a x - \log_a y$$

$$\log_a(x^n) = n \log_a x$$

$$\log_a \frac{1}{x} = -\log_a x$$

**Ejemplo de uso.** Simplificar $\log_2 40 - \log_2 5 = \log_2 8 = 3$. Sin propiedades, habría que calcular $40/5$ y reconocer la potencia.

**Advertencia importante:** $\log_a(x + y) \neq \log_a x + \log_a y$. La propiedad del producto no se aplica a sumas. Es el error más común de todo el tema.

## Cambio de base
Las calculadoras solo tienen $\log_{10}$ y $\ln$, así que el cambio de base es indispensable:
$$\log_a x = \frac{\log_b x}{\log_b a}$$

En particular:
$$\log_a x = \frac{\ln x}{\ln a} = \frac{\log_{10} x}{\log_{10} a}$$

**Ejemplo.** $\log_3 20 = \dfrac{\ln 20}{\ln 3} \approx \dfrac{3.00}{1.10} \approx 2.73$. Verificación: $3^{2.73} \approx 20$. Correcto.

El cambio de base también muestra que los logaritmos de distintas bases son proporcionales: cambian la escala, no la estructura.

## Ecuaciones exponenciales
**Caso 1: bases igualables.** Si $a^{f(x)} = a^{g(x)}$ con la misma base, entonces $f(x) = g(x)$.

Ejemplo: $2^{x+1} = 32 = 2^5 \Rightarrow x + 1 = 5 \Rightarrow x = 4$.

**Caso 2: bases no igualables.** Aplica logaritmo a ambos lados.

Ejemplo: $3^x = 20$.
$$x = \log_3 20 = \frac{\ln 20}{\ln 3} \approx 2.73$$

**Caso 3: con exponenciales en varios términos.** Puede requerir sustitución.

Ejemplo: $e^{2x} - 5e^x + 6 = 0$. Sea $u = e^x$: $u^2 - 5u + 6 = 0 \Rightarrow u = 2$ o $u = 3$. Entonces $x = \ln 2 \approx 0.69$ o $x = \ln 3 \approx 1.10$.

## Ecuaciones logarítmicas
**Método:**
1. Combina los logaritmos con sus propiedades.
2. Pasa a forma exponencial.
3. Resuelve la ecuación resultante.
4. **Verifica** las soluciones: los argumentos deben ser positivos.

**Ejemplo.** $\log_2(x) + \log_2(x - 2) = 3$.
- Combina: $\log_2[x(x - 2)] = 3$.
- Exponencial: $x(x - 2) = 2^3 = 8$.
- Cuadrática: $x^2 - 2x - 8 = 0 \Rightarrow (x - 4)(x + 2) = 0$.
- Candidatos: $x = 4$ y $x = -2$.
- Verifica: $x = 4$ da $\log_2 4 + \log_2 2 = 2 + 1 = 3$, válido. $x = -2$ no está en el dominio. Solución: $x = 4$.

La verificación no es opcional: elevar y combinar logaritmos puede introducir soluciones extrañas.

## Modelos de crecimiento y decaimiento
**Interés compuesto:** $A = P\left(1 + \frac{r}{n}\right)^{nt}$, donde $P$ es el capital, $r$ la tasa anual, $n$ las capitalizaciones por año y $t$ los años.

**Crecimiento continuo:** $A = Pe^{rt}$.

**Decaimiento radiactivo:** $A = A_0 e^{-kt}$; la vida media $t_{1/2}$ cumple $t_{1/2} = \dfrac{\ln 2}{k}$.

**Escala logarítmica:** pH $= -\log_{10}[H^+]$, Richter $= \log_{10}(A/A_0)$, decibelios $= 10\log_{10}(P/P_0)$. Las escalas logarítmicas comprimen rangos enormes: pasar de pH 7 a pH 5 significa cien veces más acidez.

**Ejemplo.** Un fármaco tiene vida media de 6 horas. ¿Qué fracción queda tras un día?
$$k = \frac{\ln 2}{6} \approx 0.1155 \text{ por hora}, \quad A(24) = A_0 e^{-0.1155 \cdot 24} \approx 0.0625 A_0$$
Queda alrededor del 6.25%: cuatro vidas medias.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (aplicación, finanzas).** Inviertes $1000$ euros al $5\%$ anual con capitalización continua durante 10 años.
- $A = 1000e^{0.05 \cdot 10} = 1000e^{0.5}$.
- $A \approx 1648.72$ euros.
- La capitalización continua supera a la anual: $1000(1.05)^{10} \approx 1628.89$.

**Ejemplo 2 (aplicación, medicina).** Una sustancia radiactiva tiene vida media de 12 años. Con 80 g iniciales, ¿cuánto queda tras 30 años?
- $k = \dfrac{\ln 2}{12} \approx 0.0578$.
- $A(30) = 80e^{-0.0578 \cdot 30} \approx 80e^{-1.733} \approx 14.9$ g.
- Queda cerca del $18.6\%$ del material.

**Ejemplo 3 (aplicación, química).** Un jugo tiene $[H^+] = 10^{-3}$ M. Halla el pH y compáralo con uno de pH 5.
- $pH = -\log_{10}(10^{-3}) = 3$.
- El pH 3 tiene $10^{-3}$ M contra $10^{-5}$ M del pH 5.
- Es cien veces más ácido.

**Ejemplo 4 (práctica, ecuación exponencial).** Resuelve $5^{2x - 1} = 125$.
- $125 = 5^3 \Rightarrow 2x - 1 = 3$.
- $2x = 4 \Rightarrow x = 2$.

**Ejemplo 5 (práctica, ecuación logarítmica).** Resuelve $\log_3(x + 4) - \log_3 x = 1$.
- Combina: $\log_3\dfrac{x+4}{x} = 1 \Rightarrow \dfrac{x+4}{x} = 3$.
- $x + 4 = 3x \Rightarrow x = 2$.
- Verificación: $\log_3 6 - \log_3 2 = \log_3 3 = 1$. Válido.

**Ejemplo 6 (práctica, cambio de base).** Resuelve $7^x = 50$ con tres decimales.
- $x = \log_7 50 = \dfrac{\ln 50}{\ln 7}$.
- $x \approx \dfrac{3.912}{1.946} \approx 2.010$.

## Contextos donde se aplica
- **Finanzas:** interés compuesto, valor presente, inflación, crecimiento de inversiones.
- **Biología y medicina:** crecimiento bacteriano, dosis y vida media de fármacos, propagación de epidemias.
- **Física:** decaimiento radiactivo, transferencia de calor, intensidad de sonido (decibelios).
- **Computación:** complejidad logarítmica de la búsqueda binaria; escalas de datos.
- **Química:** pH, cinética de reacciones.

## Errores comunes y cómo evitarlos
- **$\log(x + y) = \log x + \log y$.** Falso; solo vale para productos.
- **Olvidar el dominio.** Todo argumento del logaritmo debe ser positivo; rechaza soluciones negativas o cero.
- **Confundir $\ln$ con $\log$.** $\ln$ es base $e$; $\log$ sin base suele ser base 10 en ciencias y base $e$ en matemática avanzada. Fija la convención.
- **Suponer que $e^x$ puede ser cero.** Nunca lo es; $e^x \to 0$ solo como límite.
- **Aplicar $e^{\ln x} \neq x$ para $x$ negativo.** Para $x > 0$, $e^{\ln x} = x$ siempre.
- **Convertir mal el interés compuesto.** Distingue tasa nominal y efectiva; la frecuencia $n$ importa.

## Ejercicios propuestos
1. Simplifica: $\log_3 81$ y $\ln e^7$.
2. Expande: $\log\left(\dfrac{x^3 y}{z^2}\right)$.
3. Combina: $2\ln x - \ln(x + 1)$.
4. Resuelve $5^{2x - 1} = 125$.
5. Resuelve $7^x = 50$ (resultado con 3 decimales).
6. Resuelve $\log_3(x + 4) - \log_3 x = 1$.
7. Si $1000$ euros crecen al 5% anual continuo, ¿cuánto hay en 10 años?
8. Una sustancia radiactiva pierde la mitad de su masa en 12 años. Halla $k$ y la masa tras 30 años si empezó con 80 g.

**Respuestas:** 1) $4$ y $7$. 2) $3\log x + \log y - 2\log z$. 3) $\ln\left(\dfrac{x^2}{x+1}\right)$. 4) $x = 2$. 5) $x \approx 2.010$. 6) $x = 2$. 7) $1000e^{0.5} \approx 1648.72$ euros. 8) $k = \ln 2/12 \approx 0.0578$; quedan $\approx 14.9$ g.

## Resumen
- La exponencial $a^x$ multiplica por un factor constante y domina a todo polinomio a largo plazo.
- $e \approx 2.718$ es la base natural; $e^x$ es su propia derivada.
- El logaritmo es la inversa de la exponencial: $\log_a x = y \Leftrightarrow a^y = x$, con $x > 0$.
- Propiedades: producto suma, cociente resta, potencia multiplica; NUNCA se aplican a sumas.
- El cambio de base permite calcular cualquier logaritmo con $\ln$.
- Ecuaciones exponenciales: igualar bases o aplicar logaritmo; logarítmicas: combinar y verificar dominio.
- Los modelos exponenciales describen interés, poblaciones, decaimiento y escalas logarítmicas.
`,

  "trigonometria": String.raw`
## ¿Qué es la trigonometría?
La trigonometría nació para medir triángulos (de ahí su nombre: "medida de triángulos") y se convirtió en el estudio de las funciones periódicas, capaces de describir toda clase de ondas: sonido, luz, corriente alterna, mareas.

La idea central es relacionar **ángulos** con **razones entre lados**, y luego generalizar esas razones al círculo para obtener funciones definidas para cualquier ángulo.

Es el puente entre la geometría y el análisis: cada señal periódica se descompone en senos y cosenos mediante series de Fourier.

## Razones trigonométricas en el triángulo rectángulo
En un triángulo rectángulo con un ángulo agudo $\theta$:

:::fig right-triangle adj=4 opp=3 angle=θ adjLabel=adyacente oppLabel=opuesto hypLabel=hipotenusa caption=El+ángulo+θ+y+los+tres+lados:+adyacente,+opuesto+e+hipotenusa.
$$\text{sen}\,\theta = \frac{\text{cateto opuesto}}{\text{hipotenusa}}, \qquad \cos\theta = \frac{\text{cateto adyacente}}{\text{hipotenusa}}$$
$$\tan\theta = \frac{\text{cateto opuesto}}{\text{cateto adyacente}} = \frac{\text{sen}\,\theta}{\cos\theta}$$

**Ejemplo.** En un triángulo con catetos $3$ y $4$ e hipotenusa $5$: para el ángulo opuesto al cateto $3$, $\text{sen}\,\theta = 3/5$, $\cos\theta = 4/5$, $\tan\theta = 3/4$.

Las recíprocas también tienen nombre: cosecante, secante y cotangente, pero con estas tres razones básicas se resuelve casi todo.

## El círculo unitario: la generalización
El triángulo rectángulo solo define razones para ángulos entre $0$ y $90$ grados. El **círculo unitario** (radio 1, centro en el origen) extiende la definición a cualquier ángulo:

Si el lado terminal del ángulo $\theta$ corta el círculo en el punto $(x, y)$, entonces:
$$\cos\theta = x, \qquad \text{sen}\,\theta = y, \qquad \tan\theta = \frac{y}{x}$$

Esta definición coincide con la del triángulo para ángulos agudos y funciona para negativos y mayores de $360$ grados. Las funciones seno y coseno quedan definidas para todo real; la tangente, salvo donde $x = 0$.

**Signos por cuadrante:** en el I todos positivos; en el II solo seno; en el III solo tangente; en el IV solo coseno (regla "A-S-T-C" o "todos, seno, tangente, coseno").

## Ángulos notables y radianes
Los radianes son la unidad natural: $2\pi$ radianes equivalen a $360$ grados, así que $\pi$ rad $= 180°$. Convertir: multiplicar por $\pi/180$ o por $180/\pi$.

Estos valores se memorizan con dos triángulos: el isósceles rectángulo (45-45-90) y el medio triángulo equilátero (30-60-90).

:::fig right-triangle adj=1 opp=1 angle=45° adjLabel=1 oppLabel=1 hypLabel=√2 caption=Triángulo+45-45-90:+catetos+iguales+e+hipotenusa+√2.

:::fig right-triangle adj=1.732 opp=1 angle=30° adjLabel=√3 oppLabel=1 hypLabel=2 caption=Triángulo+30-60-90:+lados+en+razón+1:+√3:+2.

La tabla completa, para tenerla a mano:

| Ángulo (grados) | 0 | 30 | 45 | 60 | 90 |
|---|---|---|---|---|---|
| Radianes | $0$ | $\pi/6$ | $\pi/4$ | $\pi/3$ | $\pi/2$ |
| $\text{sen}$ | $0$ | $1/2$ | $\sqrt{2}/2$ | $\sqrt{3}/2$ | $1$ |
| $\cos$ | $1$ | $\sqrt{3}/2$ | $\sqrt{2}/2$ | $1/2$ | $0$ |
| $\tan$ | $0$ | $\sqrt{3}/3$ | $1$ | $\sqrt{3}$ | no def. |

## Identidades fundamentales
La identidad pitagórica sale del círculo unitario ($x^2 + y^2 = 1$):
$$\text{sen}^2\theta + \cos^2\theta = 1$$

Dividiendo entre $\cos^2\theta$ y entre $\text{sen}^2\theta$:
$$1 + \tan^2\theta = \sec^2\theta, \qquad 1 + \cot^2\theta = \csc^2\theta$$

**Identidades de paridad:**
$$\text{sen}(-\theta) = -\text{sen}\,\theta, \qquad \cos(-\theta) = \cos\theta, \qquad \tan(-\theta) = -\tan\theta$$

**Periodicidad:** seno y coseno repiten cada $2\pi$; la tangente, cada $\pi$:
$$\text{sen}(\theta + 2\pi) = \text{sen}\,\theta, \qquad \cos(\theta + 2\pi) = \cos\theta$$

Estas identidades son las herramientas básicas para simplificar expresiones y resolver ecuaciones.

## Identidades de suma, doble y medio ángulo
**Suma y diferencia:**
$$\text{sen}(\alpha \pm \beta) = \text{sen}\,\alpha\cos\beta \pm \cos\alpha\,\text{sen}\,\beta$$
$$\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \text{sen}\,\alpha\,\text{sen}\,\beta$$

**Doble ángulo:**
$$\text{sen}(2\theta) = 2\,\text{sen}\,\theta\cos\theta$$
$$\cos(2\theta) = \cos^2\theta - \text{sen}^2\theta = 1 - 2\,\text{sen}^2\theta = 2\cos^2\theta - 1$$

**Medio ángulo:**
$$\text{sen}^2\theta = \frac{1 - \cos(2\theta)}{2}, \qquad \cos^2\theta = \frac{1 + \cos(2\theta)}{2}$$

**Ejemplo.** Calcular $\text{sen}\,75°$ = $\text{sen}(45° + 30°)$:
$$= \text{sen}\,45°\cos 30° + \cos 45°\,\text{sen}\,30° = \frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2}\cdot\frac{1}{2} = \frac{\sqrt{6} + \sqrt{2}}{4}$$

## Ecuaciones trigonométricas
Una ecuación trigonométrica tiene infinitas soluciones por la periodicidad. El método:

1. Simplifica con identidades hasta una sola función trigonométrica.
2. Despeja la función y halla el ángulo base con la inversa.
3. Agrega todas las soluciones del periodo: si $\text{sen}\,\theta = k$, entonces $\theta = \alpha + 2\pi n$ o $\theta = \pi - \alpha + 2\pi n$.
4. Restringe al intervalo pedido.

**Ejemplo.** $2\,\text{sen}\,\theta - 1 = 0$ en $[0, 2\pi)$.
- $\text{sen}\,\theta = 1/2$.
- Ángulo base: $\pi/6$.
- Soluciones: $\theta = \pi/6$ y $\theta = 5\pi/6$.

**Ejemplo con factorización.** $\text{sen}\,\theta\cos\theta = \text{sen}\,\theta$.
- $\text{sen}\,\theta(\cos\theta - 1) = 0$.
- $\text{sen}\,\theta = 0 \Rightarrow \theta = 0, \pi$. $\cos\theta = 1 \Rightarrow \theta = 0$.
- Soluciones en $[0, 2\pi)$: $0$ y $\pi$.

## Ley de senos y ley de cosenos
Para triángulos **no rectángulos**:

**Ley de senos:**
$$\frac{a}{\text{sen}\,A} = \frac{b}{\text{sen}\,B} = \frac{c}{\text{sen}\,C} = 2R$$

**Ley de cosenos:**
$$c^2 = a^2 + b^2 - 2ab\cos C$$

La ley de cosenos generaliza Pitágoras: si $C = 90°$, $\cos C = 0$ y queda $c^2 = a^2 + b^2$.

**Cuándo usar cada una:**
- Ley de senos: dos ángulos y un lado (ALA) o dos lados y el ángulo opuesto a uno de ellos (LLA, con posible caso ambiguo).
- Ley de cosenos: dos lados y el ángulo entre ellos (LAL) o los tres lados (LLL).

**Ejemplo.** Lados $a = 7$, $b = 10$, ángulo $C = 60°$:
$$c^2 = 49 + 100 - 2 \cdot 7 \cdot 10 \cdot \frac{1}{2} = 79 \Rightarrow c \approx 8.89$$

## Gráficas de las funciones trigonométricas
- $y = \text{sen}\,x$: dominio $\mathbb{R}$, rango $[-1, 1]$, periodo $2\pi$, cruza el origen.
- $y = \cos x$: igual, pero empieza en el máximo $(0, 1)$.
- $y = \tan x$: periodo $\pi$, asíntotas verticales en $x = \pi/2 + k\pi$, rango $\mathbb{R}$.

**Forma general:** $y = A\,\text{sen}(B(x - C)) + D$.
- $|A|$: **amplitud** (mitad de la distancia entre máximo y mínimo).
- Periodo: $\dfrac{2\pi}{|B|}$.
- $C$: **desfase** (desplazamiento horizontal).
- $D$: desplazamiento vertical (línea media).

**Ejemplo.** $y = 3\,\text{sen}(2x - \pi) + 1$: amplitud $3$, periodo $\pi$, desfase $\pi/2$ a la derecha, línea media $y = 1$. Rango: $[-2, 4]$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (aplicación, topografía).** Desde 50 m de un edificio se mide el ángulo de elevación a su cima: $30°$. ¿Cuál es la altura?
- $\tan 30° = \dfrac{h}{50} \Rightarrow h = 50\tan 30°$.
- $h = 50 \cdot \dfrac{\sqrt{3}}{3} \approx 28.87$ m.

:::fig right-triangle adj=50 angleDeg=30 angle=30° adjLabel=50+m oppLabel=h caption=Desde+50+m+se+mide+un+ángulo+de+elevación+de+30°+y+se+busca+la+altura+h.

**Ejemplo 2 (aplicación, agrimensura).** Dos lados de un terreno miden 7 y 10 m y forman $60°$. Halla el tercer lado.
- Ley de cosenos: $c^2 = 49 + 100 - 2(7)(10)\cos 60°$.
- $c^2 = 149 - 70 = 79 \Rightarrow c \approx 8.89$ m.

**Ejemplo 3 (aplicación, física).** Una masa oscila según $y = 3\,\text{sen}(2\pi t)$ cm. Describe el movimiento.
- Amplitud: $3$ cm (máximo desplazamiento).
- Periodo: $T = \dfrac{2\pi}{2\pi} = 1$ s; frecuencia $1$ Hz.
- En $t = 0.25$ s: $y = 3\,\text{sen}(\pi/2) = 3$ cm (punto más alto).

**Ejemplo 4 (práctica, identidades).** Calcula $\text{sen}\,75°$ con la identidad de suma.
- $\text{sen}(45° + 30°) = \text{sen}\,45°\cos 30° + \cos 45°\,\text{sen}\,30°$.
- $= \dfrac{\sqrt{2}}{2}\cdot\dfrac{\sqrt{3}}{2} + \dfrac{\sqrt{2}}{2}\cdot\dfrac{1}{2} = \dfrac{\sqrt{6} + \sqrt{2}}{4}$.

**Ejemplo 5 (práctica, ecuación trigonométrica).** Resuelve $2\cos^2\theta - 1 = 0$ en $[0, 2\pi)$.
- $\cos^2\theta = \dfrac{1}{2} \Rightarrow \cos\theta = \pm\dfrac{\sqrt{2}}{2}$.
- Soluciones: $\theta = \dfrac{\pi}{4}, \dfrac{3\pi}{4}, \dfrac{5\pi}{4}, \dfrac{7\pi}{4}$.

**Ejemplo 6 (práctica, razones).** El punto $(-3, 4)$ está en el lado terminal de $\theta$. Halla las tres razones.
- $r = \sqrt{9 + 16} = 5$.
- $\text{sen}\,\theta = \dfrac{4}{5}$, $\cos\theta = -\dfrac{3}{5}$, $\tan\theta = -\dfrac{4}{3}$.

:::fig right-triangle adj=3 opp=4 angle=θ adjLabel=3 oppLabel=4 hypLabel=5 caption=El+punto+(-3,+4)+forma+un+triángulo+rectángulo+de+catetos+3+y+4+e+hipotenusa+5.

## Contextos donde se aplica
- **Física:** movimiento armónico, ondas, péndulos, corriente alterna; sonido y luz como ondas sinusoidales.
- **Ingeniería:** análisis de señales, telecomunicaciones, control de sistemas.
- **Geometría y topografía:** medir distancias inaccesibles con triangulación; la ley de senos es la base de la topografía clásica.
- **Navegación y astronomía:** coordenadas celestes, sistemas de posicionamiento.
- **Medicina:** electrocardiogramas y señales biomédicas se analizan con Fourier.

## Errores comunes y cómo evitarlos
- **Mezclar grados y radianes.** Decide la unidad desde el inicio; las fórmulas del cálculo usan radianes.
- **Perder soluciones.** Una ecuación trigonométrica tiene infinitas; reporta todas las del periodo o del intervalo pedido.
- **$\text{sen}(\alpha + \beta) = \text{sen}\,\alpha + \text{sen}\,\beta$.** Falso; usa la identidad de suma.
- **Confundir ley de senos con ley de cosenos.** Senos relaciona lados con ángulos opuestos; cosenos relaciona tres lados con un ángulo.
- **Invertir sen y cos en el triángulo.** El seno es opuesto/hipotenusa, no adyacente/hipotenusa.
- **Olvidar el caso ambiguo LLA.** Dos triángulos distintos pueden cumplir los datos; verifica ambos.

## Ejercicios propuestos
1. Convierte $150°$ a radianes y $5\pi/4$ a grados.
2. Halla $\text{sen}\,\theta$, $\cos\theta$ y $\tan\theta$ si el punto $(-3, 4)$ está en el lado terminal.
3. Verifica la identidad: $\dfrac{\text{sen}\,\theta}{\cos\theta} + \dfrac{\cos\theta}{\text{sen}\,\theta} = \dfrac{1}{\text{sen}\,\theta\cos\theta}$.
4. Calcula $\cos 15°$ con la identidad de diferencia.
5. Resuelve $2\cos^2\theta - 1 = 0$ en $[0, 2\pi)$.
6. Un triángulo tiene $a = 5$, $A = 30°$, $B = 45°$. Halla $b$.
7. Dos lados de $6$ y $8$ forman un ángulo de $120°$. Halla el tercer lado.
8. Describe amplitud, periodo y rango de $y = -2\cos(3x) + 1$.

**Respuestas:** 1) $5\pi/6$ y $225°$. 2) $\text{sen} = 4/5$, $\cos = -3/5$, $\tan = -4/3$. 3) Suma las fracciones con denominador común. 4) $(\sqrt{6} + \sqrt{2})/4$. 5) $\theta = \pi/4, 3\pi/4, 5\pi/4, 7\pi/4$. 6) $b = 5\sqrt{2}$. 7) $\sqrt{148} \approx 12.17$. 8) Amplitud 2, periodo $2\pi/3$, rango $[-1, 3]$.

## Resumen
- Las razones trigonométricas relacionan ángulos y lados; el círculo unitario las generaliza a todo ángulo.
- Radianes: $2\pi = 360°$; los ángulos notables se deducen de dos triángulos especiales.
- Identidades clave: pitagórica, paridad, periodicidad, suma, doble y medio ángulo.
- Las ecuaciones trigonométricas tienen infinitas soluciones; hay que reportar todas las del intervalo.
- Ley de senos y de cosenos resuelven cualquier triángulo; la de cosenos generaliza Pitágoras.
- La forma $A\,\text{sen}(B(x-C)) + D$ controla amplitud, periodo, desfase y línea media.
`,

  "geometria-euclidiana": String.raw`
## Los axiomas de Euclides
La geometría euclidiana es un sistema deductivo: parte de un puñado de **axiomas** (verdades aceptadas sin demostración) y construye todo lo demás con demostraciones.

Los cinco postulados clásicos de Euclides:
1. Por dos puntos pasa una única recta.
2. Todo segmento se puede prolongar indefinidamente en línea recta.
3. Se puede trazar una circunferencia con cualquier centro y radio.
4. Todos los ángulos rectos son iguales entre sí.
5. **Postulado de las paralelas:** por un punto fuera de una recta pasa exactamente una recta paralela a ella.

El quinto postulado parece distinto a los otros, y durante siglos se intentó deducirlo. Al fallar, nació la **geometría no euclidiana**: si se niega el quinto postulado aparecen las geometrías hiperbólica y elíptica.

## Ángulos y rectas paralelas
Un **ángulo** se mide por su abertura. Clasificación: agudo ($< 90°$), recto ($= 90°$), obtuso ($< 180°$ y $> 90°$), llano ($= 180°$).

Parejas importantes:
- **Complementarios:** suman $90°$.
- **Suplementarios:** suman $180°$.
- **Opuestos por el vértice:** son iguales.

Cuando una **transversal** corta dos rectas paralelas, se forman ángulos con propiedades clave:
- **Correspondientes:** iguales.
- **Alternos internos:** iguales.
- **Alternos externos:** iguales.
- **Colaterales internos:** suplementarios (suman $180°$).

Estas propiedades permiten demostrar paralelismo y calcular ángulos encadenados.

## Triángulos: propiedades fundamentales
**Suma de ángulos internos:** en todo triángulo euclidiano,
$$A + B + C = 180°$$
Prueba: trazar la paralela a un lado por el vértice opuesto y usar alternos internos.

**Ángulo exterior:** es igual a la suma de los dos ángulos internos no adyacentes.

**Clasificación por lados:** equilátero (tres iguales), isósceles (dos iguales), escaleno (todos distintos).

**Clasificación por ángulos:** acutángulo, rectángulo, obtusángulo.

**Propiedades del isósceles:** los ángulos de la base son iguales; la altura desde el vértice es también mediana y bisectriz.

**Desigualdad triangular:** en todo triángulo, cada lado es menor que la suma de los otros dos y mayor que su diferencia. Es la condición de existencia: con segmentos $2$, $3$ y $7$ no hay triángulo.

## Congruencia de triángulos
Dos triángulos son **congruentes** si tienen la misma forma y el mismo tamaño: sus lados y ángulos correspondientes son iguales. Se denota $\triangle ABC \cong \triangle A'B'C'$.

**Criterios (bastan tres datos):**
- **LLL:** tres lados iguales.
- **LAL:** dos lados y el ángulo comprendido.
- **ALA:** dos ángulos y el lado comprendido.
- **AAL** (o LAA): dos ángulos y un lado no comprendido.

**Advertencia:** **LLA no es un criterio de congruencia.** Dos lados y el ángulo opuesto a uno de ellos pueden dar dos triángulos distintos (caso ambiguo).

**Ejemplo.** Si $AB = A'B'$, $AC = A'C'$ y el ángulo $A$ es igual al ángulo $A'$ (lado-ángulo-lado), entonces los triángulos son congruentes y todos sus elementos coinciden.

La congruencia es la herramienta para transportar información: si dos triángulos son congruentes, cualquier propiedad de uno vale en el otro.

## Semejanza y teorema de Tales
Dos triángulos son **semejantes** si tienen la misma forma pero distinto tamaño: ángulos iguales y lados proporcionales. Se denota $\triangle ABC \sim \triangle A'B'C'$.

**Criterios:**
- **AA:** dos ángulos iguales (el tercero queda forzado).
- **LLL proporcional:** los tres lados en la misma razón.
- **LAL proporcional:** dos lados proporcionales y el ángulo comprendido igual.

Si la razón de semejanza es $k$, entonces: perímetros están en razón $k$ y **áreas en razón $k^2$**.

**Teorema de Tales (de los triángulos semejantes):** si una recta es paralela a un lado de un triángulo, corta a los otros dos lados en segmentos proporcionales:
$$\frac{AD}{DB} = \frac{AE}{EC}$$

**Aplicación clásica:** medir alturas inaccesibles con sombras. Si una persona de $1.7$ m proyecta sombra de $2$ m y un árbol proyecta $10$ m:
$$\frac{h}{10} = \frac{1.7}{2} \Rightarrow h = 8.5 \text{ m}$$

## Teorema de Pitágoras
En todo triángulo rectángulo con catetos $a, b$ e hipotenusa $c$:
$$a^2 + b^2 = c^2$$

**Recíproco:** si $a^2 + b^2 = c^2$, el triángulo es rectángulo. Esto permite clasificar triángulos:
- $a^2 + b^2 = c^2$: rectángulo.
- $a^2 + b^2 > c^2$: acutángulo.
- $a^2 + b^2 < c^2$: obtusángulo.

**Ternas pitagóricas:** enteros que cumplen la ecuación: $(3, 4, 5)$, $(5, 12, 13)$, $(8, 15, 17)$, $(7, 24, 25)$, y sus múltiplos.

**Ejemplo.** Una escalera de $5$ m apoyada en una pared llega a $4$ m de altura. ¿A qué distancia está la base?
$$d^2 = 25 - 16 = 9 \Rightarrow d = 3 \text{ m}$$

## El círculo y sus propiedades
Elementos: centro, radio, diámetro, cuerda, secante, tangente, arco.

**Propiedades clave:**
- Una **tangente** es perpendicular al radio en el punto de tangencia.
- La **mediatriz** de una cuerda pasa por el centro.
- **Ángulo central:** mide lo mismo que su arco.
- **Ángulo inscrito:** mide **la mitad** del arco que subtiende.
- **Ángulo inscrito en un semicírculo:** es recto ($90°$). Esta propiedad es la base del teorema de Tales geométrico.
- Ángulos inscritos que subtienden el mismo arco son iguales.
- **Ángulos opuestos de un cuadrilátero inscrito:** suman $180°$.

**Ejemplo.** Si un ángulo central mide $80°$, cualquier ángulo inscrito que subtienda el mismo arco mide $40°$.

## Polígonos: ángulos, áreas y perímetros
**Suma de ángulos internos** de un polígono de $n$ lados:
$$S = (n - 2) \cdot 180°$$

**Suma de ángulos exteriores:** siempre $360°$.

En un polígono **regular** (todos los lados y ángulos iguales), cada ángulo interno mide $\frac{(n-2)180°}{n}$.

**Áreas:**
- Triángulo: $A = \frac{1}{2}bh$ (base por altura sobre dos) y $A = \sqrt{s(s-a)(s-b)(s-c)}$ (Herón, con $s$ el semiperímetro).
- Paralelogramo: $A = bh$.
- Trapecio: $A = \frac{(B + b)h}{2}$.
- Círculo: $A = \pi r^2$; circunferencia: $C = 2\pi r$.
- Sector circular: $A = \frac{\theta}{2}r^2$ con $\theta$ en radianes.

**Volúmenes:** prisma $V = A_b h$; cilindro $V = \pi r^2 h$; pirámide $V = \frac{1}{3}A_b h$; cono $V = \frac{1}{3}\pi r^2 h$; esfera $V = \frac{4}{3}\pi r^3$ y superficie $4\pi r^2$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (aplicación, medición indirecta).** Una persona de 1.6 m proyecta una sombra de 2.4 m; un poste proyecta 9 m a la misma hora. Halla la altura del poste.
- Semejanza: $\dfrac{h}{9} = \dfrac{1.6}{2.4}$.
- $h = 9 \cdot \dfrac{1.6}{2.4} = 6$ m.

**Ejemplo 2 (aplicación, seguridad).** Una escalera de 5 m se apoya en una pared y alcanza 4 m de altura. ¿A qué distancia está la base?
- Pitágoras: $d^2 + 16 = 25$.
- $d^2 = 9 \Rightarrow d = 3$ m.

**Ejemplo 3 (aplicación, topografía).** Dos ángulos de un triángulo miden $47°$ y $68°$. Halla el tercero y el ángulo exterior correspondiente.
- Tercero: $180° - 47° - 68° = 65°$.
- Ángulo exterior en ese vértice: $180° - 65° = 115°$.

**Ejemplo 4 (práctica, área con Herón).** Halla el área del triángulo de lados 13, 14 y 15.
- Semiperímetro: $s = 21$.
- $A = \sqrt{21(21-13)(21-14)(21-15)} = \sqrt{21 \cdot 8 \cdot 7 \cdot 6}$.
- $A = \sqrt{7056} = 84$.

**Ejemplo 5 (práctica, ángulo inscrito).** Un ángulo central mide $110°$. Halla el ángulo inscrito que subtiende el mismo arco.
- El inscrito mide la mitad del central.
- $\dfrac{110°}{2} = 55°$.

**Ejemplo 6 (práctica, polígonos).** Halla la suma de ángulos internos de un decágono y cada ángulo si es regular.
- $S = (10 - 2) \cdot 180° = 1440°$.
- Regular: $\dfrac{1440°}{10} = 144°$ por ángulo.

## Contextos donde se aplica
- **Arquitectura y construcción:** calcular ángulos de techos, verificar escuadras (3-4-5), medir alturas inaccesibles.
- **Topografía:** triangulación del terreno; cualquier mapa se apoya en triángulos.
- **Diseño gráfico y videojuegos:** mallas de triángulos para modelar superficies.
- **Navegación:** rumbos y distancias; la geometría del círculo es esencial para coordenadas.
- **Arte:** la perspectiva y las proporciones áureas usan semejanza.

## Errores comunes y cómo evitarlos
- **Asumir datos por cómo se ve la figura.** "Parece recto" no es "es recto"; usa solo lo dado.
- **Usar Pitágoras en triángulos no rectángulos.** Verifica el ángulo recto primero.
- **Confundir congruencia con semejanza.** Congruentes: igual tamaño; semejantes: misma forma, tamaños proporcionales.
- **Usar LLA como criterio.** No lo es; puede haber dos soluciones.
- **Confundir ángulo inscrito con central.** El inscrito vale la mitad.
- **Olvidar que las áreas escalan al cuadrado.** Si la razón de semejanza es 2, el área se multiplica por 4.

## Ejercicios propuestos
1. Dos ángulos de un triángulo miden $47°$ y $68°$. Halla el tercero y el ángulo exterior correspondiente.
2. Una escalera de 13 m llega a 12 m de altura. ¿A qué distancia de la pared está la base?
3. ¿Forman triángulo los segmentos $6$, $8$ y $15$? Justifica.
4. Los catetos de un triángulo rectángulo miden 9 y 12. Halla hipotenusa, área y perímetro.
5. En un círculo, un ángulo central mide $110°$. Halla el ángulo inscrito que subtiende el mismo arco.
6. Halla la suma de ángulos internos de un decágono; si es regular, cada ángulo.
7. Dos triángulos semejantes tienen razón $3$. Si el área del menor es $10$, ¿cuál es la del mayor?
8. Una persona de 1.6 m proyecta una sombra de 2.4 m; un poste proyecta 9 m. Halla su altura.

**Respuestas:** 1) $65°$ y $115°$. 2) $5$ m. 3) No: $6 + 8 < 15$. 4) $15$, área $54$, perímetro $36$. 5) $55°$. 6) $1440°$; $144°$. 7) $90$. 8) $6$ m.

## Resumen
- La geometría euclidiana se construye desde cinco postulados; el de las paralelas distingue las geometrías.
- Ángulos entre paralelas: correspondientes y alternos iguales, colaterales suplementarios.
- Triángulos: ángulos suman $180°$; desigualdad triangular garantiza existencia.
- Congruencia con LLL, LAL, ALA, AAL; semejanza con AA, LLL y LAL proporcional.
- Pitágoras y su recíproco clasifican triángulos; las ternas pitagóricas aparecen en construcción.
- En el círculo, el ángulo inscrito es la mitad del central y el inscrito en semicírculo es recto.
`,

  "geometria-analitica": String.raw`
## El plano cartesiano
La geometría analítica une álgebra y geometría: cada punto del plano se identifica con un par ordenado $(x, y)$, y cada figura con una ecuación.

El **plano cartesiano** tiene dos ejes perpendiculares que se cortan en el origen. El eje horizontal es $x$ (abscisas); el vertical, $y$ (ordenadas). Los ejes dividen el plano en cuatro **cuadrantes**, numerados en sentido antihorario empezando por el superior derecho.

**Ideas centrales del curso:**
- Un punto satisface una ecuación si al sustituir sus coordenadas la igualdad se cumple.
- Una ecuación describe un **lugar geométrico**: todos los puntos que la satisfacen.
- Resolver un problema geométrico se convierte en resolver ecuaciones; y viceversa.

Esta traducción es la base de la computación gráfica, la robótica y la física.

## Distancia y punto medio
La **distancia** entre $P_1(x_1, y_1)$ y $P_2(x_2, y_2)$ sale del teorema de Pitágoras:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

El **punto medio** es el promedio de las coordenadas:
$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

La **división de un segmento en razón** $r$ (de $P_1$ a $P_2$) da el punto:
$$P = \left(\frac{x_1 + r x_2}{1 + r}, \frac{y_1 + r y_2}{1 + r}\right)$$

**Ejemplo.** Distancia entre $A(1, 2)$ y $B(4, 6)$: $\sqrt{9 + 16} = 5$. Punto medio: $(2.5, 4)$.

Estas fórmulas son las mismas que usa un GPS para calcular distancias entre coordenadas (con ajuste esférico).

## La recta: pendiente y ecuaciones
La **pendiente** mide la inclinación:
$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\Delta y}{\Delta x}$$

Interpretación: cuánto sube $y$ por cada unidad que avanza $x$. Pendiente positiva: sube; negativa: baja; cero: horizontal; indefinida: vertical.

**Formas de la ecuación de la recta:**
- **Punto-pendiente:** $y - y_1 = m(x - x_1)$.
- **Pendiente-ordenada:** $y = mx + b$, con $b$ la intersección con el eje $y$.
- **General:** $Ax + By + C = 0$.
- **Dos puntos:** $m = \frac{y_2 - y_1}{x_2 - x_1}$ y luego punto-pendiente.

**Ejemplo.** Recta por $(2, 1)$ y $(4, 7)$: $m = 6/2 = 3$; ecuación $y - 1 = 3(x - 2)$, es decir $y = 3x - 5$.

**Ecuación de la recta vertical** $x = a$ no se escribe en forma pendiente-ordenada: su pendiente es indefinida.

## Paralelismo y perpendicularidad
Dos rectas con pendientes $m_1$ y $m_2$:
- Son **paralelas** si $m_1 = m_2$ (misma inclinación, nunca se cortan).
- Son **perpendiculares** si $m_1 \cdot m_2 = -1$, es decir $m_2 = -\dfrac{1}{m_1}$ (pendientes recíprocas y opuestas).

Las rectas verticales y horizontales son perpendiculares entre sí, aunque la regla de pendientes no capture el caso vertical.

**Ejemplo.** Una recta perpendicular a $y = 2x + 1$ que pasa por $(4, 1)$: pendiente $-1/2$, ecuación $y - 1 = -\frac{1}{2}(x - 4)$.

**Aplicación:** recta tangente a una curva, altura de un triángulo, distancia mínima entre puntos y rectas.

## La circunferencia
Es el lugar geométrico de los puntos que equidistan de un centro:
$$(x - h)^2 + (y - k)^2 = r^2$$
con centro $(h, k)$ y radio $r$.

**Forma general:** $x^2 + y^2 + Dx + Ey + F = 0$. Para reconocer el centro y el radio se **completan cuadrados**.

**Ejemplo.** $x^2 + y^2 - 4x + 6y - 12 = 0$.
- Agrupa: $(x^2 - 4x) + (y^2 + 6y) = 12$.
- Completa: $(x - 2)^2 - 4 + (y + 3)^2 - 9 = 12$.
- Resultado: $(x - 2)^2 + (y + 3)^2 = 25$. Centro $(2, -3)$, radio $5$.

**Intersección recta-circunferencia:** sustituye la recta en la ecuación y resuelve la cuadrática; el discriminante dice si hay dos puntos, uno (tangente) o ninguno.

## La parábola
Es el lugar de puntos que equidistan de un **foco** y una **recta directriz**.

**Formas canónicas:**
- Abre vertical: $(x - h)^2 = 4p(y - k)$; vértice $(h, k)$, foco $(h, k + p)$.
- Abre horizontal: $(y - k)^2 = 4p(x - h)$; vértice $(h, k)$, foco $(h + p, k)$.

El signo de $p$ indica la dirección de apertura. La **directriz** está a distancia $|p|$ del vértice, del lado opuesto al foco. El **eje de simetría** pasa por el foco y el vértice.

**Ejemplo.** $y = x^2 - 4x + 3$.
- Forma vértice: $y = (x - 2)^2 - 1$; vértice $(2, -1)$.
- Como $(x-2)^2 = y + 1 = 4p(y + 1)$ con $4p = 1$: $p = 1/4$. Foco $(2, -0.75)$, directriz $y = -1.25$.

La parábola es la trayectoria de proyectiles (sin aire) y la forma de antenas y faros.

## La elipse
Es el lugar de puntos cuya **suma de distancias a dos focos** es constante:
$$\frac{(x - h)^2}{a^2} + \frac{(y - k)^2}{b^2} = 1$$
con $a > b > 0$. El eje mayor es $2a$, el menor $2b$.

**Relación focal:** $c^2 = a^2 - b^2$, donde $c$ es la distancia del centro a cada foco.

**Excentricidad:** $e = \dfrac{c}{a}$, con $0 \leq e < 1$. Mide cuánto se aleja de ser un círculo: $e = 0$ es círculo; cerca de 1, muy achatada.

**Ejemplo.** $\frac{x^2}{25} + \frac{y^2}{9} = 1$: $a = 5$, $b = 3$, $c = 4$. Focos $(\pm 4, 0)$, excentricidad $0.8$.

Las órbitas planetarias son elipses con el Sol en un foco (Kepler). Las salas de eco y las mesas de billar elípticas aprovechan la propiedad de reflexión en los focos.

## La hipérbola
Es el lugar de puntos cuya **diferencia de distancias a dos focos** es constante en valor absoluto:
$$\frac{(x - h)^2}{a^2} - \frac{(y - k)^2}{b^2} = 1 \quad \text{(abre horizontal)}$$
$$\frac{(y - k)^2}{a^2} - \frac{(x - h)^2}{b^2} = 1 \quad \text{(abre vertical)}$$

**Relación focal:** $c^2 = a^2 + b^2$ (a diferencia de la elipse, se suma).

**Asíntotas:** rectas $y - k = \pm \frac{b}{a}(x - h)$ a las que la curva se acerca sin tocar.

**Ejemplo.** $\frac{x^2}{16} - \frac{y^2}{9} = 1$: $a = 4$, $b = 3$, $c = 5$. Focos $(\pm 5, 0)$, asíntotas $y = \pm \frac{3}{4}x$.

Las hipérbolas modelan sistemas de navegación (LORAN), el enfriamiento de torres y la trayectoria de partículas con repulsión.

## Coordenadas polares
En lugar de $(x, y)$, un punto se describe por **distancia al origen** $r$ y **ángulo** $\theta$:
$$x = r\cos\theta, \qquad y = r\,\text{sen}\,\theta$$
$$r = \sqrt{x^2 + y^2}, \qquad \tan\theta = \frac{y}{x}$$

**Curvas polares notables:**
- Circunferencia: $r = a$ (centrada en el origen).
- Cardioide: $r = a(1 + \cos\theta)$.
- Rosa de $n$ pétalos: $r = a\cos(n\theta)$.
- Espiral de Arquímedes: $r = a\theta$.

**Ejemplo.** El punto $(2, \pi/3)$ en polares es $(2\cos 60°, 2\,\text{sen}\,60°) = (1, \sqrt{3})$ en cartesianas.

Las polares simplifican problemas con simetría radial: radar, antenas, órbitas y coordenadas celestes.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (aplicación, navegación).** Un dron está en $(-2, 3)$ y su destino en $(6, -1)$. Halla la distancia en línea recta.
- $d = \sqrt{(6 - (-2))^2 + (-1 - 3)^2} = \sqrt{64 + 16}$.
- $d = \sqrt{80} = 4\sqrt{5} \approx 8.94$ unidades.

**Ejemplo 2 (aplicación, antenas).** El corte de una antena parabólica es $y = 2x^2$. Halla el foco y la directriz para colocar el receptor.
- Forma canónica: $x^2 = \dfrac{1}{2}y = 4p(y)$ con $p = \dfrac{1}{8}$.
- Foco: $\left(0, \dfrac{1}{8}\right)$; directriz: $y = -\dfrac{1}{8}$.

**Ejemplo 3 (aplicación, astronomía).** La órbita de un asteroide es $\dfrac{x^2}{36} + \dfrac{y^2}{16} = 1$. Halla sus focos y excentricidad.
- $a = 6$, $b = 4$; $c = \sqrt{36 - 16} = \sqrt{20} \approx 4.47$.
- Focos: $(\pm\sqrt{20}, 0)$; excentricidad $e = \dfrac{\sqrt{20}}{6} \approx 0.745$.

**Ejemplo 4 (práctica, circunferencia).** Determina centro y radio de $x^2 + y^2 + 8x - 2y + 8 = 0$.
- Completa cuadrados: $(x + 4)^2 - 16 + (y - 1)^2 - 1 + 8 = 0$.
- $(x + 4)^2 + (y - 1)^2 = 9$: centro $(-4, 1)$, radio $3$.

**Ejemplo 5 (práctica, rectas).** Halla la recta perpendicular a $y = -\frac{1}{3}x + 2$ que pasa por $(1, 1)$.
- Pendiente perpendicular: $m = 3$.
- $y - 1 = 3(x - 1) \Rightarrow y = 3x - 2$.

**Ejemplo 6 (práctica, polares).** Convierte $(3, 3)$ a polares.
- $r = \sqrt{9 + 9} = 3\sqrt{2}$.
- $\tan\theta = 1$ y el punto está en el primer cuadrante: $\theta = \dfrac{\pi}{4}$.
- Coordenadas: $\left(3\sqrt{2}, \dfrac{\pi}{4}\right)$.

## Contextos donde se aplica
- **Computación gráfica y videojuegos:** detección de colisiones, trayectorias y renderizado usan ecuaciones de rectas y cónicas.
- **Física:** movimiento de proyectiles (parábola), órbitas (elipses), campos (hipérbolas).
- **Ingeniería:** diseño de puentes colgantes (parábolas), antenas satelitales (paraboloides), faros de automóvil.
- **GPS y navegación:** intersección de círculos y cálculo de distancias.
- **Economía:** funciones de costo lineales y curvas de indiferencia elípticas.

## Errores comunes y cómo evitarlos
- **Confundir pendiente de la perpendicular.** No es el negativo: es el recíproco negativo ($-1/m$).
- **Errores de signo al completar cuadrados.** Verifica sumando y restando el mismo número.
- **Intercambiar $a$ y $b$ en elipses e hipérbolas.** El mayor denominador no siempre es $a$ en la hipérbola: depende de qué eje es transversal.
- **Confundir $c^2 = a^2 - b^2$ (elipse) con $c^2 = a^2 + b^2$ (hipérbola).** Memoriza con la lógica: en la hipérbola los focos están más lejos.
- **Aplicar la fórmula de distancia con signos invertidos.** Resta siempre "segundo menos primero", en el mismo orden para $x$ y $y$.
- **Olvidar el caso de pendiente indefinida.** Las rectas verticales merecen tratamiento aparte.

## Ejercicios propuestos
1. Halla la distancia y el punto medio entre $(-2, 3)$ y $(6, -1)$.
2. Halla la ecuación de la recta por $(3, -2)$ con pendiente $4$.
3. Halla la recta perpendicular a $y = -\frac{1}{3}x + 2$ que pasa por $(1, 1)$.
4. Determina centro y radio de $x^2 + y^2 + 8x - 2y + 8 = 0$.
5. Halla vértice, foco y directriz de $y = 2x^2$.
6. Para $\frac{x^2}{36} + \frac{y^2}{16} = 1$, halla focos y excentricidad.
7. Para $\frac{y^2}{9} - \frac{x^2}{16} = 1$, halla focos y asíntotas.
8. Convierte $(3, 3)$ a polares y $(4, \pi/6)$ a cartesianas.

**Respuestas:** 1) $d = \sqrt{80} = 4\sqrt{5}$; $M = (2, 1)$. 2) $y = 4x - 14$. 3) $y = 3x - 2$. 4) Centro $(-4, 1)$, radio $3$. 5) Vértice $(0,0)$, $p = 1/8$, foco $(0, 1/8)$, directriz $y = -1/8$. 6) Focos $(\pm \sqrt{20}, 0)$, $e = \sqrt{20}/6 \approx 0.745$. 7) Focos $(0, \pm 5)$, asíntotas $y = \pm \frac{3}{4}x$. 8) $(3\sqrt{2}, \pi/4)$ y $(2\sqrt{3}, 2)$.

## Resumen
- La geometría analítica traduce figuras a ecuaciones usando coordenadas.
- Distancia, punto medio y pendiente son las herramientas básicas.
- Rectas: punto-pendiente, pendiente-ordenada y general; paralelas igual pendiente, perpendiculares recíproco negativo.
- La circunferencia se reconoce completando cuadrados.
- Parábola, elipse e hipérbola son lugares geométricos definidos por focos; cada una tiene forma canónica y elementos característicos.
- Las coordenadas polares simplifican problemas radiales.
`,


};
