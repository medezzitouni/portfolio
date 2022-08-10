/** @type {import('next').NextConfig} */

const { ENV } = process.env

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: ENV == 'dev' ? '' : '/portfolio/',
  basePath: ENV == 'dev' ? '' : '/portfolio/',
  images: {
    loader: 'imgix',
    path: ''
  },
  
}

module.exports = nextConfig

