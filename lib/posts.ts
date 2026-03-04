import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface Frontmatter {
  title: string;
  date: string;
  description: string;
}

export interface PostSummary {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime: string;
}

export interface PostDetail extends PostSummary {
  contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), "content", "blog");

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

function parsePostFile(slug: string): { slug: string; frontmatter: Frontmatter; content: string } {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(fileContents);

  const frontmatter: Frontmatter = {
    title: String(parsed.data.title),
    date: String(parsed.data.date),
    description: String(parsed.data.description)
  };

  return {
    slug,
    frontmatter,
    content: parsed.content
  };
}

export function getAllPosts(): PostSummary[] {
  return getPostSlugs()
    .map((fileName) => fileName.replace(/\.md$/, ""))
    .map((slug) => {
      const { frontmatter, content } = parsePostFile(slug);

      return {
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        description: frontmatter.description,
        readingTime: calculateReadingTime(content)
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): PostDetail | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const { frontmatter, content } = parsePostFile(slug);
  const processed = remark().use(html).processSync(content);

  return {
    slug,
    title: frontmatter.title,
    date: frontmatter.date,
    description: frontmatter.description,
    readingTime: calculateReadingTime(content),
    contentHtml: processed.toString()
  };
}
