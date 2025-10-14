import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { BentoGridFeatures } from '@/components/sections/BentoGridFeatures';
import { IntegrationsBeam } from '@/components/sections/IntegrationsBeam';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTA } from '@/components/sections/CTA';
import { testimonials } from '@/config/testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <BentoGridFeatures />
      <IntegrationsBeam />
      <TestimonialsSection
        title="Was unsere Kunden sagen"
        description="Über 500 Vertriebsteams vertrauen auf IntroGroup Sales Intelligence"
        testimonials={testimonials}
      />
      <CTA />
    </>
  );
}

