'use client'

import { memo, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Sparkles, ExternalLink, Code2, Store, Zap, Cpu } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Project } from '@/data/portfolio-projects'
import { ANIMATION_VARIANTS, PORTFOLIO_CONFIG } from './constants'
import styles from './PortfolioPage.module.css'

// Iconos por categoría
const categoryIcons = {
  web: Cpu,
  ecommerce: Store,
  automation: Zap,
  software: Code2,
}

// Componente para manejar las imágenes del proyecto
const ProjectImage = memo(function ProjectImage({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  const CategoryIcon = categoryIcons[project.category]
  
  // Generar un gradiente único basado en el color del proyecto
  const gradientColors = {
    green: 'from-emerald-500/20 via-green-500/20 to-teal-500/20',
    blue: 'from-blue-500/20 via-cyan-500/20 to-indigo-500/20',
    emerald: 'from-emerald-500/20 via-teal-500/20 to-green-500/20',
    purple: 'from-purple-500/20 via-violet-500/20 to-indigo-500/20',
    orange: 'from-orange-500/20 via-amber-500/20 to-yellow-500/20',
  }
  
  const gradientClass = gradientColors[project.color] || gradientColors.green
  
  if (imageError || !project.image) {
    return (
      <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${gradientClass}`}>
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30">
            <CategoryIcon className="w-10 h-10 text-primary" />
          </div>
          <p className="text-white/80 text-sm font-semibold mb-1">{project.category.toUpperCase()}</p>
          <p className="text-white/60 text-xs">{project.client}</p>
        </div>
      </div>
    )
  }
  
  return (
    <>
      <img 
        src={project.image} 
        alt={project.title}
        className={`w-full h-full object-cover transition-all duration-500 ${
          imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        } hover:scale-105`}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
      {!imageLoaded && !imageError && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${gradientClass} animate-pulse`}>
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </>
  )
})

interface PortfolioItemProps {
  project: Project
  index: number
  isHovered: boolean
  onHover: (id: string | null) => void
  onTagHover: (tagId: string | null) => void
  hoveredTag: string | null
}

const PortfolioItem = memo(function PortfolioItem({ 
  project, 
  index, 
  isHovered, 
  onHover, 
  onTagHover,
  hoveredTag 
}: PortfolioItemProps) {
  const { language } = useLanguage()
  const isFeatured = index < PORTFOLIO_CONFIG.PERFORMANCE.FEATURED_THRESHOLD

  return (
    <motion.div
      initial={ANIMATION_VARIANTS.item.initial}
      animate={ANIMATION_VARIANTS.item.animate}
      transition={{ delay: index * PORTFOLIO_CONFIG.ANIMATION.ITEM_DELAY }}
      className={`${styles.portfolioCard} ${isHovered ? 'hovered' : ''}`}
      whileHover={ANIMATION_VARIANTS.item.hover}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      data-testid={`project-card-${project.id}`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <motion.div
          className={styles.featuredBadge}
          initial={ANIMATION_VARIANTS.badge.initial}
          animate={ANIMATION_VARIANTS.badge.animate}
          transition={{ delay: 0.2 }}
        >
          <Sparkles className="w-3 h-3" />
          {language === 'es' ? 'DESTACADO' : 'FEATURED'}
        </motion.div>
      )}

      {/* Project Image */}
      <div className={styles.projectImage}>
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
          <ProjectImage project={project} />
          <div className={styles.patternOverlay} />
        </div>
      </div>

      {/* Project Content */}
      <div className={styles.projectContent}>
        {/* Meta Information */}
        <div className={styles.projectMeta}>
          <span className={styles.metaItem}>
            <Users className="w-4 h-4 text-primary" />
            {project.client}
          </span>
          <span className={styles.metaItem}>
            <Calendar className="w-4 h-4 text-primary" />
            {project.year}
          </span>
        </div>

        {/* Title and Description */}
        <h3 className={styles.projectTitle}>
          {project.title}
        </h3>
        
        <p className={styles.projectDescription}>
          {project.description}
        </p>

        {/* Tags */}
        <div className={styles.tagsContainer}>
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className={`${styles.tag} ${hoveredTag === `${project.id}-${tag}` ? 'hovered' : ''}`}
              onMouseEnter={() => onTagHover(`${project.id}-${tag}`)}
              onMouseLeave={() => onTagHover(null)}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className={styles.metricsGrid}>
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className={styles.metricItem}>
              <div className={styles.metricValue}>
                {value}
              </div>
              <div className={styles.metricLabel}>
                {key}
              </div>
            </div>
          ))}
        </div>

        {/* Demo Button */}
        {project.url && (
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.demoButton} ${isFeatured ? styles.demoButtonFeatured : ''}`}
            whileHover={ANIMATION_VARIANTS.button.hover}
            whileTap={ANIMATION_VARIANTS.button.tap}
            aria-label={`View ${project.title} demo`}
          >
            <ExternalLink className="w-4 h-4" />
            {language === 'es' ? 'Ver Demo' : 'View Demo'}
          </motion.a>
        )}
      </div>
    </motion.div>
  )
})

export default PortfolioItem