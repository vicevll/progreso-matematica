# Inferencia bayesiana · 50 ejercicios

## Formulario

**Bayes:** $p(\theta \mid x) = \dfrac{p(x \mid \theta)\,p(\theta)}{p(x)} \propto p(x \mid \theta)\,p(\theta)$

**Beta-Binomial:** Beta($\alpha$, $\beta$) $+$ $k$ éxitos en $n$ $\Rightarrow$ Beta($\alpha+k$, $\beta+n-k$). Media de Beta($a,b$): $\dfrac{a}{a+b}$.

**Normal-Normal:** precisión previa $\tau_0 = \dfrac{1}{\sigma_0^2}$, precisión datos $\dfrac{n}{\sigma^2}$; media posterior $= \dfrac{\tau_0 \mu_0 + \frac{n}{\sigma^2}\bar{x}}{\tau_0 + \frac{n}{\sigma^2}}$; varianza posterior $= \dfrac{1}{\tau_0 + \frac{n}{\sigma^2}}$.

**Gamma-Poisson:** Gamma($\alpha$, $\beta$) $+$ conteos $x_1, \ldots, x_n$ $\Rightarrow$ Gamma($\alpha + \sum x_i$, $\beta + n$). Media de Gamma($a,b$): $\dfrac{a}{b}$.

**Predictiva:** $p(\tilde{x} \mid x) = \int p(\tilde{x} \mid \theta)\,p(\theta \mid x)\,d\theta$. Con Beta($a,b$), el próximo éxito: $\dfrac{a}{a+b}$.

**Intervalo creíble 95%:** $P(a \le \theta \le b \mid x) = 0.95$.

**Metropolis-Hastings:** aceptar $\theta^{*}$ con probabilidad $\min\!\left(1, \dfrac{p(x \mid \theta^{*})\,p(\theta^{*})}{p(x \mid \theta^{(t)})\,p(\theta^{(t)})}\right)$.

**Convergencia:** $\hat{R} < 1.01$.

## Ejercicios (50)

