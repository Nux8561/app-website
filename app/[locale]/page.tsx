import { Hero } from '@/components/sections/Hero';
import { FeaturesWithCharacters } from '@/components/sections/FeaturesWithCharacters';
import { BentoGridFeatures } from '@/components/sections/BentoGridFeatures';
import { HowItWorksStepper } from '@/components/sections/HowItWorksStepper';
import { IntegrationsBeam } from '@/components/sections/IntegrationsBeam';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTA } from '@/components/sections/CTA';
import { testimonials } from '@/config/testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesWithCharacters />
      <BentoGridFeatures />
      <HowItWorksStepper />
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

