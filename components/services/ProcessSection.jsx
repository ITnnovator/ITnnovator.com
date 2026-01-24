"use client";

import React from "react";

export default function ProcessSection({ process, themeColor }) {
    if (!process || process.length === 0) return null;

    // Use the image from the first step, or fallback
    const mainImage = process[0]?.img || "/webImages/webbyra-ui-ux-design-950x699.jpg";

    return (
        <section className="relative py-20 lg:py-32 bg-black overflow-hidden">
            <div className="max-w-[110rem] mx-auto px-6 lg:px-8">

                {/* Flex Container */}
                <div className="flex flex-col lg:flex-row items-start gap-16 xl:gap-24">

                    {/* Image Side (Sticky on Desktop) */}
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-32 h-fit">
                        <div className="relative group">
                            {/* Decorative Glow */}
                            <div
                                className="absolute -inset-1 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-1000 blur-xl"
                                style={{ background: themeColor || "#829dff" }}
                            ></div>

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/10">
                                <img
                                    src={mainImage}
                                    alt="Our Process"
                                    className="w-full min-h-[400px] lg:min-h-[600px] object-cover transform group-hover:scale-105 transition duration-700"
                                />

                                {/* Overlay Text/Badge */}
                                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                                    <p className="text-white font-medium text-lg">How We Work</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text/Content Side */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Our Process
                            </h2>
                            <p className="text-lg text-gray-400 font-light leading-relaxed">
                                A streamlined approach to delivering excellence. We break down complex challenges into manageable steps.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8">
                            {process.map((step, i) => (
                                <div key={i} className="group flex flex-row gap-6 items-start">
                                    {/* Number */}
                                    <div
                                        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-base font-bold border border-white/10 group-hover:border-white/30 transition-colors mt-1"
                                        style={{ color: themeColor || "#829dff", backgroundColor: "rgba(255,255,255,0.03)" }}
                                    >
                                        {i + 1}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl text-white font-bold mb-2 group-hover:text-[var(--theme-color)] transition-colors" style={{ "--theme-color": themeColor || "#829dff" }}>{step.title}</h3>
                                        <p className="text-gray-400 text-base leading-relaxed font-light">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
