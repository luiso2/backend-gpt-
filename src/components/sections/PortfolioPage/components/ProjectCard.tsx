'use client'

import { motion } from 'framer-motion'
import { Project } from '@/data/portfolio-projects'
import { ANIMATION_VARIANTS, PORTFOLIO_CONFIG } from '../constants'
import { ProjectHeader } from './ProjectHeader'
import { ProjectImage } from './ProjectImage'
import { ProjectContent } from './ProjectContent'
import { ProjectMetrics } from './ProjectMetrics'
import { ProjectActions } from './ProjectActions'

interface ProjectCardProps {
  project: Project
  index: number
  isHovered: boolean
  onHover: (id: string | null) => void
  onTagHover: (tagId: string | null) => void
  hoveredTag: string | null
}

export function ProjectCard({ 
  project, 
  index, 
  isHovered, 
  onHover, 
  onTagHover,
  hoveredTag 
}: ProjectCardProps) {
  const isFeatured = index < PORTFOLIO_CONFIG.PERFORMANCE.FEATURED_THRESHOLD

  return (
    <motion.div
      initial={ANIMATION_VARIANTS.item.initial}
      animate={ANIMATION_VARIANTS.item.animate}
      transition={{ delay: index * PORTFOLIO_CONFIG.ANIMATION.ITEM_DELAY }}
      whileHover={ANIMATION_VARIANTS.item.hover}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      className={`portfolio-card ${isHovered ? 'hovered' : ''}`}
      data-testid={`project-card-${project.id}`}
    >
      <ProjectHeader project={project} isFeatured={isFeatured} />
      <ProjectImage project={project} index={index} />
      <ProjectContent 
        project={project}
        hoveredTag={hoveredTag}
        onTagHover={onTagHover}
      />
      <ProjectMetrics metrics={project.metrics} />
      <ProjectActions project={project} index={index} />
    </motion.div>
  )
}