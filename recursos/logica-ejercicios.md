# Lógica matemática · formulario y ejercicios

**Área:** Matemática discreta y fundamentos · **Nivel:** Univ 3–5
**Descripción:** Proposicional, predicados, completitud e incompletitud.

## Formulario

### Conectivas y valores base

| $p$ | $q$ | $\neg p$ | $p \land q$ | $p \lor q$ | $p \Rightarrow q$ | $p \Leftrightarrow q$ |
|:---:|:---:|:--------:|:-----------:|:----------:|:-----------------:|:---------------------:|
| V | V | F | V | V | V | V |
| V | F | F | F | V | F | F |
| F | V | V | F | V | V | F |
| F | F | V | F | F | V | V |

- $p \Rightarrow q$ solo es falsa con $p = V$, $q = F$.
- $p \Leftrightarrow q$ es verdadera cuando coinciden.
- Número de filas con $n$ variables: $2^n$.

### Leyes de equivalencia

1. **Doble negación:** $\neg\neg p \equiv p$.
2. **De Morgan:** $\neg(p \land q) \equiv \neg p \lor \neg q$; $\neg(p \lor q) \equiv \neg p \land \neg q$.
3. **Implicación:** $p \Rightarrow q \equiv \neg p \lor q$.
4. **Contrapositiva:** $p \Rightarrow q \equiv \neg q \Rightarrow \neg p$.
5. **Distributivas:** $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$.
6. **Absorción:** $p \lor (p \land q) \equiv p$.
7. **Idempotencia:** $p \land p \equiv p$, $p \lor p \equiv p$.
8. **Neutros/absorbentes:** $p \lor F \equiv p$, $p \land V \equiv p$, $p \lor V \equiv V$, $p \land F \equiv F$.

### Reglas de inferencia

1. **Modus ponens:** $p$, $p \Rightarrow q$ $\therefore$ $q$.
2. **Modus tollens:** $\neg q$, $p \Rightarrow q$ $\therefore$ $\neg p$.
3. **Silogismo hipotético:** $p \Rightarrow q$, $q \Rightarrow r$ $\therefore$ $p \Rightarrow r$.
4. **Silogismo disyuntivo:** $p \lor q$, $\neg p$ $\therefore$ $q$.

### Cuantificadores y negación

$$\neg\forall x\, P(x) \equiv \exists x\, \neg P(x), \qquad \neg\exists x\, P(x) \equiv \forall x\, \neg P(x)$$

- $\exists! x\, P(x)$: existe exactamente uno.
- El orden importa: $\forall x \exists y \neq \exists y \forall x$.

### Formas normales, validez y satisfacibilidad

- **FND:** disyunción de conjunciones de literales.
- **FNC:** conjunción de disyunciones de literales.
- **Tautología:** válida en toda asignación. **Contradicción:** falsa en todas.
- $\varphi$ válida $\Leftrightarrow$ $\neg\varphi$ insatisfacible.
- **Completitud (Gödel):** en primer orden, válida $\Leftrightarrow$ demostrable.
- **Incompletitud:** teorías ricas consistentes y recursivas tienen verdades no demostrables.

## Ejercicios (50)

