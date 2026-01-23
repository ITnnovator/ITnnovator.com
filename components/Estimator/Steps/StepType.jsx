import { ESTIMATOR_CONFIG } from "@/lib/estimatorData";

export default function StepType({ value, onChange }) {
    return (
        <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-white/50 mb-6">What type of project is this?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ESTIMATOR_CONFIG.PROJECT_TYPES.map((type) => (
                    <button
                        key={type.id}
                        onClick={() => onChange(type.id)}
                        className={`text-left p-6 rounded-xl border transition-all duration-300 ${value === type.id
                            ? "bg-malibu/10 border-malibu text-white shadow-[0_0_20px_rgba(45,212,191,0.2)]"
                            : "bg-white/5 border-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20"
                            }`}
                    >
                        <span className={`block text-xl font-bold mb-1 ${value === type.id ? 'text-malibu' : 'text-white/50'}`}>
                            {type.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
