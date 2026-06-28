'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function ServiceTools({ items, section }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-tight">{section?.title || 'Tools & Technologies'}</h2>

        {/* Strictly 4 columns on large screens as requested */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
          {items.map((tool, i) => (
            <TiltToolCard key={i} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltToolCard({ tool }) {
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;

    if (!card || !content || !glow) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle tilt for smaller cards
      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        duration: 0.4,
        ease: 'power2.out'
      });

      gsap.to(content, {
        x: (x - centerX) / 8,
        y: (y - centerY) / 8,
        duration: 0.4,
      });

      gsap.to(glow, {
        x: x,
        y: y,
        opacity: 0.8,
        duration: 0.2
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)'
      });
      gsap.to(content, {
        x: 0,
        y: 0,
        duration: 0.6
      });
      gsap.to(glow, {
        opacity: 0,
        duration: 0.6
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent hover:from-brand hover:to-brand-secondary transition-all duration-500 h-[180px]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative h-full bg-[#0a0a0c] rounded-[15px] overflow-hidden flex flex-col items-center justify-center">
        {/* Dynamic Glow */}
        <div
          ref={glowRef}
          className="absolute w-[150px] h-[150px] bg-brand/30 rounded-full blur-[40px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 mix-blend-screen"
        />

        <div ref={contentRef} className="relative z-10 flex flex-col items-center">
          <div className="w-14 h-14 mb-4 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
            {tool.logo ? (
              <img src={tool.logo} alt={tool.name} className="max-w-full max-h-full object-contain" />
            ) : (
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-malibu/20 to-brand-secondary/20 border border-white/10 flex items-center justify-center text-2xl font-bold text-white/60 group-hover:text-white group-hover:from-malibu/40 group-hover:to-brand-secondary/40 transition-all">
                {tool.name?.charAt(0)?.toUpperCase() || '?'}
              </div>
            )}
          </div>
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider group-hover:text-white transition-colors">
            {tool.name}
          </span>
        </div>
      </div>
    </div>
  );
}
