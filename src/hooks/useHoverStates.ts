import { useState } from 'react'

export function useHoverStates() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [hoveredTag, setHoveredTag] = useState<string | null>(null)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  return {
    hoveredItem,
    setHoveredItem,
    hoveredTag,
    setHoveredTag,
    hoveredStat,
    setHoveredStat,
  }
}