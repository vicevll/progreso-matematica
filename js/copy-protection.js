(function () {
  function editable(target) {
    return !!(target && target.closest && target.closest("input, textarea, select, [contenteditable=\"true\"]"));
  }

  document.addEventListener("copy", function (event) {
    if (!editable(event.target)) event.preventDefault();
  });
  document.addEventListener("cut", function (event) {
    if (!editable(event.target)) event.preventDefault();
  });
  document.addEventListener("selectstart", function (event) {
    if (!editable(event.target)) event.preventDefault();
  });
  document.addEventListener("contextmenu", function (event) {
    if (!editable(event.target)) event.preventDefault();
  });
  document.addEventListener("keydown", function (event) {
    if (!editable(event.target) && (event.ctrlKey || event.metaKey) && (event.key === "c" || event.key === "x")) {
      event.preventDefault();
    }
  });
})();
