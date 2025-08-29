'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Handshake, Target, TrendingUp, Users, Shield, Rocket, ArrowRight, CheckCircle, Sparkles, Globe, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation, getNestedTranslation } from '@/lib/i18n'

const getPartnerTypes = (t: any) => [
  {
    icon: Target,
    key: 'marketingAgencies',
    color: 'purple'
  },
  {
    icon: Users,
    key: 'techConsultants',
    color: 'blue'
  },
  {
    icon: Rocket,
    key: 'startups',
    color: 'green'
  },
  {
    icon: Shield,
    key: 'enterprises',
    color: 'orange'
  }
]

const getSuccessStories = (t: any) => [
  {
    key: 'techGrowthAgency'
  },
  {
    key: 'innovateCorp'
  }
]

export default function PartnershipsPage() {
  const { language } = useLanguage()
  const { t } = useTranslation('partnerships', language)
  const partnerTypes = getPartnerTypes(t)
  const successStories = getSuccessStories(t)

  // CSS-in-JS Styles
  const styles = {
    // Hero Section
    heroSection: {
      position: 'relative' as const,
      minHeight: '70vh',
      background: 'linear-gradient(135deg, #0A2E1F 0%, #0F3D2A 50%, #0A2E1F 100%)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 0 80px',
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
      filter: 'blur(40px)',
      opacity: 0.3,
      animation: 'orb-float 15s ease-in-out infinite',
    },
    
    orb1: {
      width: '400px',
      height: '400px',
      background: '#B8E92D',
      top: '-200px',
      left: '-100px',
      animationDuration: '20s',
    },
    
    orb2: {
      width: '500px',
      height: '500px',
      background: '#4ADE80',
      bottom: '-250px',
      right: '-200px',
      animationDuration: '25s',
      animationDelay: '-5s',
    },
    
    floatingIcon: {
      position: 'absolute' as const,
      fontSize: '2rem',
      animation: 'float-element 6s ease-in-out infinite',
      zIndex: 1,
      opacity: 0.3,
      color: '#B8E92D',
    },
    
    floatingIcon1: {
      top: '20%',
      left: '10%',
      animationDelay: '0s',
    },
    
    floatingIcon2: {
      top: '60%',
      right: '15%',
      animationDelay: '2s',
    },
    
    floatingIcon3: {
      bottom: '30%',
      left: '20%',
      animationDelay: '4s',
    },
    
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      position: 'relative' as const,
      zIndex: 1,
    },
    
    heroContent: {
      textAlign: 'center' as const,
    },
    
    heroBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 24px',
      background: 'rgba(184, 233, 45, 0.1)',
      border: '1px solid rgba(184, 233, 45, 0.3)',
      borderRadius: '100px',
      marginBottom: '32px',
      fontSize: '14px',
      color: '#B8E92D',
      fontWeight: '600',
      backdropFilter: 'blur(10px)',
    },
    
    pageTitle: {
      fontSize: 'clamp(40px, 5vw, 64px)',
      fontWeight: 800,
      color: '#fff',
      marginBottom: '24px',
      lineHeight: 1.1,
    },
    
    textGradient: {
      background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    
    pageSubtitle: {
      fontSize: '20px',
      color: 'rgba(255, 255, 255, 0.8)',
      maxWidth: '600px',
      margin: '0 auto 48px',
      lineHeight: 1.6,
    },
    
    heroStats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '60px',
      flexWrap: 'wrap' as const,
      marginTop: '48px',
    },
    
    stat: {
      textAlign: 'center' as const,
    },
    
    statValue: {
      fontSize: '48px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '8px',
    },
    
    statLabel: {
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.7)',
    },
    
    // Partner Types Section
    partnerTypesSection: {
      padding: '100px 0',
      background: '#0A2E1F',
    },
    
    sectionHeader: {
      textAlign: 'center' as const,
      marginBottom: '60px',
    },
    
    sectionTitle: {
      fontSize: 'clamp(32px, 4vw, 48px)',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '16px',
    },
    
    sectionSubtitle: {
      fontSize: '18px',
      color: 'rgba(255, 255, 255, 0.7)',
      maxWidth: '600px',
      margin: '0 auto',
    },
    
    partnerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '32px',
    },
    
    partnerCard: {
      background: 'rgba(255, 255, 255, 0.02)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      padding: '40px 32px',
      transition: 'all 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column' as const,
    },
    
    partnerCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      borderColor: 'rgba(184, 233, 45, 0.3)',
    },
    
    partnerIcon: {
      width: '64px',
      height: '64px',
      background: 'linear-gradient(135deg, rgba(184, 233, 45, 0.2) 0%, rgba(127, 216, 88, 0.1) 100%)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '24px',
      color: '#B8E92D',
    },
    
    partnerCardTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '16px',
    },
    
    partnerCardDescription: {
      color: 'rgba(255, 255, 255, 0.7)',
      marginBottom: '24px',
      lineHeight: 1.6,
      flex: 1,
    },
    
    partnerBenefits: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    
    benefitItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '12px',
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '15px',
    },
    
    benefitIcon: {
      width: '16px',
      height: '16px',
      color: '#B8E92D',
      flexShrink: 0,
    },
    
    // Benefits Section
    benefitsSection: {
      padding: '100px 0',
      background: 'linear-gradient(135deg, #0F3D2A 0%, #0A2E1F 100%)',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    
    benefitsContent: {
      maxWidth: '1000px',
      margin: '0 auto',
    },
    
    benefitsTitle: {
      fontSize: 'clamp(32px, 4vw, 48px)',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '24px',
      textAlign: 'center' as const,
    },
    
    benefitsDescription: {
      fontSize: '18px',
      color: 'rgba(255, 255, 255, 0.8)',
      textAlign: 'center' as const,
      maxWidth: '700px',
      margin: '0 auto 60px',
      lineHeight: 1.6,
    },
    
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px',
    },
    
    benefitCard: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '32px',
      textAlign: 'center' as const,
      transition: 'all 0.3s ease',
    },
    
    benefitCardHover: {
      transform: 'translateY(-5px)',
      background: 'rgba(184, 233, 45, 0.05)',
      borderColor: 'rgba(184, 233, 45, 0.2)',
    },
    
    benefitCardIcon: {
      width: '48px',
      height: '48px',
      color: '#B8E92D',
      marginBottom: '20px',
    },
    
    benefitCardTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '12px',
    },
    
    benefitCardDescription: {
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: 1.6,
    },
    
    // Success Stories Section
    storiesSection: {
      padding: '100px 0',
      background: '#0A2E1F',
    },
    
    storiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '32px',
    },
    
    storyCard: {
      background: 'rgba(255, 255, 255, 0.02)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      padding: '40px',
      transition: 'all 0.3s ease',
    },
    
    storyCardHover: {
      transform: 'scale(1.02)',
      boxShadow: '0 20px 40px rgba(184, 233, 45, 0.1)',
      borderColor: 'rgba(184, 233, 45, 0.3)',
    },
    
    storyHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
    },
    
    storyCompany: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#fff',
    },
    
    storyIndustry: {
      fontSize: '14px',
      color: '#B8E92D',
      background: 'rgba(184, 233, 45, 0.1)',
      padding: '4px 12px',
      borderRadius: '20px',
    },
    
    storyResult: {
      fontSize: '32px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '24px',
    },
    
    storyQuote: {
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.8)',
      fontStyle: 'italic',
      lineHeight: 1.6,
      marginBottom: '24px',
      paddingLeft: '20px',
      borderLeft: '3px solid #B8E92D',
    },
    
    storyAuthor: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '4px',
    },
    
    storyAuthorName: {
      color: '#fff',
      fontWeight: '600',
    },
    
    storyAuthorRole: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '14px',
    },
    
    // CTA Section
    ctaSection: {
      padding: '100px 0',
      background: 'linear-gradient(135deg, #0A2E1F 0%, #0F3D2A 50%, #0A2E1F 100%)',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    
    ctaCard: {
      maxWidth: '800px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.02)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '24px',
      padding: '60px',
      textAlign: 'center' as const,
      position: 'relative' as const,
      overflow: 'hidden',
    },
    
    ctaGlow: {
      position: 'absolute' as const,
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(184, 233, 45, 0.1) 0%, transparent 70%)',
      animation: 'rotate-gradient 20s linear infinite',
    },
    
    ctaTitle: {
      fontSize: 'clamp(32px, 4vw, 48px)',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '24px',
      position: 'relative' as const,
      zIndex: 1,
    },
    
    ctaDescription: {
      fontSize: '18px',
      color: 'rgba(255, 255, 255, 0.8)',
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px',
      position: 'relative' as const,
      zIndex: 1,
    },
    
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      padding: '20px 40px',
      background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
      color: '#0A2E1F',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      position: 'relative' as const,
      zIndex: 1,
      boxShadow: '0 8px 32px rgba(184, 233, 45, 0.3)',
    },
    
    ctaButtonHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 40px rgba(184, 233, 45, 0.4)',
    },
    
    // Decorative elements
    decorativeZap: {
      position: 'absolute' as const,
      color: '#B8E92D',
      opacity: 0.2,
      animation: 'rotate-gradient 20s linear infinite',
    },
    
    zapTopLeft: {
      top: '10%',
      left: '5%',
      fontSize: '64px',
    },
    
    zapBottomRight: {
      bottom: '10%',
      right: '5%',
      fontSize: '80px',
      animationDirection: 'reverse',
    },
  }

  // Add keyframes
  if (typeof document !== 'undefined' && !document.getElementById('partnerships-keyframes')) {
    const styleSheet = document.createElement('style')
    styleSheet.id = 'partnerships-keyframes'
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
      
      @keyframes rotate-gradient {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `
    document.head.appendChild(styleSheet)
  }

  return (
    <>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.bgPattern} />
        <div style={{...styles.orb, ...styles.orb1}} />
        <div style={{...styles.orb, ...styles.orb2}} />
        
        <div style={{...styles.floatingIcon, ...styles.floatingIcon1}}>
          <Handshake size={32} />
        </div>
        <div style={{...styles.floatingIcon, ...styles.floatingIcon2}}>
          <Globe size={32} />
        </div>
        <div style={{...styles.floatingIcon, ...styles.floatingIcon3}}>
          <Zap size={32} />
        </div>
        
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={styles.heroContent}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              style={styles.heroBadge}
            >
              <Sparkles size={18} />
              <span>{t.hero.badge}</span>
            </motion.div>
            
            <h1 style={styles.pageTitle}>
              {t.hero.title} <span style={styles.textGradient}>{t.hero.titleHighlight}</span>
            </h1>
            
            <p style={styles.pageSubtitle}>
              {t.hero.subtitle}
            </p>
            
            <div style={styles.heroStats}>
              <motion.div 
                style={styles.stat}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div style={styles.statValue}>50+</div>
                <div style={styles.statLabel}>
                  {t.hero.stats.activePartners}
                </div>
              </motion.div>
              
              <motion.div 
                style={styles.stat}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div style={styles.statValue}>200+</div>
                <div style={styles.statLabel}>
                  {t.hero.stats.jointProjects}
                </div>
              </motion.div>
              
              <motion.div 
                style={styles.stat}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div style={styles.statValue}>95%</div>
                <div style={styles.statLabel}>
                  {t.hero.stats.satisfaction}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section style={styles.partnerTypesSection}>
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={styles.sectionHeader}
          >
            <h2 style={styles.sectionTitle}>
              {t.partnerTypes.title}
            </h2>
            <p style={styles.sectionSubtitle}>
              {t.partnerTypes.subtitle}
            </p>
          </motion.div>

          <div style={styles.partnerGrid}>
            {partnerTypes.map((type, index) => {
              const typeData = t.partnerTypes.types[type.key]
              return (
                <motion.div
                  key={type.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={styles.partnerCard}
                  whileHover={styles.partnerCardHover}
                >
                  <div style={styles.partnerIcon}>
                    <type.icon size={32} />
                  </div>
                  <h3 style={styles.partnerCardTitle}>{typeData.title}</h3>
                  <p style={styles.partnerCardDescription}>{typeData.description}</p>
                  <ul style={styles.partnerBenefits}>
                    {typeData.benefits.map((benefit: string, benefitIndex: number) => (
                      <li key={benefitIndex} style={styles.benefitItem}>
                        <CheckCircle style={styles.benefitIcon} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.benefitsSection}>
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.benefitsTitle}>
              {t.benefits.title}
            </h2>
            <p style={styles.benefitsDescription}>
              {t.benefits.subtitle}
            </p>
            
            <div style={styles.benefitsGrid}>
              <motion.div
                style={styles.benefitCard}
                whileHover={styles.benefitCardHover}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Handshake style={styles.benefitCardIcon} />
                <h3 style={styles.benefitCardTitle}>
                  {t.benefits.items.strategicCollaboration.title}
                </h3>
                <p style={styles.benefitCardDescription}>
                  {t.benefits.items.strategicCollaboration.description}
                </p>
              </motion.div>
              
              <motion.div
                style={styles.benefitCard}
                whileHover={styles.benefitCardHover}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <TrendingUp style={styles.benefitCardIcon} />
                <h3 style={styles.benefitCardTitle}>
                  {t.benefits.items.jointGrowth.title}
                </h3>
                <p style={styles.benefitCardDescription}>
                  {t.benefits.items.jointGrowth.description}
                </p>
              </motion.div>
              
              <motion.div
                style={styles.benefitCard}
                whileHover={styles.benefitCardHover}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Shield style={styles.benefitCardIcon} />
                <h3 style={styles.benefitCardTitle}>
                  {t.benefits.items.guaranteedSupport.title}
                </h3>
                <p style={styles.benefitCardDescription}>
                  {t.benefits.items.guaranteedSupport.description}
                </p>
              </motion.div>
              
              <motion.div
                style={styles.benefitCard}
                whileHover={styles.benefitCardHover}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Rocket style={styles.benefitCardIcon} />
                <h3 style={styles.benefitCardTitle}>
                  {t.benefits.items.continuousInnovation.title}
                </h3>
                <p style={styles.benefitCardDescription}>
                  {t.benefits.items.continuousInnovation.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section style={styles.storiesSection}>
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={styles.sectionHeader}
          >
            <h2 style={styles.sectionTitle}>
              {t.successStories.title}
            </h2>
            <p style={styles.sectionSubtitle}>
              {t.successStories.subtitle}
            </p>
          </motion.div>

          <div style={styles.storiesGrid}>
            {successStories.map((story, index) => {
              const storyData = t.successStories.stories[story.key]
              return (
                <motion.div
                  key={story.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  style={styles.storyCard}
                  whileHover={styles.storyCardHover}
                >
                  <div style={styles.storyHeader}>
                    <h3 style={styles.storyCompany}>{storyData.company}</h3>
                    <span style={styles.storyIndustry}>{storyData.industry}</span>
                  </div>
                  
                  <div style={styles.storyResult}>{storyData.result}</div>
                  
                  <blockquote style={styles.storyQuote}>
                    "{storyData.quote}"
                  </blockquote>
                  
                  <div style={styles.storyAuthor}>
                    <strong style={styles.storyAuthorName}>{storyData.author}</strong>
                    <span style={styles.storyAuthorRole}>{storyData.role}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <Zap style={{...styles.decorativeZap, ...styles.zapTopLeft}} />
        <Zap style={{...styles.decorativeZap, ...styles.zapBottomRight}} />
        
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={styles.ctaCard}
          >
            <div style={styles.ctaGlow} />
            
            <h2 style={styles.ctaTitle}>
              {t.cta.title}
            </h2>
            
            <p style={styles.ctaDescription}>
              {t.cta.subtitle}
            </p>
            
            <Link 
              href="/contact?type=partnership" 
              style={styles.ctaButton}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.ctaButtonHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.ctaButton)}
            >
              {t.cta.button}
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}