'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceProcess({ steps, section }) {
   const containerRef = useRef(null);

   // Animation for timeline
   useEffect(() => {
      const ctx = gsap.context(() => {
         const steps = gsap.utils.toArray('.process-step');

         steps.forEach((step, i) => {
            gsap.fromTo(step.querySelector('.step-content'),
               { opacity: 0, x: i % 2 === 0 ? 50 : -50 },
               {
                  opacity: 1,
                  x: 0,
                  duration: 1,
                  scrollTrigger: {
                     trigger: step,
                     start: 'top 80%',
                  }
               }
            );

            // Activate circle
            gsap.fromTo(step.querySelector('.step-circle'),
               { scale: 0, borderColor: 'transparent' },
               {
                  scale: 1,
                  borderColor: 'rgba(243, 108, 74, 0.5)',
                  duration: 0.6,
                  scrollTrigger: {
                     trigger: step,
                     start: 'top 70%'
                  }
               }
            );
         });

         // Progress Line
         gsap.fromTo('.progress-line-fill',
            { height: 0 },
            {
               height: '100%',
               ease: 'none',
               scrollTrigger: {
                  trigger: containerRef.current,
                  start: 'top center',
                  end: 'bottom center',
                  scrub: true
               }
            }
         );

      }, containerRef);

      return () => ctx.revert();
   }, []);

   if (!steps || steps.length === 0) return null;

   return (
      <section ref={containerRef} id="process" className="py-32 relative bg-black overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{section?.title || 'Our Process'}</h2>
               <p className="text-xl text-gray-400">{section?.description || 'From concept to delivery, executed with precision.'}</p>
            </div>

            <div className="relative max-w-5xl mx-auto">
               {/* Vertical Line Background */}
               <div className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-px bg-white/10 ml-[-0.5px]"></div>

               {/* Vertical Line Fill (Animated) */}
               <div className="progress-line-fill absolute left-[20px] md:left-[50%] top-0 w-[2px] bg-gradient-to-b from-brand via-brand-secondary to-brand ml-[-1px]"></div>

               <div className="space-y-24">
                  {steps.map((step, i) => (
                     <div key={i} className={`process-step relative flex flex-col md:flex-row gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                        {/* Timeline Node */}
                        <div className="absolute left-[20px] md:left-[50%] top-0 md:top-8 w-10 h-10 -ml-5 flex items-center justify-center z-10">
                           <div className="step-circle w-4 h-4 rounded-full bg-brand border-4 border-black box-content shadow-[0_0_15px_rgba(243,108,74,0.5)]"></div>
                        </div>

                        {/* Content Side */}
                        <div className="md:w-1/2 pl-16 md:pl-0 md:px-16 pt-2">
                           <div className={`step-content text-left ${i % 2 === 1 && 'md:text-right'}`}>
                              <span className="inline-block text-8xl font-bold text-white/5 leading-none absolute -top-10 -z-10 select-none">
                                 {String(i + 1).padStart(2, '0')}
                              </span>
                              <h3 className="text-3xl font-bold text-white mb-4 relative z-0">
                                 {step.stepName ? step.stepName.replace(/^\d+\s*/, '') : `Step ${i + 1}`} {/* Remove number prefix if present */}
                              </h3>
                              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                 {step.description}
                              </p>

                              {step.image && (
                                 <div className={`relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl ${i % 2 === 1 && 'md:ml-auto'}`}>
                                    <img src={step.image} alt="" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500" />
                                 </div>
                              )}
                           </div>
                        </div>

                        {/* Empty Side for Layout Balance */}
                        <div className="md:w-1/2 hidden md:block"></div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
