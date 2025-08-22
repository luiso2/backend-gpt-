@echo off
echo 🚀 Deploying Merktop with SSR configuration...

REM Cambiar al directorio del script
cd /d "%~dp0"

REM Verificar que Git está configurado
git rev-parse --git-dir >nul 2>&1
if errorlevel 1 (
    echo ❌ Error: Este no es un repositorio Git
    pause
    exit /b 1
)

REM Añadir todos los cambios
echo 📦 Adding changes...
git add .

REM Verificar que hay cambios para hacer commit
git diff --staged --quiet
if not errorlevel 1 (
    echo ℹ️  No changes to commit
    pause
    exit /b 0
)

REM Hacer commit
echo 💾 Committing changes...
git commit -m "feat: configure SSR deployment for Railway - Update next.config.js for SSR optimization - Fix package.json scripts and zod version - Optimize middleware.ts for production SSR - Remove static export configurations"

REM Push a GitHub
echo 🔗 Pushing to GitHub...
git push

echo ✅ Deploy initiated! Check Railway for deployment status.
echo 🌐 URL: https://merktop-production.up.railway.app
pause
