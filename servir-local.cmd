@echo off
rem Abre Studappy en http://localhost:5500 sin instalar nada (usa PowerShell de Windows).
rem Para detenerlo: Ctrl+C o cierra esta ventana.
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0dev\servidor.ps1" %*
if errorlevel 1 pause
