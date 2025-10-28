# Backend Integration Guide

## Resumen

Se ha creado un backend completo para MERKTOP con las siguientes características:

### Stack Tecnológico
- **Node.js** + **Express.js**
- **TypeScript**
- **MongoDB** con Mongoose
- **JWT** para autenticación
- **bcrypt** para encriptación de contraseñas

## Estructura del Proyecto

```
merktop/
├── backend/                          # Backend API
│   ├── src/
│   │   ├── controllers/              # Controladores de rutas
│   │   │   ├── authController.ts     # Autenticación
│   │   │   ├── productController.ts  # Productos
│   │   │   └── orderController.ts    # Órdenes
│   │   ├── models/                   # Modelos MongoDB
│   │   │   ├── User.ts               # Usuario
│   │   │   ├── Product.ts            # Producto
│   │   │   └── Order.ts              # Orden
│   │   ├── routes/                   # Rutas API
│   │   │   ├── authRoutes.ts
│   │   │   ├── productRoutes.ts
│   │   │   └── orderRoutes.ts
│   │   ├── middleware/               # Middleware
│   │   │   ├── auth.ts               # Autenticación JWT
│   │   │   ├── errorHandler.ts       # Manejo de errores
│   │   │   └── validator.ts          # Validación
│   │   ├── config/
│   │   │   └── database.ts           # Configuración MongoDB
│   │   ├── utils/
│   │   │   └── jwt.ts                # Utilidades JWT
│   │   ├── app.ts                    # Aplicación Express
│   │   └── server.ts                 # Servidor
│   ├── .env                          # Variables de entorno
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
└── src/                              # Frontend Next.js
    └── lib/
        └── api/                      # Cliente API
            ├── client.ts             # Cliente HTTP Axios
            ├── auth.ts               # API Autenticación
            ├── products.ts           # API Productos
            ├── orders.ts             # API Órdenes
            └── index.ts              # Exportaciones
```

## Endpoints API

### Autenticación (`/api/auth`)
- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/profile` - Obtener perfil (requiere auth)

### Productos (`/api/products`)
- `GET /api/products` - Listar productos
- `GET /api/products/:id` - Obtener producto
- `POST /api/products` - Crear producto (admin)
- `PUT /api/products/:id` - Actualizar producto (admin)
- `DELETE /api/products/:id` - Eliminar producto (admin)

### Órdenes (`/api/orders`)
- `GET /api/orders` - Listar órdenes (autenticado)
- `GET /api/orders/:id` - Obtener órden (autenticado)
- `POST /api/orders` - Crear órden (autenticado)
- `PATCH /api/orders/:id/status` - Actualizar estado (admin)

## Cómo Usar

### 1. Iniciar MongoDB

```bash
# Si tienes MongoDB instalado localmente
mongod

# O usar Docker
docker run -d -p 27017:27017 --name mongodb mongo
```

### 2. Iniciar Backend

```bash
cd backend
npm install
npm run dev
```

El backend estará disponible en: **http://localhost:5001**

### 3. Iniciar Frontend

```bash
# En la raíz del proyecto
npm run dev
```

El frontend estará disponible en: **http://localhost:3000**

## Uso del API desde el Frontend

### Ejemplo: Registro de Usuario

```typescript
import { authApi } from '@/lib/api';

const handleRegister = async () => {
  try {
    const response = await authApi.register({
      name: 'Juan Pérez',
      email: 'juan@example.com',
      password: 'password123'
    });

    console.log('Usuario registrado:', response.data.user);
    console.log('Token:', response.data.token);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Ejemplo: Obtener Productos

```typescript
import { productsApi } from '@/lib/api';

const getProducts = async () => {
  try {
    const response = await productsApi.getAll();
    console.log('Productos:', response.data.products);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Ejemplo: Crear Orden

```typescript
import { ordersApi } from '@/lib/api';

const createOrder = async () => {
  try {
    const response = await ordersApi.create({
      items: [
        { product: 'product_id', quantity: 2 }
      ],
      paymentMethod: 'card',
      shippingAddress: {
        street: '123 Main St',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: '90001',
        country: 'USA'
      }
    });

    console.log('Orden creada:', response.data.order);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## Autenticación

El sistema usa JWT (JSON Web Tokens) para autenticación:

1. Al hacer login/register, recibes un token
2. El token se guarda automáticamente en localStorage
3. Todas las peticiones autenticadas incluyen el token en el header:
   ```
   Authorization: Bearer <token>
   ```

## Variables de Entorno

### Backend (`.env`)
```env
PORT=5001
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/merktop
JWT_SECRET=merktop-backend-secret-key-2024-development
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

### Frontend (`.env.development`)
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:5001/api
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
  createdAt: Date
  updatedAt: Date
}
```

### Product
```typescript
{
  name: string
  description: string
  price: number
  category: 'automation' | 'software' | 'consulting' | 'integration' | 'other'
  image?: string
  features: string[]
  isActive: boolean
  stock: number
  createdAt: Date
  updatedAt: Date
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
  shippingAddress?: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  createdAt: Date
  updatedAt: Date
}
```

## Testing

### Health Check
```bash
curl http://localhost:5001/health
```

### Registro de Usuario
```bash
curl -X POST http://localhost:5001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Listar Productos
```bash
curl http://localhost:5001/api/products
```

## Seguridad

- ✅ Contraseñas hasheadas con bcrypt
- ✅ JWT para autenticación
- ✅ CORS configurado
- ✅ Validación de datos
- ✅ Rutas protegidas con middleware
- ✅ Roles de usuario (user/admin)

## Próximos Pasos

1. **Crear componentes de UI** en el frontend para usar el API
2. **Agregar páginas de login/register** en Next.js
3. **Implementar dashboard de admin** para gestionar productos
4. **Agregar página de perfil de usuario**
5. **Crear flujo completo de checkout** conectado al backend
6. **Implementar notificaciones por email** para órdenes
7. **Agregar upload de imágenes** para productos

## Notas Importantes

- El backend corre en el puerto **5001** (el 5000 estaba ocupado)
- MongoDB debe estar corriendo antes de iniciar el backend
- El token JWT expira en 7 días por defecto
- Los productos inicialmente están vacíos (base de datos limpia)
- Puedes crear un usuario admin manualmente en MongoDB o agregar un endpoint de seeding

## Soporte

Para más información sobre el backend, consulta el README en `/backend/README.md`
