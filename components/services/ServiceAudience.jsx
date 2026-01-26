'use client';

export default function ServiceAudience({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-white mb-8">Who This Is For</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
            {item.icon && (
               <div className="w-12 h-12 shrink-0 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500">
                  <img src={item.icon} alt="" className="w-6 h-6 object-contain filter brightness-0 invert" />
               </div>
            )}
            <div>
               <p className="text-gray-200 font-medium text-lg">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
