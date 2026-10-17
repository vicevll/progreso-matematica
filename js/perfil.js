// Studappy · etiqueta de usuario, perfil y mazos compartidos (supabase/etiquetas.sql).
//
//   - Cada cuenta tiene una etiqueta única al azar, como «CometaAzul#4821».
//     Se puede sortear otra unas pocas veces (no se escribe a mano).
//   - #/perfil: tu etiqueta, tu enlace y qué mazos propios compartes.
//   - #/u/CometaAzul-4821[/mazo]: el perfil público de alguien, también sin
//     sesión. Se ven solo los mazos que esa persona eligió compartir y se puede
//     guardar una copia en Mis mazos.
// Los enlaces siempre usan el dominio studappy.xyz.
(function () {
  "use strict";

  var SITIO = "https://studappy.xyz/";
  var CACHE = "studappy-perfil:";
  var COPIAS = "studappy-copias:";

  var perfil = null;        // { etiqueta, enlace, nombre, numero, sorteos_restantes, compartidos, copias } o { prueba: true }
  var cuentaCargada = null;
  var cargando = null;
  var error = null;
  var ocupado = {};         // id de mazo -> true mientras se comparte o deja de compartir
  var publico = null;       // última vista pública: { clave, datos, error }

  // ---------- utilidades ----------

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function ic(nombre, size) {
    return window.icon ? window.icon(nombre, { size: size || 16 }) : "";
  }

  function px(nombre, size) {
    if (window.Economia && window.Economia.px) return window.Economia.px(nombre, size);
    return '<img class="px-ico" src="img/juego/' + encodeURIComponent(nombre) + '.svg?v=1" width="' + size + '" height="' + size + '" alt="" />';
  }

  function usuario() {
    var A = window.Auth;
    if (!A || !A.user || (A.isDemo && A.isDemo())) return null;
    var u = A.user();
    return u && u.id ? String(u.id) : null;
  }

  function esPrueba() {
    return !!(window.Auth && window.Auth.isTrial && window.Auth.isTrial());
  }

  function cliente() {
    return window.SB && window.SB.client;
  }

  function rpc(nombre, args) {
    return cliente().rpc(nombre, args || {}).then(function (res) {
      if (res.error) throw res.error;
      return res.data;
    });
  }

  function falta(e) {
    var code = e && (e.code || "");
    return code === "PGRST202" || code === "42883" || /Could not find the function/i.test(String((e && e.message) || ""));
  }

  function enRuta(nombre) {
    return location.hash.replace(/^#\/?/, "").split("/")[0] === nombre;
  }

  function aviso(texto, tipo) {
    if (tipo === "error" && window.Novedades && window.Novedades.notifyError) window.Novedades.notifyError(texto);
    else if (window.Novedades && window.Novedades.notify) window.Novedades.notify(texto);
  }

  function enlacePerfil(p) {
    return SITIO + "#/u/" + p.enlace;
  }

  function enlaceMazo(p, id) {
    return SITIO + "#/u/" + p.enlace + "/" + encodeURIComponent(id);
  }

  // Etiqueta con el número destacado: CometaAzul<b>#4821</b>.
  function etiquetaHtml(etiqueta) {
    var partes = String(etiqueta || "").split("#");
    return '<span class="etq">' + esc(partes[0]) + (partes[1] ? '<b>#' + esc(partes[1]) + "</b>" : "") + "</span>";
  }

  function copiarTexto(texto, boton) {
    function listo() {
      if (!boton) return;
      var span = boton.querySelector("span");
      var antes = span ? span.textContent : "";
      boton.classList.add("copiado");
      if (span) span.textContent = "¡Copiado!";
      setTimeout(function () {
        boton.classList.remove("copiado");
        if (span) span.textContent = antes;
      }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(listo, function () { copiarConInput(texto); listo(); });
    } else {
      copiarConInput(texto);
      listo();
    }
  }

  function copiarConInput(texto) {
    var t = document.createElement("textarea");
    t.value = texto;
    t.setAttribute("readonly", "");
    t.style.position = "fixed";
    t.style.opacity = "0";
    document.body.appendChild(t);
    t.select();
    try { document.execCommand("copy"); } catch (e) { /* sin portapapeles */ }
    document.body.removeChild(t);
  }

  // ---------- mi perfil ----------

  function leerCache(uid) {
    try { return JSON.parse(localStorage.getItem(CACHE + uid) || "null"); } catch (e) { return null; }
  }

  function guardarCache(uid, datos) {
    try { localStorage.setItem(CACHE + uid, JSON.stringify(datos)); } catch (e) { /* sin almacenamiento */ }
  }

  function avisarCambio() {
    try { window.dispatchEvent(new CustomEvent("studappy:perfil")); } catch (e) { /* navegador antiguo */ }
    if (enRuta("perfil")) render();
  }

  function cargar(forzar) {
    var uid = usuario();
    if (!uid || !cliente()) {
      perfil = null;
      cuentaCargada = null;
      return Promise.resolve(null);
    }
    if (esPrueba()) {
      perfil = { prueba: true };
      cuentaCargada = uid;
      return Promise.resolve(perfil);
    }
    if (uid !== cuentaCargada) {
      cuentaCargada = uid;
      perfil = leerCache(uid);
      error = null;
    }
    if (cargando && !forzar) return cargando;
    var pedido = rpc("mi_perfil").then(function (datos) {
      if (usuario() !== uid) return null;
      perfil = datos;
      error = null;
      guardarCache(uid, datos);
      avisarCambio();
      return perfil;
    }, function (e) {
      if (usuario() !== uid) return null;
      error = e;
      if (window.console) console.error("Perfil:", e);
      if (enRuta("perfil")) render();
      return null;
    }).then(function (v) {
      if (cargando === pedido) cargando = null;
      return v;
    });
    cargando = pedido;
    return pedido;
  }

  function compartido(id) {
    return !!(perfil && perfil.compartidos && perfil.compartidos.some(function (c) { return c.id === id; }));
  }

  function copiasDe(id) {
    var c = perfil && perfil.compartidos && perfil.compartidos.filter(function (x) { return x.id === id; })[0];
    return c ? Number(c.copias) || 0 : 0;
  }

  // Comparte o deja de compartir. Un mazo recién creado puede no estar
  // subido todavía: se sincroniza y se intenta otra vez.
  function compartir(id, si) {
    if (ocupado[id]) return Promise.resolve(perfil);
    ocupado[id] = true;
    function pedir() { return rpc("compartir_mazo", { p_mazo: id, p_compartir: !!si }); }
    return pedir().catch(function (e) {
      if (!(e && e.hint === "no_existe") || !window.SyncMazos) throw e;
      return Promise.resolve(window.SyncMazos.sincronizar()).then(pedir);
    }).then(function (datos) {
      perfil = datos;
      guardarCache(usuario(), datos);
      return perfil;
    }).catch(function (e) {
      aviso(falta(e) ? "Compartir mazos todavía no está activado (falta ejecutar supabase/etiquetas.sql)." : (e && e.message) || "No se pudo compartir el mazo.", "error");
      throw e;
    }).then(function (v) {
      delete ocupado[id];
      avisarCambio();
      return v;
    }, function (e) {
      delete ocupado[id];
      avisarCambio();
      throw e;
    });
  }

  function sortear() {
    if (!perfil || perfil.prueba) return;
    var hacer = function () {
      rpc("sortear_etiqueta").then(function (datos) {
        perfil = datos;
        guardarCache(usuario(), datos);
        aviso("Tu nueva etiqueta es " + datos.etiqueta + ".");
        avisarCambio();
      }, function (e) {
        aviso((e && e.message) || "No se pudo sortear otra etiqueta.", "error");
      });
    };
    if (!window.StudappyConfirm) return hacer();
    var n = perfil.sorteos_restantes;
    window.StudappyConfirm.ask(
      "Te tocará otra al azar. Los enlaces que ya compartiste dejarán de funcionar." +
        (n === 1 ? " Es tu último sorteo: la que salga será la definitiva." : " Te quedan " + n + " sorteos."),
      hacer,
      { title: "¿Sortear otra etiqueta?", confirmLabel: "Sortear", cancelLabel: "Mejor no", confirmClass: "primary" }
    );
  }

  // ---------- ventana «Compartir mazo» ----------

  var modal = null;

  function cerrarModal() {
    if (!modal) return;
    var m = modal;
    modal = null;
    if (window.Motion) window.Motion.close(m);
    else if (m.parentNode) m.parentNode.removeChild(m);
  }

  function pintarModal(id) {
    if (!modal) return;
    var deck = window.DeckStore && window.DeckStore.get(id);
    if (!deck) { cerrarModal(); return; }
    var si = compartido(id);
    var cuerpo;
    if (!perfil || perfil.prueba) {
      cuerpo = '<p class="perfil-modal-txt">Cargando tu etiqueta…</p>';
    } else if (si) {
      var url = enlaceMazo(perfil, id);
      var copias = copiasDe(id);
      cuerpo =
        '<p class="perfil-modal-txt">Cualquiera con este enlace puede ver el mazo y guardar una copia. Se ve tu etiqueta ' + etiquetaHtml(perfil.etiqueta) + ", nunca tu nombre ni tu correo.</p>" +
        '<div class="perfil-enlace"><input type="text" readonly value="' + esc(url) + '" aria-label="Enlace del mazo" />' +
          '<button class="btn primary" type="button" data-copiar="' + esc(url) + '">' + ic("copy", 16) + "<span>Copiar enlace</span></button></div>" +
        (copias ? '<p class="perfil-copias">' + px("estrella", 16) + "<b>" + copias + "</b> " + (copias === 1 ? "persona lo guardó" : "personas lo guardaron") + "</p>" : "") +
        '<button class="link-btn perfil-dejar" type="button" data-compartir-off="' + esc(id) + '"' + (ocupado[id] ? " disabled" : "") + ">Dejar de compartir</button>";
    } else {
      cuerpo =
        '<p class="perfil-modal-txt">Al compartirlo, aparece en tu perfil público. Cualquiera con el enlace puede ver las tarjetas y guardar una copia en sus mazos. Se ve tu etiqueta, nunca tu nombre ni tu correo.</p>' +
        '<button class="btn primary lg perfil-compartir-btn" type="button" data-compartir-on="' + esc(id) + '"' + (ocupado[id] ? " disabled" : "") + ">" +
          ic(ocupado[id] ? "refresh" : "share", 17) + "<span>" + (ocupado[id] ? "Compartiendo…" : "Compartir mazo") + "</span></button>";
    }
    modal.querySelector(".perfil-modal-cuerpo").innerHTML =
      '<span class="perfil-modal-mazo" style="--deck-color:' + esc(deck.color) + '"><i></i>' + esc(deck.nombre) + " · " + deck.cards.length + (deck.cards.length === 1 ? " tarjeta" : " tarjetas") + "</span>" + cuerpo;
  }

  function abrirCompartir(id) {
    if (esPrueba()) {
      if (window.StudappyConfirm) {
        window.StudappyConfirm.ask(
          "Con tu cuenta gratis tienes tu propia etiqueta y puedes compartir tus mazos con un enlace.",
          function () { if (window.Auth && window.Auth.crearCuenta) window.Auth.crearCuenta(); },
          { title: "Compartir es para cuentas", confirmLabel: "Crear cuenta gratis", cancelLabel: "Ahora no", confirmClass: "primary" }
        );
      }
      return;
    }
    cerrarModal();
    modal = document.createElement("div");
    modal.className = "confirm-overlay perfil-overlay";
    modal.innerHTML =
      '<div class="confirm-dialog perfil-modal" role="dialog" aria-modal="true" aria-labelledby="perfil-modal-tit">' +
        '<button class="icon-btn perfil-modal-x" type="button" data-perfil-cerrar aria-label="Cerrar">' + ic("x", 18) + "</button>" +
        '<span class="confirm-kicker">Compartir</span>' +
        '<h2 id="perfil-modal-tit">Compartir mazo</h2>' +
        '<div class="perfil-modal-cuerpo"></div>' +
      "</div>";
    modal.setAttribute("data-mazo", id);
    document.body.appendChild(modal);
    pintarModal(id);
    if (!perfil || perfil.prueba) cargar(true).then(function () { pintarModal(id); });
  }

  // ---------- página «Mi perfil» ----------

  function propios() {
    return window.DeckStore ? window.DeckStore.all().filter(function (d) { return d.origen !== "tienda"; }) : [];
  }

  function render(container) {
    container = container || document.getElementById("app");
    if (!container) return;
    var migas = '<nav class="breadcrumb"><a href="#/">Mis mazos</a><span class="sep">' + ic("chevronRight", 14) + "</span><span>Mi perfil</span></nav>";
    var html;
    if (esPrueba()) {
      html =
        '<section class="perfil-tarjeta perfil-tarjeta-prueba">' +
          '<div class="perfil-avatar">' + px("candado", 44) + "</div>" +
          '<div class="perfil-tarjeta-txt"><span class="eyebrow">TU ETIQUETA</span>' +
            "<h1>Crea tu cuenta para tener tu etiqueta</h1>" +
            "<p>Con tu cuenta gratis tienes una etiqueta única (como <b>CometaAzul#4821</b>), puedes compartir tus mazos con un enlace y recibir puntos.</p>" +
            '<button class="btn prueba-cta" type="button" data-crear-cuenta>' + (window.GOOGLE_ICON || "") + '<span class="prueba-cta-txt">Crear cuenta gratis</span></button>' +
          "</div>" +
        "</section>";
      container.innerHTML = migas + '<div class="perfil-pantalla" data-pantalla="perfil">' + html + "</div>";
      return;
    }
    if (!perfil) {
      if (error) {
        html = '<div class="eco-nota">' + px("candado", 32) + "<p>" + (falta(error)
          ? "Las etiquetas todavía no están activadas. Ejecuta <code>supabase/etiquetas.sql</code> en el SQL Editor de Supabase."
          : "No se pudo cargar tu perfil. Revisa tu conexión.") + '</p><button class="btn ghost sm" type="button" data-perfil-reintentar>' + ic("refresh", 14) + "<span>Reintentar</span></button></div>";
      } else {
        html = '<div class="eco-nota">' + px("reloj", 32) + "<p>Cargando tu perfil…</p></div>";
        if (!cargando) cargar();
      }
      container.innerHTML = migas + '<div class="perfil-pantalla" data-pantalla="perfil">' + html + "</div>";
      return;
    }
    var url = enlacePerfil(perfil);
    var n = perfil.sorteos_restantes;
    var lista = propios();
    var filas = lista.map(function (d) {
      var si = compartido(d.id);
      var copias = copiasDe(d.id);
      return (
        '<li class="perfil-mazo' + (si ? " activo" : "") + '" style="--deck-color:' + esc(d.color) + '">' +
          '<span class="perfil-mazo-punto"></span>' +
          '<div class="perfil-mazo-txt"><strong>' + esc(d.nombre) + "</strong><small>" + d.cards.length + (d.cards.length === 1 ? " tarjeta" : " tarjetas") +
            (si && copias ? " · " + copias + (copias === 1 ? " copia" : " copias") : "") + "</small></div>" +
          (si ? '<button class="btn ghost sm" type="button" data-copiar="' + esc(enlaceMazo(perfil, d.id)) + '">' + ic("link", 14) + "<span>Copiar enlace</span></button>" : "") +
          '<button class="perfil-switch" type="button" role="switch" aria-checked="' + (si ? "true" : "false") + '" aria-label="Compartir ' + esc(d.nombre) + '" data-switch="' + esc(d.id) + '"' + (ocupado[d.id] ? " disabled" : "") + "><i></i></button>" +
        "</li>"
      );
    }).join("");
    html =
      '<section class="perfil-tarjeta">' +
        '<div class="perfil-avatar">' + px("estrella", 48) + "</div>" +
        '<div class="perfil-tarjeta-txt">' +
          '<span class="eyebrow">TU ETIQUETA</span>' +
          '<h1 class="perfil-etiqueta">' + etiquetaHtml(perfil.etiqueta) + "</h1>" +
          "<p>Es única y te identifica en Studappy. Compártela con tus compañeros: con ella también te pueden llegar puntos de regalo.</p>" +
          '<div class="perfil-acciones">' +
            '<button class="btn primary" type="button" data-copiar="' + esc(perfil.etiqueta) + '">' + ic("copy", 16) + "<span>Copiar etiqueta</span></button>" +
            '<button class="btn ghost" type="button" data-copiar="' + esc(url) + '">' + ic("link", 16) + "<span>Copiar enlace de perfil</span></button>" +
            '<button class="btn ghost" type="button" data-perfil-sortear' + (n > 0 ? "" : " disabled") + ">" + ic("dice", 16) + "<span>" + (n > 0 ? "Sortear otra (" + n + ")" : "Etiqueta definitiva") + "</span></button>" +
          "</div>" +
          '<p class="perfil-url">' + ic("link", 13) + "<span>" + esc(url.replace(/^https:\/\//, "")) + "</span></p>" +
        "</div>" +
      "</section>" +
      '<section class="perfil-seccion">' +
        '<div class="perfil-seccion-head"><h2>' + px("carta", 26) + "Mazos que compartes</h2>" +
          '<a class="btn ghost sm" href="#/u/' + esc(perfil.enlace) + '">' + ic("user", 14) + "<span>Ver mi perfil público</span></a></div>" +
        "<p>Activa los mazos que quieras mostrar. Los demás siguen siendo solo tuyos.</p>" +
        (lista.length
          ? '<ul class="perfil-mazos">' + filas + "</ul>"
          : '<div class="eco-nota">' + px("lapiz", 30) + "<p>Todavía no tienes mazos propios. Crea uno (a mano o con IA) y podrás compartirlo.</p></div>") +
        (perfil.copias ? '<p class="perfil-copias">' + px("estrella", 16) + "Tus mazos se guardaron <b>" + perfil.copias + "</b> " + (perfil.copias === 1 ? "vez" : "veces") + ".</p>" : "") +
      "</section>" +
      '<section class="perfil-seccion perfil-ayuda">' +
        "<h2>" + px("pergamino", 26) + "¿Primera vez por aquí?</h2>" +
        '<p>Mira de nuevo el recorrido por Studappy.</p><button class="btn ghost sm" type="button" data-guia-iniciar>' + ic("help", 14) + "<span>Ver el tutorial</span></button>" +
      "</section>";
    container.innerHTML = migas + '<div class="perfil-pantalla" data-pantalla="perfil">' + html + "</div>";
    if (Date.now() - (render.ultima || 0) > 20000) { render.ultima = Date.now(); cargar(true); }
  }

  // ---------- perfil público ----------

  function copiasLocales() {
    try { return JSON.parse(localStorage.getItem(COPIAS + usuario()) || "{}") || {}; } catch (e) { return {}; }
  }

  function guardarCopiaLocal(clave, id) {
    var m = copiasLocales();
    m[clave] = id;
    try { localStorage.setItem(COPIAS + usuario(), JSON.stringify(m)); } catch (e) { /* sin almacenamiento */ }
  }

  function miCopia(clave) {
    var id = copiasLocales()[clave];
    return id && window.DeckStore && window.DeckStore.get(id) ? id : null;
  }

  function idNuevo() {
    return "cp" + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
  }

  // Guarda una copia del mazo compartido en Mis mazos y abre el estudio.
  function guardarCopia(datos) {
    var app = window.StudappyApp;
    if (esPrueba() && app && app.cuposPrueba && app.cuposPrueba().manual >= 1) {
      app.limitePrueba("manual");
      return;
    }
    var clave = datos.enlace.toLowerCase() + "/" + datos.id;
    var ya = miCopia(clave);
    if (ya) { location.hash = "#/mazo/" + ya; return; }
    var sufijo = Date.now().toString(36).slice(-4);
    var deck = {
      id: idNuevo(),
      nombre: String(datos.nombre || "Mazo compartido").slice(0, 60),
      descripcion: String(datos.descripcion || ("Copia del mazo de " + datos.etiqueta)).slice(0, 140),
      color: datos.color || "#2f80ed",
      origen: "local",
      cards: (datos.cards || []).map(function (c, i) { return { id: "c" + i + "x" + sufijo, q: c.q, a: c.a }; })
    };
    var guardado = window.DeckStore.save(deck);
    guardarCopiaLocal(clave, guardado.id);
    if (cliente() && usuario()) {
      rpc("registrar_copia", { p_etiqueta: datos.enlace, p_mazo: datos.id }).then(function () {
        if (publico) publico.t = 0; // al volver al mazo se ve el contador nuevo
      }, function () { /* solo es un contador */ });
    }
    aviso("«" + guardado.nombre + "» ya está en Mis mazos.");
    location.hash = "#/mazo/" + guardado.id;
  }

  function cartaPreviaHtml(c, i) {
    var app = window.StudappyApp;
    var md = function (t) { return app && app.cardHtml ? app.cardHtml(t) : "<p>" + esc(t) + "</p>"; };
    return (
      '<li class="pub-carta">' +
        '<span class="pub-carta-num">' + (i + 1) + "</span>" +
        '<div class="pub-carta-q">' + md(c.q) + "</div>" +
        '<details class="pub-carta-a"><summary>Ver respuesta</summary>' + md(c.a) + "</details>" +
      "</li>"
    );
  }

  function botonesVisitante() {
    return (
      '<div class="pub-visitante">' +
        "<p>Para jugarlo y guardar tu avance, entra a Studappy:</p>" +
        '<div class="pub-acciones">' +
          '<button class="btn prueba-cta" type="button" data-pub-probar><span class="prueba-cta-chip">GRATIS</span><span class="prueba-cta-txt">Probar sin registrarme</span></button>' +
          '<button class="btn ghost" type="button" data-pub-login>' + (window.GOOGLE_ICON || "") + "<span>Entrar con Google</span></button>" +
        "</div>" +
      "</div>"
    );
  }

  function pintarPublico(container, enlace, mazoId) {
    var migas = '<nav class="breadcrumb">' + (usuario() ? '<a href="#/">Mis mazos</a><span class="sep">' + ic("chevronRight", 14) + "</span>" : "") +
      (mazoId ? '<a href="#/u/' + esc(enlace) + '">Perfil</a><span class="sep">' + ic("chevronRight", 14) + "</span><span>Mazo</span>" : "<span>Perfil</span>") + "</nav>";
    var html;
    var p = publico;
    if (!p || p.clave !== enlace + "/" + (mazoId || "") || !p.cargado) {
      html = '<div class="eco-nota">' + px("reloj", 32) + "<p>Cargando…</p></div>";
    } else if (p.error) {
      html = '<div class="eco-nota">' + px("candado", 32) + "<p>" + esc(p.error) + "</p></div>";
    } else if (!p.datos) {
      html =
        '<section class="pub-vacio">' + px("pergamino", 48) +
          (mazoId
            ? "<h1>Este mazo ya no está compartido</h1><p>Puede que su dueño haya dejado de compartirlo o lo haya borrado.</p>" +
              '<a class="btn ghost" href="#/u/' + esc(enlace) + '">' + ic("user", 15) + "<span>Ver el perfil</span></a>"
            : "<h1>No encontramos esa etiqueta</h1><p>Revisa que esté bien escrita. Si su dueño sorteó otra, el enlace antiguo ya no funciona.</p>") +
        "</section>";
    } else if (mazoId) {
      var d = p.datos;
      var clave = d.enlace.toLowerCase() + "/" + d.id;
      var copia = usuario() ? miCopia(clave) : null;
      var acciones;
      if (d.tuyo) {
        acciones = '<p class="pub-nota">' + px("estrella", 16) + "Este mazo es tuyo: así lo ven los demás.</p>" +
          (window.DeckStore && window.DeckStore.get(d.id) ? '<a class="btn primary" href="#/mazo/' + esc(d.id) + '">' + ic("play", 16) + "<span>Ir a mi mazo</span></a>" : "");
      } else if (!usuario()) {
        acciones = botonesVisitante();
      } else if (copia) {
        acciones = '<a class="btn primary lg" href="#/mazo/' + esc(copia) + '">' + ic("play", 17) + "<span>Jugar mi copia</span></a>" +
          '<p class="pub-nota">' + ic("check", 14) + "Ya lo guardaste en Mis mazos.</p>";
      } else {
        acciones = '<button class="btn primary lg" type="button" data-pub-copiar>' + ic("plus", 17) + "<span>Agregar a mis mazos y jugar</span></button>" +
          '<p class="pub-nota">Se guarda una copia: tu avance es tuyo y puedes editarla.</p>';
      }
      var n = d.cards.length;
      html =
        '<section class="pub-mazo" style="--deck-color:' + esc(d.color) + '">' +
          '<div class="pub-mazo-head">' +
            '<a class="pub-autor" href="#/u/' + esc(d.enlace) + '">' + px("estrella", 22) + etiquetaHtml(d.etiqueta) + "</a>" +
            "<h1>" + esc(d.nombre) + "</h1>" +
            (d.descripcion ? "<p>" + esc(d.descripcion) + "</p>" : "") +
            '<div class="pub-datos"><span>' + ic("cards", 15) + n + (n === 1 ? " tarjeta" : " tarjetas") + "</span>" +
              (d.copias ? "<span>" + px("estrella", 14) + d.copias + (d.copias === 1 ? " lo guardó" : " lo guardaron") + "</span>" : "") + "</div>" +
            '<div class="pub-mazo-acciones">' + acciones + "</div>" +
          "</div>" +
          '<h2 class="pub-sub">Vista previa</h2>' +
          '<ol class="pub-cartas">' + d.cards.slice(0, 6).map(cartaPreviaHtml).join("") + "</ol>" +
          (n > 6 ? '<p class="pub-mas">… y ' + (n - 6) + " tarjetas más.</p>" : "") +
        "</section>";
    } else {
      var pp = p.datos;
      var mazos = pp.mazos || [];
      html =
        '<section class="pub-perfil">' +
          '<div class="perfil-avatar">' + px("estrella", 48) + "</div>" +
          '<div><span class="eyebrow">' + (pp.tuyo ? "TU PERFIL PÚBLICO" : "PERFIL DE STUDAPPY") + "</span>" +
            '<h1 class="perfil-etiqueta">' + etiquetaHtml(pp.etiqueta) + "</h1>" +
            "<p>" + (mazos.length ? mazos.length + (mazos.length === 1 ? " mazo compartido" : " mazos compartidos") : "Todavía no comparte mazos.") + "</p>" +
            (pp.tuyo ? '<a class="btn ghost sm" href="#/perfil">' + ic("share", 14) + "<span>Elegir qué compartir</span></a>" : "") +
          "</div>" +
        "</section>" +
        (mazos.length
          ? '<section class="pub-grid">' + mazos.map(function (m) {
              return '<a class="pub-tarjeta" href="#/u/' + esc(pp.enlace) + "/" + encodeURIComponent(m.id) + '" style="--deck-color:' + esc(m.color) + '">' +
                '<span class="pub-tarjeta-punto"></span>' +
                "<h3>" + esc(m.nombre) + "</h3>" +
                (m.descripcion ? "<p>" + esc(m.descripcion) + "</p>" : "") +
                '<span class="pub-tarjeta-pie">' + ic("cards", 14) + m.tarjetas + (m.tarjetas === 1 ? " tarjeta" : " tarjetas") + (m.copias ? " · " + m.copias + (m.copias === 1 ? " copia" : " copias") : "") +
                  '<span class="pub-ver">Ver mazo' + ic("chevronRight", 14) + "</span></span>" +
              "</a>";
            }).join("") + "</section>"
          : "") +
        (!usuario() ? botonesVisitante() : "");
    }
    container.innerHTML = migas + '<div class="perfil-pantalla" data-pantalla="publico">' + html + "</div>";
    if (window.StudappyApp && window.StudappyApp.renderMath) window.StudappyApp.renderMath(container.querySelector(".pub-cartas"));
  }

  function renderPublico(container, enlace, mazoId) {
    container = container || document.getElementById("app");
    enlace = decodeURIComponent(String(enlace || ""));
    mazoId = mazoId ? decodeURIComponent(mazoId) : "";
    var clave = enlace + "/" + mazoId;
    if (!publico || publico.clave !== clave) publico = { clave: clave, datos: undefined, error: null, cargado: false, t: 0 };
    pintarPublico(container, enlace, mazoId);
    // Al volver a la misma vista se muestra lo que ya había y se actualiza
    // por detrás (copias guardadas, mazos que se dejaron de compartir...).
    if (publico.cargado && Date.now() - publico.t < 2000) return;
    if (publico.pidiendo) return;
    if (!cliente()) {
      publico.error = "Studappy no está configurado.";
      publico.cargado = true;
      pintarPublico(container, enlace, mazoId);
      return;
    }
    var pedido = mazoId ? rpc("mazo_publico", { p_etiqueta: enlace, p_mazo: mazoId }) : rpc("perfil_publico", { p_etiqueta: enlace });
    var actual = publico;
    actual.pidiendo = true;
    pedido.then(function (datos) {
      actual.datos = datos || null;
      actual.error = null;
    }, function (e) {
      if (actual.cargado && actual.datos !== undefined) return; // se queda con lo que ya mostraba
      actual.error = falta(e) ? "Los perfiles todavía no están activados en este Studappy." : "No se pudo cargar. Revisa tu conexión e intenta de nuevo.";
    }).then(function () {
      actual.cargado = true;
      actual.pidiendo = false;
      actual.t = Date.now();
      if (publico === actual && enRuta("u")) pintarPublico(document.getElementById("app"), enlace, mazoId);
    });
  }

  // ---------- eventos ----------

  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!t.closest) return;
    var b = t.closest("[data-copiar]");
    if (b) { e.preventDefault(); copiarTexto(b.getAttribute("data-copiar"), b); return; }
    if (t.closest("[data-perfil-cerrar]") || (modal && t === modal)) { cerrarModal(); return; }
    b = t.closest("[data-compartir-on]");
    if (b) {
      var idOn = b.getAttribute("data-compartir-on");
      compartir(idOn, true).then(function () { pintarModal(idOn); }, function () { pintarModal(idOn); });
      pintarModal(idOn);
      return;
    }
    b = t.closest("[data-compartir-off]");
    if (b) {
      var idOff = b.getAttribute("data-compartir-off");
      compartir(idOff, false).then(function () { pintarModal(idOff); }, function () { pintarModal(idOff); });
      return;
    }
    b = t.closest("[data-switch]");
    if (b) {
      if (b.disabled) return;
      var idS = b.getAttribute("data-switch");
      compartir(idS, !compartido(idS)).catch(function () { /* el aviso ya se mostró */ });
      render();
      return;
    }
    if (t.closest("[data-perfil-sortear]")) { sortear(); return; }
    if (t.closest("[data-perfil-reintentar]")) { error = null; render(); cargar(true); return; }
    if (t.closest("[data-pub-copiar]")) {
      if (publico && publico.datos) guardarCopia(publico.datos);
      return;
    }
    b = t.closest("[data-pub-probar]");
    if (b) {
      if (b.disabled || !window.Auth || !window.Auth.startTrial) return;
      b.disabled = true;
      var txt = b.querySelector(".prueba-cta-txt");
      if (txt) txt.textContent = "Preparando tu prueba…";
      window.Auth.startTrial().catch(function () {
        b.disabled = false;
        if (txt) txt.textContent = "Probar sin registrarme";
      });
      return;
    }
    if (t.closest("[data-pub-login]")) {
      if (window.SB && window.SB.beginLogin) window.SB.beginLogin(location.hash);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (modal && e.key === "Escape") cerrarModal();
  });

  if (window.Auth && window.Auth.onChange) {
    window.Auth.onChange(function () {
      var uid = usuario();
      if (!uid) {
        perfil = null;
        cuentaCargada = null;
        cerrarModal();
        return;
      }
      if (uid !== cuentaCargada || !perfil) cargar(true);
      // La vista pública cambia con la sesión («tuyo», agregar o entrar).
      publico = null;
    });
    if (window.Auth.ready && usuario()) cargar();
  }

  window.Perfil = {
    cargar: cargar,
    estado: function () { return perfil; },
    render: render,
    renderPublico: renderPublico,
    abrirCompartir: abrirCompartir,
    compartido: compartido,
    enlacePerfil: function () { return perfil && perfil.enlace ? enlacePerfil(perfil) : ""; },
    etiquetaHtml: etiquetaHtml
  };
})();
