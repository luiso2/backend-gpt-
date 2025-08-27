'use client'

import { motion } from 'framer-motion'
import { Filter, Code2, Cpu, Store, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { contentStyles } from './styles'

interface Category {
  id: string
  name: string
  icon: React.ComponentType<{ style?: React.CSSProperties }>
}

interface PortfolioFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function PortfolioFilters({ 
  selectedCategory, 
  onCategoryChange 
}: PortfolioFiltersProps) {
  const { t } = useLanguage()

  const categories: Category[] = [
    { id: 'all', name: t.portfolioPage.filter.all, icon: Filter },
    { id: 'web', name: t.portfolioPage.filter.web, icon: Cpu },
    { id: 'ecommerce', name: t.portfolioPage.filter.ecommerce, icon: Store },
    { id: 'automation', name: t.portfolioPage.filter.automation, icon: Zap },
    { id: 'software', name: t.portfolioPage.filter.software, icon: Code2 },
  ]

  return (
    <motion.div 
      style={contentStyles.filtersContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          style={{
            ...contentStyles.filterBtn,
            ...(selectedCategory === category.id ? contentStyles.filterBtnActive : {}),
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={(e) => {
            if (selectedCategory !== category.id) {
              Object.assign(e.currentTarget.style, contentStyles.filterBtnHover)
            }
          }}
          onMouseLeave={(e) => {
            if (selectedCategory !== category.id) {
              Object.assign(e.currentTarget.style, contentStyles.filterBtn)
            }
          }}
        >
          <category.icon style={{ width: '18px', height: '18px' }} />
          {category.name}
        </motion.button>
      ))}
    </motion.div>
  )
}