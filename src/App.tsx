import About       from "./components/About";
import Contact     from "./components/Contact";
import Creative    from "./components/Creative";
import Experience  from "./components/Experience";
import Footer      from "./components/Footer";
import Hackathons  from "./components/Hackathons";
import Hero        from "./components/Hero";
import Navbar      from "./components/Navbar";
import Projects    from "./components/Projects";
import Resume      from "./components/Resume";
import Skills      from "./components/Skills";
import { useLenis } from "./hooks/useLenis";

export default function App() {
  useLenis();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#F5F0E8" }}>
      <Navbar  scrollTo={scrollTo} />
      <Hero    scrollTo={scrollTo} />
      <About />
      <Skills />
      <Projects />
      <Creative />
      <Experience />
      <Hackathons />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}