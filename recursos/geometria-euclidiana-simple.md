# Geometría euclidiana

**Área:** Funciones, trigonometría y geometría · **Nivel:** 10°–11°
Axiomas, congruencia, semejanza, círculos y demostraciones.

## 1. Los axiomas de Euclides

La geometría euclidiana es un sistema deductivo: parte de unos pocos **axiomas** (verdades que se aceptan sin demostración) y de ellos deduce, mediante demostraciones, todas las demás propiedades.

Los cinco postulados clásicos:

1. Por dos puntos distintos pasa una única recta.
2. Todo segmento puede prolongarse indefinidamente en línea recta.
3. Se puede trazar una circunferencia con cualquier centro y cualquier radio.
4. Todos los ángulos rectos son iguales entre sí.
5. Postulado de las paralelas: por un punto exterior a una recta pasa exactamente una recta paralela a ella.

Al negar el quinto postulado nacen las geometrías no euclidianas (hiperbólica y elíptica). En este tema suponemos siempre el quinto.

**Mini-ejemplo.** Por $A(0,0)$ y $B(3,4)$ pasa una sola recta: no existen dos rectas distintas que unan ambos puntos.

## 2. Ángulos y rectas paralelas

Un ángulo se clasifica según su abertura: agudo ($< 90°$), recto ($= 90°$), obtuso ($> 90°$ y $< 180°$) y llano ($= 180°$).

Parejas de ángulos:

1. Complementarios: suman $90°$.
2. Suplementarios: suman $180°$.
3. Opuestos por el vértice: son iguales.

Cuando una **transversal** corta dos rectas paralelas:

1. Correspondientes: iguales.
2. Alternos internos: iguales.
3. Alternos externos: iguales.
4. Colaterales internos: suplementarios.

**Mini-ejemplo.** Si un ángulo entre paralelas mide $65°$, su correspondiente mide $65°$ y su colateral interno mide $115°$, porque

$$180° - 65° = 115°$$

## 3. Triángulos: propiedades fundamentales

En todo triángulo euclidiano la suma de los ángulos internos es:

$$A + B + C = 180°$$

El **ángulo exterior** es igual a la suma de los dos ángulos internos no adyacentes.

Por sus lados: equilátero, isósceles o escaleno. Por sus ángulos: acutángulo, rectángulo u obtusángulo. En un triángulo isósceles los ángulos de la base son iguales.

**Desigualdad triangular:** cada lado es menor que la suma de los otros dos y mayor que su diferencia,

$$|b - c| < a < b + c$$

**Mini-ejemplo.** Si $A = 47°$ y $B = 68°$, entonces $C = 180° - 47° - 68° = 65°$. Los segmentos $2$, $3$ y $7$ no forman triángulo porque $2 + 3 < 7$.

## 4. Congruencia de triángulos

Dos triángulos son **congruentes** si tienen la misma forma y el mismo tamaño; se escribe $\triangle ABC \cong \triangle A'B'C'$. Bastan tres datos:

1. LLL: los tres lados iguales.
2. LAL: dos lados y el ángulo comprendido.
3. ALA: dos ángulos y el lado comprendido.
4. AAL: dos ángulos y un lado no comprendido.

**Advertencia.** LLA (dos lados y el ángulo opuesto a uno de ellos) no es un criterio general de congruencia: puede haber dos triángulos distintos.

**Mini-ejemplo.** Si $AB = A'B'$, $AC = A'C'$ y $\angle A = \angle A'$, entonces $\triangle ABC \cong \triangle A'B'C'$ por LAL.

## 5. Semejanza y teorema de Tales

Dos triángulos son **semejantes** si tienen ángulos iguales y lados proporcionales: $\triangle ABC \sim \triangle A'B'C'$. Criterios:

1. AA: dos ángulos iguales.
2. LLL proporcional: los tres lados en la misma razón.
3. LAL proporcional: dos lados proporcionales y el ángulo comprendido igual.

Si la razón de semejanza es $k$, los perímetros quedan en razón $k$ y las áreas en razón $k^2$.

**Teorema de Tales:** si una recta es paralela a un lado de un triángulo, corta los otros dos en segmentos proporcionales:

$$\frac{AD}{DB} = \frac{AE}{EC}$$

**Mini-ejemplo.** Una persona de $1.7$ m proyecta una sombra de $2$ m y un árbol proyecta $10$ m; por semejanza,

$$\frac{h}{10} = \frac{1.7}{2} \Rightarrow h = 8.5 \text{ m}$$

## 6. Teorema de Pitágoras

En todo triángulo rectángulo de catetos $a$, $b$ e hipotenusa $c$:

$$a^2 + b^2 = c^2$$

Su recíproco clasifica triángulos: si $a^2 + b^2 = c^2$ es rectángulo; si $a^2 + b^2 > c^2$ es acutángulo; si $a^2 + b^2 < c^2$ es obtusángulo.

