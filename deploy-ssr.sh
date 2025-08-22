#!/bin/bash

echo "🚀 Deploying Merktop with SSR configuration..."

# Asegurar que estamos en el directorio correcto
cd "$(dirname "$0")"

# Verificar que Git está configurado
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Este no es un repositorio Git"
    exit 1
fi

# Añadir todos los cambios
echo "📦 Adding changes..."
git add .

# Verificar que hay cambios para hacer commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
    exit 0
fi

# Hacer commit
echo "💾 Committing changes..."
git commit -m "feat: configure SSR deployment for Railway

- Update next.config.js for SSR optimization
- Fix package.json scripts and zod version  
- Optimize middleware.ts for production SSR
- Remove static export configurations"

# Push a GitHub
echo "🔗 Pushing to GitHub..."
git push

echo "✅ Deploy initiated! Check Railway for deployment status."
echo "🌐 URL: https://merktop-production.up.railway.app"
