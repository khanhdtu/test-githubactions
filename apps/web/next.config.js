/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Transpile packages from monorepo
  transpilePackages: ['@ilotto/ui', '@ilotto/utils', '@ilotto/config'],
};

module.exports = nextConfig;
