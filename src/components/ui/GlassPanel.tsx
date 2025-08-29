'use client'

import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { isLiquidGlassEnabled, prefersReducedMotion } from '@/lib/featureFlags'

export interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'nav' | 'hero' | 'card' | 'stats' | 'footer'
  intensity?: 'subtle' | 'default' | 'bold'
  interactive?: boolean
  fullWidth?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  blur?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  animated?: boolean
  floatingEffect?: boolean
  motionProps?: Omit<HTMLMotionProps<'div'>, 'children' | 'className' | 'style'>
}

const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  (
    {
      children,
      className = '',
      variant = 'card',
      intensity = 'default',
      interactive = false,
      fullWidth = false,
      padding = 'lg',
      blur = '2xl',
      animated = true,
      floatingEffect = false,
      motionProps,
      ...props
    },
    ref
  ) => {
    // Feature flag check - graceful fallback
    const glassEnabled = isLiquidGlassEnabled()
    const reducedMotion = prefersReducedMotion()

    // Variant-specific styling
    const variantClasses = {
      nav: glassEnabled 
        ? 'bg-glass-bg-light backdrop-blur-lg border-glass-border-light shadow-glass'
        : 'bg-bg-dark-secondary shadow-lg',
      hero: glassEnabled
        ? 'bg-glass-bg backdrop-blur-xl border-glass-border shadow-elev-2'
        : 'bg-bg-dark shadow-md',
      card: glassEnabled
        ? 'bg-glass-bg-light backdrop-blur-md border-glass-border shadow-elev-1'
        : 'bg-bg-dark-secondary shadow-md',
      stats: glassEnabled
        ? 'bg-glass-highlight backdrop-blur-md border-glass-border-light shadow-elev-2'
        : 'bg-bg-dark-secondary shadow-lg',
      footer: glassEnabled
        ? 'bg-glass-bg backdrop-blur-lg border-glass-border shadow-elev-1'
        : 'bg-bg-dark-secondary shadow-md',
    }

    // Base classes
    const baseClasses = [
      'relative',
      'border',
      'rounded-xl',
      fullWidth ? 'w-full' : '',
      // Padding variants
      padding === 'none' ? '' :
      padding === 'sm' ? 'p-3' :
      padding === 'md' ? 'p-4' :
      padding === 'lg' ? 'p-6' :
      padding === 'xl' ? 'p-8' :
      padding === '2xl' ? 'p-12' : 'p-6',
      // Interactive states
      interactive ? (glassEnabled 
        ? 'hover:bg-glass-bg-lighter hover:shadow-glass-hover active:shadow-glass-active cursor-pointer transition-glass'
        : 'hover:bg-bg-dark-secondary/80 hover:shadow-xl cursor-pointer transition-all duration-300'
      ) : '',
      // Floating animation
      floatingEffect && !reducedMotion ? 'animate-float' : '',
    ].filter(Boolean).join(' ')

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

    // Animation variants for panels
    const motionVariants = !reducedMotion && animated ? {
      initial: { opacity: 0, y: 30, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -30, scale: 0.9 },
      hover: interactive ? {
        y: -4,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      } : {},
    } : {}

    const defaultMotionProps = {
      initial: 'initial',
      animate: 'animate',
      exit: 'exit',
      whileHover: 'hover',
      variants: motionVariants,
      transition: { 
        duration: 0.4, 
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1 
      },
      ...motionProps,
    }

    // Render motion component if animations are enabled
    if (!reducedMotion && animated) {
      return (
        <motion.div
          ref={ref}
          className={combinedClasses}
          {...defaultMotionProps}
          {...props}
        >
          {glassEnabled && (
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          )}
          {children}
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
        {glassEnabled && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        )}
        {children}
      </div>
    )
  }
)

GlassPanel.displayName = 'GlassPanel'

export { GlassPanel }