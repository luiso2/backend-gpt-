'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code2, Cpu, Store, Zap, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'software',
    icon: Code2,
    title: 'Desarrollo de Software',
    description: 'Soluciones personalizadas que se adaptan perfectamente a las necesidades de tu negocio',
    features: [
      'Aplicaciones empresariales',
      'Sistemas de gestión',
      'APIs y microservicios',
      'Integración de sistemas'
    ],
    color: 'blue',
    href: '/contact?service=software'
  },
  {
    id: 'web',
    icon: Cpu,
    title: 'Aplicaciones Web',
    description: 'Aplicaciones web modernas, rápidas y responsivas con las últimas tecnologías',
    features: [
      'Progressive Web Apps',
      'Dashboards interactivos',
      'Plataformas SaaS',
      'Portales web'
    ],
    color: 'purple',
    href: '/contact?service=web'
  },
  {
    id: 'ecommerce',
    icon: Store,
    title: 'Tiendas Online',
    description: 'E-commerce de alto rendimiento que convierten visitantes en clientes',
    features: [
      'Tiendas Shopify/WooCommerce',
      'Marketplaces personalizados',
      'Integración de pagos',
      'Gestión de inventario'
    ],
    color: 'green',
    href: '/contact?service=ecommerce'
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automatizaciones n8n',
    description: 'Automatiza tareas repetitivas y conecta todas tus herramientas de trabajo',
    features: [
      'Flujos de trabajo automatizados',
      'Integración de APIs',
      'Procesamiento de datos',
      'Notificaciones inteligentes'
    ],
    color: 'orange',
    href: '/automations'
  }
]

const ServicesSection = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="section-subtitle">
            Soluciones tecnológicas integrales para impulsar tu negocio al siguiente nivel
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className={`service-card service-card-${service.color}`}>
                <motion.div
                  className="service-card-inner"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="service-icon">
                    <service.icon />
                  </div>
                  
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <ul className="service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle className="feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="service-action">
                    <span>Conocer más</span>
                    <ArrowRight className="action-icon" />
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
          transition={{ delay: 0.4 }}
          className="services-cta"
        >
          <h3>¿No encuentras lo que buscas?</h3>
          <p>Contáctanos para discutir una solución personalizada para tu proyecto</p>
          <Link href="/contact" className="btn btn-primary">
            Consultar Proyecto
            <ArrowRight className="btn-icon" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection