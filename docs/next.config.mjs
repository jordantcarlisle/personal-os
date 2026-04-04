import nextra from 'nextra'

const withNextra = nextra({
  // Nextra config
})

export default withNextra({
  output: 'export',
  basePath: '/personal-os',
  images: { unoptimized: true },
  reactStrictMode: true
})
