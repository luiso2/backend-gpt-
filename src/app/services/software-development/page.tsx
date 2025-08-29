'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  Code2, 
  Layers, 
  Smartphone, 
  Globe, 
  Database, 
  Shield,
  Rocket,
  GitBranch,
  Cpu,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Terminal,
  Palette,
  Settings,
  Users,
  BarChart3,
  Zap
} from 'lucide-react'

export default function SoftwareDevelopmentPage() {
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
      marginTop: '32px',
    },
    
    btnPrimary: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      padding: '18px 36px',
      background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
      color: '#0A2E1F',
      border: 'none',
      borderRadius: '12px',
      fontSize: '17px',
      fontWeight: '700',
      textDecoration: 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 8px 32px rgba(184, 233, 45, 0.3)',
      cursor: 'pointer',
      minWidth: 'fit-content',
      whiteSpace: 'nowrap' as const,
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
    
    // Services Section
    servicesSection: {
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
    
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
    },
    
    serviceCard: {
      background: 'rgba(255, 255, 255, 0.02)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(184, 233, 45, 0.2)',
      borderRadius: '16px',
      padding: '32px',
      transition: 'all 0.3s ease',
    },
    
    serviceIcon: {
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
    
    serviceTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#fff',
      marginBottom: '12px',
    },
    
    serviceDescription: {
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: '1.6',
    },
    
    // Technologies Section
    techSection: {
      padding: '100px 0',
      background: 'linear-gradient(135deg, #0F3D2A 0%, #0A2E1F 100%)',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    
    techCategories: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      marginTop: '60px',
    },
    
    techCategory: {
      textAlign: 'center' as const,
    },
    
    categoryTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#B8E92D',
      marginBottom: '20px',
    },
    
    techList: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '12px',
      justifyContent: 'center',
    },
    
    techBadge: {
      padding: '8px 16px',
      background: 'rgba(184, 233, 45, 0.1)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(184, 233, 45, 0.3)',
      borderRadius: '20px',
      fontSize: '14px',
      color: '#fff',
      transition: 'all 0.3s ease',
    },
    
    // Process Section
    processSection: {
      padding: '100px 0',
      background: '#0A2E1F',
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
    
    // Portfolio Section
    portfolioSection: {
      padding: '100px 0',
      background: 'linear-gradient(135deg, #0A2E1F 0%, #0F3D2A 50%, #0A2E1F 100%)',
    },
    
    portfolioGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '32px',
      marginTop: '60px',
    },
    
    portfolioCard: {
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(184, 233, 45, 0.2)',
      borderRadius: '20px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    },
    
    portfolioImage: {
      width: '100%',
      height: '200px',
      background: 'linear-gradient(135deg, rgba(184, 233, 45, 0.1) 0%, rgba(127, 216, 88, 0.05) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#B8E92D',
      fontSize: '48px',
    },
    
    portfolioContent: {
      padding: '32px',
    },
    
    portfolioTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '12px',
    },
    
    portfolioTech: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '8px',
      marginBottom: '16px',
    },
    
    portfolioDescription: {
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    
    portfolioLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color: '#B8E92D',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    
    // CTA Section
    ctaSection: {
      padding: '100px 0',
      background: '#0A2E1F',
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
  if (typeof document !== 'undefined' && !document.getElementById('software-keyframes')) {
    const styleSheet = document.createElement('style')
    styleSheet.id = 'software-keyframes'
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
      
      /* Responsive button styles */
      @media (max-width: 768px) {
        .hero-buttons {
          flex-direction: column;
          align-items: center;
          gap: 16px !important;
        }
        .btn-primary-mobile {
          padding: 16px 28px !important;
          font-size: 16px !important;
          width: 100%;
          max-width: 280px;
        }
      }
    `
    document.head.appendChild(styleSheet)
  }

  const services = [
    {
      icon: <Globe size={28} />,
      title: language === 'es' ? 'Aplicaciones Web' : 'Web Applications',
      description: language === 'es' 
        ? 'Desarrollamos aplicaciones web modernas, escalables y seguras usando las últimas tecnologías'
        : 'We develop modern, scalable and secure web applications using the latest technologies'
    },
    {
      icon: <Smartphone size={28} />,
      title: language === 'es' ? 'Aplicaciones Móviles' : 'Mobile Applications',
      description: language === 'es'
        ? 'Apps nativas y multiplataforma para iOS y Android con experiencias de usuario excepcionales'
        : 'Native and cross-platform apps for iOS and Android with exceptional user experiences'
    },
    {
      icon: <Database size={28} />,
      title: language === 'es' ? 'APIs y Backend' : 'APIs & Backend',
      description: language === 'es'
        ? 'Arquitecturas backend robustas con APIs RESTful y GraphQL para potenciar tu negocio'
        : 'Robust backend architectures with RESTful and GraphQL APIs to power your business'
    },
    {
      icon: <Layers size={28} />,
      title: language === 'es' ? 'Sistemas Empresariales' : 'Enterprise Systems',
      description: language === 'es'
        ? 'Soluciones empresariales complejas que integran múltiples sistemas y procesos'
        : 'Complex enterprise solutions that integrate multiple systems and processes'
    },
    {
      icon: <Shield size={28} />,
      title: language === 'es' ? 'Ciberseguridad' : 'Cybersecurity',
      description: language === 'es'
        ? 'Implementamos las mejores prácticas de seguridad para proteger tus datos y aplicaciones'
        : 'We implement security best practices to protect your data and applications'
    },
    {
      icon: <Rocket size={28} />,
      title: language === 'es' ? 'DevOps & Cloud' : 'DevOps & Cloud',
      description: language === 'es'
        ? 'Infraestructura en la nube, CI/CD y automatización para deployments eficientes'
        : 'Cloud infrastructure, CI/CD and automation for efficient deployments'
    }
  ]

  const technologies = {
    frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
    backend: ['Node.js', 'Python', 'Django', 'Express', 'PostgreSQL', 'MongoDB'],
    mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
    cloud: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
  }

  const processSteps = [
    {
      number: '1',
      title: language === 'es' ? 'Descubrimiento' : 'Discovery',
      description: language === 'es'
        ? 'Analizamos tus necesidades y definimos los objetivos del proyecto'
        : 'We analyze your needs and define project objectives'
    },
    {
      number: '2',
      title: language === 'es' ? 'Planificación' : 'Planning',
      description: language === 'es'
        ? 'Diseñamos la arquitectura y creamos un roadmap detallado'
        : 'We design the architecture and create a detailed roadmap'
    },
    {
      number: '3',
      title: language === 'es' ? 'Desarrollo' : 'Development',
      description: language === 'es'
        ? 'Construimos tu solución con metodologías ágiles y mejores prácticas'
        : 'We build your solution with agile methodologies and best practices'
    },
    {
      number: '4',
      title: language === 'es' ? 'Lanzamiento' : 'Launch',
      description: language === 'es'
        ? 'Desplegamos, monitoreamos y optimizamos tu aplicación'
        : 'We deploy, monitor and optimize your application'
    }
  ]

  const portfolioProjects = [
    {
      title: language === 'es' ? 'Plataforma E-commerce B2B' : 'B2B E-commerce Platform',
      description: language === 'es'
        ? 'Sistema completo de comercio electrónico con gestión de inventarios y análisis en tiempo real'
        : 'Complete e-commerce system with inventory management and real-time analytics',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
      icon: <BarChart3 size={48} />
    },
    {
      title: language === 'es' ? 'App de Telemedicina' : 'Telemedicine App',
      description: language === 'es'
        ? 'Aplicación móvil y web para consultas médicas virtuales con videollamadas integradas'
        : 'Mobile and web application for virtual medical consultations with integrated video calls',
      tech: ['React Native', 'WebRTC', 'Python', 'Docker'],
      icon: <Users size={48} />
    },
    {
      title: language === 'es' ? 'Sistema de Gestión IoT' : 'IoT Management System',
      description: language === 'es'
        ? 'Plataforma para monitoreo y control de dispositivos IoT industriales'
        : 'Platform for monitoring and controlling industrial IoT devices',
      tech: ['Vue.js', 'MQTT', 'TimescaleDB', 'Kubernetes'],
      icon: <Cpu size={48} />
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
          <Code2 size={32} />
        </div>
        <div style={{...styles.floatingIcon, top: '60%', right: '15%', animationDelay: '2s'}}>
          <Terminal size={32} />
        </div>
        <div style={{...styles.floatingIcon, bottom: '30%', left: '20%', animationDelay: '4s'}}>
          <GitBranch size={32} />
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
              <span>{language === 'es' ? 'Desarrollo de Software' : 'Software Development'}</span>
            </motion.div>
            
            <h1 style={styles.pageTitle}>
              {language === 'es' ? 'Transformamos ideas en ' : 'We transform ideas into '}
              <span style={styles.textGradient}>{language === 'es' ? 'soluciones digitales' : 'digital solutions'}</span>
            </h1>
            
            <p style={styles.pageSubtitle}>
              {language === 'es' 
                ? 'Creamos software a medida que impulsa el crecimiento de tu negocio. Desde aplicaciones web hasta soluciones empresariales complejas.'
                : 'We create custom software that drives your business growth. From web applications to complex enterprise solutions.'
              }
            </p>
            
            <motion.div 
              style={styles.heroButtons}
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link 
                  href="/contact?service=software-development"
                  style={styles.btnPrimary}
                  className="btn-primary-mobile"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(184, 233, 45, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(184, 233, 45, 0.3)';
                  }}
                  role="button"
                  aria-label={t.navigation?.startProject || (language === 'es' ? 'Iniciar Proyecto' : 'Start Project')}
                >
                  {t.navigation?.startProject || (language === 'es' ? 'Iniciar Proyecto' : 'Start Project')}
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              
              <Link 
                href="#portfolio"
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
                {language === 'es' ? 'Ver Proyectos' : 'View Projects'}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.servicesSection}>
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={styles.sectionHeader}
          >
            <h2 style={styles.sectionTitle}>
              {language === 'es' ? 'Nuestros Servicios' : 'Our Services'}
            </h2>
            <p style={styles.sectionSubtitle}>
              {language === 'es'
                ? 'Soluciones tecnológicas integrales para cada necesidad'
                : 'Comprehensive technological solutions for every need'
              }
            </p>
          </motion.div>

          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={styles.serviceCard}
                whileHover={{ 
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(184, 233, 45, 0.2)'
                }}
              >
                <div style={styles.serviceIcon}>{service.icon}</div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section style={styles.techSection}>
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={styles.sectionHeader}
          >
            <h2 style={styles.sectionTitle}>
              {language === 'es' ? 'Tecnologías que Dominamos' : 'Technologies We Master'}
            </h2>
            <p style={styles.sectionSubtitle}>
              {language === 'es'
                ? 'Trabajamos con las herramientas más modernas y confiables'
                : 'We work with the most modern and reliable tools'
              }
            </p>
          </motion.div>

          <div style={styles.techCategories}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={styles.techCategory}
            >
              <h3 style={styles.categoryTitle}>Frontend</h3>
              <div style={styles.techList}>
                {technologies.frontend.map((tech, index) => (
                  <motion.span
                    key={index}
                    style={styles.techBadge}
                    whileHover={{ 
                      background: 'rgba(184, 233, 45, 0.2)',
                      borderColor: '#B8E92D',
                      transform: 'translateY(-2px)'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={styles.techCategory}
            >
              <h3 style={styles.categoryTitle}>Backend</h3>
              <div style={styles.techList}>
                {technologies.backend.map((tech, index) => (
                  <motion.span
                    key={index}
                    style={styles.techBadge}
                    whileHover={{ 
                      background: 'rgba(184, 233, 45, 0.2)',
                      borderColor: '#B8E92D',
                      transform: 'translateY(-2px)'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={styles.techCategory}
            >
              <h3 style={styles.categoryTitle}>{language === 'es' ? 'Móvil' : 'Mobile'}</h3>
              <div style={styles.techList}>
                {technologies.mobile.map((tech, index) => (
                  <motion.span
                    key={index}
                    style={styles.techBadge}
                    whileHover={{ 
                      background: 'rgba(184, 233, 45, 0.2)',
                      borderColor: '#B8E92D',
                      transform: 'translateY(-2px)'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={styles.techCategory}
            >
              <h3 style={styles.categoryTitle}>Cloud & DevOps</h3>
              <div style={styles.techList}>
                {technologies.cloud.map((tech, index) => (
                  <motion.span
                    key={index}
                    style={styles.techBadge}
                    whileHover={{ 
                      background: 'rgba(184, 233, 45, 0.2)',
                      borderColor: '#B8E92D',
                      transform: 'translateY(-2px)'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
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
                ? 'Metodología ágil que garantiza resultados excepcionales'
                : 'Agile methodology that guarantees exceptional results'
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

      {/* Portfolio Section */}
      <section style={styles.portfolioSection} id="portfolio">
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={styles.sectionHeader}
          >
            <h2 style={styles.sectionTitle}>
              {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
            </h2>
            <p style={styles.sectionSubtitle}>
              {language === 'es'
                ? 'Algunos de los proyectos que hemos desarrollado'
                : 'Some of the projects we have developed'
              }
            </p>
          </motion.div>

          <div style={styles.portfolioGrid}>
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={styles.portfolioCard}
                whileHover={{ 
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(184, 233, 45, 0.2)'
                }}
              >
                <div style={styles.portfolioImage}>
                  {project.icon}
                </div>
                <div style={styles.portfolioContent}>
                  <h3 style={styles.portfolioTitle}>{project.title}</h3>
                  <div style={styles.portfolioTech}>
                    {project.tech.map((tech, idx) => (
                      <span key={idx} style={{...styles.techBadge, padding: '4px 12px', fontSize: '12px'}}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p style={styles.portfolioDescription}>{project.description}</p>
                  <Link 
                    href="/portfolio"
                    style={styles.portfolioLink}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {language === 'es' ? 'Ver más proyectos' : 'View more projects'}
                    <ArrowRight size={16} />
                  </Link>
                </div>
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
                ? '¿Tienes un proyecto en mente?'
                : 'Do you have a project in mind?'
              }
            </h2>
            
            <p style={styles.ctaDescription}>
              {language === 'es'
                ? 'Trabajemos juntos para convertir tu visión en realidad. Nuestro equipo está listo para ayudarte.'
                : "Let's work together to turn your vision into reality. Our team is ready to help you."
              }
            </p>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link 
                href="/contact?service=software-development"
                style={styles.btnPrimary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(184, 233, 45, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(184, 233, 45, 0.3)';
                }}
                role="button"
                aria-label={language === 'es' ? 'Conversemos sobre tu proyecto' : "Let's talk about your project"}
              >
                {language === 'es' ? 'Conversemos sobre tu proyecto' : "Let's talk about your project"}
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}