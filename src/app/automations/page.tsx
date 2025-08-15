'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  Bot, 
  Zap, 
  Workflow, 
  Timer, 
  Shield, 
  BarChart, 
  ChevronRight, 
  Check,
  Sparkles,
  GitBranch,
  Activity,
  Cpu,
  Database,
  Cloud,
  MessageSquare,
  Mail,
  Calendar,
  TrendingUp,
  Users,
  FileText,
  ArrowRight
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'
import '../automations-page.css'

interface AutomationWorkflow {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  category: string
  savings: string
  integrations: string[]
}

export default function AutomationsPage() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredWorkflow, setHoveredWorkflow] = useState<string | null>(null)

  const workflowIcons = {
    'sales-automation': <TrendingUp />,
    'invoice-processing': <FileText />,
    'customer-support': <MessageSquare />,
    'data-sync': <Database />,
    'marketing-automation': <Mail />,
    'hr-onboarding': <Users />
  }

  const workflows: AutomationWorkflow[] = t.automationsPage.workflows.map((workflow) => ({
    ...workflow,
    icon: workflowIcons[workflow.id as keyof typeof workflowIcons] || <Zap />,
    integrations: ['CRM', 'Email', 'Calendar', 'Slack'] // Default integrations
  }))

  const categories = [
    { id: 'all', name: t.automationsPage.categories.all, icon: <Zap /> },
    { id: 'sales', name: t.automationsPage.categories.sales, icon: <TrendingUp /> },
    { id: 'finance', name: t.automationsPage.categories.finance, icon: <FileText /> },
    { id: 'support', name: t.automationsPage.categories.support, icon: <MessageSquare /> },
    { id: 'data', name: t.automationsPage.categories.data, icon: <Database /> },
    { id: 'marketing', name: t.automationsPage.categories.marketing, icon: <Mail /> },
    { id: 'hr', name: t.automationsPage.categories.hr, icon: <Users /> }
  ]

  const filteredWorkflows = selectedCategory === 'all' 
    ? workflows 
    : workflows.filter(w => w.category === selectedCategory)

  return (
    <>
      <section className="automations-hero-enhanced">
        {/* Background Effects */}
        <div className="automations-bg-pattern" />
        <div className="automations-orb automations-orb-1" />
        <div className="automations-orb automations-orb-2" />
        <div className="automations-orb automations-orb-3" />
        
        {/* Floating Elements */}
        <div className="floating-element floating-element-1">⚡</div>
        <div className="floating-element floating-element-2">🤖</div>
        <div className="floating-element floating-element-3">🔄</div>
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="automations-hero-content"
          >
            <motion.div
              className="automations-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="badge-icon" />
              {language === 'es' ? 'Automatización Inteligente con n8n' : 'Intelligent Automation with n8n'}
            </motion.div>
            
            <motion.h1
              className="automations-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t.automationsPage.title}
            </motion.h1>
            
            <motion.p
              className="automations-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t.automationsPage.subtitle}
            </motion.p>
            
            <motion.div
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact" className="btn-hero-primary">
                {t.common.getStarted}
                <ArrowRight className="btn-icon" />
              </Link>
              <Link href="#workflows" className="btn-hero-secondary">
                <Activity className="btn-icon" />
                {language === 'es' ? 'Ver Workflows' : 'View Workflows'}
              </Link>
            </motion.div>
            
            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="stat-item">
                <span className="stat-value">500+</span>
                <span className="stat-label">{language === 'es' ? 'Flujos Creados' : 'Flows Created'}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">15K</span>
                <span className="stat-label">{language === 'es' ? 'Horas Ahorradas' : 'Hours Saved'}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">98%</span>
                <span className="stat-label">{language === 'es' ? 'Satisfacción' : 'Satisfaction'}</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Automation Visual */}
          <motion.div
            className="hero-automation-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="automation-mockup-enhanced floating">
              <div className="workflow-header">
                <GitBranch className="workflow-icon" />
                <span>{language === 'es' ? 'Workflow Activo' : 'Active Workflow'}</span>
                <div className="status-indicator active" />
              </div>
              
              <div className="workflow-nodes">
                <motion.div
                  className="workflow-node trigger"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Mail className="node-icon" />
                  <span>{language === 'es' ? 'Email Recibido' : 'Email Received'}</span>
                </motion.div>
                
                <div className="workflow-connection" />
                
                <motion.div
                  className="workflow-node process"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Cpu className="node-icon" />
                  <span>{language === 'es' ? 'Procesar IA' : 'AI Processing'}</span>
                </motion.div>
                
                <div className="workflow-connection" />
                
                <motion.div
                  className="workflow-node action"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Database className="node-icon" />
                  <span>{language === 'es' ? 'Guardar CRM' : 'Save to CRM'}</span>
                </motion.div>
              </div>
              
              <div className="workflow-stats">
                <div className="stat">
                  <Timer className="stat-icon" />
                  <span>{language === 'es' ? '2.3s tiempo promedio' : '2.3s avg time'}</span>
                </div>
                <div className="stat">
                  <BarChart className="stat-icon" />
                  <span>{language === 'es' ? '1,250 ejecuciones hoy' : '1,250 runs today'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="automations-benefits">
        <div className="container">
          <motion.div 
            className="benefits-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="benefit-card">
              <Bot className="benefit-icon" />
              <h3>{language === 'es' ? 'Sin Código' : 'No Code'}</h3>
              <p>{language === 'es' 
                ? 'Crea automatizaciones complejas sin escribir una línea de código' 
                : 'Create complex automations without writing a single line of code'}</p>
            </div>
            <div className="benefit-card">
              <Workflow className="benefit-icon" />
              <h3>{language === 'es' ? '400+ Integraciones' : '400+ Integrations'}</h3>
              <p>{language === 'es' 
                ? 'Conecta todas tus aplicaciones favoritas en un solo lugar' 
                : 'Connect all your favorite applications in one place'}</p>
            </div>
            <div className="benefit-card">
              <Timer className="benefit-icon" />
              <h3>{language === 'es' ? 'Ahorro de Tiempo' : 'Time Savings'}</h3>
              <p>{language === 'es' 
                ? 'Reduce hasta 80% el tiempo en tareas repetitivas' 
                : 'Reduce up to 80% of time on repetitive tasks'}</p>
            </div>
            <div className="benefit-card">
              <Shield className="benefit-icon" />
              <h3>{language === 'es' ? 'Seguro y Confiable' : 'Secure & Reliable'}</h3>
              <p>{language === 'es' 
                ? 'Tus datos están protegidos con encriptación de nivel empresarial' 
                : 'Your data is protected with enterprise-level encryption'}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflows Section */}
      <section id="workflows" className="automations-workflows">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              {language === 'es' ? 'Workflows Pre-construidos' : 'Pre-built Workflows'}
            </h2>
            <p className="section-subtitle">
              {language === 'es' 
                ? 'Implementa soluciones probadas y optimizadas para tu industria' 
                : 'Implement proven and optimized solutions for your industry'}
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="workflows-filter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Workflows Grid */}
          <motion.div 
            className="workflows-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {filteredWorkflows.map((workflow, index) => (
                <motion.div
                  key={workflow.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: index * 0.1 }}
                  className="workflow-card"
                  onMouseEnter={() => setHoveredWorkflow(workflow.id)}
                  onMouseLeave={() => setHoveredWorkflow(null)}
                >
                  <div className="workflow-icon">
                    {workflow.icon}
                  </div>
                  
                  <h3 className="workflow-name">{workflow.name}</h3>
                  <p className="workflow-description">{workflow.description}</p>
                  
                  <div className="workflow-savings">
                    <Timer className="savings-icon" />
                    <span>{language === 'es' ? 'Ahorra' : 'Save'} {workflow.savings}</span>
                  </div>
                  
                  <div className="workflow-integrations">
                    {workflow.integrations.map((integration, idx) => (
                      <span key={idx} className="integration-tag">
                        {integration}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/automations/${workflow.id}`}
                    className="workflow-cta"
                  >
                    {t.common.learnMore}
                    <ChevronRight className="cta-icon" />
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="automations-how-it-works">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              {language === 'es' ? '¿Cómo Funciona?' : 'How It Works?'}
            </h2>
            <p className="section-subtitle">
              {language === 'es' 
                ? 'Proceso simple de 3 pasos para automatizar tu negocio' 
                : 'Simple 3-step process to automate your business'}
            </p>
          </motion.div>

          <div className="steps-grid">
            <motion.div
              className="step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="step-number">1</div>
              <h3>{language === 'es' ? 'Identifica' : 'Identify'}</h3>
              <p>{language === 'es' 
                ? 'Analizamos tus procesos actuales y detectamos oportunidades de automatización' 
                : 'We analyze your current processes and detect automation opportunities'}</p>
            </motion.div>

            <motion.div
              className="step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="step-number">2</div>
              <h3>{language === 'es' ? 'Construye' : 'Build'}</h3>
              <p>{language === 'es' 
                ? 'Creamos flujos de trabajo personalizados usando n8n y tus aplicaciones' 
                : 'We create custom workflows using n8n and your applications'}</p>
            </motion.div>

            <motion.div
              className="step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="step-number">3</div>
              <h3>{language === 'es' ? 'Optimiza' : 'Optimize'}</h3>
              <p>{language === 'es' 
                ? 'Monitoreamos y mejoramos continuamente tus automatizaciones' 
                : 'We continuously monitor and improve your automations'}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="automations-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title">
              {language === 'es' 
                ? '¿Listo para Automatizar tu Negocio?' 
                : 'Ready to Automate Your Business?'}
            </h2>
            <p className="cta-subtitle">
              {language === 'es' 
                ? 'Agenda una consulta gratuita y descubre cómo podemos transformar tus operaciones' 
                : 'Schedule a free consultation and discover how we can transform your operations'}
            </p>
            <Link href="/contact" className="btn-cta-primary">
              {language === 'es' ? 'Agenda tu Consulta' : 'Schedule Your Consultation'}
              <ArrowRight className="btn-icon" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}