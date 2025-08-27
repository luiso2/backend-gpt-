'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { portfolioStyles } from './styles'

interface PortfolioHeroProps {
  className?: string
}

export default function PortfolioHero({ className }: PortfolioHeroProps) {
  const { t } = useLanguage()

  return (
    <section style={portfolioStyles.heroSection} className={className}>
      {/* Background Effects */}
      <div style={portfolioStyles.bgPattern} />
      <div style={{...portfolioStyles.orb, ...portfolioStyles.orb1}} />
      <div style={{...portfolioStyles.orb, ...portfolioStyles.orb2}} />
      <div style={{...portfolioStyles.orb, ...portfolioStyles.orb3}} />
      
      {/* Floating Elements */}
      <div style={{
        position: 'absolute',
        fontSize: '2rem',
        animation: 'float-element 6s ease-in-out infinite',
        zIndex: 1,
        top: '25%',
        left: '5%',
        animationDelay: '0s',
      }}>🎨</div>
      <div style={{
        position: 'absolute',
        fontSize: '2rem',
        animation: 'float-element 6s ease-in-out infinite',
        zIndex: 1,
        top: '70%',
        right: '10%',
        animationDelay: '2s',
      }}>🚀</div>
      <div style={{
        position: 'absolute',
        fontSize: '2rem',
        animation: 'float-element 6s ease-in-out infinite',
        zIndex: 1,
        bottom: '40%',
        left: '15%',
        animationDelay: '4s',
      }}>💼</div>
      
      {/* Particle System */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: i % 2 === 1 ? '#7FD858' : '#B8E92D',
              borderRadius: '50%',
              opacity: 0.5,
              animation: 'particle-float 10s linear infinite',
              animationDuration: i % 2 === 1 ? '15s' : '10s',
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
          style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <motion.div
            style={{
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
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles style={{ width: '16px', height: '16px' }} />
            {t.portfolioPage.badge}
          </motion.div>
          
          <motion.h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              color: '#FFFFFF',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {t.portfolioPage.title}{' '}
            <span style={{
              background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {t.portfolioPage.titleHighlight}
            </span>
          </motion.h1>
          
          <motion.p
            style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t.portfolioPage.subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}