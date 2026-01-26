'use client';

import Link from 'next/link';

export default function ServiceCases({ cases, title = "Related Success Stories" }) {
  if (!cases || cases.length === 0) {
    return (
      <section className="py-20 bg-black text-center">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-3xl font-bold text-white mb-6">Explore Our Work</h2>
           <p className="text-gray-400 mb-8 max-w-2xl mx-auto">See how we help businesses grow with custom digital solutions.</p>
           <Link href="/cases" className="inline-block px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all">
             View All Case Studies
           </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
           <Link href="/cases" className="text-blue-500 hover:text-blue-400 font-medium hidden md:block">View all cases →</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((project, i) => (
            <Link key={i} href={`/cases/${project.slug}`} className="group block">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 relative">
                 <img 
                    src={project.heroImg || project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                 />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-6 py-2 bg-white text-black rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">View Case</span>
                 </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
              <p className="text-gray-400 line-clamp-2">{project.description}</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <Link href="/cases" className="text-blue-500 hover:text-blue-400 font-medium">View all cases →</Link>
        </div>
      </div>
    </section>
  );
}
