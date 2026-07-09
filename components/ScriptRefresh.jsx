"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScriptRefresh() {
    const pathname = usePathname();

    useEffect(() => {
        const refreshLegacyEffects = () => {
            if (window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }

            window.dispatchEvent(new Event("scroll"));
            window.dispatchEvent(new Event("resize"));
        };

        if (typeof window === "undefined") return;

        const frame = window.requestAnimationFrame?.(refreshLegacyEffects);
        return () => {
            if (frame) {
                window.cancelAnimationFrame?.(frame);
            }
        };
    }, [pathname]);

    return null;
}
