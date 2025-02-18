'use client'

import { cn } from '@/lib/utils'
import { Moon, Sun } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme()

  return (
    <button
      type='button'
      className={cn('flex cursor-pointer items-center', className)}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun
        className='scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90'
        weight='duotone'
      />
      <Moon
        className='absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0'
        weight='duotone'
      />
    </button>
  )
}
