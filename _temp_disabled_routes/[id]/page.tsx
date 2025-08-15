'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import { ShoppingCart, CheckCircle, Zap, ArrowLeft, Clock, Users, Star } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import Footer from '@/components/layout/Footer'

// Generar parámetros estáticos para exportación
export async function generateStaticParams() {
  // Retornar todos los IDs de automatizaciones disponibles
  return [
    { id: 'auto-invoice' },
    // Agrega más IDs según las automatizaciones que tengas
  ]
}

// In a real app, this would come from a database
const automationsData: Record<string, any> = {
  'auto-invoice': {
    id: 'auto-invoice',
    name: 'Facturación Automática',
    description: 'Sistema completo de generación y envío automatizado de facturas que se integra con tus sistemas de pago existentes.',
    longDescription: `
      Transforma tu proceso de facturación con nuestra solución automatizada que elimina el trabajo manual y reduce errores. 
      Esta automatización se conecta directamente con tus sistemas de pago y genera facturas profesionales de forma instantánea.
      
      Perfecta para empresas que buscan optimizar su flujo de caja y mejorar la experiencia del cliente con facturas 
      enviadas inmediatamente después de cada transacción.
    `,
    price: 299,
    features: [
      'Integración con Stripe, PayPal, y otros procesadores de pago',
      'Plantillas de factura personalizables con tu branding',
      'Envío automático por email con confirmación de lectura',
      'Generación de reportes mensuales y trimestrales',
      'Almacenamiento seguro en la nube',
      'Cumplimiento con normativas fiscales',
      'API para integración con sistemas ERP',
      'Multi-idioma y multi-moneda'
    ],
    workflow: [
      'Detección de pago completado en tu sistema',
      'Extracción automática de datos del cliente y transacción',
      'Generación de factura con numeración secuencial',
      'Aplicación de impuestos según ubicación',
      'Envío por email al cliente',
      'Almacenamiento en carpeta organizada',
      'Actualización de registros contables'
    ],
    requirements: [
      'Cuenta en n8n (self-hosted o cloud)',
      'Acceso API a tu sistema de pagos',
      'Cuenta de email para envíos (Gmail, SendGrid, etc.)',
      'Almacenamiento cloud (Google Drive, Dropbox, etc.)'
    ],
    testimonials: [
      {
        name: 'Ana Martínez',
        company: 'TechStore Online',
        rating: 5,
        comment: 'Redujo nuestro tiempo de facturación en un 90%. Ya no tenemos retrasos ni errores.'
      },
      {
        name: 'Roberto Silva',
        company: 'Consulting Pro',
        rating: 5,
        comment: 'La mejor inversión para nuestro departamento contable. Altamente recomendado.'
      }
    ],
    setupTime: '2-3 horas',
    support: '3 meses incluidos',
    updates: 'Actualizaciones gratuitas por 1 año'
  },
  // Add more automations data as needed
}

export default function AutomationDetailPage() {
  const params = useParams()
  const { addItem } = useCart()
  const automation = automationsData[params.id as string]

  if (!automation) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem({
      id: automation.id,
      name: automation.name,
      price: automation.price,
      description: automation.description
    })
  }

  return (
    <>
      <section className="automation-detail">
        <div className="container">
          <Link href="/automations" className="back-link">
            <ArrowLeft />
            Volver a Automatizaciones
          </Link>

          <div className="automation-detail-content">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="automation-info"
            >
              <div className="automation-header">
                <h1 className="automation-title">{automation.name}</h1>
                <div className="automation-meta">
                  <div className="meta-item">
                    <Clock />
                    <span>Setup: {automation.setupTime}</span>
                  </div>
                  <div className="meta-item">
                    <Users />
                    <span>+100 usuarios activos</span>
                  </div>
                  <div className="meta-item">
                    <Star />
                    <span>4.9/5 rating</span>
                  </div>
                </div>
              </div>

              <div className="automation-description">
                <p className="lead">{automation.description}</p>
                <div className="long-description">
                  {automation.longDescription.split('\n').map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
                </div>
              </div>

              <div className="automation-sections">
                <section className="detail-section">
                  <h2>Características Principales</h2>
                  <ul className="features-list">
                    {automation.features.map((feature: string) => (
                      <li key={feature}>
                        <CheckCircle className="feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="detail-section">
                  <h2>Cómo Funciona</h2>
                  <ol className="workflow-list">
                    {automation.workflow.map((step: string, index: number) => (
                      <li key={step}>
                        <span className="step-number">{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="detail-section">
                  <h2>Requisitos Técnicos</h2>
                  <ul className="requirements-list">
                    {automation.requirements.map((req: string) => (
                      <li key={req}>
                        <Zap className="req-icon" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="detail-section">
                  <h2>Testimonios</h2>
                  <div className="testimonials">
                    {automation.testimonials.map((testimonial: any) => (
                      <div key={testimonial.name} className="testimonial-card">
                        <div className="testimonial-rating">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="star-filled" />
                          ))}
                        </div>
                        <p className="testimonial-comment">"{testimonial.comment}"</p>
                        <div className="testimonial-author">
                          <strong>{testimonial.name}</strong>
                          <span>{testimonial.company}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="automation-sidebar"
            >
              <div className="purchase-card">
                <div className="price-display">
                  <span className="currency">$</span>
                  <span className="amount">{automation.price}</span>
                  <span className="period">único pago</span>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary btn-lg btn-block"
                >
                  <ShoppingCart className="btn-icon-left" />
                  Agregar al Carrito
                </button>

                <Link href="/checkout" className="btn btn-secondary btn-lg btn-block">
                  Comprar Ahora
                </Link>

                <div className="purchase-includes">
                  <h3>Incluye:</h3>
                  <ul>
                    <li>
                      <CheckCircle />
                      <span>Implementación completa</span>
                    </li>
                    <li>
                      <CheckCircle />
                      <span>{automation.support}</span>
                    </li>
                    <li>
                      <CheckCircle />
                      <span>{automation.updates}</span>
                    </li>
                    <li>
                      <CheckCircle />
                      <span>Documentación detallada</span>
                    </li>
                    <li>
                      <CheckCircle />
                      <span>Video tutoriales</span>
                    </li>
                  </ul>
                </div>

                <div className="guarantee">
                  <h4>Garantía de Satisfacción</h4>
                  <p>30 días de garantía de devolución si no estás completamente satisfecho</p>
                </div>
              </div>

              <div className="need-help">
                <h3>¿Necesitas ayuda?</h3>
                <p>Nuestro equipo está listo para responder tus preguntas</p>
                <Link href="/contact" className="btn btn-outline btn-sm">
                  Contactar Soporte
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}