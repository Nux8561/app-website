export const siteConfig = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Intro Group Germany',
  product: process.env.NEXT_PUBLIC_PRODUCT_NAME || 'IntroGroup Sales Intelligence',
  description:
    'KI-gestützte Vertriebsintelligenz für den deutschen B2B-Mittelstand. Deep Research in unter 60 Sekunden.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://web.introki.app',
  appUrl: `https://${process.env.NEXT_PUBLIC_APP_DOMAIN || 'introgroupgermany.com'}`,
  ogImage: '/og.png',
  localeDefault: (process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'de') as 'de' | 'en',
  locales: ['de', 'en'] as const,
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@introgroupgermany.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '',
  },
  socials: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/intro-group-germany/',
  },
  analytics: {
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'de.introgroup',
  },
} as const;

export type SiteConfig = typeof siteConfig;

