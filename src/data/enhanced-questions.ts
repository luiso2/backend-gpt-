export const ENHANCED_QUESTIONS = [
  // Question 1 - Company Size (QUALIFIER)
  {
    id: 'company_size',
    title: '¿Cuántas personas trabajan en tu empresa?',
    subtitle: 'Esto nos ayuda a entender tu estructura',
    type: 'single',
    options: [
      { value: '1-5', label: 'Solo yo o equipo pequeño', icon: '👤', score: 5 },
      { value: '6-20', label: '6-20 empleados', icon: '👥', score: 10 },
      { value: '21-50', label: '21-50 empleados', icon: '🏢', score: 15 },
      { value: '51-100', label: '51-100 empleados', icon: '🏛️', score: 20 },
      { value: '100+', label: 'Más de 100 empleados', icon: '🌆', score: 25 }
    ]
  },
  
  // Question 2 - Industry (SEGMENTATION)
  {
    id: 'industry',
    title: '¿En qué industria te encuentras?',
    subtitle: 'Para personalizar nuestras soluciones',
    type: 'single',
    options: [
      { value: 'retail', label: 'Retail / Comercio', icon: '🛍️' },
      { value: 'services', label: 'Servicios', icon: '💼' },
      { value: 'manufacturing', label: 'Manufactura', icon: '🏭' },
      { value: 'technology', label: 'Tecnología', icon: '💻' },
      { value: 'food', label: 'Alimentos y Bebidas', icon: '🍽️' },
      { value: 'health', label: 'Salud y Bienestar', icon: '🏥' },
      { value: 'education', label: 'Educación', icon: '📚' },
      { value: 'real_estate', label: 'Bienes Raíces', icon: '🏠' },
      { value: 'other', label: 'Otra industria', icon: '📊' }
    ]
  },
  
  // Question 3 - Current Revenue (QUALIFIER)
  {
    id: 'current_revenue',
    title: '¿Cuánto facturas mensualmente?',
    subtitle: 'Para calcular tu potencial de crecimiento',
    type: 'single',
    options: [
      { value: 'under_10k', label: 'Menos de $10,000 USD', icon: '🌱', score: 5 },
      { value: '10k_50k', label: '$10,000 - $50,000 USD', icon: '🌿', score: 10 },
      { value: '50k_100k', label: '$50,000 - $100,000 USD', icon: '🌳', score: 15 },
      { value: '100k_500k', label: '$100,000 - $500,000 USD', icon: '🏢', score: 20 },
      { value: 'over_500k', label: 'Más de $500,000 USD', icon: '🏙️', score: 25 }
    ]
  },
  
  // Question 4 - Main Challenge (PAIN POINT)
  {
    id: 'main_challenge',
    title: '¿Cuál es tu MAYOR desafío ahora mismo?',
    subtitle: 'Sé honesto, estamos aquí para ayudar',
    type: 'single',
    options: [
      { value: 'low_sales', label: 'Ventas bajas o estancadas', icon: '📉' },
      { value: 'manual_processes', label: 'Procesos manuales que quitan tiempo', icon: '⏰' },
      { value: 'no_online_presence', label: 'No tengo presencia online efectiva', icon: '🌐' },
      { value: 'competition', label: 'La competencia me está ganando', icon: '🥊' },
      { value: 'customer_retention', label: 'No logro retener clientes', icon: '💔' },
      { value: 'scaling', label: 'No puedo escalar mi operación', icon: '📊' }
    ]
  },
  
  // Question 5 - Current Tools (TECH STACK)
  {
    id: 'current_tools',
    title: '¿Qué herramientas usas actualmente?',
    subtitle: 'Selecciona todas las que apliquen',
    type: 'multiple',
    options: [
      { value: 'excel', label: 'Excel / Hojas de cálculo', icon: '📊' },
      { value: 'whatsapp', label: 'WhatsApp Business', icon: '💬' },
      { value: 'social_media', label: 'Redes sociales', icon: '📱' },
      { value: 'website', label: 'Sitio web', icon: '🌐' },
      { value: 'ecommerce', label: 'Tienda online', icon: '🛒' },
      { value: 'crm', label: 'CRM', icon: '📋' },
      { value: 'email_marketing', label: 'Email marketing', icon: '📧' },
      { value: 'ads', label: 'Anuncios pagados', icon: '📢' },
      { value: 'none', label: 'Ninguna herramienta digital', icon: '❌' }
    ]
  },
  
  // Question 6 - Budget (QUALIFIER)
  {
    id: 'monthly_budget',
    title: '¿Cuánto podrías invertir mensualmente en crecer?',
    subtitle: 'Recuerda: es una inversión, no un gasto',
    type: 'single',
    options: [
      { value: 'under_500', label: 'Menos de $500 USD', icon: '💵', score: 5 },
      { value: '500_1000', label: '$500 - $1,000 USD', icon: '💰', score: 10 },
      { value: '1000_2000', label: '$1,000 - $2,000 USD', icon: '💸', score: 15 },
      { value: '2000_5000', label: '$2,000 - $5,000 USD', icon: '💎', score: 20 },
      { value: 'over_5000', label: 'Más de $5,000 USD', icon: '🏆', score: 25 }
    ]
  },
  
  // Question 7 - Timeline (URGENCY)
  {
    id: 'start_timeline',
    title: '¿Cuándo quieres empezar a ver resultados?',
    subtitle: 'Sé realista con tus expectativas',
    type: 'single',
    options: [
      { value: 'immediately', label: 'YA! Lo necesito urgente', icon: '🚨', score: 25 },
      { value: '1month', label: 'En el próximo mes', icon: '📅', score: 20 },
      { value: '3months', label: 'En los próximos 3 meses', icon: '📆', score: 15 },
      { value: '6months', label: 'En los próximos 6 meses', icon: '🗓️', score: 10 },
      { value: 'exploring', label: 'Solo estoy explorando opciones', icon: '🔍', score: 5 }
    ]
  },
  
  // Question 8 - Decision Maker (QUALIFIER)
  {
    id: 'decision_maker',
    title: '¿Eres quien toma las decisiones en tu empresa?',
    subtitle: 'O necesitas consultar con alguien más',
    type: 'single',
    options: [
      { value: 'yes_owner', label: 'Sí, soy el dueño', icon: '👑', score: 25 },
      { value: 'yes_manager', label: 'Sí, soy gerente/director', icon: '💼', score: 20 },
      { value: 'partial', label: 'Comparto la decisión', icon: '🤝', score: 15 },
      { value: 'no_influence', label: 'Influyo pero no decido', icon: '💭', score: 10 },
      { value: 'no', label: 'No, debo consultarlo', icon: '❌', score: 5 }
    ]
  },
  
  // Question 9 - Previous Attempts (EXPERIENCE)
  {
    id: 'previous_attempts',
    title: '¿Has intentado algo antes para crecer?',
    subtitle: 'Tu experiencia nos ayuda a no repetir errores',
    type: 'multiple',
    options: [
      { value: 'social_organic', label: 'Redes sociales (orgánico)', icon: '📱' },
      { value: 'paid_ads', label: 'Anuncios pagados', icon: '💰' },
      { value: 'influencers', label: 'Influencers', icon: '🌟' },
      { value: 'agency', label: 'Agencia de marketing', icon: '🏢' },
      { value: 'freelancers', label: 'Freelancers', icon: '👨‍💻' },
      { value: 'diy', label: 'Lo intenté yo mismo', icon: '🛠️' },
      { value: 'nothing', label: 'No he intentado nada', icon: '🆕' }
    ]
  },
  
  // Question 10 - Success Metric (GOALS)
  {
    id: 'success_metric',
    title: '¿Cómo medirías el éxito en 6 meses?',
    subtitle: 'Elige tu métrica más importante',
    type: 'single',
    options: [
      { value: 'revenue_2x', label: 'Duplicar mis ventas', icon: '📈' },
      { value: 'customers_increase', label: 'Tener 50% más clientes', icon: '👥' },
      { value: 'automation', label: 'Automatizar el 80% de procesos', icon: '🤖' },
      { value: 'market_leader', label: 'Ser líder en mi zona', icon: '🏆' },
      { value: 'online_presence', label: 'Dominar el mercado online', icon: '🌐' },
      { value: 'profitability', label: 'Mejorar márgenes de ganancia', icon: '💎' }
    ]
  },
  
  // Question 11 - Competitors (MARKET)
  {
    id: 'main_competitor',
    title: '¿Quién es tu principal competidor?',
    subtitle: 'Opcional: Nombre o descripción',
    type: 'text',
    placeholder: 'Ej: La tienda grande de la esquina, Amazon, etc.',
    optional: true
  },
  
  // Question 12 - Why Now (TRIGGER)
  {
    id: 'why_now',
    title: '¿Por qué estás buscando ayuda AHORA?',
    subtitle: '¿Qué cambió o qué pasó?',
    type: 'single',
    options: [
      { value: 'losing_money', label: 'Estoy perdiendo dinero', icon: '💸', score: 25 },
      { value: 'competitor_growing', label: 'Mi competencia está creciendo', icon: '📊', score: 20 },
      { value: 'new_opportunity', label: 'Vi una oportunidad', icon: '✨', score: 15 },
      { value: 'tired_struggling', label: 'Cansado de batallar solo', icon: '😤', score: 20 },
      { value: 'ready_scale', label: 'Listo para el siguiente nivel', icon: '🚀', score: 15 },
      { value: 'curious', label: 'Solo tengo curiosidad', icon: '🤔', score: 5 }
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