# MERKTOP - AI Automations & Business Development Platform

![MERKTOP Banner](public/logo.jpg)

MERKTOP is a modern Next.js 15 application built with React 19 and TypeScript, specializing in AI automation services and business development solutions. The platform showcases n8n automations, custom software development, e-commerce solutions, and digital transformation consulting.

## 🌟 Key Features

- **AI-Powered Automations**: n8n workflow integrations and intelligent process automation
- **Modern Architecture**: Next.js 15 with App Router, React 19, TypeScript, and Tailwind CSS
- **Advanced Animations**: Framer Motion with smooth transitions and interactive effects
- **AI Integration**: OpenAI and Anthropic SDK for real-time AI assistance
- **E-commerce Ready**: Stripe integration with cart and checkout functionality
- **Performance Optimized**: SSR, code splitting, image optimization, and lazy loading
- **SEO Compliant**: Dynamic metadata, Open Graph, and sitemap generation

## 🌐 Internationalization (i18n)

### Default Language Policy

**IMPORTANT: English is the default language for MERKTOP. Spanish is available as an optional toggle.**

#### Language Configuration

- **Default Language**: English (`en`)
- **Secondary Language**: Spanish (`es`) - Optional via language toggle
- **Initial State**: Application boots with English UI by default
- **Browser Detection**: If Spanish is detected in browser settings, it will be offered as an option, but English remains the default
- **URL Parameters**: `?lang=es` can override to Spanish, but all direct visits default to English

#### For Developers

When adding new features or content:

1. **Always add English strings FIRST** in the appropriate translation files
2. **English is the base locale** - all new keys must exist in English
3. **Spanish translations are secondary** - add them after English is complete
4. **Never hardcode Spanish text** - use the translation system
5. **Test English flow first** - ensure all functionality works in English before adding Spanish

#### File Structure

```
src/
├── lib/
│   ├── translations.ts         # Main translation file (English first, Spanish second)
│   └── language-utils.ts       # Language detection utilities (defaults to English)
├── contexts/
│   └── LanguageContext.tsx     # Language provider (defaults to English)
└── data/
    └── enhanced-questions.ts   # Diagnostic questions (English base)
```

#### Translation Guidelines

```typescript
// ✅ CORRECT: English first, comprehensive
export const translations = {
  en: {
    navigation: {
      home: "Home",
      services: "Services",
      contact: "Contact"
    }
  },
  es: {
    navigation: {
      home: "Inicio",
      services: "Servicios", 
      contact: "Contacto"
    }
  }
}

// ❌ INCORRECT: Spanish first or incomplete English
export const translations = {
  es: { /* Spanish content */ },
  en: { /* English content */ }  // English should always come first
}
```

#### Component Implementation

```typescript
// ✅ CORRECT: Use translation system
import { useLanguage } from '@/contexts/LanguageContext'

function MyComponent() {
  const { t, language } = useLanguage()
  return <h1>{t.navigation.home}</h1>  // Will default to English
}

// ❌ INCORRECT: Hardcoded text
function MyComponent() {
  return <h1>Inicio</h1>  // Never hardcode Spanish (or any language)
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.17.0
- npm >= 9.0.0

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd merktop

# Install dependencies
npm install

# Run development server
npm run dev
```

The application will start on `http://localhost:3000` **with English as the default language**.

### Available Scripts

```bash
npm run dev          # Start development server (English default)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS + Custom CSS Modules
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation (English error messages default)
- **State Management**: Zustand + Context API
- **AI Integration**: OpenAI SDK, Anthropic SDK
- **Payments**: Stripe
- **Deployment**: Railway (SSR optimized)

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes (health, OpenAI, Anthropic)
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services pages
│   └── layout.tsx         # Root layout (English metadata default)
├── components/
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   ├── layout/           # Navigation, Footer
│   └── ui/               # Reusable UI components
├── contexts/             # React contexts (Language, Cart)
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and translations
├── data/               # Static data (English first)
└── styles/             # CSS modules and global styles
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# AI Services
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key

# Stripe (for e-commerce features)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Application
NEXT_PUBLIC_API_URL=https://merktop.com/wp-json/wp/v2
```

### Language Detection Priority

1. URL parameter (`?lang=es`) - temporary override
2. localStorage preference - persistent user choice
3. Browser language detection - if Spanish detected, show language toggle
4. **Default fallback: English** - always English if no preference found

## 📱 Features Overview

### Core Services

1. **n8n Automation Solutions**
   - Workflow automation and integration
   - Process optimization
   - System connectivity

2. **Custom Software Development**
   - Tailored business applications
   - Scalable architecture design
   - Full-stack solutions

3. **E-commerce Platforms**
   - Online store development
   - Payment gateway integration
   - Inventory management

4. **Digital Transformation**
   - Business process analysis
   - Technology consulting
   - Growth strategy development

### Interactive Features

- **AI Panel**: Real-time assistance using OpenAI/Anthropic
- **Growth Diagnostic**: Multi-step business assessment (English default)
- **Portfolio Showcase**: Dynamic project filtering and display
- **Contact Forms**: Validated forms with multilingual support
- **Shopping Cart**: E-commerce functionality with Stripe integration

