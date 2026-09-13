# Probabilidad simple

La probabilidad cuantifica la incertidumbre de experimentos aleatorios. Área: **Probabilidad y estadística** · Nivel: **Univ 1–2**.

## Espacio muestral y eventos

Un **experimento aleatorio** es aquel cuyo resultado no puede predecirse con certeza. El conjunto de todos los resultados posibles es el **espacio muestral** $\Omega$. Un **evento** $A$ es cualquier subconjunto de $\Omega$.

**Operaciones con eventos:**

1. **Unión** $A \cup B$: ocurre $A$ o $B$ (o ambos).
2. **Intersección** $A \cap B$: ocurren $A$ y $B$ a la vez.
3. **Complemento** $A^c$: no ocurre $A$.
4. **Diferencia** $A \setminus B = A \cap B^c$: ocurre $A$ pero no $B$.

Dos eventos son **disjuntos** (mutuamente excluyentes) si $A \cap B = \emptyset$: no pueden ocurrir juntos.

**Mini-ejemplo.** Al lanzar un dado, $\Omega = \{1,2,3,4,5,6\}$. El evento «par» es $A = \{2,4,6\}$ y «mayor que 4» es $B = \{5,6\}$. Entonces $A \cup B = \{2,4,5,6\}$ y $A \cap B = \{6\}$.

## Axiomas de Kolmogorov

Una **probabilidad** $P$ es una función que asigna a cada evento un número real y cumple:

1. **No negatividad:** $P(A) \geq 0$.
2. **Normalización:** $P(\Omega) = 1$.
3. **Aditividad numerable:** si $A_1, A_2, \ldots$ son disjuntos dos a dos,
$$P\left(\bigcup_{n} A_n\right) = \sum_{n} P(A_n).$$

**Consecuencias inmediatas:**

1. $P(\emptyset) = 0$.
2. $P(A^c) = 1 - P(A)$.
3. Si $A \subseteq B$, entonces $P(A) \leq P(B)$.
4. **Regla de la unión:** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

**Mini-ejemplo.** Con un dado justo, $P(\text{par}) = 3/6 = 0.5$ y $P(\text{no 6}) = 1 - 1/6 = 5/6$.

## Probabilidad condicional

La probabilidad de $A$ **dado que** ocurrió $B$ se define, con $P(B) > 0$, como
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}.$$

Reordenando se obtiene la **regla del producto**:
$$P(A \cap B) = P(A \mid B)\,P(B).$$

Para tres eventos:
$$P(A \cap B \cap C) = P(A)\,P(B \mid A)\,P(C \mid A \cap B).$$

**Mini-ejemplo.** Con un dado, la probabilidad de «par» dado que el resultado es mayor que 3:
$$P(\text{par} \mid >3) = \frac{P(\{4,6\})}{P(\{4,5,6\})} = \frac{2/6}{3/6} = \frac{2}{3}.$$

**Advertencia.** En general $P(A \mid B) \neq P(B \mid A)$; confundirlas es la **falacia del fiscal**.

## Independencia

Dos eventos $A$ y $B$ son **independientes** si
$$P(A \cap B) = P(A)\,P(B),$$
lo que equivale a $P(A \mid B) = P(A)$ cuando $P(B) > 0$: saber que ocurrió uno no cambia la información sobre el otro.

**Independencia múltiple.** $A_1, \ldots, A_n$ son mutuamente independientes si todo subconjunto factoriza. La independencia dos a dos **no** implica independencia mutua.

**Mini-ejemplo.** Dos lanzamientos de una moneda justa son independientes: $P(\text{cara y cara}) = \tfrac{1}{2} \cdot \tfrac{1}{2} = \tfrac{1}{4}$. Extraer cartas **sin reposición** produce eventos dependientes.

**Falacia del jugador.** Creer que una racha pasada altera la probabilidad futura en eventos independientes. La moneda no tiene memoria.

## Probabilidad total y teorema de Bayes

Una **partición** de $\Omega$ es una colección de eventos $B_1, \ldots, B_n$ disjuntos que cubren $\Omega$.

**Probabilidad total:**
$$P(A) = \sum_{i=1}^{n} P(A \mid B_i)\,P(B_i).$$

**Teorema de Bayes:**
$$P(B_j \mid A) = \frac{P(A \mid B_j)\,P(B_j)}{\sum_{i=1}^{n} P(A \mid B_i)\,P(B_i)}.$$

**Mini-ejemplo (médico).** Una enfermedad tiene prevalencia $1\%$; el test tiene sensibilidad $99\%$ y especificidad $95\%$. Entonces
$$P(\text{enf} \mid +) = \frac{0.99 \cdot 0.01}{0.99 \cdot 0.01 + 0.05 \cdot 0.99} \approx 0.167.$$
A pesar del positivo, solo el $16.7\%$ está enfermo: los falsos positivos dominan por la baja prevalencia. La **tasa base** es esencial.

## Conteo y probabilidad

En espacios finitos con resultados **equiprobables**:
$$P(A) = \frac{|A|}{|\Omega|}.$$

**Herramientas de conteo:**

1. **Permutaciones** de $n$ objetos distintos: $n!$.
2. **Permutaciones** de $k$ de $n$: $P(n,k) = \dfrac{n!}{(n-k)!}$.
3. **Combinaciones** de $k$ de $n$: $\binom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$.
4. **Principio de inclusión-exclusión:** $|A \cup B| = |A| + |B| - |A \cap B|$.

