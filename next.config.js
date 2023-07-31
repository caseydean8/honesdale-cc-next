/** @type {import('next').NextConfig} */
const nextConfig = {
  // the i18n object is used to configure internationalization (i18n) settings for a Next.js application
    i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["media.graphassets.com"],
  },
};
