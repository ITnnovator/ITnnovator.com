'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function ServiceAudience({ items, section }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-20 lg:mt-32">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{section?.title || 'Who This Is For'}</h2>
        <div className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-brand to-brand-secondary mb-4 opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {items.map((item, i) => (
          <TiltCard key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

// Sub-component for 3D Tilt Effect
function TiltCard({ item, index }) {
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

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        duration: 0.4,
        ease: 'power2.out'
      });

      gsap.to(content, {
        x: (x - centerX) / 10,
        y: (y - centerY) / 10,
        duration: 0.4,
      });

      gsap.to(glow, {
        x: x,
        y: y,
        opacity: 0.6,
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
      className="group relative h-full rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-brand hover:via-brand-secondary hover:to-brand transition-all duration-500"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative h-full bg-[#0a0a0c] rounded-[23px] overflow-hidden">
        {/* Dynamic Glow Gradient */}
        <div
          ref={glowRef}
          className="absolute w-[300px] h-[300px] bg-brand/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 mix-blend-screen"
        />

        <div ref={contentRef} className="relative z-10 p-8 flex flex-col h-full pointer-events-none">
          {item.icon && (
            <div className="w-14 h-14 mb-8 bg-black/50 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-brand/50 group-hover:scale-110 transition-all duration-300">
              <img
                src={item.icon}
                alt=""
                className="w-7 h-7 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
          )}

          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand group-hover:to-brand-secondary transition-all">
            {item.text}
          </h3>

          <div className="mt-auto pt-6 flex items-center text-sm font-medium text-gray-500 group-hover:text-brand transition-colors">
            <span className="w-8 h-[1px] bg-gray-700 group-hover:bg-brand transition-colors mr-3"></span>
            Is this you?
          </div>
        </div>
      </div>
    </div>
  );
}
