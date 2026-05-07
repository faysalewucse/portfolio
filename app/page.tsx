import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Competitive } from "./components/Competitive";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Competitive />
        <Experience />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
