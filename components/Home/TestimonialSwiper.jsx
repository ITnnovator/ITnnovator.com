'use client';

import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function TestimonialSwiper() {
    useEffect(() => {
        new Swiper(".ul-reviews-slider", {
            slidesPerView: 1,
            loop: true,
            autoplay: true,
            navigation: {
                prevEl: ".ul-reviews-slider-nav .prev",
                nextEl: ".ul-reviews-slider-nav .next"
            }
        });
    }, []);
    return (
        // <!-- REVIEW-CONTACT SECTION START -->
        <section className="ul-review-contact ul-section-spacing">
            {/* <!-- bg left image --> */}
            <div className="bg-img">
                <img src="webImages/contact-review-bg-img.jpg" alt="Image" />
            </div>

            <div className="ul-container">
                <div className="row ul-review-contact-row row-cols-md-2 row-cols-1 align-items-center">
                    {/* <!-- contact --> */}
                    <div className="col">
                        <div className="ul-contact-form-wrapper">
                            <div>
                                <span className="ul-section-sub-title">TALK TO US</span>
                                <h2 className="ul-section-title">How May We Help You!</h2>

                                <form action="#" className="ul-contact-form">
                                    <div className="row ul-bs-row row-cols-2 row-cols-xxs-1">
                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="ul-contact-name">Your Name*</label>
                                                <input type="text" name="name" id="ul-contact-name" placeholder="Robot fox" />
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="ul-contact-email">Your Email*</label>
                                                <input type="email" name="email" id="ul-contact-email" placeholder="info@example.com" />
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="ul-contact-subject">Subject*</label>
                                                <input type="text" name="subject" id="ul-contact-subject" placeholder="Subject" />
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="ul-contact-phone">Your Phone*</label>
                                                <input type="tel" name="phone" id="ul-contact-phone" placeholder="+1253 457 7840" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="ul-contact-message">Message*</label>
                                                <textarea name="message" id="ul-contact-message" placeholder="Write Message"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <button type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* <!-- reviews --> */}
                    <div className="col">
                        <div className="ul-reviews">
                            <div>
                                <span className="ul-section-sub-title">Clients Review</span>
                                <h2 className="ul-section-title">What They Say About Our</h2>
                                <p className="ul-reviews-heading-descr">It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.</p>
                            </div>

                            <div className="swiper ul-reviews-slider">
                                <div className="swiper-wrapper">
                                    {/* <!-- single slide --> */}
                                    <div className="swiper-slide">
                                        <div className="ul-review">
                                            <div className="top">
                                                <div className="ul-review-reviewer-img">
                                                    <img src="webImages/user.jpg" alt="Reviewer Image" />
                                                </div>

                                                <div className="ul-review-reviewer-info">
                                                    <h3 className="ul-review-reviewer-name">Kathryn Murphy</h3>
                                                    <h4 className="ul-review-reviewer-role">Medical Assistant</h4>
                                                    <div className="ul-review-rating">
                                                        <i className="flaticon-star"></i>
                                                        <i className="flaticon-star"></i>
                                                        <i className="flaticon-star"></i>
                                                        <i className="flaticon-star"></i>
                                                        <i className="flaticon-star"></i>
                                                    </div>
                                                </div>

                                                <div className="ul-review-quotation-icon flex-shrink-0">
                                                    <img src="webImages/quotation-icon.svg" alt="quotaion-icon" />
                                                </div>
                                            </div>
                                            <p className="ul-review-txt">Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”</p>
                                        </div>
                                    </div>

                                    {/* <!-- single slide --> */}
                                    <div className="swiper-slide">
                                        <div className="ul-review">
                                            <div className="top">
                                                <div className="ul-review-reviewer-img">
                                                    <img src="webImages/user.jpg" alt="Reviewer Image" />
                                                </div>

                                                <div className="ul-review-reviewer-info">
                                                    <h3 className="ul-review-reviewer-name">Kathryn Murphy</h3>
                                                    <h4 className="ul-review-reviewer-role">Medical Assistant</h4>
                                                    <div className="ul-review-rating">
                                                        <i className="flaticon-star"></i>
                                                        <i className="flaticon-star"></i>
                                                        <i className="flaticon-star"></i>
                                                        <i className="flaticon-star"></i>
                                                        <i className="flaticon-star"></i>
                                                    </div>
                                                </div>

                                                <div className="ul-review-quotation-icon flex-shrink-0">
                                                    <img src="webImages/quotation-icon.svg" alt="quotaion-icon" />
                                                </div>
                                            </div>
                                            <p className="ul-review-txt">Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”</p>
                                        </div>
                                    </div>

                                    {/* <!-- single slide --> */}
                                    <div className="swiper-slide">
                                        <div className="ul-review">
                                            <div className="top">
                                                <div className="ul-review-reviewer-img">
                                                    <img src="webImages/user.jpg" alt="Reviewer Image" />
                                                </div>

                                                <div className="ul-review-reviewer-info">
                                                    <h3 className="ul-review-reviewer-name">Kathryn Murphy</h3>
                                                    <h4 className="ul-review-reviewer-role">Medical Assistant</h4>
                                                    <div className="ul-review-rating">
                                                        <i className="flaticon-star"></i>
                                                        <i className="flaticon-star"></i>
                                                        <i className="flaticon-star"></i>
                                                        <i className="flaticon-star"></i>
                                                        <i className="flaticon-star"></i>
                                                    </div>
                                                </div>

                                                <div className="ul-review-quotation-icon flex-shrink-0">
                                                    <img src="webImages/quotation-icon.svg" alt="quotaion-icon" />
                                                </div>
                                            </div>
                                            <p className="ul-review-txt">Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ul-reviews-slider-nav ul-slider-nav">
                                <button className="prev"><i className="flaticon-left"></i></button>
                                <button className="next"><i className="flaticon-next-2"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        /* <!-- REVIEW-CONTACT SECTION END --> */
    );
}
