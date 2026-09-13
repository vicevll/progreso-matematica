# Análisis armónico

El análisis armónico estudia cómo descomponer funciones y señales en componentes de frecuencia. Nace con las series de Fourier y hoy es la base del procesamiento de señales, de las ecuaciones diferenciales y de la mecánica cuántica.

## Series de Fourier

Una función periódica de periodo $2\pi$ se descompone en senos y cosenos:

$$f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos nx+b_n\operatorname{sen}nx\right).$$

1. La **componente media** es $a_0/2$.
2. La **amplitud** de la frecuencia $n$ es $a_n$ para el coseno y $b_n$ para el seno.

Los coeficientes se obtienen por ortogonalidad:

$$a_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos nx\,dx,\qquad b_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\operatorname{sen}nx\,dx.$$

En forma compleja, con $c_n=\dfrac{1}{2\pi}\displaystyle\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx$, la serie es

$$f(x)=\sum_{n=-\infty}^{\infty}c_n e^{inx}.$$

**Mini-ejemplo.** Para la onda cuadrada $f(x)=1$ si $0<x<\pi$ y $f(x)=-1$ si $-\pi<x<0$, la simetría impar da $a_0=a_n=0$ y $b_n=\dfrac{4}{n\pi}$ cuando $n$ es impar: solo aparecen armónicos impares.

## Convergencia y fenómeno de Gibbs

**Condiciones de Dirichlet.** Si $f$ es periódica, acotada y tiene un número finito de discontinuidades de salto con derivadas laterales, su serie de Fourier converge en cada punto a:

1. $f(x_0)$ si $f$ es continua en $x_0$;
2. $\dfrac{f(x_0^+)+f(x_0^-)}{2}$ si hay salto.

**Suavidad.** Si $f$ es continua y su derivada es de cuadrado integrable, la serie converge uniformemente. Más derivadas y más suavidad producen coeficientes que decaen más rápido.

**Fenómeno de Gibbs.** Cerca de una discontinuidad, las sumas parciales oscilan y sobrepasan el salto en aproximadamente el $9\%$ (constante de Wilbraham-Gibbs $\approx 8.95\%$), sin que el sobrepico desaparezca al añadir términos.

**Mini-ejemplo.** Las sumas parciales de la onda cuadrada se acercan a $\pm1$, pero junto a $x=0$ alcanzan valores cercanos a $\pm1.18$: ese exceso es el sobrepico de Gibbs.

## Transformada de Fourier

Para funciones no periódicas, la suma discreta se convierte en integral. La **transformada de Fourier** y su inversa son

$$\hat f(\omega)=\int_{-\infty}^{\infty}f(t)e^{-i\omega t}\,dt,\qquad f(t)=\frac{1}{2\pi}\int_{-\infty}^{\infty}\hat f(\omega)e^{i\omega t}\,d\omega.$$

1. $\hat f$ es el **espectro continuo**: cuánto de cada frecuencia $\omega$ contiene $f$.
2. Si $f\in L^1$, la integral define $\hat f$; por el teorema de Plancherel se extiende a $L^2$.
3. La energía se conserva: $\displaystyle\int_{-\infty}^{\infty}|f(t)|^2\,dt=\frac{1}{2\pi}\int_{-\infty}^{\infty}|\hat f(\omega)|^2\,d\omega$.

**Mini-ejemplo.** La gaussiana se transforma en gaussiana: $e^{-t^2/2}\leftrightarrow\sqrt{2\pi}\,e^{-\omega^2/2}$. Es la señal que mejor equilibra concentración en tiempo y en frecuencia.

## Propiedades y convolución

Para $a,b\in\mathbb{C}$ y $t_0,\omega_0\in\mathbb{R}$:

