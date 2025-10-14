import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    image?: string;
  };
}

export async function getAllPosts(): Promise<Post[]> {
  // Ensure directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        content,
        frontmatter: {
          title: data.title || '',
          date: data.date || '',
          description: data.excerpt || '',
          image: data.image,
        },
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
      frontmatter: {
        title: data.title || '',
        date: data.date || '',
        description: data.excerpt || '',
        image: data.image,
      },
    };
  } catch {
    return null;
  }
}

