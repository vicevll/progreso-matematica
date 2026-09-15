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

:::fig func f=x^2 xmin=-4 xmax=4 label=y%20%3D%20x^2 caption=Cuadrática%3A%20parábola

:::fig func f=x^3 xmin=-3 xmax=3 label=y%20%3D%20x^3 caption=Cúbica

:::fig func f=abs(x) xmin=-4 xmax=4 label=y%20%3D%20%7Cx%7C caption=Valor%20absoluto

:::fig func f=sqrt(x) xmin=0 xmax=6 label=y%20%3D%20sqrt(x) caption=Raíz%20cuadrada

:::fig func f=1/x xmin=-5 xmax=5 ymin=-5 ymax=5 label=y%20%3D%201%2Fx caption=Racional%201%2Fx

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

## Inyectiva, sobreyectiva y biyectiva
- **Inyectiva:** entradas distintas dan salidas distintas ($f(x_1) = f(x_2) \Rightarrow x_1 = x_2$). Pasa la prueba de la recta horizontal.
- **Sobreyectiva:** todo elemento del codominio es alcanzado.
- **Biyectiva:** ambas cosas; entonces existe inversa $f^{-1}: B \to A$.

**Ejemplo.** $f(x) = x^3$ con $f: \mathbb{R} \to \mathbb{R}$ es biyectiva y tiene inversa $f^{-1}(x) = \sqrt[3]{x}$. $f(x) = x^2$ con $f: \mathbb{R} \to \mathbb{R}$ no es inyectiva ni sobreyectiva.

## Función cuadrática

Una función **cuadrática** tiene la forma $f(x) = ax^2 + bx + c$ con $a \neq 0$. Su gráfica es una **parábola**.

- Si $a > 0$ la parábola abre hacia arriba; si $a < 0$, hacia abajo.
- El **vértice** está en $x = -\frac{b}{2a}$: ahí se alcanza el mínimo (o el máximo).
- El eje de simetría es la recta vertical que pasa por el vértice.
- Las raíces se calculan con la fórmula general $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

:::fig func f=x^2 xmin=-4 xmax=4 label=y%20%3D%20x^2 caption=Parábola%3A%20y%20%3D%20x^2

:::fig func f=x^2-4*x+3 xmin=-2 xmax=6 label=y%20%3D%20x^2-4x%203 caption=Parábola%20con%20raíces%20en%201%20y%203

**Ejemplo.** Para $f(x) = x^2 - 4x + 3$: el vértice está en $x = 2$ con $f(2) = -1$, y las raíces son $x = 1$ y $x = 3$.

## Gráficas de la función lineal y afín

La función **lineal** $f(x) = mx$ y la **afín** $f(x) = mx + b$ tienen como gráfica una **recta**:

- $m$ es la **pendiente**: la inclinación de la recta.
- $b$ es la **ordenada al origen**: el punto donde la recta corta el eje $y$.

:::fig func f=x xmin=-5 xmax=5 label=y%20%3D%20x caption=Función%20lineal%3A%20y%20%3D%20x

:::fig func f=2*x+1 xmin=-5 xmax=5 label=y%20%3D%202x%20%2B%201 caption=Función%20afín%3A%20y%20%3D%202x%20%2B%201

Si $m > 0$ la recta sube; si $m < 0$ baja; si $m = 0$ es horizontal.

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

## Gráficas de la exponencial y el logaritmo

La **exponencial** $f(x) = a^x$ con $a > 1$ crece muy rápido: pasa por $(0, 1)$ y el eje $x$ es una **asíntota** (la curva se acerca pero nunca lo toca).

:::fig func f=2^x xmin=-3 xmax=5 label=y%20%3D%202^x caption=Exponencial%3A%20y%20%3D%202^x

El **logaritmo** $g(x) = \log_a x$ es la función inversa: pasa por $(1, 0)$, crece lentamente y tiene al eje $y$ como asíntota. Las gráficas de $a^x$ y $\log_a x$ son simétricas respecto a la recta $y = x$.

:::fig func f=ln(x) xmin=0.2 xmax=6 label=y%20%3D%20ln(x) caption=Logaritmo%20natural%3A%20y%20%3D%20ln(x)

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

:::fig right-triangle adj=4 opp=3 angle=θ adjLabel=adyacente oppLabel=opuesto hypLabel=hipotenusa caption=El%20ángulo%20θ%20y%20los%20tres%20lados:%20adyacente,%20opuesto%20e%20hipotenusa. 
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

:::fig right-triangle adj=1 opp=1 angle=45° adjLabel=1 oppLabel=1 hypLabel=√2 caption=Triángulo%2045-45-90:%20catetos%20iguales%20e%20hipotenusa%20√2. 

:::fig right-triangle adj=1.732 opp=1 angle=30° adjLabel=√3 oppLabel=1 hypLabel=2 caption=Triángulo%2030-60-90:%20lados%20en%20razón%201:%20√3:%202. 

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


};
