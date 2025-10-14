import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparente Preise für IntroGroup Sales Intelligence. Wählen Sie den Plan, der zu Ihrem Business passt.',
};

const plans = [
  {
    name: 'Starter',
    price: '49€',
    period: 'pro Monat',
    description: 'Perfekt für Solo-Vertriebler und kleine Teams',
    features: [
      '100 Research-Anfragen pro Monat',
      'Basis KI-Analyse',
      'E-Mail Support',
      'HubSpot Integration',
      'DSGVO-konform',
    ],
    cta: 'Jetzt starten',
    popular: false,
  },
  {
    name: 'Professional',
    price: '149€',
    period: 'pro Monat',
    description: 'Für wachsende Vertriebsteams',
    features: [
      '500 Research-Anfragen pro Monat',
      'Erweiterte KI-Analyse',
      'Prioritäts-Support',
      'HubSpot + Salesforce Integration',
      'Team-Kollaboration',
      'Custom Reports',
    ],
    cta: 'Jetzt starten',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'auf Anfrage',
    description: 'Für große Vertriebsorganisationen',
    features: [
      'Unbegrenzte Research-Anfragen',
      'Premium KI-Analyse + Custom Models',
      'Dedicated Account Manager',
      'Alle CRM-Integrationen',
      'Advanced Analytics',
      'SLA-Garantie',
      'Custom Onboarding',
    ],
    cta: 'Kontakt aufnehmen',
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center py-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Transparente Preise für{' '}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              jeden Bedarf
            </span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Starten Sie kostenlos oder wählen Sie den Plan, der zu Ihrem Business passt.
            Jederzeit kündbar.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-lg border ${
                plan.popular
                  ? 'border-primary shadow-lg scale-105'
                  : 'border-border'
              } bg-card p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Beliebtester Plan
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="ml-2 text-muted-foreground">/ {plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="mb-8 space-y-3 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={
                  plan.name === 'Enterprise'
                    ? `mailto:${siteConfig.contact.email}`
                    : siteConfig.appUrl
                }
                className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border bg-background hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

