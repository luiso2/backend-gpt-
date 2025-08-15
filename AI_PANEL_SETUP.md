# AI Panel - OpenAI Integration

## 🚀 Descripción

El AI Panel de Mercatop es un asistente inteligente integrado con OpenAI GPT-3.5 que ofrece tres modos de operación:

- **🛠️ Build (Construir)**: Ayuda con planificación de arquitectura y desarrollo de software
- **⚡ Automate (Automatizar)**: Diseña flujos de trabajo y automatizaciones con n8n
- **📊 Analyze (Analizar)**: Proporciona análisis empresariales y recomendaciones estratégicas

## 📋 Requisitos

1. **Clave API de OpenAI**: Necesitas una clave API válida de OpenAI
2. **Node.js 18+**: Para ejecutar el servidor Next.js
3. **Variables de entorno**: Configuración correcta del archivo `.env.local`

## 🔧 Configuración

### 1. Obtener clave API de OpenAI

1. Ve a [OpenAI Platform](https://platform.openai.com/)
2. Crea una cuenta o inicia sesión
3. Ve a [API Keys](https://platform.openai.com/api-keys)
4. Crea una nueva clave API
5. Copia la clave (solo se muestra una vez)

### 2. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# Copia el archivo de ejemplo
cp .env.example .env.local
```

Edita `.env.local` y agrega tu clave API:

```env
# OpenAI API Configuration
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Resto de configuraciones...
```

### 3. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 4. Ejecutar el proyecto

```bash
npm run dev
# o
yarn dev
```

## 💡 Uso del AI Panel

### Abrir el Panel

1. En la página principal, haz clic en el botón "Hablar con IA" o "Chat with AI"
2. El panel se abrirá en modo modal sobre la página

### Seleccionar Modo

Elige uno de los tres modos según tu necesidad:

- **Build**: Para proyectos de desarrollo
- **Automate**: Para automatizaciones
- **Analyze**: Para análisis empresarial

### Hacer Consultas

1. **Escribir consulta**: Escribe tu pregunta o solicitud en el área de texto
2. **Usar sugerencias**: Haz clic en las sugerencias predefinidas para empezar rápido
3. **Enviar**: Presiona "Enviar" o Ctrl+Enter para obtener respuesta
4. **Ver respuesta**: La IA responderá en el chat con recomendaciones detalladas

### Características del Chat

- **Historial de conversación**: Mantiene el contexto de la conversación
- **Indicador de carga**: Muestra cuando la IA está procesando
- **Timestamps**: Cada mensaje muestra la hora de envío
- **Limpiar chat**: Botón para reiniciar la conversación
- **Manejo de errores**: Mensajes claros si hay problemas de conexión

## 🎨 Personalización

### Modificar System Prompts

Edita los prompts del sistema en `/api/openai/route.ts`:

```typescript
const systemPrompts = {
  build: `Tu prompt personalizado para desarrollo...`,
  automate: `Tu prompt personalizado para automatización...`,
  analyze: `Tu prompt personalizado para análisis...`
};
```

### Cambiar Modelo de IA

En `/api/openai/route.ts`, puedes cambiar el modelo:

```typescript
const openAIRequest = {
  model: 'gpt-4', // Cambiar a gpt-4 si tienes acceso
  // ...resto de configuración
};
```

### Ajustar Parámetros

Modifica los parámetros de la API según necesites:

```typescript
temperature: 0.7,  // 0-1: Creatividad (0=conservador, 1=creativo)
max_tokens: 1500,  // Límite de tokens en la respuesta
top_p: 1,         // Nucleus sampling
```

## 📊 Límites y Costos

### Límites de la API

- **Rate Limits**: Depende de tu plan en OpenAI
- **Token Limits**: 
  - GPT-3.5: 4,096 tokens por conversación
  - GPT-4: 8,192 o 32,768 tokens según versión

### Estimación de Costos

- **GPT-3.5 Turbo**: ~$0.002 por 1K tokens
- **GPT-4**: ~$0.03 por 1K tokens (input) + $0.06 (output)

### Monitoreo de Uso

El endpoint devuelve información de uso:

```json
{
  "usage": {
    "prompt_tokens": 150,
    "completion_tokens": 350,
    "total_tokens": 500
  }
}
```

## 🔒 Seguridad

### Mejores Prácticas

1. **Nunca expongas tu API key en el frontend**
2. **Usa variables de entorno** para todas las credenciales
3. **Implementa rate limiting** para evitar abuso
4. **Valida y sanitiza** todas las entradas de usuario
5. **Monitorea el uso** para detectar anomalías

### Rate Limiting (Opcional)

Puedes agregar rate limiting en el endpoint:

```typescript
// Ejemplo con express-rate-limit
const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10 // límite de 10 requests por ventana
};
```

## 🐛 Solución de Problemas

### Error: "OpenAI API key not configured"

**Solución**: Verifica que hayas configurado `OPENAI_API_KEY` en `.env.local`

### Error: "Failed to get response from OpenAI"

**Posibles causas**:
- API key inválida o expirada
- Límite de rate alcanzado
- Problemas de conectividad
- Créditos agotados en OpenAI

### El chat no responde

**Verificar**:
1. Consola del navegador para errores
2. Logs del servidor Next.js
3. Estado de la API de OpenAI: https://status.openai.com/

## 📚 Recursos

- [OpenAI Documentation](https://platform.openai.com/docs)
- [API Reference](https://platform.openai.com/docs/api-reference)
- [Pricing](https://openai.com/pricing)
- [Best Practices](https://platform.openai.com/docs/guides/safety-best-practices)

## 🤝 Soporte

Para soporte técnico o preguntas:
- Email: support@mercatop.com
- Discord: [Mercatop Community](https://discord.gg/mercatop)
- GitHub Issues: [mercatop/ai-panel](https://github.com/mercatop/ai-panel)

---

**Nota**: Recuerda mantener tu API key segura y nunca compartirla públicamente.
