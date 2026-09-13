# Análisis armónico · formulario y práctica

## Formulario

### Series de Fourier

$$f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos nx+b_n\operatorname{sen}nx\right)$$

$$a_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos nx\,dx,\qquad b_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\operatorname{sen}nx\,dx$$

Forma compleja, con $c_n=\dfrac{1}{2\pi}\displaystyle\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx$:

$$f(x)=\sum_{n=-\infty}^{\infty}c_n e^{inx}.$$

1. Las funciones pares tienen $b_n=0$; las impares, $a_n=0$.
2. Los coeficientes miden la amplitud de cada armónico.

### Convergencia y fenómeno de Gibbs

1. En un punto de continuidad, la serie converge a $f(x)$.
2. En un salto, converge al promedio $\dfrac{f(x_0^+)+f(x_0^-)}{2}$.
3. El sobrepico de Gibbs es constante: $\approx 8.95\%$ del salto.
4. Condiciones de Dirichlet: periódica, acotada, finitas discontinuidades de salto.

### Transformada de Fourier

$$\hat f(\omega)=\int_{-\infty}^{\infty}f(t)e^{-i\omega t}\,dt,\qquad f(t)=\frac{1}{2\pi}\int_{-\infty}^{\infty}\hat f(\omega)e^{i\omega t}\,d\omega$$

1. $\chi_{[-1,1]}(t)\leftrightarrow\dfrac{2\operatorname{sen}\omega}{\omega}$.
2. $e^{-a|t|}\leftrightarrow\dfrac{2a}{a^2+\omega^2}$.
3. $e^{-t^2/2}\leftrightarrow\sqrt{2\pi}\,e^{-\omega^2/2}$.
4. $\delta(t)\leftrightarrow1$ y $\delta(t-t_0)\leftrightarrow e^{-i\omega t_0}$.

Plancherel:

$$\int_{-\infty}^{\infty}|f(t)|^2\,dt=\frac{1}{2\pi}\int_{-\infty}^{\infty}|\hat f(\omega)|^2\,d\omega.$$

### Propiedades

