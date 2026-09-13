# Lógica matemática

**Área:** Matemática discreta y fundamentos · **Nivel:** Univ 3–5
**Descripción:** Proposicional, predicados, completitud e incompletitud.

## Proposiciones y conectivas

Una **proposición** es un enunciado declarativo que es verdadero (V) o falso (F), pero no ambos. Ejemplos: "$2+2=4$" (V), "todo primo es par" (F). No son proposiciones las preguntas, las órdenes ni las expresiones con variables libres.

Las **conectivas** construyen proposiciones compuestas a partir de proposiciones simples:

- **Negación:** $\neg p$ ("no $p$").
- **Conjunción:** $p \land q$ ("$p$ y $q$").
- **Disyunción:** $p \lor q$ ("$p$ o $q$", inclusivo).
- **Implicación:** $p \Rightarrow q$ ("si $p$ entonces $q$").
- **Bicondicional:** $p \Leftrightarrow q$ ("$p$ si y solo si $q$").

### Tabla de verdad de las conectivas

| $p$ | $q$ | $\neg p$ | $p \land q$ | $p \lor q$ | $p \Rightarrow q$ | $p \Leftrightarrow q$ |
|:---:|:---:|:--------:|:-----------:|:----------:|:-----------------:|:---------------------:|
| V | V | F | V | V | V | V |
| V | F | F | F | V | F | F |
| F | V | V | F | V | V | F |
| F | F | V | F | F | V | V |

**Hecho clave:** la implicación $p \Rightarrow q$ solo es falsa cuando $p$ es verdadera y $q$ es falsa. Por eso "si llueve, hay nubes" es verdadera cuando no llueve, aunque no haya nubes: la implicación no afirma causalidad, solo que no ocurre $p$ verdadera con $q$ falsa.

Con $n$ variables proposicionales la tabla tiene $2^n$ filas.

**Mini-ejemplo.** En $p \Rightarrow q$ con $p = V$, $q = F$ el valor es $F$. Con $p = F$, $q = V$ el valor es $V$.

## Equivalencias lógicas y formas normales

Dos proposiciones son **lógicamente equivalentes**, $p \equiv q$, cuando tienen la misma tabla de verdad (mismos valores en toda asignación).

### Leyes de equivalencia

1. **Doble negación:** $\neg\neg p \equiv p$.
2. **De Morgan:** $\neg(p \land q) \equiv \neg p \lor \neg q$ y $\neg(p \lor q) \equiv \neg p \land \neg q$.
3. **Implicación:** $p \Rightarrow q \equiv \neg p \lor q$.
4. **Contrapositiva:** $p \Rightarrow q \equiv \neg q \Rightarrow \neg p$.
5. **Distributivas:** $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$ y $p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)$.
6. **Asociativas, conmutativas, idempotentes:** $p \land p \equiv p$, $p \lor p \equiv p$.
7. **Absorción:** $p \lor (p \land q) \equiv p$ y $p \land (p \lor q) \equiv p$.
8. **Identidad y anulación:** $p \lor F \equiv p$, $p \land V \equiv p$, $p \lor V \equiv V$, $p \land F \equiv F$.

### Formas normales

Toda proposición equivale a:

- una **forma normal disyuntiva (FND)**, disyunción de conjunciones de literales, y
- una **forma normal conjuntiva (FNC)**, conjunción de disyunciones de literales.

Se obtienen por tablas de verdad (FND con las filas verdaderas, FNC con las falsas) o por álgebra de equivalencias.

**Tautología:** verdadera en toda asignación, como $p \lor \neg p$. **Contradicción:** falsa en toda asignación, como $p \land \neg p$. **Contingencia:** ni una ni otra.

**Mini-ejemplo.** $p \Rightarrow (q \land r) \equiv \neg p \lor (q \land r) \equiv (\neg p \lor q) \land (\neg p \lor r)$, que ya es una FNC.

## Cuantificadores

