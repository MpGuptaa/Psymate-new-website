/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "psymate-file-uploads.s3.ap-south-1.amazonaws.com",
      "ik.imagekit.io",
    ],
  },
};

module.exports = nextConfig;
