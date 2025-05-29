"use client";

import Link from 'next/link';
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <section className="relative max-w-4xl mx-auto py-8">
      {/* Gradient Background */}
      <div className="absolute top-[-100px] left-[-200px] right-[-200px] h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#2563eb_0deg,#9333ea_120deg,#db2777_240deg,#2563eb_360deg)] blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold text-white">Dominic Arokiaraj</h1>
          <div className="flex items-center text-gray-400 text-base">
            <MdLocationOn size={16} className="mr-1" />
            Mountain House, CA
          </div>
        </div>
        <p className="text-lg mb-12 text-gray-300">
          3rd Year Computer Science Student at UC Santa Cruz. Excited for opportunities to learn and contribute my skills to interesting software!
        </p>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-400">
            I have experience in full-stack software engineering across several types of applications. I have built web applications, desktop applications, microservices, CLI tools, and libraries.
          </p>
        </div>
        <div id="contact" className="flex gap-6">
          <Link 
            href="mailto:dominic.arok@outlook.com" 
            className="text-gray-400 hover:text-[#734f96] transition-colors"
            aria-label="Email"
          >
            <MdEmail size={24} />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/dominic-arok/" 
            target="_blank" 
            className="text-gray-400 hover:text-[#734f96] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link 
            href="https://github.com/dominic-arok" 
            target="_blank" 
            className="text-gray-400 hover:text-[#734f96] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
} 