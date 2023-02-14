const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
