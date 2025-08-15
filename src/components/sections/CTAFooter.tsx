'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface CTAFooterProps {
  onOpenAIPanel?: () => void
}

export default function CTAFooter({ onOpenAIPanel }: CTAFooterProps) {
  const { language, t } = useLanguage()

  // CSS-in-JS Styles
  const styles = {
    section: {
      position: 'relative' as const,
      padding: '100px 0',
      background: 'linear-gradient(135deg, #0A2E1F 0%, #0F3D2A 50%, #0A2E1F 100%)',
      overflow: 'hidden',
    },
    bgPattern: {
      position: 'absolute' as const,
      inset: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8E92D' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    },
    container: {
      position: 'relative' as const,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      textAlign: 'center' as const,
      zIndex: 10,
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 20px',
      background: 'rgba(184, 233, 45, 0.1)',
      border: '1px solid rgba(184, 233, 45, 0.3)',
      borderRadius: '30px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#B8E92D',
      marginBottom: '24px',
    },
    title: {
      fontSize: 'clamp(36px, 5vw, 56px)',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '24px',
      lineHeight: '1.2',
    },
    subtitle: {
      fontSize: '20px',
      color: 'rgba(255, 255, 255, 0.8)',
      maxWidth: '700px',
      margin: '0 auto 48px',
      lineHeight: '1.6',
    },
    buttons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
      marginBottom: '60px',
    },
    btnPrimary: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '16px 36px',
      backgroundColor: '#B8E92D',
      color: '#0A2E1F',
      border: 'none',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(184, 233, 45, 0.3)',
    },
    btnSecondary: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '16px 36px',
      backgroundColor: 'transparent',
      color: '#fff',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    stats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '60px',
      flexWrap: 'wrap' as const,
    },
    stat: {
      textAlign: 'center' as const,
    },
    statValue: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#B8E92D',
      marginBottom: '8px',
    },
    statLabel: {
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.7)',
    },
    decorativeIcon: {
      position: 'absolute' as const,
      opacity: 0.2,
      color: '#B8E92D',
    },
    iconTopLeft: {
      top: '80px',
      left: '40px',
    },
    iconBottomRight: {
      bottom: '80px',
      right: '40px',
      transform: 'rotate(45deg)',
    },
  }

  return (
    <section style={styles.section}>
      {/* Background Pattern */}
      <div style={styles.bgPattern} />
      
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span style={styles.badge}>
            {language === 'es' ? '🚀 Transforma Tu Negocio' : '🚀 Transform Your Business'}
          </span>
          
          <h2 style={styles.title}>
            {t.cta.title}
          </h2>
          
          <p style={styles.subtitle}>
            {t.cta.subtitle}
          </p>
          
          <div style={styles.buttons}>
            <button 
              onClick={onOpenAIPanel}
              style={{...styles.btnPrimary, cursor: 'pointer'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 30px rgba(184, 233, 45, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(184, 233, 45, 0.3)';
              }}
            >
              {t.cta.button}
              <ArrowRight size={20} />
            </button>
            <Link 
              href="/services" 
              style={styles.btnSecondary}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = '#B8E92D';
                e.currentTarget.style.color = '#B8E92D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.color = '#fff';
              }}
            >
              {language === 'es' ? 'Ver Servicios' : 'View Services'}
            </Link>
          </div>
          
          <div style={styles.stats}>
            <motion.div 
              style={styles.stat}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div style={styles.statValue}>250+</div>
              <div style={styles.statLabel}>
                {language === 'es' ? 'Clientes Felices' : 'Happy Clients'}
              </div>
            </motion.div>
            
            <motion.div 
              style={styles.stat}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div style={styles.statValue}>98%</div>
              <div style={styles.statLabel}>
                {language === 'es' ? 'Tasa de Éxito' : 'Success Rate'}
              </div>
            </motion.div>
            
            <motion.div 
              style={styles.stat}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div style={styles.statValue}>24/7</div>
              <div style={styles.statLabel}>
                {language === 'es' ? 'Soporte' : 'Support'}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        style={{ ...styles.decorativeIcon, ...styles.iconTopLeft }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Zap size={64} />
      </motion.div>
      <motion.div 
        style={{ ...styles.decorativeIcon, ...styles.iconBottomRight }}
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Zap size={80} />
      </motion.div>
    </section>
  )
}