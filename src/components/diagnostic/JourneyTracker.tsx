'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { JourneyStep } from '@/store/journeyStore';
import { diagnosticStyles as styles } from '@/app/growth-diagnostic/styles';

interface JourneyTrackerProps {
  history: JourneyStep[];
}

export default function JourneyTracker({ history }: JourneyTrackerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const formatValue = (value: any) => {
    if (typeof value === 'object') {
      return JSON.stringify(value);
    }
    return String(value);
  };
  
  const getStepLabel = (step: string) => {
    const labels: Record<string, string> = {
      started: '🚀 Iniciado',
      frustration: '😤 Frustración',
      revenue: '💰 Facturación',
      attempts: '🎯 Intentos previos',
      solution_selected: '💡 Solución elegida',
      contact_submitted: '📧 Contacto enviado'
    };
    return labels[step] || step;
  };
  
  return (
    <motion.div
      style={{
        position: 'fixed',
        right: '16px',
        top: '80px',
        zIndex: 40
      }}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.button
        style={styles.trackerButton}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#ffffff', fontSize: '0.875rem', fontWeight: '600' }}>📍 Tu recorrido</span>
          <motion.svg
            style={{ width: '16px', height: '16px', color: '#ffffff' }}
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </div>
      </motion.button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            style={styles.trackerContent}
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '384px', overflowY: 'auto' }}>
              {history.length === 0 ? (
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem' }}>Tu journey comenzará pronto...</p>
              ) : (
                history.map((item, index) => (
                  <motion.div
                    key={index}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem' }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span style={{ color: '#B8E92D', marginTop: '2px' }}>✓</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: '#ffffff', fontWeight: '500' }}>
                        {getStepLabel(item.step)}
                      </div>
                      {item.value !== true && (
                        <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem', marginTop: '4px', wordBreak: 'break-words' }}>
                          {formatValue(item.value)}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
            
            {history.length > 0 && (
              <motion.div
                style={{
                  marginTop: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem' }}>Lead Score</span>
                  <motion.span
                    style={{ color: '#B8E92D', fontWeight: 'bold' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.5 }}
                  >
                    {Math.min(history.length * 2, 10)}/10
                  </motion.span>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}