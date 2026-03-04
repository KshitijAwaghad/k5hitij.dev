import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams(): Array<{ slug: string }> {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<{ title: string; description: string }> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post does not exist."
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-shell pt-28">
      <header className="mb-10">
        <p className="text-sm text-gray-500">{post.date}</p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{post.title}</h1>
        <p className="mt-4 max-w-2xl text-gray-400">{post.description}</p>
      </header>
      <div
        className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}

