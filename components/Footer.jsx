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
                            <a href="index-2.html">
                                <img src="webImages/logo-white.svg" alt="logo" />
                            </a>
                            <div className="ul-footer-socials">
                                <a href="#">
                                    <i className="flaticon-facebook-app-symbol"></i>
                                </a>
                                <a href="#">
                                    <i className="flaticon-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="flaticon-linkedin-big-logo"></i>
                                </a>
                                <a href="#">
                                    <i className="flaticon-instagram"></i>
                                </a>
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
                                    <a href="tel:20866660112">+208-6666-0112</a>
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
                                    <a href="mailto:info@exmple.com">info@exmple.com</a>
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
                                It is a long established fact that a reader will be distracted
                                the road readable content of a page when looking at layout.
                            </p>
                            <a href="contact.html" className="ul-footer-about-btn">
                                Contact us <i className="flaticon-top-right"></i>
                            </a>
                        </div>

                        <div className="ul-footer-widget">
                            <h3 className="ul-footer-widget-title">Our Best Service</h3>

                            <div className="ul-footer-widget-links">
                                <a href="service-details.html">IT Management</a>
                                <a href="service-details.html">SEO Optimization</a>
                                <a href="service-details.html">Web Development</a>
                                <a href="service-details.html">Cyber Security</a>
                                <a href="service-details.html">Data Security</a>
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
                            <div className="ul-footer-widget-links">
                                <span>
                                    Monday – Friday : <span className="colored">8am – 4pm</span>
                                </span>
                                <span>
                                    Saturday : <span className="colored">8am – 12am</span>
                                </span>
                            </div>
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
                                            I agree with the <a href="#">Privacy Policy</a>
                                        </span>
                                    </label>
                                </div>
                            </form>
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
                    src="webImages/footer-vector-1.svg"
                    alt="Footer Image"
                    className="ul-footer-vector-1"
                />
                <img
                    src="webImages/footer-vector-2.svg"
                    alt="Footer Image"
                    className="ul-footer-vector-2"
                />
            </div>
        </footer>
        // <!-- FOOTER SECTION END -->
    );
}
