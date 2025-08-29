'use client'

import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { isLiquidGlassEnabled, prefersReducedMotion } from '@/lib/featureFlags'

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'light' | 'lighter' | 'highlight'
  intensity?: 'subtle' | 'default' | 'bold'
  elevation?: 1 | 2 | 3
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  blur?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  animated?: boolean
  motionProps?: Omit<HTMLMotionProps<'div'>, 'children' | 'className' | 'style'>
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      children,
      className = '',
      variant = 'default',
      intensity = 'default',
      elevation = 1,
      hover = false,
      padding = 'md',
      rounded = 'lg',
      blur = 'lg',
      animated = true,
      motionProps,
      ...props
    },
    ref
  ) => {
    // Feature flag check - graceful fallback
    const glassEnabled = isLiquidGlassEnabled()
    const reducedMotion = prefersReducedMotion()

    // Get intensity-based styling
    const getIntensityClasses = (intensity: string) => {
      switch (intensity) {
        case 'subtle':
          return {
            bg: variant === 'highlight' ? 'bg-glass-subtle-highlight' : 'bg-glass-subtle-bg',
            border: 'border-glass-subtle-border',
            blur: 'backdrop-blur-sm',
            saturate: 'backdrop-saturate-100'
          }
        case 'bold':
          return {
            bg: variant === 'highlight' ? 'bg-glass-bold-highlight' : 'bg-glass-bold-bg',
            border: 'border-glass-bold-border',
            blur: 'backdrop-blur-xl',
            saturate: 'backdrop-saturate-140'
          }
        default: // 'default'
          return {
            bg: variant === 'default' ? 'bg-glass-bg' :
                variant === 'light' ? 'bg-glass-bg-light' :
                variant === 'lighter' ? 'bg-glass-bg-lighter' :
                'bg-glass-highlight',
            border: variant === 'highlight' ? 'border-glass-border-light' : 'border-glass-border',
            blur: `backdrop-blur-${blur}`,
            saturate: 'backdrop-saturate-120'
          }
      }
    }

    const intensityClasses = getIntensityClasses(intensity)

    // Base classes (always applied)
    const baseClasses = [
      'relative',
      'isolate', // Prevent stacking context issues
      // Padding variants
      padding === 'none' ? '' :
      padding === 'sm' ? 'p-3' :
      padding === 'md' ? 'p-4' :
      padding === 'lg' ? 'p-6' :
      padding === 'xl' ? 'p-8' : 'p-4',
      // Rounded variants
      rounded === 'none' ? '' :
      rounded === 'sm' ? 'rounded' :
      rounded === 'md' ? 'rounded-md' :
      rounded === 'lg' ? 'rounded-lg' :
      rounded === 'xl' ? 'rounded-xl' :
      rounded === '2xl' ? 'rounded-2xl' : 'rounded-lg',
    ].filter(Boolean).join(' ')

    // Glass-specific classes (only applied when feature is enabled)
    const glassClasses = glassEnabled ? [
      intensityClasses.bg,
      intensityClasses.border,
      intensityClasses.blur,
      intensityClasses.saturate,
      'border',
      `shadow-elev-${elevation}`,
      // GPU acceleration and will-change for performance
      'will-change-transform',
      // Hover effects
      hover ? 'hover:shadow-glass-hover hover:scale-[1.02] transition-all duration-300 ease-out' : '',
    ].filter(Boolean).join(' ') : [
      // Fallback styling when glass is disabled
      'bg-bg-dark-secondary',
      'border border-white/10',
      'shadow-md',
      hover ? 'hover:shadow-lg hover:scale-[1.02] transition-all duration-300' : '',
    ].filter(Boolean).join(' ')

    const combinedClasses = `${baseClasses} ${glassClasses} ${className}`

    // Animation variants
    const motionVariants = !reducedMotion && animated ? {
      initial: { opacity: 0, y: 20, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -20, scale: 0.95 },
      hover: hover ? {
        y: -2,
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      } : {},
    } : {}

    const defaultMotionProps = {
      initial: 'initial',
      animate: 'animate',
      exit: 'exit',
      whileHover: 'hover',
      variants: motionVariants,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
      ...motionProps,
    }

    // Inner highlight gradient for depth (only when glass is enabled)
    const InnerHighlight = () => (
      glassEnabled ? (
        <div 
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, var(--glass-inner-light) 0%, transparent 50%, transparent 100%)',
            mixBlendMode: 'overlay'
          }}
        />
      ) : null
    )

    // Noise texture overlay (subtle)
    const NoiseOverlay = () => (
      glassEnabled ? (
        <div 
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-30"
          style={{
            backgroundImage: 'var(--glass-noise)',
            mixBlendMode: 'soft-light'
          }}
        />
      ) : null
    )

    // Render motion component if animations are enabled
    if (!reducedMotion && animated) {
      return (
        <motion.div
          ref={ref}
          className={combinedClasses}
          {...defaultMotionProps}
          {...props}
        >
          <InnerHighlight />
          <NoiseOverlay />
          <div className="relative z-10">{children}</div>
        </motion.div>
      )
    }

    // Render static div as fallback
    return (
      <div
        ref={ref}
        className={combinedClasses}
        {...props}
      >
        <InnerHighlight />
        <NoiseOverlay />
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)

GlassCard.displayName = 'GlassCard'

export { GlassCard }