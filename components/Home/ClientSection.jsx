'use client';

import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function ClientSection() {
    useEffect(() => {
        new Swiper(".ul-clients-slider", {
            slidesPerView: 5,
            spaceBetween: "37",
            loop: true,
            autoplay: true,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                480: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 5,
                }
            }
        });
    }, []);
    return (
        // <!-- CLIENTS SECTION START -->
        <div className="ul-container ul-section-spacing ">
            <div className="ul-clients">
                <div className="ul-clients-slider swiper">
                    <div className="swiper-wrapper">
                        {/* <!-- single client --> */}
                        <div className="swiper-slide"><img src="/webImages/client-1.png" alt="Client Image" /></div>
                        {/* <!-- single client --> */}
                        <div className="swiper-slide"><img src="/webImages/client-2.png" alt="Client Image" /></div>
                        {/* <!-- single client --> */}
                        <div className="swiper-slide"><img src="/webImages/client-3.png" alt="Client Image" /></div>
                        {/* <!-- single client --> */}
                        <div className="swiper-slide"><img src="/webImages/client-4.png" alt="Client Image" /></div>
                        {/* <!-- single client --> */}
                        <div className="swiper-slide"><img src="/webImages/client-5.png" alt="Client Image" /></div>
                        {/* <!-- single client --> */}
                        <div className="swiper-slide"><img src="/webImages/client-1.png" alt="Client Image" /></div>
                    </div>
                </div>
                <img src="/webImages/brands-vector.png" alt="vector" className="ul-clients-vector" />
            </div>
        </div>
        /* <!-- CLIENTS SECTION END --> */
    );
}
