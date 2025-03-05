'use client'

import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <div className='space-y-6 p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl'>Hello, Next.js!</h1>
        <ThemeToggle />
      </div>
    </div>
  )
}
