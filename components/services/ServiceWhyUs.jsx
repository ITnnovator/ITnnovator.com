'use client';

export default function ServiceWhyUs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
             <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Why Choose <br className="hidden md:block"/>Itnnovator?</h2>
             <p className="text-gray-400 text-lg">We don't just build software; we build growth engines tailored to your specific business needs.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
             {items.map((item, i) => (
                <div key={i} className="p-6 border-l-2 border-blue-600 pl-6">
                   <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                   <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
