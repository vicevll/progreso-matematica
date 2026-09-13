# Trigonometría

**Nivel:** 10°–11° · **Área:** Funciones, trigonometría y geometría

Razones, identidades, ecuaciones, ley de senos y cosenos.

## Razones trigonométricas en el triángulo rectángulo

En un triángulo rectángulo con un ángulo agudo $\theta$ se definen tres razones entre sus lados:

$$\operatorname{sen}\theta = \frac{\text{cateto opuesto}}{\text{hipotenusa}}, \qquad \cos\theta = \frac{\text{cateto adyacente}}{\text{hipotenusa}}$$

$$\tan\theta = \frac{\text{cateto opuesto}}{\text{cateto adyacente}} = \frac{\operatorname{sen}\theta}{\cos\theta}$$

Estas razones dependen solo del ángulo, no del tamaño del triángulo, porque todos los triángulos rectángulos con el mismo $\theta$ son semejantes.

:::fig right-triangle adj=4 opp=3 angle=θ adjLabel=adyacente oppLabel=opuesto hypLabel=hipotenusa caption=El+ángulo+θ+y+los+tres+lados+del+triángulo+rectángulo.

**Mini-ejemplo.** En un triángulo de catetos $3$ y $4$ e hipotenusa $5$, para el ángulo opuesto al cateto $3$:

$$\operatorname{sen}\theta = \frac{3}{5}, \qquad \cos\theta = \frac{4}{5}, \qquad \tan\theta = \frac{3}{4}$$

## El círculo unitario

El círculo unitario (radio $1$, centro en el origen) extiende las razones a cualquier ángulo. Si el lado terminal de $\theta$ corta el círculo en $(x, y)$:

$$\cos\theta = x, \qquad \operatorname{sen}\theta = y, \qquad \tan\theta = \frac{y}{x}$$

Seno y coseno quedan definidos para todo real; la tangente, salvo donde $x = 0$. Los signos por cuadrante siguen la regla:

| Cuadrante | $\operatorname{sen}\theta$ | $\cos\theta$ | $\tan\theta$ |
|---|---|---|---|
| I | $+$ | $+$ | $+$ |
| II | $+$ | $-$ | $-$ |
| III | $-$ | $-$ | $+$ |
| IV | $-$ | $+$ | $-$ |

**Mini-ejemplo.** Si el lado terminal pasa por $(-3, 4)$, entonces $r = \sqrt{9 + 16} = 5$ y

$$\operatorname{sen}\theta = \frac{4}{5}, \qquad \cos\theta = -\frac{3}{5}, \qquad \tan\theta = -\frac{4}{3}$$

## Radianes y ángulos notables

Los radianes son la unidad natural de ángulo: $2\pi$ radianes equivalen a $360°$, de modo que $\pi$ rad $= 180°$. Para convertir se multiplica por $\frac{\pi}{180}$ (grados a radianes) o por $\frac{180}{\pi}$ (radianes a grados).

| Ángulo (grados) | $0$ | $30$ | $45$ | $60$ | $90$ |
|---|---|---|---|---|---|
| Radianes | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
| $\operatorname{sen}$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ | $1$ |
| $\cos$ | $1$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$ | $0$ |
| $\tan$ | $0$ | $\dfrac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | no definida |

**Mini-ejemplo.** $150° = 150 \cdot \frac{\pi}{180} = \frac{5\pi}{6}$; y $\frac{5\pi}{4} = \frac{5\pi}{4} \cdot \frac{180}{\pi} = 225°$.

:::fig right-triangle adj=1 opp=1 angle=45° adjLabel=1 oppLabel=1 hypLabel=√2 caption=Triángulo+45-45-90.

:::fig right-triangle adj=1.732 opp=1 angle=30° adjLabel=√3 oppLabel=1 hypLabel=2 caption=Triángulo+30-60-90.

## Identidades fundamentales

La identidad pitagórica se deduce de $x^2 + y^2 = 1$ en el círculo unitario:

$$\operatorname{sen}^2\theta + \cos^2\theta = 1$$

Dividiendo entre $\cos^2\theta$ y entre $\operatorname{sen}^2\theta$:

$$1 + \tan^2\theta = \sec^2\theta, \qquad 1 + \cot^2\theta = \csc^2\theta$$

Las identidades de paridad y la periodicidad completan las herramientas básicas:

$$\operatorname{sen}(-\theta) = -\operatorname{sen}\theta, \qquad \cos(-\theta) = \cos\theta, \qquad \tan(-\theta) = -\tan\theta$$

