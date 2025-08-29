/**
 * Feature flag system for MERKTOP UI enhancements
 * Allows progressive enhancement without breaking existing functionality
 */

export interface FeatureFlags {
  liquidGlass: boolean
  reducedMotion: boolean
}

/**
 * Check if Liquid Glass effects are enabled
 * Precedence: query parameter > cookie > environment variable > default
 */
export function isLiquidGlassEnabled(): boolean {
  // Check query parameter first (for debug/testing)
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search)
    const glassParam = urlParams.get('glass')
    if (glassParam === 'on' || glassParam === 'true') return true
    if (glassParam === 'off' || glassParam === 'false') return false
    if (glassParam === 'debug') return true // debug mode enables glass
  }

  // Check environment variable
  const envFlag = process.env.NEXT_PUBLIC_LIQUID_GLASS
  if (envFlag === 'false' || envFlag === '0') {
    return false
  }

  // Check for browser support
  if (typeof window !== 'undefined') {
    // Check if CSS backdrop-filter is supported
    const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(10px)') || 
                                   CSS.supports('-webkit-backdrop-filter', 'blur(10px)')
    
    if (!supportsBackdropFilter) {
      return false
    }

    // Check user's motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Get cookie preference if available
    try {
      const cookieFlag = document.cookie
        .split(';')
        .find(row => row.trim().startsWith('liquid-glass='))
        ?.split('=')[1]
      
      if (cookieFlag === 'false') {
        return false
      }
    } catch {
      // Ignore cookie errors
    }
  }

  // Default to enabled if environment variable is true or undefined
  return envFlag !== 'false'
}

/**
 * Check if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get all feature flags
 */
export function getFeatureFlags(): FeatureFlags {
  return {
    liquidGlass: isLiquidGlassEnabled(),
    reducedMotion: prefersReducedMotion()
  }
}

/**
 * Set liquid glass preference via cookie
 */
export function setLiquidGlassPreference(enabled: boolean): void {
  if (typeof document === 'undefined') return
  
  document.cookie = `liquid-glass=${enabled}; path=/; max-age=${60 * 60 * 24 * 365}`
}

/**
 * Check if debug mode is enabled
 */
export function isGlassDebugMode(): boolean {
  if (typeof window === 'undefined') return false
  
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('glass') === 'debug'
}

/**
 * Get glass intensity from URL or default
 */
export function getGlassIntensity(): 'subtle' | 'default' | 'bold' {
  if (typeof window === 'undefined') return 'default'
  
  const urlParams = new URLSearchParams(window.location.search)
  const intensity = urlParams.get('intensity')
  
  if (intensity === 'subtle' || intensity === 'bold') {
    return intensity
  }
  
  return 'default'
}