La lógica de predicados añade **predicados** $P(x)$ sobre un dominio $D$.

- **Universal:** $\forall x\, P(x)$ ("para todo $x$, $P(x)$").
- **Existencial:** $\exists x\, P(x)$ ("existe al menos un $x$ tal que $P(x)$").
- **Unicidad:** $\exists! x\, P(x)$ ("existe exactamente un $x$").

### Negación de cuantificadores

$$\neg\forall x\, P(x) \equiv \exists x\, \neg P(x), \qquad \neg\exists x\, P(x) \equiv \forall x\, \neg P(x)$$

La negación intercambia el cuantificador y mueve la negación al predicado.

### Orden de cuantificadores

El orden importa: $\forall x \exists y\, R(x,y)$ no es lo mismo que $\exists y \forall x\, R(x,y)$. En $\mathbb{R}$ con $R(x,y): y>x$, la primera es verdadera y la segunda falsa.

**Mini-ejemplo.** La negación de "todos los primos son impares" es "existe un primo que no es impar"; el testigo es $2$, luego la afirmación original es falsa.

## Lógica de predicados

La **lógica de primer orden** incorpora:

1. **Términos:** variables, constantes y funciones.
2. **Predicados:** $P(t_1, \ldots, t_n)$.
3. **Fórmulas** construidas con conectivas y cuantificadores.

Una **estructura** (o modelo) $\mathcal{M} = (D, \{f^{\mathcal{M}}\}, \{P^{\mathcal{M}}\})$ fija un dominio y da significado a símbolos.

- **Satisfacible:** verdadera en algún modelo.
- **Válida (universalmente válida):** verdadera en todo modelo.
- **Refutable:** falsa en algún modelo.

**Relación central:** $\varphi$ es válida si y solo si $\neg\varphi$ es insatisfacible.

**Mini-ejemplo.** $\forall x (P(x) \Rightarrow P(x))$ es válida en todo modelo. En cambio $\forall x\, P(x) \Rightarrow \exists x\, P(x)$ es válida si el dominio es no vacío.

## Sistemas formales y demostraciones

Un **sistema formal** consta de:

1. Un **lenguaje** (alfabeto y reglas de formación).
2. **Axiomas** lógicos y no lógicos.
3. **Reglas de inferencia**.

Una **demostración** es una sucesión finita de fórmulas donde cada paso es un axioma o se obtiene de pasos anteriores por una regla. Una **teoría** es un conjunto de axiomas; sus **teoremas** son las fórmulas demostrables. Se escribe $T \vdash \varphi$.

### Reglas de inferencia básicas

1. **Modus ponens:** de $p$ y $p \Rightarrow q$ se sigue $q$.
2. **Modus tollens:** de $\neg q$ y $p \Rightarrow q$ se sigue $\neg p$.
3. **Silogismo hipotético:** de $p \Rightarrow q$ y $q \Rightarrow r$ se sigue $p \Rightarrow r$.
4. **Introducción/eliminación de conectivas:** base de la deducción natural.

**Mini-ejemplo.** Para probar $p \Rightarrow p$: se supone $p$, se reitera $p$ y se descarga la suposición aplicando introducción de la implicación.

## Completitud, consistencia y decidibilidad

- **Consistente:** no existe $\varphi$ con $T \vdash \varphi$ y $T \vdash \neg\varphi$.
- **Completa (semántica):** toda fórmula válida es demostrable.
- **Decidible:** existe un algoritmo que determina, para toda fórmula, si es teorema.

### Resultados fundamentales

1. La lógica proposicional es **decidible** (tablas de verdad, SAT).
2. La lógica de primer orden es **completa** (Gödel, 1929) pero **indecidible** (Church–Turing): no hay algoritmo para la validez.
3. **Compacidad:** si todo subconjunto finito de axiomas es satisfacible, el conjunto completo lo es.
4. **Löwenheim–Skolem:** si una teoría tiene un modelo infinito, tiene modelos de todo cardinal infinito.

