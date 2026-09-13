# Números reales y complejos

**Guía simple · Álgebra escolar y fundamentos · 10°–11°**
*Propiedades, valor absoluto, forma polar de los números complejos.*

---

## 1. Los conjuntos numéricos

Cada operación que no tenía respuesta dentro de un conjunto obligó a ampliarlo. Así se forma la cadena:

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$$

1. $\mathbb{N}$: naturales, para contar.
2. $\mathbb{Z}$: enteros, para restar (resuelven $x + 3 = 1$).
3. $\mathbb{Q}$: racionales, para dividir (resuelven $2x = 1$).
4. $\mathbb{R}$: reales, para medir y tomar límites (resuelven $x^{2} = 2$).
5. $\mathbb{C}$: complejos, para extraer raíces de negativos (resuelven $x^{2} = -1$).

**Mini-ejemplo.** Clasifica: $\sqrt{2}$ (irracional), $-3$ (entero), $0{,}75$ (racional), $\pi$ (irracional), $\sqrt{9}$ (natural).

---

## 2. Los reales: cuerpo ordenado y completo

Los reales satisfacen tres bloques de axiomas.

**Axiomas de cuerpo.** Conmutatividad, asociatividad y distributividad de la suma y el producto:

$$a + b = b + a, \qquad ab = ba, \qquad a(b + c) = ab + ac$$

Existen neutros $0$ y $1$, y para $a \neq 0$ existe el inverso $1/a$.

**Axiomas de orden.** Para cualquier par $a, b$ se cumple exactamente una de $a < b$, $a = b$ o $a > b$, y el orden es compatible con las operaciones:

$$a < b \;\Rightarrow\; a + c < b + c, \qquad c > 0 \;\Rightarrow\; ac < bc$$

**Axioma del supremo.** Todo conjunto no vacío y acotado superiormente tiene una menor cota superior.

**Mini-ejemplo.** El supremo de $A = \{x \in \mathbb{R} : x < 2\}$ es $2$.

---

## 3. Valor absoluto, distancia e intervalos

El valor absoluto mide la distancia al origen:

$$|x| = \begin{cases} x & \text{si } x \geq 0 \\ -x & \text{si } x < 0 \end{cases}$$

De ahí que $|x - a|$ sea la distancia entre $x$ y $a$, y que

$$|x - a| < r \;\Longleftrightarrow\; a - r < x < a + r$$

Propiedades clave:

$$|ab| = |a|\,|b|, \qquad \left|\frac{a}{b}\right| = \frac{|a|}{|b|}, \qquad |a + b| \leq |a| + |b|$$

Los intervalos describen conjuntos de reales: $[a, b]$, $(a, b)$, $[a, b)$, $(a, b]$, $[a, \infty)$, $(-\infty, b)$.

**Mini-ejemplo.** $|2x - 3| \leq 7 \Rightarrow -7 \leq 2x - 3 \leq 7 \Rightarrow -2 \leq x \leq 5$, es decir $[-2, 5]$.

---

## 4. Números complejos y sus operaciones

No existe un real con cuadrado negativo; se define la unidad imaginaria:

$$i^{2} = -1$$

Un complejo es $z = a + bi$ con $a, b \in \mathbb{R}$, donde $\text{Re}(z) = a$ y $\text{Im}(z) = b$. Las operaciones son:

$$(a + bi) + (c + di) = (a + c) + (b + d)i$$

$$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$$

El conjugado es $\bar{z} = a - bi$ y cumple $z\bar{z} = a^{2} + b^{2}$. Para dividir se multiplica por el conjugado del denominador.

**Mini-ejemplo.** $(3 + 2i)(1 - 4i) = 3 - 12i + 2i - 8i^{2} = 11 - 10i$.

---

## 5. Módulo y argumento

En el plano complejo, $z = a + bi$ es el punto $(a, b)$. Su distancia al origen es el módulo:

$$|z| = \sqrt{a^{2} + b^{2}}$$

El ángulo con el eje real positivo es el argumento $\theta$, definido por

$$\tan\theta = \frac{b}{a}$$

eligiendo el cuadrante correcto según los signos de $a$ y $b$.

**Mini-ejemplo.** Para $z = -1 + i$: $r = \sqrt{2}$ y $\theta = 3\pi/4$, pues el punto está en el segundo cuadrante.

---

## 6. Forma polar

Con el módulo $r = |z|$ y el argumento $\theta$, el complejo se escribe:

$$z = r(\cos\theta + i\,\text{sen}\,\theta) = r\,\text{cis}\,\theta$$

Se recuperan las coordenadas con $a = r\cos\theta$ y $b = r\,\text{sen}\,\theta$. La forma polar simplifica el producto y el cociente:

