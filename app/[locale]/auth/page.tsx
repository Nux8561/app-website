import { SignIn } from '@clerk/nextjs';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Anmelden',
  description: 'Melden Sie sich bei IntroGroup Sales Intelligence an',
};

export default function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Willkommen zurück</h1>
          <p className="mt-2 text-muted-foreground">
            Melden Sie sich an oder erstellen Sie ein kostenloses Konto
          </p>
        </div>

        <SignIn
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'shadow-lg',
            },
          }}
          afterSignInUrl={siteConfig.appUrl}
          afterSignUpUrl={siteConfig.appUrl}
          routing="path"
          path="/de/auth"
        />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Mit der Anmeldung akzeptieren Sie unsere{' '}
          <Link href="/de/legal/agb" className="text-primary hover:underline">
            AGB
          </Link>{' '}
          und{' '}
          <Link href="/de/legal/datenschutz" className="text-primary hover:underline">
            Datenschutzerklärung
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

function Link({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

