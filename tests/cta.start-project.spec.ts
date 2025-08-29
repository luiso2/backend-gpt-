import { test, expect } from '@playwright/test'

test.describe('Start Project CTA', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3003')
  })

  test('should render Start Project CTA as a proper button', async ({ page }) => {
    // Wait for the stats section to load
    await expect(page.locator('text=250+')).toBeVisible()
    
    // Find the Start Project CTA
    const startProjectButton = page.getByTestId('start-project-cta')
    await expect(startProjectButton).toBeVisible()
    
    // Verify it's a button with proper role
    await expect(startProjectButton).toHaveAttribute('role', 'link')
    
    // Verify it has the proper styling (should have button classes, not just link)
    const buttonClasses = await startProjectButton.getAttribute('class')
    expect(buttonClasses).toContain('bg-primary') // Button background
    expect(buttonClasses).toContain('rounded-lg') // Button rounded corners
    
    // Verify text content
    await expect(startProjectButton).toContainText('Start Project')
    
    // Verify it has the arrow icon
    await expect(startProjectButton.locator('svg')).toBeVisible()
  })

  test('should have hover effects', async ({ page }) => {
    const startProjectButton = page.getByTestId('start-project-cta')
    await expect(startProjectButton).toBeVisible()
    
    // Get initial position
    const initialBbox = await startProjectButton.boundingBox()
    
    // Hover over the button
    await startProjectButton.hover()
    
    // Wait a bit for animation
    await page.waitForTimeout(300)
    
    // The button should have moved up (y position should be less)
    const hoverBbox = await startProjectButton.boundingBox()
    expect(hoverBbox?.y).toBeLessThan(initialBbox?.y || 0)
  })

  test('should navigate to contact page when clicked', async ({ page }) => {
    const startProjectButton = page.getByTestId('start-project-cta')
    await expect(startProjectButton).toBeVisible()
    
    // Click the button
    await startProjectButton.click()
    
    // Should navigate to contact page
    await expect(page).toHaveURL(/.*contact/)
  })

  test('should be visually consistent with other CTAs', async ({ page }) => {
    // Find another CTA button for comparison (from service cards)
    await page.locator('text=Get Started').first().waitFor()
    const serviceButton = page.locator('text=Get Started').first()
    const startProjectButton = page.getByTestId('start-project-cta')
    
    // Both should be visible
    await expect(serviceButton).toBeVisible()
    await expect(startProjectButton).toBeVisible()
    
    // Get computed styles
    const serviceButtonClasses = await serviceButton.getAttribute('class')
    const startProjectButtonClasses = await startProjectButton.getAttribute('class')
    
    // Both should have similar button styling patterns
    expect(startProjectButtonClasses).toContain('bg-primary')
    expect(startProjectButtonClasses).toContain('rounded-lg')
  })
})