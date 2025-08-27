'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect, useMemo } from 'react'
import { translations, Language } from '@/lib/translations'
import { 
  getInitialLanguage, 
  isValidLanguage, 
  updateUrlLanguage, 
  saveLanguagePreference 
} from '@/lib/language-utils'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
}

interface LanguageProviderProps {
  children: ReactNode
  defaultLanguage?: Language
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

/**
 * Language Provider component that manages language state and provides
 * translation functions throughout the application.
 * 
 * Features:
 * - URL parameter detection (?lang=en|es)
 * - localStorage persistence
 * - Automatic URL synchronization
 * - Graceful error handling
 * - SSR-safe initialization
 */

export function LanguageProvider({ children, defaultLanguage = 'en' }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage(defaultLanguage))
  
  useEffect(() => {
    const initialLang = getInitialLanguage(defaultLanguage)
    
    // Only update if different from current state
    if (initialLang !== language) {
      setLanguage(initialLang)
    }
    
    // Safely update localStorage
    saveLanguagePreference(initialLang)
  }, [])
  
  const handleSetLanguage = (lang: Language) => {
    // Validate language before setting
    if (!isValidLanguage(lang)) {
      console.warn(`Unsupported language: ${lang}. Falling back to English.`)
      lang = 'en'
    }
    
    setLanguage(lang)
    
    // Update localStorage and URL
    saveLanguagePreference(lang)
    updateUrlLanguage(lang)
  }
  
  const value = useMemo(() => ({
    language,
    setLanguage: handleSetLanguage,
    t: translations[language]
  }), [language])
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Hook to access language context
 * @throws {Error} When used outside of LanguageProvider
 * @returns {LanguageContextType} Language context with current language, setter, and translations
 */
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
