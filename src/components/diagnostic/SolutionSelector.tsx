'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { diagnosticStyles as styles } from '@/app/growth-diagnostic/styles';

interface SolutionSelectorProps {
  solutions: string[];
  onSelect: (solution: string) => void;
}

const SOLUTION_DETAILS = {
  'Automatización de ventas': {
    icon: '🤖',
    description: 'CRM inteligente, chatbots 24/7, embudos automatizados',
    benefits: ['Respuesta inmediata a clientes', 'Ventas mientras duermes', 'Cero pérdida de leads'],
    roi: '5x en 3 meses'
  },
  'Marketing digital': {
    icon: '📱',
    description: 'Facebook Ads optimizados, Google Ads, Email marketing',
    benefits: ['Alcance x10', 'Clientes calificados', 'Métricas en tiempo real'],
    roi: '3x en 2 meses'
  },
  'Sistema CRM': {
    icon: '📊',
    description: 'Gestión completa de clientes y ventas',
    benefits: ['Historial completo', 'Seguimiento automático', 'Reportes inteligentes'],
    roi: '4x en 4 meses'
  },
  'Tienda online': {
    icon: '🛍️',
    description: 'E-commerce completo con pagos integrados',
    benefits: ['Venta 24/7', 'Alcance nacional', 'Inventario automático'],
    roi: '6x en 6 meses'
  },
  'Todo lo anterior': {
    icon: '🚀',
    description: 'Stack completo de crecimiento',
    benefits: ['Solución integral', 'Sinergia total', 'Crecimiento exponencial'],
    roi: '10x en 12 meses'
  }
};

export default function SolutionSelector({ solutions, onSelect }: SolutionSelectorProps) {
  const [hoveredSolution, setHoveredSolution] = useState<string | null>(null);
  
  // Use provided solutions or defaults
  const displaySolutions = solutions.length > 0 
    ? [...solutions, 'Todo lo anterior']
    : Object.keys(SOLUTION_DETAILS);
  
  return (
    <motion.div 
      style={styles.centerWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        style={{ textAlign: 'center', marginBottom: '48px' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          fontWeight: 'bold',
          color: '#ffffff',
          marginBottom: '16px'
        }}>
          Elige qué problema quieres resolver primero
        </h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          O déjanos implementar la solución completa
        </p>
      </motion.div>
      
      <motion.div 
        style={styles.solutionsGrid}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {displaySolutions.map((solution, index) => {
          const details = SOLUTION_DETAILS[solution] || {
            icon: '💡',
            description: solution,
            benefits: ['Mejora inmediata', 'Resultados medibles', 'Soporte completo'],
            roi: '3x promedio'
          };
          
          const isHovered = hoveredSolution === solution;
          const isSpecial = solution === 'Todo lo anterior';
          
          return (
            <motion.div
              key={solution}
              style={{
                position: 'relative',
                gridColumn: isSpecial ? '1 / -1' : 'auto'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <motion.button
                style={{
                  ...styles.solutionCard,
                  ...(isSpecial ? styles.solutionCardSpecial : {}),
                  width: '100%'
                }}
                onClick={() => onSelect(solution)}
                onMouseEnter={() => setHoveredSolution(solution)}
                onMouseLeave={() => setHoveredSolution(null)}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <span style={{ fontSize: '2rem' }}>{details.icon}</span>
                  <div style={{ flex: 1 }}>
                    <h3 style={styles.solutionTitle}>
                      {solution}
                    </h3>
                    <p style={styles.solutionDescription}>
                      {details.description}
                    </p>
                    
                    {/* Animated benefits */}
                    <motion.ul
                      style={styles.benefitsList}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isHovered ? 'auto' : 0,
                        opacity: isHovered ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {details.benefits.map((benefit, i) => (
                        <motion.li
                          key={i}
                          style={styles.benefitItem}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ 
                            x: isHovered ? 0 : -10,
                            opacity: isHovered ? 1 : 0
                          }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span style={{ color: '#B8E92D' }}>✓</span>
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    
                    {/* ROI Badge */}
                    <div style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <span style={styles.roiBadge}>
                        ROI: {details.roi}
                      </span>
                    </div>
                  </div>
                </div>
                
                {isSpecial && (
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      padding: '4px 12px',
                      background: '#B8E92D',
                      color: '#0A2E1F',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold'
                    }}
                    animate={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    RECOMENDADO
                  </motion.div>
                )}
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}