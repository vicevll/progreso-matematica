# Teoría de la decisión simple

Área: **Probabilidad y estadística** · Nivel: **Univ 4–5** · Utilidad, riesgo y decisión óptima.

La teoría de la decisión estudia cómo elegir la mejor acción cuando el resultado depende de factores inciertos. Sus herramientas son la utilidad esperada, los criterios sin probabilidades (maximin, minimax, Hurwicz, Savage) y los árboles de decisión.

## Elementos de una decisión

Una decisión bajo incertidumbre se modela con cinco ingredientes:

1. **Acciones** $a \in A$: las alternativas que el decisor puede elegir ($A$ es el conjunto de acciones).
2. **Estados de la naturaleza** $s \in S$: los escenarios que no controla ($S$ es el conjunto de estados).
3. **Resultados** $r(a, s)$: la consecuencia de elegir $a$ cuando ocurre $s$ (se escribe en una tabla de pagos: filas = acciones, columnas = estados).
4. **Probabilidades** $P(s)$: la creencia sobre cada estado, con $\sum_{s \in S} P(s) = 1$.
5. **Función de utilidad** $u(x)$: convierte cada resultado en su valor subjetivo para el decisor.

La **utilidad esperada** de una acción es el promedio de las utilidades de sus resultados, ponderado por las probabilidades:

$$EU(a) = \sum_{s \in S} P(s)\,u(r(a, s)).$$

El **principio de maximización de la utilidad esperada** (von Neumann–Morgenstern) dice: elige la acción con mayor $EU$. Bajo los axiomas de racionalidad es la única regla consistente.

**Mini-ejemplo.** Apuesta $50/50$: ganar $100$ o perder $40$, con un decisor neutral al riesgo ($u(x) = x$):

$$EU = 0.5 \cdot 100 + 0.5 \cdot (-40) = 30 > 0,$$

así que un neutral al riesgo acepta la apuesta.

## Utilidad, dinero y aversión al riesgo

La utilidad **no** es lineal en dinero. La curvatura de $u$ describe la actitud ante el riesgo:

1. **Neutral al riesgo:** $u$ es lineal ($u(x) = ax + b$); decide por el valor esperado.
2. **Averso al riesgo:** $u$ es cóncava ($u''(x) < 0$, por ejemplo $u(x) = \sqrt{x}$ o $u(x) = \ln x$); prefiere lo seguro y paga por evitar incertidumbre.
3. **Amante del riesgo:** $u$ es convexa ($u''(x) > 0$, por ejemplo $u(x) = x^2$); busca apuestas.

El **equivalente de certeza** $EC$ es la cantidad segura con la misma utilidad que la apuesta:

$$u(EC) = EU(X).$$

La **prima de riesgo** es lo máximo que se paga por eliminar la incertidumbre:

$$\text{prima} = E[X] - EC.$$

Un averso tiene prima positiva; un neutral, prima cero; un amante del riesgo, prima negativa (paga por apostar).

**Mini-ejemplo.** Con $u(x) = \sqrt{x}$ y una apuesta $50/50$ entre $0$ y $100$:

$$EU = 0.5\sqrt{0} + 0.5\sqrt{100} = 5, \qquad EC = 25, \qquad \text{prima} = 50 - 25 = 25.$$

**Paradoja de San Petersburgo.** Una lotería con premio $2^n$ y probabilidad $\frac{1}{2^n}$ tiene valor esperado infinito, pero nadie paga una fortuna por jugarla: Bernoulli resolvió la paradoja proponiendo la utilidad logarítmica $u(x) = \ln x$, con la que la utilidad esperada es finita ($2\ln 2$).

## Valor de la información: VEIP y VIM

El **VEIP** (valor esperado de la información perfecta) mide cuánto vale conocer el estado con certeza antes de decidir:

$$\text{VEIP} = E_s\!\left[\max_a u(a,s)\right] - \max_a E_s\!\left[u(a,s)\right].$$

El primer término es la utilidad esperada con información perfecta (en cada estado eliges lo mejor) y el segundo, la mejor utilidad esperada sin información.

El **VIM** (valor de la información de una muestra) sustituye la certeza por las probabilidades **posteriores** $P(s \mid \text{muestra})$ obtenidas con el teorema de Bayes:

$$\text{VIM} = E_{\text{muestra}}\!\left[\max_a E_{s \mid \text{muestra}}[u(a,s)]\right] - \max_a E_s[u(a,s)].$$

**Propiedad.** $\text{VEIP} \geq \text{VIM} \geq 0$: con decisión óptima la información nunca daña. Se compra la información si su valor neto $\text{VIM} - \text{costo}$ es positivo.

**Mini-ejemplo.** Estados equiprobables con ganancias $a_1: (100, 20)$ y $a_2: (50, 40)$:

- Sin información: $EU(a_1) = 60$, $EU(a_2) = 45$; el mejor valor es $60$.
- Con información perfecta: $E_s[\max] = \tfrac{1}{2} \cdot 100 + \tfrac{1}{2} \cdot 40 = 70$.
- Por tanto $\text{VEIP} = 70 - 60 = 10$.

