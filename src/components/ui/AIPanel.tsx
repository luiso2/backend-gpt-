'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  isStreaming?: boolean;
  streamedContent?: string;
}

const AIPanel: React.FC<AIPanelProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [selectedMode, setSelectedMode] = useState<'build' | 'automate' | 'analyze'>('build');
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showTypingAnimation, setShowTypingAnimation] = useState(true);
  const [typingText, setTypingText] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<'openai' | 'anthropic'>('openai');
  const [selectedModel, setSelectedModel] = useState('gpt-3.5-turbo');
  const [streamingMessageId, setStreamingMessageId] = useState<number | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const streamingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Available models for each provider
  const models = {
    openai: [
      { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', description: 'Fast and efficient' },
      { id: 'gpt-4', name: 'GPT-4', description: 'Most capable' },
      { id: 'gpt-4-turbo-preview', name: 'GPT-4 Turbo', description: 'Latest GPT-4' },
    ],
    anthropic: [
      { id: 'claude-3-haiku-20240307', name: 'Claude 3 Haiku', description: 'Fast and light' },
      { id: 'claude-3-sonnet-20240229', name: 'Claude 3 Sonnet', description: 'Balanced performance' },
      { id: 'claude-3-opus-20240229', name: 'Claude 3 Opus', description: 'Most capable' },
    ]
  };
  
  // Update selected model when provider changes
  useEffect(() => {
    if (selectedProvider === 'openai') {
      setSelectedModel('gpt-3.5-turbo');
    } else {
      setSelectedModel('claude-3-haiku-20240307');
    }
  }, [selectedProvider]);
  
  // Stream text animation
  const streamText = (fullText: string, messageIndex: number) => {
    let currentIndex = 0;
    const words = fullText.split(' ');
    let currentText = '';
    
    if (streamingIntervalRef.current) {
      clearInterval(streamingIntervalRef.current);
    }
    
    streamingIntervalRef.current = setInterval(() => {
      if (currentIndex < words.length) {
        currentText += (currentIndex === 0 ? '' : ' ') + words[currentIndex];
        
        setMessages(prev => prev.map((msg, idx) => 
          idx === messageIndex 
            ? { ...msg, streamedContent: currentText, isStreaming: true }
            : msg
        ));
        
        currentIndex++;
      } else {
        // Streaming complete
        if (streamingIntervalRef.current) {
          clearInterval(streamingIntervalRef.current);
        }
        setMessages(prev => prev.map((msg, idx) => 
          idx === messageIndex 
            ? { ...msg, streamedContent: fullText, isStreaming: false }
            : msg
        ));
        setStreamingMessageId(null);
      }
    }, 50); // Adjust speed here (50ms per word)
  };
  
  // Typewriter animation effect
  useEffect(() => {
    if (!showTypingAnimation || prompt) {
      setTypingText('');
      return;
    }
    
    const fullText = language === 'es' ? 'Escribe tu consulta aquí...' : 'Type your query here...';
    let currentIndex = 0;
    setTypingText('');
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypingText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        // Reset animation after a pause
        setTimeout(() => {
          currentIndex = 0;
          setTypingText('');
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [showTypingAnimation, language, prompt]);

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
      minHeight: '150px',
      padding: '20px',
      paddingBottom: '60px', // Space for the send button
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px) saturate(180%)',
      border: '1px solid transparent',
      borderRadius: '16px',
      color: '#fff',
      fontSize: '16px',
      lineHeight: '1.6',
      resize: 'vertical' as const,
      outline: 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      fontFamily: 'inherit',
      position: 'relative' as const,
      animation: 'neonPulse 4s ease-in-out infinite',
      boxShadow: `
        inset 0 2px 8px rgba(0, 0, 0, 0.2),
        inset 0 -2px 8px rgba(184, 233, 45, 0.03),
        0 0 1px rgba(184, 233, 45, 0.4),
        0 0 4px rgba(184, 233, 45, 0.2),
        0 0 8px rgba(184, 233, 45, 0.1),
        0 0 16px rgba(184, 233, 45, 0.05),
        0 8px 32px rgba(0, 0, 0, 0.3)
      `,
      background: `
        linear-gradient(135deg, 
          rgba(10, 46, 31, 0.6) 0%, 
          rgba(184, 233, 45, 0.02) 25%,
          rgba(255, 255, 255, 0.01) 50%,
          rgba(184, 233, 45, 0.02) 75%,
          rgba(10, 46, 31, 0.6) 100%
        ),
        radial-gradient(
          ellipse at top left,
          rgba(184, 233, 45, 0.05) 0%,
          transparent 50%
        ),
        radial-gradient(
          ellipse at bottom right,
          rgba(184, 233, 45, 0.05) 0%,
          transparent 50%
        )
      `,
      backgroundSize: '200% 200%, 100% 100%, 100% 100%',
      backgroundPosition: '0% 0%, 0% 0%, 100% 100%',
    },
    textareaContainer: {
      position: 'relative' as const,
      width: '100%',
      padding: '2px',
      background: `
        linear-gradient(45deg, 
          rgba(184, 233, 45, 0.1) 0%, 
          transparent 25%, 
          transparent 75%, 
          rgba(184, 233, 45, 0.1) 100%
        ),
        linear-gradient(-45deg, 
          rgba(184, 233, 45, 0.1) 0%, 
          transparent 25%, 
          transparent 75%, 
          rgba(184, 233, 45, 0.1) 100%
        )
      `,
      borderRadius: '18px',
      animation: 'subtleRotate 20s linear infinite',
    },
    sendButtonInside: {
      position: 'absolute' as const,
      bottom: '12px',
      right: '12px',
      padding: '10px 20px',
      backgroundColor: '#B8E92D',
      color: '#0A2E1F',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      boxShadow: '0 2px 8px rgba(184, 233, 45, 0.3)',
      zIndex: 2,
    },
    sendButtonDisabled: {
      backgroundColor: 'rgba(184, 233, 45, 0.2)',
      color: 'rgba(255, 255, 255, 0.3)',
      cursor: 'not-allowed',
      boxShadow: 'none',
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
    providerSection: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      flexWrap: 'wrap' as const,
    },
    providerToggle: {
      display: 'flex',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '10px',
      padding: '4px',
      gap: '4px',
    },
    providerButton: {
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: 'transparent',
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    providerButtonActive: {
      backgroundColor: 'rgba(184, 233, 45, 0.2)',
      color: '#B8E92D',
    },
    modelSelect: {
      padding: '8px 12px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(184, 233, 45, 0.2)',
      borderRadius: '8px',
      color: '#fff',
      fontSize: '14px',
      cursor: 'pointer',
      outline: 'none',
      transition: 'all 0.3s ease',
      minWidth: '200px',
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
    setError(null);
    setShowTypingAnimation(true);
    
    // Add thinking message immediately
    const thinkingMessage: Message = {
      role: 'assistant',
      content: '',
      timestamp: new Date(),
      isStreaming: true,
      streamedContent: '',
    };
    setMessages(prev => [...prev, thinkingMessage]);
    setIsLoading(true);

    try {
      const apiEndpoint = selectedProvider === 'openai' ? '/api/openai' : '/api/anthropic';
      
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          mode: selectedMode,
          model: selectedModel,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to get response from ${selectedProvider}`);
      }

      const data = await response.json();

      if (data.success && data.response) {
        // Update the last message (thinking indicator) with the actual response
        setMessages(prev => {
          const newMessages = [...prev];
          const lastIndex = newMessages.length - 1;
          
          // Update the thinking message to start streaming
          newMessages[lastIndex] = {
            ...newMessages[lastIndex],
            content: data.response,
            streamedContent: '',
            isStreaming: true,
          };
          
          setStreamingMessageId(lastIndex);
          
          // Start streaming animation after a short delay
          setTimeout(() => {
            streamText(data.response, lastIndex);
          }, 500);
          
          return newMessages;
        });
      } else {
        throw new Error(data.error || 'Unexpected response format');
      }
    } catch (err) {
      console.error(`Error calling ${selectedProvider}:`, err);
      setError(
        language === 'es' 
          ? `Error al obtener respuesta de ${selectedProvider}. Por favor, intenta de nuevo.`
          : `Error getting response from ${selectedProvider}. Please try again.`
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
      @keyframes pulse3D {
        0%, 100% {
          transform: scale(1) translateY(0px);
          opacity: 0.4;
        }
        50% {
          transform: scale(1.02) translateY(-2px);
          opacity: 1;
        }
      }
      
      @keyframes floatOrbit {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-1px);
        }
      }
      
      @keyframes energyFlow {
        0% {
          background-position: -200% center;
          filter: hue-rotate(0deg);
        }
        50% {
          filter: hue-rotate(20deg);
        }
        100% {
          background-position: 200% center;
          filter: hue-rotate(0deg);
        }
      }
      
      @keyframes borderGlow {
        0%, 100% {
          box-shadow: 
            inset 0 0 20px rgba(184, 233, 45, 0.1),
            0 0 20px rgba(184, 233, 45, 0.2),
            0 0 40px rgba(184, 233, 45, 0.1);
        }
        50% {
          box-shadow: 
            inset 0 0 30px rgba(184, 233, 45, 0.2),
            0 0 30px rgba(184, 233, 45, 0.3),
            0 0 60px rgba(184, 233, 45, 0.2);
        }
      }
      
      @keyframes neonPulse {
        0%, 100% {
          box-shadow: 
            inset 0 2px 8px rgba(0, 0, 0, 0.2),
            inset 0 -2px 8px rgba(184, 233, 45, 0.03),
            0 0 1px rgba(184, 233, 45, 0.4),
            0 0 4px rgba(184, 233, 45, 0.2),
            0 0 8px rgba(184, 233, 45, 0.1),
            0 0 16px rgba(184, 233, 45, 0.05),
            0 8px 32px rgba(0, 0, 0, 0.3);
        }
        50% {
          box-shadow: 
            inset 0 2px 10px rgba(0, 0, 0, 0.25),
            inset 0 -2px 10px rgba(184, 233, 45, 0.05),
            0 0 2px rgba(184, 233, 45, 0.5),
            0 0 8px rgba(184, 233, 45, 0.3),
            0 0 16px rgba(184, 233, 45, 0.15),
            0 0 24px rgba(184, 233, 45, 0.08),
            0 10px 40px rgba(0, 0, 0, 0.35);
        }
      }
      
      @keyframes shimmer {
        0% {
          background-position: -1000px 0;
        }
        100% {
          background-position: 1000px 0;
        }
      }
      
      @keyframes thinkingGlow {
        0%, 100% {
          opacity: 0.8;
          filter: brightness(1);
        }
        50% {
          opacity: 0.95;
          filter: brightness(1.05);
        }
      }
      
      @keyframes elasticWave {
        0% {
          transform: scale(1) translateY(0);
        }
        20% {
          transform: scale(0.97) translateY(0);
        }
        40% {
          transform: scale(1.02) translateY(-1px);
        }
        60% {
          transform: scale(0.98) translateY(0);
        }
        80% {
          transform: scale(1.01) translateY(-0.5px);
        }
        100% {
          transform: scale(1) translateY(0);
        }
      }
      
      @keyframes subtleRotate {
        0% {
          background-position: 0% 0%, 100% 100%;
        }
        100% {
          background-position: 100% 100%, 0% 0%;
        }
      }
      
      @keyframes fadeInWord {
        0% {
          opacity: 0;
          filter: blur(4px);
          transform: translateY(10px);
        }
        100% {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0);
        }
      }
      
      .thinking-indicator {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }
      
      .thinking-text {
        background: linear-gradient(
          90deg,
          #B8E92D 0%,
          #7fc41d 50%,
          #B8E92D 100%
        );
        background-size: 200% 100%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 3s linear infinite, thinkingGlow 2s ease-in-out infinite;
        font-weight: 500;
        letter-spacing: 0.5px;
      }
      
      .thinking-dot-wrapper {
        display: flex;
        gap: 6px;
        perspective: 200px;
        transform-style: preserve-3d;
      }
      
      .thinking-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(184, 233, 45, 0.8);
        animation: pulse3D 2.4s ease-in-out infinite;
        position: relative;
      }
      
      .thinking-dot::after {
        content: '';
        position: absolute;
        inset: -1px;
        border-radius: 50%;
        background: radial-gradient(
          circle,
          rgba(184, 233, 45, 0.2) 0%,
          transparent 60%
        );
        animation: floatOrbit 2.4s ease-in-out infinite;
        filter: blur(1px);
      }
      
      .thinking-dot:nth-child(1) {
        animation-delay: 0s;
      }
      
      .thinking-dot:nth-child(2) {
        animation-delay: 0.2s;
      }
      
      .thinking-dot:nth-child(3) {
        animation-delay: 0.4s;
      }
      
      .streaming-message {
        position: relative;
        animation: fadeInWord 0.3s ease-out;
      }
      
      .streaming-text {
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(184, 233, 45, 0.1) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        background-size: 200% 100%;
        animation: shimmer 2s linear infinite;
        padding: 2px 0;
      }
      
      .streaming-cursor {
        display: inline-block;
        width: 3px;
        height: 18px;
        background: linear-gradient(180deg, #B8E92D, rgba(184, 233, 45, 0.6));
        margin-left: 2px;
        animation: cursorBlink 0.8s infinite;
        box-shadow: 0 0 8px rgba(184, 233, 45, 0.8);
        vertical-align: text-bottom;
        border-radius: 1px;
      }
      
      @keyframes cursorBlink {
        0%, 49% {
          opacity: 1;
        }
        50%, 100% {
          opacity: 0;
        }
      }
      
      @keyframes glow {
        0% {
          filter: brightness(1) drop-shadow(0 0 2px rgba(184, 233, 45, 0.3));
        }
        50% {
          filter: brightness(1.1) drop-shadow(0 0 4px rgba(184, 233, 45, 0.5));
        }
        100% {
          filter: brightness(1) drop-shadow(0 0 2px rgba(184, 233, 45, 0.3));
        }
      }
      
      @keyframes subtleGlow {
        0%, 100% {
          box-shadow: 
            inset 0 1px 3px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(184, 233, 45, 0.1),
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 0 20px rgba(184, 233, 45, 0.05);
        }
        50% {
          box-shadow: 
            inset 0 1px 3px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(184, 233, 45, 0.15),
            0 4px 8px rgba(0, 0, 0, 0.15),
            0 0 30px rgba(184, 233, 45, 0.08);
        }
      }
      
      .futuristic-textarea {
        animation: subtleGlow 4s ease-in-out infinite;
      }
      
      .futuristic-textarea:focus {
        animation: none;
        box-shadow: 
          inset 0 2px 12px rgba(0, 0, 0, 0.3),
          inset 0 -2px 12px rgba(184, 233, 45, 0.08),
          0 0 2px rgba(184, 233, 45, 0.8),
          0 0 8px rgba(184, 233, 45, 0.6),
          0 0 16px rgba(184, 233, 45, 0.4),
          0 0 32px rgba(184, 233, 45, 0.2),
          0 0 48px rgba(184, 233, 45, 0.1),
          0 12px 48px rgba(0, 0, 0, 0.4) !important;
        border: 1px solid rgba(184, 233, 45, 0.6) !important;
        background: 
          linear-gradient(135deg, 
            rgba(10, 46, 31, 0.7) 0%, 
            rgba(184, 233, 45, 0.04) 25%,
            rgba(255, 255, 255, 0.02) 50%,
            rgba(184, 233, 45, 0.04) 75%,
            rgba(10, 46, 31, 0.7) 100%
          ),
          radial-gradient(
            ellipse at 50% 0%,
            rgba(184, 233, 45, 0.1) 0%,
            transparent 70%
          ) !important;
        filter: brightness(1.1) contrast(1.05);
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
      
      .typing-animation-container {
        position: absolute;
        top: 20px;
        left: 20px;
        pointer-events: none;
        z-index: 1;
      }
      
      .typing-text {
        color: rgba(184, 233, 45, 0.4);
        font-size: 16px;
        font-family: inherit;
        text-shadow: 
          0 0 1px rgba(184, 233, 45, 0.3),
          0 0 3px rgba(184, 233, 45, 0.2),
          0 0 6px rgba(184, 233, 45, 0.1),
          0 1px 2px rgba(0, 0, 0, 0.3);
        animation: glow 3s ease-in-out infinite;
        letter-spacing: 0.5px;
        font-weight: 400;
        filter: brightness(1.05);
        opacity: 0.8;
      }
      
      .typing-cursor {
        display: inline-block;
        width: 2px;
        height: 20px;
        background: linear-gradient(180deg, rgba(184, 233, 45, 0.5), rgba(184, 233, 45, 0.2));
        margin-left: 2px;
        animation: cursorBlink 1s infinite;
        box-shadow: 
          0 0 3px rgba(184, 233, 45, 0.3),
          0 0 6px rgba(184, 233, 45, 0.1);
        vertical-align: text-bottom;
      }
      
      .textarea-with-animation {
        position: relative;
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
              
              {/* Provider and Model Selection */}
              <div style={styles.providerSection}>
                <div style={styles.providerToggle}>
                  <button
                    style={{
                      ...styles.providerButton,
                      ...(selectedProvider === 'openai' ? styles.providerButtonActive : {}),
                    }}
                    onClick={() => setSelectedProvider('openai')}
                  >
                    <span>🤖</span>
                    <span>OpenAI</span>
                  </button>
                  <button
                    style={{
                      ...styles.providerButton,
                      ...(selectedProvider === 'anthropic' ? styles.providerButtonActive : {}),
                    }}
                    onClick={() => setSelectedProvider('anthropic')}
                  >
                    <span>🧠</span>
                    <span>Anthropic</span>
                  </button>
                </div>
                
                <select
                  style={styles.modelSelect}
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#B8E92D';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(184, 233, 45, 0.2)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  {models[selectedProvider].map((model) => (
                    <option key={model.id} value={model.id} style={{ backgroundColor: '#0A2E1F', color: '#fff' }}>
                      {model.name} - {model.description}
                    </option>
                  ))}
                </select>
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
                      {message.role === 'assistant' && message.isStreaming !== undefined ? (
                        <div className="streaming-message">
                          <div style={styles.messageContent}>
                            {message.streamedContent ? (
                              <>
                                <span className={message.isStreaming ? "streaming-text" : ""}>
                                  {message.streamedContent}
                                </span>
                                {message.isStreaming && <span className="streaming-cursor"></span>}
                              </>
                            ) : (
                              <div className="thinking-indicator">
                                <span className="thinking-text" style={{ fontSize: '14px' }}>
                                  {language === 'es' ? 'Pensando' : 'Thinking'}
                                </span>
                                <div className="thinking-dot-wrapper">
                                  <div className="thinking-dot"></div>
                                  <div className="thinking-dot"></div>
                                  <div className="thinking-dot"></div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div style={styles.messageContent}>{message.content}</div>
                      )}
                      <div style={styles.messageTimestamp}>
                        {formatTimestamp(message.timestamp)}
                      </div>
                    </motion.div>
                  ))}
                  
                  {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
                    <div className="thinking-indicator">
                      <span className="thinking-text" style={{ fontSize: '14px' }}>
                        {language === 'es' ? 'Pensando' : 'Thinking'}
                      </span>
                      <div className="thinking-dot-wrapper">
                        <div className="thinking-dot"></div>
                        <div className="thinking-dot"></div>
                        <div className="thinking-dot"></div>
                      </div>
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
                <div className="textarea-with-animation" style={styles.textareaContainer}>
                  {!prompt && showTypingAnimation && (
                    <div className="typing-animation-container">
                      <span className="typing-text">{typingText}</span>
                      {typingText && <span className="typing-cursor"></span>}
                    </div>
                  )}
                  <textarea
                    ref={textareaRef}
                    className="futuristic-textarea"
                    style={styles.promptTextarea}
                    value={prompt}
                    onChange={(e) => {
                      setPrompt(e.target.value);
                      if (e.target.value) {
                        setShowTypingAnimation(false);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit();
                      }
                    }}
                    onFocus={(e) => {
                      setShowTypingAnimation(false);
                    }}
                    onBlur={(e) => {
                      if (!prompt) {
                        setShowTypingAnimation(true);
                      }
                    }}
                    disabled={isLoading}
                  />
                  {/* Send Button Inside Textarea */}
                  <motion.button
                    style={{
                      ...styles.sendButtonInside,
                      ...((!prompt.trim() || isLoading) ? styles.sendButtonDisabled : {}),
                    }}
                    onClick={handleSubmit}
                    disabled={!prompt.trim() || isLoading}
                    whileHover={prompt.trim() && !isLoading ? { 
                      scale: 1.05,
                      boxShadow: '0 4px 12px rgba(184, 233, 45, 0.4)'
                    } : {}}
                    whileTap={prompt.trim() && !isLoading ? { scale: 0.95 } : {}}
                  >
                    {isLoading ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span className="loading-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'currentColor' }}></span>
                        <span className="loading-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'currentColor' }}></span>
                        <span className="loading-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'currentColor' }}></span>
                      </span>
                    ) : (
                      <>
                        <span>{language === 'es' ? 'Enviar' : 'Send'}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </div>
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
              <span style={styles.footerInfo}>
                Powered by MERKTOP
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIPanel;
