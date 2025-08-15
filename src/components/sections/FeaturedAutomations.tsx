'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, Clock, DollarSign, ShoppingCart, ArrowRight } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

const automations = [
  {
    id: 'auto-invoice',
    name: 'Facturación Automática',
    description: 'Genera y envía facturas automáticamente cuando se completa una venta',
    features: ['Integración con sistemas de pago', 'Plantillas personalizables', 'Envío por email automático'],
    icon: DollarSign,
    color: 'green'
  },
  {
    id: 'crm-sync',
    name: 'Sincronización CRM',
    description: 'Mantén tu CRM actualizado automáticamente con datos de múltiples fuentes',
    features: ['Conexión con HubSpot, Salesforce', 'Actualización en tiempo real', 'Mapeo de campos flexible'],
    icon: Clock,
    color: 'blue'
  },
  {
    id: 'social-poster',
    name: 'Publicador Social',
    description: 'Publica contenido en múltiples redes sociales de forma automática',
    features: ['Instagram, Facebook, Twitter', 'Programación de posts', 'Análisis de rendimiento'],
    icon: Zap,
    color: 'purple'
  }
]

const FeaturedAutomations = () => {
  const { addItem } = useCart()

  const handleAddToCart = (automation: typeof automations[0]) => {
    addItem({
      id: automation.id,
      name: automation.name,
      price: automation.price,
      description: automation.description
    })
  }

  return (
    <section className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            Automatizaciones <span className="text-gradient">Destacadas</span>
          </h2>
          <p className="section-subtitle">
            Flujos de trabajo n8n listos para usar que transformarán tu productividad
          </p>
        </motion.div>

        <div className="automations-grid">
          {automations.map((automation, index) => (
            <motion.div
              key={automation.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`automation-card automation-card-${automation.color}`}
            >
              <div className="automation-header">
                <div className="automation-icon">
                  <automation.icon />
                </div>

              </div>

              <h3 className="automation-title">{automation.name}</h3>
              <p className="automation-description">{automation.description}</p>

              <ul className="automation-features">
                {automation.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="automation-actions">
                <Link 
                  href={`/automations/${automation.id}`}
                  className="btn btn-secondary btn-sm"
                >
                  Ver Detalles
                </Link>
                <button
                  onClick={() => handleAddToCart(automation)}
                  className="btn btn-primary btn-sm"
                >
                  <ShoppingCart className="btn-icon-left" />
                  Agregar
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-footer"
        >
          <Link href="/automations" className="btn btn-outline">
            Ver Todas las Automatizaciones
            <ArrowRight className="btn-icon" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedAutomations