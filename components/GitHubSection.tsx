"use client";

import GitHubCalendar from "react-github-calendar";

export default function GitHubSection() {
  return (
    <section className="section-shell" aria-labelledby="github-title">
      <h2 id="github-title" className="text-3xl font-semibold text-white">
        GitHub Contributions
      </h2>
      <div className="mt-6 overflow-x-auto rounded-xl border border-gray-800 bg-gray-900 p-4">
        <GitHubCalendar
          username="KshitijAwaghad"
          colorScheme="dark"
          blockSize={14}
          blockMargin={4}
          fontSize={14}
          theme={{
            dark: ["#1f2937", "#164e63", "#0e7490", "#0891b2", "#22d3ee"]
          }}
        />
      </div>
    </section>
  );
}
