'use client'

import { memo } from 'react'
import { Project } from '@/data/portfolio-projects'
import { useProjectImage } from '@/hooks/useProjectImage'

interface ProjectImageProps {
  project: Project
  className?: string
}

/**
 * ProjectImage component handles image loading with graceful fallback
 * Uses custom hook for better state management and error handling
 */
const ProjectImage = memo(function ProjectImage({ 
  project, 
  className = "w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
}: ProjectImageProps) {
  const { 
    imageError, 
    isLoading, 
    handleImageError, 
    handleImageLoad 
  } = useProjectImage({ 
    imageUrl: project.image, 
    projectId: project.id 
  })

  const showFallback = !project.image || imageError

  return (
    <>
      {project.image && !imageError && (
        <img 
          src={project.image} 
          alt={`${project.title} - ${project.category} project`}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          loading="lazy"
          onError={handleImageError}
          onLoad={handleImageLoad}
          role="img"
          aria-describedby={`project-${project.id}-description`}
        />
      )}
      {showFallback && (
        <ProjectImageFallback project={project} />
      )}
      {isLoading && project.image && (
        <ProjectImageSkeleton />
      )}
    </>
  )
})

/**
 * Loading skeleton component
 */
const ProjectImageSkeleton = memo(function ProjectImageSkeleton() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20 animate-pulse">
      <div className="flex items-center justify-center h-full">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    </div>
  )
})

/**
 * Fallback component when image fails to load or doesn't exist
 */
const ProjectImageFallback = memo(function ProjectImageFallback({ project }: { project: Project }) {
  // Category-specific icons for better visual representation
  const getCategoryIcon = (category: Project['category']) => {
    const icons = {
      web: '🌐',
      ecommerce: '🛒',
      automation: '⚡',
      software: '💻'
    } as const
    return icons[category] || '🚀'
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-dark/10">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center transition-transform hover:scale-110">
          <span className="text-2xl" role="img" aria-label={`${project.category} project`}>
            {getCategoryIcon(project.category)}
          </span>
        </div>
        <p className="text-white/60 text-sm font-medium">
          {project.category.toUpperCase()}
        </p>
      </div>
    </div>
  )
})

export default ProjectImage