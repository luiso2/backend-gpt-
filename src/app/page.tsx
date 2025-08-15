'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import HeroSection from '@/components/sections/HeroSection'
import CTAFooter from '@/components/sections/CTAFooter'
import VideoShowcase from '@/components/sections/VideoShowcase'
import AIPanel from '@/components/ui/AIPanel'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Sparkles, 
  Zap, 
  Bot, 
  Database, 
  CheckCircle,
  ArrowRight,
  Workflow,
  ShoppingCart,
  Code2,
  Cpu,
  BrainCircuit,
  Clock,
  BarChart3
} from 'lucide-react'

export default function Home() {
  const [showAIPanel, setShowAIPanel] = useState(false)
  const { language, t } = useLanguage()

  // CSS-in-JS Styles
  const styles = {
    section: {
      padding: '80px 0',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    sectionBg: {
      background: 'linear-gradient(180deg, #0A2E1F 0%, #0F3D2A 50%, #0A2E1F 100%)',
    },
    sectionAlt: {
      background: 'linear-gradient(180deg, #0F3D2A 0%, #0A2E1F 50%, #0F3D2A 100%)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
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
      color: 'rgba(255, 255, 255, 0.8)',
      maxWidth: '600px',
      margin: '0 auto',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
    },
    featureCard: {
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid rgba(184, 233, 45, 0.2)',
      borderRadius: '16px',
      padding: '32px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    featureIcon: {
      width: '60px',
      height: '60px',
      background: 'rgba(184, 233, 45, 0.1)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '28px',
      marginBottom: '20px',
    },
    featureTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#fff',
      marginBottom: '12px',
    },
    featureDescription: {
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: '1.6',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    },
    serviceCard: {
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(184, 233, 45, 0.2)',
      borderRadius: '16px',
      padding: '32px',
      position: 'relative' as const,
      transition: 'all 0.3s ease',
    },
    serviceIcon: {
      color: '#B8E92D',
      marginBottom: '16px',
    },
    serviceTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#fff',
      marginBottom: '12px',
    },
    serviceFeatures: {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0',
    },
    serviceFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '8px',
      color: 'rgba(255, 255, 255, 0.8)',
    },
    servicePrice: {
      marginTop: '20px',
      paddingTop: '20px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    priceAmount: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#B8E92D',
    },
    priceLabel: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.6)',
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 24px',
      background: '#B8E92D',
      color: '#0A2E1F',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '20px',
      width: '100%',
      justifyContent: 'center',
    },
    dashboardSection: {
      background: 'linear-gradient(135deg, rgba(184, 233, 45, 0.05) 0%, transparent 100%)',
      padding: '60px',
      borderRadius: '20px',
      marginTop: '40px',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '24px',
      marginTop: '40px',
    },
    statCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      padding: '24px',
      borderRadius: '12px',
      textAlign: 'center' as const,
    },
    statValue: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#B8E92D',
      marginBottom: '8px',
    },
    statLabel: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.7)',
    },
    testimonialCard: {
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid rgba(184, 233, 45, 0.1)',
      borderRadius: '16px',
      padding: '32px',
      marginBottom: '24px',
    },
    testimonialText: {
      fontSize: '18px',
      color: 'rgba(255, 255, 255, 0.9)',
      fontStyle: 'italic',
      marginBottom: '24px',
      lineHeight: '1.6',
    },
    testimonialAuthor: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    authorAvatar: {
      width: '48px',
      height: '48px',
      background: 'rgba(184, 233, 45, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#B8E92D',
      fontWeight: 'bold',
    },
    authorName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#fff',
    },
    authorCompany: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.6)',
    },
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSection onOpenAIPanel={() => setShowAIPanel(true)} />

      {/* Video Showcase Section - Solo si existe */}
      {typeof VideoShowcase !== 'undefined' && <VideoShowcase />}

      {/* Features Section */}
      <section style={{ ...styles.section, ...styles.sectionBg }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <motion.h2 
              style={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t.features.title}
            </motion.h2>
            <motion.p 
              style={styles.sectionSubtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t.features.subtitle}
            </motion.p>
          </div>
          
          <div style={styles.featuresGrid}>
            {t.features.items.map((item, index) => (
              <motion.div
                key={index}
                style={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(184, 233, 45, 0.2)'
                }}
              >
                <div style={styles.featureIcon}>{item.icon}</div>
                <h3 style={styles.featureTitle}>{item.title}</h3>
                <p style={styles.featureDescription}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ ...styles.section, ...styles.sectionAlt }} id="services">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <motion.h2 
              style={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t.services.title}
            </motion.h2>
          </div>
          
          <div style={styles.servicesGrid}>
            {/* n8n Automation Service */}
            <motion.div
              style={styles.serviceCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(184, 233, 45, 0.2)'
              }}
            >
              <Zap size={32} style={styles.serviceIcon} />
              <h3 style={styles.serviceTitle}>
                {language === 'es' ? 'Automatización n8n' : 'n8n Automation'}
              </h3>
              <p style={styles.featureDescription}>
                {language === 'es' 
                  ? 'Automatiza flujos de trabajo complejos y conecta todas tus herramientas'
                  : 'Automate complex workflows and connect all your tools'
                }
              </p>
              <ul style={styles.serviceFeatures}>
                <li style={styles.serviceFeature}>
                  <CheckCircle size={16} color="#B8E92D" />
                  <span>{language === 'es' ? 'Configuración inicial' : 'Initial setup'}</span>
                </li>
                <li style={styles.serviceFeature}>
                  <CheckCircle size={16} color="#B8E92D" />
                  <span>{language === 'es' ? '5 flujos de trabajo' : '5 workflows'}</span>
                </li>
                <li style={styles.serviceFeature}>
                  <CheckCircle size={16} color="#B8E92D" />
                  <span>{language === 'es' ? 'Soporte 30 días' : '30-day support'}</span>
                </li>
              </ul>

              <Link 
                href="/contact"
                style={{...styles.button, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(184, 233, 45, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span>{language === 'es' ? 'Comenzar' : 'Get Started'}</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Software Development Service */}
            <motion.div
              style={styles.serviceCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ 
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(184, 233, 45, 0.2)'
              }}
            >
              <Code2 size={32} style={styles.serviceIcon} />
              <h3 style={styles.serviceTitle}>
                {language === 'es' ? 'Desarrollo de Software' : 'Software Development'}
              </h3>
              <p style={styles.featureDescription}>
                {language === 'es' 
                  ? 'Soluciones personalizadas con las últimas tecnologías'
                  : 'Custom solutions with cutting-edge technologies'
                }
              </p>
              <ul style={styles.serviceFeatures}>
                <li style={styles.serviceFeature}>
                  <CheckCircle size={16} color="#B8E92D" />
                  <span>{language === 'es' ? 'Análisis completo' : 'Complete analysis'}</span>
                </li>
                <li style={styles.serviceFeature}>
                  <CheckCircle size={16} color="#B8E92D" />
                  <span>{language === 'es' ? 'Desarrollo ágil' : 'Agile development'}</span>
                </li>
                <li style={styles.serviceFeature}>
                  <CheckCircle size={16} color="#B8E92D" />
                  <span>Testing & QA</span>
                </li>
              </ul>

              <Link 
                href="/contact"
                style={{...styles.button, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(184, 233, 45, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span>{language === 'es' ? 'Estoy interesado' : 'I\'m interested'}</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* E-commerce Service */}
            <motion.div
              style={styles.serviceCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(184, 233, 45, 0.2)'
              }}
            >
              <ShoppingCart size={32} style={styles.serviceIcon} />
              <h3 style={styles.serviceTitle}>
                {language === 'es' ? 'Tiendas Online' : 'Online Stores'}
              </h3>
              <p style={styles.featureDescription}>
                {language === 'es' 
                  ? 'E-commerce completo con pagos integrados'
                  : 'Complete e-commerce with integrated payments'
                }
              </p>
              <ul style={styles.serviceFeatures}>
                <li style={styles.serviceFeature}>
                  <CheckCircle size={16} color="#B8E92D" />
                  <span>{language === 'es' ? 'Catálogo completo' : 'Full catalog'}</span>
                </li>
                <li style={styles.serviceFeature}>
                  <CheckCircle size={16} color="#B8E92D" />
                  <span>{language === 'es' ? 'Carrito y checkout' : 'Cart & checkout'}</span>
                </li>
                <li style={styles.serviceFeature}>
                  <CheckCircle size={16} color="#B8E92D" />
                  <span>Stripe/PayPal</span>
                </li>
              </ul>

              <Link 
                href="/contact"
                style={{...styles.button, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(184, 233, 45, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span>{language === 'es' ? 'Empezar' : 'Start Now'}</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section style={{ ...styles.section, ...styles.sectionBg }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <motion.h2 
              style={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t.dashboard.title}
            </motion.h2>
            <motion.p 
              style={styles.sectionSubtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t.dashboard.description}
            </motion.p>
          </div>
          
          <motion.div 
            style={styles.dashboardSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#B8E92D' }}>
              {t.dashboard.stats.title}
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '32px' }}>
              {t.dashboard.stats.period}
            </p>
            
            <div style={styles.statsGrid}>
              {t.dashboard.stats.items.map((stat, index) => (
                <motion.div 
                  key={index}
                  style={styles.statCard}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div style={styles.statValue}>{stat.value}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <Link 
              href="/contact" 
              style={{
                ...styles.button,
                width: 'auto',
                margin: '40px auto 0',
                display: 'inline-flex',
              }}
            >
              {t.dashboard.cta}
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ ...styles.section, ...styles.sectionAlt }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <motion.h2 
              style={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t.testimonials.title}
            </motion.h2>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {t.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                style={styles.testimonialCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p style={styles.testimonialText}>"{testimonial.quote}"</p>
                <div style={styles.testimonialAuthor}>
                  <div style={styles.authorAvatar}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div style={styles.authorName}>{testimonial.author}</div>
                    <div style={styles.authorCompany}>{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {typeof CTAFooter !== 'undefined' && <CTAFooter onOpenAIPanel={() => setShowAIPanel(true)} />}

      {/* AI Panel */}
      <AIPanel isOpen={showAIPanel} onClose={() => setShowAIPanel(false)} />
    </>
  )
}