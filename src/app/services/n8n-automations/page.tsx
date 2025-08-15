'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  Zap, 
  Workflow, 
  Database, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Bot,
  MessageSquare,
  Cloud,
  Shield,
  TrendingUp,
  Sparkles,
  Code2,
  Activity,
  GitBranch,
  BarChart3
} from 'lucide-react'

export default function N8nAutomationsPage() {
  const { language, t } = useLanguage()

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
      paddingTop: '120px',
      paddingBottom: '80px',
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
      maxWidth: '700px',
      margin: '0 auto 48px',
      lineHeight: 1.6,
    },
    
    heroButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
    },
    
    btnPrimary: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '18px 36px',
      background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
      color: '#0A2E1F',
      borderRadius: '12px',
      fontSize: '17px',
      fontWeight: '700',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 32px rgba(184, 233, 45, 0.3)',
    },
    
    btnSecondary: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '18px 36px',
      background: 'rgba(255, 255, 255, 0.03)',
      color: '#fff',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      fontSize: '17px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
    },
    
    // Features Section
    featuresSection: {
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
    
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
    },
    
    featureCard: {
      background: 'rgba(255, 255, 255, 0.02)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(184, 233, 45, 0.2)',
      borderRadius: '16px',
      padding: '32px',
      transition: 'all 0.3s ease',
    },
    
    featureIcon: {
      width: '60px',
      height: '60px',
      background: 'rgba(184, 233, 45, 0.1)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      color: '#B8E92D',
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
    
    // Process Section
    processSection: {
      padding: '100px 0',
      background: 'linear-gradient(135deg, #0F3D2A 0%, #0A2E1F 100%)',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    
    processSteps: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      marginTop: '60px',
    },
    
    processStep: {
      textAlign: 'center' as const,
      position: 'relative' as const,
    },
    
    stepNumber: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#0A2E1F',
      margin: '0 auto 24px',
      boxShadow: '0 8px 24px rgba(184, 233, 45, 0.3)',
    },
    
    stepTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#fff',
      marginBottom: '12px',
    },
    
    stepDescription: {
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: '1.6',
    },
    
    // Pricing Section
    pricingSection: {
      padding: '100px 0',
      background: '#0A2E1F',
    },
    
    pricingGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '32px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    
    pricingCard: {
      background: 'rgba(255, 255, 255, 0.03)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(184, 233, 45, 0.2)',
      borderRadius: '20px',
      padding: '40px',
      textAlign: 'center' as const,
      transition: 'all 0.3s ease',
      position: 'relative' as const
    },
    
    pricingCardPopular: {
      transform: 'scale(1.05)',
      borderColor: '#B8E92D',
      boxShadow: '0 20px 40px rgba(184, 233, 45, 0.2)',
    },
    
    popularBadge: {
      position: 'absolute' as const,
      top: '-12px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
      color: '#0A2E1F',
      padding: '6px 20px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '600',
    },
    
    pricingTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '16px',
    },
    
    pricingPrice: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#B8E92D',
      marginBottom: '8px',
    },
    
    pricingPeriod: {
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.6)',
      marginBottom: '32px',
    },
    
    pricingFeatures: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 32px',
      textAlign: 'left' as const,
    },
    
    pricingFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px',
      color: 'rgba(255, 255, 255, 0.8)',
    },
    
    pricingButton: {
      width: '100%',
      padding: '16px',
      background: 'rgba(184, 233, 45, 0.1)',
      border: '2px solid rgba(184, 233, 45, 0.3)',
      borderRadius: '12px',
      color: '#B8E92D',
      fontSize: '16px',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
    },
    
    // CTA Section
    ctaSection: {
      padding: '100px 0',
      background: 'linear-gradient(135deg, #0A2E1F 0%, #0F3D2A 50%, #0A2E1F 100%)',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    
    ctaContent: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center' as const,
      position: 'relative' as const,
      zIndex: 1,
    },
    
    ctaTitle: {
      fontSize: 'clamp(32px, 4vw, 48px)',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '24px',
    },
    
    ctaDescription: {
      fontSize: '18px',
      color: 'rgba(255, 255, 255, 0.8)',
      marginBottom: '40px',
      lineHeight: 1.6,
    },
  }

  // Add keyframes
  if (typeof document !== 'undefined' && !document.getElementById('n8n-keyframes')) {
    const styleSheet = document.createElement('style')
    styleSheet.id = 'n8n-keyframes'
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
    `
    document.head.appendChild(styleSheet)
  }

  const features = [
    {
      icon: <Workflow size={28} />,
      title: language === 'es' ? 'Flujos Visuales' : 'Visual Workflows',
      description: language === 'es' 
        ? 'Diseña automatizaciones complejas con una interfaz drag-and-drop intuitiva'
        : 'Design complex automations with an intuitive drag-and-drop interface'
    },
    {
      icon: <Database size={28} />,
      title: language === 'es' ? '+200 Integraciones' : '+200 Integrations',
      description: language === 'es'
        ? 'Conecta todas tus herramientas favoritas: CRM, email, bases de datos, APIs'
        : 'Connect all your favorite tools: CRM, email, databases, APIs'
    },
    {
      icon: <Bot size={28} />,
      title: language === 'es' ? 'IA Integrada' : 'Integrated AI',
      description: language === 'es'
        ? 'Potencia tus flujos con GPT, análisis de sentimientos y procesamiento de datos'
        : 'Power your flows with GPT, sentiment analysis and data processing'
    },
    {
      icon: <Clock size={28} />,
      title: language === 'es' ? 'Ahorra 20+ horas/semana' : 'Save 20+ hours/week',
      description: language === 'es'
        ? 'Automatiza tareas repetitivas y enfócate en lo que realmente importa'
        : 'Automate repetitive tasks and focus on what really matters'
    },
    {
      icon: <Shield size={28} />,
      title: language === 'es' ? 'Seguro y Confiable' : 'Secure & Reliable',
      description: language === 'es'
        ? 'Infraestructura robusta con encriptación y monitoreo 24/7'
        : 'Robust infrastructure with encryption and 24/7 monitoring'
    },
    {
      icon: <TrendingUp size={28} />,
      title: language === 'es' ? 'Escalable' : 'Scalable',
      description: language === 'es'
        ? 'Crece sin límites, desde 10 hasta millones de ejecuciones'
        : 'Grow without limits, from 10 to millions of executions'
    }
  ]

  const processSteps = [
    {
      number: '1',
      title: language === 'es' ? 'Análisis' : 'Analysis',
      description: language === 'es'
        ? 'Estudiamos tus procesos actuales e identificamos oportunidades de automatización'
        : 'We study your current processes and identify automation opportunities'
    },
    {
      number: '2',
      title: language === 'es' ? 'Diseño' : 'Design',
      description: language === 'es'
        ? 'Creamos flujos de trabajo optimizados y personalizados para tu negocio'
        : 'We create optimized workflows customized for your business'
    },
    {
      number: '3',
      title: language === 'es' ? 'Implementación' : 'Implementation',
      description: language === 'es'
        ? 'Configuramos y desplegamos las automatizaciones en tu infraestructura'
        : 'We configure and deploy automations in your infrastructure'
    },
    {
      number: '4',
      title: language === 'es' ? 'Optimización' : 'Optimization',
      description: language === 'es'
        ? 'Monitoreamos y mejoramos continuamente el rendimiento de tus flujos'
        : 'We continuously monitor and improve your workflow performance'
    }
  ]

  const servicePlans = [
    {
      name: language === 'es' ? 'Inicio' : 'Starter',
      features: [
        language === 'es' ? 'Hasta 5 flujos de trabajo' : 'Up to 5 workflows',
        language === 'es' ? 'Configuración inicial completa' : 'Complete initial setup',
        language === 'es' ? 'Integraciones básicas' : 'Basic integrations',
        language === 'es' ? '30 días de soporte' : '30 days of support',
        language === 'es' ? 'Documentación completa' : 'Complete documentation'
      ]
    },
    {
      name: language === 'es' ? 'Profesional' : 'Professional',
      popular: true,
      features: [
        language === 'es' ? 'Hasta 15 flujos de trabajo' : 'Up to 15 workflows',
        language === 'es' ? 'Integraciones avanzadas' : 'Advanced integrations',
        language === 'es' ? 'IA y procesamiento de datos' : 'AI and data processing',
        language === 'es' ? '90 días de soporte' : '90 days of support',
        language === 'es' ? 'Capacitación del equipo' : 'Team training',
        language === 'es' ? 'Dashboard personalizado' : 'Custom dashboard'
      ]
    },
    {
      name: language === 'es' ? 'Empresarial' : 'Enterprise',
      features: [
        language === 'es' ? 'Flujos ilimitados' : 'Unlimited workflows',
        language === 'es' ? 'Integraciones personalizadas' : 'Custom integrations',
        language === 'es' ? 'Infraestructura dedicada' : 'Dedicated infrastructure',
        language === 'es' ? 'Soporte 24/7' : '24/7 support',
        language === 'es' ? 'SLA garantizado' : 'Guaranteed SLA',
        language === 'es' ? 'Consultoría continua' : 'Ongoing consulting'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.bgPattern} />
        <div style={{...styles.orb, ...styles.orb1}} />
        <div style={{...styles.orb, ...styles.orb2}} />
        
        <div style={{...styles.floatingIcon, top: '20%', left: '10%', animationDelay: '0s'}}>
          <Workflow size={32} />
        </div>
        <div style={{...styles.floatingIcon, top: '60%', right: '15%', animationDelay: '2s'}}>
          <Bot size={32} />
        </div>
        <div style={{...styles.floatingIcon, bottom: '30%', left: '20%', animationDelay: '4s'}}>
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
              <span>{language === 'es' ? 'Automatización n8n' : 'n8n Automation'}</span>
            </motion.div>
            
            <h1 style={styles.pageTitle}>
              {language === 'es' ? 'Automatiza tu negocio con ' : 'Automate your business with '}
              <span style={styles.textGradient}>n8n</span>
            </h1>
            
            <p style={styles.pageSubtitle}>
              {language === 'es' 
                ? 'La plataforma de automatización más poderosa y flexible del mercado. Conecta todas tus herramientas y crea flujos de trabajo inteligentes sin límites.'
                : 'The most powerful and flexible automation platform on the market. Connect all your tools and create intelligent workflows without limits.'
              }
            </p>
            
            <div style={styles.heroButtons}>
              <Link 
                href="/contact?service=n8n"
                style={styles.btnPrimary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(184, 233, 45, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(184, 233, 45, 0.3)';
                }}
              >
                {language === 'es' ? 'Solicitar Demo' : 'Request Demo'}
                <ArrowRight size={20} />
              </Link>
              
              <Link 
                href="#pricing"
                style={styles.btnSecondary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(184, 233, 45, 0.1)';
                  e.currentTarget.style.borderColor = '#B8E92D';
                  e.currentTarget.style.color = '#B8E92D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                {language === 'es' ? 'Ver Planes' : 'View Plans'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={styles.sectionHeader}
          >
            <h2 style={styles.sectionTitle}>
              {language === 'es' ? '¿Por qué elegir n8n?' : 'Why choose n8n?'}
            </h2>
            <p style={styles.sectionSubtitle}>
              {language === 'es'
                ? 'La herramienta definitiva para la automatización empresarial'
                : 'The ultimate tool for business automation'
              }
            </p>
          </motion.div>

          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={styles.featureCard}
                whileHover={{ 
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(184, 233, 45, 0.2)'
                }}
              >
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={styles.processSection}>
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={styles.sectionHeader}
          >
            <h2 style={styles.sectionTitle}>
              {language === 'es' ? 'Nuestro Proceso' : 'Our Process'}
            </h2>
            <p style={styles.sectionSubtitle}>
              {language === 'es'
                ? 'De la idea a la implementación en 4 simples pasos'
                : 'From idea to implementation in 4 simple steps'
              }
            </p>
          </motion.div>

          <div style={styles.processSteps}>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={styles.processStep}
              >
                <div style={styles.stepNumber}>{step.number}</div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={styles.pricingSection} id="pricing">
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={styles.sectionHeader}
          >
            <h2 style={styles.sectionTitle}>
              {language === 'es' ? 'Planes y Precios' : 'Plans & Pricing'}
            </h2>
            <p style={styles.sectionSubtitle}>
              {language === 'es'
                ? 'Soluciones flexibles para cada etapa de tu negocio'
                : 'Flexible solutions for every stage of your business'
              }
            </p>
          </motion.div>

          <div style={styles.pricingGrid}>
            {servicePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  ...styles.pricingCard,
                  ...(plan.popular ? styles.pricingCardPopular : {})
                }}
                whileHover={{ 
                  transform: plan.popular ? 'scale(1.05)' : 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(184, 233, 45, 0.2)'
                }}
              >
                {plan.popular && (
                  <div style={styles.popularBadge}>
                    {language === 'es' ? 'Más Popular' : 'Most Popular'}
                  </div>
                )}
                
                <h3 style={styles.pricingTitle}>{plan.name}</h3>
                
                <ul style={styles.pricingFeatures}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} style={styles.pricingFeature}>
                      <CheckCircle size={16} color="#B8E92D" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={`/contact?service=n8n&plan=${plan.name.toLowerCase()}`}
                  style={styles.pricingButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#B8E92D';
                    e.currentTarget.style.color = '#0A2E1F';
                    e.currentTarget.style.borderColor = '#B8E92D';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(184, 233, 45, 0.1)';
                    e.currentTarget.style.color = '#B8E92D';
                    e.currentTarget.style.borderColor = 'rgba(184, 233, 45, 0.3)';
                  }}
                >
                  {language === 'es' ? 'Más Información' : 'Learn More'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={styles.ctaContent}
          >
            <h2 style={styles.ctaTitle}>
              {language === 'es' 
                ? '¿Listo para automatizar tu negocio?'
                : 'Ready to automate your business?'
              }
            </h2>
            
            <p style={styles.ctaDescription}>
              {language === 'es'
                ? 'Únete a miles de empresas que ya están ahorrando tiempo y aumentando su productividad con n8n'
                : 'Join thousands of companies already saving time and increasing productivity with n8n'
              }
            </p>
            
            <Link 
              href="/contact?service=n8n"
              style={styles.btnPrimary}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(184, 233, 45, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(184, 233, 45, 0.3)';
              }}
            >
              {language === 'es' ? 'Agenda una Consulta Gratuita' : 'Schedule a Free Consultation'}
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}