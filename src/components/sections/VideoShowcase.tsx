'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function VideoShowcase() {
  const { language } = useLanguage()

  return (
    <section className="video-showcase">
      {/* Background Effects */}
      <div className="video-bg-gradient"></div>
      <div className="video-pattern"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="video-header"
        >
          <h2 className="video-title">
            {language === 'es' 
              ? 'Descubre Cómo Transformamos Negocios'
              : 'Discover How We Transform Businesses'
            }
          </h2>
          <p className="video-subtitle">
            {language === 'es'
              ? 'Mira cómo nuestras soluciones de automatización y desarrollo impulsan el éxito empresarial'
              : 'See how our automation and development solutions drive business success'
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="video-container"
        >
          <div className="video-wrapper">
            <video
              className="showcase-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/video/promo.MP4" type="video/mp4" />
              {language === 'es' 
                ? 'Tu navegador no soporta el elemento de video.'
                : 'Your browser does not support the video element.'
              }
            </video>


            {/* Decorative Frame */}
            <div className="video-frame video-frame-tl"></div>
            <div className="video-frame video-frame-tr"></div>
            <div className="video-frame video-frame-bl"></div>
            <div className="video-frame video-frame-br"></div>
          </div>

          {/* Video Stats */}
          <motion.div 
            className="video-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">
                {language === 'es' ? 'Proyectos Completados' : 'Projects Completed'}
              </span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">
                {language === 'es' ? 'Clientes Satisfechos' : 'Satisfied Clients'}
              </span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">
                {language === 'es' ? 'Soporte Continuo' : 'Continuous Support'}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .video-showcase {
          position: relative;
          padding: 100px 0;
          background: var(--fintech-bg-primary);
          overflow: hidden;
        }

        /* Background Effects */
        .video-bg-gradient {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at 30% 50%,
            rgba(34, 197, 94, 0.1) 0%,
            transparent 50%
          );
          animation: rotate-gradient 20s linear infinite;
        }

        .video-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255, 255, 255, 0.01) 35px,
              rgba(255, 255, 255, 0.01) 70px
            );
        }

        @keyframes rotate-gradient {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Header */
        .video-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        .video-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 30px;
          color: #22c55e;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .video-title {
          font-size: 48px;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .video-subtitle {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Video Container */
        .video-container {
          position: relative;
          z-index: 1;
          max-width: 1000px;
          margin: 0 auto;
        }

        .video-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #000;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 100px rgba(34, 197, 94, 0.1);
        }

        .showcase-video {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 24px;
        }


        /* Decorative Frame */
        .video-frame {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 3px solid #22c55e;
          pointer-events: none;
        }

        .video-frame-tl {
          top: -10px;
          left: -10px;
          border-right: none;
          border-bottom: none;
          border-top-left-radius: 16px;
        }

        .video-frame-tr {
          top: -10px;
          right: -10px;
          border-left: none;
          border-bottom: none;
          border-top-right-radius: 16px;
        }

        .video-frame-bl {
          bottom: -10px;
          left: -10px;
          border-right: none;
          border-top: none;
          border-bottom-left-radius: 16px;
        }

        .video-frame-br {
          bottom: -10px;
          right: -10px;
          border-left: none;
          border-top: none;
          border-bottom-right-radius: 16px;
        }

        /* Video Stats */
        .video-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
          margin-top: 48px;
          padding: 32px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 36px;
          font-weight: 700;
          color: #22c55e;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .video-showcase {
            padding: 60px 0;
          }

          .video-title {
            font-size: 32px;
          }

          .video-subtitle {
            font-size: 16px;
          }


          .video-stats {
            flex-wrap: wrap;
            gap: 30px;
          }

          .stat-divider {
            display: none;
          }

          .video-frame {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .video-stats {
            padding: 24px;
          }

          .stat-number {
            font-size: 28px;
          }

          .stat-label {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  )
}
