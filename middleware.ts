import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Clonar la respuesta
  const response = NextResponse.next()

  // Solo en desarrollo: añadir headers para evitar caché
  if (process.env.NODE_ENV === 'development') {
    // Evitar caché del navegador
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    response.headers.set('Surrogate-Control', 'no-store')
    
    // Headers adicionales para desarrollo
    response.headers.set('X-Development-Mode', 'true')
    response.headers.set('X-Cache-Status', 'BYPASS')
  }

  return response
}

// Aplicar a todas las rutas
export const config = {
  matcher: '/:path*',
}