## 🔍 SEO & Metadata

- **Default Language**: English metadata and Open Graph tags
- **Structured Data**: JSON-LD for business information
- **Performance**: Optimized Core Web Vitals
- **Accessibility**: WCAG 2.1 AA compliance
- **Social Sharing**: Dynamic Open Graph and Twitter cards

## 🌟 Language Best Practices & Internationalization Rules

### **🚫 CRITICAL: NO HARDCODED STRINGS ALLOWED**

**RULE #1**: Every visible UI text MUST use the translation system. No exceptions.

```typescript
// ❌ WRONG - Hardcoded text
<h1>Servicios de Desarrollo</h1>
<button>Contactar</button>

// ✅ CORRECT - Translation system
<h1>{t.services.title}</h1>
<button>{t.buttons.contact}</button>
```

### **📋 Developer Workflow for New Features**

1. **English First**: Always implement English content first
2. **Create Locale Keys**: Add all text strings to `/src/locales/en/[namespace].json`
3. **Use Translation Function**: Reference via `{t.key.path}` in components
4. **Add Spanish Translation**: Translate to `/src/locales/es/[namespace].json` 
5. **Test Both Languages**: Verify English default + Spanish toggle work
6. **Lint Check**: Run `npm run lint` to catch any hardcoded strings

### **🗂️ Locale File Structure**

```
src/locales/
├── en/                    # English (DEFAULT/BASE)
│   ├── common.json        # Navigation, buttons, forms
│   ├── services.json      # Services page content
│   ├── partnerships.json  # Partnerships page content
│   └── [page].json        # Page-specific content
└── es/                    # Spanish (SECONDARY)
    ├── common.json        # Spanish translations
    ├── services.json      # Spanish translations  
    ├── partnerships.json  # Spanish translations
    └── [page].json        # Spanish translations
```

### **⚙️ Implementation Examples**

#### Component with i18n:
```typescript
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/lib/i18n'

export default function MyComponent() {
  const { language } = useLanguage()
  const { t } = useTranslation('common', language)
  
  return (
    <div>
      <h1>{t.navigation.home}</h1>
      <button>{t.buttons.getStarted}</button>
    </div>
  )
}
```

#### Adding New Translations:
```json
// src/locales/en/services.json
{
  "hero": {
    "title": "Our Services",
    "subtitle": "Comprehensive solutions for your business"
  }
}

// src/locales/es/services.json  
{
  "hero": {
    "title": "Nuestros Servicios", 
    "subtitle": "Soluciones integrales para tu negocio"
  }
}
```

### **🔍 Linter Rules**

We have a **STRICT** ESLint rule that prevents hardcoded strings:

- **Blocks**: Spanish text, hardcoded UI strings, conditional language text
- **Allows**: CSS classes, URLs, technical identifiers, translation calls
- **Fails Build**: Any hardcoded user-facing text will fail `npm run lint`

### **🚀 Testing Language Implementation**

```bash
# Test English defaults
npm run dev  # Should show ALL English content

# Test Spanish toggle  
# Navigate to app and switch language toggle
# Should show ALL Spanish translations

# Test linting
npm run lint  # Should catch any hardcoded strings
```

### **📏 Quality Standards**

- **TypeScript Strict Mode**: Full type safety enabled
- **ESLint Hardcode Prevention**: Zero hardcoded strings allowed
- **Translation Coverage**: 100% coverage for all UI text
- **Error Boundaries**: Graceful error handling in both languages
- **Performance**: Locale files optimized for tree-shaking

### Performance Optimization

- **Code Splitting**: Route-based and component-based splitting
- **Image Optimization**: Next.js Image component with responsive loading
- **CSS Optimization**: Tailwind CSS with purging and custom CSS modules
- **Bundle Analysis**: Regular bundle size monitoring

## 🚀 Deployment

### Railway Deployment

The application is optimized for Railway deployment with:

- **SSR Configuration**: Server-side rendering enabled
- **Build Optimization**: Webpack optimizations for production
- **Environment Handling**: Secure environment variable management
- **Health Checks**: API endpoint monitoring

### Build Process

```bash
# Production build with English as default
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🤝 Contributing

### Language Contributions

When contributing new features:

1. **English First**: Always implement English content first
2. **Translation Quality**: Ensure accurate and professional Spanish translations
3. **Context Consistency**: Maintain consistent tone across both languages
4. **Testing**: Test both language versions thoroughly

### Code Contributions

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. **Add English content first**, then Spanish translations
4. Commit changes (`git commit -m 'Add amazing feature with English default'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open Pull Request

## 📄 License

This project is private and proprietary to MERKTOP.

## 📞 Support

For questions about language implementation or technical support:

- **Email**: info@merktop.com
- **Language Issues**: Ensure English is working first, then address Spanish translations
- **Technical Support**: Include language preference in your support request

---

**Remember: MERKTOP defaults to English. Spanish is an enhancement, not the primary language.**