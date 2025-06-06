"use client";

import { useState } from 'react';
import { FiExternalLink } from "react-icons/fi";
import Image from 'next/image';

interface ProjectProps {
  title: string;
  technologies: string[];
  description: string;
  liveLink?: string;
  githubLink?: string;
  year: string;
  image?: string;
  category?: string;
}

function ProjectCard({ project, onClick }: { project: ProjectProps; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-200 cursor-pointer w-full flex flex-col"
    >
      {project.image && (
        <div className="relative w-full aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:opacity-80 transition-opacity duration-200"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-[18px] leading-[28px] font-[500] text-[rgb(245,245,245)] mb-2">
          {project.title}
        </h3>
        {project.category && (
          <span className="text-[13px] leading-[20px] font-[500] text-[rgb(133,133,133)] block mb-3">
            {project.category}
          </span>
        )}
        <div className="flex flex-wrap gap-2 justify-center">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-[13px] leading-[20px] font-[500] text-[rgb(245,245,245)]"
            >
              {tech}{index < project.technologies.length - 1 ? " · " : ""}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: ProjectProps; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <div className="relative bg-[#1c1c1c] rounded-lg w-full max-w-3xl">
        <div className="sticky top-0 left-0 right-0 flex justify-end bg-[#1c1c1c] p-4 z-10">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white bg-[#1c1c1c] rounded-full p-1"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 pb-6">
          <div className="space-y-4">
            {project.image && (
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h3 className="text-[18px] leading-[28px] font-[500] text-[rgb(245,245,245)]">
                  {project.title}
                </h3>
                <span className="text-[16px] leading-[24px] font-[400] text-[rgb(133,133,133)]">
                  {project.year}
                </span>
              </div>
              <p className="text-[16px] leading-[24px] font-[400] text-[rgb(133,133,133)]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[13px] leading-[20px] font-[500] text-[rgb(245,245,245)] transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] leading-[24px] font-[400] text-[#734f96] hover:underline inline-flex items-center gap-1"
                  >
                    Live Link
                    <FiExternalLink size={14} className="inline-block" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] leading-[24px] font-[400] text-[#734f96] hover:underline inline-flex items-center gap-1"
                  >
                    Source
                    <FiExternalLink size={14} className="inline-block" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  const projects: ProjectProps[] = [
    {
      title: "Post Boy",
      technologies: ["Go", "Cobra", "Homebrew"],
      description: "Devised CLI tool with Go and Cobra that implements 7 essential Postman features directly in the terminal. Built request executor that stores and runs API requests, enabling 2x faster API testing than traditional GUI tools. Published tool with Homebrew package manager and received 30+ downloads.",
      year: "2025",
      category: "CLI Tool",
      image: "/images/post-boy.png"
    },
    {
      title: "Safe Deposit",
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB Atlas", "Render"],
      description: "Created web app with Node.js / Express.js, providing secure file distribution and up to 1000 concurrent downloads. Stored encrypted passwords with MongoDB Atlas, enabling protected downloads and improving security by 35%. Set up CI/CD workflow with GitHub / Render for auto-deploys, enabling updates within 1 minute of every push.",
      liveLink: "https://safedeposit.onrender.com",
      githubLink: "https://github.com/dominic-arok/SafeDeposit",
      year: "2025",
      category: "Web Application",
      image: "/images/safe-deposit.png"
    },
    {
      title: "Bite Right",
      technologies: ["TypeScript", "HTML", "CSS", "NextJS", "ClerkJS"],
      description: "Collaborated with Agile team across software development lifecycle to develop full-stack app of > 50000 recipes. Implemented and integrated React components with REST API endpoints, improving page responsiveness by 25%. Implemented authentication and configured DNS via Clerk.js to deploy app, reducing downtime by 8 hours.",
      liveLink: "https://biteright.co",
      githubLink: "https://github.com/BiteRight/frontend",
      year: "2024",
      category: "Web Application",
      image: "/images/bite-right.png"
    },
    {
      title: "Doc Service",
      technologies: ["Python", "Flask", "AWS EC2"],
      description: "Established REST APIs with modular design to both auto-fill and render PDFs, reducing delivery time by 75%. Designed thumbnail feature with Python to give users preview of generated PDF, reducing output errors by 15%. Deployed Flask microservice to AWS EC2 instance, enabling testing and 24/7 access by clients.",
      year: "2023",
      category: "Microservice",
      image: "/images/doc-service.png"
    },
    {
      title: "Rule Service",
      technologies: ["Python", "Flask", "AWS EC2"],
      description: "Created Rules Engine microservice for natural language rule creation, saving 12 hours/week in manual configuration. Designed JSON-based rule evaluation system with quick lookup time, reducing rule processing time by 20%. Wrote unit tests for rule creation functionality with Python unittest, increasing test coverage to 95%.",
      year: "2022",
      category: "Microservice",
      image: "/images/rule-service.png"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto py-8">
      <h2 className="text-[18px] leading-[28px] font-[500] text-[rgb(245,245,245)] mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
} 