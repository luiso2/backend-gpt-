'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, Mail, ArrowRight, Download } from 'lucide-react'
import { useEffect } from 'react'
import confetti from 'canvas-confetti'

export default function CheckoutSuccessPage() {
  useEffect(() => {
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }, [])

  return (
    <section className="success-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="success-content"
        >
          <div className="success-icon">
            <CheckCircle />
          </div>

          <h1 className="success-title">¡Compra Exitosa!</h1>
          
          <p className="success-message">
            Tu pedido ha sido procesado correctamente. 
            Recibirás un email de confirmación en los próximos minutos.
          </p>

          <div className="order-number">
            <span>Número de orden:</span>
            <strong>#MERC-{Math.random().toString(36).substr(2, 9).toUpperCase()}</strong>
          </div>

          <div className="next-steps">
            <h2>Próximos Pasos</h2>
            <div className="steps-grid">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Confirmación por Email</h3>
                  <p>Recibirás los detalles de tu compra y credenciales de acceso</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Implementación</h3>
                  <p>Nuestro equipo configurará las automatizaciones en tu cuenta</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Capacitación</h3>
                  <p>Te proporcionaremos tutoriales y soporte para usar tus automatizaciones</p>
                </div>
              </div>
            </div>
          </div>

          <div className="success-actions">
            <Link href="/automations" className="btn btn-primary">
              Ver más Automatizaciones
              <ArrowRight className="btn-icon" />
            </Link>
            <Link href="/" className="btn btn-secondary">
              Volver al Inicio
            </Link>
          </div>

          <div className="contact-support">
            <p>¿Tienes preguntas? Contáctanos en</p>
            <a href="mailto:soporte@merktop.com" className="support-email">
              <Mail className="email-icon" />
              soporte@merktop.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}