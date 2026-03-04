import { Github, Linkedin, Mail } from "lucide-react";

function XIcon({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.11 8.128L22.75 22h-6.54l-5.12-6.675L5.246 22H2l7.603-8.689L1.5 2h6.707l4.628 6.097L18.244 2Zm-1.148 18h1.804L7.226 3.896H5.29L17.096 20Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="section-shell py-12">
        <div className="flex justify-center gap-8 text-gray-400">
          <a
            href="https://github.com/KshitijAwaghad"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-cyan-400"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/kshitijawaghad"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cyan-400"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/k5hitij_5"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="hover:text-cyan-400"
          >
            <XIcon size={20} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kshitijavaghad255@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            className="hover:text-cyan-400"
          >
            <Mail size={20} />
          </a>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="space-y-2 text-center text-sm text-gray-500">
          <p>Built with Next.js 14 &amp; Tailwind CSS</p>
          <p>Clean code. Scalable systems. Real impact.</p>
          <p>&copy; 2026 Kshitij Awaghad</p>
        </div>
      </div>
    </footer>
  );
}
