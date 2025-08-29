import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      letterSpacing: {
        'h1': 'var(--track-h1)',
        'h2': 'var(--track-h2)', 
        'h3': 'var(--track-h3)',
        'body': 'var(--track-body)',
        'label': 'var(--track-label)',
      },
      lineHeight: {
        'h1': 'var(--lh-h1)',
        'h2': 'var(--lh-h2)',
        'h3': 'var(--lh-h3)',
        'body': 'var(--lh-body)',
      },
      maxWidth: {
        'measure': 'var(--measure-body)',
        'measure-hero': 'var(--measure-hero)',
      },
      colors: {
        primary: '#B8E92D',
        'primary-dark': '#7FD858',
        'bg-dark': '#0A2E1F',
        'bg-dark-secondary': '#0F3D2A',
        // Glass system colors with intensity variants
        glass: {
          // Default intensity (clearly visible)
          bg: 'var(--glass-bg)',
          'bg-light': 'var(--glass-bg-light)',
          'bg-lighter': 'var(--glass-bg-lighter)',
          border: 'var(--glass-border)',
          'border-light': 'var(--glass-border-light)',
          highlight: 'var(--glass-highlight)',
          // Subtle intensity (minimal effect)
          'subtle-bg': 'var(--glass-subtle-bg)',
          'subtle-border': 'var(--glass-subtle-border)',
          'subtle-highlight': 'var(--glass-subtle-highlight)',
          // Bold intensity (high impact)
          'bold-bg': 'var(--glass-bold-bg)',
          'bold-border': 'var(--glass-bold-border)',
          'bold-highlight': 'var(--glass-bold-highlight)',
          // Inner highlights for depth
          'inner-light': 'var(--glass-inner-light)',
          'inner-subtle': 'var(--glass-inner-subtle)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
        sm: '6px',
        md: '12px',    // Minimum for noticeable glass effect
        lg: '16px',    // Good for cards
        xl: '24px',    // Good for panels
        '2xl': '32px', // Hero sections
        '3xl': '40px', // Maximum blur
      },
      backdropSaturate: {
        0: '0',
        50: '.5',
        100: '1',
        120: '1.2',   // Apple-style color enhancement
        140: '1.4',   // Strong color enhancement
        150: '1.5',
        200: '2',
      },
      boxShadow: {
        'elev-1': 'var(--shadow-elev-1)',
        'elev-2': 'var(--shadow-elev-2)',
        'elev-3': 'var(--shadow-elev-3)',
        'glass': 'var(--shadow-glass)',
        'glass-hover': 'var(--shadow-glass-hover)',
        'glass-active': 'var(--shadow-glass-active)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config