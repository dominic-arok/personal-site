import Header from '../components/Header';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#171717] text-white relative">
      <Nav />
      <div className="lg:ml-64 relative z-10">
        <div className="container mx-auto px-8 lg:px-16 py-8">
          <div id="about">
            <Header />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
