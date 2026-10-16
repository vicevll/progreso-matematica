// Sincroniza con Supabase los mazos propios y el avance de estudio de la
// cuenta activa (tablas de supabase/mazos.sql).
//
// Orden: primero descarga y fusiona (gana el cambio más reciente), después
// sube lo que quedó pendiente. Si no hay conexión, todo sigue funcionando con
// la copia local y se reintenta al volver la conexión o al volver a la pestaña.
(function () {
  var TABLA_MAZOS = "mazos_propios";
  var TABLA_PROGRESO = "progreso_usuario";
  var REFRESCO_MS = 60000;

  var userId = null;
  var cargando = false;
  var sinTablas = false;
  var avisoMostrado = false;
  var ultimaSync = 0;
  var subiendo = null;
  var repetirSubida = false;
  var timerMazos = null;
  var timerProgreso = null;

  function client() {
    return window.SB && window.SB.client;
  }

  function activo() {
    return !!(userId && client() && !sinTablas);
  }

  function check(result) {
    if (result && result.error) throw result.error;
    return result ? result.data : null;
  }

  function tablaFalta(error) {
    var code = error && error.code;
    var msg = String((error && error.message) || "").toLowerCase();
    return code === "42P01" || code === "PGRST205" || msg.indexOf("could not find the table") !== -1;
  }

  function avisar(error) {
    if (tablaFalta(error)) {
      sinTablas = true;
      if (window.console) console.warn("Studappy: falta ejecutar supabase/mazos.sql; los mazos quedan solo en este navegador.");
      if (!avisoMostrado && window.Novedades) {
        avisoMostrado = true;
        window.Novedades.notifyError("Tus mazos se están guardando solo en este navegador: falta ejecutar supabase/mazos.sql en Supabase.");
      }
      return;
    }
    if (window.console) console.error("No se pudo sincronizar con tu cuenta:", error);
    if (!avisoMostrado && window.Novedades) {
      avisoMostrado = true;
      window.Novedades.notifyError("No hay conexión con tu cuenta. Tus cambios quedan guardados en este navegador y se subirán cuando vuelva la conexión.");
    }
  }

  function emitir(nombre) {
    window.dispatchEvent(new CustomEvent(nombre));
  }

  function setCargando(valor) {
    if (cargando === valor) return;
    cargando = valor;
    emitir("studappy:mazos-cargando");
  }

  function firma(lista) {
    return JSON.stringify(lista.map(function (d) { return [d.id, d.actualizado, d.nombre, d.descripcion, d.color, d.cards]; }));
  }

  /* ---------- Mazos ---------- */

  function descargarMazos() {
    if (!activo()) return Promise.resolve(false);
    var uidActual = userId;
    return client()
      .from(TABLA_MAZOS)
      .select("id,nombre,descripcion,color,cards,actualizado")
      .eq("user_id", uidActual)
      .order("creado_en", { ascending: true })
      .then(check)
      .then(function (rows) {
        if (userId !== uidActual) return false;
        var pend = window.DeckStore.pending();
        var locales = window.DeckStore.all().filter(function (d) { return d.origen !== "tienda"; });
        var remotos = {};
        (rows || []).forEach(function (r) { remotos[r.id] = r; });

        var resultado = [];
        var aLimpiar = [];
        var usados = {};
        function desdeRemoto(r) {
          return { id: r.id, nombre: r.nombre, descripcion: r.descripcion, color: r.color, cards: r.cards || [], actualizado: Number(r.actualizado) || 0, origen: "local" };
        }

        // Mantiene el orden local para los mazos que ya estaban aquí.
        locales.forEach(function (local) {
          var r = remotos[local.id];
          usados[local.id] = true;
          if (!r) {
            // No está en la nube: nuevo sin subir, o borrado desde otro dispositivo.
            if (pend[local.id] === "guardar") resultado.push(local);
            return;
          }
          if (pend[local.id] === "guardar" && local.actualizado >= (Number(r.actualizado) || 0)) {
            resultado.push(local); // el cambio local es más nuevo: se subirá
            return;
          }
          if (pend[local.id] === "guardar") aLimpiar.push(r); // ganó el remoto
          resultado.push(desdeRemoto(r));
        });
        // Mazos creados en otros dispositivos.
        (rows || []).forEach(function (r) {
          if (usados[r.id] || pend[r.id] === "borrar") return;
          resultado.push(desdeRemoto(r));
        });

        var cambio = firma(resultado) !== firma(locales);
        if (cambio) window.DeckStore.applyOwnDecks(resultado);
        aLimpiar.forEach(function (r) { window.DeckStore.markSynced(r.id, "guardar", Number(r.actualizado) || 0); });
        return cambio;
      });
  }

  function fila(deck) {
    return {
      user_id: userId,
      id: deck.id,
      nombre: deck.nombre,
      descripcion: deck.descripcion,
      color: deck.color,
      cards: deck.cards,
      actualizado: deck.actualizado
    };
  }

  function subirMazos() {
    if (!activo()) return Promise.resolve(false);
    if (subiendo) {
      repetirSubida = true;
      return subiendo;
    }
    var uidActual = userId;
    var pend = window.DeckStore.pending();
    var guardar = [];
    var borrar = [];
    Object.keys(pend).forEach(function (id) {
      if (pend[id] === "borrar") {
        borrar.push(id);
        return;
      }
      var deck = window.DeckStore.get(id);
      if (deck && deck.origen !== "tienda") guardar.push(deck);
      else window.DeckStore.markSynced(id, "guardar", undefined);
    });
    if (!guardar.length && !borrar.length) return Promise.resolve(true);

    var tareas = [];
    if (guardar.length) {
      var versiones = guardar.map(function (d) { return { id: d.id, actualizado: d.actualizado }; });
      tareas.push(
        client().from(TABLA_MAZOS).upsert(guardar.map(fila), { onConflict: "user_id,id" }).then(check).then(function () {
          if (userId !== uidActual) return;
          versiones.forEach(function (v) { window.DeckStore.markSynced(v.id, "guardar", v.actualizado); });
          emitir("studappy:mazos-subidos"); // puede completar una misión (js/economia.js)
        })
      );
    }
    if (borrar.length) {
      tareas.push(
        client().from(TABLA_MAZOS).delete().eq("user_id", uidActual).in("id", borrar).then(check).then(function () {
          if (userId !== uidActual) return;
          borrar.forEach(function (id) { window.DeckStore.markSynced(id, "borrar"); });
        })
      );
    }

    subiendo = Promise.all(tareas)
      .then(function () { return true; }, function (error) { avisar(error); return false; })
      .then(function (ok) {
        subiendo = null;
        var otraVez = repetirSubida && ok;
        repetirSubida = false;
        return otraVez ? subirMazos() : ok;
      });
    return subiendo;
  }

  /* ---------- Avance ---------- */

  function subirProgreso() {
    if (!activo()) return Promise.resolve(false);
    var uidActual = userId;
    var estado = window.DeckStore.progressState();
    return client()
      .from(TABLA_PROGRESO)
      .upsert({ user_id: uidActual, datos: estado.datos, actualizado: estado.actualizado }, { onConflict: "user_id" })
      .then(check)
      .then(function () {
        if (userId === uidActual) window.DeckStore.markProgressSynced(estado.actualizado);
        return true;
      });
  }

  function sincronizarProgreso() {
    if (!activo()) return Promise.resolve(false);
    var uidActual = userId;
    return client()
      .from(TABLA_PROGRESO)
      .select("datos,actualizado")
      .eq("user_id", uidActual)
      .maybeSingle()
      .then(check)
      .then(function (row) {
        if (userId !== uidActual) return false;
        var local = window.DeckStore.progressState();
        var remoto = row ? Number(row.actualizado) || 0 : 0;
        if (row && remoto > local.actualizado) {
          window.DeckStore.applyProgress(row.datos, remoto);
          return true;
        }
        if (local.pendiente || (!row && local.actualizado)) return subirProgreso().then(function () { return false; });
        return false;
      });
  }

  /* ---------- Ciclo completo ---------- */

  function sincronizar() {
    if (!activo()) return Promise.resolve();
    ultimaSync = Date.now();
    var cambioMazos = false;
    return descargarMazos()
      .then(function (cambio) { cambioMazos = cambio; return subirMazos(); })
      .then(sincronizarProgreso)
      .then(function (cambioProgreso) {
        if (cambioMazos || cambioProgreso) emitir("studappy:mazos-sincronizados");
      })
      .catch(avisar);
  }

  function programarMazos() {
    if (!activo()) return;
    clearTimeout(timerMazos);
    timerMazos = setTimeout(function () { subirMazos(); }, 600);
  }

  function programarProgreso() {
    if (!activo() || !window.DeckStore.progressState().pendiente) return;
    clearTimeout(timerProgreso);
    timerProgreso = setTimeout(function () { subirProgreso().catch(avisar); }, 2500);
  }

  /* ---------- Mazos de versiones anteriores ---------- */

  function ofrecerLegado() {
    var data = window.DeckStore.legacy();
    if (!data.decks.length) {
      window.DeckStore.clearLegacy();
      return;
    }
    if (!window.StudappyConfirm) return;
    var n = data.decks.length;
    window.StudappyConfirm.ask(
      "Encontramos " + n + (n === 1 ? " mazo creado" : " mazos creados") +
        " en este navegador antes de que se guardaran en las cuentas. ¿Quieres agregarlos a tu cuenta para no perderlos?",
      function () {
        window.DeckStore.importLegacy(data);
        window.DeckStore.clearLegacy();
        emitir("studappy:mazos-sincronizados"); // redibuja Mis mazos de inmediato
        sincronizar();
      },
      { title: "Mazos guardados en este navegador", confirmLabel: "Agregar a mi cuenta", cancelLabel: "Ahora no", confirmClass: "primary" }
    );
  }

  /* ---------- Sesión ---------- */

  function alCambiarSesion(session) {
    var nuevo = session && session.user && !session.demo ? String(session.user.id) : null;
    if (nuevo === userId) {
      if (nuevo && Date.now() - ultimaSync > REFRESCO_MS) sincronizar();
      return;
    }
    userId = nuevo;
    sinTablas = false;
    avisoMostrado = false;
    clearTimeout(timerMazos);
    clearTimeout(timerProgreso);
    if (!userId) {
      setCargando(false);
      return;
    }
    setCargando(true);
    sincronizar().then(function () { setCargando(false); });
    ofrecerLegado();
  }

  // Sube lo pendiente (máximo unos segundos), cierra la sesión y, si todo
  // quedó en la nube, borra la copia local de esta cuenta.
  function salir() {
    var id = userId;
    var subir = activo()
      ? Promise.race([
          subirMazos().then(function () {
            return window.DeckStore.progressState().pendiente ? subirProgreso().catch(function () {}) : null;
          }),
          new Promise(function (resolve) { setTimeout(resolve, 4000); })
        ])
      : Promise.resolve();
    return subir.then(function () {
      var limpio = !Object.keys(window.DeckStore.pending()).length && !window.DeckStore.progressState().pendiente;
      return Promise.resolve(window.SB && window.SB.signOut ? window.SB.signOut() : null).then(function () {
        if (id && limpio && !sinTablas) window.DeckStore.forgetAccount(id);
      });
    });
  }

  window.SyncMazos = {
    sincronizar: sincronizar,
    salir: salir,
    cargando: function () { return cargando; }
  };

  window.DeckStore.onChange(programarMazos);
  window.DeckStore.onProgressChange(programarProgreso);
  window.addEventListener("online", function () { sincronizar(); });
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible" && userId && Date.now() - ultimaSync > REFRESCO_MS) sincronizar();
  });

  if (window.Auth && window.Auth.onChange) {
    window.Auth.onChange(alCambiarSesion);
    if (window.Auth.ready && window.Auth.user && window.Auth.user()) {
      alCambiarSesion({ user: window.Auth.user(), demo: window.Auth.isDemo && window.Auth.isDemo() });
    }
  }
})();
