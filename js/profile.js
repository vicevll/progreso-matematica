(function () {
  var CACHE_KEY = "mate-perfil";
  var SEEN_KEY = "mate-perfil-prompt";
  var PENDING_KEY = "mate-perfil-pendiente";
  var COLORS = ["#3b5bdb", "#0f766e", "#b45309", "#be123c", "#6d28d9", "#0369a1", "#15803d", "#a21caf"];

  var cache = loadJSON(CACHE_KEY, { uid: "", nickname: "", avatar: "", auto: false });
  var listeners = [];
  var loadedFor = null;
  var modal = null;
  var draft = { avatar: "", auto: false };

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

  function emit() {
    listeners.forEach(function (cb) {
      try { cb(); } catch (e) { /* ignorar */ }
    });
  }

  function currentUser() {
    return window.ProgressStore ? window.ProgressStore.getUser() : null;
  }

  function meta(user) {
    return (user && user.user_metadata) || {};
  }

  function name(user) {
    return (
      cache.nickname ||
      meta(user).nickname ||
      meta(user).full_name ||
      meta(user).name ||
      meta(user).given_name ||
      "Estudiante"
    );
  }

  function avatarUrl(user) {
    if (cache.auto) return "";
    return cache.avatar || meta(user).avatar_url || meta(user).picture || "";
  }

  function initial(user) {
    return (String(name(user)).trim().charAt(0) || "E").toUpperCase();
  }

  function colorFor(user) {
    var seed = (user && user.id) || name(user) || "x";
    var hash = 0;
    for (var i = 0; i < seed.length; i++) {
      hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
    }
    return COLORS[hash % COLORS.length];
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function avatarHtml(user, size) {
    var cls = "avatar" + (size ? " avatar-" + size : "");
    var url = avatarUrl(user);
    if (url) {
      return '<img class="' + cls + '" src="' + esc(url) + '" alt="" />';
    }
    return (
      '<span class="' + cls + ' avatar-auto" style="background:' + colorFor(user) + '">' +
      esc(initial(user)) +
      "</span>"
    );
  }

  function isSeen() {
    try { return localStorage.getItem(SEEN_KEY) === "1"; } catch (e) { return false; }
  }

  function markSeen() {
    try { localStorage.setItem(SEEN_KEY, "1"); } catch (e) { /* ignorar */ }
  }

  function load() {
    var user = currentUser();
    if (!user || !window.SB || !window.SB.configured) return Promise.resolve();
    if (cache.uid && cache.uid !== user.id) {
      cache = { uid: user.id, nickname: "", avatar: "", auto: false };
      saveJSON(CACHE_KEY, cache);
      emit();
    }
    if (!cache.nickname && meta(user).nickname) {
      cache.nickname = meta(user).nickname;
      saveJSON(CACHE_KEY, cache);
      emit();
    }
    if (loadedFor === user.id) return retryPending();
    loadedFor = user.id;
    cache.uid = user.id;
    saveJSON(CACHE_KEY, cache);
    var pendingLocal = hasPending();
    return window.SB.client
      .from("user_state")
      .select("nickname, avatar")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(function (res) {
        if (res && res.data && !pendingLocal) {
          var changed = false;
          if (res.data.nickname && res.data.nickname !== cache.nickname) {
            cache.nickname = res.data.nickname;
            changed = true;
          }
          var remoteAvatar = res.data.avatar;
          if (remoteAvatar !== undefined && remoteAvatar !== null && String(remoteAvatar) !== String(cache.avatar)) {
            var isAuto = remoteAvatar === "";
            cache.auto = isAuto;
            cache.avatar = isAuto ? "" : remoteAvatar;
            changed = true;
          }
          if (changed) {
            saveJSON(CACHE_KEY, cache);
            emit();
          }
        }
      })
      .catch(function () { /* sin conexión o columnas faltantes */ })
      .then(retryPending);
  }

  function hasPending() {
    try { return localStorage.getItem(PENDING_KEY) === "1"; } catch (e) { return false; }
  }

  function setPending() {
    try { localStorage.setItem(PENDING_KEY, "1"); } catch (e) { /* ignorar */ }
  }

  function clearPending() {
    try { localStorage.removeItem(PENDING_KEY); } catch (e) { /* ignorar */ }
  }

  function pushRemote() {
    var user = currentUser();
    if (!user || !window.SB || !window.SB.configured || !navigator.onLine) return Promise.resolve();
    return window.SB.client
      .from("user_state")
      .upsert(
        {
          user_id: user.id,
          nickname: cache.nickname || null,
          avatar: cache.auto ? "" : (cache.avatar || null),
          updated_at: new Date().toISOString()
        },
        { onConflict: "user_id" }
      )
      .then(function (res) {
        if (res.error) throw res.error;
        clearPending();
      })
      .catch(function () {
        setPending();
      });
  }

  function retryPending() {
    if (hasPending()) return pushRemote();
    return Promise.resolve();
  }

  function save(nickname, avatar, auto) {
    var user = currentUser();
    cache.nickname = nickname || "";
    cache.avatar = avatar || "";
    cache.auto = !!auto;
    cache.uid = user ? user.id : cache.uid;
    saveJSON(CACHE_KEY, cache);
    markSeen();
    emit();
    if (user && window.SB && window.SB.configured) {
      try {
        window.SB.client.auth.updateUser({ data: { nickname: cache.nickname } });
      } catch (e) { /* ignorar */ }
      if (navigator.onLine) return pushRemote();
    }
    setPending();
    return Promise.resolve();
  }

  function resizeImage(file, max, cb) {
    var reader = new FileReader();
    reader.onload = function () {
      var image = new Image();
      image.onload = function () {
        var scale = Math.min(1, max / Math.max(image.width, image.height));
        var width = Math.max(1, Math.round(image.width * scale));
        var height = Math.max(1, Math.round(image.height * scale));
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(image, 0, 0, width, height);
        try {
          var webp = canvas.toDataURL("image/webp", 0.85);
          if (webp && webp.indexOf("data:image/webp") === 0) {
            cb(webp);
            return;
          }
          cb(canvas.toDataURL("image/jpeg", 0.85));
        } catch (e) {
          try {
            cb(canvas.toDataURL("image/jpeg", 0.85));
          } catch (e2) {
            cb(null);
          }
        }
      };
      image.onerror = function () { cb(null); };
      image.src = reader.result;
    };
    reader.onerror = function () { cb(null); };
    reader.readAsDataURL(file);
  }

  function renderPreview() {
    var box = document.getElementById("profile-preview");
    if (!box) return;
    var user = currentUser();
    var url = draft.auto ? "" : (draft.avatar || "");
    if (url) {
      box.innerHTML = '<img class="avatar avatar-lg" src="' + esc(url) + '" alt="" />';
    } else {
      box.innerHTML =
        '<span class="avatar avatar-lg avatar-auto" style="background:' + colorFor(user) + '">' +
        esc(initial(user)) +
        "</span>";
    }
  }

  function onKey(event) {
    if (event.key === "Escape") {
      markSeen();
      closeEditor();
    }
  }

  function closeEditor() {
    document.removeEventListener("keydown", onKey);
    if (modal && modal.parentNode) modal.parentNode.removeChild(modal);
    modal = null;
  }

  function openEditor(options) {
    options = options || {};
    var user = currentUser();
    if (!user || modal) return;
    draft.avatar = avatarUrl(user);
    draft.auto = !!cache.auto;

    var overlay = document.createElement("div");
    overlay.className = "profile-overlay";
    overlay.innerHTML =
      '<div class="profile-modal" role="dialog" aria-modal="true" aria-label="Perfil">' +
        '<span class="profile-kicker">' + (options.firstTime ? "Bienvenido" : "Tu perfil") + "</span>" +
        "<h2>" + (options.firstTime ? "Personaliza tu cuenta" : "Editar perfil") + "</h2>" +
        "<p>Elige un apodo y, si quieres, una foto. Tu correo no se mostrará.</p>" +
        '<div class="profile-avatar-row">' +
          '<div class="profile-preview" id="profile-preview"></div>' +
          '<div class="profile-avatar-actions">' +
            '<label class="profile-file">Elegir foto<input type="file" id="profile-file" accept="image/*" /></label>' +
            '<button type="button" class="profile-link" id="profile-clear">Usar automática</button>' +
          "</div>" +
        "</div>" +
        '<label class="profile-field"><span>Apodo</span>' +
          '<input type="text" id="profile-nickname" maxlength="24" placeholder="Tu apodo" value="' + esc(cache.nickname) + '" />' +
        "</label>" +
        '<div class="profile-actions">' +
          '<button type="button" class="btn" id="profile-later">' + (options.firstTime ? "Ahora no" : "Cancelar") + "</button>" +
          '<button type="button" class="btn primary" id="profile-save">Guardar</button>' +
        "</div>" +
      "</div>";
    document.body.appendChild(overlay);
    modal = overlay;
    renderPreview();

    var nickInput = overlay.querySelector("#profile-nickname");
    if (nickInput) nickInput.focus();

    overlay.querySelector("#profile-file").addEventListener("change", function (event) {
      var file = event.target.files && event.target.files[0];
      if (!file) return;
      resizeImage(file, 256, function (dataUrl) {
        if (!dataUrl) return;
        draft.avatar = dataUrl;
        draft.auto = false;
        renderPreview();
      });
    });

    overlay.querySelector("#profile-clear").addEventListener("click", function () {
      draft.avatar = "";
      draft.auto = true;
      renderPreview();
      var nickname = (overlay.querySelector("#profile-nickname").value || "").trim().slice(0, 24);
      save(nickname, "", true);
    });

    overlay.querySelector("#profile-save").addEventListener("click", function () {
      var nickname = (overlay.querySelector("#profile-nickname").value || "").trim().slice(0, 24);
      save(nickname, draft.avatar, !!draft.auto).then(closeEditor);
    });

    overlay.querySelector("#profile-later").addEventListener("click", function () {
      markSeen();
      closeEditor();
    });

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        markSeen();
        closeEditor();
      }
    });

    document.addEventListener("keydown", onKey);
  }

  function maybePrompt() {
    if (!currentUser() || cache.nickname || isSeen()) return;
    openEditor({ firstTime: true });
  }

  window.addEventListener("online", retryPending);

  window.Profile = {
    load: load,
    save: save,
    name: name,
    avatarHtml: avatarHtml,
    initial: initial,
    colorFor: colorFor,
    openEditor: openEditor,
    maybePrompt: maybePrompt,
    onChange: function (cb) {
      listeners.push(cb);
      return function () {
        listeners = listeners.filter(function (item) { return item !== cb; });
      };
    }
  };
})();
