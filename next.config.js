/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    devDir: 'http://localhost:3000',
    prodDir: 'https://custom-vapes-app.vercel.app'
  },
}