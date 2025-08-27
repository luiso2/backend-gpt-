import { Language } from './translations'

export const SUPPORTED_LANGUAGES: readonly Language[] = ['en', 'es'] as const

/**
 * Type guard to check if a string is a valid Language
 */
export function isValidLanguage(lang: string): lang is Language {
  return SUPPORTED_LANGUAGES.includes(lang as Language)
}

/**
 * Detects browser language preference
 */
export function getBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en'
  
  const browserLang = navigator.language.split('-')[0]
  return isValidLanguage(browserLang) ? browserLang : 'en'
}

/**
 * Gets initial language with priority: URL > localStorage > browser > default
 */
export function getInitialLanguage(defaultLang: Language = 'en'): Language {
  if (typeof window === 'undefined') return defaultLang
  
  try {
    // 1. Check URL parameter
    const urlParams = new URLSearchParams(window.location.search)
    const urlLang = urlParams.get('lang')
    if (urlLang && isValidLanguage(urlLang)) {
      return urlLang
    }
    
    // 2. Check localStorage
    const savedLang = localStorage.getItem('language')
    if (savedLang && isValidLanguage(savedLang)) {
      return savedLang
    }
    
    // 3. Check browser language
    const browserLang = getBrowserLanguage()
    if (browserLang !== 'en') {
      return browserLang
    }
    
    // 4. Return default
    return defaultLang
  } catch (error) {
    console.warn('Error detecting language preference:', error)
    return defaultLang
  }
}

/**
 * Updates URL with language parameter without page reload
 */
export function updateUrlLanguage(lang: Language): void {
  if (typeof window === 'undefined') return
  
  try {
    const url = new URL(window.location.href)
    url.searchParams.set('lang', lang)
    window.history.replaceState({}, '', url.toString())
  } catch (error) {
    console.warn('Failed to update URL with language parameter:', error)
  }
}

/**
 * Safely saves language to localStorage
 */
export function saveLanguagePreference(lang: Language): void {
  try {
    localStorage.setItem('language', lang)
  } catch (error) {
    console.warn('Failed to save language preference:', error)
  }
}