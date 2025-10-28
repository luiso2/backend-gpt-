import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';

// Import all routes
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import pageRoutes from './routes/pageRoutes';
import sectionRoutes from './routes/sectionRoutes';
import portfolioProjectRoutes from './routes/portfolioProjectRoutes';
import serviceRoutes from './routes/serviceRoutes';
import testimonialRoutes from './routes/testimonialRoutes';
import siteConfigRoutes from './routes/siteConfigRoutes';

import { errorHandler, notFound } from './middleware/errorHandler';
import {
  authenticateGPT,
  gptRateLimiter,
  logGPTResponse,
  gptCorsMiddleware
} from './middleware/gptAuth';

const app: Application = express();

// Middleware GPT CORS (aplicar antes de CORS general)
app.use(gptCorsMiddleware);

// CORS Configuration
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:3000',
  'https://chat.openai.com',
  'https://chatgpt.com'
];

app.use(cors({
  origin: (origin, callback) => {
    // Permitir requests sin origin (Postman, curl, etc) en desarrollo
    if (!origin && process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para logging de GPT responses
app.use(logGPTResponse);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend server is running' });
});

// Health check específico para GPT
app.get('/api/health', (req, res) => {
  res.json({
    status: 'operational',
    service: 'MERKTOP Backend API',
    timestamp: new Date().toISOString(),
    gptIntegration: true,
    version: 'v2.0.0'
  });
});

// Middleware de autenticación condicional para rutas /api/*
// Si hay API key, es request de GPT y requiere autenticación
// Si no hay API key, es request del frontend y pasa sin autenticación
app.use('/api/*', (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'];

  // Si hay API key, es request de GPT
  if (apiKey) {
    return authenticateGPT(req, res, () => {
      gptRateLimiter(req, res, next);
    });
  }

  // Si no hay API key, continuar normal (para frontend)
  next();
});

// API Routes - Public para frontend, requieren API key para GPT
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/pages', pageRoutes);
app.use('/api/sections', sectionRoutes);
app.use('/api/portfolio', portfolioProjectRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/config', siteConfigRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;
