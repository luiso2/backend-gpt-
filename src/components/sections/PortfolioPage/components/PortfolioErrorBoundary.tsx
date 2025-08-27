'use client'

import { Component, ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class PortfolioErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Portfolio Error:', error, errorInfo)
    // Here you could send to error reporting service
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Something went wrong loading the portfolio
          </h3>
          <p className="text-white/70 mb-6 max-w-md">
            We encountered an error while loading the portfolio projects. Please try again.
          </p>
          <button
            onClick={this.handleRetry}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-dark-green rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}