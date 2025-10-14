import type { Metadata } from 'next';
import { Shield, Lock, FileCheck, Server, Users, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

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

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
          <SecurityCard
            icon={<Lock className="h-6 w-6" />}
            title="DSGVO-Konformität"
            description="Vollständige Einhaltung der EU-Datenschutz-Grundverordnung. Alle Daten werden ausschließlich in der EU verarbeitet und gespeichert."
          />
          <SecurityCard
            icon={<Server className="h-6 w-6" />}
            title="EU-Hosting"
            description="Ihre Daten verlassen niemals die Europäische Union. Hosting bei zertifizierten EU-Rechenzentren mit höchsten Sicherheitsstandards."
          />
          <SecurityCard
            icon={<FileCheck className="h-6 w-6" />}
            title="ISO 27001"
            description="Unser Informationssicherheits-Managementsystem ist ISO 27001 zertifiziert und wird regelmäßig auditiert."
          />
          <SecurityCard
            icon={<Users className="h-6 w-6" />}
            title="Auftragsverarbeitung"
            description="Standardisierte AVV (Auftragsverarbeitungsverträge) für alle Kunden. DPA auf Anfrage verfügbar."
          />
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

function SecurityCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

