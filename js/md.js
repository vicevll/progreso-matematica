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

    closeList();
    html.push("<p>" + inline(line) + "</p>");
  }

  closeList();
  return html.join("\n");
};
