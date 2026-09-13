# Geometría diferencial de curvas y superficies

Área: **Geometría y topología** · Nivel: **Univ 3–4** · Curvatura, torsión y superficies.

## Curvas parametrizadas y longitud de arco

Una **curva** es una aplicación diferenciable $\alpha: I \subseteq \mathbb{R} \to \mathbb{R}^n$,
$$\alpha(t) = (x(t), y(t), z(t))$$
El vector **velocidad** es $\alpha'(t)$ y la **rapidez** es $\lvert\alpha'(t)\rvert$. La curva es **regular** si $\alpha'(t) \neq 0$ en todo punto; solo entonces se define bien la recta tangente.

**Reparametrizar** es cambiar el parámetro sin cambiar la traza geométrica. La **longitud de arco** es la parametrización natural:
$$s(t) = \int_a^t \lvert\alpha'(\tau)\rvert\, d\tau$$
Cuando $\lvert\alpha'(t)\rvert = 1$ para todo $t$, se dice que la curva está **parametrizada por longitud de arco**.

**Mini-ejemplo.** La hélice $\alpha(t) = (\cos t, \sin t, t)$ tiene $\lvert\alpha'(t)\rvert = \sqrt{\sin^2 t + \cos^2 t + 1} = \sqrt{2}$; su longitud en $[0, 2\pi]$ es $2\pi\sqrt{2}$.

## Triedro de Frenet-Serret

Parametrizando por longitud de arco se define un triedro ortonormal que acompaña a la curva:
1. **Tangente:** $T(s) = \alpha'(s)$ (unitario).
2. **Normal:** $N(s) = \dfrac{T'(s)}{\lvert T'(s)\rvert}$.
3. **Binormal:** $B = T \times N$.

Las **ecuaciones de Frenet-Serret** describen cómo giran estos vectores:
$$T' = \kappa N, \qquad N' = -\kappa T + \tau B, \qquad B' = -\tau N$$
donde $\kappa$ es la curvatura y $\tau$ la torsión. Lo notable es que $\kappa$ y $\tau$ **determinan la curva salvo un movimiento rígido** (teorema fundamental de las curvas). Por eso son la "tarjeta de identidad" de una curva en el espacio.

**Mini-ejemplo.** Para la hélice $(\cos t, \sin t, t)$: $T = \dfrac{1}{\sqrt{2}}(-\sin t, \cos t, 1)$ y $N = (-\cos t, -\sin t, 0)$.

## Curvatura y torsión

