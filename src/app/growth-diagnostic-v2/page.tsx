'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useJourneyStore } from '@/store/journeyStore';
import { AnalyticsTracker } from '@/utils/analytics';
import { ENHANCED_QUESTIONS, calculateScoreFromAnswers, calculateMaxScore } from '@/data/enhanced-questions';
import { createOpenAIClient, analyzeUserJourney, generatePersonalizedPitch } from '@/utils/openai';
import { diagnosticStyles as styles } from '../growth-diagnostic/styles';

export default function GrowthDiagnosticV2() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [analyticsTracker] = useState(() => new AnalyticsTracker());
  const [showResults, setShowResults] = useState(false);
  const [leadScore, setLeadScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const textInputRef = useRef<HTMLInputElement>(null);
  
  const { 
    addToHistory, 
    updateProfile,
    setLoading
  } = useJourneyStore();
  
  // Start tracking when component mounts
  useEffect(() => {
    addToHistory('diagnostic_v2_started', true);
    
    // Track page unload
    const handleUnload = () => {
      const analytics = analyticsTracker.getFullAnalytics();
      // Save to localStorage for recovery
      localStorage.setItem('diagnostic_analytics', JSON.stringify(analytics));
      localStorage.setItem('diagnostic_answers', JSON.stringify(answers));
    };
    
    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, []);
  
  // Track question changes
  useEffect(() => {
    if (currentQuestionIndex >= 0 && currentQuestionIndex < ENHANCED_QUESTIONS.length) {
      const question = ENHANCED_QUESTIONS[currentQuestionIndex];
      analyticsTracker.startQuestion(question.id);
    }
  }, [currentQuestionIndex]);
  
  const handleStart = () => {
    setCurrentQuestionIndex(0);
    addToHistory('diagnostic_started', Date.now());
  };
  
  const handleAnswer = (questionId: string, answer: any) => {
    // Track the answer
    analyticsTracker.endQuestion(questionId);
    
    // Store answer
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);
    
    // Add to journey history
    addToHistory(questionId, answer);
    
    // Calculate progressive score
    const currentScore = calculateScoreFromAnswers(newAnswers);
    const maxPossibleScore = calculateMaxScore();
    const percentageScore = Math.round((currentScore / maxPossibleScore) * 100);
    
    // Update profile with answer
    updateProfile({ 
      [questionId]: answer,
      progressiveScore: percentageScore 
    });
    
    // Move to next question or show results
    if (currentQuestionIndex < ENHANCED_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateFinalScore(newAnswers);
    }
  };
  
  const handleSkip = () => {
    const question = ENHANCED_QUESTIONS[currentQuestionIndex];
    if (question.optional) {
      handleAnswer(question.id, 'skipped');
    }
  };
  
  const calculateFinalScore = async (allAnswers: Record<string, any>) => {
    setIsLoading(true);
    
    // Get full analytics
    const analytics = analyticsTracker.getFullAnalytics();
    
    // Calculate base score from answers
    const answerScore = calculateScoreFromAnswers(allAnswers);
    const maxScore = calculateMaxScore();
    const baseScore = Math.round((answerScore / maxScore) * 100);
    
    // Adjust score based on behavior
    let behaviorBonus = 0;
    
    // Fast completion bonus (answered quickly = high intent)
    if (analytics.engagement.averageQuestionTime < 3000) behaviorBonus += 10;
    else if (analytics.engagement.averageQuestionTime < 5000) behaviorBonus += 5;
    
    // High engagement bonus
    if (analytics.engagement.focusRate > 0.8) behaviorBonus += 5;
    if (analytics.engagement.scrollEngagement > 80) behaviorBonus += 5;
    
    // No abandonment bonus
    if (analytics.behavior.abandonments.length === 0) behaviorBonus += 5;
    
    const finalScore = Math.min(100, baseScore + behaviorBonus);
    setLeadScore(finalScore);
    
    // Categorize lead
    let leadCategory = '';
    if (finalScore >= 80) leadCategory = '🔥 HOT - Contactar INMEDIATAMENTE';
    else if (finalScore >= 60) leadCategory = '🌡️ WARM - Seguimiento en 24h';
    else if (finalScore >= 40) leadCategory = '❄️ COOL - Nutrir con contenido';
    else leadCategory = '🧊 COLD - Educación a largo plazo';
    
    // Create comprehensive profile
    const comprehensiveProfile = {
      ...allAnswers,
      leadScore: finalScore,
      leadCategory,
      analytics: {
        totalTime: analytics.behavior.totalDuration,
        avgQuestionTime: analytics.engagement.averageQuestionTime,
        device: analytics.behavior.device.type,
        source: analytics.behavior.source.referrer,
        focusRate: analytics.engagement.focusRate,
        abandonments: analytics.behavior.abandonments.length
      },
      timestamp: new Date().toISOString()
    };
    
    // Update profile with all data
    updateProfile(comprehensiveProfile);
    
    // Save to localStorage for persistence
    localStorage.setItem('lead_profile', JSON.stringify(comprehensiveProfile));
    
    // Log for debugging (in production, send to your backend)
    console.log('🎯 Lead Profile:', comprehensiveProfile);
    console.log('📊 Lead Score:', finalScore);
    console.log('📈 Category:', leadCategory);
    
    setIsLoading(false);
    setShowResults(true);
  };
  
  const renderQuestion = () => {
    const question = ENHANCED_QUESTIONS[currentQuestionIndex];
    if (!question) return null;
    
    return (
      <motion.div
        key={question.id}
        style={styles.centerWrapper}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
      >
        <div style={styles.questionContainer}>
          {/* Progress indicator */}
          <div style={styles.progressWrapper}>
            <div style={styles.progressInfo}>
              <span style={styles.progressText}>
                Pregunta {currentQuestionIndex + 1} de {ENHANCED_QUESTIONS.length}
              </span>
              <span style={styles.progressPercentage}>
                {Math.round(((currentQuestionIndex + 1) / ENHANCED_QUESTIONS.length) * 100)}%
              </span>
            </div>
            <div style={styles.progressBarBg}>
              <motion.div
                style={{
                  ...styles.progressBarFill,
                  width: `${((currentQuestionIndex + 1) / ENHANCED_QUESTIONS.length) * 100}%`
                }}
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestionIndex + 1) / ENHANCED_QUESTIONS.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          
          {/* Question */}
          <h2 style={styles.questionTitle}>{question.title}</h2>
          {question.subtitle && (
            <p style={{ ...styles.questionProgress, marginBottom: '32px' }}>
              {question.subtitle}
            </p>
          )}
          
          {/* Options */}
          {question.type === 'single' && (
            <div style={styles.optionsGrid}>
              {question.options?.map((option, index) => (
                <motion.button
                  key={option.value}
                  style={styles.optionButton}
                  onClick={() => handleAnswer(question.id, option.value)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: 'rgba(184, 233, 45, 0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div style={styles.optionContent}>
                    <span style={styles.optionIcon}>{option.icon}</span>
                    <span style={styles.optionLabel}>{option.label}</span>
                  </div>
                  {option.score && (
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      fontSize: '10px',
                      color: '#B8E92D',
                      opacity: 0.5
                    }}>
                      +{option.score}pts
                    </div>
                  )}
                </motion.button>
              ))}
            </div>
          )}
          
          {question.type === 'multiple' && (
            <div style={styles.optionsGrid}>
              {question.options?.map((option, index) => {
                const isSelected = answers[question.id]?.includes(option.value);
                return (
                  <motion.button
                    key={option.value}
                    style={{
                      ...styles.optionButton,
                      backgroundColor: isSelected ? 'rgba(184, 233, 45, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      borderColor: isSelected ? '#B8E92D' : 'rgba(184, 233, 45, 0.2)'
                    }}
                    onClick={() => {
                      const currentSelections = answers[question.id] || [];
                      const newSelections = currentSelections.includes(option.value)
                        ? currentSelections.filter((v: string) => v !== option.value)
                        : [...currentSelections, option.value];
                      
                      // Track change
                      analyticsTracker.trackQuestionChange(question.id);
                      setAnswers({ ...answers, [question.id]: newSelections });
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div style={styles.optionContent}>
                      <span style={styles.optionIcon}>{option.icon}</span>
                      <span style={styles.optionLabel}>{option.label}</span>
                    </div>
                    {isSelected && (
                      <span style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        color: '#B8E92D'
                      }}>
                        ✓
                      </span>
                    )}
                  </motion.button>
                );
              })}
              {answers[question.id]?.length > 0 && (
                <motion.button
                  style={styles.primaryButton}
                  onClick={() => handleAnswer(question.id, answers[question.id])}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Continuar →
                </motion.button>
              )}
            </div>
          )}
          
          {question.type === 'text' && (
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <input
                ref={textInputRef}
                type="text"
                placeholder={question.placeholder}
                style={styles.formInput}
                onChange={(e) => {
                  analyticsTracker.trackQuestionChange(question.id);
                  setAnswers({ ...answers, [question.id]: e.target.value });
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && answers[question.id]) {
                    handleAnswer(question.id, answers[question.id]);
                  }
                }}
              />
              <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                {question.optional && (
                  <button
                    style={{ ...styles.skipButton, position: 'static' }}
                    onClick={handleSkip}
                  >
                    Omitir
                  </button>
                )}
                {answers[question.id] && (
                  <motion.button
                    style={styles.primaryButton}
                    onClick={() => handleAnswer(question.id, answers[question.id])}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Continuar →
                  </motion.button>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  };
  
  const renderResults = () => {
    const getScoreColor = () => {
      if (leadScore >= 80) return '#00ff00';
      if (leadScore >= 60) return '#B8E92D';
      if (leadScore >= 40) return '#ffaa00';
      return '#ff6b6b';
    };
    
    const getRecommendation = () => {
      if (leadScore >= 80) {
        return {
          title: '¡PERFECTO! Eres el socio ideal para MERKTOP',
          message: 'Tu negocio está en el punto perfecto para escalar. Podemos multiplicar tus resultados en tiempo récord.',
          cta: 'QUIERO HABLAR AHORA'
        };
      } else if (leadScore >= 60) {
        return {
          title: 'Tienes un gran potencial de crecimiento',
          message: 'Con las estrategias correctas, podemos llevar tu negocio al siguiente nivel.',
          cta: 'AGENDA UNA LLAMADA'
        };
      } else if (leadScore >= 40) {
        return {
          title: 'Hay oportunidades interesantes para ti',
          message: 'Necesitas fortalecer algunas áreas, pero podemos ayudarte a crecer paso a paso.',
          cta: 'RECIBIR DIAGNÓSTICO'
        };
      } else {
        return {
          title: 'Es momento de sentar las bases',
          message: 'Tu negocio necesita estructura. Te enviaremos recursos gratuitos para empezar.',
          cta: 'QUIERO APRENDER'
        };
      }
    };
    
    const recommendation = getRecommendation();
    
    return (
      <motion.div
        style={styles.resultsContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ ...styles.proposalTitle, marginBottom: '32px' }}>
          Análisis Completo de tu Negocio
        </h2>
        
        {/* Score Display */}
        <motion.div
          style={{
            ...styles.diagnosisBox,
            background: `linear-gradient(135deg, ${getScoreColor()}20, ${getScoreColor()}10)`,
            border: `2px solid ${getScoreColor()}`,
            marginBottom: '32px'
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ffffff' }}>
            Tu Score de Crecimiento
          </h3>
          <motion.div
            style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: getScoreColor()
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {leadScore}/100
          </motion.div>
        </motion.div>
        
        {/* Recommendation */}
        <motion.div
          style={styles.diagnosisBox}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h3 style={{ fontSize: '1.5rem', color: '#B8E92D', marginBottom: '16px' }}>
            {recommendation.title}
          </h3>
          <p style={styles.diagnosisText}>
            {recommendation.message}
          </p>
        </motion.div>
        
        {/* Key Insights */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '32px',
            marginBottom: '32px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div style={styles.dashboardCard}>
            <h4 style={styles.cardTitle}>Urgencia</h4>
            <p style={styles.cardValue}>
              {answers.start_timeline === 'immediately' ? 'ALTA' : 
               answers.start_timeline === '1month' ? 'MEDIA' : 'BAJA'}
            </p>
          </div>
          <div style={styles.dashboardCard}>
            <h4 style={styles.cardTitle}>Presupuesto</h4>
            <p style={styles.cardValue}>{answers.monthly_budget?.replace('_', '-') || 'N/A'}</p>
          </div>
          <div style={styles.dashboardCard}>
            <h4 style={styles.cardTitle}>Decisor</h4>
            <p style={styles.cardValue}>
              {answers.decision_maker?.includes('yes') ? 'SÍ' : 'NO'}
            </p>
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.button
          style={{
            ...styles.primaryButton,
            fontSize: '1.25rem',
            padding: '20px 40px'
          }}
          onClick={() => {
            // Here you would redirect to contact form or calendar
            console.log('Lead ready for contact:', { score: leadScore, answers });
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, type: 'spring' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {recommendation.cta} →
        </motion.button>
      </motion.div>
    );
  };
  
  return (
    <div style={styles.container}>
      <AnimatePresence mode="wait">
        {currentQuestionIndex === -1 && (
          <motion.div
            key="welcome"
            style={styles.centerWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1 style={styles.welcomeTitle}>MERKTOP</h1>
            <p style={styles.welcomeSubtitle}>Diagnóstico Avanzado de Crecimiento</p>
            <h2 style={styles.welcomeHeading}>
              12 preguntas para multiplicar tus ventas
            </h2>
            <p style={{ ...styles.welcomeSubtitle, marginBottom: '48px' }}>
              Análisis profundo + IA + Score personalizado
            </p>
            <motion.button
              style={styles.primaryButton}
              onClick={handleStart}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              COMENZAR DIAGNÓSTICO AVANZADO →
            </motion.button>
          </motion.div>
        )}
        
        {currentQuestionIndex >= 0 && currentQuestionIndex < ENHANCED_QUESTIONS.length && !showResults && (
          renderQuestion()
        )}
        
        {isLoading && (
          <motion.div
            key="loading"
            style={styles.analysisContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div style={styles.loadingSpinner}>
              <motion.div
                style={{
                  ...styles.spinnerRing,
                  inset: 0,
                  borderColor: '#B8E92D'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <h2 style={styles.analysisTitle}>Analizando tu negocio con IA...</h2>
          </motion.div>
        )}
        
        {showResults && renderResults()}
      </AnimatePresence>
    </div>
  );
}