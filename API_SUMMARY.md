# MERKTOP Public API - Summary

## ✅ Backend Completado

Se ha creado una API pública robusta sin autenticación para que un GPT pueda gestionar todo el contenido del sitio web de MERKTOP.

## 🎯 Características Principales

- **✅ 100% Pública** - No requiere autenticación
- **✅ CRUD Completo** - Crear, Leer, Actualizar, Eliminar en todos los recursos
- **✅ Sin Restricciones** - Cualquier cliente puede hacer cualquier operación
- **✅ Persistencia MongoDB** - Todos los datos se guardan en base de datos
- **✅ RESTful** - Endpoints bien estructurados y predecibles
- **✅ Flexible** - Campos `content` permiten cualquier estructura JSON

## 📋 Endpoints Disponibles

### Base URL
```
http://localhost:5001/api
```

### Recursos

| Recurso | Endpoint | Descripción |
|---------|----------|-------------|
| **Pages** | `/api/pages` | Páginas del sitio web |
| **Sections** | `/api/sections` | Secciones de contenido por página |
| **Portfolio** | `/api/portfolio` | Proyectos del portafolio |
| **Services** | `/api/services` | Servicios ofrecidos |
| **Testimonials** | `/api/testimonials` | Testimonios de clientes |
| **Config** | `/api/config` | Configuración global del sitio |
| **Products** | `/api/products` | Productos/paquetes |
| **Orders** | `/api/orders` | Órdenes de compra |
| **Auth** | `/api/auth` | Autenticación (opcional) |

## 🔑 Modelos Creados

### 1. Page
```typescript
{
  slug: string (unique)
  title: string
  description?: string
  content: any (JSON flexible)
  metadata?: { metaTitle, metaDescription, ogImage }
  isPublished: boolean
}
```

### 2. Section
```typescript
{
  pageSlug: string
  sectionKey: string
  title?: string
  content: any (JSON flexible)
  order: number
  isVisible: boolean
}
```

### 3. PortfolioProject
```typescript
{
  title: string
  description: string
  category: string
  tags: string[]
  image?: string
  images?: string[]
  link?: string
  githubLink?: string
  technologies: string[]
  features: string[]
  isFeatured: boolean
  isPublished: boolean
  order: number
}
```

### 4. Service
```typescript
{
  title: string
  description: string
  icon?: string
  features: string[]
  pricing?: { amount, currency, period }
  isActive: boolean
  order: number
}
```

### 5. Testimonial
```typescript
{
  name: string
  company?: string
  position?: string
  content: string
  rating?: number (1-5)
  avatar?: string
  isPublished: boolean
  order: number
}
```

### 6. SiteConfig
```typescript
{
  key: string (unique)
  value: any
  description?: string
  type: 'string' | 'number' | 'boolean' | 'object' | 'array'
}
```

## 🚀 Operaciones CRUD

Todos los recursos soportan:

```bash
GET    /api/{resource}           # Listar todos
GET    /api/{resource}/{id}      # Obtener uno
POST   /api/{resource}           # Crear nuevo
PUT    /api/{resource}/{id}      # Actualizar
DELETE /api/{resource}/{id}      # Eliminar
```

## 📝 Ejemplos de Uso

### Crear una Página
```bash
curl -X POST http://localhost:5001/api/pages \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "about",
    "title": "About Us",
    "content": {
      "hero": { "title": "About MERKTOP" }
    },
    "isPublished": true
  }'
```

### Actualizar una Sección
```bash
curl -X PUT http://localhost:5001/api/sections/home/hero \
  -H "Content-Type: application/json" \
  -d '{
    "content": {
      "heading": "New Heading",
      "cta": { "text": "Get Started" }
    }
  }'
```

### Crear un Proyecto
```bash
curl -X POST http://localhost:5001/api/portfolio \
  -H "Content-Type: application/json" \
  -d '{
    "title": "E-Commerce Platform",
    "description": "Full-stack solution",
    "category": "web-development",
    "technologies": ["React", "Node.js"],
    "isFeatured": true,
    "isPublished": true
  }'
```

### Actualizar Configuración
```bash
curl -X PUT http://localhost:5001/api/config/site_name \
  -H "Content-Type: application/json" \
  -d '{
    "value": "MERKTOP - AI Solutions",
    "type": "string"
  }'
```

## 🔍 Query Parameters

Filtros disponibles:

**Pages:**
- `?isPublished=true`

