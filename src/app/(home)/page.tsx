'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import { usePosts } from '@/hooks/use-posts'

export default function Home() {
  const { data: posts, isLoading, error } = usePosts()

  return (
    <div className='space-y-6 p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl'>Hello, Next.js!</h1>
        <ThemeToggle />
      </div>

      <div className='space-y-4'>
        {isLoading && <div className='py-4 text-center'>Loading posts...</div>}

        {error && (
          <div className='py-4 text-center text-red-500'>
            Error: {error.message}
          </div>
        )}

        {posts?.map((post) => (
          <div
            key={post.id}
            className='rounded-lg border border-foreground/20 p-4'
          >
            <h2 className='font-semibold text-lg'>{post.title}</h2>
            <p className='mt-2 text-gray-600 dark:text-gray-300'>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
