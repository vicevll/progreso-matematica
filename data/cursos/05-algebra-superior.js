window.CURSOS = window.CURSOS || {};
window.CURSOS["algebra-superior"] = {
  "algebra-lineal": String.raw`
## Espacios vectoriales
Un **espacio vectorial** sobre un cuerpo $\mathbb{K}$ es un conjunto $V$ con suma y producto por escalares que cumplen: conmutatividad, asociatividad, neutro $\vec{0}$, inverso, distributividad y compatibilidad de escalares.

**Ejemplos:** $\mathbb{R}^n$, matrices $M_{m\times n}$, polinomios $\mathbb{K}[x]$, funciones continuas $C[a,b]$, soluciones de una EDO lineal.

El álgebra lineal estudia estos espacios y las **transformaciones lineales** entre ellos. Todo problema se reduce a matrices y vectores propios.

## Independencia, base y dimensión
- **Combinación lineal:** $\alpha_1v_1 + \cdots + \alpha_nv_n$.
- **Generan:** todo vector del espacio es combinación de ellos.
- **Independientes:** la única combinación que da cero es la trivial.
- **Base:** conjunto que genera y es independiente. Las coordenadas son únicas.
- **Dimensión:** número de vectores de una base (bien definido).

**Ejemplo.** En $\mathbb{R}^3$, $\{(1,0,0), (0,1,0), (0,0,1)\}$ es la base canónica; $\dim = 3$. Los vectores $(1,1,1)$ y $(2,2,2)$ son dependientes (uno es múltiplo del otro).

## Matrices y sistemas de ecuaciones
Un sistema $A\vec{x} = \vec{b}$ se resuelve con **eliminación de Gauss**: operaciones elementales por filas hasta la forma escalonada.

**Teorema de Rouché-Frobenius:**
- $\text{rango}(A) < \text{rango}(A|b)$: incompatible (sin solución).
- $\text{rango}(A) = \text{rango}(A|b) = n$: solución única.
- $\text{rango}(A) = \text{rango}(A|b) < n$: infinitas soluciones con $n - r$ parámetros.

**Ejemplo.**
$$\begin{cases} x + y = 3 \\ 2x - y = 0 \end{cases} \Rightarrow x = 1, \; y = 2$$

## Rango, inversa y determinantes
- **Rango:** número de filas (o columnas) independientes; dimensión de la imagen.
- **Inversa:** $A$ es invertible si y solo si $\det A \neq 0$; entonces $A^{-1} = \dfrac{1}{\det A}\,\text{adj}(A)$.
- **Determinante:** mide el volumen con signo del paralelepípedo de las columnas; $\det(AB) = \det A \det B$.
- **Regla de Cramer:** para sistemas con $\det \neq 0$, $x_i = \det(A_i)/\det(A)$.

**Ejemplo.** $\det\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} = 5 \neq 0$: invertible.

## Transformaciones lineales
$T: V \to W$ es **lineal** si $T(u + v) = T(u) + T(v)$ y $T(\alpha v) = \alpha T(v)$.

Toda transformación lineal entre espacios de dimensión finita se representa con una **matriz** una vez elegidas las bases. Composición de transformaciones equivale a multiplicación de matrices.

**Ejemplo.** $T(x, y) = (2x, x + y)$ tiene matriz $\begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$ en la base canónica.

## Núcleo, imagen y teorema de la dimensión
- **Núcleo:** $\ker T = \{v : T(v) = 0\}$; mide la pérdida de información.
- **Imagen:** $\text{Im}\,T = \{T(v)\}$; es el alcance.
- $T$ es inyectiva $\iff \ker T = \{0\}$; sobreyectiva $\iff \text{Im} = W$.
- **Teorema de la dimensión:**
$$\dim V = \dim(\ker T) + \dim(\text{Im}\,T)$$

**Ejemplo.** $T(x,y,z) = (x + y + z, 0)$: núcleo de dimensión 2, imagen de dimensión 1; suma 3. Correcto.

## Valores propios y diagonalización
$\lambda$ es **valor propio** con **vector propio** $v \neq 0$ si $Av = \lambda v$. Se calcula con el polinomio característico $\det(A - \lambda I) = 0$.

**Diagonalizable:** existe base de vectores propios, equivalentemente $A = PDP^{-1}$. Es diagonalizable si la multiplicidad geométrica iguala la algebraica para cada valor propio.

**Teorema espectral:** las matrices simétricas reales son diagonalizables con base **ortonormal**.

**Ejemplo.** $A = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$: valores propios 2 y 3, diagonalizable. $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ no lo es (un solo vector propio).

## Producto interno y ortogonalidad
El producto interno permite medir ángulos y distancias: $\langle u, v\rangle$; en $\mathbb{R}^n$, el producto punto. **Ortogonales** si $\langle u, v\rangle = 0$.

- **Proyección** de $u$ sobre $v$: $\dfrac{\langle u, v\rangle}{\langle v, v\rangle}v$.
- **Gram-Schmidt:** construye bases ortonormales.
- **Mínimos cuadrados:** la mejor solución de $A\vec{x} = \vec{b}$ cuando no hay solución exacta sale de $A^TA\vec{x} = A^T\vec{b}$.

**Ejemplo.** Proyección de $(1,1)$ sobre $(1,0)$: $(1,0)$; la componente ortogonal es $(0,1)$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, sistema).** Resuelve $\begin{cases} x + 2y = 4 \\ 3x - y = 1 \end{cases}$.
- Despeja: $y = 3x - 1$; sustituye: $x + 6x - 2 = 4$.
- $x = 6/7$; $y = 11/7$.

**Ejemplo 2 (práctica, determinante).** $\det\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$.
- Expande: $1(0 - 24) - 2(0 - 20) + 3(0 - 5) = -24 + 40 - 15 = 1$.

**Ejemplo 3 (práctica, valores propios).** $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.
- $\det(A - \lambda I) = (4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = 0$.
- Valores propios: $\lambda = 5$ y $\lambda = 2$.

**Ejemplo 4 (aplicación, población).** Un modelo de dos especies usa $A = \begin{pmatrix} 0.9 & 0.2 \\ 0.1 & 0.8 \end{pmatrix}$. Interpreta su valor propio dominante.
- $\lambda = 1$ y $\lambda = 0.7$.
- El sistema converge a la distribución estable del valor propio 1 (la población total se conserva).

**Ejemplo 5 (aplicación, mínimos cuadrados).** Ajusta una recta a $(1,2)$, $(2,3)$, $(3,5)$.
- $A^TA\begin{pmatrix} b \\ m\end{pmatrix} = A^T\vec{y}$ con $A$ de unos y $x$.
- Resultado: $y = 1.5x + 0.33$; residual mínimo.

**Ejemplo 6 (práctica, rango).** Halla el rango de $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$.
- La segunda fila es el doble de la primera.
- Rango 1: las columnas son dependientes.

## Contextos donde se aplica
- **Computación gráfica:** rotaciones, escalados y proyecciones son matrices.
- **Data science:** PCA usa valores propios; mínimos cuadrados es la regresión.
- **Física:** momentos de inercia, mecánica cuántica (operadores), vibraciones.
- **Ingeniería:** análisis estructural, circuitos, control.
- **Economía:** modelos input-output de Leontief, equilibrio de mercados.

## Errores comunes y cómo evitarlos
- **Confundir rango con número de filas.** El rango puede ser menor si hay dependencia.
- **Suponer diagonalizable.** No toda matriz lo es (Jordan).
- **Calcular mal el determinante por signos.** Usa cofactores con cuidado.
- **Olvidar que la inversa solo existe con $\det \neq 0$.**
- **Confundir inyectiva con sobreyectiva.** Usa el teorema de la dimensión para contarlas.

## Ejercicios propuestos
1. Determina si $\{(1,2), (2,4)\}$ es base de $\mathbb{R}^2$.
2. Resuelve $\begin{cases} 2x + y = 5 \\ x - y = 1 \end{cases}$.
3. Halla $\det\begin{pmatrix} 2 & -1 \\ 3 & 4 \end{pmatrix}$.
4. Valores propios de $\begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix}$.
5. Núcleo e imagen de $T(x,y,z) = (x, 0, z)$.
6. Proyecta $(2,3)$ sobre $(1,1)$.
7. Diagonaliza $A = \begin{pmatrix} 2 & 2 \\ 0 & 2 \end{pmatrix}$ si es posible.
8. Ajusta por mínimos cuadrados la recta a $(0,1)$, $(1,2)$, $(2,4)$.

**Respuestas:** 1) No (dependientes). 2) $x = 2$, $y = 1$. 3) $11$. 4) $3$ y $-2$. 5) Núcleo $\{(0,t,0)\}$; imagen el plano $xz$. 6) $\frac{5}{2}(1,1)$. 7) No: vector propio único $(1,0)$. 8) $y \approx 1.5x + 0.83$.

## Resumen
- Los espacios vectoriales se describen con base y dimensión; las coordenadas son únicas.
- Los sistemas se resuelven con Gauss; Rouché-Frobenius clasifica las soluciones.
- Las transformaciones lineales son matrices; el teorema de la dimensión relaciona núcleo e imagen.
- La diagonalización y el teorema espectral simplifican el análisis.
- Mínimos cuadrados resuelve sistemas incompatibles: la base de la regresión.
`,

  "algebra-abstracta": String.raw`
## Operaciones y estructuras algebraicas
Un **álgebra abstracta** es un conjunto con operaciones que cumplen axiomas. La matemática estudia las propiedades que se deducen de esos axiomas, sin importar de qué objetos se trate.

Las tres estructuras fundamentales:
- **Grupo:** una operación (suma o producto) con asociatividad, identidad e inversos.
- **Anillo:** dos operaciones compatibles (suma y producto).
- **Cuerpo:** anillo conmutativo donde todo elemento no nulo tiene inverso multiplicativo.

La abstracción permite reutilizar teoremas: lo que se demuestra para grupos vale para simetrías, números, matrices y permutaciones a la vez.

## Grupos: definición y ejemplos
Un **grupo** $(G, *)$ cumple:
1. **Cerradura:** $a * b \in G$.
2. **Asociatividad:** $(a*b)*c = a*(b*c)$.
3. **Identidad:** existe $e$ con $e*a = a*e = a$.
4. **Inversos:** para cada $a$ existe $a^{-1}$ con $a*a^{-1} = e$.

Es **abeliano** si además $a*b = b*a$.

**Ejemplos:** $(\mathbb{Z}, +)$, $(\mathbb{Q}\setminus\{0\}, \cdot)$, las matrices invertibles $GL_n$, las permutaciones $S_n$, las simetrías de un polígono, $(\mathbb{Z}/n\mathbb{Z}, +)$.

**Ejemplo no grupo.** $(\mathbb{Z}, \cdot)$ no es grupo: 2 no tiene inverso multiplicativo entero.

## Anillos y cuerpos
Un **anillo** $(R, +, \cdot)$ tiene: $(R, +)$ grupo abeliano, el producto es asociativo y distribuye sobre la suma. Si el producto es conmutativo, es anillo conmutativo; si hay identidad multiplicativa, es unitario.

**Dominio de integridad:** anillo conmutativo con unidad sin divisores de cero ($ab = 0 \Rightarrow a = 0$ o $b = 0$).

**Cuerpo:** todo elemento no nulo tiene inverso. Todo cuerpo es dominio; el recíproco es falso ($\mathbb{Z}$ es dominio, no cuerpo).

**Ejemplos:** $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$, $\mathbb{Z}/p\mathbb{Z}$ con $p$ primo (cuerpo), matrices $M_n$ (anillo no conmutativo).

## Homomorfismos
Un **homomorfismo** es una función que preserva la operación:
$$\phi(a * b) = \phi(a) * \phi(b)$$

- **Núcleo:** $\ker\phi = \{a : \phi(a) = e\}$; mide la pérdida de información.
- **Imagen:** $\text{Im}\,\phi$.
- **Isomorfismo:** homomorfismo biyectivo; los grupos son "el mismo" estructuralmente.
- **Teorema de isomorfía:** $G/\ker\phi \cong \text{Im}\,\phi$.

**Ejemplo.** $\phi: \mathbb{Z} \to \mathbb{Z}/5\mathbb{Z}$, $\phi(n) = n \bmod 5$: núcleo $5\mathbb{Z}$, imagen todo $\mathbb{Z}/5\mathbb{Z}$; $\mathbb{Z}/5\mathbb{Z} \cong \mathbb{Z}_5$.

## Subestructuras
- **Subgrupo** $H \leq G$: cerrado bajo la operación e inversos. Criterio: $H \neq \emptyset$ y $ab^{-1} \in H$.
- **Subgrupo normal** $N \trianglelefteq G$: $gNg^{-1} = N$; permite construir el cociente $G/N$.
- **Ideal** $I \subseteq R$: cerrado bajo suma y bajo multiplicación por elementos del anillo; permite el cociente $R/I$.
- **Subcuerpo:** subconjunto que es cuerpo con las operaciones heredadas.

**Ejemplo.** $3\mathbb{Z} \leq \mathbb{Z}$ es subgrupo (y normal, porque $\mathbb{Z}$ es abeliano). El cociente $\mathbb{Z}/3\mathbb{Z} = \mathbb{Z}_3$.

## Isomorfismo y clasificación
Dos estructuras son **isomorfas** si existe una biyección que preserva las operaciones. La clasificación busca describir todas las estructuras de un tipo salvo isomorfismo.

**Ejemplos:**
- Todo grupo cíclico de orden $n$ es isomorfo a $\mathbb{Z}_n$.
- Hay un solo grupo de orden 5 (salvo isomorfismo): $\mathbb{Z}_5$.
- Los grupos de orden 4 son dos: $\mathbb{Z}_4$ y $\mathbb{Z}_2 \times \mathbb{Z}_2$.

**Cayley:** todo grupo finito es isomorfo a un subgrupo de permutaciones. La abstracción siempre se puede concretar.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, grupo).** ¿Es $(\mathbb{R}, \cdot)$ grupo?
- Asociativo y con identidad 1.
- $0$ no tiene inverso multiplicativo.
- No es grupo (sí lo es $\mathbb{R}\setminus\{0\}$).

**Ejemplo 2 (práctica, subgrupo).** ¿Es $H = \{0, 2, 4\}$ subgrupo de $\mathbb{Z}_6$ con la suma?
- $0$ es identidad; $2+4 = 0$, $4+2 = 0$, $2+2 = 4$.
- Cerrado e inversos: sí, es subgrupo (isomorfo a $\mathbb{Z}_3$).

**Ejemplo 3 (práctica, orden).** Orden de $\bar{3}$ en $\mathbb{Z}_{12}$.
- Múltiplos: $3, 6, 9, 0$.
- Orden 4 (el menor $k$ con $3k \equiv 0$).

**Ejemplo 4 (aplicación, simetrías).** El grupo diedral $D_4$ de simetrías del cuadrado tiene orden 8.
- 4 rotaciones y 4 reflexiones.
- No es abeliano: rotar y luego reflejar difiere de reflejar y luego rotar.

**Ejemplo 5 (aplicación, criptografía).** En $\mathbb{Z}_7^* = \{1, \ldots, 6\}$ con producto, $3$ es generador.
- Potencias: $3, 2, 6, 4, 5, 1$ (recorre todo el grupo).
- Los grupos cíclicos sostienen protocolos como Diffie-Hellman.

**Ejemplo 6 (práctica, homomorfismo).** ¿Es $\phi: \mathbb{Z} \to \mathbb{Z}$, $\phi(n) = 2n$ homomorfismo?
- $\phi(m + n) = 2(m+n) = 2m + 2n = \phi(m) + \phi(n)$.
- Sí; su imagen son los pares y su núcleo $\{0\}$.

## Contextos donde se aplica
- **Criptografía:** grupos cíclicos, curvas elípticas, RSA.
- **Física:** grupos de simetría, partículas elementales, cristalografía.
- **Química:** simetrías moleculares y espectroscopía.
- **Computación:** códigos correctores, teoría de autómatas.
- **Matemática:** base del álgebra moderna, teoría de Galois y geometría algebraica.

## Errores comunes y cómo evitarlos
- **Confundir cerradura con subgrupo.** También hacen falta identidad e inversos (o el criterio $ab^{-1}$).
- **Suponer que todo anillo es cuerpo.** $\mathbb{Z}$ no lo es.
- **Creer que todo subgrupo es normal.** Solo en abelianos es automático.
- **Confundir orden del grupo con orden de un elemento.** El segundo divide al primero (Lagrange).
- **Olvidar verificar ambos lados de la identidad.** $e$ debe funcionar por izquierda y derecha.

## Ejercicios propuestos
1. Demuestra que $(\mathbb{Q}, +)$ es grupo.
2. ¿Es $\{1, -1, i, -i\}$ grupo con el producto?
3. Halla el orden de $\bar{4}$ en $\mathbb{Z}_{10}$.
4. ¿Es $2\mathbb{Z}$ ideal de $\mathbb{Z}$?
5. Clasifica los grupos de orden 6 (salvo isomorfismo).
6. Halla el núcleo de $\phi: \mathbb{Z} \to \mathbb{Z}_4$, $\phi(n) = n \bmod 4$.
7. Demuestra que todo grupo de orden primo es cíclico.
8. ¿Es $\mathbb{Z}_6$ isomorfo a $\mathbb{Z}_2 \times \mathbb{Z}_3$?

**Respuestas:** 1) Neutro 0, inverso $-a$. 2) Sí, cíclico de orden 4. 3) $5$ (4·5 = 20 ≡ 0). 4) Sí. 5) $\mathbb{Z}_6$ y $S_3$. 6) $4\mathbb{Z}$. 7) Los subgrupos solo pueden tener orden 1 o $p$. 8) Sí, por el teorema chino del resto.

## Resumen
- Grupos, anillos y cuerpos capturan la estructura común de objetos muy distintos.
- Los homomorfismos preservan operaciones; los isomorfismos identifican estructuras.
- Los subgrupos normales y los ideales permiten cocientes.
- La clasificación busca todas las estructuras de un tipo salvo isomorfismo.
- Las simetrías y la criptografía son aplicaciones centrales.
`,

  "grupos": String.raw`
## Grupos y ejemplos fundamentales
Un grupo $(G, *)$ tiene cerradura, asociatividad, identidad e inversos. El **orden** $|G|$ es el número de elementos; el **orden de un elemento** $g$ es el menor $n > 0$ con $g^n = e$.

**Familias importantes:**
- **Cíclicos** $\mathbb{Z}_n$: generados por un elemento.
- **Simétricos** $S_n$: permutaciones de $n$ elementos; $|S_n| = n!$.
- **Alternantes** $A_n$: permutaciones pares; $|A_n| = n!/2$ para $n \geq 2$.
- **Diedrales** $D_n$: simetrías del polígono regular; $|D_n| = 2n$.
- **Matriciales** $GL_n(\mathbb{R})$: matrices invertibles.

**Ejemplo.** En $S_3$, la permutación $(1\,2)$ tiene orden 2; el ciclo $(1\,2\,3)$ tiene orden 3.

## Subgrupos y el teorema de Lagrange
$H \leq G$ es subgrupo si es cerrado bajo la operación e inversos. Criterio práctico: $H \neq \emptyset$ y $a, b \in H \Rightarrow ab^{-1} \in H$.

**Teorema de Lagrange:** si $G$ es finito y $H \leq G$, entonces
$$|G| = |H| \cdot [G : H]$$
el orden de $H$ **divide** al orden de $G$. El número de clases laterales es el índice $[G:H]$.

**Consecuencias:**
- El orden de todo elemento divide a $|G|$ (aplica a $\langle g\rangle$).
- Todo grupo de orden primo es cíclico.
- El recíproco de Lagrange es **falso**: $A_4$ tiene orden 12 pero no subgrupo de orden 6.

## Subgrupos normales y cocientes
$N \trianglelefteq G$ es **normal** si $gNg^{-1} = N$ para todo $g$; equivalentemente, las clases laterales izquierdas y derechas coinciden. Entonces $G/N$ es un grupo con la operación inducida.

**Teorema de isomorfía:** $\phi: G \to H$ homomorfismo $\Rightarrow G/\ker\phi \cong \text{Im}\,\phi$.

**Ejemplo.** En $\mathbb{Z}$, todo subgrupo $n\mathbb{Z}$ es normal y $\mathbb{Z}/n\mathbb{Z} = \mathbb{Z}_n$.

**Centro** $Z(G)$ y **conmutador** $[G, G]$ son subgrupos normales importantes: el segundo mide cuán no abeliano es el grupo.

## Acciones de grupo
Una **acción** de $G$ sobre un conjunto $X$ es un homomorfismo $G \to \text{Perm}(X)$: cada $g$ mueve elementos de $X$ respetando la estructura.

**Conceptos:** órbita ($Gx = \{gx\}$), estabilizador ($G_x = \{g : gx = x\}$) y la relación:
$$|Gx| = \frac{|G|}{|G_x|}$$

**Fórmula de clases:** $|G| = |Z(G)| + \sum [G : C_G(g_i)]$, herramienta para clasificar grupos.

**Fórmula de Burnside:** el número de órbitas es $\dfrac{1}{|G|}\sum_{g \in G}|X^g|$; cuenta coloraciones únicas.

**Ejemplo.** Colorear las caras de un cubo con 2 colores: Burnside da 10 coloraciones distintas salvo rotación.

## Teoremas de Sylow
Si $|G| = p^m \cdot r$ con $p \nmid r$, un **p-subgrupo de Sylow** tiene orden $p^m$. Teoremas:

1. **Existencia:** hay al menos un Sylow $p$.
2. **Conjugación:** todos los Sylow $p$ son conjugados.
3. **Conteo:** el número $n_p$ cumple $n_p \equiv 1 \pmod p$ y $n_p \mid r$.

**Aplicación típica:** demostrar que un grupo de orden dado no es simple, contando Sylows. Ejemplo: todo grupo de orden $pq$ con $p < q$, $p \nmid q - 1$ es cíclico.

## Clasificación de grupos pequeños
- Orden 4: $\mathbb{Z}_4$ o $\mathbb{Z}_2^2$.
- Orden 6: $\mathbb{Z}_6$ o $S_3$.
- Orden 8: $\mathbb{Z}_8$, $\mathbb{Z}_4 \times \mathbb{Z}_2$, $\mathbb{Z}_2^3$, $D_4$, y el grupo de cuaterniones $Q_8$.
- Orden $p$: solo $\mathbb{Z}_p$.
- Orden $p^2$: solo $\mathbb{Z}_{p^2}$ o $\mathbb{Z}_p^2$ (siempre abelianos).

La clasificación completa de grupos finitos es uno de los mayores logros de la matemática (teorema de clasificación, terminado en 2004).

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, orden).** Orden de $(1\,2\,3\,4)$ en $S_4$.
- Es un ciclo de longitud 4.
- Orden 4: $(1\,2\,3\,4)^4 = e$ y no antes.

**Ejemplo 2 (práctica, Lagrange).** ¿Existe un subgrupo de orden 3 en $\mathbb{Z}_{12}$?
- $3 \mid 12$: Lagrange no lo prohíbe.
- Sí: $\{0, 4, 8\}$ (generado por 4).

**Ejemplo 3 (práctica, cociente).** $\mathbb{Z}/6\mathbb{Z} \cong \mathbb{Z}_6$.
- Núcleo de $\phi(n) = n \bmod 6$ es $6\mathbb{Z}$.
- Por isomorfía, el cociente es $\mathbb{Z}_6$.

**Ejemplo 4 (aplicación, Burnside).** Collares de 4 cuentas con 2 colores, rotaciones identificadas.
- Rotaciones: identidad (16 fijas), 2 rotaciones de 90° (2 fijas cada una), 1 de 180° (4 fijas).
- Burnside: $(16 + 2 + 4 + 2)/4 = 6$ collares distintos.

**Ejemplo 5 (aplicación, Sylow).** Demuestra que todo grupo de orden 15 es cíclico.
- $n_3 \equiv 1 \pmod 3$ y $n_3 \mid 5$: $n_3 = 1$ o $4$.
- $n_5 \equiv 1 \pmod 5$ y $n_5 \mid 3$: $n_5 = 1$ si $n_5 \neq$ 3... $n_5 = 1$.
- Ambos normales; el grupo es producto directo $\mathbb{Z}_3 \times \mathbb{Z}_5 \cong \mathbb{Z}_{15}$.

**Ejemplo 6 (práctica, acción).** ¿Cuántas simetrías dejan fijo el vértice 1 en $D_4$?
- Estabilizador del vértice: identidad y la reflexión por la diagonal del vértice.
- $|G_x| = 2$; la órbita tiene $8/2 = 4$ vértices. Coherente.

## Contextos donde se aplica
- **Cristalografía:** los 230 grupos espaciales clasifican cristales.
- **Física de partículas:** simetrías gauge y grupos de Lie.
- **Química:** teoría de grupos para vibraciones moleculares.
- **Computación:** algoritmos de permutación, rompecabezas (cubo de Rubik), criptografía.
- **Matemática:** geometría, topología, teoría de Galois.

## Errores comunes y cómo evitarlos
- **Creer que el recíproco de Lagrange vale.** No: hay divisores sin subgrupo.
- **Suponer que todo subgrupo es normal.** Revisa conjugados.
- **Confundir orden de elemento con orden de grupo.** Divide, no iguala.
- **Olvidar la no conmutatividad.** $ab \neq ba$ en general; cuida el orden.
- **Aplicar Sylow sin calcular $n_p$.** Verifica las dos condiciones de congruencia y divisibilidad.

## Ejercicios propuestos
1. Orden de $(1\,2)(3\,4\,5)$ en $S_5$.
2. ¿Tiene $\mathbb{Z}_8$ subgrupos de orden 3?
3. Halla todos los subgrupos de $\mathbb{Z}_6$.
4. Demuestra que $S_3$ no es abeliano.
5. ¿Cuántos grupos de orden 9 hay?
6. Calcula el número de coloraciones de un triángulo con 3 colores salvo rotación.
7. Demuestra que el centro de $S_3$ es trivial.
8. ¿Es $A_4$ simple?

**Respuestas:** 1) $\text{mcm}(2,3) = 6$. 2) No (3 no divide 8). 3) $\{0\}$, $\{0,3\}$, $\{0,2,4\}$, $\mathbb{Z}_6$. 4) $(1\,2)(1\,3) \neq (1\,3)(1\,2)$. 5) Dos: $\mathbb{Z}_9$ y $\mathbb{Z}_3^2$. 6) $(27 + 3 + 3)/3 = 11$. 7) Solo $e$ conmuta con todos. 8) No: tiene el subgrupo normal de Klein.

## Resumen
- Los grupos capturan la simetría; Lagrange restringe los subgrupos posibles.
- Los normales permiten cocientes; la isomorfía identifica estructuras.
- Las acciones cuentan órbitas y coloraciones (Burnside).
- Sylow da la estructura de los subgrupos primos y clasifica grupos pequeños.
- La teoría de grupos es el lenguaje de la simetría en toda la ciencia.
`,

  "anillos": String.raw`
## Anillos: definición y ejemplos
Un **anillo** $(R, +, \cdot)$ tiene: $(R, +)$ grupo abeliano, producto asociativo y distributivo sobre la suma. Si el producto es conmutativo, es **conmutativo**; si hay $1$, es **unitario**.

**Tipos importantes:**
- **Dominio de integridad:** conmutativo, unitario, sin divisores de cero.
- **Cuerpo:** todo elemento no nulo es invertible.
- **Anillo de polinomios** $\mathbb{K}[x]$.
- **Anillo de matrices** $M_n(\mathbb{K})$ (no conmutativo).
- **Enteros módulo $n$** $\mathbb{Z}_n$: dominio si y solo si $n$ es primo.

**Ejemplo.** En $\mathbb{Z}_6$, $2 \cdot 3 = 0$: hay divisores de cero, no es dominio.

## Ideales
Un **ideal** $I \subseteq R$ es un subgrupo aditivo cerrado bajo multiplicación por elementos del anillo: $r \in R$, $a \in I \Rightarrow ra \in I$.

**Tipos:**
- **Principal:** $I = (a) = \{ra : r \in R\}$, generado por un elemento.
- **Primo:** $ab \in I \Rightarrow a \in I$ o $b \in I$.
- **Maximal:** no existe ideal propio que lo contenga estrictamente.

**Ejemplo.** En $\mathbb{Z}$, los ideales son $(n) = n\mathbb{Z}$. El ideal $(5)$ es primo y maximal; $(6)$ no es primo ($2 \cdot 3 \in (6)$ pero ninguno está).

## Anillos cociente
El cociente $R/I$ (con $I$ ideal) hereda las operaciones de $R$ módulo $I$. La proyección $\pi: R \to R/I$ es un homomorfismo con núcleo $I$.

**Diccionario fundamental:**
- $I$ primo $\iff$ $R/I$ es dominio de integridad.
- $I$ maximal $\iff$ $R/I$ es cuerpo.

**Ejemplo.** $\mathbb{Z}/(5) = \mathbb{Z}_5$ es cuerpo porque $(5)$ es maximal. $\mathbb{Z}/(6)$ no es dominio.

**Teorema de isomorfía:** $R/\ker\phi \cong \text{Im}\,\phi$ para homomorfismos de anillos.

## Divisibilidad: DIP, DFU y euclídeos
- **DIP** (dominio de ideales principales): todo ideal es principal. Ejemplo: $\mathbb{Z}$, $\mathbb{K}[x]$.
- **DFU** (factorización única): todo elemento no nulo y no invertible se factoriza de forma única en irreducibles. Todo DIP es DFU.
- **Dominio euclídeo:** tiene una función de tamaño que permite división con resto. Todo euclídeo es DIP.

**Cadena:** euclídeo $\Rightarrow$ DIP $\Rightarrow$ DFU $\Rightarrow$ dominio.

**Ejemplo.** En $\mathbb{Z}$, la factorización en primos es única. En $\mathbb{Z}[\sqrt{-5}]$, $6 = 2 \cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})$: no es DFU.

## Polinomios sobre un cuerpo
$\mathbb{K}[x]$ con $\mathbb{K}$ cuerpo es un dominio euclídeo: se divide con resto y se calcula el máximo común divisor con Euclides.

**Resultados:**
- Un polinomio de grado $n$ tiene a lo más $n$ raíces.
- **Criterio de Eisenstein:** si un primo $p$ divide a todos los coeficientes menos al líder y $p^2$ no divide al constante, el polinomio es irreducible sobre $\mathbb{Q}$.
- **Criterio de racionalidad:** las raíces racionales de un polinomio entero son $p/q$ con $p \mid$ constante, $q \mid$ líder.

**Ejemplo.** $x^3 - 2$ es irreducible sobre $\mathbb{Q}$ por Eisenstein con $p = 2$.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, divisor de cero).** Halla divisores de cero en $\mathbb{Z}_{12}$.
- $2 \cdot 6 = 12 \equiv 0$; $3 \cdot 4 = 0$; $8 \cdot 3 = 0$.
- Divisores: $2, 3, 4, 6, 8, 9, 10$ (los no coprimos con 12).

**Ejemplo 2 (práctica, ideal).** ¿Es $(2)$ primo en $\mathbb{Z}$?
- Si $ab$ es par, alguno de $a, b$ es par.
- Sí, y además maximal: $\mathbb{Z}/(2) = \mathbb{Z}_2$ es cuerpo.

**Ejemplo 3 (práctica, cociente).** Describe $\mathbb{Z}[x]/(x^2 + 1)$.
- Es el anillo de polinomios con $x^2 = -1$.
- Es isomorfo a los enteros gaussianos $\mathbb{Z}[i]$.

**Ejemplo 4 (aplicación, factorización).** Factoriza $x^3 - 1$ sobre $\mathbb{R}$ y sobre $\mathbb{C}$.
- Sobre $\mathbb{R}$: $(x - 1)(x^2 + x + 1)$.
- Sobre $\mathbb{C}$: $(x - 1)(x - \omega)(x - \omega^2)$ con $\omega = e^{2\pi i/3}$.

**Ejemplo 5 (aplicación, Eisenstein).** ¿Es irreducible $x^4 + 10x + 5$ sobre $\mathbb{Q}$?
- Primo $p = 5$: divide 10 y 5; no divide al líder 1; $25 \nmid 5$.
- Irreducible por Eisenstein.

**Ejemplo 6 (práctica, euclídeo).** Halla el mcd de $x^3 - 1$ y $x^2 - 1$ en $\mathbb{Q}[x]$.
- Euclides: resto de $x^3 - 1$ entre $x^2 - 1$ es $x - 1$.
- Resto de $x^2 - 1$ entre $x - 1$ es 0: mcd $= x - 1$.

## Contextos donde se aplica
- **Criptografía:** aritmética modular y anillos de enteros algebraicos.
- **Teoría de códigos:** códigos cíclicos sobre anillos de polinomios módulo $x^n - 1$.
- **Geometría algebraica:** los ideales definen variedades.
- **Física:** anillos de operadores, matrices, álgebras de Clifford.
- **Computación:** aritmética exacta y factorización simbólica en sistemas CAS.

## Errores comunes y cómo evitarlos
- **Confundir primo con irreducible.** Coinciden en DFU; en general no.
- **Suponer que todo ideal es principal.** Falso fuera de DIP.
- **Olvidar que $\mathbb{Z}_n$ es cuerpo solo si $n$ es primo.**
- **Aplicar Eisenstein con un primo que divide al líder.** La condición es crítica.
- **Creer que todo dominio es DFU.** $\mathbb{Z}[\sqrt{-5}]$ es el contraejemplo clásico.

## Ejercicios propuestos
1. ¿Es $\mathbb{Z}_7$ cuerpo? ¿Y $\mathbb{Z}_8$?
2. Halla los ideales de $\mathbb{Z}_{12}$.
3. ¿Es $(x^2 + 1)$ maximal en $\mathbb{R}[x]$?
4. Factoriza $x^4 - 1$ sobre $\mathbb{R}$.
5. Aplica Eisenstein a $x^3 + 3x + 3$.
6. Halla el mcd de $x^2 - 1$ y $x^2 - 2x + 1$.
7. ¿Es $\mathbb{Z}[x]$ un DIP?
8. Muestra que $\mathbb{Z}_6$ tiene divisores de cero.

**Respuestas:** 1) $\mathbb{Z}_7$ sí; $\mathbb{Z}_8$ no. 2) Los $(d)$ con $d \mid 12$. 3) Sí: $\mathbb{R}[x]/(x^2+1) \cong \mathbb{C}$. 4) $(x-1)(x+1)(x^2+1)$. 5) Irreducible ($p = 3$; $9 \nmid 3$). 6) $x - 1$. 7) No. 8) $2 \cdot 3 = 0$.

## Resumen
- Los anillos combinan dos operaciones; dominios y cuerpos son los casos más regulares.
- Los ideales permiten cocientes; primos y maximales corresponden a dominios y cuerpos.
- DIP, DFU y euclídeos ordenan la divisibilidad; en polinomios, Eisenstein decide irreducibilidad.
- La factorización única no es universal: hay dominios sin ella.
- Los anillos son el escenario de la aritmética abstracta y la geometría algebraica.
`,

  "galois": String.raw`
## Extensiones de cuerpos
Una **extensión** $F \subseteq K$ es un cuerpo mayor que contiene a $F$. El **grado** $[K : F]$ es la dimensión de $K$ como espacio vectorial sobre $F$.

**Extensión simple:** $K = F(\alpha)$, el menor cuerpo que contiene a $F$ y a $\alpha$.

**Ejemplo.** $[\mathbb{C} : \mathbb{R}] = 2$; $[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2$; $[\mathbb{Q}(\sqrt[3]{2}) : \mathbb{Q}] = 3$.

**Torre:** $[K : F] = [K : E]\cdot[E : F]$. Es la herramienta para calcular grados.

## Elementos algebraicos y polinomio mínimo
$\alpha$ es **algebraico** sobre $F$ si es raíz de un polinomio no nulo con coeficientes en $F$. El **polinomio mínimo** $m_\alpha(x)$ es el mónico de menor grado; es irreducible y divide a todo polinomio que anule a $\alpha$.

**Propiedades:**
- $[F(\alpha) : F] = \deg m_\alpha$.
- Las raíces de $m_\alpha$ son los **conjugados** de $\alpha$.
- $\alpha$ trascendente (como $\pi$ o $e$ sobre $\mathbb{Q}$) no tiene polinomio mínimo.

**Ejemplo.** Sobre $\mathbb{Q}$, el polinomio mínimo de $\sqrt[3]{2}$ es $x^3 - 2$ (Eisenstein); grado 3.

## Cuerpo de descomposición
El **cuerpo de descomposición** de un polinomio $f$ sobre $F$ es el menor cuerpo que contiene a $F$ y a **todas** las raíces de $f$.

**Ejemplo.** $x^3 - 2$ sobre $\mathbb{Q}$: raíces $\sqrt[3]{2}$, $\omega\sqrt[3]{2}$, $\omega^2\sqrt[3]{2}$ con $\omega = e^{2\pi i/3}$; el cuerpo es $\mathbb{Q}(\sqrt[3]{2}, \omega)$ de grado 6.

El cuerpo de descomposición es el escenario natural de la teoría: allí el polinomio se factoriza en lineales.

## El grupo de Galois
El **grupo de Galois** $\text{Gal}(K/F)$ son los automorfismos de $K$ que fijan $F$ punto a punto, con la composición.

**Propiedades:**
- $|\text{Gal}(K/F)| \leq [K : F]$, con igualdad si la extensión es **de Galois** (normal y separable).
- Cada automorfismo permuta las raíces del polinomio mínimo.
- $\text{Gal}(K/F)$ es un subgrupo de $S_n$ cuando $K$ es el cuerpo de descomposición de un polinomio de grado $n$.

**Ejemplo.** $\text{Gal}(\mathbb{Q}(\sqrt{2})/\mathbb{Q}) = \{id, \sigma\}$ con $\sigma(\sqrt{2}) = -\sqrt{2}$: isomorfo a $\mathbb{Z}_2$.

## La correspondencia de Galois
Para una extensión de Galois $K/F$ con grupo $G = \text{Gal}(K/F)$, hay una biyección que invierte inclusiones:
$$\{E : F \subseteq E \subseteq K\} \longleftrightarrow \{H : H \leq G\}$$
$$E = K^H, \qquad H = \text{Gal}(K/E)$$

**Propiedades:**
- $[K : E] = |H|$ y $[E : F] = [G : H]$.
- $E/F$ es normal $\iff$ $H$ es normal en $G$; entonces $\text{Gal}(E/F) \cong G/H$.

La correspondencia convierte problemas de cuerpos en problemas de grupos: eso es la magia de Galois.

## Solubilidad por radicales
Un polinomio es **soluble por radicales** si sus raíces se expresan con sumas, productos, cocientes y raíces n-ésimas de los coeficientes.

**Teorema de Galois:** $f$ es soluble por radicales sobre un cuerpo de característica 0 si y solo si su grupo de Galois es **soluble** (cadena de subgrupos normales con cocientes abelianos).

**Consecuencia histórica:** la quíntica general no es soluble por radicales porque $S_5$ no es soluble (contiene $A_5$, simple no abeliano). Abel y Galois cerraron un problema abierto 300 años.

## Imposibilidades clásicas
Los tres problemas griegos se resuelven con Galois:

1. **Duplicar el cubo** (construir $\sqrt[3]{2}$): grado 3, no es construible con regla y compás (solo grados potencias de 2).
2. **Trisecar el ángulo** ($60°$): equivale a resolver $x^3 - 3x - 1 = 0$, irreducible de grado 3.
3. **Cuadrar el círculo:** $\pi$ es trascendente (Lindemann): imposible.

**Construibilidad:** un número es construible si y solo si vive en una torre de extensiones de grado 2. Esto explica por qué el pentágono regular y el heptadecágono (Gauss) sí se construyen.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, grado).** $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}]$.
- $\sqrt{3} \notin \mathbb{Q}(\sqrt{2})$: grado 2 sobre él.
- Total: $2 \cdot 2 = 4$.

**Ejemplo 2 (práctica, polinomio mínimo).** Halla el de $\alpha = \sqrt{2} + \sqrt{3}$.
- $\alpha^2 = 5 + 2\sqrt{6} \Rightarrow (\alpha^2 - 5)^2 = 24$.
- $m(x) = x^4 - 10x^2 + 1$, irreducible de grado 4.

**Ejemplo 3 (práctica, grupo de Galois).** Grupo de $x^2 - 2$ sobre $\mathbb{Q}$.
- Raíces $\pm\sqrt{2}$; automorfismo que las intercambia.
- $\text{Gal} \cong \mathbb{Z}_2$.

**Ejemplo 4 (aplicación, correspondencia).** Para $\mathbb{Q}(\sqrt{2}, \sqrt{3})/\mathbb{Q}$ con grupo $\mathbb{Z}_2 \times \mathbb{Z}_2$, lista los subcuerpos.
- Subgrupos de orden 2: tres; subcuerpos cuadráticos: $\mathbb{Q}(\sqrt{2})$, $\mathbb{Q}(\sqrt{3})$, $\mathbb{Q}(\sqrt{6})$.
- Correspondencia perfecta.

**Ejemplo 5 (aplicación, insolubilidad).** El polinomio $x^5 - 6x + 3$ tiene grupo $S_5$.
- $S_5$ no es soluble.
- No existe fórmula por radicales para sus raíces.

**Ejemplo 6 (práctica, construibilidad).** ¿Es construible el heptágono regular?
- Requiere raíces de $x^7 - 1$; el grupo de Galois es cíclico de orden 6, no potencia de 2.
- No es construible con regla y compás; el pentágono (grado 4) sí.

## Contextos donde se aplica
- **Teoría de números:** solubilidad de ecuaciones, cuerpos de clases.
- **Criptografía:** teoría de Galois en curvas elípticas y códigos.
- **Geometría:** construcciones con regla y compás, polígonos regulares.
- **Computación algebraica:** factorización de polinomios y simplificación simbólica.
- **Matemática:** fundamento de la teoría de cuerpos y la geometría algebraica.

## Errores comunes y cómo evitarlos
- **Confundir extensión normal con separable.** Galois requiere ambas (automática en característica 0).
- **Suponer que el grupo de Galois siempre tiene orden $[K:F]$.** Solo en extensiones de Galois.
- **Olvidar la torre de grados.** Multiplica los grados en extensiones sucesivas.
- **Creer que toda quíntica es insoluble.** Solo la general; algunas sí se resuelven por radicales.
- **Confundir $S_n$ con $A_n$.** El grupo alternante aparece en polinomios con discriminante cuadrado.

## Ejercicios propuestos
1. ¿Cuál es $[\mathbb{Q}(\sqrt{5}) : \mathbb{Q}]$?
2. Halla el polinomio mínimo de $i$ sobre $\mathbb{Q}$.
3. Grupo de Galois de $x^2 + 1$ sobre $\mathbb{R}$.
4. ¿Es soluble por radicales $x^4 - 2$? (grupo de Galois).
5. ¿Se puede construir un polígono regular de 9 lados con regla y compás?
6. Lista los subcuerpos de $\mathbb{Q}(\sqrt{2})$.
7. Demuestra que $\sqrt{2} + \sqrt{3}$ tiene grado 4.
8. ¿Por qué no se puede trisecar un ángulo de $60°$?

**Respuestas:** 1) 2. 2) $x^2 + 1$. 3) Trivial (no hay raíces en $\mathbb{R}$). 4) Grupo $D_4$ (orden 8), soluble: sí. 5) No (grado 6 no potencia de 2). 6) $\mathbb{Q}$ y $\mathbb{Q}(\sqrt{2})$. 7) Ya calculado: mínimo de grado 4. 8) Equivale a raíz cúbica no construible.

## Resumen
- Las extensiones de cuerpos se miden por su grado; el polinomio mínimo determina la extensión simple.
- El grupo de Galois permuta las raíces y la correspondencia lo conecta con subcuerpos.
- Soluble por radicales equivale a grupo de Galois soluble.
- Las imposibilidades clásicas (cubo, ángulo, círculo) se demuestran con esta teoría.
- Galois convierte álgebra de cuerpos en teoría de grupos.
`,

  "algebra-conmutativa": String.raw`
## Anillos conmutativos y espectro
El álgebra conmutativa estudia anillos conmutativos unitarios y sus ideales, con la mirada puesta en la **geometría algebraica**: los ideales corresponden a conjuntos geométricos.

El **espectro** de un anillo $R$ es el conjunto de sus ideales primos:
$$\text{Spec}(R) = \{\mathfrak{p} \subseteq R : \mathfrak{p} \text{ primo}\}$$
Con la topología de Zariski, $\text{Spec}(R)$ es un espacio topológico cuyos puntos son "lugares" del anillo. Los ideales maximales corresponden a puntos cerrados; los primos no maximales, a puntos genéricos.

**Ejemplo.** $\text{Spec}(\mathbb{Z}) = \{(0)\} \cup \{(p) : p \text{ primo}\}$. El punto genérico $(0)$ está "denso" en el espectro.

## Localización
**Localizar** un anillo significa invertir un conjunto multiplicativo $S$: se crean fracciones $r/s$ con $s \in S$. Se denota $S^{-1}R$.

- **Localización en un primo** $\mathfrak{p}$: $R_\mathfrak{p}$ es un anillo **local** (un único maximal), que captura el comportamiento "cerca" del punto $\mathfrak{p}$.
- **Cuerpo de fracciones:** localizar en todos los elementos no nulos de un dominio.
- **Localización en $f$:** $R_f$ permite estudiar donde $f \neq 0$.

**Ejemplo.** $\mathbb{Z}_{(p)}$ (denominadores no divisibles por $p$) es local con maximal $(p)$: contiene la información $p$-ádica de $\mathbb{Z}$.

## Anillos noetherianos
$R$ es **noetheriano** si toda cadena ascendente de ideales se estabiliza:
$$I_1 \subseteq I_2 \subseteq I_3 \subseteq \cdots \Rightarrow I_n = I_{n+1} = \cdots$$

Equivalencias: todo ideal es finitamente generado; todo conjunto de ideales tiene maximal.

**Teorema de la base de Hilbert:** si $R$ es noetheriano, $R[x]$ también lo es. Por inducción, $\mathbb{K}[x_1, \ldots, x_n]$ es noetheriano.

La noetherianidad es la finitud que hace tratable la geometría algebraica: las variedades se definen con finitas ecuaciones.

## Descomposición primaria
Generaliza la factorización en primos a ideales: todo ideal noetheriano se descompone como intersección de ideales **primarios**:
$$I = Q_1 \cap Q_2 \cap \cdots \cap Q_n$$

Un ideal primario tiene radical primo; los primos asociados son los "factores". En $\mathbb{Z}$, la descomposición primaria de $(n)$ son las potencias de primos de su factorización.

**Ejemplo.** $(12) = (4) \cap (3)$ en $\mathbb{Z}$: primario con radicales $(2)$ y $(3)$.

## Dimensión de Krull
La **dimensión** de $R$ es la longitud máxima de cadenas de ideales primos:
$$\mathfrak{p}_0 \subsetneq \mathfrak{p}_1 \subsetneq \cdots \subsetneq \mathfrak{p}_n$$

Geométricamente, es la dimensión de la variedad correspondiente. El teorema de Krull (altura) y el teorema de los ideales principales (Krull) acotan la dimensión.

**Ejemplo.** $\dim \mathbb{K}[x_1, \ldots, x_n] = n$; $\dim \mathbb{Z} = 1$ (los primos son puntos, $(0)$ el punto genérico).

## Nullstellensatz de Hilbert
El diccionario entre geometría y álgebra:

- **Versión débil:** si $\mathbb{K}$ es algebraicamente cerrado, los ideales maximales de $\mathbb{K}[x_1,\ldots,x_n]$ corresponden a puntos de $\mathbb{K}^n$.
- **Versión fuerte:** para un ideal $I$, los polinomios que se anulan en la variedad $V(I)$ son exactamente los del radical $\sqrt{I}$:
$$I(V(I)) = \sqrt{I}$$

**Consecuencia:** los objetos geométricos (variedades) y los algebraicos (ideales radicales) son equivalentes. Es la fundación de la geometría algebraica clásica.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, espectro).** Describe $\text{Spec}(\mathbb{Z}_6)$.
- $\mathbb{Z}_6 \cong \mathbb{Z}_2 \times \mathbb{Z}_3$ (chino del resto).
- Primos: $(2)$ y $(3)$; ambos maximales. Dos puntos.

**Ejemplo 2 (práctica, localización).** Calcula $\mathbb{Z}_{(2)}$ y su maximal.
- Fracciones $a/b$ con $b$ impar.
- Único maximal: $2\mathbb{Z}_{(2)}$ (elementos con numerador par no invertibles).

**Ejemplo 3 (práctica, primario).** Descompón $(18)$ en $\mathbb{Z}$.
- $18 = 2 \cdot 3^2$.
- $(18) = (2) \cap (9)$: primarios con radicales $(2)$ y $(3)$.

**Ejemplo 4 (aplicación, Nullstellensatz).** Describe $V(x^2 + y^2 - 1)$ en $\mathbb{R}^2$ y su ideal.
- Es la circunferencia unitaria.
- Sobre $\mathbb{R}$, $I(V)$ es el radical de $(x^2 + y^2 - 1)$, que ya es radical.

**Ejemplo 5 (aplicación, dimensión).** ¿Cuál es la dimensión de $\mathbb{C}[x,y]/(y - x^2)$?
- El cociente es $\mathbb{C}[x]$ (sustituye $y = x^2$).
- Dimensión 1: es la parábola.

**Ejemplo 6 (práctica, Noether).** ¿Es noetheriano $\mathbb{K}[x, y, z]$?
- Por el teorema de la base de Hilbert, sí.
- Todo ideal es finitamente generado.

## Contextos donde se aplica
- **Geometría algebraica:** variedades, esquemas, haces.
- **Teoría de números:** anillos de enteros, cuerpos locales, aritmética.
- **Criptografía:** curvas elípticas, emparejamientos.
- **Robótica y visión:** geometría algebraica en cinemática y reconstrucción.
- **Computación simbólica:** bases de Gröbner y resolución de sistemas polinomiales.

## Errores comunes y cómo evitarlos
- **Confundir primo con maximal.** Todo maximal es primo; el recíproco no vale fuera de DIP.
- **Olvidar que localizar pierde información global.** El anillo local solo ve lo cercano.
- **Suponer noetheriano sin verificar.** Anillos de polinomios infinitos pueden no serlo.
- **Aplicar Nullstellensatz sobre cuerpos no cerrados.** $\mathbb{R}$ exige cuidado.
- **Confundir el radical con el ideal.** En general $I \subseteq \sqrt{I}$.

## Ejercicios propuestos
1. Halla los ideales maximales de $\mathbb{C}[x]$.
2. Describe $\text{Spec}(\mathbb{Z}_{12})$.
3. Descompón primariamente $(20)$ en $\mathbb{Z}$.
4. ¿Cuál es la dimensión de $\mathbb{Z}_6$?
5. Localiza $\mathbb{Z}$ en $(5)$: describe el anillo.
6. ¿Qué variedad define $(x^2 - y)$ en $\mathbb{C}^2$?
7. Demuestra que $(x^2 + 1)$ es maximal en $\mathbb{R}[x]$.
8. ¿Por qué $\mathbb{Z}$ es noetheriano?

**Respuestas:** 1) $(x - a)$ para cada $a \in \mathbb{C}$. 2) Primos $(2)$ y $(3)$. 3) $(4) \cap (5) = $ potencias de 2 y 5. 4) Dimensión 0 (artiniano). 5) Fracciones con denominador no múltiplo de 5; local. 6) La parábola $y = x^2$. 7) El cociente es $\mathbb{C}$. 8) Todo ideal es principal, generado por el mcd.

## Resumen
- El espectro de un anillo convierte álgebra en geometría; localizar estudia vecindades.
- Noetheriano significa finitud; Hilbert la preserva en polinomios.
- La descomposición primaria generaliza la factorización; la dimensión de Krull mide cadenas de primos.
- El Nullstellensatz identifica variedades e ideales radicales.
- Es la base del álgebra conmutativa moderna y de la geometría algebraica.
`,

  "representaciones": String.raw`
## ¿Qué es una representación?
Una **representación** de un grupo $G$ es un homomorfismo a las matrices invertibles de un espacio vectorial:
$$\rho: G \to GL(V)$$
Es decir: hacer que el grupo abstracto actúe como transformaciones lineales. Así los problemas de grupos se vuelven problemas de álgebra lineal.

**Ejemplos:**
- La representación trivial $\rho(g) = 1$.
- La representación regular: $G$ actúa sobre el espacio de funciones de $G$.
- La representación de permutación: $S_n$ actúa sobre $\mathbb{C}^n$ permutando coordenadas.
- Las rotaciones de $S^1$ como matrices $2 \times 2$.

El teorema de Cayley es la primera representación: todo grupo es subgrupo de permutaciones.

## Subrepresentaciones e irreducibles
Un **subespacio invariante** $W \subseteq V$ cumple $\rho(g)W \subseteq W$ para todo $g$; da una **subrepresentación**. Una representación es **irreducible** si no tiene subrepresentaciones propias no triviales.

**Ejemplo.** La representación de $S_3$ sobre $\mathbb{C}^3$ (permutación de coordenadas) se descompone en:
- El subespacio de vectores con coordenadas iguales (trivial).
- El plano de suma cero (irreducible de dimensión 2).

**Indescomponible** es distinto de irreducible: puede descomponerse como suma directa, pero no en suma de irreducibles (raro en grupos finitos).

## Lema de Schur
**Lema de Schur:** si $V$ y $W$ son irreducibles y $T: V \to W$ es un morfismo de representaciones ($T\rho_V = \rho_W T$), entonces:
- $T = 0$ o $T$ es isomorfismo.
- Si $V = W$ sobre $\mathbb{C}$, $T = \lambda I$ (escalar).

**Consecuencias:**
- Las representaciones irreducibles son los "átomos" de la teoría.
- Los escalares que conmutan con toda la representación forman un álgebra de división.
- En grupos abelianos, toda irreducible sobre $\mathbb{C}$ es de dimensión 1.

## Caracteres
El **carácter** de una representación es la función $\chi(g) = \text{tr}(\rho(g))$. Es una función de clases: constante en cada clase de conjugación.

**Propiedades:**
- $\chi(e) = \dim V$ (la dimensión de la representación).
- $\chi(g^{-1}) = \overline{\chi(g)}$.
- **Ortogonalidad:** $\langle \chi_i, \chi_j\rangle = \dfrac{1}{|G|}\sum_g \chi_i(g)\overline{\chi_j(g)} = \delta_{ij}$ para irreducibles.
- Dos representaciones son isomorfas si y solo si tienen el mismo carácter.

**Fórmula de descomposición:** la multiplicidad de la irreducible $i$ en $V$:
$$m_i = \langle \chi_V, \chi_i \rangle$$

Los caracteres reducen el álgebra lineal a tablas numéricas.

## Teorema de Maschke y descomposición
**Maschke:** si $G$ es finito y $\mathbb{K}$ tienen característica 0 (o coprima con $|G|$), toda representación se descompone en suma directa de irreducibles:
$$V \cong V_1^{\oplus m_1} \oplus \cdots \oplus V_k^{\oplus m_k}$$

**Consecuencias:**
- Las representaciones quedan clasificadas por sus caracteres.
- El número de irreducibles es el número de clases de conjugación.
- Se cumple $\sum_i (\dim V_i)^2 = |G|$.

**Ejemplo.** $S_3$ tiene 3 clases de conjugación: 3 irreducibles, de dimensiones $1, 1, 2$; $1 + 1 + 4 = 6 = |S_3|$.

## Tablas de caracteres
La **tabla de caracteres** lista los caracteres de las irreducibles en cada clase de conjugación. Se construye con ortogonalidad y propiedades algebraicas.

**Ejemplo ($S_3$):** clases $\{e\}$, transposiciones (3), ciclos de 3 (2):

| Clase | $e$ | $(1\,2)$ | $(1\,2\,3)$ |
|---|---|---|---|
| Trivial | 1 | 1 | 1 |
| Signo | 1 | $-1$ | 1 |
| Estándar | 2 | 0 | $-1$ |

La tabla permite descomponer cualquier representación calculando productos internos.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, dimensión).** Verifica $\sum (\dim V_i)^2 = |G|$ para $\mathbb{Z}_4$.
- Abelianas: 4 irreducibles de dimensión 1.
- $1 + 1 + 1 + 1 = 4$. Correcto.

**Ejemplo 2 (práctica, carácter).** Carácter de la representación de permutación de $S_3$ sobre $\mathbb{C}^3$.
- $\chi(e) = 3$; una transposición fija 1 elemento: $\chi = 1$; un 3-ciclo fija 0: $\chi = 0$.
- Descompone como trivial + estándar ($3 = 1 + 2$).

**Ejemplo 3 (aplicación, descomposición).** Descompón $\chi = (3, 1, 0)$ en $S_3$.
- $\langle\chi, \text{trivial}\rangle = \frac{1}{6}(3 + 3\cdot1 + 2\cdot0) = 1$.
- $\langle\chi, \text{signo}\rangle = \frac{1}{6}(3 - 3 + 0) = 0$.
- $\langle\chi, \text{estándar}\rangle = 1$: $\chi = $ trivial $+$ estándar.

**Ejemplo 4 (aplicación, física).** Las rotaciones de $SO(3)$ actúan en la mecánica cuántica: los irreducibles corresponden al momento angular $l$.
- Las dimensiones son $2l + 1$.
- Las reglas de selección surgen de la descomposición de productos tensoriales.

**Ejemplo 5 (práctica, Schur).** ¿Por qué las irreducibles de grupos abelianos son de dimensión 1?
- Todos los $\rho(g)$ conmutan; por Schur son escalares.
- Todo subespacio es invariante: irreducible de dimensión 1.

**Ejemplo 6 (práctica, regular).** Dimensión del espacio de la representación regular de $G$ y su descomposición.
- Dimensión $|G|$.
- Contiene cada irreducible con multiplicidad igual a su dimensión.

## Contextos donde se aplica
- **Física de partículas:** clasificación de partículas por representaciones del grupo de Poincaré.
- **Química:** espectros vibracionales y reglas de selección.
- **Cristalografía:** representaciones de grupos espaciales.
- **Matemática:** teoría de números (formas automorfas), geometría.
- **Computación cuántica:** puertas y simetrías.

## Errores comunes y cómo evitarlos
- **Confundir irreducible con indescomponible.** Coinciden bajo Maschke; en general no.
- **Olvidar que los caracteres son de clase.** No dependen del representante.
- **Usar Maschke en característica que divide a $|G|$.** Falla.
- **Confundir dimensión de la representación con $|G|$.** Es la dimensión del espacio.
- **Sumar caracteres sin multiplicidades.** Usa el producto interno.

## Ejercicios propuestos
1. ¿Cuántas irreducibles tiene $\mathbb{Z}_6$?
2. Verifica $\sum (\dim V_i)^2 = |G|$ para $S_3$.
3. Carácter de la representación trivial de $S_4$.
4. Descompón la representación de permutación de $S_4$ sobre $\mathbb{C}^4$.
5. ¿Por qué todo carácter toma el valor de la dimensión en $e$?
6. Halla el producto interno de la trivial consigo misma.
7. ¿Cuál es la dimensión de la representación regular de $D_4$?
8. ¿Cómo se relaciona el número de irreducibles con las clases de conjugación?

**Respuestas:** 1) 6. 2) $1+1+4=6$. 3) Constante 1. 4) Trivial + estándar de dimensión 3. 5) $\rho(e) = I$. 6) 1. 7) 8. 8) Son iguales.

## Resumen
- Representar un grupo es hacerlo actuar por matrices; las irreducibles son sus átomos.
- Schur restringe los morfismos; los caracteres codifican la representación en números.
- Maschke garantiza descomposición en irreducibles para grupos finitos.
- Las tablas de caracteres clasifican y permiten descomponer.
- Es el puente entre álgebra abstracta, álgebra lineal y física.
`,

  "homologica": String.raw`
## Sucesiones exactas
Una **sucesión exacta** es una cadena de módulos y homomorfismos donde la imagen de cada uno es exactamente el núcleo del siguiente:
$$\cdots \to A \xrightarrow{f} B \xrightarrow{g} C \to \cdots, \qquad \text{Im}\,f = \ker g$$

**Casos clave:**
- $0 \to A \xrightarrow{f} B$ exacta $\iff$ $f$ inyectiva.
- $B \xrightarrow{g} C \to 0$ exacta $\iff$ $g$ sobreyectiva.
- $0 \to A \to B \to C \to 0$ (sucesión corta): $C \cong B/A$.

La exactitud mide "cuánto falla" la igualdad imagen-núcleo, y ese fallo es precisamente lo que mide la homología.

## Complejos y grupos de homología
Un **complejo de cadenas** es una sucesión donde $g \circ f = 0$ (imagen contenida en el núcleo, no necesariamente igual):
$$\cdots \to C_{n+1} \xrightarrow{\partial_{n+1}} C_n \xrightarrow{\partial_n} C_{n-1} \to \cdots$$

Los **grupos de homología** miden el fallo de exactitud:
$$H_n = \frac{\ker \partial_n}{\text{Im}\,\partial_{n+1}}$$

- Homología cero: la sucesión era exacta en ese punto.
- Homología no cero: hay "agujeros" algebraicos.

**Ejemplo.** En topología, la homología de un espacio cuenta sus agujeros: $H_0$ componentes conexas, $H_1$ túneles, $H_2$ cavidades.

## Resoluciones
Una **resolución proyectiva** de un módulo $M$ es una sucesión exacta con proyectivos $P_i$:
$$\cdots \to P_2 \to P_1 \to P_0 \to M \to 0$$

Sirve para "reemplazar" $M$ por objetos mejores (proyectivos) y definir funtores derivados. Las **resoluciones inyectivas** son el dual.

**Ejemplo.** Para $\mathbb{Z}/2$ sobre $\mathbb{Z}$: $\cdots \to \mathbb{Z} \xrightarrow{2} \mathbb{Z} \xrightarrow{2} \mathbb{Z} \to \mathbb{Z}/2 \to 0$.

## Funtores derivados: Tor y Ext
Un funtor que no es exacto se convierte en una **familia de funtores derivados**:

- **Tor:** $\text{Tor}_n(-, B)$ mide el fallo de $\otimes$ en preservar inyectividad.
- **Ext:** $\text{Ext}^n(-, B)$ mide el fallo de $\text{Hom}$ en preservar sobreyectividad.

**Propiedades:** $\text{Tor}_0 = \otimes$ y $\text{Ext}^0 = \text{Hom}$; los superiores capturan la torsión y las extensiones.

**Ejemplo.** $\text{Tor}_1^{\mathbb{Z}}(\mathbb{Z}/2, \mathbb{Z}/2) = \mathbb{Z}/2$: detecta la torsión de los módulos.

**Extensiones:** $\text{Ext}^1(A, B)$ clasifica las sucesiones cortas $0 \to B \to E \to A \to 0$.

## Lema de la serpiente y diagramas
**Lema de la serpiente:** de un diagrama conmutativo con filas exactas se construye una sucesión exacta larga que conecta las homologías:
$$\ker f \to \ker g \to \ker h \xrightarrow{\delta} \text{coker}\,f \to \text{coker}\,g \to \text{coker}\,h$$

El morfismo de conexión $\delta$ es la "serpiente". Es la herramienta técnica que hace funcionar la homología.

**Lema de los cinco:** si cuatro de cinco morfismos de un diagrama son isomorfismos, el quinto también.

**Lema del zig-zag:** generalización que permite demostrar la exactitud de sucesiones largas.

## Cohomología
La **cohomología** es la versión dual: complejos con índices crecientes y diferenciales que suben:
$$H^n = \frac{\ker d^{n}}{\text{Im}\,d^{n-1}}$$

**Ejemplos de teorías cohomológicas:**
- Cohomología singular y de De Rham (topología y geometría diferencial).
- Cohomología de grupos: $H^n(G, M)$ clasifica extensiones y acciones.
- Cohomología de haces (geometría algebraica).
- Cohomología de Galois en teoría de números.

**De Rham:** las formas cerradas módulo exactas miden los agujeros de una variedad; teorema de De Rham: coincide con la cohomología singular.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, exactitud).** ¿Es exacta $0 \to \mathbb{Z} \xrightarrow{2} \mathbb{Z} \to \mathbb{Z}_2 \to 0$?
- $2\mathbb{Z}$ es el núcleo de la reducción módulo 2.
- Sí: inyectiva al inicio, exacta en el medio, sobreyectiva al final.

**Ejemplo 2 (práctica, homología).** Calcula $H_0$ del complejo $\mathbb{Z} \xrightarrow{0} \mathbb{Z} \xrightarrow{0} 0$.
- $\ker \partial_0 = \mathbb{Z}$; imagen del anterior es 0.
- $H_0 = \mathbb{Z}$.

**Ejemplo 3 (práctica, Tor).** Calcula $\text{Tor}_1(\mathbb{Z}/3, \mathbb{Z}/3)$.
- Resolución: $0 \to \mathbb{Z} \xrightarrow{3} \mathbb{Z} \to \mathbb{Z}/3 \to 0$.
- Tensando con $\mathbb{Z}/3$: el núcleo de multiplicar por 3 es $\mathbb{Z}/3$; Tor$_1 = \mathbb{Z}/3$.

**Ejemplo 4 (aplicación, topología).** La homología del toro $T^2$.
- $H_0 = \mathbb{Z}$ (conexo), $H_1 = \mathbb{Z}^2$ (dos túneles), $H_2 = \mathbb{Z}$ (cavidad).
- La característica de Euler: $\chi = 1 - 2 + 1 = 0$.

**Ejemplo 5 (aplicación, extensión de grupos).** $\text{Ext}^1(\mathbb{Z}/2, \mathbb{Z}/2) = \mathbb{Z}/2$.
- Hay dos extensiones: la trivial y la no escindida (el grupo cíclico de orden 4).
- Ext clasifica cómo pegar módulos.

**Ejemplo 6 (práctica, serpiente).** Define el morfismo de conexión en la sucesión del lema.
- Se construye "persiguiendo el diagrama": sube por inyectividad y baja por sobreyectividad.
- Aunque no se vea explícito, la construcción es natural (independiente de elecciones).

## Contextos donde se aplica
- **Topología algebraica:** homología y cohomología de espacios; invariantes.
- **Geometría algebraica:** haces, cohomología, teoremas de dualidad.
- **Teoría de números:** cohomología de Galois, clase de cuerpos.
- **Física teórica:** cohomología en teorías de gauge y anomalías.
- **Computación:** homología persistente en topología de datos.

## Errores comunes y cómo evitarlos
- **Confundir exacta con complejo.** En el complejo solo $g \circ f = 0$; en la exacta, la igualdad.
- **Olvidar que Tor y Ext dependen de la resolución.** El resultado es independiente, pero hay que elegir una.
- **Perderse en los índices.** Dibuja el diagrama y sigue flechas.
- **Suponer que $\text{Hom}$ es exacto.** Solo es exacto por la izquierda; de ahí Ext.
- **Confundir homología con cohomología.** Una baja índices, la otra sube.

## Ejercicios propuestos
1. ¿Es exacta $0 \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{Q}/\mathbb{Z} \to 0$?
2. Calcula $H_0$ y $H_1$ del complejo $0 \to \mathbb{Z} \xrightarrow{2} \mathbb{Z} \to 0$.
3. Halla $\text{Ext}^1(\mathbb{Z}, \mathbb{Z})$.
4. ¿Qué mide $\text{Tor}_1(A, B)$ si $A$ es libre?
5. Homología de la esfera $S^2$.
6. Enuncia el lema de los cinco.
7. ¿Por qué $\otimes$ no es exacto por la izquierda?
8. Relaciona la característica de Euler con los números de Betti.

**Respuestas:** 1) Sí. 2) $H_0 = \mathbb{Z}$, $H_1 = \mathbb{Z}/2$. 3) $0$ ($\mathbb{Z}$ es proyectivo). 4) $0$ (libre implica plano). 5) $H_0 = \mathbb{Z}$, $H_1 = 0$, $H_2 = \mathbb{Z}$. 6) Si cuatro son iso, el quinto también. 7) $\mathbb{Z} \xrightarrow{2} \mathbb{Z}$ pierde la inyectividad al tensar con $\mathbb{Z}/2$. 8) $\chi = \sum (-1)^i b_i$.

## Resumen
- Las sucesiones exactas relacionan núcleos e imágenes; la homología mide el fallo de exactitud.
- Las resoluciones reemplazan módulos por proyectivos; Tor y Ext derivan los funtores no exactos.
- El lema de la serpiente produce sucesiones exactas largas.
- La cohomología dualiza la construcción y aparece en topología, geometría y aritmética.
- Es el lenguaje que unifica grandes áreas de la matemática moderna.
`,

  "categorias": String.raw`
## ¿Qué es una categoría?
Una **categoría** $\mathcal{C}$ consta de:
1. Una colección de **objetos**.
2. **Morfismos** entre objetos: $\text{Hom}(A, B)$.
3. **Composición** asociativa: $g \circ f$.
4. **Identidades** $1_A$ para cada objeto.

**Ejemplos:** **Set** (conjuntos y funciones), **Grp** (grupos y homomorfismos), **Vect** (espacios y transformaciones lineales), **Top** (espacios y continuas), **R-Mod** (módulos), **Pos** (conjuntos ordenados).

La idea central: las matemáticas se organizan por **relaciones** (morfismos) más que por objetos. Muchos teoremas son "la misma historia" en categorías distintas.

## Funtores
Un **funtor** $F: \mathcal{C} \to \mathcal{D}$ asigna objetos a objetos y morfismos a morfismos, preservando composición e identidades:
$$F(g \circ f) = F(g) \circ F(f), \qquad F(1_A) = 1_{F(A)}$$

- **Covariante:** preserva la dirección de los morfismos.
- **Contravariante:** invierte la dirección; $F(g \circ f) = F(f) \circ F(g)$.

**Ejemplos:** el funtor de olvido $Grp \to Set$ (olvida la operación); el dual $V \mapsto V^*$ (contravariante); $\pi_1: Top \to Grp$ (grupo fundamental); el funtor libre $Set \to Grp$.

Los funtores "traducen" una categoría en otra y revelan analogías profundas.

## Transformaciones naturales
Una **transformación natural** $\eta: F \Rightarrow G$ entre funtores asigna a cada objeto $A$ un morfismo $\eta_A: F(A) \to G(A)$ que conmuta con todos los morfismos:
$$G(f) \circ \eta_A = \eta_B \circ F(f)$$

Es la noción correcta de "morfismo entre funtores". Ejemplo: el determinante es una transformación natural de $GL_n$ al funtor de unidades; la doble dualidad $V \to V^{**}$ es natural (a diferencia de $V \to V^*$).

Eilenberg y Mac Lane introdujeron las categorías precisamente para formalizar la naturalidad.

## Equivalencia de categorías
Una **equivalencia** entre categorías captura la idea de que dos teorías son "esencialmente la misma": funtores $F: C \to D$, $G: D \to C$ con isomorfismos naturales $G \circ F \cong 1_C$ y $F \circ G \cong 1_D$.

**Ejemplo.** La categoría de espacios vectoriales de dimensión finita es equivalente a su dual; los grupos finitos abelianos son equivalentes a módulos sobre $\mathbb{Z}$ de torsión.

## Límites y colímites
Los **límites** generalizan construcciones universales:
- **Producto:** límite del diagrama de dos objetos; en **Set**, el producto cartesiano.
- **Pullback:** límite de un cospan $A \to C \leftarrow B$.
- **Ecualizador:** límite de dos flechas paralelas.

Los **colímites** son duales:
- **Coproducto:** unión disjunta; en **Ab**, la suma directa.
- **Pushout:** pegado de espacios; en **Top**, unión identificando.
- **Cociente:** colímite de una relación.

**Propiedad universal:** el objeto límite se define por su relación con todos los demás: para cada objeto compatible existe un único morfismo. Es la forma moderna de definir "el mejor objeto que encaja".

## Adjunciones
Una **adjunción** $F \dashv G$ entre funtores $F: C \to D$ y $G: D \to C$ da una biyección natural:
$$\text{Hom}_D(F(A), B) \cong \text{Hom}_C(A, G(B))$$

**Ejemplos:**
- Libre $\dashv$ olvido: construir el grupo libre sobre un conjunto.
- Producto $\dashv$ exponencial (curryficación en programación funcional).
- Tensor $\dashv$ Hom (la adjunción que origina Tor y Ext).

Las adjunciones son omnipresentes: "construcción libre" a la izquierda, "olvido" a la derecha. Capturan la esencia de muchas dualidades.

## Lema de Yoneda
**Yoneda:** un objeto queda determinado por los morfismos que recibe (o emite). Formalmente:
$$\text{Nat}(\text{Hom}(A, -), F) \cong F(A)$$

**Interpretación:** para entender un objeto, mira cómo se relaciona con todos los demás. Es la versión categórica de "dime con quién andas".

**Consecuencias:** las construcciones universales son únicas salvo isomorfismo único; las pruebas por propiedades universales son más limpias que las construcciones explícitas.

## Mónadas
Una **mónada** es un endofuntor $T$ con transformaciones naturales $\eta: 1 \to T$ y $\mu: T^2 \to T$ que cumplen leyes de coherencia. Modelan efectos y estructuras computacionales.

**En programación funcional:** mónadas para manejar estado, errores (Maybe), listas, IO, promesas. Haskell popularizó su uso.

**Origen matemático:** álgebras sobre mónadas, teoría de cómputo (Eugenio Moggi), y la construcción de categorías de álgebras.

## Ejemplos resueltos: seis casos explicados
**Ejemplo 1 (práctica, categoría).** Verifica que **Set** es una categoría.
- Objetos: conjuntos; morfismos: funciones.
- Composición de funciones es asociativa; identidad es la función identidad. $\blacksquare$

**Ejemplo 2 (práctica, funtor).** El funtor de olvido $U: Grp \to Set$.
- A cada grupo le asocia su conjunto subyacente.
- A cada homomorfismo, la misma función; preserva composición.

**Ejemplo 3 (aplicación, producto).** El producto cartesiano es el límite en **Set**.
- Con proyecciones $\pi_1, \pi_2$.
- Para cualquier par de funciones al producto, existe una única que las factoriza.

**Ejemplo 4 (aplicación, adjunción).** La construcción del grupo libre sobre un conjunto.
- $\text{Hom}_{Grp}(F(S), G) \cong \text{Hom}_{Set}(S, U(G))$.
- Los generadores no tienen relaciones: es el grupo más general posible.

**Ejemplo 5 (aplicación, Yoneda).** Demuestra que la representación de un objeto es única.
- Si dos objetos representan el mismo funtor, son isomorfos por Yoneda.
- No hace falta construir el isomorfismo: Yoneda lo da.

**Ejemplo 6 (aplicación, mónada).** La mónada Maybe en programación.
- $T(X) = X \cup \{\text{fallo}\}$; $\eta$ mete el valor; $\mu$ aplana.
- Modela cálculos que pueden fallar sin excepciones.

## Contextos donde se aplica
- **Matemática:** unifica álgebra, topología y geometría; fundamentos con teoría de haces y esquemas.
- **Programación funcional:** funtores, mónadas y tipado (Haskell, Scala, Rust).
- **Física:** teorías de campos topológicas, categorías tensoriales.
- **Lógica:** semántica categórica, teoría de tipos.
- **Inteligencia artificial:** composición de modelos y sistemas de tipos.

## Errores comunes y cómo evitarlos
- **Confundir categoría con conjunto.** Los morfismos no siempre son funciones.
- **Suponer que todo funtor es fiel o pleno.** La mayoría no lo es.
- **Confundir naturalidad con igualdad.** Es isomorfismo natural, no literal.
- **Ignorar las leyes de coherencia.** Composición e identidad deben cumplirse.
- **Abusar de la abstracción.** La teoría de categorías organiza, no sustituye el cálculo.

## Ejercicios propuestos
1. Define la categoría **Vect** y su composición.
2. ¿Es contravariante el funtor $V \mapsto V^*$?
3. Demuestra que el producto en **Set** es único salvo isomorfismo.
4. ¿Qué es el coproducto en **Set**?
5. Da un ejemplo de transformación natural.
6. Explica la adjunción libre-olvido para espacios vectoriales.
7. ¿Qué dice Yoneda sobre un objeto y sus morfismos?
8. ¿Qué mónada modela las listas?

**Respuestas:** 1) Objetos: espacios; morfismos: lineales; composición usual. 2) Sí. 3) Propiedad universal + unicidad. 4) Unión disjunta. 5) Determinante: $GL_n \to (\cdot)^*$. 6) Base libre es el espacio más general que mapea a cualquier espacio. 7) Queda determinado por sus morfismos. 8) La mónada de listas (concatenación como multiplicación).

## Resumen
- Las categorías organizan objetos y morfismos; los funtores traducen entre categorías.
- Las transformaciones naturales formalizan la naturalidad; Yoneda caracteriza objetos por sus relaciones.
- Límites y colímites unifican productos, cocientes y pegados.
- Las adjunciones capturan dualidades y construcciones libres.
- Las mónadas modelan efectos en matemática y programación.
`
};
