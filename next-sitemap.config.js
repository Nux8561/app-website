/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || `https://${process.env.NEXT_PUBLIC_MARKETING_DOMAIN || 'de.introgroup'}`,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/demo'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/demo'],
      },
    ],
  },
  transform: async (config, path) => {
    const isHome = path === '/' || path === '/de' || path === '/en';
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: isHome ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://${process.env.NEXT_PUBLIC_MARKETING_DOMAIN || 'de.introgroup'}/de${path === '/' ? '' : path}`,
          hreflang: 'de',
        },
        process.env.NEXT_PUBLIC_ENABLE_EN_LOCALE === 'true'
          ? {
              href: `https://${process.env.NEXT_PUBLIC_MARKETING_DOMAIN || 'de.introgroup'}/en${path === '/' ? '' : path}`,
              hreflang: 'en',
            }
          : null,
      ].filter(Boolean),
    };
  },
};

