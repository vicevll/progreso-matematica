-- Studappy · Mazo del mago con 60 tarjetas (10 por submazo).
-- Ejecutar una vez en Supabase -> SQL Editor -> New query -> Run. Se puede
-- volver a ejecutar sin problema.
--
-- La web ya muestra las tarjetas nuevas a todos (las lee de
-- data/catalogo-tienda.js). Esto solo actualiza la copia guardada de quienes
-- ya tenían el mazo, para que el panel de admin cuente bien sus tarjetas y su
-- avance.

begin;

update public.store_catalog
set description = '60 tarjetas de conocimiento sobre estructura atómica, en 6 submazos que puedes jugar por separado.'
where catalog_id = 'paes-ciencias-mago';

delete from public.user_deck_cards c
using public.user_decks d
where c.deck_id = d.id and d.catalog_id = 'paes-ciencias-mago';

insert into public.user_deck_cards (deck_id, user_id, card_key, position, question, answer)
select d.id, d.user_id, t.card_key, t.position, t.question, t.answer
from public.user_decks d
cross join (values
    ('m1-b01', 1, '¿Qué es la **materia**?', 'Todo lo que tiene **masa** y ocupa un lugar en el espacio. Se clasifica en **sustancias puras** y **mezclas**.'),
    ('m1-b02', 2, '¿Qué es una **sustancia pura**?', 'Materia con **composición fija** y propiedades constantes. Puede ser un **elemento** o un **compuesto**.'),
    ('m1-b03', 3, '¿Qué es un **elemento**?', 'Una sustancia pura formada por **un solo tipo de átomo**. Ejemplos: oxígeno ($\mathrm{O}$) y hierro ($\mathrm{Fe}$).'),
    ('m1-b04', 4, '¿Qué es un **compuesto**?', 'Una sustancia pura formada por **dos o más elementos unidos químicamente**. Ejemplos: agua ($\mathrm{H_2O}$) y sal ($\mathrm{NaCl}$).'),
    ('m1-b05', 5, '¿Qué es una **mezcla**?', 'La unión de dos o más sustancias que **no se unen químicamente**: cada una **conserva sus propiedades**.'),
    ('m1-b06', 6, '¿Qué es una **mezcla homogénea**?', 'Una mezcla **uniforme**, en la que no se distinguen sus componentes. También se llama **disolución**. Ejemplo: agua con sal.'),
    ('m1-b07', 7, '¿Qué es una **mezcla heterogénea**?', 'Una mezcla **no uniforme**, en la que sí se distinguen sus componentes. Ejemplo: agua con aceite.'),
    ('m1-b08', 8, '¿Cómo se separan los componentes de una **mezcla**?', 'Con **métodos físicos**, como filtrar o destilar, sin cambiar las sustancias.'),
    ('m1-b09', 9, '¿Cómo se separa un **compuesto** en sus elementos?', 'Solo con **métodos químicos**. Ejemplo: el agua se separa en hidrógeno y oxígeno por electrólisis.'),
    ('m1-b10', 10, '¿El **aire** es una sustancia pura o una mezcla?', 'Una **mezcla homogénea** de gases, principalmente nitrógeno y oxígeno.'),
    ('m2-b01', 11, '¿Qué es un **método de separación de mezclas**?', 'Un procedimiento **físico** para separar las sustancias de una mezcla sin cambiarlas químicamente.'),
    ('m2-b02', 12, '¿Qué es la **filtración**?', 'Separa un **sólido de un líquido** haciéndolos pasar por un filtro: el sólido queda retenido. Ejemplo: arena y agua.'),
    ('m2-b03', 13, '¿Qué es la **decantación**?', 'Se deja **reposar** la mezcla para que lo más denso baje al fondo, y luego se vierte el líquido de arriba.'),
    ('m2-b04', 14, '¿Qué es la **destilación**?', 'Separa líquidos por su **temperatura de ebullición**: uno se evapora primero y luego se condensa al enfriarse.'),
    ('m2-b05', 15, '¿Qué es el **tamizado**?', 'Separa **sólidos de distinto tamaño** con un tamiz o malla. Ejemplo: cernir la harina.'),
    ('m2-b06', 16, '¿Qué es la **cristalización**?', 'Obtiene un **sólido disuelto** formando **cristales**. Ejemplo: obtener sal de agua salada.'),
    ('m2-b07', 17, '¿Qué es la **centrifugación**?', 'Hace **girar muy rápido** la mezcla para separar componentes de distinta densidad. Ejemplo: separar las células de la sangre del plasma.'),
    ('m2-b08', 18, '¿Qué método separa **agua y aceite**?', 'La **decantación**, porque no se mezclan y tienen distinta densidad.'),
    ('m2-b09', 19, '¿Dónde se usa la **destilación**?', 'Para obtener **agua destilada**, producir **pisco** y refinar el **petróleo**.'),
    ('m2-b10', 20, '¿Dónde se usa la **filtración**?', 'Al preparar **café** con filtro, en los **purificadores de agua** y en los **filtros de aire**.'),
    ('m3-b01', 21, '¿Qué es una **propiedad física**?', 'Una característica que se mide **sin cambiar la composición** de la sustancia, como la masa o la densidad.'),
    ('m3-b02', 22, '¿Qué es la **masa**?', 'La **cantidad de materia** de un cuerpo. Se mide con una balanza, en **gramos (g)** o **kilogramos (kg)**.'),
    ('m3-b03', 23, '¿Qué es el **volumen**?', 'El **espacio que ocupa** un cuerpo. Se mide en **litros (L)**, **mililitros (mL)** o **cm³**.'),
    ('m3-b04', 24, '¿Qué es la **densidad**?', 'La relación entre la masa y el volumen: $d = \dfrac{m}{V}$. Se mide en **g/mL** o **g/cm³**.'),
    ('m3-b05', 25, '¿Por qué el **aceite flota** en el agua?', 'Porque es **menos denso** que el agua. Lo menos denso flota y lo más denso se hunde.'),
    ('m3-b06', 26, '¿Qué es la **temperatura de fusión**?', 'La temperatura a la que un **sólido pasa a líquido**. El hielo se funde a **0 °C**.'),
    ('m3-b07', 27, '¿Qué es la **temperatura de ebullición**?', 'La temperatura a la que un **líquido pasa a gas**. El agua hierve a **100 °C** a nivel del mar.'),
    ('m3-b08', 28, '¿Qué pasa con la temperatura de una sustancia pura **mientras se funde o hierve**?', 'Se mantiene **constante** hasta que termina el cambio de estado.'),
    ('m3-b09', 29, '¿Qué es un **cambio físico**?', 'Cambia la **forma o el estado**, pero **no la composición** de la sustancia. Ejemplo: el hielo que se derrite.'),
    ('m3-b10', 30, '¿Qué es un **cambio químico**?', 'Se forman **sustancias nuevas** con propiedades distintas. Ejemplos: la combustión, la oxidación y la fermentación.'),
    ('m4-b01', 31, '¿Qué proponía **Demócrito**?', 'Que todo está formado por partículas muy pequeñas e **indivisibles**, a las que llamó **átomos**.'),
    ('m4-b02', 32, '¿Qué propone la **teoría atómica de Dalton**?', 'La materia está formada por **átomos indivisibles**, y los átomos de un mismo elemento son **idénticos**.'),
    ('m4-b03', 33, '¿Cómo imaginaba **Dalton** el átomo?', 'Como una **esfera sólida y compacta**, sin partes en su interior.'),
    ('m4-b04', 34, '¿Qué descubrió **Thomson**?', 'El **electrón**, en 1897.'),
    ('m4-b05', 35, '¿Cómo es el **modelo atómico de Thomson**?', 'El **«budín de pasas»**: una esfera con **carga positiva** y los **electrones incrustados** en ella.'),
    ('m4-b06', 36, '¿Qué experimento hizo **Rutherford**?', 'Lanzó partículas alfa contra una **lámina de oro**: casi todas la atravesaron y unas pocas rebotaron.'),
    ('m4-b07', 37, '¿Cómo es el **modelo atómico de Rutherford**?', 'El **modelo planetario**: un **núcleo positivo** con casi toda la masa y los electrones girando a su alrededor. La mayor parte del átomo es **espacio vacío**.'),
    ('m4-b08', 38, '¿Cómo es el **modelo atómico de Bohr**?', 'Los electrones giran en **órbitas circulares**, cada una con un **nivel de energía** definido.'),
    ('m4-b09', 39, 'En el modelo de Bohr, ¿qué pasa cuando un electrón **recibe energía**?', '**Salta a un nivel más alto**. Al volver a su nivel, libera esa energía como **luz**.'),
    ('m4-b10', 40, '¿En qué **orden** aparecieron los modelos atómicos?', '**Dalton** (1808) → **Thomson** (1904) → **Rutherford** (1911) → **Bohr** (1913).'),
    ('m5-b01', 41, '¿Cuáles son las **partículas subatómicas** y dónde están?', '**Protones** y **neutrones** en el **núcleo**, y **electrones** girando alrededor.'),
    ('m5-b02', 42, '¿Qué **carga** tiene cada partícula subatómica?', 'Protón: **positiva** (+1). Electrón: **negativa** (−1). Neutrón: **sin carga** (0).'),
    ('m5-b03', 43, '¿Qué partícula tiene **mucho menos masa**?', 'El **electrón**: es unas **1836 veces más liviano** que el protón. Protón y neutrón tienen masas parecidas.'),
    ('m5-b04', 44, '¿Quién descubrió cada **partícula subatómica**?', 'El electrón, **Thomson**. El protón, **Rutherford**. El neutrón, **Chadwick** (1932).'),
    ('m5-b05', 45, '¿Qué es el **número atómico (Z)**?', 'La cantidad de **protones** del núcleo. Identifica a cada elemento.'),
    ('m5-b06', 46, '¿Qué es el **número másico (A)**?', 'La suma de **protones y neutrones** del núcleo: $A = p^+ + n$.'),
    ('m5-b07', 47, '¿Cómo se escriben **Z y A** junto al símbolo de un elemento?', 'Así: $^{A}_{Z}\mathrm{X}$. A va arriba y Z abajo, a la izquierda. Ejemplo: $^{12}_{6}\mathrm{C}$.'),
    ('m5-b08', 48, '¿Qué son los **isótopos**?', 'Átomos del **mismo elemento** (igual Z) con **distinto número de neutrones**, y por eso distinto A.'),
    ('m5-b09', 49, '¿Qué son los **isóbaros**?', 'Átomos de **distintos elementos** con el **mismo número másico (A)**.'),
    ('m5-b10', 50, '¿Qué son los **isótonos**?', 'Átomos con el **mismo número de neutrones** y distinto número de protones.'),
    ('m6-b01', 51, '¿Cómo se dibuja un átomo según **Bohr**?', 'Con el **núcleo** al centro y **círculos** a su alrededor, que son los niveles de energía con sus electrones.'),
    ('m6-b02', 52, 'En un **átomo neutro**, ¿cuántos electrones hay?', 'La **misma cantidad que protones** ($p^+ = e^-$). Ejemplo: el aluminio (Z = 13) tiene 13 electrones.'),
    ('m6-b03', 53, '¿Cuántos electrones caben en los **primeros niveles**?', '**2** en el primer nivel y **8** en el segundo.'),
    ('m6-b04', 54, '¿Cómo se reparten los 13 electrones del **aluminio**?', '**2, 8, 3**: 2 en el primer nivel, 8 en el segundo y 3 en el tercero.'),
    ('m6-b05', 55, '¿Qué son los **electrones de valencia**?', 'Los electrones del **último nivel**. Indican el **grupo**: el aluminio tiene 3 y está en el grupo III-A.'),
    ('m6-b06', 56, '¿Qué indica el **número de niveles** con electrones?', 'El **período** de la tabla periódica. El aluminio tiene 3 niveles y está en el período 3.'),
    ('m6-b07', 57, '¿Qué es un **ion**?', 'Un átomo con **carga eléctrica** porque **ganó o perdió electrones**. Sus protones no cambian.'),
    ('m6-b08', 58, '¿Qué es un **catión**?', 'Un ion **positivo**: el átomo **perdió electrones** y queda con más protones que electrones. Ejemplo: $\mathrm{Na^+}$.'),
    ('m6-b09', 59, '¿Qué es un **anión**?', 'Un ion **negativo**: el átomo **ganó electrones** y queda con más electrones que protones. Ejemplo: $\mathrm{Cl^-}$.'),
    ('m6-b10', 60, '¿Cómo se dibuja un **ion** según Bohr?', 'Con el **mismo núcleo** que el átomo, pero solo con los electrones que le quedan. Ejemplo: $\mathrm{Na^+}$ queda con 2 y 8.')
) as t(card_key, position, question, answer)
where d.catalog_id = 'paes-ciencias-mago';

commit;
