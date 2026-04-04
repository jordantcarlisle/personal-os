import type { ReactNode } from 'react'
import { Layout } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'

export default async function DocsLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()

  return (
    <Layout
      pageMap={pageMap}
      docsRepositoryBase="https://github.com/jordancarlisle/personal-os"
      sidebar={{ defaultMenuCollapseLevel: 1 }}
    >
      {children}
    </Layout>
  )
}
