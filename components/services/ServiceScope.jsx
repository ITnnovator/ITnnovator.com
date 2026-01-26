'use client';

export default function ServiceScope({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-white mb-8">What's Included</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors group">
            {item.icon && (
               <img src={item.icon} alt="" className="w-10 h-10 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
            )}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
