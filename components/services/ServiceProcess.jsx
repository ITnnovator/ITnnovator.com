'use client';

export default function ServiceProcess({ steps }) {
  if (!steps || steps.length === 0) return null;

  return (
    <section id="process" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">A proven methodology designed to deliver consistent, high-quality results.</p>
         </div>

         <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden md:block" />

            <div className="space-y-12 md:space-y-24">
               {steps.map((step, i) => (
                  <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                     
                     {/* Image Side */}
                     <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative aspect-video w-full max-w-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/10">
                           {step.image ? (
                              <img src={step.image} alt={step.stepName} className="w-full h-full object-cover" />
                           ) : (
                              <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-700">No Image</div>
                           )}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                     </div>

                     {/* Text Side */}
                     <div className="w-full md:w-1/2 text-center md:text-left">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-600/10 text-blue-400 text-sm font-bold mb-4 border border-blue-600/20">
                           {step.stepName.split(' ')[0]} {/* Assumes "01" is first part */}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                           {step.stepName.split(' ').slice(1).join(' ')}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                           {step.description}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}
