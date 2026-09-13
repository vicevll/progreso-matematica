# Teoría de la decisión simple

La teoría de la decisión estudia cómo elegir la mejor acción cuando el resultado depende de factores inciertos. Área: **Probabilidad y estadística** · Nivel: **Univ 4–5** · Utilidad, riesgo y decisión óptima.

## Elementos de una decisión

Una decisión bajo incertidumbre se modela con:

1. **Acciones** $a \in A$: las alternativas que el decisor puede elegir.
2. **Estados de la naturaleza** $s \in S$: los escenarios que no controla.
3. **Resultados** $r(a, s)$: la consecuencia de elegir $a$ cuando ocurre $s$.
4. **Probabilidades** $P(s)$: las creencias sobre cada estado, con $\sum_{s} P(s) = 1$.
5. **Función de utilidad** $u(r)$: ordena las preferencias sobre los resultados.

La **utilidad esperada** de una acción promedia la utilidad de sus resultados:
$$EU(a) = \sum_{s \in S} P(s)\,u(r(a, s)).$$

El **principio de maximización de la utilidad esperada** (von Neumann–Morgenstern) afirma que la acción óptima es la de mayor $EU$. Bajo los axiomas de racionalidad, es la única regla consistente.

**Mini-ejemplo.** En una apuesta justa que gana $100$ con probabilidad $0.5$ y pierde $40$ con probabilidad $0.5$:
$$EU = 0.5 \cdot 100 + 0.5 \cdot (-40) = 30 > 0,$$
así que un decisor neutral al riesgo acepta la apuesta.

## Utilidad, dinero y aversión al riesgo

La utilidad **no** es lineal en dinero. La curvatura de $u$ describe la actitud ante el riesgo:

1. **Neutral al riesgo:** $u$ es lineal; decide por el valor esperado.
2. **Averso al riesgo:** $u$ es cóncava; prefiere un pago seguro al valor esperado de una apuesta.
3. **Amante del riesgo:** $u$ es convexa; prefiere la apuesta.

El **equivalente de certeza** $EC$ es la cantidad segura con la misma utilidad esperada que la apuesta:
$$u(EC) = EU(X).$$

La **prima de riesgo** es lo máximo que se paga por eliminar la incertidumbre:
$$\text{prima} = E[X] - EC.$$

Un decisor averso tiene $\text{prima} > 0$; uno neutral, $\text{prima} = 0$.

**Mini-ejemplo.** Con $u(x) = \sqrt{x}$ y una apuesta $50/50$ entre $0$ y $100$:
$$EU = 0.5\sqrt{0} + 0.5\sqrt{100} = 5, \qquad EC = 25, \qquad \text{prima} = 50 - 25 = 25.$$

**Paradoja de San Petersburgo.** El valor esperado infinito de cierta lotería no se traduce en utilidad infinita; Bernoulli propuso $u(x) = \ln x$ para resolverla.

## Valor de la información: VEIP y VIM

El **VEIP** (valor esperado de la información perfecta) mide cuánto vale conocer el estado antes de decidir:
$$\text{VEIP} = E_s\!\left[\max_a u(a,s)\right] - \max_a E_s\!\left[u(a,s)\right].$$

El primer término es la utilidad esperada con información perfecta y el segundo, sin información.

El **VIM** (valor de la información de una muestra) sustituye la certeza por las probabilidades **posteriores** obtenidas con un experimento.

**Propiedad.** $\text{VEIP} \geq \text{VIM} \geq 0$: con una decisión óptima la información nunca daña. Su costo se compara con su valor.

**Mini-ejemplo.** Con dos estados equiprobables y ganancias $a_1: (100, 20)$, $a_2: (50, 40)$:
- Sin información: $EU(a_1) = 60$, $EU(a_2) = 45$; el mejor es $60$.
- Con información perfecta: $E_s[\max] = \tfrac{1}{2}(100) + \tfrac{1}{2}(40) = 70$.
- Por tanto $\text{VEIP} = 70 - 60 = 10$.

## Función de pérdida y riesgo de Bayes

Formulación equivalente con **pérdidas** $L(\theta, a)$. El **riesgo** de una regla de decisión $\delta$ es la pérdida esperada:
$$R(\theta, \delta) = E\!\left[L(\theta, \delta(X)) \mid \theta\right].$$

El **riesgo de Bayes** promedia $R$ con una distribución previa y se minimiza eligiendo el estimador de Bayes. Según la pérdida, el estimador óptimo es:

1. **Cuadrática** $L = (\theta - a)^2$: la **media** posterior.
2. **Absoluta** $L = |\theta - a|$: la **mediana** posterior.
3. **0-1** (clasificación): la **moda** posterior.

**Mini-ejemplo.** Si la posterior es $P(\theta = 10) = 0.2$, $P(\theta = 20) = 0.5$ y $P(\theta = 30) = 0.3$, con pérdida cuadrática la estimación óptima es la media posterior
$$0.2 \cdot 10 + 0.5 \cdot 20 + 0.3 \cdot 30 = 21.$$

## Criterios sin probabilidades: minimax, maximin, Hurwicz y Savage

Cuando no hay probabilidades confiables se usan criterios de incertidumbre profunda:

1. **Maximin:** maximiza el peor resultado, $\max_a \min_s u(a, s)$; es conservador.
2. **Minimax (Wald):** minimiza la pérdida máxima, $\min_a \max_s L(a, s)$.
3. **Hurwicz:** combina optimismo y pesimismo con $\alpha \in [0,1]$:
$$H(a) = \alpha \max_s u(a, s) + (1-\alpha) \min_s u(a, s).$$
4. **Savage (arrepentimiento minimax):** con arrepentimiento $r(a,s) = \max_{a'} u(a',s) - u(a,s)$, minimiza $\max_s r(a,s)$.

