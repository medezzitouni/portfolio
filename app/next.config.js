/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/portfolio/',
  basePath: '/portfolio',
  images: {
    // deviceSizes: [320, 420, 768, 1024, 1200],
    loader: "imgix",
    path: "https://<account>.imgix.net/",
  },
}

module.exports = nextConfig

