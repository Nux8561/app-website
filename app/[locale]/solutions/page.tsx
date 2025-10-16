import Link from 'next/link';
import { Container } from '@/components/primitives/Container';
import { PageHeader } from '@/components/primitives/PageHeader';
import { solutions } from '@/config/solutions';

export default function SolutionsIndex() {
  return (
    <div className="pt-24">
      <Container>
        <PageHeader title="Lösungen" subtitle="Wählen Sie einen Anwendungsfall" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.slug}
              href={`/de/solutions/${s.slug}`}
              className="rounded-lg border p-6 transition-all hover:shadow-brand"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}


