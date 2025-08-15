## PROMPT PARA CONTINUAR - CORRECCIÓN DE DETALLES MERCATOP

**CONTEXTO DEL PROYECTO:**
Tengo un proyecto Next.js 15 con App Router ubicado en `D:\Claude projects2\MERCATOP\salva-mercatop`. Es un sitio web para MERCATOP, una empresa de automatizaciones con IA y desarrollo de software.

**STACK TECNOLÓGICO:**
* Next.js 15.4.5
* React 19.1.0
* TypeScript
* Framer Motion para animaciones
* Tailwind NO está instalado (solo CSS vanilla)
* CSS-in-JS (estilos inline en objetos)
* Tema: Verde oscuro (`#0A2E1F`) con acento verde neón (`#B8E92D`)

**TRABAJO REALIZADO:**
1. **Conversión completa a CSS-in-JS**: Se eliminaron TODOS los archivos CSS externos y se reescribieron los componentes principales con estilos inline:
   - Navigation.tsx (header con dropdowns)
   - HeroSection.tsx (hero mejorada)
   - CTAFooter.tsx
   - page.tsx (homepage)
   - services/page.tsx
   - portfolio/page.tsx

2. **Hero Section mejorada** con:
   - Diagrama de automatización n8n + IA
   - Robot con diseño púrpura/violeta
   - Nodos orbitales animados
   - Efectos de partículas y gradientes
   - Responsive design completo

3. **Tema de colores coherente**:
   ```css
   /* Fondos */
   #0A2E1F /* Verde muy oscuro - principal */
   #0F3D2A /* Verde oscuro - secundario */
   
   /* Acentos */
   #B8E92D /* Verde neón - principal */
   #7FD858 /* Verde neón - secundario */
   
   /* Texto */
   #ffffff /* Blanco puro */
   rgba(255, 255, 255, 0.8) /* Gris claro */
   rgba(255, 255, 255, 0.6) /* Gris medio */
   ```

**ARCHIVOS CLAVE:**
- `/src/components/sections/HeroSection.tsx` - Hero con diagrama n8n
- `/src/components/layout/Navigation.tsx` - Header con navegación
- `/src/app/page.tsx` - Homepage
- `/src/app/services/page.tsx` - Página de servicios
- `/src/app/portfolio/page.tsx` - Página de portafolio
- `/src/app/globals.css` - ÚNICO archivo CSS (variables globales)

**DETALLES QUE NECESITAN CORRECCIÓN:**

### 1. **Hero Section - Diagrama de Automatización**
- [ ] El robot central podría ser más sofisticado (actualmente es muy simple)
- [ ] Las líneas de conexión a veces se superponen con los nodos
- [ ] En móviles muy pequeños (<375px) algunos textos se cortan
- [ ] Falta un efecto de "datos fluyendo" entre los nodos

### 2. **Navigation Component**
- [ ] Los dropdowns de servicios necesitan mejor animación de entrada/salida
- [ ] En tablets (768px-1024px) el menú móvil tiene problemas de z-index
- [ ] El botón "Comenzar" del header debería tener el mismo estilo que el de la Hero
- [ ] Falta indicador visual del item activo en el menú

### 3. **Páginas de Servicios y Portafolio**
- [ ] Las cards de servicios necesitan un efecto hover más suave
- [ ] En portafolio, las imágenes son solo placeholders - necesitan un diseño mejor
- [ ] Los filtros de categorías podrían tener animación al cambiar
- [ ] Falta lazy loading para las grids de items

### 4. **Performance y Optimización**
- [ ] Hay demasiadas animaciones simultáneas que pueden afectar el rendimiento
- [ ] Los keyframes se están agregando múltiples veces al DOM
- [ ] Falta memoización en componentes que no cambian frecuentemente
- [ ] Las partículas animadas consumen mucho CPU en dispositivos móviles

### 5. **Otros Componentes Faltantes**
- [ ] Footer principal (actualmente solo hay CTAFooter)
- [ ] Página de contacto con formulario funcional
- [ ] Componente de testimonios
- [ ] Sección "Sobre Nosotros"
- [ ] Blog o sección de recursos

### 6. **Mejoras UX/UI Sugeridas**
- [ ] Agregar skeleton loaders mientras cargan las secciones
- [ ] Implementar scroll suave entre secciones
- [ ] Agregar breadcrumbs en páginas internas
- [ ] Mejorar feedback visual en formularios
- [ ] Agregar modo oscuro/claro (opcional)

### 7. **Limpieza de Archivos**
Estos archivos CSS ya NO se usan y deben eliminarse:
```
/src/app/services-enhanced.css
/src/app/portfolio-enhanced.css
/src/app/*.css (excepto globals.css)
```

**INSTRUCCIONES PARA CONTINUAR:**
1. Revisa y corrige los detalles listados arriba
2. Mantén SIEMPRE el patrón CSS-in-JS (sin archivos CSS externos)
3. Usa la paleta de colores establecida
4. Asegura que todo sea responsive
5. Optimiza el rendimiento donde sea posible
6. Agrega los componentes faltantes si es necesario

**EJEMPLO DE ESTILO CSS-IN-JS A SEGUIR:**
```tsx
const styles = {
  container: {
    background: 'linear-gradient(135deg, #0A2E1F 0%, #0F3D2A 100%)',
    padding: '80px 0',
    position: 'relative' as const,
  },
  card: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(184, 233, 45, 0.2)',
    borderRadius: '16px',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
  },
  // etc...
}
```

**NOTAS IMPORTANTES:**
- El proyecto usa el Context API para idiomas (LanguageContext)
- Hay un componente AIChat que se abre al interactuar con servicios
- El sitio debe mantener un look profesional y moderno
- Todo el texto debe ser legible sobre los fondos oscuros
- Las animaciones deben ser sutiles pero impactantes

Este prompt contiene toda la información necesaria para continuar trabajando en los detalles y mejoras del sitio MERCATOP.