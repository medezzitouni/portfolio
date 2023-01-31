/** @type {import('next').NextConfig} */

const { NEXT_PUBLIC_APP_BASE_URL } = process.env

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: NEXT_PUBLIC_APP_BASE_URL,
  basePath: NEXT_PUBLIC_APP_BASE_URL,
  images: {
    loader: 'imgix',
    path: ''
  },
  
}

module.exports = nextConfig

