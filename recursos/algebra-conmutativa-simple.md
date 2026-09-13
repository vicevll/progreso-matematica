# Álgebra conmutativa

El **álgebra conmutativa** estudia anillos conmutativos unitarios, sus ideales, sus cocientes y sus localizaciones, con el objetivo de traducir la geometría (variedades, puntos, dimensiones) al lenguaje del álgebra (ideales, primos, cadenas). Estas notas cubren el espectro, los ideales primos y maximales, la localización, la noetherianidad, la descomposición primaria, la dimensión de Krull y el Nullstellensatz.

## 1. Anillos conmutativos y espectro

Un **anillo conmutativo** es una terna $(R, +, \cdot)$ donde $(R, +)$ es un grupo abeliano, el producto es asociativo, conmutativo y distribuye sobre la suma. Es **unitario** si posee un elemento $1 \neq 0$ con $1\cdot r = r$. Un **dominio de integridad** es un anillo conmutativo unitario sin divisores de cero: si $ab = 0$, entonces $a = 0$ o $b = 0$. Un **cuerpo** es un anillo conmutativo unitario donde todo $a \neq 0$ es invertible.

Un **ideal** $I \subseteq R$ es un subgrupo aditivo cerrado bajo multiplicación por elementos de $R$:
$$r \in R,\; a \in I \;\Longrightarrow\; ra \in I.$$
El cociente $R/I$ es un anillo con la suma y el producto inducidos, y la proyección $\pi: R \to R/I$ es un homomorfismo de anillos con núcleo $I$.

El **espectro** de $R$ es el conjunto de sus ideales primos:
$$\operatorname{Spec}(R) = \{\mathfrak{p} \subseteq R : \mathfrak{p} \text{ es primo}\}.$$
Sobre $\operatorname{Spec}(R)$ se define la **topología de Zariski**: los cerrados son $V(I) = \{\mathfrak{p} : I \subseteq \mathfrak{p}\}$. Bajo esta topología, los ideales maximales son los **puntos cerrados** y los primos no maximales son **puntos genéricos**.

**Mini-ejemplo.** $\operatorname{Spec}(\mathbb{Z}) = \{(0)\} \cup \{(p) : p \text{ primo}\}$. El punto $(0)$ es genérico y denso; cada $(p)$ es un punto cerrado.

**Mini-ejemplo.** $\operatorname{Spec}(\mathbb{C}[x]) = \{(0)\} \cup \{(x-a) : a \in \mathbb{C}\}$: una recta con un punto genérico.

## 2. Ideales primos y maximales

Un ideal propio $I \subsetneq R$ es **primo** si
$$ab \in I \;\Longrightarrow\; a \in I \text{ o } b \in I,$$
y es **maximal** si no existe un ideal propio $J$ con $I \subsetneq J \subsetneq R$.

**Diccionario fundamental.**

| Ideal $I$ | Anillo cociente $R/I$ |
|---|---|
| Primo | Dominio de integridad |
| Maximal | Cuerpo |

**Teorema.** Todo ideal maximal es primo. El recíproco es falso en general; solo vale en los dominios de ideales principales (por ejemplo, en $\mathbb{Z}$ o en $\mathbb{K}[x]$).

**Teorema (existencia de maximales).** Todo anillo conmutativo unitario no nulo posee al menos un ideal maximal (lema de Zorn).

**Mini-ejemplo.** En $\mathbb{Z}$ los ideales primos son $(0)$ y los $(p)$ con $p$ primo; los maximales son exactamente los $(p)$. Como $\mathbb{Z}/(5) = \mathbb{Z}_5$ es cuerpo, $(5)$ es maximal.

**Mini-ejemplo.** En $\mathbb{R}[x]$, el ideal $(x^2+1)$ es maximal porque $\mathbb{R}[x]/(x^2+1) \cong \mathbb{C}$ es cuerpo. En cambio, en $\mathbb{C}[x]$ se factoriza $x^2+1 = (x-i)(x+i)$, así que $(x^2+1)$ no es primo ni maximal.

## 3. Localización

Sea $S \subseteq R$ un **conjunto multiplicativo** (contiene a $1$ y es cerrado bajo producto). La **localización** $S^{-1}R$ es el anillo de fracciones
$$S^{-1}R = \left\{\frac{r}{s} : r \in R,\; s \in S\right\}$$
con la relación $\frac{r}{s} = \frac{r'}{s'}$ si existe $t \in S$ con $t(rs' - r's) = 0$. La aplicación $R \to S^{-1}R$, $r \mapsto r/1$, es un homomorfismo.

