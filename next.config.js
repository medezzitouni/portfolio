/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: 'https://methe-1.github.io/portfolio/',
  basePath: '/portfolio',
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig

