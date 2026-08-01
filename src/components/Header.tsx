"use client";

import Link from "next/link";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function Header() {
  return (
    <section className="relative py-8">
      {/* Purple Header Background */}
      <div className="absolute top-[-56px] left-[-100%] right-[-100%] h-[220px] pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[#734f96]" />
      </div>

      <div className="relative mt-[196px] mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <h1 className="text-[48px] leading-[60px] font-[600] text-[rgb(245,245,245)] normal-case">
            Dominic Arokiaraj
          </h1>
          <div className="flex items-center sm:translate-y-1">
            <MdLocationOn size={18} className="mr-1 text-[rgb(133,133,133)]" />
            <span className="text-[18px] leading-[28px] font-[500] text-[rgb(133,133,133)]">
              Atlanta, GA
            </span>
          </div>
        </div>
        <div className="pt-4 sm:pt-6">
          <div className="space-y-2">
            <p className="text-[16px] leading-[24px] font-[400] text-[rgb(133,133,133)]">
              Software Engineer | UC Santa Cruz Alum
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-[18px] leading-[28px] font-[500] text-[rgb(245,245,245)] mb-4">
            About
          </h2>
          <div className="space-y-2">
            <p className="text-[16px] leading-[24px] font-[400] text-[rgb(133,133,133)]">
              I am a software engineer with a passion for backend engineering in
              the world of fintech applications!
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
          <a
            href="/resume/DominicArokiarajResume.pdf"
            download="DominicArokiarajResume.pdf"
            className="text-gray-400 hover:text-[#734f96] transition-colors"
            aria-label="Download Resume"
            title="Download Dominic's Resume"
          >
            <FaFileDownload size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