Casos importantes:

1. **Localización en un primo $\mathfrak{p}$:** se toma $S = R \setminus \mathfrak{p}$. El anillo $R_\mathfrak{p}$ es **local**, es decir, tiene un único ideal maximal, a saber, $\mathfrak{p}R_\mathfrak{p}$. Captura el comportamiento de $R$ "cerca" del punto $\mathfrak{p}$.
2. **Localización en un elemento $f$:** se toma $S = \{f^n : n \geq 0\}$ y se escribe $R_f$. Permite estudiar la región donde $f \neq 0$.
3. **Cuerpo de fracciones:** si $R$ es un dominio y $S = R \setminus \{0\}$, se obtiene el cuerpo $\operatorname{Frac}(R)$.
4. **Localización en $R\setminus\{0\}$** de un dominio produce su cuerpo de fracciones; por ejemplo $\operatorname{Frac}(\mathbb{Z}) = \mathbb{Q}$.

Los ideales primos de $S^{-1}R$ corresponden biyectivamente a los ideales primos $\mathfrak{p}$ de $R$ con $\mathfrak{p} \cap S = \emptyset$.

**Mini-ejemplo.** $\mathbb{Z}_{(p)} = \{a/b \in \mathbb{Q} : p \nmid b\}$ es local, con único maximal $p\mathbb{Z}_{(p)}$. Contiene la información $p$-ádica de $\mathbb{Z}$.

**Mini-ejemplo.** $\mathbb{Z}[1/2] = \{a/2^n : a \in \mathbb{Z},\; n \geq 0\}$ invierte la potencia de $2$ y elimina el primo $(2)$ del espectro.

## 4. Anillos noetherianos

$R$ es **noetheriano** si satisface la **condición de cadena ascendente**: toda cadena
$$I_1 \subseteq I_2 \subseteq I_3 \subseteq \cdots$$
se estabiliza, es decir, existe $n$ con $I_n = I_{n+1} = \cdots$.

**Teorema (equivalencias).** Para un anillo $R$, son equivalentes:

1. $R$ es noetheriano.
2. Todo ideal de $R$ es finitamente generado.
3. Todo conjunto no vacío de ideales de $R$ tiene un elemento maximal.

**Teorema de la base de Hilbert.** Si $R$ es noetheriano, entonces $R[x]$ es noetheriano. Por inducción, si $\mathbb{K}$ es un cuerpo, $\mathbb{K}[x_1, \ldots, x_n]$ es noetheriano para todo $n$.

La noetherianidad es la "finitud" que hace tratable la geometría algebraica: garantiza que las variedades se describan con finitas ecuaciones y que exista la descomposición primaria.

**Mini-ejemplo.** $\mathbb{Z}$ es noetheriano porque todo ideal es principal: $(n) = n\mathbb{Z}$. Por Hilbert, $\mathbb{Z}[x]$ también lo es.

**Mini-ejemplo.** $\mathbb{C}[x,y]$ es noetheriano: todo ideal es finitamente generado, aunque no todo ideal sea principal (por ejemplo $(x,y)$ no es principal).

## 5. Descomposición primaria

Un ideal $Q \subseteq R$ es **primario** si $ab \in Q$ y $a \notin Q$ implican $b \in \sqrt{Q}$, donde
$$\sqrt{I} = \{r \in R : r^n \in I \text{ para algún } n \geq 1\}$$
es el **radical** de $I$. Equivalentemente, $Q$ es primario si $\operatorname{Ass}(R/Q)$ es un único primo, llamado su **primo asociado**.

**Teorema (Lasker–Noether).** En un anillo noetheriano, todo ideal $I$ se escribe como intersección finita de ideales primarios:
$$I = Q_1 \cap Q_2 \cap \cdots \cap Q_n,$$
con los $\sqrt{Q_i}$ determinados por $I$ (los primos asociados). Si se eliminan los redundantes y se agrupan los que tienen el mismo radical, la descomposición es única salvo el orden.

Esta es la generalización a ideales de la factorización en potencias de primos de un entero.

**Mini-ejemplo.** En $\mathbb{Z}$, la descomposición primaria de $(12)$ es
$$(12) = (4) \cap (3),$$
con radicales $(2)$ y $(3)$.

**Mini-ejemplo.** $(18) = (2) \cap (9)$ y $(60) = (4) \cap (3) \cap (5)$.

## 6. Dimensión de Krull

