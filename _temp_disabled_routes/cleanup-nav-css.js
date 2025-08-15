// Script para limpiar archivos CSS redundantes de navegación
const fs = require('fs');
const path = require('path');

const filesToDelete = [
  'src/styles/navigation-dropdown.css',
  'src/styles/dropdown-final.css',
  'src/styles/nav-dropdown-unified.css',
  'src/styles/dropdown-position-fix.css',
  'src/styles/nav-dropdown-fix.css',
  'src/styles/nav-dropdown-critical-fix.css',
  'src/styles/nav-dropdown-final-fix.css',
  'src/styles/portal-dropdown.css'
];

console.log('🧹 Limpiando archivos CSS redundantes de navegación...\n');

filesToDelete.forEach(file => {
  const filePath = path.join(__dirname, file);
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`✅ Eliminado: ${file}`);
    } else {
      console.log(`⚠️  No encontrado: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error al eliminar ${file}:`, error.message);
  }
});

console.log('\n✨ Limpieza completada! Ahora solo tienes navigation-consolidated.css');
