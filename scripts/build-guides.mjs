import { createRequire } from "module";
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "fs";
import { spawn } from "child_process";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const katex = require(join(root, "vendor/katex/katex.min.js"));
const diagram = require(join(root, "js/diagram.js"));

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatPlain(text) {
  return escapeHtml(text).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function renderMath(tex, display) {
  return katex.renderToString(tex, { throwOnError: false, displayMode: display });
}

function renderText(text) {
  const out = [];
  const re = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;
  let last = 0;
  let match;
  while ((match = re.exec(text))) {
    out.push(formatPlain(text.slice(last, match.index)));
    const token = match[0];
    const display = token.startsWith("$$");
    out.push(renderMath(display ? token.slice(2, -2) : token.slice(1, -1), display));
    last = match.index + token.length;
  }
  out.push(formatPlain(text.slice(last)));
  return out.join("");
}

function renderMathInRaw(line) {
  return line.replace(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g, (token) => {
    const display = token.startsWith("$$");
    return renderMath(display ? token.slice(2, -2) : token.slice(1, -1), display);
  });
}

function parseParams(raw) {
  const params = {};
  (raw || "").split(/\s+/).forEach((pair) => {
    if (!pair) return;
    const [key, ...rest] = pair.split("=");
    if (!key) return;
    let value = rest.join("=").replace(/\+/g, " ");
    try { value = decodeURIComponent(value); } catch (e) { /* dejar */ }
    params[key] = value;
  });
  return params;
}

function figureBlock(line) {
  const match = line.match(/^:::fig\s+([a-z-]+)\s*(.*)$/);
  if (!match) return "";
  const params = parseParams(match[2]);
  params.theme = "light";
  const caption = params.caption ? `<figcaption>${escapeHtml(params.caption)}</figcaption>` : "";
  if (match[1] === "right-triangle") {
    return `<figure class="fig">${diagram.rightTriangle(params)}${caption}</figure>`;
  }
  return "";
}

function markdownToHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let listType = null;
  let inRawHtml = false;

  function closeList() {
    if (listType) {
      html.push(`</${listType}>`);
      listType = null;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (inRawHtml) {
      html.push(renderMathInRaw(line));
      if (/^<\/div>/i.test(trimmed)) inRawHtml = false;
      continue;
    }

    if (trimmed === "") {
      closeList();
      continue;
    }

    if (/^:::fig\s/.test(trimmed)) {
      closeList();
      html.push(figureBlock(trimmed));
      continue;
    }

    if (/^<div/i.test(trimmed)) {
      closeList();
      inRawHtml = true;
      html.push(renderMathInRaw(line));
      continue;
    }

    const heading = trimmed.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${renderText(heading[2])}</h${level}>`);
      continue;
    }

    if (/^\|/.test(trimmed)) {
      closeList();
      const rows = [];
      let j = i;
      while (j < lines.length && /^\|/.test(lines[j].trim())) {
        rows.push(lines[j].trim());
        j++;
      }
      i = j - 1;
      const cells = rows.map((row) =>
        row.replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim())
      );
      const header = cells[0] || [];
      const body = cells.slice(2).filter((row) => !row.every((cell) => /^[-:\s]*$/.test(cell)));
      html.push(
        "<table><thead><tr>" +
          header.map((cell) => `<th>${renderText(cell)}</th>`).join("") +
          "</tr></thead><tbody>" +
          body.map((row) => "<tr>" + row.map((cell) => `<td>${renderText(cell)}</td>`).join("") + "</tr>").join("") +
          "</tbody></table>"
      );
      continue;
    }

    const bullet = trimmed.match(/^[-*]\s+(.*)$/);
    if (bullet) {
      if (listType !== "ul") {
        closeList();
        html.push("<ul>");
        listType = "ul";
      }
      html.push(`<li>${renderText(bullet[1])}</li>`);
      continue;
    }

    const numbered = trimmed.match(/^\d+[.)]\s+(.*)$/);
    if (numbered) {
      if (listType !== "ol") {
        closeList();
        html.push("<ol>");
        listType = "ol";
      }
      html.push(`<li>${renderText(numbered[1])}</li>`);
      continue;
    }

    closeList();
    html.push(`<p>${renderText(trimmed)}</p>`);
  }

  closeList();
  return html.join("\n");
}

const PRINT_CSS = `
@page { size: A4; margin: 16mm 15mm; }
* { box-sizing: border-box; }
body { margin: 0; color: #111827; font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif; font-size: 11.5pt; line-height: 1.55; }
h1 { font-size: 23pt; letter-spacing: -0.02em; margin: 0 0 8px; }
h2 { font-size: 14pt; margin: 24px 0 8px; padding-bottom: 4px; border-bottom: 1px solid #d8dee3; }
h3 { font-size: 12pt; margin: 18px 0 6px; color: #1f2937; }
p { margin: 8px 0; }
strong { font-weight: 700; }
table { width: 100%; margin: 12px 0; border-collapse: collapse; font-size: 10pt; }
th, td { padding: 5px 8px; border: 1px solid #d8dee3; text-align: center; }
th { background: #f4f7f9; }
ol, ul { margin: 8px 0 8px 20px; padding: 0; }
li { margin: 4px 0; }
.fig { margin: 14px 0; text-align: center; page-break-inside: avoid; }
.fig-svg { width: 100%; max-width: 300px; height: auto; }
figcaption { margin-top: 4px; color: #4b5563; font-size: 9.5pt; }
.results { column-count: 2; column-gap: 20px; margin-top: 10px; font-size: 10pt; }
.results .r { break-inside: avoid; margin: 3px 0; padding-bottom: 2px; border-bottom: 1px dotted #e2e8ee; }
.katex { font-size: 1.03em; }
.katex-display { margin: 10px 0; }
`;

function buildHtml(markdown, title) {
  const body = markdownToHtml(markdown);
  const katexCss = "file://" + join(root, "vendor/katex/katex.min.css");
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<title>${escapeHtml(title)}</title>
<link rel="stylesheet" href="${katexCss}" />
<style>${PRINT_CSS}</style>
</head>
<body>
${body}
</body>
</html>`;
}

function runChrome(pdfPath, htmlPath, profile) {
  const flags = [
    "--headless=new",
    "--disable-gpu",
    "--disable-extensions",
    "--disable-background-networking",
    "--disable-sync",
    "--mute-audio",
    "--no-first-run",
    "--no-pdf-header-footer",
    `--user-data-dir=${profile}`,
    "--virtual-time-budget=6000",
    `--print-to-pdf=${pdfPath}`,
    "file://" + htmlPath
  ];
  return new Promise((resolve, reject) => {
    const before = existsSync(pdfPath) ? statSync(pdfPath).mtimeMs : 0;
    const child = spawn(CHROME, flags, { stdio: "ignore" });
    const started = Date.now();
    const timer = setInterval(() => {
      const fresh = existsSync(pdfPath) && statSync(pdfPath).mtimeMs > before + 500;
      const settled = fresh && Date.now() - started > 4000;
      if (settled) {
        clearInterval(timer);
        try { child.kill("SIGKILL"); } catch (e) { /* ya terminó */ }
        resolve();
      } else if (Date.now() - started > 90000) {
        clearInterval(timer);
        try { child.kill("SIGKILL"); } catch (e) { /* ignorar */ }
        reject(new Error("Chrome no generó el PDF a tiempo: " + pdfPath));
      }
    }, 500);
  });
}

async function buildGuide(name, title) {
  const mdPath = join(root, "recursos", `${name}.md`);
  const outDir = join(root, ".build");
  const htmlPath = join(outDir, `${name}.html`);
  const pdfPath = join(root, "recursos", `${name}.pdf`);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(htmlPath, buildHtml(readFileSync(mdPath, "utf8"), title), "utf8");
  await runChrome(pdfPath, htmlPath, `/tmp/chrome-guides-${name}`);
  console.log("PDF generado:", pdfPath);
}

const wanted = process.argv[2];
const guides = [
  ["trigonometria-simple", "Trigonometría"],
  ["trigonometria-ejercicios", "Trigonometría · 50 ejercicios"]
].filter(([name]) => !wanted || name === wanted);

for (const [name, title] of guides) await buildGuide(name, title);
