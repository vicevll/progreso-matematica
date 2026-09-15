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
      fill: "rgba(142, 183, 204, 0.10)",
      grid: "rgba(203, 216, 218, 0.10)"
    },
    light: {
      stroke: "#334155",
      text: "#0f172a",
      muted: "#475569",
      accent: "#2563eb",
      fill: "rgba(37, 99, 235, 0.08)",
      grid: "rgba(51, 65, 85, 0.12)"
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

  /* ---------- Gráficas de funciones ---------- */

  var FUNC_NAMES = {
    sin: 1, cos: 1, tan: 1, asin: 1, acos: 1, atan: 1,
    sqrt: 1, cbrt: 1, abs: 1, exp: 1, ln: 1, log: 1,
    sign: 1, floor: 1, ceil: 1
  };

  function tokenizeFunc(expr) {
    var toks = [];
    var i = 0;
    var s = String(expr || "").replace(/\s+/g, "");
    while (i < s.length) {
      var c = s.charAt(i);
      if ((c >= "0" && c <= "9") || c === ".") {
        var j = i;
        while (j < s.length && ((s.charAt(j) >= "0" && s.charAt(j) <= "9") || s.charAt(j) === ".")) j++;
        toks.push({ t: "num", v: parseFloat(s.slice(i, j)) });
        i = j;
        continue;
      }
      if ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || c === "_") {
        var k = i;
        while (k < s.length && ((s.charAt(k) >= "a" && s.charAt(k) <= "z") || (s.charAt(k) >= "A" && s.charAt(k) <= "Z") || (s.charAt(k) >= "0" && s.charAt(k) <= "9") || s.charAt(k) === "_")) k++;
        toks.push({ t: "id", v: s.slice(i, k) });
        i = k;
        continue;
      }
      var prev = toks.length ? toks[toks.length - 1] : null;
      var unaryMinus = c === "-" &&
        (!prev || prev.t === "op" || prev.t === "lp" || prev.t === "neg" || (prev.t === "id" && FUNC_NAMES[prev.v]));
      if (unaryMinus) toks.push({ t: "neg" });
      else if (c === "+" || c === "-" || c === "*" || c === "/" || c === "^") toks.push({ t: "op", v: c });
      else if (c === "(") toks.push({ t: "lp" });
      else if (c === ")") toks.push({ t: "rp" });
      else return null;
      i++;
    }
    return toks;
  }

  function toRPN(toks) {
    var out = [];
    var stack = [];
    var prec = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };
    for (var i = 0; i < toks.length; i++) {
      var t = toks[i];
      if (t.t === "num") { out.push(t); continue; }
      if (t.t === "id") {
        if (FUNC_NAMES[t.v]) stack.push({ t: "func", v: t.v });
        else out.push(t);
        continue;
      }
      if (t.t === "neg") { stack.push(t); continue; }
      if (t.t === "lp") { stack.push(t); continue; }
      if (t.t === "rp") {
        while (stack.length && stack[stack.length - 1].t !== "lp") out.push(stack.pop());
        if (!stack.length) return null;
        stack.pop();
        if (stack.length && stack[stack.length - 1].t === "func") out.push(stack.pop());
        continue;
      }
      if (t.t === "op") {
        var rightAssoc = t.v === "^";
        while (stack.length) {
          var top = stack[stack.length - 1];
          var topP = top.t === "op" ? prec[top.v] : (top.t === "neg" ? 3 : -1);
          if (topP === -1) break;
          if (topP > prec[t.v] || (topP === prec[t.v] && !rightAssoc)) out.push(stack.pop());
          else break;
        }
        stack.push(t);
      }
    }
    while (stack.length) {
      var last = stack.pop();
      if (last.t === "lp" || last.t === "rp") return null;
      out.push(last);
    }
    return out;
  }

  function applyFunc(name, a) {
    switch (name) {
      case "sin": return Math.sin(a);
      case "cos": return Math.cos(a);
      case "tan": return Math.tan(a);
      case "asin": return Math.asin(a);
      case "acos": return Math.acos(a);
      case "atan": return Math.atan(a);
      case "sqrt": return Math.sqrt(a);
      case "cbrt": return Math.cbrt(a);
      case "abs": return Math.abs(a);
      case "exp": return Math.exp(a);
      case "ln": return Math.log(a);
      case "log": return Math.log10(a);
      case "sign": return Math.sign(a);
      case "floor": return Math.floor(a);
      case "ceil": return Math.ceil(a);
    }
    return NaN;
  }

  function evaluateRPN(rpn, x) {
    var st = [];
    for (var i = 0; i < rpn.length; i++) {
      var t = rpn[i];
      if (t.t === "num") st.push(t.v);
      else if (t.t === "id") {
        if (t.v === "x") st.push(x);
        else if (t.v === "pi") st.push(Math.PI);
        else if (t.v === "e") st.push(Math.E);
        else return NaN;
      } else if (t.t === "neg") {
        if (!st.length) return NaN;
        st.push(-st.pop());
      } else if (t.t === "func") {
        if (!st.length) return NaN;
        st.push(applyFunc(t.v, st.pop()));
      } else if (t.t === "op") {
        if (st.length < 2) return NaN;
        var b = st.pop();
        var a = st.pop();
        switch (t.v) {
          case "+": st.push(a + b); break;
          case "-": st.push(a - b); break;
          case "*": st.push(a * b); break;
          case "/": st.push(a / b); break;
          case "^": st.push(Math.pow(a, b)); break;
        }
      }
    }
    return st.length === 1 ? st[0] : NaN;
  }

  function compileFunc(expr) {
    var toks = tokenizeFunc(expr);
    if (!toks) return null;
    var rpn = toRPN(toks);
    if (!rpn) return null;
    return function (x) { return evaluateRPN(rpn, x); };
  }

  function niceStep(range, target) {
    if (!(range > 0)) return 1;
    var mag = Math.pow(10, Math.floor(Math.log(range) / Math.LN10));
    var norm = range / mag;
    var step = norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10;
    return step * mag;
  }

  function funcGraph(options) {
    options = options || {};
    var theme = THEMES[options.theme] || THEMES.dark;
    var xmin = toNum(options.xmin, -6);
    var xmax = toNum(options.xmax, 6);
    if (xmin >= xmax) xmax = xmin + 1;

    var exprs = [];
    ["f", "f2", "f3"].forEach(function (k) {
      if (options[k]) {
        var fn = compileFunc(options[k]);
        if (fn) exprs.push(fn);
      }
    });
    if (!exprs.length) return "";

    var W = 560, H = 340, padL = 46, padR = 20, padT = 24, padB = 40;
    var plotW = W - padL - padR;
    var plotH = H - padT - padB;
    var N = 220;

    var curves = exprs.map(function (fn) {
      var pts = [];
      for (var i = 0; i <= N; i++) {
        var x = xmin + (xmax - xmin) * i / N;
        var y = fn(x);
        pts.push([x, isFinite(y) ? y : null]);
      }
      return pts;
    });

    var ymin = isFinite(toNum(options.ymin, NaN)) ? toNum(options.ymin) : Infinity;
    var ymax = isFinite(toNum(options.ymax, NaN)) ? toNum(options.ymax) : -Infinity;
    curves.forEach(function (c) {
      c.forEach(function (p) {
        if (p[1] !== null) {
          if (p[1] < ymin) ymin = p[1];
          if (p[1] > ymax) ymax = p[1];
        }
      });
    });
    if (!isFinite(ymin) || ymin === Infinity) { ymin = -1; ymax = 1; }
    if (ymax - ymin < 1e-9) { ymin -= 1; ymax += 1; }
    var pad = (ymax - ymin) * 0.06;
    ymin -= pad;
    ymax += pad;

    function px(x) { return padL + (x - xmin) / (xmax - xmin) * plotW; }
    function py(y) { return H - padB - (y - ymin) / (ymax - ymin) * plotH; }

    var parts = [];
    var xStep = niceStep(xmax - xmin, 8);
    var yStep = niceStep(ymax - ymin, 8);
    var i;

    for (i = Math.ceil(xmin / xStep) * xStep; i <= xmax; i += xStep) {
      if (Math.abs(i) < xStep * 0.001) continue;
      parts.push('<line x1="' + px(i) + '" y1="' + py(ymin) + '" x2="' + px(i) + '" y2="' + py(ymax) + '" stroke="' + theme.grid + '" stroke-width="1"/>');
      parts.push(label(px(i), py(ymin) + 16, fmt(i), theme));
    }
    for (i = Math.ceil(ymin / yStep) * yStep; i <= ymax; i += yStep) {
      if (Math.abs(i) < yStep * 0.001) continue;
      parts.push('<line x1="' + px(xmin) + '" y1="' + py(i) + '" x2="' + px(xmax) + '" y2="' + py(i) + '" stroke="' + theme.grid + '" stroke-width="1"/>');
      parts.push(label(px(xmin) - 8, py(i) + 4, fmt(i), theme, "end"));
    }

    if (xmin < 0 && xmax > 0) {
      parts.push('<line x1="' + px(0) + '" y1="' + py(ymin) + '" x2="' + px(0) + '" y2="' + py(ymax) + '" stroke="' + theme.stroke + '" stroke-width="1.4"/>');
    }
    if (ymin < 0 && ymax > 0) {
      parts.push('<line x1="' + px(xmin) + '" y1="' + py(0) + '" x2="' + px(xmax) + '" y2="' + py(0) + '" stroke="' + theme.stroke + '" stroke-width="1.4"/>');
    }

    var colors = [theme.accent, "#e0b34d", "#72d19b"];
    curves.forEach(function (c, ci) {
      var d = "";
      var pen = false;
      c.forEach(function (p) {
        if (p[1] === null) { pen = false; return; }
        if (!pen) { d += "M " + px(p[0]) + " " + py(p[1]) + " "; pen = true; }
        else { d += "L " + px(p[0]) + " " + py(p[1]) + " "; }
      });
      if (d) {
        parts.push(
          '<path d="' + d + '" fill="none" stroke="' + (colors[ci] || theme.accent) +
          '" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>'
        );
      }
    });

    if (options.label) parts.push(label(padL + 8, padT + 16, options.label, theme, "start"));

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
      var caption = opts.caption ? "<figcaption>" + esc(opts.caption) + "</figcaption>" : "";
      if (type === "right-triangle") {
        el.innerHTML = rightTriangle(opts) + caption;
        el.setAttribute("data-ready", "1");
      } else if (type === "func") {
        el.innerHTML = funcGraph(opts) + caption;
        el.setAttribute("data-ready", "1");
      }
    });
  }

  return { rightTriangle: rightTriangle, funcGraph: funcGraph, hydrate: hydrate, themes: THEMES };
});
