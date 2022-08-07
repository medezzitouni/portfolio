/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/portfolio/',
  basePath: '/portfolio',
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig

