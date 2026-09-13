# Límites y continuidad

El límite describe a qué valor se acerca una función cuando la variable se aproxima a un punto, aunque la función no esté definida allí. Es la base de la derivada, la integral y del estudio de la continuidad.

## 1. Idea de límite y sustitución directa
$$\lim_{x\to c} f(x)=L$$
significa que $f(x)$ puede hacerse tan cercano a $L$ como se quiera tomando $x$ suficientemente cerca de $c$. Lo importante es el comportamiento **alrededor** de $c$, no el valor en $c$.

Si $f$ es continua en $c$, el límite se obtiene por **sustitución directa**:
$$\lim_{x\to c} f(x)=f(c)$$
**Mini-ejemplo.** $\lim_{x\to 2}(3x^2-4x+1)=3(4)-4(2)+1=5$.

## 2. Definición formal épsilon-delta
$$\lim_{x\to c} f(x)=L \iff \forall \varepsilon>0\ \exists \delta>0:\ 0<|x-c|<\delta \Rightarrow |f(x)-L|<\varepsilon$$
Para cada margen $\varepsilon$ alrededor de $L$ existe un margen $\delta$ alrededor de $c$ donde todos los valores de $f$ caen dentro. El $\varepsilon$ es el reto y el $\delta$ la respuesta.

**Mini-ejemplo.** Para $\lim_{x\to 3}(2x-1)=5$, dado $\varepsilon$ se elige $\delta=\varepsilon/2$; si $|x-3|<\delta$, entonces $|2x-1-5|=2|x-3|<2\delta=\varepsilon$.

## 3. Límites laterales
El límite por la izquierda usa valores menores que $c$ ($x\to c^-$); el de la derecha, valores mayores ($x\to c^+$).
$$\lim_{x\to c} f(x)=L \iff \lim_{x\to c^-} f(x)=\lim_{x\to c^+} f(x)=L$$
**Mini-ejemplo.** $f(x)=\dfrac{|x|}{x}$ cumple $\lim_{x\to0^-}f(x)=-1$ y $\lim_{x\to0^+}f(x)=1$; como difieren, el límite no existe.

## 4. Álgebra de límites
Si $\lim_{x\to c}f(x)=L$ y $\lim_{x\to c}g(x)=M$:
$$\lim(f\pm g)=L\pm M,\qquad \lim(fg)=L\cdot M,\qquad \lim\frac{f}{g}=\frac{L}{M}\ (M\neq0)$$
$$\lim[f]^n=L^n,\qquad \lim\sqrt[n]{f}=\sqrt[n]{L}$$
También $\lim_{x\to c}c=c$ y $\lim_{x\to c}x=c$.

**Mini-ejemplo.** $\lim_{x\to1}(x^2+3)=\left(\lim_{x\to1}x\right)^2+3=1+3=4$.

