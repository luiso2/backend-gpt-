'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Lock, Shield, Eye, Database, UserCheck } from 'lucide-react'

export default function PrivacyPage() {
  const { language } = useLanguage()

  const sections = [
    {
      icon: <Database className="w-5 h-5" />,
      title: language === 'es' ? '1. Información que Recopilamos' : '1. Information We Collect',
      content: language === 'es' 
        ? 'En MERCATOP, recopilamos información que nos proporcionas directamente, como tu nombre, correo electrónico, número de teléfono y detalles sobre tu proyecto cuando te pones en contacto con nosotros a través de nuestros formularios o chat.'
        : 'At MERCATOP, we collect information that you provide directly to us, such as your name, email address, phone number, and project details when you contact us through our forms or chat.'
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: language === 'es' ? '2. Cómo Utilizamos tu Información' : '2. How We Use Your Information',
      content: language === 'es'
        ? 'Utilizamos la información recopilada para: responder a tus consultas, proporcionar cotizaciones de servicios, comunicarnos contigo sobre proyectos, y mejorar nuestros servicios.'
        : 'We use the collected information to: respond to your inquiries, provide service quotes, communicate with you about projects, and improve our services.'
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: language === 'es' ? '3. Compartir Información' : '3. Information Sharing',
      content: language === 'es'
        ? 'No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento, excepto cuando sea necesario para proporcionar nuestros servicios o cuando lo requiera la ley.'
        : 'We do not sell, trade, or transfer your personal information to third parties without your consent, except when necessary to provide our services or when required by law.'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: language === 'es' ? '4. Seguridad de Datos' : '4. Data Security',
      content: language === 'es'
        ? 'Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.'
        : 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: language === 'es' ? '5. Tus Derechos' : '5. Your Rights',
      content: language === 'es'
        ? 'Tienes derecho a acceder, actualizar o eliminar tu información personal. También puedes optar por no recibir comunicaciones de marketing en cualquier momento.'
        : 'You have the right to access, update, or delete your personal information. You can also opt out of marketing communications at any time.'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Background Elements */}
      <div className="hero-pattern-grid"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-blue-500/20">
              <Lock className="w-12 h-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Tu privacidad es nuestra prioridad. Conoce cómo protegemos tu información.'
              : 'Your privacy is our priority. Learn how we protect your information.'
            }
          </p>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="pb-8 border-b border-white/10 last:border-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex-shrink-0">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                        {section.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                {language === 'es' ? 'Contacto' : 'Contact'}
              </h3>
              <p className="text-gray-300">
                {language === 'es'
                  ? 'Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en '
                  : 'If you have questions about this privacy policy, you can contact us at '
                }
                <a href="mailto:hello@merktop.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  hello@merktop.com
                </a>
              </p>
              <p className="text-sm text-gray-400 mt-4">
                {language === 'es'
                  ? 'Última actualización: Enero 2024'
                  : 'Last updated: January 2024'
                }
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
