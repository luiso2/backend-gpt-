'use client'

import { useEffect } from 'react'

export default function StyleEnforcer() {
  useEffect(() => {
    // Force AI Panel centering
    const enforceAIPanelStyles = () => {
      const panel = document.querySelector('.ai-panel') as HTMLElement
      if (panel) {
        // Force inline styles to ensure centering
        panel.style.cssText = `
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          width: min(95vw, 1200px) !important;
          height: min(95vh, 900px) !important;
          z-index: 99999 !important;
        `
      }
    }

    // Force dropdown positioning
    const enforceDropdownStyles = () => {
      const dropdown = document.querySelector('.dropdown-menu') as HTMLElement
      if (dropdown && dropdown.style.left === '0px') {
        // Remove the left: 0 if it exists
        dropdown.style.left = ''
      }
    }

    // Create a MutationObserver to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          enforceAIPanelStyles()
          enforceDropdownStyles()
        }
      })
    })

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    })

    // Initial enforcement
    enforceAIPanelStyles()
    enforceDropdownStyles()

    // Cleanup
    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}