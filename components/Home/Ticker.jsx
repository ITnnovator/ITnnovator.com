'use client';

import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';


export default function Ticker() {
    useEffect(() => {
        const splide = new Splide('.ul-ticker-slider', {
            type: 'loop',
            perPage: 10,
            arrows: false,
            pagination: false,
            autoScroll: {
                speed: 1,
            },
        });

        splide.mount({ AutoScroll });
    }, []);

    return (
        // <!-- TICKER TEXT AREA START -->
        <div className="ul-ticker">
            <div className="splide ul-ticker-slider" aria-label="Ticker Slider">
                <div className="splide__track">
                    <ul className="splide__list">
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Web Development</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Frontend Development</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Backend Development</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>App Development</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>iOS App Development</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Android App Development</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Cross-Platform App Development</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>SEO (Search Engine Optimization)</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>On-Page SEO</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Off-Page SEO</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Technical SEO</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Local SEO</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Digital Marketing</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Email Marketing</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Content Marketing</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Pay-Per-Click (PPC)</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Social Media Management</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Facebook Management</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Instagram Management</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>LinkedIn Management</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>IT Consultancy</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Cloud Solutions</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Software Consulting</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Maintenance & Support</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Website Maintenance</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Server Support</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Technical Support</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Graphics Designing</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Brand Identity Design</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Marketing Collateral Design</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Logo Designing</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>2D/3D Logo Design</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Animated Logo Design</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>UI/UX Design</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Wireframing</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Prototyping</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Data Security</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Network Security</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Penetration Testing</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>AI Image Generation</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>IT Solution</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Technology Consulting</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li className="splide__slide">
                            <p>Digital Agency</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        // <!-- TICKER TEXT AREA END -->
    );
}
