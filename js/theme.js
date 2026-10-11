// Studappy usa solo el tema oscuro (la clase dark-mode ya viene en index.html).
(function () {
  document.documentElement.classList.add("dark-mode");
  try { localStorage.removeItem("studappy-theme"); } catch (e) { /* ignorar */ }
})();
