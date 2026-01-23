"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScriptRefresh() {
    const pathname = usePathname();

    useEffect(() => {
        // This effect runs on every route change (and initial load)

        // Wait a small tick to ensure DOM is updated
        const timer = setTimeout(() => {
            // Force GSAP ScrollTrigger refresh if available
            if (window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }

            // If main.js hides elements expecting an animation, we might need to force them visible
            // or re-trigger the init logic. 
            // Since we can't easily re-run a self-executing bundle, we try to trigger scroll events
            // which ScrollTrigger listens to.
            window.dispatchEvent(new Event("scroll"));
            window.dispatchEvent(new Event("resize"));

            // HACK: legacy script might rely on specific class initializations.
            // If the user says "page doesn't load", it means opacity remains 0.
            // We can force opacity to 1 for known animated elements if the script fails to pick them up.
            const animatedElements = document.querySelectorAll('.js-animate-fadein, .js-animate-fadeinup, .js-scroll-block');
            animatedElements.forEach(el => {
                // If element is hidden, force it allowed (script usually handles this, 
                // but if script doesn't run, we must show content)
                const style = window.getComputedStyle(el);
                if (style.opacity === "0" || style.visibility === "hidden") {
                    // We prefer GSAP to handle it, but if not, we must show it.
                    // el.style.opacity = "1";
                    // el.style.visibility = "visible";

                    // Actually, better to let ScrollTrigger find it. 
                    // If we just refresh, it might work.
                }
            });

        }, 500); // 500ms delay to allow React to render new route content

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
