"use client";

import { useState } from 'react';
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

interface ProjectProps {
  title: string;
  technologies: string[];
  description: string;
  liveLink?: string;
  githubLink?: string;
}

function ProjectItem({ title, technologies, description, liveLink, githubLink }: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left group cursor-pointer"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              {liveLink && (
                <a 
                  href={liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#734f96] hover:underline inline-flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Link
                  <FiExternalLink size={14} className="inline-block" />
                </a>
              )}
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#734f96] hover:underline inline-flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub size={16} className="inline-block" />
                  Source
                  <FiExternalLink size={14} className="inline-block" />
                </a>
              )}
            </div>
          </div>
          <MdKeyboardArrowDown 
            className={`transition-transform duration-200 text-gray-400 group-hover:text-white ${
              isExpanded ? 'rotate-180' : ''
            }`}
            size={20}
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs sm:text-sm transition-all duration-200 hover:scale-105 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {tech}
            </span>
          ))}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Post Boy",
      technologies: ["Go", "Cobra", "Homebrew"],
      description: "Developed CLI tool with Go that stores/runs API requests, enabling 2x faster API testing than traditional GUI tools. Implemented support for 7 essential Postman features, including request headers, JSON bodies, and named collections. Published tool to Homebrew package manager and received 50+ downloads.",
    },
    {
      title: "Safe Deposit",
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB Atlas", "Render"],
      description: "Created web application in Node.js and Express.js that provides secure file distribution at scale. Constructed user-friendly frontend interface with EJS, reducing file upload process to < 5 seconds. Stored encrypted passwords in MongoDB Atlas, enabling protected downloads and improving security by 35%.",
      liveLink: "https://safedeposit.onrender.com",
      githubLink: "https://github.com/dominic-arok/SafeDeposit"
    },
    {
      title: "Bite Right",
      technologies: ["TypeScript", "HTML", "CSS", "NextJS", "ClerkJS"],
      description: "Collaborated with Agile team of 5 to develop full-stack recipe platform featuring over 50000 recipes. Implemented and integrated React components with REST API endpoints, improving data retrieval by 25%. Configured DNS, OAuth, and environment keys via Clerk.js to deploy app, reducing downtime by 8 hours.",
      liveLink: "https://biteright.co",
      githubLink: "https://github.com/BiteRight/frontend"
    },
    {
      title: "Doc Service",
      technologies: ["Python", "Flask", "AWS EC2"],
      description: "Developed REST API microservice to auto-fill and generate PDFs with user data, reducing delivery time by 75%. Designed thumbnail feature with Python to give users preview of generated PDF, reducing output errors by 15%. Deployed Flask microservice to AWS EC2 instance, enabling testing and persistent access by clients."
    },
    {
      title: "Rule Service",
      technologies: ["Python", "Flask", "AWS EC2"],
      description: "Created Rules Engine application for natural language rule creation, saving 12 hours/week in manual configuration. Designed JSON-based rule evaluation system with quick lookup time, reducing rule processing time by 20%. Hosted Flask application on AWS EC2 instance for easy client integration and testing"
    }
  ];

  return (
    <section className="relative max-w-4xl mx-auto py-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-8">Projects</h2>
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-[-200px] right-[-200px] h-[300px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#db2777_0deg,#9333ea_120deg,#2563eb_240deg,#db2777_360deg)] blur-[100px]" />
      </div>
    </section>
  );
} 