'use client';

import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


export default function ServiceSection() {
    useEffect(() => {
        new Swiper('.ul-services-slider', {
            slidesPerView: 3,
            spaceBetween: 27,
            autoplay: true,
            navigation: {
                prevEl: '.ul-services-slider-nav .prev',
                nextEl: '.ul-services-slider-nav .next',
            },
            breakpoints: {
                0: { slidesPerView: 1.2, spaceBetween: 15, centeredSlides: true },
                480: { slidesPerView: 1.8, spaceBetween: 15, centeredSlides: true },
                576: { slidesPerView: 2, spaceBetween: 15 },
                768: { slidesPerView: 3, spaceBetween: 15 },
                992: { slidesPerView: 3, spaceBetween: 15 },
                1200: { slidesPerView: 3, spaceBetween: 20 },
                1400: { slidesPerView: 3, spaceBetween: 27 },
            },
        });
    }, []);

    return (
        // <!-- SERVICES SECTION START -->
        <section className="ul-services ul-section-spacing">
            <div className="ul-container">
                {/* <!-- single slide --> */}
                <div className="ul-section-heading">
                    <div className="left">
                        <span className="ul-section-sub-title">Our Services</span>
                        <h2 className="ul-section-title">Best Solutions</h2>
                    </div>
                    <div className="ul-slider-nav ul-services-slider-nav">
                        <button className="prev"><i className="flaticon-back"></i></button>
                        <button className="next"><i className="flaticon-next-1"></i></button>
                    </div>
                </div>

                {/* <!-- services slider --> */}
                <div className="ul-services-slider swiper overflow-visible">
                    <div className="swiper-wrapper">
                        {/* <!-- single slide --> */}
                        <div className="swiper-slide">
                            <div className="ul-service">
                                <div className="ul-service-txt">
                                    <span className="ul-service-sub-title">Web Solutions</span>
                                    <h3 className="ul-service-title">Website Development</h3>
                                    <p className="ul-service-descr">We build responsive, fast-loading websites that reflect your brand and drive online success—from business sites to e-commerce stores.</p>
                                    <a href="service-details.html" className="ul-service-btn">Read More <i className="flaticon-right"></i></a>
                                </div>
                                <div className="ul-service-img">
                                    <img src="/webImages/service-1.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div className="swiper-slide">
                            <div className="ul-service">
                                <div className="ul-service-txt">
                                    <span className="ul-service-sub-title">Mobile Solutions</span>
                                    <h3 className="ul-service-title">App Development</h3>
                                    <p className="ul-service-descr">Custom Android, iOS, and cross-platform mobile apps designed for performance, user experience, and business scalability.</p>
                                    <a href="service-details.html" className="ul-service-btn">Read More <i className="flaticon-right"></i></a>
                                </div>
                                <div className="ul-service-img">
                                    <img src="/webImages/service-2.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div className="swiper-slide">
                            <div className="ul-service">
                                <div className="ul-service-txt">
                                    <span className="ul-service-sub-title">Creative Design</span>
                                    <h3 className="ul-service-title">Graphics Designing</h3>
                                    <p className="ul-service-descr">Stunning visuals that capture your brand identity—logos, business cards, banners, social media designs, and more.</p>
                                    <a href="service-details.html" className="ul-service-btn">Read More <i className="flaticon-right"></i></a>
                                </div>
                                <div className="ul-service-img">
                                    <img src="/webImages/service-3.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div className="swiper-slide">
                            <div className="ul-service">
                                <div className="ul-service-txt">
                                    <span className="ul-service-sub-title">User Experience</span>
                                    <h3 className="ul-service-title">UI/UX Design</h3>
                                    <p className="ul-service-descr">We create intuitive interfaces and seamless user journeys that elevate engagement and drive user satisfaction across platforms.</p>
                                    <a href="service-details.html" className="ul-service-btn">Read More <i className="flaticon-right"></i></a>
                                </div>
                                <div className="ul-service-img">
                                    <img src="/webImages/service-4.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div className="swiper-slide">
                            <div className="ul-service">
                                <div className="ul-service-txt">
                                    <span className="ul-service-sub-title">Search Optimization</span>
                                    <h3 className="ul-service-title">SEO Services</h3>
                                    <p className="ul-service-descr">Boost your visibility with powerful on-page, off-page, and technical SEO strategies that rank your business higher in search results.</p>
                                    <a href="service-details.html" className="ul-service-btn">Read More <i className="flaticon-right"></i></a>
                                </div>
                                <div className="ul-service-img">
                                    <img src="/webImages/service-1.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div className="swiper-slide">
                            <div className="ul-service">
                                <div className="ul-service-txt">
                                    <span className="ul-service-sub-title">Online Growth</span>
                                    <h3 className="ul-service-title">Digital Marketing</h3>
                                    <p className="ul-service-descr">Result-driven marketing solutions including PPC, social media ads, email campaigns, and CRO to increase traffic and conversions.</p>
                                    <a href="service-details.html" className="ul-service-btn">Read More <i className="flaticon-right"></i></a>
                                </div>
                                <div className="ul-service-img">
                                    <img src="/webImages/service-2.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div className="swiper-slide">
                            <div className="ul-service">
                                <div className="ul-service-txt">
                                    <span className="ul-service-sub-title">Social Engagement</span>
                                    <h3 className="ul-service-title">Social Media Management</h3>
                                    <p className="ul-service-descr">From content creation to strategy and analytics, we manage your social presence to boost engagement and build your brand.</p>
                                    <a href="service-details.html" className="ul-service-btn">Read More <i className="flaticon-right"></i></a>
                                </div>
                                <div className="ul-service-img">
                                    <img src="/webImages/service-3.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div className="swiper-slide">
                            <div className="ul-service">
                                <div className="ul-service-txt">
                                    <span className="ul-service-sub-title">Online Store</span>
                                    <h3 className="ul-service-title">E-commerce Solutions</h3>
                                    <p className="ul-service-descr">Scalable, secure, and user-friendly e-commerce platforms tailored to your business—from setup to payment integration.</p>
                                    <a href="service-details.html" className="ul-service-btn">Read More <i className="flaticon-right"></i></a>
                                </div>
                                <div className="ul-service-img">
                                    <img src="/webImages/service-4.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div className="swiper-slide">
                            <div className="ul-service">
                                <div className="ul-service-txt">
                                    <span className="ul-service-sub-title">Visual Identity</span>
                                    <h3 className="ul-service-title">Branding & Identity</h3>
                                    <p className="ul-service-descr">Build a memorable brand with custom logo design, visual identity systems, and brand guidelines that speak to your audience.</p>
                                    <a href="service-details.html" className="ul-service-btn">Read More <i className="flaticon-right"></i></a>
                                </div>
                                <div className="ul-service-img">
                                    <img src="/webImages/service-4.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div className="swiper-slide">
                            <div className="ul-service">
                                <div className="ul-service-txt">
                                    <span className="ul-service-sub-title">Software Solutions</span>
                                    <h3 className="ul-service-title">Software Development</h3>
                                    <p className="ul-service-descr">Tailored software systems including CRMs, ERPs, and cloud apps to streamline operations and accelerate your digital transformation.</p>
                                    <a href="service-details.html" className="ul-service-btn">Read More <i className="flaticon-right"></i></a>
                                </div>
                                <div className="ul-service-img">
                                    <img src="/webImages/service-4.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div className="swiper-slide">
                            <div className="ul-service">
                                <div className="ul-service-txt">
                                    <span className="ul-service-sub-title">Tech Advisory</span>
                                    <h3 className="ul-service-title">IT Consulting</h3>
                                    <p className="ul-service-descr">Get expert advice on digital strategy, tech infrastructure, and cybersecurity to future-proof your business and scale confidently.</p>
                                    <a href="service-details.html" className="ul-service-btn">Read More <i className="flaticon-right"></i></a>
                                </div>
                                <div className="ul-service-img">
                                    <img src="/webImages/service-4.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className="ul-services-vector"></div>
                <div className="ul-services-vector vector-2"></div>
            </div>
        </section>
        /* <!-- SERVICES SECTION END --> */
    );
}
