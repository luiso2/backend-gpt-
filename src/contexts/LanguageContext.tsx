'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { translations, Language } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  
  useEffect(() => {
    // Check saved preference first, default to English
    const savedLang = localStorage.getItem('language') as Language
    setLanguage(savedLang || 'en')
  }, [])
  
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }
  
  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language]
  }
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
