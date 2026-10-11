# Servidor local para probar Studappy sin instalar nada (usa PowerShell de Windows).
# Uso: doble clic en servir-local.cmd (carpeta raiz del proyecto).
# Sirve la carpeta del proyecto en http://localhost:5500/ (o el siguiente puerto libre)
# y abre el navegador. Ctrl+C o cerrar la ventana para detenerlo.
param([int]$Puerto = 5500, [switch]$SinNavegador)

$ErrorActionPreference = 'Stop'
$sep = [IO.Path]::DirectorySeparatorChar
$raiz = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..')).TrimEnd($sep)

$tipos = @{
  '.html' = 'text/html; charset=utf-8'
  '.js'   = 'text/javascript; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.txt'  = 'text/plain; charset=utf-8'
  '.svg'  = 'image/svg+xml'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.webp' = 'image/webp'
  '.ico'  = 'image/x-icon'
  '.pdf'  = 'application/pdf'
  '.woff2' = 'font/woff2'
  '.woff' = 'font/woff'
  '.ttf'  = 'font/ttf'
}

# Busca un puerto libre a partir del indicado.
$listener = $null
for ($p = $Puerto; $p -lt $Puerto + 20; $p++) {
  $intento = New-Object System.Net.HttpListener
  $intento.Prefixes.Add("http://localhost:$p/")
  try {
    $intento.Start()
    $listener = $intento
    $Puerto = $p
    break
  } catch {
    $intento.Close()
  }
}
if (-not $listener) {
  Write-Host "No se encontro un puerto libre entre $Puerto y $($Puerto + 19)." -ForegroundColor Red
  exit 1
}

$url = "http://localhost:$Puerto/"
Write-Host ""
Write-Host "  Studappy local listo en $url" -ForegroundColor Green
Write-Host "  Carpeta: $raiz"
Write-Host "  Para detenerlo: Ctrl+C o cierra esta ventana."
Write-Host ""
if (-not $SinNavegador) { Start-Process $url }

function Enviar($res, [int]$codigo, [string]$texto) {
  $bytes = [Text.Encoding]::UTF8.GetBytes($texto)
  $res.StatusCode = $codigo
  $res.ContentType = 'text/plain; charset=utf-8'
  $res.ContentLength64 = $bytes.Length
  $res.OutputStream.Write($bytes, 0, $bytes.Length)
}

try {
  while ($listener.IsListening) {
    # Espera asincrona en intervalos cortos para que Ctrl+C funcione.
    $tarea = $listener.GetContextAsync()
    while (-not $tarea.AsyncWaitHandle.WaitOne(250)) { }
    $ctx = $tarea.GetAwaiter().GetResult()
    $req = $ctx.Request
    $res = $ctx.Response
    $codigo = 200
    try {
      $ruta = [Uri]::UnescapeDataString($req.Url.AbsolutePath)
      if ($ruta.EndsWith('/')) { $ruta += 'index.html' }
      $rel = $ruta.TrimStart('/').Replace('/', [string]$sep)
      $archivo = [IO.Path]::GetFullPath((Join-Path $raiz $rel))
      $primero = ($ruta.TrimStart('/') -split '/')[0]

      if (-not $archivo.StartsWith($raiz + $sep, [StringComparison]::OrdinalIgnoreCase)) {
        $codigo = 403; Enviar $res 403 'Prohibido'
      } elseif ($primero -eq '.git' -or $primero -eq 'dev') {
        $codigo = 404; Enviar $res 404 'No encontrado'
      } elseif (Test-Path -LiteralPath $archivo -PathType Leaf) {
        $bytes = [IO.File]::ReadAllBytes($archivo)
        $ext = [IO.Path]::GetExtension($archivo).ToLowerInvariant()
        $tipo = $tipos[$ext]
        if (-not $tipo) { $tipo = 'application/octet-stream' }
        $res.ContentType = $tipo
        $res.Headers['Cache-Control'] = 'no-store'
        $res.ContentLength64 = $bytes.Length
        if ($req.HttpMethod -ne 'HEAD') { $res.OutputStream.Write($bytes, 0, $bytes.Length) }
      } else {
        $codigo = 404; Enviar $res 404 'No encontrado'
      }
    } catch {
      $codigo = 500
      try { Enviar $res 500 'Error del servidor local' } catch { }
    } finally {
      try { $res.Close() } catch { }
    }
    Write-Host ("  {0} {1} {2}" -f $codigo, $req.HttpMethod, $req.Url.AbsolutePath)
  }
} finally {
  $listener.Stop()
  $listener.Close()
}
