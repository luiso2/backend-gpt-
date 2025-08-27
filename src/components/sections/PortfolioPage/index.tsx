'use client'

import { portfolioProjects } from '@/data/portfolio-projects'
import { usePortfolioFilters } from '@/hooks/usePortfolioFilters'
import { useHoverStates } from '@/hooks/useHoverStates'
import { contentStyles, portfolioItemStyles } from './styles'
import PortfolioHero from './PortfolioHero'
import PortfolioFilters from './PortfolioFilters'
import PortfolioItem from './PortfolioItem'
import '../../../app/portfolio-animations.css'

export default function PortfolioPage() {
  const { selectedCategory, setSelectedCategory, filteredProjects } = usePortfolioFilters(portfolioProjects)
  const { hoveredItem, setHoveredItem, hoveredTag, setHoveredTag } = useHoverStates()

  return (
    <>
      <PortfolioHero />

      <section style={contentStyles.contentSection}>
        <div className="container">
          <PortfolioFilters 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div style={portfolioItemStyles.portfolioGrid}>
            {filteredProjects.map((project, index) => (
              <PortfolioItem
                key={project.id}
                project={project}
                index={index}
                isHovered={hoveredItem === project.id}
                onHover={setHoveredItem}
                onTagHover={setHoveredTag}
                hoveredTag={hoveredTag}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}