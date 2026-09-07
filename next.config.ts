import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/standard-terms-and-conditions",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