La **dimensión de Krull** de $R$ es el supremo de las longitudes de las cadenas de ideales primos
$$\mathfrak{p}_0 \subsetneq \mathfrak{p}_1 \subsetneq \cdots \subsetneq \mathfrak{p}_n,$$
es decir, $\dim R = n$ si existe tal cadena y no existe ninguna de longitud $n+1$. Geométricamente, es la dimensión de la variedad asociada.

**Altura.** La altura de un primo $\mathfrak{p}$ es la dimensión del anillo local $R_\mathfrak{p}$, esto es, la longitud máxima de cadenas de primos que terminan en $\mathfrak{p}$.

**Teorema (Krull, ideal principal).** Si $R$ es noetheriano y $a \in R$ no es divisor de cero ni invertible, todo primo minimal que contiene a $(a)$ tiene altura $1$.

**Teorema (Krull, altura).** Todo ideal propio de un anillo noetheriano está contenido en un primo de altura finita.

**Mini-ejemplo.** $\dim \mathbb{K} = 0$ (un cuerpo solo tiene el primo $(0)$); $\dim \mathbb{Z} = 1$ (cadena $(0) \subsetneq (p)$).

**Mini-ejemplo.** $\dim \mathbb{K}[x_1, \ldots, x_n] = n$, con la cadena $(0) \subsetneq (x_1) \subsetneq (x_1, x_2) \subsetneq \cdots \subsetneq (x_1, \ldots, x_n)$.

**Mini-ejemplo.** $\mathbb{Z}/12\mathbb{Z}$ tiene dimensión $0$: sus primos $(2)$ y $(3)$ son maximales y no hay cadenas estrictas.

## 7. Nullstellensatz de Hilbert

Sea $\mathbb{K}$ un cuerpo algebraicamente cerrado y $R = \mathbb{K}[x_1, \ldots, x_n]$. Para un ideal $I \subseteq R$ se define la variedad
$$V(I) = \{a \in \mathbb{K}^n : f(a) = 0 \text{ para todo } f \in I\},$$
y para un conjunto $X \subseteq \mathbb{K}^n$, el ideal
$$I(X) = \{f \in R : f(a) = 0 \text{ para todo } a \in X\}.$$

**Versión débil.** Los ideales maximales de $\mathbb{K}[x_1, \ldots, x_n]$ están en biyección con los puntos de $\mathbb{K}^n$:
$$\mathfrak{m} = (x_1 - a_1, \ldots, x_n - a_n) \longleftrightarrow (a_1, \ldots, a_n).$$
Equivalentemente, si $I$ es propio, entonces $V(I) \neq \emptyset$.

**Versión fuerte.** Para todo ideal $I \subseteq R$,
$$I(V(I)) = \sqrt{I}.$$
Así, los ideales radicales (con $I = \sqrt{I}$) corresponden exactamente a las variedades.

**Mini-ejemplo.** En $\mathbb{C}[x,y]$, $V(x^2 + y^2 - 1)$ es la circunferencia unitaria y $I(V) = \sqrt{(x^2+y^2-1)} = (x^2+y^2-1)$, pues el polinomio ya es radical.

**Mini-ejemplo.** $(x,y)$ es maximal en $\mathbb{C}[x,y]$ porque $\mathbb{C}[x,y]/(x,y) \cong \mathbb{C}$, que es cuerpo; geométricamente representa el origen $(0,0)$.

**Mini-ejemplo.** Sobre $\mathbb{C}$, $V(xy)$ es la unión de los ejes $\{x=0\} \cup \{y=0\}$; el ideal correspondiente es $(xy) = (x) \cap (y)$, que es radical.

## Ejercicios (20)

### Nivel 1: reconocimiento

1. ¿Es $(0)$ un ideal primo en $\mathbb{Z}$? ¿Y maximal?
2. ¿Cuáles son los ideales maximales de $\mathbb{C}[x]$?
3. ¿Es $\mathbb{Z}$ noetheriano? Justifica brevemente.
4. Calcula $\dim \mathbb{C}[x,y]$.
5. ¿Es $\mathbb{Z}/(7)$ un cuerpo? ¿Por qué?

### Nivel 2: aplicación directa

6. Describe $\operatorname{Spec}(\mathbb{Z}/6\mathbb{Z})$.
7. Descompón primariamente el ideal $(18)$ en $\mathbb{Z}$.
8. Describe el anillo local $\mathbb{Z}_{(3)}$ y su ideal maximal.
9. ¿Es $(x^2+1)$ maximal en $\mathbb{R}[x]$? ¿Y en $\mathbb{C}[x]$?
10. Halla el radical $\sqrt{(36)}$ en $\mathbb{Z}$.

