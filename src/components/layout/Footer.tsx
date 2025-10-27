'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  MapPin,
  ArrowRight
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import '@/styles/footer-override.css'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { language, t } = useLanguage()
  const pathname = usePathname()

  // Exclude footer on specific routes
  if (pathname === '/quickbook-connected') {
    return null
  }

  return (
    <>
      {/* Fix for any gap before footer */}
      <div style={{ background: '#0A2E1F', height: '1px', marginTop: '-1px' }} />
      
      <footer className="footer-modern" style={{ background: '#0A2E1F' }}>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container-footer">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand-section">
              <Link href="/" className="footer-logo-link">
                <Image 
                  src="/logo.jpg" 
                  alt="MERKTOP Logo" 
                  width={40} 
                  height={40} 
                  className="footer-logo-icon"
                />
                <span className="footer-logo-text">MERKTOP</span>
              </Link>
              <p className="footer-tagline">
                {t.footer.tagline}
              </p>
              <div className="footer-social-links">
                <a
                  href="https://www.linkedin.com/company/merktop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="social-icon" />
                </a>
                <a
                  href="https://twitter.com/merktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter"
                >
                  <Twitter className="social-icon" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div className="footer-column">
              <h4 className="footer-column-title">
                {language === 'es' ? 'Servicios' : 'Services'}
              </h4>
              <ul className="footer-links-list">
                <li>
                  <Link href="/automations" className="footer-link">
                    {language === 'es' ? 'Automatizaciones n8n' : 'n8n Automations'}
                  </Link>
                </li>
                <li>
                  <Link href="/services#software" className="footer-link">
                    {language === 'es' ? 'Desarrollo de Software' : 'Software Development'}
                  </Link>
                </li>
                <li>
                  <Link href="/services#web" className="footer-link">
                    {language === 'es' ? 'Aplicaciones Web' : 'Web Applications'}
                  </Link>
                </li>
                <li>
                  <Link href="/services#ecommerce" className="footer-link">
                    {language === 'es' ? 'Tiendas Online' : 'Online Stores'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="footer-column">
              <h4 className="footer-column-title">
                {language === 'es' ? 'Empresa' : 'Company'}
              </h4>
              <ul className="footer-links-list">
                <li>
                  <Link href="/about" className="footer-link">
                    {language === 'es' ? 'Nosotros' : 'About Us'}
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="footer-link">
                    {language === 'es' ? 'Portafolio' : 'Portfolio'}
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="footer-link">
                    {language === 'es' ? 'Asociaciones' : 'Partnerships'}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link">
                    {language === 'es' ? 'Contacto' : 'Contact'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* QuickBook Column */}
            <div className="footer-column">
              <h4 className="footer-column-title">QuickBook</h4>
              <ul className="footer-links-list">
                <li>
                  <Link href="/eula" className="footer-link">EULA</Link>
                </li>
                <li>
                  <Link href="/privacy" className="footer-link">
                    {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
                  </Link>
                </li>
                <li>
                  <Link href="/quickbook-connected" className="footer-link">
                    {language === 'es' ? 'QuickBook Conectado' : 'QuickBook Connected'}
                  </Link>
                </li>
                <li>
                  <Link href="/quickbook-disconnected" className="footer-link">
                    {language === 'es' ? 'QuickBook Desconectado' : 'QuickBook Disconnected'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* OpenAI Column */}
            <div className="footer-column">
              <h4 className="footer-column-title">{t.footer.openai.title}</h4>
              <ul className="footer-links-list">
                <li>
                  <Link href="/openai/terms" className="footer-link">
                    {t.footer.openai.termsAndConditions}
                  </Link>
                </li>
                <li>
                  <Link href="/openai/privacy" className="footer-link">
                    {t.footer.openai.privacyPolicy}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-column">
              <h4 className="footer-column-title">
                {language === 'es' ? 'Contacto' : 'Contact'}
              </h4>
              <div className="footer-contact-list">
                <a href="mailto:info@merktop.com" className="footer-contact-item">
                  <Mail className="contact-icon" />
                  <span>info@merktop.com</span>
                </a>
                <a href="tel:+18338548356" className="footer-contact-item">
                  <Phone className="contact-icon" />
                  <span>+1 (833) 854-8356</span>
                </a>
                <div className="footer-contact-item">
                  <MapPin className="contact-icon" />
                  <span>
                    {t.footer.contact.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container-footer">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              {t.footer.copyright.replace('2024', currentYear.toString())}
            </p>
            <div className="footer-legal-links">
              <Link href="/privacy" className="legal-link">
                {language === 'es' ? 'Privacidad' : 'Privacy'}
              </Link>
              <span className="legal-separator">•</span>
              <Link href="/terms" className="legal-link">
                {language === 'es' ? 'Términos' : 'Terms'}
              </Link>
              <span className="legal-separator">•</span>
              <Link href="/eula" className="legal-link">
                {language === 'es' ? 'EULA' : 'EULA'}
              </Link>
              <span className="legal-separator">•</span>
              <Link href="/cookies" className="legal-link">
                {language === 'es' ? 'Cookies' : 'Cookies'}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional style overrides to ensure no blue background */}
      <style jsx global>{`
        body {
          background-color: #0A2E1F !important;
        }
        
        main:last-child {
          margin-bottom: 0 !important;
        }
        
        /* Remove any potential blue backgrounds */
        div[style*="background"][style*="blue"],
        div[style*="background"][style*="#0a0f1b"],
        div[class*="bg-blue"] {
          background-color: #0A2E1F !important;
        }
      `}</style>

      <style jsx>{`
        .footer-modern {
          background: #0A2E1F; /* MERCATOP dark green */
          border-top: 1px solid rgba(184, 233, 45, 0.1);
          margin-top: 0;
          position: relative;
          z-index: 10;
        }

        .container-footer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }


        /* Main Footer */
        .footer-main {
          padding: 60px 0 40px;
          background: #0A2E1F;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1.2fr;
          gap: 48px;
          align-items: start;
        }

        /* Brand Section */
        .footer-brand-section {
          max-width: 360px;
        }

        .footer-logo-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 20px;
        }

        .footer-logo-icon {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: 8px;
          background: white;
          padding: 2px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
        }

        .footer-logo-text {
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #B8E92D 0%, #E6FF5C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
          line-height: 1;
          display: flex;
          align-items: center;
        }

        .footer-tagline {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin: 0 0 24px 0;
          font-size: 15px;
        }

        .footer-social-links {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 42px;
          height: 42px;
          background: rgba(26, 95, 72, 0.5);
          border: 1px solid rgba(184, 233, 45, 0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(184, 233, 45, 0.15);
          border-color: rgba(184, 233, 45, 0.3);
          color: #B8E92D;
          transform: translateY(-3px);
        }

        .social-icon {
          width: 18px;
          height: 18px;
        }

        /* Footer Columns */
        .footer-column {
          min-width: 0;
        }

        .footer-column-title {
          font-size: 16px;
          font-weight: 600;
          color: #B8E92D;
          margin: 0 0 20px 0;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 15px;
          transition: all 0.3s ease;
          display: inline-block;
          line-height: 1.6;
        }

        .footer-link:hover {
          color: #B8E92D;
          transform: translateX(4px);
        }

        /* Contact Items */
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 15px;
          transition: all 0.3s ease;
          line-height: 1.6;
        }

        .footer-contact-item:hover {
          color: #B8E92D;
          transform: translateX(4px);
        }

        .contact-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          color: #B8E92D;
        }

        /* Bottom Bar */
        .footer-bottom {
          background: #051815; /* Darker MERCATOP green */
          padding: 24px 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          margin: 0;
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .legal-link {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
          padding: 4px 8px;
        }

        .legal-link:hover {
          color: #B8E92D;
        }

        .legal-separator {
          color: rgba(255, 255, 255, 0.2);
          font-size: 12px;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 40px;
          }

          .footer-brand-section {
            max-width: 100%;
            grid-column: span 3;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .footer-brand-section {
            grid-column: span 2;
          }
        }

        @media (max-width: 640px) {
          .footer-main {
            padding: 48px 0 40px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .footer-brand-section {
            grid-column: span 1;
            margin: 0 auto;
          }

          .footer-logo-link {
            justify-content: center;
            width: 100%;
          }

          .footer-social-links {
            justify-content: center;
          }

          .footer-links-list {
            align-items: center;
          }

          .footer-contact-list {
            align-items: center;
          }

          .footer-link:hover,
          .footer-contact-item:hover {
            transform: none;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }

          .footer-bottom {
            padding: 20px 0;
          }
        }
      `}</style>
    </footer>
    </>
  )
}

export default Footer
