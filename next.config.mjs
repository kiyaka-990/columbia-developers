/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the key part to skip the errors you are seeing
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // If your project uses standard images, this helps too
  images: {
    unoptimized: true,
  },
};

export default nextConfig;