'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { diagnosticStyles as styles } from '@/app/growth-diagnostic/styles';

interface ResultsScreenProps {
  revenueLoss: number;
  solutions: string[];
  diagnosis: string;
  onContinue: () => void;
}

export default function ResultsScreen({ 
  revenueLoss, 
  solutions, 
  diagnosis,
  onContinue 
}: ResultsScreenProps) {
  const [animatedRevenue, setAnimatedRevenue] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = revenueLoss / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= revenueLoss) {
        setAnimatedRevenue(revenueLoss);
        clearInterval(timer);
      } else {
        setAnimatedRevenue(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [revenueLoss]);
  
  return (
    <motion.div 
      style={styles.centerWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        style={styles.resultsContainer}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          style={styles.resultsPretext}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Basado en tu situación, estás perdiendo aproximadamente
        </motion.h2>
        
        <motion.div
          style={styles.revenueAmount}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        >
          ${animatedRevenue.toLocaleString()} USD
        </motion.div>
        
        <motion.p
          style={styles.revenueSubtext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          al mes en ventas potenciales
        </motion.p>
        
        {/* Diagnosis */}
        {diagnosis && (
          <motion.div
            style={styles.diagnosisBox}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p style={styles.diagnosisText}>{diagnosis}</p>
          </motion.div>
        )}
        
        {/* Interactive Dashboard */}
        <motion.div
          style={styles.dashboardGrid}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {/* Growth Chart */}
          <motion.div
            style={styles.dashboardCard}
            whileHover={{ scale: 1.05 }}
          >
            <h3 style={styles.cardTitle}>Crecimiento Potencial</h3>
            <div style={{ position: 'relative', height: '128px' }}>
              <svg style={{ width: '100%', height: '100%' }}>
                <motion.path
                  d="M 0 100 Q 50 80 100 20 T 200 10"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.8 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#B8E92D" />
                    <stop offset="100%" stopColor="#7FD858" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p style={styles.cardValue}>+240%</p>
            <p style={styles.cardSubtext}>en 6 meses</p>
          </motion.div>
          
          {/* Opportunities */}
          <motion.div
            style={styles.dashboardCard}
            whileHover={{ scale: 1.05 }}
          >
            <h3 style={styles.cardTitle}>Oportunidades Detectadas</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {(solutions.slice(0, 3) || ['Automatización', 'Marketing Digital', 'CRM']).map((solution, index) => (
                <motion.div
                  key={index}
                  style={styles.benefitItem}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2 + index * 0.1 }}
                >
                  <span style={{ color: '#B8E92D' }}>✓</span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem' }}>{solution}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* ROI Estimado */}
          <motion.div
            style={styles.dashboardCard}
            whileHover={{ scale: 1.05 }}
          >
            <h3 style={styles.cardTitle}>ROI Estimado</h3>
            <div style={{ textAlign: 'center' }}>
              <p style={{ ...styles.cardValue, color: '#B8E92D' }}>3.5x</p>
              <p style={styles.cardSubtext}>Retorno de inversión</p>
              <div style={{ marginTop: '16px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)' }}>Inversión: $500/mes</p>
                <p style={{ fontSize: '0.75rem', color: '#B8E92D' }}>Retorno: $1,750/mes</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.button
          style={{
            ...styles.primaryButton,
            fontSize: '1.125rem',
            marginTop: '16px'
          }}
          onClick={onContinue}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.5, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Cómo Recuperar Este Dinero →
        </motion.button>
      </motion.div>
    </motion.div>
  );
}