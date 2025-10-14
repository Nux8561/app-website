import type { Metadata } from 'next';
import { Shield, Lock, FileCheck, Server, Users, Mail, Key } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';

export const metadata: Metadata = {
  title: 'Security & Trust',
  description: 'Sicherheit und Datenschutz bei IntroGroup Sales Intelligence',
};

export default function SecurityPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center py-12">
          <Shield className="h-16 w-16 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Security & Trust Center
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Ihre Daten und Privatsphäre stehen bei uns an erster Stelle
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <BentoGrid className="lg:grid-rows-3">
            <BentoCard
              Icon={Lock}
              name="DSGVO-Konformität"
              description="Vollständige Einhaltung der EU-Datenschutz-Grundverordnung. Alle Daten werden ausschließlich in der EU verarbeitet und gespeichert."
              href="/de/legal/datenschutz"
              cta="Mehr erfahren"
              background={<img className="absolute -right-20 -top-20 opacity-60" />}
              className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
            />
            <BentoCard
              Icon={Server}
              name="EU-Hosting"
              description="Ihre Daten verlassen niemals die Europäische Union. Hosting bei zertifizierten EU-Rechenzentren mit höchsten Sicherheitsstandards."
              href="/de/contact"
              cta="Kontakt aufnehmen"
              background={<img className="absolute -right-20 -top-20 opacity-60" />}
              className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
            />
            <BentoCard
              Icon={FileCheck}
              name="ISO 27001"
              description="Unser Informationssicherheits-Managementsystem ist ISO 27001 zertifiziert und wird regelmäßig auditiert."
              href="/de/legal/agb"
              cta="Zertifikat ansehen"
              background={<img className="absolute -right-20 -top-20 opacity-60" />}
              className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
            />
            <BentoCard
              Icon={Users}
              name="Auftragsverarbeitung"
              description="Standardisierte AVV (Auftragsverarbeitungsverträge) für alle Kunden. DPA auf Anfrage verfügbar."
              href="/de/contact"
              cta="AVV anfordern"
              background={<img className="absolute -right-20 -top-20 opacity-60" />}
              className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
            />
            <BentoCard
              Icon={Key}
              name="Verschlüsselung"
              description="Ende-zu-Ende Verschlüsselung für alle Datenübertragungen und -speicherung nach höchsten Sicherheitsstandards."
              href="/de/contact"
              cta="Technische Details"
              background={<img className="absolute -right-20 -top-20 opacity-60" />}
              className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
            />
          </BentoGrid>
        </div>

        <div className="mx-auto mt-24 max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Datenschutz im Detail</h2>
          
          <div className="space-y-6 rounded-lg border border-border bg-card p-8">
            <div>
              <h3 className="mb-3 text-xl font-semibold">Welche Daten verarbeiten wir?</h3>
              <p className="text-muted-foreground">
                Wir verarbeiten ausschließlich Daten, die für die Bereitstellung unseres
                Services notwendig sind: Kontaktdaten (Name, E-Mail), Firmendaten aus
                öffentlichen Quellen, und technische Daten zur Service-Optimierung.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Wo werden Daten gespeichert?</h3>
              <p className="text-muted-foreground">
                Alle Daten werden ausschließlich in ISO-27001-zertifizierten Rechenzentren in
                Deutschland und der EU gespeichert. Kein Datentransfer außerhalb der EU.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Ihre Rechte</h3>
              <p className="text-muted-foreground">
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und
                Datenübertragbarkeit. Kontaktieren Sie unseren Datenschutzbeauftragten unter:{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-lg border border-border bg-muted/30 p-8 text-center">
          <Mail className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h3 className="mb-2 text-xl font-semibold">Fragen zu Sicherheit oder Datenschutz?</h3>
          <p className="mb-4 text-muted-foreground">
            Unser Security-Team beantwortet gerne alle Ihre Fragen.
          </p>
          <a
            href={`mailto:security@${siteConfig.contact.email.split('@')[1]}`}
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            security@{siteConfig.contact.email.split('@')[1]}
          </a>
        </div>
      </div>
    </div>
  );
}


