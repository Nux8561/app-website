import type { Metadata } from 'next';
import { CheckIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparente Preise für IntroGroup Sales Intelligence. Wählen Sie den Plan, der zu Ihrem Business passt.',
};

const pricingPlans = [
  {
    title: 'Free',
    subtitle: 'Für den Einstieg',
    price: '0€',
    period: '/ Monat',
    description: 'Ideal, um IntroGroup Sales Intelligence kennenzulernen.',
    buttonText: 'Kostenlos starten',
    features: [
      { text: '10 Deep Researches pro Monat', included: true },
      { text: 'Basis Life Coach', included: true },
      { text: 'Google Calendar Sync', included: false },
      { text: 'Ultra Research Modus', included: false },
      { text: 'Marketplace & Provider', included: false },
      { text: 'HubSpot Integration', included: false },
      { text: 'Advanced Analytics', included: false },
      { text: 'Vertex AI Coach', included: false },
      { text: 'Multiteam-Management', included: false },
      { text: 'API-Zugang', included: false },
      { text: 'Dezentrierter Support', included: false },
      { text: 'Custom SLAs', included: false },
      { text: 'On-Premise Deployment', included: false },
    ],
  },
  {
    title: 'Pro',
    subtitle: 'Für Power-User',
    price: '49€',
    period: '/ Monat',
    description: 'Maximale Effizienz für Einzelkämpfer und kleine Teams.',
    buttonText: 'Jetzt upgraden',
    features: [
      { text: '100 Deep Researches pro Monat', included: true },
      { text: 'Erweiterter Life Coach', included: true },
      { text: 'Google Calendar Sync', included: true },
      { text: 'Ultra Research Modus', included: true },
      { text: 'Marketplace & Provider', included: false },
      { text: 'HubSpot Integration', included: false },
      { text: 'Advanced Analytics', included: false },
      { text: 'Vertex AI Coach', included: false },
      { text: 'Multiteam-Management', included: false },
      { text: 'API-Zugang', included: false },
      { text: 'Dezentrierter Support', included: false },
      { text: 'Custom SLAs', included: false },
      { text: 'On-Premise Deployment', included: false },
    ],
    highlight: true,
  },
  {
    title: 'Business',
    subtitle: 'Für Vertriebsteams',
    price: '99€',
    period: '/ Monat',
    description: 'Skalierbare Lösung für wachsende Vertriebsabteilungen.',
    buttonText: 'Jetzt upgraden',
    features: [
      { text: '250 Deep Researches pro Monat', included: true },
      { text: 'HubSpot Integration', included: false },
      { text: 'Marketplace & Provider', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Vertex AI Coach', included: true },
      { text: 'Multiteam-Management', included: false },
      { text: 'API-Zugang', included: false },
      { text: 'Dezentrierter Support', included: false },
      { text: 'Custom SLAs', included: false },
      { text: 'On-Premise Deployment', included: false },
    ],
  },
  {
    title: 'Enterprise',
    subtitle: 'Für große Teams',
    price: 'Individuell',
    period: '',
    description: 'Maßgeschneiderte Lösungen für Ihre komplexesten Anforderungen.',
    buttonText: 'Kontakt aufnehmen',
    features: [
      { text: 'Unlimited Researches', included: true },
      { text: 'Multiteam-Management', included: true },
      { text: 'HubSpot Integration', included: true },
      { text: 'API-Zugang', included: true },
      { text: 'Dezentrierter Support', included: true },
      { text: 'Custom SLAs', included: true },
      { text: 'On-Premise Deployment', included: true },
    ],
  },
];

export default function PricingPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Flexible Pricing-Pläne für jedes Team
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Wählen Sie den Plan, der am besten zu Ihren Anforderungen passt.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-4 lg:gap-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.title}
              className={`flex flex-col ${plan.highlight ? 'border-primary shadow-lg' : ''}`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">
                  {plan.title}
                </CardTitle>
                <CardDescription>{plan.subtitle}</CardDescription>
                <div className="mt-4 text-4xl font-bold">
                  {plan.price}
                  <span className="text-lg font-normal text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {feature.included ? (
                        <CheckIcon className="h-5 w-5 text-primary" />
                      ) : (
                        <XIcon className="h-5 w-5 text-muted-foreground opacity-50" />
                      )}
                      <span
                        className={`${feature.included ? '' : 'text-muted-foreground opacity-50'}`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="w-full">
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

