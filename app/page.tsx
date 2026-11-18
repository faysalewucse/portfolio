import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Competitive } from "./components/Competitive";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { ClientWork } from "./components/ClientWork";
import { TechStack } from "./components/TechStack";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <TechStack />
        <ClientWork />
        <Projects />
        <Competitive />
        <Experience />
        <Education />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
