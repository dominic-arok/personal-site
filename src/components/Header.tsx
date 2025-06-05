"use client";

import Link from 'next/link';
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <section className="relative max-w-4xl mx-auto py-8">
      {/* Gradient Background */}
      <div className="absolute top-[-50px] left-[-150%] right-[-150%] h-[250px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#2563eb_0deg,#9333ea_120deg,#db2777_240deg,#2563eb_360deg)] blur-[50px]" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-8">
          <h1 className="text-[48px] leading-[60px] font-[600] text-[rgb(245,245,245)] normal-case">Dominic Arokiaraj</h1>
          <div className="flex items-center">
            <MdLocationOn size={18} className="mr-1 text-[rgb(245,245,245)]" />
            <span className="text-[18px] leading-[28px] font-[500] text-[rgb(245,245,245)]">
              Mountain House, CA
            </span>
          </div>
        </div>
        <div className="space-y-2 mb-8 sm:mb-12">
          <p className="text-[16px] leading-[24px] font-[400] text-[rgb(133,133,133)]">
            Software Engineer and 3rd Year Computer Science Student at UC Santa Cruz.
          </p>
          <p className="text-[16px] leading-[24px] font-[400] text-[rgb(133,133,133)]">
            Excited for opportunities to learn and contribute my skills to interesting software!
          </p>
        </div>
        <div className="mb-8 sm:mb-12">
          <h2 className="text-[18px] leading-[28px] font-[500] text-[rgb(245,245,245)] mb-4">About</h2>
          <div className="space-y-2">
            <p className="text-[16px] leading-[24px] font-[400] text-[rgb(133,133,133)]">
              I am experienced in full-stack software engineering across several types of applications.
            </p>
            <p className="text-[16px] leading-[24px] font-[400] text-[rgb(133,133,133)]">
              I have built web applications, desktop applications, microservices, CLI tools, and libraries.
            </p>
          </div>
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