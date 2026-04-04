import type { ReactNode } from 'react'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'
import './global.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata = {
  title: {
    template: '%s | Personal OS',
    default: 'Personal OS',
  },
  description: 'A markdown-based personal operating system integrating PARA, GTD, and Atomic Habits.',
  icons: {
    icon: '/personal-os/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <Head />
      <body>
        {children}
      </body>
    </html>
  )
}
