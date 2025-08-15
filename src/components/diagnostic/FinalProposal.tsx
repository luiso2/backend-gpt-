'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { diagnosticStyles as styles } from '@/app/growth-diagnostic/styles';

interface FinalProposalProps {
  pitch?: string;
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export default function FinalProposal({ pitch, onSubmit, isLoading }: FinalProposalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    readyToGrow: null as boolean | null
  });
  
  const [showForm, setShowForm] = useState(false);
  
  const defaultPitch = `No somos una agencia más. Somos tu socio de crecimiento.
  
  Mientras las agencias tradicionales te cobran miles de dólares sin garantías, nosotros invertimos en tu éxito. Solo ganamos si tú ganas.
  
  Con MERKTOP obtienes el stack completo: desarrollo, automatización, marketing digital y análisis de datos. Todo por una fracción del costo tradicional.`;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  return (
    <motion.div 
      style={styles.centerWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        style={styles.proposalContainer}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {/* The Pitch */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '48px' }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h2 style={styles.proposalTitle}>
            No somos una agencia. Somos tu socio de crecimiento.
          </h2>
          
          {/* Comparison Slider */}
          <motion.div
            style={styles.comparisonGrid}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            {/* Traditional Agency */}
            <div style={styles.comparisonColumn}>
              <h3 style={{ ...styles.comparisonTitle, ...styles.comparisonTitleBad }}>
                CON AGENCIA TRADICIONAL
              </h3>
              <ul style={styles.comparisonList}>
                <li style={styles.comparisonItem}>
                  <span style={{ color: '#ff6b6b' }}>✗</span>
                  <span>Pagas $3,000+/mes fijo</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={{ color: '#ff6b6b' }}>✗</span>
                  <span>Sin garantías de resultados</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={{ color: '#ff6b6b' }}>✗</span>
                  <span>Servicio limitado a una área</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={{ color: '#ff6b6b' }}>✗</span>
                  <span>Eres un cliente más</span>
                </li>
              </ul>
            </div>
            
            {/* With Mercatop */}
            <div style={styles.comparisonColumn}>
              <h3 style={{ ...styles.comparisonTitle, ...styles.comparisonTitleGood }}>
                CON MERKTOP
              </h3>
              <ul style={styles.comparisonList}>
                <li style={styles.comparisonItem}>
                  <span style={{ color: '#B8E92D' }}>✓</span>
                  <span>Inviertes $500/mes + % de resultados</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={{ color: '#B8E92D' }}>✓</span>
                  <span>Crecemos solo si tú creces</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={{ color: '#B8E92D' }}>✓</span>
                  <span>Stack completo de crecimiento</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={{ color: '#B8E92D' }}>✓</span>
                  <span>Somos socios en tu éxito</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* AI Generated Pitch */}
          {(pitch || isLoading) && (
            <motion.div
              style={{
                ...styles.diagnosisBox,
                background: 'linear-gradient(135deg, rgba(184, 233, 45, 0.2) 0%, rgba(127, 216, 88, 0.2) 100%)',
                border: '1px solid rgba(184, 233, 45, 0.3)',
                marginTop: '32px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p style={{
                color: '#ffffff',
                fontSize: '1.125rem',
                lineHeight: '1.6',
                whiteSpace: 'pre-line'
              }}>
                {isLoading ? 'Generando propuesta personalizada...' : (pitch || defaultPitch)}
              </p>
            </motion.div>
          )}
        </motion.div>
        
        {/* Call to Action */}
        {!showForm ? (
          <motion.div
            style={{ textAlign: 'center' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            <h3 style={{ 
              fontSize: '1.5rem', 
              color: '#ffffff', 
              marginBottom: '24px' 
            }}>
              ¿Estás listo para escalar tu negocio?
            </h3>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}>
              <motion.button
                style={{ 
                  ...styles.primaryButton, 
                  background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)' 
                }}
                onClick={() => {
                  setFormData({ ...formData, readyToGrow: true });
                  setShowForm(true);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                SÍ, QUIERO CRECER 🚀
              </motion.button>
              
              <motion.button
                style={{ 
                  ...styles.primaryButton, 
                  background: 'rgba(255, 255, 255, 0.1)' 
                }}
                onClick={() => {
                  setFormData({ ...formData, readyToGrow: false });
                  setShowForm(true);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                NECESITO PENSARLO
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            style={styles.form}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 style={styles.formTitle}>
              {formData.readyToGrow 
                ? 'Último paso para transformar tu negocio' 
                : 'Recibe tu diagnóstico completo'}
            </h3>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px' 
            }}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Nombre</label>
                <input
                  type="text"
                  required
                  style={styles.formInput}
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Email</label>
                <input
                  type="email"
                  required
                  style={styles.formInput}
                  placeholder="juan@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>WhatsApp</label>
                <input
                  type="tel"
                  required
                  style={styles.formInput}
                  placeholder="+52 555 123 4567"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                />
              </div>
              
              <motion.button
                type="submit"
                style={styles.submitButton}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formData.readyToGrow 
                  ? 'SOLICITAR LLAMADA DE GROWTH PARTNER' 
                  : 'DESCARGAR DIAGNÓSTICO GRATUITO'}
              </motion.button>
            </div>
            
            {formData.readyToGrow && (
              <motion.p
                style={{
                  textAlign: 'center',
                  color: '#B8E92D',
                  marginTop: '16px',
                  fontSize: '0.875rem'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ⏱️ Un Growth Partner te contactará en las próximas 24 horas
              </motion.p>
            )}
          </motion.form>
        )}
      </motion.div>
    </motion.div>
  );
}