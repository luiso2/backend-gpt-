'use client'

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold uppercase tracking-label transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95',
  {
    variants: {
      variant: {
        default: 'bg-primary text-bg-dark hover:bg-primary-dark shadow-md hover:shadow-lg',
        secondary: 'border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30',
        ghost: 'text-white hover:bg-white/5',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        default: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  children: ReactNode
  animated?: boolean
  motionProps?: Omit<HTMLMotionProps<'button'>, 'children' | 'className'>
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, animated = true, motionProps, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const baseClassName = cn(buttonVariants({ variant, size, className }))

    if (animated && !asChild) {
      return (
        <motion.button
          className={baseClassName}
          ref={ref}
          whileHover={{ 
            y: -2,
            boxShadow: variant === 'default' 
              ? '0 4px 20px rgba(184, 233, 45, 0.4)' 
              : '0 4px 20px rgba(255, 255, 255, 0.2)'
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          {...motionProps}
          {...props}
        >
          {children}
        </motion.button>
      )
    }

    return (
      <Comp className={baseClassName} ref={ref} {...props}>
        {children}
      </Comp>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }