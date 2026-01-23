import { calculateEstimate, ESTIMATOR_CONFIG } from "@/lib/estimatorData";
import { CheckCircle2, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";

export default function EstimateResult({ selections }) {
    const result = calculateEstimate(selections);

    const generateWhatsAppMessage = () => {
        const typeLabel = ESTIMATOR_CONFIG.PROJECT_TYPES.find(t => t.id === selections.projectType)?.label;
        const text = `Hi Itnnovator, I just used your Project Estimator!
    
*Project Type:* ${typeLabel}
*Budget Range:* ${result.costRange}
*Timeline:* ${result.timelineRange}
*Complexity:* ${result.complexity}
    
I'd like to discuss this further. My name is ${selections.contact.name}.`;

        return `https://wa.me/923313775851?text=${encodeURIComponent(text)}`;
    };

    return (
        <div className="animate-fadeIn text-center py-8">

            <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/50">
                    <CheckCircle2 size={40} className="text-green-500" />
                </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Estimate Ready!</h2>
            <p className="text-gray-400 mb-12">Based on your selections, here is an initial estimate.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Cost */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <span className="block text-sm text-gray-400 uppercase tracking-widest font-bold mb-2">Estimated Cost</span>
                    <span className="block text-2xl md:text-3xl font-bold text-malibu leading-snug">{result.costRange}</span>
                </div>

                {/* Timeline */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <span className="block text-sm text-gray-400 uppercase tracking-widest font-bold mb-2">Timeline</span>
                    <span className="block text-2xl md:text-3xl font-bold text-white leading-snug">{result.timelineRange}</span>
                </div>

                {/* Complexity */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <span className="block text-sm text-gray-400 uppercase tracking-widest font-bold mb-2">Complexity</span>
                    <span className="block text-2xl md:text-3xl font-bold text-white leading-snug">{result.complexity}</span>
                </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-12 text-left">
                <p className="text-blue-200 text-sm md:text-base">
                    <strong>Note:</strong> This is a rough estimate provided by our AI estimator. The final quote may vary based on specific requirements, design complexity, and 3rd party integrations discussed during our discovery call.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#25D366] text-black font-bold py-4 px-8 rounded-full hover:bg-[#20bd5a] hover:scale-105 transition-all"
                >
                    <MessageSquare size={20} />
                    Launch on WhatsApp
                </a>

                <Link
                    href="/contact"
                    className="flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-200 hover:scale-105 transition-all"
                >
                    <Phone size={20} />
                    Book Discovery Call
                </Link>
            </div>

        </div>
    );
}
