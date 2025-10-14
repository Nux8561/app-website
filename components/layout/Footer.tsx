import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">
              KI-gestützte Vertriebsintelligenz für den deutschen B2B-Mittelstand.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/de/features"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/de/pricing"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.appUrl}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Web App
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Unternehmen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/de/legal/impressum"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/de/legal/datenschutz"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/de/legal/agb"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {siteConfig.name}. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}

