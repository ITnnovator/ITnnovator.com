'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function ServiceHero({ service }) {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current.children, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const { hero } = service;
  
  // Fallbacks
  const headline = hero?.headline || service.title;
  const subheadline = hero?.subheadline || service.description;
  const image = hero?.image || service.heroImg;

  return (
    <section ref={heroRef} className="relative w-full min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {image ? (
            <img src={image} alt={service.title} className="w-full h-full object-cover opacity-40" />
        ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div ref={contentRef} className="max-w-4xl">
           
           {/* Breadcrumb */}
           <div className="flex items-center gap-2 text-sm md:text-base text-gray-400 mb-6 font-medium">
             <Link href="/" className="hover:text-white transition-colors">Home</Link>
             <span>/</span>
             <Link href="/services" className="hover:text-white transition-colors">Services</Link>
             <span>/</span>
             <span className="text-blue-500">{service.title}</span>
           </div>

           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
             {headline}
           </h1>

           {subheadline && (
             <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-10 font-light">
               {subheadline}
             </p>
           )}

           <div className="flex flex-wrap gap-4">
             {hero?.ctas?.length > 0 ? (
               hero.ctas.map((cta, i) => (
                 <Link 
                   key={i} 
                   href={cta.link || '/contact'}
                   className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                     cta.variant === 'secondary' 
                       ? 'bg-transparent border border-white text-white hover:bg-white hover:text-black' 
                       : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30'
                   }`}
                 >
                   {cta.text}
                 </Link>
               ))
             ) : (
               /* Default CTA if none configured */
               <Link href="/contact" className="px-8 py-4 rounded-full text-lg font-semibold bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1">
                 Get Started
               </Link>
             )}
           </div>

        </div>
      </div>
    </section>
  );
}
