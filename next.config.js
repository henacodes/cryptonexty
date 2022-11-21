/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.coinstats.app",
        port: "80",
        pathname: "/coins/**",
      },
    ],
  },
};

module.exports = nextConfig;
