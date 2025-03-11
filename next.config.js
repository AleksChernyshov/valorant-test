const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/valorant-test' : '',
  assetPrefix: isProd ? '/valorant-test/' : '',
  images: {
    domains: ["media.valorant-api.com"],
  },
}

module.exports = nextConfig
