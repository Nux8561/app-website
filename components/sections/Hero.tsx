'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-accent/10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.06),transparent_50%)]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>KI-gestützte Sales Intelligence</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Vertriebsintelligenz
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              in unter 60 Sekunden
            </span>
          </motion.h1>

          <motion.p
            className="max-w-[700px] text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {siteConfig.product} revolutioniert die Gesprächsvorbereitung im B2B-Vertrieb. Deep
            Research, automatisiert – damit Sie sich auf das Wesentliche konzentrieren können.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href={siteConfig.appUrl}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              Jetzt starten
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/de/features"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 py-3 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Features entdecken
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-8 pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">&lt; 60s</div>
              <div className="text-sm text-muted-foreground">Research-Zeit</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Genauigkeit</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">10x</div>
              <div className="text-sm text-muted-foreground">Produktivität</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

