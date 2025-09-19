import js from '@eslint/js'
import eslintConfigPrettier, { rules } from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  {
    rules: {
      'no-useless-escape': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
    ignores: ['eslint.config.mjs', 'dist/**', 'example.ts'],
  },
]
