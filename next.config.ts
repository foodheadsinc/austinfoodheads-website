import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/s2/favicons",
      },
    ],
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
