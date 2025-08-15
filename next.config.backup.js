/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para producción
  // output: 'export', // Deshabilitado temporalmente para desarrollo con APIs
  
  // Optimizaciones para desarrollo
  images: {
    unoptimized: true,
  },
  
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
  
  // Deshabilitar trailing slash para compatibilidad con hosting
  trailingSlash: true,
  
  // Configuración para exportación estática
  distDir: 'out',
}

module.exports = nextConfig