'use client';

import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { services } from "@/data/servicesData";
import Link from 'next/link';


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

    // Filter only main services
    const mainServices = services.filter(
        (service) => service.type === "main_service"
    );

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
                        {mainServices.map((service) => (
                            <div className="swiper-slide" key={service.id}>
                                <div className="ul-service">
                                    <div className="ul-service-txt">
                                        <span className="ul-service-sub-title"> {service.tags}</span>
                                        <h3 className="ul-service-title">{service.title}</h3>
                                        <p className="ul-service-descr"> {service.description}</p>
                                        <Link href={`/services/${service.slug}`} className="ul-service-btn">Read More <i className="flaticon-right"></i></Link>
                                    </div>
                                    <div className="ul-service-img">
                                        <img src={`/${service.img}`} alt="Image" />
                                    </div>
                                </div>
                            </div>
                        ))}
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
