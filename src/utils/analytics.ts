export interface UserBehavior {
  // Timing metrics
  startTime: number;
  endTime?: number;
  totalDuration?: number;
  questionTimings: Record<string, {
    startTime: number;
    endTime?: number;
    duration?: number;
    changes: number;
    hesitationTime?: number;
  }>;
  
  // Interaction metrics
  mouseMovements: number;
  clicks: number;
  scrollDepth: number;
  focusTime: number;
  idleTime: number;
  
  // Abandonment tracking
  abandonments: Array<{
    step: string;
    timestamp: number;
    returned: boolean;
  }>;
  
  // Device & context
  device: {
    type: 'mobile' | 'desktop' | 'tablet';
    os: string;
    browser: string;
    screenResolution: string;
    connectionSpeed?: string;
  };
  
  // Source tracking
  source: {
    referrer: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    landingPage: string;
    timestamp: string;
    timezone: string;
  };
}

export interface EnhancedUserProfile {
  // Company info
  companySize?: '1-5' | '6-20' | '21-50' | '51-100' | '100+';
  industry?: string;
  yearsInBusiness?: string;
  currentTools?: string[];
  mainSalesChannel?: string;
  
  // Budget & timeline
  monthlyBudget?: string;
  startTimeline?: 'immediately' | '1month' | '3months' | '6months' | 'exploring';
  
  // Decision making
  isDecisionMaker?: boolean;
  decisionMakerRole?: string;
  otherStakeholders?: string[];
  
  // Goals & priorities
  primaryGoal?: string;
  secondaryGoals?: string[];
  biggestChallenge?: string;
  successMetric?: string;
  
  // Competition
  mainCompetitors?: string;
  competitorAdvantage?: string;
  
  // Current performance
  currentConversionRate?: string;
  averageTicketSize?: string;
  monthlyWebsiteVisitors?: string;
  currentMarketingSpend?: string;
}

export class AnalyticsTracker {
  private behavior: UserBehavior;
  private currentQuestion: string | null = null;
  private lastActivity: number;
  private idleTimer: any;
  
  constructor() {
    this.behavior = {
      startTime: Date.now(),
      questionTimings: {},
      mouseMovements: 0,
      clicks: 0,
      scrollDepth: 0,
      focusTime: 0,
      idleTime: 0,
      abandonments: [],
      device: this.getDeviceInfo(),
      source: this.getSourceInfo()
    };
    
    this.lastActivity = Date.now();
    this.setupEventListeners();
  }
  
  private getDeviceInfo() {
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
    const isTablet = /iPad|Android/i.test(userAgent) && !/Mobile/i.test(userAgent);
    
    return {
      type: isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop' as any,
      os: this.detectOS(userAgent),
      browser: this.detectBrowser(userAgent),
      screenResolution: typeof window !== 'undefined' 
        ? `${window.screen.width}x${window.screen.height}` 
        : 'unknown',
      connectionSpeed: this.getConnectionSpeed()
    };
  }
  
