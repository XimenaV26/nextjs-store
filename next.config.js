/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
};
