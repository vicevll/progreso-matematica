(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.Diagram = api;
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this), function () {
  var THEMES = {
    dark: {
      stroke: "#cbd6d8",
      text: "#e8eef0",
      muted: "#9aa5a7",
      accent: "#8eb7cc",
      fill: "rgba(142, 183, 204, 0.10)"
    },
    light: {
      stroke: "#334155",
      text: "#0f172a",
      muted: "#475569",
      accent: "#2563eb",
      fill: "rgba(37, 99, 235, 0.08)"
    }
  };

  function toNum(value, fallback) {
    var n = parseFloat(value);
    return isNaN(n) ? fallback : n;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function fmt(n) {
    return String(Math.round(n * 100) / 100);
  }

  function label(x, y, text, theme, anchor) {
    return (
      '<text x="' + x + '" y="' + y + '" fill="' + theme.text +
      '" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" text-anchor="' +
      (anchor || "middle") + '">' + esc(text) + "</text>"
    );
  }

  function rightTriangle(options) {
    options = options || {};
    var theme = THEMES[options.theme] || THEMES.dark;
    var unit = options.unit ? " " + options.unit : "";

    var adj = toNum(options.adj, NaN);
    var opp = toNum(options.opp, NaN);
    var hyp = toNum(options.hyp, NaN);
    var angleDeg = toNum(options.angleDeg, NaN);

    if (!isNaN(adj) && !isNaN(opp)) {
      hyp = Math.sqrt(adj * adj + opp * opp);
      angleDeg = Math.atan2(opp, adj) * 180 / Math.PI;
    } else if (!isNaN(adj) && !isNaN(angleDeg)) {
      opp = adj * Math.tan(angleDeg * Math.PI / 180);
      hyp = Math.sqrt(adj * adj + opp * opp);
    } else if (!isNaN(opp) && !isNaN(angleDeg)) {
      adj = opp / Math.tan(angleDeg * Math.PI / 180);
      hyp = Math.sqrt(adj * adj + opp * opp);
    } else if (!isNaN(hyp) && !isNaN(angleDeg)) {
      adj = hyp * Math.cos(angleDeg * Math.PI / 180);
      opp = hyp * Math.sin(angleDeg * Math.PI / 180);
    } else {
      adj = 4; opp = 3; hyp = 5; angleDeg = 36.87;
    }
    if (!isFinite(adj) || adj <= 0) adj = 4;
    if (!isFinite(opp) || opp <= 0) opp = 3;

    var W = 360;
    var H = 280;
    var pad = 58;
    var scale = Math.min((W - pad * 2) / adj, (H - pad * 2) / opp);
    var ax = pad;
    var ay = H - pad;
    var bx = ax + adj * scale;
    var by = ay;
    var cx = bx;
    var cy = ay - opp * scale;

    var highlight = options.highlight;
    function strokeFor(which) { return highlight === which ? theme.accent : theme.stroke; }
    function widthFor(which) { return highlight === which ? 3 : 1.6; }

    var parts = [];
    parts.push('<polygon points="' + ax + ',' + ay + " " + bx + "," + by + " " + cx + "," + cy + '" fill="' + theme.fill + '"/>');
    parts.push('<line x1="' + ax + '" y1="' + ay + '" x2="' + bx + '" y2="' + by + '" stroke="' + strokeFor("adj") + '" stroke-width="' + widthFor("adj") + '"/>');
    parts.push('<line x1="' + bx + '" y1="' + by + '" x2="' + cx + '" y2="' + cy + '" stroke="' + strokeFor("opp") + '" stroke-width="' + widthFor("opp") + '"/>');
    parts.push('<line x1="' + ax + '" y1="' + ay + '" x2="' + cx + '" y2="' + cy + '" stroke="' + strokeFor("hyp") + '" stroke-width="' + widthFor("hyp") + '"/>');

    var square = 12;
    parts.push('<polyline points="' + (bx - square) + ',' + by + " " + (bx - square) + "," + (by - square) + " " + bx + "," + (by - square) + '" fill="none" stroke="' + theme.muted + '" stroke-width="1.4"/>');

    var arc = Math.min(38, adj * scale * 0.34, hyp * scale * 0.34);
    var rad = angleDeg * Math.PI / 180;
    var startX = ax + arc;
    var startY = ay;
    var endX = ax + arc * Math.cos(rad);
    var endY = ay - arc * Math.sin(rad);
    parts.push('<path d="M ' + startX + ',' + startY + " A " + arc + "," + arc + " 0 0 0 " + endX + "," + endY + '" fill="none" stroke="' + theme.accent + '" stroke-width="1.6"/>');

    var adjText = options.adjLabel || (fmt(adj) + unit);
    var oppText = options.oppLabel || (fmt(opp) + unit);
    var hypText = options.hypLabel || (fmt(hyp) + unit);
    var angleText = options.angle || (fmt(angleDeg) + "°");

    parts.push(label((ax + bx) / 2, by + 24, adjText, theme));
    parts.push(label(bx + 12, (by + cy) / 2 + 5, oppText, theme, "start"));

    var midX = (ax + cx) / 2;
    var midY = (ay + cy) / 2;
    var hx = cx - ax;
    var hy = cy - ay;
    var hlen = Math.sqrt(hx * hx + hy * hy) || 1;
    var nx = hy / hlen;
    var ny = -hx / hlen;
    if ((bx - midX) * nx + (by - midY) * ny > 0) {
      nx = -nx;
      ny = -ny;
    }
    parts.push(label(midX + nx * 18, midY + ny * 18 + 5, hypText, theme));

    var bisect = rad / 2;
    var labR = arc + 17;
    parts.push(label(ax + labR * Math.cos(bisect), ay - labR * Math.sin(bisect) + 5, angleText, theme));

    return (
      '<svg class="fig-svg" viewBox="0 0 ' + W + " " + H + '" role="img" xmlns="http://www.w3.org/2000/svg">' +
      parts.join("") + "</svg>"
    );
  }

  function hydrate(scope) {
    var rootNode = scope || (typeof document !== "undefined" ? document : null);
    if (!rootNode || !rootNode.querySelectorAll) return;
    var nodes = rootNode.querySelectorAll(".fig[data-fig]");
    Array.prototype.forEach.call(nodes, function (el) {
      if (el.getAttribute("data-ready") === "1") return;
      var type = el.getAttribute("data-fig");
      var opts = {};
      for (var i = 0; i < el.attributes.length; i++) {
        var attr = el.attributes[i];
        if (attr.name.indexOf("data-") === 0 && attr.name !== "data-fig" && attr.name !== "data-ready") {
          opts[attr.name.slice(5)] = attr.value;
        }
      }
      if (type === "right-triangle") {
        var caption = opts.caption ? "<figcaption>" + esc(opts.caption) + "</figcaption>" : "";
        el.innerHTML = rightTriangle(opts) + caption;
        el.setAttribute("data-ready", "1");
      }
    });
  }

  return { rightTriangle: rightTriangle, hydrate: hydrate, themes: THEMES };
});
