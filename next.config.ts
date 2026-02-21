import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
     {
        protocol: 'https',
        hostname: 'ik.imagekit.io', // Replace with your domain
        // You can add 'port' if needed, e.g., port: '8080'
        pathname: '/lrigu76hy/tailark/**', // Use wildcards for dynamic paths if necessary
      },
      // Add more patterns for other domains/paths as needed
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
