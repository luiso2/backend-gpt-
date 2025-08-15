'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Mail, Phone, Send, CheckCircle, MessageSquare, Globe, Zap, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import '../contact-enhanced-fixed.css'

const createContactSchema = (t: any) => z.object({
  name: z.string().min(2, t.contactPage.form.name.error),
  email: z.string().email(t.contactPage.form.email.error),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, t.contactPage.form.service.error),
  message: z.string().min(10, t.contactPage.form.message.error),
})

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { t, language } = useLanguage()
  const contactSchema = createContactSchema(t)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form data:', data)
    setIsSubmitting(false)
    setSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <section className="contact-hero-enhanced">
        {/* Background Effects */}
        <div className="contact-bg-pattern" />
        <div className="contact-orb contact-orb-1" />
        <div className="contact-orb contact-orb-2" />
        <div className="contact-orb contact-orb-3" />
        
        {/* Floating Elements */}
        <div className="floating-element floating-element-1">⚡</div>
        <div className="floating-element floating-element-2">🚀</div>
        <div className="floating-element floating-element-3">💡</div>
        
        {/* Particle System */}
        <div className="contact-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="contact-hero-content"
          >
            <motion.div
              className="contact-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="badge-icon">✨</span>
              {t.contactPage.badge}
            </motion.div>
            
            <motion.h1
              className="contact-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t.contactPage.title} <span className="highlight">{t.contactPage.titleHighlight}</span>
            </motion.h1>
            
            <motion.p
              className="contact-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t.contactPage.subtitle}
            </motion.p>
            
            <motion.div
              className="contact-trust-indicators"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="trust-item">
                <span className="trust-icon">⚡</span>
                <span className="trust-text">
                  {t.contactPage.trustIndicators.response} <strong>{t.contactPage.trustIndicators.hours}</strong>
                </span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">🏆</span>
                <span className="trust-text">
                  <strong>500+</strong> {t.contactPage.trustIndicators.projects}
                </span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">🌎</span>
                <span className="trust-text">
                  {t.contactPage.trustIndicators.clients} <strong>{t.contactPage.trustIndicators.countries}</strong>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-main-enhanced">
        <div className="container">
          <div className="contact-grid-enhanced">
            {/* Contact Form */}
            <motion.div
              className="contact-form-enhanced"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="success-message"
                  >
                    <CheckCircle className="success-icon" />
                    <h3>{t.common.success}</h3>
                    <p>{t.contactPage.form.success}</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="form-enhanced"
                  >
                    <h2 className="form-title">
                      {t.contactPage.form.title}
                    </h2>
                    
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="name">{t.contactPage.form.name.label}</label>
                        <input
                          {...register('name')}
                          type="text"
                          id="name"
                          placeholder={t.contactPage.form.name.placeholder}
                          className={errors.name ? 'error' : ''}
                        />
                        {errors.name && (
                          <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="error-message"
                          >
                            {errors.name.message}
                          </motion.span>
                        )}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email">{t.contactPage.form.email.label}</label>
                        <input
                          {...register('email')}
                          type="email"
                          id="email"
                          placeholder={t.contactPage.form.email.placeholder}
                          className={errors.email ? 'error' : ''}
                        />
                        {errors.email && (
                          <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="error-message"
                          >
                            {errors.email.message}
                          </motion.span>
                        )}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="phone">{t.contactPage.form.phone.label}</label>
                        <input
                          {...register('phone')}
                          type="tel"
                          id="phone"
                          placeholder={t.contactPage.form.phone.placeholder}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="company">{t.contactPage.form.company.label}</label>
                        <input
                          {...register('company')}
                          type="text"
                          id="company"
                          placeholder={t.contactPage.form.company.placeholder}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="service">{t.contactPage.form.service.label}</label>
                      <select
                        {...register('service')}
                        id="service"
                        className={errors.service ? 'error' : ''}
                      >
                        <option value="">{t.contactPage.form.service.placeholder}</option>
                        {t.contactPage.form.service.options.map((option: string) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <motion.span
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="error-message"
                        >
                          {errors.service.message}
                        </motion.span>
                      )}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">{t.contactPage.form.message.label}</label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={6}
                        placeholder={t.contactPage.form.message.placeholder}
                        className={errors.message ? 'error' : ''}
                      />
                      {errors.message && (
                        <motion.span
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="error-message"
                        >
                          {errors.message.message}
                        </motion.span>
                      )}
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="loading-spinner"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span className="button-text">{t.contactPage.form.submitting}</span>
                        </>
                      ) : (
                        <>
                          <span className="button-text">{t.contactPage.form.submit}</span>
                          <div className="button-icon-wrapper">
                            <Send className="btn-icon" />
                          </div>
                          <div className="button-shine"></div>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              className="contact-info-enhanced"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2>{t.contactPage.contactInfo.title}</h2>
              
              <div className="info-cards">
                <motion.div
                  className="info-card"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="info-icon">
                    <Mail />
                  </div>
                  <div className="info-content">
                    <h3>{t.contactPage.contactInfo.labels.email}</h3>
                    <p>{t.contactPage.contactInfo.email}</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="info-card"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="info-icon">
                    <Phone />
                  </div>
                  <div className="info-content">
                    <h3>{t.contactPage.contactInfo.labels.phone}</h3>
                    <p>{t.contactPage.contactInfo.phone}</p>
                  </div>
                </motion.div>
                

              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}