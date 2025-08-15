'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, ExternalLink, Code2, Cpu, Store, Zap, Calendar, Users, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

// CSS-in-JS Styles
const styles = {
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
  
  floatingElement: {
    position: 'absolute' as const,
    fontSize: '2rem',
    animation: 'float-element 6s ease-in-out infinite',
    zIndex: 1,
  },
  
  floatingElement1: {
    top: '25%',
    left: '5%',
    animationDelay: '0s',
  },
  
  floatingElement2: {
    top: '70%',
    right: '10%',
    animationDelay: '2s',
  },
  
  floatingElement3: {
    bottom: '40%',
    left: '15%',
    animationDelay: '4s',
  },
  
  particlesContainer: {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  
  particle: {
    position: 'absolute' as const,
    width: '4px',
    height: '4px',
    background: '#B8E92D',
    borderRadius: '50%',
    opacity: 0.5,
    animation: 'particle-float 10s linear infinite',
  },
  
  particleOdd: {
    background: '#7FD858',
    animationDuration: '15s',
  },
  
  heroContent: {
    textAlign: 'center' as const,
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative' as const,
    zIndex: 1,
  },
  
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(184, 233, 45, 0.1)',
    border: '1px solid rgba(184, 233, 45, 0.3)',
    padding: '0.5rem 1.5rem',
    borderRadius: '2rem',
    fontSize: '0.875rem',
    color: '#B8E92D',
    marginBottom: '2rem',
    backdropFilter: 'blur(10px)',
  },
  
  badgeIcon: {
    width: '16px',
    height: '16px',
  },
  
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 800,
    marginBottom: '1.5rem',
    lineHeight: 1.1,
    color: '#FFFFFF',
  },
  
  titleHighlight: {
    background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  
  subtitle: {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 1.6,
    maxWidth: '600px',
    margin: '0 auto',
  },
  
  // Content Section
  contentSection: {
    padding: '5rem 2rem',
    background: '#0A2E1F',
    position: 'relative' as const,
  },
  
  // Filter Section
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
  
  filterIcon: {
    width: '18px',
    height: '18px',
  },
  
  // Portfolio Grid
  portfolioGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
    gap: '2.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  // Portfolio Item
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
  
  portfolioImage: {
    position: 'relative' as const,
    height: '240px',
    background: 'linear-gradient(135deg, rgba(184, 233, 45, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
    overflow: 'hidden',
  },
  
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as const,
  },
  
  placeholderPattern: {
    position: 'absolute' as const,
    width: '200%',
    height: '200%',
    background: `repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(184, 233, 45, 0.05) 10px,
      rgba(184, 233, 45, 0.05) 20px
    )`,
    animation: 'pattern-slide 20s linear infinite',
  },
  
  // Demo button styles
  demoButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1.75rem',
    background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
    color: '#0A2E1F',
    borderRadius: '2rem',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontSize: '0.95rem',
    marginTop: '1.5rem',
    width: '100%',
    textAlign: 'center' as const,
    position: 'relative' as const,
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(184, 233, 45, 0.2)',
  },
  
  demoButtonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 20px rgba(184, 233, 45, 0.3)',
  },
  
  demoButtonIcon: {
    width: '16px',
    height: '16px',
  },
  
  // Portfolio Details
  portfolioDetails: {
    padding: '2rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
  },
  
  portfolioMeta: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '1rem',
  },
  
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.6)',
  },
  
  metaIcon: {
    width: '16px',
    height: '16px',
    color: '#B8E92D',
  },
  
  portfolioTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
    lineHeight: 1.2,
    color: '#FFFFFF',
  },
  
  portfolioDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    flex: 1,
  },
  
  // Tags
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  
  tag: {
    padding: '0.375rem 0.875rem',
    background: 'rgba(184, 233, 45, 0.1)',
    border: '1px solid rgba(184, 233, 45, 0.2)',
    borderRadius: '1rem',
    fontSize: '0.75rem',
    color: '#B8E92D',
    transition: 'all 0.3s ease',
  },
  
  tagHover: {
    background: 'rgba(184, 233, 45, 0.2)',
    transform: 'translateY(-2px)',
  },
  
  // Metrics
  metricsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    marginBottom: '0.5rem',
  },
  
  metric: {
    textAlign: 'center' as const,
  },
  
  metricValue: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#B8E92D',
    marginBottom: '0.25rem',
  },
  
  metricLabel: {
    fontSize: '0.75rem',
    color: 'rgba(255, 255, 255, 0.6)',
    textTransform: 'uppercase' as const,
  },
  
  // Stats Section
  statsSection: {
    padding: '5rem 2rem',
    background: 'linear-gradient(135deg, #0F3D2A 0%, #0A2E1F 50%, #0F3D2A 100%)',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  
  statsSectionBefore: {
    content: '""',
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="60" x="30" fill="rgba(184,233,45,0.03)"/><rect width="60" height="1" y="30" fill="rgba(184,233,45,0.03)"/></svg>')`,
    backgroundSize: '60px 60px',
  },
  
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
    position: 'relative' as const,
    zIndex: 1,
  },
  
  statCard: {
    background: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    textAlign: 'center' as const,
    transition: 'all 0.3s ease',
  },
  
  statCardHover: {
    transform: 'translateY(-5px)',
    background: 'rgba(184, 233, 45, 0.05)',
    borderColor: 'rgba(184, 233, 45, 0.2)',
  },
  
  statNumber: {
    fontSize: '3rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem',
  },
  
  statLabel: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  
  // CTA Section
  ctaSection: {
    padding: '5rem 2rem',
    background: '#0A2E1F',
    textAlign: 'center' as const,
    position: 'relative' as const,
  },
  
  ctaCard: {
    maxWidth: '800px',
    margin: '0 auto',
    background: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '2rem',
    padding: '4rem 3rem',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  
  ctaCardBefore: {
    content: '""',
    position: 'absolute' as const,
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(184, 233, 45, 0.1) 0%, transparent 70%)',
    animation: 'rotate-gradient 20s linear infinite',
  },
  
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: 800,
    marginBottom: '1rem',
    position: 'relative' as const,
    zIndex: 1,
    color: '#FFFFFF',
  },
  
  ctaDescription: {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '2rem',
    position: 'relative' as const,
    zIndex: 1,
  },
  
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 2.5rem',
    background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
    color: '#0A2E1F',
    borderRadius: '2rem',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    zIndex: 1,
  },
  
  ctaButtonHover: {
    transform: 'translateY(-3px)',
    boxShadow: '0 15px 30px rgba(184, 233, 45, 0.3)',
  },
  
  btnIcon: {
    width: '16px',
    height: '16px',
  },
}

