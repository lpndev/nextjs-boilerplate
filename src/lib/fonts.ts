import { Inter, JetBrains_Mono } from 'next/font/google'

export const fontSans = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontMono = JetBrains_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-mono',
})
