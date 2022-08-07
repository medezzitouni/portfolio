/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  basePath: '/portfolio',
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig

