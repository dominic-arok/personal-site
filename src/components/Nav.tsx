"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MdMenu, MdClose } from 'react-icons/md';
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from 'react-icons/tb';
import { UserIcon, BriefcaseIcon, WrenchIcon, PencilIcon } from '@heroicons/react/24/outline';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface NavProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  peeking: boolean;
  onPeekingChange: (peeking: boolean) => void;
}

export default function Nav({ collapsed, onToggleCollapse, peeking: isPeeking, onPeekingChange: setIsPeeking }: NavProps) {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'About', href: '#about', icon: <UserIcon className="w-4 h-4" /> },
    { label: 'Experience', href: '#experience', icon: <BriefcaseIcon className="w-4 h-4" /> },
    { label: 'Skills', href: '#skills', icon: <WrenchIcon className="w-4 h-4" /> },
    { label: 'Projects', href: '#projects', icon: <PencilIcon className="w-4 h-4" /> }
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

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleCollapse = () => {
    setIsPeeking(false);
    onToggleCollapse();
  };

  const isDesktopVisible = !collapsed || isPeeking;
  const isPeekMode = collapsed && isPeeking;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-[#1c1c1c]/50 backdrop-blur-sm border border-white/10"
      >
        {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Hover strip to peek the collapsed sidebar open on desktop */}
      {collapsed && (
        <div
          className="hidden lg:block fixed left-0 top-0 h-screen w-3 z-30"
          onMouseEnter={() => setIsPeeking(true)}
        />
      )}

      {/* Persistent expand button, visible whenever the sidebar is collapsed and not peeking */}
      {collapsed && !isPeeking && (
        <button
          onClick={onToggleCollapse}
          aria-label="Expand sidebar"
          className="hidden lg:flex fixed top-4 left-4 z-40 p-1 rounded-md text-[#e8dff5] opacity-80 hover:opacity-100 hover:bg-white/10 transition-all"
        >
          <TbLayoutSidebarLeftExpand size={20} />
        </button>
      )}

      {/* Navigation Menu */}
      <nav
        onMouseLeave={() => collapsed && setIsPeeking(false)}
        className={`
        fixed top-0 h-screen w-56 bg-[#1c1c1c] border-r border-[#1a1a1a] p-3 z-40
        shadow-2xl shadow-black/50
        transition-all duration-200 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isDesktopVisible ? 'lg:translate-x-0' : 'lg:-translate-x-full'}
        ${isPeekMode ? 'lg:top-3 lg:bottom-3 lg:left-3 lg:h-auto lg:rounded-xl' : 'lg:top-0 lg:left-0 lg:h-screen'}
      `}>
        <div className="flex items-center justify-between mb-6">
          <Link
            href="#"
            onClick={handleHomeClick}
            aria-label="Home"
            className="rounded-full overflow-hidden opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src="/favicon.ico" alt="Home" width={28} height={28} className="block" />
          </Link>
          <button
            onClick={handleToggleCollapse}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="hidden lg:flex p-1 rounded-md text-[rgb(133,133,133)] hover:text-[rgb(245,245,245)] hover:bg-white/5 transition-colors"
          >
            {collapsed ? <TbLayoutSidebarLeftExpand size={18} /> : <TbLayoutSidebarLeftCollapse size={18} />}
          </button>
        </div>

        <ul className="space-y-0.5">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`flex items-center gap-2 px-2 py-1 rounded-md transition-all duration-200 text-[14px] leading-[20px] font-[500] ${
                activeSection === item.href.substring(1)
                    ? 'text-[rgb(245,245,245)] bg-white/5'
                    : 'text-[rgb(133,133,133)] hover:text-[rgb(245,245,245)] hover:bg-white/5'
              }`}
            >
                <span className="opacity-60">{item.icon}</span>
                {item.label}
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
