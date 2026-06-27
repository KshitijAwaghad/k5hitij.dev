import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import SystemDesign from "@/components/SystemDesign";
import Skills from "@/components/Skills";
import Learning from "@/components/Learning";
import GitHubSection from "@/components/GitHubSection";
import RecruiterCTA from "@/components/RecruiterCTA";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Impact />
      <FeaturedProject />
      <Projects />
      <SystemDesign />
      <Skills />
      <Learning />
      <GitHubSection />
      <RecruiterCTA />
      <Contact />
    </>
  );
}
