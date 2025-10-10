import { HeaderNavBar } from "../src/components/headerNavBar/HeaderNavBar";
import { AboutSection } from "../src/components/aboutSection/AboutSection";
import { SkillContainer } from "../src/components/skill/SkillContainer";
import { ProjectContainer } from "../src/components/projects/ProjectContainer";
import { Contact } from "../src/components/contact/Contact";

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-night text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-linear opacity-80" />
      <HeaderNavBar />
      <main className="space-y-12 pt-24 sm:pt-28">
        <AboutSection />
        <SkillContainer />
        <ProjectContainer />
        <Contact />
      </main>
    </div>
  );
}
