// Studappy · panel /admin, vista «Misiones y puntos».
//
// - Diagnóstico automático: admin_economia_diagnostico() revisa todo en el
//   servidor y simula el recorrido completo con la cuenta del admin; la
//   simulación se deshace, así que no cambia nada.
// - Herramientas para probar a mano en la cuenta del admin: darse puntos,
//   completar misiones y reiniciar (supabase/admin-economia.sql).
// admin.js la monta con AdminEconomia.montar(contenedor, ayudas).
(function () {
  "use strict";

  var GRUPOS = [
    { id: "Instalación", desc: "Tablas, funciones, permisos y seguridad", icono: "candado" },
    { id: "Misiones", desc: "Catálogo, períodos y rotación", icono: "pergamino" },
    { id: "Tienda", desc: "Temas, IA plus y mazos por puntos", icono: "cofre" },
    { id: "Datos guardados", desc: "Saldos, reclamos y canjes de todos los usuarios", icono: "moneda" },
    { id: "Simulación", desc: "Recorrido completo con tu cuenta (se deshace al final)", icono: "chispa" }
  ];
  var REINICIOS = [
    { id: "misiones", label: "Misiones", desc: "Borra lo reclamado y el progreso extra: podrás reclamarlas otra vez." },
    { id: "canjes", label: "Canjes", desc: "Devuelve los puntos de tus canjes y vuelve al tema Noche." },
    { id: "puntos", label: "Saldo en 0", desc: "Deja tus puntos en 0 (no toca misiones ni canjes)." },
    { id: "todo", label: "Todo", desc: "Cuenta como nueva: sin puntos, canjes, misiones ni historial." }
  ];

  var A = null;      // ayudas de admin.js: { client, esc, num, ic, fechaHora, email }
  var raiz = null;
  var st = {
    diag: null,
    diagError: null,
    corriendo: false,
    eco: null,
    ecoError: null,
    ocupado: null,      // acción en curso
    confirmar: null,    // reinicio que espera confirmación
    confirmarTimer: null,
    msg: null,          // { texto, error }
    pedido: 0
  };

  // ---------- utilidades ----------

  function esc(s) { return A.esc(s); }
  function num(n) { return A.num(n); }
  function ic(n, s) { return A.ic(n, s); }

  function px(nombre, size) {
    var src = nombre === "matraz" ? "img/quimica/matraz.svg" : "img/juego/" + encodeURIComponent(nombre) + ".svg";
    size = size || 24;
    return '<img class="px-ico" src="' + src + '?v=1" width="' + size + '" height="' + size + '" alt="" decoding="async" />';
  }

  function errorDe(nombre, e) {
    var code = (e && e.code) || "";
    var msg = (e && e.message) || "Error desconocido.";
    var err;
    if (code === "PGRST202" || code === "42883" || /Could not find the function/i.test(msg)) {
      err = new Error("Falta ejecutar supabase/" + (/^admin_economia/.test(nombre) ? "admin-economia.sql" : "misiones.sql") + " en Supabase (SQL Editor → New query → Run).");
      err.falta = true;
      return err;
    }
    if (code === "42501" || /No autorizado/i.test(msg)) return new Error("Tu cuenta no tiene acceso a estas herramientas.");
    if (/Failed to fetch|NetworkError|network/i.test(msg)) return new Error("No se pudo conectar. Revisa tu conexión.");
    return new Error(msg);
  }

  function rpc(nombre, args) {
    return A.client.rpc(nombre, args || {}).then(function (res) {
      if (res.error) throw errorDe(nombre, res.error);
      return res.data;
    });
  }

  // Avisa a las pestañas de Studappy abiertas para que recarguen los puntos.
  function avisarApp() {
    try { localStorage.setItem("studappy-eco-cambio", String(Date.now())); } catch (e) { /* sin almacenamiento */ }
  }

  function montado() { return raiz && document.body.contains(raiz); }

  // ---------- diagnóstico ----------

  function correrDiagnostico() {
    if (st.corriendo) return;
    st.corriendo = true;
    st.diagError = null;
    pintarDiag();
    var inicio = Date.now();
    rpc("admin_economia_diagnostico").then(function (d) {
      st.diag = d;
    }, function (e) {
      st.diagError = e.message;
    }).then(function () {
      // Un mínimo de tiempo para que se note que corrió.
      setTimeout(function () {
        st.corriendo = false;
        if (!montado()) return;
        pintarDiag();
        var r = document.getElementById("eco-diag-resumen");
        if (r) r.focus();
        cargarEco();
      }, Math.max(0, 450 - (Date.now() - inicio)));
    });
  }

  function chkHtml(c) {
    return '<li class="eco-chk ' + (c.ok ? "ok" : "mal") + '">' +
      '<span class="eco-chk-ico" aria-hidden="true">' + ic(c.ok ? "check" : "x", 14) + "</span>" +
      '<div><b>' + esc(c.nombre) + '</b><span class="sr-only">' + (c.ok ? ": funciona" : ": falla") + "</span>" +
      (c.detalle ? "<p>" + esc(c.detalle) + "</p>" : "") + "</div></li>";
  }

  function grupoHtml(g, checks) {
    var lista = checks.filter(function (c) { return c.grupo === g.id; });
    if (!lista.length) return "";
    var malos = lista.filter(function (c) { return !c.ok; }).length;
    return '<details class="eco-grupo ' + (malos ? "mal" : "ok") + '"' + (malos ? " open" : "") + ' data-grupo="' + esc(g.id) + '">' +
      "<summary>" +
        '<span class="eco-grupo-ico">' + px(g.icono, 26) + "</span>" +
        '<span class="eco-grupo-txt"><b>' + esc(g.id) + "</b><small>" + esc(g.desc) + "</small></span>" +
        '<span class="eco-grupo-cuenta">' + (malos ? malos + (malos === 1 ? " falla" : " fallas") : ic("check", 14) + (lista.length + "/" + lista.length)) + "</span>" +
        '<span class="eco-grupo-flecha" aria-hidden="true">' + ic("chevronRight", 16) + "</span>" +
      "</summary>" +
      '<ul class="eco-chks">' + lista.map(chkHtml).join("") + "</ul>" +
    "</details>";
  }

  function pintarDiag() {
    var el = document.getElementById("eco-diag-cuerpo");
    var btn = document.getElementById("eco-diag-run");
    if (!el) return;
    if (btn) {
      btn.disabled = st.corriendo;
      btn.innerHTML = st.corriendo ? '<span class="eco-giro" aria-hidden="true"></span><span>Probando…</span>' : ic("play", 15) + "<span>" + (st.diag ? "Ejecutar de nuevo" : "Ejecutar diagnóstico") + "</span>";
    }
    if (st.corriendo) {
      el.innerHTML = '<div class="eco-diag-corriendo" role="status"><div class="eco-pixbar" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><p>Simulando misiones, canjes, temas e IA plus con tu cuenta…</p></div>';
      return;
    }
    if (st.diagError) {
      el.innerHTML = '<div class="adm-aviso error" role="alert">' + esc(st.diagError) + "</div>";
      return;
    }
    var d = st.diag;
    if (!d) {
      el.innerHTML = '<div class="eco-diag-vacio">' + px("bandera", 32) + "<p>Aún no lo ejecutas. Tarda menos de un segundo y <b>no cambia nada</b>: la simulación se deshace al terminar.</p></div>";
      return;
    }
    var checks = d.checks || [];
    var buenos = checks.filter(function (c) { return c.ok; }).length;
    el.innerHTML =
      '<div class="eco-diag-resumen ' + (d.ok ? "ok" : "mal") + '" id="eco-diag-resumen" tabindex="-1" role="status">' +
        '<span class="eco-diag-sello">' + px(d.ok ? "trofeo" : "llama", 40) + "</span>" +
        "<div><strong>" + (d.ok ? "Todo funciona" : (d.fallas === 1 ? "Hay 1 problema" : "Hay " + num(d.fallas) + " problemas")) + "</strong>" +
        "<span>" + num(buenos) + " de " + num(checks.length) + " revisiones OK · " + num(d.ms) + " ms · " + esc(A.fechaHora(d.ahora)) + "</span></div>" +
      "</div>" +
      '<div class="eco-grupos">' + GRUPOS.map(function (g) { return grupoHtml(g, checks); }).join("") + "</div>";
  }

  // ---------- tu cuenta ----------

  function cargarEco() {
    var token = ++st.pedido;
    return rpc("economia_estado").then(function (e) {
      if (token !== st.pedido) return;
      st.eco = e;
      st.ecoError = null;
    }, function (e) {
      if (token !== st.pedido) return;
      st.ecoError = e;
    }).then(function () {
      if (token === st.pedido && montado()) pintarCuenta();
    });
  }

  function accion(nombre, rpcNombre, args, exito) {
    if (st.ocupado) return;
    st.ocupado = nombre;
    st.msg = null;
    pintarCuenta();
    rpc(rpcNombre, args).then(function (r) {
      st.msg = { texto: exito(r) };
      avisarApp();
    }, function (e) {
      st.msg = { texto: e.message, error: true };
    }).then(function () {
      st.ocupado = null;
      return cargarEco();
    });
  }

  function puntos(n) {
    if (!n) return;
    accion("puntos", "admin_economia_puntos", { p_cantidad: n }, function (r) {
      return (r.cambio > 0 ? "+" : "−") + num(Math.abs(r.cambio)) + " puntos · saldo " + num(r.saldo);
    });
  }

  function completar(id, titulo) {
    accion("completar:" + id, "admin_economia_completar", { p_mision: id }, function (r) {
      return "«" + titulo + "» quedó lista: reclama +" + num(r.reclamable) + " en Misiones.";
    });
  }

  function reiniciar(id) {
    var op = REINICIOS.filter(function (o) { return o.id === id; })[0];
    if (!op) return;
    if (st.confirmar !== id) {
      st.confirmar = id;
      clearTimeout(st.confirmarTimer);
      st.confirmarTimer = setTimeout(function () { st.confirmar = null; if (montado()) pintarCuenta(); }, 5000);
      pintarCuenta();
      var b = document.querySelector('[data-eco-reiniciar="' + id + '"]');
      if (b) b.focus();
      return;
    }
    st.confirmar = null;
    clearTimeout(st.confirmarTimer);
    accion("reiniciar:" + id, "admin_economia_reiniciar", { p_que: id }, function (r) {
      return "Reiniciado: " + op.label.toLowerCase() + " · saldo " + num(r.saldo);
    });
  }

  function titulo(id) {
    var it = ((st.eco && st.eco.items) || []).filter(function (i) { return i.id === id; })[0];
    return it ? it.titulo : id;
  }

  function movTexto(m) {
    if (m.motivo === "mision") {
      var id = String(m.ref || "").split("@")[0];
      var mi = ((st.eco && st.eco.misiones) || []).filter(function (x) { return x.id === id; })[0];
      return "Misión: " + (mi ? mi.titulo : id);
    }
    if (m.motivo === "canje") return "Canje: " + titulo(m.ref);
    if (m.ref === "admin-prueba") return "Ajuste de prueba";
    if (m.ref === "admin-reinicio") return "Reinicio de prueba";
    return "Regalo de Studappy";
  }

  function misionHtml(m) {
    var meta = Number(m.meta) || 1;
    var prog = Math.min(Number(m.progreso) || 0, meta);
    var pct = Math.round((prog / meta) * 100);
    var ocupada = st.ocupado === "completar:" + m.id;
    var lado;
    if (m.completa) {
      lado = '<span class="eco-est hecha">' + ic("check", 14) + "Reclamada</span>";
    } else if (m.reclamable > 0 && prog >= meta) {
      lado = '<span class="eco-est lista">' + px("moneda", 14) + "Lista: +" + num(m.reclamable) + "</span>";
    } else {
      lado = '<button class="btn sm" type="button" data-eco-completar="' + esc(m.id) + '"' + (st.ocupado ? " disabled" : "") + ">" +
        (ocupada ? '<span class="eco-giro" aria-hidden="true"></span>' : ic("bolt", 14)) + "<span>Completar</span></button>";
      if (m.reclamable > 0) lado = '<span class="eco-est lista">' + px("moneda", 14) + "+" + num(m.reclamable) + "</span>" + lado;
    }
    return '<li class="eco-mi">' +
      '<span class="eco-mi-ico">' + px(m.icono, 28) + "</span>" +
      '<div class="eco-mi-txt"><div class="eco-mi-tit"><b>' + esc(m.titulo) + '</b><span class="eco-chip">' + (m.tipo === "semanal" ? "Semanal" : "Diaria") + "</span></div>" +
        '<div class="eco-mi-barra" role="img" aria-label="' + prog + " de " + meta + '"><i style="width:' + pct + '%"></i></div>' +
        "<small>" + num(prog) + " / " + num(meta) + " · " + num(m.total) + " pts</small></div>" +
      '<div class="eco-mi-lado">' + lado + "</div>" +
    "</li>";
  }

  function pintarCuenta() {
    var el = document.getElementById("eco-cuenta-cuerpo");
    if (!el) return;
    var e = st.eco;
    if (st.ecoError && !e) {
      el.innerHTML = '<div class="adm-aviso error" role="alert">' + esc(st.ecoError.message) + "</div>";
      return;
    }
    if (!e) {
      el.innerHTML = '<p class="adm-vacio">Cargando tu cuenta…</p>';
      return;
    }
    var temas = (e.items || []).filter(function (i) { return i.tipo === "tema"; });
    var tema = temas.filter(function (i) { return i.id === e.tema; })[0];
    var plus = (e.plus && e.plus.disponibles) || 0;
    var ocupado = !!st.ocupado;
    var dis = ocupado ? " disabled" : "";
    var misiones = e.misiones || [];

    el.innerHTML =
      (st.msg ? '<div class="adm-aviso' + (st.msg.error ? " error" : " eco-ok") + '" role="status">' + esc(st.msg.texto) + "</div>" : "") +
      '<div class="eco-cuenta-top">' +
        '<div class="eco-saldo">' + px("moneda", 34) +
          '<div><strong id="eco-adm-saldo">' + num(e.saldo) + "</strong><span>puntos</span></div>" +
          '<ul class="eco-saldo-extra"><li>' + px("paleta", 14) + "Tema: <b>" + esc(tema ? tema.titulo : "Noche") + "</b></li>" +
          "<li>" + px("chispa", 14) + "IA plus: <b>" + num(plus) + (plus === 1 ? " disponible" : " disponibles") + "</b></li>" +
          "<li>" + px("cofre", 14) + "Temas: <b>" + num(temas.filter(function (t) { return t.tengo; }).length) + " de " + num(temas.length) + "</b></li></ul>" +
        "</div>" +
        '<div class="eco-puntos">' +
          "<h3>Puntos</h3>" +
          '<div class="eco-botones">' +
            [100, 500, 1000].map(function (n) { return '<button class="btn sm" type="button" data-eco-puntos="' + n + '"' + dis + ">+" + num(n) + "</button>"; }).join("") +
            '<button class="btn ghost sm" type="button" data-eco-puntos="-100"' + dis + ">−100</button>" +
          "</div>" +
          '<form class="eco-otro" id="eco-otro"><label><span class="sr-only">Otra cantidad</span><input id="eco-otro-n" type="number" inputmode="numeric" step="1" min="-100000" max="100000" placeholder="Otra cantidad (ej. 350 o -50)" /></label>' +
          '<button class="btn ghost sm" type="submit"' + dis + ">Aplicar</button></form>" +
          '<p class="adm-nota">Los ajustes quedan como «Ajuste de prueba» y el saldo nunca baja de 0.</p>' +
        "</div>" +
      "</div>" +
      '<h3 class="adm-sub-titulo">Misiones de hoy y de esta semana</h3>' +
      (misiones.length ? '<ul class="eco-mis">' + misiones.map(misionHtml).join("") + "</ul>" : '<p class="adm-vacio">No hay misiones activas.</p>') +
      '<p class="adm-nota">«Completar» suma el progreso que falta solo en tu cuenta. Después reclámala en la app para ver la animación de monedas.</p>' +
      '<h3 class="adm-sub-titulo">Reiniciar</h3>' +
      '<div class="eco-reinicios">' + REINICIOS.map(function (o) {
        var conf = st.confirmar === o.id;
        return '<div class="eco-reinicio' + (conf ? " confirmar" : "") + '">' +
          '<button class="btn ' + (conf ? "danger" : "ghost") + ' sm" type="button" data-eco-reiniciar="' + o.id + '"' + dis + ">" +
            (st.ocupado === "reiniciar:" + o.id ? '<span class="eco-giro" aria-hidden="true"></span>' : ic("refresh", 14)) +
            "<span>" + (conf ? "¿Seguro? Toca otra vez" : esc(o.label)) + "</span></button>" +
          "<small>" + esc(o.desc) + "</small></div>";
      }).join("") + "</div>" +
      '<h3 class="adm-sub-titulo">Últimos movimientos</h3>' +
      ((e.movimientos || []).length
        ? '<ul class="eco-movs">' + e.movimientos.map(function (m) {
            return "<li><span>" + esc(movTexto(m)) + "<small>" + esc(A.fechaHora(m.creado)) + "</small></span>" +
              '<b class="' + (m.cantidad > 0 ? "mas" : "menos") + '">' + (m.cantidad > 0 ? "+" : "−") + num(Math.abs(m.cantidad)) + "</b></li>";
          }).join("") + "</ul>"
        : '<p class="adm-vacio">Sin movimientos todavía.</p>');
  }

  // ---------- estructura ----------

  function html() {
    var email = A.email || "";
    return (
      '<section class="adm-card eco-adm" id="eco-diag">' +
        '<header class="adm-card-head">' +
          '<div class="eco-adm-tit">' + px("trofeo", 40) + "<div><h2>Diagnóstico automático</h2>" +
            '<p class="adm-card-sub">Revisa la instalación, el catálogo, los datos de todos los usuarios y simula el recorrido completo con tu cuenta: estudiar, reclamar, canjear temas e IA plus.</p></div></div>' +
          '<button class="btn primary" id="eco-diag-run" type="button"></button>' +
        "</header>" +
        '<div id="eco-diag-cuerpo"></div>' +
      "</section>" +
      '<section class="adm-card eco-adm" id="eco-cuenta">' +
        '<header class="adm-card-head">' +
          '<div class="eco-adm-tit">' + px("estrella", 40) + "<div><h2>Tu cuenta de prueba</h2>" +
            '<p class="adm-card-sub">Estas herramientas cambian solo tu cuenta' + (email ? " (" + esc(email) + ")" : "") + ". Úsalas para probar la app a mano.</p></div></div>" +
          '<div class="eco-links">' +
            '<a class="btn ghost sm" href="/#/misiones" target="_blank" rel="noopener">' + px("bandera", 14) + "<span>Abrir Misiones</span></a>" +
            '<a class="btn ghost sm" href="/#/tienda" target="_blank" rel="noopener">' + px("cofre", 14) + "<span>Abrir Tienda</span></a>" +
            '<button class="btn ghost sm" id="eco-recargar" type="button">' + ic("refresh", 14) + "<span>Actualizar</span></button>" +
          "</div>" +
        "</header>" +
        '<div id="eco-cuenta-cuerpo"></div>' +
      "</section>"
    );
  }

  document.addEventListener("click", function (ev) {
    if (!montado()) return;
    var t = ev.target;
    if (t.closest("#eco-diag-run")) { correrDiagnostico(); return; }
    if (t.closest("#eco-recargar")) { st.msg = null; cargarEco(); return; }
    var b = t.closest("[data-eco-puntos]");
    if (b) { puntos(parseInt(b.getAttribute("data-eco-puntos"), 10)); return; }
    b = t.closest("[data-eco-completar]");
    if (b) {
      var id = b.getAttribute("data-eco-completar");
      var m = ((st.eco && st.eco.misiones) || []).filter(function (x) { return x.id === id; })[0];
      completar(id, m ? m.titulo : id);
      return;
    }
    b = t.closest("[data-eco-reiniciar]");
    if (b) { reiniciar(b.getAttribute("data-eco-reiniciar")); }
  });

  document.addEventListener("submit", function (ev) {
    if (!montado() || ev.target.id !== "eco-otro") return;
    ev.preventDefault();
    var n = parseInt((document.getElementById("eco-otro-n") || {}).value, 10);
    if (!n) {
      st.msg = { texto: "Escribe una cantidad distinta de 0 (puede ser negativa).", error: true };
      pintarCuenta();
      return;
    }
    puntos(n);
  });

  window.AdminEconomia = {
    montar: function (contenedor, ayudas) {
      A = ayudas;
      raiz = contenedor;
      raiz.innerHTML = html();
      pintarDiag();
      pintarCuenta();
      cargarEco();
    },
    // Para pruebas.
    estado: function () { return st; }
  };
})();
