import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background/80 backdrop-blur-sm">
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
