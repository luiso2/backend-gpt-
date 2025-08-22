#!/bin/bash

echo "🚀 Starting MERKTOP Development Server..."

# Kill any process on port 3000
echo "📌 Checking port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Clean Next.js cache
echo "🧹 Cleaning cache..."
rm -rf .next

# Set proper environment
export NODE_ENV=development

# Install dependencies with legacy peer deps
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Start the dev server
echo "✨ Starting server on http://localhost:3000"
npm run dev