**Mini-ejemplo.** El problema SAT (satisfacibilidad proposicional) es decidible, aunque NP-completo (Cook–Levin).

## Incompletitud: los teoremas de Gödel

**Primer teorema de incompletitud.** Toda teoría consistente, recursiva y suficientemente rica (capaz de expresar la aritmética) contiene proposiciones verdaderas pero no demostrables dentro de ella.

**Segundo teorema.** Tal teoría no puede demostrar su propia consistencia.

**Mecanismo (autorreferencia).** La sentencia $G$ = "esta proposición no es demostrable". Si $G$ fuera demostrable, sería falsa y la teoría inconsistente; por lo tanto es verdadera, pero indemostrable.

**Consecuencia.** No existe un sistema formal completo y consistente que capture toda la matemática. La verdad supera a la demostrabilidad. La autorreferencia conecta con la indecidibilidad de la parada y con resultados de computabilidad.

**Mini-ejemplo.** La aritmética de Peano es incompleta e indecidible, pese a ser consistente y recursiva.

## Ejercicios (20)

### Nivel 1 · Básico

1. ¿Cuántas filas tiene la tabla de verdad de una proposición con $4$ variables?
2. Halla el valor de $\neg p \lor q$ cuando $p = V$ y $q = F$.
3. Escribe la negación de $p \land q$ aplicando De Morgan.
4. ¿Es $p \lor \neg p$ una tautología?
5. ¿Es falsa $p \Rightarrow q$ cuando $p = F$ y $q = V$?

### Nivel 2 · Intermedio

6. Simplifica $\neg(\neg p \lor q)$.
7. Expresa $p \Rightarrow q$ usando solo $\neg$ y $\lor$.
8. Escribe una FNC de $p \Rightarrow (q \land r)$.
9. Niega la proposición $\forall x\, (x > 0)$.
10. ¿Es válida la fórmula $p \lor \neg p$?

### Nivel 3 · Avanzado

11. Niega $\forall x \exists y\, (x < y)$.
12. Escribe una FND de $p \Leftrightarrow q$.
13. ¿Es tautología $(p \Rightarrow q) \lor (q \Rightarrow p)$?
14. Simplifica $(p \land \neg q) \lor p$ por absorción.
15. ¿Es decidible la lógica proposicional?

### Nivel 4 · Retos

16. Demuestra $p \Rightarrow p$ por deducción natural.
17. Enuncia en una frase el primer teorema de incompletitud.
18. ¿Es decidible la lógica de primer orden?
19. Niega $\exists x\, P(x) \land \forall y\, Q(y)$.
20. ¿Se puede demostrar la consistencia de la aritmética dentro de ella misma?

## Respuestas

1. $2^4 = 16$ filas.
2. $\neg V \lor F = F \lor F = F$.
3. $\neg(p \land q) \equiv \neg p \lor \neg q$.
4. Sí, es verdadera en toda asignación.
5. No; la implicación solo es falsa con $p = V$, $q = F$.
6. $p \land \neg q$.
7. $p \Rightarrow q \equiv \neg p \lor q$.
8. $(\neg p \lor q) \land (\neg p \lor r)$.
9. $\exists x\, \neg(x > 0)$, es decir $\exists x\, (x \leq 0)$.
10. Sí, es una tautología.
11. $\exists x \forall y\, (x \geq y)$.
12. $(p \land q) \lor (\neg p \land \neg q)$.
13. Sí: siempre hay al menos una dirección verdadera.
14. $p$.
15. Sí, por tablas de verdad.
16. Se supone $p$, se reitera $p$ y se descarga la suposición por introducción de la implicación.
17. Toda teoría consistente, recursiva y lo bastante rica tiene verdades no demostrables en ella.
18. No; es completa (Gödel) pero indecidible (Church–Turing).
19. $\forall x\, \neg P(x) \lor \exists y\, \neg Q(y)$.
20. No; lo prohíbe el segundo teorema de incompletitud.
