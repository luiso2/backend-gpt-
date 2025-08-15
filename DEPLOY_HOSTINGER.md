# 🚀 Guía de Deploy a Hostinger - MERKTOP Portfolio

## 📋 Requisitos Previos

- Node.js instalado
- Proyecto MERKTOP configurado
- Cuenta de Hostinger con acceso al File Manager

## 🔧 Configuración del Proyecto

El proyecto ya está configurado para generar archivos estáticos compatibles con Hostinger:

### Archivos de Configuración:
- `next.config.hostinger.js` - Configuración optimizada para Hostinger
- `deploy-hostinger.ps1` - Script automatizado de deploy
- `package.json` - Scripts actualizados

## 🚀 Proceso de Deploy

### Opción 1: Deploy Automatizado (Recomendado)

```bash
npm run deploy:hostinger
```

Este comando:
1. ✅ Limpia archivos anteriores
2. ⚙️ Configura para exportación estática
3. 🔨 Genera archivos optimizados
4. 📝 Crea archivo .htaccess
5. 🔄 Restaura configuración de desarrollo

### Opción 2: Deploy Manual

```bash
# 1. Configurar para Hostinger
copy next.config.hostinger.js next.config.js

# 2. Generar archivos estáticos
npm run build

# 3. Restaurar configuración
copy next.config.backup.js next.config.js
```

## 📁 Subida a Hostinger

### Paso 1: Preparar Archivos
1. Ve a la carpeta `out/` generada
2. Selecciona **TODO** el contenido (no la carpeta `out` misma)
3. Comprime en un archivo ZIP

### Paso 2: Subir a Hostinger
1. Accede al **File Manager** de Hostinger
2. Ve a la carpeta `public_html`
3. **IMPORTANTE**: Elimina cualquier archivo anterior (index.html, etc.)
4. Sube el archivo ZIP
5. Extrae el contenido directamente en `public_html`

### Paso 3: Verificar
1. Visita tu dominio
2. Verifica que todas las páginas funcionen
3. Comprueba que los estilos se carguen correctamente

## 🔍 Verificación de Archivos Generados

Después del build, la carpeta `out/` debe contener:

```
out/
├── .htaccess              # Configuración del servidor
├── index.html             # Página principal
├── portfolio/
│   └── index.html         # Página de portfolio
├── services/
│   └── index.html         # Página de servicios
├── contact/
│   └── index.html         # Página de contacto
├── _next/
│   ├── static/            # Archivos CSS y JS
│   └── ...
└── assets/                # Imágenes y recursos
```

## ⚠️ Problemas Comunes y Soluciones

### Error: "API routes not supported"
**Solución**: Las rutas API se deshabilitan automáticamente en la exportación estática.

### Error: "Images not loading"
**Solución**: Las imágenes están configuradas como `unoptimized: true` para compatibilidad.

### Error: "404 en rutas"
**Solución**: El archivo `.htaccess` maneja las rutas SPA automáticamente.

### Error: "Estilos no se cargan"
**Solución**: Verifica que el `trailingSlash: true` esté configurado.

## 🔧 Configuraciones Importantes

### next.config.hostinger.js
```javascript
output: 'export'           // Genera archivos estáticos
images: { unoptimized: true } // Compatible con hosting estático
trailingSlash: true        // URLs compatibles con servidores web
```

### .htaccess Generado
- ✅ Redirecciones SPA
- ✅ Caché optimizado
- ✅ Compresión GZIP
- ✅ Configuración de headers

## 📞 Soporte

Si encuentras problemas:
1. Revisa los logs del build
2. Verifica que todos los archivos se hayan subido
3. Comprueba la configuración del .htaccess
4. Contacta soporte si persisten los errores

## 🎉 ¡Listo!

Tu sitio MERKTOP estará disponible en tu dominio de Hostinger con:
- ⚡ Carga rápida (archivos estáticos)
- 🔍 SEO optimizado
- 📱 Responsive design
- 🎨 Todos los estilos y animaciones