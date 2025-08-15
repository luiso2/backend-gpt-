# Despliegue en Hostinger - Mercatop Portfolio

## Archivos Estáticos Generados

Los archivos estáticos del proyecto se han compilado exitosamente y están ubicados en el directorio `out/`.

## Instrucciones para Hostinger

### 1. Preparación de Archivos
- Todos los archivos necesarios están en la carpeta `out/`
- El proyecto incluye 17 páginas estáticas optimizadas
- Tamaño total del bundle: ~99.8 kB (First Load JS)

### 2. Subida a Hostinger
1. Accede al panel de control de Hostinger
2. Ve a "Administrador de archivos" o usa FTP
3. Navega a la carpeta `public_html` de tu dominio
4. Sube **todo el contenido** de la carpeta `out/` (no la carpeta en sí)
5. Asegúrate de que el archivo `index.html` esté en la raíz de `public_html`

### 3. Estructura de Archivos en Hostinger
```
public_html/
├── index.html (página principal)
├── 404.html
├── _next/ (archivos de Next.js)
├── assets/
├── automations/
├── cart/
├── checkout/
├── contact/
├── portfolio/
├── services/
└── ... (otras páginas)
```

### 4. Configuración del Dominio
- El sitio funcionará automáticamente una vez subidos los archivos
- No se requiere configuración adicional de servidor
- Todas las rutas están pre-renderizadas como contenido estático

### 5. Páginas Disponibles
- `/` - Página principal
- `/portfolio` - Portafolio de proyectos
- `/services` - Servicios
- `/services/software-development` - Desarrollo de software
- `/services/n8n-automations` - Automatizaciones N8N
- `/contact` - Contacto
- `/automations` - Automatizaciones
- `/growth-diagnostic` - Diagnóstico de crecimiento
- `/partnerships` - Alianzas
- `/cart` - Carrito de compras
- `/checkout` - Proceso de pago
- `/privacy` - Política de privacidad
- `/terms` - Términos y condiciones
- `/cookies` - Política de cookies

### 6. Optimizaciones Incluidas
- ✅ Exportación estática configurada
- ✅ Imágenes sin optimización (compatible con hosting estático)
- ✅ Trailing slash habilitado
- ✅ TypeScript y ESLint configurados para build
- ✅ Variables de entorno para producción

### 7. Comandos Útiles
```bash
# Regenerar archivos estáticos
npm run build

# Desarrollo local
npm run dev
```

### 8. Notas Importantes
- Los archivos en `out/` son completamente estáticos
- No se requiere Node.js en el servidor de Hostinger
- El sitio funcionará en cualquier servidor web estático
- Todas las funcionalidades del lado del cliente están incluidas

---

**Fecha de compilación:** $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
**Versión de Next.js:** 15.4.5
**Total de páginas:** 17 páginas estáticas