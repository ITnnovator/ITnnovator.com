import Link from "next/link";

export default function Footer() {
    return (
        // <!-- FOOTER SECTION START -->
        <footer className="ul-footer">
            {/* <!-- footer top --> */}
            <div className="ul-footer-top">
                <div className="ul-container">
                    <div className="ul-footer-top-contact-infos">
                        {/* <!-- single info --> */}
                        <div className="ul-footer-top-logo">
                            <Link href="/">
                                <img src="/webImages/itnnovatorLogoDark.png" alt="itnnovatorLogoDark" />
                            </Link>
                            <div className="ul-footer-socials">
                                <Link href="https://www.facebook.com/itnnovator" target="_blank">
                                    <i className="flaticon-facebook-app-symbol"></i>
                                </Link>
                                <Link href="https://www.linkedin.com/company/itnnovator" target="_blank">
                                    <i className="flaticon-linkedin-big-logo"></i>
                                </Link>
                                <Link href="https://www.instagram.com/itnnovator" target="_blank">
                                    <i className="flaticon-instagram"></i>
                                </Link>
                            </div>
                        </div>

                        {/* <!-- single info --> */}
                        <div className="ul-footer-top-contact-info">
                            {/* <!-- icon --> */}
                            <div className="ul-footer-top-contact-info-icon">
                                <i className="flaticon-telephone"></i>
                            </div>
                            {/* <!-- txt --> */}
                            <div className="ul-footer-top-contact-info-txt">
                                <span className="ul-footer-top-contact-info-label">Call Now</span>
                                <h5 className="ul-footer-top-contact-info-address">
                                    <Link href="tel:923142111790">+92 314 2111790</Link>
                                </h5>
                            </div>
                        </div>

                        {/* <!-- single info --> */}
                        <div className="ul-footer-top-contact-info">
                            {/* <!-- icon --> */}
                            <div className="ul-footer-top-contact-info-icon">
                                <i className="flaticon-mail"></i>
                            </div>
                            {/* <!-- txt --> */}
                            <div className="ul-footer-top-contact-info-txt">
                                <span className="ul-footer-top-contact-info-label">Email Us</span>
                                <h5 className="ul-footer-top-contact-info-address">
                                    <Link href="mailto:info@itnnovator.com">info@itnnovator.com</Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- footer middle --> */}
            <div className="ul-footer-middle">
                <div className="ul-container">
                    <div className="ul-footer-middle-wrapper wow animate__fadeInUp">
                        <div className="ul-footer-about">
                            <h3 className="ul-footer-widget-title">About Us</h3>
                            <p className="ul-footer-about-txt">
                            ITnnovator is a digital solutions company specializing in website development, SEO, and social media marketing.
                            We help brands strengthen their online presence with responsive websites and targeted strategies aligned with business goals.
                            </p>
                        </div>

                        <div className="ul-footer-widget">
                            <h3 className="ul-footer-widget-title">Our Best Service</h3>

                            <div className="ul-footer-widget-links">
                                <Link href="/">Web Development</Link>
                                <Link href="/">App Development</Link>
                                <Link href="/">SEO</Link>
                                <Link href="/">Digital Marketing</Link>
                                <Link href="/">Social Media Management</Link>
                            </div>
                        </div>

                        <div className="ul-footer-widget ul-footer-recent-posts">
                            <h3 className="ul-footer-widget-title">Important Quick Link</h3>

                            <div className="ul-footer-widget-links">
                                <Link href="/about">About Us</Link>
                                <Link href="/services">Our Services</Link>
                                <Link href="/blog">Our Blogs</Link>
                                <Link href="/faq">FAQ'S</Link>
                                <Link href="/contact">Contact Us</Link>
                            </div>
                        </div>

                        <div className="ul-footer-widget ul-nwsltr-widget">
                            <h3 className="ul-footer-widget-title">Contact Us</h3>
                            <form action="#" className="ul-nwsltr-form">
                                <div className="top">
                                    <input
                                        type="email"
                                        name="email"
                                        id="nwsltr-email"
                                        placeholder="Your Email Address"
                                        className="ul-nwsltr-input"
                                    />
                                    <button type="submit">
                                        <i className="flaticon-next-1"></i>
                                    </button>
                                </div>

                                <div className="agreement">
                                    <label htmlFor="nwsltr-agreement" className="ul-checkbox-wrapper">
                                        <input
                                            type="checkbox"
                                            name="agreement"
                                            id="nwsltr-agreement"
                                            hidden
                                        />
                                        <span className="ul-checkbox">
                                            <i className="flaticon-check-1"></i>
                                        </span>
                                        <span className="ul-checkbox-txt">
                                            I agree with the <Link href="#">Privacy Policy</Link>
                                        </span>
                                    </label>
                                </div>
                            </form>
                            <Link href="contact" className="ul-footer-about-btn mt-5">
                                Contact us <i className="flaticon-top-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- footer bottom --> */}
            <div className="ul-container">
                <div className="ul-footer-bottom">
                    <div className="ul-footer-bottom-wrapper justify-content-center">
                        <p className="copyright-txt">
                            Copyright &copy; 2025 All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- vector --> */}
            <div className="ul-footer-vectors">
                <img
                    src="/webImages/footer-vector-1.svg"
                    alt="Footer Image"
                    className="ul-footer-vector-1"
                />
                <img
                    src="/webImages/footer-vector-2.svg"
                    alt="Footer Image"
                    className="ul-footer-vector-2"
                />
            </div>
        </footer>
        // <!-- FOOTER SECTION END -->
    );
}
