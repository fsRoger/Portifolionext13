/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output:'export',
  distDir:'dist',
  images: {
    domains: ['media.graphassets.com'],
  },
}

module.exports = nextConfig

