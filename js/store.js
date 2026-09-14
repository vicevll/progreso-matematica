(function () {
  var CACHE_KEY = "mate-progreso";
  var OUTBOX_KEY = "mate-outbox";
  var LAST_KEY = "mate-ultimo";

  var cache = loadJSON(CACHE_KEY, {});
  var outbox = loadJSON(OUTBOX_KEY, []);
  var lastVisited = loadJSON(LAST_KEY, null);
  var session = null;
  var syncing = false;
  var flushing = false;
  var statusListeners = [];
  var updateListeners = [];

  function loadJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function saveJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* almacenamiento no disponible */
    }
  }

  function keyOf(areaId, temaId, index) {
    return areaId + "/" + temaId + "#" + index;
  }

  function parseKey(key) {
    var parts = String(key).split("/");
    var tail = String(parts[1] || "").split("#");
    return { areaId: parts[0], temaId: tail[0], index: parseInt(tail[1], 10) };
  }

  function isConfigured() {
    return !!(window.SB && window.SB.configured && window.SB.client);
  }

  function status() {
    if (!isConfigured()) return "disabled";
    if (!navigator.onLine) return session ? "offline" : "signed-out";
    if (syncing || flushing) return "syncing";
    if (!session) return "signed-out";
    return outbox.length ? "pending" : "synced";
  }

  function emit() {
    statusListeners.forEach(function (cb) {
      try { cb(status()); } catch (e) { /* ignorar */ }
    });
  }

  function emitUpdate() {
    updateListeners.forEach(function (cb) {
      try { cb(); } catch (e) { /* ignorar */ }
    });
  }

  function check(res) {
    if (res && res.error) throw res.error;
    return res;
  }

  function enqueue(op) {
    outbox = outbox.filter(function (item) {
      return !(item.areaId === op.areaId && item.temaId === op.temaId && item.index === op.index);
    });
    outbox.push(op);
    saveJSON(OUTBOX_KEY, outbox);
  }

  function hasPendingDelete(areaId, temaId, index) {
    return outbox.some(function (op) {
      return op.op === "del" && op.areaId === areaId && op.temaId === temaId && op.index === index;
    });
  }

  function applyOp(op) {
    var db = window.SB.client;
    if (op.op === "set") {
      return db
        .from("section_progress")
        .upsert(
          {
            user_id: session.user.id,
            area_id: op.areaId,
            tema_id: op.temaId,
            section_index: op.index
          },
          { onConflict: "user_id,area_id,tema_id,section_index", ignoreDuplicates: true }
        )
        .then(check);
    }
    return db
      .from("section_progress")
      .delete()
      .eq("user_id", session.user.id)
      .eq("area_id", op.areaId)
      .eq("tema_id", op.temaId)
      .eq("section_index", op.index)
      .then(check);
  }

  function flush() {
    if (!isConfigured() || !session || !navigator.onLine || flushing || !outbox.length) {
      emit();
      return Promise.resolve();
    }
    flushing = true;
    emit();
    var snapshot = outbox.slice();
    var chain = Promise.resolve();
    snapshot.forEach(function (op) {
      chain = chain
        .then(function () { return applyOp(op); })
        .then(function () {
          outbox = outbox.filter(function (item) {
            return !(
              item.areaId === op.areaId &&
              item.temaId === op.temaId &&
              item.index === op.index &&
              item.ts === op.ts
            );
          });
          saveJSON(OUTBOX_KEY, outbox);
        })
        .catch(function () {
          /* se queda en la cola para el próximo intento */
        });
    });
    return chain.then(function () {
      flushing = false;
      emit();
    });
  }

  function uploadLocalProgress(serverMap) {
    var rows = [];
    Object.keys(cache).forEach(function (key) {
      if (serverMap[key]) return;
      var parsed = parseKey(key);
      if (!parsed.temaId || isNaN(parsed.index)) return;
      if (hasPendingDelete(parsed.areaId, parsed.temaId, parsed.index)) return;
      rows.push({
        user_id: session.user.id,
        area_id: parsed.areaId,
        tema_id: parsed.temaId,
        section_index: parsed.index
      });
    });
    if (!rows.length) return Promise.resolve();
    return window.SB.client
      .from("section_progress")
      .upsert(rows, { onConflict: "user_id,area_id,tema_id,section_index", ignoreDuplicates: true })
      .then(check);
  }

  function syncUserState() {
    return window.SB.client
      .from("user_state")
      .select("last_area, last_tema")
      .eq("user_id", session.user.id)
      .maybeSingle()
      .then(check)
      .then(function (res) {
        var serverState = res && res.data ? res.data : null;
        if (lastVisited) {
          return window.SB.client
            .from("user_state")
            .upsert(
              {
                user_id: session.user.id,
                last_area: lastVisited.areaId,
                last_tema: lastVisited.temaId,
                updated_at: new Date().toISOString()
              },
              { onConflict: "user_id" }
            )
            .then(check);
        }
        if (serverState && serverState.last_area && serverState.last_tema) {
          lastVisited = { areaId: serverState.last_area, temaId: serverState.last_tema };
          saveJSON(LAST_KEY, lastVisited);
        }
      });
  }

  function syncAll() {
    if (!isConfigured() || !session || !navigator.onLine || syncing) return Promise.resolve();
    syncing = true;
    emit();
    var serverMap = {};
    var changed = false;
    return window.SB.client
      .from("section_progress")
      .select("area_id, tema_id, section_index")
      .eq("user_id", session.user.id)
      .then(check)
      .then(function (res) {
        (res.data || []).forEach(function (row) {
          serverMap[keyOf(row.area_id, row.tema_id, row.section_index)] = true;
        });
        Object.keys(serverMap).forEach(function (key) {
          var parsed = parseKey(key);
          if (cache[key]) return;
          if (hasPendingDelete(parsed.areaId, parsed.temaId, parsed.index)) return;
          cache[key] = true;
          changed = true;
        });
        saveJSON(CACHE_KEY, cache);
        return uploadLocalProgress(serverMap);
      })
      .then(function () { return syncUserState(); })
      .catch(function () { /* sin conexión o error temporal */ })
      .then(function () {
        syncing = false;
        emit();
        if (changed) emitUpdate();
        return flush();
      });
  }

  function isSectionDone(areaId, temaId, index) {
    return cache[keyOf(areaId, temaId, index)] === true;
  }

  function toggle(areaId, temaId, index) {
    var key = keyOf(areaId, temaId, index);
    if (cache[key]) {
      delete cache[key];
      enqueue({ op: "del", areaId: areaId, temaId: temaId, index: index, ts: Date.now() });
    } else {
      cache[key] = true;
      enqueue({ op: "set", areaId: areaId, temaId: temaId, index: index, ts: Date.now() });
    }
    saveJSON(CACHE_KEY, cache);
    emit();
    flush();
  }

  function getLastVisited() {
    return lastVisited;
  }

  function setLastVisited(areaId, temaId) {
    lastVisited = { areaId: areaId, temaId: temaId };
    saveJSON(LAST_KEY, lastVisited);
    if (isConfigured() && session && navigator.onLine) {
      window.SB.client
        .from("user_state")
        .upsert(
          {
            user_id: session.user.id,
            last_area: areaId,
            last_tema: temaId,
            updated_at: new Date().toISOString()
          },
          { onConflict: "user_id" }
        )
        .then(check)
        .catch(function () { /* se reintentará en el próximo sync */ });
    }
  }

  function init() {
    if (!isConfigured()) {
      emit();
      return;
    }
    window.SB.getSession()
      .then(function (current) {
        session = current;
        emit();
        if (session) syncAll();
      })
      .catch(function () {
        session = null;
        emit();
      });
    window.SB.onChange(function (next) {
      var wasSignedIn = !!session;
      session = next;
      emit();
      if (session) {
        syncAll();
      } else if (wasSignedIn) {
        emitUpdate();
      }
    });
    window.addEventListener("online", function () {
      emit();
      if (session) syncAll();
      else flush();
    });
    window.addEventListener("offline", emit);
  }

  window.ProgressStore = {
    init: init,
    isSectionDone: isSectionDone,
    toggle: toggle,
    getLastVisited: getLastVisited,
    setLastVisited: setLastVisited,
    status: status,
    getUser: function () {
      return session ? session.user : null;
    },
    syncNow: function () {
      return syncAll().then(function () { return flush(); });
    },
    onChange: function (cb) {
      statusListeners.push(cb);
      return function () {
        statusListeners = statusListeners.filter(function (item) { return item !== cb; });
      };
    },
    onUpdate: function (cb) {
      updateListeners.push(cb);
      return function () {
        updateListeners = updateListeners.filter(function (item) { return item !== cb; });
      };
    }
  };
})();
