'use client';

import { motion } from 'framer-motion';
import { diagnosticStyles as styles } from '@/app/growth-diagnostic/styles';

interface QuestionStepProps {
  question: {
    id: string;
    title: string;
    options: Array<{
      value: string;
      label: string;
      icon: string;
    }>;
  };
  onAnswer: (value: string) => void;
  stepNumber: number;
  totalSteps: number;
}

export default function QuestionStep({ 
  question, 
  onAnswer, 
  stepNumber, 
  totalSteps 
}: QuestionStepProps) {
  return (
    <motion.div 
      style={styles.centerWrapper}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        style={styles.questionContainer}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <p style={styles.questionProgress}>Pregunta {stepNumber} de {totalSteps}</p>
        <h2 style={styles.questionTitle}>
          {question.title}
        </h2>
      </motion.div>
      
      <motion.div 
        style={styles.optionsGrid}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {question.options.map((option, index) => (
          <motion.button
            key={option.value}
            style={styles.optionButton}
            onClick={() => onAnswer(option.value)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div style={styles.optionContent}>
              <span style={styles.optionIcon}>{option.icon}</span>
              <div style={{flex: 1}}>
                <p style={styles.optionLabel}>
                  {option.label}
                </p>
              </div>
            </div>
            
            {/* Hover effect indicator */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(184, 233, 45, 0.1) 0%, rgba(127, 216, 88, 0.1) 100%)',
                opacity: 0
              }}
              whileHover={{ opacity: 1 }}
              initial={false}
              transition={{ duration: 0.3 }}
            />
            
            {/* Arrow indicator */}
            <motion.svg
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '24px',
                height: '24px',
                color: '#ffffff',
                opacity: 0
              }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        ))}
      </motion.div>
      
      {/* Skip option */}
      <motion.button
        style={styles.skipButton}
        onClick={() => onAnswer('skipped')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ color: '#ffffff' }}
      >
        Prefiero no responder →
      </motion.button>
    </motion.div>
  );
}