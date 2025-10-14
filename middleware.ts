import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const DEFAULT_LOCALE = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'de';
const SUPPORTED_LOCALES = ['de', 'en'];

// Clerk: Define protected routes (none for marketing site - all public)
const isProtectedRoute = createRouteMatcher([]);

export default clerkMiddleware(async (auth, req) => {
  // Protect routes if needed (currently all marketing routes are public)
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  // i18n locale routing
  const { pathname } = req.nextUrl;

  // Skip for public files, API routes, Clerk routes
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/demo') ||
    pathname.includes('/sign-in') ||
    pathname.includes('/sign-up')
  ) {
    return NextResponse.next();
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

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

