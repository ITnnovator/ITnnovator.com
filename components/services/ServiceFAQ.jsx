'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ServiceFAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-20 lg:py-32 bg-[#050505] relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-malibu/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 relative z-10">
        {/* Left Sidebar Header */}
        <div className="lg:w-1/3 lg:sticky lg:top-40 self-start">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50 mb-6">
            Common <br className="hidden lg:block" /><span className="text-malibu italic font-serif font-light">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
            Everything you need to know about this service. Can't find the answer you're looking for? Feel free to <Link href="/contact" className="text-malibu hover:text-white transition-colors border-b border-malibu/30 hover:border-white">contact our team</Link>.
          </p>
        </div>

        {/* Right Content Accordion */}
        <div className="lg:w-2/3 space-y-4">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`group relative p-[1px] rounded-2xl transition-all duration-500 overflow-hidden ${isOpen
                    ? 'bg-gradient-to-r from-malibu/50 to-brand-secondary/50 shadow-[0_0_30px_rgba(130,157,255,0.15)]'
                    : 'bg-white/10 hover:bg-white/20'
                  }`}
              >
                <div className="bg-[#0a0a0c] rounded-[15px] relative z-10 transition-colors duration-500">
                  <button
                    onClick={() => setOpenIndex(active => active === i ? null : i)}
                    className="flex items-center justify-between w-full p-6 md:p-8 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-6 pr-4">
                      <span className={`text-xl md:text-2xl font-semibold transition-colors duration-300 leading-tight ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                        {item.question}
                      </span>
                    </div>

                    <div className={`relative shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'border-malibu/50 bg-malibu/10 rotate-180' : 'border-white/10 bg-white/5 group-hover:border-white/30'}`}>
                      {/* Plus / Minus Icon */}
                      <span className={`absolute w-4 h-[2px] rounded-full transition-colors duration-300 ${isOpen ? 'bg-malibu' : 'bg-white'}`}></span>
                      <span className={`absolute h-4 w-[2px] rounded-full transition-all duration-300 ${isOpen ? 'bg-transparent rotate-90' : 'bg-white'}`}></span>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="p-6 md:p-8 pt-0 text-gray-400 text-lg leading-relaxed border-t border-white/5 mt-2 mx-6 md:mx-8">
                      <div className="pt-6">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
