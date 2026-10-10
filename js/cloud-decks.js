(function () {
  var syncVersion = 0;
  var syncing = false;
  var activeSync = null;
  var listeners = [];

  function user() {
    return window.Auth && window.Auth.user ? window.Auth.user() : null;
  }

  function configured() {
    return !!(window.SB && window.SB.configured && window.SB.client);
  }

  function check(result) {
    if (result && result.error) throw result.error;
    return result ? result.data : null;
  }

  function emit() {
    listeners.forEach(function (callback) {
      try { callback(); } catch (e) { /* ignorar */ }
    });
    window.dispatchEvent(new CustomEvent("studappy:cloud-decks-changed"));
  }

  function isOwned(catalogId) {
    return window.DeckStore.all().some(function (deck) {
      return deck.origen === "tienda" && deck.catalogId === catalogId;
    });
  }

  function rpcMissing(error) {
    var text = String(error && error.message ? error.message : error || "").toLowerCase();
    return (error && error.code === "PGRST202") || text.indexOf("could not find the function") !== -1 || text.indexOf("schema cache") !== -1;
  }

  function findOwnedRow(catalogId, userId) {
    return window.SB.client
      .from("user_decks")
      .select("id")
      .eq("user_id", userId)
      .eq("catalog_id", catalogId)
      .maybeSingle()
      .then(function (result) { return check(result); });
  }

  function acquireDirect(entry, cards, currentUser) {
    return findOwnedRow(entry.id, currentUser.id).then(function (ownedRow) {
      if (ownedRow && ownedRow.id) return ownedRow.id;
      return window.SB.client
        .from("user_decks")
        .insert({
          user_id: currentUser.id,
          catalog_id: entry.id,
          title: entry.title,
          description: entry.description,
          color: entry.color
        })
        .select("id")
        .single()
        .then(function (result) { return check(result).id; })
        .catch(function (error) {
          if (error && error.code === "23505") {
            return findOwnedRow(entry.id, currentUser.id).then(function (row) {
              if (!row || !row.id) throw error;
              return row.id;
            });
          }
          throw error;
        });
    }).then(function (deckId) {
      var rows = cards.map(function (card, index) {
        return {
          deck_id: deckId,
          user_id: currentUser.id,
          card_key: card.id,
          position: index + 1,
          question: card.q,
          answer: card.a
        };
      });
      return window.SB.client
        .from("user_deck_cards")
        .upsert(rows, { onConflict: "deck_id,card_key", ignoreDuplicates: true })
        .then(function (result) { check(result); return deckId; });
    });
  }

  function sync(force) {
    var currentUser = user();
    if (!currentUser || !configured()) {
      syncVersion++;
      syncing = false;
      activeSync = null;
      window.DeckStore.replaceStoreDecks([]);
      emit();
      return Promise.resolve([]);
    }
    if (syncing && activeSync && !force) return activeSync;
    if (force && syncing) {
      // Invalida la lectura anterior para que no reponga un mazo recién borrado.
      syncVersion++;
      syncing = false;
      activeSync = null;
    }
    var version = ++syncVersion;
    syncing = true;
    activeSync = window.SB.client
      .from("user_decks")
      .select("id,catalog_id,title,description,color,user_deck_cards(card_key,position,question,answer)")
      .eq("user_id", currentUser.id)
      .then(function (result) {
        var rows = check(result) || [];
        if (version !== syncVersion) return [];
        var decks = rows.map(function (row) {
          var storedCards = (row.user_deck_cards || []).slice().sort(function (a, b) {
            return a.position - b.position;
          }).map(function (card) {
            return { id: card.card_key, q: card.question, a: card.answer };
          });
          var catalogEntry = (window.STORE_CATALOG || []).filter(function (item) { return item.id === row.catalog_id; })[0];
          var cards = catalogEntry && catalogEntry.cards.length
            ? catalogEntry.cards.map(function (card) { return { id: card.id, q: card.q, a: card.a }; })
            : storedCards;
          return {
            id: row.id,
            catalogId: row.catalog_id,
            origen: "tienda",
            nombre: catalogEntry ? catalogEntry.title : row.title,
            descripcion: catalogEntry ? catalogEntry.description : row.description,
            color: catalogEntry ? catalogEntry.color : row.color,
            cards: cards
          };
        });
        window.DeckStore.replaceStoreDecks(decks);
        return decks;
      })
      .then(function (decks) {
        if (version === syncVersion) emit();
        return decks;
      })
      .catch(function (error) {
        if (window.console && console.error) console.error("No se pudieron sincronizar los mazos adquiridos:", error);
        throw error;
      })
      .then(function (value) {
        if (version === syncVersion) {
          syncing = false;
          activeSync = null;
        }
        return value;
      }, function (error) {
        if (version === syncVersion) {
          syncing = false;
          activeSync = null;
        }
        throw error;
      });
    return activeSync;
  }

  function acquire(catalogId) {
    var entry = (window.STORE_CATALOG || []).filter(function (item) { return item.id === catalogId; })[0];
    if (!entry || entry.status !== "available" || entry.price !== 0) {
      return Promise.reject(new Error("Este mazo no está disponible para adquisición gratuita."));
    }
    var currentUser = user();
    if (!currentUser) return Promise.reject(new Error("Inicia sesión para agregar el mazo a tu biblioteca."));
    if (!configured()) return Promise.reject(new Error("Supabase no está configurado."));
    if (isOwned(catalogId)) return Promise.resolve(window.DeckStore.all().filter(function (deck) { return deck.catalogId === catalogId; })[0]);

    var cards = entry.cards.map(function (card) {
      return { id: card.id, q: card.q, a: card.a };
    });
    var acquisition = window.SB.client
      .rpc("adquirir_mazo", { p_catalog_id: entry.id, p_cards: cards })
      .then(function (result) {
        if (result && result.error) throw result.error;
        return result;
      })
      .catch(function (error) {
        if (!rpcMissing(error)) throw error;
        // Compatible con proyectos donde PostgREST todavía no publicó el RPC:
        // RLS sigue limitando las filas al usuario autenticado.
        return acquireDirect(entry, cards, currentUser);
      })
      .then(function () { return sync(true); });

    return acquisition
      .then(function () {
        // Si ya había una sincronización en curso, su lectura pudo comenzar
        // antes de la adquisición; repetirla asegura traer la fila recién creada.
        return isOwned(catalogId) ? null : sync(true);
      })
      .then(function () {
        var deck = window.DeckStore.all().filter(function (item) { return item.catalogId === catalogId; })[0];
        if (!deck) throw new Error("Supabase confirmó la adquisición, pero el mazo no apareció al sincronizar. Revisa supabase/tienda.sql.");
        return deck;
      });
  }

  function remove(deckId) {
    var currentUser = user();
    var deck = window.DeckStore.get(deckId);
    if (!currentUser) return Promise.reject(new Error("Inicia sesión para administrar tu biblioteca."));
    if (!configured()) return Promise.reject(new Error("Supabase no está configurado."));
    if (!deck || deck.origen !== "tienda") return Promise.reject(new Error("Solo puedes quitar mazos adquiridos en la tienda."));

    return window.SB.client
      .from("user_decks")
      .delete()
      .eq("id", deck.id)
      .eq("user_id", currentUser.id)
      .select("id")
      .then(function (result) {
        if (result && result.error) throw result.error;
        var deleted = result && result.data ? result.data : [];
        if (deleted.length) window.DeckStore.removeStoreDeck(deck.id);
        return sync(true).then(function () {
          if (window.DeckStore.get(deck.id)) {
            throw new Error("Supabase no retiró el mazo. Vuelve a ejecutar supabase/tienda.sql para aplicar el permiso de borrado.");
          }
          return true;
        }).catch(function (error) {
          if (deleted.length) {
            if (window.console && console.error) console.error("Se eliminó el mazo, pero la sincronización posterior falló:", error);
            return true;
          }
          throw error;
        });
      });
  }

  window.CloudDecks = {
    configured: configured,
    sync: sync,
    acquire: acquire,
    remove: remove,
    isOwned: isOwned,
    onChange: function (callback) {
      listeners.push(callback);
      return function () { listeners = listeners.filter(function (item) { return item !== callback; }); };
    }
  };

  if (window.Auth && window.Auth.onChange) {
    window.Auth.onChange(function (session) {
      if (!session) {
        sync();
      } else {
        sync().catch(function () { /* reintentar al recargar o volver a entrar */ });
      }
    });
  }
})();
