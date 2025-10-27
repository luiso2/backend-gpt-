# OpenAI Section

This directory contains the OpenAI-related legal pages for the Merktop platform.

## Structure

```
openai/
├── privacy/
│   ├── page.tsx           # Privacy Policy overview page
│   └── general/
│       └── page.tsx       # Full general privacy policy
├── terms/
│   └── page.tsx           # Terms & Conditions page
└── README.md              # This file
```

## Pages

### Privacy Policy (`/openai/privacy`)
- Overview page with quick summary
- Link to full general privacy policy
- Available in English and Spanish

### General Privacy Policy (`/openai/privacy/general`)
- Complete privacy policy document
- Covers data collection, usage, sharing, and user rights
- Specific section about AI agents (GPTs)
- Effective Date: October 27, 2025

### Terms & Conditions (`/openai/terms`)
- Complete terms and conditions for OpenAI services
- Covers service usage, AI interactions, intellectual property
- Available in English and Spanish
- Effective Date: October 27, 2025

## Footer Integration

These pages are accessible from the footer under the "OpenAI" section:
- Terms & Conditions → `/openai/terms`
- Privacy Policy → `/openai/privacy`

## Styling

All pages use:
- Dark green gradient background (`#0A2E1F` to `#0F3D2A`)
- Glassmorphism effects
- Framer Motion animations
- Responsive design
- Consistent with Merktop brand colors

## Translations

The pages support bilingual content (English/Spanish) through the `useLanguage` context.
