'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Target, Database, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'KI-gestützte Analyse',
    description:
      'Modernste KI analysiert öffentliche Datenquellen und erstellt präzise Unternehmensprofile.',
  },
  {
    icon: Zap,
    title: 'Blitzschnell',
    description:
      'Deep Research in unter 60 Sekunden – keine manuelle Recherche mehr nötig.',
  },
  {
    icon: Shield,
    title: 'DSGVO-konform',
    description:
      'Höchste Sicherheitsstandards und vollständige DSGVO-Compliance für deutsche Unternehmen.',
  },
  {
    icon: Target,
    title: 'Präzise Insights',
    description:
      'Relevante Informationen zu Entscheidern, Technologie-Stack und aktuellen Projekten.',
  },
  {
    icon: Database,
    title: 'HubSpot Integration',
    description:
      'Nahtlose Integration in Ihr bestehendes CRM-System für optimalen Workflow.',
  },
  {
    icon: Users,
    title: 'Team-Ready',
    description:
      'Skalierbar für Teams jeder Größe – vom Solo-Vertrieb bis zum Enterprise-Team.',
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

export function Features() {
  return (
    <section className="py-24 bg-background">
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
              Modernste Technologie trifft auf intuitive Bedienung
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
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

