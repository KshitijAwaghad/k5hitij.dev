import { skillLevels, skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="section-shell" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="text-3xl font-semibold text-white">
        Skills
      </h2>
      <p className="mt-3 text-gray-400">A focused stack built for scalable product delivery.</p>

      <div className="stagger-grid mt-8 grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <article key={group.category} className="card p-5">
            <h3 className="text-lg font-semibold text-white">{group.category}</h3>
            <ul className="mt-4 space-y-4">
              {group.items.map((skill) => {
                const Icon = skill.icon;
                const levelPercent = skillLevels[skill.level];

                return (
                  <li key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-200">
                        <Icon size={15} className="text-cyan-400" />
                        {skill.name}
                      </div>
                      <span className="text-xs text-gray-500">{skill.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-800">
                      <div className="h-full rounded-full bg-cyan-400" style={{ width: `${levelPercent}%` }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
