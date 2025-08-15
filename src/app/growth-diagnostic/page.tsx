'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useJourneyStore } from '@/store/journeyStore';
import { createOpenAIClient, analyzeUserJourney, generatePersonalizedPitch } from '@/utils/openai';
import { diagnosticStyles as styles } from './styles';
import WelcomeScreen from '@/components/diagnostic/WelcomeScreen';
import QuestionStep from '@/components/diagnostic/QuestionStep';
import AnalysisScreen from '@/components/diagnostic/AnalysisScreen';
import ResultsScreen from '@/components/diagnostic/ResultsScreen';
import SolutionSelector from '@/components/diagnostic/SolutionSelector';
import FinalProposal from '@/components/diagnostic/FinalProposal';
import ProgressBar from '@/components/diagnostic/ProgressBar';
import JourneyTracker from '@/components/diagnostic/JourneyTracker';

const QUESTIONS = [
  {
    id: 'frustration',
    title: '¿Cuál es tu mayor frustración ahora mismo?',
    options: [
      { value: 'low_clients', label: 'Tengo clientes pero no suficientes', icon: '👥' },
      { value: 'manual_processes', label: 'Pierdo ventas por procesos manuales lentos', icon: '⚙️' },
      { value: 'competition', label: 'Mi competencia me está comiendo el mercado', icon: '🔥' },
      { value: 'no_direction', label: 'No sé por dónde empezar a crecer', icon: '🧭' }
    ]
  },
  {
    id: 'revenue',
    title: '¿Cuánto facturas mensualmente?',
    options: [
      { value: 'under_5k', label: 'Menos de $5,000 USD', icon: '🌱' },
      { value: '5k_20k', label: '$5,000 - $20,000 USD', icon: '🌿' },
      { value: '20k_100k', label: '$20,000 - $100,000 USD', icon: '🌳' },
      { value: 'over_100k', label: 'Más de $100,000 USD', icon: '🏢' }
    ]
  },
  {
    id: 'attempts',
    title: '¿Qué has intentado para crecer?',
    options: [
      { value: 'social_no_strategy', label: 'Redes sociales (sin estrategia clara)', icon: '📱' },
      { value: 'ads_no_results', label: 'Anuncios pagados (sin buenos resultados)', icon: '💸' },
      { value: 'word_of_mouth', label: 'Recomendaciones boca a boca', icon: '💬' },
      { value: 'nothing_consistent', label: 'Nada consistente aún', icon: '🎯' }
    ]
  }
];

