/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportar como sitio estático
  output: 'export',
  
  // Si tu sitio estará en una subcarpeta, especifica aquí
  // basePath: '/next-site',
  
  // Para servir desde el dominio principal
  basePath: '',
  
  // Optimizaciones para hosting estático
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
  
  // Trailing slash para compatibilidad con servidores web tradicionales
  trailingSlash: true,
  
  // Si necesitas variables de entorno en el cliente
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://tudominio.com/wp-json/wp/v2',
  },
}

module.exports = nextConfig
