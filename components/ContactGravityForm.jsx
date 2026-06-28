"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { trackEvent } from "@/lib/analytics";

export default function ContactGravityForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.consent) {
            toast.error("Please agree to the privacy policy before submitting.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phone,
                    subject: "New Inquiry",
                    message: formData.message,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Message sent successfully!");

                trackEvent("generate_lead", {
                    form_type: "contact",
                    page: window.location.pathname,
                    method: "api"
                });

                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                    consent: false,
                });
            } else {
                toast.error(data.error || "Something went wrong.");
            }
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 text-lg focus:outline-none focus:border-malibu/60 focus:bg-malibu/5 transition-all duration-300";

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-xs text-white/40 uppercase tracking-widest font-mono">First Name <span className="text-malibu">*</span></label>
                    <input
                        name="firstName"
                        type="text"
                        className={inputClass}
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xs text-white/40 uppercase tracking-widest font-mono">Last Name <span className="text-malibu">*</span></label>
                    <input
                        name="lastName"
                        type="text"
                        className={inputClass}
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            {/* Contact row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-xs text-white/40 uppercase tracking-widest font-mono">Email <span className="text-malibu">*</span></label>
                    <input
                        name="email"
                        type="email"
                        className={inputClass}
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xs text-white/40 uppercase tracking-widest font-mono">Phone <span className="text-malibu">*</span></label>
                    <input
                        name="phone"
                        type="tel"
                        className={inputClass}
                        placeholder="+1 234 567 890"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
                <label className="text-xs text-white/40 uppercase tracking-widest font-mono">Message <span className="text-malibu">*</span></label>
                <textarea
                    name="message"
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project, goals, or challenges..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                />
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3">
                <button
                    type="button"
                    onClick={() => setFormData(p => ({ ...p, consent: !p.consent }))}
                    className={`mt-0.5 w-5 h-5 rounded shrink-0 border transition-all duration-200 flex items-center justify-center ${formData.consent ? 'bg-malibu border-malibu' : 'border-white/20 bg-white/5'}`}
                >
                    {formData.consent && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    )}
                </button>
                <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="sr-only" />
                <p className="text-sm text-white/40 leading-relaxed">
                    I have read Itnnovator's{" "}
                    <a href="/contact" className="text-malibu hover:text-white transition-colors underline underline-offset-2">
                        privacy policy
                    </a>
                    .
                </p>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="group w-full relative overflow-hidden px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 bg-malibu text-black hover:shadow-[0_0_40px_rgba(130,157,255,0.5)] hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
            >
                <span className="relative z-10 flex items-center justify-center gap-3">
                    {loading ? (
                        <>
                            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </>
                    )}
                </span>
            </button>
        </form>
    );
}
