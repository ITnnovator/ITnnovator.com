"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            if (scrollTop > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            if (docHeight > 0) {
                const progress = (scrollTop / docHeight) * 100;
                setScrollProgress(progress);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full p-0 outline-none flex items-center justify-center shrink-0 aspect-square ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-90 pointer-events-none'
            }`}
            style={{ width: '60px', height: '60px', minWidth: '60px', minHeight: '60px' }}
            aria-label="Back to top"
        >
            {/* Background glowing orb */}
            <div className="absolute inset-0 bg-malibu/20 blur-[20px] rounded-full scale-50 group-hover:scale-125 transition-transform duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-malibu/40 group-hover:bg-malibu/10 transition-colors duration-500 overflow-hidden" style={{ width: '100%', height: '100%' }}>
                
                {/* SVG Progress Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 52 52" preserveAspectRatio="xMidYMid meet">
                    <circle
                        className="text-white/10"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx="26"
                        cy="26"
                    />
                    <circle
                        className="text-malibu transition-all duration-100 ease-out"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx="26"
                        cy="26"
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: isNaN(strokeDashoffset) ? circumference : strokeDashoffset
                        }}
                    />
                </svg>

                {/* Arrow Icon with Hover Animation */}
                <div className="relative flex flex-col items-center overflow-hidden w-6 h-6 text-white group-hover:text-malibu transition-colors duration-300">
                    <ArrowUp className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover:-translate-y-8" />
                    <ArrowUp className="absolute top-8 w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover:-translate-y-8" />
                </div>
            </div>
        </button>
    );
}
