'use client';

import { motion } from 'framer-motion';
import { diagnosticStyles as styles } from '@/app/growth-diagnostic/styles';

interface AnalysisScreenProps {
  isLoading: boolean;
}

export default function AnalysisScreen({ isLoading }: AnalysisScreenProps) {
  return (
    <motion.div 
      style={styles.centerWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        style={styles.analysisContainer}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Loading animation */}
        <div style={styles.loadingSpinner}>
          <motion.div
            style={{
              ...styles.spinnerRing,
              width: '128px',
              height: '128px',
              borderColor: '#B8E92D',
              inset: 0,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            style={{
              ...styles.spinnerRing,
              width: '96px',
              height: '96px',
              borderColor: 'rgba(184, 233, 45, 0.6)',
              inset: '16px',
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            style={{
              ...styles.spinnerRing,
              width: '64px',
              height: '64px',
              borderColor: 'rgba(184, 233, 45, 0.4)',
              inset: '32px',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <motion.h2
          style={styles.analysisTitle}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {isLoading ? 'Analizando con IA...' : 'Analizando tu negocio...'}
        </motion.h2>
        
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            style={styles.analysisStep}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            ✓ Evaluando tu situación actual
          </motion.p>
          <motion.p
            style={styles.analysisStep}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            ✓ Calculando oportunidades perdidas
          </motion.p>
          <motion.p
            style={styles.analysisStep}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
          >
            ✓ Generando estrategia personalizada
          </motion.p>
        </motion.div>
        
        {/* Data processing animation */}
        <motion.div
          style={{
            marginTop: '32px',
            display: 'flex',
            justifyContent: 'center',
            gap: '8px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                width: '8px',
                height: '32px',
                background: '#B8E92D',
                borderRadius: '4px'
              }}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}