import { stats } from "@/data/stats";
import { showcasedProjectCount } from "@/data/projects";
import { getGitHubProfileStats } from "@/lib/github";

export default async function Impact() {
  const githubStats = await getGitHubProfileStats();

  const statValues: Record<string, string> = {
    "featured-projects": String(showcasedProjectCount),
    "github-public-repos": githubStats.publicRepos,
    "projects-showcased": String(showcasedProjectCount)
  };

  return (
    <section className="section-shell" aria-label="Impact metrics">
      <div className="stagger-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.id} className="card p-5">
            <p className="text-2xl font-semibold text-cyan-400">{statValues[stat.id] ?? "--"}</p>
            <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
