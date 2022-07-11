/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  images: {
    domains: ["cdn.akamai.steamstatic.com"],
  },
}

module.exports = nextConfig
