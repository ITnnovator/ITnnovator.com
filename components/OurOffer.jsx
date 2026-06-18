"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function OurOffer({ services = [] }) {
    const containerRef = useRef(null);
    const pinRef = useRef(null);
    const spacingRef = useRef(null);

    // Grab first 3 services for the 3 GSAP slots, or use safe fallbacks
    const offerServices = [
        services[0] || { title: "Web Solutions", hero: { subheadline: "Comprehensive web solutions." }, slug: "web-development", blockImg: "/webImages/webbyra-ui-ux-design-950x699.jpg" },
        services[1] || { title: "Webshops", hero: { subheadline: "Interactive and high-performing e-commerce." }, slug: "ecommerce", blockImg: "/webImages/webbyra-e-handel-950x699.jpg" },
        services[2] || { title: "Digital Marketing", hero: { subheadline: "Targeted advertising campaigns." }, slug: "marketing", blockImg: "/webImages/webbyra-growth-950x699.jpg" }
    ];

    // Use a separate ref to track the active index to avoid unnecessary re-renders or logic loop
    const activeIndex = useRef(0);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;

            // Premium dark mode background colors (Deep Navy, Deep Violet, Deep Slate)
            const colors = ["#0B1120", "#170F1C", "#0F172A"];

            // Initial State setup
            gsap.set(".js-offer-bg", { backgroundColor: colors[0] });
            gsap.set(".offer-item-content", { autoAlpha: 0, display: "none", y: 20 });
            gsap.set(".offer-item-image", { autoAlpha: 0, rotation: 10, scale: 0.9 });

            // Set Slide 1 as active initially
            gsap.set(".offer-item-content-0", { autoAlpha: 1, display: "flex", y: 0 });
            gsap.set(".offer-item-image-0", { autoAlpha: 1, rotation: -2, scale: 1 });

            // Main Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "center center",
                    end: "+=300%", // Scroll distance (3x height)
                    pin: true,
                    scrub: 1, // Smooth scrubbing
                    snap: 1 / 2, // Snap to 0, 0.5, 1 (3 points)
                }
            });

            // Transition 1 -> 2
            tl.to(".offer-item-content-0", { autoAlpha: 0, display: "none", y: -20, duration: 1 })
                .to(".offer-item-image-0", { autoAlpha: 0, rotation: -10, scale: 0.9, duration: 1 }, "<")
                .to(".js-offer-bg", { backgroundColor: colors[1], duration: 1 }, "<")

                .to(".offer-item-content-1", { autoAlpha: 1, display: "flex", y: 0, duration: 1 }, "-=0.2")
                .to(".offer-item-image-1", { autoAlpha: 1, rotation: 1, scale: 1, duration: 1 }, "<")

                // Hold Slide 2 briefly by adding a dummy tween or just spacing the next start

                // Transition 2 -> 3
                .to(".offer-item-content-1", { autoAlpha: 0, display: "none", y: -20, duration: 1 }, "+=0.5")
                .to(".offer-item-image-1", { autoAlpha: 0, rotation: 10, scale: 0.9, duration: 1 }, "<")
                .to(".js-offer-bg", { backgroundColor: colors[2], duration: 1 }, "<")

                .to(".offer-item-content-2", { autoAlpha: 1, display: "flex", y: 0, duration: 1 }, "-=0.2")
                .to(".offer-item-image-2", { autoAlpha: 1, rotation: -1, scale: 1, duration: 1 }, "<");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">

            <div className="absolute top-8 lg:top-12 z-20 text-center w-full">
                <h2 className="text-4xl md:text-[3rem] lg:text-[4rem] font-bold text-white tracking-tight">
                    Our Offer
                </h2>
            </div>

            {/* The Card Window */}
            <div className="relative w-[94%] max-w-[80rem] aspect-[16/9] md:aspect-[2.2/1] min-h-[500px] h-[60vh] md:h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 z-10 border border-white/5 ring-1 ring-white/10">

                {/* Background Layer */}
                <div className="js-offer-bg absolute inset-0 w-full h-full transition-colors duration-700 ease-in-out"></div>
                
                {/* Subtle overlay gradient to add depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent"></div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col md:flex-row items-center p-8 md:p-16 gap-8 md:gap-16">

                    {/* Left: Images */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center justify-center">
                        <div className="relative w-full aspect-[4/3] max-w-lg perspective-1000">
                            {offerServices.map((service, index) => (
                                <div key={`img-${index}`} className={`offer-item-image offer-item-image-${index} absolute inset-0 w-full h-full flex items-center justify-center`}>
                                    <img
                                        src={service.blockImg || service.hero?.image || service.icon || "/webImages/webbyra-ui-ux-design-950x699.jpg"}
                                        className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10 transform-gpu"
                                        style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'}}
                                        alt={service.title}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center">
                        {offerServices.map((service, index) => (
                            <div key={`content-${index}`} className={`offer-item-content offer-item-content-${index} absolute inset-0 ${index === 0 ? 'flex' : 'hidden'} flex-col justify-center px-4 md:px-0`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-[2px] w-12 bg-malibu opacity-70"></span>
                                    <span className="text-malibu/90 font-mono text-sm tracking-[0.2em] font-semibold">0{index + 1}/03</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white tracking-tight">
                                    {service.hero?.headline || service.herotitle || service.title}
                                </h3>
                                <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg">
                                    {service.description || service.hero?.subheadline}
                                </p>
                                <a href={`/services/${service.slug}`} className="group inline-flex items-center w-max px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-lg font-medium text-white">
                                    {service.cta || `Explore ${service.title}`}
                                    <svg className="ml-3 w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 13 13" fill="currentColor"><use href="/webImages/icons.svg#arrow-right"></use></svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
