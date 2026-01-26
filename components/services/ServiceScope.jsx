'use client';

export default function ServiceScope({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-32">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">What's Included</h2>
        <p className="text-lg text-gray-400 max-w-2xl">A comprehensive scope designed to deliver complete outcomes, not just hours logged.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 hover:from-brand hover:via-brand-secondary hover:to-brand transition-all duration-500">
            <div className="h-full bg-[#0a0a0c] p-10 rounded-[23px] hover:bg-[#0f0f12] transition-colors relative overflow-hidden">

              {/* Subtle Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors">{item.title}</h3>
                  {item.icon ? (
                    <div className="w-10 h-10 opacity-30 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <img src={item.icon} alt="" className="w-full h-full object-contain filter invert" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  )}
                </div>

                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
