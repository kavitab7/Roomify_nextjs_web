/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.istockphoto.com",
      "i.pinimg.com",
      "www.symbols.com",
      "cdn.pixabay.com",
    ],
  },
};

export default nextConfig;
