'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // biome-ignore lint/style/noNonNullAssertion: We can safely assume that the environment variables are set
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageleave: true, // Enable pageleave capture
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
      person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    })
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
