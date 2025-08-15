'use client';

import { motion } from 'framer-motion';
import { diagnosticStyles as styles } from '@/app/growth-diagnostic/styles';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <motion.div 
      style={styles.centerWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 style={styles.welcomeTitle}>MERKTOP</h1>
        <p style={styles.welcomeSubtitle}>Growth Partner</p>
      </motion.div>
      
      <motion.h2
        style={styles.welcomeHeading}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        ¿Tu negocio está dejando dinero sobre la mesa?
      </motion.h2>
      
      <motion.button
        style={styles.primaryButton}
        onClick={onStart}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(184, 233, 45, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(184, 233, 45, 0.3)';
        }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          delay: 0.6,
          type: "spring",
          stiffness: 260,
          damping: 20 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={{ 
            opacity: [1, 0.5, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          DESCÚBRELO EN 2 MINUTOS
        </motion.span>
        
        <motion.div
          className="absolute inset-0 rounded-full bg-white"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ 
            scale: [1, 1.5, 1.5],
            opacity: [0, 0.3, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </motion.button>
      
      <motion.div
        style={styles.statsGrid}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div style={styles.statItem}>
          <div style={styles.statValue}>240%</div>
          <div style={styles.statLabel}>Crecimiento promedio</div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statValue}>3.5x</div>
          <div style={styles.statLabel}>ROI en 6 meses</div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statValue}>48h</div>
          <div style={styles.statLabel}>Primeros resultados</div>
        </div>
      </motion.div>
      
      {/* Floating particles effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: '#B8E92D',
            borderRadius: '50%',
            opacity: 0.6,
          }}
          initial={{ 
            x: `${Math.random() * 100}%`,
            y: '100vh'
          }}
          animate={{ 
            y: '-100px',
            x: `${Math.random() * 100}%`
          }}
          transition={{ 
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
    </motion.div>
  );
}