1. Nombra las cuatro piezas del teorema de Bayes aplicado a parámetros.
2. Escribe la fórmula del posterior para un parámetro continuo $\theta$.
3. ¿Qué representa la previa $p(\theta)$?
4. ¿Qué representa la verosimilitud $p(x \mid \theta)$?
5. ¿Por qué la evidencia $p(x)$ no afecta a la forma de la posterior?
6. En palabras, ¿qué dice "posterior $\propto$ verosimilitud $\times$ previa"?
7. Si $p(A) = 0.2$, $p(B \mid A) = 0.9$ y $p(B \mid \text{no }A) = 0.1$, halla $p(A \mid B)$.
8. Previa Beta(1,1) y 8 caras en 12 lanzamientos: posterior.
9. Previa Beta(2,2) y 7 caras en 10: posterior y media.
10. Previa Beta(5,5) y 3 caras en 10: posterior y media.
11. Previa Beta(3,7) y 6 éxitos en 9: posterior y media.
12. Previa Beta(10,10) y 5 caras en 5: posterior y media.
13. Previa Beta(0.5,0.5) y 2 caras en 3: posterior.
14. ¿Cuántos datos ficticios representa Beta(20, 30)?
15. ¿Cuál es la media de Beta(20, 30)?
16. Previa $N(50, 25)$, datos $n = 16$, $\bar{x} = 54$, $\sigma^2 = 100$: media posterior.
17. Previa $N(0, 100)$, datos $n = 25$, $\bar{x} = 2$, $\sigma^2 = 25$: media posterior.
18. Previa Gamma(2, 0.5) y conteos 3, 5 en 2 períodos: posterior y media.
19. Previa Gamma(5, 2) y conteos 1, 2, 3 en 3 períodos: posterior y media.
20. ¿Qué previa es conjugada de la binomial? ¿Y de la Poisson?
21. Previa Beta(9,5): probabilidad predictiva del próximo lanzamiento.
22. Explica qué es un intervalo creíble del 95%.
23. Previa Beta(1,1) y 60 caras en 100: media posterior y proporción muestral; compáralas.
24. ¿Qué es la distribución predictiva posterior?
25. ¿Por qué la predictiva es más dispersa que la binomial con $p$ fijo?
26. ¿Qué es MCMC y para qué sirve?
27. Describe los pasos de Metropolis-Hastings.
28. En MH, si el cociente de aceptación es 1.5, ¿qué pasa con el candidato?
29. En MH, ¿qué se cancela al calcular el cociente de aceptación?
30. ¿Qué hace el muestreo de Gibbs?
31. ¿Qué mide $\hat{R}$ y qué valor indica convergencia?
32. Menciona dos programas estándar de MCMC moderno.
33. ¿Qué es el factor de Bayes?
34. Factor de Bayes 15 a favor de $M_1$: interpretación.
35. ¿Qué criterios predictivos se usan para comparar modelos?
36. ¿Qué penalización equivale a una previa normal en regresión?
37. Escribe el modelo jerárquico de medias por grupo con su fórmula.
38. ¿Qué es el shrinkage?
39. ¿Qué le pasa a un grupo con 2 observaciones en un modelo jerárquico?
40. ¿Qué es el pooling parcial?
41. Test médico: prevalencia 1%, sensibilidad 95%, especificidad 95%; calcula $p(\text{enf} \mid +)$.
42. Previa Beta(2,2) y 6 caras en 8: intervalo creíble aproximado del 95% si fuera $[0.45, 0.92]$: interprétalo.
43. ¿Qué ventaja tiene el enfoque bayesiano para preguntar "¿cuál es la probabilidad de que A supere a B?"?
44. Previa Beta(4,2) y 1 cara en 2: posterior.
45. Previa $N(100, 50)$ con precisión de los datos $0.3$ y $\bar{x} = 110$: media posterior.
46. Previa Gamma(1, 1) y conteo 7 en 1 período: posterior.
47. En el ejemplo del test, ¿por qué tantos falsos positivos?
48. ¿Qué es una previa no informativa? Da un ejemplo.
49. ¿Qué es la previa de Jeffreys para una proporción?
50. ¿Qué diagnósticos son obligatorios antes de publicar resultados de MCMC?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> Previa, verosimilitud, posterior y evidencia.</div>
<div class="r"><b>02</b> $p(\theta \mid x) = \dfrac{p(x \mid \theta)\,p(\theta)}{\int p(x \mid \theta)\,p(\theta)\,d\theta}$</div>
<div class="r"><b>03</b> La creencia sobre $\theta$ antes de ver los datos.</div>
<div class="r"><b>04</b> Cuán plausibles son los datos si $\theta$ fuera cierto.</div>
<div class="r"><b>05</b> Porque no depende de $\theta$: es solo una constante de normalización.</div>
<div class="r"><b>06</b> La creencia actualizada es el producto de la información de los datos por la creencia previa.</div>
<div class="r"><b>07</b> $p(B)=0.9\cdot0.2+0.1\cdot0.8=0.26$; $p(A\mid B)=0.18/0.26\approx0.692$</div>
<div class="r"><b>08</b> Beta(9, 5)</div>
<div class="r"><b>09</b> Beta(9, 5); media $9/14\approx0.643$</div>
<div class="r"><b>10</b> Beta(8, 12); media $8/20=0.4$</div>
<div class="r"><b>11</b> Beta(9, 10); media $9/19\approx0.474$</div>
<div class="r"><b>12</b> Beta(15, 10); media $15/25=0.6$</div>
<div class="r"><b>13</b> Beta(2.5, 1.5)</div>
<div class="r"><b>14</b> 50 datos ficticios: 20 éxitos y 30 fracasos.</div>
<div class="r"><b>15</b> $20/50=0.4$</div>
<div class="r"><b>16</b> $\tau_0=1/25=0.04$; datos $16/100=0.16$; media $=(0.04\cdot50+0.16\cdot54)/0.20=53.2$</div>
<div class="r"><b>17</b> $\tau_0=0.01$; datos $25/25=1$; media $=(0.01\cdot0+1\cdot2)/1.01\approx1.98$</div>
<div class="r"><b>18</b> Gamma(10, 2.5); media $10/2.5=4$</div>
<div class="r"><b>19</b> Gamma(11, 5); media $11/5=2.2$</div>
<div class="r"><b>20</b> Beta para la binomial; Gamma para la Poisson.</div>
<div class="r"><b>21</b> $9/14\approx0.643$</div>
<div class="r"><b>22</b> Intervalo $[a,b]$ tal que $P(a\le\theta\le b\mid x)=0.95$: el parámetro está ahí con probabilidad 0.95 dado el modelo.</div>
<div class="r"><b>23</b> Media posterior $=61/102\approx0.598$; proporción muestral $=0.6$; casi iguales: la previa débil apenas pesa.</div>
<div class="r"><b>24</b> La distribución de un dato futuro promediando sobre la posterior del parámetro.</div>
<div class="r"><b>25</b> Porque suma la incertidumbre sobre $\theta$ a la variabilidad del muestreo.</div>
<div class="r"><b>26</b> Cadenas de Markov de Monte Carlo: muestrea posteriores sin forma cerrada.</div>
<div class="r"><b>27</b> Proponer un candidato cercano, calcular el cociente de posteriores y aceptar con probabilidad $\min(1, r)$.</div>
<div class="r"><b>28</b> Se acepta siempre (la probabilidad de aceptación es 1).</div>
<div class="r"><b>29</b> La evidencia $p(x)$, que aparece en numerador y denominador.</div>
<div class="r"><b>30</b> Muestrea cada parámetro de su distribución condicionada en los demás.</div>
<div class="r"><b>31</b> Convergencia entre cadenas (Gelman-Rubin); $\hat{R}<1.01$.</div>
<div class="r"><b>32</b> Stan y PyMC.</div>
<div class="r"><b>33</b> Cociente de evidencias $p(x \mid M_1)/p(x \mid M_2)$: cuánto más probable es un modelo que el otro.</div>
<div class="r"><b>34</b> Evidencia fuerte a favor de $M_1$ (mayor que 10).</div>
<div class="r"><b>35</b> DIC, WAIC y LOO-CV; menor es mejor.</div>
<div class="r"><b>36</b> La penalización ridge (L2).</div>
<div class="r"><b>37</b> $y_{ij} \sim N(\theta_j, \sigma^2)$; $\theta_j \sim N(\mu, \tau^2)$; previas sobre $\mu$ y $\tau$.</div>
<div class="r"><b>38</b> El encogimiento de las estimaciones de grupos pequeños hacia la media poblacional.</div>
<div class="r"><b>39</b> Su estimación se encoge fuertemente hacia $\mu$.</div>
<div class="r"><b>40</b> Combinar la información del grupo con la de la población, con peso según el tamaño muestral.</div>
<div class="r"><b>41</b> $p(\text{enf}\mid+)=\dfrac{0.95\cdot0.01}{0.95\cdot0.01+0.05\cdot0.99}\approx0.161$</div>
<div class="r"><b>42</b> Dado el modelo, la proporción está entre 0.45 y 0.92 con probabilidad 0.95.</div>
<div class="r"><b>43</b> Se calcula directamente por simulación de las dos posteriores, sin p-valores.</div>
<div class="r"><b>44</b> Beta(5, 3)</div>
<div class="r"><b>45</b> $\tau_0=1/50=0.02$; media $=(0.02\cdot100+0.3\cdot110)/0.32=109.375$</div>
<div class="r"><b>46</b> Gamma(8, 2); media $4$</div>
<div class="r"><b>47</b> Porque el 5% de falsos positivos sobre el 99% de sanos supera a los verdaderos positivos.</div>
<div class="r"><b>48</b> Representa ignorancia total; ejemplo: Beta(1,1), la uniforme en $[0,1]$.</div>
<div class="r"><b>49</b> Beta(0.5, 0.5).</div>
<div class="r"><b>50</b> $\hat{R}$, gráficos de traza y tamaño efectivo de muestra.</div>
</div>
