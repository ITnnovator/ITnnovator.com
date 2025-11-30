"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function AboutSection() {
    useEffect(() => {
        const cards = document.querySelectorAll(".ul-about-content-tab");

        const checkCardPosition = () => {
            const viewportHeight = window.innerHeight;
            let totalWidth = 0;

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const top = rect.top;

                // Add or remove 'class-80'
                if (top <= viewportHeight * 0.8) {
                    card.classList.add("class-80");
                } else {
                    card.classList.remove("class-80");
                }

                // Add or remove 'class-20'
                if (top <= viewportHeight * 0.2) {
                    card.classList.add("class-20");
                } else {
                    card.classList.remove("class-20");
                }

                const tabNav = card.querySelector(".tab-sticky-nav");

                if (tabNav) {
                    if (index === 0) {
                        tabNav.style.marginLeft = `0px`;
                    } else {
                        tabNav.style.marginLeft = `${totalWidth}px`;
                    }

                    totalWidth += tabNav.offsetWidth + 10;
                }
            });
        };

        // Initial run and scroll listener
        checkCardPosition();
        window.addEventListener("scroll", checkCardPosition);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", checkCardPosition);
        };
    }, []);

    return (
        // <!-- ABOUT SECTION START -->
        <section className="ul-about ul-section-spacing">
            <div className="ul-about-container">
                <div className="ul-about-content-wrapper">
                    <div className="ul-about-content-nav ul-about-sticky d-none">
                        <Link href="#about-tab-1">
                            Problem Solving <i className="flaticon-top-right"></i>
                        </Link>
                        <Link href="#about-tab-2">
                            Our Mission <i className="flaticon-top-right"></i>
                        </Link>
                        <Link href="#about-tab-3">
                            Our Vision <i className="flaticon-top-right"></i>
                        </Link>
                    </div>
                    <div className="ul-about-content-tabs">
                        <div
                            className="ul-about-content-tab tab ul-about-sticky"
                            id="about-tab-1"
                        >
                            <Link href="#about-tab-1" className="tab-sticky-nav">
                                Problem Solving <i className="flaticon-top-right"></i>
                            </Link>
                            <div className="row row-cols-md-2 row-cols-1 align-items-center">
                                <div className="col">
                                    <div className="ul-about-content-tab-img">
                                        <img
                                            src="/webImages/about-tab-img.png"
                                            alt="About Tab Image"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="ul-about-content-tab-txt">
                                        <span className="ul-section-sub-title">About Us</span>
                                        <h2 className="ul-section-title">
                                            We Drive Business Growth Through Smart Technology
                                        </h2>
                                        <p className="ul-about-content-tab-descr">
                                            We use cutting-edge technology to streamline operations, elevate digital presence, and deliver measurable growth for your business.
                                        </p>

                                        <ul className="ul-about-content-tab-list">
                                            <li>Custom web and app solutions tailored to your goals.</li>
                                            <li>ROI-driven marketing strategies for long-term success.</li>
                                            <li>Expert IT support and consultancy when you need it.</li>
                                        </ul>

                                        <Link href="about" className="ul-btn ul-btn--2">
                                            <span>Know More</span>
                                            <i className="flaticon-up-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="ul-about-content-tab tab ul-about-sticky"
                            id="about-tab-2"
                        >
                            <Link href="#about-tab-2" className="tab-sticky-nav">
                                Our Mission <i className="flaticon-top-right"></i>
                            </Link>
                            <div className="row row-cols-md-2 row-cols-1 align-items-center">
                                <div className="col">
                                    <div className="ul-about-content-tab-img">
                                        <img
                                            src="/webImages/about-tab-img-2.png"
                                            alt="About Tab Image"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="ul-about-content-tab-txt">
                                        <span className="ul-section-sub-title">Our Mission</span>
                                        <h2 className="ul-section-title">
                                            Building Smart Digital Tools for Business Success
                                        </h2>
                                        <p className="ul-about-content-tab-descr">
                                            We craft innovative digital solutions that help businesses grow, streamline operations, and thrive in an ever-evolving tech landscape.
                                        </p>

                                        <ul className="ul-about-content-tab-list">
                                            <li>Driving growth through tailored tech strategies.</li>
                                            <li>Delivering quality-focused development and design.</li>
                                            <li>Supporting success with expert digital consultancy.</li>
                                        </ul>


                                        <Link href="about" className="ul-btn ul-btn--2">
                                            <span>Know More</span>
                                            <i className="flaticon-up-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="ul-about-content-tab tab ul-about-sticky"
                            id="about-tab-3"
                        >
                            <Link href="#about-tab-2" className="tab-sticky-nav">
                                Our Mission <i className="flaticon-top-right"></i>
                            </Link>
                            <div className="row row-cols-md-2 row-cols-1 align-items-center">
                                <div className="col">
                                    <div className="ul-about-content-tab-img">
                                        <img
                                            src="/webImages/about-tab-img-3.png"
                                            alt="About Tab Image"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="ul-about-content-tab-txt">
                                        <span className="ul-section-sub-title">Our Vision</span>
                                        <h2 className="ul-section-title">
                                            Fueling Business Success With Technology
                                        </h2>
                                        <p className="ul-about-content-tab-descr">
                                            We help businesses unlock their full potential by delivering innovative digital solutions, powered by modern technology and expert strategy.
                                        </p>

                                        <ul className="ul-about-content-tab-list">
                                            <li>Customized IT services that drive growth.</li>
                                            <li>High-performance websites and mobile apps.</li>
                                            <li>Scalable strategies for digital success.</li>
                                        </ul>

                                        <Link href="about" className="ul-btn ul-btn--2">
                                            <span>Know More</span>
                                            <i className="flaticon-up-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ul-about-vectors">
                <img src="/webImages/about-vector-1.svg" alt="about-vector-1" className="vector-1" />
                <img src="/webImages/about-vector-2.png" alt="about-vector-2" className="vector-2" />
            </div>
        </section>
        // <!-- ABOUT SECTION END -->
    );
}
