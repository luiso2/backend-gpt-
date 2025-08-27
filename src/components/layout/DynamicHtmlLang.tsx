'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DynamicHtmlLang() {
  const { language } = useLanguage()

  useEffect(() => {
    // Update the HTML lang attribute dynamically
    document.documentElement.lang = language
  }, [language])

  return null
}