## Función de pérdida y riesgo de Bayes

La **pérdida** $L(\theta, a)$ mide el costo de elegir $a$ cuando la verdad es $\theta$: cero si aciertas y positiva si fallas. Las pérdidas clásicas:

1. **Cuadrática** $L = (\theta - a)^2$: penaliza el error al cuadrado.
2. **Absoluta** $L = \lvert \theta - a \rvert$: penaliza proporcionalmente al error.
3. **0-1:** $L = 0$ si $a = \theta$ y $L = 1$ si $a \neq \theta$ (clasificación).

El **riesgo** de una regla de decisión $\delta$ es su pérdida esperada cuando la verdad es $\theta$:

$$R(\theta, \delta) = E\!\left[L(\theta, \delta(X)) \mid \theta\right].$$

El **riesgo de Bayes** promedia $R$ con una distribución previa y se minimiza con el **estimador de Bayes**. Según la pérdida, el estimador óptimo es:

- Cuadrática: la **media** posterior.
- Absoluta: la **mediana** posterior.
- 0-1: la **moda** posterior.

**Mini-ejemplo.** Posterior $P(\theta = 10) = 0.2$, $P(\theta = 20) = 0.5$, $P(\theta = 30) = 0.3$. Con pérdida cuadrática, la estimación óptima es la media posterior:

$$0.2 \cdot 10 + 0.5 \cdot 20 + 0.3 \cdot 30 = 21.$$

## Criterios sin probabilidades: minimax, maximin, Hurwicz y Savage

Cuando no hay probabilidades confiables se usan criterios de **incertidumbre profunda**, que trabajan solo con la tabla de pagos. Con ganancias $u(a, s)$:

1. **Maximin:** maximiza el peor resultado, $\max_a \min_s u(a, s)$; conservador (protege del peor escenario).
2. **Maximax:** maximiza el mejor resultado, $\max_a \max_s u(a, s)$; optimista.
3. **Laplace:** supone estados equiprobables y maximiza el promedio.
4. **Hurwicz:** combina optimismo y pesimismo con $\alpha \in [0,1]$:

$$H(a) = \alpha \max_s u(a, s) + (1-\alpha) \min_s u(a, s).$$

5. **Savage (arrepentimiento minimax):** el arrepentimiento es cuánto dejaste sobre la mesa:

$$r(a,s) = \max_{a'} u(a',s) - u(a,s),$$

y se minimiza el arrepentimiento máximo: $\min_a \max_s r(a, s)$.

Con **pérdidas** $L(a, s)$ (más es peor), el criterio pesimista es el **minimax**: $\min_a \max_s L(a, s)$.

**Mini-ejemplo.** Con $a_1: (100, 20)$ y $a_2: (50, 40)$: el maximin elige $a_2$ (peor caso $40 > 20$); Hurwicz con $\alpha = 0.5$ elige $a_1$ ($60 > 45$); Savage elige $a_1$ (arrepentimiento máximo $20 < 50$).

## Árboles de decisión y análisis de sensibilidad

Un **árbol de decisión** representa decisiones secuenciales con **nodos de decisión** (cuadrados, elige el decisor) y **nodos de azar** (círculos, elige la naturaleza con probabilidades). Se resuelve por **inducción hacia atrás**:

1. Escribe las utilidades en las hojas (resultados finales).
2. En cada nodo de azar calcula $V = \sum_i P_i V_i$ (utilidad esperada de sus ramas).
3. En cada nodo de decisión elige la rama de mayor valor, $V = \max_i V_i$.
4. Propaga el resultado hasta la raíz; las ramas elegidas forman la **política óptima**.

El **análisis de sensibilidad** varía probabilidades y utilidades para ver si cambia la decisión. El **punto de indiferencia** es el valor del parámetro donde dos acciones empatan: se igualan sus utilidades esperadas y se despeja.

**Mini-ejemplo.** Perforar petróleo: seco con $0.7$ (pérdida de $1$ millón) y húmedo con $0.3$ (ganancia de $5$ millones):

$$EU(\text{perforar}) = 0.3 \cdot 5 - 0.7 \cdot 1 = 0.8\ \text{millones}.$$

Un test sísmico con valor neto positivo puede mejorar esa cifra: el árbol compara perforar directo con testear y decidir después.

## Aplicaciones

1. **Negocios:** opciones reales, inventarios, seguros y A/B testing.
2. **Medicina:** tratar o esperar, umbrales diagnósticos y priorización de trasplantes.
3. **Política pública:** respuesta a pandemias, regulación ambiental y subastas.
4. **Ingeniería:** diseño robusto y mantenimiento bajo incertidumbre.
5. **Inteligencia artificial:** agentes racionales, planificación y aprendizaje por refuerzo.

## Ejercicios (20)

### Nivel 1 · Utilidad esperada

