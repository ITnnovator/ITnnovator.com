import { ESTIMATOR_CONFIG } from "@/lib/estimatorData";
import { Check } from "lucide-react";

export default function StepDesign({ value, onChange, projectType, additionalNotes, onNotesChange }) {
    // Value here is now a flexible object { q_id: answer }
    // We map questions from config
    const config = ESTIMATOR_CONFIG.STEP3_CONFIG[projectType];

    if (!config) {
        return (
            <div className="text-center py-10 animate-fadeIn">
                <h2 className="text-2xl font-bold text-white/50 mb-2">No specific details needed.</h2>
                <p className="text-white/50">Proceed to the next step.</p>
            </div>
        );
    }

    const handleChange = (questionId, answer) => {
        onChange({
            ...value,
            [questionId]: answer
        });
    };

    return (
        <div className="space-y-8 animate-fadeIn">
            <div>
                <h2 className="text-2xl font-bold text-white/50 mb-6">{config.title}</h2>

                <div className="space-y-6">
                    {config.questions.map((q) => (
                        <div key={q.id} className="bg-white/5 border border-white/5 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-white mb-4">{q.label}</h3>

                            {q.type === 'yesno' && (
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => handleChange(q.id, true)}
                                        className={`p-4 rounded-lg border text-center transition-all ${value[q.id] === true
                                            ? "bg-malibu/20 border-malibu text-white font-bold"
                                            : "bg-black/20 border-white/10 text-gray-400 hover:bg-white/5"
                                            }`}
                                    >
                                        {q.labelYes || "Yes"}
                                    </button>
                                    <button
                                        onClick={() => handleChange(q.id, false)}
                                        className={`p-4 rounded-lg border text-center transition-all ${value[q.id] === false
                                            ? "bg-malibu/20 border-malibu text-white font-bold"
                                            : "bg-black/20 border-white/10 text-gray-400 hover:bg-white/5"
                                            }`}
                                    >
                                        {q.labelNo || "No"}
                                    </button>
                                </div>
                            )}

                            {q.type === 'select' && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {q.options.map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => handleChange(q.id, opt.value)}
                                            className={`p-3 rounded-lg border text-left transition-all ${value[q.id] === opt.value
                                                ? "bg-malibu/20 border-malibu text-white font-bold"
                                                : "bg-black/20 border-white/10 text-gray-400 hover:bg-white/5"
                                                }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Extra Field for Step 3 */}
            <div className="pt-4 border-t border-white/5">
                <label className="block text-sm font-bold text-white/50 mb-2">Additional notes / requirements (optional)</label>
                <textarea
                    value={additionalNotes || ''}
                    onChange={(e) => onNotesChange(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-malibu transition-colors h-32 resize-none"
                    placeholder="e.g. Need a modern minimalist style, competitor references, specific brand colors..."
                    maxLength={1000}
                />
            </div>
        </div>
    );
}
