'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Code, 
  Palette, 
  ShoppingCart, 
  Zap, 
  Shield, 
  Smartphone,
  Cloud,
  Database,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'
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
    padding: '160px 0 80px',
  },
  
  bgPattern: {
    position: 'absolute' as const,
    inset: 0,
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
    filter: 'blur(100px)',
    opacity: 0.3,
    animation: 'orb-float 25s ease-in-out infinite',
  },
  
  orb1: {
    width: '500px',
    height: '500px',
    background: '#B8E92D',
    top: '-250px',
    right: '-150px',
    animationDuration: '30s',
  },
  
  orb2: {
    width: '400px',
    height: '400px',
    background: '#7FD858',
    bottom: '-200px',
    left: '-100px',
    animationDuration: '35s',
    animationDelay: '-10s',
  },
  
  orb3: {
    width: '300px',
    height: '300px',
    background: '#4ADE80',
    top: '50%',
    left: '30%',
    animationDuration: '40s',
    animationDelay: '-20s',
  },
  
  floatingElement: {
    position: 'absolute' as const,
    fontSize: '2rem',
    animation: 'float-element 6s ease-in-out infinite',
    zIndex: 1,
  },
  
  floatingElement1: {
    top: '20%',
    left: '10%',
    animationDelay: '0s',
  },
  
  floatingElement2: {
    top: '60%',
    right: '15%',
    animationDelay: '2s',
  },
  
  floatingElement3: {
    bottom: '30%',
    left: '20%',
    animationDelay: '4s',
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
    color: '#B8E92D',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    fontSize: '0.875rem',
    fontWeight: 600,
    marginBottom: '2rem',
    backdropFilter: 'blur(10px)',
  },
  
  badgeIcon: {
    width: '16px',
    height: '16px',
  },
  
  title: {
    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
    fontWeight: 800,
    color: '#FFFFFF',
    lineHeight: 1.1,
    marginBottom: '1.5rem',
    letterSpacing: '-0.02em',
  },
  
  titleHighlight: {
    background: 'linear-gradient(135deg, #B8E92D, #7FD858)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  
  subtitle: {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 1.7,
    maxWidth: '700px',
    margin: '0 auto',
  },
  
  // Filter Section
  filterSection: {
    background: '#0A2E1F',
    padding: '3rem 0',
    borderBottom: '1px solid rgba(184, 233, 45, 0.1)',
  },
  
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap' as const,
    maxWidth: '800px',
    margin: '0 auto',
  },
  
  filterBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1.75rem',
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
    overflow: 'hidden'
  },
  
  filterBtnHover: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(184, 233, 45, 0.3)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(184, 233, 45, 0.15)',
  },
  
  filterBtnActive: {
    background: 'rgba(184, 233, 45, 0.1)',
    borderColor: '#B8E92D',
    color: '#B8E92D',
    boxShadow: '0 0 20px rgba(184, 233, 45, 0.3)',
  },
  
  // Services Grid Section
  gridSection: {
    background: '#0A2E1F',
    padding: '5rem 0',
    position: 'relative' as const,
  },
  
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  // Service Card
  serviceCard: {
    background: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(184, 233, 45, 0.15)',
    borderRadius: '24px',
    padding: '2.5rem',
    position: 'relative' as const,
    overflow: 'hidden',
    transition: 'all 0.4s ease',
    display: 'flex',
    flexDirection: 'column' as const,
    minHeight: '400px',
  },
  
  serviceCardHover: {
    borderColor: 'rgba(184, 233, 45, 0.4)',
    boxShadow: '0 25px 70px rgba(184, 233, 45, 0.15)',
    transform: 'translateY(-8px)',
  },
  
  serviceCardPopular: {
    borderColor: 'rgba(184, 233, 45, 0.4)',
    background: 'rgba(255, 255, 255, 0.03)',
  },
  
  popularBadge: {
    position: 'absolute' as const,
    top: '1.5rem',
    right: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'linear-gradient(135deg, #B8E92D, #7FD858)',
    color: '#0A2E1F',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    fontSize: '0.75rem',
    fontWeight: 700,
    animation: 'pulse-badge 2s infinite',
  },
  
  serviceContent: {
    position: 'relative' as const,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100%',
  },
  
  iconWrapper: {
    width: '80px',
    height: '80px',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    position: 'relative' as const,
    fontSize: '2rem',
    alignSelf: 'flex-start',
    boxShadow: '0 8px 25px rgba(184, 233, 45, 0.3)',
  },
  
  iconWrapperBefore: {
    content: '""',
    position: 'absolute' as const,
    inset: '-2px',
    background: 'linear-gradient(135deg, #B8E92D, #7FD858)',
    borderRadius: '22px',
    zIndex: -1,
    filter: 'blur(8px)',
    opacity: 0.6,
  },
  
  serviceIcon: {
    width: '36px',
    height: '36px',
    position: 'relative' as const,
    zIndex: 1,
    color: '#0A2E1F',
  },
  
  serviceTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: '1rem',
    position: 'relative' as const,
    zIndex: 1,
  },
  
  serviceDescription: {
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    position: 'relative' as const,
    zIndex: 1,
    fontSize: '0.95rem',
  },
  
  serviceFeatures: {
    flexGrow: 1,
    marginBottom: '2rem',
    position: 'relative' as const,
    zIndex: 1,
  },
  
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.5rem 0',
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease',
  },
  
  featureItemHover: {
    color: 'rgba(255, 255, 255, 0.95)',
    transform: 'translateX(4px)',
  },
  
  featureIcon: {
    color: '#B8E92D',
    width: '18px',
    height: '18px',
    flexShrink: 0,
    filter: 'drop-shadow(0 0 4px rgba(184, 233, 45, 0.4))',
  },
  
  serviceFooter: {
    paddingTop: '1.5rem',
    borderTop: '1px solid rgba(184, 233, 45, 0.15)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    position: 'relative' as const,
    zIndex: 1,
  },
  
  servicePrice: {
    display: 'flex',
    flexDirection: 'column' as const,
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#B8E92D',
    textShadow: '0 0 10px rgba(184, 233, 45, 0.3)',
  },
  
  serviceCta: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1.75rem',
    background: 'transparent',
    border: '2px solid rgba(184, 233, 45, 0.3)',
    color: '#B8E92D',
    borderRadius: '50px',
    fontSize: '0.875rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  
  serviceCtaHover: {
    background: 'rgba(184, 233, 45, 0.1)',
    borderColor: '#B8E92D',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(184, 233, 45, 0.2)',
  },
  
  ctaIcon: {
    width: '16px',
    height: '16px',
    transition: 'transform 0.3s ease',
  },
  
  // CTA Section
  ctaSection: {
    background: 'linear-gradient(135deg, #0A2E1F 0%, #0F3D2A 50%, #0A2E1F 100%)',
    padding: '5rem 0',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  
  ctaSectionBefore: {
    content: '""',
    position: 'absolute' as const,
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(184, 233, 45, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(184, 233, 45, 0.02) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    animation: 'grid-move 20s linear infinite',
  },
  
  ctaContent: {
    textAlign: 'center' as const,
    maxWidth: '600px',
    margin: '0 auto',
    padding: '3rem',
    background: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(184, 233, 45, 0.1)',
    borderRadius: '24px',
    position: 'relative' as const,
    zIndex: 1,
  },
  
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #FFFFFF, #B8E92D)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  
  ctaSubtitle: {
    fontSize: '1.125rem',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '2.5rem',
    lineHeight: 1.6,
  },
  
  btnCtaPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1.25rem 2.5rem',
    background: 'linear-gradient(135deg, #B8E92D, #7FD858)',
    color: '#0A2E1F',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.125rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden',
    textDecoration: 'none',
  },
  
  btnCtaPrimaryHover: {
    transform: 'translateY(-3px)',
    boxShadow: '0 15px 40px rgba(184, 233, 45, 0.4)',
  },
  
  btnIcon: {
    width: '20px',
    height: '20px',
  },
}

