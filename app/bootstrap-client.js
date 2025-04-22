'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
    useEffect(() => {
        import('bootstrap/dist/css/bootstrap.min.css');
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return null;
}
