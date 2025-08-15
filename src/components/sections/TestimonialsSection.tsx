'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Juan Rodríguez',
    role: 'CEO de TechStart',
    content: 'MERKTOP revolucionó la forma en que manejamos nuestros procesos. Las automatizaciones n8n nos ahorraron cientos de horas de trabajo manual.',
    rating: 5,
    date: '15 Enero 2024',
    avatar: 'JR'
  },
  {
    id: 2,
    name: 'María González',
    role: 'Directora de Marketing',
    content: 'La tienda online que desarrollaron superó todas nuestras expectativas. El incremento en ventas fue del 300% en los primeros 3 meses.',
    rating: 5,
    date: '20 Febrero 2024',
    avatar: 'MG'
  },
  {
    id: 3,
    name: 'Carlos Méndez',
    role: 'Fundador de StartupX',
    content: 'El equipo de MERKTOP no solo entregó un producto excepcional, sino que también nos asesoró en cada paso del proceso. Verdaderos profesionales.',
    rating: 5,
    date: '5 Marzo 2024',
    avatar: 'CM'
  },
  {
    id: 4,
    name: 'Ana Martínez',
    role: 'Gerente de Operaciones',
    content: 'La aplicación web que desarrollaron transformó completamente nuestra operación. Ahora podemos gestionar todo desde un solo lugar.',
    rating: 5,
    date: '12 Marzo 2024',
    avatar: 'AM'
  },
  {
    id: 5,
    name: 'Roberto Sánchez',
    role: 'Director de IT',
    content: 'Implementaron una solución de software a medida que se integró perfectamente con nuestros sistemas existentes. Excelente trabajo técnico.',
    rating: 5,
    date: '18 Marzo 2024',
    avatar: 'RS'
  },
  {
    id: 6,
    name: 'Laura Díaz',
    role: 'CEO de E-commerce Pro',
    content: 'Gracias a MERKTOP, nuestra tienda online ahora procesa 10x más pedidos con la mitad del esfuerzo. Las automatizaciones son increíbles.',
    rating: 5,
    date: '25 Marzo 2024',
    avatar: 'LD'
  }
]

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="testimonials-header"
        >
          <h2>Lo que dicen nuestros <span className="text-gradient">clientes</span></h2>
          <p className="section-subtitle">
            Historias reales de emprendedores que encontraron el éxito conectándose con 
            nuevos clientes a través de nuestra plataforma.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="testimonial-card"
            >
              <div className="testimonial-quote-icon">
                <Quote size={24} />
              </div>
              
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.avatar}
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>

              <div className="testimonial-content">
                {testimonial.content}
              </div>

              <div className="testimonial-footer">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="testimonial-date">{testimonial.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection