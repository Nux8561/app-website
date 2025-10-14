import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'AGB',
  description: `Allgemeine Geschäftsbedingungen von ${siteConfig.name}`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function AGBPage() {
  return (
    <div className="container max-w-4xl px-4 py-24 md:py-32">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      <div className="prose prose-gray max-w-none dark:prose-invert">
        <h2>§ 1 Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle
          Verträge über die Nutzung der Software-as-a-Service (SaaS) Plattform{' '}
          {siteConfig.product} (nachfolgend „Dienst") zwischen {siteConfig.name}{' '}
          (nachfolgend „Anbieter") und dem Nutzer (nachfolgend „Kunde").
        </p>

        <h2>§ 2 Vertragsgegenstand</h2>
        <h3>2.1 Leistungsumfang</h3>
        <p>
          Der Anbieter stellt dem Kunden eine cloudbasierte Software-Plattform zur Verfügung,
          die KI-gestützte Vertriebsintelligenz und Deep Research-Funktionen bietet.
        </p>
        <h3>2.2 Verfügbarkeit</h3>
        <p>
          Der Anbieter gewährleistet eine Verfügbarkeit des Dienstes von 99% im
          Jahresdurchschnitt. Ausgenommen sind Wartungsarbeiten und Zeiten, in denen der
          Dienst aufgrund von Umständen nicht verfügbar ist, die nicht im Einflussbereich des
          Anbieters liegen.
        </p>

        <h2>§ 3 Vertragsschluss und Laufzeit</h2>
        <h3>3.1 Registrierung</h3>
        <p>
          Der Vertragsschluss erfolgt durch Registrierung des Kunden auf der Website des
          Anbieters und anschließender Auswahl eines Tarifs.
        </p>
        <h3>3.2 Vertragslaufzeit</h3>
        <p>
          Der Vertrag wird auf unbestimmte Zeit geschlossen und kann von beiden Parteien mit
          einer Frist von 30 Tagen zum Monatsende gekündigt werden.
        </p>

        <h2>§ 4 Preise und Zahlungsbedingungen</h2>
        <h3>4.1 Preise</h3>
        <p>
          Es gelten die zum Zeitpunkt der Bestellung auf der Website angezeigten Preise. Alle
          Preise verstehen sich als Nettopreise zuzüglich der gesetzlichen Umsatzsteuer.
        </p>
        <h3>4.2 Zahlungsweise</h3>
        <p>
          Die Abrechnung erfolgt monatlich im Voraus. Die Zahlung ist per Kreditkarte,
          Lastschrift oder Rechnung möglich.
        </p>
        <h3>4.3 Zahlungsverzug</h3>
        <p>
          Kommt der Kunde mit der Zahlung in Verzug, ist der Anbieter berechtigt, den Zugang
          zum Dienst zu sperren.
        </p>

        <h2>§ 5 Pflichten des Kunden</h2>
        <h3>5.1 Zugangsdaten</h3>
        <p>
          Der Kunde ist verpflichtet, seine Zugangsdaten geheim zu halten und vor dem Zugriff
          Dritter zu schützen.
        </p>
        <h3>5.2 Rechtswidrige Nutzung</h3>
        <p>
          Der Kunde verpflichtet sich, den Dienst nicht für rechtswidrige Zwecke zu nutzen und
          keine Inhalte zu verbreiten, die gegen geltendes Recht verstoßen.
        </p>

        <h2>§ 6 Gewährleistung</h2>
        <h3>6.1 Mängelansprüche</h3>
        <p>
          Der Anbieter gewährleistet, dass der Dienst die vereinbarte Beschaffenheit aufweist
          und frei von Rechtsmängeln ist.
        </p>
        <h3>6.2 Nachbesserung</h3>
        <p>
          Bei Mängeln ist der Anbieter zur Nachbesserung berechtigt. Schlägt die Nachbesserung
          fehl, kann der Kunde die Vergütung mindern oder den Vertrag kündigen.
        </p>

        <h2>§ 7 Haftung</h2>
        <h3>7.1 Haftungsbeschränkung</h3>
        <p>
          Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des
          Körpers oder der Gesundheit sowie für Schäden, die auf Vorsatz oder grober
          Fahrlässigkeit beruhen.
        </p>
        <h3>7.2 Datenverlust</h3>
        <p>
          Der Anbieter haftet nicht für Datenverluste, soweit diese durch regelmäßige
          Datensicherung durch den Kunden hätten vermieden werden können.
        </p>

        <h2>§ 8 Datenschutz</h2>
        <p>
          Der Anbieter verpflichtet sich, alle personenbezogenen Daten des Kunden gemäß den
          Bestimmungen der DSGVO zu verarbeiten. Details sind der Datenschutzerklärung zu
          entnehmen.
        </p>

        <h2>§ 9 Kündigung</h2>
        <h3>9.1 Ordentliche Kündigung</h3>
        <p>
          Beide Parteien können den Vertrag mit einer Frist von 30 Tagen zum Monatsende
          kündigen.
        </p>
        <h3>9.2 Außerordentliche Kündigung</h3>
        <p>
          Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
        </p>

        <h2>§ 10 Änderung der AGB</h2>
        <p>
          Der Anbieter behält sich vor, diese AGB zu ändern. Änderungen werden dem Kunden
          mindestens 30 Tage vor Inkrafttreten per E-Mail mitgeteilt.
        </p>

        <h2>§ 11 Schlussbestimmungen</h2>
        <h3>11.1 Anwendbares Recht</h3>
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
          UN-Kaufrechts.
        </p>
        <h3>11.2 Gerichtsstand</h3>
        <p>
          Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, soweit der Kunde
          Kaufmann ist, der Sitz des Anbieters.
        </p>
        <h3>11.3 Salvatorische Klausel</h3>
        <p>
          Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies
          die Wirksamkeit der übrigen Bestimmungen nicht.
        </p>

        <p className="mt-8 text-sm text-muted-foreground">
          Stand: {new Date().toLocaleDateString('de-DE')}
        </p>
      </div>
    </div>
  );
}

