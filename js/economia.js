// Studappy · misiones, puntos y canjes.
//
// Todo se valida en Supabase (supabase/misiones.sql): esta parte solo muestra
// el estado, pide reclamar o canjear y aplica el tema elegido.
//   - Contador de puntos en la barra superior y aviso de misiones listas.
//   - Pantalla #/misiones.
//   - Secciones de canje de la tienda (temas, IA plus y mazos por puntos).
(function () {
  "use strict";

  var estado = null;
  var error = null;
  var cargando = null;
  var ultimaCarga = 0;
  var sinServidor = null; // id del usuario para el que falta supabase/misiones.sql: no se insiste hasta recargar
  var usuarioCargado = null;
  var reclamando = {};
  var canjeando = {};
  var mensajes = {};
  var probando = null;
  var refrescoPendiente = null;

  var FMT = new Intl.NumberFormat("es-CL");
  var TEMAS_MUESTRA = {
    noche: { bg: "#060a16", card: "#0c1325", acc: "#7ab8ec", grad: "linear-gradient(100deg, #9fe0f3, #66b3ec 45%, #4a78e0)" },
    aurora: { bg: "#031014", card: "#08191d", acc: "#5fe0c0", grad: "linear-gradient(100deg, #b6f7dd, #5fe0c0 45%, #2f9fd0)" },
    atardecer: { bg: "#120810", card: "#1c0e18", acc: "#ff9e7a", grad: "linear-gradient(100deg, #ffd27a, #ff9e7a 45%, #e85d9a)" },
    bosque: { bg: "#050e08", card: "#0b1a10", acc: "#9ad86a", grad: "linear-gradient(100deg, #e0f59a, #9ad86a 45%, #3fa86a)" },
    arcade: { bg: "#0b0418", card: "#150a28", acc: "#ff5fd2", grad: "linear-gradient(100deg, #5ff3ff, #b06bff 50%, #ff5fd2)" }
  };
  var NIVEL_ICONO = { pequeno: "cofre", grande: "regalo", premium: "corona" };

  // ---------- utilidades ----------

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function num(n) {
    return FMT.format(Math.round(Number(n) || 0));
  }

  function ic(nombre, size) {
    return window.icon ? window.icon(nombre, { size: size || 16 }) : "";
  }

  function px(nombre, size, clase) {
    var src = nombre === "matraz" ? "img/quimica/matraz.svg" : "img/juego/" + encodeURIComponent(nombre) + ".svg";
    size = size || 32;
    return '<img class="px-ico' + (clase ? " " + clase : "") + '" src="' + src + '?v=1" width="' + size + '" height="' + size + '" alt="" decoding="async" />';
  }

  function enRuta(nombre) {
    return location.hash.replace(/^#\/?/, "").split("/")[0] === nombre;
  }

  function usuario() {
    var A = window.Auth;
    if (!A || !A.user || (A.isDemo && A.isDemo())) return null;
    var u = A.user();
    return u && u.id ? String(u.id) : null;
  }

  function esDemo() {
    return !!(window.Auth && window.Auth.isDemo && window.Auth.isDemo());
  }

  function disponible() {
    return !!(usuario() && window.SB && window.SB.client);
  }

  function falta(e) {
    var code = e && (e.code || "");
    var msg = String((e && e.message) || "");
    return code === "PGRST202" || code === "42883" || code === "PGRST205" || /Could not find the function/i.test(msg);
  }

  function restante(fin) {
    var ms = new Date(fin).getTime() - Date.now();
    if (!(ms > 0)) return "en un momento";
    var min = Math.ceil(ms / 60000);
    if (min < 60) return "en " + min + " min";
    var h = Math.floor(min / 60);
    if (h < 24) return "en " + h + " h" + (min % 60 ? " " + (min % 60) + " min" : "");
    var d = Math.floor(h / 24);
    return "en " + d + (d === 1 ? " día" : " días") + (h % 24 ? " " + (h % 24) + " h" : "");
  }

  function misionesListas() {
    if (!estado || !estado.misiones) return 0;
    return estado.misiones.filter(function (m) { return m.reclamable > 0; }).length;
  }

  function item(id) {
    var lista = (estado && estado.items) || [];
    for (var i = 0; i < lista.length; i++) if (lista[i].id === id) return lista[i];
    return null;
  }

  // Aviso flotante (abajo, se apilan). Los de error usan otro color.
  function aviso(texto, tipo) {
    var pila = document.getElementById("eco-avisos");
    if (!pila) {
      pila = document.createElement("div");
      pila.id = "eco-avisos";
      pila.className = "eco-avisos";
      pila.setAttribute("aria-live", "polite");
      document.body.appendChild(pila);
    }
    var t = document.createElement("div");
    t.className = "eco-aviso" + (tipo === "error" ? " error" : "");
    t.setAttribute("role", "status");
    t.innerHTML = px(tipo === "error" ? "candado" : "moneda", 22);
    var p = document.createElement("p");
    p.textContent = texto;
    t.appendChild(p);
    pila.appendChild(t);
    while (pila.children.length > 3) pila.removeChild(pila.firstChild);
    setTimeout(function () {
      t.classList.add("saliendo");
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 260);
    }, 4200);
  }

  function rpc(nombre, args) {
    return window.SB.client.rpc(nombre, args || {}).then(function (res) {
      if (res.error) throw res.error;
      return res.data;
    });
  }

  // ---------- estado ----------

  function cargar(forzar) {
    var uid = usuario();
    if (!uid || !window.SB || !window.SB.client) {
      estado = null;
      error = null;
      usuarioCargado = null;
      pintar();
      return Promise.resolve(null);
    }
    if (uid !== usuarioCargado) {
      estado = null;
      usuarioCargado = uid;
    }
    if (sinServidor === uid) return Promise.resolve(null);
    if (cargando && !forzar) return cargando;
    var pedido = rpc("economia_estado").then(function (data) {
      if (usuario() !== uid) return null;
      estado = data;
      error = null;
      ultimaCarga = Date.now();
      if (!probando && window.StudappyTema) window.StudappyTema.aplicar(estado.tema);
      pintar();
      return estado;
    }, function (e) {
      if (usuario() !== uid) return null;
      error = e;
      if (falta(e)) sinServidor = uid;
      else if (window.console) console.error("Misiones:", e);
      pintar();
      return null;
    }).then(function (v) {
      if (cargando === pedido) cargando = null;
      return v;
    });
    cargando = pedido;
    return pedido;
  }

  // Varios avisos seguidos (guardar estudio, subir un mazo...) piden un solo refresco.
  function refrescarPronto(ms) {
    if (!disponible()) return;
    clearTimeout(refrescoPendiente);
    refrescoPendiente = setTimeout(function () { cargar(true); }, ms || 1200);
  }

  // ---------- barra superior y resumen ----------

  function pintarBarra() {
    var derecha = document.querySelector(".topbar-right");
    var pill = document.getElementById("eco-pill");
    if (!pill && derecha) {
      pill = document.createElement("a");
      pill.id = "eco-pill";
      pill.className = "eco-pill";
      pill.href = "#/misiones";
      derecha.insertBefore(pill, document.getElementById("account"));
    }
    var listas = misionesListas();
    if (pill) {
      var ver = disponible() && estado;
      pill.hidden = !ver;
      if (ver) {
        pill.innerHTML = px("moneda", 18) + '<strong id="eco-pill-saldo">' + num(estado.saldo) + "</strong>" +
          (listas ? '<span class="eco-dot" aria-hidden="true">' + listas + "</span>" : "");
        pill.setAttribute("aria-label", "Tienes " + num(estado.saldo) + " puntos" + (listas ? " y " + listas + (listas === 1 ? " misión lista" : " misiones listas") + " para reclamar" : "") + ". Ver misiones");
        pill.classList.toggle("con-listas", listas > 0);
      }
    }
    var dot = document.getElementById("eco-nav-dot");
    if (dot) {
      dot.hidden = !listas;
      dot.textContent = listas ? String(listas) : "";
    }
  }

  function pintarResumen() {
    var el = document.getElementById("eco-resumen");
    if (!el) return;
    if (!disponible() || !estado) {
      el.hidden = true;
      return;
    }
    var listas = misionesListas();
    var diarias = estado.misiones.filter(function (m) { return m.tipo === "diaria"; });
    var hechas = diarias.filter(function (m) { return m.completa; }).length;
    el.hidden = false;
    el.className = "eco-resumen" + (listas ? " con-listas" : "");
    el.innerHTML =
      '<a class="eco-resumen-link" href="#/misiones">' +
        '<span class="eco-resumen-saldo">' + px("moneda", 22) + "<strong>" + num(estado.saldo) + "</strong> pts</span>" +
        '<span class="eco-resumen-txt">' + (listas
          ? px("cofre", 20) + "<b>" + listas + (listas === 1 ? " misión lista" : " misiones listas") + "</b> para reclamar"
          : px("pergamino", 20) + "Misiones de hoy: <b>" + hechas + " de " + diarias.length + "</b> completadas") + "</span>" +
        '<span class="eco-resumen-ir">' + (listas ? "Reclamar" : "Ver misiones") + ic("chevronRight", 14) + "</span>" +
      "</a>";
  }

  function pintar() {
    pintarBarra();
    pintarResumen();
    if (enRuta("misiones")) {
      var app = document.getElementById("app");
      if (app && app.querySelector("[data-pantalla=misiones]")) render(app, true);
    }
    if (enRuta("tienda") && window.Tienda && document.getElementById("eco-tienda")) window.Tienda.render();
  }

  // ---------- pantalla de misiones ----------

  function misionHtml(m) {
    var pct = Math.round((Math.min(m.progreso, m.meta) / m.meta) * 100);
    var lista = m.reclamable > 0;
    var accion;
    if (reclamando[m.id]) {
      accion = '<button class="btn eco-reclamar" type="button" disabled><span>Reclamando…</span></button>';
    } else if (lista) {
      accion = '<button class="btn eco-reclamar" type="button" data-reclamar="' + esc(m.id) + '">' + px("moneda", 16) + "<span>Reclamar +" + num(m.reclamable) + "</span></button>";
    } else if (m.completa) {
      accion = '<span class="eco-hecha">' + ic("check", 15) + "Reclamada</span>";
    } else {
      accion = '<span class="eco-falta">En progreso</span>';
    }
    var progreso = m.por_unidad
      ? num(m.progreso) + " / " + num(m.meta) + " · " + num(m.pagadas * m.puntos) + " de " + num(m.total) + " pts"
      : num(m.progreso) + " / " + num(m.meta);
    var segmentos = Math.min(m.meta, 10);
    var llenos = Math.round((pct / 100) * segmentos);
    var barra = "";
    for (var i = 0; i < segmentos; i++) barra += '<i' + (i < llenos ? ' class="lleno"' : "") + "></i>";
    return (
      '<article class="eco-mision' + (lista ? " lista" : "") + (m.completa ? " completa" : "") + '" data-mision="' + esc(m.id) + '">' +
        '<span class="eco-mision-icono">' + px(m.icono, 40) + "</span>" +
        '<div class="eco-mision-cuerpo">' +
          "<h3>" + esc(m.titulo) + "</h3>" +
          "<p>" + esc(m.descripcion) + "</p>" +
          '<div class="eco-barra" role="progressbar" aria-label="Progreso" aria-valuemin="0" aria-valuemax="' + m.meta + '" aria-valuenow="' + Math.min(m.progreso, m.meta) + '">' + barra + "</div>" +
          '<span class="eco-progreso">' + esc(progreso) + "</span>" +
          (mensajes[m.id] ? '<p class="eco-msg error" role="status">' + esc(mensajes[m.id]) + "</p>" : "") +
        "</div>" +
        '<div class="eco-mision-premio">' +
          '<span class="eco-pts">' + px("moneda", 16) + "+" + num(m.total) + "</span>" +
          accion +
        "</div>" +
      "</article>"
    );
  }

  function bloqueHtml(tipo, titulo, icono, fin) {
    var lista = estado.misiones.filter(function (m) { return m.tipo === tipo; });
    return (
      '<section class="eco-bloque">' +
        '<header class="eco-bloque-head"><h2>' + px(icono, 26) + esc(titulo) + "</h2>" +
          '<span class="eco-timer" data-fin="' + esc(fin) + '">' + ic("refresh", 13) + "Se renuevan <b>" + esc(restante(fin)) + "</b></span></header>" +
        '<div class="eco-misiones">' + lista.map(misionHtml).join("") + "</div>" +
      "</section>"
    );
  }

  function movimientosHtml() {
    var movs = estado.movimientos || [];
    if (!movs.length) return "";
    var nombres = {};
    estado.misiones.forEach(function (m) { nombres[m.id] = m.titulo; });
    (estado.items || []).forEach(function (i) { nombres[i.id] = i.titulo; });
    return (
      '<section class="eco-bloque eco-historial"><header class="eco-bloque-head"><h2>' + px("pergamino", 26) + "Últimos movimientos</h2></header><ul>" +
      movs.map(function (mv) {
        var ref = String(mv.ref || "").split("@")[0];
        var nombre = mv.motivo === "mision" ? "Misión: " + (nombres[ref] || "completada") : mv.motivo === "canje" ? "Canje: " + (nombres[ref] || ref) : "Regalo de Studappy";
        var fecha = new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(mv.creado));
        return '<li><span class="eco-mov-nombre">' + esc(nombre) + '<small>' + esc(fecha) + '</small></span><strong class="' + (mv.cantidad > 0 ? "mas" : "menos") + '">' + (mv.cantidad > 0 ? "+" : "−") + num(Math.abs(mv.cantidad)) + "</strong></li>";
      }).join("") + "</ul></section>"
    );
  }

  function heroHtml() {
    var arte = window.MagoArte && window.MagoArte.imagenHtml ? window.MagoArte.imagenHtml() : "";
    return (
      '<section class="eco-hero">' +
        '<div class="eco-hero-texto">' +
          '<span class="eyebrow">MISIONES DEL MAGO</span>' +
          "<h1>Cumple misiones y gana puntos</h1>" +
          "<p>Canjéalos en la tienda por temas visuales, IA plus y mazos.</p>" +
          '<div class="eco-saldo">' + px("moneda", 44, "eco-saldo-moneda") + '<strong id="eco-saldo-num">' + (estado ? num(estado.saldo) : "–") + "</strong><span>puntos</span></div>" +
          '<a class="btn primary" href="#/tienda">' + ic("layers") + "<span>Ir a la tienda</span></a>" +
        "</div>" +
        '<div class="eco-hero-arte" aria-hidden="true">' +
          '<span class="eco-flota f1">' + px("moneda", 34) + "</span>" +
          '<span class="eco-flota f2">' + px("estrella", 30) + "</span>" +
          '<span class="eco-flota f3">' + px("cofre", 54) + "</span>" +
          '<span class="eco-flota f4">' + px("moneda", 26) + "</span>" +
          arte +
        "</div>" +
      "</section>"
    );
  }

  function render(container, desdeEstado) {
    container = container || document.getElementById("app");
    if (!container) return;
    var migas = '<nav class="breadcrumb"><a href="#/">Mis mazos</a><span class="sep">' + ic("chevronRight", 14) + "</span><span>Misiones</span></nav>";
    var cuerpo;
    if (esDemo()) {
      cuerpo = '<div class="eco-nota">' + px("candado", 32) + "<p>En el modo prueba no se guardan puntos. <b>Entra con Google</b> para cumplir misiones y canjear premios.</p></div>";
    } else if (error && falta(error)) {
      cuerpo = '<div class="eco-nota">' + px("candado", 32) + "<p>Las misiones todavía no están activadas. Ejecuta <code>supabase/misiones.sql</code> en el SQL Editor de Supabase.</p></div>";
    } else if (!estado) {
      cuerpo = error
        ? '<div class="eco-nota">' + px("reloj", 32) + '<p>No se pudieron cargar tus misiones. Revisa tu conexión.</p><button class="btn ghost sm" type="button" data-eco-reintentar>' + ic("refresh", 14) + "<span>Reintentar</span></button></div>"
        : '<div class="eco-nota">' + px("reloj", 32) + "<p>Cargando tus misiones…</p></div>";
      if (!desdeEstado && !error) cargar();
    } else {
      cuerpo =
        bloqueHtml("diaria", "Misiones diarias", "reloj", estado.dia.termina) +
        bloqueHtml("semanal", "Misiones semanales", "trofeo", estado.semana.termina) +
        movimientosHtml();
      if (!desdeEstado && Date.now() - ultimaCarga > 15000) cargar(true);
    }
    container.innerHTML = migas + '<div class="eco-pantalla" data-pantalla="misiones">' + heroHtml() + cuerpo + "</div>";
  }

  // ---------- tienda ----------

  function precioHtml(precio) {
    return '<span class="eco-precio">' + px("moneda", 16) + num(precio) + "</span>";
  }

  function botonCanje(it) {
    if (canjeando[it.id]) return '<button class="btn eco-canjear" type="button" disabled><span>Canjeando…</span></button>';
    var saldo = estado ? estado.saldo : 0;
    if (saldo < it.precio) {
      return '<button class="btn ghost eco-canjear" type="button" disabled title="Te faltan ' + num(it.precio - saldo) + ' puntos">' + px("candado", 14) + "<span>Faltan " + num(it.precio - saldo) + "</span></button>";
    }
    return '<button class="btn eco-canjear" type="button" data-canjear="' + esc(it.id) + '">' + px("moneda", 14) + "<span>Canjear</span></button>";
  }

  function temaHtml(it) {
    var id = it.id.replace(/^tema:/, "");
    var m = TEMAS_MUESTRA[id] || TEMAS_MUESTRA.noche;
    var enUso = estado && estado.tema === it.id;
    var acciones;
    if (enUso) acciones = '<span class="eco-hecha">' + ic("check", 15) + "En uso</span>";
    else if (it.tengo) acciones = '<button class="btn ghost" type="button" data-usar-tema="' + esc(it.id) + '"><span>Usar</span></button>';
    else acciones = '<button class="btn ghost" type="button" data-probar-tema="' + esc(id) + '"><span>' + (probando === id ? "Quitar" : "Probar") + "</span></button>" + botonCanje(it);
    return (
      '<article class="eco-item eco-tema' + (enUso ? " en-uso" : "") + '">' +
        '<div class="eco-muestra" style="--m-bg:' + m.bg + ";--m-card:" + m.card + ";--m-acc:" + m.acc + ";--m-grad:" + m.grad + '" aria-hidden="true">' +
          "<i></i><b></b><span></span><em></em>" +
        "</div>" +
        '<div class="eco-item-cuerpo"><h3>' + esc(it.titulo) + "</h3><p>" + esc(it.descripcion) + "</p></div>" +
        '<div class="eco-item-pie">' + (it.tengo ? '<span class="eco-tuyo">Tuyo</span>' : precioHtml(it.precio)) + '<div class="eco-acciones">' + acciones + "</div></div>" +
        (mensajes[it.id] ? '<p class="eco-msg error" role="status">' + esc(mensajes[it.id]) + "</p>" : "") +
      "</article>"
    );
  }

  function plusHtml(it) {
    var p = (estado && estado.plus) || {};
    var tiene = p.disponibles > 0;
    return (
      '<article class="eco-item eco-plus">' +
        '<div class="eco-item-arte">' + px("chispa", 56) + "</div>" +
        '<div class="eco-item-cuerpo"><h3>' + esc(it.titulo) + "</h3><p>" + esc(it.descripcion) + "</p>" +
          (tiene ? '<p class="eco-plus-tienes">' + px("estrella", 14) + "Tienes <b>" + p.disponibles + "</b> · el primero vence " + esc(restante(p.vence)) + "</p>" : "") +
        "</div>" +
        '<div class="eco-item-pie">' + precioHtml(it.precio) + '<div class="eco-acciones">' + botonCanje(it) + "</div></div>" +
        (mensajes[it.id] ? '<p class="eco-msg error" role="status">' + esc(mensajes[it.id]) + "</p>" : "") +
      "</article>"
    );
  }

  function mazoPuntosHtml(it) {
    var nivel = (it.datos && it.datos.nivel) || "pequeno";
    var pronto = it.estado === "proximamente";
    return (
      '<article class="eco-item eco-mazo nivel-' + esc(nivel) + '">' +
        '<div class="eco-item-arte">' + px(NIVEL_ICONO[nivel] || "cofre", 56) + "</div>" +
        '<div class="eco-item-cuerpo"><span class="eco-nivel">' + esc({ pequeno: "Pequeño", grande: "Grande", premium: "Premium" }[nivel] || nivel) + "</span><h3>" + esc(it.titulo) + "</h3><p>" + esc(it.descripcion) + "</p></div>" +
        '<div class="eco-item-pie">' + precioHtml(it.precio) + '<div class="eco-acciones">' +
          (pronto ? '<span class="eco-pronto">Próximamente</span>' : it.tengo ? '<span class="eco-hecha">' + ic("check", 15) + "Canjeado</span>" : botonCanje(it)) +
        "</div></div>" +
      "</article>"
    );
  }

  function billeteraHtml() {
    if (!disponible()) return '<div id="eco-billetera" hidden></div>';
    if (!estado) return '<div id="eco-billetera" class="eco-billetera">' + px("moneda", 28) + "<span>Cargando tus puntos…</span></div>";
    var listas = misionesListas();
    return (
      '<div id="eco-billetera" class="eco-billetera">' + px("moneda", 30) +
        '<div><strong>' + num(estado.saldo) + " puntos</strong><span>" + (listas ? listas + (listas === 1 ? " misión lista" : " misiones listas") + " para reclamar" : "Gana más cumpliendo misiones") + "</span></div>" +
        '<a class="btn ghost sm" href="#/misiones">' + px("pergamino", 16) + "<span>Ver misiones</span></a>" +
      "</div>"
    );
  }

  function tiendaHtml() {
    if (esDemo()) {
      return '<section id="eco-tienda" class="eco-tienda"><div class="eco-nota">' + px("candado", 32) + "<p>Entra con Google para canjear puntos por temas, IA plus y mazos.</p></div></section>";
    }
    if (!estado) {
      if (error && falta(error)) return '<section id="eco-tienda" class="eco-tienda"><div class="eco-nota">' + px("candado", 32) + "<p>Los canjes con puntos todavía no están activados (falta ejecutar <code>supabase/misiones.sql</code>).</p></div></section>";
      return '<section id="eco-tienda" class="eco-tienda"></section>';
    }
    var items = estado.items || [];
    var temas = items.filter(function (i) { return i.tipo === "tema"; });
    var plus = items.filter(function (i) { return i.tipo === "ia_plus"; });
    var mazos = items.filter(function (i) { return i.tipo === "mazo" && !(i.datos && i.datos.catalog_id); });
    return (
      '<section id="eco-tienda" class="eco-tienda">' +
        (probando ? '<div class="eco-probando" role="status">' + px("paleta", 22) + "<span>Estás probando el tema <b>" + esc((item("tema:" + probando) || {}).titulo || probando) + "</b>.</span>" +
          '<button class="btn ghost sm" type="button" data-probar-tema="' + esc(probando) + '"><span>Quitar</span></button></div>' : "") +
        '<h2 class="eco-titulo">' + px("paleta", 28) + "Temas visuales</h2>" +
        '<div class="eco-grid eco-grid-temas">' + temas.map(temaHtml).join("") + "</div>" +
        (plus.length ? '<h2 class="eco-titulo">' + px("chispa", 28) + "Potenciadores</h2><div class=\"eco-grid eco-grid-plus\">" + plus.map(plusHtml).join("") + "</div>" : "") +
        (mazos.length ? '<h2 class="eco-titulo">' + px("cofre", 28) + "Mazos por puntos</h2><div class=\"eco-grid eco-grid-mazos\">" + mazos.map(mazoPuntosHtml).join("") + "</div>" : "") +
      "</section>"
    );
  }

  // Precio en puntos de un mazo del catálogo (0 si es gratis) y si ya se canjeó.
  function mazoDelCatalogo(catalogId) {
    var it = item("mazo:" + catalogId);
    if (!it || it.precio <= 0) return null;
    return it;
  }

  // ---------- acciones ----------

  function volarMonedas(desde, cantidad) {
    var destino = document.getElementById("eco-saldo-num") || document.getElementById("eco-pill");
    if (!desde || !destino || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
    var a = desde.getBoundingClientRect();
    var b = destino.getBoundingClientRect();
    var n = Math.min(10, Math.max(4, Math.round(cantidad / 20)));
    for (var i = 0; i < n; i++) {
      (function (i) {
        var m = document.createElement("img");
        m.src = "img/juego/moneda.svg?v=1";
        m.alt = "";
        m.className = "eco-moneda-vuela";
        m.style.left = a.left + a.width / 2 - 10 + (Math.random() * 40 - 20) + "px";
        m.style.top = a.top + a.height / 2 - 10 + "px";
        document.body.appendChild(m);
        setTimeout(function () {
          m.style.transform = "translate(" + (b.left + b.width / 2 - a.left - a.width / 2) + "px," + (b.top + b.height / 2 - a.top - a.height / 2) + "px) scale(0.6)";
          m.style.opacity = "0.2";
        }, 30 + i * 60);
        setTimeout(function () { if (m.parentNode) m.parentNode.removeChild(m); }, 900 + i * 60);
      })(i);
    }
  }

  function contar(el, desde, hasta) {
    if (!el) return;
    var t0 = null;
    function paso(t) {
      if (t0 === null) t0 = t;
      var k = Math.min(1, (t - t0) / 700);
      el.textContent = num(desde + (hasta - desde) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  }

  function reclamar(id, boton) {
    if (reclamando[id] || !disponible()) return;
    reclamando[id] = true;
    delete mensajes[id];
    var antes = estado ? estado.saldo : 0;
    var origen = boton ? boton.getBoundingClientRect() : null;
    pintar();
    rpc("reclamar_mision", { p_mision: id }).then(function (r) {
      delete reclamando[id];
      if (estado) estado.saldo = r.saldo;
      volarMonedas(origen ? { getBoundingClientRect: function () { return origen; } } : null, r.ganados);
      aviso("¡Ganaste " + num(r.ganados) + " puntos!");
      return cargar(true).then(function () {
        contar(document.getElementById("eco-saldo-num"), antes, r.saldo);
        var pillSaldo = document.getElementById("eco-pill-saldo");
        contar(pillSaldo, antes, r.saldo);
      });
    }, function (e) {
      delete reclamando[id];
      mensajes[id] = (e && e.message) || "No se pudo reclamar. Intenta de nuevo.";
      cargar(true);
    });
  }

  function canjear(id) {
    var it = item(id);
    if (!it || canjeando[id] || !estado) return;
    var queda = estado.saldo - it.precio;
    var hacer = function () {
      canjeando[id] = true;
      delete mensajes[id];
      pintar();
      rpc("canjear", { p_item: id }).then(function () {
        delete canjeando[id];
        if (it.tipo === "tema") {
          probando = null;
          if (window.StudappyTema) window.StudappyTema.aplicar(id);
          aviso("¡Listo! Ya tienes el tema " + it.titulo + ".");
        } else if (it.tipo === "ia_plus") {
          aviso("¡Listo! Tienes un mazo IA plus para usar en el generador.");
        } else {
          aviso("¡Listo! Canjeaste " + it.titulo + ".");
        }
        var catalogo = it.datos && it.datos.catalog_id;
        if (it.tipo === "mazo" && catalogo && window.CloudDecks) {
          window.CloudDecks.acquire(catalogo).catch(function (e) { aviso((e && e.message) || "No se pudo agregar el mazo.", "error"); });
        }
        return cargar(true);
      }, function (e) {
        delete canjeando[id];
        mensajes[id] = (e && e.message) || "No se pudo canjear. Intenta de nuevo.";
        cargar(true);
      });
    };
    if (window.StudappyConfirm) {
      window.StudappyConfirm.ask("Se descontarán " + num(it.precio) + " puntos y te quedarán " + num(queda) + ".", hacer,
        { title: "¿Canjear " + it.titulo + "?", confirmLabel: "Canjear", cancelLabel: "Cancelar", confirmClass: "primary" });
    } else {
      hacer();
    }
  }

  function usarTema(id) {
    if (!disponible()) return;
    probando = null;
    if (window.StudappyTema) window.StudappyTema.aplicar(id);
    rpc("elegir_tema", { p_tema: id }).then(function () { return cargar(true); }, function (e) {
      mensajes[id] = (e && e.message) || "No se pudo cambiar el tema.";
      cargar(true);
    });
  }

  function probarTema(id) {
    var html = document.documentElement;
    if (probando === id) {
      probando = null;
      if (window.StudappyTema) window.StudappyTema.aplicar(estado ? estado.tema : "noche");
    } else {
      probando = id;
      if (id === "noche") html.removeAttribute("data-tema");
      else html.setAttribute("data-tema", id);
    }
    pintar();
  }

  // Al salir de la tienda se deja de probar el tema.
  window.addEventListener("hashchange", function () {
    if (probando && !enRuta("tienda")) {
      probando = null;
      if (window.StudappyTema) window.StudappyTema.aplicar(estado ? estado.tema : "noche");
    }
  });

  document.addEventListener("click", function (e) {
    var t = e.target;
    var b = t.closest && t.closest("[data-reclamar]");
    if (b) { reclamar(b.getAttribute("data-reclamar"), b); return; }
    b = t.closest && t.closest("[data-canjear]");
    if (b) { canjear(b.getAttribute("data-canjear")); return; }
    b = t.closest && t.closest("[data-usar-tema]");
    if (b) { usarTema(b.getAttribute("data-usar-tema")); return; }
    b = t.closest && t.closest("[data-probar-tema]");
    if (b) { probarTema(b.getAttribute("data-probar-tema")); return; }
    if (t.closest && t.closest("[data-eco-reintentar]")) { error = null; render(); cargar(true); }
  });

  // ---------- cuándo refrescar ----------

  if (window.Auth && window.Auth.onChange) {
    window.Auth.onChange(function () {
      var uid = usuario();
      if (!uid) {
        estado = null;
        error = null;
        usuarioCargado = null;
        probando = null;
        if (window.StudappyTema && !esDemo()) window.StudappyTema.aplicar("noche");
        pintar();
        return;
      }
      if (uid !== usuarioCargado || !estado) cargar(true);
    });
  }
  // Cosas que pueden avanzar una misión.
  ["studappy:estudio-guardado", "studappy:mazos-subidos", "studappy:cloud-decks-changed", "studappy:mazo-generado"].forEach(function (ev) {
    window.addEventListener(ev, function () { refrescarPronto(1500); });
  });
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible" && Date.now() - ultimaCarga > 60000) refrescarPronto(300);
  });
  // El panel /admin cambió puntos o misiones de esta cuenta en otra pestaña.
  window.addEventListener("storage", function (e) {
    if (e.key !== "studappy-eco-cambio") return;
    sinServidor = null;
    if (disponible()) cargar(true);
  });
  // Los contadores de "se renuevan en..." y el cambio de día.
  setInterval(function () {
    if (!estado) return;
    var cambio = [estado.dia, estado.semana].some(function (p) { return new Date(p.termina).getTime() <= Date.now(); });
    if (cambio) { cargar(true); return; }
    Array.prototype.forEach.call(document.querySelectorAll(".eco-timer[data-fin]"), function (el) {
      var b2 = el.querySelector("b");
      if (b2) b2.textContent = restante(el.getAttribute("data-fin"));
    });
  }, 30000);

  if (window.Auth && window.Auth.ready && usuario()) cargar();

  window.Economia = {
    cargar: cargar,
    estado: function () { return estado; },
    render: render,
    pintarResumen: pintarResumen,
    tiendaHtml: tiendaHtml,
    billeteraHtml: billeteraHtml,
    mazoDelCatalogo: mazoDelCatalogo,
    plus: function () { return (estado && estado.plus) || { disponibles: 0 }; },
    refrescar: function () { refrescarPronto(200); },
    px: px
  };
})();
