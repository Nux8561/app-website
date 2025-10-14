import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const DEFAULT_LOCALE = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'de';
const SUPPORTED_LOCALES = ['de', 'en'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip middleware for public files, API routes, and Next.js internals
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/demo')
  ) {
    return;
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Redirect to default locale
    const url = req.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon)
     * - public files (images, etc)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
};

