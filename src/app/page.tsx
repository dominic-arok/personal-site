"use client";

import Link from 'next/link';
import { IoHomeOutline } from 'react-icons/io5';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Nav from '../components/Nav';

export default function Home() {
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#171717] text-white relative">
      <Link
        href="#"
        onClick={handleHomeClick}
        className="fixed top-4 left-5 z-50 text-gray-400 hover:text-[#734f96] transition-colors"
        aria-label="Home"
      >
        <IoHomeOutline size={28} />
      </Link>
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
