"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const MAX_PROGRESS = 0.92;
const INTERVAL_MS = 80;
const COMPLETE_DELAY = 220;

function isInternalLink(href) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
    return false;
  }
  return href.startsWith("/") && !href.startsWith("//");
}

export default function RouteTransitionLoader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const startedRef = useRef(false);

  const clearTimers = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const startLoader = () => {
    clearTimers();
    startedRef.current = true;
    setVisible(true);
    setProgress(0.04);
    intervalRef.current = window.setInterval(() => {
      setProgress((current) => Math.min(MAX_PROGRESS, current + Math.random() * 0.06));
    }, INTERVAL_MS);
  };

  const finishLoader = () => {
    clearTimers();
    setProgress(1);
    timeoutRef.current = window.setTimeout(() => {
      setVisible(false);
      setProgress(0);
      startedRef.current = false;
    }, COMPLETE_DELAY);
  };

  useEffect(() => {
    const onClick = (event) => {
      const anchor = event.target.closest?.("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!isInternalLink(href)) return;
      if (href === pathname || href === `${pathname}/`) return;

      startLoader();
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  useEffect(() => {
    if (!startedRef.current) return;
    finishLoader();
  }, [pathname]);

  useEffect(() => {
    return () => clearTimers();
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[1000] h-1 bg-transparent">
      <div
        className="h-full rounded-full bg-malibu shadow-[0_0_20px_rgba(130,157,255,0.5)] transition-all duration-200 ease-out"
        style={{ width: `${Math.min(100, progress * 100)}%` }}
      />
    </div>
  );
}
