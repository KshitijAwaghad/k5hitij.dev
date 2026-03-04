export default function RecruiterCTA() {
  return (
    <section className="section-shell" aria-labelledby="recruiter-cta-title">
      <div className="card p-8 text-center">
        <h2 id="recruiter-cta-title" className="text-3xl font-semibold text-white">
          Open to internships &amp; collaborative projects.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          I build scalable, reliable systems with strong execution discipline and clear communication. I am available
          for impactful engineering opportunities.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kshitijavaghad255@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-gray-950 hover:bg-cyan-300"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/kshitijawaghad"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-semibold text-gray-100 hover:border-cyan-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
