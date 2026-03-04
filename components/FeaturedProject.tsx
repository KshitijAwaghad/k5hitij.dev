import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section className="section-shell" aria-labelledby="featured-project-title">
      <div className="card border-cyan-400/40 bg-gray-900 p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Featured Project</p>
        <h2 id="featured-project-title" className="mt-3 text-3xl font-semibold text-white">
          Smart Campus Grievance Management System
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-700 bg-gray-950 p-6">
            <div className="group aspect-video w-full overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
              <Image
                src="/featured-project.png"
                alt="Smart Campus Grievance Management System screenshot"
                width={1280}
                height={720}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 text-gray-300">
            <p>
              <span className="font-semibold text-white">Problem:</span> Campus grievances were tracked manually,
              causing delayed resolution and low visibility.
            </p>
            <p>
              <span className="font-semibold text-white">Role:</span> Designed and built the full-stack platform
              architecture, workflows, and UI system.
            </p>
            <p>
              <span className="font-semibold text-white">Key Features:</span> Role-based dashboards, SLA timers,
              priority tagging, escalation workflows, and status tracking.
            </p>
            <p>
              <span className="font-semibold text-white">Architecture:</span> Modular service boundaries with clear
              data ownership and event-driven status updates.
            </p>
            <p>
              <span className="font-semibold text-white">Tech Stack:</span> Next.js, TypeScript, Tailwind CSS,
              Node.js, PostgreSQL.
            </p>
            <p>
              <span className="font-semibold text-white">Challenges Solved:</span> Reduced ambiguity in ownership and
              improved turnaround visibility with structured workflows.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com/KshitijAwaghad/smart-campus-grievance"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://smart-campus-demo.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
