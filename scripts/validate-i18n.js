#!/usr/bin/env node

/**
 * MERKTOP i18n Validation Script
 * Validates that English locale files are complete and Spanish translations exist
 */

const fs = require('fs')
const path = require('path')

const LOCALES_DIR = path.join(process.cwd(), 'src/locales')
const EN_DIR = path.join(LOCALES_DIR, 'en')
const ES_DIR = path.join(LOCALES_DIR, 'es')

function loadJsonFile(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message)
    return null
  }
}

function getAllKeys(obj, prefix = '') {
  const keys = []
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...getAllKeys(value, fullKey))
    } else {
      keys.push(fullKey)
    }
  }
  return keys
}

function validateTranslations() {
  console.log('🔍 MERKTOP i18n Validation')
  console.log('Checking translation completeness...\n')
  
  if (!fs.existsSync(EN_DIR)) {
    console.error('❌ English locale directory not found:', EN_DIR)
    process.exit(1)
  }
  
  if (!fs.existsSync(ES_DIR)) {
    console.error('❌ Spanish locale directory not found:', ES_DIR)
    process.exit(1)
  }
  
  const enFiles = fs.readdirSync(EN_DIR).filter(f => f.endsWith('.json'))
  const esFiles = fs.readdirSync(ES_DIR).filter(f => f.endsWith('.json'))
  
  let totalIssues = 0
  const results = {}
  
  // Check each English locale file
  enFiles.forEach(filename => {
    const enPath = path.join(EN_DIR, filename)
    const esPath = path.join(ES_DIR, filename)
    
    console.log(`📄 Checking ${filename}...`)
    
    const enData = loadJsonFile(enPath)
    if (!enData) {
      totalIssues++
      return
    }
    
    const enKeys = getAllKeys(enData)
    console.log(`   • English keys: ${enKeys.length}`)
    
    if (!fs.existsSync(esPath)) {
      console.log(`   ⚠️  Missing Spanish translation file`)
      totalIssues++
      results[filename] = { missing: true }
      return
    }
    
    const esData = loadJsonFile(esPath)
    if (!esData) {
      totalIssues++
      return
    }
    
    const esKeys = getAllKeys(esData)
    console.log(`   • Spanish keys: ${esKeys.length}`)
    
    // Find missing keys in Spanish
    const missingKeys = enKeys.filter(key => !esKeys.includes(key))
    const extraKeys = esKeys.filter(key => !enKeys.includes(key))
    
    if (missingKeys.length > 0) {
      console.log(`   ❌ Missing Spanish translations: ${missingKeys.length}`)
      missingKeys.forEach(key => console.log(`      - ${key}`))
      totalIssues++
    }
    
    if (extraKeys.length > 0) {
      console.log(`   ⚠️  Extra Spanish keys: ${extraKeys.length}`)
      extraKeys.forEach(key => console.log(`      + ${key}`))
    }
    
    if (missingKeys.length === 0 && extraKeys.length === 0) {
      console.log(`   ✅ Perfect translation coverage`)
    }
    
    results[filename] = {
      enKeys: enKeys.length,
      esKeys: esKeys.length,
      missingKeys,
      extraKeys
    }
    
    console.log()
  })
  
  // Check for Spanish files without English counterparts
  const orphanedEs = esFiles.filter(f => !enFiles.includes(f))
  if (orphanedEs.length > 0) {
    console.log(`⚠️  Spanish files without English base: ${orphanedEs.join(', ')}`)
    totalIssues++
  }
  
  // Summary
  console.log('📊 SUMMARY')
  console.log(`Total locale files: ${enFiles.length}`)
  console.log(`Translation coverage: ${totalIssues === 0 ? '100%' : 'Incomplete'}`)
  
  if (totalIssues === 0) {
    console.log('✅ SUCCESS: All translations are complete!')
    console.log('🌟 English is properly set as the base language.')
    console.log('🌟 Spanish translations are complete and up-to-date.')
    process.exit(0)
  } else {
    console.log(`❌ ISSUES FOUND: ${totalIssues} translation issues detected`)
    console.log('\n🛠️  RECOMMENDED ACTIONS:')
    console.log('1. Add missing Spanish translations for all English keys')
    console.log('2. Remove or explain extra Spanish keys')
    console.log('3. Ensure all UI text goes through English locale first')
    process.exit(1)
  }
}

if (require.main === module) {
  validateTranslations()
}

module.exports = { validateTranslations, getAllKeys }