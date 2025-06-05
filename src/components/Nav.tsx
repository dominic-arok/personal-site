"use client";

import { useEffect, useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { UserIcon, BriefcaseIcon, WrenchIcon, PencilIcon } from '@heroicons/react/24/outline';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems: NavItem[] = [
    { label: 'About', href: '#about', icon: <UserIcon className="w-5 h-5" /> },
    { label: 'Experience', href: '#experience', icon: <BriefcaseIcon className="w-5 h-5" /> },
    { label: 'Skills', href: '#skills', icon: <WrenchIcon className="w-5 h-5" /> },
    { label: 'Projects', href: '#projects', icon: <PencilIcon className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-[#1c1c1c]/50 backdrop-blur-sm border border-white/10"
      >
        {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Navigation Menu */}
      <nav className={`
        fixed lg:left-0 top-0 h-screen w-56 bg-[#1c1c1c] border-r border-[#1a1a1a] p-4 pt-16 z-40
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`block px-2 py-1.5 rounded-lg transition-all duration-200 text-[14px] leading-[20px] font-[500] ${
                  activeSection === item.href.substring(1)
                    ? 'text-[rgb(245,245,245)] bg-white/5'
                    : 'text-[rgb(133,133,133)] hover:text-[rgb(245,245,245)] hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="opacity-70">{item.icon}</span>
                  {item.label}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
} 