## 5. Indeterminaciones y técnicas
Las formas indeterminadas son:
$$\frac{0}{0},\quad \frac{\infty}{\infty},\quad 0\cdot\infty,\quad \infty-\infty,\quad 1^\infty,\quad 0^0,\quad \infty^0$$
Cada una exige una técnica:
1. Factorizar para $\frac{0}{0}$ con polinomios.
2. Racionalizar (multiplicar por el conjugado) cuando hay raíces.
3. Usar común denominador para $\infty-\infty$.
4. Dividir por la potencia dominante para $\frac{\infty}{\infty}$.
5. Aplicar límites notables.
6. Usar L'Hôpital en $\frac{0}{0}$ o $\frac{\infty}{\infty}$: $\lim\dfrac{f}{g}=\lim\dfrac{f'}{g'}$.

**Mini-ejemplo.** $\lim_{x\to2}\dfrac{x^2-4}{x-2}=\lim_{x\to2}(x+2)=4$.

## 6. Límites al infinito y asíntotas
En un cociente de polinomios decide el grado:
1. Grado del numerador menor que el del denominador: límite $0$.
2. Grados iguales: cociente de los coeficientes líderes.
3. Grado del numerador mayor: el límite es $\pm\infty$.

**Mini-ejemplo.** $\lim_{x\to\infty}\dfrac{3x^2+x}{2x^2-5}=\dfrac{3}{2}$.

Las asíntotas describen el comportamiento extremo:
1. Vertical en $x=c$ si algún límite lateral es $\pm\infty$.
2. Horizontal $y=L$ si $\lim_{x\to\pm\infty}f(x)=L$.

## 7. Límites notables
$$\lim_{x\to0}\frac{\text{sen}\,x}{x}=1,\qquad \lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12$$
$$\lim_{x\to0}\frac{e^x-1}{x}=1,\qquad \lim_{x\to\infty}\left(1+\frac1x\right)^x=e$$
**Mini-ejemplo.** $\lim_{x\to0}\dfrac{\text{sen}\,3x}{x}=3\lim_{x\to0}\dfrac{\text{sen}\,3x}{3x}=3$.

La forma general del número $e$:
$$\lim_{x\to\infty}\left(1+\frac{r}{x}\right)^x=e^r$$

## 8. Continuidad, discontinuidad y TVI
$f$ es continua en $c$ si se cumplen tres condiciones:
1. $f(c)$ existe.
2. $\lim_{x\to c}f(x)$ existe.
3. $\lim_{x\to c}f(x)=f(c)$.

Tipos de discontinuidad:
1. **Evitable:** el límite existe pero no coincide con $f(c)$ (o $f(c)$ no existe).
2. **De salto:** los laterales existen, son finitos y distintos.
3. **Infinita:** algún límite lateral es $\pm\infty$ (hay asíntota vertical).

**Teorema del valor intermedio (TVI).** Si $f$ es continua en $[a,b]$ y $k$ está entre $f(a)$ y $f(b)$, entonces existe $c\in(a,b)$ con $f(c)=k$.

**Mini-ejemplo.** $f(x)=x^3-x-1$ cumple $f(1)=-1$ y $f(2)=5$; como es continua, existe $c\in(1,2)$ con $f(c)=0$.

## Ejercicios (20)

### Nivel 1 · Sustitución directa
1. $\lim_{x\to2}(3x^2-4x+1)$.
2. $\lim_{x\to-1}(x^3+2x-1)$.
3. $\lim_{x\to0}\dfrac{x+3}{x^2+1}$.
4. $\lim_{x\to4}\sqrt{x^2-7}$.
5. $\lim_{x\to1}\dfrac{2x+1}{x+2}$.

### Nivel 2 · Factorización y racionalización
6. $\lim_{x\to3}\dfrac{x^2-9}{x-3}$.
7. $\lim_{x\to-1}\dfrac{x^2-1}{x+1}$.
8. $\lim_{x\to2}\dfrac{x^2-5x+6}{x-2}$.
9. $\lim_{x\to0}\dfrac{\sqrt{x+1}-1}{x}$.
10. $\lim_{x\to4}\dfrac{\sqrt{x}-2}{x-4}$.

### Nivel 3 · Infinito y notables
11. $\lim_{x\to\infty}\dfrac{2x^2+3x}{5x^2-1}$.
12. $\lim_{x\to\infty}\dfrac{5x^3-2x}{4x^3+x^2}$.
13. $\lim_{x\to\infty}\dfrac{3x+1}{x^2+2x}$.
14. $\lim_{x\to0}\dfrac{\text{sen}\,3x}{x}$.
15. $\lim_{x\to\infty}\left(1+\dfrac{1}{x}\right)^{2x}$.

### Nivel 4 · Continuidad y demostración
16. $\lim_{x\to0}\dfrac{1-\cos x}{x}$.
17. Halla $k$ para que $f(x)=\begin{cases}x^2+1 & x<2\\ kx & x\geq2\end{cases}$ sea continua.
18. Analiza la continuidad de $f(x)=\dfrac{x-1}{x^2-1}$.
19. Calcula $\lim_{x\to0^+}\dfrac{|x|}{x}$.
20. Demuestra con épsilon-delta que $\lim_{x\to1}(3x)=3$.

## Respuestas
1. $5$.
2. $-4$.
3. $3$.
4. $3$.
5. $1$.
6. $6$.
7. $-2$.
8. $-1$.
9. $\dfrac{1}{2}$.
10. $\dfrac{1}{4}$.
11. $\dfrac{2}{5}$.
12. $\dfrac{5}{4}$.
13. $0$.
14. $3$.
15. $e^2$.
16. $0$.
17. $k=\dfrac{5}{2}$.
18. Discontinuidad evitable en $x=1$ (límite $\tfrac12$); infinita en $x=-1$.
19. $1$.
20. Toma $\delta=\dfrac{\varepsilon}{3}$: si $|x-1|<\delta$, entonces $|3x-3|=3|x-1|<3\delta=\varepsilon$.
