"use client";

import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
  liveLink?: string;
  logo: string;
}

function ExperienceItem({ company, role, period, description, liveLink, logo }: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left group cursor-pointer"
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-start gap-4">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src={logo}
                alt={`${company} logo`}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                {company}
                {liveLink && (
                  <a 
                    href={liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#734f96] hover:underline text-sm inline-flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Link
                    <FiExternalLink size={14} className="inline-block" />
                  </a>
                )}
                <MdKeyboardArrowDown 
                  className={`transition-transform duration-200 text-gray-400 group-hover:text-white ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </h3>
              <p className="text-gray-400">{role}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{period}</span>
          </div>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-200 ease-in-out pl-16 ${
          isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      company: "Universal Audio",
      role: "Software Developer (Sponsored Project)",
      period: "Jan 2025 - Jun 2025",
      description: "Led team to develop USB audio interface with C++ firmware on the i.MX RT1170 microcontroller. Built desktop application in C++ and JUCE, providing real-time audio control through an intuitive UI. Developed channel mixing and audio effects features, enabling users to apply effects with < 1 ms of latency.",
      logo: "/ua.jpeg"
    },
    {
      company: "Ushur Inc.",
      role: "Software Engineer Intern",
      period: "Jun 2024 - Nov 2024",
      description: "Developed React component library with 50+ customizable variations, cutting UI development time by 30%. Built and documented components with TypeScript, Tailwind, and Storybook.js, boosting maintainability by 20%. Collaborated with cross-functional team of designers and engineers, achieving 98% accuracy to UI/UX designs.",
      logo: "/ushur.jpeg"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto pb-4 pt-8">
      <h2 className="text-2xl font-bold mb-8">Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  );
} 