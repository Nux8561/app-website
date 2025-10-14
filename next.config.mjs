import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const baseConfig = {
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'react'
    ],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'de',
    localeDetection: false,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX({
  ...baseConfig,
  pageExtensions: ['ts', 'tsx', 'mdx'],
});
