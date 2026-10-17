// Studappy · panel /admin: regalar (o quitar) puntos a una cuenta por su
// etiqueta, como «CometaAzul#4821» (supabase/etiquetas.sql).
// admin.js la monta en la vista «Misiones y puntos» con AdminRegalos.montar.
(function () {
  "use strict";

  var A = null;      // ayudas de admin.js: { client, esc, num, ic, fechaHora }
  var raiz = null;
  var st = {
    q: "",
    resultados: null,
    buscando: false,
    elegido: null,     // { etiqueta, nombre, email, saldo }
    cantidad: 100,
    mensaje: "",
    enviando: false,
    msg: null,         // { texto, error }
    recientes: null,
    timer: null,
    pedido: 0
  };

  function esc(s) { return A.esc(s); }
  function num(n) { return A.num(n); }
  function ic(n, s) { return A.ic(n, s); }

  function px(nombre, size) {
    return '<img class="px-ico" src="img/juego/' + encodeURIComponent(nombre) + '.svg?v=1" width="' + (size || 24) + '" height="' + (size || 24) + '" alt="" decoding="async" />';
  }

  function montado() { return raiz && document.body.contains(raiz); }

  function rpc(nombre, args) {
    return A.client.rpc(nombre, args || {}).then(function (res) {
      if (res.error) throw res.error;
      return res.data;
    });
  }

  function mensajeError(e) {
    var code = (e && e.code) || "";
    var msg = (e && e.message) || "Error desconocido.";
    if (code === "PGRST202" || code === "42883" || /Could not find the function/i.test(msg)) {
      return "Falta ejecutar supabase/etiquetas.sql en Supabase (SQL Editor → New query → Run).";
    }
    return msg;
  }

  function etiquetaHtml(etq) {
    var p = String(etq || "").split("#");
    return '<span class="etq">' + esc(p[0]) + (p[1] ? "<b>#" + esc(p[1]) + "</b>" : "") + "</span>";
  }

  // ---------- datos ----------

  function buscar() {
    var q = st.q.trim();
    var token = ++st.pedido;
    if (q.length < 2) {
      st.resultados = null;
      st.buscando = false;
      pintarResultados();
      return;
    }
    st.buscando = true;
    pintarResultados();
    rpc("admin_buscar_etiquetas", { p_q: q }).then(function (r) {
      if (token !== st.pedido) return;
      st.resultados = Array.isArray(r) ? r : [];
      st.buscando = false;
      pintarResultados();
    }, function (e) {
      if (token !== st.pedido) return;
      st.resultados = [];
      st.buscando = false;
      st.msg = { texto: mensajeError(e), error: true };
      pintarResultados();
      pintarFormulario();
    });
  }

  function cargarRecientes() {
    rpc("admin_regalos_recientes").then(function (r) {
      st.recientes = Array.isArray(r) ? r : [];
      pintarRecientes();
    }, function (e) {
      st.recientes = [];
      st.msg = st.msg || { texto: mensajeError(e), error: true };
      pintarRecientes();
      pintarFormulario();
    });
  }

  function enviar() {
    if (!st.elegido || st.enviando) return;
    var n = parseInt(st.cantidad, 10);
    if (!n) {
      st.msg = { texto: "Escribe una cantidad distinta de 0 (negativa para quitar puntos).", error: true };
      pintarFormulario();
      return;
    }
    st.enviando = true;
    st.msg = null;
    pintarFormulario();
    rpc("admin_transferir_puntos", { p_etiqueta: st.elegido.etiqueta, p_cantidad: n, p_mensaje: st.mensaje }).then(function (r) {
      st.enviando = false;
      st.elegido.saldo = r.saldo;
      (st.resultados || []).forEach(function (x) { if (x.etiqueta === r.etiqueta) x.saldo = r.saldo; });
      pintarResultados();
      st.msg = { texto: (n > 0 ? "Listo: " + r.etiqueta + " recibió " + num(n) + " puntos." : "Listo: se quitaron " + num(-n) + " puntos a " + r.etiqueta + ".") + " Saldo: " + num(r.saldo) + "." };
      st.mensaje = "";
      // Si es la cuenta abierta en otra pestaña, la app se actualiza.
      try { localStorage.setItem("studappy-eco-cambio", String(Date.now())); } catch (e) { /* sin almacenamiento */ }
      pintarFormulario();
      cargarRecientes();
    }, function (e) {
      st.enviando = false;
      st.msg = { texto: mensajeError(e), error: true };
      pintarFormulario();
    });
  }

  // ---------- pintar ----------

  function pintarResultados() {
    var el = raiz && raiz.querySelector("#reg-resultados");
    if (!el) return;
    if (st.buscando) { el.innerHTML = '<p class="adm-vacio">Buscando…</p>'; return; }
    if (!st.resultados) { el.innerHTML = '<p class="adm-vacio">Escribe al menos 2 letras de la etiqueta, el nombre o el correo.</p>'; return; }
    if (!st.resultados.length) { el.innerHTML = '<p class="adm-vacio">No hay cuentas con «' + esc(st.q.trim()) + "».</p>"; return; }
    el.innerHTML = '<ul class="reg-lista">' + st.resultados.map(function (r, i) {
      var activo = st.elegido && st.elegido.etiqueta === r.etiqueta;
      return '<li><button class="reg-cuenta' + (activo ? " activo" : "") + '" type="button" data-reg-elegir="' + i + '">' +
        '<span class="reg-cuenta-etq">' + etiquetaHtml(r.etiqueta) + "</span>" +
        '<span class="reg-cuenta-info">' + esc(r.nombre || "") + (r.email ? " · " + esc(r.email) : "") + "</span>" +
        '<span class="reg-cuenta-saldo">' + px("moneda", 14) + num(r.saldo) + "</span>" +
      "</button></li>";
    }).join("") + "</ul>";
  }

  function pintarFormulario() {
    var el = raiz && raiz.querySelector("#reg-form");
    if (!el) return;
    var msg = st.msg ? '<div class="adm-aviso' + (st.msg.error ? " error" : " eco-ok") + '" role="status">' + esc(st.msg.texto) + "</div>" : "";
    if (!st.elegido) {
      el.innerHTML = msg + '<p class="adm-vacio reg-elige">' + px("regalo", 28) + "Elige una cuenta de la lista para enviarle puntos.</p>";
      return;
    }
    var e = st.elegido;
    var n = parseInt(st.cantidad, 10) || 0;
    el.innerHTML =
      msg +
      '<div class="reg-destino">' + px("regalo", 32) +
        '<div><span class="reg-para">Para</span><strong>' + etiquetaHtml(e.etiqueta) + "</strong><small>" + esc(e.nombre || "") + " · saldo " + num(e.saldo) + " pts</small></div>" +
      "</div>" +
      '<form id="reg-enviar" class="reg-campos" autocomplete="off">' +
        '<label class="reg-campo"><span>Puntos</span>' +
          '<input id="reg-cantidad" type="number" step="1" min="-100000" max="100000" value="' + esc(st.cantidad) + '" />' +
        "</label>" +
        '<div class="reg-rapidos">' + [50, 100, 250, 500].map(function (v) {
          return '<button class="btn ghost sm" type="button" data-reg-rapido="' + v + '">+' + num(v) + "</button>";
        }).join("") + "</div>" +
        '<label class="reg-campo reg-campo-msg"><span>Mensaje <small>(lo ve en sus movimientos)</small></span>' +
          '<input id="reg-mensaje" type="text" maxlength="80" placeholder="Ej. ¡Ganaste el concurso de la semana!" value="' + esc(st.mensaje) + '" />' +
        "</label>" +
        '<button class="btn primary" type="submit"' + (st.enviando ? " disabled" : "") + ">" + px("moneda", 16) +
          "<span>" + (st.enviando ? "Enviando…" : n < 0 ? "Quitar " + num(-n) + " puntos" : "Enviar " + num(n) + " puntos") + "</span></button>" +
      "</form>";
  }

  function pintarRecientes() {
    var el = raiz && raiz.querySelector("#reg-recientes");
    if (!el) return;
    if (!st.recientes) { el.innerHTML = '<p class="adm-vacio">Cargando…</p>'; return; }
    if (!st.recientes.length) { el.innerHTML = '<p class="adm-vacio">Todavía no has regalado puntos.</p>'; return; }
    el.innerHTML = '<ul class="eco-movs">' + st.recientes.map(function (r) {
      return "<li><span>" + etiquetaHtml(r.etiqueta || "(cuenta borrada)") + (r.mensaje ? " · " + esc(r.mensaje) : "") +
        " <small>" + esc(A.fechaHora ? A.fechaHora(r.creado) : r.creado) + "</small></span>" +
        '<b class="' + (r.cantidad > 0 ? "mas" : "menos") + '">' + (r.cantidad > 0 ? "+" : "−") + num(Math.abs(r.cantidad)) + "</b></li>";
    }).join("") + "</ul>";
  }

  function html() {
    return (
      '<section class="adm-card eco-adm reg-card" id="reg-card">' +
        '<header class="adm-card-head">' +
          '<div class="eco-adm-tit">' + px("regalo", 40) + "<div><h2>Regalar puntos</h2>" +
            '<p class="adm-card-sub">Busca a alguien por su etiqueta (como CometaAzul#4821), su nombre o su correo y envíale puntos. Con una cantidad negativa se los quitas.</p></div></div>' +
        "</header>" +
        '<div class="reg-grid">' +
          "<div>" +
            '<label class="adm-buscar reg-buscar">' + ic("search", 15) + '<input id="reg-q" type="search" placeholder="Etiqueta, nombre o correo" autocomplete="off" /></label>' +
            '<div id="reg-resultados"></div>' +
          "</div>" +
          '<div id="reg-form"></div>' +
        "</div>" +
        '<h3 class="adm-sub-titulo">Últimos regalos</h3>' +
        '<div id="reg-recientes"></div>' +
      "</section>"
    );
  }

  // ---------- eventos ----------

  document.addEventListener("input", function (e) {
    if (!montado()) return;
    if (e.target.id === "reg-q") {
      st.q = e.target.value;
      clearTimeout(st.timer);
      st.timer = setTimeout(buscar, 250);
    } else if (e.target.id === "reg-cantidad") {
      st.cantidad = e.target.value;
      var btn = raiz.querySelector('#reg-enviar button[type="submit"] span');
      var n = parseInt(st.cantidad, 10) || 0;
      if (btn && !st.enviando) btn.textContent = n < 0 ? "Quitar " + num(-n) + " puntos" : "Enviar " + num(n) + " puntos";
    } else if (e.target.id === "reg-mensaje") {
      st.mensaje = e.target.value;
    }
  });

  document.addEventListener("click", function (e) {
    if (!montado() || !e.target.closest) return;
    var b = e.target.closest("[data-reg-elegir]");
    if (b) {
      st.elegido = st.resultados[parseInt(b.getAttribute("data-reg-elegir"), 10)] || null;
      st.msg = null;
      pintarResultados();
      pintarFormulario();
      var c = raiz.querySelector("#reg-cantidad");
      if (c) c.focus();
      return;
    }
    b = e.target.closest("[data-reg-rapido]");
    if (b) {
      st.cantidad = b.getAttribute("data-reg-rapido");
      pintarFormulario();
    }
  });

  document.addEventListener("submit", function (e) {
    if (!montado() || e.target.id !== "reg-enviar") return;
    e.preventDefault();
    enviar();
  });

  window.AdminRegalos = {
    montar: function (contenedor, ayudas) {
      A = ayudas;
      raiz = document.createElement("div");
      raiz.innerHTML = html();
      contenedor.insertBefore(raiz, contenedor.firstChild);
      pintarResultados();
      pintarFormulario();
      cargarRecientes();
    },
    estado: function () { return st; }
  };
})();
