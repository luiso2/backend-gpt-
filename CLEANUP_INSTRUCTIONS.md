# INSTRUCCIONES DE LIMPIEZA Y ACTUALIZACIÓN

## 🗑️ ARCHIVOS CSS A ELIMINAR

Por favor, elimina TODOS estos archivos CSS del proyecto para evitar conflictos:

### En `/src/styles/`:
- `Navigation.css`
- `navigation.css`
- `ai-panel.css`
- `AIPanel.css`
- `header.css`
- `navbar.css`
- `menu.css`
- `dropdown.css`
- Cualquier otro archivo CSS relacionado con navegación o header

### En `/src/components/layout/`:
- `Navigation.module.css`
- `navigation.module.css`
- Cualquier archivo CSS en esta carpeta

### En `/src/components/ui/`:
- `AIPanel.module.css`
- `ai-panel.module.css`
- Cualquier archivo CSS relacionado con AIPanel

## 📝 CAMBIOS EN LAYOUT.TSX

Si tu `layout.tsx` importa archivos CSS para el navigation, debes eliminar esas importaciones:

```tsx
// ELIMINAR estas líneas si existen:
import '@/styles/Navigation.css'
import '@/styles/navigation.css'
import '@/styles/header.css'
import '@/styles/global.css' // Solo si contiene estilos del header

// El layout debe quedar limpio, algo así:
import Navigation from '@/components/layout/Navigation'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}
```

## ✅ VERIFICACIÓN

Después de eliminar los archivos:

1. **Busca referencias**: Usa la búsqueda global (Ctrl+Shift+F) para buscar:
   - `import.*\.css`
   - `Navigation.css`
   - `AIPanel.css`
   - `styles.module`

2. **Elimina imports huérfanos**: Si encuentras algún import de CSS relacionado con Navigation o AIPanel, elimínalo.

3. **Limpia el cache de Next.js**:
   ```bash
   rm -rf .next
   npm run dev
   ```

## 🎯 RESULTADO ESPERADO

- El header ahora usa CSS-in-JS completamente autocontenido
- No hay conflictos de CSS
- El dropdown se posiciona correctamente bajo "Services"
- El AI Panel se centra perfectamente en la pantalla
- Todo es responsive y funciona en mobile
- Los estilos son consistentes y mantenibles

## 🐛 SOLUCIÓN DE PROBLEMAS

Si algo no se ve bien después de la limpieza:

1. **Verifica que no queden imports de CSS** en ningún componente
2. **Revisa la consola del navegador** por errores 404 de archivos CSS
3. **Asegúrate de que el LanguageContext** esté proporcionando las traducciones correctamente
4. **Si el logo no aparece**, verifica que `/public/logo.jpg` existe

## 💡 VENTAJAS DE ESTE ENFOQUE

1. **Sin conflictos**: Todo el CSS está encapsulado en los componentes
2. **Mejor rendimiento**: No se cargan múltiples archivos CSS
3. **Más mantenible**: Los estilos están junto al código que los usa
4. **Dinámico**: Puedes cambiar estilos basándote en props o estado
5. **Type-safe**: TypeScript puede verificar los objetos de estilo