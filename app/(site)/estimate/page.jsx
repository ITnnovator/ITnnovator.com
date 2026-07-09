import Link from "next/link";
import EstimatorWizard from "@/components/Estimator/EstimatorWizard";

export const metadata = {
    title: "Get an Estimate | Itnnovator",
    description: "Get an instant cost and time estimate for your web or mobile project.",
};

export default function EstimatePage() {
    return (
        <div className="w-full min-h-screen bg-black pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Website Cost Calculator & Software Estimator
                </h1>

                {/* Static SEO & Trust Section */}
                <div className="mx-auto space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Looking for a precise <strong>software development cost estimator</strong>? Our intelligent calculator gives you an instant, data-driven range for your next custom web or mobile project.
                    </p>

                    <div className="bg-white/5 rounded-2xl p-6 md:p-8 text-left border border-white/10 mt-10">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">How Our Estimator Works</h2>
                        <ul className="text-gray-300 space-y-3 list-disc list-inside">
                            <li><strong>Select Your Needs:</strong> Choose from web development, e-commerce, or custom app features.</li>
                            <li><strong>Instant Calculation:</strong> Our algorithms, based on hundreds of successful projects, generate a realistic price and time range.</li>
                            <li><strong>Human Review:</strong> Submit your request for a detailed expert analysis within 24 hours.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <EstimatorWizard />

            {/* Post-Estimator Trust & Internal Linking */}
            <div className="max-w-4xl mx-auto mt-20 pt-10 border-t border-white/10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Trust Itnnovator?</h2>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                    We don't just guess numbers. As a leading <Link href="/" className="text-malibu hover:underline">software development agency</Link>, our estimates are backed by years of experience delivering <Link href="/services" className="text-malibu hover:underline">custom software development services</Link> for clients worldwide.
                </p>

                <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-2">Data-Driven Accuracy</h3>
                        <p className="text-sm text-gray-400">Estimates are based on real-world complexity and development hours.</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-2">No Hiden Fees</h3>
                        <p className="text-sm text-gray-400">What you see is a realistic baseline, refined by our technical team.</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-2">Detailed Proposals</h3>
                        <p className="text-sm text-gray-400">Serious inquiries receive a full breakdown and project roadmap.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
