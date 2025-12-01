/** @type {import('next').NextConfig} */
const nextConfig = {
  // <CHANGE> Added output export for static GitHub Pages deployment
  output: 'export',
  // <CHANGE> Added basePath for GitHub Pages repository (portafolio)
  basePath: '/portafolio',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
