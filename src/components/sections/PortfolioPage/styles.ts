// Portfolio page styles - extracted for better maintainability
export const portfolioStyles = {
  // Hero Section
  heroSection: {
    position: 'relative' as const,
    minHeight: '60vh',
    background: 'linear-gradient(135deg, #0A2E1F 0%, #0F3D2A 50%, #0A2E1F 100%)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    padding: '120px 2rem 80px',
  },
  
  bgPattern: {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundImage: `
      linear-gradient(rgba(184, 233, 45, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(184, 233, 45, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    animation: 'grid-move 20s linear infinite',
  },
  
  // Orb styles
  orb: {
    position: 'absolute' as const,
    borderRadius: '50%',
    filter: 'blur(40px)',
    opacity: 0.3,
    animation: 'orb-float 15s ease-in-out infinite',
  },
  
  orb1: {
    width: '350px',
    height: '350px',
    background: '#B8E92D',
    top: '-150px',
    left: '-100px',
    animationDuration: '18s',
  },
  
  orb2: {
    width: '450px',
    height: '450px',
    background: '#4ADE80',
    bottom: '-200px',
    right: '-150px',
    animationDuration: '22s',
    animationDelay: '-5s',
  },
  
  orb3: {
    width: '300px',
    height: '300px',
    background: '#7FD858',
    top: '40%',
    right: '10%',
    animationDuration: '25s',
    animationDelay: '-10s',
  },
} as const

export const contentStyles = {
  contentSection: {
    padding: '5rem 2rem',
    background: '#0A2E1F',
    position: 'relative' as const,
  },
  
  filtersContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '4rem',
    flexWrap: 'wrap' as const,
  },
  
  filterBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    background: 'rgba(255, 255, 255, 0.02)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '2rem',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.9rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  
  filterBtnHover: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(184, 233, 45, 0.3)',
    transform: 'translateY(-2px)',
  },
  
  filterBtnActive: {
    background: 'rgba(184, 233, 45, 0.1)',
    borderColor: '#B8E92D',
    color: '#B8E92D',
  },
} as const

export const portfolioItemStyles = {
  portfolioGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
    gap: '2.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  portfolioItem: {
    background: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(20px)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    transition: 'all 0.4s ease',
    position: 'relative' as const,
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  
  portfolioItemHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(184, 233, 45, 0.1)',
    borderColor: 'rgba(184, 233, 45, 0.3)',
  },
} as const