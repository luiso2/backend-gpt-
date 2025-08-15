/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportar como sitio estático para Hostinger
  output: 'export',
  
  // Directorio de salida
  distDir: 'out',
  
  // Optimizaciones para hosting estático
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
  
  // Trailing slash para compatibilidad con servidores web
  trailingSlash: true,
  
  // Configuración de TypeScript permisiva para el build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Configuración de ESLint permisiva para el build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Variables de entorno para producción
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://merktop.com/wp-json/wp/v2',
  },
  
  // Configuración para evitar problemas con rutas API en exportación estática
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig