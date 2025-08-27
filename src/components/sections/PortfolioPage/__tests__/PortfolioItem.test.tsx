import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { LanguageProvider } from '@/contexts/LanguageContext'
import PortfolioItem from '../PortfolioItem'
import { Project } from '@/data/portfolio-projects'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  },
}))

// Mock the constants
jest.mock('../constants', () => ({
  ANIMATION_VARIANTS: {
    item: { initial: {}, animate: {}, hover: {} },
    badge: { initial: {}, animate: {} },
    button: { hover: {}, tap: {} },
  },
  PORTFOLIO_CONFIG: {
    PERFORMANCE: { FEATURED_THRESHOLD: 3 },
    ANIMATION: { ITEM_DELAY: 0.1 },
  },
}))

const mockProject: Project = {
  id: 'test-project',
  title: 'Test Project',
  category: 'web',
  description: 'A test project description',
  image: '/test-image.jpg',
  url: 'https://example.com',
  tags: ['React', 'TypeScript'],
  client: 'Test Client',
  year: '2024',
  metrics: {
    'users': '1000+',
    'performance': '95%',
  },
  color: 'blue',
}

const defaultProps = {
  project: mockProject,
  index: 0,
  isHovered: false,
  onHover: jest.fn(),
  onTagHover: jest.fn(),
  hoveredTag: null,
}

const renderWithLanguageProvider = (ui: React.ReactElement) => {
  return render(
    <LanguageProvider>
      {ui}
    </LanguageProvider>
  )
}

describe('PortfolioItem', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders project information correctly', () => {
    renderWithLanguageProvider(<PortfolioItem {...defaultProps} />)
    
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project description')).toBeInTheDocument()
    expect(screen.getByText('Test Client')).toBeInTheDocument()
    expect(screen.getByText('2024')).toBeInTheDocument()
  })

  it('displays featured badge for featured projects', () => {
    renderWithLanguageProvider(
      <PortfolioItem {...defaultProps} index={0} />
    )
    
    expect(screen.getByText('FEATURED')).toBeInTheDocument()
  })

  it('does not display featured badge for non-featured projects', () => {
    renderWithLanguageProvider(
      <PortfolioItem {...defaultProps} index={5} />
    )
    
    expect(screen.queryByText('FEATURED')).not.toBeInTheDocument()
  })

  it('renders all project tags', () => {
    renderWithLanguageProvider(<PortfolioItem {...defaultProps} />)
    
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('renders project metrics', () => {
    renderWithLanguageProvider(<PortfolioItem {...defaultProps} />)
    
    expect(screen.getByText('1000+')).toBeInTheDocument()
    expect(screen.getByText('users')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getByText('performance')).toBeInTheDocument()
  })

  it('renders demo button when URL is provided', () => {
    renderWithLanguageProvider(<PortfolioItem {...defaultProps} />)
    
    const demoButton = screen.getByRole('link', { name: /view test project demo/i })
    expect(demoButton).toBeInTheDocument()
    expect(demoButton).toHaveAttribute('href', 'https://example.com')
    expect(demoButton).toHaveAttribute('target', '_blank')
    expect(demoButton).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('does not render demo button when URL is not provided', () => {
    const projectWithoutUrl = { ...mockProject, url: undefined }
    renderWithLanguageProvider(
      <PortfolioItem {...defaultProps} project={projectWithoutUrl} />
    )
    
    expect(screen.queryByRole('link', { name: /view.*demo/i })).not.toBeInTheDocument()
  })

  it('calls onHover when mouse enters and leaves', () => {
    const onHover = jest.fn()
    renderWithLanguageProvider(
      <PortfolioItem {...defaultProps} onHover={onHover} />
    )
    
    const card = screen.getByTestId('project-card-test-project')
    
    fireEvent.mouseEnter(card)
    expect(onHover).toHaveBeenCalledWith('test-project')
    
    fireEvent.mouseLeave(card)
    expect(onHover).toHaveBeenCalledWith(null)
  })

  it('calls onTagHover when hovering over tags', () => {
    const onTagHover = jest.fn()
    renderWithLanguageProvider(
      <PortfolioItem {...defaultProps} onTagHover={onTagHover} />
    )
    
    const reactTag = screen.getByText('React')
    
    fireEvent.mouseEnter(reactTag)
    expect(onTagHover).toHaveBeenCalledWith('test-project-React')
    
    fireEvent.mouseLeave(reactTag)
    expect(onTagHover).toHaveBeenCalledWith(null)
  })

  it('applies hovered class when isHovered is true', () => {
    renderWithLanguageProvider(
      <PortfolioItem {...defaultProps} isHovered={true} />
    )
    
    const card = screen.getByTestId('project-card-test-project')
    expect(card).toHaveClass('hovered')
  })

  it('handles image loading errors gracefully', async () => {
    renderWithLanguageProvider(<PortfolioItem {...defaultProps} />)
    
    const image = screen.getByRole('img')
    
    // Simulate image load error
    fireEvent.error(image)
    
    await waitFor(() => {
      expect(screen.getByText('WEB')).toBeInTheDocument()
    })
  })

  it('displays fallback content when no image is provided', () => {
    const projectWithoutImage = { ...mockProject, image: '' }
    renderWithLanguageProvider(
      <PortfolioItem {...defaultProps} project={projectWithoutImage} />
    )
    
    expect(screen.getByText('WEB')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    renderWithLanguageProvider(<PortfolioItem {...defaultProps} />)
    
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', 'Test Project - web project')
    expect(image).toHaveAttribute('aria-describedby', 'project-test-project-description')
    
    const title = screen.getByText('Test Project')
    expect(title).toHaveAttribute('id', 'project-test-project-description')
    
    const demoButton = screen.getByRole('link', { name: /view test project demo/i })
    expect(demoButton).toHaveAttribute('aria-label', 'View Test Project demo (opens in new tab)')
  })
})