export default function GrowthDiagnostic() {
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyPrompt, setShowApiKeyPrompt] = useState(false);
  const [openaiClient, setOpenaiClient] = useState<any>(null);
  
  const { 
    currentStep, 
    userProfile, 
    journeyHistory,
    isLoading,
    setCurrentStep, 
    addToHistory, 
    updateProfile,
    setLoading,
    reset
  } = useJourneyStore();

  useEffect(() => {
    // Check for API key in localStorage
    const savedKey = localStorage.getItem('openai_api_key');
    if (savedKey) {
      setOpenaiClient(createOpenAIClient(savedKey));
    }
  }, []);

  const handleStart = () => {
    addToHistory('started', true);
    setCurrentStep(1);
  };

  const handleAnswer = async (questionId: string, answer: any) => {
    addToHistory(questionId, answer);
    updateProfile({ [questionId]: answer });
    
    if (currentStep < QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // All questions answered, proceed to analysis
      setCurrentStep(4);
      
      if (openaiClient) {
        setLoading(true);
        const diagnosis = await analyzeUserJourney(openaiClient, userProfile);
        if (diagnosis) {
          updateProfile({
            potentialRevenueLoss: diagnosis.revenue_loss,
            recommendedSolutions: diagnosis.solutions,
            aiDiagnosis: diagnosis.diagnosis,
            leadScore: diagnosis.lead_score
          });
        }
        setLoading(false);
        
        // Show results after analysis
        setTimeout(() => setCurrentStep(5), 2000);
      } else {
        // No API key, show results with default data
        updateProfile({
          potentialRevenueLoss: 15000,
          recommendedSolutions: ['Automatización de ventas', 'Marketing digital', 'Sistema CRM'],
          aiDiagnosis: 'Tu negocio tiene un alto potencial de crecimiento con las herramientas correctas.',
          leadScore: 7
        });
        setTimeout(() => setCurrentStep(5), 2000);
      }
    }
  };

  const handleSolutionSelect = async (solution: string) => {
    addToHistory('solution_selected', solution);
    updateProfile({ interest: solution });
    setCurrentStep(6);
    
    if (openaiClient) {
      setLoading(true);
      const pitch = await generatePersonalizedPitch(
        openaiClient, 
        userProfile,
        {
          revenue_loss: userProfile.potentialRevenueLoss,
          solutions: userProfile.recommendedSolutions,
          diagnosis: userProfile.aiDiagnosis
        }
      );
      if (pitch) {
        updateProfile({ personalizedPitch: pitch });
      }
      setLoading(false);
    }
  };

  const handleFinalSubmit = (contactInfo: any) => {
    addToHistory('contact_submitted', contactInfo);
    updateProfile(contactInfo);
    
    // Here you would normally send this to your backend
    console.log('Complete Journey:', {
      profile: userProfile,
      history: journeyHistory
    });
    
    // Show success message
    alert('¡Gracias! Un Growth Partner te contactará en las próximas 24 horas.');
  };

  const handleApiKeySubmit = (key: string) => {
    localStorage.setItem('openai_api_key', key);
    setOpenaiClient(createOpenAIClient(key));
    setShowApiKeyPrompt(false);
  };

  return (
    <div style={styles.container}>
      {/* Progress Bar */}
      {currentStep > 0 && currentStep <= 3 && (
        <ProgressBar current={currentStep} total={QUESTIONS.length} />
      )}
      
      {/* Journey Tracker */}
      <JourneyTracker history={journeyHistory} />
      
      {/* Optional API Key Setup */}
      {!openaiClient && currentStep === 0 && (
        <motion.button
          style={styles.apiKeyButton}
          onClick={() => setShowApiKeyPrompt(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Activar IA ✨
        </motion.button>
      )}
      
      {showApiKeyPrompt && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '16px', color: '#ffffff' }}>Activar Análisis con IA</h3>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '16px' }}>
              Ingresa tu API Key de OpenAI para obtener un diagnóstico personalizado con IA
            </p>
            <input
              type="password"
              placeholder="sk-..."
              style={styles.formInput}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              <button
                style={{ ...styles.submitButton, flex: 1 }}
                onClick={() => handleApiKeySubmit(apiKey)}
              >
                Activar
              </button>
              <button
                style={{ ...styles.resetButton, position: 'static', flex: 1 }}
                onClick={() => setShowApiKeyPrompt(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        )}
        
        {currentStep >= 1 && currentStep <= 3 && (
          <QuestionStep
            key={`question-${currentStep}`}
            question={QUESTIONS[currentStep - 1]}
            onAnswer={(answer) => handleAnswer(QUESTIONS[currentStep - 1].id, answer)}
            stepNumber={currentStep}
            totalSteps={QUESTIONS.length}
          />
        )}
        
        {currentStep === 4 && (
          <AnalysisScreen key="analysis" isLoading={isLoading} />
        )}
        
        {currentStep === 5 && (
          <ResultsScreen
            key="results"
            revenueLoss={userProfile.potentialRevenueLoss || 15000}
            solutions={userProfile.recommendedSolutions || []}
            diagnosis={userProfile.aiDiagnosis || ''}
            onContinue={() => setCurrentStep(6)}
          />
        )}
        
        {currentStep === 6 && (
          <SolutionSelector
            key="solutions"
            solutions={userProfile.recommendedSolutions || []}
            onSelect={handleSolutionSelect}
          />
        )}
        
        {currentStep === 7 && (
          <FinalProposal
            key="proposal"
            pitch={userProfile.personalizedPitch}
            onSubmit={handleFinalSubmit}
            isLoading={isLoading}
          />
        )}
      </AnimatePresence>
      
      {/* Reset Button */}
      {currentStep > 0 && (
        <motion.button
          style={styles.resetButton}
          onClick={() => {
            reset();
            setCurrentStep(0);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reiniciar
        </motion.button>
      )}
    </div>
  );
}