$$\operatorname{sen}(\theta + 2\pi) = \operatorname{sen}\theta, \qquad \cos(\theta + 2\pi) = \cos\theta, \qquad \tan(\theta + \pi) = \tan\theta$$

**Mini-ejemplo.** Simplificar $\dfrac{1 - \cos^2\theta}{\operatorname{sen}\theta} = \dfrac{\operatorname{sen}^2\theta}{\operatorname{sen}\theta} = \operatorname{sen}\theta$.

## Identidades de suma, doble y medio ángulo

**Suma y diferencia:**

$$\operatorname{sen}(\alpha \pm \beta) = \operatorname{sen}\alpha\cos\beta \pm \cos\alpha\operatorname{sen}\beta$$

$$\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \operatorname{sen}\alpha\operatorname{sen}\beta$$

**Doble ángulo:**

$$\operatorname{sen}(2\theta) = 2\operatorname{sen}\theta\cos\theta$$

$$\cos(2\theta) = \cos^2\theta - \operatorname{sen}^2\theta = 1 - 2\operatorname{sen}^2\theta = 2\cos^2\theta - 1$$

**Medio ángulo:**

$$\operatorname{sen}^2\theta = \frac{1 - \cos(2\theta)}{2}, \qquad \cos^2\theta = \frac{1 + \cos(2\theta)}{2}$$

**Mini-ejemplo.** $\operatorname{sen}75° = \operatorname{sen}(45° + 30°)$:

$$= \frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2}\cdot\frac{1}{2} = \frac{\sqrt{6} + \sqrt{2}}{4}$$

## Ecuaciones trigonométricas

Una ecuación trigonométrica tiene infinitas soluciones por la periodicidad. El método es:

1. Simplifica con identidades hasta una sola función trigonométrica.
2. Despeja la función y halla el ángulo base con la inversa.
3. Agrega todas las soluciones del periodo.
4. Restringe al intervalo pedido.

Si $\operatorname{sen}\theta = k$, las soluciones son $\theta = \alpha + 2\pi n$ o $\theta = \pi - \alpha + 2\pi n$. Si $\cos\theta = k$, son $\theta = \pm\alpha + 2\pi n$. Si $\tan\theta = k$, son $\theta = \alpha + \pi n$.

**Mini-ejemplo.** Resolver $2\operatorname{sen}\theta - 1 = 0$ en $[0, 2\pi)$:

$$\operatorname{sen}\theta = \frac{1}{2} \;\Rightarrow\; \theta = \frac{\pi}{6}, \qquad \theta = \frac{5\pi}{6}$$

## Ley de senos y ley de cosenos

Para triángulos no rectángulos, con lados $a, b, c$ opuestos a los ángulos $A, B, C$:

**Ley de senos:**

$$\frac{a}{\operatorname{sen}A} = \frac{b}{\operatorname{sen}B} = \frac{c}{\operatorname{sen}C} = 2R$$

**Ley de cosenos:**

$$c^2 = a^2 + b^2 - 2ab\cos C$$

La ley de cosenos generaliza el teorema de Pitágoras: si $C = 90°$, entonces $\cos C = 0$ y queda $c^2 = a^2 + b^2$.

- Usa la **ley de senos** con dos ángulos y un lado, o con dos lados y el ángulo opuesto a uno de ellos.
- Usa la **ley de cosenos** con dos lados y el ángulo entre ellos, o con los tres lados.

**Mini-ejemplo.** Con $a = 7$, $b = 10$ y $C = 60°$:

$$c^2 = 49 + 100 - 2(7)(10)\left(\frac{1}{2}\right) = 79 \;\Rightarrow\; c \approx 8.89$$

## Gráficas de las funciones trigonométricas

- $y = \operatorname{sen}x$: dominio $\mathbb{R}$, rango $[-1, 1]$, periodo $2\pi$, cruza el origen.
- $y = \cos x$: igual que el seno, pero empieza en el máximo $(0, 1)$.
- $y = \tan x$: periodo $\pi$, asíntotas verticales en $x = \frac{\pi}{2} + k\pi$, rango $\mathbb{R}$.

La forma general es

$$y = A\operatorname{sen}\big(B(x - C)\big) + D$$

donde $|A|$ es la **amplitud**, $\dfrac{2\pi}{|B|}$ el **periodo**, $C$ el **desfase** y $D$ la **línea media**.

**Mini-ejemplo.** Para $y = 3\operatorname{sen}(2x - \pi) + 1$: amplitud $3$, periodo $\pi$, desfase $\frac{\pi}{2}$ a la derecha y línea media $y = 1$; el rango es $[-2, 4]$.

