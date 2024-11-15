/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig

// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during builds (for deployment)
  },
};

