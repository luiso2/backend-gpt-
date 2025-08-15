'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface AIPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIPanel: React.FC<AIPanelProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [selectedMode, setSelectedMode] = useState<'build' | 'automate' | 'analyze'>('build');
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // CSS-in-JS Styles
  const styles = {
    overlay: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    },
    panel: {
      position: 'relative' as const,
      width: '95vw',
      maxWidth: '1200px',
      height: '95vh',
      maxHeight: '900px',
      backgroundColor: '#0A2E1F',
      borderRadius: '20px',
      border: '1px solid rgba(184, 233, 45, 0.2)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column' as const,
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
    },
    header: {
      padding: '30px',
      borderBottom: '1px solid rgba(184, 233, 45, 0.1)',
      background: 'linear-gradient(180deg, rgba(184, 233, 45, 0.1) 0%, rgba(10, 46, 31, 0) 100%)',
    },
    headerTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#B8E92D',
      margin: 0,
    },
    closeButton: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      color: '#fff',
    },
    modes: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap' as const,
    },
    modeButton: {
      padding: '10px 20px',
      borderRadius: '10px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(184, 233, 45, 0.3)',
      backgroundColor: 'transparent',
      color: '#fff',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    modeButtonActive: {
      backgroundColor: 'rgba(184, 233, 45, 0.2)',
      borderColor: '#B8E92D',
      color: '#B8E92D',
    },
    content: {
      flex: 1,
      padding: '30px',
      overflowY: 'auto' as const,
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '20px',
    },
    messagesContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '15px',
      overflowY: 'auto' as const,
      padding: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      minHeight: '300px',
    },
    message: {
      padding: '15px',
      borderRadius: '10px',
      maxWidth: '80%',
      wordWrap: 'break-word' as const,
    },
    userMessage: {
      alignSelf: 'flex-end',
      backgroundColor: 'rgba(184, 233, 45, 0.2)',
      border: '1px solid rgba(184, 233, 45, 0.3)',
      color: '#fff',
    },
    assistantMessage: {
      alignSelf: 'flex-start',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#fff',
    },
    messageContent: {
      fontSize: '15px',
      lineHeight: '1.6',
      whiteSpace: 'pre-wrap' as const,
    },
    messageTimestamp: {
      fontSize: '12px',
      color: 'rgba(255, 255, 255, 0.5)',
      marginTop: '8px',
    },
    promptSection: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '15px',
    },
    promptLabel: {
      fontSize: '18px',
      fontWeight: '500',
      color: '#fff',
    },
    promptTextarea: {
      width: '100%',
      minHeight: '100px',
      padding: '15px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(184, 233, 45, 0.3)',
      borderRadius: '10px',
      color: '#fff',
      fontSize: '16px',
      resize: 'vertical' as const,
      outline: 'none',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
    },
    suggestionsSection: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '15px',
    },
    suggestionsTitle: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'rgba(255, 255, 255, 0.7)',
    },
    suggestionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '10px',
    },
    suggestionCard: {
      padding: '15px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(184, 233, 45, 0.2)',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    suggestionText: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.8)',
      margin: 0,
    },
    footer: {
      padding: '20px 30px',
      borderTop: '1px solid rgba(184, 233, 45, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',
      flexWrap: 'wrap' as const,
    },
    submitButton: {
      padding: '12px 30px',
      backgroundColor: '#B8E92D',
      color: '#0A2E1F',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    submitButtonDisabled: {
      backgroundColor: 'rgba(184, 233, 45, 0.3)',
      cursor: 'not-allowed',
    },
    footerInfo: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.6)',
    },
    loadingIndicator: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '15px',
      backgroundColor: 'rgba(184, 233, 45, 0.1)',
      borderRadius: '10px',
      color: '#B8E92D',
    },
    loadingDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#B8E92D',
      animation: 'pulse 1.5s ease-in-out infinite',
    },
    errorMessage: {
      padding: '15px',
      backgroundColor: 'rgba(255, 59, 48, 0.1)',
      border: '1px solid rgba(255, 59, 48, 0.3)',
      borderRadius: '10px',
      color: '#ff3b30',
      fontSize: '14px',
    },
    clearButton: {
      padding: '8px 16px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: '#fff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  };

  const modes = [
    {
      id: 'build' as const,
      name: language === 'es' ? '🛠️ Construir' : '🛠️ Build',
      icon: '🛠️',
      description: language === 'es' 
        ? 'Describe tu proyecto y te ayudaré a planificar la arquitectura y tecnologías'
        : 'Describe your project and I\'ll help you plan the architecture and technologies',
    },
    {
      id: 'automate' as const,
      name: language === 'es' ? '⚡ Automatizar' : '⚡ Automate',
      icon: '⚡',
      description: language === 'es'
        ? 'Cuéntame sobre tus procesos y diseñaré flujos de automatización eficientes'
        : 'Tell me about your processes and I\'ll design efficient automation workflows',
    },
    {
      id: 'analyze' as const,
      name: language === 'es' ? '📊 Analizar' : '📊 Analyze',
      icon: '📊',
      description: language === 'es'
        ? 'Comparte tus desafíos empresariales y te daré recomendaciones estratégicas'
        : 'Share your business challenges and I\'ll provide strategic recommendations',
    },
  ];

  const suggestions = {
    build: language === 'es' ? [
      'Crear una tienda online con pagos integrados y gestión de inventario',
      'Desarrollar un dashboard en tiempo real para análisis de datos',
      'Construir una app móvil para gestión de clientes',
      'Diseñar un sistema de reservas con calendario integrado',
    ] : [
      'Create an e-commerce website with payment integration and inventory management',
      'Build a real-time dashboard for business analytics',
      'Develop a mobile app for customer management',
      'Design a booking system with integrated calendar',
    ],
    automate: language === 'es' ? [
      'Automatizar la generación y envío de facturas por email',
      'Configurar publicación automática en redes sociales',
      'Crear flujo de trabajo para gestión de leads desde múltiples fuentes',
      'Automatizar reportes mensuales con datos de ventas',
    ] : [
      'Automate invoice generation and email delivery',
      'Set up automatic social media posting across platforms',
      'Create workflow for lead management from multiple sources',
      'Build automated monthly sales reporting system',
    ],
    analyze: language === 'es' ? [
      'Analizar el rendimiento de mi sitio web y métricas SEO',
      'Revisar procesos empresariales para identificar oportunidades de automatización',
      'Evaluar la eficiencia de mi stack tecnológico actual',
      'Calcular el ROI de implementar automatización en mi empresa',
    ] : [
      'Analyze website performance and SEO metrics',
      'Review business processes for automation opportunities',
      'Evaluate current tech stack efficiency',
      'Calculate ROI for implementing automation in my business',
    ],
  };

  const handleSubmit = async () => {
    if (!prompt.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: prompt,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setPrompt('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          mode: selectedMode,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();

      if (data.success && data.response) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.response,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error(data.error || 'Unexpected response format');
      }
    } catch (err) {
      console.error('Error calling OpenAI:', err);
      setError(
        language === 'es' 
          ? 'Error al obtener respuesta. Por favor, intenta de nuevo.'
          : 'Error getting response. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
  };

  const handleClearChat = () => {
    setMessages([]);
    setError(null);
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString(language === 'es' ? 'es-ES' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Add loading animation styles
  if (typeof document !== 'undefined' && !document.getElementById('ai-panel-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'ai-panel-styles';
    styleSheet.textContent = `
      @keyframes pulse {
        0%, 80%, 100% {
          opacity: 0.3;
        }
        40% {
          opacity: 1;
        }
      }
      
      .loading-dot:nth-child(1) {
        animation-delay: 0s;
      }
      
      .loading-dot:nth-child(2) {
        animation-delay: 0.2s;
      }
      
      .loading-dot:nth-child(3) {
        animation-delay: 0.4s;
      }
    `;
    document.head.appendChild(styleSheet);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={styles.overlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={styles.panel}
          >
            {/* Header */}
            <div style={styles.header}>
              <div style={styles.headerTop}>
                <h2 style={styles.title}>
                  {language === 'es' ? 'Asistente IA de MERKTOP' : 'MERKTOP AI Assistant'}
                </h2>
                <button
                  style={styles.closeButton}
                  onClick={onClose}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(184, 233, 45, 0.2)';
                    e.currentTarget.style.color = '#B8E92D';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  ✕
                </button>
              </div>
              
              <div style={styles.modes}>
                {modes.map((mode) => (
                  <button
                    key={mode.id}
                    style={{
                      ...styles.modeButton,
                      ...(selectedMode === mode.id ? styles.modeButtonActive : {}),
                    }}
                    onClick={() => setSelectedMode(mode.id)}
                    onMouseEnter={(e) => {
                      if (selectedMode !== mode.id) {
                        e.currentTarget.style.backgroundColor = 'rgba(184, 233, 45, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedMode !== mode.id) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <span>{mode.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div style={styles.content}>
              {/* Messages Container */}
              {messages.length > 0 && (
                <div style={styles.messagesContainer}>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        ...styles.message,
                        ...(message.role === 'user' ? styles.userMessage : styles.assistantMessage),
                      }}
                    >
                      <div style={styles.messageContent}>{message.content}</div>
                      <div style={styles.messageTimestamp}>
                        {formatTimestamp(message.timestamp)}
                      </div>
                    </motion.div>
                  ))}
                  
                  {isLoading && (
                    <div style={styles.loadingIndicator}>
                      <span>{language === 'es' ? 'Pensando' : 'Thinking'}</span>
                      <div className="loading-dot" style={styles.loadingDot}></div>
                      <div className="loading-dot" style={styles.loadingDot}></div>
                      <div className="loading-dot" style={styles.loadingDot}></div>
                    </div>
                  )}
                  
                  {error && (
                    <div style={styles.errorMessage}>
                      {error}
                    </div>
                  )}
                </div>
              )}

              {/* Prompt Section */}
              <div style={styles.promptSection}>
                <label style={styles.promptLabel}>
                  {modes.find(m => m.id === selectedMode)?.description}
                </label>
                <textarea
                  style={styles.promptTextarea}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={
                    language === 'es' 
                      ? 'Escribe tu consulta aquí...'
                      : 'Type your query here...'
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.ctrlKey) {
                      handleSubmit();
                    }
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#B8E92D';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(184, 233, 45, 0.3)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                  disabled={isLoading}
                />
              </div>

              {/* Suggestions Section */}
              {messages.length === 0 && (
                <div style={styles.suggestionsSection}>
                  <h3 style={styles.suggestionsTitle}>
                    {language === 'es' ? 'Sugerencias de consulta:' : 'Query suggestions:'}
                  </h3>
                  <div style={styles.suggestionsGrid}>
                    {suggestions[selectedMode].map((suggestion, index) => (
                      <div
                        key={index}
                        style={styles.suggestionCard}
                        onClick={() => handleSuggestionClick(suggestion)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(184, 233, 45, 0.1)';
                          e.currentTarget.style.borderColor = '#B8E92D';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.borderColor = 'rgba(184, 233, 45, 0.2)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <p style={styles.suggestionText}>{suggestion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={styles.footer}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={styles.footerInfo}>
                  {language === 'es' ? 'Powered by OpenAI GPT-3.5' : 'Powered by OpenAI GPT-3.5'}
                </span>
                {messages.length > 0 && (
                  <button
                    style={styles.clearButton}
                    onClick={handleClearChat}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    {language === 'es' ? 'Limpiar chat' : 'Clear chat'}
                  </button>
                )}
              </div>
              <button
                style={{
                  ...styles.submitButton,
                  ...((!prompt.trim() || isLoading) ? styles.submitButtonDisabled : {}),
                }}
                onClick={handleSubmit}
                disabled={!prompt.trim() || isLoading}
                onMouseEnter={(e) => {
                  if (prompt.trim() && !isLoading) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(184, 233, 45, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span>{isLoading ? '...' : (language === 'es' ? 'Enviar' : 'Send')}</span>
                <span>→</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIPanel;
