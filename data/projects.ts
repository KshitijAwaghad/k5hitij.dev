export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    name: "Smart Campus Grievance Management System",
    description:
      "A structured grievance lifecycle platform for campus operations with role-based flows and SLA tracking.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/KshitijAwaghad/smart-campus-grievance",
    liveUrl: "https://smart-campus-demo.vercel.app"
  },
  {
    name: "Sai Shoes - Premium Footwear House",
    description:
      "Luxury footwear crafted for everyday distinction. Sai Shoes curates elevated silhouettes for modern India.",
    techStack: ["React", "TypeScript", "Express", "MongoDB"],
    githubUrl: "https://github.com/KshitijAwaghad/Sai-Shoes",
    liveUrl: "https://sai-shoes.vercel.app"
  },
  {
    name: "Issue Tracker for Engineering Teams",
    description:
      "Collaborative issue tracking board with workflow states, ownership management, and lightweight reporting.",
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "SQLite"],
    githubUrl: "https://github.com/KshitijAwaghad/issue-tracker",
    liveUrl: "https://issue-tracker-demo.vercel.app"
  },
  {
    name: "Performance Audit Toolkit",
    description:
      "Frontend-first toolkit for auditing Core Web Vitals and surfacing practical optimization recommendations.",
    techStack: ["TypeScript", "Vite", "Lighthouse", "Web Vitals"],
    githubUrl: "https://github.com/KshitijAwaghad/performance-audit-toolkit",
    liveUrl: "https://performance-audit-toolkit.vercel.app"
  }
];
