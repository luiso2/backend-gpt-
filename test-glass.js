// Quick test script to verify Liquid Glass system
// Run in browser console on http://localhost:3003

console.log('🧪 Testing Liquid Glass System...');

// Test feature flag function
console.log('Feature flag enabled:', typeof window !== 'undefined' && 
  CSS.supports('backdrop-filter', 'blur(10px)'));

// Test CSS variables
const root = document.documentElement;
const computedStyle = getComputedStyle(root);
console.log('Glass background:', computedStyle.getPropertyValue('--glass-bg'));
console.log('Glass border:', computedStyle.getPropertyValue('--glass-border'));

// Test glass components in DOM
const glassCards = document.querySelectorAll('[class*="backdrop-blur"]');
console.log(`Found ${glassCards.length} elements with backdrop-blur`);

// Test performance - measure rendering time
const startTime = performance.now();
setTimeout(() => {
  const endTime = performance.now();
  console.log(`Page rendered in: ${(endTime - startTime).toFixed(2)}ms`);
}, 100);

console.log('✅ Glass system test completed');