**Mini-ejemplo.** Con $a_1: (100, 20)$ y $a_2: (50, 40)$: el maximin elige $a_2$ (peor caso $40 > 20$), mientras que Hurwicz con $\alpha = 0.5$ elige $a_1$ ($60 > 45$).

## Árboles de decisión y análisis de sensibilidad

Un **árbol de decisión** representa decisiones de forma secuencial mediante **nodos de decisión** (cuadrados) y **nodos de azar** (círculos). Se resuelve por **inducción hacia atrás**:

1. Asigna probabilidades a las ramas de azar y utilidades a las hojas.
2. Calcula la utilidad esperada de cada nodo de azar.
3. En cada nodo de decisión elige la rama de mayor valor.
4. Propaga el resultado hacia la raíz.

El **análisis de sensibilidad** varía probabilidades y utilidades para ver si cambia la decisión. El **punto de indiferencia** es el valor donde dos acciones empatan.

**Mini-ejemplo.** Perforar petróleo: seco con $0.7$ (pérdida $1$M) y húmedo con $0.3$ (ganancia $5$M).
$$EU(\text{perforar}) = 0.3 \cdot 5 - 0.7 \cdot 1 = 0.8\ \text{M}.$$

## Aplicaciones

1. **Negocios:** opciones reales, inventarios, seguros y A/B testing.
2. **Medicina:** tratar o esperar, umbrales diagnósticos y priorización de trasplantes.
3. **Política pública:** respuesta a pandemias, regulación ambiental y subastas.
4. **Inteligencia artificial:** agentes racionales, planificación y aprendizaje por refuerzo.

**Mini-ejemplo médico.** Tratar una enfermedad rara: la utilidad de curar es alta, pero los efectos adversos importan; el umbral de decisión depende de la probabilidad de la enfermedad.

## Ejercicios (20)

### Nivel 1 · Utilidad esperada

1. Apuesta $50/50$ entre ganar $100$ y perder $40$. Halla la utilidad esperada de un decisor neutral al riesgo.
2. Un boleto cuesta $5$ y da un premio de $500$ con probabilidad $0.01$. Halla la utilidad esperada de comprarlo.
3. Acción $A$ paga $200$ seguro; acción $B$ paga $600$ con probabilidad $0.3$ y $0$ con probabilidad $0.7$. Halla $EU(A)$, $EU(B)$ y decide.
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

### Nivel 4 · Pérdida y árboles

16. Matriz $a_1: (100,20)$, $a_2: (50,40)$. Aplica el criterio maximin.
17. Con la matriz del ejercicio 16, aplica Hurwicz con $\alpha = 0.5$.
18. Con la matriz del ejercicio 16, aplica Savage y da el arrepentimiento máximo.
19. Posterior $P(\theta=10)=0.2$, $P(\theta=20)=0.5$, $P(\theta=30)=0.3$. Con pérdida cuadrática, halla la estimación óptima.
20. Perforar petróleo: seco con $0.7$ (pérdida $1$M) y húmedo con $0.3$ (ganancia $5$M). Halla el VEIP y el valor neto si el test cuesta $0.1$M.

## Respuestas

1. $0.5 \cdot 100 + 0.5 \cdot (-40) = 30$.
2. $0.01 \cdot (500 - 5) + 0.99 \cdot (-5) = 4.95 - 4.95 = 0$.
3. $EU(A) = 200$; $EU(B) = 0.3 \cdot 600 = 180$; elige $A$.
4. $10 \cdot 3.5 = 35$.
5. $EU(a_1) = 6$; $EU(a_2) = \dfrac{12 + 3 + 3}{3} = 6$.
6. $0.5\sqrt{0} + 0.5\sqrt{100} = 5$.
7. $u(EC) = 5 \Rightarrow EC = 25$.
8. $E[X] = 50$; prima $= 50 - 25 = 25$.
9. $\dfrac{\ln 10 + \ln 1000}{2} = \dfrac{\ln 10000}{2} = \ln 100 \approx 4.605$.
10. $EU = 0.5 \cdot 5 + 0.5 \cdot 15 = 10$; $EC = 100$; $E[X] = 125$; prima $= 25$.
11. $EU(a_1) = 60$, $EU(a_2) = 45$; la mejor es $60$.
12. $\dfrac{100 + 40}{2} = 70$.
13. $70 - 60 = 10$.
14. Sin información $30$; con información $\dfrac{90 + 30 + 30}{3} = 50$; VEIP $= 20$.
15. Sin información $EU(a_1) = 70$, $EU(a_2) = 50$, mejor $70$; con información $0.3 \cdot 50 + 0.7 \cdot 100 = 85$; VEIP $= 15$.
16. Peores casos: $20$ y $40$; maximin elige $a_2$ con $40$.
17. $H(a_1) = 0.5 \cdot 100 + 0.5 \cdot 20 = 60$; $H(a_2) = 0.5 \cdot 50 + 0.5 \cdot 40 = 45$; elige $a_1$.
18. Mejor por estado: $100$ y $40$. Arrepentimientos: $a_1: (0,20)$, máximo $20$; $a_2: (50,0)$, máximo $50$; Savage elige $a_1$.
19. Media posterior $= 0.2 \cdot 10 + 0.5 \cdot 20 + 0.3 \cdot 30 = 21$.
20. Sin test $EU = 0.3 \cdot 5 - 0.7 \cdot 1 = 0.8$; con información perfecta $0.3 \cdot 5 = 1.5$; VEIP $= 0.7$M; valor neto $= 0.7 - 0.1 = 0.6$M.
