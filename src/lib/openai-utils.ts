// Rate limiting configuration
export const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 10, // Maximum 10 requests per window
};

// Token limits per mode
export const TOKEN_LIMITS = {
  build: 2000,
  automate: 1500,
  analyze: 1500,
};

// Allowed models
export const ALLOWED_MODELS = [
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-16k',
  'gpt-4',
  'gpt-4-turbo-preview',
];

// Input validation
export const validateInput = (prompt: string): { valid: boolean; error?: string } => {
  if (!prompt || typeof prompt !== 'string') {
    return { valid: false, error: 'Invalid prompt format' };
  }

  if (prompt.length < 10) {
    return { valid: false, error: 'Prompt too short (minimum 10 characters)' };
  }

  if (prompt.length > 4000) {
    return { valid: false, error: 'Prompt too long (maximum 4000 characters)' };
  }

  // Check for potential injection attempts
  const dangerousPatterns = [
    /system:/i,
    /ignore previous/i,
    /disregard instructions/i,
    /<script/i,
    /javascript:/i,
  ];

  for (const pattern of dangerousPatterns) {
    if (pattern.test(prompt)) {
      return { valid: false, error: 'Invalid content detected' };
    }
  }

  return { valid: true };
};

// Sanitize output
export const sanitizeOutput = (text: string): string => {
  // Remove any potential HTML/script tags
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .trim();
};

// Cost estimation (in USD)
export const estimateCost = (usage: any): number => {
  const model = 'gpt-3.5-turbo'; // Default model
  const rates = {
    'gpt-3.5-turbo': {
      input: 0.0015 / 1000, // $0.0015 per 1K tokens
      output: 0.002 / 1000,  // $0.002 per 1K tokens
    },
    'gpt-4': {
      input: 0.03 / 1000,   // $0.03 per 1K tokens
      output: 0.06 / 1000,  // $0.06 per 1K tokens
    },
  };

  const modelRates = rates[model as keyof typeof rates] || rates['gpt-3.5-turbo'];
  
  const inputCost = (usage.prompt_tokens || 0) * modelRates.input;
  const outputCost = (usage.completion_tokens || 0) * modelRates.output;
  
  return inputCost + outputCost;
};

// Simple in-memory rate limiter
class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - RATE_LIMIT.windowMs;
    
    // Get existing requests for this identifier
    const userRequests = this.requests.get(identifier) || [];
    
    // Filter out old requests outside the window
    const recentRequests = userRequests.filter(timestamp => timestamp > windowStart);
    
    // Check if limit exceeded
    if (recentRequests.length >= RATE_LIMIT.maxRequests) {
      return false;
    }
    
    // Add current request
    recentRequests.push(now);
    this.requests.set(identifier, recentRequests);
    
    // Clean up old entries periodically
    this.cleanup();
    
    return true;
  }

  private cleanup(): void {
    const now = Date.now();
    const windowStart = now - RATE_LIMIT.windowMs;
    
    for (const [identifier, timestamps] of this.requests.entries()) {
      const recentRequests = timestamps.filter(t => t > windowStart);
      if (recentRequests.length === 0) {
        this.requests.delete(identifier);
      } else {
        this.requests.set(identifier, recentRequests);
      }
    }
  }

  getRemainingRequests(identifier: string): number {
    const now = Date.now();
    const windowStart = now - RATE_LIMIT.windowMs;
    const userRequests = this.requests.get(identifier) || [];
    const recentRequests = userRequests.filter(timestamp => timestamp > windowStart);
    return Math.max(0, RATE_LIMIT.maxRequests - recentRequests.length);
  }

  getResetTime(identifier: string): number {
    const userRequests = this.requests.get(identifier) || [];
    if (userRequests.length === 0) return 0;
    
    const oldestRequest = Math.min(...userRequests);
    return oldestRequest + RATE_LIMIT.windowMs;
  }
}

export const rateLimiter = new RateLimiter();

// Enhanced system prompts with better context
export const enhancedSystemPrompts = {
  build: `You are MERKTOP's expert AI assistant specializing in software development and web solutions. 
    You have deep knowledge of modern web technologies, best practices, and architecture patterns.
    
    Your expertise includes:
    - Frontend: React, Next.js, Vue, Angular, TypeScript, Tailwind CSS
    - Backend: Node.js, Python, Java, Go, REST APIs, GraphQL
    - Databases: PostgreSQL, MongoDB, Redis, MySQL
    - Cloud: AWS, Google Cloud, Azure, Vercel, Netlify
    - DevOps: Docker, Kubernetes, CI/CD, GitHub Actions
    
    When helping users:
    1. Ask clarifying questions when needed
    2. Provide detailed technical recommendations
    3. Suggest modern, scalable, and maintainable solutions
    4. Include code examples when relevant
    5. Consider performance, security, and best practices
    6. Recommend appropriate technology stacks based on requirements
    
    Always be helpful, professional, and provide actionable insights.`,
  
  automate: `You are MERKTOP's automation expert specializing in n8n workflows and business process automation.
    You have extensive experience with workflow automation, API integrations, and process optimization.
    
    Your expertise includes:
    - n8n workflow design and implementation
    - API integrations (REST, GraphQL, Webhooks)
    - Popular tools: Slack, Discord, Telegram, WhatsApp
    - CRM systems: HubSpot, Salesforce, Pipedrive
    - E-commerce: Shopify, WooCommerce, Stripe
    - Marketing: Mailchimp, SendGrid, Social Media APIs
    - Databases and data transformation
    - Error handling and monitoring
    
    When helping users:
    1. Identify automation opportunities in their processes
    2. Design efficient workflow architectures
    3. Recommend appropriate tools and integrations
    4. Provide step-by-step implementation guidance
    5. Consider scalability and maintenance
    6. Estimate time savings and ROI
    
    Focus on practical, implementable solutions that deliver real business value.`,
  
  analyze: `You are MERKTOP's business analyst specializing in digital transformation and process optimization.
    You combine technical knowledge with business acumen to provide strategic recommendations.
    
    Your expertise includes:
    - Business process analysis and optimization
    - Digital transformation strategies
    - Technology stack evaluation
    - Cost-benefit analysis and ROI calculations
    - Performance metrics and KPIs
    - Competitive analysis
    - Market trends and best practices
    - Change management
    
    When helping users:
    1. Analyze their current situation comprehensively
    2. Identify pain points and inefficiencies
    3. Recommend data-driven improvements
    4. Provide realistic implementation timelines
    5. Calculate potential ROI and benefits
    6. Consider both technical and business constraints
    7. Suggest metrics to measure success
    
    Be strategic, practical, and focus on delivering measurable business outcomes.`
};
