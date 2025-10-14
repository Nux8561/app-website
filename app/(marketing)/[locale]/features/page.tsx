import type { Metadata } from 'next';
import { Features } from '@/components/sections/Features';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Entdecken Sie alle Features von IntroGroup Sales Intelligence – KI-gestützte Vertriebsintelligenz für den B2B-Mittelstand.',
};

export default function FeaturesPage() {
  return (
    <div className="pt-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center py-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Leistungsstarke Features für{' '}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              maximale Effizienz
            </span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Modernste KI-Technologie trifft auf intuitive Bedienung. Alles, was Sie für
            erfolgreiche Vertriebsgespräche brauchen.
          </p>
        </div>
      </div>
      <Features />
      <CTA />
    </div>
  );
}

