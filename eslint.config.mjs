import { FlatCompat } from '@eslint/eslintrc'
import perfectionist from 'eslint-plugin-perfectionist'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const config = [
  {
    ignores: ['**/node_modules/**', '**/.next/**', '**/dist/**'],
  },
  ...compat.extends('next/core-web-vitals'),
  perfectionist.configs['recommended-natural'],
]

export default config
