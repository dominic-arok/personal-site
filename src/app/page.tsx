"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Nav from '../components/Nav';

export default function Home() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isPeeking, setIsPeeking] = useState(false);
  const isPeekMode = isNavCollapsed && isPeeking;

  return (
    <div className="min-h-screen bg-[#171717] text-white relative">
      <Nav
        collapsed={isNavCollapsed}
        onToggleCollapse={() => setIsNavCollapsed((prev) => !prev)}
        peeking={isPeeking}
        onPeekingChange={setIsPeeking}
      />
      <div className={`relative z-10 transition-[margin] duration-200 ease-in-out ${isNavCollapsed ? 'lg:ml-0' : 'lg:ml-64'}`}>
        <div className={`mx-auto px-8 lg:px-16 py-6 transition-[max-width] duration-200 ease-in-out ${isNavCollapsed ? 'max-w-[1400px]' : 'max-w-5xl'}`}>
          <div id="about">
            <Header />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects" className={`transition-[padding] duration-200 ease-in-out ${isPeekMode ? 'lg:pr-44' : ''}`}>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
