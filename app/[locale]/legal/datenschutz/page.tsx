import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: `Datenschutzerklärung von ${siteConfig.name}`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="container max-w-4xl px-4 py-24 md:py-32">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">Datenschutzerklärung</h1>

      <div className="prose prose-gray max-w-none dark:prose-invert">
        <h2>1. Datenschutz auf einen Blick</h2>
        
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
          Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>
        <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
          Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
        </p>

        <h4>Wie erfassen wir Ihre Daten?</h4>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
          kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
          durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
          Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
        </p>

        <h4>Wofür nutzen wir Ihre Daten?</h4>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
          gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
          werden.
        </p>

        <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
          Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
          Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
        </p>

        <h2>2. Hosting</h2>
        <p>
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </p>

        <h3>Vercel</h3>
        <p>
          Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend
          Vercel).
        </p>
        <p>
          Vercel ist ein Dienst zum Hosting von Webseiten. Wenn Sie unsere Website besuchen,
          erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen.
        </p>
        <p>
          Details entnehmen Sie der Datenschutzerklärung von Vercel:{' '}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://vercel.com/legal/privacy-policy
          </a>
          .
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
          Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
          gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>

        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          {siteConfig.name}
          <br />
          [Straße und Hausnummer]
          <br />
          [PLZ und Ort]
          <br />
          E-Mail: {siteConfig.contact.email}
        </p>

        <h3>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
          wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
          Datenverarbeitung entfällt.
        </p>

        <h3>Ihre Rechte</h3>
        <p>Sie haben folgende Rechte:</p>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          <li>Recht auf Beschwerde bei der Aufsichtsbehörde (Art. 77 DSGVO)</li>
        </ul>

        <h2>4. Datenerfassung auf dieser Website</h2>

        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so
          genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies
          sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>

        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
          dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
          Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
        </p>

        <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage
          inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum
          Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
        </p>

        <h2>5. Analyse-Tools und Werbung</h2>

        <h3>Plausible Analytics</h3>
        <p>
          Diese Website nutzt Plausible Analytics, ein datenschutzfreundliches
          Webanalyse-Tool. Plausible Analytics verwendet keine Cookies und erhebt keine
          personenbezogenen Daten.
        </p>
        <p>
          Anbieter ist Plausible Insights OÜ, Västriku tn 2, 50403, Tartu, Estland.
        </p>
        <p>
          Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Plausible:{' '}
          <a
            href="https://plausible.io/data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://plausible.io/data-policy
          </a>
          .
        </p>

        <h2>6. Plugins und Tools</h2>

        <h3>Google Fonts (lokales Hosting)</h3>
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google
          Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert.
          Eine Verbindung zu Servern von Google findet dabei nicht statt.
        </p>

        <p className="mt-8 text-sm text-muted-foreground">
          Stand: {new Date().toLocaleDateString('de-DE')}
        </p>
      </div>
    </div>
  );
}

