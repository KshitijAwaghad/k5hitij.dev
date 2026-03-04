import Image from "next/image";

export default function SystemDesign() {
  return (
    <section className="section-shell" id="system-design" aria-labelledby="system-design-title">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 id="system-design-title" className="text-3xl font-semibold text-white">
            How I Design Systems
          </h2>
          <ul className="mt-6 space-y-4 text-gray-300">
            <li>
              <span className="font-semibold text-white">Modular Breakdown Thinking:</span> I separate domains into
              clear modules with explicit contracts.
            </li>
            <li>
              <span className="font-semibold text-white">Scalability-First Mindset:</span> I design flows that remain
              stable as data, users, and complexity grow.
            </li>
            <li>
              <span className="font-semibold text-white">Clean UI/UX Principles:</span> I prioritize clarity,
              hierarchy, and predictable interactions.
            </li>
            <li>
              <span className="font-semibold text-white">Performance Awareness:</span> I optimize loading paths,
              rendering cost, and runtime efficiency early.
            </li>
          </ul>
        </div>

        <div className="card overflow-hidden p-4">
          <Image
            src="/WhatsApp%20Image%202026-03-03%20at%2013.27.41.jpeg"
            alt="System flow placeholder"
            width={800}
            height={500}
            className="h-auto w-full rounded-lg opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
