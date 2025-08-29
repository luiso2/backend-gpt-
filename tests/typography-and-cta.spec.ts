import { test, expect } from '@playwright/test';

test.describe('Typography System & CTA Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3003');
  });

  test.describe('Typography System', () => {
    test('verifica que los headings usen las tipografías correctas', async ({ page }) => {
      // Verificar hero title
      const heroTitle = page.locator('h1').first();
      await expect(heroTitle).toHaveCSS('font-family', /Inter|ui-sans-serif|system-ui/);
      await expect(heroTitle).toHaveCSS('letter-spacing', /-0\.015em/);
      await expect(heroTitle).toHaveCSS('line-height', /1\.1/);

      // Verificar section titles
      const sectionTitles = page.locator('h2');
      await expect(sectionTitles.first()).toHaveCSS('letter-spacing', /-0\.010em/);
      await expect(sectionTitles.first()).toHaveCSS('line-height', /1\.15/);
    });

    test('verifica medidas tipográficas en párrafos', async ({ page }) => {
      const paragraphs = page.locator('p');
      await expect(paragraphs.first()).toHaveCSS('max-width', /65ch/);
      await expect(paragraphs.first()).toHaveCSS('line-height', /1\.6/);
    });

    test('verifica tokens tipográficos en hero', async ({ page }) => {
      const heroDescription = page.locator('.hero-description').first();
      await expect(heroDescription).toHaveCSS('max-width', /40ch/);
      await expect(heroDescription).toHaveCSS('letter-spacing', /-0\.005em/);
    });
  });

  test.describe('Start Project CTA', () => {
    test('verifica que el CTA Start Project se renderice como botón', async ({ page }) => {
      const startProjectCTA = page.getByTestId('start-project-cta');
      
      // Verificar que existe
      await expect(startProjectCTA).toBeVisible();
      
      // Verificar estilos de botón
      await expect(startProjectCTA).toHaveCSS('background-color', 'rgb(184, 233, 45)'); // #B8E92D
      await expect(startProjectCTA).toHaveCSS('border-radius', /8px|0\.5rem/);
      await expect(startProjectCTA).toHaveCSS('display', 'inline-flex');
      await expect(startProjectCTA).toHaveCSS('align-items', 'center');
      await expect(startProjectCTA).toHaveCSS('justify-content', 'center');
      
      // Verificar que no se ve como link
      await expect(startProjectCTA).not.toHaveCSS('text-decoration', 'underline');
      await expect(startProjectCTA).not.toHaveCSS('background-color', 'transparent');
    });

    test('verifica tipografía del CTA', async ({ page }) => {
      const startProjectCTA = page.getByTestId('start-project-cta');
      
      await expect(startProjectCTA).toHaveCSS('font-weight', '600');
      await expect(startProjectCTA).toHaveCSS('text-transform', 'uppercase');
      await expect(startProjectCTA).toHaveCSS('letter-spacing', /0\.1em/);
    });

    test('verifica hover effects del CTA', async ({ page }) => {
      const startProjectCTA = page.getByTestId('start-project-cta');
      
      // Hover
      await startProjectCTA.hover();
      
      // Verificar efectos de hover (shadow, transform)
      const box = await startProjectCTA.boundingBox();
      expect(box).toBeTruthy();
    });

    test('verifica funcionalidad del CTA', async ({ page }) => {
      const startProjectCTA = page.getByTestId('start-project-cta');
      
      // Verificar que es clickeable
      await expect(startProjectCTA).toBeEnabled();
      
      // Verificar que tiene href correcto
      const link = startProjectCTA.locator('a');
      await expect(link).toHaveAttribute('href', '/contact');
    });
  });

  test.describe('Glass System Integration', () => {
    test('verifica que los componentes glass se rendericen correctamente', async ({ page }) => {
      // Con glass habilitado
      await page.goto('http://localhost:3003?glass=on');
      
      const glassCards = page.locator('.glass-card');
      if (await glassCards.count() > 0) {
        await expect(glassCards.first()).toHaveCSS('backdrop-filter', /blur/);
        await expect(glassCards.first()).toHaveCSS('background-color', /rgba/);
      }
    });

    test('verifica fallbacks sin glass', async ({ page }) => {
      // Sin glass
      await page.goto('http://localhost:3003?glass=off');
      
      // Verificar que los componentes siguen funcionando
      const startProjectCTA = page.getByTestId('start-project-cta');
      await expect(startProjectCTA).toBeVisible();
      await expect(startProjectCTA).toHaveCSS('background-color', 'rgb(184, 233, 45)');
    });
  });

  test.describe('Responsive Typography', () => {
    test('verifica tipografía responsive en móvil', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      
      const heroTitle = page.locator('h1').first();
      await expect(heroTitle).toBeVisible();
      
      // Verificar que el font-size se ajuste
      const fontSize = await heroTitle.evaluate(el => getComputedStyle(el).fontSize);
      expect(parseFloat(fontSize)).toBeGreaterThan(24); // Mínimo 24px en móvil
    });

    test('verifica tipografía responsive en desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      
      const heroTitle = page.locator('h1').first();
      await expect(heroTitle).toBeVisible();
      
      // Verificar que el font-size sea mayor en desktop
      const fontSize = await heroTitle.evaluate(el => getComputedStyle(el).fontSize);
      expect(parseFloat(fontSize)).toBeGreaterThan(40); // Mayor en desktop
    });
  });

  test.describe('Performance & Accessibility', () => {
    test('verifica contraste tipográfico', async ({ page }) => {
      const heroTitle = page.locator('h1').first();
      const color = await heroTitle.evaluate(el => getComputedStyle(el).color);
      
      // Verificar que tenga color (no transparent)
      expect(color).not.toBe('rgba(0, 0, 0, 0)');
      expect(color).not.toBe('transparent');
    });

    test('verifica que los botones sean accesibles', async ({ page }) => {
      const startProjectCTA = page.getByTestId('start-project-cta');
      
      // Verificar que sea focuseable
      await startProjectCTA.focus();
      await expect(startProjectCTA).toBeFocused();
      
      // Verificar que tenga outline en focus
      const outlineStyle = await startProjectCTA.evaluate(el => getComputedStyle(el).outline);
      expect(outlineStyle).not.toBe('none');
    });
  });

  test.describe('Cross-browser Consistency', () => {
    test('verifica consistencia de renderizado', async ({ page, browserName }) => {
      const startProjectCTA = page.getByTestId('start-project-cta');
      
      await expect(startProjectCTA).toBeVisible();
      await expect(startProjectCTA).toHaveCSS('background-color', 'rgb(184, 233, 45)');
      
      // Log del navegador para debugging
      console.log(`Tested on ${browserName}`);
    });
  });
});