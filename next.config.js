/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para Server-Side Rendering (SSR)
  // NO usar output: 'export' para SSR
  
  // Optimizaciones de imágenes para SSR
  images: {
    unoptimized: false, // Usar optimizador de Next.js para SSR
    domains: ['merktop.com'], // Dominios permitidos para imágenes externas
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // NO usar trailingSlash para SSR
  trailingSlash: false,
  
  // Configuración de TypeScript permisiva para el build
  typescript: {
    ignoreBuildErrors: true, // Temporal para Railway
  },
  
  // Configuración de ESLint permisiva para el build
  eslint: {
    ignoreDuringBuilds: true, // Temporal para Railway
  },
  
  // Variables de entorno para producción
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://merktop.com/wp-json/wp/v2',
  },
  
  // Configuración experimental para SSR
  experimental: {
    optimizeCss: true, // Optimizar CSS para SSR
    scrollRestoration: true, // Restaurar scroll en navegación
  },
  
  // Configuración de webpack optimizada para SSR
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones para producción
    if (!dev) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
          },
        },
      };
    }
    
    return config;
  },
  
  // Headers para seguridad y performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig