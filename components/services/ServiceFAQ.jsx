'use client';

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
    <section className="py-32 bg-[#050505]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">Common Questions</h2>

        <div className="space-y-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-300 rounded-xl overflow-hidden ${openIndex === i
                ? 'bg-white/[0.03]'
                : 'bg-transparent hover:bg-white/[0.02]'
                }`}
            >
              <button
                onClick={() => setOpenIndex(active => active === i ? null : i)}
                className="flex items-center justify-between w-full p-6 text-left group"
              >
                <div className="flex items-center gap-4">
                  {/* Status Indicator */}
                  <div className={`w-1 h-6 rounded-full transition-all duration-300 ${openIndex === i ? 'bg-brand h-8' : 'bg-gray-800 group-hover:bg-gray-700'
                    }`} />

                  <span className={`text-lg transition-colors leading-snug ${openIndex === i ? 'text-white font-semibold' : 'text-gray-400 group-hover:text-gray-300'}`}>
                    {item.question}
                  </span>
                </div>

                <span className={`flex items-center justify-center w-8 h-8 rounded-full border border-white/5 text-gray-400 transition-all duration-300 ${openIndex === i ? 'text-brand border-brand/30 rotate-180' : 'rotate-0'}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4L6 8L10 4" /></svg>
                </span>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 pl-[3.25rem] text-gray-400 text-lg leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
