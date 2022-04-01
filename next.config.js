/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NBA_API_BASE_URL:"https://api-nba-v1.p.rapidapi.com"
  }
}

module.exports = nextConfig
