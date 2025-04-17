'use client';

import { useEffect } from 'react';

export default function Preloader() {
    useEffect(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            // Delay hiding for demo effect (optional)
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.style.position = 'static';
            }, 1000); // adjust delay if needed
        }
    }, []);

    return (
        <div className="preloader" id="preloader">
            <div className="loader"></div>
        </div>
    );
}
