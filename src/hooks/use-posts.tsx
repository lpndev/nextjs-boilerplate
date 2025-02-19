import { useQuery } from '@tanstack/react-query'

interface Post {
  id: number
  title: string
  body: string
}

export function usePosts() {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10',
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
  })
}
