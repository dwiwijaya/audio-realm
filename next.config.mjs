/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com','assets-global.website-files.com','encrypted-tbn0.gstatic.com'],
  },
};

export default nextConfig;
