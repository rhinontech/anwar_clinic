/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.qhtclinic.com',
      },
      {
        protocol: 'https',
        hostname: 'qhtclinic.com',
      },
      {
        protocol: 'https',
        hostname: 'theuroots.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
