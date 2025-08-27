import { useEffect, useRef, useState } from 'react'

interface PerformanceMetrics {
  renderTime: number
  memoryUsage: number
  fps: number
}

export function usePerformanceMonitor(componentName: string) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  })
  const renderStartTime = useRef<number>(0)
  const frameCount = useRef<number>(0)
  const lastTime = useRef<number>(0)

  useEffect(() => {
    renderStartTime.current = performance.now()
    
    return () => {
      const renderTime = performance.now() - renderStartTime.current
      
      // Memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0
      
      setMetrics(prev => ({
        ...prev,
        renderTime,
        memoryUsage: memoryUsage / 1024 / 1024, // Convert to MB
      }))

      // Log performance in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`${componentName} Performance:`, {
          renderTime: `${renderTime.toFixed(2)}ms`,
          memoryUsage: `${(memoryUsage / 1024 / 1024).toFixed(2)}MB`,
        })
      }
    }
  }, [componentName])

  // FPS monitoring
  useEffect(() => {
    let animationId: number

    const measureFPS = (currentTime: number) => {
      frameCount.current++
      
      if (currentTime - lastTime.current >= 1000) {
        const fps = Math.round((frameCount.current * 1000) / (currentTime - lastTime.current))
        setMetrics(prev => ({ ...prev, fps }))
        
        frameCount.current = 0
        lastTime.current = currentTime
      }
      
      animationId = requestAnimationFrame(measureFPS)
    }

    animationId = requestAnimationFrame(measureFPS)
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return metrics
}