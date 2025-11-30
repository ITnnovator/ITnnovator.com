'use client';

import TalkToUs from "./TalkToUs";

// import { useEffect } from 'react';
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

export default function TestimonialSwiper() {

    // useEffect(() => {
    //     new Swiper(".ul-reviews-slider", {
    //         slidesPerView: 1,
    //         loop: true,
    //         autoplay: true,
    //         navigation: {
    //             prevEl: ".ul-reviews-slider-nav .prev",
    //             nextEl: ".ul-reviews-slider-nav .next"
    //         }
    //     });
    // }, []);

    
    return (
        // <!-- REVIEW-CONTACT SECTION START -->
        <section className="ul-review-contact ul-section-spacing">
            {/* <!-- bg left image --> */}
            <div className="bg-img">
                <img src="/webImages/contact-review-bg-img.jpg" alt="Image" />
            </div>

            <div className="ul-container">
                <div className="row ul-review-contact-row row-cols-md-12 row-cols-1 align-items-center g-5">
                    {/* <!-- contact --> */}
                    <TalkToUs />

                    {/* <!-- reviews --> */}
                    {/* <div className="col">
                        <div className="ul-reviews">
                            <div>
                                <span className="ul-section-sub-title">Client Reviews</span>
                                <h2 className="ul-section-title">What Our Clients Say About Us</h2>
                                <p className="ul-reviews-heading-descr">
                                    We’re proud to have partnered with clients across industries, delivering tailored digital solutions that drive real results. Here’s what they have to say about working with ITnnovator.
                                </p>
                            </div>


                            <div className="swiper ul-reviews-slider">
                                <div className="swiper-wrapper">
                                     single slide 
                                    <div className="swiper-slide">
                                        <div className="ul-review">
                                            <div className="top">
                                                <div className="ul-review-reviewer-img">
                                                    <img src="/webImages/user.jpg" alt="Reviewer Image" />
                                                </div>

                                                <div className="ul-review-reviewer-info">
                                                    <h3 className="ul-review-reviewer-name">Alicia Gomez</h3>
                                                    <h4 className="ul-review-reviewer-role">Founder, Bloom & Co.</h4>
                                                </div>

                                                <div className="ul-review-quotation-icon flex-shrink-0">
                                                    <img src="/webImages/quotation-icon.svg" alt="quotaion-icon" />
                                                </div>
                                            </div>
                                            <p className="ul-review-txt">Working with ITnnovator was a game changer for my business. They built us a stunning website that not only looks amazing but also performs great on search engines. Their attention to detail and support made the whole process smooth and enjoyable.”</p>
                                        </div>
                                    </div>

                                  single slide
                                    <div className="swiper-slide">
                                        <div className="ul-review">
                                            <div className="top">
                                                <div className="ul-review-reviewer-img">
                                                    <img src="/webImages/user.jpg" alt="Reviewer Image" />
                                                </div>

                                                <div className="ul-review-reviewer-info">
                                                    <h3 className="ul-review-reviewer-name">Kathryn Murphy</h3>
                                                    <h4 className="ul-review-reviewer-role">Marketing Manager, TechNova</h4>
                                                </div>

                                                <div className="ul-review-quotation-icon flex-shrink-0">
                                                    <img src="/webImages/quotation-icon.svg" alt="quotaion-icon" />
                                                </div>
                                            </div>
                                            <p className="ul-review-txt">We hired ITnnovator for SEO and digital marketing, and the results have been fantastic. Our traffic has increased significantly, and we’re seeing a steady rise in conversions. They’re responsive, professional, and clearly know what they’re doing.”</p>
                                        </div>
                                    </div>

                                 single slide
                                    <div className="swiper-slide">
                                        <div className="ul-review">
                                            <div className="top">
                                                <div className="ul-review-reviewer-img">
                                                    <img src="/webImages/user.jpg" alt="Reviewer Image" />
                                                </div>

                                                <div className="ul-review-reviewer-info">
                                                    <h3 className="ul-review-reviewer-name">Sana Alvi</h3>
                                                    <h4 className="ul-review-reviewer-role">Co-Founder, AppSynergy</h4>
                                                </div>

                                                <div className="ul-review-quotation-icon flex-shrink-0">
                                                    <img src="/webImages/quotation-icon.svg" alt="quotaion-icon" />
                                                </div>
                                            </div>
                                            <p className="ul-review-txt">From branding to app development, ITnnovator delivered everything with creativity and expertise. They truly understood our vision and brought it to life better than we imagined. Highly recommended for startups looking for a reliable digital partner. ”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ul-reviews-slider-nav ul-slider-nav">
                                <button className="prev"><i className="flaticon-left"></i></button>
                                <button className="next"><i className="flaticon-next-2"></i></button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        /* <!-- REVIEW-CONTACT SECTION END --> */
    );
}
