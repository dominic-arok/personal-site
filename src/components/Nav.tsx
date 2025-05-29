"use client";

import { useEffect, useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>('about');
  
  const navItems: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' }
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

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-[#1a1a1a] p-6 pt-12 z-20">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                activeSection === item.href.substring(1)
                  ? 'text-white bg-white/5'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 