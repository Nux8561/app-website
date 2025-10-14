import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { siteConfig } from '@/config/site';

const solutions = {
  'b2b-prospecting': {
    title: 'B2B Prospecting automatisieren',
    problem: 'Manuelle Recherche frisst 60% Ihrer Vertriebszeit',
    outcome: '10x mehr qualifizierte Gespräche in derselben Zeit',
    description:
      'Automatisierte Lead-Recherche und Qualifizierung für B2B-Vertriebsteams',
    pain: [
      'Stundenlange manuelle LinkedIn-Recherche',
      'Oberflächliche Informationen über Prospects',
      'Keine Zeit für echte Gesprächsvorbereitung',
      'Niedrige Antwortquoten bei Cold Outreach',
    ],
    outcomes: [
      '8-12% Antwortquote statt <2%',
      '4 Stunden pro Woche gespart',
      'Präzise Entscheider-Ansprache',
      'Höhere Meeting-to-Close Rate',
    ],
    howItWorks: [
      {
        step: '1. Firma eingeben',
        desc: 'Einfach den Firmennamen oder die Website-URL eingeben',
      },
      {
        step: '2. KI analysiert',
        desc: 'In 60 Sekunden: Geschäftsmodell, Tech-Stack, Entscheider, News',
      },
      {
        step: '3. Insights nutzen',
        desc: 'Personalisierte Ansprache mit echtem Kontext und Value',
      },
    ],
  },
  'account-research': {
    title: 'Account-Based Research',
    problem: 'Enterprise-Accounts brauchen tiefes Verständnis',
    outcome: 'Strategische Account-Pläne in Minuten statt Tagen',
    description: 'Umfassende Account-Intelligence für Enterprise-Deals',
    pain: [
      'Komplexe Organisationsstrukturen schwer zu durchdringen',
      'Buying-Committee nicht identifiziert',
      'Fehlende technologische Insights',
      'Keine aktuellen Trigger-Events erkannt',
    ],
    outcomes: [
      'Vollständige Stakeholder-Map',
      'Technologie-Stack-Analyse',
      'Aktuelle Projekte & Initiativen',
      'Buying-Signals frühzeitig erkennen',
    ],
    howItWorks: [
      {
        step: '1. Account auswählen',
        desc: 'Target-Account aus CRM oder manuell eingeben',
      },
      {
        step: '2. Deep Dive',
        desc: 'Organisation, Entscheider, Budget, Tech, News – alles automatisch',
      },
      {
        step: '3. Strategie entwickeln',
        desc: 'Account-Plan mit konkreten Ansprechpunkten und Next Steps',
      },
    ],
  },
};

type SolutionSlug = keyof typeof solutions;

export async function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const solution = solutions[params.slug as SolutionSlug];
  if (!solution) return {};

  return {
    title: solution.title,
    description: solution.description,
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = solutions[params.slug as SolutionSlug];

  if (!solution) {
    notFound();
  }

  return (
    <div className="pt-24">
      <AuroraBackground>
        <div className="container px-4 py-24 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {solution.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">{solution.description}</p>
          </div>
        </div>
      </AuroraBackground>

      <div className="container px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-destructive">Das Problem</h2>
            <p className="mb-6 text-lg">{solution.problem}</p>
            <ul className="space-y-3">
              {solution.pain.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1 text-destructive">✗</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold text-primary">Das Ergebnis</h2>
            <p className="mb-6 text-lg font-semibold">{solution.outcome}</p>
            <ul className="space-y-3">
              {solution.outcomes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">So funktioniert es</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {solution.howItWorks.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                  {idx + 1}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.step}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <Link
            href={siteConfig.appUrl}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            Jetzt kostenlos testen
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

