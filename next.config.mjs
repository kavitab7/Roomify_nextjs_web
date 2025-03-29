/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.istockphoto.com",
      "i.pinimg.com",
      "www.symbols.com",
      "cdn.pixabay.com",
      "source.unsplash.com",
      "encrypted-tbn0.gstatic.com"
    ],
  },
};

export default nextConfig;
