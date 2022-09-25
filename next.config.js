/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    nextScriptWorkers: true,
  },
  i18n: {
    locales: ["en", "fr", "es", "de", "pt", "it"],
    defaultLocale: "en"
  }
}

module.exports = nextConfig