// Add keyframes to global styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = `
    @keyframes grid-move {
      0% { transform: translate(0, 0); }
      100% { transform: translate(50px, 50px); }
    }
    
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
    
    @keyframes pulse-badge {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `
  document.head.appendChild(styleSheet)
}

interface Service {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  price: string
  popular?: boolean
  gradient: string
}

export default function ServicesPage() {
  const { t, language } = useLanguage()
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const serviceIcons = {
    'ai-automation': <Zap />,
    'custom-software': <Code />,
    'web-apps': <Palette />,
    'ecommerce': <ShoppingCart />,
    'cloud-solutions': <Cloud />,
    'mobile-apps': <Smartphone />,
    'data-analytics': <BarChart3 />,
    'cybersecurity': <Shield />,
    'database-design': <Database />
  }

  const serviceGradients = {
    'ai-automation': 'linear-gradient(135deg, #B8E92D, #7FD858)',
    'custom-software': 'linear-gradient(135deg, #7FD858, #4ADE80)',
    'web-apps': 'linear-gradient(135deg, #B8E92D, #4ADE80)',
    'ecommerce': 'linear-gradient(135deg, #7FD858, #B8E92D)',
    'cloud-solutions': 'linear-gradient(135deg, #4ADE80, #7FD858)',
    'mobile-apps': 'linear-gradient(135deg, #B8E92D, #7FD858)',
    'data-analytics': 'linear-gradient(135deg, #7FD858, #4ADE80)',
    'cybersecurity': 'linear-gradient(135deg, #4ADE80, #B8E92D)',
    'database-design': 'linear-gradient(135deg, #B8E92D, #4ADE80)'
  }

  const services: Service[] = t.servicesPage.services.map((service) => ({
    ...service,
    icon: serviceIcons[service.id as keyof typeof serviceIcons] || <Zap />,
    popular: service.id === 'ai-automation',
    gradient: serviceGradients[service.id as keyof typeof serviceGradients] || 'linear-gradient(135deg, #B8E92D, #7FD858)'
  }))

  const categories = [
    { id: 'all', name: t.servicesPage.categories.all },
    { id: 'development', name: t.servicesPage.categories.development },
    { id: 'automation', name: t.servicesPage.categories.automation }
  ]

  const getCategoryServices = (category: string) => {
    if (category === 'all') return services
    
    const categoryMap: { [key: string]: string[] } = {
      development: ['custom-software', 'web-apps', 'mobile-apps', 'ecommerce', 'cloud-solutions', 'cybersecurity', 'database-design'],
      automation: ['ai-automation', 'data-analytics']
    }
    
    return services.filter(service => categoryMap[category]?.includes(service.id))
  }

  const filteredServices = getCategoryServices(selectedCategory)



  return (
    <>
      <section style={styles.heroSection}>
        {/* Background Effects */}
        <div style={styles.bgPattern} />
        <div style={{...styles.orb, ...styles.orb1}} />
        <div style={{...styles.orb, ...styles.orb2}} />
        <div style={{...styles.orb, ...styles.orb3}} />
        
        {/* Floating Elements */}
        <div style={{...styles.floatingElement, ...styles.floatingElement1}}>⚡</div>
        <div style={{...styles.floatingElement, ...styles.floatingElement2}}>🚀</div>
        <div style={{...styles.floatingElement, ...styles.floatingElement3}}>💡</div>
        
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
              {language === 'es' ? 'Soluciones Tecnológicas de Vanguardia' : 'Cutting-edge Technology Solutions'}
            </motion.div>
            
            <motion.h1
              style={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t.servicesPage.title}
            </motion.h1>
            
            <motion.p
              style={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t.servicesPage.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={styles.filterSection}>
        <div className="container">
          <motion.div 
            style={styles.filterContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  ...styles.filterBtn,
                  ...(selectedCategory === category.id ? styles.filterBtnActive : {}),
                }}
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
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={styles.gridSection}>
        <div className="container">
          <motion.div 
            style={styles.servicesGrid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    ...styles.serviceCard,
                    ...(service.popular ? styles.serviceCardPopular : {}),
                    ...(hoveredService === service.id ? styles.serviceCardHover : {}),
                  }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {service.popular && (
                    <div style={styles.popularBadge}>
                      <Sparkles size={16} />
                      {language === 'es' ? 'Más Popular' : 'Most Popular'}
                    </div>
                  )}
                  
                  <div style={styles.serviceContent}>
                    <div style={{...styles.iconWrapper, background: service.gradient}}>
                      <motion.div
                        animate={{
                          scale: hoveredService === service.id ? 1.1 : 1,
                          rotate: hoveredService === service.id ? 5 : 0
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        style={styles.serviceIcon}
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                    
                    <h3 style={styles.serviceTitle}>{service.title}</h3>
                    <p style={styles.serviceDescription}>{service.description}</p>
                    
                    <div style={styles.serviceFeatures}>
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          style={{
                            ...styles.featureItem,
                            ...(hoveredFeature === `${service.id}-${idx}` ? styles.featureItemHover : {}),
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + idx * 0.05 }}
                          onMouseEnter={() => setHoveredFeature(`${service.id}-${idx}`)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <CheckCircle style={styles.featureIcon} />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div style={styles.serviceFooter}>
                      <div style={styles.servicePrice}>{service.price}</div>
                      <Link 
                        href="/contact"
                        style={{...styles.serviceCta, textDecoration: 'none'}}
                        onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.serviceCtaHover)}
                        onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.serviceCta)}
                      >
                        {language === 'es' ? 'Me interesa' : 'I\'m interested'}
                        <ArrowRight style={styles.ctaIcon} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaSectionBefore} />
        <div className="container">
          <motion.div
            style={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={styles.ctaTitle}>
              {language === 'es' ? '¿No encuentras lo que buscas?' : "Can't find what you're looking for?"}
            </h2>
            <p style={styles.ctaSubtitle}>
              {language === 'es' 
                ? 'Creamos soluciones personalizadas para cada necesidad de negocio' 
                : 'We create custom solutions for every business need'}
            </p>
            <button 
              style={styles.btnCtaPrimary}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.btnCtaPrimaryHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.btnCtaPrimary)}
            >
              {t.common.contactUs}
            </button>
          </motion.div>
        </div>
      </section>
      

    </>
  )
}