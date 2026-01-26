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

  return (
    <nav className="hidden lg:block sticky top-32 self-start w-64 pr-8 border-r border-white/10 shrink-0">
      <h3 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">On this page</h3>
      <ul className="space-y-3">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block text-sm transition-colors duration-200 ${
                activeId === id ? 'text-blue-500 font-medium translate-x-1' : 'text-gray-500 hover:text-gray-300'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                setActiveId(id);
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
