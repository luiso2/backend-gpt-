'use client'

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { prefersReducedMotion } from '@/lib/featureFlags'

export interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  animated?: boolean
  motionProps?: Omit<HTMLMotionProps<'button'>, 'children' | 'className' | 'style'>
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      animated = true,
      motionProps,
      disabled,
      ...props
    },
    ref
  ) => {
    const reducedMotion = prefersReducedMotion()

    // Base button classes
    const baseClasses = [
      'relative',
      'inline-flex',
      'items-center',
      'justify-center',
      'font-medium',
      'transition-all',
      'duration-200',
      'rounded-lg',
      'border',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-primary/50',
      'focus:ring-offset-2',
      'focus:ring-offset-bg-dark',
      fullWidth ? 'w-full' : '',
      disabled || loading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    ].filter(Boolean).join(' ')

    // Variant classes
    const variantClasses = {
      primary: 'bg-primary text-bg-dark border-primary hover:bg-primary-dark hover:border-primary-dark active:scale-95',
      secondary: 'bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white/30 active:scale-95',
      ghost: 'bg-transparent text-white border-transparent hover:bg-white/5 hover:border-white/10 active:scale-95',
      glass: 'bg-glass-bg backdrop-blur-md text-white border-glass-border hover:bg-glass-bg-light hover:shadow-glass active:scale-95',
    }

    // Size classes
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-4 py-2 text-sm gap-2',
      lg: 'px-6 py-3 text-base gap-2.5',
      xl: 'px-8 py-4 text-lg gap-3',
    }

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    // Animation variants
    const motionVariants = !reducedMotion && animated ? {
      initial: { scale: 1 },
      hover: {
        scale: 1.02,
        y: -1,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 17,
        },
      },
      tap: {
        scale: 0.98,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 17,
        },
      },
    } : {}

    const defaultMotionProps = {
      variants: motionVariants,
      initial: 'initial',
      whileHover: disabled || loading ? {} : 'hover',
      whileTap: disabled || loading ? {} : 'tap',
      transition: { duration: 0.15 },
      ...motionProps,
    }

    // Loading spinner component
    const LoadingSpinner = () => (
      <svg
        className="w-4 h-4 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    )

    const ButtonContent = () => (
      <>
        {loading && <LoadingSpinner />}
        {!loading && icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        <span className={loading ? 'opacity-0' : ''}>{children}</span>
        {!loading && icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </>
    )

    // Render motion button if animations are enabled
    if (!reducedMotion && animated) {
      return (
        <motion.button
          ref={ref}
          className={combinedClasses}
          disabled={disabled || loading}
          {...defaultMotionProps}
          {...props}
        >
          <ButtonContent />
        </motion.button>
      )
    }

    // Render static button as fallback
    return (
      <button
        ref={ref}
        className={combinedClasses}
        disabled={disabled || loading}
        {...props}
      >
        <ButtonContent />
      </button>
    )
  }
)

AnimatedButton.displayName = 'AnimatedButton'

export { AnimatedButton }