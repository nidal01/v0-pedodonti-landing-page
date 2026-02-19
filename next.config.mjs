/** @type {import('next').NextConfig} */
const rawBasePath = process.env.BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH || ""
const normalizedBasePath = rawBasePath
  ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`
  : ""

const nextConfig = {
  basePath: normalizedBasePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: normalizedBasePath,
  },
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
  async redirects() {
    if (!normalizedBasePath) {
      return []
    }

    return [
      {
        source: "/images/:path*",
        destination: `${normalizedBasePath}/images/:path*`,
        permanent: false,
        basePath: false,
      },
      {
        source: "/api/:path*",
        destination: `${normalizedBasePath}/api/:path*`,
        permanent: false,
        basePath: false,
      },
    ]
  },
  async rewrites() {
    if (normalizedBasePath) {
      return []
    }

    return [
      {
        source: "/pedodonti",
        destination: "/",
      },
      {
        source: "/pedodonti/:path*",
        destination: "/:path*",
      },
    ]
  },
}

export default nextConfig
