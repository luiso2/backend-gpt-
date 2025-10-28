# MERKTOP Backend API Documentation

## Base URL
```
http://localhost:5001/api
```

## Overview

This is a **public API** with no authentication required. All endpoints are accessible without tokens or credentials. This API is designed to be used by GPT/AI agents to manage website content dynamically.

---

## Table of Contents

1. [Pages API](#pages-api)
2. [Sections API](#sections-api)
3. [Portfolio Projects API](#portfolio-projects-api)
4. [Services API](#services-api)
5. [Testimonials API](#testimonials-api)
6. [Site Configuration API](#site-configuration-api)
7. [Products API](#products-api)
8. [Orders API](#orders-api)
9. [Authentication API](#authentication-api)

---

## Pages API

Manage website pages dynamically.

### GET /api/pages
Get all pages.

**Query Parameters:**
- `isPublished` (boolean, optional): Filter by published status

**Example:**
```bash
curl http://localhost:5001/api/pages
curl http://localhost:5001/api/pages?isPublished=true
```

**Response:**
```json
{
  "status": "success",
  "results": 2,
  "data": {
    "pages": [
      {
        "_id": "...",
        "slug": "home",
        "title": "Home Page",
        "description": "Main landing page",
        "content": {},
        "metadata": {
          "metaTitle": "MERKTOP - Home",
          "metaDescription": "..."
        },
        "isPublished": true,
        "createdAt": "2024-10-27T...",
        "updatedAt": "2024-10-27T..."
      }
    ]
  }
}
```

### GET /api/pages/:slug
Get a specific page by slug.

**Example:**
```bash
curl http://localhost:5001/api/pages/home
```

### POST /api/pages
Create a new page.

**Body:**
```json
{
  "slug": "about",
  "title": "About Us",
  "description": "About our company",
  "content": {
    "hero": {
      "title": "About MERKTOP",
      "subtitle": "..."
    }
  },
  "metadata": {
    "metaTitle": "About Us - MERKTOP",
    "metaDescription": "Learn more about MERKTOP"
  },
  "isPublished": true
}
```

**Example:**
```bash
curl -X POST http://localhost:5001/api/pages \
  -H "Content-Type: application/json" \
  -d '{"slug":"about","title":"About Us","isPublished":true}'
```

### PUT /api/pages/:slug
Update a page.

**Example:**
```bash
curl -X PUT http://localhost:5001/api/pages/about \
  -H "Content-Type: application/json" \
  -d '{"title":"About Us - Updated","description":"New description"}'
```

### DELETE /api/pages/:slug
Delete a page.

**Example:**
```bash
curl -X DELETE http://localhost:5001/api/pages/about
```

---

## Sections API

Manage page sections dynamically.

### GET /api/sections
Get all sections.

**Query Parameters:**
- `pageSlug` (string, optional): Filter by page slug
- `isVisible` (boolean, optional): Filter by visibility

**Example:**
```bash
curl http://localhost:5001/api/sections
curl http://localhost:5001/api/sections?pageSlug=home
curl http://localhost:5001/api/sections?pageSlug=home&isVisible=true
```

### GET /api/sections/:pageSlug/:sectionKey
Get a specific section.

**Example:**
```bash
curl http://localhost:5001/api/sections/home/hero
```

### POST /api/sections
Create a new section.

**Body:**
```json
{
  "pageSlug": "home",
  "sectionKey": "hero",
  "title": "Hero Section",
  "content": {
    "heading": "Welcome to MERKTOP",
    "subheading": "AI Automation Solutions",
    "cta": {
      "text": "Get Started",
      "link": "/contact"
    }
  },
  "order": 1,
  "isVisible": true
}
```

**Example:**
```bash
curl -X POST http://localhost:5001/api/sections \
  -H "Content-Type: application/json" \
  -d '{"pageSlug":"home","sectionKey":"hero","title":"Hero","content":{},"order":1}'
```

### PUT /api/sections/:pageSlug/:sectionKey
Update a section.

**Example:**
```bash
curl -X PUT http://localhost:5001/api/sections/home/hero \
  -H "Content-Type: application/json" \
  -d '{"content":{"heading":"Updated Heading"}}'
```

### DELETE /api/sections/:pageSlug/:sectionKey
Delete a section.

**Example:**
```bash
curl -X DELETE http://localhost:5001/api/sections/home/hero
```

---

## Portfolio Projects API

Manage portfolio projects.

### GET /api/portfolio
Get all projects.

**Query Parameters:**
- `category` (string, optional): Filter by category
- `isFeatured` (boolean, optional): Filter featured projects
- `isPublished` (boolean, optional): Filter by published status

**Example:**
```bash
curl http://localhost:5001/api/portfolio
curl http://localhost:5001/api/portfolio?isFeatured=true
```

### GET /api/portfolio/:id
Get a specific project.

**Example:**
```bash
curl http://localhost:5001/api/portfolio/67...
```

### POST /api/portfolio
Create a new project.

**Body:**
```json
{
  "title": "E-Commerce Platform",
  "description": "Full-stack e-commerce solution",
  "category": "web-development",
  "tags": ["React", "Node.js", "MongoDB"],
  "image": "https://example.com/image.jpg",
  "images": ["https://example.com/img1.jpg"],
  "link": "https://project.com",
  "githubLink": "https://github.com/...",
  "technologies": ["React", "Express", "MongoDB"],
  "features": ["Cart", "Checkout", "Admin Dashboard"],
  "isFeatured": true,
  "isPublished": true,
  "order": 1
}
```

**Example:**
```bash
curl -X POST http://localhost:5001/api/portfolio \
  -H "Content-Type: application/json" \
  -d '{"title":"Project","description":"...","category":"web","technologies":[]}'
```

### PUT /api/portfolio/:id
Update a project.

**Example:**
```bash
curl -X PUT http://localhost:5001/api/portfolio/67... \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","isFeatured":false}'
```

### DELETE /api/portfolio/:id
Delete a project.

**Example:**
```bash
curl -X DELETE http://localhost:5001/api/portfolio/67...
```

---

## Services API

Manage services offered.

### GET /api/services
Get all services.

**Query Parameters:**
- `isActive` (boolean, optional): Filter by active status

**Example:**
```bash
curl http://localhost:5001/api/services
curl http://localhost:5001/api/services?isActive=true
```

### GET /api/services/:id
Get a specific service.

### POST /api/services
Create a new service.

**Body:**
```json
{
  "title": "AI Automation",
  "description": "Automate your business processes with AI",
  "icon": "🤖",
  "features": [
    "Process Automation",
    "AI Integration",
    "Custom Solutions"
  ],
  "pricing": {
    "amount": 2999,
    "currency": "USD",
    "period": "monthly"
  },
  "isActive": true,
  "order": 1
}
```

### PUT /api/services/:id
Update a service.

### DELETE /api/services/:id
Delete a service.

---

## Testimonials API

Manage customer testimonials.

### GET /api/testimonials
Get all testimonials.

**Query Parameters:**
- `isPublished` (boolean, optional): Filter by published status

**Example:**
```bash
curl http://localhost:5001/api/testimonials
curl http://localhost:5001/api/testimonials?isPublished=true
```

### GET /api/testimonials/:id
Get a specific testimonial.

### POST /api/testimonials
Create a new testimonial.

**Body:**
```json
{
  "name": "John Doe",
  "company": "Tech Corp",
  "position": "CEO",
  "content": "MERKTOP transformed our business processes...",
  "rating": 5,
  "avatar": "https://example.com/avatar.jpg",
  "isPublished": true,
  "order": 1
}
```

### PUT /api/testimonials/:id
Update a testimonial.

### DELETE /api/testimonials/:id
Delete a testimonial.

---

## Site Configuration API

Manage global site settings.

### GET /api/config
Get all configuration settings.

**Example:**
```bash
curl http://localhost:5001/api/config
```

### GET /api/config/:key
Get a specific configuration.

**Example:**
```bash
curl http://localhost:5001/api/config/site_name
```

### POST /api/config
Create a new configuration.

**Body:**
```json
{
  "key": "site_name",
  "value": "MERKTOP",
  "description": "Website name",
  "type": "string"
}
```

### PUT /api/config/:key
Update or create a configuration (upsert).

**Example:**
```bash
curl -X PUT http://localhost:5001/api/config/site_name \
  -H "Content-Type: application/json" \
  -d '{"value":"MERKTOP Updated","type":"string"}'
```

### DELETE /api/config/:key
Delete a configuration.

---

## Products API

Manage products.

### GET /api/products
Get all products.

**Query Parameters:**
- `category` (string, optional)
- `isActive` (boolean, optional)

### GET /api/products/:id
Get a product by ID.

### POST /api/products
Create a product.

**Body:**
```json
{
  "name": "Automation Package",
  "description": "Complete automation solution",
  "price": 2999,
  "category": "automation",
  "image": "https://...",
  "features": ["Feature 1", "Feature 2"],
  "isActive": true,
  "stock": 100
}
```

### PUT /api/products/:id
Update a product.

### DELETE /api/products/:id
Delete a product.

---

## Orders API

Manage orders.

### GET /api/orders
Get all orders.

**Query Parameters:**
- `userId` (string, optional): Filter by user

### GET /api/orders/:id
Get an order by ID.

### POST /api/orders
Create an order.

**Body:**
```json
{
  "userId": "67...",
  "items": [
    {
      "product": "product_id",
      "quantity": 2
    }
  ],
  "paymentMethod": "card",
  "shippingAddress": {
    "street": "123 Main St",
    "city": "Los Angeles",
    "state": "CA",
    "zipCode": "90001",
    "country": "USA"
  }
}
```

### PATCH /api/orders/:id/status
Update order status.

**Body:**
```json
{
  "status": "completed",
  "paymentStatus": "paid"
}
```

---

## Authentication API

User authentication (optional, can be used for admin features).

### POST /api/auth/register
Register a new user.

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### POST /api/auth/login
Login user.

**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### GET /api/auth/profile
Get user profile (requires authentication token).

---

## Response Format

All endpoints return JSON responses with this structure:

**Success Response:**
```json
{
  "status": "success",
  "data": {
    // Response data
  }
}
```

**Error Response:**
```json
{
  "status": "error",
  "message": "Error description"
}
```

---

## Error Codes

- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

---

## Notes for GPT/AI Integration

1. **All endpoints are public** - No authentication required
2. **Data is persistent** - MongoDB storage
3. **Flexible content** - Use `content` fields for any JSON structure
4. **Order matters** - Use `order` field to control display sequence
5. **Visibility control** - Use `isVisible`/`isPublished` flags
6. **Upsert support** - Config endpoints support upsert operations

---

## Example Workflow: Update Homepage Hero

```bash
# 1. Get current hero section
curl http://localhost:5001/api/sections/home/hero

# 2. Update hero content
curl -X PUT http://localhost:5001/api/sections/home/hero \
  -H "Content-Type: application/json" \
  -d '{
    "content": {
      "heading": "Transform Your Business with AI",
      "subheading": "Intelligent automation solutions",
      "cta": {
        "text": "Start Now",
        "link": "/contact"
      }
    }
  }'

# 3. Verify update
curl http://localhost:5001/api/sections/home/hero
```

---

## Health Check

```bash
curl http://localhost:5001/health
```

**Response:**
```json
{
  "status": "ok",
  "message": "Backend server is running"
}
```