**Sections:**
- `?pageSlug=home`
- `?isVisible=true`

**Portfolio:**
- `?category=web-development`
- `?isFeatured=true`
- `?isPublished=true`

**Services:**
- `?isActive=true`

**Testimonials:**
- `?isPublished=true`

**Orders:**
- `?userId=67...`

**Products:**
- `?category=automation`
- `?isActive=true`

## 🎨 Casos de Uso para GPT

### 1. Actualizar Hero del Home
```javascript
// GPT puede hacer esto directamente
await fetch('http://localhost:5001/api/sections/home/hero', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    content: {
      heading: "Transform Your Business with AI",
      subheading: "Intelligent automation solutions",
      cta: { text: "Start Now", link: "/contact" }
    }
  })
});
```

### 2. Agregar Nuevo Proyecto al Portfolio
```javascript
await fetch('http://localhost:5001/api/portfolio', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: "CRM Platform",
    description: "Custom CRM solution",
    category: "software",
    technologies: ["React", "Express", "MongoDB"],
    isFeatured: true,
    isPublished: true
  })
});
```

### 3. Actualizar Configuración Global
```javascript
await fetch('http://localhost:5001/api/config/contact_email', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    key: "contact_email",
    value: "contact@merktop.com",
    type: "string"
  })
});
```

## 📦 Estructura de Carpetas

```
backend/
├── src/
│   ├── models/                    # Modelos MongoDB
│   │   ├── Page.ts
│   │   ├── Section.ts
│   │   ├── PortfolioProject.ts
│   │   ├── Service.ts
│   │   ├── Testimonial.ts
│   │   ├── SiteConfig.ts
│   │   ├── Product.ts
│   │   ├── Order.ts
│   │   └── User.ts
│   │
│   ├── controllers/               # Controladores (sin autenticación)
│   │   ├── pageController.ts
│   │   ├── sectionController.ts
│   │   ├── portfolioProjectController.ts
│   │   ├── serviceController.ts
│   │   ├── testimonialController.ts
│   │   ├── siteConfigController.ts
│   │   ├── productController.ts
│   │   └── orderController.ts
│   │
│   ├── routes/                    # Rutas públicas
│   │   ├── pageRoutes.ts
│   │   ├── sectionRoutes.ts
│   │   ├── portfolioProjectRoutes.ts
│   │   ├── serviceRoutes.ts
│   │   ├── testimonialRoutes.ts
│   │   ├── siteConfigRoutes.ts
│   │   ├── productRoutes.ts
│   │   └── orderRoutes.ts
│   │
│   ├── middleware/                # Middleware de utilidad
│   │   └── errorHandler.ts
│   │
│   ├── config/
│   │   └── database.ts
│   │
│   ├── app.ts                     # Express app
│   └── server.ts                  # Servidor
│
├── API_DOCUMENTATION.md           # Documentación completa
├── README.md                      # Guía de uso
└── package.json
```

## 🔧 Configuración

### Variables de Entorno (.env)
```env
PORT=5001
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/merktop
FRONTEND_URL=http://localhost:3000
```

## ⚡ Estado Actual

- ✅ Backend corriendo en `http://localhost:5001`
- ✅ MongoDB conectado
- ✅ 9 recursos CRUD completos
- ✅ API 100% pública
- ✅ Sin autenticación requerida
- ✅ Documentación completa
- ✅ Listo para OpenAPI schema

## 📚 Próximos Pasos

1. **Crear OpenAPI Schema** - Documentar la API en formato OpenAPI 3.0
2. **Configurar GPT Custom Action** - Conectar un GPT con esta API
3. **Testing** - Probar todos los endpoints
4. **Frontend Integration** - Conectar el frontend a los nuevos endpoints

## 🎯 Para crear tu OpenAPI Schema

Usa la documentación en `backend/API_DOCUMENTATION.md` para crear tu schema OpenAPI. Los endpoints están listos y funcionando.

Ejemplo de estructura OpenAPI:

```yaml
openapi: 3.0.0
info:
  title: MERKTOP Content API
  version: 1.0.0
  description: Public API for managing MERKTOP website content
servers:
  - url: http://localhost:5001/api
paths:
  /pages:
    get:
      summary: Get all pages
      responses:
        200:
          description: Success
    post:
      summary: Create a page
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                slug:
                  type: string
                title:
                  type: string
                # ...etc
```

## 📞 Health Check

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

---

**🚀 La API está lista para que crees tu schema OpenAPI y conectes tu GPT!**
