import type { ReactNode } from 'react'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Layout } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
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
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/jordancarlisle/personal-os"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
