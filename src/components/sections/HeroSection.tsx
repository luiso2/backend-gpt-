'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Cpu, 
  Bot, 
  Database, 
  GitBranch, 
  Shield, 
  TrendingUp,
  Zap,
  Brain,
  Network,
  Cloud,
  Server,
  Lock,
  BarChart3,
  Workflow,
  Package,
  Play,
  Star,
  Users,
  Award,
  Rocket,
  Globe,
  CheckCircle
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface HeroSectionProps {
  onOpenAIPanel?: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAIPanel }) => {
  const controls = useAnimation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  const { language } = useLanguage()

  // Translations
  const content = {
    es: {
      badge: "🚀 Líder en Automatización IA",
      title: "Revoluciona tu Negocio con",
      highlight: "Inteligencia Artificial Avanzada",
      subtitle: "La plataforma de automatización empresarial más potente del mercado",
      description: "Transformamos tu empresa con soluciones de IA de última generación que optimizan procesos, reducen costos hasta un 70% y multiplican tu productividad por 5x.",
      cta: "Comenzar Transformación",
      ctaSecondary: "Ver Demo en Vivo",
      socialProof: {
        text: "Más de 2,500 empresas confían en nosotros",
        rating: "4.9/5",
        reviews: "1,200+ reseñas"
      },
      benefits: [
        "✅ Soporte 24/7 en español",
        "✅ Integración con 500+ herramientas"
      ],
      features: [
        {
          icon: <Brain className="w-6 h-6" />,
          title: "IA Generativa",
          description: "Modelos GPT personalizados para tu industria"
        },
        {
          icon: <Workflow className="w-6 h-6" />,
          title: "Automatización Total",
          description: "Flujos de trabajo inteligentes sin código"
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Seguridad Avanzada",
          description: "Certificación SOC2 y cumplimiento GDPR"
        },
        {
          icon: <Rocket className="w-6 h-6" />,
          title: "Escalabilidad Infinita",
          description: "Infraestructura cloud que crece contigo"
        }
      ],
      stats: [
        { value: "2,500+", label: "Empresas Activas", icon: <Users className="w-5 h-5" /> },
        { value: "99.99%", label: "Tiempo de Actividad", icon: <Shield className="w-5 h-5" /> },
        { value: "5x", label: "Aumento Productividad", icon: <TrendingUp className="w-5 h-5" /> },
        { value: "48h", label: "Tiempo Implementación", icon: <Zap className="w-5 h-5" /> }
      ]
    },
    en: {
      badge: "🚀 AI Automation Leader",
      title: "Revolutionize Your Business with",
      highlight: "Advanced Artificial Intelligence",
      subtitle: "The most powerful enterprise automation platform on the market",
      description: "Transform your company with cutting-edge AI solutions that optimize processes, reduce costs by up to 70%, and multiply your productivity by 5x.",
      cta: "Start Transformation",
      ctaSecondary: "Watch Live Demo",
      socialProof: {
        text: "Over 2,500 companies trust us",
        rating: "4.9/5",
        reviews: "1,200+ reviews"
      },
      benefits: [
        "✅ 24/7 expert support",
        "✅ Integration with 500+ tools"
      ],
      features: [
        {
          icon: <Brain className="w-6 h-6" />,
          title: "Generative AI",
          description: "Custom GPT models for your industry"
        },
        {
          icon: <Workflow className="w-6 h-6" />,
          title: "Total Automation",
          description: "No-code intelligent workflows"
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Advanced Security",
          description: "SOC2 certification and GDPR compliance"
        },
        {
          icon: <Rocket className="w-6 h-6" />,
          title: "Infinite Scalability",
          description: "Cloud infrastructure that grows with you"
        }
      ],
      stats: [
        { value: "2,500+", label: "Active Companies", icon: <Users className="w-5 h-5" /> },
        { value: "99.99%", label: "Uptime", icon: <Shield className="w-5 h-5" /> },
        { value: "5x", label: "Productivity Increase", icon: <TrendingUp className="w-5 h-5" /> },
        { value: "48h", label: "Implementation Time", icon: <Zap className="w-5 h-5" /> }
      ]
    }
  }

  const t = content[language as keyof typeof content]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const floatingIcons = [
    { Icon: Code2, delay: 0, x: -200, y: -100 },
    { Icon: Database, delay: 0.2, x: 150, y: -150 },
    { Icon: Cpu, delay: 0.4, x: -180, y: 80 },
    { Icon: GitBranch, delay: 0.6, x: 200, y: 100 },
    { Icon: Cloud, delay: 0.8, x: -100, y: -180 },
    { Icon: Server, delay: 1, x: 180, y: -50 },
    { Icon: Lock, delay: 1.2, x: -150, y: 150 },
    { Icon: Package, delay: 1.4, x: 100, y: 180 }
  ]

  return (
    <section 
      ref={containerRef}
      className="hero-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Grid */}
      <div className="hero-background-grid">
        <div className="hero-grid-pattern" style={{
          backgroundImage: `linear-gradient(90deg, rgba(184, 233, 45, 0.1) 1px, transparent 1px),
                           linear-gradient(180deg, rgba(184, 233, 45, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
        }} />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="hero-gradient-orb hero-gradient-orb-primary"
        animate={{
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      <motion.div
        className="hero-gradient-orb hero-gradient-orb-secondary"
        animate={{
          x: mousePosition.x * -50,
          y: mousePosition.y * -50,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="hero-floating-icon hidden lg:block"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(${x}px, ${y}px)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.3, 
            scale: 1
          }}
          transition={{
            opacity: { delay, duration: 0.5 },
            scale: { delay, duration: 0.5 }
          }}
        >
          <div className="hero-floating-icon-inner">
            <Icon />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="hero-content">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4" />
            {t.badge}
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t.title}
            <span className="hero-title-highlight">
              {t.highlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {t.description}
          </motion.p>

          {/* Benefits List */}
          <motion.div 
            className="hero-benefits"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {t.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="hero-benefit-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {benefit}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="hero-cta-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              onClick={onOpenAIPanel}
              className="hero-cta-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hero-cta-primary-content">
                <Rocket className="w-5 h-5" />
                {t.cta}
                <ArrowRight className="w-5 h-5 transition-transform" />
              </span>
              <div className="hero-cta-primary-gradient" />
            </motion.button>
            

          </motion.div>

          {/* Social Proof */}
          <motion.div 
            className="hero-social-proof"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="hero-social-proof-content">
              <div className="hero-social-proof-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
                <span className="hero-social-proof-rating">{t.socialProof.rating}</span>
              </div>
              <p className="hero-social-proof-text">{t.socialProof.text}</p>
              <span className="hero-social-proof-reviews">{t.socialProof.reviews}</span>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="hero-features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                className="hero-feature-card"
                whileHover={{ scale: 1.05, y: -8 }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
              >
                
                
                <div className="hero-feature-content">
                  <div className="hero-feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="hero-feature-title">{feature.title}</h3>
                  <p className="hero-feature-description">{feature.description}</p>
                </div>
                
                {/* Enhanced Glow effect */}
                {activeFeature === index && (
                  <motion.div 
                    className="hero-feature-glow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  />
                )}
                
                {/* Hover particles */}
                {activeFeature === index && (
                  <div className="hero-feature-particles">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="hero-feature-particle"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: Math.random() * 100 - 50,
                          y: Math.random() * 100 - 50
                        }}
                        transition={{ 
                          duration: 2,
                          delay: i * 0.1,
                          repeat: Infinity
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            {t.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="hero-stat"
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 1.5 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="hero-stat-background" />
                
                <div className="hero-stat-icon">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                
                <motion.div 
                  className="hero-stat-value"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                
                <motion.div 
                  className="hero-stat-label"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>
                
                {/* Pulse effect */}
                <motion.div
                  className="hero-stat-pulse"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 1.5 }}
      >
        <div className="hero-scroll-indicator-box">
          <motion.div
            className="hero-scroll-indicator-dot"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection