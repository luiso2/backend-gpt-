import dotenv from 'dotenv';
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import app from './app';
import { connectDB } from './config/database';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5001;
const HTTPS_PORT = process.env.HTTPS_PORT || 443;
const USE_HTTPS = process.env.USE_HTTPS === 'true' || false;

// Connect to database
connectDB();

let server: https.Server | http.Server;

if (USE_HTTPS) {
  // Try to load SSL certificates
  try {
    const sslKeyPath = path.join(__dirname, '../ssl/key.pem');
    const sslCertPath = path.join(__dirname, '../ssl/cert.pem');

    const httpsOptions = {
      key: fs.readFileSync(sslKeyPath),
      cert: fs.readFileSync(sslCertPath),
    };

    server = https.createServer(httpsOptions, app);
    server.listen(HTTPS_PORT, () => {
      console.log(`🔒 HTTPS Server running on port ${HTTPS_PORT}`);
      console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🔗 API URL: https://localhost:${HTTPS_PORT}/api`);
      console.log(`✅ SSL/TLS enabled`);
    });
  } catch (error) {
    console.error('❌ Could not start HTTPS server:', error);
    console.log('⚠️  Falling back to HTTP...');
    server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`🚀 HTTP Server running on port ${PORT}`);
      console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🔗 API URL: http://localhost:${PORT}/api`);
    });
  }
} else {
  // Start HTTP server
  server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`🚀 HTTP Server running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 API URL: http://localhost:${PORT}/api`);
  });
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
  console.error('UNHANDLED REJECTION! Shutting down...');
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Handle SIGTERM
process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('Process terminated!');
  });
});
