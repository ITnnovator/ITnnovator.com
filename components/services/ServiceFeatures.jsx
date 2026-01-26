'use client';

export default function ServiceFeatures({ features }) {
    if (!features || features.length === 0) return null;

    return (
        <div className="bg-white/5 border border-white/5 rounded-2xl p-8 mt-12">
            <h3 className="text-xl font-bold text-white mb-6">Key Capabilities</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0 mt-0.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className="text-gray-300 font-medium">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
