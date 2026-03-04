import { stats } from "@/data/stats";

export default function Impact() {
  return (
    <section className="section-shell" aria-label="Impact metrics">
      <div className="stagger-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="card p-5">
            <p className="text-2xl font-semibold text-cyan-400">{stat.value}</p>
            <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
