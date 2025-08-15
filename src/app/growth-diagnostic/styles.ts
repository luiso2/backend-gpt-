export const diagnosticStyles = {
  // Base container styles
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #0A2E1F 0%, #0F3D2A 50%, #0A2E1F 100%)',
    overflow: 'hidden' as const,
    position: 'relative' as const,
  },
  
  // Center content wrapper
  centerWrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  
  // Welcome screen
  welcomeTitle: {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: 'bold',
    color: '#B8E92D',
    marginBottom: '8px',
    textAlign: 'center' as const,
  },
  
  welcomeSubtitle: {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '48px',
    textAlign: 'center' as const,
  },
  
  welcomeHeading: {
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center' as const,
    marginBottom: '32px',
    maxWidth: '1024px',
  },
  
  // Primary button
  primaryButton: {
    position: 'relative' as const,
    padding: '24px 48px',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#0A2E1F',
    background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(184, 233, 45, 0.3)',
  },
  
  // Stats grid
  statsGrid: {
    marginTop: '64px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    textAlign: 'center' as const,
  },
  
  statItem: {
    color: '#ffffff',
  },
  
  statValue: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#B8E92D',
  },
  
  statLabel: {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.6)',
  },
  
  // Question step
  questionContainer: {
    textAlign: 'center' as const,
    marginBottom: '32px',
  },
  
  questionProgress: {
    color: 'rgba(184, 233, 45, 0.8)',
    marginBottom: '8px',
    fontSize: '0.875rem',
  },
  
  questionTitle: {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    fontWeight: 'bold',
    color: '#ffffff',
    maxWidth: '768px',
    margin: '0 auto',
  },
  
  // Options grid
  optionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px',
    maxWidth: '768px',
    width: '100%',
    margin: '0 auto',
  },
  
  optionButton: {
    position: 'relative' as const,
    padding: '24px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    border: '1px solid rgba(184, 233, 45, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'left' as const,
  },
  
  optionButtonHover: {
    background: 'rgba(184, 233, 45, 0.1)',
    border: '1px solid rgba(184, 233, 45, 0.5)',
    transform: 'translateY(-5px)',
  },
  
  optionContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  },
  
  optionIcon: {
    fontSize: '2rem',
  },
  
  optionLabel: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '1.125rem',
    flex: 1,
  },
  
  // Skip button
  skipButton: {
    marginTop: '32px',
    color: 'rgba(255, 255, 255, 0.5)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    fontSize: '0.875rem',
  },
  
  // Analysis screen
  analysisContainer: {
    textAlign: 'center' as const,
  },
  
  loadingSpinner: {
    position: 'relative' as const,
    width: '128px',
    height: '128px',
    margin: '0 auto 32px',
  },
  
  spinnerRing: {
    position: 'absolute' as const,
    border: '4px solid',
    borderRadius: '50%',
    borderTopColor: 'transparent',
  },
  
  analysisTitle: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '16px',
  },
  
  analysisStep: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '0.875rem',
    padding: '8px 0',
  },
  
  // Results screen
  resultsContainer: {
    textAlign: 'center' as const,
    maxWidth: '1024px',
    margin: '0 auto',
  },
  
  resultsPretext: {
    fontSize: '1.25rem',
    color: 'rgba(184, 233, 45, 0.8)',
    marginBottom: '16px',
  },
  
  revenueAmount: {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: 'bold',
    color: '#B8E92D',
    marginBottom: '8px',
  },
  
  revenueSubtext: {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '48px',
  },
  
  diagnosisBox: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '32px',
    border: '1px solid rgba(184, 233, 45, 0.2)',
  },
  
  diagnosisText: {
    color: '#ffffff',
    fontSize: '1.125rem',
    lineHeight: '1.6',
  },
  
  // Dashboard cards
  dashboardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '48px',
  },
  
  dashboardCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid rgba(184, 233, 45, 0.2)',
    transition: 'all 0.3s ease',
  },
  
  cardTitle: {
    color: '#ffffff',
    fontWeight: '600',
    marginBottom: '16px',
  },
  
  cardValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#B8E92D',
  },
  
  cardSubtext: {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: '8px',
  },
  
  // Solutions selector
  solutionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  solutionCard: {
    padding: '24px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    border: '1px solid rgba(184, 233, 45, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'left' as const,
  },
  
  solutionCardSpecial: {
    background: 'linear-gradient(135deg, rgba(184, 233, 45, 0.2) 0%, rgba(127, 216, 88, 0.2) 100%)',
    border: '2px solid rgba(184, 233, 45, 0.5)',
  },
  
  solutionTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '8px',
  },
  
  solutionDescription: {
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '16px',
  },
  
  benefitsList: {
    listStyle: 'none',
    padding: 0,
  },
  
  benefitItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '4px 0',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.875rem',
  },
  
  roiBadge: {
    display: 'inline-block',
    padding: '4px 12px',
    background: 'rgba(184, 233, 45, 0.2)',
    color: '#B8E92D',
    borderRadius: '20px',
    fontSize: '0.875rem',
    fontWeight: '600',
    marginTop: '16px',
  },
  
  // Final proposal
  proposalContainer: {
    maxWidth: '1024px',
    margin: '0 auto',
  },
  
  proposalTitle: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center' as const,
    marginBottom: '32px',
  },
  
  comparisonGrid: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '32px',
    marginBottom: '32px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px',
  },
  
  comparisonColumn: {
    textAlign: 'left' as const,
  },
  
  comparisonTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  
  comparisonTitleBad: {
    color: '#ff6b6b',
  },
  
  comparisonTitleGood: {
    color: '#B8E92D',
  },
  
  comparisonList: {
    listStyle: 'none',
    padding: 0,
  },
  
  comparisonItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    padding: '8px 0',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  
  // Form styles
  form: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '32px',
  },
  
  formTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center' as const,
    marginBottom: '24px',
  },
  
  formGroup: {
    marginBottom: '20px',
  },
  
  formLabel: {
    display: 'block',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '8px',
    fontSize: '0.875rem',
  },
  
  formInput: {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(184, 233, 45, 0.3)',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  
  submitButton: {
    width: '100%',
    padding: '16px 32px',
    background: 'linear-gradient(135deg, #B8E92D 0%, #7FD858 100%)',
    color: '#0A2E1F',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  
  // Progress bar
  progressContainer: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    padding: '16px',
    background: 'rgba(10, 46, 31, 0.95)',
    backdropFilter: 'blur(10px)',
  },
  
  progressWrapper: {
    maxWidth: '768px',
    margin: '0 auto',
  },
  
  progressInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  
  progressText: {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.6)',
  },
  
  progressPercentage: {
    fontSize: '0.875rem',
    color: '#B8E92D',
    fontWeight: '600',
  },
  
  progressBarBg: {
    position: 'relative' as const,
    height: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  
  progressBarFill: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    height: '100%',
    background: 'linear-gradient(90deg, #B8E92D 0%, #7FD858 100%)',
    borderRadius: '4px',
    transition: 'width 0.5s ease',
  },
  
  // Journey tracker
  trackerButton: {
    position: 'fixed' as const,
    right: '16px',
    top: '80px',
    zIndex: 40,
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)',
    borderRadius: '8px',
    padding: '12px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  
  trackerContent: {
    marginTop: '8px',
    background: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(10px)',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '320px',
  },
  
  // Utility
  resetButton: {
    position: 'fixed' as const,
    bottom: '16px',
    left: '16px',
    padding: '8px 16px',
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    borderRadius: '8px',
    border: 'none',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  
  apiKeyButton: {
    position: 'fixed' as const,
    top: '16px',
    right: '16px',
    zIndex: 50,
    padding: '8px 16px',
    background: 'rgba(184, 233, 45, 0.2)',
    color: '#B8E92D',
    borderRadius: '8px',
    border: '1px solid rgba(184, 233, 45, 0.5)',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  
  modal: {
    position: 'fixed' as const,
    inset: 0,
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, 0.8)',
  },
  
  modalContent: {
    background: '#0F3D2A',
    padding: '24px',
    borderRadius: '12px',
    maxWidth: '400px',
    width: '90%',
  },
};