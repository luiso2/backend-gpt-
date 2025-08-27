// Portfolio projects data with improved type safety
export type ProjectCategory = 'web' | 'ecommerce' | 'automation' | 'software'
export type ProjectColor = 'green' | 'blue' | 'emerald' | 'purple' | 'orange'

export interface ProjectMetrics {
  readonly [key: string]: string
}

export interface Project {
  readonly id: string
  readonly title: string
  readonly category: ProjectCategory
  readonly description: string
  readonly image: string
  readonly url?: string
  readonly tags: readonly string[]
  readonly client: string
  readonly year: string
  readonly metrics: ProjectMetrics
  readonly color: ProjectColor
}

// Validation helper
export function isValidProject(project: unknown): project is Project {
  return (
    typeof project === 'object' &&
    project !== null &&
    typeof (project as Project).id === 'string' &&
    typeof (project as Project).title === 'string' &&
    ['web', 'ecommerce', 'automation', 'software'].includes((project as Project).category) &&
    Array.isArray((project as Project).tags)
  )
}

export const portfolioProjects: Project[] = [
  {
    id: 'chat-widget',
    title: 'MERKTOP AI Chat Widget',
    category: 'automation',
    description: 'Intelligent AI chat widget for websites, includes mandatory Lead Gate and advanced contextual responses',
    image: '/projects/chat-widget.jpg',
    url: 'https://chat.merktop.com/?lang=en',
    tags: ['React', 'OpenAI GPT', 'Vite', 'TypeScript'],
    client: 'MERKTOP Platform',
    year: '2024',
    metrics: {
      'conversions': '+65%',
      'leads/month': '10K+',
      'integrations': '500+'
    },
    color: 'green'
  },
  {
    id: 'crm-shopify',
    title: 'Advanced CRM with AI Chat',
    category: 'software',
    description: 'Complete CRM system with Shopify integration, multilingual AI chat widget, lead management and advanced conversation analytics',
    image: '/projects/crm.jpg',
    url: 'https://vartyinc.com/?lang=en',
    tags: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'OpenAI', 'WebSocket'],
    client: 'Enterprise CRM',
    year: '2024',
    metrics: {
      'captured leads': '15K+',
      'avg conversation': '8min',
      'satisfaction': '94%'
    },
    color: 'blue'
  },
  {
    id: 'medical-ai',
    title: 'Medical AI Assistant',
    category: 'software',
    description: 'Medical assistance platform with AI, includes methylation test, specialized AI chat, multilingual support and personalized health analysis',
    image: '/projects/medical-ai.jpg',
    url: 'https://ai-medical-frontend-production.up.railway.app/?lang=en',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'OpenAI'],
    client: 'Healthcare Solutions',
    year: '2024',
    metrics: {
      'queries/day': '500+',
      'accuracy': '96%',
      'active users': '8K+'
    },
    color: 'emerald'
  },
  {
    id: 'woocommerce-admin',
    title: 'WooCommerce Admin Panel',
    category: 'ecommerce',
    description: 'Advanced admin panel for WooCommerce with AG Grid, product, order and customer management, inline editing and data export',
    image: '/projects/woocommerce-admin.jpg',
    url: 'https://woocommerce-admin-agrid-production.up.railway.app/?lang=en',
    tags: ['AG Grid', 'JavaScript', 'WooCommerce API', 'Vite', 'CSS3'],
    client: 'E-commerce Solutions',
    year: '2024',
    metrics: {
      'active stores': '200+',
      'products/store': '5K+',
      'efficiency': '+75%'
    },
    color: 'purple'
  },
  {
    id: 'saas-market',
    title: 'Multi-tenant SaaS Platform',
    category: 'software',
    description: 'Complete SaaS platform for creating online stores with multi-language support, theme customization, Stripe subscriptions and admin panel',
    image: '/projects/saas-market.jpg',
    url: 'https://sass-marketplace-app-production.up.railway.app/?lang=en',
    tags: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'Stripe', 'shadcn/ui', 'TypeScript'],
    client: 'SaaS Market',
    year: '2024',
    metrics: {
      'stores created': '350+',
      'monthly GMV': '$2M+',
      'retention': '89%'
    },
    color: 'orange'
  },
  {
    id: 'mercadito-store',
    title: 'EcoShop E-commerce Platform',
    category: 'ecommerce',
    description: 'Modern e-commerce platform with WhatsApp integration for orders, complete admin panel and delivery system',
    image: '/projects/ecommerce.jpg',
    url: 'https://ecoshop-production-46b3.up.railway.app/?lang=en',
    tags: ['React', 'TypeScript', 'Refine.dev', 'Ant Design', 'WhatsApp API'],
    client: 'EcoShop',
    year: '2024',
    metrics: {
      'products': '1000+',
      'conversion': '+45%',
      'users': '25K+'
    },
    color: 'purple'
  },
  {
    id: 'pitch-landing',
    title: 'Interactive Pitch Platform',
    category: 'web',
    description: 'Interactive quiz-style landing page to capture business ideas with multilingual support and smooth animations',
    image: '/projects/pitch.jpg',
    url: 'https://pitch-production.up.railway.app/?lang=en',
    tags: ['React', 'Vite', 'i18next', 'Framer Motion'],
    client: 'MERKTOP Ventures',
    year: '2024',
    metrics: {
      'conversion': '35%',
      'captured ideas': '500+',
      'engagement': '85%'
    },
    color: 'blue'
  },
  {
    id: 'ai-tutor',
    title: 'AI Live Audio Tutor',
    category: 'software',
    description: 'AI tutoring application with real-time audio processing and interactive 3D visualizations',
    image: '/projects/ai-tutor.jpg',
    url: 'https://ai-tutor-production-a281.up.railway.app/?lang=en',
    tags: ['TypeScript', 'Gemini AI', 'WebGL', 'Audio API'],
    client: 'EduTech Solutions',
    year: '2024',
    metrics: {
      'students': '15K+',
      'sessions/day': '1K+',
      'satisfaction': '96%'
    },
    color: 'green'
  },
  {
    id: 'automation-suite',
    title: 'Business Automation Suite',
    category: 'automation',
    description: 'Complete business automation suite with n8n, integrating CRM, marketing and operations',
    image: '/projects/automation.jpg',
    tags: ['n8n', 'Node.js', 'Docker', 'API Integration'],
    client: 'Enterprise Corp',
    year: '2024',
    metrics: {
      'automated processes': '150+',
      'time saved': '60hrs/week',
      'ROI': '+380%'
    },
    color: 'purple'
  },
  {
    id: 'signflow-docusign',
    title: 'SignFlow - Digital Contracts',
    category: 'software',
    description: 'Professional digital contracts platform with DocuSign integration, automatic PDF generation and complete electronic signature management',
    image: '/projects/signflow.jpg',
    url: 'https://signedyou.com/?lang=en',
    tags: ['React', 'TypeScript', 'DocuSign API', 'Prisma', 'Node.js', 'PostgreSQL'],
    client: 'SignFlow Platform',
    year: '2024',
    metrics: {
      'contracts/month': '2K+',
      'time reduced': '85%',
      'satisfaction': '98%'
    },
    color: 'blue'
  },
  {
    id: '360-real-estate',
    title: '360° Real Estate Platform',
    category: 'software',
    description: 'Modern real estate platform with advanced search, smart filters, interactive maps and multilingual support. Features 360° visualization, virtual tours and complete property management',
    image: '/projects/360-real-estate.jpg',
    url: 'https://360-real-state-production.up.railway.app/?lang=en',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'i18next', 'Leaflet', 'Zustand', 'Vite'],
    client: '360° Real Estate',
    year: '2024',
    metrics: {
      'properties': '10K+',
      'searches/day': '5K+',
      'conversion': '12%'
    },
    color: 'emerald'
  }
]

export const portfolioCategories = [
  { id: 'all', name: 'All Projects', icon: 'Filter' },
  { id: 'web', name: 'Web Apps', icon: 'Cpu' },
  { id: 'ecommerce', name: 'E-commerce', icon: 'Store' },
  { id: 'automation', name: 'Automation', icon: 'Zap' },
  { id: 'software', name: 'Software', icon: 'Code2' },
] as const