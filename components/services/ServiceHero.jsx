'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function ServiceHero({ service }) {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      // Staggered Text Reveal
      tl.fromTo(
        '.hero-reveal',
        { y: 60, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.2, stagger: 0.15, delay: 0.2 }
      );

      // Buttons Scale Up
      tl.fromTo(
        '.hero-btn',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1 },
        '-=0.6'
      );

      // Subtle Parallax on BG
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const { hero } = service;

  // Fallbacks
  const headline = hero?.headline || service.title;
  const subheadline = hero?.subheadline || service.description;
  const image = hero?.image || service.heroImg;

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#050505]"
    >

      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0">
        {image ? (
          <div className="hero-bg w-full h-[120%] relative -top-[10%]">
            <img
              src={image}
              alt={service.title}
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black" />
        )}
        {/* Advanced Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div ref={contentRef} className="max-w-4xl">

          {/* Breadcrumb - Styled Minimal */}
          <div className="hero-reveal flex items-center gap-3 text-sm tracking-wide text-gray-500 mb-8 font-medium uppercase bg-white/5 border border-white/5 w-max px-4 py-1.5 rounded-full backdrop-blur-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-700">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="text-gray-700">/</span>
            <span className="text-brand">{service.title}</span>
          </div>

          <h1 className="hero-reveal text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] mb-8 tracking-tight">
            {headline}
          </h1>

          {subheadline && (
            <p className="hero-reveal text-lg md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-12 font-light border-l-2 border-brand/30 pl-6">
              {subheadline}
            </p>
          )}

          <div className="flex flex-wrap gap-5">
            {hero?.ctas?.length > 0 ? (
              hero.ctas.map((cta, i) => (
                <Link
                  key={i}
                  href={cta.link || '/contact'}
                  className={`hero-btn group relative px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 overflow-hidden ${cta.variant === 'secondary'
                    ? 'bg-transparent border border-white/20 text-white hover:bg-white/10'
                    : 'bg-white text-black hover:bg-white hover:text-brand shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(130,157,255,0.3)]'
                    }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {cta.text}
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </Link>
              ))
            ) : (
              <Link href="/contact" className="hero-btn group relative px-8 py-4 rounded-full text-base font-semibold bg-white text-black hover:bg-gray-100 transition-all duration-300">
                Get Started
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
