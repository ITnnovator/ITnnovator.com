import { ESTIMATOR_CONFIG } from "@/lib/estimatorData";

export default function StepTimeline({ timeline, budget, onChangeTimeline, onChangeBudget }) {
    return (
        <div className="space-y-10 animate-fadeIn">

            {/* Timeline */}
            <div>
                <h2 className="text-2xl font-bold text-white/50 mb-6">When do you need it?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {ESTIMATOR_CONFIG.TIMELINE_OPTIONS.map((opt) => (
                        <button
                            key={opt.id}
                            onClick={() => onChangeTimeline(opt.id)}
                            className={`text-left p-5 rounded-xl border transition-all duration-300 ${timeline === opt.id
                                ? "bg-malibu/10 border-malibu text-white"
                                : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:border-white/20"
                                }`}
                        >
                            <div className="flex flex-col items-center text-center">
                                <span className="font-bold text-lg mb-1">{opt.label.split('(')[0]}</span>
                                <span className="text-sm opacity-70">({opt.label.split('(')[1]}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Budget */}
            <div>
                <h2 className="text-2xl font-bold text-white/50 mb-6">What is your estimated budget?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ESTIMATOR_CONFIG.BUDGET_RANGES.map((opt) => (
                        <button
                            key={opt.id}
                            onClick={() => onChangeBudget(opt.id)}
                            className={`text-left p-4 rounded-xl border transition-all duration-300 ${budget === opt.id
                                ? "bg-malibu/10 border-malibu text-white"
                                : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:border-white/20"
                                }`}
                        >
                            <span className="block text-center font-medium">{opt.label}</span>
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
}
