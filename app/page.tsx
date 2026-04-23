import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
