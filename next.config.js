/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  basePath: "",
  eslint: {
    dirs: ["."],
  },
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/usourced-platform.appspot.com/**",
      },
    ],
  },
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
});
