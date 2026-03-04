import {
  Code2,
  LayoutDashboard,
  Server,
  Database,
  Wrench,
  GitBranch,
  Container,
  Cpu
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export interface SkillItem {
  name: string;
  level: SkillLevel;
  icon: LucideIcon;
}

export interface SkillCategory {
  category: "Frontend" | "Backend" | "Tools";
  items: SkillItem[];
}

export const skillLevels: Record<SkillLevel, number> = {
  Beginner: 40,
  Intermediate: 70,
  Advanced: 90
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", level: "Advanced", icon: LayoutDashboard },
      { name: "React", level: "Advanced", icon: Code2 },
      { name: "TypeScript", level: "Advanced", icon: Code2 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Intermediate", icon: Server },
      { name: "PostgreSQL", level: "Intermediate", icon: Database },
      { name: "System Design", level: "Intermediate", icon: Cpu }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "Advanced", icon: GitBranch },
      { name: "Docker", level: "Beginner", icon: Container },
      { name: "CI/CD", level: "Beginner", icon: Wrench }
    ]
  }
];
