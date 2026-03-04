import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <section className="section-shell" aria-labelledby="blog-preview-title">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 id="blog-preview-title" className="text-3xl font-semibold text-white">
            From the Blog
          </h2>
          <p className="mt-3 text-gray-400">Short technical notes on architecture and engineering execution.</p>
        </div>
        <Link href="/blog" className="text-sm font-medium text-cyan-400 hover:text-cyan-300">
          View all posts
        </Link>
      </div>

      <div className="stagger-grid mt-8 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="card p-6">
            <p className="text-sm text-gray-500">{post.date}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{post.title}</h3>
            <p className="mt-3 text-gray-400">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex text-sm font-medium text-cyan-400 hover:text-cyan-300"
            >
              Read article
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

