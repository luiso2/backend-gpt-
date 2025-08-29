'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { isLiquidGlassEnabled, isGlassDebugMode, setLiquidGlassPreference } from '@/lib/featureFlags'
import { Eye, EyeOff, Settings, Bug } from 'lucide-react'

export default function GlassToggle() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isDebugMode, setIsDebugMode] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsEnabled(isLiquidGlassEnabled())
    setIsDebugMode(isGlassDebugMode())
  }, [])

  // Only render in development or when debug mode is active
  if (!mounted || (process.env.NODE_ENV === 'production' && !isDebugMode)) {
    return null
  }

  const handleToggle = () => {
    const newState = !isEnabled
    setIsEnabled(newState)
    setLiquidGlassPreference(newState)
    // Reload to apply changes
    window.location.reload()
  }

  const handleDebugToggle = () => {
    const currentUrl = new URL(window.location.href)
    if (isDebugMode) {
      currentUrl.searchParams.delete('glass')
    } else {
      currentUrl.searchParams.set('glass', 'debug')
    }
    window.location.href = currentUrl.toString()
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {/* Main toggle button */}
        <motion.button
          onClick={() => setShowControls(!showControls)}
          className={`
            p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200
            ${isEnabled 
              ? 'bg-white/20 border border-white/30 text-white' 
              : 'bg-gray-800 border border-gray-600 text-gray-300'
            }
            hover:scale-110 active:scale-95
          `}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Settings size={20} />
        </motion.button>

        {/* Expanded controls */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              className="absolute bottom-14 right-0 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg p-3 min-w-[200px] shadow-xl"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="text-xs text-gray-400 mb-2 font-semibold">
                GLASS CONTROLS (DEV)
              </div>

              {/* Glass toggle */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {isEnabled ? <Eye size={16} /> : <EyeOff size={16} />}
                  <span className="text-sm text-white">Glass Effects</span>
                </div>
                <motion.button
                  onClick={handleToggle}
                  className={`
                    w-10 h-5 rounded-full relative transition-colors duration-200
                    ${isEnabled ? 'bg-green-500' : 'bg-gray-600'}
                  `}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full absolute top-0.5"
                    animate={{ x: isEnabled ? 20 : 2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>

              {/* Debug mode toggle */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Bug size={16} />
                  <span className="text-sm text-white">Debug Mode</span>
                </div>
                <motion.button
                  onClick={handleDebugToggle}
                  className={`
                    w-10 h-5 rounded-full relative transition-colors duration-200
                    ${isDebugMode ? 'bg-orange-500' : 'bg-gray-600'}
                  `}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full absolute top-0.5"
                    animate={{ x: isDebugMode ? 20 : 2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>

              {/* Status info */}
              <div className="border-t border-gray-700 pt-2 mt-2">
                <div className="text-xs text-gray-400 space-y-1">
                  <div>Browser Support: {typeof CSS !== 'undefined' && CSS.supports('backdrop-filter', 'blur(10px)') ? '✅' : '❌'}</div>
                  <div>Glass Enabled: {isEnabled ? '✅' : '❌'}</div>
                  {isDebugMode && <div className="text-orange-400">🐛 Debug Active</div>}
                </div>
              </div>

              {/* Quick intensity links */}
              <div className="border-t border-gray-700 pt-2 mt-2">
                <div className="text-xs text-gray-400 mb-1">Quick Test:</div>
                <div className="flex gap-1">
                  <a href="?glass=on&intensity=subtle" className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300 hover:bg-gray-600">Subtle</a>
                  <a href="?glass=on&intensity=default" className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300 hover:bg-gray-600">Default</a>
                  <a href="?glass=on&intensity=bold" className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300 hover:bg-gray-600">Bold</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}