"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import FsLightbox from 'fslightbox-react';

export default function Banner() {
    const [toggler, setToggler] = useState(false);
    // console.log(toggler)
    useEffect(() => {
        if (typeof window !== "undefined") {
            document.querySelectorAll(".ul-banner-slider").forEach((el) => {
                new Swiper(el, {
                    modules: [Autoplay],
                    slidesPerView: 1,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    loop: true,
                    speed: 700,
                    allowTouchMove: false,
                });
            });
        };
    }, []);

    return (
        //  <!-- BANNER SECTION START -->
        <section className="ul-banner">
            <div className="ul-banner-container">
                <div className="ul-banner-txt">
                    <span className="ul-banner-sub-title">
                        Innovative Solutions for Business
                    </span>
                    <h1 className="ul-banner-title">
                        Reliable IT Solutions Designed to Power Your Business
                    </h1>
                    <Link href="/services" className="ul-banner-btn">
                        Our Services <i className="flaticon-top-right"></i>{" "}
                    </Link>
                </div>

                {/* <!-- vectors --> */}
                <div className="ul-banner-vectors">
                    <img
                        src="webImages/banner-vector-2.svg"
                        alt="Vector"
                        className="vector-1"
                    />
                    <img
                        src="webImages/banner-vector-3.svg"
                        alt="Vector"
                        className="vector-2"
                    />
                </div>

                {/* <!-- imgs --> */}
                <div className="ul-banner-slider-wrapper">
                    {/* <!-- img slider 1 --> */}
                    <div
                        className="ul-banner-slider swiper"
                        id="ul-banner-slider-1"
                        aria-label="Banner Slider"
                    >
                        <div className="swiper-wrapper">
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/blog-b-1.jpg" alt="Image" />
                                </div>
                            </div>
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/blog-b-2.jpg" alt="Image" />
                                </div>
                            </div>
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/blog-b-3.jpg" alt="Image" />
                                </div>
                            </div>
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/service-details.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- img slider 2 --> */}
                    <div
                        className="ul-banner-slider swiper"
                        id="ul-banner-slider-2"
                        aria-label="Banner Slider"
                    >
                        <div className="swiper-wrapper">
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/blog-b-2.jpg" alt="Image" />
                                </div>
                            </div>
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/blog-b-3.jpg" alt="Image" />
                                </div>
                            </div>
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/service-details.jpg" alt="Image" />
                                </div>
                            </div>
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/blog-b-1.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- img slider 3 --> */}
                    <div
                        className="ul-banner-slider swiper"
                        id="ul-banner-slider-3"
                        aria-label="Banner Slider"
                    >
                        <div className="swiper-wrapper">
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/blog-b-3.jpg" alt="Image" />
                                </div>
                            </div>
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/service-details.jpg" alt="Image" />
                                </div>
                            </div>
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/blog-b-1.jpg" alt="Image" />
                                </div>
                            </div>
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/blog-b-2.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- img slider 4 --> */}
                    <div
                        className="ul-banner-slider swiper"
                        id="ul-banner-slider-4"
                        aria-label="Banner Slider"
                    >
                        <div className="swiper-wrapper">
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/service-details.jpg" alt="Image" />
                                </div>
                            </div>
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/blog-b-1.jpg" alt="Image" />
                                </div>
                            </div>
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/blog-b-2.jpg" alt="Image" />
                                </div>
                            </div>
                            {/* <!-- single img --> */}
                            <div className="swiper-slide">
                                <div className="ul-banner-img-slide">
                                    <img src="webImages/blog-b-3.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- stats --> */}
                <div className="ul-banner-stats">
                    {/* <!-- single stat --> */}
                    <div className="ul-banner-stat">
                        <span className="ul-banner-stat-number">20.5K</span>
                        <span className="ul-banner-stat-text">Projects Done</span>
                    </div>
                    {/* <!-- single stat --> */}
                    <div className="ul-banner-stat">
                        <span className="ul-banner-stat-number">100.5K</span>
                        <span className="ul-banner-stat-text">Happy Clients</span>
                    </div>
                    {/* <!-- single stat --> */}
                    <div className="ul-banner-stat">
                        <span className="ul-banner-stat-number">150.5K</span>
                        <span className="ul-banner-stat-text">Team Members</span>
                    </div>
                    {/* <!-- single stat --> */}
                    <div className="ul-banner-stat">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setToggler(!toggler);
                            }}
                            className="ul-banner-stat-btn"
                        >
                            <span className="btn-txt">Play Reel</span>
                            <i className="flaticon-play-button-arrowhead"></i>
                        </a>

                        <FsLightbox
                            toggler={toggler}
                            sources={['https://www.youtube.com/watch?v=WUB2pSkwN2M']}
                        />
                    </div>
                </div>
            </div>
        </section>
        // <!-- BANNER SECTION END -->
    );
}
