#!/usr/bin/env node

/**
 * MERKTOP i18n Checker
 * Scans codebase for hardcoded Spanish strings and enforces i18n compliance
 */

const fs = require('fs')
const path = require('path')
const glob = require('glob')

const SPANISH_PATTERNS = [
  // Business terms
  /\b(servicios|soluciones|desarrollo|automatización|consultoría)\b/gi,
  /\b(tecnología|innovación|transformación|empresarial|negocio)\b/gi,
  /\b(crecimiento|éxito|resultados|clientes|usuarios|experiencia)\b/gi,
  /\b(satisfacción|calidad|excelencia|eficiencia|productividad)\b/gi,
  
  // Partnership terms  
  /\b(agencias|consultores|empresas|establecidas|marketing)\b/gi,
  /\b(tecnológicos|soporte|garantizado|colaboración|estratégica)\b/gi,
  
  // UI terms
  /\b(inicio|nosotros|portafolio|contacto|siguiente|anterior)\b/gi,
  /\b(comenzar|empezar|solicitar|obtener|descargar|enviar)\b/gi,
  
  // Form terms
  /\b(nombre|email|correo|teléfono|mensaje|empresa|descripción)\b/gi,
  
  // Status
  /\b(cargando|enviando|procesando|completado|éxito|error)\b/gi,
  
  // Spanish characters
  /[ñáéíóúüÑÁÉÍÓÚÜ¿¡]/g,
  
  // Common phrases
  /tienda online|desarrollo web|software a medida|proceso de/gi,
  /oportunidades de|capacidad de|experiencia en|líder en/gi
]

const EXEMPT_PATTERNS = [
  /\/locales\//,
  /translations\.ts$/,
  /i18n\.ts$/,
  /\.test\./,
  /\.spec\./,
  /constants\.ts$/,
  /types\.ts$/,
  /node_modules/
]

const ALLOWED_PATTERNS = [
  /^[a-zA-Z0-9-_]+$/, // CSS classes
  /^https?:\/\//, // URLs
  /^mailto:/, // Emails
  /^t\./, // Translation calls
  /^className$|^id$|^key$|^role$/, // HTML attributes
]

function isExemptFile(filePath) {
  return EXEMPT_PATTERNS.some(pattern => pattern.test(filePath))
}

function isAllowedString(str) {
  if (!str || str.length <= 1) return true
  return ALLOWED_PATTERNS.some(pattern => pattern.test(str))
}

function hasSpanishContent(content) {
  return SPANISH_PATTERNS.some(pattern => pattern.test(content))
}

function extractStrings(content) {
  const strings = []
  
  // JSX text content
  const jsxTextRegex = />[^<>]*[ñáéíóúüÑÁÉÍÓÚÜ¿¡]/g
  let match
  while ((match = jsxTextRegex.exec(content)) !== null) {
    const text = match[0].substring(1).trim()
    if (text && !isAllowedString(text)) {
      strings.push({ type: 'JSX Text', content: text })
    }
  }
  
  // String literals
  const stringLiteralRegex = /(['"`])([^'"`]*[ñáéíóúüÑÁÉÍÓÚÜ¿¡][^'"`]*)\1/g
  while ((match = stringLiteralRegex.exec(content)) !== null) {
    const text = match[2].trim()
    if (text && !isAllowedString(text)) {
      strings.push({ type: 'String Literal', content: text })
    }
  }
  
  // Template literals
  const templateLiteralRegex = /`([^`]*[ñáéíóúüÑÁÉÍÓÚÜ¿¡][^`]*)`/g
  while ((match = templateLiteralRegex.exec(content)) !== null) {
    const text = match[1].trim()
    if (text && !isAllowedString(text)) {
      strings.push({ type: 'Template Literal', content: text })
    }
  }
  
  return strings
}

function checkFile(filePath) {
  if (isExemptFile(filePath)) return []
  
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const issues = []
    
    // Check for Spanish content
    if (hasSpanishContent(content)) {
      const strings = extractStrings(content)
      strings.forEach(str => {
        issues.push({
          file: filePath,
          type: str.type,
          content: str.content,
          message: `Hardcoded Spanish text found: "${str.content}"`
        })
      })
    }
    
    return issues
  } catch (error) {
    console.warn(`Warning: Could not read file ${filePath}:`, error.message)
    return []
  }
}

function main() {
  console.log('🔍 MERKTOP i18n Compliance Checker')
  console.log('Scanning for hardcoded Spanish strings...\n')
  
  const srcPattern = path.join(process.cwd(), 'src/**/*.{ts,tsx,js,jsx}')
  const files = glob.sync(srcPattern)
  
  let totalIssues = 0
  const issuesByFile = {}
  
  files.forEach(file => {
    const issues = checkFile(file)
    if (issues.length > 0) {
      issuesByFile[file] = issues
      totalIssues += issues.length
    }
  })
  
  // Report results
  if (totalIssues === 0) {
    console.log('✅ SUCCESS: No hardcoded Spanish strings found!')
    console.log('🌟 All UI text is properly using the i18n system.')
    process.exit(0)
  } else {
    console.log(`❌ FAILED: Found ${totalIssues} hardcoded Spanish strings\n`)
    
    Object.entries(issuesByFile).forEach(([file, issues]) => {
      console.log(`📄 ${path.relative(process.cwd(), file)}`)
      issues.forEach(issue => {
        console.log(`   • ${issue.type}: "${issue.content}"`)
      })
      console.log()
    })
    
    console.log('🛠️  TO FIX:')
    console.log('1. Move all hardcoded text to /src/locales/en/[namespace].json')
    console.log('2. Create Spanish translations in /src/locales/es/[namespace].json')
    console.log('3. Use {t.key.path} in components instead of hardcoded strings')
    console.log('4. Run this script again to verify fixes')
    console.log()
    console.log('📚 See README.md for detailed i18n implementation guide')
    
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

module.exports = { checkFile, hasSpanishContent }