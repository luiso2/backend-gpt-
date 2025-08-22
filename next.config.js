/** @type {import('next').NextConfig} */
const nextConfig = {
  // Comentado para desarrollo local
  // output: 'export',
  
  // Directorio de salida
  // distDir: 'out',
  
  // Desactivar caché para exportación estática
  generateBuildId: () => 'build-' + Date.now(),
  
  // Optimizaciones - ajustado para desarrollo
  images: {
    unoptimized: false, // Cambiado para desarrollo local
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
  // experimental: {
  //   missingSuspenseWithCSRBailout: false,
  // },
  
  // Desactivar caché completamente
  onDemandEntries: {
    maxInactiveAge: 0,
    pagesBufferLength: 0,
  },
  
  // Configuración de webpack para desactivar caché
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
}

module.exports = nextConfig