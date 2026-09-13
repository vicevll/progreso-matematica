# Funciones exponenciales y logarítmicas
**Guía simple · Funciones, trigonometría y geometría · 10°–11°**
*Crecimiento, decaimiento, modelado y ecuaciones.*

## 1. Crecimiento exponencial: la idea central
Hay dos formas básicas de crecer: sumar una cantidad fija (crecimiento lineal) o multiplicar por un factor fijo (crecimiento exponencial). La diferencia es enorme.

Con crecimiento lineal $f(n) = 3n$, en 100 pasos se llega a 300. Con crecimiento exponencial $f(n) = 2^n$, en 100 pasos se llega a un número de 31 cifras.

**Mini-ejemplo.** Una hoja de papel que se dobla duplica su grosor en cada pliegue: tras 42 pliegues supera la distancia Tierra-Luna. La intuición lineal falla por completo.

## 2. La función exponencial y sus propiedades
La función exponencial de base $a$ es
$$f(x) = a^x, \qquad a > 0, \quad a \neq 1$$

**Propiedades:**
- Dominio $\mathbb{R}$; rango $(0, \infty)$: nunca es negativa ni cero.
- Si $a > 1$ es creciente; si $0 < a < 1$ es decreciente.
- Pasa siempre por $(0, 1)$, porque $a^0 = 1$.
- Leyes: $a^{x+y} = a^x a^y$, $a^{-x} = \dfrac{1}{a^x}$, $(a^x)^y = a^{xy}$.

**Mini-ejemplo.** $\dfrac{2^{x+3}}{2^{x}} = 2^{3} = 8$.

## 3. La base $e$
La base natural es $e \approx 2.71828\ldots$, definida como el límite
$$e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n$$

Con base $e$, la función $e^x$ es su propia derivada: $\frac{d}{dx} e^x = e^x$. Por eso el crecimiento continuo se escribe
$$A(t) = A_0 e^{kt}$$
donde $k > 0$ describe crecimiento y $k < 0$ describe decaimiento.

## 4. Logaritmo: definición
El logaritmo responde la pregunta inversa: **¿a qué exponente hay que elevar la base para obtener el número?**
$$\log_a x = y \quad \Longleftrightarrow \quad a^y = x$$

Condiciones: $a > 0$, $a \neq 1$, $x > 0$. No existe el logaritmo de un número no positivo.

**Mini-ejemplo.** $\log_2 8 = 3$ porque $2^3 = 8$; además $\log_a 1 = 0$ y $\log_a a = 1$. El logaritmo natural es $\ln x = \log_e x$.

## 5. Propiedades de los logaritmos
Las propiedades se deducen de las leyes de exponentes:
$$\log_a(xy) = \log_a x + \log_a y$$
$$\log_a\left(\frac{x}{y}\right) = \log_a x - \log_a y$$
$$\log_a(x^n) = n \log_a x, \qquad \log_a \frac{1}{x} = -\log_a x$$

**Mini-ejemplo.** $\log_2 40 - \log_2 5 = \log_2 8 = 3$.

**Advertencia.** $\log_a(x + y) \neq \log_a x + \log_a y$: la propiedad del producto no se aplica a sumas.

## 6. Cambio de base
Las calculadoras solo tienen $\log_{10}$ y $\ln$, así que el cambio de base es indispensable:
$$\log_a x = \frac{\log_b x}{\log_b a} = \frac{\ln x}{\ln a} = \frac{\log_{10} x}{\log_{10} a}$$

**Mini-ejemplo.** $\log_3 20 = \dfrac{\ln 20}{\ln 3} \approx 2.73$.

## 7. Ecuaciones exponenciales y logarítmicas
**Exponenciales.** Si $a^{f(x)} = a^{g(x)}$, entonces $f(x) = g(x)$. Si las bases no se igualan, se aplica logaritmo: para $3^x = 20$ se obtiene $x = \dfrac{\ln 20}{\ln 3} \approx 2.73$.

**Logarítmicas.** Combina los logaritmos, pasa a forma exponencial y resuelve. Para $\log_2 x + \log_2(x-2) = 3$: $x(x-2) = 8 \Rightarrow x = 4$ (se rechaza $x = -2$ porque no está en el dominio).

**Mini-ejemplo.** $e^{2x} - 5e^x + 6 = 0$. Con $u = e^x$: $u^2 - 5u + 6 = 0$, luego $x = \ln 2 \approx 0.69$ o $x = \ln 3 \approx 1.10$.

## 8. Modelos de crecimiento y decaimiento
**Interés compuesto:** $A = P\left(1 + \dfrac{r}{n}\right)^{nt}$, con $P$ el capital, $r$ la tasa anual, $n$ las capitalizaciones por año y $t$ los años.

**Crecimiento continuo:** $A = Pe^{rt}$.

**Decaimiento radiactivo:** $A = A_0 e^{-kt}$; la vida media cumple $t_{1/2} = \dfrac{\ln 2}{k}$.

**Escalas logarítmicas:** $\text{pH} = -\log_{10}[H^+]$, Richter $= \log_{10}(A/A_0)$ y decibelios $= 10\log_{10}(I/I_0)$.

**Mini-ejemplo.** Con vida media de 6 horas, tras 24 horas (cuatro vidas medias) queda $\left(\frac{1}{2}\right)^4 = 6.25\%$.

## Ejercicios (20)
### Nivel 1 — Fundamentos
1. Calcula $2^5$.
2. Calcula $\log_3 81$.
3. Calcula $\ln e^4$.
4. Calcula $\log_5 1$.
5. Calcula $9^{1/2}$.

### Nivel 2 — Propiedades y cambio de base
6. Simplifica $\log_2 40 - \log_2 5$.
7. Expande $\log\left(\dfrac{x^3}{y}\right)$.
8. Combina $2\ln x + \ln y$.
9. Calcula $\log_4 8$.
10. Calcula $\log_7 50$ con tres decimales.

### Nivel 3 — Ecuaciones
11. Resuelve $2^{x+1} = 32$.
12. Resuelve $3^x = 20$ con tres decimales.
13. Resuelve $e^{2x} - 5e^x + 6 = 0$.
14. Resuelve $\log_3(x+4) - \log_3 x = 1$.
15. Resuelve $\log_2 x + \log_2(x-2) = 3$.

### Nivel 4 — Aplicaciones
16. Se invierten $1000$ al $6\%$ anual con capitalización mensual durante 5 años. Halla el monto.
17. Una población de $500$ crece de forma continua al $4\%$ anual. Halla su tamaño a los 3 años.
18. Un fármaco tiene vida media de 6 horas. ¿Qué fracción queda tras 24 horas?
19. Halla el pH de una solución con $[H^+] = 10^{-4}$ M.
20. Una sustancia radiactiva tiene vida media de 12 años. Halla su constante de decaimiento $k$.

## Respuestas
1. $32$
2. $4$
3. $4$
4. $0$
5. $3$
6. $3$
7. $3\log x - \log y$
8. $\ln(x^2 y)$
9. $\dfrac{3}{2}$
10. $2.010$
11. $x = 4$
12. $x \approx 2.727$
13. $x = \ln 2 \approx 0.693$, $x = \ln 3 \approx 1.099$
14. $x = 2$
15. $x = 4$
16. $1000(1.005)^{60} \approx 1348.85$
17. $500e^{0.12} \approx 563.75$
18. $\left(\frac{1}{2}\right)^4 = \dfrac{1}{16} = 6.25\%$
19. $4$
20. $k = \dfrac{\ln 2}{12} \approx 0.0578$
