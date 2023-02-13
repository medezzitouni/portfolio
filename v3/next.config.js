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
  async headers() {
    
    // const corsWhitelist = [
    //   'http://localhost:3000',
    //   'https://methe-1.github.io',
    // ];

    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: 'https://methe-1.github.io' },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}

module.exports = nextConfig

