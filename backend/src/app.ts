import express, { Application } from 'express';
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

const app: Application = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend server is running' });
});

// API Routes - All public
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
