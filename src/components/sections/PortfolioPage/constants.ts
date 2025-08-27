// Portfolio configuration constants
export const PORTFOLIO_CONFIG = {
  ANIMATION: {
    ITEM_DELAY: 0.1,
    HOVER_DURATION: 0.3,
    FLOAT_DURATION: 6,
    PATTERN_DURATION: 20,
  },
  LAYOUT: {
    HERO_MIN_HEIGHT: '60vh',
    ITEM_MIN_WIDTH: 380,
    GRID_GAP: '2.5rem',
    MAX_WIDTH: '1200px',
  },
  PERFORMANCE: {
    FEATURED_THRESHOLD: 5,
    PARTICLE_COUNT: 20,
  },
  COLORS: {
    PRIMARY: '#B8E92D',
    SECONDARY: '#7FD858',
    ACCENT: '#4ADE80',
    BACKGROUND: '#0A2E1F',
    GLASS: 'rgba(255, 255, 255, 0.02)',
  },
} as const

export const ANIMATION_VARIANTS = {
  item: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    hover: { y: -10 },
  },
  badge: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  button: {
    hover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 20px rgba(184, 233, 45, 0.3)',
    },
    tap: { scale: 0.95 },
  },
} as const

export const PORTFOLIO_METRICS_LABELS = {
  en: {
    conversions: 'Conversions',
    'leads/month': 'Leads/Month',
    integrations: 'Integrations',
    'captured leads': 'Captured Leads',
    'avg conversation': 'Avg Conversation',
    satisfaction: 'Satisfaction',
    // ... add more as needed
  },
  es: {
    conversions: 'Conversiones',
    'leads/month': 'Leads/Mes',
    integrations: 'Integraciones',
    'captured leads': 'Leads Capturados',
    'avg conversation': 'Conversación Promedio',
    satisfaction: 'Satisfacción',
    // ... add more as needed
  },
} as const