$$z_{1} z_{2} = r_{1} r_{2}\,\text{cis}(\theta_{1} + \theta_{2}), \qquad \frac{z_{1}}{z_{2}} = \frac{r_{1}}{r_{2}}\,\text{cis}(\theta_{1} - \theta_{2})$$

**Mini-ejemplo.** $z = 1 + i$ tiene $r = \sqrt{2}$ y $\theta = \pi/4$, luego $z = \sqrt{2}\,\text{cis}\,\frac{\pi}{4}$.

---

## 7. Potencias y raíces: fórmula de De Moivre

Elevar a una potencia en forma polar es directo:

$$z^{n} = r^{n}\,\text{cis}(n\theta) \qquad \text{(De Moivre)}$$

Un complejo no nulo tiene exactamente $n$ raíces n-ésimas, dadas por

$$z_{k} = r^{1/n}\,\text{cis}\left(\frac{\theta + 2\pi k}{n}\right), \quad k = 0, 1, \ldots, n-1$$

Estas $n$ raíces forman un polígono regular inscrito en la circunferencia de radio $r^{1/n}$.

**Mini-ejemplo.** $(1 + i)^{6}$: con $r = \sqrt{2}$ y $\theta = \pi/4$, resulta $(\sqrt{2})^{6}\,\text{cis}\,\frac{3\pi}{2} = -8i$.

---

## 8. Fórmula de Euler

La identidad de Euler conecta la exponencial con la trigonometría:

$$e^{i\theta} = \cos\theta + i\,\text{sen}\,\theta$$

De ella surge el caso célebre $e^{i\pi} + 1 = 0$, que reúne las constantes $0, 1, e, i, \pi$. La forma exponencial $z = r e^{i\theta}$ hace que multiplicar sea sumar exponentes y dividir sea restarlos.

**Mini-ejemplo.** $e^{i\pi/3} = \cos\frac{\pi}{3} + i\,\text{sen}\,\frac{\pi}{3} = \frac{1}{2} + \frac{\sqrt{3}}{2}i$.

---

## Ejercicios (20)

### Nivel 1 — Conjuntos numéricos, reales y valor absoluto

1. Clasifica: $\sqrt{2}$, $-3$, $0{,}75$, $\pi$, $\sqrt{9}$.
2. Resuelve como intervalo: $|2x - 3| \leq 7$.
3. Expresa como intervalo: $|x - 5| < 3$.
4. Resuelve: $|x + 1| \geq 4$.
5. Calcula $|-7| + |3 - 9|$.

### Nivel 2 — Operaciones con complejos

6. Opera: $(3 + 2i)(1 - 4i)$.
7. Suma: $(2 - i) + (4 + 3i)$.
8. Divide: $\dfrac{2 + i}{1 - i}$.
9. Calcula $i^{2025}$.
10. Para $z = 3 - 4i$, halla $\bar{z}$ y $z\bar{z}$.

### Nivel 3 — Módulo, argumento y forma polar

11. Halla módulo y argumento de $z = -1 + i$.
12. Halla módulo y argumento de $z = \sqrt{3} + i$.
13. Expresa en forma polar $z = -1 - i$.
14. Multiplica $z_{1} = 2\,\text{cis}\,30^\circ$ y $z_{2} = 3\,\text{cis}\,60^\circ$.
15. Divide $\dfrac{6\,\text{cis}\,90^\circ}{3\,\text{cis}\,30^\circ}$.

### Nivel 4 — Potencias, raíces y Euler

16. Calcula $(1 - i)^{8}$.
17. Calcula $(1 + i)^{6}$.
18. Halla las raíces cuartas de $16$.
19. Halla las raíces cúbicas de $1$.
20. Expresa en forma $a + bi$: $e^{i\pi/3}$.

---

## Respuestas

1. Irracional, entero, racional, irracional, natural.
2. $[-2, 5]$.
3. $(2, 8)$.
4. $(-\infty, -5] \cup [3, \infty)$.
5. $13$.
6. $11 - 10i$.
7. $6 + 2i$.
8. $\frac{1}{2} + \frac{3}{2}i$.
9. $i$.
10. $\bar{z} = 3 + 4i$ y $z\bar{z} = 25$.
11. $r = \sqrt{2}$, $\theta = \frac{3\pi}{4}$.
12. $r = 2$, $\theta = \frac{\pi}{6}$.
13. $\sqrt{2}\,\text{cis}\,\frac{5\pi}{4}$.
14. $6\,\text{cis}\,90^\circ = 6i$.
15. $2\,\text{cis}\,60^\circ = 1 + \sqrt{3}i$.
16. $16$.
17. $-8i$.
18. $2$, $2i$, $-2$, $-2i$.
19. $1$, $-\frac{1}{2} + \frac{\sqrt{3}}{2}i$, $-\frac{1}{2} - \frac{\sqrt{3}}{2}i$.
20. $\frac{1}{2} + \frac{\sqrt{3}}{2}i$.
