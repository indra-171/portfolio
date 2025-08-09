import React from 'react';
import { motion } from 'framer-motion';

interface VerticalNavProps {
  currentSection: number;
}

const VerticalNav: React.FC<VerticalNavProps> = ({ currentSection }) => {
  const sections = [
    { id: 'hero', label: 'Home', icon: '🌀' },
    { id: 'projects', label: 'Projects', icon: '🧩' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className="fixed left-10 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        role="navigation"
        aria-label="Section navigation"
      >
        <div className="bg-gray-800/80 backdrop-blur-md rounded-full p-3 border border-blue-700/60">
          <ul className="space-y-10">
            {sections.map((section, index) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`group relative flex items-center justify-center w-15 h-6 rounded-half transition-all duration-100 ${
                    currentSection === index
                      ? 'bg-gradient-to-r from-blue-900 to-white-200 text-blue'
                      : 'text-white-400 hover:text-black hover:bg-white-700/50'
                  }`}
                  aria-label={`Navigate to ${section.label}`}
                  aria-current={currentSection === index ? 'page' : undefined}
                >
                  <span className="text-lg font-mono">{section.icon}</span>
                  
                  {/* Tooltip */}
                  <div className={`absolute left-8 px-5 py-2 bg-white-600 text-white text-sm rounded-lg opacity-0 pointer-events-none transition-all duration-100 whitespace-nowrap ${
                    currentSection === index ? 'opacity-100' : 'group-hover:opacity-100'
                  }`}>
                    {section.label}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </button>

                {/* Progress indicator */}
                {index < sections.length - 1 && (
                  <div className="flex justify-center mt-16">
                    <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent"></div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav 
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 lg:hidden"
        role="navigation"
        aria-label="Section navigation"
      >
        <div className="bg-gray-800/6 backdrop-blur-md rounded-full px-6 py-1 border border-gray-900/50">
          <ul className="flex space-x-12">
            {sections.map((section, index) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`flex flex-col items-center gap-1 transition-all duration-100 ${
                    currentSection === index
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  aria-label={`Navigate to ${section.label}`}
                  aria-current={currentSection === index ? 'page' : undefined}
                >
                  <span className="text-sm font-mono">{section.icon}</span>
                  <span className="text-xs">{section.label}</span>
                  {currentSection === index && (
                    <motion.div
                      className="w-1 h-1 bg-yellow-500 rounded-half"
                      layoutId="activeIndicator"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default VerticalNav;