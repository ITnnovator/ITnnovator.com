'use client';

export default function ServiceTools({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Tools & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {items.map((tool, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group">
               <div className="w-16 h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100">
                  <img src={tool.logo} alt={tool.name} className="max-w-full max-h-full object-contain" />
               </div>
               <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
