'use client'
import { useState } from 'react';

type Section = 'home' | 'projects' | 'contact';

export const Header = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const handleLinkClick = (section: Section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          onClick={() => handleLinkClick('home')}
          className={`nav-item ${activeSection === 'home' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={() => handleLinkClick('projects')}
          className={`nav-item ${activeSection === 'projects' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => handleLinkClick('contact')}
          className={`nav-item ${activeSection === 'contact' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          About
        </a>
      </nav>
    </div>
  );
};
