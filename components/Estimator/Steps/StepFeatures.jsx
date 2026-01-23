import { ESTIMATOR_CONFIG } from "@/lib/estimatorData";
import { Check } from "lucide-react";

export default function StepFeatures({ values, onChange, projectType }) {
    // Get features for the selected project type, fallback to empty array
    const featuresList = ESTIMATOR_CONFIG.FEATURE_GROUPS[projectType] || [];

    const toggleFeature = (id) => {
        if (values.includes(id)) {
            onChange(values.filter((v) => v !== id));
        } else {
            onChange([...values, id]);
        }
    };

    // Dynamic Title based on Type
    const getTitle = () => {
        switch (projectType) {
            case 'uiux': return "What design services do you need?";
            case 'seo': return "What SEO services do you need?";
            case 'maintenance': return "What maintenance services do you need?";
            default: return "What core features do you need?";
        }
    };

    if (featuresList.length === 0) {
        return (
            <div className="text-center py-10 animate-fadeIn">
                <h2 className="text-2xl font-bold text-white/50 mb-2">No specific features for this type.</h2>
                <p className="text-white/50">You can proceed to the next step.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-white/50 mb-2">{getTitle()}</h2>
            <p className="text-white/50 mb-6">Select all that apply.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuresList.map((feature) => {
                    const isSelected = values.includes(feature.id);
                    return (
                        <button
                            key={feature.id}
                            onClick={() => toggleFeature(feature.id)}
                            className={`relative text-left p-4 rounded-xl border transition-all duration-200 ${isSelected
                                    ? "bg-malibu/10 border-malibu text-white"
                                    : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:border-white/20"
                                }`}
                        >
                            <div className="flex justify-between items-start">
                                <span className="font-medium pr-6">{feature.label}</span>
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? "bg-malibu border-malibu text-black" : "border-gray-500"
                                    }`}>
                                    {isSelected && <Check size={12} strokeWidth={3} />}
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