### Nivel 3: cálculo y argumento

11. Demuestra que $(x,y)$ es maximal en $\mathbb{C}[x,y]$.
12. Calcula la dimensión de Krull de $\mathbb{C}[x,y]/(y-x^2)$.
13. Localiza $\mathbb{Z}$ en el primo $(2)$ y describe sus elementos no invertibles.
14. Descompón primariamente $(60)$ en $\mathbb{Z}$.
15. Enuncia el Nullstellensatz fuerte y calcula $I(V(x^2+y^2-1))$ sobre $\mathbb{C}$.

### Nivel 4: demostración

16. Prueba que en un dominio de integridad $R$, el ideal $(0)$ es primo.
17. Demuestra que todo ideal maximal es primo.
18. Describe el esquema de la prueba de que si $R$ es noetheriano, entonces $R[x]$ lo es.
19. Calcula $\dim \mathbb{C}[x,y]/(x)$ y justifica el resultado.
20. Si $I \subsetneq \mathbb{C}[x_1,\ldots,x_n]$ es un ideal propio, explica por qué $V(I) \neq \emptyset$.

## Respuestas

1. $(0)$ es primo porque $\mathbb{Z}$ es dominio ($\mathbb{Z}/(0) \cong \mathbb{Z}$). No es maximal, porque $\mathbb{Z}$ no es cuerpo.
2. Los $(x-a)$ con $a \in \mathbb{C}$; también $\mathbb{C}[x]/(x-a) \cong \mathbb{C}$.
3. Sí: todo ideal es principal, $(n) = n\mathbb{Z}$, luego finitamente generado; cumple la cadena ascendente.
4. $2$ (cadena $(0) \subsetneq (x) \subsetneq (x,y)$).
5. Sí: $7$ es primo, y $\mathbb{Z}/(7) = \mathbb{Z}_7$ es cuerpo; $(7)$ es maximal.
6. Sus primos son $(2)$ y $(3)$ (imágenes de los primos que contienen a $6$); ambos maximales, dos puntos.
7. $(18) = (2) \cap (9)$, con radicales $(2)$ y $(3)$.
8. $\mathbb{Z}_{(3)} = \{a/b \in \mathbb{Q} : 3 \nmid b\}$; es local con maximal $3\mathbb{Z}_{(3)}$, formado por las fracciones de numerador múltiplo de $3$.
9. En $\mathbb{R}[x]$ sí, pues $\mathbb{R}[x]/(x^2+1) \cong \mathbb{C}$. En $\mathbb{C}[x]$ no: $x^2+1 = (x-i)(x+i)$ lo factoriza, luego no es primo.
10. $\sqrt{(36)} = (6)$, ya que $\operatorname{rad}(36) = 2 \cdot 3 = 6$.
11. $\mathbb{C}[x,y]/(x,y) \cong \mathbb{C}$ (evaluar en $(0,0)$) es cuerpo; por el diccionario, $(x,y)$ es maximal.
12. $\mathbb{C}[x,y]/(y-x^2) \cong \mathbb{C}[x]$, que tiene dimensión $1$; geométricamente es la parábola.
13. $\mathbb{Z}_{(2)} = \{a/b \in \mathbb{Q} : 2 \nmid b\}$; son no invertibles las fracciones con numerador par, que forman el maximal $2\mathbb{Z}_{(2)}$.
14. $(60) = (4) \cap (3) \cap (5)$, con radicales $(2),(3),(5)$.
15. $I(V(I)) = \sqrt{I}$ para todo ideal $I$. Aquí $I(V(x^2+y^2-1)) = (x^2+y^2-1)$, que ya es radical.
16. Si $ab \in (0)$, entonces $ab = 0$; al ser $R$ dominio, $a=0$ o $b=0$, es decir $a \in (0)$ o $b \in (0)$.
17. Si $I$ es maximal, $R/I$ es cuerpo, luego dominio, luego $I$ es primo.
18. Se toma un ideal $J \subseteq R[x]$ y se mira el ideal de coeficientes líderes; por noetherianidad de $R$ es finitamente generado, y con esos generadores se construye un conjunto finito que genera a $J$.
19. $\mathbb{C}[x,y]/(x) \cong \mathbb{C}[y]$, de dimensión $1$; la cadena es $(0) \subsetneq (y)$.
20. Por la versión débil del Nullstellensatz sobre un cuerpo algebraicamente cerrado, todo ideal propio tiene un cero común; si $V(I) = \emptyset$, entonces $I$ no sería propio (contendría a $1$).