1. Apuesta $50/50$ entre ganar $100$ y perder $40$. Halla la utilidad esperada de un decisor neutral al riesgo.
2. Un boleto cuesta $5$ y da un premio de $500$ con probabilidad $0.01$. Halla la utilidad esperada de comprarlo.
3. La acción $A$ paga $200$ seguro; la acción $B$ paga $600$ con probabilidad $0.3$ y $0$ con probabilidad $0.7$. Halla $EU(A)$, $EU(B)$ y decide.
4. Con un dado justo, el pago es el resultado multiplicado por $10$. Halla el valor esperado del pago.
5. Tres estados equiprobables; $a_1$ paga $(6,6,6)$ y $a_2$ paga $(12,3,3)$. Halla $EU(a_1)$ y $EU(a_2)$.

### Nivel 2 · Utilidad y aversión al riesgo

6. Con $u(x) = \sqrt{x}$, apuesta $50/50$ entre $0$ y $100$. Halla $EU$.
7. Con los datos del ejercicio 6, halla el equivalente de certeza $EC$.
8. Con los datos del ejercicio 6, halla la prima de riesgo.
9. Con $u(x) = \ln x$, apuesta $50/50$ entre $10$ y $1000$. Halla $EU$.
10. Con $u(x) = \sqrt{x}$, apuesta $50/50$ entre $25$ y $225$. Halla $EC$ y la prima de riesgo.

### Nivel 3 · VEIP y criterios

11. Dos estados equiprobables; $a_1: (100,20)$, $a_2: (50,40)$. Halla la mejor utilidad esperada sin información.
12. Con los datos del ejercicio 11, halla la utilidad esperada con información perfecta.
13. Con los datos del ejercicio 11, halla el VEIP.
14. Tres estados equiprobables; $a_1: (30,30,30)$, $a_2: (90,0,0)$. Halla el VEIP.
15. Estados con probabilidades $0.3$ y $0.7$; $a_1: (0,100)$, $a_2: (50,50)$. Halla el VEIP.

### Nivel 4 · Pérdida, criterios y árboles

16. Matriz $a_1: (100,20)$, $a_2: (50,40)$. Aplica el criterio maximin.
17. Con la matriz del ejercicio 16, aplica Hurwicz con $\alpha = 0.5$.
18. Con la matriz del ejercicio 16, aplica Savage y da el arrepentimiento máximo de cada acción.
19. Posterior $P(\theta=10)=0.2$, $P(\theta=20)=0.5$, $P(\theta=30)=0.3$. Con pérdida cuadrática, halla la estimación óptima.
20. Perforar petróleo: seco con $0.7$ (pérdida de $1$M) y húmedo con $0.3$ (ganancia de $5$M). Halla el VEIP y el valor neto si el test cuesta $0.1$M.

## Respuestas

1. $EU = 0.5 \cdot 100 + 0.5 \cdot (-40) = 30$.
2. $EU = 0.01 \cdot 495 + 0.99 \cdot (-5) = 4.95 - 4.95 = 0$.
3. $EU(A) = 200$; $EU(B) = 0.3 \cdot 600 = 180$; elige $A$.
4. $10 \cdot 3.5 = 35$.
5. $EU(a_1) = 6$; $EU(a_2) = \dfrac{12 + 3 + 3}{3} = 6$; indiferente.
6. $EU = 0.5\sqrt{0} + 0.5\sqrt{100} = 5$.
7. $u(EC) = 5 \Rightarrow EC = 25$.
8. $E[X] = 50$; prima $= 50 - 25 = 25$.
9. $EU = \dfrac{\ln 10 + \ln 1000}{2} = \dfrac{\ln 10000}{2} = \ln 100 \approx 4.605$.
10. $EU = 0.5 \cdot 5 + 0.5 \cdot 15 = 10$; $EC = 100$; $E[X] = 125$; prima $= 25$.
11. $EU(a_1) = 60$, $EU(a_2) = 45$; la mejor es $60$.
12. $\dfrac{100 + 40}{2} = 70$.
13. $70 - 60 = 10$.
14. Sin información: $30$; con información: $\dfrac{90 + 30 + 30}{3} = 50$; VEIP $= 20$.
15. Sin información: $EU(a_1) = 70$, $EU(a_2) = 50$; mejor $70$. Con información: $0.3 \cdot 50 + 0.7 \cdot 100 = 85$; VEIP $= 15$.
16. Peores casos: $20$ y $40$; maximin elige $a_2$ con $40$.
17. $H(a_1) = 0.5 \cdot 100 + 0.5 \cdot 20 = 60$; $H(a_2) = 0.5 \cdot 50 + 0.5 \cdot 40 = 45$; elige $a_1$.
18. Mejores por estado: $100$ y $40$. Arrepentimientos: $a_1: (0,20)$, máximo $20$; $a_2: (50,0)$, máximo $50$; Savage elige $a_1$.
19. Media posterior $= 0.2 \cdot 10 + 0.5 \cdot 20 + 0.3 \cdot 30 = 21$.
20. Sin test: $EU = 0.3 \cdot 5 - 0.7 \cdot 1 = 0.8$M. Con información perfecta: $0.3 \cdot 5 = 1.5$M. VEIP $= 0.7$M; valor neto $= 0.7 - 0.1 = 0.6$M.
