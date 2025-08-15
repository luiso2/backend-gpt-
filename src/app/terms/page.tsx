'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Shield, FileText, Scale } from 'lucide-react'

export default function TermsPage() {
  const { language } = useLanguage()

  const sections = [
    {
      title: language === 'es' ? '1. Aceptación de Términos' : '1. Acceptance of Terms',
      content: language === 'es' 
        ? 'Al acceder y utilizar los servicios de MERCATOP, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.'
        : 'By accessing and using MERCATOP services, you agree to be bound by these terms and conditions. If you disagree with any part of these terms, you should not use our services.'
    },
    {
      title: language === 'es' ? '2. Servicios Ofrecidos' : '2. Services Offered',
      content: language === 'es'
        ? 'MERCATOP ofrece servicios de desarrollo de software, automatización de procesos e infraestructura tecnológica. Los detalles específicos de cada servicio se acordarán mediante contratos individuales.'
        : 'MERCATOP offers software development, process automation, and technological infrastructure services. Specific details of each service will be agreed upon through individual contracts.'
    },
    {
      title: language === 'es' ? '3. Responsabilidades del Cliente' : '3. Client Responsibilities',
      content: language === 'es'
        ? 'El cliente se compromete a proporcionar información precisa y completa, colaborar en el proceso de desarrollo, y cumplir con los pagos acordados según los términos del contrato.'
        : 'The client agrees to provide accurate and complete information, collaborate in the development process, and comply with agreed payments according to contract terms.'
    },
    {
      title: language === 'es' ? '4. Propiedad Intelectual' : '4. Intellectual Property',
      content: language === 'es'
        ? 'Los derechos de propiedad intelectual sobre el trabajo desarrollado se definirán específicamente en cada contrato de servicio. MERCATOP se reserva los derechos sobre sus metodologías y herramientas propietarias.'
        : 'Intellectual property rights over developed work will be specifically defined in each service contract. MERCATOP reserves rights over its proprietary methodologies and tools.'
    },
    {
      title: language === 'es' ? '5. Limitación de Responsabilidad' : '5. Limitation of Liability',
      content: language === 'es'
        ? 'MERCATOP no será responsable por daños indirectos, incidentales o consecuentes que puedan surgir del uso de nuestros servicios, excepto en casos de negligencia grave o dolo.'
        : 'MERCATOP will not be liable for indirect, incidental, or consequential damages that may arise from the use of our services, except in cases of gross negligence or willful misconduct.'
    },
    {
      title: language === 'es' ? '6. Modificaciones' : '6. Modifications',
      content: language === 'es'
        ? 'MERCATOP se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.'
        : 'MERCATOP reserves the right to modify these terms at any time. Modifications will take effect immediately after publication on our website.'
    },
    {
      title: language === 'es' ? '7. Contacto' : '7. Contact',
      content: language === 'es'
        ? 'Para preguntas sobre estos términos y condiciones, puedes contactarnos en hello@merktop.com'
        : 'For questions about these terms and conditions, you can contact us at hello@merktop.com'
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
            <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-sm border border-green-500/20">
              <Scale className="w-12 h-12 text-green-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {language === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Última actualización: Enero 2024'
              : 'Last updated: January 2024'
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
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20"
            >
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-300">
                    {language === 'es'
                      ? 'Estos términos y condiciones están sujetos a las leyes aplicables y cualquier disputa será resuelta en los tribunales competentes.'
                      : 'These terms and conditions are subject to applicable laws and any disputes will be resolved in competent courts.'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
