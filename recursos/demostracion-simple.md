# Métodos de demostración
**Guía simple · Álgebra escolar y fundamentos · 10°–11° / Univ 1**
*Directa, contrapositiva, contradicción e inducción.*

## 1. ¿Qué es demostrar?
Una **demostración** es una cadena de razonamientos que parte de definiciones, axiomas y hechos ya probados, y llega a una conclusión de manera inevitable. No es un argumento persuasivo: es una verificación que cualquiera puede revisar paso a paso.

La forma básica de una afirmación matemática es la **implicación**:
$$\text{si } P \text{ entonces } Q, \quad \text{escrito } P \Rightarrow Q$$
donde $P$ es la **hipótesis** y $Q$ la **tesis**.

- $P$ es **suficiente** para $Q$ si $P \Rightarrow Q$.
- $P$ es **necesaria** para $Q$ si $Q \Rightarrow P$.
- La **doble implicación** $P \Leftrightarrow Q$ significa que valen ambas.

**Ejemplo.** "Si $n$ es par, entonces $n^2$ es par". La hipótesis es "$n$ es par" y la tesis es "$n^2$ es par". Probar la tesis en un caso no basta: debe valer para todo $n$.

## 2. Cuantificadores y negación
Los **cuantificadores** expresan el alcance de una afirmación:
- $\forall$: "para todo" (universal).
- $\exists$: "existe" (existencial).

Las reglas de negación (De Morgan cuantificacional) son:
$$\neg(\forall x\, P(x)) \equiv \exists x\, \neg P(x), \qquad \neg(\exists x\, P(x)) \equiv \forall x\, \neg P(x).$$

**Ejemplo.** Negar "todo número es positivo" da "existe un número que no es positivo". Negar "existe un múltiplo de $7$" da "ningún número es múltiplo de $7$".

**Contraejemplo.** Para refutar $\forall x\, P(x)$ basta un solo $x$ con $\neg P(x)$. Un ejemplo no prueba una afirmación universal, pero un contraejemplo la destruye.

## 3. Demostración directa
Se supone la hipótesis y se avanza, aplicando definiciones y teoremas, hasta la tesis. La clave es **traducir cada palabra a su definición**:
- $n$ es **par** si $n = 2k$ para algún entero $k$.
- $n$ es **impar** si $n = 2k + 1$ para algún entero $k$.
- $a$ **divide** a $b$ (escrito $a \mid b$) si $b = a k$ para algún entero $k$.

**Ejemplo.** La suma de dos números pares es par.
1. Hipótesis: $a = 2m$ y $b = 2n$ con $m, n$ enteros.
2. Entonces $a + b = 2m + 2n = 2(m + n)$.
3. Como $m + n$ es entero, $a + b$ es par. $\blacksquare$

## 4. Demostración por contrapositiva
La **contrapositiva** de $P \Rightarrow Q$ es $\neg Q \Rightarrow \neg P$. Ambas son lógicamente equivalentes: probar una prueba la otra. Conviene usarla cuando la hipótesis es incómoda pero la negación de la tesis es sencilla.

**Ejemplo.** Si $n^2$ es par, entonces $n$ es par.
1. Contrapositiva: si $n$ es impar, entonces $n^2$ es impar.
2. Sea $n = 2k + 1$. Entonces $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$.
3. Es de la forma $2(\cdot) + 1$, luego impar. $\blacksquare$

**Advertencia.** La contrapositiva no es la recíproca. La recíproca de $P \Rightarrow Q$ es $Q \Rightarrow P$ y **no** es equivalente.

## 5. Demostración por contradicción
Para probar $P \Rightarrow Q$ por **reducción al absurdo**, se supone $P$ verdadera y $Q$ falsa, y se deriva una imposibilidad.

**Ejemplo clásico.** $\sqrt{2}$ es irracional.
1. Supón lo contrario: $\sqrt{2} = a/b$ con $a, b$ enteros sin factores comunes.
2. Elevando al cuadrado: $a^2 = 2b^2$, luego $a^2$ es par y, por el resultado anterior, $a$ es par: $a = 2k$.
3. Sustituyendo: $4k^2 = 2b^2$, es decir $b^2 = 2k^2$; entonces $b$ también es par.
4. Pero $a$ y $b$ no podían tener factores comunes. Contradicción. $\blacksquare$

El método es potente porque convierte una afirmación negativa ("no es racional") en un cálculo.

## 6. Demostración por casos
Cuando la hipótesis se divide de forma natural, se prueba **cada caso por separado** y se concluye que vale siempre.

**Ejemplo.** Para todo entero $n$, el producto $n^2 + n = n(n+1)$ es par.
1. Caso $n$ par: $n = 2k$, entonces $n^2 + n = 4k^2 + 2k = 2(2k^2 + k)$, par.
2. Caso $n$ impar: $n = 2k + 1$, entonces $n(n+1) = (2k+1)(2k+2) = 2(2k+1)(k+1)$, par.
3. Todo entero es par o impar, así que vale para todo $n$. $\blacksquare$

## 7. Inducción matemática
Para afirmaciones indexadas por los naturales se usa la inducción:
1. **Base:** verifica el caso inicial $n_0$.
2. **Hipótesis inductiva:** supón $P(k)$ cierta.
3. **Paso inductivo:** demuestra $P(k+1)$ usando $P(k)$.

