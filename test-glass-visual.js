/**
 * Simple visual test for Liquid Glass effects
 * Run in browser console to verify glass visibility
 */

console.log('🧪 Liquid Glass Visual Test Starting...')

// Test current glass state
const glassEnabled = new URLSearchParams(window.location.search).get('glass')
const intensity = new URLSearchParams(window.location.search).get('intensity') || 'default'

console.log(`Current state: glass=${glassEnabled}, intensity=${intensity}`)

// Find glass elements
const glassElements = document.querySelectorAll('[class*="backdrop-blur"], [class*="glass-"]')
console.log(`Found ${glassElements.length} glass elements`)

if (glassElements.length > 0) {
  // Test first glass element for visibility
  const firstElement = glassElements[0]
  const computedStyle = window.getComputedStyle(firstElement)
  
  console.log('🔍 First Glass Element Analysis:')
  console.log('- backdrop-filter:', computedStyle.backdropFilter || computedStyle.webkitBackdropFilter || 'none')
  console.log('- background:', computedStyle.background)
  console.log('- border:', computedStyle.border)
  console.log('- box-shadow:', computedStyle.boxShadow)
  console.log('- opacity:', computedStyle.opacity)
  
  // Highlight glass elements visually
  glassElements.forEach((el, i) => {
    el.style.outline = '2px solid #ff00ff'
    el.style.outlineOffset = '2px'
    console.log(`Glass element ${i + 1} highlighted with magenta outline`)
  })
  
  // Test backdrop-filter support
  const supportsBackdrop = CSS.supports('backdrop-filter', 'blur(10px)') || 
                          CSS.supports('-webkit-backdrop-filter', 'blur(10px)')
  console.log('🔧 Backdrop-filter support:', supportsBackdrop ? '✅ YES' : '❌ NO')
  
  // Visual difference test helper
  console.log('\\n🎯 Visual Test Instructions:')
  console.log('1. Compare current view with: ?glass=off')
  console.log('2. Expected differences:')
  console.log('   - Cards should have subtle blur/transparency')
  console.log('   - Stats panel should be more prominent (bold intensity)')
  console.log('   - Inner highlights should add depth')
  console.log('   - Hover effects should be enhanced')
  
  // Automatic contrast check
  setTimeout(() => {
    console.log('\\n📊 Automatic Contrast Analysis:')
    const bgColor = getComputedStyle(document.body).backgroundColor
    console.log('Body background:', bgColor)
    
    // Remove highlights after 5 seconds
    setTimeout(() => {
      glassElements.forEach(el => {
        el.style.outline = ''
        el.style.outlineOffset = ''
      })
      console.log('✅ Visual test completed - outlines removed')
    }, 5000)
  }, 1000)
  
} else {
  console.warn('⚠️ No glass elements found - check if glass is enabled and components are rendered')
  console.log('Try visiting: ?glass=on&intensity=default')
}

// Export test function for manual use
window.testGlass = () => {
  console.clear()
  eval(document.currentScript ? document.currentScript.textContent : arguments.callee.toString().match(/function[^{]+\{([\s\S]*)\}$/)[1])
}

console.log('\\n💡 Run window.testGlass() to repeat this test')