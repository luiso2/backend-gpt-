import { useState, useCallback, useEffect } from 'react'

interface UseProjectImageProps {
  imageUrl?: string
  projectId: string
}

interface UseProjectImageReturn {
  imageError: boolean
  isLoading: boolean
  handleImageError: () => void
  handleImageLoad: () => void
  retryImage: () => void
}

/**
 * Custom hook for managing project image state
 * Provides error handling, loading states, and retry functionality
 */
export function useProjectImage({ imageUrl, projectId }: UseProjectImageProps): UseProjectImageReturn {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(!!imageUrl)
  const [retryCount, setRetryCount] = useState(0)

  const handleImageError = useCallback(() => {
    setImageError(true)
    setIsLoading(false)
    
    // Log error for monitoring (in production, send to analytics)
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Failed to load image for project ${projectId}:`, imageUrl)
    }
  }, [imageUrl, projectId])

  const handleImageLoad = useCallback(() => {
    setImageError(false)
    setIsLoading(false)
  }, [])

  const retryImage = useCallback(() => {
    if (retryCount < 3) { // Max 3 retries
      setImageError(false)
      setIsLoading(true)
      setRetryCount(prev => prev + 1)
    }
  }, [retryCount])

  // Reset states when imageUrl changes
  useEffect(() => {
    if (imageUrl) {
      setImageError(false)
      setIsLoading(true)
      setRetryCount(0)
    } else {
      setImageError(false)
      setIsLoading(false)
    }
  }, [imageUrl])

  return {
    imageError,
    isLoading,
    handleImageError,
    handleImageLoad,
    retryImage
  }
}