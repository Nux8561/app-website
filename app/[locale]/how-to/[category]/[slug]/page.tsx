import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, Clock, User, BookOpen } from 'lucide-react';
import Link from 'next/link';

const guides = {
  'grundlagen': {
    'deep-research-einstieg': {
      title: 'Deep Research für Einsteiger',
      category: 'Grundlagen',
      description: 'Lernen Sie, wie Sie Deep Research effektiv für Ihre Vertriebsgespräche nutzen.',
      readingTime: '5 Minuten',
      author: 'Sarah Schmidt',
      lastUpdated: '2024-01-15',
      content: `
# Deep Research für Einsteiger

Deep Research ist der Schlüssel zu erfolgreichen Vertriebsgesprächen. In diesem Guide zeigen wir Ihnen, wie Sie das volle Potenzial unserer KI-gestützten Plattform nutzen.

## Warum Deep Research?

Traditionelle Recherche ist zeitaufwendig und liefert oft oberflächliche Informationen. Mit IntroGroup erhalten Sie in unter 60 Sekunden:

- Vollständige Unternehmensprofile
- Entscheider mit Kontaktinformationen
- Aktuelle Projekte und Initiativen
- Technologie-Stack-Analyse

## Erste Schritte

### 1. Firma eingeben

Geben Sie einfach den Firmennamen oder die Website-URL ein. Unsere KI durchsucht automatisch:

- Unternehmensregister
- Social Media Profile
- Pressemitteilungen
- Technologie-Blogs
- Jobbörsen

### 2. Ergebnisse analysieren

Die KI liefert strukturierte Insights:

**Unternehmensprofil:**
- Branche und Größe
- Finanzdaten und Wachstum
- Standorte und Niederlassungen

**Entscheider:**
- Namen und Positionen
- LinkedIn-Profile
- E-Mail-Adressen (soweit öffentlich)

**Technologie-Stack:**
- CRM, Marketing Tools, Analytics
- Entwicklungsumgebungen
- Cloud-Infrastruktur

### 3. Gespräch vorbereiten

Nutzen Sie die gewonnenen Insights für:

- **Personalisierte Ansprache:** Zeigen Sie, dass Sie recherchiert haben
- **Pain Points identifizieren:** Sprechen Sie echte Herausforderungen an
- **Value Proposition abstimmen:** Passen Sie Ihre Lösung an deren Bedürfnisse an

## Best Practices

### Timing ist alles

- **Morgens (8-10 Uhr):** Höchste Antwortquote
- **Mittwochs/Donnerstags:** Optimal für B2B
- **Nach Firmen-News:** Wenn das Unternehmen in den Schlagzeilen war

### Follow-up Strategie

1. **Erste Nachricht:** Kontext schaffen, echten Value bieten
2. **Tag 3:** Wertvoller Reminder ohne Druck
3. **Tag 7:** Letzte Chance mit neuem Insights

### Messung des Erfolgs

Tracken Sie diese KPIs:
- Antwortquote
- Meeting-to-Close Rate
- Zeitersparnis pro Recherche

## Fazit

Deep Research ist kein nice-to-have – es ist Ihr Wettbewerbsvorteil. Unternehmen, die systematisch recherchieren, schließen 3x mehr Deals.

*Bereit für den nächsten Schritt? [Jetzt kostenlos testen](/de/auth)*
      `,
    },
  },
};

type GuideSlug = keyof typeof guides;

export async function generateStaticParams() {
  const params = [];
  for (const category of Object.keys(guides)) {
    for (const slug of Object.keys(guides[category as GuideSlug])) {
      params.push({ category, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const guide = guides[params.category as GuideSlug]?.[params.slug as keyof typeof guides[GuideSlug]];
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
  };
}

export default function HowToPage({ params }: { params: { category: string; slug: string } }) {
  const guide = guides[params.category as GuideSlug]?.[params.slug as keyof typeof guides[GuideSlug]];

  if (!guide) {
    notFound();
  }

  return (
    <div className="pt-24 pb-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/de/how-to"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zu Guides
          </Link>

          <article>
            <header className="mb-8">
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  {guide.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {guide.readingTime}
                </span>
                <span className="inline-flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {guide.author}
                </span>
                <span>{new Date(guide.lastUpdated).toLocaleDateString('de-DE')}</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                {guide.title}
              </h1>
              <p className="text-xl text-muted-foreground">{guide.description}</p>
            </header>

            <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              {guide.content.split('\n').map((paragraph, idx) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={idx}>{paragraph.slice(2)}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={idx}>{paragraph.slice(3)}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={idx}>{paragraph.slice(4)}</h3>;
                } else if (paragraph.trim()) {
                  return <p key={idx}>{paragraph}</p>;
                }
                return null;
              })}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

