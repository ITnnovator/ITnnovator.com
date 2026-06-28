'use client';

import { useEffect, useState } from 'react';

export default function ServiceTOC({ sections }) {
  const [activeId, setActiveId] = useState('');

  if (!sections || sections.length === 0) return null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // Increased offset for breathing room
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-sm relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-50"></div>

      <div className="bg-[#0a0a0c]/90 rounded-[15px] p-6 lg:p-8">
        <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-3 opacity-90">
          <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
          Contents
        </h3>

        <nav>
          <ul className="space-y-1 relative">
            {/* Vertical guideline */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/5 -z-10" />

            {sections.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className={`group flex items-center gap-4 py-2 text-sm transition-all duration-300 rounded-lg px-2 -ml-2 ${isActive
                      ? 'text-white font-semibold bg-white/5'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'
                      }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shrink-0 ${isActive
                      ? 'bg-brand shadow-[0_0_10px_rgba(130,157,255,0.8)] scale-125'
                      : 'bg-gray-800 border border-gray-700 group-hover:border-gray-500'
                      }`}></span>
                    <span className="truncate">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA in TOC */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <a href="#contact" className="block text-center w-full py-3 rounded-lg bg-brand hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-brand/20">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