**Mini-ejemplo.** La probabilidad de que dos dados sumen $7$ es $\frac{6}{36} = \frac{1}{6}$. La probabilidad de una mano de póker con un par es $\dfrac{13 \cdot \binom{4}{2} \cdot \binom{12}{3} \cdot 4^3}{\binom{52}{5}}$.

## Ley de los grandes números

Sea $\bar{X}_n$ el promedio de $n$ ensayos independientes con media $\mu$.

1. **Ley débil:** $\bar{X}_n \xrightarrow{P} \mu$, es decir, converge en probabilidad.
2. **Ley fuerte:** $\bar{X}_n \to \mu$ casi seguramente.

**Interpretación.** Justifica la definición frecuentista de probabilidad y la estimación por promedios: con $n$ grande el promedio empírico se estabiliza. La desviación típica del promedio decae como $1/\sqrt{n}$.

**Mini-ejemplo.** En $10\,000$ lanzamientos de una moneda justa, la fracción de caras estará típicamente entre $0.49$ y $0.51$.

## Ejercicios (20)

### Nivel 1 · Básico

1. Se lanza un dado justo. Halla $P(\text{par})$.
2. Se lanzan dos monedas. Halla $P(\text{dos caras})$.
3. Si $P(A) = 0.4$, $P(B) = 0.5$ y $A \cap B = \emptyset$, calcula $P(A \cup B)$.
4. Si $P(A) = 0.3$, calcula $P(A^c)$.
5. Con dos dados, calcula $P(\text{suma} = 7)$.

### Nivel 2 · Intermedio

6. Si $P(A) = 0.5$, $P(B) = 0.4$ y $P(A \cap B) = 0.2$, calcula $P(A \cup B)$.
7. Con los datos del ejercicio 6, ¿son $A$ y $B$ independientes?
8. Con los datos del ejercicio 6, calcula $P(A \mid B)$.
9. Se extraen dos cartas sin reposición. Halla $P(\text{ambas ases})$.
10. Halla la probabilidad de obtener al menos un 6 en cuatro lanzamientos de un dado.

### Nivel 3 · Avanzado

11. Enfermedad con prevalencia $1\%$; test con sensibilidad $99\%$ y especificidad $95\%$. Halla $P(\text{enf} \mid +)$.
12. Urna A: 3 blancas y 1 negra; urna B: 1 blanca y 3 negras. Se elige una urna al azar y sale blanca. Halla $P(\text{A} \mid \text{blanca})$.
13. Una fábrica usa la máquina 1 (60% de la producción, 2% defectuosa) y la máquina 2 (40%, 5% defectuosa). Halla $P(\text{defectuosa})$.
14. ¿Cuántas manos de 5 cartas contienen exactamente 2 ases? Da la probabilidad.
15. En el problema de Monty Hall, ¿con qué probabilidad gana quien cambia de puerta?

### Nivel 4 · Reto

16. Con dos dados, calcula $P(\text{suma} \leq 4)$.
17. En 1000 nacimientos con $P(\text{niña}) = 0.5$, ¿qué predice la ley de los grandes números?
18. Halla la probabilidad de que al menos dos de 23 personas cumplan el mismo día (paradoja del cumpleaños).
19. Si $P(A) = 0.6$, $P(B) = 0.5$ y $P(A \cup B) = 0.8$, halla $P(A \cap B)$ y decide si son independientes.
20. Enfermedad con prevalencia $2\%$; test con sensibilidad $90\%$ y especificidad $95\%$. Halla $P(\text{enf} \mid +)$.

## Respuestas

1. $\dfrac{3}{6} = \dfrac{1}{2}$.
2. $\dfrac{1}{2} \cdot \dfrac{1}{2} = \dfrac{1}{4}$.
3. $P(A \cup B) = 0.4 + 0.5 = 0.9$.
4. $P(A^c) = 1 - 0.3 = 0.7$.
5. $\dfrac{6}{36} = \dfrac{1}{6}$.
6. $0.5 + 0.4 - 0.2 = 0.7$.
7. $P(A)P(B) = 0.5 \cdot 0.4 = 0.2 = P(A \cap B)$: sí son independientes.
8. $P(A \mid B) = \dfrac{0.2}{0.4} = 0.5$.
9. $\dfrac{4}{52} \cdot \dfrac{3}{51} = \dfrac{1}{221} \approx 0.00452$.
10. $1 - \left(\dfrac{5}{6}\right)^4 \approx 0.5177$.
11. $\dfrac{0.99 \cdot 0.01}{0.99 \cdot 0.01 + 0.05 \cdot 0.99} \approx 0.167$.
12. $\dfrac{(3/4)(1/2)}{(3/4)(1/2) + (1/4)(1/2)} = \dfrac{3}{4}$.
13. $0.6 \cdot 0.02 + 0.4 \cdot 0.05 = 0.032$.
14. $\dfrac{\binom{4}{2}\binom{48}{3}}{\binom{52}{5}} \approx 0.0399$.
15. Cambiar gana con probabilidad $\dfrac{2}{3}$; quedarse, $\dfrac{1}{3}$.
16. $\dfrac{1+2+3}{36} = \dfrac{6}{36} = \dfrac{1}{6}$.
17. Cerca de $500$ niñas, con desviación típica $\sqrt{250} \approx 15.8$.
18. $1 - \dfrac{365 \cdot 364 \cdots 343}{365^{23}} \approx 0.507$.
19. $P(A \cap B) = 0.6 + 0.5 - 0.8 = 0.3$; como $P(A)P(B) = 0.3$, sí son independientes.
20. $\dfrac{0.90 \cdot 0.02}{0.90 \cdot 0.02 + 0.05 \cdot 0.98} \approx 0.269$.
