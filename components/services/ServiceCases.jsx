'use client';

import Link from 'next/link';

export default function ServiceCases({ cases }) {
  if (!cases || cases.length === 0) return null;

  return (
    <section id="cases" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-brand font-bold uppercase tracking-widest text-sm mb-2 block">Our Work</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Recent Case Studies</h2>
          </div>
          <Link href="/work" className="text-white text-lg font-medium border-b border-white pb-1 hover:text-brand hover:border-brand transition-all w-max">
            View All Work
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {cases.map((project, i) => (
            <Link key={i} href={`/work/${project.slug}`} className="group block">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                {/* Image */}
                {project.heroImage ? (
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-500">No Image</div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-lg line-clamp-2">
                {project.description}
              </p>

              {/* Tags if available */}
              {project.services && project.services.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.services.slice(0, 3).map((tag, t) => (
                    <span key={t} className="text-xs font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {typeof tag === 'string' ? tag : tag.title}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