**Ternas pitagóricas:** $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$ y sus múltiplos.

**Mini-ejemplo.** Una escalera de $5$ m llega a $4$ m de altura; la base está a

$$d = \sqrt{5^2 - 4^2} = \sqrt{9} = 3 \text{ m}$$

## 7. El círculo y sus propiedades

Elementos: centro, radio, diámetro, cuerda, secante, tangente y arco. Propiedades clave:

1. La tangente es perpendicular al radio en el punto de tangencia.
2. La mediatriz de una cuerda pasa por el centro.
3. El ángulo central mide lo mismo que su arco.
4. El ángulo inscrito mide la mitad del arco que subtiende.
5. Un ángulo inscrito en un semicírculo es recto ($90°$).
6. Ángulos inscritos que subtienden el mismo arco son iguales.
7. En un cuadrilátero inscrito, los ángulos opuestos suman $180°$.

$$A = \pi r^2, \qquad C = 2\pi r$$

**Mini-ejemplo.** Si un ángulo central mide $80°$, todo ángulo inscrito que subtienda el mismo arco mide $40°$.

## 8. Polígonos, áreas y volúmenes

La suma de ángulos internos de un polígono de $n$ lados es

$$S = (n - 2) \cdot 180°$$

Los ángulos exteriores suman siempre $360°$. En un polígono regular, cada ángulo interno mide $\frac{(n-2)180°}{n}$.

Áreas:

1. Triángulo: $A = \frac{1}{2}bh$ y, con semiperímetro $s$, $A = \sqrt{s(s-a)(s-b)(s-c)}$.
2. Paralelogramo: $A = bh$.
3. Trapecio: $A = \frac{(B+b)h}{2}$.
4. Círculo: $A = \pi r^2$; sector circular: $A = \frac{\theta}{2}r^2$ con $\theta$ en radianes.

Volúmenes:

$$V_{\text{prisma}} = A_b h, \quad V_{\text{cilindro}} = \pi r^2 h, \quad V_{\text{pirámide}} = \frac{1}{3}A_b h, \quad V_{\text{cono}} = \frac{1}{3}\pi r^2 h, \quad V_{\text{esfera}} = \frac{4}{3}\pi r^3$$

**Mini-ejemplo.** Un decágono tiene $S = (10 - 2)\cdot 180° = 1440°$; si es regular, cada ángulo interno mide $144°$.

## Ejercicios (20)

### Nivel 1

1. Halla el complemento de $37°$.
2. Dos ángulos de un triángulo miden $52°$ y $61°$. Halla el tercero.
3. ¿Forman triángulo los segmentos $4$, $9$ y $12$?
4. Clasifica el ángulo de $124°$.
5. Halla la suma de los ángulos internos de un pentágono.

### Nivel 2

1. Dos rectas paralelas cortadas por una transversal: un ángulo mide $118°$. Halla su colateral interno.
2. En un triángulo isósceles el ángulo del vértice mide $40°$. Halla cada ángulo de la base.
3. Un ángulo exterior de un triángulo mide $125°$ y uno de los internos no adyacentes mide $68°$. Halla el otro.
4. Los catetos de un triángulo rectángulo miden $9$ y $12$. Halla la hipotenusa.
5. Halla el área de un triángulo de base $14$ y altura $9$.

### Nivel 3

1. Un ángulo central mide $94°$. Halla el ángulo inscrito que subtiende el mismo arco.
2. Dos triángulos semejantes tienen razón $k = 3$. Si el área del menor es $12$, halla la del mayor.
3. Halla el área del triángulo de lados $13$, $14$ y $15$ con la fórmula de Herón.
4. Una escalera de $10$ m se apoya en una pared y llega a $8$ m de altura. ¿A qué distancia está la base?
5. Halla cada ángulo interno de un decágono regular.

### Nivel 4

1. Una persona de $1.75$ m proyecta una sombra de $2.5$ m; un árbol proyecta $12$ m a la misma hora. Halla la altura del árbol.
2. Un cuadrilátero inscrito tiene un ángulo de $87°$. Halla su ángulo opuesto.
3. Halla el volumen de un cono de radio $3$ y altura $4$.
4. Los lados de un triángulo miden $7$, $24$ y $25$. ¿Es rectángulo? Justifica.
5. Dos triángulos semejantes tienen lados correspondientes $6$ y $9$. Si el perímetro del menor es $20$, halla el del mayor.

## Respuestas

1. $53°$.
2. $67°$.
3. Sí, porque $4 + 9 > 12$.
4. Obtuso.
5. $540°$.
6. $62°$.
7. $70°$ cada uno.
8. $57°$.
9. $15$.
10. $63$.
11. $47°$.
12. $108$.
13. $84$.
14. $6$ m.
15. $144°$.
16. $8.4$ m.
17. $93°$.
18. $12\pi$.
19. Sí, porque $7^2 + 24^2 = 625 = 25^2$.
20. $30$.
