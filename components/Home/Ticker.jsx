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
        <div class="ul-ticker">
            <div class="splide ul-ticker-slider" aria-label="Ticker Slider">
                <div class="splide__track">
                    <ul class="splide__list">
                        {/* <!-- single slide --> */} 
                        <li class="splide__slide">
                            <p>Cyber Security</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li class="splide__slide">
                            <p>IT Solution</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li class="splide__slide">
                            <p>Technology</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li class="splide__slide">
                            <p>Data Security</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li class="splide__slide">
                            <p>Digital Agency</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li class="splide__slide">
                            <p>UX/UI design</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li class="splide__slide">
                            <p>Web Development</p>
                        </li>
                        {/* <!-- single slide --> */}
                        <li class="splide__slide">
                            <p>AI Image Generate</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        // <!-- TICKER TEXT AREA END -->
    );
}
