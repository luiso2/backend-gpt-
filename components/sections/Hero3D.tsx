'use client'

import { useEffect, useState } from 'react'

export default function Hero3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 animate-pulse" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-bounce" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-bounce delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" />
      </div>
    </div>
  )
}