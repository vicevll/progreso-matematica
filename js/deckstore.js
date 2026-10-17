// Almacén de mazos y avance de estudio.
//
// Cada cuenta tiene su propia copia local (localStorage) para que la app
// responda al instante y funcione sin conexión. Los cambios a mazos propios
// y al avance quedan marcados como pendientes hasta que js/sync-mazos.js los
// sube a Supabase. Si no hay cuenta activa, no se muestra nada: así, en un
// computador compartido, cada persona ve solo lo suyo.
(function () {
  var CACHE_PREFIX = "studappy-cuenta-v3:";
  // Claves de versiones anteriores (mazos y avance sin cuenta asociada).
  var LEGACY_DECKS = "studappy-decks-v2";
  var LEGACY_PROGRESS = "studappy-progress-v2";

  var PALETTE = ["#2f80ed", "#38bdf8", "#0ea5e9", "#6366f1", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#14b8a6", "#64748b"];

  var account = null;
  var decks = [];
  var pendientes = {};      // id de mazo -> "guardar" | "borrar"
  // id de mazo -> { id de tarjeta: estado }. Estados guardados:
  //   1 = "Lo sé" (dominada) · "n" = "No lo sé" · "p" = pendiente.
  // El 1 es el mismo valor que antes significaba "vista": se conserva como dominada.
  var progreso = {};
  var CODIGO = { sabe: 1, no: "n", pendiente: "p" };
  var progresoActualizado = 0;
  var progresoPendiente = false;
  var listeners = [];
  var progressListeners = [];

  function uid(prefix) {
    return (prefix || "d") + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
  }

  function newCard() {
    return { id: uid("c"), q: "", a: "" };
  }

  function newDeck() {
    return { id: uid("d"), nombre: "", descripcion: "", color: PALETTE[0], origen: "local", catalogId: "", actualizado: 0, cards: [newCard()] };
  }

  function normalize(deck) {
    deck = deck || {};
    var tienda = deck.origen === "tienda";
    return {
      id: String(deck.id || uid("d")),
      nombre: deck.nombre || "Mazo sin título",
      descripcion: deck.descripcion || "",
      color: deck.color || PALETTE[0],
      origen: tienda ? "tienda" : "local",
      catalogId: tienda ? (deck.catalogId || "") : "",
      actualizado: Number(deck.actualizado) || 0,
      cards: (deck.cards || []).map(function (card) {
        return { id: String((card && card.id) || uid("c")), q: (card && card.q) || "", a: (card && card.a) || "" };
      })
    };
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function readJson(key) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function persist() {
    if (!account) return;
    try {
      localStorage.setItem(CACHE_PREFIX + account, JSON.stringify({
        decks: decks,
        pendientes: pendientes,
        progreso: progreso,
        progresoActualizado: progresoActualizado,
        progresoPendiente: progresoPendiente
      }));
    } catch (e) {
      /* almacenamiento no disponible o lleno: se mantiene en memoria */
    }
  }

  function emit() {
    listeners.forEach(function (cb) {
      try { cb(); } catch (e) { /* ignorar */ }
    });
  }

  function emitProgress() {
    progressListeners.forEach(function (cb) {
      try { cb(); } catch (e) { /* ignorar */ }
    });
  }

  function indexOf(id) {
    for (var i = 0; i < decks.length; i++) {
      if (decks[i].id === id) return i;
    }
    return -1;
  }

  function isObject(value) {
    return !!value && typeof value === "object" && !Array.isArray(value);
  }

  // Cambia la cuenta activa y carga su copia local. null = sin cuenta.
  function useAccount(id) {
    id = id ? String(id) : null;
    if (id === account) return;
    account = id;
    var cache = id ? readJson(CACHE_PREFIX + id) : null;
    decks = cache && Array.isArray(cache.decks) ? cache.decks.map(normalize) : [];
    pendientes = cache && isObject(cache.pendientes) ? cache.pendientes : {};
    progreso = cache && isObject(cache.progreso) ? cache.progreso : {};
    progresoActualizado = cache ? Number(cache.progresoActualizado) || 0 : 0;
    progresoPendiente = !!(cache && cache.progresoPendiente);
    emit();
    emitProgress();
  }

  function touchProgress() {
    progresoActualizado = Date.now();
    progresoPendiente = true;
    persist();
    emitProgress();
  }

  window.DeckStore = {
    PALETTE: PALETTE,
    create: newDeck,
    newCard: newCard,

    /* ---- Cuenta ---- */
    useAccount: useAccount,
    account: function () { return account; },
    // Borra la copia local de una cuenta (al cerrar sesión con todo subido).
    forgetAccount: function (id) {
      try { localStorage.removeItem(CACHE_PREFIX + id); } catch (e) { /* ignorar */ }
    },

    /* ---- Mazos ---- */
    all: function () {
      return decks;
    },
    get: function (id) {
      var i = indexOf(id);
      return i === -1 ? null : decks[i];
    },
    save: function (deck) {
      var clean = normalize(clone(deck));
      if (clean.origen !== "tienda") {
        clean.actualizado = Date.now();
        pendientes[clean.id] = "guardar";
      }
      var i = indexOf(clean.id);
      if (i === -1) decks.push(clean);
      else decks[i] = clean;
      persist();
      emit();
      return clean;
    },
    remove: function (id) {
      var i = indexOf(id);
      if (i === -1) return;
      if (decks[i].origen === "tienda") return;
      decks.splice(i, 1);
      pendientes[id] = "borrar";
      if (progreso[id]) {
        delete progreso[id];
        touchProgress();
      }
      persist();
      emit();
    },
    removeStoreDeck: function (id) {
      var before = decks.length;
      decks = decks.filter(function (deck) { return !(deck.id === id && deck.origen === "tienda"); });
      if (decks.length !== before) {
        persist();
        emit();
      }
    },
    replaceStoreDecks: function (remoteDecks) {
      var localDecks = decks.filter(function (deck) { return deck.origen !== "tienda"; });
      var cloudDecks = (remoteDecks || []).map(function (deck) {
        deck.origen = "tienda";
        return normalize(deck);
      });
      decks = localDecks.concat(cloudDecks);
      persist();
      emit();
    },

    /* ---- Sincronización de mazos propios (la usa js/sync-mazos.js) ---- */
    pending: function () {
      return clone(pendientes);
    },
    // Marca como subido un cambio, salvo que haya otro más nuevo encima.
    markSynced: function (id, op, actualizado) {
      if (pendientes[id] !== op) return;
      if (op === "guardar") {
        var deck = window.DeckStore.get(id);
        if (deck && deck.actualizado !== actualizado) return;
      }
      delete pendientes[id];
      persist();
    },
    // Reemplaza los mazos propios por la versión fusionada con la nube.
    applyOwnDecks: function (ownDecks) {
      var storeDecks = decks.filter(function (deck) { return deck.origen === "tienda"; });
      decks = (ownDecks || []).map(function (deck) {
        deck.origen = "local";
        return normalize(deck);
      }).concat(storeDecks);
      persist();
      emit();
    },

    /* ---- Avance de estudio ---- */
    // "sabe" | "no" | "pendiente" | null (sin responder)
    getStatus: function (deckId, cardId) {
      var v = progreso[deckId] && progreso[deckId][cardId];
      if (v === 1 || v === true) return "sabe";
      if (v === "n") return "no";
      if (v === "p") return "pendiente";
      return null;
    },
    setStatus: function (deckId, cardId, status) {
      var nuevo = CODIGO[status];
      var actual = progreso[deckId] && progreso[deckId][cardId];
      if (actual === nuevo || (nuevo === undefined && actual === undefined)) return;
      if (!progreso[deckId]) progreso[deckId] = {};
      if (nuevo === undefined) delete progreso[deckId][cardId];
      else progreso[deckId][cardId] = nuevo;
      touchProgress();
    },
    isKnown: function (deckId, cardId) {
      return window.DeckStore.getStatus(deckId, cardId) === "sabe";
    },
    resetProgress: function (deckId) {
      if (!progreso[deckId]) return;
      delete progreso[deckId];
      touchProgress();
    },
    progressState: function () {
      return { datos: clone(progreso), actualizado: progresoActualizado, pendiente: progresoPendiente };
    },
    applyProgress: function (datos, actualizado) {
      progreso = isObject(datos) ? clone(datos) : {};
      progresoActualizado = Number(actualizado) || 0;
      progresoPendiente = false;
      persist();
      emitProgress();
    },
    markProgressSynced: function (actualizado) {
      if (progresoActualizado !== actualizado) return;
      progresoPendiente = false;
      persist();
    },

    /* ---- Datos de versiones anteriores (sin cuenta) ---- */
    legacy: function () {
      var oldDecks = readJson(LEGACY_DECKS);
      var own = Array.isArray(oldDecks)
        ? oldDecks.filter(function (deck) { return deck && deck.id !== "demo" && deck.origen !== "tienda"; }).map(normalize)
        : [];
      var oldProgress = readJson(LEGACY_PROGRESS);
      return { decks: own, progreso: isObject(oldProgress) ? oldProgress : {} };
    },
    clearLegacy: function () {
      try {
        localStorage.removeItem(LEGACY_DECKS);
        localStorage.removeItem(LEGACY_PROGRESS);
      } catch (e) { /* ignorar */ }
    },
    // Agrega a la cuenta activa los mazos y el avance de versiones anteriores.
    importLegacy: function (data) {
      if (!account || !data) return 0;
      var added = 0;
      (data.decks || []).forEach(function (deck) {
        if (indexOf(deck.id) !== -1) return;
        var copy = normalize(deck);
        copy.origen = "local";
        copy.actualizado = Date.now();
        decks.push(copy);
        pendientes[copy.id] = "guardar";
        added++;
      });
      var old = data.progreso || {};
      Object.keys(old).forEach(function (deckId) {
        if (!isObject(old[deckId]) || indexOf(deckId) === -1) return;
        progreso[deckId] = progreso[deckId] || {};
        Object.keys(old[deckId]).forEach(function (cardId) { if (old[deckId][cardId]) progreso[deckId][cardId] = 1; });
      });
      progresoActualizado = Date.now();
      progresoPendiente = true;
      persist();
      emit();
      emitProgress();
      return added;
    },

    /* ---- Modo de prueba (cuenta anónima) ---- */
    // Mazos propios y avance que dejó otra cuenta en este navegador.
    mazosDeCuenta: function (id) {
      var cache = id ? readJson(CACHE_PREFIX + id) : null;
      var own = cache && Array.isArray(cache.decks)
        ? cache.decks.filter(function (deck) { return deck && deck.origen !== "tienda"; }).map(normalize)
        : [];
      var prog = {};
      var old = cache && isObject(cache.progreso) ? cache.progreso : {};
      own.forEach(function (deck) { if (isObject(old[deck.id])) prog[deck.id] = clone(old[deck.id]); });
      return { decks: own, progreso: prog };
    },
    // Agrega a la cuenta activa los mazos de la prueba con su avance tal cual
    // (Lo sé / No lo sé / Pendiente). Si un id ya existe, el mazo recibe otro.
    importarMazos: function (data) {
      if (!account || !data) return 0;
      var added = 0;
      var prog = data.progreso || {};
      (data.decks || []).forEach(function (deck) {
        var copy = normalize(clone(deck));
        var idAntes = copy.id;
        if (indexOf(copy.id) !== -1) copy.id = uid("d");
        copy.origen = "local";
        copy.catalogId = "";
        copy.actualizado = Date.now();
        decks.push(copy);
        pendientes[copy.id] = "guardar";
        if (isObject(prog[idAntes])) progreso[copy.id] = clone(prog[idAntes]);
        added++;
      });
      if (added) {
        progresoActualizado = Date.now();
        progresoPendiente = true;
        persist();
        emit();
        emitProgress();
      }
      return added;
    },

    onChange: function (cb) {
      listeners.push(cb);
      return function () {
        listeners = listeners.filter(function (item) { return item !== cb; });
      };
    },
    onProgressChange: function (cb) {
      progressListeners.push(cb);
      return function () {
        progressListeners = progressListeners.filter(function (item) { return item !== cb; });
      };
    }
  };
})();
