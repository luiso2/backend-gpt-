import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Import custom rule for hardcoded strings
const noHardcodedStringsPlugin = await import('./eslint-plugin-no-hardcoded-strings.js');

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      'custom': noHardcodedStringsPlugin.default
    },
    rules: {
      'custom/no-hardcoded-strings': ['error', {
        exemptFiles: [
          '/locales/',
          'translations.ts',
          'i18n.ts',
          '.test.',
          '.spec.',
          'constants.ts',
          'types.ts'
        ],
        allowedPatterns: [
          '^[a-zA-Z0-9-_]+$', // CSS classes and IDs
          '^https?://', // URLs
          '^mailto:', // Email links
          '^#', // Hash links
          '^\\w+\\.\\w+$', // File extensions
          '^t\\.|^t\\[', // Translation function calls
          '^className$|^id$|^key$|^role$|^aria-', // HTML attributes
          '^\\d+$' // Numbers as strings
        ]
      })
    }
  }
];

export default eslintConfig;
