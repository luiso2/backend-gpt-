/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportar como sitio estático
  output: 'export',
  
  // Como estará en /mercatop-v2, necesitamos especificar el basePath
  // basePath: '/mercatop-v2',
  
  // Para que los assets se carguen correctamente
  // assetPrefix: '/mercatop-v2',
  
  // Optimizaciones para hosting estático
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
  
  // Trailing slash para compatibilidad con servidores web tradicionales
  trailingSlash: true,
  
  // Variables de entorno
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://mercatop.com/wp-json/wp/v2',
  },
  
  // Configuración de TypeScript más permisiva para el build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Configuración de ESLint más permisiva para el build
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