// Add keyframes to global styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = `
    @keyframes grid-move {
      0% { transform: translate(0, 0); }
      100% { transform: translate(50px, 50px); }
    },
    
    @keyframes orb-float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(30px, -40px) scale(1.1); }
      50% { transform: translate(-20px, 30px) scale(0.9); }
      75% { transform: translate(-30px, -20px) scale(1.05); }
    }
    
    @keyframes float-element {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    
    @keyframes particle-float {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 0.5;
      }
      90% {
        opacity: 0.5;
      }
      100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
      }
    }
    
    @keyframes pattern-slide {
      0% { transform: translate(-50%, -50%); }
      100% { transform: translate(0%, 0%); }
    }
    
    @keyframes rotate-gradient {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes pulse-glow {
      0%, 100% {
        box-shadow: 0 4px 15px rgba(184, 233, 45, 0.2);
      }
      50% {
        box-shadow: 0 4px 25px rgba(184, 233, 45, 0.4);
      }
    }
    
    @keyframes shine {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(200%);
      }
    }
  `
  document.head.appendChild(styleSheet)
}

// Project interface
interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  url?: string  // Optional URL for live demo
  tags: string[]
  client: string
  year: string
  metrics: Record<string, string>
  color: string
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [hoveredTag, setHoveredTag] = useState<string | null>(null)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)  
  const { language, t } = useLanguage()

  // Projects data
  const projects: Project[] = [
  {
    id: 'chat-widget',
    title: 'MERKTOP AI Chat Widget',
    category: 'automation',
    description: 'Widget de chat inteligente con IA para sitios web, incluye Lead Gate obligatorio y respuestas contextuales avanzadas',
    image: '/projects/chat-widget.jpg',
    url: 'https://chat.merktop.com/',
    tags: ['React', 'OpenAI GPT', 'Vite', 'TypeScript'],
    client: 'MERKTOP Platform',
    year: '2024',
    metrics: {
      'conversiones': '+65%',
      'leads/mes': '10K+',
      'integraciones': '500+'
    },
    color: 'green'
  },
  {
    id: 'mercadito-store',
    title: 'EcoShop E-commerce',
    category: 'ecommerce',
    description: 'Plataforma e-commerce moderna con integración WhatsApp para pedidos, panel admin completo y sistema de entregas',
    image: '/projects/ecommerce.jpg',
    url: 'https://store.merktop.com/',
    tags: ['React', 'TypeScript', 'Refine.dev', 'Ant Design', 'WhatsApp API'],
    client: 'EcoShop',
    year: '2024',
    metrics: {
      'productos': '1000+',
      'conversión': '+45%',
      'usuarios': '25K+'
    },
    color: 'purple'
  },
  {
    id: 'pitch-landing',
    title: 'Interactive Pitch Platform',
    category: 'web',
    description: 'Landing page interactiva tipo quiz para capturar ideas de negocio con soporte multiidioma y animaciones fluidas',
    image: '/projects/pitch.jpg',
    url: 'https://pitch.merktop.com/',
    tags: ['React', 'Vite', 'i18next', 'Framer Motion'],
    client: 'MERKTOP Ventures',
    year: '2024',
    metrics: {
      'conversión': '35%',
      'ideas captadas': '500+',
      'engagement': '85%'
    },
    color: 'blue'
  },
  {
    id: 'telegram-store',
    title: 'Telegram Store WebApp',
    category: 'ecommerce',
    description: 'Tienda online integrada como WebApp nativa de Telegram con tema dinámico y haptic feedback',
    image: '/projects/telegram.jpg',
    url: 'https://telegram-shop.merktop.com/',
    tags: ['React', 'TypeScript', 'Telegram SDK', 'Context API'],
    client: 'Telegram Commerce',
    year: '2024',
    metrics: {
      'usuarios': '50K+',
      'ventas/día': '200+',
      'rating': '4.8★'
    },
    color: 'orange'
  },
  {
    id: 'ai-tutor',
    title: 'AI Live Audio Tutor',
    category: 'software',
    description: 'Aplicación de tutoría con IA que incluye procesamiento de audio en tiempo real y visualizaciones 3D interactivas',
    image: '/projects/ai-tutor.jpg',
    url: 'https://ai-tutor-production-a281.up.railway.app/',
    tags: ['TypeScript', 'Gemini AI', 'WebGL', 'Audio API'],
    client: 'EduTech Solutions',
    year: '2024',
    metrics: {
      'estudiantes': '15K+',
      'sesiones/día': '1K+',
      'satisfacción': '96%'
    },
    color: 'green'
  },
  {
    id: 'automation-suite',
    title: 'Business Automation Suite',
    category: 'automation',
    description: 'Suite completa de automatización empresarial con n8n, integrando CRM, marketing y operaciones',
    image: '/projects/automation.jpg',
    tags: ['n8n', 'Node.js', 'Docker', 'API Integration'],
    client: 'Enterprise Corp',
    year: '2024',
    metrics: {
      'procesos auto': '150+',
      'tiempo ahorrado': '60hrs/sem',
      'ROI': '+380%'
    },
    color: 'purple'
  },
  {    id: 'signflow-docusign',    title: language === 'es' ? 'SignFlow - Contratos Digitales' : 'SignFlow - Digital Contracts',    category: 'software',    description: language === 'es' 
      ? 'Plataforma profesional de contratos digitales con integración DocuSign, generación automática de PDFs y gestión completa de firmas electrónicas'
      : 'Professional digital contracts platform with DocuSign integration, automatic PDF generation and complete electronic signature management',    image: '/projects/signflow.jpg',    url: 'https://signedyou.com/',    tags: ['React', 'TypeScript', 'DocuSign API', 'Prisma', 'Node.js', 'PostgreSQL'],    client: 'SignFlow Platform',    year: '2024',    metrics: language === 'es' ? {
      'contratos/mes': '2K+',
      'tiempo reducido': '85%',
      'satisfacción': '98%'
    } : {
      'contracts/month': '2K+',
      'time reduced': '85%',
      'satisfaction': '98%'
    },    color: 'blue'  },
  {
    id: '360-real-estate',
    title: language === 'es' ? '360° Real Estate Platform' : '360° Real Estate Platform',
    category: 'software',
    description: language === 'es' 
      ? 'Plataforma inmobiliaria moderna con búsqueda avanzada, filtros inteligentes, mapas interactivos y soporte multiidioma. Incluye visualización 360°, tours virtuales y gestión completa de propiedades'
      : 'Modern real estate platform with advanced search, smart filters, interactive maps and multilingual support. Features 360° visualization, virtual tours and complete property management',
    image: '/projects/360-real-estate.jpg',
    url: 'https://360.merktop.com/',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'i18next', 'Leaflet', 'Zustand', 'Vite'],
    client: '360° Real Estate',
    year: '2024',
    metrics: language === 'es' ? {
      'propiedades': '10K+',
      'búsquedas/día': '5K+',
      'conversión': '12%'
    } : {
      'properties': '10K+',
      'searches/day': '5K+',
      'conversion': '12%'
    },
    color: 'emerald'
  }
]

  const categories = [
    { id: 'all', name: t.portfolioPage.filter.all, icon: Filter },
    { id: 'web', name: t.portfolioPage.filter.web, icon: Cpu },
    { id: 'ecommerce', name: t.portfolioPage.filter.ecommerce, icon: Store },
    { id: 'automation', name: t.portfolioPage.filter.automation, icon: Zap },
    { id: 'software', name: t.portfolioPage.filter.software, icon: Code2 },
  ]

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  )

  return (
    <>
      <section style={styles.heroSection}>
        {/* Background Effects */}
        <div style={styles.bgPattern} />
        <div style={{...styles.orb, ...styles.orb1}} />
        <div style={{...styles.orb, ...styles.orb2}} />
        <div style={{...styles.orb, ...styles.orb3}} />
        
        {/* Floating Elements */}
        <div style={{...styles.floatingElement, ...styles.floatingElement1}}>🎨</div>
        <div style={{...styles.floatingElement, ...styles.floatingElement2}}>🚀</div>
        <div style={{...styles.floatingElement, ...styles.floatingElement3}}>💼</div>
        
        {/* Particle System */}
        <div style={styles.particlesContainer}>
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              style={{
                ...styles.particle,
                ...(i % 2 === 1 ? styles.particleOdd : {}),
                left: `${(i * 5) % 100}%`,
                animationDelay: `${i}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.heroContent}
          >
            <motion.div
              style={styles.badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles style={styles.badgeIcon} />
              {t.portfolioPage.badge}
            </motion.div>
            
            <motion.h1
              style={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t.portfolioPage.title} <span style={styles.titleHighlight}>{t.portfolioPage.titleHighlight}</span>
            </motion.h1>
            
            <motion.p
              style={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t.portfolioPage.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section style={styles.contentSection}>
        <div className="container">
          <motion.div 
            style={styles.filtersContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  ...styles.filterBtn,
                  ...(selectedCategory === category.id ? styles.filterBtnActive : {}),
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category.id) {
                    Object.assign(e.currentTarget.style, styles.filterBtnHover)
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category.id) {
                    Object.assign(e.currentTarget.style, styles.filterBtn)
                  }
                }}
              >
                <category.icon style={styles.filterIcon} />
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          <div style={styles.portfolioGrid}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  ...styles.portfolioItem,
                  ...(hoveredItem === project.id ? styles.portfolioItemHover : {}),
                }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredItem(project.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Featured badge for main projects */}
                {index < 5 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
                      color: '#0A2E1F',
                      padding: '0.375rem 0.875rem',
                      borderRadius: '1rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      zIndex: 2,
                      boxShadow: '0 4px 10px rgba(184, 233, 45, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    <Sparkles style={{ width: '12px', height: '12px' }} />
                    {language === 'es' ? 'DESTACADO' : 'FEATURED'}
                  </div>
                )}
                <div style={styles.portfolioImage}>
                  <div style={styles.imagePlaceholder}>
                    <motion.div
                      style={styles.placeholderPattern}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                  </div>
                </div>

                <div style={styles.portfolioDetails}>
                  <div style={styles.portfolioMeta}>
                    <span style={styles.metaItem}>
                      <Users style={styles.metaIcon} />
                      {project.client}
                    </span>
                    <span style={styles.metaItem}>
                      <Calendar style={styles.metaIcon} />
                      {project.year}
                    </span>
                  </div>

                  <h3 style={styles.portfolioTitle}>{project.title}</h3>
                  <p style={styles.portfolioDescription}>{project.description}</p>

                  <div style={styles.tagsContainer}>
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        style={{
                          ...styles.tag,
                          ...(hoveredTag === `${project.id}-${tag}` ? styles.tagHover : {}),
                        }}
                        onMouseEnter={() => setHoveredTag(`${project.id}-${tag}`)}
                        onMouseLeave={() => setHoveredTag(null)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={styles.metricsContainer}>
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} style={styles.metric}>
                        <div style={styles.metricValue}>{value}</div>
                        <div style={styles.metricLabel}>{key}</div>
                      </div>
                    ))}
                  </div>

                  {project.url ? (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...styles.demoButton,
                        animation: index < 5 ? 'pulse-glow 2s ease-in-out infinite' : undefined,
                      }}
                      whileHover={styles.demoButtonHover}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Shine effect */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                          animation: 'shine 3s ease-in-out infinite',
                          animationDelay: `${index * 0.5}s`,
                        }}
                      />
                      <ExternalLink style={{ ...styles.demoButtonIcon, position: 'relative', zIndex: 1 }} />
                      <span style={{ position: 'relative', zIndex: 1 }}>
                        {language === 'es' ? 'Ver Demo En Vivo' : 'View Live Demo'}
                      </span>
                    </motion.a>
                  ) : (
                    <div
                      style={{
                        ...styles.demoButton,
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'rgba(255, 255, 255, 0.5)',
                        cursor: 'not-allowed',
                        boxShadow: 'none',
                      }}
                    >
                      <span>{language === 'es' ? 'Proyecto Privado' : 'Private Project'}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.statsSection}>
        <div style={styles.statsSectionBefore} />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={styles.statsGrid}
          >
            {[
              { number: '250+', label: language === 'es' ? 'Proyectos Completados' : 'Projects Completed' },
              { number: '98%', label: language === 'es' ? 'Clientes Satisfechos' : 'Client Satisfaction' },
              { number: '50+', label: language === 'es' ? 'Industrias Atendidas' : 'Industries Served' },
              { number: '7+', label: language === 'es' ? 'Años de Experiencia' : 'Years of Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                style={{
                  ...styles.statCard,
                  ...(hoveredStat === index ? styles.statCardHover : {}),
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section style={styles.ctaSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={styles.ctaCard}
          >
            <div style={styles.ctaCardBefore} />
            <h2 style={styles.ctaTitle}>
              {language === 'es' ? '¿Tienes un proyecto en mente?' : 'Have a project in mind?'}
            </h2>
            <p style={styles.ctaDescription}>
              {language === 'es' 
                ? 'Trabajemos juntos para convertir tu visión en realidad'
                : "Let's work together to turn your vision into reality"}
            </p>
            <a 
              href="/contact" 
              style={styles.ctaButton}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.ctaButtonHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.ctaButton)}
            >
              {language === 'es' ? 'Iniciar Proyecto' : 'Start Project'}
              <ExternalLink style={styles.btnIcon} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}