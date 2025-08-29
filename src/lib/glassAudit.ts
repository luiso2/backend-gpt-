/**
 * Glass Visual Audit Utilities
 * Diagnoses why glass effects may not be visible
 */

export interface GlassAuditResult {
  element: Element
  reason: string
  severity: 'info' | 'warning' | 'error'
  recommendation: string
}

/**
 * Audits all glass components for visibility issues
 */
export function auditGlassVisibility(): GlassAuditResult[] {
  const results: GlassAuditResult[] = []
  
  if (typeof window === 'undefined') {
    return results
  }

  // Find all elements with glass-related classes
  const glassElements = document.querySelectorAll('[class*="backdrop-blur"], [class*="glass-"]')
  
  glassElements.forEach((element) => {
    const computedStyle = window.getComputedStyle(element)
    const rect = element.getBoundingClientRect()
    
    // Check if element is visible
    if (rect.width === 0 || rect.height === 0) {
      results.push({
        element,
        reason: 'Element has zero dimensions',
        severity: 'warning',
        recommendation: 'Check element layout and display properties'
      })
      return
    }
    
    // Check backdrop-filter support
    const backdropFilter = computedStyle.backdropFilter || computedStyle.webkitBackdropFilter
    if (!backdropFilter || backdropFilter === 'none') {
      results.push({
        element,
        reason: 'backdrop-filter not applied or supported',
        severity: 'error',
        recommendation: 'Verify browser support and CSS class application'
      })
    }
    
    // Check for opaque ancestors that might block the effect
    let parent = element.parentElement
    while (parent && parent !== document.body) {
      const parentStyle = window.getComputedStyle(parent)
      const bgColor = parentStyle.backgroundColor
      
      // Check if parent has opaque background
      if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
        const alpha = getAlphaFromColor(bgColor)
        if (alpha === 1) {
          results.push({
            element,
            reason: `Opaque ancestor blocks backdrop-filter: ${parent.tagName}`,
            severity: 'warning',
            recommendation: 'Reduce parent background opacity or restructure DOM'
          })
          break
        }
      }
      
      parent = parent.parentElement
    }
    
    // Check background opacity
    const backgroundColor = computedStyle.backgroundColor
    if (backgroundColor && backgroundColor !== 'transparent') {
      const alpha = getAlphaFromColor(backgroundColor)
      if (alpha < 0.1) {
        results.push({
          element,
          reason: `Background opacity too low (${alpha.toFixed(2)})`,
          severity: 'warning',
          recommendation: 'Increase opacity to 0.15-0.25 for better visibility'
        })
      }
    }
    
    // Check z-index stacking
    const zIndex = computedStyle.zIndex
    if (zIndex === 'auto' || parseInt(zIndex) < 0) {
      const hasTransform = computedStyle.transform !== 'none'
      if (!hasTransform) {
        results.push({
          element,
          reason: 'Element may be behind other content',
          severity: 'info',
          recommendation: 'Add positive z-index or CSS transform for proper stacking'
        })
      }
    }
    
    // Check isolation
    const isolation = computedStyle.isolation
    if (isolation !== 'isolate') {
      results.push({
        element,
        reason: 'Missing isolation: isolate property',
        severity: 'info',
        recommendation: 'Add isolation: isolate to prevent stacking context issues'
      })
    }
  })
  
  return results
}

/**
 * Extract alpha value from CSS color string
 */
function getAlphaFromColor(colorString: string): number {
  // Handle rgba format
  const rgbaMatch = colorString.match(/rgba?\([\d\s,]+,?\s*([\d.]+)\)/)
  if (rgbaMatch) {
    return parseFloat(rgbaMatch[1])
  }
  
  // Handle rgb format (no alpha = 1)
  if (colorString.startsWith('rgb(')) {
    return 1
  }
  
  // Handle hex colors (no alpha = 1)
  if (colorString.startsWith('#')) {
    return 1
  }
  
  // Handle named colors (assume opaque)
  if (colorString !== 'transparent') {
    return 1
  }
  
  return 0
}

/**
 * Get contrast ratio between glass overlay and background
 */
export function calculateGlassContrast(): {
  backgroundLuminance: number
  glassLuminance: number
  contrastRatio: number
  isVisible: boolean
} {
  // Approximate luminance values for MERKTOP colors
  const bgDarkLuminance = 0.152 // #0A2E1F
  const glassBgLuminance = bgDarkLuminance + (0.15 * (1 - bgDarkLuminance)) // Adding 15% white overlay
  
  const contrastRatio = (Math.max(bgDarkLuminance, glassBgLuminance) + 0.05) / 
                       (Math.min(bgDarkLuminance, glassBgLuminance) + 0.05)
  
  return {
    backgroundLuminance: bgDarkLuminance,
    glassLuminance: glassBgLuminance,
    contrastRatio,
    isVisible: contrastRatio >= 1.2 // Threshold for noticeable difference
  }
}

/**
 * Test backdrop-filter support
 */
export function testBackdropSupport(): {
  supported: boolean
  vendor: string | null
  testResults: string[]
} {
  const testResults: string[] = []
  let supported = false
  let vendor: string | null = null
  
  if (typeof CSS === 'undefined') {
    testResults.push('CSS object not available')
    return { supported, vendor, testResults }
  }
  
  // Test standard property
  if (CSS.supports('backdrop-filter', 'blur(10px)')) {
    supported = true
    vendor = 'standard'
    testResults.push('✅ backdrop-filter supported')
  }
  
  // Test webkit prefix
  if (CSS.supports('-webkit-backdrop-filter', 'blur(10px)')) {
    supported = true
    vendor = vendor || 'webkit'
    testResults.push('✅ -webkit-backdrop-filter supported')
  }
  
  if (!supported) {
    testResults.push('❌ backdrop-filter not supported')
    testResults.push('Browser may not support glass effects')
  }
  
  return { supported, vendor, testResults }
}

/**
 * Generate comprehensive audit report
 */
export function generateGlassReport(): string {
  const visibility = auditGlassVisibility()
  const contrast = calculateGlassContrast()
  const support = testBackdropSupport()
  
  let report = '=== LIQUID GLASS AUDIT REPORT ===\\n\\n'
  
  // Browser support
  report += '🔧 BROWSER SUPPORT:\\n'
  support.testResults.forEach(result => {
    report += `  ${result}\\n`
  })
  report += `  Vendor: ${support.vendor || 'none'}\\n\\n`
  
  // Contrast analysis
  report += '🎨 CONTRAST ANALYSIS:\\n'
  report += `  Background luminance: ${contrast.backgroundLuminance.toFixed(3)}\\n`
  report += `  Glass overlay luminance: ${contrast.glassLuminance.toFixed(3)}\\n`
  report += `  Contrast ratio: ${contrast.contrastRatio.toFixed(2)}\\n`
  report += `  Visible threshold: ${contrast.isVisible ? '✅ PASS' : '❌ FAIL'}\\n\\n`
  
  // Element-specific issues
  report += `🔍 ELEMENT AUDIT (${visibility.length} issues found):\\n`
  if (visibility.length === 0) {
    report += '  ✅ No issues detected\\n'
  } else {
    visibility.forEach((issue, index) => {
      const severity = issue.severity === 'error' ? '❌' : 
                      issue.severity === 'warning' ? '⚠️' : 'ℹ️'
      report += `  ${severity} ${issue.reason}\\n`
      report += `     → ${issue.recommendation}\\n`
    })
  }
  
  return report
}

/**
 * CLI-friendly audit runner
 */
export function runGlassAudit(): void {
  console.log(generateGlassReport())
}