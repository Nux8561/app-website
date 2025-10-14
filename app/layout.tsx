import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Intro Group Germany | Sales Intelligence mit KI',
    template: '%s | Intro Group Germany',
  },
  description:
    'IntroGroup Sales Intelligence – KI-gestützte Vertriebsintelligenz für den deutschen B2B-Mittelstand. Deep Research in unter 60 Sekunden.',
  keywords: [
    'Sales Intelligence',
    'KI im Vertrieb',
    'B2B Vertrieb',
    'Deep Research',
    'Vertriebsintelligenz',
  ],
  authors: [{ name: 'Intro Group Germany' }],
  creator: 'Intro Group Germany',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      `https://${process.env.NEXT_PUBLIC_MARKETING_DOMAIN || 'de.introgroup'}`
  ),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: '/',
    siteName: 'Intro Group Germany',
    title: 'Intro Group Germany | Sales Intelligence mit KI',
    description:
      'IntroGroup Sales Intelligence – KI-gestützte Vertriebsintelligenz für den deutschen B2B-Mittelstand.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intro Group Germany | Sales Intelligence mit KI',
    description:
      'IntroGroup Sales Intelligence – KI-gestützte Vertriebsintelligenz für den deutschen B2B-Mittelstand.',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

