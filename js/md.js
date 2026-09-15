window.mdToHtml = function (md) {
  function inline(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  var lines = md.split("\n");
  var html = [];
  var listType = null;

  function closeList() {
    if (listType) {
      html.push("</" + listType + ">");
      listType = null;
    }
  }

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();

    if (line === "") {
      closeList();
      continue;
    }

    var heading = line.match(/^(#{2,4})\s+(.*)$/);
    if (heading) {
      closeList();
      var level = heading[1].length;
      html.push("<h" + level + ">" + inline(heading[2]) + "</h" + level + ">");
      continue;
    }

    var bullet = line.match(/^[-*]\s+(.*)$/);
    if (bullet) {
      if (listType !== "ul") {
        closeList();
        html.push("<ul>");
        listType = "ul";
      }
      html.push("<li>" + inline(bullet[1]) + "</li>");
      continue;
    }

    var numbered = line.match(/^\d+[.)]\s+(.*)$/);
    if (numbered) {
      if (listType !== "ol") {
        closeList();
        html.push("<ol>");
        listType = "ol";
      }
      html.push("<li>" + inline(numbered[1]) + "</li>");
      continue;
    }

    var fig = line.match(/^:::fig\s+([a-z-]+)\s*(.*)$/);
    if (fig) {
      closeList();
      var attrs = "";
(fig[2] || "").split(/\s+/).forEach(function (pair) {
        if (!pair) return;
        var kv = pair.split("=");
        if (!kv[0]) return;
        var value = String(kv.slice(1).join("="));
        try { value = decodeURIComponent(value); } catch (e) { /* dejar tal cual */ }
        attrs += ' data-' + kv[0] + '="' + value.replace(/"/g, "&quot;") + '"';
      });
      html.push('<figure class="fig" data-fig="' + fig[1] + '"' + attrs + "></figure>");
      continue;
    }

    if (line.charAt(0) === "|") {
      closeList();
      var tableRows = [];
      var t = i;
      while (t < lines.length && lines[t].trim().charAt(0) === "|") {
        tableRows.push(lines[t].trim());
        t++;
      }
      i = t - 1;
      var tableCells = tableRows.map(function (row) {
        return row
          .replace(/^\|/, "")
          .replace(/\|$/, "")
          .split("|")
          .map(function (cell) { return cell.trim(); });
      });
      var head = tableCells[0] || [];
      var body = tableCells.slice(2).filter(function (row) {
        return !row.every(function (cell) { return /^[-:\s]*$/.test(cell); });
      });
      html.push(
        '<div class="table-wrap"><table><thead><tr>' +
          head.map(function (cell) { return "<th>" + inline(cell) + "</th>"; }).join("") +
          "</tr></thead><tbody>" +
          body
            .map(function (row) {
              return "<tr>" + row.map(function (cell) { return "<td>" + inline(cell) + "</td>"; }).join("") + "</tr>";
            })
            .join("") +
          "</tbody></table></div>"
      );
      continue;
    }

    closeList();
    html.push("<p>" + inline(line) + "</p>");
  }

  closeList();
  return html.join("\n");
};