## Ejercicios (20)

### Nivel 1

1. En un triángulo rectángulo, el cateto opuesto a $\theta$ mide $5$ y la hipotenusa $13$. Halla $\operatorname{sen}\theta$, $\cos\theta$ y $\tan\theta$.
2. Convierte $210°$ a radianes.
3. Convierte $\dfrac{3\pi}{4}$ a grados.
4. Halla $\operatorname{sen}60°$, $\cos 60°$ y $\tan 60°$.
5. El lado terminal de $\theta$ pasa por $(5, -12)$. Halla $\operatorname{sen}\theta$, $\cos\theta$ y $\tan\theta$.

### Nivel 2

6. Simplifica $\dfrac{1 - \cos^2\theta}{\operatorname{sen}\theta}$.
7. Si $\cos\theta = \dfrac{3}{5}$ y $\theta$ está en el cuarto cuadrante, halla $\operatorname{sen}\theta$ y $\tan\theta$.
8. Calcula $\operatorname{sen}15°$ con la identidad de la diferencia.
9. Describe la amplitud y el periodo de $y = 4\operatorname{sen}(3x)$.
10. Resuelve $2\operatorname{sen}\theta - 1 = 0$ en $[0, 2\pi)$.

### Nivel 3

11. Resuelve $\cos^2\theta - \dfrac{1}{4} = 0$ en $[0, 2\pi)$.
12. Si $\operatorname{sen}x = \dfrac{3}{5}$ y $x$ está en el primer cuadrante, halla $\operatorname{sen}(2x)$.
13. Si $\operatorname{sen}\theta = \dfrac{1}{3}$, halla $\cos(2\theta)$.
14. En un triángulo, $a = 8$, $A = 30°$ y $B = 45°$. Halla $b$.
15. Dos lados de $6$ y $8$ forman un ángulo de $120°$. Halla el tercer lado.

### Nivel 4

16. Resuelve $\tan\theta = 1$ en $[0, 2\pi)$.
17. Verifica la identidad $\dfrac{\operatorname{sen}^2\theta}{1 - \cos\theta} = 1 + \cos\theta$.
18. Calcula $\operatorname{sen}75°$ con la identidad de la suma.
19. Desde una distancia de $30$ m se observa la cima de un edificio con un ángulo de elevación de $60°$. Halla la altura.
20. Para $y = -3\cos(2x) + 2$, indica amplitud, periodo y rango.

## Respuestas

1. $\operatorname{sen}\theta = \dfrac{5}{13}$, $\cos\theta = \dfrac{12}{13}$, $\tan\theta = \dfrac{5}{12}$.
2. $\dfrac{7\pi}{6}$.
3. $135°$.
4. $\operatorname{sen}60° = \dfrac{\sqrt{3}}{2}$, $\cos 60° = \dfrac{1}{2}$, $\tan 60° = \sqrt{3}$.
5. $\operatorname{sen}\theta = -\dfrac{12}{13}$, $\cos\theta = \dfrac{5}{13}$, $\tan\theta = -\dfrac{12}{5}$.
6. $\operatorname{sen}\theta$.
7. $\operatorname{sen}\theta = -\dfrac{4}{5}$, $\tan\theta = -\dfrac{4}{3}$.
8. $\dfrac{\sqrt{6} - \sqrt{2}}{4}$.
9. Amplitud $4$, periodo $\dfrac{2\pi}{3}$.
10. $\theta = \dfrac{\pi}{6}$ y $\theta = \dfrac{5\pi}{6}$.
11. $\theta = \dfrac{\pi}{3}, \dfrac{2\pi}{3}, \dfrac{4\pi}{3}, \dfrac{5\pi}{3}$.
12. $\operatorname{sen}(2x) = \dfrac{24}{25}$.
13. $\cos(2\theta) = \dfrac{7}{9}$.
14. $b = 8\sqrt{2} \approx 11.31$.
15. $\sqrt{148} = 2\sqrt{37} \approx 12.17$.
16. $\theta = \dfrac{\pi}{4}$ y $\theta = \dfrac{5\pi}{4}$.
17. Válida: $\operatorname{sen}^2\theta = (1 - \cos\theta)(1 + \cos\theta)$.
18. $\dfrac{\sqrt{6} + \sqrt{2}}{4}$.
19. $h = 30\sqrt{3} \approx 51.96$ m.
20. Amplitud $3$, periodo $\pi$, rango $[-1, 5]$.
