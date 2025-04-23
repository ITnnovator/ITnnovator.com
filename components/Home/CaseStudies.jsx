'use client';

import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function CaseStudies() {
    useEffect(() => {
        new Swiper(".ul-case-study-slider", {
            slidesPerView: 3,
            loop: true,
            autoplay: true,
            watchSlidesProgress: true,
            spaceBetween: 27,
            navigation: {
                prevEl: ".ul-case-study-slider-prev",
                nextEl: ".ul-case-study-slider-next"
            },
            breakpoints: {
                0: { slidesPerView: 1, },
                576: { slidesPerView: 1.5, centeredSlides: true },
                768: { slidesPerView: 2, centeredSlides: false },
                992: { slidesPerView: 2.7, centeredSlides: true },
                1200: { slidesPerView: 3, centeredSlides: true },
            }
        })
    }, []);
    return (
        // <!-- CASE STUDY SECTION START -->
        <section className="ul-case-study ul-section-spacing">
            <div className="ul-case-study-container">
                {/* <!-- section heading --> */}
                <div className="ul-section-heading justify-content-between align-items-center align-items-sm-end">
                    <div className="ul-slider-nav d-none d-sm-flex order-2 order-sm-1"><button className="ul-case-study-slider-prev"><i className="flaticon-back"></i></button></div>
                    <div className="left text-center order-1 order-sm-2">
                        <span className="ul-section-sub-title">Latest Case Study</span>
                        <h2 className="ul-section-title">We Deliverd Best Solution</h2>
                    </div>
                    <div className="ul-slider-nav d-none d-sm-flex order-3"><button className="ul-case-study-slider-next"><i className="flaticon-next-1"></i></button></div>
                </div>

                {/* <!-- case studies --> */}
                <div className="swiper ul-case-study-slider">
                    <div className="swiper-wrapper">
                        {/* <!-- single case study --> */}
                        <div className="swiper-slide">
                            <div className="ul-case-study-item">
                                <div className="img"><img src="/webImages/case-study-1.jpg" alt="Case Study Image" /></div>
                                <div className="txt">
                                    <span className="ul-case-study-item-category">Mobile App</span>
                                    <h3 className="ul-case-study-item-title">Product Design</h3>
                                </div>
                                <div className="ul-case-study-item-bottom">
                                    <span className="ul-case-study-item-index">01</span>
                                    <a href="project-details.html" className="ul-case-study-item-btn"><i className="flaticon-next-1"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- single case study --> */}
                        <div className="swiper-slide">
                            <div className="ul-case-study-item">
                                <div className="img"><img src="/webImages/case-study-2.jpg" alt="Case Study Image" /></div>
                                <div className="txt">
                                    <span className="ul-case-study-item-category">Web App</span>
                                    <h3 className="ul-case-study-item-title">Web Development</h3>
                                </div>
                                <div className="ul-case-study-item-bottom">
                                    <span className="ul-case-study-item-index">02</span>
                                    <a href="project-details.html" className="ul-case-study-item-btn"><i className="flaticon-next-1"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- single case study --> */}
                        <div className="swiper-slide">
                            <div className="ul-case-study-item">
                                <div className="img"><img src="/webImages/case-study-3.jpg" alt="Case Study Image" /></div>
                                <div className="txt">
                                    <span className="ul-case-study-item-category">Technology</span>
                                    <h3 className="ul-case-study-item-title">Digital SEO Marketing</h3>
                                </div>
                                <div className="ul-case-study-item-bottom">
                                    <span className="ul-case-study-item-index">03</span>
                                    <a href="project-details.html" className="ul-case-study-item-btn"><i className="flaticon-next-1"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- single case study --> */}
                        <div className="swiper-slide">
                            <div className="ul-case-study-item">
                                <div className="img"><img src="/webImages/case-study-1.jpg" alt="Case Study Image" /></div>
                                <div className="txt">
                                    <span className="ul-case-study-item-category">Mobile App</span>
                                    <h3 className="ul-case-study-item-title">Product Design</h3>
                                </div>
                                <div className="ul-case-study-item-bottom">
                                    <span className="ul-case-study-item-index">04</span>
                                    <a href="project-details.html" className="ul-case-study-item-btn"><i className="flaticon-next-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        /* <!-- CASE STUDY SECTION END --> */
    );
}
