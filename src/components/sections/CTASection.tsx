'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="cta-card"
        >
          <div className="cta-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="cta-title"
            >
              ¿Listo para transformar tu negocio?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="cta-description"
            >
              Únete a más de 100 empresas que ya confían en nosotros para sus soluciones tecnológicas
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="cta-features"
            >
              <div className="cta-feature">
                <CheckCircle className="cta-feature-icon" />
                <span>Consultoría gratuita inicial</span>
              </div>
              <div className="cta-feature">
                <CheckCircle className="cta-feature-icon" />
                <span>Presupuesto sin compromiso</span>
              </div>
              <div className="cta-feature">
                <CheckCircle className="cta-feature-icon" />
                <span>Soporte continuo incluido</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="cta-actions"
            >
              <Link href="/contact" className="btn btn-white btn-lg">
                Comenzar Ahora
                <ArrowRight className="btn-icon" />
              </Link>
              <Link href="/partnerships" className="btn btn-outline-white btn-lg">
                Conocer Asociaciones
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="cta-decoration"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection