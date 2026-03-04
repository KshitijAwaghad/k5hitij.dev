const learningTopics: string[] = ["System Design", "AI Optimization", "DevOps Basics", "Performance Engineering"];

export default function Learning() {
  return (
    <section className="section-shell" aria-labelledby="learning-title">
      <h2 id="learning-title" className="text-3xl font-semibold text-white">
        Currently Learning
      </h2>
      <div className="stagger-grid mt-8 grid gap-4 sm:grid-cols-2">
        {learningTopics.map((topic) => (
          <article key={topic} className="card p-5">
            <p className="text-gray-200">{topic}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
