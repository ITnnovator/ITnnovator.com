"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, RotateCcw, Loader2 } from "lucide-react";
import { calculateEstimate, ESTIMATOR_CONFIG } from "@/lib/estimatorData";

// Steps will be imported here
import StepType from "./Steps/StepType";
import StepFeatures from "./Steps/StepFeatures";
import StepDesign from "./Steps/StepDesign";
import StepTimeline from "./Steps/StepTimeline";
import StepContact from "./Steps/StepContact";
import EstimateResult from "./EstimateResult";
import Link from "next/link";

const STORAGE_KEY = "itnnovator_estimate_state";

const INITIAL_STATE = {
    projectType: "",
    features: [],
    otherFeatures: "", // New Step 2 text
    step3: {}, // New Dynamic Step 3 object (replaces old 'design' object)
    additionalNotes: "", // New Step 3 text
    timeline: "",
    budgetRange: "",
    contact: {
        name: "",
        email: "",
        phone: "",
        company: "",
        note: "",
        method: "whatsapp",
    },
};

export default function EstimatorWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selections, setSelections] = useState(INITIAL_STATE);
    const [currency, setCurrency] = useState('PKR'); // Default Base
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Detect Currency on Load
    useEffect(() => {
        const detectCurrency = async () => {
            try {
                // Simple check using Intl API to guess roughly, or fetch IP API
                // For simplicity/reliability without external keys, we can check timezone
                const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if (tz.includes("Karachi") || tz.includes("Pakistan")) {
                    setCurrency("PKR");
                } else if (tz.includes("London") || tz.includes("Europe/London")) {
                    setCurrency("GBP");
                } else if (tz.includes("Europe")) {
                    setCurrency("EUR");
                } else if (tz.includes("Dubai") || tz.includes("Asia/Dubai")) {
                    setCurrency("AED");
                } else {
                    setCurrency("USD"); // Fallback
                }
            } catch (e) {
                console.warn("Currency detection failed, defaulting to PKR/USD", e);
            }
        };
        detectCurrency();
    }, []);

    // Load from LocalStorage
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setSelections(parsed);
            } catch (e) {
                console.error("Failed to load estimate state", e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save to LocalStorage
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(selections));
        }
    }, [selections, isLoaded]);

    const updateSelection = (field, value) => {
        // If Project Type changes, clear Features selection
        if (field === "projectType" && value !== selections.projectType) {
            setSelections((prev) => ({
                ...prev,
                [field]: value,
                features: [] // Reset features
            }));
            return;
        }

        setSelections((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleNext = async () => { // Async for submission
        if (currentStep < 5) {
            setCurrentStep((prev) => prev + 1);
            window.scrollTo(0, 0);
        } else {
            // Prevent duplicates
            if (isSubmitting) return;
            setIsSubmitting(true);

            // Calculate final estimate before submitting
            const estimateResult = calculateEstimate(selections, currency);

            // Generate a simple submission ID (timestamp + random)
            const submissionId = `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

            const payload = {
                contact: selections.contact,
                submissionId,
                country: currency === 'PKR' ? 'Pakistan' : 'International', // Approximate
                currency: currency,
                step3Version: "v1",
                projectDetails: {
                    type: selections.projectType,
                    features: selections.features,
                    otherFeatures: selections.otherFeatures,
                    step3: selections.step3, // Raw responses
                    additionalNotes: selections.additionalNotes,
                    timeline: selections.timeline,
                    budget: selections.budgetRange
                },
                estimate: {
                    costRange: estimateResult.costRange, // Converted
                    baseCostRange: estimateResult.baseCostRange, // PKR
                    timelineRange: estimateResult.timelineRange,
                    complexity: estimateResult.complexity,
                    score: estimateResult.score
                }
            };

            // SUBMIT LEAD
            try {
                const res = await fetch("/api/leads", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });

                if (res.ok) {
                    setShowResult(true);
                    window.scrollTo(0, 0);
                    // Clear storage after successful submission
                    // localStorage.removeItem(STORAGE_KEY); 
                } else {
                    const errorData = await res.json();
                    alert(`Error: ${errorData.error || "Something went wrong submitting your estimate. Please try again."}`);
                }
            } catch (error) {
                console.error("Submission error", error);
                alert("Error submitting form.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleBack = () => {
        if (showResult) {
            setShowResult(false);
            return;
        }
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
            window.scrollTo(0, 0);
        }
    };

    const handleReset = () => {
        if (confirm("Are you sure you want to start over?")) {
            setSelections(INITIAL_STATE);
            setCurrentStep(1);
            setShowResult(false);
            localStorage.removeItem(STORAGE_KEY);
            window.scrollTo(0, 0);
        }
    };

    if (!isLoaded) return null; // Avoid hydration mismatch

    // Validation Logic
    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return !!selections.projectType;
            case 2:
                // Optional, can skip features
                return true;
            case 3:
                return true;
            case 4:
                return !!selections.timeline && !!selections.budgetRange;
            case 5:
                return !!selections.contact.name && !!selections.contact.email && !!selections.contact.phone;
            default:
                return false;
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto min-h-[600px] bg-[#111] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">

            {/* Header / Progress */}
            {!showResult && (
                <div className="mb-10">
                    <div className="flex justify-between items-center text-sm md:text-base text-gray-400 mb-4">
                        <span>Step {currentStep} of 5</span>
                        <span className="text-white/50 font-bold">
                            {currentStep === 1 && "Project Type"}
                            {currentStep === 2 && "Core Features"}
                            {currentStep === 3 && "Design & Content"}
                            {currentStep === 4 && "Timeline & Budget"}
                            {currentStep === 5 && "Contact Details"}
                        </span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-malibu transition-all duration-500 ease-out"
                            style={{ width: `${(currentStep / 5) * 100}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="min-h-[300px]">
                {showResult ? (
                    <EstimateResult selections={selections} currency={currency} onReset={handleReset} />
                ) : (
                    <>
                        <>
                            {currentStep === 1 && <StepType value={selections.projectType} onChange={(v) => updateSelection("projectType", v)} />}

                            {currentStep === 2 && (
                                <StepFeatures
                                    values={selections.features}
                                    projectType={selections.projectType}
                                    onChange={(v) => updateSelection("features", v)}
                                    otherFeatures={selections.otherFeatures}
                                    onOtherChange={(v) => updateSelection("otherFeatures", v)}
                                />
                            )}

                            {currentStep === 3 && (
                                <StepDesign
                                    value={selections.step3 || {}}
                                    projectType={selections.projectType}
                                    onChange={(v) => updateSelection("step3", v)}
                                    additionalNotes={selections.additionalNotes}
                                    onNotesChange={(v) => updateSelection("additionalNotes", v)}
                                />
                            )}

                            {currentStep === 4 && <StepTimeline timeline={selections.timeline} budget={selections.budgetRange} onChangeTimeline={(v) => updateSelection("timeline", v)} onChangeBudget={(v) => updateSelection("budgetRange", v)} />}
                            {currentStep === 5 && <StepContact value={selections.contact} onChange={(v) => updateSelection("contact", v)} />}
                        </>
                    </>
                )}
            </div>

            {/* Footer Controls */}
            {!showResult && (
                <div className="mt-12 flex justify-between items-center border-t border-white/5 pt-8">
                    {currentStep > 1 ? (
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2"
                        >
                            <ArrowLeft size={18} /> Back
                        </button>
                    ) : (
                        <Link href="/" className="text-gray-400 hover:text-white text-sm">Cancel</Link>
                    )}

                    <button
                        onClick={handleNext}
                        disabled={!isStepValid() || isSubmitting}
                        className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${isStepValid() && !isSubmitting
                            ? "bg-malibu text-black hover:bg-white hover:scale-105"
                            : "bg-white/10 text-white/30 cursor-not-allowed"
                            }`}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 size={18} className="animate-spin" /> Calculating...
                            </>
                        ) : (
                            <>
                                {currentStep === 5 ? "Get Estimate" : "Next"} <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </div>
            )}

            {showResult && (
                <div className="absolute top-6 right-6">
                    <button onClick={handleReset} className="p-2 text-gray-500 hover:text-white transition-colors" title="Start Over">
                        <RotateCcw size={20} />
                    </button>
                </div>
            )}

        </div>
    );
}
