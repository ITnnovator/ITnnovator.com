'use client';

export default function ServiceWhyUs({ items, section }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Header Copy */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-secondary font-bold uppercase tracking-widest text-sm mb-4 block">{section?.subtitle || 'Our Advantage'}</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">{section?.title || 'Why Partner With Us?'}</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              {section?.description || 'We combine technical excellence with business strategy. No black boxes, no jargon—just measurable results and transparent delivery.'}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 gap-6">
            {items.map((item, i) => (
              <div key={i} className="group relative p-[1px] rounded-3xl bg-gradient-to-r from-white/10 to-transparent hover:from-brand hover:to-brand-secondary transition-all duration-500">
                <div className="bg-[#0a0a0c] p-8 md:p-10 rounded-[23px] relative z-10 h-full">
                  <div className="flex flex-col md:flex-row gap-6 md:items-start">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20 text-brand group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-300 shadow-[0_0_15px_rgba(243,108,74,0.1)] group-hover:shadow-[0_0_20px_rgba(243,108,74,0.4)]">
                      {item.icon ? (
                        <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                      ) : (
                        <span className="text-lg font-bold">{i + 1}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand group-hover:to-brand-secondary transition-all">{item.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
