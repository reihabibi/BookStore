/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['books.google.com'],
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
