/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    nextScriptWorkers: true,
  },
  i18n: {
    locales: ["en-US", "fr-FR", "es-ES", "de-DE", "pt-PT"],
    defaultLocale: "en-US"
  }
}

module.exports = nextConfig
