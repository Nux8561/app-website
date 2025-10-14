import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, Best Practices und News rund um KI im Vertrieb, Sales Intelligence und B2B-Akquise.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="pt-24 pb-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center py-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Blog & Insights
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Best Practices, Trends und Wissen rund um KI-gestützte Vertriebsintelligenz.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/de/blog/${post.slug}`}
              className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </div>
              <div className="px-6 pb-6">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Weiterlesen
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

