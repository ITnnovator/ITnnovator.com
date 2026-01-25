"use client";

import { useEffect } from "react";
import Typed from "typed.js";

// TypoAnimation.jsx — shorter, IT-focused
const TypoAnimation = () => {
    useEffect(() => {
        const el = document.querySelector(".js-typo-animation");
        if (!el) return;

        const typed = new Typed(el, {
            strings: ["Build!", "Scale!", "Innovate!"],
            typeSpeed: 100,
            backSpeed: 100,
            startDelay: 150,
            backDelay: 3500,
            loop: true,
            showCursor: true,
            cursorChar: "|",
        });

        return () => typed?.destroy();
    }, []);

    return <span className="js-typo-animation"></span>;
};

export default TypoAnimation;