**Ejemplo.** La suma de los primeros $n$ naturales es $1 + 2 + \cdots + n = \frac{n(n+1)}{2}$.
1. Base $n = 1$: $\frac{1 \cdot 2}{2} = 1$. Correcto.
2. Hipótesis: $1 + \cdots + k = \frac{k(k+1)}{2}$.
3. Paso: $1 + \cdots + k + (k+1) = \frac{k(k+1)}{2} + (k+1) = \frac{(k+1)(k+2)}{2}$. Correcto. $\blacksquare$

**Inducción fuerte:** se supone válido para todos los valores menores o iguales que $k$. Se usa, por ejemplo, en el teorema fundamental de la aritmética.

## 8. Doble implicación
Para probar $P \Leftrightarrow Q$ se demuestran las dos direcciones:
1. $P \Rightarrow Q$ (ida).
2. $Q \Rightarrow P$ (vuelta).

A veces se encadena con equivalencias: $P \Leftrightarrow R_1 \Leftrightarrow R_2 \Leftrightarrow Q$.

**Ejemplo.** $n$ es par si y solo si $n^2$ es par.
1. Ida: si $n = 2k$, entonces $n^2 = 4k^2 = 2(2k^2)$ es par.
2. Vuelta: si $n^2$ es par, entonces $n$ es par (probado por contrapositiva). $\blacksquare$

## Ejercicios (20)
**Nivel 1. Demostración directa y paridad.**
1. Demuestra que la suma de dos números impares es par.
2. Demuestra que el producto de dos números pares es divisible por $4$.
3. Demuestra que la suma de un número par y uno impar es impar.
4. Demuestra que si $a \mid b$ y $b \mid c$, entonces $a \mid c$.
5. Demuestra que el cuadrado de un número par es divisible por $4$.

**Nivel 2. Contrapositiva.**
6. Demuestra: si $n^2$ es par, entonces $n$ es par.
7. Demuestra: si $3n + 2$ es impar, entonces $n$ es impar.
8. Demuestra: si $n^2$ es divisible por $3$, entonces $n$ es divisible por $3$.
9. Demuestra: si $n^3$ es impar, entonces $n$ es impar.
10. Demuestra: si $mn$ es impar, entonces $m$ y $n$ son impares.

**Nivel 3. Contradicción.**
11. Demuestra que $\sqrt{2}$ es irracional.
12. Demuestra que $\sqrt{3}$ es irracional.
13. Demuestra que no existe el menor número racional positivo.
14. Demuestra que la suma de un número racional y uno irracional es irracional.
15. Demuestra que hay infinitos números primos.

**Nivel 4. Inducción y doble implicación.**
16. Prueba por inducción: $1 + 2 + \cdots + n = \frac{n(n+1)}{2}$ para $n \geq 1$.
17. Prueba por inducción: $1 + 3 + \cdots + (2n-1) = n^2$ para $n \geq 1$.
18. Prueba por inducción: $2^n > n$ para $n \geq 1$.
19. Prueba por inducción: $3^n - 1$ es divisible por $2$ para $n \geq 1$.
20. Demuestra la doble implicación: $n$ es par si y solo si $n^2$ es par.

## Respuestas
1. Si $a = 2m+1$ y $b = 2n+1$, entonces $a+b = 2(m+n+1)$, que es par.
2. $(2m)(2n) = 4mn$, y $4mn$ es múltiplo de $4$.
3. Si $a = 2m$ y $b = 2n+1$, entonces $a+b = 2(m+n)+1$, impar.
4. De $b = ak$ y $c = bl$ se sigue $c = a(kl)$, luego $a \mid c$.
5. $(2k)^2 = 4k^2$, que es $4$ por un entero.
6. Contrapositiva: si $n = 2k+1$, entonces $n^2 = 2(2k^2+2k)+1$ es impar.
7. Contrapositiva: si $n = 2k$ es par, entonces $3n+2 = 2(3k+1)$ es par.
8. Contrapositiva: si $3 \nmid n$, entonces $n = 3k+1$ o $n = 3k+2$; en ambos casos $n^2$ deja resto $1$ al dividir por $3$.
9. Contrapositiva: si $n$ es par, $n = 2k$, entonces $n^3 = 8k^3$ es par.
10. Contrapositiva: si $m$ es par o $n$ es par, su producto $mn$ es par.
11. Se supone $\sqrt{2} = a/b$ reducida; $a^2 = 2b^2$ obliga a $a$ y $b$ a ser pares, contradiciendo la reducción.
12. Análogo: $a^2 = 3b^2$ obliga a $a$ y $b$ a ser múltiplos de $3$.
13. Si $r > 0$ fuera el menor, entonces $r/2$ sería un racional positivo menor, contradicción.
14. Si $q + r = s$ con $q, s$ racionales, entonces $r = s - q$ sería racional, contradicción.
15. Dado un conjunto finito de primos $p_1, \dots, p_n$, el número $p_1 \cdots p_n + 1$ tiene un factor primo distinto de todos ellos.
16. Base $n=1$: $\frac{1 \cdot 2}{2} = 1$. Paso: $\frac{k(k+1)}{2} + (k+1) = \frac{(k+1)(k+2)}{2}$.
17. Base $n=1$: $1 = 1^2$. Paso: $k^2 + (2k+1) = (k+1)^2$.
18. Base $n=1$: $2 > 1$. Paso: $2^{k+1} = 2 \cdot 2^k > 2k \geq k+1$ para $k \geq 1$.
19. Base $n=1$: $3-1 = 2$. Paso: $3^{k+1}-1 = 3(3^k-1)+2$, múltiplo de $2$.
20. Ida ya probada; vuelta por contrapositiva: $n$ impar implica $n^2$ impar.
