/** @type {import('next').NextConfig} */
const rawBasePath = process.env.BASE_PATH || ""
const normalizedBasePath = rawBasePath
  ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`
  : ""

const nextConfig = {
  basePath: normalizedBasePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.trakyadent.com.tr",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
}

export default nextConfig
