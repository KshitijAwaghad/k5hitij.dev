import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

function XIcon({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.11 8.128L22.75 22h-6.54l-5.12-6.675L5.246 22H2l7.603-8.689L1.5 2h6.707l4.628 6.097L18.244 2Zm-1.148 18h1.804L7.226 3.896H5.29L17.096 20Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="section-shell pt-32" id="home">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Full-Stack Developer</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl">Kshitij Awaghad</h1>
          <p className="mt-4 text-xl text-gray-200 sm:text-2xl">
            Building scalable systems &amp; intelligent solutions.
          </p>
          <p className="mt-5 max-w-xl text-gray-400">
            Systems thinker and problem solver focused on shipping reliable, high-impact products with clean
            architecture and measurable performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-gray-950 hover:bg-cyan-300"
            >
              Download Resume
            </a>
            <Link
              href="/#projects"
              className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-semibold text-gray-100 hover:border-cyan-400 hover:text-cyan-400"
            >
              View Projects
            </Link>
            <Link
              href="/#contact"
              className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-semibold text-gray-100 hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-4 text-gray-400">
            <a
              href="https://github.com/KshitijAwaghad"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-400"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/kshitijawaghad"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/k5hitij_5"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="hover:text-cyan-400"
            >
              <XIcon size={18} />
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="card overflow-hidden p-3">
            <img
              src="/WhatsApp%20Image%202026-03-03%20at%2013.27.41.jpeg"
              alt="Portrait of Kshitij Awaghad"
              width={560}
              height={560}
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
