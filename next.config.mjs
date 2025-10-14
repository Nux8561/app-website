import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Note: i18n in App Router is handled via middleware + [locale] segments
  // Next.js 14 App Router does NOT support top-level i18n config
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX({
  ...baseConfig,
  pageExtensions: ['ts', 'tsx', 'mdx'],
});
