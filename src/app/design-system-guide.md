# MERCATOP Design System Guide

A modern, professional UI design system inspired by QuickBooks and GitHub, built for business development applications.

## Core Principles

- **Clean & Professional**: Subtle gradients, thoughtful shadows, and modern typography
- **Mobile-First**: Responsive by default with progressive enhancement
- **Component-Based**: Reusable, modular components for consistency
- **Performance-Focused**: Smooth animations with hardware acceleration
- **Accessibility-First**: WCAG compliant with proper contrast ratios

## Color System

### Brand Colors
- Primary: `#2563eb` - Main brand color (blue)
- Secondary: `#7c3aed` - Accent purple
- Accent: `#0ea5e9` - Bright blue for highlights

### Semantic Colors
- Success: `#10b981` (green)
- Warning: `#f59e0b` (amber)
- Error: `#ef4444` (red)
- Info: `#3b82f6` (blue)

### Neutral Palette
Light mode backgrounds:
- Background: `#ffffff`
- Surface: `#f8fafc`
- Surface Secondary: `#f1f5f9`

Dark mode automatically adjusts all colors for optimal contrast.

## Typography

**Font Family**: Inter (with system font fallbacks)
- Headers: Bold/Extrabold weights with tight letter-spacing
- Body: Regular weight with relaxed line-height
- Code: SF Mono or system monospace

**Type Scale**:
- `--text-xs`: 0.75rem
- `--text-sm`: 0.875rem
- `--text-base`: 1rem
- `--text-lg`: 1.125rem
- `--text-xl`: 1.25rem
- `--text-2xl`: 1.5rem
- `--text-3xl`: 1.875rem
- `--text-4xl`: 2.25rem
- `--text-5xl`: 3rem

## Spacing System

Consistent spacing scale based on 0.25rem (4px):
- `--space-1`: 0.25rem (4px)
- `--space-2`: 0.5rem (8px)
- `--space-3`: 0.75rem (12px)
- `--space-4`: 1rem (16px)
- `--space-6`: 1.5rem (24px)
- `--space-8`: 2rem (32px)
- ... up to `--space-24`: 6rem (96px)

## Components

### Buttons
```html
<button className="btn btn-primary">Primary Action</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-ghost">Ghost Button</button>
```

Sizes: `btn-sm`, default, `btn-lg`

### Cards
```html
<div className="card">
  <div className="card-header">
    <h3 className="card-title">Title</h3>
    <p className="card-description">Description</p>
  </div>
  <div>Content</div>
</div>
```

### Service Cards
Special cards with icon headers and hover effects:
```html
<div className="service-card">
  <div className="service-icon">Icon</div>
  <h3 className="service-title">Service Name</h3>
  <p className="service-description">Description</p>
  <button className="btn btn-primary">Learn More</button>
</div>
```

### Forms
```html
<div>
  <label className="label">Label</label>
  <input className="input" type="text" placeholder="Enter text" />
</div>

<select className="select">
  <option>Option 1</option>
</select>

<label className="checkbox">
  <input type="checkbox" />
  <span className="checkbox-mark"></span>
  <span className="checkbox-label">Checkbox label</span>
</label>
```

### Navigation
```html
<nav className="nav">
  <div className="nav-brand">MERCATOP</div>
  <ul className="nav-menu">
    <li><a className="nav-link active">Home</a></li>
    <li><a className="nav-link">About</a></li>
  </ul>
</nav>
```

### Alerts
```html
<div className="alert alert-info">Information message</div>
<div className="alert alert-success">Success message</div>
<div className="alert alert-warning">Warning message</div>
<div className="alert alert-error">Error message</div>
```

### Badges
```html
<span className="badge badge-primary">Primary</span>
<span className="badge badge-success">Success</span>
```

### Modals
```html
<div className="modal-backdrop active">
  <div className="modal">
    <div className="modal-header">
      <h3 className="modal-title">Title</h3>
      <button className="modal-close">×</button>
    </div>
    <div className="modal-body">Content</div>
    <div className="modal-footer">
      <button className="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

## Grid System

Responsive grid with automatic mobile stacking:
```html
<div className="grid grid-cols-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

Available: `grid-cols-1` through `grid-cols-4`

## Animations

### Fade In
```html
<div className="animate-fadeIn">Content fades in</div>
```

### Slide In
```html
<div className="animate-slideIn">Content slides in</div>
```

### Loading States
```html
<div className="skeleton" style={{width: '200px', height: '20px'}}></div>
<div className="spinner"></div>
```

## Utility Classes

### Text Alignment
- `text-left`
- `text-center`
- `text-right`

### Flexbox
- `flex`
- `flex-col`
- `items-center`
- `justify-center`
- `justify-between`
- `gap-4`

### Spacing
- `mt-4` - margin-top
- `mb-4` - margin-bottom

### Responsive
- `hide-mobile` - Hidden on mobile
- `hide-desktop` - Hidden on desktop

## Dark Mode

The design system automatically adapts to the user's system preference. All colors, shadows, and contrasts are optimized for dark mode viewing.

## Best Practices

1. **Use semantic HTML**: Proper heading hierarchy, button vs link usage
2. **Maintain consistency**: Use the predefined components and variables
3. **Mobile-first approach**: Design for mobile, enhance for desktop
4. **Accessibility**: Include proper labels, ARIA attributes, and keyboard navigation
5. **Performance**: Use CSS transforms for animations, minimize repaints

## CSS Architecture

The system is split into two main files:
- `globals.css`: Core variables, reset, and base styles
- `components.css`: Advanced component styles

Import both in your application:
```css
import './globals.css';
import './components.css';
```

## Customization

To customize the design system, override CSS variables in your root:
```css
:root {
  --brand-primary: #your-color;
  --space-unit: 0.25rem;
}
```

This maintains consistency while allowing brand customization.