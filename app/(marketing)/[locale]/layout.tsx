import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || 'de';
  
  return {
    title: {
      default: `${siteConfig.product} | ${siteConfig.name}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      'Sales Intelligence',
      'KI im Vertrieb',
      'B2B Vertrieb',
      'Deep Research',
      'Vertriebsintelligenz',
      'Gesprächsvorbereitung',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: `${siteConfig.product} | ${siteConfig.name}`,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.product,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteConfig.product} | ${siteConfig.name}`,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function MarketingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale || 'de'} suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

