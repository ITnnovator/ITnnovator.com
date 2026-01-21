"use client";

import { useEffect } from "react";

export default function ScrollAnimation() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-inview");
                        // Optional: Stop observing once animated
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1, // Trigger when 10% visible
            }
        );

        const elements = document.querySelectorAll(".js-animate-fadein, .js-animate-fadeinup");
        elements.forEach((el) => observer.observe(el));

        // Cleanup
        return () => observer.disconnect();
    }, []); // Run once on mount

    return null; // This component handles side-effects only
}
