/** @type {import('next').NextConfig} */
 codex/configure-deployment-for-subdirectory-mo0f6z
const rawBasePath = process.env.BASE_PATH || ""
const normalizedBasePath = rawBasePath
  ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`
  : ""

const nextConfig = {
  basePath: normalizedBasePath || undefined,

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const nextConfig = {
  basePath,
  assetPrefix: basePath || undefined,
 main
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
