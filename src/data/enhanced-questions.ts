export const ENHANCED_QUESTIONS = [
  // Question 1 - Company Size (QUALIFIER)
  {
    id: 'company_size',
    title: 'How many people work in your company?',
    subtitle: 'This helps us understand your structure',
    type: 'single',
    options: [
      { value: '1-5', label: 'Just me or small team', icon: '👤', score: 5 },
      { value: '6-20', label: '6-20 employees', icon: '👥', score: 10 },
      { value: '21-50', label: '21-50 employees', icon: '🏢', score: 15 },
      { value: '51-100', label: '51-100 employees', icon: '🏛️', score: 20 },
      { value: '100+', label: 'More than 100 employees', icon: '🌆', score: 25 }
    ]
  },
  
  // Question 2 - Industry (SEGMENTATION)
  {
    id: 'industry',
    title: 'What industry are you in?',
    subtitle: 'To personalize our solutions',
    type: 'single',
    options: [
      { value: 'retail', label: 'Retail / Commerce', icon: '🛍️' },
      { value: 'services', label: 'Services', icon: '💼' },
      { value: 'manufacturing', label: 'Manufacturing', icon: '🏭' },
      { value: 'technology', label: 'Technology', icon: '💻' },
      { value: 'food', label: 'Food & Beverages', icon: '🍽️' },
      { value: 'health', label: 'Health & Wellness', icon: '🏥' },
      { value: 'education', label: 'Education', icon: '📚' },
      { value: 'real_estate', label: 'Real Estate', icon: '🏠' },
      { value: 'other', label: 'Other industry', icon: '📊' }
    ]
  },
  
  // Question 3 - Current Revenue (QUALIFIER)
  {
    id: 'current_revenue',
    title: 'What is your monthly revenue?',
    subtitle: 'To calculate your growth potential',
    type: 'single',
    options: [
      { value: 'under_10k', label: 'Less than $10,000 USD', icon: '🌱', score: 5 },
      { value: '10k_50k', label: '$10,000 - $50,000 USD', icon: '🌿', score: 10 },
      { value: '50k_100k', label: '$50,000 - $100,000 USD', icon: '🌳', score: 15 },
      { value: '100k_500k', label: '$100,000 - $500,000 USD', icon: '🏢', score: 20 },
      { value: 'over_500k', label: 'More than $500,000 USD', icon: '🏙️', score: 25 }
    ]
  },
  
  // Question 4 - Main Challenge (PAIN POINT)
  {
    id: 'main_challenge',
    title: 'What is your BIGGEST challenge right now?',
    subtitle: 'Be honest, we are here to help',
    type: 'single',
    options: [
      { value: 'low_sales', label: 'Low or stagnant sales', icon: '📉' },
      { value: 'manual_processes', label: 'Manual processes taking time', icon: '⏰' },
      { value: 'no_online_presence', label: 'No effective online presence', icon: '🌐' },
      { value: 'competition', label: 'Competition is beating me', icon: '🥊' },
      { value: 'customer_retention', label: 'Cannot retain customers', icon: '💔' },
      { value: 'scaling', label: 'Cannot scale my operation', icon: '📊' }
    ]
  },
  
  // Question 5 - Current Tools (TECH STACK)
  {
    id: 'current_tools',
    title: 'What tools do you currently use?',
    subtitle: 'Select all that apply',
    type: 'multiple',
    options: [
      { value: 'excel', label: 'Excel / Spreadsheets', icon: '📊' },
      { value: 'whatsapp', label: 'WhatsApp Business', icon: '💬' },
      { value: 'social_media', label: 'Social Media', icon: '📱' },
      { value: 'website', label: 'Website', icon: '🌐' },
      { value: 'ecommerce', label: 'Online Store', icon: '🛒' },
      { value: 'crm', label: 'CRM', icon: '📋' },
      { value: 'email_marketing', label: 'Email Marketing', icon: '📧' },
      { value: 'ads', label: 'Paid Advertising', icon: '📢' },
      { value: 'none', label: 'No digital tools', icon: '❌' }
    ]
  },
  
  // Question 6 - Budget (QUALIFIER)
  {
    id: 'monthly_budget',
    title: 'How much could you invest monthly to grow?',
    subtitle: 'Remember: it is an investment, not an expense',
    type: 'single',
    options: [
      { value: 'under_500', label: 'Less than $500 USD', icon: '💵', score: 5 },
      { value: '500_1000', label: '$500 - $1,000 USD', icon: '💰', score: 10 },
      { value: '1000_2000', label: '$1,000 - $2,000 USD', icon: '💸', score: 15 },
      { value: '2000_5000', label: '$2,000 - $5,000 USD', icon: '💎', score: 20 },
      { value: 'over_5000', label: 'More than $5,000 USD', icon: '🏆', score: 25 }
    ]
  },
  
  // Question 7 - Timeline (URGENCY)
  {
    id: 'start_timeline',
    title: 'When do you want to start seeing results?',
    subtitle: 'Be realistic with your expectations',
    type: 'single',
    options: [
      { value: 'immediately', label: 'NOW! I need it urgently', icon: '🚨', score: 25 },
      { value: '1month', label: 'Within next month', icon: '📅', score: 20 },
      { value: '3months', label: 'Within next 3 months', icon: '📆', score: 15 },
      { value: '6months', label: 'Within next 6 months', icon: '🗓️', score: 10 },
      { value: 'exploring', label: 'Just exploring options', icon: '🔍', score: 5 }
    ]
  },
  
  // Question 8 - Decision Maker (QUALIFIER)
  {
    id: 'decision_maker',
    title: 'Are you the decision maker in your company?',
    subtitle: 'Or do you need to consult with someone else',
    type: 'single',
    options: [
      { value: 'yes_owner', label: 'Yes, I am the owner', icon: '👑', score: 25 },
      { value: 'yes_manager', label: 'Yes, I am manager/director', icon: '💼', score: 20 },
      { value: 'partial', label: 'I share the decision', icon: '🤝', score: 15 },
      { value: 'no_influence', label: 'I influence but do not decide', icon: '💭', score: 10 },
      { value: 'no', label: 'No, I must consult it', icon: '❌', score: 5 }
    ]
  },
  
  // Question 9 - Previous Attempts (EXPERIENCE)
  {
    id: 'previous_attempts',
    title: 'Have you tried anything before to grow?',
    subtitle: 'Your experience helps us not repeat mistakes',
    type: 'multiple',
    options: [
      { value: 'social_organic', label: 'Social media (organic)', icon: '📱' },
      { value: 'paid_ads', label: 'Paid advertising', icon: '💰' },
      { value: 'influencers', label: 'Influencers', icon: '🌟' },
      { value: 'agency', label: 'Marketing agency', icon: '🏢' },
      { value: 'freelancers', label: 'Freelancers', icon: '👨‍💻' },
      { value: 'diy', label: 'I tried it myself', icon: '🛠️' },
      { value: 'nothing', label: 'I have not tried anything', icon: '🆕' }
    ]
  },
  
  // Question 10 - Success Metric (GOALS)
  {
    id: 'success_metric',
    title: 'How would you measure success in 6 months?',
    subtitle: 'Choose your most important metric',
    type: 'single',
    options: [
      { value: 'revenue_2x', label: 'Double my sales', icon: '📈' },
      { value: 'customers_increase', label: 'Have 50% more customers', icon: '👥' },
      { value: 'automation', label: 'Automate 80% of processes', icon: '🤖' },
      { value: 'market_leader', label: 'Be leader in my area', icon: '🏆' },
      { value: 'online_presence', label: 'Dominate the online market', icon: '🌐' },
      { value: 'profitability', label: 'Improve profit margins', icon: '💎' }
    ]
  },
  
  // Question 11 - Competitors (MARKET)
  {
    id: 'main_competitor',
    title: 'Who is your main competitor?',
    subtitle: 'Optional: Name or description',
    type: 'text',
    placeholder: 'Ex: The big store on the corner, Amazon, etc.',
    optional: true
  },
  
  // Question 12 - Why Now (TRIGGER)
  {
    id: 'why_now',
    title: 'Why are you looking for help NOW?',
    subtitle: 'What changed or what happened?',
    type: 'single',
    options: [
      { value: 'losing_money', label: 'I am losing money', icon: '💸', score: 25 },
      { value: 'competitor_growing', label: 'My competition is growing', icon: '📊', score: 20 },
      { value: 'new_opportunity', label: 'I saw an opportunity', icon: '✨', score: 15 },
      { value: 'tired_struggling', label: 'Tired of struggling alone', icon: '😤', score: 20 },
      { value: 'ready_scale', label: 'Ready for the next level', icon: '🚀', score: 15 },
      { value: 'curious', label: 'Just curious', icon: '🤔', score: 5 }
    ]
  }
];

// Helper function to calculate total possible score
export const calculateMaxScore = () => {
  return ENHANCED_QUESTIONS
    .filter(q => q.type === 'single' && q.options)
    .reduce((total, question) => {
      const maxOption = Math.max(...question.options!.map(opt => opt.score || 0));
      return total + maxOption;
    }, 0);
};

// Helper to get question by ID
export const getQuestionById = (id: string) => {
  return ENHANCED_QUESTIONS.find(q => q.id === id);
};

// Helper to calculate score from answers
export const calculateScoreFromAnswers = (answers: Record<string, any>) => {
  let score = 0;
  
  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = getQuestionById(questionId);
    if (question && question.type === 'single' && question.options) {
      const selectedOption = question.options.find(opt => opt.value === answer);
      if (selectedOption?.score) {
        score += selectedOption.score;
      }
    }
  });
  
  return score;
};