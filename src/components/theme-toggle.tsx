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
        className='dark:-rotate-90 scale-100 transition-all dark:scale-0'
        size={22}
        weight='duotone'
      />
      <Moon
        className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
        size={22}
        weight='duotone'
      />
    </button>
  )
}
