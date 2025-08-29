/**
 * ESLint Plugin: No Hardcoded Strings
 * Prevents hardcoded Spanish text and enforces i18n usage in MERKTOP project
 */

const spanishWords = [
  // Core business terms
  'servicios', 'soluciones', 'desarrollo', 'automatización', 'consultoría', 
  'tecnología', 'innovación', 'transformación', 'digital', 'empresarial',
  'negocio', 'crecimiento', 'éxito', 'resultados', 'clientes', 'usuarios',
  'experiencia', 'satisfacción', 'calidad', 'excelencia', 'eficiencia',
  'productividad', 'escalabilidad', 'rendimiento', 'optimización',
  'personalización', 'integración', 'plataformas', 'aplicaciones', 'sistemas',
  
  // Partnership terms
  'agencias', 'consultores', 'empresas', 'establecidas', 'marketing',
  'tecnológicos', 'startups', 'scale-ups', 'soporte', 'garantizado',
  'colaboración', 'estratégica', 'crecimiento', 'conjunto', 'innovación',
  'continua', 'historias', 'éxito', 'asociación', 'partners', 'alianzas',
  
  // Common phrases
  'tienda online', 'desarrollo web', 'software a medida', 'proceso de',
  'oportunidades de', 'capacidad de', 'experiencia en', 'líder en',
  'especialistas en', 'expertos en', 'profesionales de',
  
  // Action words
  'comenzar', 'empezar', 'iniciar', 'contactar', 'solicitar', 'obtener',
  'descargar', 'enviar', 'recibir', 'completar', 'finalizar', 'terminar',
  
  // Navigation and UI
  'inicio', 'nosotros', 'portafolio', 'contacto', 'acerca', 'sobre',
  'ver más', 'leer más', 'saber más', 'conocer más', 'siguiente', 'anterior',
  'cerrar', 'abrir', 'guardar', 'cancelar', 'confirmar', 'aceptar',
  
  // Form fields
  'nombre', 'email', 'correo', 'teléfono', 'mensaje', 'empresa', 'cargo',
  'asunto', 'descripción', 'comentarios', 'observaciones',
  
  // Status messages
  'cargando', 'enviando', 'procesando', 'completado', 'error', 'éxito',
  'fallido', 'pendiente', 'confirmado', 'rechazado'
]

const spanishPattern = new RegExp(`\\b(${spanishWords.join('|')})\\b`, 'i')

function hasSpanishContent(str) {
  if (!str || typeof str !== 'string') return false
  
  // Check for Spanish words
  if (spanishPattern.test(str)) return true
  
  // Check for Spanish characters and patterns
  const spanishChars = /[ñáéíóúüÑÁÉÍÓÚÜ¿¡]/
  if (spanishChars.test(str)) return true
  
  // Check for Spanish question marks
  if (str.includes('¿') || str.includes('¡')) return true
  
  return false
}

module.exports = {
  rules: {
    'no-hardcoded-strings': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow hardcoded Spanish strings in JSX',
          category: 'Possible Errors',
          recommended: true
        },
        fixable: null,
        schema: [
          {
            type: 'object',
            properties: {
              allowedPatterns: {
                type: 'array',
                items: { type: 'string' }
              },
              exemptFiles: {
                type: 'array', 
                items: { type: 'string' }
              }
            },
            additionalProperties: false
          }
        ]
      },
      create(context) {
        const options = context.options[0] || {}
        const allowedPatterns = options.allowedPatterns || []
        const exemptFiles = options.exemptFiles || []
        
        const filename = context.getFilename()
        
        // Skip exempt files
        if (exemptFiles.some(pattern => filename.includes(pattern))) {
          return {}
        }
        
        // Skip translation files
        if (filename.includes('/locales/') || filename.includes('translations.ts')) {
          return {}
        }
        
        function isAllowedString(str) {
          // Allow single character strings
          if (str.length <= 1) return true
          
          // Allow CSS classes, IDs, and technical strings
          if (/^[\w-]+$/.test(str) && !hasSpanishContent(str)) return true
          
          // Allow URLs, emails, and technical identifiers
          if (/^(https?:\/\/|mailto:|#|\.|\w+\.\w+)/.test(str)) return true
          
          // Allow translation function calls
          if (/^t\.|t\[/.test(str)) return true
          
          // Check custom allowed patterns
          if (allowedPatterns.some(pattern => new RegExp(pattern).test(str))) {
            return true
          }
          
          return false
        }
        
        return {
          JSXText(node) {
            const text = node.value.trim()
            if (!text) return
            
            if (hasSpanishContent(text) && !isAllowedString(text)) {
              context.report({
                node,
                message: `Hardcoded Spanish text found: "${text}". Use translation function instead: {t('key.path')}`
              })
            }
          },
          
          JSXExpressionContainer(node) {
            if (node.expression.type === 'ConditionalExpression') {
              // Check ternary expressions like: language === 'es' ? 'Spanish' : 'English'
              const { consequent, alternate } = node.expression
              
              if (consequent.type === 'Literal' && hasSpanishContent(consequent.value)) {
                context.report({
                  node: consequent,
                  message: `Hardcoded Spanish text in conditional: "${consequent.value}". Use translation function instead.`
                })
              }
              
              if (alternate.type === 'Literal' && hasSpanishContent(alternate.value)) {
                context.report({
                  node: alternate,
                  message: `Hardcoded text in conditional: "${alternate.value}". Use translation function instead.`
                })
              }
            }
          },
          
          Literal(node) {
            if (typeof node.value === 'string' && node.parent) {
              const text = node.value.trim()
              if (!text) return
              
              // Skip if this literal is in a translation file or function
              if (context.getSourceCode().getText().includes('translations') ||
                  context.getSourceCode().getText().includes('locales')) return
              
              // Check for JSX attributes with Spanish content
              if (node.parent.type === 'JSXAttribute' && hasSpanishContent(text)) {
                context.report({
                  node,
                  message: `Hardcoded Spanish text in JSX attribute: "${text}". Use translation function instead.`
                })
              }
              
              // Check for object properties that might be displayed text
              if (node.parent.type === 'Property' && 
                  ['title', 'label', 'placeholder', 'description', 'content', 'text'].includes(node.parent.key?.name) &&
                  hasSpanishContent(text)) {
                context.report({
                  node,
                  message: `Hardcoded Spanish text in object property "${node.parent.key.name}": "${text}". Use translation function instead.`
                })
              }
            }
          }
        }
      }
    }
  }
}