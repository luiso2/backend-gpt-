# MERKTOP Backend API

Backend API **100% PÚBLICO** para la plataforma MERKTOP. Construido con Node.js, Express, TypeScript y MongoDB.

## ⚠️ IMPORTANTE: API PÚBLICA

**Esta API NO requiere autenticación.** Todos los endpoints son públicos y accesibles sin tokens. Está diseñada para ser usada por GPT/AI agents para gestionar el contenido del sitio web dinámicamente.

## Características

- 🌐 **100% Pública** - Sin autenticación requerida
- 📄 **Gestión de páginas** - CRUD completo de páginas
- 📦 **Secciones de contenido** - Gestión de secciones por página
- 💼 **Portfolio** - Gestión de proyectos
- 🛠️ **Servicios** - CRUD de servicios ofrecidos
- 💬 **Testimonios** - Gestión de testimonios
- ⚙️ **Configuración** - Settings globales del sitio
- 🛍️ **Productos** - Gestión de productos
- 📦 **Órdenes** - Sistema de órdenes
- 🚨 **Manejo de errores** - Error handling centralizado

## Tecnologías

- **Node.js** - Runtime
- **Express** - Framework web
- **TypeScript** - Type safety
- **MongoDB** - Base de datos
- **Mongoose** - ODM
- **JWT** - Autenticación
- **bcryptjs** - Hash de contraseñas
- **express-validator** - Validación

## Requisitos

- Node.js 18+
- MongoDB 5.0+
- npm o yarn

## Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones
```

## Scripts

```bash
# Desarrollo con hot reload
npm run dev

# Compilar TypeScript
npm run build

# Producción
npm start
```

## Endpoints API (Todos Públicos)

### Páginas (`/api/pages`)
- `GET /api/pages` - Listar páginas
- `GET /api/pages/:slug` - Obtener página por slug
- `POST /api/pages` - Crear página
- `PUT /api/pages/:slug` - Actualizar página
- `DELETE /api/pages/:slug` - Eliminar página

### Secciones (`/api/sections`)
- `GET /api/sections` - Listar secciones (filtrar con ?pageSlug=home)
- `GET /api/sections/:pageSlug/:sectionKey` - Obtener sección
- `POST /api/sections` - Crear sección
- `PUT /api/sections/:pageSlug/:sectionKey` - Actualizar sección
- `DELETE /api/sections/:pageSlug/:sectionKey` - Eliminar sección

### Portfolio (`/api/portfolio`)
- `GET /api/portfolio` - Listar proyectos
- `GET /api/portfolio/:id` - Obtener proyecto
- `POST /api/portfolio` - Crear proyecto
- `PUT /api/portfolio/:id` - Actualizar proyecto
- `DELETE /api/portfolio/:id` - Eliminar proyecto

### Servicios (`/api/services`)
- `GET /api/services` - Listar servicios
- `GET /api/services/:id` - Obtener servicio
- `POST /api/services` - Crear servicio
- `PUT /api/services/:id` - Actualizar servicio
- `DELETE /api/services/:id` - Eliminar servicio

### Testimonios (`/api/testimonials`)
- `GET /api/testimonials` - Listar testimonios
- `GET /api/testimonials/:id` - Obtener testimonio
- `POST /api/testimonials` - Crear testimonio
- `PUT /api/testimonials/:id` - Actualizar testimonio
- `DELETE /api/testimonials/:id` - Eliminar testimonio

### Configuración (`/api/config`)
- `GET /api/config` - Listar configuraciones
- `GET /api/config/:key` - Obtener configuración
- `POST /api/config` - Crear configuración
- `PUT /api/config/:key` - Actualizar/crear configuración (upsert)
- `DELETE /api/config/:key` - Eliminar configuración

### Productos (`/api/products`)
- `GET /api/products` - Listar productos
- `GET /api/products/:id` - Obtener producto
- `POST /api/products` - Crear producto
- `PUT /api/products/:id` - Actualizar producto
- `DELETE /api/products/:id` - Eliminar producto

### Órdenes (`/api/orders`)
- `GET /api/orders` - Listar órdenes
- `GET /api/orders/:id` - Obtener órden
- `POST /api/orders` - Crear órden
- `PATCH /api/orders/:id/status` - Actualizar estado

### Autenticación (`/api/auth` - Opcional)
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Login usuario
- `GET /api/auth/profile` - Obtener perfil

## Variables de Entorno

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/merktop
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

## Estructura del Proyecto

```
backend/
├── src/
│   ├── config/         # Configuraciones
│   ├── controllers/    # Controladores
│   ├── middleware/     # Middleware
│   ├── models/         # Modelos Mongoose
│   ├── routes/         # Rutas
│   ├── types/          # Tipos TypeScript
│   ├── utils/          # Utilidades
│   ├── app.ts          # App Express
│   └── server.ts       # Servidor
├── dist/               # Código compilado
└── package.json
```

## Modelos de Datos

### User
```typescript
{
  name: string
  email: string (único)
  password: string (hasheado)
  role: 'user' | 'admin'
  isActive: boolean
}
```

### Product
```typescript
{
  name: string
  description: string
  price: number
  category: string
  image?: string
  features: string[]
  isActive: boolean
  stock: number
}
```

### Order
```typescript
{
  user: ObjectId
  items: [{
    product: ObjectId
    name: string
    price: number
    quantity: number
  }]
  totalAmount: number
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  paymentMethod: string
  paymentStatus: 'pending' | 'paid' | 'failed'
  shippingAddress?: object
}
```

## Autenticación

El backend usa JWT para autenticación. Incluye el token en el header:

```
Authorization: Bearer <token>
```

## Seguridad

- Contraseñas hasheadas con bcrypt
- Validación de datos con express-validator
- CORS configurado
- Rutas protegidas con JWT
- Roles de usuario (user/admin)

## Desarrollo

```bash
# Iniciar MongoDB (si es local)
mongod

# Iniciar servidor en modo desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:5000`

## Producción

```bash
# Compilar
npm run build

# Iniciar
npm start
```

## Health Check

```bash
curl http://localhost:5000/health
```

## Licencia

ISC
