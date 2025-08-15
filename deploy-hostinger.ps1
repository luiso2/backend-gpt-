# Script de deploy para Hostinger - MERKTOP Portfolio
Write-Host "🚀 Iniciando deploy para Hostinger..." -ForegroundColor Green

# Limpiar directorio anterior
if (Test-Path "out") {
    Write-Host "🧹 Limpiando directorio anterior..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "out"
}

# Configurar para Hostinger
Write-Host "⚙️ Configurando para exportación estática..." -ForegroundColor Blue
Copy-Item "next.config.hostinger.js" "next.config.js" -Force

# Ejecutar build
Write-Host "🔨 Generando archivos estáticos..." -ForegroundColor Blue
npm run build

# Verificar resultado
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build completado exitosamente!" -ForegroundColor Green
    
    # Crear .htaccess
    Write-Host "📝 Creando archivo .htaccess..." -ForegroundColor Blue
    
    $content = @()
    $content += "# Configuración para MERKTOP en Hostinger"
    $content += "RewriteEngine On"
    $content += ""
    $content += "# Redireccionar rutas SPA"
    $content += "RewriteCond %{REQUEST_FILENAME} !-f"
    $content += "RewriteCond %{REQUEST_FILENAME} !-d"
    $content += "RewriteRule ^(.*)$ /index.html [L]"
    $content += ""
    $content += "# Configuración de caché"
    $content += "<IfModule mod_expires.c>"
    $content += "    ExpiresActive On"
    $content += "    ExpiresByType text/css 'access plus 1 year'"
    $content += "    ExpiresByType application/javascript 'access plus 1 year'"
    $content += "    ExpiresByType image/png 'access plus 1 year'"
    $content += "    ExpiresByType image/jpg 'access plus 1 year'"
    $content += "    ExpiresByType image/jpeg 'access plus 1 year'"
    $content += "    ExpiresByType image/gif 'access plus 1 year'"
    $content += "    ExpiresByType image/svg+xml 'access plus 1 year'"
    $content += "    ExpiresByType image/webp 'access plus 1 year'"
    $content += "</IfModule>"
    $content += ""
    $content += "# Compresión GZIP"
    $content += "<IfModule mod_deflate.c>"
    $content += "    AddOutputFilterByType DEFLATE text/plain"
    $content += "    AddOutputFilterByType DEFLATE text/html"
    $content += "    AddOutputFilterByType DEFLATE text/xml"
    $content += "    AddOutputFilterByType DEFLATE text/css"
    $content += "    AddOutputFilterByType DEFLATE application/xml"
    $content += "    AddOutputFilterByType DEFLATE application/xhtml+xml"
    $content += "    AddOutputFilterByType DEFLATE application/rss+xml"
    $content += "    AddOutputFilterByType DEFLATE application/javascript"
    $content += "    AddOutputFilterByType DEFLATE application/x-javascript"
    $content += "</IfModule>"
    
    $content | Out-File -FilePath "out\.htaccess" -Encoding UTF8
    
    Write-Host "📁 Archivos listos en la carpeta 'out'" -ForegroundColor Green
    Write-Host "📋 Instrucciones para subir a Hostinger:" -ForegroundColor Cyan
    Write-Host "   1. Comprimir todo el contenido de la carpeta 'out'" -ForegroundColor White
    Write-Host "   2. Subir el archivo ZIP al File Manager de Hostinger" -ForegroundColor White
    Write-Host "   3. Extraer en la carpeta public_html" -ForegroundColor White
    Write-Host "   4. ¡Tu sitio estará listo!" -ForegroundColor White
}
else {
    Write-Host "❌ Error en el build. Revisa los errores arriba." -ForegroundColor Red
    exit 1
}

# Restaurar configuración
Write-Host "🔄 Restaurando configuración de desarrollo..." -ForegroundColor Yellow
if (Test-Path "next.config.backup.js") {
    Copy-Item "next.config.backup.js" "next.config.js" -Force
}

Write-Host "🎉 Deploy completado!" -ForegroundColor Green