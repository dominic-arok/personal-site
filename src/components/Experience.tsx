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
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
          <div className="flex items-start gap-4">
            <div className="relative w-10 sm:w-12 h-10 sm:h-12 flex-shrink-0">
              <Image
                src={logo}
                alt={`${company} logo`}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-[18px] leading-[28px] font-[500] text-[rgb(245,245,245)] flex flex-wrap items-center gap-2">
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
              <p className="text-[16px] leading-[24px] font-[400] text-[rgb(133,133,133)]">{role}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[16px] leading-[24px] font-[400] text-[rgb(133,133,133)]">{period}</span>
          </div>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-200 ease-in-out pl-14 sm:pl-16 ${
          isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[16px] leading-[24px] font-[400] text-[rgb(133,133,133)]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      company: "iHerb",
      role: "Software Engineer Intern",
      period: "Jun 2025 - Present",
      description: "Developed enterprise applications with C# on .NET framework, ensuring 100% adherence to specifications. Migrated legacy systems to modern .NET, enabling long-term support and reducing technical debt by 35%. Deployed upgraded APIs to Kubernetes via Harness, fixing deployment blockers and raising service uptime by 25%.",
      logo: "/iherb.jpeg"
    },
    {
      company: "Universal Audio (Sponsored Project)",
      role: "Software Engineer Intern",
      period: "Jan 2025 - Jun 2025",
      description: "Led team to develop USB audio interface with C++ microcontroller firmware, enabling 4 channel audio streaming. Engineered accompanying desktop app in C++ / JUCE using OOP principles, providing 13 types of audio control. Produced mixing / audio effects features using DSP algorithms, enabling users to apply effects with < 1 ms of latency.",
      logo: "/ua.jpeg"
    },
    {
      company: "Ushur",
      role: "Software Engineer Intern",
      period: "Jun 2024 - Nov 2024",
      description: "Developed frontend component library of 50+ customizable variations with React, cutting UI building time by 30%. Built components / documentation with TypeScript / Tailwind / Storybook.js, accelerating integration by 15%. Delivered UI features by working cross-functionally with design team, securing 100% accuracy to UI/UX blueprint.",
      logo: "/ushur.jpeg"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto pb-4 pt-8">
      <h2 className="text-[18px] leading-[28px] font-[500] text-[rgb(245,245,245)] mb-8">Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  );
} 