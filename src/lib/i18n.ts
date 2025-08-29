import { Language } from './translations'

// Import English locales (base/default)
import enCommon from '@/locales/en/common.json'
import enPartnerships from '@/locales/en/partnerships.json'
import enServices from '@/locales/en/services.json'

// Import Spanish locales (secondary)
import esCommon from '@/locales/es/common.json'
import esPartnerships from '@/locales/es/partnerships.json'
import esServices from '@/locales/es/services.json'

export type LocaleNamespace = 'common' | 'partnerships' | 'services'

export const locales = {
  en: {
    common: enCommon,
    partnerships: enPartnerships,
    services: enServices,
  },
  es: {
    common: esCommon, 
    partnerships: esPartnerships,
    services: esServices,
  }
} as const

export function getTranslations(language: Language, namespace: LocaleNamespace) {
  return locales[language]?.[namespace] || locales.en[namespace]
}

export function useTranslation(namespace: LocaleNamespace, language: Language = 'en') {
  const t = getTranslations(language, namespace)
  
  return {
    t,
    language
  }
}

// Utility function to get nested translation
export function getNestedTranslation(obj: any, path: string, fallback?: string): string {
  const keys = path.split('.')
  let result = obj
  
  for (const key of keys) {
    result = result?.[key]
    if (result === undefined) break
  }
  
  return result || fallback || path
}