'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 'ecommerce-fashion',
    title: 'Fashion Store Pro',
    category: 'E-commerce',
    description: 'Tienda online de moda con más de 10,000 productos y sistema de recomendaciones AI',
    image: '/projects/fashion-store.jpg',
    tags: ['Next.js', 'Stripe', 'AI/ML'],
    color: 'purple'
  },
  {
    id: 'saas-analytics',
    title: 'Analytics Dashboard',
    category: 'SaaS',
    description: 'Plataforma de análisis en tiempo real para empresas con visualizaciones interactivas',
    image: '/projects/analytics.jpg',
    tags: ['React', 'D3.js', 'PostgreSQL'],
    color: 'blue'
  },
  {
    id: 'automation-workflow',
    title: 'WorkFlow Automation',
    category: 'Automatización',
    description: 'Sistema completo de automatización empresarial con más de 50 integraciones',
    image: '/projects/automation.jpg',
    tags: ['n8n', 'Node.js', 'API'],
    color: 'green'
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    category: 'Fintech',
    description: 'Aplicación bancaria móvil con autenticación biométrica y transferencias instantáneas',
    image: '/projects/banking.jpg',
    tags: ['React Native', 'Security', 'Blockchain'],
    color: 'orange'
  }
]

const PortfolioPreview = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            Proyectos <span className="text-gradient">Destacados</span>
          </h2>
          <p className="section-subtitle">
            Algunos de nuestros trabajos más recientes que demuestran nuestra experiencia
          </p>
        </motion.div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/portfolio/${project.id}`} className={`portfolio-card portfolio-card-${project.color}`}>
                <motion.div
                  className="portfolio-card-inner"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="portfolio-image">
                    <div className="portfolio-image-placeholder">
                      <motion.div
                        className="placeholder-pattern"
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
                    <div className="portfolio-overlay">
                      <ExternalLink className="overlay-icon" />
                    </div>
                  </div>

                  <div className="portfolio-content">
                    <span className="portfolio-category">{project.category}</span>
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-description">{project.description}</p>
                    
                    <div className="portfolio-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-footer"
        >
          <Link href="/portfolio" className="btn btn-primary">
            Ver Portafolio Completo
            <ArrowRight className="btn-icon" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioPreview