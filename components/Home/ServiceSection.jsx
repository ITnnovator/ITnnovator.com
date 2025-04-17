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
        <section class="ul-services ul-section-spacing">
            <div class="ul-container">
                {/* <!-- single slide --> */}
                <div class="ul-section-heading">
                    <div class="left">
                        <span class="ul-section-sub-title">Our Services</span>
                        <h2 class="ul-section-title">Best Solutions</h2>
                    </div>
                    <div class="ul-slider-nav ul-services-slider-nav">
                        <button class="prev"><i class="flaticon-back"></i></button>
                        <button class="next"><i class="flaticon-next-1"></i></button>
                    </div>
                </div>

                {/* <!-- services slider --> */}
                <div class="ul-services-slider swiper overflow-visible">
                    <div class="swiper-wrapper">
                        {/* <!-- single slide --> */}
                        <div class="swiper-slide">
                            <div class="ul-service">
                                <div class="ul-service-txt">
                                    <span class="ul-service-sub-title">Digital Security</span>
                                    <h3 class="ul-service-title">Data Guard Sentinel</h3>
                                    <p class="ul-service-descr">Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.</p>
                                    <a href="service-details.html" class="ul-service-btn">Read More <i class="flaticon-right"></i></a>
                                </div>
                                <div class="ul-service-img">
                                    <img src="webImages/service-1.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div class="swiper-slide">
                            <div class="ul-service">
                                <div class="ul-service-txt">
                                    <span class="ul-service-sub-title">Digital Shop</span>
                                    <h3 class="ul-service-title">Woo commerce</h3>
                                    <p class="ul-service-descr">Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.</p>
                                    <a href="service-details.html" class="ul-service-btn">Read More <i class="flaticon-right"></i></a>
                                </div>
                                <div class="ul-service-img">
                                    <img src="webImages/service-2.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div class="swiper-slide">
                            <div class="ul-service">
                                <div class="ul-service-txt">
                                    <span class="ul-service-sub-title">CRM solutions</span>
                                    <h3 class="ul-service-title">CRM Solutions</h3>
                                    <p class="ul-service-descr">Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.</p>
                                    <a href="service-details.html" class="ul-service-btn">Read More <i class="flaticon-right"></i></a>
                                </div>
                                <div class="ul-service-img">
                                    <img src="webImages/service-3.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div class="swiper-slide">
                            <div class="ul-service">
                                <div class="ul-service-txt">
                                    <span class="ul-service-sub-title">Web Design</span>
                                    <h3 class="ul-service-title">Web Design</h3>
                                    <p class="ul-service-descr">Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.</p>
                                    <a href="service-details.html" class="ul-service-btn">Read More <i class="flaticon-right"></i></a>
                                </div>
                                <div class="ul-service-img">
                                    <img src="webImages/service-4.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div class="swiper-slide">
                            <div class="ul-service">
                                <div class="ul-service-txt">
                                    <span class="ul-service-sub-title">Digital Security</span>
                                    <h3 class="ul-service-title">Data Guard Sentinel</h3>
                                    <p class="ul-service-descr">Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.</p>
                                    <a href="service-details.html" class="ul-service-btn">Read More <i class="flaticon-right"></i></a>
                                </div>
                                <div class="ul-service-img">
                                    <img src="webImages/service-1.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div class="swiper-slide">
                            <div class="ul-service">
                                <div class="ul-service-txt">
                                    <span class="ul-service-sub-title">Digital Shop</span>
                                    <h3 class="ul-service-title">Woo commerce</h3>
                                    <p class="ul-service-descr">Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.</p>
                                    <a href="service-details.html" class="ul-service-btn">Read More <i class="flaticon-right"></i></a>
                                </div>
                                <div class="ul-service-img">
                                    <img src="webImages/service-2.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div class="swiper-slide">
                            <div class="ul-service">
                                <div class="ul-service-txt">
                                    <span class="ul-service-sub-title">CRM solutions</span>
                                    <h3 class="ul-service-title">CRM Solutions</h3>
                                    <p class="ul-service-descr">Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.</p>
                                    <a href="service-details.html" class="ul-service-btn">Read More <i class="flaticon-right"></i></a>
                                </div>
                                <div class="ul-service-img">
                                    <img src="webImages/service-3.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- single slide --> */}
                        <div class="swiper-slide">
                            <div class="ul-service">
                                <div class="ul-service-txt">
                                    <span class="ul-service-sub-title">Web Design</span>
                                    <h3 class="ul-service-title">Web Design</h3>
                                    <p class="ul-service-descr">Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.</p>
                                    <a href="service-details.html" class="ul-service-btn">Read More <i class="flaticon-right"></i></a>
                                </div>
                                <div class="ul-service-img">
                                    <img src="webImages/service-4.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div class="ul-services-vector"></div>
                <div class="ul-services-vector vector-2"></div>
            </div>
        </section>
        /* <!-- SERVICES SECTION END --> */
    );
}
