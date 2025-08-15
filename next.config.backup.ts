import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Desactivar caché de compilación
    disableOptimizedLoading: true,
  },
  // Desactivar caché estática
  generateStaticParams: false,
  // Configuración para desactivar caché
  onDemandEntries: {
    // Período en ms que una página permanece en memoria
    maxInactiveAge: 1000,
    // Número de páginas que deben mantenerse simultáneamente
    pagesBufferLength: 2,
  },
};

export default nextConfig;
