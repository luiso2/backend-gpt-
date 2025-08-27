import { useState, useMemo, useCallback } from 'react'
import { Project, ProjectCategory } from '@/data/portfolio-projects'

export function usePortfolioFilters(projects: Project[]) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ProjectCategory>('all')

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return projects
    }
    return projects.filter(project => project.category === selectedCategory)
  }, [projects, selectedCategory])

  const categoryStats = useMemo(() => {
    const stats = projects.reduce((acc, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1
      return acc
    }, {} as Record<ProjectCategory, number>)
    
    return {
      all: projects.length,
      ...stats,
    }
  }, [projects])

  const handleCategoryChange = useCallback((category: 'all' | ProjectCategory) => {
    setSelectedCategory(category)
  }, [])

  return {
    selectedCategory,
    setSelectedCategory: handleCategoryChange,
    filteredProjects,
    categoryStats,
  }
}