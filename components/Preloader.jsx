'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Preloader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        // Freeze scroll while loading
        document.body.style.position = 'fixed';

        const timer = setTimeout(() => {
            setLoading(false);
            document.body.style.position = 'static';
        }, 800); // adjust timing as needed

        return () => clearTimeout(timer);
    }, [pathname]);

    if (!loading) return null;

    return (
        <div className="preloader" id="preloader">
            <div className="loader"></div>
        </div>
    );
}