  private detectOS(ua: string): string {
    if (ua.includes('Windows')) return 'Windows';
    if (ua.includes('Mac')) return 'MacOS';
    if (ua.includes('Linux')) return 'Linux';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('iOS')) return 'iOS';
    return 'Unknown';
  }
  
  private detectBrowser(ua: string): string {
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Edge')) return 'Edge';
    return 'Other';
  }
  
  private getConnectionSpeed(): string {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const conn = (navigator as any).connection;
      return conn?.effectiveType || 'unknown';
    }
    return 'unknown';
  }
  
  private getSourceInfo() {
    if (typeof window === 'undefined') {
      return {
        referrer: '',
        landingPage: '',
        timestamp: new Date().toISOString(),
        timezone: 'UTC'
      };
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    
    return {
      referrer: document.referrer || 'direct',
      utmSource: urlParams.get('utm_source') || undefined,
      utmMedium: urlParams.get('utm_medium') || undefined,
      utmCampaign: urlParams.get('utm_campaign') || undefined,
      landingPage: window.location.pathname,
      timestamp: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  }
  
  private setupEventListeners() {
    if (typeof window === 'undefined') return;
    
    // Track mouse movements
    let moveCount = 0;
    window.addEventListener('mousemove', () => {
      moveCount++;
      if (moveCount % 10 === 0) { // Sample every 10 movements
        this.behavior.mouseMovements++;
      }
      this.updateActivity();
    });
    
    // Track clicks
    window.addEventListener('click', () => {
      this.behavior.clicks++;
      this.updateActivity();
    });
    
    // Track scroll depth
    window.addEventListener('scroll', () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      this.behavior.scrollDepth = Math.max(this.behavior.scrollDepth, scrolled);
      this.updateActivity();
    });
    
    // Track page visibility
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.trackAbandonment();
      } else {
        this.trackReturn();
      }
    });
  }
  
  private updateActivity() {
    const now = Date.now();
    const timeSinceLastActivity = now - this.lastActivity;
    
    if (timeSinceLastActivity > 3000) { // 3 seconds of inactivity
      this.behavior.idleTime += timeSinceLastActivity;
    } else {
      this.behavior.focusTime += timeSinceLastActivity;
    }
    
    this.lastActivity = now;
    
    // Reset idle timer
    clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      this.behavior.idleTime += 3000;
    }, 3000);
  }
  
  startQuestion(questionId: string) {
    if (this.currentQuestion) {
      this.endQuestion(this.currentQuestion);
    }
    
    this.currentQuestion = questionId;
    this.behavior.questionTimings[questionId] = {
      startTime: Date.now(),
      changes: 0
    };
  }
  
  trackQuestionChange(questionId: string) {
    if (this.behavior.questionTimings[questionId]) {
      this.behavior.questionTimings[questionId].changes++;
    }
  }
  
  endQuestion(questionId: string) {
    if (this.behavior.questionTimings[questionId]) {
      const timing = this.behavior.questionTimings[questionId];
      timing.endTime = Date.now();
      timing.duration = timing.endTime - timing.startTime;
      
      // Calculate hesitation time (time over 5 seconds is considered hesitation)
      if (timing.duration > 5000) {
        timing.hesitationTime = timing.duration - 5000;
      }
    }
    
    this.currentQuestion = null;
  }
  
  trackAbandonment() {
    this.behavior.abandonments.push({
      step: this.currentQuestion || 'unknown',
      timestamp: Date.now(),
      returned: false
    });
  }
  
  trackReturn() {
    const lastAbandonment = this.behavior.abandonments[this.behavior.abandonments.length - 1];
    if (lastAbandonment && !lastAbandonment.returned) {
      lastAbandonment.returned = true;
    }
  }
  
  calculateLeadScore(profile: EnhancedUserProfile): number {
    let score = 0;
    
    // Company size scoring (max 20 points)
    const sizeScores = {
      '1-5': 5,
      '6-20': 10,
      '21-50': 15,
      '51-100': 20,
      '100+': 20
    };
    score += sizeScores[profile.companySize || '1-5'];
    
    // Budget scoring (max 25 points)
    const budgetValue = parseInt(profile.monthlyBudget || '0');
    if (budgetValue >= 5000) score += 25;
    else if (budgetValue >= 2000) score += 20;
    else if (budgetValue >= 1000) score += 15;
    else if (budgetValue >= 500) score += 10;
    else score += 5;
    
    // Timeline scoring (max 20 points)
    const timelineScores = {
      'immediately': 20,
      '1month': 15,
      '3months': 10,
      '6months': 5,
      'exploring': 2
    };
    score += timelineScores[profile.startTimeline || 'exploring'];
    
    // Decision maker (max 15 points)
    if (profile.isDecisionMaker) score += 15;
    else score += 5;
    
    // Behavior scoring (max 20 points)
    // Fast responses indicate high intent
    const avgQuestionTime = this.getAverageQuestionTime();
    if (avgQuestionTime < 3000) score += 20; // Very fast
    else if (avgQuestionTime < 5000) score += 15;
    else if (avgQuestionTime < 10000) score += 10;
    else score += 5;
    
    // No abandonments bonus
    if (this.behavior.abandonments.length === 0) score += 5;
    
    // High engagement bonus
    if (this.behavior.scrollDepth > 80) score += 5;
    
    return Math.min(100, score); // Cap at 100
  }
  
  private getAverageQuestionTime(): number {
    const timings = Object.values(this.behavior.questionTimings);
    if (timings.length === 0) return 0;
    
    const totalTime = timings.reduce((sum, t) => sum + (t.duration || 0), 0);
    return totalTime / timings.length;
  }
  
  getFullAnalytics() {
    this.behavior.endTime = Date.now();
    this.behavior.totalDuration = this.behavior.endTime - this.behavior.startTime;
    
    return {
      behavior: this.behavior,
      engagement: {
        totalTime: this.behavior.totalDuration,
        focusRate: this.behavior.focusTime / (this.behavior.focusTime + this.behavior.idleTime),
        completionRate: this.currentQuestion ? 0 : 1,
        interactionRate: this.behavior.clicks / (this.behavior.totalDuration / 1000),
        scrollEngagement: this.behavior.scrollDepth,
        abandonmentCount: this.behavior.abandonments.length,
        averageQuestionTime: this.getAverageQuestionTime()
      }
    };
  }
}