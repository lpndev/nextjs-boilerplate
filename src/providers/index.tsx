import SuspendedPostHogPageView from '@/components/posthog/page-view'
import { ThemeProvider } from '@/providers/next-themes'
import { PostHogProvider } from '@/providers/posthog'
import { QueryProvider } from '@/providers/query-provider'
import type { PropsWithChildren } from 'react'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <PostHogProvider>
          {children}
          <SuspendedPostHogPageView />
        </PostHogProvider>
      </ThemeProvider>
    </QueryProvider>
  )
}