La **curvatura** mide cuánto se dobla la curva:
$$\kappa = \lvert T'(s)\rvert = \frac{\lvert\alpha' \times \alpha''\rvert}{\lvert\alpha'\rvert^{3}}$$
La **torsión** mide cuánto se sale del plano osculador:
$$\tau = -\frac{(T \times T') \cdot T''}{\lvert T'\rvert^{2}} = \frac{(\alpha', \alpha'', \alpha''')}{\lvert\alpha' \times \alpha''\rvert^{2}}$$
Propiedades clave:
1. Una recta tiene $\kappa = 0$.
2. Una circunferencia de radio $R$ tiene $\kappa = 1/R$ y $\tau = 0$.
3. Una curva plana tiene $\tau = 0$; el recíproco solo falla si $\kappa = 0$ en algún tramo.
4. La hélice $(a\cos t, a\sin t, bt)$ tiene $\kappa = \dfrac{a}{a^2+b^2}$ y $\tau = \dfrac{b}{a^2+b^2}$.

**Mini-ejemplo.** Para $\alpha(t) = (t, t^2)$: $\kappa = \dfrac{2}{(1+4t^2)^{3/2}}$ y $\tau = 0$ (es plana).

## Primera forma fundamental

Una **superficie parametrizada** es $X(u, v): U \subseteq \mathbb{R}^2 \to \mathbb{R}^3$. Sus derivadas $X_u, X_v$ generan el **plano tangente** y la **normal** es
$$n = \frac{X_u \times X_v}{\lvert X_u \times X_v\rvert}$$
La **primera forma fundamental** es la métrica inducida:
$$I = E\, du^2 + 2F\, du\, dv + G\, dv^2, \qquad E = X_u \cdot X_u, \quad F = X_u \cdot X_v, \quad G = X_v \cdot X_v$$
Con ella se miden **longitudes, ángulos y áreas** sin salir de la superficie:
$$L = \int_a^b \sqrt{E\dot u^2 + 2F\dot u\dot v + G\dot v^2}\, dt, \qquad dA = \sqrt{EG - F^2}\, du\, dv$$
Esta es la **geometría intrínseca**: no depende de cómo la superficie vive en el espacio.

**Mini-ejemplo.** El plano en polares $X(r, \theta) = (r\cos\theta, r\sin\theta, 0)$ cumple $E = 1$, $F = 0$, $G = r^2$, luego $I = dr^2 + r^2\, d\theta^2$.

## Segunda forma fundamental y curvaturas

La **segunda forma fundamental** mide cómo se curva la superficie dentro del espacio:
$$II = L\, du^2 + 2M\, du\, dv + N\, dv^2, \qquad L = X_{uu}\cdot n, \quad M = X_{uv}\cdot n, \quad N = X_{vv}\cdot n$$
De las dos formas salen las curvaturas:
$$K = \frac{LN - M^2}{EG - F^2} \quad \text{(curvatura gaussiana)}, \qquad H = \frac{EN - 2FM + GL}{2(EG - F^2)} \quad \text{(curvatura media)}$$
Las **curvaturas principales** $\kappa_1, \kappa_2$ son los valores propios de la segunda forma respecto de la primera, y cumplen $K = \kappa_1\kappa_2$, $H = (\kappa_1+\kappa_2)/2$.

**Clasificación de puntos:**

| Signo de $K$ | Tipo de punto |
| $K > 0$ | elíptico (esfera) |
| $K < 0$ | hiperbólico (silla) |
| $K = 0$ | parabólico o plano |

**Mini-ejemplo.** La esfera de radio $R$ tiene $K = 1/R^2$ y curvaturas principales $\kappa_1 = \kappa_2 = \pm 1/R$.

## Geodésicas

Una **geodésica** es la curva de longitud mínima local entre dos puntos; equivalentemente, la curva cuya aceleración tangencial es nula. Es la generalización de la "recta" sobre una superficie.

Se obtiene de las **ecuaciones de Euler-Lagrange** de la longitud de arco o, en coordenadas, del sistema con los **símbolos de Christoffel**:
$$\ddot u^k + \sum_{i,j} \Gamma^k_{ij}\, \dot u^i \dot u^j = 0, \qquad \Gamma^k_{ij} = \frac{1}{2} g^{kl}\left(\partial_i g_{jl} + \partial_j g_{il} - \partial_l g_{ij}\right)$$
1. En el plano son las **rectas**.
2. En la esfera son los **círculos máximos**.
3. En el cilindro son las **hélices**, con generatrices y circunferencias como casos límite.

**Mini-ejemplo.** Desarrollando el cilindro en un plano, sus geodésicas se vuelven rectas; al enrollarlo de nuevo aparecen las hélices.

## Teorema egregio de Gauss

El **theorema egregium** ("teorema sobresaliente") afirma que la curvatura gaussiana $K$ se calcula **solo con la primera forma fundamental** $E, F, G$. Es decir, $K$ es una propiedad **intrínseca**: no depende de cómo la superficie se sumerge en $\mathbb{R}^3$.

**Consecuencias:**
1. La esfera tiene $K = 1/R^2 > 0$ y el plano $K = 0$; ninguna isometría puede igualarlos.
2. Por eso no existe un mapa plano de la Tierra que preserve todas las distancias (habría que deformar la métrica).
3. Cualquier superficie desarrollable (cilindro, cono) tiene $K = 0$.

**Mini-ejemplo.** Si dos superficies son localmente isométricas, sus curvaturas gaussianas coinciden. Como $K_{S^2} = 1/R^2 \neq 0 = K_{\text{plano}}$, la Tierra no se puede "aplanar" sin distorsión.

## Ejercicios (20)

### Nivel 1 · Básico
1. Calcula la rapidez de $\alpha(t) = (3t, 4t)$.
2. Calcula la longitud de $\alpha(t) = (t, 2t)$ en $[0, 3]$.
3. ¿Cuánto vale la curvatura de una recta?
4. Escribe los coeficientes $E, F, G$ de la primera forma fundamental.
5. Explica con tus palabras qué es una geodésica.

### Nivel 2 · Intermedio
6. Calcula la longitud de la hélice $\alpha(t) = (\cos t, \sin t, t)$ en $[0, 2\pi]$.
7. Halla la curvatura de una circunferencia de radio $4$.
8. Halla la curvatura y la torsión de la hélice $(2\cos t, 2\sin t, t)$.
9. Escribe la primera forma fundamental del plano en coordenadas polares.
10. ¿Cuál es la curvatura gaussiana de la esfera de radio $R$?

### Nivel 3 · Avanzado
11. Halla la curvatura de $\alpha(t) = (t, t^2)$ en función de $t$.
12. Halla la torsión de la hélice $(\cos t, \sin t, 2t)$.
13. Reparametriza por longitud de arco $\alpha(t) = (t, 2t, 2t)$.
14. Escribe la primera forma fundamental de la esfera unidad.
15. Describe las geodésicas del cilindro.

### Nivel 4 · Desafío
16. Halla la curvatura y la torsión de la curva $(t, t^2, t^3)$.
17. Escribe la fórmula de $\kappa$ para una parametrización arbitraria (sin longitud de arco).
18. Escribe la ecuación de las geodésicas usando los símbolos de Christoffel.
19. Enuncia el teorema egregio de Gauss.
20. Explica por qué no existe una proyección plana de la esfera que preserve todas las distancias.

## Respuestas
1. $5$.
2. $3\sqrt{5}$.
3. $0$.
4. $E = X_u \cdot X_u$, $F = X_u \cdot X_v$, $G = X_v \cdot X_v$.
5. Es la curva de longitud mínima local entre dos puntos; equivalentemente, su aceleración tangencial es nula.
6. $2\pi\sqrt{2}$.
7. $1/4$.
8. $\kappa = 2/5$, $\tau = 1/5$.
9. $I = dr^2 + r^2\, d\theta^2$.
10. $K = 1/R^2$.
11. $\dfrac{2}{(1+4t^2)^{3/2}}$.
12. $\tau = 2/5$.
13. $\alpha(s) = \left(\dfrac{s}{3}, \dfrac{2s}{3}, \dfrac{2s}{3}\right)$.
14. $I = \sin^2\phi\, d\theta^2 + d\phi^2$.
15. Son hélices; las generatrices y las circunferencias aparecen como casos límite.
16. $\kappa = \dfrac{2\sqrt{9t^4 + 9t^2 + 1}}{(1+4t^2+9t^4)^{3/2}}$, $\tau = \dfrac{3}{9t^4 + 9t^2 + 1}$.
17. $\kappa = \dfrac{\lvert\alpha' \times \alpha''\rvert}{\lvert\alpha'\rvert^{3}}$.
18. $\ddot u^k + \sum_{i,j} \Gamma^k_{ij}\dot u^i \dot u^j = 0$.
19. La curvatura gaussiana $K$ depende solo de la primera forma fundamental: es intrínseca.
20. Porque $K_{S^2} = 1/R^2 \neq 0 = K_{\text{plano}}$ y una isometría conservaría $K$.
