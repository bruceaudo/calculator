import { DarkModeContextProvider } from './contexts/Darkmode'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculator',
  description: 'Free calculator for your maths assignments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <DarkModeContextProvider>
        <body>{children}</body>
      </DarkModeContextProvider>
    </html>
  )
}
