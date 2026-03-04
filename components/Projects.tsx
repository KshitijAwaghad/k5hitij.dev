import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="section-shell" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title" className="text-3xl font-semibold text-white">
        Projects
      </h2>
      <p className="mt-3 max-w-2xl text-gray-400">
        Selected builds that reflect practical product development, architecture clarity, and execution quality.
      </p>

      <div className="stagger-grid mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="card p-6 hover:border-cyan-400/70">
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">{project.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <li key={tech} className="rounded-md border border-gray-700 px-2.5 py-1 text-xs text-gray-300">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
