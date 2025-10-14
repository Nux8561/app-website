'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Features', href: '/de/features' },
  { name: 'Pricing', href: '/de/pricing' },
  { name: 'Blog', href: '/de/blog' },
  { name: 'Kontakt', href: '/de/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/de" className="text-xl font-bold tracking-tight">
              {siteConfig.name}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-foreground',
                  pathname === item.href ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  Anmelden
                </button>
              </SignInButton>
              <Link
                href="/de/auth"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90"
              >
                Kostenlos starten
              </Link>
            </SignedOut>
            <SignedIn>
              <Link
                href={siteConfig.appUrl}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90"
              >
                Zur App
              </Link>
              <UserButton afterSignOutUrl="/de" />
            </SignedIn>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <SignedIn>
              <UserButton afterSignOutUrl="/de" />
            </SignedIn>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menü öffnen</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 border-t border-border px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block rounded-md px-3 py-2 text-base font-medium',
                  pathname === item.href
                    ? 'bg-accent text-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 space-y-2 px-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-accent">
                    Anmelden
                  </button>
                </SignInButton>
                <Link
                  href="/de/auth"
                  className="block w-full rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kostenlos starten
                </Link>
              </SignedOut>
              <SignedIn>
                <Link
                  href={siteConfig.appUrl}
                  className="block w-full rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Zur App
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

