import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Kshitij Awaghad",
  description: "Notes on engineering, systems, and problem solving."
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="section-shell pt-28" id="blog">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Blog</h1>
        <p className="mt-3 max-w-2xl text-gray-400">
          Practical engineering notes focused on architecture, performance, and product thinking.
        </p>
      </div>

      <div className="stagger-grid grid gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="card p-6">
            <p className="text-sm text-gray-500">{post.date}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{post.title}</h2>
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

