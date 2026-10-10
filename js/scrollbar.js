(function () {
  var track = document.getElementById("custom-scrollbar");
  var thumb = document.getElementById("custom-scrollbar-thumb");
  if (!track || !thumb) return;
  var dragging = false;
  var startY = 0;
  var startScroll = 0;

  function update() {
    var viewport = window.innerHeight;
    var page = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    var maxScroll = Math.max(1, page - viewport);
    var ratio = Math.min(1, viewport / page);
    var trackHeight = track.clientHeight;
    var thumbHeight = Math.max(34, trackHeight * ratio);
    var top = (trackHeight - thumbHeight) * (window.scrollY / maxScroll);
    thumb.style.height = thumbHeight + "px";
    thumb.style.transform = "translateY(" + top + "px)";
    track.classList.toggle("visible", page > viewport + 8);
  }

  function move(event) {
    if (!dragging) return;
    var viewport = window.innerHeight;
    var page = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    var maxScroll = Math.max(1, page - viewport);
    var trackHeight = track.clientHeight;
    var thumbHeight = thumb.offsetHeight;
    var travel = Math.max(1, trackHeight - thumbHeight);
    var next = startScroll + (event.clientY - startY) / travel * maxScroll;
    window.scrollTo(0, Math.max(0, Math.min(maxScroll, next)));
  }

  thumb.addEventListener("pointerdown", function (event) {
    dragging = true;
    startY = event.clientY;
    startScroll = window.scrollY;
    thumb.setPointerCapture && thumb.setPointerCapture(event.pointerId);
    event.preventDefault();
  });
  window.addEventListener("pointermove", move, { passive: true });
  window.addEventListener("pointerup", function () { dragging = false; });
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
  window.addEventListener("load", update);
  update();
})();
