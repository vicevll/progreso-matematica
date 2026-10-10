(function () {
  var KEY = "studappy-decks-v2";
  var seed = window.DECKS || [];
  var listeners = [];

  var PALETTE = ["#2f80ed", "#38bdf8", "#0ea5e9", "#6366f1", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#14b8a6", "#64748b"];
  function uid(prefix) {
    return (prefix || "d") + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
  }

  function newCard() {
    return { id: uid("c"), q: "", a: "" };
  }

  function newDeck() {
    return { id: uid("d"), nombre: "", descripcion: "", color: PALETTE[0], origen: "local", catalogId: "", cards: [newCard()] };
  }

  function normalize(deck) {
    deck = deck || {};
    return {
      id: deck.id || uid("d"),
      nombre: deck.nombre || "Mazo sin título",
      descripcion: deck.descripcion || "",
      color: deck.color || PALETTE[0],
      origen: deck.origen === "tienda" ? "tienda" : "local",
      catalogId: deck.origen === "tienda" ? (deck.catalogId || "") : "",
      cards: (deck.cards || []).map(function (card) {
        return { id: (card && card.id) || uid("c"), q: (card && card.q) || "", a: (card && card.a) || "" };
      })
    };
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function seedDecks() {
    return seed.map(function (deck) {
      return normalize(clone(deck));
    });
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return parsed.filter(function (deck) { return deck && deck.id !== "demo"; }).map(normalize);
        }
      }
    } catch (e) {
      /* almacenamiento no disponible o dato corrupto */
    }
    return seedDecks();
  }

  var decks = load();

  function persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify(decks));
    } catch (e) {
      /* almacenamiento no disponible */
    }
  }

  function emit() {
    listeners.forEach(function (cb) {
      try { cb(); } catch (e) { /* ignorar */ }
    });
  }

  function indexOf(id) {
    for (var i = 0; i < decks.length; i++) {
      if (decks[i].id === id) return i;
    }
    return -1;
  }

  persist();

  window.DeckStore = {
    PALETTE: PALETTE,
    all: function () {
      return decks;
    },
    get: function (id) {
      var i = indexOf(id);
      return i === -1 ? null : decks[i];
    },
    save: function (deck) {
      var clean = normalize(clone(deck));
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
    create: newDeck,
    newCard: newCard,
    resetSeed: function () {
      decks = seedDecks();
      persist();
      emit();
    },
    onChange: function (cb) {
      listeners.push(cb);
      return function () {
        listeners = listeners.filter(function (item) { return item !== cb; });
      };
    }
  };
})();
