'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

      <div className="container relative px-4 md:px-6">
        <motion.div
          className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Starten Sie noch heute und erleben Sie, wie KI-gestützte
            Vertriebsintelligenz Ihre Abschlussquote steigert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/de/auth"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              Kostenlos testen
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 py-3 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Demo buchen
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

