'use client';

import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { Features } from '@/components/sections/Features';
import { CTA } from '@/components/sections/CTA';
import Image from 'next/image';
import { Box, Lock, Search, Settings, Sparkles } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';

export default function FeaturesPage() {
  return (
    <div className="pt-12">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Leistungsstarke Features für{' '}
              <span className="mt-1 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-4xl font-bold leading-none text-transparent md:text-[6rem]">
                maximale Effizienz
              </span>
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              Modernste KI-Technologie trifft auf intuitive Bedienung
            </p>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&h=720&fit=crop"
          alt="IntroGroup Dashboard"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>

      <div className="container px-4 pb-24 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Alle Features im Überblick
        </h2>
        <FeatureGrid />
      </div>

      <Features />
      <CTA />
    </div>
  );
}

const features = [
  {
    icon: <Sparkles className="h-4 w-4" />,
    title: "KI-gestützte Analyse",
    description:
      "Modernste KI analysiert öffentliche Datenquellen und erstellt präzise Unternehmensprofile.",
  },
  {
    icon: <Settings className="h-4 w-4" />,
    title: "HubSpot Integration",
    description:
      "Nahtlose Integration in Ihr bestehendes CRM-System für optimalen Workflow.",
  },
  {
    icon: <Lock className="h-4 w-4" />,
    title: "DSGVO-konform",
    description:
      "Höchste Sicherheitsstandards und vollständige DSGVO-Compliance für deutsche Unternehmen.",
  },
  {
    icon: <Box className="h-4 w-4" />,
    title: "Team-Ready",
    description:
      "Skalierbar für Teams jeder Größe – vom Solo-Vertrieb bis zum Enterprise-Team.",
  },
  {
    icon: <Search className="h-4 w-4" />,
    title: "Deep Research",
    description:
      "Relevante Informationen zu Entscheidern, Technologie-Stack und aktuellen Projekten.",
  },
];

function FeatureGrid() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      {features.map((feature, idx) => (
        <GridItem
          key={idx}
          area={
            idx === 0
              ? 'md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]'
              : idx === 1
                ? 'md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]'
                : idx === 2
                  ? 'md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]'
                  : idx === 3
                    ? 'md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]'
                    : 'md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]'
          }
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

function GridItem({ area, icon, title, description }: GridItemProps) {
  return (
    <li className={cn('min-h-[14rem] list-none', area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="text-balance pt-0.5 font-sans text-xl font-semibold leading-[1.375rem] tracking-[-0.04em] text-foreground md:text-2xl md:leading-[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm leading-[1.125rem] text-muted-foreground md:text-base md:leading-[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

