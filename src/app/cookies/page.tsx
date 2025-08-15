'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Cookie, Settings, BarChart, Globe, Shield, Info } from 'lucide-react'

export default function CookiesPage() {
  const { language } = useLanguage()

  const cookieTypes = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: language === 'es' ? 'Cookies Esenciales' : 'Essential Cookies',
      description: language === 'es'
        ? 'Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar. Incluyen cookies de sesión y preferencias de idioma.'
        : 'These cookies are necessary for the basic functioning of the website and cannot be disabled. They include session cookies and language preferences.',
      always: true
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: language === 'es' ? 'Cookies de Rendimiento' : 'Performance Cookies',
      description: language === 'es'
        ? 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, proporcionándonos información sobre las páginas más visitadas y posibles errores.'
        : 'They help us understand how visitors interact with our website, providing us with information about the most visited pages and possible errors.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: language === 'es' ? 'Cookies de Funcionalidad' : 'Functionality Cookies',
      description: language === 'es'
        ? 'Permiten que el sitio web recuerde las elecciones que haces (como tu idioma preferido) y proporcionen características mejoradas y más personales.'
        : 'They allow the website to remember choices you make (such as your preferred language) and provide enhanced and more personal features.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: language === 'es' ? 'Cookies de Terceros' : 'Third-Party Cookies',
      description: language === 'es'
        ? 'Nuestro sitio web puede contener cookies de terceros, como Google Analytics, para ayudarnos a analizar el uso del sitio web.'
        : 'Our website may contain third-party cookies, such as Google Analytics, to help us analyze website usage.'
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
            <div className="p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm border border-amber-500/20">
              <Cookie className="w-12 h-12 text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              {language === 'es' ? 'Política de Cookies' : 'Cookie Policy'}
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Utilizamos cookies para mejorar tu experiencia en nuestro sitio web'
              : 'We use cookies to improve your experience on our website'
            }
          </p>
        </motion.div>

        {/* What are Cookies Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <Info className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">
                  {language === 'es' ? '¿Qué son las Cookies?' : 'What are Cookies?'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {language === 'es' 
                    ? 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia de navegación y a entender cómo utilizas nuestro sitio.'
                    : 'Cookies are small text files that are stored on your device when you visit our website. They help us improve your browsing experience and understand how you use our site.'
                  }
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cookie Types Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">
            {language === 'es' ? 'Tipos de Cookies que Utilizamos' : 'Types of Cookies We Use'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl">
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-amber-400 mb-2">
                      {type.title}
                    </h3>
                    {type.always && (
                      <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full mb-2">
                        {language === 'es' ? 'Siempre activas' : 'Always active'}
                      </span>
                    )}
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Control & Updates Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-amber-400 mb-3">
                {language === 'es' ? 'Control de Cookies' : 'Cookie Control'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {language === 'es'
                  ? 'Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en tu dispositivo y configurar la mayoría de los navegadores para evitar que se coloquen.'
                  : 'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and set most browsers to prevent them from being placed.'
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/20 p-6"
            >
              <h3 className="text-xl font-semibold text-amber-400 mb-3">
                {language === 'es' ? 'Actualizaciones' : 'Updates'}
              </h3>
              <p className="text-gray-300 mb-4">
                {language === 'es'
                  ? 'Podemos actualizar esta política de cookies ocasionalmente. Te recomendamos revisar esta página periódicamente.'
                  : 'We may update this cookie policy occasionally. We recommend reviewing this page periodically.'
                }
              </p>
              <p className="text-sm text-gray-400">
                {language === 'es' ? 'Contacto: ' : 'Contact: '}
                <a href="mailto:hello@merktop.com" className="text-amber-400 hover:text-amber-300 transition-colors">
                  hello@merktop.com
                </a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
