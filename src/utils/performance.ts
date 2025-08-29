/**
 * Performance monitoring utilities for portfolio components
 */
import React from 'react'

interface PerformanceMetrics {
  componentName: string
  renderTime: number
  timestamp: number
  props?: Record<string, unknown>
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = []
  private isEnabled: boolean

  constructor() {
    this.isEnabled = process.env.NODE_ENV === 'development'
  }

  /**
   * Start measuring component render time
   */
  startMeasure(componentName: string): () => void {
    if (!this.isEnabled) return () => {}

    const startTime = performance.now()
    
    return () => {
      const endTime = performance.now()
      const renderTime = endTime - startTime
      
      this.metrics.push({
        componentName,
        renderTime,
        timestamp: Date.now()
      })

      // Log slow renders (> 16ms for 60fps)
      if (renderTime > 16) {
        console.warn(`Slow render detected: ${componentName} took ${renderTime.toFixed(2)}ms`)
      }
    }
  }

  /**
   * Get performance metrics for analysis
   */
  getMetrics(): PerformanceMetrics[] {
    return [...this.metrics]
  }

  /**
   * Clear stored metrics
   */
  clearMetrics(): void {
    this.metrics = []
  }

  /**
   * Get average render time for a component
   */
  getAverageRenderTime(componentName: string): number {
    const componentMetrics = this.metrics.filter(m => m.componentName === componentName)
    if (componentMetrics.length === 0) return 0
    
    const totalTime = componentMetrics.reduce((sum, metric) => sum + metric.renderTime, 0)
    return totalTime / componentMetrics.length
  }
}

export const performanceMonitor = new PerformanceMonitor()

/**
 * React hook for measuring component performance
 */
export function usePerformanceMonitor(componentName: string) {
  if (process.env.NODE_ENV !== 'development') {
    return { startMeasure: () => () => {} }
  }

  return {
    startMeasure: () => performanceMonitor.startMeasure(componentName)
  }
}

/**
 * Higher-order component for automatic performance monitoring
 */
export function withPerformanceMonitoring<T extends Record<string, unknown>>(
  Component: React.ComponentType<T>,
  componentName?: string
) {
  const WrappedComponent: React.FC<T> = (props: T) => {
    const { startMeasure } = usePerformanceMonitor(componentName || Component.name)
    
    React.useEffect(() => {
      const endMeasure = startMeasure()
      return endMeasure
    })

    return React.createElement(Component, props)
  }

  WrappedComponent.displayName = `withPerformanceMonitoring(${componentName || Component.name})`
  return WrappedComponent
}

/**
 * Utility to detect if device has limited resources
 */
export function isLowEndDevice(): boolean {
  // Check for various indicators of low-end devices
  const navigator = window.navigator as Navigator & {
    deviceMemory?: number
    hardwareConcurrency?: number
    connection?: {
      effectiveType?: string
      downlink?: number
    }
  }

  // Device memory less than 4GB
  if (navigator.deviceMemory && navigator.deviceMemory < 4) {
    return true
  }

  // Less than 4 CPU cores
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    return true
  }

  // Slow network connection
  if (navigator.connection?.effectiveType === '2g' || navigator.connection?.effectiveType === 'slow-2g') {
    return true
  }

  return false
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}