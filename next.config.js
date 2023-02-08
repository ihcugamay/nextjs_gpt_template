/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_ORGANIZATION_KEY: process.env.OPENAI_ORGANIZATION_KEY,
  }
}

module.exports = nextConfig
