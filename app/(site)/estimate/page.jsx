import EstimatorWizard from "@/components/Estimator/EstimatorWizard";

export const metadata = {
    title: "Get an Estimate | Itnnovator",
    description: "Get an instant cost and time estimate for your web or mobile project.",
};

export default function EstimatePage() {
    return (
        <div className="w-full min-h-screen bg-black pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/50 mb-4">
                    Estimate Your Project
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Answer a few questions to get an instant cost and timeline range for your next big idea.
                </p>
            </div>

            <EstimatorWizard />
        </div>
    );
}
