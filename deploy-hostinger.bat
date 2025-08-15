@echo off
echo 🚀 Iniciando deploy para Hostinger...

REM Limpiar directorio anterior
if exist "out" (
    echo 🧹 Limpiando directorio anterior...
    rmdir /s /q "out"
)

REM Configurar para Hostinger
echo ⚙️ Configurando para exportación estática...
copy "next.config.hostinger.js" "next.config.js" /y

REM Ejecutar build
echo 🔨 Generando archivos estáticos...
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build completado exitosamente!
    
    REM Crear .htaccess
    echo 📝 Creando archivo .htaccess...
    (
        echo # Configuración para MERKTOP en Hostinger
        echo RewriteEngine On
        echo.
        echo # Redireccionar rutas SPA
        echo RewriteCond %%{REQUEST_FILENAME} !-f
        echo RewriteCond %%{REQUEST_FILENAME} !-d
        echo RewriteRule ^^(.*)$ /index.html [L]
        echo.
        echo # Configuración de caché
        echo ^<IfModule mod_expires.c^>
        echo     ExpiresActive On
        echo     ExpiresByType text/css "access plus 1 year"
        echo     ExpiresByType application/javascript "access plus 1 year"
        echo     ExpiresByType image/png "access plus 1 year"
        echo     ExpiresByType image/jpg "access plus 1 year"
        echo     ExpiresByType image/jpeg "access plus 1 year"
        echo     ExpiresByType image/gif "access plus 1 year"
        echo     ExpiresByType image/svg+xml "access plus 1 year"
        echo     ExpiresByType image/webp "access plus 1 year"
        echo ^</IfModule^>
        echo.
        echo # Compresión GZIP
        echo ^<IfModule mod_deflate.c^>
        echo     AddOutputFilterByType DEFLATE text/plain
        echo     AddOutputFilterByType DEFLATE text/html
        echo     AddOutputFilterByType DEFLATE text/xml
        echo     AddOutputFilterByType DEFLATE text/css
        echo     AddOutputFilterByType DEFLATE application/xml
        echo     AddOutputFilterByType DEFLATE application/xhtml+xml
        echo     AddOutputFilterByType DEFLATE application/rss+xml
        echo     AddOutputFilterByType DEFLATE application/javascript
        echo     AddOutputFilterByType DEFLATE application/x-javascript
        echo ^</IfModule^>
    ) > "out\.htaccess"
    
    echo 📁 Archivos listos en la carpeta 'out'
    echo 📋 Instrucciones para subir a Hostinger:
    echo    1. Comprimir todo el contenido de la carpeta 'out'
    echo    2. Subir el archivo ZIP al File Manager de Hostinger
    echo    3. Extraer en la carpeta public_html
    echo    4. ¡Tu sitio estará listo!
) else (
    echo ❌ Error en el build. Revisa los errores arriba.
    exit /b 1
)

REM Restaurar configuración
echo 🔄 Restaurando configuración de desarrollo...
if exist "next.config.backup.js" (
    copy "next.config.backup.js" "next.config.js" /y
)

echo 🎉 Deploy completado!