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
    ],
  },
};

export default nextConfig;
