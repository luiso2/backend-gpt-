'use client'

import { useEffect } from 'react'

export default function StyleDebugger() {
  useEffect(() => {
    // Debug AI Panel positioning
    const checkAIPanel = () => {
      const panel = document.querySelector('.ai-panel') as HTMLElement
      if (panel) {
        const computed = window.getComputedStyle(panel)
        console.log('🎯 AI Panel Styles:', {
          position: computed.position,
          top: computed.top,
          left: computed.left,
          transform: computed.transform,
          width: computed.width,
          height: computed.height,
          display: computed.display,
          zIndex: computed.zIndex
        })
        
        // Check if transform is being applied correctly
        const rect = panel.getBoundingClientRect()
        console.log('🎯 AI Panel Position:', {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height,
          centerX: rect.x + rect.width / 2,
          centerY: rect.y + rect.height / 2,
          viewportCenterX: window.innerWidth / 2,
          viewportCenterY: window.innerHeight / 2
        })
      }
    }

    // Debug dropdown positioning
    const checkDropdown = () => {
      const dropdown = document.querySelector('.dropdown-menu') as HTMLElement
      if (dropdown) {
        const computed = window.getComputedStyle(dropdown)
        console.log('📍 Dropdown Styles:', {
          position: computed.position,
          top: computed.top,
          left: computed.left,
          transform: computed.transform,
          width: computed.width,
          display: computed.display,
          zIndex: computed.zIndex
        })
        
        const rect = dropdown.getBoundingClientRect()
        console.log('📍 Dropdown Position:', {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        })
        
        // Check parent positioning
        const parent = dropdown.parentElement
        if (parent) {
          const parentComputed = window.getComputedStyle(parent)
          console.log('📍 Dropdown Parent:', {
            position: parentComputed.position,
            transform: parentComputed.transform
          })
        }
      }
    }

    // Check for conflicting styles
    const checkConflicts = () => {
      const allStyleSheets = Array.from(document.styleSheets)
      const conflictingRules: string[] = []
      
      allStyleSheets.forEach(sheet => {
        try {
          const rules = Array.from(sheet.cssRules || [])
          rules.forEach(rule => {
            if (rule instanceof CSSStyleRule) {
              const text = rule.cssText
              // Check for problematic rules
              if (text.includes('left: 0') && (text.includes('dropdown') || text.includes('portal'))) {
                conflictingRules.push(`⚠️ Found left:0 - ${text}`)
              }
              if (text.includes('transform') && text.includes('ai-panel')) {
                conflictingRules.push(`⚠️ Transform on AI Panel - ${text}`)
              }
            }
          })
        } catch (e) {
          // Skip cross-origin stylesheets
        }
      })
      
      if (conflictingRules.length > 0) {
        console.log('🚨 Conflicting CSS Rules:', conflictingRules)
      }
    }

    // Run checks
    const interval = setInterval(() => {
      checkAIPanel()
      checkDropdown()
    }, 2000)

    // Initial check
    setTimeout(() => {
      checkConflicts()
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return null
}