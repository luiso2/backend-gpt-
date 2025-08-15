'use client';

import { motion } from 'framer-motion';
import { diagnosticStyles as styles } from '@/app/growth-diagnostic/styles';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;
  
  return (
    <div style={styles.progressContainer}>
      <div style={styles.progressWrapper}>
        <div style={styles.progressInfo}>
          <span style={styles.progressText}>
            Paso {current} de {total}
          </span>
          <span style={styles.progressPercentage}>
            {Math.round(percentage)}% completado
          </span>
        </div>
        
        <div style={styles.progressBarBg}>
          <motion.div
            style={{
              ...styles.progressBarFill,
              width: 0
            }}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '80px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(184, 233, 45, 0.3) 50%, transparent 100%)',
              opacity: 0.3
            }}
            animate={{
              x: [-80, typeof window !== 'undefined' ? window.innerWidth : 800]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1
            }}
          />
        </div>
        
        {/* Step indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '16px'
        }}>
          {[...Array(total)].map((_, index) => {
            const isCompleted = index < current;
            const isCurrent = index === current - 1;
            const isPending = index >= current;
            
            return (
              <motion.div
                key={index}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  background: isCompleted ? '#B8E92D' : isCurrent ? 'rgba(184, 233, 45, 0.5)' : 'rgba(255, 255, 255, 0.2)',
                  color: isCompleted || isCurrent ? '#0A2E1F' : 'rgba(255, 255, 255, 0.6)'
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
              >
                {index < current ? '✓' : index + 1}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}