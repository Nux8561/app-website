'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    image: '/characters/character-detective.png',
    fallbackIcon: '🕵️',
    title: 'Deep Research',
    description:
      'Unsere KI-Detektive analysieren öffentliche Datenquellen und erstellen präzise Unternehmensprofile in Rekordzeit.',
  },
  {
    image: '/characters/character-hero.png',
    fallbackIcon: '⚡',
    title: 'Blitzschnell',
    description:
      'Mit Superkräften ausgestattet: Deep Research in unter 60 Sekunden – keine manuelle Recherche mehr nötig.',
  },
  {
    image: '/characters/character-safety.png',
    fallbackIcon: '🛡️',
    title: 'Privacy First',
    description:
      'DSGVO-konform und sicher. Ihre Daten sind bei uns in den besten Händen – mit höchsten Sicherheitsstandards.',
  },
  {
    image: '/characters/character-reading.png',
    fallbackIcon: '📚',
    title: 'Präzise Insights',
    description:
      'Fundiertes Wissen zu Entscheidern, Technologie-Stack und aktuellen Projekten – perfekt vorbereitet ins Gespräch.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function FeaturesWithCharacters() {
  return (
    <section className="bg-background py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Alles, was Sie für erfolgreiche{' '}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Gespräche brauchen
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ihr Team aus KI-Assistenten für maximalen Vertriebserfolg
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col items-center overflow-hidden rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-32 w-32 items-center justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={128}
                  height={128}
                  className="transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div className="hidden text-6xl">{feature.fallbackIcon}</div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

