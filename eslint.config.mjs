import perfectionist from 'eslint-plugin-perfectionist'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'

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
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          internalPattern: ['@/*'],
          groups: [
            ['builtin', 'external'],
            [
              'builtin-type',
              'external-type',
              'internal-type',
              'parent-type',
              'sibling-type',
              'index-type',
            ],
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
            'style',
          ],
        },
      ],
    },
  },
]

export default config
