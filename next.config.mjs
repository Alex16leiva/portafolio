/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Necesario para GitHub Pages (ruta del repositorio)
  basePath: '/portafolio',
  assetPrefix: '/portafolio',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