1. ¿Cuántas filas tiene la tabla de verdad de una proposición con $3$ variables?
2. Halla el valor de $\neg p \land q$ con $p = V$, $q = V$.
3. Halla el valor de $p \lor q$ con $p = F$, $q = F$.
4. Halla el valor de $p \Rightarrow q$ con $p = V$, $q = F$.
5. Halla el valor de $p \Leftrightarrow q$ con $p = F$, $q = F$.
6. ¿Cuántas filas hacen verdadera $p \land q \land r$?
7. Niega $p \lor q$.
8. Niega $p \Rightarrow q$.
9. Escribe $p \Rightarrow q$ como disyunción.
10. Escribe la contrapositiva de $p \Rightarrow q$.
11. Escribe la recíproca de $p \Rightarrow q$.
12. Da una FNC de $\neg(p \lor q)$.
13. Da una FND de $p \land q$.
14. Da una FND de $p \Leftrightarrow q$.
15. Da una FNC de $p \Leftrightarrow q$.
16. Simplifica $p \lor (p \land q)$.
17. Simplifica $p \land (p \lor q)$.
18. Simplifica $p \lor \neg p$.
19. Simplifica $p \land \neg p$.
20. Da una FNC de $p \Rightarrow (q \land r)$.
21. Niega $\forall x\, P(x)$.
22. Niega $\exists x\, P(x)$.
23. Niega $\forall x \exists y\, R(x,y)$.
24. Niega $\exists x \forall y\, R(x,y)$.
25. Traduce "todo número es par o impar".
26. Traduce "existe un primo par".
27. ¿Es verdadera $\forall x \exists y\, (y > x)$ en $\mathbb{R}$?
28. ¿Es verdadera $\exists y \forall x\, (y > x)$ en $\mathbb{R}$?
29. ¿Es verdadera $\exists! x\, (x^2 = 4)$ en $\mathbb{R}$?
30. ¿Es verdadera $\exists! x\, (x + 3 = 5)$ en $\mathbb{R}$?
31. Simplifica $\neg(\neg p \lor q) \lor p$.
32. ¿Son equivalentes $p \Rightarrow q$ y $\neg q \Rightarrow \neg p$?
33. ¿Es tautología $(p \land q) \Rightarrow p$?
34. ¿Es tautología $(p \lor q) \Rightarrow p$?
35. ¿Es tautología $(p \Rightarrow q) \land (q \Rightarrow r) \Rightarrow (p \Rightarrow r)$?
36. De $p$ y $p \Rightarrow q$, ¿qué se concluye?
37. De $\neg q$ y $p \Rightarrow q$, ¿qué se concluye?
38. De $\neg(p \land q)$ y $p$, ¿qué se concluye?
39. Da una FND de $\neg(p \Rightarrow q)$.
40. Da una FNC de $\neg(p \land q)$.
41. ¿Cuántos literales tiene la FNC de $p \Rightarrow (q \lor r)$?
42. ¿Cuántas asignaciones hacen verdadera $p \lor q$?
43. ¿Cuántas asignaciones hacen verdadera $p \Rightarrow q$?
44. ¿Cuántas asignaciones hacen verdadera $p \land q$?
45. ¿Cuántas asignaciones hacen verdadera $p \Leftrightarrow q$?
46. ¿Es satisfacible $p \land \neg p$?
47. ¿Es satisfacible $(p \lor q) \land (\neg p \lor q)$?
48. ¿Es válida $p \Rightarrow (p \lor q)$?
49. Niega "todos los estudiantes aprobaron".
50. ¿Qué garantiza el teorema de completitud de Gödel?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $2^3 = 8$ filas</div>
<div class="r"><b>02</b> $F$</div>
<div class="r"><b>03</b> $F$</div>
<div class="r"><b>04</b> $F$</div>
<div class="r"><b>05</b> $V$</div>
<div class="r"><b>06</b> $1$</div>
<div class="r"><b>07</b> $\neg p \land \neg q$</div>
<div class="r"><b>08</b> $p \land \neg q$</div>
<div class="r"><b>09</b> $\neg p \lor q$</div>
<div class="r"><b>10</b> $\neg q \Rightarrow \neg p$</div>
<div class="r"><b>11</b> $q \Rightarrow p$</div>
<div class="r"><b>12</b> $\neg p \land \neg q$</div>
<div class="r"><b>13</b> $p \land q$</div>
<div class="r"><b>14</b> $(p \land q) \lor (\neg p \land \neg q)$</div>
<div class="r"><b>15</b> $(p \lor \neg q) \land (\neg p \lor q)$</div>
<div class="r"><b>16</b> $p$</div>
<div class="r"><b>17</b> $p$</div>
<div class="r"><b>18</b> $V$</div>
<div class="r"><b>19</b> $F$</div>
<div class="r"><b>20</b> $(\neg p \lor q) \land (\neg p \lor r)$</div>
<div class="r"><b>21</b> $\exists x\, \neg P(x)$</div>
<div class="r"><b>22</b> $\forall x\, \neg P(x)$</div>
<div class="r"><b>23</b> $\exists x \forall y\, \neg R(x,y)$</div>
<div class="r"><b>24</b> $\forall x \exists y\, \neg R(x,y)$</div>
<div class="r"><b>25</b> $\forall x\, (P(x) \lor I(x))$</div>
<div class="r"><b>26</b> $\exists x\, (Primo(x) \land Par(x))$</div>
<div class="r"><b>27</b> $V$</div>
<div class="r"><b>28</b> $F$</div>
<div class="r"><b>29</b> $F$</div>
<div class="r"><b>30</b> $V$</div>
<div class="r"><b>31</b> $p$</div>
<div class="r"><b>32</b> Sí</div>
<div class="r"><b>33</b> Sí</div>
<div class="r"><b>34</b> No</div>
<div class="r"><b>35</b> Sí</div>
<div class="r"><b>36</b> $q$</div>
<div class="r"><b>37</b> $\neg p$</div>
<div class="r"><b>38</b> $\neg q$</div>
<div class="r"><b>39</b> $p \land \neg q$</div>
<div class="r"><b>40</b> $\neg p \lor \neg q$</div>
<div class="r"><b>41</b> $3$</div>
<div class="r"><b>42</b> $3$</div>
<div class="r"><b>43</b> $3$</div>
<div class="r"><b>44</b> $1$</div>
<div class="r"><b>45</b> $2$</div>
<div class="r"><b>46</b> No</div>
<div class="r"><b>47</b> Sí</div>
<div class="r"><b>48</b> Sí</div>
<div class="r"><b>49</b> $\exists x\, \neg A(x)$</div>
<div class="r"><b>50</b> válida $\Leftrightarrow$ demostrable</div>
</div>