1. **Linealidad:** $\widehat{af+bg}=a\hat f+b\hat g$.
2. **Traslación:** $\widehat{f(t-t_0)}=e^{-i\omega t_0}\hat f(\omega)$.
3. **Modulación:** $\widehat{e^{i\omega_0 t}f(t)}=\hat f(\omega-\omega_0)$.
4. **Escala:** $\widehat{f(at)}=\dfrac{1}{|a|}\hat f\!\left(\dfrac{\omega}{a}\right)$.
5. **Derivada:** $\widehat{f'}(\omega)=i\omega\,\hat f(\omega)$.

### Convolución

$$(f*g)(t)=\int_{-\infty}^{\infty}f(t-s)g(s)\,ds,\qquad \widehat{f*g}=\hat f\cdot\hat g.$$

Convolución de dos pulsos iguales:

$$\chi_{[-1/2,1/2]}*\chi_{[-1/2,1/2]}=\max(0,1-|t|).$$

### DFT y FFT

$$X_k=\sum_{n=0}^{N-1}x_n e^{-2\pi ikn/N},\qquad x_n=\frac{1}{N}\sum_{k=0}^{N-1}X_k e^{2\pi ikn/N}.$$

1. DFT directa: $O(N^2)$.
2. FFT: $O(N\log N)$.

### Wavelets e incertidumbre

$$\psi_{j,k}(t)=2^{j/2}\psi(2^j t-k),\qquad \Delta t\cdot\Delta\omega\geq\frac{1}{2}.$$

1. $j$ controla la escala y $k$ la posición.
2. La gaussiana alcanza la igualdad en la incertidumbre.

## Ejercicios (50)

### A. Series de Fourier

1. Halla $a_0$ de $f(x)=x$ en $(-\pi,\pi)$.
2. Halla $a_n$ de $f(x)=x$.
3. Halla $b_n$ de $f(x)=x$.
4. Escribe la serie de Fourier de $f(x)=|x|$ en $(-\pi,\pi)$.
5. Halla $a_n$ para $n\ge1$ de $f(x)=x^2$ en $(-\pi,\pi)$.
6. Halla $b_n$ de $f(x)=x^2$.
7. Halla $b_n$ de la onda cuadrada de valores $\pm1$.
8. Halla el término constante $a_0/2$ de la onda cuadrada de valores $\pm1$.
9. ¿A qué converge la serie de la onda cuadrada en $x=0$?
10. Usa la serie de $|x|$ en $x=0$ para hallar $\displaystyle\sum_{n\ \text{impar}}\frac{1}{n^2}$.

### B. Convergencia y Gibbs

11. ¿A qué converge una serie de Fourier en un salto?
12. ¿Qué fracción del salto mide el sobrepico de Gibbs?
13. ¿Desaparece el fenómeno de Gibbs al añadir más términos?
14. ¿Qué condiciones garantizan la convergencia puntual de la serie?
15. Para una onda cuadrada de salto $2$, ¿cuál es la magnitud aproximada del sobrepico?
16. ¿Converge uniformemente la serie de una función discontinua?

### C. Transformada de Fourier

17. Halla la transformada de $\chi_{[-1,1]}(t)$.
18. Halla la transformada de $e^{-a|t|}$ con $a>0$.
19. Halla la transformada de $e^{-t^2/2}$.
20. Halla la transformada de $e^{-t^2}$.
21. Halla la transformada de $\delta(t)$.
22. Halla la transformada de $\delta(t-t_0)$.
23. Escribe la fórmula de inversión de Fourier.
24. Enuncia la relación de Plancherel.
25. Calcula $\hat f(0)$ para $f(t)=e^{-|t|}$.
26. Halla la transformada de la función constante $f(t)=1$.
27. Halla la transformada del pulso $\chi_{[-T,T]}(t)$.

### D. Propiedades y convolución

28. Escribe la propiedad de traslación.
29. Escribe la propiedad de escala.
30. Escribe la transformada de la derivada.
31. ¿Cuál es la transformada de $e^{i\omega_0 t}f(t)$?
32. Define la convolución $(f*g)(t)$.
33. Enuncia el teorema de convolución.
34. ¿Qué forma tiene la convolución de dos rectángulos iguales?
35. Calcula $\chi_{[-1/2,1/2]}*\chi_{[-1/2,1/2]}$ en $t=0$.
36. Simplifica $f*\delta$.
37. Con Plancherel en $f=\chi_{[-1,1]}$, calcula $\displaystyle\int_{-\infty}^{\infty}\left(\frac{\operatorname{sen}\omega}{\omega}\right)^2 d\omega$.

### E. DFT y FFT

38. Escribe la definición de la DFT.
39. Escribe la fórmula inversa de la DFT.
40. Calcula la DFT de $x=(1,1)$.
41. Calcula la DFT de $x=(1,-1)$.
42. Calcula la DFT de $x=(1,1,1,1)$.
43. ¿Cuál es la complejidad de la DFT directa?
44. ¿Cuál es la complejidad de la FFT?

### F. Wavelets e incertidumbre

45. Escribe la familia de wavelets generada por $\psi$.
46. ¿Cuál es la diferencia clave entre Fourier y las wavelets?
47. Enuncia el principio de incertidumbre tiempo-frecuencia.
48. ¿Qué función alcanza la igualdad en la incertidumbre?
49. ¿Cuál es la wavelet más simple?
50. Para un sismo, ¿conviene Fourier o wavelets?

## Solucionario · resultados

<div class="results">
<div class="r"><b>01</b> $a_0=0$</div>
<div class="r"><b>02</b> $a_n=0$</div>
<div class="r"><b>03</b> $\dfrac{2(-1)^{n+1}}{n}$</div>
<div class="r"><b>04</b> $\dfrac{\pi}{2}-\dfrac{4}{\pi}\displaystyle\sum_{n\ \text{impar}}\dfrac{\cos nx}{n^2}$</div>
<div class="r"><b>05</b> $\dfrac{4(-1)^n}{n^2}$</div>
<div class="r"><b>06</b> $b_n=0$</div>
<div class="r"><b>07</b> $b_n=\dfrac{4}{n\pi}$ si $n$ impar, $0$ si $n$ par</div>
<div class="r"><b>08</b> $\dfrac{a_0}{2}=0$</div>
<div class="r"><b>09</b> $0$ (promedio del salto)</div>
<div class="r"><b>10</b> $\dfrac{\pi^2}{8}$</div>
<div class="r"><b>11</b> Al promedio $\dfrac{f(x_0^+)+f(x_0^-)}{2}$</div>
<div class="r"><b>12</b> $\approx 9\%$ del salto</div>
<div class="r"><b>13</b> No, persiste</div>
<div class="r"><b>14</b> Condiciones de Dirichlet</div>
<div class="r"><b>15</b> $\approx 0.18$</div>
<div class="r"><b>16</b> No</div>
<div class="r"><b>17</b> $\dfrac{2\operatorname{sen}\omega}{\omega}$</div>
<div class="r"><b>18</b> $\dfrac{2a}{a^2+\omega^2}$</div>
<div class="r"><b>19</b> $\sqrt{2\pi}\,e^{-\omega^2/2}$</div>
<div class="r"><b>20</b> $\sqrt{\pi}\,e^{-\omega^2/4}$</div>
<div class="r"><b>21</b> $1$</div>
<div class="r"><b>22</b> $e^{-i\omega t_0}$</div>
<div class="r"><b>23</b> $f(t)=\dfrac{1}{2\pi}\displaystyle\int_{-\infty}^{\infty}\hat f(\omega)e^{i\omega t}\,d\omega$</div>
<div class="r"><b>24</b> $\displaystyle\int|f|^2\,dt=\dfrac{1}{2\pi}\int|\hat f|^2\,d\omega$</div>
<div class="r"><b>25</b> $2$</div>
<div class="r"><b>26</b> $2\pi\,\delta(\omega)$</div>
<div class="r"><b>27</b> $\dfrac{2\operatorname{sen}(\omega T)}{\omega}$</div>
<div class="r"><b>28</b> $\widehat{f(t-t_0)}=e^{-i\omega t_0}\hat f(\omega)$</div>
<div class="r"><b>29</b> $\widehat{f(at)}=\dfrac{1}{|a|}\hat f\!\left(\dfrac{\omega}{a}\right)$</div>
<div class="r"><b>30</b> $\widehat{f'}=i\omega\hat f$</div>
<div class="r"><b>31</b> $\hat f(\omega-\omega_0)$</div>
<div class="r"><b>32</b> $(f*g)(t)=\displaystyle\int_{-\infty}^{\infty}f(t-s)g(s)\,ds$</div>
<div class="r"><b>33</b> $\widehat{f*g}=\hat f\cdot\hat g$</div>
<div class="r"><b>34</b> Un triángulo</div>
<div class="r"><b>35</b> $1$</div>
<div class="r"><b>36</b> $f*\delta=f$</div>
<div class="r"><b>37</b> $\pi$</div>
<div class="r"><b>38</b> $X_k=\displaystyle\sum_{n=0}^{N-1}x_n e^{-2\pi ikn/N}$</div>
<div class="r"><b>39</b> $x_n=\dfrac{1}{N}\displaystyle\sum_{k=0}^{N-1}X_k e^{2\pi ikn/N}$</div>
<div class="r"><b>40</b> $(2,0)$</div>
<div class="r"><b>41</b> $(0,2)$</div>
<div class="r"><b>42</b> $(4,0,0,0)$</div>
<div class="r"><b>43</b> $O(N^2)$</div>
<div class="r"><b>44</b> $O(N\log N)$</div>
<div class="r"><b>45</b> $\psi_{j,k}(t)=2^{j/2}\psi(2^j t-k)$</div>
<div class="r"><b>46</b> Las wavelets localizan en tiempo y frecuencia</div>
<div class="r"><b>47</b> $\Delta t\cdot\Delta\omega\geq\dfrac{1}{2}$</div>
<div class="r"><b>48</b> La gaussiana</div>
<div class="r"><b>49</b> La wavelet de Haar</div>
<div class="r"><b>50</b> Wavelets (señal no estacionaria)</div>
</div>
