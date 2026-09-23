/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mylovingday.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
