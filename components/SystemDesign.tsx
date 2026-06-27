export default function SystemDesign() {
  return (
    <section className="section-shell" id="system-design" aria-labelledby="system-design-title">
      <h2 id="system-design-title" className="text-3xl font-semibold text-white">
        How I Design Systems
      </h2>
      <ul className="mt-6 max-w-3xl space-y-4 text-gray-300">
        <li>
          <span className="font-semibold text-white">Modular Breakdown Thinking:</span> I separate domains into clear
          modules with explicit contracts.
        </li>
        <li>
          <span className="font-semibold text-white">Scalability-First Mindset:</span> I design flows that remain
          stable as data, users, and complexity grow.
        </li>
        <li>
          <span className="font-semibold text-white">Clean UI/UX Principles:</span> I prioritize clarity, hierarchy,
          and predictable interactions.
        </li>
        <li>
          <span className="font-semibold text-white">Performance Awareness:</span> I optimize loading paths, rendering
          cost, and runtime efficiency early.
        </li>
      </ul>
    </section>
  );
}
