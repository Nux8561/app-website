import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, Best Practices und News rund um KI im Vertrieb, Sales Intelligence und B2B-Akquise.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  const linkedInEmbeds = [
    '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7381723059075977216" height="569" width="504" frameborder="0" allowfullscreen="" title="Eingebetteter Beitrag"></iframe>',
    '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7381704012024164352" height="695" width="504" frameborder="0" allowfullscreen="" title="Eingebetteter Beitrag"></iframe>',
    '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7381736685358825472" height="695" width="504" frameborder="0" allowfullscreen="" title="Eingebetteter Beitrag"></iframe>',
  ];

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Unser Blog
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Aktuelle Insights, Tipps und Neuigkeiten aus der Welt der Sales Intelligence.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/de/blog/${post.slug}`}
            className="group grid gap-1 rounded-lg border p-4 transition-all hover:shadow-md"
          >
            <Image
              src={post.frontmatter.image || '/placeholder.svg'}
              alt={post.frontmatter.title}
              width={300}
              height={200}
              className="aspect-video w-full overflow-hidden rounded-md object-cover"
            />
            <h2 className="text-xl font-bold group-hover:underline">
              {post.frontmatter.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {post.frontmatter.description}
            </p>
            <p className="text-sm text-muted-foreground">
              {formatDate(post.frontmatter.date)}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">
          Aktuelle Beiträge von LinkedIn
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {linkedInEmbeds.map((embedHtml, index) => (
            <div
              key={index}
              className="w-full max-w-[504px] overflow-hidden rounded-lg shadow-lg"
              dangerouslySetInnerHTML={{ __html: embedHtml }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

