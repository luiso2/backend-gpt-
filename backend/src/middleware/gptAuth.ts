import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

// Extender la interfaz de Request para incluir propiedades personalizadas
declare global {
  namespace Express {
    interface Request {
      isGPTRequest?: boolean;
      requestSource?: string;
    }
  }
}

// Middleware para autenticar requests del GPT
export const authenticateGPT = (req: Request, res: Response, next: NextFunction): void => {
  const apiKey = req.headers['x-api-key'] as string;
  const validApiKey = process.env.GPT_API_KEY;

  // Log de requests si está habilitado
  if (process.env.LOG_GPT_REQUESTS === 'true') {
    console.log(`[GPT Request] ${new Date().toISOString()} - ${req.method} ${req.path}`);
    console.log('Body:', JSON.stringify(req.body, null, 2));
  }

  // Verificar API Key
  if (!apiKey || apiKey !== validApiKey) {
    res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid or missing API key'
    });
    return;
  }

  // Agregar identificador de origen
  req.isGPTRequest = true;
  req.requestSource = 'ChatGPT';

  next();
};

// Rate limiting específico para GPT
export const gptRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: parseInt(process.env.GPT_RATE_LIMIT || '100'),
  message: 'Too many requests from GPT, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  // Identificar requests por API key
  keyGenerator: (req: Request) => req.headers['x-api-key'] as string || 'unknown'
});

// Middleware para logging de respuestas
export const logGPTResponse = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.isGPTRequest || process.env.LOG_GPT_REQUESTS !== 'true') {
    return next();
  }

  const originalSend = res.send;
  res.send = function(data: any): Response {
    console.log(`[GPT Response] ${new Date().toISOString()} - Status: ${res.statusCode}`);
    if (res.statusCode < 400) {
      const dataStr = typeof data === 'string' ? data : JSON.stringify(data);
      console.log('Response:', dataStr ? dataStr.substring(0, 500) : 'Empty');
    }
    return originalSend.call(this, data);
  };
  next();
};

// CORS específico para GPT
export const gptCorsMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const origin = req.headers.origin;

  // Permitir específicamente requests de ChatGPT
  if (origin === 'https://chat.openai.com' || origin === 'https://chatgpt.com') {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-API-Key');
    res.header('Access-Control-Max-Age', '86400');
  }

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }

  next();
};