1. **Linealidad:** $\widehat{af+bg}=a\hat f+b\hat g$.
2. **Traslación:** $\widehat{f(t-t_0)}=e^{-i\omega t_0}\hat f(\omega)$.
3. **Modulación:** $\widehat{e^{i\omega_0 t}f(t)}=\hat f(\omega-\omega_0)$.
4. **Escala:** $\widehat{f(at)}=\dfrac{1}{|a|}\hat f\!\left(\dfrac{\omega}{a}\right)$.
5. **Derivada:** $\widehat{f'}(\omega)=i\omega\,\hat f(\omega)$.
6. **Convolución:** $\widehat{f*g}=\hat f\cdot\hat g$.

La **convolución** de dos funciones es

$$(f*g)(t)=\int_{-\infty}^{\infty}f(t-s)g(s)\,ds.$$

El teorema de convolución explica por qué un filtro actúa como una multiplicación en frecuencia: convolucionar en tiempo equivale a multiplicar espectros.

**Mini-ejemplo.** El pulso rectangular $f=\chi_{[-1,1]}$ tiene $\hat f(\omega)=\dfrac{2\operatorname{sen}\omega}{\omega}$. Convolucionar $f$ consigo mismo produce un triángulo y su transformada es $\dfrac{4\operatorname{sen}^2\omega}{\omega^2}$.

## DFT y FFT

Con $N$ muestras $x_0,\dots,x_{N-1}$, la **transformada discreta de Fourier (DFT)** es

$$X_k=\sum_{n=0}^{N-1}x_n e^{-2\pi ikn/N},\qquad x_n=\frac{1}{N}\sum_{k=0}^{N-1}X_k e^{2\pi ikn/N}.$$

1. $X_k$ mide el contenido de la frecuencia $k$-ésima.
2. La DFT directa cuesta $O(N^2)$ operaciones.
3. La **FFT** (transformada rápida) la calcula en $O(N\log N)$ dividiendo el problema en subproblemas pares e impares.

**Mini-ejemplo.** Para $x=(1,1,1,1)$ con $N=4$ se obtiene $X_0=4$ y $X_1=X_2=X_3=0$: la señal es constante y solo tiene componente de frecuencia cero. La FFT aprovecha la periodicidad para no repetir cuentas.

## Wavelets y análisis multirresolución

Las **wavelets** localizan en tiempo y en frecuencia a la vez. Una wavelet madre $\psi$ genera la familia

$$\psi_{j,k}(t)=2^{j/2}\psi(2^j t-k),\qquad j,k\in\mathbb{Z}.$$

1. $j$ controla la **escala** (frecuencia) y $k$ la **posición** (tiempo).
2. A diferencia de Fourier, responden a "¿qué frecuencia y cuándo?".
3. Son ideales para señales no estacionarias: sismos, latidos, bordes de imagen.

**Mini-ejemplo.** La wavelet de Haar es $\psi(t)=1$ en $[0,1/2)$, $\psi(t)=-1$ en $[1/2,1)$ y $\psi(t)=0$ fuera. Detecta cambios bruscos y es la base de la compresión de imágenes.

## Principio de incertidumbre

No se puede concentrar una señal simultáneamente en tiempo y en frecuencia. Si $\Delta t$ y $\Delta\omega$ son las desviaciones típicas de $|f|^2$ y $|\hat f|^2$,

$$\Delta t\cdot\Delta\omega\geq\frac{1}{2}.$$

1. Una delta de Dirac está perfectamente localizada en tiempo y tiene espectro plano.
2. Una sinusoide pura tiene frecuencia exacta y duración infinita.
3. La **gaussiana** alcanza la igualdad: es la señal óptimamente localizada.

**Mini-ejemplo.** El pulso $\chi_{[-1,1]}$ ocupa poco tiempo, pero su transformada $\dfrac{\operatorname{sen}\omega}{\omega}$ se extiende mucho en frecuencia; estrechar el pulso ensancha el espectro, y viceversa.

## Ejercicios (20)

### Nivel 1 · básico

1. Halla $a_0$ de $f(x)=x$ en $(-\pi,\pi)$.
2. ¿Cuánto vale $b_n$ para una función par?
3. Halla la transformada de Fourier de $\chi_{[-1,1]}(t)$.
4. Escribe la convolución $(f*g)(t)$.
5. Calcula la DFT de $x=(1,1)$.

### Nivel 2 · intermedio

6. Halla $b_n$ de la onda cuadrada de valores $\pm1$.
7. Halla la transformada de $e^{-a|t|}$ con $a>0$.
8. Expresa la transformada de $f(t-3)$ en términos de $\hat f$.
9. Halla la convolución de dos pulsos $\chi_{[-1/2,1/2]}$.
10. Calcula la DFT de $x=(1,0,1,0)$.

### Nivel 3 · avanzado

11. Halla $b_n$ de $f(x)=x$ en $(-\pi,\pi)$.
12. Evalúa la serie de $x$ en $x=\pi/2$ para sumar $\displaystyle\sum_{m=0}^{\infty}\frac{(-1)^m}{2m+1}$.
13. Halla la transformada de la gaussiana $e^{-t^2/2}$.
14. Compara la transformada de $\chi_{[-1/2,1/2]}*\chi_{[-1/2,1/2]}$ con el producto de transformadas.
15. Calcula la DFT de $x=(1,1,1,1)$.

### Nivel 4 · aplicado

16. ¿Qué porcentaje del salto es el sobrepico de Gibbs?
17. Usa Plancherel en $f=\chi_{[-1,1]}$ para calcular $\displaystyle\int_{-\infty}^{\infty}\left(\frac{\operatorname{sen}\omega}{\omega}\right)^2 d\omega$.
18. Con $N=8$, ¿cuál es el factor de ahorro de la FFT frente a la DFT?
19. Para $f(t)=e^{-|t|}$, calcula $\hat f(0)$.
20. ¿Por qué conviene analizar un sismo con wavelets y no con Fourier?

## Respuestas

1. $a_0=0$ (la función es impar).
2. $b_n=0$ (los senos son impares).
3. $\hat f(\omega)=\dfrac{2\operatorname{sen}\omega}{\omega}$.
4. $(f*g)(t)=\displaystyle\int_{-\infty}^{\infty}f(t-s)g(s)\,ds$.
5. $X_0=2$, $X_1=0$.
6. $b_n=\dfrac{4}{n\pi}$ si $n$ es impar y $b_n=0$ si $n$ es par.
7. $\hat f(\omega)=\dfrac{2a}{a^2+\omega^2}$.
8. $e^{-3i\omega}\hat f(\omega)$.
9. El triángulo $\Lambda(t)=\max(0,1-|t|)$.
10. $X=(2,0,2,0)$.
11. $b_n=\dfrac{2(-1)^{n+1}}{n}$.
12. $\displaystyle\sum_{m=0}^{\infty}\frac{(-1)^m}{2m+1}=\frac{\pi}{4}$.
13. $\hat f(\omega)=\sqrt{2\pi}\,e^{-\omega^2/2}$.
14. $\left(\dfrac{2\operatorname{sen}(\omega/2)}{\omega}\right)^2=\dfrac{4\operatorname{sen}^2(\omega/2)}{\omega^2}$.
15. $X=(4,0,0,0)$.
16. Aproximadamente el $9\%$ (constante de Gibbs $\approx 8.95\%$).
17. $\displaystyle\int_{-\infty}^{\infty}\left(\frac{\operatorname{sen}\omega}{\omega}\right)^2 d\omega=\pi$.
18. Factor $\dfrac{N^2}{N\log_2 N}=\dfrac{64}{24}\approx 2.67$.
19. $\hat f(0)=\displaystyle\int_{-\infty}^{\infty}e^{-|t|}\,dt=2$.
20. Porque un sismo es **no estacionario**: las wavelets localizan cada frecuencia en el instante en que ocurre.
