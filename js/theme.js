(function () {
  var KEY = "studappy-theme";
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");

  function isDark() {
    return root.classList.contains("dark-mode");
  }

  function render() {
    if (!button || !window.icon) return;
    button.innerHTML = window.icon(isDark() ? "sun" : "moon", { size: 18 });
    button.title = isDark() ? "Usar modo claro" : "Usar modo oscuro";
    button.setAttribute("aria-label", button.title);
  }

  function apply(dark) {
    root.classList.toggle("dark-mode", dark);
    try { localStorage.setItem(KEY, dark ? "dark" : "light"); } catch (e) { /* ignorar */ }
    render();
  }

  var saved = "";
  try { saved = localStorage.getItem(KEY) || ""; } catch (e) { /* ignorar */ }
  if (saved === "dark") root.classList.add("dark-mode");
  render();

  if (button) {
    button.addEventListener("click", function () { apply(!isDark()); });
  }
})();
