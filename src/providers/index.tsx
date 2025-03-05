import { ThemeProvider } from '@/providers/theme'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      {children}
    </ThemeProvider>
  )
}
