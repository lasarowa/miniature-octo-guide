/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: { allowedOrigins: [process.env.NEXT_PUBLIC_APP_URL || '*'] } },
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] }
};
export default nextConfig;
